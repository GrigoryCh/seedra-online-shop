(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function o(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function a(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              r = v(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? s.top + r.y - n.clientTop : s.left + r.x - n.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, s) {
            s > 0 &&
              (f(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function y() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function b() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function S() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function w(e, t) {
            return 100 / (t - e);
          }
          function C(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function x(e, t) {
            return C(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function E(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function _(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var i = T(s, e),
              n = e[i - 1],
              r = e[i],
              o = t[i - 1],
              a = t[i];
            return o + x([n, r], s) / w(o, a);
          }
          function L(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var i = T(s, t),
              n = e[i - 1],
              r = e[i],
              o = t[i - 1];
            return E([n, r], (s - o) * w(o, t[i]));
          }
          function P(e, t, s, i) {
            if (100 === i) return i;
            var n = T(i, e),
              r = e[n - 1],
              o = e[n];
            return s
              ? i - r > (o - r) / 2
                ? o
                : r
              : t[n - 1]
              ? e[n - 1] + a(i - e[n - 1], t[n - 1])
              : i;
          }
          var A, O;
          (e.PipsMode = void 0),
            ((O = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (O.Steps = "steps"),
            (O.Positions = "positions"),
            (O.Count = "count"),
            (O.Values = "values"),
            (e.PipsType = void 0),
            ((A = e.PipsType || (e.PipsType = {}))[(A.None = -1)] = "None"),
            (A[(A.NoValue = 0)] = "NoValue"),
            (A[(A.LargeValue = 1)] = "LargeValue"),
            (A[(A.SmallValue = 2)] = "SmallValue");
          var M = (function () {
              function e(e, t, s) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([p(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = C(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  s || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var r = 1,
                    o = t[n],
                    a = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    i = s
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    o > 0;

                  )
                    (a = this.xPct[n + 1 + d] - this.xPct[n + d]),
                      t[n + d] * r + 100 - 100 * i > 100
                        ? ((l = a * i), (r = (o - 100 * i) / t[n + d]), (i = 1))
                        : ((l = ((t[n + d] * a) / 100) * r), (r = 0)),
                      s
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (o = t[n + d] * r);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = _(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return L(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = P(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var i = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        C([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        w(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(s.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            k = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            I = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            z = { tooltips: ".__tooltips", aria: ".__aria" };
          function $(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function D(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function N(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function q(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function B(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new M(t, e.snap || !1, e.singleStep);
          }
          function j(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function W(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function H(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function V(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function R(e, t) {
            var s,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function F(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function G(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function U(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function Y(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function X(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function Q(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              o = t.indexOf("hover") >= 0,
              a = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              G(e, e.start[1] - e.start[0]);
            }
            if (a && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || r,
              drag: i,
              dragAll: l,
              fixed: n,
              snap: r,
              hover: o,
              unconstrained: a,
            };
          }
          function Z(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function K(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: k,
                format: k,
              },
              s = {
                step: { r: !1, t: $ },
                keyboardPageMultiplier: { r: !1, t: D },
                keyboardMultiplier: { r: !1, t: N },
                keyboardDefaultStep: { r: !1, t: q },
                start: { r: !0, t: j },
                connect: { r: !0, t: R },
                direction: { r: !0, t: X },
                snap: { r: !1, t: W },
                animate: { r: !1, t: H },
                animationDuration: { r: !1, t: V },
                range: { r: !0, t: B },
                orientation: { r: !1, t: F },
                margin: { r: !1, t: G },
                limit: { r: !1, t: U },
                padding: { r: !1, t: Y },
                behaviour: { r: !0, t: Q },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: Z },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: K },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: I,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (r) {
                if (n(e[r]) || void 0 !== i[r])
                  s[r].t(t, n(e[r]) ? e[r] : i[r]);
                else if (s[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              o = void 0 !== r.style.msTransform,
              a = void 0 !== r.style.transform;
            t.transformRule = a
              ? "transform"
              : o
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function oe(t, s, a) {
            var c,
              h,
              w,
              C,
              x,
              E = y(),
              T = S() && b(),
              _ = t,
              L = s.spectrum,
              P = [],
              A = [],
              O = [],
              M = 0,
              k = {},
              I = t.ownerDocument,
              $ = s.documentElement || I.documentElement,
              D = I.body,
              N = "rtl" === I.dir || 1 === s.ort ? 0 : 100;
            function q(e, t) {
              var s = I.createElement("div");
              return t && f(s, t), e.appendChild(s), s;
            }
            function B(e, t) {
              var i = q(e, s.cssClasses.origin),
                n = q(i, s.cssClasses.handle);
              if (
                (q(n, s.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return he(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var r = s.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  n.setAttribute(e, r[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(n, s.cssClasses.handleLower)
                  : t === s.handles - 1 && f(n, s.cssClasses.handleUpper),
                i
              );
            }
            function j(e, t) {
              return !!t && q(e, s.cssClasses.connect);
            }
            function W(e, t) {
              var i = q(t, s.cssClasses.connects);
              (h = []), (w = []).push(j(i, e[0]));
              for (var n = 0; n < s.handles; n++)
                h.push(B(t, n)), (O[n] = n), w.push(j(i, e[n + 1]));
            }
            function H(e) {
              return (
                f(e, s.cssClasses.target),
                0 === s.dir ? f(e, s.cssClasses.ltr) : f(e, s.cssClasses.rtl),
                0 === s.ort
                  ? f(e, s.cssClasses.horizontal)
                  : f(e, s.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                q(e, s.cssClasses.base)
              );
            }
            function V(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                q(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function R() {
              return _.hasAttribute("disabled");
            }
            function F(e) {
              return h[e].hasAttribute("disabled");
            }
            function G() {
              x &&
                (ve("update" + z.tooltips),
                x.forEach(function (e) {
                  e && i(e);
                }),
                (x = null));
            }
            function U() {
              G(),
                (x = h.map(V)),
                me("update" + z.tooltips, function (e, t, i) {
                  if (x && s.tooltips && !1 !== x[t]) {
                    var n = e[t];
                    !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])),
                      (x[t].innerHTML = n);
                  }
                });
            }
            function Y() {
              ve("update" + z.aria),
                me("update" + z.aria, function (e, t, i, n, r) {
                  O.forEach(function (e) {
                    var t = h[e],
                      n = be(A, e, 0, !0, !0, !0),
                      o = be(A, e, 100, !0, !0, !0),
                      a = r[e],
                      l = String(s.ariaFormat.to(i[e]));
                    (n = L.fromStepping(n).toFixed(1)),
                      (o = L.fromStepping(o).toFixed(1)),
                      (a = L.fromStepping(a).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", o),
                      t.children[0].setAttribute("aria-valuenow", a),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function X(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return L.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, i = 100 / s, n = []; s--; )
                  n[s] = s * i;
                return n.push(100), Q(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? Q(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return L.fromStepping(L.getStep(L.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function Q(e, t) {
              return e.map(function (e) {
                return L.fromStepping(t ? L.getStep(e) : e);
              });
            }
            function Z(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = X(t),
                n = {},
                r = L.xVal[0],
                a = L.xVal[L.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (i = o(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (i.unshift(r), (l = !0)),
                i[i.length - 1] !== a && (i.push(a), (c = !0)),
                i.forEach(function (r, o) {
                  var a,
                    u,
                    p,
                    h,
                    f,
                    m,
                    g,
                    v,
                    y,
                    b,
                    S = r,
                    w = i[o + 1],
                    C = t.mode === e.PipsMode.Steps;
                  for (
                    C && (a = L.xNumSteps[o]),
                      a || (a = w - S),
                      void 0 === w && (w = S),
                      a = Math.max(a, 1e-7),
                      u = S;
                    u <= w;
                    u = s(u, a)
                  ) {
                    for (
                      v = (f = (h = L.toStepping(u)) - d) / (t.density || 1),
                        b = f / (y = Math.round(v)),
                        p = 1;
                      p <= y;
                      p += 1
                    )
                      n[(m = d + p * b).toFixed(5)] = [L.fromStepping(m), 0];
                    (g =
                      i.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : C
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !o && l && u !== w && (g = 0),
                      (u === w && c) || (n[h.toFixed(5)] = [u, g]),
                      (d = h);
                  }
                }),
                n
              );
            }
            function K(t, i, n) {
              var r,
                o,
                a = I.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  r),
                c =
                  (((o = {})[e.PipsType.None] = ""),
                  (o[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (o[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (o[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  o),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var i = t === s.cssClasses.value,
                  n = i ? l : c;
                return t + " " + (i ? d : u)[s.ort] + " " + n[e];
              }
              function h(t, r, o) {
                if ((o = i ? i(r, o) : o) !== e.PipsType.None) {
                  var l = q(a, !1);
                  (l.className = p(o, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    o > e.PipsType.NoValue &&
                      (((l = q(a, !1)).className = p(o, s.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(n.to(r))));
                }
              }
              return (
                f(a, s.cssClasses.pips),
                f(
                  a,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                a
              );
            }
            function J() {
              C && (i(C), (C = null));
            }
            function ee(e) {
              J();
              var t = Z(e),
                s = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (C = _.appendChild(K(t, s, i)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, i, n) {
              var r = function (r) {
                  var o = ie(r, n.pageOffset, n.target || t);
                  return (
                    !!o &&
                    !(R() && !n.doNotReject) &&
                    !(g(_, s.cssClasses.tap) && !n.doNotReject) &&
                    !(e === E.start && void 0 !== o.buttons && o.buttons > 1) &&
                    (!n.hover || !o.buttons) &&
                    (T || o.preventDefault(),
                    (o.calcPoint = o.points[s.ort]),
                    void i(o, n))
                  );
                },
                o = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!T && { passive: !0 }),
                    o.push([e, r]);
                }),
                o
              );
            }
            function ie(e, t, s) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                o = 0,
                a = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var l = function (t) {
                  var i = t.target;
                  return (
                    i === s ||
                    s.contains(i) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (o = c[0].pageX), (a = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (o = d.pageX), (a = d.pageY);
                }
              }
              return (
                (t = t || v(I)),
                (n || r) && ((o = e.clientX + t.x), (a = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [o, a]),
                (e.cursor = n || r),
                e
              );
            }
            function ne(e) {
              var t = (100 * (e - l(c, s.ort))) / te();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function oe(e) {
              var t = 100,
                s = !1;
              return (
                h.forEach(function (i, n) {
                  if (!F(n)) {
                    var r = A[n],
                      o = Math.abs(r - e);
                    (o < t || (o <= t && e > r) || (100 === o && 100 === t)) &&
                      ((s = n), (t = o));
                  }
                }),
                s
              );
            }
            function ae(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              we(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (M -= 1)),
                t.listeners.forEach(function (e) {
                  $.removeEventListener(e[0], e[1]);
                }),
                0 === M &&
                  (m(_, s.cssClasses.drag),
                  Ee(),
                  e.cursor &&
                    ((D.style.cursor = ""),
                    D.removeEventListener("selectstart", r))),
                t.handleNumbers.forEach(function (e) {
                  ye("change", e), ye("set", e), ye("end", e);
                });
            }
            function de(e, t) {
              if (!t.handleNumbers.some(F)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = h[t.handleNumbers[0]].children[0]),
                  (M += 1),
                  f(i, s.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  o = se(E.move, $, le, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: A.slice(),
                  }),
                  a = se(E.end, $, ce, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", $, ae, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, o.concat(a, l)),
                  e.cursor &&
                    ((D.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(_, s.cssClasses.drag),
                    D.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    ye("start", e);
                  });
              }
            }
            function ue(e) {
              e.stopPropagation();
              var t = ne(e.calcPoint),
                i = oe(t);
              !1 !== i &&
                (s.events.snap || d(_, s.cssClasses.tap, s.animationDuration),
                Te(i, t, !0, !0),
                Ee(),
                ye("slide", i, !0),
                ye("update", i, !0),
                s.events.snap
                  ? de(e, { handleNumbers: [i] })
                  : (ye("change", i, !0), ye("set", i, !0)));
            }
            function pe(e) {
              var t = ne(e.calcPoint),
                s = L.getStep(t),
                i = L.fromStepping(s);
              Object.keys(k).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  k[e].forEach(function (e) {
                    e.call(Ne, i);
                  });
              });
            }
            function he(e, t) {
              if (R() || F(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                o = ["Home", "End"];
              s.dir && !s.ort
                ? i.reverse()
                : s.ort && !s.dir && (n.reverse(), r.reverse());
              var a,
                l = e.key.replace("Arrow", ""),
                c = l === r[0],
                d = l === r[1],
                u = l === n[0] || l === i[0] || c,
                p = l === n[1] || l === i[1] || d,
                h = l === o[0],
                f = l === o[1];
              if (!(u || p || h || f)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = Ie(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = L.getDefaultStep(A[t], u, s.keyboardDefaultStep)),
                  (g *=
                    d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (a = P[t] + g);
              } else
                a = f
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Te(t, L.toStepping(a), !0, !0),
                ye("slide", t),
                ye("update", t),
                ye("change", t),
                ye("set", t),
                !1
              );
            }
            function fe(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  se(E.start, e.children[0], de, { handleNumbers: [t] });
                }),
                e.tap && se(E.start, c, ue, {}),
                e.hover && se(E.move, c, pe, { hover: !0 }),
                e.drag &&
                  w.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== w.length - 1) {
                      var n = h[i - 1],
                        r = h[i],
                        o = [t],
                        a = [n, r],
                        l = [i - 1, i];
                      f(t, s.cssClasses.draggable),
                        e.fixed &&
                          (o.push(n.children[0]), o.push(r.children[0])),
                        e.dragAll && ((a = h), (l = O)),
                        o.forEach(function (e) {
                          se(E.start, e, de, {
                            handles: a,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function me(e, t) {
              (k[e] = k[e] || []),
                k[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    ye("update", t);
                  });
            }
            function ge(e) {
              return e === z.aria || e === z.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(k).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (s && s !== n) ||
                  (ge(n) && s !== n) ||
                  delete k[e];
              });
            }
            function ye(e, t, i) {
              Object.keys(k).forEach(function (n) {
                var r = n.split(".")[0];
                e === r &&
                  k[n].forEach(function (e) {
                    e.call(
                      Ne,
                      P.map(s.format.to),
                      t,
                      P.slice(),
                      i || !1,
                      A.slice(),
                      Ne
                    );
                  });
              });
            }
            function be(e, t, i, n, r, o) {
              var a;
              return (
                h.length > 1 &&
                  !s.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((a = L.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (i = Math.max(i, a))),
                  r &&
                    t < h.length - 1 &&
                    ((a = L.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (i = Math.min(i, a)))),
                h.length > 1 &&
                  s.limit &&
                  (n &&
                    t > 0 &&
                    ((a = L.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (i = Math.min(i, a))),
                  r &&
                    t < h.length - 1 &&
                    ((a = L.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (i = Math.max(i, a)))),
                s.padding &&
                  (0 === t &&
                    ((a = L.getAbsoluteDistance(0, s.padding[0], !1)),
                    (i = Math.max(i, a))),
                  t === h.length - 1 &&
                    ((a = L.getAbsoluteDistance(100, s.padding[1], !0)),
                    (i = Math.min(i, a)))),
                !((i = u((i = L.getStep(i)))) === e[t] && !o) && i
              );
            }
            function Se(e, t) {
              var i = s.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function we(e, t, s, i, n) {
              var r = s.slice(),
                o = i[0],
                a = [!e, e],
                l = [e, !e];
              (i = i.slice()),
                e && i.reverse(),
                i.length > 1
                  ? i.forEach(function (e, s) {
                      var i = be(r, e, r[e] + t, a[s], l[s], !1);
                      !1 === i ? (t = 0) : ((t = i - r[e]), (r[e] = i));
                    })
                  : (a = l = [!0]);
              var c = !1;
              i.forEach(function (e, i) {
                c = Te(e, s[e] + t, a[i], l[i]) || c;
              }),
                c &&
                  (i.forEach(function (e) {
                    ye("update", e), ye("slide", e);
                  }),
                  null != n && ye("drag", o));
            }
            function Ce(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function xe(e, t) {
              (A[e] = t), (P[e] = L.fromStepping(t));
              var i = "translate(" + Se(Ce(t, 0) - N + "%", "0") + ")";
              (h[e].style[s.transformRule] = i), _e(e), _e(e + 1);
            }
            function Ee() {
              O.forEach(function (e) {
                var t = A[e] > 50 ? -1 : 1,
                  s = 3 + (h.length + t * e);
                h[e].style.zIndex = String(s);
              });
            }
            function Te(e, t, s, i, n) {
              return (
                n || (t = be(A, e, t, s, i, !1)), !1 !== t && (xe(e, t), !0)
              );
            }
            function _e(e) {
              if (w[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = A[e - 1]), e !== w.length - 1 && (i = A[e]);
                var n = i - t,
                  r = "translate(" + Se(Ce(t, n) + "%", "0") + ")",
                  o = "scale(" + Se(n / 100, "1") + ")";
                w[e].style[s.transformRule] = r + " " + o;
              }
            }
            function Le(e, t) {
              return null === e || !1 === e || void 0 === e
                ? A[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = L.toStepping(e)),
                  !1 === e || isNaN(e) ? A[t] : e);
            }
            function Pe(e, t, i) {
              var n = p(e),
                r = void 0 === A[0];
              (t = void 0 === t || t),
                s.animate && !r && d(_, s.cssClasses.tap, s.animationDuration),
                O.forEach(function (e) {
                  Te(e, Le(n[e], e), !0, !1, i);
                });
              var o = 1 === O.length ? 0 : 1;
              if (r && L.hasNoSize() && ((i = !0), (A[0] = 0), O.length > 1)) {
                var a = 100 / (O.length - 1);
                O.forEach(function (e) {
                  A[e] = e * a;
                });
              }
              for (; o < O.length; ++o)
                O.forEach(function (e) {
                  Te(e, A[e], !0, !0, i);
                });
              Ee(),
                O.forEach(function (e) {
                  ye("update", e), null !== n[e] && t && ye("set", e);
                });
            }
            function Ae(e) {
              Pe(s.start, e);
            }
            function Oe(e, t, s, i) {
              if (!((e = Number(e)) >= 0 && e < O.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Te(e, Le(t, e), !0, !0, i), ye("update", e), s && ye("set", e);
            }
            function Me(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === P.length ? P[0] : P.slice(0);
              var t = P.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function ke() {
              for (
                ve(z.aria),
                  ve(z.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(_, s.cssClasses[e]);
                  });
                _.firstChild;

              )
                _.removeChild(_.firstChild);
              delete _.noUiSlider;
            }
            function Ie(e) {
              var t = A[e],
                i = L.getNearbySteps(t),
                n = P[e],
                r = i.thisStep.step,
                o = null;
              if (s.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== r &&
                n + r > i.stepAfter.startValue &&
                (r = i.stepAfter.startValue - n),
                (o =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (o = null);
              var a = L.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(a))),
                null !== o && !1 !== o && (o = Number(o.toFixed(a))),
                [o, r]
              );
            }
            function ze() {
              return O.map(Ie);
            }
            function $e(e, t) {
              var i = Me(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (a[t] = e[t]);
              });
              var o = re(a);
              r.forEach(function (t) {
                void 0 !== e[t] && (s[t] = o[t]);
              }),
                (L = o.spectrum),
                (s.margin = o.margin),
                (s.limit = o.limit),
                (s.padding = o.padding),
                s.pips ? ee(s.pips) : J(),
                s.tooltips ? U() : G(),
                (A = []),
                Pe(n(e.start) ? e.start : i, t);
            }
            function De() {
              (c = H(_)),
                W(s.connect, c),
                fe(s.events),
                Pe(s.start),
                s.pips && ee(s.pips),
                s.tooltips && U(),
                Y();
            }
            De();
            var Ne = {
              destroy: ke,
              steps: ze,
              on: me,
              off: ve,
              get: Me,
              set: Pe,
              setHandle: Oe,
              reset: Ae,
              __moveHandles: function (e, t, s) {
                we(e, t, A, s);
              },
              options: a,
              updateOptions: $e,
              target: _,
              removePips: J,
              removeTooltips: G,
              getPositions: function () {
                return A.slice();
              },
              getTooltips: function () {
                return x;
              },
              getOrigins: function () {
                return h;
              },
              pips: ee,
            };
            return Ne;
          }
          function ae(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = oe(e, re(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: M, cssClasses: I, create: ae };
          (e.create = ae),
            (e.cssClasses = I),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      n = (e, s = 500) => (e.hidden ? i(e, s) : t(e, s)),
      r = !0,
      o = (e = 500) => {
        document.documentElement.classList.contains("lock") ? a(e) : l(e);
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function u(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = d(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                r = s[2],
                o = window.matchMedia(s[0]),
                a = e.filter(function (e) {
                  if (e.value === i && e.type === r) return !0;
                });
              n.push({ itemsArray: a, matchMedia: o });
            }),
            n
          );
      }
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("??????????????????"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `???? ????, ???? ???????????????? ?????????????? ?? ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : o(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("???????????? ??????????");
        } else
          this.popupLogging(
            "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            r &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              o(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("???????????? ??????????"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && c(`[??????????????]: ${e}`);
      }
    })({});
    let p = (e, t = !1, s = 500, i = 0) => {
      const n = "string" == typeof e ? document.querySelector(e) : e;
      if (n) {
        let r = "",
          o = 0;
        t &&
          ((r = "header.header"), (o = document.querySelector(r).offsetHeight));
        let l = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (a(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", l);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
        }
        c(`[gotoBlock]: ????????...???????? ?? ${e}`);
      } else c(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${e}`);
    };
    let h = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                h.removeError(t);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const i = s[t].querySelector("select");
                  e.select.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`??????????????????, ???????????????? ????????????????: (${e.length})`))
            : this.setLogging("????????, ?????? ???? ???????????? select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selects??lose();
        } else this.selects??lose();
      }
      selects??lose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          n(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          o = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let a = "";
        return (
          (a += r
            ? `<a ${o} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (a += this.getSelectElementContent(e)),
          (a += r ? "</a>" : "</button>"),
          a
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && h.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && c(`[select]: ${e}`);
      }
    })({});
    var f = s(211);
    const m = document.getElementById("range-slider");
    if (m) {
      f.create(m, {
        start: [1232, 999999],
        connect: !0,
        step: 1,
        range: { min: [1232], max: [999999] },
      });
      const e = [
        document.getElementById("input-0"),
        document.getElementById("input-1"),
      ];
      m.noUiSlider.on("update", function (t, s) {
        e[s].value = Math.round(t[s]);
      });
      const t = (e, t) => {
        let s = [null, null];
        (s[e] = t), console.log(s), m.noUiSlider.set(s);
      };
      e.forEach((e, s) => {
        e.addEventListener("change", (e) => {
          console.log(s), t(s, e.currentTarget.value);
        });
      });
    }
    function g(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function v(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : g(t[s]) && g(e[s]) && Object.keys(t[s]).length > 0 && v(e[s], t[s]);
      });
    }
    const y = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function b() {
      const e = "undefined" != typeof document ? document : {};
      return v(e, y), e;
    }
    const S = {
      document: y,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function w() {
      const e = "undefined" != typeof window ? window : {};
      return v(e, S), e;
    }
    class C extends Array {
      constructor(e) {
        super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this);
      }
    }
    function x(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...x(e)) : t.push(e);
        }),
        t
      );
    }
    function E(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function T(e, t) {
      const s = w(),
        i = b();
      let n = [];
      if (!t && e instanceof C) return e;
      if (!e) return new C(n);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof C) return e;
        n = e;
      }
      return new C(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(n)
      );
    }
    T.fn = C.prototype;
    const _ = "resize scroll".split(" ");
    function L(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            _.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : T(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    L("click"),
      L("blur"),
      L("focus"),
      L("focusin"),
      L("focusout"),
      L("keyup"),
      L("keydown"),
      L("keypress"),
      L("submit"),
      L("change"),
      L("mousedown"),
      L("mousemove"),
      L("mouseup"),
      L("mouseenter"),
      L("mouseleave"),
      L("mouseout"),
      L("mouseover"),
      L("touchstart"),
      L("touchend"),
      L("touchmove"),
      L("resize"),
      L("scroll");
    const P = {
      addClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        return (
          E(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, n] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), T(t).is(s))) i.apply(t, n);
          else {
            const e = T(t).parents();
            for (let t = 0; t < e.length; t += 1)
              T(e[t]).is(s) && i.apply(e[t], n);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, n] = e;
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!s && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const s = o[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (r.removeEventListener(t, s.proxyListener, n),
                    o.splice(e, 1))
                  : i ||
                    (r.removeEventListener(t, s.proxyListener, n),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = w(),
          s = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < s.length; n += 1) {
          const r = s[n];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(s),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = w();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = w(),
            t = b(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            r = s.clientTop || n.clientTop || 0,
            o = s.clientLeft || n.clientLeft || 0,
            a = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + a - r, left: i.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const s = w();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = w(),
          s = b(),
          i = this[0];
        let n, r;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (n = T(e), r = 0; r < n.length; r += 1) if (n[r] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof C) {
          for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return T([]);
        if (e < 0) {
          const s = t + e;
          return T(s < 0 ? [] : [this[s]]);
        }
        return T([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = b();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof C)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = b();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof C)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e)
              ? T([this[0].nextElementSibling])
              : T([])
            : this[0].nextElementSibling
            ? T([this[0].nextElementSibling])
            : T([])
          : T([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return T([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? T(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return T(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && T(t.previousElementSibling).is(e)
              ? T([t.previousElementSibling])
              : T([])
            : t.previousElementSibling
            ? T([t.previousElementSibling])
            : T([]);
        }
        return T([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return T([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? T(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return T(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? T(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return T(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? T(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return T(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? T([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return T(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !T(i[s]).is(e)) || t.push(i[s]);
        }
        return T(t);
      },
      filter: function (e) {
        return T(E(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(P).forEach((e) => {
      Object.defineProperty(T.fn, e, { value: P[e], writable: !0 });
    });
    const A = T;
    function O(e, t = 0) {
      return setTimeout(e, t);
    }
    function M() {
      return Date.now();
    }
    function k(e, t = "x") {
      const s = w();
      let i, n, r;
      const o = (function (e) {
        const t = w();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function I(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function z(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const r = e[n];
        if (
          null != r &&
          ((i = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== n &&
              n.enumerable &&
              (I(t[i]) && I(r[i])
                ? r[i].__swiper__
                  ? (t[i] = r[i])
                  : z(t[i], r[i])
                : !I(t[i]) && I(r[i])
                ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : z(t[i], r[i]))
                : (t[i] = r[i]));
          }
        }
      }
      var i;
      return t;
    }
    function $(e, t, s) {
      e.style.setProperty(t, s);
    }
    function D({ swiper: e, targetPosition: t, side: s }) {
      const i = w(),
        n = -e.translate;
      let r,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > n ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const l = Math.max(Math.min((r - o) / a, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = n + u * (t - n);
          if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), c(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: p });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(d);
        };
      d();
    }
    let N, q, B;
    function j() {
      return (
        N ||
          (N = (function () {
            const e = w(),
              t = b();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        N
      );
    }
    function W(e = {}) {
      return (
        q ||
          (q = (function ({ userAgent: e } = {}) {
            const t = j(),
              s = w(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              o = s.screen.width,
              a = s.screen.height,
              l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === i;
            let h = "MacIntel" === i;
            return (
              !c &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${a}`) >= 0 &&
                ((c = n.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !p && ((r.os = "android"), (r.android = !0)),
              (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        q
      );
    }
    function H() {
      return (
        B ||
          (B = (function () {
            const e = w();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        B
      );
    }
    const V = {
      on(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        function n(...s) {
          i.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(i, s);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let s, i, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
          : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
          i.unshift(n);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          t
        );
      },
    };
    const R = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = n.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = i.spaceBetween,
          S = -m,
          w = 0,
          C = 0;
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            ($(e.wrapperEl, "--swiper-centered-offset-before", ""),
            $(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const x = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        x && e.grid.initSlides(u);
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < u; n += 1) {
          E = 0;
          const o = d.eq(n);
          if (
            (x && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (d[n].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  i = s(r, "padding-right"),
                  n = s(r, "margin-left"),
                  a = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + n + a;
                else {
                  const { clientWidth: s, offsetWidth: r } = o[0];
                  E = e + t + i + n + a + (r - s);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                d[n] && (d[n].style[t("width")] = `${E}px`);
            d[n] && (d[n].swiperSlideSize = E),
              f.push(E),
              i.centeredSlides
                ? ((S = S + E / 2 + w / 2 + b),
                  0 === w && 0 !== n && (S = S - r / 2 - b),
                  0 === n && (S = S - r / 2 - b),
                  Math.abs(S) < 0.001 && (S = 0),
                  i.roundLengths && (S = Math.floor(S)),
                  C % i.slidesPerGroup == 0 && p.push(S),
                  h.push(S))
                : (i.roundLengths && (S = Math.floor(S)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(S),
                  h.push(S),
                  (S = S + E + b)),
              (e.virtualSize += E + b),
              (w = E),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          o &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          x && e.grid.updateWrapperSize(E, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let n = p[s];
            i.roundLengths && (n = Math.floor(n)),
              p[s] <= e.virtualSize - r && t.push(n);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          $(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            $(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(o(e));
            }
        else s.push(o(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        n && (o = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let l = a.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            d =
              (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(s.slideVisibleClass)),
            (a.progress = n ? -c : c),
            (a.originalProgress = n ? -d : d);
        }
        t.visibleSlides = A(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === i
          ? ((n = 0), (r = !0), (o = !0))
          : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (o = n >= 1)),
          Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: r,
          } = e,
          o = e.virtual && s.virtual.enabled;
        let a;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          a.addClass(s.slideActiveClass),
          s.loop &&
            (a.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let c = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: n,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : s >= i[e] && s < i[e + 1] && (d = e + 1)
              : s >= i[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (n.indexOf(s) >= 0) c = n.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= n.length && (c = n.length - 1), d === o))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = A(e).closest(`.${s.slideClass}`)[0];
        let n,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (n = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                A(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const F = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = k(n[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: i,
            params: n,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = s;
        let l,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = i ? -e : e) : (d = e),
          n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          n.cssMode
            ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : n.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
          l !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = i && e > l ? l : i && e < c ? c : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                D({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function G({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: r } = e;
      let o = s;
      if (
        (o || (o = n > r ? "next" : n < r ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && n !== r)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === o
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const U = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !i && !n)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || a.initialSlide || 0) === (d || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (o = e)
                : t >= s && t < i && (o = e + 1)
              : t >= s && (o = e);
          }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(s, y), r.transitionEnd(s, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                D({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, y),
          0 === t
            ? r.transitionEnd(s, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, y));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        const n = this;
        let r = e;
        return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { animating: n, enabled: r, params: o } = i;
        if (!r) return i;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (n && o.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return o.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: n,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (n.loop) {
          if (r && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? i.translate : -i.translate),
          p = o.map((e) => d(e));
        let h = o[p.indexOf(u) - 1];
        if (void 0 === h && n.cssMode) {
          let e;
          o.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        return (
          void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          n.rewind && i.isBeginning
            ? i.slideTo(i.slides.length - 1, e, t, s)
            : i.slideTo(f, e, t, s)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const n = this;
        let r = n.activeIndex;
        const o = Math.min(n.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[a]) {
          const e = n.snapGrid[a];
          l - e > (n.snapGrid[a + 1] - e) * i && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[a - 1];
          l - e <= (n.snapGrid[a] - e) * i && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  O(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                O(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const Y = {
      loopCreate: function () {
        const e = this,
          t = b(),
          { params: s, $wrapperEl: i } = e,
          n = i.children().length > 0 ? A(i.children()[0].parentNode) : i;
        n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = n.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = A(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              n.append(e);
            }
            r = n.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((t, s) => {
          const i = A(t);
          s < e.loopedSlides && a.push(t),
            s < r.length && s >= r.length - e.loopedSlides && o.push(t),
            i.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < a.length; e += 1)
          n.append(A(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          n.prepend(A(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: i,
          allowSlidePrev: n,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[t] - e.getTranslate();
        if (t < i) {
          (l = s.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= s.length - i) {
          (l = -s.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function X(e) {
      const t = this,
        s = b(),
        i = w(),
        n = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = A(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === l.type),
        !n.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!n.isTouchEvent && "button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = A(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t = this) {
              return (function t(s) {
                return s && s !== b() && s !== w()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t);
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = o.currentX,
        h = o.currentY,
        f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (f && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = p),
        (o.startY = h),
        (n.touchStartTime = M()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(n.focusableElements) && (e = !1),
          s.activeElement &&
            A(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.emit("touchStart", l);
    }
    function Q(e) {
      const t = b(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: r, rtlTranslate: o, enabled: a } = s;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (i.touchStartTime = M()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < r.startX && s.translate <= s.maxTranslate()) ||
          (d > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        A(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const p = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
        i.isMoved ||
          (n.loop && !n.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (i.isMoved = !0);
      let f = s.isHorizontal() ? p : h;
      (r.diff = f),
        (f *= n.touchRatio),
        o && (f = -f),
        (s.swipeDirection = f > 0 ? "prev" : "next"),
        (i.currentTranslate = f + i.startTranslate);
      let m = !0,
        g = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (g = 0),
        f > 0 && i.currentTranslate > s.minTranslate()
          ? ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + f) ** g))
          : f < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - f) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Z(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: n,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = M(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = M()),
        O(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      const f = (u - o[p]) / h,
        m = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (f >= i.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (f > 1 - i.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + m)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(p + m),
            "prev" === t.swipeDirection && t.slideTo(p));
      }
    }
    function K() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function J(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ee() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let te = !1;
    function se() {}
    const ie = (e, t) => {
      const s = b(),
        {
          params: i,
          touchEvents: n,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](n.start, e.onTouchStart, t),
          r[d](
            n.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](n.end, e.onTouchEnd, t),
          n.cancel && r[d](n.cancel, e.onTouchEnd, t);
      } else
        r[d](n.start, e.onTouchStart, !1),
          s[d](n.move, e.onTouchMove, c),
          s[d](n.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        i.cssMode && o[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              K,
              !0
            )
          : e[u]("observerUpdate", K, !0);
    };
    const ne = {
        attachEvents: function () {
          const e = this,
            t = b(),
            { params: s, support: i } = e;
          (e.onTouchStart = X.bind(e)),
            (e.onTouchMove = Q.bind(e)),
            (e.onTouchEnd = Z.bind(e)),
            s.cssMode && (e.onScroll = ee.bind(e)),
            (e.onClick = J.bind(e)),
            i.touch && !te && (t.addEventListener("touchstart", se), (te = !0)),
            ie(e, "on");
        },
        detachEvents: function () {
          ie(this, "off");
        },
      },
      re = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const oe = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: r,
          } = e,
          o = n.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = re(e, n),
          d = re(e, l),
          u = n.enabled;
        c && !d
          ? (r.removeClass(
              `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${n.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === n.grid.fill)) &&
              r.addClass(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== n.direction,
          h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
        p && s && e.changeDirection(), z(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let i = !1;
        const n = w(),
          r = "window" === t ? n.innerHeight : s.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
            : a <= s.clientWidth && (i = r);
        }
        return i || "max";
      },
    };
    const ae = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const le = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ce(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                z(t, s))
              : z(t, s))
          : z(t, s);
      };
    }
    const de = {
        eventsEmitter: V,
        update: R,
        translate: F,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              G({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                G({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: U,
        loop: Y,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ne,
        breakpoints: oe,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ae,
        images: {
          loadImage: function (e, t, s, i, n, r) {
            const o = w();
            let a;
            function l() {
              r && r();
            }
            A(e).parent("picture")[0] || (e.complete && n)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                s && (a.srcset = s),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ue = {};
    class pe {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = z({}, s)),
          t && !s.el && (s.el = t),
          s.el && A(s.el).length > 1)
        ) {
          const e = [];
          return (
            A(s.el).each((t) => {
              const i = z({}, s, { el: t });
              e.push(new pe(i));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = j()),
          (i.device = W({ userAgent: s.userAgent })),
          (i.browser = H()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
        const n = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: ce(s, n),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const r = z({}, le, n);
        return (
          (i.params = z({}, r, ue, s)),
          (i.originalParams = z({}, i.params)),
          (i.passedParams = z({}, s)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = A),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: A(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: M(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let s = a + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            n[a] - n[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = A(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = A(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(i());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = b().createElement("div");
          (n = A(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, $el: n, $wrapperEl: r, slides: o } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        z(ue, e);
      }
      static get extendedDefaults() {
        return ue;
      }
      static get defaults() {
        return le;
      }
      static installModule(e) {
        pe.prototype.__modules__ || (pe.prototype.__modules__ = []);
        const t = pe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => pe.installModule(e)), pe)
          : (pe.installModule(e), pe);
      }
    }
    Object.keys(de).forEach((e) => {
      Object.keys(de[e]).forEach((t) => {
        pe.prototype[t] = de[e][t];
      });
    }),
      pe.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = w();
          let n = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  const { width: s, height: i } = e;
                  let n = s,
                    o = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                      (i && i !== e.el) ||
                        ((n = s ? s.width : (t[0] || t).inlineSize),
                        (o = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (n === s && o === i) || r();
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", r),
                i.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", r),
                i.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            r = w(),
            o = (e, t = {}) => {
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const he = pe;
    function fe(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function me({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function a() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
      }
      function c() {
        const t = e.rtl,
          s = e.params.pagination;
        if (a()) return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let d;
        const u = e.params.loop
          ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              d > n - 1 - 2 * e.loopedSlides && (d -= n - 2 * e.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
            : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let n, a, u;
          if (
            (s.dynamicBullets &&
              ((r = i
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((o += d - (e.previousIndex - e.loopedSlides || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (n = Math.max(d - o, 0)),
              (a = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (a + n) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            i.each((e) => {
              const t = A(e),
                i = t.index();
              i === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (i >= n &&
                    i <= a &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  i === n && l(t, "prev"),
                  i === a && l(t, "next"));
            });
          else {
            const t = i.eq(d),
              r = t.index();
            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const t = i.eq(n),
                o = i.eq(a);
              for (let e = n; e <= a; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop)
                if (r >= i.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                  i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(o, "next");
              else l(t, "prev"), l(o, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              o = (r * n - r) / 2 - u * r,
              a = t ? "right" : "left";
            i.css(e.isHorizontal() ? a : "top", `${o}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (c.find(fe(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            c.find(fe(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (d + 1) / u;
          let n = 1,
            r = 1;
          "horizontal" === t ? (n = i) : (r = i),
            c
              .find(fe(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (c.html(s.renderCustom(e, d + 1, u)), i("paginationRender", c[0]))
          : i("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function d() {
        const t = e.params.pagination;
        if (a()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          n = e.pagination.$el;
        let r = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          n.html(r), (e.pagination.bullets = n.find(fe(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          n.html(r)),
          "progressbar" === t.type &&
            ((r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            n.html(r)),
          "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
      }
      function u() {
        e.params.pagination = (function (e, t, s, i) {
          const n = b();
          return (
            e.params.createElements &&
              Object.keys(i).forEach((r) => {
                if (!s[r] && !0 === s.auto) {
                  let o = e.$el.children(`.${i[r]}`)[0];
                  o ||
                    ((o = n.createElement("div")),
                    (o.className = i[r]),
                    e.$el.append(o)),
                    (s[r] = o),
                    (t[r] = o);
                }
              }),
            s
          );
        })(e, e.originalParams.pagination, e.params.pagination, {
          el: "swiper-pagination",
        });
        const t = e.params.pagination;
        if (!t.el) return;
        let s = A(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            ((s = e.$el.find(t.el)),
            s.length > 1 &&
              (s = s.filter((t) => A(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (o = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", fe(t.bulletClass), function (t) {
              t.preventDefault();
              let s = A(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function p() {
        const t = e.params.pagination;
        if (a()) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", fe(t.bulletClass));
      }
      s("init", () => {
        u(), d(), c();
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        s("snapIndexChange", () => {
          e.params.loop || c();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (d(), c());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (d(), c());
        }),
        s("destroy", () => {
          p();
        }),
        s("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          c();
        }),
        s("click", (t, s) => {
          const n = s.target,
            { $el: r } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r.length > 0 &&
            !A(n).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            const t = r.hasClass(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              r.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: d,
          update: c,
          init: u,
          destroy: p,
        });
    }
    function ge({ swiper: e, extendParams: t, on: s }) {
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let i = !1,
        n = !1;
      function r() {
        const t = e.thumbs.swiper;
        if (!t) return;
        const s = t.clickedIndex,
          i = t.clickedSlide;
        if (i && A(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let n;
        if (
          ((n = t.params.loop
            ? parseInt(A(t.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          e.params.loop)
        ) {
          let t = e.activeIndex;
          e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
            (e.loopFix(),
            (e._clientLeft = e.$wrapperEl[0].clientLeft),
            (t = e.activeIndex));
          const s = e.slides
              .eq(t)
              .prevAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index(),
            i = e.slides
              .eq(t)
              .nextAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index();
          n = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s;
        }
        e.slideTo(n);
      }
      function o() {
        const { thumbs: t } = e.params;
        if (i) return !1;
        i = !0;
        const s = e.constructor;
        if (t.swiper instanceof s)
          (e.thumbs.swiper = t.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (I(t.swiper)) {
          const i = Object.assign({}, t.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new s(i)),
            (n = !0);
        }
        return (
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", r),
          !0
        );
      }
      function a(t) {
        const s = e.thumbs.swiper;
        if (!s) return;
        const i =
            "auto" === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView,
          n = e.params.thumbs.autoScrollOffset,
          r = n && !s.params.loop;
        if (e.realIndex !== s.realIndex || r) {
          let o,
            a,
            l = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(l).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (l = s.activeIndex));
            const t = s.slides
                .eq(l)
                .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index(),
              i = s.slides
                .eq(l)
                .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index();
            (o =
              void 0 === t
                ? i
                : void 0 === i
                ? t
                : i - l == l - t
                ? s.params.slidesPerGroup > 1
                  ? i
                  : l
                : i - l < l - t
                ? i
                : t),
              (a = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else (o = e.realIndex), (a = o > e.previousIndex ? "next" : "prev");
          r && (o += "next" === a ? n : -1 * n),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(o) < 0 &&
              (s.params.centeredSlides
                ? (o =
                    o > l
                      ? o - Math.floor(i / 2) + 1
                      : o + Math.floor(i / 2) - 1)
                : o > l && s.params.slidesPerGroup,
              s.slideTo(o, t ? 0 : void 0));
        }
        let o = 1;
        const a = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (o = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (o = 1),
          (o = Math.floor(o)),
          s.slides.removeClass(a),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let t = 0; t < o; t += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
              .addClass(a);
        else
          for (let t = 0; t < o; t += 1)
            s.slides.eq(e.realIndex + t).addClass(a);
      }
      (e.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: t } = e.params;
          t && t.swiper && (o(), a(!0));
        }),
        s("slideChange update resize observerUpdate", () => {
          e.thumbs.swiper && a();
        }),
        s("setTransition", (t, s) => {
          const i = e.thumbs.swiper;
          i && i.setTransition(s);
        }),
        s("beforeDestroy", () => {
          const t = e.thumbs.swiper;
          t && n && t && t.destroy();
        }),
        Object.assign(e.thumbs, { init: o, update: a });
    }
    function ve() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        if (
          (ve(),
          document.querySelector(".what__slider") &&
            new he(".swiper", {
              modules: [me],
              observer: !0,
              observeParents: !0,
              slidesPerView: "auto",
              spaceBetween: 30,
              centeredSlides: !0,
              watchOverflow: !0,
              speed: 800,
              loop: !0,
              loopAdditionalSlides: 5,
              pagination: { el: ".what__dotts", clickable: !0 },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 0 },
                625: { slidesPerView: "auto", spaceBetween: 30 },
              },
              on: {},
            }),
          document.querySelector(".thumbs-images"))
        ) {
          const e = new he(".thumbs-images", {
            modules: [ge],
            observer: !0,
            watchOverflow: !0,
            observeParents: !0,
            slidesPerView: 6,
            spaceBetween: 8,
            speed: 800,
            breakpoints: {
              320: { slidesPerView: 4.5 },
              479: { slidesPerView: 6, spaceBetween: 8 },
            },
            on: {},
          });
          new he(".images-carte__slider", {
            modules: [ge],
            thumbs: { swiper: e },
            observer: !0,
            watchOverflow: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            on: {},
          });
        }
      })();
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
          ),
            d(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(n) === i.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(n, r);
            });
        } else
          this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && c(`[??????????????????????]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let ye = !1;
    function be(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (ye) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (be.prototype.init = function () {
        const e = this;
        (this.??bjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            i = {};
          (i.element = t),
            (i.parent = t.parentNode),
            (i.destination = document.querySelector(s[0].trim())),
            (i.breakpoint = s[1] ? s[1].trim() : "767"),
            (i.place = s[2] ? s[2].trim() : "last"),
            (i.index = this.indexInParent(i.parent, i.element)),
            this.??bjects.push(i);
        }
        this.arraySort(this.??bjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.??bjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            i = String.prototype.split.call(s, ","),
            n = window.matchMedia(i[0]),
            r = i[1],
            o = Array.prototype.filter.call(this.??bjects, function (e) {
              return e.breakpoint === r;
            });
          n.addListener(function () {
            e.mediaHandler(n, o);
          }),
            this.mediaHandler(n, o);
        }
      }),
      (be.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (be.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (be.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (be.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (be.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    var Se, we;
    new be("max").init(),
      (Se = window),
      (we = function (e, t) {
        function s(s, r, a) {
          function l(e, t, i) {
            var n,
              r = "$()." + s + '("' + t + '")';
            return (
              e.each(function (e, l) {
                var c = a.data(l, s);
                if (c) {
                  var d = c[t];
                  if (d && "_" != t.charAt(0)) {
                    var u = d.apply(c, i);
                    n = void 0 === n ? u : n;
                  } else o(r + " is not a valid method");
                } else o(s + " not initialized. Cannot call methods, i.e. " + r);
              }),
              void 0 !== n ? n : e
            );
          }
          function c(e, t) {
            e.each(function (e, i) {
              var n = a.data(i, s);
              n
                ? (n.option(t), n._init())
                : ((n = new r(i, t)), a.data(i, s, n));
            });
          }
          (a = a || t || e.jQuery) &&
            (r.prototype.option ||
              (r.prototype.option = function (e) {
                a.isPlainObject(e) &&
                  (this.options = a.extend(!0, this.options, e));
              }),
            (a.fn[s] = function (e) {
              if ("string" == typeof e) {
                var t = n.call(arguments, 1);
                return l(this, e, t);
              }
              return c(this, e), this;
            }),
            i(a));
        }
        function i(e) {
          !e || (e && e.bridget) || (e.bridget = s);
        }
        var n = Array.prototype.slice,
          r = e.console,
          o =
            void 0 === r
              ? function () {}
              : function (e) {
                  r.error(e);
                };
        return i(t || e.jQuery), s;
      }),
      "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
            return we(Se, e);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = we(Se, require("jquery")))
        : (Se.jQueryBridget = we(Se, Se.jQuery)),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define("ev-emitter/ev-emitter", t)
          : "object" == typeof module && module.exports
          ? (module.exports = t())
          : (e.EvEmitter = t());
      })("undefined" != typeof window ? window : void 0, function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.on = function (e, t) {
            if (e && t) {
              var s = (this._events = this._events || {}),
                i = (s[e] = s[e] || []);
              return -1 == i.indexOf(t) && i.push(t), this;
            }
          }),
          (t.once = function (e, t) {
            if (e && t) {
              this.on(e, t);
              var s = (this._onceEvents = this._onceEvents || {});
              return ((s[e] = s[e] || {})[t] = !0), this;
            }
          }),
          (t.off = function (e, t) {
            var s = this._events && this._events[e];
            if (s && s.length) {
              var i = s.indexOf(t);
              return -1 != i && s.splice(i, 1), this;
            }
          }),
          (t.emitEvent = function (e, t) {
            var s = this._events && this._events[e];
            if (s && s.length) {
              (s = s.slice(0)), (t = t || []);
              for (
                var i = this._onceEvents && this._onceEvents[e], n = 0;
                n < s.length;
                n++
              ) {
                var r = s[n];
                i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t);
              }
              return this;
            }
          }),
          (t.allOff = function () {
            delete this._events, delete this._onceEvents;
          }),
          e
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define("get-size/get-size", t)
          : "object" == typeof module && module.exports
          ? (module.exports = t())
          : (e.getSize = t());
      })(window, function () {
        function e(e) {
          var t = parseFloat(e);
          return -1 == e.indexOf("%") && !isNaN(t) && t;
        }
        function t(e) {
          var t = getComputedStyle(e);
          return (
            t ||
              r(
                "Style returned " +
                  t +
                  ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
              ),
            t
          );
        }
        function s() {
          if (!l) {
            l = !0;
            var s = document.createElement("div");
            (s.style.width = "200px"),
              (s.style.padding = "1px 2px 3px 4px"),
              (s.style.borderStyle = "solid"),
              (s.style.borderWidth = "1px 2px 3px 4px"),
              (s.style.boxSizing = "border-box");
            var r = document.body || document.documentElement;
            r.appendChild(s);
            var o = t(s);
            (n = 200 == Math.round(e(o.width))),
              (i.isBoxSizeOuter = n),
              r.removeChild(s);
          }
        }
        function i(i) {
          if (
            (s(),
            "string" == typeof i && (i = document.querySelector(i)),
            i && "object" == typeof i && i.nodeType)
          ) {
            var r = t(i);
            if ("none" == r.display)
              return (function () {
                for (
                  var e = {
                      width: 0,
                      height: 0,
                      innerWidth: 0,
                      innerHeight: 0,
                      outerWidth: 0,
                      outerHeight: 0,
                    },
                    t = 0;
                  t < a;
                  t++
                )
                  e[o[t]] = 0;
                return e;
              })();
            var l = {};
            (l.width = i.offsetWidth), (l.height = i.offsetHeight);
            for (
              var c = (l.isBorderBox = "border-box" == r.boxSizing), d = 0;
              d < a;
              d++
            ) {
              var u = o[d],
                p = r[u],
                h = parseFloat(p);
              l[u] = isNaN(h) ? 0 : h;
            }
            var f = l.paddingLeft + l.paddingRight,
              m = l.paddingTop + l.paddingBottom,
              g = l.marginLeft + l.marginRight,
              v = l.marginTop + l.marginBottom,
              y = l.borderLeftWidth + l.borderRightWidth,
              b = l.borderTopWidth + l.borderBottomWidth,
              S = c && n,
              w = e(r.width);
            !1 !== w && (l.width = w + (S ? 0 : f + y));
            var C = e(r.height);
            return (
              !1 !== C && (l.height = C + (S ? 0 : m + b)),
              (l.innerWidth = l.width - (f + y)),
              (l.innerHeight = l.height - (m + b)),
              (l.outerWidth = l.width + g),
              (l.outerHeight = l.height + v),
              l
            );
          }
        }
        var n,
          r =
            "undefined" == typeof console
              ? function () {}
              : function (e) {
                  console.error(e);
                },
          o = [
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth",
            "borderBottomWidth",
          ],
          a = o.length,
          l = !1;
        return i;
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define("desandro-matches-selector/matches-selector", t)
          : "object" == typeof module && module.exports
          ? (module.exports = t())
          : (e.matchesSelector = t());
      })(window, function () {
        var e = (function () {
          var e = window.Element.prototype;
          if (e.matches) return "matches";
          if (e.matchesSelector) return "matchesSelector";
          for (var t = ["webkit", "moz", "ms", "o"], s = 0; s < t.length; s++) {
            var i = t[s] + "MatchesSelector";
            if (e[i]) return i;
          }
        })();
        return function (t, s) {
          return t[e](s);
        };
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "fizzy-ui-utils/utils",
              ["desandro-matches-selector/matches-selector"],
              function (s) {
                return t(e, s);
              }
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(e, require("desandro-matches-selector")))
          : (e.fizzyUIUtils = t(e, e.matchesSelector));
      })(window, function (e, t) {
        var s = {
            extend: function (e, t) {
              for (var s in t) e[s] = t[s];
              return e;
            },
            modulo: function (e, t) {
              return ((e % t) + t) % t;
            },
          },
          i = Array.prototype.slice;
        (s.makeArray = function (e) {
          return Array.isArray(e)
            ? e
            : null == e
            ? []
            : "object" == typeof e && "number" == typeof e.length
            ? i.call(e)
            : [e];
        }),
          (s.removeFrom = function (e, t) {
            var s = e.indexOf(t);
            -1 != s && e.splice(s, 1);
          }),
          (s.getParent = function (e, s) {
            for (; e.parentNode && e != document.body; )
              if (((e = e.parentNode), t(e, s))) return e;
          }),
          (s.getQueryElement = function (e) {
            return "string" == typeof e ? document.querySelector(e) : e;
          }),
          (s.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e);
          }),
          (s.filterFindElements = function (e, i) {
            e = s.makeArray(e);
            var n = [];
            return (
              e.forEach(function (e) {
                if (e instanceof HTMLElement) {
                  if (!i) return void n.push(e);
                  t(e, i) && n.push(e);
                  for (var s = e.querySelectorAll(i), r = 0; r < s.length; r++)
                    n.push(s[r]);
                }
              }),
              n
            );
          }),
          (s.debounceMethod = function (e, t, s) {
            s = s || 100;
            var i = e.prototype[t],
              n = t + "Timeout";
            e.prototype[t] = function () {
              var e = this[n];
              clearTimeout(e);
              var t = arguments,
                r = this;
              this[n] = setTimeout(function () {
                i.apply(r, t), delete r[n];
              }, s);
            };
          }),
          (s.docReady = function (e) {
            var t = document.readyState;
            "complete" == t || "interactive" == t
              ? setTimeout(e)
              : document.addEventListener("DOMContentLoaded", e);
          }),
          (s.toDashed = function (e) {
            return e
              .replace(/(.)([A-Z])/g, function (e, t, s) {
                return t + "-" + s;
              })
              .toLowerCase();
          });
        var n = e.console;
        return (
          (s.htmlInit = function (t, i) {
            s.docReady(function () {
              var r = s.toDashed(i),
                o = "data-" + r,
                a = document.querySelectorAll("[" + o + "]"),
                l = document.querySelectorAll(".js-" + r),
                c = s.makeArray(a).concat(s.makeArray(l)),
                d = o + "-options",
                u = e.jQuery;
              c.forEach(function (e) {
                var s,
                  r = e.getAttribute(o) || e.getAttribute(d);
                try {
                  s = r && JSON.parse(r);
                } catch (t) {
                  return void (
                    n &&
                    n.error(
                      "Error parsing " + o + " on " + e.className + ": " + t
                    )
                  );
                }
                var a = new t(e, s);
                u && u.data(e, i, a);
              });
            });
          }),
          s
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "outlayer/item",
              ["ev-emitter/ev-emitter", "get-size/get-size"],
              t
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(require("ev-emitter"), require("get-size")))
          : ((e.Outlayer = {}), (e.Outlayer.Item = t(e.EvEmitter, e.getSize)));
      })(window, function (e, t) {
        function s(e, t) {
          e &&
            ((this.element = e),
            (this.layout = t),
            (this.position = { x: 0, y: 0 }),
            this._create());
        }
        var i = document.documentElement.style,
          n =
            "string" == typeof i.transition ? "transition" : "WebkitTransition",
          r = "string" == typeof i.transform ? "transform" : "WebkitTransform",
          o = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend",
          }[n],
          a = {
            transform: r,
            transition: n,
            transitionDuration: n + "Duration",
            transitionProperty: n + "Property",
            transitionDelay: n + "Delay",
          },
          l = (s.prototype = Object.create(e.prototype));
        (l.constructor = s),
          (l._create = function () {
            (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
              this.css({ position: "absolute" });
          }),
          (l.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e);
          }),
          (l.getSize = function () {
            this.size = t(this.element);
          }),
          (l.css = function (e) {
            var t = this.element.style;
            for (var s in e) {
              t[a[s] || s] = e[s];
            }
          }),
          (l.getPosition = function () {
            var e = getComputedStyle(this.element),
              t = this.layout._getOption("originLeft"),
              s = this.layout._getOption("originTop"),
              i = e[t ? "left" : "right"],
              n = e[s ? "top" : "bottom"],
              r = parseFloat(i),
              o = parseFloat(n),
              a = this.layout.size;
            -1 != i.indexOf("%") && (r = (r / 100) * a.width),
              -1 != n.indexOf("%") && (o = (o / 100) * a.height),
              (r = isNaN(r) ? 0 : r),
              (o = isNaN(o) ? 0 : o),
              (r -= t ? a.paddingLeft : a.paddingRight),
              (o -= s ? a.paddingTop : a.paddingBottom),
              (this.position.x = r),
              (this.position.y = o);
          }),
          (l.layoutPosition = function () {
            var e = this.layout.size,
              t = {},
              s = this.layout._getOption("originLeft"),
              i = this.layout._getOption("originTop"),
              n = s ? "paddingLeft" : "paddingRight",
              r = s ? "left" : "right",
              o = s ? "right" : "left",
              a = this.position.x + e[n];
            (t[r] = this.getXValue(a)), (t[o] = "");
            var l = i ? "paddingTop" : "paddingBottom",
              c = i ? "top" : "bottom",
              d = i ? "bottom" : "top",
              u = this.position.y + e[l];
            (t[c] = this.getYValue(u)),
              (t[d] = ""),
              this.css(t),
              this.emitEvent("layout", [this]);
          }),
          (l.getXValue = function (e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !t
              ? (e / this.layout.size.width) * 100 + "%"
              : e + "px";
          }),
          (l.getYValue = function (e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && t
              ? (e / this.layout.size.height) * 100 + "%"
              : e + "px";
          }),
          (l._transitionTo = function (e, t) {
            this.getPosition();
            var s = this.position.x,
              i = this.position.y,
              n = e == this.position.x && t == this.position.y;
            if ((this.setPosition(e, t), !n || this.isTransitioning)) {
              var r = e - s,
                o = t - i,
                a = {};
              (a.transform = this.getTranslate(r, o)),
                this.transition({
                  to: a,
                  onTransitionEnd: { transform: this.layoutPosition },
                  isCleaning: !0,
                });
            } else this.layoutPosition();
          }),
          (l.getTranslate = function (e, t) {
            return (
              "translate3d(" +
              (e = this.layout._getOption("originLeft") ? e : -e) +
              "px, " +
              (t = this.layout._getOption("originTop") ? t : -t) +
              "px, 0)"
            );
          }),
          (l.goTo = function (e, t) {
            this.setPosition(e, t), this.layoutPosition();
          }),
          (l.moveTo = l._transitionTo),
          (l.setPosition = function (e, t) {
            (this.position.x = parseFloat(e)),
              (this.position.y = parseFloat(t));
          }),
          (l._nonTransition = function (e) {
            for (var t in (this.css(e.to),
            e.isCleaning && this._removeStyles(e.to),
            e.onTransitionEnd))
              e.onTransitionEnd[t].call(this);
          }),
          (l.transition = function (e) {
            if (parseFloat(this.layout.options.transitionDuration)) {
              var t = this._transn;
              for (var s in e.onTransitionEnd)
                t.onEnd[s] = e.onTransitionEnd[s];
              for (s in e.to)
                (t.ingProperties[s] = !0), e.isCleaning && (t.clean[s] = !0);
              if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null;
              }
              this.enableTransition(e.to),
                this.css(e.to),
                (this.isTransitioning = !0);
            } else this._nonTransition(e);
          });
        var c =
          "opacity," +
          (function (e) {
            return e.replace(/([A-Z])/g, function (e) {
              return "-" + e.toLowerCase();
            });
          })(r);
        (l.enableTransition = function () {
          if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            (e = "number" == typeof e ? e + "ms" : e),
              this.css({
                transitionProperty: c,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0,
              }),
              this.element.addEventListener(o, this, !1);
          }
        }),
          (l.onwebkitTransitionEnd = function (e) {
            this.ontransitionend(e);
          }),
          (l.onotransitionend = function (e) {
            this.ontransitionend(e);
          });
        var d = { "-webkit-transform": "transform" };
        (l.ontransitionend = function (e) {
          if (e.target === this.element) {
            var t = this._transn,
              s = d[e.propertyName] || e.propertyName;
            if (
              (delete t.ingProperties[s],
              (function (e) {
                for (var t in e) return !1;
                return !0;
              })(t.ingProperties) && this.disableTransition(),
              s in t.clean &&
                ((this.element.style[e.propertyName] = ""), delete t.clean[s]),
              s in t.onEnd)
            )
              t.onEnd[s].call(this), delete t.onEnd[s];
            this.emitEvent("transitionEnd", [this]);
          }
        }),
          (l.disableTransition = function () {
            this.removeTransitionStyles(),
              this.element.removeEventListener(o, this, !1),
              (this.isTransitioning = !1);
          }),
          (l._removeStyles = function (e) {
            var t = {};
            for (var s in e) t[s] = "";
            this.css(t);
          });
        var u = {
          transitionProperty: "",
          transitionDuration: "",
          transitionDelay: "",
        };
        return (
          (l.removeTransitionStyles = function () {
            this.css(u);
          }),
          (l.stagger = function (e) {
            (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
          }),
          (l.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
              this.css({ display: "" }),
              this.emitEvent("remove", [this]);
          }),
          (l.remove = function () {
            return n && parseFloat(this.layout.options.transitionDuration)
              ? (this.once("transitionEnd", function () {
                  this.removeElem();
                }),
                void this.hide())
              : void this.removeElem();
          }),
          (l.reveal = function () {
            delete this.isHidden, this.css({ display: "" });
            var e = this.layout.options,
              t = {};
            (t[this.getHideRevealTransitionEndProperty("visibleStyle")] =
              this.onRevealTransitionEnd),
              this.transition({
                from: e.hiddenStyle,
                to: e.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t,
              });
          }),
          (l.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal");
          }),
          (l.getHideRevealTransitionEndProperty = function (e) {
            var t = this.layout.options[e];
            if (t.opacity) return "opacity";
            for (var s in t) return s;
          }),
          (l.hide = function () {
            (this.isHidden = !0), this.css({ display: "" });
            var e = this.layout.options,
              t = {};
            (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
              this.onHideTransitionEnd),
              this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t,
              });
          }),
          (l.onHideTransitionEnd = function () {
            this.isHidden &&
              (this.css({ display: "none" }), this.emitEvent("hide"));
          }),
          (l.destroy = function () {
            this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: "",
            });
          }),
          s
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "outlayer/outlayer",
              [
                "ev-emitter/ev-emitter",
                "get-size/get-size",
                "fizzy-ui-utils/utils",
                "./item",
              ],
              function (s, i, n, r) {
                return t(e, s, i, n, r);
              }
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(
              e,
              require("ev-emitter"),
              require("get-size"),
              require("fizzy-ui-utils"),
              require("./item")
            ))
          : (e.Outlayer = t(
              e,
              e.EvEmitter,
              e.getSize,
              e.fizzyUIUtils,
              e.Outlayer.Item
            ));
      })(window, function (e, t, s, i, n) {
        function r(e, t) {
          var s = i.getQueryElement(e);
          if (s) {
            (this.element = s),
              l && (this.$element = l(this.element)),
              (this.options = i.extend({}, this.constructor.defaults)),
              this.option(t);
            var n = ++d;
            (this.element.outlayerGUID = n),
              (u[n] = this),
              this._create(),
              this._getOption("initLayout") && this.layout();
          } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (s || e));
        }
        function o(e) {
          function t() {
            e.apply(this, arguments);
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            t
          );
        }
        var a = e.console,
          l = e.jQuery,
          c = function () {},
          d = 0,
          u = {};
        (r.namespace = "outlayer"),
          (r.Item = n),
          (r.defaults = {
            containerStyle: { position: "relative" },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
            visibleStyle: { opacity: 1, transform: "scale(1)" },
          });
        var p = r.prototype;
        i.extend(p, t.prototype),
          (p.option = function (e) {
            i.extend(this.options, e);
          }),
          (p._getOption = function (e) {
            var t = this.constructor.compatOptions[e];
            return t && void 0 !== this.options[t]
              ? this.options[t]
              : this.options[e];
          }),
          (r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer",
          }),
          (p._create = function () {
            this.reloadItems(),
              (this.stamps = []),
              this.stamp(this.options.stamp),
              i.extend(this.element.style, this.options.containerStyle),
              this._getOption("resize") && this.bindResize();
          }),
          (p.reloadItems = function () {
            this.items = this._itemize(this.element.children);
          }),
          (p._itemize = function (e) {
            for (
              var t = this._filterFindItemElements(e),
                s = this.constructor.Item,
                i = [],
                n = 0;
              n < t.length;
              n++
            ) {
              var r = new s(t[n], this);
              i.push(r);
            }
            return i;
          }),
          (p._filterFindItemElements = function (e) {
            return i.filterFindElements(e, this.options.itemSelector);
          }),
          (p.getItemElements = function () {
            return this.items.map(function (e) {
              return e.element;
            });
          }),
          (p.layout = function () {
            this._resetLayout(), this._manageStamps();
            var e = this._getOption("layoutInstant"),
              t = void 0 !== e ? e : !this._isLayoutInited;
            this.layoutItems(this.items, t), (this._isLayoutInited = !0);
          }),
          (p._init = p.layout),
          (p._resetLayout = function () {
            this.getSize();
          }),
          (p.getSize = function () {
            this.size = s(this.element);
          }),
          (p._getMeasurement = function (e, t) {
            var i,
              n = this.options[e];
            n
              ? ("string" == typeof n
                  ? (i = this.element.querySelector(n))
                  : n instanceof HTMLElement && (i = n),
                (this[e] = i ? s(i)[t] : n))
              : (this[e] = 0);
          }),
          (p.layoutItems = function (e, t) {
            (e = this._getItemsForLayout(e)),
              this._layoutItems(e, t),
              this._postLayout();
          }),
          (p._getItemsForLayout = function (e) {
            return e.filter(function (e) {
              return !e.isIgnored;
            });
          }),
          (p._layoutItems = function (e, t) {
            if ((this._emitCompleteOnItems("layout", e), e && e.length)) {
              var s = [];
              e.forEach(function (e) {
                var i = this._getItemLayoutPosition(e);
                (i.item = e), (i.isInstant = t || e.isLayoutInstant), s.push(i);
              }, this),
                this._processLayoutQueue(s);
            }
          }),
          (p._getItemLayoutPosition = function () {
            return { x: 0, y: 0 };
          }),
          (p._processLayoutQueue = function (e) {
            this.updateStagger(),
              e.forEach(function (e, t) {
                this._positionItem(e.item, e.x, e.y, e.isInstant, t);
              }, this);
          }),
          (p.updateStagger = function () {
            var e = this.options.stagger;
            return null == e
              ? void (this.stagger = 0)
              : ((this.stagger = (function (e) {
                  if ("number" == typeof e) return e;
                  var t = e.match(/(^\d*\.?\d*)(\w*)/),
                    s = t && t[1],
                    i = t && t[2];
                  return s.length ? (s = parseFloat(s)) * (h[i] || 1) : 0;
                })(e)),
                this.stagger);
          }),
          (p._positionItem = function (e, t, s, i, n) {
            i ? e.goTo(t, s) : (e.stagger(n * this.stagger), e.moveTo(t, s));
          }),
          (p._postLayout = function () {
            this.resizeContainer();
          }),
          (p.resizeContainer = function () {
            if (this._getOption("resizeContainer")) {
              var e = this._getContainerSize();
              e &&
                (this._setContainerMeasure(e.width, !0),
                this._setContainerMeasure(e.height, !1));
            }
          }),
          (p._getContainerSize = c),
          (p._setContainerMeasure = function (e, t) {
            if (void 0 !== e) {
              var s = this.size;
              s.isBorderBox &&
                (e += t
                  ? s.paddingLeft +
                    s.paddingRight +
                    s.borderLeftWidth +
                    s.borderRightWidth
                  : s.paddingBottom +
                    s.paddingTop +
                    s.borderTopWidth +
                    s.borderBottomWidth),
                (e = Math.max(e, 0)),
                (this.element.style[t ? "width" : "height"] = e + "px");
            }
          }),
          (p._emitCompleteOnItems = function (e, t) {
            function s() {
              n.dispatchEvent(e + "Complete", null, [t]);
            }
            function i() {
              ++o == r && s();
            }
            var n = this,
              r = t.length;
            if (t && r) {
              var o = 0;
              t.forEach(function (t) {
                t.once(e, i);
              });
            } else s();
          }),
          (p.dispatchEvent = function (e, t, s) {
            var i = t ? [t].concat(s) : s;
            if ((this.emitEvent(e, i), l))
              if (((this.$element = this.$element || l(this.element)), t)) {
                var n = l.Event(t);
                (n.type = e), this.$element.trigger(n, s);
              } else this.$element.trigger(e, s);
          }),
          (p.ignore = function (e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0);
          }),
          (p.unignore = function (e) {
            var t = this.getItem(e);
            t && delete t.isIgnored;
          }),
          (p.stamp = function (e) {
            (e = this._find(e)) &&
              ((this.stamps = this.stamps.concat(e)),
              e.forEach(this.ignore, this));
          }),
          (p.unstamp = function (e) {
            (e = this._find(e)) &&
              e.forEach(function (e) {
                i.removeFrom(this.stamps, e), this.unignore(e);
              }, this);
          }),
          (p._find = function (e) {
            if (e)
              return (
                "string" == typeof e && (e = this.element.querySelectorAll(e)),
                i.makeArray(e)
              );
          }),
          (p._manageStamps = function () {
            this.stamps &&
              this.stamps.length &&
              (this._getBoundingRect(),
              this.stamps.forEach(this._manageStamp, this));
          }),
          (p._getBoundingRect = function () {
            var e = this.element.getBoundingClientRect(),
              t = this.size;
            this._boundingRect = {
              left: e.left + t.paddingLeft + t.borderLeftWidth,
              top: e.top + t.paddingTop + t.borderTopWidth,
              right: e.right - (t.paddingRight + t.borderRightWidth),
              bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
            };
          }),
          (p._manageStamp = c),
          (p._getElementOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = this._boundingRect,
              n = s(e);
            return {
              left: t.left - i.left - n.marginLeft,
              top: t.top - i.top - n.marginTop,
              right: i.right - t.right - n.marginRight,
              bottom: i.bottom - t.bottom - n.marginBottom,
            };
          }),
          (p.handleEvent = i.handleEvent),
          (p.bindResize = function () {
            e.addEventListener("resize", this), (this.isResizeBound = !0);
          }),
          (p.unbindResize = function () {
            e.removeEventListener("resize", this), (this.isResizeBound = !1);
          }),
          (p.onresize = function () {
            this.resize();
          }),
          i.debounceMethod(r, "onresize", 100),
          (p.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout();
          }),
          (p.needsResizeLayout = function () {
            var e = s(this.element);
            return this.size && e && e.innerWidth !== this.size.innerWidth;
          }),
          (p.addItems = function (e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)), t;
          }),
          (p.appended = function (e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t));
          }),
          (p.prepended = function (e) {
            var t = this._itemize(e);
            if (t.length) {
              var s = this.items.slice(0);
              (this.items = t.concat(s)),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(t, !0),
                this.reveal(t),
                this.layoutItems(s);
            }
          }),
          (p.reveal = function (e) {
            if ((this._emitCompleteOnItems("reveal", e), e && e.length)) {
              var t = this.updateStagger();
              e.forEach(function (e, s) {
                e.stagger(s * t), e.reveal();
              });
            }
          }),
          (p.hide = function (e) {
            if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
              var t = this.updateStagger();
              e.forEach(function (e, s) {
                e.stagger(s * t), e.hide();
              });
            }
          }),
          (p.revealItemElements = function (e) {
            var t = this.getItems(e);
            this.reveal(t);
          }),
          (p.hideItemElements = function (e) {
            var t = this.getItems(e);
            this.hide(t);
          }),
          (p.getItem = function (e) {
            for (var t = 0; t < this.items.length; t++) {
              var s = this.items[t];
              if (s.element == e) return s;
            }
          }),
          (p.getItems = function (e) {
            e = i.makeArray(e);
            var t = [];
            return (
              e.forEach(function (e) {
                var s = this.getItem(e);
                s && t.push(s);
              }, this),
              t
            );
          }),
          (p.remove = function (e) {
            var t = this.getItems(e);
            this._emitCompleteOnItems("remove", t),
              t &&
                t.length &&
                t.forEach(function (e) {
                  e.remove(), i.removeFrom(this.items, e);
                }, this);
          }),
          (p.destroy = function () {
            var e = this.element.style;
            (e.height = ""),
              (e.position = ""),
              (e.width = ""),
              this.items.forEach(function (e) {
                e.destroy();
              }),
              this.unbindResize();
            var t = this.element.outlayerGUID;
            delete u[t],
              delete this.element.outlayerGUID,
              l && l.removeData(this.element, this.constructor.namespace);
          }),
          (r.data = function (e) {
            var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
            return t && u[t];
          }),
          (r.create = function (e, t) {
            var s = o(r);
            return (
              (s.defaults = i.extend({}, r.defaults)),
              i.extend(s.defaults, t),
              (s.compatOptions = i.extend({}, r.compatOptions)),
              (s.namespace = e),
              (s.data = r.data),
              (s.Item = o(n)),
              i.htmlInit(s, e),
              l && l.bridget && l.bridget(e, s),
              s
            );
          });
        var h = { ms: 1, s: 1e3 };
        return (r.Item = n), r;
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define("isotope-layout/js/item", ["outlayer/outlayer"], t)
          : "object" == typeof module && module.exports
          ? (module.exports = t(require("outlayer")))
          : ((e.Isotope = e.Isotope || {}), (e.Isotope.Item = t(e.Outlayer)));
      })(window, function (e) {
        function t() {
          e.Item.apply(this, arguments);
        }
        var s = (t.prototype = Object.create(e.Item.prototype)),
          i = s._create;
        (s._create = function () {
          (this.id = this.layout.itemGUID++),
            i.call(this),
            (this.sortData = {});
        }),
          (s.updateSortData = function () {
            if (!this.isIgnored) {
              (this.sortData.id = this.id),
                (this.sortData["original-order"] = this.id),
                (this.sortData.random = Math.random());
              var e = this.layout.options.getSortData,
                t = this.layout._sorters;
              for (var s in e) {
                var i = t[s];
                this.sortData[s] = i(this.element, this);
              }
            }
          });
        var n = s.destroy;
        return (
          (s.destroy = function () {
            n.apply(this, arguments), this.css({ display: "" });
          }),
          t
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "isotope-layout/js/layout-mode",
              ["get-size/get-size", "outlayer/outlayer"],
              t
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(require("get-size"), require("outlayer")))
          : ((e.Isotope = e.Isotope || {}),
            (e.Isotope.LayoutMode = t(e.getSize, e.Outlayer)));
      })(window, function (e, t) {
        function s(e) {
          (this.isotope = e),
            e &&
              ((this.options = e.options[this.namespace]),
              (this.element = e.element),
              (this.items = e.filteredItems),
              (this.size = e.size));
        }
        var i = s.prototype;
        return (
          [
            "_resetLayout",
            "_getItemLayoutPosition",
            "_manageStamp",
            "_getContainerSize",
            "_getElementOffset",
            "needsResizeLayout",
            "_getOption",
          ].forEach(function (e) {
            i[e] = function () {
              return t.prototype[e].apply(this.isotope, arguments);
            };
          }),
          (i.needsVerticalResizeLayout = function () {
            var t = e(this.isotope.element);
            return (
              this.isotope.size &&
              t &&
              t.innerHeight != this.isotope.size.innerHeight
            );
          }),
          (i._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments);
          }),
          (i.getColumnWidth = function () {
            this.getSegmentSize("column", "Width");
          }),
          (i.getRowHeight = function () {
            this.getSegmentSize("row", "Height");
          }),
          (i.getSegmentSize = function (e, t) {
            var s = e + t,
              i = "outer" + t;
            if ((this._getMeasurement(s, i), !this[s])) {
              var n = this.getFirstItemSize();
              this[s] = (n && n[i]) || this.isotope.size["inner" + t];
            }
          }),
          (i.getFirstItemSize = function () {
            var t = this.isotope.filteredItems[0];
            return t && t.element && e(t.element);
          }),
          (i.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments);
          }),
          (i.getSize = function () {
            this.isotope.getSize(), (this.size = this.isotope.size);
          }),
          (s.modes = {}),
          (s.create = function (e, t) {
            function n() {
              s.apply(this, arguments);
            }
            return (
              (n.prototype = Object.create(i)),
              (n.prototype.constructor = n),
              t && (n.options = t),
              (n.prototype.namespace = e),
              (s.modes[e] = n),
              n
            );
          }),
          s
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "masonry-layout/masonry",
              ["outlayer/outlayer", "get-size/get-size"],
              t
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(require("outlayer"), require("get-size")))
          : (e.Masonry = t(e.Outlayer, e.getSize));
      })(window, function (e, t) {
        var s = e.create("masonry");
        s.compatOptions.fitWidth = "isFitWidth";
        var i = s.prototype;
        return (
          (i._resetLayout = function () {
            this.getSize(),
              this._getMeasurement("columnWidth", "outerWidth"),
              this._getMeasurement("gutter", "outerWidth"),
              this.measureColumns(),
              (this.colYs = []);
            for (var e = 0; e < this.cols; e++) this.colYs.push(0);
            (this.maxY = 0), (this.horizontalColIndex = 0);
          }),
          (i.measureColumns = function () {
            if ((this.getContainerWidth(), !this.columnWidth)) {
              var e = this.items[0],
                s = e && e.element;
              this.columnWidth = (s && t(s).outerWidth) || this.containerWidth;
            }
            var i = (this.columnWidth += this.gutter),
              n = this.containerWidth + this.gutter,
              r = n / i,
              o = i - (n % i);
            (r = Math[o && o < 1 ? "round" : "floor"](r)),
              (this.cols = Math.max(r, 1));
          }),
          (i.getContainerWidth = function () {
            var e = this._getOption("fitWidth")
                ? this.element.parentNode
                : this.element,
              s = t(e);
            this.containerWidth = s && s.innerWidth;
          }),
          (i._getItemLayoutPosition = function (e) {
            e.getSize();
            var t = e.size.outerWidth % this.columnWidth,
              s = Math[t && t < 1 ? "round" : "ceil"](
                e.size.outerWidth / this.columnWidth
              );
            s = Math.min(s, this.cols);
            for (
              var i = this[
                  this.options.horizontalOrder
                    ? "_getHorizontalColPosition"
                    : "_getTopColPosition"
                ](s, e),
                n = { x: this.columnWidth * i.col, y: i.y },
                r = i.y + e.size.outerHeight,
                o = s + i.col,
                a = i.col;
              a < o;
              a++
            )
              this.colYs[a] = r;
            return n;
          }),
          (i._getTopColPosition = function (e) {
            var t = this._getTopColGroup(e),
              s = Math.min.apply(Math, t);
            return { col: t.indexOf(s), y: s };
          }),
          (i._getTopColGroup = function (e) {
            if (e < 2) return this.colYs;
            for (var t = [], s = this.cols + 1 - e, i = 0; i < s; i++)
              t[i] = this._getColGroupY(i, e);
            return t;
          }),
          (i._getColGroupY = function (e, t) {
            if (t < 2) return this.colYs[e];
            var s = this.colYs.slice(e, e + t);
            return Math.max.apply(Math, s);
          }),
          (i._getHorizontalColPosition = function (e, t) {
            var s = this.horizontalColIndex % this.cols;
            s = e > 1 && s + e > this.cols ? 0 : s;
            var i = t.size.outerWidth && t.size.outerHeight;
            return (
              (this.horizontalColIndex = i ? s + e : this.horizontalColIndex),
              { col: s, y: this._getColGroupY(s, e) }
            );
          }),
          (i._manageStamp = function (e) {
            var s = t(e),
              i = this._getElementOffset(e),
              n = this._getOption("originLeft") ? i.left : i.right,
              r = n + s.outerWidth,
              o = Math.floor(n / this.columnWidth);
            o = Math.max(0, o);
            var a = Math.floor(r / this.columnWidth);
            (a -= r % this.columnWidth ? 0 : 1),
              (a = Math.min(this.cols - 1, a));
            for (
              var l =
                  (this._getOption("originTop") ? i.top : i.bottom) +
                  s.outerHeight,
                c = o;
              c <= a;
              c++
            )
              this.colYs[c] = Math.max(l, this.colYs[c]);
          }),
          (i._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = { height: this.maxY };
            return (
              this._getOption("fitWidth") &&
                (e.width = this._getContainerFitWidth()),
              e
            );
          }),
          (i._getContainerFitWidth = function () {
            for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; ) e++;
            return (this.cols - e) * this.columnWidth - this.gutter;
          }),
          (i.needsResizeLayout = function () {
            var e = this.containerWidth;
            return this.getContainerWidth(), e != this.containerWidth;
          }),
          s
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "isotope-layout/js/layout-modes/masonry",
              ["../layout-mode", "masonry-layout/masonry"],
              t
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(
              require("../layout-mode"),
              require("masonry-layout")
            ))
          : t(e.Isotope.LayoutMode, e.Masonry);
      })(window, function (e, t) {
        var s = e.create("masonry"),
          i = s.prototype,
          n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var r in t.prototype) n[r] || (i[r] = t.prototype[r]);
        var o = i.measureColumns;
        i.measureColumns = function () {
          (this.items = this.isotope.filteredItems), o.call(this);
        };
        var a = i._getOption;
        return (
          (i._getOption = function (e) {
            return "fitWidth" == e
              ? void 0 !== this.options.isFitWidth
                ? this.options.isFitWidth
                : this.options.fitWidth
              : a.apply(this.isotope, arguments);
          }),
          s
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "isotope-layout/js/layout-modes/fit-rows",
              ["../layout-mode"],
              t
            )
          : "object" == typeof exports
          ? (module.exports = t(require("../layout-mode")))
          : t(e.Isotope.LayoutMode);
      })(window, function (e) {
        var t = e.create("fitRows"),
          s = t.prototype;
        return (
          (s._resetLayout = function () {
            (this.x = 0),
              (this.y = 0),
              (this.maxY = 0),
              this._getMeasurement("gutter", "outerWidth");
          }),
          (s._getItemLayoutPosition = function (e) {
            e.getSize();
            var t = e.size.outerWidth + this.gutter,
              s = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x &&
              t + this.x > s &&
              ((this.x = 0), (this.y = this.maxY));
            var i = { x: this.x, y: this.y };
            return (
              (this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight)),
              (this.x += t),
              i
            );
          }),
          (s._getContainerSize = function () {
            return { height: this.maxY };
          }),
          t
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              "isotope-layout/js/layout-modes/vertical",
              ["../layout-mode"],
              t
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(require("../layout-mode")))
          : t(e.Isotope.LayoutMode);
      })(window, function (e) {
        var t = e.create("vertical", { horizontalAlignment: 0 }),
          s = t.prototype;
        return (
          (s._resetLayout = function () {
            this.y = 0;
          }),
          (s._getItemLayoutPosition = function (e) {
            e.getSize();
            var t =
                (this.isotope.size.innerWidth - e.size.outerWidth) *
                this.options.horizontalAlignment,
              s = this.y;
            return (this.y += e.size.outerHeight), { x: t, y: s };
          }),
          (s._getContainerSize = function () {
            return { height: this.y };
          }),
          t
        );
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(
              [
                "outlayer/outlayer",
                "get-size/get-size",
                "desandro-matches-selector/matches-selector",
                "fizzy-ui-utils/utils",
                "isotope-layout/js/item",
                "isotope-layout/js/layout-mode",
                "isotope-layout/js/layout-modes/masonry",
                "isotope-layout/js/layout-modes/fit-rows",
                "isotope-layout/js/layout-modes/vertical",
              ],
              function (s, i, n, r, o, a) {
                return t(e, s, i, n, r, o, a);
              }
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(
              e,
              require("outlayer"),
              require("get-size"),
              require("desandro-matches-selector"),
              require("fizzy-ui-utils"),
              require("isotope-layout/js/item"),
              require("isotope-layout/js/layout-mode"),
              require("isotope-layout/js/layout-modes/masonry"),
              require("isotope-layout/js/layout-modes/fit-rows"),
              require("isotope-layout/js/layout-modes/vertical")
            ))
          : (e.Isotope = t(
              e,
              e.Outlayer,
              e.getSize,
              e.matchesSelector,
              e.fizzyUIUtils,
              e.Isotope.Item,
              e.Isotope.LayoutMode
            ));
      })(window, function (e, t, s, i, n, r, o) {
        var a = e.jQuery,
          l = String.prototype.trim
            ? function (e) {
                return e.trim();
              }
            : function (e) {
                return e.replace(/^\s+|\s+$/g, "");
              },
          c = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0,
          });
        (c.Item = r), (c.LayoutMode = o);
        var d = c.prototype;
        (d._create = function () {
          for (var e in ((this.itemGUID = 0),
          (this._sorters = {}),
          this._getSorters(),
          t.prototype._create.call(this),
          (this.modes = {}),
          (this.filteredItems = this.items),
          (this.sortHistory = ["original-order"]),
          o.modes))
            this._initLayoutMode(e);
        }),
          (d.reloadItems = function () {
            (this.itemGUID = 0), t.prototype.reloadItems.call(this);
          }),
          (d._itemize = function () {
            for (
              var e = t.prototype._itemize.apply(this, arguments), s = 0;
              s < e.length;
              s++
            ) {
              var i = e[s];
              i.id = this.itemGUID++;
            }
            return this._updateItemsSortData(e), e;
          }),
          (d._initLayoutMode = function (e) {
            var t = o.modes[e],
              s = this.options[e] || {};
            (this.options[e] = t.options ? n.extend(t.options, s) : s),
              (this.modes[e] = new t(this));
          }),
          (d.layout = function () {
            return !this._isLayoutInited && this._getOption("initLayout")
              ? void this.arrange()
              : void this._layout();
          }),
          (d._layout = function () {
            var e = this._getIsInstant();
            this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(this.filteredItems, e),
              (this._isLayoutInited = !0);
          }),
          (d.arrange = function (e) {
            this.option(e), this._getIsInstant();
            var t = this._filter(this.items);
            (this.filteredItems = t.matches),
              this._bindArrangeComplete(),
              this._isInstant
                ? this._noTransition(this._hideReveal, [t])
                : this._hideReveal(t),
              this._sort(),
              this._layout();
          }),
          (d._init = d.arrange),
          (d._hideReveal = function (e) {
            this.reveal(e.needReveal), this.hide(e.needHide);
          }),
          (d._getIsInstant = function () {
            var e = this._getOption("layoutInstant"),
              t = void 0 !== e ? e : !this._isLayoutInited;
            return (this._isInstant = t), t;
          }),
          (d._bindArrangeComplete = function () {
            function e() {
              t &&
                s &&
                i &&
                n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
            }
            var t,
              s,
              i,
              n = this;
            this.once("layoutComplete", function () {
              (t = !0), e();
            }),
              this.once("hideComplete", function () {
                (s = !0), e();
              }),
              this.once("revealComplete", function () {
                (i = !0), e();
              });
          }),
          (d._filter = function (e) {
            var t = this.options.filter;
            t = t || "*";
            for (
              var s = [], i = [], n = [], r = this._getFilterTest(t), o = 0;
              o < e.length;
              o++
            ) {
              var a = e[o];
              if (!a.isIgnored) {
                var l = r(a);
                l && s.push(a),
                  l && a.isHidden ? i.push(a) : l || a.isHidden || n.push(a);
              }
            }
            return { matches: s, needReveal: i, needHide: n };
          }),
          (d._getFilterTest = function (e) {
            return a && this.options.isJQueryFiltering
              ? function (t) {
                  return a(t.element).is(e);
                }
              : "function" == typeof e
              ? function (t) {
                  return e(t.element);
                }
              : function (t) {
                  return i(t.element, e);
                };
          }),
          (d.updateSortData = function (e) {
            var t;
            e
              ? ((e = n.makeArray(e)), (t = this.getItems(e)))
              : (t = this.items),
              this._getSorters(),
              this._updateItemsSortData(t);
          }),
          (d._getSorters = function () {
            var e = this.options.getSortData;
            for (var t in e) {
              var s = e[t];
              this._sorters[t] = u(s);
            }
          }),
          (d._updateItemsSortData = function (e) {
            for (var t = e && e.length, s = 0; t && s < t; s++) {
              e[s].updateSortData();
            }
          });
        var u = function (e) {
          if ("string" != typeof e) return e;
          var t = l(e).split(" "),
            s = t[0],
            i = s.match(/^\[(.+)\]$/),
            n = (function (e, t) {
              return e
                ? function (t) {
                    return t.getAttribute(e);
                  }
                : function (e) {
                    var s = e.querySelector(t);
                    return s && s.textContent;
                  };
            })(i && i[1], s),
            r = c.sortDataParsers[t[1]];
          return r
            ? function (e) {
                return e && r(n(e));
              }
            : function (e) {
                return e && n(e);
              };
        };
        (c.sortDataParsers = {
          parseInt: function (e) {
            return parseInt(e, 10);
          },
          parseFloat: function (e) {
            return parseFloat(e);
          },
        }),
          (d._sort = function () {
            if (this.options.sortBy) {
              var e = n.makeArray(this.options.sortBy);
              this._getIsSameSortBy(e) ||
                (this.sortHistory = e.concat(this.sortHistory));
              var t = (function (e, t) {
                return function (s, i) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                      o = s.sortData[r],
                      a = i.sortData[r];
                    if (o > a || o < a)
                      return (
                        (o > a ? 1 : -1) *
                        ((void 0 !== t[r] ? t[r] : t) ? 1 : -1)
                      );
                  }
                  return 0;
                };
              })(this.sortHistory, this.options.sortAscending);
              this.filteredItems.sort(t);
            }
          }),
          (d._getIsSameSortBy = function (e) {
            for (var t = 0; t < e.length; t++)
              if (e[t] != this.sortHistory[t]) return !1;
            return !0;
          }),
          (d._mode = function () {
            var e = this.options.layoutMode,
              t = this.modes[e];
            if (!t) throw new Error("No layout mode: " + e);
            return (t.options = this.options[e]), t;
          }),
          (d._resetLayout = function () {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout();
          }),
          (d._getItemLayoutPosition = function (e) {
            return this._mode()._getItemLayoutPosition(e);
          }),
          (d._manageStamp = function (e) {
            this._mode()._manageStamp(e);
          }),
          (d._getContainerSize = function () {
            return this._mode()._getContainerSize();
          }),
          (d.needsResizeLayout = function () {
            return this._mode().needsResizeLayout();
          }),
          (d.appended = function (e) {
            var t = this.addItems(e);
            if (t.length) {
              var s = this._filterRevealAdded(t);
              this.filteredItems = this.filteredItems.concat(s);
            }
          }),
          (d.prepended = function (e) {
            var t = this._itemize(e);
            if (t.length) {
              this._resetLayout(), this._manageStamps();
              var s = this._filterRevealAdded(t);
              this.layoutItems(this.filteredItems),
                (this.filteredItems = s.concat(this.filteredItems)),
                (this.items = t.concat(this.items));
            }
          }),
          (d._filterRevealAdded = function (e) {
            var t = this._filter(e);
            return (
              this.hide(t.needHide),
              this.reveal(t.matches),
              this.layoutItems(t.matches, !0),
              t.matches
            );
          }),
          (d.insert = function (e) {
            var t = this.addItems(e);
            if (t.length) {
              var s,
                i,
                n = t.length;
              for (s = 0; s < n; s++)
                (i = t[s]), this.element.appendChild(i.element);
              var r = this._filter(t).matches;
              for (s = 0; s < n; s++) t[s].isLayoutInstant = !0;
              for (this.arrange(), s = 0; s < n; s++)
                delete t[s].isLayoutInstant;
              this.reveal(r);
            }
          });
        var p = d.remove;
        return (
          (d.remove = function (e) {
            e = n.makeArray(e);
            var t = this.getItems(e);
            p.call(this, e);
            for (var s = t && t.length, i = 0; s && i < s; i++) {
              var r = t[i];
              n.removeFrom(this.filteredItems, r);
            }
          }),
          (d.shuffle = function () {
            for (var e = 0; e < this.items.length; e++) {
              this.items[e].sortData.random = Math.random();
            }
            (this.options.sortBy = "random"), this._sort(), this._layout();
          }),
          (d._noTransition = function (e, t) {
            var s = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = e.apply(this, t);
            return (this.options.transitionDuration = s), i;
          }),
          (d.getFilteredItemElements = function () {
            return this.filteredItems.map(function (e) {
              return e.element;
            });
          }),
          c
        );
      });
    const Ce = document.querySelector(".icon-menu"),
      xe = document.querySelector(".menu__body");
    Ce &&
      Ce.addEventListener("click", function (e) {
        document.body.classList.toggle("lock"),
          Ce.classList.toggle("_active"),
          xe.classList.toggle("_active");
      }),
      (window.onload = function () {
        const e = document.querySelector(".catalog__products"),
          t = new Isotope(e, {
            itemSelector: ".product",
            layoutMode: "masonry",
          });
        document.querySelectorAll(".filter-btn").forEach((e) => {
          e.addEventListener("click", (e) => {
            let s = e.currentTarget.dataset.filter;
            t.arrange({ filter: `${s}` });
          });
        });
        const s = document.querySelectorAll(".catalog__buttons");
        for (var i = 0, n = s.length; i < n; i++) {
          r(s[i]);
        }
        function r(e) {
          e.addEventListener("click", function (t) {
            if (t.target.classList.contains("catalog__button"))
              e.querySelector(".is-checked").classList.remove("is-checked"),
                t.target.classList.add("is-checked");
            else {
              if (!t.target.closest(".catalog__button")) return;
              e.querySelector(".is-checked").classList.remove("is-checked"),
                t.target
                  .closest(".catalog__button")
                  .classList.add("is-checked");
            }
          });
        }
        document.addEventListener("click", function (e) {
          const t = e.target;
          t.classList.contains("search-form__icon")
            ? document.querySelector(".search-form").classList.toggle("_active")
            : !t.closest(".search-form") &&
              document.querySelector(".search-form._active") &&
              document
                .querySelector(".search-form")
                .classList.remove("_active");
          t.classList.contains("buttons__clear") &&
            (e.preventDefault(),
            document.querySelectorAll(".popup__item").length > 1
              ? document.querySelector(".popup__item").remove()
              : (document.querySelector(".popup__item").remove(),
                document.querySelector(".popup__buttons").remove()));
          t.classList.contains("product__cart") &&
            (t.classList.toggle("_active"), e.preventDefault());
          t.classList.contains("product__label") &&
            (t.classList.toggle("_active"), e.preventDefault());
          t.classList.contains("buttons__add") &&
            (t.classList.toggle("_active"), e.preventDefault());
          t.classList.contains("bottom-body__button") &&
            (t.classList.toggle("_active"), e.preventDefault());
          t.classList.contains("bottom-body__icon") &&
            (t.classList.toggle("_active"), e.preventDefault());
          t.closest(".item-cart__icon") &&
            t.closest(".cart__item").classList.add("_hideme");
          if (t.closest(".form-payment__type")) {
            document
              .querySelector(".form-payment__types")
              .querySelector("._active")
              .classList.remove("_active"),
              e.preventDefault(),
              t.classList.contains("form-payment__type")
                ? t.classList.add("_active")
                : t.closest(".form-payment__type").classList.add("_active");
          }
        });
      }),
      (window.FLS = !1),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            r && (o(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && r(s);
          let i = u(e, "spollers");
          function r(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function a(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                r = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (r && !s.classList.contains("_spoller-active") && l(i),
                s.classList.toggle("_spoller-active"),
                n(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const s = e.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              t(s.nextElementSibling, 500));
          }
          i &&
            i.length &&
            i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                r(e.itemsArray, e.matchMedia);
              }),
                r(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              h.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && h.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const s = document.forms;
        if (s.length)
          for (const e of s)
            e.addEventListener("submit", function (e) {
              i(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                h.formClean(t);
              });
        async function i(e, s) {
          if (0 === (t ? h.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              s.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                i = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                r = new FormData(e);
              e.classList.add("_sending");
              const o = await fetch(t, { method: i, body: r });
              if (o.ok) {
                await o.json();
                e.classList.remove("_sending"), n(e);
              } else alert("????????????"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (s.preventDefault(), n(e));
          } else {
            s.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && p(t, !0, 1e3);
          }
        }
        function n(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } })
          ),
            setTimeout(() => {
              if (e.popup) {
                const s = t.dataset.popupMessage;
                s && e.popup.open(s);
              }
            }, 0),
            h.formClean(t),
            c(`[??????????]: ${"?????????? ????????????????????!"}`);
        }
      })(!0),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      }),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, s;
            for (let t = 0; t < e.length; t++) {
              i(e[t]);
            }
            function i(e) {
              n(e), r(), e.classList.contains("rating_set") && o(e);
            }
            function n(e) {
              (t = e.querySelector(".rating__active")),
                (s = e.querySelector(".rating__value"));
            }
            function r(e = s.innerHTML) {
              const i = e / 0.05;
              t.style.width = `${i}%`;
            }
            function o(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let i = 0; i < t.length; i++) {
                const o = t[i];
                o.addEventListener("mouseenter", function (t) {
                  n(e), r(o.value);
                }),
                  o.addEventListener("mouseleave", function (e) {
                    r();
                  }),
                  o.addEventListener("click", function (t) {
                    n(e),
                      e.dataset.ajax
                        ? a(o.value, e)
                        : ((s.innerHTML = i + 1), r());
                  });
              }
            }
            async function a(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const i = (await e.json()).newRating;
                  (s.innerHTML = i), r(), t.classList.remove("rating_sending");
                } else alert("????????????"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      (function () {
        ye = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let n,
          r = 0;
        document.addEventListener("windowScroll", function (o) {
          const a = window.scrollY;
          clearTimeout(n),
            a >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (a > r
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (n = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (r = a <= 0 ? 0 : a);
        });
      })();
  })();
})();
