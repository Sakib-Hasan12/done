! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        i = Object.getPrototypeOf,
        o = t.slice,
        m = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        a = n.toString,
        v = n.hasOwnProperty,
        s = v.toString,
        d = s.call(Object),
        g = {},
        y = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        b = function(e) { return null != e && e === e.window },
        u = { type: !0, src: !0, noModule: !0 };

    function w(e, t, n) {
        var i, r = (t = t || E).createElement("script");
        if (r.text = e, n)
            for (i in u) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[a.call(e)] || "object" : typeof e }
    var c = "3.3.1",
        S = function(e, t) { return new S.fn.init(e, t) },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: c,
        constructor: S,
        length: 0,
        toArray: function() { return o.call(this) },
        get: function(e) { return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return S.each(this, e) },
        map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(o.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, i, r, a, s = arguments[0] || {},
            o = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == typeof s || y(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) n = s[t], s !== (i = e[t]) && (d && i && (S.isPlainObject(i) || (r = Array.isArray(i))) ? (a = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, s[t] = S.extend(d, a, i)) : void 0 !== i && (s[t] = i));
        return s
    }, S.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== a.call(e)) && (!(t = i(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && s.call(n) === d) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e) { w(e) },
        each: function(e, t) {
            var n, i = 0;
            if (h(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(p, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (h(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : r.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e },
        grep: function(e, t, n) { for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) !== s && i.push(e[r]); return i },
        map: function(e, t, n) {
            var i, r, a = 0,
                s = [];
            if (h(e))
                for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
            else
                for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
            return m.apply([], s)
        },
        guid: 1,
        support: g
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var f = function(n) {
        var e, h, w, a, r, f, c, m, x, l, d, T, C, s, E, v, o, u, g, S = "sizzle" + 1 * new Date,
            y = n.document,
            k = 0,
            i = 0,
            p = se(),
            b = se(),
            M = se(),
            L = function(e, t) { return e === t && (d = !0), 0 },
            P = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            N = t.push,
            z = t.push,
            D = t.slice,
            I = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            $ = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            j = "\\[" + $ + "*(" + H + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + $ + "*\\]",
            R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
            q = new RegExp($ + "+", "g"),
            _ = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
            B = new RegExp("^" + $ + "*," + $ + "*"),
            F = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
            V = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]", "g"),
            G = new RegExp(R),
            X = new RegExp("^" + H + "$"),
            W = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + j), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            U = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
            ee = function(e, t, n) { var i = "0x" + t - 65536; return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            ie = function() { T() },
            re = ye(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { z.apply(t = D.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType } catch (e) {
            z = {
                apply: t.length ? function(e, t) { N.apply(e, D.call(t)) } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, i) {
            var r, a, s, o, l, d, u, c = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (l = Q.exec(e)))
                    if (r = l[1]) { if (9 === p) { if (!(s = t.getElementById(r))) return n; if (s.id === r) return n.push(s), n } else if (c && (s = c.getElementById(r)) && g(t, s) && s.id === r) return n.push(s), n } else { if (l[2]) return z.apply(n, t.getElementsByTagName(e)), n; if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return z.apply(n, t.getElementsByClassName(r)), n }
                if (h.qsa && !M[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) c = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(te, ne) : t.setAttribute("id", o = S), a = (d = f(e)).length; a--;) d[a] = "#" + o + " " + ge(d[a]);
                        u = d.join(","), c = Z.test(e) && me(t.parentNode) || t
                    }
                    if (u) try { return z.apply(n, c.querySelectorAll(u)), n } catch (e) {} finally { o === S && t.removeAttribute("id") }
                }
            }
            return m(e.replace(_, "$1"), t, n, i)
        }

        function se() { var i = []; return function e(t, n) { return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n } }

        function oe(e) { return e[S] = !0, e }

        function le(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function de(e, t) { for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function pe(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function he(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function fe(s) { return oe(function(a) { return a = +a, oe(function(e, t) { for (var n, i = s([], e.length, a), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n])) }) }) }

        function me(e) { return e && void 0 !== e.getElementsByTagName && e }
        for (e in h = ae.support = {}, r = ae.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, T = ae.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : y;
                return i !== C && 9 === i.nodeType && i.documentElement && (s = (C = i).documentElement, E = !r(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), h.attributes = le(function(e) { return e.className = "i", !e.getAttribute("className") }), h.getElementsByTagName = le(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), h.getElementsByClassName = K.test(C.getElementsByClassName), h.getById = le(function(e) { return s.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), h.getById ? (w.filter.ID = function(e) { var t = e.replace(J, ee); return function(e) { return e.getAttribute("id") === t } }, w.find.ID = function(e, t) { if (void 0 !== t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (w.filter.ID = function(e) { var n = e.replace(J, ee); return function(e) { var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n, i, r, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                        }
                        return []
                    }
                }), w.find.TAG = h.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" !== e) return a;
                    for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, w.find.CLASS = h.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e) }, o = [], v = [], (h.qsa = K.test(C.querySelectorAll)) && (le(function(e) { s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + $ + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]") }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + $ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (h.matchesSelector = K.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) { h.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), o.push("!=", R) }), v = v.length && new RegExp(v.join("|")), o = o.length && new RegExp(o.join("|")), t = K.test(s.compareDocumentPosition), g = t || K.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = t ? function(e, t) { if (e === t) return d = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && g(y, e) ? -1 : t === C || t.ownerDocument === y && g(y, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        o = [t];
                    if (!r || !a) return e === C ? -1 : t === C ? 1 : r ? -1 : a ? 1 : l ? I(l, e) - I(l, t) : 0;
                    if (r === a) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) o.unshift(n);
                    for (; s[i] === o[i];) i++;
                    return i ? ue(s[i], o[i]) : s[i] === y ? -1 : o[i] === y ? 1 : 0
                }), C
            }, ae.matches = function(e, t) { return ae(e, null, null, t) }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(V, "='$1']"), h.matchesSelector && E && !M[t + " "] && (!o || !o.test(t)) && (!v || !v.test(t))) try { var n = u.call(e, t); if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) {}
                return 0 < ae(t, C, null, [e]).length
            }, ae.contains = function(e, t) { return (e.ownerDocument || e) !== C && T(e), g(e, t) }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && P.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== i ? i : h.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, ae.escape = function(e) { return (e + "").replace(te, ne) }, ae.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (d = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(L), d) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
                return l = null, e
            }, a = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                    for (; t = e[i++];) n += a(t);
                return n
            }, (w = ae.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: W,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return W.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(J, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && p(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, i, r) { return function(e) { var t = ae.attr(e, n); return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(q, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-")) } },
                    CHILD: function(f, e, t, m, v) {
                        var g = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var i, r, a, s, o, l, d = g !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                c = b && e.nodeName.toLowerCase(),
                                p = !n && !b,
                                h = !1;
                            if (u) {
                                if (g) {
                                    for (; d;) {
                                        for (s = e; s = s[d];)
                                            if (b ? s.nodeName.toLowerCase() === c : 1 === s.nodeType) return !1;
                                        l = d = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && p) {
                                    for (h = (o = (i = (r = (a = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && i[1]) && i[2], s = o && u.childNodes[o]; s = ++o && s && s[d] || (h = o = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) { r[f] = [k, o, h]; break }
                                } else if (p && (h = o = (i = (r = (a = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && i[1]), !1 === h)
                                    for (;
                                        (s = ++o && s && s[d] || (h = o = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== c : 1 !== s.nodeType) || !++h || (p && ((r = (a = s[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [k, h]), s !== e)););
                                return (h -= v) === m || h % m == 0 && 0 <= h / m
                            }
                        }
                    },
                    PSEUDO: function(e, a) { var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e); return s[S] ? s(a) : 1 < s.length ? (t = [e, e, "", a], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) { for (var n, i = s(e, a), r = i.length; r--;) e[n = I(e, i[r])] = !(t[n] = i[r]) }) : function(e) { return s(e, 0, t) }) : s }
                },
                pseudos: {
                    not: oe(function(e) {
                        var i = [],
                            r = [],
                            o = c(e.replace(_, "$1"));
                        return o[S] ? oe(function(e, t, n, i) { for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r)) }) : function(e, t, n) { return i[0] = e, o(i, null, n, r), i[0] = null, !r.pop() }
                    }),
                    has: oe(function(t) { return function(e) { return 0 < ae(t, e).length } }),
                    contains: oe(function(t) {
                        return t = t.replace(J, ee),
                            function(e) { return -1 < (e.textContent || e.innerText || a(e)).indexOf(t) }
                    }),
                    lang: oe(function(n) {
                        return X.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(J, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === s },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !w.pseudos.empty(e) },
                    header: function(e) { return U.test(e.nodeName) },
                    input: function(e) { return Y.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: fe(function() { return [0] }),
                    last: fe(function(e, t) { return [t - 1] }),
                    eq: fe(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: fe(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: fe(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: fe(function(e, t, n) { for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i); return e }),
                    gt: fe(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e })
                }
            }).pseudos.nth = w.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[e] = ce(e);
        for (e in { submit: !0, reset: !0 }) w.pseudos[e] = pe(e);

        function ve() {}

        function ge(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function ye(o, e, t) {
            var l = e.dir,
                d = e.next,
                u = d || l,
                c = t && "parentNode" === u,
                p = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || c) return o(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, a, s = [k, p];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || c) && o(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || c)
                            if (r = (a = e[S] || (e[S] = {}))[e.uniqueID] || (a[e.uniqueID] = {}), d && d === e.nodeName.toLowerCase()) e = e[l] || e;
                            else { if ((i = r[u]) && i[0] === k && i[1] === p) return s[2] = i[2]; if ((r[u] = s)[2] = o(e, t, n)) return !0 } return !1
            }
        }

        function be(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function we(e, t, n, i, r) { for (var a, s = [], o = 0, l = e.length, d = null != t; o < l; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), d && t.push(o))); return s }

        function xe(h, f, m, v, g, e) {
            return v && !v[S] && (v = xe(v)), g && !g[S] && (g = xe(g, e)), oe(function(e, t, n, i) {
                var r, a, s, o = [],
                    l = [],
                    d = t.length,
                    u = e || function(e, t, n) { for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n); return n }(f || "*", n.nodeType ? [n] : n, []),
                    c = !h || !e && f ? u : we(u, o, h, n, i),
                    p = m ? g || (e ? h : d || v) ? [] : t : c;
                if (m && m(c, p, n, i), v)
                    for (r = we(p, l), v(r, [], n, i), a = r.length; a--;)(s = r[a]) && (p[l[a]] = !(c[l[a]] = s));
                if (e) {
                    if (g || h) {
                        if (g) {
                            for (r = [], a = p.length; a--;)(s = p[a]) && r.push(c[a] = s);
                            g(null, p = [], r, i)
                        }
                        for (a = p.length; a--;)(s = p[a]) && -1 < (r = g ? I(e, s) : o[a]) && (e[r] = !(t[r] = s))
                    }
                } else p = we(p === t ? p.splice(d, p.length) : p), g ? g(null, t, p, i) : z.apply(t, p)
            })
        }

        function Te(e) {
            for (var r, t, n, i = e.length, a = w.relative[e[0].type], s = a || w.relative[" "], o = a ? 1 : 0, l = ye(function(e) { return e === r }, s, !0), d = ye(function(e) { return -1 < I(r, e) }, s, !0), u = [function(e, t, n) { var i = !a && (n || t !== x) || ((r = t).nodeType ? l(e, t, n) : d(e, t, n)); return r = null, i }]; o < i; o++)
                if (t = w.relative[e[o].type]) u = [ye(be(u), t)];
                else {
                    if ((t = w.filter[e[o].type].apply(null, e[o].matches))[S]) { for (n = ++o; n < i && !w.relative[e[n].type]; n++); return xe(1 < o && be(u), 1 < o && ge(e.slice(0, o - 1).concat({ value: " " === e[o - 2].type ? "*" : "" })).replace(_, "$1"), t, o < n && Te(e.slice(o, n)), n < i && Te(e = e.slice(n)), n < i && ge(e)) }
                    u.push(t)
                }
            return be(u)
        }
        return ve.prototype = w.filters = w.pseudos, w.setFilters = new ve, f = ae.tokenize = function(e, t) { var n, i, r, a, s, o, l, d = b[e + " "]; if (d) return t ? 0 : d.slice(0); for (s = e, o = [], l = w.preFilter; s;) { for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), o.push(r = [])), n = !1, (i = F.exec(s)) && (n = i.shift(), r.push({ value: n, type: i[0].replace(_, " ") }), s = s.slice(n.length)), w.filter) !(i = W[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), r.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? ae.error(e) : b(e, o).slice(0) }, c = ae.compile = function(e, t) {
            var n, v, g, y, b, i, r = [],
                a = [],
                s = M[e + " "];
            if (!s) {
                for (t || (t = f(e)), n = t.length; n--;)(s = Te(t[n]))[S] ? r.push(s) : a.push(s);
                (s = M(e, (v = a, y = 0 < (g = r).length, b = 0 < v.length, i = function(e, t, n, i, r) {
                    var a, s, o, l = 0,
                        d = "0",
                        u = e && [],
                        c = [],
                        p = x,
                        h = e || b && w.find.TAG("*", r),
                        f = k += null == p ? 1 : Math.random() || .1,
                        m = h.length;
                    for (r && (x = t === C || t || r); d !== m && null != (a = h[d]); d++) {
                        if (b && a) {
                            for (s = 0, t || a.ownerDocument === C || (T(a), n = !E); o = v[s++];)
                                if (o(a, t || C, n)) { i.push(a); break }
                            r && (k = f)
                        }
                        y && ((a = !o && a) && l--, e && u.push(a))
                    }
                    if (l += d, y && d !== l) {
                        for (s = 0; o = g[s++];) o(u, c, t, n);
                        if (e) {
                            if (0 < l)
                                for (; d--;) u[d] || c[d] || (c[d] = A.call(i));
                            c = we(c)
                        }
                        z.apply(i, c), r && !e && 0 < c.length && 1 < l + g.length && ae.uniqueSort(i)
                    }
                    return r && (k = f, x = p), u
                }, y ? oe(i) : i))).selector = e
            }
            return s
        }, m = ae.select = function(e, t, n, i) {
            var r, a, s, o, l, d = "function" == typeof e && e,
                u = !i && f(e = d.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && E && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(J, ee), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = W.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !w.relative[o = s.type]);)
                    if ((l = w.find[o]) && (i = l(s.matches[0].replace(J, ee), Z.test(a[0].type) && me(t.parentNode) || t))) { if (a.splice(r, 1), !(e = i.length && ge(a))) return z.apply(n, i), n; break }
            }
            return (d || c(e, u))(i, t, !E, n, !t || Z.test(e) && me(t.parentNode) || t), n
        }, h.sortStable = S.split("").sort(L).join("") === S, h.detectDuplicates = !!d, T(), h.sortDetached = le(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), le(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || de("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), h.attributes && le(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || de("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), le(function(e) { return null == e.getAttribute("disabled") }) || de(O, function(e, t, n) { var i; if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), ae
    }(C);
    S.find = f, S.expr = f.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = f.uniqueSort, S.text = f.getText, S.isXMLDoc = f.isXML, S.contains = f.contains, S.escapeSelector = f.escape;
    var T = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && S(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        k = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        M = S.expr.match.needsContext;

    function L(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, n, i) { return y(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== i }) : n.nodeType ? S.grep(e, function(e) { return e === n !== i }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < r.call(n, e) !== i }) : S.filter(n, e, i) }
    S.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (S.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, r[t], n);
            return 1 < i ? S.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(A(this, e || [], !1)) },
        not: function(e) { return this.pushStack(A(this, e || [], !0)) },
        is: function(e) { return !!A(this, "string" == typeof e && M.test(e) ? S(e) : e || [], !1).length }
    });
    var N, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || N, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : z.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), P.test(i[1]) && S.isPlainObject(t))
                for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = E.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }).prototype = S.fn, N = S(E);
    var D = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                a = [],
                s = "string" != typeof e && S(e);
            if (!M.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { a.push(n); break }
            return this.pushStack(1 < a.length ? S.uniqueSort(a) : a)
        },
        index: function(e) { return e ? "string" == typeof e ? r.call(S(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return T(e, "parentNode") }, parentsUntil: function(e, t, n) { return T(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return T(e, "nextSibling") }, prevAll: function(e) { return T(e, "previousSibling") }, nextUntil: function(e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return T(e, "previousSibling", n) }, siblings: function(e) { return k((e.parentNode || {}).firstChild, e) }, children: function(e) { return k(e.firstChild) }, contents: function(e) { return L(e, "iframe") ? e.contentDocument : (L(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(i, r) { S.fn[i] = function(e, t) { var n = S.map(this, r, e); return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (I[i] || S.uniqueSort(n), D.test(i) && n.reverse()), this.pushStack(n) } });
    var $ = /[^\x20\t\r\n\f]+/g;

    function H(e) { return e }

    function j(e) { throw e }

    function R(e, t, n, i) { var r; try { e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, S.each(e.match($) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, i);
        var r, t, a, s, o = [],
            l = [],
            d = -1,
            u = function() {
                for (s = s || i.once, a = r = !0; l.length; d = -1)
                    for (t = l.shift(); ++d < o.length;) !1 === o[d].apply(t[0], t[1]) && i.stopOnFalse && (d = o.length, t = !1);
                i.memory || (t = !1), r = !1, s && (o = t ? [] : "")
            },
            c = { add: function() { return o && (t && !r && (d = o.length - 1, l.push(t)), function n(e) { S.each(e, function(e, t) { y(t) ? i.unique && c.has(t) || o.push(t) : t && t.length && "string" !== x(t) && n(t) }) }(arguments), t && !r && u()), this }, remove: function() { return S.each(arguments, function(e, t) { for (var n; - 1 < (n = S.inArray(t, o, n));) o.splice(n, 1), n <= d && d-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, o) : 0 < o.length }, empty: function() { return o && (o = []), this }, disable: function() { return s = l = [], o = t = "", this }, disabled: function() { return !o }, lock: function() { return s = l = [], t || r || (o = t = ""), this }, locked: function() { return !!s }, fireWith: function(e, t) { return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!a } };
        return c
    }, S.extend({
        Deferred: function(e) {
            var a = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function() { return r },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    catch: function(e) { return s.then(null, e) },
                    pipe: function() {
                        var r = arguments;
                        return S.Deferred(function(i) {
                            S.each(a, function(e, t) {
                                var n = y(r[t[4]]) && r[t[4]];
                                o[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function d(r, a, s, o) {
                            return function() {
                                var n = this,
                                    i = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = s.apply(n, i)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? o ? t.call(e, d(l, a, H, o), d(l, a, j, o)) : (l++, t.call(e, d(l, a, H, o), d(l, a, j, o), d(l, a, H, a.notifyWith))) : (s !== H && (n = void 0, i = [e]), (o || a.resolveWith)(n, i))
                                        }
                                    },
                                    t = o ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== j && (n = void 0, i = [e]), a.rejectWith(n, i)) } };
                                r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) { a[0][3].add(d(0, e, y(i) ? i : H, e.notifyWith)), a[1][3].add(d(0, e, y(t) ? t : H)), a[2][3].add(d(0, e, y(n) ? n : j)) }).promise()
                    },
                    promise: function(e) { return null != e ? S.extend(e, s) : s }
                },
                o = {};
            return S.each(a, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() { r = i }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), n.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = n.fireWith
            }), s.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                r = o.call(arguments),
                a = S.Deferred(),
                s = function(t) { return function(e) { i[t] = this, r[t] = 1 < arguments.length ? o.call(arguments) : e, --n || a.resolveWith(i, r) } };
            if (n <= 1 && (R(e, a.done(s(t)).resolve, a.reject, !n), "pending" === a.state() || y(r[t] && r[t].then))) return a.then();
            for (; t--;) R(r[t], s(t), a.reject);
            return a.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && q.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var _ = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return _.then(e).catch(function(e) { S.readyException(e) }), this }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || _.resolveWith(E, [S])
        }
    }), S.ready.then = _.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var F = function(e, t, n, i, r, a, s) {
            var o = 0,
                l = e.length,
                d = null == n;
            if ("object" === x(n))
                for (o in r = !0, n) F(e, t, o, n[o], !0, a, s);
            else if (void 0 !== i && (r = !0, y(i) || (s = !0), d && (t = s ? (t.call(e, i), null) : (d = t, function(e, t, n) { return d.call(S(e), n) })), t))
                for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
            return r ? e : d ? t.call(e) : l ? t(e[0], n) : a
        },
        V = /^-ms-/,
        G = /-([a-z])/g;

    function X(e, t) { return t.toUpperCase() }

    function W(e) { return e.replace(V, "ms-").replace(G, X) }
    var Y = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function U() { this.expando = S.expando + U.uid++ }
    U.uid = 1, U.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[W(t)] = n;
            else
                for (i in t) r[W(i)] = t[i];
            return r
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][W(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(W) : (t = W(t)) in i ? [t] : t.match($) || []).length; for (; n--;) delete i[t[n]] }(void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) }
    };
    var K = new U,
        Q = new U,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try { n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r) } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({ hasData: function(e) { return Q.hasData(e) || K.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return K.access(e, t, n) }, _removeData: function(e, t) { K.remove(e, t) } }), S.fn.extend({
        data: function(n, e) {
            var t, i, r, a = this[0],
                s = a && a.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : F(this, function(e) {
                var t;
                if (a && void 0 === e) return void 0 !== (t = Q.get(a, n)) ? t : void 0 !== (t = ee(a, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = Q.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = W(i.slice(5)), ee(a, i, r[i]));
                K.set(a, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) { return this.each(function() { Q.remove(this, e) }) }
    }), S.extend({
        queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, S.makeArray(n)) : i.push(n)), i || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = S._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, function() { S.dequeue(e, t) }, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return K.get(e, n) || K.access(e, n, { empty: S.Callbacks("once memory").add(function() { K.remove(e, [t + "queue", n]) }) }) }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, i = 1,
                r = S.Deferred(),
                a = this,
                s = this.length,
                o = function() {--i || r.resolveWith(a, [a]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(a[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display") },
        ae = function(e, t, n, i) { var r, a, s = {}; for (a in t) s[a] = e.style[a], e.style[a] = t[a]; for (a in r = n.apply(e, i || []), t) e.style[a] = s[a]; return r };

    function se(e, t, n, i) {
        var r, a, s = 20,
            o = i ? function() { return i.cur() } : function() { return S.css(e, t, "") },
            l = o(),
            d = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            u = (S.cssNumber[t] || "px" !== d && +l) && ne.exec(S.css(e, t));
        if (u && u[3] !== d) {
            for (l /= 2, d = d || u[3], u = +l || 1; s--;) S.style(e, t, u + d), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), u /= a;
            u *= 2, S.style(e, t, u + d), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = r)), r
    }
    var oe = {};

    function le(e, t) { for (var n, i, r, a, s, o, l, d = [], u = 0, c = e.length; u < c; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (d[u] = K.get(i, "display") || null, d[u] || (i.style.display = "")), "" === i.style.display && re(i) && (d[u] = (l = s = a = void 0, s = (r = i).ownerDocument, o = r.nodeName, (l = oe[o]) || (a = s.body.appendChild(s.createElement(o)), l = S.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), oe[o] = l)))) : "none" !== n && (d[u] = "none", K.set(i, "display", n))); for (u = 0; u < c; u++) null != d[u] && (e[u].style.display = d[u]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { re(this) ? S(this).show() : S(this).hide() }) } });
    var de = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ce = /^$|^module$|\/(?:java|ecma)script/i,
        pe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function he(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? S.merge([e], n) : n }

    function fe(e, t) { for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval")) }
    pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
    var me, ve, ge = /<|&#?\w+;/;

    function ye(e, t, n, i, r) {
        for (var a, s, o, l, d, u, c = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === x(a)) S.merge(p, a.nodeType ? [a] : a);
                else if (ge.test(a)) {
            for (s = s || c.appendChild(t.createElement("div")), o = (ue.exec(a) || ["", ""])[1].toLowerCase(), l = pe[o] || pe._default, s.innerHTML = l[1] + S.htmlPrefilter(a) + l[2], u = l[0]; u--;) s = s.lastChild;
            S.merge(p, s.childNodes), (s = c.firstChild).textContent = ""
        } else p.push(t.createTextNode(a));
        for (c.textContent = "", h = 0; a = p[h++];)
            if (i && -1 < S.inArray(a, i)) r && r.push(a);
            else if (d = S.contains(a.ownerDocument, a), s = he(c.appendChild(a), "script"), d && fe(s), n)
            for (u = 0; a = s[u++];) ce.test(a.type || "") && n.push(a);
        return c
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (ve = E.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), me.appendChild(ve), g.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var be = E.documentElement,
        we = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() { return !0 }

    function Ee() { return !1 }

    function Se() { try { return E.activeElement } catch (e) {} }

    function ke(e, t, n, i, r, a) {
        var s, o;
        if ("object" == typeof t) { for (o in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, o, n, i, t[o], a); return e }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee;
        else if (!r) return e;
        return 1 === a && (s = r, (r = function(e) { return S().off(e), s.apply(this, arguments) }).guid = s.guid || (s.guid = S.guid++)), e.each(function() { S.event.add(this, t, r, i, n) })
    }
    S.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var a, s, o, l, d, u, c, p, h, f, m, v = K.get(t);
            if (v)
                for (n.handler && (n = (a = n).handler, r = a.selector), r && S.find.matchesSelector(be, r), n.guid || (n.guid = S.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) { return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), d = (e = (e || "").match($) || [""]).length; d--;) h = m = (o = Te.exec(e[d]) || [])[1], f = (o[2] || "").split(".").sort(), h && (c = S.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = S.event.special[h] || {}, u = S.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && S.expr.match.needsContext.test(r), namespace: f.join(".") }, a), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(h, s)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), S.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var a, s, o, l, d, u, c, p, h, f, m, v = K.hasData(e) && K.get(e);
            if (v && (l = v.events)) {
                for (d = (t = (t || "").match($) || [""]).length; d--;)
                    if (h = m = (o = Te.exec(t[d]) || [])[1], f = (o[2] || "").split(".").sort(), h) {
                        for (c = S.event.special[h] || {}, p = l[h = (i ? c.delegateType : c.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) u = p[a], !r && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
                        s && !p.length && (c.teardown && !1 !== c.teardown.call(e, f, v.handle) || S.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) S.event.remove(e, h + t[d], n, i, !0);
                S.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, a, s, o = S.event.fix(e),
                l = new Array(arguments.length),
                d = (K.get(this, "events") || {})[o.type] || [],
                u = S.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (s = S.event.handlers.call(this, o, d), t = 0;
                    (r = s[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (i = ((S.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, s, o = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (a = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < S(r, this).index(d) : S.find(r, this, null, [d]).length), s[r] && a.push(i);
                        a.length && o.push({ elem: d, handlers: a })
                    }
            return d = this, l < t.length && o.push({ elem: d, handlers: t.slice(l) }), o
        },
        addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: y(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[S.expando] ? e : new S.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== Se() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === Se() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && L(this, "input")) return this.click(), !1 }, _default: function(e) { return L(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, S.event.addProp), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, r) {
        S.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), S.fn.extend({ on: function(e, t, n, i) { return ke(this, e, t, n, i) }, one: function(e, t, n, i) { return ke(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { S.event.remove(this, e, n, t) }); for (r in e) this.off(r, t, e[r]); return this } });
    var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Le = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) { return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function ze(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function De(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Ie(e, t) {
        var n, i, r, a, s, o, l, d;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.access(e), s = K.set(t, a), d = a.events))
                for (r in delete s.handle, s.events = {}, d)
                    for (n = 0, i = d[r].length; n < i; n++) S.event.add(t, r, d[r][n]);
            Q.hasData(e) && (o = Q.access(e), l = S.extend({}, o), Q.set(t, l))
        }
    }

    function Oe(n, i, r, a) {
        i = m.apply([], i);
        var e, t, s, o, l, d, u = 0,
            c = n.length,
            p = c - 1,
            h = i[0],
            f = y(h);
        if (f || 1 < c && "string" == typeof h && !g.checkClone && Pe.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = h.call(this, e, t.html())), Oe(t, i, r, a)
        });
        if (c && (t = (e = ye(i, n[0].ownerDocument, !1, n, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
            for (o = (s = S.map(he(e, "script"), ze)).length; u < c; u++) l = e, u !== p && (l = S.clone(l, !0, !0), o && S.merge(s, he(l, "script"))), r.call(n[u], l, u);
            if (o)
                for (d = s[s.length - 1].ownerDocument, S.map(s, De), u = 0; u < o; u++) l = s[u], ce.test(l.type || "") && !K.access(l, "globalEval") && S.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : w(l.textContent.replace(Ae, ""), d, l))
        }
        return n
    }

    function $e(e, t, n) { for (var i, r = t ? S.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || S.cleanData(he(i)), i.parentNode && (n && S.contains(i.ownerDocument, i) && fe(he(i, "script")), i.parentNode.removeChild(i)); return e }
    S.extend({
        htmlPrefilter: function(e) { return e.replace(Me, "<$1></$2>") },
        clone: function(e, t, n) {
            var i, r, a, s, o, l, d, u = e.cloneNode(!0),
                c = S.contains(e.ownerDocument, e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = he(u), i = 0, r = (a = he(e)).length; i < r; i++) o = a[i], l = s[i], void 0, "input" === (d = l.nodeName.toLowerCase()) && de.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
            if (t)
                if (n)
                    for (a = a || he(e), s = s || he(u), i = 0, r = a.length; i < r; i++) Ie(a[i], s[i]);
                else Ie(e, u);
            return 0 < (s = he(u, "script")).length && fe(s, !c && he(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = S.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (Y(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) { return $e(this, e, !0) },
        remove: function(e) { return $e(this, e) },
        text: function(e) { return F(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Oe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e) }) },
        prepend: function() {
            return Oe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Oe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Oe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(he(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !pe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Oe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(he(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, s) { S.fn[e] = function(e) { for (var t, n = [], i = S(e), r = i.length - 1, a = 0; a <= r; a++) t = a === r ? this : this.clone(!0), S(i[a])[s](t), l.apply(n, t.get()); return this.pushStack(n) } });
    var He = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        je = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        Re = new RegExp(ie.join("|"), "i");

    function qe(e, t, n) { var i, r, a, s, o = e.style; return (n = n || je(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (s = S.style(e, t)), !g.pixelBoxStyles() && He.test(s) && Re.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(o).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", be.removeChild(o), l = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, i, r, a, s, o = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(g, { boxSizingReliable: function() { return e(), i }, pixelBoxStyles: function() { return e(), a }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), r } }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        Ve = { position: "absolute", visibility: "hidden", display: "block" },
        Ge = { letterSpacing: "0", fontWeight: "400" },
        Xe = ["Webkit", "Moz", "ms"],
        We = E.createElement("div").style;

    function Ye(e) {
        var t = S.cssProps[e];
        return t || (t = S.cssProps[e] = function(e) {
            if (e in We) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in We) return e
        }(e) || e), t
    }

    function Ue(e, t, n) { var i = ne.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function Ke(e, t, n, i, r, a) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += S.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= S.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= S.css(e, "border" + ie[s] + "Width", !0, r))) : (l += S.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += S.css(e, "border" + ie[s] + "Width", !0, r) : o += S.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
    }

    function Qe(e, t, n) {
        var i = je(e),
            r = qe(e, t, i),
            a = "border-box" === S.css(e, "boxSizing", !1, i),
            s = a;
        if (He.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (g.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === S.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ke(e, t, n || (a ? "border" : "content"), s, i, r) + "px"
    }

    function Ze(e, t, n, i, r) { return new Ze.prototype.init(e, t, n, i, r) }
    S.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = qe(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = W(t),
                    l = Fe.test(t),
                    d = e.style;
                if (l || (t = Ye(o)), s = S.cssHooks[t] || S.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : d[t];
                "string" === (a = typeof n) && (r = ne.exec(n)) && r[1] && (n = se(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (S.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n))
            }
        },
        css: function(e, t, n, i) { var r, a, s, o = W(t); return Fe.test(t) || (t = Ye(o)), (s = S.cssHooks[t] || S.cssHooks[o]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = qe(e, t, i)), "normal" === r && t in Ge && (r = Ge[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r }
    }), S.each(["height", "width"], function(e, o) {
        S.cssHooks[o] = {
            get: function(e, t, n) { if (t) return !Be.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, o, n) : ae(e, Ve, function() { return Qe(e, o, n) }) },
            set: function(e, t, n) {
                var i, r = je(e),
                    a = "border-box" === S.css(e, "boxSizing", !1, r),
                    s = n && Ke(e, o, n, a, r);
                return a && g.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - Ke(e, o, "border", !1, r) - .5)), s && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[o] = t, t = S.css(e, o)), Ue(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = _e(g.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(r, a) { S.cssHooks[r + a] = { expand: function(e) { for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + a] = i[t] || i[t - 2] || i[0]; return n } }, "margin" !== r && (S.cssHooks[r + a].set = Ue) }), S.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var i, r, a = {},
                    s = 0;
                if (Array.isArray(t)) { for (i = je(e), r = t.length; s < r; s++) a[t[s]] = S.css(e, t[s], !1, i); return a }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ze).prototype = { constructor: Ze, init: function(e, t, n, i, r, a) { this.elem = e, this.prop = n, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = Ze.propHooks[this.prop]; return e && e.get ? e.get(this) : Ze.propHooks._default.get(this) }, run: function(e) { var t, n = Ze.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this } }).init.prototype = Ze.prototype, (Ze.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Ze.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = Ze.prototype.init, S.fx.step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

    function at() { et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(at) : C.setTimeout(at, S.fx.interval), S.fx.tick()) }

    function st() { return C.setTimeout(function() { Je = void 0 }), Je = Date.now() }

    function ot(e, t) {
        var n, i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function lt(e, t, n) {
        for (var i, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), a = 0, s = r.length; a < s; a++)
            if (i = r[a].call(n, t, e)) return i
    }

    function dt(a, e, t) {
        var n, s, i = 0,
            r = dt.prefilters.length,
            o = S.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var e = Je || st(), t = Math.max(0, d.startTime + d.duration - e), n = 1 - (t / d.duration || 0), i = 0, r = d.tweens.length; i < r; i++) d.tweens[i].run(n); return o.notifyWith(a, [d, n, t]), n < 1 && r ? t : (r || o.notifyWith(a, [d, 1, 0]), o.resolveWith(a, [d]), !1) },
            d = o.promise({
                elem: a,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Je || st(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = S.Tween(a, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing); return d.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? d.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) d.tweens[t].run(1);
                    return e ? (o.notifyWith(a, [d, 1, 0]), o.resolveWith(a, [d, e])) : o.rejectWith(a, [d, e]), this
                }
            }),
            u = d.props;
        for (! function(e, t) {
                var n, i, r, a, s;
                for (n in e)
                    if (r = t[i = W(n)], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = S.cssHooks[i]) && "expand" in s)
                        for (n in a = s.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
                    else t[i] = r
            }(u, d.opts.specialEasing); i < r; i++)
            if (n = dt.prefilters[i].call(d, a, u, d.opts)) return y(n.stop) && (S._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(u, lt, d), y(d.opts.start) && d.opts.start.call(a, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), S.fx.timer(S.extend(l, { elem: a, anim: d, queue: d.opts.queue })), d
    }
    S.Animation = S.extend(dt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, ne.exec(t), n), n }] },
        tweener: function(e, t) { for (var n, i = 0, r = (e = y(e) ? (t = e, ["*"]) : e.match($)).length; i < r; i++) n = e[i], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var i, r, a, s, o, l, d, u, c = "width" in t || "height" in t,
                p = this,
                h = {},
                f = e.style,
                m = e.nodeType && re(e),
                v = K.get(e, "fxshow");
            for (i in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() { s.unqueued || o() }), s.unqueued++, p.always(function() { p.always(function() { s.unqueued--, S.queue(e, "fx").length || s.empty.fire() }) })), t)
                if (r = t[i], it.test(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[i]) continue;
                        m = !0
                    }
                    h[i] = v && v[i] || S.style(e, i)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                for (i in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = v && v.display) && (d = K.get(e, "display")), "none" === (u = S.css(e, "display")) && (d ? u = d : (le([e], !0), d = e.style.display || d, u = S.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === S.css(e, "float") && (l || (p.done(function() { f.display = d }), null == d && (u = f.display, d = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] })), l = !1, h) l || (v ? "hidden" in v && (m = v.hidden) : v = K.access(e, "fxshow", { display: d }), a && (v.hidden = !m), m && le([e], !0), p.done(function() { for (i in m || le([e]), K.remove(e, "fxshow"), h) S.style(e, i, h[i]) })), l = lt(m ? v[i] : 0, i, p), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) { t ? dt.prefilters.unshift(e) : dt.prefilters.push(e) }
    }), S.speed = function(e, t, n) { var i = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || y(e) && e, duration: e, easing: n && t || t && !y(t) && t }; return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { y(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue) }, i }, S.fn.extend({
        fadeTo: function(e, t, n, i) { return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
        animate: function(t, e, n, i) {
            var r = S.isEmptyObject(t),
                a = S.speed(e, n, i),
                s = function() {
                    var e = dt(this, S.extend({}, t), a);
                    (r || K.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(r, e, a) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(a)
            };
            return "string" != typeof r && (a = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = S.timers,
                    i = K.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && rt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
                !e && a || S.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = K.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = S.timers,
                    a = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, i) {
        var r = S.fn[i];
        S.fn[i] = function(e, t, n) { return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ot(i, !0), e, t, n) }
    }), S.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, i) { S.fn[e] = function(e, t, n) { return this.animate(i, e, t, n) } }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Je = void 0
    }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { et || (et = !0, at()) }, S.fx.stop = function() { et = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(i, e) {
        return i = S.fx && S.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", g.checkOn = "" !== tt.value, g.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", g.radioValue = "t" === tt.value;
    var ut, ct = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return F(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({
        attr: function(e, t, n) { var i, r, a = e.nodeType; if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === a && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i) },
        attrHooks: { type: { set: function(e, t) { if (!g.radioValue && "radio" === t && L(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match($);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ut = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ct[t] || S.find.attr;
        ct[t] = function(e, t, n) { var i, r, a = t.toLowerCase(); return n || (r = ct[a], ct[a] = i, i = null != s(e, t, n) ? a : null, ct[a] = r), i }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function ft(e) { return (e.match($) || []).join(" ") }

    function mt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function vt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match($) || [] }
    S.fn.extend({ prop: function(e, t) { return F(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var i, r, a = e.nodeType; if (3 !== a && 8 !== a && 2 !== a) return 1 === a && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), g.optSelected || (S.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({
        addClass: function(t) {
            var e, n, i, r, a, s, o, l = 0;
            if (y(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, mt(this))) });
            if ((e = vt(t)).length)
                for (; n = this[l++];)
                    if (r = mt(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
                        for (s = 0; a = e[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        r !== (o = ft(i)) && n.setAttribute("class", o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, a, s, o, l = 0;
            if (y(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, mt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                for (; n = this[l++];)
                    if (r = mt(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
                        for (s = 0; a = e[s++];)
                            for (; - 1 < i.indexOf(" " + a + " ");) i = i.replace(" " + a + " ", " ");
                        r !== (o = ft(i)) && n.setAttribute("class", o)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var a = typeof r,
                s = "string" === a || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) { S(this).toggleClass(r.call(this, e, mt(this), t), t) }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = S(this), i = vt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" !== a || ((e = mt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + ft(mt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var gt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : ft(S.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        o = s ? null : [],
                        l = s ? a + 1 : r.length;
                    for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                        if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) { for (var n, i, r = e.options, a = S.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), a)) && (n = !0); return n || (e.selectedIndex = -1), a }
            }
        }
    }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, g.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), g.focusin = "onfocusin" in C;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) { e.stopPropagation() };
    S.extend(S.event, {
        trigger: function(e, t, n, i) {
            var r, a, s, o, l, d, u, c, p = [n || E],
                h = v.call(e, "type") ? e.type : e,
                f = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(h + S.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(), f.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[S.expando] ? e : new S.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), u = S.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !b(n)) {
                    for (o = u.delegateType || h, yt.test(o + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (n.ownerDocument || E) && p.push(s.defaultView || s.parentWindow || C)
                }
                for (r = 0;
                    (a = p[r++]) && !e.isPropagationStopped();) c = a, e.type = 1 < r ? o : u.bindType || h, (d = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && d.apply(a, t), (d = l && a[l]) && d.apply && Y(a) && (e.result = d.apply(a, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), t) || !Y(n) || l && y(n[h]) && !b(n) && ((s = n[l]) && (n[l] = null), S.event.triggered = h, e.isPropagationStopped() && c.addEventListener(h, bt), n[h](), e.isPropagationStopped() && c.removeEventListener(h, bt), S.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(i, null, t)
        }
    }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), g.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
        var r = function(e) { S.event.simulate(i, e.target, S.event.fix(e)) };
        S.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, i);
                t || e.addEventListener(n, r, !0), K.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, i) - 1;
                t ? K.access(e, i, t) : (e.removeEventListener(n, r, !0), K.remove(e, i))
            }
        }
    });
    var wt = C.location,
        xt = Date.now(),
        Tt = /\?/;
    S.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function Mt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) { i || Ct.test(n) ? r(n, t) : Mt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r) });
        else if (i || "object" !== x(e)) r(n, e);
        else
            for (t in e) Mt(n + "[" + t + "]", e[t], i, r)
    }
    S.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) Mt(n, e[n], t, r);
        return i.join("&")
    }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !de.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } });
    var Lt = /%20/g,
        Pt = /#.*$/,
        At = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        It = {},
        Ot = {},
        $t = "*/".concat("*"),
        Ht = E.createElement("a");

    function jt(a) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match($) || [];
            if (y(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
        }
    }

    function Rt(t, r, a, s) {
        var o = {},
            l = t === Ot;

        function d(e) { var i; return o[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(r, a, s); return "string" != typeof n || l || o[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), d(n), !1) }), i }
        return d(r.dataTypes[0]) || !o["*"] && d("*")
    }

    function qt(e, t) { var n, i, r = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && S.extend(!0, e, i), e }
    Ht.href = wt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: wt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? qt(qt(e, S.ajaxSettings), t) : qt(S.ajaxSettings, e) },
        ajaxPrefilter: jt(It),
        ajaxTransport: jt(Ot),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, c, p, n, h, i, f, m, r, a, v = S.ajaxSetup({}, t),
                g = v.context || v,
                y = v.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                b = S.Deferred(),
                w = S.Callbacks("once memory"),
                x = v.statusCode || {},
                s = {},
                o = {},
                l = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (f) {
                            if (!n)
                                for (n = {}; t = Nt.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return f ? p : null },
                    setRequestHeader: function(e, t) { return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e, s[e] = t), this },
                    overrideMimeType: function(e) { return null == f && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (f) T.always(e[T.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || l; return u && u.abort(t), d(0, t), this }
                };
            if (b.promise(T), v.url = ((e || v.url || wt.href) + "").replace(Dt, wt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match($) || [""], null == v.crossDomain) { i = E.createElement("a"); try { i.href = v.url, i.href = i.href, v.crossDomain = Ht.protocol + "//" + Ht.host != i.protocol + "//" + i.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Rt(It, v, t, T), f) return T;
            for (r in (m = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !zt.test(v.type), c = v.url.replace(Pt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (a = v.url.slice(c.length), v.data && (v.processData || "string" == typeof v.data) && (c += (Tt.test(c) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (c = c.replace(At, "$1"), a = (Tt.test(c) ? "&" : "?") + "_=" + xt++ + a), v.url = c + a), v.ifModified && (S.lastModified[c] && T.setRequestHeader("If-Modified-Since", S.lastModified[c]), S.etag[c] && T.setRequestHeader("If-None-Match", S.etag[c])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(r, v.headers[r]);
            if (v.beforeSend && (!1 === v.beforeSend.call(g, T, v) || f)) return T.abort();
            if (l = "abort", w.add(v.complete), T.done(v.success), T.fail(v.error), u = Rt(Ot, v, t, T)) {
                if (T.readyState = 1, m && y.trigger("ajaxSend", [T, v]), f) return T;
                v.async && 0 < v.timeout && (h = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { f = !1, u.send(s, d) } catch (e) {
                    if (f) throw e;
                    d(-1, e)
                }
            } else d(-1, "No Transport");

            function d(e, t, n, i) {
                var r, a, s, o, l, d = t;
                f || (f = !0, h && C.clearTimeout(h), u = void 0, p = i || "", T.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (o = function(e, t, n) {
                    for (var i, r, a, s, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in o)
                            if (o[r] && o[r].test(i)) { l.unshift(r); break }
                    if (l[0] in n) a = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) { a = r; break }
                            s || (s = r)
                        }
                        a = a || s
                    }
                    if (a) return a !== l[0] && l.unshift(a), n[a]
                }(v, T, n)), o = function(e, t, n, i) {
                    var r, a, s, o, l, d = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a;)
                        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(s = d[l + " " + a] || d["* " + a]))
                            for (r in d)
                                if ((o = r.split(" "))[1] === a && (s = d[l + " " + o[0]] || d["* " + o[0]])) {!0 === s ? s = d[r] : !0 !== d[r] && (a = o[0], u.unshift(o[1])); break }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try { t = s(t) } catch (e) { return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + a } }
                    }
                    return { state: "success", data: t }
                }(v, o, T, r), r ? (v.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (S.lastModified[c] = l), (l = T.getResponseHeader("etag")) && (S.etag[c] = l)), 204 === e || "HEAD" === v.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = o.state, a = o.data, r = !(s = o.error))) : (s = d, !e && d || (d = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || d) + "", r ? b.resolveWith(g, [a, d, T]) : b.rejectWith(g, [T, d, s]), T.statusCode(x), x = void 0, m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [T, v, r ? a : s]), w.fireWith(g, [T, d]), m && (y.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return S.get(e, t, n, "json") },
        getScript: function(e, t) { return S.get(e, void 0, t, "script") }
    }), S.each(["get", "post"], function(e, r) { S[r] = function(e, t, n, i) { return y(t) && (i = i || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: r, dataType: i, data: t, success: n }, S.isPlainObject(e) && e)) } }), S._evalUrl = function(e) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, S.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (y(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = y(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this }
    }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var _t = { 0: 200, 1223: 204 },
        Bt = S.ajaxSettings.xhr();
    g.cors = !!Bt && "withCredentials" in Bt, g.ajax = Bt = !!Bt, S.ajaxTransport(function(r) {
        var a, s;
        if (g.cors || Bt && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                a = function(e) { return function() { a && (a = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(_t[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders())) } }, i.onload = a(), s = i.onerror = i.ontimeout = a("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() { 4 === i.readyState && C.setTimeout(function() { a && s() }) }, a = a("abort");
                try { i.send(r.hasContent && r.data || null) } catch (e) { if (a) throw e }
            },
            abort: function() { a && a() }
        }
    }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var i, r; if (n.crossDomain) return { send: function(e, t) { i = S("<script>").prop({ charset: n.scriptCharset, src: n.url }).on("load error", r = function(e) { i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(i[0]) }, abort: function() { r && r() } } });
    var Ft, Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Vt.pop() || S.expando + "_" + xt++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var i, r, a, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() { return a || S.error(i + " was not called"), a[0] }, e.dataTypes[0] = "json", r = C[i], C[i] = function() { a = arguments }, n.always(function() { void 0 === r ? S(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), a && y(r) && r(a[0]), a = r = void 0 }), "script" }), g.createHTMLDocument = ((Ft = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(i)) : t = E), a = !n && [], (r = P.exec(e)) ? [t.createElement(r[1])] : (r = ye([e], t, a), a && a.length && S(a).remove(), S.merge([], r.childNodes))); var i, r, a }, S.fn.load = function(e, t, n) {
        var i, r, a, s = this,
            o = e.indexOf(" ");
        return -1 < o && (i = ft(e.slice(o)), e = e.slice(0, o)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && S.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { a = arguments, s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, a || [e.responseText, t, e]) }) }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, s, o, l, d = S.css(e, "position"),
                u = S(e),
                c = {};
            "static" === d && (e.style.position = "relative"), o = u.offset(), a = S.css(e, "top"), l = S.css(e, "left"), r = ("absolute" === d || "fixed" === d) && -1 < (a + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(a) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, n, S.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + r), "using" in t ? t.using.call(e, c) : u.css(c)
        }
    }, S.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, i = this[0]; return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = { top: 0, left: 0 };
                if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0), r.left += S.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - r.top - S.css(i, "marginTop", !0), left: t.left - r.left - S.css(i, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent; return e || be }) }
    }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, r) {
        var a = "pageYOffset" === r;
        S.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var i;
                if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(a ? i.pageXOffset : n, a ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = _e(g.pixelPosition, function(e, t) { if (t) return t = qe(e, n), He.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(s, o) {
        S.each({ padding: "inner" + s, content: o, "": "outer" + s }, function(i, a) {
            S.fn[a] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) { var i; return b(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r) }, o, n ? e : void 0, n)
            }
        })
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), S.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), S.proxy = function(e, t) { var n, i, r; if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = o.call(arguments, 2), (r = function() { return e.apply(t || this, i.concat(o.call(arguments))) }).guid = e.guid = e.guid || S.guid++, r }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = L, S.isFunction = y, S.isWindow = b, S.camelCase = W, S.type = x, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return S });
    var Xt = C.jQuery,
        Wt = C.$;
    return S.noConflict = function(e) { return C.$ === S && (C.$ = Wt), e && C.jQuery === S && (C.jQuery = Xt), S }, e || (C.jQuery = C.$ = S), S
}),
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(u) {
    u.extend(u.fn, {
        validate: function(e) {
            if (this.length) {
                var i = u.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new u.validator(e, this[0]), u.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) { i.settings.submitHandler && (i.submitButton = e.target), u(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (i.cancelSubmit = !0) }), this.on("submit.validate", function(n) {
                    function e() { var e, t; return !i.settings.submitHandler || (i.submitButton && (e = u("<input type='hidden'/>").attr("name", i.submitButton.name).val(u(i.submitButton).val()).appendTo(i.currentForm)), t = i.settings.submitHandler.call(i, i.currentForm, n), i.submitButton && e.remove(), void 0 !== t && t) }
                    return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, t, n;
            return u(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, t = u(this[0].form).validate(), this.each(function() {
                (e = t.element(this) && e) || (n = n.concat(t.errorList))
            }), t.errorList = n), e
        },
        rules: function(e, t) {
            var n, i, r, a, s, o, l = this[0];
            if (null != l && null != l.form) {
                if (e) switch (i = (n = u.data(l.form, "validator").settings).rules, r = u.validator.staticRules(l), e) {
                    case "add":
                        u.extend(r, u.validator.normalizeRule(t)), delete r.messages, i[l.name] = r, t.messages && (n.messages[l.name] = u.extend(n.messages[l.name], t.messages));
                        break;
                    case "remove":
                        return t ? (o = {}, u.each(t.split(/\s/), function(e, t) { o[t] = r[t], delete r[t], "required" === t && u(l).removeAttr("aria-required") }), o) : (delete i[l.name], r)
                }
                return (a = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (s = a.required, delete a.required, a = u.extend({ required: s }, a), u(l).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = u.extend(a, { remote: s })), a
            }
        }
    }), u.extend(u.expr.pseudos || u.expr[":"], { blank: function(e) { return !u.trim("" + u(e).val()) }, filled: function(e) { var t = u(e).val(); return null !== t && !!u.trim("" + t) }, unchecked: function(e) { return !u(e).prop("checked") } }), u.validator = function(e, t) { this.settings = u.extend(!0, {}, u.validator.defaults, e), this.currentForm = t, this.init() }, u.validator.format = function(n, e) { return 1 === arguments.length ? function() { var e = u.makeArray(arguments); return e.unshift(n), u.validator.format.apply(this, e) } : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = u.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), u.each(e, function(e, t) { n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function() { return t }) })), n) }, u.extend(u.validator, {
        defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: u([]), errorLabelContainer: u([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(e) { this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e))) }, onfocusout: function(e) { this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e) }, onkeyup: function(e, t) { 9 === t.which && "" === this.elementValue(e) || -1 !== u.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e) }, onclick: function(e) { e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode) }, highlight: function(e, t, n) { "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : u(e).addClass(t).removeClass(n) }, unhighlight: function(e, t, n) { "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : u(e).removeClass(t).addClass(n) } },
        setDefaults: function(e) { u.extend(u.validator.defaults, e) },
        messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: u.validator.format("Please enter no more than {0} characters."), minlength: u.validator.format("Please enter at least {0} characters."), rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."), range: u.validator.format("Please enter a value between {0} and {1}."), max: u.validator.format("Please enter a value less than or equal to {0}."), min: u.validator.format("Please enter a value greater than or equal to {0}."), step: u.validator.format("Please enter a multiple of {0}.") },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.groups = {};

                function e(e) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0]);
                    var t = u.data(this.form, "validator"),
                        n = "on" + e.type.replace(/^validate/, ""),
                        i = t.settings;
                    i[n] && !u(this).is(i.ignore) && i[n].call(t, this, e)
                }
                u.each(this.settings.groups, function(n, e) { "string" == typeof e && (e = e.split(/\s/)), u.each(e, function(e, t) { i[t] = n }) }), n = this.settings.rules, u.each(n, function(e, t) { n[e] = u.validator.normalizeRule(t) }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), u(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() { return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
            checkForm: function() { this.prepareForm(); for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]); return this.valid() },
            element: function(e) {
                var t, n, i = this.clean(e),
                    r = this.validationTargetFor(i),
                    a = this,
                    s = !0;
                return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r), this.currentElements = u(r), (n = this.groups[r.name]) && u.each(this.groups, function(e, t) { t === n && e !== r.name && (i = a.validationTargetFor(a.clean(a.findByName(e)))) && i.name in a.invalid && (a.currentElements.push(i), s = a.check(i) && s) }), t = !1 !== this.check(r), s = s && t, this.invalid[r.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(e).attr("aria-invalid", !t)), s
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    u.extend(this.errorMap, t), this.errorList = u.map(this.errorMap, function(e, t) { return { message: e, element: n.findByName(t)[0] } }), this.successList = u.grep(this.successList, function(e) { return !(e.name in t) })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() { return this.objectLength(this.invalid) },
            objectLength: function(e) { var t, n = 0; for (t in e) e[t] && n++; return n },
            hideErrors: function() { this.hideThese(this.toHide) },
            hideThese: function(e) { e.not(this.containers).text(""), this.addWrapper(e).hide() },
            valid: function() { return 0 === this.size() },
            size: function() { return this.errorList.length },
            focusInvalid: function() { if (this.settings.focusInvalid) try { u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (e) {} },
            findLastActive: function() { var t = this.lastActive; return t && 1 === u.grep(this.errorList, function(e) { return e.element.name === t.name }).length && t },
            elements: function() {
                var t = this,
                    n = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { var e = this.name || u(this).attr("name"); return !e && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0]), !(e in n || !t.objectLength(u(this).rules())) && (n[e] = !0) })
            },
            clean: function(e) { return u(e)[0] },
            errors: function() { var e = this.settings.errorClass.split(" ").join("."); return u(this.settings.errorElement + "." + e, this.errorContext) },
            resetInternals: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([]) },
            reset: function() { this.resetInternals(), this.currentElements = u([]) },
            prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) },
            prepareElement: function(e) { this.reset(), this.toHide = this.errorsFor(e) },
            elementValue: function(e) {
                var t, n, i = u(e),
                    r = e.type;
                return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? e.validity.badInput ? "NaN" : i.val() : (t = e.hasAttribute("contenteditable") ? i.text() : i.val(), "file" === r ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (n = t.lastIndexOf("/")) ? t.substr(n + 1) : 0 <= (n = t.lastIndexOf("\\")) ? t.substr(n + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var e, n, i, r = u(t).rules(),
                    a = u.map(r, function(e, t) { return t }).length,
                    s = !1,
                    o = this.elementValue(t);
                if ("function" == typeof r.normalizer) {
                    if ("string" != typeof(o = r.normalizer.call(t, o))) throw new TypeError("The normalizer should return a string value.");
                    delete r.normalizer
                }
                for (n in r) { i = { method: n, parameters: r[n] }; try { if ("dependency-mismatch" === (e = u.validator.methods[n].call(this, o, t, i.parameters)) && 1 === a) { s = !0; continue } if (s = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t))); if (!e) return this.formatAndAdd(t, i), !1 } catch (e) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."), e } }
                if (!s) return this.objectLength(r) && this.successList.push(t), !0
            },
            customDataMessage: function(e, t) { return u(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || u(e).data("msg") },
            customMessage: function(e, t) { var n = this.settings.messages[e]; return n && (n.constructor === String ? n : n[t]) },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(e, t) {
                "string" == typeof t && (t = { method: t });
                var n = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, u.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    i = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), t.parameters)), n
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({ message: n, element: e, method: t.method }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) { return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() { return this.currentElements.not(this.invalidElements()) },
            invalidElements: function() { return u(this.errorList).map(function() { return this.element }) },
            showLabel: function(e, t) {
                var n, i, r, a, s = this.errorsFor(e),
                    o = this.idOrName(e),
                    l = u(e).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(t)) : (n = s = u("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, u(e)) : n.insertAfter(e), s.is("label") ? s.attr("for", o) : 0 === s.parents("label[for='" + this.escapeCssMeta(o) + "']").length && (r = s.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r, u(e).attr("aria-describedby", l), (i = this.groups[e.name]) && (a = this, u.each(a.groups, function(e, t) { t === i && u("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", s.attr("id")) })))), !t && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            },
            errorsFor: function(e) {
                var t = this.escapeCssMeta(this.idOrName(e)),
                    n = u(e).attr("aria-describedby"),
                    i = "label[for='" + t + "'], label[for='" + t + "'] *";
                return n && (i = i + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            escapeCssMeta: function(e) { return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1") },
            idOrName: function(e) { return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name) },
            validationTargetFor: function(e) { return this.checkable(e) && (e = this.findByName(e.name)), u(e).not(this.settings.ignore)[0] },
            checkable: function(e) { return /radio|checkbox/i.test(e.type) },
            findByName: function(e) { return u(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']") },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                    case "select":
                        return u("option:selected", t).length;
                    case "input":
                        if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(e, t) { return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t) },
            dependTypes: { boolean: function(e) { return e }, string: function(e, t) { return !!u(e, t.form).length }, function: function(e, t) { return e(t) } },
            optional: function(e) { var t = this.elementValue(e); return !u.validator.methods.required.call(this, t, e) && "dependency-mismatch" },
            startRequest: function(e) { this.pending[e.name] || (this.pendingRequest++, u(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0) },
            stopRequest: function(e, t) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], u(e).removeClass(this.settings.pendingClass), t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
            previousValue: function(e, t) { return t = "string" == typeof t && t || "remote", u.data(e, "previousValue") || u.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, { method: t }) }) },
            destroy: function() { this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur") }
        },
        classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
        addClassRules: function(e, t) { e.constructor === String ? this.classRuleSettings[e] = t : u.extend(this.classRuleSettings, e) },
        classRules: function(e) {
            var t = {},
                n = u(e).attr("class");
            return n && u.each(n.split(" "), function() { this in u.validator.classRuleSettings && u.extend(t, u.validator.classRuleSettings[this]) }), t
        },
        normalizeAttributeRule: function(e, t, n, i) { /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0) },
        attributeRules: function(e) {
            var t, n, i = {},
                r = u(e),
                a = e.getAttribute("type");
            for (t in u.validator.methods) n = "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0), !!n) : r.attr(t), this.normalizeAttributeRule(i, a, t, n);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(e) {
            var t, n, i = {},
                r = u(e),
                a = e.getAttribute("type");
            for (t in u.validator.methods) n = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()), this.normalizeAttributeRule(i, a, t, n);
            return i
        },
        staticRules: function(e) {
            var t = {},
                n = u.data(e.form, "validator");
            return n.settings.rules && (t = u.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
        },
        normalizeRules: function(i, r) {
            return u.each(i, function(e, t) {
                if (!1 !== t) {
                    if (t.param || t.depends) {
                        var n = !0;
                        switch (typeof t.depends) {
                            case "string":
                                n = !!u(t.depends, r.form).length;
                                break;
                            case "function":
                                n = t.depends.call(r, r)
                        }
                        n ? i[e] = void 0 === t.param || t.param : (u.data(r.form, "validator").resetElements(u(r)), delete i[e])
                    }
                } else delete i[e]
            }), u.each(i, function(e, t) { i[e] = u.isFunction(t) && "normalizer" !== e ? t(r) : t }), u.each(["minlength", "maxlength"], function() { i[this] && (i[this] = Number(i[this])) }), u.each(["rangelength", "range"], function() {
                var e;
                i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
            }), u.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var t = {};
                u.each(e.split(/\s/), function() { t[this] = !0 }), e = t
            }
            return e
        },
        addMethod: function(e, t, n) { u.validator.methods[e] = t, u.validator.messages[e] = void 0 !== n ? n : u.validator.messages[e], t.length < 3 && u.validator.addClassRules(e, u.validator.normalizeRule(e)) },
        methods: {
            required: function(e, t, n) { if (!this.depend(n, t)) return "dependency-mismatch"; if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < e.length; var i = u(t).val(); return i && 0 < i.length },
            email: function(e, t) { return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) },
            url: function(e, t) { return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e) },
            date: function(e, t) { return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString()) },
            dateISO: function(e, t) { return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e) },
            number: function(e, t) { return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e) },
            digits: function(e, t) { return this.optional(t) || /^\d+$/.test(e) },
            minlength: function(e, t, n) { var i = u.isArray(e) ? e.length : this.getLength(e, t); return this.optional(t) || n <= i },
            maxlength: function(e, t, n) { var i = u.isArray(e) ? e.length : this.getLength(e, t); return this.optional(t) || i <= n },
            rangelength: function(e, t, n) { var i = u.isArray(e) ? e.length : this.getLength(e, t); return this.optional(t) || i >= n[0] && i <= n[1] },
            min: function(e, t, n) { return this.optional(t) || n <= e },
            max: function(e, t, n) { return this.optional(t) || e <= n },
            range: function(e, t, n) { return this.optional(t) || e >= n[0] && e <= n[1] },
            step: function(e, t, n) {
                var i, r = u(t).attr("type"),
                    a = "Step attribute on input type " + r + " is not supported.",
                    s = new RegExp("\\b" + r + "\\b"),
                    o = function(e) { var t = ("" + e).match(/(?:\.(\d+))?$/); return t && t[1] ? t[1].length : 0 },
                    l = function(e) { return Math.round(e * Math.pow(10, i)) },
                    d = !0;
                if (r && !s.test(["text", "number", "range"].join())) throw new Error(a);
                return i = o(n), (o(e) > i || l(e) % l(n) != 0) && (d = !1), this.optional(t) || d
            },
            equalTo: function(e, t, n) { var i = u(n); return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() { u(t).valid() }), e === i.val() },
            remote: function(a, s, e, o) {
                if (this.optional(s)) return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var l, t, n, d = this.previousValue(s, o);
                return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), d.originalMessage = d.originalMessage || this.settings.messages[s.name][o], this.settings.messages[s.name][o] = d.message, e = "string" == typeof e && { url: e } || e, n = u.param(u.extend({ data: a }, e.data)), d.old === n ? d.valid : (d.old = n, (l = this).startRequest(s), (t = {})[s.name] = a, u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + s.name,
                    dataType: "json",
                    data: t,
                    context: l.currentForm,
                    success: function(e) {
                        var t, n, i, r = !0 === e || "true" === e;
                        l.settings.messages[s.name][o] = d.originalMessage, r ? (i = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(s), l.formSubmitted = i, l.successList.push(s), l.invalid[s.name] = !1, l.showErrors()) : (t = {}, n = e || l.defaultMessage(s, { method: o, parameters: a }), t[s.name] = d.message = n, l.invalid[s.name] = !0, l.showErrors(t)), d.valid = r, l.stopRequest(s, r)
                    }
                }, e)), "pending")
            }
        }
    });
    var i, r = {};
    return u.ajaxPrefilter ? u.ajaxPrefilter(function(e, t, n) { var i = e.port; "abort" === e.mode && (r[i] && r[i].abort(), r[i] = n) }) : (i = u.ajax, u.ajax = function(e) {
        var t = ("mode" in e ? e : u.ajaxSettings).mode,
            n = ("port" in e ? e : u.ajaxSettings).port;
        return "abort" === t ? (r[n] && r[n].abort(), r[n] = i.apply(this, arguments), r[n]) : i.apply(this, arguments)
    }), u
}), $.validator.addMethod("pattern", function(e, t, n) { return !!this.optional(t) || ("string" == typeof n && (n = new RegExp("^(?:" + n + ")$")), n.test(e)) }, "Invalid format."),
    function(e) {
        var t = !1;
        if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
            var n = window.Cookies,
                i = window.Cookies = e();
            i.noConflict = function() { return window.Cookies = n, i }
        }
    }(function() {
        function m() { for (var e = 0, t = {}; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) t[i] = n[i] } return t }
        return function e(h) {
            function f(e, t, n) {
                var i;
                if ("undefined" != typeof document) {
                    if (1 < arguments.length) {
                        if ("number" == typeof(n = m({ path: "/" }, f.defaults, n)).expires) {
                            var r = new Date;
                            r.setMilliseconds(r.getMilliseconds() + 864e5 * n.expires), n.expires = r
                        }
                        n.expires = n.expires ? n.expires.toUTCString() : "";
                        try { i = JSON.stringify(t), /^[\{\[]/.test(i) && (t = i) } catch (e) {}
                        t = h.write ? h.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var a = "";
                        for (var s in n) n[s] && (a += "; " + s, !0 !== n[s] && (a += "=" + n[s]));
                        return document.cookie = e + "=" + t + a
                    }
                    e || (i = {});
                    for (var o = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, d = 0; d < o.length; d++) {
                        var u = o[d].split("="),
                            c = u.slice(1).join("=");
                        this.json || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                        try {
                            var p = u[0].replace(l, decodeURIComponent);
                            if (c = h.read ? h.read(c, p) : h(c, p) || c.replace(l, decodeURIComponent), this.json) try { c = JSON.parse(c) } catch (e) {}
                            if (e === p) { i = c; break }
                            e || (i[p] = c)
                        } catch (e) {}
                    }
                    return i
                }
            }
            return (f.set = f).get = function(e) { return f.call(f, e) }, f.getJSON = function() { return f.apply({ json: !0 }, [].slice.call(arguments)) }, f.defaults = {}, f.remove = function(e, t) { f(e, "", m(t, { expires: -1 })) }, f.withConverter = e, f
        }(function() {})
    }),
    function(m, v, g, e) {
        "use strict";
        if (!v.history.pushState) return m.fn.smoothState = function() { return this }, m.fn.smoothState.options = {};
        if (!m.fn.smoothState) {
            var y = m("html, body"),
                b = v.console,
                w = {
                    isExternal: function(e) { var t = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/); return "string" == typeof t[1] && 0 < t[1].length && t[1].toLowerCase() !== v.location.protocol || "string" == typeof t[2] && 0 < t[2].length && t[2].replace(new RegExp(":(" + { "http:": 80, "https:": 443 }[v.location.protocol] + ")?$"), "") !== v.location.host },
                    stripHash: function(e) { return e.replace(/#.*/, "") },
                    isHash: function(e, t) {
                        t = t || v.location.href;
                        var n = -1 < e.indexOf("#"),
                            i = w.stripHash(e) === w.stripHash(t);
                        return n && i
                    },
                    translate: function(e) { var t = { dataType: "html", type: "GET" }; return e = "string" == typeof e ? m.extend({}, t, { url: e }) : m.extend({}, t, e) },
                    shouldLoadAnchor: function(e, t) { var n = e.prop("href"); return !(w.isExternal(n) || w.isHash(n) || e.is(t) || e.prop("target")) },
                    clearIfOverCapacity: function(e, t) { return Object.keys || (Object.keys = function(e) { var t, n = []; for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t); return n }), Object.keys(e).length > t && (e = {}), e },
                    storePageIn: function(e, t, n, i) { var r = m(n); return e[t] = { status: "loaded", title: r.filter("title").first().text(), html: r.filter("#" + i) }, e },
                    triggerAllAnimationEndEvent: function(t, e) {
                        e = " " + e || "";
                        var n = 0;
                        t.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", function(e) { m(e.delegateTarget).is(t) && (e.stopPropagation(), n++) }), t.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function(e) { m(e.delegateTarget).is(t) && (e.stopPropagation(), 0 == --n && t.trigger("allanimationend")) }), t.on("allanimationend" + e, function() { n = 0, w.redraw(t) })
                    },
                    redraw: function(e) { e.height() }
                },
                n = function(e, s) {
                    var t, o = m(e),
                        l = o.prop("id"),
                        i = null,
                        r = !1,
                        d = {},
                        n = v.location.href,
                        u = function(e, t) {
                            t = t || m.noop;
                            var n = w.translate(e);
                            if (!d.hasOwnProperty(n.url) || void 0 !== n.data) {
                                (d = w.clearIfOverCapacity(d, s.cacheLength))[n.url] = { status: "fetching" };
                                var i = m.ajax(n);
                                i.done(function(e) { w.storePageIn(d, n.url, e, l), o.data("smoothState").cache = d }), i.fail(function() { d[n.url].status = "error" }), t && i.always(t)
                            }
                        },
                        c = function(e) {
                            var t = "#" + l,
                                n = d[e] ? m(d[e].html.html()) : null;
                            n.length ? (g.title = d[e].title, o.data("smoothState").href = e, s.loadingClass && y.removeClass(s.loadingClass), s.onReady.render(o, n), o.one("ss.onReadyEnd", function() {
                                r = !1, s.onAfter(o, n),
                                    function() {
                                        if (i) {
                                            var e = m(i, o);
                                            if (e.length) {
                                                var t = e.offset().top;
                                                g.body.scrollTop = t
                                            }
                                            i = null
                                        }
                                    }()
                            }), v.setTimeout(function() { o.trigger("ss.onReadyEnd") }, s.onReady.duration)) : !n && s.debug && b ? b.warn("No element with an id of " + t + " in response from " + e + " in " + d) : v.location = e
                        },
                        a = function(e, t) {
                            var n = w.translate(e);
                            void 0 === t && (t = !0);
                            var i = !1,
                                r = !1,
                                a = {
                                    loaded: function() {
                                        var e = i ? "ss.onProgressEnd" : "ss.onStartEnd";
                                        r && i ? r && c(n.url) : o.one(e, function() { c(n.url) }), t && v.history.pushState({ id: l }, d[n.url].title, n.url)
                                    },
                                    fetching: function() { i || (i = !0, o.one("ss.onStartEnd", function() { s.loadingClass && y.addClass(s.loadingClass), s.onProgress.render(o), v.setTimeout(function() { o.trigger("ss.onProgressEnd"), r = !0 }, s.onProgress.duration) })), v.setTimeout(function() { d.hasOwnProperty(n.url) && a[d[n.url].status]() }, 10) },
                                    error: function() { s.debug && b ? b.log("There was an error loading: " + n.url) : v.location = n.url }
                                };
                            d.hasOwnProperty(n.url) || u(n), s.onStart.render(o), v.setTimeout(function() { y.scrollTop(0), o.trigger("ss.onStartEnd") }, s.onStart.duration), a[d[n.url].status]()
                        },
                        p = function(e) {
                            var t, n = m(e.currentTarget);
                            w.shouldLoadAnchor(n, s.blacklist) && !r && (e.stopPropagation(), t = w.translate(n.prop("href")), t = s.alterRequest(t), u(t))
                        },
                        h = function(e) {
                            var t = m(e.currentTarget);
                            if (!e.metaKey && !e.ctrlKey && w.shouldLoadAnchor(t, s.blacklist)) {
                                var n = w.translate(t.prop("href"));
                                r = !0, e.stopPropagation(), e.preventDefault(), i = t.prop("hash"), n = s.alterRequest(n), s.onBefore(t, o), a(n)
                            }
                        },
                        f = function(e) {
                            var t = m(e.currentTarget);
                            if (!t.is(s.blacklist)) {
                                e.preventDefault(), e.stopPropagation();
                                var n = { url: t.prop("action"), data: t.serialize(), type: t.prop("method") };
                                r = !0, "get" === (n = s.alterRequest(n)).type.toLowerCase() && (n.url = n.url + "?" + n.data), s.onBefore(t, o), a(n)
                            }
                        };
                    return s = m.extend({}, m.fn.smoothState.options, s), null === v.history.state && v.history.replaceState({ id: l }, g.title, n), w.storePageIn(d, n, g.documentElement.outerHTML, l), w.triggerAllAnimationEndEvent(o, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), (t = o).on("click", s.anchors, h), t.on("submit", s.forms, f), s.prefetch && t.on("mouseover touchstart", s.anchors, p), {
                        href: n,
                        cache: d,
                        clear: function(e) {
                            (e = e || !1) && d.hasOwnProperty(e) ? delete d[e] : d = {}, o.data("smoothState").cache = d
                        },
                        load: a,
                        fetch: u,
                        restartCSSAnimations: function() {
                            var e = o.prop("class");
                            o.removeClass(e), w.redraw(o), o.addClass(e)
                        }
                    }
                };
            v.onpopstate = function(e) {
                if (null !== e.state) {
                    var t = v.location.href,
                        n = m("#" + e.state.id).data("smoothState");
                    n.href === t || w.isHash(t, n.href) || n.load(t, !1)
                }
            }, m.smoothStateUtility = w, m.fn.smoothState = function(t) {
                return this.each(function() {
                    var e = this.tagName.toLowerCase();
                    this.id && "body" !== e && "html" !== e && !m.data(this, "smoothState") ? m.data(this, "smoothState", new n(this, t)) : !this.id && b ? b.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== e && "html" !== e || !b || b.warn("The smoothstate container cannot be the " + this.tagName + " tag")
                })
            }, m.fn.smoothState.options = { debug: !1, anchors: "a", forms: "form", blacklist: ".no-smoothState", prefetch: !1, cacheLength: 0, loadingClass: "is-loading", alterRequest: function(e) { return e }, onBefore: function(e, t) {}, onStart: { duration: 0, render: function(e) {} }, onProgress: { duration: 0, render: function(e) {} }, onReady: { duration: 0, render: function(e, t) { e.html(t) } }, onAfter: function(e, t) {} }
        }
    }(jQuery, window, document),
    function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t() }(this, function() {
        "use strict";
        var m = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document,
            _ = "undefined" == typeof window ? { document: m, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window,
            l = function(e) { for (var t = 0; t < e.length; t += 1) this[t] = e[t]; return this.length = e.length, this };

        function N(e, t) {
            var n = [],
                i = 0;
            if (e && !t && e instanceof l) return e;
            if (e)
                if ("string" == typeof e) {
                    var r, a, s = e.trim();
                    if (0 <= s.indexOf("<") && 0 <= s.indexOf(">")) { var o = "div"; for (0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select"), (a = m.createElement(o)).innerHTML = s, i = 0; i < a.childNodes.length; i += 1) n.push(a.childNodes[i]) } else
                        for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || m).querySelectorAll(e.trim()) : [m.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
                } else if (e.nodeType || e === _ || e === m) n.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i += 1) n.push(e[i]);
            return new l(n)
        }

        function a(e) { for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }
        N.fn = l.prototype, N.Class = l, N.Dom7 = l;
        var t = {
            addClass: function(e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
                return this
            },
            hasClass: function(e) { return !!this[0] && this[0].classList.contains(e) },
            toggleClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                    for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
                return this
            },
            attr: function(e, t) {
                var n = arguments;
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === n.length) this[i].setAttribute(e, t);
                    else
                        for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
                return this
            },
            removeAttr: function(e) { for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e); return this },
            data: function(e, t) { var n; if (void 0 !== t) { for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t; return this } if (n = this[0]) return n.dom7ElementDataStorage && e in n.dom7ElementDataStorage ? n.dom7ElementDataStorage[e] : n.getAttribute("data-" + e) || void 0 },
            transform: function(e) {
                for (var t = 0; t < this.length; t += 1) {
                    var n = this[t].style;
                    n.webkitTransform = e, n.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var n = this[t].style;
                    n.webkitTransitionDuration = e, n.transitionDuration = e
                }
                return this
            },
            on: function() {
                for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                var i = t[0],
                    a = t[1],
                    s = t[2],
                    r = t[3];

                function o(e) {
                    var t = e.target;
                    if (t) {
                        var n = e.target.dom7EventData || [];
                        if (n.indexOf(e) < 0 && n.unshift(e), N(t).is(a)) s.apply(t, n);
                        else
                            for (var i = N(t).parents(), r = 0; r < i.length; r += 1) N(i[r]).is(a) && s.apply(i[r], n)
                    }
                }

                function l(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
                }
                "function" == typeof t[1] && (i = (e = t)[0], s = e[1], r = e[2], a = void 0), r || (r = !1);
                for (var d, u = i.split(" "), c = 0; c < this.length; c += 1) {
                    var p = this[c];
                    if (a)
                        for (d = 0; d < u.length; d += 1) {
                            var h = u[d];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({ listener: s, proxyListener: o }), p.addEventListener(h, o, r)
                        } else
                            for (d = 0; d < u.length; d += 1) {
                                var f = u[d];
                                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({ listener: s, proxyListener: l }), p.addEventListener(f, l, r)
                            }
                }
                return this
            },
            off: function() {
                for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                var i = t[0],
                    r = t[1],
                    a = t[2],
                    s = t[3];
                "function" == typeof t[1] && (i = (e = t)[0], a = e[1], s = e[2], r = void 0), s || (s = !1);
                for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                    for (var d = o[l], u = 0; u < this.length; u += 1) {
                        var c = this[u],
                            p = void 0;
                        if (!r && c.dom7Listeners ? p = c.dom7Listeners[d] : r && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]), p && p.length)
                            for (var h = p.length - 1; 0 <= h; h -= 1) {
                                var f = p[h];
                                a && f.listener === a ? (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1)) : a || (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var n = e[0].split(" "), i = e[1], r = 0; r < n.length; r += 1)
                    for (var a = n[r], s = 0; s < this.length; s += 1) {
                        var o = this[s],
                            l = void 0;
                        try { l = new _.CustomEvent(a, { detail: i, bubbles: !0, cancelable: !0 }) } catch (e) {
                            (l = m.createEvent("Event")).initEvent(a, !0, !0), l.detail = i
                        }
                        o.dom7EventData = e.filter(function(e, t) { return 0 < t }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                    }
                return this
            },
            transitionEnd: function(t) {
                var n, i = ["webkitTransitionEnd", "transitionend"],
                    r = this;

                function a(e) {
                    if (e.target === this)
                        for (t.call(this, e), n = 0; n < i.length; n += 1) r.off(i[n], a)
                }
                if (t)
                    for (n = 0; n < i.length; n += 1) r.on(i[n], a);
                return this
            },
            outerWidth: function(e) { if (0 < this.length) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null },
            outerHeight: function(e) { if (0 < this.length) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null },
            offset: function() {
                if (0 < this.length) {
                    var e = this[0],
                        t = e.getBoundingClientRect(),
                        n = m.body,
                        i = e.clientTop || n.clientTop || 0,
                        r = e.clientLeft || n.clientLeft || 0,
                        a = e === _ ? _.scrollY : e.scrollTop,
                        s = e === _ ? _.scrollX : e.scrollLeft;
                    return { top: t.top + a - i, left: t.left + s - r }
                }
                return null
            },
            css: function(e, t) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            for (var i in e) this[n].style[i] = e[i];
                        return this
                    }
                    if (this[0]) return _.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 !== arguments.length || "string" != typeof e) return this;
                for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this
            },
            each: function(e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this;
                return this
            },
            html: function(e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e; return this },
            text: function(e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1) this[t].textContent = e; return this },
            is: function(e) {
                var t, n, i = this[0];
                if (!i || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (i.matches) return i.matches(e);
                    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                    if (i.msMatchesSelector) return i.msMatchesSelector(e);
                    for (t = N(e), n = 0; n < t.length; n += 1)
                        if (t[n] === i) return !0;
                    return !1
                }
                if (e === m) return i === m;
                if (e === _) return i === _;
                if (e.nodeType || e instanceof l) {
                    for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                        if (t[n] === i) return !0;
                    return !1
                }
                return !1
            },
            index: function() { var e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1); return e } },
            eq: function(e) { if (void 0 === e) return this; var t, n = this.length; return new l(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]]) },
            append: function() {
                for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
                for (var i = 0; i < t.length; i += 1) {
                    e = t[i];
                    for (var r = 0; r < this.length; r += 1)
                        if ("string" == typeof e) { var a = m.createElement("div"); for (a.innerHTML = e; a.firstChild;) this[r].appendChild(a.firstChild) } else if (e instanceof l)
                        for (var s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
                    else this[r].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var t, n;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) { var i = m.createElement("div"); for (i.innerHTML = e, n = i.childNodes.length - 1; 0 <= n; n -= 1) this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]) } else if (e instanceof l)
                    for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) { return 0 < this.length ? e ? this[0].nextElementSibling && N(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]) },
            nextAll: function(e) {
                var t = [],
                    n = this[0];
                if (!n) return new l([]);
                for (; n.nextElementSibling;) {
                    var i = n.nextElementSibling;
                    e ? N(i).is(e) && t.push(i) : t.push(i), n = i
                }
                return new l(t)
            },
            prev: function(e) { if (0 < this.length) { var t = this[0]; return e ? t.previousElementSibling && N(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]) } return new l([]) },
            prevAll: function(e) {
                var t = [],
                    n = this[0];
                if (!n) return new l([]);
                for (; n.previousElementSibling;) {
                    var i = n.previousElementSibling;
                    e ? N(i).is(e) && t.push(i) : t.push(i), n = i
                }
                return new l(t)
            },
            parent: function(e) { for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? N(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode)); return N(a(t)) },
            parents: function(e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var i = this[n].parentNode; i;) e ? N(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
                return N(a(t))
            },
            closest: function(e) { var t = this; return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) },
            find: function(e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
                return new l(t)
            },
            children: function(e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var i = this[n].childNodes, r = 0; r < i.length; r += 1) e ? 1 === i[r].nodeType && N(i[r]).is(e) && t.push(i[r]) : 1 === i[r].nodeType && t.push(i[r]);
                return new l(a(t))
            },
            remove: function() { for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this },
            add: function() { for (var e = [], t = arguments.length; t--;) e[t] = arguments[t]; var n, i; for (n = 0; n < e.length; n += 1) { var r = N(e[n]); for (i = 0; i < r.length; i += 1) this[this.length] = r[i], this.length += 1 } return this },
            styles: function() { return this[0] ? _.getComputedStyle(this[0], null) : {} }
        };
        Object.keys(t).forEach(function(e) { N.fn[e] = t[e] });
        var e, n, i, B = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach(function(e) { try { t[e] = null } catch (e) {} try { delete t[e] } catch (e) {} })
                },
                nextTick: function(e, t) { return void 0 === t && (t = 0), setTimeout(e, t) },
                now: function() { return Date.now() },
                getTranslate: function(e, t) {
                    var n, i, r;
                    void 0 === t && (t = "x");
                    var a = _.getComputedStyle(e, null);
                    return _.WebKitCSSMatrix ? (6 < (i = a.transform || a.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), r = new _.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = _.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = _.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
                },
                parseUrlQuery: function(e) {
                    var t, n, i, r, a = {},
                        s = e || _.location.href;
                    if ("string" == typeof s && s.length)
                        for (r = (n = (s = -1 < s.indexOf("?") ? s.replace(/\S*\?/, "") : "").split("&").filter(function(e) { return "" !== e })).length, t = 0; t < r; t += 1) i = n[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                    return a
                },
                isObject: function(e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object },
                extend: function() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                        var r = e[i];
                        if (null != r)
                            for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                                var l = a[s],
                                    d = Object.getOwnPropertyDescriptor(r, l);
                                void 0 !== d && d.enumerable && (B.isObject(n[l]) && B.isObject(r[l]) ? B.extend(n[l], r[l]) : !B.isObject(n[l]) && B.isObject(r[l]) ? (n[l] = {}, B.extend(n[l], r[l])) : n[l] = r[l])
                            }
                    }
                    return n
                }
            },
            F = (i = m.createElement("div"), {
                touch: _.Modernizr && !0 === _.Modernizr.touch || !!("ontouchstart" in _ || _.DocumentTouch && m instanceof _.DocumentTouch),
                pointerEvents: !!(_.navigator.pointerEnabled || _.PointerEvent || "maxTouchPoints" in _.navigator),
                prefixedPointerEvents: !!_.navigator.msPointerEnabled,
                transition: (n = i.style, "transition" in n || "webkitTransition" in n || "MozTransition" in n),
                transforms3d: _.Modernizr && !0 === _.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
                flexbox: function() {
                    for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                        if (t[n] in e) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in _ || "WebkitMutationObserver" in _,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                        _.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in _
            }),
            r = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) { t.on(e, t.params.on[e]) })
            },
            s = { components: { configurable: !0 } };
        r.prototype.on = function(e, t, n) { var i = this; if ("function" != typeof t) return i; var r = n ? "unshift" : "push"; return e.split(" ").forEach(function(e) { i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t) }), i }, r.prototype.once = function(i, r, e) {
            var a = this;
            return "function" != typeof r ? a : a.on(i, function e() {
                for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                r.apply(a, t), a.off(i, e)
            }, e)
        }, r.prototype.off = function(e, i) { var r = this; return r.eventsListeners && e.split(" ").forEach(function(n) { void 0 === i ? r.eventsListeners[n] = [] : r.eventsListeners[n] && r.eventsListeners[n].length && r.eventsListeners[n].forEach(function(e, t) { e === i && r.eventsListeners[n].splice(t, 1) }) }), r }, r.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n, i, r, a = this;
            return a.eventsListeners && (r = "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), a) : (n = e[0].events, i = e[0].data, e[0].context || a), (Array.isArray(n) ? n : n.split(" ")).forEach(function(e) {
                if (a.eventsListeners && a.eventsListeners[e]) {
                    var t = [];
                    a.eventsListeners[e].forEach(function(e) { t.push(e) }), t.forEach(function(e) { e.apply(r, i) })
                }
            })), a
        }, r.prototype.useModulesParams = function(n) {
            var i = this;
            i.modules && Object.keys(i.modules).forEach(function(e) {
                var t = i.modules[e];
                t.params && B.extend(n, t.params)
            })
        }, r.prototype.useModules = function(i) {
            void 0 === i && (i = {});
            var r = this;
            r.modules && Object.keys(r.modules).forEach(function(e) {
                var n = r.modules[e],
                    t = i[e] || {};
                n.instance && Object.keys(n.instance).forEach(function(e) {
                    var t = n.instance[e];
                    r[e] = "function" == typeof t ? t.bind(r) : t
                }), n.on && r.on && Object.keys(n.on).forEach(function(e) { r.on(e, n.on[e]) }), n.create && n.create.bind(r)(t)
            })
        }, s.components.set = function(e) { this.use && this.use(e) }, r.installModule = function(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var r = t.name || Object.keys(i.prototype.modules).length + "_" + B.now();
            return (i.prototype.modules[r] = t).proto && Object.keys(t.proto).forEach(function(e) { i.prototype[e] = t.proto[e] }), t.static && Object.keys(t.static).forEach(function(e) { i[e] = t.static[e] }), t.install && t.install.apply(i, e), i
        }, r.use = function(e) { for (var t = [], n = arguments.length - 1; 0 < n--;) t[n] = arguments[n + 1]; var i = this; return Array.isArray(e) ? (e.forEach(function(e) { return i.installModule(e) }), i) : i.installModule.apply(i, [e].concat(t)) }, Object.defineProperties(r, s);
        var o = {
                updateSize: function() {
                    var e, t, n = this,
                        i = n.$el;
                    e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), B.extend(n, { width: e, height: t, size: n.isHorizontal() ? e : t }))
                },
                updateSlides: function() {
                    var e = this,
                        t = e.params,
                        n = e.$wrapperEl,
                        i = e.size,
                        r = e.rtlTranslate,
                        a = e.wrongRTL,
                        s = e.virtual && t.virtual.enabled,
                        o = s ? e.virtual.slides.length : e.slides.length,
                        l = n.children("." + e.params.slideClass),
                        d = s ? e.virtual.slides.length : l.length,
                        u = [],
                        c = [],
                        p = [],
                        h = t.slidesOffsetBefore;
                    "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
                    var f = t.slidesOffsetAfter;
                    "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
                    var m = e.snapGrid.length,
                        v = e.snapGrid.length,
                        g = t.spaceBetween,
                        y = -h,
                        b = 0,
                        w = 0;
                    if (void 0 !== i) {
                        var x, T;
                        "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, r ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                        for (var C, E = t.slidesPerColumn, S = x / E, k = S - (t.slidesPerColumn * S - d), M = 0; M < d; M += 1) {
                            T = 0;
                            var L = l.eq(M);
                            if (1 < t.slidesPerColumn) {
                                var P = void 0,
                                    A = void 0,
                                    N = void 0;
                                "column" === t.slidesPerColumnFill ? (N = M - (A = Math.floor(M / E)) * E, (k < A || A === k && N === E - 1) && E <= (N += 1) && (N = 0, A += 1), P = A + N * x / E, L.css({ "-webkit-box-ordinal-group": P, "-moz-box-ordinal-group": P, "-ms-flex-order": P, "-webkit-order": P, order: P })) : A = M - (N = Math.floor(M / S)) * S, L.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== N && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", N)
                            }
                            if ("none" !== L.css("display")) {
                                if ("auto" === t.slidesPerView) {
                                    var z = _.getComputedStyle(L[0], null),
                                        D = L[0].style.transform,
                                        I = L[0].style.webkitTransform;
                                    D && (L[0].style.transform = "none"), I && (L[0].style.webkitTransform = "none"), T = t.roundLengths ? e.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0) : e.isHorizontal() ? parseFloat(z.getPropertyValue("width")) + parseFloat(z.getPropertyValue("margin-left")) + parseFloat(z.getPropertyValue("margin-right")) : parseFloat(z.getPropertyValue("height")) + parseFloat(z.getPropertyValue("margin-top")) + parseFloat(z.getPropertyValue("margin-bottom")), D && (L[0].style.transform = D), I && (L[0].style.webkitTransform = I), t.roundLengths && (T = Math.floor(T))
                                } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[M] && (e.isHorizontal() ? l[M].style.width = T + "px" : l[M].style.height = T + "px");
                                l[M] && (l[M].swiperSlideSize = T), p.push(T), t.centeredSlides ? (y = y + T / 2 + b / 2 + g, 0 === b && 0 !== M && (y = y - i / 2 - g), 0 === M && (y = y - i / 2 - g), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), w % t.slidesPerGroup == 0 && u.push(y), c.push(y)) : (t.roundLengths && (y = Math.floor(y)), w % t.slidesPerGroup == 0 && u.push(y), c.push(y), y = y + T + g), e.virtualSize += T + g, b = T, w += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, i) + f, r && a && ("slide" === t.effect || "coverflow" === t.effect) && n.css({ width: e.virtualSize + t.spaceBetween + "px" }), F.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({ width: e.virtualSize + t.spaceBetween + "px" }) : n.css({ height: e.virtualSize + t.spaceBetween + "px" })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({ width: e.virtualSize + t.spaceBetween + "px" }) : n.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) {
                            C = [];
                            for (var O = 0; O < u.length; O += 1) {
                                var $ = u[O];
                                t.roundLengths && ($ = Math.floor($)), u[O] < e.virtualSize + u[0] && C.push($)
                            }
                            u = C
                        }
                        if (!t.centeredSlides) {
                            C = [];
                            for (var H = 0; H < u.length; H += 1) {
                                var j = u[H];
                                t.roundLengths && (j = Math.floor(j)), u[H] <= e.virtualSize - i && C.push(j)
                            }
                            u = C, 1 < Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) && u.push(e.virtualSize - i)
                        }
                        if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" }) : l.css({ marginBottom: g + "px" })), t.centerInsufficientSlides) {
                            var R = 0;
                            if (p.forEach(function(e) { R += e + (t.spaceBetween ? t.spaceBetween : 0) }), (R -= t.spaceBetween) < i) {
                                var q = (i - R) / 2;
                                u.forEach(function(e, t) { u[t] = e - q }), c.forEach(function(e, t) { c[t] = e + q })
                            }
                        }
                        B.extend(e, { slides: l, snapGrid: u, slidesGrid: c, slidesSizesGrid: p }), d !== o && e.emit("slidesLengthChange"), u.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== v && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var t, n = this,
                        i = [],
                        r = 0;
                    if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
                        for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                            var a = n.activeIndex + t;
                            if (a > n.slides.length) break;
                            i.push(n.slides.eq(a)[0])
                        } else i.push(n.slides.eq(n.activeIndex)[0]);
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var s = i[t].offsetHeight;
                            r = r < s ? s : r
                        }
                    r && n.$wrapperEl.css("height", r + "px")
                },
                updateSlidesOffset: function() { for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        n = t.params,
                        i = t.slides,
                        r = t.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var a = -e;
                        r && (a = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var s = 0; s < i.length; s += 1) {
                            var o = i[s],
                                l = (a + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);
                            if (n.watchSlidesVisibility) {
                                var d = -(a - o.swiperSlideOffset),
                                    u = d + t.slidesSizesGrid[s];
                                (0 <= d && d < t.size || 0 < u && u <= t.size || d <= 0 && u >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(s), i.eq(s).addClass(n.slideVisibleClass))
                            }
                            o.progress = r ? -l : l
                        }
                        t.visibleSlides = N(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        n = t.params,
                        i = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        a = t.isBeginning,
                        s = t.isEnd,
                        o = a,
                        l = s;
                    s = 0 === i ? a = !(r = 0) : (a = (r = (e - t.minTranslate()) / i) <= 0, 1 <= r), B.extend(t, { progress: r, isBeginning: a, isEnd: s }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (o && !a || l && !s) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        n = t.slides,
                        i = t.params,
                        r = t.$wrapperEl,
                        a = t.activeIndex,
                        s = t.realIndex,
                        o = t.virtual && i.virtual.enabled;
                    n.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : n.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
                    var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass);
                    var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === d.length && (d = n.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, n = this,
                        i = n.rtlTranslate ? n.translate : -n.translate,
                        r = n.slidesGrid,
                        a = n.snapGrid,
                        s = n.params,
                        o = n.activeIndex,
                        l = n.realIndex,
                        d = n.snapIndex,
                        u = e;
                    if (void 0 === u) {
                        for (var c = 0; c < r.length; c += 1) void 0 !== r[c + 1] ? i >= r[c] && i < r[c + 1] - (r[c + 1] - r[c]) / 2 ? u = c : i >= r[c] && i < r[c + 1] && (u = c + 1) : i >= r[c] && (u = c);
                        s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                    }
                    if ((t = 0 <= a.indexOf(i) ? a.indexOf(i) : Math.floor(u / s.slidesPerGroup)) >= a.length && (t = a.length - 1), u !== o) {
                        var p = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                        B.extend(n, { snapIndex: t, realIndex: p, previousIndex: o, activeIndex: u }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== p && n.emit("realIndexChange"), n.emit("slideChange")
                    } else t !== d && (n.snapIndex = t, n.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t = this,
                        n = t.params,
                        i = N(e.target).closest("." + n.slideClass)[0],
                        r = !1;
                    if (i)
                        for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === i && (r = !0);
                    if (!i || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(N(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = N(i).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            d = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        n = this.rtlTranslate,
                        i = this.translate,
                        r = this.$wrapperEl;
                    if (t.virtualTranslate) return n ? -i : i;
                    var a = B.getTranslate(r[0], e);
                    return n && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    var n = this,
                        i = n.rtlTranslate,
                        r = n.params,
                        a = n.$wrapperEl,
                        s = n.progress,
                        o = 0,
                        l = 0;
                    n.isHorizontal() ? o = i ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (F.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? o : l;
                    var d = n.maxTranslate() - n.minTranslate();
                    (0 === d ? 0 : (e - n.minTranslate()) / d) !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() { return -this.snapGrid[0] },
                maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] }
            },
            u = {
                slideTo: function(e, t, n, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                    var r = this,
                        a = e;
                    a < 0 && (a = 0);
                    var s = r.params,
                        o = r.snapGrid,
                        l = r.slidesGrid,
                        d = r.previousIndex,
                        u = r.activeIndex,
                        c = r.rtlTranslate;
                    if (r.animating && s.preventInteractionOnTransition) return !1;
                    var p = Math.floor(a / s.slidesPerGroup);
                    p >= o.length && (p = o.length - 1), (u || s.initialSlide || 0) === (d || 0) && n && r.emit("beforeSlideChangeStart");
                    var h, f = -o[p];
                    if (r.updateProgress(f), s.normalizeSlideIndex)
                        for (var m = 0; m < l.length; m += 1) - Math.floor(100 * f) >= Math.floor(100 * l[m]) && (a = m);
                    if (r.initialized && a !== u) { if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1; if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (u || 0) !== a) return !1 }
                    return h = u < a ? "next" : a < u ? "prev" : "reset", c && -f === r.translate || !c && f === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(f), "reset" !== h && (r.transitionStart(n, h), r.transitionEnd(n, h)), !1) : (0 !== t && F.transition ? (r.setTransition(t), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, h), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, h)) }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, h), r.transitionEnd(n, h)), !0)
                },
                slideToLoop: function(e, t, n, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0); var r = e; return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, n, i) },
                slideNext: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        r = i.params,
                        a = i.animating;
                    return r.loop ? !a && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)
                },
                slidePrev: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        r = i.params,
                        a = i.animating,
                        s = i.snapGrid,
                        o = i.slidesGrid,
                        l = i.rtlTranslate;
                    if (r.loop) {
                        if (a) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function d(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) }
                    var u, c = d(l ? i.translate : -i.translate),
                        p = s.map(function(e) { return d(e) }),
                        h = (o.map(function(e) { return d(e) }), s[p.indexOf(c)], s[p.indexOf(c) - 1]);
                    return void 0 !== h && (u = o.indexOf(h)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n)
                },
                slideReset: function(e, t, n) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n) },
                slideToClosest: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        r = i.activeIndex,
                        a = Math.floor(r / i.params.slidesPerGroup);
                    if (a < i.snapGrid.length - 1) {
                        var s = i.rtlTranslate ? i.translate : -i.translate,
                            o = i.snapGrid[a];
                        (i.snapGrid[a + 1] - o) / 2 < s - o && (r = i.params.slidesPerGroup)
                    }
                    return i.slideTo(r, e, t, n)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                        a = t.clickedIndex;
                    if (n.loop) {
                        if (t.animating) return;
                        e = parseInt(N(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), B.nextTick(function() { t.slideTo(a) })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), B.nextTick(function() { t.slideTo(a) })) : t.slideTo(a)
                    } else t.slideTo(a)
                }
            },
            c = {
                loopCreate: function() {
                    var i = this,
                        e = i.params,
                        t = i.$wrapperEl;
                    t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
                    var r = t.children("." + e.slideClass);
                    if (e.loopFillGroupWithBlank) {
                        var n = e.slidesPerGroup - r.length % e.slidesPerGroup;
                        if (n !== e.slidesPerGroup) {
                            for (var a = 0; a < n; a += 1) {
                                var s = N(m.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                                t.append(s)
                            }
                            r = t.children("." + e.slideClass)
                        }
                    }
                    "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > r.length && (i.loopedSlides = r.length);
                    var o = [],
                        l = [];
                    r.each(function(e, t) {
                        var n = N(t);
                        e < i.loopedSlides && l.push(t), e < r.length && e >= r.length - i.loopedSlides && o.push(t), n.attr("data-swiper-slide-index", e)
                    });
                    for (var d = 0; d < l.length; d += 1) t.append(N(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
                    for (var u = o.length - 1; 0 <= u; u -= 1) t.prepend(N(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
                },
                loopFix: function() {
                    var e, t = this,
                        n = t.params,
                        i = t.activeIndex,
                        r = t.slides,
                        a = t.loopedSlides,
                        s = t.allowSlidePrev,
                        o = t.allowSlideNext,
                        l = t.snapGrid,
                        d = t.rtlTranslate;
                    t.allowSlidePrev = !0, t.allowSlideNext = !0;
                    var u = -l[i] - t.getTranslate();
                    i < a ? (e = r.length - 3 * a + i, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)) : ("auto" === n.slidesPerView && 2 * a <= i || i >= r.length - a) && (e = -r.length + i + a, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)), t.allowSlidePrev = s, t.allowSlideNext = o
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                        t = this.params,
                        n = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), n.removeAttr("data-swiper-slide-index")
                }
            },
            p = {
                setGrabCursor: function(e) {
                    if (!(F.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() { F.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") }
            },
            h = {
                appendSlide: function(e) {
                    var t = this,
                        n = t.$wrapperEl,
                        i = t.params;
                    if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
                    else n.append(e);
                    i.loop && t.loopCreate(), i.observer && F.observer || t.update()
                },
                prependSlide: function(e) {
                    var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = t.activeIndex;
                    n.loop && t.loopDestroy();
                    var a = r + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                        a = r + e.length
                    } else i.prepend(e);
                    n.loop && t.loopCreate(), n.observer && F.observer || t.update(), t.slideTo(a, 0, !1)
                },
                addSlide: function(e, t) {
                    var n = this,
                        i = n.$wrapperEl,
                        r = n.params,
                        a = n.activeIndex;
                    r.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
                    var s = n.slides.length;
                    if (e <= 0) n.prependSlide(t);
                    else if (s <= e) n.appendSlide(t);
                    else {
                        for (var o = e < a ? a + 1 : a, l = [], d = s - 1; e <= d; d -= 1) {
                            var u = n.slides.eq(d);
                            u.remove(), l.unshift(u)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                            o = e < a ? a + t.length : a
                        } else i.append(t);
                        for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                        r.loop && n.loopCreate(), r.observer && F.observer || n.update(), r.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1)
                    }
                },
                removeSlide: function(e) {
                    var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = t.activeIndex;
                    n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                    var a, s = r;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
                        s = Math.max(s, 0)
                    } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
                    n.loop && t.loopCreate(), n.observer && F.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            f = function() {
                var e = _.navigator.userAgent,
                    t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: _.cordova || _.phonegap, phonegap: _.cordova || _.phonegap },
                    n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    r = e.match(/(iPad).*OS\s([\d_]+)/),
                    a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), i && !n && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (r || s || a) && (t.os = "ios", t.ios = !0), s && !a && (t.osVersion = s[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                    var o = t.osVersion.split("."),
                        l = m.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
                }
                return t.pixelRatio = _.devicePixelRatio || 1, t
            }();

        function v() {
            var e = this,
                t = e.params,
                n = e.el;
            if (!n || 0 !== n.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var i = e.allowSlideNext,
                    r = e.allowSlidePrev,
                    a = e.snapGrid;
                if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                    var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }
        }
        var g, y = {
                attachEvents: function() {
                    var e = this,
                        t = e.params,
                        n = e.touchEvents,
                        i = e.el,
                        r = e.wrapperEl;
                    e.onTouchStart = function(e) {
                        var t = this,
                            n = t.touchEventsData,
                            i = t.params,
                            r = t.touches;
                        if (!t.animating || !i.preventInteractionOnTransition) {
                            var a = e;
                            if (a.originalEvent && (a = a.originalEvent), n.isTouchEvent = "touchstart" === a.type, (n.isTouchEvent || !("which" in a) || 3 !== a.which) && !(!n.isTouchEvent && "button" in a && 0 < a.button || n.isTouched && n.isMoved))
                                if (i.noSwiping && N(a.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                                else if (!i.swipeHandler || N(a).closest(i.swipeHandler)[0]) {
                                r.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, r.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                                var s = r.currentX,
                                    o = r.currentY,
                                    l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                                    d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                                if (!l || !(s <= d || s >= _.screen.width - d)) {
                                    if (B.extend(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), r.startX = s, r.startY = o, n.touchStartTime = B.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (n.allowThresholdMove = !1), "touchstart" !== a.type) {
                                        var u = !0;
                                        N(a.target).is(n.formElements) && (u = !1), m.activeElement && N(m.activeElement).is(n.formElements) && m.activeElement !== a.target && m.activeElement.blur();
                                        var c = u && t.allowTouchMove && i.touchStartPreventDefault;
                                        (i.touchStartForcePreventDefault || c) && a.preventDefault()
                                    }
                                    t.emit("touchStart", a)
                                }
                            }
                        }
                    }.bind(e), e.onTouchMove = function(e) {
                        var t = this,
                            n = t.touchEventsData,
                            i = t.params,
                            r = t.touches,
                            a = t.rtlTranslate,
                            s = e;
                        if (s.originalEvent && (s = s.originalEvent), n.isTouched) {
                            if (!n.isTouchEvent || "mousemove" !== s.type) {
                                var o = "touchmove" === s.type ? s.targetTouches[0].pageX : s.pageX,
                                    l = "touchmove" === s.type ? s.targetTouches[0].pageY : s.pageY;
                                if (s.preventedByNestedSwiper) return r.startX = o, void(r.startY = l);
                                if (!t.allowTouchMove) return t.allowClick = !1, void(n.isTouched && (B.extend(r, { startX: o, startY: l, currentX: o, currentY: l }), n.touchStartTime = B.now()));
                                if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                    if (t.isVertical()) { if (l < r.startY && t.translate <= t.maxTranslate() || l > r.startY && t.translate >= t.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1) } else if (o < r.startX && t.translate <= t.maxTranslate() || o > r.startX && t.translate >= t.minTranslate()) return;
                                if (n.isTouchEvent && m.activeElement && s.target === m.activeElement && N(s.target).is(n.formElements)) return n.isMoved = !0, void(t.allowClick = !1);
                                if (n.allowTouchCallbacks && t.emit("touchMove", s), !(s.targetTouches && 1 < s.targetTouches.length)) {
                                    r.currentX = o, r.currentY = l;
                                    var d, u = r.currentX - r.startX,
                                        c = r.currentY - r.startY;
                                    if (!(t.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2)) < t.params.threshold))
                                        if (void 0 === n.isScrolling && (t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : 25 <= u * u + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(u)) / Math.PI, n.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), n.isScrolling && t.emit("touchMoveOpposite", s), void 0 === n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                                        else if (n.startMoving) {
                                        t.allowClick = !1, s.preventDefault(), i.touchMoveStopPropagation && !i.nested && s.stopPropagation(), n.isMoved || (i.loop && t.loopFix(), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", s)), t.emit("sliderMove", s), n.isMoved = !0;
                                        var p = t.isHorizontal() ? u : c;
                                        r.diff = p, p *= i.touchRatio, a && (p = -p), t.swipeDirection = 0 < p ? "prev" : "next", n.currentTranslate = p + n.startTranslate;
                                        var h = !0,
                                            f = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (f = 0), 0 < p && n.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (n.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + n.startTranslate + p, f))) : p < 0 && n.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - n.startTranslate - p, f))), h && (s.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), 0 < i.threshold) { if (!(Math.abs(p) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate); if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY) }
                                        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === n.velocities.length && n.velocities.push({ position: r[t.isHorizontal() ? "startX" : "startY"], time: n.touchStartTime }), n.velocities.push({ position: r[t.isHorizontal() ? "currentX" : "currentY"], time: B.now() })), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate))
                                    }
                                }
                            }
                        } else n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", s)
                    }.bind(e), e.onTouchEnd = function(e) {
                        var t = this,
                            n = t.touchEventsData,
                            i = t.params,
                            r = t.touches,
                            a = t.rtlTranslate,
                            s = t.$wrapperEl,
                            o = t.slidesGrid,
                            l = t.snapGrid,
                            d = e;
                        if (d.originalEvent && (d = d.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", d), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var u, c = B.now(),
                            p = c - n.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), p < 300 && 300 < c - n.lastClickTime && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = B.nextTick(function() { t && !t.destroyed && t.emit("click", d) }, 300)), p < 300 && c - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", d))), n.lastClickTime = B.now(), B.nextTick(function() { t.destroyed || (t.allowClick = !0) }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) {
                            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (i.freeModeMomentum) {
                                if (1 < n.velocities.length) {
                                    var h = n.velocities.pop(),
                                        f = n.velocities.pop(),
                                        m = h.position - f.position,
                                        v = h.time - f.time;
                                    t.velocity = m / v, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < B.now() - h.time) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                                var g = 1e3 * i.freeModeMomentumRatio,
                                    y = t.velocity * g,
                                    b = t.translate + y;
                                a && (b = -b);
                                var w, x, T = !1,
                                    C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                if (b < t.maxTranslate()) i.freeModeMomentumBounce ? (b + t.maxTranslate() < -C && (b = t.maxTranslate() - C), w = t.maxTranslate(), T = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                                else if (b > t.minTranslate()) i.freeModeMomentumBounce ? (b - t.minTranslate() > C && (b = t.minTranslate() + C), w = t.minTranslate(), T = !0, n.allowMomentumBounce = !0) : b = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                                else if (i.freeModeSticky) {
                                    for (var E, S = 0; S < l.length; S += 1)
                                        if (l[S] > -b) { E = S; break }
                                    b = -(b = Math.abs(l[E] - b) < Math.abs(l[E - 1] - b) || "next" === t.swipeDirection ? l[E] : l[E - 1])
                                }
                                if (x && t.once("transitionEnd", function() { t.loopFix() }), 0 !== t.velocity) g = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                                else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && T ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function() { t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(w), s.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (i.freeModeSticky) return void t.slideToClosest();
                            (!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else { for (var k = 0, M = t.slidesSizesGrid[0], L = 0; L < o.length; L += i.slidesPerGroup) void 0 !== o[L + i.slidesPerGroup] ? u >= o[L] && u < o[L + i.slidesPerGroup] && (M = o[(k = L) + i.slidesPerGroup] - o[L]) : u >= o[L] && (k = L, M = o[o.length - 1] - o[o.length - 2]); var P = (u - o[k]) / M; if (p > i.longSwipesMs) { if (!i.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k)) } else { if (!i.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(k + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k) } }
                    }.bind(e), e.onClick = function(e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }.bind(e);
                    var a = "container" === t.touchEventsTarget ? i : r,
                        s = !!t.nested;
                    if (F.touch || !F.pointerEvents && !F.prefixedPointerEvents) {
                        if (F.touch) {
                            var o = !("touchstart" !== n.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            a.addEventListener(n.start, e.onTouchStart, o), a.addEventListener(n.move, e.onTouchMove, F.passiveListener ? { passive: !1, capture: s } : s), a.addEventListener(n.end, e.onTouchEnd, o)
                        }(t.simulateTouch && !f.ios && !f.android || t.simulateTouch && !F.touch && f.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), m.addEventListener("mousemove", e.onTouchMove, s), m.addEventListener("mouseup", e.onTouchEnd, !1))
                    } else a.addEventListener(n.start, e.onTouchStart, !1), m.addEventListener(n.move, e.onTouchMove, s), m.addEventListener(n.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on(f.ios || f.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v, !0)
                },
                detachEvents: function() {
                    var e = this,
                        t = e.params,
                        n = e.touchEvents,
                        i = e.el,
                        r = e.wrapperEl,
                        a = "container" === t.touchEventsTarget ? i : r,
                        s = !!t.nested;
                    if (F.touch || !F.pointerEvents && !F.prefixedPointerEvents) {
                        if (F.touch) {
                            var o = !("onTouchStart" !== n.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            a.removeEventListener(n.start, e.onTouchStart, o), a.removeEventListener(n.move, e.onTouchMove, s), a.removeEventListener(n.end, e.onTouchEnd, o)
                        }(t.simulateTouch && !f.ios && !f.android || t.simulateTouch && !F.touch && f.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), m.removeEventListener("mousemove", e.onTouchMove, s), m.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else a.removeEventListener(n.start, e.onTouchStart, !1), m.removeEventListener(n.move, e.onTouchMove, s), m.removeEventListener(n.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), e.off(f.ios || f.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v)
                }
            },
            b = {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        n = e.initialized,
                        i = e.loopedSlides;
                    void 0 === i && (i = 0);
                    var r = e.params,
                        a = r.breakpoints;
                    if (a && (!a || 0 !== Object.keys(a).length)) {
                        var s = e.getBreakpoint(a);
                        if (s && e.currentBreakpoint !== s) {
                            var o = s in a ? a[s] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var l = o || e.originalParams,
                                d = r.loop && l.slidesPerView !== r.slidesPerView;
                            B.extend(e.params, l), B.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = s, d && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            n = [];
                        Object.keys(e).forEach(function(e) { n.push(e) }), n.sort(function(e, t) { return parseInt(e, 10) - parseInt(t, 10) });
                        for (var i = 0; i < n.length; i += 1) {
                            var r = n[i];
                            this.params.breakpointsInverse ? r <= _.innerWidth && (t = r) : r >= _.innerWidth && !t && (t = r)
                        }
                        return t || "max"
                    }
                }
            },
            z = { isIE: !!_.navigator.userAgent.match(/Trident/g) || !!_.navigator.userAgent.match(/MSIE/g), isEdge: !!_.navigator.userAgent.match(/Edge/g), isSafari: (g = _.navigator.userAgent.toLowerCase(), 0 <= g.indexOf("safari") && g.indexOf("chrome") < 0 && g.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(_.navigator.userAgent) },
            w = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
            x = {
                update: o,
                translate: d,
                transition: {
                    setTransition: function(e, t) { this.$wrapperEl.transition(e), this.emit("setTransition", e, t) },
                    transitionStart: function(e, t) {
                        void 0 === e && (e = !0);
                        var n = this,
                            i = n.activeIndex,
                            r = n.params,
                            a = n.previousIndex;
                        r.autoHeight && n.updateAutoHeight();
                        var s = t;
                        if (s || (s = a < i ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a) {
                            if ("reset" === s) return void n.emit("slideResetTransitionStart");
                            n.emit("slideChangeTransitionStart"), "next" === s ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
                        }
                    },
                    transitionEnd: function(e, t) {
                        void 0 === e && (e = !0);
                        var n = this,
                            i = n.activeIndex,
                            r = n.previousIndex;
                        n.animating = !1, n.setTransition(0);
                        var a = t;
                        if (a || (a = r < i ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r) {
                            if ("reset" === a) return void n.emit("slideResetTransitionEnd");
                            n.emit("slideChangeTransitionEnd"), "next" === a ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
                        }
                    }
                },
                slide: u,
                loop: c,
                grabCursor: p,
                manipulation: h,
                events: y,
                breakpoints: b,
                checkOverflow: {
                    checkOverflow: function() {
                        var e = this,
                            t = e.isLocked;
                        e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var t = this.classNames,
                            n = this.params,
                            e = this.rtl,
                            i = this.$el,
                            r = [];
                        r.push(n.direction), n.freeMode && r.push("free-mode"), F.flexbox || r.push("no-flexbox"), n.autoHeight && r.push("autoheight"), e && r.push("rtl"), 1 < n.slidesPerColumn && r.push("multirow"), f.android && r.push("android"), f.ios && r.push("ios"), (z.isIE || z.isEdge) && (F.pointerEvents || F.prefixedPointerEvents) && r.push("wp8-" + n.direction), r.forEach(function(e) { t.push(n.containerModifierClass + e) }), i.addClass(t.join(" "))
                    },
                    removeClasses: function() {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "))
                    }
                },
                images: {
                    loadImage: function(e, t, n, i, r, a) {
                        var s;

                        function o() { a && a() }
                        e.complete && r ? o() : t ? ((s = new _.Image).onload = o, s.onerror = o, i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : o()
                    },
                    preloadImages: function() {
                        var e = this;

                        function t() { null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) }
                        e.imagesToLoad = e.$el.find("img");
                        for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                            var i = e.imagesToLoad[n];
                            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            T = {},
            C = function(p) {
                function h() {
                    for (var e, t, r, n = [], i = arguments.length; i--;) n[i] = arguments[i];
                    (r = 1 === n.length && n[0].constructor && n[0].constructor === Object ? n[0] : (t = (e = n)[0], e[1])) || (r = {}), r = B.extend({}, r), t && !r.el && (r.el = t), p.call(this, r), Object.keys(x).forEach(function(t) { Object.keys(x[t]).forEach(function(e) { h.prototype[e] || (h.prototype[e] = x[t][e]) }) });
                    var a = this;
                    void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function(e) {
                        var t = a.modules[e];
                        if (t.params) {
                            var n = Object.keys(t.params)[0],
                                i = t.params[n];
                            if ("object" != typeof i || null === i) return;
                            if (!(n in r && "enabled" in i)) return;
                            !0 === r[n] && (r[n] = { enabled: !0 }), "object" != typeof r[n] || "enabled" in r[n] || (r[n].enabled = !0), r[n] || (r[n] = { enabled: !1 })
                        }
                    });
                    var s = B.extend({}, w);
                    a.useModulesParams(s), a.params = B.extend({}, s, T, r), a.originalParams = B.extend({}, a.params), a.passedParams = B.extend({}, r);
                    var o = (a.$ = N)(a.params.el);
                    if (t = o[0]) {
                        if (1 < o.length) {
                            var l = [];
                            return o.each(function(e, t) {
                                var n = B.extend({}, r, { el: t });
                                l.push(new h(n))
                            }), l
                        }
                        t.swiper = a, o.data("swiper", a);
                        var d, u, c = o.children("." + a.params.wrapperClass);
                        return B.extend(a, { $el: o, el: t, $wrapperEl: c, wrapperEl: c[0], classNames: [], slides: N(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === a.params.direction }, isVertical: function() { return "vertical" === a.params.direction }, rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"), rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")), wrongRTL: "-webkit-box" === c.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: a.params.allowSlideNext, allowSlidePrev: a.params.allowSlidePrev, touchEvents: (d = ["touchstart", "touchmove", "touchend"], u = ["mousedown", "mousemove", "mouseup"], F.pointerEvents ? u = ["pointerdown", "pointermove", "pointerup"] : F.prefixedPointerEvents && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), a.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }, a.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }, F.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: B.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: a.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), a.useModules(), a.params.init && a.init(), a
                    }
                }
                p && (h.__proto__ = p);
                var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
                return ((h.prototype = Object.create(p && p.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
                    var e = this,
                        t = e.params,
                        n = e.slides,
                        i = e.slidesGrid,
                        r = e.size,
                        a = e.activeIndex,
                        s = 1;
                    if (t.centeredSlides) { for (var o, l = n[a].swiperSlideSize, d = a + 1; d < n.length; d += 1) n[d] && !o && (s += 1, r < (l += n[d].swiperSlideSize) && (o = !0)); for (var u = a - 1; 0 <= u; u -= 1) n[u] && !o && (s += 1, r < (l += n[u].swiperSlideSize) && (o = !0)) } else
                        for (var c = a + 1; c < n.length; c += 1) i[c] - i[a] < r && (s += 1);
                    return s
                }, h.prototype.update = function() {
                    var n = this;
                    if (n && !n.destroyed) {
                        var e = n.snapGrid,
                            t = n.params;
                        t.breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== n.snapGrid && n.checkOverflow(), n.emit("update")
                    }

                    function i() {
                        var e = n.rtlTranslate ? -1 * n.translate : n.translate,
                            t = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
                        n.setTranslate(t), n.updateActiveIndex(), n.updateSlidesClasses()
                    }
                }, h.prototype.init = function() {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }, h.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                        i = n.params,
                        r = n.$el,
                        a = n.$wrapperEl,
                        s = n.slides;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function(e) { n.off(e) }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), B.deleteProps(n)), n.destroyed = !0), null
                }, h.extendDefaults = function(e) { B.extend(T, e) }, e.extendedDefaults.get = function() { return T }, e.defaults.get = function() { return w }, e.Class.get = function() { return p }, e.$.get = function() { return N }, Object.defineProperties(h, e), h
            }(r),
            E = { name: "device", proto: { device: f }, static: { device: f } },
            S = { name: "support", proto: { support: F }, static: { support: F } },
            k = { name: "browser", proto: { browser: z }, static: { browser: z } },
            M = {
                name: "resize",
                create: function() {
                    var e = this;
                    B.extend(e, { resize: { resizeHandler: function() { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function() { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } })
                },
                on: { init: function() { _.addEventListener("resize", this.resize.resizeHandler), _.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function() { _.removeEventListener("resize", this.resize.resizeHandler), _.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } }
            },
            L = {
                func: _.MutationObserver || _.WebkitMutationObserver,
                attach: function(e, t) {
                    void 0 === t && (t = {});
                    var n = this,
                        i = new L.func(function(e) {
                            if (1 !== e.length) {
                                var t = function() { n.emit("observerUpdate", e[0]) };
                                _.requestAnimationFrame ? _.requestAnimationFrame(t) : _.setTimeout(t, 0)
                            } else n.emit("observerUpdate", e[0])
                        });
                    i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), n.observer.observers.push(i)
                },
                init: function() {
                    var e = this;
                    if (F.observer && e.params.observer) {
                        if (e.params.observeParents)
                            for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                        e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 })
                    }
                },
                destroy: function() { this.observer.observers.forEach(function(e) { e.disconnect() }), this.observer.observers = [] }
            },
            P = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function() { B.extend(this, { observer: { init: L.init.bind(this), attach: L.attach.bind(this), destroy: L.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
            A = {
                update: function(e) {
                    var t = this,
                        n = t.params,
                        i = n.slidesPerView,
                        r = n.slidesPerGroup,
                        a = n.centeredSlides,
                        s = t.params.virtual,
                        o = s.addSlidesBefore,
                        l = s.addSlidesAfter,
                        d = t.virtual,
                        u = d.from,
                        c = d.to,
                        p = d.slides,
                        h = d.slidesGrid,
                        f = d.renderSlide,
                        m = d.offset;
                    t.updateActiveIndex();
                    var v, g, y, b = t.activeIndex || 0;
                    v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", y = a ? (g = Math.floor(i / 2) + r + o, Math.floor(i / 2) + r + l) : (g = i + (r - 1) + o, r + l);
                    var w = Math.max((b || 0) - y, 0),
                        x = Math.min((b || 0) + g, p.length - 1),
                        T = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

                    function C() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() }
                    if (B.extend(t.virtual, { from: w, to: x, offset: T, slidesGrid: t.slidesGrid }), u === w && c === x && !e) return t.slidesGrid !== h && T !== m && t.slides.css(v, T + "px"), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: T, from: w, to: x, slides: function() { for (var e = [], t = w; t <= x; t += 1) e.push(p[t]); return e }() }), void C();
                    var E = [],
                        S = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else
                        for (var k = u; k <= c; k += 1)(k < w || x < k) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                    for (var M = 0; M < p.length; M += 1) w <= M && M <= x && (void 0 === c || e ? S.push(M) : (c < M && S.push(M), M < u && E.push(M)));
                    S.forEach(function(e) { t.$wrapperEl.append(f(p[e], e)) }), E.sort(function(e, t) { return t - e }).forEach(function(e) { t.$wrapperEl.prepend(f(p[e], e)) }), t.$wrapperEl.children(".swiper-slide").css(v, T + "px"), C()
                },
                renderSlide: function(e, t) {
                    var n = this,
                        i = n.params.virtual;
                    if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                    var r = i.renderSlide ? N(i.renderSlide.call(n, e, t)) : N('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = r), r
                },
                appendSlide: function(e) { this.virtual.slides.push(e), this.virtual.update(!0) },
                prependSlide: function(e) {
                    var t = this;
                    if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                        var n = t.virtual.cache,
                            i = {};
                        Object.keys(n).forEach(function(e) { i[e + 1] = n[e] }), t.virtual.cache = i
                    }
                    t.virtual.update(!0), t.slideNext(0)
                }
            },
            D = {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create: function() {
                    var e = this;
                    B.extend(e, { virtual: { update: A.update.bind(e), appendSlide: A.appendSlide.bind(e), prependSlide: A.prependSlide.bind(e), renderSlide: A.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if (e.params.virtual.enabled) {
                            e.classNames.push(e.params.containerModifierClass + "virtual");
                            var t = { watchSlidesProgress: !0 };
                            B.extend(e.params, t), B.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                        }
                    },
                    setTranslate: function() { this.params.virtual.enabled && this.virtual.update() }
                }
            },
            I = {
                handle: function(e) {
                    var t = this,
                        n = t.rtlTranslate,
                        i = e;
                    i.originalEvent && (i = i.originalEvent);
                    var r = i.keyCode || i.charCode;
                    if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
                    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                            var a = !1;
                            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                            var s = _.innerWidth,
                                o = _.innerHeight,
                                l = t.$el.offset();
                            n && (l.left -= t.$el[0].scrollLeft);
                            for (var d = [
                                    [l.left, l.top],
                                    [l.left + t.width, l.top],
                                    [l.left, l.top + t.height],
                                    [l.left + t.width, l.top + t.height]
                                ], u = 0; u < d.length; u += 1) {
                                var c = d[u];
                                0 <= c[0] && c[0] <= s && 0 <= c[1] && c[1] <= o && (a = !0)
                            }
                            if (!a) return
                        }
                        t.isHorizontal() ? (37 !== r && 39 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === r && !n || 37 === r && n) && t.slideNext(), (37 === r && !n || 39 === r && n) && t.slidePrev()) : (38 !== r && 40 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r)
                    }
                },
                enable: function() { this.keyboard.enabled || (N(m).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) },
                disable: function() { this.keyboard.enabled && (N(m).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) }
            },
            O = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { B.extend(this, { keyboard: { enabled: !1, enable: I.enable.bind(this), disable: I.disable.bind(this), handle: I.handle.bind(this) } }) }, on: { init: function() { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function() { this.keyboard.enabled && this.keyboard.disable() } } },
            $ = {
                lastScrollTime: B.now(),
                event: -1 < _.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                    var e = "onwheel",
                        t = e in m;
                    if (!t) {
                        var n = m.createElement("div");
                        n.setAttribute(e, "return;"), t = "function" == typeof n[e]
                    }
                    return !t && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (t = m.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel",
                normalize: function(e) {
                    var t = 0,
                        n = 0,
                        i = 0,
                        r = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: i, pixelY: r }
                },
                handleMouseEnter: function() { this.mouseEntered = !0 },
                handleMouseLeave: function() { this.mouseEntered = !1 },
                handle: function(e) {
                    var t = e,
                        n = this,
                        i = n.params.mousewheel;
                    if (!n.mouseEntered && !i.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var r = 0,
                        a = n.rtlTranslate ? -1 : 1,
                        s = $.normalize(t);
                    if (i.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
                            r = s.pixelX * a
                        } else {
                            if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
                            r = s.pixelY
                        }
                    else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
                    if (0 === r) return !0;
                    if (i.invert && (r = -r), n.params.freeMode) {
                        n.params.loop && n.loopFix();
                        var o = n.getTranslate() + r * i.sensitivity,
                            l = n.isBeginning,
                            d = n.isEnd;
                        if (o >= n.minTranslate() && (o = n.minTranslate()), o <= n.maxTranslate() && (o = n.maxTranslate()), n.setTransition(0), n.setTranslate(o), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!l && n.isBeginning || !d && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = B.nextTick(function() { n.slideToClosest() }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), o === n.minTranslate() || o === n.maxTranslate()) return !0
                    } else {
                        if (60 < B.now() - n.mousewheel.lastScrollTime)
                            if (r < 0)
                                if (n.isEnd && !n.params.loop || n.animating) { if (i.releaseOnEdges) return !0 } else n.slideNext(), n.emit("scroll", t);
                        else if (n.isBeginning && !n.params.loop || n.animating) { if (i.releaseOnEdges) return !0 } else n.slidePrev(), n.emit("scroll", t);
                        n.mousewheel.lastScrollTime = (new _.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                enable: function() { var e = this; if (!$.event) return !1; if (e.mousewheel.enabled) return !1; var t = e.$el; return "container" !== e.params.mousewheel.eventsTarged && (t = N(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on($.event, e.mousewheel.handle), e.mousewheel.enabled = !0 },
                disable: function() { var e = this; if (!$.event) return !1; if (!e.mousewheel.enabled) return !1; var t = e.$el; return "container" !== e.params.mousewheel.eventsTarged && (t = N(e.params.mousewheel.eventsTarged)), t.off($.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1) }
            },
            H = {
                update: function() {
                    var e = this,
                        t = e.params.navigation;
                    if (!e.params.loop) {
                        var n = e.navigation,
                            i = n.$nextEl,
                            r = n.$prevEl;
                        r && 0 < r.length && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function(e) { e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev() },
                onNextClick: function(e) { e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext() },
                init: function() {
                    var e, t, n = this,
                        i = n.params.navigation;
                    (i.nextEl || i.prevEl) && (i.nextEl && (e = N(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = N(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", n.navigation.onNextClick), t && 0 < t.length && t.on("click", n.navigation.onPrevClick), B.extend(n.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }))
                },
                destroy: function() {
                    var e = this,
                        t = e.navigation,
                        n = t.$nextEl,
                        i = t.$prevEl;
                    n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
                }
            },
            j = {
                update: function() {
                    var e = this,
                        t = e.rtl,
                        r = e.params.pagination;
                    if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var a, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            i = e.pagination.$el,
                            s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        if (e.params.loop ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (a -= n - 2 * e.loopedSlides), s - 1 < a && (a -= s), a < 0 && "bullets" !== e.params.paginationType && (a = s + a)) : a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                            var o, l, d, u = e.pagination.bullets;
                            if (r.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"), 1 < r.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += a - e.previousIndex, e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = a - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(u.length, r.dynamicMainBullets) - 1)) + o) / 2), u.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"), 1 < i.length) u.each(function(e, t) {
                                var n = N(t),
                                    i = n.index();
                                i === a && n.addClass(r.bulletActiveClass), r.dynamicBullets && (o <= i && i <= l && n.addClass(r.bulletActiveClass + "-main"), i === o && n.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), i === l && n.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next"))
                            });
                            else if (u.eq(a).addClass(r.bulletActiveClass), r.dynamicBullets) {
                                for (var c = u.eq(o), p = u.eq(l), h = o; h <= l; h += 1) u.eq(h).addClass(r.bulletActiveClass + "-main");
                                c.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), p.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")
                            }
                            if (r.dynamicBullets) {
                                var f = Math.min(u.length, r.dynamicMainBullets + 4),
                                    m = (e.pagination.bulletSize * f - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                    v = t ? "right" : "left";
                                u.css(e.isHorizontal() ? v : "top", m + "px")
                            }
                        }
                        if ("fraction" === r.type && (i.find("." + r.currentClass).text(r.formatFractionCurrent(a + 1)), i.find("." + r.totalClass).text(r.formatFractionTotal(s))), "progressbar" === r.type) {
                            var g;
                            g = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                            var y = (a + 1) / s,
                                b = 1,
                                w = 1;
                            "horizontal" === g ? b = y : w = y, i.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(e.params.speed)
                        }
                        "custom" === r.type && r.renderCustom ? (i.html(r.renderCustom(e, a + 1, s)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
                    }
                },
                render: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                            i = e.pagination.$el,
                            r = "";
                        if ("bullets" === t.type) {
                            for (var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            i.html(r), e.pagination.bullets = i.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                    }
                },
                init: function() {
                    var n = this,
                        e = n.params.pagination;
                    if (e.el) {
                        var t = N(e.el);
                        0 !== t.length && (n.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === n.$el.find(e.el).length && (t = n.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), n.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                            e.preventDefault();
                            var t = N(this).index() * n.params.slidesPerGroup;
                            n.params.loop && (t += n.loopedSlides), n.slideTo(t)
                        }), B.extend(n.pagination, { $el: t, el: t[0] }))
                    }
                },
                destroy: function() {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.pagination.$el;
                        n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass)
                    }
                }
            },
            R = {
                setTranslate: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.rtlTranslate,
                            i = e.progress,
                            r = t.dragSize,
                            a = t.trackSize,
                            s = t.$dragEl,
                            o = t.$el,
                            l = e.params.scrollbar,
                            d = r,
                            u = (a - r) * i;
                        n ? 0 < (u = -u) ? (d = r - u, u = 0) : a < -u + r && (d = a + u) : u < 0 ? (d = r + u, u = 0) : a < u + r && (d = a - u), e.isHorizontal() ? (F.transforms3d ? s.transform("translate3d(" + u + "px, 0, 0)") : s.transform("translateX(" + u + "px)"), s[0].style.width = d + "px") : (F.transforms3d ? s.transform("translate3d(0px, " + u + "px, 0)") : s.transform("translateY(" + u + "px)"), s[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() { o[0].style.opacity = 0, o.transition(400) }, 1e3))
                    }
                },
                setTransition: function(e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e) },
                updateSize: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar,
                            n = t.$dragEl,
                            i = t.$el;
                        n[0].style.width = "", n[0].style.height = "";
                        var r, a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            s = e.size / e.virtualSize,
                            o = s * (a / e.size);
                        r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = 1 <= s ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), B.extend(t, { trackSize: a, divider: s, moveDivider: o, dragSize: r }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                    }
                },
                setDragPosition: function(e) {
                    var t, n = this,
                        i = n.scrollbar,
                        r = n.rtlTranslate,
                        a = i.$el,
                        s = i.dragSize,
                        o = i.trackSize;
                    t = ((n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[n.isHorizontal() ? "left" : "top"] - s / 2) / (o - s), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
                    var l = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
                    n.updateProgress(l), n.setTranslate(l), n.updateActiveIndex(), n.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this,
                        n = t.params.scrollbar,
                        i = t.scrollbar,
                        r = t.$wrapperEl,
                        a = i.$el,
                        s = i.$dragEl;
                    t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), n.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this.scrollbar,
                        n = this.$wrapperEl,
                        i = t.$el,
                        r = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this,
                        n = t.params.scrollbar,
                        i = t.scrollbar.$el;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = B.nextTick(function() { i.css("opacity", 0), i.transition(400) }, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
                },
                enableDraggable: function() {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.touchEventsTouch,
                            i = e.touchEventsDesktop,
                            r = e.params,
                            a = t.$el[0],
                            s = !(!F.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                            o = !(!F.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                        F.touch ? (a.addEventListener(n.start, e.scrollbar.onDragStart, s), a.addEventListener(n.move, e.scrollbar.onDragMove, s), a.addEventListener(n.end, e.scrollbar.onDragEnd, o)) : (a.addEventListener(i.start, e.scrollbar.onDragStart, s), m.addEventListener(i.move, e.scrollbar.onDragMove, s), m.addEventListener(i.end, e.scrollbar.onDragEnd, o))
                    }
                },
                disableDraggable: function() {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.touchEventsTouch,
                            i = e.touchEventsDesktop,
                            r = e.params,
                            a = t.$el[0],
                            s = !(!F.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                            o = !(!F.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                        F.touch ? (a.removeEventListener(n.start, e.scrollbar.onDragStart, s), a.removeEventListener(n.move, e.scrollbar.onDragMove, s), a.removeEventListener(n.end, e.scrollbar.onDragEnd, o)) : (a.removeEventListener(i.start, e.scrollbar.onDragStart, s), m.removeEventListener(i.move, e.scrollbar.onDragMove, s), m.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
                    }
                },
                init: function() {
                    var e = this;
                    if (e.params.scrollbar.el) {
                        var t = e.scrollbar,
                            n = e.$el,
                            i = e.params.scrollbar,
                            r = N(i.el);
                        e.params.uniqueNavElements && "string" == typeof i.el && 1 < r.length && 1 === n.find(i.el).length && (r = n.find(i.el));
                        var a = r.find("." + e.params.scrollbar.dragClass);
                        0 === a.length && (a = N('<div class="' + e.params.scrollbar.dragClass + '"></div>'), r.append(a)), B.extend(t, { $el: r, el: r[0], $dragEl: a, dragEl: a[0] }), i.draggable && t.enableDraggable()
                    }
                },
                destroy: function() { this.scrollbar.disableDraggable() }
            },
            q = {
                setTransform: function(e, t) {
                    var n = this.rtl,
                        i = N(e),
                        r = n ? -1 : 1,
                        a = i.attr("data-swiper-parallax") || "0",
                        s = i.attr("data-swiper-parallax-x"),
                        o = i.attr("data-swiper-parallax-y"),
                        l = i.attr("data-swiper-parallax-scale"),
                        d = i.attr("data-swiper-parallax-opacity");
                    if (s || o ? (s = s || "0", o = o || "0") : this.isHorizontal() ? (s = a, o = "0") : (o = a, s = "0"), s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t * r + "%" : s * t * r + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                        var u = d - (d - 1) * (1 - Math.abs(t));
                        i[0].style.opacity = u
                    }
                    if (null == l) i.transform("translate3d(" + s + ", " + o + ", 0px)");
                    else {
                        var c = l - (l - 1) * (1 - Math.abs(t));
                        i.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + c + ")")
                    }
                },
                setTranslate: function() {
                    var i = this,
                        e = i.$el,
                        t = i.slides,
                        r = i.progress,
                        a = i.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) { i.parallax.setTransform(t, r) }), t.each(function(e, t) {
                        var n = t.progress;
                        1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (n += Math.ceil(e / 2) - r * (a.length - 1)), n = Math.min(Math.max(n, -1), 1), N(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) { i.parallax.setTransform(t, n) })
                    })
                },
                setTransition: function(r) {
                    void 0 === r && (r = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        var n = N(t),
                            i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || r;
                        0 === r && (i = 0), n.transition(i)
                    })
                }
            },
            V = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
                },
                onGestureStart: function(e) {
                    var t = this,
                        n = t.params.zoom,
                        i = t.zoom,
                        r = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !F.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, r.scaleStart = V.getDistanceBetweenTouches(e)
                    }
                    r.$slideEl && r.$slideEl.length || (r.$slideEl = N(e.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this.params.zoom,
                        n = this.zoom,
                        i = n.gesture;
                    if (!F.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
                    }
                    i.$imageEl && 0 !== i.$imageEl.length && (F.gestures ? this.zoom.scale = e.scale * n.currentScale : n.scale = i.scaleMove / i.scaleStart * n.currentScale, n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this.params.zoom,
                        n = this.zoom,
                        i = n.gesture;
                    if (!F.gestures) {
                        if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !f.android) return;
                        n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                    }
                    i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (i.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this.zoom,
                        n = t.gesture,
                        i = t.image;
                    n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (f.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this,
                        n = t.zoom,
                        i = n.gesture,
                        r = n.image,
                        a = n.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
                        r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = B.getTranslate(i.$imageWrapEl[0], "x") || 0, r.startY = B.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                        var s = r.width * n.scale,
                            o = r.height * n.scale;
                        if (!(s < i.slideWidth && o < i.slideHeight)) {
                            if (r.minX = Math.min(i.slideWidth / 2 - s / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) { if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1); if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1) }
                            e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = r.touchesCurrent.x, a.prevPositionY = r.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this.zoom,
                        t = e.gesture,
                        n = e.image,
                        i = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                        n.isTouched = !1, n.isMoved = !1;
                        var r = 300,
                            a = 300,
                            s = i.x * r,
                            o = n.currentX + s,
                            l = i.y * a,
                            d = n.currentY + l;
                        0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (a = Math.abs((d - n.currentY) / i.y));
                        var u = Math.max(r, a);
                        n.currentX = o, n.currentY = d;
                        var c = n.width * e.scale,
                            p = n.height * e.scale;
                        n.minX = Math.min(t.slideWidth / 2 - c / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
                },
                toggle: function(e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in: function(e) {
                    var t, n, i, r, a, s, o, l, d, u, c, p, h, f, m, v, g = this,
                        y = g.zoom,
                        b = g.params.zoom,
                        w = y.gesture,
                        x = y.image;
                    w.$slideEl || (w.$slideEl = g.clickedSlide ? N(g.clickedSlide) : g.slides.eq(g.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass), n = void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (m = w.$slideEl[0].offsetWidth, v = w.$slideEl[0].offsetHeight, i = w.$slideEl.offset().left + m / 2 - t, r = w.$slideEl.offset().top + v / 2 - n, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * y.scale, u = l * y.scale, h = -(c = Math.min(m / 2 - d / 2, 0)), f = -(p = Math.min(v / 2 - u / 2, 0)), (a = i * y.scale) < c && (a = c), h < a && (a = h), (s = r * y.scale) < p && (s = p), f < s && (s = f)) : s = a = 0, w.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + s + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                },
                out: function() {
                    var e = this,
                        t = e.zoom,
                        n = e.params.zoom,
                        i = t.gesture;
                    i.$slideEl || (i.$slideEl = e.clickedSlide ? N(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + n.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function() {
                    var e = this,
                        t = e.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var n = !("touchstart" !== e.touchEvents.start || !F.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                        F.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                },
                disable: function() {
                    var e = this,
                        t = e.zoom;
                    if (t.enabled) {
                        e.zoom.enabled = !1;
                        var n = !("touchstart" !== e.touchEvents.start || !F.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                        F.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                    }
                }
            },
            G = {
                loadInSlide: function(e, l) {
                    void 0 === l && (l = !0);
                    var d = this,
                        u = d.params.lazy;
                    if (void 0 !== e && 0 !== d.slides.length) {
                        var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                            t = c.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")");
                        !c.hasClass(u.elementClass) || c.hasClass(u.loadedClass) || c.hasClass(u.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
                            var i = N(t);
                            i.addClass(u.loadingClass);
                            var r = i.attr("data-background"),
                                a = i.attr("data-src"),
                                s = i.attr("data-srcset"),
                                o = i.attr("data-sizes");
                            d.loadImage(i[0], a || r, s, o, !1, function() {
                                if (null != d && d && (!d || d.params) && !d.destroyed) {
                                    if (r ? (i.css("background-image", 'url("' + r + '")'), i.removeAttr("data-background")) : (s && (i.attr("srcset", s), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), a && (i.attr("src", a), i.removeAttr("data-src"))), i.addClass(u.loadedClass).removeClass(u.loadingClass), c.find("." + u.preloaderClass).remove(), d.params.loop && l) {
                                        var e = c.attr("data-swiper-slide-index");
                                        if (c.hasClass(d.params.slideDuplicateClass)) {
                                            var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                            d.lazy.loadInSlide(t.index(), !1)
                                        } else {
                                            var n = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            d.lazy.loadInSlide(n.index(), !1)
                                        }
                                    }
                                    d.emit("lazyImageReady", c[0], i[0])
                                }
                            }), d.emit("lazyImageLoad", c[0], i[0])
                        })
                    }
                },
                load: function() {
                    var i = this,
                        t = i.$wrapperEl,
                        n = i.params,
                        r = i.slides,
                        e = i.activeIndex,
                        a = i.virtual && n.virtual.enabled,
                        s = n.lazy,
                        o = n.slidesPerView;

                    function l(e) { if (a) { if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0 } else if (r[e]) return !0; return !1 }

                    function d(e) { return a ? N(e).attr("data-swiper-slide-index") : N(e).index() }
                    if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each(function(e, t) {
                        var n = a ? N(t).attr("data-swiper-slide-index") : N(t).index();
                        i.lazy.loadInSlide(n)
                    });
                    else if (1 < o)
                        for (var u = e; u < e + o; u += 1) l(u) && i.lazy.loadInSlide(u);
                    else i.lazy.loadInSlide(e);
                    if (s.loadPrevNext)
                        if (1 < o || s.loadPrevNextAmount && 1 < s.loadPrevNextAmount) { for (var c = s.loadPrevNextAmount, p = o, h = Math.min(e + p + Math.max(c, p), r.length), f = Math.max(e - Math.max(p, c), 0), m = e + o; m < h; m += 1) l(m) && i.lazy.loadInSlide(m); for (var v = f; v < e; v += 1) l(v) && i.lazy.loadInSlide(v) } else {
                            var g = t.children("." + n.slideNextClass);
                            0 < g.length && i.lazy.loadInSlide(d(g));
                            var y = t.children("." + n.slidePrevClass);
                            0 < y.length && i.lazy.loadInSlide(d(y))
                        }
                }
            },
            X = {
                LinearSpline: function(e, t) { var n, i, r, a, s; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) { return e ? (s = function(e, t) { for (i = -1, n = e.length; 1 < n - i;) e[r = n + i >> 1] <= t ? i = r : n = r; return n }(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0 }, this },
                getInterpolateFunction: function(e) {
                    var t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new X.LinearSpline(t.slidesGrid, e.slidesGrid) : new X.LinearSpline(t.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    var n, i, r = this,
                        a = r.controller.control;

                    function s(e) { var t = r.rtlTranslate ? -r.translate : r.translate; "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), i = -r.controller.spline.interpolate(-t)), i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), i = (t - r.minTranslate()) * n + e.minTranslate()), r.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, r), e.updateActiveIndex(), e.updateSlidesClasses() }
                    if (Array.isArray(a))
                        for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof C && s(a[o]);
                    else a instanceof C && t !== a && s(a)
                },
                setTransition: function(t, e) {
                    var n, i = this,
                        r = i.controller.control;

                    function a(e) { e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && B.nextTick(function() { e.updateAutoHeight() }), e.$wrapperEl.transitionEnd(function() { r && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd()) })) }
                    if (Array.isArray(r))
                        for (n = 0; n < r.length; n += 1) r[n] !== e && r[n] instanceof C && a(r[n]);
                    else r instanceof C && e !== r && a(r)
                }
            },
            W = {
                makeElFocusable: function(e) { return e.attr("tabIndex", "0"), e },
                addElRole: function(e, t) { return e.attr("role", t), e },
                addElLabel: function(e, t) { return e.attr("aria-label", t), e },
                disableEl: function(e) { return e.attr("aria-disabled", !0), e },
                enableEl: function(e) { return e.attr("aria-disabled", !1), e },
                onEnterKey: function(e) {
                    var t = this,
                        n = t.params.a11y;
                    if (13 === e.keyCode) {
                        var i = N(e.target);
                        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
                    }
                },
                notify: function(e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation: function() {
                    var e = this;
                    if (!e.params.loop) {
                        var t = e.navigation,
                            n = t.$nextEl,
                            i = t.$prevEl;
                        i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), n && 0 < n.length && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n))
                    }
                },
                updatePagination: function() {
                    var i = this,
                        r = i.params.a11y;
                    i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                        var n = N(t);
                        i.a11y.makeElFocusable(n), i.a11y.addElRole(n, "button"), i.a11y.addElLabel(n, r.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
                    })
                },
                init: function() {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t, n, i = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                },
                destroy: function() {
                    var e, t, n = this;
                    n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterKey), t && t.off("keydown", n.a11y.onEnterKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
                }
            },
            Y = {
                init: function() {
                    var e = this;
                    if (e.params.history) {
                        if (!_.history || !_.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                        var t = e.history;
                        t.initialized = !0, t.paths = Y.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || _.addEventListener("popstate", e.history.setHistoryPopState))
                    }
                },
                destroy: function() { this.params.history.replaceState || _.removeEventListener("popstate", this.history.setHistoryPopState) },
                setHistoryPopState: function() { this.history.paths = Y.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) },
                getPathValues: function() {
                    var e = _.location.pathname.slice(1).split("/").filter(function(e) { return "" !== e }),
                        t = e.length;
                    return { key: e[t - 2], value: e[t - 1] }
                },
                setHistory: function(e, t) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var n = this.slides.eq(t),
                            i = Y.slugify(n.attr("data-history"));
                        _.location.pathname.includes(e) || (i = e + "/" + i);
                        var r = _.history.state;
                        r && r.value === i || (this.params.history.replaceState ? _.history.replaceState({ value: i }, null, i) : _.history.pushState({ value: i }, null, i))
                    }
                },
                slugify: function(e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") },
                scrollToSlide: function(e, t, n) {
                    var i = this;
                    if (t)
                        for (var r = 0, a = i.slides.length; r < a; r += 1) {
                            var s = i.slides.eq(r);
                            if (Y.slugify(s.attr("data-history")) === t && !s.hasClass(i.params.slideDuplicateClass)) {
                                var o = s.index();
                                i.slideTo(o, e, n)
                            }
                        } else i.slideTo(0, e, n)
                }
            },
            U = {
                onHashCange: function() {
                    var e = this,
                        t = m.location.hash.replace("#", "");
                    if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                        var n = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                        if (void 0 === n) return;
                        e.slideTo(n)
                    }
                },
                setHash: function() {
                    var e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && _.history && _.history.replaceState) _.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                        else {
                            var t = e.slides.eq(e.activeIndex),
                                n = t.attr("data-hash") || t.attr("data-history");
                            m.location.hash = n || ""
                        }
                },
                init: function() {
                    var e = this;
                    if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                        e.hashNavigation.initialized = !0;
                        var t = m.location.hash.replace("#", "");
                        if (t)
                            for (var n = 0, i = e.slides.length; n < i; n += 1) {
                                var r = e.slides.eq(n);
                                if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                                    var a = r.index();
                                    e.slideTo(a, 0, e.params.runCallbacksOnInit, !0)
                                }
                            }
                        e.params.hashNavigation.watchState && N(_).on("hashchange", e.hashNavigation.onHashCange)
                    }
                },
                destroy: function() { this.params.hashNavigation.watchState && N(_).off("hashchange", this.hashNavigation.onHashCange) }
            },
            K = {
                run: function() {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = B.nextTick(function() { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, n)
                },
                start: function() { return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0) },
                stop: function() { return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0) },
                pause: function(e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            },
            Q = {
                setTranslate: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var n = this.slides.eq(t),
                            i = -n[0].swiperSlideOffset;
                        this.params.virtualTranslate || (i -= this.translate);
                        var r = 0;
                        this.isHorizontal() || (r = i, i = 0);
                        var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                        n.css({ opacity: a }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var n = this,
                        t = n.slides,
                        i = n.$wrapperEl;
                    if (t.transition(e), n.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        t.transitionEnd(function() { if (!r && n && !n.destroyed) { r = !0, n.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t]) } })
                    }
                }
            },
            Z = {
                setTranslate: function() {
                    var e, t = this,
                        n = t.$el,
                        i = t.$wrapperEl,
                        r = t.slides,
                        a = t.width,
                        s = t.height,
                        o = t.rtlTranslate,
                        l = t.size,
                        d = t.params.cubeEffect,
                        u = t.isHorizontal(),
                        c = t.virtual && t.params.virtual.enabled,
                        p = 0;
                    d.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = N('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: a + "px" })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = N('<div class="swiper-cube-shadow"></div>'), n.append(e)));
                    for (var h = 0; h < r.length; h += 1) {
                        var f = r.eq(h),
                            m = h;
                        c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                        var v = 90 * m,
                            g = Math.floor(v / 360);
                        o && (v = -v, g = Math.floor(-v / 360));
                        var y = Math.max(Math.min(f[0].progress, 1), -1),
                            b = 0,
                            w = 0,
                            x = 0;
                        m % 4 == 0 ? (b = 4 * -g * l, x = 0) : (m - 1) % 4 == 0 ? (b = 0, x = 4 * -g * l) : (m - 2) % 4 == 0 ? (b = l + 4 * g * l, x = l) : (m - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * g), o && (b = -b), u || (w = b, b = 0);
                        var T = "rotateX(" + (u ? 0 : -v) + "deg) rotateY(" + (u ? v : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                        if (y <= 1 && -1 < y && (p = 90 * m + 90 * y, o && (p = 90 * -m - 90 * y)), f.transform(T), d.slideShadows) {
                            var C = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                                E = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                            0 === C.length && (C = N('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(C)), 0 === E.length && (E = N('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(E)), C.length && (C[0].style.opacity = Math.max(-y, 0)), E.length && (E[0].style.opacity = Math.max(y, 0))
                        }
                    }
                    if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow)
                        if (u) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                        else {
                            var S = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                                k = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                                M = d.shadowScale,
                                L = d.shadowScale / k,
                                P = d.shadowOffset;
                            e.transform("scale3d(" + M + ", 1, " + L + ") translate3d(0px, " + (s / 2 + P) + "px, " + -s / 2 / L + "px) rotateX(-90deg)")
                        }
                    var A = z.isSafari || z.isUiWebView ? -l / 2 : 0;
                    i.transform("translate3d(0px,0," + A + "px) rotateX(" + (t.isHorizontal() ? 0 : p) + "deg) rotateY(" + (t.isHorizontal() ? -p : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                }
            },
            J = {
                setTranslate: function() {
                    for (var e = this.slides, t = this.rtlTranslate, n = 0; n < e.length; n += 1) {
                        var i = e.eq(n),
                            r = i[0].progress;
                        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));
                        var a = -180 * r,
                            s = 0,
                            o = -i[0].swiperSlideOffset,
                            l = 0;
                        if (this.isHorizontal() ? t && (a = -a) : (l = o, s = -a, a = o = 0), i[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                            var d = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                u = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                            0 === d.length && (d = N('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(d)), 0 === u.length && (u = N('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(u)), d.length && (d[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                        }
                        i.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + s + "deg) rotateY(" + a + "deg)")
                    }
                },
                setTransition: function(e) {
                    var n = this,
                        t = n.slides,
                        i = n.activeIndex,
                        r = n.$wrapperEl;
                    if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), n.params.virtualTranslate && 0 !== e) {
                        var a = !1;
                        t.eq(i).transitionEnd(function() { if (!a && n && !n.destroyed) { a = !0, n.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) r.trigger(e[t]) } })
                    }
                }
            },
            ee = {
                setTranslate: function() {
                    for (var e = this.width, t = this.height, n = this.slides, i = this.$wrapperEl, r = this.slidesSizesGrid, a = this.params.coverflowEffect, s = this.isHorizontal(), o = this.translate, l = s ? e / 2 - o : t / 2 - o, d = s ? a.rotate : -a.rotate, u = a.depth, c = 0, p = n.length; c < p; c += 1) {
                        var h = n.eq(c),
                            f = r[c],
                            m = (l - h[0].swiperSlideOffset - f / 2) / f * a.modifier,
                            v = s ? d * m : 0,
                            g = s ? 0 : d * m,
                            y = -u * Math.abs(m),
                            b = s ? 0 : a.stretch * m,
                            w = s ? a.stretch * m : 0;
                        Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0);
                        var x = "translate3d(" + w + "px," + b + "px," + y + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg)";
                        if (h.transform(x), h[0].style.zIndex = 1 - Math.abs(Math.round(m)), a.slideShadows) {
                            var T = s ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                C = s ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                            0 === T.length && (T = N('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>'), h.append(T)), 0 === C.length && (C = N('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>'), h.append(C)), T.length && (T[0].style.opacity = 0 < m ? m : 0), C.length && (C[0].style.opacity = 0 < -m ? -m : 0)
                        }
                    }(F.pointerEvents || F.prefixedPointerEvents) && (i[0].style.perspectiveOrigin = l + "px 50%")
                },
                setTransition: function(e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) }
            },
            te = {
                init: function() {
                    var e = this,
                        t = e.params.thumbs,
                        n = e.constructor;
                    t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, B.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), B.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : B.isObject(t.swiper) && (e.thumbs.swiper = new n(B.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                },
                onThumbClick: function() {
                    var e = this,
                        t = e.thumbs.swiper;
                    if (t) {
                        var n = t.clickedIndex,
                            i = t.clickedSlide;
                        if (!(i && N(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == n)) {
                            var r;
                            if (r = t.params.loop ? parseInt(N(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                                var a = e.activeIndex;
                                e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, a = e.activeIndex);
                                var s = e.slides.eq(a).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                                    o = e.slides.eq(a).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                                r = void 0 === s ? o : void 0 === o ? s : o - a < a - s ? o : s
                            }
                            e.slideTo(r)
                        }
                    }
                },
                update: function(e) {
                    var t = this,
                        n = t.thumbs.swiper;
                    if (n) {
                        var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                        if (t.realIndex !== n.realIndex) {
                            var r, a = n.activeIndex;
                            if (n.params.loop) {
                                n.slides.eq(a).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, a = n.activeIndex);
                                var s = n.slides.eq(a).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                    o = n.slides.eq(a).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                                r = void 0 === s ? o : void 0 === o ? s : o - a == a - s ? a : o - a < a - s ? o : s
                            } else r = t.realIndex;
                            n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = a < r ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : a < r && (r = r - i + 1), n.slideTo(r, e ? 0 : void 0))
                        }
                        var l = 1,
                            d = t.params.thumbs.slideThumbActiveClass;
                        if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), n.slides.removeClass(d), n.params.loop)
                            for (var u = 0; u < l; u += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(d);
                        else
                            for (var c = 0; c < l; c += 1) n.slides.eq(t.realIndex + c).addClass(d)
                    }
                }
            },
            ne = [E, S, k, M, P, D, O, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function() { B.extend(this, { mousewheel: { enabled: !1, enable: $.enable.bind(this), disable: $.disable.bind(this), handle: $.handle.bind(this), handleMouseEnter: $.handleMouseEnter.bind(this), handleMouseLeave: $.handleMouseLeave.bind(this), lastScrollTime: B.now() } }) }, on: { init: function() { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function() { this.mousewheel.enabled && this.mousewheel.disable() } } }, {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function() { B.extend(this, { navigation: { init: H.init.bind(this), update: H.update.bind(this), destroy: H.destroy.bind(this), onNextClick: H.onNextClick.bind(this), onPrevClick: H.onPrevClick.bind(this) } }) },
                on: {
                    init: function() { this.navigation.init(), this.navigation.update() },
                    toEdge: function() { this.navigation.update() },
                    fromEdge: function() { this.navigation.update() },
                    destroy: function() { this.navigation.destroy() },
                    click: function(e) {
                        var t = this.navigation,
                            n = t.$nextEl,
                            i = t.$prevEl;
                        !this.params.navigation.hideOnClick || N(e.target).is(i) || N(e.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function(e) { return e }, formatFractionTotal: function(e) { return e }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() { B.extend(this, { pagination: { init: j.init.bind(this), render: j.render.bind(this), update: j.update.bind(this), destroy: j.destroy.bind(this), dynamicBulletIndex: 0 } }) }, on: { init: function() { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function() { this.params.loop || this.pagination.update() }, slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function() { this.pagination.destroy() }, click: function(e) { this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !N(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass) } } }, {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create: function() {
                    var e = this;
                    B.extend(e, { scrollbar: { init: R.init.bind(e), destroy: R.destroy.bind(e), updateSize: R.updateSize.bind(e), setTranslate: R.setTranslate.bind(e), setTransition: R.setTransition.bind(e), enableDraggable: R.enableDraggable.bind(e), disableDraggable: R.disableDraggable.bind(e), setDragPosition: R.setDragPosition.bind(e), onDragStart: R.onDragStart.bind(e), onDragMove: R.onDragMove.bind(e), onDragEnd: R.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } })
                },
                on: { init: function() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(e) { this.scrollbar.setTransition(e) }, destroy: function() { this.scrollbar.destroy() } }
            }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { B.extend(this, { parallax: { setTransform: q.setTransform.bind(this), setTranslate: q.setTranslate.bind(this), setTransition: q.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, init: function() { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax && this.parallax.setTranslate() }, setTransition: function(e) { this.params.parallax && this.parallax.setTransition(e) } } }, {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create: function() {
                    var t = this,
                        n = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) { n[e] = V[e].bind(t) }), B.extend(t, { zoom: n })
                },
                on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(e) { this.zoom.enabled && this.zoom.onTouchStart(e) }, touchEnd: function(e) { this.zoom.enabled && this.zoom.onTouchEnd(e) }, doubleTap: function(e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } }
            }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() { B.extend(this, { lazy: { initialImageLoaded: !1, load: G.load.bind(this), loadInSlide: G.loadInSlide.bind(this) } }) }, on: { beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function() { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function() { this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load() }, transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function() { B.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: X.getInterpolateFunction.bind(this), setTranslate: X.setTranslate.bind(this), setTransition: X.setTransition.bind(this) } }) }, on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(e, t) { this.controller.control && this.controller.setTranslate(e, t) }, setTransition: function(e, t) { this.controller.control && this.controller.setTransition(e, t) } } }, {
                name: "a11y",
                params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
                create: function() {
                    var t = this;
                    B.extend(t, { a11y: { liveRegion: N('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(W).forEach(function(e) { t.a11y[e] = W[e].bind(t) })
                },
                on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } }
            }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function() { B.extend(this, { history: { init: Y.init.bind(this), setHistory: Y.setHistory.bind(this), setHistoryPopState: Y.setHistoryPopState.bind(this), scrollToSlide: Y.scrollToSlide.bind(this), destroy: Y.destroy.bind(this) } }) }, on: { init: function() { this.params.history.enabled && this.history.init() }, destroy: function() { this.params.history.enabled && this.history.destroy() }, transitionEnd: function() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function() { B.extend(this, { hashNavigation: { initialized: !1, init: U.init.bind(this), destroy: U.destroy.bind(this), setHash: U.setHash.bind(this), onHashCange: U.onHashCange.bind(this) } }) }, on: { init: function() { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function() { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function() { this.hashNavigation.initialized && this.hashNavigation.setHash() } } }, {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create: function() {
                    var t = this;
                    B.extend(t, { autoplay: { running: !1, paused: !1, run: K.run.bind(t), start: K.start.bind(t), stop: K.stop.bind(t), pause: K.pause.bind(t), onTransitionEnd: function(e) { t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) } } })
                },
                on: { init: function() { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function(e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function() { this.autoplay.running && this.autoplay.stop() } }
            }, {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function() { B.extend(this, { fadeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            B.extend(this.params, e), B.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() },
                    setTransition: function(e) { "fade" === this.params.effect && this.fadeEffect.setTransition(e) }
                }
            }, {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } },
                create: function() { B.extend(this, { cubeEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            B.extend(this.params, e), B.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() },
                    setTransition: function(e) { "cube" === this.params.effect && this.cubeEffect.setTransition(e) }
                }
            }, {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function() { B.extend(this, { flipEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            B.extend(this.params, e), B.extend(this.originalParams, e)
                        }
                    },
                    setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() },
                    setTransition: function(e) { "flip" === this.params.effect && this.flipEffect.setTransition(e) }
                }
            }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { B.extend(this, { coverflowEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } }) }, on: { beforeInit: function() { "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(e) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e) } } }, {
                name: "thumbs",
                params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create: function() { B.extend(this, { thumbs: { swiper: null, init: te.init.bind(this), update: te.update.bind(this), onThumbClick: te.onThumbClick.bind(this) } }) },
                on: {
                    beforeInit: function() {
                        var e = this.params.thumbs;
                        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                    },
                    slideChange: function() { this.thumbs.swiper && this.thumbs.update() },
                    update: function() { this.thumbs.swiper && this.thumbs.update() },
                    resize: function() { this.thumbs.swiper && this.thumbs.update() },
                    observerUpdate: function() { this.thumbs.swiper && this.thumbs.update() },
                    setTransition: function(e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e)
                    },
                    beforeDestroy: function() {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy()
                    }
                }
            }];
        return void 0 === C.use && (C.use = C.Class.use, C.installModule = C.Class.installModule), C.use(ne), C
    });
var DecorationsT, JobT, SourceSpansT, _extends = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e },
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e, t) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t() }(this, function() {
    "use strict";

    function i(e, t, n) {
        var i, r, a, s, o, l, d, u = t._settings;
        !n && h(e) || (w(u.callback_enter, e), -1 < E.indexOf(e.tagName) && (r = t, a = function e(t) { C(t, !0, r), T(i, e, s) }, d = s = function e(t) { C(t, !1, r), T(i, a, e) }, x(o = i = e, "load", l = a), x(o, "loadeddata", l), x(o, "error", d), b(e, u.class_loading)), function(e, t) {
            var n = t._settings,
                i = e.tagName,
                r = y[i];
            if (r) return r(e, n), t._updateLoadingCount(1), t._elements = (a = t._elements, s = e, a.filter(function(e) { return e !== s }));
            var a, s;
            ! function(e, t) {
                var n = v && t.to_webp,
                    i = c(e, t.data_src),
                    r = c(e, t.data_bg);
                if (i) {
                    var a = f(i, n);
                    e.style.backgroundImage = 'url("' + a + '")'
                }
                if (r) {
                    var s = f(r, n);
                    e.style.backgroundImage = s
                }
            }(e, n)
        }(e, t), p(e, "was-processed", "true"), w(u.callback_set, e))
    }
    var e, n = { elements_selector: "img", container: document, threshold: 300, thresholds: null, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", class_loading: "loading", class_loaded: "loaded", class_error: "error", load_delay: 0, callback_load: null, callback_error: null, callback_set: null, callback_enter: null, callback_finish: null, to_webp: !1 },
        c = function(e, t) { return e.getAttribute("data-" + t) },
        p = function(e, t, n) {
            var i = "data-" + t;
            null !== n ? e.setAttribute(i, n) : e.removeAttribute(i)
        },
        h = function(e) { return "true" === c(e, "was-processed") },
        d = function(e, t) { return p(e, "ll-timeout", t) },
        u = function(e) { return c(e, "ll-timeout") },
        r = function(e, t) {
            var n, i = new e(t);
            try { n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: i } }) } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: i })
            }
            window.dispatchEvent(n)
        },
        f = function(e, t) { return t ? e.replace(/\.(jpe?g|png)/gi, ".webp") : e },
        t = "undefined" != typeof window,
        a = t && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        s = t && "IntersectionObserver" in window,
        m = t && "classList" in document.createElement("p"),
        v = t && (!(!(e = document.createElement("canvas")).getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")),
        l = function(e, t, n, i) {
            for (var r, a = 0; r = e.children[a]; a += 1)
                if ("SOURCE" === r.tagName) {
                    var s = c(r, n);
                    g(r, t, s, i)
                }
        },
        g = function(e, t, n, i) { n && e.setAttribute(t, f(n, i)) },
        y = {
            IMG: function(e, t) {
                var n = v && t.to_webp,
                    i = t.data_srcset,
                    r = e.parentNode;
                r && "PICTURE" === r.tagName && l(r, "srcset", i, n);
                var a = c(e, t.data_sizes);
                g(e, "sizes", a);
                var s = c(e, i);
                g(e, "srcset", s, n);
                var o = c(e, t.data_src);
                g(e, "src", o, n)
            },
            IFRAME: function(e, t) {
                var n = c(e, t.data_src);
                g(e, "src", n)
            },
            VIDEO: function(e, t) {
                var n = t.data_src,
                    i = c(e, n);
                l(e, "src", n), g(e, "src", i), e.load()
            }
        },
        b = function(e, t) { m ? e.classList.add(t) : e.className += (e.className ? " " : "") + t },
        w = function(e, t) { e && e(t) },
        x = function(e, t, n) { e.addEventListener(t, n) },
        o = function(e, t, n) { e.removeEventListener(t, n) },
        T = function(e, t, n) { o(e, "load", t), o(e, "loadeddata", t), o(e, "error", n) },
        C = function(e, t, n) {
            var i, r, a = n._settings,
                s = t ? a.class_loaded : a.class_error,
                o = t ? a.callback_load : a.callback_error,
                l = e.target;
            i = l, r = a.class_loading, m ? i.classList.remove(r) : i.className = i.className.replace(new RegExp("(^|\\s+)" + r + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""), b(l, s), w(o, l), n._updateLoadingCount(-1)
        },
        E = ["IMG", "IFRAME", "VIDEO"],
        S = function(e, t, n) { i(e, n), t.unobserve(e) },
        k = function(e) {
            var t = u(e);
            t && (clearTimeout(t), d(e, null))
        },
        M = function(e) { return e.isIntersecting || 0 < e.intersectionRatio },
        L = function(e, t) { this._settings = _extends({}, n, e), this._setObserver(), this._loadingCount = 0, this.update(t) };
    return L.prototype = {
        _manageIntersection: function(e) {
            var t, n, i, r, a, s = this._observer,
                o = this._settings.load_delay,
                l = e.target;
            o ? M(e) ? (t = l, n = s, r = (i = this)._settings.load_delay, (a = u(t)) || (a = setTimeout(function() { S(t, n, i), k(t) }, r), d(t, a))) : k(l) : M(e) && S(l, s, this)
        },
        _onIntersection: function(e) { e.forEach(this._manageIntersection.bind(this)) },
        _setObserver: function() {
            var e;
            s && (this._observer = new IntersectionObserver(this._onIntersection.bind(this), { root: (e = this._settings).container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px" }))
        },
        _updateLoadingCount: function(e) { this._loadingCount += e, 0 === this._elements.length && 0 === this._loadingCount && w(this._settings.callback_finish) },
        update: function(e) {
            var t = this,
                n = this._settings,
                i = e || n.container.querySelectorAll(n.elements_selector);
            this._elements = Array.prototype.slice.call(i).filter(function(e) { return !h(e) }), !a && this._observer ? this._elements.forEach(function(e) { t._observer.observe(e) }) : this.loadAll()
        },
        destroy: function() {
            var t = this;
            this._observer && (this._elements.forEach(function(e) { t._observer.unobserve(e) }), this._observer = null), this._elements = null, this._settings = null
        },
        load: function(e, t) { i(e, this, t) },
        loadAll: function() {
            var t = this;
            this._elements.forEach(function(e) { t.load(e) })
        }
    }, t && function(e, t) {
        if (t)
            if (t.length)
                for (var n, i = 0; n = t[i]; i += 1) r(e, n);
            else r(e, t)
    }(L, window.lazyLoadOptions), L
}),
function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(l) {
    var i = -1,
        r = -1,
        d = function(e) { return parseFloat(e) || 0 },
        u = function(e) {
            var t = l(e),
                i = null,
                r = [];
            return t.each(function() {
                var e = l(this),
                    t = e.offset().top - d(e.css("margin-top")),
                    n = 0 < r.length ? r[r.length - 1] : null;
                null === n ? r.push(e) : Math.floor(Math.abs(i - t)) <= 1 ? r[r.length - 1] = n.add(e) : r.push(e), i = t
            }), r
        },
        c = function(e) { var t = { byRow: !0, property: "height", target: null, remove: !1 }; return "object" == typeof e ? l.extend(t, e) : ("boolean" == typeof e ? t.byRow = e : "remove" === e && (t.remove = !0), t) },
        p = l.fn.matchHeight = function(e) { var t = c(e); if (t.remove) { var n = this; return this.css(t.property, ""), l.each(p._groups, function(e, t) { t.elements = t.elements.not(n) }), this } return this.length <= 1 && !t.target || (p._groups.push({ elements: this, options: t }), p._apply(this, t)), this };
    p.version = "0.7.2", p._groups = [], p._throttle = 80, p._maintainScroll = !1, p._beforeUpdate = null, p._afterUpdate = null, p._rows = u, p._parse = d, p._parseOptions = c, p._apply = function(e, t) {
        var a = c(t),
            n = l(e),
            i = [n],
            r = l(window).scrollTop(),
            s = l("html").outerHeight(!0),
            o = n.parents().filter(":hidden");
        return o.each(function() {
            var e = l(this);
            e.data("style-cache", e.attr("style"))
        }), o.css("display", "block"), a.byRow && !a.target && (n.each(function() {
            var e = l(this),
                t = e.css("display");
            "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block"), e.data("style-cache", e.attr("style")), e.css({ display: t, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" })
        }), i = u(n), n.each(function() {
            var e = l(this);
            e.attr("style", e.data("style-cache") || "")
        })), l.each(i, function(e, t) {
            var n = l(t),
                r = 0;
            if (a.target) r = a.target.outerHeight(!1);
            else {
                if (a.byRow && n.length <= 1) return void n.css(a.property, "");
                n.each(function() {
                    var e = l(this),
                        t = e.attr("style"),
                        n = e.css("display");
                    "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                    var i = { display: n };
                    i[a.property] = "", e.css(i), e.outerHeight(!1) > r && (r = e.outerHeight(!1)), t ? e.attr("style", t) : e.css("display", "")
                })
            }
            n.each(function() {
                var e = l(this),
                    t = 0;
                a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (t += d(e.css("border-top-width")) + d(e.css("border-bottom-width")), t += d(e.css("padding-top")) + d(e.css("padding-bottom"))), e.css(a.property, r - t + "px"))
            })
        }), o.each(function() {
            var e = l(this);
            e.attr("style", e.data("style-cache") || null)
        }), p._maintainScroll && l(window).scrollTop(r / s * l("html").outerHeight(!0)), this
    }, p._applyDataApi = function() {
        var n = {};
        l("[data-match-height], [data-mh]").each(function() {
            var e = l(this),
                t = e.attr("data-mh") || e.attr("data-match-height");
            n[t] = t in n ? n[t].add(e) : e
        }), l.each(n, function() { this.matchHeight(!0) })
    };
    var a = function(e) { p._beforeUpdate && p._beforeUpdate(e, p._groups), l.each(p._groups, function() { p._apply(this.elements, this.options) }), p._afterUpdate && p._afterUpdate(e, p._groups) };
    p._update = function(e, t) {
        if (t && "resize" === t.type) {
            var n = l(window).width();
            if (n === i) return;
            i = n
        }
        e ? -1 === r && (r = setTimeout(function() { a(t), r = -1 }, p._throttle)) : a(t)
    }, l(p._applyDataApi);
    var e = l.fn.on ? "on" : "bind";
    l(window)[e]("load", function(e) { p._update(!1, e) }), l(window)[e]("resize orientationchange", function(e) { p._update(!0, e) })
}),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery) }(this, function(f) {
    "use strict";

    function m(e, t) {
        var n = e.getBoundingClientRect(),
            i = n.top,
            r = n.bottom,
            a = n.left,
            s = n.right,
            o = f.extend({ tolerance: 0, viewport: window }, t),
            l = !1,
            d = o.viewport.jquery ? o.viewport : f(o.viewport);
        d.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), d = f(window));
        var u = d.height(),
            c = d.width(),
            p = d[0].toString();
        if (d[0] !== window && "[object Window]" !== p && "[object DOMWindow]" !== p) {
            var h = d[0].getBoundingClientRect();
            i -= h.top, r -= h.top, a -= h.left, s -= h.left, c -= m.scrollBarWidth = m.scrollBarWidth || function(e) {
                var t = f("<div></div>").css({ width: "100%" });
                e.append(t);
                var n = e.width() - t.width();
                return t.remove(), n
            }(d)
        }
        return o.tolerance = ~~Math.round(parseFloat(o.tolerance)), o.tolerance < 0 && (o.tolerance = u + o.tolerance), s <= 0 || c <= a ? l : l = o.tolerance ? i <= o.tolerance && r >= o.tolerance : 0 < r && i <= u
    }

    function i(e) { if (e) { var t = e.split(","); return 1 === t.length && isNaN(t[0]) && (t[1] = t[0], t[0] = void 0), { tolerance: t[0] ? t[0].trim() : void 0, viewport: t[1] ? f(t[1].trim()) : void 0 } } return {} }(f = f && f.hasOwnProperty("default") ? f.default : f).extend(f.expr.pseudos || f.expr[":"], { "in-viewport": f.expr.createPseudo ? f.expr.createPseudo(function(t) { return function(e) { return m(e, i(t)) } }) : function(e, t, n) { return m(e, i(n[3])) } }), f.fn.isInViewport = function(n) { return this.filter(function(e, t) { return m(t, n) }) }, f.fn.run = function(e) { var n = this; if (1 === arguments.length && "function" == typeof e && (e = [e]), !(e instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"); return e.forEach(function(t) { "function" != typeof t ? (console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on")) : [].slice.call(n).forEach(function(e) { return t.call(f(e)) }) }), this }
}),
function(e, t) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
        var n = { exports: {} };
        t(n, n.exports), e.autosize = n.exports
    }
}(this, function(e, t) {
    "use strict";
    var n, i, c = "function" == typeof Map ? new Map : (n = [], i = [], { has: function(e) { return -1 < n.indexOf(e) }, get: function(e) { return i[n.indexOf(e)] }, set: function(e, t) {-1 === n.indexOf(e) && (n.push(e), i.push(t)) }, delete: function(e) { var t = n.indexOf(e); - 1 < t && (n.splice(t, 1), i.splice(t, 1)) } }),
        p = function(e) { return new Event(e, { bubbles: !0 }) };
    try { new Event("test") } catch (e) { p = function(e) { var t = document.createEvent("Event"); return t.initEvent(e, !0, !1), t } }

    function r(e) {
        var t = c.get(e);
        t && t.destroy()
    }

    function a(e) {
        var t = c.get(e);
        t && t.update()
    }
    var s = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((s = function(e) { return e }).destroy = function(e) { return e }, s.update = function(e) { return e }) : ((s = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
            return function(r) {
                if (r && r.nodeName && "TEXTAREA" === r.nodeName && !c.has(r)) {
                    var e, n = null,
                        i = null,
                        a = null,
                        s = function() { r.clientWidth !== i && u() },
                        o = function(t) { window.removeEventListener("resize", s, !1), r.removeEventListener("input", u, !1), r.removeEventListener("keyup", u, !1), r.removeEventListener("autosize:destroy", o, !1), r.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach(function(e) { r.style[e] = t[e] }), c.delete(r) }.bind(r, { height: r.style.height, resize: r.style.resize, overflowY: r.style.overflowY, overflowX: r.style.overflowX, wordWrap: r.style.wordWrap });
                    r.addEventListener("autosize:destroy", o, !1), "onpropertychange" in r && "oninput" in r && r.addEventListener("keyup", u, !1), window.addEventListener("resize", s, !1), r.addEventListener("input", u, !1), r.addEventListener("autosize:update", u, !1), r.style.overflowX = "hidden", r.style.wordWrap = "break-word", c.set(r, { destroy: o, update: u }), "vertical" === (e = window.getComputedStyle(r, null)).resize ? r.style.resize = "none" : "both" === e.resize && (r.style.resize = "horizontal"), n = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(n) && (n = 0), u()
                }

                function l(e) {
                    var t = r.style.width;
                    r.style.width = "0px", r.offsetWidth, r.style.width = t, r.style.overflowY = e
                }

                function d() {
                    if (0 !== r.scrollHeight) {
                        var e = function(e) { for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({ node: e.parentNode, scrollTop: e.parentNode.scrollTop }), e = e.parentNode; return t }(r),
                            t = document.documentElement && document.documentElement.scrollTop;
                        r.style.height = "", r.style.height = r.scrollHeight + n + "px", i = r.clientWidth, e.forEach(function(e) { e.node.scrollTop = e.scrollTop }), t && (document.documentElement.scrollTop = t)
                    }
                }

                function u() {
                    d();
                    var e = Math.round(parseFloat(r.style.height)),
                        t = window.getComputedStyle(r, null),
                        n = "content-box" === t.boxSizing ? Math.round(parseFloat(t.height)) : r.offsetHeight;
                    if (n < e ? "hidden" === t.overflowY && (l("scroll"), d(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight) : "hidden" !== t.overflowY && (l("hidden"), d(), n = "content-box" === t.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight), a !== n) { a = n; var i = p("autosize:resized"); try { r.dispatchEvent(i) } catch (e) {} }
                }
            }(e)
        }), e
    }).destroy = function(e) { return e && Array.prototype.forEach.call(e.length ? e : [e], r), e }, s.update = function(e) { return e && Array.prototype.forEach.call(e.length ? e : [e], a), e }), t.default = s, e.exports = t.default
});
var PR, prettyPrintOne, prettyPrint, IN_GLOBAL_SCOPE = !0,
    PR_SHOULD_USE_CONTINUATION = !0;
"undefined" != typeof window && (window.PR_SHOULD_USE_CONTINUATION = PR_SHOULD_USE_CONTINUATION),
    function() {
        var A = "undefined" != typeof window ? window : {},
            e = ["break,continue,do,else,for,if,return,while"],
            t = [
                [e, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"
            ],
            n = [t, "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            i = [t, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
            r = [t, "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],
            a = [t, "abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],
            s = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            o = [e, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            l = [e, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            d = [e, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            u = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
            c = "str",
            p = "com",
            k = "pln",
            M = "src";

        function L(e, t, n, i, r) {
            if (n) {
                var a = { sourceNode: e, pre: 1, langExtension: null, numberLines: null, sourceCode: n, spans: null, basePos: t, decorations: null };
                i(a), r.push.apply(r, a.decorations)
            }
        }
        var h = /\S/;

        function N(e) {
            for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) {
                var i = n.nodeType;
                t = 1 === i ? t ? e : n : 3 === i && h.test(n.nodeValue) ? e : t
            }
            return t === e ? void 0 : t
        }

        function f(u, x) {
            var T, C = {};
            ! function() {
                for (var e = u.concat(x), t = [], n = {}, i = 0, r = e.length; i < r; ++i) {
                    var a = e[i],
                        s = a[3];
                    if (s)
                        for (var o = s.length; 0 <= --o;) C[s.charAt(o)] = a;
                    var l = a[1],
                        d = "" + l;
                    n.hasOwnProperty(d) || (t.push(l), n[d] = null)
                }
                t.push(/[\0-\uffff]/), T = function(e) {
                    for (var d = 0, u = !1, t = !1, n = 0, i = e.length; n < i; ++n)
                        if ((o = e[n]).ignoreCase) t = !0;
                        else if (/[a-z]/i.test(o.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) { t = !(u = !0); break }
                    var r = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 };

                    function h(e) { var t = e.charCodeAt(0); if (92 !== t) return t; var n = e.charAt(1); return (t = r[n]) || ("0" <= n && n <= "7" ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1)) }

                    function f(e) { if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16); var t = String.fromCharCode(e); return "\\" === t || "-" === t || "]" === t || "^" === t ? "\\" + t : t }

                    function c(e) {
                        var t = e.substring(1, e.length - 1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")),
                            n = [],
                            i = "^" === t[0],
                            r = ["["];
                        i && r.push("^");
                        for (var a = i ? 1 : 0, s = t.length; a < s; ++a) {
                            var o = t[a];
                            if (/\\[bdsw]/i.test(o)) r.push(o);
                            else {
                                var l, d = h(o);
                                a + 2 < s && "-" === t[a + 1] ? (l = h(t[a + 2]), a += 2) : l = d, n.push([d, l]), l < 65 || 122 < d || (l < 65 || 90 < d || n.push([32 | Math.max(65, d), 32 | Math.min(l, 90)]), l < 97 || 122 < d || n.push([-33 & Math.max(97, d), -33 & Math.min(l, 122)]))
                            }
                        }
                        n.sort(function(e, t) { return e[0] - t[0] || t[1] - e[1] });
                        var u = [],
                            c = [];
                        for (a = 0; a < n.length; ++a)(p = n[a])[0] <= c[1] + 1 ? c[1] = Math.max(c[1], p[1]) : u.push(c = p);
                        for (a = 0; a < u.length; ++a) {
                            var p = u[a];
                            r.push(f(p[0])), p[1] > p[0] && (p[1] + 1 > p[0] && r.push("-"), r.push(f(p[1])))
                        }
                        return r.push("]"), r.join("")
                    }

                    function a(e) {
                        for (var t = e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), n = t.length, i = [], r = 0, a = 0; r < n; ++r) "(" === (o = t[r]) ? ++a : "\\" === o.charAt(0) && (s = +o.substring(1)) && (s <= a ? i[s] = -1 : t[r] = f(s));
                        for (r = 1; r < i.length; ++r) - 1 === i[r] && (i[r] = ++d);
                        for (a = r = 0; r < n; ++r)
                            if ("(" === (o = t[r])) i[++a] || (t[r] = "(?:");
                            else if ("\\" === o.charAt(0)) {
                            var s;
                            (s = +o.substring(1)) && s <= a && (t[r] = "\\" + i[s])
                        }
                        for (r = 0; r < n; ++r) "^" === t[r] && "^" !== t[r + 1] && (t[r] = "");
                        if (e.ignoreCase && u)
                            for (r = 0; r < n; ++r) {
                                var o, l = (o = t[r]).charAt(0);
                                2 <= o.length && "[" === l ? t[r] = c(o) : "\\" !== l && (t[r] = o.replace(/[a-zA-Z]/g, function(e) { var t = e.charCodeAt(0); return "[" + String.fromCharCode(-33 & t, 32 | t) + "]" }))
                            }
                        return t.join("")
                    }
                    var s = [];
                    for (n = 0, i = e.length; n < i; ++n) {
                        var o;
                        if ((o = e[n]).global || o.multiline) throw new Error("" + o);
                        s.push("(?:" + a(o) + ")")
                    }
                    return new RegExp(s.join("|"), t ? "gi" : "g")
                }(t)
            }();
            var E = x.length,
                S = function(e) {
                    for (var t = e.sourceCode, n = e.basePos, i = e.sourceNode, r = [n, k], a = 0, s = t.match(T) || [], o = {}, l = 0, d = s.length; l < d; ++l) {
                        var u, c = s[l],
                            p = o[c],
                            h = void 0;
                        if ("string" == typeof p) u = !1;
                        else {
                            var f = C[c.charAt(0)];
                            if (f) h = c.match(f[1]), p = f[0];
                            else {
                                for (var m = 0; m < E; ++m)
                                    if (f = x[m], h = c.match(f[1])) { p = f[0]; break }
                                h || (p = k)
                            }!(u = 5 <= p.length && "lang-" === p.substring(0, 5)) || h && "string" == typeof h[1] || (u = !1, p = M), u || (o[c] = p)
                        }
                        var v = a;
                        if (a += c.length, u) {
                            var g = h[1],
                                y = c.indexOf(g),
                                b = y + g.length;
                            h[2] && (y = (b = c.length - h[2].length) - g.length);
                            var w = p.substring(5);
                            L(i, n + v, c.substring(0, y), S, r), L(i, n + v + y, g, P(w, g), r), L(i, n + v + b, c.substring(b), S, r)
                        } else r.push(n + v, p)
                    }
                    e.decorations = r
                };
            return S
        }

        function m(e) {
            var t = [],
                n = [];
            e.tripleQuotedStrings ? t.push([c, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : e.multiLineStrings ? t.push([c, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : t.push([c, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]), e.verbatimStrings && n.push([c, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
            var i = e.hashComments;
            i && (e.cStyleComments ? (1 < i ? t.push([p, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : t.push([p, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), n.push([c, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : t.push([p, /^#[^\r\n]*/, null, "#"])), e.cStyleComments && (n.push([p, /^\/\/[^\r\n]*/, null]), n.push([p, /^\/\*[\s\S]*?(?:\*\/|$)/, null]));
            var r = e.regexLiterals;
            if (r) {
                var a = 1 < r ? "" : "\n\r",
                    s = a ? "." : "[\\S\\s]",
                    o = "/(?=[^/*" + a + "])(?:[^/\\x5B\\x5C" + a + "]|\\x5C" + s + "|\\x5B(?:[^\\x5C\\x5D" + a + "]|\\x5C" + s + ")*(?:\\x5D|$))+/";
                n.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + o + ")")])
            }
            var l = e.types;
            l && n.push(["typ", l]);
            var d = ("" + e.keywords).replace(/^ | $/g, "");
            d.length && n.push(["kwd", new RegExp("^(?:" + d.replace(/[\s,]+/g, "|") + ")\\b"), null]), t.push([k, /^\s+/, null, " \r\n\t "]);
            var u = "^.[^\\s\\w.$@'\"`/\\\\]*";
            return e.regexLiterals && (u += "(?!s*/)"), n.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], [k, /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"), null, "0123456789"], [k, /^\\[\s\S]?/, null], ["pun", new RegExp(u), null]), f(t, n)
        }
        var v = m({ keywords: [n, r, i, a, s, o, l, d], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 });

        function z(e, t, o) {
            for (var l = /(?:^|\s)nocode(?:\s|$)/, d = /\r\n?|\n/, u = e.ownerDocument, n = u.createElement("li"); e.firstChild;) n.appendChild(e.firstChild);
            var i = [n];

            function c(e) {
                var t = e.nodeType;
                if (1 != t || l.test(e.className)) {
                    if ((3 == t || 4 == t) && o) {
                        var n = e.nodeValue,
                            i = n.match(d);
                        if (i) {
                            var r = n.substring(0, i.index);
                            e.nodeValue = r;
                            var a = n.substring(i.index + i[0].length);
                            if (a) e.parentNode.insertBefore(u.createTextNode(a), e.nextSibling);
                            p(e), r || e.parentNode.removeChild(e)
                        }
                    }
                } else if ("br" === e.nodeName.toLowerCase()) p(e), e.parentNode && e.parentNode.removeChild(e);
                else
                    for (var s = e.firstChild; s; s = s.nextSibling) c(s)
            }

            function p(e) {
                for (; !e.nextSibling;)
                    if (!(e = e.parentNode)) return;
                for (var t, n = function e(t, n) {
                        var i = n ? t.cloneNode(!1) : t,
                            r = t.parentNode;
                        if (r) {
                            var a = e(r, 1),
                                s = t.nextSibling;
                            a.appendChild(i);
                            for (var o = s; o; o = s) s = o.nextSibling, a.appendChild(o)
                        }
                        return i
                    }(e.nextSibling, 0);
                    (t = n.parentNode) && 1 === t.nodeType;) n = t;
                i.push(n)
            }
            for (var r = 0; r < i.length; ++r) c(i[r]);
            t === (0 | t) && i[0].setAttribute("value", t);
            var a = u.createElement("ol");
            a.className = "linenums";
            for (var s = Math.max(0, t - 1 | 0) || 0, h = (r = 0, i.length); r < h; ++r)(n = i[r]).className = "L" + (r + s) % 10, n.firstChild || n.appendChild(u.createTextNode(" ")), a.appendChild(n);
            e.appendChild(a)
        }
        var g = {};

        function y(e, t) {
            for (var n = t.length; 0 <= --n;) {
                var i = t[n];
                g.hasOwnProperty(i) ? A.console && console.warn("cannot override language handler %s", i) : g[i] = e
            }
        }

        function P(e, t) { return e && g.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), g[e] }

        function D(e) {
            var t, s, o, l, d, u, c, n = e.langExtension;
            try {
                var i = (t = e.sourceNode, s = e.pre, o = /(?:^|\s)nocode(?:\s|$)/, l = [], u = [], c = d = 0, function e(t) {
                        var n = t.nodeType;
                        if (1 == n) { if (o.test(t.className)) return; for (var i = t.firstChild; i; i = i.nextSibling) e(i); var r = t.nodeName.toLowerCase(); "br" !== r && "li" !== r || (l[c] = "\n", u[c << 1] = d++, u[c++ << 1 | 1] = t) } else if (3 == n || 4 == n) {
                            var a = t.nodeValue;
                            a.length && (a = s ? a.replace(/\r\n?/g, "\n") : a.replace(/[ \t\r\n]+/g, " "), l[c] = a, u[c << 1] = d, d += a.length, u[c++ << 1 | 1] = t)
                        }
                    }(t), { sourceCode: l.join("").replace(/\n$/, ""), spans: u }),
                    r = i.sourceCode;
                e.sourceCode = r, e.spans = i.spans, e.basePos = 0, P(n, r)(e),
                    function(e) {
                        var t = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
                        t = t && +t[1] <= 8;
                        var n, i, r = /\n/g,
                            a = e.sourceCode,
                            s = a.length,
                            o = 0,
                            l = e.spans,
                            d = l.length,
                            u = 0,
                            c = e.decorations,
                            p = c.length,
                            h = 0;
                        for (c[p] = s, i = n = 0; i < p;) c[i] !== c[i + 2] ? (c[n++] = c[i++], c[n++] = c[i++]) : i += 2;
                        for (p = n, i = n = 0; i < p;) {
                            for (var f = c[i], m = c[i + 1], v = i + 2; v + 2 <= p && c[v + 1] === m;) v += 2;
                            c[n++] = f, c[n++] = m, i = v
                        }
                        p = c.length = n;
                        var g = e.sourceNode,
                            y = "";
                        g && (y = g.style.display, g.style.display = "none");
                        try {
                            for (; u < d;) {
                                l[u];
                                var b, w = l[u + 2] || s,
                                    x = c[h + 2] || s,
                                    T = (v = Math.min(w, x), l[u + 1]);
                                if (1 !== T.nodeType && (b = a.substring(o, v))) {
                                    t && (b = b.replace(r, "\r")), T.nodeValue = b;
                                    var C = T.ownerDocument,
                                        E = C.createElement("span");
                                    E.className = c[h + 1];
                                    var S = T.parentNode;
                                    S.replaceChild(E, T), E.appendChild(T), o < w && (l[u + 1] = T = C.createTextNode(a.substring(v, w)), S.insertBefore(T, E.nextSibling))
                                }
                                w <= (o = v) && (u += 2), x <= o && (h += 2)
                            }
                        } finally { g && (g.style.display = y) }
                    }(e)
            } catch (e) { A.console && console.log(e && e.stack || e) }
        }

        function b(e, t, n) {
            var i = n || !1,
                r = t || null,
                a = document.createElement("div");
            return a.innerHTML = "<pre>" + e + "</pre>", a = a.firstChild, i && z(a, i, !0), D({ langExtension: r, numberLines: i, sourceNode: a, pre: 1, sourceCode: null, basePos: null, spans: null, decorations: null }), a.innerHTML
        }

        function w(y, e) {
            var t = e || document.body,
                b = t.ownerDocument || document;

            function n(e) { return t.getElementsByTagName(e) }
            for (var i = [n("pre"), n("code"), n("xmp")], w = [], r = 0; r < i.length; ++r)
                for (var a = 0, s = i[r].length; a < s; ++a) w.push(i[r][a]);
            i = null;
            var x = Date;
            x.now || (x = { now: function() { return +new Date } });
            var T = 0,
                C = /\blang(?:uage)?-([\w.]+)(?!\S)/,
                E = /\bprettyprint\b/,
                S = /\bprettyprinted\b/,
                k = /pre|xmp/i,
                M = /^code$/i,
                L = /^(?:pre|code|xmp)$/i,
                P = {};
            ! function e() {
                for (var t = A.PR_SHOULD_USE_CONTINUATION ? x.now() + 250 : 1 / 0; T < w.length && x.now() < t; T++) {
                    for (var n = w[T], i = P, r = n; r = r.previousSibling;) {
                        var a = r.nodeType,
                            s = (7 === a || 8 === a) && r.nodeValue;
                        if (s ? !/^\??prettify\b/.test(s) : 3 !== a || /\S/.test(r.nodeValue)) break;
                        if (s) { i = {}, s.replace(/\b(\w+)=([\w:.%+-]+)/g, function(e, t, n) { i[t] = n }); break }
                    }
                    var o = n.className;
                    if ((i !== P || E.test(o)) && !S.test(o)) {
                        for (var l = !1, d = n.parentNode; d; d = d.parentNode) { var u = d.tagName; if (L.test(u) && d.className && E.test(d.className)) { l = !0; break } }
                        if (!l) {
                            n.className += " prettyprinted";
                            var c, p, h = i.lang;
                            if (h || (!(h = o.match(C)) && (c = N(n)) && M.test(c.tagName) && (h = c.className.match(C)), h && (h = h[1])), k.test(n.tagName)) p = 1;
                            else {
                                var f = n.currentStyle,
                                    m = b.defaultView,
                                    v = f ? f.whiteSpace : m && m.getComputedStyle ? m.getComputedStyle(n, null).getPropertyValue("white-space") : 0;
                                p = v && "pre" === v.substring(0, 3)
                            }
                            var g = i.linenums;
                            (g = "true" === g || +g) || (g = !!(g = o.match(/\blinenums\b(?::(\d+))?/)) && (!g[1] || !g[1].length || +g[1])), g && z(n, g, p), D({ langExtension: h, sourceNode: n, numberLines: g, pre: p, sourceCode: null, basePos: null, spans: null, decorations: null })
                        }
                    }
                }
                T < w.length ? A.setTimeout(e, 250) : "function" == typeof y && y()
            }()
        }
        y(v, ["default-code"]), y(f([], [
            [k, /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            [p, /^<\!--[\s\S]*?(?:-\->|$)/],
            ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
            ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
            ["pun", /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
        ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), y(f([
            [k, /^[\s]+/, null, " \t\r\n"],
            ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]
        ], [
            ["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
            ["pun", /^[=<>\/]+/],
            ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
            ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
            ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
            ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
            ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
            ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]
        ]), ["in.tag"]), y(f([], [
            ["atv", /^[\s\S]+/]
        ]), ["uq.val"]), y(m({ keywords: n, hashComments: !0, cStyleComments: !0, types: u }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), y(m({ keywords: "null,true,false" }), ["json"]), y(m({ keywords: r, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: u }), ["cs"]), y(m({ keywords: i, cStyleComments: !0 }), ["java"]), y(m({ keywords: d, hashComments: !0, multiLineStrings: !0 }), ["bash", "bsh", "csh", "sh"]), y(m({ keywords: o, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py", "python"]), y(m({ keywords: s, hashComments: !0, multiLineStrings: !0, regexLiterals: 2 }), ["perl", "pl", "pm"]), y(m({ keywords: l, hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb", "ruby"]), y(m({ keywords: a, cStyleComments: !0, regexLiterals: !0 }), ["javascript", "js", "ts", "typescript"]), y(m({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]), y(f([], [
            [c, /^[\s\S]+/]
        ]), ["regex"]);
        var x = A.PR = { createSimpleLexer: f, registerLangHandler: y, sourceDecorator: m, PR_ATTRIB_NAME: "atn", PR_ATTRIB_VALUE: "atv", PR_COMMENT: p, PR_DECLARATION: "dec", PR_KEYWORD: "kwd", PR_LITERAL: "lit", PR_NOCODE: "nocode", PR_PLAIN: k, PR_PUNCTUATION: "pun", PR_SOURCE: M, PR_STRING: c, PR_TAG: "tag", PR_TYPE: "typ", prettyPrintOne: IN_GLOBAL_SCOPE ? A.prettyPrintOne = b : prettyPrintOne = b, prettyPrint: IN_GLOBAL_SCOPE ? A.prettyPrint = w : prettyPrint = w },
            T = A.define;
        "function" == typeof T && T.amd && T("google-code-prettify", [], function() { return x })
    }();