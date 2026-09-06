const WS_URL =
    "wss://blockgame-ws.phanchau00005.workers.dev/ws/room1";


// ============================================================
// GLOBAL
// ============================================================

const pendingRequests =
    new Map();

let wsB =
    null;

let reconnectTimer =
    null;

let reconnectAttempts =
    0;

let manuallyClosed =
    false;


// ============================================================
// CONFIG
// ============================================================

const RECONNECT_DELAY =
    3000;

const MAX_RECONNECT_DELAY =
    30000;


// ============================================================
// CONNECT WEBSOCKET
// ============================================================

function connectWebSocket() {

    if (manuallyClosed) {
        return;
    }


    // Nếu đang kết nối hoặc đã kết nối
    if (
        wsB &&
        (
            wsB.readyState ===
                WebSocket.CONNECTING ||

            wsB.readyState ===
                WebSocket.OPEN
        )
    ) {

        return;

    }


    console.log(
        "🔄 B đang kết nối WebSocket..."
    );


    const socket =
        new WebSocket(
            WS_URL
        );


    wsB =
        socket;


    // ========================================================
    // OPEN
    // ========================================================

    socket.onopen = () => {

        console.log(
            "🟢 B WEBSOCKET CONNECTED"
        );


        reconnectAttempts =
            0;


        if (
            reconnectTimer
        ) {

            clearTimeout(
                reconnectTimer
            );

            reconnectTimer =
                null;

        }


        // ================================================
        // REGISTER B
        // ================================================

        try {

            socket.send(
                JSON.stringify({

                    type:
                        "register_client"

                })
            );


            console.log(
                "📤 B → register_client"
            );

        } catch (
            error
        ) {

            console.error(
                "❌ Không thể register B:",
                error
            );

            try {

                socket.close();

            } catch (
                closeError
            ) {}

        }

    };


    // ========================================================
    // MESSAGE
    // ========================================================

    socket.onmessage = (
        event
    ) => {

        let msg;


        // ================================================
        // PARSE JSON
        // ================================================

        try {

            msg =
                JSON.parse(
                    event.data
                );

        } catch (
            error
        ) {

            console.error(
                "❌ JSON ERROR:",
                error
            );

            return;

        }


        // ================================================
        // REGISTERED
        // ================================================

        if (
            msg.type ===
            "registered"
        ) {

            console.log(
                "✅ B READY"
            );


            console.log(
                "A connected:",
                msg.processorConnected
            );


            return;

        }


        // ================================================
        // PROCESS RESULT
        // ================================================

        if (
            msg.type ===
            "process_result"
        ) {

            const request =
                pendingRequests.get(
                    msg.requestId
                );


            if (
                !request
            ) {

                console.warn(
                    "⚠️ Không tìm thấy request:",
                    msg.requestId
                );

                return;

            }


            // ============================================
            // RESOLVE
            // ============================================

            try {

                request.resolve(
                    msg.result
                );

            } catch (
                error
            ) {

                console.error(
                    "❌ Resolve request lỗi:",
                    error
                );

            }


            pendingRequests.delete(
                msg.requestId
            );


            return;

        }


        // ================================================
        // SERVER ERROR
        // ================================================

        if (
            msg.type ===
            "error"
        ) {

            console.error(
                "❌ SERVER ERROR:",
                msg
            );


            if (
                msg.requestId
            ) {

                const request =
                    pendingRequests.get(
                        msg.requestId
                    );


                if (
                    request
                ) {

                    request.reject(
                        new Error(
                            msg.error ||
                            "Server error"
                        )
                    );


                    pendingRequests.delete(
                        msg.requestId
                    );

                }

            }


            return;

        }

    };


    // ========================================================
    // ERROR
    // ========================================================

    socket.onerror = (
        error
    ) => {

        console.error(
            "❌ B WEBSOCKET ERROR:",
            error
        );

        /*
         * Không gọi connectWebSocket() ở đây.
         *
         * WebSocket sẽ tiếp tục onclose().
         * Reconnect được xử lý tại onclose()
         * để tránh tạo nhiều connection.
         */

    };


    // ========================================================
    // CLOSE
    // ========================================================

    socket.onclose = (
        event
    ) => {

        console.log(
            "🔴 B WEBSOCKET CLOSED"
        );


        console.log(
            "Code:",
            event.code
        );


        console.log(
            "Reason:",
            event.reason
        );


        // Chỉ xử lý nếu socket hiện tại
        // vẫn là socket đang dùng

        if (
            wsB === socket
        ) {

            wsB =
                null;

        }


        // ================================================
        // REJECT REQUEST ĐANG CHỜ
        // ================================================

        for (
            const [
                requestId,
                request
            ]
            of pendingRequests
        ) {

            try {

                request.reject(
                    new Error(
                        "WebSocket B bị mất kết nối"
                    )
                );

            } catch (
                error
            ) {

                console.error(
                    "❌ Reject request lỗi:",
                    error
                );

            }


            pendingRequests.delete(
                requestId
            );

        }


        // ================================================
        // RECONNECT
        // ================================================

        if (
            !manuallyClosed
        ) {

            scheduleReconnect();

        }

    };

}


// ============================================================
// SCHEDULE RECONNECT
// ============================================================

function scheduleReconnect() {

    if (
        manuallyClosed
    ) {

        return;

    }


    // Đã có timer reconnect
    // thì không tạo thêm

    if (
        reconnectTimer
    ) {

        return;

    }


    reconnectAttempts++;


    // ================================================
    // EXPONENTIAL BACKOFF
    //
    // 3s
    // 6s
    // 12s
    // 24s
    // 30s
    // 30s...
    // ================================================

    const delay =
        Math.min(
            RECONNECT_DELAY *
                Math.pow(
                    2,
                    reconnectAttempts - 1
                ),
            MAX_RECONNECT_DELAY
        );


    console.log(
        `🔄 B sẽ reconnect sau ${delay / 1000}s`
    );


    reconnectTimer =
        setTimeout(
            () => {

                reconnectTimer =
                    null;


                if (
                    manuallyClosed
                ) {

                    return;

                }


                connectWebSocket();

            },
            delay
        );

}


// ============================================================
// FORCE RECONNECT
// ============================================================

function reconnectWebSocket() {

    console.log(
        "🔄 B force reconnect..."
    );


    manuallyClosed =
        false;


    if (
        reconnectTimer
    ) {

        clearTimeout(
            reconnectTimer
        );

        reconnectTimer =
            null;

    }


    if (
        wsB
    ) {

        try {

            wsB.close();

        } catch (
            error
        ) {}

        wsB =
            null;

    }


    reconnectAttempts =
        0;


    connectWebSocket();

}


// ============================================================
// CLOSE WEBSOCKET
// ============================================================

function closeWebSocket() {

    console.log(
        "🔴 B đóng WebSocket..."
    );


    manuallyClosed =
        true;


    if (
        reconnectTimer
    ) {

        clearTimeout(
            reconnectTimer
        );

        reconnectTimer =
            null;

    }


    if (
        wsB
    ) {

        try {

            wsB.close();

        } catch (
            error
        ) {}

    }


    wsB =
        null;

}


// ============================================================
// CHECK CONNECTION
// ============================================================

function isWebSocketConnected() {

    return (
        wsB &&
        wsB.readyState ===
            WebSocket.OPEN
    );

}


// ============================================================
// processByA()
// ============================================================

function processByA(
    inputList
) {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            // ============================================
            // CHECK ARRAY
            // ============================================

            if (
                !Array.isArray(
                    inputList
                )
            ) {

                reject(
                    new Error(
                        "inputList phải là một mảng"
                    )
                );

                return;

            }


            // ============================================
            // CHECK WEBSOCKET
            // ============================================

            if (
                !wsB ||
                wsB.readyState !==
                    WebSocket.OPEN
            ) {

                reject(
                    new Error(
                        "WebSocket B chưa kết nối"
                    )
                );

                return;

            }


            // ============================================
            // REQUEST ID
            // ============================================

            const requestId =
                crypto.randomUUID();


            // ============================================
            // SAVE REQUEST
            // ============================================

            pendingRequests.set(
                requestId,
                {

                    resolve:
                        resolve,

                    reject:
                        reject,

                    createdAt:
                        Date.now(),

                    data:
                        inputList

                }
            );


            // ============================================
            // SEND
            // ============================================

            try {

                wsB.send(
                    JSON.stringify({

                        type:
                            "process",

                        requestId:
                            requestId,

                        data:
                            inputList

                    })
                );


                console.log(
                    "📤 B → process:",
                    requestId
                );


            } catch (
                error
            ) {

                pendingRequests.delete(
                    requestId
                );


                reject(
                    error
                );

            }

        }
    );

}


// ============================================================
// processByAWithTimeout()
// ============================================================

function processByAWithTimeout(
    inputList,
    timeout = 30000
) {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            let finished =
                false;


            // ============================================
            // TIMEOUT
            // ============================================

            const timer =
                setTimeout(
                    () => {

                        if (
                            finished
                        ) {

                            return;

                        }


                        finished =
                            true;


                        reject(
                            new Error(
                                "A xử lý quá thời gian"
                            )
                        );

                    },
                    timeout
                );


            // ============================================
            // PROCESS
            // ============================================

            processByA(
                inputList
            )
                .then(
                    result => {

                        if (
                            finished
                        ) {

                            return;

                        }


                        finished =
                            true;


                        clearTimeout(
                            timer
                        );


                        resolve(
                            result
                        );

                    }
                )
                .catch(
                    error => {

                        if (
                            finished
                        ) {

                            return;

                        }


                        finished =
                            true;


                        clearTimeout(
                            timer
                        );


                        reject(
                            error
                        );

                    }
                );

        }
    );

}


// ============================================================
// START WEBSOCKET
// ============================================================

connectWebSocket();

let bssDFP =
  "H142+dw+8kZum/WtQuswUQ==|i8JjTAeNbSWw8BSkSvTjx1aAB3DOkTNLaNX6bk0sTzFDiAF/3Rw1bnHoAgMixYnKglUufjg+2T/sUqvmlF/0UI/zqQau348SiwfR6Bh4kw==|ewkWrRVpFOAvJPmE|08|1";

(() => {
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    this._method = method;
    this._url = url;

    return originalOpen.call(this, method, url, ...rest);
  };

  XMLHttpRequest.prototype.send = function (body) {
    const method = this._method?.toUpperCase();
    const url = this._url;

    // =========================
    // GAME BEGIN
    // =========================
    if (
      method === "POST" &&
      url ===
        "https://games.shopee.vn/api-gateway/blockgame/game/begin?activityCode=3fefadadbc8963bb"
    ) {
      let newBody = body;

      try {
        if (typeof body === "string") {
          const data = JSON.parse(body);

          data.bssDFP = bssDFP;

          newBody = JSON.stringify(data);
        }

        console.log("Payload cũ:", body);
        console.log("Payload mới:", newBody);
      } catch (e) {
        console.warn("Payload không phải JSON:", e);
      }

      return originalSend.call(this, newBody);
    }

    // =========================
    // GAME POLL
    // =========================
    if (
      method === "POST" &&
      url ===
        "https://games.shopee.vn/api-gateway/blockgame/game/poll?activityCode=3fefadadbc8963bb"
    ) {
      const xhr = this;

      // Không gọi send ngay.
      // Chờ runCommand xong rồi mới gửi.
      (async () => {
        try {
          if (typeof body !== "string") {
            return originalSend.call(xhr, body);
          }

          const data = JSON.parse(body);
          const pollTime = Date.now().toString();

          xhr.setRequestHeader("x-chaplin-t", pollTime);
          xhr.setRequestHeader("x-chaplin-v", "1");

          const ttxText = JSON.stringify({
            sessionID: data.sessionID,
            ddlParam: data.ddlParam,
            bssDFP: bssDFP,
            chaplin_meta: {
              m: 0,
              c: 0,
              h: 0,
              t: 0,
              ts: Number(pollTime),
              ver: 1
            }
          });

          xhr.setRequestHeader(
            "x-chaplin-l",
            String(ttxText.length)
          );

          const result = await processByA([
                {
                    text: ttxText
                }
            ]);

          console.log("WS result:", result);

          const ttx = result[0]?.result;

          const newData = {
            data: ttx
          };

          const newBody = JSON.stringify(newData);

          console.log("Payload cũ:", body);
          console.log("Payload mới:", newBody);

          originalSend.call(xhr, newBody);

        } catch (e) {
          console.error("Lỗi xử lý poll:", e);

          // Nếu lỗi thì gửi payload gốc
          try {
            originalSend.call(xhr, body);
          } catch (err) {
            console.error("Không thể gửi XHR:", err);
          }
        }
      })();

      // send() gốc trả về undefined
      return;
    }

    return originalSend.call(this, body);
  };

  console.log("✅ XHR hook đã được cài");
})();
"use strict";
(window.webpackChunkblock_blast_fe = window.webpackChunkblock_blast_fe || []).push([[991], {
    10838(e, t, o) {
        var i = o(46518)
          , s = o(43839).findLast
          , r = o(6469);
        i({
            target: "Array",
            proto: !0
        }, {
            findLast: function(e) {
                return s(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        r("findLast")
    },
    76929(e, t, o) {
        o.r(t),
        o.d(t, {
            GameScene: function() {
                return He
            }
        }),
        o(23792),
        o(44114),
        o(98992),
        o(3949),
        o(23500),
        o(62953);
        var i = o(31635)
          , s = o(48571)
          , r = o(78248)
          , n = o(91784)
          , a = o(5167)
          , l = o(7604)
          , c = o(62474)
          , d = o(71241)
          , p = o(82128)
          , h = o(79444)
          , g = o(27606)
          , u = o(95080)
          , C = o(56984)
          , m = o(23241)
          , v = o(16222)
          , y = o(11972)
          , w = o(84814)
          , b = o(62794);
        const {ccclass: A} = r.P4R;
        window.cc._RF.push({}, "5a3eeoCkGxJS5/w6+sme3YM", "BoardModel", void 0);
        let P = class extends b.A {
        }
        ;
        P = (0,
        i.Cg)([A("BoardModel")], P);
        var k = P;
        window.cc._RF.pop();
        var R = o(69646);
        const {ccclass: M} = r.P4R;
        window.cc._RF.push({}, "7f7d1MPyetLtqjecx0VnSHF", "DynamicDifficultyModel", void 0);
        let S = class extends R.A {
        }
        ;
        S = (0,
        i.Cg)([M("DynamicDifficultyModel")], S);
        var _ = S;
        window.cc._RF.pop();
        var E = o(86704)
          , f = o(43357);
        const {ccclass: G} = r.P4R;
        window.cc._RF.push({}, "45a94OebqFEPoBfTt1EYbQx", "PropModel", void 0);
        let B = class extends f.A {
        }
        ;
        B = (0,
        i.Cg)([G("PropModel")], B);
        var F = B;
        window.cc._RF.pop(),
        o(81454);
        var T = o(92068)
          , N = o(53501)
          , D = o(92002)
          , x = o(41455)
          , I = o(47075)
          , L = o(3677)
          , O = o(55493)
          , K = o(94569)
          , U = o(13290);
        const {ccclass: q} = r.P4R;
        window.cc._RF.push({}, "2c139WEmkFOLbpWGOU4Cn7J", "CellModel", void 0);
        let W = class extends U.A {
        }
        ;
        W = (0,
        i.Cg)([q("CellModel")], W);
        var H = W;
        window.cc._RF.pop();
        var V = o(8089)
          , Z = o(89802);
        const {ccclass: Q} = r.P4R;
        window.cc._RF.push({}, "9d4b8NbpOZOJ6wJISHBg1eL", "CellShadowModel", void 0);
        let z = class extends Z.A {
        }
        ;
        z = (0,
        i.Cg)([Q("CellShadowModel")], z);
        var j = z;
        window.cc._RF.pop();
        const {ccclass: J} = r.P4R;
        window.cc._RF.push({}, "5c40dUdI/dGLLd8fCv4iKFx", "BlockShadowController", void 0);
        let X = class extends V.A {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(j)], X.prototype, "cellShadowModel", void 0),
        X = (0,
        i.Cg)([J("BlockShadowController")], X),
        window.cc._RF.pop();
        var Y = o(74172);
        const {ccclass: $} = r.P4R;
        window.cc._RF.push({}, "2c235whIQVGrpUV31fOF0tX", "BoardController", void 0);
        let ee = class extends Y.A {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], ee.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)("BoardModel")], ee.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)("CellModel")], ee.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)("GameModel")], ee.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("BlockShadowController")], ee.prototype, "blockShadowCtr", void 0),
        ee = (0,
        i.Cg)([$("BoardController")], ee),
        window.cc._RF.pop();
        var te = o(27900);
        const {ccclass: oe} = r.P4R;
        window.cc._RF.push({}, "7b05ebypJJFj75aytWLPct9", "DynamicDifficultyController", void 0);
        let ie = class extends te.A {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)("DynamicDifficultyModel")], ie.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)("GameModel")], ie.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("BlockController")], ie.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("BoardController")], ie.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("GameController")], ie.prototype, "gameCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("GameRecordController")], ie.prototype, "gameRecordCtr", void 0),
        ie = (0,
        i.Cg)([oe("DynamicDifficultyController")], ie),
        window.cc._RF.pop();
        const {ccclass: se} = r.P4R;
        window.cc._RF.push({}, "24b40UekGFGVrHKwufVmpPE", "BlockController", void 0);
        let re = class extends O.A {
            generateGuideBlocks() {
                const e = (0,
                T.C8)();
                return {
                    blocks: this.initBlockNodes(e.blocks, !0),
                    positions: e.positions,
                    useMode: e.useMode,
                    fallMode: e.fallMode
                }
            }
            generateBlocksFromRecord(e) {
                const t = [];
                for (let o = 0; o < e.length; o++) {
                    const i = e[o];
                    if (!i) {
                        t.push(null);
                        continue
                    }
                    const {type: s, color: n} = i
                      , a = (0,
                    r.Flv)(this.blockPfb);
                    a.getComponent(x.e).initBlock(s, n, o),
                    t.push(a)
                }
                return t
            }
            generateBlockGroupFromRecord(e, t) {
                let {difficultyMode: o, isUpgradeHard: i, isOriginDifficulty: s} = t;
                const r = this.generateBlocksFromRecord(e);
                this.blockGroupModel.setBlockGroup(this.generateBlockGroupItems(r), {
                    difficultyMode: o,
                    isUpgradeHard: i,
                    isOriginDifficulty: s
                }, !0),
                a.q.event.emit(m.L.REFRESH_BLOCK_GROUP)
            }
            initBlockNodes(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const o = []
                  , i = [];
                for (let s = 0; s < e.length; s++) {
                    const {blockType: n} = e[s];
                    if (!n) {
                        o.push(null);
                        continue
                    }
                    const a = t ? this.getUserGuideBlockColor(s) : (0,
                    K.Rr)(i);
                    i.push(a);
                    const l = (0,
                    r.Flv)(this.blockPfb);
                    l.getComponent(x.e).initBlock(n, a, s),
                    o.push(l)
                }
                return o
            }
            getUserGuideBlockColor(e) {
                return I.Ks[e] || I.F3.BLUE
            }
            generateBlockGroup() {
                if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) {
                    const {blocks: e} = this.generateGuideBlocks();
                    this.blockGroupModel.setBlockGroup(this.generateBlockGroupItems(e))
                } else {
                    const e = this.dynamicDifficultyCtr.getNextDifficultyMode()
                      , {blocks: t, isUpgradeHard: o, isOriginDifficulty: i} = this.generateBlocks(e);
                    console.log(e);
                    this.blockGroupModel.setBlockGroup(this.generateBlockGroupItems(t), {
                        difficultyMode: e,
                        isUpgradeHard: o,
                        isOriginDifficulty: i
                    }),
                    this.trackNewBlockGroup(),
                    this.checkFirstHardDifficulty(i)
                }
                a.q.event.emit(m.E.UPDATE_PROP_STATUS),
                a.q.event.emit(m.L.REFRESH_BLOCK_GROUP)
            }
            generateBlockGroupItems(e) {
                return e.map( (e, t) => {
                    if (!e)
                        return {
                            block: null,
                            blockShadow: null,
                            index: t
                        };
                    const o = e.getComponent(x.e)
                      , i = this.blockShadowCtr.getBlockShadowNode(o.type);
                    return o.groupIndex = t,
                    {
                        block: e,
                        blockShadow: i,
                        index: t
                    }
                }
                )
            }
            generateExtraBlock() {
                const e = (0,
                r.Flv)(this.blockPfb);
                return e.getComponent(x.e).initBlock(s.E.B11_1, I.F3.RAINBOW),
                e
            }
            trackNewBlockGroup() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const {difficultyMode: t, isUpgradeHard: o, hasUsedProps: i, isOriginDifficulty: r} = this.blockGroupModel;
                t !== s.N.Hard && t !== s.N.Impossible || !r || (0,
                D.Wy)(N.qo.GAME_PAGE, N.vf.NEW_BLOCK_GROUP, Object.assign(Object.assign({}, this.gameModel.getBaseTrackParams()), {
                    difficulty: o ? L.dA : t,
                    is_solved: e,
                    is_use_booster: i
                }))
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(F)], re.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], re.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(H)], re.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(_)], re.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], re.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ie)], re.prototype, "dynamicDifficultyCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(X)], re.prototype, "blockShadowCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ee)], re.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("GameController")], re.prototype, "gameCtr", void 0),
        re = (0,
        i.Cg)([se("BlockController")], re),
        window.cc._RF.pop();
        var ne = o(85713)
          , ae = o(35190);
        class le extends ae.A {
        }
        const {ccclass: ce} = r.P4R;
        window.cc._RF.push({}, "91c90WXvNFPeb53Cah+6wr5", "GameRecordController", void 0);
        let de = class extends ne.A {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], de.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(F)], de.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(k)], de.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], de.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(_)], de.prototype, "dynamicDifficultyModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(le)], de.prototype, "recordModel", void 0),
        de = (0,
        i.Cg)([ce("GameRecordController")], de),
        window.cc._RF.pop();
        const {ccclass: pe} = r.P4R;
        window.cc._RF.push({}, "5b796rA0qhJrJuPMaAgNYFE", "GameController", void 0);
        let he = class extends y.A {
            constructor() {
                super(...arguments),
                this.revivePopup = c.Z.RevivePopup
            }
            onBeginGame(e) {
                const t = this.boardModel
                  , o = this.gameModel
                  , i = !h.i.user.userGuide;
                this.gameRecordCtr.init(),
                (0,
                s.X)(),
                (0,
                s.Z)({
                    boardRow: t.boardRow,
                    boardCol: t.boardCol,
                    randomSeed: o.randomSeed,
                    wellModeRateConfigList: o.wellModeRateConfigList,
                    scoreList: o.scoreConfigList
                }),
                i ? (0,
                s.V)() : (0,
                s.W)(),
                i ? (this.boardCtr.createInitialBoard(i),
                this.blockCtr.generateBlockGroup(i)) : (e && this.boardCtr.createBoardFromRecord(e.board, !0),
                a.q.event.emit(m.E.SHOW_FILL_BOARD_ANIM)),
                a.q.event.emit(m.L.UPDATE_SCORE, 0, 0)
            }
            onRecoverGame(e) {
                const t = this.gameModel;
                this.gameRecordCtr.init();
                const {score: o, boardRow: i, boardCol: r, randomSeed: n, wellModeRateConfigList: l, coreGlobalData: c, blockGroup: d, placedBlocks: p, difficultyMode: g, isUpgradeHard: u, isOriginDifficulty: y, hasUsedProps: w, currentOffset: b, ddList: A, seq: P, boardCells: k, operationData: R, scoreConfigList: M} = e;
                (0,
                s.X)(),
                (0,
                s.Z)({
                    boardRow: i,
                    boardCol: r,
                    randomSeed: n,
                    wellModeRateConfigList: l,
                    scoreList: M
                }),
                R && (0,
                s.$)((0,
                s.Y)(R)),
                (0,
                s.a8)(c),
                this.ddModel.setSeq(P),
                this.ddModel.resetDDList(A, b),
                this.boardCtr.createBoardFromRecord(k),
                this.blockCtr.generateBlockGroupFromRecord(d, {
                    difficultyMode: g,
                    isUpgradeHard: u,
                    isOriginDifficulty: y
                }),
                this.blockGroupModel.hasUsedProps = !!w,
                p.forEach(e => {
                    this.blockGroupModel.setPlacedBlockData(e)
                }
                );
                const S = (0,
                s.a3)();
                S !== o && (this.gameModel.score = S),
                a.q.event.emit(m.L.SET_SCORE, S),
                a.q.event.emit(m.L.GAME_RECORD);
                const _ = "".concat(h.i.user.userid, ".").concat((0,
                C.Fm)());
                (0,
                s.T)(_),
                t.randomSeed = _;
                const E = this.propModel.getPropAdsInventory(v.P7.REVIVE)
                  , f = this.propModel.isPropUseLimit(v.P7.REVIVE)
                  , G = this.propModel.getPropUseTime(v.P7.REVIVE)
                  , B = this.propModel.getPropUseLimit(v.P7.REVIVE)
                  , F = E > 0 && !f
                  , T = e.propUseTimes[v.P7.REVIVE] < G && G <= B;
                if (F || T)
                    return T && this.propModel.subPropUseOneTime(v.P7.REVIVE),
                    void this.propCtr.useProp(F ? v.kR.ADS : v.kR.COIN, v.P7.REVIVE);
                const N = [v.P7.EXTRA_BLOCK, v.P7.BOMB, v.P7.REMOVE]
                  , D = N.find(e => this.propModel.getPropAdsInventory(e) > 0 && !this.propModel.isPropUseLimit(e))
                  , x = N.find(t => {
                    const o = this.propModel.getPropUseTime(t)
                      , i = this.propModel.getPropUseLimit(t);
                    return e.propUseTimes[t] < o && o <= i
                }
                );
                D ? this.propCtr.useProp(v.kR.ADS, D) : x && (this.propModel.subPropUseOneTime(x),
                this.propCtr.useProp(v.kR.COIN, x));
                const {lastOffset: I, preloadThreshold: L} = this.ddModel
                  , {sessionID: O} = this.gameModel
                  , K = I - b <= L;
                if (this.blockGroupModel.isEmpty() && b >= I)
                    return this.ddCtr.pollDDList({
                        sessionID: O,
                        ddlParam: this.ddCtr.getDDLParam(I + 1)
                    }),
                    a.q.spinner.forceStartShow(),
                    void (this.gameModel.isWaitingDDL = !0);
                K && this.ddCtr.pollDDList({
                    sessionID: O,
                    ddlParam: this.ddCtr.getDDLParam(I + 1)
                }),
                !t.isShowingUserGuide && this.boardCtr.checkIsDeath() && this.handleDeath()
            }
            onRecoverUsePropFailed(e) {
                e !== v.P7.REVIVE || a.q.ui.isUIOpen(c.Z.RevivePopup) || (this.propModel.isPropUseLimit(v.P7.REVIVE) ? a.q.event.emit(m.L.GAME_END) : this.boardCtr.checkIsDeath() && this.handleDeath())
            }
            handleDeath() {
                a.q.event.emit(m.E.DEATH_WAITING),
                a.q.event.emit(m.E.DEATH_WAITING_END),
                a.q.event.emit(m.L.GAME_END)
            }
            onFinishGame() {
                return (0,
                i.sH)(this, arguments, void 0, function() {
                    var e = this;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function*() {
                        var o;
                        a.q.ui.closeAllPopup();
                        const i = e.gameModel
                          , r = e.boardModel;
                        if (!i || !r)
                            return;
                        const {boardCol: u, boardRow: C} = r;
                        e.gameModel.isGameOver = !0,
                        (null === (o = h.i.user.userSetting) || void 0 === o ? void 0 : o.data) && (h.i.user.userSetting.data.userGuide = "1"),
                        a.q.spinner.startWithDelay(500);
                        try {
                            const {sessionID: o, score: h, maxCombo: g, usedBlocks: m, playStartTime: v, isUserGuide: y, randomSeed: w, totalCombo: b} = i
                              , A = yield(0,
                            n.io)({
                                sessionID: o,
                                score: h,
                                coreVersion: window.CORE_VERSION,
                                replayData: (0,
                                s.a0)({
                                    boardCol: u,
                                    boardRow: C,
                                    randomSeed: w,
                                    operationData: (0,
                                    s._)()
                                }),
                                trace: {
                                    maxCombo: g,
                                    playTime: Date.now() - v,
                                    usedBlocks: m,
                                    newUser: y,
                                    loseDD: e.blockGroupModel.difficultyMode,
                                    manualQuit: t,
                                    tilesFilled: r.getFilledCellsCount(),
                                    totalCombo: b
                                }
                            });
                            if (0 === A.code)
                                e.gameRecordCtr.clearRecord(),
                                yield a.q.ui.open({
                                    uiPath: c.Z.ResultPopup,
                                    data: {
                                        resultData: A.data,
                                        todayHighestScore: i.todayHighestScore
                                    }
                                });
                            else
                                switch (A.code) {
                                case d.ze.MULTI_DEVICE:
                                    e.gameRecordCtr.clearRecord(),
                                    a.q.ui.open({
                                        uiPath: c.Z.MultipleDeviceKickedOutPopup,
                                        data: {
                                            quitType: p.z.BACK_LANDING
                                        }
                                    });
                                    break;
                                case d.ze.SESSION_INVALID:
                                case d.ze.GAME_DATA_INVALID:
                                    e.gameRecordCtr.clearRecord(),
                                    a.q.error.showMonsterToast({
                                        msg: (0,
                                        l.wb)("text_network_error"),
                                        quitType: p.z.BACK_LANDING,
                                        hideClose: !0
                                    });
                                    break;
                                default:
                                    if (403 === A.status) {
                                        a.q.error.showMonsterToast({
                                            msg: (0,
                                            l.wb)("text_network_error"),
                                            quitType: p.z.BACK_LANDING,
                                            onRetry: () => {
                                                window.location.reload()
                                            }
                                            ,
                                            onQuit: () => {
                                                e.gameRecordCtr.clearRecord()
                                            }
                                            ,
                                            hideClose: !0
                                        });
                                        break
                                    }
                                    a.q.error.showMonsterToast({
                                        msg: (0,
                                        l.wb)("text_network_error"),
                                        quitType: p.z.BACK_LANDING,
                                        onRetry: e.onFinishGame.bind(e),
                                        onQuit: () => {
                                            var t;
                                            null === (t = e.gameRecordCtr) || void 0 === t || t.clearRecord()
                                        }
                                        ,
                                        hideClose: !0
                                    })
                                }
                        } catch (t) {
                            a.q.error.showMonsterToast({
                                msg: (0,
                                l.wb)("text_network_error"),
                                quitType: p.z.BACK_LANDING,
                                onQuit: () => {
                                    var t;
                                    null === (t = e.gameRecordCtr) || void 0 === t || t.clearRecord()
                                }
                                ,
                                hideClose: !0
                            }),
                            (0,
                            g.Kb)("[onFinishGame error] 结算异常", {
                                title: "Game Finish Error",
                                error: t
                            })
                        } finally {
                            a.q.spinner.end()
                        }
                    }()
                })
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], he.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(F)], he.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(k)], he.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], he.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(_)], he.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(re)], he.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ee)], he.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ie)], he.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(de)], he.prototype, "gameRecordCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("PropController")], he.prototype, "propCtr", void 0),
        he = (0,
        i.Cg)([pe("GameController")], he),
        window.cc._RF.pop();
        var ge = o(40736)
          , ue = o(91879)
          , Ce = o(48503)
          , me = o(24521)
          , ve = o(49452)
          , ye = o(11517);
        const {ccclass: we} = r.P4R;
        window.cc._RF.push({}, "5c51cNOz49CcJ/7A3MxXk+E", "PreEliminateLightModel", void 0);
        let be = class extends ye.A {
        }
        ;
        be = (0,
        i.Cg)([we("PreEliminateLightModel")], be);
        var Ae = be;
        window.cc._RF.pop();
        const {ccclass: Pe} = r.P4R;
        window.cc._RF.push({}, "9d98cIshk5MFJ5j3UgErnTQ", "EliminateController", void 0);
        let ke = class extends ve.A {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(k)], ke.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(H)], ke.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(Ae)], ke.prototype, "preEliminateLightModel", void 0),
        ke = (0,
        i.Cg)([Pe("EliminateController")], ke),
        window.cc._RF.pop();
        var Re = o(56435)
          , Me = o(68031);
        const {ccclass: Se} = r.P4R;
        window.cc._RF.push({}, "2ae94VQ5oNB+6aiFDwSxFKA", "ComboHintModel", void 0);
        let _e = class extends Me.A {
        }
        ;
        _e = (0,
        i.Cg)([Se("ComboHintModel")], _e);
        var Ee = _e;
        window.cc._RF.pop();
        var fe = o(72739);
        const {ccclass: Ge} = r.P4R;
        window.cc._RF.push({}, "01770s9IsRMKK7QO6gCHs12", "ScoreHintModel", void 0);
        let Be = class extends fe.A {
        }
        ;
        Be = (0,
        i.Cg)([Ge("ScoreHintModel")], Be);
        var Fe = Be;
        window.cc._RF.pop();
        const {ccclass: Te} = r.P4R;
        window.cc._RF.push({}, "fc3456yOPZAfoSHUjLfR8Vv", "GameEffectController", void 0);
        let Ne = class extends Re.A {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], Ne.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(Ee)], Ne.prototype, "comboHintModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(Fe)], Ne.prototype, "scoreHintModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(k)], Ne.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(H)], Ne.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(re)], Ne.prototype, "blockCtr", void 0),
        Ne = (0,
        i.Cg)([Te("GameEffectController")], Ne),
        window.cc._RF.pop();
        var De = o(24319);
        const {ccclass: xe} = r.P4R;
        window.cc._RF.push({}, "d63c4YSUNFOiqDtMttvHjKO", "PropController", void 0);
        let Ie = class extends De.A {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], Ie.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(F)], Ie.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(_)], Ie.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], Ie.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ie)], Ie.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(re)], Ie.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ee)], Ie.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(he)], Ie.prototype, "gameCtr", void 0),
        Ie = (0,
        i.Cg)([xe("PropController")], Ie),
        window.cc._RF.pop();
        var Le = o(41986)
          , Oe = o(85185);
        const {ccclass: Ke} = r.P4R;
        window.cc._RF.push({}, "d178b9TpRFERbIEtPdxMePD", "MilestoneModel", void 0);
        let Ue = class extends Le.t {
            constructor() {
                super(...arguments),
                this.milestoneList = []
            }
            initMilestoneList(e) {
                this.milestoneList = (0,
                Oe.tG)(e)
            }
        }
        ;
        Ue = (0,
        i.Cg)([Ke("MilestoneModel")], Ue);
        var qe = Ue;
        window.cc._RF.pop();
        const {ccclass: We} = r.P4R;
        window.cc._RF.push({}, "ce272sStFZLIYAeRqmfBKtc", "GameScene", void 0);
        let He = class extends Ce.A {
            constructor() {
                super(...arguments),
                this.gameViewPath = c.Z.GameView,
                this.mdapSceneName = "game"
            }
            loadEffectAssets() {
                const e = [c.Z.BlockShadow, c.Z.CellShadow, c.Z.ComboHint, c.Z.ComboNum, c.Z.ScoreHint, c.Z.ScoreNum, c.Z.GiveALike, ...h.i.isLowEquipment ? [] : [c.Z.EliminateLight, c.Z.CellDisappear, c.Z.CellDisappearLight, c.Z.PreEliminateParticle, c.Z.PreEliminateLight]];
                ue.h.loadAssetFromBundle(e)
            }
            beforeEnter(e, t) {
                return (0,
                i.sH)(this, arguments, void 0, function(e, t) {
                    var o = this;
                    let {beginData: i, recordData: s} = e;
                    return function*() {
                        try {
                            (0,
                            ge.di)(o.mdapSceneName),
                            yield(0,
                            me.B4)(),
                            yield ue.h.load(o.gameViewPath, r.tX0, t),
                            (0,
                            me.YJ)(),
                            o.loadEffectAssets(),
                            s ? o.handleRecordData(s) : o.handleBeginData(i)
                        } catch (e) {
                            throw e.message = "[BaseGameScene] beforeEnter error: ".concat(e.message),
                            e
                        }
                    }()
                })
            }
            handleBeginData(e) {
                const t = this.gameModel
                  , o = this.ddModel
                  , i = this.propModel
                  , s = this.milestoneModel
                  , r = e.data;
                t.initGameBeginData(e),
                i.initProps(r.itemList),
                s.initMilestoneList(r.milestoneList),
                o.initDDList(r.ddl)
            }
            handleRecordData(e) {
                const t = this.gameModel
                  , o = this.ddModel
                  , i = this.propModel
                  , s = this.milestoneModel
                  , {milestoneList: r, itemList: n, ddList: a} = e;
                t.initGameFromRecordData(e),
                i.initProps(n),
                s.initMilestoneList(r),
                o.initDDList(a)
            }
            onEnter(e) {
                return (0,
                i.sH)(this, arguments, void 0, function(e) {
                    var t = this;
                    let {recordData: o, lastGameData: i} = e;
                    return function*() {
                        yield a.q.ui.open({
                            uiPath: t.gameViewPath,
                            data: {
                                recordData: o,
                                lastGameData: i
                            }
                        })
                    }()
                })
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], He.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(F)], He.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(H)], He.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(Fe)], He.prototype, "scoreHintModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(Ae)], He.prototype, "preEliminateLightModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(qe)], He.prototype, "milestoneModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(_)], He.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(he)], He.prototype, "gameController", void 0),
        He = (0,
        i.Cg)([We("GameScene"), (0,
        u.b6)([w.A, k, j, E.u, F, _, qe, H, le, Ee, Fe, Ae]), (0,
        u.XJ)([he, re, X, ee, ie, ke, de, Ne, Ie])], He),
        window.cc._RF.pop();
        var Ve = o(92384)
          , Ze = (o(89807),
        o(90710),
        o(87459),
        o(35440))
          , Qe = (o(23313),
        o(24580),
        o(70835),
        o(72751),
        o(3918))
          , ze = (o(39277),
        o(10838),
        o(26910),
        o(82179))
          , je = o(56431)
          , Je = o(32503);
        const {ccclass: Xe, property: Ye} = r.P4R;
        window.cc._RF.push({}, "7c44bdC4WZB+7WIkaotRSHT", "NewMilestone", void 0);
        let $e = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.showingNewMilestoneIndex = -1
            }
            showNewMilestone(e) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const t = e.getComponent(Je.a);
                    if (!t || t.getMilestoneIndex() === this.showingNewMilestoneIndex)
                        return;
                    this.showingNewMilestoneIndex = t.getMilestoneIndex();
                    const o = t.getIconPrizeNode().getWorldPosition()
                      , i = this.node.getComponent(r.$lP).convertToNodeSpaceAR(o)
                      , s = this.milestoneModel.milestoneList.slice().sort( (e, t) => e.score - t.score)
                      , n = this.gameModel.score
                      , a = s.findLast(e => e.score <= n)
                      , {newIcon: l} = a
                      , c = this.icon.getComponent(r.kxk);
                    l ? yield ue.h.setRemoteSprite(c, l, ".png") : yield ue.h.setSpriteFromBundle(c, ze.O.image_new_milstone),
                    this.node && this.node.isValid && (this.node.active = !0,
                    this.icon.scale = (0,
                    r.v3)(0, 0, 0),
                    this.icon.setPosition(-9, -80, 0),
                    this.text.scale = (0,
                    r.v3)(0, 0, 0),
                    this.background.active = !0,
                    this.icon.active = !0,
                    (0,
                    r.QxW)(this.icon).call( () => {
                        this.backgroundLightDb.node.active = !0,
                        this.backgroundLightDb.playAnimation("milestone2", 1)
                    }
                    ).to(.26, {
                        scale: (0,
                        r.v3)(1.1, 1.1, 1)
                    }).to(.21, {
                        scale: (0,
                        r.v3)(1, 1, 1)
                    }).delay(0).call( () => {
                        this.backgroundLightDb.node.active = !1,
                        this.backgroundLightDb.armature().animation.gotoAndStopByFrame("milestone2", 0)
                    }
                    ).to(.25, {
                        position: (0,
                        r.v3)(this.icon.position.x, this.icon.position.y - 17, this.icon.position.z)
                    }).call( () => {
                        this.background.active = !1
                    }
                    ).to(.25, {
                        position: (0,
                        r.v3)(i.x, i.y, i.z),
                        scale: (0,
                        r.v3)(1, 1, 1)
                    }).call( () => {
                        this.icon.active = !1,
                        t.setStatus(je.a.RECEIVING),
                        (0,
                        r.QxW)(e).to(.04, {
                            scale: (0,
                            r.v3)(1.2, 1.2, 1)
                        }).to(.13, {
                            scale: (0,
                            r.v3)(.9, .9, 1)
                        }).to(.2, {
                            scale: (0,
                            r.v3)(1, 1, 1)
                        }).start(),
                        this.showingNewMilestoneIndex = -1
                    }
                    ).start(),
                    this.text.active = !1,
                    this.db.node.active = !0)
                })
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(qe)], $e.prototype, "milestoneModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], $e.prototype, "gameModel", void 0),
        (0,
        i.Cg)([Ye(r.bP0)], $e.prototype, "text", void 0),
        (0,
        i.Cg)([Ye(r.bP0)], $e.prototype, "icon", void 0),
        (0,
        i.Cg)([Ye(r.bP0)], $e.prototype, "background", void 0),
        (0,
        i.Cg)([Ye(r.bdY.ArmatureDisplay)], $e.prototype, "db", void 0),
        (0,
        i.Cg)([Ye(r.bdY.ArmatureDisplay)], $e.prototype, "backgroundLightDb", void 0),
        $e = (0,
        i.Cg)([Xe("NewMilestone")], $e),
        window.cc._RF.pop();
        var et = o(47080);
        const tt = {
            1: 1,
            2: 0,
            3: 2
        }
          , {ccclass: ot, property: it} = r.P4R;
        window.cc._RF.push({}, "5d7dcgSFdtGjbydZ3gxEN9L", "UserGuidePanel", void 0);
        let st = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.guideTween = null,
                this.currentStep = 0
            }
            onEnable() {
                a.q.event.on(m.E.ELIMINATE_BLOCK, this.showNextStep, this)
            }
            onDisable() {
                a.q.event.targetOff(this)
            }
            showNextStep() {
                if (this.gameModel.isShowingUserGuide) {
                    if (this.currentStep >= 3)
                        return a.q.event.emit(m.E.FINISH_USER_GUIDE),
                        a.q.event.targetOff(this),
                        void this.closeGuide();
                    this.currentStep++,
                    this.gameModel.currentUserGuideStep = this.currentStep,
                    a.q.event.emit(m.L.GAME_RECORD),
                    this.scheduleOnce( () => {
                        this.drawGuideMask(),
                        this.showFingerMove()
                    }
                    , .5)
                }
            }
            drawGuideMask() {
                const e = this.contentList[this.currentStep - 1];
                if (!e)
                    return;
                const t = e.getComponent(r.$lP)
                  , o = this.maskNode.getComponent(r.n1E);
                this.maskNode.active = !0;
                const i = o.graphics;
                i.clear(),
                i.rect(-1, -1, 2, 2),
                i.fill(),
                i.stroke();
                const {width: s, height: n} = t.contentSize;
                this.maskNode.setScale(s / 2, n / 2, 1),
                this.maskNode.setWorldPosition(e.getWorldPosition())
            }
            showFingerMove() {
                return;
                const e = this.targetList[this.currentStep - 1]
                  , t = tt[this.currentStep]
                  , o = this.blockGroup.getComponent(Ve.x).blockPlaceMentArr[t].getWorldPosition()
                  , i = e.getWorldPosition();
                r.Kak.stopAllByTarget(this.guideFinger);
                const s = new r.eBl(o.x + 85,o.y - 55,o.z)
                  , n = new r.eBl(i.x + 85,i.y - 55,i.z);
                this.guideFinger.worldPosition = s.clone(),
                this.guideFinger.active = !0;
                const a = (0,
                r.QxW)(this.guideFinger).delay(.2).to(.5, {
                    worldPosition: n
                }).delay(1).call( () => {
                    this.guideFinger.worldPosition = s.clone()
                }
                );
                this.guideTween = (0,
                r.QxW)(this.guideFinger).repeatForever(a).start()
            }
            showGuide() {
                return;
                this.node.active = !0,
                0 === this.gameModel.currentUserGuideStep ? (this.currentStep++,
                this.gameModel.currentUserGuideStep = this.currentStep) : this.currentStep = this.gameModel.currentUserGuideStep,
                a.q.ui.forceHideBackBtn = !0,
                a.q.ui.updateBackBtnVisible(),
                this.fakeBack.active = !0;
                const e = this.maskNode.getSiblingIndex();
                this.blockGroup.setSiblingIndex(e),
                this.drawGuideMask(),
                this.showFingerMove(),
                (0,
                D.xO)(N.qo.GUIDE_PAGE)
            }
            getCurrentTargetCell() {
                switch (this.currentStep) {
                case 1:
                    return this.boardModel.grid[0][3];
                case 2:
                    return this.boardModel.grid[0][1];
                case 3:
                    return this.boardModel.grid[5][0];
                default:
                    return this.boardModel.grid[0][0]
                }
            }
            clearGuideFinger() {
                this.guideFinger.active = !1,
                this.guideTween && (this.guideTween.stop(),
                this.guideTween = null)
            }
            closeGuide() {
                this.guideTween && (this.guideTween.stop(),
                this.guideTween = null),
                a.q.ui.forceHideBackBtn = !1,
                a.q.ui.updateBackBtnVisible();
                const e = this.board.getSiblingIndex();
                this.blockGroup.setSiblingIndex(e + 1),
                this.fakeBack.active = !1,
                this.maskNode.active = !1,
                this.guideFinger.active = !1,
                this.node.active = !1
            }
            onDestroy() {
                a.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(et.A)], st.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(b.A)], st.prototype, "boardModel", void 0),
        (0,
        i.Cg)([it(r.bP0)], st.prototype, "guideFinger", void 0),
        (0,
        i.Cg)([it(r.bP0)], st.prototype, "maskNode", void 0),
        (0,
        i.Cg)([it([r.bP0])], st.prototype, "contentList", void 0),
        (0,
        i.Cg)([it([r.bP0])], st.prototype, "targetList", void 0),
        (0,
        i.Cg)([it(r.bP0)], st.prototype, "blockGroup", void 0),
        (0,
        i.Cg)([it(r.bP0)], st.prototype, "board", void 0),
        (0,
        i.Cg)([it(r.bP0)], st.prototype, "fakeBack", void 0),
        st = (0,
        i.Cg)([ot("UserGuidePanel")], st),
        window.cc._RF.pop();
        var rt = o(81452)
          , nt = o(91310)
          , at = o(8773);
        const {ccclass: lt} = r.P4R;
        window.cc._RF.push({}, "68380X/2bBJd5XZ8zVPA6wI", "GameBasePropPopup", void 0);
        let ct = class extends at.P {
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(F)], ct.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], ct.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], ct.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(_)], ct.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(ie)], ct.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(Ie)], ct.prototype, "propCtr", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(de)], ct.prototype, "gameRecordCtr", void 0),
        ct = (0,
        i.Cg)([lt("GameBasePropPopup")], ct),
        window.cc._RF.pop();
        const {ccclass: dt} = r.P4R;
        window.cc._RF.push({}, "fe7e8Dvi21HlKgoKe1x6Wa3", "BombPopup", void 0);
        let pt = class extends ct {
            constructor() {
                super(...arguments),
                this.propType = v.P7.BOMB,
                this.adsType = rt.gy.BOMB,
                this.bvgcEntryPoint = nt.Q.BOMB_SLOT
            }
        }
        ;
        pt = (0,
        i.Cg)([dt("BombPopup")], pt),
        window.cc._RF.pop();
        const {ccclass: ht} = r.P4R;
        window.cc._RF.push({}, "6f41aTgGsdIeKUWmCxgQF5c", "ExtraBlockPopup", void 0);
        let gt = class extends ct {
            constructor() {
                super(...arguments),
                this.propType = v.P7.EXTRA_BLOCK,
                this.adsType = rt.gy.EXTRA_BLOCK,
                this.bvgcEntryPoint = nt.Q.EXTRA_SLOT
            }
        }
        ;
        gt = (0,
        i.Cg)([ht("ExtraBlockPopup")], gt),
        window.cc._RF.pop();
        var ut = o(28089);
        const {ccclass: Ct} = r.P4R;
        window.cc._RF.push({}, "df540SUIlhGXoGfDdKsIJss", "NewUserChallengePopup", void 0);
        let mt = class extends ut.A {
            onOpen() {
                a.q.spinner.forceEnd(),
                (0,
                D.ad)(N.qo.GAME_PAGE, N.W1.REWARDS_GUIDE)
            }
            onClickChallenge() {
                (0,
                D.nx)(N.qo.GAME_PAGE, N.vf.ACTION_BUTTON, N.W1.REWARDS_GUIDE, {
                    action_button_type: "challenge"
                }),
                a.q.event.emit(m.E.START_USER_GUIDE),
                this.close()
            }
            back() {
                this.onClickChallenge()
            }
        }
        ;
        mt = (0,
        i.Cg)([Ct("NewUserChallengePopup")], mt),
        window.cc._RF.pop();
        const {ccclass: vt} = r.P4R;
        window.cc._RF.push({}, "f46ccv8+ghDtINOnBhtsMdv", "RemovePopup", void 0);
        let yt = class extends ct {
            constructor() {
                super(...arguments),
                this.propType = v.P7.REMOVE,
                this.adsType = rt.gy.REMOVE,
                this.bvgcEntryPoint = nt.Q.REMOVE_SLOT
            }
        }
        ;
        yt = (0,
        i.Cg)([vt("RemovePopup")], yt),
        window.cc._RF.pop(),
        o(54520);
        var wt = o(87778)
          , bt = o(84218)
          , At = o(78811)
          , Pt = o(75913)
          , kt = o(88584)
          , Rt = o(68062);
        const {ccclass: Mt, property: St} = r.P4R;
        window.cc._RF.push({}, "1b8d2qD1IJDh76FBmAGjGa3", "ResultPopup", void 0);
        let _t = class extends ut.A {
            constructor() {
                super(...arguments),
                this.mask = null,
                this.titleNode = null,
                this.bannerNode = null,
                this.dbFire = null,
                this.gameOverNode = null,
                this.bestScoreNode = null,
                this.txtScore = null,
                this.txtScoreTitle = null,
                this.iconNewScore = null,
                this.milestoneProgress = null,
                this.btnContent = null,
                this.withShareBtnContent = null,
                this.withShareBtnTryAgain = null,
                this.btnShare = null,
                this.shareReward = null,
                this.btnTryAgain = null,
                this.btnClose = null,
                this.milestone = [],
                this.todayHighestScore = 0,
                this.newScore = 0,
                this.rankStr = "",
                this.isNewRecord = !1,
                this.isPlayingAnimation = !1,
                this.hasClose = !1
            }
            beforeOpen(e) {
                return (0,
                i.sH)(this, arguments, void 0, function(e) {
                    var t = this;
                    let {resultData: o, todayHighestScore: i} = e;
                    return function*() {
                        t.todayHighestScore = i,
                        t.rankStr = -1 === o.rank || o.rank > 100 ? "100+" : o.rank.toString(),
                        t.gameOverNode.active = !1,
                        t.bestScoreNode.active = !1,
                        t.dbFire.node.active = !1,
                        t.btnClose.active = !1,
                        t.btnTryAgain.active = !1,
                        t.btnContent.active = !1,
                        t.withShareBtnContent.active = !1,
                        t.withShareBtnTryAgain.active = !1,
                        t.btnShare.active = !1,
                        a.q.ui.forceHideBackBtn = !1,
                        a.q.ui.updateBackBtnVisible(),
                        t.milestone = (0,
                        Oe.tG)(o.milestoneList),
                        yield t.preloadRewardAssets(),
                        a.q.event.emit(m.L.GAME_PAUSE)
                    }()
                })
            }
            preloadRewardAssets() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    yield(0,
                    Oe.sD)(this.milestone),
                    (0,
                    Oe.B6)(this.milestone)
                })
            }
            onOpen(e) {
                let {resultData: t} = e;
                this.updateMilestoneProgress(),
                this.updateTitle(t.isNewRecord),
                this.updateScore(t.score),
                this.trackImpression(),
                window.__bbAutoContinue !== !1 && this.scheduleOnce( () => this._bbAutoContinuePlay(), .15)
            }
            _bbAutoContinuePlay() {
                if (window.__bbAutoContinue === !1 || this.hasClose || this._bbAutoContinued)
                    return;
                if (this.isPlayingAnimation)
                    return void this.scheduleOnce( () => this._bbAutoContinuePlay(), .05);
                this._bbAutoContinued = !0,
                this.onClickTryAgain()
            }
            updateTitle(e) {
                this.isNewRecord = e,
                this.gameOverNode.active = !e,
                this.bestScoreNode.active = e,
                this.iconNewScore.active = e,
                this.txtScoreTitle.string = e ? (0,
                l.wb)("text_result_best_score") : (0,
                l.wb)("text_result_score");
                const t = e ? this.bestScoreNode : this.gameOverNode;
                this.titleNode = t.getChildByName("titleNode"),
                this.bannerNode = t.getChildByName("bannerNode")
            }
            updateScore(e) {
                this.newScore = e,
                this.txtScore.string = e.toString()
            }
            updateMilestoneProgress() {
                this.milestoneProgress.setData(this.milestone.map(e => Object.assign(Object.assign({}, e), {
                    claimStatus: e.claimStatus !== je.a.RECEIVED ? je.a.UNRECEIVED : e.claimStatus
                })))
            }
            openingAnim() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.isPlayingAnimation = !0,
                    a.q.audio.playEffect(this.isNewRecord ? wt.P.audio_win_congrats : wt.P.audio_lose),
                    this.isNewRecord ? yield this.playNewScoreAnimation() : yield this.playNormalScoreAnimation();
                    const e = this.milestone.filter(e => e.claimStatus === je.a.RECEIVING && e.score <= this.newScore).sort( (e, t) => e.score - t.score);
                    yield this.playPrizeAnimation(e)
                })
            }
            playNormalScoreAnimation() {
                return;
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.titleNode.getComponent(r.wFi) && (0,
                    r.QxW)(this.titleNode.getComponent(r.wFi)).set({
                        opacity: 0
                    }).to(.38, {
                        opacity: 255
                    }).start(),
                    this.bannerNode.getComponent(r.wFi) && (0,
                    r.QxW)(this.bannerNode.getComponent(r.wFi)).set({
                        opacity: 0
                    }).delay(.09).to(.37, {
                        opacity: 255
                    }).start(),
                    this.txtScoreTitle.getComponent(r.wFi) && (0,
                    r.QxW)(this.txtScoreTitle.getComponent(r.wFi)).set({
                        opacity: 0
                    }).delay(.17).to(.37, {
                        opacity: 255
                    }).start(),
                    this.txtScore.getComponent(r.wFi) && (0,
                    r.QxW)(this.txtScore.getComponent(r.wFi)).set({
                        opacity: 0
                    }).delay(.25).to(.37, {
                        opacity: 255
                    }).start(),
                    this.milestoneProgress.node && this.milestoneProgress.node.getComponent(r.wFi) && (yield(0,
                    r.QxW)(this.milestoneProgress.node.getComponent(r.wFi)).set({
                        opacity: 0
                    }).delay(.34).to(.37, {
                        opacity: 255
                    }).startAsync())
                })
            }
            playNewScoreAnimation() {
                return;
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.mask.getComponent(r.wFi) && (0,
                    r.QxW)(this.mask.getComponent(r.wFi)).set({
                        opacity: 0
                    }).to(.13, {
                        opacity: 180
                    }).start(),
                    (0,
                    r.QxW)(this.bannerNode).set({
                        scale: r.eBl.ZERO,
                        active: !0
                    }).delay(.05).to(.13, {
                        scale: (0,
                        r.v3)(1.2, 1.2, 1.2)
                    }).to(.08, {
                        scale: r.eBl.ONE
                    }).start();
                    const e = this.titleNode.getPosition();
                    (0,
                    r.QxW)(this.titleNode).set({
                        scale: (0,
                        r.v3)(0, 1, 1),
                        position: (0,
                        r.v3)(e.x, e.y - 105, e.z),
                        active: !0
                    }).delay(.13).to(.13, {
                        scale: (0,
                        r.v3)(1.2, 1, 1),
                        position: e
                    }).call( () => {
                        this.dbFire.node.active = !0,
                        this.dbFire.playAnimation("win_FX1", 1)
                    }
                    ).to(.1, {
                        scale: r.eBl.ONE
                    }).start(),
                    this.txtScoreTitle.getComponent(r.wFi) && (0,
                    r.QxW)(this.txtScoreTitle.getComponent(r.wFi)).set({
                        opacity: 0
                    }).delay(.27).to(.1, {
                        opacity: 255
                    }).start(),
                    this.txtScore.node && (0,
                    r.QxW)(this.txtScore.node).set({
                        scale: r.eBl.ZERO,
                        active: !0
                    }).delay(.36).to(.13, {
                        scale: (0,
                        r.v3)(1.4, 1.4, 1.4)
                    }).to(.13, {
                        scale: r.eBl.ONE
                    }).start(),
                    this.txtScore.updateRenderData(!0);
                    const t = this.txtScore.getComponent(r.$lP);
                    (0,
                    r.QxW)(this.iconNewScore).set({
                        scale: r.eBl.ZERO,
                        position: (0,
                        r.v3)(t.contentSize.x / 2, -61, 0),
                        active: !0
                    }).delay(.49).to(.09, {
                        scale: (0,
                        r.v3)(1, 1, 1)
                    }).to(.09, {
                        scale: (0,
                        r.v3)(.7, .7, .7)
                    }).start(),
                    this.milestoneProgress.node.getComponent(r.wFi) && (yield(0,
                    r.QxW)(this.milestoneProgress.node.getComponent(r.wFi)).set({
                        opacity: 0
                    }).delay(.52).to(.13, {
                        opacity: 255
                    }).startAsync())
                })
            }
            playShowBtn() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const t = h.i.share.isShareLimitReached(bt.r.SHARE_SETTLEMENT)
                  , o = !e && !t
                  , i = this.gameModel.isForceFinishing;
                this.btnClose.active = !0,
                this.btnContent.active = !o,
                this.withShareBtnContent.active = o;
                const s = o ? this.withShareBtnTryAgain : this.btnTryAgain;
                i ? this.btnClose.getComponent(r.x0g).verticalCenter = -435.5 : (s.active = !0,
                o && this.shareReward.updateRewardIconByShareType(bt.r.SHARE_SETTLEMENT)),
                this.isNewRecord ? (!i && this.playBtnScaleAnim(s),
                !i && o && this.playBtnScaleAnim(this.btnShare),
                this.playBtnScaleAnim(this.btnClose, .1)) : (!i && this.playBtnOpacityAnim(s),
                !i && o && this.playBtnOpacityAnim(this.btnShare),
                this.playBtnOpacityAnim(this.btnClose, .1)),
                window.__bbAutoContinue !== !1 && this.scheduleOnce( () => this._bbAutoContinuePlay(), .15)
            }
            playBtnScaleAnim(e) {
                return;
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                e && (0,
                r.QxW)(e).set({
                    scale: r.eBl.ZERO,
                    active: !0
                }).delay(t).to(.13, {
                    scale: (0,
                    r.v3)(1.1, 1.1, 1.1)
                }).to(.08, {
                    scale: r.eBl.ONE
                }).start()
            }
            playBtnOpacityAnim(e) {
                return;
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const o = e.getComponent(r.wFi);
                o && (e.active = !0,
                (0,
                r.QxW)(o).set({
                    opacity: 0
                }).delay(t).to(.33, {
                    opacity: 255
                }).start())
            }
            playPrizeAnimation(e) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const t = e.shift();
                    if (!t)
                        return yield this.milestoneProgress.setScoreAm(this.newScore),
                        yield this.playShowBtn(),
                        this.isPlayingAnimation = !1,
                        void console.log("结算动画播放完毕");
                    this.trackClick("daily_milestone", t.index + 1),
                    this.isPlayingAnimation = !0,
                    yield this.milestoneProgress.setScoreAm(t.score),
                    yield a.q.ui.open({
                        uiPath: c.Z.RewardPopup,
                        data: {
                            rewardItem: t.prize,
                            closeCallback: () => (0,
                            i.sH)(this, void 0, void 0, function*() {
                                yield this.milestoneProgress.playCheckAnimation(t.score),
                                this.playPrizeAnimation(e)
                            })
                        }
                    })
                })
            }
            onClickTryAgain() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.hasClose || (this.trackClick("play_again"),
                    yield this.restartGame())
                })
            }
            onClickShare() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    if (this.hasClose)
                        return;
                    this.trackClick("share_btn");
                    const e = bt.r.SHARE_SETTLEMENT
                      , t = h.i.share.hasShareConfigReward(e)
                      , o = h.i.share.getSettlementShareConfig()
                      , i = o ? {
                        msg: (0,
                        l.HC)(o.text_share, {
                            score_or_level: this.gameModel.score,
                            rank_num: this.rankStr
                        }),
                        image_share_app_cdn: o.image_other,
                        image_share_instagram_cdn: o.image_ins
                    } : {};
                    if (yield(0,
                    Rt.f)(e, i)) {
                        if (t) {
                            const t = "".concat(this.gameModel.sessionID, "_").concat(e, "_").concat(h.i.share.getShareCount(e));
                            yield(0,
                            Rt.$)(e, t)
                        }
                        this.playShowBtn(!0)
                    }
                })
            }
            restartGame() {
                return (0,
                i.sH)(this, arguments, void 0, function() {
                    var e = this;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function*() {
                        if (!e.isPlayingAnimation) {
                            a.q.spinner.startShow();
                            try {
                                const o = yield(0,
                                n.aw)({
                                    force: t
                                });
                                if (0 === o.code) {
                                    const t = [];
                                    return e.boardModel.grid.forEach(e => {
                                        e.forEach(e => {
                                            e.cell && t.push({
                                                color: e.cell.getComponent(Ze.f).color,
                                                row: e.row,
                                                col: e.col
                                            })
                                        }
                                        )
                                    }
                                    ),
                                    yield a.q.ui.runScene({
                                        sceneName: At.P.GameScene,
                                        data: {
                                            beginData: o,
                                            lastGameData: {
                                                board: t
                                            }
                                        }
                                    }),
                                    void e.close()
                                }
                                o.code === d.ze.MULTI_DEVICE ? a.q.ui.open({
                                    uiPath: c.Z.MultipleDeviceConfirmPopup,
                                    data: {
                                        quitType: p.z.BACK_LANDING,
                                        onContinue: e.restartGame.bind(e, !0)
                                    }
                                }) : a.q.error.showMonsterToast({
                                    msg: (0,
                                    l.wb)("text_network_error"),
                                    quitType: p.z.BACK_LANDING,
                                    onRetry: e.onClickTryAgain.bind(e)
                                })
                            } catch (e) {
                                (0,
                                g.Kb)("[LandingView] 进入游戏失败", {
                                    error: e
                                })
                            } finally {
                                a.q.spinner.end()
                            }
                        }
                    }()
                })
            }
            onClickClose() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.isPlayingAnimation || this.hasClose || (this.hasClose = !0,
                    this.trackClick("close_btn"),
                    yield a.q.ui.runScene({
                        sceneName: At.P.LandingScene,
                        isNeedLoading: !0
                    }),
                    this.close())
                })
            }
            trackClick(e, t) {
                (0,
                D.nx)(N.qo.GAME_PAGE, N.vf.ACTION_BUTTON, N.W1.RESULT_PAGE, Object.assign(Object.assign(Object.assign({}, this.gameModel.getBaseTrackParams()), {
                    action_button: e,
                    play_score: this.newScore,
                    difficulty: this.blockGroupModel.difficultyMode,
                    is_success: this.isNewRecord ? 1 : 0
                }), t ? {
                    daily_milestone: t
                } : {}))
            }
            trackImpression() {
                (0,
                D.ad)(N.qo.GAME_PAGE, N.W1.RESULT_PAGE, Object.assign(Object.assign({}, this.gameModel.getBaseTrackParams()), {
                    play_score: this.gameModel.score,
                    difficulty: this.blockGroupModel.difficultyMode,
                    is_success: this.isNewRecord ? 1 : 0
                }))
            }
            back() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.isPlayingAnimation || this.hasClose || (this.hasClose = !0,
                    this.trackClick("back_btn"),
                    yield a.q.ui.runScene({
                        sceneName: At.P.LandingScene,
                        isNeedLoading: !0
                    }))
                })
            }
            close() {
                if (!this.isPlayingAnimation)
                    return super.close()
            }
            onClose() {
                this.isPlayingAnimation = !1,
                r.Kak.stopAllByTarget(this.mask.getComponent(r.wFi)),
                r.Kak.stopAllByTarget(this.bannerNode),
                r.Kak.stopAllByTarget(this.bannerNode.getComponent(r.wFi)),
                r.Kak.stopAllByTarget(this.titleNode),
                r.Kak.stopAllByTarget(this.titleNode.getComponent(r.wFi)),
                r.Kak.stopAllByTarget(this.txtScore.node),
                r.Kak.stopAllByTarget(this.txtScore.getComponent(r.wFi)),
                r.Kak.stopAllByTarget(this.txtScoreTitle.getComponent(r.wFi)),
                r.Kak.stopAllByTarget(this.milestoneProgress.node.getComponent(r.wFi)),
                r.Kak.stopAllByTarget(this.iconNewScore),
                r.Kak.stopAllByTarget(this.btnTryAgain),
                r.Kak.stopAllByTarget(this.btnTryAgain.getComponent(r.wFi)),
                r.Kak.stopAllByTarget(this.btnClose),
                r.Kak.stopAllByTarget(this.btnClose.getComponent(r.wFi))
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], _t.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], _t.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(k)], _t.prototype, "boardModel", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "mask", void 0),
        (0,
        i.Cg)([St(r.bdY.ArmatureDisplay)], _t.prototype, "dbFire", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "gameOverNode", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "bestScoreNode", void 0),
        (0,
        i.Cg)([St(r.JU7)], _t.prototype, "txtScore", void 0),
        (0,
        i.Cg)([St(r.JU7)], _t.prototype, "txtScoreTitle", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "iconNewScore", void 0),
        (0,
        i.Cg)([St(Pt.I)], _t.prototype, "milestoneProgress", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "btnContent", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "withShareBtnContent", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "withShareBtnTryAgain", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "btnShare", void 0),
        (0,
        i.Cg)([St(kt.x)], _t.prototype, "shareReward", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "btnTryAgain", void 0),
        (0,
        i.Cg)([St(r.bP0)], _t.prototype, "btnClose", void 0),
        (0,
        i.Cg)([(0,
        u.kW)("GameController")], _t.prototype, "gameCtr", void 0),
        (0,
        i.Cg)([(0,
        u.Qk)()], _t.prototype, "onClickTryAgain", null),
        (0,
        i.Cg)([(0,
        u.Qk)()], _t.prototype, "onClickShare", null),
        (0,
        i.Cg)([(0,
        u.Qk)()], _t.prototype, "onClickClose", null),
        (0,
        i.Cg)([(0,
        u.Qk)()], _t.prototype, "back", null),
        _t = (0,
        i.Cg)([Mt("ResultPopup")], _t),
        window.cc._RF.pop();
        var Et = o(87265);
        const {ccclass: ft} = r.P4R;
        window.cc._RF.push({}, "8662a3GYL9APZ95iwdGbxfS", "RevivePopup", void 0);
        let Gt = class extends Et.B {
            onOpen(e) {
                super.onOpen(e),
                this._bbSkipReviveWait()
            }
            openingAnim() {
                const e = super.openingAnim && super.openingAnim();
                return e && e.then ? e.then( () => this._bbSkipReviveWait()) : (this._bbSkipReviveWait(),
                e)
            }
            update(e) {
                window.__bbSkipReviveWait !== !1 && void 0 !== this.countDown && this.countDown > 0 && (this.countDown = 0,
                this.isCountDowning = !1),
                super.update && super.update(e)
            }
            _bbSkipReviveWait() {
                if (window.__bbSkipReviveWait === !1)
                    return;
                void 0 !== this.countDown && (this.countDown = 0),
                void 0 !== this.remainTime && (this.remainTime = 0),
                void 0 !== this.leftTime && (this.leftTime = 0),
                this.isCountDowning = !1,
                this.scheduleOnce( () => {
                    if (this.hasClose)
                        return;
                    for (const e of ["onClickGiveUp", "onClickEnd", "onClickClose", "onClickCancel", "onTimeEnd", "onCountDownEnd", "onCountDownFinished", "giveUp"])
                        if ("function" == typeof this[e])
                            return void this[e]();
                    this.close(),
                    a.q.event.emit(m.L.GAME_END)
                }
                , .1)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(F)], Gt.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], Gt.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], Gt.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(ie)], Gt.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(Ie)], Gt.prototype, "propCtr", void 0),
        Gt = (0,
        i.Cg)([ft("RevivePopup")], Gt),
        window.cc._RF.pop(),
        o(92411);
        var Bt = o(1973)
          , Ft = o(39295)
          , Tt = o(57188)
          , Nt = o(2981)
          , Dt = o(24258)
          , xt = o(25790);
        const {ccclass: It, property: Lt} = r.P4R;
        window.cc._RF.push({}, "e8cce8Z3eFNN5ACdnlDEAfF", "DifficultyWarning", void 0);
        let Ot = class extends r.uAl {
            show() {
                return;
                if (this.gameModel.isShowingWarning)
                    return;
                this.node.active = !0,
                this.gameModel.isShowingWarning = !0,
                (0,
                D.ad)(N.qo.GAME_PAGE, N.W1.HARD_DIFFICULTY_WARNING),
                this.titleNode.active = !1;
                const e = this.titleNode.getComponent(r.wFi);
                e.opacity = 255,
                (0,
                r.QxW)(e).delay(.21).call( () => {
                    this.titleNode.active = !0
                }
                ).delay(.42).to(.29, {
                    opacity: 51
                }).to(.21, {
                    opacity: 255
                }).delay(.41).to(.29, {
                    opacity: 51
                }).to(.21, {
                    opacity: 255
                }).delay(.41).to(.13, {
                    opacity: 0
                }).call( () => {
                    this.titleNode.active = !1
                }
                ).start(),
                this.bgNode.active = !0;
                const t = this.bgNode.getComponent(r.wFi);
                t.opacity = 0,
                (0,
                r.QxW)(t).to(.42, {
                    opacity: 255
                }).delay(0).to(.05, {
                    opacity: 0
                }).call( () => {
                    this.bgNode.active = !1,
                    this.node.active = !1,
                    this.gameModel.isShowingWarning = !1
                }
                ).start()
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], Ot.prototype, "gameModel", void 0),
        (0,
        i.Cg)([Lt(r.bP0)], Ot.prototype, "bgNode", void 0),
        (0,
        i.Cg)([Lt(r.bP0)], Ot.prototype, "titleNode", void 0),
        Ot = (0,
        i.Cg)([It("DifficultyWarning")], Ot),
        window.cc._RF.pop();
        const {ccclass: Kt, property: Ut} = r.P4R;
        window.cc._RF.push({}, "7e75amyWyNNPrQxvrK2McND", "GameView", void 0);
        let qt = class extends xt.F {
            constructor() {
                super(...arguments),
                this.userGuide = !1,
                this._autoPlayEnabled = !1,
                this._autoPlayBusy = !1,
                this._autoPlayInterval = .03
            }
            onOpen(e) {
                let {recordData: t, lastGameData: o} = e;
                super.onOpen(),
                this.gameCtr.init(),
                this.propCtr.init(),
                this.blockCtr.init(this.blockPrefab, this.cellPrefab),
                this.boardCtr.init(this.board),
                this.eliminateCtr.init(this.board),
                this.gameEffectCtr.init(this.board, this.scoreBoard),
                a.q.event.emit(m.E.UPDATE_PROP_STATUS),
                t ? a.q.event.emit(m.L.GAME_RECOVER, t) : a.q.event.emit(m.L.GAME_BEGIN, o),
                this.preLoadPopupPrefab(),
                this.trackGameViewAndImpression(),
                this._autoPlayCreateButtons(),
                this._autoPlayEnabled = !0,
                // this.startAutoPlay(),
                window.$game = this;
            }
            _autoPlayCreateButtons() {
                if (this._autoPlayOverlay)
                    return;
                const e = document.createElement("div");
                e.id = "autoplay-btns",
                e.innerHTML = '<button type="button" id="autoplay-start">Auto</button><button type="button" id="autoplay-stop">Stop</button><button type="button" id="doiacc">doiacc</button>',
                e.style.cssText = "opacity: 0;position:fixed;top:140px;right:12px;z-index:99999;display:flex;gap:8px;",
                e.querySelector("#autoplay-start").style.cssText = "padding:8px 16px;font-size:14px;cursor:pointer;border-radius:6px;background:#4CAF50;color:#fff;border:none;",
                e.querySelector("#autoplay-stop").style.cssText = "padding:8px 16px;font-size:14px;cursor:pointer;border-radius:6px;background:#f44336;color:#fff;border:none;",
                e.querySelector("#doiacc").style.cssText = "padding:8px 16px;font-size:14px;cursor:pointer;border-radius:6px;background:#005ae0;color:#fff;border:none;",
                e.querySelector("#autoplay-start").onclick = ()=>{this._autoPlayEnabled=!0,this.startAutoPlay()},
                e.querySelector("#autoplay-stop").onclick = ()=>{this.stopAutoPlay()},
                e.querySelector("#doiacc").onclick = ()=>{window.location.href = "https://shopee.vn/user"},
                document.body.appendChild(e),
                this._autoPlayOverlay = e
            }
            _autoPlayRemoveButtons() {
                this._autoPlayOverlay && this._autoPlayOverlay.parentNode && this._autoPlayOverlay.parentNode.removeChild(this._autoPlayOverlay),
                this._autoPlayOverlay = null
            }
            startAutoPlay() {
                this._autoPlayEnabled && (this.unschedule(this._autoPlayTick),
                this.schedule(this._autoPlayTick, this._autoPlayInterval))
            }
            stopAutoPlay() {
                this._autoPlayEnabled = !1,
                this.unschedule(this._autoPlayTick)
            }
            onDestroy() {
                this._autoPlayRemoveButtons(),
                super.onDestroy && super.onDestroy()
            }
            _autoPlayTick() {
                this._autoPlayEnabled && !this._autoPlayBusy && !this.gameModel.isGameOver && (this._autoPlayBusy = !0,
                this.autoPlayStep().catch( e => {
                    console.error("[autoplay]", e)
                }
                ).finally( () => {
                    this._autoPlayBusy = !1
                }
                ))
            }
            autoPlayStep() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    var e, t;
                    if (!this._autoPlayEnabled)
                        return;
                    if (this.userGuide || this.gameModel.isShowingWarning || this.gameModel.isGameOver || this.gameModel.isWaitingDDL)
                        return;
                    if (this._autoPlayIsBlockedByUI())
                        return;
                    if (yield this._autoPlayCompleteActiveProp())
                        return;
                    const o = null !== (t = null === (e = this.blockGroupModel) || void 0 === e ? void 0 : e.blockGroup) && void 0 !== t ? t : []
                      , i = o.filter(e => e && e.block && e.block.isValid);
                    if (0 === i.length)
                        return;
                    if (this.boardCtr && this.boardCtr.checkIsDeath && this.boardCtr.checkIsDeath())
                        return a.q.event.emit(m.L.GAME_END);
                    const s = this._autoPlayBuildOcc();
                    let d = this._autoPlayPlanBestMove(s, i);
                    if (!d) {
                        if (yield this._autoPlayTryUseHelp({
                            stuck: !0
                        }))
                            return;
                        for (const e of i) {
                            const t = this._autoPlayGetPlacements(s, e.block);
                            if (t.length) {
                                d = t[0];
                                break
                            }
                        }
                        if (!d)
                            return
                    }
                    this.currentBlock = d.block,
                    yield this.handleBlockPlacement(d.cells);
                    if (this.gameModel.score>32000) {
                        document.getElementById("autoplay-stop").click();
                    };
                    this.currentBlock = null,
                    a.q.event.emit(m.L.GAME_RECORD)
                })
            }
            _autoPlayFindPropPanel() {
                if (this._autoPlayPropPanel && this._autoPlayPropPanel.node && this._autoPlayPropPanel.node.isValid)
                    return this._autoPlayPropPanel;
                const e = t => {
                    if (!t || !t.isValid)
                        return null;
                    const o = t.components || t._components;
                    if (o)
                        for (const e of o)
                            if (e && e.bombUsePanel && e.removeUsePanel && e.extraBlockUsePanel)
                                return e;
                    const i = t.children;
                    if (i)
                        for (let t = 0; t < i.length; t++) {
                            const o = e(i[t]);
                            if (o)
                                return o
                        }
                    return null
                }
                ;
                return this._autoPlayPropPanel = e(this.node) || null
            }
            _autoPlayIsBlockedByUI() {
                return !!(a.q.ui && (a.q.ui.isUIOpen(c.Z.RevivePopup) || a.q.ui.isUIOpen(c.Z.BombPopup) || a.q.ui.isUIOpen(c.Z.ExtraBlockPopup) || a.q.ui.isUIOpen(c.Z.RemovePopup) || a.q.ui.isUIOpen(c.Z.ResultPopup)))
            }
            _autoPlayHasPropAvailable(e) {
                if (!this.propModel || !this.propCtr)
                    return !1;
                if (this.propModel.isPropUseLimit(e))
                    return !1;
                if (this.propModel.getPropAdsInventory(e) > 0)
                    return !0;
                const t = this.propModel.getPropUseTime(e)
                  , o = this.propModel.getPropUseLimit(e);
                return t > 0 && o > 0
            }
            _autoPlayActivateProp(e) {
                if (!this._autoPlayHasPropAvailable(e))
                    return !1;
                if (this.propModel.getPropAdsInventory(e) > 0)
                    return this.propCtr.useProp(v.kR.ADS, e),
                    !0;
                const t = this.propModel.getPropUseTime(e)
                  , o = this.propModel.getPropUseLimit(e);
                return t > 0 && o > 0 && (this.propModel.subPropUseOneTime(e),
                this.propCtr.useProp(v.kR.COIN, e),
                !0)
            }
            _autoPlayTryRevive() {
                if (!this.propCtr || !this.propModel || a.q.ui && a.q.ui.isUIOpen(c.Z.RevivePopup))
                    return !1;
                const e = v.P7.REVIVE;
                if (this.propModel.isPropUseLimit(e))
                    return !1;
                if (this.propModel.getPropAdsInventory(e) > 0)
                    return this.propCtr.useProp(v.kR.ADS, e),
                    !0;
                const t = this.propModel.getPropUseTime(e)
                  , o = this.propModel.getPropUseLimit(e);
                if (t > 0 && o > 0)
                    return this.propModel.subPropUseOneTime(e),
                    this.propCtr.useProp(v.kR.COIN, e),
                    !0;
                const i = this.propModel.getPropMethod && this.propModel.getPropMethod(e);
                return null != i && this.propCtr ? (this.propCtr.useProp(i, e),
                !0) : !1
            }
            _autoPlayPickBombCell() {
                const e = this._autoPlayFindPropPanel();
                if (e && e.bombUsePanel && e.bombUsePanel.getTargetCell)
                    try {
                        const t = e.bombUsePanel.getTargetCell();
                        if (t)
                            return {
                                row: t.row,
                                col: t.col
                            }
                    } catch (e) {}
                const t = this.boardModel.boardRow
                  , o = this.boardModel.boardCol;
                let i = null
                  , s = -1;
                for (let e = 0; e < t; e++)
                    for (let n = 0; n < o; n++) {
                        if (!this.boardModel.grid[e][n].cell)
                            continue;
                        let r = 0;
                        for (const [i,s] of [[e - 1, n], [e + 1, n], [e, n - 1], [e, n + 1]])
                            i >= 0 && i < t && s >= 0 && s < o && this.boardModel.grid[i][s].cell && r++;
                        r > s && (s = r,
                        i = {
                            row: e,
                            col: n
                        })
                    }
                return i
            }
            _autoPlayPickRemoveBlockIndex() {
                const e = (this.blockGroupModel && this.blockGroupModel.blockGroup || []).map( (e, t) => ({
                    index: t,
                    block: e && e.block
                })).filter(e => e.block && e.block.isValid);
                if (0 === e.length)
                    return 0;
                let t = e[0].index
                  , o = -1;
                for (const {index: i, block: s} of e) {
                    let e = 0;
                    try {
                        const t = s.cells || s._cells;
                        t && (e = t.length)
                    } catch (e) {}
                    e <= o || (o = e,
                    t = i)
                }
                return t
            }
            _autoPlayCompleteActiveProp() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const e = this.gameModel;
                    if (!e)
                        return !1;
                    const t = this._autoPlayFindPropPanel();
                    if (e.isUsingBomb && t && t.bombUsePanel && t.bombUsePanel.emitBombEliminate) {
                        const e = this._autoPlayPickBombCell();
                        return !!e && (t.bombUsePanel.emitBombEliminate(e),
                        !0)
                    }
                    if (e.isUsingRemove && t && t.removeUsePanel && t.removeUsePanel.removeBlock)
                        return yield t.removeUsePanel.removeBlock(this._autoPlayPickRemoveBlockIndex()),
                        !0;
                    if (e.isUsingExtraBlock && t && t.extraBlockUsePanel) {
                        const e = t.extraBlockUsePanel.getTargetCell && t.extraBlockUsePanel.getTargetCell();
                        let o = null;
                        if (t.extraBlockBox)
                            for (const e of t.extraBlockBox.children || [])
                                if (e && e.isValid) {
                                    o = e;
                                    break
                                }
                        if (e && o) {
                            let i = null;
                            try {
                                i = this.boardCtr.getBoardCellsFromShape(o, e.row, e.col)
                            } catch (e) {
                                i = null
                            }
                            if (i && i.length) {
                                if (this.canPlaceBlock && !this.canPlaceBlock(i))
                                    return !1;
                                return this.currentBlock = o,
                                yield this.handleBlockPlacement(i),
                                this.currentBlock = null,
                                t.extraBlockUsePanel.hide && t.extraBlockUsePanel.hide(),
                                !0
                            }
                        }
                    }
                    return !1
                })
            }
            _autoPlayTryUseHelp(e) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    if (this._autoPlayIsBlockedByUI() || !this.propCtr)
                        return !1;
                    const t = e && e.stuck ? [v.P7.REMOVE, v.P7.BOMB, v.P7.EXTRA_BLOCK] : [v.P7.BOMB, v.P7.REMOVE, v.P7.EXTRA_BLOCK];
                    for (const e of t)
                        if (this._autoPlayHasPropAvailable(e) && this._autoPlayActivateProp(e))
                            return !0;
                    return !1
                })
            }
            _autoPlayGetPlacements(e, t) {
                const o = this.boardModel.boardRow
                  , i = this.boardModel.boardCol
                  , n = [];
                for (let r = 0; r < o; r++)
                    for (let s = 0; s < i; s++) {
                        let c = null;
                        try {
                            c = this.boardCtr.getBoardCellsFromShape(t, r, s)
                        } catch (e) {
                            c = null
                        }
                        if (!c || 0 === c.length)
                            continue;
                        if (this.canPlaceBlock && !this.canPlaceBlock(c))
                            continue;
                        let u = !0;
                        for (const t of c)
                            if (!t || e[t.row][t.col]) {
                                u = !1;
                                break
                            }
                        if (!u)
                            continue;
                        n.push({
                            block: t,
                            cells: c,
                            quickScore: this._autoPlayEvalQuickLight(e, c)
                        })
                    }
                return n.sort( (e, t) => t.quickScore - e.quickScore)
            }
            _autoPlayEmptyRegionPenalty(e) {
                if (!e || !e.length || !e[0])
                    return 0;
                const t = e.length
                  , o = e[0].length
                  , i = new Array(t);
                for (let e = 0; e < t; e++)
                    i[e] = new Array(o).fill(!1);
                let n = 0;
                for (let r = 0; r < t; r++)
                    for (let s = 0; s < o; s++) {
                        if (e[r][s] || i[r][s])
                            continue;
                        let u = 0;
                        const c = [[r, s]];
                        for (i[r][s] = !0; c.length > 0; ) {
                            const [a,d] = c.pop();
                            u++;
                            for (const [l,f] of [[a - 1, d], [a + 1, d], [a, d - 1], [a, d + 1]])
                                l >= 0 && l < t && f >= 0 && f < o && !e[l][f] && !i[l][f] && (i[l][f] = !0,
                                c.push([l, f]))
                        }
                        1 === u ? n += 4e3 : 2 === u ? n += 1800 : u <= 4 ? n += 700 : u <= 8 && (n += 120)
                    }
                return n
            }
            _autoPlayBumpiness(e) {
                const t = e.length
                  , o = e[0].length;
                let i = 0;
                for (let n = 0; n < t; n++)
                    for (let r = 0; r < o - 1; r++)
                        e[n][r] !== e[n][r + 1] && i++;
                for (let n = 0; n < o; n++)
                    for (let r = 0; r < t - 1; r++)
                        e[r][n] !== e[r + 1][n] && i++;
                return i
            }
            _autoPlayBBoxInternalHoles(e) {
                let t = -1
                  , o = -1
                  , i = e.length
                  , n = e[0].length
                  , r = i
                  , s = n
                  , c = 0;
                for (let l = 0; l < i; l++)
                    for (let a = 0; a < n; a++)
                        e[l][a] && (c++,
                        t < 0 && (t = l,
                        o = a),
                        t = Math.min(t, l),
                        o = Math.min(o, a),
                        r = Math.max(r, l),
                        s = Math.max(s, a));
                if (!c || t < 0)
                    return 0;
                let u = 0;
                for (let c = t; c <= r; c++)
                    for (let t = o; t <= s; t++)
                        e[c][t] || u++;
                return u
            }
            _autoPlayEdgeAnchorBonus(e, t) {
                const o = e.length - 1
                  , i = e[0].length - 1;
                let n = 0;
                for (const e of t)
                    (0 === e.row || e.row === o || 0 === e.col || e.col === i) && n++;
                return 250 * n
            }
            _autoPlayEvalQuickLight(e, t) {
                const o = this._autoPlaySimAfterPlace(e, t)
                  , i = o.clearedRows + o.clearedCols
                  , n = this._autoPlayLinePressure(o.occ)
                  , s = this._autoPlayCountIsolatedEmpties(o.occ)
                  , c = this._autoPlayBumpiness(o.occ)
                  , u = this._autoPlayTouchesExisting(e, t)
                  , d = this._autoPlayEdgeAnchorBonus(o.occ, t);
                return 3e5 * i * i + 2e4 * i + 4 * n - 900 * s - 80 * c + u + d + 12 * t.length
            }
            _autoPlayCleanBoardScore(e, t) {
                if (!e || !e.length || !e[0])
                    return 0;
                let o = 0;
                for (let i = 0; i < e.length; i++)
                    for (let n = 0; n < e[0].length; n++)
                        e[i][n] && o++;
                return 6 * this._autoPlayLinePressure(e) + 55 * this._autoPlayLargestEmptyRegion(e) - 4e3 * this._autoPlayCountIsolatedEmpties(e) - this._autoPlayEmptyRegionPenalty(e) - 150 * this._autoPlayBumpiness(e) - 280 * this._autoPlayBBoxInternalHoles(e) - 2 * o + 12e4 * (t || 0)
            }
            _autoPlayScoreOcc(e, t) {
                return this._autoPlayLinePressure(e) - 900 * this._autoPlayCountIsolatedEmpties(e) - 80 * this._autoPlayBumpiness(e) + 12e4 * (t || 0)
            }
            _autoPlayPermuteBlocks(e) {
                const t = e.length;
                if (t <= 1)
                    return [e.slice()];
                const o = []
                  , i = new Array(t).fill(!1)
                  , n = []
                  , r = () => {
                    if (n.length === t)
                        return void o.push(n.slice());
                    for (let s = 0; s < t; s++)
                        if (!i[s]) {
                            i[s] = !0,
                            n.push(e[s]),
                            r(),
                            n.pop(),
                            i[s] = !1
                        }
                }
                ;
                return r(),
                o
            }
            _autoPlaySearchSequence(e, t, o, i, n) {
                if (o >= t.length)
                    return {
                        score: this._autoPlayScoreOcc(e, n),
                        first: i[0] || null
                    };
                const r = t[o]
                  , s = this._autoPlayGetPlacements(e, r).slice(0, 8);
                if (!s.length)
                    return null;
                let c = null;
                for (const r of s) {
                    const s = this._autoPlaySimAfterPlace(e, r.cells)
                      , u = n + s.clearedRows + s.clearedCols
                      , d = this._autoPlaySearchSequence(s.occ, t, o + 1, i.concat(r), u);
                    d && (!c || d.score > c.score) && (c = d)
                }
                return c
            }
            _autoPlayPlanBestMove(e, t) {
                try {
                    return this._autoPlayPlanBestMoveCore(e, t)
                } catch (o) {
                    return console.error("[autoplay] plan", o),
                    this._autoPlayPlanBestMoveGreedy(e, t)
                }
            }
            _autoPlayPlanBestMoveGreedy(e, t) {
                const o = t.map(e => e.block).filter(e => e && e.isValid);
                let i = null
                  , n = -1 / 0;
                for (const r of o) {
                    const o = this._autoPlayGetPlacements(e, r).slice(0, 25);
                    for (const s of o) {
                        const o = this._autoPlayEvalFinal(e, s.block, s.cells, t);
                        o > n && (n = o,
                        i = s)
                    }
                }
                return i
            }
            _autoPlayPlanBestMoveCore(e, t) {
                const o = t.map(e => e.block).filter(e => e && e.isValid);
                if (!o.length)
                    return null;
                if (1 === o.length) {
                    const t = this._autoPlayGetPlacements(e, o[0]);
                    return t.length ? t[0] : null
                }
                let i = null
                  , n = -1 / 0;
                for (const t of this._autoPlayPermuteBlocks(o)) {
                    const r = this._autoPlaySearchSequence(e, t, 0, [], 0);
                    r && r.first && r.score > n && (n = r.score,
                    i = r.first)
                }
                if (i)
                    return i;
                if (o.length >= 2)
                    for (let t = 0; t < o.length; t++)
                        for (let r = 0; r < o.length; r++) {
                            if (t === r)
                                continue;
                            const s = this._autoPlaySearchSequence(e, [o[t], o[r]], 0, [], 0);
                            s && s.first && s.score > n && (n = s.score,
                            i = s.first)
                        }
                if (i)
                    return i;
                let r = null
                  , s = -1 / 0;
                for (const a of o) {
                    const l = this._autoPlayGetPlacements(e, a).slice(0, 30);
                    for (const c of l) {
                        const u = this._autoPlayEvalFinal(e, c.block, c.cells, t);
                        u > s && (s = u,
                        r = c)
                    }
                }
                return r
            }
            _autoPlayBuildOcc() {
                const e = this.boardModel.boardRow
                  , t = this.boardModel.boardCol
                  , o = new Array(e);
                for (let i = 0; i < e; i++) {
                    o[i] = new Array(t);
                    for (let e = 0; e < t; e++)
                        o[i][e] = !!this.boardModel.grid[i][e].cell
                }
                return o
            }
            _autoPlayCloneOcc(e) {
                const t = new Array(e.length);
                for (let o = 0; o < e.length; o++)
                    t[o] = e[o].slice();
                return t
            }
            _autoPlaySimAfterPlace(e, t) {
                const o = this.boardModel.boardRow
                  , i = this.boardModel.boardCol
                  , n = this._autoPlayCloneOcc(e);
                for (const e of t)
                    n[e.row][e.col] = !0;
                const r = []
                  , s = [];
                for (let e = 0; e < o; e++) {
                    let t = !0;
                    for (let o = 0; o < i; o++)
                        if (!n[e][o]) {
                            t = !1;
                            break
                        }
                    t && r.push(e)
                }
                for (let e = 0; e < i; e++) {
                    let t = !0;
                    for (let r = 0; r < o; r++)
                        if (!n[r][e]) {
                            t = !1;
                            break
                        }
                    t && s.push(e)
                }
                if (r.length > 0 || s.length > 0)
                    for (let e = 0; e < o; e++)
                        for (let t = 0; t < i; t++)
                            (r.indexOf(e) >= 0 || s.indexOf(t) >= 0) && (n[e][t] = !1);
                return {
                    occ: n,
                    clearedRows: r.length,
                    clearedCols: s.length
                }
            }
            _autoPlayCountIsolatedEmpties(e) {
                const t = this.boardModel.boardRow
                  , o = this.boardModel.boardCol;
                let i = 0;
                for (let n = 0; n < t; n++)
                    for (let r = 0; r < o; r++) {
                        if (e[n][r])
                            continue;
                        const s = 0 === n || e[n - 1][r]
                          , c = n === t - 1 || e[n + 1][r]
                          , u = 0 === r || e[n][r - 1]
                          , d = r === o - 1 || e[n][r + 1];
                        s && c && u && d && i++
                    }
                return i
            }
            _autoPlayLargestEmptyRegion(e) {
                const t = this.boardModel.boardRow
                  , o = this.boardModel.boardCol
                  , i = new Array(t);
                for (let e = 0; e < t; e++)
                    i[e] = new Array(o).fill(!1);
                let n = 0;
                for (let r = 0; r < t; r++)
                    for (let s = 0; s < o; s++) {
                        if (e[r][s] || i[r][s])
                            continue;
                        let o = 0;
                        const t = [[r, s]];
                        for (i[r][s] = !0; t.length > 0; ) {
                            const [r,s] = t.pop();
                            o++;
                            const c = [[r - 1, s], [r + 1, s], [r, s - 1], [r, s + 1]];
                            for (const [r,s] of c)
                                r >= 0 && r < e.length && s >= 0 && s < e[0].length && !e[r][s] && !i[r][s] && (i[r][s] = !0,
                                t.push([r, s]))
                        }
                        o > n && (n = o)
                    }
                return n
            }
            _autoPlayCountPlacements(e, t) {
                const o = this.boardModel.boardRow
                  , i = this.boardModel.boardCol;
                let n = 0;
                for (let r = 0; r < o; r++)
                    for (let s = 0; s < i; s++) {
                        let a = null;
                        try {
                            a = this.boardCtr.getBoardCellsFromShape(t, r, s)
                        } catch (e) {
                            a = null
                        }
                        if (!a || 0 === a.length)
                            continue;
                        let l = !0;
                        for (const t of a)
                            if (!t || e[t.row][t.col]) {
                                l = !1;
                                break
                            }
                        l && (n++,
                        n >= 80 && (r = 1 / 0,
                        s = 1 / 0))
                    }
                return n
            }
            _autoPlayLinePressure(e) {
                const t = e.length
                  , o = e[0].length;
                let i = 0;
                for (let n = 0; n < t; n++) {
                    let r = 0;
                    for (let t = 0; t < o; t++)
                        e[n][t] && r++;
                    const s = o - r;
                    0 === s ? i += 5e4 : 1 === s ? i += 1e4 : 2 === s ? i += 2500 : 3 === s && (i += 600)
                }
                for (let n = 0; n < o; n++) {
                    let r = 0;
                    for (let o = 0; o < t; o++)
                        e[o][n] && r++;
                    const s = t - r;
                    0 === s ? i += 5e4 : 1 === s ? i += 1e4 : 2 === s ? i += 2500 : 3 === s && (i += 600)
                }
                return i
            }
            _autoPlayTouchesExisting(e, t) {
                let o = !1;
                for (let i = 0; i < e.length; i++)
                    for (let n = 0; n < e[0].length; n++)
                        if (e[i][n]) {
                            o = !0;
                            break
                        }
                if (!o)
                    return 0;
                for (const o of t) {
                    const {row: i, col: n} = o;
                    for (const [r, s] of [[i - 1, n], [i + 1, n], [i, n - 1], [i, n + 1]])
                        if (r >= 0 && r < e.length && s >= 0 && s < e[0].length && e[r][s]) {
                            let c = !1;
                            for (const e of t)
                                if (e.row === r && e.col === s) {
                                    c = !0;
                                    break
                                }
                            if (!c)
                                return 0
                        }
                }
                return -2e5
            }
            _autoPlayMinRemainingPlacements(e, t, o) {
                let i = 1 / 0;
                for (const n of o) {
                    const o = n.block;
                    if (!o || !o.isValid || o === t)
                        continue;
                    const r = this._autoPlayCountPlacements(e, o);
                    r < i && (i = r)
                }
                return i === 1 / 0 ? 0 : i
            }
            _autoPlayEvalQuick(e, t) {
                return this._autoPlayEvalQuickLight(e, t)
            }
            _autoPlayEvalFinal(e, t, o, i) {
                const n = this._autoPlaySimAfterPlace(e, o)
                  , r = n.clearedRows + n.clearedCols
                  , a = this._autoPlayEvalQuickLight(e, o)
                  , g = this._autoPlayMinRemainingPlacements(n.occ, t, i);
                return a + 8e3 * g + 12e4 * r + 18 * o.length
            }
            update() {
                const {isForceFinishing: e, isGameOver: t} = this.gameModel;
                e || t || this.isWaitingGameEnd || !(0,
                C.t_)(h.i.activityData.slotStartTime, h.i.activityData.slotEndTime, 5) || (this.gameModel.isForceFinishing = !0,
                a.q.ui.closeAllPopup(),
                a.q.event.emit(m.E.DISABLE_PROP_BTN),
                a.q.ui.showToast((0,
                l.wb)("text_force_finish_tips")),
                this.scheduleOnce( () => {
                    a.q.event.emit(m.L.GAME_END)
                }
                , 3))
            }
            bindEvents() {
                super.bindEvents(),
                a.q.event.on(m.E.START_USER_GUIDE, this.startGuide, this),
                a.q.event.on(m.E.FINISH_USER_GUIDE, this.finishGuide, this),
                a.q.event.on(m.E.FIRST_HARD_DIFFICULTY, this.showDifficultyWarning, this),
                a.q.event.on(m.E.FIRST_HARD_DIFFICULTY_AFTER_REVIVE, this.showDifficultyWarning, this)
            }
            init(e) {
                super.init(e),
                this.milestoneProgress.initMilestoneProgress();
                const t = this.milestoneModel.milestoneList;
                this.milestoneProgress.setData(t),
                e && this.milestoneProgress.setScore(e.score),
                this.userGuide = !h.i.user.userGuide && (!e || this.gameModel.isShowingUserGuide),
                this.userGuide ? e || "on" !== h.i.activitySetting.text_game_start ? this.startGuide() : (a.q.spinner.forceStartShow(),
                a.q.ui.open({
                    uiPath: c.Z.NewUserChallengePopup
                })) : a.q.event.emit(m.E.RESTART_USER_INACTIVE_COUNTDOWN),
                e && e.comboCount >= 2 && this.scoreBoard.getComponent(Qe.B).showComboEffect(e.comboCount)
            }
            startGuide() {
                this.userGuidePanel.showGuide(),
                this.settingBtn.interactable = !1,
                this.gameModel.isShowingUserGuide = !0,
                a.q.event.emit(m.E.UPDATE_PROP_STATUS),
                a.q.event.emit(m.L.GAME_RECORD)
            }
            finishGuide() {
                this.userGuide = !1,
                this.settingBtn.interactable = !0,
                this.gameModel.isShowingUserGuide = !1,
                a.q.event.emit(m.E.UPDATE_PROP_STATUS),
                a.q.event.emit(m.E.RESTART_USER_INACTIVE_COUNTDOWN),
                (0,
                Bt.nw)({
                    userGuide: "1"
                }).catch(e => {
                    console.error(e),
                    (0,
                    g.Kb)("Save User Setting Error", {
                        error: e
                    })
                }
                )
            }
            showDifficultyWarning() {
                "on" === h.i.activitySetting.text_warning && this.difficultyWarning.show()
            }
            isBlockGroupItemSelectable(e, t, o, i) {
                return !(null === e || t !== o || !(0,
                me.vZ)(i, this.blockGroup, Ft.I.isLongScreen ? 60 : 0) || this.userGuide && t !== tt[this.gameModel.currentUserGuideStep] || this.gameModel.isGameOver)
            }
            onTouchStart(e) {
                if (!this.gameModel.isShowingWarning)
                    return !this.gameModel.isShowingWarning && a.q.event.emit(m.E.CANCEL_USER_INACTIVE_COUNTDOWN),
                    super.onTouchStart(e)
            }
            isCellHintAvailable(e) {
                return !!e && e.length > 0 && (!this.userGuide || e[0] === this.userGuidePanel.getCurrentTargetCell())
            }
            canPlaceBlock(e) {
                return !!e && e.length > 0 && (!this.userGuide || e[0] === this.userGuidePanel.getCurrentTargetCell())
            }
            onBlockSelected() {
                this.userGuide && this.userGuidePanel.clearGuideFinger()
            }
            processBlockPlaced(e, t, o) {
                super.processBlockPlaced(e, t, o);
                const {totalScore: i} = e;
                this.userGuide || (0,
                Dt.Gq)(Nt.H.FIRST_PLACE_BLOCK) || ((0,
                D.A$)(N.qo.GAME_PAGE),
                (0,
                Dt.SO)(Nt.H.FIRST_PLACE_BLOCK, "1", {
                    expire: !0,
                    expireTimestamp: (new Date).setHours(24, 0, 0, 0)
                })),
                this.userGuide && !(0,
                Dt.Gq)(Nt.H.USER_GUIDE_FIRST_PLACE_BLOCK) && ((0,
                D.A$)(N.qo.GUIDE_PAGE),
                (0,
                Dt.SO)(Nt.H.USER_GUIDE_FIRST_PLACE_BLOCK, "1", {
                    expire: !0,
                    expireTimestamp: (new Date).setHours(24, 0, 0, 0)
                }));
                const s = this.milestoneProgress.setScoreAndGetPrizeNode(i);
                s && this.newMilestone.showNewMilestone(s)
            }
            preLoadPopupPrefab() {
                ue.h.preLoadAssetFromBundle([c.Z.RemovePopup, c.Z.ExtraBlockPopup, c.Z.BombPopup, c.Z.RevivePopup, c.Z.ResultPopup]).then( () => {
                    console.log("[res] 预加载弹窗资源成功")
                }
                ).catch( () => {
                    console.warn("[res] 预加载弹窗资源失败")
                }
                )
            }
            onClickSetupBtn() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.gameModel.isForceFinishing || (this.trackClickBtn("setting_btn"),
                    yield a.q.ui.open({
                        uiPath: c.Z.SettingPopup
                    }))
                })
            }
            trackBlockElimination(e, t) {
                super.trackBlockElimination(e, t, Object.assign({}, this.gameModel.getBaseTrackParams()))
            }
            trackGameViewAndImpression() {
                const e = this.gameModel.getBaseTrackParams();
                (0,
                D.xO)(N.qo.GAME_PAGE, Object.assign({}, e)),
                (0,
                D.$3)(N.qo.GAME_PAGE, Object.assign({}, e))
            }
            trackClickBtn(e) {
                (0,
                D.MP)(N.qo.GAME_PAGE, N.vf.ACTION_BUTTON, Object.assign(Object.assign({
                    action_button_type: e
                }, this.gameModel.getBaseTrackParams()), {
                    play_score: this.gameModel.score,
                    difficulty: this.blockGroupModel.difficultyMode,
                    is_disabled: !1,
                    board_state: (0,
                    s.a5)()
                }))
            }
            back() {
                this.trackClickBtn("back_btn"),
                super.back()
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(E.u)], qt.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(k)], qt.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(_)], qt.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(qe)], qt.prototype, "milestoneModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], qt.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ee)], qt.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(ke)], qt.prototype, "eliminateCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(he)], qt.prototype, "gameCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(re)], qt.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(Ne)], qt.prototype, "gameEffectCtr", void 0),
        (0,
        i.Cg)([(0,
        u.kW)(Ie)], qt.prototype, "propCtr", void 0),
        (0,
        i.Cg)([Ut(Tt.A)], qt.prototype, "settingBtn", void 0),
        (0,
        i.Cg)([Ut(r.bP0)], qt.prototype, "scoreBoard", void 0),
        (0,
        i.Cg)([Ut(st)], qt.prototype, "userGuidePanel", void 0),
        (0,
        i.Cg)([Ut(Pt.I)], qt.prototype, "milestoneProgress", void 0),
        (0,
        i.Cg)([Ut($e)], qt.prototype, "newMilestone", void 0),
        (0,
        i.Cg)([Ut(Ot)], qt.prototype, "difficultyWarning", void 0),
        qt = (0,
        i.Cg)([Kt("GameView")], qt),
        window.cc._RF.pop()
    }
}]);
//# sourceMappingURL=gameScene.81126e46dbbe34094379.js.map
