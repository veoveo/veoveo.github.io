/*! For license information please see main.9b35204191e56ad21a48.js.LICENSE.txt */
"use strict";
(window.webpackChunkblock_blast_fe = window.webpackChunkblock_blast_fe || []).push([[792], {
    1973(t, e, i) {
        i.d(e, {
            ED: function() {
                return l
            },
            Ie: function() {
                return u
            },
            nw: function() {
                return h
            }
        }),
        i(16280),
        i(3362);
        var o = i(31635)
          , n = i(45041)
          , s = i(91942)
          , r = i(91919)
          , a = i(79444)
          , c = i(27606)
          , d = i(3360);
        function u() {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                const t = "//".concat(n.x6, "/api/v2/user/login_status")
                  , e = yield(0,
                s.Jt)(t, {}, {
                    showToast: !1,
                    showMonster: !1,
                    codeAlias: "error",
                    addActivityCode: !1
                });
                return e && 0 === e.error && e.data && ((0,
                c.il)(e.data),
                a.i.user.userid = e.data.userid,
                a.i.user.username = e.data.username,
                a.i.user.avatarHash = e.data.portrait),
                e
            })
        }
        function l() {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                const t = yield(0,
                s.vv)("/api-gateway/".concat(r.A.gameName, "/web/get_user_setting"), {}, {
                    showToast: !1
                });
                if (0 !== t.code || !t.data)
                    throw new Error("fetchUserSetting api error, code: ".concat(null == t ? void 0 : t.code, ", msg: ").concat(null == t ? void 0 : t.msg));
                return a.i.user.userSetting = t.data,
                t
            })
        }
        function h(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return (0,
                d._3)() ? Promise.resolve({
                    code: 0,
                    data: {},
                    msg: "Skipped in admin/replay mode"
                }) : (0,
                s.bE)("/api-gateway/".concat(r.A.gameName, "/web/set_user_setting"), {
                    data: t
                })
            })
        }
    },
    5187(t, e, i) {
        i.d(e, {
            Ap: function() {
                return l
            },
            S6: function() {
                return d
            },
            l2: function() {
                return u
            },
            s: function() {
                return c
            }
        }),
        i(16280);
        var o = i(31635)
          , n = i(26994)
          , s = i(79444)
          , r = i(27606)
          , a = i(91942);
        function c() {
            return (0,
            o.sH)(this, arguments, void 0, function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return function*() {
                    const e = yield(0,
                    a.vv)("/api-gateway/blockgame/game/landing_page", {});
                    if (!e || 0 !== e.code || !e.data) {
                        if (t)
                            throw new n.j("fetchLandingData api error",n.S.landingApiError);
                        throw new Error("fetchLandingData api error, code: ".concat(null == e ? void 0 : e.code, ", msg: ").concat(null == e ? void 0 : e.msg))
                    }
                    return e.data
                }()
            })
        }
        function d(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                const e = {
                    deviceID: t || ""
                }
                  , i = yield(0,
                a.bE)("/api-gateway/blockgame/game/get_winner_list", e);
                return i && 0 === i.code && i.data ? i.data : null
            })
        }
        function u() {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                const t = yield(0,
                a.vv)("/api-gateway/blockgame/game/profile", null, {
                    retryTime: 3,
                    showToast: !1
                });
                if (t && 0 === t.code && t.data) {
                    const {userInfo: e={}, shareList: i, groupList: o} = t.data;
                    s.i.user.username = e.username || "",
                    s.i.user.userid = e.userID || 0,
                    (0,
                    r.il)({
                        userid: s.i.user.userid,
                        username: s.i.user.username
                    }),
                    s.i.userGroup.init(o),
                    s.i.share.setShareList(i)
                }
                return t
            })
        }
        function l(t, e) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                const i = {
                    shareType: t,
                    requestID: e
                };
                return (0,
                a.bE)("/api-gateway/blockgame/share/obtain", i, {
                    showToast: !1
                })
            })
        }
    },
    13494(t, e, i) {
        i.d(e, {
            H: function() {
                return o
            }
        });
        var o, n = i(78248);
        !function(t) {
            t[t.Game = 1] = "Game",
            t[t.Menu = 2] = "Menu",
            t[t.Pop = 3] = "Pop",
            t[t.Float = 4] = "Float"
        }(o || (o = {})),
        (0,
        n.gpy)(o)
    },
    14231(t, e, i) {
        i(44114);
        var o = i(31635)
          , n = i(78248)
          , s = i(28089)
          , r = i(5167)
          , a = i(88892)
          , c = i(93088)
          , d = i(24139)
          , u = i(53501)
          , l = i(78811)
          , h = i(92002)
          , p = i(23241);
        const {ccclass: g, property: m} = n.P4R;
        window.cc._RF.push({}, "426c5Pn3y1LsYQvc2dQZLRu", "SettingPopup", void 0);
        let v = class extends s.A {
            beforeOpen() {
                this.tgVibration.node.parent.active = r.q.vibration.isSupportVibration,
                this.panelUITransform.height = r.q.vibration.isSupportVibration ? 504 : 454,
                r.q.ui.currentSceneName === l.P.GameScene && r.q.event.emit(p.E.CANCEL_USER_INACTIVE_COUNTDOWN)
            }
            onOpen() {
                this.tgMusic.isChecked = r.q.audio.musicVolume > 0,
                this.tgSound.isChecked = r.q.audio.effectVolume > 0,
                this.tgVibration.isChecked = r.q.vibration.isVibrationSwitch > 0,
                r.q.event.emit(a.H.USER_OPERATE_IN_GAME),
                this.initLayout(),
                (0,
                h.ad)(u.qo.LANDING_PAGE, u.W1.SETTING_POPUP, {
                    main_mode: (0,
                    d.v)()
                })
            }
            initLayout() {
                this.layout.getComponent(n.PEP).updateLayout(!0),
                this.layout.getComponent(n.PEP).enabled = !1
            }
            onCheckMusic(t) {
                const e = r.q.ui.currentSceneName === l.P.GameScene;
                r.q.audio.musicVolume = t.isChecked ? e ? Math.pow(10, -.3) : 1 : 0,
                (0,
                h.nx)(u.qo.LANDING_PAGE, u.vf.ACTION_BUTTON, u.W1.SETTING_POPUP, {
                    main_mode: (0,
                    d.v)(),
                    action_button_type: "music_btn"
                })
            }
            onCheckSound(t) {
                r.q.audio.effectVolume = t.isChecked ? 1 : 0,
                (0,
                h.nx)(u.qo.LANDING_PAGE, u.vf.ACTION_BUTTON, u.W1.SETTING_POPUP, {
                    main_mode: (0,
                    d.v)(),
                    action_button_type: "sound_effect_btn"
                })
            }
            onCheckVibration(t) {
                r.q.vibration.isVibrationSwitch = t.isChecked ? 1 : 0,
                (0,
                h.nx)(u.qo.LANDING_PAGE, u.vf.ACTION_BUTTON, u.W1.SETTING_POPUP, {
                    main_mode: (0,
                    d.v)(),
                    action_button_type: "vibration_btn"
                })
            }
            onClose() {
                r.q.ui.currentSceneName === l.P.GameScene && r.q.event.emit(p.E.RESTART_USER_INACTIVE_COUNTDOWN),
                (0,
                h.nx)(u.qo.LANDING_PAGE, u.vf.ACTION_BUTTON, u.W1.SETTING_POPUP, {
                    main_mode: (0,
                    d.v)(),
                    action_button_type: "close_btn"
                })
            }
        }
        ;
        (0,
        o.Cg)([m(c.m)], v.prototype, "tgMusic", void 0),
        (0,
        o.Cg)([m(c.m)], v.prototype, "tgSound", void 0),
        (0,
        o.Cg)([m(c.m)], v.prototype, "tgVibration", void 0),
        (0,
        o.Cg)([m(n.bP0)], v.prototype, "layout", void 0),
        (0,
        o.Cg)([m(n.$lP)], v.prototype, "panelUITransform", void 0),
        v = (0,
        o.Cg)([g("SettingPopup")], v),
        window.cc._RF.pop()
    },
    16034(t, e, i) {
        var o = i(46518)
          , n = i(32357).values;
        o({
            target: "Object",
            stat: !0
        }, {
            values: function(t) {
                return n(t)
            }
        })
    },
    17483(t, e, i) {
        i.d(e, {
            H: function() {
                return n
            }
        });
        var o = i(78248);
        function n(t, e) {
            const i = t.getComponent(o.$lP)
              , n = e / Math.max(i.width, i.height);
            n < 1 && i.setContentSize(i.width * n, i.height * n)
        }
    },
    18360(t, e, i) {
        i.d(e, {
            CX: function() {
                return s
            }
        }),
        i(16280),
        i(23792),
        i(3362),
        i(62953);
        var o = i(31635)
          , n = i(78811);
        function s(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                let e;
                switch (t) {
                case n.P.LandingScene:
                    return e = yield function() {
                        return (0,
                        o.sH)(this, void 0, void 0, function*() {
                            return Promise.all([i.e(430), i.e(302), i.e(826), i.e(940)]).then(i.bind(i, 61854))
                        })
                    }(),
                    e.LandingScene;
                case n.P.GameScene:
                    return e = yield function() {
                        return (0,
                        o.sH)(this, void 0, void 0, function*() {
                            return Promise.all([i.e(430), i.e(40), i.e(809), i.e(991)]).then(i.bind(i, 76929))
                        })
                    }(),
                    e.GameScene;
                case n.P.AdventureLandingScene:
                    return e = yield function() {
                        return (0,
                        o.sH)(this, void 0, void 0, function*() {
                            return Promise.all([i.e(430), i.e(302), i.e(826), i.e(809), i.e(454)]).then(i.bind(i, 17264))
                        })
                    }(),
                    e.AdventureLandingScene;
                case n.P.AdventureGameScene:
                    return e = yield function() {
                        return (0,
                        o.sH)(this, void 0, void 0, function*() {
                            return Promise.all([i.e(430), i.e(302), i.e(40), i.e(461)]).then(i.bind(i, 75397))
                        })
                    }(),
                    e.AdventureGameScene;
                case n.P.DownloadScene:
                    return e = yield function() {
                        return (0,
                        o.sH)(this, void 0, void 0, function*() {
                            return i.e(181).then(i.bind(i, 19335))
                        })
                    }(),
                    e.DownloadScene;
                case n.P.NotEventTimeScene:
                    return e = yield function() {
                        return (0,
                        o.sH)(this, void 0, void 0, function*() {
                            return i.e(242).then(i.bind(i, 36178))
                        })
                    }(),
                    e.NotEventTimeScene;
                default:
                    throw new Error("".concat(t, " 为未配置, 请在assets/scripts/Store/Constant/Game/ESceneJS.ts 配置"))
                }
            })
        }
    },
    21202(t, e, i) {
        i.d(e, {
            Y5: function() {
                return a
            },
            aH: function() {
                return c
            },
            g5: function() {
                return r
            }
        }),
        i(74423),
        i(16034),
        i(98992),
        i(81454);
        var o = i(87778)
          , n = i(79444)
          , s = i(91879);
        function r(t) {
            let e = "";
            switch (t) {
            case o.P.audio_block_blast_bgm:
                e = n.i.activitySetting.audio_bgm;
                break;
            case o.P.audio_wow:
                e = n.i.activitySetting.audio_good;
                break;
            case o.P.audio_keren:
                e = n.i.activitySetting.audio_great;
                break;
            case o.P.audio_cakep:
                e = n.i.activitySetting.audio_cakep;
                break;
            case o.P.audio_dahsyat:
                e = n.i.activitySetting.audio_dahsyat;
                break;
            case o.P.audio_fantastis:
                e = n.i.activitySetting.audio_fantastis
            }
            return e ? s.h.getRemoteAudioUrl(e) : t
        }
        function a() {
            return [n.i.activitySetting.audio_bgm, n.i.activitySetting.audio_good, n.i.activitySetting.audio_great, n.i.activitySetting.audio_cakep, n.i.activitySetting.audio_dahsyat, n.i.activitySetting.audio_fantastis].filter(Boolean).map(s.h.getRemoteAudioUrl)
        }
        function c(t) {
            return Object.values(o.P).includes(t)
        }
    },
    22074(t, e, i) {
        var o;
        i.d(e, {
            Q: function() {
                return o
            }
        }),
        function(t) {
            t.GAME_UPDATE_COIN_NUM = "game_update_coin_number",
            t.REWARD_PROP_EXPIRED = "reward_prop_expired"
        }(o || (o = {}))
    },
    23241(t, e, i) {
        var o, n;
        i.d(e, {
            E: function() {
                return n
            },
            L: function() {
                return o
            }
        }),
        function(t) {
            t.GAME_BEGIN = "game_begin",
            t.GAME_PAUSE = "game_pause",
            t.GAME_RESUME = "game_resume",
            t.GAME_RECOVER = "game_recover",
            t.GAME_END = "game_end",
            t.REFRESH_BLOCK_GROUP = "refresh_block_group",
            t.REFRESH_BLOCK_GROUP_END = "refresh_block_group_end",
            t.UPDATE_SCORE = "update_score",
            t.SET_SCORE = "set_score",
            t.GAME_RECORD = "game_record"
        }(o || (o = {})),
        function(t) {
            t.MANUAL_QUIT_GAME = "manual_quit_game",
            t.START_USER_GUIDE = "start_user_guide",
            t.FINISH_USER_GUIDE = "finish_user_guide",
            t.SHOW_FILL_BOARD_ANIM = "show_fill_board",
            t.SCORE_HINT_DISAPPEAR = "score_hint_disappear",
            t.USER_INACTIVE_COUNTDOWN_FINISH = "user_inactive_countdown_finish",
            t.RESTART_USER_INACTIVE_COUNTDOWN = "restart_user_inactive_countdown",
            t.CANCEL_USER_INACTIVE_COUNTDOWN = "cancel_user_inactive_countdown",
            t.FIRST_HARD_DIFFICULTY = "first_hard_difficulty",
            t.FIRST_HARD_DIFFICULTY_AFTER_REVIVE = "first_hard_difficulty_after_revive",
            t.USE_PROP_FAILED = "user_use_prop_failed",
            t.PROP_COUNT_DOWN_END = "prop_count_down_end",
            t.USE_REMOVE_PROP = "user_use_remove_prop",
            t.USE_EXTRA_BLOCK_PROP = "user_use_extra_block_prop",
            t.USE_REVIVE_PROP = "user_use_revive_prop",
            t.USE_BOMB_PROP = "user_use_bomb_prop",
            t.USE_REMOVE_PROP_END = "user_use_remove_prop_end",
            t.USE_EXTRA_BLOCK_PROP_END = "user_use_extra_block_prop_end",
            t.USE_BOMB_PROP_END = "user_use_bomb_prop_end",
            t.USE_REMOVE_PROP_HIDE = "user_use_remove_prop_hide",
            t.USE_EXTRA_BLOCK_PROP_HIDE = "user_use_extra_block_prop_hide",
            t.USE_BOMB_PROP_HIDE = "user_use_bomb_prop_hide",
            t.UPDATE_PROP_STATUS = "user_update_prop_status",
            t.DISABLE_PROP_BTN = "user_disable_prop_btn",
            t.DEATH_WAITING = "user_death_waiting",
            t.DEATH_WAITING_END = "user_death_waiting_end",
            t.TOUCH_EXTRA_BLOCK = "user_touch_extra_block",
            t.TOUCH_REMOVE_BLOCK = "user_touch_remove_block",
            t.CANCEL_PLACE_EXTRA_BLOCK = "cancel_place_extra_block",
            t.PLACE_BLOCK = "place_block",
            t.ELIMINATE_BLOCK = "eliminate_block",
            t.TOUCH_START_BLOCK = "touch_start_block",
            t.TOUCH_END_BLOCK = "touch_end_block",
            t.GAME_LEAVE = "game_leave",
            t.GAME_BACK = "game_back",
            t.ACTION_DONE = "action_done"
        }(n || (n = {}))
    },
    24139(t, e, i) {
        i.d(e, {
            h: function() {
                return s
            },
            v: function() {
                return r
            }
        });
        var o = i(16793)
          , n = i(76706);
        function s() {
            return (0,
            o.jw)(n._C.ADVENTURE)
        }
        function r() {
            return s() ? "adventure" : "classic"
        }
    },
    28089(t, e, i) {
        i.d(e, {
            A: function() {
                return h
            }
        }),
        i(23792),
        i(44114),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(53289)
          , r = i(13494)
          , a = i(73909)
          , c = i(59355);
        const {ccclass: d, property: u, disallowMultiple: l} = n.P4R;
        window.cc._RF.push({}, "ae63eMYQXFIJoZxYVXgypp/", "BaseUI", void 0);
        let h = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.uiType = r.H.Game,
                this.showBackButton = !1,
                this.showSettingButton = !1,
                this.autoDestroy = !0,
                this.isShowOpenAni = !0,
                this.isShowCloseAni = !0,
                this.darkBackground = !0,
                this.maskOpenNeedAnim = !0,
                this.maskAlpha = 180,
                this.storeArr = [],
                this.ctrArr = [],
                this.sceneNode = null,
                this.maskCloseNeedAnim = !0,
                this.barAlign = a.qx.Right,
                this.topBarOption = [],
                this.topBarList = []
            }
            get isMaskOpenNeedAnim() {
                return this.maskOpenNeedAnim
            }
            get isMaskCloseNeedAnim() {
                return this.maskCloseNeedAnim
            }
            set visible(t) {
                this.node && (this.node.active = t)
            }
            _doOpen(t, e) {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    this.ui = e,
                    yield this.onOpen(t),
                    this.isShowOpenAni && this.openingAnim()
                })
            }
            doBeforeOpen(t) {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    yield this.beforeOpen(t)
                })
            }
            onOpen(t) {}
            beforeOpen(t) {}
            openingAnim() {
                if (s.U.uiAnim && this.uiType === r.H.Pop)
                    return (0,
                    n.QxW)(this.node).set({
                        scale: new n.eBl(0,0,0)
                    }).to(.17, {
                        scale: new n.eBl(1.05,1.05,1)
                    }, {
                        easing: "backOut"
                    }).to(.3, {
                        scale: n.eBl.ONE.clone()
                    }, {
                        easing: "backOut"
                    }).startAsync()
            }
            back(t) {
                this.close()
            }
            closingAnim() {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    this.uiType === r.H.Pop && (yield function() {
                        return (0,
                        o.sH)(this, void 0, void 0, function*() {
                            return (0,
                            n.QxW)(this.node).to(.2, {
                                scale: n.eBl.ZERO.clone()
                            }, {
                                easing: "quadIn"
                            }).startAsync()
                        })
                    }
                    .call(this))
                })
            }
            close() {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    this.ui && (yield this.ui.close(this.uiKey),
                    this.ui = null)
                })
            }
            onClose() {}
            doClose() {
                return (0,
                o.sH)(this, arguments, void 0, function() {
                    var t = this;
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function*() {
                        t.closingAnim && s.U.uiAnim && t.isShowCloseAni && (yield t.closingAnim()),
                        t.autoDestroy || e ? t.node && t.node.destroy() : (t.node.setScale(1, 1),
                        t.node.parent = null),
                        t.onClose(),
                        t.ui = null
                    }()
                })
            }
            addTopBar(t) {
                this.topBarList.push(t)
            }
        }
        ;
        (0,
        o.Cg)([u({
            type: r.H,
            displayName: "UI Type",
            tooltip: "Game:常规UI\r\nMenu:UI按钮层\r\nPop:弹出式UI\r\nFloat:顶层UI"
        })], h.prototype, "uiType", void 0),
        (0,
        o.Cg)([u({
            tooltip: "是否显示返回按钮"
        })], h.prototype, "showBackButton", void 0),
        (0,
        o.Cg)([u({
            tooltip: "是否显示设置按钮"
        })], h.prototype, "showSettingButton", void 0),
        (0,
        o.Cg)([u({
            tooltip: "关闭界面时自动销毁节点"
        })], h.prototype, "autoDestroy", void 0),
        (0,
        o.Cg)([u({
            tooltip: "是否显示开启动画"
        })], h.prototype, "isShowOpenAni", void 0),
        (0,
        o.Cg)([u({
            tooltip: "是否显示关闭动画"
        })], h.prototype, "isShowCloseAni", void 0),
        (0,
        o.Cg)([u({
            tooltip: "在窗口下层显示暗底色",
            visible() {
                return this.uiType === r.H.Pop
            }
        })], h.prototype, "darkBackground", void 0),
        (0,
        o.Cg)([u({
            tooltip: "弹窗时蒙层是否需要动画",
            visible() {
                return this.uiType === r.H.Pop
            }
        })], h.prototype, "maskOpenNeedAnim", void 0),
        (0,
        o.Cg)([u({
            tooltip: "关闭时蒙层是否需要动画",
            visible() {
                return this.uiType === r.H.Pop
            }
        })], h.prototype, "maskCloseNeedAnim", void 0),
        (0,
        o.Cg)([u({
            type: a.qx,
            tooltip: "自动添加 top bar",
            group: "Other"
        })], h.prototype, "barAlign", void 0),
        (0,
        o.Cg)([u({
            type: [c.P],
            tooltip: "自动添加 top bar",
            group: "Other"
        })], h.prototype, "topBarOption", void 0),
        h = (0,
        o.Cg)([d("BaseUI"), l], h),
        window.cc._RF.pop()
    },
    30671(t, e, i) {
        i.d(e, {
            V: function() {
                return g
            }
        }),
        i(44114);
        var o = i(31635)
          , n = i(78248)
          , s = i(5167)
          , r = i(47601)
          , a = i(23241)
          , c = i(61038)
          , d = i(22074)
          , u = i(56984)
          , l = i(71573);
        const {ccclass: h, property: p} = n.P4R;
        window.cc._RF.push({}, "c4d29Q1Wc5JLYPH9rTE7Wi+", "PropReward", void 0);
        let g = class extends n.uAl {
            init(t) {
                const {propType: e, num: i, expireAt: o} = t;
                this.propType = e,
                this.iconMultiSprite.switchSprite(c.Ic[e]),
                o ? (this.expireAt = o,
                this.sandClock.node.active = !0,
                this.sandClock.updateUI({
                    amount: i,
                    expireAt: o
                }, e),
                this.bindEvents()) : this.sandClock.node.active = !1;
                const s = this.iconSprite.node.getComponent(n.$lP)
                  , r = 140 / Math.max(s.width, s.height);
                r < 1 && s.setContentSize(s.width * r, s.height * r),
                this.numLabel.string = i ? "".concat(i) : ""
            }
            bindEvents() {
                s.q.event.on(a.E.PROP_COUNT_DOWN_END, this.onPropCountDownEnd, this)
            }
            onPropCountDownEnd(t) {
                t === this.propType && (0,
                u.Fm)() >= 1e3 * this.expireAt && s.q.event.emit(d.Q.REWARD_PROP_EXPIRED)
            }
            onDestroy() {
                var t;
                null === (t = this.sandClock) || void 0 === t || t.destroy(),
                s.q.event.targetOff(this)
            }
        }
        ;
        (0,
        o.Cg)([p(n.kxk)], g.prototype, "iconSprite", void 0),
        (0,
        o.Cg)([p(n.JU7)], g.prototype, "numLabel", void 0),
        (0,
        o.Cg)([p(l.B)], g.prototype, "iconMultiSprite", void 0),
        (0,
        o.Cg)([p(r.W)], g.prototype, "sandClock", void 0),
        g = (0,
        o.Cg)([h("PropReward")], g),
        window.cc._RF.pop()
    },
    32357(t, e, i) {
        var o = i(43724)
          , n = i(79039)
          , s = i(79504)
          , r = i(42787)
          , a = i(71072)
          , c = i(25397)
          , d = s(i(48773).f)
          , u = s([].push)
          , l = o && n(function() {
            var t = Object.create(null);
            return t[2] = 2,
            !d(t, 2)
        })
          , h = function(t) {
            return function(e) {
                for (var i, n = c(e), s = a(n), h = l && null === r(n), p = s.length, g = 0, m = []; p > g; )
                    i = s[g++],
                    o && !(h ? i in n : d(n, i)) || u(m, t ? [i, n[i]] : n[i]);
                return m
            }
        };
        t.exports = {
            entries: h(!0),
            values: h(!1)
        }
    },
    32503(t, e, i) {
        i.d(e, {
            a: function() {
                return h
            }
        }),
        i(23792),
        i(44114),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(5167)
          , r = i(87778)
          , a = i(82179)
          , c = i(56431)
          , d = i(57975);
        const {ccclass: u, property: l} = n.P4R;
        window.cc._RF.push({}, "fcb79X5/4RG4pb9OJTf2UM/", "MilestonePrizeItem", void 0);
        let h = class extends d.C {
            constructor() {
                super(...arguments),
                this.dbLight = null,
                this.defaultStatusIcons = [null, a.O.image_claimed_milestone, a.O.image_unlock_milestone, a.O.image_locked_milestone]
            }
            onLoad() {
                super.onLoad(),
                this.dbLight.node.active = !1
            }
            playReceivedAm() {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    this.dbLight && (this.dbLight.node.active = !0,
                    this.dbLight.playAnimation("win_FX2", 1),
                    s.q.audio.playEffect(r.P.audio_gift_received),
                    yield(0,
                    n.QxW)(this.iconPrize.node).to(.13, {
                        scale: new n.eBl(1.5,1.5,1.5)
                    }).to(.17, {
                        scale: n.eBl.ONE
                    }).delay(.3).startAsync())
                })
            }
            playCheckedAm() {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    this.setStatus(c.a.RECEIVED),
                    s.q.audio.playEffect(r.P.audio_gift_checked),
                    yield(0,
                    n.QxW)(this.iconReceive).to(.13, {
                        scale: new n.eBl(1.5,1.5,1.5)
                    }).to(.17, {
                        scale: n.eBl.ONE
                    }).startAsync()
                })
            }
            onDestroy() {
                n.Kak.stopAllByTarget(this.iconPrize.node),
                n.Kak.stopAllByTarget(this.iconReceive)
            }
        }
        ;
        (0,
        o.Cg)([l(n.bdY.ArmatureDisplay)], h.prototype, "dbLight", void 0),
        h = (0,
        o.Cg)([u("MilestonePrizeItem")], h),
        window.cc._RF.pop()
    },
    37878(t, e, i) {
        i(23792),
        i(44114),
        i(98992),
        i(23215),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(41986)
          , r = i(5167)
          , a = i(23241);
        const {ccclass: c} = n.P4R;
        window.cc._RF.push({}, "7080azKpa9KX7HvxT4AVDcg", "BaseBlockGroupModel", void 0);
        let d = class extends s.t {
            constructor() {
                super(...arguments),
                this.isUpgradeHard = !1,
                this.isOriginDifficulty = !0,
                this.hasUsedProps = !1,
                this.blockGroup = [],
                this.placedBlocks = []
            }
            setPlacedBlockData(t) {
                this.placedBlocks.push(t)
            }
            setBlockGroup(t, e, i) {
                if (this.clearBlockGroup(),
                !i && (this.hasUsedProps = !1),
                this.blockGroup = t,
                e) {
                    const {difficultyMode: t, isUpgradeHard: i, isOriginDifficulty: o} = e;
                    this.difficultyMode = t,
                    this.isUpgradeHard = i,
                    this.isOriginDifficulty = o,
                    t && r.q.event.emit(a.L.GAME_RECORD)
                }
            }
            setBlockGroupItem(t, e, i) {
                this.blockGroup[t] = {
                    block: e,
                    blockShadow: i,
                    index: t
                }
            }
            getBlockFromGroup(t) {
                return this.blockGroup[t].block
            }
            getBlockShadowFromGroup(t) {
                return this.blockGroup[t].blockShadow
            }
            clearBlockGroup() {
                for (const t of this.blockGroup)
                    t.block && (t.block.destroy(),
                    t.block = null);
                this.placedBlocks = []
            }
            popPlacedBlock() {
                return this.placedBlocks.pop()
            }
            takeOffBlock(t) {
                this.blockGroup[t].block = null,
                this.blockGroup[t].blockShadow = null
            }
            isEmpty() {
                return this.blockGroup.every(t => !t.block)
            }
            markPropsUsed() {
                this.hasUsedProps = !0
            }
        }
        ;
        d = (0,
        o.Cg)([c("BaseBlockGroupModel")], d),
        e.A = d,
        window.cc._RF.pop()
    },
    39295(t, e, i) {
        i.d(e, {
            I: function() {
                return g
            },
            y: function() {
                return l
            }
        }),
        i(23792),
        i(44114),
        i(62953);
        var o, n = i(31635), s = i(8440), r = i(78248), a = i(9355);
        const {ccclass: c, property: d, executeInEditMode: u} = r.P4R;
        var l;
        !function(t) {
            t[t.HORIZONTAL = 0] = "HORIZONTAL",
            t[t.VERTICAL = 1] = "VERTICAL"
        }(l || (l = {}));
        const h = function() {
            return this.orientation === l.HORIZONTAL
        }
          , p = function() {
            return this.orientation === l.VERTICAL
        };
        window.cc._RF.push({}, "e2d62ggW79Alpjn6VI7ZzrV", "FitUI", void 0);
        let g = o = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.orientation = l.VERTICAL,
                this.left = !1,
                this.right = !1,
                this.top = !1,
                this.bottom = !1
            }
            static get screenRatio() {
                return r.nje.windowSize.height / r.nje.windowSize.width
            }
            static get contentRatio() {
                return (r.nje.windowSize.height - o.indentTop) / r.nje.windowSize.width
            }
            onLoad() {
                a.qS && this.getComponents(o).length > 2 && this.node.destroyAllChildren(),
                !a.qS && this.applySettings(),
                r.UpL.on("canvas-resize", () => {
                    !a.qS && this.applySettings()
                }
                )
            }
            applySettings() {
                if (s.Ay.ios) {
                    const t = {
                        top: this.top,
                        left: this.left,
                        right: this.right,
                        bottom: this.bottom
                    };
                    this.fitPhone(t)
                }
                const t = o.screenRatio
                  , e = r.UpL.getDesignResolutionSize();
                t < e.height / e.width && r.UpL.setResolutionPolicy(r.TH3.SHOW_ALL),
                o.isLongScreen = o.screenRatio > 1.9
            }
            fitPhone(t) {
                const e = r.UpL.getVisibleSize();
                let i = 0
                  , n = 0;
                if (e.height / e.width >= 1.8) {
                    const t = this.orientation === l.VERTICAL ? e.height : e.width;
                    i = 44 * t / 812,
                    n = 34 * t / 812
                }
                switch (this.orientation) {
                case l.VERTICAL:
                    t.top && this.updateWidget("top", i),
                    t.bottom && this.updateWidget("bottom", n),
                    o.indentTop = t.top ? i : 0,
                    o.indentBottom = t.bottom ? n : 0;
                    break;
                case l.HORIZONTAL:
                    t.left && this.updateWidget("left", n),
                    t.right && this.updateWidget("right", i),
                    o.indentTop = t.left ? i : 0,
                    o.indentBottom = t.right ? n : 0
                }
                o.fitOrientation = this.orientation
            }
            updateWidget(t, e) {
                const i = this.getComponent(r.x0g);
                i && (void 0 === i["default_".concat(t)] && (i["default_".concat(t)] = i["".concat(t)]),
                i["".concat(t)] = i["default_".concat(t)] + e)
            }
        }
        ;
        g.indentTop = 0,
        g.indentBottom = 0,
        g.fitOrientation = l.VERTICAL,
        g.isLongScreen = !1,
        (0,
        n.Cg)([d({
            displayName: "适配方向",
            type: (0,
            r.gpy)(l)
        })], g.prototype, "orientation", void 0),
        (0,
        n.Cg)([d({
            displayName: "left",
            visible: h
        })], g.prototype, "left", void 0),
        (0,
        n.Cg)([d({
            displayName: "right",
            visible: h
        })], g.prototype, "right", void 0),
        (0,
        n.Cg)([d({
            displayName: "top",
            visible: p
        })], g.prototype, "top", void 0),
        (0,
        n.Cg)([d({
            displayName: "bottom",
            visible: p
        })], g.prototype, "bottom", void 0),
        g = o = (0,
        n.Cg)([c("FitUI"), u], g),
        window.cc._RF.pop()
    },
    41986(t, e, i) {
        i.d(e, {
            t: function() {
                return r
            }
        }),
        i(44114);
        var o = i(31635)
          , n = i(78248);
        const {ccclass: s} = n.P4R;
        window.cc._RF.push({}, "8cd1fxjqHpNVYVBhCxzvGBs", "BaseModel", void 0);
        let r = class extends n.uAl {
        }
        ;
        r = (0,
        o.Cg)([s("BaseModel")], r),
        window.cc._RF.pop()
    },
    42386(t, e, i) {
        i.d(e, {
            t: function() {
                return l
            }
        }),
        i(44114);
        var o, n = i(31635), s = i(78248), r = i(17483);
        !function(t) {
            t.image_icon_coin1 = "texture/landingScene/landing_milestone_single/image_icon_coin1",
            t.image_icon_voucher1 = "texture/landingScene/landing_milestone_single/image_icon_voucher1"
        }(o || (o = {}));
        var a = i(61038)
          , c = i(91879);
        const {ccclass: d, property: u} = s.P4R;
        window.cc._RF.push({}, "58acb9Vvj9MWKGPJF8AppCX", "MilestoneRewardItem", void 0);
        let l = class extends s.uAl {
            setData(t) {
                switch (t.prizeID) {
                case a.Dy.COIN:
                    this.updateCoinReward(t.detail.amount);
                    break;
                case a.Dy.LDC:
                    this.updateLdcReward(t.detail)
                }
            }
            updateCoinReward(t) {
                this.txtNum.string = t ? t.toString() : "",
                c.h.setSpriteFromBundle(this.iconReward, o.image_icon_coin1)
            }
            updateLdcReward(t) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    switch (t.ldcType) {
                    case a.B0.COIN:
                        this.txtNum.string = t.coinAmount ? t.coinAmount.toString() : "";
                        break;
                    case a.B0.VOUCHER:
                    case a.B0.PRODUCT:
                    case a.B0.NONE:
                        this.txtNum.string = "1"
                    }
                    yield c.h.setRemoteSprite(this.iconReward, t.prizeIcon, ".png"),
                    this.iconReward && this.iconReward.node && (0,
                    r.H)(this.iconReward.node, 60)
                })
            }
        }
        ;
        (0,
        n.Cg)([u(s.JU7)], l.prototype, "txtNum", void 0),
        (0,
        n.Cg)([u(s.kxk)], l.prototype, "iconReward", void 0),
        l = (0,
        n.Cg)([d("MilestoneRewardItem")], l),
        window.cc._RF.pop()
    },
    47080(t, e, i) {
        i(23792),
        i(44114),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(41986);
        const {ccclass: r} = n.P4R;
        window.cc._RF.push({}, "ce4caAYXSpHNY63xgQGY5nk", "BaseGameModel", void 0);
        let a = class extends s.t {
            constructor() {
                super(...arguments),
                this.coreVersion = CORE_VERSION,
                this.sessionID = "",
                this.score = 0,
                this.todayHighestScore = 0,
                this.adsToken = "",
                this.wellModeRateConfigList = [],
                this.scoreConfigList = [],
                this.randomSeed = "",
                this.isShowingUserGuide = !1,
                this.currentUserGuideStep = 0,
                this.isUsingExtraBlock = !1,
                this.isUsingBomb = !1,
                this.isUsingRemove = !1,
                this.isUsingInventoryProp = !1,
                this.isShowingWarning = !1,
                this.isWaitingDDL = !1,
                this.maxCombo = 0,
                this.totalCombo = 0,
                this.lastCombo = 0,
                this.currentCombo = 0,
                this.playStartTime = 0,
                this.usedBlocks = 0,
                this.isUserGuide = !1,
                this.isGameOver = !1,
                this.isForceFinishing = !1,
                this.hasHardDifficulty = !1,
                this.hasHardDifficultyAfterRevive = !1,
                this.round = 0,
                this.roundOverall = 0,
                this.placeStep = 0
            }
            addUsedBlock() {
                this.usedBlocks += 1
            }
            updateCombo(t) {
                this.lastCombo = this.currentCombo,
                this.currentCombo = t,
                this.lastCombo !== this.currentCombo && t > 0 && (this.totalCombo += 1),
                t > this.maxCombo && (this.maxCombo = t)
            }
            addPlaceStep() {
                this.placeStep += 1
            }
            clearPlaceStep() {
                this.placeStep = 0
            }
            getBaseTrackParams() {
                return {}
            }
        }
        ;
        a = (0,
        o.Cg)([r("BaseGameModel")], a),
        e.A = a,
        window.cc._RF.pop()
    },
    47601(t, e, i) {
        i.d(e, {
            W: function() {
                return l
            }
        }),
        i(23792),
        i(44114),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(5167)
          , r = i(7604)
          , a = i(56984)
          , c = i(23241);
        const {ccclass: d, property: u} = n.P4R;
        window.cc._RF.push({}, "97a99jMbRJMhpTT7ZqFZLKb", "PropSandClock", void 0);
        let l = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.TWENTY_FOUR_HOURS_MS = 864e5
            }
            onEnable() {
                this.tipLabel.string = (0,
                r.wb)("text_item_expire_tip", {
                    countDown: ""
                }),
                this.tipLabel.updateRenderData(!0);
                const t = this.tipBox.getComponent(n.$lP)
                  , e = t.contentSize
                  , i = this.tipLabel.node.getComponent(n.$lP).height + 40;
                t.setContentSize(e.width, i),
                this.tipBox.setPosition(this.tipBox.position.x, i - 60 > 0 ? (i - 60) / 2 + 60 : 60),
                this.tipLabel.getComponent(n.x0g).updateAlignment(),
                this.tipCountDownBox.getComponent(n.x0g).updateAlignment(),
                this.tipBg.getComponent(n.x0g).updateAlignment()
            }
            update() {
                this.expiryInfo && this.updateExpiryCountDown(1e3 * this.expiryInfo.expireAt)
            }
            updateUI(t, e) {
                this.expiryInfo = t,
                this.propType = e,
                this.expiryInfo && 0 !== this.expiryInfo.amount && this.propType ? (this.node.active = !0,
                this.updateExpiryCountDown(1e3 * this.expiryInfo.expireAt)) : this.node.active = !1
            }
            onClickSandClock() {
                this.tipBox.active ? (this.hideTipBox(),
                s.q.event.emit(c.E.RESTART_USER_INACTIVE_COUNTDOWN)) : (this.showTipBox(),
                s.q.event.emit(c.E.CANCEL_USER_INACTIVE_COUNTDOWN))
            }
            updateExpiryCountDown(t) {
                const e = !(0,
                a.Mv)(t)
                  , i = e ? 1 : (t - (0,
                a.Fm)()) / this.TWENTY_FOUR_HOURS_MS;
                this.progressBar.progress = Math.max(0, Math.min(1, i)),
                this.tipLabel.node.active = !0,
                this.tipCountDownBox.active = !0,
                this.tipDaysLabel.node.active = e,
                this.tipCountDownLabel.string = (e ? (0,
                a.qE)(t) : (0,
                a.RJ)(t, "{HH:mm:ss}")).toString(),
                i <= 0 && (this.expiryInfo = null,
                s.q.event.emit(c.E.PROP_COUNT_DOWN_END, this.propType))
            }
            showTipBox() {
                this.tipBox.active = !0;
                const t = this.tipBox.getComponent(n.wFi);
                (0,
                n.QxW)(t).set({
                    opacity: 255
                }).delay(2).to(.5, {
                    opacity: 0
                }).call( () => {
                    this.tipBox.active = !1,
                    s.q.event.emit(c.E.RESTART_USER_INACTIVE_COUNTDOWN)
                }
                ).start()
            }
            hideTipBox() {
                (0,
                n.QxW)(this.tipBox.getComponent(n.wFi)).stop(),
                this.tipBox.active = !1
            }
        }
        ;
        (0,
        o.Cg)([u(n.z21)], l.prototype, "progressBar", void 0),
        (0,
        o.Cg)([u(n.bP0)], l.prototype, "tipBox", void 0),
        (0,
        o.Cg)([u(n.bP0)], l.prototype, "tipBg", void 0),
        (0,
        o.Cg)([u(n.JU7)], l.prototype, "tipLabel", void 0),
        (0,
        o.Cg)([u(n.bP0)], l.prototype, "tipCountDownBox", void 0),
        (0,
        o.Cg)([u(n.JU7)], l.prototype, "tipCountDownLabel", void 0),
        (0,
        o.Cg)([u(n.JU7)], l.prototype, "tipDaysLabel", void 0),
        l = (0,
        o.Cg)([d("PropSandClock")], l),
        window.cc._RF.pop()
    },
    53289(t, e, i) {
        var o;
        i.d(e, {
            U: function() {
                return n
            }
        }),
        function(t) {
            t[t.Low = 0] = "Low",
            t[t.Medium = 1] = "Medium",
            t[t.High = 2] = "High"
        }(o || (o = {}));
        const n = {
            level: o.High,
            uiAnim: !0,
            fps: 60
        };
        o.High,
        o.Medium,
        o.Low
    },
    53771(t, e, i) {
        i.d(e, {
            kG: function() {
                return a
            },
            mV: function() {
                return c
            },
            yY: function() {
                return d
            }
        });
        var o = i(2981)
          , n = i(24258);
        const s = {
            user: !0
        };
        function r() {
            return o.H.GAME_RECORD
        }
        function a() {
            const t = r();
            return (0,
            n.Gq)(t, s)
        }
        function c(t) {
            const e = r();
            (0,
            n.SO)(e, t, s)
        }
        function d() {
            const t = r();
            (0,
            n.Ai)(t, s)
        }
    },
    55367(t, e, i) {
        i.d(e, {
            c: function() {
                return a
            }
        }),
        i(23792),
        i(44114),
        i(98992),
        i(3949),
        i(23500),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(28089);
        const {ccclass: r} = n.P4R;
        window.cc._RF.push({}, "29e55TlFU5CJIqNpcFyoOwp", "BaseScene", void 0);
        let a = class extends s.A {
            constructor() {
                super(...arguments),
                this.storeArr = [],
                this.ctrArr = []
            }
            bindStoreAndCtr(t, e) {
                t && t.forEach(t => {
                    !this.getComponent(t) && this.addComponent(t)
                }
                ),
                e && e.forEach(t => {
                    !this.getComponent(t) && this.addComponent(t)
                }
                )
            }
            beforeEnter(t, e) {}
            onEnter(t) {}
            afterEnter(t) {}
            back() {}
        }
        ;
        a = (0,
        o.Cg)([r("BaseScene")], a),
        window.cc._RF.pop()
    },
    56427(t, e, i) {
        i.d(e, {
            J: function() {
                return u
            }
        });
        var o = i(31635)
          , n = i(87997)
          , s = i(91879)
          , r = i(62474)
          , a = i(82128)
          , c = i(78811);
        const d = {
            [c.P.AdventureLandingScene]: r.Z.AdventureLandingView,
            [c.P.LandingScene]: r.Z.LandingView,
            [c.P.GameScene]: r.Z.GameView,
            [c.P.DownloadScene]: r.Z.DownloadView,
            [c.P.NotEventTimeScene]: r.Z.NotEventTimeView
        };
        function u(t) {
            return (0,
            o.sH)(this, arguments, void 0, function(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return function*() {
                    const i = d[t];
                    i ? (console.warn("[res] 开始预加载场景资源 ".concat(t, "  ")),
                    yield s.h.preLoadAssetFromBundle(i, a.J.resources, t => {
                        e && (0,
                        n.f$)(.9 * t)
                    }
                    )) : console.warn("[res] 场景 ".concat(t, " 为未配置 firstView "))
                }()
            })
        }
    },
    56431(t, e, i) {
        var o;
        i.d(e, {
            a: function() {
                return o
            }
        }),
        function(t) {
            t[t.RECEIVED = 1] = "RECEIVED",
            t[t.RECEIVING = 2] = "RECEIVING",
            t[t.UNRECEIVED = 3] = "UNRECEIVED"
        }(o || (o = {}))
    },
    57131(t, e, i) {
        i.d(e, {
            BK: function() {
                return c
            },
            R2: function() {
                return r
            },
            lu: function() {
                return a
            }
        }),
        i(16280),
        i(23792),
        i(44114),
        i(3362),
        i(98992),
        i(3949),
        i(23500),
        i(62953);
        var o = i(31635)
          , n = i(55367)
          , s = i(71241);
        function r(t) {
            if (!t || !t.isValid)
                return null;
            let e = t;
            for (; e && !e.getComponent(n.c); )
                e = e.parent;
            return e
        }
        function a(t, e) {
            let i, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = new Promise( (t, e) => i = e)
              , a = Promise.race([r, t()]);
            return {
                abort: i,
                finalPromise: a.then(t => (0,
                o.sH)(this, void 0, void 0, function*() {
                    return null == e ? void 0 : e(t)
                })).catch(t => (0,
                o.sH)(this, void 0, void 0, function*() {
                    if (t !== s.ze.USER_DID_TAP_BACK || n)
                        return Promise.reject(t)
                }))
            }
        }
        function c(t, e) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                let i = null;
                const o = () => {
                    null !== i && (clearTimeout(i),
                    i = null)
                }
                  , n = Promise.race([t, new Promise( (t, n) => {
                    i = setTimeout( () => {
                        o(),
                        n(new Error("Promise timed out"))
                    }
                    , e)
                }
                )]);
                try {
                    const t = n;
                    return o(),
                    t
                } catch (t) {
                    throw o(),
                    t
                }
            })
        }
    },
    57188(t, e, i) {
        i(23792),
        i(44114),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(5167)
          , r = i(87778);
        const {ccclass: a, property: c} = n.P4R;
        var d;
        !function(t) {
            t[t.None = -1] = "None",
            t[t.Normal = 0] = "Normal"
        }(d || (d = {})),
        (0,
        n.UyH)(d),
        window.cc._RF.push({}, "4a4e39j4sRKaLjKhUe4DaQk", "NiceButton", void 0);
        let u = class extends n.$nd {
            constructor() {
                super(...arguments),
                this.audio = d.Normal,
                this.propagationStopped = !0,
                this.movePreventClick = !1,
                this.longPress = !1,
                this.minPressTime = 1,
                this.longPressEvent = new n.JmQ,
                this.touchStartTime = 0
            }
            isMove(t, e) {
                return Math.abs(t.x - e.x) > 5 || Math.abs(t.y - e.y) > 5
            }
            _onTouchEnded(t) {
                this.movePreventClick && this.isMove(this.touchStartLocation, t.getLocation()) || (this.longPress && n.ogD.now() - this.touchStartTime > 1e3 * this.minPressTime ? (this.longPressEvent && this.longPressEvent.emit(null),
                this._resetState()) : super._onTouchEnded(t),
                this.audio !== d.None && s.q.audio.playEffect(r.P.audio_click)),
                this.touchStartTime = 0,
                t && (t.propagationStopped = this.propagationStopped)
            }
            _onTouchMove(t) {
                super._onTouchMove(t),
                t && (t.propagationStopped = this.propagationStopped)
            }
            _onTouchBegan(t) {
                this.touchStartLocation = t.getLocation(),
                super._onTouchBegan(t),
                s.q.vibration.isVibrationEnabled && s.q.vibration.vibrate(1),
                this.touchStartTime = n.ogD.now(),
                t && (t.propagationStopped = this.propagationStopped)
            }
            _onTouchCancel(t) {
                super._onTouchCancel(t),
                this.touchStartTime = 0,
                t && (t.propagationStopped = this.propagationStopped)
            }
            setInteractable(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (this.interactable = t,
                e) {
                    const e = this.getComponent(n.kxk);
                    e && (e.grayscale = !t)
                }
            }
        }
        ;
        (0,
        o.Cg)([c({
            type: d,
            tooltip: "按钮点击音效"
        })], u.prototype, "audio", void 0),
        (0,
        o.Cg)([c({
            tooltip: "阻止向上冒泡"
        })], u.prototype, "propagationStopped", void 0),
        (0,
        o.Cg)([c({
            tooltip: "点击后有移动时不触发点击事件"
        })], u.prototype, "movePreventClick", void 0),
        (0,
        o.Cg)([c({
            tooltip: "是否需要长按"
        })], u.prototype, "longPress", void 0),
        (0,
        o.Cg)([c({
            tooltip: "触发长按的最短时间",
            visible() {
                return this.longPress
            }
        })], u.prototype, "minPressTime", void 0),
        (0,
        o.Cg)([c({
            type: n.JmQ,
            visible() {
                return this.longPress
            },
            tooltip: "长按事件回调"
        })], u.prototype, "longPressEvent", void 0),
        u = (0,
        o.Cg)([a("NiceButton")], u),
        e.A = u,
        window.cc._RF.pop()
    },
    57975(t, e, i) {
        i.d(e, {
            C: function() {
                return m
            }
        }),
        i(23792),
        i(44114),
        i(98992),
        i(3949),
        i(23500),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(5167)
          , r = i(82179)
          , a = i(53501)
          , c = i(78811)
          , d = i(92002)
          , u = i(91879)
          , l = i(56431)
          , h = i(42386);
        const {ccclass: p, property: g} = n.P4R;
        window.cc._RF.push({}, "cfac22EF8BPUpA9vNXz3tAy", "PrizeItem", void 0);
        let m = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.rewardListNode = [],
                this.hasRewardList = !1,
                this.isShowDetail = !1,
                this.milestoneIndex = 0,
                this.defaultStatusIcons = [null, r.O.image_claimed_milestone, r.O.image_unlock_milestone, r.O.image_locked_milestone]
            }
            get score() {
                return this.prizeItem.score
            }
            onLoad() {
                this.iconDetail.active = !1,
                this.iconReceive.active = !1,
                this.milestoneDetail.active = !1,
                this.rewardList.removeAllChildren()
            }
            getCurrentClaimStatus() {
                return this.currentClaimStatus
            }
            getIconPrizeNode() {
                return this.iconPrize.node
            }
            getMilestoneIndex() {
                return this.milestoneIndex
            }
            setPrizeDetailShowDown() {
                this.rewardArrow.setRotationFromEuler(0, 0, 180),
                this.rewardArrow.setPosition(0, 46, 0),
                this.milestoneDetail.setPosition(0, -80, 0),
                this.milestoneDetail.setParent(this.node.parent || this.node),
                this.milestoneDetail.setPosition(this.node.getPosition().add(this.milestoneDetail.getPosition()))
            }
            setData(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.prizeItem = t,
                this.milestoneIndex = e,
                this.txtScore.string = t.score.toString(),
                this.iconDetail.active = t.claimStatus !== l.a.RECEIVED,
                this.setStatus(t.claimStatus),
                this.updateRewardList()
            }
            setStatus(t) {
                if (this.currentClaimStatus === t)
                    return;
                let e = this.currentClaimStatus;
                const i = this.currentClaimStatus;
                if (i)
                    switch (t) {
                    case l.a.UNRECEIVED:
                        i !== l.a.RECEIVING && i !== l.a.RECEIVED && (e = l.a.UNRECEIVED);
                        break;
                    case l.a.RECEIVING:
                        i === l.a.UNRECEIVED && (e = l.a.RECEIVING);
                        break;
                    case l.a.RECEIVED:
                        e = l.a.RECEIVED
                    }
                else
                    e = t;
                this.currentClaimStatus = e,
                this.prizeItem.claimStatus = e,
                this.iconReceive.active = e === l.a.RECEIVED,
                this.updateStatusIcons()
            }
            updateStatusIcons() {
                this.prizeItem.statusIcons && this.prizeItem.statusIcons[this.currentClaimStatus] ? u.h.setRemoteSprite(this.iconPrize, this.prizeItem.statusIcons[this.currentClaimStatus], ".png") : u.h.setSpriteFromBundle(this.iconPrize, this.defaultStatusIcons[this.currentClaimStatus])
            }
            onClickDetail() {
                s.q.ui.currentSceneName === c.P.GameScene && (0,
                d.MP)(a.qo.GAME_PAGE, a.vf.ACTION_BUTTON, {
                    action_button_type: "daily_milestone",
                    current_milestone: this.milestoneIndex + 1
                }),
                this.isShowDetail || this.iconDetail.active && (this.isShowDetail = !0,
                this.milestoneDetail.active = !0,
                (0,
                n.QxW)(this.milestoneDetail).delay(2).call( () => {
                    this.isShowDetail = !1,
                    this.milestoneDetail.active = !1
                }
                ).start())
            }
            updateRewardList() {
                this.hasRewardList = this.prizeItem.prize && this.prizeItem.prize.length > 0,
                !this.hasRewardList && (this.iconDetail.active = this.hasRewardList),
                this.rewardListNode.forEach(t => t.destroy()),
                this.prizeItem.prize.length = Math.min(this.prizeItem.prize.length, 4),
                this.prizeItem.prize.forEach(t => {
                    const e = (0,
                    n.Flv)(this.rewardItemPrefab);
                    e.getComponent(h.t).setData(t),
                    this.rewardList.addChild(e),
                    this.rewardListNode.push(e)
                }
                )
            }
        }
        ;
        (0,
        o.Cg)([g(n.JU7)], m.prototype, "txtScore", void 0),
        (0,
        o.Cg)([g(n.kxk)], m.prototype, "iconPrize", void 0),
        (0,
        o.Cg)([g(n.bP0)], m.prototype, "iconReceive", void 0),
        (0,
        o.Cg)([g(n.bP0)], m.prototype, "iconDetail", void 0),
        (0,
        o.Cg)([g(n.bP0)], m.prototype, "milestoneDetail", void 0),
        (0,
        o.Cg)([g(n.bP0)], m.prototype, "rewardList", void 0),
        (0,
        o.Cg)([g(n.bP0)], m.prototype, "rewardArrow", void 0),
        (0,
        o.Cg)([g(n.tX0)], m.prototype, "rewardItemPrefab", void 0),
        m = (0,
        o.Cg)([p("PrizeItem")], m),
        window.cc._RF.pop()
    },
    59355(t, e, i) {
        i.d(e, {
            P: function() {
                return o
            },
            u: function() {
                return r
            }
        });
        var o, n = i(78248), s = i(62474);
        !function(t) {
            t[t.CoinBar = 0] = "CoinBar"
        }(o || (o = {})),
        (0,
        n.gpy)(o);
        const r = {
            [o.CoinBar]: s.Z.CoinBar
        }
    },
    67860(t, e, i) {
        i(23792),
        i(33110),
        i(3362),
        i(62953);
        var o, n = i(31635), s = i(4911), r = i(9355), a = i(95925), c = i(5167), d = i(2818), u = i(28988), l = i(73986);
        window.IS_NATIVE || (window.process || (window.process = {}),
        window.process.env = {
            NODE_ENV: r.$y ? "development" : "production"
        });
        class h {
            static checkParams(t) {
                return !(void 0 !== t.switch && !t.switch || !t.userInfo)
            }
            static showBVGC(t) {
                if (!this.checkParams(t))
                    return;
                const {url: e="", project: i="", entryPoint: n="", appid: r=""} = t
                  , a = (0,
                s.Ri)("shopee_rn_bundle_version");
                if (console.log("[BVGC RN Version] = ", a),
                console.log("BVGC loading started: ", t),
                (0,
                d.aR)() && a && parseInt(a) >= 6e6)
                    return c.q.event.emit(l.s.SHOW),
                    void (0,
                    u.Rv)("rn/@shopee-rn/bvgc-rn/BOTTOM_DRAWER", {
                        __anim__: 3,
                        bvgcParams: JSON.stringify({
                            redirectUrl: e,
                            game: {
                                name: i,
                                entryPoint: n
                            },
                            appId: r
                        })
                    });
                window.IS_NATIVE ? window.bridgeCallHandlerPromise("navigate", {
                    url: e,
                    popSelf: 0,
                    useWKWebView: 1
                }, !1) : (o.renderBVGC(!0, t),
                this.bvgcStartShowTime = Date.now(),
                c.q.event.emit(l.s.START_LOADING),
                c.q.spinner.startShow(),
                o.bvgcTimeoutTimer && clearTimeout(o.bvgcTimeoutTimer),
                o.bvgcTimeoutTimer = window.setTimeout( () => {
                    c.q.event.emit(l.s.TIME_OUT, Date.now() - o.bvgcStartShowTime),
                    c.q.ui.showToast("BVGC loading timeout"),
                    o.hideBVGC()
                }
                , 15e3))
            }
            static hideBVGC() {
                window.IS_NATIVE || (o.bvgcTimeoutTimer && clearTimeout(o.bvgcTimeoutTimer),
                o.renderBVGC(!1),
                c.q.spinner.end(),
                c.q.event.emit(l.s.HIDE))
            }
        }
        o = h,
        h.renderBVGC = function(t) {
            for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                s[r - 1] = arguments[r];
            return (0,
            n.sH)(void 0, [t, ...s], void 0, function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function*() {
                    t && (0,
                    a.uq)("LoadBvgcStart");
                    const {entryPoint: n="", userInfo: s={
                        userid: 0,
                        username: ""
                    }, url: r="", project: d="", appid: u=""} = e
                      , h = {
                        open: t,
                        userInfo: {
                            userid: s.userid,
                            username: s.username || s.userid.toString()
                        },
                        game: {
                            name: d,
                            entryPoint: n
                        },
                        appId: u,
                        redirectURL: r,
                        onClose: () => {
                            o.hideBVGC()
                        }
                        ,
                        onError: t => {
                            (0,
                            a.uq)("LoadBvgcFail"),
                            console.error("bvgc error", t),
                            c.q.event.emit(l.s.LOAD_ERROR),
                            o.hideBVGC()
                        }
                        ,
                        onShow: () => {
                            (0,
                            a.uq)("LoadBvgcEnd"),
                            c.q.event.emit(l.s.SHOW),
                            c.q.spinner.end(),
                            o.bvgcTimeoutTimer && clearTimeout(o.bvgcTimeoutTimer)
                        }
                    }
                      , p = document.getElementById("react-app")
                      , {renderBVGC: g} = yield Promise.all([i.e(481), i.e(710)]).then(i.bind(i, 22413));
                    g(h, p)
                }()
            })
        }
        ,
        e.A = h
    },
    68062(t, e, i) {
        i.d(e, {
            $: function() {
                return g
            },
            f: function() {
                return p
            }
        }),
        i(16280),
        i(23792),
        i(3362),
        i(62953);
        var o = i(31635)
          , n = i(5187)
          , s = i(5167)
          , r = i(7604)
          , a = i(85185)
          , c = i(62474)
          , d = i(71241)
          , u = i(82128)
          , l = i(79444)
          , h = i(27606);
        function p(t, e) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                let o = null;
                try {
                    if (s.q.spinner.startShow(),
                    o = (yield Promise.all([i.e(425), i.e(601)]).then(i.bind(i, 50945))).default,
                    !o)
                        throw new Error("ShareController is null",{
                            cause: "Import ShareController failed"
                        })
                } catch (t) {
                    return s.q.ui.showToast((0,
                    r.wb)("text_share_failed")),
                    (0,
                    h.Kb)("[UI Error] opening share page error :", {
                        error: t
                    }),
                    !1
                } finally {
                    s.q.spinner.end()
                }
                try {
                    return yield o.inst.share(t, e),
                    !0
                } catch (t) {
                    return !1
                }
            })
        }
        function g(t, e) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                try {
                    s.q.spinner.startShow();
                    const i = yield(0,
                    n.Ap)(t, e);
                    if (i && 0 === i.code && i.data) {
                        const {prizeList: e, shareInfo: o} = i.data;
                        return e && e.length > 0 && (yield s.q.ui.open({
                            uiPath: c.Z.RewardPopup,
                            data: {
                                rewardItem: (0,
                                a.fH)(e)
                            }
                        })),
                        l.i.share.updateShareInfo(t, o),
                        i
                    }
                    return i.code === d.ze.SHARE_REACHED_LIMIT ? (s.q.ui.showToast((0,
                    r.wb)("text_share_limit_reached")),
                    l.i.share.updateShareCount(t, l.i.share.getShareLimit(t)),
                    i) : (s.q.error.showMonsterToast({
                        msg: (0,
                        r.wb)("text_network_error"),
                        quitType: u.z.REFRESH_GAME,
                        onRetry: g.bind(this, t, e),
                        hideClose: !0
                    }),
                    (0,
                    h.Kb)("[obtainShareRewardAfterShare error] 分享获取道具失败, code: ".concat(i.code), {
                        title: "Share Error"
                    }),
                    i)
                } catch (t) {
                    s.q.error.showMonsterToast({
                        msg: (0,
                        r.wb)("text_network_error"),
                        quitType: u.z.REFRESH_GAME,
                        hideClose: !0
                    }),
                    (0,
                    h.Kb)("[obtainShareRewardAfterShare error] 分享获取道具异常", {
                        title: "Share Error",
                        error: t
                    })
                } finally {
                    s.q.spinner.end()
                }
            })
        }
    },
    71573(t, e, i) {
        i.d(e, {
            B: function() {
                return c
            }
        }),
        i(23792),
        i(44114),
        i(62953);
        var o = i(31635)
          , n = i(78248);
        const {ccclass: s, property: r, requireComponent: a} = n.P4R;
        window.cc._RF.push({}, "0f73bgQMzJEfJHD0a+Lf6HR", "MultiSprite", void 0);
        let c = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.sprites = [],
                this.currentIndex = 0
            }
            onLostFocusInEditor() {
                this.switchSprite(this.currentIndex)
            }
            switchSprite(t) {
                this.currentIndex = t,
                this.node.getComponent(n.kxk).spriteFrame = this.sprites[t]
            }
            getCurrentIndex() {
                return this.currentIndex
            }
        }
        ;
        (0,
        o.Cg)([r([n.Vkj])], c.prototype, "sprites", void 0),
        (0,
        o.Cg)([r(n.V$7)], c.prototype, "currentIndex", void 0),
        c = (0,
        o.Cg)([s("MultiSprite"), a(n.kxk)], c),
        window.cc._RF.pop()
    },
    73909(t, e, i) {
        i.d(e, {
            eU: function() {
                return r
            },
            qx: function() {
                return o
            }
        });
        var o, n = i(78248), s = i(59355);
        class r extends n.uAl {
            init(t) {
                this.type = t
            }
            hide() {
                this.node.active = !1
            }
            show() {
                this.node.active = !0
            }
        }
        s.P.CoinBar,
        function(t) {
            t[t.Left = 0] = "Left",
            t[t.Right = 1] = "Right",
            t[t.Center = 2] = "Center"
        }(o || (o = {})),
        (0,
        n.gpy)(o)
    },
    73986(t, e, i) {
        var o;
        i.d(e, {
            s: function() {
                return o
            }
        }),
        function(t) {
            t.START_LOADING = "BVGC_START_LOADING",
            t.TIME_OUT = "BVGC_TIME_OUT",
            t.LOAD_ERROR = "BVGC_LOAD_ERROR",
            t.SHOW = "BVGC_SHOW",
            t.HIDE = "BVGC_HIDE"
        }(o || (o = {}))
    },
    75913(t, e, i) {
        i.d(e, {
            I: function() {
                return d
            }
        }),
        i(23792),
        i(44114),
        i(98992),
        i(72577),
        i(3949),
        i(81454),
        i(23500),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(56431)
          , r = i(32503);
        const {ccclass: a, property: c} = n.P4R;
        window.cc._RF.push({}, "1880fx0Pt5H67jLKq65cYgi", "MilestoneProgress", void 0);
        let d = class extends n.uAl {
            constructor() {
                super(...arguments),
                this.imgProgressStart = null,
                this.progress = null,
                this.isPrizeDetailShowDown = !1,
                this.maxXLen = 0,
                this.score = 0,
                this.maxScore = 0,
                this.prizeListNode = [],
                this.milestonePrizeItemArr = []
            }
            onLoad() {
                this.initMilestoneProgress()
            }
            getPrizeXPos(t, e) {
                return Math.round(t / e * this.maxXLen)
            }
            initScore(t) {
                this.score = t,
                this.progress.progress = this.score / this.maxScore,
                this.imgProgressStart.active = this.score > 0
            }
            initMilestoneProgress() {
                this.progress.progress = 0,
                this.imgProgressStart.active = !1,
                this.maxXLen = this.listNode.getComponent(n.$lP).width,
                this.listNode.removeAllChildren(),
                this.prizeListNode = [],
                this.milestonePrizeItemArr = []
            }
            setData(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.prizeListNode.forEach(t => t.destroy()),
                this.prizeListNode = [];
                const i = Math.max(...t.map(t => t.score));
                for (let e = 0; e < t.length; e++) {
                    const o = t[e]
                      , s = (0,
                    n.Flv)(this.prizeItemPrefab);
                    this.listNode.insertChild(s, e);
                    const a = this.getPrizeXPos(o.score, i);
                    s.setPosition(a, 0, 0);
                    const c = s.getComponent(r.a);
                    c.setData(o, e),
                    this.isPrizeDetailShowDown && c.setPrizeDetailShowDown(),
                    this.milestonePrizeItemArr.push(c),
                    this.prizeListNode.push(s)
                }
                this.maxScore = i,
                this.initScore(e)
            }
            setScore(t) {
                this.imgProgressStart.active = t > 0,
                this.score = t,
                this.progress.progress = this.score / this.maxScore,
                this.prizeListNode.forEach( (t, e) => {
                    const i = this.milestonePrizeItemArr[e];
                    i && i.score <= this.score ? i.setStatus(s.a.RECEIVING) : i.setStatus(s.a.UNRECEIVED)
                }
                )
            }
            setScoreAndGetPrizeNode(t) {
                this.imgProgressStart.active = t > 0,
                this.score = t,
                this.progress.progress = this.score / this.maxScore;
                let e = null;
                return this.prizeListNode.forEach( (t, i) => {
                    const o = this.milestonePrizeItemArr[i];
                    o && o.score <= this.score ? o.getCurrentClaimStatus() === s.a.UNRECEIVED && (e = t) : o.setStatus(s.a.UNRECEIVED)
                }
                ),
                e
            }
            setScoreAm(t) {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    t > 0 && (this.imgProgressStart.active = !0,
                    yield(0,
                    n.QxW)(this.progress).to(.8, {
                        progress: t / this.maxScore
                    }, {
                        easing: "cubicInOut"
                    }).startAsync()),
                    this.setScore(t);
                    const e = this.milestonePrizeItemArr.find(e => e.score === t);
                    e && (yield e.playReceivedAm())
                })
            }
            playCheckAnimation(t) {
                return (0,
                o.sH)(this, void 0, void 0, function*() {
                    const e = this.milestonePrizeItemArr.find(e => e.score === t);
                    e && (yield e.playCheckedAm())
                })
            }
        }
        ;
        (0,
        o.Cg)([c(n.bP0)], d.prototype, "imgProgressStart", void 0),
        (0,
        o.Cg)([c(n.z21)], d.prototype, "progress", void 0),
        (0,
        o.Cg)([c(n.tX0)], d.prototype, "prizeItemPrefab", void 0),
        (0,
        o.Cg)([c(n.bP0)], d.prototype, "listNode", void 0),
        (0,
        o.Cg)([c({
            tooltip: "是否让 Price Detail 气泡向下出现展示"
        })], d.prototype, "isPrizeDetailShowDown", void 0),
        d = (0,
        o.Cg)([a("MilestoneProgress")], d),
        window.cc._RF.pop()
    },
    76163(t, e, i) {
        i.d(e, {
            L: function() {
                return c
            }
        }),
        i(23792),
        i(3362),
        i(98992),
        i(54520),
        i(81454),
        i(62953);
        var o = i(31635)
          , n = i(79444)
          , s = i(27606)
          , r = i(3360);
        let a = !1;
        function c() {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                if (a)
                    return;
                const t = Object.keys(n.i.tssSAPConfig).filter(t => "1" === n.i.tssSAPConfig[t]) || [];
                if (t && 0 !== t.length)
                    try {
                        const e = 1;
                        (0,
                        r._o)() && console.log("[SAP]init SAP");
                        const {default: o} = yield i.e(85).then(i.bind(i, 57));
                        (0,
                        r._o)() && console.log("[SAP]init SAP with url filter: ", t),
                        o.hook().addURLFilter(e, t.map(t => ({
                            policyurl: t,
                            match: "contain"
                        }))).init(),
                        a = !0
                    } catch (t) {
                        (0,
                        s.Kb)("init TSS SAP error", {
                            error: t
                        }),
                        a = !1
                    }
            })
        }
    },
    78811(t, e, i) {
        var o;
        i.d(e, {
            P: function() {
                return o
            }
        }),
        function(t) {
            t.DownloadScene = "DownloadScene",
            t.LandingScene = "LandingScene",
            t.GameScene = "GameScene",
            t.AdventureGameScene = "AdventureGameScene",
            t.AdventureLandingScene = "AdventureLandingScene",
            t.NotEventTimeScene = "NotEventTimeScene"
        }(o || (o = {}))
    },
    81931(t, e, i) {
        i(23792),
        i(44114),
        i(3362),
        i(62953);
        var o, n = i(31635), s = i(8440), r = i(78248), a = i(91784), c = i(7604), d = i(87997), u = i(28988), l = i(24258), h = i(56984), p = i(3360), g = i(95166), m = i(5187), v = i(59329), f = i(1973), y = i(5167), _ = (i(16280),
        i(98992),
        i(3949),
        i(23500),
        i(55367)), C = i(28089), S = i(24139), w = i(62474);
        !function(t) {
            t[t.None = 0] = "None",
            t[t.Cancelable = 1] = "Cancelable",
            t[t.NotCancelable = 2] = "NotCancelable"
        }(o || (o = {}));
        const k = {
            [w.Z.RevivePopup]: o.NotCancelable,
            [w.Z.ResultPopup]: o.NotCancelable,
            [w.Z.NewUserChallengePopup]: o.NotCancelable,
            [w.Z.AdventureRevivePopup]: o.NotCancelable,
            [w.Z.AdventureResultPopup]: o.NotCancelable
        }
          , b = {
            [w.Z.ExtraBlockPopup]: !0,
            [w.Z.BombPopup]: !0,
            [w.Z.RemovePopup]: !0,
            [w.Z.RevivePopup]: !0,
            [w.Z.ResultPopup]: !0,
            [w.Z.AdventureExtraBlockPopup]: !0,
            [w.Z.AdventureBombPopup]: !0,
            [w.Z.AdventureRemovePopup]: !0,
            [w.Z.AdventureRevivePopup]: !0,
            [w.Z.AdventureResultPopup]: !0
        };
        var P = i(71241)
          , E = i(13494)
          , R = i(82128)
          , A = i(18360)
          , T = i(78811)
          , W = i(99947)
          , I = i(27606)
          , O = i(88892)
          , L = i(95080);
        const {ccclass: N, property: B} = r.P4R;
        var D;
        !function(t) {
            t[t.NORMAL = 0] = "NORMAL"
        }(D || (D = {})),
        window.cc._RF.push({}, "1deedtUoaBFr5JyTg+yt1Zo", "BackButton", void 0);
        let x = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.style = D.NORMAL
            }
            onLoad() {
                (0,
                u.CN)()
            }
            onClick() {
                y.q.event.emit(O.H.CLICK_BACK)
            }
            setBackBtnStyle(t) {
                this.style !== t && (t < 0 || t >= this.styles.length ? console.warn("Invalid BackStyle: ".concat(t)) : (this.style = t,
                this.getComponent(r.kxk).spriteFrame = this.styles[t]))
            }
        }
        ;
        (0,
        n.Cg)([B([r.Vkj])], x.prototype, "styles", void 0),
        (0,
        n.Cg)([(0,
        L.nF)()], x.prototype, "onClick", null),
        x = (0,
        n.Cg)([N("BackButton")], x),
        window.cc._RF.pop();
        var M = i(57131);
        class G {
            show() {
                const t = document.getElementById("loading-wrap");
                t && (t.style.display = "block")
            }
            hide() {
                const t = document.getElementById("loading-wrap");
                t && (t.style.display = "none",
                this.updateProgress(0))
            }
            updateProgress(t) {
                document.getElementById("progress").style.width = "".concat(t, "%"),
                document.getElementById("progress-label").innerText = "".concat(t, "%")
            }
        }
        var V = i(71573);
        const {ccclass: F, property: U} = r.P4R;
        window.cc._RF.push({}, "2559b5MlSRGqKYDYq9amPqY", "NativeStartLoading", void 0);
        let H = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.iconIndex = 0,
                this.playAnimation = () => {
                    this.iconIndex = 0 === this.iconIndex ? 1 : 0,
                    this.icon.switchSprite(this.iconIndex)
                }
            }
            show() {
                this.node.active = !0,
                this.schedule(this.playAnimation, .5)
            }
            hide() {
                this.node.active = !1,
                this.unschedule(this.playAnimation)
            }
            updateProgress(t) {
                this.label.string = "".concat(t, "%"),
                this.bar.progress = t / 100
            }
        }
        ;
        (0,
        n.Cg)([U(V.B)], H.prototype, "icon", void 0),
        (0,
        n.Cg)([U(r.JU7)], H.prototype, "label", void 0),
        (0,
        n.Cg)([U(r.z21)], H.prototype, "bar", void 0),
        H = (0,
        n.Cg)([F("NativeStartLoading")], H),
        window.cc._RF.pop();
        const {ccclass: q} = r.P4R;
        window.cc._RF.push({}, "0f591yKfA1GNaMZx3bIUpq6", "SceneLoading", void 0);
        let Q = class extends r.uAl {
            show() {
                this.node.active = !0
            }
            hide() {
                this.node.active = !1
            }
            updateProgress(t) {}
        }
        ;
        Q = (0,
        n.Cg)([q("SceneLoading")], Q);
        var z = Q;
        window.cc._RF.pop();
        const {ccclass: J, property: K} = r.P4R;
        window.cc._RF.push({}, "e928c8FeABHJo+c9I3ziUZE", "ProgressLoading", void 0);
        let j = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.isPlaying = !1
            }
            onLoad() {
                this.initLoadingImplement()
            }
            initLoadingImplement() {
                this.loadingImplement || (this.loadingImplement = new G)
            }
            show(t, e) {
                return (0,
                n.sH)(this, arguments, void 0, function(t, e) {
                    var i = this;
                    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return function*() {
                        if (i.loadingImplement || i.initLoadingImplement(),
                        i.node.active = !0,
                        y.q.event.on(O.H.LOAD_PROGRESS, i.onProgress, i),
                        i.startAnimation(),
                        i.waitingPromiseReject = null,
                        t) {
                            const n = (0,
                            M.lu)(t, e, o);
                            return i.waitingPromiseReject = n.abort,
                            n.finalPromise
                        }
                    }()
                })
            }
            showSceneLoading() {
                if (!this.sceneLoading) {
                    this.node.active = !0;
                    const t = (0,
                    r.Flv)(this.sceneLoadingPrefab);
                    t.active = !1,
                    this.node.addChild(t),
                    this.sceneLoading = t.getComponent(z)
                }
                this.sceneLoading.show()
            }
            hide() {
                this.node.active = !1,
                this.isPlaying = !1,
                this.loadingImplement.hide(),
                this.sceneLoading && this.sceneLoading.hide(),
                y.q.event.targetOff(this)
            }
            onProgress(t) {
                this.loadingImplement && this.loadingImplement.updateProgress(t)
            }
            startAnimation() {
                this.isPlaying || (this.isPlaying = !0,
                this.loadingImplement.show())
            }
            tryHide() {
                return !(!this.node.active || !this.waitingPromiseReject || (this.hide(),
                this.waitingPromiseReject(P.ze.USER_DID_TAP_BACK),
                this.waitingPromiseReject = null,
                0))
            }
            onTapBack() {
                const t = this.node.active;
                return this.tryHide(),
                t
            }
        }
        ;
        (0,
        n.Cg)([K(r.tX0)], j.prototype, "sceneLoadingPrefab", void 0),
        j = (0,
        n.Cg)([J("ProgressLoading")], j),
        window.cc._RF.pop();
        var Z = i(91879)
          , X = i(73909);
        const {ccclass: Y} = r.P4R;
        window.cc._RF.push({}, "c46086+voBPFpcUlieCe6NJ", "SimpleAlign", void 0);
        let $ = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.alignType = X.qx.Right
            }
            set type(t) {
                this.alignType = t,
                this.updateAlignment()
            }
            get type() {
                return this.alignType
            }
            onLoad() {
                this.target = this.node.getComponentInChildren(r.$lP),
                this.uitrans = this.node.getComponent(r.$lP),
                this.target.node.on(r.bP0.EventType.SIZE_CHANGED, this.updateAlignment, this),
                this.updateAlignment()
            }
            updateAlignment() {
                const t = this.target;
                if (!t)
                    return;
                let e = 0;
                switch (this.alignType) {
                case X.qx.Left:
                    e = -(this.uitrans.width - t.width) / 2;
                    break;
                case X.qx.Right:
                    e = (this.uitrans.width - t.width) / 2;
                    break;
                case X.qx.Center:
                    e = 0
                }
                t.node.setPosition(e, t.node.position.y)
            }
        }
        ;
        $ = (0,
        n.Cg)([Y("SimpleAlign")], $),
        window.cc._RF.pop();
        var tt = i(59355);
        const {ccclass: et, property: it} = r.P4R;
        window.cc._RF.push({}, "ed0dbkNVZZN9ZjCNoPf2D5N", "TopBarContainer", void 0);
        let ot = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.bars = new Map
            }
            addTopBar(t, e) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    var i;
                    const o = tt.u[e]
                      , n = yield Z.h.createPrefabAsync(o);
                    if (!(null === (i = null == t ? void 0 : t.node) || void 0 === i ? void 0 : i.isValid))
                        return void n.destroy();
                    const s = n.getComponent(X.eU);
                    return this.layout.node.addChild(n),
                    s.init(e),
                    this.bars.set(s.type, s),
                    t.addTopBar(s),
                    this.setAlignment(t.barAlign),
                    this.layout.updateLayout(),
                    s
                })
            }
            addTopBarList(t, e) {
                for (const i of e)
                    this.addTopBar(t, i)
            }
            removeTopBarList(t, e) {
                var i;
                for (let t = e.length - 1; t >= 0; t--) {
                    const o = e[t];
                    (null === (i = o.node) || void 0 === i ? void 0 : i.isValid) && o.node.destroy(),
                    this.bars.delete(o.type)
                }
                t.topBarList = []
            }
            removeTopBar(t, e) {
                var i;
                t.topBarList.splice(t.topBarList.indexOf(e), 1),
                (null === (i = e.node) || void 0 === i ? void 0 : i.isValid) && e.node.destroy(),
                this.bars.delete(e.type),
                this.layout.updateLayout()
            }
            setOrder(t, e) {
                t.topBarList.forEach(t => {
                    e.indexOf(t.type) >= 0 && t.node.setSiblingIndex(e.indexOf(t.type))
                }
                )
            }
            setAlignment(t) {
                this.align.type = t
            }
            hide(t) {
                t && 0 !== t.length && (t.forEach(t => {
                    null == t || t.hide()
                }
                ),
                this.layout.updateLayout())
            }
            show(t) {
                t && 0 !== t.length && (t.forEach(t => {
                    null == t || t.show()
                }
                ),
                this.layout.updateLayout())
            }
            clearAll() {}
        }
        ;
        (0,
        n.Cg)([it(r.PEP)], ot.prototype, "layout", void 0),
        (0,
        n.Cg)([it($)], ot.prototype, "align", void 0),
        ot = (0,
        n.Cg)([et("TopBarContainer")], ot),
        window.cc._RF.pop();
        const {ccclass: nt, property: st} = r.P4R;
        window.cc._RF.push({}, "30883d1WwZDpZd119cMnFCN", "UIController", void 0);
        let rt = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.forceHideBackBtn = !1,
                this.hasPreloadedSceneFirstView = !1,
                this.hasEnterScene = !1,
                this.sceneStacks = [],
                this.allCache = new Map,
                this.gameStack = [],
                this.popStack = [],
                this.openedForm = new Map,
                this.topBarStack = [],
                this._isLoadingUI = !1
            }
            get uiMask() {
                return this.getSubRoot(E.H.Pop).getChildByName("Mask")
            }
            get isLoadingUI() {
                return this._isLoadingUI
            }
            set isLoadingUI(t) {
                t ? this.rootFloat.on(r.bP0.EventType.TOUCH_END, this.preventTouch, this, !0) : this.rootFloat.off(r.bP0.EventType.TOUCH_END, this.preventTouch, this, !0),
                this._isLoadingUI = t
            }
            onLoad() {
                y.q.back.bindEvents(this)
            }
            initBtnSetting() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    const t = yield Z.h.load(w.Z.BtnSetting, r.tX0)
                      , e = (0,
                    r.Flv)(t);
                    this.btnSetting.addChild(e)
                })
            }
            runScene(t) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    this.isLoadingUI = !0,
                    (0,
                    I.dQ)();
                    const {sceneName: e, callback: i, data: o, onProgress: n, isThrowError: s=!1} = t
                      , a = this.currentSceneName === e || this.currentSceneName === T.P.AdventureGameScene && e === T.P.GameScene;
                    let d = null
                      , u = null
                      , l = null
                      , h = !1;
                    try {
                        if (d = yield(0,
                        A.CX)(e),
                        !d)
                            throw this.isLoadingUI = !1,
                            new Error("[runScene err] 获取场景JS ".concat(e, " 为 null/undefined"));
                        !this.hasPreloadedSceneFirstView && (null == n || n(.3)),
                        t.isNeedLoading && y.q.spinner.startShow(),
                        this.savePreviousScene(a),
                        h = !0,
                        u = (0,
                        r.Flv)(this.baseScene),
                        this.currentScene = u,
                        this.currentSceneName = e,
                        l = u.addComponent(d),
                        (d.prototype.storeArr || d.prototype.ctrArr) && l.bindStoreAndCtr(d.prototype.storeArr, d.prototype.ctrArr),
                        yield l.beforeEnter(o, t => {
                            this.hasPreloadedSceneFirstView ? null == n || n(.9 + .08 * t) : null == n || n(.3 + .68 * t)
                        }
                        ),
                        this.rootScene.addChild(u),
                        this.clear(),
                        yield l.onEnter(o),
                        yield l.afterEnter(o),
                        n && n(1),
                        this.sceneStacks.push(e),
                        this.setBackButtonVisible(l.showBackButton),
                        this.setSettingButtonVisible(l.showSettingButton),
                        i && i(l),
                        this.preScene && (this.preScene.destroy(),
                        a && y.q.event.clearPauseSceneEvents(),
                        this.preScene = null),
                        this.scheduleOnce( () => {
                            this.isLoadingUI = !1
                        }
                        , .3),
                        this.hasEnterScene = !0
                    } catch (t) {
                        this.isLoadingUI = !1,
                        h && this.restorePreviousScene(a),
                        u && u.destroy();
                        const i = "[".concat(t.name, "]").concat(t.message);
                        if (s)
                            throw new Error("[runScene err] 切换场景 EUIPath = ".concat(e, " 失败 ").concat(i),{
                                cause: t
                            });
                        (0,
                        I.Kb)("[runScene err] 切换场景 EUIPath = ".concat(e, " 失败"), {
                            error: t,
                            errorType: i.indexOf("timeout") > -1 || i.indexOf("status:0") > -1 ? W.wQ.NETWORK_ERROR : W.wQ.DEFAULT
                        }),
                        y.q.error.showMonsterToast({
                            msg: (0,
                            c.wb)("text_network_error"),
                            quitType: R.z.REFRESH_GAME,
                            hideClose: !0
                        })
                    }
                    (0,
                    I.pl)(),
                    t.isNeedLoading && y.q.spinner.end()
                })
            }
            savePreviousScene(t) {
                this.preScene = this.currentScene,
                this.preSceneName = this.currentSceneName,
                t && y.q.event.pauseSceneEvents(this.preSceneName)
            }
            restorePreviousScene(t) {
                this.preScene && this.preSceneName || !this.hasEnterScene ? (this.currentScene = this.preScene,
                this.currentSceneName = this.preSceneName,
                t && y.q.event.resumeSceneEvents(this.currentSceneName)) : y.q.event.clearPauseSceneEvents()
            }
            open(t) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    if (b[t.uiPath] && this.isUIOpen(t.uiPath))
                        return;
                    this.isLoadingUI = !0;
                    const {uiPath: e, data: i, callback: o} = t;
                    let n = this.allCache.get(e);
                    if (n)
                        return yield n.doBeforeOpen(i),
                        yield this._openUI(n, i, o),
                        void this.scheduleOnce( () => {
                            this.isLoadingUI = !1
                        }
                        , n.uiType === E.H.Pop && n.darkBackground && this.uiMask ? .3 : 0);
                    const s = yield this.loadUIPrefab(t);
                    if (!s) {
                        const t = "UIManager not found ui prefab:".concat(e);
                        return console.error(t),
                        void (this.isLoadingUI = !1)
                    }
                    const a = (0,
                    r.Flv)(s);
                    if (n = a.getComponent(C.A),
                    !n) {
                        const t = e + "节点缺少 BaseUI 子类组件作为逻辑脚本！请检查 entry/main.ts 是否添加过该脚本?";
                        throw console.error(t),
                        this.isLoadingUI = !1,
                        t
                    }
                    n.sceneNode = this.currentScene,
                    yield n.doBeforeOpen(i);
                    const c = this.getSubRoot(n.uiType);
                    a.parent = c,
                    a.setPosition(0, 0, 0),
                    n.uiKey = e,
                    yield this._openUI(n, i, o),
                    this.scheduleOnce( () => {
                        this.isLoadingUI = !1
                    }
                    , n.uiType === E.H.Pop && n.darkBackground && this.uiMask ? .3 : 0)
                })
            }
            loadUIPrefab(t) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    const {uiPath: e, spinnerDelay: i, onFail: o} = t;
                    let s = Z.h.get(e, r.tX0);
                    try {
                        return s || (k[e] ? (this.delayShowSpinner = this.onUILoadingSpinnerShown.bind(this, [!1]),
                        this.scheduleOnce(this.delayShowSpinner, i / 1e3),
                        y.q.spinner.startWithDelay(i),
                        s = yield Z.h.load(e, r.tX0)) : (this.delayShowSpinner = this.onUILoadingSpinnerShown.bind(this, [!0]),
                        this.scheduleOnce(this.delayShowSpinner, i / 1e3),
                        yield y.q.spinner.startWithDelay(i, () => (0,
                        n.sH)(this, void 0, void 0, function*() {
                            return Z.h.load(e, r.tX0)
                        }), t => s = t, !0))),
                        s
                    } catch (t) {
                        return t !== P.ze.USER_DID_TAP_BACK && (0,
                        I.Kb)("load ui error", {
                            error: t
                        }),
                        k[e] ? !o && y.q.error.showMonsterToast({
                            msg: (0,
                            c.wb)("text_network_error"),
                            quitType: R.z.REFRESH_GAME
                        }) : t !== P.ze.USER_DID_TAP_BACK && this.showToast((0,
                        c.wb)("text_network_error")),
                        null == o || o(),
                        s
                    } finally {
                        y.q.spinner.end(),
                        this.delayShowSpinner && (this.unschedule(this.delayShowSpinner),
                        this.delayShowSpinner = null),
                        this.updateBackBtnVisible()
                    }
                })
            }
            onUILoadingSpinnerShown(t) {
                this.setBackButtonVisible(t[0])
            }
            preventTouch(t) {
                this.isLoadingUI && (t.propagationStopped = !0)
            }
            hasPopup() {
                return this.popStack.length > 0
            }
            _openUI(t, e, i) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    this.currentUIName = t.uiKey;
                    const o = this.openedForm.has(t.uiKey);
                    o || this.openedForm.set(t.uiKey, t);
                    const n = this.getSubRoot(t.uiType);
                    switch (t.uiType) {
                    case E.H.Game:
                        if (o) {
                            const e = this.gameStack.indexOf(t);
                            this.gameStack.splice(e, 1)
                        }
                        this.gameStack.push(t);
                    case E.H.Float:
                        t.node.parent = n;
                        break;
                    case E.H.Pop:
                        if (t.darkBackground && this.uiMask) {
                            const e = (0,
                            r.Flv)(this.uiMask);
                            e.active = !0,
                            e.parent = t.node,
                            e.getComponent(r.kxk).type = r.kxk.Type.SLICED;
                            const i = e.getComponent(r.wFi);
                            t.isMaskOpenNeedAnim ? (0,
                            r.QxW)(i).set({
                                opacity: 0
                            }).to(.1, {
                                opacity: t.maskAlpha
                            }).start() : i.opacity = t.maskAlpha,
                            e.setSiblingIndex(0)
                        }
                        if (t.node.parent = n,
                        o) {
                            const e = this.popStack.indexOf(t);
                            this.popStack.splice(e, 1)
                        }
                        this.popStack.push(t)
                    }
                    this.setBackButtonVisible(t.showBackButton),
                    this.setSettingButtonVisible(t.showSettingButton),
                    yield t._doOpen(e, this),
                    this.pushTopBar(t, o),
                    i && i(t)
                })
            }
            pushTopBar(t, e) {
                if (t.isValid) {
                    if (t.topBarOption.length > 0 && (this.topBar.setAlignment(t.barAlign),
                    this.topBar.addTopBarList(t, t.topBarOption)),
                    this.topBarStack.length > 0) {
                        const e = this.topBarStack[this.topBarStack.length - 1];
                        e !== t && this.topBar.hide(e.topBarList)
                    }
                    e || this.topBarStack.push(t)
                }
            }
            getSubRoot(t) {
                switch (t) {
                case E.H.Game:
                    return this.currentScene.getChildByName("GameLayer");
                case E.H.Menu:
                    return this.currentScene.getChildByName("MenuLayer");
                case E.H.Pop:
                    return this.currentScene.getChildByName("PopLayer");
                case E.H.Float:
                    return this.rootFloat
                }
            }
            setAsLastSibling(t, e) {
                let i = 0;
                t.children.forEach(t => {
                    const e = t.getSiblingIndex();
                    i = e > i ? e : i
                }
                ),
                e.setSiblingIndex(i + 1)
            }
            close(t) {
                return (0,
                n.sH)(this, arguments, void 0, function(t) {
                    var e = this;
                    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return function*() {
                        const n = e.openedForm.get(t);
                        if (!n)
                            return;
                        const s = n.autoDestroy || i;
                        if (s && n.getComponentsInChildren(r.$nd).forEach(t => t.enabled = !1),
                        e.openedForm.delete(t),
                        n.uiType === E.H.Pop) {
                            const t = e.popStack.indexOf(n);
                            e.popStack.splice(t, 1),
                            n.node.children[0].active = !1
                        }
                        if (e.popTopBar(n),
                        !e.popStack.length && o && !n.isMaskCloseNeedAnim) {
                            const t = n.node && n.node.children[0];
                            t && (t.active = !1)
                        }
                        yield n.doClose(i),
                        s && e.allCache.delete(t),
                        e.updateBackBtnVisible(),
                        e.updateSettingBtnVisible()
                    }()
                })
            }
            popTopBar(t) {
                if (this.topBar.removeTopBarList(t, t.topBarList),
                this.topBarStack.pop(),
                this.topBarStack.length > 0) {
                    const t = this.topBarStack[this.topBarStack.length - 1];
                    this.topBar.setAlignment(t.barAlign),
                    this.topBar.show(t.topBarList)
                }
            }
            closeAllPopup() {
                this.popStack.forEach(t => {
                    this.close(t.uiKey)
                }
                )
            }
            clearAll() {
                this.allCache.forEach( (t, e) => {
                    t.isValid && this.close(e)
                }
                ),
                this.clear()
            }
            clear() {
                this.allCache.clear(),
                this.popStack = [],
                this.gameStack = [],
                this.openedForm.clear()
            }
            pop() {
                if (0 === this.popStack.length)
                    return;
                const t = this.popStack[this.popStack.length - 1];
                this.close(t.uiKey)
            }
            showToast(t, e) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    const i = (0,
                    r.Flv)(this.toast);
                    i.active = !0,
                    i.parent = this.getSubRoot(E.H.Float);
                    const o = i.getComponentInChildren(r.sDQ);
                    !function(t, e) {
                        t.string = "<b>".concat(e, "</b>")
                    }(o, t),
                    function(t, e) {
                        e && (t.fontSize = e)
                    }(o, null == e ? void 0 : e.fontSize),
                    function(t) {
                        t.maxWidth = 0;
                        const {width: e} = t.node.getComponent(r.$lP).contentSize;
                        e >= 660 && (t.maxWidth = 660)
                    }(o),
                    r.Kak.stopAllByTarget(this.toast),
                    i.setPosition(0, 0, 0),
                    (0,
                    r.QxW)(this.toast).to(.5, {
                        position: new r.eBl(0,70,0)
                    }).start();
                    const n = i.getComponent(r.wFi);
                    return r.Kak.stopAllByTarget(n),
                    n.opacity = 255,
                    (0,
                    r.QxW)(n).delay((null == e ? void 0 : e.delay) || 2).to(1, {
                        opacity: 100
                    }).call( () => {
                        i.active = !1
                    }
                    ).startAsync()
                })
            }
            showProgressLoading(t, e) {
                return (0,
                n.sH)(this, arguments, void 0, function(t, e) {
                    var i = this;
                    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return function*() {
                        return i.setBackButtonVisible(!0),
                        i.progressLoading.onProgress(0),
                        i.progressLoading.show(t, e, o)
                    }()
                })
            }
            hideProgressLoading() {
                this.progressLoading.hide(),
                this.updateBackBtnVisible()
            }
            getUI(t) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this.allCache.get(t) : this.openedForm.get(t)
            }
            getCurrentUI() {
                var t;
                return this.popStack.length ? this.popStack[this.popStack.length - 1] : this.gameStack.length ? this.gameStack[this.gameStack.length - 1] : null === (t = this.currentScene) || void 0 === t ? void 0 : t.getComponent(_.c)
            }
            hideUI(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const i = this.openedForm.get(t);
                i && (i.node.active = !1,
                this.popStack.length || !e || i.isMaskCloseNeedAnim || (this.uiMask.active = !1),
                this.topBar.hide(i.topBarList))
            }
            showUI(t) {
                const e = this.openedForm.get(t);
                e && (e.node.active = !0,
                e.darkBackground && this.uiMask && (this.uiMask.active = !0),
                this.topBar.show(e.topBarList))
            }
            hideAllUI() {
                Array.from(this.openedForm.keys()).forEach(t => {
                    this.hideUI(t)
                }
                )
            }
            showAllUI() {
                Array.from(this.openedForm.keys()).forEach(t => {
                    this.showUI(t)
                }
                )
            }
            closeAllUI() {
                Array.from(this.openedForm.keys()).forEach(t => {
                    this.close(t)
                }
                )
            }
            setBackButtonVisible(t) {
                !this.forceHideBackBtn && t ? this.btnBack.node.active = !0 : this.btnBack.node.active = !1
            }
            updateBackBtnVisible() {
                const t = this.getCurrentUI();
                t && this.setBackButtonVisible(t.showBackButton)
            }
            setSettingButtonVisible(t) {
                this.btnSetting.active = !!t
            }
            updateSettingBtnVisible() {
                const t = this.getCurrentUI();
                t && t.uiKey === w.Z.AdventureLandingView && (0,
                S.h)() ? this.setSettingButtonVisible(!0) : t && this.setSettingButtonVisible(t.showSettingButton)
            }
            onTapBack(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const i = this.progressLoading.onTapBack();
                if (!t && !i) {
                    if (this.openedForm.has(w.Z.Monster))
                        return this.openedForm.get(w.Z.Monster).back(e),
                        !0;
                    const t = this.getCurrentUI();
                    if (t)
                        return t.back(e),
                        !0
                }
                return i
            }
            showTransitionMask() {
                this.transitionMask.active = !0
            }
            isUIOpen(t) {
                return this.openedForm.has(t)
            }
        }
        ;
        (0,
        n.Cg)([st(r.bP0)], rt.prototype, "rootScene", void 0),
        (0,
        n.Cg)([st(r.bP0)], rt.prototype, "rootFloat", void 0),
        (0,
        n.Cg)([st(r.bP0)], rt.prototype, "toast", void 0),
        (0,
        n.Cg)([st(r.tX0)], rt.prototype, "baseScene", void 0),
        (0,
        n.Cg)([st(r.tX0)], rt.prototype, "monsterPrefab", void 0),
        (0,
        n.Cg)([st(j)], rt.prototype, "progressLoading", void 0),
        (0,
        n.Cg)([st(x)], rt.prototype, "btnBack", void 0),
        (0,
        n.Cg)([st(r.bP0)], rt.prototype, "btnSetting", void 0),
        (0,
        n.Cg)([st(r.bP0)], rt.prototype, "transitionMask", void 0),
        (0,
        n.Cg)([st(ot)], rt.prototype, "topBar", void 0),
        rt = (0,
        n.Cg)([nt("UIController")], rt),
        window.cc._RF.pop();
        var at = i(53771)
          , ct = i(4911)
          , dt = i(31555)
          , ut = i(2981)
          , lt = i(26994);
        const ht = function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return (0,
            n.sH)(void 0, [...e], void 0, function() {
                let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return function*() {
                    if (!(0,
                    p._o)() && !s.Ay.shopeeApp)
                        return;
                    const e = window.getCookieUserId && window.getCookieUserId();
                    if (e) {
                        if (!s.Ay.shopeeApp || (0,
                        ct.Ri)("shopee_token"))
                            return !0;
                        const t = (0,
                        l.Gq)(ut.H.userInfo, {
                            activity: !1,
                            expire: !1
                        });
                        if (t && t.userid === +e)
                            return !0
                    }
                    const i = yield(0,
                    f.Ie)();
                    if (i && 0 === i.error && i.data)
                        return (0,
                        l.SO)(ut.H.userInfo, i.data, {
                            activity: !1,
                            expire: !1
                        }),
                        !0;
                    if (i && 19 === i.error)
                        throw t && (yield(0,
                        dt.Z)()),
                        new lt.j("api fail",lt.S.loginFail)
                }()
            })
        };
        var pt = i(14559)
          , gt = i(91919)
          , mt = i(16793)
          , vt = i(76706)
          , ft = i(56427)
          , yt = i(79444)
          , _t = i(76827)
          , Ct = i(25747)
          , St = i(92520);
        function wt() {
            try {
                const t = r.nje.windowSize
                  , e = r.XR7.root.windows;
                for (const i of e)
                    if (i.swapchain && (i.height !== t.height || i.width !== t.width)) {
                        r.UpL._updateAdaptResult();
                        break
                    }
            } catch (t) {}
        }
        var kt = i(2818)
          , bt = i(2447)
          , Pt = i(76163);
        const {ccclass: Et, property: Rt} = r.P4R;
        window.cc._RF.push({}, "686d51RrOJKrrQV/3ipQ1/m", "StartScene", void 0);
        let At = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.landingPageData = null,
                this.adventureLandingPageData = null,
                this.isEnterLandingScene = !0
            }
            onLoad() {
                (0,
                I.M0)(_t.m.first_paint, window.performancePoints.firstPaint.total),
                y.q.init(this.uiController),
                this.runGame().catch(t => {
                    this.onGameError(t)
                }
                ),
                (0,
                kt.aR)() && function() {
                    (0,
                    n.sH)(this, void 0, void 0, function*() {
                        return new Promise(t => {
                            const e = () => document.body.clientHeight !== window.clientHeight;
                            if (e())
                                return wt(),
                                t();
                            let i = 0;
                            const o = setInterval( () => {
                                i++,
                                (e() || i >= 10) && (clearInterval(o),
                                wt(),
                                t())
                            }
                            , 100)
                        }
                        )
                    })
                }()
            }
            runGame() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    if (!this.checkLink() || !(0,
                    pt.nj)())
                        return;
                    const t = (0,
                    S.h)();
                    yield Promise.all([!this.isOpenDownload() && gt.A.appId && ht().then( () => (0,
                    n.sH)(this, void 0, void 0, function*() {
                        (0,
                        d.On)(d.Bo.checkLogin),
                        (0,
                        Ct.y9)(St.Cb.Login);
                        const [,,e,i] = yield Promise.all([(0,
                        f.ED)(), (0,
                        a.V2)(), ...t ? [this.parallelFetchEntryData(T.P.AdventureLandingScene, (0,
                        m.s)()), (0,
                        g.M7)()] : [this.parallelFetchEntryData(T.P.LandingScene, (0,
                        m.s)())], (0,
                        v.oy)()]);
                        if (this.landingPageData = e,
                        t) {
                            const t = i;
                            t && 0 === t.code && t.data && (this.adventureLandingPageData = t.data)
                        }
                    }))]),
                    (0,
                    m.l2)(),
                    yield Promise.all([y.q.ui.initBtnSetting(), this.goToScene()]),
                    this.hideLoadingPage(),
                    this.finishedLoadingScene(),
                    (0,
                    l.SO)(ut.H.OLD_USER_TAG, !0, {
                        activity: !1,
                        expire: !1
                    });
                    const e = "[info] buildTime =" + (0,
                    h.a7)(new Date(+window.BUILD_TIME)) + ",version =" + window.BUILD_VERSION;
                    console.log(e),
                    (0,
                    I.Vt)(e)
                })
            }
            checkLink() {
                return !(gt.A.appId && !gt.A.activityCode && (y.q.error.showMonsterToast({
                    msg: (0,
                    c.wb)("text_link_error"),
                    quitType: R.z.QUIT_GAME
                }),
                1))
            }
            isOpenDownload() {
                (0,
                p._o)();
                return false
            }
            goToScene() {
                return (0, n.sH)(this, void 0, void 0, function*() {
                    if (this.isOpenDownload())
                        return (0, Ct.Pe)({
                            entry: St.G0.Download
                        }),
                        (0, Ct.Wq)(),
                        void (yield y.q.ui.runScene({
                            sceneName: T.P.DownloadScene
                        }));
            
                    this.startPing();
            
                    const t = (0, at.kG)();
            
                    // Có session cũ và đúng version → tiếp tục session cũ
                    if (t && t.coreVersion === CORE_VERSION) {
                        this.isEnterLandingScene = !1;
                        yield this.recoverGame(t);
                        return;
                    }
            
                    // Không có session cũ → bắt đầu game mới
                    // Có session nhưng version cũ → xóa session rồi bắt đầu mới
                    if (t)
                        (0, at.yY)();
            
                    this.isEnterLandingScene = !1;
                    yield this.goGame();
                });
            }
            parallelFetchEntryData(t, e) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    const [i] = yield Promise.all([e, (0,
                    A.CX)(t), (0,
                    ft.J)(t)]);
                    return y.q.ui.hasPreloadedSceneFirstView = !0,
                    i
                })
            }
            recoverGame(t) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    try {
                        y.q.spinner.startShow(),
                        (0,
                        Ct.Pe)({
                            subEntry: St.uv.RECOVER_GAME
                        });
                        const e = yield this.parallelFetchEntryData(T.P.GameScene, (0,
                        a.Hu)({
                            sessionID: t.sessionID
                        }))
                          , {code: i} = e;
                        if (0 === i) {
                            const {milestoneList: i, itemList: o, adsToken: n, todayHighestScore: s, round: r, roundOverall: a} = e.data;
                            return void (yield y.q.ui.runScene({
                                sceneName: T.P.GameScene,
                                data: {
                                    recordData: Object.assign(Object.assign({}, t), {
                                        milestoneList: i,
                                        itemList: o,
                                        adsToken: n,
                                        todayHighestScore: s,
                                        round: r,
                                        roundOverall: a
                                    })
                                },
                                onProgress: d.f$,
                                isThrowError: !0
                            }))
                        }
                        i === P.ze.SESSION_INVALID || i === P.ze.MULTI_DEVICE ? ((0,
                        at.yY)(),
                        yield this.goLanding()) : (yield this.goLanding(),
                        y.q.error.showMonsterToast({
                            forceMonster: !0,
                            msg: (0,
                            c.wb)("text_network_error"),
                            quitType: R.z.CLOSE_SELF,
                            onRetry: this.recoverGame.bind(this, t),
                            onQuit: () => {
                                (0,
                                at.yY)()
                            }
                            ,
                            hideClose: !0
                        }),
                        (0,
                        I.Kb)("Query Status API; error code: ".concat(e.code, ", errorMsg: ").concat(e.msg), {
                            title: "Recover Game Error"
                        }))
                    } catch (t) {
                        (0,
                        I.Kb)("[recoverGame] 断线重连失败", {
                            error: t
                        }),
                        yield this.goLanding()
                    } finally {
                        y.q.spinner.end()
                    }
                })
            }
            goLanding() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    if ((0,
                    Ct.Pe)({
                        subEntry: St.uv.HOME
                    }),
                    (0,
                    S.h)())
                        yield y.q.ui.runScene({
                            sceneName: T.P.AdventureLandingScene,
                            data: {
                                classicLandingData: this.landingPageData,
                                adventureLandingData: this.adventureLandingPageData
                            },
                            onProgress: d.f$,
                            isThrowError: !0
                        });
                    else {
                        const t = this.landingPageData || (yield this.parallelFetchEntryData(T.P.LandingScene, (0,
                        m.s)()));
                        yield y.q.ui.runScene({
                            sceneName: T.P.LandingScene,
                            data: t,
                            onProgress: d.f$,
                            isThrowError: !0
                        })
                    }
                })
            }
            goGame() {
                return (0,
                n.sH)(this, arguments, void 0, function() {
                    var t = this;
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function*() {
                        try {
                            (0,
                            Ct.Pe)({
                                subEntry: St.uv.CLASSIC_GAME
                            }),
                            y.q.spinner.startShow();
                            const i = yield t.parallelFetchEntryData(T.P.GameScene, (0,
                            a.aw)({
                                force: e
                            }));
                            if (0 === i.code)
                                return void (yield y.q.ui.runScene({
                                    sceneName: T.P.GameScene,
                                    data: {
                                        beginData: i
                                    },
                                    onProgress: d.f$,
                                    isThrowError: !0
                                }));
                            i.code === P.ze.MULTI_DEVICE ? (yield t.goLanding(),
                            y.q.ui.open({
                                uiPath: w.Z.MultipleDeviceConfirmPopup,
                                data: {
                                    quitType: R.z.CLOSE_SELF,
                                    onContinue: t.goGame.bind(t, !0)
                                }
                            })) : y.q.error.showMonsterToast({
                                msg: (0,
                                c.wb)("text_network_error"),
                                quitType: R.z.REFRESH_GAME,
                                onRetry: t.goGame.bind(t)
                            })
                        } catch (t) {
                            throw (0,
                            I.Kb)("[StartScene] 进入游戏失败", {
                                error: t
                            }),
                            t
                        } finally {
                            y.q.spinner.end()
                        }
                    }()
                })
            }
            goNotEventTimeScene() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    yield y.q.ui.runScene({
                        sceneName: T.P.NotEventTimeScene,
                        isThrowError: !0
                    })
                })
            }
            hideLoadingPage() {
                y.q.spinner && y.q.spinner.end(),
                window.hideLoadingPage()
            }
            startPing() {
                gt.A.appId && this.schedule(a.Zo, 10),
                gt.A.appId && (0,
                a.Zo)()
            }
            finishedLoadingScene() {
                window.DEVELOP && (0,
                kt.bf)() && y.q.ui.showToast("Debug in app now"),
                (0,
                Ct.y9)(St.Cb.LandingPage),
                (0,
                I.Bg)(this.isEnterLandingScene),
                window.prefetchDataPool = {},
                y.q.error.updateStartupFinish(),
                (0,
                Pt.L)(),
                (0,
                bt.s)(),
                y.q.audio.preloadEffect()
            }
            onGameError(t) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    if (t.name !== lt.S.loginFail) {
                        if (t.name === lt.S.activityOverError)
                            return (0,
                            Ct.Pe)({
                                entry: St.G0.NotEventTime
                            }),
                            (0,
                            Ct.Wq)(),
                            yield this.goNotEventTimeScene(),
                            (0,
                            I.jz)(t),
                            void this.hideLoadingPage();
                        if (t.name === lt.S.landingApiError && Number(t.message) === P.ze.EVENT_AFTER_UPGRADE)
                            return (0,
                            Ct.Pe)({
                                entry: St.G0.OverRedeemTime
                            }),
                            (0,
                            Ct.Wq)(),
                            yield this.goNotEventTimeScene(),
                            void this.hideLoadingPage();
                        (0,
                        I.jz)(t),
                        this.hideLoadingPage(),
                        y.q.error.showMonsterToast({
                            msg: window.LANG.network,
                            quitType: R.z.QUIT_GAME,
                            forceMonster: !0,
                            hideClose: !0,
                            onRetry: () => {
                                window.location.reload()
                            }
                        })
                    } else
                        (0,
                        I.jz)(t)
                })
            }
        }
        ;
        (0,
        n.Cg)([Rt(r.bP0)], At.prototype, "initNode", void 0),
        (0,
        n.Cg)([Rt(rt)], At.prototype, "uiController", void 0),
        At = (0,
        n.Cg)([Et("StartScene")], At),
        window.cc._RF.pop(),
        r.Kak.prototype.startAsync = function() {
            return (0,
            n.sH)(this, void 0, void 0, function*() {
                return new Promise(t => {
                    this.call(t).start()
                }
                )
            })
        }
        ;
        var Tt = i(84479);
        window._CCSettings && r.Uyx.downloader.bundleVers && (0,
        Tt.N)(),
        i(74423),
        i(16034),
        i(23215),
        i(72577);
        var Wt = i(21202);
        function It(t, e) {
            const i = (0,
            l.Gq)(ut.H.SETTING_SWITCH) || {};
            i[t] = e,
            (0,
            l.SO)(ut.H.SETTING_SWITCH, i)
        }
        function Ot(t) {
            return ((0,
            l.Gq)(ut.H.SETTING_SWITCH) || {})[t]
        }
        var Lt, Nt = i(87778);
        !function(t) {
            t.CLICK = "click",
            t.POP = "pop"
        }(Lt || (Lt = {}));
        const Bt = [Nt.P.audio_click, Nt.P.audio_block_combo_2, Nt.P.audio_block_combo_3, Nt.P.audio_block_combo_4, Nt.P.audio_block_combo_5, Nt.P.audio_block_matched, Nt.P.audio_clear_multiple_rows, Nt.P.audio_move_block, Nt.P.audio_block_placed]
          , {ccclass: Dt, property: xt} = r.P4R;
        window.cc._RF.push({}, "4e6d8RqCc1FDrYmVJVaF9Dp", "AudioController", void 0);
        let Mt = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.root = null,
                this.music = null,
                this.effect = null,
                this.effectGrp = null,
                this.effectMap = {},
                this.playingEffect = {},
                this.currentMultiBgmUrl = [],
                this.currentMultiBgmClip = []
            }
            onLoad() {
                y.q.audio = this,
                this.music = this.root.getChildByName("music").getComponent(r.uC0),
                this.effectGrp = this.root.getChildByName("effectGrp"),
                this.effect = this.effectGrp.getComponentInChildren(r.uC0),
                this.music.loop = !0,
                this.music.volume = this.musicVolume,
                this.effect.volume = this.effectVolume,
                r.LOY.on(r.Zt2.EVENT_HIDE, this.pause, this),
                r.LOY.on(r.Zt2.EVENT_SHOW, this.delayToResume, this)
            }
            playBgm(t) {
                return (0,
                n.sH)(this, arguments, void 0, function(t) {
                    var e = this;
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.musicVolume
                      , o = arguments.length > 2 ? arguments[2] : void 0;
                    return function*() {
                        e.currentBgm = t,
                        e.currentMultiBgmUrl = [],
                        yield e.playMusic(t, i, o),
                        e.currentMultiBgmClip.length > 0 && (e.releaseMultiClip(e.currentMultiBgmClip),
                        e.currentMultiBgmClip = [])
                    }()
                })
            }
            playMultiBgm(t) {
                return (0,
                n.sH)(this, arguments, void 0, function(t) {
                    var e = this;
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.musicVolume;
                    return function*() {
                        const o = e.currentMultiBgmUrl.length === t.length && t.every( (t, i) => e.currentMultiBgmUrl[i] === t);
                        e.currentMultiBgmUrl = t,
                        e.currentMultiBgmIndex = 0;
                        const n = () => {
                            e.currentMultiBgmIndex++,
                            e.currentMultiBgmIndex >= e.currentMultiBgmUrl.length && (e.currentMultiBgmIndex = 0);
                            const t = e.currentMultiBgmUrl[e.currentMultiBgmIndex];
                            t && e.playMusic(t, i, n, !0)
                        }
                        ;
                        let s;
                        e.currentMultiBgmClip.length > 0 && (s = e.currentMultiBgmClip.slice(),
                        e.currentMultiBgmClip = []),
                        e.currentBgm = t[0],
                        yield e.playMusic(t[0], i, n, !0),
                        s && !o && e.releaseMultiClip(s);
                        for (let i = 1; i < t.length; i++) {
                            const o = yield e.loadAudioClip(t[i]);
                            e.currentMultiBgmClip.includes(o) || e.currentMultiBgmClip.push(o)
                        }
                    }()
                })
            }
            releaseMultiClip(t) {
                t.forEach(t => {
                    t.decRef()
                }
                )
            }
            playMusic(t) {
                return (0,
                n.sH)(this, arguments, void 0, function(t) {
                    var e = this;
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.musicVolume
                      , o = arguments.length > 2 ? arguments[2] : void 0
                      , n = arguments.length > 3 ? arguments[3] : void 0;
                    return function*() {
                        var s;
                        if (0 === e.musicVolume || !t)
                            return;
                        const a = yield e.loadAudioClip(t).catch( () => null);
                        if (!a || !a._nativeAsset)
                            return void (0,
                            I.Kb)("Load Audio Failed:" + t, {
                                errorType: W.wQ.RESOURCE_ERROR
                            });
                        const c = e.music;
                        if (c.playing && c.stop(),
                        c.volume = i,
                        n ? (e.currentMultiBgmClip.includes(a) || (e.currentMultiBgmClip.push(a),
                        a.addRef()),
                        c.clip && !e.currentMultiBgmClip.includes(c.clip) && c.clip.decRef()) : (a.addRef(),
                        null === (s = c.clip) || void 0 === s || s.decRef()),
                        c.clip = a,
                        c.loop = !0,
                        c.play(),
                        (0,
                        u.JM)() && e.pause(),
                        o) {
                            const t = () => {
                                c.node.off(r.uC0.EventType.ENDED, t, e),
                                o()
                            }
                            ;
                            c.node.on(r.uC0.EventType.ENDED, t, e),
                            c.loop = !1
                        }
                    }()
                })
            }
            stopBgm() {
                this.currentBgm = null,
                this.stopMusic()
            }
            stopMusic() {
                this.music.stop()
            }
            getFreeEffect() {
                let t = this.effectGrp.getComponentsInChildren(r.uC0).find(t => !t.playing);
                if (t)
                    return t;
                const e = new r.bP0;
                return this.effectGrp.addChild(e),
                e.addComponent(r.uC0),
                t = e.getComponent(r.uC0),
                t.volume = this.effectVolume,
                t
            }
            needReleaseAsset(t) {
                return !Bt.includes(t) && t.indexOf("game/") < 0
            }
            playEffect(t) {
                return (0,
                n.sH)(this, arguments, void 0, function(t) {
                    var e = this;
                    let i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    return function*() {
                        var a;
                        if (0 === e.effectVolume || (0,
                        u.JM)())
                            return;
                        const c = r.ogD.now();
                        let d = Z.h.get(t, r.rU5);
                        if (d || (d = yield e.loadAudioClip(t).catch( () => null)),
                        !d || !d._nativeAsset)
                            return void (0,
                            I.Kb)("Load Audio Failed:" + t, {
                                errorType: W.wQ.RESOURCE_ERROR
                            });
                        if (r.ogD.now() - c > 500)
                            return;
                        const l = e.needReleaseAsset(t);
                        let h = e.effect;
                        if (i)
                            return l && d.addRef(),
                            h.playOneShot(d, n),
                            new Promise(t => {
                                setTimeout( () => {
                                    l && d.decRef(),
                                    t(null)
                                }
                                , 1e3 * d.getDuration())
                            }
                            );
                        {
                            if (h.playing && (h = e.getFreeEffect()),
                            !s && e.playingEffect[t] && e.playingEffect[t].length > 0) {
                                const i = e.playingEffect[t].slice(-1)[0];
                                if (i.currentTime / i.duration < .3)
                                    return
                            }
                            h.loop = o,
                            l && d.addRef();
                            const i = h.clip;
                            return i && i.refCount > 0 && i.decRef(),
                            h.clip = d,
                            h.play(),
                            (null === (a = e.playingEffect[t]) || void 0 === a ? void 0 : a.length) > 0 ? e.playingEffect[t].push(h) : e.playingEffect[t] = [h],
                            e.effectMap[t] = h,
                            new Promise(i => {
                                setTimeout( () => {
                                    e.onEffectEnd(t),
                                    i(null)
                                }
                                , 1e3 * h.duration)
                            }
                            )
                        }
                    }()
                })
            }
            stopEffect(t) {
                this.effectMap[t] && (this.effectMap[t].stop(),
                delete this.effectMap[t]),
                this.onEffectEnd(t)
            }
            onEffectEnd(t) {
                this.playingEffect[t] && this.playingEffect[t].length > 0 && (this.playingEffect[t].shift(),
                0 === this.playingEffect[t].length && delete this.playingEffect[t])
            }
            stopAllEffects() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Object.keys(this.effectMap).forEach(e => {
                    this.effectMap[e].loop && t ? this.effectMap[e].pause() : this.stopEffect(e)
                }
                )
            }
            delayToResume() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    yield(0,
                    ct.yy)(1e3),
                    this.resume()
                })
            }
            resume() {
                var t;
                if (0 !== this.musicVolume) {
                    if (this.currentBgm) {
                        const e = null === (t = this.music.clip) || void 0 === t ? void 0 : t.name;
                        3 !== this.music.state && e && this.currentBgm.includes(e) ? this.music.play() : this.playMusic(this.currentBgm)
                    }
                    Object.keys(this.effectMap).forEach(t => {
                        this.effectMap[t].play()
                    }
                    )
                }
            }
            pause() {
                this.music.pause(),
                this.stopAllEffects(!0)
            }
            set musicVolume(t) {
                It("music", t),
                this.music.volume = this.musicVolume,
                0 === t ? this.pause() : this.resume()
            }
            get musicVolume() {
                var t, e;
                return null !== (e = null === (t = (0,
                l.Gq)(ut.H.SETTING_SWITCH)) || void 0 === t ? void 0 : t.music) && void 0 !== e ? e : 1
            }
            set effectVolume(t) {
                It("sound", t),
                this.effect.volume = t
            }
            get effectVolume() {
                var t, e;
                return null !== (e = null === (t = (0,
                l.Gq)(ut.H.SETTING_SWITCH)) || void 0 === t ? void 0 : t.sound) && void 0 !== e ? e : 1
            }
            get isMuted() {
                return 0 === this.musicVolume && 0 === this.effectVolume
            }
            preloadEffect() {
                [...Object.values(Nt.P), ...(0,
                Wt.Y5)()].forEach(t => {
                    t && this.loadAudioClip(t).catch( () => {
                        (0,
                        p._o)(2) && console.warn("预加载音效失败：", t)
                    }
                    )
                }
                )
            }
            loadAudioClip(t) {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    return (0,
                    Wt.aH)(t) ? Z.h.load(t, r.rU5) : Z.h.loadRemoteAudio(t)
                })
            }
        }
        ;
        (0,
        n.Cg)([xt(r.bP0)], Mt.prototype, "root", void 0),
        Mt = (0,
        n.Cg)([Dt("AudioController")], Mt),
        window.cc._RF.pop();
        const {ccclass: Gt} = r.P4R;
        window.cc._RF.push({}, "1811bTzRyxGlIySxxmUkpXa", "BackController", void 0);
        let Vt = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.backListenersStack = [],
                this.isReturnable = !0
            }
            handleBVGCShow() {
                this.isReturnable = !1
            }
            handleBVGCHide() {
                this.isReturnable = !0
            }
            onLoad() {
                y.q.back = this,
                (0,
                p._o)(2) && this.debugPhysicalButton()
            }
            bindEvents(t) {
                (0,
                u.R6)( () => {
                    this.back(!0),
                    y.q.event.emit(O.H.TAP_BACK)
                }
                ),
                y.q.event.on(O.H.ADD_BACK_LISTENER, t => {
                    this.setBackListener(t)
                }
                , this),
                y.q.event.on(O.H.POP_BACK_LISTENER, this.removeLastBack, this),
                y.q.event.on(O.H.CLICK_BACK, this.back, this),
                this.uiBackHandler = t
            }
            setBackListener(t) {
                this.backListenersStack.push(t)
            }
            clear() {
                this.backListenersStack = []
            }
            back() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                var e;
                if (!this.isReturnable)
                    return;
                let i = y.q.spinner.onTapBack();
                if (i = (null === (e = this.uiBackHandler) || void 0 === e ? void 0 : e.onTapBack(i, t)) || i,
                i)
                    return;
                const o = this.backListenersStack[this.backListenersStack.length - 1];
                o ? o() : (0,
                u.a3)()
            }
            removeLastBack() {
                0 !== this.backListenersStack.length ? this.backListenersStack.pop() : (0,
                I.Kb)("[back] 没有可以移除的监听")
            }
            debugPhysicalButton() {
                r.hFB.off(r.pde.EventType.KEY_UP),
                r.hFB.on(r.pde.EventType.KEY_UP, t => {
                    t.keyCode === r.DDm.KEY_B && this.back(!0)
                }
                , this)
            }
        }
        ;
        Vt = (0,
        n.Cg)([Gt("BackController")], Vt),
        window.cc._RF.pop(),
        i(12430),
        i(38844);
        const {ccclass: Ft, property: Ut} = r.P4R;
        window.cc._RF.push({}, "d1f50Bbh1BFrZSJ0qBwhODC", "SpinnerController", void 0);
        let Ht = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.root = null,
                this.killSpinnerBanTime = 0,
                this.isForceStartShowing = !1
            }
            onLoad() {
                y.q.spinner = this,
                this.mask = this.root.getChildByName("mask")
            }
            get isShow() {
                return this.root.active
            }
            startWithDelay(t, e, i) {
                return (0,
                n.sH)(this, arguments, void 0, function(t, e, i) {
                    var o = this;
                    let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                      , a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    return function*() {
                        return t ? (o.waitTimer && (clearTimeout(o.waitTimer),
                        o.waitTimer = 0),
                        new Promise( (a, c) => {
                            o.waitTimer = window.setTimeout( () => (0,
                            n.sH)(o, void 0, void 0, function*() {
                                try {
                                    const t = yield this.startShow(e, i, s, r);
                                    a(t)
                                } catch (t) {
                                    console.error("startWithDelay error", e.toString(), t),
                                    c("startWithDelay error")
                                }
                            }), t)
                        }
                        )) : o.startShow(e, i, s, r, a)
                    }()
                })
            }
            startShow(t, e) {
                return (0,
                n.sH)(this, arguments, void 0, function(t, e) {
                    var i = this;
                    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    return function*() {
                        if (i.root.active = !0,
                        i.mask && (i.mask.active = s),
                        i.waitingPromiseReject = null,
                        i.killSpinnerBanTime = n,
                        t) {
                            i.spinnerStartTime = Date.now();
                            const n = (0,
                            M.lu)(t, e, o);
                            return i.waitingPromiseReject = n.abort,
                            n.finalPromise
                        }
                    }()
                })
            }
            forceStartShow(t, e) {
                return (0,
                n.sH)(this, arguments, void 0, function(t, e) {
                    var i = this;
                    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    return function*() {
                        const r = yield i.startShow(t, e, o, n, s);
                        return i.isForceStartShowing = !0,
                        r
                    }()
                })
            }
            end() {
                !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.isForceStartShowing || (this.waitTimer && (clearTimeout(this.waitTimer),
                this.waitTimer = 0),
                this.root.active = !1,
                this.spinnerStartTime = null,
                this.isForceStartShowing = !1)
            }
            forceEnd() {
                this.end(!0)
            }
            ifCloseSpinner() {
                return !!(this.root.active && this.waitingPromiseReject && this.spinnerStartTime && Date.now() - this.spinnerStartTime > this.killSpinnerBanTime) && (this.end(),
                this.waitingPromiseReject(P.ze.USER_DID_TAP_BACK),
                this.waitingPromiseReject = null,
                !0)
            }
            onTapBack() {
                const t = this.root.active;
                return this.ifCloseSpinner(),
                t
            }
        }
        ;
        var qt, Qt, zt;
        (0,
        n.Cg)([Ut(r.bP0)], Ht.prototype, "root", void 0),
        Ht = (0,
        n.Cg)([Ft("SpinnerController")], Ht),
        window.cc._RF.pop(),
        function(t) {
            t.FUNCTION_TRIGGER = "FUNCTION_TRIGGER",
            t.EVENT_TRIGGER = "EVENT_TRIGGER",
            t.POPUP_TRIGGER = "POPUP_TRIGGER"
        }(qt || (qt = {})),
        function(t) {
            t[t.POPUP_FRIEND_EXP = 100] = "POPUP_FRIEND_EXP"
        }(Qt || (Qt = {})),
        zt || (zt = {});
        const {ccclass: Jt} = r.P4R;
        window.cc._RF.push({}, "84b038c+fVOKaFJ98MBYO+P", "TaskQueueController", void 0);
        let Kt = class extends r.uAl {
            constructor() {
                super(...arguments),
                this._currentRunTask = !1,
                this._queue = []
            }
            dequeue() {
                return this._queue.length ? ((0,
                p._o)(8) && (0,
                I.Vt)(["task queue", this._queue]),
                this._queue.pop()) : null
            }
            enqueue(t) {
                const e = this._queue.length;
                if ((0,
                p._o)(8) && (0,
                I.Vt)(["task enqueue", t]),
                0 === e)
                    return !!this._queue.push(t);
                let i = 0;
                for (; i < e; ) {
                    const e = this._queue[i];
                    if (t.priority <= e.priority)
                        break;
                    i++
                }
                return this._queue.splice(i, 0, t),
                !0
            }
            empty() {
                return !this._queue.length
            }
            clear() {
                this._queue.length = 0
            }
            onLoad() {
                this._currentRunTask = !1,
                y.q.taskQueue = this
            }
            pushPopupInQueue(t, e) {
                const i = zt[Qt[t]];
                if (!i)
                    throw new Error("QueueTaskPopupPath.".concat(Qt[t], " path未配置,请配置"));
                this.initTask([{
                    priority: t,
                    taskType: qt.POPUP_TRIGGER,
                    taskContent: i,
                    params: e
                }])
            }
            pushEventInQueue(t, e) {
                this.initTask([{
                    priority: t,
                    taskType: qt.EVENT_TRIGGER,
                    taskContent: e
                }])
            }
            initTask(t) {
                if (t && 0 !== t.length)
                    for (const e of t)
                        this.enqueue(e)
            }
            runTask() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    if (this.empty() || this._currentRunTask)
                        (0,
                        I.L6)(["runTask: ", this._currentRunTask ? "正在运行任务, 请勿运行新任务" : "任务队里为空"]);
                    else
                        try {
                            const t = this.dequeue();
                            switch (this._currentRunTask = !0,
                            t.taskType) {
                            case qt.POPUP_TRIGGER:
                                yield y.q.ui.open({
                                    uiPath: t.taskContent,
                                    data: t.params
                                });
                                break;
                            case qt.EVENT_TRIGGER:
                                y.q.event.emit(t.taskContent, t.params);
                                break;
                            case qt.FUNCTION_TRIGGER:
                                t.callback(t.params)
                            }
                        } catch (t) {
                            (0,
                            I.Kb)("runTask error", {
                                error: t
                            })
                        } finally {
                            this._currentRunTask = !1
                        }
                })
            }
            isQueueEmpty() {
                return this.empty()
            }
            clearTask() {
                this.clear(),
                this._currentRunTask = !1
            }
            endTaskForce() {
                this._currentRunTask = !1
            }
        }
        ;
        Kt = (0,
        n.Cg)([Jt("TaskQueueController")], Kt),
        window.cc._RF.pop();
        const jt = [0, 50, 100, 150]
          , {ccclass: Zt} = r.P4R;
        window.cc._RF.push({}, "88871Ov/8NG0r+nAdBOd0eF", "VibrationController", void 0);
        let Xt = class extends r.uAl {
            constructor() {
                super(...arguments),
                this._isSupportVibration = !0
            }
            onLoad() {
                y.q.vibration = this,
                this._isSupportVibration = this.checkIsSupportVibration()
            }
            get vibrationLevel() {
                var t;
                return void 0 !== this._vibration && null !== this._vibration || (this._vibration = null !== (t = Ot("vibration")) && void 0 !== t ? t : 2),
                this._vibration
            }
            set vibrationLevel(t) {
                this._vibration = t,
                It("vibration", t)
            }
            get isVibrationSwitch() {
                var t;
                return void 0 !== this._isVibrationSwitch && null !== this._isVibrationSwitch || (this._isVibrationSwitch = null !== (t = Ot("vibrationSwitch")) && void 0 !== t ? t : 1),
                this._isVibrationSwitch
            }
            set isVibrationSwitch(t) {
                this._isVibrationSwitch = t,
                It("vibrationSwitch", t)
            }
            get isSupportVibration() {
                return this._isSupportVibration
            }
            get isVibrationEnabled() {
                return this.isSupportVibration && this.isVibrationSwitch > 0
            }
            isSupportBrowserVibrate() {
                return window.navigator.vibrate = s.Ay.android && navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
            }
            isSupportIosVibrate() {
                return window.IS_NATIVE || (0,
                kt.aR)() && (0,
                kt.su)() >= 35400
            }
            checkIsSupportVibration() {
                return this.isSupportBrowserVibrate() || this.isSupportIosVibrate()
            }
            vibrate(t) {
                if (!this.isVibrationEnabled)
                    return;
                const e = null != t ? t : this.vibrationLevel;
                if (this.isSupportIosVibrate()) {
                    let t;
                    switch (e) {
                    case 1:
                        t = "light";
                        break;
                    case 2:
                        t = "medium";
                        break;
                    case 3:
                        t = "heavy"
                    }
                    (0,
                    u.lO)("vibrate", {
                        style: t
                    }).catch(t => {
                        console.error("vibrate error", t)
                    }
                    )
                } else
                    this.isSupportBrowserVibrate() && e && window.navigator.vibrate(jt[e])
            }
            vibrateByTime(t) {
                this.isVibrationSwitch && this.isSupportBrowserVibrate() && window.navigator.vibrate(t)
            }
        }
        ;
        var Yt;
        Xt = (0,
        n.Cg)([Zt("VibrationController")], Xt),
        window.cc._RF.pop(),
        i(33110),
        i(58335),
        function(t) {
            t[t.APPEAR = 0] = "APPEAR",
            t[t.DISAPPEAR = 1] = "DISAPPEAR"
        }(Yt || (Yt = {}));
        const {ccclass: $t} = r.P4R;
        window.cc._RF.push({}, "82f60MlHNlGUas6g8rzun5R", "ViewAppearController", void 0);
        let te = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.viewState = Yt.APPEAR
            }
            onLoad() {
                y.q.viewAppear = this,
                (0,
                kt.aR)() ? (document.addEventListener("visibilitychange", t => {
                    "visible" === document.visibilityState ? this.handleViewWillReappear(t) : "hidden" === document.visibilityState && this.handleViewWillDisappear()
                }
                ),
                (0,
                u.nZ)(t => {
                    this.handleIosViewWillReappear(t)
                }
                ),
                (0,
                u.n2)( () => {
                    this.handleIosViewWillDisappear()
                }
                )) : ((0,
                u.nZ)(t => {
                    this.handleViewWillReappear(t)
                }
                ),
                (0,
                u.n2)( () => {
                    this.handleViewWillDisappear()
                }
                ))
            }
            isViewAppear() {
                return this.viewState === Yt.APPEAR
            }
            handleReappearData(t) {
                let e, i = "";
                if (t && "" !== (null == t ? void 0 : t.data))
                    try {
                        const o = t.data ? JSON.parse(t.data) : {};
                        if (o.data && "" !== o.data) {
                            const t = JSON.parse(o.data);
                            i = t.from,
                            e = t.code
                        }
                    } catch (t) {
                        (0,
                        I.Kb)("view will reappear error: " + JSON.stringify(t))
                    }
                return {
                    from: i,
                    code: e
                }
            }
            handleIosViewWillReappear(t) {
                const e = this.handleReappearData(t);
                (0,
                I.Vt)(["[handleIosViewWillReappear]: ", t]),
                y.q.event.emit(O.H.IOS_VIEW_WILL_REAPPEAR, e)
            }
            handleIosViewWillDisappear() {
                (0,
                I.Vt)(["[handleIosViewWillDisappear]"]),
                y.q.event.emit(O.H.IOS_VIEW_WILL_DISAPPEAR)
            }
            handleViewWillReappear(t) {
                const e = this.handleReappearData(t);
                (0,
                I.Vt)(["[WillReappear]: ", t]),
                y.q.event.emit(O.H.VIEW_WILL_REAPPEAR, e)
            }
            handleViewWillDisappear() {
                (0,
                I.Vt)(["[WillDisappear]"]),
                y.q.event.emit(O.H.VIEW_WILL_DISAPPEAR)
            }
        }
        ;
        te = (0,
        n.Cg)([$t("ViewAppearController")], te),
        window.cc._RF.pop();
        var ee = i(39295);
        const {ccclass: ie, requireComponent: oe, property: ne} = r.P4R;
        window.cc._RF.push({}, "e4435QR8pZLxLctRpUPJUqw", "FitUIBackground", void 0);
        let se = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.isFitNotch = !0
            }
            start() {
                const t = r.UpL.getDesignResolutionSize()
                  , e = screen.width / screen.height
                  , i = t.width / t.height;
                if (e > i) {
                    const o = Math.min(e / i, 1.2) * t.width;
                    this.fitWidth((o - t.width) / 2)
                } else
                    this.isFitNotch && this.fitNotch()
            }
            fitWidth(t) {
                const e = this.node.getComponent(r.x0g);
                ee.I.fitOrientation === ee.y.VERTICAL ? (e.left -= t,
                e.right -= t) : ee.I.fitOrientation === ee.y.HORIZONTAL && (e.top -= t,
                e.bottom -= t)
            }
            fitNotch() {
                const t = this.node.getComponent(r.x0g);
                ee.I.fitOrientation === ee.y.VERTICAL ? (ee.I.indentTop > 0 && (t.top -= ee.I.indentTop),
                ee.I.indentBottom > 0 && (t.bottom -= ee.I.indentBottom)) : ee.I.fitOrientation === ee.y.HORIZONTAL && (ee.I.indentTop > 0 && (t.left -= ee.I.indentTop),
                ee.I.indentBottom > 0 && (t.right -= ee.I.indentBottom))
            }
        }
        ;
        (0,
        n.Cg)([ne], se.prototype, "isFitNotch", void 0),
        se = (0,
        n.Cg)([ie("FitUIBackground"), oe(r.x0g)], se),
        window.cc._RF.pop();
        var re = i(9355);
        const {ccclass: ae} = r.P4R;
        window.cc._RF.push({}, "5163eOMsmREhK4zfV87iNnk", "InfoBarAdapter", void 0);
        let ce = class extends r.uAl {
            start() {
                this.updateWidget()
            }
            updateWidget() {
                const t = this.getComponent(r.x0g);
                t ? t.isAlignTop && !ee.I.isLongScreen && s.Ay.ios && (t.top = t.top + 20) : re.qS && (0,
                I.L6)("缺少 Widget 组件")
            }
        }
        ;
        ce = (0,
        n.Cg)([ae("InfoBarAdapter")], ce),
        window.cc._RF.pop();
        const {ccclass: de, property: ue} = r.P4R;
        window.cc._RF.push({}, "2a459aRMgZNGIs52y2Bj4By", "RotateComponent", void 0);
        let le = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.speed = (0,
                r.v3)(0, -100, 0)
            }
            start() {
                this.euler = this.node.eulerAngles.clone()
            }
            update(t) {
                this.euler.add3f(this.speed.x * t, this.speed.y * t, this.speed.z * t),
                this.node.setRotationFromEuler(this.euler)
            }
        }
        ;
        (0,
        n.Cg)([ue(r.eBl)], le.prototype, "speed", void 0),
        le = (0,
        n.Cg)([de("RotateComponent")], le),
        window.cc._RF.pop();
        const {ccclass: he, property: pe} = r.P4R;
        window.cc._RF.push({}, "f0483f46rdJZbksrGKDjyV6", "UIMask", void 0);
        let ge = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.type = E.H.Game,
                this.needCallBack = !1,
                this.onClick = new r.JmQ
            }
            onEnable() {
                this.node.on(r.bP0.EventType.TOUCH_START, this.touchstart, this),
                this.node.on(r.bP0.EventType.TOUCH_END, this.touchend, this)
            }
            touchstart(t) {
                t.propagationStopped = !0
            }
            touchend(t) {
                this.onClick && this.onClick.emit([t]),
                t.propagationStopped = !0
            }
            onDisable() {
                this.node.off(r.bP0.EventType.TOUCH_START, this.touchstart, this),
                this.node.off(r.bP0.EventType.TOUCH_END, this.touchend, this)
            }
        }
        ;
        (0,
        n.Cg)([pe], ge.prototype, "needCallBack", void 0),
        (0,
        n.Cg)([pe({
            type: r.JmQ,
            visible() {
                return this.needCallBack
            }
        })], ge.prototype, "onClick", void 0),
        ge = (0,
        n.Cg)([he("UIMask")], ge);
        var me = ge;
        window.cc._RF.pop();
        const {ccclass: ve} = r.P4R;
        window.cc._RF.push({}, "a393e3rSp9OE7IanKdEHQ7l", "UIMaskPop", void 0);
        let fe = class extends me {
            onLoad() {
                this.type = E.H.Pop
            }
        }
        ;
        fe = (0,
        n.Cg)([ve("UIMaskPop")], fe),
        window.cc._RF.pop();
        const {property: ye} = r.P4R;
        var _e;
        !function(t) {
            t[t.FULL_SCREEN = 0] = "FULL_SCREEN",
            t[t.CONTENT = 1] = "CONTENT"
        }(_e || (_e = {})),
        (0,
        r.gpy)(_e);
        class Ce extends r.uAl {
            constructor() {
                super(...arguments),
                this.useInterpolation = !1,
                this.fitAccordingTo = _e.FULL_SCREEN,
                this.minScreenRatio = 1.77866,
                this.maxScreenRatio = 2.16533
            }
            getScreenRatio() {
                return this.fitAccordingTo === _e.FULL_SCREEN ? ee.I.screenRatio : this.fitAccordingTo === _e.CONTENT ? ee.I.contentRatio : void 0
            }
            adaptWithInterpolation(t, e) {
                const i = this.getScreenRatio();
                return i <= this.minScreenRatio ? t : i >= this.maxScreenRatio ? e : "number" == typeof t && "number" == typeof e ? t + (e - t) * ((i - this.minScreenRatio) / (this.maxScreenRatio - this.minScreenRatio)) : t instanceof r.eBl && e instanceof r.eBl ? t.lerp(e, (i - this.minScreenRatio) / (this.maxScreenRatio - this.minScreenRatio)) : void 0
            }
            adaptWithoutInterpolation(t, e) {
                return ee.I.isLongScreen ? e : t
            }
            getAdaptedValue(t, e) {
                return this.useInterpolation ? this.adaptWithInterpolation(t, e) : this.adaptWithoutInterpolation(t, e)
            }
            handleCanvasResize() {
                !re.qS && this.adapt()
            }
            start() {
                this.adapt(),
                r.UpL.on("canvas-resize", this.handleCanvasResize, this)
            }
            onDestroy() {
                r.UpL.off("canvas-resize", this.handleCanvasResize, this)
            }
        }
        (0,
        n.Cg)([ye({
            tooltip: "是否插值"
        })], Ce.prototype, "useInterpolation", void 0),
        (0,
        n.Cg)([ye({
            type: _e,
            tooltip: "适配的基准"
        })], Ce.prototype, "fitAccordingTo", void 0),
        (0,
        n.Cg)([ye({
            type: r.dBS,
            tooltip: "最小屏幕高宽比，用来做插值计算",
            visible() {
                return this.useInterpolation
            }
        })], Ce.prototype, "minScreenRatio", void 0),
        (0,
        n.Cg)([ye({
            type: r.dBS,
            tooltip: "最大屏幕高宽比，用来做插值计算",
            visible() {
                return this.useInterpolation
            }
        })], Ce.prototype, "maxScreenRatio", void 0);
        const {ccclass: Se, property: we, requireComponent: ke} = r.P4R;
        var be;
        !function(t) {
            t[t.Top = 1] = "Top",
            t[t.Bottom = 2] = "Bottom",
            t[t.Left = 3] = "Left",
            t[t.Right = 4] = "Right"
        }(be || (be = {})),
        (0,
        r.gpy)(be),
        window.cc._RF.push({}, "f683fh210NLCapzo2hyP42G", "WidgetAdapter", void 0);
        let Pe = class extends Ce {
            constructor() {
                super(...arguments),
                this._alignType = be.Top,
                this._padding0 = 0,
                this._padding1 = 0
            }
            get alignType() {
                return this._alignType
            }
            set alignType(t) {
                this._alignType = t,
                this.updateWidget()
            }
            get paddingForShortScreen() {
                return this._padding0
            }
            set paddingForShortScreen(t) {
                this._padding0 = t,
                this.updateWidget()
            }
            get paddingForLongScreen() {
                return this._padding1
            }
            set paddingForLongScreen(t) {
                this._padding1 = t,
                this.updateWidget()
            }
            updateWidget() {
                const t = this.getComponent(r.x0g);
                t ? this.alignType === be.Top ? (t.isAlignBottom = !1,
                t.isAlignTop = !0,
                t.top = this.padding) : this.alignType === be.Bottom ? (t.isAlignTop = !1,
                t.isAlignBottom = !0,
                t.bottom = this.padding) : this.alignType === be.Left ? (t.isAlignLeft = !0,
                t.isAlignRight = !1,
                t.left = this.padding) : this.alignType === be.Right && (t.isAlignLeft = !1,
                t.isAlignRight = !0,
                t.right = this.padding) : re.qS && console.error("缺少 Widget 组件")
            }
            get padding() {
                return this.getAdaptedValue(this.paddingForShortScreen, this.paddingForLongScreen)
            }
            adapt() {
                this.updateWidget()
            }
        }
        ;
        (0,
        n.Cg)([we({
            type: be
        })], Pe.prototype, "_alignType", void 0),
        (0,
        n.Cg)([we({
            type: be
        })], Pe.prototype, "alignType", null),
        (0,
        n.Cg)([we], Pe.prototype, "_padding0", void 0),
        (0,
        n.Cg)([we], Pe.prototype, "paddingForShortScreen", null),
        (0,
        n.Cg)([we], Pe.prototype, "_padding1", void 0),
        (0,
        n.Cg)([we], Pe.prototype, "paddingForLongScreen", null),
        Pe = (0,
        n.Cg)([Se("WidgetAdapter"), ke(r.x0g)], Pe),
        window.cc._RF.pop(),
        i(27495),
        i(81454);
        const {ccclass: Ee, property: Re} = r.P4R;
        window.cc._RF.push({}, "91fdd40hw1MU420akwI/EC2", "AdminLabel", void 0);
        let Ae = class extends r.JU7 {
            constructor() {
                super(...arguments),
                this.textKey = "",
                this._asStrokeColor = !1
            }
            get asStrokeColor() {
                return this._asStrokeColor
            }
            set asStrokeColor(t) {
                this._asStrokeColor = t,
                t ? (this.getComponent(r.hS9) || this.addComponent(r.hS9),
                this.getComponent(r.hS9).enabled = !0) : this.getComponent(r.hS9) && (this.getComponent(r.hS9).enabled = !1)
            }
            onLoad() {
                this.tryAutoUpdateValue()
            }
            setText(t) {
                if ("string" == typeof t)
                    this.string = t;
                else if (this.string = (null == t ? void 0 : t.text) || "",
                t.color) {
                    const e = this.parseRGBA(t.color);
                    if (this.asStrokeColor) {
                        const t = this.getComponent(r.hS9);
                        if (!t)
                            return void (0,
                            I.Kb)(this.node.name, {
                                title: "label缺少LabelOutline 组件，而它对应的 admin 配置了描边颜色"
                            });
                        t.color = e
                    } else
                        this.color = e
                }
            }
            tryAutoUpdateValue() {
                if (this.textKey) {
                    const t = (0,
                    c.jW)(this.textKey);
                    if (!t)
                        return;
                    const e = "string" == typeof t ? t : t.text;
                    if (/\{(\w+)\}/.test(e))
                        return;
                    this.setText(t)
                }
            }
            parseRGBA(t) {
                const e = t.indexOf("(")
                  , i = t.slice(e + 1, t.length - 1).split(",").map(t => +t);
                return new r.Q1f(i[0],i[1],i[2],255 * i[3])
            }
            updateValue() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.textKey) {
                    const e = (0,
                    c.wb)(this.textKey, t);
                    if (!e)
                        return;
                    this.setText(e),
                    this.scheduleOnce( () => this.node.emit("resize"))
                }
            }
            setTextByKey(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.textKey = t,
                this.updateValue(e)
            }
        }
        ;
        (0,
        n.Cg)([Re({
            tooltip: "填写 admin 中对应文案的 key"
        })], Ae.prototype, "textKey", void 0),
        (0,
        n.Cg)([Re], Ae.prototype, "_asStrokeColor", void 0),
        (0,
        n.Cg)([Re({
            tooltip: "是否将 admin 的颜色用作描边",
            visible() {
                return this.textKey.startsWith("text_color")
            }
        })], Ae.prototype, "asStrokeColor", null),
        Ae = (0,
        n.Cg)([Ee("AdminLabel")], Ae),
        window.cc._RF.pop();
        var Te = i(68062)
          , We = i(53501)
          , Ie = i(84218)
          , Oe = i(92002)
          , Le = i(57188);
        const {ccclass: Ne, property: Be} = r.P4R;
        window.cc._RF.push({}, "d4e19sAHWhOdr/in2ZYuUYR", "MoreDown", void 0);
        let De = class extends Le.A {
            constructor() {
                super(...arguments),
                this.imgBg = null,
                this.btnTC = null,
                this.btnSetup = null,
                this.btnShare = null,
                this.btnCollapse = null,
                this.isOpen = !1,
                this.originY = 0
            }
            onLoad() {
                this.dynamicBtnList = [this.btnSetup, this.btnTC, this.btnShare, this.btnCollapse],
                this.dynamicOriginBtnYList = [-88, -176, -264, -362],
                this.isOpen && this.dynamicBtnList.forEach(t => {
                    const {x: e} = t.node.getPosition()
                      , i = this.originY;
                    t.node.setPosition(e, i),
                    t.node.active = !1
                }
                ),
                this.dynamicYEnd = -372,
                this.fixedBtnList = [],
                this.fixedOpenBtnYList = [],
                this.fixedOriginBtnYList = []
            }
            addActivityBtn(t) {
                this.fixedBtnList.includes(t) || (t.node.active = !0,
                this.fixedBtnList.push(t),
                this.updateActivityPos())
            }
            removeActivityBtn(t) {
                const e = this.fixedBtnList.indexOf(t);
                -1 !== e && (t.node.active = !1,
                this.fixedBtnList.splice(e, 1),
                this.updateActivityPos())
            }
            updateActivityPos() {
                const t = this.originY
                  , e = this.dynamicYEnd;
                this.fixedBtnList.forEach( (i, o) => {
                    const {x: n} = i.node.getPosition()
                      , s = t + -102 * (o + 1)
                      , r = e + -102 * (o + 1);
                    this.fixedOriginBtnYList[o] = s,
                    this.fixedOpenBtnYList[o] = r,
                    i.node.setPosition(n, s)
                }
                )
            }
            playEffect(t, e) {
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                const {x: o} = t.node.position;
                r.Kak.stopAllByTarget(t.node);
                const n = i ? e : e - 80
                  , s = i ? 255 : 0
                  , a = t.node.getComponent(r.wFi)
                  , c = this.imgBg.getComponent(r.$lP)
                  , d = i ? 420 : 0
                  , u = i ? .2 : .25;
                (0,
                r.QxW)(a).to(.2, {
                    opacity: s
                }).start(),
                (0,
                r.QxW)(c).to(u, {
                    height: d
                }).start(),
                (0,
                r.QxW)(t.node).to(.2, {
                    position: (0,
                    r.v3)(o, n, 0)
                }, {
                    easing: "fade"
                }).call( () => {
                    t.node.active = i
                }
                ).start()
            }
            playBtnAm() {
                for (let t = 0; t < this.fixedBtnList.length; t++) {
                    const e = this.fixedBtnList[t];
                    e.node.active = !0;
                    const i = this.isOpen ? this.fixedOriginBtnYList[t] : this.fixedOpenBtnYList[t];
                    this.playEffect(e, i, !0)
                }
                for (let t = 0; t < this.dynamicBtnList.length; t++) {
                    const e = this.dynamicBtnList[t];
                    e.node.active = !0;
                    const i = this.isOpen ? this.originY : this.dynamicOriginBtnYList[t];
                    this.playEffect(e, i, !this.isOpen)
                }
            }
            onClickMoreBtn() {
                (0,
                Oe.MP)(We.qo.LANDING_PAGE, We.vf.ACTION_BUTTON, {
                    main_mode: (0,
                    S.v)(),
                    coin_balance: yt.i.user.userCoins,
                    action_button_type: "expand_btn"
                }),
                this.playBtnAm(),
                this.isOpen = !this.isOpen,
                this.isOpen && this.preLoadPopupPrefab()
            }
            onClickCollapseBtn() {
                this.playBtnAm(),
                this.isOpen = !1
            }
            onClickHelpBtn() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {})
            }
            onClickTCBtn() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    (0,
                    Oe.MP)(We.qo.LANDING_PAGE, We.vf.ACTION_BUTTON, {
                        main_mode: (0,
                        S.v)(),
                        coin_balance: yt.i.user.userCoins,
                        action_button_type: "tnc_btn"
                    }),
                    yield y.q.ui.open({
                        uiPath: w.Z.TCPopup
                    })
                })
            }
            onClickSetupBtn() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    (0,
                    Oe.MP)(We.qo.LANDING_PAGE, We.vf.ACTION_BUTTON, {
                        main_mode: (0,
                        S.v)(),
                        coin_balance: yt.i.user.userCoins,
                        action_button_type: "setting_btn"
                    }),
                    yield y.q.ui.open({
                        uiPath: w.Z.SettingPopup
                    })
                })
            }
            onClickShareBtn() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    (0,
                    Oe.MP)(We.qo.LANDING_PAGE, We.vf.ACTION_BUTTON, {
                        main_mode: (0,
                        S.v)(),
                        coin_balance: yt.i.user.userCoins,
                        action_button_type: "share_btn"
                    }),
                    yield(0,
                    Te.f)(Ie.r.SHARE_LANDING)
                })
            }
            preLoadPopupPrefab() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {})
            }
            onDestroy() {}
        }
        ;
        (0,
        n.Cg)([Be(r.kxk)], De.prototype, "imgBg", void 0),
        (0,
        n.Cg)([Be(Le.A)], De.prototype, "btnTC", void 0),
        (0,
        n.Cg)([Be(Le.A)], De.prototype, "btnSetup", void 0),
        (0,
        n.Cg)([Be(Le.A)], De.prototype, "btnShare", void 0),
        (0,
        n.Cg)([Be(Le.A)], De.prototype, "btnCollapse", void 0),
        De = (0,
        n.Cg)([Ne("MoreDown")], De),
        window.cc._RF.pop(),
        i(93088);
        var xe = i(92883)
          , Me = i(23241);
        const {ccclass: Ge, property: Ve} = r.P4R;
        window.cc._RF.push({}, "a2808wO/BpM2r1hnXZSeCdQ", "Monster", void 0);
        let Fe = class extends C.A {
            beforeOpen() {
                y.q.ui.currentSceneName === T.P.GameScene && y.q.event.emit(Me.L.GAME_PAUSE)
            }
            onOpen(t) {
                (0,
                Oe.ad)(We.qo.LANDING_PAGE, We.W1.ERROR_POPUP, {
                    main_mode: (0,
                    S.v)()
                }),
                t && (this.quitType = t.quitType || R.z.CLOSE_SELF,
                this.txtTips.string = t.msg,
                this.btnClose.active = !t.hideClose,
                this.btnBackLabel.string = t.backBtnText || (0,
                c.wb)("text_btn_back"),
                t.onQuit && (this.onQuit = t.onQuit),
                t.onRetry ? this.onRetry = t.onRetry : this.btnTryAgain.active = !1)
            }
            onClickTryAgain() {
                (0,
                Oe.nx)(We.qo.LANDING_PAGE, We.vf.ACTION_BUTTON, We.W1.ERROR_POPUP, {
                    main_mode: (0,
                    S.v)(),
                    action_button_type: "try_again"
                }),
                this.onRetry ? (this.onRetry(),
                this.close()) : this.onClickQuit()
            }
            onClickQuit() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    switch ((0,
                    Oe.nx)(We.qo.LANDING_PAGE, We.vf.ACTION_BUTTON, We.W1.ERROR_POPUP, {
                        main_mode: (0,
                        S.v)(),
                        action_button_type: "back_btn"
                    }),
                    this.onQuit && (yield this.onQuit()),
                    this.quitType) {
                    case R.z.CLOSE_SELF:
                        y.q.ui.currentSceneName === T.P.GameScene && y.q.event.emit(Me.L.GAME_RESUME),
                        yield this.close();
                        break;
                    case R.z.QUIT_GAME:
                        yield(0,
                        xe.a3)();
                        break;
                    case R.z.REFRESH_GAME:
                        window.location.reload();
                        break;
                    case R.z.BACK_LANDING:
                        this.close(),
                        yield y.q.ui.runScene({
                            sceneName: T.P.LandingScene
                        });
                        break;
                    case R.z.BACK_ADVENTURE_LANDING:
                        this.close(),
                        yield y.q.ui.runScene({
                            sceneName: T.P.AdventureLandingScene
                        })
                    }
                })
            }
            back() {
                this.onClickQuit()
            }
            clickClose() {
                (0,
                Oe.nx)(We.qo.LANDING_PAGE, We.vf.ACTION_BUTTON, We.W1.ERROR_POPUP, {
                    main_mode: (0,
                    S.v)(),
                    action_button_type: "close_btn"
                }),
                this.close()
            }
        }
        ;
        (0,
        n.Cg)([Ve(Ae)], Fe.prototype, "txtTips", void 0),
        (0,
        n.Cg)([Ve(r.bP0)], Fe.prototype, "btnBack", void 0),
        (0,
        n.Cg)([Ve(r.JU7)], Fe.prototype, "btnBackLabel", void 0),
        (0,
        n.Cg)([Ve(r.bP0)], Fe.prototype, "btnTryAgain", void 0),
        (0,
        n.Cg)([Ve(r.bP0)], Fe.prototype, "btnClose", void 0),
        (0,
        n.Cg)([(0,
        L.nF)(500)], Fe.prototype, "onClickTryAgain", null),
        (0,
        n.Cg)([(0,
        L.nF)(500)], Fe.prototype, "onClickQuit", null),
        (0,
        n.Cg)([(0,
        L.nF)(500)], Fe.prototype, "clickClose", null),
        Fe = (0,
        n.Cg)([Ge("Monster")], Fe),
        window.cc._RF.pop();
        var Ue = i(84814)
          , He = i(86704);
        const {ccclass: qe, property: Qe} = r.P4R;
        window.cc._RF.push({}, "bfa8dn9zHxMgrXffxNiGEIk", "QuitConfirm", void 0);
        let ze = class extends C.A {
            constructor() {
                super(...arguments),
                this.isGameScene = !1,
                this.quitCallBack = null
            }
            beforeOpen() {
                this.isGameScene = y.q.ui.currentSceneName === T.P.GameScene,
                this.isGameScene && y.q.event.emit(Me.E.CANCEL_USER_INACTIVE_COUNTDOWN)
            }
            onOpen(t) {
                this.quitType = t && t.quitType || R.z.BACK_LANDING,
                this.quitCallBack = t && t.quitCallBack,
                this.txtTips.string = (0,
                c.wb)("text_quit_tips"),
                this.isGameScene && (0,
                Oe.ad)(We.qo.GAME_PAGE, We.W1.LEAVE_PAGE_POPUP, {
                    play_score: this.gameModel.score,
                    difficulty: this.blockGroupModel.difficultyMode
                })
            }
            onClickQuit() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    switch (this.isGameScene && (0,
                    Oe.nx)(We.qo.GAME_PAGE, We.vf.ACTION_BUTTON, We.W1.LEAVE_PAGE_POPUP, {
                        play_score: this.gameModel.score,
                        difficulty: this.blockGroupModel.difficultyMode,
                        action_button_type: "quit"
                    }),
                    this.quitCallBack && (yield this.quitCallBack()),
                    this.quitType) {
                    case R.z.BACK_LANDING:
                        yield this.backToLanding();
                        break;
                    case R.z.REFRESH_GAME:
                        window.location.reload();
                        break;
                    case R.z.CLOSE_SELF:
                        this.close();
                        break;
                    default:
                        yield(0,
                        u.a3)()
                    }
                })
            }
            onClickContinue() {
                this.isGameScene && (y.q.event.emit(Me.E.RESTART_USER_INACTIVE_COUNTDOWN),
                (0,
                Oe.nx)(We.qo.GAME_PAGE, We.vf.ACTION_BUTTON, We.W1.LEAVE_PAGE_POPUP, {
                    play_score: this.gameModel.score,
                    difficulty: this.blockGroupModel.difficultyMode,
                    action_button_type: "continue"
                })),
                this.close()
            }
            onClickClose() {
                this.isGameScene && (y.q.event.emit(Me.E.RESTART_USER_INACTIVE_COUNTDOWN),
                (0,
                Oe.nx)(We.qo.GAME_PAGE, We.vf.ACTION_BUTTON, We.W1.LEAVE_PAGE_POPUP, {
                    play_score: this.gameModel.score,
                    difficulty: this.blockGroupModel.difficultyMode,
                    action_button_type: "close_btn"
                })),
                this.close()
            }
            back() {
                this.isGameScene && (y.q.event.emit(Me.E.RESTART_USER_INACTIVE_COUNTDOWN),
                (0,
                Oe.nx)(We.qo.GAME_PAGE, We.vf.ACTION_BUTTON, We.W1.LEAVE_PAGE_POPUP, {
                    action_button_type: "back_btn"
                })),
                this.close()
            }
            backToLanding() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    yield y.q.ui.runScene({
                        sceneName: T.P.LandingScene
                    })
                })
            }
            onDestroy() {}
            onLoad() {}
        }
        ;
        (0,
        n.Cg)([Qe(Ae)], ze.prototype, "txtTips", void 0),
        (0,
        n.Cg)([(0,
        L.KA)(He.u)], ze.prototype, "gameModel", void 0),
        (0,
        n.Cg)([(0,
        L.KA)(Ue.A)], ze.prototype, "blockGroupModel", void 0),
        ze = (0,
        n.Cg)([qe("QuitConfirm")], ze),
        window.cc._RF.pop(),
        i(30671),
        i(88584),
        i(54520);
        const {ccclass: Je, property: Ke} = r.P4R;
        (0,
        r.gpy)(vt._C),
        window.cc._RF.push({}, "ee096VIHo9JyLZm0ej8eSHv", "SlotEventClock", void 0);
        let je = class extends r.uAl {
            constructor() {
                super(...arguments),
                this.slotEvent = []
            }
            onLoad() {
                this.schedule(this.checkSlotEnd, 1)
            }
            checkSlotEnd() {
                this.slotEvent = this.slotEvent.filter(t => !!(0,
                mt.jw)(t) || (y.q.event.emit(vt._Z[t]),
                !1)),
                0 === this.slotEvent.length && this.unschedule(this.checkSlotEnd)
            }
            onDestroy() {
                this.unschedule(this.checkSlotEnd)
            }
        }
        ;
        (0,
        n.Cg)([Ke({
            type: vt._C,
            tooltip: "需要监听结束的 slot 类型, main slot 一般没有结束时间"
        })], je.prototype, "slotEvent", void 0),
        je = (0,
        n.Cg)([Je("SlotEventClock")], je),
        window.cc._RF.pop();
        var Ze = i(22074)
          , Xe = i(91310)
          , Ye = i(67860);
        const {ccclass: $e, property: ti} = r.P4R;
        window.cc._RF.push({}, "7fda9sGP+dMS6kpSgIJk5g8", "CoinBar", void 0);
        let ei = class extends X.eU {
            onLoad() {
                if (this.updateCoinNum(),
                y.q.event.on(Ze.Q.GAME_UPDATE_COIN_NUM, this.updateCoinNum, this),
                y.q.event.on((0,
                kt.aR)() ? O.H.IOS_VIEW_WILL_REAPPEAR : O.H.VIEW_WILL_REAPPEAR, this.updateUserInfo, this),
                "on" !== yt.i.activitySetting.text_BVGC) {
                    this.btnAdd && (this.btnAdd.active = !1);
                    const t = this.textCoin.node.position;
                    this.textCoin.node.setPosition(new r.eBl(20,t.y))
                }
            }
            updateUserInfo() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    0 === (yield(0,
                    v.oy)()).code && this.updateCoinNum()
                })
            }
            updateCoinNum() {
                const t = yt.i.user;
                this.textCoin && (this.textCoin.string = "".concat(t.userCoins))
            }
            onClickAddCoin() {
                Ye.A.showBVGC({
                    project: gt.A.gameName,
                    appid: gt.A.appId,
                    entryPoint: Xe.Q.COIN_BAR,
                    url: yt.i.activitySetting.url_bvgc || "",
                    switch: "on" === yt.i.activitySetting.text_BVGC,
                    userInfo: {
                        userid: yt.i.user.userid,
                        username: yt.i.user.username
                    }
                })
            }
            onDestroy() {
                y.q.event.targetOff(this)
            }
        }
        ;
        (0,
        n.Cg)([ti(r.JU7)], ei.prototype, "textCoin", void 0),
        (0,
        n.Cg)([ti(r.bP0)], ei.prototype, "btnAdd", void 0),
        ei = (0,
        n.Cg)([$e("CoinBar")], ei),
        window.cc._RF.pop();
        const {ccclass: ii} = r.P4R;
        window.cc._RF.push({}, "a21abuaKNFIkZkSo20PSPOs", "TransitionMask", void 0);
        let oi = class extends r.uAl {
            start() {
                const t = this.getComponent(r.kxk).customMaterial.passes[0]
                  , e = t.getHandle("progress");
                (0,
                r.QxW)(this.node).to(1, {}, {
                    onUpdate: (i, o) => {
                        t.setUniform(e, o)
                    }
                    ,
                    onComplete: () => {
                        this.node.destroy()
                    }
                }).start()
            }
        }
        ;
        oi = (0,
        n.Cg)([ii("TransitionMask")], oi),
        window.cc._RF.pop(),
        i(32503),
        i(75913),
        i(42386),
        i(14231);
        const {ccclass: ni, property: si} = r.P4R;
        window.cc._RF.push({}, "f7e135W2tVKmKma/f2KwO3N", "MultipleDeviceConfirm", void 0);
        let ri = class extends C.A {
            onOpen(t) {
                t && (this.quitType = t.quitType || R.z.CLOSE_SELF,
                t.onQuit && (this.onQuit = t.onQuit),
                t.onContinue ? this.onContinue = t.onContinue : this.btnYes.active = !1)
            }
            onClickYes() {
                this.onContinue ? (console.log("MultipleDeviceConfirm onClick Continue"),
                this.onContinue(),
                this.close()) : this.onClickNo()
            }
            onClickNo() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    switch (this.onQuit && (yield this.onQuit()),
                    this.quitType) {
                    case R.z.CLOSE_SELF:
                        yield this.close();
                        break;
                    case R.z.QUIT_GAME:
                        yield(0,
                        xe.a3)();
                        break;
                    case R.z.REFRESH_GAME:
                        window.location.reload();
                        break;
                    case R.z.BACK_LANDING:
                        yield y.q.ui.runScene({
                            sceneName: T.P.LandingScene
                        });
                        break;
                    case R.z.BACK_ADVENTURE_LANDING:
                        yield y.q.ui.runScene({
                            sceneName: T.P.AdventureLandingScene
                        })
                    }
                })
            }
        }
        ;
        (0,
        n.Cg)([si(r.bP0)], ri.prototype, "btnNo", void 0),
        (0,
        n.Cg)([si(r.bP0)], ri.prototype, "btnYes", void 0),
        ri = (0,
        n.Cg)([ni("MultipleDeviceConfirm")], ri),
        window.cc._RF.pop();
        const {ccclass: ai, property: ci} = r.P4R;
        window.cc._RF.push({}, "57264BK7SVKCbnPwJuosPKp", "MultipleDeviceKickedOut", void 0);
        let di = class extends C.A {
            onOpen(t) {
                t && (this.quitType = t.quitType || R.z.CLOSE_SELF,
                t.onQuit && (this.onQuit = t.onQuit))
            }
            onClickOK() {
                return (0,
                n.sH)(this, void 0, void 0, function*() {
                    switch (this.onQuit && (yield this.onQuit()),
                    this.quitType) {
                    case R.z.CLOSE_SELF:
                        yield this.close();
                        break;
                    case R.z.QUIT_GAME:
                        yield(0,
                        xe.a3)();
                        break;
                    case R.z.REFRESH_GAME:
                        window.location.reload();
                        break;
                    case R.z.BACK_LANDING:
                        yield y.q.ui.runScene({
                            sceneName: T.P.LandingScene
                        });
                        break;
                    case R.z.BACK_ADVENTURE_LANDING:
                        yield y.q.ui.runScene({
                            sceneName: T.P.AdventureLandingScene
                        })
                    }
                })
            }
        }
        ;
        (0,
        n.Cg)([ci(r.bP0)], di.prototype, "btnOK", void 0),
        di = (0,
        n.Cg)([ai("MultipleDeviceKickedOut")], di),
        window.cc._RF.pop()
    },
    82179(t, e, i) {
        var o;
        i.d(e, {
            O: function() {
                return o
            }
        }),
        function(t) {
            t.image_claimed_milestone = "texture/static/static_milestone_single/image_claimed_milestone",
            t.image_locked_milestone = "texture/static/static_milestone_single/image_locked_milestone",
            t.image_new_milstone = "texture/static/static_milestone_single/image_new_milstone",
            t.image_unlock_milestone = "texture/static/static_milestone_single/image_unlock_milestone"
        }(o || (o = {}))
    },
    84814(t, e, i) {
        i(44114);
        var o = i(31635)
          , n = i(78248)
          , s = i(37878);
        const {ccclass: r} = n.P4R;
        window.cc._RF.push({}, "6653bDIuZpLAaJw9Cq+U/AB", "BlockGroupModel", void 0);
        let a = class extends s.A {
        }
        ;
        a = (0,
        o.Cg)([r("BlockGroupModel")], a),
        e.A = a,
        window.cc._RF.pop()
    },
    85300(e, s) {
        var a = L;
        !function(t) {
            for (var e = L, i = t(); ; )
                try {
                    if (374317 == -parseInt(e(355, "Qif#")) / 1 * (-parseInt(e(375, "K63s")) / 2) + -parseInt(e(350, "x3j!")) / 3 + -parseInt(e(329, "%HyK")) / 4 * (parseInt(e(515, "sErD")) / 5) + parseInt(e(384, "VNne")) / 6 + -parseInt(e(341, "%HyK")) / 7 * (-parseInt(e(310, "V!BO")) / 8) + parseInt(e(338, "FS)O")) / 9 + -parseInt(e(353, "1UPd")) / 10)
                        break;
                    i.push(i.shift())
                } catch (t) {
                    i.push(i.shift())
                }
        }(w);
        var c = {
            m: 0,
            c: 0,
            h: 0,
            t: 0,
            ts: 0
        };
        c[a(430, "Q)Bk")] = 1;
        var p, g = c, f = !1, y = !1, _ = !1, C = 0, S = 0;
        function w() {
            var t = ["wHRcLq", "W4L9aSkmWRLXubNcMa", "uwFdVKFdKq", "AgtdNCkkW5q", "cvpdJINcOCkOW5e", "W5LLgCkaWRLIyq", "WPxdIbD8yG", "W5DoCaVdOa", "WPhdJJNcTG7cVKLei8o0zamh", "ghCNow0", "cCkLrZ/cQa", "W4tcHw/dGde", "vKZdSq", "kmkHW5VcRSkRhd9jW5PwdKpcKCoRWRVcI8kJ", "pmkPvIHppCk0ECovW7m", "WR7dHCo8WQJcNq", "p8kHW54", "jCocAe8KBtK", "WOddMaVcJ8oE", "xa3cKG", "w8kHWOlcUSk9", "W5KjWOxcO8osW75q", "DfxdNCkMW4pcQq", "WPmSW6PYEutdI0mf", "k8o/WPBdLmkT", "WP4gWQdcTfi", "WPddIqVcIG", "wbRcJ0Xn", "CfqHW5pdO8khWPRdGSoQW5dcNa", "WRZcItjOwa", "WR7cMa9/WOP8F8opWOVcQ8kHWRddHhxdVd12W7BdSW", "igZdU8oPWR4", "sW3cL3jeiKKtDq7cPKiPFvjaWQ0", "WPZcVcPcWQW", "W6TyhSkNWQy", "agWhl38", "W5lcSSogWQFcUSoNlwK", "mHJdTmkKW40", "oCkurrVcNq", "lmkpWQT1WOm", "WP0DWRhcRKG", "WRVdQCoMAHW", "WRiExmoLoG", "WO3cQbzuWPa", "sCk3WRjCW7q", "WPZcTSoFWOTUW6pdHSoTW6z4W5uWEa", "W50NdCk6FG", "wmosW4SjWP/dGmodWPbieq", "WOFdQmoBWQtcPa", "emoxzxiN", "ASk0W6OSWQK", "cLpdGWVcNa", "hWZcL8oLWRtcLve", "WOOyBdyM", "uCotW4/cKmoR", "WOxdRSod", "W65fb8kusxdcQ8ojW6Svy8kUtW", "WRGvW5rty1FdKNCze8klWQOEWQW", "EIZcSxn6", "u8ouW49qWPRdTCovWPzE", "WROZpmosWQO", "WReBW6fXvq", "WQBdVWpcLCoe", "z8k5WQf4W44", "WO1UW6LaDa", "WQdcTYf8Aa", "WQpcJWT3WPv3", "g8oXWONdH8kj", "nrdcM8o8WPJdUYNcN8oawJpdL8kM", "ndNcICozWQO", "t8oRW5pcLSoV", "W73cGX/dIYOqWPTAFCo2W5VdLgi", "WOVdOwNcNvS", "ua/dNmoVWOpdOCkoWQa", "AxxdHSkIW44", "WPunsI87WOVcKSkvBG", "WQZdOKuol8k7oSoYC8kiemktWOFdH8kwAa", "WRCGWOBcReNdUSomw8of", "WPpdTqbzrG", "j0Cko0O", "W5JdOCkgW7Oy", "WPVdIIdcUXlcHq", "a1xdIYlcVSkcW5nlWPbvWPTSWRGB", "WRxdV8k9nSoCW4JdGCo/n8obggW", "WOZdQaGuCmogWR9zW5xdUHvcymoY", "WPRdVmozsdi", "cblcN8oUWQNcH2FdJKDhWPNcMmor", "xaZcM2rIig8CBq", "Ace/WQGK", "zmkAWRjFW50KWO4", "WPRdOulcMfm", "qfBdVgddUgJcJCk4ofddOhlcGSkj", "mSkuWO5wWQC", "uGRcMxtcSmkuW498WRjV", "W43dTmkdW5G9WR7cUCogW454", "BKJdSu/dTq", "caxcHSo0", "W6iOWQdcJSoiW754WR7cPSoca0uxWQW", "WQtcGJPGBq", "lf3dPmoAWP0", "smk0W5GGWQP2dCoNrmokWP8giq", "W5NdR8kpW4SEWRlcLmoSW45/W5eQAsqdW4G", "mCkqWP7dOSkoW4zOrSkCzGOucq", "CeRcV8kTqCkqxSoZW4jX", "qSkgWRyNFq", "hqlcJq", "W7eycmkMyW", "qfldTgVdSxNcSa", "wK7cRmkWBa", "WOjqW5NcOSopW4fLWP7cIW", "bLqXzSob", "k8k3W5BcJ8k6hbjCW7PtnvBcMSoHWRlcNa", "WQtdMctcVI8", "W4P8cmkSWOq", "cmkzsZdcT8oKW70", "de7dQrVcQq", "smowW5VcKmoQ", "iK0fbhO", "W5pcSmkbW7hcO8oXmgiVWRS", "tSo0W5JdTSk3u8oCv8kP", "e1JdHcG", "WQpdOW3cNHy", "uSoVW5NdPq", "u8o1W4tdOq", "WPddGaBcImonW5ddVSkRW47dMgxcOmokoq", "W6SadSkDvW", "BeBdMxBdPG", "WQldGJq", "x8kFWR1yW50", "WQtdGG58vW", "WPulBHaS", "WRddVSkYiG", "WPXqW6L3r8kEWRfZlCk1", "WPNdNZhcVq", "WOldR8oqWQBcSCoPgq", "cdBdMmkxW44", "WQq+WOdcVuJdUSoS", "WRhdNYPVtWP4", "fq7cMSoLWQlcRM4", "W5G1WONcRmon", "W7ytWRVcQmox", "i8kTCHhcJG", "F8oEW5ZdU8kz", "WOS7sCoDW6CIcsJcUaRcH8kfWRi", "rSkoWPXtW6y", "yNxcJmkDyG", "BmopW5W", "WRKsrG", "gvGt", "WQijFWW9", "WOBdMGS", "WOm4BcCD", "BSkvWRPw", "WPeRWO3cGeS", "p8kGW5FcUmknhHLgW4i", "W70dma", "yCoiW4RcU8oDWPS6v8kYzWWwdtO", "dfeiumo4W4tcLW", "WQxdLsTFqH0", "WORdLCoHWQhcIG", "yLlcPxhdIhFdUCo9WOK", "taFcMNfl", "WRRdHwiSba", "CvNcUSkL", "WP/dRSobWQdcOCovc3eNWQS", "WPzOW7v8ua", "sIlcVhnb", "WOqlusiYWONcQCkwCmollLSjW6H+xCoaAsRcPmo1", "eXdcM8oU", "WP7dS8oy", "AYVcT19e", "WPddTJaSW4O", "W7uDWQJcVSof", "WQtdQSojvbG", "i8k1WO5dWOC", "r8k6WPr5W4K", "A8oVW6ZcKmoB", "p8kRtYbr", "W45MbCkgWR97vGNcHa", "W4HShCkkWQfZFaNcHdxcMCkmWP9ysJj+oq0", "thxdK03dSa", "W7eYWONcR8ow", "jhJdHIFcOq", "WOLsW53cRCotW6HrWPJcRW", "iSoNWQNdG8kqWQP4", "W4HYvq", "WR/dNu/cKh8", "WR3dTvG4lCkVhCoYz8kvk8kcWOpdKCk7E8o/lwO6AG", "twFdRuldHW", "zK/cV2BdJ2BdRSoP", "WPbJW6vxwq", "c8oPWQhdS8kF", "WOtdU8omWQ3cJq", "W4ZdRSklW4W2WRlcNSo3W4PPW4q7", "WOtdMdDAsWW", "z8krWOSH", "b2xdNSohWQG", "W5LLCt3dOG", "WQtdVdf5EG", "kXBdJ8k8W6e", "yKfyet7dVgeqm8kOWOaTBmkZW7S", "cCkhsZhcVSo1W7zOqCokDapcJuxcVu8dmf/cLmom", "W7m/WQ7cOmon", "eSkYFt1l", "WOLvW5xdS8koW6f5WRJcTSo9bq", "WQuGWOdcVehdQ8o8rCojcq", "uCo+W5tdPG", "C8orW6pdGCk8", "W5RdImol", "z8kyWOWMAa", "he7dGG", "W71mja", "mqfRWPpcVCky", "pvScF8of", "WO5vW5LHAG", "smkUW5WG", "WPXqW6L3r8kEWRT8kmkTW5bFvMRcPSofgG", "r3VcL8kSqG", "W4KaWPJcLmozW7T9WONcSmohpKufWRZcUCou", "EqNcU3XW", "WOTqW6W", "FYq7WQuupM1pD8oVW5PZW7zu", "EuZdL1VdQW", "ig3dQCoSWRO", "W4SGkSkEsq", "WPq3W614F0BdJee", "WRrgW4DNtW", "je8f", "CvxdTMZdPW", "aLGvxCo5W5q", "WQBdGJ7cHmog", "pKClC8o9", "WOurwsGYWONcN8kNEmoxpKCjW6K", "CSoMWOFcRSk/mHfAW74", "dbxcHSojWOK", "g1iuvSo+W4pcU1ZdI8kL", "DCoeW6pcPmos", "nfmn", "ymk7WRbIW7q", "eSo4WQtdO8kV", "WRpdKsXl", "E07cRMddN0ZdPG", "WRejF8oLkG", "W4VdMCofBwZdRSkNsG", "WO7cMGbRBa", "WQC7aCoxWOC", "cLtdJ8oLWPFdHCk4WO19WQVcRmooW5nL", "W4hdLfFcMSkBW4NcRSkdWPldKtm", "uCkPW6m6WQe", "lSkdW7/cQmkd", "sSkXWOi", "WRtdNdfpqb1i", "jvGrgq", "W7/dH8kIW64k", "WPRdHGpcG8osW7RdVa", "ruxcPe7dQG", "W4OeWP7cTCoz", "x8kPW5ONWRW", "WRa1rSoZfq", "WOHsW5/dVSovW7LWWO/cJSo8", "WRhdTWGNW6i+W43cP8o7W53cGCoLW4qqW65vpW", "WQaRWP/cLeW", "te7dUga", "DsFcOw5a", "vbqkWO8K", "auJdMSo7WOpcMG", "WQ4vrW", "wmoPW4tdSCk4w8oWqmkGW7xcQc3dGHWLn8kb", "B1xdM8k/W57dTa", "WQNcGsjvzSo/Fmo6W6ejW5VdLeddQMJdJJq", "h8o6sey+", "WPyXW71Su0RdHMeveCkFWR8DWR1FW5W", "WP7dQsXCsa", "C8k6W7tcLColW6SvzCo2WR3cPvXo", "W7GqlSk9xa", "f8kgWRX/WOa", "BCosW4lcSSotWPa", "WRCZWP3cSeJdR8oytG", "WRNdGda0A8ow", "W4ZcQNpdSWBcJf1mpmoDW7bpWOFcGCkMWQa", "WPFdNWSwuW", "WQ/cKqT1WPjTyW", "W7avWR7cOmoq", "sH7cKNO", "ee/dHtJcTSktW45VWPO", "WP3dHdyuW4a", "WQSvqCo2fI7dTSoGW6Kk", "uvxdRmkHW4S", "hvNdLSo/", "oSkHW53cVSkJdqvyW5m", "cSkEtWxcKW", "trRcKhXjfxeSW4a6", "WRNdHXlcJ8oE", "W6hdGSktW7iR", "WO7dVvSAiq", "qf/dSwi", "sHFcN3HeiM4MDHFcJuSIAG", "WO3cJCkqpJlcTmo7ACo+W5NcTSk9lW", "WQhdLflcM3va", "WRFdPfOLia", "FwBcJK3dJa", "WOm5W6X4FW", "WRFdJsuYy8oxWQTFW5/dVGnpDSo1", "W7z0Bq3dNq", "WQJcNYjuB8oUzW", "E8kXWOC9sW", "WP9gW6rwvSkEWPzPcmkOW6TkxwdcR8os", "WP/dQCorWQ0", "WR3dPSkecCoe", "zLlcQ2VdLgxdR8o/WOhdI3ySWOS", "WQpdPCkW", "AmkmW6eIWRm", "WP3dUSoAW4bPWQFdGCouWPm", "WO/dNYfTBW", "WQSevmoqcW", "W4RdGSooy2W", "WONdHSosWPxcOG", "WQyYe8oB", "WORdJCodsG8", "WOldPZXzqa", "WQexuCoHcW", "WPxdHZxcVrRcHf9LiSo1BGyhWRW", "WOddVqtcL8oc", "nSkZWPPqWRW", "WQ/dJxW9oq", "W7GBn8kdCa", "W55Obmke", "WRZdTqqT", "y8oHW73cJmow", "W54eWPJcPW", "e1JdNHJcSmkkW5jWWOPu", "WPddG8o/BYK", "W6a0jmk9AW", "WPZdQLGkiq", "W5qkWPS", "umobW4ZcM8o+", "WOVdTGykW5y", "vmo0W5O", "WOpdPh7cVh0", "eSkEW77cGSk4dqX6W5nlm0FcJmo7", "drFdVCkwW58", "WOpdNtG", "iHrX", "WQlcKHu", "WPfqW6L0sCkv", "WRddHIOrya", "jM/dRJZcNW", "WOFdJr/cKG", "yJRcP3Ta", "WP1kW6f9r8kEWPXjk8k0W7Twxx0", "fLNdJZBcQa", "cmkGBZ3cSG", "W53dO8khW5mSWR7cTCoEW4jIW4qwCdiwW5/cKYVdOa", "dfJdHcVcRCkp", "DmkzWQXRW4G", "WQ3dLulcTMXbW4v5AmooW4ldPunNamkk"];
            return (w = function() {
                return t
            }
            )()
        }
        function b() {
            for (var t = a, e = t(529, "GMvA")[t(323, "i#Mp")]("|"), i = 0; ; ) {
                switch (e[i++]) {
                case "0":
                    g.c = 0;
                    continue;
                case "1":
                    g.h = 0;
                    continue;
                case "2":
                    g.m = 0;
                    continue;
                case "3":
                    g.ts = 0;
                    continue;
                case "4":
                    g.t = 0;
                    continue;
                case "5":
                    y = !1;
                    continue
                }
                break
            }
        }
        function P(t, e, i, o) {
            var n = a
              , s = {};
            return s[n(292, "GVAe")] = function(t, e) {
                return t + e
            }
            ,
            s[n(421, "fvcJ")](Math[n(429, "FS)O")](t - i), Math[n(387, "UUAi")](e - o)) > 10
        }
        function E(t) {
            var e = a;
            C = t[e(503, "nO$H")][0][e(533, "zADX")],
            S = t[e(438, "VNne")][0][e(396, "GVAe")]
        }
        function R(t) {
            var e = a;
            ({
                DpGJh: function(t, e, i, o, n) {
                    return t(e, i, o, n)
                }
            })[e(431, "6(Rp")](P, C, S, t[e(406, "GMvA")][0][e(299, "7QQb")], t[e(584, "e4fW")][0][e(563, "dPA8")]) && (y = !0)
        }
        function A(t) {
            var e = "pLy1"
              , i = a;
            y || {
                oqqQl: function(t, e, i, o, n) {
                    return t(e, i, o, n)
                }
            }[i(380, e)](P, C, S, t[i(603, "DQhq")][0][i(586, e)], t[i(514, "6(Rp")][0][i(466, "@LT!")]) ? g.m++ : g.c++,
            y = !1
        }
        function T() {
            var t = a
              , e = {};
            e[t(455, "i#Mp")] = function(t, e) {
                return t > e
            }
            ,
            e[t(470, "N!Q!")] = t(290, "DQhq");
            var i = e;
            return i[t(397, "K63s")](navigator[t(369, "qdEP")][t(420, "UUAi")](i[t(478, "Qif#")]), -1)
        }
        function W() {
            var t = "GVAe"
              , e = a
              , o = {
                UjYbl: function(t) {
                    return t()
                },
                iyJGU: function(t, e) {
                    return t === e
                },
                liogm: e(452, "qdEP"),
                KtTcj: function(t, e) {
                    return t + e
                },
                dPMbO: function(t, e) {
                    return t !== e
                },
                KEYmc: e(272, "K63s"),
                eATaH: e(553, "Z8[X"),
                DElkx: function(t) {
                    return t()
                },
                cUMhk: e(525, "LwIY")
            };
            if (!_ && window[e(414, "Tv$2")] && window[e(449, "6(Rp")])
                if (_ = !0,
                o[e(464, "K63s")](T))
                    if (o[e(524, "FS)O")](e(543, ")&mI"), e(572, t))) {
                        if (h = i,
                        j)
                            return;
                        k = !0,
                        o[e(512, "GMvA")](l)
                    } else
                        window[e(393, "sErD")](o[e(277, t)], function() {
                            f && g.h++
                        });
                else
                    window[e(376, "FyR3")](function() {
                        var t = e
                          , i = {
                            IQGgJ: function(t, e) {
                                return o[L(585, "Z4bL")](t, e)
                            }
                        };
                        o[t(531, "sErD")](o[t(274, "qdEP")], t(606, "]^Dg")) ? window[t(469, "]^Dg")](o[t(433, "6(Rp")], function() {
                            var e = t;
                            o[e(266, "X7Vk")](e(600, "i#Mp"), o[e(330, "N5)D")]) ? f && g.h++ : this[e(467, "Z4bL")] = i[e(505, "Qif#")](e(547, "Qif#"), this[e(282, "Tlgy")])
                        }) : this[t(294, "N!Q!")] = this[t(492, "Qif#")][t(491, "ta[C")](0, d)
                    })
        }
        function I() {
            for (var t = "0ddb", e = "Tv$2", i = a, o = {
                oFDHk: i(482, "ttc#"),
                vzcVD: i(471, t),
                JdGto: function(t) {
                    return t()
                },
                kqXOt: i(460, "Mg$I"),
                eJEko: function(t) {
                    return t()
                }
            }, n = o[i(582, t)][i(399, "ttc#")]("|"), s = 0; ; ) {
                switch (n[s++]) {
                case "0":
                    if (f)
                        return;
                    continue;
                case "1":
                    p = Date[i(428, "VNne")]();
                    continue;
                case "2":
                    window[i(281, "1UPd")](o[i(361, "ttc#")], A, !0);
                    continue;
                case "3":
                    o[i(508, e)](b);
                    continue;
                case "4":
                    window[i(588, e)](i(446, "N5)D"), E, !0);
                    continue;
                case "5":
                    window[i(561, "K(sj")](o[i(590, "csq7")], R, !0);
                    continue;
                case "6":
                    f = !0;
                    continue;
                case "7":
                    o[i(448, "Tlgy")](W);
                    continue
                }
                break
            }
        }
        function O() {
            var t = "dPA8"
              , e = a
              , i = {};
            i[e(443, "Tlgy")] = e(401, "]kAT"),
            i[e(516, "UUAi")] = function(t, e) {
                return t - e
            }
            ,
            i[e(316, "Mg$I")] = e(517, "Q)Bk"),
            i[e(315, t)] = e(507, "Z8[X");
            for (var o = i, n = e(594, "FyR3")[e(300, "GMvA")]("|"), s = 0; ; ) {
                switch (n[s++]) {
                case "0":
                    f = !1;
                    continue;
                case "1":
                    window[e(312, t)](o[e(539, "Yxil")], R, !0);
                    continue;
                case "2":
                    g.t = o[e(395, "Mg$I")](Date[e(269, "dPA8")](), p);
                    continue;
                case "3":
                    window[e(461, "Mg$I")](o[e(317, "ttc#")], E, !0);
                    continue;
                case "4":
                    window[e(278, "FyR3")](o[e(535, "FyR3")], A, !0);
                    continue
                }
                break
            }
        }
        function L(t, e) {
            var i = w();
            return L = function(e, o) {
                var n = i[e -= 258];
                void 0 === L.wGmGdt && (L.kwJPTw = function(t, e) {
                    var i, o, n = [], s = 0, r = "";
                    for (t = function(t) {
                        for (var e, i, o = "", n = "", s = 0, r = 0; i = t.charAt(r++); ~i && (e = s % 4 ? 64 * e + i : i,
                        s++ % 4) ? o += String.fromCharCode(255 & e >> (-2 * s & 6)) : 0)
                            i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(i);
                        for (var a = 0, c = o.length; a < c; a++)
                            n += "%" + ("00" + o.charCodeAt(a).toString(16)).slice(-2);
                        return decodeURIComponent(n)
                    }(t),
                    o = 0; o < 256; o++)
                        n[o] = o;
                    for (o = 0; o < 256; o++)
                        s = (s + n[o] + e.charCodeAt(o % e.length)) % 256,
                        i = n[o],
                        n[o] = n[s],
                        n[s] = i;
                    o = 0,
                    s = 0;
                    for (var a = 0; a < t.length; a++)
                        s = (s + n[o = (o + 1) % 256]) % 256,
                        i = n[o],
                        n[o] = n[s],
                        n[s] = i,
                        r += String.fromCharCode(t.charCodeAt(a) ^ n[(n[o] + n[s]) % 256]);
                    return r
                }
                ,
                t = arguments,
                L.wGmGdt = !0);
                var s = e + i[0]
                  , r = t[s];
                return r ? n = r : (void 0 === L.IdtHUx && (L.IdtHUx = !0),
                n = L.kwJPTw(n, o),
                t[s] = n),
                n
            }
            ,
            L(t, e)
        }
        function N(t) {
            var e = "nO$H"
              , s = a
              , c = {
                ZzIaw: function(t, e) {
                    return t === e
                },
                mOfXQ: s(332, "Yxil"),
                qzlkh: function(t, e) {
                    return t(e)
                },
                wrvTc: s(591, "0ddb"),
                oKNCo: function(t, e) {
                    return t !== e
                },
                KzJiC: s(453, "F5&$"),
                hiJgE: s(567, "F5&$"),
                hckyj: function(t, e) {
                    return t !== e
                },
                HXPDW: s(481, "X7Vk"),
                cqRSn: function(t, e) {
                    return t(e)
                },
                tmecW: function(t, e, i) {
                    return t(e, i)
                }
            };
            return new Promise(function(a, d) {
                var u = s
                  , h = {
                    PvEjS: c[u(309, "Tlgy")],
                    EEqnF: function(t, e) {
                        return t(e)
                    },
                    ozxnD: function(t, e, i) {
                        return t(e, i)
                    },
                    VvCuG: function(t, e) {
                        return c[u(462, "N!Q!")](t, e)
                    },
                    CQvPp: c[u(426, "Vz5(")],
                    pMZTD: c[u(342, "o4MK")],
                    sLiST: function(t, e) {
                        return t(e)
                    }
                };
                if (c[u(581, "]^Dg")](c[u(423, "GVAe")], c[u(546, e)])) {
                    var p = {};
                    p[u(534, "ttc#")] = g,
                    p[u(511, "Q)Bk")] = i,
                    h[u(551, "pLy1")](h[u(501, "qdEP")], p, function(t) {
                        k(t)
                    })
                } else {
                    if (!window[u(573, "Tlgy")] || !window[u(295, "sErD")])
                        return c[u(407, "[c[#")](d, "");
                    var g = window[u(568, "FS)O")](function() {
                        var t = u;
                        c[t(349, "@LT!")](c[t(520, "Vz5(")], t(386, "ta[C")) ? c[t(597, "LwIY")](d, "") : (h = g[t(373, "N!Q!")][0][t(439, "Q)Bk")],
                        i = p[t(578, "qdEP")][0][t(418, ")&mI")])
                    }, 1e4);
                    c[u(370, e)](B, t, 3)[u(599, "o4MK")](function(t) {
                        var e = u
                          , i = {
                            Rkkbx: function(t, e) {
                                return h[L(424, "]kAT")](t, e)
                            },
                            XZulA: function(t, e, i) {
                                return h[L(474, "N5)D")](t, e, i)
                            }
                        };
                        if (h[e(319, "X7Vk")](h[e(506, "[c[#")], h[e(427, ")uOB")]))
                            h[e(346, "Tv$2")](clearTimeout, g),
                            h[e(480, "zADX")](a, t[e(611, "fvcJ")][e(494, "V!BO")]);
                        else {
                            var s = {
                                c: "Vz5("
                            };
                            if (!l[e(296, "d3@5")] || !c[e(542, "F5&$")])
                                return i[e(510, "N!Q!")](n, "");
                            var c = o[e(612, "K63s")](function() {
                                i[e(410, s.c)](c, "")
                            }, 1e4);
                            i[e(613, "i#Mp")](q, r, 3)[e(589, "N5)D")](function(t) {
                                var i = e;
                                c(c),
                                v(t[i(608, "Mg$I")][i(440, "zADX")])
                            })
                        }
                    })
                }
            }
            )
        }
        function B(t, e) {
            var i = a
              , s = {};
            s[i(489, "]kAT")] = i(368, "UUAi"),
            s[i(513, "Q)Bk")] = function(t, e) {
                return t !== e
            }
            ,
            s[i(324, "FS)O")] = i(457, "Vz5("),
            s[i(336, "VNne")] = i(456, "%HyK");
            var r = s;
            return new Promise(function(s) {
                var a = i
                  , c = {
                    NDyNq: function(t, e) {
                        return t(e)
                    },
                    srVVy: r[a(291, "ttc#")]
                };
                if (r[a(576, "]^Dg")](r[a(333, "K63s")], r[a(521, "@LT!")]))
                    window[a(385, ")uOB")](function() {
                        var i = a
                          , o = {};
                        o[i(378, "UUAi")] = t,
                        o[i(580, "1UPd")] = e,
                        window[i(498, "Tv$2")](c[i(411, "zADX")], o, function(t) {
                            c[i(575, "FyR3")](s, t)
                        })
                    });
                else {
                    var d = {
                        c: 259
                    }
                      , u = {
                        CmiVk: function(t, e) {
                            return t(e)
                        }
                    };
                    s[a(487, ")&mI")](function() {
                        var t = a
                          , e = {};
                        e[t(570, "Qif#")] = n,
                        e[t(560, "e4fW")] = o,
                        m[t(314, "qdEP")](c[t(412, "6(Rp")], e, function(i) {
                            u[t(d.c, "]^Dg")](e, i)
                        })
                    })
                }
            }
            )
        }
        var D = 0;
        function x(t) {
            D = Date[a(260, "fvcJ")]() - t
        }
        var M, G = !1, V = a(302, "]kAT");
        function F(t) {
            M = t,
            G || (G = !0,
            {
                AUtDl: function(t) {
                    return t()
                }
            }[a(325, "dPA8")](Q))
        }
        function U(t) {
            var e = a
              , o = {
                iOGEa: function(t, e, i, o, n) {
                    return t(e, i, o, n)
                },
                UDHkT: function(t, e) {
                    return t === e
                },
                BxOVL: e(271, "e4fW")
            };
            return !!M[e(413, "csq7")](function(s) {
                var r = e
                  , a = {
                    LvWnk: function(t, e, i, n, s) {
                        return o[L(458, "VNne")](t, e, i, n, s)
                    }
                };
                if (!o[r(340, "Tlgy")](o[r(288, "zADX")], r(390, ")uOB")))
                    return o[r(297, "N5)D")](t, s);
                a[r(422, "fvcJ")](i, j, k, l[r(364, "K63s")][0][r(287, "Mg$I")], m[r(528, "Qif#")][0][r(389, "N!Q!")]) && (n = !0)
            })
        }
        function H(t) {
            var e = a
              , i = {};
            i[e(545, "Tlgy")] = function(t, e) {
                return t + e
            }
            ;
            var o = i;
            return {
                "X-CHAPLIN-V": g[e(548, "FS)O")],
                "X-CHAPLIN-T": o[e(322, ")&mI")](g.ts, ""),
                "X-CHAPLIN-L": t[e(279, "K63s")] + ""
            }
        }
        function Q() {
            var e = "K63s"
              , s = "[c[#"
              , r = "x3j!"
              , c = "zADX"
              , d = "1UPd"
              , h = a
              , p = {
                sUcqh: h(383, "FyR3"),
                OxDxy: function(t, e) {
                    return t === e
                },
                uawbh: h(367, "i#Mp"),
                moZtx: function(t, e) {
                    return t > e
                },
                UWdsn: function(t, e) {
                    return t !== e
                },
                vdezq: h(326, "Vz5("),
                YTIlt: h(392, "Q)Bk"),
                jNIeW: h(550, "x3j!"),
                jMwBk: h(404, "]kAT"),
                EaJQm: function(t, e) {
                    return t + e
                },
                CzOJW: h(284, "N!Q!"),
                LiBqc: function(t, e) {
                    return t + e
                },
                ZrJUt: function(t, e) {
                    return t + e
                },
                nAeDy: function(t, e) {
                    return t(e)
                },
                RwpmR: function(t, e) {
                    return t(e)
                },
                RagND: h(343, "Z8[X"),
                LlUNv: function(t, e) {
                    return t - e
                },
                UCAed: function(t, e, i, o, n) {
                    return t(e, i, o, n)
                },
                VydXm: function(t, e) {
                    return t === e
                },
                HYwYp: function(t) {
                    return t()
                },
                XsgIS: h(557, "%HyK"),
                WenKM: h(280, "Vz5("),
                pjkMI: function(t, e) {
                    return t !== e
                },
                oErEy: h(540, "FS)O"),
                MvlAj: h(526, "pLy1"),
                JbaUa: function(t, e) {
                    return t || e
                },
                IYtvf: function(t, e) {
                    return t(e)
                },
                JpRfl: function(t, e) {
                    return t === e
                },
                oEbxF: h(304, "x3j!"),
                RfcJS: h(569, "x3j!"),
                deHSU: h(313, "Qif#"),
                wdHqh: function(t, e) {
                    return t < e
                },
                ULYMk: h(476, "zADX"),
                OUXOg: function(t, e) {
                    return t !== e
                },
                bGfVk: h(347, "pLy1"),
                iKxvA: function(t, e) {
                    return t === e
                },
                aTUbC: h(372, "1UPd"),
                MKxCU: function(t, e) {
                    return t(e)
                }
            }
              , f = window[h(265, "sErD")][h(566, e)][h(477, "ta[C")]
              , y = window[h(366, "e4fW")][h(571, "sErD")][h(609, "F5&$")];
            window[h(379, "fvcJ")][h(442, "0ddb")][h(544, "N!Q!")] = function() {
                var t = h;
                if (!p[t(454, "fvcJ")](p[t(527, "o4MK")], t(484, "fvcJ"))) {
                    this[t(451, "N5)D")] = arguments[1];
                    var e = this[t(467, "Z4bL")][t(536, "GMvA")]("?");
                    return p[t(530, "Yxil")](e, 0) && (p[t(601, c)](t(354, d), p[t(276, "K63s")]) ? this[t(267, "DQhq")] = this[t(298, "sErD")][t(468, d)](0, e) : e[t(483, "GVAe")](p[t(604, "GMvA")], function() {
                        i && j.h++
                    })),
                    0 === this[t(502, "Tv$2")][t(523, "0ddb")]("//") ? p[t(408, "N!Q!")](p[t(307, ")&mI")], p[t(552, "7QQb")]) ? this[t(437, "[c[#")] = p[t(289, "Z4bL")] + this[t(592, "csq7")] : y && e.h++ : p[t(344, "GMvA")](this[t(592, "csq7")][t(286, "K63s")](p[t(345, "Vz5(")]), 0) && (0 === this[t(509, "ttc#")][t(416, "N5)D")]("/") ? this[t(451, "N5)D")] = p[t(381, "Qif#")](location[t(270, "Tv$2")], this[t(492, "Qif#")]) : t(417, "X7Vk") === p[t(562, "e4fW")] ? f.m++ : this[t(451, "N5)D")] = p[t(485, "d3@5")](p[t(504, "N!Q!")](location[t(348, "dPA8")], location[t(559, ")&mI")]), this[t(409, c)])),
                    y[t(459, "d3@5")](this, arguments)
                }
                f.c++
            }
            ,
            window[h(339, "Z8[X")][h(359, ")&mI")][h(402, e)] = function(e) {
                var i = "[c[#"
                  , c = h
                  , d = {
                    nTimc: function(t, e) {
                        return p[L(321, "%HyK")](t, e)
                    },
                    wglFB: function(t, e, i, o, n) {
                        return p[L(499, ")uOB")](t, e, i, o, n)
                    },
                    hJuop: function(t, e) {
                        return p[L(435, ")&mI")](t, e)
                    },
                    jtVrS: function(t) {
                        return p[L(351, "UUAi")](t)
                    },
                    hExsR: p[c(262, "F5&$")],
                    Jouit: p[c(537, "0ddb")]
                };
                if (p[c(607, s)](p[c(285, r)], p[c(377, "N!Q!")])) {
                    var _ = this
                      , C = p[c(473, "@LT!")](e, "{}");
                    if (p[c(554, "zADX")](U, this[c(301, "qdEP")]) && p[c(564, "fvcJ")](typeof C, p[c(587, "ta[C")])) {
                        if (p[c(331, "7QQb")](p[c(495, "Q)Bk")], p[c(479, "Z4bL")]))
                            return d[c(356, r)](y[c(263, "]kAT")](), e);
                        if (p[c(518, "VNne")](navigator[c(436, "sErD")][c(371, "Vz5(")](p[c(403, "DQhq")]), 0)) {
                            if (p[c(264, "1UPd")](p[c(598, "N5)D")], c(328, s)))
                                return this[c(450, "UUAi")](c(493, "Mg$I"), V),
                                f[c(577, "N!Q!")](this, null);
                            p[c(472, "Tv$2")](_, C[c(490, "LwIY")]),
                            p[c(394, "DQhq")](S, w.ts),
                            l = !0
                        }
                        try {
                            var S = JSON[c(538, "fvcJ")](C);
                            g.ts = Date[a(337, "N5)D")]() - D,
                            S[c(365, "csq7")] = g,
                            C = JSON[c(305, "Z8[X")](S)
                        } catch (t) {
                            if (p[c(293, "K(sj")](c(605, "%HyK"), p[c(441, "N5)D")]))
                                return f[c(434, "Vz5(")](this, e);
                            d[c(500, "fvcJ")](_, C[S])
                        }
                        var w = p[c(352, "VNne")](H, C);
                        return Object[c(488, "]kAT")](w)[c(419, "zADX")](function(e) {
                            var i = c
                              , s = {
                                aAVYl: function(t, e, i, o, n) {
                                    return d[L(362, "FyR3")](t, e, i, o, n)
                                }
                            };
                            d[i(447, "Tv$2")](i(602, "FS)O"), i(595, "zADX")) ? (l || s[i(610, "VNne")](m, n, o, e[i(275, "Tv$2")][0][i(303, "fvcJ")], s[i(514, "6(Rp")][0][i(334, "UUAi")]) ? u.m++ : v.c++,
                            t = !1) : _[i(358, "]^Dg")](e, w[e])
                        }),
                        p[c(374, "%HyK")](N, C)[c(497, "Yxil")](function(t) {
                            var e = c
                              , s = {
                                eBSpN: function(t) {
                                    return d[L(306, "@LT!")](t)
                                }
                            };
                            if (d[e(258, i)] !== d[e(574, "GMvA")]) {
                                var r = {};
                                return r[e(522, "zADX")] = t,
                                f[e(308, "GMvA")](_, JSON[e(357, "6(Rp")](r))
                            }
                            var a = S[e(556, i)](w);
                            l.ts = s[e(444, "]^Dg")](m),
                            a[e(475, "FyR3")] = n,
                            o = t[e(283, "Mg$I")](a)
                        })[c(583, "Z8[X")](function() {
                            var t = c
                              , e = {
                                TJXlj: function(t, e) {
                                    return t(e)
                                },
                                wzyYY: t(382, "Yxil")
                            };
                            if (p[t(320, "GVAe")] !== p[t(261, "VNne")]) {
                                var i = {
                                    c: 385
                                }
                                  , o = {
                                    c: "GMvA",
                                    d: 363,
                                    e: "DQhq",
                                    f: 549,
                                    g: "]kAT",
                                    h: 388,
                                    i: "[c[#"
                                };
                                return new _(function(n) {
                                    var s = t
                                      , r = {
                                        pwYrJ: function(t, i) {
                                            return e[L(593, "Yxil")](t, i)
                                        },
                                        yiThZ: e[s(311, "pLy1")]
                                    };
                                    m[s(i.c, ")uOB")](function() {
                                        var t = s
                                          , e = {};
                                        e[t(273, o.c)] = n,
                                        e[t(o.d, o.e)] = r,
                                        n[t(o.f, o.g)](r[t(o.h, o.i)], e, function(e) {
                                            r[t(496, "Tv$2")](n, e)
                                        })
                                    })
                                }
                                )
                            }
                            return _[t(415, "DQhq")](t(532, "Vz5("), V),
                            f[t(565, "qdEP")](_, null)
                        })
                    }
                    return f[c(445, ")uOB")](this, e)
                }
                this[c(432, "GMvA")] = f[c(558, "VNne")] + this[c(267, "DQhq")]
            }
        }
        var z = !1;
        s[a(519, "ttc#")] = function() {
            z && {
                laTps: function(t) {
                    return t()
                }
            }[a(335, "6(Rp")](O)
        }
        ,
        s[a(405, "]kAT")] = function(t) {
            var e = a
              , i = {
                KWeij: function(t, e) {
                    return t(e)
                },
                JvpEP: function(t, e) {
                    return t(e)
                }
            };
            i[e(463, "fvcJ")](F, t[e(268, "V!BO")]),
            i[e(398, "VNne")](x, t.ts),
            z = !0
        }
        ,
        s[a(596, "FS)O")] = function() {
            z && {
                DEXsh: function(t) {
                    return t()
                }
            }[a(360, "zADX")](I)
        }
    },
    86704(t, e, i) {
        i.d(e, {
            u: function() {
                return c
            }
        }),
        i(44114);
        var o = i(31635)
          , n = i(78248)
          , s = i(79444)
          , r = i(47080);
        const {ccclass: a} = n.P4R;
        window.cc._RF.push({}, "7a083KeOUVDTaxI+JRM6qXt", "GameModel", void 0);
        let c = class extends r.A {
            initGameBeginData(t) {
                const e = t.data;
                this.round = e.round || 0,
                this.roundOverall = e.roundOverall || 0,
                this.score = 0,
                this.isWaitingDDL = !1,
                this.playStartTime = Date.now(),
                this.isUserGuide = !s.i.user.userGuide,
                this.todayHighestScore = e.todayHighestScore,
                this.sessionID = e.sessionID,
                this.randomSeed = "".concat(s.i.user.userid, ".").concat(t.timestamp),
                this.adsToken = e.adsToken,
                this.wellModeRateConfigList = e.wellModeList,
                this.scoreConfigList = e.scoreList
            }
            initGameFromRecordData(t) {
                const {sessionID: e, score: i, randomSeed: o, adsToken: n, round: s, roundOverall: r, isUserGuide: a, isShowingUserGuide: c, currentUserGuideStep: d, placeStep: u, maxCombo: l, totalCombo: h, currentCombo: p, playStartTime: g, usedBlocks: m, isUsingExtraBlock: v, isUsingBomb: f, isUsingRemove: y, isUsingInventoryProp: _, hasHardDifficulty: C, hasHardDifficultyAfterRevive: S, todayHighestScore: w, wellModeRateConfigList: k, scoreConfigList: b} = t || {};
                this.score = i,
                this.round = s || 0,
                this.roundOverall = r || 0,
                this.isUserGuide = a,
                this.isShowingUserGuide = c,
                this.currentUserGuideStep = d,
                this.placeStep = u,
                this.maxCombo = l,
                this.totalCombo = h,
                this.currentCombo = p,
                this.playStartTime = g,
                this.usedBlocks = m,
                this.hasHardDifficulty = C,
                this.hasHardDifficultyAfterRevive = S,
                this.todayHighestScore = w,
                this.sessionID = e,
                this.randomSeed = o,
                this.adsToken = n,
                this.wellModeRateConfigList = k,
                this.scoreConfigList = b,
                this.isUsingExtraBlock = !_ && v,
                this.isUsingBomb = !_ && f,
                this.isUsingRemove = !_ && y,
                this.isUsingInventoryProp = !1
            }
            getLevelType() {
                return "best_score"
            }
            getBaseTrackParams() {
                return {
                    game_mode: "classic",
                    level_type: this.getLevelType(),
                    coin_balance: s.i.user.userCoins,
                    round: this.round,
                    round_overall: this.roundOverall
                }
            }
        }
        ;
        c = (0,
        o.Cg)([a("GameModel")], c),
        window.cc._RF.pop()
    },
    87778(t, e, i) {
        var o;
        i.d(e, {
            P: function() {
                return o
            }
        }),
        function(t) {
            t.audio_block_blast_bgm = "audio/audio_block_blast_bgm",
            t.audio_block_combo_2 = "audio/audio_block_combo_2",
            t.audio_block_combo_3 = "audio/audio_block_combo_3",
            t.audio_block_combo_4 = "audio/audio_block_combo_4",
            t.audio_block_combo_5 = "audio/audio_block_combo_5",
            t.audio_block_combo_6 = "audio/audio_block_combo_6",
            t.audio_block_combo_7 = "audio/audio_block_combo_7",
            t.audio_block_combo_8 = "audio/audio_block_combo_8",
            t.audio_block_combo_9 = "audio/audio_block_combo_9",
            t.audio_block_matched = "audio/audio_block_matched",
            t.audio_block_matched2 = "audio/audio_block_matched2",
            t.audio_block_placed = "audio/audio_block_placed",
            t.audio_cakep = "audio/audio_cakep",
            t.audio_clear_multiple_rows = "audio/audio_clear_multiple_rows",
            t.audio_click = "audio/audio_click",
            t.audio_countdown = "audio/audio_countdown",
            t.audio_dahsyat = "audio/audio_dahsyat",
            t.audio_fantastis = "audio/audio_fantastis",
            t.audio_gift_checked = "audio/audio_gift_checked",
            t.audio_gift_received = "audio/audio_gift_received",
            t.audio_keren = "audio/audio_keren",
            t.audio_lose = "audio/audio_lose",
            t.audio_move_block = "audio/audio_move_block",
            t.audio_reward_banner = "audio/audio_reward_banner",
            t.audio_win_congrats = "audio/audio_win_congrats",
            t.audio_wow = "audio/audio_wow"
        }(o || (o = {}))
    },
    88584(t, e, i) {
        i.d(e, {
            x: function() {
                return g
            }
        }),
        i(23792),
        i(44114),
        i(62953);
        var o, n = i(31635), s = i(78248), r = i(16222), a = i(61038);
        !function(t) {
            t[t.EXTRA_BLOCK_PROP = 1] = "EXTRA_BLOCK_PROP",
            t[t.REMOVE_PROP = 2] = "REMOVE_PROP",
            t[t.BOMB_PROP = 3] = "BOMB_PROP",
            t[t.COIN = 4] = "COIN",
            t[t.MULTI = 5] = "MULTI"
        }(o || (o = {}));
        const c = {
            [o.EXTRA_BLOCK_PROP]: 0,
            [o.REMOVE_PROP]: 1,
            [o.BOMB_PROP]: 2,
            [o.COIN]: 3,
            [o.MULTI]: 4
        };
        var d = i(79444)
          , u = i(71573);
        const {ccclass: l, property: h} = s.P4R
          , p = {
            [r.P7.EXTRA_BLOCK]: o.EXTRA_BLOCK_PROP,
            [r.P7.BOMB]: o.BOMB_PROP,
            [r.P7.REMOVE]: o.REMOVE_PROP
        };
        window.cc._RF.push({}, "98eafJP8lBHVLrUyMz9QqrV", "ShareReward", void 0);
        let g = class extends s.uAl {
            updateRewardIconByShareType(t) {
                const e = d.i.share.getShareConfigPrizeList(t);
                if (!e || 0 === e.length)
                    return void (this.iconMultiSprite.node.active = !1);
                const i = [];
                for (const t of e)
                    if (t.prizeID === a.Dy.COIN)
                        i.push(o.COIN);
                    else if (t.prizeID === a.Dy.PROP) {
                        const e = t.detail.itemID
                          , o = p[e];
                        o && i.push(o)
                    }
                if (0 === i.length)
                    return void (this.iconMultiSprite.node.active = !1);
                this.iconMultiSprite.node.active = !0;
                const n = 1 === i.length ? i[0] : o.MULTI;
                this.iconMultiSprite.switchSprite(c[n])
            }
            updateRewardIcon(t) {
                const {number_extra_block: e, number_bomb: i, number_remove: n, number_coins: s} = t || {}
                  , r = [];
                if (e && r.push(o.EXTRA_BLOCK_PROP),
                i && r.push(o.BOMB_PROP),
                n && r.push(o.REMOVE_PROP),
                s && r.push(o.COIN),
                0 === r.length)
                    return void (this.iconMultiSprite.node.active = !1);
                this.iconMultiSprite.node.active = !0;
                const a = 1 === r.length ? r[0] : o.MULTI;
                this.iconMultiSprite.switchSprite(c[a])
            }
        }
        ;
        (0,
        n.Cg)([h(u.B)], g.prototype, "iconMultiSprite", void 0),
        g = (0,
        n.Cg)([l("ShareReward")], g),
        window.cc._RF.pop()
    },
    91784(t, e, i) {
        i.d(e, {
            aw: function() {
                return g
            },
            io: function() {
                return v
            },
            Hu: function() {
                return f
            },
            Zo: function() {
                return h
            },
            V2: function() {
                return p
            },
            zK: function() {
                return m
            }
        }),
        i(16280),
        i(98992),
        i(81454);
        var o = i(31635)
          , n = i(85300)
          , s = i(91942)
          , r = i(91919)
          , a = i(3360);
        const c = "live" !== window.ENVIRONMENT && "true" === (0,
        a.P)("skipAntiCheat");
        var d = i(79444)
          , u = i(2818)
          , l = i(56984);
        function h() {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return r.A.appId && (0,
                s.Jt)("/api-gateway/".concat(r.A.gameName, "/ping"), {}, {
                    showToast: !1,
                    addActivityCode: !1,
                    isReport: !1
                })
            })
        }
        function p() {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                var t;
                const e = yield(0,
                s.vv)("/api-gateway/".concat(r.A.gameName, "/web/get_cc_setting"), {}, {
                    showToast: !1
                });
                if (0 !== e.code || !e.data || !e.data.data)
                    throw new Error("fetchWebSetting api error, code: ".concat(null == e ? void 0 : e.code, ", msg: ").concat(null == e ? void 0 : e.msg));
                {
                    const i = e.data.data;
                    d.i.gwSignConfig = i.gwSignConfig,
                    d.i.antiCheatConfig = i.antiCheatConfig,
                    d.i.tssSAPConfig = i.tssSAPConfig,
                    d.i.bssDFPEnabled = i.bssDFPEnabled,
                    !c && (0,
                    u.bf)() && (0,
                    n.init)({
                        api: (null === (t = d.i.antiCheatConfig.api) || void 0 === t ? void 0 : t.map(t => function(t) {
                            let e = "";
                            return t.startsWith("http") || t.startsWith("//") || (e = location.origin,
                            t.startsWith("/") || (e += "/")),
                            "".concat(e).concat(t)
                        }(t))) || [],
                        ts: (0,
                        l.Fm)()
                    })
                }
            })
        }
        function g(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/api-gateway/".concat(r.A.gameName, "/game/begin"), t, {
                    retryTime: 1,
                    showToast: !1
                })
            })
        }
        function m(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/api-gateway/".concat(r.A.gameName, "/game/poll"), t, {
                    showToast: !1
                })
            })
        }
        function v(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/gw-api/".concat(r.A.gameName, "/game/finish"), t, {
                    retryTime: 2,
                    showToast: !1
                })
            })
        }
        function f(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/api-gateway/".concat(r.A.gameName, "/game/query"), t, {
                    retryTime: 1,
                    showToast: !1
                })
            })
        }
    },
    92002(t, e, i) {
        i.d(e, {
            A$: function() {
                return C
            },
            MP: function() {
                return g
            },
            xO: function() {
                return v
            },
            Wy: function() {
                return f
            },
            nx: function() {
                return m
            },
            ad: function() {
                return y
            },
            $3: function() {
                return _
            }
        });
        var o = i(92883)
          , n = i(92215);
        class s {
            constructor(t) {
                let {projectName: e, isReact: i, isPC: o} = t;
                this.pageType = "",
                this.isReact = !0,
                this.isPC = !1,
                this.pageType = "".concat(e),
                void 0 !== i && (this.isReact = i),
                void 0 !== o && (this.isPC = o)
            }
            generateEventData(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = "";
                return this.pageType && t.page_type && (i = "".concat(this.pageType, "_").concat(t.page_type)),
                this.pageType && !t.page_type && (i = this.pageType),
                !this.pageType && t.page_type && (i = t.page_type),
                {
                    type: "v3",
                    timestamp: Date.now(),
                    usage_id: e,
                    info: Object.assign(Object.assign({}, t), {
                        page_type: i
                    }),
                    source: this.isPC ? "pc" : this.isReact ? "rweb" : "mweb"
                }
            }
        }
        class r extends s {
            constructor(t) {
                let {projectName: e, isReact: i} = t;
                super({
                    projectName: e,
                    isReact: i
                })
            }
            report(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const i = this.generateEventData(t, e);
                (0,
                o.Ys)([i])
            }
        }
        n.JH.viber,
        n.JH.facebookLink,
        n.JH.facebookPhoto,
        n.JH.instagram,
        n.JH.instagramStory,
        n.JH.facebookMessenger,
        n.JH.lineChat,
        n.JH.pinterest,
        n.JH.twitter,
        n.JH.whatsapp,
        n.JH.sms,
        n.JH.email,
        n.JH.copyLink,
        n.JH.copyInfo,
        n.JH.telegram,
        n.JH.zaloMessage,
        n.JH.zaloTimeline,
        n.JH.facebookLink,
        n.JH.facebookPhoto,
        n.JH.facebookMessenger,
        n.JH.lineChat,
        n.JH.whatsapp,
        n.JH.viber,
        n.JH.instagram,
        n.JH.instagramStory,
        n.JH.pinterest,
        n.JH.twitter,
        n.JH.sms,
        n.JH.email,
        n.JH.copyInfo,
        n.JH.copyLink,
        n.JH.telegram,
        n.JH.zaloMessage,
        n.JH.zaloTimeline;
        var a = i(53501)
          , c = i(79444)
          , d = i(37181);
        const u = "game_".concat(a.oT);
        function l(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            Date.now() - e > 1e3 ? console.error("bridge is not ready, cancel track action") : (0,
            d.R)() && bridgeInit ? t() : setTimeout( () => l(t, e), 500)
        }
        let h;
        function p(t, e) {
            let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
              , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            if (!t && !e)
                return;
            const n = Object.assign({}, t)
              , s = c.i.activityData.activityCode
              , a = c.i.activityData.eventCode;
            n.data = {};
            const d = i ? Object.assign(Object.assign({}, e), {
                game_activity_id: s,
                game_slot_id: a
            }) : Object.assign({}, e);
            "impression" === n.operation ? n.data.viewed_objects = [d] : n.data = d,
            n.usage_id = o,
            l( () => {
                try {
                    (h || (h = new r({
                        projectName: u,
                        isReact: !1
                    }),
                    h)).report(n, o)
                } catch (t) {
                    console.error("track error", t)
                }
            }
            )
        }
        function g(t, e, i) {
            p({
                page_type: t,
                operation: a.NF.CLICK,
                target_type: e
            }, i)
        }
        function m(t, e, i, o) {
            p({
                page_type: t,
                operation: a.NF.CLICK,
                page_section: i,
                target_type: e
            }, o)
        }
        function v(t, e) {
            p({
                page_type: t,
                operation: a.NF.IMPRESSION
            }, e)
        }
        function f(t, e, i) {
            p({
                page_type: t,
                operation: a.NF.IMPRESSION,
                target_type: e
            }, i)
        }
        function y(t, e, i) {
            p({
                page_type: t,
                operation: a.NF.IMPRESSION,
                page_section: e
            }, i)
        }
        function _(t, e) {
            p({
                page_type: t,
                operation: a.NF.VIEW
            }, e)
        }
        function C(t, e) {
            p({
                page_type: t,
                operation: a.NF.ACTION_SWIPE
            }, e)
        }
    },
    92215(t, e, i) {
        i.d(e, {
            JH: function() {
                return o
            },
            RO: function() {
                return m
            },
            SY: function() {
                return _
            },
            i4: function() {
                return v
            }
        }),
        i(16280),
        i(33110),
        i(3362),
        i(98992),
        i(54520);
        var o, n = i(8440), s = i(60381), r = i(92883);
        function a(t, e, i, o) {
            return new (i || (i = Promise))(function(n, s) {
                function r(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? n(t.value) : (e = t.value,
                    e instanceof i ? e : new i(function(t) {
                        t(e)
                    }
                    )).then(r, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }
        !function(t) {
            t.lineChat = "lineChat",
            t.facebookLink = "facebookLink",
            t.facebookPhoto = "facebookPhoto",
            t.facebookMessenger = "facebookMessenger",
            t.whatsapp = "whatsapp",
            t.viber = "viber",
            t.instagram = "instagram",
            t.instagramStory = "instagramStory",
            t.instagramVideo = "instagramVideo",
            t.instagramVideoStory = "instagramVideoStory",
            t.pinterest = "pinterest",
            t.twitter = "twitter",
            t.telegram = "telegram",
            t.zaloMessage = "zaloMessage",
            t.zaloTimeline = "zaloTimeline",
            t.sms = "sms",
            t.email = "email",
            t.copyInfo = "copyInfo",
            t.copyLink = "copyLink"
        }(o || (o = {}));
        const c = "object" == typeof window && window.getAppVersion && window.getAppVersion();
        function d(t) {
            return n.Ay.android && c < 22616 ? Promise.reject({
                errorCode: 3,
                errorMessage: "android not supports this version: ".concat(c)
            }) : n.Ay.ios && c < 22613 ? Promise.reject({
                errorCode: 3,
                errorMessage: "ios not supports this version: ".concat(c)
            }) : new Promise( (e, i) => {
                window.bridgeInit && window.bridgeCallHandler ? window.bridgeInit( () => {
                    window.bridgeCallHandler("shareData", t, t => {
                        e(t)
                    }
                    )
                }
                ) : i("Bridge Js files load failed")
            }
            )
        }
        const u = 25700
          , l = {
            sg: [o.whatsapp, o.telegram, o.instagram, o.facebookMessenger, o.facebookLink, o.twitter, o.lineChat],
            my: [o.whatsapp, o.instagram, o.facebookLink, o.twitter, o.facebookMessenger, o.telegram, o.lineChat],
            ph: [o.facebookMessenger, o.facebookLink, o.instagram, o.twitter, o.viber, o.whatsapp, o.telegram],
            tw: [o.lineChat, o.facebookLink, o.facebookMessenger, o.instagram, o.whatsapp, o.telegram, o.twitter],
            vn: [o.facebookMessenger, o.facebookLink, o.instagram, o.zaloMessage, o.zaloTimeline, o.twitter],
            th: [o.lineChat, o.facebookLink, o.twitter, o.instagram, o.facebookMessenger],
            id: [o.whatsapp, o.instagram, o.facebookLink, o.twitter, o.lineChat, o.facebookMessenger],
            br: [o.whatsapp, o.instagram, o.facebookLink, o.facebookMessenger],
            mx: [o.whatsapp, o.instagram, o.facebookLink, o.facebookMessenger, o.twitter],
            co: [o.whatsapp, o.instagram, o.facebookLink, o.facebookMessenger, o.twitter],
            cl: [o.whatsapp, o.instagram, o.facebookLink, o.facebookMessenger, o.twitter],
            kh: [o.viber, o.whatsapp, o.facebookMessenger, o.facebookLink, o.instagram, o.telegram, o.lineChat],
            mm: [o.facebookMessenger, o.facebookLink, o.viber, o.telegram, o.whatsapp, o.instagram],
            la: [o.whatsapp, o.facebookMessenger, o.facebookLink, o.instagram, o.lineChat, o.telegram],
            ar: [o.whatsapp, o.instagram, o.facebookLink, o.facebookMessenger, o.twitter, o.lineChat, o.telegram]
        }
          , h = {
            mx: [o.copyLink, o.copyInfo, o.sms, o.email],
            co: [o.copyLink, o.copyInfo, o.sms, o.email],
            cl: [o.copyLink, o.copyInfo, o.sms, o.email],
            kh: [o.copyLink, o.copyInfo, o.sms, o.email],
            mm: [o.copyLink, o.copyInfo, o.sms, o.email],
            la: [o.copyLink, o.copyInfo, o.sms, o.email],
            ar: [o.copyLink, o.copyInfo, o.sms, o.email]
        }
          , p = [o.copyInfo, o.copyLink, o.sms, o.email]
          , g = {
            [o.zaloMessage]: {
                vn: "Tin nhắn"
            },
            [o.zaloTimeline]: {
                vn: "Nhật ký"
            },
            [o.email]: {
                th: "อีเมล",
                kh: "អ៊ីមែល",
                mm: "အီးမေးလ်",
                la: "อีเมล"
            },
            [o.sms]: {
                tw: "簡訊",
                th: "ข้อความ",
                kh: "សារ",
                mm: "စာတို",
                la: "ข้อความ"
            },
            [o.copyInfo]: {
                th: "คัดลอกข้อมูล",
                tw: "複製資訊",
                vn: "Sao chép thông tin",
                id: "Salin Info",
                br: "Copiar Info",
                mx: "Copiar información",
                co: "Copiar información",
                cl: "Copiar información",
                kh: "ចម្លងព័ត៌មាន",
                mm: "အချက်အလက်ကူးရန်",
                la: "คัดลอกข้อมูล",
                ar: "Copiar Información"
            },
            [o.copyLink]: {
                th: "คัดลอกลิงก์",
                tw: "複製連結",
                vn: "Sao chép url",
                id: "Salin Tautan",
                br: "Copiar Atalho",
                mx: "Copiar link",
                co: "Copiar link",
                cl: "Copiar link",
                kh: "ចម្លងតំណ",
                mm: "လင့်ခ်ကူးယူရန်",
                la: "คัดลอกลิงก์",
                ar: "Copiar Enlace"
            },
            [o.lineChat]: {
                ar: "LINE"
            }
        }
          , m = {
            title: {
                tw: "分享",
                th: "แชร์",
                vn: "Chia sẻ",
                id: "Share game ini dengan teman & keluargamu!",
                br: "Compartilhe este jogo",
                mx: "Comparte este juego",
                co: "Comparte este juego",
                cl: "Comparte este juego",
                kh: "ចែករំលែក",
                mm: "မျှဝေရန်",
                la: "แชร์",
                ar: "Compartir este juego"
            }[s.J3] || "Share this game",
            subtitle: "",
            sharingAppIDsTop: ( () => {
                const t = window.getAppVersion && window.getAppVersion();
                let e = l[s.J3];
                return t < 24900 && (e = e.filter(t => t !== o.telegram)),
                t < u && (e = e.filter(t => t !== o.zaloMessage && t !== o.zaloTimeline)),
                e
            }
            )(),
            sharingAppIDsBottom: h[s.J3] || p
        }
          , v = {
            lineChat: g[o.lineChat][s.J3] || "Line",
            facebookLink: "Facebook",
            facebookPhoto: "Facebook Photo",
            facebookMessenger: "Messenger",
            whatsapp: "WhatsApp",
            viber: "Viber",
            instagram: "Instagram",
            instagramStory: "Instagram Story",
            instagramVideo: "Instagram Video",
            instagramVideoStory: "Instagram Video Story",
            pinterest: "Pinterest",
            twitter: "Twitter",
            telegram: "Telegram",
            zaloMessage: g[o.zaloMessage][s.J3] || "Messages",
            zaloTimeline: g[o.zaloTimeline][s.J3] || "Timeline",
            sms: g[o.sms][s.J3] || "SMS",
            email: g[o.email][s.J3] || "Email",
            copyInfo: g[o.copyInfo][s.J3] || "Copy Info",
            copyLink: g[o.copyLink][s.J3] || "Copy Link"
        }
          , f = {
            failed: {
                th: "เกิดข้อผิดพลาด",
                tw: "分享失敗",
                vn: "Thất bại",
                id: "Gagal!",
                br: "Falhou!",
                mx: "¡Fallaste!",
                co: "¡Fallaste!",
                cl: "¡Fallaste!",
                kh: "បរាជ័យ!",
                mm: "မအောင်မြင်ပါ!",
                la: "เกิดข้อผิดพลาด",
                ar: "¡Falló!"
            },
            linkCopied: {
                th: "คัดลอกลิงก์แล้ว",
                tw: "成功複製連結",
                vn: "Link game đã được sao chép",
                id: "Link permainan disalin",
                br: "Atalho para o jogo copiado",
                mx: "Enlace del juego copiado",
                co: "Enlace del juego copiado",
                cl: "Enlace del juego copiado",
                kh: "តំណភ្ជាប់ហ្គេមត្រូវបានចម្លង",
                mm: "ဂိမ်းလင့်ခ်ကိုကူးယူပြီးပါပြီ",
                la: "คัดลอกลิงก์แล้ว",
                ar: "Enlace del juego copiado"
            },
            infoCopied: {
                th: "คัดลอกข้อความแล้ว",
                tw: "成功複製資訊",
                vn: "Thông tin game đã được sao chép",
                id: "Informasi permainan disalin",
                br: "Informações do jogo copiadas",
                mx: "Información del juego copiada",
                co: "Información del juego copiada",
                cl: "Información del juego copiada",
                kh: "ព័ត៌មានហ្គេមត្រូវបានចម្លង",
                mm: "ဂိမ်းအချက်အလက်ကိုကူးယူပြီးပါပြီ",
                la: "คัดลอกข้อความแล้ว",
                ar: "Información del juego copiada"
            },
            appNoInstall: {
                th: "ติดตั้งแอป Shopee เพื่อแชร์เกม",
                tw: "安裝APP才能分享",
                vn: "Vui lòng cài đặt ứng dụng Shopee để chia sẻ",
                id: "Install Aplikasi untuk bagikan permainan ini",
                br: "Instale o aplicativo para compartilhar",
                mx: "Instala la aplicación para compartir",
                co: "Instala la aplicación para compartir",
                cl: "Instala la aplicación para compartir",
                kh: "ដំឡើងកម្មវិធីដើម្បីចែករំលែក",
                mm: "မျှဝေရန် APP ကိုတပ်ဆင်ပါ",
                la: "ติดตั้งแอป Shopee เพื่อแชร์เกม",
                ar: "Instalá la aplicación para compartir"
            },
            appUpgrade: {
                th: "อัพเดทแอป Shopee ให้เป็นเวอร์ชั่นล่าสุด",
                tw: "請升級至最新版蝦皮購物APP",
                vn: "Vui lòng cập nhật ứng dụng Shopee",
                id: "Upgrade apikasi Shopee untuk bermain game ini",
                br: "Por favor, atualize seu aplicativo!",
                mx: "!Por favor, actualiza tu app!",
                co: "!Por favor, actualiza tu app!",
                cl: "!Por favor, actualiza tu app!",
                kh: "សូមធ្វើបច្ចុប្បន្នភាពកម្មវិធីរបស់អ្នក!",
                mm: "APP ကိုအပ်ဂရိတ်လုပ်ပါ!",
                la: "อัพเดทแอป Shopee ให้เป็นเวอร์ชั่นล่าสุด",
                ar: "Por favor, actualizá tu aplicación"
            }
        }
          , y = {
            copyLinkSuc: f.linkCopied[s.J3] || "Game link copied",
            copySuc: f.infoCopied[s.J3] || "Game info copied",
            appNoInstall: f.appNoInstall[s.J3] || "Install APP to share",
            appUpgrade: f.appUpgrade[s.J3] || "Please upgrade your APP!",
            fail: f.failed[s.J3] || "Failed!"
        };
        class _ {
            constructor() {
                return _.instance || (_.instance = this),
                _.instance
            }
            showSharingPanel(t) {
                return e = t || m,
                new Promise( (t, i) => {
                    window.bridgeInit && window.bridgeCallHandler ? window.bridgeInit( () => {
                        window.bridgeCallHandler("showSharingPanel", e, e => {
                            t(e)
                        }
                        )
                    }
                    ) : i("Bridge Js files load failed")
                }
                );
                var e
            }
            shareByChannelName(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y;
                return a(this, void 0, void 0, function*() {
                    const {msg: n, image: s, url: r, video: a} = e
                      , c = "".concat(n, " ").concat(r);
                    switch (t) {
                    case o.lineChat:
                        yield this.shareForLineChat({
                            text: c
                        }, i);
                        break;
                    case o.facebookLink:
                        yield this.shareForFacebookLink({
                            link: r
                        }, i);
                        break;
                    case o.facebookPhoto:
                        if (!s)
                            throw new Error("invalid image param");
                        yield this.shareForFacebookPhoto({
                            image: s
                        }, i);
                        break;
                    case o.facebookMessenger:
                        yield this.shareForMessenger({
                            text: r
                        }, i);
                        break;
                    case o.whatsapp:
                        yield this.shareForWhatsapp({
                            text: c
                        }, i);
                        break;
                    case o.viber:
                        if (!s)
                            throw new Error("invalid image param");
                        yield this.shareForViber({
                            text: c,
                            image: s
                        }, i);
                        break;
                    case o.instagram:
                        if (!s)
                            throw new Error("invalid insImage param");
                        yield this.shareForInstagram({
                            image: s,
                            text: c
                        }, i);
                        break;
                    case o.instagramStory:
                        if (!s)
                            throw new Error("invalid insImage param");
                        yield this.shareForInstagramStory({
                            image: s,
                            linkUrl: r
                        }, i);
                        break;
                    case o.instagramVideo:
                        if (!a)
                            throw new Error("invalid video param");
                        yield this.shareForInstagramVideo({
                            video: a
                        }, i);
                        break;
                    case o.instagramVideoStory:
                        if (!a)
                            throw new Error("invalid video param");
                        yield this.shareForInstagramVideoStory({
                            video: a
                        }, i);
                        break;
                    case o.pinterest:
                        if (!s)
                            throw new Error("invalid image param");
                        yield this.shareForPinterest({
                            image: s,
                            text: n,
                            link: r
                        }, i);
                        break;
                    case o.twitter:
                        if (!s)
                            throw new Error("invalid image param");
                        yield this.shareForTwitter({
                            text: c,
                            image: s
                        }, i);
                        break;
                    case o.telegram:
                        yield this.shareForTelegram({
                            text: c,
                            image: s,
                            video: a
                        }, i);
                        break;
                    case o.zaloMessage:
                        yield this.shareForZaloMessages({
                            text: c,
                            url: r,
                            image: s
                        }, i);
                        break;
                    case o.zaloTimeline:
                        yield this.shareForZaloTimeline({
                            url: r
                        }, i);
                        break;
                    case o.copyLink:
                        yield this.shareForCopyLink({
                            link: r
                        }, i);
                        break;
                    case o.copyInfo:
                        yield this.shareForCopyInfo({
                            content: c
                        }, i);
                        break;
                    case o.sms:
                        yield this.shareForSms({
                            text: c
                        }, i);
                        break;
                    case o.email:
                        if (!s)
                            throw new Error("invalid image param");
                        yield this.shareForEmail({
                            image: s,
                            title: n,
                            content: c
                        }, i)
                    }
                    return !0
                })
            }
            shareForViber(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.viber,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForWhatsapp(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.whatsapp,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForLineChat(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.lineChat,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForFacebookLink(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const {link: i, quote: n, hashTag: s} = t
                      , r = yield d({
                        sharingAppID: o.facebookLink,
                        sharingData: {
                            contentUrl: i,
                            quote: n,
                            hashTag: s
                        }
                    });
                    return this.handleShareResult(r, e)
                })
            }
            shareForFacebookPhoto(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.facebookPhoto,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForMessenger(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.facebookMessenger,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForInstagram(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y
                  , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return a(this, void 0, void 0, function*() {
                    const n = () => a(this, void 0, void 0, function*() {
                        const i = yield d({
                            sharingAppID: o.instagram,
                            sharingData: t
                        });
                        return this.handleShareResult(i, e)
                    });
                    if (i) {
                        try {
                            yield this.shareForCopyInfo({
                                content: t.text
                            }, e)
                        } catch (t) {
                            return yield n()
                        }
                        yield this.waitForToastPass()
                    }
                    return yield n()
                })
            }
            shareForInstagramStory(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.instagramStory,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForInstagramVideo(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.instagramVideo,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForInstagramVideoStory(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.instagramVideoStory,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForPinterest(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const {image: i, text: s, link: r} = t
                      , a = {
                        image: i
                    };
                    n.Ay.ios && (s && (a.text = s),
                    r && (a.link = r));
                    const c = yield d({
                        sharingAppID: o.pinterest,
                        sharingData: a
                    });
                    return this.handleShareResult(c, e)
                })
            }
            shareForTwitter(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.twitter,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForTelegram(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    if ((window.getAppVersion && window.getAppVersion()) >= 24900) {
                        const i = yield d({
                            sharingAppID: o.telegram,
                            sharingData: t
                        });
                        return this.handleShareResult(i, e)
                    }
                    throw new Error("share for telegram app version must >= 2.49.xx")
                })
            }
            shareForZaloMessages(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    if ((window.getAppVersion && window.getAppVersion()) >= u) {
                        const i = yield d({
                            sharingAppID: o.zaloMessage,
                            sharingData: t
                        });
                        return this.handleShareResult(i, e)
                    }
                    throw new Error("share for zalo app version must >= 2.56.xx")
                })
            }
            shareForZaloTimeline(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    if ((window.getAppVersion && window.getAppVersion()) >= u) {
                        const i = yield d({
                            sharingAppID: o.zaloTimeline,
                            sharingData: t
                        });
                        return this.handleShareResult(i, e)
                    }
                    throw new Error("share for zalo app version must >= 2.56.xx")
                })
            }
            shareForSms(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.sms,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForEmail(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.email,
                        sharingData: t
                    });
                    return this.handleShareResult(i, e)
                })
            }
            shareForCopyInfo(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.copyInfo,
                        sharingData: t
                    });
                    return 0 === i.errorCode && (0,
                    r.P0)({
                        iconType: "success",
                        message: e.copySuc
                    }),
                    this.handleShareResult(i, e)
                })
            }
            shareForCopyLink(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
                return a(this, void 0, void 0, function*() {
                    const i = yield d({
                        sharingAppID: o.copyLink,
                        sharingData: t
                    });
                    return 0 === i.errorCode && (0,
                    r.P0)({
                        iconType: "success",
                        message: e.copyLinkSuc
                    }),
                    this.handleShareResult(i, e)
                })
            }
            showErrorToast(t, e) {
                switch (t.errorCode) {
                case 2:
                    (0,
                    r.P0)({
                        iconType: "failure",
                        message: e.appNoInstall
                    });
                    break;
                case 3:
                    (0,
                    r.P0)({
                        iconType: "failure",
                        message: e.appUpgrade
                    });
                    break;
                default:
                    (0,
                    r.P0)({
                        iconType: "failure",
                        message: e.fail
                    })
                }
            }
            handleShareResult(t, e) {
                if (0 === t.errorCode)
                    return !0;
                throw this.showErrorToast(t, e),
                new Error(JSON.stringify(t))
            }
            waitForToastPass() {
                return new Promise(t => {
                    setTimeout(t, 800)
                }
                )
            }
        }
    },
    93088(t, e, i) {
        i.d(e, {
            m: function() {
                return l
            }
        }),
        i(23792),
        i(44114),
        i(55081),
        i(62953);
        var o = i(31635)
          , n = i(78248)
          , s = i(9355)
          , r = i(5167)
          , a = i(87778);
        const {ccclass: c, property: d, executeInEditMode: u} = n.P4R;
        window.cc._RF.push({}, "77039OyimRDwqRT9OfHmGQG", "NiceToggle", void 0);
        let l = class extends n.$nd {
            constructor() {
                super(...arguments),
                this.thumb = null,
                this._isChecked = !0,
                this.originThumbX = 0,
                this.clickEvents = [],
                this.checkEvents = []
            }
            get isChecked() {
                return this._isChecked
            }
            set isChecked(t) {
                this._set(t)
            }
            onLoad() {
                this.originThumbX = this._isChecked ? this.thumb.node.position.x : -this.thumb.node.position.x
            }
            _set(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this._isChecked !== t && (this._isChecked = t,
                this.playEffect(),
                e && this._emitToggleEvents())
            }
            playEffect() {
                if (this.thumb) {
                    let t = 0;
                    t = this._isChecked ? this.originThumbX : -this.originThumbX,
                    n.Kak.stopAllByTarget(this.thumb.node),
                    s.qS ? this.thumb.node.setPosition(t, this.thumb.node.position.y, 0) : (0,
                    n.QxW)(this.thumb.node).to(.2, {
                        position: (0,
                        n.v3)(t, this.thumb.node.position.y, 0)
                    }, {
                        easing: "cubicOut"
                    }).start()
                }
                this.thumb.getComponent(n.kxk).spriteFrame = this._isChecked ? this.thumbOn : this.thumbOff,
                this.node.getComponent(n.kxk).spriteFrame = this._isChecked ? this.backgroundOn : this.backgroundOff
            }
            setIsCheckedWithoutNotify(t) {
                this._set(t, !1)
            }
            onEnable() {
                super.onEnable(),
                this.playEffect(),
                s.qS && !globalThis.GAME_VIEW || this.node.on(n.lMk.EventType.CLICK, this._internalToggle, this)
            }
            onDisable() {
                super.onDisable(),
                s.qS && !globalThis.GAME_VIEW || this.node.off(n.lMk.EventType.CLICK, this._internalToggle, this)
            }
            _internalToggle() {
                this.isChecked = !this.isChecked,
                r.q.audio.playEffect(a.P.audio_click)
            }
            _emitToggleEvents() {
                this.node.emit(n.lMk.EventType.TOGGLE, this),
                this.checkEvents && this._emitEvents(this.checkEvents, this)
            }
            _emitEvents(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
                    i[o - 1] = arguments[o];
                for (let e = 0, o = t.length; e < o; e++) {
                    const o = t[e];
                    o instanceof n.JmQ && o.emit(i)
                }
            }
        }
        ;
        (0,
        o.Cg)([d({
            type: n.$lP,
            displayOrder: 1,
            tooltip: "开关中的小圆点"
        })], l.prototype, "thumb", void 0),
        (0,
        o.Cg)([d], l.prototype, "_isChecked", void 0),
        (0,
        o.Cg)([d({
            displayOrder: 100,
            visible: !1,
            type: [n.JmQ],
            override: !0
        })], l.prototype, "clickEvents", void 0),
        (0,
        o.Cg)([d({
            displayOrder: 100,
            type: [n.JmQ]
        })], l.prototype, "checkEvents", void 0),
        (0,
        o.Cg)([d], l.prototype, "isChecked", null),
        (0,
        o.Cg)([d({
            group: {
                name: "Image"
            },
            type: n.Vkj
        })], l.prototype, "backgroundOn", void 0),
        (0,
        o.Cg)([d({
            group: {
                name: "Image"
            },
            type: n.Vkj
        })], l.prototype, "backgroundOff", void 0),
        (0,
        o.Cg)([d({
            group: {
                name: "Image"
            },
            type: n.Vkj
        })], l.prototype, "thumbOn", void 0),
        (0,
        o.Cg)([d({
            group: {
                name: "Image"
            },
            type: n.Vkj
        })], l.prototype, "thumbOff", void 0),
        l = (0,
        o.Cg)([c("NiceToggle"), u(!0)], l),
        window.cc._RF.pop()
    },
    95080(t, e, i) {
        i.d(e, {
            XJ: function() {
                return m
            },
            b6: function() {
                return y
            },
            kW: function() {
                return f
            },
            KA: function() {
                return C
            },
            Qk: function() {
                return g
            },
            nF: function() {
                return p
            }
        }),
        i(16280),
        i(23792),
        i(44114),
        i(62953);
        var o = i(31635)
          , n = i(23149)
          , s = i(39820)
          , r = function() {
            return s.A.Date.now()
        }
          , a = i(50751)
          , c = Math.max
          , d = Math.min
          , u = function(t, e, i) {
            var o = !0
              , s = !0;
            if ("function" != typeof t)
                throw new TypeError("Expected a function");
            return (0,
            n.A)(i) && (o = "leading" in i ? !!i.leading : o,
            s = "trailing" in i ? !!i.trailing : s),
            function(t, e, i) {
                var o, s, u, l, h, p, g = 0, m = !1, v = !1, f = !0;
                if ("function" != typeof t)
                    throw new TypeError("Expected a function");
                function y(e) {
                    var i = o
                      , n = s;
                    return o = s = void 0,
                    g = e,
                    l = t.apply(n, i)
                }
                function _(t) {
                    var i = t - p;
                    return void 0 === p || i >= e || i < 0 || v && t - g >= u
                }
                function C() {
                    var t = r();
                    if (_(t))
                        return S(t);
                    h = setTimeout(C, function(t) {
                        var i = e - (t - p);
                        return v ? d(i, u - (t - g)) : i
                    }(t))
                }
                function S(t) {
                    return h = void 0,
                    f && o ? y(t) : (o = s = void 0,
                    l)
                }
                function w() {
                    var t = r()
                      , i = _(t);
                    if (o = arguments,
                    s = this,
                    p = t,
                    i) {
                        if (void 0 === h)
                            return function(t) {
                                return g = t,
                                h = setTimeout(C, e),
                                m ? y(t) : l
                            }(p);
                        if (v)
                            return clearTimeout(h),
                            h = setTimeout(C, e),
                            y(p)
                    }
                    return void 0 === h && (h = setTimeout(C, e)),
                    l
                }
                return e = (0,
                a.A)(e) || 0,
                (0,
                n.A)(i) && (m = !!i.leading,
                u = (v = "maxWait" in i) ? c((0,
                a.A)(i.maxWait) || 0, e) : u,
                f = "trailing" in i ? !!i.trailing : f),
                w.cancel = function() {
                    void 0 !== h && clearTimeout(h),
                    g = 0,
                    o = p = s = h = void 0
                }
                ,
                w.flush = function() {
                    return void 0 === h ? l : S(r())
                }
                ,
                w
            }(t, e, {
                leading: o,
                maxWait: e,
                trailing: s
            })
        }
          , l = i(5167)
          , h = i(57131);
        const p = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                trailing: !1
            };
            return function(i, o, n) {
                n.value = u(n.value, t, e)
            }
        };
        function g() {
            return function(t, e, i) {
                i.value = function(t) {
                    if ("function" != typeof t)
                        throw Error("param is not function");
                    return function(t) {
                        let e = !1;
                        return function() {
                            for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                                n[s] = arguments[s];
                            return (0,
                            o.sH)(this, void 0, void 0, function*() {
                                let i;
                                if (!e) {
                                    e = !0;
                                    try {
                                        i = yield t.apply(this, n)
                                    } catch (t) {
                                        throw new Error(t)
                                    } finally {
                                        e = !1
                                    }
                                }
                                return i
                            })
                        }
                    }(t)
                }(i.value)
            }
        }
        function m(t) {
            return function(e) {
                Object.prototype.hasOwnProperty.call(e.prototype, "ctrArr") ? t instanceof Array ? e.prototype.ctrArr.push(...t) : e.prototype.ctrArr.push(t) : e.prototype.ctrArr = t instanceof Array ? t : [t]
            }
        }
        function v(t) {
            const e = this.sceneNode || (0,
            h.R2)(this.node);
            return t instanceof String ? e.getComponent("".concat(t)) || l.q.ui.getComponentInChildren("".concat(t)) : e && e.getComponent(t) || l.q.ui.getComponentInChildren(t)
        }
        function f(t) {
            return function(e, i) {
                Object.defineProperty(e, i, {
                    get: function() {
                        return v.apply(this, [t])
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
        }
        function y(t) {
            return function(e) {
                Object.prototype.hasOwnProperty.call(e.prototype, "storeArr") ? t instanceof Array ? e.prototype.storeArr.push(...t) : e.prototype.storeArr.push(t) : e.prototype.storeArr = t instanceof Array ? t : [t]
            }
        }
        function _(t) {
            const e = this.sceneNode || (0,
            h.R2)(this.node);
            return t instanceof String ? e.getComponent("".concat(t)) || l.q.ui.getComponentInChildren("".concat(t)) : e && e.getComponent(t) || l.q.ui.getComponentInChildren(t)
        }
        function C(t) {
            return function(e, i) {
                Object.defineProperty(e, i, {
                    get: function() {
                        return _.apply(this, [t])
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
        }
    },
    95166(t, e, i) {
        i.d(e, {
            Di: function() {
                return c
            },
            M7: function() {
                return r
            },
            iV: function() {
                return a
            },
            ul: function() {
                return d
            }
        });
        var o = i(31635)
          , n = i(91919)
          , s = i(91942);
        function r() {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/api-gateway/blockgame/adventure/landing_page", {})
            })
        }
        function a(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/api-gateway/".concat(n.A.gameName, "/adventure/begin"), t, {
                    retryTime: 1,
                    showToast: !1
                })
            })
        }
        function c(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/api-gateway/".concat(n.A.gameName, "/adventure/poll_difficulty"), t, {
                    showToast: !1
                })
            })
        }
        function d(t) {
            return (0,
            o.sH)(this, void 0, void 0, function*() {
                return yield(0,
                s.bE)("/gw-api/".concat(n.A.gameName, "/adventure/finish"), t, {
                    retryTime: 2,
                    showToast: !1
                })
            })
        }
    }
}]);
//# sourceMappingURL=main.9b35204191e56ad21a48.js.map
