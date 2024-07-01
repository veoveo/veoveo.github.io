//hello
!function() {
    var e = {
        7997: function(e, t, n) {
            "use strict";
            n.d(t, {
                P2: function() {
                    return o
                },
                Py: function() {
                    return c
                }
            });
            n(5666),
            n(1539),
            n(8674);
            var r = n(8654)
              , i = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , o = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    trailing: !1
                };
                return function(n, i, o) {
                    o.value = (0,
                    r.Z)(o.value, e, t)
                }
            };
            function a(e) {
                if ("function" !== typeof e)
                    throw "param is not function";
                return function(e) {
                    var t = !1;
                    return function() {
                        return i(this, arguments, void 0, regeneratorRuntime.mark((function n() {
                            var r, i = arguments;
                            return regeneratorRuntime.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (t) {
                                            n.next = 14;
                                            break
                                        }
                                        return t = !0,
                                        n.prev = 2,
                                        n.next = 5,
                                        e.apply(this, i);
                                    case 5:
                                        r = n.sent,
                                        n.next = 11;
                                        break;
                                    case 8:
                                        throw n.prev = 8,
                                        n.t0 = n.catch(2),
                                        new Error(n.t0);
                                    case 11:
                                        return n.prev = 11,
                                        t = !1,
                                        n.finish(11);
                                    case 14:
                                        return n.abrupt("return", r);
                                    case 15:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, this, [[2, 8, 11, 14]])
                        }
                        )))
                    }
                }(e)
            }
            function c() {
                return function(e, t, n) {
                    n.value = a(n.value)
                }
            }
        },
        6097: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return g
                }
            });
            n(5003),
            n(1539),
            n(9070),
            n(9653),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(8304),
            n(489),
            n(2419),
            n(4819);
            var r = n(3783)
              , i = n(4235)
              , o = n(7045);
            function a(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function s() {
                return s = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = u(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                    }
                }
                ,
                s.apply(this, arguments)
            }
            function u(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)); )
                    ;
                return e
            }
            function l(e, t) {
                return l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                l(e, t)
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            function h(e, t) {
                if (t && ("object" === p(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                d(e)
            }
            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                p(e)
            }
            var v = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : p(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , g = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && l(e, t)
                }(h, eui.Button);
                var t, n, o, u = f(h);
                function h() {
                    var e;
                    return a(this, h),
                    (e = u.apply(this, arguments)).imgBg = new eui.Image,
                    e.privTouchScale = .98,
                    e.privBgKey = "",
                    e
                }
                return t = h,
                (n = [{
                    key: "bgKey",
                    get: function() {
                        return this.privBgKey
                    },
                    set: function(e) {
                        this.imgBg && (this.privBgKey = e,
                        this.imgBg && (this.imgBg.source = e))
                    }
                }, {
                    key: "textColor",
                    get: function() {
                        return this.labelDisplay ? this.labelDisplay.textColor : 4095
                    },
                    set: function(e) {
                        this.labelDisplay && (this.labelDisplay.textColor = e)
                    }
                }, {
                    key: "TextFlow",
                    set: function(e) {
                        this.labelDisplay && (this.labelDisplay.textFlow = e)
                    }
                }, {
                    key: "textFont",
                    set: function(e) {
                        this.labelDisplay && (this.labelDisplay.fontFamily = e)
                    }
                }, {
                    key: "textSize",
                    get: function() {
                        var e;
                        return (null === (e = this.labelDisplay) || void 0 === e ? void 0 : e.size) || 30
                    },
                    set: function(e) {
                        this.labelDisplay && (this.labelDisplay.size = e)
                    }
                }, {
                    key: "stroke",
                    set: function(e) {
                        this.labelDisplay && (this.labelDisplay.stroke = e)
                    }
                }, {
                    key: "touchScale",
                    get: function() {
                        return this.privTouchScale
                    },
                    set: function(e) {
                        e !== this.privTouchScale && (this.privTouchScale = Number(e))
                    }
                }, {
                    key: "createChildren",
                    value: function() {
                        var e = this.width >> 1
                          , t = this.height >> 1;
                        this.anchorOffsetX = e,
                        this.anchorOffsetY = t,
                        this.x += e,
                        this.y += t
                    }
                }, {
                    key: "onAddToStage",
                    value: function() {
                        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this),
                        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
                        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
                    }
                }, {
                    key: "onRemoveFromStage",
                    value: function() {
                        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this),
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
                        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
                    }
                }, {
                    key: "addTouchEvent",
                    value: function() {
                        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
                    }
                }, {
                    key: "removeTouchEvent",
                    value: function() {
                        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
                    }
                }, {
                    key: "partAdded",
                    value: function(e, t) {
                        s(d(h.prototype), "partAdded", this).call(this, e, t),
                        this.privBgKey && (this.imgBg.source = this.privBgKey)
                    }
                }, {
                    key: "onTouchBegin",
                    value: function() {
                        this.addTouchEvent(),
                        this.originScaleX = this.scaleX,
                        this.originScaleY = this.scaleY,
                        this.scaleX = this.scaleX * this.touchScale,
                        this.scaleY = this.scaleY * this.touchScale,
                        r.j.playEffect(i.xL.CLICK)
                    }
                }, {
                    key: "onTouchEnd",
                    value: function() {
                        this.removeTouchEvent(),
                        this.scaleX = this.originScaleX,
                        this.scaleY = this.originScaleY
                    }
                }]) && c(t.prototype, n),
                o && c(t, o),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                h
            }();
            v([(0,
            o.M)(!0)], g.prototype, "bgKey", null),
            v([(0,
            o.M)(!0)], g.prototype, "textColor", null),
            v([(0,
            o.M)(!0)], g.prototype, "textSize", null),
            v([(0,
            o.M)(!0)], g.prototype, "touchScale", null),
            window.BaseButton = g
        },
        3360: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return p
                }
            });
            n(5003),
            n(1539),
            n(9070),
            n(9653),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(8304),
            n(489),
            n(2419);
            var r = n(3783)
              , i = n(4235)
              , o = n(7045);
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function c(e, t) {
                return c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                c(e, t)
            }
            function s(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            function u(e, t) {
                if (t && ("object" === h(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return l(e)
            }
            function l(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                f(e)
            }
            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                h(e)
            }
            var d = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : h(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , p = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && c(e, t)
                }(f, eui.Image);
                var t, n, o, u = s(f);
                function f(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, f),
                    (t = u.call(this, e)).privTouchScale = .97,
                    t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, l(t)),
                    t
                }
                return t = f,
                (n = [{
                    key: "touchScale",
                    get: function() {
                        return this.privTouchScale
                    },
                    set: function(e) {
                        e !== this.privTouchScale && (this.privTouchScale = Number(e))
                    }
                }, {
                    key: "onAddToStage",
                    value: function() {
                        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this),
                        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
                        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
                    }
                }, {
                    key: "onRemoveFromStage",
                    value: function() {
                        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this),
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
                        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
                    }
                }, {
                    key: "addTouchEvent",
                    value: function() {
                        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
                    }
                }, {
                    key: "removeTouchEvent",
                    value: function() {
                        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
                    }
                }, {
                    key: "onTouchBegin",
                    value: function() {
                        this.addTouchEvent(),
                        this.originScaleX = this.scaleX,
                        this.originScaleY = this.scaleY,
                        this.scaleX = this.scaleX * this.touchScale,
                        this.scaleY = this.scaleY * this.touchScale,
                        r.j.playEffect(i.xL.CLICK)
                    }
                }, {
                    key: "onTouchEnd",
                    value: function() {
                        this.removeTouchEvent(),
                        this.scaleX = this.originScaleX,
                        this.scaleY = this.originScaleY
                    }
                }]) && a(t.prototype, n),
                o && a(t, o),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                f
            }();
            d([(0,
            o.M)(!0)], p.prototype, "touchScale", null),
            window.ImageButton = p
        },
        6779: function(e, t, n) {
            "use strict";
            n.d(t, {
                KQ: function() {
                    return s
                },
                Nu: function() {
                    return a
                },
                V6: function() {
                    return c
                },
                l9: function() {
                    return i
                }
            });
            var r, i;
            n(9070);
            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            !function(e) {
                e.PROGRESS_DEFAULT = "default",
                e.PROGRESS_GET_DEVICE_ID = "getDeviceId",
                e.PROGRESS_CHECK_LOGIN = "checkLogin",
                e.PROGRESS_LOAD_SETTING_DATA = "loadSettingData",
                e.PROGRESS_LOAD_DEFAULT_RES_JSON = "loadDefaultResJson",
                e.PROGRESS_LOAD_THEME = "loadTheme",
                e.PROGRESS_CHECK_NAVBAR_HIDE = "checkNavbarHide",
                e.PROGRESS_GET_USER_INFO = "getUserInfo",
                e.PROGRESS_REQUEST_CARD = "requestCard"
            }(i || (i = {}));
            var a = (o(r = {}, i.PROGRESS_DEFAULT, 0),
            o(r, i.PROGRESS_GET_DEVICE_ID, 1),
            o(r, i.PROGRESS_CHECK_LOGIN, 1),
            o(r, i.PROGRESS_LOAD_SETTING_DATA, 4),
            o(r, i.PROGRESS_LOAD_DEFAULT_RES_JSON, 2),
            o(r, i.PROGRESS_LOAD_THEME, 1),
            o(r, i.PROGRESS_CHECK_NAVBAR_HIDE, 1),
            o(r, i.PROGRESS_GET_USER_INFO, 5),
            o(r, i.PROGRESS_REQUEST_CARD, 1),
            r)
              , c = "progress_event_update"
              , s = "progress_event_update_scene_res"
        },
        367: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return o
                }
            });
            n(6992),
            n(1539),
            n(8674),
            n(8783),
            n(3948),
            n(1249);
            var r = n(7262)
              , i = n(6779);
            function o(e, t) {
                return Promise.all(e.map((function(e) {
                    var n;
                    return null === (n = null === e || void 0 === e ? void 0 : e.progressPromise) || void 0 === n ? void 0 : n.then((function(n) {
                        return t && t(e.progressType),
                        r.Z.dispatchEventWith(i.V6, !1, e.progressType),
                        n
                    }
                    ), (function(n) {
                        throw t && t(e.progressType),
                        n
                    }
                    ))
                }
                )))
            }
        },
        3952: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            n(2222),
            n(6699),
            n(2023),
            n(1539),
            n(9714),
            n(9070),
            n(5426);
            var r = n(923)
              , i = n(5054)
              , o = n(7075)
              , a = n(42);
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var s = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, s, u;
                return t = e,
                u = [{
                    key: "getCodeMsg",
                    value: function(e) {
                        var t = ""
                          , n = this.data[e] ? this.data[e] : "text_network_error"
                          , r = (0,
                        o.A7)(n);
                        return r && (t = "".concat(r, "(").concat(e, ")")),
                        t
                    }
                }, {
                    key: "showError",
                    value: function(e, t) {
                        switch (t || (t = i.RJ.includes(e) ? a.py.NO_RETRY : i.x8.includes(e) ? a.py.RETRY : a.py.TOAST),
                        t) {
                        case a.py.TOAST:
                            r.c.getInstance().showErrorCode(e);
                            break;
                        case a.py.RETRY:
                            this.showErrorToast(this.getCodeMsg(e), !0);
                            break;
                        case a.py.NO_RETRY:
                            this.showErrorToast(this.getCodeMsg(e), !1, !0, !0)
                        }
                    }
                }, {
                    key: "showErrorToast",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                          , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                          , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        n.g.showToast(e, t, r, i)
                    }
                }, {
                    key: "isFilterError",
                    value: function(e) {
                        for (var t = !1, n = 0, r = ["play"]; n < r.length; n++) {
                            var i = r[n];
                            if (e && e.includes(i)) {
                                t = !0;
                                break
                            }
                        }
                        return t
                    }
                }, {
                    key: "hideErrorToast",
                    value: function() {
                        n.g.hideToast()
                    }
                }, {
                    key: "initJSErrorToast",
                    value: function() {}
                }],
                (s = null) && c(t.prototype, s),
                u && c(t, u),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            s.data = i.Iv
        },
        5426: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return K
                }
            });
            n(9070),
            n(2526),
            n(1817),
            n(2165),
            n(1038),
            n(7042),
            n(4916),
            n(5666),
            n(1539),
            n(8674),
            n(6992),
            n(1532),
            n(8783),
            n(3948),
            n(9554),
            n(4747),
            n(2772),
            n(561),
            n(2707),
            n(8309),
            n(6699),
            n(2023),
            n(2222),
            n(1249);
            var r = n(2244);
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var o = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , a = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, a;
                return t = e,
                a = [{
                    key: "viewTransition",
                    value: function(e) {
                        return o(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                            var n = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise((function(t) {
                                            return n.viewTransitionEffect(e, t)
                                        }
                                        )));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))
                    }
                }, {
                    key: "sceneTransition",
                    value: function(e) {
                        return o(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                            var n = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise((function(t) {
                                            return n.sceneTransitionEffect(e, t)
                                        }
                                        )));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))
                    }
                }, {
                    key: "viewTransitionEffect",
                    value: function(e, t) {
                        switch (this.setMaskSpriteVisible(e),
                        e.effect) {
                        case r.b.CENTER_SCALE:
                            this.centreScaleTransition(e, t);
                            break;
                        case r.b.CENTER_FADE:
                            this.centreFadeTransition(e, t);
                            break;
                        case r.b.LEFT:
                            this.leftTransition(e, t);
                            break;
                        case r.b.RIGHT:
                            this.rightTransition(e, t);
                            break;
                        case r.b.TOP:
                            this.topTransition(e, t);
                            break;
                        case r.b.BOTTOM:
                            this.bottomTransition(e, t);
                            break;
                        case r.b.NONE:
                            t && t();
                            break;
                        default:
                            console.log("不支持的节点切换类型"),
                            t && t()
                        }
                    }
                }, {
                    key: "sceneTransitionEffect",
                    value: function(e, t) {
                        var n = {
                            effect: e.effect,
                            view: e.currentScene,
                            time: e.time,
                            showType: !1
                        }
                          , i = {
                            effect: e.effect,
                            view: e.newScene,
                            time: e.time,
                            showType: !0
                        };
                        switch (e.effect) {
                        case r.b.CENTER_SCALE:
                            this.centreScaleTransition(i, t);
                            break;
                        case r.b.CENTER_FADE:
                            this.centreFadeTransition(i, t);
                            break;
                        case r.b.LEFT:
                            this.rightTransition(n),
                            this.leftTransition(i, t);
                            break;
                        case r.b.RIGHT:
                            this.leftTransition(n),
                            this.rightTransition(i, t);
                            break;
                        case r.b.TOP:
                            this.bottomTransition(n),
                            this.topTransition(i, t);
                            break;
                        case r.b.BOTTOM:
                            this.topTransition(n),
                            this.bottomTransition(i, t);
                            break;
                        default:
                            console.log("不支持的节点切换类型"),
                            t && t()
                        }
                    }
                }, {
                    key: "setMaskSpriteVisible",
                    value: function(e) {
                        if (e.maskSprite) {
                            if (e.effect === r.b.NONE)
                                return e.maskSprite.removeSelf(),
                                void (e.maskSprite = null);
                            e.showType ? egret.Tween.get(e.maskSprite).to({
                                alpha: 1
                            }, 150) : egret.Tween.get(e.maskSprite).to({
                                alpha: 0
                            }, 150).call((function() {
                                e.maskSprite.removeSelf(),
                                e.maskSprite = null
                            }
                            ))
                        }
                    }
                }, {
                    key: "centreScaleTransition",
                    value: function(e, t) {
                        if (e.view) {
                            var n = e.view.width
                              , r = e.view.height
                              , i = egret.MainContext.instance.stage.stageWidth
                              , o = egret.MainContext.instance.stage.stageHeight;
                            e.view.anchorOffsetX = n / 2,
                            e.view.anchorOffsetY = r / 2,
                            e.view.x = i / 2,
                            e.view.y = o / 2,
                            e.view.alpha = e.showType ? 0 : 1,
                            e.view.scaleX = e.showType ? .5 : 1,
                            e.view.scaleY = e.showType ? .5 : 1,
                            egret.Tween.get(e.view).to({
                                alpha: e.showType ? 1 : 0,
                                scaleX: e.showType ? 1 : 0,
                                scaleY: e.showType ? 1 : 0
                            }, e.time, egret.Ease.cubicIn).call((function() {
                                t && t()
                            }
                            ))
                        } else
                            console.log("弹窗节点不存在"),
                            t && t()
                    }
                }, {
                    key: "centreFadeTransition",
                    value: function(e, t) {
                        e.view ? (e.view.alpha = e.showType ? 0 : 1,
                        egret.Tween.get(e.view).to({
                            alpha: e.showType ? 1 : 0
                        }, e.time, egret.Ease.cubicIn).call((function() {
                            t && t()
                        }
                        ))) : (console.log("弹窗节点不存在"),
                        t && t())
                    }
                }, {
                    key: "leftTransition",
                    value: function(e, t) {
                        if (e.view) {
                            var n = e.view.width
                              , r = e.view.height
                              , i = egret.MainContext.instance.stage.stageWidth
                              , o = egret.MainContext.instance.stage.stageHeight;
                            e.view.x = e.showType ? -n : i / 2 - n / 2,
                            e.view.y = o / 2 - r / 2,
                            egret.Tween.get(e.view).to({
                                x: e.showType ? i / 2 - n / 2 : -n
                            }, e.time, egret.Ease.cubicIn).call((function() {
                                t && t()
                            }
                            ))
                        } else
                            console.log("弹窗节点不存在"),
                            t && t()
                    }
                }, {
                    key: "rightTransition",
                    value: function(e, t) {
                        if (e.view) {
                            var n = e.view.width
                              , r = e.view.height
                              , i = egret.MainContext.instance.stage.stageWidth
                              , o = egret.MainContext.instance.stage.stageHeight;
                            e.view.x = e.showType ? i : i / 2 - n / 2,
                            e.view.y = o / 2 - r / 2,
                            egret.Tween.get(e.view).to({
                                x: e.showType ? i / 2 - n / 2 : i
                            }, e.time, egret.Ease.cubicIn).call((function() {
                                t && t()
                            }
                            ))
                        } else
                            console.log("弹窗节点不存在"),
                            t && t()
                    }
                }, {
                    key: "topTransition",
                    value: function(e, t) {
                        if (e.view) {
                            var n = e.view.width
                              , r = e.view.height
                              , i = egret.MainContext.instance.stage.stageWidth
                              , o = egret.MainContext.instance.stage.stageHeight;
                            e.view.x = i / 2 - n / 2,
                            e.view.y = e.showType ? -r : o / 2 - r / 2,
                            egret.Tween.get(e.view).to({
                                y: e.showType ? o / 2 - r / 2 : -r
                            }, e.time, egret.Ease.cubicIn).call((function() {
                                t && t()
                            }
                            ))
                        } else
                            console.log("弹窗节点不存在"),
                            t && t()
                    }
                }, {
                    key: "bottomTransition",
                    value: function(e, t) {
                        if (e.view) {
                            var n = e.view.width
                              , r = e.view.height
                              , i = egret.MainContext.instance.stage.stageWidth
                              , o = egret.MainContext.instance.stage.stageHeight;
                            e.view.x = i / 2 - n / 2,
                            e.view.y = e.showType ? o : o / 2 - r / 2,
                            egret.Tween.get(e.view).to({
                                y: e.showType ? o / 2 - r / 2 : o
                            }, e.time, egret.Ease.cubicIn).call((function() {
                                t && t()
                            }
                            ))
                        } else
                            console.log("弹窗节点不存在"),
                            t && t()
                    }
                }],
                (n = null) && i(t.prototype, n),
                a && i(t, a),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
              , c = n(3952)
              , s = n(3783)
              , u = n(277);
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var f = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, r;
                return t = e,
                r = [{
                    key: "setTapBack",
                    value: function(e) {
                        this.listeners.push(e),
                        (0,
                        u.S6)(e)
                    }
                }, {
                    key: "removeLastTapBack",
                    value: function() {
                        if (this.listeners.length) {
                            this.listeners.pop();
                            var e = this.listeners[this.listeners.length - 1];
                            (0,
                            u.S6)(e)
                        }
                    }
                }, {
                    key: "removeAllTapBack",
                    value: function() {
                        this.listeners = []
                    }
                }],
                (n = null) && l(t.prototype, n),
                r && l(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            f.listeners = [];
            var h = n(923)
              , d = n(2369)
              , p = n(7075)
              , v = n(4647)
              , g = n(4956)
              , m = n(4235)
              , y = n(4514)
              , _ = n(905)
              , E = n(1729)
              , b = n(741)
              , w = n(5254)
              , T = n(3399)
              , S = n(9704)
              , R = n(4433)
              , O = n(984)
              , I = n(7958)
              , x = n(7262)
              , k = n(7484)
              , C = n.n(k);
            function A(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var N, P = new (function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.endTimer = 0
                }
                var t, n, r;
                return t = e,
                (n = [{
                    key: "checkCurIsStopServer",
                    value: function() {
                        if ((0,
                        I.L1)())
                            return !1;
                        this.defaultText || (this.defaultText = (0,
                        p.Cr)());
                        var e = this.defaultText.text_server_stop_begin_time
                          , t = this.defaultText.text_server_stop_end_time
                          , n = (0,
                        O.eS)((0,
                        O.hG)(e))
                          , r = (0,
                        O.eS)((0,
                        O.hG)(t));
                        return !(!n.isValid() || !r.isValid()) && (console.log("解析后的值: bTime: ".concat(n.format("YYYY-MM-DD HH:mm:ss"), ", eTime: ").concat(r.format("YYYY-MM-DD HH:mm:ss"))),
                        this.initReloadGameTimer(r),
                        !(!C()().isAfter(n) || !C()().isBefore(r)) && (S.Z.isStopServer = !0,
                        !0))
                    }
                }, {
                    key: "initReloadGameTimer",
                    value: function(e) {
                        var t = C()().diff(e);
                        t < 0 && t > -864e5 && !this.endTimer && (this.endTimer = window.setTimeout((function() {
                            S.Z.isStopServer = !1,
                            window.location.reload()
                        }
                        ), -t))
                    }
                }, {
                    key: "checkShouldShowTips",
                    value: function() {
                        if (K.getInstance().curSceneName() !== v.J.DOWNLOAD) {
                            this.defaultText || (this.defaultText = (0,
                            p.Cr)());
                            var e = this.defaultText.text_server_stop_show_time
                              , t = this.defaultText.text_server_stop_begin_time
                              , n = this.defaultText.text_server_stop_announcement_advance;
                            e && t && this.showReadyStopTips(e, t, n)
                        }
                    }
                }, {
                    key: "showReadyStopTips",
                    value: function(e, t, n) {
                        var r = (0,
                        O.eS)((0,
                        O.hG)(e))
                          , i = (0,
                        O.eS)((0,
                        O.hG)(t));
                        r.isValid() && i.isValid() && C()().isAfter(r) && C()().isBefore(i) && x.Z.dispatchEventWith(R.e.ERROR_CODE_EVENT, !1, {
                            msg: n,
                            duration: 5e3
                        })
                    }
                }]) && A(t.prototype, n),
                r && A(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()), D = n(992), M = n(5428), j = n(209), L = n(1704), G = n(9411), H = n(1385), B = n(2687);
            function V(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return U(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return U(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return U(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function F(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function W(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var Y = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , Z = (W(N = {}, y.p.GAME_VIEW, 0),
            W(N, y.p.UI_VIEW, 100),
            W(N, y.p.POP_VIEW, 200),
            W(N, y.p.TIPS_VIEW, 300),
            N)
              , K = function() {
                function e() {
                    var t = this;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.viewStacks = [],
                    this.sceneStacks = [],
                    this.isCoverRedeemComp = !1,
                    this.isFirstChangeScene = !0,
                    this.privIsChangingScene = !1,
                    this.privIsSceneEnterCompleted = !1,
                    this.privIsLoadingTimerOn = !1,
                    this.privGroups = [],
                    this.fromSceneName = v.J.MAIN,
                    this.toSceneName = v.J.MAIN,
                    this.sceneStacksBackup = [],
                    this.isBackToLastScene = !1,
                    this.hasJumpedPRS = !1,
                    this.sceneMap = new Map,
                    this.viewInfoMap = new Map,
                    this.privIsChangingScene = !1,
                    this.loadingTimeOutTimer = new egret.Timer(6e4,1),
                    this.loadingTimeOutTimer.addEventListener(egret.TimerEvent.TIMER, this.onSceneChangeError, this),
                    f.setTapBack((function() {
                        t.onAppBack()
                    }
                    )),
                    x.Z.addEventListener(y.A, this.onSceneEnterComplete, this),
                    x.Z.addEventListener(g.PY, this.gameViewReappear, this),
                    h.c.getInstance().initEvent()
                }
                var t, i, o;
                return t = e,
                i = [{
                    key: "gameViewReappear",
                    value: function() {
                        this.hasJumpedPRS && (this.hasJumpedPRS = !1,
                        x.Z.dispatchEventWith(w.j.BACK_FROM_REDEEM))
                    }
                }, {
                    key: "removeViewStacks",
                    value: function() {
                        var e = this;
                        this.viewStacks && this.viewStacks.forEach((function(t) {
                            var n, r = null === (n = e.viewInfoMap.get(null === t || void 0 === t ? void 0 : t.hashCode)) || void 0 === n ? void 0 : n.maskSprite;
                            r && (null === r || void 0 === r || r.removeSelf()),
                            t && (null === t || void 0 === t || t.removeSelf())
                        }
                        )),
                        this.viewStacks = []
                    }
                }, {
                    key: "loadSceneJs",
                    value: function(e) {
                        return Y(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                            var r, i, o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!(r = this.sceneMap.get(e))) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", r);
                                    case 3:
                                        i = Date.now(),
                                        t.t0 = e,
                                        t.next = t.t0 === v.J.MAIN ? 7 : t.t0 === v.J.DOWNLOAD ? 12 : 17;
                                        break;
                                    case 7:
                                        return t.next = 9,
                                        Promise.all([n.e(532), n.e(658)]).then(n.bind(n, 8690));
                                    case 9:
                                        return o = t.sent,
                                        r = o.MainScene,
                                        t.abrupt("break", 17);
                                    case 12:
                                        return t.next = 14,
                                        n.e(895).then(n.bind(n, 5684));
                                    case 14:
                                        return o = t.sent,
                                        r = o.DownloadScene,
                                        t.abrupt("break", 17);
                                    case 17:
                                        return this.sceneMap.set(e, r),
                                        (0,
                                        G.f1)({
                                            type: "Performance",
                                            func: "SceneController.runScene.loadSceneJs",
                                            info: j.jW.loadSceneJs,
                                            cost: Date.now() - i
                                        }),
                                        t.abrupt("return", this.sceneMap.get(e));
                                    case 20:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )))
                    }
                }, {
                    key: "removeSceneStacks",
                    value: function() {
                        this.removeViewStacks(),
                        this.sceneStacks = []
                    }
                }, {
                    key: "onAppBack",
                    value: function() {
                        var e;
                        this.onAppBackTrack(),
                        (!this.privIsLoadingTimerOn && !this.privIsChangingScene || this.isFirstChangeScene) && (this.isCoverRedeemComp ? this.handleBackFromRedeem() : this.backView() || (console.log("view 堆栈退出", null === (e = this.sceneStacks) || void 0 === e ? void 0 : e[0]),
                        0 === this.sceneStacks.length || n.g.isExistToast() ? this.exitGame(10) : this.sceneStacks[this.sceneStacks.length - 1] === v.J.MAIN ? this.exitGame(1) : this.currentScene.onTapBack ? this.currentScene.onTapBack() : this.backScene()))
                    }
                }, {
                    key: "handleBackFromRedeem",
                    value: function() {
                        var e;
                        null === (e = this.storeComponent) || void 0 === e || e.closeStore()
                    }
                }, {
                    key: "onAppBackTrack",
                    value: function() {}
                }, {
                    key: "backScene",
                    value: function(e) {
                        this.removeViewStacks();
                        var t = this.sceneStacks.length;
                        if (this.sceneStacks[t - 1] === v.J.MAIN || this.sceneStacks.length < 2)
                            this.exitGame(3);
                        else {
                            var n = V(this.sceneStacks);
                            this.sceneStacks.pop(),
                            this.runScene(this.sceneStacks.pop(), r.b.CENTER_FADE, e, n)
                        }
                    }
                }, {
                    key: "back",
                    value: function() {
                        this.backView() || this.backScene()
                    }
                }, {
                    key: "backView",
                    value: function() {
                        for (this.resetViewStacksWithZIndex(); this.viewStacks && this.viewStacks.length; ) {
                            var e = this.viewStacks.length
                              , t = this.viewStacks[e - 1];
                            if (t && t.parent)
                                return t.onTapBack ? t.onTapBack() : this.removeView(t),
                                !0;
                            this.viewStacks.pop()
                        }
                        return !1
                    }
                }, {
                    key: "curView",
                    value: function() {
                        return this.viewStacks = this.viewStacks || [],
                        this.viewStacks[this.viewStacks.length - 1]
                    }
                }, {
                    key: "curSceneName",
                    value: function() {
                        return this.sceneStacks = this.sceneStacks || [],
                        this.sceneStacks[this.sceneStacks.length - 1]
                    }
                }, {
                    key: "backSceneName",
                    value: function() {
                        return this.sceneStacks = this.sceneStacks || [],
                        this.sceneStacks[this.sceneStacks.length - 2]
                    }
                }, {
                    key: "getGameLayer",
                    value: function() {
                        return this.currentScene ? this.currentScene.gameLayer : null
                    }
                }, {
                    key: "getUiLayer",
                    value: function() {
                        return this.currentScene ? this.currentScene.uiLayer : null
                    }
                }, {
                    key: "getPopLayer",
                    value: function() {
                        return this.currentScene ? this.currentScene.popLayer : null
                    }
                }, {
                    key: "getTipsLayer",
                    value: function() {
                        return this.currentScene ? this.currentScene.tipsLayer : null
                    }
                }, {
                    key: "setSceneTouch",
                    value: function(e) {
                        this.currentScene && (this.currentScene.touchEnabled = e,
                        this.currentScene.touchChildren = e)
                    }
                }, {
                    key: "addView",
                    value: function(e, t, n, r, i) {
                        if (e) {
                            var o = this.viewInfoMap.get(e.hashCode)
                              , c = null;
                            r || (c = (null === o || void 0 === o ? void 0 : o.maskSprite) ? o.maskSprite : this.getMaskSprite(i),
                            this.addViewToScene(c, t)),
                            this.viewInfoMap.set(e.hashCode, {
                                maskSprite: c,
                                effect: n,
                                viewType: t
                            }),
                            this.viewStacks.push(e),
                            this.addViewToScene(e, t),
                            n && a.viewTransition({
                                effect: n,
                                view: e,
                                time: 250,
                                showType: !0,
                                maskSprite: c
                            })
                        } else
                            console.error("添加View不存在")
                    }
                }, {
                    key: "removeView",
                    value: function(e, t) {
                        return Y(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                            var r, i, o;
                            return regeneratorRuntime.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (e) {
                                            n.next = 3;
                                            break
                                        }
                                        return console.error("移除View不存在"),
                                        n.abrupt("return");
                                    case 3:
                                        if (r = this.viewInfoMap.get(e.hashCode),
                                        i = null,
                                        r && (r.viewType === y.p.TIPS_VIEW && egret.Tween.removeTweens(e),
                                        t = t || r.effect,
                                        i = r.maskSprite),
                                        this.viewInfoMap.delete(e.hashCode),
                                        (o = this.viewStacks.indexOf(e)) >= 0 && this.viewStacks.splice(o, 1),
                                        !t) {
                                            n.next = 12;
                                            break
                                        }
                                        return n.next = 12,
                                        a.viewTransition({
                                            effect: t,
                                            view: e,
                                            time: 250,
                                            showType: !1,
                                            maskSprite: i
                                        });
                                    case 12:
                                        e.removeSelf(),
                                        i && !t && i.removeSelf();
                                    case 14:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, this)
                        }
                        )))
                    }
                }, {
                    key: "addViewToScene",
                    value: function(e, t) {
                        switch (t) {
                        case y.p.GAME_VIEW:
                            this.getGameLayer().addChild(e);
                            break;
                        case y.p.UI_VIEW:
                            this.getUiLayer().addChild(e);
                            break;
                        case y.p.POP_VIEW:
                            this.getPopLayer().addChild(e);
                            break;
                        case y.p.TIPS_VIEW:
                            this.getTipsLayer().addChild(e)
                        }
                    }
                }, {
                    key: "playMusic",
                    value: function(e) {
                        e = e || this.curSceneName();
                        var t = (0,
                        m.A4)(e);
                        s.j.playMusic(t)
                    }
                }, {
                    key: "getMaskSprite",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .8
                          , t = new egret.Sprite;
                        return t.graphics.beginFill(0, e),
                        t.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight),
                        t.graphics.endFill(),
                        t.touchEnabled = !0,
                        t
                    }
                }, {
                    key: "exitGame",
                    value: function(e) {
                        (0,
                        M.cM)("exitGame from  ".concat(e)),
                        (0,
                        H.WU)()
                    }
                }, {
                    key: "resetViewStacksWithZIndex",
                    value: function() {
                        var e = this;
                        this.viewStacks = this.viewStacks || [],
                        this.viewStacks.forEach((function(t) {
                            var n, r, i = t && e.viewInfoMap.get(t.hashCode);
                            if (i) {
                                var o = i.viewType
                                  , a = (null === (r = null === (n = null === t || void 0 === t ? void 0 : t.parent) || void 0 === n ? void 0 : n.$children) || void 0 === r ? void 0 : r.indexOf(t)) || 0;
                                i.zIndexHeight = a + Z[o]
                            }
                        }
                        )),
                        this.viewStacks.sort((function(t, n) {
                            var r = e.viewInfoMap.get(null === t || void 0 === t ? void 0 : t.hashCode)
                              , i = e.viewInfoMap.get(null === n || void 0 === n ? void 0 : n.hashCode);
                            return r && i ? r.zIndexHeight - i.zIndexHeight : 0
                        }
                        ))
                    }
                }, {
                    key: "runScene",
                    value: function(t, n, r, i) {
                        return Y(this, void 0, void 0, regeneratorRuntime.mark((function o() {
                            var a, c, u, l = this;
                            return regeneratorRuntime.wrap((function(o) {
                                for (; ; )
                                    switch (o.prev = o.next) {
                                    case 0:
                                        if (this.sceneStartTime = Date.now(),
                                        !this.privIsChangingScene && void 0 !== t) {
                                            o.next = 4;
                                            break
                                        }
                                        return console.warn("切换场景不存在或者正在切换场景", t, this.privIsChangingScene),
                                        o.abrupt("return");
                                    case 4:
                                        return (0,
                                        b.HQ)(b.ZG.UI_GAME_PAGE, b._9.STAGE_1, {
                                            scene: t
                                        }),
                                        this.privIsChangingScene = !0,
                                        this.privIsLoadingTimerOn = !1,
                                        this.privIsSceneEnterCompleted = !1,
                                        D.D.clearSceneBgInfo(),
                                        this.setSceneTouch(!1),
                                        (0,
                                        M.cM)("切换场景:".concat(t)),
                                        this.changeSceneParams = {
                                            sceneName: t,
                                            effect: n,
                                            params: r
                                        },
                                        egret.Tween.removeTweens(this.mainStage),
                                        egret.Tween.get(this.mainStage).wait(100).call((function() {
                                            l.showTransformLoadingTimer(),
                                            s.j.stopAllEffect()
                                        }
                                        )),
                                        this.loadingTimeOutTimer.reset(),
                                        this.loadingTimeOutTimer.start(),
                                        a = e.getInstance().curSceneName(),
                                        this.preScene = this.currentScene,
                                        a && t !== a && (c = RES.config.config.loadGroup,
                                        this.privGroups = V(c)),
                                        this.fromSceneName = this.toSceneName || this.changeSceneParams.sceneName,
                                        this.toSceneName = this.changeSceneParams.sceneName,
                                        this.sceneStacksBackup = i || V(this.sceneStacks),
                                        o.prev = 23,
                                        u = Date.now(),
                                        o.next = 27,
                                        Promise.all([(0,
                                        L.l3)(t), this.preloadSceneJs(t)]);
                                    case 27:
                                        return (0,
                                        b.HQ)(b.ZG.UI_GAME_PAGE, b._9.STAGE_2, {
                                            scene: t
                                        }),
                                        (0,
                                        G.f1)({
                                            type: "Performance",
                                            func: "SceneController.runScene.preloadSceneGroup",
                                            info: j.jW.preloadSceneGroup,
                                            cost: Date.now() - u
                                        }),
                                        o.next = 31,
                                        this.preChangeScene();
                                    case 31:
                                        Benchmark.changeScene("game_bingo_".concat(t)),
                                        (0,
                                        b.HQ)(b.ZG.UI_GAME_PAGE, b._9.STAGE_3, {
                                            scene: t
                                        }),
                                        o.next = 42;
                                        break;
                                    case 35:
                                        if (o.prev = 35,
                                        o.t0 = o.catch(23),
                                        this.isFinishFirstInteractive()) {
                                            o.next = 39;
                                            break
                                        }
                                        throw o.t0;
                                    case 39:
                                        (0,
                                        M.fZ)("切换场景 加载".concat(t, "场景资源 fail"), o.t0),
                                        (0,
                                        M.p_)("切换场景 加载".concat(t, "场景资源 fail")),
                                        this.onSceneChangeError();
                                    case 42:
                                    case "end":
                                        return o.stop()
                                    }
                            }
                            ), o, this, [[23, 35]])
                        }
                        )))
                    }
                }, {
                    key: "preChangeScene",
                    value: function() {
                        return Y(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t, n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("preChangeScene", this.changeSceneParams.sceneName),
                                        this.playMusic(this.changeSceneParams.sceneName),
                                        E.Z.preChangeScene(),
                                        this.removeViewStacks(),
                                        e.next = 6,
                                        this.preloadSceneJs(this.changeSceneParams.sceneName);
                                    case 6:
                                        if (t = e.sent,
                                        n = new t(this.changeSceneParams.params),
                                        this.sceneStacks.push(this.changeSceneParams.sceneName),
                                        this.currentScene = n,
                                        n.visible = !1,
                                        this.mainStage.addChild(n),
                                        this.mainStage.sortChildren(),
                                        !this.changeSceneParams.params || n.onEnterScene) {
                                            e.next = 15;
                                            break
                                        }
                                        throw "".concat(this.changeSceneParams.sceneName, " function onEnterScene未实现");
                                    case 15:
                                        if (e.t0 = n.onEnterScene,
                                        !e.t0) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 19,
                                        n.onEnterScene(this.changeSceneParams.params);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "preloadSceneJs",
                    value: function(e) {
                        return Y(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                        t.next = 3,
                                        this.loadSceneJs(e);
                                    case 3:
                                        n = t.sent,
                                        t.next = 13;
                                        break;
                                    case 6:
                                        return t.prev = 6,
                                        t.t0 = t.catch(0),
                                        console.error(e, t.t0),
                                        (0,
                                        M.p_)("切换场加载js失败: ".concat(e, ", 触发重试js加载")),
                                        t.next = 12,
                                        this.loadSceneJs(e);
                                    case 12:
                                        n = t.sent;
                                    case 13:
                                        return t.abrupt("return", n);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this, [[0, 6]])
                        }
                        )))
                    }
                }, {
                    key: "onSceneEnterComplete",
                    value: function() {
                        var e, t, r, i, o = this;
                        P.checkShouldShowTips(),
                        this.privIsSceneEnterCompleted = !0,
                        this.privIsLoadingTimerOn || this.changeScene(),
                        null === (t = null === (e = null === n.g || void 0 === n.g ? void 0 : n.g.performance) || void 0 === e ? void 0 : e.setResourceTimingBufferSize) || void 0 === t || t.call(e, 500),
                        !n.g.logResource && (n.g.logResource = []);
                        var a = null === (i = null === (r = null === n.g || void 0 === n.g ? void 0 : n.g.performance) || void 0 === r ? void 0 : r.getEntriesByType) || void 0 === i ? void 0 : i.call(r, "resource");
                        if (a) {
                            n.g.logResource.length > 1 && n.g.logResource.splice(0, n.g.logResource.length - 1);
                            var c = n.g.logResource[0] || [];
                            c.length !== a.length && (a.forEach((function(e) {
                                if (o.isReportResource(e, c)) {
                                    var t = e.responseStart
                                      , n = e.requestStart
                                      , r = e.name
                                      , i = t - n
                                      , a = 0 !== t;
                                    (0,
                                    B.Sh)(r, a ? B.iO.success : B.iO.failure, i, a ? 10 : 1)
                                }
                            }
                            )),
                            a && n.g.logResource.push(a))
                        }
                    }
                }, {
                    key: "isReportResource",
                    value: function(e, t) {
                        var n = e.responseStart
                          , r = e.name
                          , i = e.transferSize
                          , o = e.decodedBodySize
                          , a = e.encodedBodySize
                          , c = e.workerStart
                          , s = e.initiatorType;
                        if ("img" !== s && "audio" !== s)
                            return !1;
                        if (!(r.indexOf("games.deo.shopeemobile.com/shopee/mkt/games/") > 0 || r.indexOf("cf.shopee.") > 0))
                            return !1;
                        var u = 0 !== n;
                        return (!u || !(c > 0 || 0 === i || 0 === o && 0 === a)) && !(!u && r.indexOf("timestamp=") > -1) && !t.includes(e)
                    }
                }, {
                    key: "changeScene",
                    value: function() {
                        return Y(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this.curSceneName(),
                                        this.currentScene.visible = !0,
                                        !this.changeSceneParams.effect) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5,
                                        a.sceneTransition({
                                            currentScene: this.preScene,
                                            effect: this.changeSceneParams.effect,
                                            newScene: this.currentScene,
                                            time: 500
                                        });
                                    case 5:
                                        this.releasePreScene(),
                                        h.c.getInstance().hideLoading(),
                                        this.privIsChangingScene = !1,
                                        this.privIsLoadingTimerOn = !1,
                                        this.privIsSceneEnterCompleted = !1,
                                        this.isBackToLastScene = !1,
                                        this.loadingTimeOutTimer.stop(),
                                        this.sceneStacksBackup = [],
                                        console.log("[from] => ".concat(this.fromSceneName, ",[to]=> ").concat(this.toSceneName)),
                                        (0,
                                        L.nZ)(this.fromSceneName, this.toSceneName),
                                        x.Z.dispatchEventWith(g.LM),
                                        (0,
                                        G.f1)({
                                            type: "Performance",
                                            func: "runScene",
                                            info: "".concat(j.jW.changeScene),
                                            cost: Date.now() - this.sceneStartTime
                                        }),
                                        (0,
                                        G.j)({
                                            operation: _.Un.IMPRESSION,
                                            page_type: _.Wh.GAME_BINGO_MAIN_PAGE,
                                            page_section: _.aT.LOADING,
                                            data: {
                                                scene_name: t,
                                                loading_time: Date.now() - this.sceneStartTime
                                            }
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "showTransformLoadingTimer",
                    value: function() {
                        var e = this;
                        this.privIsChangingScene && !this.privIsSceneEnterCompleted && this.preScene && (this.releasePreScene(),
                        h.c.getInstance().showLoading(!0, !1, 7700288, !0),
                        egret.Tween.removeTweens(this.mainStage),
                        egret.Tween.get(this.mainStage).wait(500).call((function() {
                            e.showTransformLoadingEndTimer()
                        }
                        )),
                        this.privIsLoadingTimerOn = !0)
                    }
                }, {
                    key: "releasePreScene",
                    value: function() {
                        this.preScene && (this.preScene.removeSelf(),
                        this.preScene = null,
                        this.removePreSceneTweens(),
                        (T.x.sceneDragonFacMap.get(this.fromSceneName) || []).forEach((function(e) {
                            var t;
                            null === (t = e.dbFac) || void 0 === t || t.clear()
                        }
                        )),
                        T.x.sceneDragonFacMap.delete(this.fromSceneName))
                    }
                }, {
                    key: "showTransformLoadingEndTimer",
                    value: function() {
                        this.privIsLoadingTimerOn = !1,
                        egret.Tween.removeTweens(this.mainStage),
                        this.privIsChangingScene && this.privIsSceneEnterCompleted && this.changeScene()
                    }
                }, {
                    key: "isCurrentScene",
                    value: function(e) {
                        return this.curSceneName() === e
                    }
                }, {
                    key: "destroyNotKeepRes",
                    value: function(e, t) {
                        this.curSceneName() === e && t.length > 0 && t.map((function(e) {
                            return RES.destroyRes(e, !0)
                        }
                        )) && (d.Xc[e] = [])
                    }
                }, {
                    key: "breakChangingScene",
                    value: function() {
                        this.privIsChangingScene = !1,
                        this.privIsLoadingTimerOn = !1,
                        this.loadingTimeOutTimer.stop(),
                        egret.Tween.removeTweens(this.mainStage)
                    }
                }, {
                    key: "isFinishFirstInteractive",
                    value: function() {
                        return (0,
                        G.vn)("first_interactive") > 0
                    }
                }, {
                    key: "onSceneChangeError",
                    value: function() {
                        console.warn("切换场景发生错误"),
                        c.Z.showErrorToast((0,
                        p.A7)("text_network_error"), !0, !0),
                        this.loadingTimeOutTimer.stop()
                    }
                }, {
                    key: "removePreSceneTweens",
                    value: function() {
                        (egret.Tween._tweens || []).forEach((function(e) {
                            var t;
                            !(null === (t = null === e || void 0 === e ? void 0 : e._target) || void 0 === t ? void 0 : t.$hasAddToStage) && egret.Tween.removeTweens(e._target)
                        }
                        ))
                    }
                }, {
                    key: "hasPopView",
                    value: function() {
                        var e;
                        return (null === (e = this.viewStacks) || void 0 === e ? void 0 : e.length) > 0
                    }
                }],
                o = [{
                    key: "getInstance",
                    value: function() {
                        return this.instance || (this.instance = new e),
                        this.instance
                    }
                }],
                i && F(t.prototype, i),
                o && F(t, o),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
        },
        3783: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return u
                }
            });
            n(9070);
            var r = n(4235)
              , i = n(5428)
              , o = n(3969)
              , a = n(5619)
              , c = n(2054);
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var u = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, u;
                return t = e,
                u = [{
                    key: "init",
                    value: function(t) {
                        var n = this
                          , i = a.zE;
                        t.addEventListener(egret.Event.ACTIVATE, i.onActive, i),
                        t.addEventListener(egret.Event.DEACTIVATE, i.onDeActive, i),
                        t.once(egret.TouchEvent.TOUCH_TAP, (function() {
                            n.isTouchBegin = !0,
                            console.log("[debug]允许播放背景音乐")
                        }
                        ), this),
                        !1 === (0,
                        o.rV)(r.s9, {
                            activity: !1,
                            event: !1,
                            user: !1
                        }) ? e.close() : e.open()
                    }
                }, {
                    key: "mute",
                    get: function() {
                        return this.personalMute
                    },
                    set: function(e) {
                        this.personalMute = e
                    }
                }, {
                    key: "setPlayEffect",
                    value: function(e) {
                        this.isPlayEffect = e
                    }
                }, {
                    key: "open",
                    value: function() {
                        e.musicOpen = !0,
                        a.zE.isMute = !1
                    }
                }, {
                    key: "close",
                    value: function() {
                        e.musicOpen = !1,
                        a.zE.isMute = !0
                    }
                }, {
                    key: "playMusic",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5
                          , n = arguments.length > 2 ? arguments[2] : void 0;
                        if (e !== this.bgMusicName)
                            try {
                                a.zE.playBgMusic([e], null, null, n),
                                a.zE.musicVolume = t,
                                this.bgMusicName = e
                            } catch (r) {
                                (0,
                                i.cM)("播放背景音效失败：".concat(e))
                            }
                    }
                }, {
                    key: "stopMusic",
                    value: function() {
                        try {
                            a.zE.stopBgMusic(),
                            this.bgMusicName = null
                        } catch (e) {
                            (0,
                            i.cM)("停止播放背景音效失败")
                        }
                    }
                }, {
                    key: "playEffect",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Z
                          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        if (e && this.isPlayEffect)
                            try {
                                a.zE.playSound(e, t, r, n)
                            } catch (o) {
                                (0,
                                i.cM)("播放音效失败：".concat(e))
                            }
                    }
                }, {
                    key: "playCommonlyEffect",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Z;
                        if (e && this.isPlayEffect)
                            try {
                                return void a.zE.playSound(e, t, 0, n)
                            } catch (r) {
                                (0,
                                i.cM)("播放音效失败：".concat(e))
                            }
                    }
                }, {
                    key: "stopCommonlyEffect",
                    value: function(e) {
                        e && this.isPlayEffect && this.activeSoundChannel[e] && (this.activeSoundChannel[e].stop(),
                        this.activeSoundChannel[e] = null)
                    }
                }, {
                    key: "stopEffect",
                    value: function(e) {
                        try {
                            !this.activeSoundChannel[e] && a.zE.stopSound(e)
                        } catch (t) {
                            (0,
                            i.cM)("停止播放音效失败：".concat(e))
                        }
                    }
                }, {
                    key: "stopAllEffect",
                    value: function() {
                        try {
                            a.zE.stopSounds()
                        } catch (e) {
                            (0,
                            i.cM)("停止播放所有音效失败")
                        }
                    }
                }, {
                    key: "pauseBgMusic",
                    value: function() {
                        a.zE.onDeActive()
                    }
                }, {
                    key: "resumeBgMusic",
                    value: function() {
                        a.zE.onActive()
                    }
                }, {
                    key: "playEffectWhileNotPlaying",
                    value: function(t) {
                        !a.zE.isSoundPlaying(t) && e.playEffect(t)
                    }
                }, {
                    key: "stopAndPlayEffect",
                    value: function(t) {
                        a.zE.isSoundPlaying(t) && e.stopEffect(t),
                        e.playEffect(t)
                    }
                }, {
                    key: "bgMusicPosition",
                    get: function() {
                        return a.zE.bgMusicPosition
                    }
                }],
                (n = null) && s(t.prototype, n),
                u && s(t, u),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            u.canPlay = !1,
            u.isTouchBegin = !0,
            u.bgMusicName = null,
            u.isPlayEffect = !0,
            u.activeSoundChannel = {},
            u.musicOpen = !0
        },
        923: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return he
                }
            });
            n(1539),
            n(8674),
            n(9070),
            n(5003),
            n(8309),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(8304),
            n(489),
            n(2419);
            var r = n(7997)
              , i = n(5426)
              , o = n(7075)
              , a = n(7955)
              , c = n(992)
              , s = n(8923);
            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function l(e, t) {
                return l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                l(e, t)
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            function h(e, t) {
                if (t && ("object" === p(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                d(e)
            }
            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                p(e)
            }
            var v = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : p(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , g = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && l(e, t)
                }(h, e);
                var t, n, r, s = f(h);
                function h(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, h),
                    (t = s.call(this, e)).tipsView = a.y.CONFIRM,
                    t.params = e,
                    t.skinName = skins.TipsSkin,
                    t.name = "ConfirmTipsView",
                    t
                }
                return t = h,
                (n = [{
                    key: "onEnter",
                    value: function() {
                        c.D.adjustFullSize(this);
                        var e = this.params;
                        this.currentState = "confirm",
                        this.validateNow(),
                        e && (this.cancelCallFunc = e.cancelCallFunc,
                        this.confirmCallFunc = e.confirmCallFunc,
                        this.tapBackCallFunc = e.tapBackCallFunc || e.cancelCallFunc,
                        this.btnConfirm.label = (0,
                        o.A7)("text_button_confirm"),
                        this.btnCancel.label = (0,
                        o.A7)("text_button_cancel"),
                        this.txtTitle.text = (0,
                        o.A7)("text_error_popup_title"),
                        e.txtConfirm && (this.btnConfirm.label = e.txtConfirm,
                        this.btnConfirm.iconDisplay.source = (null === e || void 0 === e ? void 0 : e.isCoinPay) ? "image_coins1" : ""),
                        e.txtCancel && (this.btnCancel.label = e.txtCancel),
                        e.isHideCancel && this.btnCancel.removeSelf(),
                        e.itemDisplay ? this.gpItem.addChild(e.itemDisplay) : this.gpItem.removeSelf(),
                        e.titleTxt && (this.txtTitle.text = e.titleTxt),
                        e.contentTxt ? this.txtContent.text = e.contentTxt : this.txtContent.removeSelf(),
                        e.isHideEmoji && this.emoji.removeSelf())
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        switch (e.target) {
                        case this.btnConfirm:
                            this.onTapOk();
                            break;
                        case this.btnCancel:
                        case this.btnCoinCancel:
                            this.onTapCancel()
                        }
                    }
                }, {
                    key: "onTapCancel",
                    value: function() {
                        this.tapBackCallFunc = null,
                        i.E.getInstance().back(),
                        this.cancelCallFunc && (this.cancelCallFunc(),
                        this.cancelCallFunc = null,
                        this.confirmCallFunc = null)
                    }
                }, {
                    key: "onTapOk",
                    value: function() {
                        this.tapBackCallFunc = null,
                        i.E.getInstance().back(),
                        this.confirmCallFunc && (this.confirmCallFunc(),
                        this.confirmCallFunc = null,
                        this.cancelCallFunc = null)
                    }
                }, {
                    key: "onTapBack",
                    value: function() {
                        this.tapBackCallFunc && this.tapBackCallFunc(),
                        i.E.getInstance().removeView(this)
                    }
                }]) && u(t.prototype, n),
                r && u(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                h
            }(s.Z);
            function m(e) {
                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                m(e)
            }
            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function _(e, t) {
                return _ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                _(e, t)
            }
            function E(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = w(e);
                    if (t) {
                        var i = w(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            function b(e, t) {
                if (t && ("object" === m(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function w(e) {
                return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                w(e)
            }
            v([(0,
            r.P2)()], g.prototype, "onClick", null);
            var T = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && _(e, t)
                }(o, e);
                var t, n, r, i = E(o);
                function o(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    (t = i.call(this, e)).tipsView = a.y.LOADING,
                    t.skinName = skins.TipsSkin,
                    t.currentState = "loading",
                    t.name = "LoadingView",
                    t.params = e,
                    t
                }
                return t = o,
                (n = [{
                    key: "onEnter",
                    value: function() {
                        var e, t = this.params;
                        this.validateNow(),
                        t && (this.imgLoading.source = "image_loading5",
                        this.txtLoadingMsg.text = t.msg || "Loading...",
                        this.txtLoadingMsg.textColor = null !== (e = null === t || void 0 === t ? void 0 : t.textColor) && void 0 !== e ? e : 16777215,
                        t.isTranslucent || (this.bgMask.fillColor = 2860480,
                        this.bgMask.fillAlpha = .59)),
                        this.showLoading(),
                        c.D.adjustFullSize(this)
                    }
                }, {
                    key: "showLoading",
                    value: function() {
                        egret.Tween.removeTweens(this.imgLoading);
                        var e = egret.Tween.get(this.imgLoading, {
                            loop: !0
                        });
                        this.imgLoading.rotation = 0,
                        e.to({
                            rotation: -10
                        }, 100).to({
                            rotation: 10
                        }, 200).to({
                            rotation: 0
                        }, 100).wait(500)
                    }
                }, {
                    key: "onDestroy",
                    value: function() {
                        egret.Tween.removeTweens(this.imgLoading)
                    }
                }]) && y(t.prototype, n),
                r && y(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                o
            }(s.Z)
              , S = (n(5666),
            n(6097))
              , R = n(893);
            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function I(e, t) {
                return I = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                I(e, t)
            }
            function x(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = C(e);
                    if (t) {
                        var i = C(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return k(this, n)
                }
            }
            function k(e, t) {
                if (t && ("object" === A(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function C(e) {
                return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                C(e)
            }
            function A(e) {
                return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                A(e)
            }
            var N = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : A(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , P = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , D = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && I(e, t)
                }(a, e);
                var t, n, r, o = x(a);
                function a(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, a),
                    (t = o.call(this, e)).params = e || {},
                    t
                }
                return t = a,
                (n = [{
                    key: "onEnter",
                    value: function() {
                        var e;
                        return P(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                            var n = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return c.D.adjustFullSize(this),
                                        t.next = 3,
                                        Promise.all([RES.getResAsync("image_native_abnomal"), RES.getResAsync("image_native_btn_yellow")]);
                                    case 3:
                                        this.initUI(),
                                        (null === (e = this.params) || void 0 === e ? void 0 : e.allShow) || egret.Tween.get(this).wait(6e4).call((function() {
                                            n.removeSelf()
                                        }
                                        ));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )))
                    }
                }, {
                    key: "initUI",
                    value: function() {
                        var e, t, n, r, i = (0,
                        R.rl)(this.width, this.height, 0, .8);
                        i.touchEnabled = !0,
                        this.addChild(i);
                        var o = new eui.Group;
                        o.horizontalCenter = "0",
                        o.verticalCenter = "0",
                        this.addChild(o);
                        var a = new eui.Image;
                        a.texture = RES.getRes("image_native_abnomal"),
                        a.horizontalCenter = 0,
                        a.verticalCenter = 0,
                        a.minWidth = 240,
                        o.addChild(a);
                        var c = new eui.Label;
                        c.text = this.params.msg ? this.params.msg : window.localText.badNetwork,
                        c.horizontalCenter = "0",
                        c.verticalCenter = 70,
                        c.textAlign = "center",
                        c.lineSpacing = 15,
                        c.maxWidth = 530,
                        c.textColor = 8867073,
                        o.addChild(c),
                        this.params.isRetry ? (this.btnRetry = this.createBtn(),
                        this.btnRetry.label = null !== (t = null === (e = this.params) || void 0 === e ? void 0 : e.txtRetry) && void 0 !== t ? t : window.localText.retry,
                        o.addChild(this.btnRetry)) : this.params.isClose && (this.btnClose = this.createBtn(),
                        this.btnClose.label = null !== (r = null === (n = this.params) || void 0 === n ? void 0 : n.txtRetry) && void 0 !== r ? r : window.localText.close,
                        o.addChild(this.btnClose))
                    }
                }, {
                    key: "createBtn",
                    value: function() {
                        var e = new S.Y
                          , t = new eui.Image;
                        t.texture = RES.getRes("image_native_btn_yellow"),
                        t.scale9Grid = new egret.Rectangle(80,29,79,28),
                        t.left = -30,
                        t.right = -30,
                        e.addChild(t);
                        var n = new eui.Label;
                        return n.size = 38,
                        n.textColor = 8867073,
                        n.verticalAlign = "middle",
                        n.verticalCenter = 0,
                        n.horizontalCenter = 0,
                        n.touchEnabled = !1,
                        n.wordWrap = !0,
                        n.height = 46,
                        e.addChild(n),
                        e.labelDisplay = n,
                        e.horizontalCenter = 0,
                        e.bottom = 50,
                        e
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        var t, n;
                        switch (e.target) {
                        case this.btnRetry:
                            this.removeSelf(),
                            (null === (t = this.params) || void 0 === t ? void 0 : t.retryCallFunc) ? null === (n = this.params) || void 0 === n || n.retryCallFunc() : window.location.reload();
                            break;
                        case this.btnClose:
                            i.E.getInstance().exitGame(0)
                        }
                    }
                }, {
                    key: "onDestroy",
                    value: function() {
                        egret.Tween.removeTweens(this)
                    }
                }]) && O(t.prototype, n),
                r && O(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(s.Z);
            function M(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function j(e, t) {
                return j = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                j(e, t)
            }
            function L(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = H(e);
                    if (t) {
                        var i = H(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return G(this, n)
                }
            }
            function G(e, t) {
                if (t && ("object" === B(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function H(e) {
                return H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                H(e)
            }
            function B(e) {
                return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                B(e)
            }
            N([(0,
            r.P2)()], D.prototype, "onClick", null);
            var V = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : B(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , U = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && j(e, t)
                }(a, e);
                var t, n, r, i = L(a);
                function a(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, a),
                    (t = i.call(this)).skinName = skins.NoticeTipsViewSkin,
                    t.data = e,
                    t
                }
                return t = a,
                (n = [{
                    key: "onEnter",
                    value: function() {
                        this.initUI(),
                        c.D.adjustFullSize(this)
                    }
                }, {
                    key: "initUI",
                    value: function() {
                        var e, t, n, r;
                        (0,
                        R.Yk)(this.txtMsg, null !== (t = null === (e = this.data) || void 0 === e ? void 0 : e.msg) && void 0 !== t ? t : (0,
                        o.A7)("text_pre_notice"), 440),
                        this.txtBtn.text = null !== (r = null === (n = this.data) || void 0 === n ? void 0 : n.txtBtn) && void 0 !== r ? r : (0,
                        o.A7)("text_button_reload"),
                        !this.data.isShowBtn && this.gpButton.removeSelf()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {}
                }, {
                    key: "onClick",
                    value: function(e) {
                        var t;
                        e.target === this.btnOk && ((null === (t = this.data) || void 0 === t ? void 0 : t.buttonCallFunc) ? this.data.buttonCallFunc() : window.location.reload())
                    }
                }]) && M(t.prototype, n),
                r && M(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                a
            }(s.Z);
            function F(e) {
                return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                F(e)
            }
            function W(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function Y(e, t) {
                return Y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Y(e, t)
            }
            function Z(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = J(e);
                    if (t) {
                        var i = J(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return K(this, n)
                }
            }
            function K(e, t) {
                if (t && ("object" === F(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function J(e) {
                return J = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                J(e)
            }
            V([(0,
            r.P2)()], U.prototype, "onClick", null);
            var z, X = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Y(e, t)
                }(o, e);
                var t, n, r, i = Z(o);
                function o(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    (t = i.call(this)).tipsView = a.y.ERROR,
                    t.skinName = skins.TipsSkin,
                    t.currentState = "talkTips",
                    t.setTalkText(e),
                    t.name = "TalkTipsView",
                    t
                }
                return t = o,
                (n = [{
                    key: "setTalkText",
                    value: function(e) {
                        this.txtTalk.text = e || ""
                    }
                }, {
                    key: "setTipsScale",
                    value: function(e) {
                        this.imgTalk.anchorOffset(this.imgTalk.width / 2, this.imgTalk.height / 2),
                        this.imgTalk.scaleX = e
                    }
                }]) && W(t.prototype, n),
                r && W(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                o
            }(s.Z);
            function $(e) {
                return $ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                $(e)
            }
            function q(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function Q(e, t) {
                return Q = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Q(e, t)
            }
            function ee(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = re(e);
                    if (t) {
                        var i = re(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return te(this, n)
                }
            }
            function te(e, t) {
                if (t && ("object" === $(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return ne(e)
            }
            function ne(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function re(e) {
                return re = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                re(e)
            }
            !function(e) {
                e.NORMAL = "toast",
                e.BLACK = "blackToast"
            }(z || (z = {}));
            var ie = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Q(e, t)
                }(o, e);
                var t, n, r, i = ee(o);
                function o(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    (t = i.call(this, e)).tipsView = a.y.TOAST,
                    t.skinName = skins.TipsSkin,
                    t.currentState = e.tipsState || z.NORMAL,
                    c.D.adjustFullSize(ne(t)),
                    t.name = "ToastTipsView",
                    t.params = e,
                    t
                }
                return t = o,
                (n = [{
                    key: "onEnter",
                    value: function() {
                        var e = this.params;
                        this.validateNow(),
                        e && (this.textColor = e.textColor || 16777215,
                        e.textFlow ? this.setRichText(e.textFlow) : this.setMsgText(e.msg)),
                        450 < this.txtToastMsg.width && (this.txtToastMsg.width = 450,
                        this.imgToastBg.height = this.txtToastMsg.height + 30),
                        this.imgToastBg.width = this.txtToastMsg.width + 70
                    }
                }, {
                    key: "setMsgText",
                    value: function(e) {
                        this.txtToastMsg.wordWrap = !0,
                        this.txtToastMsg.text = e,
                        this.txtToastMsg.textColor = this.textColor
                    }
                }, {
                    key: "setRichText",
                    value: function(e) {
                        this.txtToastMsg.textFlow = e,
                        this.txtToastMsg.wordWrap = !0,
                        this.txtToastMsg.textColor = this.textColor
                    }
                }]) && q(t.prototype, n),
                r && q(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                o
            }(s.Z)
              , oe = n(3952)
              , ae = n(4514)
              , ce = n(4433)
              , se = n(2244)
              , ue = n(7262);
            function le(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var fe = 6e6
              , he = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.loadingTimer = NaN
                }
                var t, r, c;
                return t = e,
                r = [{
                    key: "initEvent",
                    value: function() {
                        ue.Z.addEventListener(ce.e.ERROR_CODE_EVENT, this.onShowTips, this)
                    }
                }, {
                    key: "onShowTips",
                    value: function(e) {
                        var t = e.data
                          , n = t.msg
                          , r = t.duration;
                        this.showToastTips(n, null, null, null, r)
                    }
                }, {
                    key: "showErrorMsg",
                    value: function(e) {
                        var t = this;
                        this.curTipsView && this.curTipsView.$hasAddToStage || (this.curTipsView = new ie({
                            msg: e
                        }),
                        i.E.getInstance().addView(this.curTipsView, ae.p.TIPS_VIEW, se.b.CENTER_FADE, !0),
                        egret.Tween.get(this.curTipsView).wait(2e3).call((function() {
                            i.E.getInstance().removeView(t.curTipsView),
                            t.curTipsView = null
                        }
                        )))
                    }
                }, {
                    key: "showPromiseErrorCode",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(n) {
                            if (t.showErrorCode(e),
                            !t.curTipsView)
                                return n();
                            egret.Tween.get(t.curTipsView).wait(2e3).call((function() {
                                n()
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "showErrorCode",
                    value: function(e) {
                        return this.showErrorMsg(oe.Z.getCodeMsg(e))
                    }
                }, {
                    key: "showLoading",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                          , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215
                          , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        this.loadingTimer && (egret.clearTimeout(this.loadingTimer),
                        this.loadingTimer = NaN),
                        this.loadingView || (this.loadingView = new T({
                            isTop: e,
                            msg: (0,
                            o.A7)("text_loading"),
                            textColor: n,
                            isShowReturn: r,
                            isTranslucent: t
                        }));
                        var i = egret.MainContext.instance.stage;
                        e ? i.addChildAt(this.loadingView, a.I.NOTICE) : i.addChildAt(this.loadingView, 0),
                        this.loadingTimer = egret.setTimeout(this.hideLoading, this, fe),
                        i.sortChildren()
                    }
                }, {
                    key: "showLoadingWithDelay",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                          , r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                          , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16777215
                          , o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        this.loadingTimer && (egret.clearTimeout(this.loadingTimer),
                        this.loadingTimer = NaN),
                        this.loadingTimer = egret.setTimeout((function() {
                            return t.showLoading(n, r, i, o)
                        }
                        ), this, e)
                    }
                }, {
                    key: "hideLoading",
                    value: function() {
                        this.loadingTimer && (egret.clearTimeout(this.loadingTimer),
                        this.loadingTimer = NaN),
                        this.loadingView && (this.loadingView.removeSelf(),
                        this.loadingView = null)
                    }
                }, {
                    key: "showToastTips",
                    value: function(e, t, n, r) {
                        var o, a = this, c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2e3, s = i.E.getInstance().currentScene;
                        if (s && !(null === (o = this.curTipsView) || void 0 === o ? void 0 : o.$hasAddToStage)) {
                            this.curTipsView && (egret.Tween.removeTweens(this.curTipsView),
                            this.curTipsView = null),
                            this.curTipsView = new ie({
                                msg: e,
                                textFlow: t,
                                textColor: n,
                                tipsState: r
                            }),
                            s.tipsLayer.addChild(this.curTipsView);
                            var u = egret.Tween.get(this.curTipsView);
                            this.curTipsView.y = 100,
                            this.curTipsView.alpha = 0,
                            u.to({
                                y: 0,
                                alpha: 1
                            }, 200).wait(c).to({
                                y: -100,
                                alpha: 0
                            }, 150).call((function() {
                                a.curTipsView && a.curTipsView.removeSelf(),
                                a.curTipsView = null
                            }
                            ))
                        }
                    }
                }, {
                    key: "showConfirmTips",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ae.p.POP_VIEW
                          , n = i.E.getInstance().currentScene;
                        if (n) {
                            var r = new g(e);
                            i.E.getInstance().addView(r, t, se.b.CENTER_SCALE)
                        }
                    }
                }, {
                    key: "getTalkTips",
                    value: function(e) {
                        return new X(e)
                    }
                }, {
                    key: "showMonsterTips",
                    value: function(e, t) {
                        var r, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (!(null === (r = this.monsterView) || void 0 === r ? void 0 : r.parent)) {
                            var c = new D({
                                msg: e,
                                isRetry: t,
                                allShow: i,
                                isClose: o
                            })
                              , s = egret.MainContext.instance.stage;
                            c.zIndex = a.I.MONSTER,
                            s.addChild(c),
                            s.sortChildren(),
                            this.monsterView = c,
                            n.g.isTipError = !0
                        }
                    }
                }, {
                    key: "hideMonsterTips",
                    value: function() {
                        var e, t = null === (e = this.monsterView) || void 0 === e ? void 0 : e.parent;
                        t && (t.removeChild(this.monsterView),
                        this.monsterView = null,
                        n.g.isTipError = !1)
                    }
                }, {
                    key: "showNoticeMsg",
                    value: function(e) {
                        this.noticeView || (this.noticeView = new U(e),
                        this.noticeView.zIndex = a.I.NOTICE,
                        egret.MainContext.instance.stage.addChild(this.noticeView))
                    }
                }, {
                    key: "showStageToastTips",
                    value: function(e, t, n, r) {
                        var i = this;
                        n = n || 8867073,
                        this.curTipsView && this.curTipsView.$hasAddToStage || (this.curTipsView = new ie({
                            msg: e,
                            textFlow: t,
                            textColor: n,
                            tipsState: r
                        }),
                        this.curTipsView.zIndex = a.I.NOTICE,
                        egret.MainContext.instance.stage.addChild(this.curTipsView),
                        egret.Tween.get(this.curTipsView).set({
                            y: 100,
                            alpha: 0
                        }).to({
                            y: 0,
                            alpha: 1
                        }, 200).wait(2e3).to({
                            y: -100,
                            alpha: 0
                        }, 150).call((function() {
                            i.curTipsView && i.curTipsView.removeSelf(),
                            i.curTipsView = null
                        }
                        )))
                    }
                }],
                c = [{
                    key: "getInstance",
                    value: function() {
                        return this.instance || (this.instance = new e),
                        this.instance
                    }
                }],
                r && le(t.prototype, r),
                c && le(t, c),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
        },
        6811: function(e, t, n) {
            "use strict";
            n(8100),
            n(5666),
            n(1539),
            n(8674),
            n(9714),
            n(2222),
            n(2772),
            n(6992),
            n(8783),
            n(3948),
            n(8304),
            n(489),
            n(2419),
            n(9070),
            n(4819),
            n(5003),
            n(2526),
            n(1817),
            n(2165),
            n(9601);
            var r = n(1729);
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var o = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, o;
                return t = e,
                o = [{
                    key: "loadUrlImage",
                    value: function() {
                        egret.ImageLoader.crossOrigin = "crossOrigin";
                        var e = RES.processor.ImageProcessor.onLoadStart;
                        RES.processor.ImageProcessor.onLoadStart = function(t, n) {
                            var r = Object.assign({}, n);
                            return -1 !== n.url.indexOf("://") && (r.root = ""),
                            e(t, r)
                        }
                    }
                }],
                (n = [{
                    key: "getAsset",
                    value: function(e, t, n) {
                        function i(r) {
                            t.call(n, r, e)
                        }
                        if (RES.hasRes(e)) {
                            var o = RES.getRes(e);
                            o ? (r.Z.removeReleaseResKey(e),
                            i(o)) : (r.Z.addResKey(e),
                            RES.getResAsync(e, i, this))
                        } else
                            r.Z.addRemoteResKey(e),
                            RES.getResByUrl(e, i, this, RES.ResourceItem.TYPE_IMAGE).catch((function(t) {
                                console.error("资源source: ".concat(e, " 加载失败"), t)
                            }
                            ))
                    }
                }]) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
              , a = (n(4916),
            n(3123),
            n(9600),
            n(8940));
            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                c(e)
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var u = new (function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.styles = {}
                }
                var t, n, r;
                return t = e,
                (n = [{
                    key: "setStylesItem",
                    value: function(e, t) {
                        var n = {
                            textColor: t
                        };
                        this.styles[e] = n
                    }
                }, {
                    key: "getInjectObj",
                    value: function(e) {
                        var t, n;
                        if ("object" === c(e))
                            (t = e).styles = Object.assign(Object.assign({}, e.styles), this.styles);
                        else if ("string" === typeof e)
                            try {
                                n = (t = JSON.parse(e)).styles,
                                t.styles = Object.assign(Object.assign({}, n), this.styles)
                            } catch (r) {
                                console.error("解析文件内容失败", r),
                                t = e
                            }
                        else
                            t = e;
                        return t
                    }
                }]) && s(t.prototype, n),
                r && s(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }());
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var f = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , h = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, r;
                return t = e,
                (n = [{
                    key: "getTheme",
                    value: function(e, t, n, r) {
                        return f(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                            var o, c, s, u, l, f, h, d, p, v = this;
                            return regeneratorRuntime.wrap((function(i) {
                                for (; ; )
                                    switch (i.prev = i.next) {
                                    case 0:
                                        if (c = function(t) {
                                            t.resItem.url === e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, c, null),
                                            n.call(r))
                                        }
                                        ,
                                        o = function(e) {
                                            t.call(r, e)
                                        }
                                        ,
                                        s = null,
                                        "undefined" === typeof generateEUI) {
                                            i.next = 7;
                                            break
                                        }
                                        this.successCallBack(t, r, e, generateEUI),
                                        i.next = 18;
                                        break;
                                    case 7:
                                        if ("undefined" === typeof generateEUI2) {
                                            i.next = 17;
                                            break
                                        }
                                        if (u = window.cacheData["gameEui.json"] || "gameEui.json",
                                        l = window,
                                        f = l.JSONParseClass,
                                        !u) {
                                            i.next = 14;
                                            break
                                        }
                                        return i.next = 13,
                                        (0,
                                        a.M7)(u);
                                    case 13:
                                        h = i.sent;
                                    case 14:
                                        h ? (console.log("gameEui.json from cache"),
                                        f && "function" === typeof f.setData && f.setData(h),
                                        this.successCallBack(t, r, e, generateEUI2)) : s = RES.getResByUrl("resource/gameEui_4f4da2c8c17bc5536707.json", (function(n) {
                                            f && "function" === typeof f.setData && f.setData(n),
                                            v.successCallBack(t, r, e, generateEUI2)
                                        }
                                        ), this, RES.ResourceItem.TYPE_JSON),
                                        i.next = 18;
                                        break;
                                    case 17:
                                        "undefined" !== typeof generateJSON ? e.indexOf(".exml") > -1 ? ((d = e.split("/")).pop(),
                                        p = d.join("/") + "_EUI.json",
                                        generateJSON.paths[e] ? this.successCallBack(t, r, e, generateJSON.paths[e]) : s = RES.getResByUrl(p, (function(n) {
                                            window.JSONParseClass.setData(n),
                                            v.successCallBack(t, r, e, generateJSON.paths[e])
                                        }
                                        ), this, RES.ResourceItem.TYPE_JSON)) : this.successCallBack(t, r, e, generateJSON) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, c, null),
                                        s = RES.getResByUrl(e, o, this, RES.ResourceItem.TYPE_TEXT));
                                    case 18:
                                        null === s || void 0 === s || s.catch((function(e) {
                                            console.log("default.thm.json down error：", e)
                                        }
                                        ));
                                    case 19:
                                    case "end":
                                        return i.stop()
                                    }
                            }
                            ), i, this)
                        }
                        )))
                    }
                }, {
                    key: "successCallBack",
                    value: function(e, t, n, r) {
                        var i, o = this;
                        egret.callLater((function() {
                            i = o.getInjectContent(n, r),
                            e.call(t, i)
                        }
                        ), this)
                    }
                }, {
                    key: "getInjectContent",
                    value: function(e, t) {
                        return "resource/default.thm.json" === e ? u.getInjectObj(t) : t
                    }
                }]) && l(t.prototype, n),
                r && l(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
              , d = (n(6977),
            n(992))
              , p = n(8923);
            function v(e) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                v(e)
            }
            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function m(e, t) {
                return m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                m(e, t)
            }
            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            function _(e, t) {
                if (t && ("object" === v(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function E(e) {
                return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                E(e)
            }
            p.Z;
            var b = n(6779)
              , w = n(4514)
              , T = n(7262);
            function S(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var R = new (function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.progressNumber = 0,
                    this.sceneResProgressNumber = 0
                }
                var t, n, r;
                return t = e,
                (n = [{
                    key: "init",
                    value: function() {
                        this.progressNumber = 0,
                        this.sceneResProgressNumber = 0,
                        this.bindEvent(),
                        this.updateProgressDisplay()
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        T.Z.addEventListener(b.V6, this.updateProgress, this),
                        T.Z.addEventListener(b.KQ, this.updateSceneResProgress, this),
                        T.Z.addEventListener(w.A, this.hideEntryGameLoading, this)
                    }
                }, {
                    key: "updateProgress",
                    value: function(e) {
                        var t, n = e.data;
                        this.progressNumber += null !== (t = b.Nu[n]) && void 0 !== t ? t : 0,
                        this.updateProgressDisplay()
                    }
                }, {
                    key: "updateSceneResProgress",
                    value: function(e) {
                        this.sceneResProgressNumber = e.data ? Math.floor(70 * e.data) : 0,
                        this.updateProgressDisplay()
                    }
                }, {
                    key: "updateProgressDisplay",
                    value: function() {
                        var e = document.getElementById("progress-text")
                          , t = document.getElementById("progress-bar");
                        e && (e.innerHTML = "".concat(this.progressNumber + this.sceneResProgressNumber, "%")),
                        t && (t.style.width = "".concat(this.progressNumber + this.sceneResProgressNumber, "%"))
                    }
                }, {
                    key: "showEntryGameLoading",
                    value: function() {}
                }, {
                    key: "hideEntryGameLoading",
                    value: function() {
                        this.entryGameLoadingView && (this.entryGameLoadingView.removeSelf(),
                        this.entryGameLoadingView = null),
                        this.onDestroy()
                    }
                }, {
                    key: "onDestroy",
                    value: function() {
                        this.progressNumber = 0,
                        this.sceneResProgressNumber = 0,
                        T.Z.removeEventListener(b.V6, this.updateProgress, this),
                        T.Z.removeEventListener(b.KQ, this.updateSceneResProgress, this),
                        T.Z.removeEventListener(w.A, this.hideEntryGameLoading, this)
                    }
                }]) && S(t.prototype, n),
                r && S(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }())
              , O = n(367)
              , I = n(5426)
              , x = n(4647)
              , k = n(766)
              , C = n(741)
              , A = (n(7727),
            n(9554),
            n(4747),
            n(1249),
            n(5054))
              , N = n(4080)
              , P = n(9704)
              , D = n(85)
              , M = n(3858)
              , j = n(1704)
              , L = n(7305)
              , G = n(6604);
            function H(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var B = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , V = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.isReady = !1,
                    this.settingReadyCB = null
                }
                var t, n, r;
                return t = e,
                n = [{
                    key: "loadSettingData",
                    value: function() {
                        return B(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.tryLoadSettingData().finally((function() {
                                            t.isReady = !0,
                                            T.Z.dispatchEventWith(b.V6, !1, b.l9.PROGRESS_LOAD_SETTING_DATA),
                                            t.settingReadyCB && t.settingReadyCB()
                                        }
                                        )));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "tryLoadSettingData",
                    value: function() {
                        return B(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t, n, r, i, o, c, s, u, l, f, h;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        Promise.all([(0,
                                        a.MC)()]);
                                    case 2:
                                        if (t = e.sent,
                                        n = t[0],
                                        r = n.data,
                                        i = n.code,
                                        o = n.msg,
                                        0 === i) {
                                            e.next = 11;
                                            break
                                        }
                                        if (i === A.NI.RESPONSE_ERROR) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new k.R("loading game platform setting errorCode = " + i,k.s.URL_ERROR);
                                    case 10:
                                        throw "activity resp error: ".concat(i, ", msg: ").concat(o);
                                    case 11:
                                        return c = r.curr_basic,
                                        s = r.next_basic,
                                        u = r.activity,
                                        l = r.all_assets,
                                        f = r.server_timestamp,
                                        M.S1(u, c, s),
                                        (0,
                                        N.M)(1e3 * f),
                                        P.Z.eventCode = c.slots[0] && c.slots[0].slot_code,
                                        (0,
                                        D.RL)(r),
                                        d = r.modules,
                                        d,
                                        h = this.handleAllAssets(l),
                                        e.next = 20,
                                        Promise.all(h);
                                    case 20:
                                        return e.abrupt("return", n);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                    }
                                var d
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "waitForSetting",
                    value: function() {
                        return B(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            t.isReady ? e() : t.settingReadyCB = e
                                        }
                                        )));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))
                    }
                }, {
                    key: "initAndReplaceSettingData",
                    value: function() {
                        (0,
                        j.BH)(),
                        "production" === window.MODE && (0,
                        j.R2)()
                    }
                }, {
                    key: "handleAllAssets",
                    value: function(e) {
                        var t = this
                          , n = [];
                        return e.forEach((function(e) {
                            n.push((0,
                            a.St)(e.cdn).then((function(n) {
                                if (!n || n.code === A.NI.RESPONSE_ERROR)
                                    throw new Error("cdn ".concat(e.cdn, "，resp: ").concat(JSON.stringify(n)));
                                n.map((function(t) {
                                    return {
                                        module_id: t.ModuleID,
                                        module_name: t.ModuleName,
                                        content: t.Content,
                                        cdn: e.cdn
                                    }
                                }
                                )).forEach((function(e) {
                                    t.initAssetValue(e, e.content)
                                }
                                ))
                            }
                            )))
                        }
                        )),
                        n
                    }
                }, {
                    key: "initAssetValue",
                    value: function(e, t) {
                        !function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            n = Object.assign(Object.assign({}, G.d), n);
                            try {
                                window.sessionStorage.setItem((0,
                                L.V)(e, n), JSON.stringify(t))
                            } catch (r) {
                                console.error(r),
                                sessionStorage.clear()
                            }
                        }("".concat(e.module_name, "_cdn_").concat(e.cdn), t),
                        (0,
                        j.WM)(t),
                        (0,
                        j.FG)(t),
                        (0,
                        D.wb)(D.Fh, t),
                        (0,
                        D.wb)(D.j_, t)
                    }
                }],
                n && H(t.prototype, n),
                r && H(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
              , U = new V
              , F = n(5428)
              , W = n(7133)
              , Y = n(209)
              , Z = n(9411)
              , K = n(7958)
              , J = n(2057)
              , z = n(7484)
              , X = n.n(z);
            function $(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var q = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , Q = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.resourceNeedReport = !0
                }
                var t, r, i;
                return t = e,
                r = [{
                    key: "isNotShopeeApp",
                    value: function() {
                        return (J.ZP.pc || J.ZP.mweb) && !(0,
                        K.L1)()
                    }
                }, {
                    key: "loadTheme",
                    value: function() {
                        var e = this;
                        return new Promise((function(t) {
                            new eui.Theme("resource/default.thm.json",egret.MainContext.instance.stage).addEventListener(eui.UIEvent.COMPLETE, (function() {
                                T.Z.dispatchEventWith(b.V6, !1, b.l9.PROGRESS_LOAD_THEME),
                                t()
                            }
                            ), e)
                        }
                        ))
                    }
                }, {
                    key: "loadFont",
                    value: function() {
                        return RES.getResAsync("font_number").then((function() {
                            var e, t;
                            egret.registerFontMapping("Baloo2-ExtraBold", "resource/".concat(null !== (t = null === (e = RES.getResourceInfo("font_number")) || void 0 === e ? void 0 : e.url) && void 0 !== t ? t : ""))
                        }
                        ))
                    }
                }, {
                    key: "loadResource",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return q(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                            var r, i = this;
                            return regeneratorRuntime.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return r = Date.now(),
                                        n.next = 3,
                                        Promise.all([(0,
                                        j.Xu)().then((function() {
                                            return q(i, void 0, void 0, regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (; ; )
                                                        switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!t) {
                                                                e.next = 4;
                                                                break
                                                            }
                                                            return e.next = 3,
                                                            Promise.all([this.loadTheme(), this.loadFont()]);
                                                        case 3:
                                                            T.Z.dispatchEventWith(b.V6, !1, b.l9.PROGRESS_LOAD_DEFAULT_RES_JSON);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                        }
                                                }
                                                ), e, this)
                                            }
                                            )))
                                        }
                                        )), U.loadSettingData()]);
                                    case 3:
                                        (0,
                                        Z.f1)({
                                            type: "Performance",
                                            info: Y.jW.loadSettingData,
                                            cost: Date.now() - r
                                        }),
                                        U.initAndReplaceSettingData(),
                                        (0,
                                        Z.f1)({
                                            type: "Performance",
                                            info: Y.jW.loadResource,
                                            cost: Date.now() - r
                                        }),
                                        (0,
                                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_4, {
                                            entry: e
                                        });
                                    case 7:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n)
                        }
                        )))
                    }
                }, {
                    key: "entryDispatch",
                    value: function() {
                        return q(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if ((0,
                                        K.IO)("activity")) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new k.R("illegal url",k.s.URL_ERROR);
                                    case 2:
                                        if (!this.isNotShopeeApp()) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 5,
                                        this.processDownloadPage();
                                    case 5:
                                        (0,
                                        F.cM)("entryDispatch: downloadPage"),
                                        e.next = 11;
                                        break;
                                    case 8:
                                        return e.next = 10,
                                        this.processNormal();
                                    case 10:
                                        (0,
                                        F.cM)("entryDispatch: normal");
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "processDownloadPage",
                    value: function() {
                        return q(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t = "download",
                                        (0,
                                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_3, {
                                            entry: t
                                        }),
                                        e.next = 4,
                                        this.loadResource(t, !1);
                                    case 4:
                                        return (0,
                                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_5, {
                                            entry: t
                                        }),
                                        e.next = 7,
                                        this.enterDownload();
                                    case 7:
                                        (0,
                                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_6, {
                                            entry: t
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "processNormal",
                    value: function() {
                        return q(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t, n, r, i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t = "normal",
                                        (0,
                                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_3, {
                                            entry: t
                                        }),
                                        n = Date.now(),
                                        r = (0,
                                        Z.xE)(),
                                        (0,
                                        Z.f1)({
                                            type: "Performance",
                                            info: Y.jW.processNormal,
                                            cost: n - r
                                        }),
                                        i = [{
                                            progressType: b.l9.PROGRESS_CHECK_LOGIN,
                                            progressPromise: (0,
                                            W.Xx)(!0)
                                        }, {
                                            progressType: b.l9.PROGRESS_DEFAULT,
                                            progressPromise: this.loadResource(t)
                                        }, {
                                            progressType: b.l9.PROGRESS_CHECK_NAVBAR_HIDE,
                                            progressPromise: d.D.checkNavbarHide()
                                        }],
                                        e.next = 8,
                                        (0,
                                        O.Q)(i);
                                    case 8:
                                        return (0,
                                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_5, {
                                            entry: t
                                        }),
                                        (0,
                                        Z.f1)({
                                            type: "Performance",
                                            info: Y.jW.promiseAll,
                                            cost: Date.now() - n
                                        }),
                                        e.next = 12,
                                        this.entryNormal();
                                    case 12:
                                        (0,
                                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_6, {
                                            entry: t
                                        });
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "entryNormal",
                    value: function() {
                        return q(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return (0,
                                        Z.f1)({
                                            type: "Performance",
                                            info: Y.jW.entryNormal,
                                            cost: Date.now() - window.performancePoints.first_paint.end
                                        }),
                                        console.log("进入正常游戏流程"),
                                        (0,
                                        F.cM)("进入正常游戏流程"),
                                        t = x.J.MAIN,
                                        e.next = 7,
                                        this.createGameScene(t, null);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "enterDownload",
                    value: function() {
                        return q(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("进入 downLoad 页面"),
                                        (0,
                                        F.cM)("进入 downLoad 页面"),
                                        t = x.J.DOWNLOAD,
                                        e.next = 5,
                                        this.createGameScene(t, null);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "createGameScene",
                    value: function(e, t) {
                        return q(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (e) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return T.Z.addEventListener(w.A, this.onSceneEnterComplete, this),
                                        n.next = 5,
                                        I.E.getInstance().runScene(e, null, t);
                                    case 5:
                                        (0,
                                        Z.Nv)("first_interactive"),
                                        this.afterRunSense();
                                    case 7:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, this)
                        }
                        )))
                    }
                }, {
                    key: "afterRunSense",
                    value: function() {
                        console.log("【FE性能】 first_paint = ".concat((0,
                        Z.vn)("first_paint"))),
                        console.log("【FE性能】 first_interactive = ".concat((0,
                        Z.vn)("first_interactive"))),
                        console.log("当前渲染模式：", egret.Capabilities.renderMode, ", service worker:", !!window.SERVICE_WORKER, ", build time:", X()(+window.VERSION).format("YYYY-MM-DDTHH:mm:ss"), "heads-tag-v2-2-0-20240423--live-html5"),
                        n.g.globalLoadingTimer && clearTimeout(n.g.globalLoadingTimer),
                        !n.g.isHidden && this.resourceNeedReport && ((0,
                        Z.E4)("preload"),
                        this.resourceNeedReport = !1,
                        (0,
                        Z.PS)(!0),
                        window.MODE,
                        window.localStorage.setItem("bingo_entry_retry", "0"),
                        I.E.getInstance().isFirstChangeScene = !1)
                    }
                }, {
                    key: "onSceneEnterComplete",
                    value: function() {
                        window.hideMask(),
                        T.Z.removeEventListener(w.A, this.onSceneEnterComplete, this)
                    }
                }],
                i = [{
                    key: "getInstance",
                    value: function() {
                        return this.instance || (this.instance = new e),
                        this.instance
                    }
                }],
                r && $(t.prototype, r),
                i && $(t, i),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
              , ee = n(3952)
              , te = n(3783)
              , ne = n(923)
              , re = n(2244);
            function ie(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var oe = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, r;
                return t = e,
                r = [{
                    key: "getInstance",
                    value: function(e) {
                        return this.instance || (this.instance = new e),
                        this.instance
                    }
                }],
                (n = [{
                    key: "showPopup",
                    value: function(e) {
                        I.E.getInstance().addView(e, w.p.POP_VIEW, re.b.CENTER_SCALE)
                    }
                }, {
                    key: "showToast",
                    value: function(e) {
                        ne.c.getInstance().showToastTips(e)
                    }
                }]) && ie(t.prototype, n),
                r && ie(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
              , ae = n(5254);
            function ce(e) {
                return ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                ce(e)
            }
            function se(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function ue(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function le(e, t) {
                return le = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                le(e, t)
            }
            function fe(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = de(e);
                    if (t) {
                        var i = de(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return he(this, n)
                }
            }
            function he(e, t) {
                if (t && ("object" === ce(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function de(e) {
                return de = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                de(e)
            }
            var pe, ve = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && le(e, t)
                }(o, e);
                var t, n, r, i = fe(o);
                function o() {
                    return se(this, o),
                    i.apply(this, arguments)
                }
                return t = o,
                (n = [{
                    key: "handleViewWillReappear",
                    value: function(e) {
                        var t, n = "";
                        if ("" !== e.data)
                            try {
                                var r = JSON.parse(e.data);
                                if (r.data && "" !== r.data) {
                                    var i = JSON.parse(r.data);
                                    n = i.from,
                                    t = i.code
                                }
                            } catch (o) {
                                console.error("view will reappear error: ", o)
                            }
                        console.log("[WillReappear]: ", n),
                        T.Z.dispatchEventWith(ae.Q.BACK_TO_GAME, !1, {
                            code: t,
                            from: n
                        })
                    }
                }]) && ue(t.prototype, n),
                r && ue(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                o
            }(oe), ge = n(7075), me = n(4956), ye = (n(5620),
            n(1160)), _e = n(3969);
            function Ee(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            !function(e) {
                e.RENDER_MODE = "renderMode",
                e.WEBGL_LOST_CONTEXT = "webgl_lost_context",
                e.WEBGL_RESTORED_CONTEXT = "webgl_restored_context",
                e.WEBGL_CANVAS_RELOAD = "webgl_canvas_reload"
            }(pe || (pe = {}));
            var be = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, r, i;
                return t = e,
                i = [{
                    key: "handleContextLost",
                    value: function(t) {
                        try {
                            if (t.preventDefault(),
                            (0,
                            Y.z5)({
                                point_id: Y.aj.WEBGL_LOST_CONTEXT,
                                duration: 1
                            }),
                            (0,
                            F.p_)("WebGLContextLost"),
                            e.webglActive = !1,
                            e.lifecycleIsPause)
                                return;
                            e.time && egret.clearTimeout(e.time),
                            e.time = egret.setTimeout((function() {
                                try {
                                    if (e.webglActive)
                                        return;
                                    console.error(t),
                                    (0,
                                    F.fZ)("handleContextLost"),
                                    0 === (0,
                                    Z.vn)("first_interactive") && n.g.reportOpenFail("handleContextLost"),
                                    (0,
                                    _e.LS)(pe.WEBGL_LOST_CONTEXT, {
                                        userId: ye.e.uid,
                                        time: e.lastLostTime,
                                        validity: 864e5
                                    }),
                                    n.g.showToast((0,
                                    ge.A7)("text_system_error"), !0)
                                } catch (r) {
                                    (0,
                                    F.fZ)("webgl showToast error", r),
                                    (0,
                                    F.p_)("webgl showToast error")
                                }
                            }
                            ), this, e.waitTs),
                            e.lastLostTime = Date.now()
                        } catch (r) {
                            (0,
                            F.fZ)("handleContextLost error", r),
                            (0,
                            F.p_)("handleContextLost error", {
                                rate: .1
                            })
                        }
                    }
                }, {
                    key: "handleContextRestored",
                    value: function() {
                        try {
                            e.webglActive = !0,
                            egret.clearTimeout(e.time),
                            (0,
                            Y.z5)({
                                point_id: Y.aj.RESTORE_WEBGL_CONTEXT,
                                duration: 1
                            }),
                            (0,
                            F.p_)("WebGLContextRestored"),
                            (0,
                            _e.cl)(pe.WEBGL_LOST_CONTEXT)
                        } catch (t) {
                            (0,
                            F.fZ)("handleContextRestored error", t),
                            (0,
                            F.p_)("handleContextRestored error", {
                                rate: .1
                            })
                        }
                    }
                }, {
                    key: "addListenWebGlContentLost",
                    value: function() {
                        var t, n;
                        try {
                            var r = (0,
                            _e.rV)(pe.WEBGL_LOST_CONTEXT);
                            if (r && (e.isCanvasReload = !0),
                            r && !r.reported && ((0,
                            Y.z5)({
                                point_id: Y.aj.CANVAS_RENDERING_WEBGL_LOST_CONTEXT,
                                duration: 1
                            }),
                            r.reported = !0,
                            (0,
                            _e.LS)(pe.WEBGL_LOST_CONTEXT, JSON.stringify(r)),
                            (0,
                            F.p_)("WebGLContextLost - CanvasRendering")),
                            "webgl" === egret.Capabilities.renderMode) {
                                var i = null === (n = null === (t = egret.web.WebGLRenderContext) || void 0 === t ? void 0 : t.getInstance()) || void 0 === n ? void 0 : n.surface;
                                null === i || void 0 === i || i.addEventListener("webglcontextlost", e.handleContextLost, !1),
                                null === i || void 0 === i || i.addEventListener("webglcontextrestored", e.handleContextRestored, !1)
                            }
                        } catch (o) {
                            (0,
                            F.fZ)("listenWebGlContentLost error", o),
                            (0,
                            F.p_)("listenWebGlContentLost error", {
                                rate: .1
                            })
                        }
                    }
                }],
                (r = null) && Ee(t.prototype, r),
                i && Ee(t, i),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            be.webglActive = !0,
            be.waitTs = 3e3,
            be.lifecycleIsPause = !1,
            be.isCanvasReload = !1;
            var we = n(277)
              , Te = n(893)
              , Se = (n(6097),
            n(7045));
            function Re(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Oe(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function Ie(e, t) {
                return Ie = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Ie(e, t)
            }
            function xe(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Ce(e);
                    if (t) {
                        var i = Ce(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return ke(this, n)
                }
            }
            function ke(e, t) {
                if (t && ("object" === Ae(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function Ce(e) {
                return Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                Ce(e)
            }
            function Ae(e) {
                return Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Ae(e)
            }
            var Ne = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : Ae(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , Pe = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Ie(e, t)
                }(o, eui.Component);
                var t, n, r, i = xe(o);
                function o() {
                    var e;
                    return Re(this, o),
                    (e = i.apply(this, arguments)).curVal = 0,
                    e.privMinimum = 0,
                    e.privMaximum = 0,
                    e.privShowText = !0,
                    e.privBg = "",
                    e.privThumb = "",
                    e
                }
                return t = o,
                (n = [{
                    key: "childrenCreated",
                    value: function() {
                        this.imgThumb && (this.imgThumb.width = this.width,
                        this.imgThumb.height = this.height),
                        this.imgThumbMask && (this.imgThumbMask.width = this.imgThumb.width,
                        this.imgThumbMask.height = this.imgThumb.height,
                        this.imgThumb.mask = this.imgThumbMask),
                        this.txtMsg && (this.txtMsg.visible = this.privShowText),
                        this.setValue(this.curVal)
                    }
                }, {
                    key: "minimum",
                    get: function() {
                        return this.privMinimum
                    },
                    set: function(e) {
                        this.minimum !== e && (this.privMinimum = e,
                        this.setValue(this.curVal))
                    }
                }, {
                    key: "maximum",
                    get: function() {
                        return this.privMaximum
                    },
                    set: function(e) {
                        this.privMaximum !== e && (this.privMaximum = e,
                        this.setValue(this.curVal))
                    }
                }, {
                    key: "showText",
                    get: function() {
                        return this.privShowText
                    },
                    set: function(e) {
                        this.privShowText !== e && (this.privShowText = e,
                        this.txtMsg && (this.txtMsg.visible = e))
                    }
                }, {
                    key: "updateText",
                    value: function(e, t) {
                        this.txtMsg && (this.txtMsg.text = "".concat(e, " / ").concat(t))
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.curVal
                    },
                    set: function(e) {
                        this.curVal !== e && this.setValue(e)
                    }
                }, {
                    key: "setValue",
                    value: function(e) {
                        if (!(this.privMaximum < 0 || this.privMaximum <= this.privMinimum) && this.imgThumb) {
                            var t = this.privMaximum - this.privMinimum;
                            e = Math.max(this.privMinimum, e),
                            e = Math.min(this.privMaximum, e),
                            this.curVal = e,
                            this.imgThumb.width = e / t * this.width,
                            this.updateText(this.curVal, this.privMaximum)
                        }
                    }
                }, {
                    key: "thumb",
                    get: function() {
                        return this.privThumb
                    },
                    set: function(e) {
                        this.privThumb !== e && this.setThumb(e)
                    }
                }, {
                    key: "setThumb",
                    value: function(e) {
                        this.privThumb = e;
                        var t = this.imgThumb;
                        t || (t = new eui.Image,
                        this.imgThumb = t,
                        this.addChild(this.imgThumb)),
                        t.texture = RES.getRes(e),
                        t.width = this.width || t.texture.textureWidth,
                        t.height = this.height || t.texture.textureHeight;
                        var n = this.imgThumbMask;
                        n || (n = new eui.Image,
                        t.mask = n,
                        this.addChild(n),
                        this.imgThumbMask = n),
                        n.texture = RES.getRes(e),
                        n.width = t.width,
                        n.height = t.height
                    }
                }, {
                    key: "bg",
                    get: function() {
                        return this.privThumb
                    },
                    set: function(e) {
                        this.privBg !== e && this.setBg(e)
                    }
                }, {
                    key: "setBg",
                    value: function(e) {
                        this.privBg = e;
                        var t = this.imgBg || new eui.Image;
                        t.texture = RES.getRes(e),
                        t.width = this.width || t.width,
                        t.height = this.height || t.texture.textureHeight,
                        this.imgBg = t,
                        this.addChildAt(t, 0)
                    }
                }]) && Oe(t.prototype, n),
                r && Oe(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                o
            }();
            Ne([(0,
            Se.M)(!0)], Pe.prototype, "minimum", null),
            Ne([(0,
            Se.M)(!0)], Pe.prototype, "maximum", null),
            Ne([(0,
            Se.M)(!0)], Pe.prototype, "showText", null),
            Ne([(0,
            Se.M)(!0)], Pe.prototype, "value", null),
            Ne([(0,
            Se.M)(!0)], Pe.prototype, "thumb", null),
            Ne([(0,
            Se.M)(!0)], Pe.prototype, "bg", null),
            window.BaseProgress = Pe;
            n(3360),
            n(9653);
            var De = n(4235);
            function Me(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function je() {
                return je = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = Le(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                    }
                }
                ,
                je.apply(this, arguments)
            }
            function Le(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ue(e)); )
                    ;
                return e
            }
            function Ge(e, t) {
                return Ge = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                Ge(e, t)
            }
            function He(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Ue(e);
                    if (t) {
                        var i = Ue(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return Be(this, n)
                }
            }
            function Be(e, t) {
                if (t && ("object" === Fe(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return Ve(e)
            }
            function Ve(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function Ue(e) {
                return Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                Ue(e)
            }
            function Fe(e) {
                return Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Fe(e)
            }
            var We = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : Fe(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , Ye = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && Ge(e, t)
                }(o, eui.Label);
                var t, n, r, i = He(o);
                function o(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, o),
                    (t = i.call(this, e)).privTouchScale = .97,
                    t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, Ve(t)),
                    t
                }
                return t = o,
                (n = [{
                    key: "touchScale",
                    get: function() {
                        return this.privTouchScale
                    },
                    set: function(e) {
                        e !== this.privTouchScale && (this.privTouchScale = Number(e))
                    }
                }, {
                    key: "$setText",
                    value: function(e) {
                        var t = je(Ue(o.prototype), "$setText", this).call(this, e);
                        return t ? (this.textFlow = [{
                            text: e,
                            style: {
                                underline: !0
                            }
                        }],
                        t) : t
                    }
                }, {
                    key: "onAddToStage",
                    value: function() {
                        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this),
                        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
                        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
                    }
                }, {
                    key: "onRemoveFromStage",
                    value: function() {
                        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this),
                        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
                        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
                    }
                }, {
                    key: "addTouchEvent",
                    value: function() {
                        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
                    }
                }, {
                    key: "removeTouchEvent",
                    value: function() {
                        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
                        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this)
                    }
                }, {
                    key: "onTouchBegin",
                    value: function() {
                        this.addTouchEvent(),
                        this.originScaleX = this.scaleX,
                        this.originScaleY = this.scaleY,
                        this.scaleX = this.scaleX * this.touchScale,
                        this.scaleY = this.scaleY * this.touchScale,
                        te.j.playEffect(De.xL.CLICK)
                    }
                }, {
                    key: "onTouchEnd",
                    value: function() {
                        this.removeTouchEvent(),
                        this.scaleX = this.originScaleX,
                        this.scaleY = this.originScaleY
                    }
                }]) && Me(t.prototype, n),
                r && Me(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                o
            }();
            We([(0,
            Se.M)(!0)], Ye.prototype, "touchScale", null),
            window.SubButton = Ye;
            n(9112),
            n(8233);
            function Ze(e) {
                return Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Ze(e)
            }
            function Ke(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Je(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ze() {
                return ze = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = Xe(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                    }
                }
                ,
                ze.apply(this, arguments)
            }
            function Xe(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = et(e)); )
                    ;
                return e
            }
            function $e(e, t) {
                return $e = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                $e(e, t)
            }
            function qe(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = et(e);
                    if (t) {
                        var i = et(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return Qe(this, n)
                }
            }
            function Qe(e, t) {
                if (t && ("object" === Ze(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function et(e) {
                return et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                et(e)
            }
            var tt = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            };
            window.BaseEuiView = p.Z;
            var nt = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && $e(e, t)
                }(c, eui.UILayer);
                var t, r, i, a = qe(c);
                function c() {
                    return Ke(this, c),
                    a.apply(this, arguments)
                }
                return t = c,
                (r = [{
                    key: "createChildren",
                    value: function() {
                        var e = this
                          , t = Date.now()
                          , r = (0,
                        Z.xE)();
                        (0,
                        Z.f1)({
                            type: "Performance",
                            info: Y.jW.createChildren,
                            cost: t - r
                        }),
                        ze(et(c.prototype), "createChildren", this).call(this),
                        egret.TextField.prototype.isZoomTextHeight = !0,
                        egret.TextField.prototype.isReadjustMarginTop = !0,
                        egret.lifecycle.addLifecycleListener((function(e) {
                            (0,
                            we.A4)((function(t) {
                                ve.getInstance(ve).handleViewWillReappear(t),
                                e.resume()
                            }
                            )).catch((function(e) {
                                console.error("view reappear error:", e)
                            }
                            )),
                            (0,
                            we.W3)((function() {
                                e.pause()
                            }
                            )).catch((function(e) {
                                console.error("view disappear error:", e)
                            }
                            ))
                        }
                        )),
                        egret.lifecycle.onPause = function() {
                            egret.ticker.pause(),
                            e.onEgretPause()
                        }
                        ,
                        egret.lifecycle.onResume = function() {
                            egret.ticker.resume(),
                            e.onEgretResume()
                        }
                        ;
                        var i = new o;
                        egret.registerImplementation("eui.IAssetAdapter", i),
                        egret.registerImplementation("eui.IThemeAdapter", new h),
                        (0,
                        C.HQ)(C.ZG.UI_LOADING, C.IN.STAGE_2),
                        this.runGame().catch((function(t) {
                            return tt(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                                var r, i, o, a, c, s;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (console.error("Main runGame:", t),
                                            i = window.localText.badNetwork,
                                            o = !0,
                                            a = k.s.NETWORK_ERROR,
                                            t && t.type && (a = t.type,
                                            t.type === k.s.LOGIN_ERROR ? c = "text_not_login" : t.type === k.s.ACTIVITY_OVER_ERROR ? (c = "text_activity_over",
                                            o = !1) : t.type === k.s.URL_ERROR && (c = "text_error_of_share_link",
                                            o = !1)),
                                            !c) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 8,
                                            U.waitForSetting();
                                        case 8:
                                            i = (0,
                                            ge.A7)(c);
                                        case 9:
                                            s = "object" === Ze(t) ? t.message || (null === (r = t.error) || void 0 === r ? void 0 : r.message) || t.toString() : t,
                                            ee.Z.showErrorToast(i, o, !0),
                                            (0,
                                            F.fZ)("main rungame fail: ".concat(a, "; error: ").concat(s)),
                                            (0,
                                            F.p_)("main rungame fail: ".concat(a), {
                                                tags: {
                                                    error: s.indexOf("文件加载失败") > -1 ? "文件加载失败" : s,
                                                    stats: (0,
                                                    C.Fm)()
                                                },
                                                extra: {
                                                    rungame: "fail"
                                                }
                                            }),
                                            i === window.localText.badNetwork && n.g.reportOpenFail("bad network");
                                        case 14:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))
                        }
                        ))
                    }
                }, {
                    key: "onEgretPause",
                    value: function() {
                        d.D.stopResizeListener(),
                        Q.getInstance().resourceNeedReport = !1,
                        console.log("[切换后台 ServerTime]".concat(X()((0,
                        N.b)()).format("YYYY-MM-DD HH:mm:ss:SSS"))),
                        this.preTime = (0,
                        N.b)(),
                        T.Z.dispatchEventWith(me.BH)
                    }
                }, {
                    key: "onEgretResume",
                    value: function() {
                        d.D.startResizeListener(),
                        d.D.readaptSceneBg(),
                        console.log("[切换后台]时长: ".concat((0,
                        N.b)() - this.preTime, "ms")),
                        T.Z.dispatchEventWith(me.PY)
                    }
                }, {
                    key: "setDeviceId",
                    value: function() {
                        return tt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        we.Zw)();
                                    case 2:
                                        t = e.sent,
                                        P.Z.device = null !== t && void 0 !== t ? t : "",
                                        console.info("DEVICE", t),
                                        (0,
                                        we.A0)("DEVICE"),
                                        T.Z.dispatchEventWith(b.V6, !1, b.l9.PROGRESS_GET_DEVICE_ID);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))
                    }
                }, {
                    key: "gamePreset",
                    value: function() {
                        return tt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return d.D.init(egret.MainContext.instance.stage),
                                        te.j.init(egret.MainContext.instance.stage),
                                        o.loadUrlImage(),
                                        e.next = 5,
                                        this.setDeviceId();
                                    case 5:
                                        RES.setMaxLoadingThread(100),
                                        Benchmark.init({
                                            track: Z.Kw,
                                            page_name: Z.Gk,
                                            hipo_type: Z.rA.EGRET_PERFORMANCE
                                        }),
                                        be.addListenWebGlContentLost(),
                                        (0,
                                        K.qQ)() && (0,
                                        Te.G9)(),
                                        (0,
                                        F.cM)("当前渲染模式：", egret.Capabilities.renderMode),
                                        I.E.getInstance().mainStage = this.stage;
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "runGame",
                    value: function() {
                        return tt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return R.init(),
                                        e.next = 3,
                                        this.gamePreset();
                                    case 3:
                                        return ee.Z.initJSErrorToast(),
                                        console.log("[FE]location = ".concat(window.location.href)),
                                        e.next = 7,
                                        Q.getInstance().entryDispatch();
                                    case 7:
                                        document.title = (0,
                                        ge.A7)("text_main_game_title"),
                                        (0,
                                        Z.qv)(!0),
                                        (0,
                                        F.cM)("资源加载成功");
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }]) && Je(t.prototype, r),
                i && Je(t, i),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                c
            }()
              , rt = n(2687);
            var it = n(5692)
              , ot = n(386)
              , at = n(5079);
            var ct = n(1360)
              , st = n(45);
            n(9133);
            function ut() {
                var e = (0,
                _e.rV)(pe.WEBGL_LOST_CONTEXT);
                return e ? e.validity && Date.now() - e.time > e.validity ? "webgl" : "canvas" : "webgl"
            }
            function lt() {
                (0,
                K.Dh)() && document.getElementById("egretDiv").setAttribute("data-show-fps", "true");
                var e = (0,
                _e.rV)(pe.RENDER_MODE, {
                    expire: !1,
                    activity: !1
                });
                egret.runEgret({
                    renderMode: e || ut(),
                    audioType: 0,
                    calculateCanvasScaleFactor: function(e) {
                        if ("canvas" === egret.Capabilities.renderMode)
                            return 1;
                        var t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
                        return (window.devicePixelRatio || 1) / t
                    }
                })
            }
            window.Main = nt,
            function() {
                console.log("上报初始化"),
                (0,
                rt.Pm)({
                    project: "bingo",
                    userId: 0,
                    offline: !1
                }),
                (0,
                rt.JS)("bingo"),
                "production" === window.MODE && (ot.S1({
                    dsn: window.SENTRY_DSN,
                    maxBreadcrumbs: 50,
                    release: window.SENTRY_VERSION,
                    environment: "".concat(window.COUNTRY, "_").concat(window.ENVIRONMENT),
                    ignoreErrors: ["TypeError: Failed to fetch"],
                    beforeSend: function(e) {
                        (0,
                        Z.Ag)({
                            page_type: "track",
                            operation: "action_hipo",
                            data: {
                                json_str: JSON.stringify({
                                    has_offline_package: 1
                                }),
                                page_name: Z.Gk,
                                hipo_type: Z.rA.JS_ERROR
                            }
                        }),
                        e.message = e.message || e.exception && e.exception.values && e.exception.values[0].value,
                        e.message = "".concat("[Html5]", " - ").concat(e.message);
                        var t = (0,
                        we.ej)("SPC_U") || "unknown"
                          , n = e.user && e.user.id || t;
                        F.nx.indexOf(Number(n)) >= 0 && (e.message = "vip-".concat(n, "-").concat(e.message));
                        var r = function(e) {
                            switch (e && e.level) {
                            case "error":
                            default:
                                return "error";
                            case "warning":
                                return "warn";
                            case "info":
                            case "log":
                                return "info";
                            case "debug":
                                return "debug";
                            case "fatal":
                                return "fatal"
                            }
                        }(e);
                        return (0,
                        it.kM)({
                            message: "[".concat(r, "]").concat(e.message),
                            data: {
                                name: e.message,
                                level: r,
                                data_field: Object.assign(Object.assign({
                                    level: r,
                                    sentry: "true",
                                    user: n + ""
                                }, e.extra || {}), e.tags || {}),
                                extra: {
                                    exception: e.exception
                                }
                            }
                        }, function(e) {
                            try {
                                return e.breadcrumbs.map((function(e) {
                                    return {
                                        type: e.type,
                                        category: e.category,
                                        message: e.message,
                                        data: e.data
                                    }
                                }
                                ))
                            } catch (t) {}
                        }(e)),
                        null
                    }
                }),
                at.v("git_context", {
                    branch: "heads-tag-v2-2-0-20240423-"
                })),
                (0,
                it.jL)(),
                (0,
                Y.EU)();
                var e = Y.Zf.FIRST_PAINT;
                (0,
                Y.z5)({
                    point_id: e,
                    duration: (0,
                    Z.vn)("first_paint")
                })
            }(),
            (0,
            Z.f1)({
                type: "Performance",
                info: Y.jW.firstPaint,
                cost: window.performancePoints.first_paint.end - window.performancePoints.first_paint.start
            }),
            (0,
            Z.f1)({
                type: "Performance",
                info: Y.jW.runStart,
                cost: Date.now() - window.performancePoints.first_paint.end
            }),
            (0,
            Z.Ag)({
                page_type: "track",
                operation: "action_hipo",
                data: {
                    page_name: "game_bingo_index",
                    hipo_type: "action_page_pv"
                }
            }, !1),
            (0,
            C.f2)(),
            !window.loadJavascriptError && (d.D.setResizeCallback(null),
            d.D.startResizeListener(),
            (0,
            we.eY)(),
            (0,
            we.M7)(),
            (0,
            we.oG)()),
            window.isEgretLoadEnd ? lt() : window.setMainRunner(lt),
            (0,
            ct.c0)(),
            (0,
            st.Z)()
        },
        5054: function(e, t, n) {
            "use strict";
            n.d(t, {
                $m: function() {
                    return l
                },
                Iv: function() {
                    return u
                },
                NI: function() {
                    return o
                },
                RJ: function() {
                    return s
                },
                x8: function() {
                    return c
                }
            });
            var r, i, o;
            n(9070);
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            !function(e) {
                e[e.RESPONSE_ERROR = 999e3] = "RESPONSE_ERROR",
                e[e.ENCRYPT_ERROR = 999001] = "ENCRYPT_ERROR",
                e[e.NOT_EVENT_TIME = 4e5] = "NOT_EVENT_TIME",
                e[e.STOP_SERVER = 400002] = "STOP_SERVER",
                e[e.INVALID_SIGN = 400003] = "INVALID_SIGN",
                e[e.INVALID_TOKEN = 400004] = "INVALID_TOKEN",
                e[e.INVALID_USER_GUIDE = 400005] = "INVALID_USER_GUIDE",
                e[e.EXCEED_RATE = 400006] = "EXCEED_RATE",
                e[e.NOT_SLOT_TIME = 400001] = "NOT_SLOT_TIME",
                e[e.DEPRECATED_API = 400009] = "DEPRECATED_API",
                e[e.USER_IN_BLACK_LIST = 400012] = "USER_IN_BLACK_LIST",
                e[e.API_CANNOT_INVOKE_TEMP = 400013] = "API_CANNOT_INVOKE_TEMP",
                e[e.CLAIMED_DUPLICATION = 600006] = "CLAIMED_DUPLICATION",
                e[e.CLAIMED_WITH_ERROR_EMOJI = 600007] = "CLAIMED_WITH_ERROR_EMOJI",
                e[e.REFRESH_AFTER_UNCOVER = 600103] = "REFRESH_AFTER_UNCOVER",
                e[e.NOT_IN_UNCOVER_TIME = 600009] = "NOT_IN_UNCOVER_TIME"
            }(o || (o = {}));
            var c = [o.NOT_SLOT_TIME]
              , s = [o.INVALID_TOKEN, o.NOT_EVENT_TIME, o.STOP_SERVER, o.USER_IN_BLACK_LIST]
              , u = (a(r = {}, o.NOT_EVENT_TIME, "text_activity_over"),
            a(r, o.NOT_SLOT_TIME, "text_not_slot_time"),
            a(r, o.INVALID_TOKEN, "text_network_error"),
            a(r, o.EXCEED_RATE, "text_server_busy_error"),
            a(r, o.DEPRECATED_API, "text_network_error"),
            a(r, o.API_CANNOT_INVOKE_TEMP, "text_server_busy_error"),
            a(r, o.USER_IN_BLACK_LIST, "text_server_busy_error"),
            r)
              , l = (a(i = {}, o.NOT_SLOT_TIME, !0),
            a(i, o.NOT_EVENT_TIME, !0),
            i)
        },
        4080: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return c
                },
                b: function() {
                    return a
                }
            });
            var r = n(984)
              , i = n(7958)
              , o = 0;
            function a() {
                return Date.now() + o
            }
            function c(e) {
                o = e - Date.now(),
                (0,
                i.L1)(5) && console.log("[ServerTime]", (0,
                r.gu)(e), o, "[Now]", (0,
                r.gu)(a()))
            }
            window.addTime = function(e) {
                return o += e
            }
        },
        9704: function(e, t, n) {
            "use strict";
            var r = n(7958)
              , i = n(7358)
              , o = {
                appId: "7cACRmD1i6WeFok3O4",
                baseUrl: "https://games.".concat(i.m4),
                baseApiUrl: "https://tvshow.games.".concat(i.m4),
                baseWebSocketUrl: "wss://games.".concat(i.m4),
                eventCode: (0,
                r.IO)("event") || "",
                activityCode: (0,
                r.IO)("activity") || "",
                isStopServer: !1,
                serverSetting: {
                    promotionSwitch: !1,
                    retrySwitch: !0,
                    indexdbSwitch: {},
                    serviceWorkerSwitch: {},
                    moduleAssetsRate: {
                        id: ""
                    },
                    textureUnitUsedRate: {
                        ios: 0,
                        android: 0,
                        pc: 0,
                        default: 0
                    },
                    bingoNativeConfig: {},
                    rpsConfig: {
                        id: 1
                    },
                    webviewArcadeGameSwitch: {},
                    arcadeGamePreloadSwitch: {},
                    PRSNavigateConfig: {},
                    expireAppVersion: {
                        id: 0
                    },
                    gwSignConfig: {}
                },
                heatBeatFrequency: 1e4,
                localBundleVersion: 0,
                latestBundleVersion: 0,
                device: "",
                projectName: "bingo",
                isUrlHasShowPRS: !1
            };
            t.Z = o
        },
        85: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fh: function() {
                    return o
                },
                Ni: function() {
                    return r
                },
                RL: function() {
                    return i
                },
                j_: function() {
                    return a
                },
                wb: function() {
                    return c
                }
            });
            n(9554),
            n(1539),
            n(4747),
            n(7941),
            n(2772);
            var r = {
                server_timestamp: 0,
                curr_basic: {
                    slots: [],
                    start_time: 0,
                    end_time: 0
                },
                modules: [],
                assets: []
            };
            function i(e) {
                r = e
            }
            var o = {
                image_result_custom_banner: "",
                url_banner_link: "",
                image_banner: "",
                radio_help: "0",
                image_emobg_normal: "",
                image_emobg_miss: "",
                radio_smallempty: "0",
                radio_bingoempty: "0",
                url_tchyper: "",
                url_changecard_share: "",
                radio_changecard_cost: "0",
                item_list_changecard_cost: [],
                image_share_change_app: "",
                image_share_change_instagram: ""
            }
              , a = {
                number_bingocoin: 0,
                number_each: 1,
                number_interval: 0,
                number_smallcoin: 12,
                number_totalwin: 0,
                time_uncover: 0,
                text_free_unlock_type: "",
                image_banner_slot: "",
                image_result_custom_banner_slot: "",
                url_banner_link_slot: ""
            };
            function c(e, t) {
                Object.keys(e).forEach((function(n) {
                    t.hasOwnProperty(n) && (e[n] = t[n],
                    0 === n.indexOf("url_") && "https://" === e[n] && (e[n] = ""))
                }
                ))
            }
        },
        2369: function(e, t, n) {
            "use strict";
            n.d(t, {
                EU: function() {
                    return v
                },
                KL: function() {
                    return a
                },
                SB: function() {
                    return p
                },
                Xc: function() {
                    return d
                }
            });
            n(2526),
            n(1817),
            n(1539),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(1038),
            n(7042),
            n(8309),
            n(4916),
            n(2222),
            n(9070);
            var r, i, o, a, c = n(4647);
            function s(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return u(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            !function(e) {
                e[e.BACK_LOAD = -100] = "BACK_LOAD",
                e[e.LAZY_LOAD = 0] = "LAZY_LOAD",
                e[e.PRE_LOAD = 100] = "PRE_LOAD"
            }(o || (o = {})),
            function(e) {
                e.NATIVE_ENTRY = "native_entry",
                e.DOWNLOAD = "download",
                e.COMMON = "common",
                e.MAIN = "main",
                e.NEW_USER_GUIDE = "new_user_guide",
                e.HELP = "help"
            }(a || (a = {}));
            var f = (l(r = {}, c.J.LOADING, []),
            l(r, c.J.MAIN, [a.MAIN]),
            l(r, c.J.DOWNLOAD, [a.DOWNLOAD]),
            r)
              , h = (l(i = {}, c.J.LOADING, []),
            l(i, c.J.MAIN, []),
            i)
              , d = {}
              , p = function(e) {
                var t = f[e] || [];
                return e !== c.J.DOWNLOAD ? [a.COMMON].concat(s(t)) : s(t)
            }
              , v = function(e) {
                return s(h[e] || [])
            }
        },
        7075: function(e, t, n) {
            "use strict";
            n.d(t, {
                A7: function() {
                    return u
                },
                Bh: function() {
                    return a
                },
                Cl: function() {
                    return h
                },
                Cr: function() {
                    return c
                },
                f_: function() {
                    return f
                },
                m: function() {
                    return d
                },
                rp: function() {
                    return v
                },
                tv: function() {
                    return p
                }
            });
            n(9601),
            n(9554),
            n(1539),
            n(4747),
            n(4916),
            n(5306),
            n(2222),
            n(4603),
            n(9714),
            n(3123),
            n(1249),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(1038),
            n(7042),
            n(8309);
            var r = n(7958);
            var i = {
                text_button_reload: "Reload",
                text_button_retry: "Retry",
                text_button_quit: "Quit",
                text_button_cancel: "Quit",
                text_button_confirm: "Confirm",
                text_button_reveal: "Reveal",
                text_no_reward_content: "Event has ended, you did not get rewards.Please try again in the next event.",
                text_reward_error: "Please Retry",
                text_result_coins_title: "Shopee Coins",
                text_result_coins_desc: "The coins you get in this event",
                text_result_btn: "Use",
                text_bingo_get_reward_title: "Bingo! You win the following prize",
                text_small_reward_get_title: "You win the following prize",
                text_bingo_reward_popup_close_btn: "Close",
                text_return_to_game_btn: "Return to Game",
                text_event_end_time: "Event will end at {hour} h {minute} m",
                text_event_notice_2: "Next event start at ",
                text_change_emoji_btn: "Change Emoji",
                text_change_success_toast: "Event Card Successfully Redrawn",
                text_change_frequently_toast: "can change card after 3 s",
                text_emoji_left: "Emoji Left",
                text_share_copy_link: "Link copied!",
                text_share_copy_info: "Info copied!",
                text_share_not_install: "Install app to share!",
                text_share_upgrade_app: "Please upgrade your app!",
                text_share_title: "share",
                text_bingo_share_contentbingo: "I am bingo winner in Shopee Bingo event!",
                text_change_share_content: "I am bingo winner in Shopee Bingo event!",
                text_share_fail: "Share Failed!",
                text_change_popup_share_content: "Share completed.",
                text_change_popup_ads_content: "Watch ads to change you card?",
                text_native_update_tips: "Please update game",
                text_native_update_done_tips: "Game update done",
                text_system_error: "Something wrong happened!",
                text_error_popup_title: "Sorry",
                text_activity_over: "This game is not running at the moment. Check out other exciting games on Shopee!",
                text_miss_claim_toast: "Something wrong happened!",
                text_change_disabled_toast: "The event will start soon, can not change the card now",
                text_ads_failed_toast: "Ads task failed, please try again",
                text_help_titlesmall: "How To Play",
                text_tc_title: "T&C",
                text_download_btn: "Download Shopee",
                text_download_title: "Do you want feed a cool choky?",
                text_main_game_title: "Bingo Game",
                text_network_error: "The network is not working, please try again later",
                text_server_busy_error: "The server is currently busy, please try again later",
                text_not_slot_time: "Activity is ended, please wait for next time.",
                text_not_login: "Please login shopee to play Bingo Game.",
                text_tap_reveal_tips: "Please tap the Reveal Button",
                text_tap_emoji_tips: "You can match emojis once the event starts",
                text_error_of_share_link: "The link error, please try to open another link.",
                text_loading: "Loading...",
                text_defaulttc: "A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability.\t\nThis article will get you started with creating your own custom Terms and Conditions agreement. We've also put together a Sample Terms and Conditions Template that you can use to help you write your own.",
                text_pre_remind_btn: "Remind Me",
                text_pre_quit_btn: "Maybe Later",
                text_pre_notice: "Join us tonight <21:00-22:00> to match your tiles and win the prize",
                text_button_pre_event_ok: "OK",
                text_other_remind_permission: "Please opne remind permission! ",
                text_remind_uncover_title: "Unconvering Tittle ",
                text_remind_uncover_content: "Unconvering Content! ",
                text_remind_success: "Success",
                text_remind_fail: "Fail",
                text_remind_done: "Added all reminder",
                text_remind_btn_done: "Reminded",
                text_slot_end_popup_button: "View Results",
                text_next_slot_popup_title: "Next Event has Started",
                text_next_slot_popup_content: "This event has ended. And next event is coming!",
                text_next_slot_popup_refresh_btn: "Refresh Page",
                text_next_slot_popup_close_btn: "Maybe later",
                text_no_match: "Did not match any emoji",
                text_next_emoji: "next emoji can be reveal after {x} seconds",
                text_reveal_miss: "Emoji did not reveal in time",
                text_no_reward_tips: "An error occurred, please contact customer service"
            }
              , o = (0,
            r.IO)("text") || ""
              , a = function(e, t) {
                i[e] = o + t
            }
              , c = function() {
                return Object.assign({}, i)
            }
              , s = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return e && e.length && n && n.length > 0 && n.forEach((function(t) {
                    e = e.replace(/\{[^\}]*\}/, t + "")
                }
                )),
                e
            }
              , u = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return s.apply(void 0, [i[e]].concat(n))
            }
              , l = "val"
              , f = ("{".concat(l, "}"),
            RegExp(/\{(val)\}/, "g"),
            /\<(.+?)\>/)
              , h = function(e, t) {
                var n = "style"
                  , r = []
                  , o = i[e].replace(/{([^\}]+)\}/g, (function(e, t) {
                    return r.push(t),
                    "<".concat(n, ">")
                }
                ))
                  , a = 0;
                return o.split(/<|>/).map((function(e) {
                    if (e === n) {
                        var i = {
                            text: r[a] || "",
                            style: t[a] || {}
                        };
                        return a++,
                        i
                    }
                    return {
                        text: e
                    }
                }
                ))
            }
              , d = function(e, t) {
                for (var n = t.font, r = t.replaceVar, o = "{".concat("val", "}"), a = "font", c = "{".concat(a, "}"), s = RegExp(/\{(font|val)\}/, "g"), u = i[e].replace(/\{[^\}]+\}/g, o).replace(/<[^\>]+\>/g, c).split(s), l = 0; l < u.length; l++)
                    u[l] === a ? u[l] = n.length ? n.shift() : {
                        text: "{}"
                    } : "val" === u[l] ? u[l] = r.length ? r.shift() : {
                        text: "{}"
                    } : u[l] = {
                        text: u[l]
                    };
                return u
            };
            var p = "Please open in APP."
              , v = "Baloo2-ExtraBold"
        },
        4647: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                J: function() {
                    return r
                }
            }),
            function(e) {
                e.LOADING = "loading",
                e.MAIN = "main",
                e.DOWNLOAD = "download"
            }(r || (r = {}))
        },
        766: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return h
                },
                s: function() {
                    return r
                }
            });
            var r;
            n(8304),
            n(489),
            n(2772),
            n(1539),
            n(9714),
            n(2419),
            n(6992),
            n(1532),
            n(8783),
            n(3948),
            n(9070),
            n(2526),
            n(1817),
            n(2165);
            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                i(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function a(e, t) {
                if (t && ("object" === i(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function c(e) {
                var t = "function" === typeof Map ? new Map : void 0;
                return c = function(e) {
                    if (null === e || (n = e,
                    -1 === Function.toString.call(n).indexOf("[native code]")))
                        return e;
                    var n;
                    if ("function" !== typeof e)
                        throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof t) {
                        if (t.has(e))
                            return t.get(e);
                        t.set(e, r)
                    }
                    function r() {
                        return s(e, arguments, f(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    l(r, e)
                }
                ,
                c(e)
            }
            function s(e, t, n) {
                return s = u() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var i = new (Function.bind.apply(e, r));
                    return n && l(i, n.prototype),
                    i
                }
                ,
                s.apply(null, arguments)
            }
            function u() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }
            function l(e, t) {
                return l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                l(e, t)
            }
            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                f(e)
            }
            !function(e) {
                e.NETWORK_ERROR = "NETWORK_ERROR",
                e.ACTIVITY_OVER_ERROR = "ACTIVITY_OVER_ERROR",
                e.LOGIN_ERROR = "LOGIN_ERROR",
                e.URL_ERROR = "URL_ERROR",
                e.STOP_SERVER = "STOP_SERVER"
            }(r || (r = {}));
            var h = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && l(e, t)
                }(c, e);
                var t, n, r, i = function(e) {
                    var t = u();
                    return function() {
                        var n, r = f(e);
                        if (t) {
                            var i = f(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else
                            n = r.apply(this, arguments);
                        return a(this, n)
                    }
                }(c);
                function c(e, t) {
                    var n;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, c),
                    (n = i.call(this, e)).type = t,
                    n
                }
                return t = c,
                n && o(t.prototype, n),
                r && o(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }(c(Error))
        },
        4956: function(e, t, n) {
            "use strict";
            n.d(t, {
                BH: function() {
                    return a
                },
                LM: function() {
                    return o
                },
                PY: function() {
                    return c
                },
                a: function() {
                    return i
                }
            });
            var r, i = "popWebView", o = "scene_transform_end", a = "game_deactivate", c = "game_active";
            !function(e) {
                e.GAME_CD_START = "game_cd_start",
                e.GAME_CD_UPDATE = "game_cd_update",
                e.GAME_CD_END = "game_cd_end"
            }(r || (r = {}))
        },
        4235: function(e, t, n) {
            "use strict";
            n.d(t, {
                A4: function() {
                    return c
                },
                X6: function() {
                    return a
                },
                s9: function() {
                    return i
                },
                xL: function() {
                    return r
                }
            });
            var r, i = "record_music_status";
            !function(e) {
                e.MAIN_BG = "audio_bongo_bgm",
                e.CLICK = "audio_ui_click",
                e.BINGO_REWARD_POPUP = "audio_bongo_big_prize",
                e.CHEST_SHOW = "audio_gift_box_appear",
                e.CHEST_OPEN = "audio_gift_box_open",
                e.CHANGE_CARD = "audio_bingo_refresh",
                e.EMOJI_MATCHED = "audio_emoji_matched",
                e.EMOJI_MATCH_MISS = "audio_emoji_miss",
                e.EMOJI_MISMATCH = "audio_emoji_mismatch",
                e.SESSION_START = "audio_session_start",
                e.SFX_COUNTDOWN = "audio_sfx_countdown",
                e.COUNTDOWN_FIVE = "audio_english_countdown_five",
                e.COUNTDOWN_FOUR = "audio_english_countdown_four",
                e.COUNTDOWN_THREE = "audio_english_countdown_three",
                e.COUNTDOWN_TWO = "audio_english_countdown_two",
                e.COUNTDOWN_ONE = "audio_english_countdown_one"
            }(r || (r = {}));
            var o = [void 0, r.COUNTDOWN_ONE, r.COUNTDOWN_TWO, r.COUNTDOWN_THREE, r.COUNTDOWN_FOUR, r.COUNTDOWN_FIVE];
            function a(e) {
                return o[e]
            }
            function c(e) {
                return console.log("sceneName: ", e),
                r.MAIN_BG
            }
        },
        4514: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                A: function() {
                    return i
                },
                p: function() {
                    return r
                }
            }),
            function(e) {
                e[e.GAME_VIEW = 1] = "GAME_VIEW",
                e[e.UI_VIEW = 2] = "UI_VIEW",
                e[e.POP_VIEW = 3] = "POP_VIEW",
                e[e.TIPS_VIEW = 4] = "TIPS_VIEW"
            }(r || (r = {}));
            var i = "event_scene_enter_complete"
        },
        4433: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                e: function() {
                    return r
                }
            }),
            function(e) {
                e.ERROR_CODE_EVENT = "errorCodeEvent"
            }(r || (r = {}))
        },
        7955: function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, {
                I: function() {
                    return i
                },
                y: function() {
                    return r
                }
            }),
            function(e) {
                e[e.ERROR = 0] = "ERROR",
                e[e.TIPS = 1] = "TIPS",
                e[e.CONFIRM = 2] = "CONFIRM",
                e[e.TOAST = 3] = "TOAST",
                e[e.LOADING = 4] = "LOADING"
            }(r || (r = {})),
            function(e) {
                e[e.MONSTER = 99] = "MONSTER",
                e[e.NOTICE = 999] = "NOTICE",
                e[e.RETURN_BTN = 9999] = "RETURN_BTN"
            }(i || (i = {}))
        },
        905: function(e, t, n) {
            "use strict";
            n.d(t, {
                EA: function() {
                    return a
                },
                F3: function() {
                    return h
                },
                Un: function() {
                    return c
                },
                Wh: function() {
                    return i
                },
                aT: function() {
                    return o
                },
                o0: function() {
                    return l
                }
            });
            n(9070);
            var r, i, o, a, c, s = n(2933);
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            !function(e) {
                e.GAME_BINGO_MAIN_PAGE = "main_page",
                e.GAME_BINGO_MAIN_PAGE_CCU = "main_page_ccu"
            }(i || (i = {})),
            function(e) {
                e.LOADING = "loading",
                e.SHARING_PANEL = "sharing_panel",
                e.RECEIVE_BINGO_CARD_POPUP = "receive_bingo_card_popup",
                e.WINNING_EMOJI_ANNOUNCEMENT = "winning_emoji_announcement",
                e.WIN_PRIZE_POPUP = "win_prize_popup",
                e.FREE_TILE_SECTION = "free_tile_section",
                e.CAMPAIGN_BANNER = "campaign_banner",
                e.CAMPAIGN_BANNER_POPUP = "campaign_banner_popup",
                e.EVENT_CARD = "event_card",
                e.ADS_SECTION = "ads_section",
                e.YOUR_EMOJIS = "your_emojis",
                e.HELP = "help",
                e.EVENT_END = "event_end",
                e.RESULT_PAGE = "result_page"
            }(o || (o = {})),
            function(e) {
                e.CLOSE_BUTTON = "close_button",
                e.REVEAL_BUTTON = "reveal_button",
                e.CONFIRM_BUTTON = "confirm_button",
                e.CHANGE_EMOJI_BUTTON = "change_emoji_button",
                e.REMIND_ME_BUTTON = "remind_me_button",
                e.MAYBE_LATER_BUTTON = "maybe_later_button",
                e.SKIP_BUTTON = "skip_button",
                e.OPTIONAL_PICTURE = "optional_picture",
                e.CAMPAIGN_BANNER = "campaign_banner",
                e.GO_TO_SALE_BUTTON = "go_to_sale_button",
                e.EMOJI = "emoji",
                e.UNLOCK_FREE_EMOJI_BUTTON = "unlock_free_emoji_button",
                e.VIEW_RESULTS_BUTTON = "view_results_button",
                e.USE_BUTTON = "use_button"
            }(a || (a = {})),
            function(e) {
                e.CLICK = "click",
                e.VIEW = "view",
                e.IMPRESSION = "impression",
                e.ACTION_SWIPE = "action_swipe"
            }(c || (c = {}));
            var l, f;
            !function(e) {
                e.PRE_EVENT = "pre_event",
                e.EVENT_STARTED = "event_started",
                e.EVENT_FINISHED = "event_finished"
            }(l || (l = {})),
            function(e) {
                e[e.REMIND_ME = 1] = "REMIND_ME",
                e[e.SHARE = 2] = "SHARE",
                e[e.ORGANIC = 3] = "ORGANIC"
            }(f || (f = {}));
            var h = (u(r = {}, s.C2.COIN, "coin"),
            u(r, s.C2.VOUCHER, "voucher"),
            u(r, s.C2.PRODUCT, "production"),
            u(r, s.C2.NOTHING, "nothing"),
            r)
        },
        2244: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                b: function() {
                    return r
                }
            }),
            function(e) {
                e[e.CENTER_SCALE = 1] = "CENTER_SCALE",
                e[e.CENTER_FADE = 2] = "CENTER_FADE",
                e[e.LEFT = 3] = "LEFT",
                e[e.RIGHT = 4] = "RIGHT",
                e[e.TOP = 5] = "TOP",
                e[e.BOTTOM = 6] = "BOTTOM",
                e[e.NONE = 7] = "NONE"
            }(r || (r = {}))
        },
        1729: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            n(2772),
            n(561),
            n(9554),
            n(1539),
            n(4747),
            n(8309),
            n(5212),
            n(7941),
            n(9070);
            var r = n(1160);
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var o = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, o;
                return t = e,
                o = [{
                    key: "getRealKey",
                    value: function(e) {
                        return RES.config.getResourceWithSubkey(e).key
                    }
                }, {
                    key: "addResKey",
                    value: function(e) {
                        var t = this.getRealKey(e);
                        this.resKeys.indexOf(t) < 0 && this.resKeys.push(t),
                        t !== e && "production" !== window.MODE && console.warn(new Error("加载了未提前加载的合图资源: " + e))
                    }
                }, {
                    key: "removeReleaseResKey",
                    value: function(e) {
                        if (0 !== this.releaseResKeys.length) {
                            var t = this.getRealKey(e)
                              , n = this.releaseResKeys.indexOf(t);
                            n >= 0 && this.releaseResKeys.splice(n, 1)
                        }
                    }
                }, {
                    key: "addRemoteResKey",
                    value: function(e) {
                        this.remoteResKeys.indexOf(e) < 0 && this.remoteResKeys.push(e)
                    }
                }, {
                    key: "preChangeScene",
                    value: function() {
                        this.releaseResKeys = this.resKeys,
                        this.resKeys = [],
                        this.releaseRemoteResKeys = this.remoteResKeys,
                        this.remoteResKeys = []
                    }
                }, {
                    key: "releaseRes",
                    value: function(e) {
                        var t = [];
                        e.forEach((function(e) {
                            RES.getGroupByName(e).forEach((function(e) {
                                t.indexOf(e.name) < 0 && t.push(e.name)
                            }
                            ))
                        }
                        ));
                        var n = [];
                        this.releaseResKeys.forEach((function(e) {
                            t.indexOf(e) >= 0 || n.push(e)
                        }
                        )),
                        n.forEach((function(e) {
                            "production" !== window.MODE && console.warn("释放非预加载资源", e),
                            RES.getRes(e) && RES.destroyRes(e)
                        }
                        ))
                    }
                }, {
                    key: "releaseRemoteRes",
                    value: function(e, t) {
                        var n = this;
                        Object.keys(this.remoteReleaseConfig).some((function(r) {
                            var i = n.remoteReleaseConfig[r];
                            return e === r && t === i
                        }
                        )) || this.releaseRemoteResKeys.forEach((function(e) {
                            r.e.avatarUrl && e.indexOf(r.e.avatarUrl) >= 0 || n.remoteResKeys.indexOf(e) >= 0 || RES.getRes(e) && RES.destroyRes(e)
                        }
                        ))
                    }
                }],
                (n = null) && i(t.prototype, n),
                o && i(t, o),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            o.resKeys = [],
            o.remoteResKeys = [],
            o.releaseResKeys = [],
            o.releaseRemoteResKeys = [],
            o.remoteReleaseConfig = {}
        },
        1160: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return a
                }
            });
            n(9070);
            var r = n(5966)
              , i = n(893);
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var a = new (function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.uid = 0,
                    this.email = "",
                    this.shortName = "unknown",
                    this.uName = "unknown",
                    this.gName = "",
                    this.gender = 0,
                    this.avatarUrl = "",
                    this.avtHash = "",
                    this.shopeeCoins = 0
                }
                var t, n, a;
                return t = e,
                (n = [{
                    key: "userName",
                    get: function() {
                        return this.uName
                    },
                    set: function(e) {
                        this.uName = e,
                        this.shortName = (0,
                        i.$e)(e)
                    }
                }, {
                    key: "gameName",
                    get: function() {
                        return this.gName
                    },
                    set: function(e) {
                        this.gName = e
                    }
                }, {
                    key: "avatarHash",
                    get: function() {
                        return this.avtHash
                    },
                    set: function(e) {
                        this.avtHash = e,
                        this.avatarUrl = (0,
                        r.J)(e)
                    }
                }, {
                    key: "userCoins",
                    get: function() {
                        return this.shopeeCoins
                    },
                    set: function(e) {
                        e < 0 || (this.shopeeCoins = e)
                    }
                }]) && o(t.prototype, n),
                a && o(t, a),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }())
        },
        5620: function() {
            var e = RES.getResAsync;
            RES.getResAsync = function(t, n, r) {
                var i = n ? e.apply(RES, [t, n, r]) : e.apply(RES, [t]);
                return i.catch((function(e) {
                    console.error("资源加载错误", t, e)
                }
                )),
                i
            }
        },
        741: function(e, t, n) {
            "use strict";
            var r, i, o;
            function a() {}
            n.d(t, {
                Fm: function() {
                    return s
                },
                HQ: function() {
                    return u
                },
                IN: function() {
                    return i
                },
                ZG: function() {
                    return r
                },
                _9: function() {
                    return o
                },
                f2: function() {
                    return a
                }
            }),
            function(e) {
                e.UI_LOADING = "UILoading",
                e.UI_GAME_PAGE = "UIGamePage"
            }(r || (r = {})),
            function(e) {
                e.STAGE_1 = "Bingo_FirstPaint",
                e.STAGE_2 = "Bingo_RunGame",
                e.STAGE_3 = "Bingo_Entry",
                e.STAGE_4 = "Bingo_LoadResource",
                e.STAGE_5 = "Bingo_Ready",
                e.STAGE_6 = "Bingo_Finish"
            }(i || (i = {})),
            function(e) {
                e.STAGE_1 = "Bingo_Game_ChangeScene",
                e.STAGE_2 = "Bingo_Game_JS",
                e.STAGE_3 = "Bingo_Game_Finish"
            }(o || (o = {}));
            var c = i.STAGE_1;
            function s() {
                return c
            }
            function u(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                console.debug(e, t, n)
            }
        },
        8940: function(e, t, n) {
            "use strict";
            n.d(t, {
                KB: function() {
                    return _
                },
                M7: function() {
                    return p
                },
                MC: function() {
                    return f
                },
                St: function() {
                    return h
                },
                Zw: function() {
                    return E
                },
                f$: function() {
                    return d
                },
                pJ: function() {
                    return v
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(2222);
            var r = n(5054)
              , i = n(4080)
              , o = n(9704)
              , a = n(905)
              , c = n(42)
              , s = n(5428)
              , u = n(9411)
              , l = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , f = function() {
                return l(void 0, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                c.U2)("".concat(o.Z.baseUrl, "/gameplatform/api/v5/game/activity/").concat(o.Z.activityCode, "/settings"), {
                                    appid: o.Z.appId
                                }, {
                                    retryTime: 2,
                                    type: c.py.NONE,
                                    isLoading: !0
                                });
                            case 2:
                                return t = e.sent,
                                e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
              , h = function(e) {
                return l(void 0, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                (0,
                                c.HK)("https://games.deo.shopeemobile.com/shopee/mkt/games/gameplatform/assets/".concat(e));
                            case 2:
                                return n = t.sent,
                                t.abrupt("return", n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
              , d = function(e) {
                return l(void 0, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4,
                                (0,
                                c.HK)("resource/".concat(e), 0);
                            case 4:
                                if ((n = t.sent) && n.code !== r.NI.RESPONSE_ERROR) {
                                    t.next = 13;
                                    break
                                }
                                return (0,
                                s.p_)("[json重试]resJSON回源启动"),
                                t.next = 9,
                                (0,
                                c.HK)("".concat(window.BASE_LOCATION, "/bingo/resource/").concat(e), 0);
                            case 9:
                                if ((n = t.sent) && n.code !== r.NI.RESPONSE_ERROR) {
                                    t.next = 13;
                                    break
                                }
                                return (0,
                                s.p_)("[json重试]resJSON回源失败"),
                                t.abrupt("return");
                            case 13:
                                return t.abrupt("return", n);
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
              , p = function(e) {
                return l(void 0, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4,
                                (0,
                                c.HK)("resource/".concat(e), 0);
                            case 4:
                                if ((n = t.sent) && n.code !== r.NI.RESPONSE_ERROR) {
                                    t.next = 13;
                                    break
                                }
                                return (0,
                                s.p_)("[json重试]euiJSON回源启动"),
                                t.next = 9,
                                (0,
                                c.HK)("".concat(window.BASE_LOCATION, "/bingo/resource/").concat(e), 0);
                            case 9:
                                if ((n = t.sent) && n.code !== r.NI.RESPONSE_ERROR) {
                                    t.next = 13;
                                    break
                                }
                                return (0,
                                s.p_)("[json重试]euiJSON回源失败"),
                                t.abrupt("return");
                            case 13:
                                return t.abrupt("return", n);
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            };
            function v() {
                return l(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n, r, i;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = (0,
                                c.IF)("/bingo/api/event/get_coming_event"),
                                n = {},
                                r = {
                                    type: c.py.TOAST,
                                    retryTime: 3
                                },
                                e.next = 5,
                                (0,
                                c.U2)(t, n, r);
                            case 5:
                                return i = e.sent,
                                e.abrupt("return", !i.code && i.data);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            function g() {
                return l(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n, r, i;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = (0,
                                c.IF)("/bingo/api/ping"),
                                n = {},
                                r = {
                                    type: c.py.NONE,
                                    retryTime: 0
                                },
                                e.next = 5,
                                (0,
                                c.U2)(t, n, r);
                            case 5:
                                return i = e.sent,
                                e.abrupt("return", i);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            var m, y = 0;
            function _() {
                return l(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n, r, o, a = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return egret.clearTimeout(y),
                                t = 10,
                                e.prev = 2,
                                n = Date.now(),
                                e.next = 6,
                                g();
                            case 6:
                                r = e.sent,
                                o = Date.now() - n,
                                0 === r.code && (t = r.data.interval || t),
                                o < 1e3 && r.timestamp > 0 && (0,
                                i.M)(r.timestamp),
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(2),
                                console.error(e.t0);
                            case 15:
                                y = egret.setTimeout((function() {
                                    return l(a, void 0, void 0, regeneratorRuntime.mark((function e() {
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    _();
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )))
                                }
                                ), this, 1e3 * t);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[2, 12]])
                }
                )))
            }
            function E() {
                m && egret.clearTimeout(m),
                (0,
                u.hX)(a.Wh.GAME_BINGO_MAIN_PAGE_CCU),
                m = egret.setTimeout(E, this, 1e4)
            }
        },
        42: function(e, t, n) {
            "use strict";
            n.d(t, {
                py: function() {
                    return b
                },
                U2: function() {
                    return L
                },
                HK: function() {
                    return G
                },
                IF: function() {
                    return M
                },
                v_: function() {
                    return H
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(2222),
            n(4916),
            n(3123),
            n(5306),
            n(7327),
            n(2772),
            n(9601),
            n(9554),
            n(4747),
            n(7941),
            n(9070);
            var r = n(3952)
              , i = n(923)
              , o = n(5054)
              , a = n(4080)
              , c = n(9704)
              , s = n(7075)
              , u = n(1160)
              , l = {}
              , f = n(3858)
              , h = n(277)
              , d = n(5428)
              , p = n(7133)
              , v = n(3969)
              , g = n(9411)
              , m = n(7958)
              , y = n(2057)
              , _ = n(2687)
              , E = n(5563);
            var b, w, T = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            };
            !function(e) {
                e.NONE = "NONE",
                e.TOAST = "TOAST",
                e.RETRY = "RETRY",
                e.NO_RETRY = "NO_RETRY"
            }(b || (b = {})),
            function(e) {
                e.CDN_REQUEST = "cdn",
                e.NORMAL_REQUEST = "normal"
            }(w || (w = {}));
            var S = {
                withCredentials: !0,
                isReportTrack: !0,
                header: {
                    "Content-Type": "application/json"
                }
            }
              , R = "api_sign";
            function O() {
                return T(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = (0,
                                v.rV)(R, {
                                    user: !0
                                }),
                                n = (0,
                                f.B$)(),
                                !t || !t[n]) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", t[n]);
                            case 4:
                                if ((0,
                                h.Z0)()) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", "");
                            case 6:
                                return e.next = 8,
                                (0,
                                h.A6)("".concat(u.e.uid, "|").concat((0,
                                a.b)()), 3);
                            case 8:
                                if (!((r = e.sent) && r.data && r.data.result)) {
                                    e.next = 12;
                                    break
                                }
                                return I(r.data.result),
                                e.abrupt("return", r.data.result);
                            case 12:
                                return e.abrupt("return", "");
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            function I(e) {
                var t, n, r, i = (t = {},
                n = (0,
                f.B$)(),
                r = e,
                n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r,
                t);
                (0,
                v.LS)(R, i, {
                    user: !0,
                    expireTimeStamp: (0,
                    f.cj)()
                })
            }
            function x() {
                (0,
                v.cl)(R, {
                    user: !0
                })
            }
            function k(e) {
                if (!e)
                    return "";
                var t = e.split("?")[0];
                t = t.replace(/(https?:)?\/\/(games\.)?[a-z\\.]*?shopee\.[a-z.]+\/(.+?)($|\?.*$)/gi, "$3");
                var n = ["gameplatform/api/v1/game/activity/", "gameplatform/api/v2/redeem_store/item_list/", "gameplatform/api/v2/redeem_store/redeem_item/"].filter((function(e) {
                    return t.indexOf(e) > -1
                }
                ));
                return t = n.length > 0 ? n[0] : t
            }
            function C(e) {
                return !o.$m[e]
            }
            function A(e, t, n) {
                return !(!n && t === egret.HttpMethod.GET) && !l["/".concat(k(e))]
            }
            function N(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , i = arguments.length > 4 ? arguments[4] : void 0;
                e === w.CDN_REQUEST ? (0,
                _.Sh)(k(t), "success" === n ? _.iO[n] : _.iO.failure, r, i) : (0,
                _.L9)(k(t), _.An[n], r, i)
            }
            function P(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                try {
                    var o = e._xhr
                      , a = e._url
                      , s = o.responseURL || ""
                      , u = c.Z.baseUrl + t;
                    g.Kp(s, {
                        data: {
                            api_url: a,
                            net_code: o.status || -1,
                            api_code: r,
                            api_type: 0 === r ? 1 : 200 === o.status ? 2 : 3,
                            api_rate: 0 === r ? 10 : 1,
                            api_time: i
                        }
                    }, "".concat(n, "__").concat(u))
                } catch (l) {
                    (0,
                    d.fZ)("[API track error] url:".concat(t, " msg:"), l)
                }
            }
            function D(e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return T(this, void 0, void 0, regeneratorRuntime.mark((function u() {
                    var l, f, h, v = this;
                    return regeneratorRuntime.wrap((function(u) {
                        for (; ; )
                            switch (u.prev = u.next) {
                            case 0:
                                if (l = Date.now(),
                                a = Object.assign({}, a),
                                !(-1 !== t.indexOf("card/request"))) {
                                    u.next = 6;
                                    break
                                }
                                return u.next = 6,
                                O();
                            case 6:
                                if (!(f = u.sent)) {
                                    u.next = 11;
                                    break
                                }
                                S.header["X-SIGN"] = f,
                                u.next = 13;
                                break;
                            case 11:
                                return u.abrupt("return", Promise.resolve({
                                    code: o.NI.ENCRYPT_ERROR,
                                    data: null,
                                    msg: "".concat(t, " encrypt error")
                                }));
                            case 13:
                                return h = S,
                                u.abrupt("return", new Promise((function(u) {
                                    var f = new egret.HttpRequest;
                                    f.responseType = egret.HttpResponseType.TEXT,
                                    f.open(t, e || egret.HttpMethod.GET);
                                    var g = Object.assign(Object.assign({}, h), a.requestConfig || {});
                                    f.withCredentials = g.withCredentials,
                                    f.timeout = a.timeout || 1e4,
                                    Object.keys(g.header).forEach((function(e) {
                                        var t = g.header[e];
                                        f.setRequestHeader(e, t)
                                    }
                                    )),
                                    f.addEventListener(egret.Event.COMPLETE, (function() {
                                        var i = {};
                                        try {
                                            i = JSON.parse(f.response)
                                        } catch (v) {
                                            return (0,
                                            d.fZ)("[Http Parse error] url:".concat(t, " msg: "), v),
                                            (0,
                                            d.fZ)("[Http Parse error] allResponseHeaders = ".concat(f.getAllResponseHeaders())),
                                            (0,
                                            d.fZ)("[Http Parse error] response = ".concat(f.response)),
                                            (0,
                                            d.p_)("[Http Parse error] url = ".concat(k(t))),
                                            u({
                                                code: o.NI.RESPONSE_ERROR,
                                                data: null,
                                                msg: "[Http Response error] url:".concat(t, " msg: ").concat(v)
                                            })
                                        }
                                        try {
                                            var s = Date.now() - l;
                                            if (a.isReportTrack && P(f, t, e, i.code, s),
                                            a.requestType === w.CDN_REQUEST || 0 === i.code ? N(a.requestType, t, "success", s, 10) : N(a.requestType, t, "logic_error"),
                                            a.requestType === w.CDN_REQUEST && s > 1e4) {
                                                var h = t.replace(/\?.+/, "");
                                                (0,
                                                d.fZ)("[CDN long time]url:".concat(h, ",headers:").concat(f.getAllResponseHeaders())),
                                                (0,
                                                d.p_)("[CDN long time]url:".concat(h), {
                                                    extra: {
                                                        headers: f.getAllResponseHeaders()
                                                    }
                                                })
                                            }
                                        } catch (v) {
                                            (0,
                                            d.fZ)("[Http Track error] url:".concat(t, " msg: "), v),
                                            (0,
                                            d.p_)("[Http Track error] url:".concat(k(t)))
                                        }
                                        try {
                                            if (0 === i.code || a.isCancelCheckCode || a.errorCodes && a.errorCodes.indexOf(i.code) >= 0)
                                                return u(i);
                                            if (i.code === o.NI.STOP_SERVER)
                                                c.Z.isStopServer = !0;
                                            else if (c.Z.serverSetting.retrySwitch && a.retryTime > 0 && "500" === "".concat(i.code).substr(0, 3)) {
                                                (0,
                                                d.cM)("[http retry],url:".concat(t)),
                                                a.retryTime--;
                                                var p = a.retryParamAddTime && -1 === t.indexOf("timestamp") ? (0,
                                                m.Gr)(t, {
                                                    timestamp: (new Date).getTime()
                                                }) : (0,
                                                m.sA)(t, {
                                                    timestamp: (new Date).getTime()
                                                });
                                                return D(e, p, n, a).then((function(e) {
                                                    return u(e)
                                                }
                                                ))
                                            }
                                            (0,
                                            d.fZ)("[Http Error] url: ".concat(t, ", errorCode: ").concat(i.code, ", resp: "), f.response),
                                            C(i.code) && (0,
                                            d.p_)("[Http Error] url: ".concat(k(t), ", errorCode: ").concat(i.code)),
                                            i.code && r.Z.showError(i.code, a.type),
                                            u(i)
                                        } catch (v) {
                                            return (0,
                                            d.fZ)("[HttpResp Handle Error] url: ".concat(t, ", msg:"), v),
                                            (0,
                                            d.p_)("[HttpResp Handle Error] url: ".concat(k(t))),
                                            u({
                                                code: o.NI.RESPONSE_ERROR,
                                                data: null,
                                                msg: "[Http Response error] url:".concat(t, " msg: ").concat(v)
                                            })
                                        }
                                    }
                                    ), v),
                                    f.addEventListener(egret.IOErrorEvent.IO_ERROR, (function() {
                                        var h = f._xhr
                                          , v = h && h.status;
                                        try {
                                            N(a.requestType, t, 0 === v ? "client_net_error" : "net_error"),
                                            a.isReportTrack && P(f, t, e, v || o.NI.RESPONSE_ERROR, Date.now() - l);
                                            var g = Date.now() - l
                                              , _ = g / 1e3 >= 10;
                                            if ((0,
                                            d.fZ)("[Http IOError]url:".concat(t, "; status:").concat(v, "; timeout: ").concat(_)),
                                            console.log(t, "cost: ".concat(g)),
                                            401 === v && (0,
                                            d.fZ)("[httpCode = 401], cookie = ", document.cookie),
                                            A(t, e, v) && (0,
                                            d.p_)("[Http IOError]url:".concat(k(t), "; status:").concat(v), "timeout: ".concat(_), {
                                                rate: _ ? .1 : 1
                                            }),
                                            f && 401 === v)
                                                return void (0,
                                                p.x3)();
                                            if (f && 403 === v)
                                                return !y.ZP.shopeeApp && (0,
                                                m.IO)("debug") && i.c.getInstance().showToastTips(s.tv),
                                                x(),
                                                u({
                                                    code: o.NI.ENCRYPT_ERROR,
                                                    data: null,
                                                    msg: "".concat(t, " encrypt error")
                                                });
                                            f && v >= 500 && ((0,
                                            d.fZ)("[httpCode > 500]", t, v, f.getAllResponseHeaders()),
                                            (0,
                                            d.p_)("[httpCode > 500]", {
                                                extra: {
                                                    headers: f.getAllResponseHeaders()
                                                }
                                            })),
                                            r.Z.showError(o.NI.RESPONSE_ERROR, a.type)
                                        } catch (b) {
                                            (0,
                                            d.fZ)("[Http IOError Track | Handle]url:".concat(t, "; msg:"), b),
                                            (0,
                                            d.p_)("[Http IOError Track | Handle]url:".concat(k(t)))
                                        }
                                        try {
                                            if (c.Z.serverSetting.retrySwitch && a.retryTime > 0) {
                                                (0,
                                                d.cM)("[Http IOError retry]url:".concat(t, "; status:").concat(v)),
                                                a.retryTime--;
                                                var E = a.retryParamAddTime && -1 === t.indexOf("timestamp") ? (0,
                                                m.Gr)(t, {
                                                    timestamp: (new Date).getTime()
                                                }) : (0,
                                                m.sA)(t, {
                                                    timestamp: (new Date).getTime()
                                                });
                                                return D(e, E, n, a).then((function(e) {
                                                    u(e)
                                                }
                                                ))
                                            }
                                        } catch (b) {
                                            console.error("ApiRequest.ts error. ", b),
                                            (0,
                                            d.p_)(b)
                                        }
                                        u({
                                            code: o.NI.RESPONSE_ERROR,
                                            data: null,
                                            msg: "".concat(t, " http error: httpCode = ").concat(v)
                                        })
                                    }
                                    ), v),
                                    f.send(n ? JSON.stringify(n) : null)
                                }
                                )));
                            case 15:
                            case "end":
                                return u.stop()
                            }
                    }
                    ), u)
                }
                )))
            }
            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    activity: !0,
                    event: !0
                };
                n.activity && !t.activityCode && (t.activityCode = c.Z.activityCode),
                n.event && !t.eventCode && c.Z.eventCode && (t.eventCode = c.Z.eventCode);
                var r = (0,
                m.IO)("from") || "other";
                t.from = r.substring(0, 10);
                var i = e.indexOf("bingo/api") >= 0 ? c.Z.baseApiUrl : c.Z.baseUrl;
                return (0,
                m.Gr)(i + e, t)
            }
            var j = {};
            function L(e, t, r) {
                return T(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                    var o, a;
                    return regeneratorRuntime.wrap((function(i) {
                        for (; ; )
                            switch (i.prev = i.next) {
                            case 0:
                                return n.g.reqDic = j,
                                e = (0,
                                m.Gr)(e, t),
                                (o = j[e]) ? console.log("[http]复用 url: ".concat(e, " 的 get请求")) : (o = D(egret.HttpMethod.GET, e, {}, Object.assign({
                                    isReportTrack: !0
                                }, r)),
                                j[e] = o),
                                i.prev = 4,
                                i.next = 7,
                                o;
                            case 7:
                                return a = i.sent,
                                i.abrupt("return", (0,
                                E.Z)(a));
                            case 9:
                                return i.prev = 9,
                                delete j[e],
                                i.finish(9);
                            case 12:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i, null, [[4, , 9, 12]])
                }
                )))
            }
            function G(e, t) {
                return function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    return D(e, t, null, {
                        type: b.NONE,
                        isCancelCheckCode: !0,
                        isReportTrack: !1,
                        retryTime: n,
                        timeout: 2e4,
                        requestConfig: {
                            header: {
                                "Content-Type": "text/plain"
                            },
                            withCredentials: !1
                        },
                        retryParamAddTime: !0,
                        requestType: w.CDN_REQUEST
                    })
                }(egret.HttpMethod.GET, e, t)
            }
            function H(e, t, n) {
                return D(egret.HttpMethod.POST, e, t, Object.assign({
                    isReportTrack: !0
                }, n))
            }
        },
        5254: function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, {
                Q: function() {
                    return i
                },
                j: function() {
                    return r
                }
            }),
            function(e) {
                e.BACK_FROM_REDEEM = "back_from_redeem",
                e.UI_UPDATE_TILE_GRID = "ui_update_tile_grid",
                e.UI_UPDATE_GRID_TITLE = "ui_update_grid_title",
                e.UI_UPDATE_HISTORY = "ui_update_history",
                e.PLAY_CLAIM_REWARD = "play_claim_reward",
                e.START_EVENT = "start_event",
                e.UNCOVER = "uncover",
                e.UNCOVER_START = "uncover_start",
                e.UNCOVER_END = "uncover_end",
                e.UNLOCK_FREE = "unlock_free",
                e.UNLOCK_FREE_CHANGE = "unlock_free_change",
                e.SHOW_NEXT_MAIN_POPUP = "show_next_main_popup",
                e.ADD_REMIND = "add_remind",
                e.CHANGE_CARD = "change_card",
                e.SHOW_RESULT_PAGE = "show_result_Page",
                e.SHOW_EVENT_END_POPUP = "show_event_end_popup",
                e.SHOW_REVEAL_BTN_GUIDE = "show_reveal_btn_guide",
                e.UPDATE_EVENT_RESULT_SCROLLER = "update_event_result_scroller"
            }(r || (r = {})),
            function(e) {
                e.BACK_TO_GAME = "view_back_to_game"
            }(i || (i = {}))
        },
        2933: function(e, t, n) {
            "use strict";
            var r, i, o;
            n.d(t, {
                C2: function() {
                    return o
                },
                F4: function() {
                    return i
                },
                ix: function() {
                    return r
                }
            }),
            function(e) {
                e[e.NORMAL = 0] = "NORMAL",
                e[e.WAIT_CLAIM = 1] = "WAIT_CLAIM",
                e[e.CLAIMED = 2] = "CLAIMED",
                e[e.LOCKED = 3] = "LOCKED",
                e[e.MATCHED = 4] = "MATCHED",
                e[e.UNMATCHED = 5] = "UNMATCHED"
            }(r || (r = {})),
            function(e) {
                e.SHARE = "2",
                e.ADS = "1"
            }(i || (i = {})),
            function(e) {
                e.COIN = "coin",
                e.NOTHING = "nothing",
                e.VOUCHER = "voucher",
                e.PRODUCT = "product"
            }(o || (o = {}))
        },
        8844: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return f
                }
            });
            n(1249),
            n(5212),
            n(1539),
            n(7327),
            n(2772),
            n(9826),
            n(4553),
            n(9554),
            n(4747),
            n(7941),
            n(9070),
            n(7042),
            n(8309),
            n(1038),
            n(8783),
            n(4916),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(3948);
            var r = n(4080)
              , i = n(85)
              , o = n(2933)
              , a = n(3697)
              , c = n(984);
            function s(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e)
                            return;
                        if ("string" === typeof e)
                            return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return u(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0, c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        c = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                }
            }
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var f = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.tileCard = [],
                    this.winTileList = [],
                    this.rewardInfo = {
                        bingoReward: [],
                        smallReward: []
                    },
                    this.isClaimedBingo = !1,
                    this.willUncover = !1,
                    this.currentUncoverEmojis = [],
                    this.FREE_INDEX = 12,
                    this.FREE_ID = 99,
                    this.FREE_UNLOCK_STATUS_CACHE_KEY = "free_unlock_status",
                    this.bingoLineMap = {
                        leftSlash: [0, 6, 12, 18, 24],
                        rightSlash: [4, 8, 12, 16, 20],
                        horizontal: [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]],
                        vertical: [[0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24]]
                    }
                }
                var t, n, u;
                return t = e,
                u = [{
                    key: "getInstance",
                    value: function() {
                        return this.instance || (this.instance = new e),
                        this.instance
                    }
                }],
                (n = [{
                    key: "hasTileBg",
                    value: function() {
                        return !!i.Fh.image_emobg_normal && !!i.Fh.image_emobg_miss
                    }
                }, {
                    key: "isRewardNothing",
                    value: function(e) {
                        var t = e.bingo ? i.Fh.radio_bingoempty : i.Fh.radio_smallempty;
                        return e.rewardItem.kind === o.C2.NOTHING && ("0" === t || !e.rewardItem.prizeIcon)
                    }
                }, {
                    key: "initTileData",
                    value: function(e, t) {
                        if (t && e.matchedEmojis) {
                            this.winTileList = e.matchedEmojis;
                            var n = this.getCurrentUncoverIndex();
                            this.canShowUncoverAnimation(n) && this.cacheCurrentUncoverEmojis(n)
                        }
                        this.updateTileCard(e),
                        this.updateIsClaimedBingo()
                    }
                }, {
                    key: "cacheCurrentUncoverEmojis",
                    value: function(e) {
                        this.currentUncoverIndex = e,
                        this.currentUncoverEmojis = this.winTileList[e].emojis,
                        this.winTileList[e].emojis = this.currentUncoverEmojis.map((function() {
                            return 0
                        }
                        ))
                    }
                }, {
                    key: "isLastUncovered",
                    value: function() {
                        return 0 === this.winTileList.length || !this.winTileList[this.winTileList.length - 1].emojis.some((function(e) {
                            return !e
                        }
                        ))
                    }
                }, {
                    key: "updateCurrentUncoverEmojis",
                    value: function() {
                        this.winTileList[this.currentUncoverIndex].emojis = this.currentUncoverEmojis
                    }
                }, {
                    key: "updateTileCard",
                    value: function(e) {
                        var t = this;
                        this.tileCard = e.tiles.map((function(e) {
                            return e.isClaimed ? {
                                id: e.emojiID,
                                status: o.ix.CLAIMED
                            } : {
                                id: e.emojiID,
                                status: t.getTileStatus(e.emojiID)
                            }
                        }
                        ))
                    }
                }, {
                    key: "updateRewardHistory",
                    value: function(e) {
                        var t = this
                          , n = {
                            rewardItem: {
                                coin: 0,
                                kind: o.C2.COIN
                            },
                            bingo: !1
                        }
                          , r = {
                            rewardItem: {
                                coin: 0,
                                kind: o.C2.COIN
                            },
                            bingo: !0
                        }
                          , i = e.rewards.filter((function(e) {
                            var i = e.bingo;
                            return e.rewardItem.kind === o.C2.COIN ? ((i ? r : n).rewardItem.coin += e.rewardItem.coin,
                            !1) : i ? (!t.isRewardNothing(e) && t.rewardInfo.bingoReward.push(e),
                            !1) : !t.isRewardNothing(e)
                        }
                        ));
                        r.rewardItem.coin > 0 && this.rewardInfo.bingoReward.unshift(r),
                        n.rewardItem.coin > 0 && i.unshift(n),
                        this.rewardInfo.smallReward = i
                    }
                }, {
                    key: "getTileStatus",
                    value: function(e) {
                        var t = this
                          , n = 0;
                        return this.winTileList.some((function(r, o) {
                            return r.emojis.indexOf(e) >= 0 && (n = t.winTileList[o].uncoverTimeMs + 1e3 * i.j_.number_interval,
                            !0)
                        }
                        )) ? n && (0,
                        r.b)() >= n ? o.ix.LOCKED : o.ix.WAIT_CLAIM : o.ix.NORMAL
                    }
                }, {
                    key: "isAfterFirstOpenWinTile",
                    value: function() {
                        return !!this.winTileList[0] && (0,
                        c.AA)(this.winTileList[0].uncoverTimeMs)
                    }
                }, {
                    key: "updateStatus",
                    value: function(e, t) {
                        this.tileCard[e].status = t,
                        t === o.ix.CLAIMED && this.updateIsClaimedBingo()
                    }
                }, {
                    key: "getNextUpdateWinTileTime",
                    value: function() {
                        var e = (0,
                        r.b)()
                          , t = this.winTileList.find((function(t) {
                            return e < t.uncoverTimeMs
                        }
                        ));
                        return t ? t.uncoverTimeMs : this.winTileList[this.winTileList.length - 1].uncoverTimeMs + 1e3 * i.j_.number_interval
                    }
                }, {
                    key: "getCurrentUncoverTime",
                    value: function() {
                        return this.winTileList[this.getCurrentUncoverIndex()].uncoverTimeMs
                    }
                }, {
                    key: "getCurrentUncoverIndex",
                    value: function() {
                        var e = (0,
                        r.b)()
                          , t = this.winTileList.findIndex((function(t) {
                            return e < t.uncoverTimeMs
                        }
                        ));
                        return t < 0 ? this.winTileList.length - 1 : t > 0 ? t - 1 : t
                    }
                }, {
                    key: "canShowUncoverAnimation",
                    value: function(e) {
                        var t = this.winTileList[e].uncoverTimeMs;
                        return (0,
                        r.b)() >= t && !(0,
                        a.w2)(t) && !this.isLastUncovered()
                    }
                }, {
                    key: "isAllUncoverNow",
                    value: function() {
                        var e, t = (0,
                        r.b)(), n = s(this.winTileList);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var i = e.value;
                                if (i.uncoverTimeMs > t)
                                    return !0;
                                if (i.emojis.indexOf(0) >= 0)
                                    return !1
                            }
                        } catch (o) {
                            n.e(o)
                        } finally {
                            n.f()
                        }
                        return !0
                    }
                }, {
                    key: "isAllMissNow",
                    value: function() {
                        var e = this;
                        if (!this.isAllUncoverNow)
                            return !1;
                        var t = this.winTileList.filter((function(t) {
                            var n;
                            return t.emojis && (null === (n = t.emojis.filter((function(t) {
                                return e.getTileStatus(t) !== o.ix.LOCKED
                            }
                            ))) || void 0 === n ? void 0 : n.length) > 0
                        }
                        ));
                        return t && 0 === t.length
                    }
                }, {
                    key: "getCurrentWinTiles",
                    value: function() {
                        for (var e = (0,
                        r.b)(), t = this.winTileList.length - 1; t >= 0; t--) {
                            var n = this.winTileList[t];
                            if (n.uncoverTimeMs <= e)
                                return n
                        }
                        return {}
                    }
                }, {
                    key: "updateCardMatchTiles",
                    value: function() {
                        var e = this;
                        this.tileCard.forEach((function(t) {
                            t.status !== o.ix.CLAIMED && (t.status = e.getTileStatus(t.id))
                        }
                        ))
                    }
                }, {
                    key: "getClaimedEmojiCount",
                    value: function() {
                        var e = 0;
                        return this.tileCard.forEach((function(t) {
                            t.status === o.ix.CLAIMED && e++
                        }
                        )),
                        e
                    }
                }, {
                    key: "getRewardType",
                    value: function(e) {
                        var t = {};
                        e || (e = this.rewardInfo.bingoReward),
                        e.forEach((function(e) {
                            t[e.rewardItem.kind] = !0
                        }
                        ));
                        var n = Object.keys(t);
                        return n.length > 1 ? "multiple items" : t[o.C2.COIN] ? "coins" : n[0]
                    }
                }, {
                    key: "updateIsClaimedBingo",
                    value: function() {
                        var e = this
                          , t = [];
                        if (this.tileCard.forEach((function(e) {
                            e.status === o.ix.CLAIMED && t.push(e.id)
                        }
                        )),
                        t.length >= 5) {
                            if (this.updateIsClaimedBingoFromLine(this.bingoLineMap.leftSlash))
                                return;
                            if (this.updateIsClaimedBingoFromLine(this.bingoLineMap.rightSlash))
                                return;
                            if (this.bingoLineMap.horizontal.some((function(t) {
                                return e.updateIsClaimedBingoFromLine(t)
                            }
                            )))
                                return;
                            if (this.bingoLineMap.vertical.some((function(t) {
                                return e.updateIsClaimedBingoFromLine(t)
                            }
                            )))
                                return
                        }
                    }
                }, {
                    key: "updateIsClaimedBingoFromLine",
                    value: function(e) {
                        var t = this
                          , n = e.some((function(e) {
                            return t.tileCard[e].status !== o.ix.CLAIMED
                        }
                        ));
                        return n || (this.isClaimedBingo = !0,
                        this.bingoLine = e),
                        !n
                    }
                }, {
                    key: "getCardTile",
                    value: function(e) {
                        return this.tileCard.find((function(t) {
                            return t.id === e
                        }
                        ))
                    }
                }]) && l(t.prototype, n),
                u && l(t, u),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }()
        },
        3697: function(e, t, n) {
            "use strict";
            n.d(t, {
                _z: function() {
                    return N
                },
                lr: function() {
                    return A
                },
                gA: function() {
                    return L
                },
                jV: function() {
                    return M
                },
                w2: function() {
                    return B
                },
                OV: function() {
                    return Z
                },
                zG: function() {
                    return z
                },
                Rf: function() {
                    return J
                },
                cb: function() {
                    return U
                },
                oR: function() {
                    return F
                },
                kl: function() {
                    return G
                },
                SS: function() {
                    return j
                },
                xp: function() {
                    return V
                },
                yU: function() {
                    return K
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(6992),
            n(8783),
            n(3948),
            n(189),
            n(9554),
            n(4747),
            n(2222),
            n(1038),
            n(9070);
            var r = n(923)
              , i = n(4080)
              , o = n(85)
              , a = n(7075)
              , c = n(905)
              , s = "guide_popup_2"
              , u = n(5254)
              , l = n(2933)
              , f = n(8844)
              , h = n(3858)
              , d = (n(6699),
            n(2023),
            n(5428))
              , p = n(3969)
              , v = n(984)
              , g = n(7958)
              , m = n(1385)
              , y = n(2057);
            var _ = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , E = !1;
            function b() {
                return _(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = "push_notification",
                                e.next = 3,
                                (0,
                                m.kh)(t);
                            case 3:
                                if ((n = e.sent) || E) {
                                    e.next = 10;
                                    break
                                }
                                return E = !0,
                                e.next = 8,
                                (0,
                                m.pE)(t, (0,
                                a.A7)("text_other_remind_permission"));
                            case 8:
                                n = !!e.sent,
                                E = n;
                            case 10:
                                return e.abrupt("return", n);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            var w = "bingo_remind"
              , T = !1
              , S = {
                user: !0,
                expire: !1
            };
            function R() {
                var e = (0,
                h.Pl)()
                  , t = (0,
                p.rV)(w, S);
                return t && t[e] ? t[e] : []
            }
            function O(e) {
                var t, n, r, i = (0,
                h.Pl)();
                i && (0,
                p.LS)(w, (r = e,
                (n = i)in (t = {}) ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r,
                t), S)
            }
            function I(e, t, n) {
                return _(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                    var o, c, s, u, l, f, h;
                    return regeneratorRuntime.wrap((function(i) {
                        for (; ; )
                            switch (i.prev = i.next) {
                            case 0:
                                if (!y.ZP.pc) {
                                    i.next = 3;
                                    break
                                }
                                return r.c.getInstance().showToastTips(a.tv),
                                i.abrupt("return", !1);
                            case 3:
                                if (!y.ZP.ios || T) {
                                    i.next = 10;
                                    break
                                }
                                return i.next = 6,
                                b();
                            case 6:
                                if (T = i.sent) {
                                    i.next = 10;
                                    break
                                }
                                return (0,
                                d.cM)("[ remind ] ".concat((0,
                                v.gu)(e), " checkAndGetRemindPermission = false")),
                                i.abrupt("return", !1);
                            case 10:
                                if (!(o = R()).includes(e)) {
                                    i.next = 14;
                                    break
                                }
                                return (0,
                                d.cM)("[ remind ] ".concat((0,
                                v.gu)(e), " 已经添加过这个提醒，不再重复添加")),
                                i.abrupt("return", !0);
                            case 14:
                                return c = {
                                    paths: [{
                                        webNav: {
                                            url: (0,
                                            g.sA)(location.href, {
                                                from: "remind"
                                            })
                                        }
                                    }]
                                },
                                s = "home?navRoute=".concat(encodeURIComponent(window.btoa(JSON.stringify(c)))),
                                u = s,
                                l = s,
                                f = e / 1e3 | 0,
                                i.prev = 19,
                                h = {
                                    title: t,
                                    iOSMsg: n,
                                    androidMsg: n,
                                    startDate: f,
                                    iOSRedirectURI: u,
                                    androidRedirectURI: l,
                                    requestCalendarPermissionText: (0,
                                    a.A7)("text_other_remind_permission"),
                                    appendURIInCalendarNote: !0
                                },
                                console.log("[addReminder]", (0,
                                v.gu)(e), h),
                                (0,
                                d.cM)("[addReminder]", (0,
                                v.gu)(e)),
                                i.next = 25,
                                (0,
                                m.AD)(h, {
                                    showToast: !1,
                                    successToastText: (0,
                                    a.A7)("text_remind_success"),
                                    failureToastText: (0,
                                    a.A7)("text_remind_fail")
                                });
                            case 25:
                                return o.push(e),
                                O(o),
                                i.abrupt("return", !0);
                            case 30:
                                return i.prev = 30,
                                i.t0 = i.catch(19),
                                (0,
                                d.fZ)("[remind] 日历添加失败"),
                                i.abrupt("return", !1);
                            case 34:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i, null, [[19, 30]])
                }
                )))
            }
            var x = n(7262);
            function k(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var C = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            };
            function A() {
                return R().length > 0
            }
            function N() {
                return C(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!((t = (0,
                                h.Pl)()) <= 0)) {
                                    e.next = 4;
                                    break
                                }
                                return r.c.getInstance().showToastTips((0,
                                a.A7)("text_remind_fail")),
                                e.abrupt("return", !1);
                            case 4:
                                if (!A()) {
                                    e.next = 7;
                                    break
                                }
                                return r.c.getInstance().showToastTips((0,
                                a.A7)("text_remind_done")),
                                e.abrupt("return", !0);
                            case 7:
                                return (n = []).push(I(t, (0,
                                a.A7)("text_remind_uncover_title"), (0,
                                a.A7)("text_remind_uncover_content"))),
                                e.next = 11,
                                Promise.all(n);
                            case 11:
                                return r.c.getInstance().showToastTips((0,
                                a.A7)("text_remind_success")),
                                x.Z.dispatchEventWith(u.j.ADD_REMIND),
                                e.abrupt("return", !0);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            var P = "bingo_pre_event_popup"
              , D = {
                user: !0,
                expire: !1
            };
            function M() {
                var e = (0,
                p.rV)(P, D) || 0;
                return (0,
                h.W8)(e)
            }
            function j() {
                (0,
                p.LS)(P, (0,
                i.b)(), D)
            }
            function L() {
                return 1 === (0,
                p.rV)(s, {
                    user: !0,
                    expire: !1
                })
            }
            function G() {
                (0,
                p.LS)(s, 1, {
                    user: !0,
                    expire: !1
                })
            }
            var H = "uncover_animation";
            function B(e) {
                var t = (0,
                p.rV)(H, D)
                  , n = (0,
                h.B$)();
                return t && t[n] && t[n] === e
            }
            function V(e) {
                var t = k({}, (0,
                h.B$)(), e);
                (0,
                p.LS)(H, t, D)
            }
            function U() {
                var e = f.H.getInstance();
                return e.isAllUncoverNow() ? c.o0.EVENT_FINISHED : e.isAfterFirstOpenWinTile() ? c.o0.EVENT_STARTED : c.o0.PRE_EVENT
            }
            function F() {
                var e = function() {
                    var e = (0,
                    g.IO)("from");
                    return "remind" === e ? 1 : "share" === e ? 2 : 3
                }();
                return 2 === e ? {
                    from_source: e
                } : {}
            }
            var W = "change_emoji_times"
              , Y = 0;
            function Z() {
                var e = o.Fh.item_list_changecard_cost;
                if (!e || !e.length)
                    return l.F4.SHARE;
                if (0 === Y) {
                    var t = (0,
                    p.rV)(W, {
                        user: !0
                    });
                    Y = t && t[(0,
                    h.B$)()] || 0
                }
                var n = e[Math.min(Y, e.length - 1)];
                return n ? n.dropdown_type : l.F4.SHARE
            }
            function K() {
                "0" !== o.Fh.radio_changecard_cost && (Y++,
                (0,
                p.LS)(W, k({}, (0,
                h.B$)(), Y), {
                    user: !0
                }))
            }
            function J() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ("0" === o.Fh.radio_changecard_cost)
                    return "";
                if (0 === Y) {
                    var t = (0,
                    p.rV)(W, {
                        user: !0
                    });
                    Y = t && t[(0,
                    h.B$)()] || 0
                }
                var n = e ? Y : Y - 1;
                if (-1 === n)
                    return "no change";
                var r = o.Fh.item_list_changecard_cost;
                if (!r || !r.length)
                    return "share";
                var i = r[Math.min(n, r.length - 1)];
                return i.dropdown_type === l.F4.SHARE ? "share" : "ads"
            }
            function z() {
                var e = f.H.getInstance().rewardInfo
                  , t = new Set;
                return e.smallReward.concat(e.bingoReward).forEach((function(e) {
                    t.add("".concat(e.bingo ? "bingo" : "small", " ").concat(c.F3[e.rewardItem.kind]))
                }
                )),
                Array.from(t)
            }
        },
        9112: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return T
                }
            });
            n(5666),
            n(5003),
            n(1539),
            n(9070),
            n(8674),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(8304),
            n(489),
            n(2419);
            var r = n(7997)
              , i = n(923)
              , o = n(7075)
              , a = n(905)
              , c = n(5254)
              , s = n(8844)
              , u = n(3697)
              , l = n(3858)
              , f = n(984)
              , h = n(9411)
              , d = n(7262);
            function p(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function g(e, t) {
                return g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                g(e, t)
            }
            function m(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            function y(e, t) {
                if (t && ("object" === E(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function _(e) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                _(e)
            }
            function E(e) {
                return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                E(e)
            }
            var b = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : E(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , w = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , T = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && g(e, t)
                }(_, eui.Component);
                var t, n, r, y = m(_);
                function _() {
                    var e;
                    return p(this, _),
                    (e = y.apply(this, arguments)).skinName = skins.ReminderCom,
                    e.origin = "main",
                    e
                }
                return t = _,
                (n = [{
                    key: "childrenCreated",
                    value: function() {
                        this.txtTime.fontFamily = o.rp,
                        this.updateState(),
                        this.updateRemindStatue(),
                        this.btnRemind.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
                        d.Z.addEventListener(c.j.ADD_REMIND, this.updateRemindStatue, this)
                    }
                }, {
                    key: "onClick",
                    value: function() {
                        return w(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if ("disabled" !== this.btnRemind.currentState) {
                                            e.next = 3;
                                            break
                                        }
                                        return i.c.getInstance().showToastTips((0,
                                        o.A7)("text_remind_done")),
                                        e.abrupt("return");
                                    case 3:
                                        return e.next = 5,
                                        (0,
                                        u._z)();
                                    case 5:
                                        this.updateRemindStatue(),
                                        (0,
                                        h.Oq)(a.Wh.GAME_BINGO_MAIN_PAGE, a.aT.RESULT_PAGE, a.EA.REMIND_ME_BUTTON, {
                                            event_state: (0,
                                            u.cb)(),
                                            is_win_bingo: s.H.getInstance().isClaimedBingo ? 1 : 0
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "updateRemindStatue",
                    value: function() {
                        var e = (0,
                        u.lr)();
                        this.btnRemind.currentState = e ? "disabled" : "up",
                        this.btnRemind.label = (0,
                        o.A7)(e ? "text_remind_btn_done" : "text_pre_remind_btn")
                    }
                }, {
                    key: "updateState",
                    value: function() {
                        var e = (0,
                        l.Pl)();
                        e <= 0 || (this.txtMsg.text = (0,
                        o.A7)("text_event_notice_2"),
                        this.txtTime.text = (0,
                        f.bh)(e, "DD/MM HH:mm"))
                    }
                }]) && v(t.prototype, n),
                r && v(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                _
            }();
            b([(0,
            r.Py)()], T.prototype, "onClick", null),
            window.ReminderCom = T
        },
        8233: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return T
                }
            });
            n(5666),
            n(5003),
            n(1539),
            n(9070),
            n(8674),
            n(2222),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(8783),
            n(3948),
            n(8304),
            n(489),
            n(2419);
            var r = n(7997)
              , i = n(923)
              , o = n(85)
              , a = n(7075)
              , c = n(5254)
              , s = n(2933)
              , u = n(8844)
              , l = n(3399)
              , f = n(5966)
              , h = n(8923)
              , d = n(7262);
            function p(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function g(e, t) {
                return g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                ,
                g(e, t)
            }
            function m(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            function y(e, t) {
                if (t && ("object" === E(t) || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }
            function _(e) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                ,
                _(e)
            }
            function E(e) {
                return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                E(e)
            }
            var b = function(e, t, n, r) {
                var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" === typeof Reflect ? "undefined" : E(Reflect)) && "function" === typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (i = e[c]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , w = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , T = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && g(e, t)
                }(y, e);
                var t, n, r, h = m(y);
                function y(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.ix.NORMAL;
                    return p(this, y),
                    (t = h.call(this)).skinName = skins.TileItemSkin,
                    t.update(n, e),
                    t
                }
                return t = y,
                n = [{
                    key: "onEnter",
                    value: function() {
                        this.createDB()
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        (this.status !== e || void 0 !== t && this.id !== t) && (this.status = e,
                        this.updateStatusUI(),
                        void 0 !== t && (this.id = t),
                        this.updateBg(),
                        this.updateEmoji())
                    }
                }, {
                    key: "createDB",
                    value: function() {
                        this.db = l.x.getDisplay("bingo3_sc_local", "Armature"),
                        this.db.x = this.width / 2,
                        this.db.y = this.height / 2 - 3,
                        this.db.scaleX = this.db.scaleY = .82,
                        this.addChild(this.db)
                    }
                }, {
                    key: "resetEmoji",
                    value: function(e, t) {
                        this.db.animation.gotoAndStopByFrame("luck01", 18),
                        this.update(e, t)
                    }
                }, {
                    key: "playUncover",
                    value: function(e, t) {
                        var n = this
                          , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return new Promise((function(i) {
                            egret.Tween.get(n).to({
                                scaleX: 1.2,
                                scaleY: 1.2
                            }, 100).call((function() {
                                e !== s.ix.LOCKED && (n.addChild(n.db),
                                n.db.animation.play("luck01", 1)),
                                n.update(e, t)
                            }
                            )).to({
                                scaleX: 1,
                                scaleY: 1
                            }, 200).wait(300).call((function() {
                                r && (n.gpBox.addChildAt(n.db, 2),
                                n.db.animation.play("led_loop_FX_2", 3)),
                                i()
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "playShankInGrid",
                    value: function() {
                        return w(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e) {
                                            egret.Tween.get(t.emoji).set({
                                                scaleX: 1.4,
                                                scaleY: 1.4
                                            }).to({
                                                scaleX: 1,
                                                scaleY: 1
                                            }, 160).call((function() {
                                                t.claimedBg.visible = !0,
                                                e()
                                            }
                                            ))
                                        }
                                        )));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))
                    }
                }, {
                    key: "updateEmoji",
                    value: function() {
                        this.emoji.source = "image_emoji".concat(this.status === s.ix.LOCKED ? "_expired" : "", "_").concat(this.id)
                    }
                }, {
                    key: "updateBg",
                    value: function() {
                        var e = u.H.getInstance().hasTileBg() && this.status !== s.ix.CLAIMED && 0 !== this.id;
                        if (this.commonBg.visible = e,
                        e) {
                            var t = this.status === s.ix.LOCKED ? o.Fh.image_emobg_miss : o.Fh.image_emobg_normal;
                            this.commonBg.source = (0,
                            f.J)(t)
                        }
                    }
                }, {
                    key: "updateStatusUI",
                    value: function() {
                        this.claimedBg.visible = this.status === s.ix.CLAIMED,
                        this.missImg.visible = this.status === s.ix.LOCKED,
                        this.imgMatched.visible = this.status === s.ix.MATCHED,
                        this.imgUnMatched.visible = this.status === s.ix.UNMATCHED
                    }
                }, {
                    key: "onClick",
                    value: function() {
                        var e = u.H.getInstance()
                          , t = e.isAfterFirstOpenWinTile();
                        if (!e.isLastUncovered()) {
                            var n = t ? (0,
                            a.A7)("text_tap_reveal_tips") : (0,
                            a.A7)("text_tap_emoji_tips");
                            i.c.getInstance().showToastTips(n),
                            t && d.Z.dispatchEventWith(c.j.SHOW_REVEAL_BTN_GUIDE)
                        }
                    }
                }],
                n && v(t.prototype, n),
                r && v(t, r),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                y
            }(h.Z);
            b([(0,
            r.P2)()], T.prototype, "onClick", null),
            window.TileItem = T
        },
        3858: function(e, t, n) {
            "use strict";
            n.d(t, {
                B$: function() {
                    return d
                },
                M_: function() {
                    return s
                },
                Pl: function() {
                    return h
                },
                QH: function() {
                    return f
                },
                S1: function() {
                    return u
                },
                W8: function() {
                    return v
                },
                cj: function() {
                    return l
                },
                kJ: function() {
                    return p
                }
            });
            n(1539),
            n(9714);
            var r = n(4080)
              , i = n(9704)
              , o = n(7484)
              , a = n.n(o)
              , c = {
                eventCode: "",
                slotStartTime: 0,
                slotEndTime: 0,
                slotName: "",
                activityCode: "",
                activityStartTime: 0,
                activityEndTime: 0,
                activityName: "",
                nextSlotStartTime: 0,
                nextSlotEndTime: 0
            };
            function s(e, t) {
                e && t && (c.nextSlotStartTime = 1e3 * e,
                c.nextSlotEndTime = 1e3 * t)
            }
            function u(e, t, n) {
                t.start_time && t.slots[0] && function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 ? arguments[3] : void 0;
                    e && (c.eventCode = e),
                    c.slotStartTime = 1e3 * t,
                    c.slotEndTime = 1e3 * n,
                    c.slotName = r
                }(t.slots[0].slot_code, t.start_time, t.end_time),
                e.begin_time && function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 ? arguments[3] : void 0;
                    c.activityCode = e,
                    c.activityStartTime = 1e3 * t,
                    c.activityEndTime = 1e3 * n,
                    r && (c.activityName = r)
                }(i.Z.activityCode, e.begin_time, e.end_time),
                n && n.start_time > 0 && s(n.start_time, n.end_time),
                c.activityName = e.activity_name
            }
            function l() {
                return c.slotEndTime
            }
            function f() {
                return c.slotStartTime
            }
            function h() {
                return c.nextSlotStartTime
            }
            function d() {
                return c.eventCode
            }
            function p(e) {
                return function(e) {
                    return c.eventCode && c.slotStartTime && c.slotEndTime && a()((0,
                    r.b)()).isAfter(a()(c.slotStartTime)) && a()((0,
                    r.b)()).isBefore(a()(e ? c.slotEndTime + 3e5 : c.slotEndTime))
                }(e)
            }
            function v(e) {
                return console.log("当前时间： ", new Date(e).toString()),
                console.log("开始时间： ", new Date(c.slotStartTime).toString()),
                console.log("结束时间： ", new Date(c.slotEndTime).toString()),
                a()(e).isAfter(a()(c.slotStartTime)) && a()(e).isBefore(a()(c.slotEndTime))
            }
        },
        3399: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return l
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(6992),
            n(8783),
            n(3948),
            n(1249),
            n(8309),
            n(9826),
            n(9554),
            n(4747),
            n(1532),
            n(9070),
            n(7042),
            n(1038),
            n(4916),
            n(2526),
            n(1817),
            n(2165);
            var r = n(5426);
            var i = n(1704)
              , o = n(5134);
            function a(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e)
                            return;
                        if ("string" === typeof e)
                            return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return c(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0, s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        s = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                }
            }
            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var u = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , l = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, c;
                return t = e,
                c = [{
                    key: "getDisplay",
                    value: function(e, t) {
                        return o.Z.getDisplay(e, t)
                    }
                }, {
                    key: "getDisplayIns",
                    value: function(e, t) {
                        var n = RES.getRes(e + "_ske_json")
                          , r = RES.getRes(e + "_tex_json")
                          , i = RES.getRes(e + "_tex_png");
                        if (n && r && i) {
                            var o = new dragonBones.EgretFactory;
                            o.parseDragonBonesData(n),
                            o.parseTextureAtlasData(r, i);
                            var a = o.buildArmatureDisplay(t);
                            return this.dragonDisplayInsMap.set(a.hashCode, o),
                            a
                        }
                        console.error("get newDisplay get resource error")
                    }
                }, {
                    key: "disposeDisplayIns",
                    value: function(e) {
                        if (e) {
                            var t = this.dragonDisplayInsMap.get(e.hashCode);
                            t && (t.clear(),
                            this.dragonDisplayInsMap.delete(e.hashCode)),
                            e.dispose()
                        }
                    }
                }, {
                    key: "play",
                    value: function(e, t, n, r, i, a) {
                        return o.Z.play(e, t, n, r, i, a)
                    }
                }, {
                    key: "dispose",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        e && o.Z.dispose(e, t)
                    }
                }, {
                    key: "getFac",
                    value: function(e) {
                        return o.Z.getFac(e)
                    }
                }, {
                    key: "clearFac",
                    value: function(e) {
                        o.Z.clearFac(e)
                    }
                }, {
                    key: "createDbRes",
                    value: function(e) {
                        return ["".concat(e, "_ske_json"), "".concat(e, "_tex_json"), "".concat(e, "_tex_png")]
                    }
                }, {
                    key: "loadDbRes",
                    value: function(e, t) {
                        return u(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                            var r, o, c, s;
                            return regeneratorRuntime.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        r = this.createDbRes(e),
                                        o = a(r);
                                        try {
                                            for (o.s(); !(c = o.n()).done; )
                                                s = c.value,
                                                (0,
                                                i.tY)(RES.config.getResource(s), t)
                                        } catch (u) {
                                            o.e(u)
                                        } finally {
                                            o.f()
                                        }
                                        return n.prev = 3,
                                        n.next = 6,
                                        Promise.all(r.map((function(e) {
                                            return RES.getResAsync(e)
                                        }
                                        )));
                                    case 6:
                                        n.next = 11;
                                        break;
                                    case 8:
                                        n.prev = 8,
                                        n.t0 = n.catch(3),
                                        console.error("加载龙骨资源失败，name = ", e);
                                    case 11:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, this, [[3, 8]])
                        }
                        )))
                    }
                }, {
                    key: "isDbResLoaded",
                    value: function(e) {
                        var t = ["".concat(e, "_ske_json"), "".concat(e, "_tex_json"), "".concat(e, "_tex_png")];
                        return !!(RES.getRes(t[0]) && RES.getRes(t[1]) && RES.getRes(t[2]))
                    }
                }, {
                    key: "setNewSlot",
                    value: function(t, n, r) {
                        return u(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                            var o, a, c;
                            return regeneratorRuntime.wrap((function(i) {
                                for (; ; )
                                    switch (i.prev = i.next) {
                                    case 0:
                                        if ((o = null === t || void 0 === t ? void 0 : t.getSlot(n)) && r && RES.hasRes(r)) {
                                            i.next = 4;
                                            break
                                        }
                                        return console.error("资源不存在", n, r),
                                        i.abrupt("return");
                                    case 4:
                                        if (a = new egret.Bitmap,
                                        !RES.getRes(r)) {
                                            i.next = 10;
                                            break
                                        }
                                        a.texture = RES.getRes(r),
                                        e.setSlotSkin(o, a),
                                        i.next = 20;
                                        break;
                                    case 10:
                                        return c = o.name,
                                        i.prev = 11,
                                        i.next = 14,
                                        RES.getResAsync(r);
                                    case 14:
                                        o && o.slotData && c === o.name && (a.texture = RES.getRes(r),
                                        e.setSlotSkin(o, a)),
                                        i.next = 20;
                                        break;
                                    case 17:
                                        i.prev = 17,
                                        i.t0 = i.catch(11),
                                        console.error("【龙骨插槽替换失败】：", r, c, null === o || void 0 === o ? void 0 : o.name, i.t0);
                                    case 20:
                                    case "end":
                                        return i.stop()
                                    }
                            }
                            ), i, null, [[11, 17]])
                        }
                        )))
                    }
                }, {
                    key: "setNewSlotWithEmptyImage",
                    value: function(t, n) {
                        var r = t.getSlot(n);
                        if (r) {
                            var i = new egret.Bitmap;
                            i.texture = new egret.Texture,
                            e.setSlotSkin(r, i)
                        }
                    }
                }, {
                    key: "setSlotSkin",
                    value: function(t, n, r) {
                        if (n.texture) {
                            var i, o, a = t.display;
                            if (!a) {
                                if (void 0 === r)
                                    return;
                                a = t.displayList[r]
                            }
                            n.x = a.x,
                            n.y = a.y,
                            n.scaleX = a.scaleX,
                            n.scaleY = a.scaleY,
                            n.anchorOffsetX = n.width / 2,
                            n.anchorOffsetY = n.height / 2,
                            i = a,
                            o = "egret.Mesh",
                            egret.is(i, o) ? (a.texture = n.texture,
                            t.replaceDisplay(a)) : t.replaceDisplay(n),
                            t.invalidUpdate(),
                            a instanceof dragonBones.EgretArmatureDisplay && e.disposeSlotAnimation(t)
                        }
                    }
                }, {
                    key: "setSlotVisible",
                    value: function(e, t, n) {
                        var r = e.getSlot(t);
                        r ? r.visible = n : console.log("节点不存在 slotName = ", t)
                    }
                }, {
                    key: "getNewDisplay",
                    value: function(e, t, n) {
                        var r = this.sceneDragonFacMap.get(n) || []
                          , i = r.find((function(t) {
                            return t.animationName === e
                        }
                        ));
                        if (i) {
                            var o = i.dbFac.buildArmatureDisplay(t);
                            return o.__facName = e,
                            o
                        }
                        var a = RES.getRes(e + "_ske_json")
                          , c = RES.getRes(e + "_tex_json")
                          , s = RES.getRes(e + "_tex_png");
                        if (a && c && s) {
                            var u = new dragonBones.EgretFactory;
                            u.parseDragonBonesData(a),
                            u.parseTextureAtlasData(c, s),
                            r.push({
                                animationName: e,
                                dbFac: u
                            }),
                            this.sceneDragonFacMap.set(n, r);
                            var l = u.buildArmatureDisplay(t);
                            return l && (l.__facName = e),
                            l
                        }
                        console.error("get newDisplay get resource error")
                    }
                }, {
                    key: "playSlotAnimation",
                    value: function(t, n, i, o, a) {
                        var c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        return u(this, void 0, void 0, regeneratorRuntime.mark((function s() {
                            var u, l, f, h;
                            return regeneratorRuntime.wrap((function(s) {
                                for (; ; )
                                    switch (s.prev = s.next) {
                                    case 0:
                                        if (n && t && i) {
                                            s.next = 2;
                                            break
                                        }
                                        return s.abrupt("return");
                                    case 2:
                                        if (u = r.E.getInstance().curSceneName(),
                                        s.t0 = !e.isDbResLoaded(i),
                                        !s.t0) {
                                            s.next = 7;
                                            break
                                        }
                                        return s.next = 7,
                                        e.loadDbRes(i, a);
                                    case 7:
                                        if (t) {
                                            s.next = 9;
                                            break
                                        }
                                        return s.abrupt("return");
                                    case 9:
                                        if (s.prev = 9,
                                        l = t.getSlot(n),
                                        f = this.getNewDisplay(i, i, u),
                                        l && (null === f || void 0 === f ? void 0 : f.animation)) {
                                            s.next = 14;
                                            break
                                        }
                                        return s.abrupt("return");
                                    case 14:
                                        c ? e.setNewSlotWithEmptyImage(f.armature, n) : o && e.setNewSlot(f.armature, n, o),
                                        l.replaceDisplay(f.armature),
                                        f.animation.play(n, 0),
                                        l.invalidUpdate(),
                                        (h = this.slotDragonDisplayMap.get(l.hashCode) || []).push({
                                            dragonDisplay: f,
                                            sceneName: r.E.getInstance().curSceneName()
                                        }),
                                        this.slotDragonDisplayMap.set(l.hashCode, h),
                                        s.next = 26;
                                        break;
                                    case 23:
                                        s.prev = 23,
                                        s.t1 = s.catch(9),
                                        console.error(s.t1, "playSlotAnimation error");
                                    case 26:
                                    case "end":
                                        return s.stop()
                                    }
                            }
                            ), s, this, [[9, 23]])
                        }
                        )))
                    }
                }, {
                    key: "disposeSlotAnimation",
                    value: function(t) {
                        var n = this.slotDragonDisplayMap.get(t.hashCode)
                          , i = r.E.getInstance().backSceneName();
                        n && (n.forEach((function(t) {
                            if (t) {
                                var n = i === t.sceneName;
                                t && e.dispose(t.dragonDisplay, n),
                                t = null
                            }
                        }
                        )),
                        this.sceneDragonFacMap.delete(i),
                        this.slotDragonDisplayMap.delete(t.hashCode))
                    }
                }],
                (n = null) && s(t.prototype, n),
                c && s(t, c),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            l.slotDragonDisplayMap = new Map,
            l.sceneDragonFacMap = new Map,
            l.dragonDisplayInsMap = new Map
        },
        5692: function(e, t, n) {
            "use strict";
            n.d(t, {
                bd: function() {
                    return v
                },
                jL: function() {
                    return p
                },
                kM: function() {
                    return g
                }
            });
            n(2222),
            n(9601),
            n(9554),
            n(1539),
            n(4747);
            var r, i = n(5426), o = n(9704), a = n(1160), c = n(5428), s = n(7133), u = n(7958), l = n(569), f = n(3672), h = n(1695), d = new (n.n(h)())({
                mode: "interval",
                interval: 1e4,
                sample: 1
            });
            function p() {
                r || (r = new f.ApmsSdk({
                    de_app_id: window.APMS_APP_ID,
                    secret_key: window.APMS_APP_KEY,
                    js_bundle_name: "pet-".concat(window.ENVIRONMENT, "-").concat("H5"),
                    js_bundle_version: (0,
                    u.IO)("report_version") || "heads-tag-v2-2-0-20240423--live-html5",
                    region: window.COUNTRY,
                    js_build_id: window.VERSION,
                    environment: window.ENVIRONMENT,
                    interval: 1e4,
                    user_id: (0,
                    c.if)(),
                    user_email: (0,
                    s.gV)(),
                    user_name: (0,
                    s.Ms)(),
                    logger: (0,
                    u.L1)(2)
                })).use(d)
            }
            function v(e) {
                try {
                    r.reporter.configs.user_id = e.userid + "",
                    r.reporter.configs.user_name = e.username,
                    r.reporter.configs.user_email = e.email
                } catch (t) {}
            }
            function g(e, t) {
                var n;
                try {
                    (0,
                    u.L1)() && console.info("[reportApmsCustomError]", e);
                    if (.1 < (0,
                    l.sZ)())
                        return;
                    var r = {
                        user_id: (0,
                        c.if)(),
                        username: a.e.userName,
                        level: e.data.level || "error",
                        version: "heads-tag-v2-2-0-20240423--live-html5",
                        device_id: null !== (n = o.Z.device) && void 0 !== n ? n : ""
                    };
                    e.data.data_field = Object.assign(r, e.data.data_field, (0,
                    c.C2)() ? {
                        is_vip: !0
                    } : {}),
                    e.data.level = e.data.level || "error",
                    e.data.page_name = i.E.getInstance().curSceneName() || "loading",
                    d && t && t.length > 0 && (d.clearBreadcrumb(),
                    t.forEach((function(e) {
                        return d.addBreadcrumb(e)
                    }
                    ))),
                    d && d.capture(e),
                    (0,
                    u.L1)() && console.info("[reportApmsCustomError] end ")
                } catch (s) {
                    console.error(s)
                }
            }
        },
        992: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return p
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(2222),
            n(9554),
            n(4747),
            n(2479),
            n(9070);
            var r = n(277)
              , i = n(209)
              , o = (n(5212),
            n(9714),
            n(9653),
            n(6977),
            n(4916),
            n(3123),
            n(7520));
            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return (0,
                o.Z)(String(e), t, "0")
            }
            function c() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                if (3 !== t.length || t.some((function(e) {
                    return e < 0 || e > 255
                }
                )))
                    return null;
                var r = t[0]
                  , i = t[1]
                  , o = t[2];
                return "0x" + a(r.toString(16)) + a(i.toString(16)) + a(o.toString(16))
            }
            var s = n(3969)
              , u = n(9411)
              , l = n(2817)
              , f = n.n(l);
            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var d = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , p = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, o;
                return t = e,
                o = [{
                    key: "DISPLAY_AREA_WIDTH",
                    get: function() {
                        return this.SCALE_MODE === egret.StageScaleMode.FIXED_HEIGHT ? this.SCREEN_WIDTH / this.SCREEN_HEIGHT * this.DESIGN_HEIGHT : this.DESIGN_WIDTH
                    }
                }, {
                    key: "DISPLAY_AREA_HEIGHT",
                    get: function() {
                        return this.SCALE_MODE === egret.StageScaleMode.FIXED_WIDTH ? this.SCREEN_HEIGHT / this.SCREEN_WIDTH * this.DESIGN_WIDTH : this.DESIGN_HEIGHT
                    }
                }, {
                    key: "STAGE_WIDTH",
                    get: function() {
                        return this.STAGE.stageWidth
                    }
                }, {
                    key: "STAGE_HEIGHT",
                    get: function() {
                        return this.STAGE.stageHeight
                    }
                }, {
                    key: "SCALE_RATE_X",
                    get: function() {
                        return this.STAGE_WIDTH / this.DESIGN_WIDTH
                    }
                }, {
                    key: "SCALE_RATE_Y",
                    get: function() {
                        return this.STAGE_HEIGHT / this.DESIGN_HEIGHT
                    }
                }, {
                    key: "SCALE_MODE",
                    get: function() {
                        var e;
                        return (null === (e = this.STAGE) || void 0 === e ? void 0 : e.scaleMode) || egret.StageScaleMode.FIXED_WIDTH
                    }
                }, {
                    key: "init",
                    value: function(t) {
                        this.STAGE = t,
                        this.setScaleModel(),
                        this.STAGE_WIDTH_HALF = .5 * e.STAGE_WIDTH,
                        this.STAGE_HEIGHT_HALF = .5 * e.STAGE_HEIGHT,
                        this.FIT_STAGE_CENTER_Y = e.STAGE_HEIGHT_HALF - e.DESIGN_HEIGHT / 2,
                        console.log("重新适配，scaleModel: ".concat(e.SCALE_MODE)),
                        console.log("屏幕参数：width:".concat(this.SCREEN_WIDTH, ", height:").concat(this.SCREEN_HEIGHT)),
                        console.log("舞台参数: width:".concat(this.STAGE_WIDTH, ", height:").concat(this.STAGE_HEIGHT, " "))
                    }
                }, {
                    key: "onWindowResize",
                    value: function() {
                        console.log("======== resize ============"),
                        e.doResize(),
                        e.resizeCallback && e.resizeCallback()
                    }
                }, {
                    key: "setResizeCallback",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        e.resizeCallback = t
                    }
                }, {
                    key: "checkNavbarHide",
                    value: function() {
                        return d(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        r.i6)();
                                    case 2:
                                        if ((0,
                                        r.Z0)()) {
                                            e.next = 5;
                                            break
                                        }
                                        return this.doResize(),
                                        e.abrupt("return");
                                    case 5:
                                        return e.abrupt("return", new Promise((function(e) {
                                            var n = Date.now()
                                              , r = function() {
                                                return document.body.clientHeight !== window.clientHeight
                                            };
                                            if (r())
                                                return t.doResize(),
                                                (0,
                                                u.f1)({
                                                    type: "Performance",
                                                    info: i.jW.checkNavbarHide,
                                                    cost: Date.now() - n
                                                }),
                                                e();
                                            var o = 0
                                              , a = setInterval((function() {
                                                o++,
                                                (r() || o >= 10) && (clearInterval(a),
                                                t.doResize(),
                                                (0,
                                                u.f1)({
                                                    type: "Performance",
                                                    info: i.jW.checkNavbarHide,
                                                    cost: Date.now() - n
                                                }),
                                                e())
                                            }
                                            ), 100)
                                        }
                                        )));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                }, {
                    key: "startResizeListener",
                    value: function() {
                        e.stopResizeListener(),
                        window.addEventListener("resize", e.onWindowResize)
                    }
                }, {
                    key: "readaptSceneBg",
                    value: function() {
                        var e = this;
                        this.sceneBgMap = this.sceneBgMap || {},
                        Object.values(this.sceneBgMap).forEach((function(t) {
                            t.bg.texture = t.texture,
                            e.adjustFullBg(t.bg)
                        }
                        ))
                    }
                }, {
                    key: "clearSceneBgInfo",
                    value: function() {
                        this.sceneBgMap = {}
                    }
                }, {
                    key: "stopResizeListener",
                    value: function() {
                        window.removeEventListener("resize", e.onWindowResize)
                    }
                }, {
                    key: "getScreenItem",
                    value: function() {
                        return (0,
                        s.rV)(this.STORAGE_KEY, {
                            activity: !1
                        })
                    }
                }, {
                    key: "setScreenItem",
                    value: function(e, t) {
                        (0,
                        s.LS)(this.STORAGE_KEY, {
                            screenWidth: e,
                            screenHeight: t
                        }, {
                            activity: !1
                        })
                    }
                }, {
                    key: "doResize",
                    value: function() {
                        this.updateScreenSize(),
                        this.setScaleModel(),
                        this.STAGE_WIDTH_HALF = .5 * e.STAGE_WIDTH,
                        this.STAGE_HEIGHT_HALF = .5 * e.STAGE_HEIGHT,
                        this.FIT_STAGE_CENTER_Y = e.STAGE_HEIGHT_HALF - e.DESIGN_HEIGHT / 2,
                        console.log("========== updateScreenSize: ".concat(this.SCREEN_WIDTH, ", ").concat(this.SCREEN_HEIGHT, ", ").concat(e.SCALE_MODE, " =========="))
                    }
                }, {
                    key: "getIosSafeArea",
                    value: function() {
                        return (0,
                        r.s)() ? {
                            safeAreaInsetsTop: f().top,
                            safeAreaInsetsBottom: f().bottom
                        } : {
                            safeAreaInsetsTop: 0,
                            safeAreaInsetsBottom: 0
                        }
                    }
                }, {
                    key: "updateScreenSize",
                    value: function() {
                        var e = document.documentElement.clientWidth || document.body.clientWidth
                          , t = document.documentElement.clientHeight || document.body.clientHeight
                          , n = this.getIosSafeArea().safeAreaInsetsTop;
                        n > 0 && console.log("safeAreaInsetsTop = ", n),
                        this.safeAreaInsetsTop = n,
                        this.SCREEN_WIDTH = e,
                        this.SCREEN_HEIGHT = t
                    }
                }, {
                    key: "setScaleModel",
                    value: function() {
                        var e = this.STAGE;
                        e && (egret.Capabilities.isMobile ? this.SCREEN_WIDTH / this.SCREEN_HEIGHT > this.DESIGN_WIDTH / this.DESIGN_HEIGHT ? e.scaleMode = egret.StageScaleMode.FIXED_HEIGHT : e.scaleMode = egret.StageScaleMode.FIXED_WIDTH : e.scaleMode = egret.StageScaleMode.SHOW_ALL,
                        e.setContentSize(this.DESIGN_WIDTH, this.DESIGN_HEIGHT))
                    }
                }, {
                    key: "adjustFullBg",
                    value: function(t, n, r) {
                        e.SCALE_MODE === egret.StageScaleMode.FIXED_WIDTH ? (this.sceneBgMap = this.sceneBgMap || {},
                        !this.sceneBgMap[t.hashCode] && (this.sceneBgMap[t.hashCode] = {
                            bg: t,
                            texture: t.texture
                        }),
                        t.texture = this.creatFullScreenBg(t.texture || t.source, n, r)) : e.SCALE_MODE === egret.StageScaleMode.FIXED_HEIGHT && this.adjustFullSize(t)
                    }
                }, {
                    key: "creatFullScreenBg",
                    value: function(e, t, n) {
                        var r = "string" === typeof e ? RES.getRes(e) : e;
                        if (!r)
                            return console.error("背景适配失败，请检查资源是否加载成功：", e),
                            r;
                        console.log("bgTexture = ", r);
                        var i = new egret.Bitmap(r)
                          , o = new egret.RenderTexture
                          , a = new egret.DisplayObjectContainer
                          , s = this.STAGE_WIDTH
                          , u = this.STAGE_HEIGHT
                          , l = egret.Point.create(r.textureWidth / 2, 10)
                          , f = egret.Point.create(r.textureWidth / 2, r.textureHeight - 10)
                          , h = r.getPixels(l.x, l.y)
                          , d = r.getPixels(f.x, f.y);
                        t = t || c(h[0], h[1], h[2]),
                        n = n || c(d[0], d[1], d[2]),
                        console.log("top 颜色值：", h, t),
                        console.log("bottom 颜色值：", d, n);
                        var p = new egret.Sprite;
                        p.graphics.beginFill(t, h[3] / 255),
                        p.graphics.drawRect(0, 0, s, u / 2),
                        p.graphics.endFill();
                        var v = new egret.Sprite;
                        return v.graphics.beginFill(n, d[3] / 255),
                        v.graphics.drawRect(0, u / 2, s, u / 2),
                        v.graphics.endFill(),
                        i.x = s / 2 - i.width / 2,
                        i.y = u / 2 - i.height / 2,
                        a.addChild(p),
                        a.addChild(v),
                        a.addChild(i),
                        o.drawToTexture(a, new egret.Rectangle(0,0,s,u)),
                        o
                    }
                }, {
                    key: "adjustFullSize",
                    value: function(e) {
                        e.width = this.STAGE_WIDTH,
                        e.height = this.STAGE_HEIGHT
                    }
                }, {
                    key: "adjustPositionForAll",
                    value: function() {
                        for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                            n[r] = arguments[r];
                        n.forEach((function(t) {
                            e.adjustPosition(t)
                        }
                        ))
                    }
                }, {
                    key: "adjustPosition",
                    value: function(t) {
                        t && (e.SCALE_MODE === egret.StageScaleMode.FIXED_HEIGHT ? t.x = this.SCALE_RATE_X * t.x : e.SCALE_MODE === egret.StageScaleMode.FIXED_WIDTH && (t.y = t.y + this.FIT_STAGE_CENTER_Y))
                    }
                }, {
                    key: "getAdjustPos",
                    value: function(e) {
                        return {
                            x: this.getAdjustX(e.x),
                            y: this.getAdjustY(e.y)
                        }
                    }
                }, {
                    key: "getAdjustY",
                    value: function(e) {
                        return this.SCALE_RATE_Y * e
                    }
                }, {
                    key: "getAdjustX",
                    value: function(e) {
                        return this.SCALE_RATE_X * e
                    }
                }, {
                    key: "adjustCenter",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.adjustHCenter(t, e),
                        this.adjustVCenter(n, e)
                    }
                }, {
                    key: "adjustHCenter",
                    value: function(e, t) {
                        var n = t && t.parent ? t.parent.$getWidth() : this.STAGE_HEIGHT
                          , r = Math.round(n - t.$getWidth()) / 2 + e;
                        return t && (t.x = r),
                        r
                    }
                }, {
                    key: "adjustVCenter",
                    value: function(e, t) {
                        var n = t && t.parent ? t.parent.$getHeight() : this.STAGE_HEIGHT
                          , r = Math.round(n - t.$getHeight()) / 2 + e;
                        return t && (t.y = r),
                        r
                    }
                }, {
                    key: "adjustLeft",
                    value: function(e, t) {
                        var n = e;
                        return t && (t.x = n),
                        n
                    }
                }, {
                    key: "adjustRight",
                    value: function(e, t) {
                        var n = (t && t.parent ? t.parent.$getWidth() : this.STAGE_HEIGHT) - t.$getWidth() - e;
                        return t && (t.x = n),
                        n
                    }
                }, {
                    key: "adjustTopSafeArea",
                    value: function(e) {
                        var t = this
                          , n = this.getTopSafeAreaDiff();
                        n > 0 && e && e.forEach((function(e) {
                            e && !t.topSafeArea[e.hashCode] && (console.debug("adjustTopSafeArea", e.y, "+", n),
                            e.y = e.y + n,
                            t.topSafeArea[e.hashCode] = !0)
                        }
                        ))
                    }
                }, {
                    key: "getTopSafeAreaDiff",
                    value: function() {
                        var e = this.safeAreaInsetsTop - 44;
                        return e > 0 ? e : 0
                    }
                }, {
                    key: "adjustTop",
                    value: function(e, t) {
                        var n = e;
                        return t && (t.y = n),
                        n
                    }
                }, {
                    key: "adjustBottom",
                    value: function(e, t) {
                        var n = (t && t.parent ? t.parent.$getHeight() : this.STAGE_HEIGHT) - t.$getHeight() - e;
                        return t && (t.y = n),
                        n
                    }
                }, {
                    key: "fixWidth",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.STAGE_WIDTH
                          , n = e.getBounds()
                          , r = Math.round(t / n.width * 100) / 100;
                        e.width = t,
                        e.height = n.height * r
                    }
                }, {
                    key: "isPointInScene",
                    value: function(e) {
                        return e.x > 0 && e.x < this.DISPLAY_AREA_WIDTH && e.y > 0 && e.y < this.DISPLAY_AREA_HEIGHT
                    }
                }],
                (n = null) && h(t.prototype, n),
                o && h(t, o),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            p.STORAGE_KEY = "screen",
            p.DESIGN_WIDTH = 750,
            p.DESIGN_HEIGHT = 1334,
            p.STAGE_WIDTH_HALF = 0,
            p.STAGE_HEIGHT_HALF = 0,
            p.SCREEN_WIDTH = 0,
            p.SCREEN_HEIGHT = 0,
            p.safeAreaInsetsTop = 0,
            p.FIT_STAGE_CENTER_Y = 0,
            p.sceneBgMap = {},
            p.topSafeArea = {}
        },
        277: function(e, t, n) {
            "use strict";
            n.d(t, {
                A0: function() {
                    return I
                },
                A4: function() {
                    return S
                },
                A6: function() {
                    return U
                },
                Is: function() {
                    return O
                },
                M7: function() {
                    return G
                },
                S6: function() {
                    return T
                },
                Sf: function() {
                    return B
                },
                UZ: function() {
                    return V
                },
                W3: function() {
                    return R
                },
                Z0: function() {
                    return N
                },
                Zw: function() {
                    return y
                },
                eY: function() {
                    return L
                },
                ej: function() {
                    return x
                },
                gb: function() {
                    return H
                },
                i6: function() {
                    return _
                },
                oG: function() {
                    return j
                },
                s: function() {
                    return A
                },
                yj: function() {
                    return D
                },
                zx: function() {
                    return E
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(4916),
            n(5306),
            n(4603),
            n(9714),
            n(4678),
            n(4723),
            n(4765),
            n(1058),
            n(9601),
            n(2222),
            n(9653);
            var r = n(9704)
              , i = n(4956)
              , o = n(5428)
              , a = n(3969)
              , c = n(7262)
              , s = n(1385)
              , u = n(2057)
              , l = n(7358)
              , f = n(7570)
              , h = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , d = "";
            var p, v = window.navigator && window.navigator.userAgent.toLowerCase();
            function g(e) {
                var t = ("" + (new RegExp(e + "(\\d+((\\.|_)\\d+)*)").exec(v) || [, 0])[1]).replace(/_/g, ".");
                return parseFloat(t) || void 0
            }
            function m(e, t) {
                var n = Date.now();
                return new Promise((function(r, i) {
                    !function o() {
                        return Date.now() - n > 3e3 ? i("bridgeInit invoke fail") : bridgeInit && window.bridgeRegisterHandler ? (bridgeInit((function() {
                            bridgeCallHandler(e),
                            window.bridgeRegisterHandler(e, (function(e) {
                                t(e)
                            }
                            ))
                        }
                        )),
                        void r()) : setTimeout(o, 300)
                    }()
                }
                ))
            }
            function y() {
                return h(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(d = d || (0,
                                a.rV)("deviceID"))) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", d);
                            case 3:
                                return e.next = 5,
                                (0,
                                s.BN)().then((function(e) {
                                    return e.deviceID
                                }
                                )).catch((function() {
                                    return ""
                                }
                                ));
                            case 5:
                                return (t = e.sent) && (d = t),
                                d && (0,
                                a.LS)("deviceID", d, {
                                    expireTime: "live" === window.ENVIRONMENT ? 604800 : 86400,
                                    expire: !0
                                }),
                                e.abrupt("return", t);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            function _() {
                return h(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return");
                            case 2:
                                if (!(p = p || (0,
                                a.rV)("safeAreaInfo"))) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", p);
                            case 5:
                                return e.next = 7,
                                b("getConstants");
                            case 7:
                                if (0 === (t = e.sent).error) {
                                    e.next = 10;
                                    break
                                }
                                throw "[Error]internalBridageCall('getConstants')) error: ".concat(JSON.stringify(t));
                            case 10:
                                p = t.data,
                                console.log("internalBridageCall('getConstants')) safeAreaInfo = ", p),
                                p && (0,
                                a.LS)("safeAreaInfo", p, {
                                    expireTime: "live" === window.ENVIRONMENT ? 2592e3 : 86400,
                                    expire: !0
                                });
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            function E() {
                u.ZP.shopeeApp || (window.location.href = "//".concat(l.m4, "/app"))
            }
            function b(e, t) {
                var n = Date.now();
                return new Promise((function(r, i) {
                    !function o() {
                        return Date.now() - n > 3e3 ? i("bridgeInit invoke fail") : bridgeInit ? void bridgeInit((function() {
                            bridgeCallHandler(e, t, (function(e) {
                                r(e)
                            }
                            ))
                        }
                        )) : setTimeout(o, 300)
                    }()
                }
                ))
            }
            function w() {
                return c.Z.dispatchEventWith(i.a),
                b("popWebView")
            }
            function T(e) {
                return m("didTapBack", (function(t) {
                    r.Z.isStopServer ? w() : "function" === typeof e && e(t)
                }
                ))
            }
            function S(e) {
                return m("viewWillReappear", e)
            }
            function R(e) {
                return m("viewDidDisappear", e)
            }
            function O(e) {
                return console.log("[openWebView]", e),
                (0,
                s.tB)(e)
            }
            function I(e, t, n) {
                var r = new Date(0);
                document && (document.cookie = e + "=;expires=" + r.toUTCString() + ";path=" + (t || "/") + ";" + (n ? "domain=" + n + ";" : ""))
            }
            function x(e) {
                var t, n = new RegExp("(?:^|;+|\\s+)" + e + "=([^;]*)");
                return document && (t = n.exec(document.cookie)),
                (t ? t[1] : "") || null
            }
            window.closeWebView = w;
            var k = "";
            function C() {
                if (k)
                    return k;
                var e = {
                    ios: g("os "),
                    android: g("android[/ ]"),
                    pc: !g("os ") && !g("android[/ ]")
                };
                return e.android ? k = "android" : e.ios ? k = "ios" : e.pc ? k = "pc" : void 0
            }
            function A() {
                return "ios" === C()
            }
            function N() {
                return B() > 0
            }
            var P = "";
            var D = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                if ("function" !== typeof e)
                    throw "param is not function";
                var n = (new Date).getTime()
                  , r = null
                  , i = null;
                return function() {
                    return h(this, void 0, void 0, regeneratorRuntime.mark((function o() {
                        return regeneratorRuntime.wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    if (!((new Date).getTime() - n <= t)) {
                                        o.next = 10;
                                        break
                                    }
                                    if (i = i || e(),
                                    o.t0 = r,
                                    o.t0) {
                                        o.next = 7;
                                        break
                                    }
                                    return o.next = 6,
                                    i;
                                case 6:
                                    o.t0 = o.sent;
                                case 7:
                                    return r = o.t0,
                                    n = (new Date).getTime(),
                                    o.abrupt("return", r);
                                case 10:
                                    return n = (new Date).getTime(),
                                    i = e(),
                                    o.next = 14,
                                    i;
                                case 14:
                                    return r = o.sent,
                                    o.abrupt("return", r);
                                case 16:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    )))
                }
            }((function() {
                if (!u.ZP.shopeeApp && window.navigator.connection) {
                    var e = window.navigator.connection ? window.navigator.connection.effectiveType : "unknown";
                    return Promise.resolve(e)
                }
                var t = P || (0,
                a.rV)("network_info");
                if (t)
                    return t;
                var n = (new Date).getTime()
                  , r = {
                    0: "unknown",
                    1: "wifi"
                }
                  , i = {
                    CTRadioAccessTechnologyGPRS: "2G",
                    CTRadioAccessTechnologyEdge: "2G",
                    CTRadioAccessTechnologyWCDMA: "3G",
                    CTRadioAccessTechnologyHSDPA: "3G",
                    CTRadioAccessTechnologyHSUPA: "3G",
                    CTRadioAccessTechnologyCDMA1x: "2G",
                    CTRadioAccessTechnologyCDMAEVDORev0: "3G",
                    CTRadioAccessTechnologyCDMAEVDORevA: "3G",
                    CTRadioAccessTechnologyCDMAEVDORevB: "3G",
                    CTRadioAccessTechnologyeHRPD: "3G",
                    CTRadioAccessTechnologyLTE: "4G",
                    NETWORK_TYPE_UNKNOWN: "unknown",
                    NETWORK_TYPE_GPRS: "2G",
                    NETWORK_TYPE_EDGE: "2G",
                    NETWORK_TYPE_UMTS: "3G",
                    NETWORK_TYPE_CDMA: "2G",
                    NETWORK_TYPE_EVDO_0: "3G",
                    NETWORK_TYPE_EVDO_A: "3G",
                    NETWORK_TYPE_1xRTT: "2G",
                    NETWORK_TYPE_HSDPA: "3G",
                    NETWORK_TYPE_HSUPA: "3G",
                    NETWORK_TYPE_HSPA: "3G",
                    NETWORK_TYPE_IDEN: "2G",
                    NETWORK_TYPE_EVDO_B: "3G",
                    NETWORK_TYPE_LTE: "4G",
                    NETWORK_TYPE_EHRPD: "3G",
                    NETWORK_TYPE_HSPAP: "3G",
                    NETWORK_TYPE_GSM: "2G"
                };
                return b("getNetworkInfo").then((function(e) {
                    var t = r[e.networkType] || i[e.cellularType]
                      , c = (new Date).getTime();
                    return c - n > 5e3 && (console.log("[BridgeUtil handleNetworkInfo] cost Time: ".concat(c - n, "ms"), t),
                    (0,
                    o.p_)("[BridgeUtil handleNetworkInfo] cost time is more then 5s"),
                    (0,
                    a.LS)("network_info", t, {
                        expire: !0,
                        expireTime: 604800
                    })),
                    P = t,
                    t
                }
                )).catch((function(e) {
                    return (0,
                    o.fZ)(e),
                    (0,
                    o.p_)("获取 network 信息失败"),
                    P = "unknown",
                    "unknown"
                }
                ))
            }
            ));
            function M() {
                return u.ZP.shopeeApp ? !!(window.bridgeInit && window.connectWebViewJavascriptBridge && window.WebViewJavascriptBridge) : !(!window.bridgeInit || !window.connectWebViewJavascriptBridge)
            }
            function j() {
                M() && window.bridgeInit((function() {
                    window.bridgeCallHandler("adjustWebViewInsets", {
                        customTopInset: -999,
                        customLeftInset: -999,
                        customRightInset: -999,
                        customBottomInset: 0
                    })
                }
                ))
            }
            function L() {
                (0,
                s.MB)({
                    disableReload: 1
                })
            }
            function G() {
                window._gatap_force_disable_ && window._gatap_force_disable_(!0)
            }
            function H() {
                return b("isLoggedIn")
            }
            function B() {
                var e, t = window.navigator.userAgent;
                if (u.ZP.shopeeApp) {
                    var n = t.match(/appver=([0-9]+)/i);
                    e = parseInt(n ? n[1] : "0")
                } else
                    e = 0;
                return e
            }
            function V(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = Object.assign({
                    __anim__: 0
                }, t);
                window.bridgeCallHandler("navigateAppRL", {
                    apprl: e,
                    params: n
                })
            }
            (0,
            f.x0)(16);
            function U(e, t) {
                return new Promise((function(n) {
                    var r = egret.setTimeout((function() {
                        (0,
                        o.p_)("getEncryptedStr timeout ".concat(t), {
                            extra: {
                                paramsStr: e
                            }
                        }),
                        n({
                            data: {
                                result: ""
                            }
                        })
                    }
                    ), null, 1e4);
                    b("transformText", {
                        text: e,
                        method: t
                    }).then((function(e) {
                        egret.clearTimeout(r),
                        n(e)
                    }
                    ))
                }
                ))
            }
        },
        1360: function(e, t, n) {
            "use strict";
            n.d(t, {
                c0: function() {
                    return f
                },
                Nj: function() {
                    return d
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(2222),
            n(4916);
            var r, i = n(277), o = n(5428), a = n(9411), c = n(7958), s = n(2057), u = n(245), l = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            };
            function f() {
                try {
                    if (!s.ZP.mweb || (0,
                    c.L1)())
                        return;
                    var e = {
                        paths: [{
                            webNav: {
                                url: window.location.href
                            }
                        }]
                    }
                      , t = function(e) {
                        if (!e || e.length <= 0)
                            return e;
                        var t = new egret.ByteArray;
                        return t.writeUTFBytes(e),
                        egret.Base64Util.encode(t.buffer)
                    }(JSON.stringify(e))
                      , i = "home?navRoute=" + encodeURI(t);
                    "=" === i[i.length - 1] && (i = i.substr(0, i.length - 1)),
                    "complete" === document.readyState ? location.href = "shopee".concat(u.rb, "://").concat(i) : n.g.addEventListener("load", (function() {
                        location.href = "shopee".concat(u.rb, "://").concat(i)
                    }
                    )),
                    r && clearTimeout(r),
                    r = setTimeout((function() {
                        document.hidden || (0,
                        a.Ig)(JSON.stringify({
                            type: "invoteFailed",
                            ua: navigator.userAgent
                        }))
                    }
                    ), 3e3)
                } catch (l) {
                    console.error("invokeApp handle Error: ", l),
                    (0,
                    o.p_)("invokeApp handle Error")
                }
            }
            function h() {
                return l(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!("storage"in navigator) || !("estimate"in navigator.storage)) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3,
                                navigator.storage.estimate();
                            case 3:
                                return t = e.sent,
                                e.abrupt("return", t);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            function d() {
                return l(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(0,
                                i.s)()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4,
                                h();
                            case 4:
                                t = e.sent,
                                console.log("[ua] = ", navigator.userAgent),
                                console.log("[quota] = ", t && JSON.stringify(t)),
                                t && (0,
                                a.Ig)(JSON.stringify({
                                    type: "reportQuota",
                                    ua: navigator.userAgent,
                                    quota: t
                                }));
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
        },
        5966: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return i
                }
            });
            n(4916),
            n(2222);
            var r = {
                sg: "https://cf.shopee.sg/file/",
                my: "https://cf.shopee.com.my/file/",
                ph: "https://cf.shopee.ph/file/",
                tw: "https://cf.shopee.tw/file/",
                vn: "https://cf.shopee.vn/file/",
                th: "https://cf.shopee.co.th/file/",
                id: "https://cf.shopee.co.id/file/",
                br: "https://cf.shopee.com.br/file/",
                mx: "https://cf.shopee.com.mx/file/",
                co: "https://cf.shopee.com.co/file/",
                cl: "https://cf.shopee.cl/file/",
                pl: "https://cf.shopee.pl/file/",
                es: "https://cf.shopee.es/file/",
                fr: "https://cf.shopee.fr/file/",
                in: "https://cf.shopee.in/file/",
                ar: "https://cf.shopee.com.ar/file/",
                xx: "https://cf.shopee.sg/file/"
            };
            function i(e) {
                return e ? /^https?:\/\//.test(e) ? e : function(e) {
                    return e ? /^https?:\/\//.test(e) ? e : "".concat(r[window.COUNTRY.toLowerCase()]).concat(e) : ""
                }(e) : ""
            }
        },
        7045: function(e, t, n) {
            "use strict";
            function r(e) {
                return function(t, n, r) {
                    r.enumerable = e
                }
            }
            n.d(t, {
                M: function() {
                    return r
                }
            })
        },
        893: function(e, t, n) {
            "use strict";
            n.d(t, {
                $e: function() {
                    return l
                },
                G9: function() {
                    return i
                },
                Yk: function() {
                    return c
                },
                _v: function() {
                    return o
                },
                rl: function() {
                    return a
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(7042),
            n(4603),
            n(4916),
            n(9714),
            n(5306),
            n(3210),
            n(9554),
            n(4747),
            n(8309),
            n(1038),
            n(8783),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(3948);
            function r(e, t) {
                var n = 0;
                !function r() {
                    !function(e, t) {
                        var n = document.createElement("script");
                        n.async = !1,
                        n.src = e,
                        n.addEventListener("load", (function() {
                            n.parentNode.removeChild(n),
                            t()
                        }
                        ), !1),
                        n.addEventListener("error", (function() {
                            console.log("onerror"),
                            n.onerror = null
                        }
                        )),
                        document.body.appendChild(n)
                    }(e[n], (function() {
                        ++n >= e.length ? t() : r()
                    }
                    ))
                }()
            }
            function i() {
                r(["https://cdn.jsdelivr.net/npm/eruda@2.0.0", "https://cdn.jsdelivr.net/npm/eruda-memory@2.0.0", "https://cdn.jsdelivr.net/npm/eruda-fps@2.0.0", "https://cdn.jsdelivr.net/npm/eruda-timing@2.0.0", "https://cdn.jsdelivr.net/npm/eruda-dom@2.0.0"], (function() {
                    return function(e) {
                        if (e) {
                            var t = document.getElementsByTagName("HEAD").item(0)
                              , n = document.createElement("script");
                            n.type = "text/javascript",
                            n.text = e,
                            t && t.appendChild(n)
                        }
                    }("eruda.init();eruda.add(erudaMemory); eruda.add(erudaFps); eruda.add(erudaTiming); eruda.add(erudaDom);")
                }
                ))
            }
            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                return new Promise((function(t) {
                    return egret.setTimeout(t, null, e)
                }
                ))
            }
            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : egret.MainContext.instance.stage.width
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : egret.MainContext.instance.stage.height
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                e = Math.min(e, 2048),
                t = Math.min(t, 2048);
                var i = new egret.Shape;
                return i.graphics.beginFill(n, r),
                i.graphics.drawRect(0, 0, e, t),
                i.graphics.endFill(),
                i
            }
            function c(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "...";
                if (e && t && n) {
                    e.text = t;
                    for (var i = t.length; n < e.width && i > 0; )
                        e.text = t.slice(0, i) + r,
                        i -= 1
                }
            }
            var s = new RegExp("^[一-龥]$");
            function u(e) {
                return s.test(e[0])
            }
            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...";
                if (!e)
                    return "";
                for (var r = 0, i = 0, o = e.length; i < o; i++)
                    if ((r += u(e[i]) ? 2 : 1) > t)
                        return e.substring(0, i) + n;
                return e
            }
        },
        5428: function(e, t, n) {
            "use strict";
            n.d(t, {
                C2: function() {
                    return v
                },
                av: function() {
                    return d
                },
                cM: function() {
                    return y
                },
                fZ: function() {
                    return _
                },
                if: function() {
                    return p
                },
                nx: function() {
                    return h
                },
                p_: function() {
                    return E
                }
            });
            n(9653),
            n(2772),
            n(2222),
            n(9600),
            n(9554),
            n(1539),
            n(4747),
            n(7042),
            n(8309),
            n(1038),
            n(8783),
            n(4916),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(3948);
            var r = n(1160)
              , i = n(277)
              , o = n(5079)
              , a = n(2687);
            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                c(e)
            }
            function s(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e)
                            return;
                        if ("string" === typeof e)
                            return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return u(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0, c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        c = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                }
            }
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var l = !1
              , f = null
              , h = [11150, 20633, 16157, 11143];
            function d(e) {
                var t = {
                    userId: e.userid,
                    username: e.username
                };
                v() && (t.isVip = !0),
                o.av(t);
                (0,
                a.Pm)({
                    project: "bingo",
                    userId: e.userid,
                    offline: !1
                })
            }
            function p() {
                var e = Number(r.e.uid || +((0,
                i.ej)("SPC_U") || "-"));
                return isNaN(e) ? "" : e + ""
            }
            function v() {
                if (null === f) {
                    var e = +p();
                    return l = e > 1e3 && h.indexOf(e) >= 0,
                    f = l ? "vip-" : "",
                    l
                }
                return f.length > 0
            }
            function g() {
                return f = v() ? "vip-" : ""
            }
            function m(e) {
                f = g();
                var t = [];
                try {
                    var n, r = s(e);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value
                              , o = "object" === c(i)
                              , a = i instanceof Error;
                            t.push(a ? i.message : o ? JSON.stringify(i) : i)
                        }
                    } catch (u) {
                        r.e(u)
                    } finally {
                        r.f()
                    }
                } catch (l) {
                    console.error("handleArguments", l),
                    sLog("error", "".concat(f, "[Log Handle Error]:").concat(JSON.stringify(l)))
                }
                return f + t.join(" ")
            }
            function y() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = m(t);
                sLog("log", r)
            }
            function _() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = m(t);
                sLog("error", r),
                t && t.forEach((function(e) {
                    return console.error("[logErr]", e)
                }
                ))
            }
            function E() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                if ("production" === window.MODE && t && !(t.length < 1)) {
                    var r, i;
                    f = g();
                    var a = t[t.length - 1];
                    if (t && "object" === c(a) && (a.hasOwnProperty("rate") ? (r = a.rate,
                    t[t.length - 1] = {
                        rate: r
                    }) : t.length > 1 && t.pop(),
                    i = a),
                    !(r <= 0)) {
                        var s = r && 2 === t.length && "object" === c(t[0])
                          , u = !r && 1 === t.length && "object" === c(t[0]);
                        s || u ? (t[0].message = f + t[0].message || "",
                        t[0].message += r ? ",rate: ".concat(r, ",") : "",
                        o.Tb(t[0], i)) : o.uT(m(t), i)
                    }
                }
            }
        },
        7133: function(e, t, n) {
            "use strict";
            n.d(t, {
                Xx: function() {
                    return P
                },
                gV: function() {
                    return S
                },
                Ms: function() {
                    return R
                },
                x3: function() {
                    return A
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(9653),
            n(9601);
            var r = n(1160)
              , i = n(7075)
              , o = n(766)
              , a = n(42)
              , c = n(5692)
              , s = n(5428)
              , u = n(7358)
              , l = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            };
            function f() {
                return l(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n, i, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = "//".concat(u.m4, "/api/v2/user/login_status"),
                                n = {},
                                i = {
                                    type: a.py.NONE,
                                    retryTime: 2,
                                    isCancelCheckCode: !0
                                },
                                e.next = 5,
                                (0,
                                a.U2)(t, n, i);
                            case 5:
                                return (o = e.sent) && 0 === o.error && o.data && ((0,
                                s.av)(o.data),
                                (0,
                                c.bd)(o.data),
                                r.e.uid = o.data.userid,
                                r.e.email = o.data.email,
                                r.e.userName = o.data.username,
                                r.e.avatarHash = o.data.portrait),
                                e.abrupt("return", o);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            var h, d, p = n(277), v = n(209), g = n(3969), m = n(9411), y = n(1385), _ = n(2057), E = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            };
            !function(e) {
                e[e.NOT_APP = 1] = "NOT_APP",
                e[e.BRIDGE_FAIL = 2] = "BRIDGE_FAIL",
                e[e.LOGIN_TRUE = 3] = "LOGIN_TRUE",
                e[e.LOGIN_FALSE = 4] = "LOGIN_FALSE"
            }(h || (h = {})),
            function(e) {
                e[e.SUCCESS = 0] = "SUCCESS",
                e[e.CANCEL = 2] = "CANCEL"
            }(d || (d = {}));
            var b = "bingo_user_info"
              , w = function() {
                var e = T()
                  , t = +((0,
                p.ej)("SPC_U") || "-")
                  , n = e.userid === t;
                return n && ((0,
                s.av)(e),
                r.e.uid = e.userid,
                r.e.email = e.email,
                r.e.userName = e.username),
                t && n
            };
            function T() {
                var e = localStorage.getItem(b) || "{}";
                try {
                    e = JSON.parse(e) || {}
                } catch (t) {}
                return e && e.data || {}
            }
            function S() {
                var e = T();
                return e && e.email || ""
            }
            function R() {
                var e = T();
                return e && e.username || ""
            }
            var O = "login_times_key"
              , I = {
                expire: !0,
                user: !0
            }
              , x = function() {
                var e;
                return null !== (e = (0,
                g.rV)(O, I)) && void 0 !== e ? e : 0
            }
              , k = function() {
                var e, t = Number(null !== (e = (0,
                g.rV)(O, I)) && void 0 !== e ? e : 0);
                (0,
                g.LS)(O, t + 1, Object.assign(Object.assign({}, I), {
                    expireTime: 60
                }))
            }
              , C = !1;
            function A() {
                var e;
                return E(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n, r;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (5 !== x()) {
                                    t.next = 3;
                                    break
                                }
                                return (0,
                                s.p_)("[login error] 连续".concat(5, "次 登录失败")),
                                t.abrupt("return");
                            case 3:
                                if (C) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 6,
                                (0,
                                y.x4)(1, window.location.href, 1, !1).then((function(e) {
                                    return e
                                }
                                )).catch((function(e) {
                                    console.log("login func call error:", e.message)
                                }
                                ));
                            case 6:
                                n = t.sent,
                                (r = null !== (e = null === n || void 0 === n ? void 0 : n.error) && void 0 !== e ? e : -1) !== d.CANCEL && k(),
                                r === d.SUCCESS && window.location.reload();
                            case 10:
                                C = !0;
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
            function N() {
                var e, t, n;
                return E(this, void 0, void 0, regeneratorRuntime.mark((function r() {
                    var i, o;
                    return regeneratorRuntime.wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                if (_.ZP.shopeeApp) {
                                    r.next = 2;
                                    break
                                }
                                return r.abrupt("return", h.NOT_APP);
                            case 2:
                                return r.prev = 2,
                                r.next = 5,
                                (0,
                                p.gb)();
                            case 5:
                                return i = r.sent,
                                o = 0 === (null === (e = i) || void 0 === e ? void 0 : e.error) && (null === (n = null === (t = i) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.isLoggedIn),
                                r.abrupt("return", o ? h.LOGIN_TRUE : h.LOGIN_FALSE);
                            case 10:
                                return r.prev = 10,
                                r.t0 = r.catch(2),
                                console.error("bridgeCall error", r.t0),
                                r.abrupt("return", h.BRIDGE_FAIL);
                            case 14:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r, null, [[2, 10]])
                }
                )))
            }
            var P = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return E(void 0, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n, a;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!r.e.uid) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", !0);
                            case 2:
                                if (n = Date.now(),
                                !w()) {
                                    t.next = 8;
                                    break
                                }
                                return N().then((function(e) {
                                    e === h.LOGIN_FALSE && (A(),
                                    console.log("【登陆】跳转登陆"))
                                }
                                )),
                                (0,
                                m.f1)({
                                    type: "Performance",
                                    info: v.jW.checkLogin,
                                    cost: Date.now() - n
                                }),
                                t.abrupt("return", !0);
                            case 8:
                                return t.next = 10,
                                N();
                            case 10:
                                if (t.sent !== h.LOGIN_FALSE) {
                                    t.next = 15;
                                    break
                                }
                                throw A(),
                                console.log("【登陆】跳转登陆"),
                                new o.R((0,
                                i.A7)("text_not_login"),o.s.LOGIN_ERROR);
                            case 15:
                                return t.next = 17,
                                f();
                            case 17:
                                if (!(a = t.sent) || 0 !== a.error || !a.data) {
                                    t.next = 25;
                                    break
                                }
                                return console.log("【登陆】验证登陆"),
                                localStorage.setItem(b, JSON.stringify(a)),
                                (0,
                                m.f1)({
                                    type: "Performance",
                                    info: v.jW.checkLogin,
                                    cost: Date.now() - n
                                }),
                                t.abrupt("return", !0);
                            case 25:
                                throw e && (A(),
                                console.log("【登陆】跳转登陆")),
                                new o.R((0,
                                i.A7)("text_not_login"),o.s.LOGIN_ERROR);
                            case 27:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
        },
        209: function(e, t, n) {
            "use strict";
            n.d(t, {
                EU: function() {
                    return I
                },
                Mq: function() {
                    return a
                },
                XB: function() {
                    return T
                },
                Zf: function() {
                    return C
                },
                aj: function() {
                    return i
                },
                in: function() {
                    return s
                },
                jW: function() {
                    return w
                },
                z5: function() {
                    return A
                }
            });
            n(4916),
            n(9601);
            var r, i, o, a, c, s, u, l = n(5428), f = n(7958), h = n(9065), d = n(7677), p = n.n(d), v = n(1355), g = n.n(v), m = n(7130), y = n.n(m), _ = n(8397), E = n.n(_), b = {
                test: "b84e6f65db0c12929b1557cbcc11246dbc6d3967dc6e32c75839ae7551eb6c9b",
                live: "1ec824d9bf35ef40e5245c6eda5c73467602a757420169656a92b9d17b3d901f"
            }, w = {
                firstPaint: "1.first_paint",
                runStart: "1.1 runStart",
                createChildren: "1.2 createChildren",
                processNormal: "1.3 processNormal",
                loadSettingData: "1.3.1.1 loadSettingData",
                loadResource: "1.3.1 loadResource",
                checkNavbarHide: "1.3.1 checkNavbarHide",
                checkLogin: "1.3.1 checkLogin",
                promiseAll: "1.4 Promise.all",
                entryNormal: "2. entryNormal",
                preloadSceneGroup: "2.2 preloadSceneGroup",
                loadSceneJs: "2.2 loadSceneJs",
                initData: "2.3 initData",
                changeScene: "3.runScene"
            }, T = {
                test: {
                    firstPaint: "8f92a6e59459ebe4447ba5739ab6c690",
                    runStart: "9ca9f48d60c19f78e40cd005e18728e0",
                    createChildren: "ddfad97b27081883cacf7a292c51f86c",
                    processNormal: "4389cedcd7323e8ebbd097255ed6579e",
                    loadSettingData: "4a47450648c13d81980646791e59497c",
                    loadResource: "007b78847f5b936966599d8f6d6c4cee",
                    checkNavbarHide: "a9d395b11a0303024ae8249eb04161f5",
                    checkLogin: "dcd9e6b4ade545f8ece34db9127cdc3b",
                    promiseAll: "2e71af589e732c76b45d2ea37546361d",
                    entryNormal: "b031e66060c219cc731103abe9474012",
                    preloadSceneGroup: "db3503c7fe0fa0c52d65722e881a71d8",
                    loadSceneJs: "3a93a3c693bcb97f88c964022a1fa445",
                    initData: "33ebca4baeabe1715666ac3102b51215",
                    changeScene: "3a4c9bd9e6ad7939080fdec379997de6"
                },
                live: {
                    firstPaint: "8f92a6e59459ebe4447ba5739ab6c690",
                    runStart: "9ca9f48d60c19f78e40cd005e18728e0",
                    createChildren: "ddfad97b27081883cacf7a292c51f86c",
                    processNormal: "4389cedcd7323e8ebbd097255ed6579e",
                    loadSettingData: "4a47450648c13d81980646791e59497c",
                    loadResource: "007b78847f5b936966599d8f6d6c4cee",
                    checkNavbarHide: "a9d395b11a0303024ae8249eb04161f5",
                    checkLogin: "dcd9e6b4ade545f8ece34db9127cdc3b",
                    promiseAll: "2e71af589e732c76b45d2ea37546361d",
                    entryNormal: "b031e66060c219cc731103abe9474012",
                    preloadSceneGroup: "db3503c7fe0fa0c52d65722e881a71d8",
                    loadSceneJs: "3a93a3c693bcb97f88c964022a1fa445",
                    initData: "33ebca4baeabe1715666ac3102b51215",
                    changeScene: "3a4c9bd9e6ad7939080fdec379997de6"
                }
            };
            !function(e) {
                e.FIRST_PAINT = "2cb3b343ef18bfab1ab8a9f354a482ad",
                e.NATIVE_FIRST_PAINT = "c7b5835a2cb3f80a8b85e3af3575a105",
                e.FIRST_INTERACTIVE = "b9df2613f1777ef9bf5e3bb4fd26c10e",
                e.NATIVE_FIRST_INTERACTIVE = "33c6071e5135ddfda6da0e4baedc4ba0"
            }(r || (r = {})),
            function(e) {
                e.WEBGL_LOST_CONTEXT = "82c0600cf2aba7eee0295518b3a4443d",
                e.RESTORE_WEBGL_CONTEXT = "ed9b41bbf3d6c6d21ae5d757aafd3c70",
                e.CANVAS_RENDERING_WEBGL_LOST_CONTEXT = "59c41b605f9e5c605b84224947ae443b"
            }(i || (i = {})),
            function(e) {
                e.FIRST_PAINT = "2cb3b343ef18bfab1ab8a9f354a482ad",
                e.NATIVE_FIRST_PAINT = "c7b5835a2cb3f80a8b85e3af3575a105",
                e.FIRST_INTERACTIVE = "b9df2613f1777ef9bf5e3bb4fd26c10e",
                e.NATIVE_FIRST_INTERACTIVE = "33c6071e5135ddfda6da0e4baedc4ba0"
            }(o || (o = {})),
            function(e) {
                e.INDEX_DB_FIRST = "ae6f7cfbbb4e1a472e096fd03e9ced41",
                e.SERVICE_WORKER_FIRST = "40d80102fb1b3468590eb9081aa4e7b3",
                e.NETWORK_FIRST = "ad28159a9df7e007034e741a17929478"
            }(a || (a = {})),
            function(e) {
                e.QUERY_CDN_ASSET_INDEXDB = "dabafbd313d2820b1a014225f1eb5bbd",
                e.QUERY_CDN_ASSET_CDN = "1c389eb807c2c4f23d219146d489ccd5"
            }(c || (c = {})),
            function(e) {
                e.FIRST_INTERACTIVE_MODULE_ASSETS = "40741426a4dca2ef33c1a32b07ab0b1f",
                e.FIRST_INTERACTIVE_ALL_ASSETS = "c3c85ebc989c8bc33fabf42aa6e1bb1a"
            }(s || (s = {})),
            function(e) {
                e.JS_BRIDGE_ENCRYPT_COST = "33f9dc63fc4776aab03b51ffb756221e"
            }(u || (u = {}));
            var S, R = null, O = null;
            function I() {
                if (!S) {
                    S = new h.MdapSdk({
                        app_name: "bingo-fe",
                        secret_key: b[window.ENVIRONMENT] || b.test,
                        environment: window.ENVIRONMENT,
                        region: window.COUNTRY,
                        logger: !1,
                        app_version: (0,
                        f.IO)("report_version") || "heads-tag-v2-2-0-20240423--live-html5",
                        sample: (0,
                        f.IO)("report_version") || (0,
                        f.IO)("debug") || (0,
                        l.C2)() ? 1 : .3,
                        user_id: (0,
                        l.if)()
                    });
                    var e = new (y())({});
                    S.use(e),
                    R = new h.CustomPlugin({}),
                    O = new (g()),
                    Benchmark.registerMdapPlugin(O);
                    var t = new (p())({
                        path: ["api-gateway/bingo/(?!(heartbeat|bingo/status))", "gameplatform/api/"]
                    })
                      , n = new (E())({
                        path: ["games.deo.shopeemobile.com/shopee/", "cf.shopee"]
                    });
                    S.use(O),
                    S.use(R),
                    S.use(t),
                    S.use(n)
                }
            }
            var x = {
                test: o,
                live: r
            };
            function k(e) {
                var t;
                return (null !== (t = x[window.ENVIRONMENT]) && void 0 !== t ? t : x.test)[e]
            }
            var C = {
                FIRST_PAINT: k("FIRST_PAINT"),
                NATIVE_FIRST_PAINT: k("NATIVE_FIRST_PAINT"),
                FIRST_INTERACTIVE: k("FIRST_INTERACTIVE"),
                NATIVE_FIRST_INTERACTIVE: k("NATIVE_FIRST_INTERACTIVE")
            };
            function A(e) {
                R && R.sendData(Object.assign({}, e))
            }
        },
        1704: function(e, t, n) {
            "use strict";
            n.d(t, {
                BH: function() {
                    return b
                },
                FG: function() {
                    return E
                },
                R2: function() {
                    return O
                },
                WM: function() {
                    return _
                },
                Xu: function() {
                    return R
                },
                l3: function() {
                    return w
                },
                nZ: function() {
                    return T
                },
                tY: function() {
                    return S
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(8309),
            n(2772),
            n(1249),
            n(2479),
            n(4916),
            n(5306),
            n(4603),
            n(9714),
            n(5069),
            n(6992),
            n(8783),
            n(3948),
            n(2222),
            n(9554),
            n(4747),
            n(4986),
            n(4553),
            n(8264),
            n(9575),
            n(6716),
            n(7327),
            n(6699),
            n(2023),
            n(2526),
            n(1817),
            n(2165),
            n(1038),
            n(7042);
            var r = n(7262)
              , i = n(2967)
              , o = n(6779)
              , a = n(2369)
              , c = n(7075)
              , s = n(1729)
              , u = n(8940)
              , l = n(5966)
              , f = n(5428)
              , h = n(7958)
              , d = n(7495);
            function p(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return v(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return v(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var g = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , m = [];
            function y(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image"
                  , r = {
                    name: e,
                    type: n,
                    url: t = t && -1 === t.indexOf("https://") ? "json" === n ? (0,
                    h.Qq)(t) : (0,
                    l.J)(t) : t,
                    root: "",
                    extra: 1
                };
                return e && t && r
            }
            function _(e) {
                for (var t in e)
                    if (0 === t.indexOf("image_") && "string" === typeof e[t]) {
                        var n = {
                            name: t,
                            type: "image",
                            url: (0,
                            l.J)(e[t]),
                            root: "",
                            extra: 1
                        };
                        m.push(n)
                    } else if (0 === t.indexOf("audio_")) {
                        var r = {
                            name: t,
                            type: "sound",
                            url: (0,
                            d.Xn)("audio_", e[t], window.COUNTRY).value,
                            root: "",
                            extra: 1
                        };
                        m.push(r)
                    } else if (0 === t.indexOf("text_"))
                        (0,
                        c.Bh)(t, e[t]);
                    else if (0 === t.indexOf("item_list_")) {
                        t.substring("item_list_".length);
                        u = e[t],
                        u && u.map((function(e) {}
                        ))
                    } else if (t.indexOf("image_") > -1 && Array.isArray(e[t])) {
                        for (var i = e[t], o = [], a = 0; a < i.length; a++) {
                            var s = y(t + a, i[a]);
                            m.push(s),
                            o.push(s.name)
                        }
                        e[t] = o
                    }
                var u
            }
            function E(e) {
                var t;
                for (var n in e) {
                    if (!(null === (t = e[n][0]) || void 0 === t ? void 0 : t.sprite))
                        return;
                    var r = e[n][0]
                      , i = window.isSupportWebp ? r.paramsWebp : r.params
                      , o = {
                        name: "".concat(n, "_json"),
                        type: "sheet",
                        url: null !== i && void 0 !== i ? i : r.params,
                        root: "",
                        extra: 1
                    };
                    m.push(o)
                }
            }
            function b(e) {
                var t = RES.config.config.alias
                  , n = {};
                Object.values(t).map((function(e) {
                    var t = e.indexOf("#");
                    if (t > -1) {
                        var r = e.substring(t + 1);
                        n[r] = r
                    }
                }
                ));
                for (var r = 0, i = m.length; r < i; r++) {
                    var o = m[r].name;
                    if (!e || !Array.isArray(e) || -1 === e.indexOf(o)) {
                        var a = RES.config.getResource(o);
                        if (a)
                            a.url = (0,
                            h.lr)(m[r].url),
                            a.root = "";
                        else {
                            m[r] && (m[r].url = (0,
                            h.lr)(m[r].url));
                            var c = n[o];
                            m[r] && m[r].url && !c && RES.$addResourceData(m[r])
                        }
                    }
                }
            }
            var w = function(e) {
                return g(void 0, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n, c;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return n = (0,
                                a.SB)(e),
                                c = {
                                    onProgress: function(e, t) {
                                        r.Z.dispatchEventWith(o.KQ, !1, e / t)
                                    }
                                },
                                t.next = 4,
                                i.Z.loadGroups("scene_res", n, c, !0);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
              , T = function(e, t) {
                var n = (0,
                a.SB)(e)
                  , r = (0,
                a.EU)(e)
                  , i = (0,
                a.SB)(t)
                  , o = (0,
                a.EU)(t)
                  , c = [].concat(p(n), p(r))
                  , u = [].concat(p(i), p(o))
                  , l = [];
                c.forEach((function(e) {
                    -1 === u.lastIndexOf(e) && l.push(e)
                }
                )),
                l.map((function(e) {
                    return RES.destroyRes(e)
                }
                )),
                s.Z.releaseRes(u),
                s.Z.releaseRemoteRes(e, t)
            }
              , S = function(e, t) {
                RES.hasRes(e.name) || RES.$addResourceData(e);
                var n = RES.config.config.groups[t];
                return n ? (-1 === n.findIndex((function(t) {
                    return t === e.name
                }
                )) && n.push(e.name),
                e.name) : (RES.createGroup(t, [e.name], !0),
                e.name)
            };
            function R() {
                return g(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return window.isSupportWebp = window.isSupportWebp && "-1" !== (0,
                                h.IO)("webp"),
                                (0,
                                f.cM)("isSupportWebp:".concat(window.isSupportWebp)),
                                t = window.isSupportWebp ? n.g.cacheData["default-webp.res.json"] : n.g.cacheData["default.res.json"],
                                e.next = 5,
                                (0,
                                u.f$)(t);
                            case 5:
                                return r = e.sent,
                                e.abrupt("return", r ? RES.loadConfigByData(r, "resource/") : RES.loadConfig("default.res_09f055a9aa999c4719a4.json", "resource/"));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            function O() {
                var e = RES.config.config.fileSystem.fsData;
                (0,
                h.L1)() && console.log("[debug][resource] 总数量：", Object.values(e).length);
                var t = Object.values(e)
                  , n = t.filter((function(e) {
                    return e.url.includes("admin_assets")
                }
                ));
                if (n.length > 0 && console.error("[admin assets资源未替换成功]:", n.map((function(e) {
                    return e.name
                }
                ))),
                window.isSupportWebp) {
                    var r = t.filter((function(e) {
                        var t = e;
                        return !("image" !== t.type && "sheet" !== t.type || !t.url.includes("assets") || t.url.includes("webp"))
                    }
                    ));
                    r.length > 0 && console.error("[webp assets资源仍有png]:", r.map((function(e) {
                        return e.name
                    }
                    )))
                }
            }
        },
        7305: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return c
                },
                V: function() {
                    return a
                }
            });
            n(9600);
            var r = n(9704)
              , i = n(1160)
              , o = n(6604);
            function a(e, t) {
                var n = [o.B];
                return t.activity && n.push(r.Z.activityCode),
                t.event && n.push(r.Z.eventCode),
                t.user && n.push(i.e.uid),
                t.storage && n.push(t.storage),
                n.push(e),
                n.join("_")
            }
            function c(e, t) {
                var n = t.expire;
                return {
                    val: e,
                    validateVal: {
                        expire: n,
                        expireTimeStamp: n ? t.expireTimeStamp || Date.now() + 1e3 * t.expireTime : Date.now() + 1e3 * t.expireTime + 31536e6
                    }
                }
            }
        },
        3969: function(e, t, n) {
            "use strict";
            n.d(t, {
                LS: function() {
                    return s
                },
                cl: function() {
                    return a
                },
                rV: function() {
                    return u
                }
            });
            n(9601);
            var r = n(5428)
              , i = n(7305)
              , o = n(6604);
            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t = Object.assign(Object.assign({}, o.d), t),
                localStorage.removeItem((0,
                i.V)(e, t))
            }
            function c(e, t, n) {
                return e ? e.validateVal.expire && Date.now() > e.validateVal.expireTimeStamp ? (console.warn("缓存 超时"),
                a(t, n),
                null) : e.val : e
            }
            function s(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                n = Object.assign(Object.assign({}, o.d), n);
                try {
                    localStorage.setItem((0,
                    i.V)(e, n), JSON.stringify((0,
                    i.G)(t, n)))
                } catch (r) {
                    console.error(r),
                    localStorage.clear()
                }
            }
            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t = Object.assign(Object.assign({}, o.d), t);
                var n = localStorage.getItem((0,
                i.V)(e, t));
                if (!n)
                    return n;
                try {
                    var a = JSON.parse(n);
                    return c(a, e, t)
                } catch (s) {
                    return (0,
                    r.fZ)("[Local Storage error] key:".concat(e, " msg:"), s),
                    (0,
                    r.p_)("[Local Storage error]"),
                    null
                }
            }
        },
        6604: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return r
                },
                d: function() {
                    return i
                }
            });
            var r = "bingo"
              , i = {
                storage: "str",
                activity: !0,
                event: !1,
                user: !1,
                expire: !0,
                expireTime: 604800
            }
        },
        984: function(e, t, n) {
            "use strict";
            n.d(t, {
                AA: function() {
                    return R
                },
                Ax: function() {
                    return w
                },
                R0: function() {
                    return S
                },
                bh: function() {
                    return E
                },
                eS: function() {
                    return y
                },
                gu: function() {
                    return b
                },
                hG: function() {
                    return T
                },
                iq: function() {
                    return _
                }
            });
            n(1539),
            n(9714),
            n(4916),
            n(5306),
            n(2772),
            n(2222);
            var r = n(4080)
              , i = n(7484)
              , o = n.n(i)
              , a = n(285)
              , c = n.n(a)
              , s = n(1646)
              , u = n.n(s)
              , l = n(9387)
              , f = n.n(l)
              , h = n(178)
              , d = n.n(h)
              , p = n(7520);
            o().extend(d()),
            o().extend(f()),
            o().extend(u()),
            o().extend(c());
            var v = {
                sg: "8",
                my: "8",
                th: "7",
                tw: "8",
                vn: "7",
                id: "7",
                ph: "8"
            };
            o().tz.setDefault({
                sg: "Asia/Singapore",
                th: "Asia/Bangkok",
                my: "Asia/Kuala_Lumpur",
                tw: "Asia/Taipei",
                vn: "Asia/Ho_Chi_Minh",
                id: "Asia/Jakarta",
                ph: "Asia/Manila",
                br: "America/Sao_Paulo",
                mx: "America/Mexico_City",
                co: "America/Bogota",
                cl: "America/Santiago",
                xx: "Asia/Singapore",
                pl: "Europe/Warsaw",
                es: "Europe/Madrid"
            }[window.COUNTRY]);
            var g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,3}|s{1,2}|Z{1,2}|SSS|SH|SD/g;
            function m(e) {
                return o()(e).subtract(v[window.COUNTRY] || 8, "hour")
            }
            function y(e) {
                return o().utc(m(e).format("YYYY-MM-DD HH:mm:ss"), "YYYY-MM-DD HH:mm:ss").local()
            }
            function _(e, t) {
                var n = (0,
                r.b)()
                  , i = o().duration(o()(e).diff(o()(n)));
                return t ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "HS:mm:ss"
                      , n = Math.max(0, e.years()).toString()
                      , r = Math.max(0, e.months()).toString()
                      , i = Math.max(0, e.days()).toString()
                      , o = Math.max(0, e.hours()).toString()
                      , a = Math.max(0, e.minutes()).toString()
                      , c = Math.max(0, e.seconds()).toString()
                      , s = Math.max(0, e.milliseconds()).toString()
                      , u = Math.max(0, Math.floor(e.asHours())).toString()
                      , l = Math.max(0, Math.floor(e.asDays())).toString()
                      , f = {
                        Y: n,
                        YY: (0,
                        p.Z)(n, 2, "0"),
                        YYYY: (0,
                        p.Z)(n, 4, "0"),
                        M: r,
                        MM: (0,
                        p.Z)(r.toString(), 2, "0"),
                        D: i,
                        DD: (0,
                        p.Z)(i, 2, "0"),
                        H: o,
                        HH: (0,
                        p.Z)(o, 2, "0"),
                        m: a,
                        mm: (0,
                        p.Z)(a, 2, "0"),
                        s: c,
                        ss: (0,
                        p.Z)(c, 2, "0"),
                        SSS: (0,
                        p.Z)(s, 3, "0"),
                        SH: (0,
                        p.Z)(u, 2, "0"),
                        SD: l
                    };
                    return t.replace(g, (function(e, t) {
                        return t || String(f[e])
                    }
                    ))
                }(i, t) : i.asSeconds()
            }
            function E(e, t) {
                var n = "tw" === window.COUNTRY ? "YYYY-MM-DD" : "DD-MM-YYYY"
                  , r = t || n;
                return o()(e).format(r)
            }
            function b(e, t) {
                var n = t || "YYYY-MM-DD HH:mm:ss";
                return o()(e).format(n)
            }
            function w(e) {
                return o()((0,
                r.b)()).isAfter(o()(e))
            }
            function T(e) {
                return o()(e, ["YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD HH:mm"])
            }
            function S(e, t) {
                if ("number" !== typeof e || "number" !== typeof t)
                    return !1;
                var n = (0,
                r.b)();
                return e < t && n <= t && n >= e
            }
            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "s"
                  , i = o()((0,
                r.b)())
                  , a = o()(e).add(t, n);
                return o()(i).isAfter(a)
            }
        },
        9411: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ag: function() {
                    return Y
                },
                E4: function() {
                    return te
                },
                Fk: function() {
                    return U
                },
                Gk: function() {
                    return R
                },
                Ig: function() {
                    return Z
                },
                Kb: function() {
                    return F
                },
                Kp: function() {
                    return re
                },
                Kw: function() {
                    return W
                },
                Nv: function() {
                    return Q
                },
                Oq: function() {
                    return H
                },
                PS: function() {
                    return X
                },
                f1: function() {
                    return J
                },
                hX: function() {
                    return B
                },
                j: function() {
                    return L
                },
                jL: function() {
                    return V
                },
                ob: function() {
                    return G
                },
                qv: function() {
                    return j
                },
                rA: function() {
                    return T
                },
                vn: function() {
                    return ee
                },
                xE: function() {
                    return z
                }
            });
            n(5666),
            n(1539),
            n(8674),
            n(9601),
            n(9554),
            n(4747),
            n(1249),
            n(8309),
            n(4603),
            n(4916),
            n(9714),
            n(7941),
            n(2772),
            n(6977),
            n(7042),
            n(1038),
            n(8783),
            n(2526),
            n(1817),
            n(2165),
            n(6992),
            n(3948);
            var r = n(9704)
              , i = n(85)
              , o = n(905)
              , a = n(277)
              , c = n(1360)
              , s = n(893)
              , u = n(5428)
              , l = n(209)
              , f = n(2057)
              , h = n(6828)
              , d = n(8933)
              , p = n(569)
              , v = n(7484)
              , g = n.n(v)
              , m = n(6339);
            function y(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e)
                            return;
                        if ("string" === typeof e)
                            return _(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return _(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0, c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        c = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                }
            }
            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var E, b, w, T, S = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            };
            !function(e) {
                e[e.USER_BEHAVIOR_DATA = 0] = "USER_BEHAVIOR_DATA",
                e[e.PERF = 1] = "PERF"
            }(E || (E = {})),
            function(e) {
                e.BI = "BI",
                e.PERF = "PERF",
                e.CUSTOM = "CUSTOM"
            }(b || (b = {})),
            function(e) {
                e.BI = "game_bingo",
                e.PERF = "game_hipo",
                e.CUSTOM = "game_bingo_custom"
            }(w || (w = {})),
            function(e) {
                e.PAGE_PERFORMANCE = "action_page_performance",
                e.API_REQUEST = "action_api_request",
                e.JS_ERROR = "action_js_error",
                e.EGRET_PERFORMANCE = "action_egret_performance"
            }(T || (T = {}));
            var R = "game_bingo_index"
              , O = []
              , I = ["/api/v2/user/login_status", {
                ADMIN_SETTING: "/gameplatform/api/v5/game/activity/".concat(r.Z.activityCode, "/settings")
            }.ADMIN_SETTING]
              , x = {}
              , k = {}
              , C = !1
              , A = [];
            function N(e, t, n) {
                t && (t.data || (t.data = {}),
                n === E.PERF ? (0,
                m.Zm)(Object.assign(Object.assign({}, t.data), {
                    project_name: r.Z.projectName
                })) : x[e] && x[e].report(t, n))
            }
            function P(e, t) {
                k[e] && Array.isArray(k[e]) && (k[e].forEach((function(n) {
                    N(e, n, t)
                }
                )),
                k[e] = [])
            }
            function D(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.USER_BEHAVIOR_DATA
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                return S(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                    return regeneratorRuntime.wrap((function(i) {
                        for (; ; )
                            switch (i.prev = i.next) {
                            case 0:
                                if (t) {
                                    i.next = 2;
                                    break
                                }
                                return i.abrupt("return");
                            case 2:
                                if (t.data || (t.data = {}),
                                x[e] || M(e),
                                t.usage_id = n,
                                r) {
                                    i.next = 7;
                                    break
                                }
                                return i.abrupt("return", N(e, t, n));
                            case 7:
                                if (C) {
                                    i.next = 15;
                                    break
                                }
                                return k[e] = k[e] || [],
                                k[e].push(t),
                                i.next = 12,
                                (0,
                                s._v)(2e3);
                            case 12:
                                P(e, n),
                                i.next = 17;
                                break;
                            case 15:
                                N(e, t, n),
                                P(e, n);
                            case 17:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i)
                }
                )))
            }
            function M(e) {
                var t;
                x[e] = (t = w[e],
                f.ZP.mweb ? new d.c({
                    projectName: t,
                    env: window.ENVIRONMENT,
                    locale: window.COUNTRY,
                    isReact: !1
                }) : new h.I0({
                    projectName: t,
                    isReact: !1
                }))
            }
            function j(e) {
                if (C = e,
                e) {
                    0,
                    (0,
                    l.z5)({
                        point_id: l.Zf.FIRST_INTERACTIVE,
                        duration: window.isLoadingTimeout ? 6e4 : ee("first_interactive")
                    });
                    var t = n.g.isUseIndexdb ? l.Mq.INDEX_DB_FIRST : n.g.SERVICE_WORKER ? l.Mq.SERVICE_WORKER_FIRST : l.Mq.NETWORK_FIRST;
                    (0,
                    l.z5)({
                        point_id: t,
                        duration: ee("first_interactive")
                    }),
                    (0,
                    l.z5)({
                        point_id: window.isAllAssets ? l.in.FIRST_INTERACTIVE_ALL_ASSETS : l.in.FIRST_INTERACTIVE_MODULE_ASSETS,
                        duration: ee("first_interactive")
                    }),
                    A.length > 0 && (A.forEach((function(e) {
                        return (0,
                        l.z5)(e)
                    }
                    )),
                    A = []),
                    (0,
                    c.Nj)()
                }
            }
            function L(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.USER_BEHAVIOR_DATA
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !function() {
                    if (e) {
                        e.data || (e.data = {});
                        var o = {
                            game_slot_id: r.Z.eventCode,
                            game_activity_id: r.Z.activityCode
                        }
                          , a = Object.assign(Object.assign(Object.assign({}, e.data), o), {
                            version: window.SENTRY_VERSION
                        });
                        e.data = i ? {
                            viewed_objects: [a]
                        } : a,
                        (0,
                        u.C2)() && (e.data.is_vip = 1),
                        D(b.BI, e, t, n).catch((function(e) {
                            return console.error(e)
                        }
                        ))
                    }
                }()
            }
            function G(e, t, n) {
                L({
                    page_type: e,
                    operation: o.Un.CLICK,
                    target_type: t,
                    data: n
                })
            }
            function H(e, t, n, r) {
                L({
                    page_type: e,
                    operation: o.Un.CLICK,
                    page_section: t,
                    target_type: n,
                    data: r
                })
            }
            function B(e, t) {
                L({
                    page_type: e,
                    operation: o.Un.IMPRESSION,
                    data: t
                })
            }
            function V(e, t, n) {
                L({
                    page_type: e,
                    operation: o.Un.IMPRESSION,
                    page_section: t,
                    data: n
                })
            }
            function U(e, t) {
                L({
                    page_type: e,
                    operation: o.Un.VIEW,
                    data: t
                })
            }
            function F(e, t, n) {
                L({
                    page_type: e,
                    operation: o.Un.VIEW,
                    page_section: t,
                    data: n
                })
            }
            function W(e) {
                var t, n, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                (null === (t = e.data) || void 0 === t ? void 0 : t.json_str) && (e.data = Object.assign(Object.assign({}, e.data), JSON.parse(null === (n = e.data) || void 0 === n ? void 0 : n.json_str)),
                delete e.data.json_str),
                D(b.PERF, e, E.PERF, r).catch((function(e) {
                    return console.error(e)
                }
                ))
            }
            function Y(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                D(b.PERF, e, E.PERF, t).catch((function(e) {
                    return console.error(e)
                }
                ))
            }
            function Z(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = {
                    page_type: "track",
                    operation: "action_custom",
                    data: {
                        hipo_type: "action_page_custom",
                        json_str: e,
                        page_name: R
                    }
                };
                D(b.CUSTOM, n, E.USER_BEHAVIOR_DATA, t).catch((function(e) {
                    return console.error(e)
                }
                ))
            }
            var K = {
                data: []
            };
            function J(e) {
                e.t = Date.now(),
                K.data.push(e),
                K.data.length > 50 && X()
            }
            function z() {
                var e, t = null === (e = K.data) || void 0 === e ? void 0 : e.length;
                return t > 0 ? K.data[t - 1].t : window.performancePoints.first_paint.end
            }
            function X() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (console.log("【FE性能】详细数据"),
                console.table(K.data.map((function(e) {
                    return {
                        info: e.info,
                        cost: e.cost
                    }
                }
                ))),
                e && "production" === window.MODE) {
                    var t, n = y(K.data);
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = t.value
                              , i = oe(r.info);
                            i && A.push({
                                point_id: i,
                                duration: r.cost
                            })
                        }
                    } catch (o) {
                        n.e(o)
                    } finally {
                        n.f()
                    }
                }
                K.data.length > 0 && Z(JSON.stringify(K.data)),
                K.data = []
            }
            function $() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = O[t];
                if (n < 0 || !window.performance || !window.performance.getEntriesByType)
                    return {};
                for (var r = window.performance.getEntriesByType("resource"), i = null, o = n; o < r.length; o++)
                    if (r[o].name === e) {
                        O[t] = o + 1,
                        i = r[o];
                        break
                    }
                if (i) {
                    var a = i
                      , c = a.responseStart
                      , s = a.requestStart
                      , u = a.responseEnd
                      , l = a.domainLookupStart
                      , f = a.domainLookupEnd
                      , h = a.connectStart
                      , d = a.connectEnd
                      , p = a.nextHopProtocol
                      , v = {
                        dns: f - l,
                        tcp: d - h,
                        request: c - s,
                        response: u - c,
                        stalled: s - h,
                        http_version: p
                    };
                    return v
                }
                return {}
            }
            function q(e, t, n) {
                var r = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("resource");
                if (!r)
                    return 0;
                var o = 0
                  , a = 0;
                return e.forEach((function(e) {
                    "string" === typeof e && (e = new RegExp(e));
                    var t = -1;
                    if (r.forEach((function(n, r) {
                        -1 === t && e.test(n.name) && (t = r)
                    }
                    )),
                    -1 !== t) {
                        var n = r[t];
                        o = n.fetchStart > o && 0 !== o ? o : n.fetchStart,
                        a = n.responseEnd < a && 0 !== a ? a : n.responseEnd
                    }
                }
                )),
                t && i.Ni.assets[t] && Object.keys(i.Ni.assets[t]).forEach((function(e) {
                    var c = i.Ni.assets[t][e];
                    if (-1 !== n.indexOf(c.type)) {
                        var s = c.data.url
                          , u = -1;
                        if (r.forEach((function(e, t) {
                            -1 === u && e.name.indexOf(s) > -1 && (u = t)
                        }
                        )),
                        -1 === u)
                            return;
                        var l = r[u];
                        o = l.fetchStart > o && 0 !== o ? o : l.fetchStart,
                        a = l.responseEnd < a && 0 !== a ? a : l.responseEnd
                    }
                }
                )),
                a - o
            }
            function Q(e) {
                "string" === typeof e && (e = [e]);
                var t, n = Date.now(), r = y(e);
                try {
                    for (r.s(); !(t = r.n()).done; ) {
                        var i = t.value;
                        void 0 !== window.performancePoints[i] && (window.performancePoints[i].end = n,
                        window.performancePoints[i].total = n - window.performancePoints[i].start)
                    }
                } catch (o) {
                    r.e(o)
                } finally {
                    r.f()
                }
            }
            function ee(e) {
                return window.performancePoints[e] ? window.performancePoints[e].total : 0
            }
            function te(e) {
                if (window.performance && window.performance.timing) {
                    var t, n = {
                        game_slot_id: r.Z.eventCode,
                        game_activity_id: r.Z.activityCode
                    }, i = window.performance.timing, o = i.responseStart, c = i.requestStart, s = i.domContentLoadedEventEnd, l = i.redirectStart, f = i.redirectEnd, h = i.domainLookupStart, d = i.fetchStart, p = i.domainLookupEnd, v = i.connectEnd, m = i.connectStart, y = i.responseEnd, _ = Object.assign(Object.assign({
                        first_paint: ee("first_paint"),
                        first_interactive: window.isLoadingTimeout ? 6e4 : ee("first_interactive"),
                        first_static: +q([/js\/.+\.js/], e, ["sheet", "json", "font"]).toFixed(0),
                        first_img: +q([], e, ["image", "sound"]).toFixed(0),
                        first_api: +q(I).toFixed(0),
                        ttfb: o - c,
                        dom_ready: s - c,
                        html: y - d,
                        redirect: f - l,
                        app_cache: h - d,
                        dns: p - h,
                        tcp: v - m,
                        stalled: c - m
                    }, n), {
                        build_time: g()(+window.VERSION).format("YYYY-MM-DDTHH:mm:ss")
                    });
                    console.log("【polaris 性能上报数据】".concat(JSON.stringify(_))),
                    (0,
                    u.cM)("【polaris 性能上报数据】".concat(JSON.stringify(_))),
                    t = {
                        page_type: "track",
                        operation: "action_hipo",
                        data: Object.assign({
                            hipo_type: T.PAGE_PERFORMANCE,
                            page_name: R
                        }, _)
                    },
                    (0,
                    a.yj)().then((function(e) {
                        t.data && (t.data.network = e),
                        Y(t)
                    }
                    ))
                }
            }
            function ne(e) {
                var t;
                if (!e || !e.data)
                    return console.warn("apiTrack param needs info data"),
                    Promise.reject("apiTrack param needs info data");
                var n = (null === (t = e.data.json_str) || void 0 === t ? void 0 : t.api_rate) || 1
                  , r = n;
                return (0,
                p.sZ)() * r < 1 ? (0,
                a.yj)().then((function(t) {
                    e.data && (e.data = Object.assign(Object.assign({}, e.data), {
                        network: t,
                        api_rate: n
                    })),
                    Y(e)
                }
                )).catch((function(e) {
                    return console.error(e)
                }
                )) : Promise.resolve()
            }
            function re() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , i = $(e, n)
                  , o = {
                    game_slot_id: r.Z.eventCode,
                    game_activity_id: r.Z.activityCode
                }
                  , a = Object.assign(Object.assign(Object.assign({}, t.data), i), o);
                ne({
                    page_type: "track",
                    operation: "action_hipo",
                    data: Object.assign(Object.assign({}, a), {
                        hipo_type: T.API_REQUEST,
                        page_name: R
                    })
                }).catch((function(e) {
                    return console.error(e)
                }
                ))
            }
            var ie = {};
            function oe(e) {
                if (0 === Object.keys(ie).length) {
                    var t = "live" === window.ENVIRONMENT ? "live" : "test";
                    for (var n in l.jW)
                        ie[l.jW[n]] = l.XB[t][n]
                }
                return ie[e]
            }
        },
        7958: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dh: function() {
                    return c
                },
                Gr: function() {
                    return i
                },
                IO: function() {
                    return a
                },
                L1: function() {
                    return u
                },
                PX: function() {
                    return h
                },
                Qq: function() {
                    return f
                },
                lr: function() {
                    return l
                },
                qQ: function() {
                    return s
                },
                sA: function() {
                    return o
                }
            });
            var r;
            n(2222),
            n(9600),
            n(2772),
            n(4603),
            n(4916),
            n(9714),
            n(5306),
            n(4723),
            n(4765),
            n(9653);
            function i(e, t) {
                var n = function(e) {
                    var t = [];
                    for (var n in e) {
                        var r = void 0 !== e[n] ? e[n] : "";
                        t.push("".concat(n, "=").concat(encodeURIComponent(r)))
                    }
                    return t.join("&")
                }(t);
                return e + (-1 === e.indexOf("?") ? "?" : n && n.length > 0 ? "&" : "") + n
            }
            function o(e, t) {
                var n, r, i = e;
                for (var o in t) {
                    var a = new RegExp(o + "=[^&]*");
                    i = i.indexOf(o) > -1 ? i.replace(a, "".concat(o, "=").concat(null !== (n = t[o]) && void 0 !== n ? n : "")) : i + "&".concat(o, "=").concat(null !== (r = t[o]) && void 0 !== r ? r : "")
                }
                return i
            }
            function a(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
                  , n = window.location.search.substr(1).match(t);
                return null !== n ? decodeURIComponent(n[2]) : null
            }
            function c() {
                return u() && +a("debug") > 1
            }
            function s() {
                return u() && +a("debug") < 10
            }
            function u(e) {
                return r = +(r || a("debug")),
                e ? Number(r) === e : r > 0
            }
            function l(e) {
                if (!e)
                    return e;
                var t = "games.deo.shopeemobile.com"
                  , n = "deo.shopeemobile.com";
                return e.indexOf(t) > -1 || -1 === e.indexOf(n) ? e : e.replace(n, t)
            }
            function f(e) {
                return "https://games.deo.shopeemobile.com/shopee/mkt/games/file/".concat(e)
            }
            function h(e) {
                return "string" === typeof e && !!e.match(/http(s):\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/)
            }
        },
        8100: function() {},
        6424: function() {},
        5381: function() {}
    }
      , t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var o = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.loaded = !0,
        o.exports
    }
    n.m = e,
    n.amdO = {},
    function() {
        var e = [];
        n.O = function(t, r, i, o) {
            if (!r) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    r = e[l][0],
                    i = e[l][1],
                    o = e[l][2];
                    for (var c = !0, s = 0; s < r.length; s++)
                        (!1 & o || a >= o) && Object.keys(n.O).every((function(e) {
                            return n.O[e](r[s])
                        }
                        )) ? r.splice(s--, 1) : (c = !1,
                        o < a && (a = o));
                    if (c) {
                        e.splice(l--, 1);
                        var u = i();
                        void 0 !== u && (t = u)
                    }
                }
                return t
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--)
                e[l] = e[l - 1];
            e[l] = [r, i, o]
        }
    }(),
    n.F = {},
    n.E = function(e) {
        Object.keys(n.F).map((function(t) {
            n.F[t](e)
        }
        ))
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = function(e, t) {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.f = {},
    n.e = function(e) {
        return Promise.all(Object.keys(n.f).reduce((function(t, r) {
            return n.f[r](e, t),
            t
        }
        ), []))
    }
    ,
    n.u = function(e) {
        return ({
            658: "main_scene",
            895: "download"
        }[e] || e) + ".min_" + {
            532: "1a406287e0",
            658: "5ed28ce2c1",
            895: "cfe32820d8"
        }[e] + ".js"
    }
    ,
    n.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    n.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    function() {
        var e = {}
          , t = "bingo-fe:";
        n.l = function(r, i, o, a) {
            if (e[r])
                e[r].push(i);
            else {
                var c, s;
                if (void 0 !== o)
                    for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                        var f = u[l];
                        if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
                            c = f;
                            break
                        }
                    }
                c || (s = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                n.nc && c.setAttribute("nonce", n.nc),
                c.setAttribute("data-webpack", t + o),
                c.src = r),
                e[r] = [i];
                var h = function(t, n) {
                    c.onerror = c.onload = null,
                    clearTimeout(d);
                    var i = e[r];
                    if (delete e[r],
                    c.parentNode && c.parentNode.removeChild(c),
                    i && i.forEach((function(e) {
                        return e(n)
                    }
                    )),
                    t)
                        return t(n)
                }
                  , d = setTimeout(h.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = h.bind(null, c.onerror),
                c.onload = h.bind(null, c.onload),
                s && document.head.appendChild(c)
            }
        }
    }(),
    n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.p = "js/",
    function() {
        var e = {
            1: 0
        };
        n.f.j = function(t, r) {
            var i = n.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    r.push(i[2]);
                else {
                    var o = new Promise((function(n, r) {
                        i = e[t] = [n, r]
                    }
                    ));
                    r.push(i[2] = o);
                    var a = n.p + n.u(t)
                      , c = new Error;
                    n.l(a, (function(r) {
                        if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0),
                        i)) {
                            var o = r && ("load" === r.type ? "missing" : r.type)
                              , a = r && r.target && r.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")",
                            c.name = "ChunkLoadError",
                            c.type = o,
                            c.request = a,
                            i[1](c)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        n.F.j = function(t) {
            if (!n.o(e, t) || void 0 === e[t]) {
                e[t] = null;
                var r = document.createElement("link");
                n.nc && r.setAttribute("nonce", n.nc),
                r.rel = "prefetch",
                r.as = "script",
                r.href = n.p + n.u(t),
                document.head.appendChild(r)
            }
        }
        ,
        n.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, r) {
            var i, o, a = r[0], c = r[1], s = r[2], u = 0;
            if (a.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (i in c)
                    n.o(c, i) && (n.m[i] = c[i]);
                if (s)
                    var l = s(n)
            }
            for (t && t(r); u < a.length; u++)
                o = a[u],
                n.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return n.O(l)
        }
          , r = window.webpackChunkbingo_fe = window.webpackChunkbingo_fe || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }(),
    n.O(0, [1], (function() {
        n.E(532),
        n.E(658)
    }
    ), 5);
    var r = n.O(void 0, [0, 2], (function() {
        return n(6811)
    }
    ));
    r = n.O(r)
}();
//# sourceMappingURL=main.min_e74317f39b.js.map
