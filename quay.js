try {
    document.cookie.split("SPC_U=")[1].split(";")[0];
} catch (error) {
    window.location="https://shopee.vn/buyer/login?next=https://live.shopee.vn/share";
};
let list_vq = [];
let quay_status = true;
document.getElementsByClassName("share__PageWrapper-wtg3fv-3")[0].innerHTML = `<div><div style="height:48px"><div class="app-wrapper" style="max-width: 600px;"><div class="icon-style"><div style="margin-right:8px;width:32px;height:32px"><span width="32px" height="32px" class="ResponsiveImage-wkqiq1-0 jxTcAl"></span></div><div id="shopname">Shopee Live</div></div><button style="height:28px;background-color:#ee4d2d;border-radius:4px;font-weight:600;font-size:13px;color:#ffffff;border:0px" class="Button__StyledButton-d958no-0 fWGRcm"><div><a>🎡</a>
<a id="coin">0</a>
<a>🟡 - </a><a id="count">00:00</a></div></button></div></div>
<div class="Danmaku__ScrollContainer-sc-1rxc6pa-1 crXWMY" style="
    padding: 12px;
"><div><span class="Item__Username-sc-1iv8r0f-1 cvQTnw">log:</span><span class="Item__Content-sc-1iv8r0f-2 dNqNNO"> </span></div></div></div>`
function coud(seconds) {
    var endTime = Date.now() + seconds;
    var countdownInterval = setInterval(function () {
        var now = Date.now();
        var timeLeft = Math.max(0, endTime - now); // Đảm bảo không có giá trị âm
        var minutes = Math.floor(timeLeft / 60000);
        var remainingSeconds = Math.floor((timeLeft % 60000) / 1000);
        var display = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
        document.getElementById("count").textContent = display;
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
};
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    function formatTimeUnit(unit) {
        return unit < 10 ? '0' + unit : unit;
    }
    var currentTime = formatTimeUnit(hours) + ':' + formatTimeUnit(minutes) + ':' + formatTimeUnit(seconds);
    return currentTime;
};
function quay(se,id) {
    fetch("https://live.shopee.vn/api/v1/draw/session/"+se+"/play", {
  "headers": {
        'Host': 'live.shopee.vn',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
  },
  "body": '{"draw_id":'+id+'}',
  "method": "POST",
  "credentials": "same-origin"
}).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json(); // Chuyển đổi phản hồi thành JSON
})
.then(data => {
  //console.log(data.data.allSpinner); // Xử lý dữ liệu trả về
  if (data.err_code==7917006) {
      quay(se,id);
  };
  if (data.err_code==0) {
      document.getElementsByClassName("Danmaku__ScrollContainer-sc-1rxc6pa-1 crXWMY")[0].insertAdjacentHTML('afterend', `<div><span class="Item__Content-sc-1iv8r0f-2">`+getCurrentTime()+` - quay được `+data.data.prize.amount.replace(".000000","")+`🟡</span></div>`);
      if (data.data.play_info.daily_play_times == 10) {
          quay_status = false;
          document.getElementById("shopname").innerHTML = "Bạn đã hết lượt quay hôm nay, quay lại sau 23:00.";
          document.getElementById("coin").innerHTML = "0";
    }
  
  };
  if (data.err_code==7917030) {
      quay_status = false;
      document.getElementById("shopname").innerHTML = "Bạn đã hết lượt quay hôm nay, quay lại sau 23:00.";
      document.getElementById("coin").innerHTML = "0";
  };

})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
}

function tim_vq() {
    try {
        fetch("https://script.google.com/macros/s/AKfycbyobr7LWkEQjy0Kvu-_eRoTgTG-aWEPC8Lk81l6pIYar85KIz1BoZfYijcp3zjghvYhPA/exec", {
            method: "GET",
            headers: {
                "accept": "application/json, text/plain, */*",
            }
        })
        .then(response => {
            if (!response.ok) throw new Error('Lỗi khi fetch: ' + response.statusText);
            return response.json();
        })
        .then(data => {
            data.forEach(item2 => {
                const exists = list_vq.some(item1 => item1.sessionId === item2.sessionId);
                if (!exists) {
                    // Nếu startTime là số (timestamp), thì chuyển sang Date ISO string nếu cần
                    item2.startTime = new Date(item2.startTime).toISOString();
                    list_vq.push(item2);
                }
            });
        })
        .catch(error => console.error("Fetch thất bại:", error));

        setTimeout(() => {
            if (quay_status) tim_vq();
        }, 5000);

    } catch (error) {
        console.error('Lỗi bất ngờ trong tim_vq:', error);
    }
};

function choi() {
    let minStartTimeElement = list_vq.reduce((minElement, currentElement) => {
        return new Date(currentElement.startTime) < new Date(minElement.startTime) ? currentElement : minElement;
    });
    const indexToRemove = list_vq.findIndex(element => element._id === minStartTimeElement._id);
    if (indexToRemove !== -1) {
        list_vq.splice(indexToRemove, 1);
    }
    const now = new Date().getTime();
    const minStartTime = new Date(minStartTimeElement.startTime).getTime();
    const waitTime = minStartTime - now - 2000;
    
    if (waitTime > 0) {
        console.log(`${minStartTimeElement.shopName} - Chờ trong ${waitTime} ms...`);
        if (minStartTimeElement.shopName == null) {
            document.getElementById("shopname").innerHTML = minStartTimeElement.userName;
        } else {
            document.getElementById("shopname").innerHTML = minStartTimeElement.shopName;
        }
        document.getElementById("coin").innerHTML = minStartTimeElement.maxcoin;
        coud(waitTime);
        setTimeout(() => {
            console.log('Đã chờ xong.');
            // Thực hiện hành động sau khi chờ xong
            quay(minStartTimeElement.sessionId,minStartTimeElement.drawId)
            if (quay_status) {
                choi();
            }
            
        }, waitTime);
    } else {
        console.log('Thời gian chờ đã qua.');
        console.log('Danh sách còn lại:', list_vq);
        choi();
    }
}
tim_vq();
        setTimeout(() => {
            choi();
        }, 3000);
