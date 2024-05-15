function fetchData(ss_id) {
  if (document.getElementById(ss_id) != null) {
      let coin_id = 0
      var xhr = new XMLHttpRequest();
      var url = `https://live.shopee.vn/api/v1/session/${ss_id}/coin/user_config?uid=523499622`;
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.data && response.data.remain_locks !== 0) {
            console.log("Số xu đang nhận:", response.data.coins_per_claim);
            coin_id = response.data.coin_id
            lock_coin(response.data.coin_id, ss_id, response.data.coins_per_claim);
          } else {
            // Nếu coin_id vẫn là 0, tiếp tục gửi yêu cầu lại
            fetchData(ss_id);
          }
        }
      };
    
      xhr.open("GET", url, true);
      xhr.send();
  }
}

function lock_coin(coin_id, ss_id, coin) {
    var xhr = new XMLHttpRequest();
    var url = `https://live.shopee.vn/api/v1/session/${ss_id}/coin/lock`;
    var data = JSON.stringify({"uid": 1756170, "coin_id": coin_id});
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
          var responseData = JSON.parse(xhr.responseText);
    
          if (responseData.err_code == 0) {
	    document.getElementById(ss_id).getElementsByClassName("m-LiveList-CardTips-card-tag m-LiveList-CardTips-card-live-icon")[0].textContent = coin;
            coud(responseData.data.require_wait_time, ss_id)
            setTimeout(function() {
              can_claim(coin_id, ss_id);
            }, responseData.data.require_wait_time*1000); // chờ n giây

          } else {
            // Nếu err_code khác 0
            console.log("lỗi lock xu: ", responseData.err_msg)
            fetchData(ss_id)
          }
        } else {
          console.log("(lock_coin)Yêu cầu POST không thành công. Mã trạng thái:", xhr.status);
        }
      }
    };
    xhr.send(data);
}

function can_claim(coin_id, ss_id) {
    var xhr = new XMLHttpRequest();
    var url = `https://live.shopee.vn/api/v1/session/${ss_id}/coin/can_claim`;
    var data = JSON.stringify({"uid": 1756170, "coin_id": coin_id});
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
          var responseData = JSON.parse(xhr.responseText);
    
          console.log("Yêu cầu POST thành công!");
          claim(coin_id, ss_id)
        } else {
          console.log("(can_claim) Yêu cầu POST không thành công. Mã trạng thái:", xhr.status);
        }
      }
    };
    xhr.send(data);
};

function claim(coin_id, ss_id) {
    var xhr = new XMLHttpRequest();
    var url = `https://live.shopee.vn/api/v1/session/${ss_id}/coin/claim`;
    var data = JSON.stringify({"uid": 1756170, "coin_id": coin_id});
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
          var responseData = JSON.parse(xhr.responseText);
    
          console.log("Nhận thành công! ", coin_id);
          fetchData(ss_id)
        } else {
          console.log("(claim) Yêu cầu POST không thành công. Mã trạng thái:", xhr.status);
        }
      }
    };
    xhr.send(data);
};

function coud(seconds, ss_id) {
    var countdownInterval = setInterval(function () {      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
      var display = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
      document.getElementById(ss_id).getElementsByClassName("m-LiveList-CardTips-card-viewers-count")[0].textContent = display;
      seconds--;
      if (seconds < 0) {
        clearInterval(countdownInterval);
      }}, 1000);
}
function add_element(ssid) {
    for (var element of document.getElementsByClassName("column")) {
            if (element.id == "none") {
                element.innerHTML = `<div class="card-current section-card"><div class="shopee-img card-cover" style="height: 100%; width: 100%; background-size: 100%;"><img class="visible cover" src="https://cf.shopee.vn/file/2cf03c8d5b9fb130285a8d955a326319" alt="https://cf.shopee.vn/file/vn-11134104-7r98o-lndp9hihlqlpee" width="428" height="428"></div><div class="m-LiveList-CardTips"><span class="m-LiveList-CardTips-card-tag m-LiveList-CardTips-card-live-icon"><div class="m-LiveList-CoinsIcon-card-coins-icon"><svg width="12" height="12"><defs><linearGradient x1="20.55%" y1="11.176%" x2="77.657%" y2="88.181%" id="coins_svg__a"><stop stop-color="#F6C430" offset="0%"></stop><stop stop-color="#FFECAA" offset="50.092%"></stop><stop stop-color="#F6B813" offset="100%"></stop></linearGradient><linearGradient x1="76.302%" y1="87.131%" x2="19.387%" y2="13.87%" id="coins_svg__b"><stop stop-color="#F99D00" offset="0%"></stop><stop stop-color="#FFC20D" offset="50.721%"></stop><stop stop-color="#E9A603" offset="100%"></stop></linearGradient><linearGradient x1="32.954%" y1="10.4%" x2="70.248%" y2="90.053%" id="coins_svg__g"><stop stop-color="#FFEC88" offset="0%"></stop><stop stop-color="#FDF4CB" offset="51.842%"></stop><stop stop-color="#FAE17A" offset="100%"></stop></linearGradient><filter x="-5.6%" y="-5.6%" width="111.1%" height="111.1%" filterUnits="objectBoundingBox" id="coins_svg__d"><feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0.796078431 0 0 0 0 0.447058824 0 0 0 0 0 0 0 0 1 0" in="shadowInnerInner1"></feColorMatrix></filter><filter x="-51.3%" y="-16.3%" width="202.5%" height="165.3%" filterUnits="objectBoundingBox" id="coins_svg__e"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.819607843 0 0 0 0 0.22745098 0 0 0 0 0 0 0 0 1 0" in="shadowBlurOuter1"></feColorMatrix></filter><path d="M6 10.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" id="coins_svg__c"></path><path d="M4.155 8.058v.002c-.063.099-.089.14-.103.165-.05.076-.043.11.032.177.174.149.399.304.55.382.422.217.877.332 1.36.342.31.017.702-.061.994-.198.527-.248.863-.73.922-1.326.096-.964-.5-1.567-2.034-2.052-.716-.243-1.052-.566-1.052-1.017.021-.498.46-.87 1.052-.893.476.001.897.135 1.312.415.087.056.127.046.186-.034.007-.012.025-.041.104-.16.073-.11.097-.148.103-.159.05-.098.043-.136-.046-.202a3.102 3.102 0 00-.478-.262 2.95 2.95 0 00-1.206-.237c-.922.02-1.642.652-1.69 1.481-.03.599.26 1.08.862 1.436a9.1 9.1 0 001.075.429c.82.252 1.248.718 1.16 1.266-.081.499-.577.83-1.273.853-.505-.01-1.014-.206-1.456-.555a7.857 7.857 0 01-.034-.027l-.033-.026c-.09-.065-.143-.06-.198.026l-.109.174" id="coins_svg__f"></path></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#coins_svg__a)" cx="6" cy="6" r="6"></circle><path d="M.24 6.24v-.098C.24 2.882 2.819.24 6 .24c3.181 0 5.76 2.642 5.76 5.902v.098C11.707 3.026 9.15.437 6 .437S.292 3.026.24 6.24z" fill="#FFF5C9"></path><use fill="url(#coins_svg__b)" xlink:href="#coins_svg__c"></use><use fill="#000" filter="url(#coins_svg__d)" xlink:href="#coins_svg__c"></use><path d="M2.913 9.274a4.5 4.5 0 006.361-6.361 4.5 4.5 0 11-6.361 6.361z" fill="#FFEEAD"></path><path d="M2.945 9.305a4.5 4.5 0 116.36-6.36 4.5 4.5 0 00-6.36 6.36z" fill="#C00C00"></path><g><use fill="#000" filter="url(#coins_svg__e)" xlink:href="#coins_svg__f"></use><use fill="url(#coins_svg__g)" xlink:href="#coins_svg__f"></use></g></g></svg></div>0</span><span class="m-LiveList-CardTips-card-tag m-LiveList-CardTips-card-viewers"><span class="m-LiveList-CardTips-card-viewers-count" style="font-size: 12px;">00:00</span></span></div><div class="m-LiveList-VoucherSign"><button class="m-LiveList-VoucherSign-content"><div class="m-LiveList-VoucherSign-text" style="font-size: 10px;">Kết thúc</div></button><div class="m-LiveList-VoucherSign-angle"></div></div><div class="card-dimmer"></div><div class="current-live-card-info-wrap"><div class="m-LiveList-LiveInfo light"><div class="card-title"></div><div class="card-profile"><div class="shopee-avatar card-avatar"><div class="Image__ImageWrap-sc-1ti521m-0 gzjLN shopee-image" style="width: 100%; height: 100%; background: url(&quot;data:image/png;base64,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&quot;) center center / 100% no-repeat;"></div></div><span class="card-name"></span></div></div></div></div>`
                var xhr = new XMLHttpRequest();
                xhr.open("GET", `https://live.shopee.vn/api/v1/session/${ssid}`, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var responseData = JSON.parse(xhr.responseText);
                        element.id = responseData.data.session.session_id;
			fetchData(responseData.data.session.session_id);
                        element.getElementsByClassName("card-title")[0].textContent = responseData.data.session.title;
                        element.getElementsByClassName("card-name")[0].textContent = responseData.data.session.nickname;
                        element.getElementsByClassName("visible cover")[0].src = "https://cf.shopee.vn/file/" + responseData.data.session.cover_pic;
                        element.getElementsByClassName("m-LiveList-VoucherSign-content")[0].setAttribute("onclick",`end_element(${ssid})`)
                    } else {
                        console.error("Yêu cầu thất bại");
                    }
                };
                xhr.send();
                break
            }
        }
}

function end_element(ssid) {
    document.getElementById(ssid).innerHTML = "";
    document.getElementById(ssid).id = "none"
}

async function add() {
    const response = await fetch('https://python-min.vercel.app/api?url='+document.getElementById("userInput").value);
    const ss = await response.text();
    add_element(ss);
    //fetchData(ss);
    document.getElementById("userInput").value = "";
}

document.getElementsByTagName("html")[0].innerHTML = `<html><head><style>
        /* CSS cho trường nhập văn bản */
        #userInput {
            width: 200px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        /* CSS cho nút Submit */
        input[type="submit"] {
            background-color: #0074d9;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
<style data-n-href="/multipages/_next/static/css/styles.e0fed77b.chunk.css">div.drop-down .datepicker {
  top: 46px;
  transform: translateY(-362px); }

div.drop-down .drop-down-mask {
  opacity: 0; }

div.drop-down.on .drop-down-mask {
  opacity: 1; }

div.drop-down.on .datepicker {
  transform: translateY(0); }

div.drop-down .datepicker {
  box-sizing: border-box;
  z-index: 1; }
  div.drop-down .datepicker .datepicker-content {
    margin-top: 0;
    padding-top: 24px;
    transition: all .3s ease-out; }
  div.drop-down .datepicker .datepicker-navbar {
    display: flex;
    top: unset;
    bottom: 24px;
    border-bottom: none;
    flex-direction: row-reverse;
    height: 40px; }
    div.drop-down .datepicker .datepicker-navbar .datepicker-navbar-btn {
      position: relative;
      display: inline-block;
      flex: 1;
      height: 40px;
      background-color: #EE4D2D;
      color: #fff;
      line-height: 38px;
      margin: 0 12px;
      border-radius: 2px;
      padding: 0;
      box-sizing: border-box;
      border: 1px solid #EE4D2D; }
      div.drop-down .datepicker .datepicker-navbar .datepicker-navbar-btn:active::after {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.05); }
    div.drop-down .datepicker .datepicker-navbar .datepicker-navbar-btn:last-child {
      background-color: #fff;
      color: #EE4D2D; }
      div.drop-down .datepicker .datepicker-navbar .datepicker-navbar-btn:last-child:active::after {
        background-color: rgba(238, 77, 45, 0.05); }

.avator {
  flex-shrink: 0; }

.box {
  width: 100%;
  height: 79px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 20; }

.upload-loader {
  margin: 24px auto 0;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotate-loader 1.08s linear infinite; }

@keyframes rotate-loader {
  0% {
    transform: rotate(-45deg); }
  100% {
    transform: rotate(315deg); } }

:root {
  --ios-bg: #fff;
  --ios-color: color(var(--ios-bg) contrast(50%));
  --ios-disabled-color: #fff;
  --ios-theme: #dbdbdb;
  --default-bg: #f7f7f7;
  --default-color: color(var(--default-bg) contrast(50%));
  --default-disabled-color: color(var(--default-color) blend(var(--default-bg) 70%));
  --default-theme: #4eccc4;
  --dark-bg: #263238;
  --dark-color: color(var(--dark-bg) contrast(50%));
  --dark-disabled-color: color(var(--dark-color) blend(var(--dark-bg) 70%));
  --dark-theme: #50ccc4;
  --android-bg: #f5f5f5;
  --android-color: color(var(--android-bg) contrast(50%));
  --android-disabled-color: color(var(--android-color) blend(var(--android-bg) 70%));
  --android-theme: #31b6e7;
  --android-dark-bg: #292829;
  --android-dark-color: color(var(--android-dark-bg) contrast(50%));
  --android-dark-disabled-color: color(var(--android-dark-color) blend(var(--android-dark-bg) 70%)); }

.datepicker-modal {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: none;
  overflow: hidden; }

.on .datepicker-modal {
  display: block; }

.on .datepicker {
  transform: translateY(0); }

.datepicker {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  font-size: 16px;
  text-align: center;
  font-family: -apple-system, "Helvetica", PingFangSC-Regular, sans-serif;
  box-sizing: content-box;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  height: 316px;
  transform: translateY(100vh);
  transition: transform 0.5s; }
  .datepicker .datepicker-header {
    padding: 0 .5em;
    min-height: 2em;
    line-height: 2em;
    font-size: 1.125em; }
  .datepicker .datepicker-navbar {
    padding: 0 .5em .5em .5em;
    overflow: hidden; }
  .datepicker .datepicker-navbar-btn {
    float: right;
    padding: 0 1em;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    font-family: -apple-system, "Helvetica", PingFangSC-Regular, sans-serif;
    font-size: 16px; }
    .datepicker .datepicker-navbar-btn:first-child {
      color: #EE4D2D;
      padding: 0 12px 0 0; }
    .datepicker .datepicker-navbar-btn:last-child {
      color: #202325;
      padding: 0 0 0 12px; }
  .datepicker .datepicker-caption {
    display: flex;
    padding: .5em .25em; }
  .datepicker .datepicker-caption-item {
    flex: 1;
    margin: 0 .25em;
    height: 40px;
    line-height: 40px;
    font-size: 1.2em; }
  .datepicker .datepicker-content {
    display: flex;
    padding: .5em .25em; }
  .datepicker .datepicker-col-1 {
    flex: 1;
    margin: 0 .25em; }
    .datepicker .datepicker-col-1:nth-child(2) {
      padding-right: 8px;
      padding-left: 8px; }
    .datepicker .datepicker-col-1:nth-child(4) {
      padding-right: 8px;
      padding-left: 24px; }
  .datepicker .datepicker-viewport {
    height: 100%;
    position: relative;
    overflow: hidden; }
    .datepicker .datepicker-viewport::after {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none; }
  .datepicker .datepicker-wheel {
    position: absolute;
    height: 37px;
    top: 50%;
    width: 100%;
    margin-top: 0;
    transform: translateY(-50%); }
  .datepicker .datepicker-scroll {
    list-style-type: none;
    padding: 0; }
    .datepicker .datepicker-scroll > li {
      cursor: pointer;
      height: 20px;
      padding-bottom: 16px;
      font-family: -apple-system, "Helvetica", PingFangSC-Regular, sans-serif;
      font-size: 16px;
      line-height: 20px;
      text-align: center; }
    .datepicker .datepicker-scroll > li.selected {
      height: 47px;
      line-height: 47px;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.87) !important; }

.datepicker {
  /* ios */
  /* default */
  /* dark */
  /* android */
  /* android-dark */ }
  .datepicker.ios {
    background-color: var(--ios-bg); }
    .datepicker.ios .datepicker-col-1 {
      margin: 0; }
    .datepicker.ios .datepicker-header {
      color: var(--ios-color);
      padding: 0 3.5em; }
    .datepicker.ios .datepicker-viewport::after {
      background: transparent; }
    .datepicker.ios .datepicker-wheel {
      border: 0;
      height: 47px; }
      .datepicker.ios .datepicker-wheel::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 1px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.26) 50%, transparent 50%);
        z-index: 10; }
      .datepicker.ios .datepicker-wheel::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 1px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.26) 50%, transparent 50%);
        z-index: 10; }
    .datepicker.ios .datepicker-caption-item {
      color: var(--ios-color); }
    .datepicker.ios .datepicker-scroll li {
      color: rgba(0, 0, 0, 0.26); }
    .datepicker.ios .datepicker-scroll li.disabled {
      color: var(--ios-disabled-color); }
    .datepicker.ios .datepicker-navbar {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      height: 48px;
      box-sizing: border-box;
      background: #fff; }
    .datepicker.ios .datepicker-navbar-btn:nth-child(2) {
      float: left; }
    .datepicker.ios .datepicker-content {
      background-color: #fff;
      height: calc(100% - 48px);
      margin-top: 48px;
      padding: 0;
      box-sizing: border-box;
      padding: 32px 12px 45px 12px; }
    .datepicker.ios .datepicker-header + .datepicker-content {
      padding-top: 0; }
    .datepicker.ios .datepicker-caption + .datepicker-content {
      padding-top: 0; }
  .datepicker.default {
    background-color: var(--default-bg); }
    .datepicker.default .datepicker-header {
      color: var(--default-theme); }
    .datepicker.default .datepicker-wheel {
      border-top: 1px solid var(--default-theme);
      border-bottom: 1px solid var(--default-theme); }
    .datepicker.default .datepicker-caption-item {
      color: var(--default-color); }
    .datepicker.default .datepicker-scroll li {
      color: var(--default-color); }
    .datepicker.default .datepicker-scroll li.disabled {
      color: var(--default-disabled-color); }
    .datepicker.default .datepicker-navbar-btn {
      color: var(--default-theme); }
  .datepicker.dark {
    background-color: var(--dark-bg); }
    .datepicker.dark .datepicker-header {
      color: var(--dark-theme); }
    .datepicker.dark .datepicker-wheel {
      border-top: 1px solid var(--dark-theme);
      border-bottom: 1px solid var(--dark-theme); }
    .datepicker.dark .datepicker-caption-item {
      color: var(--dark-color); }
    .datepicker.dark .datepicker-scroll li {
      color: var(--dark-color); }
    .datepicker.dark .datepicker-scroll li.disabled {
      color: var(--dark-disabled-color); }
    .datepicker.dark .datepicker-navbar-btn {
      color: var(--dark-theme); }
  .datepicker.android, .datepicker.android-dark {
    background-color: var(--android-bg); }
    .datepicker.android .datepicker-header, .datepicker.android-dark .datepicker-header {
      color: var(--android-theme);
      border-bottom: 2px solid var(--android-theme); }
    .datepicker.android .datepicker-col-1, .datepicker.android-dark .datepicker-col-1 {
      margin: 0 .625em; }
    .datepicker.android .datepicker-viewport::after, .datepicker.android-dark .datepicker-viewport::after {
      background-image: linear-gradient(#f5f5f5, rgba(245, 245, 245, 0) 52%, rgba(245, 245, 245, 0) 48%, #f5f5f5); }
    .datepicker.android .datepicker-wheel, .datepicker.android-dark .datepicker-wheel {
      border-top: 2px solid var(--android-theme);
      border-bottom: 2px solid var(--android-theme); }
    .datepicker.android .datepicker-caption-item, .datepicker.android-dark .datepicker-caption-item {
      color: var(--android-color); }
    .datepicker.android .datepicker-scroll li, .datepicker.android-dark .datepicker-scroll li {
      font-size: 1.125em;
      color: var(--android-color); }
    .datepicker.android .datepicker-scroll li.disabled, .datepicker.android-dark .datepicker-scroll li.disabled {
      color: var(--android-disabled-color); }
    .datepicker.android .datepicker-navbar, .datepicker.android-dark .datepicker-navbar {
      display: flex;
      border-top: 1px solid #d9d4d4;
      padding: 0; }
    .datepicker.android .datepicker-navbar-btn, .datepicker.android-dark .datepicker-navbar-btn {
      padding: 0;
      color: #000;
      flex: 1; }
      .datepicker.android .datepicker-navbar-btn:nth-child(2), .datepicker.android-dark .datepicker-navbar-btn:nth-child(2) {
        border-left: 1px solid #d9d4d4; }
  .datepicker.android-dark {
    background-color: var(--android-dark-bg); }
    .datepicker.android-dark .datepicker-viewport::after {
      background-image: linear-gradient(#282828, rgba(40, 40, 40, 0) 52%, rgba(40, 40, 40, 0) 48%, #282828); }
    .datepicker.android-dark .datepicker-caption-item {
      color: var(--android-dark-color); }
    .datepicker.android-dark .datepicker-scroll li {
      color: var(--android-dark-color); }
    .datepicker.android-dark .datepicker-scroll li.disabled {
      color: var(--android-dark-disabled-color); }
    .datepicker.android-dark .datepicker-navbar {
      border-color: #424542; }
    .datepicker.android-dark .datepicker-navbar-btn {
      color: #fff; }
      .datepicker.android-dark .datepicker-navbar-btn:nth-child(2) {
        border-color: #424542; }

html, body {
  height: 100%;
  width: 100%;
  background: transparent; }

.streaming-cover-guideline {
  position: relative;
  padding: 3.30667rem 0 1.06667rem;
  background: #fef2e6; }
  .streaming-cover-guideline * {
    box-sizing: border-box; }
  .streaming-cover-guideline.is-android {
    padding: 2.66667rem 0 1.06667rem; }
    .streaming-cover-guideline.is-android .guideline-header {
      height: 1.33333rem;
      line-height: 1.33333rem;
      padding-top: 0; }
    .streaming-cover-guideline.is-android .guideline-header .i-back {
      top: 0.37333rem; }
    .streaming-cover-guideline.is-android .guideline-bg {
      top: -0.42667rem; }
  .streaming-cover-guideline.ios-8-min {
    padding: 2.13333rem 0 1.06667rem; }
    .streaming-cover-guideline.ios-8-min .guideline-header {
      padding-top: 0.53333rem; }
    .streaming-cover-guideline.ios-8-min .guideline-header .i-back {
      top: 0.8rem; }
    .streaming-cover-guideline.ios-8-min .guideline-bg {
      top: -0.58667rem; }
  .streaming-cover-guideline .guideline-header {
    position: fixed;
    top: 0;
    left: 0;
    height: 1.17333rem;
    width: 100%;
    padding-top: 1.17333rem;
    background: white;
    color: #000000;
    text-align: center;
    line-height: 1.17333rem;
    font-size: 0.53333rem;
    z-index: 100;
    box-sizing: content-box; }
    .streaming-cover-guideline .guideline-header .i-back {
      position: absolute;
      left: 0.32rem;
      top: 1.44rem;
      width: 0.64rem;
      height: 0.64rem;
      background-size: 100% 100%; }
  .streaming-cover-guideline .guideline-bg {
    position: absolute;
    top: 0.58667rem;
    left: 50%;
    transform: translateX(-50%);
    width: 10rem;
    height: 4.26667rem;
    background-size: 100% 100%; }
  .streaming-cover-guideline .guideline-title {
    position: relative;
    font-style: normal;
    font-weight: 900;
    font-size: 0.74667rem;
    line-height: 0.88rem;
    text-align: center;
    color: #EE4D2D; }
  .streaming-cover-guideline .guideline-section-rule {
    width: 8.72rem;
    height: 4.96rem;
    margin: 0.53333rem auto;
    background: #FFFFFF;
    border-radius: 0.21333rem;
    overflow: hidden; }
    .streaming-cover-guideline .guideline-section-rule .session-title {
      padding: 0.4rem 0;
      color: #212120;
      font-size: 0.42667rem;
      font-weight: 600;
      text-align: center; }
    .streaming-cover-guideline .guideline-section-rule .guideline-rule {
      width: 8.72rem;
      height: 3.62667rem;
      background: linear-gradient(180deg, #FFFAF2 0%, rgba(255, 255, 255, 0) 100.75%);
      color: rgba(0, 0, 0, 0.87);
      font-size: 0.32rem;
      line-height: 0.42667rem;
      border-radius: 0.21333rem;
      padding: 0.32rem; }
      .streaming-cover-guideline .guideline-section-rule .guideline-rule li {
        position: relative;
        margin-left: 0.53333rem;
        list-style: none; }
        .streaming-cover-guideline .guideline-section-rule .guideline-rule li::before {
          content: ' ';
          position: absolute;
          top: 0.16rem;
          left: -0.24rem;
          width: 0.08rem;
          height: 0.08rem;
          border-radius: 50%;
          background-color: #000000; }
  .streaming-cover-guideline .guideline-section-example {
    position: relative;
    width: 8.72rem;
    margin: 0.53333rem auto;
    background: #FF8147;
    border-radius: 0.21333rem; }
    .streaming-cover-guideline .guideline-section-example.bad-example {
      background: rgba(165, 192, 230, 0.8); }
      .streaming-cover-guideline .guideline-section-example.bad-example .section-content::before {
        background: linear-gradient(180deg, #F2F7FF 0.9%, rgba(255, 255, 255, 0) 98.47%); }
    .streaming-cover-guideline .guideline-section-example .i-good, .streaming-cover-guideline .guideline-section-example .i-bad {
      position: absolute;
      top: 0.21333rem;
      left: 0.21333rem;
      width: 0.42667rem;
      height: 0.42667rem;
      background-size: 100%;
      z-index: 2; }
    .streaming-cover-guideline .guideline-section-example .i-star {
      position: absolute;
      top: 0.96rem;
      right: 0.21333rem;
      width: 0.64rem;
      height: 0.64rem;
      background-size: 100%;
      z-index: 2; }
    .streaming-cover-guideline .guideline-section-example .section-title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 1.92rem;
      line-height: 0.53333rem;
      padding: 0.4rem 1.33333rem;
      text-align: center;
      color: #FFF;
      font-size: 0.42667rem;
      font-weight: 600; }
    .streaming-cover-guideline .guideline-section-example .section-content {
      position: relative;
      width: 100%;
      background: #fff;
      border-radius: 0.21333rem;
      overflow: hidden; }
      .streaming-cover-guideline .guideline-section-example .section-content::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, #FFFAF2 0.9%, rgba(255, 255, 255, 0) 98.47%); }
    .streaming-cover-guideline .guideline-section-example .section-rule {
      width: 8.72rem;
      color: rgba(0, 0, 0, 0.87);
      font-size: 0.32rem;
      line-height: 0.42667rem;
      border-radius: 0.16rem;
      padding: 0.32rem 0 0.32rem 0.32rem; }
      .streaming-cover-guideline .guideline-section-example .section-rule li {
        position: relative;
        margin-left: 0.53333rem;
        list-style: none; }
        .streaming-cover-guideline .guideline-section-example .section-rule li::before {
          content: ' ';
          position: absolute;
          top: 0.16rem;
          left: -0.24rem;
          width: 0.08rem;
          height: 0.08rem;
          border-radius: 50%;
          background-color: #000000; }
    .streaming-cover-guideline .guideline-section-example .example-title {
      position: relative;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 400;
      font-size: 0.32rem;
      margin: 0.26667rem; }
    .streaming-cover-guideline .guideline-section-example .image-example-list {
      position: relative;
      margin: 0.32rem 0;
      display: flex;
      justify-content: center;
      align-items: center; }
      .streaming-cover-guideline .guideline-section-example .image-example-list .example-item {
        position: relative;
        margin: 0 0.10667rem; }
        .streaming-cover-guideline .guideline-section-example .image-example-list .example-item .i-tag {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #EE4D2D;
          width: 0.42667rem;
          height: 0.42667rem;
          border-radius: 0.10667rem 0 0.10667rem 0; }
          .streaming-cover-guideline .guideline-section-example .image-example-list .example-item .i-tag.bad-tag {
            background-color: #6F82A8; }
          .streaming-cover-guideline .guideline-section-example .image-example-list .example-item .i-tag .i-good, .streaming-cover-guideline .guideline-section-example .image-example-list .example-item .i-tag .i-bad {
            content: ' ';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 0.26667rem;
            height: 0.26667rem;
            transform: translate(-50%, -50%); }
      .streaming-cover-guideline .guideline-section-example .image-example-list .example-img {
        width: 2.56rem;
        height: 2.56rem;
        border-radius: 0.10667rem; }

.shopee-avatar {
  padding-top: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center; }
  .shopee-avatar.fill-image * {
    width: 100%;
    height: 100%; }

.c-Spinner {
  margin: auto;
  display: flex; }

@keyframes c-Spinner-loading-rotate {
  0% {
    transform: rotate(0deg); }
  50% {
    transform: rotate(180deg); }
  100% {
    transform: rotate(360deg); } }
  .c-Spinner--icon {
    background: transparent !important;
    width: 20PX;
    height: 20PX;
    border-radius: 50%;
    border: 1px solid #fff;
    border-bottom-color: transparent;
    display: inline-block;
    animation: c-Spinner-loading-rotate 0.75s 0s linear infinite;
    animation-fill-mode: both; }

.icon-animation-scale, .button-animation-scale {
  animation: btn-replace-scale 0.24s ease; }

.icon-animation-scale-in, .button-animation-scale-in {
  animation: btn-replace-scale-in 0.24s ease; }

.icon-animation-fade-in, .button-animation-fade-in {
  animation: btn-replace-fade-in 0.24s ease; }

.icon-animation-fade-in-bottom, .button-animation-fade-in-bottom {
  animation: btn-replace-fade-in-bottom 0.24s ease; }

.icon-animation-fade-in-top, .button-animation-fade-in-top {
  animation: btn-replace-fade-in-top 0.24s ease; }

.icon-animation-fade-in, .button-animation-fade-in {
  animation: btn-replace-fade-in 0.24s ease; }

.shopee-btn {
  outline: none;
  background: transparent;
  border: 0;
  transition: all .2s ease; }
  .shopee-btn .shopee-loader {
    height: 100%;
    overflow: hidden; }
  .shopee-btn .text {
    margin-left: 4px;
    line-height: 24px;
    display: block;
    width: 100%; }
  .shopee-btn.shopee-btn-disabled {
    opacity: 0.5; }

.setup-spinner-wrapper {
  width: 100%;
  display: flex;
  justify-content: center; }

.circular-progress .circular {
  display: block;
  animation: rotate 2s linear infinite;
  position: relative;
  height: 50px;
  width: 50px; }

.circular-progress .path {
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round; }

@keyframes rotate {
  100% {
    transform: rotate(360deg); } }

@keyframes dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0; }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35; }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124; } }

.circular-loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center; }
  .circular-loading-wrapper {
    background: rgba(0, 0, 0, 0.87);
    width: 140px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border: none;
    border-radius: 4px;
    padding: 20px 0 10px;
    text-align: center; }
  .circular-loading-icon {
    width: 50px;
    margin: auto;
    margin-bottom: 10px; }
  .circular-loading-label {
    color: #fff; }

.shopee-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center; }

.i-check {
  width: 16px;
  height: 16px;
  border-radius: 2px; }
  .i-check.uncheck {
    border: 1px solid #757575; }
  .i-check.check {
    border: 1px solid #EE4D2D;
    background: #EE4D2D; }
  .i-check.prev-check {
    border: 1px solid #FF9472;
    background: #FF9472; }
  .i-check svg {
    fill: #fff; }

.i-coins svg {
  margin: 2px 3px; }

.i-add svg {
  fill: #EE4D2D; }

.i-sort svg {
  fill: #555;
  width: 24px;
  height: 24px; }

.i-delete {
  width: 30px;
  height: 30px;
  background: #F5F5F5;
  border-radius: 50%; }
  .i-delete svg {
    fill: #555;
    width: 24px;
    height: 24px; }

.i-arrow-right svg {
  width: 12px;
  height: 12px;
  fill: #512601; }

.i-viewers svg {
  height: 11px;
  width: 11px;
  fill: #fff; }

.i-play svg {
  width: 40px;
  height: 40px;
  fill: #fff; }

.i-time svg {
  width: 30px;
  height: 30px;
  fill: #fff; }

.i-live-end svg {
  width: 48px;
  height: 48px;
  fill: #fff; }

.i-replay svg {
  width: 24px;
  height: 24px;
  fill: #EE4D2D; }

.i-price {
  display: flex;
  flex-direction: column; }
  .i-price svg {
    fill: rgba(0, 0, 0, 0.54); }
  .i-price .active {
    fill: #EE4D2D; }

.i-select {
  display: flex; }
  .i-select svg {
    height: 16px;
    width: 16px;
    fill: #4a4a4a; }

.info-board .live-end svg {
  width: 24px;
  height: 30px;
  fill: #fff; }

.i-like svg {
  width: 30px;
  height: 30px;
  fill: #fff; }

@keyframes movement {
  0% {
    transform: translateY(2px); }
  50% {
    transform: translateY(-2px); }
  100% {
    transform: translateY(2px); } }

.shopee-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; }
  .shopee-loader.global {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); }

.shopee-loader-dot circle {
  animation: movement 400ms linear 0s infinite normal none running; }

.shopee-loader-dot circle:nth-child(2) {
  animation-delay: 100ms; }

.shopee-loader-dot circle:nth-child(3) {
  animation-delay: 200ms; }

.shopee-loader-spinner {
  background: transparent !important;
  width: 20PX;
  height: 20PX;
  border-radius: 50%;
  border: 1px solid #fff;
  border-bottom-color: transparent;
  display: inline-block;
  animation: loading-rotate 0.75s 0s linear infinite;
  animation-fill-mode: both; }

.shopee-img {
  position: relative;
  display: block;
  background: #f4f4f4;
  overflow: hidden; }
  .shopee-img .cover, .shopee-img .contain, .shopee-img .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); }
  .shopee-img img.none {
    display: none; }
  .shopee-img img.visible {
    display: inherit; }
  .shopee-img .dimmer {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3); }
    .shopee-img .dimmer i {
      color: #fff;
      cursor: pointer; }

.shopee-img-reminder-manage-avatar {
  width: 110px;
  height: 110px; }
  @media screen and (max-width: 360px) {
    .shopee-img-reminder-manage-avatar {
      width: 1.1rem;
      height: 1.1rem; } }

.shopee-img-reminder-share-avatar {
  width: 110px;
  height: 110px; }

#product-section .product-item-dragging {
  visibility: hidden; }

#product-section .product-item-ghost, #product-section .product-item-dragging {
  background: rgba(0, 0, 0, 0.09); }

.streaming-notice {
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 10px;
  margin-top: 40px; }
  .streaming-notice a {
    color: #007AFF; }

.shopee-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center; }

.i-check {
  width: 16px;
  height: 16px;
  border-radius: 2px; }
  .i-check.uncheck {
    border: 1px solid #757575; }
  .i-check.check {
    border: 1px solid #EE4D2D;
    background: #EE4D2D; }
  .i-check.prev-check {
    border: 1px solid #FF9472;
    background: #FF9472; }
  .i-check svg {
    fill: #fff; }

.i-coins svg {
  margin: 2px 3px; }

.i-add svg {
  fill: #EE4D2D; }

.i-sort svg {
  fill: #555;
  width: 24px;
  height: 24px; }

.i-delete {
  width: 30px;
  height: 30px;
  background: #F5F5F5;
  border-radius: 50%; }
  .i-delete svg {
    fill: #555;
    width: 24px;
    height: 24px; }

.i-arrow-right svg {
  width: 12px;
  height: 12px;
  fill: #512601; }

.i-viewers svg {
  height: 11px;
  width: 11px;
  fill: #fff; }

.i-play svg {
  width: 40px;
  height: 40px;
  fill: #fff; }

.i-time svg {
  width: 30px;
  height: 30px;
  fill: #fff; }

.i-live-end svg {
  width: 48px;
  height: 48px;
  fill: #fff; }

.i-replay svg {
  width: 24px;
  height: 24px;
  fill: #EE4D2D; }

.i-price {
  display: flex;
  flex-direction: column; }
  .i-price svg {
    fill: rgba(0, 0, 0, 0.54); }
  .i-price .active {
    fill: #EE4D2D; }

.i-select {
  display: flex; }
  .i-select svg {
    height: 16px;
    width: 16px;
    fill: #4a4a4a; }

.header-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15px;
  margin-top: 16px;
  position: relative; }

.live-message {
  display: flex;
  flex-direction: row;
  align-items: flex-start; }

.shop-popularity {
  display: flex;
  flex-direction: row;
  margin-top: 3px; }

.shop-intro {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 10px;
  margin-left: 5px; }

.shop-name {
  max-width: 146px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 14px; }

.shop-popularity-number {
  font-size: 11px;
  color: #ffffff;
  letter-spacing: 0;
  margin-left: 3px; }

.title {
  display: -webkit-box;
  width: 70%;
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 21px;
  margin-bottom: 16px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden; }

.wrapper {
  height: 80px;
  width: 80px;
  position: relative;
  left: 15px;
  top: 23px; }

.price {
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  font-size: 12px;
  width: 100%;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

.float-avatar {
  position: absolute;
  width: 72px;
  height: 88px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  right: 15px;
  top: 54px;
  display: flex;
  align-items: center;
  flex-direction: column; }
  .float-avatar .avatar-wrapper {
    margin-top: 2px;
    height: 66px;
    width: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; }
  .float-avatar .avatar-name {
    font-weight: 500;
    font-size: 10px;
    text-align: center;
    color: #fff;
    margin-bottom: 8px;
    text-align: center;
    padding: 0 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    box-sizing: border-box; }
  .float-avatar .avatar-border {
    border-color: #00d9bd;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    padding: 1px;
    position: relative;
    overflow: hidden; }
    .float-avatar .avatar-border.disconnected {
      border-color: #ee2c4a; }
  .float-avatar .avatar-mask {
    display: none;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 7px;
    font-weight: 500;
    color: #fff;
    text-align: center; }
    .float-avatar .avatar-mask .bad-network-text {
      margin-top: 4px; }
  .float-avatar.show-mask .avatar-mask {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; }

.dialog-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 12px 16px;
  font-weight: 500; }

.dialog-content {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  padding: 0 20px 20px;
  font-weight: 500; }

.primary-link {
  color: #4080EE;
  font-size: 14px;
  text-decoration: none; }

.shopee-avatar {
  padding-top: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center; }
  .shopee-avatar.fill-image * {
    width: 100%;
    height: 100%; }

.session-basic-info {
  position: relative;
  overflow: auto;
  height: 265px; }
  .session-basic-info .session-over-tip-wrap {
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%); }
    .session-basic-info .session-over-tip-wrap .end-session-tip {
      font-size: 16px; }
    .session-basic-info .session-over-tip-wrap .replay-btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-top: 16px;
      padding: 4px 20px;
      height: 32px;
      border: 1px solid #EE4D2D;
      border-radius: 18px;
      color: #EE4D2D;
      box-sizing: border-box;
      font-size: 14px; }
      .session-basic-info .session-over-tip-wrap .replay-btn-icon {
        margin-right: 6px;
        width: 22px;
        height: 22px; }
  .session-basic-info .session-info {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 15px; }
    .session-basic-info .session-info .session-title {
      color: #fff;
      font-size: 16px;
      line-height: 18px;
      font-weight: 500;
      margin-right: 75px;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis; }
  .session-basic-info .session-host-info {
    display: inline-flex;
    margin-top: 10px;
    display: flex;
    align-items: center; }
    .session-basic-info .session-host-info .host-avatar {
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50%; }
      .session-basic-info .session-host-info .host-avatar img {
        width: 100%;
        height: 100%; }
    .session-basic-info .session-host-info .host-name {
      line-height: 30px;
      margin-left: 5px;
      color: #fff;
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 200px; }
    .session-basic-info .session-host-info-host-btn {
      display: flex;
      align-items: center; }
    .session-basic-info .session-host-info-follow-btn {
      height: 20px;
      box-sizing: border-box;
      line-height: 18px;
      text-align: center;
      border-radius: 10px;
      padding: 0 10px;
      font-size: 12px;
      color: #fff;
      border: 1px solid #fff;
      transition-property: opacity, background-color, border-color;
      transition-duration: .5s, .5s, .5s;
      transition-delay: 1s, 0, 0;
      transition-timing-function: ease-out; }
      .session-basic-info .session-host-info-follow-btn.unfollow {
        opacity: 1;
        background-color: #EE4D2D;
        border-color: transparent; }
      .session-basic-info .session-host-info-follow-btn.follow {
        opacity: 0;
        border-color: #fff;
        background-color: transparent; }

.m-ProductCard--product-card {
  flex-shrink: 0; }

.m-ProductCard--product-cover {
  padding-top: 100%;
  border-radius: 2px;
  border: 1px solid #E8E8E8; }
  .m-ProductCard--product-cover img {
    width: 100%; }

.m-ProductCard--product-info {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 8px;
  text-align: center;
  color: #FF5722; }

.m-ProductCard--product-price {
  font-size: 12px;
  line-height: 15px;
  padding: 0 2px;
  text-align: center;
  display: inline; }

.session-products-view {
  overflow: hidden;
  background-color: #F8F8F8;
  display: flex;
  height: 140px; }
  .session-products-view--interactive {
    height: 42px;
    background-color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EE4D2D;
    font-size: 14px; }
    .session-products-view--interactive--arrow {
      height: 12px;
      width: 12px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAYAAABM8m7ZAAAAAXNSR0IArs4c6QAAAstJREFUSA3llU1MU0EQx2deiy0i+B6iBjWS6EljWwhRYiLGGD8TSgvGEKMHUBMTL3oyHJt48aDoRQ8e/IhHw4fVaGMMigcPEqIVD8bEg1FDNJRXLKC23bf+t/igQvmo6MlNXmff7Oz8ZnbmbYn+62H6Pc1msDL4tw8hXl+5e9jvPZTtV7Nfhvy+OiK+JIXojPk9F239QqVZ7w1ZUrQLpivZSU2A2UGGZEopEJM8Fg96ziwUiixPwscpPMXwKVhYy2yfE2CjK3qLJD0AdQToYktQqxnwtNiG+cp43aYmi+RZKaXOxKPw+XhpdeN1288EWCmM6tKjED2Aj6lXsuj8UMDrV2v5DFVTyXxZEpUC+o1IPtMrVh/hUMiy/bA9saU8uLXQ/J54iAg3Q+eCHGSWB4xw/1PbZjY5HPRtEULeA2w5nCcho7q7bCfffoKTnBzTwGoJTaCTED3MtMGSVIDIP2tO516j80V0cuv0WSJQtTEl049QsnJmFjjmt05nYW1J5/PYVOucYGU02lhdnkwnVZbrpCQNQXxkbdEOvavv3VQn6t1srKqglOhBhmsz68zvXezavvhO74dc9r/VONugqKNvAKB9iP7TL/0qaSUjKqBsOzVPNHhXyLSIYLoGp8Oo74CjoGD/TFC1Z0awWsxk53T61VFnsiaqSKaSkUwplAGGPFxTkhbyPj6X9ZKkA830RSNHoKS97824Re7fGY862xydXYsO7wCmDPofkL2Gu3gPFblkPBaLILAa6N2ADzJpTfrdV93Z+3PN5wVWG9XNxmTdBER9ImO4bLpZSkHMu9BERTAxmbXjRjiKAOce8wYrV2bQ00yC2gA30LUjyHAUXb9SLWnsaNXDL6/OjRy3mLXGU50YXf03cLWeg/4rslyioAggrml8IR+o8ptXxnYg+Bdrw7wFjwM9fM0Ivz5tr/1zGQ/4Tgw1+Lb9KegnIOz8bZjQNroAAAAASUVORK5CYII=);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-left: 8px; }
  .session-products-view .products-preview-container {
    align-self: center;
    width: 100%; }
    .session-products-view .products-preview-container .view-related-products-button {
      margin: 20px auto 0 auto;
      display: block;
      border: 1px solid #ff5722;
      text-align: center;
      color: #ff5722;
      width: 160px;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      border-radius: 2px; }
  .session-products-view .products-count-tip {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.54);
    letter-spacing: 0;
    text-align: center; }
  .session-products-view .empty-products-view {
    align-self: center;
    width: 100%; }
    .session-products-view .empty-products-view p {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.54);
      text-align: center;
      max-width: 80%;
      margin: 0 auto; }
  .session-products-view .product-list-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box; }
  .session-products-view .product-list {
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
    -webkit-overflow-scrolling: touch; }
    .session-products-view .product-list::-webkit-scrollbar {
      display: none; }
    .session-products-view .product-list .product-list-card {
      width: 95px;
      margin-left: 10px; }
  .session-products-view .product-list-content-end {
    width: 10px;
    height: 100%;
    flex-shrink: 0; }
  .session-products-view .shopee-loader {
    margin-top: 30px; }

.grid .row {
  display: flex;
  align-items: center;
  justify-content: space-between; }
  .grid .row .column {
    width: 100%;
    flex: 1;
    margin: 0 5px; }
    .grid .row .column:first-child {
      margin-left: 0; }
    .grid .row .column:last-child {
      margin-right: 0; }

.grid .placeholder {
  width: 100%;
  height: 18px; }

.m-LiveList-LiveInfo .card-title {
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word; }

.m-LiveList-LiveInfo .card-views {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 17px;
  margin-bottom: 10px; }

.m-LiveList-LiveInfo .card-profile {
  display: flex;
  align-items: center; }
  .m-LiveList-LiveInfo .card-profile .card-avatar {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    flex-shrink: 0; }
  .m-LiveList-LiveInfo .card-profile .card-name {
    font-size: 15px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }

.m-LiveList-LiveInfo.dark .card-title {
  color: rgba(0, 0, 0, 0.87); }

.m-LiveList-LiveInfo.dark .card-profile .card-name {
  color: #333; }

.m-LiveList-CardTips {
  white-space: nowrap;
  display: flex;
  position: absolute;
  border-radius: 2px;
  left: 10px;
  top: 10px;
  font-size: 11px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6); }
  .m-LiveList-CardTips-card-tag {
    overflow: hidden;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    padding: 0 4px;
    line-height: 16px;
    font-weight: 600; }
  .m-LiveList-CardTips-card-live-tag-dot {
    display: inline-block;
    width: 6PX;
    height: 6PX;
    border-radius: 50%;
    margin-right: 2px;
    background: #fff;
    flex-shrink: 0; }
  .m-LiveList-CardTips-card-live-icon {
    background: linear-gradient(-90deg, #F53D2D 0%, #FF7333 100%); }
  .m-LiveList-CardTips-card-replay-icon {
    background: linear-gradient(270deg, #6C7FA6 0%, #87A0BC 100%); }
  .m-LiveList-CardTips-card-viewers {
    font-weight: 600;
    font-size: 12px;
    display: flex;
    align-items: center; }
  .m-LiveList-CardTips-card-viewers-icon {
    margin-right: 2px;
    width: 12px;
    height: 12px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgB7ZqBcdswDEXhXgfwBlUnqEfwBs0GyQbNBkknaDewO0G6gdwJnEwgdYJkg1/wSLc615IokqBEH94dTpecRVKfAEhRIFIURVEURVEURVEUpSxWtAAArPmy7v5vtVq1tACyCsRCVHzZsm3YPrhrNXDLG1vr7IXtwPbM4r3RtcCibNm+szVIR8126wQvDxMybF/cg0izY9tSCThhHthekZ+G7ZaWCg/uBmnDKJQnJAy96CTtBrMjm3x9acklXLbf7u9u4l13zCTyT679NfnzyMn8K80JbAL2DacaNi9Necjz/jaujWZCnxXNAWyuGcOI9xgjykD/ZnL2HmNosovkIY6YMBfGUnkIZcazoRx4iFNjBrfmPu8wHno3JImHOPc0I7De9IQ5PAk2OQ51vKWFABveQ2OtKCVuZvposMAt/4hIR6TKj7C746YkcU6MiPSNUmAaGugkz8oQwYhIW4oBw6GVPCHDeqvpM+n2AP0vzTXFMNDwjgSA3fydeEWiYw0net+OP/wFt6fRBkJ550yg8z4fKAK+/76vbQoFlz1IbK8zIFCSyUF/RFQUAqxrNp2G9iSIh0CG4M1eT/vhHtRpOHni7OnHR6BYkbqrWoMCVuK/TBDo9HBBkwa3Wvr89h2VS8UWlA/NVxHfz0olC2SIOoDzoXSBjDh3JEjpAhk+kyDvSRDYzV014ZaQcBFdhUQ/PZvlmMIeeiofpb7lS4dYDnEMFQlxDTlIFGmBclVhtCSEtEDPlAHJWiJpgV5IngMJIi3QT5JnT4KICsSufyDZGW7ZfpEgOVYxyQqLH0upZYwCtgQvNfEHXUvBnb8ckY4GpdYn9oH/j29jxCnnFHAKsJ60Rzg1rs1zLgG/UpUu5gx61sqRWcC/KrFjTyjtYItDc730LhtMOExXFEVRFEVRFEVRFEW5zB91/oCSnxZNYwAAAABJRU5ErkJggg==);
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: center; }

.m-LiveList-section-empty {
  background: #fff;
  padding: 30px 20px;
  align-items: center;
  display: flex;
  margin-top: 10px; }
  .m-LiveList-section-empty span {
    font-size: 14px;
    color: rgba(81, 38, 1, 0.6);
    line-height: 16px; }
  .m-LiveList-section-empty .shopee-img {
    flex-shrink: 0;
    margin-right: 14px;
    background: transparent; }

.m-LiveList-CoinsIcon {
  display: flex;
  position: absolute;
  border-radius: 100px 0px 0px 100px;
  right: -4px;
  top: 10px;
  height: 16px;
  color: #fff;
  align-items: center;
  justify-items: center;
  background: linear-gradient(#FC7333, #F53D2D);
  z-index: 1;
  opacity: 1;
  transition: opacity 1s ease-in-out; }
  .m-LiveList-CoinsIcon-card-coins-icon {
    display: inline-flex;
    margin: 2px 3px; }
  .m-LiveList-CoinsIcon-card-coins-count {
    margin-right: 3px;
    width: 100%;
    font-weight: 600;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis; }
  .m-LiveList-CoinsIcon-card-angle {
    border-color: #B10000 transparent transparent #B10000;
    border-width: 2px 4px 0px 0px;
    position: absolute;
    right: 0;
    bottom: -2px;
    border-style: solid solid solid solid; }

.m-LiveList-VoucherSign {
  position: absolute;
  height: 16px;
  right: -4px;
  top: 10px; }
  .m-LiveList-VoucherSign-content {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow: hidden;
    background: linear-gradient(#fc7333, #f53d2d); }
  .m-LiveList-VoucherSign-image {
    height: 10px;
    width: 11px;
    margin-left: 6px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAeCAYAAACiyHcXAAAAAXNSR0IArs4c6QAABMVJREFUSA3FV2toXEUU/mbu3eyjeTRtkr6QSKoxpo+gxlKp1tbiI5QWQvFJCSoFH/ggFSqiqKAgUq1FjfqjlgqxRamFajGoiBJisRIp1VbTmNRWTE1T0+4mm31k753xzOzuzWZ3s7s/Wnfg7D1z7pzzfffOOWfuQkrJSNpJBkj+z6HwFC7TBADsICnW2KpIDBD64mIxINxBRUIWkYCG5sUmoPDNQkjIcT/EyFmIi6MwahaAL6wlT1d2VysGGY3oe8yg8B5v9nUp1rwk7IETCO1+E+LsXxATY+AVc8Gr56H0ubfAyitTQpEaCSP46pMQY36a0C5zA2UvdoDNqZ6+Lm2WMydk4AL8W1qAaDjNDXA1r0bp8zsB9bSJEe58B9HPdkPaNpivFN4H2+G+6+7k7RmvOXMicmgvWCyqnTk9jXFlPVjZbD23+o/BOnbECWyf6sNkd5cmoIwlzbfAfXurcz+XkpOEON0PKYT2V09U/vZ+MBYPJ8cCsIf+jE8sC+F970EM/63nRt018LQ9Pe0txRdm/81JQuq9jTvyqnlaMZtWOpHE+WGtx3q+hnX8Z63z2XPgvecR8JqFzrp8Sk4SrHqB4x/78XvI4BjEufjTqhvGFXWQ/lGED34EOTEORonoWnUnXDetc/wKURQJH8nNJEfTHcxlN4IlSix2/Cf4N98Ke7BPL9M5UteAyIE9sGnb1DDql8F7/6Nw9kxbZ/xReArXxxljYZIfaEJlAFVbznCvWQ/jqkaKbkCGJgBhU+JZRMwHo/F6gKpg8vA3+sqr58Pb9lRm2TrRpikKp0XhKnynvmhyjjp4N93c6Cx3e1H28gcI7doOu/8XArMAspWsboH7jk0Ivv6MbmIocaNkXSvMpc0AJakYHQavrKIS8Tih0pRuhZe0OSSShowrAfgefwGYjFDH/Be8ar7O+sj+DykZe/Vyc8kN8La2Ifp5py5T3Veofxj1S+Hb8iyRcWeETTUkCo76m5Qq/U+SVKQuyKbb/b8iuH0bJekQjLk1mLXtDUQO7UOstxsyTNuWGCpRjWubUPbS++ntW21HQ/JtcAL3kqwiYxdJXgKSWndozw5NgILAXHkbbZEb1oneOAHTpPJcBF5WQT3Ghj3wO6LffZGg5VxUx+tSuApfVUeIpIfkOpK8I/LpLth9lB80eO3V8Gx6GOLMHxAXzsdttF3lOz9xzgtJLT+5bXrB1I/CU7ghRaLgYR09THv+JSSdlJwqxL3+Xp0j1plBJ4a5uBGstByejZsdm6REzTUKJiEpKUOd71Lmj+h4RsNyuNdu0DpPaWoiMKptYuQfBzd53jiGNCV/dSgH+vgKf9wBMfCbdlfJ6L3vMacEjUW1dMRXQgQuwj51EoG2tbRX8edjdOW19Wmw06cFvYlYz1eYPPItcRFQ5WSuWEPNaiqFzOUrYDQ00T1GTS0IQa08mSNweeDZ8MB01LRZzu8JtVaOBxB85Yl4x6RqYFQJpdTA1L6nDnWuBF9rj3+BEQk+qxyc3pDvoa3UdZekLs3Q85LQHtSoZCymVaYaj6skI5A2UMLaQ6ehTldeSV9gdJLmywflVxiJ7JCXzFpQTlwytBkCKRJTRT7DostsHlQkOi4zSL7wHergUnlR1D/E/wGu/KbBYbIylwAAAABJRU5ErkJggg==);
    background-size: contain; }
    @media (max-width: 320px) {
      .m-LiveList-VoucherSign-image {
        display: none; } }
  .m-LiveList-VoucherSign-text {
    font-size: 10px;
    line-height: 16px;
    color: #ffffff;
    align-items: center;
    text-align: center;
    margin-right: 2px;
    margin-left: 4px;
    font-weight: 700; }
  .m-LiveList-VoucherSign-angle {
    border-color: #B10000 transparent transparent #B10000;
    border-width: 2px 4px 0px 0px;
    position: absolute;
    right: 0;
    bottom: -2px;
    border-style: solid solid solid solid; }

.m-LiveList {
  flex-grow: 1;
  padding: 0px 10px 10px;
  --aspect-ratio: 2/3; }
  .m-LiveList-empty-wrapper, .m-LiveList-error-wrapper {
    flex-grow: 1;
    min-height: 140px;
    display: flex;
    justify-content: center;
    align-items: center; }
    .m-LiveList-empty-wrapper--content, .m-LiveList-error-wrapper--content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 10%; }
    .m-LiveList-empty-wrapper--img, .m-LiveList-error-wrapper--img {
      height: 74px;
      width: 74px; }
    .m-LiveList-empty-wrapper--title, .m-LiveList-error-wrapper--title {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      margin-top: 12px; }
  .m-LiveList .loader {
    margin-top: 10px; }
  .m-LiveList .card-current {
    position: relative; }
    .m-LiveList .card-current .current-live-card-info-wrap {
      width: 100%;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px; }
  .m-LiveList .section-card {
    background: #fff;
    padding: 0;
    margin-top: 10px;
    border-radius: 4px; }
    .m-LiveList .section-card .shopee-img {
      border-radius: 4px; }
    .m-LiveList .section-card .video-wrap {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      opacity: 0;
      overflow: hidden;
      transition: opacity 1s ease-in-out; }
      .m-LiveList .section-card .video-wrap.video-show {
        opacity: 1; }
      .m-LiveList .section-card .video-wrap.video-hide {
        opacity: 0; }
      .m-LiveList .section-card .video-wrap video {
        width: 100%;
        height: 100%;
        object-fit: cover; }
    .m-LiveList .section-card .card-dimmer {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 50%;
      width: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 4.75%, rgba(0, 0, 0, 0.3) 45.43%, rgba(0, 0, 0, 0.7) 100%);
      border-radius: 0px 0px 4px 4px; }
    .m-LiveList .section-card .card-coins {
      display: flex;
      position: absolute;
      border-radius: 100px 0px 0px 100px;
      right: -4px;
      top: 10px;
      height: 16px;
      width: 55px;
      color: #fff;
      align-items: center;
      justify-items: center;
      background: linear-gradient(#FC7333, #F53D2D);
      z-index: 1;
      opacity: 1;
      transition: opacity 1s ease-in-out; }
      .m-LiveList .section-card .card-coins.coins-show {
        opacity: 1; }
      .m-LiveList .section-card .card-coins.coins-hide {
        opacity: 0; }
      .m-LiveList .section-card .card-coins .card-coins-icon {
        display: inline-flex;
        margin: 2px 2px; }
      .m-LiveList .section-card .card-coins .card-coins-count {
        margin-right: 2px;
        width: 100%;
        font-weight: 600;
        text-align: center; }
      .m-LiveList .section-card .card-coins .card-angle {
        border-color: #B10000 transparent transparent #B10000;
        border-width: 2px 4px 0px 0px;
        position: absolute;
        right: 0;
        bottom: -2px;
        border-style: solid solid solid solid; }
    .m-LiveList .section-card .card-tips {
      display: flex;
      position: absolute;
      border-radius: 2px;
      overflow: hidden;
      left: 10px;
      top: 10px;
      font-size: 11px;
      color: #fff;
      background: rgba(0, 0, 0, 0.6); }
      .m-LiveList .section-card .card-tips .card-tag {
        overflow: hidden;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
        padding: 0 4px;
        line-height: 16px;
        font-weight: 600; }
      .m-LiveList .section-card .card-tips .card-live-tag-dot {
        display: inline-block;
        width: 6PX;
        height: 6PX;
        border-radius: 50%;
        margin-right: 2px;
        background: #fff; }
      .m-LiveList .section-card .card-tips .card-live-icon {
        background: linear-gradient(-90deg, #F53D2D 0%, #FF7333 100%); }
      .m-LiveList .section-card .card-tips .card-replay-icon {
        background: linear-gradient(-90deg, #6C7FA6 0%, #87A0BC 100%); }
      .m-LiveList .section-card .card-tips .card-viewers {
        font-weight: 600;
        font-size: 12px;
        display: flex;
        align-items: center; }
        .m-LiveList .section-card .card-tips .card-viewers .card-viewers-icon {
          margin-right: 2px; }
  @supports (aspect-ratio: 1) {
    .m-LiveList .section-card {
      aspect-ratio: var(--aspect-ratio);
      padding-top: initial; } }
  @supports not (aspect-ratio: 1) {
    .m-LiveList .section-card {
      padding-top: calc((1 / (var(--aspect-ratio))) * 100%); }
      .m-LiveList .section-card .card-cover {
        position: absolute;
        top: 0;
        left: 0; } }

.m-LiveEnd--Guest {
  display: flex;
  flex-direction: column;
  flex-grow: 1; }

.m-NewBoard-tooltip-container {
  margin-top: -8px;
  padding: 4px 8px;
  width: auto !important; }

.m-suggestion-board {
  position: relative;
  margin: 0 20px 20px;
  min-height: 101px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-sizing: border-box; }
  .m-suggestion-board > * {
    box-sizing: border-box; }
  .m-suggestion-board.is-alert .title-text {
    color: #F69113; }
  .m-suggestion-board.is-alert .suggestion-text {
    color: #F69113; }
  .m-suggestion-board .icon-insights {
    width: 20px;
    height: 20px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: contain;
    flex-shrink: 0;
    margin-right: 4px; }
  .m-suggestion-board .icon-alert {
    width: 20px;
    height: 20px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: contain;
    flex-shrink: 0;
    margin-right: 4px; }
  .m-suggestion-board-title {
    position: relative;
    color: #fff;
    font-size: 14px;
    line-height: 42px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-weight: 500;
    text-transform: capitalize; }
    .m-suggestion-board-title::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.09); }
  .m-suggestion-board-content {
    width: 100%;
    padding: 16px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between; }
    .m-suggestion-board-content .suggestion-text {
      color: rgba(255, 255, 255, 0.65);
      font-size: 12px;
      line-height: 15px;
      flex: 1;
      word-break: break-all; }
    .m-suggestion-board-content .suggestion-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 6px 10px;
      margin-left: 8px;
      background: #EE4D2D;
      border-radius: 2px;
      font-size: 12px;
      color: #FFFFFF;
      white-space: nowrap; }

.app-wrapper {
  background: #FFFFFF;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border: 1px;
  flex-shrink: 0;
  z-index: 10000;
  flex: 1;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100%; }

.icon-style {
  display: flex;
  flex-direction: row;
  align-items: center; }

.icon-background {
  background-image: linear-gradient(138deg, #F57443 0%, #EE4D2D 100%);
  border-radius: 6.74px;
  border-radius: 6.74px;
  height: 32px;
  width: 32px;
  margin-right: 8px; }

.host-avatar {
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 50%; }


/*# styles.e0fed77b.chunk.css.map*/</style></head><body><div id="__next">    <div>
        <label for="userInput">Link:</label>
        <input type="text" id="userInput" name="userInput" placeholder="Dán link vào đây">
        <input type="submit" value="Submit" onclick="add()">
    </div>
<div style="display: flex; flex-direction: column; margin: 0px auto; height: 770px; width: 499px;"><div class="m-LiveEnd--Guest"><div style="flex-shrink: 0; flex-grow: 0;"></div><div id="section-live" class="m-LiveList" style="position: relative;"><div class="infinite-scroll " style="height: auto;"><div class="grid"><div class="row"><div class="column" id="none"></div><div class="column" id="none"></div><div class="column" id="none"></div></div><div class="row"><div class="column" id="none"></div><div class="column" id="none"></div><div class="column" id="none"></div></div><div class="placeholder" style="height: 18px;"></div></div></div></div></div></div></div>



      </body></html>`
