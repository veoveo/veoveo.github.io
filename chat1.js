//hello
(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[21], {
    "0LPd": function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() {
            return u
        }
        )),
        r.d(t, "e", (function() {
            return f
        }
        )),
        r.d(t, "a", (function() {
            return l
        }
        )),
        r.d(t, "b", (function() {
            return d
        }
        )),
        r.d(t, "d", (function() {
            return y
        }
        ));
        var n = r("ODXe")
          , i = r("HaE+")
          , o = r("o0o1")
          , s = r.n(o)
          , a = (r("vDqi"),
        r("cBaE"),
        r("xds5"));
        r("w/Rt");
        function u(e) {
            return c.apply(this, arguments)
        }
        function c() {
            return (c = Object(i.a)(s.a.mark((function e(t) {
                var r, i, o, u, c, f;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a.b.get("/session/".concat(t));
                        case 2:
                            return r = e.sent,
                            i = Object(n.a)(r, 2),
                            o = i[0],
                            u = i[1],
                            o || ((c = null !== (f = null === u || void 0 === u ? void 0 : u.session) && void 0 !== f ? f : {}).play_urls = u.play_urls),
                            e.abrupt("return", [o, c]);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function f(e, t) {
            return p.apply(this, arguments)
        }
        function p() {
            return (p = Object(i.a)(s.a.mark((function e(t, r) {
                var i, o, u, c, f;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return i = {
                                uuid: r,
                                ver: 1
                            },
                            e.next = 3,
                            a.b.post("session/".concat(t, "/join"), i);
                        case 3:
                            return o = e.sent,
                            u = Object(n.a)(o, 2),
                            c = u[0],
                            f = u[1],
                            e.abrupt("return", [c, f]);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var l = {
            SHOPEE_ACCOUNT: "shopee",
            SELLER_SUB_ACCOUNT: "seller"
        };
        function d(e, t) {
            return h.apply(this, arguments)
        }
        function h() {
            return (h = Object(i.a)(s.a.mark((function e(t, r) {
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a.b.get("session/".concat(t, "/more_items"), {
                                params: {
                                    offset: r,
                                    limit: 10
                                }
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
            )))).apply(this, arguments)
        }
        function y(e, t) {
            return v.apply(this, arguments)
        }
        function v() {
            return (v = Object(i.a)(s.a.mark((function e(t, r) {
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a.b.get("session/".concat(t, "/sp_items"), {
                                params: {
                                    offset: r,
                                    limit: 10
                                }
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
            )))).apply(this, arguments)
        }
    },
    GgeO: function(module, exports, __webpack_require__) {
        var t;
        t = function() {
            return (()=>{
                "use strict";
                var __webpack_modules__ = {
                    537: e=>{
                        e.exports = function(e, t) {
                            for (var r = new Array(arguments.length - 1), n = 0, i = 2, o = !0; i < arguments.length; )
                                r[n++] = arguments[i++];
                            return new Promise((function(i, s) {
                                r[n] = function(e) {
                                    if (o)
                                        if (o = !1,
                                        e)
                                            s(e);
                                        else {
                                            for (var t = new Array(arguments.length - 1), r = 0; r < t.length; )
                                                t[r++] = arguments[r];
                                            i.apply(null, t)
                                        }
                                }
                                ;
                                try {
                                    e.apply(t || null, r)
                                } catch (e) {
                                    o && (o = !1,
                                    s(e))
                                }
                            }
                            ))
                        }
                    }
                    ,
                    419: (e,t)=>{
                        var r = t;
                        r.length = function(e) {
                            var t = e.length;
                            if (!t)
                                return 0;
                            for (var r = 0; --t % 4 > 1 && "=" === e.charAt(t); )
                                ++r;
                            return Math.ceil(3 * e.length) / 4 - r
                        }
                        ;
                        for (var n = new Array(64), i = new Array(123), o = 0; o < 64; )
                            i[n[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
                        r.encode = function(e, t, r) {
                            for (var i, o = null, s = [], a = 0, u = 0; t < r; ) {
                                var c = e[t++];
                                switch (u) {
                                case 0:
                                    s[a++] = n[c >> 2],
                                    i = (3 & c) << 4,
                                    u = 1;
                                    break;
                                case 1:
                                    s[a++] = n[i | c >> 4],
                                    i = (15 & c) << 2,
                                    u = 2;
                                    break;
                                case 2:
                                    s[a++] = n[i | c >> 6],
                                    s[a++] = n[63 & c],
                                    u = 0
                                }
                                a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)),
                                a = 0)
                            }
                            return u && (s[a++] = n[i],
                            s[a++] = 61,
                            1 === u && (s[a++] = 61)),
                            o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))),
                            o.join("")) : String.fromCharCode.apply(String, s.slice(0, a))
                        }
                        ;
                        var s = "invalid encoding";
                        r.decode = function(e, t, r) {
                            for (var n, o = r, a = 0, u = 0; u < e.length; ) {
                                var c = e.charCodeAt(u++);
                                if (61 === c && a > 1)
                                    break;
                                if (void 0 === (c = i[c]))
                                    throw Error(s);
                                switch (a) {
                                case 0:
                                    n = c,
                                    a = 1;
                                    break;
                                case 1:
                                    t[r++] = n << 2 | (48 & c) >> 4,
                                    n = c,
                                    a = 2;
                                    break;
                                case 2:
                                    t[r++] = (15 & n) << 4 | (60 & c) >> 2,
                                    n = c,
                                    a = 3;
                                    break;
                                case 3:
                                    t[r++] = (3 & n) << 6 | c,
                                    a = 0
                                }
                            }
                            if (1 === a)
                                throw Error(s);
                            return r - o
                        }
                        ,
                        r.test = function(e) {
                            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                        }
                    }
                    ,
                    124: e=>{
                        function t(e, r) {
                            "string" == typeof e && (r = e,
                            e = void 0);
                            var n = [];
                            function i(e) {
                                if ("string" != typeof e) {
                                    var r = o();
                                    if (t.verbose && console.log("codegen: " + r),
                                    r = "return " + r,
                                    e) {
                                        for (var s = Object.keys(e), a = new Array(s.length + 1), u = new Array(s.length), c = 0; c < s.length; )
                                            a[c] = s[c],
                                            u[c] = e[s[c++]];
                                        return a[c] = r,
                                        Function.apply(null, a).apply(null, u)
                                    }
                                    return Function(r)()
                                }
                                for (var f = new Array(arguments.length - 1), p = 0; p < f.length; )
                                    f[p] = arguments[++p];
                                if (p = 0,
                                e = e.replace(/%([%dfijs])/g, (function(e, t) {
                                    var r = f[p++];
                                    switch (t) {
                                    case "d":
                                    case "f":
                                        return String(Number(r));
                                    case "i":
                                        return String(Math.floor(r));
                                    case "j":
                                        return JSON.stringify(r);
                                    case "s":
                                        return String(r)
                                    }
                                    return "%"
                                }
                                )),
                                p !== f.length)
                                    throw Error("parameter count mismatch");
                                return n.push(e),
                                i
                            }
                            function o(t) {
                                return "function " + (t || r || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}"
                            }
                            return i.toString = o,
                            i
                        }
                        e.exports = t,
                        t.verbose = !1
                    }
                    ,
                    211: e=>{
                        function t() {
                            this._listeners = {}
                        }
                        e.exports = t,
                        t.prototype.on = function(e, t, r) {
                            return (this._listeners[e] || (this._listeners[e] = [])).push({
                                fn: t,
                                ctx: r || this
                            }),
                            this
                        }
                        ,
                        t.prototype.off = function(e, t) {
                            if (void 0 === e)
                                this._listeners = {};
                            else if (void 0 === t)
                                this._listeners[e] = [];
                            else
                                for (var r = this._listeners[e], n = 0; n < r.length; )
                                    r[n].fn === t ? r.splice(n, 1) : ++n;
                            return this
                        }
                        ,
                        t.prototype.emit = function(e) {
                            var t = this._listeners[e];
                            if (t) {
                                for (var r = [], n = 1; n < arguments.length; )
                                    r.push(arguments[n++]);
                                for (n = 0; n < t.length; )
                                    t[n].fn.apply(t[n++].ctx, r)
                            }
                            return this
                        }
                    }
                    ,
                    154: (e,t,r)=>{
                        e.exports = o;
                        var n = r(537)
                          , i = r(199)("fs");
                        function o(e, t, r) {
                            return "function" == typeof t ? (r = t,
                            t = {}) : t || (t = {}),
                            r ? !t.xhr && i && i.readFile ? i.readFile(e, (function(n, i) {
                                return n && "undefined" != typeof XMLHttpRequest ? o.xhr(e, t, r) : n ? r(n) : r(null, t.binary ? i : i.toString("utf8"))
                            }
                            )) : o.xhr(e, t, r) : n(o, this, e, t)
                        }
                        o.xhr = function(e, t, r) {
                            var n = new XMLHttpRequest;
                            n.onreadystatechange = function() {
                                if (4 === n.readyState) {
                                    if (0 !== n.status && 200 !== n.status)
                                        return r(Error("status " + n.status));
                                    if (t.binary) {
                                        var e = n.response;
                                        if (!e) {
                                            e = [];
                                            for (var i = 0; i < n.responseText.length; ++i)
                                                e.push(255 & n.responseText.charCodeAt(i))
                                        }
                                        return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e)
                                    }
                                    return r(null, n.responseText)
                                }
                            }
                            ,
                            t.binary && ("overrideMimeType"in n && n.overrideMimeType("text/plain; charset=x-user-defined"),
                            n.responseType = "arraybuffer"),
                            n.open("GET", e),
                            n.send()
                        }
                    }
                    ,
                    945: e=>{
                        function t(e) {
                            return "undefined" != typeof Float32Array ? function() {
                                var t = new Float32Array([-0])
                                  , r = new Uint8Array(t.buffer)
                                  , n = 128 === r[3];
                                function i(e, n, i) {
                                    t[0] = e,
                                    n[i] = r[0],
                                    n[i + 1] = r[1],
                                    n[i + 2] = r[2],
                                    n[i + 3] = r[3]
                                }
                                function o(e, n, i) {
                                    t[0] = e,
                                    n[i] = r[3],
                                    n[i + 1] = r[2],
                                    n[i + 2] = r[1],
                                    n[i + 3] = r[0]
                                }
                                function s(e, n) {
                                    return r[0] = e[n],
                                    r[1] = e[n + 1],
                                    r[2] = e[n + 2],
                                    r[3] = e[n + 3],
                                    t[0]
                                }
                                function a(e, n) {
                                    return r[3] = e[n],
                                    r[2] = e[n + 1],
                                    r[1] = e[n + 2],
                                    r[0] = e[n + 3],
                                    t[0]
                                }
                                e.writeFloatLE = n ? i : o,
                                e.writeFloatBE = n ? o : i,
                                e.readFloatLE = n ? s : a,
                                e.readFloatBE = n ? a : s
                            }() : function() {
                                function t(e, t, r, n) {
                                    var i = t < 0 ? 1 : 0;
                                    if (i && (t = -t),
                                    0 === t)
                                        e(1 / t > 0 ? 0 : 2147483648, r, n);
                                    else if (isNaN(t))
                                        e(2143289344, r, n);
                                    else if (t > 34028234663852886e22)
                                        e((i << 31 | 2139095040) >>> 0, r, n);
                                    else if (t < 11754943508222875e-54)
                                        e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, r, n);
                                    else {
                                        var o = Math.floor(Math.log(t) / Math.LN2);
                                        e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, r, n)
                                    }
                                }
                                function s(e, t, r) {
                                    var n = e(t, r)
                                      , i = 2 * (n >> 31) + 1
                                      , o = n >>> 23 & 255
                                      , s = 8388607 & n;
                                    return 255 === o ? s ? NaN : i * (1 / 0) : 0 === o ? 1401298464324817e-60 * i * s : i * Math.pow(2, o - 150) * (s + 8388608)
                                }
                                e.writeFloatLE = t.bind(null, r),
                                e.writeFloatBE = t.bind(null, n),
                                e.readFloatLE = s.bind(null, i),
                                e.readFloatBE = s.bind(null, o)
                            }(),
                            "undefined" != typeof Float64Array ? function() {
                                var t = new Float64Array([-0])
                                  , r = new Uint8Array(t.buffer)
                                  , n = 128 === r[7];
                                function i(e, n, i) {
                                    t[0] = e,
                                    n[i] = r[0],
                                    n[i + 1] = r[1],
                                    n[i + 2] = r[2],
                                    n[i + 3] = r[3],
                                    n[i + 4] = r[4],
                                    n[i + 5] = r[5],
                                    n[i + 6] = r[6],
                                    n[i + 7] = r[7]
                                }
                                function o(e, n, i) {
                                    t[0] = e,
                                    n[i] = r[7],
                                    n[i + 1] = r[6],
                                    n[i + 2] = r[5],
                                    n[i + 3] = r[4],
                                    n[i + 4] = r[3],
                                    n[i + 5] = r[2],
                                    n[i + 6] = r[1],
                                    n[i + 7] = r[0]
                                }
                                function s(e, n) {
                                    return r[0] = e[n],
                                    r[1] = e[n + 1],
                                    r[2] = e[n + 2],
                                    r[3] = e[n + 3],
                                    r[4] = e[n + 4],
                                    r[5] = e[n + 5],
                                    r[6] = e[n + 6],
                                    r[7] = e[n + 7],
                                    t[0]
                                }
                                function a(e, n) {
                                    return r[7] = e[n],
                                    r[6] = e[n + 1],
                                    r[5] = e[n + 2],
                                    r[4] = e[n + 3],
                                    r[3] = e[n + 4],
                                    r[2] = e[n + 5],
                                    r[1] = e[n + 6],
                                    r[0] = e[n + 7],
                                    t[0]
                                }
                                e.writeDoubleLE = n ? i : o,
                                e.writeDoubleBE = n ? o : i,
                                e.readDoubleLE = n ? s : a,
                                e.readDoubleBE = n ? a : s
                            }() : function() {
                                function t(e, t, r, n, i, o) {
                                    var s = n < 0 ? 1 : 0;
                                    if (s && (n = -n),
                                    0 === n)
                                        e(0, i, o + t),
                                        e(1 / n > 0 ? 0 : 2147483648, i, o + r);
                                    else if (isNaN(n))
                                        e(0, i, o + t),
                                        e(2146959360, i, o + r);
                                    else if (n > 17976931348623157e292)
                                        e(0, i, o + t),
                                        e((s << 31 | 2146435072) >>> 0, i, o + r);
                                    else {
                                        var a;
                                        if (n < 22250738585072014e-324)
                                            e((a = n / 5e-324) >>> 0, i, o + t),
                                            e((s << 31 | a / 4294967296) >>> 0, i, o + r);
                                        else {
                                            var u = Math.floor(Math.log(n) / Math.LN2);
                                            1024 === u && (u = 1023),
                                            e(4503599627370496 * (a = n * Math.pow(2, -u)) >>> 0, i, o + t),
                                            e((s << 31 | u + 1023 << 20 | 1048576 * a & 1048575) >>> 0, i, o + r)
                                        }
                                    }
                                }
                                function s(e, t, r, n, i) {
                                    var o = e(n, i + t)
                                      , s = e(n, i + r)
                                      , a = 2 * (s >> 31) + 1
                                      , u = s >>> 20 & 2047
                                      , c = 4294967296 * (1048575 & s) + o;
                                    return 2047 === u ? c ? NaN : a * (1 / 0) : 0 === u ? 5e-324 * a * c : a * Math.pow(2, u - 1075) * (c + 4503599627370496)
                                }
                                e.writeDoubleLE = t.bind(null, r, 0, 4),
                                e.writeDoubleBE = t.bind(null, n, 4, 0),
                                e.readDoubleLE = s.bind(null, i, 0, 4),
                                e.readDoubleBE = s.bind(null, o, 4, 0)
                            }(),
                            e
                        }
                        function r(e, t, r) {
                            t[r] = 255 & e,
                            t[r + 1] = e >>> 8 & 255,
                            t[r + 2] = e >>> 16 & 255,
                            t[r + 3] = e >>> 24
                        }
                        function n(e, t, r) {
                            t[r] = e >>> 24,
                            t[r + 1] = e >>> 16 & 255,
                            t[r + 2] = e >>> 8 & 255,
                            t[r + 3] = 255 & e
                        }
                        function i(e, t) {
                            return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
                        }
                        function o(e, t) {
                            return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
                        }
                        e.exports = t(t)
                    }
                    ,
                    199: module=>{
                        function inquire(moduleName) {
                            try {
                                var mod = eval("quire".replace(/^/, "re"))(moduleName);
                                if (mod && (mod.length || Object.keys(mod).length))
                                    return mod
                            } catch (e) {}
                            return null
                        }
                        module.exports = inquire
                    }
                    ,
                    626: (e,t)=>{
                        var r = t
                          , n = r.isAbsolute = function(e) {
                            return /^(?:\/|\w+:)/.test(e)
                        }
                          , i = r.normalize = function(e) {
                            var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/")
                              , r = n(e)
                              , i = "";
                            r && (i = t.shift() + "/");
                            for (var o = 0; o < t.length; )
                                ".." === t[o] ? o > 0 && ".." !== t[o - 1] ? t.splice(--o, 2) : r ? t.splice(o, 1) : ++o : "." === t[o] ? t.splice(o, 1) : ++o;
                            return i + t.join("/")
                        }
                        ;
                        r.resolve = function(e, t, r) {
                            return r || (t = i(t)),
                            n(t) ? t : (r || (e = i(e)),
                            (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? i(e + "/" + t) : t)
                        }
                    }
                    ,
                    662: e=>{
                        e.exports = function(e, t, r) {
                            var n = r || 8192
                              , i = n >>> 1
                              , o = null
                              , s = n;
                            return function(r) {
                                if (r < 1 || r > i)
                                    return e(r);
                                s + r > n && (o = e(n),
                                s = 0);
                                var a = t.call(o, s, s += r);
                                return 7 & s && (s = 1 + (7 | s)),
                                a
                            }
                        }
                    }
                    ,
                    997: (e,t)=>{
                        var r = t;
                        r.length = function(e) {
                            for (var t = 0, r = 0, n = 0; n < e.length; ++n)
                                (r = e.charCodeAt(n)) < 128 ? t += 1 : r < 2048 ? t += 2 : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1)) ? (++n,
                                t += 4) : t += 3;
                            return t
                        }
                        ,
                        r.read = function(e, t, r) {
                            if (r - t < 1)
                                return "";
                            for (var n, i = null, o = [], s = 0; t < r; )
                                (n = e[t++]) < 128 ? o[s++] = n : n > 191 && n < 224 ? o[s++] = (31 & n) << 6 | 63 & e[t++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536,
                                o[s++] = 55296 + (n >> 10),
                                o[s++] = 56320 + (1023 & n)) : o[s++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++],
                                s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)),
                                s = 0);
                            return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))),
                            i.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
                        }
                        ,
                        r.write = function(e, t, r) {
                            for (var n, i, o = r, s = 0; s < e.length; ++s)
                                (n = e.charCodeAt(s)) < 128 ? t[r++] = n : n < 2048 ? (t[r++] = n >> 6 | 192,
                                t[r++] = 63 & n | 128) : 55296 == (64512 & n) && 56320 == (64512 & (i = e.charCodeAt(s + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & i),
                                ++s,
                                t[r++] = n >> 18 | 240,
                                t[r++] = n >> 12 & 63 | 128,
                                t[r++] = n >> 6 & 63 | 128,
                                t[r++] = 63 & n | 128) : (t[r++] = n >> 12 | 224,
                                t[r++] = n >> 6 & 63 | 128,
                                t[r++] = 63 & n | 128);
                            return r - o
                        }
                    }
                    ,
                    492: (e,t,r)=>{
                        e.exports = r(836)
                    }
                    ,
                    996: (e,t,r)=>{
                        var n = t
                          , i = r(25)
                          , o = r(935);
                        function s(e, t, r, n) {
                            if (t.resolvedType)
                                if (t.resolvedType instanceof i) {
                                    e("switch(d%s){", n);
                                    for (var o = t.resolvedType.values, s = Object.keys(o), a = 0; a < s.length; ++a)
                                        t.repeated && o[s[a]] === t.typeDefault && e("default:"),
                                        e("case%j:", s[a])("case %i:", o[s[a]])("m%s=%j", n, o[s[a]])("break");
                                    e("}")
                                } else
                                    e('if(typeof d%s!=="object")', n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, r, n);
                            else {
                                var u = !1;
                                switch (t.type) {
                                case "double":
                                case "float":
                                    e("m%s=Number(d%s)", n, n);
                                    break;
                                case "uint32":
                                case "fixed32":
                                    e("m%s=d%s>>>0", n, n);
                                    break;
                                case "int32":
                                case "sint32":
                                case "sfixed32":
                                    e("m%s=d%s|0", n, n);
                                    break;
                                case "uint64":
                                    u = !0;
                                case "int64":
                                case "sint64":
                                case "fixed64":
                                case "sfixed64":
                                    e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, u)('else if(typeof d%s==="string")', n)("m%s=parseInt(d%s,10)", n, n)('else if(typeof d%s==="number")', n)("m%s=d%s", n, n)('else if(typeof d%s==="object")', n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, u ? "true" : "");
                                    break;
                                case "bytes":
                                    e('if(typeof d%s==="string")', n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
                                    break;
                                case "string":
                                    e("m%s=String(d%s)", n, n);
                                    break;
                                case "bool":
                                    e("m%s=Boolean(d%s)", n, n)
                                }
                            }
                            return e
                        }
                        function a(e, t, r, n) {
                            if (t.resolvedType)
                                t.resolvedType instanceof i ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, r, n, n) : e("d%s=types[%i].toObject(m%s,o)", n, r, n);
                            else {
                                var o = !1;
                                switch (t.type) {
                                case "double":
                                case "float":
                                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                                    break;
                                case "uint64":
                                    o = !0;
                                case "int64":
                                case "sint64":
                                case "fixed64":
                                case "sfixed64":
                                    e('if(typeof m%s==="number")', n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, o ? "true" : "", n);
                                    break;
                                case "bytes":
                                    e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                                    break;
                                default:
                                    e("d%s=m%s", n, n)
                                }
                            }
                            return e
                        }
                        n.fromObject = function(e) {
                            var t = e.fieldsArray
                              , r = o.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                            if (!t.length)
                                return r("return new this.ctor");
                            r("var m=new this.ctor");
                            for (var n = 0; n < t.length; ++n) {
                                var a = t[n].resolve()
                                  , u = o.safeProp(a.name);
                                a.map ? (r("if(d%s){", u)('if(typeof d%s!=="object")', u)("throw TypeError(%j)", a.fullName + ": object expected")("m%s={}", u)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", u),
                                s(r, a, n, u + "[ks[i]]")("}")("}")) : a.repeated ? (r("if(d%s){", u)("if(!Array.isArray(d%s))", u)("throw TypeError(%j)", a.fullName + ": array expected")("m%s=[]", u)("for(var i=0;i<d%s.length;++i){", u),
                                s(r, a, n, u + "[i]")("}")("}")) : (a.resolvedType instanceof i || r("if(d%s!=null){", u),
                                s(r, a, n, u),
                                a.resolvedType instanceof i || r("}"))
                            }
                            return r("return m")
                        }
                        ,
                        n.toObject = function(e) {
                            var t = e.fieldsArray.slice().sort(o.compareFieldsById);
                            if (!t.length)
                                return o.codegen()("return {}");
                            for (var r = o.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], s = [], u = [], c = 0; c < t.length; ++c)
                                t[c].partOf || (t[c].resolve().repeated ? n : t[c].map ? s : u).push(t[c]);
                            if (n.length) {
                                for (r("if(o.arrays||o.defaults){"),
                                c = 0; c < n.length; ++c)
                                    r("d%s=[]", o.safeProp(n[c].name));
                                r("}")
                            }
                            if (s.length) {
                                for (r("if(o.objects||o.defaults){"),
                                c = 0; c < s.length; ++c)
                                    r("d%s={}", o.safeProp(s[c].name));
                                r("}")
                            }
                            if (u.length) {
                                for (r("if(o.defaults){"),
                                c = 0; c < u.length; ++c) {
                                    var f = u[c]
                                      , p = o.safeProp(f.name);
                                    if (f.resolvedType instanceof i)
                                        r("d%s=o.enums===String?%j:%j", p, f.resolvedType.valuesById[f.typeDefault], f.typeDefault);
                                    else if (f.long)
                                        r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", f.typeDefault.low, f.typeDefault.high, f.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", p)("}else")("d%s=o.longs===String?%j:%i", p, f.typeDefault.toString(), f.typeDefault.toNumber());
                                    else if (f.bytes) {
                                        var l = "[" + Array.prototype.slice.call(f.typeDefault).join(",") + "]";
                                        r("if(o.bytes===String)d%s=%j", p, String.fromCharCode.apply(String, f.typeDefault))("else{")("d%s=%s", p, l)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", p, p)("}")
                                    } else
                                        r("d%s=%j", p, f.typeDefault)
                                }
                                r("}")
                            }
                            var d = !1;
                            for (c = 0; c < t.length; ++c) {
                                f = t[c];
                                var h = e._fieldsArray.indexOf(f);
                                p = o.safeProp(f.name),
                                f.map ? (d || (d = !0,
                                r("var ks2")),
                                r("if(m%s&&(ks2=Object.keys(m%s)).length){", p, p)("d%s={}", p)("for(var j=0;j<ks2.length;++j){"),
                                a(r, f, h, p + "[ks2[j]]")("}")) : f.repeated ? (r("if(m%s&&m%s.length){", p, p)("d%s=[]", p)("for(var j=0;j<m%s.length;++j){", p),
                                a(r, f, h, p + "[j]")("}")) : (r("if(m%s!=null&&m.hasOwnProperty(%j)){", p, f.name),
                                a(r, f, h, p),
                                f.partOf && r("if(o.oneofs)")("d%s=%j", o.safeProp(f.partOf.name), f.name)),
                                r("}")
                            }
                            return r("return d")
                        }
                    }
                    ,
                    305: (e,t,r)=>{
                        e.exports = function(e) {
                            var t = o.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter((function(e) {
                                return e.map
                            }
                            )).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
                            e.group && t("if((t&7)===4)")("break"),
                            t("switch(t>>>3){");
                            for (var r = 0; r < e.fieldsArray.length; ++r) {
                                var a = e._fieldsArray[r].resolve()
                                  , u = a.resolvedType instanceof n ? "int32" : a.type
                                  , c = "m" + o.safeProp(a.name);
                                t("case %i:", a.id),
                                a.map ? (t("if(%s===util.emptyObject)", c)("%s={}", c)("var c2 = r.uint32()+r.pos"),
                                void 0 !== i.defaults[a.keyType] ? t("k=%j", i.defaults[a.keyType]) : t("k=null"),
                                void 0 !== i.defaults[u] ? t("value=%j", i.defaults[u]) : t("value=null"),
                                t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", a.keyType)("case 2:"),
                                void 0 === i.basic[u] ? t("value=types[%i].decode(r,r.uint32())", r) : t("value=r.%s()", u),
                                t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),
                                void 0 !== i.long[a.keyType] ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', c) : t("%s[k]=value", c)) : a.repeated ? (t("if(!(%s&&%s.length))", c, c)("%s=[]", c),
                                void 0 !== i.packed[u] && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", c, u)("}else"),
                                void 0 === i.basic[u] ? t(a.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", c, r) : t("%s.push(r.%s())", c, u)) : void 0 === i.basic[u] ? t(a.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", c, r) : t("%s=r.%s()", c, u),
                                t("break")
                            }
                            for (t("default:")("r.skipType(t&7)")("break")("}")("}"),
                            r = 0; r < e._fieldsArray.length; ++r) {
                                var f = e._fieldsArray[r];
                                f.required && t("if(!m.hasOwnProperty(%j))", f.name)("throw util.ProtocolError(%j,{instance:m})", s(f))
                            }
                            return t("return m")
                        }
                        ;
                        var n = r(25)
                          , i = r(63)
                          , o = r(935);
                        function s(e) {
                            return "missing required '" + e.name + "'"
                        }
                    }
                    ,
                    928: (e,t,r)=>{
                        e.exports = function(e) {
                            for (var t, r = o.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()"), a = e.fieldsArray.slice().sort(o.compareFieldsById), u = 0; u < a.length; ++u) {
                                var c = a[u].resolve()
                                  , f = e._fieldsArray.indexOf(c)
                                  , p = c.resolvedType instanceof n ? "int32" : c.type
                                  , l = i.basic[p];
                                t = "m" + o.safeProp(c.name),
                                c.map ? (r("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (c.id << 3 | 2) >>> 0, 8 | i.mapKey[c.keyType], c.keyType),
                                void 0 === l ? r("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", f, t) : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | l, p, t),
                                r("}")("}")) : c.repeated ? (r("if(%s!=null&&%s.length){", t, t),
                                c.packed && void 0 !== i.packed[p] ? r("w.uint32(%i).fork()", (c.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", p, t)("w.ldelim()") : (r("for(var i=0;i<%s.length;++i)", t),
                                void 0 === l ? s(r, c, f, t + "[i]") : r("w.uint32(%i).%s(%s[i])", (c.id << 3 | l) >>> 0, p, t)),
                                r("}")) : (c.optional && r("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, c.name),
                                void 0 === l ? s(r, c, f, t) : r("w.uint32(%i).%s(%s)", (c.id << 3 | l) >>> 0, p, t))
                            }
                            return r("return w")
                        }
                        ;
                        var n = r(25)
                          , i = r(63)
                          , o = r(935);
                        function s(e, t, r, n) {
                            return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, n, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, n, (t.id << 3 | 2) >>> 0)
                        }
                    }
                    ,
                    25: (e,t,r)=>{
                        e.exports = s;
                        var n = r(243);
                        ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
                        var i = r(313)
                          , o = r(935);
                        function s(e, t, r, i, o) {
                            if (n.call(this, e, r),
                            t && "object" != typeof t)
                                throw TypeError("values must be an object");
                            if (this.valuesById = {},
                            this.values = Object.create(this.valuesById),
                            this.comment = i,
                            this.comments = o || {},
                            this.reserved = void 0,
                            t)
                                for (var s = Object.keys(t), a = 0; a < s.length; ++a)
                                    "number" == typeof t[s[a]] && (this.valuesById[this.values[s[a]] = t[s[a]]] = s[a])
                        }
                        s.fromJSON = function(e, t) {
                            var r = new s(e,t.values,t.options,t.comment,t.comments);
                            return r.reserved = t.reserved,
                            r
                        }
                        ,
                        s.prototype.toJSON = function(e) {
                            var t = !!e && Boolean(e.keepComments);
                            return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t ? this.comment : void 0, "comments", t ? this.comments : void 0])
                        }
                        ,
                        s.prototype.add = function(e, t, r) {
                            if (!o.isString(e))
                                throw TypeError("name must be a string");
                            if (!o.isInteger(t))
                                throw TypeError("id must be an integer");
                            if (void 0 !== this.values[e])
                                throw Error("duplicate name '" + e + "' in " + this);
                            if (this.isReservedId(t))
                                throw Error("id " + t + " is reserved in " + this);
                            if (this.isReservedName(e))
                                throw Error("name '" + e + "' is reserved in " + this);
                            if (void 0 !== this.valuesById[t]) {
                                if (!this.options || !this.options.allow_alias)
                                    throw Error("duplicate id " + t + " in " + this);
                                this.values[e] = t
                            } else
                                this.valuesById[this.values[e] = t] = e;
                            return this.comments[e] = r || null,
                            this
                        }
                        ,
                        s.prototype.remove = function(e) {
                            if (!o.isString(e))
                                throw TypeError("name must be a string");
                            var t = this.values[e];
                            if (null == t)
                                throw Error("name '" + e + "' does not exist in " + this);
                            return delete this.valuesById[t],
                            delete this.values[e],
                            delete this.comments[e],
                            this
                        }
                        ,
                        s.prototype.isReservedId = function(e) {
                            return i.isReservedId(this.reserved, e)
                        }
                        ,
                        s.prototype.isReservedName = function(e) {
                            return i.isReservedName(this.reserved, e)
                        }
                    }
                    ,
                    548: (e,t,r)=>{
                        e.exports = c;
                        var n = r(243);
                        ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
                        var i, o = r(25), s = r(63), a = r(935), u = /^required|optional|repeated$/;
                        function c(e, t, r, i, o, c, f) {
                            if (a.isObject(i) ? (f = o,
                            c = i,
                            i = o = void 0) : a.isObject(o) && (f = c,
                            c = o,
                            o = void 0),
                            n.call(this, e, c),
                            !a.isInteger(t) || t < 0)
                                throw TypeError("id must be a non-negative integer");
                            if (!a.isString(r))
                                throw TypeError("type must be a string");
                            if (void 0 !== i && !u.test(i = i.toString().toLowerCase()))
                                throw TypeError("rule must be a string rule");
                            if (void 0 !== o && !a.isString(o))
                                throw TypeError("extend must be a string");
                            "proto3_optional" === i && (i = "optional"),
                            this.rule = i && "optional" !== i ? i : void 0,
                            this.type = r,
                            this.id = t,
                            this.extend = o || void 0,
                            this.required = "required" === i,
                            this.optional = !this.required,
                            this.repeated = "repeated" === i,
                            this.map = !1,
                            this.message = null,
                            this.partOf = null,
                            this.typeDefault = null,
                            this.defaultValue = null,
                            this.long = !!a.Long && void 0 !== s.long[r],
                            this.bytes = "bytes" === r,
                            this.resolvedType = null,
                            this.extensionField = null,
                            this.declaringField = null,
                            this._packed = null,
                            this.comment = f
                        }
                        c.fromJSON = function(e, t) {
                            return new c(e,t.id,t.type,t.rule,t.extend,t.options,t.comment)
                        }
                        ,
                        Object.defineProperty(c.prototype, "packed", {
                            get: function() {
                                return null === this._packed && (this._packed = !1 !== this.getOption("packed")),
                                this._packed
                            }
                        }),
                        c.prototype.setOption = function(e, t, r) {
                            return "packed" === e && (this._packed = null),
                            n.prototype.setOption.call(this, e, t, r)
                        }
                        ,
                        c.prototype.toJSON = function(e) {
                            var t = !!e && Boolean(e.keepComments);
                            return a.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
                        }
                        ,
                        c.prototype.resolve = function() {
                            if (this.resolved)
                                return this;
                            if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type),
                            this.resolvedType instanceof i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),
                            this.options && null != this.options.default && (this.typeDefault = this.options.default,
                            this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])),
                            this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed,
                            Object.keys(this.options).length || (this.options = void 0)),
                            this.long)
                                this.typeDefault = a.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)),
                                Object.freeze && Object.freeze(this.typeDefault);
                            else if (this.bytes && "string" == typeof this.typeDefault) {
                                var e;
                                a.base64.test(this.typeDefault) ? a.base64.decode(this.typeDefault, e = a.newBuffer(a.base64.length(this.typeDefault)), 0) : a.utf8.write(this.typeDefault, e = a.newBuffer(a.utf8.length(this.typeDefault)), 0),
                                this.typeDefault = e
                            }
                            return this.map ? this.defaultValue = a.emptyObject : this.repeated ? this.defaultValue = a.emptyArray : this.defaultValue = this.typeDefault,
                            this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue),
                            n.prototype.resolve.call(this)
                        }
                        ,
                        c.d = function(e, t, r, n) {
                            return "function" == typeof t ? t = a.decorateType(t).name : t && "object" == typeof t && (t = a.decorateEnum(t).name),
                            function(i, o) {
                                a.decorateType(i.constructor).add(new c(o,e,t,r,{
                                    default: n
                                }))
                            }
                        }
                        ,
                        c._configure = function(e) {
                            i = e
                        }
                    }
                    ,
                    836: (e,t,r)=>{
                        var n = e.exports = r(482);
                        n.build = "light",
                        n.load = function(e, t, r) {
                            return "function" == typeof t ? (r = t,
                            t = new n.Root) : t || (t = new n.Root),
                            t.load(e, r)
                        }
                        ,
                        n.loadSync = function(e, t) {
                            return t || (t = new n.Root),
                            t.loadSync(e)
                        }
                        ,
                        n.encoder = r(928),
                        n.decoder = r(305),
                        n.verifier = r(497),
                        n.converter = r(996),
                        n.ReflectionObject = r(243),
                        n.Namespace = r(313),
                        n.Root = r(424),
                        n.Enum = r(25),
                        n.Type = r(645),
                        n.Field = r(548),
                        n.OneOf = r(598),
                        n.MapField = r(39),
                        n.Service = r(513),
                        n.Method = r(429),
                        n.Message = r(368),
                        n.wrappers = r(667),
                        n.types = r(63),
                        n.util = r(935),
                        n.ReflectionObject._configure(n.Root),
                        n.Namespace._configure(n.Type, n.Service, n.Enum),
                        n.Root._configure(n.Type),
                        n.Field._configure(n.Type)
                    }
                    ,
                    482: (e,t,r)=>{
                        var n = t;
                        function i() {
                            n.util._configure(),
                            n.Writer._configure(n.BufferWriter),
                            n.Reader._configure(n.BufferReader)
                        }
                        n.build = "minimal",
                        n.Writer = r(173),
                        n.BufferWriter = r(155),
                        n.Reader = r(408),
                        n.BufferReader = r(593),
                        n.util = r(693),
                        n.rpc = r(994),
                        n.roots = r(54),
                        n.configure = i,
                        i()
                    }
                    ,
                    39: (e,t,r)=>{
                        e.exports = s;
                        var n = r(548);
                        ((s.prototype = Object.create(n.prototype)).constructor = s).className = "MapField";
                        var i = r(63)
                          , o = r(935);
                        function s(e, t, r, i, s, a) {
                            if (n.call(this, e, t, i, void 0, void 0, s, a),
                            !o.isString(r))
                                throw TypeError("keyType must be a string");
                            this.keyType = r,
                            this.resolvedKeyType = null,
                            this.map = !0
                        }
                        s.fromJSON = function(e, t) {
                            return new s(e,t.id,t.keyType,t.type,t.options,t.comment)
                        }
                        ,
                        s.prototype.toJSON = function(e) {
                            var t = !!e && Boolean(e.keepComments);
                            return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
                        }
                        ,
                        s.prototype.resolve = function() {
                            if (this.resolved)
                                return this;
                            if (void 0 === i.mapKey[this.keyType])
                                throw Error("invalid key type: " + this.keyType);
                            return n.prototype.resolve.call(this)
                        }
                        ,
                        s.d = function(e, t, r) {
                            return "function" == typeof r ? r = o.decorateType(r).name : r && "object" == typeof r && (r = o.decorateEnum(r).name),
                            function(n, i) {
                                o.decorateType(n.constructor).add(new s(i,e,t,r))
                            }
                        }
                    }
                    ,
                    368: (e,t,r)=>{
                        e.exports = i;
                        var n = r(693);
                        function i(e) {
                            if (e)
                                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                                    this[t[r]] = e[t[r]]
                        }
                        i.create = function(e) {
                            return this.$type.create(e)
                        }
                        ,
                        i.encode = function(e, t) {
                            return this.$type.encode(e, t)
                        }
                        ,
                        i.encodeDelimited = function(e, t) {
                            return this.$type.encodeDelimited(e, t)
                        }
                        ,
                        i.decode = function(e) {
                            return this.$type.decode(e)
                        }
                        ,
                        i.decodeDelimited = function(e) {
                            return this.$type.decodeDelimited(e)
                        }
                        ,
                        i.verify = function(e) {
                            return this.$type.verify(e)
                        }
                        ,
                        i.fromObject = function(e) {
                            return this.$type.fromObject(e)
                        }
                        ,
                        i.toObject = function(e, t) {
                            return this.$type.toObject(e, t)
                        }
                        ,
                        i.prototype.toJSON = function() {
                            return this.$type.toObject(this, n.toJSONOptions)
                        }
                    }
                    ,
                    429: (e,t,r)=>{
                        e.exports = o;
                        var n = r(243);
                        ((o.prototype = Object.create(n.prototype)).constructor = o).className = "Method";
                        var i = r(935);
                        function o(e, t, r, o, s, a, u, c, f) {
                            if (i.isObject(s) ? (u = s,
                            s = a = void 0) : i.isObject(a) && (u = a,
                            a = void 0),
                            void 0 !== t && !i.isString(t))
                                throw TypeError("type must be a string");
                            if (!i.isString(r))
                                throw TypeError("requestType must be a string");
                            if (!i.isString(o))
                                throw TypeError("responseType must be a string");
                            n.call(this, e, u),
                            this.type = t || "rpc",
                            this.requestType = r,
                            this.requestStream = !!s || void 0,
                            this.responseType = o,
                            this.responseStream = !!a || void 0,
                            this.resolvedRequestType = null,
                            this.resolvedResponseType = null,
                            this.comment = c,
                            this.parsedOptions = f
                        }
                        o.fromJSON = function(e, t) {
                            return new o(e,t.type,t.requestType,t.responseType,t.requestStream,t.responseStream,t.options,t.comment,t.parsedOptions)
                        }
                        ,
                        o.prototype.toJSON = function(e) {
                            var t = !!e && Boolean(e.keepComments);
                            return i.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : void 0, "parsedOptions", this.parsedOptions])
                        }
                        ,
                        o.prototype.resolve = function() {
                            return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType),
                            this.resolvedResponseType = this.parent.lookupType(this.responseType),
                            n.prototype.resolve.call(this))
                        }
                    }
                    ,
                    313: (e,t,r)=>{
                        e.exports = p;
                        var n = r(243);
                        ((p.prototype = Object.create(n.prototype)).constructor = p).className = "Namespace";
                        var i, o, s, a = r(548), u = r(598), c = r(935);
                        function f(e, t) {
                            if (e && e.length) {
                                for (var r = {}, n = 0; n < e.length; ++n)
                                    r[e[n].name] = e[n].toJSON(t);
                                return r
                            }
                        }
                        function p(e, t) {
                            n.call(this, e, t),
                            this.nested = void 0,
                            this._nestedArray = null
                        }
                        function l(e) {
                            return e._nestedArray = null,
                            e
                        }
                        p.fromJSON = function(e, t) {
                            return new p(e,t.options).addJSON(t.nested)
                        }
                        ,
                        p.arrayToJSON = f,
                        p.isReservedId = function(e, t) {
                            if (e)
                                for (var r = 0; r < e.length; ++r)
                                    if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] > t)
                                        return !0;
                            return !1
                        }
                        ,
                        p.isReservedName = function(e, t) {
                            if (e)
                                for (var r = 0; r < e.length; ++r)
                                    if (e[r] === t)
                                        return !0;
                            return !1
                        }
                        ,
                        Object.defineProperty(p.prototype, "nestedArray", {
                            get: function() {
                                return this._nestedArray || (this._nestedArray = c.toArray(this.nested))
                            }
                        }),
                        p.prototype.toJSON = function(e) {
                            return c.toObject(["options", this.options, "nested", f(this.nestedArray, e)])
                        }
                        ,
                        p.prototype.addJSON = function(e) {
                            if (e)
                                for (var t, r = Object.keys(e), n = 0; n < r.length; ++n)
                                    t = e[r[n]],
                                    this.add((void 0 !== t.fields ? i.fromJSON : void 0 !== t.values ? s.fromJSON : void 0 !== t.methods ? o.fromJSON : void 0 !== t.id ? a.fromJSON : p.fromJSON)(r[n], t));
                            return this
                        }
                        ,
                        p.prototype.get = function(e) {
                            return this.nested && this.nested[e] || null
                        }
                        ,
                        p.prototype.getEnum = function(e) {
                            if (this.nested && this.nested[e]instanceof s)
                                return this.nested[e].values;
                            throw Error("no such enum: " + e)
                        }
                        ,
                        p.prototype.add = function(e) {
                            if (!(e instanceof a && void 0 !== e.extend || e instanceof i || e instanceof s || e instanceof o || e instanceof p || e instanceof u))
                                throw TypeError("object must be a valid nested object");
                            if (this.nested) {
                                var t = this.get(e.name);
                                if (t) {
                                    if (!(t instanceof p && e instanceof p) || t instanceof i || t instanceof o)
                                        throw Error("duplicate name '" + e.name + "' in " + this);
                                    for (var r = t.nestedArray, n = 0; n < r.length; ++n)
                                        e.add(r[n]);
                                    this.remove(t),
                                    this.nested || (this.nested = {}),
                                    e.setOptions(t.options, !0)
                                }
                            } else
                                this.nested = {};
                            return this.nested[e.name] = e,
                            e.onAdd(this),
                            l(this)
                        }
                        ,
                        p.prototype.remove = function(e) {
                            if (!(e instanceof n))
                                throw TypeError("object must be a ReflectionObject");
                            if (e.parent !== this)
                                throw Error(e + " is not a member of " + this);
                            return delete this.nested[e.name],
                            Object.keys(this.nested).length || (this.nested = void 0),
                            e.onRemove(this),
                            l(this)
                        }
                        ,
                        p.prototype.define = function(e, t) {
                            if (c.isString(e))
                                e = e.split(".");
                            else if (!Array.isArray(e))
                                throw TypeError("illegal path");
                            if (e && e.length && "" === e[0])
                                throw Error("path must be relative");
                            for (var r = this; e.length > 0; ) {
                                var n = e.shift();
                                if (r.nested && r.nested[n]) {
                                    if (!((r = r.nested[n])instanceof p))
                                        throw Error("path conflicts with non-namespace objects")
                                } else
                                    r.add(r = new p(n))
                            }
                            return t && r.addJSON(t),
                            r
                        }
                        ,
                        p.prototype.resolveAll = function() {
                            for (var e = this.nestedArray, t = 0; t < e.length; )
                                e[t]instanceof p ? e[t++].resolveAll() : e[t++].resolve();
                            return this.resolve()
                        }
                        ,
                        p.prototype.lookup = function(e, t, r) {
                            if ("boolean" == typeof t ? (r = t,
                            t = void 0) : t && !Array.isArray(t) && (t = [t]),
                            c.isString(e) && e.length) {
                                if ("." === e)
                                    return this.root;
                                e = e.split(".")
                            } else if (!e.length)
                                return this;
                            if ("" === e[0])
                                return this.root.lookup(e.slice(1), t);
                            var n = this.get(e[0]);
                            if (n) {
                                if (1 === e.length) {
                                    if (!t || t.indexOf(n.constructor) > -1)
                                        return n
                                } else if (n instanceof p && (n = n.lookup(e.slice(1), t, !0)))
                                    return n
                            } else
                                for (var i = 0; i < this.nestedArray.length; ++i)
                                    if (this._nestedArray[i]instanceof p && (n = this._nestedArray[i].lookup(e, t, !0)))
                                        return n;
                            return null === this.parent || r ? null : this.parent.lookup(e, t)
                        }
                        ,
                        p.prototype.lookupType = function(e) {
                            var t = this.lookup(e, [i]);
                            if (!t)
                                throw Error("no such type: " + e);
                            return t
                        }
                        ,
                        p.prototype.lookupEnum = function(e) {
                            var t = this.lookup(e, [s]);
                            if (!t)
                                throw Error("no such Enum '" + e + "' in " + this);
                            return t
                        }
                        ,
                        p.prototype.lookupTypeOrEnum = function(e) {
                            var t = this.lookup(e, [i, s]);
                            if (!t)
                                throw Error("no such Type or Enum '" + e + "' in " + this);
                            return t
                        }
                        ,
                        p.prototype.lookupService = function(e) {
                            var t = this.lookup(e, [o]);
                            if (!t)
                                throw Error("no such Service '" + e + "' in " + this);
                            return t
                        }
                        ,
                        p._configure = function(e, t, r) {
                            i = e,
                            o = t,
                            s = r
                        }
                    }
                    ,
                    243: (e,t,r)=>{
                        e.exports = o,
                        o.className = "ReflectionObject";
                        var n, i = r(935);
                        function o(e, t) {
                            if (!i.isString(e))
                                throw TypeError("name must be a string");
                            if (t && !i.isObject(t))
                                throw TypeError("options must be an object");
                            this.options = t,
                            this.parsedOptions = null,
                            this.name = e,
                            this.parent = null,
                            this.resolved = !1,
                            this.comment = null,
                            this.filename = null
                        }
                        Object.defineProperties(o.prototype, {
                            root: {
                                get: function() {
                                    for (var e = this; null !== e.parent; )
                                        e = e.parent;
                                    return e
                                }
                            },
                            fullName: {
                                get: function() {
                                    for (var e = [this.name], t = this.parent; t; )
                                        e.unshift(t.name),
                                        t = t.parent;
                                    return e.join(".")
                                }
                            }
                        }),
                        o.prototype.toJSON = function() {
                            throw Error()
                        }
                        ,
                        o.prototype.onAdd = function(e) {
                            this.parent && this.parent !== e && this.parent.remove(this),
                            this.parent = e,
                            this.resolved = !1;
                            var t = e.root;
                            t instanceof n && t._handleAdd(this)
                        }
                        ,
                        o.prototype.onRemove = function(e) {
                            var t = e.root;
                            t instanceof n && t._handleRemove(this),
                            this.parent = null,
                            this.resolved = !1
                        }
                        ,
                        o.prototype.resolve = function() {
                            return this.resolved || this.root instanceof n && (this.resolved = !0),
                            this
                        }
                        ,
                        o.prototype.getOption = function(e) {
                            if (this.options)
                                return this.options[e]
                        }
                        ,
                        o.prototype.setOption = function(e, t, r) {
                            return r && this.options && void 0 !== this.options[e] || ((this.options || (this.options = {}))[e] = t),
                            this
                        }
                        ,
                        o.prototype.setParsedOption = function(e, t, r) {
                            this.parsedOptions || (this.parsedOptions = []);
                            var n = this.parsedOptions;
                            if (r) {
                                var o = n.find((function(t) {
                                    return Object.prototype.hasOwnProperty.call(t, e)
                                }
                                ));
                                if (o) {
                                    var s = o[e];
                                    i.setProperty(s, r, t)
                                } else
                                    (o = {})[e] = i.setProperty({}, r, t),
                                    n.push(o)
                            } else {
                                var a = {};
                                a[e] = t,
                                n.push(a)
                            }
                            return this
                        }
                        ,
                        o.prototype.setOptions = function(e, t) {
                            if (e)
                                for (var r = Object.keys(e), n = 0; n < r.length; ++n)
                                    this.setOption(r[n], e[r[n]], t);
                            return this
                        }
                        ,
                        o.prototype.toString = function() {
                            var e = this.constructor.className
                              , t = this.fullName;
                            return t.length ? e + " " + t : e
                        }
                        ,
                        o._configure = function(e) {
                            n = e
                        }
                    }
                    ,
                    598: (e,t,r)=>{
                        e.exports = s;
                        var n = r(243);
                        ((s.prototype = Object.create(n.prototype)).constructor = s).className = "OneOf";
                        var i = r(548)
                          , o = r(935);
                        function s(e, t, r, i) {
                            if (Array.isArray(t) || (r = t,
                            t = void 0),
                            n.call(this, e, r),
                            void 0 !== t && !Array.isArray(t))
                                throw TypeError("fieldNames must be an Array");
                            this.oneof = t || [],
                            this.fieldsArray = [],
                            this.comment = i
                        }
                        function a(e) {
                            if (e.parent)
                                for (var t = 0; t < e.fieldsArray.length; ++t)
                                    e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
                        }
                        s.fromJSON = function(e, t) {
                            return new s(e,t.oneof,t.options,t.comment)
                        }
                        ,
                        s.prototype.toJSON = function(e) {
                            var t = !!e && Boolean(e.keepComments);
                            return o.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : void 0])
                        }
                        ,
                        s.prototype.add = function(e) {
                            if (!(e instanceof i))
                                throw TypeError("field must be a Field");
                            return e.parent && e.parent !== this.parent && e.parent.remove(e),
                            this.oneof.push(e.name),
                            this.fieldsArray.push(e),
                            e.partOf = this,
                            a(this),
                            this
                        }
                        ,
                        s.prototype.remove = function(e) {
                            if (!(e instanceof i))
                                throw TypeError("field must be a Field");
                            var t = this.fieldsArray.indexOf(e);
                            if (t < 0)
                                throw Error(e + " is not a member of " + this);
                            return this.fieldsArray.splice(t, 1),
                            (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1),
                            e.partOf = null,
                            this
                        }
                        ,
                        s.prototype.onAdd = function(e) {
                            n.prototype.onAdd.call(this, e);
                            for (var t = 0; t < this.oneof.length; ++t) {
                                var r = e.get(this.oneof[t]);
                                r && !r.partOf && (r.partOf = this,
                                this.fieldsArray.push(r))
                            }
                            a(this)
                        }
                        ,
                        s.prototype.onRemove = function(e) {
                            for (var t, r = 0; r < this.fieldsArray.length; ++r)
                                (t = this.fieldsArray[r]).parent && t.parent.remove(t);
                            n.prototype.onRemove.call(this, e)
                        }
                        ,
                        s.d = function() {
                            for (var e = new Array(arguments.length), t = 0; t < arguments.length; )
                                e[t] = arguments[t++];
                            return function(t, r) {
                                o.decorateType(t.constructor).add(new s(r,e)),
                                Object.defineProperty(t, r, {
                                    get: o.oneOfGetter(e),
                                    set: o.oneOfSetter(e)
                                })
                            }
                        }
                    }
                    ,
                    408: (e,t,r)=>{
                        e.exports = u;
                        var n, i = r(693), o = i.LongBits, s = i.utf8;
                        function a(e, t) {
                            return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
                        }
                        function u(e) {
                            this.buf = e,
                            this.pos = 0,
                            this.len = e.length
                        }
                        var c, f = "undefined" != typeof Uint8Array ? function(e) {
                            if (e instanceof Uint8Array || Array.isArray(e))
                                return new u(e);
                            throw Error("illegal buffer")
                        }
                        : function(e) {
                            if (Array.isArray(e))
                                return new u(e);
                            throw Error("illegal buffer")
                        }
                        , p = function() {
                            return i.Buffer ? function(e) {
                                return (u.create = function(e) {
                                    return i.Buffer.isBuffer(e) ? new n(e) : f(e)
                                }
                                )(e)
                            }
                            : f
                        };
                        function l() {
                            var e = new o(0,0)
                              , t = 0;
                            if (!(this.len - this.pos > 4)) {
                                for (; t < 3; ++t) {
                                    if (this.pos >= this.len)
                                        throw a(this);
                                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                                    this.buf[this.pos++] < 128)
                                        return e
                                }
                                return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0,
                                e
                            }
                            for (; t < 4; ++t)
                                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                                this.buf[this.pos++] < 128)
                                    return e;
                            if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0,
                            e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0,
                            this.buf[this.pos++] < 128)
                                return e;
                            if (t = 0,
                            this.len - this.pos > 4) {
                                for (; t < 5; ++t)
                                    if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                                    this.buf[this.pos++] < 128)
                                        return e
                            } else
                                for (; t < 5; ++t) {
                                    if (this.pos >= this.len)
                                        throw a(this);
                                    if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                                    this.buf[this.pos++] < 128)
                                        return e
                                }
                            throw Error("invalid varint encoding")
                        }
                        function d(e, t) {
                            return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
                        }
                        function h() {
                            if (this.pos + 8 > this.len)
                                throw a(this, 8);
                            return new o(d(this.buf, this.pos += 4),d(this.buf, this.pos += 4))
                        }
                        u.create = p(),
                        u.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice,
                        u.prototype.uint32 = (c = 4294967295,
                        function() {
                            if (c = (127 & this.buf[this.pos]) >>> 0,
                            this.buf[this.pos++] < 128)
                                return c;
                            if (c = (c | (127 & this.buf[this.pos]) << 7) >>> 0,
                            this.buf[this.pos++] < 128)
                                return c;
                            if (c = (c | (127 & this.buf[this.pos]) << 14) >>> 0,
                            this.buf[this.pos++] < 128)
                                return c;
                            if (c = (c | (127 & this.buf[this.pos]) << 21) >>> 0,
                            this.buf[this.pos++] < 128)
                                return c;
                            if (c = (c | (15 & this.buf[this.pos]) << 28) >>> 0,
                            this.buf[this.pos++] < 128)
                                return c;
                            if ((this.pos += 5) > this.len)
                                throw this.pos = this.len,
                                a(this, 10);
                            return c
                        }
                        ),
                        u.prototype.int32 = function() {
                            return 0 | this.uint32()
                        }
                        ,
                        u.prototype.sint32 = function() {
                            var e = this.uint32();
                            return e >>> 1 ^ -(1 & e) | 0
                        }
                        ,
                        u.prototype.bool = function() {
                            return 0 !== this.uint32()
                        }
                        ,
                        u.prototype.fixed32 = function() {
                            if (this.pos + 4 > this.len)
                                throw a(this, 4);
                            return d(this.buf, this.pos += 4)
                        }
                        ,
                        u.prototype.sfixed32 = function() {
                            if (this.pos + 4 > this.len)
                                throw a(this, 4);
                            return 0 | d(this.buf, this.pos += 4)
                        }
                        ,
                        u.prototype.float = function() {
                            if (this.pos + 4 > this.len)
                                throw a(this, 4);
                            var e = i.float.readFloatLE(this.buf, this.pos);
                            return this.pos += 4,
                            e
                        }
                        ,
                        u.prototype.double = function() {
                            if (this.pos + 8 > this.len)
                                throw a(this, 4);
                            var e = i.float.readDoubleLE(this.buf, this.pos);
                            return this.pos += 8,
                            e
                        }
                        ,
                        u.prototype.bytes = function() {
                            var e = this.uint32()
                              , t = this.pos
                              , r = this.pos + e;
                            if (r > this.len)
                                throw a(this, e);
                            return this.pos += e,
                            Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r)
                        }
                        ,
                        u.prototype.string = function() {
                            var e = this.bytes();
                            return s.read(e, 0, e.length)
                        }
                        ,
                        u.prototype.skip = function(e) {
                            if ("number" == typeof e) {
                                if (this.pos + e > this.len)
                                    throw a(this, e);
                                this.pos += e
                            } else
                                do {
                                    if (this.pos >= this.len)
                                        throw a(this)
                                } while (128 & this.buf[this.pos++]);
                            return this
                        }
                        ,
                        u.prototype.skipType = function(e) {
                            switch (e) {
                            case 0:
                                this.skip();
                                break;
                            case 1:
                                this.skip(8);
                                break;
                            case 2:
                                this.skip(this.uint32());
                                break;
                            case 3:
                                for (; 4 != (e = 7 & this.uint32()); )
                                    this.skipType(e);
                                break;
                            case 5:
                                this.skip(4);
                                break;
                            default:
                                throw Error("invalid wire type " + e + " at offset " + this.pos)
                            }
                            return this
                        }
                        ,
                        u._configure = function(e) {
                            n = e,
                            u.create = p(),
                            n._configure();
                            var t = i.Long ? "toLong" : "toNumber";
                            i.merge(u.prototype, {
                                int64: function() {
                                    return l.call(this)[t](!1)
                                },
                                uint64: function() {
                                    return l.call(this)[t](!0)
                                },
                                sint64: function() {
                                    return l.call(this).zzDecode()[t](!1)
                                },
                                fixed64: function() {
                                    return h.call(this)[t](!0)
                                },
                                sfixed64: function() {
                                    return h.call(this)[t](!1)
                                }
                            })
                        }
                    }
                    ,
                    593: (e,t,r)=>{
                        e.exports = o;
                        var n = r(408);
                        (o.prototype = Object.create(n.prototype)).constructor = o;
                        var i = r(693);
                        function o(e) {
                            n.call(this, e)
                        }
                        o._configure = function() {
                            i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice)
                        }
                        ,
                        o.prototype.string = function() {
                            var e = this.uint32();
                            return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
                        }
                        ,
                        o._configure()
                    }
                    ,
                    424: (e,t,r)=>{
                        e.exports = p;
                        var n = r(313);
                        ((p.prototype = Object.create(n.prototype)).constructor = p).className = "Root";
                        var i, o, s, a = r(548), u = r(25), c = r(598), f = r(935);
                        function p(e) {
                            n.call(this, "", e),
                            this.deferred = [],
                            this.files = []
                        }
                        function l() {}
                        p.fromJSON = function(e, t) {
                            return t || (t = new p),
                            e.options && t.setOptions(e.options),
                            t.addJSON(e.nested)
                        }
                        ,
                        p.prototype.resolvePath = f.path.resolve,
                        p.prototype.fetch = f.fetch,
                        p.prototype.load = function e(t, r, n) {
                            "function" == typeof r && (n = r,
                            r = void 0);
                            var i = this;
                            if (!n)
                                return f.asPromise(e, i, t, r);
                            var a = n === l;
                            function u(e, t) {
                                if (n) {
                                    var r = n;
                                    if (n = null,
                                    a)
                                        throw e;
                                    r(e, t)
                                }
                            }
                            function c(e) {
                                var t = e.lastIndexOf("google/protobuf/");
                                if (t > -1) {
                                    var r = e.substring(t);
                                    if (r in s)
                                        return r
                                }
                                return null
                            }
                            function p(e, t) {
                                try {
                                    if (f.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)),
                                    f.isString(t)) {
                                        o.filename = e;
                                        var n, s = o(t, i, r), p = 0;
                                        if (s.imports)
                                            for (; p < s.imports.length; ++p)
                                                (n = c(s.imports[p]) || i.resolvePath(e, s.imports[p])) && d(n);
                                        if (s.weakImports)
                                            for (p = 0; p < s.weakImports.length; ++p)
                                                (n = c(s.weakImports[p]) || i.resolvePath(e, s.weakImports[p])) && d(n, !0)
                                    } else
                                        i.setOptions(t.options).addJSON(t.nested)
                                } catch (e) {
                                    u(e)
                                }
                                a || h || u(null, i)
                            }
                            function d(e, t) {
                                if (!(i.files.indexOf(e) > -1))
                                    if (i.files.push(e),
                                    e in s)
                                        a ? p(e, s[e]) : (++h,
                                        setTimeout((function() {
                                            --h,
                                            p(e, s[e])
                                        }
                                        )));
                                    else if (a) {
                                        var r;
                                        try {
                                            r = f.fs.readFileSync(e).toString("utf8")
                                        } catch (e) {
                                            return void (t || u(e))
                                        }
                                        p(e, r)
                                    } else
                                        ++h,
                                        i.fetch(e, (function(r, o) {
                                            --h,
                                            n && (r ? t ? h || u(null, i) : u(r) : p(e, o))
                                        }
                                        ))
                            }
                            var h = 0;
                            f.isString(t) && (t = [t]);
                            for (var y, v = 0; v < t.length; ++v)
                                (y = i.resolvePath("", t[v])) && d(y);
                            if (a)
                                return i;
                            h || u(null, i)
                        }
                        ,
                        p.prototype.loadSync = function(e, t) {
                            if (!f.isNode)
                                throw Error("not supported");
                            return this.load(e, t, l)
                        }
                        ,
                        p.prototype.resolveAll = function() {
                            if (this.deferred.length)
                                throw Error("unresolvable extensions: " + this.deferred.map((function(e) {
                                    return "'extend " + e.extend + "' in " + e.parent.fullName
                                }
                                )).join(", "));
                            return n.prototype.resolveAll.call(this)
                        }
                        ;
                        var d = /^[A-Z]/;
                        function h(e, t) {
                            var r = t.parent.lookup(t.extend);
                            if (r) {
                                var n = new a(t.fullName,t.id,t.type,t.rule,void 0,t.options);
                                return n.declaringField = t,
                                t.extensionField = n,
                                r.add(n),
                                !0
                            }
                            return !1
                        }
                        p.prototype._handleAdd = function(e) {
                            if (e instanceof a)
                                void 0 === e.extend || e.extensionField || h(0, e) || this.deferred.push(e);
                            else if (e instanceof u)
                                d.test(e.name) && (e.parent[e.name] = e.values);
                            else if (!(e instanceof c)) {
                                if (e instanceof i)
                                    for (var t = 0; t < this.deferred.length; )
                                        h(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                                for (var r = 0; r < e.nestedArray.length; ++r)
                                    this._handleAdd(e._nestedArray[r]);
                                d.test(e.name) && (e.parent[e.name] = e)
                            }
                        }
                        ,
                        p.prototype._handleRemove = function(e) {
                            if (e instanceof a) {
                                if (void 0 !== e.extend)
                                    if (e.extensionField)
                                        e.extensionField.parent.remove(e.extensionField),
                                        e.extensionField = null;
                                    else {
                                        var t = this.deferred.indexOf(e);
                                        t > -1 && this.deferred.splice(t, 1)
                                    }
                            } else if (e instanceof u)
                                d.test(e.name) && delete e.parent[e.name];
                            else if (e instanceof n) {
                                for (var r = 0; r < e.nestedArray.length; ++r)
                                    this._handleRemove(e._nestedArray[r]);
                                d.test(e.name) && delete e.parent[e.name]
                            }
                        }
                        ,
                        p._configure = function(e, t, r) {
                            i = e,
                            o = t,
                            s = r
                        }
                    }
                    ,
                    54: e=>{
                        e.exports = {}
                    }
                    ,
                    994: (e,t,r)=>{
                        t.Service = r(948)
                    }
                    ,
                    948: (e,t,r)=>{
                        e.exports = i;
                        var n = r(693);
                        function i(e, t, r) {
                            if ("function" != typeof e)
                                throw TypeError("rpcImpl must be a function");
                            n.EventEmitter.call(this),
                            this.rpcImpl = e,
                            this.requestDelimited = Boolean(t),
                            this.responseDelimited = Boolean(r)
                        }
                        (i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i,
                        i.prototype.rpcCall = function e(t, r, i, o, s) {
                            if (!o)
                                throw TypeError("request must be specified");
                            var a = this;
                            if (!s)
                                return n.asPromise(e, a, t, r, i, o);
                            if (a.rpcImpl)
                                try {
                                    return a.rpcImpl(t, r[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), (function(e, r) {
                                        if (e)
                                            return a.emit("error", e, t),
                                            s(e);
                                        if (null !== r) {
                                            if (!(r instanceof i))
                                                try {
                                                    r = i[a.responseDelimited ? "decodeDelimited" : "decode"](r)
                                                } catch (e) {
                                                    return a.emit("error", e, t),
                                                    s(e)
                                                }
                                            return a.emit("data", r, t),
                                            s(null, r)
                                        }
                                        a.end(!0)
                                    }
                                    ))
                                } catch (e) {
                                    return a.emit("error", e, t),
                                    void setTimeout((function() {
                                        s(e)
                                    }
                                    ), 0)
                                }
                            else
                                setTimeout((function() {
                                    s(Error("already ended"))
                                }
                                ), 0)
                        }
                        ,
                        i.prototype.end = function(e) {
                            return this.rpcImpl && (e || this.rpcImpl(null, null, null),
                            this.rpcImpl = null,
                            this.emit("end").off()),
                            this
                        }
                    }
                    ,
                    513: (e,t,r)=>{
                        e.exports = a;
                        var n = r(313);
                        ((a.prototype = Object.create(n.prototype)).constructor = a).className = "Service";
                        var i = r(429)
                          , o = r(935)
                          , s = r(994);
                        function a(e, t) {
                            n.call(this, e, t),
                            this.methods = {},
                            this._methodsArray = null
                        }
                        function u(e) {
                            return e._methodsArray = null,
                            e
                        }
                        a.fromJSON = function(e, t) {
                            var r = new a(e,t.options);
                            if (t.methods)
                                for (var n = Object.keys(t.methods), o = 0; o < n.length; ++o)
                                    r.add(i.fromJSON(n[o], t.methods[n[o]]));
                            return t.nested && r.addJSON(t.nested),
                            r.comment = t.comment,
                            r
                        }
                        ,
                        a.prototype.toJSON = function(e) {
                            var t = n.prototype.toJSON.call(this, e)
                              , r = !!e && Boolean(e.keepComments);
                            return o.toObject(["options", t && t.options || void 0, "methods", n.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || void 0, "comment", r ? this.comment : void 0])
                        }
                        ,
                        Object.defineProperty(a.prototype, "methodsArray", {
                            get: function() {
                                return this._methodsArray || (this._methodsArray = o.toArray(this.methods))
                            }
                        }),
                        a.prototype.get = function(e) {
                            return this.methods[e] || n.prototype.get.call(this, e)
                        }
                        ,
                        a.prototype.resolveAll = function() {
                            for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                                e[t].resolve();
                            return n.prototype.resolve.call(this)
                        }
                        ,
                        a.prototype.add = function(e) {
                            if (this.get(e.name))
                                throw Error("duplicate name '" + e.name + "' in " + this);
                            return e instanceof i ? (this.methods[e.name] = e,
                            e.parent = this,
                            u(this)) : n.prototype.add.call(this, e)
                        }
                        ,
                        a.prototype.remove = function(e) {
                            if (e instanceof i) {
                                if (this.methods[e.name] !== e)
                                    throw Error(e + " is not a member of " + this);
                                return delete this.methods[e.name],
                                e.parent = null,
                                u(this)
                            }
                            return n.prototype.remove.call(this, e)
                        }
                        ,
                        a.prototype.create = function(e, t, r) {
                            for (var n, i = new s.Service(e,t,r), a = 0; a < this.methodsArray.length; ++a) {
                                var u = o.lcFirst((n = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
                                i[u] = o.codegen(["r", "c"], o.isReserved(u) ? u + "_" : u)("return this.rpcCall(m,q,s,r,c)")({
                                    m: n,
                                    q: n.resolvedRequestType.ctor,
                                    s: n.resolvedResponseType.ctor
                                })
                            }
                            return i
                        }
                    }
                    ,
                    645: (e,t,r)=>{
                        e.exports = g;
                        var n = r(313);
                        ((g.prototype = Object.create(n.prototype)).constructor = g).className = "Type";
                        var i = r(25)
                          , o = r(598)
                          , s = r(548)
                          , a = r(39)
                          , u = r(513)
                          , c = r(368)
                          , f = r(408)
                          , p = r(173)
                          , l = r(935)
                          , d = r(928)
                          , h = r(305)
                          , y = r(497)
                          , v = r(996)
                          , m = r(667);
                        function g(e, t) {
                            n.call(this, e, t),
                            this.fields = {},
                            this.oneofs = void 0,
                            this.extensions = void 0,
                            this.reserved = void 0,
                            this.group = void 0,
                            this._fieldsById = null,
                            this._fieldsArray = null,
                            this._oneofsArray = null,
                            this._ctor = null
                        }
                        function b(e) {
                            return e._fieldsById = e._fieldsArray = e._oneofsArray = null,
                            delete e.encode,
                            delete e.decode,
                            delete e.verify,
                            e
                        }
                        Object.defineProperties(g.prototype, {
                            fieldsById: {
                                get: function() {
                                    if (this._fieldsById)
                                        return this._fieldsById;
                                    this._fieldsById = {};
                                    for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                                        var r = this.fields[e[t]]
                                          , n = r.id;
                                        if (this._fieldsById[n])
                                            throw Error("duplicate id " + n + " in " + this);
                                        this._fieldsById[n] = r
                                    }
                                    return this._fieldsById
                                }
                            },
                            fieldsArray: {
                                get: function() {
                                    return this._fieldsArray || (this._fieldsArray = l.toArray(this.fields))
                                }
                            },
                            oneofsArray: {
                                get: function() {
                                    return this._oneofsArray || (this._oneofsArray = l.toArray(this.oneofs))
                                }
                            },
                            ctor: {
                                get: function() {
                                    return this._ctor || (this.ctor = g.generateConstructor(this)())
                                },
                                set: function(e) {
                                    var t = e.prototype;
                                    t instanceof c || ((e.prototype = new c).constructor = e,
                                    l.merge(e.prototype, t)),
                                    e.$type = e.prototype.$type = this,
                                    l.merge(e, c, !0),
                                    this._ctor = e;
                                    for (var r = 0; r < this.fieldsArray.length; ++r)
                                        this._fieldsArray[r].resolve();
                                    var n = {};
                                    for (r = 0; r < this.oneofsArray.length; ++r)
                                        n[this._oneofsArray[r].resolve().name] = {
                                            get: l.oneOfGetter(this._oneofsArray[r].oneof),
                                            set: l.oneOfSetter(this._oneofsArray[r].oneof)
                                        };
                                    r && Object.defineProperties(e.prototype, n)
                                }
                            }
                        }),
                        g.generateConstructor = function(e) {
                            for (var t, r = l.codegen(["p"], e.name), n = 0; n < e.fieldsArray.length; ++n)
                                (t = e._fieldsArray[n]).map ? r("this%s={}", l.safeProp(t.name)) : t.repeated && r("this%s=[]", l.safeProp(t.name));
                            return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
                        }
                        ,
                        g.fromJSON = function(e, t) {
                            var r = new g(e,t.options);
                            r.extensions = t.extensions,
                            r.reserved = t.reserved;
                            for (var c = Object.keys(t.fields), f = 0; f < c.length; ++f)
                                r.add((void 0 !== t.fields[c[f]].keyType ? a.fromJSON : s.fromJSON)(c[f], t.fields[c[f]]));
                            if (t.oneofs)
                                for (c = Object.keys(t.oneofs),
                                f = 0; f < c.length; ++f)
                                    r.add(o.fromJSON(c[f], t.oneofs[c[f]]));
                            if (t.nested)
                                for (c = Object.keys(t.nested),
                                f = 0; f < c.length; ++f) {
                                    var p = t.nested[c[f]];
                                    r.add((void 0 !== p.id ? s.fromJSON : void 0 !== p.fields ? g.fromJSON : void 0 !== p.values ? i.fromJSON : void 0 !== p.methods ? u.fromJSON : n.fromJSON)(c[f], p))
                                }
                            return t.extensions && t.extensions.length && (r.extensions = t.extensions),
                            t.reserved && t.reserved.length && (r.reserved = t.reserved),
                            t.group && (r.group = !0),
                            t.comment && (r.comment = t.comment),
                            r
                        }
                        ,
                        g.prototype.toJSON = function(e) {
                            var t = n.prototype.toJSON.call(this, e)
                              , r = !!e && Boolean(e.keepComments);
                            return l.toObject(["options", t && t.options || void 0, "oneofs", n.arrayToJSON(this.oneofsArray, e), "fields", n.arrayToJSON(this.fieldsArray.filter((function(e) {
                                return !e.declaringField
                            }
                            )), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", t && t.nested || void 0, "comment", r ? this.comment : void 0])
                        }
                        ,
                        g.prototype.resolveAll = function() {
                            for (var e = this.fieldsArray, t = 0; t < e.length; )
                                e[t++].resolve();
                            var r = this.oneofsArray;
                            for (t = 0; t < r.length; )
                                r[t++].resolve();
                            return n.prototype.resolveAll.call(this)
                        }
                        ,
                        g.prototype.get = function(e) {
                            return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
                        }
                        ,
                        g.prototype.add = function(e) {
                            if (this.get(e.name))
                                throw Error("duplicate name '" + e.name + "' in " + this);
                            if (e instanceof s && void 0 === e.extend) {
                                if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id])
                                    throw Error("duplicate id " + e.id + " in " + this);
                                if (this.isReservedId(e.id))
                                    throw Error("id " + e.id + " is reserved in " + this);
                                if (this.isReservedName(e.name))
                                    throw Error("name '" + e.name + "' is reserved in " + this);
                                return e.parent && e.parent.remove(e),
                                this.fields[e.name] = e,
                                e.message = this,
                                e.onAdd(this),
                                b(this)
                            }
                            return e instanceof o ? (this.oneofs || (this.oneofs = {}),
                            this.oneofs[e.name] = e,
                            e.onAdd(this),
                            b(this)) : n.prototype.add.call(this, e)
                        }
                        ,
                        g.prototype.remove = function(e) {
                            if (e instanceof s && void 0 === e.extend) {
                                if (!this.fields || this.fields[e.name] !== e)
                                    throw Error(e + " is not a member of " + this);
                                return delete this.fields[e.name],
                                e.parent = null,
                                e.onRemove(this),
                                b(this)
                            }
                            if (e instanceof o) {
                                if (!this.oneofs || this.oneofs[e.name] !== e)
                                    throw Error(e + " is not a member of " + this);
                                return delete this.oneofs[e.name],
                                e.parent = null,
                                e.onRemove(this),
                                b(this)
                            }
                            return n.prototype.remove.call(this, e)
                        }
                        ,
                        g.prototype.isReservedId = function(e) {
                            return n.isReservedId(this.reserved, e)
                        }
                        ,
                        g.prototype.isReservedName = function(e) {
                            return n.isReservedName(this.reserved, e)
                        }
                        ,
                        g.prototype.create = function(e) {
                            return new this.ctor(e)
                        }
                        ,
                        g.prototype.setup = function() {
                            for (var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r)
                                t.push(this._fieldsArray[r].resolve().resolvedType);
                            this.encode = d(this)({
                                Writer: p,
                                types: t,
                                util: l
                            }),
                            this.decode = h(this)({
                                Reader: f,
                                types: t,
                                util: l
                            }),
                            this.verify = y(this)({
                                types: t,
                                util: l
                            }),
                            this.fromObject = v.fromObject(this)({
                                types: t,
                                util: l
                            }),
                            this.toObject = v.toObject(this)({
                                types: t,
                                util: l
                            });
                            var n = m[e];
                            if (n) {
                                var i = Object.create(this);
                                i.fromObject = this.fromObject,
                                this.fromObject = n.fromObject.bind(i),
                                i.toObject = this.toObject,
                                this.toObject = n.toObject.bind(i)
                            }
                            return this
                        }
                        ,
                        g.prototype.encode = function(e, t) {
                            return this.setup().encode(e, t)
                        }
                        ,
                        g.prototype.encodeDelimited = function(e, t) {
                            return this.encode(e, t && t.len ? t.fork() : t).ldelim()
                        }
                        ,
                        g.prototype.decode = function(e, t) {
                            return this.setup().decode(e, t)
                        }
                        ,
                        g.prototype.decodeDelimited = function(e) {
                            return e instanceof f || (e = f.create(e)),
                            this.decode(e, e.uint32())
                        }
                        ,
                        g.prototype.verify = function(e) {
                            return this.setup().verify(e)
                        }
                        ,
                        g.prototype.fromObject = function(e) {
                            return this.setup().fromObject(e)
                        }
                        ,
                        g.prototype.toObject = function(e, t) {
                            return this.setup().toObject(e, t)
                        }
                        ,
                        g.d = function(e) {
                            return function(t) {
                                l.decorateType(t, e)
                            }
                        }
                    }
                    ,
                    63: (e,t,r)=>{
                        var n = t
                          , i = r(935)
                          , o = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
                        function s(e, t) {
                            var r = 0
                              , n = {};
                            for (t |= 0; r < e.length; )
                                n[o[r + t]] = e[r++];
                            return n
                        }
                        n.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]),
                        n.defaults = s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", i.emptyArray, null]),
                        n.long = s([0, 0, 0, 1, 1], 7),
                        n.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2),
                        n.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
                    }
                    ,
                    935: (e,t,r)=>{
                        var n, i, o = e.exports = r(693), s = r(54);
                        o.codegen = r(124),
                        o.fetch = r(154),
                        o.path = r(626),
                        o.fs = o.inquire("fs"),
                        o.toArray = function(e) {
                            if (e) {
                                for (var t = Object.keys(e), r = new Array(t.length), n = 0; n < t.length; )
                                    r[n] = e[t[n++]];
                                return r
                            }
                            return []
                        }
                        ,
                        o.toObject = function(e) {
                            for (var t = {}, r = 0; r < e.length; ) {
                                var n = e[r++]
                                  , i = e[r++];
                                void 0 !== i && (t[n] = i)
                            }
                            return t
                        }
                        ;
                        var a = /\\/g
                          , u = /"/g;
                        o.isReserved = function(e) {
                            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
                        }
                        ,
                        o.safeProp = function(e) {
                            return !/^[$\w_]+$/.test(e) || o.isReserved(e) ? '["' + e.replace(a, "\\\\").replace(u, '\\"') + '"]' : "." + e
                        }
                        ,
                        o.ucFirst = function(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }
                        ;
                        var c = /_([a-z])/g;
                        o.camelCase = function(e) {
                            return e.substring(0, 1) + e.substring(1).replace(c, (function(e, t) {
                                return t.toUpperCase()
                            }
                            ))
                        }
                        ,
                        o.compareFieldsById = function(e, t) {
                            return e.id - t.id
                        }
                        ,
                        o.decorateType = function(e, t) {
                            if (e.$type)
                                return t && e.$type.name !== t && (o.decorateRoot.remove(e.$type),
                                e.$type.name = t,
                                o.decorateRoot.add(e.$type)),
                                e.$type;
                            n || (n = r(645));
                            var i = new n(t || e.name);
                            return o.decorateRoot.add(i),
                            i.ctor = e,
                            Object.defineProperty(e, "$type", {
                                value: i,
                                enumerable: !1
                            }),
                            Object.defineProperty(e.prototype, "$type", {
                                value: i,
                                enumerable: !1
                            }),
                            i
                        }
                        ;
                        var f = 0;
                        o.decorateEnum = function(e) {
                            if (e.$type)
                                return e.$type;
                            i || (i = r(25));
                            var t = new i("Enum" + f++,e);
                            return o.decorateRoot.add(t),
                            Object.defineProperty(e, "$type", {
                                value: t,
                                enumerable: !1
                            }),
                            t
                        }
                        ,
                        o.setProperty = function(e, t, r) {
                            if ("object" != typeof e)
                                throw TypeError("dst must be an object");
                            if (!t)
                                throw TypeError("path must be specified");
                            return function e(t, r, n) {
                                var i = r.shift();
                                if (r.length > 0)
                                    t[i] = e(t[i] || {}, r, n);
                                else {
                                    var o = t[i];
                                    o && (n = [].concat(o).concat(n)),
                                    t[i] = n
                                }
                                return t
                            }(e, t = t.split("."), r)
                        }
                        ,
                        Object.defineProperty(o, "decorateRoot", {
                            get: function() {
                                return s.decorated || (s.decorated = new (r(424)))
                            }
                        })
                    }
                    ,
                    630: (e,t,r)=>{
                        e.exports = i;
                        var n = r(693);
                        function i(e, t) {
                            this.lo = e >>> 0,
                            this.hi = t >>> 0
                        }
                        var o = i.zero = new i(0,0);
                        o.toNumber = function() {
                            return 0
                        }
                        ,
                        o.zzEncode = o.zzDecode = function() {
                            return this
                        }
                        ,
                        o.length = function() {
                            return 1
                        }
                        ;
                        var s = i.zeroHash = "\0\0\0\0\0\0\0\0";
                        i.fromNumber = function(e) {
                            if (0 === e)
                                return o;
                            var t = e < 0;
                            t && (e = -e);
                            var r = e >>> 0
                              , n = (e - r) / 4294967296 >>> 0;
                            return t && (n = ~n >>> 0,
                            r = ~r >>> 0,
                            ++r > 4294967295 && (r = 0,
                            ++n > 4294967295 && (n = 0))),
                            new i(r,n)
                        }
                        ,
                        i.from = function(e) {
                            if ("number" == typeof e)
                                return i.fromNumber(e);
                            if (n.isString(e)) {
                                if (!n.Long)
                                    return i.fromNumber(parseInt(e, 10));
                                e = n.Long.fromString(e)
                            }
                            return e.low || e.high ? new i(e.low >>> 0,e.high >>> 0) : o
                        }
                        ,
                        i.prototype.toNumber = function(e) {
                            if (!e && this.hi >>> 31) {
                                var t = 1 + ~this.lo >>> 0
                                  , r = ~this.hi >>> 0;
                                return t || (r = r + 1 >>> 0),
                                -(t + 4294967296 * r)
                            }
                            return this.lo + 4294967296 * this.hi
                        }
                        ,
                        i.prototype.toLong = function(e) {
                            return n.Long ? new n.Long(0 | this.lo,0 | this.hi,Boolean(e)) : {
                                low: 0 | this.lo,
                                high: 0 | this.hi,
                                unsigned: Boolean(e)
                            }
                        }
                        ;
                        var a = String.prototype.charCodeAt;
                        i.fromHash = function(e) {
                            return e === s ? o : new i((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0,(a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0)
                        }
                        ,
                        i.prototype.toHash = function() {
                            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
                        }
                        ,
                        i.prototype.zzEncode = function() {
                            var e = this.hi >> 31;
                            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0,
                            this.lo = (this.lo << 1 ^ e) >>> 0,
                            this
                        }
                        ,
                        i.prototype.zzDecode = function() {
                            var e = -(1 & this.lo);
                            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0,
                            this.hi = (this.hi >>> 1 ^ e) >>> 0,
                            this
                        }
                        ,
                        i.prototype.length = function() {
                            var e = this.lo
                              , t = (this.lo >>> 28 | this.hi << 4) >>> 0
                              , r = this.hi >>> 24;
                            return 0 === r ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
                        }
                    }
                    ,
                    693: function(e, t, r) {
                        var n = t;
                        function i(e, t, r) {
                            for (var n = Object.keys(t), i = 0; i < n.length; ++i)
                                void 0 !== e[n[i]] && r || (e[n[i]] = t[n[i]]);
                            return e
                        }
                        function o(e) {
                            function t(e, r) {
                                if (!(this instanceof t))
                                    return new t(e,r);
                                Object.defineProperty(this, "message", {
                                    get: function() {
                                        return e
                                    }
                                }),
                                Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                                    value: (new Error).stack || ""
                                }),
                                r && i(this, r)
                            }
                            return (t.prototype = Object.create(Error.prototype)).constructor = t,
                            Object.defineProperty(t.prototype, "name", {
                                get: function() {
                                    return e
                                }
                            }),
                            t.prototype.toString = function() {
                                return this.name + ": " + this.message
                            }
                            ,
                            t
                        }
                        n.asPromise = r(537),
                        n.base64 = r(419),
                        n.EventEmitter = r(211),
                        n.float = r(945),
                        n.inquire = r(199),
                        n.utf8 = r(997),
                        n.pool = r(662),
                        n.LongBits = r(630),
                        n.isNode = Boolean(void 0 !== r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node),
                        n.global = n.isNode && r.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this,
                        n.emptyArray = Object.freeze ? Object.freeze([]) : [],
                        n.emptyObject = Object.freeze ? Object.freeze({}) : {},
                        n.isInteger = Number.isInteger || function(e) {
                            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
                        }
                        ,
                        n.isString = function(e) {
                            return "string" == typeof e || e instanceof String
                        }
                        ,
                        n.isObject = function(e) {
                            return e && "object" == typeof e
                        }
                        ,
                        n.isset = n.isSet = function(e, t) {
                            var r = e[t];
                            return !(null == r || !e.hasOwnProperty(t)) && ("object" != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
                        }
                        ,
                        n.Buffer = function() {
                            try {
                                var e = n.inquire("buffer").Buffer;
                                return e.prototype.utf8Write ? e : null
                            } catch (e) {
                                return null
                            }
                        }(),
                        n._Buffer_from = null,
                        n._Buffer_allocUnsafe = null,
                        n.newBuffer = function(e) {
                            return "number" == typeof e ? n.Buffer ? n._Buffer_allocUnsafe(e) : new n.Array(e) : n.Buffer ? n._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
                        }
                        ,
                        n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                        n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"),
                        n.key2Re = /^true|false|0|1$/,
                        n.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
                        n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
                        n.longToHash = function(e) {
                            return e ? n.LongBits.from(e).toHash() : n.LongBits.zeroHash
                        }
                        ,
                        n.longFromHash = function(e, t) {
                            var r = n.LongBits.fromHash(e);
                            return n.Long ? n.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t))
                        }
                        ,
                        n.merge = i,
                        n.lcFirst = function(e) {
                            return e.charAt(0).toLowerCase() + e.substring(1)
                        }
                        ,
                        n.newError = o,
                        n.ProtocolError = o("ProtocolError"),
                        n.oneOfGetter = function(e) {
                            for (var t = {}, r = 0; r < e.length; ++r)
                                t[e[r]] = 1;
                            return function() {
                                for (var e = Object.keys(this), r = e.length - 1; r > -1; --r)
                                    if (1 === t[e[r]] && void 0 !== this[e[r]] && null !== this[e[r]])
                                        return e[r]
                            }
                        }
                        ,
                        n.oneOfSetter = function(e) {
                            return function(t) {
                                for (var r = 0; r < e.length; ++r)
                                    e[r] !== t && delete this[e[r]]
                            }
                        }
                        ,
                        n.toJSONOptions = {
                            longs: String,
                            enums: String,
                            bytes: String,
                            json: !0
                        },
                        n._configure = function() {
                            var e = n.Buffer;
                            e ? (n._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, r) {
                                return new e(t,r)
                            }
                            ,
                            n._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                                return new e(t)
                            }
                            ) : n._Buffer_from = n._Buffer_allocUnsafe = null
                        }
                    },
                    497: (e,t,r)=>{
                        e.exports = function(e) {
                            var t = i.codegen(["m"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")
                              , r = {};
                            e.oneofsArray.length && t("var p={}");
                            for (var n = 0; n < e.fieldsArray.length; ++n) {
                                var u = e._fieldsArray[n].resolve()
                                  , c = "m" + i.safeProp(u.name);
                                if (u.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", c, u.name),
                                u.map)
                                    t("if(!util.isObject(%s))", c)("return%j", o(u, "object"))("var k=Object.keys(%s)", c)("for(var i=0;i<k.length;++i){"),
                                    a(t, u, "k[i]"),
                                    s(t, u, n, c + "[k[i]]")("}");
                                else if (u.repeated)
                                    t("if(!Array.isArray(%s))", c)("return%j", o(u, "array"))("for(var i=0;i<%s.length;++i){", c),
                                    s(t, u, n, c + "[i]")("}");
                                else {
                                    if (u.partOf) {
                                        var f = i.safeProp(u.partOf.name);
                                        1 === r[u.partOf.name] && t("if(p%s===1)", f)("return%j", u.partOf.name + ": multiple values"),
                                        r[u.partOf.name] = 1,
                                        t("p%s=1", f)
                                    }
                                    s(t, u, n, c)
                                }
                                u.optional && t("}")
                            }
                            return t("return null")
                        }
                        ;
                        var n = r(25)
                          , i = r(935);
                        function o(e, t) {
                            return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected"
                        }
                        function s(e, t, r, i) {
                            if (t.resolvedType)
                                if (t.resolvedType instanceof n) {
                                    e("switch(%s){", i)("default:")("return%j", o(t, "enum value"));
                                    for (var s = Object.keys(t.resolvedType.values), a = 0; a < s.length; ++a)
                                        e("case %i:", t.resolvedType.values[s[a]]);
                                    e("break")("}")
                                } else
                                    e("{")("var e=types[%i].verify(%s);", r, i)("if(e)")("return%j+e", t.name + ".")("}");
                            else
                                switch (t.type) {
                                case "int32":
                                case "uint32":
                                case "sint32":
                                case "fixed32":
                                case "sfixed32":
                                    e("if(!util.isInteger(%s))", i)("return%j", o(t, "integer"));
                                    break;
                                case "int64":
                                case "uint64":
                                case "sint64":
                                case "fixed64":
                                case "sfixed64":
                                    e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", o(t, "integer|Long"));
                                    break;
                                case "float":
                                case "double":
                                    e('if(typeof %s!=="number")', i)("return%j", o(t, "number"));
                                    break;
                                case "bool":
                                    e('if(typeof %s!=="boolean")', i)("return%j", o(t, "boolean"));
                                    break;
                                case "string":
                                    e("if(!util.isString(%s))", i)("return%j", o(t, "string"));
                                    break;
                                case "bytes":
                                    e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", o(t, "buffer"))
                                }
                            return e
                        }
                        function a(e, t, r) {
                            switch (t.keyType) {
                            case "int32":
                            case "uint32":
                            case "sint32":
                            case "fixed32":
                            case "sfixed32":
                                e("if(!util.key32Re.test(%s))", r)("return%j", o(t, "integer key"));
                                break;
                            case "int64":
                            case "uint64":
                            case "sint64":
                            case "fixed64":
                            case "sfixed64":
                                e("if(!util.key64Re.test(%s))", r)("return%j", o(t, "integer|Long key"));
                                break;
                            case "bool":
                                e("if(!util.key2Re.test(%s))", r)("return%j", o(t, "boolean key"))
                            }
                            return e
                        }
                    }
                    ,
                    667: (e,t,r)=>{
                        var n = t
                          , i = r(368);
                        n[".google.protobuf.Any"] = {
                            fromObject: function(e) {
                                if (e && e["@type"]) {
                                    var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1)
                                      , r = this.lookup(t);
                                    if (r) {
                                        var n = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
                                        return -1 === n.indexOf("/") && (n = "/" + n),
                                        this.create({
                                            type_url: n,
                                            value: r.encode(r.fromObject(e)).finish()
                                        })
                                    }
                                }
                                return this.fromObject(e)
                            },
                            toObject: function(e, t) {
                                var r = ""
                                  , n = "";
                                if (t && t.json && e.type_url && e.value) {
                                    n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1),
                                    r = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
                                    var o = this.lookup(n);
                                    o && (e = o.decode(e.value))
                                }
                                if (!(e instanceof this.ctor) && e instanceof i) {
                                    var s = e.$type.toObject(e, t);
                                    return "" === r && (r = "type.googleapis.com/"),
                                    n = r + ("." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName),
                                    s["@type"] = n,
                                    s
                                }
                                return this.toObject(e, t)
                            }
                        }
                    }
                    ,
                    173: (e,t,r)=>{
                        e.exports = p;
                        var n, i = r(693), o = i.LongBits, s = i.base64, a = i.utf8;
                        function u(e, t, r) {
                            this.fn = e,
                            this.len = t,
                            this.next = void 0,
                            this.val = r
                        }
                        function c() {}
                        function f(e) {
                            this.head = e.head,
                            this.tail = e.tail,
                            this.len = e.len,
                            this.next = e.states
                        }
                        function p() {
                            this.len = 0,
                            this.head = new u(c,0,0),
                            this.tail = this.head,
                            this.states = null
                        }
                        var l = function() {
                            return i.Buffer ? function() {
                                return (p.create = function() {
                                    return new n
                                }
                                )()
                            }
                            : function() {
                                return new p
                            }
                        };
                        function d(e, t, r) {
                            t[r] = 255 & e
                        }
                        function h(e, t) {
                            this.len = e,
                            this.next = void 0,
                            this.val = t
                        }
                        function y(e, t, r) {
                            for (; e.hi; )
                                t[r++] = 127 & e.lo | 128,
                                e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0,
                                e.hi >>>= 7;
                            for (; e.lo > 127; )
                                t[r++] = 127 & e.lo | 128,
                                e.lo = e.lo >>> 7;
                            t[r++] = e.lo
                        }
                        function v(e, t, r) {
                            t[r] = 255 & e,
                            t[r + 1] = e >>> 8 & 255,
                            t[r + 2] = e >>> 16 & 255,
                            t[r + 3] = e >>> 24
                        }
                        p.create = l(),
                        p.alloc = function(e) {
                            return new i.Array(e)
                        }
                        ,
                        i.Array !== Array && (p.alloc = i.pool(p.alloc, i.Array.prototype.subarray)),
                        p.prototype._push = function(e, t, r) {
                            return this.tail = this.tail.next = new u(e,t,r),
                            this.len += t,
                            this
                        }
                        ,
                        h.prototype = Object.create(u.prototype),
                        h.prototype.fn = function(e, t, r) {
                            for (; e > 127; )
                                t[r++] = 127 & e | 128,
                                e >>>= 7;
                            t[r] = e
                        }
                        ,
                        p.prototype.uint32 = function(e) {
                            return this.len += (this.tail = this.tail.next = new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5,e)).len,
                            this
                        }
                        ,
                        p.prototype.int32 = function(e) {
                            return e < 0 ? this._push(y, 10, o.fromNumber(e)) : this.uint32(e)
                        }
                        ,
                        p.prototype.sint32 = function(e) {
                            return this.uint32((e << 1 ^ e >> 31) >>> 0)
                        }
                        ,
                        p.prototype.uint64 = function(e) {
                            var t = o.from(e);
                            return this._push(y, t.length(), t)
                        }
                        ,
                        p.prototype.int64 = p.prototype.uint64,
                        p.prototype.sint64 = function(e) {
                            var t = o.from(e).zzEncode();
                            return this._push(y, t.length(), t)
                        }
                        ,
                        p.prototype.bool = function(e) {
                            return this._push(d, 1, e ? 1 : 0)
                        }
                        ,
                        p.prototype.fixed32 = function(e) {
                            return this._push(v, 4, e >>> 0)
                        }
                        ,
                        p.prototype.sfixed32 = p.prototype.fixed32,
                        p.prototype.fixed64 = function(e) {
                            var t = o.from(e);
                            return this._push(v, 4, t.lo)._push(v, 4, t.hi)
                        }
                        ,
                        p.prototype.sfixed64 = p.prototype.fixed64,
                        p.prototype.float = function(e) {
                            return this._push(i.float.writeFloatLE, 4, e)
                        }
                        ,
                        p.prototype.double = function(e) {
                            return this._push(i.float.writeDoubleLE, 8, e)
                        }
                        ;
                        var m = i.Array.prototype.set ? function(e, t, r) {
                            t.set(e, r)
                        }
                        : function(e, t, r) {
                            for (var n = 0; n < e.length; ++n)
                                t[r + n] = e[n]
                        }
                        ;
                        p.prototype.bytes = function(e) {
                            var t = e.length >>> 0;
                            if (!t)
                                return this._push(d, 1, 0);
                            if (i.isString(e)) {
                                var r = p.alloc(t = s.length(e));
                                s.decode(e, r, 0),
                                e = r
                            }
                            return this.uint32(t)._push(m, t, e)
                        }
                        ,
                        p.prototype.string = function(e) {
                            var t = a.length(e);
                            return t ? this.uint32(t)._push(a.write, t, e) : this._push(d, 1, 0)
                        }
                        ,
                        p.prototype.fork = function() {
                            return this.states = new f(this),
                            this.head = this.tail = new u(c,0,0),
                            this.len = 0,
                            this
                        }
                        ,
                        p.prototype.reset = function() {
                            return this.states ? (this.head = this.states.head,
                            this.tail = this.states.tail,
                            this.len = this.states.len,
                            this.states = this.states.next) : (this.head = this.tail = new u(c,0,0),
                            this.len = 0),
                            this
                        }
                        ,
                        p.prototype.ldelim = function() {
                            var e = this.head
                              , t = this.tail
                              , r = this.len;
                            return this.reset().uint32(r),
                            r && (this.tail.next = e.next,
                            this.tail = t,
                            this.len += r),
                            this
                        }
                        ,
                        p.prototype.finish = function() {
                            for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e; )
                                e.fn(e.val, t, r),
                                r += e.len,
                                e = e.next;
                            return t
                        }
                        ,
                        p._configure = function(e) {
                            n = e,
                            p.create = l(),
                            n._configure()
                        }
                    }
                    ,
                    155: (e,t,r)=>{
                        e.exports = o;
                        var n = r(173);
                        (o.prototype = Object.create(n.prototype)).constructor = o;
                        var i = r(693);
                        function o() {
                            n.call(this)
                        }
                        function s(e, t, r) {
                            e.length < 40 ? i.utf8.write(e, t, r) : t.utf8Write ? t.utf8Write(e, r) : t.write(e, r)
                        }
                        o._configure = function() {
                            o.alloc = i._Buffer_allocUnsafe,
                            o.writeBytesBuffer = i.Buffer && i.Buffer.prototype instanceof Uint8Array && "set" === i.Buffer.prototype.set.name ? function(e, t, r) {
                                t.set(e, r)
                            }
                            : function(e, t, r) {
                                if (e.copy)
                                    e.copy(t, r, 0, e.length);
                                else
                                    for (var n = 0; n < e.length; )
                                        t[r++] = e[n++]
                            }
                        }
                        ,
                        o.prototype.bytes = function(e) {
                            i.isString(e) && (e = i._Buffer_from(e, "base64"));
                            var t = e.length >>> 0;
                            return this.uint32(t),
                            t && this._push(o.writeBytesBuffer, t, e),
                            this
                        }
                        ,
                        o.prototype.string = function(e) {
                            var t = i.Buffer.byteLength(e);
                            return this.uint32(t),
                            t && this._push(s, t, e),
                            this
                        }
                        ,
                        o._configure()
                    }
                }
                  , __webpack_module_cache__ = {};
                function __webpack_require__(e) {
                    var t = __webpack_module_cache__[e];
                    if (void 0 !== t)
                        return t.exports;
                    var r = __webpack_module_cache__[e] = {
                        exports: {}
                    };
                    return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__),
                    r.exports
                }
                __webpack_require__.d = (e,t)=>{
                    for (var r in t)
                        __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r]
                        })
                }
                ,
                __webpack_require__.g = function() {
                    if ("object" == typeof globalThis)
                        return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window)
                            return window
                    }
                }(),
                __webpack_require__.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t);
                var __webpack_exports__ = {};
                return (()=>{
                    __webpack_require__.d(__webpack_exports__, {
                        OS: ()=>b,
                        default: ()=>k
                    });
                    var e = __webpack_require__(492);
                    const t = (e.roots.default || (e.roots.default = new e.Root)).addJSON({
                        event: {
                            options: {
                                java_package: "com.shopee.livetech.event"
                            },
                            nested: {
                                EventID: {
                                    values: {
                                        StreamGeneralEvent: 10004,
                                        StreamHeartbeatEvent: 10007
                                    }
                                },
                                GeneralAction: {
                                    values: {
                                        ACTION_ENTER_ROOM: 0,
                                        ACTION_LEAVE_ROOM: 1,
                                        ACTION_START_STREAM: 2,
                                        ACTION_CONNECTED_STREAM: 3,
                                        ACTION_DISCONNECTED_ACTIVE: 4,
                                        ACTION_DISCONNECTED_PASSIVE: 5,
                                        ACTION_FAILURE: 6,
                                        ACTION_CANCEL: 7
                                    }
                                },
                                SceneID: {
                                    values: {
                                        LiveStreaming: 1,
                                        LiveStreamingCover: 3
                                    }
                                },
                                EventList: {
                                    fields: {
                                        events: {
                                            rule: "repeated",
                                            type: "Event",
                                            id: 1
                                        }
                                    }
                                },
                                Event: {
                                    fields: {
                                        header: {
                                            type: "Header",
                                            id: 1
                                        },
                                        body: {
                                            type: "bytes",
                                            id: 2
                                        }
                                    }
                                },
                                Header: {
                                    fields: {
                                        id: {
                                            type: "uint32",
                                            id: 1
                                        },
                                        sceneId: {
                                            type: "uint32",
                                            id: 2
                                        },
                                        uid: {
                                            type: "uint64",
                                            id: 3
                                        },
                                        deviceId: {
                                            type: "string",
                                            id: 4
                                        },
                                        deviceModel: {
                                            type: "string",
                                            id: 5
                                        },
                                        os: {
                                            type: "uint32",
                                            id: 6
                                        },
                                        osVersion: {
                                            type: "string",
                                            id: 7
                                        },
                                        clientVersion: {
                                            type: "string",
                                            id: 8
                                        },
                                        clientIp: {
                                            type: "string",
                                            id: 9
                                        },
                                        network: {
                                            type: "uint32",
                                            id: 10
                                        },
                                        country: {
                                            type: "string",
                                            id: 11
                                        },
                                        ua: {
                                            type: "string",
                                            id: 12
                                        },
                                        sdkVersion: {
                                            type: "string",
                                            id: 13
                                        },
                                        timestamp: {
                                            type: "uint64",
                                            id: 14
                                        },
                                        adjustTimestamp: {
                                            type: "uint64",
                                            id: 15
                                        },
                                        sdkType: {
                                            type: "uint32",
                                            id: 16
                                        },
                                        bodyFormat: {
                                            type: "uint32",
                                            id: 17
                                        },
                                        abTest: {
                                            type: "string",
                                            id: 18
                                        },
                                        appType: {
                                            type: "uint32",
                                            id: 19
                                        },
                                        rnVersion: {
                                            type: "string",
                                            id: 20
                                        },
                                        channel: {
                                            type: "string",
                                            id: 21
                                        },
                                        biz: {
                                            type: "uint32",
                                            id: 22
                                        },
                                        samplePercent: {
                                            type: "uint32",
                                            id: 23,
                                            options: {
                                                default: 100
                                            }
                                        }
                                    }
                                },
                                BodyFormat: {
                                    values: {
                                        Pb: 0,
                                        Json: 1
                                    }
                                }
                            }
                        },
                        live_apm: {
                            nested: {
                                Events: {
                                    fields: {
                                        commonHeader: {
                                            type: "CommonHeader",
                                            id: 1
                                        },
                                        events: {
                                            rule: "repeated",
                                            type: "Event",
                                            id: 2
                                        }
                                    }
                                },
                                Event: {
                                    fields: {
                                        header: {
                                            type: "Header",
                                            id: 1
                                        },
                                        bodyFormat: {
                                            type: "uint32",
                                            id: 2
                                        },
                                        body: {
                                            type: "bytes",
                                            id: 3
                                        }
                                    }
                                },
                                CommonHeader: {
                                    fields: {
                                        deviceId: {
                                            type: "string",
                                            id: 1
                                        },
                                        deviceModel: {
                                            type: "string",
                                            id: 2
                                        },
                                        os: {
                                            type: "uint32",
                                            id: 3
                                        },
                                        ua: {
                                            type: "string",
                                            id: 4
                                        }
                                    }
                                },
                                Header: {
                                    fields: {
                                        eventId: {
                                            type: "string",
                                            id: 1
                                        },
                                        sceneId: {
                                            type: "uint32",
                                            id: 2
                                        },
                                        type: {
                                            type: "uint32",
                                            id: 3
                                        },
                                        uid: {
                                            type: "uint64",
                                            id: 4
                                        },
                                        osVersion: {
                                            type: "string",
                                            id: 5
                                        },
                                        clientVersion: {
                                            type: "string",
                                            id: 6
                                        },
                                        network: {
                                            type: "uint32",
                                            id: 7
                                        },
                                        clientTs: {
                                            type: "uint64",
                                            id: 8
                                        },
                                        clientAdjustTs: {
                                            type: "uint64",
                                            id: 9
                                        },
                                        batteryLevel: {
                                            type: "uint32",
                                            id: 10
                                        },
                                        diskSizeTotal: {
                                            type: "uint32",
                                            id: 11
                                        },
                                        diskSizeLeft: {
                                            type: "uint32",
                                            id: 12
                                        },
                                        cpuUsage: {
                                            type: "uint32",
                                            id: 13
                                        },
                                        memoryTotal: {
                                            type: "uint32",
                                            id: 14
                                        },
                                        memoryLeft: {
                                            type: "uint32",
                                            id: 15
                                        },
                                        memoryCurrentAppUsed: {
                                            type: "uint32",
                                            id: 16
                                        },
                                        deviceId: {
                                            type: "string",
                                            id: 17
                                        },
                                        deviceModel: {
                                            type: "string",
                                            id: 18
                                        },
                                        os: {
                                            type: "uint32",
                                            id: 19
                                        },
                                        clientIp: {
                                            type: "string",
                                            id: 20
                                        },
                                        ua: {
                                            type: "string",
                                            id: 21
                                        },
                                        rnVersion: {
                                            type: "string",
                                            id: 22
                                        },
                                        env: {
                                            type: "string",
                                            id: 23
                                        },
                                        country: {
                                            type: "string",
                                            id: 24
                                        },
                                        serverTs: {
                                            type: "uint64",
                                            id: 25
                                        },
                                        samplePercent: {
                                            type: "uint32",
                                            id: 26
                                        }
                                    }
                                },
                                EventType: {
                                    values: {
                                        ApiRequest: 40001,
                                        WsConnectStart: 50001,
                                        WsConnectSucceed: 50002,
                                        WsConnectFailed: 50003,
                                        WsConnectClose: 50004,
                                        WsReceiveMessage: 50005,
                                        TrackingSDKEvent: 70001,
                                        ExclusiveVoucherToken: 10016
                                    }
                                },
                                BodyFormat: {
                                    values: {
                                        Protobuf: 0,
                                        Json: 1
                                    }
                                },
                                Os: {
                                    values: {
                                        Android: 0,
                                        Ios: 1,
                                        PC: 2
                                    }
                                },
                                ApiRequestEvent: {
                                    fields: {
                                        url: {
                                            type: "string",
                                            id: 1
                                        },
                                        httpMethod: {
                                            type: "string",
                                            id: 2
                                        },
                                        params: {
                                            type: "string",
                                            id: 3
                                        },
                                        duration: {
                                            type: "uint32",
                                            id: 4
                                        },
                                        httpCode: {
                                            type: "int32",
                                            id: 5
                                        },
                                        bizCode: {
                                            type: "string",
                                            id: 6
                                        },
                                        clientCode: {
                                            type: "string",
                                            id: 7
                                        },
                                        errMsg: {
                                            type: "string",
                                            id: 8
                                        },
                                        extra: {
                                            type: "string",
                                            id: 9
                                        },
                                        signature: {
                                            type: "string",
                                            id: 10
                                        },
                                        response: {
                                            type: "string",
                                            id: 11
                                        },
                                        limitUrl: {
                                            type: "string",
                                            id: 12
                                        }
                                    }
                                },
                                WsConnectStartEvent: {
                                    fields: {
                                        sessionId: {
                                            type: "uint64",
                                            id: 1
                                        },
                                        connType: {
                                            type: "uint32",
                                            id: 2
                                        },
                                        isHost: {
                                            type: "bool",
                                            id: 3
                                        }
                                    }
                                },
                                WsConnectSucceedEvent: {
                                    fields: {
                                        sessionId: {
                                            type: "uint64",
                                            id: 1
                                        },
                                        isHost: {
                                            type: "bool",
                                            id: 2
                                        }
                                    }
                                },
                                WsConnectFailedEvent: {
                                    fields: {
                                        sessionId: {
                                            type: "uint64",
                                            id: 1
                                        },
                                        errMsg: {
                                            type: "string",
                                            id: 2
                                        },
                                        isHost: {
                                            type: "bool",
                                            id: 3
                                        }
                                    }
                                },
                                WsConnectCloseEvent: {
                                    fields: {
                                        sessionId: {
                                            type: "uint64",
                                            id: 1
                                        },
                                        closeCode: {
                                            type: "int32",
                                            id: 2
                                        },
                                        reason: {
                                            type: "string",
                                            id: 3
                                        },
                                        isHost: {
                                            type: "bool",
                                            id: 4
                                        }
                                    }
                                },
                                WsReceiveMessageEvent: {
                                    fields: {
                                        sessionId: {
                                            type: "uint64",
                                            id: 1
                                        },
                                        msgType: {
                                            type: "uint32",
                                            id: 2
                                        },
                                        msgContent: {
                                            type: "string",
                                            id: 3
                                        },
                                        isHost: {
                                            type: "bool",
                                            id: 4
                                        }
                                    }
                                },
                                TrackingSdkEvent: {
                                    fields: {
                                        type: {
                                            type: "uint32",
                                            id: 1
                                        },
                                        msg: {
                                            type: "string",
                                            id: 2
                                        }
                                    }
                                },
                                ExclusiveVoucherTokenTrackEvent: {
                                    fields: {
                                        sessionId: {
                                            type: "uint64",
                                            id: 1
                                        },
                                        token: {
                                            type: "string",
                                            id: 2
                                        },
                                        targetRoute: {
                                            type: "uint32",
                                            id: 3
                                        },
                                        itemId: {
                                            type: "uint64",
                                            id: 4
                                        },
                                        shopId: {
                                            type: "uint64",
                                            id: 5
                                        }
                                    }
                                }
                            }
                        },
                        live_event: {
                            options: {
                                java_package: "com.shopee.livetech.live_event"
                            },
                            nested: {
                                StreamHeartbeatEvent: {
                                    fields: {
                                        sessionId: {
                                            type: "string",
                                            id: 1
                                        },
                                        videoUrl: {
                                            type: "string",
                                            id: 2
                                        },
                                        roomId: {
                                            type: "string",
                                            id: 3
                                        },
                                        fps: {
                                            type: "string",
                                            id: 6
                                        },
                                        videoRate: {
                                            type: "string",
                                            id: 7
                                        },
                                        audioRate: {
                                            type: "string",
                                            id: 8
                                        },
                                        serverIp: {
                                            type: "string",
                                            id: 9
                                        },
                                        downSpeed: {
                                            type: "string",
                                            id: 10
                                        }
                                    }
                                },
                                StreamGeneralEvent: {
                                    fields: {
                                        action: {
                                            type: "uint32",
                                            id: 1
                                        },
                                        sessionId: {
                                            type: "string",
                                            id: 2
                                        },
                                        videoUrl: {
                                            type: "string",
                                            id: 3
                                        },
                                        roomId: {
                                            type: "string",
                                            id: 4
                                        },
                                        isHost: {
                                            type: "bool",
                                            id: 5
                                        },
                                        startTime: {
                                            type: "uint64",
                                            id: 6
                                        },
                                        serverIp: {
                                            type: "string",
                                            id: 7
                                        }
                                    }
                                }
                            }
                        }
                    });
                    var r = function(e, r) {
                        if (e instanceof Uint8Array)
                            return e;
                        var n = t.lookupType(r)
                          , i = n.create(e);
                        return n.encode(i).finish()
                    }
                      , n = function(e, r) {
                        var n = t.lookupType(r)
                          , i = n.decode(e);
                        return n.toObject(i)
                    };
                    function i(e) {
                        if ("object" == typeof e && null !== e) {
                            if ("function" == typeof Object.getPrototypeOf) {
                                var t = Object.getPrototypeOf(e);
                                return t === Object.prototype || null === t
                            }
                            return "[object Object]" == Object.prototype.toString.call(e)
                        }
                        return !1
                    }
                    var o = function() {
                        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                            e += arguments[t].length;
                        var n = Array(e)
                          , i = 0;
                        for (t = 0; t < r; t++)
                            for (var o = arguments[t], s = 0, a = o.length; s < a; s++,
                            i++)
                                n[i] = o[s];
                        return n
                    };
                    function s(e) {
                        for (var t, r, n = [], a = 1; a < arguments.length; a++)
                            n[a - 1] = arguments[a];
                        if (!n.length)
                            return e;
                        var u = n.shift();
                        if (i(e) && i(u))
                            for (var c in u)
                                i(u[c]) ? (e[c] || Object.assign(e, ((t = {})[c] = {},
                                t)),
                                s(e[c], u[c])) : Object.assign(e, ((r = {})[c] = u[c],
                                r));
                        return s.apply(void 0, o([e], n))
                    }
                    var a = function() {}
                      , u = {
                        trace: a,
                        debug: a,
                        log: a,
                        warn: a,
                        info: a,
                        error: a
                    }
                      , c = u;
                    function f(e) {
                        var t = console[e];
                        return t ? t.bind(console, "[" + e + "] >") : a
                    }
                    var p, l = c, d = {
                        name: "ShopeeLive",
                        version: 1,
                        storeName: "Reporter",
                        description: "A store for web logs cache",
                        MAX_STORE_LENGTH: 500
                    };
                    !function(e) {
                        e[e.CACHE_STORE = 0] = "CACHE_STORE",
                        e[e.RETRY_STORE = 1] = "RETRY_STORE"
                    }(p || (p = {}));
                    var h, y, v, m, g, b, O = function() {
                        function e(e) {
                            var t = this;
                            void 0 === e && (e = {});
                            var r = s({}, d, e);
                            e.storeName ? this.name = r.name + "_" + r.storeName : this.name = r.name,
                            this.version = r.version,
                            this.storeName = r.storeName,
                            this.description = r.description,
                            this.retryStoreName = this.storeName + "_Retry",
                            this.sessionStore = [],
                            this.retryStoreLimit = r.MAX_STORE_LENGTH,
                            this.degraded = !1,
                            this.init().then((function(e) {
                                t.db = e,
                                t.ready = !0
                            }
                            )).catch((function(e) {
                                console.warn("Failed to open indexedDB", e),
                                t.ready = !1
                            }
                            ))
                        }
                        return e.prototype.init = function() {
                            var e = this;
                            return new Promise((function(t, r) {
                                if (window.indexedDB) {
                                    var n = window.indexedDB.open(e.name, e.version);
                                    n.onsuccess = function(e) {
                                        var r = e.target.result;
                                        t(r)
                                    }
                                    ,
                                    n.onerror = function(e) {
                                        r(e)
                                    }
                                    ,
                                    n.onblocked = function(e) {
                                        r(e)
                                    }
                                    ,
                                    n.onupgradeneeded = function(t) {
                                        var r = t.target.result;
                                        r.objectStoreNames.contains(e.storeName) || r.createObjectStore(e.storeName, {
                                            autoIncrement: !0
                                        }),
                                        r.objectStoreNames.contains(e.retryStoreName) || r.createObjectStore(e.retryStoreName, {
                                            autoIncrement: !0
                                        })
                                    }
                                } else
                                    r()
                            }
                            ))
                        }
                        ,
                        e.prototype.store = function(e, t) {
                            var r = this;
                            return new Promise((function(n, i) {
                                if (r.ready && !r.degraded) {
                                    var o = t === p.CACHE_STORE ? r.storeName : r.retryStoreName
                                      , s = void 0;
                                    try {
                                        s = r.db.transaction(o, "readwrite")
                                    } catch (n) {
                                        return r.degraded = !0,
                                        void r.store(e, t)
                                    }
                                    var a, u = s.objectStore(o);
                                    if (t === p.CACHE_STORE)
                                        (a = u.add(e)).onsuccess = function(e) {
                                            n(e)
                                        }
                                        ,
                                        a.onerror = function(e) {
                                            i(e)
                                        }
                                        ;
                                    else if (t === p.RETRY_STORE) {
                                        var c = u.count();
                                        c.onsuccess = function(t) {
                                            c.result < r.retryStoreLimit ? ((a = u.add(e)).onsuccess = function(e) {
                                                n(e)
                                            }
                                            ,
                                            a.onerror = function(e) {
                                                i(e)
                                            }
                                            ) : i("Hint the store limit")
                                        }
                                        ,
                                        c.onerror = function(e) {
                                            i(e)
                                        }
                                    }
                                } else
                                    r.sessionStore.length < r.retryStoreLimit ? (r.sessionStore = r.sessionStore.concat(e),
                                    n(e)) : i("Hint the store limit")
                            }
                            ))
                        }
                        ,
                        e.prototype.shiftStore = function(e, t) {
                            var r = this;
                            return new Promise((function(n, i) {
                                var o, s = [], a = e === p.CACHE_STORE ? r.storeName : r.retryStoreName;
                                try {
                                    o = r.db.transaction(a, "readwrite")
                                } catch (e) {
                                    return r.degraded = !0,
                                    void n([])
                                }
                                var u = o.objectStore(a)
                                  , c = u.openCursor()
                                  , f = [];
                                c.onsuccess = function(e) {
                                    var r = e.target.result;
                                    if (r)
                                        if (void 0 === t)
                                            s = s.concat(r.value),
                                            r.continue();
                                        else if (t > 0)
                                            s = s.concat(r.value),
                                            f.push(r.key),
                                            t--,
                                            r.continue();
                                        else {
                                            var a = u.delete(IDBKeyRange.bound(Math.min.apply(Math, f), Math.max.apply(Math, f)));
                                            a.onsuccess = function(e) {
                                                n(s)
                                            }
                                            ,
                                            a.onerror = function(e) {
                                                o.abort(),
                                                i(e)
                                            }
                                        }
                                    else {
                                        var c = u.clear();
                                        c.onsuccess = function(e) {
                                            n(s)
                                        }
                                        ,
                                        c.onerror = function(e) {
                                            o.abort(),
                                            i(e)
                                        }
                                    }
                                }
                                ,
                                c.onerror = function(e) {
                                    i(e)
                                }
                            }
                            ))
                        }
                        ,
                        e.prototype.shiftAllCache = function() {
                            var e = this
                              , t = this.sessionStore.slice();
                            return this.ready && !this.degraded ? this.shiftStore(p.CACHE_STORE).then((function(r) {
                                return e.sessionStore = [],
                                [].concat(r, t)
                            }
                            )) : (this.sessionStore = [],
                            Promise.resolve(t))
                        }
                        ,
                        e.prototype.shiftRetry = function() {
                            return this.ready && !this.degraded ? this.shiftStore(p.RETRY_STORE, 1) : Promise.resolve([])
                        }
                        ,
                        e.prototype.storeCache = function(e) {
                            return this.store(e, p.CACHE_STORE)
                        }
                        ,
                        e.prototype.storeRetry = function(e) {
                            return this.store(e, p.RETRY_STORE)
                        }
                        ,
                        e
                    }(), w = function() {
                        return (w = Object.assign || function(e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var i in t = arguments[r])
                                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }
                        ).apply(this, arguments)
                    }, _ = function(e, t, r, n) {
                        return new (r || (r = Promise))((function(i, o) {
                            function s(e) {
                                try {
                                    u(n.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }
                            function a(e) {
                                try {
                                    u(n.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }
                            function u(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value,
                                t instanceof r ? t : new r((function(e) {
                                    e(t)
                                }
                                ))).then(s, a)
                            }
                            u((n = n.apply(e, t || [])).next())
                        }
                        ))
                    }, S = function(e, t) {
                        var r, n, i, o, s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0])
                                    throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return o = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        },
                        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }
                        ),
                        o;
                        function a(o) {
                            return function(a) {
                                return function(o) {
                                    if (r)
                                        throw new TypeError("Generator is already executing.");
                                    for (; s; )
                                        try {
                                            if (r = 1,
                                            n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n),
                                            0) : n.next) && !(i = i.call(n, o[1])).done)
                                                return i;
                                            switch (n = 0,
                                            i && (o = [2 & o[0], i.value]),
                                            o[0]) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++,
                                                {
                                                    value: o[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++,
                                                n = o[1],
                                                o = [0];
                                                continue;
                                            case 7:
                                                o = s.ops.pop(),
                                                s.trys.pop();
                                                continue;
                                            default:
                                                if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                    s.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && s.label < i[1]) {
                                                    s.label = i[1],
                                                    i = o;
                                                    break
                                                }
                                                if (i && s.label < i[2]) {
                                                    s.label = i[2],
                                                    s.ops.push(o);
                                                    break
                                                }
                                                i[2] && s.ops.pop(),
                                                s.trys.pop();
                                                continue
                                            }
                                            o = t.call(e, s)
                                        } catch (e) {
                                            o = [6, e],
                                            n = 0
                                        } finally {
                                            r = i = 0
                                        }
                                    if (5 & o[0])
                                        throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0
                                    }
                                }([o, a])
                            }
                        }
                    }, E = {
                        method: "POST",
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                        }
                    }, j = function() {
                        function e(e) {
                            this.url = e.url,
                            this.frequency = e.frequency || 1e4,
                            this.requestOptions = e.requestOptions ? s({}, E, e.requestOptions) : E,
                            this.debug = !!e.debug,
                            this.storeName = e.storeName || "",
                            this.version = "0.3.8",
                            this.MAX_STORE_LENGTH = e.MAX_STORE_LENGTH || 500,
                            this.buildCommonHeader = e.buildCommonHeader,
                            this.isLiveApm = this.url.includes("live-apm"),
                            this.init()
                        }
                        return e.prototype.init = function() {
                            (function(e) {
                                if (console && !0 === e || "object" == typeof e) {
                                    !function(e) {
                                        for (var t = [], r = 1; r < arguments.length; r++)
                                            t[r - 1] = arguments[r];
                                        t.forEach((function(t) {
                                            c[t] = "boolean" != typeof e && e[t] ? e[t].bind(e) : f(t)
                                        }
                                        ))
                                    }(e, "debug", "log", "info", "warn", "error");
                                    try {
                                        c.log()
                                    } catch (e) {
                                        c = u
                                    }
                                } else
                                    c = u
                            }
                            )(this.debug),
                            this.initStore(),
                            this.initWorker(),
                            this.initRetryWorker()
                        }
                        ,
                        e.prototype.initWorker = function() {
                            var e = this;
                            this.reportLocal(),
                            window.setTimeout((function() {
                                e.initWorker()
                            }
                            ), this.frequency)
                        }
                        ,
                        e.prototype.initRetryWorker = function() {
                            var e = this;
                            this.retryTimer = window.setTimeout((function() {
                                e.retryReport(),
                                e.initRetryWorker()
                            }
                            ), this.frequency / 2)
                        }
                        ,
                        e.prototype.retryReport = function() {
                            var e = this;
                            this.store.shiftRetry().then((function(t) {
                                t && t.length ? (l.log("Retry", t),
                                e.send({
                                    events: t
                                }, !0)) : (e.retryTimer && clearTimeout(e.retryTimer),
                                e.retryTimer = null,
                                l.log("clear retry timer"))
                            }
                            ))
                        }
                        ,
                        e.prototype.reportLocal = function() {
                            var e = this;
                            this.store.shiftAllCache().then((function(t) {
                                t && t.length && e.send({
                                    events: t
                                })
                            }
                            ))
                        }
                        ,
                        e.prototype.serializeLiveApm = function(e) {
                            var t = [];
                            return e.events = e.events.map((function(e) {
                                return e.body = r(e.body, "live_apm." + e.liveEventType),
                                t.push(e.liveEventType),
                                e
                            }
                            )),
                            [r(e, "live_apm.Events"), t]
                        }
                        ,
                        e.prototype.deserializeLiveApm = function(e, t) {
                            var r = n(e, "live_apm.Events");
                            return r.events = r.events.map((function(e, r) {
                                return e.body = n(e.body, "live_apm." + t[r]),
                                e
                            }
                            )),
                            r
                        }
                        ,
                        e.prototype.serializeMMC = function(e) {
                            var t = [];
                            return e.events = e.events.map((function(e) {
                                return e.body = r(e.body, "live_event." + e.liveEventType),
                                t.push(e.liveEventType),
                                e
                            }
                            )),
                            [r(e, "event.EventList"), t]
                        }
                        ,
                        e.prototype.deserializeMMC = function(e, t) {
                            var r = n(e, "event.EventList");
                            return r.events = r.events.map((function(e, r) {
                                return e.body = n(e.body, "live_event." + t[r]),
                                e
                            }
                            )),
                            r
                        }
                        ,
                        e.prototype._buildCommonHeader = function() {
                            var e;
                            return _(this, void 0, void 0, (function() {
                                return S(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, null === (e = this.buildCommonHeader) || void 0 === e ? void 0 : e.call(this)];
                                    case 1:
                                        return [2, t.sent() || (r = navigator.userAgent,
                                        n = r.match(/(Android|OS)\s+(\d+(.\d)*)(;\s+([^)]+))?/),
                                        i = n && n.length ? "Android" === n[1] ? b.Android : b.iOS : b.PC_WEB,
                                        {
                                            deviceId: "",
                                            deviceModel: n && n.length ? n[5] : "PC",
                                            os: i,
                                            ua: r
                                        })]
                                    }
                                    var r, n, i
                                }
                                ))
                            }
                            ))
                        }
                        ,
                        e.prototype.send = function(e, t) {
                            return _(this, void 0, void 0, (function() {
                                var r, n, i, o, a, u, c, f, p, d;
                                return S(this, (function(h) {
                                    switch (h.label) {
                                    case 0:
                                        return r = [],
                                        i = s({}, e),
                                        this.isLiveApm ? (o = i,
                                        (a = i.commonHeader) ? [3, 2] : [4, this._buildCommonHeader()]) : [3, 3];
                                    case 1:
                                        a = h.sent(),
                                        h.label = 2;
                                    case 2:
                                        return o.commonHeader = a,
                                        p = this.serializeLiveApm(i),
                                        n = p[0],
                                        r = p[1],
                                        [3, 4];
                                    case 3:
                                        d = this.serializeMMC(i),
                                        n = d[0],
                                        r = d[1],
                                        h.label = 4;
                                    case 4:
                                        return h.trys.push([4, 6, , 7]),
                                        [4, this.request(n)];
                                    case 5:
                                        if (0 !== (u = h.sent()).code)
                                            throw Error(u.msg);
                                        return c = this.isLiveApm ? this.deserializeLiveApm(n, r) : this.deserializeMMC(n, r),
                                        l.log("pkg", c),
                                        l.log(t ? "Retry send ::::" : "send :::: ", this.storeName, c),
                                        [3, 7];
                                    case 6:
                                        return f = h.sent(),
                                        l.error("Request failed ::::", f),
                                        this.store.storeRetry(e.events),
                                        this.retryTimer || this.initRetryWorker(),
                                        [3, 7];
                                    case 7:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ,
                        e.prototype.request = function(e) {
                            var t = s({}, this.requestOptions, {
                                body: e
                            });
                            return fetch(this.url, t).then((function(e) {
                                return e.json()
                            }
                            )).then((function(e) {
                                if (e.code)
                                    throw Error(e.msg);
                                return e
                            }
                            ))
                        }
                        ,
                        e.prototype.initStore = function() {
                            this.store = new O(w({
                                MAX_STORE_LENGTH: this.MAX_STORE_LENGTH,
                                version: 7
                            }, this.storeName ? {
                                storeName: this.storeName
                            } : {}))
                        }
                        ,
                        e.prototype.commit = function(e) {
                            l.log("commit ::::", e),
                            this.store.storeCache(e)
                        }
                        ,
                        e
                    }(), A = function(e) {
                        var t = e.storeName || "";
                        if (A.instances && A.instances[t])
                            l.warn("Already init");
                        else {
                            A.instances = A.instances || {};
                            var r = new j(e);
                            A.instances[t] = r
                        }
                        return A.instances[t]
                    };
                    !function(e) {
                        e[e.ApiRequest = 40001] = "ApiRequest",
                        e[e.WsConnectStart = 50001] = "WsConnectStart",
                        e[e.WsConnectSucceed = 50002] = "WsConnectSucceed",
                        e[e.WsConnectFailed = 50003] = "WsConnectFailed",
                        e[e.WsConnectClose = 50004] = "WsConnectClose",
                        e[e.WsReceiveMessage = 50005] = "WsReceiveMessage",
                        e[e.TrackingSDKEvent = 70001] = "TrackingSDKEvent",
                        e[e.StreamGeneralEvent = 10004] = "StreamGeneralEvent",
                        e[e.StreamHeartbeatEvent = 10007] = "StreamHeartbeatEvent"
                    }(h || (h = {})),
                    function(e) {
                        e[e.Native = 1] = "Native",
                        e[e.RN = 2] = "RN",
                        e[e.PC = 3] = "PC",
                        e[e.H5 = 4] = "H5"
                    }(y || (y = {})),
                    function(e) {
                        e[e.LiveStreaming = 1] = "LiveStreaming",
                        e[e.LiveStreamingCover = 3] = "LiveStreamingCover"
                    }(v || (v = {})),
                    function(e) {
                        e[e.PB = 0] = "PB",
                        e[e.JSON = 1] = "JSON"
                    }(m || (m = {})),
                    function(e) {
                        e.OK = "0",
                        e.ERR = "-1",
                        e.NETWORK_ERR = "-2"
                    }(g || (g = {})),
                    function(e) {
                        e[e.Android = 0] = "Android",
                        e[e.iOS = 1] = "iOS",
                        e[e.PC_WEB = 2] = "PC_WEB"
                    }(b || (b = {}));
                    const k = {
                        createReporter: A,
                        EventID: h,
                        SceneID: y,
                        MMCSceneID: v,
                        ClientErrCode: g,
                        OS: b,
                        BodyFormat: m
                    }
                }
                )(),
                __webpack_exports__ = __webpack_exports__.default,
                __webpack_exports__
            }
            )()
        }
        ,
        module.exports = t()
    },
    JX7q: function(e, t, r) {
        "use strict";
        function n(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        r.d(t, "a", (function() {
            return n
        }
        ))
    },
    Ji7U: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return (n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function i(e, t) {
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
            t && n(e, t)
        }
        r.d(t, "a", (function() {
            return i
        }
        ))
    },
    RgX2: function(e, t, r) {
        "use strict";
        r.d(t, "d", (function() {
            return S
        }
        )),
        r.d(t, "i", (function() {
            return E
        }
        )),
        r.d(t, "g", (function() {
            return j
        }
        )),
        r.d(t, "f", (function() {
            return A
        }
        )),
        r.d(t, "e", (function() {
            return k
        }
        )),
        r.d(t, "h", (function() {
            return T
        }
        )),
        r.d(t, "c", (function() {
            return N
        }
        )),
        r.d(t, "b", (function() {
            return x
        }
        )),
        r.d(t, "a", (function() {
            return R
        }
        ));
        var n, i = r("ODXe"), o = r("HaE+"), s = r("o0o1"), a = r.n(s), u = r("GgeO"), c = r("cBaE"), f = r("kWRe"), p = r("w/Rt"), l = r("0LPd"), d = r("nLqX"), h = r("7Cbv"), y = r("+SFn");
        !function(e) {
            e[e.ShopeeApp = 0] = "ShopeeApp",
            e[e.SellerApp = 1] = "SellerApp"
        }(n || (n = {}));
        var v, m, g = function(e, t) {
            var r = navigator.userAgent
              , i = r.match(/(Android|OS)\s+(\d+(.\d)*)(;\s+([^)]+))?/)
              , o = i && i.length ? "Android" === i[1] ? u.OS.Android : u.OS.iOS : u.OS.PC_WEB
              , s = o === u.OS.PC_WEB ? "" : i[2]
              , a = i && i.length ? i[5] : "PC"
              , p = Date.now();
            return {
                id: e,
                sceneId: t,
                uid: Object(c.v)(),
                ua: r,
                os: o,
                osVersion: s,
                deviceModel: a,
                timestamp: p,
                rnVersion: Object(f.a)("shopee_rn_version"),
                appType: c.z ? n.SellerApp : n.ShopeeApp,
                country: "vn",
                clientVersion: Object(f.a)("shopee_app_version") || navigator.appVersion
            }
        }, b = function(e, t) {
            var r = navigator.userAgent.match(/(Android|OS)\s+(\d+(.\d)*)(;\s+([^)]+))?/)
              , n = (r && r.length ? "Android" === r[1] ? u.OS.Android : u.OS.iOS : u.OS.PC_WEB) === u.OS.PC_WEB ? "" : r[2]
              , i = Date.now()
              , o = Object(c.v)()
              , s = Object(f.a)("shopee_rn_version")
              , a = Object(f.a)("shopee_app_version") || navigator.appVersion;
            return {
                eventId: Object(h.a)(),
                type: e,
                sceneId: t,
                uid: o,
                osVersion: n,
                clientTs: i,
                rnVersion: s,
                country: "vn",
                clientVersion: a
            }
        }, O = function() {
            return v || (v = Object(u.createReporter)({
                url: "".concat(p.o, "/dataapi/dataweb/event/reportPB"),
                frequency: 1e4,
                debug: Object(d.a)("reporter"),
                requestOptions: {
                    headers: {
                        "X-Livestreaming-Source": c.z ? l.a.SELLER_SUB_ACCOUNT : l.a.SHOPEE_ACCOUNT
                    }
                }
            })),
            v
        }, w = function() {
            return m || (m = Object(u.createReporter)({
                url: "".concat(p.n, "/apmapi/v1/event"),
                frequency: 1e4,
                storeName: "apm",
                debug: Object(d.a)("reporter"),
                buildCommonHeader: function() {
                    var e = Object(o.a)(a.a.mark((function e() {
                        var t;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!c.x) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3,
                                    y.g.getAppInfo();
                                case 3:
                                    return t = e.sent,
                                    e.abrupt("return", {
                                        os: t.appType,
                                        deviceId: t.deviceID,
                                        deviceModel: t.model,
                                        ua: navigator.userAgent
                                    });
                                case 5:
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
                }()
            })),
            m
        }, _ = function(e) {
            w().commit({
                liveEventType: "ApiRequestEvent",
                body: e,
                body_format: u.BodyFormat.PB,
                header: b(u.EventID.ApiRequest, u.SceneID.H5)
            })
        }, S = function(e) {
            O().commit({
                liveEventType: "StreamHeartbeatEvent",
                body: e,
                header: g(u.EventID.StreamHeartbeatEvent, u.MMCSceneID.LiveStreaming)
            })
        }, E = function(e) {
            w().commit({
                liveEventType: "WsConnectStartEvent",
                body: e,
                body_format: u.BodyFormat.PB,
                header: b(u.EventID.WsConnectStart, u.SceneID.H5)
            })
        }, j = function(e) {
            w().commit({
                liveEventType: "WsConnectSucceedEvent",
                body: e,
                body_format: u.BodyFormat.PB,
                header: b(u.EventID.WsConnectSucceed, u.SceneID.H5)
            })
        }, A = function(e) {
            w().commit({
                liveEventType: "WsConnectFailedEvent",
                body: e,
                body_format: u.BodyFormat.PB,
                header: b(u.EventID.WsConnectFailed, u.SceneID.H5)
            })
        }, k = function(e) {
            w().commit({
                liveEventType: "WsConnectCloseEvent",
                body: e,
                body_format: u.BodyFormat.PB,
                header: b(u.EventID.WsConnectClose, u.SceneID.H5)
            })
        }, T = function(e) {
            w().commit({
                liveEventType: "WsReceiveMessageEvent",
                body: e,
                body_format: u.BodyFormat.PB,
                header: b(u.EventID.WsReceiveMessage, u.SceneID.H5)
            })
        }, N = function(e) {
            return e.startsWith("http") ? e : e.startsWith("/") ? "".concat(window.location.origin).concat(e) : "".concat(window.location.origin, "/").concat(e)
        }, x = function(e) {
            var t = N(e);
            return /(?=.*(shopee|xiapi))(?=.*api)^.*$/.test(t)
        }, C = function(e) {
            var t = e.httpMethod.toUpperCase()
              , r = e.url.split("?")
              , n = Object(i.a)(r, 2)
              , o = n[0]
              , s = n[1];
            return e.url = o,
            e.params = "string" === typeof e.params ? e.params : s,
            e.httpMethod = t,
            e
        }, R = function() {
            var e = 0
              , t = new Map;
            return console.log("reporter: initialized"),
            {
                onRequest: function(r) {
                    var n = r;
                    e++,
                    n.meta = {},
                    n.meta.id = e,
                    t.set(n.meta.id, Date.now()),
                    n.meta.url = N(r.url)
                },
                onError: function(e) {
                    var r, n = e, i = n.config;
                    x(i.meta.url) && function(e, t, r) {
                        if (x(e.meta.url)) {
                            var n = e.meta.id
                              , i = t.get(n)
                              , o = {};
                            o.duration = Date.now() - i,
                            o.url = e.meta.url,
                            o.params = e.body,
                            o.httpCode = 0,
                            o.httpMethod = e.method,
                            o.clientCode = u.ClientErrCode.NETWORK_ERR,
                            o.extra = r,
                            t.delete(n),
                            _(C(o))
                        }
                    }(i, t, null === (r = n.error) || void 0 === r ? void 0 : r.type)
                },
                onResponse: function(e) {
                    var r, n, i = e.config;
                    if (x(i.meta.url)) {
                        var o = i.meta.id
                          , s = t.get(o)
                          , a = {};
                        a.duration = Date.now() - s,
                        a.httpCode = e.status,
                        a.url = i.meta.url,
                        a.httpMethod = i.method,
                        a.params = i.body;
                        var c, f, p = e.response;
                        if ("text" === (null === (r = i.xhr) || void 0 === r ? void 0 : r.responseType) || null === (n = i.xhr) || void 0 === n || !n.responseType)
                            try {
                                p = JSON.parse(i.xhr.responseText)
                            } catch (l) {}
                        if (p)
                            a.bizCode = (null === (c = p.err_code) || void 0 === c ? void 0 : c.toString()) || (null === (f = p.code) || void 0 === f ? void 0 : f.toString()),
                            a.errMsg = p.err_msg || p.msg,
                            a.clientCode = u.ClientErrCode.OK;
                        else
                            a.clientCode = u.ClientErrCode.ERR,
                            a.errMsg = "Failed to read JSON Response";
                        _(C(a))
                    }
                }
            }
        }
    },
    foSv: function(e, t, r) {
        "use strict";
        function n(e) {
            return (n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        r.d(t, "a", (function() {
            return n
        }
        ))
    },
    h4VS: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        r.d(t, "a", (function() {
            return n
        }
        ))
    },
    md7G: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }
        ));
        var n = r("U8pU")
          , i = r("JX7q");
        function o(e, t) {
            if (t && ("object" === Object(n.a)(t) || "function" === typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return Object(i.a)(e)
        }
    },
    nLqX: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }
        ));
        var n = null
          , i = function(e) {
            try {
                if (!n) {
                    var t = new URLSearchParams(window.location.search);
                    n = t.get("debug").split(",")
                }
                return n.includes(e) || n.includes("godmode")
            } catch (r) {
                return !1
            }
        }
    }
}]);
//# 47126ae0e800ea9f7d31a303a665c2aead94bce7.3e1d8c3b955e8306f8c2.js.map
