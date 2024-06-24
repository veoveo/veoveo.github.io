// hello1
(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[3], {
    "+SFn": function(e, t, i) {
        "use strict";
        i.d(t, "w", (function() {
            return s
        }
        )),
        i.d(t, "a", (function() {
            return l
        }
        )),
        i.d(t, "b", (function() {
            return f
        }
        )),
        i.d(t, "f", (function() {
            return w
        }
        )),
        i.d(t, "e", (function() {
            return k
        }
        )),
        i.d(t, "u", (function() {
            return S
        }
        )),
        i.d(t, "p", (function() {
            return x
        }
        )),
        i.d(t, "k", (function() {
            return T
        }
        )),
        i.d(t, "d", (function() {
            return L
        }
        )),
        i.d(t, "x", (function() {
            return P
        }
        )),
        i.d(t, "c", (function() {
            return C
        }
        )),
        i.d(t, "r", (function() {
            return O
        }
        )),
        i.d(t, "m", (function() {
            return E
        }
        )),
        i.d(t, "n", (function() {
            return B
        }
        )),
        i.d(t, "q", (function() {
            return A
        }
        )),
        i.d(t, "l", (function() {
            return N
        }
        )),
        i.d(t, "v", (function() {
            return H
        }
        )),
        i.d(t, "h", (function() {
            return V
        }
        )),
        i.d(t, "t", (function() {
            return D
        }
        )),
        i.d(t, "s", (function() {
            return I
        }
        )),
        i.d(t, "i", (function() {
            return R
        }
        )),
        i.d(t, "o", (function() {
            return q
        }
        )),
        i.d(t, "j", (function() {
            return j
        }
        ));
        var n = i("rePB")
          , r = i("HaE+")
          , _ = i("o0o1")
          , a = i.n(_)
          , o = !(!window.navigator || !window.navigator.userAgent || -1 == window.navigator.userAgent.toLowerCase().indexOf("beeshop"));
        !function() {
            if (o) {
                var e;
                window.inBeeShop = o;
                var t = []
                  , i = []
                  , n = {}
                  , r = {}
                  , _ = 1
                  , a = {};
                window.WebViewJavascriptBridge = {
                    init: function(e) {
                        if (window.WebViewJavascriptBridge._messageHandler)
                            return console.warn("WebViewJavascriptBridge.init called twice"),
                            null;
                        window.WebViewJavascriptBridge._messageHandler = [e];
                        var t = i;
                        i = null,
                        setTimeout((function() {
                            if (t)
                                for (var e = 0; e < t.length; e++)
                                    m(t[e])
                        }
                        ), 0)
                    },
                    send: function(e, t) {
                        l({
                            data: e
                        }, t)
                    },
                    registerHandler: function(e, t, i) {
                        "undefined" === typeof n[e] && (n[e] = {}),
                        i = i || t.toString(),
                        n[e][i] = t,
                        g(e)
                    },
                    unregisterHandler: function(e, t) {
                        if (t) {
                            var i = n[e];
                            if (i) {
                                delete i[t];
                                var r = !1;
                                for (var _ in i)
                                    if (i.hasOwnProperty(_)) {
                                        r = !0;
                                        break
                                    }
                                r || (delete n[e],
                                g(e))
                            }
                        }
                    },
                    callHandler: function(e, t, i) {
                        for (var n in a)
                            if (a.hasOwnProperty(n))
                                try {
                                    a[n](e, t)
                                } catch (s) {}
                        if ("fullScreenImage" == e && t) {
                            var r = t.imageUrls;
                            if (r && r.length)
                                try {
                                    for (var _ = 0; _ < r.length; _++) {
                                        var o = r[_];
                                        "string" !== typeof o || o.indexOf(window.ITEM_IMAGE_BASE_URL) < 0 || (r[_] = o.replace("/webp/", "/"))
                                    }
                                } catch (c) {}
                        }
                        l({
                            handlerName: e,
                            data: t
                        }, i)
                    },
                    hasHandler: h,
                    hasHandlerCB: g,
                    addHook: function(e) {
                        var t = e.toString();
                        a[t] || (a[t] = e)
                    },
                    delHook: function(e) {
                        var t = e.toString();
                        delete a[t]
                    },
                    appHasHandler: function(e) {
                        return window.WebViewJavascriptBridge._appHandlers && window.WebViewJavascriptBridge._appHandlers.indexOf(e) >= 0
                    },
                    _fetchQueue: function() {
                        var e = JSON.stringify(t);
                        return t = [],
                        e
                    },
                    _handleMessageFromObjC: function(e) {
                        i ? i.push(e) : m(e)
                    },
                    reset: function() {
                        t = [],
                        i = [],
                        n = {},
                        r = {},
                        _ = 1,
                        window.WebViewJavascriptBridge._messageHandler = null
                    }
                };
                var s = document;
                !function(t) {
                    (e = t.createElement("iframe")).style.display = "none",
                    e.src = "wvjbscheme://__WVJB_QUEUE_MESSAGE__",
                    t && t.documentElement && t.documentElement.appendChild(e)
                }(s);
                var c = s.createEvent("Event");
                c.initEvent("WebViewJavascriptBridgeReady"),
                c.bridge = window.WebViewJavascriptBridge,
                s.dispatchEvent(c)
            }
            function l(i, n) {
                if (!window.__appHasPendingCacheUpdate__) {
                    if (n) {
                        var a = "cb_" + _++ + "_" + +new Date;
                        r[a] = n,
                        i.callbackId = a
                    }
                    -1 == window.navigator.userAgent.toLowerCase().indexOf("android") ? (t.push(i),
                    e.src = "wvjbscheme://__WVJB_QUEUE_MESSAGE__") : window.gabridge.sendMsg(JSON.stringify(i))
                }
            }
            function m(e) {
                if (!window.__appHasPendingCacheUpdate__) {
                    try {
                        var t = JSON.parse(e)
                    } catch (s) {
                        t = {};
                        console.warn("Bridge dispatch failed. err = " + s)
                    }
                    if (t.responseId) {
                        if (!(i = r[t.responseId]))
                            return;
                        i(t.responseData),
                        delete r[t.responseId]
                    } else {
                        var i;
                        if (t.callbackId) {
                            var _ = t.callbackId;
                            i = function(e) {
                                l({
                                    responseId: _,
                                    responseData: e
                                })
                            }
                        }
                        var a = window.WebViewJavascriptBridge._messageHandler;
                        if (t.handlerName && (a = n[t.handlerName]),
                        "undefined" === typeof a)
                            return;
                        for (var o in a)
                            if (a.hasOwnProperty(o))
                                try {
                                    a[o](t.data, i)
                                } catch (c) {
                                    "undefined" !== typeof console && console.log("WebViewJavascriptBridge: WARNING: javascript handler threw.", t, c)
                                }
                    }
                }
            }
            function h(e) {
                var t = !1;
                try {
                    t = null != n[e]
                } catch (i) {
                    t = !1
                }
                return t ? "true" : "false"
            }
            function g(e) {
                window.gabridge && window.gabridge.onHasHandler(e, h(e))
            }
        }();
        var s, c, l, m = i("1OyB"), h = i("vuIU"), g = "undefined" === typeof Map ? function() {
            function e() {
                Object(m.a)(this, e),
                this.keys = [],
                this.values = []
            }
            return Object(h.a)(e, [{
                key: "set",
                value: function(e, t) {
                    var i = this.keys.indexOf(e);
                    i < 0 && (this.keys[i = this.keys.length] = e),
                    this.values[i] = t
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.values[this.keys.indexOf(e)]
                }
            }, {
                key: "has",
                value: function(e) {
                    return -1 !== this.keys.indexOf(e)
                }
            }]),
            e
        }() : Map, p = i("cBaE");
        function u(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(i), !0).forEach((function(t) {
                    Object(n.a)(e, t, i[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }
                ))
            }
            return e
        }
        !function(e) {
            e.SUCCESS = "success",
            e.FAILURE = "failure"
        }(s || (s = {})),
        function(e) {
            e[e.DefaultStyle = 0] = "DefaultStyle",
            e[e.LightStyle = 1] = "LightStyle",
            e[e.DarkStyle = 2] = "DarkStyle"
        }(c || (c = {})),
        function(e) {
            e[e.SaveOnMemory = 0] = "SaveOnMemory",
            e[e.SaveOnDisk = 1] = "SaveOnDisk"
        }(l || (l = {}));
        var v, f, y = function() {
            var e = Object(r.a)(a.a.mark((function e(t, i) {
                return a.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            new Promise((function(e, n) {
                                setTimeout((function() {
                                    n(new Error(i))
                                }
                                ), t)
                            }
                            ));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, i) {
                return e.apply(this, arguments)
            }
        }();
        !function(e) {
            e[e.FAILED = 0] = "FAILED",
            e[e.SUCCESS = 1] = "SUCCESS"
        }(v || (v = {})),
        function(e) {
            e[e.ERROR = 0] = "ERROR",
            e[e.SUCCESS = 1] = "SUCCESS"
        }(f || (f = {}));
        var b = function() {
            var e, t = new g, i = new Promise((function(e, t) {
                o ? window.WebViewJavascriptBridge ? e(window.WebViewJavascriptBridge) : document.addEventListener("WebViewJavascriptBridgeReady", (function() {
                    dismissNonShopeeBridge() ? t({
                        message: "dismissNonShopeeBridge"
                    }) : e(window.WebViewJavascriptBridge)
                }
                ), !1) : t({
                    message: "not in BeeShop"
                })
            }
            )).then((function(t) {
                (e = t).init((function() {}
                ))
            }
            )).catch((function(e) {
                console.warn(e)
            }
            )), n = function() {
                var t = Object(r.a)(a.a.mark((function t(n, r) {
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                i;
                            case 2:
                                return t.next = 4,
                                new Promise((function(t) {
                                    e && e.callHandler && e.callHandler(n, r, t)
                                }
                                ));
                            case 4:
                                return t.abrupt("return", t.sent);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e, i) {
                    return t.apply(this, arguments)
                }
            }(), _ = function() {
                var n = Object(r.a)(a.a.mark((function n(r, _) {
                    return a.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                i;
                            case 2:
                                t.has(_) || t.set(_, "_" + Math.random().toString(36).substr(2, 9)),
                                e && e.registerHandler(r, _, t.get(_));
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }(), c = function() {
                var n = Object(r.a)(a.a.mark((function n(r, _) {
                    var o;
                    return a.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                i;
                            case 2:
                                o = t.get(_),
                                e && e.unregisterHandler(r, o);
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(e, t) {
                    return n.apply(this, arguments)
                }
            }();
            return {
                configurePage: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("configurePage", t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                configureStatusBarHidden: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("configureStatusBarHidden", t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                showToast: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        var i, r = arguments;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.length > 1 && void 0 !== r[1] ? r[1] : s.SUCCESS,
                                    e.next = 3,
                                    n("showToast", {
                                        toast: {
                                            message: t,
                                            iconType: i
                                        }
                                    });
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                popSelf: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("popWebView", t || {});
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                isInWKWebView: function() {
                    var e = Object(r.a)(a.a.mark((function e() {
                        var t;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("isInWKWebView");
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", t.status === v.SUCCESS);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                caniuse: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        var i;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("hasHandler", {
                                        handler: t
                                    });
                                case 2:
                                    return i = e.sent,
                                    e.abrupt("return", i.status === v.SUCCESS);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                trackBIEvent: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n("trackBIEvent", {
                                        events: JSON.stringify(e)
                                    });
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                pickImage: function(e) {
                    var t = this;
                    return Object(r.a)(a.a.mark((function i() {
                        return a.a.wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if ("number" !== typeof e.disableResizing || Object(p.q)() !== p.d.Android) {
                                        i.next = 5;
                                        break
                                    }
                                    return i.next = 3,
                                    t.checkVersion();
                                case 3:
                                    i.sent.appver >= 29500 && (e.disableResizing = Boolean(e.disableResizing));
                                case 5:
                                    return i.next = 7,
                                    n("pickImage", e || {});
                                case 7:
                                    return i.abrupt("return", i.sent);
                                case 8:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i)
                    }
                    )))()
                },
                navigate: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return "string" === typeof e && (e = {
                                        url: e
                                    }),
                                    t.next = 3,
                                    n("navigate", e);
                                case 3:
                                    return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                navigateAppPath: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n("navigateAppPath", d({
                                        popSelf: !1
                                    }, e));
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                navigateNativeRoute: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return "string" === typeof e && (e = {
                                        path: e
                                    }),
                                    t.next = 3,
                                    n("navigateAppPath", e);
                                case 3:
                                    return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                popUp: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n("showPopUp", e);
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                checkVersion: function() {
                    return Object(r.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("checkVersion", {});
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                login: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n("login", e);
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                startChat: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n("startChat", e);
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                getAppInfo: function() {
                    return Object(r.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("getAppInfo", {});
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                removeWebViewBottomInset: function() {
                    return Object(r.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("adjustWebViewInsets", {
                                        customBottomInset: 0
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                addEventListener: _,
                removeEventListener: c,
                getEncryptionData: function(e) {
                    var t = this;
                    return Object(r.a)(a.a.mark((function i() {
                        var r, _, o;
                        return a.a.wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2,
                                    t.checkVersion();
                                case 2:
                                    if (!((r = i.sent).appver < 26400)) {
                                        i.next = 5;
                                        break
                                    }
                                    throw new Error("bridge not supported in this version: ".concat(r.appver));
                                case 5:
                                    return _ = {},
                                    o = Date.now(),
                                    i.prev = 7,
                                    i.next = 10,
                                    Promise.race([n("getEncryptionData", {
                                        key: "encrypt",
                                        data: e
                                    }), y(500, "[getEncryptionData][encrypt]")]);
                                case 10:
                                    _ = i.sent,
                                    i.next = 16;
                                    break;
                                case 13:
                                    throw i.prev = 13,
                                    i.t0 = i.catch(7),
                                    new Error("invoke bridge [getEncryptionData][encrypt] \u8d85\u65f6\u6216\u4e0d\u5b58\u5728bridge");
                                case 16:
                                    if (console.warn("[bridge] [encrypt] cost: ".concat(Date.now() - o)),
                                    !_.errorCode) {
                                        i.next = 19;
                                        break
                                    }
                                    throw new Error("[getEncryptionData][encrypt] errorCode !== 0");
                                case 19:
                                    if (i.prev = 19,
                                    !_.data || !_.data.data) {
                                        i.next = 22;
                                        break
                                    }
                                    return i.abrupt("return", _.data.data);
                                case 22:
                                    return i.abrupt("return", JSON.parse(_.data).data);
                                case 25:
                                    throw i.prev = 25,
                                    i.t1 = i.catch(19),
                                    new Error("[getEncryptionData][encrypt] return none JSON: ".concat(_.data));
                                case 28:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, null, [[7, 13], [19, 25]])
                    }
                    )))()
                },
                getServerTime: function() {
                    var e = this;
                    return Object(r.a)(a.a.mark((function t() {
                        var i, r, _;
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.checkVersion();
                                case 2:
                                    if (!((i = t.sent).appver < 26400)) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("bridge not supported in this version: ".concat(i.appver));
                                case 5:
                                    return r = {},
                                    _ = Date.now(),
                                    t.prev = 7,
                                    t.next = 10,
                                    Promise.race([n("getEncryptionData", {
                                        key: "timestamp"
                                    }), y(500, "[getEncryptionData][timestamp]")]);
                                case 10:
                                    r = t.sent,
                                    t.next = 16;
                                    break;
                                case 13:
                                    throw t.prev = 13,
                                    t.t0 = t.catch(7),
                                    new Error("invoke bridge [getEncryptionData][timestamp] \u8d85\u65f6\u6216\u4e0d\u5b58\u5728bridge");
                                case 16:
                                    if (console.warn("[bridge] [timestamp] cost: ".concat(Date.now() - _)),
                                    !r.errorCode) {
                                        t.next = 19;
                                        break
                                    }
                                    throw new Error("[getEncryptionData][timestamp] errorCode !== 0");
                                case 19:
                                    if (t.prev = 19,
                                    !r.data || !r.data.data && !r.data.encrypt) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.abrupt("return", r.data.data || r.data.encrypt);
                                case 22:
                                    return t.abrupt("return", JSON.parse(r.data).data);
                                case 25:
                                    throw t.prev = 25,
                                    t.t1 = t.catch(19),
                                    new Error("[getEncryptionData][timestamp] return none JSON ".concat(r.data));
                                case 28:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[7, 13], [19, 25]])
                    }
                    )))()
                },
                showSharePanel: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n("showSharingPanel", e);
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                showShareData: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n("shareData", e);
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                getData: function() {
                    var e = Object(r.a)(a.a.mark((function e(t, i) {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("getData", {
                                        key: t,
                                        data: i
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                navigateAppRL: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("navigateAppRL", t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                getDeviceFingerprint: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    n(e, {});
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                preloadSDK: function(e) {
                    return Object(r.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    n("sszMMCDownLoadPlugin", {
                                        type: "check_and_download_mmc_df",
                                        param: {
                                            pluginNames: e
                                        }
                                    });
                                case 3:
                                    t.next = 7;
                                    break;
                                case 5:
                                    t.prev = 5,
                                    t.t0 = t.catch(0);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 5]])
                    }
                    )))()
                },
                dataStoreSave: function() {
                    var e = Object(r.a)(a.a.mark((function e(t, i, r) {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("save", {
                                        key: t,
                                        data: JSON.stringify(i),
                                        persist: r
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                dataStoreLoad: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        var i;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("load", {
                                        key: t
                                    });
                                case 2:
                                    return i = e.sent,
                                    e.prev = 3,
                                    e.abrupt("return", JSON.parse(i.data));
                                case 7:
                                    return e.prev = 7,
                                    e.t0 = e.catch(3),
                                    e.abrupt("return", {});
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 7]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                dataStoreClear: function() {
                    var e = Object(r.a)(a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n("clear", {
                                        key: t
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                getInAppCallStatus: function() {
                    return Object(r.a)(a.a.mark((function e() {
                        var t;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = null,
                                    e.prev = 1,
                                    e.next = 4,
                                    Promise.race([n("getInAppCallStatus", {}), y(500, "[getInAppCallStatus][timeout error]")]);
                                case 4:
                                    t = e.sent,
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(1),
                                    console.log(e.t0);
                                case 10:
                                    return e.abrupt("return", t);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 7]])
                    }
                    )))()
                }
            }
        }()
          , w = (t.g = b,
        b.configurePage)
          , k = (b.configureStatusBarHidden,
        b.checkVersion)
          , S = b.showToast
          , x = b.popSelf
          , T = b.isInWKWebView
          , L = b.caniuse
          , P = b.trackBIEvent
          , C = b.addEventListener
          , O = b.removeEventListener
          , E = b.navigate
          , B = b.navigateAppPath
          , A = b.popUp
          , N = b.login
          , H = b.startChat
          , V = (b.navigateNativeRoute,
        b.getAppInfo)
          , D = (b.removeWebViewBottomInset,
        b.getEncryptionData,
        b.getServerTime,
        b.showSharePanel)
          , I = b.showShareData
          , R = b.getData
          , q = b.navigateAppRL
          , j = b.getDeviceFingerprint;
        b.dataStoreSave,
        b.dataStoreLoad,
        b.dataStoreClear,
        b.getInAppCallStatus
    },
    "1OyB": function(e, t, i) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        i.d(t, "a", (function() {
            return n
        }
        ))
    },
    "8oxB": function(e, t) {
        var i, n, r = e.exports = {};
        function _() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(e) {
            if (i === setTimeout)
                return setTimeout(e, 0);
            if ((i === _ || !i) && setTimeout)
                return i = setTimeout,
                setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                i = "function" === typeof setTimeout ? setTimeout : _
            } catch (e) {
                i = _
            }
            try {
                n = "function" === typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        }();
        var s, c = [], l = !1, m = -1;
        function h() {
            l && s && (l = !1,
            s.length ? c = s.concat(c) : m = -1,
            c.length && g())
        }
        function g() {
            if (!l) {
                var e = o(h);
                l = !0;
                for (var t = c.length; t; ) {
                    for (s = c,
                    c = []; ++m < t; )
                        s && s[m].run();
                    m = -1,
                    t = c.length
                }
                s = null,
                l = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === a || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function p(e, t) {
            this.fun = e,
            this.array = t
        }
        function u() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
            c.push(new p(e,t)),
            1 !== c.length || l || o(g)
        }
        ,
        p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = u,
        r.addListener = u,
        r.once = u,
        r.off = u,
        r.removeListener = u,
        r.removeAllListeners = u,
        r.emit = u,
        r.prependListener = u,
        r.prependOnceListener = u,
        r.listeners = function(e) {
            return []
        }
        ,
        r.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    },
    Bk8j: function(e, t, i) {
        "use strict";
        i.d(t, "m", (function() {
            return o
        }
        )),
        i.d(t, "a", (function() {
            return s
        }
        )),
        i.d(t, "s", (function() {
            return c
        }
        )),
        i.d(t, "r", (function() {
            return l
        }
        )),
        i.d(t, "n", (function() {
            return m
        }
        )),
        i.d(t, "o", (function() {
            return h
        }
        )),
        i.d(t, "q", (function() {
            return g
        }
        )),
        i.d(t, "p", (function() {
            return p
        }
        )),
        i.d(t, "f", (function() {
            return u
        }
        )),
        i.d(t, "g", (function() {
            return d
        }
        )),
        i.d(t, "c", (function() {
            return v
        }
        )),
        i.d(t, "b", (function() {
            return f
        }
        )),
        i.d(t, "l", (function() {
            return y
        }
        )),
        i.d(t, "j", (function() {
            return b
        }
        )),
        i.d(t, "i", (function() {
            return w
        }
        )),
        i.d(t, "k", (function() {
            return k
        }
        )),
        i.d(t, "e", (function() {
            return S
        }
        )),
        i.d(t, "h", (function() {
            return x
        }
        )),
        i.d(t, "d", (function() {
            return T
        }
        )),
        i.d(t, "E", (function() {
            return n
        }
        )),
        i.d(t, "A", (function() {
            return L
        }
        )),
        i.d(t, "w", (function() {
            return P
        }
        )),
        i.d(t, "t", (function() {
            return C
        }
        )),
        i.d(t, "y", (function() {
            return O
        }
        )),
        i.d(t, "u", (function() {
            return E
        }
        )),
        i.d(t, "v", (function() {
            return B
        }
        )),
        i.d(t, "x", (function() {
            return A
        }
        )),
        i.d(t, "B", (function() {
            return N
        }
        )),
        i.d(t, "C", (function() {
            return H
        }
        )),
        i.d(t, "F", (function() {
            return V
        }
        )),
        i.d(t, "D", (function() {
            return D
        }
        )),
        i.d(t, "z", (function() {
            return I
        }
        ));
        var n, r = i("SyLE"), _ = i("e4HC"), a = i("cBaE"), o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tw";
            return "https://cf.".concat(_.domain[e], "/file/")
        }(r.b), s = 864e5, c = 30 * s, l = 180 * s, m = {
            EDUCATION_USER_MESSAGE: "EDUCATION_USER_MESSAGE",
            EDUCATION_LATEST_ID: "EDUCATION_LATEST_ID"
        }, h = "live", g = "replay", p = "plan", u = 1005, d = 1003, v = 10013, f = 10014, y = 10015, b = 3000058, w = 3000059, k = 20026, S = 7918025, x = 7918026, T = 7918040;
        !function(e) {
            e[e.SESSION_UNSTART = 0] = "SESSION_UNSTART",
            e[e.SESSION_START = 1] = "SESSION_START"
        }(n || (n = {}));
        var L = {
            ph: "_PH",
            my: "_MY",
            sg: "_SG"
        }
          , P = "STORAGE_SESSION"
          , C = "STORAGE_COVER"
          , O = "STORAGE_TITLE"
          , E = "STORAGE_DESCRIPTION"
          , B = "STORAGE_PRODUCTS"
          , A = "STORAGE_SUBTITLE"
          , N = function() {
            if (document) {
                var e = document.cookie.split(";").filter((function(e) {
                    return e.includes("SPC_U")
                }
                ))
                  , t = e.length > 0 ? e[0].indexOf("=") : -1
                  , i = Object(a.G)(location.search).host_user_id;
                return {
                    account_type: "shopee_account",
                    streamer_id: -1 !== t ? parseInt(e[0].slice(t + 1)) || (i ? parseInt(i) : 0) : 0
                }
            }
            return {}
        }
          , H = function() {
            if ("undefined" === typeof window.location)
                return !1;
            if (window && window.location) {
                var e = window.location.pathname;
                return !(e.includes("share") || e.includes("live-end") && "guest" === Object(a.G)(window.location.search).type)
            }
            return !1
        }
          , V = function() {
            return window && window.location ? window.location.search.includes("type=") ? "test" : "normal" : null !== window.localStorage.getItem("isTest") && "true" === window.localStorage.getItem("isTest") ? "test" : "normal"
        }
          , D = {
            tw: "https://shopee.tw/m/livestreamrules",
            br: "https://shopee.com.br/m/regrasshopeelive"
        }[r.b.toLowerCase()]
          , I = {
            DELETED: 0,
            NORMAL: 1,
            BANNED: 2,
            FROZEN: 3
        }
    },
    "HaE+": function(e, t, i) {
        "use strict";
        function n(e, t, i, n, r, _, a) {
            try {
                var o = e[_](a)
                  , s = o.value
            } catch (c) {
                return void i(c)
            }
            o.done ? t(s) : Promise.resolve(s).then(n, r)
        }
        function r(e) {
            return function() {
                var t = this
                  , i = arguments;
                return new Promise((function(r, _) {
                    var a = e.apply(t, i);
                    function o(e) {
                        n(a, r, _, o, s, "next", e)
                    }
                    function s(e) {
                        n(a, r, _, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        i.d(t, "a", (function() {
            return r
        }
        ))
    },
    Olgw: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAAB7dJREFUeAHtnE1sE0cUx8eOkxLy1ZCSSClViGlsUVQBjRACpEpAj1Wl9sAJ5YDUSrn03ErNKUjpqQculVqplVBPHEpV9VSgVEiQRlECBGiwDQmJQlBCkzRfJCSO0/9/2XXX9treXe+Hv0aazHr2zbw3P7+ZjGdn1iNcCGNjY23RaLRze3s7CPVBpAGkTYh1iLUej2cn8l7gegVxGXEOeWGkIaQhn8835Pf7J/DZ0eBxQtvs7GztwsLCh9D1AeJJgPDnqhfQxlDHdcSrjY2NvzU3NxOsrcE2WADijUQip5F2IX6MVtTY2JJVwLuMeLGjo+Ma0pgduiyHBTA+QDobi8W+hMHsXk6HsNfr7QO0nwAtaqVyy2ABkicUCp2DcT2IbVYaabKuCZTrDQaDPwDatsk6EopZAguedBie9C2AHU2oPQ8+ANQAPK0bnnY7V3O8uVQAOFXwpm8AajAfQbFttIv20U7am0t7TXtWOBz2w4hLUN6ZiwEOlx2Cl50JBAL8T2o4mPIsdLuP8C0NQ1shgSIczu2Gab9hUihgGBbc+VN41M9Q2mBGodtlaDftZzuM2mIIFrreV1D2HWKFUUX5JE/72Q62x4hduscsVoxvpNdI5YUgizGsB2PYeT226oJFl+U3oafCQpTB9OIzzMe+z2Z7VlgcDOUxqqC7XiYQgLUFD/sEc7FfM8pluomu54dHDSMW5GCeqW3J9wBsEfG9TNOKtAM8AFXBoy6VAiiCYzvl9qaduKaFBa/6GnUU2jwq2WGMfu6U261ZTnPMkn/r8SdM0Y5TmjSQKY9fR7R+S6Z4FgB54I78UVxyoAiQ7Zbbn+JIKbAwTTiHAnm3epDOE+zIZ/vJIbnuBFgQ8kGA61HlAA4yjziLBFgYq87iTj4s3MUNdPGiTeYRNyHeL0HRC9cbxR03loIlg2bmF8XM3L9i7eWmqH6tUrQ0vS5adrk6xQtjZr8fg760ps9uJwVQPI0LV0A9npoRN26PivnF1Ac0uxpqxfuH94t9e1pkSx1NAjKXK9Qa74bwrC5HzZCV3RgeFb/8OagJiiIEyPuUcyOouUiw+FwPmXxc5WgY/PuxYNQTJNkH+mT11KdXhlzIh/ISLPkBqJ3P9VJsW1pdEzfvhFLyM2XcvBsSLOdwqJH5xLshnxQ7Gu6En4itmLFnoZRnOReCxEcZs045bcD401lTKp9MPzdVLsdCJ1ney00a6JftOVZmuLjZ7rS4wv0izgbw8ZOTl7tZnFVdmNrIyQtq3PbjeGio3WlKp9lyppSpCpETxyxXYO1t3a0yRf+l2XL6NaSVDNKzXJm1HwrsFRVe5f9LWgMTblCe5dwI5ERrm9xQXl9TLU4cMubUJw4GBcu5FJoIi1sTXQlH3tknGPUESfaAPlk99ZmQqfM8fPhwGQWl6byJCiwpksc/pNXtW+EGtCj6Y14sIefhEk0cFtfmfQDFWZ5rXTFuDS64duXy+pXanIRrcuKYlbqIlCBW/iATWCEsjlnlkJ3AMldK57LL2SOxvrEpni8sibnFZSzyrYr1jQ2xGd0SG5tRUVXpE5W+CrGjqkrsaqgRTQ11YndjPT5X2mNM9lrnfBi4wuiPx7LLWiOxsrYuHjyeElx1mP5nHs/p9NcLW0XrG42i/c1mcWDfHlFbvUN/4RwlyYmeZWwFzqTShaVV0X8vIsIT04bXsRSV+FLF0+fzUuwfCYtAW6s49m6HaKx3ZN0yRM8K0Qg7A5eEb90Ni+jWlmVquBA4Oj4lIpPPxPGDAd2TW7MGkJOXh4bMVqCn3O9/jUgPG6wEpdbLevkw48rAiDrb8mty8vJ0FaiZ2uqczaKB+xFx79FkNjFL7o9EJsXA/UeW1JVcCfmQE6cODNdfJdb9fbH+0jbj01nJL4d6bQgSHwXWVasVTM3MS9MAq+vNVB+nHdRrQ5D4SLB4Xg8KVq1UMr/kzg8DG/SuynxePQrjwUb0y8tWworZ/B82na1W6yUX5eCn0g254+1iOgNKOV/NJQ4L2wKvAQrPIZfD/wTCMhcphzN4KYBgDJtP+7BF8EclL5e0Acu/b7U4v2JNvVYF7I3vIxelvvj+LGZgJu/DYiAnK22KQAmnE9ib9TZgRRUG8W7IDPlGr3KzxNNeNSiJTzIQeJcH3bEf6dHke6XyGZAGcNLiGNJtdZsTPIs3KIC+2o3Uul+9ao15fs12y+1PAEWzU2AxU94wf4HXJRguaB0YIIeEAV4NBt2Qh8VvIa9TnV/k10MY1I/Duza02qnpWRRkAbjjGaSLWgWLLY/tlNurCYrtTQuLN3mcDBV0oaKiHr/YPrYz0/G5rLAogP7LA4vdvC7iwJdkZDyYybZn9CwFDo/EgnyP8rmYUraL7dPTprQDvFZhzL+K6lA5QaHrnddqq1aeIVisAP8h+T6Egj5iJ4/B3Xo9SgFnGBYL4ogGD5lfxPTC1YM1SiOMpPJ/vS49Y1RyvaZgsRJ0yZJ7F41pWATGiSug8Sz157jOi21LtCs5yN3uAsanL3Cddh6VXC75c06wlMrQLUvi/VmWwCI0eFb5zWyK9+hNAa38zj+9sBQ5QCu/TVKBYSRNek/pKYBsN1JeSxYD9Tjy/0As/PeUajVQycvyBtw6gKgGUB4s5K5Exrx4A+5/2H1qhIfreRUAAAAASUVORK5CYII="
    },
    Qetd: function(e, t, i) {
        "use strict";
        var n = Object.assign.bind(Object);
        e.exports = n,
        e.exports.default = e.exports
    },
    SyLE: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "e", (function() {
                return n
            }
            )),
            i.d(t, "c", (function() {
                return r
            }
            )),
            i.d(t, "b", (function() {
                return _
            }
            )),
            i.d(t, "f", (function() {
                return a
            }
            )),
            i.d(t, "d", (function() {
                return o
            }
            )),
            i.d(t, "a", (function() {
                return s
            }
            ));
            var n = {
                lngs: ["vi-VN"],
                resources: {
                    "vi-VN": {
                        common: {
                            Live_streaming_host_streamer_education_new: "M\u1edbi",
                            aggregation: {
                                addReminder: "Nh\u1eafc t\xf4i",
                                cancelRemind: "H\u1ee7y nh\u1eafc nh\u1edf",
                                comingSoon: "S\u1eafp di\u1ec5n ra",
                                comingSoonPlaceholder: "\u0110ang chu\u1ea9n b\u1ecb Livestream, vui l\xf2ng ch\u1edd",
                                comingSoonTitle: "S\u1eafp Di\u1ec5n Ra",
                                header: "SHOPPING WITH YOUR STARS",
                                liveNow: "\u0110ang ph\xe1t",
                                liveNowPlaceholder: "\u0110ang chu\u1ea9n b\u1ecb Livestream, vui l\xf2ng ch\u1edd",
                                liveNowTitle: "Livestream \u0111ang \u0111\u01b0\u1ee3c ph\xe1t",
                                mainheading: "SHOPPING",
                                reminders: "Thi\u1ebft l\u1eadp nh\u1eafc nh\u1edf",
                                replay: "Xem l\u1ea1i",
                                replayCount: "Xem",
                                replayCounts: "L\u01b0\u1ee3t xem",
                                replayPlaceholder: "Kh\xf4ng th\u1ec3 xem l\u1ea1i b\xe2y gi\u1edd, vui l\xf2ng ch\u1edd",
                                replayTitle: "Xem L\u1ea1i",
                                seeall: "Xem t\u1ea5t c\u1ea3",
                                shopeeLive: "Shopee Live",
                                subheading: "WITH YOUR STARS"
                            },
                            appDescription: "Test share information",
                            appImage: "TEST_IMAGE",
                            appMinVersionAndroid: "tw:2.32.35,id:2.32.35,th:2.34.22,vn:2.34.22,ph:2.34.22,sg:2.36.30,my:2.36.20",
                            appMinVersionIOS: "tw:2.32.40,id:2.32.40,ph:2.34.20,th:2.34.20,vn:2.34.20,my:2.34.12,sg:2.34.12",
                            appTitle: "Shopee Live",
                            button: {
                                common: {
                                    refresh: "t\u1ea3i l\u1ea1i"
                                }
                            },
                            clip_detail_page_toast: "This is a product introduction livestream clip.",
                            confirm: {
                                btn: {
                                    cancel: "Tho\xe1t",
                                    no: "Kh\xf4ng",
                                    ok: "OK",
                                    remove: "X\xf3a",
                                    yes: "C\xf3"
                                },
                                closeAndDiscard: "\u0110\xf3ng v\xe0 h\u1ee7y thay \u0111\u1ed5i?",
                                coverUploadFailed: "T\u1ea3i \u1ea3nh b\xeca kh\xf4ng th\xe0nh c\xf4ng. Vui l\xf2ng th\u1eed l\u1ea1i.",
                                liveNotEnd: "Livestream g\u1ea7n nh\u1ea5t \u0111ang \u0111\u01b0\u1ee3c ph\xe1t. B\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c ph\xe1t s\xf3ng?",
                                removeProduct: "B\u1ecf s\u1ea3n ph\u1ea9m n\xe0y?"
                            },
                            cover_upload_failed_network: "Vui l\xf2ng ki\u1ec3m tra k\u1ebft n\u1ed1i m\u1ea1ng v\xe0 th\u1eed l\u1ea1i.",
                            empty: "",
                            guideDownload: {
                                guideDescription: "Shopee Live ch\u1ec9 c\xf3 tr\xean \u1ee9ng d\u1ee5ng, b\u1ea1n vui l\xf2ng t\u1ea3i \u1ee9ng d\u1ee5ng Shopee tr\u01b0\u1edbc.",
                                guideDownloadBtn: "T\u1ea3i ngay"
                            },
                            liveConflict: {
                                btn: {
                                    ok: "OK, t\xf4i hi\u1ec3u."
                                },
                                description: "T\xe0i kho\u1ea3n n\xe0y \u0111ang ph\xe1t Livestream tr\xean \u0111i\u1ec7n tho\u1ea1i kh\xe1c"
                            },
                            liveEnd: {
                                guest: {
                                    btnView: "Xem s\u1ea3n ph\u1ea9m li\xean quan",
                                    noRelatedProductsTips: "Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m li\xean quan trong Livestream n\xe0y",
                                    relatedProductsTips: "{{var_num}} s\u1ea3n ph\u1ea9m li\xean quan trong Livestream",
                                    relatedProductsTitle: "s\u1ea3n ph\u1ea9m li\xean quan ({{var_num}})",
                                    title: "Livestream \u0111\xe3 k\u1ebft th\xfac"
                                },
                                kol: {
                                    btnClose: "\u0110\xf3ng",
                                    duration: "Th\u1eddi l\u01b0\u1ee3ng",
                                    likes: "L\u01b0\u1ee3t th\xedch",
                                    title: "Livestream \u0111\xe3 k\u1ebft th\xfac",
                                    viewers: "L\u01b0\u1ee3t xem",
                                    violationTips: "Bu\u1ed9c d\u1eebng l\u1ea1i v\xec c\xf3 d\u1ea5u hi\u1ec7u b\u1ea5t th\u01b0\u1eddng"
                                }
                            },
                            live_recommended_reason_flash_sale: "{{category2}} Flash Sales",
                            live_recommended_reason_lowest_price: "{{category2}} Lowest Price",
                            live_recommended_reason_lowest_price_days: "Lowest Price in 30 days",
                            live_stream_add_prodct_set_maximum_limit: "S\u1ed1 l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m \u0111\xe3 \u0111\u1ea1t gi\u1edbi h\u1ea1n cho ph\xe9p",
                            live_stream_add_prodct_set_no_product: "Ch\u01b0a c\xf3 s\u1ea3n ph\u1ea9m n\xe0o \u0111\u01b0\u1ee3c th\xeam v\xe0o B\u1ed9 s\u01b0u t\u1eadp",
                            live_stream_add_prodct_set_same_name: "S\u1ea3n ph\u1ea9m \u0111\xe3 c\xf3 trong B\u1ed9 s\u01b0u t\u1eadp",
                            live_stream_add_prodct_set_title: "Th\xeam B\u1ed9 s\u01b0u t\u1eadp",
                            live_stream_my_prodct_set_title: "B\u1ed9 s\u01b0u t\u1eadp c\u1ee7a t\xf4i",
                            live_stream_prodct_set_add_product: "Th\xeam s\u1ea3n ph\u1ea9m",
                            live_stream_prodct_set_add_product_maximum_limit: "B\u1ea1n \u0111\xe3 th\xeam {number} s\u1ea3n ph\u1ea9m, gi\u1edbi h\u1ea1n c\xf3 th\u1ec3 th\xeam l\xe0 {limit}. H\xe3y gi\u1ea3m s\u1ed1 l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m v\xe0 th\u1eed l\u1ea1i.",
                            live_stream_prodct_set_bubble: "Th\xeam s\u1ea3n ph\u1ea9m t\u1eeb B\u1ed9 s\u01b0u t\u1eadp",
                            live_stream_prodct_set_create_new: "T\u1ea1o B\u1ed9 s\u01b0u t\u1eadp m\u1edbi",
                            live_stream_prodct_set_delete_1: "Xo\xe1",
                            live_stream_prodct_set_delete_2: "B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 ?",
                            live_stream_prodct_set_detail: "Chi ti\u1ebft B\u1ed9 s\u01b0u t\u1eadp",
                            live_stream_prodct_set_done: "Ho\xe0n th\xe0nh",
                            live_stream_prodct_set_how_it_work: "C\xe1ch thi\u1ebft l\u1eadp B\u1ed9 s\u01b0u t\u1eadp tr\xean Livestream",
                            live_stream_prodct_set_how_it_work_1: "1. T\u1ea1o B\u1ed9 s\u01b0u t\u1eadp Livestream",
                            live_stream_prodct_set_how_it_work_2: "N\u1ebfu b\u1ea1n ph\u1ea3i li\xean t\u1ee5c nh\u1ea5n ch\u1ecdn nhi\u1ec1u s\u1ea3n ph\u1ea9m cho phi\xean Livestream, h\xe3y nh\xf3m ch\xfang th\xe0nh B\u1ed9 s\u01b0u t\u1eadp \u0111\u1ec3 d\u1ec5 d\xe0ng thi\u1ebft l\u1eadp h\u01a1n nh\xe9!",
                            live_stream_prodct_set_how_it_work_3: "2. Th\xeam B\u1ed9 s\u01b0u t\u1eadp v\xe0o Livestream c\u1ee7a b\u1ea1n",
                            live_stream_prodct_set_how_it_work_4: "Sau khi t\u1ea1o B\u1ed9 s\u01b0u t\u1eadp, b\u1ea1n c\xf3 th\u1ec3 th\xeam ch\xfang v\xe0o phi\xean Livestream c\u1ee7a m\xecnh ch\u1ec9 v\u1edbi m\u1ed9t nh\u1ea5n",
                            live_stream_prodct_set_maximum_limit: "S\u1ed1 l\u01b0\u1ee3ng B\u1ed9 s\u01b0u t\u1eadp \u0111\xe3 \u0111\u1ea1t gi\u1edbi h\u1ea1n th\xeam v\xe0o",
                            live_stream_prodct_set_name: "T\xean",
                            live_stream_prodct_set_name_toast: "Nh\u1eadp t\xean (b\u1eaft bu\u1ed9c)",
                            live_stream_prodct_set_product_list: "Danh s\xe1ch s\u1ea3n ph\u1ea9m",
                            live_stream_prodct_set_save_operation_1: "L\u01b0u thao t\xe1c",
                            live_stream_prodct_set_save_operation_2: "B\u1ea1n c\xf3 mu\u1ed1n l\u01b0u thao t\xe1c g\u1ea7n \u0111\xe2y?",
                            live_stream_prodct_set_save_operation_no: "Kh\xf4ng",
                            live_stream_prodct_set_save_operation_yes: "C\xf3",
                            live_stream_prodct_set_search: "T\xecm ki\u1ebfm B\u1ed9 s\u01b0u t\u1eadp",
                            live_stream_product_set_no_name: "Kh\xf4ng th\u1ec3 \u0111\u1ec3 tr\u1ed1ng, vui l\xf2ng \u0111i\u1ec1n t\xean B\u1ed9 s\u01b0u t\u1eadp.",
                            live_stream_search_prodct_set_no_result: "B\u1ed9 s\u01b0u t\u1eadp kh\xf4ng t\u1ed3n t\u1ea1i",
                            live_streaming_ESP_conflict_popup: "C\xf3 2 s\u1ea3n ph\u1ea9m c\xf3 c\xf9ng m\u1ee9c gi\xe1. Ch\u1ec9 duy nh\u1ea5t s\u1ea3n ph\u1ea9m v\u1edbi Gi\xe1 \u0110\u1eb7c Bi\u1ec7t tr\xean Live m\u1edbi \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb trong gi\u1ecf h\xe0ng h\xe0ng khi KOL livestream",
                            live_streaming_ESP_conflict_popup_2: "S\u1ea3n ph\u1ea9m \u0111\xe3 \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp khuy\u1ebfn m\xe3i. B\u1ea1n kh\xf4ng th\u1ec3 th\xeam s\u1ea3n ph\u1ea9m n\xe0y n\u1eefa.",
                            live_streaming_ESP_edit_stock: "Ch\u1ec9nh s\u1eeda t\u1ed3n kho",
                            live_streaming_ESP_from: "T\u1eeb",
                            live_streaming_ESP_onging: "\u0110ang di\u1ec5n ra",
                            live_streaming_ESP_period: "Th\u1eddi gian",
                            live_streaming_ESP_products: "S\u1ea3n ph\u1ea9m",
                            live_streaming_ESP_promotion_sets: "Khuy\u1ebfn m\xe3i",
                            live_streaming_ESP_search_noresult: "No results found. Please make sure that you have input the correct promotion name.",
                            live_streaming_ESP_search_promotion: "Search all Promotions",
                            live_streaming_ESP_shopee: "Shopee",
                            live_streaming_ESP_stock_popup: "R\u1ea5t ti\u1ebfc! B\u1ea1n kh\xf4ng th\u1ec3 ch\u1ec9nh s\u1eeda s\u1ea3n ph\u1ea9m \u0111ang ch\u1ea1y Gi\xe1 \u0110\u1eb7c Bi\u1ec7t tr\xean Live",
                            live_streaming_ESP_streamign_price_management: "Chi ti\u1ebft khuy\u1ebfn m\xe3i",
                            live_streaming_ESP_upcoming: "S\u1eafp di\u1ec5n ra",
                            live_streaming_ESP_upcoming_popup: "R\u1ea5t ti\u1ebfc! B\u1ea1n kh\xf4ng th\u1ec3 thi\u1ebft l\u1eadp t\u1ed3n kho khi khuy\u1ebfn m\xe3i \u0111ang di\u1ec5n ra",
                            live_streaming_ESP_upcoming_promotion_label: "trong v\xf2ng {countdown days} ng\xe0y",
                            live_streaming_PSP_customise: "T\xf9y ch\u1ec9nh",
                            live_streaming_PSP_customise_duration: "T\xf9y ch\u1ec9nh Th\u1eddi l\u01b0\u1ee3ng",
                            live_streaming_PSP_duration: "Th\u1eddi l\u01b0\u1ee3ng",
                            live_streaming_PSP_duration_mins: "{{duration}} ph\xfat",
                            live_streaming_PSP_duration_popup: "H\xe3y \u0111\u1ea3m b\u1ea3o s\u1ebd k\u1ebft th\xfac tr\u01b0\u1edbc {{end_time}}.",
                            live_streaming_PSP_edit_notice: "Xin l\u1ed7i. B\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c ph\xe9p ch\u1ec9nh s\u1eeda Gi\xe1 trong Live",
                            live_streaming_PSP_time_left: "Th\u1eddi gian c\xf2n l\u1ea1i",
                            live_streaming_Shopee_live_ad: "Qu\u1ea3ng c\xe1o cho Livestream",
                            live_streaming_activity_record_auction_none_hint: "B\u1ea1n ch\u01b0a c\xf3 k\u1ebft qu\u1ea3 \u0110\u1ea5u gi\xe1 n\xe0o",
                            live_streaming_activity_record_auction_title: "K\u1ebft qu\u1ea3 \u0110\u1ea5u gi\xe1",
                            live_streaming_activity_record_lucky_draw_none_hint: "Ch\u01b0a c\xf3 k\u1ebft qu\u1ea3 V\xf2ng Quay n\xe0o.",
                            live_streaming_activity_record_lucky_draw_none_hint_my: "No Spin2Win record yet.",
                            live_streaming_activity_record_lucky_draw_none_hint_ph: "No Lucky Roleta record yet.",
                            live_streaming_activity_record_lucky_draw_none_hint_sg: "Kh\xf4ng c\xf3 k\u1ebft qu\u1ea3 V\xf2ng Quay n\xe0o",
                            live_streaming_activity_record_lucky_draw_remaining_hint: "Ng\xe2n s\xe1ch c\xf2n l\u1ea1i \u0111\u01b0\u1ee3c ho\xe0n tr\u1ea3 v\xe0o t\xe0i kho\u1ea3n Xu c\u1ee7a b\u1ea1n.",
                            live_streaming_activity_record_lucky_draw_title: "K\u1ebft qu\u1ea3 V\xf2ng Quay",
                            live_streaming_activity_record_lucky_draw_title_my: "Spin2Win Record",
                            live_streaming_activity_record_lucky_draw_title_ph: "Lucky Roleta Record",
                            live_streaming_activity_record_lucky_draw_title_sg: "K\u1ebft qu\u1ea3 V\xf2ng Quay",
                            live_streaming_add_my_like_failed: "Add items from 'my like' is currently not supported, already removed this kind of items from your adding, please check.",
                            live_streaming_add_products_text: "Th\xeam s\u1ea3n ph\u1ea9m v\xe0o live stream",
                            live_streaming_auctionranking_noauction: "Auction has not started",
                            live_streaming_auctionranking_norecord: "No auction record yet",
                            live_streaming_auctionranking_nostream: "Livestream v\u1eeba k\u1ebft th\xfac",
                            live_streaming_auctionranking_refreshbtn: "Refresh",
                            live_streaming_auctionranking_title: "Auction Ranking",
                            live_streaming_auctionranking_unfoldbtn: "Top Bidders",
                            live_streaming_audio_call_bad_network: "M\u1ea1ng y\u1ebfu",
                            live_streaming_auto_pin_checkbox: "Ghim",
                            live_streaming_auto_pin_fail: "Ghim kh\xf4ng th\xe0nh c\xf4ng",
                            live_streaming_auto_pin_hover_tips_pin: "Ghim b\xecnh lu\u1eadn n\xe0y (Ctrl+Enter)",
                            live_streaming_auto_pin_hover_tips_send: "G\u1eedi b\xecnh lu\u1eadn n\xe0y (Enter)",
                            live_streaming_auto_pin_send_button: "G\u1eedi",
                            live_streaming_auto_pin_successfully: "Ghim th\xe0nh c\xf4ng!",
                            live_streaming_auto_pin_tips_bubble_pin: "Nh\u1ea5n v\xe0o \u0111\xe2y \u0111\u1ec3 ghim b\xecnh lu\u1eadn!",
                            live_streaming_block_keywords_title: "T\u1eeb b\u1ecb ch\u1eb7n",
                            live_streaming_br_version_control_h5_button: "Update Now",
                            live_streaming_br_version_control_h5_subtitle: "Watch livestreams to get exclusive rewards!",
                            live_streaming_br_version_control_h5_title: "Update your app to watch Shopee Live",
                            live_streaming_br_version_control_popup_button: "Update Now",
                            live_streaming_br_version_control_popup_subtitle: "Watch livestreams to get exclusive rewards!",
                            live_streaming_br_version_control_popup_title: "Update your app to watch Shopee Live",
                            live_streaming_btn_cancel: "Cancel",
                            live_streaming_btn_confirm: "Confirm",
                            live_streaming_buy: "Mua",
                            live_streaming_check_in_passed: "Check in failed. check in task has passed.",
                            live_streaming_coins_claimed: "{{x}} coins claimed",
                            live_streaming_coins_host_over_cap_alert_content: "B\u1ea1n c\xf2n \u0111\u01b0\u1ee3c d\xf9ng th\xeam {left_quota} Xu cho Th\u01b0\u1edfng Xu. Vui l\xf2ng c\xe0i \u0111\u1eb7t l\u1ea1i ng\xe2n s\xe1ch",
                            live_streaming_coins_host_over_cap_alert_notice: "Notice",
                            live_streaming_coins_host_over_cap_alert_title: "B\u1ea1n \u0111\xe3 \u0111\u1ea1t \u0111\u1ebfn gi\u1edbi h\u1ea1n th\u01b0\u1edfng Xu",
                            live_streaming_coins_host_over_cap_confirm: "X\xe1c nh\u1eadn",
                            live_streaming_coins_host_web_button_refresh: "L\xe0m m\u1edbi",
                            live_streaming_coins_host_web_endpage_activity_record_entrance: "NH\u1eacT K\xdd HO\u1ea0T \u0110\u1ed8NG",
                            live_streaming_coins_host_web_failed_to_load_tip: "\u0110\xe3 x\u1ea3y ra s\u1ef1 c\u1ed1 khi t\u1ea3i, vui l\xf2ng nh\u1ea5n \u0111\u1ec3 l\xe0m m\u1edbi!",
                            live_streaming_coins_host_web_no_record_tip: "Kh\xf4ng c\xf3 ghi nh\u1eadn Th\u01b0\u1edfng Xu",
                            live_streaming_coins_host_web_record_entrance: "Ghi nh\u1eadn Th\u01b0\u1edfng Xu",
                            live_streaming_coins_host_web_text_claimed_budget: "\u0110\xe3 l\u1ea5y / Ng\xe2n s\xe1ch",
                            live_streaming_coins_host_web_text_coins_claimed: "Xu \u0111\xe3 l\u1ea5y",
                            live_streaming_coins_host_web_text_coins_per_claim: "Xu m\u1ed7i l\u1ea7n l\u1ea5y",
                            live_streaming_coins_host_web_text_refund_tip: "Ng\xe2n s\xe1ch c\xf2n l\u1ea1i s\u1ebd \u0111\u01b0\u1ee3c ho\xe0n tr\u1ea3 v\xe0o t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n.",
                            live_streaming_coins_host_web_text_round_count: "Th\u01b0\u1edfng Xu (L\u1ea7n th\u1ee9 #{{round_count}})",
                            live_streaming_coins_host_web_text_times_claimed: "S\u1ed1 l\u1ea7n l\u1ea5y",
                            live_streaming_coins_host_web_text_times_claimed_2: "S\u1ed1 l\u1ea7n l\u1ea5y",
                            live_streaming_coins_in_live_award_to_live_balance: "Coins claimed in Live will be awarded to My Balance in Live",
                            live_streaming_commission_rate: "T\u1ec9 l\u1ec7 hoa h\u1ed3ng",
                            live_streaming_common_bottomline: "Kh\xf4ng c\xf2n n\u1ed9i dung n\xe0o",
                            live_streaming_common_loading: "\u0110ang t\u1ea3i",
                            live_streaming_common_networkerror: "L\u1ed7i m\u1ea1ng, vui l\xf2ng th\u1eed l\u1ea1i sau",
                            live_streaming_common_noconnection: "Kh\xf4ng c\xf3 k\u1ebft n\u1ed1i :(",
                            live_streaming_common_plztry: "Vui l\xf2ng th\u1eed l\u1ea1i sau",
                            live_streaming_common_try: "Th\u1eed l\u1ea1i",
                            live_streaming_common_voucher_subscript: "Voucher",
                            live_streaming_cover_following_host: "Shop b\u1ea1n theo d\xf5i",
                            live_streaming_cover_friends_are_watching: "B\u1ea1n b\xe8 \u0111ang xem",
                            live_streaming_cover_friends_commented: "B\u1ea1n b\xe8 \u0111\xe3 b\xecnh lu\u1eadn",
                            live_streaming_cover_friends_liked: "B\u1ea1n b\xe8 \u0111\xe3 th\xedch",
                            live_streaming_cover_friends_shared: "B\u1ea1n b\xe8 \u0111\xe3 chia s\u1ebb",
                            live_streaming_cover_purchased_before: "B\u1ea1n \u0111\xe3 t\u1eebng mua",
                            live_streaming_create_test_stream_subtitle: "S\u1ebd kh\xf4ng hi\u1ec3n th\u1ecb trong b\u1ea5t k\u1ef3 tr\u01b0\u1eddng h\u1ee3p n\xe0o",
                            live_streaming_create_test_stream_title: "T\u1ea1o Livestream th\u1eed nghi\u1ec7m",
                            live_streaming_create_test_streaming_type_test_stream: "Livestream th\u1eed nghi\u1ec7m",
                            live_streaming_dashboard_about_data_title: "S\u1ed1 li\u1ec7u th\u1ed1ng k\xea",
                            live_streaming_dashboard_add_to_cart_description: 'L\u01b0\u1ee3t "Th\xeam v\xe0o gi\u1ecf h\xe0ng"',
                            live_streaming_dashboard_add_to_cart_title: "Th\xeam v\xe0o gi\u1ecf h\xe0ng",
                            live_streaming_dashboard_atc_title: "Th\xeam v\xe0o gi\u1ecf h\xe0ng",
                            live_streaming_dashboard_avg_watch_time_description: "Th\u1eddi l\u01b0\u1ee3ng xem trung b\xecnh trong bu\u1ed5i livestream",
                            live_streaming_dashboard_avg_watch_time_title: "Th\u1eddi gian xem trung b\xecnh",
                            live_streaming_dashboard_click_to_order_rate_description: "S\u1ed1 l\u01b0\u1ee3ng \u0111\u01a1n \u0111\u1eb7t h\xe0ng t\u1eeb livestream/s\u1ed1 l\u1ea7n click v\xe0o s\u1ea3n ph\u1ea9m khi livestream",
                            live_streaming_dashboard_click_to_order_rate_title: "L\u01b0\u1ee3t click mua s\u1ea3n ph\u1ea9m",
                            live_streaming_dashboard_comments_description: "B\xecnh lu\u1eadn",
                            live_streaming_dashboard_comments_title: "B\xecnh lu\u1eadn",
                            live_streaming_dashboard_ctr_description: "T\u1ef7 l\u1ec7 click, s\u1ed1 l\u01b0\u1ee3t click v\xe0o s\u1ea3n ph\u1ea9m/l\u01b0\u1ee3t xem",
                            live_streaming_dashboard_ctr_title: "T\u1ef7 l\u1ec7 click",
                            live_streaming_dashboard_data_name_title: "T\xean s\u1ed1 li\u1ec7u",
                            live_streaming_dashboard_enagaged_ccu_time_title: "Th\u1eddi gian xem \u22651 ph\xfat",
                            live_streaming_dashboard_engaged_ccu_description: "L\u01b0\u1ee3ng ng\u01b0\u1eddi \u0111\xe3 xem livestream \u22651 ph\xfat",
                            live_streaming_dashboard_engaged_ccu_title: "L\u01b0\u1ee3t xem",
                            live_streaming_dashboard_gmv: "Doanh thu",
                            live_streaming_dashboard_gmv_description: "Gi\xe1 tr\u1ecb c\xe1c \u0111\u01a1n h\xe0ng \u0111\xe3 \u0111\u1eb7t (\u0111\xe3 thanh to\xe1n v\xe0 ch\u01b0a thanh to\xe1n) trong qu\xe1 tr\xecnh Livestream, bao g\u1ed3m c\u1ea3 doanh s\u1ed1 t\u1eeb c\xe1c \u0111\u01a1n h\xe0ng b\u1ecb h\u1ee7y.",
                            live_streaming_dashboard_gmv_title: "Doanh thu",
                            live_streaming_dashboard_gross_order_description: "S\u1ed1 \u0111\u01a1n h\xe0ng \u0111\xe3 \u0111\u1eb7t (\u0111\xe3 thanh to\xe1n v\xe0 ch\u01b0a thanh to\xe1n) trong Livestream, bao g\u1ed3m c\u1ea3 \u0111\u01a1n h\xe0ng \u0111\xe3 h\u1ee7y.",
                            live_streaming_dashboard_gross_order_title: "T\u1ed5ng \u0111\u01a1n h\xe0ng",
                            live_streaming_dashboard_last_1_min_title: "Trong 1 ph\xfat",
                            live_streaming_dashboard_likes_description: 'L\u01b0\u1ee3t nh\u1ea5n "Th\xedch" trong bu\u1ed5i livestream',
                            live_streaming_dashboard_likes_title: "L\u01b0\u1ee3t th\xedch",
                            live_streaming_dashboard_meaning_of_data_title: "\xdd ngh\u0129a s\u1ed1 li\u1ec7u",
                            live_streaming_dashboard_no_network_title: "L\u1ed7i!",
                            live_streaming_dashboard_no_network_toast: "Nh\u1ea5n v\xe0o n\xfat T\u1ea3i l\u1ea1i trang \u1edf g\xf3c tr\xean b\xean ph\u1ea3i \u0111\u1ec3 th\u1eed l\u1ea1i",
                            live_streaming_dashboard_no_product_title: "Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m",
                            live_streaming_dashboard_no_product_toast: "Th\xeam s\u1ea3n ph\u1ea9m v\xe0o livestream \u0111\u1ec3 xem c\xe1c s\u1ed1 li\u1ec7u th\u1ed1ng k\xea c\u1ee7a s\u1ea3n ph\u1ea9m",
                            live_streaming_dashboard_pcu_description: "T\u1ed5ng s\u1ed1 ng\u01b0\u1eddi xem Livestream cao nh\u1ea5t trong c\xf9ng 1 th\u1eddi \u0111i\u1ec3m",
                            live_streaming_dashboard_pcu_title: "L\u01b0\u1ee3t xem cao nh\u1ea5t",
                            live_streaming_dashboard_product_click_description: "L\u01b0\u1ee3t click v\xe0o s\u1ea3n ph\u1ea9m t\u1eeb bu\u1ed5i livestream",
                            live_streaming_dashboard_product_click_title: "L\u01b0\u1ee3t click v\xe0o s\u1ea3n ph\u1ea9m",
                            live_streaming_dashboard_product_sold_list_title: "Danh s\xe1ch s\u1ea3n ph\u1ea9m \u0111\xe3 mua",
                            live_streaming_dashboard_see_more_button: "Xem th\xeam",
                            live_streaming_dashboard_selling_products_title: "S\u1ea3n ph\u1ea9m \u0111ang b\xe1n",
                            live_streaming_dashboard_shares_description: "S\u1ed1 l\u01b0\u1ee3ng chia s\u1ebb trong bu\u1ed5i Livestream",
                            live_streaming_dashboard_shares_title: "L\u01b0\u1ee3t chia s\u1ebb",
                            live_streaming_dashboard_total_comments_description: "S\u1ed1 l\u01b0\u1ee3t b\xecnh lu\u1eadn trong bu\u1ed5i Livestream",
                            live_streaming_dashboard_total_comments_title: "T\u1ed5ng b\xecnh lu\u1eadn",
                            live_streaming_dashboard_total_items_sold_description: "T\u1ed5ng l\u01b0\u1ee3t b\xe1n t\u1eeb c\xe1c \u0111\u01a1n h\xe0ng \u0111\xe3 \u0111\u1eb7t trong bu\u1ed5i Livestream",
                            live_streaming_dashboard_total_items_sold_title: "T\u1ed5ng s\u1ea3n ph\u1ea9m \u0111\xe3 b\xe1n",
                            live_streaming_dashboard_total_views_description: "L\u01b0\u1ee3t xem livestream",
                            live_streaming_dashboard_total_views_title: "T\u1ed5ng l\u01b0\u1ee3t xem",
                            live_streaming_delete_sales_prohibit: "Xo\xe1 s\u1ea3n ph\u1ea9m b\u1ecb h\u1ea1n ch\u1ebf v\xe0 b\u1eaft \u0111\u1ea7u phi\xean Live",
                            live_streaming_delete_ssp_popup: "S\u1ea3n ph\u1ea9m \u0111ang thi\u1ebft l\u1eadp Gi\xe1 Ch\u1ec9 C\xf3 Tr\xean Live, khuy\u1ebfn m\xe3i s\u1ebd k\u1ebft th\xfac ngay khi xo\xe1 s\u1ea3n ph\u1ea9m.",
                            live_streaming_delete_timeslots_reminder: "B\u1ea1n mu\u1ed1n x\xf3a?",
                            live_streaming_dev_test_key: "test-web",
                            live_streaming_endpage_btn_follow: "Theo d\xf5i",
                            live_streaming_endpager_btn_following: "\u0110ang theo d\xf5i",
                            live_streaming_entrance_ad: "Ad",
                            live_streaming_featured_item_buy_now: "Buy Now",
                            live_streaming_friends_are_following: "{{friend_num}} friend(s) are following",
                            live_streaming_friends_are_watching: "{{friend_num}} friend(s) are watching",
                            live_streaming_friends_commented: "{{friend_num}} friend(s) commented",
                            live_streaming_friends_handline: "Friends are watching",
                            live_streaming_friends_liked: "{{friend_num}} friend(s) liked",
                            live_streaming_friends_shared: "{{friend_num}} friend(s) shared",
                            live_streaming_host__smart_price_reward_views: "{realtime_received_bonus} l\u01b0\u1ee3t xem \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam!",
                            live_streaming_host_account_has_start: 'Kh\xf4ng th\u1ec3 ti\u1ebfp t\u1ee5c: t\xe0i kho\u1ea3n n\xe0y \u0111\xe3 b\u1eaft \u0111\u1ea7u Livestream tr\xean m\u1ed9t thi\u1ebft b\u1ecb kh\xe1c, c\xf3 ti\xeau \u0111\u1ec1 "{{title}}".',
                            live_streaming_host_account_has_start_do_you_wish_return: 'T\xe0i kho\u1ea3n n\xe0y \u0111\xe3 b\u1eaft \u0111\u1ea7u Livestream, c\xf3 ti\xeau \u0111\u1ec1 "{{title}}". B\u1ea1n c\xf3 mu\u1ed1n quay l\u1ea1i Livestream kh\xf4ng?',
                            live_streaming_host_activity_record: "L\u1ecbch s\u1eed ho\u1ea1t \u0111\u1ed9ng",
                            live_streaming_host_ad_views_no_number: "c\xf3 l\u01b0\u1ee3t xem t\u1eeb Qu\u1ea3ng c\xe1o",
                            live_streaming_host_ad_views_number: "c\xf3 %$d l\u01b0\u1ee3t xem t\u1eeb Qu\u1ea3ng c\xe1o",
                            live_streaming_host_add_replay_description: "Th\xeam ph\u1ea7n Xem L\u1ea1i t\u1ea1i \u0111\xe2y v\xe0 ng\u01b0\u1eddi mua c\xf3 th\u1ec3 xem l\u1ea1i tr\xean trang ch\u1ee7 c\u1ee7a Shop b\u1ea1n",
                            live_streaming_host_add_replays: "Th\xeam ph\u1ea7n Xem L\u1ea1i",
                            live_streaming_host_add_replays_back: "X\xf3a nh\u1eefng thay \u0111\u1ed5i?",
                            live_streaming_host_add_replays_back_discard: "X\xf3a",
                            live_streaming_host_auction: "\u0110\u1ea5u gi\xe1",
                            live_streaming_host_auction_canceled: "V\xf2ng \u0111\u1ea5u gi\xe1 \u0111\xe3 b\u1ecb h\u1ee7y.",
                            live_streaming_host_auction_no_one_joined: "Ch\u01b0a c\xf3 ng\u01b0\u1eddi tham gia",
                            live_streaming_host_auction_no_session_use: "Kh\xf4ng c\xf3 ho\u1ea1t \u0111\u1ed9ng n\xe0o \u0111\u01b0\u1ee3c ghi l\u1ea1i",
                            live_streaming_host_auction_ph: "Mine",
                            live_streaming_host_auction_round_number: "V\xf2ng {{number}}",
                            live_streaming_host_auction_rule: "Lu\u1eadt",
                            live_streaming_host_auction_rule_all_viewers: "T\u1ea5t c\u1ea3 ng\u01b0\u1eddi xem",
                            live_streaming_host_auction_rule_fastest_finger: "Nhanh tay nh\u1ea5t",
                            live_streaming_host_auction_rule_followers_only: "Ch\u1ec9 ng\u01b0\u1eddi theo d\xf5i",
                            live_streaming_host_auction_top_pc: "Top {{number}}",
                            live_streaming_host_auction_winner: "Ng\u01b0\u1eddi chi\u1ebfn th\u1eafng",
                            live_streaming_host_bonus_view_hint: "Boosted",
                            live_streaming_host_btn_cancel: "H\u1ee7y",
                            live_streaming_host_btn_confirm: "X\xe1c nh\u1eadn",
                            live_streaming_host_btn_delete: "X\xf3a",
                            live_streaming_host_btn_discard: "Lo\u1ea1i b\u1ecf",
                            live_streaming_host_btn_noted: "Ghi ch\xfa",
                            live_streaming_host_btn_save: "L\u01b0u",
                            live_streaming_host_cic_claimed_times: "%@ times claimed",
                            live_streaming_host_cic_coins_per_claim: "%@ coins per claim",
                            live_streaming_host_cic_end_claim_times: "Th\u1eddi Gian \u0110\u1ed5i Xu",
                            live_streaming_host_cic_end_coins_claimed: "Xu \u0111\xe3 \u0111\u1ed5i",
                            live_streaming_host_cic_end_coins_per_claim: "Xu cho m\u1ed7i l\u01b0\u1ee3t \u0111\u1ed5i",
                            live_streaming_host_cic_end_title: "Xu \u01afu \u0110\xe3i",
                            live_streaming_host_cic_total_coins_claimed: "%@ coins claimed",
                            live_streaming_host_create_new_reminder: "T\u1ea1o m\u1edbi l\u1eddi nh\u1eafc",
                            live_streaming_host_createstreaming_highlight_description: "Ch\u1ee7 \u0111\u1ec1 s\u1ebd \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb tr\xean m\xe0n h\xecnh livestream c\u1ee7a Shop.",
                            live_streaming_host_createstreaming_highlight_pagetitle: "Ch\u1ee7 \u0111\u1ec1 n\u1ed5i b\u1eadt",
                            live_streaming_host_createstreaming_highlight_set: "Ch\u1ecdn ch\u1ee7 \u0111\u1ec1 (kh\xf4ng b\u1eaft bu\u1ed9c)",
                            live_streaming_host_createstreaming_highlight_title: "Ch\u1ee7 \u0111\u1ec1 n\u1ed5i b\u1eadt",
                            live_streaming_host_createstreaming_nohighlight: "Kh\xf4ng s\u1eed d\u1ee5ng",
                            live_streaming_host_dialog_delete_rcmded_no_reminder_set: "L\u1eddi nh\u1eafc n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1ec1 xu\u1ea5t tr\xean trang qu\u1ea3n l\xfd l\u1eddi nh\u1eafc. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?",
                            live_streaming_host_dialog_delete_rcmded_reminder_plural_set: "{{num}} l\u1eddi nh\u1eafc n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1ec1 xu\u1ea5t tr\xean trang qu\u1ea3n l\xfd l\u1eddi nh\u1eafc. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?",
                            live_streaming_host_dialog_delete_rcmded_reminder_singular_set: "L\u1eddi nh\u1eafc n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1ec1 xu\u1ea5t tr\xean trang qu\u1ea3n l\xfd l\u1eddi nh\u1eafc. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?",
                            live_streaming_host_dialog_delete_remidner_plural_set: "Kh\xf4ng th\u1ec3 kh\xf4i ph\u1ee5c {{num}} l\u1eddi nh\u1eafc n\xe0y sau khi \u0111\xe3 x\xf3a. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?",
                            live_streaming_host_dialog_delete_reminder_double_confirm: 'X\xe1c nh\u1eadn xo\xe1 "Nh\u1eafc t\xf4i"?',
                            live_streaming_host_dialog_delete_reminder_singular_set: "Kh\xf4ng th\u1ec3 kh\u1ecfi ph\u1ee5c l\u1eddi nh\u1eafc n\xe0y sau khi \u0111\xe3 x\xf3a. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng?",
                            live_streaming_host_dialog_discard_unsaved_change: "H\u1ee7y c\xe1c thay \u0111\u1ed5i ch\u01b0a l\u01b0u?",
                            live_streaming_host_dialog_update_remidner_plural_set: "C\xe1c thay \u0111\u1ed5i tr\xean {{num}} l\u1eddi nh\u1eafc n\xe0y s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ed3ng b\u1ed9 tr\xean l\u1ecbch c\u1ee7a nh\u1eefng ng\u01b0\u1eddi \u0111\xe3 \u0111\u0103ng k\xfd tr\u01b0\u1edbc \u0111\xf3. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n l\u01b0u c\xe1c thay \u0111\u1ed5i kh\xf4ng?",
                            live_streaming_host_dialog_update_reminder_double_confirm: 'X\xe1c nh\u1eadn c\u1eadp nh\u1eadt "Nh\u1eafc t\xf4i"?',
                            live_streaming_host_dialog_update_reminder_singular_set: "C\xe1c thay \u0111\u1ed5i tr\xean l\u1eddi nh\u1eafc n\xe0y s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ed3ng b\u1ed9 tr\xean l\u1ecbch c\u1ee7a nh\u1eefng ng\u01b0\u1eddi \u0111\xe3 \u0111\u0103ng k\xfd tr\u01b0\u1edbc \u0111\xf3. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n l\u01b0u c\xe1c thay \u0111\u1ed5i kh\xf4ng?",
                            live_streaming_host_edit: "S\u1eeda \u0111\u1ed5i",
                            live_streaming_host_edit_reminder_page_title: "Ch\u1ec9nh s\u1eeda nh\u1eafc t\xf4i",
                            live_streaming_host_end_live: "K\u1ebft th\xfac Livestream",
                            live_streaming_host_end_page_see_more: "Xem th\xeam",
                            live_streaming_host_endpage_cannot_show_replay_d: "Ti\u1ebfc qu\xe1, b\u1ea1n kh\xf4ng th\u1ec3 xem video n\xe0y tr\xean trang ch\u1ee7 Shop",
                            live_streaming_host_endpage_cannot_show_replay_w: "R\u1ea5t ti\u1ebfc, b\u1ea1n kh\xf4ng th\u1ec3 xem l\u1ea1i bu\u1ed5i live n\xe0y tr\xean trang ch\u1ee7 c\u1ee7a Shop",
                            live_streaming_host_endpage_duration_link: "T\xecm hi\u1ec3u ngay!",
                            live_streaming_host_endpage_duration_text: "N\xean k\xe9o d\xe0i th\u1eddi l\u01b0\u1ee3ng Livestream \u0111\u1ec3 thu h\xfat nhi\u1ec1u Ng\u01b0\u1eddi xem h\u01a1n v\xe0 gia t\u0103ng \u0111\u01a1n h\xe0ng hi\u1ec7u qu\u1ea3.",
                            live_streaming_host_endpage_guidetype_suggestion: "\u0110\u1ec1 xu\u1ea5t cho Livestream c\u1ee7a b\u1ea1n",
                            live_streaming_host_endpage_guidetype_violation: "Vi ph\u1ea1m Live Stream",
                            live_streaming_host_endpage_insights_button: "Xem ngay!",
                            live_streaming_host_endpage_insights_text: "D\u1eef li\u1ec7u \u0111\xe3 c\u1eadp nh\u1eadt! B\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra hi\u1ec7u qu\u1ea3 livestream ngay khi livestream v\u1eeba k\u1ebft th\xfac.",
                            live_streaming_host_endpage_reminder_link: "Set Reminder",
                            live_streaming_host_endpage_reminder_text: "Buyers are looking forward to your next stream and set a reminder now.",
                            live_streaming_host_endpage_rules_link: "Chi ti\u1ebft",
                            live_streaming_host_endpage_show_replay: "Xem ph\u1ea7n Xem l\u1ea1i tr\xean trang ch\u1ee7 c\u1ee7a Shop (th\u1eddi gian t\u1ea3i trang c\xf3 th\u1ec3 l\xe0 v\xe0i ph\xfat)",
                            live_streaming_host_incentivemvp_btn_claim: "Claim",
                            live_streaming_host_incentivemvp_btn_claimed: "Claimed",
                            live_streaming_host_incentivemvp_bubble1: "Go>",
                            live_streaming_host_incentivemvp_bubble_receive_traffic: "Start streaming now can get boosting! >>",
                            live_streaming_host_incentivemvp_bubble_remind: "Streaming more\xa0[[{{need_stream_time}}\xa0hours]], get [[{{views}} boosting.]]",
                            live_streaming_host_incentivemvp_claim_expired: "Reward claim time expired",
                            live_streaming_host_incentivemvp_date: "Date:",
                            live_streaming_host_incentivemvp_entrance: "Reward",
                            live_streaming_host_incentivemvp_errorpage_btn1: "Retry",
                            live_streaming_host_incentivemvp_errorpage_btn2: "Back",
                            live_streaming_host_incentivemvp_errorpage_p2_content: "The activity has ended, thank you for your participation. Live Boost will be released automatically in your next live streaming after you claimed traffic within 7 days.",
                            live_streaming_host_incentivemvp_errorpage_p2_title: "Activity ended",
                            live_streaming_host_incentivemvp_errorpage_p3_content: "This activity is currently only open to invited streamers, thank you for the attention to the activity.",
                            live_streaming_host_incentivemvp_errorpage_p3_title: "No activity access",
                            live_streaming_host_incentivemvp_errorpage_text1: "Oops! Something went wrong! Please press the retry button to reload the page.",
                            live_streaming_host_incentivemvp_errorpage_text2: "We will gradually open this campaign to more streamers, please stay tuned.",
                            live_streaming_host_incentivemvp_errorpage_title: "Error",
                            live_streaming_host_incentivemvp_highlight: "REWARD",
                            live_streaming_host_incentivemvp_instruction_boost_title: "Instruction of Live Boost",
                            live_streaming_host_incentivemvp_instruction_coins_title: "Instruction of Coins",
                            live_streaming_host_incentivemvp_instructions_boost1: "Live Boost will be released automatically in [[your next live streaming after you claimed traffic]] within 7 days.",
                            live_streaming_host_incentivemvp_instructions_boost2: "To improve the performance of the Live boost, we highly recommend you to keep each of the streams [[lasting longer than 3 hours]], and upload [[high quality cover images]] at the same time.",
                            live_streaming_host_incentivemvp_instructions_boost3: "You will be notified when:",
                            live_streaming_host_incentivemvp_instructions_boost4: "New viewers enter your livestream via Live Boost reward.",
                            live_streaming_host_incentivemvp_instructions_boost5: "The stream with Live Boost just ended, you will get Push Notification & Action Required.",
                            live_streaming_host_incentivemvp_instructions_coin1: "Rewarded coins can be found in the following way:",
                            live_streaming_host_incentivemvp_instructions_coin2: "Find \u2018Coins Reward\u2019.",
                            live_streaming_host_incentivemvp_instructions_coin3: "Check the coins balance here.",
                            live_streaming_host_incentivemvp_lp_btn: "Go Live Now",
                            live_streaming_host_incentivemvp_lp_rules_sheet01: "Weekly Tasks",
                            live_streaming_host_incentivemvp_lp_rules_sheet02: "Rewards",
                            live_streaming_host_incentivemvp_lp_rules_sheet03: "Live Duration / hours",
                            live_streaming_host_incentivemvp_lp_rules_sheet04: "Coins",
                            live_streaming_host_incentivemvp_lp_rules_sheet05: "Live Boost",
                            live_streaming_host_incentivemvp_lp_toptitle: "Stream More Earn More",
                            live_streaming_host_incentivemvp_panel_myrewards: "My Rewards",
                            live_streaming_host_incentivemvp_panel_subtitle1: "Earn up to",
                            live_streaming_host_incentivemvp_panel_subtitle2: "coins",
                            live_streaming_host_incentivemvp_panel_subtitle3: "and",
                            live_streaming_host_incentivemvp_panel_subtitle4: "live boost",
                            live_streaming_host_incentivemvp_panel_taskname: "Stream for {{taskduration}} hours",
                            live_streaming_host_incentivemvp_panel_taskreward: "{{taskduration}} hours",
                            live_streaming_host_incentivemvp_panel_tasks: "Streaming Tasks",
                            live_streaming_host_incentivemvp_reward_boost: "Live Boost",
                            live_streaming_host_incentivemvp_reward_coins: "Coins",
                            live_streaming_host_incentivemvp_room_bubble1: "Get up to {{views}} Live Boosting now!",
                            live_streaming_host_incentivemvp_room_bubble2: "Claim your {{reward boost}} live boost now!",
                            live_streaming_host_incentivemvp_rules: "Rules",
                            live_streaming_host_incentivemvp_rules_text1: "How to get rewards?",
                            live_streaming_host_incentivemvp_rules_text10: "Streamers are required to display and elaborate the details of items in livestream.",
                            live_streaming_host_incentivemvp_rules_text11: "The livestream should be compliant with Shopee Live content management rules, which includes but not limited to:",
                            live_streaming_host_incentivemvp_rules_text12: "livestreams with no-item-livestream/black screen/pre-recorded video/fixed picture cannot be reckoned as valid.",
                            live_streaming_host_incentivemvp_rules_text13: "If the livestream is judged as a violation and shut down, Shopee Live has the right to cancel the rewards.",
                            live_streaming_host_incentivemvp_rules_text14: "Shopee Live reserves the right to final explanation for this campaign.",
                            live_streaming_host_incentivemvp_rules_text2: "Finish weekly livestream tasks to get rewards.",
                            live_streaming_host_incentivemvp_rules_text3: "Maximum [[7 hours]] can be reckoned as valid streaming duration per day.",
                            live_streaming_host_incentivemvp_rules_text4: "The campaign duration is {{date1}}. All accumulated livestream duration as well as rewards will be cleared up at {{date2}}, please make sure to claim in time.",
                            live_streaming_host_incentivemvp_rules_text5: "Tasks and rewards:",
                            live_streaming_host_incentivemvp_rules_text6: "How to attend the campaign?",
                            live_streaming_host_incentivemvp_rules_text7: "The campaign will be gradually opened to qualified streamers.",
                            live_streaming_host_incentivemvp_rules_text8: "Qualification requirements",
                            live_streaming_host_incentivemvp_rules_text9: "Only [[e-commercial livestream]] with [[>= 10]] items listed in stream can be reckoned as valid.",
                            live_streaming_host_incentivemvp_task_fail: "Fail to claim, please try again.",
                            live_streaming_host_incentivemvp_task_success: "Claimed {{taskreward}} successfully!",
                            live_streaming_host_incentivemvp_task_success_remind: "Live Boost will be credited in [[your next live streaming]] within 7 days",
                            live_streaming_host_incentivemvp_upgrade_version: "Please update the latest App version to 2.94 from App Store",
                            live_streaming_host_insights_empty_page: "Kh\xf4ng c\xf3 Livestream",
                            live_streaming_host_insights_entry_point: "Th\xf4ng tin chi ti\u1ebft",
                            live_streaming_host_insights_stream_list: "Danh s\xe1ch Livestream",
                            live_streaming_host_insights_time_filter_all_months: "T\u1ea5t c\u1ea3 c\xe1c Th\xe1ng",
                            live_streaming_host_insights_time_filter_apply: "\xc1p d\u1ee5ng",
                            live_streaming_host_insights_time_filter_reset: "\u0110\u1eb7t l\u1ea1i",
                            live_streaming_host_manage_replays: "Qu\u1ea3n L\xfd Ph\u1ea7n Xem L\u1ea1i",
                            live_streaming_host_noreplay: "Kh\xf4ng c\xf3 video \u0111\u1ec3 xem l\u1ea1i",
                            live_streaming_host_not_added_product_yet: "B\u1ea1n ch\u01b0a th\xeam s\u1ea3n ph\u1ea9m n\xe0o,",
                            live_streaming_host_noted: "L\u01b0u \xfd",
                            live_streaming_host_popup_auto_close: "T\u1ef1 \u0111\u1ed9ng \u0111\xf3ng l\u1ea1i trong v\xf2ng {{countdown}}s",
                            live_streaming_host_product_group_app_dialog_btn_reload: "T\u1ea3i l\u1ea1i",
                            live_streaming_host_product_group_app_dialog_btn_revert_sp: "\u0110\u1ebfn trang ho\xe0n gi\xe1",
                            live_streaming_host_product_group_app_dialog_description_exceed: "T\u1ed5ng s\u1ed1 s\u1ea3n ph\u1ea9m l\xe0 {{products_count}}, v\u01b0\u1ee3t qu\xe1 gi\u1edbi h\u1ea1n {{products_max_count}}.",
                            live_streaming_host_product_group_app_dialog_description_nogroup: "Kh\xf4ng c\xf3 nh\xf3m n\xe0o \u0111\u01b0\u1ee3c ch\u1ecdn. X\xe1c nh\u1eadn \u0111\u1ec3 \u0111\u0103ng k\xfd",
                            live_streaming_host_product_group_app_dialog_description_revert_sp: "Hi\u1ec7n c\xf3 c\xe1c s\u1ea3n ph\u1ea9m v\u1edbi gi\xe1 tr\u1ef1c tuy\u1ebfn trong gi\u1ecf h\xe0ng. Vui l\xf2ng ho\xe0n nguy\xean gi\xe1 tr\u1ef1c tuy\u1ebfn tr\u01b0\u1edbc.",
                            live_streaming_host_product_group_app_dialog_description_update1: "T\u1ea3i l\u1ea1i danh s\xe1ch s\u1ea3n ph\u1ea9m m\u1edbi nh\u1ea5t",
                            live_streaming_host_product_group_app_dialog_description_update2: "Danh s\xe1ch nh\xf3m s\u1ea3n ph\u1ea9m \u0111\xe3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt. Vui l\xf2ng t\u1ea3i l\u1ea1i danh s\xe1ch m\u1edbi nh\u1ea5t",
                            live_streaming_host_product_group_app_dialog_title_double_confirm: "X\xe1c nh\u1eadn 2 l\u1ea7n",
                            live_streaming_host_product_group_app_dialog_title_fail: "Th\xeam v\xe0o th\u1ea5t b\u1ea1i",
                            live_streaming_host_product_group_app_dialog_title_updated: "Danh s\xe1ch s\u1ea3n ph\u1ea9m \u0111\xe3 c\u1eadp nh\u1eadt",
                            live_streaming_host_product_group_app_entry: "\u0110\xe3 t\u1ea3i",
                            live_streaming_host_product_group_app_group_list_product_count: "{{products_count}} s\u1ea3n ph\u1ea9m",
                            live_streaming_host_product_group_app_group_list_select_all: "Ch\u1ecdn t\u1ea5t c\u1ea3",
                            live_streaming_host_product_group_app_top_bar: "Sau khi x\xe1c nh\u1eadn th\xeam l\u1ef1a ch\u1ecdn nh\xf3m s\u1ea3n ph\u1ea9m, c\xe1c s\u1ea3n ph\u1ea9m \u0111\xe3 th\xeam tr\u01b0\u1edbc \u0111\xf3 trong t\xfai h\xe0ng s\u1ebd \u0111\u01b0\u1ee3c thay th\u1ebf.",
                            live_streaming_host_product_selection_improvements_web_exceed: "Ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn t\u1ed1i \u0111a {{selectedProductsLimit}} s\u1ea3n ph\u1ea9m, vui l\xf2ng x\xf3a m\u1ed9t s\u1ed1 s\u1ea3n ph\u1ea9m.",
                            live_streaming_host_product_selection_improvements_web_no_results: "Kh\xf4ng t\xecm th\u1ea5y k\u1ebft qu\u1ea3.",
                            live_streaming_host_product_selection_improvements_web_recently: "G\u1ea7n \u0111\xe2y",
                            live_streaming_host_product_selection_improvements_web_recently_empty: "B\u1ea1n ch\u01b0a th\xeam s\u1ea3n ph\u1ea9m n\xe0o v\xe0o Livestream cu\u1ed1i c\xf9ng.",
                            live_streaming_host_product_selection_improvements_web_search_live_campaign_unsupported: "R\u1ea5t ti\u1ebfc, kh\xf4ng th\u1ec3 t\xecm ki\u1ebfm trong livestream",
                            live_streaming_host_product_selection_improvements_web_search_products: "T\xecm ki\u1ebfm s\u1ea3n ph\u1ea9m",
                            live_streaming_host_product_selection_improvements_web_search_unsupported: "R\u1ea5t ti\u1ebfc, t\xecm ki\u1ebfm g\u1ea7n \u0111\xe2y kh\xf4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 s\u1eed d\u1ee5ng.",
                            live_streaming_host_product_selection_improvements_web_search_uploaded_unsupported: "R\u1ea5t ti\u1ebfc, t\xecm ki\u1ebfm trong danh s\xe1ch t\u1ea3i l\xean kh\xf4ng kh\u1ea3 d\u1ee5ng.",
                            live_streaming_host_product_selection_improvements_web_select_all: "Ch\u1ecdn t\u1ea5t c\u1ea3",
                            live_streaming_host_related_product_btn_add: "+ Th\xeam",
                            live_streaming_host_related_product_list: "Danh s\xe1ch s\u1ea3n ph\u1ea9m li\xean quan",
                            live_streaming_host_related_products_add_button_title: "Th\xeam",
                            live_streaming_host_remidner_reminder_record_list_tab_empty: "Kh\xf4ng c\xf3 b\u1ea3n ghi l\u1eddi nh\u1eafc.",
                            live_streaming_host_remidner_reminder_record_list_tab_name: "Ghi l\u1eddi nh\u1eafc",
                            live_streaming_host_remidner_reminder_record_list_tab_tip: "B\u1ea3n ghi l\u1eddi nh\u1eafc c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong 90 ng\xe0y k\u1ec3 t\u1eeb ng\xe0y b\u1eaft \u0111\u1ea7u th\u1eddi gian nh\u1eafc nh\u1edf.",
                            live_streaming_host_remidner_upcoming_list_tab_empty: "Kh\xf4ng c\xf3 l\u1eddi nh\u1eafc s\u1eafp di\u1ec5n ra.",
                            live_streaming_host_remidner_upcoming_list_tab_name: "S\u1eafp di\u1ec5n ra",
                            live_streaming_host_reminder_go_live: "Tr\u1ef1c ti\u1ebfp",
                            live_streaming_host_reminder_info_cover: "\u1ea2nh b\xeca",
                            live_streaming_host_reminder_info_edit_cover: "Ch\u1ec9nh s\u1eeda \u1ea3nh b\xeca",
                            live_streaming_host_reminder_info_enter_title: "Nh\u1eadp ti\xeau \u0111\u1ec1",
                            live_streaming_host_reminder_info_set_startingtime: "C\xe0i \u0111\u1eb7t th\u1eddi gian",
                            live_streaming_host_reminder_info_set_startingtime_user_guide: "Th\u1eddi gian b\u1eaft \u0111\u1ea7u sau th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i v\xe0 kh\xf4ng qu\xe1 60 ng\xe0y.",
                            live_streaming_host_reminder_info_startingtime: "Th\u1eddi gian b\u1eaft \u0111\u1ea7u",
                            live_streaming_host_reminder_info_title: "Ti\xeau \u0111\u1ec1",
                            live_streaming_host_reminder_management: "Qu\u1ea3n l\xfd l\u1eddi nh\u1eafc",
                            live_streaming_host_reminder_management_subtitle1: "\u0110\u1eb7t l\u1ecbch ph\xe1t livestream: {{data_time}}",
                            live_streaming_host_reminder_management_subtitle2: "Livestream \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1eb7t l\u1ecbch s\u1ebd b\u1eaft \u0111\u1ea7u sau {{count}}.",
                            live_streaming_host_replay_remove_doublecheck: "Vui l\xf2ng x\xe1c nh\u1eadn b\u1ea1n mu\u1ed1n x\xf3a",
                            live_streaming_host_return: "Quay l\u1ea1i",
                            live_streaming_host_second_device_noted: "L\u01b0u \xfd",
                            live_streaming_host_share_guide_button: "Chia s\u1ebb",
                            live_streaming_host_share_guide_description: "T\u1ea1o th\xe0nh c\xf4ng. H\xe3y chia s\u1ebb k\u1ebf ho\u1ea1ch Livestream c\u1ee7a b\u1ea1n \u0111\u1ec3 t\u0103ng th\xeam l\u01b0\u1ee3t xem!",
                            live_streaming_host_shoppage_replaylist: "Xem L\u1ea1i tr\xean Trang ch\u1ee7 Shop",
                            live_streaming_host_smart_price_already_set: "Kh\xf4ng th\u1ec3 thi\u1ebft l\u1eadp gi\xe1 v\xec ph\xe2n lo\u1ea1i h\xe0ng n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp Gi\xe1 Ch\u1ec9 C\xf3 Tr\xean Live.",
                            live_streaming_host_smart_price_bonus_view: "L\u01b0\u1ee3t xem th\u01b0\u1edfng",
                            live_streaming_host_smart_price_done: "Ho\xe0n T\u1ea5t",
                            live_streaming_host_smart_price_edit_toast: "Gi\xe1 Ch\u1ec9 C\xf3 Tr\xean Live kh\xf4ng th\u1ec3 ch\u1ec9nh s\u1eeda. B\u1ea1n c\xf3 th\u1ec3 l\u1ef1a ch\u1ecdn quay v\u1ec1 gi\xe1 ban \u0111\u1ea7u \u0111\u1ec3 k\u1ebft th\xfac",
                            live_streaming_host_smart_price_get_traffic: "Nh\u1eadn th\xeam l\u01b0\u1ee3t xem khi thi\u1ebft l\u1eadp khuy\u1ebfn m\xe3i.",
                            live_streaming_host_smart_price_headline: "Thi\u1ebft l\u1eadp Gi\xe1 Ch\u1ec9 C\xf3 Tr\xean Live \u0111\u1ec3 nh\u1eadn \u0111\u1ebfn {rcmd_bonus} l\u01b0\u1ee3t xem!",
                            live_streaming_host_smart_price_please_confirm: "Vui l\xf2ng X\xe1c nh\u1eadn!",
                            live_streaming_host_smart_price_reserved_stock_restriction_tips: "Vui l\xf2ng \u0111\u1ea3m b\u1ea3o T\u1ed3n kho d\u1ef1 tr\u1eef c\u1ee7a b\u1ea1n >=10 v\xe0 <= t\u1ed5ng t\u1ed3n kho hi\u1ec7n t\u1ea1i.",
                            live_streaming_host_smart_price_set_more: "Thi\u1ebft l\u1eadp th\xeam",
                            live_streaming_host_smart_price_skip_it: "B\u1ecf qua",
                            live_streaming_host_smart_price_sorry: "R\u1ea5t ti\u1ebfc!",
                            live_streaming_host_smart_price_timer_double_confirm: "Gi\xe1 Ch\u1ec9 C\xf3 Tr\xean Live ch\u1ec9 hi\u1ec3n th\u1ecb d\u01b0\u1edbi 1 ti\u1ebfng c\xf3 th\u1ec3 gi\u1ea3m l\u01b0\u1ee3t xem m\xe0 b\u1ea1n c\xf3 th\u1ec3 nh\u1eadn th\xeam. B\u1ea1n c\xf3 mu\u1ed1n x\xe1c nh\u1eadn ti\u1ebfp t\u1ee5c?",
                            live_streaming_host_smart_price_tip: "\u0110i\u1ec1u ch\u1ec9nh Gi\xe1 Ch\u1ec9 C\xf3 Tr\xean Live v\xe0 T\u1ed3n kho d\u1ef1 tr\u1eef c\xf3 th\u1ec3 \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn l\u01b0\u1ee3t xem th\u01b0\u1edfng.",
                            live_streaming_host_smart_price_tip_2: "H\u1ec7 th\u1ed1ng \u0111\xe3 \u0111i\u1ec1u ch\u1ec9nh l\u01b0\u1ee3t xem l\xean t\u1eeb {rcmd_bonus} l\xean \u0111\u1ebfn {host_bonus} d\u1ef1a tr\xean Gi\xe1 Ch\u1ec9 C\xf3 Tr\xean Live m\u1edbi c\u1ee7a b\u1ea1n.",
                            live_streaming_host_smart_price_try_later: "Th\u1eed l\u1ea1i sau",
                            live_streaming_host_smart_price_variation: "Ph\xe2n lo\u1ea1i:",
                            live_streaming_host_streamer_education: "B\xed Quy\u1ebft Shopee Live",
                            live_streaming_host_streamer_education_cannot_view: "Hi\u1ec7n t\u1ea1i b\u1ea1n kh\xf4ng ph\u1ea3i l\xe0 m\u1ed9t ng\u01b0\u1eddi ph\xe1t s\xf3ng tr\u1ef1c ti\u1ebfp v\xe0 kh\xf4ng th\u1ec3 th\u1ea5y Trung T\xe2m H\u1ed7 Tr\u1ee3 Ng\u01b0\u1eddi B\xe1n ph\xe1t tr\u1ef1c ti\u1ebfp.",
                            live_streaming_host_streamer_education_my: "Shopee Live Hub",
                            live_streaming_host_streamer_education_no_information: "Ch\u01b0a c\xf3 th\xf4ng tin m\u1edbi, ti\u1ebfp t\u1ee5c theo d\xf5i sau nh\xe9.",
                            live_streaming_host_streamer_education_ph: "Shopee Live Hub",
                            live_streaming_host_toast_reminder_create_success: "T\u1ea1o th\xe0nh c\xf4ng. B\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra l\u1eddi nh\u1eafc \u1edf trong trang shop c\u1ee7a b\u1ea1n.",
                            live_streaming_host_toast_save_reminder_error1: "Y\xeau c\u1ea7u kh\xf4ng th\xe0nh c\xf4ng. L\u1eddi nh\u1eafc n\xe0y \u0111\xe3 b\u1ecb x\xf3a ho\u1eb7c h\u1ebft h\u1ea1n.",
                            live_streaming_host_toast_save_reminder_error2: "Y\xeau c\u1ea7u kh\xf4ng th\xe0nh c\xf4ng. Kh\xf4ng c\xf3 quy\u1ec1n c\xe0i \u0111\u1eb7t c\xe1c ch\u1ee7 \u0111\u1ec1 n\u1ed5i b\u1eadt.",
                            live_streaming_host_toast_startingtime_error1: "Th\u1eddi gian b\u1eaft \u0111\u1ea7u ph\u1ea3i mu\u1ed9n h\u01a1n th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i.",
                            live_streaming_host_toast_startingtime_error2: "Th\u1eddi gian b\u1eaft \u0111\u1ea7u ph\u1ea3i s\u1edbm h\u01a1n ho\u1eb7c mu\u1ed9n h\u01a1n \xedt nh\u1ea5t 30 ph\xfat so v\u1edbi l\u1eddi nh\u1eafc hi\u1ec7n c\xf3.",
                            live_streaming_host_toast_startingtime_error3: "Th\u1eddi gian b\u1eaft \u0111\u1ea7u kh\xf4ng qu\xe1 60 ng\xe0y k\u1ec3 t\u1eeb th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i.",
                            live_streaming_host_toast_startingtime_error4: "T\u1ed5ng s\u1ed1 l\u1eddi nh\u1eafc s\u1eafp di\u1ec5n ra kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 200.",
                            live_streaming_host_toast_update_reminder_error1: "L\u01b0u kh\xf4ng th\xe0nh c\xf4ng. L\u1eddi nh\u1eafc n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1ec1 xu\u1ea5t cho trang qu\u1ea3n l\xfd l\u1eddi nh\u1eafc.",
                            live_streaming_host_update_app_cancel: "H\u1ee7y",
                            live_streaming_host_update_app_continue: "Ti\u1ebfp t\u1ee5c",
                            live_streaming_host_update_app_notice: "Th\xf4ng b\xe1o",
                            live_streaming_host_update_app_text: 'Phi\xean b\u1ea3n \u1ee9ng d\u1ee5ng Shopee b\u1ea1n \u0111ang s\u1eed d\u1ee5ng ch\u01b0a \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt. H\xe3y c\u1eadp nh\u1eadt phi\xean b\u1ea3n \u1ee9ng d\u1ee5ng Shopee m\u1edbi nh\u1ea5t \u0111\u1ec3 kh\xf4ng b\u1ecb gi\xe1n \u0111o\u1ea1n khi livestream ho\u1eb7c nh\u1ea5n "Ti\u1ebfp t\u1ee5c" \u0111\u1ec3 s\u1eed d\u1ee5ng phi\xean b\u1ea3n \u1ee9ng d\u1ee5ng hi\u1ec7n t\u1ea1i.',
                            live_streaming_host_update_app_update_app: "C\u1eadp nh\u1eadt",
                            live_streaming_host_upload_products_uploaded: "\u0110\xe3 t\u1ea3i",
                            live_streaming_host_voucher_remove: "X\xf3a",
                            live_streaming_import_url__input_limit_quantity: "Ch\u1ec9 \u0111\u01b0\u1ee3c \u0111i\u1ec1n t\u1ed1i \u0111a 100 li\xean k\u1ebft cho 1 l\u1ea7n nh\u1eadp",
                            live_streaming_import_url_clear: "X\xf3a t\u1ea5t c\u1ea3",
                            live_streaming_import_url_default_input: "Ch\u1ec9 h\u1ed7 tr\u1ee3 nh\u1eadp li\xean k\u1ebft c\xe1c s\u1ea3n ph\u1ea9m tr\xean Shopee. M\u1ed7i li\xean k\u1ebft 1 d\xf2ng, t\u1ed1i \u0111a 100 li\xean k\u1ebft.\nV\xed d\u1ee5: https://shopee.vn/product/23 \nhttps://shopee.vn/product/23/?utm_campaign=lk23h2",
                            live_streaming_import_url_default_input_include_group_link: "Only URLs for Shopee products are supported. Please input 1 product group link or multiple single product link in different lines.\neg:\nhttps://shopee.co.id/product/23\nhttps://shopee.co.id/product/23/?utm_campaign=lk23h2",
                            live_streaming_import_url_draft: "B\u1ea1n c\xf3 mu\u1ed1n l\u01b0u b\u1ea3n nh\xe1p? B\u1ea3n nh\xe1p s\u1ebd t\u1ef1 \u0111\u1ed9ng x\xf3a sau 24H",
                            live_streaming_import_url_draft_no: "Kh\xf4ng",
                            live_streaming_import_url_draft_yes: "C\xf3",
                            live_streaming_import_url_expired: "Ch\u01b0\u01a1ng tr\xecnh \u0111\xe3 k\u1ebft th\xfac",
                            live_streaming_import_url_guide: "Th\xeam s\u1ea3n ph\u1ea9m b\u1eb1ng c\xe1ch nh\u1eadp li\xean k\u1ebft s\u1ea3n ph\u1ea9m t\u1ea1i \u0111\xe2y",
                            live_streaming_import_url_import_button: "Nh\u1eadp",
                            live_streaming_import_url_import_inputbox_fail_expired_link: "H\xe3y ki\u1ec3m tra l\u1ea1i c\xe1c li\xean k\u1ebft \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_import_url_import_inputbox_fail_interface_exception: "Vui l\xf2ng nh\u1eadp l\u1ea1i",
                            live_streaming_import_url_import_inputbox_fail_multi: "H\xe3y ki\u1ec3m tra l\u1ea1i c\xe1c li\xean k\u1ebft kh\xf4ng ch\u1ee9a s\u1ea3n ph\u1ea9m v\xe0 \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_import_url_import_inputbox_fail_multi_expired_product_exception: "Please check for expired link(s) and product exception link(s)",
                            live_streaming_import_url_import_inputbox_fail_multi_nonproduct_expired_product_exception: "Please check for non-product link(s), expired link(s) and product exception link(s)",
                            live_streaming_import_url_import_inputbox_fail_multi_nonproduct_product_exception: "Please check for non-product link(s) and product exception link(s)",
                            live_streaming_import_url_import_inputbox_fail_nonproduct: "H\xe3y ki\u1ec3m tra l\u1ea1i c\xe1c li\xean k\u1ebft kh\xf4ng ch\u1ee9a s\u1ea3n ph\u1ea9m",
                            live_streaming_import_url_import_inputbox_fail_product_exception: "{{abnormal_product_count}} product(s) are failed to be imported, please copy to check",
                            live_streaming_import_url_import_inputbox_fail_product_exception_link: "Please check for product exception link(s)",
                            live_streaming_import_url_import_inputbox_fail_product_exception_link_copy: "Copy",
                            live_streaming_import_url_import_inputbox_fail_product_exception_link_copy_fail: "Copy failed",
                            live_streaming_import_url_import_inputbox_fail_product_exception_link_copy_success: "Copy successfully",
                            live_streaming_import_url_import_inputbox_success_certain_product: "Exist {{abnormal_product_count}} abnormal product(s), including {{abnormal_product_item_id}}",
                            live_streaming_import_url_import_list: "Nh\u1eadp danh s\xe1ch",
                            live_streaming_import_url_import_list_null: "Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m",
                            live_streaming_import_url_import_list_null_detail: "Danh s\xe1ch s\u1ebd hi\u1ec3n th\u1ecb th\xf4ng tin s\u1ea3n ph\u1ea9m b\u1ea1n \u0111\xe3 nh\u1eadp",
                            live_streaming_import_url_import_toast_allfail_exceed_limit: "V\u01b0\u1ee3t gi\u1edbi h\u1ea1n, h\xe3y th\xeam s\u1ea3n ph\u1ea9m tr\u01b0\u1edbc",
                            live_streaming_import_url_import_toast_allfail_expired_link: "Nh\u1eadp th\u1ea5t b\u1ea1i do c\xf3 li\xean k\u1ebft \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_import_url_import_toast_allfail_interface_exception: "Kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i, vui l\xf2ng nh\u1eadp l\u1ea1i",
                            live_streaming_import_url_import_toast_allfail_multi: "Nh\u1eadp th\u1ea5t b\u1ea1i do c\xf3 li\xean k\u1ebft kh\xf4ng ch\u1ee9a s\u1ea3n ph\u1ea9m v\xe0 \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_import_url_import_toast_allfail_multi_expired_product_exception: "Fail to import, for expired link(s) and product exception link(s)",
                            live_streaming_import_url_import_toast_allfail_multi_nonproduct_expired_product_exception: "Fail to import, for non-product link(s), expired link(s) and product exception link(s)",
                            live_streaming_import_url_import_toast_allfail_multi_nonproduct_product_exception: "Fail to import, for non-product link(s) and product exception link(s)",
                            live_streaming_import_url_import_toast_allfail_nonproduct: "Nh\u1eadp th\u1ea5t b\u1ea1i do c\xf3 li\xean k\u1ebft kh\xf4ng ch\u1ee9a s\u1ea3n ph\u1ea9m",
                            live_streaming_import_url_import_toast_allfail_product_exception: "Fail to import, for product exception",
                            live_streaming_import_url_import_toast_allfail_product_exception_link: "Fail to import, for product exception link(s)",
                            live_streaming_import_url_import_toast_allsuccess: "Nh\u1eadp th\xe0nh c\xf4ng",
                            live_streaming_import_url_import_toast_certain_fail_expired_link: "Nh\u1eadp th\xe0nh c\xf4ng {{success_quantity}} li\xean k\u1ebft, nh\u01b0ng c\xf3 {{fail_quantity}} li\xean k\u1ebft th\u1ea5t b\u1ea1i do (c\xe1c) li\xean k\u1ebft \u0111\xf3 \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_import_url_import_toast_certain_fail_multi: "Nh\u1eadp th\xe0nh c\xf4ng {{success_quantity}} li\xean k\u1ebft, nh\u01b0ng c\xf3 {{fail_quantity}} li\xean k\u1ebft th\u1ea5t b\u1ea1i do (c\xe1c) li\xean k\u1ebft \u0111\xf3 kh\xf4ng ch\u1ee9a s\u1ea3n ph\u1ea9m v\xe0 \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_import_url_import_toast_certain_fail_multi_expired_product_exception: "Import {{success_quantity}} link(s) successfully, but {{fail_quantity}} link(s) failed, for expired link(s) and product exception link(s)",
                            live_streaming_import_url_import_toast_certain_fail_multi_nonproduct_expired_product_exception: "Import {{success_quantity}} link(s) successfully, but {{fail_quantity}} link(s) failed, for non-product link(s), expired link(s) and product exception link(s)",
                            live_streaming_import_url_import_toast_certain_fail_multi_nonproduct_product_exception: "Import {{success_quantity}} link(s) successfully, but {{fail_quantity}} link(s) failed, for non-product link(s) and product exception link(s)",
                            live_streaming_import_url_import_toast_certain_fail_nonproduct: "Nh\u1eadp th\xe0nh c\xf4ng {{success_quantity}} li\xean k\u1ebft nh\u01b0ng {{fail_quantity}} li\xean k\u1ebft th\u1ea5t b\u1ea1i do (c\xe1c) li\xean k\u1ebft \u0111\xf3 kh\xf4ng ch\u1ee9a s\u1ea3n ph\u1ea9m",
                            live_streaming_import_url_import_toast_certain_fail_product_exception: "Import successfully, but {{abnormal_product_count}} product(s) failed, for product exception",
                            live_streaming_import_url_import_toast_certain_fail_product_exception_link: "Import {{success_quantity}} link(s) successfully, but {{fail_quantity}} link(s) failed, for product exception link(s)",
                            live_streaming_import_url_import_toast_fail_specification_exception: "Please input 1 product group link or multiple single product link in different lines",
                            live_streaming_import_url_import_toast_success_certain_product: "Import successfully, but {{abnormal_product_count}} product(s) failed, for product",
                            live_streaming_import_url_input_limit_length: "Qu\xe1 k\xed t\u1ef1",
                            live_streaming_import_url_mcn: "T\u1eeb {{mcn_name}}",
                            live_streaming_import_url_pagetitle: "Nh\u1eadp li\xean k\u1ebft s\u1ea3n ph\u1ea9m",
                            live_streaming_import_url_start_time: "T\u1eeb {{campaign_start_time}}",
                            live_streaming_import_url_subtitle: "Li\xean k\u1ebft s\u1ea3n ph\u1ea9m",
                            live_streaming_import_url_valid_time: "C\xf3 hi\u1ec7u l\u1ef1c \u0111\u1ebfn {{campaign_valid_time}}",
                            live_streaming_item_card_five_star_rating: "{{star_num}} \u0111\xe1nh gi\xe1 5 sao",
                            live_streaming_item_card_positive_rating_label: "{{buyer_num}}  ng\u01b0\u1eddi \u0111\xe3 \u0111\xe1nh gi\xe1 \u201c{{tag_name}}\u201d",
                            live_streaming_item_card_rank_in_best_selling: "Thu\u1ed9c top {{rank_name}} {{cluster_name}}",
                            live_streaming_item_card_sales: "\u0110\xe3 b\xe1n {{sold_num}}",
                            live_streaming_item_card_top_best_selling: "Top {{rank}} {{rank_name}} {{cluster_name}}",
                            live_streaming_item_card_wholesale: "B\xe1n s\u1ec9",
                            live_streaming_keywords_add_title: "Th\xeam",
                            live_streaming_keywords_bubble: "B\u1ea1n c\xf3 th\u1ec3 ch\u1eb7n c\xe1c t\u1eeb kh\xf3a c\u1ee5 th\u1ec3 ngay b\xe2y gi\u1edd!",
                            live_streaming_keywords_delete_all_toast: "B\u1ea1n mu\u1ed1n x\xf3a h\u1ebft t\u1eeb kh\xf3a?",
                            live_streaming_keywords_delete_button: "X\xf3a",
                            live_streaming_keywords_delete_failed: "L\u1ed7i! Vui l\xf2ng th\u1eed l\u1ea1i",
                            live_streaming_keywords_delete_toast: 'B\u1ea1n c\xf3 mu\u1ed1n x\xf3a t\u1eeb "{keyword}"?',
                            live_streaming_keywords_feature_toast: "B\xecnh lu\u1eadn ch\u1ee9a t\u1eeb b\u1ecb kh\xf3a s\u1ebd kh\xf4ng hi\u1ec7n tr\xean Live",
                            live_streaming_keywords_input_toast: "\u0110i\u1ec1n t\u1eeb b\u1ea1n mu\u1ed1n ch\u1eb7n",
                            live_streaming_keywords_manage_title: "Qu\u1ea3n l\xfd",
                            live_streaming_keywords_maxlimit_toast: "H\xe3y x\xf3a b\u1edbt t\u1eeb b\u1ecb kh\xf3a tr\u01b0\u1edbc nh\xe9.",
                            live_streaming_keywords_quit_title: "Tho\xe1t",
                            live_streaming_keywords_select_all_title: "Ch\u1ecdn t\u1ea5t c\u1ea3",
                            live_streaming_keywords_title: "\u0110\xe3 ch\u1eb7n",
                            live_streaming_landing_page_coming_soon_following_section: "Shop b\u1ea1n theo d\xf5i",
                            live_streaming_landing_page_coming_soon_following_section_seemore: "Xem th\xeam",
                            live_streaming_landing_page_coming_soon_pinned_section: "G\u1ee3i \xfd \u0111\u1eb7c bi\u1ec7t",
                            live_streaming_landing_page_explore: "Kh\xe1m ph\xe1",
                            live_streaming_landing_page_explore_guide: "Vu\u1ed1t sang tr\xe1i \u0111\u1ec3 xem nhi\u1ec1u Livestream kh\xe1c",
                            live_streaming_launch_timeslot: "K\xedch ho\u1ea1t",
                            live_streaming_leaderboard_empty_page: "Hi\u1ec7n t\u1ea1i kh\xf4ng c\xf3 nh\xe0 s\xe1ng t\u1ea1o n\xe0o trong b\u1ea3ng x\u1ebfp h\u1ea1ng, vui l\xf2ng th\u1eed l\u1ea1i sau.",
                            live_streaming_leaderboard_failed_to_load_page: "L\u1ed7i t\u1ea3i trang, nh\u1ea5n \u0111\u1ec3 th\u1eed l\u1ea1i.",
                            live_streaming_leaderboard_host_avatar_live_symbol: "Live",
                            live_streaming_leaderboard_host_avatar_onclick_not_support_redirect: "Kh\xf4ng th\u1ec3 thao t\xe1c do b\u1ea1n \u0111ang trong phi\xean livestream.",
                            live_streaming_leaderboard_host_category_campaign_vn: "Ch\u01b0\u01a1ng tr\xecnh",
                            live_streaming_leaderboard_host_category_electronic: "Electronic",
                            live_streaming_leaderboard_host_category_electronics_vn: "\u0110i\u1ec7n t\u1eed",
                            live_streaming_leaderboard_host_category_fashion: "Fashion",
                            live_streaming_leaderboard_host_category_fashion_vn: "Th\u1eddi trang",
                            live_streaming_leaderboard_host_category_fmcg: "FMCG",
                            live_streaming_leaderboard_host_category_fmcg_vn: "H\xe0ng ti\xeau d\xf9ng",
                            live_streaming_leaderboard_host_category_health_beauty_vn: "S\u1ee9c kho\u1ebb & S\u1eafc \u0111\u1eb9p",
                            live_streaming_leaderboard_host_category_kol_creator: "KOL/Creator",
                            live_streaming_leaderboard_host_category_kol_creator_vn: "Nh\xe0 s\xe1ng t\u1ea1o",
                            live_streaming_leaderboard_host_category_lifestyle: "Lifestyle+",
                            live_streaming_leaderboard_host_category_lifestyle_vn: "\u0110\u1eddi s\u1ed1ng",
                            live_streaming_leaderboard_host_category_overall_vn: "T\u1ed5ng quan",
                            live_streaming_leaderboard_host_category_rising_star: "Rising Star",
                            live_streaming_leaderboard_host_category_rising_star_vn: "Nh\xe0 s\xe1ng t\u1ea1o tri\u1ec3n v\u1ecdng",
                            live_streaming_leaderboard_host_panel_tips: "By {{time_stamp}}, the top 20 streamers in Shopee Live",
                            live_streaming_leaderboard_host_panel_title: "Top nh\xe0 s\xe1ng t\u1ea1o",
                            live_streaming_leaderboard_host_ranking_point: "{{ranking_points}} points",
                            live_streaming_leaderboard_host_ranking_point_gap: "{{points_to_rank_up}} more to rank up",
                            live_streaming_leaderboard_host_rule_entrance: "Rules>",
                            live_streaming_leaderboard_host_rule_title: "Gi\u1edbi thi\u1ec7u chung",
                            live_streaming_leaderboard_host_top_streamer_entrance: "Top nh\xe0 s\xe1ng t\u1ea1o",
                            live_streaming_leaderboard_panel_tip: "By {{time_stamp}}, top 20 best-selling streamers in Shopee Live",
                            live_streaming_leaderboard_panel_title: "Top selling streamers",
                            live_streaming_leaderboard_retry_button: "Th\u1eed l\u1ea1i",
                            live_streaming_leaderboard_revamp_camp_refresh_tips: "C\u1eadp nh\u1eadt m\u1ed7i [[5ph\xfat]]",
                            live_streaming_leaderboard_revamp_cat_beauty: "Beauty",
                            live_streaming_leaderboard_revamp_cat_overall: "Overall",
                            live_streaming_leaderboard_revamp_daily_refresh_tips: "BXH s\u1ebd c\u1eadp nh\u1eadt 10h s\xe1ng m\u1ed7i ng\xe0y.",
                            live_streaming_leaderboard_revamp_daily_tab: "1 ng\xe0y qua",
                            live_streaming_leaderboard_revamp_downgrade_tips: "Kh\xf4ng th\u1ec3 c\u1eadp nh\u1eadt do qu\xe1 t\u1ea3i l\u01b0\u1ee3t truy c\u1eadp",
                            live_streaming_leaderboard_revamp_weekly_refresh_tips: "BXH c\u1eadp nh\u1eadt 10h s\xe1ng m\u1ed7i ng\xe0y theo k\u1ebft qu\u1ea3 Livestream 7 ng\xe0y g\u1ea7n nh\u1ea5t.",
                            live_streaming_leaderboard_revamp_weekly_tab: "1 tu\u1ea7n qua",
                            live_streaming_leaderboard_viewer_avatar_live_symbol: "Live",
                            live_streaming_leaderboard_viewer_avatar_onclick_stream_end: "Phi\xean Livestream \u0111\xe3 k\u1ebft th\xfac",
                            live_streaming_leaderboard_viewer_category_campaign_vn: "Ch\u01b0\u01a1ng tr\xecnh",
                            live_streaming_leaderboard_viewer_category_electronic: "Electronic",
                            live_streaming_leaderboard_viewer_category_electronics_vn: "\u0110i\u1ec7n t\u1eed",
                            live_streaming_leaderboard_viewer_category_fashion: "Fashion",
                            live_streaming_leaderboard_viewer_category_fashion_vn: "Th\u1eddi trang",
                            live_streaming_leaderboard_viewer_category_fmcg: "FMCG",
                            live_streaming_leaderboard_viewer_category_fmcg_vn: "H\xe0ng ti\xeau d\xf9ng",
                            live_streaming_leaderboard_viewer_category_health_beauty_vn: "S\u1ee9c kho\u1ebb & S\u1eafc \u0111\u1eb9p",
                            live_streaming_leaderboard_viewer_category_kol_creator: "KOL/Creator",
                            live_streaming_leaderboard_viewer_category_kol_creator_vn: "Nh\xe0 s\xe1ng t\u1ea1o",
                            live_streaming_leaderboard_viewer_category_lifestyle: "Lifestyle+",
                            live_streaming_leaderboard_viewer_category_lifestyle_vn: "\u0110\u1eddi s\u1ed1ng",
                            live_streaming_leaderboard_viewer_category_overall_vn: "T\u1ed5ng quan",
                            live_streaming_leaderboard_viewer_category_rising_star: "Rising Star",
                            live_streaming_leaderboard_viewer_category_rising_star_vn: "Nh\xe0 s\xe1ng t\u1ea1o tri\u1ec3n v\u1ecdng",
                            live_streaming_leaderboard_viewer_panel_tips: "By {{time_stamp}}, the top 20 streamers in Shopee Live",
                            live_streaming_leaderboard_viewer_panel_title: "Top nh\xe0 s\xe1ng t\u1ea1o",
                            live_streaming_leaderboard_viewer_ranking_point: "{{ranking_points}} points",
                            live_streaming_leaderboard_viewer_ranking_point_gap: "{{points_to_rank_up}} more to rank up",
                            live_streaming_leaderboard_viewer_rule_entrance: "Rules>",
                            live_streaming_leaderboard_viewer_rule_title: "C\xe1c c\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p",
                            live_streaming_leaderboard_viewer_thumbnail_back: "Quay tr\u1edf l\u1ea1i",
                            live_streaming_leaderboard_viewer_thumbnail_back_onclick_stream_end: "Phi\xean Livestream \u0111\xe3 k\u1ebft th\xfac.",
                            live_streaming_live_campaign_noproduct: "Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m",
                            live_streaming_live_campaign_tab: "Live Campaign",
                            live_streaming_live_violation: "Nh\u1eefng vi ph\u1ea1m trong khi Live",
                            live_streaming_livegame_PC_end: "T\xfai Qu\xe0 t\u1eeb Shopee \u0111\xe3 k\u1ebft th\xfac.",
                            live_streaming_livegame_PC_start: "T\xfai Qu\xe0 t\u1eeb Shopee \u0111ang di\u1ec5n ra.",
                            live_streaming_livegame_PC_upcoming: "T\xfai Qu\xe0 t\u1eeb Shopee s\u1ebd b\u1eaft \u0111\u1ea7u trong {countdown} ph\xfat.",
                            live_streaming_livegame_luckyrain: "T\xfai Qu\xe0",
                            live_streaming_livegame_luckyrain_conflict_luckydraw: "Not available right now. Lucky Draw is in progress.",
                            live_streaming_livegame_luckyrain_conflict_luckyrain: "Not available right now. Lucky Rain is in progress.",
                            live_streaming_lp_coins_max_value: "L\xean \u0111\u1ebfn {{coins_max_value}}",
                            live_streaming_lp_tab_empty: "Nhi\u1ec1u video livestream kh\xe1c \u0111ang trong th\u1eddi gian chu\u1ea9n b\u1ecb.",
                            live_streaming_lp_tabname_all: "T\u1ea5t C\u1ea3",
                            live_streaming_lp_tabname_latest: "M\u1edbi Nh\u1ea5t",
                            live_streaming_lucky_draw_cancel_button: "H\u1ee7y b\u1ecf",
                            live_streaming_lucky_draw_coins_balance: "S\u1ed1 Xu kh\u1ea3 d\u1ee5ng",
                            live_streaming_lucky_draw_coins_biggest_prize: "C\u01a1 h\u1ed9i th\u1eafng Xu l\xean \u0111\u1ebfn {{biggestprize}}",
                            live_streaming_lucky_draw_coins_streamer_preview_hint: "Ch\u1ecdn m\u1ed9t r\u01b0\u01a1ng v\xe0ng \u0111\u1ec3 th\u1eafng Xu. Nhanh tay n\xe0o!",
                            live_streaming_lucky_draw_coins_streamer_record_round_title: "Xu (V\xf2ng {{number}})",
                            live_streaming_lucky_draw_confirm_button: "X\xe1c nh\u1eadn",
                            live_streaming_lucky_draw_covertag: "Quay",
                            live_streaming_lucky_draw_covertag_my: "Win $$",
                            live_streaming_lucky_draw_covertag_ph: "Win \u20b1\u20b1",
                            live_streaming_lucky_draw_covertag_sg: "Spin",
                            live_streaming_lucky_draw_feature_name: "V\xf2ng Quay",
                            live_streaming_lucky_draw_feature_name_my: "Spin2Win",
                            live_streaming_lucky_draw_feature_name_ph: "Lucky Roleta",
                            live_streaming_lucky_draw_feature_name_sg: "Lucky Wheel",
                            live_streaming_lucky_draw_host_nopermission: "Truy c\u1eadp b\u1ecb t\u1eeb ch\u1ed1i",
                            live_streaming_lucky_draw_host_record_biggest_winner_pending: "\u0110ang x\u1eed l\xfd",
                            live_streaming_lucky_draw_host_record_claimed: "\u0110\xe3 l\u1ea5y/ Ng\xe2n s\xe1ch",
                            live_streaming_lucky_draw_host_record_finalhint: "K\u1ebft qu\u1ea3 V\xf2ng Quay ghi nh\u1eadn t\u1ea1i \u0111\xe2y",
                            live_streaming_lucky_draw_host_record_finalhint_my: "Spin2Win record is finalized here",
                            live_streaming_lucky_draw_host_record_finalhint_ph: "Lucky Roleta record is finalized here",
                            live_streaming_lucky_draw_host_record_finalhint_sg: "K\u1ebft qu\u1ea3 V\xf2ng Quay ghi nh\u1eadn t\u1ea1i \u0111\xe2y",
                            live_streaming_lucky_draw_host_record_participated_players: "Ng\u01b0\u1eddi ch\u01a1i tham gia",
                            live_streaming_lucky_draw_host_record_remaining_hint: "Ng\xe2n s\xe1ch c\xf2n l\u1ea1i s\u1ebd \u0111\u01b0\u1ee3c ho\xe0n tr\u1ea3 v\u1ec1 t\xe0i kho\u1ea3n Xu c\u1ee7a b\u1ea1n.",
                            live_streaming_lucky_draw_host_record_round_title: "ShopeePay Bonus (Round {{RoundNumber}})",
                            live_streaming_lucky_draw_host_record_winnerlist_all: "Danh s\xe1ch ng\u01b0\u1eddi chi\u1ebfn th\u1eafng (t\u1ea5t c\u1ea3 ng\u01b0\u1eddi xem)",
                            live_streaming_lucky_draw_host_record_winnerlist_followers: "Danh s\xe1ch ng\u01b0\u1eddi chi\u1ebfn th\u1eafng (ch\u1ec9 ng\u01b0\u1eddi theo d\xf5i)",
                            live_streaming_lucky_draw_host_record_winnerlist_none: "Kh\xf4ng c\xf3",
                            live_streaming_lucky_draw_host_record_winnerlist_nowinner: "Ch\u01b0a c\xf3 ng\u01b0\u1eddi n\xe0o tham gia",
                            live_streaming_lucky_draw_host_record_winnerlist_pending: "\u0110ang x\u1eed l\xfd",
                            live_streaming_lucky_draw_host_record_winnerlist_showless: "Thu g\u1ecdn",
                            live_streaming_lucky_draw_host_record_winnerlist_showmore: "M\u1edf r\u1ed9ng",
                            live_streaming_lucky_draw_host_setting_biggest_prize_range_recommend: "Optional range: {biggestprizemin} - {biggestprizemax} Recommend {biggestprizerecommend}",
                            live_streaming_lucky_draw_host_setting_biggest_prize_title: "Gi\u1ea3i th\u01b0\u1edfng l\u1edbn nh\u1ea5t",
                            live_streaming_lucky_draw_host_setting_budget_range: "Kho\u1ea3ng ng\xe2n s\xe1ch: {budgetmin} - {budgetmax}",
                            live_streaming_lucky_draw_host_setting_budget_set_now_hint: "Thi\u1ebft l\u1eadp ngay",
                            live_streaming_lucky_draw_host_setting_budget_title: "Ng\xe2n s\xe1ch",
                            live_streaming_lucky_draw_host_setting_countdown: "S\u1ebd b\u1eaft \u0111\u1ea7u trong",
                            live_streaming_lucky_draw_host_setting_invalid_prizepool_errorhint: "Current setting requires\xa0{budgetrecommend} budget, please modify budget or number of winners or biggest prize.",
                            live_streaming_lucky_draw_host_setting_invalid_toasthint: "C\xe0i \u0111\u1eb7t kh\xf4ng h\u1ee3p l\u1ec7, vui l\xf2ng s\u1eeda l\u1ea1i",
                            live_streaming_lucky_draw_host_setting_keypad_done: "\u0110\xe3 ho\xe0n t\u1ea5t",
                            live_streaming_lucky_draw_host_setting_keypad_min: "ph\xfat",
                            live_streaming_lucky_draw_host_setting_no_of_winners_range_recommend: "Optional range: {winnersmin} - {winnersmax} Recommend {winnersrecommend}",
                            live_streaming_lucky_draw_host_setting_no_of_winners_title: "S\u1ed1 ng\u01b0\u1eddi chi\u1ebfn th\u1eafng",
                            live_streaming_lucky_draw_host_setting_participants: "Ng\u01b0\u1eddi ch\u01a1i m\u1ee5c ti\xeau",
                            live_streaming_lucky_draw_host_setting_participants_all: "T\u1ea5t c\u1ea3 ng\u01b0\u1eddi xem",
                            live_streaming_lucky_draw_host_setting_participants_followers: "Ng\u01b0\u1eddi theo d\xf5i",
                            live_streaming_lucky_draw_host_setting_preview_hint: "Pick one to win ShopeePay bonus. Fast finger.",
                            live_streaming_lucky_draw_host_setting_recommended_hint: "*Number of winners and biggest prize are recommended based on the budget.",
                            live_streaming_lucky_draw_host_setting_retry_button: "Th\u1eed l\u1ea1i",
                            live_streaming_lucky_draw_host_setting_retry_hint: "L\u1ed7i! Vui l\xf2ng th\u1eed l\u1ea1i",
                            live_streaming_lucky_draw_host_setting_start_button: "B\u1eaft \u0111\u1ea7u",
                            live_streaming_lucky_draw_host_shopeepay_bonus_credit_insufficient_errorhint: "S\u1ed1 d\u01b0 kh\xf4ng \u0111\u1ee7 \u0111\u1ec3 t\u1ea1o V\xf2ng Quay",
                            live_streaming_lucky_draw_host_shopeepay_bonus_credit_insufficient_errorhint_my: "Current credit is insufficient to initiate Spin2Win.",
                            live_streaming_lucky_draw_host_shopeepay_bonus_credit_insufficient_errorhint_ph: "Current credit is insufficient to initiate Lucky Roleta.",
                            live_streaming_lucky_draw_host_shopeepay_bonus_credit_insufficient_errorhint_sg: "S\u1ed1 d\u01b0 kh\xf4ng \u0111\u1ee7 \u0111\u1ec3 t\u1ea1o V\xf2ng Quay",
                            live_streaming_lucky_draw_host_shopeepay_bonus_credit_title: "ShopeePay bonus credit:",
                            live_streaming_lucky_draw_host_start_confirm_hint: "X\xe1c nh\u1eadn b\u1eaft \u0111\u1ea7u V\xf2ng Quay?",
                            live_streaming_lucky_draw_host_start_confirm_hint_my: "Confirm to start the Spin2Win?",
                            live_streaming_lucky_draw_host_start_confirm_hint_ph: "Confirm to start the Lucky Roleta?",
                            live_streaming_lucky_draw_host_start_confirm_hint_sg: "X\xe1c nh\u1eadn b\u1eaft \u0111\u1ea7u V\xf2ng Quay?",
                            live_streaming_lucky_draw_host_start_failed: "L\u1ed7i! Vui l\xf2ng th\u1eed l\u1ea1i",
                            live_streaming_lucky_draw_host_start_failed_my: "Failed to set Spin2Win, please try again.",
                            live_streaming_lucky_draw_host_start_failed_ph: "Failed to set Lucky Roleta, please try again.",
                            live_streaming_lucky_draw_host_start_failed_sg: "Failed to set Lucky Wheel, please try again.",
                            live_streaming_lucky_draw_host_start_new_confirm_button: "B\u1eaft \u0111\u1ea7u V\xf2ng Quay m\u1edbi",
                            live_streaming_lucky_draw_host_start_new_confirm_hint: "V\xf2ng Quay \u0111ang di\u1ec5n ra, b\u1ea1n mu\u1ed1n d\u1eebng \u0111\u1ec3 t\u1ea1o V\xf2ng Quay m\u1edbi?",
                            live_streaming_lucky_draw_host_start_new_confirm_hint_my: "You already have an ongoing Spin2Win, end that to start the new one?",
                            live_streaming_lucky_draw_host_start_new_confirm_hint_ph: "You already have an ongoing Lucky Roleta, end that to start the new one?",
                            live_streaming_lucky_draw_host_start_new_confirm_hint_sg: "You already have an ongoing Lucky Wheel, end that to start the new one?",
                            live_streaming_lucky_draw_host_start_noresponse: "Vui l\xf2ng \u0111\u1ee3i trong gi\xe2y l\xe1t!",
                            live_streaming_lucky_draw_shopee_coins: "V\xf2ng Quay",
                            live_streaming_lucky_draw_shopee_coins_top_up: "Top-up",
                            live_streaming_lucky_draw_shopee_coins_top_up_remind: "Vui l\xf2ng n\u1ea1p th\xeam Shopee Xu t\u1ea1i K\xeanh Ng\u01b0\u1eddi B\xe1n",
                            live_streaming_lucky_draw_shopeepay: "ShopeePay",
                            live_streaming_lucky_draw_shopeepay_bonus: "ShopeePay Bonus",
                            live_streaming_manage_replays_violation_prompt: "Unavailable due to violation",
                            "live_streaming_mepage_replay&clip_clip_tab": "Clip",
                            "live_streaming_mepage_replay&clip_clip_tab_banner": "Clip l\xe0 nh\u1eefng \u0111o\u1ea1n c\u1eaft t\u1ef1 \u0111\u1ed9ng b\u1edfi h\u1ec7 th\u1ed1ng t\u1eeb Livestream c\u1ee7a ng\u01b0\u1eddi b\xe1n",
                            "live_streaming_mepage_replay&clip_clip_tab_delete_cancel": "Hu\u1ef7 b\u1ecf",
                            "live_streaming_mepage_replay&clip_clip_tab_delete_confirm": "B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 nh\u1eefng clip n\xe0y?",
                            "live_streaming_mepage_replay&clip_clip_tab_delete_confirm_no": "Hu\u1ef7 b\u1ecf",
                            "live_streaming_mepage_replay&clip_clip_tab_delete_confirm_yes": "\u0110\u1ed3ng \xfd",
                            "live_streaming_mepage_replay&clip_clip_tab_delete_delete_button": "Xo\xe1",
                            "live_streaming_mepage_replay&clip_clip_tab_delete_exceed_limit": "C\xe1c clip \u0111\xe3 ch\u1ecdn v\u01b0\u1ee3t qu\xe1 s\u1ed1 l\u01b0\u1ee3ng cho ph\xe9p",
                            "live_streaming_mepage_replay&clip_clip_tab_delete_select_all": "Ch\u1ecdn T\u1ea5t c\u1ea3",
                            "live_streaming_mepage_replay&clip_clip_tab_noclip": "Hi\u1ec7n t\u1ea1i ch\u01b0a c\xf3 clip n\xe0o",
                            "live_streaming_mepage_replay&clip_clip_tab_noclip_description": "Nh\u1eefng phi\xean livestream ch\u1ea5t l\u01b0\u1ee3ng c\xe0ng cao s\u1ebd c\xe0ng thi\u1ebft l\u1eadp \u0111\u01b0\u1ee3c nhi\u1ec1u clip",
                            "live_streaming_mepage_replay&clip_clip_tab_play_page_post_video": "\u0110\u0103ng Video",
                            "live_streaming_mepage_replay&clip_clip_tab_play_page_post_video_draft": "Video \u0111\xe3 \u0111\u01b0\u1ee3c l\u01b0u trong m\u1ee5c Nh\xe1p c\u1ee7a H\u1ed3 S\u01a1 Video",
                            "live_streaming_mepage_replay&clip_clip_tab_post_sv_profile_clip_history": "L\u1ecbch s\u1eed clip",
                            "live_streaming_mepage_replay&clip_clip_tab_post_sv_profile_description": "\u0110\u0103ng clip \u0111\u1ec3 thu h\xfat th\xeam l\u01b0\u1ee3t xem",
                            "live_streaming_mepage_replay&clip_clip_tab_post_sv_profile_new_clip": "Clip m\u1edbi",
                            "live_streaming_mepage_replay&clip_clip_tab_post_sv_profile_new_clips": "{{Number}} Clip m\u1edbi",
                            "live_streaming_mepage_replay&clip_clip_tab_post_sv_profile_post_button": "\u0110\u0103ng Video",
                            "live_streaming_mepage_replay&clip_clip_tab_settings_clip_display": "Hi\u1ec3n th\u1ecb Clip",
                            "live_streaming_mepage_replay&clip_clip_tab_settings_clip_display_description": "\u0110\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng tr\xedch xu\u1ea5t trong phi\xean live b\u1edfi h\u1ec7 th\u1ed1ng v\xe0 hi\u1ec3n th\u1ecb \u1edf c\xe1c trang nh\u01b0 Chi Ti\u1ebft S\u1ea3n Ph\u1ea9m",
                            "live_streaming_mepage_replay&clip_clip_tab_tag_bestselling": "Nhi\u1ec1u l\u01b0\u1ee3t b\xe1n nh\u1ea5t",
                            "live_streaming_mepage_replay&clip_clip_tab_tag_mostviewed": "Nhi\u1ec1u l\u01b0\u1ee3t xem nh\u1ea5t",
                            "live_streaming_mepage_replay&clip_clip_tab_time_today": "H\xf4m nay",
                            "live_streaming_mepage_replay&clip_clip_tab_time_yesterday": "H\xf4m qua",
                            "live_streaming_mepage_replay&clip_replay_tab": "Xem l\u1ea1i",
                            "live_streaming_mepage_replay&clip_title": "L\u1ecbch s\u1eed Xem l\u1ea1i & Clip",
                            live_streaming_mepage_replay_history: "L\u1ecbch s\u1eed Xem l\u1ea1i",
                            live_streaming_more_streams: "Kh\xe1m ph\xe1",
                            live_streaming_no_more_detail: "H\u1ebft",
                            live_streaming_no_network: "M\u1ea1ng y\u1ebfu, vui l\xf2ng th\u1eed l\u1ea1i",
                            live_streaming_pause_viewer_back_tips: "Livestream t\u1ea1m d\u1eebng - Host s\u1ebd s\u1edbm quay l\u1ea1i.",
                            live_streaming_pause_viewer_tips: "Host \u0111\xe3 t\u1ea1m d\u1eebng phi\xean Livestream",
                            live_streaming_polling_option_pasted_text: "V\u0103n b\u1ea3n \u0111\xe3 \u0111\u01b0\u1ee3c l\u01b0\u1ee3c b\u1edbt theo s\u1ed1 l\u01b0\u1ee3ng k\xfd t\u1ef1 cho ph\xe9p.",
                            live_streaming_price_add_products: "Th\xeam s\u1ea3n ph\u1ea9m t\u1eeb shop c\u1ee7a b\u1ea1n \u0111\u1ec3 thi\u1ebft gi\xe1 \u0111\u1ed9c quy\u1ec1n trong livestream",
                            live_streaming_price_buy_now_button: "Mua ngay",
                            live_streaming_price_campaign_bubble_ongoing: "Tr\u1ea3i nghi\u1ec7m m\u1ee9c gi\xe1 \u01b0u \u0111\xe3i ngay nh\xe9!",
                            live_streaming_price_campaign_ongoing: "B\u1eaft \u0111\u1ea7u ngay!",
                            live_streaming_price_cancel_button: "H\u1ee7y",
                            live_streaming_price_confirm_button: "X\xe1c nh\u1eadn",
                            live_streaming_price_end_in: "K\u1ebft th\xfac sau {timer}",
                            live_streaming_price_exclusive_expiration_tips: "Gi\xe1 ch\u1ec9 \xe1p d\u1ee5ng khi ng\u01b0\u1eddi mua th\xeam v\xe0o gi\u1ecf h\xe0ng v\xe0 mua ngay trong livestream",
                            live_streaming_price_expiration_tips: "H\u1ebft h\u1ea1n khi livestream k\u1ebft th\xfac",
                            live_streaming_price_expiration_tips_MY: "Streaming Price will be expired when the stream ends",
                            live_streaming_price_expiration_tips_PH: "Live Flash Sale will be expired when the stream ends",
                            live_streaming_price_expiration_tips_SG: "Streaming Price will be expired when the stream ends",
                            live_streaming_price_fail_to_set_tip: "Ng\u01b0\u1eddi b\xe1n kh\xf4ng th\u1ec3 thi\u1ebft l\u1eadp gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp khi s\u1ea3n ph\u1ea9m \u0111ang tham gia Flash Sale/ Khuy\u1ebfn m\xe3i c\u1ee7a Shopee/ Gi\xe1 \u0111\u1ed9c quy\u1ec1n/ Khuy\u1ebfn m\xe3i c\u1ee7a ng\u01b0\u1eddi b\xe1n",
                            live_streaming_price_fail_to_set_tip_MY: "Products with Flash Sale/Promotion/Exclusive price/other seller discount can't be set as Streaming Price.",
                            live_streaming_price_fail_to_set_tip_PH: "Products with Flash Sale/Promotion/Exclusive price/other seller discount can't be set as Live Flash Sale.",
                            live_streaming_price_fail_to_set_tip_SG: "Products with Flash Sale/Promotion/Exclusive price/other seller discount can't be set as Streaming Price.",
                            live_streaming_price_got_it: "\u0110\xe3 hi\u1ec3u",
                            live_streaming_price_host_category_violation_dialog_button_cancel: "H\u1ee7y",
                            live_streaming_price_host_category_violation_dialog_button_learn_more: "Xem th\xeam",
                            live_streaming_price_host_category_violation_dialog_msg: "S\u1ea3n ph\u1ea9m thu\u1ed9c ng\xe0nh h\xe0ng c\u1ea5m kh\xf4ng th\u1ec3 thi\u1ebft l\u1eadp ch\u01b0\u01a1ng tr\xecnh \u01b0u \u0111\xe3i",
                            live_streaming_price_host_edit_price_button: "Ch\u1ec9nh s\u1eeda gi\xe1",
                            live_streaming_price_host_entrance_tips: "T\u1ea1o gi\xe1 live v\xe0 thi\u1ebft l\u1eadp kho h\xe0ng \u1edf \u0111\xe2y",
                            live_streaming_price_host_entrance_tips_MY: "Add\xa0Streaming Price here",
                            live_streaming_price_host_entrance_tips_PH: "Add\xa0Live Flash Sale here",
                            live_streaming_price_host_entrance_tips_SG: "Add\xa0Streaming Price here",
                            live_streaming_price_host_keyboard_done: "Ho\xe0n t\u1ea5t",
                            live_streaming_price_host_management_page_title: "Qu\u1ea3n l\xfd gi\xe1 ch\u1ec9 c\xf3 tr\xean Live",
                            live_streaming_price_host_management_page_title_MY: "Streaming Price\xa0Management",
                            live_streaming_price_host_management_page_title_PH: "Live Flash Sale\xa0Management",
                            live_streaming_price_host_management_page_title_SG: "Streaming Price\xa0Management",
                            live_streaming_price_host_operation_failed: "Thi\u1ebft l\u1eadp th\u1ea5t b\u1ea1i!",
                            live_streaming_price_host_operation_success: "Thi\u1ebft l\u1eadp th\xe0nh c\xf4ng!",
                            live_streaming_price_host_price_restriction_tips_2: "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng {lowest_price} <= gi\xe1 < {original_price}",
                            live_streaming_price_host_purchase_limit: "Gi\u1edbi h\u1ea1n mua h\xe0ng",
                            live_streaming_price_host_quantity_restriction_tips: "H\xe3y \u0111\u1ea3m b\u1ea3o r\u1eb1ng Gi\u1edbi h\u1ea1n mua h\xe0ng >= {purchase_limit}",
                            live_streaming_price_host_quantity_unlimited: "Kh\xf4ng gi\u1edbi h\u1ea1n",
                            live_streaming_price_host_reserved_stock: "S\u1ed1 l\u01b0\u1ee3ng",
                            live_streaming_price_host_reserved_stock_restriction_tips: "Vui l\xf2ng \u0111\u1ea3m b\u1ea3o r\u1eb1ng 1 <= h\xe0ng d\u1ef1 tr\u1eef <= t\u1ed5ng s\u1ed1 h\xe0ng",
                            live_streaming_price_host_revert_price_button: "Ho\xe0n v\u1ec1 gi\xe1 ban \u0111\u1ea7u",
                            live_streaming_price_host_revert_price_double_confirm: "Gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp s\u1ebd ho\xe0n v\u1ec1 gi\xe1 ban \u0111\u1ea7u ngay l\u1eadp t\u1ee9c, h\xe3y x\xe1c nh\u1eadn \u0111\u1ec3 ti\u1ebfp t\u1ee5c?",
                            live_streaming_price_host_revert_price_double_confirm_MY: "The\xa0Streaming Price will be revert to the original price immediately, confirm to proceed?",
                            live_streaming_price_host_revert_price_double_confirm_PH: "The\xa0Live Flash Sale will be revert to the original price immediately, confirm to proceed?",
                            live_streaming_price_host_revert_price_double_confirm_SG: "The\xa0Streaming Price will be revert to the original price immediately, confirm to proceed?",
                            live_streaming_price_host_set_now_hint: "C\xe0i \u0111\u1eb7t ngay",
                            live_streaming_price_host_set_price_button: "C\xe0i \u0111\u1eb7t gi\xe1",
                            live_streaming_price_host_set_price_button_on_panel: "C\xe0i \u0111\u1eb7t gi\xe1",
                            live_streaming_price_host_set_price_double_confirm_1: "Gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp s\u1ebd c\xf3 hi\u1ec7u l\u1ef1c ngay l\u1eadp t\u1ee9c v\xe0 h\u1ebft h\u1ea1n khi k\u1ebft th\xfac livestream, h\xe3y x\xe1c nh\u1eadn \u0111\u1ec3 ti\u1ebfp t\u1ee5c?",
                            live_streaming_price_host_set_price_double_confirm_1_MY: "The\xa0Streaming Price will take effect immediately, and expired when the stream ends, confirm to proceed?",
                            live_streaming_price_host_set_price_double_confirm_1_PH: "The\xa0Live Flash Sale will take effect immediately, and expired when the stream ends, confirm to proceed?",
                            live_streaming_price_host_set_price_double_confirm_1_SG: "The\xa0Streaming Price will take effect immediately, and expired when the stream ends, confirm to proceed?",
                            live_streaming_price_host_set_price_double_confirm_2: "S\u1ea3n ph\u1ea9m n\xe0y s\u1eafp c\xf3 gi\xe1 Flash Sale / Khuy\u1ebfn m\xe3i c\u1ee7a Shopee / Gi\xe1 \u0111\u1ed9c quy\u1ec1n trong v\xf2ng 2 ng\xe0y, gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp s\u1ebd c\xf3 hi\u1ec7u l\u1ef1c sau th\u1eddi \u0111i\u1ec3m \u0111\xf3, h\xe3y x\xe1c nh\u1eadn \u0111\u1ec3 ti\u1ebfp t\u1ee5c?",
                            live_streaming_price_host_set_price_double_confirm_2_MY: "This product has an upcoming Flash Sale price/Promotion price/Exclusive price within 2 days, the\xa0Streaming Price will be valid by then, confirm to proceed?",
                            live_streaming_price_host_set_price_double_confirm_2_PH: "This product has an upcoming Flash Sale price/Promotion price/Exclusive price within 2 days, the\xa0Live Flash Sale will be valid by then, confirm to proceed?",
                            live_streaming_price_host_set_price_double_confirm_2_SG: "This product has an upcoming Flash Sale price/Promotion price/Exclusive price within 2 days, the\xa0Streaming Price will be valid by then, confirm to proceed?",
                            live_streaming_price_host_setting_panel_stock: "Kho h\xe0ng",
                            live_streaming_price_host_streaming_price_expired_tip: "Gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp c\u1ee7a s\u1ea3n ph\u1ea9m #{item_count} \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_price_host_streaming_price_expired_tip2: "Gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp c\u1ee7a s\u1ea3n ph\u1ea9m \u0111\xe3 h\u1ebft h\u1ea1n",
                            live_streaming_price_host_streaming_price_expired_tip2_MY: "The\xa0Streaming Price of an item is expired",
                            live_streaming_price_host_streaming_price_expired_tip2_PH: "The\xa0Live Flash Sale of an item is expired",
                            live_streaming_price_host_streaming_price_expired_tip2_SG: "The\xa0Streaming Price of an item is expired",
                            live_streaming_price_host_streaming_price_expired_tip_MY: "The\xa0Streaming Price of item #{item_count} is expired",
                            live_streaming_price_host_streaming_price_expired_tip_PH: "The\xa0Live Flash Sale of item #{item_count} is expired",
                            live_streaming_price_host_streaming_price_expired_tip_SG: "The\xa0Streaming Price of item #{item_count} is expired",
                            live_streaming_price_host_timer: "Th\u1eddi gian \xe1p d\u1ee5ng",
                            live_streaming_price_host_timer_default: "\u0110\u1ebfn khi livestream k\u1ebft th\xfac",
                            live_streaming_price_host_timer_error: "\u0110\xe3 h\u1ebft h\u1ea1n \xe1p d\u1ee5ng gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp, vui l\xf2ng thi\u1ebft l\u1eadp th\u1eddi gian \xe1p d\u1ee5ng m\u1edbi",
                            live_streaming_price_host_timer_hours: "Gi\u1edd",
                            live_streaming_price_host_timer_minutes: "Ph\xfat",
                            live_streaming_price_host_timer_seconds: "Gi\xe2y",
                            live_streaming_price_loading_error_refresh: "T\u1ea3i l\u1ea1i trang",
                            live_streaming_price_ls_channel: "LS Channel",
                            live_streaming_price_more_product_title: "Th\xeam s\u1ea3n ph\u1ea9m",
                            live_streaming_price_no_products: "Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m",
                            live_streaming_price_platform_wide: "Platform Wide",
                            live_streaming_price_psp: "Gi\xe1 ch\u1ec9 c\xf3 tr\xean Live",
                            live_streaming_price_purchase_limit_tip: "* T\u1ed5ng gi\u1edbi h\u1ea1n l\u01b0\u1ee3t mua cho to\xe0n b\u1ed9 ph\xe2n lo\u1ea1i h\xe0ng c\u1ee7a m\u1ed7i ng\u01b0\u1eddi mua",
                            live_streaming_price_ratio_limit_hint: "Th\u1ea5t b\u1ea1i. Ph\xe2n lo\u1ea1i h\xe0ng c\xf3 gi\xe1 b\xe1n cao nh\u1ea5t kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 {price_gap_limit} l\u1ea7n so v\u1edbi ph\xe2n lo\u1ea1i h\xe0ng c\xf3 gi\xe1 b\xe1n th\u1ea5p nh\u1ea5t.",
                            live_streaming_price_set_stock_tips: "Gi\xe1 \u01b0u \u0111\xe3i tr\xean Livestream \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp b\u1edfi Shopee ho\u1eb7c ng\u01b0\u1eddi b\xe1n trong bu\u1ed5i Livestream. H\xe3y gi\u1edbi h\u1ea1n s\u1ed1 l\u01b0\u1ee3ng \u01b0u \u0111\xe3i theo kho\u1ea3ng th\u1eddi gian th\xedch h\u1ee3p nh\xe9.",
                            live_streaming_price_start_in: "B\u1eaft \u0111\u1ea7u sau {timer}",
                            live_streaming_price_stock: "C\xf2n {stock} s\u1ea3n ph\u1ea9m",
                            live_streaming_price_streamer_set_ongoing_price_double_confirm: "S\u1ea3n ph\u1ea9m n\xe0y \u0111ang tham gia c\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i kh\xe1c. Gi\xe1 \u0111\u1ed9c quy\u1ec1n trong livestream c\u1ee7a b\u1ea1n ch\u1ec9 c\xf3 hi\u1ec7u l\u1ef1c khi c\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i kh\xe1c k\u1ebft th\xfac. B\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c?",
                            live_streaming_price_streamer_set_upcoming_price_double_confirm: "S\u1ea3n ph\u1ea9m n\xe0y s\u1eafp tham gia c\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i kh\xe1c n\xean b\u1ea1n kh\xf4ng th\u1ec3 thi\u1ebft l\u1eadp th\xeam gi\xe1 \u0111\u1ed9c quy\u1ec1n cho bu\u1ed5i live. Gi\xe1 \u0111\u1ed9c quy\u1ec1n m\xe0 b\u1ea1n thi\u1ebft l\u1eadp s\u1ebd kh\xf4ng c\xf3 hi\u1ec7u l\u1ef1c cho \u0111\u1ebfn khi c\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i kh\xe1c k\u1ebft th\xfac. L\u01b0u \xfd: Gi\xe1 hi\u1ec3n th\u1ecb trong livestream s\u1ebd l\xe0 gi\xe1 b\xe1n \u0111\xe3 \u0111\u0103ng k\xfd trong c\xe1c ch\u01b0\u01a1ng tr\xecnh khuy\u1ebfn m\xe3i kh\xe1c",
                            live_streaming_price_streaming_stock: "Kho h\xe0ng ph\xe1t tr\u1ef1c ti\u1ebfp: {streaming_stock}",
                            live_streaming_price_tag: "Gi\xe1 ch\u1ec9 c\xf3 tr\xean Live",
                            live_streaming_price_tag_MY: "Streaming Price",
                            live_streaming_price_tag_PH: "Live Flash Sale",
                            live_streaming_price_tag_SG: "Streaming Price",
                            live_streaming_price_title: "Gi\xe1 ch\u1ec9 c\xf3 tr\xean Live",
                            live_streaming_price_title_MY: "Streaming Price",
                            live_streaming_price_title_PH: "Live Flash Sale",
                            live_streaming_price_title_SG: "Streaming Price",
                            live_streaming_price_upcoming: "S\u1eafp c\xf3 gi\xe1 {PSP price}",
                            live_streaming_price_viewer_streaming_price_loading_failed_tip: "\u0110\xe3 x\u1ea3y ra s\u1ef1 c\u1ed1 khi t\u1ea3i, vui l\xf2ng nh\u1ea5n \u0111\u1ec3 th\u1eed l\u1ea1i!",
                            live_streaming_price_viewer_streaming_price_tip: "Mua s\u1ea3n ph\u1ea9m v\u1edbi gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp",
                            live_streaming_price_viewer_streaming_price_tip_MY: "Get products with\xa0Streaming Price now",
                            live_streaming_price_viewer_streaming_price_tip_PH: "Get products with\xa0Live Flash Sale now",
                            live_streaming_price_viewer_streaming_price_tip_SG: "Get products with\xa0Streaming Price now",
                            live_streaming_privacy_setting_pagetitle: "Shopee Live Settings",
                            live_streaming_privacy_setting_prompt: "Enable the option to hide your interactions from all your contact friends.",
                            live_streaming_privacy_setting_toggle: "Hide my interactions to Shopee Live",
                            live_streaming_prohibited_for_sale: "All products are prohibited for sale",
                            live_streaming_psp_intro_seller: "Gi\xe1 \u01b0u \u0111\xe3i c\u1ee7a s\u1ea3n ph\u1ea9m trong livestream \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp b\u1edfi Shopee",
                            live_streaming_psp_ongoing: "Gi\xe1 \u0111\u1ed9c quy\u1ec1n trong livestream c\u1ee7a s\u1ea3n ph\u1ea9m #%@ s\u1eafp b\u1eaft \u0111\u1ea7u",
                            live_streaming_psp_sold_out: "S\u1ea3n ph\u1ea9m #%@ \u0111\xe3 b\xe1n h\u1ebft.",
                            live_streaming_query_recommendation_bar: "T\xecm {keyword} trong t\u1ea5t c\u1ea3 Shop",
                            live_streaming_reach_purchase_limit: "Sorry, you have reached the maximum purchase limit for this item",
                            live_streaming_reduce_stock_reminder: "B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 t\u0103ng th\xeam kho h\xe0ng",
                            live_streaming_remidner_landing_page_expired: "H\u1ebft h\u1ea1n",
                            live_streaming_remidner_share_link_description: "Xin ch\xe0o! Tham gia c\xf9ng t\xf4i {{title}} tr\xean Shopee live, v\xe0o {{date}}.",
                            live_streaming_reminder_landing_page_more_streams: "Xem th\xeam Livestream t\u1eeb {{username}}",
                            live_streaming_reminder_landing_page_more_streams_empty: "Kh\xf4ng c\xf3 Livestream n\xe0o.",
                            live_streaming_reminder_landing_page_share_copy_success: "Sao ch\xe9p th\xe0nh c\xf4ng!",
                            live_streaming_reminder_landing_page_sharing_panel: "Chia s\u1ebb Livestream n\xe0y!",
                            live_streaming_reminder_middle_page_no_scheduled_stream: "Livestream \u0111\u01b0\u1ee3c \u0111\u1eb7t l\u1ecbch v\u1eabn ch\u01b0a b\u1eaft \u0111\u1ea7u.",
                            live_streaming_replay_6months_expired_notification: "Livestream ph\xe1t l\u1ea1i c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong v\xf2ng 6 th\xe1ng k\u1ec3 t\u1eeb ng\xe0y b\u1ea1n livestream",
                            live_streaming_replay_expired_countdowndays: "{{left}} ng\xe0y",
                            live_streaming_replay_expired_countdownoneday: "{{left}} ng\xe0y",
                            live_streaming_replay_expired_notification: "B\u1ea1n c\xf3 th\u1ec3 xem l\u1ea1i c\xe1c Livestream \u0111\xe3 ph\xe1t trong v\xf2ng 30 ng\xe0y. L\u01b0u \xfd: C\xe1c n\u1ed9i dung Livestream qu\xe1 d\xe0i s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c l\u01b0u l\u1ea1i.",
                            live_streaming_replay_expired_notification_sg: "Your replay videos will be stored for 30 days from the date of your live stream.",
                            live_streaming_report_1: "Qu\u1ea3ng c\xe1o b\u1ea5t h\u1ee3p ph\xe1p",
                            live_streaming_report_10: "Qu\u1ea5y r\u1ed1i v\xe0 b\u1eaft n\u1ea1t",
                            live_streaming_report_11: "Kh\u1ecfa th\xe2n v\xe0 ho\u1ea1t \u0111\u1ed9ng t\xecnh d\u1ee5c ng\u01b0\u1eddi l\u1edbn",
                            live_streaming_report_11_1: "Kh\u1ecfa th\xe2n v\xe0 l\u1ea1m d\u1ee5ng t\xecnh d\u1ee5c ng\u01b0\u1eddi l\u1edbn",
                            live_streaming_report_11_2: "T\u1ea5n c\xf4ng t\xecnh d\u1ee5c ho\u1eb7c chia s\u1ebb h\xecnh \u1ea3nh nh\u1ea1y c\u1ea3m",
                            live_streaming_report_12: "An to\xe0n cho tr\u1ebb em",
                            live_streaming_report_12_1: "Kh\u1ecfa th\xe2n v\xe0 ho\u1ea1t \u0111\u1ed9ng t\xecnh d\u1ee5c tr\u1ebb em",
                            live_streaming_report_12_2: "H\xe0nh vi kh\xf4ng \u0111\u01b0\u1ee3c ph\xe9p ho\u1eb7c b\u1ea5t h\u1ee3p ph\xe1p \u1edf tr\u1ebb em",
                            live_streaming_report_12_3: "Streamer l\xe0 tr\u1ebb em",
                            live_streaming_report_13: "Spam v\xe0 buff t\u01b0\u01a1ng t\xe1c \u1ea3o",
                            live_streaming_report_14: "Th\xf4ng tin sai l\u1ec7ch",
                            live_streaming_report_14_1: "B\u1ea7u c\u1eed",
                            live_streaming_report_14_2: "S\u1ee9c kho\u1ebb",
                            live_streaming_report_14_3: "Nh\u1eefng th\xf4ng tin sai l\u1ec7ch kh\xe1c",
                            live_streaming_report_1_1: "Th\xf4ng tin sai l\u1ec7ch, v\xed d\u1ee5 sai gi\xe1, ph\xf3ng \u0111\u1ea1i ch\u1ee9c n\u0103ng c\u1ee7a s\u1ea3n ph\u1ea9m",
                            live_streaming_report_1_2: "T\u1ea1o giao d\u1ecbch b\xean ngo\xe0i n\u1ec1n t\u1ea3ng",
                            live_streaming_report_1_3: "Streamer c\xf3 t\xe1c phong k\xe9m kh\xf4ng t\u01b0\u01a1ng t\xe1c v\u1edbi ng\u01b0\u1eddi xem",
                            live_streaming_report_2: "N\u1ed9i dung ph\xe1t l\u1ea1i",
                            live_streaming_report_3: "Vi ph\u1ea1m s\u1edf h\u1eefu tr\xed tu\u1ec7 & gi\u1ea3 nh\xe1i",
                            live_streaming_report_4: "Ch\u1ee7 ngh\u0129a b\u1ea1o l\u1ef1c c\u1ef1c \u0111o\u1ea1n",
                            live_streaming_report_4_1: "C\xe1c t\u1ed5 ch\u1ee9c kh\u1ee7ng b\u1ed1, t\u1ed9i ph\u1ea1m v\xe0 th\xf9 \u0111\u1ecbch",
                            live_streaming_report_4_2: "B\u1ea1o l\u1ef1c",
                            live_streaming_report_5: "H\xe0nh vi th\xf9 \u0111\u1ecbch",
                            live_streaming_report_5_1: "Ph\xe1t ng\xf4n th\xf9 \u0111\u1ecbch",
                            live_streaming_report_5_2: "T\u01b0 t\u01b0\u1edfng th\xf9 \u0111\u1ecbch",
                            live_streaming_report_6: "Ho\u1ea1t \u0111\u1ed9ng b\u1ea5t h\u1ee3p ph\xe1p v\xe0 h\xe0ng h\xf3a b\u1ecb ki\u1ec3m so\xe1t",
                            live_streaming_report_6_1: "Ch\u1ea5t c\u1ea5m v\xe0 h\xe0ng h\xf3a b\u1ecb ki\u1ec3m so\xe1t",
                            live_streaming_report_6_2: "C\u1edd b\u1ea1c",
                            live_streaming_report_6_3: "Mua b\xe1n ho\u1eb7c s\u1eed d\u1ee5ng v\u0169 kh\xed",
                            live_streaming_report_6_4: "D\u1eef li\u1ec7u c\xe1 nh\xe2n v\xe0 quy\u1ec1n ri\xeang t\u01b0",
                            live_streaming_report_6_5: "S\u0103n b\u1eaft \u0111\u1ed9ng v\u1eadt hoang d\xe3",
                            live_streaming_report_7: "Gian l\u1eadn v\xe0 l\u1eeba \u0111\u1ea3o",
                            live_streaming_report_8: "N\u1ed9i dung gh\xea r\u1ee3n v\xe0 b\u1ea1o l\u1ef1c",
                            live_streaming_report_9: "H\xe0nh vi nguy hi\u1ec3m, t\u1ef1 t\u1eed v\xe0 t\u1ef1 g\xe2y th\u01b0\u01a1ng t\xedch",
                            live_streaming_report_9_1: "T\u1ef1 t\u1eed v\xe0 t\u1ef1 g\xe2y th\u01b0\u01a1ng t\xedch",
                            live_streaming_report_9_2: "R\u1ed1i lo\u1ea1n \u0103n u\u1ed1ng",
                            live_streaming_report_9_3: "H\xe0nh vi nguy hi\u1ec3m",
                            live_streaming_report_antispam1_toast: "B\u1ea1n \u0111ang s\u1eed d\u1ee5ng kh\xe1 nhi\u1ec1u l\u01b0\u1ee3t t\u1ed1 c\xe1o. Vui l\xf2ng th\u1eed l\u1ea1i sau",
                            live_streaming_report_antispam2_toast: "B\u1ea1n \u0111\xe3 s\u1eed d\u1ee5ng h\u1ebft l\u01b0\u1ee3t T\u1ed1 c\xe1o trong ng\xe0y",
                            live_streaming_report_btn: "G\u1eedi",
                            live_streaming_report_description: "M\xf4 t\u1ea3",
                            live_streaming_report_input_toast: "N\u1ebfu b\u1ea1n bi\u1ebft ai \u0111ang trong t\xecnh tr\u1ea1ng nguy k\u1ecbch kh\u1ea9n c\u1ea5p, vui l\xf2ng li\xean h\u1ec7 ngay v\u1edbi c\u01a1 quan ch\u1ee9c n\u0103ng g\u1ea7n nh\u1ea5t \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 k\u1ecbp th\u1eddi.",
                            live_streaming_report_others: "Kh\xe1c",
                            live_streaming_report_panel_title: "Ch\u1ecdn 1 l\xfd do",
                            live_streaming_report_reason: "Ph\xe1t l\u1ea1i n\u1ed9i dung quay s\u1eb5n",
                            live_streaming_report_required: "Y\xeau c\u1ea7u",
                            live_streaming_report_submit: "G\u1eedi",
                            live_streaming_report_success: "C\u1ea3m \u01a1n b\u1ea1n.",
                            live_streaming_report_success_toast: "B\xe0i t\u1ed1 c\xe1o c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi \u0111i. Shopee s\u1ebd xem x\xe9t v\xe0 x\u1eed l\xfd trong th\u1eddi gian s\u1edbm nh\u1ea5t c\xf3 th\u1ec3",
                            live_streaming_report_text_1: "L\xfd do b\xe1o c\xe1o",
                            live_streaming_report_text_2: "Vui l\xf2ng ch\u1ecdn 1 l\xfd do",
                            live_streaming_report_tips: "Vui l\xf2ng ch\u1ecdn l\xfd do t\u1ed1 c\xe1o",
                            live_streaming_report_title: "T\u1ed1 c\xe1o",
                            live_streaming_report_toast: "H\xe3y cung c\u1ea5p chi ti\u1ebft \u0111\u1ec3 ch\xfang t\xf4i c\xf3 th\u1ec3 hi\u1ec3u v\u1ea5n \u0111\u1ec1 c\u1ee7a b\u1ea1n h\u01a1n",
                            live_streaming_report_type1: "Th\xf4ng tin nh\u1ea1y c\u1ea3m c\xf3 kh\u1ea3 n\u0103ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn t\xecnh h\xecnh an ninh qu\u1ed1c gia v\xe0 x\xe3 h\u1ed9i.",
                            live_streaming_report_type2: "N\u1ed9i dung khi\xeau d\xe2m",
                            live_streaming_report_type3: "Tr\xf9ng l\u1eb7p n\u1ed9i dung livestreams t\u1eeb nhi\u1ec1u t\xe0i kho\u1ea3n kh\xe1c nhau",
                            live_streaming_report_type4: "Ch\u1ebf \u0111\u1ed9 m\xe0n h\xecnh t\u0129nh, kh\xf4ng c\xf3 t\u01b0\u01a1ng t\xe1c",
                            live_streaming_report_type5: "H\u01b0\u1edbng d\u1eabn giao d\u1ecbch ngo\xe0i Shopee",
                            live_streaming_report_type6: "H\xe0ng gi\u1ea3/H\xe0ng nh\xe1i",
                            live_streaming_report_type7: "Link s\u1ea3n ph\u1ea9m v\xe0 n\u1ed9i dung livestream kh\xf4ng tr\xf9ng kh\u1edbp",
                            live_streaming_report_type8: "Th\xf4ng tin sai l\u1ec7ch v\u1ec1 s\u1ea3n ph\u1ea9m",
                            live_streaming_report_type9: "Nh\u1eefng vi ph\u1ea1m kh\xe1c",
                            live_streaming_report_type_description: "(B\u1eaft bu\u1ed9c) Vui l\xf2ng mi\xeau t\u1ea3 c\u1ee5 th\u1ec3 v\u1ec1 h\xe0nh vi vi ph\u1ea1m",
                            live_streaming_report_type_required_toast: "(B\u1eaft bu\u1ed9c) Vui l\xf2ng mi\xeau t\u1ea3 c\u1ee5 th\u1ec3 v\u1ec1 h\xe0nh vi vi ph\u1ea1m",
                            live_streaming_reserved_for_promotion: "D\xe0nh ri\xeang cho khuy\u1ebfn m\xe3i",
                            live_streaming_reserved_stock: "Kho h\xe0ng d\u1ef1 tr\u1eef",
                            live_streaming_reward_awarded: "Congrats, you're awarded",
                            live_streaming_reward_check_everyday: "Watch Live for {{x}} min(s) to check-in everyday",
                            live_streaming_reward_check_in: "Check-in",
                            live_streaming_reward_day: "Day {{x}}",
                            live_streaming_reward_failed: "Check in failed. Not meeting the check in conditions.",
                            live_streaming_reward_got_it: "Got it",
                            live_streaming_reward_my_balance: "Awarded to My Balance in Live",
                            live_streaming_reward_my_voucher: "Already awarded to 'My Voucher'",
                            live_streaming_reward_new_reward: "NEW REWARD",
                            live_streaming_reward_try_again: "Check in failed, please try again",
                            live_streaming_reward_view_more: "View More",
                            live_streaming_reward_watch_min: "Congrats, you've watched Live for M min(s)",
                            live_streaming_sales_prohibit: "S\u1ea3n ph\u1ea9m b\u1ecb h\u1ea1n ch\u1ebf",
                            live_streaming_sales_prohibit_toast_1: "S\u1ea3n ph\u1ea9m b\u1ecb h\u1ea1n ch\u1ebf kh\xf4ng th\u1ec3 b\xe1n trong Live",
                            live_streaming_sales_prohibit_toast_2: "T\u1ea5t c\u1ea3 s\u1ea3n ph\u1ea9m b\u1ecb h\u1ea1n ch\u1ebf kh\xf4ng th\u1ec3 b\xe1n trong Live",
                            live_streaming_set_stock: "C\xe0i \u0111\u1eb7t kho",
                            live_streaming_set_stock_bubble: "Set stock to start Streaming Price.",
                            live_streaming_set_stock_close: "\u0110\xf3ng",
                            live_streaming_set_stock_end: "K\u1ebft th\xfac",
                            live_streaming_set_stock_in_flexible_time: "C\xe0i \u0111\u1eb7t s\u1ed1 l\u01b0\u1ee3ng mong mu\u1ed1n theo khung gi\u1edd Livestream",
                            live_streaming_set_stock_no_content: "Kh\xf4ng c\xf3 n\u1ed9i dung",
                            live_streaming_set_stock_no_content_reminder: "Thi\u1ebft l\u1eadp kho",
                            live_streaming_set_stock_page_loading_error: "L\u1ed7i",
                            live_streaming_set_stock_page_network_error_reminder: "Vui l\xf2ng ki\u1ec3m tra l\u1ea1i k\u1ebft n\u1ed1i m\u1ea1ng",
                            live_streaming_set_stock_page_stock: "Kho",
                            live_streaming_set_stock_page_time: "Th\u1eddi gian",
                            live_streaming_setting_page_no_cover_toast: "Kh\xf4ng th\u1ec3 \u0111\u1ec3 tr\u1ed1ng \u1ea3nh b\xeca. Vui l\xf2ng t\u1ea3i l\xean 01 \u1ea3nh",
                            live_streaming_setting_page_no_title_toast: "Kh\xf4ng th\u1ec3 \u0111\u1ec3 tr\u1ed1ng ti\xeau \u0111\u1ec1. Vui l\xf2ng \u0111i\u1ec1n Ti\xeau \u0111\u1ec1",
                            live_streaming_setting_page_promo_label_toast: "Promo Label will show on your streaming cover.",
                            live_streaming_setting_page_violation_toast: "B\u1ea1n c\xf3 ghi nh\u1eadn phi\xean Live vi ph\u1ea1m",
                            live_streaming_shoppage_coming_soon: "S\u1eafp di\u1ec5n ra",
                            live_streaming_shoppage_replay: "Xem L\u1ea1i",
                            live_streaming_shoppage_see_all: "Xem t\u1ea5t c\u1ea3",
                            live_streaming_shoppage_show_all: "Xem t\u1ea5t c\u1ea3",
                            live_streaming_shoppage_tabname: "Shopee Live",
                            live_streaming_shoppage_watch_now: "Xem Ngay",
                            live_streaming_shopping_bag_search: "T\xecm ki\u1ebfm",
                            live_streaming_shopping_bag_search_clear: "B\u1ea1n mu\u1ed1n x\xf3a to\xe0n b\u1ed9 l\u1ecbch s\u1eed t\xecm ki\u1ebfm?",
                            live_streaming_shopping_bag_search_default: "T\xecm t\xean/s\u1ed1 th\u1ee9 t\u1ef1 s\u1ea3n ph\u1ea9m",
                            live_streaming_shopping_bag_search_guidance: "T\xecm s\u1ea3n ph\u1ea9m b\u1eb1ng c\xf4ng c\u1ee5 t\xecm ki\u1ebfm",
                            live_streaming_shopping_bag_search_history: "L\u1ecbch s\u1eed t\xecm ki\u1ebfm",
                            live_streaming_shopping_bag_search_no_result: "Kh\xf4ng c\xf3 k\u1ebft qu\u1ea3",
                            live_streaming_shopping_bag_search_result: "{x} Result(s)",
                            live_streaming_shopping_bag_search_toast: "Vui l\xf2ng nh\u1eadp t\u1eeb kh\xf3a c\u1ea7n t\xecm ki\u1ebfm",
                            live_streaming_showing_item_cancel: "Host \u0111\xe3 d\u1eebng gi\u1edbi thi\u1ec7u s\u1ea3n ph\u1ea9m n\xe0y.",
                            live_streaming_showing_item_refresh: "Host \u0111\xe3 ghim s\u1ea3n ph\u1ea9m m\u1edbi",
                            live_streaming_smart_price_host_revert_price_double_confirm: "The streaming price will be revert to the recommended price immediately, confirm to proceed?",
                            live_streaming_sold_out: "H\u1ebft h\xe0ng",
                            live_streaming_ssp_noti_title: "Gi\xe1 ch\u1ec9 c\xf3 tr\xean Live",
                            live_streaming_ssp_update: "C\u1eacP NH\u1eacT!",
                            live_streaming_stock_error: "1 <= H\xe0ng d\u1ef1 tr\u1eef <= {num}",
                            live_streaming_streamer_dashboard_about_engagement: "\u0110\u1ed9 t\u01b0\u01a1ng t\xe1c",
                            live_streaming_streamer_dashboard_about_key_metrics: "Ch\u1ec9 s\u1ed1 quan tr\u1ecdng",
                            live_streaming_streamer_dashboard_about_order: "\u0110\u01a1n h\xe0ng",
                            live_streaming_streamer_dashboard_about_product_details: "Chi ti\u1ebft s\u1ea3n ph\u1ea9m",
                            live_streaming_streamer_dashboard_about_reach: "Ti\u1ebfp c\u1eadn",
                            live_streaming_streamer_dashboard_add_to_cart_content: "S\u1ed1 l\u01b0\u1ee3t th\xeam v\xe0o gi\u1ecf h\xe0ng",
                            live_streaming_streamer_dashboard_atc: "Th\xeam v\xe0o gi\u1ecf h\xe0ng",
                            live_streaming_streamer_dashboard_buyers: "Ng\u01b0\u1eddi mua",
                            live_streaming_streamer_dashboard_buyers_content: "S\u1ed1 ng\u01b0\u1eddi mua h\xe0ng trong livestream",
                            live_streaming_streamer_dashboard_close_button: "\u0110\xf3ng",
                            live_streaming_streamer_dashboard_comments: "B\xecnh lu\u1eadn",
                            live_streaming_streamer_dashboard_comments_content: "T\u1ed5ng s\u1ed1 b\xecnh lu\u1eadn",
                            live_streaming_streamer_dashboard_engagement: "T\u01af\u01a0NG T\xc1C",
                            live_streaming_streamer_dashboard_items_sold: "S\u1ea3n ph\u1ea9m \u0111\xe3 b\xe1n",
                            live_streaming_streamer_dashboard_items_sold_content: "S\u1ed1 s\u1ea3n ph\u1ea9m trong t\u1ed5ng \u0111\u01a1n h\xe0ng",
                            live_streaming_streamer_dashboard_key_new_followers_content: "S\u1ed1 l\u01b0\u1ee3t theo d\xf5i m\u1edbi t\u1eeb livestream",
                            live_streaming_streamer_dashboard_key_orders_from_Viewers: "S\u1ed1 \u0111\u01a1n h\xe0ng t\u1eeb ng\u01b0\u1eddi xem",
                            live_streaming_streamer_dashboard_key_orders_from_Viewers_content: "T\u1ed5ng \u0111\u01a1n h\xe0ng trong su\u1ed1t livestream",
                            live_streaming_streamer_dashboard_key_sales_from_viewers: "Doanh thu",
                            live_streaming_streamer_dashboard_key_sales_from_viewers_content: "T\u1ed5ng gi\xe1 tr\u1ecb c\xe1c \u0111\u01a1n h\xe0ng trong livestream",
                            live_streaming_streamer_dashboard_likes: "L\u01b0\u1ee3t th\xedch",
                            live_streaming_streamer_dashboard_likes_content: "S\u1ed1 l\u01b0\u1ee3t th\u1ea3 tim trong livestream",
                            live_streaming_streamer_dashboard_new_followers: "L\u01b0\u1ee3t theo d\xf5i m\u1edbi",
                            live_streaming_streamer_dashboard_no_more_product: "Kh\xf4ng c\xf2n s\u1ea3n ph\u1ea9m n\xe0o",
                            live_streaming_streamer_dashboard_no_product: "Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m",
                            live_streaming_streamer_dashboard_online_viewers: "Ng\u01b0\u1eddi xem tr\u1ef1c tuy\u1ebfn",
                            live_streaming_streamer_dashboard_online_views_content: "S\u1ed1 ng\u01b0\u1eddi \u0111ang xem tr\u1ef1c ti\u1ebfp",
                            live_streaming_streamer_dashboard_order: "\u0110\u01a0N H\xc0NG",
                            live_streaming_streamer_dashboard_orders_from_viewers: "S\u1ed1 \u0111\u01a1n h\xe0ng t\u1eeb ng\u01b0\u1eddi xem",
                            live_streaming_streamer_dashboard_others_content: "*L\u01b0u \xfd: \u0110\u1ec3 ki\u1ec3m tra d\u1eef li\u1ec7u \u0111\u1ea7y \u0111\u1ee7 nh\u1ea5t v\u1ec1 \u0110\u01a1n h\xe0ng v\xe0 Doanh thu, Shop vui l\xf2ng truy c\u1eadp D\u1eef li\u1ec7u Livestream t\u1ea1i T\xf4i > Shopee Live > Th\xf4ng tin chi ti\u1ebft",
                            live_streaming_streamer_dashboard_product: "S\u1ea3n ph\u1ea9m",
                            live_streaming_streamer_dashboard_product_details: "CHI TI\u1ebeT S\u1ea2N PH\u1ea8M",
                            live_streaming_streamer_dashboard_product_views: "L\u01b0\u1ee3t xem s\u1ea3n ph\u1ea9m",
                            live_streaming_streamer_dashboard_product_views_content: "S\u1ed1 l\u01b0\u1ee3t truy c\u1eadp xem trang s\u1ea3n ph\u1ea9m",
                            live_streaming_streamer_dashboard_reach: "\u0110\u1ed8 TI\u1ebeP C\u1eacN",
                            live_streaming_streamer_dashboard_retry_button: "Th\u1eed l\u1ea1i",
                            live_streaming_streamer_dashboard_retry_content: "Kh\xf4ng t\u1ea3i \u0111\u01b0\u1ee3c D\u1eef li\u1ec7u. Vui l\xf2ng th\u1eed l\u1ea1i.",
                            live_streaming_streamer_dashboard_sales_from_viewers: "Doanh thu",
                            live_streaming_streamer_dashboard_shares: "L\u01b0\u1ee3t Chia s\u1ebb",
                            live_streaming_streamer_dashboard_shares_content: "T\u1ed5ng s\u1ed1 l\u01b0\u1ee3t chia s\u1ebb",
                            live_streaming_streamer_dashboard_shop_views: "L\u01b0\u1ee3t xem Shop",
                            live_streaming_streamer_dashboard_shop_views_content: "S\u1ed1 l\u01b0\u1ee3t truy c\u1eadp Shop",
                            live_streaming_streamer_dashboard_sku_add_to_cart_content: "T\u1ed5ng s\u1ed1 l\u01b0\u1ee3t th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng",
                            live_streaming_streamer_dashboard_sku_atc: "Th\xeam v\xe0o gi\u1ecf h\xe0ng",
                            live_streaming_streamer_dashboard_sku_orders: "S\u1ed1 \u0111\u01a1n h\xe0ng t\u1eeb ng\u01b0\u1eddi xem",
                            live_streaming_streamer_dashboard_sku_orders_from_viewers_content: "S\u1ed1 s\u1ea3n ph\u1ea9m \u0111\u01b0\u1ee3c \u0111\u1eb7t trong livestream",
                            live_streaming_streamer_dashboard_sku_product_views: "L\u01b0\u1ee3t xem s\u1ea3n ph\u1ea9m",
                            live_streaming_streamer_dashboard_sku_product_views_content: "T\u1ed5ng s\u1ed1 l\u01b0\u1ee3t nh\u1ea5p v\xe0o s\u1ea3n ph\u1ea9m \u0111\u1ec3 truy c\u1eadp trang s\u1ea3n ph\u1ea9m",
                            live_streaming_streamer_dashboard_sku_sales: "Doanh thu",
                            live_streaming_streamer_dashboard_views: "L\u01b0\u1ee3t xem",
                            live_streaming_streamer_dashboard_views_content: "L\u01b0\u1ee3t xem",
                            live_streaming_streamer_incentive_task_full_screen_bubble: "Ph\xe1t tr\u1ef1c ti\u1ebfp m\u1ed7i ng\xe0y \u0111\u1ec3 s\u1edf h\u1eefu nhi\u1ec1u ph\u1ea7n th\u01b0\u1edfng h\u1ea5p d\u1eabn!",
                            live_streaming_streamer_incentive_task_full_screen_bubble_phase2: "Ph\xe1t tr\u1ef1c ti\u1ebfp m\u1ed7i ng\xe0y \u0111\u1ec3 s\u1edf h\u1eefu nhi\u1ec1u ph\u1ea7n th\u01b0\u1edfng h\u1ea5p d\u1eabn!",
                            live_streaming_streamer_incentive_task_full_screen_pop_up_reward: "Th\u01b0\u1edfng th\xeam {num} L\u01b0\u1ee3t xem m\u1ed7i tu\u1ea7n!",
                            live_streaming_streamer_incentive_task_full_screen_pop_up_subtitle: "Livestream \xedt nh\u1ea5t 60 ph\xfat m\u1ed7i ng\xe0y \u0111\u1ec3 nh\u1eadn l\u01b0\u1ee3t xem th\u01b0\u1edfng",
                            live_streaming_streamer_incentive_task_full_screen_pop_up_title: "Livestream m\u1ed7i ng\xe0y \u0111\u1ec3 nh\u1eadn l\u01b0\u1ee3t xem th\u01b0\u1edfng ngay!",
                            live_streaming_streamer_incentive_task_pnar_content: "Tin Hot! B\u1eadt Livestream k\xe9o d\xe0i \xedt nh\u1ea5t 60 ph\xfat m\u1ed7i ng\xe0y, b\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c ph\u1ea7n th\u01b0\u1edfng l\xean \u0111\u1ebfn 600 l\u01b0\u1ee3t xem m\u1ed7i tu\u1ea7n. Xem th\xeam t\u1ea1i \u0111\xe2y.",
                            live_streaming_streamer_incentive_task_pnar_title: "Tham gia Th\u1eed Th\xe1ch Livestream \u0111\u1ec3 nh\u1eadn th\xeam l\u01b0\u1ee3t xem!",
                            live_streaming_streamer_incentive_task_stream_room_entrance_daily_task_subtitle: "Ph\xfat",
                            live_streaming_streamer_incentive_task_stream_room_entrance_daily_task_title: "Ti\u1ebfp t\u1ee5c live",
                            live_streaming_streamer_incentive_task_stream_room_entrance_weekly_task_subtitle: "Ng\xe0y",
                            live_streaming_streamer_incentive_task_stream_room_entrance_weekly_task_title: "Live {num} ng\xe0y/ tu\u1ea7n",
                            live_streaming_streamer_incentive_task_stream_room_pop_up_daily_reward: "+{num} l\u01b0\u1ee3t xem cho phi\xean livestream c\u1ee7a b\u1ea1n",
                            live_streaming_streamer_incentive_task_stream_room_pop_up_daily_task_name: "Nhi\u1ec7m V\u1ee5 H\xe0ng Ng\xe0y: H\xe3y duy tr\xec th\u1eddi l\u01b0\u1ee3ng c\u1ee7a 01 phi\xean livestream \xedt nh\u1ea5t 60 ph\xfat b\u1ea1n nh\xe9!",
                            live_streaming_streamer_incentive_task_stream_room_pop_up_see_details: "Xem chi ti\u1ebft",
                            live_streaming_streamer_incentive_task_stream_room_pop_up_subtitle: "B\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh:",
                            live_streaming_streamer_incentive_task_stream_room_pop_up_title: "Ch\xfac m\u1eebng!",
                            live_streaming_streamer_incentive_task_stream_room_pop_up_weekly_reward: "+{num} l\u01b0\u1ee3t xem cho phi\xean livestream c\u1ee7a b\u1ea1n",
                            live_streaming_streamer_incentive_task_stream_room_pop_up_weekly_task_name: "Nhi\u1ec7m V\u1ee5 H\xe0ng Tu\u1ea7n: H\xe3y duy tr\xec livestream 5 ng\xe0y m\u1ed7i tu\u1ea7n v\u1edbi \xedt nh\u1ea5t 60 ph\xfat/phi\xean livestream b\u1ea1n nh\xe9!",
                            "live_streaming_streamer_mepage_replay&clip_entrance": "Xem l\u1ea1i & Clip",
                            "live_streaming_streamer_mepage_replay&clip_entrance_guide": "Qu\u1ea3n l\xfd clip v\xe0 xem l\u1ea1i t\u1ea1i \u0111\xe2y",
                            live_streaming_streamer_recommend_authorization_switch_regulation_content: "<h3>APPROVAL OF AUTHORIZATION FOR BROADCASTING OF LIVE STREAM CONTENT TO THIRD PARTY SITES</h3><p>The \u201cBroadcast To Other Channel\u201d feature is a feature for synchronizing and broadcasting live stream sessions on Shopee Live from streamers to third party sites and applications outside Shopee, such as Snack Video. Users of these third party sites and applications can watch live stream content from Shopee streamers. The entire transaction and payment process for orders will be completely carried out through the Shopee application.</p><p>By using this feature, streamers can reach more viewers of content or live stream sessions from outside the Shopee application and have the potential to increase store sales.</p><p>The synchronization process will only be carried out if streamers have given authorization by activating the \u201cBroadcast\xa0 To Other Channel\u201d button in the \u201cMore\u201d settings on the page of \u201cGo Live\u201d on Shopee Live.</p><p>By toggling on the authorization button, you acknowledge, agree and understand that:</p><p>1. You agree to synchronize your Content to third party sites and applications and therefore you give full consent for Shopee to synchronize and distribute Content for the purpose of presenting Content on Shopee and third party sites and applications such as Snack Video, including but not limited to photos & names of Content owner account, text, images, videos, live streams and other information that you share via Shopee.</p><p>2. You are obliged to carefully read all the terms and conditions of use of third party sites and applications services such as Snack Video. Shopee has not reviewed and is not responsible for the Content, functionality, security, services, privacy policies or other practices of third parties on such products, websites or services. If you do so, the terms of service for such products, websites or services, including their respective privacy policies, if different from these Terms of Service and/or our Privacy Policy, may also apply to your use of such products, websites or services.</p><p>3. Especially for creators registered with the Shopee Affiliate Program, you agree that: (a) Conditions for providing Content are subject to the Shopee Policies, Shopee Affiliate Program Terms and Conditions for Individuals, and Shopee Affiliate Program Terms and Conditions for Companies (including any of its additions and amendments from time to time, hereinafter, collectively referred to as the \u201c<b>Affiliate Program Terms of Services</b>\u201d), (b) you are entitled to earn Shopee Affiliate Program benefits for short videos and live streams based on the performance of Content on such third party applications in accordance with the Affiliate Program Terms of Services.</p><p>Your consent is subject to Shopee's Terms of Service. Items in the Terms of Services which are not mentioned on this page shall apply mutatis mutandis to the Content synchronization provisions. You can revoke your content authorization approval that has been given by deactivating the access button on the \u201cauthorization\u201d page. However, revocation of your consent may mean that we will not be able to continue providing content authorization Services to you, and distribution of user content in third-party applications will cease immediately.</p>",
                            live_streaming_streamer_recommend_authorization_switch_regulation_title: "Broadcast to other channel",
                            live_streaming_streaming_price_add: "Set Streaming Price for Items in Shopping Bag",
                            live_streaming_streaming_price_set: "Set",
                            live_streaming_streaming_price_set_streaming_price: "Set Streaming Price",
                            live_streaming_streaming_violation_title: "Vi ph\u1ea1m tr\xean Live",
                            live_streaming_timeslot_delete: "Xo\xe1",
                            live_streaming_timeslot_end_early: "B\u1ea1n mu\u1ed1n t\u1eaft?",
                            live_streaming_timeslot_end_time: "K\u1ebft th\xfac",
                            live_streaming_timeslot_error: "H\xe3y ch\u1eafc ch\u1eafn r\u1eb1ng c\xe1c kho\u1ea3ng th\u1eddi gian kh\xf4ng b\u1ecb tr\xf9ng v\xe0 s\u1edbm h\u01a1n {end_time}",
                            live_streaming_timeslot_launch_early: "X\xe1c nh\u1eadn?",
                            live_streaming_timeslot_start_time: "B\u1eaft \u0111\u1ea7u",
                            live_streaming_tips_for_dashboard: "Kh\xf4ng t\xecm th\u1ea5y s\u1ea3n ph\u1ea9m n\xe0o. Vui l\xf2ng truy c\u1eadp [link] \u0111\u1ec3 xem th\xeam chi ti\u1ebft Dashboard",
                            live_streaming_top_sellers_onboard_activity_1: "Congrats you are selected!",
                            live_streaming_top_sellers_onboard_activity_2: "Top Seller Livestream Program",
                            live_streaming_top_sellers_onboard_boosted: "Boosted",
                            live_streaming_top_sellers_onboard_bubble: "Go Live and Get daily Extra Boost now! Go>",
                            live_streaming_top_sellers_onboard_button: "Create Stream",
                            live_streaming_top_sellers_onboard_complete: "Completed",
                            live_streaming_top_sellers_onboard_course_more: "More",
                            live_streaming_top_sellers_onboard_course_t: "Live Hub",
                            live_streaming_top_sellers_onboard_details_c1: "Streamers should add at least [[10 products in shopping bag]], out of which at least [[4 are from Shop's top sell]]. And streamers are suggested to sell [[3 to 5 products with 70% off]] to get more live orders.",
                            live_streaming_top_sellers_onboard_details_c2: "Streamers should clearly display and explain the selling points of the products",
                            live_streaming_top_sellers_onboard_details_c3: "Streaming should comply with live content safety rules of Shopee. Low quality content like no product selling/black screen/recording replay/freezing picture etc. will not be counted for qualified streaming content. And if the streaming is terminated, Shopee has the right to cancel rewards.",
                            live_streaming_top_sellers_onboard_details_t: "Requirements for the qualified stream to get 1k+ views",
                            live_streaming_top_sellers_onboard_end_content: "The activity has ended, thank you for your participation. You can check the historical traffic reward progress",
                            live_streaming_top_sellers_onboard_end_title: "Activity ended",
                            live_streaming_top_sellers_onboard_expired: "Expired",
                            live_streaming_top_sellers_onboard_got: "Got",
                            live_streaming_top_sellers_onboard_icon1: "Add 10 Products",
                            live_streaming_top_sellers_onboard_icon2: "Go Live 2 Hours",
                            live_streaming_top_sellers_onboard_icon3: "Promote More",
                            live_streaming_top_sellers_onboard_part1_details: "Details",
                            live_streaming_top_sellers_onboard_part1_text1: "Follow below steps and start streaming!",
                            live_streaming_top_sellers_onboard_part1_text2: "Requirements for the qualified stream",
                            live_streaming_top_sellers_onboard_part1_text3: "Limited for 2 weeks only",
                            live_streaming_top_sellers_onboard_part1_title: "Win Extra Views Everyday",
                            live_streaming_top_sellers_onboard_popup_button: "Join Now",
                            live_streaming_top_sellers_onboard_popup_content: "Keep streaming up to 2 hours and promote Free Shipping up to 20k and discount IDR 10K Vouchers to get more views!",
                            live_streaming_top_sellers_onboard_popup_title: "Stream now and get boosted everyday!",
                            live_streaming_top_sellers_onboard_tag: "Extra Boosting",
                            live_streaming_top_sellers_onboard_top_bar: "Top Seller Livestream Program",
                            live_streaming_topselling_seemore_button: "Xem th\xeam",
                            live_streaming_topselling_streaming_price_promo_tag: "Gi\xe1 ph\xe1t tr\u1ef1c ti\u1ebfp",
                            live_streaming_topselling_subpage_error_prompt: "L\u1ed7i, vui l\xf2ng th\u1eed l\u1ea1i sau.",
                            live_streaming_topselling_subpage_error_toast: "M\u1ea5t k\u1ebft n\u1ed1i, vui l\xf2ng th\u1eed l\u1ea1i sau.",
                            live_streaming_topselling_subpage_noconnection_prompt: "Kh\xf4ng c\xf3 k\u1ebft n\u1ed1i",
                            live_streaming_topselling_subpage_tryagain_button: "Th\u1eed l\u1ea1i",
                            live_streaming_topselling_subpage_tryagain_prompt: "Vui l\xf2ng th\u1eed l\u1ea1i sau.",
                            live_streaming_topselling_title: "Top s\u1ea3n ph\u1ea9m b\xe1n ch\u1ea1y tr\xean Shopee Live",
                            live_streaming_update_exclusive: "T\xednh n\u0103ng gi\xe1 \u0111\u1ed9c quy\u1ec1n trong livestream \u0111\xe3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt. S\u1eed d\u1ee5ng ngay!",
                            live_streaming_update_popup: "Ch\u1ec9 c\u1ea7n v\xe0i b\u01b0\u1edbc \u0111\u01a1n gi\u1ea3n b\u1ea1n \u0111\xe3 c\xf3 th\u1ec3 thi\u1ebft l\u1eadp gi\xe1 \u0111\u1ed9c quy\u1ec1n trong livestream. L\u01b0u \xfd: Gi\xe1 ch\u1ec9 \xe1p d\u1ee5ng khi ng\u01b0\u1eddi mua th\xeam v\xe0o gi\u1ecf h\xe0ng v\xe0 mua ngay trong livestream",
                            live_streaming_use_btn: "D\xf9ng",
                            live_streaming_user_guide: "K\xe9o l\xean \u0111\u1ec3 xem th\xeam chi ti\u1ebft",
                            live_streaming_viewer_comment_qc_Divulging_others_personal: "Ti\u1ebft l\u1ed9 th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a ng\u01b0\u1eddi kh\xe1c",
                            live_streaming_viewer_comment_qc_confirm: "X\xe1c nh\u1eadn",
                            live_streaming_viewer_comment_qc_failed: "Thao t\xe1c kh\xf4ng th\xe0nh c\xf4ng, vui l\xf2ng th\u1eed l\u1ea1i.",
                            live_streaming_viewer_comment_qc_language_abuse: "Ng\xf4n ng\u1eef th\xf4 t\u1ee5c/kh\xf4ng ph\xf9 h\u1ee3p",
                            live_streaming_viewer_comment_qc_outside_website_information: "Giao d\u1ecbch ngo\xe0i Shopee",
                            live_streaming_viewer_comment_qc_reported: "B\u1ea1n \u0111\xe3 t\u1ed1 c\xe1o nh\u1eadn x\xe9t n\xe0y. Sau khi g\u1eedi, b\xe1o c\xe1o tr\u01b0\u1edbc \u0111\xf3 s\u1ebd b\u1ecb x\xf3a",
                            live_streaming_viewer_comment_qc_severe_sensitive_information: "Th\xf4ng tin nh\u1ea1y c\u1ea3m",
                            live_streaming_viewer_comment_qc_spamming: "Th\xf4ng tin r\xe1c",
                            live_streaming_viewer_endpage_livenowstreaming_title: "Ph\xe1t tr\u1ef1c ti\u1ebfp ngay",
                            live_streaming_viewer_endpage_product_list: "Nh\u1ea5p v\xe0o \u0111\u1ec3 xem danh s\xe1ch s\u1ea3n ph\u1ea9m",
                            live_streaming_viewer_host_temporary_offline_tip: "M\xe1y ch\u1ee7 t\u1ea1m th\u1eddi \u0111ang ngo\u1ea1i tuy\u1ebfn. B\u1ea1n vui l\xf2ng ch\u1edd.",
                            live_streaming_viewer_polling_bad_network: "K\u1ebft n\u1ed1i y\u1ebfu, vui l\xf2ng th\u1eed l\u1ea1i.",
                            live_streaming_viewer_shopping_bag_search_retry: "Th\u1eed l\u1ea1i",
                            live_streaming_viewer_shopping_sku_pop_up_fail_unknown: "H\u1ec7 th\u1ed1ng \u0111ang g\u1eb7p ch\xfat s\u1ef1 c\u1ed1, b\u1ea1n vui l\xf2ng th\u1eed l\u1ea1i nh\xe9!",
                            live_streaming_violation_learn_more: "Xem th\xeam",
                            live_streaming_violation_ok: "OK",
                            live_streaming_voice_call_block: "\u0110ang trong cu\u1ed9c g\u1ecdi. Vui l\xf2ng th\u1eed l\u1ea1i sau.",
                            live_streaming_voucher_available_panel_title: "S\u1ea3n ph\u1ea9m c\xf3 tr\xean Live",
                            live_streaming_voucher_expiring_day: "Expiring: {{x}} day left",
                            live_streaming_voucher_expiring_days: "Expiring: {{x}} days left",
                            live_streaming_voucher_expiring_hour: "Expiring: {{x}} hour left",
                            live_streaming_voucher_expiring_hours: "Expiring: {{x}} hours left",
                            live_streaming_voucher_expiring_minute: "Expiring: {{x}} minute left",
                            live_streaming_voucher_expiring_minutes: "Expiring: {{x}} minutes left",
                            live_streaming_voucher_live_only: "Live Voucher",
                            live_streaming_voucher_multi_range_coin_cashback_percentage: "{lowest_reward} - {highest_reward} Cashback",
                            live_streaming_voucher_multi_range_coin_cashback_percentage_tw: "{lowest_reward} - {highest_reward} Cashback",
                            live_streaming_voucher_multi_range_discount_percentage: "{lowest_reward} - {highest_reward} off",
                            live_streaming_voucher_multi_range_discount_percentage_tw: "{lowest_reward} - {highest_reward} off",
                            live_streaming_voucher_multi_range_fixed_discount: "{lowest_reward} - {total_reward} off",
                            live_streaming_voucher_multi_range_fixed_discount_tw: "{lowest_reward} - {total_reward} off",
                            live_streaming_voucher_multi_up_cashback: "Up to {{val_discount}} Cashback",
                            live_streaming_voucher_multi_up_cashback_tw: "Up to {{val_discount}} Cashback",
                            live_streaming_voucher_multi_up_off: "Up to {{val_discount}} OFF",
                            live_streaming_voucher_multi_up_off_tw: "Gi\u1ea3m t\u1ed1i \u0111a {{val_discount}}",
                            live_streaming_voucher_multi_up_to_tw: "Up to",
                            live_streaming_voucher_no_available: "\xdai, Voucher n\xe0y kh\xf4ng \xe1p d\u1ee5ng cho b\u1ea5t k\xec s\u1ea3n ph\u1ea9m n\xe0o trong Live",
                            live_streaming_voucher_use_from: "Use from: {{date format}}",
                            live_streaming_voucher_use_in_day: "Use in: {{x}} day",
                            live_streaming_voucher_use_in_days: "Use in: {{x}} days",
                            live_streaming_voucher_use_in_hour: "Use in: {{x}} hour",
                            live_streaming_voucher_use_in_hours: "Use in: {{x}} hours",
                            live_streaming_voucher_use_in_minute: "Use in: {{x}} minute",
                            live_streaming_voucher_use_in_minutes: "Use in: {{x}} minutes",
                            live_streaming_voucher_valid_till: "Valid Till: {{date format}}",
                            live_streaming_watch_clip: "Watch Clip",
                            live_tab_coming_seeall: "Xem t\u1ea5t c\u1ea3",
                            live_tab_loading_error1: "T\u1ea3i kh\xf4ng th\xe0nh c\xf4ng",
                            live_tab_loading_error2: "H\xe3y th\u1eed l\u1ea1i sau",
                            live_tab_loading_error3: "Th\u1eed l\u1ea1i",
                            live_tab_manage_reminder: "L\u1eddi nh\u1eafc",
                            live_tab_network_error1: "L\u1ed7i m\u1ea1ng",
                            live_tab_network_error2: "L\u1ed7i m\u1ea1ng. Vui l\xf2ng ki\u1ec3m tra l\u1ea1i \u0111i\u1ec1u ki\u1ec7n m\u1ea1ng c\u1ee7a b\u1ea1n",
                            live_tab_network_error3: "Th\u1eed l\u1ea1i",
                            live_tab_nolive_myprofile: "\u0110ang kh\xf4ng di\u1ec5n ra bu\u1ed5i live n\xe0o",
                            live_tab_nolive_myprofile_subtitle: "B\u1ea1n ch\u01b0a c\xf3 bu\u1ed5i Live Stream n\xe0o.",
                            live_tab_nolive_otherprofile: "\u0110ang kh\xf4ng di\u1ec5n ra bu\u1ed5i live n\xe0o",
                            live_tab_nolive_otherprofile_subtitle: "Ng\u01b0\u1eddi d\xf9ng n\xe0y ch\u01b0a c\xf3 b\u1ea5t k\u1ef3 Live Stream n\xe0o.",
                            livestream_cover_cropping_hinttext: "C\xe1c th\xf4ng tin quan tr\u1ecdng ho\u1eb7c ph\u1ea7n h\xecnh \u1ea3nh n\u1ed5i b\u1eadt nh\u1ea5t n\xean \u0111\u01b0\u1ee3c \u0111\u1eb7t n\u1eb1m gi\u1eefa 2 \u0111\u01b0\u1eddng k\u1ebb d\u1ecdc.",
                            livestream_cover_cropping_save: "L\u01b0u",
                            livestream_cover_cropping_title: "C\u1eaft h\xecnh",
                            livestream_cover_guideline_title: "Guideline for qualified covers",
                            livestream_cover_lowquality_hint_askew: "A livestream cover with products shown correctly can attract more views.",
                            livestream_cover_lowquality_hint_blurry: "Blur images are not eligible for livestream covers. A cover with a large resolution can attract more views.",
                            livestream_cover_lowquality_hint_cluttered: "A livestream cover with well-organized and highlighted products can attract more views.",
                            livestream_cover_lowquality_hint_competitors: "Your livestream cover is detected to contain competitive information. Please check and change a new cover in the next livestream.",
                            livestream_cover_lowquality_hint_fake: "Your livestream cover is detected to contain fake information. Please check and change a new cover in the next livestream.",
                            livestream_cover_lowquality_hint_foreign_language: "The livestream cover containing foreign languages may cause confusion to your viewers. A cover with native language can attract more views.",
                            livestream_cover_lowquality_hint_inappropriate: "Your livestream cover is detected to contain inappropriate content. Please check and change a new cover in the next livestream.",
                            livestream_cover_lowquality_hint_irrelevant: "A livestream cover that is more relevant to your livestream content can attract more views.",
                            livestream_cover_lowquality_hint_lighting_abnormal: "Dark images are not eligible for livestream covers. A cover with good light can attract more views.",
                            livestream_cover_lowquality_hint_lowcost: "A better-quality cover can attract more views.",
                            livestream_cover_lowquality_hint_notprominent: "A livestream cover with products shown correctly can attract more views.",
                            livestream_cover_lowquality_hint_universal: "A livestream cover containing products or streamers of your livestream can attract more views.",
                            livestream_cover_lowquality_popup_change: "Change",
                            livestream_cover_lowquality_popup_ignore: "Ignore",
                            livestream_cover_lowquality_popup_title: "Low Quality Cover",
                            livestream_cover_preview: "Xem tr\u01b0\u1edbc",
                            livestream_cover_preview_portrait_ratio: "\u1ea2nh b\xeca Livestream s\u1ebd \u0111\u01b0\u1ee3c c\u1eaft theo t\u1ef7 l\u1ec7 2:3",
                            livestream_cover_preview_reminder_ratio: "\u1ea2nh b\xeca L\u1eddi nh\u1eafc s\u1ebd \u0111\u01b0\u1ee3c c\u1eaft theo t\u1ef7 l\u1ec7 1:1",
                            livestream_cover_preview_reminder_title: "Vui l\xf2ng kh\xf4ng \u0111\u1ec3 tr\u1ed1ng ti\xeau \u0111\u1ec1 L\u1eddi nh\u1eafc.",
                            livestream_cover_preview_square_ratio: "\u1ea2nh b\xeca Livestream s\u1ebd \u0111\u01b0\u1ee3c c\u1eaft theo t\u1ef7 l\u1ec7 1:1",
                            livestream_cover_preview_stream_title: "Vui l\xf2ng kh\xf4ng \u0111\u1ec3 tr\u1ed1ng ti\xeau \u0111\u1ec1 Livestream.",
                            livestream_cover_see_guideline_button: "See Guideline",
                            livestreaming: {
                                liveCancel: "Livestream \u0111\xe3 b\u1ecb h\u1ee7y.",
                                liveUnstart: "Livestream ch\u01b0a b\u1eaft \u0111\u1ea7u",
                                needUpgrade: "Vui l\xf2ng n\xe2ng c\u1ea5p phi\xean b\u1ea3n \u1ee9ng d\u1ee5ng Shopee \u0111\u1ec3 xem \u0111\u01b0\u1ee3c t\xednh n\u0103ng Shopee Live",
                                needUpgradeBtn: "\u0110ang n\xe2ng c\u1ea5p"
                            },
                            livestreaming_shop_discover_livestream_landing_error_prompt: "Kh\xf4ng th\u1ec3 g\u1eedi y\xeau c\u1ea7u, vui l\xf2ng th\u1eed l\u1ea1i sau.",
                            livestreaming_shop_discover_livestream_landing_full_list_reminder_no_content_prompt: "Kh\xf4ng c\xf3 l\u1eddi nh\u1eafc s\u1eafp di\u1ec5n ra.",
                            livestreaming_shop_discover_livestream_landing_no_content_prompt: "Kh\xf4ng c\xf3 Livestream",
                            livestreaming_shop_discover_livestream_landing_reminder: "S\u1eafp di\u1ec5n ra",
                            livestreaming_shop_discover_livestream_landing_reminder_see_all_button: "Xem t\u1ea5t c\u1ea3",
                            livestreaming_shop_discover_livestream_landing_replay: "Xem L\u1ea1i",
                            livestreaming_shop_discover_livestream_landing_title: "Livestream",
                            livestreaming_shop_discover_livestream_landing_watch_now_button: "Xem Ngay",
                            middlePage: {
                                noReplay: "Ch\u01b0a th\u1ec3 xem l\u1ea1i l\xfac n\xe0y",
                                title: "Shopee Live"
                            },
                            multipages_setup_frozen_user_tips: "R\u1ea5t ti\u1ebfc! T\xe0i kho\u1ea3n Shopee c\u1ee7a b\u1ea1n \u0111ang b\u1ecb kh\xf3a v\xe0 kh\xf4ng th\u1ec3 s\u1eed d\u1ee5ng t\xednh n\u0103ng Livestream cho t\u1edbi khi t\xe0i kho\u1ea3n \u0111\u01b0\u1ee3c m\u1edf l\u1ea1i.",
                            product: {
                                done: "Xong",
                                latest: "M\u1edbi nh\u1ea5t",
                                myLike: "\u0110\xe3 th\xedch",
                                myLikePlaceholder: "B\u1ea1n ch\u01b0a th\xedch s\u1ea3n ph\u1ea9m n\xe0o",
                                myShop: "Shop c\u1ee7a t\xf4i",
                                myShopPlaceholder: "Shop c\u1ee7a b\u1ea1n ch\u01b0a c\xf3 s\u1ea3n ph\u1ea9m n\xe0o",
                                popular: "Ph\u1ed5 bi\u1ebfn",
                                price: "Gi\xe1",
                                title: "Th\xeam s\u1ea3n ph\u1ea9m li\xean quan",
                                topSales: "B\xe1n ch\u1ea1y"
                            },
                            reminder: {
                                description: "Xem Livestream c\u1ee7a %s",
                                title: "Shopee Live"
                            },
                            setup: {
                                addCover: "Th\xeam \u1ea3nh b\xeca",
                                addDescription: "Nh\u1ea5n \u0111\u1ec3 th\xeam m\xf4 t\u1ea3 cho Livestream (t\xf9y ch\u1ecdn)",
                                addProducts: "Th\xeam s\u1ea3n ph\u1ea9m li\xean quan",
                                addTitle: "Nh\u1ea5n \u0111\u1ec3 th\xeam ti\xeau \u0111\u1ec1 Livestream (b\u1eaft bu\u1ed9c)",
                                changeCover: "\u0110\u1ed5i \u1ea3nh b\xeca",
                                createStreaming: "B\u1eaft \u0111\u1ea7u Livestream",
                                highlightError: "Th\xf4ng tin n\u1ed5i b\u1eadt \u0111\xe3 b\u1ecb x\xf3a. Vui l\xf2ng ch\u1ecdn th\xf4ng tin kh\xe1c.",
                                next: "TI\u1ebeP THEO",
                                noticeTip: "Before streaming, you should read this",
                                noticeTitle: "Instructions of Shopee Streaming",
                                productAdded: "s\u1ea3n ph\u1ea9m \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam",
                                productPlaceholder: "Th\xeam s\u1ea3n ph\u1ea9m t\u1eeb Shop c\u1ee7a b\u1ea1n v\xe0 c\xe1c s\u1ea3n ph\u1ea9m b\u1ea1n th\xedch v\xe0o Livestream",
                                productsAdded: "c\xe1c s\u1ea3n ph\u1ea9m \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam",
                                relatedProduct: "s\u1ea3n ph\u1ea9m li\xean quan",
                                relatedProducts: "s\u1ea3n ph\u1ea9m li\xean quan",
                                subaccount: {
                                    error: {
                                        inconsistent_region: "Trang n\xe0y kh\xf4ng c\xf3 s\u1eb5n trong \u1ee9ng d\u1ee5ng. Vui l\xf2ng chuy\u1ec3n sang app Shopee c\u1ee7a qu\u1ed1c gia b\u1ea1n \u0111\u1ec3 xem.",
                                        no_permission: "Kh\xf4ng c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o trang n\xe0y."
                                    }
                                }
                            },
                            share: {
                                Appicon: "Shopee Live",
                                liveEnd: "D\u1eebng Livestream",
                                liveTag: "LIVE",
                                openApp: "M\u1edf \u1ee9ng d\u1ee5ng Shopee",
                                relatedProducts: "s\u1ea3n ph\u1ea9m li\xean quan",
                                replayTag: "XEM L\u1ea0I",
                                showReplay: "Xem l\u1ea1i",
                                streamingpage: {
                                    cannotplay: {
                                        popup: "H\xe3y xem Livestream tr\xean  \u1ee9ng d\u1ee5ng Shopee \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m \u0111\u1ea7y \u0111\u1ee7 c\xe1c t\xednh n\u0103ng nh\xe9!"
                                    },
                                    commenttext: "B\u1ea1n \u0111ang ngh\u0129 g\xec...",
                                    follow: "Theo d\xf5i",
                                    hosttag: "Ng\u01b0\u1eddi ph\xe1t tr\u1ef1c ti\u1ebfp",
                                    mobiledata: {
                                        popup: "B\u1ea1n \u0111ang s\u1eed d\u1ee5ng d\u1eef li\u1ec7u di \u0111\u1ed9ng, h\xe3y b\u1eadt k\u1ebft n\u1ed1i wifi \u0111\u1ec3 tr\xe1nh ph\xe1t sinh chi ph\xed."
                                    },
                                    nointernet: {
                                        popup: "Kh\xf4ng c\xf3 k\u1ebft n\u1ed1i m\u1ea1ng"
                                    },
                                    nostream: {
                                        popup: "K\u1ebft n\u1ed1i kh\xf4ng th\xe0nh c\xf4ng."
                                    },
                                    playerload: {
                                        popup: {
                                            retrybutton: "Th\u1eed l\u1ea1i",
                                            retrytext: "K\u1ebft n\u1ed1i m\u1ea1ng y\u1ebfu. Vui l\xf2ng th\u1eed l\u1ea1i."
                                        }
                                    },
                                    popup: {
                                        closebutton: "\u0110\xf3ng",
                                        trybutton: "Th\u1eed l\u1ea1i"
                                    },
                                    producttitle: "S\u1ea3n ph\u1ea9m ({{product_cnt}})",
                                    producttitle_plural: "S\u1ea3n ph\u1ea9m ({{product_cnt}})"
                                },
                                viewer: "Ng\u01b0\u1eddi xem",
                                viewers: "Ng\u01b0\u1eddi xem"
                            },
                            snack_live_no_records: "Streamer have not added products yet.",
                            snack_live_streaming_ask_host_comment_with_number: "Please introduce item No.{{item_number}}{{item_title}}",
                            snack_live_streaming_ask_host_comment_without_number: "Please introduce item {{item_title}}",
                            snack_live_streaming_cashback: "{{cashback}} Cashback",
                            snack_live_streaming_claim: "Claim",
                            snack_live_streaming_claimed: "Claimed",
                            snack_live_streaming_claimed_tips: "Voucher claimed",
                            snack_live_streaming_discount_minspend_without_off: "Min.spend {{minspend}}",
                            snack_live_streaming_featured_item_buy_now: "Buy Now",
                            snack_live_streaming_host_product_title: "Products({{product_number}})",
                            snack_live_streaming_host_related_products_btn_showing: "Showing",
                            snack_live_streaming_host_voucher_already_claimed: "You have already claimed the voucher before.",
                            snack_live_streaming_host_voucher_upper_limit: "Claim failed, you have reached the claims limit",
                            snack_live_streaming_item_card_five_star_rating: "{{star_num}} five star ratings",
                            snack_live_streaming_item_card_rank_in_best_selling: "Rank in {{rank_name}} {{cluster_name}}",
                            snack_live_streaming_item_card_sales: "{{sold_num}} Sold",
                            snack_live_streaming_item_card_top_best_selling: "No.{{rank}} {{rank_name}} {{cluster_name}}",
                            snack_live_streaming_item_card_wholesale: "Wholesale",
                            snack_live_streaming_item_list_buy_now: "Buy Now",
                            snack_live_streaming_network_error: "Network error.",
                            snack_live_streaming_off: "{{discount_off}} Off",
                            snack_live_streaming_popup_voucher_card: "Claimed successfully, use now!",
                            snack_live_streaming_price_buy_now_button: "Buy Now",
                            snack_live_streaming_price_expiration_tips: "Expired when the stream ends",
                            snack_live_streaming_price_more_product_title: "More Products",
                            snack_live_streaming_price_psp: "Streaming Price",
                            snack_live_streaming_price_stock: "{{streaming_price_stock}} Left",
                            snack_live_streaming_price_tag: "Streaming Price",
                            snack_live_streaming_price_title: "Streaming Price",
                            snack_live_streaming_price_upcoming: "Upcoming {{PSP price}}",
                            snack_live_streaming_sold_out: "Sold Out",
                            snack_live_streaming_streaming_auto_card_tag: "HOT",
                            snack_live_streaming_streaming_room_auto_slide: "Skip to the next streaming after {{skip_time}}",
                            snack_live_streaming_streaming_room_network_error: "Network error, please check",
                            snack_live_streaming_streaming_room_service_provided_by_shopee: "Service provided by Shopee",
                            snack_live_streaming_streaming_room_slide_remind: "",
                            snack_live_streaming_tips_for_many_claiming: "So many users are claiming voucher now, please check your voucher wallet later.",
                            snack_live_streaming_txt_viewer: "{{viewer_count}} Viewer",
                            snack_live_streaming_txt_viewers: "{{viewers_count}} Viewers",
                            snack_live_streaming_viewer_msg_input_placeholder: "Comment",
                            snack_live_streaming_viewer_msg_input_placeholder_banned: "Comment is banned",
                            snack_live_streaming_viewer_msg_welcome: "Welcome to Shopee Live! Enjoy your time.",
                            snack_live_streaming_viewer_no_product_added_now: "Streamer have not added products yet.",
                            snack_live_streaming_viewer_product_card_hot: "HOT",
                            snack_live_streaming_viewer_slide_ending_page: "The session is over",
                            snack_live_streaming_viewer_voucher_misschance: "Too many users are claiming voucher, sorry you missed the chance.",
                            snack_live_streaming_voucher_freeshipping: "Free Shipping",
                            snack_live_streaming_voucher_label_jko_pay: "JKO Pay Only",
                            snack_live_streaming_voucher_label_new_user: "New User Only",
                            snack_live_streaming_voucher_label_shopeepay: "Shopee Pay Only",
                            snack_live_streaming_voucher_label_shopeepay_later: "ShopeePayLater Only",
                            snack_live_streaming_voucher_label_video_only: "Video Only",
                            snack_live_streaming_voucher_live_only: "Live Only",
                            snack_live_streaming_voucher_minspeed: "Min.spend",
                            snack_live_streaming_voucher_scope_limit: "Sorry, you do not meet the requirements to claim or use the voucher",
                            snack_live_streaming_voucher_title: "Voucher",
                            snack_msg_voucher_wallet_already_used: "Sorry, you have already used this code. Please try again with another voucher.",
                            snack_msg_voucher_wallet_code_expired: "Sorry, this voucher has expired.",
                            snack_msg_voucher_wallet_from_seller_own_shop: "Sorry, you cannot use voucher for your own shop.",
                            snack_msg_voucher_wallet_invalid: "Sorry, this voucher is invalid. Please try another one.",
                            snack_msg_voucher_wallet_invalid_country: "Sorry, this voucher is invalid. Please try another one.",
                            snack_msg_voucher_wallet_min_bucket_not_met_after_voucher: "Sorry, the code is invalid. Please try again.",
                            snack_msg_voucher_wallet_min_bucket_not_met_maybe_category: "Sorry, this voucher is invalid. Please try again.",
                            snack_msg_voucher_wallet_min_bucket_not_met_maybe_seller_promotion: "Sorry, the code is invalid. Please try again.",
                            snack_msg_voucher_wallet_no_quota: "Sorry, this voucher has been fully redeemed.",
                            snack_msg_voucher_wallet_not_start_to_claim: "Claim time has not started. Please claim later.",
                            snack_msg_voucher_wallet_not_started: "Sorry, the voucher is not valid yet. Please check the voucher details.",
                            snack_msg_voucher_wallet_ua_no_match: "Sorry, this voucher is invalid. Please try again.",
                            snack_msg_voucher_wallet_unknown: "Sorry, this voucher is invalid. Please try another one.",
                            snack_msg_voucher_wallet_voucher_not_found: "Sorry, the code is invalid. Please try again.",
                            snack_msg_voucher_wallet_wrong_code: "Sorry, the code is invalid. Please try again.",
                            snack_voucher_cashback: "{{val_cashback}} cashback",
                            snack_voucher_discount_minspend_and_cap_without_off: "Min.spend {{val_minSpend}} Cap at {{val_capped}}",
                            snack_voucher_discount_minspend_and_cap_without_off_coins: "Min.spend {{val_minSpend}} Cap at {{val_capped}} coins",
                            snack_voucher_discount_minspend_without_off: "Min.spend {{val_minSpend}}",
                            snack_voucher_free_shipping: "Free Shipping",
                            snack_voucher_off: "{{val_discount}} OFF",
                            time_picker_april: "Th4",
                            time_picker_august: "Th8",
                            time_picker_december: "Th12",
                            time_picker_february: "Th2",
                            time_picker_january: "Th1",
                            time_picker_july: "Th7",
                            time_picker_june: "Th6",
                            time_picker_march: "Th3",
                            time_picker_may: "Th5",
                            time_picker_november: "Th11",
                            time_picker_october: "Th10",
                            time_picker_september: "Th9",
                            toast: {
                                addReminderFailed: "Kh\xf4ng th\u1ec3 th\xeam nh\u1eafc nh\u1edf",
                                cancelReminderFailed: "Kh\xf4ng th\u1ec3 h\u1ee7y nh\u1eafc nh\u1edf",
                                containProhibited: "Ti\xeau \u0111\u1ec1 ho\u1eb7c m\xf4 t\u1ea3 ch\u1ee9a t\u1eeb ng\u1eef kh\xf4ng ph\xf9 h\u1ee3p. Vui l\xf2ng s\u1eeda l\u1ea1i.",
                                noLiveAuth: "Xin l\u1ed7i, b\u1ea1n kh\xf4ng th\u1ec3 ph\xe1t Livestream ngay b\xe2y gi\u1edd",
                                overLimit: "T\u1ed1i \u0111a %s s\u1ea3n ph\u1ea9m",
                                remindSuccess: "M\u1ed9t l\u1eddi nh\u1eafc s\u1ebd \u0111\u01b0\u1ee3c g\u1eedi khi Livestream b\u1eaft \u0111\u1ea7u",
                                requestFailed: "Kh\xf4ng th\u1ec3 g\u1eedi y\xeau c\u1ea7u, vui l\xf2ng th\u1eed l\u1ea1i sau."
                            },
                            top_selling_cover_sold_tag: "\u0110\xe3 b\xe1n {{number}}",
                            voucher_cashback: "Ho\xe0n {{val_cashback}} Shopee Xu",
                            voucher_free_shipping: "Mi\u1ec5n Ph\xed V\u1eadn Chuy\u1ec3n",
                            voucher_free_shipping_PH: "Shipping Discount",
                            voucher_off: "Gi\u1ea3m {{val_discount}}",
                            voucher_off_tw: "{{val_discount}} Off"
                        }
                    }
                }
            }
              , r = (n.lngs,
            "live")
              , _ = "vn"
              , a = !1
              , o = (e.env.PROXY_COOKIE,
            "v_1.0_20240624")
              , s = "/multipages"
        }
        ).call(this, i("8oxB"))
    },
    U8pU: function(e, t, i) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        i.d(t, "a", (function() {
            return n
        }
        ))
    },
    cBaE: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "c", (function() {
                return p
            }
            )),
            i.d(t, "t", (function() {
                return u
            }
            )),
            i.d(t, "w", (function() {
                return d
            }
            )),
            i.d(t, "i", (function() {
                return y
            }
            )),
            i.d(t, "E", (function() {
                return b
            }
            )),
            i.d(t, "d", (function() {
                return v
            }
            )),
            i.d(t, "z", (function() {
                return k
            }
            )),
            i.d(t, "p", (function() {
                return S
            }
            )),
            i.d(t, "x", (function() {
                return x
            }
            )),
            i.d(t, "G", (function() {
                return T
            }
            )),
            i.d(t, "b", (function() {
                return A
            }
            )),
            i.d(t, "a", (function() {
                return N
            }
            )),
            i.d(t, "C", (function() {
                return f
            }
            )),
            i.d(t, "q", (function() {
                return w
            }
            )),
            i.d(t, "l", (function() {
                return L
            }
            )),
            i.d(t, "H", (function() {
                return C
            }
            )),
            i.d(t, "F", (function() {
                return O
            }
            )),
            i.d(t, "I", (function() {
                return E
            }
            )),
            i.d(t, "s", (function() {
                return P
            }
            )),
            i.d(t, "y", (function() {
                return B
            }
            )),
            i.d(t, "g", (function() {
                return H
            }
            )),
            i.d(t, "D", (function() {
                return V
            }
            )),
            i.d(t, "j", (function() {
                return D
            }
            )),
            i.d(t, "v", (function() {
                return I
            }
            )),
            i.d(t, "m", (function() {
                return R
            }
            )),
            i.d(t, "n", (function() {
                return q
            }
            )),
            i.d(t, "k", (function() {
                return j
            }
            )),
            i.d(t, "B", (function() {
                return G
            }
            )),
            i.d(t, "A", (function() {
                return F
            }
            )),
            i.d(t, "f", (function() {
                return K
            }
            )),
            i.d(t, "e", (function() {
                return U
            }
            )),
            i.d(t, "u", (function() {
                return W
            }
            )),
            i.d(t, "r", (function() {
                return Q
            }
            )),
            i.d(t, "o", (function() {
                return J
            }
            )),
            i.d(t, "h", (function() {
                return Y
            }
            ));
            var n = i("HaE+")
              , r = i("rePB")
              , _ = i("o0o1")
              , a = i.n(_)
              , o = i("+SFn")
              , s = i("Bk8j")
              , c = i("Olgw")
              , l = i.n(c)
              , m = i("SyLE")
              , h = i("kWRe");
            function g(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    i.push.apply(i, n)
                }
                return i
            }
            var p = {
                SHOPEE_ACCOUNT: 0,
                SELLER_SUB_ACCOUNT: 1
            }
              , u = function(e) {
                return {
                    ph: "".concat(e, "_ph"),
                    my: "".concat(e, "_my"),
                    sg: "".concat(e, "_sg"),
                    id: e
                }[m.b] || e
            };
            function d() {
                var e = window.visualViewport
                  , t = document.documentElement;
                return e && navigator.userAgent.includes("Android") ? {
                    left: e.pageLeft,
                    top: e.pageTop,
                    width: e.width,
                    height: e.height
                } : {
                    left: window.pageXOffset,
                    top: window.pageYOffset,
                    width: window.innerWidth || t.clientWidth,
                    height: window.innerHeight || t.clientHeight
                }
            }
            var v, f = "undefined" !== typeof window.document, y = ("object" === typeof self && self.constructor && self.constructor.name,
            "undefined" !== typeof e && null != e.versions && e.versions.node,
            function(e) {
                var t = e.date
                  , i = e.month
                  , n = e.year
                  , r = e.hour
                  , _ = e.minute;
                switch (m.b) {
                case "sg":
                case "id":
                case "my":
                    return e;
                case "ph":
                    return {
                        month: i,
                        date: t,
                        year: n,
                        hour: r,
                        minute: _
                    };
                case "tw":
                    return {
                        year: n,
                        month: i,
                        date: t,
                        hour: r,
                        minute: _
                    };
                case "th":
                    return e;
                case "vn":
                    return {
                        hour: r,
                        minute: _,
                        date: t,
                        month: i,
                        year: n
                    };
                case "br":
                    return e;
                case "ir":
                    return {
                        year: n,
                        month: i,
                        date: t,
                        hour: r,
                        minute: _
                    };
                case "mm":
                    return e;
                case "hk":
                    return {
                        year: n,
                        month: i,
                        date: t,
                        hour: r,
                        minute: _
                    };
                case "mx":
                default:
                    return e
                }
            }
            ), b = function(e) {
                var t = y(e)
                  , i = {};
                return Object.keys(t).forEach((function(t) {
                    e[t] && (i[t] = e[t])
                }
                )),
                i
            };
            function w() {
                if (!f)
                    return v.unknown;
                var e = navigator.userAgent || navigator.vendor || window.opera;
                return /windows phone/i.test(e) ? v.WindowsPhone : /android/i.test(e) ? v.Android : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? v.iOS : v.unknown
            }
            !function(e) {
                e.WindowsPhone = "Windows Phone",
                e.Android = "Android",
                e.iOS = "iOS",
                e.unknown = "unknown"
            }(v || (v = {}));
            !function() {
                var e = !1;
                f && "function" === typeof o.d && Object(o.d)("isInWKWebView").then((function(t) {
                    t && Object(o.k)().then((function(t) {
                        e = t
                    }
                    ))
                }
                ))
            }();
            var k = /(\?|&)from_page=seller_assistant_platform(&|$)/.test(window.location.search) || !!(window.navigator && window.navigator.userAgent && window.navigator.userAgent.toLowerCase().includes("sellerapp"))
              , S = function() {
                return k
            }
              , x = !!(window.navigator && window.navigator.userAgent && window.navigator.userAgent.toLowerCase().includes("beeshop"))
              , T = function(e) {
                if ("string" !== typeof e)
                    return Object.create(null);
                var t = function(e) {
                    if ("string" !== typeof e)
                        return e;
                    e = (e = e.replace(/\+/g, " ")).trim();
                    try {
                        e = decodeURIComponent(e)
                    } catch (t) {}
                    return e
                }
                  , i = function(e, i, n) {
                    e = t(e),
                    i = t(i),
                    "" !== e && Object.assign(n, Object(r.a)({}, e, void 0 === n[e] ? i : [].concat(n[e], i)))
                };
                return (e = e.trim().replace(/^[?#&]/, "")).split("&").reduce((function(e, t) {
                    if ("" === t)
                        return e;
                    var n = t.indexOf("=");
                    if (-1 === n) {
                        i(t, null, e)
                    } else if (0 === n)
                        ;
                    else if (n > 0) {
                        var r = t.slice(0, n)
                          , _ = t.slice(n + 1);
                        i(r, _, e)
                    }
                    return e
                }
                ), Object.create(null))
            }
              , L = function(e) {
                return e ? "".concat(s.m, "/").concat(e, "_tn") : l.a
            }
              , P = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return e ? "".concat(s.m, "/").concat(e).concat(t ? "_tn" : "") : ""
            }
              , C = function() {
                var e = Object(n.a)(a.a.mark((function e(t) {
                    return a.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                new Promise((function(e) {
                                    setTimeout((function() {
                                        e()
                                    }
                                    ), t)
                                }
                                ));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function O(e, t) {
                var i = t || "/"
                  , n = new RegExp("".concat(i, "{1,}"),"g");
                return e.join(i).replace(n, i)
            }
            function E(e) {
                var t = window.location
                  , i = "";
                f && (i = "".concat(t.protocol, "//").concat(t.host));
                var n = e.replace(/^(\/{1,})(.*)/, "$2");
                return n ? "".concat(i, "/").concat(n) : i
            }
            var B = function() {
                return /(iphone|android)/.test(navigator.userAgent.toLowerCase()) && document.documentElement.clientWidth > document.documentElement.clientHeight
            }
              , A = "".concat(window.location.protocol, "//").concat(window.location.host)
              , N = "/api/v1";
            function H(e, t) {
                var i = e.match(/(\?[^#]*)#*/)
                  , n = i && i[1] ? i[1] : ""
                  , r = "".concat(n).concat(n ? "&" : "?").concat(t);
                if (n)
                    return e.replace(n, r);
                var _ = e.split("#");
                return _[0].concat(r).concat(_[1] || "")
            }
            var V = function() {
                var e = !1;
                try {
                    var t = {};
                    Object.defineProperty(t, "passive", {
                        get: function() {
                            e = !0
                        }
                    }),
                    window.addEventListener("test-passive", null, t)
                } catch (i) {}
                return e
            }
              , D = function(e) {
                var t = parseInt(e);
                return isNaN(t) && (t = 0),
                t
            }
              , I = function() {
                for (var e = null, t = document.cookie.split(";"), i = 0; i < t.length; ++i) {
                    var n = t[i];
                    if (n.includes("SPC_U"))
                        if (!isNaN(parseInt(n.slice(7)))) {
                            e = parseInt(n.slice(7));
                            break
                        }
                }
                return e
            }
              , R = function() {
                switch (w()) {
                case v.Android:
                    return 0;
                case v.iOS:
                    return 1;
                default:
                    return 2
                }
            }
              , q = function() {
                var e = w()
                  , t = v.Android === e
                  , i = v.iOS === e;
                return t && x ? 5 : i && x ? 6 : t && !x ? 7 : i && !x ? 8 : 9
            }
              , j = function(e) {
                var t = e.universalLink
                  , i = e.targetLink
                  , n = e.linkSearch
                  , r = void 0 === n ? {} : n
                  , _ = e.linkHash
                  , a = void 0 === _ ? "" : _
                  , o = Object.keys(r).reduce((function(e, t, i) {
                    return e += (0 === i ? "?" : "&") + "".concat(t, "=").concat(r[t])
                }
                ), i) + a;
                return "https://live.shopee.vn/share?session="+r.id
            }
              , G = w() === v.Android;
            function F(e, t) {
                return e.includes(t)
            }
            var K = 29200
              , X = "undefined" !== typeof navigator ? /rnver=(\d+)/.exec(navigator.userAgent) : null
              , M = X ? X[1] : ""
              , U = Number(Object(h.a)("shopee_rn_version")) || Number(M);
            function W(e) {
                for (var t = window.location.search.substring(1).split("&"), i = 0; i < t.length; i++) {
                    var n = t[i].split("=");
                    if (n[0] === e)
                        return n[1]
                }
                return !1
            }
            var Q = function() {
                var e = I()
                  , t = {
                    location: 0,
                    moderator_permissions: {}
                };
                try {
                    var i = decodeURIComponent(W("track") || "{}")
                      , n = Number(W("host_id")) || 0;
                    t = JSON.parse(i),
                    n > 0 && (t.streamer_id = n),
                    delete t.location
                } catch (_) {}
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(i), !0).forEach((function(t) {
                            Object(r.a)(e, t, i[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : g(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }
                        ))
                    }
                    return e
                }({
                    moderator_user_id: e
                }, t)
            }
              , J = function() {
                try {
                    return JSON.parse(decodeURIComponent(W("track") || "{}"))
                } catch (e) {}
                return {}
            };
            function Y(e) {
                return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\u203C|\u2049|\u20E3|\u2122|\u2139|\u2194-\u2199|\u21A9-\u21AA|\u231A-\u231B|\u2328|\u23CF|\u23E9-\u23F3|\u23F8-\u23FA|\u24C2|\u25AA-\u25AB|\u25B6|\u25C0|\u25FB-\u25FE|\u2600-\u2604|\u260E|\u2611|\u2614-\u2615|\u2618|\u261D|\u2620|\u2622-\u2623|\u2626|\u262A|\u262E-\u262F|\u2638-\u263A|\u2640|\u2642|\u2648-\u2653|\u2660|\u2663|\u2665-\u2666|\u2668|\u267B|\u267E-\u267F|\u2692-\u2697|\u2699|\u269B-\u269C|\u26A0-\u26A1|\u26AA-\u26AB|\u26B0-\u26B1|\u26BD-\u26BE|\u26C4-\u26C5|\u26C8|\u26CE-\u26CF|\u26D1|\u26D3-\u26D4|\u26E9-\u26EA|\u26F0-\u26F5|\u26F7-\u26FA|\u26FD|\u2702|\u2705|\u2708-\u270D|\u270F|\u2712|\u2714|\u2716|\u271D|\u2721|\u2728|\u2733-\u2734|\u2744|\u2747|\u274C|\u274E|\u2753-\u2755|\u2757|\u2763-\u2764|\u2795-\u2797|\u27A1|\u27B0|\u27BF|\u2934-\u2935|\u2B05-\u2B07|\u2B1B-\u2B1C|\u2B50|\u2B55|\u3030|\u303D|\u3297|\u3299\u200D/g, "")
            }
        }
        ).call(this, i("8oxB"))
    },
    cDf5: function(e, t) {
        function i(t) {
            return e.exports = i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            i(t)
        }
        e.exports = i,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    e4HC: function(e, t, i) {
        "use strict";
        var n, r, _, a, o, s, c, l, m;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.androidAppDownloadLink = t.iosAppDownloadLink = t.googlePlayId = t.appleStoreId = t.shareOptions = t.isoCodes = t.locales = t.domain = t.tld = t.Region = void 0,
        function(e) {
            e.xx = "xx",
            e.id = "id",
            e.my = "my",
            e.ph = "ph",
            e.sg = "sg",
            e.tw = "tw",
            e.th = "th",
            e.vn = "vn",
            e.br = "br",
            e.mx = "mx",
            e.cl = "cl",
            e.co = "co",
            e.ir = "ir",
            e.mm = "mm",
            e.hk = "hk"
        }(m = t.Region || (t.Region = {})),
        t.tld = ((n = {})[m.xx] = "systems",
        n[m.id] = "co.id",
        n[m.my] = "com.my",
        n[m.ph] = "ph",
        n[m.sg] = "sg",
        n[m.tw] = "tw",
        n[m.th] = "co.th",
        n[m.vn] = "vn",
        n[m.br] = "com.br",
        n);
        var h = "shopee";
        t.domain = ((r = {})[m.xx] = h + "." + t.tld.xx,
        r[m.id] = h + "." + t.tld.id,
        r[m.my] = h + "." + t.tld.my,
        r[m.ph] = h + "." + t.tld.ph,
        r[m.sg] = h + "." + t.tld.sg,
        r[m.tw] = h + "." + t.tld.tw,
        r[m.th] = h + "." + t.tld.th,
        r[m.vn] = h + "." + t.tld.vn,
        r[m.br] = h + "." + t.tld.br,
        r),
        t.locales = ((_ = {})[m.xx] = ["en"],
        _[m.id] = ["id-ID", "en"],
        _[m.my] = ["en", "ms-MY", "zh-Hans"],
        _[m.ph] = ["en"],
        _[m.sg] = ["en"],
        _[m.tw] = ["zh-Hant"],
        _[m.th] = ["th-TH"],
        _[m.vn] = ["vi-VN"],
        _[m.br] = ["pt-BR", "en"],
        _),
        t.isoCodes = {
            en: "en",
            "zh-Hant": "zh-Hant",
            "zh-Hans": "zh-Hans",
            "ms-MY": "ms-my",
            "th-TH": "th",
            "vi-VN": "vi",
            "id-ID": "id",
            "pt-BR": "pt-BR"
        },
        t.shareOptions = ((a = {})[m.xx] = [],
        a[m.sg] = ["whatsapp", "facebookMessenger", "twitter", "lineChat", "facebookLink", "instagram"],
        a[m.my] = ["whatsapp", "facebookMessenger", "lineChat", "facebookLink", "instagram", "twitter"],
        a[m.th] = ["lineChat", "facebookMessenger", "twitter", "facebookLink", "instagram", "whatsapp"],
        a[m.tw] = ["lineChat", "facebookMessenger", "whatsapp", "facebookLink", "instagram"],
        a[m.id] = ["whatsapp", "lineChat", "facebookLink", "instagram", "facebookMessenger", "twitter"],
        a[m.vn] = ["facebookMessenger", "whatsapp", "facebookLink", "instagram"],
        a[m.ph] = ["facebookMessenger", "facebookLink", "whatsapp", "lineChat", "instagram", "twitter"],
        a[m.br] = ["whatsapp", "instagram", "facebookLink", "facebookMessenger", "twitter", "lineChat", "telegram"],
        a),
        t.appleStoreId = ((o = {})[m.sg] = "959840394",
        o[m.my] = "959841113",
        o[m.th] = "959841453",
        o[m.vn] = "959841449",
        o[m.ph] = "959841854",
        o[m.tw] = "959841107",
        o[m.id] = "959841443",
        o[m.ir] = "1035494069",
        o[m.hk] = "1041872355",
        o[m.mm] = "1041872355",
        o[m.br] = "1481812175",
        o[m.mx] = "1540749085",
        o[m.co] = "1554257433",
        o[m.cl] = "1554257918",
        o),
        t.googlePlayId = ((s = {})[m.sg] = "com.shopee.sg",
        s[m.my] = "com.shopee.my",
        s[m.th] = "com.shopee.th",
        s[m.vn] = "com.shopee.vn",
        s[m.ph] = "com.shopee.ph",
        s[m.tw] = "com.shopee.tw",
        s[m.id] = "com.shopee.id",
        s[m.br] = "com.shopee.br",
        s),
        t.iosAppDownloadLink = ((c = {})[m.sg] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.sg + "?mt=8",
        c[m.my] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.my + "?mt=8",
        c[m.th] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.th + "?mt=8",
        c[m.vn] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.vn + "?mt=8",
        c[m.ph] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.ph + "?mt=8",
        c[m.tw] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.tw + "?mt=8",
        c[m.id] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.id + "?mt=8",
        c[m.ir] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.ir + "?mt=8",
        c[m.hk] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.hk + "?mt=8",
        c[m.mm] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.mm + "?mt=8",
        c[m.br] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.br + "?mt=8",
        c[m.mx] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.mx + "?mt=8",
        c[m.co] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.co + "?mt=8",
        c[m.cl] = "https://itunes.apple.com/my/app/id" + t.appleStoreId.cl + "?mt=8",
        c),
        t.androidAppDownloadLink = ((l = {})[m.sg] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.sg + "&referrer=af_tranid%3D2BZOxubH0RJZMV8iqvmiYQ%26pid%3DOrganicA%26c%3Dlp_home_and1",
        l[m.my] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.my + "&referrer=af_tranid%3DZPoWZKWO_aJuSqfj4uXOCw%26pid%3DOrganicA%26c%3Dlp_home_and1",
        l[m.th] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.th + "&referrer=af_tranid%3DD242rhhdn0-0WykpTPa4pQ%26pid%3DOrganicA%26c%3Dlp_home_and1",
        l[m.vn] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.vn + "&referrer=af_tranid%3Drsx9V4J79OX3NH5LwyqLcw%26pid%3DOrganicA%26c%3Dlp_home_and1",
        l[m.ph] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.ph + "&referrer=af_tranid%3DHMLRSYBJEMQMzb43gtsh9A%26pid%3DOrganicA%26c%3Dlp_home_and1",
        l[m.tw] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.tw + "&referrer=af_tranid%3D90IcsvE7nZoGhsQtahvDkA%26pid%3DOrganicA%26c%3Dlp_home_and1",
        l[m.id] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.id + "&referrer=af_tranid%3DFEBhiWFdxnOnCMVmtHxjug%26pid%3DOrganicA%26c%3Dlp_home_and1",
        l[m.br] = "https://play.google.com/store/apps/details?id=" + t.googlePlayId.br,
        l)
    },
    fsL8: function(e, t, i) {
        var n = i("cDf5").default;
        function r() {
            "use strict";
            e.exports = r = function() {
                return i
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports;
            var t, i = {}, _ = Object.prototype, a = _.hasOwnProperty, o = Object.defineProperty || function(e, t, i) {
                e[t] = i.value
            }
            , s = "function" == typeof Symbol ? Symbol : {}, c = s.iterator || "@@iterator", l = s.asyncIterator || "@@asyncIterator", m = s.toStringTag || "@@toStringTag";
            function h(e, t, i) {
                return Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                h({}, "")
            } catch (t) {
                h = function(e, t, i) {
                    return e[t] = i
                }
            }
            function g(e, t, i, n) {
                var r = t && t.prototype instanceof y ? t : y
                  , _ = Object.create(r.prototype)
                  , a = new A(n || []);
                return o(_, "_invoke", {
                    value: C(e, i, a)
                }),
                _
            }
            function p(e, t, i) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, i)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            i.wrap = g;
            var u = "suspendedStart"
              , d = "executing"
              , v = "completed"
              , f = {};
            function y() {}
            function b() {}
            function w() {}
            var k = {};
            h(k, c, (function() {
                return this
            }
            ));
            var S = Object.getPrototypeOf
              , x = S && S(S(N([])));
            x && x !== _ && a.call(x, c) && (k = x);
            var T = w.prototype = y.prototype = Object.create(k);
            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    h(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function P(e, t) {
                function i(r, _, o, s) {
                    var c = p(e[r], e, _);
                    if ("throw" !== c.type) {
                        var l = c.arg
                          , m = l.value;
                        return m && "object" == n(m) && a.call(m, "__await") ? t.resolve(m.__await).then((function(e) {
                            i("next", e, o, s)
                        }
                        ), (function(e) {
                            i("throw", e, o, s)
                        }
                        )) : t.resolve(m).then((function(e) {
                            l.value = e,
                            o(l)
                        }
                        ), (function(e) {
                            return i("throw", e, o, s)
                        }
                        ))
                    }
                    s(c.arg)
                }
                var r;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function _() {
                            return new t((function(t, r) {
                                i(e, n, t, r)
                            }
                            ))
                        }
                        return r = r ? r.then(_, _) : _()
                    }
                })
            }
            function C(e, i, n) {
                var r = u;
                return function(_, a) {
                    if (r === d)
                        throw new Error("Generator is already running");
                    if (r === v) {
                        if ("throw" === _)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = _,
                    n.arg = a; ; ) {
                        var o = n.delegate;
                        if (o) {
                            var s = O(o, n);
                            if (s) {
                                if (s === f)
                                    continue;
                                return s
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === u)
                                throw r = v,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = d;
                        var c = p(e, i, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? v : "suspendedYield",
                            c.arg === f)
                                continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = v,
                        n.method = "throw",
                        n.arg = c.arg)
                    }
                }
            }
            function O(e, i) {
                var n = i.method
                  , r = e.iterator[n];
                if (r === t)
                    return i.delegate = null,
                    "throw" === n && e.iterator.return && (i.method = "return",
                    i.arg = t,
                    O(e, i),
                    "throw" === i.method) || "return" !== n && (i.method = "throw",
                    i.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    f;
                var _ = p(r, e.iterator, i.arg);
                if ("throw" === _.type)
                    return i.method = "throw",
                    i.arg = _.arg,
                    i.delegate = null,
                    f;
                var a = _.arg;
                return a ? a.done ? (i[e.resultName] = a.value,
                i.next = e.nextLoc,
                "return" !== i.method && (i.method = "next",
                i.arg = t),
                i.delegate = null,
                f) : a : (i.method = "throw",
                i.arg = new TypeError("iterator result is not an object"),
                i.delegate = null,
                f)
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function B(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(E, this),
                this.reset(!0)
            }
            function N(e) {
                if (e || "" === e) {
                    var i = e[c];
                    if (i)
                        return i.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var r = -1
                          , _ = function i() {
                            for (; ++r < e.length; )
                                if (a.call(e, r))
                                    return i.value = e[r],
                                    i.done = !1,
                                    i;
                            return i.value = t,
                            i.done = !0,
                            i
                        };
                        return _.next = _
                    }
                }
                throw new TypeError(n(e) + " is not iterable")
            }
            return b.prototype = w,
            o(T, "constructor", {
                value: w,
                configurable: !0
            }),
            o(w, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = h(w, m, "GeneratorFunction"),
            i.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            i.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w,
                h(e, m, "GeneratorFunction")),
                e.prototype = Object.create(T),
                e
            }
            ,
            i.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            L(P.prototype),
            h(P.prototype, l, (function() {
                return this
            }
            )),
            i.AsyncIterator = P,
            i.async = function(e, t, n, r, _) {
                void 0 === _ && (_ = Promise);
                var a = new P(g(e, t, n, r),_);
                return i.isGeneratorFunction(t) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            L(T),
            h(T, m, "Generator"),
            h(T, c, (function() {
                return this
            }
            )),
            h(T, "toString", (function() {
                return "[object Generator]"
            }
            )),
            i.keys = function(e) {
                var t = Object(e)
                  , i = [];
                for (var n in t)
                    i.push(n);
                return i.reverse(),
                function e() {
                    for (; i.length; ) {
                        var n = i.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            i.values = N,
            A.prototype = {
                constructor: A,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(B),
                    !e)
                        for (var i in this)
                            "t" === i.charAt(0) && a.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var i = this;
                    function n(n, r) {
                        return o.type = "throw",
                        o.arg = e,
                        i.next = n,
                        r && (i.method = "next",
                        i.arg = t),
                        !!r
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var _ = this.tryEntries[r]
                          , o = _.completion;
                        if ("root" === _.tryLoc)
                            return n("end");
                        if (_.tryLoc <= this.prev) {
                            var s = a.call(_, "catchLoc")
                              , c = a.call(_, "finallyLoc");
                            if (s && c) {
                                if (this.prev < _.catchLoc)
                                    return n(_.catchLoc, !0);
                                if (this.prev < _.finallyLoc)
                                    return n(_.finallyLoc)
                            } else if (s) {
                                if (this.prev < _.catchLoc)
                                    return n(_.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < _.finallyLoc)
                                    return n(_.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var n = this.tryEntries[i];
                        if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var r = n;
                            break
                        }
                    }
                    r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                    var _ = r ? r.completion : {};
                    return _.type = e,
                    _.arg = t,
                    r ? (this.method = "next",
                    this.next = r.finallyLoc,
                    f) : this.complete(_)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    f
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.finallyLoc === e)
                            return this.complete(i.completion, i.afterLoc),
                            B(i),
                            f
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.tryLoc === e) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                B(i)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, i, n) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: i,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    f
                }
            },
            i
        }
        e.exports = r,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    kWRe: function(e, t, i) {
        "use strict";
        var n = i("cBaE");
        t.a = function(e) {
            if (!n.C)
                return "";
            for (var t = e + "=", i = document.cookie.split(";"), r = 0; r < i.length; r++) {
                var _ = i[r].trim();
                if (0 === _.indexOf(t))
                    return _.substring(t.length, _.length)
            }
            return ""
        }
    },
    o0o1: function(e, t, i) {
        var n = i("fsL8")();
        e.exports = n;
        try {
            regeneratorRuntime = n
        } catch (r) {
            "object" === typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
        }
    },
    o46R: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return r
        }
        ));
        var n = i("U8pU");
        function r(e) {
            var t = function(e, t) {
                if ("object" !== Object(n.a)(e) || null === e)
                    return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var r = i.call(e, t || "default");
                    if ("object" !== Object(n.a)(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Object(n.a)(t) ? t : String(t)
        }
    },
    rePB: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return r
        }
        ));
        var n = i("o46R");
        function r(e, t, i) {
            return (t = Object(n.a)(t))in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
    },
    vuIU: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return _
        }
        ));
        var n = i("o46R");
        function r(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Object(n.a)(r.key), r)
            }
        }
        function _(e, t, i) {
            return t && r(e.prototype, t),
            i && r(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
    }
}]);
//# db5e8076bafaf42fcf92587dd17e0696da542050.625645a2504bd7da60d1.js.map
