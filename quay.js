// === 1) Check cookie đăng nhập ===
(function ensureLogin() {
  try {
    const u = document.cookie.split("SPC_U=")[1]?.split(";")[0];
    if (!u) throw new Error("No SPC_U");
  } catch {
    window.location = "https://shopee.vn/buyer/login?next=https://live.shopee.vn/share";
  }
})();

let list_vq = [];
let quay_status = true;
let countdownInterval = null;

// === 2) UI setup ===
(function mountUI() {
  const wrap = document.getElementsByClassName("share__PageWrapper-wtg3fv-3")[0];
  if (!wrap) return;

  const container = document.createElement("div");
  container.innerHTML = `
  <div>
    <div style="height:48px">
      <div class="app-wrapper" style="max-width:600px;">
        <div class="icon-style" style="display:flex;align-items:center;">
          <div style="margin-right:8px;width:32px;height:32px">
            <span width="32px" height="32px" class="ResponsiveImage-wkqiq1-0 jxTcAl"></span>
          </div>
          <div id="shopname">Shopee Live</div>
        </div>
        <button id="statusBtn" style="height:28px;background-color:#ee4d2d;border-radius:4px;font-weight:600;font-size:13px;color:#fff;border:0px">
          <div>
            <span>🎡</span>
            <span id="coin">0</span>
            <span>🟡 - </span><span id="count">00:00</span>
          </div>
        </button>
      </div>
    </div>
    <div id="logs" style="padding:12px;"></div>
  </div>`;
  wrap.innerHTML = "";
  wrap.appendChild(container);
})();

function logLine(text) {
  const logs = document.getElementById("logs");
  if (!logs) return;
  const row = document.createElement("div");
  row.textContent = text;
  logs.appendChild(row);
}

function getCurrentTime() {
  const now = new Date();
  const pad = (n) => (n < 10 ? "0" + n : "" + n);
  return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function coudMs(waitMs) {
  clearInterval(countdownInterval);
  const endTime = Date.now() + Math.max(0, waitMs);
  countdownInterval = setInterval(() => {
    const now = Date.now();
    const timeLeft = Math.max(0, endTime - now);
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    const display = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    const c = document.getElementById("count");
    if (c) c.textContent = display;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

// === 3) Gọi quay ===
async function quay(sessionId, drawId, { maxRetries = 30, baseDelay = 300 } = {}) {
  let attempt = 0;
  while (quay_status && attempt <= maxRetries) {
    attempt++;
    try {
      const res = await fetch(`https://live.shopee.vn/api/v1/draw/session/${sessionId}/play`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draw_id: drawId }),
        credentials: "same-origin"
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (data?.err_code === 0) {
        // 👉 chỉ in log khi quay được
        const prize = data?.data?.prize?.amount?.replace?.(".000000", "") ?? "0";
        logLine(`${getCurrentTime()} - ${prize}🟡 (${sessionId}/${drawId})`);

        const daily = data?.data?.play_info?.daily_play_times ?? 0;
        if (daily >= 10) {
          quay_status = false;
          document.getElementById("shopname").textContent = "Hết lượt quay hôm nay";
          document.getElementById("coin").textContent = "0";
          return true;
        }
        return true;
      }

      // 7917006: chưa đến giờ → retry
      if (data?.err_code === 7917006) {
        const delay = Math.min(5000, baseDelay * attempt);
        await new Promise(r => setTimeout(r, delay));
        continue;
      }

      // 7917030: hết lượt
      if (data?.err_code === 7917030) {
        quay_status = false;
        document.getElementById("shopname").textContent = "Hết lượt quay hôm nay";
        document.getElementById("coin").textContent = "0";
        return false;
      }

      return false;
    } catch {
      const delay = Math.min(5000, baseDelay * attempt);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  return false;
}

// === 4) Lấy danh sách spinner từ Google Script API ===
async function tim_vq_loop() {
  const API = "https://script.google.com/macros/s/AKfycbyobr7LWkEQjy0Kvu-_eRoTgTG-aWEPC8Lk81l6pIYar85KIz1BoZfYijcp3zjghvYhPA/exec";
  while (quay_status) {
    try {
      const res = await fetch(API);
      if (res.ok) {
        const arr = await res.json();
        arr.forEach(item2 => {
          if (!list_vq.some(item1 => item1.sessionId === item2.sessionId && item1.drawId === item2.drawId)) {
            list_vq.push(item2);
          }
        });
      }
    } catch {}
    await new Promise(r => setTimeout(r, 5000));
  }
}

// === 5) Chơi theo lượt sớm nhất ===
async function choi_loop() {
  while (quay_status) {
    if (!list_vq.length) {
      await new Promise(r => setTimeout(r, 1000));
      continue;
    }

    let minItem = null;
    for (const it of list_vq) {
      if (!it?.startTime) continue;
      if (!minItem || it.startTime < minItem.startTime) minItem = it;
    }
    if (!minItem) continue;

    const idx = list_vq.findIndex(x => x.sessionId === minItem.sessionId && x.drawId === minItem.drawId);
    if (idx >= 0) list_vq.splice(idx, 1);

    const now = Date.now();
    const waitTime = minItem.startTime - now - 2000;

    document.getElementById("shopname").textContent = minItem.userName || "Shopee Live";
    document.getElementById("coin").textContent = `${minItem.maxcoin ?? 0}`;

    if (waitTime > 0) {
      coudMs(waitTime);
      await new Promise(r => setTimeout(r, waitTime));
    }

    await quay(minItem.sessionId, minItem.drawId);
  }
  clearInterval(countdownInterval);
}

// === 6) Khởi động ===
(async function start() {
  tim_vq_loop();
  setTimeout(() => choi_loop(), 3000);
})();
