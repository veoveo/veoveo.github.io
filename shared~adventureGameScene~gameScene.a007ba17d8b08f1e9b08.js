(window.webpackChunkblock_blast_fe = window.webpackChunkblock_blast_fe || []).push([[40], {
    3677(t, o, e) {
        "use strict";
        e.d(o, {
            T2: function() {
                return s
            },
            dA: function() {
                return c
            },
            eT: function() {
                return n
            },
            jD: function() {
                return r
            }
        });
        var i = e(87778);
        const n = i.P.audio_block_combo_9
          , r = {
            1: i.P.audio_block_combo_2,
            2: i.P.audio_block_combo_3,
            3: i.P.audio_block_combo_4,
            4: i.P.audio_block_combo_5,
            5: i.P.audio_block_combo_6,
            6: i.P.audio_block_combo_7,
            7: i.P.audio_block_combo_8,
            8: i.P.audio_block_combo_9
        }
          , s = (i.P.audio_block_matched,
        i.P.audio_block_matched2,
        i.P.audio_clear_multiple_rows,
        .4651)
          , c = 6
    },
    3918(t, o, e) {
        "use strict";
        e.d(o, {
            B: function() {
                return a
            }
        }),
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(5167)
          , s = e(23241);
        const {ccclass: c, property: l} = n.P4R;
        window.cc._RF.push({}, "29004iU0dZG047AGZ+1X+Ur", "ScoreBoard", void 0);
        let a = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.lightDb = null,
                this.bomDb = null,
                this.duration = .5,
                this.frameRate = 1 / 30,
                this.currScore = 0,
                this.lastComboType = "",
                this.rollingHandler = null
            }
            onLoad() {
                this.lightDb.node.active = !1,
                this.bomDb.node.active = !1,
                r.q.event.on(s.L.SET_SCORE, this.setCurrScore, this),
                r.q.event.on(s.L.UPDATE_SCORE, this.updateCurrScore, this),
                r.q.event.on(s.E.ELIMINATE_BLOCK, this.showAnimation, this),
                r.q.event.on(s.E.PLACE_BLOCK, this.onPlaceBlock, this)
            }
            updateCurrScore(t) {
                this.rollingHandler && (this.unschedule(this.rollingHandler),
                this.rollingHandler = null);
                const o = this.currScore
                  , e = t;
                if (o === e)
                    return;
                if (o > e)
                    return this.scoreLabel.string = e.toString(),
                    void (this.currScore = e);
                const i = Math.floor(this.duration / this.frameRate)
                  , n = e - o;
                let r = o
                  , s = 0;
                this.rollingHandler = () => {
                    s++,
                    r = Math.round(o + n * s / i),
                    this.scoreLabel.string = r.toString(),
                    this.currScore = r,
                    s >= i && (this.scoreLabel.string = e.toString(),
                    this.unschedule(this.rollingHandler),
                    this.rollingHandler = null,
                    this.currScore = e)
                }
                ,
                this.schedule(this.rollingHandler, this.frameRate)
            }
            setCurrScore(t) {
                this.currScore = t,
                this.scoreLabel.string = t.toString()
            }
            showAnimation() {
                this.bomDb.node.active = !0,
                this.bomDb.playAnimation("C_bom", 1),
                (0,
                n.QxW)(this.scoreLabel.node).to(.04, {
                    scale: (0,
                    n.v3)(1.2, 1.2, 1)
                }).to(.09, {
                    scale: (0,
                    n.v3)(1, 1, 1)
                }).start()
            }
            onPlaceBlock(t) {
                const {combo: o} = t;
                this.showComboEffect(o)
            }
            showComboEffect(t) {
                let o = "";
                t >= 10 ? o = "C3" : t >= 5 ? o = "C2" : t >= 2 && (o = "C1"),
                this.lastComboType !== o && (o ? (this.lightDb.node.active = !0,
                this.lightDb.playAnimation(o, 0),
                this.lastComboType = o) : (this.lightDb.armature().animation.reset(),
                this.lightDb.node.active = !1,
                this.lastComboType = ""))
            }
            onDestroy() {
                this.rollingHandler && (this.unschedule(this.rollingHandler),
                this.rollingHandler = null),
                r.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([l(n.JU7)], a.prototype, "scoreLabel", void 0),
        (0,
        i.Cg)([l(n.bdY.ArmatureDisplay)], a.prototype, "lightDb", void 0),
        (0,
        i.Cg)([l(n.bdY.ArmatureDisplay)], a.prototype, "bomDb", void 0),
        a = (0,
        i.Cg)([c("ScoreBoard")], a),
        window.cc._RF.pop()
    },
    5564(t, o, e) {
        "use strict";
        function i(t, o) {
            if (!o || !o.armature())
                return;
            const e = new Set([])
              , i = o.armature().getSlots().filter(o => t.find(t => t.slotName === o.name));
            if (i.length !== t.length)
                throw new Error("Cannot find slotKeys");
            i.forEach(o => {
                const i = t.find(t => t.slotName === o.name);
                if (i) {
                    const t = o._displayData.texture;
                    t.spriteFrame = i.spriteFrame,
                    e.add(t.name)
                }
            }
            ),
            function(t, o) {
                var e;
                const i = null === (e = null == t ? void 0 : t.armature()) || void 0 === e ? void 0 : e._slots;
                null == i || i.forEach(t => {
                    var e, i, n, r;
                    const s = null === (i = null === (e = null == t ? void 0 : t.display) || void 0 === e ? void 0 : e._textureData) || void 0 === i ? void 0 : i.name
                      , c = null === (r = null === (n = null == t ? void 0 : t.display) || void 0 === n ? void 0 : n._textureData) || void 0 === r ? void 0 : r.spriteFrame
                      , l = null == c ? void 0 : c.texture;
                    if (!(s && c && l && o.has(s)))
                        return;
                    const {width: a, height: u} = l
                      , {rect: d} = c
                      , h = d.x / a
                      , p = (d.y + d.height) / u
                      , g = (d.x + d.width) / a
                      , f = d.y / u;
                    t._localVertices = [0, 0, h, p, d.width, 0, g, p, 0, d.height, h, f, d.width, d.height, g, f],
                    t._pivotX = c.rect.width / 2,
                    t._pivotY = c.rect.height / 2
                }
                )
            }(o, e)
        }
        e.d(o, {
            D: function() {
                return i
            }
        }),
        e(16280),
        e(23792),
        e(17642),
        e(58004),
        e(33853),
        e(45876),
        e(32475),
        e(15024),
        e(31698),
        e(98992),
        e(54520),
        e(72577),
        e(3949),
        e(23500),
        e(62953)
    },
    7180(t, o, e) {
        var i;
        !function(t, n) {
            function r(t) {
                var o, e = this, i = (o = 4022871197,
                function(t) {
                    t = String(t);
                    for (var e = 0; e < t.length; e++) {
                        var i = .02519603282416938 * (o += t.charCodeAt(e));
                        i -= o = i >>> 0,
                        o = (i *= o) >>> 0,
                        o += 4294967296 * (i -= o)
                    }
                    return 2.3283064365386963e-10 * (o >>> 0)
                }
                );
                e.next = function() {
                    var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
                    return e.s0 = e.s1,
                    e.s1 = e.s2,
                    e.s2 = t - (e.c = 0 | t)
                }
                ,
                e.c = 1,
                e.s0 = i(" "),
                e.s1 = i(" "),
                e.s2 = i(" "),
                e.s0 -= i(t),
                e.s0 < 0 && (e.s0 += 1),
                e.s1 -= i(t),
                e.s1 < 0 && (e.s1 += 1),
                e.s2 -= i(t),
                e.s2 < 0 && (e.s2 += 1),
                i = null
            }
            function s(t, o) {
                return o.c = t.c,
                o.s0 = t.s0,
                o.s1 = t.s1,
                o.s2 = t.s2,
                o
            }
            function c(t, o) {
                var e = new r(t)
                  , i = o && o.state
                  , n = e.next;
                return n.int32 = function() {
                    return 4294967296 * e.next() | 0
                }
                ,
                n.double = function() {
                    return n() + 11102230246251565e-32 * (2097152 * n() | 0)
                }
                ,
                n.quick = n,
                i && ("object" == typeof i && s(i, e),
                n.state = function() {
                    return s(e, {})
                }
                ),
                n
            }
            n && n.exports ? n.exports = c : e.amdD && e.amdO ? void 0 === (i = function() {
                return c
            }
            .call(o, e, o, n)) || (n.exports = i) : this.alea = c
        }(0, t = e.nmd(t), e.amdD)
    },
    7391(t, o, e) {
        var i = e(7180)
          , n = e(43181)
          , r = e(43031)
          , s = e(9067)
          , c = e(96833)
          , l = e(43717)
          , a = e(74801);
        a.alea = i,
        a.xor128 = n,
        a.xorwow = r,
        a.xorshift7 = s,
        a.xor4096 = c,
        a.tychei = l,
        t.exports = a
    },
    8089(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(30951)
          , s = e(62474)
          , c = e(95080)
          , l = e(91879)
          , a = e(89807)
          , u = e(89802);
        const {ccclass: d} = n.P4R;
        window.cc._RF.push({}, "0ea52D69/lLGaKxZUKKM4ms", "BaseBlockShadowController", void 0);
        let h = class extends r.w {
            constructor() {
                super(...arguments),
                this.blockShadowPath = s.Z.BlockShadow
            }
            getBlockShadowNode(t) {
                if (!this.blockShadowPfb && (this.blockShadowPfb = l.h.get(this.blockShadowPath, n.tX0)),
                !this.blockShadowPfb || !l.h.get(s.Z.CellShadow, n.tX0))
                    return;
                const o = (0,
                n.Flv)(this.blockShadowPfb);
                return o.getComponent(a.m).init(t),
                o
            }
            clearBlockShadowNode(t) {
                t && (t.children.forEach(t => {
                    this.cellShadowModel.putNodeToNodePool(t)
                }
                ),
                t.destroy())
            }
        }
        ;
        (0,
        i.Cg)([(0,
        c.KA)(u.A)], h.prototype, "cellShadowModel", void 0),
        h = (0,
        i.Cg)([d("BaseBlockShadowController")], h),
        o.A = h,
        window.cc._RF.pop()
    },
    8773(t, o, e) {
        "use strict";
        e.d(o, {
            P: function() {
                return T
            }
        }),
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(28089)
          , s = e(5167)
          , c = e(87154)
          , l = e(7604)
          , a = e(9143)
          , u = e(91919)
          , d = e(53501)
          , h = e(81452)
          , p = e(84218)
          , g = e(79444)
          , f = e(92002)
          , m = e(91310)
          , b = e(67860)
          , w = e(95080)
          , E = e(23241)
          , C = e(16222)
          , v = e(68062)
          , B = e(27900)
          , _ = e(85713)
          , P = e(24319)
          , y = e(37878)
          , R = e(69646)
          , k = e(47080)
          , M = e(43357);
        const {ccclass: A, property: O} = n.P4R;
        window.cc._RF.push({}, "d59a4gUnYtGJLRe+cy5gQpr", "BasePropPopup", void 0);
        let T = class extends r.A {
            constructor() {
                super(...arguments),
                this.coinBar = null,
                this.propType = C.P7.EXTRA_BLOCK,
                this.adsType = h.gy.EXTRA_BLOCK,
                this.bvgcEntryPoint = m.Q.EXTRA_SLOT,
                this.COIN_NOT_ENOUGH_TEXT_KEY = "text_coin_not_enough"
            }
            beforeOpen() {
                s.q.event.emit(E.L.GAME_PAUSE),
                this.btnAds.active = !1,
                this.btnCoin.active = !1,
                this.btnShare.active = !1,
                this.coinBar.active = !1
            }
            onOpen() {
                this.initUI(),
                this.bindEvents(),
                this.trackImpression()
            }
            bindEvents() {
                s.q.event.on(E.E.USE_PROP_FAILED, this.onUsePropFailed, this)
            }
            onUsePropFailed() {
                this.propModel.isPropUseLimit(this.propType) ? this.close() : this.initUI()
            }
            initUI() {
                const t = this.propType
                  , o = this.propModel;
                if (!this.propModel)
                    return;
                const e = o.getPropItemPrice(t);
                this.textCoinPrice && (this.textCoinPrice.string = e.toString());
                const i = o.getPropMethod(t)
                  , n = i === C.kR.COIN
                  , r = i === C.kR.ADS
                  , s = i === C.kR.SHARE;
                this.btnCoin && (this.btnCoin.active = n),
                this.btnAds && (this.btnAds.active = r),
                this.btnShare && (this.btnShare.active = s),
                this.coinBar && (this.coinBar.active = n)
            }
            onClickShare() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    var t;
                    if (!this.gameModel || (null === (t = this.ddCtr) || void 0 === t ? void 0 : t.isPollingRetrying()))
                        return;
                    this.trackClick("purchase");
                    const o = g.i.share.getPropShareConfig();
                    (yield(0,
                    v.f)(p.r.SHARE_PROP_PURCHASE, o ? {
                        msg: (0,
                        l.HC)(o.text_share, this.getShareReplaceText()),
                        image_share_app_cdn: o.image_other,
                        image_share_instagram_cdn: o.image_ins
                    } : {})) && (yield this.propCtr.useProp(C.kR.SHARE, this.propType))
                })
            }
            onClickAds() {
                var t;
                const o = this.gameModel;
                if (!o || (null === (t = this.ddCtr) || void 0 === t ? void 0 : t.isPollingRetrying()))
                    return;
                this.trackClick("purchase");
                const e = n.ESE.getInfoWithPath(a.c.image_ads_icon5)
                  , i = this.propType === C.P7.BOMB && e ? n.Uyx.utils.getUrlWithUuid(e.uuid, {
                    isNative: !0
                }) : "";
                s.q.spinner.startShow(),
                (0,
                c.o)({
                    adsType: this.adsType,
                    token: o.adsToken,
                    adsDuration: this.propModel.getPropAdsDuration(this.propType),
                    rewardImg: i,
                    gameParams: {
                        sessionID: o.sessionID,
                        propType: this.propType.toString()
                    },
                    backCallback: t => {
                        s.q.spinner.end(),
                        console.log("openAdsPage code: ", t),
                        this.propCtr.useProp(C.kR.ADS, this.propType)
                    }
                })
            }
            onClickCoin() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    var t;
                    if (this.gameModel && !(null === (t = this.ddCtr) || void 0 === t ? void 0 : t.isPollingRetrying())) {
                        if (this.trackClick("purchase"),
                        g.i.user.userCoins < this.propModel.getPropItemPrice(this.propType))
                            return s.q.ui.showToast((0,
                            l.wb)(this.COIN_NOT_ENOUGH_TEXT_KEY)),
                            void b.A.showBVGC({
                                project: u.A.gameName,
                                entryPoint: this.bvgcEntryPoint,
                                url: g.i.activitySetting.url_bvgc || "",
                                switch: "on" === g.i.activitySetting.text_BVGC,
                                userInfo: {
                                    userid: g.i.user.userid,
                                    username: g.i.user.username
                                }
                            });
                        yield this.propCtr.useProp(C.kR.COIN, this.propType)
                    }
                })
            }
            getShareReplaceText() {
                return {
                    score_or_level: this.gameModel.score || 0
                }
            }
            getBoosterType() {
                switch (this.propType) {
                case C.P7.EXTRA_BLOCK:
                    return 1;
                case C.P7.BOMB:
                    return 5;
                case C.P7.REMOVE:
                    return 3;
                default:
                    return 0
                }
            }
            isAdsMethod() {
                return this.propModel.getPropMethod(this.propType) === C.kR.ADS
            }
            isShareMethod() {
                return this.propModel.getPropMethod(this.propType) === C.kR.SHARE
            }
            getExtraTrackParams() {
                return Object.assign(Object.assign({}, this.gameModel.getBaseTrackParams()), {
                    play_score: this.gameModel.score
                })
            }
            trackClick(t) {
                this.gameModel && (0,
                f.nx)(d.qo.GAME_PAGE, d.vf.ACTION_BUTTON, d.W1.BOOSTER_POPUP, Object.assign(Object.assign({}, this.getExtraTrackParams()), {
                    action_button_type: t,
                    is_ads: this.isAdsMethod() ? 1 : 0,
                    booster_type: this.getBoosterType(),
                    difficulty: this.blockGroupModel.difficultyMode,
                    is_shareable: this.isShareMethod()
                }))
            }
            trackImpression() {
                (0,
                f.ad)(d.qo.GAME_PAGE, d.W1.BOOSTER_POPUP, Object.assign(Object.assign({}, this.getExtraTrackParams()), {
                    is_ads: this.isAdsMethod() ? 1 : 0,
                    booster_type: this.getBoosterType(),
                    difficulty: this.blockGroupModel.difficultyMode,
                    is_shareable: this.isShareMethod()
                }))
            }
            back() {
                this.trackClick("back_btn"),
                this.close()
            }
            onClickClose() {
                this.trackClick("close_btn"),
                this.close()
            }
            onClose() {
                s.q.event.emit(E.E.RESTART_USER_INACTIVE_COUNTDOWN)
            }
            onDestroy() {
                s.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([O(n.bP0)], T.prototype, "coinBar", void 0),
        (0,
        i.Cg)([O(n.bP0)], T.prototype, "btnAds", void 0),
        (0,
        i.Cg)([O(n.bP0)], T.prototype, "btnCoin", void 0),
        (0,
        i.Cg)([O(n.bP0)], T.prototype, "btnShare", void 0),
        (0,
        i.Cg)([O(n.JU7)], T.prototype, "textCoinPrice", void 0),
        (0,
        i.Cg)([(0,
        w.KA)(M.A)], T.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        w.KA)(k.A)], T.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        w.KA)(y.A)], T.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        w.KA)(R.A)], T.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        w.KA)(B.A)], T.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        w.KA)(P.A)], T.prototype, "propCtr", void 0),
        (0,
        i.Cg)([(0,
        w.KA)(_.A)], T.prototype, "gameRecordCtr", void 0),
        (0,
        i.Cg)([(0,
        w.nF)(500), (0,
        w.Qk)()], T.prototype, "onClickShare", null),
        (0,
        i.Cg)([(0,
        w.nF)(500)], T.prototype, "onClickAds", null),
        (0,
        i.Cg)([(0,
        w.nF)(500), (0,
        w.Qk)()], T.prototype, "onClickCoin", null),
        T = (0,
        i.Cg)([A("BasePropPopup")], T),
        window.cc._RF.pop()
    },
    9067(t, o, e) {
        var i;
        !function(t, n) {
            function r(t) {
                var o = this;
                o.next = function() {
                    var t, e, i = o.x, n = o.i;
                    return t = i[n],
                    e = (t ^= t >>> 7) ^ t << 24,
                    e ^= (t = i[n + 1 & 7]) ^ t >>> 10,
                    e ^= (t = i[n + 3 & 7]) ^ t >>> 3,
                    e ^= (t = i[n + 4 & 7]) ^ t << 7,
                    t = i[n + 7 & 7],
                    e ^= (t ^= t << 13) ^ t << 9,
                    i[n] = e,
                    o.i = n + 1 & 7,
                    e
                }
                ,
                function(t, o) {
                    var e, i = [];
                    if (o === (0 | o))
                        i[0] = o;
                    else
                        for (o = "" + o,
                        e = 0; e < o.length; ++e)
                            i[7 & e] = i[7 & e] << 15 ^ o.charCodeAt(e) + i[e + 1 & 7] << 13;
                    for (; i.length < 8; )
                        i.push(0);
                    for (e = 0; e < 8 && 0 === i[e]; ++e)
                        ;
                    for (8 == e ? i[7] = -1 : i[e],
                    t.x = i,
                    t.i = 0,
                    e = 256; e > 0; --e)
                        t.next()
                }(o, t)
            }
            function s(t, o) {
                return o.x = t.x.slice(),
                o.i = t.i,
                o
            }
            function c(t, o) {
                null == t && (t = +new Date);
                var e = new r(t)
                  , i = o && o.state
                  , n = function() {
                    return (e.next() >>> 0) / 4294967296
                };
                return n.double = function() {
                    do {
                        var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }
                ,
                n.int32 = e.next,
                n.quick = n,
                i && (i.x && s(i, e),
                n.state = function() {
                    return s(e, {})
                }
                ),
                n
            }
            n && n.exports ? n.exports = c : e.amdD && e.amdO ? void 0 === (i = function() {
                return c
            }
            .call(o, e, o, n)) || (n.exports = i) : this.xorshift7 = c
        }(0, t = e.nmd(t), e.amdD)
    },
    9143(t, o, e) {
        "use strict";
        var i;
        e.d(o, {
            c: function() {
                return i
            }
        }),
        function(t) {
            t.image_ads_icon5 = "texture/gameScene/game_ads_icon/image_ads_icon5"
        }(i || (i = {}))
    },
    11517(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(62474)
          , c = e(71573)
          , l = e(91879)
          , a = e(47075);
        const {ccclass: u} = n.P4R;
        window.cc._RF.push({}, "40edfKeVSFCtaUJ5mjRlxV8", "BasePreEliminateLightModel", void 0);
        let d = class extends r.t {
            constructor() {
                super(...arguments),
                this.DEFAULT_PRE_ELIMINATE_LIGHT_SIZE = 126,
                this.nodePoolMap = new Map,
                this.bombPool = new n.lPW
            }
            getNodePool(t) {
                return this.nodePoolMap.get(t) || (this.nodePoolMap.set(t, new n.lPW),
                this.nodePoolMap.get(t))
            }
            getNodeFromNodePool(t) {
                const o = this.getNodePool(t);
                return o && o.size() > 0 ? o.get() : null
            }
            createPreEliminateLightNode(t) {
                let o = this.getNodeFromNodePool(t);
                return o || (o = (0,
                n.Flv)(this.preEliminateLight)),
                o.getComponent(c.B).switchSprite(a.KR[t]),
                o
            }
            createBombPreEliminateLightNode() {
                let t = this.bombPool.get();
                return t || (t = (0,
                n.Flv)(this.preEliminateLight),
                t.getComponent(c.B).switchSprite(a.qv)),
                t
            }
            putNodeToNodePool(t) {
                const o = t.getComponent(c.B).getCurrentIndex();
                t.parent && t.removeFromParent();
                const e = this.getNodePool(o);
                e && e.put(t)
            }
            popNode(t) {
                if (!this.preEliminateLight && (this.preEliminateLight = l.h.get(s.Z.PreEliminateLight, n.tX0)),
                this.preEliminateLight)
                    return this.createPreEliminateLightNode(t)
            }
            putBombPreEliminateNode(t) {
                t.parent && t.removeFromParent(),
                this.bombPool && this.bombPool.put(t)
            }
            popBombPreEliminateNode() {
                if (!this.preEliminateLight && (this.preEliminateLight = l.h.get(s.Z.PreEliminateLight, n.tX0)),
                this.preEliminateLight)
                    return this.createBombPreEliminateLightNode()
            }
        }
        ;
        d = (0,
        i.Cg)([u("BasePreEliminateLightModel")], d),
        o.A = d,
        window.cc._RF.pop()
    },
    11972(t, o, e) {
        "use strict";
        e(44114);
        var i = e(31635)
          , n = e(78248)
          , r = e(30951)
          , s = e(5167)
          , c = e(95080)
          , l = e(23241)
          , a = e(16222)
          , u = e(37878)
          , d = e(62794)
          , h = e(69646)
          , p = e(47080)
          , g = e(43357)
          , f = e(55493)
          , m = e(74172)
          , b = e(27900)
          , w = e(85713);
        const {ccclass: E} = n.P4R;
        window.cc._RF.push({}, "89d84mxQn1PX4CoU6fHUJv0", "BaseGameController", void 0);
        let C = class extends r.w {
            init() {
                this.bindEvent()
            }
            bindEvent() {
                s.q.event.on(l.L.GAME_RECOVER, this.onRecoverGame, this),
                s.q.event.on(l.L.GAME_BEGIN, this.onBeginGame, this),
                s.q.event.on(l.L.GAME_END, this.onFinishGame, this),
                s.q.event.on(l.E.MANUAL_QUIT_GAME, this.onManualQuitGame, this),
                s.q.event.on(l.E.USE_PROP_FAILED, this.onRecoverUsePropFailed, this)
            }
            checkGameEnd() {
                this.boardCtr.checkIsDeath() && this.handleDeath()
            }
            onBeginGame(t) {}
            onRecoverGame(t) {}
            onRecoverUsePropFailed(t) {}
            onManualQuitGame() {
                this.onFinishGame(!0)
            }
            onFinishGame() {
                return (0,
                i.sH)(this, arguments, void 0, function() {
                    return function*() {}()
                })
            }
            handleDeath() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
                const o = this.propModel.isPropUseLimit(a.P7.REVIVE);
                s.q.event.emit(l.E.DEATH_WAITING),
                this.scheduleOnce( () => {
                    s.q.event.emit(l.E.DEATH_WAITING_END),
                    o ? s.q.event.emit(l.L.GAME_END) : this.revivePopup && s.q.ui.open({
                        uiPath: this.revivePopup
                    })
                }
                , t / 1e3)
            }
            updateGameData(t, o) {
                this.gameModel.score = t,
                this.gameModel.updateCombo(o),
                this.gameModel.addUsedBlock()
            }
            onDestroy() {
                s.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        c.KA)(p.A)], C.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(g.A)], C.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(d.A)], C.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(u.A)], C.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(h.A)], C.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        c.kW)(f.A)], C.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        c.kW)(m.A)], C.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        c.kW)(b.A)], C.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        c.kW)(w.A)], C.prototype, "gameRecordCtr", void 0),
        C = (0,
        i.Cg)([E("BaseGameController")], C),
        o.A = C,
        window.cc._RF.pop()
    },
    13290(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(35440);
        const {ccclass: c} = n.P4R;
        window.cc._RF.push({}, "99b7e0Ty+hCHqHojvZAdl5f", "BaseCellModel", void 0);
        let l = class extends r.t {
            constructor() {
                super(...arguments),
                this.nodePoolMap = new Map
            }
            initCellPfb(t) {
                this.cellPfb = t
            }
            getNodePool(t) {
                return this.nodePoolMap.get(t) || (this.nodePoolMap.set(t, new n.lPW),
                this.nodePoolMap.get(t))
            }
            getNodeFromNodePool(t) {
                const o = this.getNodePool(t);
                return o && o.size() > 0 ? o.get() : null
            }
            createCellNode(t) {
                let o = this.getNodeFromNodePool(t);
                return o || (o = (0,
                n.Flv)(this.cellPfb),
                o.getComponent(s.f).setColor(t)),
                o.getComponent(n.wFi).opacity = 255,
                o
            }
            putNodeToNodePool(t) {
                if (!t)
                    return;
                const o = t.getComponent(s.f).color;
                t.parent && t.removeFromParent();
                const e = this.getNodePool(o);
                e && e.put(t)
            }
            popNodes(t, o) {
                if (!this.cellPfb)
                    return;
                const e = [];
                for (let i = 0; i < t; i++) {
                    const t = this.createCellNode(o);
                    e.push(t)
                }
                return e
            }
        }
        ;
        l = (0,
        i.Cg)([c("BaseCellModel")], l),
        o.A = l,
        window.cc._RF.pop()
    },
    23313(t, o, e) {
        "use strict";
        e.d(o, {
            y: function() {
                return h
            }
        }),
        e(23792),
        e(44114),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(62474)
          , s = e(71573)
          , c = e(95080)
          , l = e(91879)
          , a = e(68031);
        const {ccclass: u, property: d} = n.P4R;
        window.cc._RF.push({}, "a4d1cRec6BD9KIyx+xG/3W0", "ComboHint", void 0);
        let h = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.digit = 0
            }
            init(t) {
                this.digit = t;
                const o = l.h.get(r.Z.ComboNum, n.tX0);
                if (o)
                    for (let e = 0; e < t; e++)
                        (0,
                        n.Flv)(o).setParent(this.timeBox)
            }
            show(t) {
                this.setComboTimes(t),
                this.timeBox.active = !0,
                this.comboText.active = !0,
                this.timeBox.scale = (0,
                n.v3)(.1, .1, 1),
                this.comboText.scale = (0,
                n.v3)(1.4, 1.4, 1),
                (0,
                n.QxW)(this.timeBox).to(.08, {
                    scale: (0,
                    n.v3)(1.3, 1.3, 1)
                }).to(.04, {
                    scale: (0,
                    n.v3)(1, 1, 1)
                }).delay(.38).start(),
                (0,
                n.QxW)(this.comboText).to(.08, {
                    scale: (0,
                    n.v3)(.9, .9, 1)
                }).to(.04, {
                    scale: (0,
                    n.v3)(1, 1, 1)
                }).delay(.38).call( () => {
                    this.timeBox.active = !1,
                    this.comboText.active = !1,
                    this.comboHintModel.putNodeToNodePool(this.node)
                }
                ).start()
            }
            setComboTimes(t) {
                const o = t.toString();
                this.timeBox.children.forEach( (t, e) => {
                    e < o.length ? t.getComponent(s.B).switchSprite(Number(o[e])) : t.active = !1
                }
                )
            }
        }
        ;
        (0,
        i.Cg)([d(n.bP0)], h.prototype, "timeBox", void 0),
        (0,
        i.Cg)([d(n.bP0)], h.prototype, "comboText", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(a.A)], h.prototype, "comboHintModel", void 0),
        h = (0,
        i.Cg)([u("ComboHint")], h),
        window.cc._RF.pop()
    },
    24319(t, o, e) {
        "use strict";
        e.d(o, {
            A: function() {
                return D
            }
        }),
        e(23792),
        e(44114),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(92068)
          , r = e(78248)
          , s = e(91942)
          , c = e(30951)
          , l = e(5167)
          , a = e(7604)
          , u = e(62474)
          , d = e(91919)
          , h = e(71241)
          , p = e(82128)
          , g = e(22074)
          , f = e(79444)
          , m = e(99947)
          , b = e(27606)
          , w = e(67860)
          , E = e(95080)
          , C = e(56984)
          , v = e(23241)
          , B = e(16222)
          , _ = e(37878)
          , P = e(69646)
          , y = e(47080)
          , R = e(43357)
          , k = e(55493)
          , M = e(27900)
          , A = e(11972);
        const {ccclass: O} = r.P4R;
        window.cc._RF.push({}, "d8798azI2FHvLNB8Jnt5zhk", "BasePropController", void 0);
        let T = class extends c.w {
            constructor() {
                super(...arguments),
                this.isRequesting = !1,
                this.QUIT_LANDING_TYPE = p.z.BACK_LANDING,
                this.FETCH_GAME_PROP_STATUS_URL = "/api-gateway/".concat(d.A.gameName, "/game/query"),
                this.FETCH_GAME_BUY_PROP_URL = "/api-gateway/".concat(d.A.gameName, "/game/obtain_item"),
                this.PROP_BVGC_ENTRY_POINT_MAP = B.jn,
                this.COIN_NOT_ENOUGH_TEXT_KEY = "text_coin_not_enough",
                this.SHOULD_REPLACE_DDL = !0,
                this.lastPropCountDownTime = 0
            }
            init() {
                this.bindEvents()
            }
            bindEvents() {
                l.q.event.on(v.E.PROP_COUNT_DOWN_END, this.onPropCountDownEnd, this)
            }
            getIsRequesting() {
                return this.isRequesting
            }
            onPropCountDownEnd(t) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    if (this.gameModel.isGameOver)
                        return;
                    const o = this.propModel.getPropLatestExpiry(t)
                      , e = (0,
                    C.Fm)();
                    let n = 0;
                    const r = [];
                    for (const t of o)
                        1e3 * t.expireAt > e ? r.push(t) : n += t.amount || 0;
                    if (this.propModel.updatePropLatestExpiry(t, r),
                    n > 0) {
                        const o = this.propModel.getPropInventory(t);
                        this.propModel.updatePropInventory(t, Math.max(0, o - n))
                    }
                    if (l.q.event.emit(v.E.UPDATE_PROP_STATUS),
                    0 === r.length && Math.abs(e - this.lastPropCountDownTime) > 100) {
                        this.lastPropCountDownTime = e;
                        const t = yield function(t, o) {
                            return (0,
                            i.sH)(this, void 0, void 0, function*() {
                                return yield(0,
                                s.bE)(t, o, {
                                    retryTime: 1,
                                    showToast: !1
                                })
                            })
                        }(this.FETCH_GAME_PROP_STATUS_URL, {
                            sessionID: this.gameModel.sessionID
                        });
                        0 === t.code && t.data ? t.data.itemList.forEach(t => {
                            this.propModel.updatePropInventoryStatus(t)
                        }
                        ) : this.handleFetchPropStatusFail(t)
                    }
                    this.handleInventoryPropUsingExpired(),
                    l.q.event.emit(v.E.UPDATE_PROP_STATUS)
                })
            }
            handleFetchPropStatusFail(t) {
                const {code: o, msg: e} = t || {};
                switch (o) {
                case h.ze.MULTI_DEVICE:
                    l.q.ui.open({
                        uiPath: u.Z.MultipleDeviceKickedOutPopup,
                        data: {
                            quitType: this.QUIT_LANDING_TYPE
                        }
                    });
                    break;
                case h.ze.SESSION_INVALID:
                    l.q.error.showMonsterToast({
                        msg: (0,
                        a.wb)("text_network_error"),
                        quitType: this.QUIT_LANDING_TYPE,
                        hideClose: !0
                    })
                }
                (0,
                b.Kb)("[prop err] 查询道具状态失败，code: ".concat(o, ", msg: ").concat(e), {
                    title: "Query Prop Status Error",
                    errorType: "timeout" === e ? m.wQ.NETWORK_ERROR : m.wQ.DEFAULT
                })
            }
            handleInventoryPropUsingExpired() {
                const {isUsingInventoryProp: t, isUsingBomb: o, isUsingExtraBlock: e, isUsingRemove: i} = this.gameModel;
                if (!t || this.isRequesting)
                    return;
                const n = [{
                    isUsing: o,
                    propType: B.P7.BOMB,
                    event: v.E.USE_BOMB_PROP_END
                }, {
                    isUsing: e,
                    propType: B.P7.EXTRA_BLOCK,
                    event: v.E.USE_EXTRA_BLOCK_PROP_END
                }, {
                    isUsing: i,
                    propType: B.P7.REMOVE,
                    event: v.E.USE_REMOVE_PROP_END
                }];
                for (const {isUsing: t, propType: o, event: e} of n)
                    if (t && !this.propModel.hasPropInventory(o)) {
                        l.q.event.emit(e);
                        break
                    }
            }
            useProp(t, o, e) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const n = this.gameModel
                      , r = this.propModel
                      , c = this.blockGroupModel;
                    try {
                        l.q.spinner.forceStartShow(),
                        this.isRequesting = !0;
                        const a = Object.assign(Object.assign({
                            itemID: o,
                            sessionID: n.sessionID,
                            method: t
                        }, this.SHOULD_REPLACE_DDL ? {
                            ddlParam: e ? Object.assign(Object.assign({}, e.ddlParam), {
                                seq: this.ddModel.getSeq()
                            }) : this.ddCtr.getDDLParam(this.ddModel.currentOffset + 1)
                        } : {}), {
                            requestID: "".concat(n.sessionID, "_").concat(o, "_").concat(r.getPropUseTime(o)),
                            loseDD: c.difficultyMode
                        })
                          , u = yield function(t, o) {
                            return (0,
                            i.sH)(this, void 0, void 0, function*() {
                                return yield(0,
                                s.bE)(t, o, {
                                    showToast: !1
                                })
                            })
                        }(this.FETCH_GAME_BUY_PROP_URL, a);
                        return this.isRequesting = !1,
                        0 === u.code && u.data ? this.usePropSuccess(u.data, a, o) : this.usePropFail(u, a, o),
                        u
                    } catch (t) {
                        this.isRequesting = !1,
                        l.q.ui.showToast((0,
                        a.wb)(o === B.P7.REVIVE ? "text_revive_failed" : "text_use_prop_fail")),
                        (0,
                        b.Kb)("[prop err] 使用道具 [".concat(o, "] 失败"), {
                            title: "Use Prop Error",
                            error: t
                        })
                    } finally {
                        l.q.spinner.forceEnd()
                    }
                })
            }
            usePropSuccess(t, o, e) {
                const i = this.propModel;
                f.i.user.userCoins = t.coinBalance,
                i.updatePropStatus(t.itemStatus),
                e !== B.P7.REVIVE && this.blockGroupModel.markPropsUsed(),
                l.q.event.emit(v.E.UPDATE_PROP_STATUS),
                l.q.event.emit(g.Q.GAME_UPDATE_COIN_NUM),
                l.q.ui.close(u.Z.Monster),
                l.q.ui.closeAllPopup(),
                o.method !== B.kR.INVENTORY && this.emitUsePropEvent(e, t),
                e !== B.P7.REVIVE ? this.handleUseProp(t) : this.handleUseReviveProp(t)
            }
            usePropFail(t, o, e) {
                const {code: i, data: n, msg: r} = t
                  , s = f.i.user;
                switch (i) {
                case h.ze.MULTI_DEVICE:
                    l.q.ui.open({
                        uiPath: u.Z.MultipleDeviceKickedOutPopup,
                        data: {
                            quitType: this.QUIT_LANDING_TYPE
                        }
                    });
                    break;
                case h.ze.ITEM_USAGE_OVER_LIMIT:
                case h.ze.ITEM_NOT_ENOUGH:
                case h.ze.OBTAIN_METHOD_INVALID:
                    l.q.ui.showToast((0,
                    a.wb)(e === B.P7.REVIVE ? "text_revive_failed" : "text_use_prop_fail")),
                    this.propModel.updatePropStatus(n.itemStatus),
                    o.method === B.kR.INVENTORY && this.emitUsePropEndEvent(e),
                    l.q.event.emit(v.E.UPDATE_PROP_STATUS),
                    l.q.event.emit(v.E.USE_PROP_FAILED, e);
                    break;
                case h.ze.LACK_COIN:
                    s.userCoins = n.coinBalance,
                    l.q.event.emit(g.Q.GAME_UPDATE_COIN_NUM),
                    this.handleLackCoin(e);
                    break;
                default:
                    i === h.ze.RESPONSE_ERROR && "timeout" === r ? (this.isRequesting = !0,
                    l.q.error.showMonsterToast({
                        msg: (0,
                        a.wb)("text_network_error"),
                        backBtnText: (0,
                        a.wb)(this.SHOULD_REPLACE_DDL ? "text_btn_end_game" : "text_btn_back"),
                        quitType: p.z.CLOSE_SELF,
                        onRetry: this.useProp.bind(this, o.method, e, o),
                        onQuit: () => {
                            this.isRequesting = !1,
                            o.method === B.kR.INVENTORY && this.emitUsePropEndEvent(e),
                            this.SHOULD_REPLACE_DDL && l.q.event.emit(v.L.GAME_END)
                        }
                        ,
                        hideClose: !0
                    })) : (o.method === B.kR.INVENTORY && this.emitUsePropEndEvent(e),
                    l.q.ui.showToast((0,
                    a.wb)(e === B.P7.REVIVE ? "text_revive_failed" : "text_use_prop_fail"))),
                    (0,
                    b.Kb)("[prop err] 使用道具 [".concat(e, "] 失败，code: ").concat(i, ", msg: ").concat(t.msg), {
                        title: "Use Prop Error",
                        errorType: "timeout" === r || "status:0" === r ? m.wQ.NETWORK_ERROR : m.wQ.DEFAULT
                    })
                }
            }
            handleLackCoin(t) {
                l.q.ui.showToast((0,
                a.wb)(this.COIN_NOT_ENOUGH_TEXT_KEY)),
                f.i.user.userCoins < this.propModel.getPropItemPrice(t) && w.A.showBVGC({
                    project: d.A.gameName,
                    entryPoint: this.PROP_BVGC_ENTRY_POINT_MAP[t],
                    url: f.i.activitySetting.url_bvgc || "",
                    switch: "on" === f.i.activitySetting.text_BVGC,
                    userInfo: {
                        userid: f.i.user.userid,
                        username: f.i.user.username
                    }
                })
            }
            handleUseProp(t) {
                if (l.q.event.emit(v.L.GAME_RECORD),
                this.SHOULD_REPLACE_DDL) {
                    const {ddl: o} = t;
                    this.ddCtr.replaceDDList(o, this.ddModel.currentOffset)
                }
            }
            handleUseReviveProp(t) {
                if (l.q.event.emit(v.L.GAME_RECORD),
                (0,
                n._o)(),
                this.SHOULD_REPLACE_DDL) {
                    const {ddl: o} = t;
                    this.ddCtr.replaceDDList(o, this.ddModel.currentOffset)
                }
                this.blockCtr.generateBlockGroup(),
                this.gameCtr.checkGameEnd()
            }
            emitUsePropEvent(t, o) {
                switch (t) {
                case B.P7.EXTRA_BLOCK:
                    l.q.event.emit(v.E.USE_EXTRA_BLOCK_PROP, o);
                    break;
                case B.P7.BOMB:
                    l.q.event.emit(v.E.USE_BOMB_PROP, o);
                    break;
                case B.P7.REMOVE:
                    l.q.event.emit(v.E.USE_REMOVE_PROP, o);
                    break;
                case B.P7.REVIVE:
                    l.q.event.emit(v.E.USE_REVIVE_PROP, o)
                }
            }
            emitUsePropEndEvent(t) {
                switch (t) {
                case B.P7.EXTRA_BLOCK:
                    l.q.event.emit(v.E.USE_EXTRA_BLOCK_PROP_END);
                    break;
                case B.P7.BOMB:
                    l.q.event.emit(v.E.USE_BOMB_PROP_END);
                    break;
                case B.P7.REMOVE:
                    l.q.event.emit(v.E.USE_REMOVE_PROP_END)
                }
            }
            onDestroy() {
                l.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        E.KA)(y.A)], T.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        E.KA)(R.A)], T.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        E.KA)(P.A)], T.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        E.KA)(_.A)], T.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        E.kW)(M.A)], T.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        E.kW)(k.A)], T.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        E.kW)(A.A)], T.prototype, "gameCtr", void 0),
        T = (0,
        i.Cg)([O("BasePropController")], T);
        var D = T;
        window.cc._RF.pop()
    },
    24521(t, o, e) {
        "use strict";
        e.d(o, {
            B4: function() {
                return P
            },
            fY: function() {
                return w
            },
            _$: function() {
                return E
            },
            Zt: function() {
                return m
            },
            FG: function() {
                return b
            },
            h0: function() {
                return f
            },
            oG: function() {
                return C
            },
            Rp: function() {
                return g
            },
            YJ: function() {
                return B
            },
            vZ: function() {
                return p
            }
        }),
        e(23792),
        e(44114),
        e(26910),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(21202)
          , c = e(87778)
          , l = e(79444)
          , a = e(27606)
          , u = (e(27495),
        e(8440))
          , d = e(28988);
        var h = e(3677);
        function p(t, o) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const {width: i, height: n} = o.getComponent(r.$lP)
              , s = i / 2
              , c = n / 2;
            return t.x >= -s && t.x <= s && t.y >= -c - e && t.y <= c
        }
        function g(t) {
            if (!t.length)
                return [];
            const o = t.slice().sort( (t, o) => t - o)
              , e = [];
            let i = [o[0]];
            for (let n = 1; n < o.length; n++)
                o[n] === o[n - 1] + 1 ? i.push(o[n]) : (e.push(i),
                i = [t[n]]);
            return e.push(i),
            e
        }
        function f(t) {
            return t.length ? [Math.min(...t), Math.max(...t)] : [0, 0]
        }
        function m() {
            return (0,
            s.g5)(c.P.audio_block_blast_bgm)
        }
        function b(t, o) {
            const e = t.length >= 3 || o.length >= 3
              , i = t.length <= 1 && o.length <= 1;
            return e ? c.P.audio_clear_multiple_rows : i ? c.P.audio_block_matched : c.P.audio_block_matched2
        }
        function w(t) {
            return t <= 8 ? h.jD[t] : h.eT
        }
        function E(t) {
            return t <= 2 ? 1 : t <= 4 ? 2 : 3
        }
        function C(t) {
            return t <= 2 ? 0 : t <= 4 ? 10 : 20
        }
        let v = !1;
        function B() {
            v || (v = !0,
            (0,
            n.aa)({
                logInfo: a.Vt,
                logError: a.Kb
            }))
        }
        let _ = !1;
        function P() {
            return (0,
            i.sH)(this, void 0, void 0, function*() {
                if (!_) {
                    _ = !0;
                    try {
                        l.i.isLowEquipment = yield function() {
                            return (0,
                            i.sH)(this, void 0, void 0, function*() {
                                const t = function() {
                                    if (!u.Ay.android || !u.Ay.shopeeApp)
                                        return !1;
                                    try {
                                        if (parseInt(u.Ay.mobileOsVersion.split(".")[0]) >= 9)
                                            return !1
                                    } catch (t) {
                                        return !1
                                    }
                                    return !0
                                }()
                                  , o = yield function() {
                                    return (0,
                                    i.sH)(this, void 0, void 0, function*() {
                                        if (!u.Ay.ios || !u.Ay.shopeeApp)
                                            return !1;
                                        if (window.screen.height / window.screen.width > 1.8)
                                            return !1;
                                        let t = "";
                                        t = yield function() {
                                            return (0,
                                            i.sH)(this, void 0, void 0, function*() {
                                                var t;
                                                try {
                                                    const o = yield(0,
                                                    d.lO)("getDeviceInfo");
                                                    return null === (t = null == o ? void 0 : o.data.deviceinfo_LF) || void 0 === t ? void 0 : t.model
                                                } catch (t) {
                                                    return console.error("getDeviceModel error", t),
                                                    ""
                                                }
                                            })
                                        }(),
                                        "string" != typeof t && (t = "");
                                        const o = t.match(/iPhone(\d+),/);
                                        if (!o)
                                            return !1;
                                        const e = parseInt(o[1]);
                                        return !Number.isNaN(e) && e < 9
                                    })
                                }();
                                return t || o
                            })
                        }()
                    } catch (t) {
                        (0,
                        a.Kb)("[checkIsLowEquipment error] 低端机检测异常", {
                            title: "Equipment Check Error",
                            error: t
                        })
                    }
                }
            })
        }
    },
    24580(t, o, e) {
        "use strict";
        e.d(o, {
            X: function() {
                return b
            }
        }),
        e(46449),
        e(23792),
        e(44114),
        e(93514),
        e(98992),
        e(54520),
        e(62953);
        var i = e(31635)
          , n = e(4911)
          , r = e(78248)
          , s = e(5167)
          , c = e(95080)
          , l = e(23241)
          , a = e(16222)
          , u = e(37878)
          , d = e(62794)
          , h = e(47080)
          , p = e(43357)
          , g = e(63878);
        const {ccclass: f, property: m} = r.P4R;
        window.cc._RF.push({}, "90fd2bpKIZGxrcM+sScCy0z", "ExtraBlockUsePanel", void 0);
        let b = class extends g.l {
            constructor() {
                super(...arguments),
                this.countDown = 0,
                this.isCountDowning = !1,
                this.guideTween = null,
                this.propType = a.P7.EXTRA_BLOCK,
                this.useEndEvent = l.E.USE_EXTRA_BLOCK_PROP_END
            }
            onEnable() {
                super.onEnable(),
                s.q.event.on(l.E.TOUCH_EXTRA_BLOCK, this.onTouchExtraBlock, this),
                s.q.event.on(l.E.CANCEL_PLACE_EXTRA_BLOCK, this.startCountDown, this)
            }
            update(t) {
                super.update(t),
                this.isCountDowning && (this.countDown -= t,
                this.countDown <= 0 && (this.cancelCountDown(),
                this.showGuide()))
            }
            startCountDown() {
                this.countDown = 2,
                this.isCountDowning = !0
            }
            cancelCountDown() {
                this.isCountDowning = !1,
                this.countDown = 0
            }
            onTouchExtraBlock() {
                this.cancelCountDown(),
                this.closeGuide()
            }
            show() {
                this.node.active = !0,
                s.q.ui.forceHideBackBtn = !0,
                s.q.ui.updateBackBtnVisible();
                const t = this.node.getSiblingIndex();
                this.board.setSiblingIndex(t),
                this.cancelBtn.active = this.gameModel.isUsingInventoryProp,
                this.startCountDown()
            }
            hide() {
                this.node.active = !1,
                s.q.ui.forceHideBackBtn = !1,
                s.q.ui.updateBackBtnVisible();
                const t = this.blockGroup.getSiblingIndex();
                this.board.setSiblingIndex(t),
                this.cancelCountDown(),
                this.closeGuide()
            }
            showGuide() {
                const t = this.getTargetCell();
                if (!t)
                    return;
                const o = this.extraBlockBox.worldPosition
                  , e = this.board.getComponent(r.$lP).convertToWorldSpaceAR(t.pos);
                r.Kak.stopAllByTarget(this.guideFinger);
                const i = new r.eBl(o.x + 85,o.y - 55,o.z)
                  , n = new r.eBl(e.x + 85,e.y - 55,e.z)
                  , s = this.guideFinger.getChildByName("extraBlock");
                s.active = !1,
                this.guideFinger.worldPosition = i.clone(),
                this.guideFinger.active = !0;
                const c = (0,
                r.QxW)(this.guideFinger).delay(.2).call( () => {
                    s.active = !0
                }
                ).to(.5, {
                    worldPosition: n
                }).delay(1).call( () => {
                    s.active = !1,
                    this.guideFinger.worldPosition = i.clone()
                }
                );
                this.guideTween = (0,
                r.QxW)(this.guideFinger).repeatForever(c).start()
            }
            closeGuide() {
                this.guideTween && (this.guideTween.stop(),
                this.guideTween = null),
                this.guideFinger.active = !1
            }
            getTargetCell() {
                return this.findRandomEmptyCell()
            }
            findRandomEmptyCell() {
                const t = this.boardModel.grid.flat().filter(t => null === t.cell)
                  , o = t.length - 1;
                return t[Math.floor((0,
                n.G0)() * (o - 0 + 1)) + 0]
            }
            onDestroy() {
                s.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        c.KA)(p.A)], b.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(h.A)], b.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(d.A)], b.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(u.A)], b.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([m(r.bP0)], b.prototype, "board", void 0),
        (0,
        i.Cg)([m(r.bP0)], b.prototype, "blockGroup", void 0),
        (0,
        i.Cg)([m(r.bP0)], b.prototype, "extraBlockBox", void 0),
        (0,
        i.Cg)([m(r.bP0)], b.prototype, "guideFinger", void 0),
        (0,
        i.Cg)([m(r.bP0)], b.prototype, "cancelBtn", void 0),
        b = (0,
        i.Cg)([f("ExtraBlockUsePanel")], b),
        window.cc._RF.pop()
    },
    25790(t, o, e) {
        "use strict";
        e.d(o, {
            F: function() {
                return S
            }
        }),
        e(23792),
        e(44114),
        e(98992),
        e(81454),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(28089)
          , c = e(5167)
          , l = e(87778)
          , a = e(62474)
          , u = e(53501)
          , d = e(82128)
          , h = e(27606)
          , p = e(92002)
          , g = e(39295)
          , f = e(95080)
          , m = e(54658)
          , b = e(41455)
          , w = e(92384)
          , E = e(3677)
          , C = e(23241)
          , v = e(55493)
          , B = e(74172)
          , _ = e(49452)
          , P = e(11972)
          , y = e(56435)
          , R = e(37878)
          , k = e(62794)
          , M = e(69646)
          , A = e(47080)
          , O = e(24521);
        const {ccclass: T, property: D} = r.P4R;
        window.cc._RF.push({}, "2e73eKtHbFF+amWdPpM6gIo", "BaseGameView", void 0);
        let S = class extends s.A {
            constructor() {
                super(...arguments),
                this.touchId = null,
                this.DEFAULT_START_Y_OFFSET = 100,
                this.countDown = 0,
                this.isCountDowning = !1,
                this.isWaitingGameEnd = !1,
                this.isTouchingBlock = !1
            }
            onOpen(t) {
                this.bindEvents()
            }
            bindEvents() {
                c.q.event.on(C.L.GAME_BEGIN, this.init, this),
                c.q.event.on(C.L.GAME_RECOVER, this.init, this),
                c.q.event.on(C.E.DEATH_WAITING, this.onDeathWaiting, this),
                c.q.event.on(C.E.DEATH_WAITING_END, this.onDeathWaitingEnd, this),
                c.q.event.on(C.L.REFRESH_BLOCK_GROUP, this.onRefreshBlockGroup, this),
                r.hFB.on(r.pde.EventType.TOUCH_START, this.onTouchStart, this),
                r.hFB.on(r.pde.EventType.TOUCH_MOVE, this.onTouchMove, this),
                r.hFB.on(r.pde.EventType.TOUCH_END, this.onTouchEnd, this),
                r.hFB.on(r.pde.EventType.TOUCH_CANCEL, this.onTouchEnd, this),
                this.extraBlockBox.on(r.bP0.EventType.TOUCH_START, this.onTouchStart, this),
                this.extraBlockBox.on(r.bP0.EventType.TOUCH_MOVE, this.onTouchMove, this),
                this.extraBlockBox.on(r.bP0.EventType.TOUCH_END, this.onTouchEnd, this),
                this.extraBlockBox.on(r.bP0.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            }
            init(t) {
                const o = this.blockGroup.getWorldPosition()
                  , e = this.board.getWorldPosition()
                  , i = this.board.getComponent(r.$lP).height
                  , n = e.y - i / 2;
                this.DEFAULT_START_Y_OFFSET = n - o.y + this.boardModel.bottomOffsetY,
                c.q.audio.musicVolume = c.q.audio.musicVolume ? Math.pow(10, -.3) : 0,
                c.q.audio.playBgm((0,
                O.Zt)())
            }
            onDeathWaiting() {
                this.isWaitingGameEnd = !0
            }
            onDeathWaitingEnd() {
                this.isWaitingGameEnd = !1
            }
            onRefreshBlockGroup() {
                this.touchId = null,
                this.isTouchingBlock = !1,
                this.currentBlock = null
            }
            isBlockGroupItemSelectable(t, o, e, i) {
                return !(null === t || o !== e || !(0,
                O.vZ)(i, this.blockGroup, g.I.isLongScreen ? 60 : 0))
            }
            onBlockSelected(t) {}
            getBlockNodeByTouch(t) {
                let o;
                const e = this.blockGroup.getComponent(r.$lP)
                  , i = this.blockGroup.getComponent(w.x)
                  , n = e.convertToNodeSpaceAR(new r.eBl(t.x,t.y))
                  , s = i.leftBoundaryPos
                  , l = i.rightBoundaryPos;
                if (!s || !l)
                    return o;
                const a = n.x < s.x ? 0 : n.x > l.x ? 2 : 1
                  , u = this.blockGroupModel.blockGroup;
                for (let t = 0; t < u.length; t++) {
                    const e = u[t]
                      , i = e.block;
                    if (this.isBlockGroupItemSelectable(i, t, a, n)) {
                        this.gameModel.isUsingRemove ? c.q.event.emit(C.E.TOUCH_REMOVE_BLOCK, e.index) : (e.blockShadow && (e.blockShadow.active = !1),
                        this.onBlockSelected(i),
                        o = i),
                        (0,
                        h.Vt)("[选中方块] groupIndex: ".concat(e.index));
                        break
                    }
                }
                return o
            }
            onTouchStart(t) {
                var o, e;
                if (null !== this.touchId)
                    return;
                let i = null;
                const n = t.getUILocation();
                if (this.gameModel.isUsingExtraBlock) {
                    const t = this.extraBlockBox.getComponent(r.$lP).convertToNodeSpaceAR(new r.eBl(n.x,n.y))
                      , e = null === (o = this.extraBlockBox.children) || void 0 === o ? void 0 : o[0];
                    if (!e)
                        return;
                    (0,
                    O.vZ)(e.position.clone().subtract(t), this.extraBlockBox) && (i = e,
                    c.q.event.emit(C.E.TOUCH_EXTRA_BLOCK))
                } else
                    i = this.getBlockNodeByTouch(n);
                return i ? (c.q.event.emit(C.E.TOUCH_START_BLOCK),
                this.isTouchingBlock = !0,
                this.currentBlock = i,
                this.lastTouchPos = n.clone(),
                (0,
                m.c)("[touchStart] 当前触摸坐标: (".concat(n.x, ", ").concat(n.y, ")")),
                null === (e = this.currentBlock.parent) || void 0 === e || e.setSiblingIndex(999),
                c.q.audio.playEffect(l.P.audio_move_block),
                (0,
                r.QxW)(this.currentBlock).call( () => {
                    this.currentBlock.active = !0
                }
                ).to(.01, {
                    scale: new r.eBl(1,1,1),
                    position: new r.eBl(0,this.DEFAULT_START_Y_OFFSET,0)
                }).start(),
                this.touchId = t.getID(),
                i) : (this.clickDb.active = !0,
                this.clickDb.setWorldPosition(new r.eBl(n.x,n.y,0)),
                void this.clickDb.getComponent(r.bdY.ArmatureDisplay).playAnimation("click_fx", 1))
            }
            onTouchMove(t) {
                if (this.touchId !== t.getID())
                    return;
                if (!this.currentBlock || !this.currentBlock.isValid)
                    return void this.boardCtr.clearCellHint();
                const o = t.getUILocation()
                  , e = o.clone().subtract(this.lastTouchPos);
                this.lastTouchPos = o.clone();
                const i = this.currentBlock.getPosition().add(new r.eBl(1.3 * e.x,1.3 * e.y,0));
                this.currentBlock.setPosition(i),
                this.handleCellHint()
            }
            isCellHintAvailable(t) {
                return !!t && t.length > 0
            }
            handleCellHint() {
                const t = this.boardCtr.getMatchCells(this.currentBlock);
                if (!this.isCellHintAvailable(t))
                    return this.eliminateCtr.resetEliminateHint(),
                    void this.boardCtr.hideCellHint();
                this.boardCtr.hideCellHint(),
                this.boardCtr.showCellHint(this.currentBlock, t);
                const {rows: o, cols: e} = this.eliminateCtr.checkElimination(this.currentBlock, t[0]);
                this.eliminateCtr.showEliminateHint(this.currentBlock, o, e)
            }
            canPlaceBlock(t) {
                return !!t && t.length > 0
            }
            onTouchEnd(t) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const {isUsingExtraBlock: o} = this.gameModel;
                    if (this.touchId !== t.getID())
                        return;
                    if (!this.currentBlock || !this.currentBlock.isValid)
                        return this.boardCtr.clearCellHint(),
                        void this.eliminateCtr.resetEliminateHint();
                    c.q.event.emit(C.E.TOUCH_END_BLOCK),
                    this.isTouchingBlock = !1,
                    this.touchId = null;
                    const e = this.boardCtr.getMatchCells(this.currentBlock);
                    this.boardCtr.clearCellHint(),
                    this.eliminateCtr.resetEliminateHint(),
                    this.canPlaceBlock(e) ? (yield this.handleBlockPlacement(e),
                    c.q.event.emit(C.L.GAME_RECORD)) : (0,
                    r.QxW)(this.currentBlock).to(.01, {
                        scale: new r.eBl(E.T2,E.T2,1),
                        position: r.eBl.ZERO
                    }).call( () => {
                        if (o)
                            this.currentBlock.active = !1,
                            c.q.event.emit(C.E.CANCEL_PLACE_EXTRA_BLOCK);
                        else {
                            const t = this.currentBlock.getComponent(b.e).groupIndex
                              , o = this.blockGroupModel.getBlockShadowFromGroup(t);
                            o && (o.active = !0)
                        }
                    }
                    ).start()
                })
            }
            handleBlockPlacement(t) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const o = this.checkElimination(t)
                      , e = yield this.placeBlock(t, o);
                    e && (o.canEliminate && this.eliminateCtr.eliminateBlocks(o.rows, o.cols),
                    this.processBlockPlaced(e, o, t),
                    this.processBlockPlacedEffect(e, o))
                })
            }
            checkElimination(t) {
                const {rows: o, cols: e} = this.eliminateCtr.checkElimination(this.currentBlock, t[0]);
                return {
                    rows: o,
                    cols: e,
                    canEliminate: 0 !== o.length || 0 !== e.length
                }
            }
            placeBlock(t, o) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const o = this.currentBlock.getComponent(b.e)
                      , {groupIndex: e, type: i, color: n, center: r} = o
                      , s = {
                        row: t[0].row,
                        col: t[0].col - o.leftTopOffset.col
                    }
                      , c = yield this.boardCtr.placeBlock(this.currentBlock, t);
                    if (!c)
                        return;
                    const {increasedScore: l, totalScore: a, combo: u, isLike: d} = c;
                    return {
                        block: o,
                        groupIndex: e,
                        type: i,
                        color: n,
                        center: r,
                        pos: s,
                        increasedScore: l,
                        totalScore: a,
                        combo: u,
                        isLike: d,
                        cells: t
                    }
                })
            }
            updateGameData(t) {
                const {combo: o, totalScore: e} = t;
                this.gameCtr.updateGameData(e, o)
            }
            processBlockPlaced(t, o, e) {
                const {isUsingExtraBlock: i} = this.gameModel
                  , {canEliminate: n} = o
                  , {groupIndex: r, pos: s, isLike: l, combo: a, color: u, totalScore: d, center: p, type: g, increasedScore: f} = t;
                this.updateGameData(t),
                this.gameModel.addPlaceStep(),
                c.q.event.emit(C.E.PLACE_BLOCK, {
                    difficultyMode: this.blockGroupModel.difficultyMode,
                    cells: e,
                    groupIndex: r,
                    pos: s,
                    isLike: l,
                    combo: a,
                    isExtraBlock: i,
                    blockType: g,
                    center: p,
                    color: u,
                    cellCoords: e.map(t => ({
                        row: t.row,
                        col: t.col
                    })),
                    isEliminated: n
                }),
                i && c.q.event.emit(C.E.USE_EXTRA_BLOCK_PROP_END),
                c.q.event.emit(C.E.UPDATE_PROP_STATUS),
                this.trackBlockElimination(t, o),
                n && this.gameModel.clearPlaceStep(),
                (0,
                h.Vt)("[touchEnd] 放置方块 pos: (".concat(e[0].row, ", ").concat(e[0].col, "), increasedScore: ").concat(f, ", totalScore: ").concat(d, ", combo: ").concat(a))
            }
            processBlockPlacedEffect(t, o) {
                const {rows: e, cols: i, canEliminate: n} = o
                  , {increasedScore: r, totalScore: s, combo: a, color: u} = t;
                n ? (c.q.audio.playEffect((0,
                O.FG)(e, i)),
                a > 0 && c.q.audio.playEffect((0,
                O.fY)(a)),
                c.q.event.emit(C.E.ELIMINATE_BLOCK, {
                    rows: e,
                    cols: i,
                    increasedScore: r,
                    totalScore: s,
                    combo: a,
                    color: u
                })) : (c.q.audio.playEffect(l.P.audio_block_placed),
                s && c.q.event.emit(C.L.UPDATE_SCORE, s, r))
            }
            trackBlockElimination(t, o, e) {
                const {combo: i} = t
                  , {canEliminate: r, rows: s, cols: c} = o;
                r && (0,
                p.Wy)(u.qo.GAME_PAGE, u.vf.BLOCK_ELIMINATION, Object.assign(Object.assign({}, e || {}), {
                    play_score: this.gameModel.score,
                    difficulty: this.blockGroupModel.difficultyMode,
                    board_state: (0,
                    n.a5)(),
                    step_count: this.gameModel.placeStep,
                    combo_count: i <= 0 ? 0 : i,
                    clear_rows: s,
                    clear_columns: c
                }))
            }
            onDestroy() {
                c.q.event.targetOff(this)
            }
            back() {
                this.gameModel.isShowingUserGuide || this.isWaitingGameEnd || this.isTouchingBlock || this.gameModel.isGameOver || this.gameModel.isForceFinishing || c.q.ui.isUIOpen(a.Z.Monster) || c.q.ui.open({
                    uiPath: a.Z.QuitConfirmPopup,
                    data: {
                        quitType: d.z.CLOSE_SELF,
                        quitCallBack: () => {
                            c.q.event.emit(C.E.MANUAL_QUIT_GAME)
                        }
                    }
                })
            }
        }
        ;
        (0,
        i.Cg)([(0,
        f.KA)(A.A)], S.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        f.KA)(k.A)], S.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        f.KA)(M.A)], S.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        f.KA)(R.A)], S.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        f.kW)(B.A)], S.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        f.kW)(_.A)], S.prototype, "eliminateCtr", void 0),
        (0,
        i.Cg)([(0,
        f.kW)(P.A)], S.prototype, "gameCtr", void 0),
        (0,
        i.Cg)([(0,
        f.kW)(v.A)], S.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        f.kW)(y.A)], S.prototype, "gameEffectCtr", void 0),
        (0,
        i.Cg)([D(r.bP0)], S.prototype, "blockGroup", void 0),
        (0,
        i.Cg)([D(r.bP0)], S.prototype, "board", void 0),
        (0,
        i.Cg)([D(r.JU7)], S.prototype, "useMode", void 0),
        (0,
        i.Cg)([D(r.JU7)], S.prototype, "fallMode", void 0),
        (0,
        i.Cg)([D(r.JU7)], S.prototype, "groupCount", void 0),
        (0,
        i.Cg)([D(r.JU7)], S.prototype, "costTime", void 0),
        (0,
        i.Cg)([D(r.bP0)], S.prototype, "extraBlockBox", void 0),
        (0,
        i.Cg)([D(r.bP0)], S.prototype, "clickDb", void 0),
        (0,
        i.Cg)([D({
            type: r.tX0,
            group: {
                name: "Prefab"
            }
        })], S.prototype, "blockPrefab", void 0),
        (0,
        i.Cg)([D({
            type: r.tX0,
            group: {
                name: "Prefab"
            }
        })], S.prototype, "cellPrefab", void 0),
        (0,
        i.Cg)([(0,
        f.nF)(50)], S.prototype, "handleCellHint", null),
        S = (0,
        i.Cg)([T("BaseGameView")], S),
        window.cc._RF.pop()
    },
    27900(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(91784)
          , c = e(30951)
          , l = e(5167)
          , a = e(7604)
          , u = e(62474)
          , d = e(71241)
          , h = e(82128)
          , p = e(27606)
          , g = e(99802)
          , f = e(95080)
          , m = e(54658)
          , b = e(23241);
        const {ccclass: w} = r.P4R;
        window.cc._RF.push({}, "39cf2sUeLVO3rBj47KYOPth", "BaseDynamicDifficultyController", void 0);
        let E = class extends c.w {
            constructor() {
                super(...arguments),
                this.MAX_RETRY_TIMES = 2,
                this.retryTimes = 0,
                this.hasPollShowMonster = !1,
                this.lastSeq = -1,
                this.quitLandingType = h.z.BACK_LANDING
            }
            isPollingRetrying() {
                return this.retryTimes > 0
            }
            pollDDList(t) {
                return (0,
                i.sH)(this, arguments, void 0, function(t) {
                    var o = this;
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return function*() {
                        var i, n;
                        if (o.lastSeq === t.ddlParam.seq)
                            return void o.ddModel.setSeq(o.ddModel.seq + 1);
                        o.lastSeq = t.ddlParam.seq;
                        const r = o.ddModel
                          , s = o.gameModel;
                        e && l.q.spinner.startShow();
                        try {
                            const e = yield o.requestNewDDL(t);
                            if (0 === e.code && e.data) {
                                o.retryTimes = 0,
                                o.hasPollShowMonster = !1;
                                const t = (0,
                                g.aL)(e.data.payload, (0,
                                g.i7)())
                                  , {ddl: c} = t;
                                (0,
                                m.c)("[解密] 拉取难度序列:", c),
                                null === (i = r.ddList) || void 0 === i || i.push(...c),
                                r.lastOffset = (null === (n = r.ddList) || void 0 === n ? void 0 : n.length) - 1,
                                s.isWaitingDDL && (s.isWaitingDDL = !1,
                                l.q.spinner.forceEnd(),
                                o.blockCtr.generateBlockGroup(),
                                o.boardCtr.checkIsDeath() && o.gameCtr.handleDeath())
                            } else {
                                if (e.code === d.ze.MULTI_DEVICE)
                                    return o.gameRecordCtr.clearRecord(),
                                    void l.q.ui.open({
                                        uiPath: u.Z.MultipleDeviceKickedOutPopup,
                                        data: {
                                            quitType: o.quitLandingType
                                        }
                                    });
                                if (403 === e.status) {
                                    if (o.hasPollShowMonster)
                                        return;
                                    o.hasPollShowMonster = !0,
                                    l.q.error.showMonsterToast({
                                        msg: (0,
                                        a.wb)("text_network_error"),
                                        quitType: o.quitLandingType,
                                        onRetry: () => {
                                            window.location.reload()
                                        }
                                        ,
                                        onQuit: () => {
                                            o.gameRecordCtr.clearRecord(),
                                            o.hasPollShowMonster = !1
                                        }
                                        ,
                                        hideClose: !0
                                    })
                                }
                                const {sessionID: i, isGameOver: n} = o.gameModel;
                                if (n)
                                    return;
                                if (o.retryTimes < o.MAX_RETRY_TIMES) {
                                    const e = o.ddModel.getSeq();
                                    console.log("[pollDDList] onRetry:", o.retryTimes, o.lastSeq, e),
                                    o.pollDDList({
                                        sessionID: i,
                                        ddlParam: Object.assign(Object.assign({}, t.ddlParam), {
                                            seq: e
                                        })
                                    }),
                                    o.retryTimes++
                                } else {
                                    if (o.hasPollShowMonster)
                                        return;
                                    o.hasPollShowMonster = !0,
                                    l.q.spinner.forceEnd(),
                                    l.q.error.showMonsterToast({
                                        forceMonster: !0,
                                        msg: (0,
                                        a.wb)("text_network_error"),
                                        backBtnText: (0,
                                        a.wb)("text_btn_end_game"),
                                        quitType: h.z.CLOSE_SELF,
                                        onRetry: () => {
                                            if (!o.ddModel)
                                                return;
                                            o.hasPollShowMonster = !1;
                                            const e = o.ddModel.getSeq();
                                            console.log("[pollDDList] monster onRetry:", o.retryTimes, o.lastSeq, e),
                                            o.pollDDList({
                                                sessionID: i,
                                                ddlParam: Object.assign(Object.assign({}, t.ddlParam), {
                                                    seq: e
                                                })
                                            }, !0)
                                        }
                                        ,
                                        onQuit: () => {
                                            s.isWaitingDDL = !1,
                                            o.hasPollShowMonster = !1,
                                            l.q.event.emit(b.L.GAME_END)
                                        }
                                        ,
                                        hideClose: !0
                                    })
                                }
                            }
                            l.q.event.emit(b.L.GAME_RECORD)
                        } catch (t) {
                            l.q.error.showMonsterToast({
                                msg: (0,
                                a.wb)("text_network_error"),
                                quitType: o.quitLandingType,
                                onQuit: () => {
                                    var t;
                                    null === (t = o.gameRecordCtr) || void 0 === t || t.clearRecord()
                                }
                                ,
                                hideClose: !0
                            }),
                            (0,
                            p.Kb)("[pollDDList error] 拉取难度序列异常", {
                                title: "Poll DDL Error",
                                error: t
                            })
                        } finally {
                            e && l.q.spinner.forceEnd()
                        }
                    }()
                })
            }
            requestNewDDL(t) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    return (0,
                    s.zK)(t)
                })
            }
            getNextDifficultyMode() {
                const {ddList: t, lastOffset: o} = this.ddModel
                  , e = t[++this.ddModel.currentOffset];
                if (o - this.ddModel.currentOffset === this.ddModel.preloadThreshold) {
                    const {sessionID: t} = this.gameModel;
                    this.pollDDList({
                        sessionID: t,
                        ddlParam: this.getDDLParam(o + 1)
                    })
                }
                return e
            }
            replaceDDList(t, o) {
                const {ddList: e} = this.ddModel;
                let i = [];
                o <= e.length && (i = e.slice(0, o + 1)),
                i.push(...t),
                this.ddModel.ddList = i,
                this.ddModel.lastOffset = i.length - 1,
                l.q.event.emit(b.L.GAME_RECORD)
            }
            getDDLParam(t) {
                const {score: o} = this.gameModel
                  , e = (0,
                n.a2)()
                  , i = this.ddModel.getSeq();
                return (0,
                m.c)("[core] 过程分数记录: ", {
                    score: o,
                    operationIndex: e
                }),
                {
                    score: o,
                    scoreOp: e,
                    n: t,
                    seq: i
                }
            }
        }
        ;
        (0,
        i.Cg)([(0,
        f.KA)("DynamicDifficultyModel")], E.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        f.KA)("GameModel")], E.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        f.kW)("BlockController")], E.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        f.kW)("BoardController")], E.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        f.kW)("GameController")], E.prototype, "gameCtr", void 0),
        (0,
        i.Cg)([(0,
        f.kW)("GameRecordController")], E.prototype, "gameRecordCtr", void 0),
        E = (0,
        i.Cg)([w("BaseDynamicDifficultyController")], E),
        o.A = E,
        window.cc._RF.pop()
    },
    35190(t, o, e) {
        "use strict";
        e.d(o, {
            A: function() {
                return r
            }
        }),
        e(23792),
        e(62953);
        var i = e(41986);
        const n = {
            coreVersion: "",
            sessionID: "",
            adsToken: "",
            wellModeRateConfigList: [],
            score: 0,
            isUserGuide: !1,
            isShowingUserGuide: !1,
            isUsingInventoryProp: !1,
            currentUserGuideStep: 0,
            playStartTime: 0,
            placeStep: 0,
            maxCombo: 0,
            usedBlocks: 0,
            hasHardDifficulty: !1,
            hasHardDifficultyAfterRevive: !1,
            isUsingExtraBlock: !1,
            isUsingBomb: !1,
            isUsingRemove: !1,
            propUseTimes: null,
            operationData: "",
            todayHighestScore: 0,
            boardRow: 0,
            boardCol: 0,
            blockGroup: [],
            placedBlocks: [],
            difficultyMode: null,
            isUpgradeHard: !1,
            isOriginDifficulty: !0,
            ddList: [],
            seq: 0,
            currentOffset: -1,
            boardCells: [],
            randomSeed: "",
            comboCount: 0,
            coreGlobalData: {},
            scoreConfigList: [],
            hasUsedProps: !1,
            totalCombo: 0,
            currentCombo: 0
        };
        class r extends i.t {
            constructor() {
                super(...arguments),
                this.coreVersion = "",
                this.boardRow = 0,
                this.boardCol = 0,
                this.randomSeed = "",
                this.sessionID = "",
                this.adsToken = "",
                this.wellModeRateConfigList = [],
                this.scoreConfigList = [],
                this.score = 0,
                this.isUserGuide = !1,
                this.isShowingUserGuide = !1,
                this.currentUserGuideStep = 0,
                this.isUsingExtraBlock = !1,
                this.isUsingBomb = !1,
                this.isUsingRemove = !1,
                this.isUsingInventoryProp = !1,
                this.hasHardDifficulty = !1,
                this.hasHardDifficultyAfterRevive = !1,
                this.todayHighestScore = 0,
                this.blockGroup = [],
                this.placedBlocks = [],
                this.isUpgradeHard = !1,
                this.isOriginDifficulty = !0,
                this.hasUsedProps = !1,
                this.boardCells = [],
                this.comboCount = 0,
                this.ddList = [],
                this.seq = 0,
                this.currentOffset = -1,
                this.operationData = "",
                this.playStartTime = 0,
                this.maxCombo = 0,
                this.totalCombo = 0,
                this.currentCombo = 0,
                this.usedBlocks = 0,
                this.placeStep = 0,
                this.coreGlobalData = {}
            }
            setRecordData(t) {
                this.coreVersion = t.coreVersion,
                this.sessionID = t.sessionID,
                this.adsToken = t.adsToken,
                this.wellModeRateConfigList = t.wellModeRateConfigList,
                this.scoreConfigList = t.scoreConfigList,
                this.score = t.score,
                this.isUserGuide = t.isUserGuide,
                this.isShowingUserGuide = t.isShowingUserGuide,
                this.currentUserGuideStep = t.currentUserGuideStep,
                this.playStartTime = t.playStartTime,
                this.placeStep = t.placeStep,
                this.maxCombo = t.maxCombo,
                this.totalCombo = t.totalCombo,
                this.currentCombo = t.currentCombo,
                this.usedBlocks = t.usedBlocks,
                this.isUsingExtraBlock = t.isUsingExtraBlock,
                this.isUsingBomb = t.isUsingBomb,
                this.isUsingRemove = t.isUsingRemove,
                this.isUsingInventoryProp = t.isUsingInventoryProp,
                this.propUseTimes = t.propUseTimes,
                this.hasHardDifficulty = t.hasHardDifficulty,
                this.hasHardDifficultyAfterRevive = t.hasHardDifficultyAfterRevive,
                this.boardRow = t.boardRow,
                this.boardCol = t.boardCol,
                this.blockGroup = t.blockGroup,
                this.placedBlocks = t.placedBlocks,
                this.difficultyMode = t.difficultyMode,
                this.isUpgradeHard = t.isUpgradeHard,
                this.isOriginDifficulty = t.isOriginDifficulty,
                this.hasUsedProps = t.hasUsedProps,
                this.boardCells = t.boardCells,
                this.ddList = t.ddList,
                this.seq = t.seq,
                this.currentOffset = t.currentOffset,
                this.randomSeed = t.randomSeed,
                this.comboCount = t.comboCount,
                this.coreGlobalData = t.coreGlobalData,
                this.operationData = t.operationData
            }
            getRecordData() {
                return {
                    coreVersion: this.coreVersion,
                    sessionID: this.sessionID,
                    adsToken: this.adsToken,
                    wellModeRateConfigList: this.wellModeRateConfigList,
                    scoreConfigList: this.scoreConfigList,
                    todayHighestScore: this.todayHighestScore,
                    score: this.score,
                    isUserGuide: this.isUserGuide,
                    isShowingUserGuide: this.isShowingUserGuide,
                    currentUserGuideStep: this.currentUserGuideStep,
                    playStartTime: this.playStartTime,
                    placeStep: this.placeStep,
                    maxCombo: this.maxCombo,
                    totalCombo: this.totalCombo,
                    currentCombo: this.currentCombo,
                    usedBlocks: this.usedBlocks,
                    isUsingExtraBlock: this.isUsingExtraBlock,
                    isUsingBomb: this.isUsingBomb,
                    isUsingRemove: this.isUsingRemove,
                    isUsingInventoryProp: this.isUsingInventoryProp,
                    propUseTimes: this.propUseTimes,
                    hasHardDifficulty: this.hasHardDifficulty,
                    hasHardDifficultyAfterRevive: this.hasHardDifficultyAfterRevive,
                    boardRow: this.boardRow,
                    boardCol: this.boardCol,
                    blockGroup: this.blockGroup,
                    placedBlocks: this.placedBlocks,
                    difficultyMode: this.difficultyMode,
                    isUpgradeHard: this.isUpgradeHard,
                    isOriginDifficulty: this.isOriginDifficulty,
                    hasUsedProps: this.hasUsedProps,
                    boardCells: this.boardCells,
                    ddList: this.ddList,
                    seq: this.seq,
                    currentOffset: this.currentOffset,
                    randomSeed: this.randomSeed,
                    comboCount: this.comboCount,
                    coreGlobalData: this.coreGlobalData,
                    operationData: this.operationData
                }
            }
            clearRecordData() {
                const {coreVersion: t, sessionID: o, adsToken: e, wellModeRateConfigList: i, scoreConfigList: r, score: s, isUserGuide: c, isShowingUserGuide: l, currentUserGuideStep: a, playStartTime: u, placeStep: d, maxCombo: h, totalCombo: p, currentCombo: g, usedBlocks: f, isUsingExtraBlock: m, isUsingBomb: b, isUsingRemove: w, isUsingInventoryProp: E, propUseTimes: C, todayHighestScore: v, operationData: B, boardRow: _, boardCol: P, blockGroup: y, placedBlocks: R, difficultyMode: k, isUpgradeHard: M, isOriginDifficulty: A, hasUsedProps: O, ddList: T, seq: D, currentOffset: S, boardCells: N, randomSeed: L, comboCount: x, coreGlobalData: I} = n;
                this.coreVersion = t,
                this.sessionID = o,
                this.adsToken = e,
                this.wellModeRateConfigList = i,
                this.scoreConfigList = r,
                this.score = s,
                this.isUserGuide = c,
                this.isShowingUserGuide = l,
                this.currentUserGuideStep = a,
                this.playStartTime = u,
                this.placeStep = d,
                this.maxCombo = h,
                this.totalCombo = p,
                this.currentCombo = g,
                this.usedBlocks = f,
                this.isUsingExtraBlock = m,
                this.isUsingBomb = b,
                this.isUsingRemove = w,
                this.isUsingInventoryProp = E,
                this.isOriginDifficulty = A,
                this.hasUsedProps = O,
                this.propUseTimes = C,
                this.todayHighestScore = v,
                this.boardRow = _,
                this.boardCol = P,
                this.blockGroup = y,
                this.placedBlocks = R,
                this.difficultyMode = k,
                this.isUpgradeHard = M,
                this.ddList = T,
                this.seq = D,
                this.currentOffset = S,
                this.boardCells = N,
                this.randomSeed = L,
                this.comboCount = x,
                this.coreGlobalData = I,
                this.operationData = B
            }
        }
    },
    35440(t, o, e) {
        "use strict";
        e.d(o, {
            f: function() {
                return a
            }
        }),
        e(44114);
        var i = e(31635)
          , n = e(78248)
          , r = e(71573)
          , s = e(47075);
        const {ccclass: c, property: l} = n.P4R;
        window.cc._RF.push({}, "ebf41if1XRGX6fzO+GCEAcv", "Cell", void 0);
        let a = class extends n.uAl {
            setColor(t) {
                this.color = t,
                this.cellSprite.switchSprite(s.D3[t])
            }
            switchSprite(t) {
                this.cellSprite.switchSprite(s.D3[t])
            }
        }
        ;
        (0,
        i.Cg)([l(r.B)], a.prototype, "cellSprite", void 0),
        a = (0,
        i.Cg)([c("Cell")], a),
        window.cc._RF.pop()
    },
    37436(t, o, e) {
        "use strict";
        var i;
        e.d(o, {
            t: function() {
                return i
            }
        }),
        function(t) {
            t.geziO = "texture/static/static_small_cell/geziO",
            t.geziP = "texture/static/static_small_cell/geziP",
            t.geziR = "texture/static/static_small_cell/geziR",
            t.geziY = "texture/static/static_small_cell/geziY",
            t.geziYB = "texture/static/static_small_cell/geziYB",
            t.geziYG = "texture/static/static_small_cell/geziYG"
        }(i || (i = {}))
    },
    39277(t, o, e) {
        "use strict";
        e.d(o, {
            s: function() {
                return b
            }
        }),
        e(23792),
        e(44114),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(5167)
          , s = e(21202)
          , c = e(62474)
          , l = e(71573)
          , a = e(95080)
          , u = e(91879)
          , d = e(72392)
          , h = e(23241)
          , p = e(47080)
          , g = e(72739);
        const {ccclass: f, property: m} = n.P4R;
        window.cc._RF.push({}, "cc597NSnHpGir7EvzHDcCaX", "ScoreHint", void 0);
        let b = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.digit = 0
            }
            init(t) {
                this.digit = t;
                const o = u.h.get(c.Z.ScoreNum, n.tX0);
                if (o)
                    for (let e = 0; e < t; e++)
                        (0,
                        n.Flv)(o).setParent(this.score)
            }
            show(t, o, e) {
                this.playScoreAnimation(t, e),
                this.playEvaluationAnimation(o)
            }
            playScoreAnimation(t, o) {
                this.setScore(t),
                this.scoreBox.active = !0,
                this.scoreBox.scale = (0,
                n.v3)(0, 0, 0);
                const e = this.scoreBox.position.clone()
                  , i = this.scoreBox.parent.getComponent(n.$lP).convertToNodeSpaceAR(o);
                (0,
                n.QxW)(this.scoreBox).to(.08, {
                    scale: (0,
                    n.v3)(1.4, 1.4, 1)
                }).to(.04, {
                    scale: (0,
                    n.v3)(1, 1, 1)
                }).delay(.38).to(.2, {
                    position: i
                }).call( () => {
                    this.clear(e),
                    r.q.event.emit(h.L.UPDATE_SCORE, this.gameModel.score, t)
                }
                ).start()
            }
            playEvaluationAnimation(t) {
                this.setEvaluation(t),
                this.evaluation.active = t !== d.Ee.NONE,
                this.evaluation.scale = (0,
                n.v3)(1.4, 1.4, 1),
                t !== d.Ee.NONE && (0,
                n.QxW)(this.evaluation).call( () => {
                    d.C$[t] && r.q.audio.playEffect((0,
                    s.g5)(d.C$[t]))
                }
                ).to(.08, {
                    scale: (0,
                    n.v3)(.9, .9, 1)
                }).to(.04, {
                    scale: (0,
                    n.v3)(1, 1, 1)
                }).delay(.38).to(.08, {
                    scale: (0,
                    n.v3)(1.3, 1.3, 1)
                }).call( () => {
                    this.evaluation.active = !1
                }
                ).start()
            }
            setScore(t) {
                const o = t.toString();
                this.score.children.forEach( (t, e) => {
                    e < o.length ? t.getComponent(l.B).switchSprite(Number(o[e])) : t.active = !1
                }
                )
            }
            setEvaluation(t) {
                t !== d.Ee.NONE && this.evaluation.getComponent(l.B).switchSprite(t)
            }
            clear(t) {
                this.scoreBox.active = !1,
                this.evaluation.active = !1,
                this.scoreBox.position = t || (0,
                n.v3)(0, 0, 0),
                this.scoreHintModel.putNodeToNodePool(this.node),
                r.q.event.emit(h.E.SCORE_HINT_DISAPPEAR)
            }
        }
        ;
        (0,
        i.Cg)([m(n.bP0)], b.prototype, "scoreBox", void 0),
        (0,
        i.Cg)([m(n.bP0)], b.prototype, "score", void 0),
        (0,
        i.Cg)([m(n.bP0)], b.prototype, "evaluation", void 0),
        (0,
        i.Cg)([(0,
        a.KA)(g.A)], b.prototype, "scoreHintModel", void 0),
        (0,
        i.Cg)([(0,
        a.KA)(p.A)], b.prototype, "gameModel", void 0),
        b = (0,
        i.Cg)([f("ScoreHint")], b),
        window.cc._RF.pop()
    },
    41234() {},
    41455(t, o, e) {
        "use strict";
        e.d(o, {
            e: function() {
                return p
            }
        }),
        e(23792),
        e(44114),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(71573)
          , c = e(95080)
          , l = e(47075)
          , a = e(13290)
          , u = e(94569)
          , d = e(35440);
        const {ccclass: h} = r.P4R;
        window.cc._RF.push({}, "025c9zJdk1Kw4bEgWO9QJ5r", "Block", void 0);
        let p = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.groupIndex = -1
            }
            initBlock(t, o) {
                let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                const i = n.b[t];
                this.type = t,
                this.color = o,
                this.shape = i.shape,
                this.groupIndex = e,
                this.center = (0,
                u.BO)(this.shape),
                this.node.getComponent(r.$lP).setContentSize(Math.max(3, i.rowRequirement) * l.Dq, Math.max(3, i.colRequirement) * l.Dq);
                const s = this.createBlock();
                this.leftTopOffset = {
                    row: 0,
                    col: ((this.center.row - .5) * l.Dq + s.children[0].position.x) / l.Dq
                }
            }
            createBlock() {
                const {cellCount: t, width: o} = n.b[this.type]
                  , e = this.cellModel.popNodes(t, this.color)
                  , {row: i, col: r} = this.center;
                let s = 0;
                for (let t = 0; t < this.shape.length; t++) {
                    const n = this.shape[t];
                    for (let c = o - 1; c >= 0; c--)
                        if (n & 1 << c) {
                            const o = e[s++];
                            o.setPosition((i - c - .5) * l.Dq, (r - t - .5) * l.Dq, 0),
                            this.node.addChild(o)
                        }
                }
                return this.node
            }
            setColor(t) {
                this.color !== t && (this.color = t,
                this.node.children.forEach(o => {
                    if (o.getComponent(d.f).color !== t) {
                        const e = o.getComponent(s.B);
                        e && e.switchSprite(t)
                    }
                }
                ))
            }
        }
        ;
        (0,
        i.Cg)([(0,
        c.KA)(a.A)], p.prototype, "cellModel", void 0),
        p = (0,
        i.Cg)([h("Block")], p),
        window.cc._RF.pop()
    },
    43031(t, o, e) {
        var i;
        !function(t, n) {
            function r(t) {
                var o = this
                  , e = "";
                o.next = function() {
                    var t = o.x ^ o.x >>> 2;
                    return o.x = o.y,
                    o.y = o.z,
                    o.z = o.w,
                    o.w = o.v,
                    (o.d = o.d + 362437 | 0) + (o.v = o.v ^ o.v << 4 ^ t ^ t << 1) | 0
                }
                ,
                o.x = 0,
                o.y = 0,
                o.z = 0,
                o.w = 0,
                o.v = 0,
                t === (0 | t) ? o.x = t : e += t;
                for (var i = 0; i < e.length + 64; i++)
                    o.x ^= 0 | e.charCodeAt(i),
                    i == e.length && (o.d = o.x << 10 ^ o.x >>> 4),
                    o.next()
            }
            function s(t, o) {
                return o.x = t.x,
                o.y = t.y,
                o.z = t.z,
                o.w = t.w,
                o.v = t.v,
                o.d = t.d,
                o
            }
            function c(t, o) {
                var e = new r(t)
                  , i = o && o.state
                  , n = function() {
                    return (e.next() >>> 0) / 4294967296
                };
                return n.double = function() {
                    do {
                        var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }
                ,
                n.int32 = e.next,
                n.quick = n,
                i && ("object" == typeof i && s(i, e),
                n.state = function() {
                    return s(e, {})
                }
                ),
                n
            }
            n && n.exports ? n.exports = c : e.amdD && e.amdO ? void 0 === (i = function() {
                return c
            }
            .call(o, e, o, n)) || (n.exports = i) : this.xorwow = c
        }(0, t = e.nmd(t), e.amdD)
    },
    43181(t, o, e) {
        var i;
        !function(t, n) {
            function r(t) {
                var o = this
                  , e = "";
                o.x = 0,
                o.y = 0,
                o.z = 0,
                o.w = 0,
                o.next = function() {
                    var t = o.x ^ o.x << 11;
                    return o.x = o.y,
                    o.y = o.z,
                    o.z = o.w,
                    o.w ^= o.w >>> 19 ^ t ^ t >>> 8
                }
                ,
                t === (0 | t) ? o.x = t : e += t;
                for (var i = 0; i < e.length + 64; i++)
                    o.x ^= 0 | e.charCodeAt(i),
                    o.next()
            }
            function s(t, o) {
                return o.x = t.x,
                o.y = t.y,
                o.z = t.z,
                o.w = t.w,
                o
            }
            function c(t, o) {
                var e = new r(t)
                  , i = o && o.state
                  , n = function() {
                    return (e.next() >>> 0) / 4294967296
                };
                return n.double = function() {
                    do {
                        var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }
                ,
                n.int32 = e.next,
                n.quick = n,
                i && ("object" == typeof i && s(i, e),
                n.state = function() {
                    return s(e, {})
                }
                ),
                n
            }
            n && n.exports ? n.exports = c : e.amdD && e.amdO ? void 0 === (i = function() {
                return c
            }
            .call(o, e, o, n)) || (n.exports = i) : this.xor128 = c
        }(0, t = e.nmd(t), e.amdD)
    },
    43357(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(26910),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(16222);
        const {ccclass: c} = n.P4R;
        window.cc._RF.push({}, "e94a3Js2zRLeoCGqGI66J3m", "BasePropModel", void 0);
        let l = class extends r.t {
            constructor() {
                super(...arguments),
                this.propUseTimes = {
                    [s.P7.EXTRA_BLOCK]: 0,
                    [s.P7.BOMB]: 0,
                    [s.P7.REMOVE]: 0,
                    [s.P7.REVIVE]: 0
                },
                this.propUseLimit = {
                    [s.P7.EXTRA_BLOCK]: 0,
                    [s.P7.BOMB]: 0,
                    [s.P7.REMOVE]: 0,
                    [s.P7.REVIVE]: 0
                },
                this.propBalance = {
                    [s.P7.EXTRA_BLOCK]: 0,
                    [s.P7.BOMB]: 0,
                    [s.P7.REMOVE]: 0,
                    [s.P7.REVIVE]: 0
                },
                this.propConfigs = {
                    [s.P7.EXTRA_BLOCK]: [],
                    [s.P7.BOMB]: [],
                    [s.P7.REMOVE]: [],
                    [s.P7.REVIVE]: []
                },
                this.propObtainIdx = {
                    [s.P7.EXTRA_BLOCK]: 0,
                    [s.P7.BOMB]: 0,
                    [s.P7.REMOVE]: 0,
                    [s.P7.REVIVE]: 0
                },
                this.propAdsInventory = {
                    [s.P7.EXTRA_BLOCK]: 0,
                    [s.P7.BOMB]: 0,
                    [s.P7.REMOVE]: 0,
                    [s.P7.REVIVE]: 0
                },
                this.propInventory = {
                    [s.P7.EXTRA_BLOCK]: 0,
                    [s.P7.BOMB]: 0,
                    [s.P7.REMOVE]: 0,
                    [s.P7.REVIVE]: 0
                },
                this.propLatestExpiry = {
                    [s.P7.EXTRA_BLOCK]: [],
                    [s.P7.BOMB]: [],
                    [s.P7.REMOVE]: [],
                    [s.P7.REVIVE]: []
                }
            }
            initProps() {
                (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(t => {
                    this.updatePropStatus(t)
                }
                )
            }
            updatePropStatus(t) {
                if (!t)
                    return;
                const {itemID: o, usedCNT: e, limit: i, configs: n, adsAmount: r, inventoryAmount: s, latestExpireList: c, obtainIndex: l} = t;
                this.propUseTimes[o] = e,
                this.propUseLimit[o] = i,
                this.propConfigs[o] = n,
                this.propAdsInventory[o] = r || 0,
                this.propInventory[o] = s || 0,
                this.propLatestExpiry[o] = (null == c ? void 0 : c.sort( (t, o) => t.expireAt - o.expireAt)) || [],
                this.propObtainIdx[o] = l || 0
            }
            updatePropInventoryStatus(t) {
                if (!t)
                    return;
                const {itemID: o, adsAmount: e, inventoryAmount: i, latestExpireList: n} = t;
                this.propAdsInventory[o] = e || 0,
                this.propInventory[o] = i || 0,
                this.propLatestExpiry[o] = (null == n ? void 0 : n.sort( (t, o) => t.expireAt - o.expireAt)) || []
            }
            getPropConfigs(t) {
                return this.propConfigs[t]
            }
            getPropItemPrice(t) {
                const o = this.getPropObtainIndex(t);
                return this.propConfigs[t][o].coinPrice
            }
            getPropUseTime(t) {
                return this.propUseTimes[t]
            }
            getPropObtainIndex(t) {
                return this.propObtainIdx[t]
            }
            getPropMethod(t) {
                var o, e;
                const i = this.getPropObtainIndex(t);
                return null === (e = null === (o = this.propConfigs[t]) || void 0 === o ? void 0 : o[i]) || void 0 === e ? void 0 : e.method
            }
            getPropAdsDuration(t) {
                const o = this.getPropObtainIndex(t);
                return this.propConfigs[t][o].adsDuration
            }
            getPropUseLimit(t) {
                return this.propUseLimit[t]
            }
            getPropBalance(t) {
                return this.propBalance[t]
            }
            getPropLatestExpiry(t) {
                return this.propLatestExpiry[t]
            }
            updatePropLatestExpiry(t, o) {
                t && o && (this.propLatestExpiry[t] = o || [])
            }
            addPropUseOneTime(t) {
                this.propUseTimes[t] += 1
            }
            subPropUseOneTime(t) {
                this.propUseTimes[t] > 0 && (this.propUseTimes[t] -= 1)
            }
            isPropUseLimit(t) {
                return this.propUseTimes[t] >= this.propUseLimit[t]
            }
            hasPropInventory(t) {
                return !!this.propInventory[t]
            }
            hasLimitedTimeProp(t) {
                return this.propLatestExpiry[t] && this.propLatestExpiry[t].length > 0
            }
            getPropAdsInventory(t) {
                return this.propAdsInventory[t] || 0
            }
            getPropInventory(t) {
                return this.propInventory[t] || 0
            }
            updatePropInventory(t, o) {
                this.propInventory[t] = o || 0
            }
        }
        ;
        l = (0,
        i.Cg)([c("BasePropModel")], l),
        o.A = l,
        window.cc._RF.pop()
    },
    43717(t, o, e) {
        var i;
        !function(t, n) {
            function r(t) {
                var o = this
                  , e = "";
                o.next = function() {
                    var t = o.b
                      , e = o.c
                      , i = o.d
                      , n = o.a;
                    return t = t << 25 ^ t >>> 7 ^ e,
                    e = e - i | 0,
                    i = i << 24 ^ i >>> 8 ^ n,
                    n = n - t | 0,
                    o.b = t = t << 20 ^ t >>> 12 ^ e,
                    o.c = e = e - i | 0,
                    o.d = i << 16 ^ e >>> 16 ^ n,
                    o.a = n - t | 0
                }
                ,
                o.a = 0,
                o.b = 0,
                o.c = -1640531527,
                o.d = 1367130551,
                t === Math.floor(t) ? (o.a = t / 4294967296 | 0,
                o.b = 0 | t) : e += t;
                for (var i = 0; i < e.length + 20; i++)
                    o.b ^= 0 | e.charCodeAt(i),
                    o.next()
            }
            function s(t, o) {
                return o.a = t.a,
                o.b = t.b,
                o.c = t.c,
                o.d = t.d,
                o
            }
            function c(t, o) {
                var e = new r(t)
                  , i = o && o.state
                  , n = function() {
                    return (e.next() >>> 0) / 4294967296
                };
                return n.double = function() {
                    do {
                        var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }
                ,
                n.int32 = e.next,
                n.quick = n,
                i && ("object" == typeof i && s(i, e),
                n.state = function() {
                    return s(e, {})
                }
                ),
                n
            }
            n && n.exports ? n.exports = c : e.amdD && e.amdO ? void 0 === (i = function() {
                return c
            }
            .call(o, e, o, n)) || (n.exports = i) : this.tychei = c
        }(0, t = e.nmd(t), e.amdD)
    },
    44456(t, o, e) {
        "use strict";
        e.d(o, {
            sI: function() {
                return r
            }
        });
        var i = e(31635)
          , n = e(78248);
        function r(t, o) {
            return (0,
            i.sH)(this, void 0, void 0, function*() {
                t && (t.active = !0,
                yield function(t) {
                    return (0,
                    i.sH)(this, arguments, void 0, function(t) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5
                          , e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                          , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 255;
                        return function*() {
                            return t && t.getComponent(n.wFi) && (0,
                            n.QxW)(t.getComponent(n.wFi)).set({
                                opacity: e
                            }).to(o, {
                                opacity: i
                            }).startAsync()
                        }()
                    })
                }(t, o, 0, 255))
            })
        }
    },
    47075(t, o, e) {
        "use strict";
        var i;
        e.d(o, {
            D3: function() {
                return n
            },
            Dq: function() {
                return l
            },
            F3: function() {
                return i
            },
            KR: function() {
                return a
            },
            Ks: function() {
                return c
            },
            Pm: function() {
                return s
            },
            qv: function() {
                return u
            },
            u6: function() {
                return r
            }
        }),
        function(t) {
            t[t.BLUE = 0] = "BLUE",
            t[t.GREEN = 1] = "GREEN",
            t[t.ORANGE = 2] = "ORANGE",
            t[t.PURPLE = 3] = "PURPLE",
            t[t.YELLOW = 4] = "YELLOW",
            t[t.YELLOW_2 = 5] = "YELLOW_2",
            t[t.RAINBOW = 6] = "RAINBOW",
            t[t.WHITE = 7] = "WHITE"
        }(i || (i = {}));
        const n = {
            [i.BLUE]: 0,
            [i.GREEN]: 1,
            [i.ORANGE]: 2,
            [i.PURPLE]: 3,
            [i.YELLOW]: 4,
            [i.YELLOW_2]: 5,
            [i.RAINBOW]: 6,
            [i.WHITE]: 7
        }
          , r = [i.BLUE, i.GREEN, i.ORANGE, i.PURPLE, i.YELLOW, i.YELLOW_2]
          , s = [i.BLUE, i.GREEN, i.ORANGE]
          , c = [i.YELLOW_2, i.YELLOW, i.PURPLE]
          , l = 86
          , a = {
            [i.BLUE]: 0,
            [i.GREEN]: 1,
            [i.PURPLE]: 2,
            [i.ORANGE]: 3,
            [i.YELLOW]: 4,
            [i.YELLOW_2]: 4,
            [i.RAINBOW]: 4
        }
          , u = 5
    },
    48503(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(55367);
        const {ccclass: s} = n.P4R;
        window.cc._RF.push({}, "8dba4WYLTxP7bHVYCSvWSbP", "BaseGameScene", void 0);
        let c = class extends r.c {
            constructor() {
                super(...arguments),
                this.mdapSceneName = "",
                this.showBackButton = !0
            }
        }
        ;
        c = (0,
        i.Cg)([s("BaseGameScene")], c),
        o.A = c,
        window.cc._RF.pop()
    },
    48571(t, o, e) {
        "use strict";
        e.d(o, {
            $: function() {
                return f
            },
            A: function() {
                return Bt
            },
            B: function() {
                return tt
            },
            C: function() {
                return D
            },
            D: function() {
                return dt
            },
            E: function() {
                return i
            },
            F: function() {
                return ct
            },
            G: function() {
                return ht
            },
            H: function() {
                return K
            },
            I: function() {
                return st
            },
            J: function() {
                return V
            },
            K: function() {
                return Ct
            },
            L: function() {
                return pt
            },
            M: function() {
                return _t
            },
            N: function() {
                return d
            },
            O: function() {
                return _
            },
            P: function() {
                return T
            },
            Q: function() {
                return B
            },
            R: function() {
                return Q
            },
            S: function() {
                return R
            },
            T: function() {
                return E
            },
            U: function() {
                return wt
            },
            V: function() {
                return bt
            },
            W: function() {
                return mt
            },
            X: function() {
                return L
            },
            Y: function() {
                return b
            },
            Z: function() {
                return A
            },
            _: function() {
                return g
            },
            a: function() {
                return gt
            },
            a0: function() {
                return m
            },
            a1: function() {
                return ft
            },
            a2: function() {
                return Et
            },
            a3: function() {
                return x
            },
            a5: function() {
                return I
            },
            a7: function() {
                return U
            },
            a8: function() {
                return q
            },
            aa: function() {
                return H
            },
            b: function() {
                return a
            },
            c: function() {
                return ut
            },
            d: function() {
                return lt
            },
            e: function() {
                return F
            },
            f: function() {
                return M
            },
            g: function() {
                return N
            },
            h: function() {
                return et
            },
            i: function() {
                return nt
            },
            j: function() {
                return l
            },
            k: function() {
                return P
            },
            l: function() {
                return p
            },
            m: function() {
                return Ot
            },
            n: function() {
                return Pt
            },
            o: function() {
                return j
            },
            p: function() {
                return Mt
            },
            q: function() {
                return kt
            },
            r: function() {
                return it
            },
            s: function() {
                return J
            },
            t: function() {
                return W
            },
            u: function() {
                return at
            },
            v: function() {
                return y
            },
            w: function() {
                return vt
            },
            x: function() {
                return X
            },
            y: function() {
                return ot
            },
            z: function() {
                return rt
            }
        }),
        e(16280),
        e(74423),
        e(23792),
        e(44114),
        e(72712),
        e(94490),
        e(33110),
        e(16034),
        e(27495),
        e(17642),
        e(58004),
        e(33853),
        e(45876),
        e(32475),
        e(15024),
        e(31698),
        e(68156),
        e(25440),
        e(98992),
        e(54520),
        e(72577),
        e(3949),
        e(81454),
        e(8872),
        e(37550),
        e(58335),
        e(23500),
        e(62953);
        var i, n = e(62339), r = e(97532), s = e(7391), c = e.n(s);
        !function(t) {
            t[t.B11_1 = 1] = "B11_1",
            t[t.B11_2 = 2] = "B11_2",
            t[t.B11_3 = 3] = "B11_3",
            t[t.B11_4 = 4] = "B11_4",
            t[t.B11_5 = 5] = "B11_5",
            t[t.B21_1 = 6] = "B21_1",
            t[t.B12_1 = 7] = "B12_1",
            t[t.B31_1 = 8] = "B31_1",
            t[t.B13_1 = 9] = "B13_1",
            t[t.B41_1 = 10] = "B41_1",
            t[t.B14_1 = 11] = "B14_1",
            t[t.B51_1 = 12] = "B51_1",
            t[t.B15_1 = 13] = "B15_1",
            t[t.B22_1 = 14] = "B22_1",
            t[t.B22_2 = 15] = "B22_2",
            t[t.B22_3 = 16] = "B22_3",
            t[t.B22_4 = 17] = "B22_4",
            t[t.B22_5 = 18] = "B22_5",
            t[t.B22_6 = 19] = "B22_6",
            t[t.B22_7 = 20] = "B22_7",
            t[t.B22_8 = 21] = "B22_8",
            t[t.B22_9 = 22] = "B22_9",
            t[t.B32_1 = 23] = "B32_1",
            t[t.B32_2 = 24] = "B32_2",
            t[t.B32_3 = 25] = "B32_3",
            t[t.B32_4 = 26] = "B32_4",
            t[t.B32_5 = 27] = "B32_5",
            t[t.B32_6 = 28] = "B32_6",
            t[t.B32_7 = 29] = "B32_7",
            t[t.B23_1 = 30] = "B23_1",
            t[t.B23_2 = 31] = "B23_2",
            t[t.B23_3 = 32] = "B23_3",
            t[t.B23_4 = 33] = "B23_4",
            t[t.B23_5 = 34] = "B23_5",
            t[t.B23_6 = 35] = "B23_6",
            t[t.B23_7 = 36] = "B23_7",
            t[t.B33_1 = 37] = "B33_1",
            t[t.B33_2 = 38] = "B33_2",
            t[t.B33_3 = 39] = "B33_3",
            t[t.B33_4 = 40] = "B33_4",
            t[t.B33_5 = 41] = "B33_5",
            t[t.B32_8 = 42] = "B32_8",
            t[t.B32_9 = 43] = "B32_9",
            t[t.B23_8 = 44] = "B23_8",
            t[t.B23_9 = 45] = "B23_9",
            t[t.B33_6 = 46] = "B33_6",
            t[t.B33_7 = 47] = "B33_7",
            t[t.B33_8 = 48] = "B33_8",
            t[t.B33_9 = 49] = "B33_9"
        }(i || (i = {}));
        const l = {
            fill: {
                row: {
                    1: [i.B12_1, i.B13_1, i.B11_2, i.B11_3, i.B22_1, i.B22_2, i.B22_3, i.B22_4, i.B22_7, i.B22_8, i.B32_1, i.B32_2, i.B32_3, i.B32_4, i.B32_5, i.B32_6, i.B23_1, i.B23_2, i.B23_3, i.B23_4, i.B23_5, i.B23_6],
                    2: [i.B21_1, i.B22_1, i.B22_2, i.B22_3, i.B22_4, i.B22_5, i.B22_6, i.B22_7, i.B22_8, i.B22_9, i.B23_1, i.B23_2, i.B23_3, i.B23_4, i.B23_5, i.B23_6],
                    3: [i.B32_1, i.B32_2, i.B32_3, i.B32_4, i.B32_5, i.B32_6, i.B31_1],
                    4: [i.B41_1],
                    5: [i.B51_1]
                },
                col: {
                    1: [i.B21_1, i.B31_1, i.B22_1, i.B22_2, i.B22_3, i.B22_4, i.B11_2, i.B11_3, i.B22_5, i.B22_6, i.B32_1, i.B32_2, i.B32_3, i.B32_4, i.B32_5, i.B32_6, i.B23_1, i.B23_2, i.B23_3, i.B23_4, i.B23_5, i.B23_6],
                    2: [i.B12_1, i.B22_1, i.B22_2, i.B22_3, i.B22_4, i.B22_5, i.B22_6, i.B22_7, i.B22_8, i.B22_9, i.B32_1, i.B32_2, i.B32_3, i.B32_4, i.B32_5, i.B32_6],
                    3: [i.B13_1, i.B23_1, i.B23_2, i.B23_3, i.B23_4, i.B23_5, i.B23_6],
                    4: [i.B14_1],
                    5: [i.B15_1]
                }
            },
            requirement: {
                row: {
                    3: [i.B32_1, i.B32_2, i.B32_3, i.B32_4, i.B32_5, i.B32_6, i.B31_1, i.B32_7, i.B32_8, i.B32_9, i.B33_1, i.B33_2, i.B33_3, i.B33_4, i.B33_5, i.B33_6, i.B33_7, i.B33_8, i.B33_9],
                    4: [i.B41_1],
                    5: [i.B51_1]
                },
                col: {
                    3: [i.B23_1, i.B23_2, i.B23_3, i.B23_4, i.B23_5, i.B23_6, i.B23_8, i.B23_9, i.B13_1, i.B23_7, i.B33_1, i.B33_2, i.B33_3, i.B33_4, i.B33_5, i.B33_6, i.B33_7, i.B33_8, i.B33_9],
                    4: [i.B14_1],
                    5: [i.B15_1]
                }
            },
            space2_2: [i.B22_1, i.B22_2, i.B22_3, i.B22_4, i.B22_5, i.B22_6, i.B22_7, i.B22_8, i.B22_9],
            breakCombo: [i.B33_5, i.B33_1, i.B33_2, i.B33_3, i.B33_4, i.B33_6, i.B33_7, i.B33_8, i.B33_9, i.B32_8, i.B32_9, i.B23_8, i.B23_9, i.B11_4, i.B11_5, i.B23_7, i.B32_7, i.B22_5, i.B22_6, i.B22_7, i.B22_8, i.B23_1, i.B23_2, i.B23_3, i.B23_4, i.B23_5, i.B23_6, i.B32_1, i.B32_2, i.B32_3, i.B32_4, i.B32_5, i.B32_6, i.B22_9],
            stuck: [i.B33_5, i.B11_4, i.B11_5, i.B33_1, i.B33_2, i.B33_3, i.B33_4, i.B33_6, i.B33_7, i.B33_8, i.B33_9, i.B32_8, i.B32_9, i.B23_8, i.B23_9, i.B51_1, i.B15_1]
        }
          , a = {
            [i.B11_1]: {
                shape: [1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 1,
                width: 1,
                cellCount: 1
            },
            [i.B11_2]: {
                shape: [1, 2],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -1,
                            col: 0
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 1,
                width: 2,
                cellCount: 2
            },
            [i.B11_3]: {
                shape: [2, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 1,
                width: 2,
                cellCount: 2
            },
            [i.B11_4]: {
                shape: [1, 2, 4],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -2
                        }, {
                            row: -1,
                            col: -1
                        }, {
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: -2
                        }, {
                            row: -1,
                            col: -1
                        }, {
                            row: -2,
                            col: -0
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 1,
                width: 3,
                cellCount: 3
            },
            [i.B11_5]: {
                shape: [4, 2, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }, {
                            row: -2,
                            col: -2
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }, {
                            row: -2,
                            col: -2
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 1,
                width: 3,
                cellCount: 3
            },
            [i.B21_1]: {
                shape: [3],
                testPlaceMap: {
                    row: {
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 2
                },
                rowRequirement: 2,
                colRequirement: 1,
                width: 2,
                cellCount: 2
            },
            [i.B12_1]: {
                shape: [1, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 2,
                width: 1,
                cellCount: 2
            },
            [i.B31_1]: {
                shape: [7],
                testPlaceMap: {
                    row: {
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 2
                },
                rowRequirement: 3,
                colRequirement: 1,
                width: 3,
                cellCount: 3
            },
            [i.B13_1]: {
                shape: [1, 1, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 3,
                width: 1,
                cellCount: 3
            },
            [i.B41_1]: {
                shape: [15],
                testPlaceMap: {
                    row: {
                        4: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: -2
                        }, {
                            row: 0,
                            col: -3
                        }]
                    },
                    count: 2
                },
                rowRequirement: 4,
                colRequirement: 1,
                width: 4,
                cellCount: 4
            },
            [i.B14_1]: {
                shape: [1, 1, 1, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }, {
                            row: -3,
                            col: 0
                        }]
                    },
                    col: {
                        4: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 4,
                width: 1,
                cellCount: 4
            },
            [i.B51_1]: {
                shape: [31],
                testPlaceMap: {
                    row: {
                        5: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: -2
                        }, {
                            row: 0,
                            col: -3
                        }, {
                            row: 0,
                            col: -4
                        }]
                    },
                    count: 2
                },
                rowRequirement: 5,
                colRequirement: 1,
                width: 5,
                cellCount: 5
            },
            [i.B15_1]: {
                shape: [1, 1, 1, 1, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }, {
                            row: -3,
                            col: 0
                        }, {
                            row: -4,
                            col: 0
                        }]
                    },
                    col: {
                        5: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 2
                },
                rowRequirement: 1,
                colRequirement: 5,
                width: 1,
                cellCount: 5
            },
            [i.B22_1]: {
                shape: [2, 3],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }],
                        2: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 2,
                cellCount: 3
            },
            [i.B22_2]: {
                shape: [3, 2],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: 0
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 2,
                cellCount: 3
            },
            [i.B22_3]: {
                shape: [1, 3],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -1
                        }],
                        2: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: 0
                        }],
                        2: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 2,
                cellCount: 3
            },
            [i.B22_4]: {
                shape: [3, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }],
                        2: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 2,
                cellCount: 3
            },
            [i.B22_5]: {
                shape: [6, 3],
                testPlaceMap: {
                    row: {
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: -2
                        }],
                        2: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 3
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B22_6]: {
                shape: [3, 6],
                testPlaceMap: {
                    row: {
                        2: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: 0
                        }, {
                            row: 0,
                            col: -2
                        }],
                        2: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 3
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B22_7]: {
                shape: [2, 3, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -2,
                            col: -1
                        }],
                        2: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }]
                    },
                    count: 3
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 2,
                cellCount: 4
            },
            [i.B22_8]: {
                shape: [1, 3, 2],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -2,
                            col: 0
                        }],
                        2: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        2: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -1,
                            col: 0
                        }]
                    },
                    count: 3
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 2,
                cellCount: 4
            },
            [i.B22_9]: {
                shape: [3, 3],
                testPlaceMap: {
                    row: {
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 2
                },
                rowRequirement: 2,
                colRequirement: 2,
                width: 2,
                cellCount: 4
            },
            [i.B32_1]: {
                shape: [4, 7],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }],
                        3: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: -1
                        }, {
                            row: -1,
                            col: -2
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B32_2]: {
                shape: [1, 7],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -2
                        }],
                        3: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B32_3]: {
                shape: [7, 4],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: 0
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: -2
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B32_4]: {
                shape: [7, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: -2
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B32_5]: {
                shape: [2, 7],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -1
                        }],
                        3: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: 0
                        }, {
                            row: -1,
                            col: -2
                        }],
                        2: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B32_6]: {
                shape: [7, 2],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -2
                        }],
                        2: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 4
            },
            [i.B32_7]: {
                shape: [7, 7],
                testPlaceMap: {
                    row: {
                        3: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 2
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 6
            },
            [i.B32_8]: {
                shape: [5, 7],
                testPlaceMap: {
                    row: {
                        3: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 3
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 5
            },
            [i.B32_9]: {
                shape: [7, 5],
                testPlaceMap: {
                    row: {
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 3
                },
                rowRequirement: 3,
                colRequirement: 2,
                width: 3,
                cellCount: 5
            },
            [i.B23_1]: {
                shape: [3, 1, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: -1
                        }, {
                            row: -2,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }],
                        3: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 4
            },
            [i.B23_2]: {
                shape: [1, 1, 3],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -1,
                            col: -1
                        }],
                        2: [{
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -2,
                            col: 0
                        }],
                        3: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 4
            },
            [i.B23_3]: {
                shape: [3, 2, 2],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 4
            },
            [i.B23_4]: {
                shape: [2, 2, 3],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }],
                        2: [{
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -2,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 4
            },
            [i.B23_5]: {
                shape: [1, 3, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -2,
                            col: -1
                        }],
                        2: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: 0
                        }],
                        3: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 4
            },
            [i.B23_6]: {
                shape: [2, 3, 2],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }],
                        2: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 4
            },
            [i.B23_7]: {
                shape: [3, 3, 3],
                testPlaceMap: {
                    row: {
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        3: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 2
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 6
            },
            [i.B23_8]: {
                shape: [3, 1, 3],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: -1
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        3: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 3
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 5
            },
            [i.B23_9]: {
                shape: [3, 2, 3],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: 0
                        }],
                        2: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 3
                },
                rowRequirement: 2,
                colRequirement: 3,
                width: 2,
                cellCount: 5
            },
            [i.B33_1]: {
                shape: [4, 4, 7],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }],
                        3: [{
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -2,
                            col: -1
                        }, {
                            row: -2,
                            col: -2
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            },
            [i.B33_2]: {
                shape: [7, 4, 4],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: -2
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            },
            [i.B33_3]: {
                shape: [1, 1, 7],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -2
                        }, {
                            row: -1,
                            col: -2
                        }],
                        3: [{
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -2,
                            col: 0
                        }, {
                            row: -2,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            },
            [i.B33_4]: {
                shape: [7, 1, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: -2
                        }, {
                            row: -2,
                            col: -2
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            },
            [i.B33_5]: {
                shape: [7, 7, 7],
                testPlaceMap: {
                    row: {
                        3: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -1,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        3: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -1
                        }, {
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 2
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 9
            },
            [i.B33_6]: {
                shape: [2, 2, 7],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -1
                        }, {
                            row: -1,
                            col: -1
                        }],
                        3: [{
                            row: -2,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -2,
                            col: 0
                        }, {
                            row: -2,
                            col: -2
                        }],
                        3: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            },
            [i.B33_7]: {
                shape: [7, 2, 2],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: -1,
                            col: -1
                        }, {
                            row: -2,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: 0,
                            col: -2
                        }],
                        3: [{
                            row: 0,
                            col: -1
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            },
            [i.B33_8]: {
                shape: [1, 7, 1],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: -2
                        }, {
                            row: -2,
                            col: -2
                        }],
                        3: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: 0
                        }, {
                            row: -1,
                            col: -1
                        }],
                        3: [{
                            row: 0,
                            col: -2
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            },
            [i.B33_9]: {
                shape: [4, 7, 4],
                testPlaceMap: {
                    row: {
                        1: [{
                            row: 0,
                            col: 0
                        }, {
                            row: -2,
                            col: 0
                        }],
                        3: [{
                            row: -1,
                            col: 0
                        }]
                    },
                    col: {
                        1: [{
                            row: -1,
                            col: -1
                        }, {
                            row: -1,
                            col: -2
                        }],
                        3: [{
                            row: 0,
                            col: 0
                        }]
                    },
                    count: 4
                },
                rowRequirement: 3,
                colRequirement: 3,
                width: 3,
                cellCount: 5
            }
        };
        var u, d;
        !function(t) {
            t[t.GREEN = 1] = "GREEN",
            t[t.ORANGE = 2] = "ORANGE",
            t[t.PURPLE = 3] = "PURPLE",
            t[t.RED = 4] = "RED"
        }(u || (u = {})),
        function(t) {
            t[t.VeryEasy = 1] = "VeryEasy",
            t[t.Easy = 2] = "Easy",
            t[t.Normal = 3] = "Normal",
            t[t.Hard = 4] = "Hard",
            t[t.Impossible = 5] = "Impossible"
        }(d || (d = {}));
        const h = [];
        function p(t, o, e) {
            h.push({
                t: t,
                p: o,
                r: e
            })
        }
        function g() {
            return h
        }
        function f(t) {
            h.length = 0,
            h.push(...t)
        }
        function m(t) {
            return (0,
            r.stringify)(t)
        }
        function b(t) {
            return (0,
            r.parse)(t)
        }
        let w = null;
        function E(t) {
            w = c()(t),
            p(8, [t])
        }
        let C = 0
          , v = !1;
        function B() {
            v = !0
        }
        function _() {
            v = !1;
            const t = C;
            return C = 0,
            t
        }
        function P() {
            if (!w)
                throw new Error("Random generator is not initialized. Please call updateSeed first.");
            return v && C++,
            w()
        }
        function y(t, o) {
            if (!w)
                throw new Error("Random generator is not initialized. Please call updateSeed first.");
            return v && C++,
            Math.floor(w() * (o - t + 1)) + t
        }
        function R(t) {
            for (let o = 0; o < t; o++)
                P()
        }
        const k = {
            veryeasy: {},
            easy: {},
            normal: {},
            hard: {}
        }
          , M = {
            boardRow: 8,
            boardCol: 8,
            randomSeed: "",
            initialBoardMaxPercent: .2,
            initialBoardMinPercent: 0,
            comboScore: {
                1: 20,
                2: 30,
                3: 40,
                4: 60,
                5: 80,
                6: 100,
                7: 120,
                8: 140,
                9: 160,
                10: 200
            },
            maxCombo: 10,
            specialClearScore: {
                1: 100,
                2: 200,
                3: 400,
                4: 600,
                5: 800,
                6: 1e3
            },
            maxSpecialClear: 6,
            basicScore: 1,
            isInitialBoardWellMode: !0,
            wellModeRateConfigList: [],
            scoreList: [],
            veryHardModeRate: .5,
            isShuffleBlocks: !0
        };
        function A(t) {
            var o;
            E(t.randomSeed),
            Object.assign(M, t),
            t.scoreList && t.scoreList.forEach(t => {
                !function(t, o) {
                    if ("basic" === t)
                        M.basicScore = o;
                    else if (t.startsWith("combo")) {
                        const e = parseInt(t.replace("combo", ""));
                        M.comboScore[e] = o
                    } else if (t.startsWith("evaluation_")) {
                        const e = parseInt(t.replace("evaluation_", ""));
                        M.specialClearScore[e] = o
                    }
                }(t.key, t.num || 0)
            }
            ),
            t.wellModeRateConfigList && (o = t.wellModeRateConfigList,
            Object.keys(k).forEach(t => {
                k[t] = {}
            }
            ),
            o.forEach(t => {
                k[t.difficulty] && (k[t.difficulty][t.times] = t.probability)
            }
            )),
            t.levelConfig || delete M.levelConfig
        }
        const O = {
            [d.VeryEasy]: "veryeasy",
            [d.Easy]: "easy",
            [d.Normal]: "normal",
            [d.Hard]: "hard"
        };
        function T(t, o) {
            return (k[O[t]] || {})[o] || 0
        }
        var D;
        !function(t) {
            t[t.ADD_ONE = 1] = "ADD_ONE",
            t[t.RECALL = 2] = "RECALL",
            t[t.REMOVE = 3] = "REMOVE",
            t[t.REVIVE = 4] = "REVIVE",
            t[t.BOMB = 5] = "BOMB"
        }(D || (D = {}));
        const S = {
            isReplay: !1,
            currentScore: 0,
            scoreIndex: 0,
            blockGroupHasClear: !1,
            currentCombo: -1,
            currentBoard: [],
            currentBlocks: [],
            fallbackBlockIndex: 0,
            hasPrevGenerateGem: !1,
            wellModeTryTimes: {
                [d.VeryEasy]: 0,
                [d.Easy]: 0,
                [d.Normal]: 0,
                [d.Hard]: 0,
                [d.Impossible]: 0
            },
            isPrevGroupWellMode: !1,
            prevBlock: [],
            prevBlockIndex: [],
            prevBlockPosition: [],
            hasPrevBlockClear: [],
            hasPrevBlockLike: !1,
            needLike: !1,
            isFirstBlockLiked: !1,
            propUsedCount: {
                [D.ADD_ONE]: 0,
                [D.REVIVE]: 0,
                [D.RECALL]: 0,
                [D.REMOVE]: 0,
                [D.BOMB]: 0
            },
            gemMap: {},
            currentGem: {
                [u.GREEN]: 0,
                [u.ORANGE]: 0,
                [u.PURPLE]: 0,
                [u.RED]: 0
            },
            stuckGemTypes: []
        }
          , N = JSON.parse(JSON.stringify(S));
        function L() {
            Object.assign(N, JSON.parse(JSON.stringify(S))),
            h.length = 0
        }
        function x() {
            return N.currentScore
        }
        function I() {
            return N.currentBoard
        }
        function U() {
            return Object.assign({}, N)
        }
        function q(t) {
            Object.assign(N, t)
        }
        let G = null;
        function H(t) {
            G = t
        }
        function F(t) {
            G ? G.logError(t) : console.error(t)
        }
        function W(t, o) {
            for (let e = t.length - 1; e > 0; e--) {
                const i = y(0, e);
                [t[e],t[i]] = [t[i], t[e]],
                o && ([o[e],o[i]] = [o[i], o[e]])
            }
        }
        function K(t, o) {
            const e = [];
            return t.forEach(t => {
                o.includes(t) || e.push(t)
            }
            ),
            e
        }
        function V(t, o) {
            const e = new Set(t)
              , i = new Set(o)
              , n = [];
            return e.forEach(t => {
                i.has(t) && n.push(t)
            }
            ),
            n
        }
        function j(t, o, e) {
            return t << M.boardCol - o - e
        }
        function z(t, o, e) {
            const i = [];
            return Object.keys(o.spaceMap[t]).forEach(n => {
                Number(n) >= e && o.spaceMap[t][n].forEach(e => {
                    const n = o.spaces[t][e];
                    i.push(n)
                }
                )
            }
            ),
            i
        }
        function Y(t, o, e) {
            const i = a[t]
              , n = "row" === e ? i.rowRequirement : i.colRequirement;
            return o.reduce( (t, o) => t + (o.count - n) * i.testPlaceMap[e][n].length, 0)
        }
        function X(t, o, e, i) {
            const n = [];
            return o.spaces[t].forEach(r => {
                o.spaceCountMap[t][r[t]] === e && i(r.count) && n.push(r)
            }
            ),
            n
        }
        function Z(t, o, e) {
            const i = []
              , n = {}
              , r = []
              , s = a[t].testPlaceMap[e]
              , c = Object.keys(s).map(Number);
            let l = c[0]
              , u = c[0];
            return c.forEach(t => {
                l = Math.min(l, t),
                u = Math.max(u, t)
            }
            ),
            o.spaces[e].forEach(t => {
                const s = o.spaceCountMap[e][t[e]];
                1 === s ? t.count <= 3 + u && t.count >= 1 + l && i.push(t) : 2 === s && (n[t[e]] = Math.max(n[t[e]] || 0, t.count),
                r.push(t))
            }
            ),
            r.forEach(t => {
                n[t[e]] <= 3 && s[t.count] && i.push(t)
            }
            ),
            i
        }
        function J(t) {
            let o = 0
              , e = 0
              , i = 0;
            const n = []
              , r = []
              , s = {}
              , c = {}
              , l = {}
              , a = {}
              , u = {};
            function d(t) {
                n.push(t),
                e = Math.max(e, t.count),
                s[t.count] = s[t.count] || [],
                s[t.count].push(n.length - 1),
                l[t.row] = (l[t.row] || 0) + 1
            }
            function h(t) {
                r.push(t),
                o = Math.max(o, t.count),
                c[t.count] = c[t.count] || [],
                c[t.count].push(r.length - 1),
                a[t.col] = (a[t.col] || 0) + 1
            }
            return t.forEach( (t, o) => {
                let e;
                for (let n = 0; n < M.boardCol; n++)
                    t & 1 << M.boardCol - 1 - n ? (e && (d(e),
                    e = null),
                    u[n] && (h(u[n]),
                    delete u[n])) : (i++,
                    e ? e.count++ : e = {
                        row: o,
                        col: n,
                        count: 1
                    },
                    u[n] ? u[n].count++ : u[n] = {
                        row: o,
                        col: n,
                        count: 1
                    });
                e && d(e)
            }
            ),
            Object.keys(u).forEach(t => {
                h(u[t])
            }
            ),
            {
                spaces: {
                    row: n,
                    col: r
                },
                spaceMap: {
                    row: s,
                    col: c
                },
                spaceCountMap: {
                    row: l,
                    col: a
                },
                colMaxSpace: o,
                rowMaxSpace: e,
                totalSpaceCellCount: i
            }
        }
        function Q(t, o) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.currentBoard;
            const i = a[t];
            return !(o.col < 0 || o.row < 0 || i.width + o.col > M.boardCol || i.shape.length + o.row > M.boardRow || i.shape.some( (t, n) => (j(t, o.col, i.width) & e[o.row + n]) > 0))
        }
        function $(t) {
            const {block: o, space: e, direction: i, board: n, justOnePosition: r=!0, justBorder: s} = t
              , c = a[o]
              , l = "row" === i ? c.rowRequirement : c.colRequirement;
            if (e.count < l)
                return [];
            const u = e.count - l
              , d = c.testPlaceMap[i][l]
              , h = [];
            return d.some(t => {
                const c = {
                    row: e.row + t.row,
                    col: e.col + t.col
                };
                for (let t = 0; t <= u; t++) {
                    if (s && t > 0 && t < u)
                        continue;
                    const e = "row" === i ? {
                        row: c.row,
                        col: c.col + t
                    } : {
                        row: c.row + t,
                        col: c.col
                    };
                    if (Q(o, e, n) && (h.push(e),
                    r))
                        return !0
                }
            }
            ),
            h
        }
        function tt(t) {
            const {block: o, space: e, direction: i, board: n, justOnePosition: r} = t
              , s = a[o].testPlaceMap[i];
            if (!s[e.count])
                return [];
            let c = [];
            return s[e.count].some(t => {
                const i = {
                    row: e.row + t.row,
                    col: e.col + t.col
                };
                return !(!Q(o, i, n) || (c.push(i),
                !r))
            }
            ),
            c
        }
        function ot(t) {
            return tt(Object.assign(Object.assign({}, t), {
                justOnePosition: !0
            }))[0]
        }
        function et(t, o, e) {
            return it({
                block: t,
                board: o,
                boardInfo: e,
                justOnePosition: !0
            })[0] || null
        }
        function it(t) {
            const {block: o, board: e, boardInfo: i, justOnePosition: n=!1} = t
              , r = a[o];
            if (r.rowRequirement > i.rowMaxSpace || r.colRequirement > i.colMaxSpace)
                return [];
            let s, c;
            if (r.rowRequirement > r.colRequirement)
                s = "row",
                c = z("row", i, r.rowRequirement);
            else if (r.rowRequirement < r.colRequirement)
                s = "col",
                c = z("col", i, r.colRequirement);
            else {
                const t = z("row", i, r.rowRequirement)
                  , e = z("col", i, r.colRequirement);
                Y(o, t, "row") <= Y(o, e, "col") ? (s = "row",
                c = t) : (s = "col",
                c = e)
            }
            let l = [];
            c.some(t => {
                const i = $({
                    block: o,
                    space: t,
                    direction: s,
                    board: e,
                    justOnePosition: n
                });
                return !(!i.length || (l.push(...i),
                !n))
            }
            );
            const u = []
              , d = {};
            return l.forEach(t => {
                const o = "".concat(t.row, "-").concat(t.col);
                d[o] || (d[o] = !0,
                u.push(t))
            }
            ),
            u
        }
        function nt(t, o, e) {
            const i = []
              , n = a[t].testPlaceMap
              , r = X("row", e, 1, t => !!n.row[t])
              , s = X("col", e, 1, t => !!n.col[t]);
            return r.forEach(e => {
                const n = tt({
                    block: t,
                    space: e,
                    direction: "row",
                    board: o
                });
                i.push(...n)
            }
            ),
            s.forEach(e => {
                const n = tt({
                    block: t,
                    space: e,
                    direction: "col",
                    board: o
                });
                i.push(...n)
            }
            ),
            i
        }
        function rt(t, o, e) {
            const i = a[t].testPlaceMap;
            return !!X("row", e, 1, t => !!i.row[t]).some(e => ot({
                block: t,
                space: e,
                direction: "row",
                board: o
            })) || X("col", e, 1, t => !!i.col[t]).some(e => ot({
                block: t,
                space: e,
                direction: "col",
                board: o
            }))
        }
        function st(t) {
            const {board: o, boardInfo: e, blocks: i=l.breakCombo, startRow: n, startCol: r, endRow: s, endCol: c} = t
              , u = {}
              , d = {};
            let h = !1
              , p = !1;
            return e.spaces.row.forEach(t => {
                n > 0 && t.row < n || s > 0 && t.row > s || 1 === e.spaceCountMap.row[t.row] && t.count < 6 && (u[t.count] = u[t.count] || [],
                u[t.count].push(t),
                h = !0)
            }
            ),
            e.spaces.col.forEach(t => {
                r > 0 && t.col < r || c > 0 && t.col > c || 1 === e.spaceCountMap.col[t.col] && t.count < 6 && (d[t.count] = d[t.count] || [],
                d[t.count].push(t),
                p = !0)
            }
            ),
            h || p ? i.filter(t => {
                const e = a[t];
                return (!h || !Object.keys(e.testPlaceMap.row).some(e => !!u[e] && u[e].some(e => ot({
                    block: t,
                    space: e,
                    direction: "row",
                    board: o
                })))) && (!p || !Object.keys(e.testPlaceMap.col).some(e => !!d[e] && d[e].some(e => ot({
                    block: t,
                    space: e,
                    direction: "col",
                    board: o
                }))))
            }
            ) : i.slice()
        }
        function ct(t) {
            const o = "".concat(t.row, "-").concat(t.col);
            if (N.gemMap[o]) {
                const t = N.gemMap[o];
                N.currentGem[t] = (N.currentGem[t] || 0) + 1,
                delete N.gemMap[o]
            }
        }
        function lt(t) {
            0 !== Object.keys(N.gemMap).length && (t.rows.forEach(t => {
                for (let o = 0; o < M.boardCol; o++)
                    ct({
                        row: t,
                        col: o
                    })
            }
            ),
            t.cols.forEach(t => {
                for (let o = 0; o < M.boardRow; o++)
                    ct({
                        row: o,
                        col: t
                    })
            }
            ))
        }
        function at(t, o) {
            t && Object.keys(t).forEach(e => {
                const [i,n] = e.split("_")
                  , r = Number(i)
                  , s = Number(n)
                  , c = o.row + r
                  , l = o.col + s
                  , a = "".concat(c, "-").concat(l);
                N.gemMap[a] = t[e]
            }
            )
        }
        function ut(t, o) {
            t.rows.forEach(t => {
                o[t] = 0
            }
            ),
            t.cols.forEach(t => {
                for (let e = 0; e < M.boardRow; e++) {
                    const i = ~(1 << M.boardCol - 1 - t);
                    o[e] &= i
                }
            }
            )
        }
        function dt(t) {
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.currentBoard;
            const {row: e, col: i} = t
              , n = ~(1 << M.boardCol - 1 - i);
            o[e] &= n
        }
        function ht(t) {
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.currentBoard;
            const {row: e, col: i} = t
              , n = 1 << M.boardCol - 1 - i;
            return 0 === (o[e] & n)
        }
        function pt(t, o, e) {
            const i = Z(t, e, "row")
              , n = Z(t, e, "col")
              , r = []
              , s = {};
            function c(e, i) {
                e.forEach(e => {
                    const n = function(t) {
                        const {block: o, space: e, direction: i, board: n} = t
                          , r = []
                          , s = a[o].testPlaceMap[i];
                        Object.keys(s).forEach(t => {
                            const o = Number(t);
                            if (o === e.count && r.push(Object.assign({}, e)),
                            o < e.count) {
                                r.push(Object.assign(Object.assign({}, e), {
                                    count: o
                                }));
                                const t = Object.assign(Object.assign({}, e), {
                                    count: o
                                });
                                "row" === i ? t.col += e.count - o : t.row += e.count - o,
                                r.push(t)
                            }
                        }
                        );
                        const c = {}
                          , l = [];
                        return r.forEach(t => {
                            const e = tt({
                                block: o,
                                space: t,
                                direction: i,
                                board: n,
                                justOnePosition: !1
                            });
                            e.length && e.forEach(t => {
                                const o = "".concat(t.row, "-").concat(t.col);
                                c[o] || (l.push(t),
                                c[o] = !0)
                            }
                            )
                        }
                        ),
                        l
                    }({
                        block: t,
                        space: e,
                        direction: i,
                        board: o
                    });
                    n.length && n.forEach(t => {
                        const o = "".concat(t.row, "-").concat(t.col);
                        s[o] || (r.push(t),
                        s[o] = !0)
                    }
                    )
                }
                )
            }
            return c(i, "row"),
            c(n, "col"),
            r
        }
        function gt(t) {
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                row: 0,
                col: 0
            }
              , e = arguments.length > 2 ? arguments[2] : void 0;
            const i = []
              , n = []
              , r = {
                row: e ? o.row + a[e].shape.length - 1 : M.boardRow - 1,
                col: e ? o.col + a[e].width - 1 : M.boardCol - 1
            };
            r.row = Math.min(r.row, M.boardRow - 1),
            r.col = Math.min(r.col, M.boardCol - 1);
            for (let e = o.row; e <= r.row; e++)
                255 === t[e] && i.push(e);
            for (let e = o.col; e <= r.col; e++) {
                let o = !0;
                for (let i = 0; i < M.boardRow; i++) {
                    const n = 1 << M.boardCol - 1 - e;
                    if (0 === (t[i] & n)) {
                        o = !1;
                        break
                    }
                }
                o && n.push(e)
            }
            return {
                rows: i,
                cols: n
            }
        }
        function ft() {
            const t = J(N.currentBoard)
              , o = N.currentBlocks.some(o => {
                if (o)
                    return !!et(o.blockType, N.currentBoard, t) || void 0
            }
            );
            return function(t, o, e) {
                const i = o.map(t => t.toString(2).padStart(2, "0")).join(", ");
                var n;
                n = "".concat(t, " - 棋盘: ").concat(i, "; 方块: ").concat(e.map(t => t && t.blockType).join(", ")),
                G ? G.logInfo(n) : console.log(n)
            }("[checkBoardIsDeath]", N.currentBoard, N.currentBlocks),
            !o
        }
        function mt() {
            const t = new Array(M.boardRow).fill(0)
              , o = M.boardRow * M.boardCol
              , e = y(Math.floor(o * M.initialBoardMinPercent), Math.floor(o * M.initialBoardMaxPercent))
              , i = {}
              , n = {};
            let r = new Array(o).fill(0).map( (t, o) => o);
            if (M.isInitialBoardWellMode) {
                const t = P() < .5 ? "row" : "col"
                  , o = y(3, 4)
                  , e = y(0, ("row" === t ? M.boardRow : M.boardCol) - o);
                r = r.filter(i => {
                    const n = "row" === t ? Math.floor(i / M.boardCol) : i % M.boardCol;
                    return n < e || n > e + o - 1
                }
                )
            }
            const s = [];
            for (let t = 0; t < e; t++) {
                const o = y(0, r.length - 1)
                  , e = r[o]
                  , c = Math.floor(e / M.boardCol);
                if (i[c] = (i[c] || 0) + 1,
                i[c] === M.boardCol) {
                    r.splice(o, 1),
                    t--;
                    continue
                }
                const l = e % M.boardCol;
                n[l] = (n[l] || 0) + 1,
                n[l] !== M.boardRow ? (s.push(r[o]),
                r.splice(o, 1)) : (r.splice(o, 1),
                t--)
            }
            return s.forEach(o => {
                const e = Math.floor(o / M.boardCol)
                  , i = o % M.boardCol;
                t[e] |= 1 << M.boardCol - 1 - i
            }
            ),
            N.currentBoard = t,
            p(6, [], t.slice()),
            t
        }
        function bt() {
            const t = [227, 0, 0, 64, 64, 127, 127, 64];
            return N.currentBoard = t,
            p(7, [], t.slice()),
            t
        }
        function wt(t, o) {
            if (N.currentBoard = t.slice(),
            N.gemMap = Object.assign({}, o),
            M.levelConfig && M.levelConfig.isGemStuck) {
                const t = Object.keys(M.levelConfig.target.gem);
                let o = y(1, Math.min(2, t.length));
                W(t),
                N.stuckGemTypes = t.slice(0, o).map(Number)
            } else
                N.stuckGemTypes = [];
            p(12, [t, o])
        }
        function Et() {
            const t = ++N.scoreIndex;
            return p(5),
            t
        }
        function Ct(t, o) {
            const e = X(o, t, 2, t => t <= 3)
              , i = {};
            return e.forEach(t => {
                const e = t[o];
                i[e] || (i[e] = []),
                i[e].push(t)
            }
            ),
            Object.values(i).filter(t => t.length > 1).map(t => ({
                direction: o,
                spaces: t
            }))
        }
        function vt(t) {
            const o = {
                row: {},
                col: {}
            };
            return t.spaces.row.forEach(e => {
                1 === t.spaceCountMap.row[e.row] && e.count < 6 && (o.row[e.count] = o.row[e.count] || [],
                o.row[e.count].push(e))
            }
            ),
            t.spaces.col.forEach(e => {
                1 === t.spaceCountMap.col[e.col] && e.count < 6 && (o.col[e.count] = o.col[e.count] || [],
                o.col[e.count].push(e))
            }
            ),
            o
        }
        function Bt(t, o, e, i) {
            if (void 0 !== e[t])
                return e[t];
            const r = a[t];
            function s(o) {
                const i = N.currentBoard.slice();
                (0,
                n.p)(t, o, i),
                ut(gt(i, o, t), i);
                const r = J(i);
                e[t].bigGroup = e[t].bigGroup.filter(t => !et(t, i, r))
            }
            return e[t] = {
                canClear: !1,
                bigGroup: i
            },
            !Object.keys(r.testPlaceMap.row).some(i => {
                if (o.row[i])
                    return o.row[i].some(o => {
                        const i = tt({
                            block: t,
                            space: o,
                            direction: "row",
                            board: N.currentBoard
                        });
                        return i.length && (e[t].canClear = !0,
                        i.forEach(t => s(t))),
                        0 === e[t].bigGroup.length
                    }
                    )
            }
            ) && Object.keys(r.testPlaceMap.col).some(i => {
                if (o.col[i])
                    return o.col[i].some(o => {
                        const i = tt({
                            block: t,
                            space: o,
                            direction: "col",
                            board: N.currentBoard
                        });
                        return i.length && (e[t].canClear = !0,
                        i.forEach(t => s(t))),
                        0 === e[t].bigGroup.length
                    }
                    )
            }
            ),
            e[t]
        }
        function _t(t, o, e) {
            if (1 === o.rowMaxSpace && 1 === o.colMaxSpace)
                return {
                    block: i.B11_1,
                    position: o.spaces.row[o.spaceMap.row[1][0]]
                };
            if (o.rowMaxSpace <= 2 && o.colMaxSpace <= 2) {
                const e = [];
                2 === o.rowMaxSpace && e.push("row"),
                2 === o.colMaxSpace && e.push("col");
                const n = e[y(0, e.length - 1)]
                  , r = o.spaceMap[n][2].slice()
                  , s = l.space2_2.slice();
                W(s),
                W(r);
                let c = "row" === n ? i.B21_1 : i.B12_1
                  , a = o.spaces[n][r[0]];
                return r.some(e => {
                    const i = o.spaces[n][e]
                      , r = s.find(o => {
                        const e = $({
                            board: t,
                            space: i,
                            block: o,
                            direction: n
                        });
                        return !!e.length && (a = e[0],
                        !0)
                    }
                    );
                    if (r)
                        return c = r,
                        !0
                }
                ),
                {
                    block: c,
                    position: a
                }
            }
            const n = [];
            o.rowMaxSpace > 2 && n.push("row"),
            o.colMaxSpace > 2 && n.push("col");
            const r = n[y(0, n.length - 1)]
              , s = o.spaces[r].filter(t => t.count >= 3)
              , c = y(0, s.length - 1)
              , a = Object.assign({}, s[c])
              , u = l.requirement[r][3].slice();
            let d, h, p;
            u.push(i.B22_9),
            W(u);
            let g = u.find(o => {
                if (e && h && !e.includes(o))
                    return !1;
                const i = $({
                    board: t,
                    space: a,
                    block: o,
                    direction: r
                });
                if (i.length) {
                    if (!e || e.includes(o))
                        return d = i[0],
                        !0;
                    h = o,
                    p = i[0]
                }
                return !1
            }
            );
            return g || (g = h,
            d = p),
            {
                block: g,
                position: d
            }
        }
        function Pt(t) {
            let o = N.currentBoard;
            const e = {
                blocks: []
            };
            for (; e.blocks.length < 3; ) {
                const i = l.requirement.row[3].concat(l.requirement.col[3]).filter(t => a[t].cellCount <= 4)
                  , {block: r, position: s} = _t(o, t, i);
                if (!r)
                    throw new Error("找不到能生成的方块; board: ".concat(JSON.stringify(o), ", mode: easy"));
                e.blocks.push(r);
                const c = [...o];
                (0,
                n.p)(r, s, c),
                o = c,
                t = J(o)
            }
            return e
        }
        function yt(t, o, e) {
            W(e);
            for (const i of e) {
                const e = it({
                    block: i,
                    board: t,
                    boardInfo: o
                });
                if (e.length > 1)
                    return {
                        block: i,
                        position: e[0]
                    }
            }
            return null
        }
        const Rt = [i.B31_1, i.B13_1, i.B22_9, i.B32_7, i.B23_7];
        function kt(t, o, e) {
            e || (e = st({
                board: t,
                boardInfo: o
            }));
            const i = {
                blocks: []
            };
            let r = t.slice()
              , s = o;
            for (; i.blocks.length < 3; ) {
                const t = yt(r, s, e);
                let o, c;
                if (t)
                    o = t.block,
                    c = t.position;
                else {
                    const t = _t(r, s, e);
                    o = t.block,
                    c = t.position
                }
                (0,
                n.p)(o, c, r),
                s = J(r),
                i.blocks.push(o)
            }
            if (i.blocks.length > 0)
                return i;
            const c = Pt(o);
            return i.blocks = c.blocks,
            i
        }
        function Mt(t) {
            if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
                return function(t) {
                    const o = {
                        blocks: []
                    }
                      , e = []
                      , r = []
                      , s = t.slice()
                      , c = function(t) {
                        let o = [];
                        const e = t.slice();
                        for (let t = 0; t <= M.boardRow - 3; t++)
                            for (let r = 0; r <= M.boardCol - 3; r++)
                                if (Q(i.B33_5, {
                                    row: t,
                                    col: r
                                }, e) && (o.push({
                                    row: t,
                                    col: r
                                }),
                                (0,
                                n.p)(i.B33_5, {
                                    row: t,
                                    col: r
                                }, e),
                                r += 2),
                                o.length >= 3)
                                    return o[0];
                        return null
                    }(s);
                    c && (e.push(i.B33_5),
                    r.push(c),
                    (0,
                    n.p)(i.B33_5, c, s));
                    let l = Rt.slice();
                    for (; e.length < 3; ) {
                        const t = J(s);
                        if (2 === e.length) {
                            const t = e.reduce( (t, o) => t + a[o].cellCount, 0);
                            t <= 8 ? l = [i.B32_7, i.B23_7] : 12 === t ? l = [i.B31_1, i.B13_1] : e[0] === e[1] && l.splice(l.indexOf(e[0]), 1)
                        }
                        const o = yt(s, t, l);
                        let c, u;
                        o ? (c = o.block,
                        u = o.position) : (c = i.B11_1,
                        u = et(c, s, t)),
                        (0,
                        n.p)(c, u, s),
                        e.push(c),
                        r.push(u)
                    }
                    return o.blocks = e,
                    o
                }(N.currentBoard);
            const o = {
                blocks: []
            };
            if (t.rowMaxSpace < 3 && t.colMaxSpace < 3) {
                const e = Pt(t);
                return o.blocks = e.blocks,
                o
            }
            const e = N.currentBoard
              , r = st({
                board: e,
                boardInfo: t
            })
              , s = [];
            if (r.forEach(o => {
                et(o, e, t) && s.push(o)
            }
            ),
            0 === s.length)
                return Pt(t);
            const c = [i.B33_5, i.B32_7, i.B23_7];
            return s.some( (i, r) => {
                let l = s.slice(r);
                const u = pt(i, e, t)
                  , d = []
                  , h = []
                  , p = [];
                if (u.some(t => {
                    const o = e.slice();
                    (0,
                    n.p)(i, t, o),
                    d.push(t),
                    h.push(o);
                    const r = J(o);
                    return p.push(r),
                    l = st({
                        board: o,
                        boardInfo: r,
                        blocks: l,
                        startRow: t.row,
                        endRow: t.row + a[i].shape.length,
                        startCol: t.col,
                        endCol: t.col + a[i].width
                    }),
                    0 === l.length
                }
                ),
                c.includes(i) && (l = K(l, c)),
                0 === l.length)
                    return !1;
                if (0 === u.length) {
                    const o = et(i, e, t);
                    if (!o)
                        return !1;
                    {
                        const t = e.slice();
                        (0,
                        n.p)(i, o, t),
                        d.push(o),
                        h.push(t);
                        const r = J(t);
                        p.push(r)
                    }
                }
                return l.reverse(),
                h.some( (t, e) => l.some( (r, s) => it({
                    block: r,
                    board: t,
                    boardInfo: p[e]
                }).some(e => {
                    const c = t.slice();
                    (0,
                    n.p)(r, e, c);
                    const a = J(c)
                      , u = l.slice(s);
                    let d;
                    W(u);
                    const h = u.find(t => {
                        const o = et(t, c, a);
                        return o && (d = o),
                        !!o
                    }
                    );
                    return !!h && (o.blocks.push(i, r, h),
                    !0)
                }
                )))
            }
            ),
            0 === o.blocks.length ? kt(e, t, s) : o
        }
        const At = [i.B11_2, i.B11_3, i.B22_1, i.B22_2, i.B22_3, i.B22_4].concat(l.breakCombo.slice().reverse());
        function Ot(t, o) {
            const e = {
                blocks: [],
                positions: []
            }
              , i = vt(t)
              , r = {}
              , s = K(At, o).filter(o => it({
                board: N.currentBoard,
                boardInfo: t,
                block: o
            }).length > 1)
              , c = function(t, o, e, i, r) {
                const s = N.currentBoard
                  , c = {
                    blocks: [],
                    positions: []
                };
                return (P() < .5 ? ["row", "col"] : ["col", "row"]).some(l => X(l, t, 1, t => t <= 3).some(a => {
                    const u = function(t, o, e) {
                        const i = []
                          , n = o[e]
                          , r = Math.max(0, n - 2)
                          , s = Math.min(("row" === e ? M.boardRow : M.boardCol) - 1, n + 2);
                        t.spaces[e].forEach(o => {
                            o[e] === n || o[e] < r || o[e] > s || 1 === t.spaceCountMap[e][o[e]] && (o.count > 3 || i.push({
                                space: o,
                                direction: e
                            }))
                        }
                        );
                        const c = "row" === e ? "col" : "row";
                        return t.spaces[c].forEach(n => {
                            if (1 === t.spaceCountMap[c][n[c]] && !(n.count > 2))
                                if (n[e] === o[e] + 1) {
                                    const t = Object.assign({}, n);
                                    t.count++,
                                    t[e]--,
                                    i.push({
                                        space: t,
                                        direction: c
                                    })
                                } else if (n[e] + n.count === o[e]) {
                                    const t = Object.assign({}, n);
                                    t.count++,
                                    i.push({
                                        space: t,
                                        direction: c
                                    })
                                }
                        }
                        ),
                        i
                    }(t, a, l);
                    return 0 !== u.length && r.some(t => {
                        const d = tt({
                            board: s,
                            space: a,
                            block: t,
                            direction: l
                        });
                        if (0 === d.length)
                            return !1;
                        let h = o;
                        const p = Bt(t, e, i, o);
                        if (p.canClear) {
                            if (0 === p.bigGroup.length)
                                return !1;
                            h = p.bigGroup
                        }
                        return d.some(a => {
                            var d;
                            const p = s.slice();
                            (0,
                            n.p)(t, a, p);
                            const g = gt(p, a, t);
                            return ut(g, p),
                            (null === (d = M.levelConfig) || void 0 === d ? void 0 : d.isHard) && (c.blockClearRowCol = [{
                                rows: g.rows.map(t => t - a.row),
                                cols: g.cols.map(t => t - a.col)
                            }]),
                            u.some(u => {
                                const {space: d, direction: g} = u;
                                return r.some(r => {
                                    if (l === g && ot({
                                        board: s,
                                        space: d,
                                        block: r,
                                        direction: l
                                    }))
                                        return !1;
                                    const u = tt({
                                        block: r,
                                        space: d,
                                        direction: g,
                                        board: p
                                    });
                                    if (0 === u.length)
                                        return !1;
                                    const f = Bt(r, e, i, o);
                                    if (f.canClear) {
                                        if (0 === f.bigGroup.length)
                                            return !1;
                                        h = V(h, f.bigGroup)
                                    }
                                    return 0 !== h.length && u.some(o => {
                                        var e;
                                        const i = p.slice();
                                        (0,
                                        n.p)(r, o, i);
                                        const s = gt(i, o, r);
                                        ut(s, i),
                                        (null === (e = M.levelConfig) || void 0 === e ? void 0 : e.isHard) && (c.blockClearRowCol[0] = {
                                            rows: s.rows.map(t => t - a.row).concat(c.blockClearRowCol[0].rows || []),
                                            cols: s.cols.map(t => t - a.col).concat(c.blockClearRowCol[0].cols || [])
                                        },
                                        c.blockClearRowCol[1] = {
                                            rows: s.rows.map(t => t - o.row),
                                            cols: s.cols.map(t => t - o.col)
                                        });
                                        const l = J(i);
                                        return h.some(e => {
                                            const n = et(e, i, l);
                                            return !!n && (c.blocks.push(t, r, e),
                                            c.positions.push(a, o, n),
                                            !0)
                                        }
                                        )
                                    }
                                    )
                                }
                                )
                            }
                            )
                        }
                        )
                    }
                    )
                }
                )),
                c
            }(t, o, i, r, s);
            if (c.blocks.length > 0)
                return e.blocks = c.blocks,
                e.blockClearRowCol = c.blockClearRowCol,
                e;
            const l = function(t, o, e, i, r) {
                const s = N.currentBoard
                  , c = {
                    blocks: [],
                    positions: []
                };
                return (P() < .5 ? ["row", "col"] : ["col", "row"]).some(l => X(l, t, 1, t => t <= 5 && t >= 2).some(t => {
                    const u = r.filter(o => !ot({
                        board: s,
                        space: t,
                        block: o,
                        direction: l
                    }));
                    return 0 !== u.length && u.some(r => {
                        const d = Bt(r, e, i, o);
                        let h = o;
                        if (d.canClear) {
                            if (0 === d.bigGroup.length)
                                return !1;
                            h = d.bigGroup
                        }
                        const p = function(t, o, e) {
                            const i = []
                              , n = Object.keys(a[e].testPlaceMap[o]).map(t => +t).filter(o => o < t.count && o >= t.count - 3);
                            if (0 === n.length)
                                return [];
                            const r = "row" === o ? "col" : "row";
                            return n.forEach(o => {
                                const e = Object.assign(Object.assign({}, t), {
                                    count: o
                                })
                                  , n = Object.assign(Object.assign({}, t), {
                                    count: t.count - o
                                });
                                n[r] += o,
                                i.push([e, n]);
                                const s = Object.assign(Object.assign({}, t), {
                                    count: o
                                });
                                s[r] += t.count - o;
                                const c = Object.assign(Object.assign({}, t), {
                                    count: t.count - o
                                });
                                i.push([s, c])
                            }
                            ),
                            i
                        }(t, l, r);
                        return 0 !== p.length && p.some(t => {
                            const [a,d] = t
                              , p = tt({
                                block: r,
                                space: a,
                                direction: l,
                                board: s
                            });
                            return 0 !== p.length && p.some(t => {
                                const a = s.slice();
                                (0,
                                n.p)(r, t, a);
                                const p = gt(a, t, r);
                                return !(p.rows.length > 0 || p.cols.length > 0) && u.some(s => {
                                    const u = Bt(s, e, i, o);
                                    if (u.canClear) {
                                        if (0 === u.bigGroup.length)
                                            return !1;
                                        h = V(h, u.bigGroup)
                                    }
                                    if (0 === h.length)
                                        return !1;
                                    const p = tt({
                                        block: s,
                                        space: d,
                                        direction: l,
                                        board: a
                                    });
                                    return 0 !== p.length && p.some(o => {
                                        var e;
                                        const i = a.slice();
                                        (0,
                                        n.p)(s, o, i);
                                        const l = gt(i);
                                        ut(l, i),
                                        (null === (e = M.levelConfig) || void 0 === e ? void 0 : e.isHard) && (c.blockClearRowCol = [{
                                            rows: l.rows.map(o => o - t.row),
                                            cols: l.cols.map(o => o - t.col)
                                        }, {
                                            rows: l.rows.map(t => t - o.row),
                                            cols: l.cols.map(t => t - o.col)
                                        }]);
                                        const u = J(i);
                                        return h.some(e => {
                                            const n = et(e, i, u);
                                            return !!n && (c.blocks.push(r, s, e),
                                            c.positions.push(t, o, n),
                                            !0)
                                        }
                                        )
                                    }
                                    )
                                }
                                )
                            }
                            )
                        }
                        )
                    }
                    )
                }
                )),
                c
            }(t, o, i, r, s);
            return l.blocks.length > 0 && (e.blocks = l.blocks,
            e.blockClearRowCol = l.blockClearRowCol),
            e
        }
    },
    49452(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(17642),
        e(58004),
        e(33853),
        e(45876),
        e(32475),
        e(15024),
        e(31698),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(62339)
          , r = e(78248)
          , s = e(30951)
          , c = e(62474)
          , l = e(79444)
          , a = e(27606)
          , u = e(95080)
          , d = e(91879)
          , h = e(41455)
          , p = e(90710)
          , g = e(35440)
          , f = e(47075)
          , m = e(62794)
          , b = e(13290)
          , w = e(11517)
          , E = e(24521);
        const {ccclass: C} = r.P4R;
        window.cc._RF.push({}, "316c9KHZctLYZSt/iq6OOAc", "BaseEliminateController", void 0);
        let v = class extends s.w {
            constructor() {
                super(...arguments),
                this.lastHintCells = new Set,
                this.currentHintCells = new Set,
                this.lastPreEliminateLightNodes = new Set,
                this.lastBombPreEliminateLightNodes = new Set,
                this.lastPreEliminateParticleNodes = new Set,
                this.preEliminateParticlePool = new r.lPW
            }
            init(t) {
                this.board = t;
                const {cellContainer: o, cellTempContainer: e} = this.board.getComponent(p.b);
                this.cellContainer = o,
                this.cellTempContainer = e
            }
            checkElimination(t, o) {
                const e = t.getComponent(h.e)
                  , i = {
                    row: o.row,
                    col: o.col - e.leftTopOffset.col
                };
                return (0,
                n.c)(e.type, i)
            }
            eliminateBlocks(t, o) {
                const e = this.getEliminationCells(t, o);
                (0,
                a.Vt)("[消除方块] 行: ".concat(t, ", 列: ").concat(o, ", 单元格数量: ").concat(e.size));
                for (const t of e)
                    this.cellModel.putNodeToNodePool(t.cell),
                    t.cell = null
            }
            showBombPreEliminateHint(t) {
                this.resetBombPreEliminateHint(),
                !l.i.isLowEquipment && d.h.get(c.Z.PreEliminateLight, r.tX0) && d.h.get(c.Z.PreEliminateParticle, r.tX0) && this.showBombPreEliminateEffect(t)
            }
            showEliminateHint(t, o, e) {
                this.resetEliminateHint();
                const i = t.getComponent(h.e)
                  , n = this.getEliminationCells(o, e);
                for (const t of n) {
                    const o = t.cell;
                    o && o.getComponent(g.f).switchSprite(i.color),
                    this.lastHintCells.add(t)
                }
                !l.i.isLowEquipment && d.h.get(c.Z.PreEliminateLight, r.tX0) && d.h.get(c.Z.PreEliminateParticle, r.tX0) && this.showPreEliminateEffect(i.color, o, e)
            }
            showPreEliminateEffect(t, o, e) {
                const {boardRow: i, boardCol: n} = this.boardModel
                  , s = []
                  , c = []
                  , l = this.getEliminationCells(o, e);
                for (const t of l) {
                    const o = t.cell;
                    o && o.setParent(this.cellTempContainer)
                }
                const a = (0,
                E.Rp)(o);
                for (const o of a) {
                    if (!o.length)
                        continue;
                    const e = ((i - 1) / 2 - (o[0] + o[o.length - 1]) / 2) * f.Dq
                      , n = this.preEliminateLightModel.popNode(t);
                    s.push({
                        node: n,
                        pos: new r.eBl(0,e,0),
                        angle: 0,
                        lineCount: o.length
                    });
                    for (const t of o) {
                        const o = ((i - 1) / 2 - t) * f.Dq;
                        c.push({
                            node: this.getPreEliminateParticleNode(),
                            pos: new r.eBl(0,o,0),
                            angle: 0
                        })
                    }
                }
                const u = (0,
                E.Rp)(e);
                for (const o of u) {
                    if (!o.length)
                        continue;
                    const e = ((o[0] + o[o.length - 1]) / 2 - (n - 1) / 2) * f.Dq
                      , i = this.preEliminateLightModel.popNode(t);
                    s.push({
                        node: i,
                        pos: new r.eBl(e,0,0),
                        angle: 90,
                        lineCount: o.length
                    });
                    for (const t of o) {
                        const o = (t - (n - 1) / 2) * f.Dq;
                        c.push({
                            node: this.getPreEliminateParticleNode(),
                            pos: new r.eBl(o,0,0),
                            angle: 90
                        })
                    }
                }
                for (const {node: t, pos: o, angle: e, lineCount: c} of s) {
                    this.lastPreEliminateLightNodes.add(t);
                    const s = t.getComponent(r.$lP)
                      , l = this.preEliminateLightModel.DEFAULT_PRE_ELIMINATE_LIGHT_SIZE;
                    s && s.setContentSize(l + f.Dq * ((e ? i : n) - 1), l + f.Dq * (c - 1)),
                    t.setParent(this.cellTempContainer),
                    t.setPosition(o),
                    t.angle = e
                }
                for (const {node: t, pos: o, angle: e} of c)
                    this.lastPreEliminateParticleNodes.add(t),
                    t.setParent(this.cellTempContainer),
                    t.setSiblingIndex(0),
                    t.setPosition(o),
                    t.angle = e
            }
            showBombPreEliminateEffect(t) {
                const {DEFAULT_PRE_ELIMINATE_LIGHT_SIZE: o} = this.preEliminateLightModel
                  , {boardRow: e, boardCol: i} = this.boardModel
                  , {row: n, col: s, pos: c} = t
                  , l = 0 === s || s === i - 1
                  , a = 0 === n || n === e - 1
                  , u = 0 === s ? f.Dq / 2 : s === i - 1 ? -f.Dq / 2 : 0
                  , d = 0 === n ? -f.Dq / 2 : n === e - 1 ? f.Dq / 2 : 0;
                [{
                    size: {
                        width: o + f.Dq * (l ? 1 : 2),
                        height: o
                    },
                    position: {
                        x: c.x + u,
                        y: c.y
                    },
                    angle: 0
                }, {
                    size: {
                        width: o + f.Dq * (a ? 1 : 2),
                        height: o
                    },
                    position: {
                        x: c.x,
                        y: c.y + d
                    },
                    angle: 90
                }].forEach(t => {
                    const o = this.preEliminateLightModel.popBombPreEliminateNode();
                    if (!o)
                        return;
                    const {size: e, position: i, angle: n} = t;
                    o.getComponent(r.$lP).setContentSize(e.width, e.height),
                    o.getComponent(r.wFi).opacity = 150,
                    o.setParent(this.cellTempContainer),
                    o.setPosition(i.x, i.y, 0),
                    o.angle = n,
                    this.lastBombPreEliminateLightNodes.add(o)
                }
                )
            }
            bombEliminate(t) {
                const {row: o, col: e} = t
                  , i = this.boardModel.getSurroundingCells(o, e);
                for (const o of [t, ...i])
                    o.cell && (this.cellModel.putNodeToNodePool(o.cell),
                    o.cell = null);
                this.lastBombPreEliminateLightNodes.forEach(t => {
                    const o = t.getComponent(r.wFi);
                    o.opacity = 255,
                    (0,
                    r.QxW)(o).to(.46, {
                        opacity: 0
                    }).call( () => {
                        this.preEliminateLightModel.putBombPreEliminateNode(t)
                    }
                    ).start()
                }
                )
            }
            getEliminationCells(t, o) {
                const e = new Set
                  , {boardRow: i, boardCol: n} = this.boardModel
                  , r = this.boardModel.grid;
                for (const o of t)
                    for (let t = 0; t < n; t++) {
                        const i = r[o][t];
                        e.add(i)
                    }
                for (const t of o)
                    for (let o = 0; o < i; o++) {
                        const i = r[o][t];
                        e.add(i)
                    }
                return e
            }
            resetEliminateHint() {
                for (const t of this.lastHintCells) {
                    const o = t.cell;
                    if (o) {
                        o.setParent(this.cellContainer);
                        const t = o.getComponent(g.f);
                        t.setColor(t.color)
                    }
                }
                this.lastHintCells.clear(),
                this.clearPreEliminateEffect()
            }
            resetBombPreEliminateHint() {
                for (const t of this.lastBombPreEliminateLightNodes)
                    this.preEliminateLightModel.putBombPreEliminateNode(t);
                this.lastBombPreEliminateLightNodes.clear()
            }
            clearPreEliminateEffect() {
                for (const t of this.lastPreEliminateLightNodes)
                    this.preEliminateLightModel.putNodeToNodePool(t);
                this.lastPreEliminateLightNodes.clear();
                for (const t of this.lastPreEliminateParticleNodes)
                    t.removeFromParent(),
                    this.preEliminateParticlePool.put(t);
                this.lastPreEliminateParticleNodes.clear()
            }
            getPreEliminateParticleNode() {
                if (!this.preEliminateParticlePfb && (this.preEliminateParticlePfb = d.h.get(c.Z.PreEliminateParticle, r.tX0)),
                this.preEliminateParticlePfb)
                    return this.preEliminateParticlePool.size() > 0 ? this.preEliminateParticlePool.get() : (0,
                    r.Flv)(this.preEliminateParticlePfb)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(m.A)], v.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(b.A)], v.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(w.A)], v.prototype, "preEliminateLightModel", void 0),
        v = (0,
        i.Cg)([C("BaseEliminateController")], v),
        o.A = v,
        window.cc._RF.pop()
    },
    54658(t, o, e) {
        "use strict";
        e.d(o, {
            c: function() {
                return n
            }
        }),
        e(23792),
        e(62953);
        var i = e(3360);
        function n() {
            for (var t = arguments.length, o = new Array(t), e = 0; e < t; e++)
                o[e] = arguments[e];
            (0,
            i._o)()
        }
    },
    55493(t, o, e) {
        "use strict";
        e(44114),
        e(98992),
        e(81454);
        var i = e(31635)
          , n = e(92068)
          , r = e(48571)
          , s = e(78248)
          , c = e(30951)
          , l = e(5167)
          , a = e(53501)
          , u = e(27606)
          , d = e(92002)
          , h = e(95080)
          , p = e(41455)
          , g = e(47075)
          , f = e(3677)
          , m = e(23241)
          , b = e(16222)
          , w = e(37878)
          , E = e(13290)
          , C = e(69646)
          , v = e(47080)
          , B = e(43357)
          , _ = e(8089)
          , P = e(74172)
          , y = e(27900)
          , R = e(11972);
        const {ccclass: k} = s.P4R;
        window.cc._RF.push({}, "4353aZ8aCNHZrvlH3rA1ed8", "BaseBlockController", void 0);
        let M = class extends c.w {
            init(t, o) {
                this.blockPfb = t,
                this.cellModel.initCellPfb(o),
                this.bindEvents()
            }
            bindEvents() {
                l.q.event.on(m.E.PLACE_BLOCK, this.handleBlockPlace, this),
                l.q.event.on(m.E.USE_REMOVE_PROP_END, this.handleBlockCleared, this)
            }
            createBlockNode(t, o, e) {
                const i = (0,
                s.Flv)(this.blockPfb);
                return i.getComponent(p.e).initBlock(t, o, e),
                i
            }
            handleBlockPlace(t) {
                const {groupIndex: o, blockType: e, color: i, cellCoords: n, isExtraBlock: r, center: s, isEliminated: c} = t;
                this.blockGroupModel.setPlacedBlockData({
                    isExtraBlock: r,
                    groupIndex: o,
                    blockType: e,
                    center: s,
                    color: i,
                    cellCoords: n,
                    isEliminated: c
                }),
                this.handleBlockCleared()
            }
            handleBlockCleared() {
                if (this.blockGroupModel.isEmpty()) {
                    this.trackNewBlockGroup(!0);
                    const {currentOffset: t, lastOffset: o} = this.ddModel;
                    if (t >= o)
                        return l.q.spinner.startShow(),
                        void (this.gameModel.isWaitingDDL = !0);
                    this.generateBlockGroup()
                }
                this.gameCtr.checkGameEnd()
            }
            generateBlockGroup() {}
            generateBlocks(t) {
                try {
                    const o = (0,
                    n.OY)(t);
                    return {
                        blocks: this.initBlockNodes(o.blocks),
                        positions: o.positions,
                        useMode: o.useMode,
                        fallMode: o.fallMode,
                        isUpgradeHard: o.isUpgradeHard,
                        isOriginDifficulty: o.isOriginDifficulty
                    }
                } catch (o) {
                    throw (0,
                    u.Kb)("[generateBlocks] 生成方块失败 - 难度: ".concat(t), {
                        error: o
                    }),
                    o
                }
            }
            initBlockNodes(t) {
                return []
            }
            generateBlockGroupItems(t) {
                return t.map( (t, o) => {
                    if (!t)
                        return {
                            block: null,
                            blockShadow: null,
                            index: o
                        };
                    const e = t.getComponent(p.e)
                      , i = this.blockShadowCtr.getBlockShadowNode(e.type);
                    return e.groupIndex = o,
                    {
                        block: t,
                        blockShadow: i,
                        index: o
                    }
                }
                )
            }
            generateExtraBlock() {
                const t = (0,
                s.Flv)(this.blockPfb);
                return t.getComponent(p.e).initBlock(r.E.B11_1, g.F3.RAINBOW),
                t
            }
            checkFirstHardDifficulty(t) {
                const {difficultyMode: o} = this.blockGroupModel;
                if (o !== r.N.Hard && o !== r.N.Impossible || !t)
                    return;
                const {hasHardDifficulty: e, hasHardDifficultyAfterRevive: i} = this.gameModel
                  , {propUseTimes: n} = this.propModel;
                e || (this.gameModel.hasHardDifficulty = !0,
                l.q.event.emit(m.E.FIRST_HARD_DIFFICULTY)),
                n[b.P7.REVIVE] > 0 && !i && (this.gameModel.hasHardDifficultyAfterRevive = !0,
                l.q.event.emit(m.E.FIRST_HARD_DIFFICULTY_AFTER_REVIVE))
            }
            trackNewBlockGroup() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const {difficultyMode: o, isUpgradeHard: e, hasUsedProps: i, isOriginDifficulty: n} = this.blockGroupModel;
                o !== r.N.Hard && o !== r.N.Impossible || !n || (0,
                d.Wy)(a.qo.GAME_PAGE, a.vf.NEW_BLOCK_GROUP, {
                    difficulty: e ? f.dA : o,
                    is_solved: t,
                    is_use_booster: i
                })
            }
            onDestroy() {
                l.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        h.KA)(B.A)], M.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        h.KA)(w.A)], M.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        h.KA)(E.A)], M.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        h.KA)(C.A)], M.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        h.KA)(v.A)], M.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        h.kW)(y.A)], M.prototype, "dynamicDifficultyCtr", void 0),
        (0,
        i.Cg)([(0,
        h.kW)(_.A)], M.prototype, "blockShadowCtr", void 0),
        (0,
        i.Cg)([(0,
        h.kW)(P.A)], M.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        h.kW)(R.A)], M.prototype, "gameCtr", void 0),
        M = (0,
        i.Cg)([k("BaseBlockController")], M),
        o.A = M,
        window.cc._RF.pop()
    },
    56435(t, o, e) {
        "use strict";
        e.d(o, {
            A: function() {
                return S
            }
        }),
        e(23792),
        e(44114),
        e(26910),
        e(16034),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(4911)
          , s = e(78248)
          , c = e(30951)
          , l = e(5167)
          , a = e(5564)
          , u = e(61505)
          , d = e(37436)
          , h = e(62474)
          , p = e(79444)
          , g = e(95080)
          , f = e(95065)
          , m = e(91879)
          , b = e(90710)
          , w = e(23313)
          , E = e(39277)
          , C = e(47075)
          , v = e(72392)
          , B = e(23241)
          , _ = e(62794)
          , P = e(13290)
          , y = e(68031)
          , R = e(47080)
          , k = e(72739)
          , M = e(94569)
          , A = e(24521)
          , O = e(55493);
        const {ccclass: T} = s.P4R;
        window.cc._RF.push({}, "6d5e6El/pBEz5NT46iDbXMr", "BaseGameEffectController", void 0);
        let D = class extends c.w {
            constructor() {
                super(...arguments),
                this.eliminateLightPool = new s.lPW,
                this.giveALikePool = new s.lPW,
                this.cellDisappearPool = new s.lPW,
                this.cellDisappearLightPool = new s.lPW,
                this.SHAKE_FRAME_INTERVAL = .02,
                this.FILL_ANIMATION_DELAY = .05,
                this.COMBO_HINT_OFFSET_X = 200,
                this.comboHintPath = h.Z.ComboHint,
                this.scoreHintPath = h.Z.ScoreHint
            }
            init(t, o) {
                const {cellTempContainer: e, cellContainer: i} = t.getComponent(b.b);
                this.board = t,
                this.cellTempContainer = e,
                this.cellContainer = i,
                this.scoreBoard = o,
                this.bindEvent(),
                p.i.isLowEquipment || this.preloadEliminateSpriteFrames()
            }
            preloadEliminateSpriteFrames() {
                [...Object.values(u.E), ...Object.values(d.t)].forEach(t => {
                    m.h.getSpriteFrame(t)
                }
                )
            }
            bindEvent() {
                l.q.event.on(B.E.ELIMINATE_BLOCK, this.showScoreAnim, this),
                l.q.event.on(B.E.PLACE_BLOCK, this.giveALike, this),
                l.q.event.on(B.E.SHOW_FILL_BOARD_ANIM, this.showFillBoardAnim, this)
            }
            giveALike(t) {
            }
            showFillBoardAnim() {
                const {boardRow: t, boardCol: o, grid: e} = this.boardModel
                  , i = new Map;
                for (let n = 0; n < t; n++)
                    for (let t = 0; t < o; t++) {
                        const o = e[n][t];
                        o.cell || (!i.has(o.row) && i.set(o.row, []),
                        i.get(o.row).push(o))
                    }
                this.fillFakeCells(i)
            }
            fillFakeCells(t) {
                const o = this.boardModel.initialColorGroup = (0,
                M.uD)(4)
                  , e = Array.from(t.keys()).sort( (t, o) => o - t);
                for (let i = 0; i < e.length; i++) {
                    const n = t.get(e[i]);
                    for (let t = 0; t < n.length; t++) {
                        const r = (0,
                        M.Rr)([], o)
                          , c = n[t]
                          , {row: l, col: a} = c
                          , [u] = this.cellModel.popNodes(1, r)
                          , d = this.boardModel.grid[l][a];
                        d.cell = u;
                        const h = u.getComponent(s.wFi);
                        h.opacity = 0,
                        this.cellContainer.addChild(u),
                        u.setPosition(d.pos.clone()),
                        (0,
                        s.QxW)(h).delay(this.FILL_ANIMATION_DELAY * i).to(.2, {
                            opacity: 255
                        }).call( () => {
                            i === e.length - 1 && t === n.length - 1 && this.scheduleOnce( () => this.clearFakeCells(), .2)
                        }
                        ).start()
                    }
                }
            }
            clearFakeCells() {
                const t = (0,
                n.a5)()
                  , {boardRow: o, boardCol: e} = this.boardModel
                  , i = new Map;
                for (let n = 0; n < o; n++) {
                    const o = t[n];
                    for (let t = 0; t < e; t++)
                        o >> e - 1 - t & 1 || (!i.has(n) && i.set(n, []),
                        i.get(n).push(this.boardModel.grid[n][t]))
                }
                const r = Array.from(i.keys()).sort( (t, o) => t - o);
                for (let t = 0; t < r.length; t++) {
                    const o = i.get(r[t]);
                    for (let e = 0; e < o.length; e++) {
                        const i = o[e]
                          , {cell: n, row: c} = i
                          , l = n.getComponent(s.wFi);
                        (0,
                        s.QxW)(l).delay(.05 * c).to(.2, {
                            opacity: 0
                        }).call( () => {
                            this.cellModel.putNodeToNodePool(n),
                            i.cell = null,
                            t === r.length - 1 && e === o.length - 1 && this.blockCtr.generateBlockGroup()
                        }
                        ).start()
                    }
                }
            }
            showScoreAnim(t){
                const {
                    increasedScore:o,
                    combo:e,
                    rows:i,
                    cols:n,
                    color:r
                } = t;
            
                l.q.event.emit(
                    B.L.UPDATE_SCORE,
                    this.gameModel.score,
                    o
                );
            }
            showComboHint(t) {
                const {combo: o} = t
                  , e = this.comboHintModel.popNode(Math.floor(Math.log10(o)) + 1);
                e.setParent(this.board.parent),
                e.setSiblingIndex(this.board.getSiblingIndex() + 3),
                e.position = this.getComboHintPos(t, e),
                e.getComponent(w.y).show(o)
            }
            showScoreHint(t) {
                const {score: o, evaluation: e} = t
                  , i = this.scoreHintModel.popNode(Math.floor(Math.log10(o)) + 1);
                i.setParent(this.board.parent),
                i.setSiblingIndex(this.board.getSiblingIndex() + 3),
                i.position = this.getScoreHintPos(t, i),
                i.getComponent(E.s).show(o, e, this.scoreBoard.worldPosition)
            }
            getComboHintPos(t, o) {
                var e;
                const i = o.getComponent(w.y)
                  , n = null === (e = i.timeBox.children) || void 0 === e ? void 0 : e[0]
                  , {width: r} = (null == n ? void 0 : n.getComponent(s.$lP)) || {}
                  , c = i.comboText
                  , {width: l, height: a} = (null == c ? void 0 : c.getComponent(s.$lP)) || {}
                  , u = a + C.Dq + 10
                  , d = this.COMBO_HINT_OFFSET_X
                  , {rows: h, cols: p, combo: g} = t
                  , {boardRow: f, boardCol: m} = this.boardModel
                  , b = (m - 1) / 2 * C.Dq
                  , E = (f - 1) / 2 * C.Dq
                  , v = Math.max(String(g).length * ((r || 125) - 15) + 15, l + 5 || 265);
                let B = 0
                  , _ = u;
                if (h.length) {
                    const [t] = (0,
                    A.h0)(h);
                    _ = ((f - 1) / 2 - t) * C.Dq + u,
                    _ > E && (_ = E)
                }
                if (p.length) {
                    const [t,o] = (0,
                    A.h0)(p);
                    B = ((t + o) / 2 - (m - 1) / 2) * C.Dq,
                    B += B > 0 ? -d : d,
                    B - v / 2 < -b ? B = v / 2 - b : B + v / 2 > b && (B = b - v / 2)
                }
                return new s.eBl(B,_,0)
            }
            getScoreHintPos(t, o) {
                var e, i;
                const n = o.getComponent(E.s)
                  , c = null === (e = n.scoreBox.children) || void 0 === e ? void 0 : e[0]
                  , {width: l} = (null == c ? void 0 : c.getComponent(s.$lP)) || {}
                  , a = null === (i = n.score.children) || void 0 === i ? void 0 : i[0]
                  , {width: u, height: d} = (null == a ? void 0 : a.getComponent(s.$lP)) || {}
                  , h = n.evaluation
                  , {width: p} = (null == h ? void 0 : h.getComponent(s.$lP)) || {}
                  , {rows: g, cols: m, score: b, evaluation: w} = t
                  , {boardRow: B, boardCol: _} = this.boardModel
                  , P = (_ - 1) / 2 * C.Dq
                  , y = (B - 1) / 2 * C.Dq
                  , R = Math.max(l + String(b).length * (u || 60) + 40, w === v.Ee.NONE ? 0 : p + 5 || 200)
                  , k = (d || 100) + 10
                  , M = g.length ? g[Math.floor((0,
                r.G0)() * g.length)] : (0,
                f.Mn)(0, B - 1);
                let A = ((m.length ? m[Math.floor((0,
                r.G0)() * m.length)] : (0,
                f.Mn)(0, _ - 1)) - (_ - 1) / 2) * C.Dq
                  , O = ((B - 1) / 2 - M) * C.Dq;
                return A - R / 2 < -P ? A = R / 2 - P : A + R / 2 > P && (A = P - R / 2),
                O = Math.max(k / 2 - y, Math.min(O, y - k / 2)),
                new s.eBl(A,O,0)
            }
            showEliminateEffect(t, o, e) {
                
            }
            showEliminateLightEffect(t, o, e) {
                const {boardRow: i, boardCol: n} = this.boardModel
                  , r = []
                  , c = t.length + o.length > 1;
                for (const o of t) {
                    const t = ((i - 1) / 2 - o) * C.Dq;
                    r.push({
                        cellDisappearLightNode: this.getCellDisappearLightNode(),
                        eliminateLightNode: c ? this.getEliminateLightNode() : null,
                        pos: new s.eBl(0,t,0),
                        angle: 0
                    })
                }
                for (const t of o) {
                    const o = (t - (n - 1) / 2) * C.Dq;
                    r.push({
                        cellDisappearLightNode: this.getCellDisappearLightNode(),
                        eliminateLightNode: c ? this.getEliminateLightNode() : null,
                        pos: new s.eBl(o,0,0),
                        angle: 90
                    })
                }
                for (const {cellDisappearLightNode: t, eliminateLightNode: o, pos: i, angle: n} of r) {
                    t.setParent(this.cellTempContainer),
                    t.setSiblingIndex(0),
                    t.setPosition(i),
                    t.angle = n;
                    const r = t.getComponent(s.bdY.ArmatureDisplay);
                    if (r.playAnimation(v.w8[e], 1),
                    r.once(s.bdY.EventObject.COMPLETE, () => {
                        t.removeFromParent(),
                        this.cellDisappearLightPool.put(t)
                    }
                    , this),
                    !c)
                        continue;
                    o.setParent(this.cellTempContainer),
                    o.setPosition(i),
                    o.angle = n;
                    const l = o.getComponent(s.bdY.ArmatureDisplay);
                    l.playAnimation("Remove_fx_2", 1),
                    l.once(s.bdY.EventObject.COMPLETE, () => {
                        o.removeFromParent(),
                        this.eliminateLightPool.put(o)
                    }
                    , this)
                }
            }
            showCellDisappearEffect(t, o, e) {
                const {boardRow: i, boardCol: n} = this.boardModel;
                for (const o of t)
                    for (let t = 0; t < n; t++)
                        this.playCellDisappearAnim(o, t, .04 * t, e);
                for (const t of o)
                    for (let o = 0; o < i; o++)
                        this.playCellDisappearAnim(o, t, .04 * o, e)
            }
            playCellDisappearAnim(t, o, e, n) {
                const {grid: r} = this.boardModel
                  , c = r[t][o];
                this.scheduleOnce( () => (0,
                i.sH)(this, void 0, void 0, function*() {
                    const t = this.getCellDisappearNode();
                    t.setParent(this.cellTempContainer),
                    t.setSiblingIndex(0),
                    t.setPosition(c.pos);
                    const o = t.getComponent(s.bdY.ArmatureDisplay)
                      , e = yield m.h.getSpriteFrame(v.aO[n])
                      , i = yield m.h.getSpriteFrame(v.fM[n]);
                    var r, l;
                    o.playAnimation("cube_disappear", 1),
                    r = o,
                    (l = [{
                        slotName: "image_blocks_yellow",
                        spriteFrame: e
                    }, {
                        slotName: "geziY",
                        spriteFrame: i
                    }]) && 0 !== l.length && (r.invalidAnimationCache(),
                    (0,
                    a.D)(l, r)),
                    o.once(s.bdY.EventObject.COMPLETE, () => {
                        t.removeFromParent(),
                        this.cellDisappearPool.put(t)
                    }
                    , this)
                }), e)
            }
            vibrate(t, o) {
                if (!l.q.vibration.isVibrationEnabled)
                    return;
                const e = t.length + o.length;
                l.q.vibration.vibrate((0,
                A._$)(e)),
                this.shakeScreen((0,
                A.oG)(e))
            }
            shakeScreen() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
                  , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3;
                if (0 === t)
                    return;
                const e = l.q.ui.currentScene
                  , i = e.position.clone();
                let n = 0;
                const s = () => {
                    if (n < o) {
                        const o = 2 * ((0,
                        r.G0)() - .5) * t
                          , s = 2 * ((0,
                        r.G0)() - .5) * t;
                        e.setPosition(i.x + o, i.y + s, i.z),
                        n += this.SHAKE_FRAME_INTERVAL
                    } else
                        e.setPosition(i),
                        this.unschedule(s)
                }
                ;
                this.schedule(s, this.SHAKE_FRAME_INTERVAL)
            }
            getEliminateLightNode() {
                if (!this.eliminateLightPfb && (this.eliminateLightPfb = m.h.get(h.Z.EliminateLight, s.tX0)),
                this.eliminateLightPfb)
                    return this.eliminateLightPool.size() > 0 ? this.eliminateLightPool.get() : (0,
                    s.Flv)(this.eliminateLightPfb)
            }
            getGiveALikeNode() {
                if (!this.giveALikePfb && (this.giveALikePfb = m.h.get(h.Z.GiveALike, s.tX0)),
                this.giveALikePfb)
                    return this.giveALikePool.size() > 0 ? this.giveALikePool.get() : (0,
                    s.Flv)(this.giveALikePfb)
            }
            getCellDisappearNode() {
                if (!this.cellDisappearPfb && (this.cellDisappearPfb = m.h.get(h.Z.CellDisappear, s.tX0)),
                this.cellDisappearPfb)
                    return this.cellDisappearPool.size() > 0 ? this.cellDisappearPool.get() : (0,
                    s.Flv)(this.cellDisappearPfb)
            }
            getCellDisappearLightNode() {
                if (!this.cellDisappearLightPfb && (this.cellDisappearLightPfb = m.h.get(h.Z.CellDisappearLight, s.tX0)),
                this.cellDisappearLightPfb)
                    return this.cellDisappearLightPool.size() > 0 ? this.cellDisappearLightPool.get() : (0,
                    s.Flv)(this.cellDisappearLightPfb)
            }
            onDestroy() {
                l.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        g.KA)(R.A)], D.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        g.KA)(y.A)], D.prototype, "comboHintModel", void 0),
        (0,
        i.Cg)([(0,
        g.KA)(k.A)], D.prototype, "scoreHintModel", void 0),
        (0,
        i.Cg)([(0,
        g.KA)(_.A)], D.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        g.KA)(P.A)], D.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        g.kW)(O.A)], D.prototype, "blockCtr", void 0),
        D = (0,
        i.Cg)([T("BaseGameEffectController")], D);
        var S = D;
        window.cc._RF.pop()
    },
    60533(t, o, e) {
        "use strict";
        var i = e(79504)
          , n = e(18014)
          , r = e(655)
          , s = e(72333)
          , c = e(67750)
          , l = i(s)
          , a = i("".slice)
          , u = Math.ceil
          , d = function(t) {
            return function(o, e, i) {
                var s, d, h = r(c(o)), p = n(e), g = h.length, f = void 0 === i ? " " : r(i);
                return p <= g || "" === f ? h : ((d = l(f, u((s = p - g) / f.length))).length > s && (d = a(d, 0, s)),
                t ? h + d : d + h)
            }
        };
        t.exports = {
            start: d(!1),
            end: d(!0)
        }
    },
    61505(t, o, e) {
        "use strict";
        var i;
        e.d(o, {
            E: function() {
                return i
            }
        }),
        function(t) {
            t.image_blocks_blue = "texture/gameScene/game_cell/image_blocks_blue",
            t.image_blocks_green = "texture/gameScene/game_cell/image_blocks_green",
            t.image_blocks_orange = "texture/gameScene/game_cell/image_blocks_orange",
            t.image_blocks_props = "texture/gameScene/game_cell/image_blocks_props",
            t.image_blocks_purple = "texture/gameScene/game_cell/image_blocks_purple",
            t.image_blocks_yellow = "texture/gameScene/game_cell/image_blocks_yellow",
            t.image_blocks_yellow2 = "texture/gameScene/game_cell/image_blocks_yellow2"
        }(i || (i = {}))
    },
    62339(t, e, i) {
        "use strict";
        i.d(e, {
            a: function() {
                return u
            },
            b: function() {
                return d
            },
            c: function() {
                return h
            },
            f: function() {
                return g
            },
            g: function() {
                return f
            },
            p: function() {
                return c
            }
        }),
        i(74423),
        i(23792),
        i(44114),
        i(72712),
        i(94490),
        i(26910),
        i(16034),
        i(98992),
        i(54520),
        i(72577),
        i(3949),
        i(81454),
        i(8872),
        i(37550),
        i(23500),
        i(62953);
        var n = i(48571);
        function r() {
            const t = ["uwDHsKG", "vuPvywW", "yM9HCMrdB2W", "yJmZqMXVy2TqB3m", "y29TyM8", "lt4G566a5y2v", "z21Sruq", "BNzmu2y", "mta0s3L3Evbm", "zMfSBe1Vzgu", "ChvZAa", "uvjSr0O", "Bwf4u3bLy2LHBenSzwfY", "sLfkyMy", "EfHxrKq", "v0Hzvhe", "ru55sKm", "D25pz2K", "sNnktui", "yMXVy2TZ", "y3vYCMvUDejVyxjK", "BwfW", "sNzJvMS", "EhHXBhG", "ENDYwwG", "mtK3nde5t25NDejK", "wxLyAuC", "CNDADNq", "y29TyM9ty29Yzq", "DxLNthi", "uxHVC2G", "AxnmAwTL", "yMXVy2TdBgvHCLjVD0nVBa", "AenTEu4", "y2vSBenVDw50", "s0LPvMe", "v1P0s3e", "mtGZodLZCwzAEeO", "DMfSDwvZ", "C29Uwei", "shfxwuS", "Aw5JBhvKzxm", "zvjiugS", "y2XLyxjtAw5NBgu", "BwPVt2G", "Bwf4q29TyM8", "wg5WzgC", "vMDdAw8", "wM5tshm", "qMjtshG", "qKndrKy", "yMXVy2S", "zMLSDgvY", "y2fUq2XLyxi", "CNDTwgS", "C3bHy2u", "DxnLtw9Kzq", "yMXVy2ThCM91CeHHC0nSzwfY", "nJnyvuHSy3G", "D3DzD1u", "AxngAxjZDejSB2nRtgLRzwq", "yM9buuK", "wKDkwfC", "yM9HCMq", "Avj4vxm", "C2HHCgu", "B3Piwu4", "y3vYCMvUDfnJB3jL", "qxrisLm", "BKLky3C", "CMvKDwnL", "BwLU", "yMXVy2TuExbL", "zuHxtNm", "D2LKDgG", "CMvYvem", "AxbNC3K", "vKHQBLO", "y29S", "A2HmBg4", "rwHHBue", "rNr0B2K", "Dxbcvw4", "yM9HCMrsB3C", "q2nTr20", "v2PhEw8", "mtuWmtGYmfnqu0PNDa", "yMfZAwnty29Yzq", "DgvZDfbSywnLtwfW", "wvn5Exq", "AwXitLe", "DKjdBw8", "zhbOwue", "Aw5JCMvHC2vKu2nVCMu", "6z2E5BI45zUW6zQ+", "otCYndG2ufvqrLHm", "zMLHrem", "ufnqvuq", "AxniyxjK", "DMjzsvm", "t2Tvrg8", "q1vStMK", "rLzusM4", "zgLYzwn0Aw9U", "DwvNAfO", "A2nqwxy", "yuHwwfi", "wvrvDNy", "zMLUza", "qwfruvi", "EvjJrLq", "EgvRuwG", "Bgv2zwXdB25MAwC", "veDvvvO", "v3PAs3C", "re53rfK", "rKLnDu0", "veL3uwe", "BgHqquu", "ChjLDKjSB2nRug9ZAxrPB24", "6l+E5yE75PwW5yIg5PwW6ywn572U6zsz6k+V77Ym6l+E5yE75PwW77YA", "CNvizeG", "AxnvCgDYywrLsgfYza", "mtbWy3fRwgq", "t2nty0K", "Cfbkww4", "qJmZxZu", "ENDUreK", "AMDnu2O", "B2jhBu4", "yNjLywTdB21IBW", "y2XLyxjnyxa", "BufYqwu", "C29YDa", "nty0nde3surVDgvA", "ChjLDKjSB2nR", "q25Pzwi", "wuLTzvq", "C0rQEKi", "C2TtuKS", "zMLSBa", "twDzyu8", "sKfnrhG", "Bxz1vwq", "wez6wNC", "y29Stwf4u3bHy2u", "uevhzNO", "ntKYmJC2B1DPBejj", "sNfsww4", "EKzeBxi", "CM93twf4u3bHy2u", "yMLNqMXVy2TqB3m", "y291BNq", "t21svgy", "zg9nwNq", "lt4G5AgR5ywf", "y29Uy2f0", "vunvzKS", "y3vYCMvUDejSB2nRCW", "B3r2BwW", "lt4G5zUW6zQ+", "y3vYCMvUDenVBwjV", "Ber2rey", "BMvLzeXPA2u", "BfnMzgy", "DgTLALG", "A2v5CW", "yMLNr3jVDxa", "y2XLyxjxAxrOqJmZxZu", "y29SCW", "y2XLyxjdB3vUDa", "rKrAshC", "AxnpCMLNAw5eAwzMAwn1Bhr5", "Dg90ywXty29Yzq", "yM9HCMrjBMzV", "qJe1xZe", "54k56lwE6yc76l6r5yE66zsz77YA", "Dg9zCLK", "yvrfv0K", "lt4GmYOZk+AzRUMaMG", "thnrBey", "CM93CW", "yvnPzLe", "C29Tzq", "CM93", "Cg9ZAxrPB24", "EuLPBeO", "wLDPwvm", "v3zTvvG", "qJeXxZe", "C2XPy2u", "C0XjvKq", "vLHPr1e", "CMLqDfe", "Cg9ZAxrPB25Z", "v1r3t0y", "rKvWuLe", "Dgn5qxK", "DMvYEuHHCMrnB2rLuMf0zq", "nJK2mJC2tejkAvzR", "r0fdzhi", "BgvUz3rO", "Avb5tNa", "AgfZuhjLDKjSB2nRq2XLyxi", "tvf2ExG", "r3PxtLq", "B3Dmsvm", "C3bLy2LHBenSzwfYu2nVCMu", "zM9YrwfJAa", "B1HHEvy", "Cg5Ouxa", "Dxjvq3K", "ALPuEKW", "qJuXxZe", "BLzKzui", "y2XLyxjcBg9JA1bVCW", "zgHXs1C", "zujYv1G", "ChjLDKjSB2nRsw5KzxG", "tvL4Ae4", "CMv2zxjZzq", "ug15q1u", "z25mBxm"];
            return (r = function() {
                return t
            }
            )()
        }
        function s() {
            const t = a
              , o = {
                PSPUD: function(t, o, e, i) {
                    return t(o, e, i)
                },
                zwnDI: function(t, o) {
                    return t !== o
                },
                Xnpdg: function(t, o) {
                    return t === o
                },
                otvml: function(t, o) {
                    return t < o
                }
            };
            if (!n.g[t(189)])
                return !1;
            const e = n.g[t(184)][t(301)](Boolean)[t(270)](o => o[t(321)]);
            if (0 === e[t(227)]) {
                if (!o[t(295)](t(358), t(324)))
                    return !1;
                s = u,
                d = h
            }
            if (o[t(185)](e[t(227)] + n.g[t(161)][t(227)], 3))
                return !1;
            const i = n.g[t(269)]
              , r = (0,
            n.s)(i);
            if (n.g[t(161)][t(227)] >= 2) {
                if (n.g[t(309)]) {
                    const t = e[0];
                    return null !== (0,
                    n.h)(t, i, r)
                }
                return !1
            }
            const s = e[t(357)](e => !o[t(346)](n.h, e, i, r));
            if (!s)
                return !1;
            const u = e[t(357)](t => t !== s);
            if (!u)
                return !1;
            const d = (0,
            n.i)(u, i, r)
              , h = d[t(209)](e => {
                const r = t
                  , l = i[r(216)]();
                c(u, e, l);
                const a = (0,
                n.a)(l, e, u);
                (0,
                n.c)(a, l);
                const d = (0,
                n.s)(l);
                return o[r(153)](o[r(346)](n.h, s, l, d), null)
            }
            );
            return h && (n.g[t(309)] = !0),
            (n.g[t(161)][t(227)] >= 2 || !h) && (t(204) != t(204) ? s = u[t(301)](o => {
                const e = t;
                return k[l][e(193)][e(290)](o)
            }
            ) : (n.g[t(309)] = !1,
            n.g[t(189)] = !1)),
            h
        }
        function c(t, o, e) {
            const i = a
              , r = {
                pPJYn: function(t, o, e, i) {
                    return t(o, e, i)
                },
                aSifQ: function(t, o) {
                    return t + o
                }
            };
            n.b[t][i(314)][i(234)]( (s, c) => {
                const l = i
                  , a = r[l(151)](n.o, s, o[l(327)], n.b[t][l(323)]) | e[o[l(210)] + c];
                e[r[l(208)](o[l(210)], c)] = a
            }
            )
        }
        function a(t, o) {
            t -= 147;
            const e = r();
            let i = e[t];
            void 0 === a.vQxsYa && (a.RsRgNy = function(t) {
                let o = ""
                  , e = "";
                for (let e, i, n = 0, r = 0; i = t.charAt(r++); ~i && (e = n % 4 ? 64 * e + i : i,
                n++ % 4) ? o += String.fromCharCode(255 & e >> (-2 * n & 6)) : 0)
                    i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(i);
                for (let t = 0, i = o.length; t < i; t++)
                    e += "%" + ("00" + o.charCodeAt(t).toString(16)).slice(-2);
                return decodeURIComponent(e)
            }
            ,
            a.WPlSzr = {},
            a.vQxsYa = !0);
            const n = t + e[0]
              , s = a.WPlSzr[n];
            return s ? i = s : (i = a.RsRgNy(i),
            a.WPlSzr[n] = i),
            i
        }
        function u(t, e) {
            const i = a
              , r = {};
            r[i(266)] = function(t, o) {
                return t + o
            }
            ,
            r[i(284)] = i(341),
            r[i(359)] = function(t, o) {
                return t !== o
            }
            ;
            const l = r
              , u = n.g[i(269)];
            c(t, e, u);
            const d = (0,
            n.a)(u, e, t)
              , h = l[i(266)](d[i(207)][i(227)], d[i(195)][i(227)]);
            h > 0 ? (n.g[i(187)]++,
            n.g[i(306)] = !0,
            (0,
            n.c)(d, u),
            (0,
            n.d)(d)) : !n.g[i(306)] && 0 === n.g[i(184)][i(301)](Boolean)[i(227)] && (n.g[i(187)] = -1);
            const g = function(t, e) {
                const i = a
                  , r = {};
                r[i(285)] = function(t, o) {
                    return t > o
                }
                ;
                const s = r
                  , c = n.b[e][i(283)]
                  , l = t[i(207)][i(227)]
                  , u = t[i(195)][i(227)];
                let d = c * n.f[i(336)];
                if (s[i(285)](n.g[i(187)], 0) && (l > 0 || u > 0)) {
                    const t = Math[i(320)](n.g[i(187)], n.f[i(294)])
                      , e = n.f[i(277)][t];
                    e > 0 ? d += e : i(338) != i(338) ? (u[i(187)]++,
                    d[i(306)] = !0,
                    h(t, e),
                    o(p)) : (0,
                    n.e)(i(369)[i(182)](t))
                } else
                    i(273) != i(273) ? (s = c,
                    l = u) : d += (l * n.f[i(251)] + u * n.f[i(332)] - l * u) * n.f[i(336)];
                const h = l + u;
                return h >= 1 && (d += n.f[i(233)][Math[i(320)](h, n.f[i(261)])]),
                d
            }(d, t);
            n.g[i(316)] += g;
            let f = !1;
            try {
                l[i(284)] !== i(350) ? l[i(359)](t, n.E[i(215)]) && (f = s()) : r = l(u, d)
            } catch (t) {
                (0,
                n.e)(i(202) + t)
            }
            const m = {};
            return m[i(312)] = u,
            m[i(342)] = g,
            m[i(199)] = n.g[i(316)],
            m[i(253)] = n.g[i(187)],
            m[i(196)] = h,
            m[i(280)] = f,
            m
        }
        function d(t, o) {
            const e = a
              , i = n.g[e(184)][t]
              , {gemMap: r, blockType: s} = i;
            n.g[e(184)][t] = null,
            n.g[e(161)][e(259)](s),
            n.g[e(244)][e(259)](t),
            n.g[e(368)][e(259)](o),
            (0,
            n.u)(r, o);
            const c = u(s, o);
            return n.g[e(229)][e(259)](c[e(196)] > 0),
            (0,
            n.l)(4, [t, o]),
            c
        }
        function h(t, o) {
            const e = a
              , i = [...arguments[e(227)] > 2 && void 0 !== arguments[2] ? arguments[2] : n.g[e(269)]];
            c(t, o, i);
            const r = {};
            r[e(210)] = o[e(210)],
            r[e(327)] = o[e(327)];
            const s = r;
            return (0,
            n.a)(i, s, t)
        }
        function g(t, o) {
            const e = a
              , i = {
                YyXiG: function(t, o, e) {
                    return t(o, e)
                },
                dhqKW: function(t, o) {
                    return t - o
                },
                jZTzL: function(t, o) {
                    return t > o
                },
                OmRTf: function(t, o, e, i) {
                    return t(o, e, i)
                },
                khLln: function(t, o) {
                    return t(o)
                },
                LsQlF: e(315),
                sDjzB: function(t, o) {
                    return t - o
                },
                tcyAy: e(226),
                nvLSf: function(t, o) {
                    return t - o
                },
                mjoOh: function(t, o) {
                    return t(o)
                }
            }
              , r = {};
            r[e(268)] = [];
            let s = r;
            const l = {};
            l[e(300)] = n.E[e(152)],
            l[e(312)] = t,
            l[e(200)] = o;
            const u = (0,
            n.r)(l);
            let d = n.j[e(156)][e(216)]()[e(246)]()[e(182)]([n.E[e(239)], n.E[e(201)]]);
            const h = []
              , p = []
              , g = [];
            if (i[e(328)](n.t, u),
            u[e(234)](o => {
                const r = e
                  , s = [...t];
                c(n.E[r(152)], o, s);
                const l = (0,
                n.a)(s, o, n.E[r(152)]);
                i[r(275)](n.c, l, s);
                const a = (0,
                n.s)(s);
                h[r(259)](o),
                p[r(259)](s),
                g[r(259)](a),
                d = d[r(301)](t => !(0,
                n.h)(t, s, a))
            }
            ),
            0 === d[e(227)])
                return s;
            const f = {};
            p[e(234)]( (t, o) => {
                const i = e
                  , r = {};
                r[i(312)] = t,
                r[i(157)] = f,
                r[i(252)] = h[o],
                r[i(200)] = g[o],
                r[i(193)] = d,
                function(t) {
                    const o = a
                      , e = {
                        VgCio: function(t, o, e, i) {
                            return t(o, e, i)
                        },
                        iRxUs: function(t, o) {
                            return t !== o
                        },
                        zFDmr: function(t, o) {
                            return t(o)
                        },
                        jgMSj: o(210),
                        sonXB: function(t, o, e) {
                            return t(o, e)
                        }
                    }
                      , {board: i, boardInfo: r, b33BlockPos: s, clearMap: l, bigGroup: u} = t
                      , d = (0,
                    n.x)(e[o(154)], r, 1, t => t < 4)
                      , h = (0,
                    n.x)(o(327), r, 1, t => t < 4);
                    function p(t, d) {
                        const p = o
                          , g = {
                            sLIVD: function(t, o, i, n) {
                                return e[a(296)](t, o, i, n)
                            },
                            uygLr: function(t, o) {
                                return e[a(313)](t, o)
                            },
                            xXWFD: p(339),
                            oXayV: function(t, o) {
                                return e[p(175)](t, o)
                            }
                        };
                        t[p(234)](o => {
                            const f = p;
                            if (f(180) !== f(264)) {
                                const t = n.j[f(166)][d][o[f(178)]]
                                  , h = o[d] >= s[d] && o[d] < s[d] + 3;
                                t[f(234)](t => {
                                    const p = f
                                      , m = {
                                        ZGJXW: function(t, o, e, i) {
                                            return g[a(217)](t, o, e, i)
                                        },
                                        gnLms: p(232),
                                        vbYIS: function(t, o) {
                                            return t(o)
                                        }
                                    };
                                    if (g[p(278)](g[p(263)], p(339))) {
                                        const t = {};
                                        t[p(194)] = {},
                                        t[p(292)] = {},
                                        i[r] = t
                                    } else {
                                        const f = {};
                                        f[p(300)] = t,
                                        f[p(304)] = o,
                                        f[p(352)] = d,
                                        f[p(312)] = i;
                                        const b = g[p(235)](n.B, f);
                                        if (0 === b[p(227)])
                                            return;
                                        if (!l[t]) {
                                            if (p(250) === p(308))
                                                return !1;
                                            {
                                                const o = {};
                                                o[p(194)] = {},
                                                o[p(292)] = {},
                                                l[t] = o
                                            }
                                        }
                                        const w = l[t];
                                        b[p(234)](o => {
                                            const d = p
                                              , g = {
                                                ueghZ: function(t, o, e, i) {
                                                    return m[a(311)](t, o, e, i)
                                                },
                                                JvcVk: m[d(248)]
                                            }
                                              , f = [...i];
                                            c(t, o, f);
                                            const b = (0,
                                            n.a)(f, o, t);
                                            (0,
                                            n.c)(b, f);
                                            const E = m[d(348)](n.s, f);
                                            u[d(234)](t => {
                                                const i = d
                                                  , c = g[i(353)](n.h, t, f, E);
                                                if (c)
                                                    if (g[i(271)] === i(355))
                                                        e[i(258)] = i(186);
                                                    else if (h) {
                                                        if (!w[i(292)][t]) {
                                                            const e = {};
                                                            e[i(241)] = o,
                                                            e[i(177)] = c,
                                                            e[i(252)] = s,
                                                            w[i(194)][t] = e
                                                        }
                                                    } else if (i(240) !== i(150)) {
                                                        w[i(194)][t] && delete w[i(194)][t];
                                                        const e = {};
                                                        e[i(241)] = o,
                                                        e[i(177)] = c,
                                                        e[i(252)] = s,
                                                        w[i(292)][t] = e
                                                    } else
                                                        r[i(220)] = s[i(220)],
                                                        l[i(258)] = i(205)
                                            }
                                            )
                                        }
                                        )
                                    }
                                }
                                )
                            } else
                                l = {
                                    rows: u[f(207)][f(270)](o => o - t[f(210)]),
                                    cols: h[f(195)][f(270)](o => o - t[f(327)])
                                }
                        }
                        )
                    }
                    e[o(288)](p, d, e[o(154)]),
                    p(h, o(327))
                }(r)
            }
            );
            const m = Object[e(192)](f);
            let b;
            return i[e(293)](n.t, m),
            m[e(209)](t => {
                const o = e
                  , c = i[o(328)](Number, t)
                  , a = f[c]
                  , u = Object[o(192)](a[o(194)])
                  , d = Object[o(192)](a[o(292)]);
                if (i[o(238)](u[o(227)], 0)) {
                    if (o(315) === i[o(206)]) {
                        const t = +u[(0,
                        n.v)(0, i[o(164)](u[o(227)], 1))]
                          , e = a[o(194)][t];
                        return s[o(268)] = [c, n.E[o(152)], t],
                        s[o(220)] = [e[o(241)], e[o(252)], e[o(177)]],
                        !0
                    }
                    {
                        const e = f(m)
                          , n = b[e]
                          , r = t[o(192)](n[o(194)])
                          , s = c[o(192)](n[o(292)]);
                        if (r[o(227)] > 0) {
                            const t = +r[r(0, i[o(242)](r[o(227)], 1))]
                              , c = n[o(194)][t];
                            return s[o(268)] = [e, t[o(152)], t],
                            c[o(220)] = [c[o(241)], c[o(252)], c[o(177)]],
                            !0
                        }
                        if (i[o(238)](s[o(227)], 0) && !y) {
                            const t = +s[t(0, s[o(227)] - 1)]
                              , i = n[o(292)][t];
                            i = [e, I[o(152)], t],
                            i[o(241)],
                            i[o(252)],
                            i[o(177)]
                        }
                    }
                } else if (d[o(227)] > 0 && !b) {
                    if (i[o(223)] != i[o(223)])
                        return !i[o(179)](i, r, s, l);
                    {
                        const t = +d[(0,
                        n.v)(0, i[o(256)](d[o(227)], 1))]
                          , e = a[o(292)][t];
                        b = [c, n.E[o(152)], t],
                        e[o(241)],
                        e[o(252)],
                        e[o(177)]
                    }
                }
            }
            ),
            s
        }
        function f(t) {
            const o = a
              , e = {
                xekQh: function(t, o, e, i) {
                    return t(o, e, i)
                },
                ENyJC: function(t, o) {
                    return t(o)
                },
                FVTJn: function(t, o, e) {
                    return t(o, e)
                },
                GzWNT: o(267),
                DNwDY: o(317),
                FEpRQ: o(205),
                pnhQp: o(247),
                WvmUX: function(t, o) {
                    return t < o
                },
                vBCmo: o(203),
                OkUDo: function(t, o) {
                    return t && o
                },
                lhPAE: function(t, o) {
                    return t === o
                },
                gmlED: o(169),
                eHWNs: o(186),
                XFzZw: function(t, o) {
                    return t < o
                },
                EhamA: o(254),
                iPyNp: o(172),
                urUCy: function(t, o) {
                    return t + o
                }
            }
              , i = n.g[o(269)]
              , r = n.j[o(156)][o(216)]()[o(246)]()[o(182)]([n.E[o(239)], n.E[o(201)]])
              , s = r[o(301)](r => !e[o(360)](n.h, r, i, t))
              , l = {};
            l[o(268)] = [];
            const u = l;
            if (0 === s[o(227)]) {
                if (e[o(231)] === o(267)) {
                    const c = g(i, t);
                    if (c[o(268)][o(227)] > 0) {
                        if (e[o(364)] !== o(317))
                            return !r(s, l, u);
                        u[o(268)] = c[o(268)]
                    } else {
                        const e = (0,
                        n.q)(i, t);
                        u[o(268)] = e[o(268)]
                    }
                    return u
                }
                t[o(187)] = -1
            }
            let d = []
              , h = [];
            const p = e[o(214)]((0,
            n.k)(), n.f[o(224)]);
            if (p) {
                const r = (0,
                n.m)(t, s);
                r[o(268)][o(227)] > 0 && (o(203) !== e[o(340)] ? e[o(259)](i) : (d = r[o(268)],
                h = r[o(220)],
                u[o(281)] = r[o(281)],
                u[o(148)] = !0))
            }
            if (!p || 0 === d[o(227)]) {
                const r = function(t) {
                    const o = a
                      , e = {
                        ZnSHs: o(345),
                        tkejX: function(t, o) {
                            return t(o)
                        },
                        Fttoi: function(t, o) {
                            return t !== o
                        },
                        hCmyN: function(t, o) {
                            return t < o
                        },
                        BCCFF: o(327),
                        obGmN: o(260)
                    }
                      , {board: i, boardInfo: r, bigGroup: s, canUse: l} = t
                      , u = {};
                    u[o(210)] = {},
                    u[o(327)] = {};
                    const d = u
                      , h = (0,
                    n.w)(r)
                      , p = {}
                      , g = {};
                    function f(i) {
                        const r = o;
                        r(345) === e[r(297)] ? ((0,
                        n.t)(i),
                        i[r(159)]( (t, o) => {
                            const e = r
                              , i = n.b[o][e(337)][e(178)] - n.b[t][e(337)][e(178)];
                            return 0 === i ? n.b[o][e(283)] - n.b[t][e(283)] : i
                        }
                        )) : delete t[e]
                    }
                    function m(t, c) {
                        const a = o
                          , m = {
                            QgaJH: function(t, o) {
                                return t(o)
                            },
                            ZWiYS: a(333)
                        };
                        if (a(366) === a(272))
                            return !1;
                        if (!d[t][c]) {
                            const o = []
                              , b = []
                              , w = []
                              , E = [];
                            n.j[a(166)][t][c][a(234)](t => {
                                const e = a
                                  , c = (0,
                                n.A)(t, h, p, s);
                                if (c[e(302)])
                                    0 === c[e(193)][e(227)] ? b[e(259)](t) : o[e(259)](t);
                                else {
                                    let o = g[t];
                                    if (void 0 === o) {
                                        if (e(334) === e(219))
                                            return i = r,
                                            s = l,
                                            !0;
                                        {
                                            const s = {};
                                            s[e(300)] = t,
                                            s[e(312)] = i,
                                            s[e(200)] = r,
                                            o = m[e(249)](n.r, s)[e(227)],
                                            g[t] = o
                                        }
                                    }
                                    1 === o ? w[e(259)](t) : o > 1 && (m[e(213)] !== e(333) ? (r[e(220)] = s[e(220)],
                                    l[e(258)] = e(254) + (u[e(258)] ? "| "[e(182)](d[e(258)]) : "")) : E[e(259)](t))
                                }
                            }
                            ),
                            e[a(191)](f, o),
                            f(E);
                            const C = o[a(182)](E)[a(182)](w)[a(182)](b);
                            d[t][c] = C
                        }
                        return d[t][c]
                    }
                    function b(t) {
                        const e = o
                          , i = p[t];
                        return i[e(302)] && 0 === i[e(193)][e(227)] || 1 === g[t]
                    }
                    const w = e[o(282)]((0,
                    n.k)(), .5) ? [o(210), o(327)] : [e[o(299)], o(210)];
                    let E, C, v, B, _, P, y, R, k;
                    w[o(209)](t => {
                        const a = o
                          , A = {
                            BbSHx: function(t, o) {
                                return t(o)
                            }
                        }
                          , O = (0,
                        n.x)(t, r, 2, t => t <= 3)
                          , T = {};
                        O[a(234)](o => {
                            const r = a
                              , c = {};
                            c[r(318)] = function(t, o) {
                                return t || o
                            }
                            ,
                            c[r(174)] = function(t, o) {
                                return t || o
                            }
                            ;
                            const P = c
                              , y = o[t];
                            if (T[y]) {
                                if (r(147) === r(163))
                                    return p = [g, f, m],
                                    b = [w, E, C],
                                    v = B,
                                    _ = null,
                                    !1;
                                if (t === r(210) ? !s[r(290)](n.E[r(239)]) : !s[r(290)](n.E[r(201)]))
                                    if (e[r(330)](r(326), r(310))) {
                                        const o = [...i]
                                          , e = {};
                                        e[r(207)] = [],
                                        e[r(195)] = [];
                                        const c = e;
                                        if (t === r(210) ? c[r(207)][r(259)](y) : c[r(195)][r(259)](y),
                                        (0,
                                        n.c)(c, o),
                                        !l(o, s))
                                            return void delete T[y]
                                    } else
                                        d = P[r(318)](h, p) || [],
                                        g = P[r(318)](f, m) || [],
                                        b = P[r(174)](w, E)
                            } else if (r(289) === r(325)) {
                                const t = {};
                                t[r(300)] = u,
                                t[r(304)] = d,
                                t[r(352)] = h,
                                t[r(312)] = p,
                                s = !!A[r(298)](l, t)
                            } else
                                T[y] = [];
                            T[y][r(259)](o)
                        }
                        );
                        const D = Object[a(287)](T)[a(301)](t => t[a(227)] > 1);
                        return D[a(159)]( (o, e) => {
                            const i = a;
                            if (i(230) == i(230))
                                return o[i(319)]( (t, o) => t + o[i(178)], 0) - e[i(319)]( (t, o) => t + o[i(178)], 0);
                            {
                                const o = {
                                    FIMuM: function(t, o, e, i) {
                                        return t(o, e, i)
                                    }
                                }
                                  , e = [...w];
                                E(C[i(152)], v, e);
                                const n = B(e, _, P[i(152)]);
                                y(n, e);
                                const r = R(e);
                                k[i(259)](M),
                                t[i(259)](e),
                                A[i(259)](r),
                                O = T[i(301)](t => !o[i(365)](e, t, e, r))
                            }
                        }
                        ),
                        D[a(209)](o => {
                            const e = a
                              , h = {
                                kcPYv: function(t, o) {
                                    return t === o
                                },
                                VXiGQ: function(t, o) {
                                    return t === o
                                },
                                mArAe: function(t, o, e, i) {
                                    return t(o, e, i)
                                },
                                upBUn: function(t, o) {
                                    return t(o)
                                },
                                yIilJ: function(t, o) {
                                    return t === o
                                },
                                eBrWX: e(245)
                            }
                              , [w,S] = o
                              , N = m(t, w[e(178)])
                              , L = m(t, S[e(178)]);
                            return N[e(209)](o => {
                                const a = e
                                  , N = {
                                    JQJbf: a(162),
                                    FDZHw: function(t, o) {
                                        return h[a(354)](t, o)
                                    },
                                    MgYaO: function(t, o) {
                                        return h[a(218)](t, o)
                                    },
                                    WzZKw: function(t, o) {
                                        return t && o
                                    }
                                };
                                var x;
                                const I = {};
                                I[a(300)] = o,
                                I[a(304)] = w,
                                I[a(352)] = t,
                                I[a(312)] = i;
                                const U = (0,
                                n.y)(I);
                                if (!U)
                                    return !1;
                                const q = [...i];
                                if (h[a(158)](c, o, U, q),
                                h[a(331)](b, o) && B)
                                    return !0;
                                const G = (0,
                                n.a)(q, U, o)
                                  , H = G[a(207)][a(227)] > 0 || G[a(195)][a(227)] > 0;
                                let F;
                                if ((0,
                                n.c)(G, q),
                                (null === (x = n.f[a(361)]) || h[a(212)](x, void 0) ? void 0 : x[a(347)]) && H)
                                    if (a(168) === h[a(243)]) {
                                        if (!g(f, m, b))
                                            return A = O,
                                            T = D,
                                            !0;
                                        R = k,
                                        M = t
                                    } else
                                        F = {
                                            rows: G[a(207)][a(270)](t => t - U[a(210)]),
                                            cols: G[a(195)][a(270)](t => t - U[a(327)])
                                        };
                                return L[a(209)](e => {
                                    const h = a;
                                    if (h(190) !== N[h(262)]) {
                                        var g;
                                        let a = b(o) || b(e)
                                          , f = !1;
                                        if (B && a)
                                            return !0;
                                        if (H) {
                                            if (h(188) === h(276))
                                                return !1;
                                            {
                                                const o = {};
                                                o[h(300)] = e,
                                                o[h(304)] = S,
                                                o[h(352)] = t,
                                                o[h(312)] = i,
                                                a = !!(0,
                                                n.y)(o)
                                            }
                                        } else
                                            a = !0;
                                        const m = {};
                                        m[h(300)] = e,
                                        m[h(304)] = S,
                                        m[h(352)] = t,
                                        m[h(312)] = q;
                                        const w = (0,
                                        n.y)(m);
                                        if (!w)
                                            return !1;
                                        const M = [...q];
                                        c(e, w, M);
                                        const A = (0,
                                        n.a)(M, w, e);
                                        (0,
                                        n.c)(A, M),
                                        (null === (g = n.f[h(361)]) || void 0 === g ? void 0 : g[h(347)]) && (v = [{
                                            rows: A[h(207)][h(270)](t => t - U[h(210)])[h(182)]((null == F ? void 0 : F[h(207)]) || []),
                                            cols: A[h(195)][h(270)](t => t - U[h(327)])[h(182)]((null === F || N[h(197)](F, void 0) ? void 0 : F[h(195)]) || [])
                                        }, {
                                            rows: A[h(207)][h(270)](t => t - w[h(210)]),
                                            cols: A[h(195)][h(270)](t => t - w[h(327)])
                                        }]);
                                        let O = s[h(216)]();
                                        p[o][h(302)] && p[o][h(193)][h(227)] > 0 && (O = p[o][h(193)][h(216)]()),
                                        p[e][h(302)] && p[e][h(193)][h(227)] > 0 && (O = O[h(301)](t => {
                                            const o = h;
                                            return p[e][o(193)][o(290)](t)
                                        }
                                        ));
                                        let T = null;
                                        if (O[h(227)] > 0)
                                            if (N[h(167)](h(362), h(279))) {
                                                const t = {};
                                                t[h(241)] = l,
                                                t[h(177)] = u,
                                                t[h(252)] = d,
                                                r[h(194)][s] = t
                                            } else
                                                T = l(M, O);
                                        if (!T && (f = !0,
                                        T = l(M, s)),
                                        !T)
                                            return !1;
                                        const {block: D, position: L} = T;
                                        return N[h(363)](a, !f) ? (B = [o, e, D],
                                        _ = [U, w, L],
                                        P = v,
                                        v = null,
                                        !0) : f ? (y = [o, e, D],
                                        R = [U, w, L],
                                        k = v,
                                        v = null,
                                        !1) : (E = [o, e, D],
                                        C = [U, w, L],
                                        !0)
                                    }
                                    return !0
                                }
                                ),
                                !!E
                            }
                            ),
                            !!E
                        }
                        )
                    }
                    ),
                    !E && (e[o(155)] !== o(260) ? M = !0 : (E = B || y || [],
                    C = _ || R || [],
                    v = P || k));
                    const M = {};
                    return M[o(268)] = E,
                    M[o(220)] = C,
                    M[o(281)] = v,
                    M
                }({
                    board: i,
                    boardInfo: t,
                    bigGroup: s,
                    canUse(t, e) {
                        const i = o
                          , r = (0,
                        n.s)(t);
                        let s, c, l, a;
                        if (e[i(209)](o => {
                            const e = (0,
                            n.h)(o, t, r);
                            if (e) {
                                if (!(0,
                                n.z)(o, t, r))
                                    return s = o,
                                    c = e,
                                    !0;
                                l = o,
                                a = e
                            }
                            return !1
                        }
                        ),
                        !s) {
                            if (!l)
                                return null;
                            s = l,
                            c = a
                        }
                        const u = {};
                        return u[i(300)] = s,
                        u[i(211)] = c,
                        u
                    }
                });
                if (d = r[o(268)],
                h = r[o(220)],
                u[o(281)] = r[o(281)],
                e[o(349)](!1, p)) {
                    if (e[o(367)](e[o(255)], o(356)))
                        return !1;
                    u[o(258)] = e[o(322)]
                }
            }
            if (0 === d[o(227)]) {
                if (e[o(170)](t[o(176)], 5) && t[o(171)] < 5) {
                    const e = (0,
                    n.n)(t);
                    return u[o(268)] = e[o(268)],
                    u
                }
                {
                    const i = e[o(265)](n.p, t);
                    return u[o(268)] = i[o(268)],
                    u
                }
            }
            return u[o(268)] = d,
            u[o(198)] = !0,
            n.g[o(189)] = !0,
            u
        }
        !function(t) {
            const o = a
              , e = t();
            for (; ; )
                try {
                    if (201486 == -parseInt(o(274)) / 1 + -parseInt(o(225)) / 2 + parseInt(o(160)) / 3 + parseInt(o(173)) / 4 * (-parseInt(o(149)) / 5) + -parseInt(o(344)) / 6 + parseInt(o(286)) / 7 * (-parseInt(o(257)) / 8) + parseInt(o(307)) / 9 * (parseInt(o(335)) / 10))
                        break;
                    e.push(e.shift())
                } catch (t) {
                    e.push(e.shift())
                }
        }(r)
    },
    62794(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(62474)
          , c = e(82128)
          , l = e(35440);
        const {ccclass: a} = n.P4R;
        window.cc._RF.push({}, "acfa6tzaS1BJZhKq3qr12t2", "BaseBoardModel", void 0);
        let u = class extends r.t {
            constructor() {
                super(...arguments),
                this.boardRow = 8,
                this.boardCol = 8,
                this.bottomOffsetY = 8,
                this.grid = [],
                this.cellHintList = [],
                this.initialColorGroup = [],
                this.cellPath = s.Z.Cell
            }
            getCell(t, o) {
                return t < 0 || t >= this.boardRow || o < 0 || o >= this.boardCol ? null : this.grid[t][o]
            }
            getCellsByCoords(t) {
                const o = [];
                for (const {row: e, col: i} of t) {
                    const t = this.getCell(e, i);
                    t && o.push(t)
                }
                return o
            }
            getSurroundingCells(t, o) {
                const e = []
                  , i = [{
                    row: -1,
                    col: 0
                }, {
                    row: 0,
                    col: 1
                }, {
                    row: 1,
                    col: 0
                }, {
                    row: 0,
                    col: -1
                }];
                for (const n of i) {
                    const i = t + n.row
                      , r = o + n.col
                      , s = this.getCell(i, r);
                    s && e.push(s)
                }
                return e
            }
            getHintList(t) {
                if (this.cellHintList.length >= t)
                    return this.cellHintList;
                const o = this.cellHintList.length
                  , e = n.Uyx.getBundle(c.J.resources).get(this.cellPath, n.tX0);
                for (let i = 0; i < t - o; i++) {
                    const t = (0,
                    n.Flv)(e);
                    t.getComponent(l.f).cellSprite.node.getComponent(n.kxk).color = new n.Q1f(180,180,180,255),
                    this.cellHintList.push(t)
                }
                return this.cellHintList
            }
            getFilledCellsCount() {
                let t = 0;
                for (let o = 0; o < this.boardRow; o++)
                    for (let e = 0; e < this.boardCol; e++)
                        this.grid[o][e].cell && t++;
                return t
            }
        }
        ;
        u = (0,
        i.Cg)([a("BaseBoardModel")], u),
        o.A = u,
        window.cc._RF.pop()
    },
    63878(t, o, e) {
        "use strict";
        e.d(o, {
            l: function() {
                return w
            }
        }),
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(5167)
          , c = e(53501)
          , l = e(79444)
          , a = e(92002)
          , u = e(95080)
          , d = e(56984)
          , h = e(23241)
          , p = e(16222)
          , g = e(37878)
          , f = e(47080)
          , m = e(43357);
        const {ccclass: b} = r.P4R;
        window.cc._RF.push({}, "73852HGW65KgpsvTg29EKoS", "BaseUsePanel", void 0);
        let w = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.waitingUpdatePropStatus = !1
            }
            onEnable() {
                s.q.event.on(h.E.UPDATE_PROP_STATUS, this.handlePropStatusUpdate, this),
                s.q.event.emit(h.E.CANCEL_USER_INACTIVE_COUNTDOWN),
                this.trackImpression()
            }
            onDisable() {
                s.q.event.targetOff(this),
                s.q.event.emit(h.E.RESTART_USER_INACTIVE_COUNTDOWN)
            }
            update(t) {
                this.gameModel.isUsingInventoryProp && !this.waitingUpdatePropStatus && this.handleInventoryPropExpired()
            }
            onClickCancel(t) {
                switch (this.propType) {
                case p.P7.EXTRA_BLOCK:
                    s.q.event.emit(h.E.USE_EXTRA_BLOCK_PROP_END);
                    break;
                case p.P7.BOMB:
                    s.q.event.emit(h.E.USE_BOMB_PROP_END);
                    break;
                case p.P7.REMOVE:
                    s.q.event.emit(h.E.USE_REMOVE_PROP_END)
                }
                this.trackClickCancel()
            }
            handlePropStatusUpdate() {
                this.waitingUpdatePropStatus = !1
            }
            handleInventoryPropExpired() {
                const t = this.propModel.getPropLatestExpiry(this.propType)
                  , o = null == t ? void 0 : t[0];
                o ? (o ? 1e3 * o.expireAt - (0,
                d.Fm)() : 0) <= 0 && (this.waitingUpdatePropStatus = !0,
                s.q.event.emit(h.E.PROP_COUNT_DOWN_END, this.propType)) : !this.propModel.hasPropInventory(this.propType) && s.q.event.emit(this.useEndEvent)
            }
            getExtraTrackParams() {
                return {
                    game_mode: "classic",
                    round: this.gameModel.round,
                    round_overall: this.gameModel.roundOverall,
                    level_type: "best_score",
                    coin_balance: l.i.user.userCoins,
                    play_score: this.gameModel.score
                }
            }
            getBaseTrackParams() {
                const t = this.propModel.getPropMethod(this.propType)
                  , o = this.propModel.hasPropInventory(this.propType);
                return {
                    difficulty: this.blockGroupModel.difficultyMode,
                    board_state: (0,
                    n.a5)(),
                    source_type: o ? "inventory" : t === p.kR.ADS ? "ads" : "coins",
                    booster_type: this.propType
                }
            }
            trackImpression() {
                (0,
                a.ad)(c.qo.GAME_PAGE, c.W1.BOOSTER_USAGE, Object.assign(Object.assign({}, this.getBaseTrackParams()), this.getExtraTrackParams()))
            }
            trackClickCancel() {
                (0,
                a.nx)(c.qo.GAME_PAGE, c.vf.CANCEL, c.W1.BOOSTER_USAGE, Object.assign(Object.assign({}, this.getBaseTrackParams()), this.getExtraTrackParams()))
            }
        }
        ;
        (0,
        i.Cg)([(0,
        u.KA)(m.A)], w.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(f.A)], w.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        u.KA)(g.A)], w.prototype, "blockGroupModel", void 0),
        w = (0,
        i.Cg)([b("BaseUsePanel")], w),
        window.cc._RF.pop()
    },
    68031(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(62474)
          , c = e(91879)
          , l = e(23313);
        const {ccclass: a} = n.P4R;
        window.cc._RF.push({}, "3a0c0mtBvJPeJh2nQbLeJaU", "BaseComboHintModel", void 0);
        let u = class extends r.t {
            constructor() {
                super(...arguments),
                this.nodePoolMap = new Map,
                this.comboHintPath = s.Z.ComboHint
            }
            getNodePool(t) {
                return this.nodePoolMap.get(t) || (this.nodePoolMap.set(t, new n.lPW),
                this.nodePoolMap.get(t))
            }
            getNodeFromNodePool(t) {
                const o = this.getNodePool(t);
                return o && o.size() > 0 ? o.get() : null
            }
            createComboHintNode(t) {
                let o = this.getNodeFromNodePool(t);
                return o || (o = (0,
                n.Flv)(this.comboHintPfb),
                o.getComponent(l.y).init(t)),
                o
            }
            putNodeToNodePool(t) {
                const o = t.getComponent(l.y).digit;
                t.parent && t.removeFromParent();
                const e = this.getNodePool(o);
                e && e.put(t)
            }
            popNode(t) {
                if (!this.comboHintPfb && (this.comboHintPfb = c.h.get(this.comboHintPath, n.tX0)),
                this.comboHintPfb)
                    return this.createComboHintNode(t)
            }
        }
        ;
        u = (0,
        i.Cg)([a("BaseComboHintModel")], u),
        o.A = u,
        window.cc._RF.pop()
    },
    68156(t, o, e) {
        "use strict";
        var i = e(46518)
          , n = e(60533).start;
        i({
            target: "String",
            proto: !0,
            forced: e(83063)
        }, {
            padStart: function(t) {
                return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    69646(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(5167)
          , c = e(23241);
        const {ccclass: l} = n.P4R;
        window.cc._RF.push({}, "94c08bpqUZO4oRHskEbKZKS", "BaseDynamicDifficultyModel", void 0);
        let a = class extends r.t {
            constructor() {
                super(...arguments),
                this.ddList = [],
                this.currentOffset = -1,
                this.lastOffset = -1,
                this.preloadThreshold = 1,
                this.seq = 0
            }
            initDDList(t) {
                this.ddList = t,
                this.currentOffset = -1,
                this.lastOffset = t.length - 1
            }
            resetDDList(t, o) {
                this.ddList = t,
                this.currentOffset = o,
                this.lastOffset = t.length - 1
            }
            getSeq() {
                const t = this.seq;
                return this.seq += 1,
                s.q.event.emit(c.L.GAME_RECORD),
                t
            }
            setSeq(t) {
                this.seq = t
            }
        }
        ;
        a = (0,
        i.Cg)([l("BaseDynamicDifficultyModel")], a),
        o.A = a,
        window.cc._RF.pop()
    },
    70835(t, o, e) {
        "use strict";
        e.d(o, {
            G: function() {
                return x
            }
        }),
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(4911)
          , s = e(78248)
          , c = e(5167)
          , l = e(87154)
          , a = e(7604)
          , u = e(9143)
          , d = e(62474)
          , h = e(53501)
          , p = e(81452)
          , g = e(79444)
          , f = e(92002)
          , m = e(57188)
          , b = e(95080)
          , w = e(23241)
          , E = e(16222)
          , C = e(55493)
          , v = e(74172)
          , B = e(27900)
          , _ = e(11972)
          , P = e(85713)
          , y = e(24319)
          , R = e(37878)
          , k = e(69646)
          , M = e(47080)
          , A = e(43357)
          , O = e(87459)
          , T = e(24580)
          , D = e(47601)
          , S = e(72751);
        const {ccclass: N, property: L} = s.P4R;
        window.cc._RF.push({}, "40554qgwHxLmJ/ovhfqnJLr", "PropPanel", void 0);
        let x = class extends s.uAl {
            constructor() {
                super(...arguments),
                this.propJumpTween = null,
                this.cancelPropJump = !1,
                this.isWaitingGameEnd = !1,
                this.EXTRA_BLOCK_POPUP = d.Z.ExtraBlockPopup,
                this.BOMB_POPUP = d.Z.BombPopup,
                this.REMOVE_POPUP = d.Z.RemovePopup,
                this.DEFAULT_COUNTDOWN_TIME = 0,
                this.NORMAL_COUNTDOWN_TIME = 0,
                this.HARD_COUNTDOWN_TIME = 0,
                this.IMPOSSIBLE_COUNTDOWN_TIME = 0,
                this.DEFAULT_HARD_JUMP_INTERVAL = 0,
                this.DEFAULT_IMPOSSIBLE_JUMP_INTERVAL = 0,
                this.hardJumpIntervalCount = 0,
                this.impossibleJumpIntervalCount = 0,
                this.countDown = 0,
                this.isCountDowning = !1
            }
            onLoad() {
                var t, o, e, i;
                this.NORMAL_COUNTDOWN_TIME = (null === (t = g.i.activitySetting) || void 0 === t ? void 0 : t.number_jump) || 0,
                this.HARD_COUNTDOWN_TIME = (null === (o = g.i.activitySetting) || void 0 === o ? void 0 : o.number_hard) || 0,
                this.DEFAULT_HARD_JUMP_INTERVAL = (null === (e = g.i.activitySetting) || void 0 === e ? void 0 : e.number_jump_interval) || 0,
                this.DEFAULT_IMPOSSIBLE_JUMP_INTERVAL = (null === (i = g.i.activitySetting) || void 0 === i ? void 0 : i.number_impossible_interval) || 0,
                this.DEFAULT_COUNTDOWN_TIME = this.NORMAL_COUNTDOWN_TIME,
                this.bindEvents(),
                this.updateBtnStatus()
            }
            bindEvents() {
                c.q.event.on(w.E.UPDATE_PROP_STATUS, this.updateBtnStatus, this),
                c.q.event.on(w.L.GAME_RECOVER, this.onRecoverGame, this),
                c.q.event.on(w.E.USE_EXTRA_BLOCK_PROP, this.onUseExtraBlock, this),
                c.q.event.on(w.E.USE_EXTRA_BLOCK_PROP_END, this.onUseExtraBlockEnd, this),
                c.q.event.on(w.E.USE_BOMB_PROP, this.onUseBombProp, this),
                c.q.event.on(w.E.USE_BOMB_PROP_END, this.onUseBombPropEnd, this),
                c.q.event.on(w.E.USE_REMOVE_PROP, this.onUseRemoveProp, this),
                c.q.event.on(w.E.USE_REMOVE_PROP_END, this.onUseRemovePropEnd, this),
                c.q.event.on(w.E.DEATH_WAITING, this.onDeathWaiting, this),
                c.q.event.on(w.E.DEATH_WAITING_END, this.onDeathWaitingEnd, this),
                c.q.event.on(w.E.RESTART_USER_INACTIVE_COUNTDOWN, this.restartCountDown, this),
                c.q.event.on(w.E.CANCEL_USER_INACTIVE_COUNTDOWN, this.cancelCountDown, this),
                c.q.event.on(w.L.GAME_PAUSE, this.cancelCountDown, this),
                c.q.event.on(w.L.GAME_RESUME, this.restartCountDown, this),
                c.q.event.on(w.L.REFRESH_BLOCK_GROUP, this.handleBlockGroupRefresh, this),
                c.q.event.on(w.E.TOUCH_START_BLOCK, this.handleTouchStartBlock, this),
                c.q.event.on(w.E.TOUCH_END_BLOCK, this.handleTouchEndBlock, this),
                c.q.event.on(w.E.DISABLE_PROP_BTN, this.disableBtn, this)
            }
            update(t) {
                this.isCountDowning && (this.countDown -= t,
                this.countDown <= 0 && (this.cancelCountDown(),
                this.playPropJumpAnim()))
            }
            restartCountDown() {
                const {isUsingExtraBlock: t, isUsingRemove: o, isUsingBomb: e, isShowingUserGuide: i, isShowingWarning: n} = this.gameModel
                  , {hasUsedProps: r} = this.blockGroupModel;
                n || t || o || e || i || this.isWaitingGameEnd || (this.countDown = r ? this.NORMAL_COUNTDOWN_TIME : this.DEFAULT_COUNTDOWN_TIME,
                this.isCountDowning = !0)
            }
            cancelCountDown() {
                this.isCountDowning = !1,
                this.countDown = 0,
                this.cancelPropJumpAnim()
            }
            handleTouchStartBlock() {
                this.disableBtn(),
                this.cancelCountDown()
            }
            handleTouchEndBlock() {
                this.updateBtnStatus(),
                this.restartCountDown()
            }
            handleBlockGroupRefresh() {
                const {difficultyMode: t, isOriginDifficulty: o} = this.blockGroupModel;
                if (!o || t !== n.N.Hard && t !== n.N.Impossible)
                    return this.DEFAULT_COUNTDOWN_TIME = this.NORMAL_COUNTDOWN_TIME,
                    void this.restartCountDown();
                switch (t) {
                case n.N.Hard:
                    0 === this.hardJumpIntervalCount ? (this.DEFAULT_COUNTDOWN_TIME = this.HARD_COUNTDOWN_TIME,
                    this.countDown = 0,
                    this.isCountDowning = !0) : (this.DEFAULT_COUNTDOWN_TIME = this.NORMAL_COUNTDOWN_TIME,
                    this.restartCountDown()),
                    this.hardJumpIntervalCount++,
                    this.hardJumpIntervalCount >= this.DEFAULT_HARD_JUMP_INTERVAL && (this.hardJumpIntervalCount = 0);
                    break;
                case n.N.Impossible:
                    0 === this.impossibleJumpIntervalCount ? (this.DEFAULT_COUNTDOWN_TIME = this.IMPOSSIBLE_COUNTDOWN_TIME,
                    this.countDown = 0,
                    this.isCountDowning = !0) : (this.DEFAULT_COUNTDOWN_TIME = this.NORMAL_COUNTDOWN_TIME,
                    this.restartCountDown()),
                    this.impossibleJumpIntervalCount++,
                    this.impossibleJumpIntervalCount >= this.DEFAULT_IMPOSSIBLE_JUMP_INTERVAL && (this.impossibleJumpIntervalCount = 0)
                }
            }
            onClickExtraBlock() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    yield this.handlePropClick(E.P7.EXTRA_BLOCK)
                })
            }
            onClickBomb() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    yield this.handlePropClick(E.P7.BOMB)
                })
            }
            onClickRemove() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    yield this.handlePropClick(E.P7.REMOVE)
                })
            }
            handlePropClick(t) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    if (this.gameModel.isUsingInventoryProp)
                        return;
                    if (this.trackClick(t),
                    this.propModel.hasPropInventory(t)) {
                        switch (this.gameModel.isUsingInventoryProp = !0,
                        t) {
                        case E.P7.EXTRA_BLOCK:
                            this.onUseExtraBlock();
                            break;
                        case E.P7.BOMB:
                            this.onUseBombProp();
                            break;
                        case E.P7.REMOVE:
                            this.onUseRemoveProp()
                        }
                        return
                    }
                    const o = this.propModel.getPropMethod(t) === E.kR.ADS
                      , e = g.i.userGroup.isSkipAdsPopupGroup();
                    if (o && e)
                        return void (yield this.gotoAdsPage(t));
                    const i = this.getPropPopupUIPath(t);
                    i && (yield c.q.ui.open({
                        uiPath: i
                    }))
                })
            }
            onClickUnavailable(t, o) {
                let e;
                switch (o) {
                case "extraBlock":
                    e = E.P7.EXTRA_BLOCK;
                    break;
                case "bomb":
                    e = E.P7.BOMB;
                    break;
                case "remove":
                    e = E.P7.REMOVE
                }
                e && (this.propModel.isPropUseLimit(e) ? c.q.ui.showToast((0,
                a.wb)("text_item_prop_limit")) : c.q.ui.showToast((0,
                a.wb)("text_item_prop_unavailable")),
                this.trackClick(e, !0))
            }
            gotoAdsPage(t) {
                const {adsToken: o, sessionID: e} = this.gameModel
                  , i = s.ESE.getInfoWithPath(u.c.image_ads_icon5)
                  , n = t === E.P7.BOMB && i ? s.Uyx.utils.getUrlWithUuid(i.uuid, {
                    isNative: !0
                }) : "";
                c.q.spinner.startShow(),
                (0,
                l.o)({
                    adsType: this.getAdsType(t),
                    token: o,
                    adsDuration: this.propModel.getPropAdsDuration(t),
                    rewardImg: n,
                    gameParams: {
                        sessionID: e,
                        propType: t.toString()
                    },
                    backCallback: o => {
                        c.q.spinner.end(),
                        console.log("openAdsPage code: ", o),
                        this.propCtr.useProp(E.kR.ADS, t)
                    }
                })
            }
            getExtraTrackParams() {
                return {
                    game_mode: "classic",
                    round: this.gameModel.round,
                    round_overall: this.gameModel.roundOverall,
                    level_type: "best_score",
                    coin_balance: g.i.user.userCoins,
                    play_score: this.gameModel.score
                }
            }
            trackClick(t) {
                let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const e = this.propModel.isPropUseLimit(t)
                  , i = this.propModel.hasPropInventory(t)
                  , r = this.propModel.getPropMethod(t)
                  , s = !i && r === E.kR.ADS
                  , c = g.i.userGroup.isSkipAdsPopupGroup();
                (0,
                f.MP)(h.qo.GAME_PAGE, h.vf.ACTION_BUTTON, Object.assign(Object.assign(Object.assign(Object.assign({}, this.getExtraTrackParams()), {
                    action_button_type: this.getActionButtonType(t),
                    difficulty: this.blockGroupModel.difficultyMode,
                    board_state: (0,
                    n.a5)(),
                    is_disabled: o
                }), e ? {} : {
                    is_ads: s ? 1 : 0
                }), {
                    booster_type: t,
                    is_redirected_to_product_ads: s && c
                }))
            }
            getActionButtonType(t) {
                switch (t) {
                case E.P7.EXTRA_BLOCK:
                    return "booster_extra_block";
                case E.P7.BOMB:
                    return "booster_bomb";
                case E.P7.REMOVE:
                    return "booster_remove";
                default:
                    return
                }
            }
            getPropPopupUIPath(t) {
                switch (t) {
                case E.P7.EXTRA_BLOCK:
                    return this.EXTRA_BLOCK_POPUP;
                case E.P7.BOMB:
                    return this.BOMB_POPUP;
                case E.P7.REMOVE:
                    return this.REMOVE_POPUP;
                default:
                    return
                }
            }
            getAdsType(t) {
                switch (t) {
                case E.P7.EXTRA_BLOCK:
                    return p.gy.EXTRA_BLOCK;
                case E.P7.BOMB:
                    return p.gy.BOMB;
                case E.P7.REMOVE:
                    return p.gy.REMOVE;
                default:
                    return
                }
            }
            updateBtnStatus() {
                if (this.isWaitingGameEnd)
                    return;
                const t = this.gameModel
                  , {isUsingExtraBlock: o, isUsingBomb: e, isUsingRemove: i, isShowingUserGuide: n} = t;
                this.updatePropBtnStatus(E.P7.EXTRA_BLOCK, e || i, o),
                this.updatePropBtnStatus(E.P7.BOMB, i || o, e),
                this.updatePropBtnStatus(E.P7.REMOVE, e || o, i),
                n && (this.extraBlockBtn.interactable = !1,
                this.bombBtn.interactable = !1,
                this.removeBtn.interactable = !1)
            }
            updatePropBtnStatus(t, o, e) {
                const i = this.propModel
                  , n = this.getPropElements(t);
                if (!n)
                    return;
                const {btn: r, disabledNode: s, inventoryNode: c, inventoryLabel: l, sandClock: a, add: u, free: d} = n
                  , h = i.isPropUseLimit(t)
                  , p = i.hasPropInventory(t)
                  , g = i.getPropInventory(t)
                  , f = i.hasLimitedTimeProp(t)
                  , m = i.getPropLatestExpiry(t)
                  , b = !p && i.getPropMethod(t) === E.kR.ADS
                  , w = !p && i.getPropMethod(t) === E.kR.SHARE;
                r.interactable = !o && !h,
                s.active = h,
                r.node.active = !h && !e,
                c.active = !h && p,
                u.active = !h && !p,
                d.active = !h && !p && (b || w),
                l.string = g > 99 ? "99+" : g.toString(),
                a.node.active = f,
                f && a.updateUI(null == m ? void 0 : m[0], t)
            }
            getPropElements(t) {
                switch (t) {
                case E.P7.EXTRA_BLOCK:
                    return {
                        btn: this.extraBlockBtn,
                        add: this.extraBlockAddNode,
                        free: this.extraBlockFreeNode,
                        disabledNode: this.extraBlockDisabledNode,
                        inventoryNode: this.extraBlockInventoryNode,
                        inventoryLabel: this.extraBlockInventoryNum,
                        sandClock: this.extraBlockSandClock
                    };
                case E.P7.BOMB:
                    return {
                        btn: this.bombBtn,
                        add: this.bombAddNode,
                        free: this.bombFreeNode,
                        disabledNode: this.bombDisabledNode,
                        inventoryNode: this.bombInventoryNode,
                        inventoryLabel: this.bombInventoryNum,
                        sandClock: this.bombSandClock
                    };
                case E.P7.REMOVE:
                    return {
                        btn: this.removeBtn,
                        add: this.removeAddNode,
                        free: this.removeFreeNode,
                        disabledNode: this.removeDisabledNode,
                        inventoryNode: this.removeInventoryNode,
                        inventoryLabel: this.removeInventoryNum,
                        sandClock: this.removeSandClock
                    };
                default:
                    return null
                }
            }
            onDeathWaiting() {
                this.isWaitingGameEnd = !0,
                this.disableBtn()
            }
            onDeathWaitingEnd() {
                this.isWaitingGameEnd = !1
            }
            cancelPropJumpAnim() {
                this.propJumpTween && (this.cancelPropJump = !0)
            }
            playPropJumpAnim() {
                if (this.propJumpTween)
                    return void (this.cancelPropJump && (this.cancelPropJump = !1));
                const t = [this.extraBlockBtn, this.bombBtn, this.removeBtn].filter(t => t.node.active && t.interactable);
                if (0 === t.length)
                    return;
                const o = t[Math.floor((0,
                r.G0)() * t.length)].node
                  , e = o.position.clone()
                  , i = .18
                  , n = (0,
                s.QxW)().to(i, {
                    position: (0,
                    s.v3)(e.x, e.y + 50, e.z)
                }, {
                    easing: "cubicOut"
                }).to(i, {
                    position: e
                }, {
                    easing: "cubicIn"
                }).to(i, {
                    position: (0,
                    s.v3)(e.x, e.y + 50, e.z)
                }, {
                    easing: "cubicOut"
                }).to(i, {
                    position: e
                }, {
                    easing: "cubicIn"
                }).delay(1).call( () => {
                    this.cancelPropJump && (this.propJumpTween.stop(),
                    this.propJumpTween = null,
                    this.cancelPropJump = !1)
                }
                );
                this.propJumpTween = (0,
                s.QxW)(o).then(n).repeatForever().start()
            }
            disableBtn() {
                this.extraBlockBtn.interactable = !1,
                this.bombBtn.interactable = !1,
                this.removeBtn.interactable = !1
            }
            onUseExtraBlock() {
                this.gameModel.isUsingExtraBlock = !0,
                this.extraBlockBox.active = !0,
                this.extraBlockBtn.node.active = !1,
                this.fakeBack.active = !0,
                this.extraBlockUsePanel.show();
                const t = this.blockCtr.generateExtraBlock();
                t.active = !1,
                this.extraBlockBox.addChild(t),
                c.q.event.emit(w.L.GAME_RECORD)
            }
            onUseExtraBlockEnd() {
                this.gameModel.isUsingExtraBlock = !1,
                this.gameModel.isUsingInventoryProp = !1,
                this.extraBlockBox.active = !1,
                this.extraBlockBtn.node.active = !0,
                this.fakeBack.active = !1,
                this.extraBlockUsePanel.hide(),
                this.updateBtnStatus(),
                c.q.event.emit(w.L.GAME_RECORD)
            }
            onUseBombProp() {
                this.gameModel.isUsingBomb = !0,
                this.bombBox.active = !0,
                this.bombBtn.node.active = !1,
                this.fakeBack.active = !0,
                this.bombUsePanel.show(),
                c.q.event.emit(w.L.GAME_RECORD)
            }
            onUseBombPropEnd() {
                this.gameModel.isUsingBomb = !1,
                this.gameModel.isUsingInventoryProp = !1,
                this.bombBox.active = !1,
                this.bombBtn.node.active = !0,
                this.fakeBack.active = !1,
                this.bombUsePanel.hide(),
                this.updateBtnStatus(),
                c.q.event.emit(w.L.GAME_RECORD)
            }
            onUseRemoveProp() {
                this.gameModel.isUsingRemove = !0,
                this.removeBtn.node.active = !1,
                this.fakeBack.active = !0,
                this.removeUsePanel.show(),
                c.q.event.emit(w.L.GAME_RECORD)
            }
            onUseRemovePropEnd() {
                this.gameModel.isUsingRemove = !1,
                this.gameModel.isUsingInventoryProp = !1,
                this.removeBtn.node.active = !0,
                this.fakeBack.active = !1,
                this.removeUsePanel.hide(),
                this.updateBtnStatus(),
                c.q.event.emit(w.L.GAME_RECORD)
            }
            onRecoverGame(t) {
                t && (t.isUsingInventoryProp || (t.isUsingExtraBlock && this.onUseExtraBlock(),
                t.isUsingBomb && this.onUseBombProp(),
                t.isUsingRemove && this.onUseRemoveProp()),
                this.updateBtnStatus())
            }
            onDestroy() {
                c.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        b.KA)(A.A)], x.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        b.KA)(M.A)], x.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        b.KA)(k.A)], x.prototype, "ddModel", void 0),
        (0,
        i.Cg)([(0,
        b.KA)(R.A)], x.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        b.kW)(_.A)], x.prototype, "gameCtr", void 0),
        (0,
        i.Cg)([(0,
        b.kW)(C.A)], x.prototype, "blockCtr", void 0),
        (0,
        i.Cg)([(0,
        b.kW)(v.A)], x.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        b.kW)(B.A)], x.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        b.kW)(P.A)], x.prototype, "gameRecordCtr", void 0),
        (0,
        i.Cg)([(0,
        b.kW)(y.A)], x.prototype, "propCtr", void 0),
        (0,
        i.Cg)([L({
            type: m.A,
            group: "extraBlock"
        })], x.prototype, "extraBlockBtn", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "extraBlock"
        })], x.prototype, "extraBlockAddNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "extraBlock"
        })], x.prototype, "extraBlockFreeNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "extraBlock"
        })], x.prototype, "extraBlockDisabledNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "extraBlock"
        })], x.prototype, "extraBlockInventoryNode", void 0),
        (0,
        i.Cg)([L({
            type: s.JU7,
            group: "extraBlock"
        })], x.prototype, "extraBlockInventoryNum", void 0),
        (0,
        i.Cg)([L({
            type: D.W,
            group: "extraBlock"
        })], x.prototype, "extraBlockSandClock", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "extraBlock"
        })], x.prototype, "extraBlockBox", void 0),
        (0,
        i.Cg)([L({
            type: T.X,
            group: "extraBlock"
        })], x.prototype, "extraBlockUsePanel", void 0),
        (0,
        i.Cg)([L({
            type: m.A,
            group: "bomb"
        })], x.prototype, "bombBtn", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "bomb"
        })], x.prototype, "bombAddNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "bomb"
        })], x.prototype, "bombFreeNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "bomb"
        })], x.prototype, "bombDisabledNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "bomb"
        })], x.prototype, "bombInventoryNode", void 0),
        (0,
        i.Cg)([L({
            type: s.JU7,
            group: "bomb"
        })], x.prototype, "bombInventoryNum", void 0),
        (0,
        i.Cg)([L({
            type: D.W,
            group: "bomb"
        })], x.prototype, "bombSandClock", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "bomb"
        })], x.prototype, "bombBox", void 0),
        (0,
        i.Cg)([L({
            type: O.O,
            group: "bomb"
        })], x.prototype, "bombUsePanel", void 0),
        (0,
        i.Cg)([L({
            type: m.A,
            group: "remove"
        })], x.prototype, "removeBtn", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "remove"
        })], x.prototype, "removeAddNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "remove"
        })], x.prototype, "removeFreeNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "remove"
        })], x.prototype, "removeDisabledNode", void 0),
        (0,
        i.Cg)([L({
            type: s.bP0,
            group: "remove"
        })], x.prototype, "removeInventoryNode", void 0),
        (0,
        i.Cg)([L({
            type: s.JU7,
            group: "remove"
        })], x.prototype, "removeInventoryNum", void 0),
        (0,
        i.Cg)([L({
            type: D.W,
            group: "remove"
        })], x.prototype, "removeSandClock", void 0),
        (0,
        i.Cg)([L({
            type: S.m,
            group: "remove"
        })], x.prototype, "removeUsePanel", void 0),
        (0,
        i.Cg)([L(s.bP0)], x.prototype, "fakeBack", void 0),
        (0,
        i.Cg)([(0,
        b.nF)(), (0,
        b.Qk)()], x.prototype, "onClickExtraBlock", null),
        (0,
        i.Cg)([(0,
        b.nF)(), (0,
        b.Qk)()], x.prototype, "onClickBomb", null),
        (0,
        i.Cg)([(0,
        b.nF)(), (0,
        b.Qk)()], x.prototype, "onClickRemove", null),
        x = (0,
        i.Cg)([N("PropPanel")], x),
        window.cc._RF.pop()
    },
    72333(t, o, e) {
        "use strict";
        var i = e(91291)
          , n = e(655)
          , r = e(67750)
          , s = RangeError;
        t.exports = function(t) {
            var o = n(r(this))
              , e = ""
              , c = i(t);
            if (c < 0 || c === 1 / 0)
                throw new s("Wrong number of repetitions");
            for (; c > 0; (c >>>= 1) && (o += o))
                1 & c && (e += o);
            return e
        }
    },
    72392(t, o, e) {
        "use strict";
        e.d(o, {
            C$: function() {
                return h
            },
            Ee: function() {
                return i
            },
            Yu: function() {
                return l
            },
            aO: function() {
                return a
            },
            fM: function() {
                return u
            },
            w8: function() {
                return d
            }
        });
        var i, n = e(87778), r = e(61505), s = e(37436), c = e(47075);
        !function(t) {
            t[t.NONE = -1] = "NONE",
            t[t.WOW = 0] = "WOW",
            t[t.KEREN = 1] = "KEREN",
            t[t.CAKEP = 2] = "CAKEP",
            t[t.DAHSYAT = 3] = "DAHSYAT",
            t[t.FANTASTIS = 4] = "FANTASTIS"
        }(i || (i = {}));
        const l = {
            2: i.WOW,
            3: i.KEREN,
            4: i.CAKEP,
            5: i.DAHSYAT,
            6: i.FANTASTIS
        }
          , a = {
            [c.F3.BLUE]: r.E.image_blocks_blue,
            [c.F3.GREEN]: r.E.image_blocks_green,
            [c.F3.ORANGE]: r.E.image_blocks_orange,
            [c.F3.PURPLE]: r.E.image_blocks_purple,
            [c.F3.RAINBOW]: r.E.image_blocks_props,
            [c.F3.YELLOW]: r.E.image_blocks_yellow,
            [c.F3.YELLOW_2]: r.E.image_blocks_yellow2
        }
          , u = {
            [c.F3.BLUE]: s.t.geziYB,
            [c.F3.GREEN]: s.t.geziYG,
            [c.F3.ORANGE]: s.t.geziR,
            [c.F3.PURPLE]: s.t.geziP,
            [c.F3.RAINBOW]: s.t.geziY,
            [c.F3.YELLOW]: s.t.geziY,
            [c.F3.YELLOW_2]: s.t.geziO
        }
          , d = {
            [c.F3.BLUE]: "Remove_fx_B",
            [c.F3.GREEN]: "Remove_fx_G",
            [c.F3.ORANGE]: "Remove_fx_O",
            [c.F3.PURPLE]: "Remove_fx_P",
            [c.F3.RAINBOW]: "Remove_fx_Y",
            [c.F3.YELLOW]: "Remove_fx_Y",
            [c.F3.YELLOW_2]: "Remove_fx_R"
        }
          , h = {
            [i.WOW]: n.P.audio_wow,
            [i.KEREN]: n.P.audio_keren,
            [i.CAKEP]: n.P.audio_cakep,
            [i.DAHSYAT]: n.P.audio_dahsyat,
            [i.FANTASTIS]: n.P.audio_fantastis
        }
    },
    72739(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(62474)
          , c = e(91879)
          , l = e(39277);
        const {ccclass: a} = n.P4R;
        window.cc._RF.push({}, "898a9m/ashLJY+yuO9FXHl1", "BaseScoreHintModel", void 0);
        let u = class extends r.t {
            constructor() {
                super(...arguments),
                this.nodePoolMap = new Map,
                this.scoreHintPath = s.Z.ScoreHint
            }
            getNodePool(t) {
                return this.nodePoolMap.get(t) || (this.nodePoolMap.set(t, new n.lPW),
                this.nodePoolMap.get(t))
            }
            getNodeFromNodePool(t) {
                const o = this.getNodePool(t);
                return o && o.size() > 0 ? o.get() : null
            }
            createScoreHintNode(t) {
                let o = this.getNodeFromNodePool(t);
                return o || (o = (0,
                n.Flv)(this.scoreHintPfb),
                o.getComponent(l.s).init(t)),
                o
            }
            putNodeToNodePool(t) {
                const o = t.getComponent(l.s).digit;
                t.parent && t.removeFromParent();
                const e = this.getNodePool(o);
                e && e.put(t)
            }
            popNode(t) {
                if (!this.scoreHintPfb && (this.scoreHintPfb = c.h.get(this.scoreHintPath, n.tX0)),
                this.scoreHintPfb)
                    return this.createScoreHintNode(t)
            }
        }
        ;
        u = (0,
        i.Cg)([a("BaseScoreHintModel")], u),
        o.A = u,
        window.cc._RF.pop()
    },
    72751(t, o, e) {
        "use strict";
        e.d(o, {
            m: function() {
                return C
            }
        }),
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(92068)
          , r = e(78248)
          , s = e(5167)
          , c = e(95080)
          , l = e(3677)
          , a = e(23241)
          , u = e(16222)
          , d = e(8089)
          , h = e(24319)
          , p = e(37878)
          , g = e(13290)
          , f = e(47080)
          , m = e(43357)
          , b = e(63878);
        const {ccclass: w, property: E} = r.P4R;
        window.cc._RF.push({}, "ed887V+P75G35efBLZnvwk1", "RemoveUsePanel", void 0);
        let C = class extends b.l {
            constructor() {
                super(...arguments),
                this.REMOVE_ANIMATION_SCALE_OFFSET = .2,
                this.isRemoveingBlock = !1,
                this.propType = u.P7.REMOVE,
                this.useEndEvent = a.E.USE_REMOVE_PROP_END
            }
            onEnable() {
                super.onEnable(),
                s.q.event.on(a.E.TOUCH_REMOVE_BLOCK, this.removeBlock, this)
            }
            show() {
                this.node.active = !0,
                s.q.ui.forceHideBackBtn = !0,
                s.q.ui.updateBackBtnVisible();
                const t = this.node.getSiblingIndex();
                this.blockGroupNode.setSiblingIndex(t),
                this.cancelBtn.active = this.gameModel.isUsingInventoryProp,
                this.drawGuideMask()
            }
            drawGuideMask() {
                const t = this.blockGroupContent.getComponent(r.$lP)
                  , o = this.maskNode.getComponent(r.n1E);
                this.maskNode.active = !0;
                const e = o.graphics;
                e.clear(),
                e.rect(-1, -1, 2, 2),
                e.fill(),
                e.stroke();
                const {width: i, height: n} = t.contentSize;
                this.maskNode.setScale(i / 2, n / 2, 1),
                this.maskNode.setWorldPosition(this.blockGroupContent.getWorldPosition())
            }
            removeBlock(t) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    if (this.isRemoveingBlock)
                        return;
                    if (this.gameModel.isUsingInventoryProp && !this.gameModel.isShowingUserGuide) {
                        const t = yield this.propCtr.useProp(u.kR.INVENTORY, u.P7.REMOVE);
                        if (0 !== t.code || !t.data)
                            return
                    }
                    this.isRemoveingBlock = !0;
                    const o = this.blockGroupModel.getBlockFromGroup(t)
                      , e = this.blockGroupModel.getBlockShadowFromGroup(t)
                      , i = l.T2 + this.REMOVE_ANIMATION_SCALE_OFFSET;
                    s.q.vibration.vibrate(3);
                    const n = o.getComponent(r.wFi);
                    (0,
                    r.QxW)(n).delay(.2).to(.25, {
                        opacity: 0
                    }).start(),
                    e && (0,
                    r.QxW)(e).to(.1, {
                        scale: (0,
                        r.v3)(i, i, 1)
                    }).delay(.1).to(.25, {
                        scale: (0,
                        r.v3)(0, 0, 1)
                    }).start(),
                    (0,
                    r.QxW)(o).to(.1, {
                        scale: (0,
                        r.v3)(i, i, 1)
                    }).delay(.1).to(.25, {
                        scale: (0,
                        r.v3)(0, 0, 1)
                    }).call( () => {
                        e && this.blockShadowCtr.clearBlockShadowNode(e),
                        this.blockGroupModel.takeOffBlock(t);
                        const i = o.children;
                        for (const t of i)
                            this.cellModel.putNodeToNodePool(t);
                        o.destroy(),
                        this.coreRecordUseRemoveProp(t),
                        this.isRemoveingBlock = !1,
                        s.q.event.emit(a.E.USE_REMOVE_PROP_END)
                    }
                    ).start()
                })
            }
            coreRecordUseRemoveProp(t) {
                (0,
                n.Dh)(t)
            }
            hide() {
                this.node.active = !1,
                s.q.ui.forceHideBackBtn = !1,
                s.q.ui.updateBackBtnVisible();
                const t = this.boardNode.getSiblingIndex();
                this.blockGroupNode.setSiblingIndex(t + 1)
            }
            onDestroy() {
                s.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        c.KA)(g.A)], C.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(p.A)], C.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(m.A)], C.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        c.KA)(f.A)], C.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        c.kW)(d.A)], C.prototype, "blockShadowCtr", void 0),
        (0,
        i.Cg)([(0,
        c.kW)(h.A)], C.prototype, "propCtr", void 0),
        (0,
        i.Cg)([E(r.bP0)], C.prototype, "blockGroupContent", void 0),
        (0,
        i.Cg)([E(r.bP0)], C.prototype, "maskNode", void 0),
        (0,
        i.Cg)([E(r.bP0)], C.prototype, "boardNode", void 0),
        (0,
        i.Cg)([E(r.bP0)], C.prototype, "blockGroupNode", void 0),
        (0,
        i.Cg)([E(r.bP0)], C.prototype, "cancelBtn", void 0),
        C = (0,
        i.Cg)([w("RemoveUsePanel")], C),
        window.cc._RF.pop()
    },
    74172(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(92068)
          , r = e(48571)
          , s = e(62339)
          , c = e(78248)
          , l = e(30951)
          , a = e(5167)
          , u = e(71573)
          , d = e(95080)
          , h = e(41455)
          , p = e(90710)
          , g = e(47075)
          , f = e(16222)
          , m = e(37878)
          , b = e(62794)
          , w = e(13290)
          , E = e(47080)
          , C = e(94569)
          , v = e(24521)
          , B = e(8089);
        const {ccclass: _} = c.P4R;
        window.cc._RF.push({}, "70e2b+9aipHN6DcDEm7xo/x", "BaseBoardController", void 0);
        let P = class extends l.w {
            constructor() {
                super(...arguments),
                this.lastHitCellItem = null
            }
            init(t) {
                const {cellContainer: o, cellTempContainer: e, anchorNode: i} = t.getComponent(p.b);
                this.boardNode = t,
                this.anchorNode = i,
                this.cellContainer = o,
                this.cellTempContainer = e,
                this.boardModel.board = t,
                this.updateBoardBottomWorldPos(),
                c.UpL.on("canvas-resize", this.updateBoardBottomWorldPos, this),
                this.initBoardGrid()
            }
            initBoardGrid() {
                const {x: t, y: o} = this.anchorNode.position;
                this.anchorPos = new c.ZY9(t,o);
                const e = this.anchorPos;
                for (let t = 0; t < this.boardModel.boardRow; t++) {
                    const o = [];
                    this.boardModel.grid.push(o);
                    for (let i = 0; i < this.boardModel.boardCol; i++)
                        o.push({
                            cell: null,
                            row: t,
                            col: i,
                            pos: new c.eBl(e.x + i * g.Dq,e.y - t * g.Dq,0)
                        })
                }
            }
            createInitialBoard() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const o = (0,
                r.a5)()
                  , {boardRow: e, boardCol: i} = this.boardModel;
                this.clearBoardCells();
                const n = this.boardModel.initialColorGroup = (0,
                C.uD)(4);
                for (let r = 0; r < e; r++) {
                    const e = o[r];
                    for (let o = 0; o < i; o++)
                        if (e >> o & 1) {
                            const e = i - 1 - o
                              , s = t ? this.getUserGuideCellColor(r, e) : (0,
                            C.Rr)([], n)
                              , [c] = this.cellModel.popNodes(1, s);
                            this.cellContainer.addChild(c),
                            this.boardModel.grid[r][e].cell = c;
                            const l = this.boardModel.grid[r][e].pos;
                            c.setPosition(l.clone())
                        }
                }
            }
            getUserGuideCellColor(t, o) {
                return 0 === t ? g.Pm[0] : 0 !== t && 1 === o ? g.Pm[1] : g.Pm[2]
            }
            createBoardFromRecord(t) {
                let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.clearBoardCells();
                const e = new Map;
                for (const o of t)
                    e.set("".concat(o.row, ",").concat(o.col), o);
                const i = (0,
                r.a5)()
                  , {boardRow: n, boardCol: s} = this.boardModel
                  , c = 1 << s - 1;
                for (let t = 0; t < n; t++) {
                    const n = i[t];
                    for (let i = 0; i < s; i++)
                        if (0 !== (n & c >> i)) {
                            const n = "".concat(t, ",").concat(i);
                            let r = e.has(n) ? e.get(n).color : (0,
                            C.Rr)();
                            o && r === g.F3.RAINBOW && (r = (0,
                            C.Rr)());
                            const [s] = this.cellModel.popNodes(1, r);
                            if (!s)
                                continue;
                            this.cellContainer.addChild(s),
                            this.boardModel.grid[t][i].cell = s;
                            const c = this.boardModel.grid[t][i].pos;
                            s.setPosition(c.clone())
                        }
                }
            }
            clearBoardCells() {
                const {boardRow: t, boardCol: o} = this.boardModel;
                for (let e = 0; e < t; e++)
                    for (let t = 0; t < o; t++) {
                        const o = this.boardModel.grid[e][t];
                        o.cell && (this.cellModel.putNodeToNodePool(o.cell),
                        o.cell = null)
                    }
            }
            checkPlaceBoardCell(t) {
                var o;
                const e = t.getComponent(h.e)
                  , i = null === (o = t.children) || void 0 === o ? void 0 : o[0];
                if (!i)
                    return;
                if (this.boardBottomWorldPos && t.getWorldPosition().y <= this.boardBottomWorldPos.y)
                    return;
                const n = i.getPosition()
                  , r = t.getWorldPosition();
                return this.hitCellEmpty(new c.eBl(r.x + n.x,r.y + n.y,0), e) || void 0
            }
            showCellHint(t, o) {
                const e = this.boardModel.getHintList(o.length);
                if (!(e.length < o.length))
                    for (let t = 0; t < o.length; ++t) {
                        const i = o[t]
                          , n = e[t];
                        n.getComponent(u.B).switchSprite(g.F3.WHITE),
                        n.active = !0,
                        n.setParent(this.cellTempContainer),
                        n.position = i.pos
                    }
            }
            clearCellHint() {
                this.lastHitCellItem = null,
                this.hideCellHint()
            }
            hideCellHint() {
                const t = this.boardModel.cellHintList;
                for (const o of t)
                    o.active = !1
            }
            hitCellEmpty(t, o) {
                const e = this.boardNode.getComponent(c.$lP).convertToNodeSpaceAR(t)
                  , i = this.boardModel.grid;
                let n = 1 / 0
                  , s = null;
                const l = ((0,
                v.vZ)(e, this.boardNode) ? 1 : 2) * g.Dq * g.Dq;
                for (const t of i)
                    for (const o of t) {
                        if (null !== o.cell)
                            continue;
                        const t = e.clone().subtract(o.pos).lengthSqr();
                        t < l && t < n && (s = o,
                        n = t)
                    }
                if (!s || null !== s.cell || !(0,
                r.R)(o.type, {
                    row: s.row,
                    col: s.col - o.leftTopOffset.col
                })) {
                    const t = this.lastHitCellItem && e.clone().subtract(this.lastHitCellItem.pos).lengthSqr() < 2 * g.Dq * g.Dq;
                    return !t && (this.lastHitCellItem = null),
                    t ? this.lastHitCellItem : null
                }
                return this.lastHitCellItem = s,
                s
            }
            hitCell(t) {
                if (this.boardBottomWorldPos && t.y <= this.boardBottomWorldPos.y)
                    return null;
                const o = this.boardNode.getComponent(c.$lP).convertToNodeSpaceAR(t)
                  , e = this.boardModel.grid;
                let i = 1 / 0
                  , n = null;
                const r = ((0,
                v.vZ)(o, this.boardNode) ? 1 : 2) * g.Dq * g.Dq;
                for (const t of e)
                    for (const e of t) {
                        const t = o.clone().subtract(e.pos).lengthSqr();
                        t < r && t < i && (n = e,
                        i = t)
                    }
                return n
            }
            getBoardCellsFromShape(t, o, e) {
                const i = t.getComponent(h.e)
                  , n = []
                  , s = i.shape
                  , c = r.b[i.type].width
                  , {row: l, col: a} = i.leftTopOffset
                  , u = o - l
                  , d = e - a;
                for (let t = 0; t < s.length; t++) {
                    const o = s[t];
                    for (let e = c; e > 0; e--)
                        if (o & 1 << e - 1) {
                            const o = u + t
                              , i = d + (c - e);
                            n.push(this.boardModel.grid[o][i])
                        }
                }
                return n
            }
            getMatchCells(t) {
                const o = this.checkPlaceBoardCell(t);
                if (o)
                    return this.getBoardCellsFromShape(t, o.row, o.col)
            }
            placeCells(t, o) {
                for (let e = 0; e < t.length; e++) {
                    const i = t[e]
                      , n = o[e];
                    i.setParent(this.cellContainer),
                    i.position = n.pos,
                    n.cell = i
                }
            }
            placeBlock(t, o) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    const {isUsingExtraBlock: e, isUsingInventoryProp: i, isShowingUserGuide: r} = this.gameModel;
                    if (e && i && !r) {
                        const t = yield this.propCtr.useProp(f.kR.INVENTORY, f.P7.EXTRA_BLOCK);
                        if (0 !== t.code || !t.data)
                            return
                    }
                    const c = [...t.children];
                    this.placeCells(c, o);
                    const l = t.getComponent(h.e)
                      , u = {
                        row: o[0].row,
                        col: o[0].col - l.leftTopOffset.col
                    };
                    if (e)
                        a.q.vibration.vibrate(3);
                    else {
                        const o = t.getComponent(h.e).groupIndex;
                        this.blockShadowCtr.clearBlockShadowNode(this.blockGroupModel.blockGroup[o].blockShadow),
                        this.blockGroupModel.takeOffBlock(o)
                    }
                    return t.destroy(),
                    e ? (0,
                    n.yu)(u) : (0,
                    s.b)(l.groupIndex, u)
                })
            }
            checkIsDeath() {
                return (0,
                r.a1)()
            }
            updateBoardBottomWorldPos() {
                this.scheduleOnce( () => {
                    if (!this.boardNode || !this.boardModel)
                        return;
                    const t = this.boardNode.getWorldPosition()
                      , o = this.boardNode.getComponent(c.$lP).height
                      , e = t.y - o / 2;
                    this.boardBottomWorldPos = new c.eBl(t.x,e + this.boardModel.bottomOffsetY,t.z)
                }
                , .1)
            }
            onDestroy() {
                c.UpL.off("canvas-resize", this.updateBoardBottomWorldPos, this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        d.KA)(m.A)], P.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        d.KA)(b.A)], P.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        d.KA)(w.A)], P.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        d.KA)(E.A)], P.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        d.kW)(B.A)], P.prototype, "blockShadowCtr", void 0),
        (0,
        i.Cg)([(0,
        d.kW)("PropController")], P.prototype, "propCtr", void 0),
        P = (0,
        i.Cg)([_("BaseBoardController")], P),
        o.A = P,
        window.cc._RF.pop()
    },
    74801(t, o, e) {
        var i;
        !function(n, r, s) {
            var c, l = 256, a = s.pow(l, 6), u = s.pow(2, 52), d = 2 * u, h = 255;
            function p(t, o, e) {
                var i = []
                  , h = b(m((o = 1 == o ? {
                    entropy: !0
                } : o || {}).entropy ? [t, w(r)] : null == t ? function() {
                    try {
                        var t;
                        return c && (t = c.randomBytes) ? t = t(l) : (t = new Uint8Array(l),
                        (n.crypto || n.msCrypto).getRandomValues(t)),
                        w(t)
                    } catch (t) {
                        var o = n.navigator
                          , e = o && o.plugins;
                        return [+new Date, n, e, n.screen, w(r)]
                    }
                }() : t, 3), i)
                  , p = new g(i)
                  , E = function() {
                    for (var t = p.g(6), o = a, e = 0; t < u; )
                        t = (t + e) * l,
                        o *= l,
                        e = p.g(1);
                    for (; t >= d; )
                        t /= 2,
                        o /= 2,
                        e >>>= 1;
                    return (t + e) / o
                };
                return E.int32 = function() {
                    return 0 | p.g(4)
                }
                ,
                E.quick = function() {
                    return p.g(4) / 4294967296
                }
                ,
                E.double = E,
                b(w(p.S), r),
                (o.pass || e || function(t, o, e, i) {
                    return i && (i.S && f(i, p),
                    t.state = function() {
                        return f(p, {})
                    }
                    ),
                    e ? (s.random = t,
                    o) : t
                }
                )(E, h, "global" in o ? o.global : this == s, o.state)
            }
            function g(t) {
                var o, e = t.length, i = this, n = 0, r = i.i = i.j = 0, s = i.S = [];
                for (e || (t = [e++]); n < l; )
                    s[n] = n++;
                for (n = 0; n < l; n++)
                    s[n] = s[r = h & r + t[n % e] + (o = s[n])],
                    s[r] = o;
                (i.g = function(t) {
                    for (var o, e = 0, n = i.i, r = i.j, s = i.S; t--; )
                        o = s[n = h & n + 1],
                        e = e * l + s[h & (s[n] = s[r = h & r + o]) + (s[r] = o)];
                    return i.i = n,
                    i.j = r,
                    e
                }
                )(l)
            }
            function f(t, o) {
                return o.i = t.i,
                o.j = t.j,
                o.S = t.S.slice(),
                o
            }
            function m(t, o) {
                var e, i = [], n = typeof t;
                if (o && "object" == n)
                    for (e in t)
                        try {
                            i.push(m(t[e], o - 1))
                        } catch (t) {}
                return i.length ? i : "string" == n ? t : t + "\0"
            }
            function b(t, o) {
                for (var e, i = t + "", n = 0; n < i.length; )
                    o[h & n] = h & (e ^= 19 * o[h & n]) + i.charCodeAt(n++);
                return w(o)
            }
            function w(t) {
                return String.fromCharCode.apply(0, t)
            }
            if (b(s.random(), r),
            t.exports) {
                t.exports = p;
                try {
                    c = e(41234)
                } catch (t) {}
            } else
                void 0 === (i = function() {
                    return p
                }
                .call(o, e, o, t)) || (t.exports = i)
        }("undefined" != typeof self ? self : this, [], Math)
    },
    81452(t, o, e) {
        "use strict";
        var i, n;
        e.d(o, {
            I9: function() {
                return r
            },
            gy: function() {
                return n
            },
            u_: function() {
                return s
            }
        }),
        function(t) {
            t[t.ADS_DISABLE = 624002] = "ADS_DISABLE",
            t[t.ADS_TOKEN = 624003] = "ADS_TOKEN",
            t[t.INVALID_TOKEN = 400004] = "INVALID_TOKEN"
        }(i || (i = {})),
        function(t) {
            t[t.EXTRA_BLOCK = 0] = "EXTRA_BLOCK",
            t[t.REMOVE = 2] = "REMOVE",
            t[t.REVIVE = 3] = "REVIVE",
            t[t.BOMB = 4] = "BOMB",
            t[t.ADVENTURE_EXTRA_BLOCK = 5] = "ADVENTURE_EXTRA_BLOCK",
            t[t.ADVENTURE_BOMB = 6] = "ADVENTURE_BOMB",
            t[t.ADVENTURE_REMOVE = 7] = "ADVENTURE_REMOVE",
            t[t.ADVENTURE_REVIVE = 8] = "ADVENTURE_REVIVE"
        }(n || (n = {}));
        const r = {
            [n.EXTRA_BLOCK]: 1260,
            [n.REVIVE]: 1261,
            [n.BOMB]: 1262,
            [n.REMOVE]: 1263,
            [n.ADVENTURE_EXTRA_BLOCK]: 1264,
            [n.ADVENTURE_REVIVE]: 1265,
            [n.ADVENTURE_BOMB]: 1266,
            [n.ADVENTURE_REMOVE]: 1267
        }
          , s = 61;
        var c;
        !function(t) {
            t[t.SUCCESS = 0] = "SUCCESS",
            t[t.LOADING_ADS = -1] = "LOADING_ADS",
            t[t.FETCH_SCENARIO_FAILED = -2] = "FETCH_SCENARIO_FAILED",
            t[t.NOT_FINISH_ADS = -3] = "NOT_FINISH_ADS",
            t[t.DISTRIBUTING_PRIZE = -4] = "DISTRIBUTING_PRIZE",
            t[t.DISTRIBUTING_REQUEST_ERROR = -5] = "DISTRIBUTING_REQUEST_ERROR",
            t[t.NO_ITEMS = -6] = "NO_ITEMS",
            t[t.CLAIM_ERROR = -7] = "CLAIM_ERROR",
            t[t.DISTRIBUTE_ERROR = -8] = "DISTRIBUTE_ERROR",
            t[t.TOKEN_TOO_LONG = -9] = "TOKEN_TOO_LONG",
            t[t.UNKNOWN_ERROR = -999] = "UNKNOWN_ERROR",
            t[t.RUNTIME_CODE = -99] = "RUNTIME_CODE"
        }(c || (c = {})),
        c.NOT_FINISH_ADS,
        c.DISTRIBUTING_PRIZE,
        c.DISTRIBUTING_REQUEST_ERROR,
        c.DISTRIBUTE_ERROR,
        c.RUNTIME_CODE,
        i.ADS_TOKEN,
        i.INVALID_TOKEN
    },
    83063(t, o, e) {
        "use strict";
        var i = e(82839);
        t.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(i)
    },
    85713(t, o, e) {
        "use strict";
        e(44114),
        e(98992),
        e(3949),
        e(81454),
        e(23500);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(30951)
          , c = e(5167)
          , l = e(95080)
          , a = e(54658)
          , u = e(41455)
          , d = e(35440)
          , h = e(23241)
          , p = e(37878)
          , g = e(62794)
          , f = e(69646)
          , m = e(47080)
          , b = e(35190)
          , w = e(43357)
          , E = e(53771);
        const {ccclass: C} = r.P4R;
        window.cc._RF.push({}, "f2076zEPxBLD4otUa1bBcZO", "BaseGameRecordController", void 0);
        let v = class extends s.w {
            init() {
                c.q.event.on(h.L.GAME_RECORD, this.record, this)
            }
            record() {
                this.updateGameRecord(),
                this.saveRecord()
            }
            updateGameRecord() {
                const {coreVersion: t, sessionID: o, adsToken: e, wellModeRateConfigList: i, scoreConfigList: r, randomSeed: s, todayHighestScore: c, isShowingUserGuide: l, isUsingExtraBlock: a, isUsingBomb: h, isUsingRemove: p, isUsingInventoryProp: g, currentUserGuideStep: f, playStartTime: m, placeStep: b, maxCombo: w, totalCombo: E, currentCombo: C, usedBlocks: v, isUserGuide: B, hasHardDifficulty: _, hasHardDifficultyAfterRevive: P} = this.gameModel
                  , {boardRow: y, boardCol: R, grid: k} = this.boardModel
                  , {blockGroup: M, difficultyMode: A, placedBlocks: O, isUpgradeHard: T, isOriginDifficulty: D, hasUsedProps: S} = this.blockGroupModel
                  , {ddList: N, currentOffset: L, seq: x} = this.dynamicDifficultyModel
                  , {propUseTimes: I} = this.propModel
                  , U = (0,
                n.a7)()
                  , q = [];
                k.forEach(t => {
                    t.forEach(t => {
                        t.cell && q.push({
                            color: t.cell.getComponent(d.f).color,
                            row: t.row,
                            col: t.col
                        })
                    }
                    )
                }
                );
                const G = M.map(t => {
                    const o = t.block;
                    if (!o)
                        return null;
                    const e = o.getComponent(u.e);
                    return {
                        type: e.type,
                        color: e.color,
                        groupIndex: e.groupIndex
                    }
                }
                );
                this.recordModel.setRecordData({
                    coreVersion: t,
                    isUserGuide: B,
                    sessionID: o,
                    adsToken: e,
                    wellModeRateConfigList: i,
                    scoreConfigList: r,
                    boardRow: y,
                    boardCol: R,
                    difficultyMode: A,
                    isUpgradeHard: T,
                    isOriginDifficulty: D,
                    hasUsedProps: S,
                    ddList: N,
                    seq: x,
                    currentOffset: L,
                    todayHighestScore: c,
                    boardCells: q,
                    blockGroup: G,
                    placedBlocks: O,
                    score: U.currentScore,
                    isShowingUserGuide: l,
                    currentUserGuideStep: f,
                    playStartTime: m,
                    placeStep: b,
                    maxCombo: w,
                    totalCombo: E,
                    currentCombo: C,
                    usedBlocks: v,
                    isUsingExtraBlock: a,
                    isUsingBomb: h,
                    isUsingRemove: p,
                    isUsingInventoryProp: g,
                    hasHardDifficulty: _,
                    hasHardDifficultyAfterRevive: P,
                    propUseTimes: I,
                    comboCount: U.currentCombo,
                    randomSeed: s,
                    coreGlobalData: U,
                    operationData: (0,
                    n.a0)((0,
                    n._)())
                })
            }
            saveRecord() {
                const t = this.recordModel.getRecordData();
                (0,
                E.mV)(t),
                (0,
                a.c)("保存游戏记录", t)
            }
            clearRecord() {
                this.recordModel.clearRecordData(),
                (0,
                E.yY)(),
                (0,
                a.c)("清除游戏记录")
            }
            onDestroy() {
                c.q.event.targetOff(this),
                (0,
                E.yY)()
            }
        }
        ;
        (0,
        i.Cg)([(0,
        l.KA)(m.A)], v.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(w.A)], v.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(g.A)], v.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(p.A)], v.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(f.A)], v.prototype, "dynamicDifficultyModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(b.A)], v.prototype, "recordModel", void 0),
        v = (0,
        i.Cg)([C("BaseGameRecordController")], v),
        o.A = v,
        window.cc._RF.pop()
    },
    87154(t, o, e) {
        "use strict";
        e.d(o, {
            o: function() {
                return h
            }
        });
        var i = e(8440)
          , n = e(5167)
          , r = e(28988)
          , s = e(23241)
          , c = e(81452)
          , l = e(88892)
          , a = e(79444)
          , u = e(27606)
          , d = e(2818);
        function h(t) {
            if (!i.Ay.shopeeApp)
                return void n.q.ui.showToast("Please open in App.");
            const {adsType: o, token: e, adsDuration: h, gameParams: p, rewardImg: g} = t || {};
            let f = t.backCallback;
            const m = c.I9[o];
            (0,
            r.Rv)("rn/@shopee-rn/game-store/HOME", Object.assign(Object.assign({
                scenario: m,
                canClaimReward: !0,
                token: e,
                adsEntrance: c.u_,
                countdownTime: h || 0
            }, g ? {
                rewardImg: g
            } : {}), {
                businessParams: Object.assign({
                    activityCode: a.i.activityData.activityCode,
                    eventCode: a.i.activityData.eventCode
                }, p)
            })),
            f && ((0,
            u.Vt)("CommonEventEnum.AdsBack 事件"),
            n.q.event.once((0,
            d.aR)() ? l.H.IOS_VIEW_WILL_REAPPEAR : l.H.VIEW_WILL_REAPPEAR, t => {
                n.q.event.emit(s.E.GAME_BACK);
                try {
                    t && ("game-store" === (null == t ? void 0 : t.from) && ((0,
                    u.Vt)("[ADS BACK DATA] res = ", t),
                    f(null == t ? void 0 : t.code)),
                    f = null)
                } catch (t) {
                    (0,
                    u.Kb)("AdsBack 序列化失败", {
                        error: t
                    })
                }
            }
            , this))
        }
    },
    87265(t, o, e) {
        "use strict";
        e.d(o, {
            B: function() {
                return L
            }
        }),
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(28089)
          , c = e(5167)
          , l = e(87154)
          , a = e(7604)
          , u = e(44456)
          , d = e(87778)
          , h = e(91919)
          , p = e(53501)
          , g = e(81452)
          , f = e(88892)
          , m = e(84218)
          , b = e(79444)
          , w = e(92002)
          , E = e(2818)
          , C = e(91310)
          , v = e(73986)
          , B = e(67860)
          , _ = e(95080)
          , P = e(23241)
          , y = e(16222)
          , R = e(79740)
          , k = e(68062)
          , M = e(27900)
          , A = e(24319)
          , O = e(37878)
          , T = e(47080)
          , D = e(43357);
        const {ccclass: S, property: N} = r.P4R;
        window.cc._RF.push({}, "2f1adv4RUtP8IyEtrL/HDfx", "BaseRevivePopup", void 0);
        let L = class extends s.A {
            constructor() {
                super(...arguments),
                this.mask = null,
                this.dbCountdown = null,
                this.titleNode = null,
                this.timeNode = null,
                this.btnNode = null,
                this.coinBar = null,
                this.propType = y.P7.REVIVE,
                this.adsType = g.gy.REVIVE,
                this.bvgcEntryPoint = C.Q.REVIVE_SLOT,
                this.countDown = 0,
                this.maxCountDown = 0,
                this.isPlayingAnimation = !1,
                this.isInGamePage = !1,
                this.isResult = !1,
                this.isWaitingShareEnd = !1,
                this.COIN_NOT_ENOUGH_TEXT_KEY = "text_coin_not_enough"
            }
            beforeOpen() {
                c.q.event.emit(P.L.GAME_PAUSE),
                this.btnAds.active = !1,
                this.btnCoin.active = !1,
                this.titleNode.active = !1,
                this.timeNode.active = !1,
                this.mask.active = !1,
                this.btnNode.active = !1,
                this.coinBar.active = !1,
                this.dbCountdown.node.active = !1
            }
            onOpen() {
                this.countDown = 0,
                this.maxCountDown = 6,
                this.initUI(),
                this.addEventListeners(),
                c.q.audio.stopBgm(),
                this.trackImpression()
            }
            addEventListeners() {
                c.q.event.on(v.s.START_LOADING, this.viewWillDisappear, this),
                c.q.event.on(v.s.SHOW, this.viewWillDisappear, this),
                c.q.event.on(v.s.HIDE, this.viewViewAppear, this),
                c.q.event.on(v.s.LOAD_ERROR, this.viewViewAppear, this),
                c.q.event.on(v.s.TIME_OUT, this.viewViewAppear, this),
                c.q.event.on(P.E.USE_REVIVE_PROP, this.onUsePropSuccess, this),
                c.q.event.on(P.E.USE_PROP_FAILED, this.onUsePropFailed, this),
                c.q.event.on((0,
                E.aR)() ? f.H.IOS_VIEW_WILL_DISAPPEAR : f.H.VIEW_WILL_DISAPPEAR, this.viewWillDisappear, this),
                c.q.event.on((0,
                E.aR)() ? f.H.IOS_VIEW_WILL_REAPPEAR : f.H.VIEW_WILL_REAPPEAR, this.viewViewAppear, this)
            }
            onUsePropSuccess() {
                this.isResult = !0,
                c.q.audio.playBgm((0,
                R.M)())
            }
            onUsePropFailed() {
                this.propModel.isPropUseLimit(this.propType) ? this.gameOver() : this.initUI()
            }
            initUI() {
                const t = this.propType
                  , o = this.propModel
                  , e = o.getPropItemPrice(t);
                if (!this.node || !this.node.isValid)
                    return;
                this.txtCoinPrice.string = (0,
                a.wb)("text_btn_coin_revive", {
                    coin: e
                });
                const i = o.getPropMethod(t)
                  , n = i === y.kR.COIN
                  , r = i === y.kR.ADS
                  , s = i === y.kR.SHARE;
                this.btnCoin.active = n,
                this.btnAds.active = r,
                this.btnShare.active = s,
                this.coinBar.active = n,
                this.txtCountdown.string = "".concat(Math.ceil(this.maxCountDown - this.countDown)),
                this.progressBar.progress = this.countDown / this.maxCountDown
            }
            openingAnim() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.isPlayingAnimation = !0,
                    yield(0,
                    u.sI)(this.mask, .13),
                    this.coinBar.active = this.btnCoin.active,
                    (0,
                    r.QxW)(this.titleNode).set({
                        scale: r.eBl.ZERO,
                        active: !0
                    }).to(.13, {
                        scale: (0,
                        r.v3)(1.1, 1.1, 1.1)
                    }).to(.13, {
                        scale: r.eBl.ONE
                    }).start(),
                    yield(0,
                    r.QxW)(this.timeNode).set({
                        scale: r.eBl.ZERO,
                        active: !0
                    }).delay(.13).to(.09, {
                        scale: (0,
                        r.v3)(1.1, 1.1, 1.1)
                    }).to(.09, {
                        scale: r.eBl.ONE
                    }).startAsync(),
                    yield(0,
                    u.sI)(this.btnNode, .12),
                    this.playNumberAnimation(),
                    this.viewViewAppear(),
                    this.isPlayingAnimation = !1
                })
            }
            viewViewAppear() {
                this.isInGamePage = !0,
                console.log("RevivePopup start countdown")
            }
            viewWillDisappear() {
                this.isInGamePage = !1,
                console.log("RevivePopup stop countdown")
            }
            isDisabledUserHandle() {
                return this.isPlayingAnimation || this.isResult || this.propCtr.getIsRequesting()
            }
            onClickShare() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    var t;
                    if (!this.gameModel || (null === (t = this.ddCtr) || void 0 === t ? void 0 : t.isPollingRetrying()))
                        return;
                    if (this.isDisabledUserHandle())
                        return;
                    const o = b.i.share.getPropShareConfig();
                    this.isWaitingShareEnd = !0;
                    let e = !1;
                    try {
                        e = yield(0,
                        k.f)(m.r.SHARE_PROP_PURCHASE, o ? {
                            msg: (0,
                            a.HC)(o.text_share, this.getShareReplaceText()),
                            image_share_app_cdn: o.image_other,
                            image_share_instagram_cdn: o.image_ins
                        } : {})
                    } catch (t) {
                        console.error("revive share error: ", t)
                    } finally {
                        this.isWaitingShareEnd = !1
                    }
                    e && (yield this.propCtr.useProp(y.kR.SHARE, this.propType))
                })
            }
            onClickAds() {
                var t;
                if (!this.gameModel || (null === (t = this.ddCtr) || void 0 === t ? void 0 : t.isPollingRetrying()))
                    return;
                if (this.trackClick("revive_ads"),
                this.isDisabledUserHandle())
                    return;
                const o = this.gameModel;
                c.q.spinner.startShow(),
                (0,
                l.o)({
                    adsType: this.adsType,
                    token: o.adsToken,
                    adsDuration: this.propModel.getPropAdsDuration(this.propType),
                    gameParams: {
                        sessionID: o.sessionID,
                        propType: this.propType.toString()
                    },
                    backCallback: t => {
                        c.q.spinner.end(),
                        console.log("openAdsPage code: ", t),
                        this.propCtr.useProp(y.kR.ADS, this.propType)
                    }
                })
            }
            onClickCoin() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    var t;
                    if (this.gameModel && !(null === (t = this.ddCtr) || void 0 === t ? void 0 : t.isPollingRetrying()) && (this.trackClick("revive_coins"),
                    !this.isDisabledUserHandle()))
                        return b.i.user.userCoins < this.propModel.getPropItemPrice(this.propType) ? (c.q.ui.showToast((0,
                        a.wb)(this.COIN_NOT_ENOUGH_TEXT_KEY)),
                        void B.A.showBVGC({
                            project: h.A.gameName,
                            entryPoint: this.bvgcEntryPoint,
                            url: b.i.activitySetting.url_bvgc || "",
                            switch: "on" === b.i.activitySetting.text_BVGC,
                            userInfo: {
                                userid: b.i.user.userid,
                                username: b.i.user.username
                            }
                        })) : void (yield this.propCtr.useProp(y.kR.COIN, this.propType))
                })
            }
            getShareReplaceText() {
                return {
                    score_or_level: this.gameModel.score || 0
                }
            }
            gameOver() {
                this.isResult = !0,
                this.scheduleOnce( () => {
                    c.q.event.emit(P.L.GAME_END),
                    this.close()
                }
                , .5)
            }
            playNumberAnimation() {
                this.txtCountdown && this.txtCountdown.node && (this.dbCountdown.node.active = !0,
                this.dbCountdown.playAnimation("countdown_fx", 1),
                c.q.audio.playEffect(d.P.audio_countdown),
                (0,
                r.QxW)(this.txtCountdown.node).to(.13, {
                    scale: (0,
                    r.v3)(1.2, 1.2, 1.2)
                }).to(.13, {
                    scale: r.eBl.ONE
                }).start())
            }
            getExtraTrackParams() {
                return Object.assign(Object.assign({}, this.gameModel.getBaseTrackParams()), {
                    play_score: this.gameModel.score
                })
            }
            trackImpression() {
                this.gameModel && (0,
                w.ad)(p.qo.GAME_PAGE, p.W1.REVIVE, Object.assign(Object.assign({}, this.getExtraTrackParams()), {
                    difficulty: this.blockGroupModel.difficultyMode
                }))
            }
            trackClick(t) {
                this.gameModel && (0,
                w.nx)(p.qo.GAME_PAGE, p.vf.ACTION_BUTTON, p.W1.REVIVE, Object.assign(Object.assign({}, this.getExtraTrackParams()), {
                    action_button_type: t,
                    board_state: (0,
                    n.a5)(),
                    difficulty: this.blockGroupModel.difficultyMode
                }))
            }
            update(t) {
                if (!this.isInGamePage || this.isWaitingShareEnd || this.isResult || this.propCtr.getIsRequesting())
                    return;
                this.countDown += t;
                const o = Math.ceil(this.maxCountDown - this.countDown)
                  , e = parseInt(this.txtCountdown.string, 10);
                this.txtCountdown.string = "".concat(o),
                this.progressBar.progress = this.countDown / this.maxCountDown,
                o < e && this.playNumberAnimation(),
                this.countDown >= this.maxCountDown && (this.txtCountdown.string = "0",
                this.progressBar.progress = 1,
                this.gameOver())
            }
            back() {
                this.gameModel && (this.trackClick("back_btn"),
                this.isDisabledUserHandle() || (console.log("RevivePopup back"),
                this.gameOver()))
            }
            onClose() {
                this.isPlayingAnimation = !1,
                c.q.event.targetOff(this),
                this.unscheduleAllCallbacks(),
                c.q.event.emit(P.L.GAME_RESUME),
                c.q.event.emit(P.E.UPDATE_PROP_STATUS),
                r.Kak.stopAllByTarget(this.mask),
                r.Kak.stopAllByTarget(this.titleNode),
                r.Kak.stopAllByTarget(this.timeNode),
                r.Kak.stopAllByTarget(this.btnNode)
            }
        }
        ;
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "mask", void 0),
        (0,
        i.Cg)([N(r.bdY.ArmatureDisplay)], L.prototype, "dbCountdown", void 0),
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "titleNode", void 0),
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "timeNode", void 0),
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "btnNode", void 0),
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "coinBar", void 0),
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "btnAds", void 0),
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "btnCoin", void 0),
        (0,
        i.Cg)([N(r.bP0)], L.prototype, "btnShare", void 0),
        (0,
        i.Cg)([N(r.JU7)], L.prototype, "txtCoinPrice", void 0),
        (0,
        i.Cg)([N(r.z21)], L.prototype, "progressBar", void 0),
        (0,
        i.Cg)([N(r.JU7)], L.prototype, "txtCountdown", void 0),
        (0,
        i.Cg)([(0,
        _.KA)(D.A)], L.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        _.KA)(T.A)], L.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        _.KA)(O.A)], L.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        _.KA)(M.A)], L.prototype, "ddCtr", void 0),
        (0,
        i.Cg)([(0,
        _.KA)(A.A)], L.prototype, "propCtr", void 0),
        (0,
        i.Cg)([(0,
        _.nF)(500), (0,
        _.Qk)()], L.prototype, "onClickShare", null),
        (0,
        i.Cg)([(0,
        _.nF)(500)], L.prototype, "onClickAds", null),
        (0,
        i.Cg)([(0,
        _.nF)(500), (0,
        _.Qk)()], L.prototype, "onClickCoin", null),
        (0,
        i.Cg)([(0,
        _.nF)()], L.prototype, "back", null),
        L = (0,
        i.Cg)([S("BaseRevivePopup")], L),
        window.cc._RF.pop()
    },
    87459(t, o, e) {
        "use strict";
        e.d(o, {
            O: function() {
                return k
            }
        }),
        e(46449),
        e(23792),
        e(44114),
        e(93514),
        e(62953);
        var i = e(31635)
          , n = e(92068)
          , r = e(4911)
          , s = e(78248)
          , c = e(5167)
          , l = e(95080)
          , a = e(23241)
          , u = e(16222)
          , d = e(74172)
          , h = e(49452)
          , p = e(24319)
          , g = e(37878)
          , f = e(62794)
          , m = e(13290)
          , b = e(47080)
          , w = e(43357)
          , E = e(63878)
          , C = e(90710);
        e(3362),
        e(98992),
        e(3949),
        e(23500);
        const {ccclass: v, property: B} = s.P4R;
        var _;
        !function(t) {
            t.LEFT = "left",
            t.RIGHT = "right",
            t.UP = "up",
            t.DOWN = "down"
        }(_ || (_ = {})),
        window.cc._RF.push({}, "4a7850FW29J7o9VGhiu7ZZT", "Bomb", void 0);
        let P = class extends s.uAl {
            constructor() {
                super(...arguments),
                this.directionAngles = {
                    [_.LEFT]: 0,
                    [_.DOWN]: 90,
                    [_.RIGHT]: 180,
                    [_.UP]: 270
                }
            }
            showBombAnimation(t, o) {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    return new Promise(e => {
                        const i = this.getBombDirection(t, o);
                        if (0 === i.length)
                            return void e();
                        const n = [];
                        i.forEach(t => {
                            const o = (0,
                            s.Flv)(this.shockWaveDb.node)
                              , e = this.directionAngles[t];
                            o.angle = e,
                            this.node.addChild(o),
                            n.push(o)
                        }
                        );
                        let r = !1
                          , c = 0;
                        const l = n.length
                          , a = () => {
                            r && c === l && e()
                        }
                        ;
                        this.bomDb.node.active = !0,
                        this.bomDb.playAnimation("bom", 1),
                        this.bomDb.once(s.bdY.EventObject.COMPLETE, () => {
                            this.bomDb.node.active = !1,
                            r = !0,
                            a()
                        }
                        , this),
                        n.forEach(t => {
                            const o = t.getComponent(s.bdY.ArmatureDisplay);
                            if (!o)
                                return c++,
                                void a();
                            t.active = !0,
                            o.playAnimation("bom1", 1),
                            o.once(s.bdY.EventObject.COMPLETE, () => {
                                t.destroy(),
                                c++,
                                a()
                            }
                            , this)
                        }
                        )
                    }
                    )
                })
            }
            getBombDirection(t, o) {
                const {boardRow: e, boardCol: i} = this.boardModel
                  , n = []
                  , r = t === e - 1
                  , s = 0 === o
                  , c = o === i - 1;
                return 0 === t ? n.push(_.DOWN) : r ? n.push(_.UP) : n.push(_.UP, _.DOWN),
                s ? n.push(_.RIGHT) : c ? n.push(_.LEFT) : n.push(_.LEFT, _.RIGHT),
                n
            }
        }
        ;
        (0,
        i.Cg)([(0,
        l.KA)(f.A)], P.prototype, "boardModel", void 0),
        (0,
        i.Cg)([B(s.bdY.ArmatureDisplay)], P.prototype, "bomDb", void 0),
        (0,
        i.Cg)([B(s.bdY.ArmatureDisplay)], P.prototype, "shockWaveDb", void 0),
        P = (0,
        i.Cg)([v("Bomb")], P),
        window.cc._RF.pop();
        const {ccclass: y, property: R} = s.P4R;
        window.cc._RF.push({}, "514f71NhUhOTLsLcWW8jZ7d", "BombUsePanel", void 0);
        let k = class extends E.l {
            constructor() {
                super(...arguments),
                this.DEFAULT_START_Y_OFFSET = 150,
                this.isBombTouched = !1,
                this.countDown = 0,
                this.isCountDowning = !1,
                this.guideTween = null,
                this.propType = u.P7.BOMB,
                this.useEndEvent = a.E.USE_BOMB_PROP_END
            }
            onEnable() {
                super.onEnable(),
                this.bombBox.on(s.bP0.EventType.TOUCH_START, this.onTouchStart, this),
                this.bombBox.on(s.bP0.EventType.TOUCH_MOVE, this.onTouchMove, this),
                this.bombBox.on(s.bP0.EventType.TOUCH_END, this.onTouchEnd, this),
                this.bombBox.on(s.bP0.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            }
            onDisable() {
                super.onDisable(),
                this.bombBox.off(s.bP0.EventType.TOUCH_START, this.onTouchStart, this),
                this.bombBox.off(s.bP0.EventType.TOUCH_MOVE, this.onTouchMove, this),
                this.bombBox.off(s.bP0.EventType.TOUCH_END, this.onTouchEnd, this),
                this.bombBox.off(s.bP0.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            }
            update(t) {
                super.update(t),
                this.isCountDowning && (this.countDown -= t,
                this.countDown <= 0 && (this.cancelCountDown(),
                this.showGuide()))
            }
            startCountDown() {
                this.countDown = 2,
                this.isCountDowning = !0
            }
            cancelCountDown() {
                this.isCountDowning = !1,
                this.countDown = 0
            }
            onTouchStart(t) {
                if (!this.bombNode || this.isBombTouched)
                    return;
                this.cancelCountDown(),
                this.closeGuide();
                const o = t.getUILocation();
                this.isBombTouched = !0,
                this.lastTouchPos = o.clone(),
                (0,
                s.QxW)(this.bombNode).call( () => {
                    this.bombNode.active = !0
                }
                ).to(.01, {
                    position: new s.eBl(0,this.DEFAULT_START_Y_OFFSET,0)
                }).start()
            }
            onTouchMove(t) {
                if (!this.isBombTouched)
                    return;
                const o = t.getUILocation()
                  , e = o.clone().subtract(this.lastTouchPos);
                this.lastTouchPos = o.clone();
                const i = this.bombNode.getPosition().add(new s.eBl(1.3 * e.x,1.3 * e.y,0));
                this.bombNode.setPosition(i),
                this.handleBombHint()
            }
            onTouchEnd() {
                return (0,
                i.sH)(this, void 0, void 0, function*() {
                    this.isBombTouched = !1;
                    const t = this.boardCtr.hitCell(this.bombNode.getWorldPosition());
                    if (!this.canPlaceBomb(t))
                        return this.startCountDown(),
                        this.eliminateCtr.resetBombPreEliminateHint(),
                        void (0,
                        s.QxW)(this.bombNode).to(.01, {
                            position: s.eBl.ZERO
                        }).call( () => {
                            this.bombNode.active = !1
                        }
                        ).start();
                    if (this.gameModel.isUsingInventoryProp && !this.gameModel.isShowingUserGuide) {
                        const t = yield this.propCtr.useProp(u.kR.INVENTORY, u.P7.BOMB);
                        if (0 !== t.code || !t.data)
                            return
                    }
                    const {row: o, col: e} = t;
                    this.coreRecordUseBomboProp(o, e),
                    this.emitBombEliminate(t)
                })
            }
            emitBombEliminate(t) {
                this.eliminateCtr.bombEliminate(t),
                this.showBombAnimation(t),
                c.q.vibration.vibrate(3),
                c.q.event.emit(a.E.USE_BOMB_PROP_END)
            }
            coreRecordUseBomboProp(t, o) {
                (0,
                n.lY)({
                    row: t,
                    col: o
                })
            }
            canPlaceBomb(t) {
                return !!t
            }
            handleBombHint() {
                const t = this.boardCtr.hitCell(this.bombNode.getWorldPosition());
                this.canPlaceBomb(t) ? this.eliminateCtr.showBombPreEliminateHint(t) : this.eliminateCtr.resetBombPreEliminateHint()
            }
            showBombAnimation(t) {
                var o;
                const {row: e, col: i, pos: n} = t;
                this.bombDbNode = (0,
                s.Flv)(this.bombPrefab),
                this.board.getComponent(C.b).cellTempContainer.addChild(this.bombDbNode),
                this.bombDbNode.setPosition(n),
                this.bombDbNode.setSiblingIndex(999);
                const r = this.bombDbNode.getComponent(P);
                r ? r.showBombAnimation(e, i).then( () => {
                    this.bombDbNode && (this.bombDbNode.destroy(),
                    this.bombDbNode = null)
                }
                ) : (null === (o = this.bombDbNode) || void 0 === o || o.destroy(),
                this.bombDbNode && (this.bombDbNode = null))
            }
            showGuide() {
                const t = this.getTargetCell();
                if (!t)
                    return;
                const o = this.bombBox.worldPosition
                  , e = this.board.getComponent(s.$lP).convertToWorldSpaceAR(t.pos);
                s.Kak.stopAllByTarget(this.guideFinger);
                const i = new s.eBl(o.x + 85,o.y - 55,o.z)
                  , n = new s.eBl(e.x + 85,e.y - 55,e.z)
                  , r = this.guideFinger.getChildByName("bomb");
                r.active = !1,
                this.guideFinger.worldPosition = i.clone(),
                this.guideFinger.active = !0;
                const c = (0,
                s.QxW)(this.guideFinger).delay(.2).call( () => {
                    r.active = !0
                }
                ).to(.5, {
                    worldPosition: n
                }).call( () => {
                    this.onReachTargetPos()
                }
                ).delay(1).call( () => {
                    this.onFingerGuideEnd(),
                    r.active = !1,
                    this.guideFinger.worldPosition = i.clone()
                }
                );
                this.guideTween = (0,
                s.QxW)(this.guideFinger).repeatForever(c).start()
            }
            onReachTargetPos() {}
            onFingerGuideEnd() {}
            closeGuide() {
                this.guideTween && (this.guideTween.stop(),
                this.guideTween = null),
                this.guideFinger.active = !1
            }
            show() {
                this.node.active = !0,
                c.q.ui.forceHideBackBtn = !0,
                c.q.ui.updateBackBtnVisible();
                const t = this.node.getSiblingIndex();
                this.board.setSiblingIndex(t),
                this.cancelBtn.active = this.gameModel.isUsingInventoryProp,
                this.startCountDown()
            }
            hide() {
                this.eliminateCtr.resetBombPreEliminateHint(),
                this.bombNode.active = !1,
                this.bombNode.position = s.eBl.ZERO,
                this.node.active = !1,
                c.q.ui.forceHideBackBtn = !1,
                c.q.ui.updateBackBtnVisible();
                const t = this.blockGroup.getSiblingIndex();
                this.board.setSiblingIndex(t),
                this.cancelCountDown(),
                this.closeGuide()
            }
            getTargetCell() {
                return this.findRandomCell()
            }
            findRandomCell() {
                const t = this.boardModel.grid.flat()
                  , o = []
                  , e = [];
                for (const i of t)
                    null !== i.cell ? o.push(i) : e.push(i);
                return o.length > 0 ? o[Math.floor((0,
                r.G0)() * o.length)] : e.length > 0 ? e[Math.floor((0,
                r.G0)() * e.length)] : null
            }
        }
        ;
        (0,
        i.Cg)([(0,
        l.KA)(m.A)], k.prototype, "cellModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(f.A)], k.prototype, "boardModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(w.A)], k.prototype, "propModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(b.A)], k.prototype, "gameModel", void 0),
        (0,
        i.Cg)([(0,
        l.KA)(g.A)], k.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([(0,
        l.kW)(d.A)], k.prototype, "boardCtr", void 0),
        (0,
        i.Cg)([(0,
        l.kW)(h.A)], k.prototype, "eliminateCtr", void 0),
        (0,
        i.Cg)([(0,
        l.kW)(p.A)], k.prototype, "propCtr", void 0),
        (0,
        i.Cg)([R(s.bP0)], k.prototype, "board", void 0),
        (0,
        i.Cg)([R(s.bP0)], k.prototype, "blockGroup", void 0),
        (0,
        i.Cg)([R(s.bP0)], k.prototype, "bombBox", void 0),
        (0,
        i.Cg)([R(s.bP0)], k.prototype, "bombNode", void 0),
        (0,
        i.Cg)([R(s.bP0)], k.prototype, "guideFinger", void 0),
        (0,
        i.Cg)([R(s.bP0)], k.prototype, "cancelBtn", void 0),
        (0,
        i.Cg)([R(s.tX0)], k.prototype, "bombPrefab", void 0),
        k = (0,
        i.Cg)([y("BombUsePanel")], k),
        window.cc._RF.pop()
    },
    89802(t, o, e) {
        "use strict";
        e(23792),
        e(44114),
        e(62953);
        var i = e(31635)
          , n = e(78248)
          , r = e(41986)
          , s = e(62474)
          , c = e(91879);
        const {ccclass: l} = n.P4R;
        window.cc._RF.push({}, "6812d7vKb9L2oqbRnaJikOQ", "BaseCellShadowModel", void 0);
        let a = class extends r.t {
            constructor() {
                super(...arguments),
                this.cellShadowPool = new n.lPW
            }
            createCellShadowNode() {
                let t = this.cellShadowPool.get();
                return !t && (t = (0,
                n.Flv)(this.cellShadowPfb)),
                t
            }
            putNodeToNodePool(t) {
                t.parent && t.removeFromParent(),
                this.cellShadowPool.put(t)
            }
            popNodes(t) {
                if (!this.cellShadowPfb && (this.cellShadowPfb = c.h.get(s.Z.CellShadow, n.tX0)),
                !this.cellShadowPfb)
                    return [];
                const o = [];
                for (let e = 0; e < t; e++) {
                    const t = this.createCellShadowNode();
                    o.push(t)
                }
                return o
            }
        }
        ;
        a = (0,
        i.Cg)([l("BaseCellShadowModel")], a),
        o.A = a,
        window.cc._RF.pop()
    },
    89807(t, o, e) {
        "use strict";
        e.d(o, {
            m: function() {
                return d
            }
        }),
        e(44114);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(95080)
          , c = e(47075)
          , l = e(89802)
          , a = e(94569);
        const {ccclass: u} = r.P4R;
        window.cc._RF.push({}, "4e76eKxTfJOI4ay55tt8vej", "BlockShadow", void 0);
        let d = class extends r.uAl {
            init(t) {
                const {cellCount: o, width: e, shape: i} = n.b[t]
                  , r = this.cellShadowModel.popNodes(o)
                  , {row: s, col: l} = (0,
                a.BO)(i);
                let u = 0;
                for (let t = 0; t < i.length; t++) {
                    const o = i[t];
                    for (let i = e - 1; i >= 0; i--)
                        if (o & 1 << i) {
                            const o = (s - i - .5) * c.Dq
                              , e = (l - t - .5) * c.Dq
                              , n = r[u++];
                            n.setPosition(o, e, 0),
                            this.node.addChild(n)
                        }
                }
                return this.node
            }
        }
        ;
        (0,
        i.Cg)([(0,
        s.KA)(l.A)], d.prototype, "cellShadowModel", void 0),
        d = (0,
        i.Cg)([u("BlockShadow")], d),
        window.cc._RF.pop()
    },
    90710(t, o, e) {
        "use strict";
        e.d(o, {
            b: function() {
                return c
            }
        }),
        e(44114);
        var i = e(31635)
          , n = e(78248);
        const {ccclass: r, property: s} = n.P4R;
        window.cc._RF.push({}, "d88c3hrNq5GdaTjGZ5mJDyt", "Board", void 0);
        let c = class extends n.uAl {
        }
        ;
        (0,
        i.Cg)([s(n.bP0)], c.prototype, "anchorNode", void 0),
        (0,
        i.Cg)([s(n.bP0)], c.prototype, "cellContainer", void 0),
        (0,
        i.Cg)([s(n.bP0)], c.prototype, "cellTempContainer", void 0),
        c = (0,
        i.Cg)([r("Board")], c),
        window.cc._RF.pop()
    },
    92068(t, o, e) {
        "use strict";
        e.d(o, {
            C8: function() {
                return I
            },
            Dh: function() {
                return c
            },
            OY: function() {
                return x
            },
            _o: function() {
                return s
            },
            lY: function() {
                return l
            },
            qJ: function() {
                return U
            },
            yu: function() {
                return r
            }
        }),
        e(74423),
        e(23792),
        e(44114),
        e(72712),
        e(26910),
        e(16034),
        e(98992),
        e(54520),
        e(72577),
        e(3949),
        e(81454),
        e(8872),
        e(37550),
        e(23500),
        e(62953);
        var i = e(48571)
          , n = e(62339);
        function r(t) {
            i.g.propUsedCount[i.C.ADD_ONE]++;
            const o = (0,
            n.a)(i.E.B11_1, t);
            return !i.g.isReplay && (0,
            i.l)(0, [t], o.board.slice()),
            i.f.levelConfig && (i.f.levelConfig.isHard = !1),
            o
        }
        function s() {
            i.g.propUsedCount[i.C.REVIVE]++,
            i.g.blockGroupHasClear = !0,
            !i.g.isReplay && (0,
            i.l)(1),
            i.f.levelConfig && (i.f.levelConfig.isHard = !1)
        }
        function c(t) {
            i.g.propUsedCount[i.C.REMOVE]++,
            i.g.currentBlocks[t] = null,
            !i.g.isReplay && (0,
            i.l)(10, [t]),
            i.f.levelConfig && (i.f.levelConfig.isHard = !1)
        }
        function l(t) {
            i.g.propUsedCount[i.C.BOMB]++;
            const o = function(t) {
                const o = [Object.assign({}, t)];
                return t.row > 0 && o.push({
                    row: t.row - 1,
                    col: t.col
                }),
                t.row < i.f.boardRow - 1 && o.push({
                    row: t.row + 1,
                    col: t.col
                }),
                t.col > 0 && o.push({
                    row: t.row,
                    col: t.col - 1
                }),
                t.col < i.f.boardCol - 1 && o.push({
                    row: t.row,
                    col: t.col + 1
                }),
                o.filter(t => !(0,
                i.G)(t))
            }(t);
            return o.forEach(t => {
                (0,
                i.D)(t),
                (0,
                i.F)(t)
            }
            ),
            !i.g.isReplay && (0,
            i.l)(11, [t], i.g.currentBoard.slice()),
            i.f.levelConfig && (i.f.levelConfig.isHard = !1),
            o
        }
        function a(t, o, e) {
            let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const r = []
              , s = {}
              , c = {};
            return e.forEach( (e, l) => {
                let a;
                const u = !!n || t.row <= l && l < t.row + i.b[o].shape.length
                  , d = u ? 0 : t.col
                  , h = u ? i.f.boardCol : t.col + i.b[o].width;
                let p = !1;
                for (let r = d; r < h; r++)
                    e & 1 << i.f.boardCol - 1 - r ? (a && (p = !0),
                    s[r] && (c[r] = !0)) : (u && (p ? a = null : a ? a.count++ : a = {
                        row: l,
                        col: r,
                        count: 1
                    }),
                    (n || t.col <= r && r < t.col + i.b[o].width) && (c[r] ? s[r] = null : s[r] ? s[r].count++ : s[r] = {
                        row: l,
                        col: r,
                        count: 1
                    }));
                a && a.count < 4 && r.push(Object.assign(Object.assign({}, a), {
                    direction: "row"
                }))
            }
            ),
            Object.keys(s).forEach(t => {
                s[t] && s[t].count < 4 && r.push(Object.assign(Object.assign({}, s[t]), {
                    direction: "col"
                }))
            }
            ),
            r
        }
        function u(t) {
            const {block: o, board: e, boardInfo: r, blockClearBoardMap: s} = t;
            if (s[o])
                return s[o];
            const c = [];
            return (0,
            i.i)(o, e, r).forEach(t => {
                const r = e.slice();
                (0,
                n.p)(o, t, r);
                const s = (0,
                i.a)(r, t, o);
                if (s.rows.length > 0 || s.cols.length > 0) {
                    const e = r.slice();
                    (0,
                    i.c)(s, e);
                    const n = a(t, o, e, !0);
                    c.push({
                        board: e,
                        spaces: n
                    })
                }
            }
            ),
            s[o] = c,
            c
        }
        function d(t, o, e) {
            let r = e;
            return t.some(t => {
                const {board: e, spaces: s} = t;
                return s.some(t => {
                    const s = (0,
                    i.B)({
                        block: o,
                        board: e,
                        space: t,
                        direction: t.direction
                    });
                    return 0 !== s.length && s.some(t => {
                        const s = e.slice();
                        (0,
                        n.p)(o, t, s);
                        const c = (0,
                        i.a)(s);
                        (0,
                        i.c)(c, s);
                        const l = (0,
                        i.s)(s);
                        return r = r.filter(t => !(0,
                        i.h)(t, s, l)),
                        0 === r.length
                    }
                    )
                }
                )
            }
            ),
            r
        }
        function h(t) {
            const o = {};
            t.forEach(t => {
                const e = i.b[t].cellCount;
                o[e] = o[e] || [],
                o[e].push(t)
            }
            );
            const e = o[Object.keys(o)[0]];
            return e[(0,
            i.v)(0, e.length - 1)]
        }
        function p(t, o, e) {
            const r = function(t, o, e) {
                const n = (0,
                i.K)(o, "row")
                  , r = (0,
                i.K)(o, "col")
                  , s = []
                  , c = [];
                return n.concat(r).forEach(o => {
                    const n = t.slice()
                      , r = {
                        rows: [],
                        cols: []
                    };
                    "row" === o.direction ? r.rows.push(o.spaces[0].row) : r.cols.push(o.spaces[0].col),
                    (0,
                    i.c)(r, n);
                    const l = e.filter(t => (0,
                    i.h)(t, n, (0,
                    i.s)(n)));
                    l.length > 0 ? s.push(Object.assign(Object.assign({}, o), {
                        canPlaceBigGroup: l
                    })) : c.push(Object.assign(Object.assign({}, o), {
                        canPlaceBigGroup: []
                    }))
                }
                ),
                (0,
                i.t)(s),
                (0,
                i.t)(c),
                s.concat(c)
            }(t, o, e)
              , s = (0,
            i.w)(o)
              , c = {}
              , l = {}
              , p = {}
              , g = {}
              , f = []
              , m = [];
            return r.some(r => {
                if (!r.canPlaceBigGroup && m.length > 0)
                    return !0;
                const b = r.direction
                  , w = r.spaces[0]
                  , E = r.spaces[1]
                  , C = i.j.fill[b][w.count]
                  , v = i.j.fill[b][E.count];
                return C.some(C => {
                    if (!(0,
                    i.B)({
                        block: C,
                        space: w,
                        board: t,
                        direction: b
                    }).length)
                        return !1;
                    const B = (0,
                    i.A)(C, s, c, e);
                    return 0 !== B.bigGroup.length && v.some(w => {
                        if (!(0,
                        i.B)({
                            block: w,
                            space: E,
                            board: t,
                            direction: b
                        }).length)
                            return !1;
                        const v = (0,
                        i.A)(w, s, c, e);
                        let _ = (0,
                        i.J)(B.bigGroup, v.bigGroup);
                        if (0 === _.length)
                            return !1;
                        if (_ = function(t) {
                            const {block1: o, block2: e, bigGroup: r, board: s, boardInfo: c, blockPlaceBoardMap: l, blockClearBoardMap: h, removeBigBlockMap: p} = t;
                            if (p["".concat(o, "_").concat(e)])
                                return p["".concat(o, "_").concat(e)];
                            let g = r;
                            const f = function(t) {
                                const {block: o, board: e, boardInfo: r, blockPlaceBoardMap: s} = t;
                                if (s[o])
                                    return s[o];
                                const c = [];
                                return (0,
                                i.L)(o, e, r).forEach(t => {
                                    const r = e.slice();
                                    (0,
                                    n.p)(o, t, r);
                                    const s = a(t, o, r);
                                    c.push({
                                        board: r,
                                        spaces: s
                                    });
                                    const l = (0,
                                    i.a)(r, t, o);
                                    if (l.rows.length > 0 || l.cols.length > 0) {
                                        const e = r.slice();
                                        (0,
                                        i.c)(l, e);
                                        const n = a(t, o, e);
                                        c.push({
                                            board: e,
                                            spaces: n
                                        })
                                    }
                                }
                                ),
                                s[o] = c,
                                c
                            }({
                                block: o,
                                board: s,
                                boardInfo: c,
                                blockPlaceBoardMap: l
                            })
                              , m = u({
                                block: o,
                                board: s,
                                boardInfo: c,
                                blockClearBoardMap: h
                            });
                            return g = d(f.concat(m), e, g),
                            g.length > 0 && (g = d(u({
                                block: e,
                                board: s,
                                boardInfo: c,
                                blockClearBoardMap: h
                            }), o, g)),
                            p["".concat(o, "_").concat(e)] = p["".concat(e, "_").concat(o)] = g,
                            g
                        }({
                            block1: C,
                            block2: w,
                            bigGroup: _,
                            board: t,
                            boardInfo: o,
                            blockPlaceBoardMap: l,
                            blockClearBoardMap: p,
                            removeBigBlockMap: g
                        }),
                        _.length > 0) {
                            const t = (0,
                            i.J)(r.canPlaceBigGroup, _);
                            if (t.length > 0)
                                return f.push(C, w, h(t)),
                                !0;
                            0 === m.length && m.push(C, w, h(_))
                        }
                        return !1
                    }
                    )
                }
                )
            }
            ),
            f.length > 0 ? f : m
        }
        function g(t, o, e) {
            const r = {
                blocks: []
            }
              , s = function(t, o, e) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.g.currentBoard;
                const s = {}
                  , c = (0,
                i.x)(t, o, 1, t => t < 4);
                let l;
                const a = {};
                return c.some(o => {
                    let c;
                    if (a[o.count])
                        c = a[o.count];
                    else {
                        const e = i.j.fill[t][o.count].slice();
                        (0,
                        i.t)(e),
                        a[o.count] = e,
                        c = a[o.count]
                    }
                    return c.some(c => {
                        var a;
                        const u = (0,
                        i.y)({
                            block: c,
                            space: o,
                            board: r,
                            direction: t
                        });
                        if (u) {
                            l = c;
                            const t = r.slice();
                            (0,
                            n.p)(l, u, t);
                            const o = (0,
                            i.a)(t, u, l);
                            (0,
                            i.c)(o, t),
                            (null === (a = i.f.levelConfig) || void 0 === a ? void 0 : a.isHard) && (s.blockClearRowCol = {
                                rows: o.rows.map(t => t - u.row),
                                cols: o.cols.map(t => t - u.col)
                            });
                            const {bigBlock: d, position: h} = function(t, o) {
                                const e = (0,
                                i.s)(t);
                                let n;
                                const r = o.find(o => {
                                    const r = (0,
                                    i.h)(o, t, e);
                                    return !!r && (n = r,
                                    !0)
                                }
                                );
                                return r ? {
                                    bigBlock: r,
                                    position: n
                                } : {
                                    bigBlock: null,
                                    position: null
                                }
                            }(t, e);
                            return !!d && (s.clearBlock = l,
                            s.clearBlockPosition = u,
                            s.bigBlock = d,
                            s.bigBlockPosition = h,
                            s.newBoard = t,
                            !0)
                        }
                        return !1
                    }
                    )
                }
                ),
                s
            }(t, o, e);
            if (s.clearBlock) {
                const {clearBlock: t, clearBlockPosition: o, bigBlock: e, bigBlockPosition: c, newBoard: l} = s
                  , a = l.slice();
                (0,
                n.p)(e, c, a);
                const u = (0,
                i.s)(a)
                  , {block: d, position: h} = (0,
                i.M)(a, u);
                r.blocks.push(t, e, d),
                r.blockClearRowCol = s.blockClearRowCol
            }
            return r
        }
        function f(t, o) {
            const {spaceMap: e, spaces: i} = t;
            let n = -1
              , r = 0
              , s = -1
              , c = -1;
            const l = e[o][8];
            return l && l.some(t => {
                const e = i[o][t][o];
                if (n > -1 && n === e - 1) {
                    if (r++,
                    2 === r)
                        c = s;
                    else if (r >= 3)
                        return !0
                } else
                    r = 1,
                    s = e;
                n = e
            }
            ),
            r >= 3 ? {
                start: s,
                count: r
            } : c > -1 ? {
                start: c,
                count: 2
            } : {
                start: -1,
                count: 0
            }
        }
        e(97532),
        e(7391);
        const m = Object.keys(i.b).map(t => +t).filter(t => {
            const o = i.b[t];
            return ![i.E.B11_1, i.E.B11_4, i.E.B11_5].includes(t) && o.width < 4 && o.shape.length < 4
        }
        )
          , b = [i.E.B22_1, i.E.B22_2, i.E.B22_3, i.E.B22_4]
          , w = [i.E.B22_5, i.E.B22_6, i.E.B22_9]
          , E = [i.E.B22_7, i.E.B22_8, i.E.B22_9]
          , C = {
            row: {},
            col: {}
        }
          , v = i.j.requirement.row[3].filter(t => i.b[t].cellCount < 5)
          , B = i.j.requirement.col[3].filter(t => i.b[t].cellCount < 5 && !v.includes(t))
          , _ = v.concat(B);
        function P(t, o) {
            if (!C[t][o]) {
                let e;
                if (3 === o)
                    e = i.j.fill[t][3].slice(),
                    (0,
                    i.t)(e);
                else if (2 === o) {
                    const o = "row" === t ? w : E;
                    (0,
                    i.t)(o),
                    (0,
                    i.t)(b),
                    e = o.concat(b).concat(["row" === t ? i.E.B21_1 : i.E.B12_1])
                } else
                    1 === o && ((0,
                    i.t)(b),
                    e = b.concat(["row" === t ? i.E.B12_1 : i.E.B21_1]));
                C[t][o] = e
            }
            return C[t][o]
        }
        function y(t, o) {
            const e = []
              , i = [];
            let n = t[0];
            const r = "row" === o ? "col" : "row";
            for (let s = 1; s < t.length; s++) {
                const c = t[s];
                if (c[o] === n[o] + 1)
                    if (1 === c.count && 1 === n.count && 1 === Math.abs(c[r] - n[r])) {
                        if (e.push([n, c]),
                        s += 2,
                        s >= t.length)
                            break;
                        n = t[s - 1]
                    } else if (c[r] < n[r] + n.count && c[r] + c.count > n[r]) {
                        const t = e[e.length - 1];
                        e.push([n, c]),
                        t && t.includes(n) && i.push(t.slice().concat([c]))
                    }
                n = c
            }
            return {
                space2: e,
                space3: i
            }
        }
        function R(t) {
            const o = t.length;
            if (o > 3)
                return null;
            const e = Math.max(...t).toString(2).length;
            if (e > 3)
                return null;
            for (const n of m) {
                const r = i.b[n];
                if (r.width === e && r.shape.length === o) {
                    let e = !0;
                    for (let i = 0; i < o; i++)
                        if (r.shape[i] !== t[i]) {
                            e = !1;
                            break
                        }
                    if (e)
                        return n
                }
            }
            return null
        }
        function k(t, o) {
            let e = null;
            return t.some(t => {
                const i = "row" === o ? function(t) {
                    const o = [];
                    let e = t[0].col
                      , i = t[0].col + t[0].count - 1;
                    for (let o = 1; o < t.length; o++) {
                        const n = t[o];
                        e = Math.min(e, n.col),
                        i = Math.max(i, n.col + n.count - 1)
                    }
                    if (i - e + 1 > 3)
                        return null;
                    t.forEach(t => {
                        let e = t.col + t.count - 1;
                        const n = +"0b".concat(new Array(t.count).fill(1).join("")).concat(new Array(i - e).fill(0).join(""));
                        o.push(n)
                    }
                    );
                    const n = R(o);
                    return null === n ? null : {
                        block: n,
                        position: {
                            row: t[0].row,
                            col: e
                        }
                    }
                }(t) : function(t) {
                    let o = t[0].row
                      , e = t[0].row + t[0].count - 1;
                    for (let i = 1; i < t.length; i++) {
                        const n = t[i];
                        o = Math.min(o, n.row),
                        e = Math.max(e, n.row + n.count - 1)
                    }
                    if (e - o + 1 > 3)
                        return null;
                    const i = new Array(e - o + 1).fill("0b");
                    t.forEach(t => {
                        let n = t.row + t.count - 1;
                        for (let e = o; e < t.row; e++)
                            i[e - o] += "0";
                        for (let e = t.row; e <= n; e++)
                            i[e - o] += "1";
                        for (let t = n + 1; t <= e; t++)
                            i[t - o] += "0"
                    }
                    );
                    const n = R(i.map(t => +t));
                    return null === n ? null : {
                        block: n,
                        position: {
                            row: o,
                            col: t[0].col
                        }
                    }
                }(t);
                return null !== i && (e = i,
                !0)
            }
            ),
            e
        }
        function M(t, o, e, i) {
            t && t.forEach(t => {
                const n = i.spaces[o][t];
                e.push({
                    space: n,
                    direction: o
                })
            }
            )
        }
        function A(t, o) {
            const {spaceMap: e} = o
              , n = [];
            if (M(e.row[2], "row", n, o),
            M(e.col[2], "col", n, o),
            M(e.row[1], "row", n, o),
            M(e.col[1], "col", n, o),
            M(e.row[3], "row", n, o),
            M(e.col[3], "col", n, o),
            0 === n.length)
                return (0,
                i.M)(t, o, _);
            let r;
            return function(t, o) {
                t.sort( (t, e) => o.spaceCountMap[t.direction][t.space[t.direction]] - o.spaceCountMap[e.direction][e.space[e.direction]])
            }(n, o),
            n.some(o => {
                const e = P(o.direction, o.space.count);
                return 1 === o.space.count && e.push(i.E.B11_1),
                e.some(e => {
                    const n = (0,
                    i.y)({
                        board: t,
                        space: o.space,
                        block: e,
                        direction: o.direction
                    });
                    return !!n && (r = {
                        block: e,
                        position: n
                    },
                    !0)
                }
                )
            }
            ),
            r
        }
        function O(t) {
            const o = i.f.levelConfig.isGemStuck
              , e = {};
            Object.values(i.g.gemMap).forEach(t => {
                e[t] = (e[t] || 0) + 1
            }
            );
            const {remainingGemMap: n, gemTypes: r, stuckGemTypes: s} = function(t, o) {
                const e = {}
                  , n = i.f.levelConfig.target.gem
                  , r = []
                  , s = [];
                return Object.keys(n).forEach(c => {
                    const l = +c;
                    i.g.stuckGemTypes.includes(l) && t ? (e[l] = Math.floor(.9 * n[c]) - (i.g.currentGem[l] || 0) - (o[l] || 0),
                    e[l] > 0 && s.push(l)) : (e[l] = n[c] - (i.g.currentGem[l] || 0),
                    r.push(l))
                }
                ),
                {
                    remainingGemMap: e,
                    gemTypes: r,
                    stuckGemTypes: s
                }
            }(o, e)
              , c = [];
            for (; t > 0; ) {
                let e = null;
                e = o && s.length > 0 && (0,
                i.k)() < .1 ? T(n, s) : D(n, r),
                c.push(e),
                n[e]--,
                t--
            }
            return c
        }
        function T(t, o) {
            o.sort( (o, e) => t[e] - t[o]);
            const e = o[0];
            return t[e] <= 1 && o.shift(),
            e
        }
        function D(t, o) {
            return o.sort( (o, e) => t[e] - t[o]),
            o[0]
        }
        function S(t, o, e, n) {
            const r = function(t, o) {
                const e = i.b[t]
                  , n = [];
                return e.shape.forEach( (t, i) => {
                    if (!o || !o.rows.includes(i))
                        for (let r = 0; r < e.width; r++)
                            o && o.cols.includes(r) || t & 1 << e.width - r - 1 && n.push({
                                row: i,
                                col: r
                            })
                }
                ),
                (0,
                i.t)(n),
                n
            }(t.blockType, n)
              , s = Math.min(o, r.length);
            t.gemMap = {};
            for (let o = 0; o < s; o++) {
                const i = e.pop();
                t.gemMap["".concat(r[o].row, "_").concat(r[o].col)] = i
            }
            return o - s
        }
        function N(t) {
            const {blockClearRowCol: o, blocks: e} = t
              , n = e.map(t => ({
                blockType: t
            }))
              , r = i.f.levelConfig;
            if (!r || !r.target || !r.target.gem)
                return n;
            const s = Object.values(i.g.currentGem).reduce( (t, o) => t + o, 0)
              , c = i.g.currentScore
              , l = r.scoreToGem.score
              , a = Math.max(1, Math.ceil(c / l)) * r.scoreToGem.gem
              , u = c % l / l * 100 >= r.gemGenerateThreshold;
            if (s >= a) {
                if (i.g.hasPrevGenerateGem)
                    return i.g.hasPrevGenerateGem = !1,
                    n;
                const t = n.map( (t, o) => o);
                (0,
                i.t)(t);
                const e = O(1);
                t.some(t => 0 === S(n[t], 1, e, o && o[t]))
            } else if (u) {
                const t = a - s
                  , e = Math.floor(t / n.length);
                let i = t % n.length;
                const r = O(t);
                n.forEach( (t, s) => {
                    let c = e;
                    if (i > 0 && (c++,
                    i--),
                    s === n.length - 1 && (c += i),
                    c > 0) {
                        const e = S(t, c, r, o && o[n.indexOf(t)]);
                        e > 0 && (i += e)
                    }
                }
                )
            } else {
                const t = [1, 1, 1, 1, 2, 2, 2, 3];
                let e = t[(0,
                i.v)(0, t.length - 1)];
                const r = [];
                let s = 0;
                for (let t = 0; t < e; t++) {
                    const t = (0,
                    i.v)(1, 3);
                    s += t,
                    r.push(t)
                }
                const c = O(s)
                  , l = [0, 1, 2];
                for ((0,
                i.t)(l); e > 0 && l.length > 0; ) {
                    const t = l.pop();
                    let i = r.pop();
                    S(n[t], i, c, o && o[t]) < i ? e-- : r.push(i)
                }
            }
            return i.g.hasPrevGenerateGem = !0,
            n
        }
        const L = {
            [i.N.VeryEasy]: function(t) {
                const o = {
                    blocks: []
                };
                C.row = {},
                C.col = {};
                const e = i.g.currentBoard.slice()
                  , r = function(t) {
                    const o = (0,
                    i.x)("row", t, 1, t => t <= 3);
                    o.sort( (t, o) => t.row - o.row);
                    const {space2: e, space3: r} = y(o, "row")
                      , s = (0,
                    i.x)("col", t, 1, t => t <= 3);
                    s.sort( (t, o) => t.col - o.col);
                    const {space2: c, space3: l} = y(s, "col");
                    return k(r, "row") || k(l, "col") || k(e, "row") || k(c, "col") || function(t, o) {
                        const e = {};
                        let r = null;
                        return o.forEach(t => {
                            e[t.col] = t
                        }
                        ),
                        t.some(t => {
                            for (let o = t.col; o < t.col + t.count; o++) {
                                const s = e[o];
                                if (s && s.row <= t.row && s.row + s.count - 1 >= t.row)
                                    return i.j.fill.row[t.count].filter(t => !!i.b[t].testPlaceMap.col[s.count]).some(o => (0,
                                    i.B)({
                                        board: i.g.currentBoard,
                                        block: o,
                                        space: t,
                                        direction: "row"
                                    }).some(t => {
                                        const e = i.g.currentBoard.slice();
                                        if ((0,
                                        n.p)(o, t, e),
                                        (0,
                                        i.a)(e).cols.length > 0)
                                            return r = {
                                                block: o,
                                                position: t
                                            },
                                            !0
                                    }
                                    ))
                            }
                        }
                        ),
                        r
                    }(o, s) || function(t, o) {
                        const e = []
                          , n = {
                            1: [],
                            2: [],
                            3: []
                        }
                          , r = {
                            1: [],
                            2: [],
                            3: []
                        };
                        t.forEach(t => {
                            n[t.count].push({
                                space: t,
                                direction: "row"
                            })
                        }
                        ),
                        o.forEach(t => {
                            r[t.count].push({
                                space: t,
                                direction: "col"
                            })
                        }
                        ),
                        e.push(...n[2], ...r[2], ...n[3], ...r[3], ...n[1], ...r[1]);
                        let s = null;
                        return e.some(t => {
                            let {space: o, direction: e} = t;
                            return P(e, o.count).some(t => {
                                const n = (0,
                                i.y)({
                                    board: i.g.currentBoard,
                                    space: o,
                                    block: t,
                                    direction: e
                                });
                                return !!n && (s = {
                                    block: t,
                                    position: n
                                },
                                !0)
                            }
                            )
                        }
                        ),
                        s
                    }(o, s)
                }(t);
                for (r && (o.blocks.push(r.block),
                (0,
                n.p)(r.block, r.position, e),
                t = (0,
                i.s)(e)); o.blocks.length < 3; ) {
                    const r = A(e, t);
                    o.blocks.push(r.block),
                    (0,
                    n.p)(r.block, r.position, e),
                    t = (0,
                    i.s)(e)
                }
                return o
            },
            [i.N.Easy]: i.n,
            [i.N.Normal]: function(t) {
                const o = i.g.currentBoard
                  , e = i.j.stuck.filter(e => !(0,
                i.h)(e, o, t))
                  , n = {
                    blocks: []
                };
                if (0 === e.length) {
                    const o = (0,
                    i.p)(t);
                    return n.blocks = o.blocks,
                    n
                }
                let r = "row"
                  , s = "col";
                (0,
                i.k)() < .5 && (r = "col",
                s = "row");
                const c = g(r, t, e);
                if (c.blocks.length > 0)
                    return n.blocks = c.blocks,
                    n.blockClearRowCol = [c.blockClearRowCol],
                    n;
                const l = g(s, t, e);
                if (l.blocks.length > 0)
                    return n.blocks = l.blocks,
                    n.blockClearRowCol = [l.blockClearRowCol],
                    n;
                const a = (0,
                i.q)(o, t);
                return n.blocks = a.blocks,
                n
            },
            [i.N.Hard]: n.g,
            [i.N.Impossible]: function(t) {
                const o = i.g.currentBoard
                  , e = i.j.breakCombo.concat([i.E.B51_1, i.E.B15_1]).filter(e => !(0,
                i.h)(e, o, t))
                  , r = {
                    blocks: []
                };
                if (0 === e.length) {
                    const e = (0,
                    n.f)(o, t);
                    if (e.blocks.length > 0)
                        return r.blocks = e.blocks,
                        r;
                    const s = (0,
                    i.p)(t);
                    return r.blocks = s.blocks,
                    r
                }
                const s = (0,
                i.H)(e, [i.E.B51_1, i.E.B15_1]);
                if (s.length > 0 && (r.blocks = p(o, t, s)),
                0 === r.blocks.length) {
                    const s = [...i.j.breakCombo, i.E.B31_1, i.E.B13_1]
                      , c = (0,
                    i.H)(s, e).filter(e => !!i.j.breakCombo.includes(e) || (0,
                    i.h)(e, o, t))
                      , l = (0,
                    i.I)({
                        board: o,
                        boardInfo: t,
                        blocks: c
                    })
                      , a = function(t, o, e, r) {
                        const s = []
                          , c = Object.keys(i.b).map(t => +t);
                        return t.push(...(0,
                        i.H)((0,
                        i.H)(c, i.j.breakCombo), o)),
                        t.some(t => {
                            const c = (0,
                            i.i)(t, e, r);
                            let l = o.slice();
                            return c.forEach(o => {
                                const r = e.slice();
                                (0,
                                n.p)(t, o, r);
                                const s = (0,
                                i.a)(r, o, t);
                                (0,
                                i.c)(s, r);
                                const c = (0,
                                i.s)(r);
                                l = l.filter(t => !(0,
                                i.h)(t, r, c))
                            }
                            ),
                            l.length > 0 && (s.push(t),
                            s.push(l[(0,
                            i.v)(0, l.length - 1)]),
                            s.push(l[(0,
                            i.v)(0, l.length - 1)]),
                            !0)
                        }
                        ),
                        s
                    }((0,
                    i.H)(c, l), e, o, t);
                    if (a.length > 0)
                        return r.blocks = a,
                        r.isOriginDifficulty = !0,
                        r;
                    const u = l[(0,
                    i.v)(0, l.length - 1)]
                      , d = e[(0,
                    i.v)(0, e.length - 1)]
                      , h = e[(0,
                    i.v)(0, e.length - 1)];
                    r.blocks = [u, d, h]
                }
                return r.isOriginDifficulty = !0,
                r
            }
        };
        function x(t) {
            let o;
            const {isWellMode: e, wellModeDirection: n, wellModeSpaceCount: r, boardInfo: s} = function(t) {
                i.g.prevBlock.length = 0,
                i.g.prevBlockIndex.length = 0,
                i.g.prevBlockPosition.length = 0,
                i.g.hasPrevBlockClear.length = 0,
                i.g.needLike = !1,
                i.g.isFirstBlockLiked = !1,
                i.g.blockGroupHasClear = !1;
                const o = (0,
                i.s)(i.g.currentBoard);
                let e = !1
                  , n = null
                  , r = 0;
                const s = function(t) {
                    const {start: o, count: e} = f(t, "row")
                      , {start: n, count: r} = f(t, "col");
                    return o > -1 && n > -1 ? e > r ? {
                        direction: "row",
                        count: e
                    } : r > e ? {
                        direction: "col",
                        count: r
                    } : {
                        direction: (0,
                        i.k)() < .5 ? "row" : "col",
                        count: e
                    } : o > -1 ? {
                        direction: "row",
                        count: e
                    } : n > -1 ? {
                        direction: "col",
                        count: r
                    } : null
                }(o);
                if (s) {
                    if (i.g.isPrevGroupWellMode)
                        return i.g.isPrevGroupWellMode = !1,
                        {
                            isWellMode: e,
                            wellModeDirection: n,
                            wellModeSpaceCount: r,
                            boardInfo: o
                        };
                    if (t === i.N.Impossible)
                        return {
                            isWellMode: e,
                            wellModeDirection: n,
                            wellModeSpaceCount: r,
                            boardInfo: o
                        };
                    i.g.wellModeTryTimes[t]++;
                    const c = (0,
                    i.P)(t, i.g.wellModeTryTimes[t]);
                    e = Boolean(c && (0,
                    i.k)() < c),
                    i.g.isPrevGroupWellMode = e,
                    n = s.direction,
                    r = s.count
                }
                return {
                    isWellMode: e,
                    wellModeDirection: n,
                    wellModeSpaceCount: r,
                    boardInfo: o
                }
            }(t);
            if ((0,
            i.Q)(),
            e)
                o = function(t, o, e) {
                    const n = {
                        blocks: [],
                        useMode: "爽消"
                    };
                    return "row" === o ? n.blocks = 2 === e ? [i.E.B32_7, i.E.B32_7, i.E.B22_9] : [i.E.B33_5, i.E.B33_5, i.E.B23_7] : "col" === o && (n.blocks = 2 === e ? [i.E.B23_7, i.E.B23_7, i.E.B22_9] : [i.E.B33_5, i.E.B33_5, i.E.B32_7]),
                    n
                }(0, n, r);
            else if (s.totalSpaceCellCount / (i.f.boardRow * i.f.boardCol) > .7) {
                const e = [i.N.VeryEasy, i.N.Easy].includes(t);
                o = (0,
                i.p)(s, e)
            } else
                o = L[t](s);
            i.g.currentBlocks = N(o);
            const c = Object.assign(Object.assign({}, o), {
                blocks: i.g.currentBlocks
            });
            i.f.isShuffleBlocks && (0,
            i.t)(c.blocks, c.positions);
            const l = (0,
            i.O)();
            return (0,
            i.l)(3, [l], q(c.blocks)),
            c
        }
        function I() {
            const t = [i.E.B13_1, i.E.B31_1, i.E.B22_9];
            return (0,
            i.l)(2),
            i.g.currentBlocks = t.map(t => ({
                blockType: t
            })),
            {
                blocks: i.g.currentBlocks
            }
        }
        function U() {
            var t, o;
            const e = (null === (o = null === (t = i.f.levelConfig) || void 0 === t ? void 0 : t.fallBlocks) || void 0 === o ? void 0 : o[i.g.fallbackBlockIndex++]) || [];
            return (0,
            i.l)(13),
            i.g.currentBlocks = N({
                blocks: e
            }),
            {
                blocks: i.g.currentBlocks,
                isFallbackBlocks: !0
            }
        }
        function q(t) {
            return t.map(t => ({
                b: t.blockType,
                g: t.gemMap
            }))
        }
        function G(t) {
            return function() {
                return {
                    code: 0,
                    data: t(...arguments)
                }
            }
        }
        function H(t) {
            return () => ({
                code: 0,
                data: q(t().blocks)
            })
        }
        var F, W;
        G(s),
        G(c),
        H(I),
        G(i.W),
        G(i.V),
        G(i.U),
        G(i.T),
        H(U),
        function(t) {
            t[t.TIP = 0] = "TIP",
            t[t.ACTION = 1] = "ACTION",
            t[t.PROP = 2] = "PROP"
        }(F || (F = {})),
        function(t) {
            t[t.EXTRA_BLOCK = 0] = "EXTRA_BLOCK",
            t[t.BOMB = 1] = "BOMB",
            t[t.REMOVE = 2] = "REMOVE"
        }(W || (W = {})),
        W.EXTRA_BLOCK,
        i.C.ADD_ONE,
        W.BOMB,
        i.C.BOMB,
        W.REMOVE,
        i.C.REMOVE
    },
    92384(t, o, e) {
        "use strict";
        e.d(o, {
            x: function() {
                return f
            }
        }),
        e(23792),
        e(44114),
        e(98992),
        e(3949),
        e(23500),
        e(62953);
        var i = e(31635)
          , n = e(48571)
          , r = e(78248)
          , s = e(5167)
          , c = e(95080)
          , l = e(47075)
          , a = e(3677)
          , u = e(23241)
          , d = e(37878)
          , h = e(41455);
        const {ccclass: p, property: g} = r.P4R;
        window.cc._RF.push({}, "9d1dfiVObdE6qOeAvZH0Tsa", "BlockGroup", void 0);
        let f = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.blockPlaceMentArr = [],
                this.getBlockHalfWidth = t => {
                    const o = t.block
                      , e = null == o ? void 0 : o.getComponent(h.e).type;
                    return e ? n.b[e].width / 2 * l.Dq * a.T2 : 0
                }
            }
            onLoad() {
                s.q.event.on(u.L.REFRESH_BLOCK_GROUP, this.onRefreshBlockGroup, this)
            }
            onRefreshBlockGroup(t) {
                if (null != t)
                    return this.displayBlockWithShadow(t),
                    void s.q.event.emit(u.L.REFRESH_BLOCK_GROUP_END);
                this.blockPlaceMentArr.forEach( (t, o) => {
                    this.displayBlockWithShadow(o)
                }
                ),
                this.updateBoundaryPos(),
                s.q.event.emit(u.L.REFRESH_BLOCK_GROUP_END)
            }
            displayBlockWithShadow(t) {
                const o = this.blockPlaceMentArr[t];
                o.removeAllChildren();
                const {block: e, blockShadow: i} = this.blockGroupModel.blockGroup[t];
                e && (i && i.setPosition(new r.eBl(8,-8,0)),
                [i, e].forEach(t => {
                    t && (t.scale = new r.eBl(a.T2,a.T2,1),
                    o.addChild(t))
                }
                ),
                this.updateBoundaryPos())
            }
            updateBoundaryPos() {
                if (this.blockPlaceMentArr.length < 3 || this.blockGroupModel.blockGroup.length < 3)
                    return;
                const [t,o,e] = this.blockPlaceMentArr
                  , [i,n,s] = this.blockGroupModel.blockGroup
                  , c = t.getWorldPosition()
                  , l = o.getWorldPosition()
                  , a = e.getWorldPosition()
                  , u = this.getBlockHalfWidth(i)
                  , d = this.getBlockHalfWidth(n)
                  , h = this.getBlockHalfWidth(s)
                  , p = c.x + u + (l.x - c.x - u - d) / 2
                  , g = a.x - h - (a.x - l.x - h - d) / 2
                  , f = this.node.getComponent(r.$lP);
                this.leftBoundaryPos = f.convertToNodeSpaceAR(new r.eBl(p,0)),
                this.rightBoundaryPos = f.convertToNodeSpaceAR(new r.eBl(g,0))
            }
            onDestroy() {
                s.q.event.targetOff(this)
            }
        }
        ;
        (0,
        i.Cg)([(0,
        c.KA)(d.A)], f.prototype, "blockGroupModel", void 0),
        (0,
        i.Cg)([g([r.bP0])], f.prototype, "blockPlaceMentArr", void 0),
        f = (0,
        i.Cg)([p("BlockGroup")], f),
        window.cc._RF.pop()
    },
    94569(t, o, e) {
        "use strict";
        e.d(o, {
            BO: function() {
                return r
            },
            Rr: function() {
                return c
            },
            uD: function() {
                return s
            }
        }),
        e(74423),
        e(44114),
        e(98992),
        e(54520);
        var i = e(4911)
          , n = e(47075);
        function r(t) {
            if (0 === t.length)
                return {
                    row: 0,
                    col: 0
                };
            let o = 1 / 0
              , e = -1 / 0
              , i = 1 / 0
              , n = -1 / 0;
            for (let r = 0; r < t.length; r++) {
                const s = t[r];
                let c = 0
                  , l = 1;
                for (; l <= s; )
                    s & l && (o = Math.min(o, c),
                    e = Math.max(e, c),
                    i = Math.min(i, r),
                    n = Math.max(n, r)),
                    l <<= 1,
                    c++
            }
            return o === 1 / 0 ? {
                row: 0,
                col: 0
            } : {
                row: (o + e + 1) / 2,
                col: (i + n + 1) / 2
            }
        }
        function s(t) {
            if (t >= n.u6.length)
                return n.u6;
            const o = [];
            for (let e = 0; e < t; e++) {
                const t = c(o, n.u6);
                o.push(t)
            }
            return o
        }
        function c() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            const o = ((arguments.length > 1 ? arguments[1] : void 0) || n.u6).filter(o => !t.includes(o))
              , e = o.length - 1;
            return o[Math.floor((0,
            i.G0)() * (e - 0 + 1)) + 0]
        }
    },
    96833(t, o, e) {
        var i;
        !function(t, n) {
            function r(t) {
                var o = this;
                o.next = function() {
                    var t, e, i = o.w, n = o.X, r = o.i;
                    return o.w = i = i + 1640531527 | 0,
                    e = n[r + 34 & 127],
                    t = n[r = r + 1 & 127],
                    e ^= e << 13,
                    t ^= t << 17,
                    e ^= e >>> 15,
                    t ^= t >>> 12,
                    e = n[r] = e ^ t,
                    o.i = r,
                    e + (i ^ i >>> 16) | 0
                }
                ,
                function(t, o) {
                    var e, i, n, r, s, c = [], l = 128;
                    for (o === (0 | o) ? (i = o,
                    o = null) : (o += "\0",
                    i = 0,
                    l = Math.max(l, o.length)),
                    n = 0,
                    r = -32; r < l; ++r)
                        o && (i ^= o.charCodeAt((r + 32) % o.length)),
                        0 === r && (s = i),
                        i ^= i << 10,
                        i ^= i >>> 15,
                        i ^= i << 4,
                        i ^= i >>> 13,
                        r >= 0 && (s = s + 1640531527 | 0,
                        n = 0 == (e = c[127 & r] ^= i + s) ? n + 1 : 0);
                    for (n >= 128 && (c[127 & (o && o.length || 0)] = -1),
                    n = 127,
                    r = 512; r > 0; --r)
                        i = c[n + 34 & 127],
                        e = c[n = n + 1 & 127],
                        i ^= i << 13,
                        e ^= e << 17,
                        i ^= i >>> 15,
                        e ^= e >>> 12,
                        c[n] = i ^ e;
                    t.w = s,
                    t.X = c,
                    t.i = n
                }(o, t)
            }
            function s(t, o) {
                return o.i = t.i,
                o.w = t.w,
                o.X = t.X.slice(),
                o
            }
            function c(t, o) {
                null == t && (t = +new Date);
                var e = new r(t)
                  , i = o && o.state
                  , n = function() {
                    return (e.next() >>> 0) / 4294967296
                };
                return n.double = function() {
                    do {
                        var t = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }
                ,
                n.int32 = e.next,
                n.quick = n,
                i && (i.X && s(i, e),
                n.state = function() {
                    return s(e, {})
                }
                ),
                n
            }
            n && n.exports ? n.exports = c : e.amdD && e.amdO ? void 0 === (i = function() {
                return c
            }
            .call(o, e, o, n)) || (n.exports = i) : this.xor4096 = c
        }(0, t = e.nmd(t), e.amdD)
    }
}]);
//# sourceMappingURL=shared~adventureGameScene~gameScene.a007ba17d8b08f1e9b08.js.map
