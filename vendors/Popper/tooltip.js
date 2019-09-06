! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("popper.js")) : "function" == typeof define && define.amd ? define(["popper.js"], e) : (t = t || self).tippy = e(t.Popper) }(this, function(t) { "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;

    function e() { return (e = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var a = arguments[e]; for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]) } return t }).apply(this, arguments) } var a = "undefined" != typeof window,
        r = a && /MSIE |Trident\//.test(navigator.userAgent),
        n = a && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream,
        i = { a11y: !0, allowHTML: !0, animateFill: !0, animation: "shift-away", appendTo: function() { return document.body }, aria: "describedby", arrow: !1, arrowType: "sharp", boundary: "scrollParent", content: "", delay: [0, 20], distance: 10, duration: [325, 275], flip: !0, flipBehavior: "flip", flipOnUpdate: !1, followCursor: !1, hideOnClick: !0, ignoreAttributes: !1, inertia: !1, interactive: !1, interactiveBorder: 2, interactiveDebounce: 0, lazy: !0, maxWidth: 350, multiple: !1, offset: 0, onHidden: function() {}, onHide: function() {}, onMount: function() {}, onShow: function() {}, onShown: function() {}, placement: "top", popperOptions: {}, role: "tooltip", showOnInit: !1, size: "regular", sticky: !1, target: "", theme: "dark", touch: !0, touchHold: !1, trigger: "mouseenter focus", updateDuration: 0, wait: null, zIndex: 9999 },
        p = ["arrow", "arrowType", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"],
        o = { POPPER: ".tippy-popper", TOOLTIP: ".tippy-tooltip", CONTENT: ".tippy-content", BACKDROP: ".tippy-backdrop", ARROW: ".tippy-arrow", ROUND_ARROW: ".tippy-roundarrow" },
        s = a ? Element.prototype : {},
        l = s.matches || s.matchesSelector || s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector;

    function c(t) { return [].slice.call(t) }

    function d(t, e) { return (s.closest || function(t) { for (var e = this; e;) { if (l.call(e, t)) return e;
                e = e.parentElement } }).call(t, e) }

    function f(t, e) { for (; t;) { if (e(t)) return t;
            t = t.parentElement } }

    function m(t) { return "[object Object]" === {}.toString.call(t) }

    function u(t, e) { return {}.hasOwnProperty.call(t, e) }

    function b(t, e, a) { if (Array.isArray(t)) { var r = t[e]; return null == r ? a : r } return t }

    function y(t, e) { var a; return function() { var r = this,
                n = arguments;
            clearTimeout(a), a = setTimeout(function() { return t.apply(r, n) }, e) } }

    function h(t, e) { return t && t.modifiers && t.modifiers[e] }

    function v(t, e) { return t.indexOf(e) > -1 }

    function x(t) { return m(t) || t instanceof Element }

    function w(t, e) { return "function" == typeof t ? t.apply(null, e) : t }

    function g(t, e) { t.filter(function(t) { return "flip" === t.name })[0].enabled = e }

    function k() { return document.createElement("div") }

    function E(t, e) { t.innerHTML = e instanceof Element ? e.innerHTML : e }

    function A(t, e) { e.content instanceof Element ? (E(t, ""), t.appendChild(e.content)) : t[e.allowHTML ? "innerHTML" : "textContent"] = e.content }

    function C(t) { return { tooltip: t.querySelector(o.TOOLTIP), backdrop: t.querySelector(o.BACKDROP), content: t.querySelector(o.CONTENT), arrow: t.querySelector(o.ARROW) || t.querySelector(o.ROUND_ARROW) } }

    function O(t) { t.setAttribute("data-inertia", "") }

    function X(t) { var e = k(); return "round" === t ? (e.className = "tippy-roundarrow", E(e, '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')) : e.className = "tippy-arrow", e }

    function Y() { var t = k(); return t.className = "tippy-backdrop", t.setAttribute("data-state", "hidden"), t }

    function L(t, e) { t.setAttribute("tabindex", "-1"), e.setAttribute("data-interactive", "") }

    function T(t, e) { t.forEach(function(t) { t && (t.style.transitionDuration = "".concat(e, "ms")) }) }

    function I(t, e, a) { t[e + "EventListener"]("transitionend", a) }

    function S(t) { var e = t.getAttribute("x-placement"); return e ? e.split("-")[0] : "" }

    function P(t, e) { t.forEach(function(t) { t && t.setAttribute("data-state", e) }) }

    function z(t, e, a) { a.split(" ").forEach(function(a) { t.classList[e](a + "-theme") }) }

    function H() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.checkHideOnClick,
            a = t.exclude,
            r = t.duration;
        c(document.querySelectorAll(o.POPPER)).forEach(function(t) { var n = t._tippy;!n || e && !0 !== n.props.hideOnClick || a && t === a.popper || n.hide(r) }) }

    function M(t, e) { return -(t - e) + "px" } var _ = { passive: !0 },
        D = 3,
        N = !1;

    function R() { N || (N = !0, n && document.body.classList.add("tippy-iOS"), window.performance && document.addEventListener("mousemove", W)) } var V = 0;

    function W() { var t = performance.now();
        t - V < 20 && (N = !1, document.removeEventListener("mousemove", W), n || document.body.classList.remove("tippy-iOS")), V = t }

    function B(t) { var e = t.target; if (!(e instanceof Element)) return H(); var a = d(e, o.POPPER); if (!(a && a._tippy && a._tippy.props.interactive)) { var r = f(e, function(t) { return t._tippy && t._tippy.reference === t }); if (r) { var n = r._tippy,
                    i = v(n.props.trigger, "click"); if (N || i) return H({ exclude: n, checkHideOnClick: !0 }); if (!0 !== n.props.hideOnClick || i) return;
                n.clearDelayTimeouts() }
            H({ checkHideOnClick: !0 }) } }

    function U() { var t = document.activeElement;
        t && t.blur && t._tippy && t.blur() } var q = Object.keys(i);

    function j(t, a) { var r = e({}, a, { content: w(a.content, [t]) }, a.ignoreAttributes ? {} : function(t) { return q.reduce(function(e, a) { var r = (t.getAttribute("data-tippy-".concat(a)) || "").trim(); if (!r) return e; if ("content" === a) e[a] = r;
                else try { e[a] = JSON.parse(r) } catch (t) { e[a] = r }
                return e }, {}) }(t)); return r.arrow && (r.animateFill = !1), r }

    function F() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        Object.keys(t).forEach(function(t) { if (!u(e, t)) throw new Error("[tippy]: `".concat(t, "` is not a valid option")) }) } var K = 1;

    function J(a, n) { var s = j(a, n); if (!s.multiple && a._tippy) return null; var m = {},
            x = null,
            E = 0,
            H = 0,
            R = !1,
            V = function() {},
            W = [],
            B = s.interactiveDebounce > 0 ? y(it, s.interactiveDebounce) : it,
            U = null,
            q = K++,
            G = function(t, e) { var a = k();
                a.className = "tippy-popper", a.id = "tippy-".concat(t), a.style.zIndex = e.zIndex, e.role && a.setAttribute("role", e.role); var r = k();
                r.className = "tippy-tooltip", r.style.maxWidth = e.maxWidth + ("number" == typeof e.maxWidth ? "px" : ""), r.setAttribute("data-size", e.size), r.setAttribute("data-animation", e.animation), r.setAttribute("data-state", "hidden"), z(r, "add", e.theme); var n = k(); return n.className = "tippy-content", n.setAttribute("data-state", "hidden"), e.interactive && L(a, r), e.arrow && r.appendChild(X(e.arrowType)), e.animateFill && (r.appendChild(Y()), r.setAttribute("data-animatefill", "")), e.inertia && O(r), A(n, e), r.appendChild(n), a.appendChild(r), a }(q, s);
        G.addEventListener("mouseenter", function(t) { Z.props.interactive && Z.state.isVisible && "mouseenter" === m.type && tt(t) }), G.addEventListener("mouseleave", function() { Z.props.interactive && "mouseenter" === m.type && document.addEventListener("mousemove", B) }); var Q, Z = { id: q, reference: a, popper: G, popperChildren: C(G), popperInstance: null, props: s, state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 }, clearDelayTimeouts: vt, set: xt, setContent: function(t) { xt({ content: t }) }, show: wt, hide: gt, enable: function() { Z.state.isEnabled = !0 }, disable: function() { Z.state.isEnabled = !1 }, destroy: kt }; return bt(), s.lazy || (dt(), Z.popperInstance.disableEventListeners()), s.showOnInit && tt(), s.a11y && !s.target && ((Q = a) instanceof Element && (!l.call(Q, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") || Q.hasAttribute("disabled"))) && a.setAttribute("tabindex", "0"), a._tippy = Z, G._tippy = Z, Z;

        function $(t) { var e = x = t,
                a = e.clientX,
                r = e.clientY; if (Z.popperInstance) { var n = S(Z.popper),
                    i = Z.popperChildren.arrow ? D + 16 : D,
                    p = v(["top", "bottom"], n),
                    o = v(["left", "right"], n),
                    s = p ? Math.max(i, a) : a,
                    l = o ? Math.max(i, r) : r;
                p && s > i && (s = Math.min(a, window.innerWidth - i)), o && l > i && (l = Math.min(r, window.innerHeight - i)); var c = Z.reference.getBoundingClientRect(),
                    d = Z.props.followCursor,
                    f = "horizontal" === d,
                    m = "vertical" === d;
                Z.popperInstance.reference = { getBoundingClientRect: function() { return { width: 0, height: 0, top: f ? c.top : l, bottom: f ? c.bottom : l, left: m ? c.left : s, right: m ? c.right : s } }, clientWidth: 0, clientHeight: 0 }, Z.popperInstance.scheduleUpdate(), "initial" === d && Z.state.isVisible && at() } }

        function tt(t) { if (vt(), !Z.state.isVisible) { if (Z.props.target) return function(t) { var a = d(t.target, Z.props.target);
                    a && !a._tippy && (J(a, e({}, Z.props, { content: w(n.content, [a]), appendTo: n.appendTo, target: "", showOnInit: !0 })), tt(t)) }(t); if (R = !0, Z.props.wait) return Z.props.wait(Z, t);
                ft() && !Z.state.isMounted && document.addEventListener("mousemove", $); var a = b(Z.props.delay, 0, i.delay);
                a ? E = setTimeout(function() { wt() }, a) : wt() } }

        function et() { if (vt(), !Z.state.isVisible) return at();
            R = !1; var t = b(Z.props.delay, 1, i.delay);
            t ? H = setTimeout(function() { Z.state.isVisible && gt() }, t) : gt() }

        function at() { document.removeEventListener("mousemove", $), x = null }

        function rt() { document.body.removeEventListener("mouseleave", et), document.removeEventListener("mousemove", B) }

        function nt(t) { Z.state.isEnabled && !ct(t) && (Z.state.isVisible || (m = t, N && v(t.type, "mouse") && (x = t)), "click" === t.type && !1 !== Z.props.hideOnClick && Z.state.isVisible ? et() : tt(t)) }

        function it(t) { var e = f(t.target, function(t) { return t._tippy }),
                a = d(t.target, o.POPPER) === Z.popper,
                r = e === Z.reference;
            a || r || function(t, e, a, r) { if (!t) return !0; var n = a.clientX,
                    i = a.clientY,
                    p = r.interactiveBorder,
                    o = r.distance,
                    s = e.top - i > ("top" === t ? p + o : p),
                    l = i - e.bottom > ("bottom" === t ? p + o : p),
                    c = e.left - n > ("left" === t ? p + o : p),
                    d = n - e.right > ("right" === t ? p + o : p); return s || l || c || d }(S(Z.popper), Z.popper.getBoundingClientRect(), t, Z.props) && (rt(), et()) }

        function pt(t) { if (!ct(t)) return Z.props.interactive ? (document.body.addEventListener("mouseleave", et), void document.addEventListener("mousemove", B)) : void et() }

        function ot(t) { t.target === Z.reference && (Z.props.interactive && t.relatedTarget && Z.popper.contains(t.relatedTarget) || et()) }

        function st(t) { d(t.target, Z.props.target) && tt(t) }

        function lt(t) { d(t.target, Z.props.target) && et() }

        function ct(t) { var e = "ontouchstart" in window,
                a = v(t.type, "touch"),
                r = Z.props.touchHold; return e && N && r && !a || N && !r && a }

        function dt() { var a = Z.props.popperOptions,
                r = Z.popperChildren,
                n = r.tooltip,
                p = r.arrow;
            Z.popperInstance = new t(Z.reference, Z.popper, e({ placement: Z.props.placement }, a, { modifiers: e({}, a ? a.modifiers : {}, { preventOverflow: e({ boundariesElement: Z.props.boundary, padding: D }, h(a, "preventOverflow")), arrow: e({ element: p, enabled: !!p }, h(a, "arrow")), flip: e({ enabled: Z.props.flip, padding: Z.props.distance + D, behavior: Z.props.flipBehavior }, h(a, "flip")), offset: e({ offset: Z.props.offset }, h(a, "offset")) }), onCreate: function() { n.style[S(Z.popper)] = M(Z.props.distance, i.distance) }, onUpdate: function(t) { t && !Z.props.flipOnUpdate && (t.flipped && (Z.popperInstance.options.placement = t.placement), g(Z.popperInstance.modifiers, !1)); var e = n.style;
                    e.top = "", e.bottom = "", e.left = "", e.right = "", e[S(Z.popper)] = M(Z.props.distance, i.distance) } })) }

        function ft() { return Z.props.followCursor && !N && "focus" !== m.type }

        function mt(t, e) { if (0 === t) return e(); var a = Z.popperChildren.tooltip,
                r = function t(r) { r.target === a && (I(a, "remove", t), e()) };
            I(a, "remove", V), I(a, "add", r), V = r }

        function ut(t, e) { var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Z.reference.addEventListener(t, e, a), W.push({ eventType: t, handler: e, options: a }) }

        function bt() { Z.props.touchHold && !Z.props.target && (ut("touchstart", nt, _), ut("touchend", pt, _)), Z.props.trigger.trim().split(" ").forEach(function(t) { if ("manual" !== t)
                    if (Z.props.target) switch (t) {
                        case "mouseenter":
                            ut("mouseover", st), ut("mouseout", lt); break;
                        case "focus":
                            ut("focusin", st), ut("focusout", lt); break;
                        case "click":
                            ut(t, st) } else switch (ut(t, nt), t) {
                        case "mouseenter":
                            ut("mouseleave", pt); break;
                        case "focus":
                            ut(r ? "focusout" : "blur", ot) } }) }

        function yt() { W.forEach(function(t) { var e = t.eventType,
                    a = t.handler,
                    r = t.options;
                Z.reference.removeEventListener(e, a, r) }), W = [] }

        function ht() { return [Z.popperChildren.tooltip, Z.popperChildren.backdrop, Z.popperChildren.content] }

        function vt() { clearTimeout(E), clearTimeout(H) }

        function xt() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            F(t, i); var a = Z.props,
                r = j(Z.reference, e({}, Z.props, t, { ignoreAttributes: !0 }));
            r.ignoreAttributes = u(t, "ignoreAttributes") ? t.ignoreAttributes : a.ignoreAttributes, Z.props = r, (u(t, "trigger") || u(t, "touchHold")) && (yt(), bt()), u(t, "interactiveDebounce") && (rt(), B = y(it, t.interactiveDebounce)),
                function(t, e, a) { var r = C(t),
                        n = r.tooltip,
                        i = r.content,
                        p = r.backdrop,
                        o = r.arrow;
                    t.style.zIndex = a.zIndex, n.setAttribute("data-size", a.size), n.setAttribute("data-animation", a.animation), n.style.maxWidth = a.maxWidth + ("number" == typeof a.maxWidth ? "px" : ""), a.role ? t.setAttribute("role", a.role) : t.removeAttribute("role"), e.content !== a.content && A(i, a), !e.animateFill && a.animateFill ? (n.appendChild(Y()), n.setAttribute("data-animatefill", "")) : e.animateFill && !a.animateFill && (n.removeChild(p), n.removeAttribute("data-animatefill")), !e.arrow && a.arrow ? n.appendChild(X(a.arrowType)) : e.arrow && !a.arrow && n.removeChild(o), e.arrow && a.arrow && e.arrowType !== a.arrowType && n.replaceChild(X(a.arrowType), o), !e.interactive && a.interactive ? L(t, n) : e.interactive && !a.interactive && function(t, e) { t.removeAttribute("tabindex"), e.removeAttribute("data-interactive") }(t, n), !e.inertia && a.inertia ? O(n) : e.inertia && !a.inertia && function(t) { t.removeAttribute("data-inertia") }(n), e.theme !== a.theme && (z(n, "remove", e.theme), z(n, "add", a.theme)) }(Z.popper, a, r), Z.popperChildren = C(Z.popper), Z.popperInstance && (Z.popperInstance.update(), p.some(function(e) { return u(t, e) }) && (Z.popperInstance.destroy(), dt(), Z.state.isVisible || Z.popperInstance.disableEventListeners(), Z.props.followCursor && x && $(x))) }

        function wt() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b(Z.props.duration, 0, i.duration[0]); if (!Z.state.isDestroyed && Z.state.isEnabled && (!N || Z.props.touch)) return Z.reference.isVirtual || document.documentElement.contains(Z.reference) ? void(Z.reference.hasAttribute("disabled") || !1 !== Z.props.onShow(Z) && (Z.popper.style.visibility = "visible", Z.state.isVisible = !0, Z.props.interactive && Z.reference.classList.add("tippy-active"), T([Z.popper, Z.popperChildren.tooltip, Z.popperChildren.backdrop], 0), function(t) { var e = !(ft() || "initial" === Z.props.followCursor && N);
                Z.popperInstance ? (ft() || (Z.popperInstance.scheduleUpdate(), e && Z.popperInstance.enableEventListeners()), g(Z.popperInstance.modifiers, !0)) : (dt(), e || Z.popperInstance.disableEventListeners()), Z.popperInstance.reference = Z.reference; var a = Z.popperChildren.arrow; if (ft()) { a && (a.style.margin = "0"); var r = b(Z.props.delay, 0, i.delay);
                    m.type && $(r && x ? x : m) } else a && (a.style.margin = "");! function(t, e) { var a = t.popper,
                        r = t.options,
                        n = r.onCreate,
                        i = r.onUpdate;
                    r.onCreate = r.onUpdate = function() {! function(t) { t.offsetHeight }(a), e(), i(), r.onCreate = n, r.onUpdate = i } }(Z.popperInstance, t); var n = Z.props.appendTo;
                (U = "parent" === n ? Z.reference.parentNode : w(n, [Z.reference])).contains(Z.popper) || (U.appendChild(Z.popper), Z.props.onMount(Z), Z.state.isMounted = !0) }(function() { Z.state.isVisible && (ft() || Z.popperInstance.update(), N && "initial" === Z.props.followCursor && $(x), T([Z.popper], s.updateDuration), T(ht(), t), Z.popperChildren.backdrop && (Z.popperChildren.content.style.transitionDelay = Math.round(t / 12) + "ms"), Z.props.sticky && (T([Z.popper], r ? 0 : Z.props.updateDuration), function t() { Z.popperInstance && Z.popperInstance.scheduleUpdate(), Z.state.isMounted ? requestAnimationFrame(t) : T([Z.popper], 0) }()), P(ht(), "visible"), function(t, e) { mt(t, e) }(t, function() { Z.popperChildren.tooltip.classList.add("tippy-notransition"), Z.props.aria && Z.reference.setAttribute("aria-".concat(Z.props.aria), Z.popper.id), Z.props.onShown(Z), Z.state.isShown = !0 })) }))) : kt() }

        function gt() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b(Z.props.duration, 1, i.duration[1]);!Z.state.isDestroyed && Z.state.isEnabled && !1 !== Z.props.onHide(Z) && (Z.popperChildren.tooltip.classList.remove("tippy-notransition"), Z.props.interactive && Z.reference.classList.remove("tippy-active"), Z.popper.style.visibility = "hidden", Z.state.isVisible = !1, Z.state.isShown = !1, T(ht(), t), P(ht(), "hidden"), function(t, e) { mt(t, function() {!Z.state.isVisible && U && U.contains(Z.popper) && e() }) }(t, function() { R || at(), Z.props.aria && Z.reference.removeAttribute("aria-".concat(Z.props.aria)), Z.popperInstance.disableEventListeners(), Z.popperInstance.options.placement = Z.props.placement, U.removeChild(Z.popper), Z.props.onHidden(Z), Z.state.isMounted = !1 })) }

        function kt(t) { Z.state.isDestroyed || (Z.state.isMounted && gt(0), yt(), delete Z.reference._tippy, Z.props.target && t && c(Z.reference.querySelectorAll(Z.props.target)).forEach(function(t) { t._tippy && t._tippy.destroy() }), Z.popperInstance && Z.popperInstance.destroy(), Z.state.isDestroyed = !0) } } var G = !1;

    function Q(t, a) { F(a, i), G || (document.addEventListener("click", B, !0), document.addEventListener("touchstart", R, _), window.addEventListener("blur", U), G = !0); var r = e({}, i, a);
        m(t) && function(t) { var e = { isVirtual: !0, attributes: t.attributes || {}, setAttribute: function(e, a) { t.attributes[e] = a }, getAttribute: function(e) { return t.attributes[e] }, removeAttribute: function(e) { delete t.attributes[e] }, hasAttribute: function(e) { return e in t.attributes }, addEventListener: function() {}, removeEventListener: function() {}, classList: { classNames: {}, add: function(e) { t.classList.classNames[e] = !0 }, remove: function(e) { delete t.classList.classNames[e] }, contains: function(e) { return e in t.classList.classNames } } }; for (var a in e) t[a] = e[a] }(t); var n = function(t) { if (x(t)) return [t]; if (t instanceof NodeList) return c(t); if (Array.isArray(t)) return t; try { return c(document.querySelectorAll(t)) } catch (t) { return [] } }(t).reduce(function(t, e) { var a = e && J(e, r); return a && t.push(a), t }, []); return x(t) ? n[0] : n } return Q.version = "4.0.1", Q.defaults = i, Q.setDefaults = function(t) { Object.keys(t).forEach(function(e) { i[e] = t[e] }) }, Q.hideAll = H, Q.group = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = e.delay,
                r = void 0 === a ? t[0].props.delay : a,
                n = e.duration,
                i = void 0 === n ? 0 : n,
                p = !1;

            function o(t) { p = t, d() }

            function s(e) { e._originalProps.onShow(e), t.forEach(function(t) { t.set({ duration: i }), t.hide() }), o(!0) }

            function l(t) { t._originalProps.onHide(t), o(!1) }

            function c(t) { t._originalProps.onShown(t), t.set({ duration: t._originalProps.duration }) }

            function d() { t.forEach(function(t) { t.set({ onShow: s, onShown: c, onHide: l, delay: p ? [0, Array.isArray(r) ? r[1] : r] : r, duration: p ? i : t._originalProps.duration }) }) }
            t.forEach(function(t) { t._originalProps = { duration: t.props.duration, onHide: t.props.onHide, onShow: t.props.onShow, onShown: t.props.onShown } }), d() }, a && setTimeout(function() { c(document.querySelectorAll("[data-tippy]")).forEach(function(t) { var e = t.getAttribute("data-tippy");
                e && Q(t, { content: e }) }) }),
        function(t) { if (a) { var e = document.createElement("style");
                e.type = "text/css", e.textContent = t, document.head.insertBefore(e, document.head.firstChild) } }('.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 10px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px) rotateX(0);transform:perspective(700px) translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(60deg);transform:perspective(700px) translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px) rotateX(0);transform:perspective(700px) translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(-60deg);transform:perspective(700px) translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px) rotateY(0);transform:perspective(700px) translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(-60deg);transform:perspective(700px) translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px) rotateY(0);transform:perspective(700px) translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(60deg);transform:perspective(700px) translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;line-height:1.4;text-align:center;will-change:transform;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}'), Q });
//# sourceMappingURL=index.all.min.js.map