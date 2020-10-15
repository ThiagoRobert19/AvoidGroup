! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function() {
  "use strict";

  function a(t) {
    return t && "[object Function]" === {}.toString.call(t)
  }

  function x(t, e) {
    if (1 !== t.nodeType) return [];
    var i = getComputedStyle(t, null);
    return e ? i[e] : i
  }

  function d(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host
  }

  function p(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body
    }
    var e = x(t),
      i = e.overflow,
      n = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(i + o + n) ? t : p(d(t))
  }

  function g(t) {
    return 11 === t ? V : 10 === t ? q : V || q
  }

  function y(t) {
    if (!t) return document.documentElement;
    for (var e = g(10) ? document.body : null, i = t.offsetParent; i === e && t.nextElementSibling;) i = (t = t.nextElementSibling).offsetParent;
    var n = i && i.nodeName;
    return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === x(i, "position") ? y(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
  }

  function u(t) {
    return null === t.parentNode ? t : u(t.parentNode)
  }

  function f(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = i ? t : e,
      o = i ? e : t,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(o, 0);
    var a, s, l = r.commonAncestorContainer;
    if (t !== l && e !== l || n.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && y(a.firstElementChild) !== a ? y(l) : l;
    var c = u(t);
    return c.host ? f(c.host, e) : f(t, u(e).host)
  }

  function v(t) {
    var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" !== i && "HTML" !== i) return t[e];
    var n = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || n)[e]
  }

  function h(t, e) {
    var i = "x" === e ? "Left" : "Top",
      n = "Left" == i ? "Right" : "Bottom";
    return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
  }

  function n(t, e, i, n) {
    return L(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], g(10) ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
  }

  function m() {
    var t = document.body,
      e = document.documentElement,
      i = g(10) && getComputedStyle(e);
    return {
      height: n("Height", t, e, i),
      width: n("Width", t, e, i)
    }
  }

  function w(t) {
    return $({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    })
  }

  function b(t) {
    var e = {};
    try {
      if (g(10)) {
        e = t.getBoundingClientRect();
        var i = v(t, "top"),
          n = v(t, "left");
        e.top += i, e.left += n, e.bottom += i, e.right += n
      } else e = t.getBoundingClientRect()
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top
      },
      r = "HTML" === t.nodeName ? m() : {},
      a = r.width || t.clientWidth || o.right - o.left,
      s = r.height || t.clientHeight || o.bottom - o.top,
      l = t.offsetWidth - a,
      c = t.offsetHeight - s;
    if (l || c) {
      var u = x(t);
      l -= h(u, "x"), c -= h(u, "y"), o.width -= l, o.height -= c
    }
    return w(o)
  }

  function k(t, e) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = g(10),
      o = "HTML" === e.nodeName,
      r = b(t),
      a = b(e),
      s = p(t),
      l = x(e),
      c = parseFloat(l.borderTopWidth, 10),
      u = parseFloat(l.borderLeftWidth, 10);
    i && "HTML" === e.nodeName && (a.top = L(a.top, 0), a.left = L(a.left, 0));
    var h = w({
      top: r.top - a.top - c,
      left: r.left - a.left - u,
      width: r.width,
      height: r.height
    });
    if (h.marginTop = 0, h.marginLeft = 0, !n && o) {
      var d = parseFloat(l.marginTop, 10),
        f = parseFloat(l.marginLeft, 10);
      h.top -= c - d, h.bottom -= c - d, h.left -= u - f, h.right -= u - f, h.marginTop = d, h.marginLeft = f
    }
    return (n && !i ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (h = function(t, e) {
      var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = v(e, "top"),
        o = v(e, "left"),
        r = i ? -1 : 1;
      return t.top += n * r, t.bottom += n * r, t.left += o * r, t.right += o * r, t
    }(h, e)), h
  }

  function S(t) {
    if (!t || !t.parentElement || g()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === x(e, "transform");) e = e.parentElement;
    return e || document.documentElement
  }

  function T(t, e, i, n) {
    var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      r = {
        top: 0,
        left: 0
      },
      a = o ? S(t) : f(t, e);
    if ("viewport" === n) r = function(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        i = t.ownerDocument.documentElement,
        n = k(t, i),
        o = L(i.clientWidth, window.innerWidth || 0),
        r = L(i.clientHeight, window.innerHeight || 0),
        a = e ? 0 : v(i),
        s = e ? 0 : v(i, "left");
      return w({
        top: a - n.top + n.marginTop,
        left: s - n.left + n.marginLeft,
        width: o,
        height: r
      })
    }(a, o);
    else {
      var s;
      "scrollParent" === n ? "BODY" === (s = p(d(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === n ? t.ownerDocument.documentElement : n;
      var l = k(s, a, o);
      if ("HTML" !== s.nodeName || function t(e) {
          var i = e.nodeName;
          return "BODY" !== i && "HTML" !== i && ("fixed" === x(e, "position") || t(d(e)))
        }(a)) r = l;
      else {
        var c = m(),
          u = c.height,
          h = c.width;
        r.top += l.top - l.marginTop, r.bottom = u + l.top, r.left += l.left - l.marginLeft, r.right = h + l.left
      }
    }
    return r.left += i, r.top += i, r.right -= i, r.bottom -= i, r
  }

  function s(t, e, n, i, o) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var a = T(n, i, r, o),
      s = {
        top: {
          width: a.width,
          height: e.top - a.top
        },
        right: {
          width: a.right - e.right,
          height: a.height
        },
        bottom: {
          width: a.width,
          height: a.bottom - e.bottom
        },
        left: {
          width: e.left - a.left,
          height: a.height
        }
      },
      l = Object.keys(s).map(function(t) {
        return $({
          key: t
        }, s[t], {
          area: (e = s[t], e.width * e.height)
        });
        var e
      }).sort(function(t, e) {
        return e.area - t.area
      }),
      c = l.filter(function(t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight
      }),
      u = 0 < c.length ? c[0].key : l[0].key,
      h = t.split("-")[1];
    return u + (h ? "-" + h : "")
  }

  function l(t, e, i) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return k(i, n ? S(e) : f(e, i), n)
  }

  function C(t) {
    var e = getComputedStyle(t),
      i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
      n = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return {
      width: t.offsetWidth + n,
      height: t.offsetHeight + i
    }
  }

  function _(t) {
    var e = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return t.replace(/left|right|bottom|top/g, function(t) {
      return e[t]
    })
  }

  function M(t, e, i) {
    i = i.split("-")[0];
    var n = C(t),
      o = {
        width: n.width,
        height: n.height
      },
      r = -1 !== ["right", "left"].indexOf(i),
      a = r ? "top" : "left",
      s = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return o[a] = e[a] + e[l] / 2 - n[l] / 2, o[s] = i === s ? e[s] - n[c] : e[_(s)], o
  }

  function A(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0]
  }

  function P(t, i, e) {
    return (void 0 === e ? t : t.slice(0, function(t, e, i) {
      if (Array.prototype.findIndex) return t.findIndex(function(t) {
        return t[e] === i
      });
      var n = A(t, function(t) {
        return t[e] === i
      });
      return t.indexOf(n)
    }(t, "name", e))).forEach(function(t) {
      t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var e = t.function || t.fn;
      t.enabled && a(e) && (i.offsets.popper = w(i.offsets.popper), i.offsets.reference = w(i.offsets.reference), i = e(i, t))
    }), i
  }

  function t(t, i) {
    return t.some(function(t) {
      var e = t.name;
      return t.enabled && e === i
    })
  }

  function j(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
      var o = e[n],
        r = o ? "" + o + i : t;
      if (void 0 !== document.body.style[r]) return r
    }
    return null
  }

  function r(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window
  }

  function e(t, e, i, n) {
    i.updateBound = n, r(t).addEventListener("resize", i.updateBound, {
      passive: !0
    });
    var o = p(t);
    return function t(e, i, n, o) {
      var r = "BODY" === e.nodeName,
        a = r ? e.ownerDocument.defaultView : e;
      a.addEventListener(i, n, {
        passive: !0
      }), r || t(p(a.parentNode), i, n, o), o.push(a)
    }(o, "scroll", i.updateBound, i.scrollParents), i.scrollElement = o, i.eventsEnabled = !0, i
  }

  function i() {
    var t, e;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, r(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
      t.removeEventListener("scroll", e.updateBound)
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
  }

  function I(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
  }

  function c(i, n) {
    Object.keys(n).forEach(function(t) {
      var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && I(n[t]) && (e = "px"), i.style[t] = n[t] + e
    })
  }

  function D(t, e, i) {
    var n = A(t, function(t) {
        return t.name === e
      }),
      o = !!n && t.some(function(t) {
        return t.name === i && t.enabled && t.order < n.order
      });
    if (!o) {
      var r = "`" + e + "`";
      console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
    }
    return o
  }

  function o(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      i = K.indexOf(t),
      n = K.slice(i + 1).concat(K.slice(0, i));
    return e ? n.reverse() : n
  }

  function E(t, o, r, e) {
    var a = [0, 0],
      s = -1 !== ["right", "left"].indexOf(e),
      i = t.split(/(\+|\-)/).map(function(t) {
        return t.trim()
      }),
      n = i.indexOf(A(i, function(t) {
        return -1 !== t.search(/,|\s/)
      }));
    i[n] && -1 === i[n].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
      c = -1 === n ? [i] : [i.slice(0, n).concat([i[n].split(l)[0]]), [i[n].split(l)[1]].concat(i.slice(n + 1))];
    return (c = c.map(function(t, e) {
      var i = (1 === e ? !s : s) ? "height" : "width",
        n = !1;
      return t.reduce(function(t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, n = !0, t) : n ? (t[t.length - 1] += e, n = !1, t) : t.concat(e)
      }, []).map(function(t) {
        return function(t, e, i, n) {
          var o, r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            a = +r[1],
            s = r[2];
          if (!a) return t;
          if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? a : ("vh" === s ? L(document.documentElement.clientHeight, window.innerHeight || 0) : L(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
          switch (s) {
            case "%p":
              o = i;
              break;
            case "%":
            case "%r":
            default:
              o = n
          }
          return w(o)[e] / 100 * a
        }(t, i, o, r)
      })
    })).forEach(function(i, n) {
      i.forEach(function(t, e) {
        I(t) && (a[n] += t * ("-" === i[e - 1] ? -1 : 1))
      })
    }), a
  }
  for (var O = Math.min, F = Math.round, N = Math.floor, L = Math.max, R = "undefined" != typeof window && "undefined" != typeof document, B = ["Edge", "Trident", "Firefox"], H = 0, W = 0; W < B.length; W += 1)
    if (R && 0 <= navigator.userAgent.indexOf(B[W])) {
      H = 1;
      break
    } var z = R && window.Promise ? function(t) {
      var e = !1;
      return function() {
        e || (e = !0, window.Promise.resolve().then(function() {
          e = !1, t()
        }))
      }
    } : function(t) {
      var e = !1;
      return function() {
        e || (e = !0, setTimeout(function() {
          e = !1, t()
        }, H))
      }
    },
    V = R && !(!window.MSInputMethodContext || !document.documentMode),
    q = R && /MSIE 10/.test(navigator.userAgent),
    U = function() {
      function n(t, e) {
        for (var i, n = 0; n < e.length; n++)(i = e[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
      return function(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
      }
    }(),
    Y = function(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    },
    $ = Object.assign || function(t) {
      for (var e, i = 1; i < arguments.length; i++)
        for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t
    },
    X = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    K = X.slice(3),
    Q = "flip",
    J = "clockwise",
    G = "counterclockwise",
    Z = function() {
      function r(t, e) {
        var i = this,
          n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        (function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        })(this, r), this.scheduleUpdate = function() {
          return requestAnimationFrame(i.update)
        }, this.update = z(this.update.bind(this)), this.options = $({}, r.Defaults, n), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys($({}, r.Defaults.modifiers, n.modifiers)).forEach(function(t) {
          i.options.modifiers[t] = $({}, r.Defaults.modifiers[t] || {}, n.modifiers ? n.modifiers[t] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
          return $({
            name: t
          }, i.options.modifiers[t])
        }).sort(function(t, e) {
          return t.order - e.order
        }), this.modifiers.forEach(function(t) {
          t.enabled && a(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
        }), this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), this.state.eventsEnabled = o
      }
      return U(r, [{
        key: "update",
        value: function() {
          return function() {
            if (!this.state.isDestroyed) {
              var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
              };
              t.offsets.reference = l(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = s(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = M(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = P(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
            }
          }.call(this)
        }
      }, {
        key: "destroy",
        value: function() {
          return function() {
            return this.state.isDestroyed = !0, t(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
          }.call(this)
        }
      }, {
        key: "enableEventListeners",
        value: function() {
          return function() {
            this.state.eventsEnabled || (this.state = e(this.reference, this.options, this.state, this.scheduleUpdate))
          }.call(this)
        }
      }, {
        key: "disableEventListeners",
        value: function() {
          return i.call(this)
        }
      }]), r
    }();
  return Z.Utils = ("undefined" == typeof window ? global : window).PopperUtils, Z.placements = X, Z.Defaults = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function() {},
    onUpdate: function() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function(t) {
          var e = t.placement,
            i = e.split("-")[0],
            n = e.split("-")[1];
          if (n) {
            var o = t.offsets,
              r = o.reference,
              a = o.popper,
              s = -1 !== ["bottom", "top"].indexOf(i),
              l = s ? "left" : "top",
              c = s ? "width" : "height",
              u = {
                start: Y({}, l, r[l]),
                end: Y({}, l, r[l] + r[c] - a[c])
              };
            t.offsets.popper = $({}, a, u[n])
          }
          return t
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function(t, e) {
          var i, n = e.offset,
            o = t.placement,
            r = t.offsets,
            a = r.popper,
            s = r.reference,
            l = o.split("-")[0];
          return i = I(+n) ? [+n, 0] : E(n, a, s, l), "left" === l ? (a.top += i[0], a.left -= i[1]) : "right" === l ? (a.top += i[0], a.left += i[1]) : "top" === l ? (a.left += i[0], a.top -= i[1]) : "bottom" === l && (a.left += i[0], a.top += i[1]), t.popper = a, t
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function(t, n) {
          var e = n.boundariesElement || y(t.instance.popper);
          t.instance.reference === e && (e = y(e));
          var i = j("transform"),
            o = t.instance.popper.style,
            r = o.top,
            a = o.left,
            s = o[i];
          o.top = "", o.left = "", o[i] = "";
          var l = T(t.instance.popper, t.instance.reference, n.padding, e, t.positionFixed);
          o.top = r, o.left = a, o[i] = s, n.boundaries = l;
          var c = n.priority,
            u = t.offsets.popper,
            h = {
              primary: function(t) {
                var e = u[t];
                return u[t] < l[t] && !n.escapeWithReference && (e = L(u[t], l[t])), Y({}, t, e)
              },
              secondary: function(t) {
                var e = "right" === t ? "left" : "top",
                  i = u[e];
                return u[t] > l[t] && !n.escapeWithReference && (i = O(u[e], l[t] - ("right" === t ? u.width : u.height))), Y({}, e, i)
              }
            };
          return c.forEach(function(t) {
            var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
            u = $({}, u, h[e](t))
          }), t.offsets.popper = u, t
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function(t) {
          var e = t.offsets,
            i = e.popper,
            n = e.reference,
            o = t.placement.split("-")[0],
            r = N,
            a = -1 !== ["top", "bottom"].indexOf(o),
            s = a ? "right" : "bottom",
            l = a ? "left" : "top",
            c = a ? "width" : "height";
          return i[s] < r(n[l]) && (t.offsets.popper[l] = r(n[l]) - i[c]), i[l] > r(n[s]) && (t.offsets.popper[l] = r(n[s])), t
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function(t, e) {
          var i;
          if (!D(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var n = e.element;
          if ("string" == typeof n) {
            if (!(n = t.instance.popper.querySelector(n))) return t
          } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
          var o = t.placement.split("-")[0],
            r = t.offsets,
            a = r.popper,
            s = r.reference,
            l = -1 !== ["left", "right"].indexOf(o),
            c = l ? "height" : "width",
            u = l ? "Top" : "Left",
            h = u.toLowerCase(),
            d = l ? "left" : "top",
            f = l ? "bottom" : "right",
            p = C(n)[c];
          s[f] - p < a[h] && (t.offsets.popper[h] -= a[h] - (s[f] - p)), s[h] + p > a[f] && (t.offsets.popper[h] += s[h] + p - a[f]), t.offsets.popper = w(t.offsets.popper);
          var g = s[h] + s[c] / 2 - p / 2,
            v = x(t.instance.popper),
            m = parseFloat(v["margin" + u], 10),
            y = parseFloat(v["border" + u + "Width"], 10),
            b = g - t.offsets.popper[h] - m - y;
          return b = L(O(a[c] - p, b), 0), t.arrowElement = n, t.offsets.arrow = (Y(i = {}, h, F(b)), Y(i, d, ""), i), t
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function(p, g) {
          if (t(p.instance.modifiers, "inner")) return p;
          if (p.flipped && p.placement === p.originalPlacement) return p;
          var v = T(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
            m = p.placement.split("-")[0],
            y = _(m),
            b = p.placement.split("-")[1] || "",
            x = [];
          switch (g.behavior) {
            case Q:
              x = [m, y];
              break;
            case J:
              x = o(m);
              break;
            case G:
              x = o(m, !0);
              break;
            default:
              x = g.behavior
          }
          return x.forEach(function(t, e) {
            if (m !== t || x.length === e + 1) return p;
            m = p.placement.split("-")[0], y = _(m);
            var i, n = p.offsets.popper,
              o = p.offsets.reference,
              r = N,
              a = "left" === m && r(n.right) > r(o.left) || "right" === m && r(n.left) < r(o.right) || "top" === m && r(n.bottom) > r(o.top) || "bottom" === m && r(n.top) < r(o.bottom),
              s = r(n.left) < r(v.left),
              l = r(n.right) > r(v.right),
              c = r(n.top) < r(v.top),
              u = r(n.bottom) > r(v.bottom),
              h = "left" === m && s || "right" === m && l || "top" === m && c || "bottom" === m && u,
              d = -1 !== ["top", "bottom"].indexOf(m),
              f = !!g.flipVariations && (d && "start" === b && s || d && "end" === b && l || !d && "start" === b && c || !d && "end" === b && u);
            (a || h || f) && (p.flipped = !0, (a || h) && (m = x[e + 1]), f && (b = "end" === (i = b) ? "start" : "start" === i ? "end" : i), p.placement = m + (b ? "-" + b : ""), p.offsets.popper = $({}, p.offsets.popper, M(p.instance.popper, p.offsets.reference, p.placement)), p = P(p.instance.modifiers, p, "flip"))
          }), p
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function(t) {
          var e = t.placement,
            i = e.split("-")[0],
            n = t.offsets,
            o = n.popper,
            r = n.reference,
            a = -1 !== ["left", "right"].indexOf(i),
            s = -1 === ["top", "left"].indexOf(i);
          return o[a ? "left" : "top"] = r[i] - (s ? o[a ? "width" : "height"] : 0), t.placement = _(e), t.offsets.popper = w(o), t
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function(t) {
          if (!D(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
            i = A(t.instance.modifiers, function(t) {
              return "preventOverflow" === t.name
            }).boundaries;
          if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
            if (!0 === t.hide) return t;
            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
          } else {
            if (!1 === t.hide) return t;
            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
          }
          return t
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function(t, e) {
          var i = e.x,
            n = e.y,
            o = t.offsets.popper,
            r = A(t.instance.modifiers, function(t) {
              return "applyStyle" === t.name
            }).gpuAcceleration;
          void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var a, s, l = void 0 === r ? e.gpuAcceleration : r,
            c = b(y(t.instance.popper)),
            u = {
              position: o.position
            },
            h = {
              left: N(o.left),
              top: F(o.top),
              bottom: F(o.bottom),
              right: N(o.right)
            },
            d = "bottom" === i ? "top" : "bottom",
            f = "right" === n ? "left" : "right",
            p = j("transform");
          if (s = "bottom" == d ? -c.height + h.bottom : h.top, a = "right" == f ? -c.width + h.right : h.left, l && p) u[p] = "translate3d(" + a + "px, " + s + "px, 0)", u[d] = 0, u[f] = 0, u.willChange = "transform";
          else {
            var g = "bottom" == d ? -1 : 1,
              v = "right" == f ? -1 : 1;
            u[d] = s * g, u[f] = a * v, u.willChange = d + ", " + f
          }
          var m = {
            "x-placement": t.placement
          };
          return t.attributes = $({}, m, t.attributes), t.styles = $({}, u, t.styles), t.arrowStyles = $({}, t.offsets.arrow, t.arrowStyles), t
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function(t) {
          return c(t.instance.popper, t.styles), e = t.instance.popper, i = t.attributes, Object.keys(i).forEach(function(t) {
            !1 === i[t] ? e.removeAttribute(t) : e.setAttribute(t, i[t])
          }), t.arrowElement && Object.keys(t.arrowStyles).length && c(t.arrowElement, t.arrowStyles), t;
          var e, i
        },
        onLoad: function(t, e, i, n, o) {
          var r = l(o, e, t, i.positionFixed),
            a = s(i.placement, r, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
          return e.setAttribute("x-placement", a), c(e, {
            position: i.positionFixed ? "fixed" : "absolute"
          }), i
        },
        gpuAcceleration: void 0
      }
    }
  }, Z
}),
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : t.Util = e(t.jQuery)
}(this, function(t) {
  "use strict";
  return function(n) {
    var e = "transitionend";

    function t(t) {
      var e = this,
        i = !1;
      return n(this).one(l.TRANSITION_END, function() {
        i = !0
      }), setTimeout(function() {
        i || l.triggerTransitionEnd(e)
      }, t), this
    }
    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
      },
      getSelectorFromElement: function(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");
        try {
          return document.querySelector(e) ? e : null
        } catch (t) {
          return null
        }
      },
      getTransitionDurationFromElement: function(t) {
        if (!t) return 0;
        var e = n(t).css("transition-duration");
        return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
      },
      reflow: function(t) {
        return t.offsetHeight
      },
      triggerTransitionEnd: function(t) {
        n(t).trigger(e)
      },
      supportsTransitionEnd: function() {
        return Boolean(e)
      },
      isElement: function(t) {
        return (t[0] || t).nodeType
      },
      typeCheckConfig: function(t, e, i) {
        for (var n in i)
          if (Object.prototype.hasOwnProperty.call(i, n)) {
            var o = i[n],
              r = e[n],
              a = r && l.isElement(r) ? "element" : (s = r, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + o + '".')
          } var s
      }
    };
    return n.fn.emulateTransitionEnd = t, n.event.special[l.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function(t) {
        if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    }, l
  }(t = t && t.hasOwnProperty("default") ? t.default : t)
}),
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], e) : t.Carousel = e(t.jQuery, t.Util)
}(this, function(t, f) {
  "use strict";

  function o(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }

  function a(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), e.forEach(function(t) {
        var e, i, n;
        e = o, n = r[i = t], i in e ? Object.defineProperty(e, i, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[i] = n
      })
    }
    return o
  }
  var p, s, l, c, e, i, u, h, g, d, v, m, y, b, x, w, k, S, T, C, _, M, A, P, j, n, r, I;
  return t = t && t.hasOwnProperty("default") ? t.default : t, f = f && f.hasOwnProperty("default") ? f.default : f, s = "carousel", c = "." + (l = "bs.carousel"), e = ".data-api", i = (p = t).fn[s], u = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, h = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, g = "next", d = "prev", v = "left", m = "right", y = {
    SLIDE: "slide" + c,
    SLID: "slid" + c,
    KEYDOWN: "keydown" + c,
    MOUSEENTER: "mouseenter" + c,
    MOUSELEAVE: "mouseleave" + c,
    TOUCHEND: "touchend" + c,
    LOAD_DATA_API: "load" + c + e,
    CLICK_DATA_API: "click" + c + e
  }, b = "carousel", x = "active", w = "slide", k = "carousel-item-right", S = "carousel-item-left", T = "carousel-item-next", C = "carousel-item-prev", _ = ".active", M = ".active.carousel-item", A = ".carousel-item", P = ".carousel-item-next, .carousel-item-prev", j = ".carousel-indicators", n = "[data-slide], [data-slide-to]", r = '[data-ride="carousel"]', I = function() {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = p(t)[0], this._indicatorsElement = this._element.querySelector(j), this._addEventListeners()
    }
    var t, e, i, n = r.prototype;
    return n.next = function() {
      this._isSliding || this._slide(g)
    }, n.nextWhenVisible = function() {
      !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
    }, n.prev = function() {
      this._isSliding || this._slide(d)
    }, n.pause = function(t) {
      t || (this._isPaused = !0), this._element.querySelector(P) && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
    }, n.cycle = function(t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }, n.to = function(t) {
      var e = this;
      this._activeElement = this._element.querySelector(M);
      var i = this._getItemIndex(this._activeElement);
      if (!(t > this._items.length - 1 || t < 0))
        if (this._isSliding) p(this._element).one(y.SLID, function() {
          return e.to(t)
        });
        else {
          if (i === t) return this.pause(), void this.cycle();
          var n = i < t ? g : d;
          this._slide(n, this._items[t])
        }
    }, n.dispose = function() {
      p(this._element).off(c), p.removeData(this._element, l), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
    }, n._getConfig = function(t) {
      return t = a({}, u, t), f.typeCheckConfig(s, t, h), t
    }, n._addEventListeners = function() {
      var e = this;
      this._config.keyboard && p(this._element).on(y.KEYDOWN, function(t) {
        return e._keydown(t)
      }), "hover" === this._config.pause && (p(this._element).on(y.MOUSEENTER, function(t) {
        return e.pause(t)
      }).on(y.MOUSELEAVE, function(t) {
        return e.cycle(t)
      }), "ontouchstart" in document.documentElement && p(this._element).on(y.TOUCHEND, function() {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
          return e.cycle(t)
        }, 500 + e._config.interval)
      }))
    }, n._keydown = function(t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;
        case 39:
          t.preventDefault(), this.next()
      }
    }, n._getItemIndex = function(t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(A)) : [], this._items.indexOf(t)
    }, n._getItemByDirection = function(t, e) {
      var i = t === g,
        n = t === d,
        o = this._getItemIndex(e),
        r = this._items.length - 1;
      if ((n && 0 === o || i && o === r) && !this._config.wrap) return e;
      var a = (o + (t === d ? -1 : 1)) % this._items.length;
      return -1 === a ? this._items[this._items.length - 1] : this._items[a]
    }, n._triggerSlideEvent = function(t, e) {
      var i = this._getItemIndex(t),
        n = this._getItemIndex(this._element.querySelector(M)),
        o = p.Event(y.SLIDE, {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
      return p(this._element).trigger(o), o
    }, n._setActiveIndicatorElement = function(t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(_));
        p(e).removeClass(x);
        var i = this._indicatorsElement.children[this._getItemIndex(t)];
        i && p(i).addClass(x)
      }
    }, n._slide = function(t, e) {
      var i, n, o, r = this,
        a = this._element.querySelector(M),
        s = this._getItemIndex(a),
        l = e || a && this._getItemByDirection(t, a),
        c = this._getItemIndex(l),
        u = Boolean(this._interval);
      if (o = t === g ? (i = S, n = T, v) : (i = k, n = C, m), l && p(l).hasClass(x)) this._isSliding = !1;
      else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && a && l) {
        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
        var h = p.Event(y.SLID, {
          relatedTarget: l,
          direction: o,
          from: s,
          to: c
        });
        if (p(this._element).hasClass(w)) {
          p(l).addClass(n), f.reflow(l), p(a).addClass(i), p(l).addClass(i);
          var d = f.getTransitionDurationFromElement(a);
          p(a).one(f.TRANSITION_END, function() {
            p(l).removeClass(i + " " + n).addClass(x), p(a).removeClass(x + " " + n + " " + i), r._isSliding = !1, setTimeout(function() {
              return p(r._element).trigger(h)
            }, 0)
          }).emulateTransitionEnd(d)
        } else p(a).removeClass(x), p(l).addClass(x), this._isSliding = !1, p(this._element).trigger(h);
        u && this.cycle()
      }
    }, r._jQueryInterface = function(n) {
      return this.each(function() {
        var t = p(this).data(l),
          e = a({}, u, p(this).data());
        "object" == typeof n && (e = a({}, e, n));
        var i = "string" == typeof n ? n : e.slide;
        if (t || (t = new r(this, e), p(this).data(l, t)), "number" == typeof n) t.to(n);
        else if ("string" == typeof i) {
          if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
          t[i]()
        } else e.interval && (t.pause(), t.cycle())
      })
    }, r._dataApiClickHandler = function(t) {
      var e = f.getSelectorFromElement(this);
      if (e) {
        var i = p(e)[0];
        if (i && p(i).hasClass(b)) {
          var n = a({}, p(i).data(), p(this).data()),
            o = this.getAttribute("data-slide-to");
          o && (n.interval = !1), r._jQueryInterface.call(p(i), n), o && p(i).data(l).to(o), t.preventDefault()
        }
      }
    }, t = r, i = [{
      key: "VERSION",
      get: function() {
        return "4.1.3"
      }
    }, {
      key: "Default",
      get: function() {
        return u
      }
    }], (e = null) && o(t.prototype, e), i && o(t, i), r
  }(), p(document).on(y.CLICK_DATA_API, n, I._dataApiClickHandler), p(window).on(y.LOAD_DATA_API, function() {
    for (var t = [].slice.call(document.querySelectorAll(r)), e = 0, i = t.length; e < i; e++) {
      var n = p(t[e]);
      I._jQueryInterface.call(n, n.data())
    }
  }), p.fn[s] = I._jQueryInterface, p.fn[s].Constructor = I, p.fn[s].noConflict = function() {
    return p.fn[s] = i, I._jQueryInterface
  }, I
}),
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], e) : t.Collapse = e(t.jQuery, t.Util)
}(this, function(t, l) {
  "use strict";

  function o(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }

  function r(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), e.forEach(function(t) {
        var e, i, n;
        e = o, n = r[i = t], i in e ? Object.defineProperty(e, i, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[i] = n
      })
    }
    return o
  }
  var c, a, u, e, i, h, d, f, p, g, v, m, y, b, x, w, s;
  return t = t && t.hasOwnProperty("default") ? t.default : t, l = l && l.hasOwnProperty("default") ? l.default : l, a = "collapse", e = "." + (u = "bs.collapse"), i = (c = t).fn[a], h = {
    toggle: !0,
    parent: ""
  }, d = {
    toggle: "boolean",
    parent: "(string|element)"
  }, f = {
    SHOW: "show" + e,
    SHOWN: "shown" + e,
    HIDE: "hide" + e,
    HIDDEN: "hidden" + e,
    CLICK_DATA_API: "click" + e + ".data-api"
  }, p = "show", g = "collapse", v = "collapsing", m = "collapsed", y = "width", b = "height", x = ".show, .collapsing", w = '[data-toggle="collapse"]', s = function() {
    function s(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = c.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
      for (var i = [].slice.call(document.querySelectorAll(w)), n = 0, o = i.length; n < o; n++) {
        var r = i[n],
          a = l.getSelectorFromElement(r),
          s = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
            return t === e
          });
        null !== a && 0 < s.length && (this._selector = a, this._triggerArray.push(r))
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
    var t, e, i, n = s.prototype;
    return n.toggle = function() {
      c(this._element).hasClass(p) ? this.hide() : this.show()
    }, n.show = function() {
      var t, e, i = this;
      if (!this._isTransitioning && !c(this._element).hasClass(p) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(x)).filter(function(t) {
          return t.getAttribute("data-parent") === i._config.parent
        })).length && (t = null), !(t && (e = c(t).not(this._selector).data(u)) && e._isTransitioning))) {
        var n = c.Event(f.SHOW);
        if (c(this._element).trigger(n), !n.isDefaultPrevented()) {
          t && (s._jQueryInterface.call(c(t).not(this._selector), "hide"), e || c(t).data(u, null));
          var o = this._getDimension();
          c(this._element).removeClass(g).addClass(v), this._element.style[o] = 0, this._triggerArray.length && c(this._triggerArray).removeClass(m).attr("aria-expanded", !0), this.setTransitioning(!0);
          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
            a = l.getTransitionDurationFromElement(this._element);
          c(this._element).one(l.TRANSITION_END, function() {
            c(i._element).removeClass(v).addClass(g).addClass(p), i._element.style[o] = "", i.setTransitioning(!1), c(i._element).trigger(f.SHOWN)
          }).emulateTransitionEnd(a), this._element.style[o] = this._element[r] + "px"
        }
      }
    }, n.hide = function() {
      var t = this;
      if (!this._isTransitioning && c(this._element).hasClass(p)) {
        var e = c.Event(f.HIDE);
        if (c(this._element).trigger(e), !e.isDefaultPrevented()) {
          var i = this._getDimension();
          this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", l.reflow(this._element), c(this._element).addClass(v).removeClass(g).removeClass(p);
          var n = this._triggerArray.length;
          if (0 < n)
            for (var o = 0; o < n; o++) {
              var r = this._triggerArray[o],
                a = l.getSelectorFromElement(r);
              if (null !== a) c([].slice.call(document.querySelectorAll(a))).hasClass(p) || c(r).addClass(m).attr("aria-expanded", !1)
            }
          this.setTransitioning(!0);
          this._element.style[i] = "";
          var s = l.getTransitionDurationFromElement(this._element);
          c(this._element).one(l.TRANSITION_END, function() {
            t.setTransitioning(!1), c(t._element).removeClass(v).addClass(g).trigger(f.HIDDEN)
          }).emulateTransitionEnd(s)
        }
      }
    }, n.setTransitioning = function(t) {
      this._isTransitioning = t
    }, n.dispose = function() {
      c.removeData(this._element, u), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
    }, n._getConfig = function(t) {
      return (t = r({}, h, t)).toggle = Boolean(t.toggle), l.typeCheckConfig(a, t, d), t
    }, n._getDimension = function() {
      return c(this._element).hasClass(y) ? y : b
    }, n._getParent = function() {
      var i = this,
        t = null;
      l.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
        n = [].slice.call(t.querySelectorAll(e));
      return c(n).each(function(t, e) {
        i._addAriaAndCollapsedClass(s._getTargetFromElement(e), [e])
      }), t
    }, n._addAriaAndCollapsedClass = function(t, e) {
      if (t) {
        var i = c(t).hasClass(p);
        e.length && c(e).toggleClass(m, !i).attr("aria-expanded", i)
      }
    }, s._getTargetFromElement = function(t) {
      var e = l.getSelectorFromElement(t);
      return e ? document.querySelector(e) : null
    }, s._jQueryInterface = function(n) {
      return this.each(function() {
        var t = c(this),
          e = t.data(u),
          i = r({}, h, t.data(), "object" == typeof n && n ? n : {});
        if (!e && i.toggle && /show|hide/.test(n) && (i.toggle = !1), e || (e = new s(this, i), t.data(u, e)), "string" == typeof n) {
          if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]()
        }
      })
    }, t = s, i = [{
      key: "VERSION",
      get: function() {
        return "4.1.3"
      }
    }, {
      key: "Default",
      get: function() {
        return h
      }
    }], (e = null) && o(t.prototype, e), i && o(t, i), s
  }(), c(document).on(f.CLICK_DATA_API, w, function(t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var i = c(this),
      e = l.getSelectorFromElement(this),
      n = [].slice.call(document.querySelectorAll(e));
    c(n).each(function() {
      var t = c(this),
        e = t.data(u) ? "toggle" : i.data();
      s._jQueryInterface.call(t, e)
    })
  }), c.fn[a] = s._jQueryInterface, c.fn[a].Constructor = s, c.fn[a].noConflict = function() {
    return c.fn[a] = i, s._jQueryInterface
  }, s
}),
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("popper.js"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "popper.js", "./util.js"], e) : t.Dropdown = e(t.jQuery, t.Popper, t.Util)
}(this, function(t, r, a) {
  "use strict";

  function o(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }

  function s(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), e.forEach(function(t) {
        var e, i, n;
        e = o, n = r[i = t], i in e ? Object.defineProperty(e, i, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[i] = n
      })
    }
    return o
  }
  var u, l, h, d, e, i, f, p, g, v, m, y, b, x, w, k, n, S, T, C, _, M, A, P, j, I, D, E, c;
  return t = t && t.hasOwnProperty("default") ? t.default : t, r = r && r.hasOwnProperty("default") ? r.default : r, a = a && a.hasOwnProperty("default") ? a.default : a, l = "dropdown", d = "." + (h = "bs.dropdown"), e = ".data-api", i = (u = t).fn[l], f = new RegExp("38|40|27"), p = {
    HIDE: "hide" + d,
    HIDDEN: "hidden" + d,
    SHOW: "show" + d,
    SHOWN: "shown" + d,
    CLICK: "click" + d,
    CLICK_DATA_API: "click" + d + e,
    KEYDOWN_DATA_API: "keydown" + d + e,
    KEYUP_DATA_API: "keyup" + d + e
  }, g = "disabled", v = "show", m = "dropup", y = "dropright", b = "dropleft", x = "dropdown-menu-right", w = "position-static", k = '[data-toggle="dropdown"]', n = ".dropdown form", S = ".dropdown-menu", T = ".navbar-nav", C = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", _ = "top-start", M = "top-end", A = "bottom-start", P = "bottom-end", j = "right-start", I = "left-start", D = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, E = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, c = function() {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
    var t, e, i, n = c.prototype;
    return n.toggle = function() {
      if (!this._element.disabled && !u(this._element).hasClass(g)) {
        var t = c._getParentFromElement(this._element),
          e = u(this._menu).hasClass(v);
        if (c._clearMenus(), !e) {
          var i = {
              relatedTarget: this._element
            },
            n = u.Event(p.SHOW, i);
          if (u(t).trigger(n), !n.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (void 0 === r) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var o = this._element;
              "parent" === this._config.reference ? o = t : a.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && u(t).addClass(w), this._popper = new r(o, this._menu, this._getPopperConfig())
            }
            "ontouchstart" in document.documentElement && 0 === u(t).closest(T).length && u(document.body).children().on("mouseover", null, u.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), u(this._menu).toggleClass(v), u(t).toggleClass(v).trigger(u.Event(p.SHOWN, i))
          }
        }
      }
    }, n.dispose = function() {
      u.removeData(this._element, h), u(this._element).off(d), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
    }, n.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
    }, n._addEventListeners = function() {
      var e = this;
      u(this._element).on(p.CLICK, function(t) {
        t.preventDefault(), t.stopPropagation(), e.toggle()
      })
    }, n._getConfig = function(t) {
      return t = s({}, this.constructor.Default, u(this._element).data(), t), a.typeCheckConfig(l, t, this.constructor.DefaultType), t
    }, n._getMenuElement = function() {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);
        t && (this._menu = t.querySelector(S))
      }
      return this._menu
    }, n._getPlacement = function() {
      var t = u(this._element.parentNode),
        e = A;
      return t.hasClass(m) ? (e = _, u(this._menu).hasClass(x) && (e = M)) : t.hasClass(y) ? e = j : t.hasClass(b) ? e = I : u(this._menu).hasClass(x) && (e = P), e
    }, n._detectNavbar = function() {
      return 0 < u(this._element).closest(".navbar").length
    }, n._getPopperConfig = function() {
      var e = this,
        t = {};
      "function" == typeof this._config.offset ? t.fn = function(t) {
        return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t
      } : t.offset = this._config.offset;
      var i = {
        placement: this._getPlacement(),
        modifiers: {
          offset: t,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (i.modifiers.applyStyle = {
        enabled: !1
      }), i
    }, c._jQueryInterface = function(e) {
      return this.each(function() {
        var t = u(this).data(h);
        if (t || (t = new c(this, "object" == typeof e ? e : null), u(this).data(h, t)), "string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]()
        }
      })
    }, c._clearMenus = function(t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
        for (var e = [].slice.call(document.querySelectorAll(k)), i = 0, n = e.length; i < n; i++) {
          var o = c._getParentFromElement(e[i]),
            r = u(e[i]).data(h),
            a = {
              relatedTarget: e[i]
            };
          if (t && "click" === t.type && (a.clickEvent = t), r) {
            var s = r._menu;
            if (u(o).hasClass(v) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && u.contains(o, t.target))) {
              var l = u.Event(p.HIDE, a);
              u(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && u(document.body).children().off("mouseover", null, u.noop), e[i].setAttribute("aria-expanded", "false"), u(s).removeClass(v), u(o).removeClass(v).trigger(u.Event(p.HIDDEN, a)))
            }
          }
        }
    }, c._getParentFromElement = function(t) {
      var e, i = a.getSelectorFromElement(t);
      return i && (e = document.querySelector(i)), e || t.parentNode
    }, c._dataApiKeydownHandler = function(t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || u(t.target).closest(S).length)) : f.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !u(this).hasClass(g))) {
        var e = c._getParentFromElement(this),
          i = u(e).hasClass(v);
        if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
          var n = [].slice.call(e.querySelectorAll(C));
          if (0 !== n.length) {
            var o = n.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < n.length - 1 && o++, o < 0 && (o = 0), n[o].focus()
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(k);
            u(r).trigger("focus")
          }
          u(this).trigger("click")
        }
      }
    }, t = c, i = [{
      key: "VERSION",
      get: function() {
        return "4.1.3"
      }
    }, {
      key: "Default",
      get: function() {
        return D
      }
    }, {
      key: "DefaultType",
      get: function() {
        return E
      }
    }], (e = null) && o(t.prototype, e), i && o(t, i), c
  }(), u(document).on(p.KEYDOWN_DATA_API, k, c._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, S, c._dataApiKeydownHandler).on(p.CLICK_DATA_API + " " + p.KEYUP_DATA_API, c._clearMenus).on(p.CLICK_DATA_API, k, function(t) {
    t.preventDefault(), t.stopPropagation(), c._jQueryInterface.call(u(this), "toggle")
  }).on(p.CLICK_DATA_API, n, function(t) {
    t.stopPropagation()
  }), u.fn[l] = c._jQueryInterface, u.fn[l].Constructor = c, u.fn[l].noConflict = function() {
    return u.fn[l] = i, c._jQueryInterface
  }, c
}),
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], e) : t.Modal = e(t.jQuery, t.Util)
}(this, function(t, a) {
  "use strict";

  function r(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }

  function s(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), e.forEach(function(t) {
        var e, i, n;
        e = o, n = r[i = t], i in e ? Object.defineProperty(e, i, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[i] = n
      })
    }
    return o
  }
  var l, c, u, h, e, d, f, p, g, v, m, y, b, x, i, w, k, S, T;
  return t = t && t.hasOwnProperty("default") ? t.default : t, a = a && a.hasOwnProperty("default") ? a.default : a, c = "modal", h = "." + (u = "bs.modal"), e = (l = t).fn[c], d = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, f = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, p = {
    HIDE: "hide" + h,
    HIDDEN: "hidden" + h,
    SHOW: "show" + h,
    SHOWN: "shown" + h,
    FOCUSIN: "focusin" + h,
    RESIZE: "resize" + h,
    CLICK_DISMISS: "click.dismiss" + h,
    KEYDOWN_DISMISS: "keydown.dismiss" + h,
    MOUSEUP_DISMISS: "mouseup.dismiss" + h,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
    CLICK_DATA_API: "click" + h + ".data-api"
  }, g = "modal-scrollbar-measure", v = "modal-backdrop", m = "modal-open", y = "fade", b = "show", x = ".modal-dialog", i = '[data-toggle="modal"]', w = '[data-dismiss="modal"]', k = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", S = ".sticky-top", T = function() {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(x), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
    }
    var t, e, i, n = o.prototype;
    return n.toggle = function(t) {
      return this._isShown ? this.hide() : this.show(t)
    }, n.show = function(t) {
      var e = this;
      if (!this._isTransitioning && !this._isShown) {
        l(this._element).hasClass(y) && (this._isTransitioning = !0);
        var i = l.Event(p.SHOW, {
          relatedTarget: t
        });
        l(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), l(document.body).addClass(m), this._setEscapeEvent(), this._setResizeEvent(), l(this._element).on(p.CLICK_DISMISS, w, function(t) {
          return e.hide(t)
        }), l(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
          l(e._element).one(p.MOUSEUP_DISMISS, function(t) {
            l(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
          })
        }), this._showBackdrop(function() {
          return e._showElement(t)
        }))
      }
    }, n.hide = function(t) {
      var e = this;
      if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var i = l.Event(p.HIDE);
        if (l(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
          this._isShown = !1;
          var n = l(this._element).hasClass(y);
          if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), l(document).off(p.FOCUSIN), l(this._element).removeClass(b), l(this._element).off(p.CLICK_DISMISS), l(this._dialog).off(p.MOUSEDOWN_DISMISS), n) {
            var o = a.getTransitionDurationFromElement(this._element);
            l(this._element).one(a.TRANSITION_END, function(t) {
              return e._hideModal(t)
            }).emulateTransitionEnd(o)
          } else this._hideModal()
        }
      }
    }, n.dispose = function() {
      l.removeData(this._element, u), l(window, document, this._element, this._backdrop).off(h), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
    }, n.handleUpdate = function() {
      this._adjustDialog()
    }, n._getConfig = function(t) {
      return t = s({}, d, t), a.typeCheckConfig(c, t, f), t
    }, n._showElement = function(t) {
      var e = this,
        i = l(this._element).hasClass(y);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && a.reflow(this._element), l(this._element).addClass(b), this._config.focus && this._enforceFocus();
      var n = l.Event(p.SHOWN, {
          relatedTarget: t
        }),
        o = function() {
          e._config.focus && e._element.focus(), e._isTransitioning = !1, l(e._element).trigger(n)
        };
      if (i) {
        var r = a.getTransitionDurationFromElement(this._element);
        l(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(r)
      } else o()
    }, n._enforceFocus = function() {
      var e = this;
      l(document).off(p.FOCUSIN).on(p.FOCUSIN, function(t) {
        document !== t.target && e._element !== t.target && 0 === l(e._element).has(t.target).length && e._element.focus()
      })
    }, n._setEscapeEvent = function() {
      var e = this;
      this._isShown && this._config.keyboard ? l(this._element).on(p.KEYDOWN_DISMISS, function(t) {
        27 === t.which && (t.preventDefault(), e.hide())
      }) : this._isShown || l(this._element).off(p.KEYDOWN_DISMISS)
    }, n._setResizeEvent = function() {
      var e = this;
      this._isShown ? l(window).on(p.RESIZE, function(t) {
        return e.handleUpdate(t)
      }) : l(window).off(p.RESIZE)
    }, n._hideModal = function() {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
        l(document.body).removeClass(m), t._resetAdjustments(), t._resetScrollbar(), l(t._element).trigger(p.HIDDEN)
      })
    }, n._removeBackdrop = function() {
      this._backdrop && (l(this._backdrop).remove(), this._backdrop = null)
    }, n._showBackdrop = function(t) {
      var e = this,
        i = l(this._element).hasClass(y) ? y : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = v, i && this._backdrop.classList.add(i), l(this._backdrop).appendTo(document.body), l(this._element).on(p.CLICK_DISMISS, function(t) {
            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
          }), i && a.reflow(this._backdrop), l(this._backdrop).addClass(b), !t) return;
        if (!i) return void t();
        var n = a.getTransitionDurationFromElement(this._backdrop);
        l(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(n)
      } else if (!this._isShown && this._backdrop) {
        l(this._backdrop).removeClass(b);
        var o = function() {
          e._removeBackdrop(), t && t()
        };
        if (l(this._element).hasClass(y)) {
          var r = a.getTransitionDurationFromElement(this._backdrop);
          l(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(r)
        } else o()
      } else t && t()
    }, n._adjustDialog = function() {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
    }, n._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }, n._checkScrollbar = function() {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
    }, n._setScrollbar = function() {
      var o = this;
      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(k)),
          e = [].slice.call(document.querySelectorAll(S));
        l(t).each(function(t, e) {
          var i = e.style.paddingRight,
            n = l(e).css("padding-right");
          l(e).data("padding-right", i).css("padding-right", parseFloat(n) + o._scrollbarWidth + "px")
        }), l(e).each(function(t, e) {
          var i = e.style.marginRight,
            n = l(e).css("margin-right");
          l(e).data("margin-right", i).css("margin-right", parseFloat(n) - o._scrollbarWidth + "px")
        });
        var i = document.body.style.paddingRight,
          n = l(document.body).css("padding-right");
        l(document.body).data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
      }
    }, n._resetScrollbar = function() {
      var t = [].slice.call(document.querySelectorAll(k));
      l(t).each(function(t, e) {
        var i = l(e).data("padding-right");
        l(e).removeData("padding-right"), e.style.paddingRight = i || ""
      });
      var e = [].slice.call(document.querySelectorAll("" + S));
      l(e).each(function(t, e) {
        var i = l(e).data("margin-right");
        void 0 !== i && l(e).css("margin-right", i).removeData("margin-right")
      });
      var i = l(document.body).data("padding-right");
      l(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
    }, n._getScrollbarWidth = function() {
      var t = document.createElement("div");
      t.className = g, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e
    }, o._jQueryInterface = function(i, n) {
      return this.each(function() {
        var t = l(this).data(u),
          e = s({}, d, l(this).data(), "object" == typeof i && i ? i : {});
        if (t || (t = new o(this, e), l(this).data(u, t)), "string" == typeof i) {
          if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
          t[i](n)
        } else e.show && t.show(n)
      })
    }, t = o, i = [{
      key: "VERSION",
      get: function() {
        return "4.1.3"
      }
    }, {
      key: "Default",
      get: function() {
        return d
      }
    }], (e = null) && r(t.prototype, e), i && r(t, i), o
  }(), l(document).on(p.CLICK_DATA_API, i, function(t) {
    var e, i = this,
      n = a.getSelectorFromElement(this);
    n && (e = document.querySelector(n));
    var o = l(e).data(u) ? "toggle" : s({}, l(e).data(), l(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = l(e).one(p.SHOW, function(t) {
      t.isDefaultPrevented() || r.one(p.HIDDEN, function() {
        l(i).is(":visible") && i.focus()
      })
    });
    T._jQueryInterface.call(l(e), o, this)
  }), l.fn[c] = T._jQueryInterface, l.fn[c].Constructor = T, l.fn[c].noConflict = function() {
    return l.fn[c] = e, T._jQueryInterface
  }, T
}),
function() {
  "use strict";

  function e(t) {
    if (!t) throw new Error("No options passed to Waypoint constructor");
    if (!t.element) throw new Error("No element option passed to Waypoint constructor");
    if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + i, this.options = e.Adapter.extend({}, e.defaults, t), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, i += 1
  }
  var i = 0,
    r = {};
  e.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t)
  }, e.prototype.trigger = function(t) {
    this.enabled && this.callback && this.callback.apply(this, t)
  }, e.prototype.destroy = function() {
    this.context.remove(this), this.group.remove(this), delete r[this.key]
  }, e.prototype.disable = function() {
    return this.enabled = !1, this
  }, e.prototype.enable = function() {
    return this.context.refresh(), this.enabled = !0, this
  }, e.prototype.next = function() {
    return this.group.next(this)
  }, e.prototype.previous = function() {
    return this.group.previous(this)
  }, e.invokeAll = function(t) {
    var e = [];
    for (var i in r) e.push(r[i]);
    for (var n = 0, o = e.length; n < o; n++) e[n][t]()
  }, e.destroyAll = function() {
    e.invokeAll("destroy")
  }, e.disableAll = function() {
    e.invokeAll("disable")
  }, e.enableAll = function() {
    e.invokeAll("enable")
  }, e.refreshAll = function() {
    e.Context.refreshAll()
  }, e.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }, e.viewportWidth = function() {
    return document.documentElement.clientWidth
  }, e.adapters = [], e.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, e.offsetAliases = {
    "bottom-in-view": function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = e
}(),
function() {
  "use strict";

  function e(t) {
    window.setTimeout(t, 1e3 / 60)
  }

  function i(t) {
    this.element = t, this.Adapter = v.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }
  var n = 0,
    o = {},
    v = window.Waypoint,
    t = window.onload;
  i.prototype.add = function(t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
  }, i.prototype.checkEmpty = function() {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      e = this.Adapter.isEmptyObject(this.waypoints.vertical);
    t && e && (this.adapter.off(".waypoints"), delete o[this.key])
  }, i.prototype.createThrottledResizeHandler = function() {
    function t() {
      e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", function() {
      e.didResize || (e.didResize = !0, v.requestAnimationFrame(t))
    })
  }, i.prototype.createThrottledScrollHandler = function() {
    function t() {
      e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", function() {
      (!e.didScroll || v.isTouch) && (e.didScroll = !0, v.requestAnimationFrame(t))
    })
  }, i.prototype.handleResize = function() {
    v.Context.refreshAll()
  }, i.prototype.handleScroll = function() {
    var t = {},
      e = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };
    for (var i in e) {
      var n = e[i],
        o = n.newScroll > n.oldScroll ? n.forward : n.backward;
      for (var r in this.waypoints[i]) {
        var a = this.waypoints[i][r],
          s = n.oldScroll < a.triggerPoint,
          l = n.newScroll >= a.triggerPoint;
        (s && l || !s && !l) && (a.queueTrigger(o), t[a.group.id] = a.group)
      }
    }
    for (var c in t) t[c].flushTriggers();
    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    }
  }, i.prototype.innerHeight = function() {
    return this.element == this.element.window ? v.viewportHeight() : this.adapter.innerHeight()
  }, i.prototype.remove = function(t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
  }, i.prototype.innerWidth = function() {
    return this.element == this.element.window ? v.viewportWidth() : this.adapter.innerWidth()
  }, i.prototype.destroy = function() {
    var t = [];
    for (var e in this.waypoints)
      for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
    for (var n = 0, o = t.length; n < o; n++) t[n].destroy()
  }, i.prototype.refresh = function() {
    var t, e = this.element == this.element.window,
      i = e ? void 0 : this.adapter.offset(),
      n = {};
    for (var o in this.handleScroll(), t = {
        horizontal: {
          contextOffset: e ? 0 : i.left,
          contextScroll: e ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left",
          offsetProp: "left"
        },
        vertical: {
          contextOffset: e ? 0 : i.top,
          contextScroll: e ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up",
          offsetProp: "top"
        }
      }) {
      var r = t[o];
      for (var a in this.waypoints[o]) {
        var s, l, c, u, h = this.waypoints[o][a],
          d = h.options.offset,
          f = h.triggerPoint,
          p = 0,
          g = null == f;
        h.element !== h.element.window && (p = h.adapter.offset()[r.offsetProp]), "function" == typeof d ? d = d.apply(h) : "string" == typeof d && (d = parseFloat(d), -1 < h.options.offset.indexOf("%") && (d = Math.ceil(r.contextDimension * d / 100))), s = r.contextScroll - r.contextOffset, h.triggerPoint = p + s - d, l = f < r.oldScroll, c = h.triggerPoint >= r.oldScroll, u = !l && !c, !g && (l && c) ? (h.queueTrigger(r.backward), n[h.group.id] = h.group) : !g && u ? (h.queueTrigger(r.forward), n[h.group.id] = h.group) : g && r.oldScroll >= h.triggerPoint && (h.queueTrigger(r.forward), n[h.group.id] = h.group)
      }
    }
    return v.requestAnimationFrame(function() {
      for (var t in n) n[t].flushTriggers()
    }), this
  }, i.findOrCreateByElement = function(t) {
    return i.findByElement(t) || new i(t)
  }, i.refreshAll = function() {
    for (var t in o) o[t].refresh()
  }, i.findByElement = function(t) {
    return o[t.waypointContextKey]
  }, window.onload = function() {
    t && t(), i.refreshAll()
  }, v.requestAnimationFrame = function(t) {
    (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
  }, v.Context = i
}(),
function() {
  "use strict";

  function a(t, e) {
    return t.triggerPoint - e.triggerPoint
  }

  function s(t, e) {
    return e.triggerPoint - t.triggerPoint
  }

  function e(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
  }
  var i = {
      vertical: {},
      horizontal: {}
    },
    n = window.Waypoint;
  e.prototype.add = function(t) {
    this.waypoints.push(t)
  }, e.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }, e.prototype.flushTriggers = function() {
    for (var t in this.triggerQueues) {
      var e = this.triggerQueues[t],
        i = "up" === t || "left" === t;
      e.sort(i ? s : a);
      for (var n = 0, o = e.length; n < o; n += 1) {
        var r = e[n];
        (r.options.continuous || n === e.length - 1) && r.trigger([t])
      }
    }
    this.clearTriggerQueues()
  }, e.prototype.next = function(t) {
    this.waypoints.sort(a);
    var e = n.Adapter.inArray(t, this.waypoints);
    return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
  }, e.prototype.previous = function(t) {
    this.waypoints.sort(a);
    var e = n.Adapter.inArray(t, this.waypoints);
    return e ? this.waypoints[e - 1] : null
  }, e.prototype.queueTrigger = function(t, e) {
    this.triggerQueues[e].push(t)
  }, e.prototype.remove = function(t) {
    var e = n.Adapter.inArray(t, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
  }, e.prototype.first = function() {
    return this.waypoints[0]
  }, e.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }, e.findOrCreate = function(t) {
    return i[t.axis][t.name] || new e(t)
  }, n.Group = e
}(),
function() {
  "use strict";

  function i(t) {
    this.$element = n(t)
  }
  var n = window.jQuery,
    t = window.Waypoint;
  n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) {
    i.prototype[e] = function() {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[e].apply(this.$element, t)
    }
  }), n.each(["extend", "inArray", "isEmptyObject"], function(t, e) {
    i[e] = n[e]
  }), t.adapters.push({
    name: "jquery",
    Adapter: i
  }), t.Adapter = i
}(),
function() {
  "use strict";

  function t(n) {
    return function() {
      var e = [],
        i = arguments[0];
      return n.isFunction(arguments[0]) && ((i = n.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
        var t = n.extend({}, i, {
          element: this
        });
        "string" == typeof t.context && (t.context = n(this).closest(t.context)[0]), e.push(new o(t))
      }), e
    }
  }
  var o = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function() {
  var b = void 0,
    f = !0,
    j = null,
    l = !1,
    s;

  function m() {
    return function() {}
  }

  function n(t) {
    return function() {
      return this[t]
    }
  }

  function p(t) {
    return function() {
      return t
    }
  }

  function t(e, i, n) {
    if ("string" == typeof e) {
      if (0 === e.indexOf("#") && (e = e.slice(1)), t.Ca[e]) return i && t.log.warn('Player "' + e + '" is already initialised. Options will not be applied.'), n && t.Ca[e].I(n), t.Ca[e];
      e = t.m(e)
    }
    if (!e || !e.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
    return e.player || new t.Player(e, i, n)
  }
  document.createElement("video"), document.createElement("audio"), document.createElement("track");
  var videojs = window.videojs = t;

  function v(e, i, n, o) {
    t.tc.forEach(n, function(t) {
      e(i, t, o)
    })
  }
  t.fc = "4.12", t.sd = "https:" == document.location.protocol ? "https://" : "http://", t.VERSION = "4.12.15", t.options = {
    techOrder: ["html5", "flash"],
    html5: {},
    flash: {},
    width: 300,
    height: 150,
    defaultVolume: 0,
    playbackRates: [],
    inactivityTimeout: 2e3,
    children: {
      mediaLoader: {},
      posterImage: {},
      loadingSpinner: {},
      textTrackDisplay: {},
      bigPlayButton: {},
      controlBar: {},
      errorDisplay: {},
      textTrackSettings: {}
    },
    language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Ef || navigator.language || "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this video."
  }, "GENERATED_CDN_VSN" !== t.fc && (videojs.options.flash.swf = t.sd + "vjs.zencdn.net/" + t.fc + "/video-js.swf"), t.Gd = function(e, i) {
    return t.options.languages[e] = t.options.languages[e] !== b ? t.Z.Aa(t.options.languages[e], i) : i, t.options.languages
  }, t.Ca = {}, "function" == typeof define && define.amd ? define("videojs", [], function() {
    return videojs
  }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), t.Ga = t.CoreObject = m(), t.Ga.extend = function(e) {
    var i, n;
    for (var o in i = (e = e || {}).init || e.l || this.prototype.init || this.prototype.l || m(), (((n = function() {
        i.apply(this, arguments)
      }).prototype = t.i.create(this.prototype)).constructor = n).extend = t.Ga.extend, n.create = t.Ga.create, e) e.hasOwnProperty(o) && (n.prototype[o] = e[o]);
    return n
  }, t.Ga.create = function() {
    var e = t.i.create(this.prototype);
    return this.apply(e, arguments), e
  }, t.b = function(r, e, i) {
    if (t.i.isArray(e)) return v(t.b, r, e, i);
    var a = t.getData(r);
    a.G || (a.G = {}), a.G[e] || (a.G[e] = []), i.s || (i.s = t.s++), a.G[e].push(i), a.ba || (a.disabled = l, a.ba = function(e) {
      if (!a.disabled && (e = t.Nb(e), i = a.G[e.type]))
        for (var i, n = 0, o = (i = i.slice(0)).length; n < o && !e.Nc(); n++) i[n].call(r, e)
    }), 1 == a.G[e].length && (r.addEventListener ? r.addEventListener(e, a.ba, l) : r.attachEvent && r.attachEvent("on" + e, a.ba))
  }, t.n = function(e, i, n) {
    if (t.Ic(e)) {
      var o = t.getData(e);
      if (o.G) {
        if (t.i.isArray(i)) return v(t.n, e, i, n);
        if (i) {
          var r = o.G[i];
          if (r) {
            if (n) {
              if (n.s)
                for (o = 0; o < r.length; o++) r[o].s === n.s && r.splice(o--, 1)
            } else o.G[i] = [];
            t.xc(e, i)
          }
        } else
          for (r in o.G) i = r, o.G[i] = [], t.xc(e, i)
      }
    }
  }, t.xc = function(e, i) {
    var n = t.getData(e);
    0 === n.G[i].length && (delete n.G[i], e.removeEventListener ? e.removeEventListener(i, n.ba, l) : e.detachEvent && e.detachEvent("on" + i, n.ba)), t.hb(n.G) && (delete n.G, delete n.ba, delete n.disabled), t.hb(n) && t.Zc(e)
  }, t.Nb = function(t) {
    function e() {
      return f
    }

    function i() {
      return l
    }
    if (!t || !t.Sb) {
      var n = t || window.event;
      for (var o in t = {}, n) "layerX" !== o && "layerY" !== o && "keyLocation" !== o && ("returnValue" == o && n.preventDefault || (t[o] = n[o]));
      if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
          n.preventDefault && n.preventDefault(), t.returnValue = l, t.ee = e, t.defaultPrevented = f
        }, t.ee = i, t.defaultPrevented = l, t.stopPropagation = function() {
          n.stopPropagation && n.stopPropagation(), t.cancelBubble = f, t.Sb = e
        }, t.Sb = i, t.stopImmediatePropagation = function() {
          n.stopImmediatePropagation && n.stopImmediatePropagation(), t.Nc = e, t.stopPropagation()
        }, t.Nc = i, t.clientX != j) {
        o = document.documentElement;
        var r = document.body;
        t.pageX = t.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
      }
      t.which = t.charCode || t.keyCode, t.button != j && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
    }
    return t
  }, t.o = function(e, i) {
    var n = t.Ic(e) ? t.getData(e) : {},
      o = e.parentNode || e.ownerDocument;
    return "string" == typeof i && (i = {
      type: i,
      target: e
    }), i = t.Nb(i), n.ba && n.ba.call(e, i), o && !i.Sb() && i.bubbles !== l ? t.o(o, i) : o || i.defaultPrevented || (n = t.getData(i.target), !i.target[i.type]) || (n.disabled = f, "function" == typeof i.target[i.type] && i.target[i.type](), n.disabled = l), !i.defaultPrevented
  }, t.N = function(e, i, n) {
    function o() {
      t.n(e, i, o), n.apply(this, arguments)
    }
    if (t.i.isArray(i)) return v(t.N, e, i, n);
    o.s = n.s = n.s || t.s++, t.b(e, i, o)
  };
  var w = Object.prototype.hasOwnProperty;
  t.e = function(e, i) {
    var n;
    return i = i || {}, n = document.createElement(e || "div"), t.i.ca(i, function(t, e) {
      -1 !== t.indexOf("aria-") || "role" == t ? n.setAttribute(t, e) : n[t] = e
    }), n
  }, t.va = function(t) {
    return t.charAt(0).toUpperCase() + t.slice(1)
  }, t.i = {}, t.i.create = Object.create || function(t) {
    function e() {}
    return e.prototype = t, new e
  }, t.i.ca = function(t, e, i) {
    for (var n in t) w.call(t, n) && e.call(i || this, n, t[n])
  }, t.i.D = function(t, e) {
    if (!e) return t;
    for (var i in e) w.call(e, i) && (t[i] = e[i]);
    return t
  }, t.i.Od = function(e, i) {
    var n, o, r;
    for (n in e = t.i.copy(e), i) w.call(i, n) && (o = e[n], r = i[n], e[n] = t.i.ib(o) && t.i.ib(r) ? t.i.Od(o, r) : i[n]);
    return e
  }, t.i.copy = function(e) {
    return t.i.D({}, e)
  }, t.i.ib = function(t) {
    return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
  }, t.i.isArray = Array.isArray || function(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }, t.ge = function(t) {
    return t != t
  }, t.bind = function(e, i, n) {
    function o() {
      return i.apply(e, arguments)
    }
    return i.s || (i.s = t.s++), o.s = n ? n + "_" + i.s : i.s, o
  }, t.ua = {}, t.s = 1, t.expando = "vdata" + (new Date).getTime(), t.getData = function(e) {
    var i = e[t.expando];
    return i || (i = e[t.expando] = t.s++), t.ua[i] || (t.ua[i] = {}), t.ua[i]
  }, t.Ic = function(e) {
    return !(!(e = e[t.expando]) || t.hb(t.ua[e]))
  }, t.Zc = function(i) {
    var e = i[t.expando];
    if (e) {
      delete t.ua[e];
      try {
        delete i[t.expando]
      } catch (e) {
        i.removeAttribute ? i.removeAttribute(t.expando) : i[t.expando] = j
      }
    }
  }, t.hb = function(t) {
    for (var e in t)
      if (t[e] !== j) return l;
    return f
  }, t.Pa = function(t, e) {
    return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
  }, t.p = function(e, i) {
    t.Pa(e, i) || (e.className = "" === e.className ? i : e.className + " " + i)
  }, t.r = function(e, i) {
    var n, o;
    if (t.Pa(e, i)) {
      for (o = (n = e.className.split(" ")).length - 1; 0 <= o; o--) n[o] === i && n.splice(o, 1);
      e.className = n.join(" ")
    }
  }, t.A = t.e("video");
  var x = document.createElement("track");
  x.Tb = "captions", x.ed = "en", x.label = "English", t.A.appendChild(x), t.P = navigator.userAgent, t.zd = /iPhone/i.test(t.P), t.yd = /iPad/i.test(t.P), t.Ad = /iPod/i.test(t.P), t.xd = t.zd || t.yd || t.Ad;
  var aa = t,
    y, z = t.P.match(/OS (\d+)_/i);
  y = z && z[1] ? z[1] : b, aa.ff = y, t.wd = /Android/i.test(t.P);
  var ba = t,
    B, C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
    D, E, J, ha, K, L, O;

  function F(e, i) {
    var n, o;
    n = Array.prototype.slice.call(i), o = m(), o = window.console || {
      log: o,
      warn: o,
      error: o
    }, e ? n.unshift(e.toUpperCase() + ":") : e = "log", t.log.history.push(n), n.unshift("VIDEOJS:"), o[e].apply ? o[e].apply(o, n) : o[e](n.join(" "))
  }

  function G(t) {
    t.r("vjs-lock-showing")
  }

  function ca(e, i, n, o) {
    return n !== b ? ((n === j || t.ge(n)) && (n = 0), e.c.style[i] = -1 !== ("" + n).indexOf("%") || -1 !== ("" + n).indexOf("px") ? n : "auto" === n ? "" : n + "px", o || e.o("resize"), e) : e.c ? -1 !== (o = (n = e.c.style[i]).indexOf("px")) ? parseInt(n.slice(0, o), 10) : parseInt(e.c["offset" + t.va(i)], 10) : 0
  }

  function da(e) {
    var i, n, o, r, a, s;
    i = 0, n = j, e.b("touchstart", function(e) {
      1 === e.touches.length && (n = t.i.copy(e.touches[0]), i = (new Date).getTime(), o = f)
    }), e.b("touchmove", function(t) {
      1 < t.touches.length ? o = l : n && (a = t.touches[0].pageX - n.pageX, s = t.touches[0].pageY - n.pageY, 10 < Math.sqrt(a * a + s * s) && (o = l))
    }), r = function() {
      o = l
    }, e.b("touchleave", r), e.b("touchcancel", r), e.b("touchend", function(t) {
      n = j, o === f && ((new Date).getTime() - i < 200 && (t.preventDefault(), this.o("tap")))
    })
  }

  function ea(e, i) {
    var n, o, r, a;
    return n = e.c, o = t.Vd(n), a = r = n.offsetWidth, n = e.handle, e.options().vertical ? (a = o.top, o = i.changedTouches ? i.changedTouches[0].pageY : i.pageY, n && (a += (n = n.m().offsetHeight) / 2, r -= n), Math.max(0, Math.min(1, (a - o + r) / r))) : (r = o.left, o = i.changedTouches ? i.changedTouches[0].pageX : i.pageX, n && (r += (n = n.m().offsetWidth) / 2, a -= n), Math.max(0, Math.min(1, (o - r) / a)))
  }

  function fa(e, i) {
    e.aa(i), i.b("click", t.bind(e, function() {
      G(this)
    }))
  }

  function ga(t) {
    t.Ja = f, t.za.p("vjs-lock-showing"), t.c.setAttribute("aria-pressed", f), t.H && 0 < t.H.length && t.H[0].m().focus()
  }

  function H(t) {
    t.Ja = l, G(t.za), t.c.setAttribute("aria-pressed", l)
  }
  B = C ? (D = C[1] && parseFloat(C[1]), E = C[2] && parseFloat(C[2]), D && E ? parseFloat(C[1] + "." + C[2]) : D || j) : j, ba.ec = B, t.Bd = t.wd && /webkit/i.test(t.P) && t.ec < 2.3, t.gc = /Firefox/i.test(t.P), t.gf = /Chrome/i.test(t.P), t.pa = /MSIE\s8\.0/.test(t.P), t.Db = !!("ontouchstart" in window || window.ud && document instanceof window.ud), t.td = "backgroundSize" in t.A.style, t.ad = function(i, e) {
    t.i.ca(e, function(t, e) {
      e === j || void 0 === e || e === l ? i.removeAttribute(t) : i.setAttribute(t, e === f ? "" : e)
    })
  }, t.Oa = function(t) {
    var e, i, n, o;
    if (e = {}, t && t.attributes && 0 < t.attributes.length)
      for (var r = (i = t.attributes).length - 1; 0 <= r; r--) n = i[r].name, o = i[r].value, "boolean" != typeof t[n] && -1 === ",autoplay,controls,loop,muted,default,".indexOf("," + n + ",") || (o = o !== j ? f : l), e[n] = o;
    return e
  }, t.rf = function(t, e) {
    var i = "";
    return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (i = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), i
  }, t.Rb = function(t, e) {
    e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
  }, t.bb = {}, t.m = function(t) {
    return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
  }, t.Na = function(t, e) {
    e = e || t;
    var i = Math.floor(t % 60),
      n = Math.floor(t / 60 % 60),
      o = Math.floor(t / 3600),
      r = Math.floor(e / 60 % 60),
      a = Math.floor(e / 3600);
    return (isNaN(t) || 1 / 0 === t) && (o = n = i = "-"), (o = 0 < o || 0 < a ? o + ":" : "") + (((o || 10 <= r) && n < 10 ? "0" + n : n) + ":") + (i < 10 ? "0" + i : i)
  }, t.Id = function() {
    document.body.focus(), document.onselectstart = p(l)
  }, t.Xe = function() {
    document.onselectstart = p(f)
  }, t.trim = function(t) {
    return (t + "").replace(/^\s+|\s+$/g, "")
  }, t.round = function(t, e) {
    return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
  }, t.xa = function(t, e) {
    return t === b && e === b ? {
      length: 0,
      start: function() {
        throw Error("This TimeRanges object is empty")
      },
      end: function() {
        throw Error("This TimeRanges object is empty")
      }
    } : {
      length: 1,
      start: function() {
        return t
      },
      end: function() {
        return e
      }
    }
  }, t.Ie = function(e) {
    try {
      var i = window.localStorage || l;
      i && (i.volume = e)
    } catch (e) {
      22 == e.code || 1014 == e.code ? t.log("LocalStorage Full (VideoJS)", e) : 18 == e.code ? t.log("LocalStorage not allowed (VideoJS)", e) : t.log("LocalStorage Error (VideoJS)", e)
    }
  }, t.Xd = function(e) {
    return e.match(/^https?:\/\//) || (e = t.e("div", {
      innerHTML: '<a href="' + e + '">x</a>'
    }).firstChild.href), e
  }, t.Ae = function(e) {
    var i, n, o, r;
    r = "protocol hostname port pathname search hash host".split(" "), (o = "" === (n = t.e("a", {
      href: e
    })).host && "file:" !== n.protocol) && ((i = t.e("div")).innerHTML = '<a href="' + e + '"></a>', n = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(i)), e = {};
    for (var a = 0; a < r.length; a++) e[r[a]] = n[r[a]];
    return "http:" === e.protocol && (e.host = e.host.replace(/:80$/, "")), "https:" === e.protocol && (e.host = e.host.replace(/:443$/, "")), o && document.body.removeChild(i), e
  }, t.log = function() {
    F(j, arguments)
  }, t.log.history = [], t.log.error = function() {
    F("error", arguments)
  }, t.log.warn = function() {
    F("warn", arguments)
  }, t.Vd = function(e) {
    var i, n;
    return e.getBoundingClientRect && e.parentNode && (i = e.getBoundingClientRect()), i ? (e = document.documentElement, n = document.body, {
      left: t.round(i.left + (window.pageXOffset || n.scrollLeft) - (e.clientLeft || n.clientLeft || 0)),
      top: t.round(i.top + (window.pageYOffset || n.scrollTop) - (e.clientTop || n.clientTop || 0))
    }) : {
      left: 0,
      top: 0
    }
  }, t.tc = {}, t.tc.forEach = function(e, i, n) {
    if (t.i.isArray(e) && i instanceof Function)
      for (var o = 0, r = e.length; o < r; ++o) i.call(n || t, e[o], o, e);
    return e
  }, t.bf = function(e, i) {
    var n, o, r, a, s, l, c;
    "string" == typeof e && (e = {
      uri: e
    }), videojs.Z.Aa({
      method: "GET",
      timeout: 45e3
    }, e), i = i || m(), l = function() {
      window.clearTimeout(s), i(j, o, o.response || o.responseText)
    }, c = function(t) {
      window.clearTimeout(s), t && "string" != typeof t || (t = Error(t)), i(t, o)
    }, void 0 === (n = window.XMLHttpRequest) && (n = function() {
      try {
        return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (t) {}
      try {
        return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (t) {}
      try {
        return new window.ActiveXObject("Msxml2.XMLHTTP")
      } catch (t) {}
      throw Error("This browser does not support XMLHttpRequest.")
    }), (o = new n).uri = e.uri, n = t.Ae(e.uri), r = window.location, n.protocol + n.host === r.protocol + r.host || !window.XDomainRequest || "withCredentials" in o ? (a = "file:" == n.protocol || "file:" == r.protocol, o.onreadystatechange = function() {
      if (4 === o.readyState) {
        if (o.Ue) return c("timeout");
        200 === o.status || a && 0 === o.status ? l() : c()
      }
    }, e.timeout && (s = window.setTimeout(function() {
      4 !== o.readyState && (o.Ue = f, o.abort())
    }, e.timeout))) : ((o = new window.XDomainRequest).onload = l, o.onerror = c, o.onprogress = m(), o.ontimeout = m());
    try {
      o.open(e.method || "GET", e.uri, f)
    } catch (t) {
      return void c(t)
    }
    e.withCredentials && (o.withCredentials = f), e.responseType && (o.responseType = e.responseType);
    try {
      o.send()
    } catch (t) {
      c(t)
    }
  }, t.Z = {}, t.Z.Aa = function(e, i) {
    var n, o, r;
    for (n in e = t.i.copy(e), i) i.hasOwnProperty(n) && (o = e[n], r = i[n], e[n] = t.i.ib(o) && t.i.ib(r) ? t.Z.Aa(o, r) : i[n]);
    return e
  }, t.z = m(), s = t.z.prototype, s.ab = {}, s.b = function(e, i) {
    var n = this.addEventListener;
    this.addEventListener = Function.prototype, t.b(this, e, i), this.addEventListener = n
  }, s.addEventListener = t.z.prototype.b, s.n = function(e, i) {
    t.n(this, e, i)
  }, s.removeEventListener = t.z.prototype.n, s.N = function(e, i) {
    t.N(this, e, i)
  }, s.o = function(e) {
    var i = e.type || e;
    "string" == typeof e && (e = {
      type: i
    }), e = t.Nb(e), this.ab[i] && this["on" + i] && this["on" + i](e), t.o(this, e)
  }, s.dispatchEvent = t.z.prototype.o, t.a = t.Ga.extend({
    l: function(e, i, n) {
      var o, r;
      (this.d = e, this.q = t.i.copy(this.q), i = this.options(i), this.Qa = i.id || i.el && i.el.id, this.Qa || (this.Qa = (e.id && e.id() || "no_player") + "_component_" + t.s++), this.pe = i.name || j, this.c = i.el || this.e(), this.R = [], this.cb = {}, this.eb = {}, this.Kc(), this.I(n), i.$c !== l) && (this.k().reportUserActivity && (o = t.bind(this.k(), this.k().reportUserActivity), this.b("touchstart", function() {
        o(), this.clearInterval(r), r = this.setInterval(o, 250)
      }), e = function() {
        o(), this.clearInterval(r)
      }, this.b("touchmove", o), this.b("touchend", e), this.b("touchcancel", e)))
    }
  }), s = t.a.prototype, s.dispose = function() {
    if (this.o({
        type: "dispose",
        bubbles: l
      }), this.R)
      for (var e = this.R.length - 1; 0 <= e; e--) this.R[e].dispose && this.R[e].dispose();
    this.eb = this.cb = this.R = j, this.n(), this.c.parentNode && this.c.parentNode.removeChild(this.c), t.Zc(this.c), this.c = j
  }, s.d = f, s.k = n("d"), s.options = function(e) {
    return e === b ? this.q : this.q = t.Z.Aa(this.q, e)
  }, s.e = function(e, i) {
    return t.e(e, i)
  }, s.v = function(t) {
    var e = this.d.language(),
      i = this.d.languages();
    return i && i[e] && i[e][t] ? i[e][t] : t
  }, s.m = n("c"), s.wa = function() {
    return this.B || this.c
  }, s.id = n("Qa"), s.name = n("pe"), s.children = n("R"), s.Yd = function(t) {
    return this.cb[t]
  }, s.da = function(t) {
    return this.eb[t]
  }, s.aa = function(e, i) {
    var n, o;
    return n = "string" == typeof e ? (o = e, n = (i = i || {}).componentClass || t.va(o), i.name = o, new window.videojs[n](this.d || this, i)) : e, this.R.push(n), "function" == typeof n.id && (this.cb[n.id()] = n), (o = o || n.name && n.name()) && (this.eb[o] = n), "function" == typeof n.el && n.el() && this.wa().appendChild(n.el()), n
  }, s.removeChild = function(t) {
    if ("string" == typeof t && (t = this.da(t)), t && this.R) {
      for (var e = l, i = this.R.length - 1; 0 <= i; i--)
        if (this.R[i] === t) {
          e = f, this.R.splice(i, 1);
          break
        } e && (this.cb[t.id()] = j, this.eb[t.name()] = j, (e = t.m()) && e.parentNode === this.wa() && this.wa().removeChild(t.m()))
    }
  }, s.Kc = function() {
    var i, n, e, o, r, a;
    if (e = (n = (i = this).options()).children)
      if (a = function(t, e) {
          n[t] !== b && (e = n[t]), e !== l && (i[t] = i.aa(t, e))
        }, t.i.isArray(e))
        for (var s = 0; s < e.length; s++) "string" == typeof(o = e[s]) ? (r = o, o = {}) : r = o.name, a(r, o);
      else t.i.ca(e, a)
  }, s.T = p(""), s.b = function(e, i, n) {
    var o, r, a;
    return "string" == typeof e || t.i.isArray(e) ? t.b(this.c, e, t.bind(this, i)) : (o = t.bind(this, n), a = this, (r = function() {
      a.n(e, i, o)
    }).s = o.s, this.b("dispose", r), (n = function() {
      a.n("dispose", r)
    }).s = o.s, e.nodeName ? (t.b(e, i, o), t.b(e, "dispose", n)) : "function" == typeof e.b && (e.b(i, o), e.b("dispose", n))), this
  }, s.n = function(e, i, n) {
    return !e || "string" == typeof e || t.i.isArray(e) ? t.n(this.c, e, i) : (n = t.bind(this, n), this.n("dispose", n), e.nodeName ? (t.n(e, i, n), t.n(e, "dispose", n)) : (e.n(i, n), e.n("dispose", n))), this
  }, s.N = function(e, i, n) {
    var o, r, a;
    return "string" == typeof e || t.i.isArray(e) ? t.N(this.c, e, t.bind(this, i)) : (o = t.bind(this, n), r = this, (a = function() {
      r.n(e, i, a), o.apply(this, arguments)
    }).s = o.s, this.b(e, i, a)), this
  }, s.o = function(e) {
    return t.o(this.c, e), this
  }, s.I = function(t) {
    return t && (this.ya ? t.call(this) : (this.mb === b && (this.mb = []), this.mb.push(t))), this
  }, s.Va = function() {
    this.ya = f;
    var t = this.mb;
    if (this.mb = [], t && 0 < t.length) {
      for (var e = 0, i = t.length; e < i; e++) t[e].call(this);
      this.o("ready")
    }
  }, s.Pa = function(e) {
    return t.Pa(this.c, e)
  }, s.p = function(e) {
    return t.p(this.c, e), this
  }, s.r = function(e) {
    return t.r(this.c, e), this
  }, s.show = function() {
    return this.r("vjs-hidden"), this
  }, s.W = function() {
    return this.p("vjs-hidden"), this
  }, s.width = function(t, e) {
    return ca(this, "width", t, e)
  }, s.height = function(t, e) {
    return ca(this, "height", t, e)
  }, s.Qd = function(t, e) {
    return this.width(t, f).height(e)
  }, s.setTimeout = function(e, i) {
    function n() {
      this.clearTimeout(o)
    }
    e = t.bind(this, e);
    var o = setTimeout(e, i);
    return n.s = "vjs-timeout-" + o, this.b("dispose", n), o
  }, s.clearTimeout = function(t) {
    function e() {}
    return clearTimeout(t), e.s = "vjs-timeout-" + t, this.n("dispose", e), t
  }, s.setInterval = function(e, i) {
    function n() {
      this.clearInterval(o)
    }
    e = t.bind(this, e);
    var o = setInterval(e, i);
    return n.s = "vjs-interval-" + o, this.b("dispose", n), o
  }, s.clearInterval = function(t) {
    function e() {}
    return clearInterval(t), e.s = "vjs-interval-" + t, this.n("dispose", e), t
  }, t.w = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), da(this), this.b("tap", this.u), this.b("click", this.u), this.b("focus", this.kb), this.b("blur", this.jb)
    }
  }), s = t.w.prototype, s.e = function(e, i) {
    var n;
    return i = t.i.D({
      className: this.T(),
      role: "button",
      "aria-live": "polite",
      tabIndex: 0
    }, i), n = t.a.prototype.e.call(this, e, i), i.innerHTML || (this.B = t.e("div", {
      className: "vjs-control-content"
    }), this.Ib = t.e("span", {
      className: "vjs-control-text",
      innerHTML: this.v(this.ta) || "Need Text"
    }), this.B.appendChild(this.Ib), n.appendChild(this.B)), n
  }, s.T = function() {
    return "vjs-control " + t.a.prototype.T.call(this)
  }, s.u = m(), s.kb = function() {
    t.b(document, "keydown", t.bind(this, this.ka))
  }, s.ka = function(t) {
    32 != t.which && 13 != t.which || (t.preventDefault(), this.u())
  }, s.jb = function() {
    t.n(document, "keydown", t.bind(this, this.ka))
  }, t.S = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), this.Hd = this.da(this.q.barName), this.handle = this.da(this.q.handleName), this.b("mousedown", this.lb), this.b("touchstart", this.lb), this.b("focus", this.kb), this.b("blur", this.jb), this.b("click", this.u), this.b(e, "controlsvisible", this.update), this.b(e, this.Uc, this.update)
    }
  }), s = t.S.prototype, s.e = function(e, i) {
    return (i = i || {}).className += " vjs-slider", i = t.i.D({
      role: "slider",
      "aria-valuenow": 0,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      tabIndex: 0
    }, i), t.a.prototype.e.call(this, e, i)
  }, s.lb = function(e) {
    e.preventDefault(), t.Id(), this.p("vjs-sliding"), this.b(document, "mousemove", this.la), this.b(document, "mouseup", this.Ba), this.b(document, "touchmove", this.la), this.b(document, "touchend", this.Ba), this.la(e)
  }, s.la = m(), s.Ba = function() {
    t.Xe(), this.r("vjs-sliding"), this.n(document, "mousemove", this.la), this.n(document, "mouseup", this.Ba), this.n(document, "touchmove", this.la), this.n(document, "touchend", this.Ba), this.update()
  }, s.update = function() {
    if (this.c) {
      var e, i = this.Qb(),
        n = this.handle,
        o = this.Hd;
      if (("number" != typeof i || i != i || i < 0 || 1 / 0 === i) && (i = 0), e = i, n) {
        e = this.c.offsetWidth;
        var r = n.m().offsetWidth;
        e = (i *= 1 - (e = r ? r / e : 0)) + e / 2, n.m().style.left = t.round(100 * i, 2) + "%"
      }
      o && (o.m().style.width = t.round(100 * e, 2) + "%")
    }
  }, s.kb = function() {
    this.b(document, "keydown", this.ka)
  }, s.ka = function(t) {
    37 == t.which || 40 == t.which ? (t.preventDefault(), this.fd()) : 38 != t.which && 39 != t.which || (t.preventDefault(), this.gd())
  }, s.jb = function() {
    this.n(document, "keydown", this.ka)
  }, s.u = function(t) {
    t.stopImmediatePropagation(), t.preventDefault()
  }, t.ga = t.a.extend(), t.ga.prototype.defaultValue = 0, t.ga.prototype.e = function(e, i) {
    return (i = i || {}).className += " vjs-slider-handle", i = t.i.D({
      innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
    }, i), t.a.prototype.e.call(this, "div", i)
  }, t.qa = t.a.extend(), t.qa.prototype.e = function() {
    var e = this.options().zc || "ul";
    return this.B = t.e(e, {
      className: "vjs-menu-content"
    }), (e = t.a.prototype.e.call(this, "div", {
      append: this.B,
      className: "vjs-menu"
    })).appendChild(this.B), t.b(e, "click", function(t) {
      t.preventDefault(), t.stopImmediatePropagation()
    }), e
  }, t.M = t.w.extend({
    l: function(e, i) {
      t.w.call(this, e, i), this.selected(i.selected)
    }
  }), t.M.prototype.e = function(e, i) {
    return t.w.prototype.e.call(this, "li", t.i.D({
      className: "vjs-menu-item",
      innerHTML: this.v(this.q.label)
    }, i))
  }, t.M.prototype.u = function() {
    this.selected(f)
  }, t.M.prototype.selected = function(t) {
    t ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", l))
  }, t.O = t.w.extend({
    l: function(e, i) {
      t.w.call(this, e, i), this.update(), this.b("keydown", this.ka), this.c.setAttribute("aria-haspopup", f), this.c.setAttribute("role", "button")
    }
  }), s = t.O.prototype, s.update = function() {
    var t = this.La();
    this.za && this.removeChild(this.za), this.za = t, this.aa(t), this.H && 0 === this.H.length ? this.W() : this.H && 1 < this.H.length && this.show()
  }, s.Ja = l, s.La = function() {
    var e = new t.qa(this.d);
    if (this.options().title && e.wa().appendChild(t.e("li", {
        className: "vjs-menu-title",
        innerHTML: t.va(this.options().title),
        Se: -1
      })), this.H = this.createItems())
      for (var i = 0; i < this.H.length; i++) fa(e, this.H[i]);
    return e
  }, s.Ka = m(), s.T = function() {
    return this.className + " vjs-menu-button " + t.w.prototype.T.call(this)
  }, s.kb = m(), s.jb = m(), s.u = function() {
    this.N("mouseout", t.bind(this, function() {
      G(this.za), this.c.blur()
    })), this.Ja ? H(this) : ga(this)
  }, s.ka = function(t) {
    32 == t.which || 13 == t.which ? (this.Ja ? H(this) : ga(this), t.preventDefault()) : 27 == t.which && (this.Ja && H(this), t.preventDefault())
  }, t.J = function(e) {
    "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && t.i.D(this, e), this.message || (this.message = t.J.Pd[this.code] || "")
  }, t.J.prototype.code = 0, t.J.prototype.message = "", t.J.prototype.status = j, t.J.gb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "), t.J.Pd = {
    1: "You aborted the video playback",
    2: "A network error caused the video download to fail part-way.",
    3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
    4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The video is encrypted and we do not have the keys to decrypt it."
  };
  for (var I = 0; I < t.J.gb.length; I++) t.J[t.J.gb[I]] = I, t.J.prototype[t.J.gb[I]] = I;
  for (J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], ha = J[0], L = 0; L < J.length; L++)
    if (J[L][1] in document) {
      K = J[L];
      break
    } if (K)
    for (t.bb.Pb = {}, L = 0; L < K.length; L++) t.bb.Pb[ha[L]] = K[L];

  function ia(e) {
    var i, n, o, r, a = {
      sources: [],
      tracks: []
    };
    if ((n = (i = t.Oa(e))["data-setup"]) !== j && t.i.D(i, t.JSON.parse(n || "{}")), t.i.D(a, i), e.hasChildNodes())
      for (o = 0, r = (e = e.childNodes).length; o < r; o++) "source" === (n = (i = e[o]).nodeName.toLowerCase()) ? a.sources.push(t.Oa(i)) : "track" === n && a.tracks.push(t.Oa(i));
    return a
  }

  function ka(e, i, n) {
    e.h && (e.ya = l, e.h.dispose(), e.h = l), "Html5" !== i && e.L && (t.f.Kb(e.L), e.L = j), e.Ta = i, e.ya = l;
    var o = t.i.D({
      source: n,
      parentEl: e.c
    }, e.q[i.toLowerCase()]);
    n && (e.Cc = n.type, n.src == e.K.src && 0 < e.K.currentTime && (o.startTime = e.K.currentTime), e.K.src = n.src), e.h = new window.videojs[i](e, o), e.h.I(function() {
      this.d.Va()
    })
  }

  function la(t, e) {
    e !== b && t.Jc !== e && ((t.Jc = e) ? (t.p("vjs-has-started"), t.o("firstplay")) : t.r("vjs-has-started"))
  }

  function N(e, i, n) {
    if (e.h && !e.h.ya) e.h.I(function() {
      this[i](n)
    });
    else try {
      e.h[i](n)
    } catch (e) {
      throw t.log(e), e
    }
  }

  function M(i, n) {
    if (i.h && i.h.ya) try {
      return i.h[n]()
    } catch (e) {
      throw i.h[n] === b ? t.log("Video.js: " + n + " method not defined for " + i.Ta + " playback technology.", e) : "TypeError" == e.name ? (t.log("Video.js: " + n + " unavailable on " + i.Ta + " playback technology element.", e), i.h.ya = l) : t.log(e), e
    }
  }

  function ma(t, e) {
    var i = t.selectSource(e);
    i ? i.h === t.Ta ? t.src(i.source) : ka(t, i.h, i.source) : (t.setTimeout(function() {
      this.error({
        code: 4,
        message: this.v(this.options().notSupportedMessage)
      })
    }, 0), t.Va())
  }

  function ja(t, e) {
    return e !== b ? (t.Lc = !!e, t) : t.Lc
  }

  function na(t) {
    return t.k().h && t.k().h.featuresPlaybackRate && t.k().options().playbackRates && 0 < t.k().options().playbackRates.length
  }

  function oa(t, e) {
    return e && t && /^blob\:/i.test(t) ? e : t
  }
  t.Player = t.a.extend({
    l: function(e, i, n) {
      var o, r, a, s, c;
      (this.L = e).id = e.id || "vjs_video_" + t.s++, this.Te = e && t.Oa(e), i = t.i.D(ia(e), i), this.Pc = i.language || t.options.language, this.je = i.languages || t.options.languages, this.K = {}, this.Vc = i.poster || "", this.Jb = !!i.controls, e.controls = l, i.$c = l, ja(this, "audio" === this.L.nodeName.toLowerCase()), t.a.call(this, this, i, n), this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled"), ja(this) && this.p("vjs-audio"), t.Ca[this.Qa] = this, i.plugins && t.i.ca(i.plugins, function(t, e) {
        this[t](e)
      }, this), o = t.bind(this, this.reportUserActivity), this.b("mousedown", function() {
        o(), this.clearInterval(r), r = this.setInterval(o, 250)
      }), this.b("mousemove", function(t) {
        t.screenX == s && t.screenY == c || (s = t.screenX, c = t.screenY, o())
      }), this.b("mouseup", function() {
        o(), this.clearInterval(r)
      }), this.b("keydown", o), this.b("keyup", o), this.setInterval(function() {
        if (this.Fa) {
          this.Fa = l, this.userActive(f), this.clearTimeout(a);
          var t = this.options().inactivityTimeout;
          0 < t && (a = this.setTimeout(function() {
            this.Fa || this.userActive(l)
          }, t))
        }
      }, 250)
    }
  }), s = t.Player.prototype, s.language = function(t) {
    return t === b ? this.Pc : (this.Pc = t, this)
  }, s.languages = n("je"), s.q = t.options, s.dispose = function() {
    this.o("dispose"), this.n("dispose"), t.Ca[this.Qa] = j, this.L && this.L.player && (this.L.player = j), this.c && this.c.player && (this.c.player = j), this.h && this.h.dispose(), t.a.prototype.dispose.call(this)
  }, s.e = function() {
    var e, i = this.c = t.a.prototype.e.call(this, "div"),
      n = this.L;
    return n.removeAttribute("width"), n.removeAttribute("height"), e = t.Oa(n), t.i.ca(e, function(t) {
      "class" == t ? i.className = e[t] : i.setAttribute(t, e[t])
    }), n.id += "_html5_api", n.className = "vjs-tech", n.player = i.player = this, this.p("vjs-paused"), this.width(this.q.width, f), this.height(this.q.height, f), n.ce = n.networkState, n.parentNode && n.parentNode.insertBefore(i, n), t.Rb(n, i), this.c = i, this.b("loadstart", this.te), this.b("waiting", this.ze), this.b(["canplay", "canplaythrough", "playing", "ended"], this.ye), this.b("seeking", this.we), this.b("seeked", this.ve), this.b("ended", this.qe), this.b("play", this.Xb), this.b("firstplay", this.re), this.b("pause", this.Wb), this.b("progress", this.ue), this.b("durationchange", this.Sc), this.b("fullscreenchange", this.se), i
  }, s.te = function() {
    this.r("vjs-ended"), this.error(j), this.paused() ? la(this, l) : this.o("firstplay")
  }, s.Jc = l, s.Xb = function() {
    this.r("vjs-ended"), this.r("vjs-paused"), this.p("vjs-playing"), la(this, f)
  }, s.ze = function() {
    this.p("vjs-waiting")
  }, s.ye = function() {
    this.r("vjs-waiting")
  }, s.we = function() {
    this.p("vjs-seeking")
  }, s.ve = function() {
    this.r("vjs-seeking")
  }, s.re = function() {
    this.q.starttime && this.currentTime(this.q.starttime), this.p("vjs-has-started")
  }, s.Wb = function() {
    this.r("vjs-playing"), this.p("vjs-paused")
  }, s.ue = function() {
    1 == this.bufferedPercent() && this.o("loadedalldata")
  }, s.qe = function() {
    this.p("vjs-ended"), this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
  }, s.Sc = function() {
    var t = M(this, "duration");
    t && (t < 0 && (t = 1 / 0), this.duration(t), 1 / 0 === t ? this.p("vjs-live") : this.r("vjs-live"))
  }, s.se = function() {
    this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
  }, s.play = function() {
    return N(this, "play"), this
  }, s.pause = function() {
    return N(this, "pause"), this
  }, s.paused = function() {
    return M(this, "paused") === l ? l : f
  }, s.currentTime = function(t) {
    return t !== b ? (N(this, "setCurrentTime", t), this) : this.K.currentTime = M(this, "currentTime") || 0
  }, s.duration = function(t) {
    return t !== b ? (this.K.duration = parseFloat(t), this) : (this.K.duration === b && this.Sc(), this.K.duration || 0)
  }, s.remainingTime = function() {
    return this.duration() - this.currentTime()
  }, s.buffered = function() {
    var e = M(this, "buffered");
    return e && e.length || (e = t.xa(0, 0)), e
  }, s.bufferedPercent = function() {
    var t, e, i = this.duration(),
      n = this.buffered(),
      o = 0;
    if (!i) return 0;
    for (var r = 0; r < n.length; r++) t = n.start(r), i < (e = n.end(r)) && (e = i), o += e - t;
    return o / i
  }, s.volume = function(e) {
    return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))), this.K.volume = e, N(this, "setVolume", e), t.Ie(e), this) : (e = parseFloat(M(this, "volume")), isNaN(e) ? 1 : e)
  }, s.muted = function(t) {
    return t !== b ? (N(this, "setMuted", t), this) : M(this, "muted") || l
  }, s.Sa = function() {
    return M(this, "supportsFullScreen") || l
  }, s.Mc = l, s.isFullscreen = function(t) {
    return t !== b ? (this.Mc = !!t, this) : this.Mc
  }, s.isFullScreen = function(e) {
    return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(e)
  }, s.requestFullscreen = function() {
    var i = t.bb.Pb;
    return this.isFullscreen(f), i ? (t.b(document, i.fullscreenchange, t.bind(this, function(e) {
      this.isFullscreen(document[i.fullscreenElement]), this.isFullscreen() === l && t.n(document, i.fullscreenchange, arguments.callee), this.o("fullscreenchange")
    })), this.c[i.requestFullscreen]()) : this.h.Sa() ? N(this, "enterFullScreen") : (this.Fc(), this.o("fullscreenchange")), this
  }, s.requestFullScreen = function() {
    return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
  }, s.exitFullscreen = function() {
    var e = t.bb.Pb;
    return this.isFullscreen(l), e ? document[e.exitFullscreen]() : this.h.Sa() ? N(this, "exitFullScreen") : (this.Lb(), this.o("fullscreenchange")), this
  }, s.cancelFullScreen = function() {
    return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
  }, s.Fc = function() {
    this.fe = f, this.Rd = document.documentElement.style.overflow, t.b(document, "keydown", t.bind(this, this.Gc)), document.documentElement.style.overflow = "hidden", t.p(document.body, "vjs-full-window"), this.o("enterFullWindow")
  }, s.Gc = function(t) {
    27 === t.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Lb())
  }, s.Lb = function() {
    this.fe = l, t.n(document, "keydown", this.Gc), document.documentElement.style.overflow = this.Rd, t.r(document.body, "vjs-full-window"), this.o("exitFullWindow")
  }, s.selectSource = function(e) {
    for (var i = 0, n = this.q.techOrder; i < n.length; i++) {
      var o = t.va(n[i]),
        r = window.videojs[o];
      if (r) {
        if (r.isSupported())
          for (var a = 0, s = e; a < s.length; a++) {
            var c = s[a];
            if (r.canPlaySource(c)) return {
              source: c,
              h: o
            }
          }
      } else t.log.error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
    }
    return l
  }, s.src = function(e) {
    return e === b ? M(this, "src") : (t.i.isArray(e) ? ma(this, e) : "string" == typeof e ? this.src({
      src: e
    }) : e instanceof Object && (e.type && !window.videojs[this.Ta].canPlaySource(e) ? ma(this, [e]) : (this.K.src = e.src, this.Cc = e.type || "", this.I(function() {
      window.videojs[this.Ta].prototype.hasOwnProperty("setSource") ? N(this, "setSource", e) : N(this, "src", e.src), "auto" == this.q.preload && this.load(), this.q.autoplay && this.play()
    }))), this)
  }, s.load = function() {
    return N(this, "load"), this
  }, s.currentSrc = function() {
    return M(this, "currentSrc") || this.K.src || ""
  }, s.Nd = function() {
    return this.Cc || ""
  }, s.Ra = function(t) {
    return t !== b ? (N(this, "setPreload", t), this.q.preload = t, this) : M(this, "preload")
  }, s.autoplay = function(t) {
    return t !== b ? (N(this, "setAutoplay", t), this.q.autoplay = t, this) : M(this, "autoplay")
  }, s.loop = function(t) {
    return t !== b ? (N(this, "setLoop", t), this.q.loop = t, this) : M(this, "loop")
  }, s.poster = function(t) {
    return t === b ? this.Vc : (t || (t = ""), this.Vc = t, N(this, "setPoster", t), this.o("posterchange"), this)
  }, s.controls = function(t) {
    return t !== b ? (t = !!t, this.Jb !== t && ((this.Jb = t) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Jb
  }, t.Player.prototype.bc, s = t.Player.prototype, s.usingNativeControls = function(t) {
    return t !== b ? (t = !!t, this.bc !== t && ((this.bc = t) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.bc
  }, s.ja = j, s.error = function(e) {
    return e === b ? this.ja : (e === j ? (this.ja = e, this.r("vjs-error")) : (this.ja = e instanceof t.J ? e : new t.J(e), this.o("error"), this.p("vjs-error"), t.log.error("(CODE:" + this.ja.code + " " + t.J.gb[this.ja.code] + ")", this.ja.message, this.ja)), this)
  }, s.ended = function() {
    return M(this, "ended")
  }, s.seeking = function() {
    return M(this, "seeking")
  }, s.seekable = function() {
    return M(this, "seekable")
  }, s.Fa = f, s.reportUserActivity = function() {
    this.Fa = f
  }, s.ac = f, s.userActive = function(t) {
    return t !== b ? ((t = !!t) !== this.ac && ((this.ac = t) ? (this.Fa = f, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Fa = l, this.h && this.h.N("mousemove", function(t) {
      t.stopPropagation(), t.preventDefault()
    }), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.ac
  }, s.playbackRate = function(t) {
    return t !== b ? (N(this, "setPlaybackRate", t), this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
  }, s.Lc = l, s.networkState = function() {
    return M(this, "networkState")
  }, s.readyState = function() {
    return M(this, "readyState")
  }, s.textTracks = function() {
    return this.h && this.h.textTracks()
  }, s.X = function() {
    return this.h && this.h.remoteTextTracks()
  }, s.addTextTrack = function(t, e, i) {
    return this.h && this.h.addTextTrack(t, e, i)
  }, s.ha = function(t) {
    return this.h && this.h.addRemoteTextTrack(t)
  }, s.Da = function(t) {
    this.h && this.h.removeRemoteTextTrack(t)
  }, t.tb = t.a.extend(), t.tb.prototype.q = {
    sf: "play",
    children: {
      playToggle: {},
      currentTimeDisplay: {},
      timeDivider: {},
      durationDisplay: {},
      remainingTimeDisplay: {},
      liveDisplay: {},
      progressControl: {},
      fullscreenToggle: {},
      volumeControl: {},
      muteToggle: {},
      playbackRateMenuButton: {},
      subtitlesButton: {},
      captionsButton: {},
      chaptersButton: {}
    }
  }, t.tb.prototype.e = function() {
    return t.e("div", {
      className: "vjs-control-bar"
    })
  }, t.hc = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i)
    }
  }), t.hc.prototype.e = function() {
    var e = t.a.prototype.e.call(this, "div", {
      className: "vjs-live-controls vjs-control"
    });
    return this.B = t.e("div", {
      className: "vjs-live-display",
      innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
      "aria-live": "off"
    }), e.appendChild(this.B), e
  }, t.kc = t.w.extend({
    l: function(e, i) {
      t.w.call(this, e, i), this.b(e, "play", this.Xb), this.b(e, "pause", this.Wb)
    }
  }), s = t.kc.prototype, s.ta = "Play", s.T = function() {
    return "vjs-play-control " + t.w.prototype.T.call(this)
  }, s.u = function() {
    this.d.paused() ? this.d.play() : this.d.pause()
  }, s.Xb = function() {
    this.r("vjs-paused"), this.p("vjs-playing"), this.c.children[0].children[0].innerHTML = this.v("Pause")
  }, s.Wb = function() {
    this.r("vjs-playing"), this.p("vjs-paused"), this.c.children[0].children[0].innerHTML = this.v("Play")
  }, t.ub = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), this.b(e, "timeupdate", this.fa)
    }
  }), t.ub.prototype.e = function() {
    var e = t.a.prototype.e.call(this, "div", {
      className: "vjs-current-time vjs-time-controls vjs-control"
    });
    return this.B = t.e("div", {
      className: "vjs-current-time-display",
      innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
      "aria-live": "off"
    }), e.appendChild(this.B), e
  }, t.ub.prototype.fa = function() {
    var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
    this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Na(e, this.d.duration())
  }, t.vb = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), this.b(e, "timeupdate", this.fa), this.b(e, "loadedmetadata", this.fa)
    }
  }), t.vb.prototype.e = function() {
    var e = t.a.prototype.e.call(this, "div", {
      className: "vjs-duration vjs-time-controls vjs-control"
    });
    return this.B = t.e("div", {
      className: "vjs-duration-display",
      innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
      "aria-live": "off"
    }), e.appendChild(this.B), e
  }, t.vb.prototype.fa = function() {
    var e = this.d.duration();
    e && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Na(e))
  }, t.qc = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i)
    }
  }), t.qc.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-time-divider",
      innerHTML: "<div><span>/</span></div>"
    })
  }, t.Cb = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), this.b(e, "timeupdate", this.fa)
    }
  }), t.Cb.prototype.e = function() {
    var e = t.a.prototype.e.call(this, "div", {
      className: "vjs-remaining-time vjs-time-controls vjs-control"
    });
    return this.B = t.e("div", {
      className: "vjs-remaining-time-display",
      innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
      "aria-live": "off"
    }), e.appendChild(this.B), e
  }, t.Cb.prototype.fa = function() {
    this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Na(this.d.remainingTime()))
  }, t.Ya = t.w.extend({
    l: function(e, i) {
      t.w.call(this, e, i)
    }
  }), t.Ya.prototype.ta = "Fullscreen", t.Ya.prototype.T = function() {
    return "vjs-fullscreen-control " + t.w.prototype.T.call(this)
  }, t.Ya.prototype.u = function() {
    this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Ib.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Ib.innerHTML = this.v("Non-Fullscreen"))
  }, t.Bb = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i)
    }
  }), t.Bb.prototype.q = {
    children: {
      seekBar: {}
    }
  }, t.Bb.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-progress-control vjs-control"
    })
  }, t.nc = t.S.extend({
    l: function(e, i) {
      t.S.call(this, e, i), this.b(e, "timeupdate", this.Ea), e.I(t.bind(this, this.Ea))
    }
  }), s = t.nc.prototype, s.q = {
    children: {
      loadProgressBar: {},
      playProgressBar: {},
      seekHandle: {}
    },
    barName: "playProgressBar",
    handleName: "seekHandle"
  }, s.Uc = "timeupdate", s.e = function() {
    return t.S.prototype.e.call(this, "div", {
      className: "vjs-progress-holder",
      "aria-label": "video progress bar"
    })
  }, s.Ea = function() {
    var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
    this.c.setAttribute("aria-valuenow", t.round(100 * this.Qb(), 2)), this.c.setAttribute("aria-valuetext", t.Na(e, this.d.duration()))
  }, s.Qb = function() {
    return this.d.currentTime() / this.d.duration()
  }, s.lb = function(e) {
    t.S.prototype.lb.call(this, e), this.d.nb = f, this.d.p("vjs-scrubbing"), this.$e = !this.d.paused(), this.d.pause()
  }, s.la = function(t) {
    (t = ea(this, t) * this.d.duration()) == this.d.duration() && (t -= .1), this.d.currentTime(t)
  }, s.Ba = function(e) {
    t.S.prototype.Ba.call(this, e), this.d.nb = l, this.d.r("vjs-scrubbing"), this.$e && this.d.play()
  }, s.gd = function() {
    this.d.currentTime(this.d.currentTime() + 5)
  }, s.fd = function() {
    this.d.currentTime(this.d.currentTime() - 5)
  }, t.yb = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), this.b(e, "progress", this.update)
    }
  }), t.yb.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-load-progress",
      innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
    })
  }, t.yb.prototype.update = function() {
    var e, i, n, o, r = this.d.buffered();
    e = this.d.duration();
    var a, s = this.d;
    for (a = s.buffered(), (s = s.duration()) < (a = a.end(a.length - 1)) && (a = s), s = this.c.children, this.c.style.width = 100 * (a / e || 0) + "%", e = 0; e < r.length; e++) i = r.start(e), n = r.end(e), (o = s[e]) || (o = this.c.appendChild(t.e())), o.style.left = 100 * (i / a || 0) + "%", o.style.width = 100 * ((n - i) / a || 0) + "%";
    for (e = s.length; e > r.length; e--) this.c.removeChild(s[e - 1])
  }, t.jc = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i)
    }
  }), t.jc.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-play-progress",
      innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
    })
  }, t.Za = t.ga.extend({
    l: function(e, i) {
      t.ga.call(this, e, i), this.b(e, "timeupdate", this.fa)
    }
  }), t.Za.prototype.defaultValue = "00:00", t.Za.prototype.e = function() {
    return t.ga.prototype.e.call(this, "div", {
      className: "vjs-seek-handle",
      "aria-live": "off"
    })
  }, t.Za.prototype.fa = function() {
    var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
    this.c.innerHTML = '<span class="vjs-control-text">' + t.Na(e, this.d.duration()) + "</span>"
  }, t.Fb = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
        e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
      })
    }
  }), t.Fb.prototype.q = {
    children: {
      volumeBar: {}
    }
  }, t.Fb.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-volume-control vjs-control"
    })
  }, t.Eb = t.S.extend({
    l: function(e, i) {
      t.S.call(this, e, i), this.b(e, "volumechange", this.Ea), e.I(t.bind(this, this.Ea))
    }
  }), s = t.Eb.prototype, s.Ea = function() {
    this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2)), this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
  }, s.q = {
    children: {
      volumeLevel: {},
      volumeHandle: {}
    },
    barName: "volumeLevel",
    handleName: "volumeHandle"
  }, s.Uc = "volumechange", s.e = function() {
    return t.S.prototype.e.call(this, "div", {
      className: "vjs-volume-bar",
      "aria-label": "volume level"
    })
  }, s.la = function(t) {
    this.d.muted() && this.d.muted(l), this.d.volume(ea(this, t))
  }, s.Qb = function() {
    return this.d.muted() ? 0 : this.d.volume()
  }, s.gd = function() {
    this.d.volume(this.d.volume() + .1)
  }, s.fd = function() {
    this.d.volume(this.d.volume() - .1)
  }, t.rc = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i)
    }
  }), t.rc.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-volume-level",
      innerHTML: '<span class="vjs-control-text"></span>'
    })
  }, t.Gb = t.ga.extend(), t.Gb.prototype.defaultValue = "00:00", t.Gb.prototype.e = function() {
    return t.ga.prototype.e.call(this, "div", {
      className: "vjs-volume-handle"
    })
  }, t.ra = t.w.extend({
    l: function(e, i) {
      t.w.call(this, e, i), this.b(e, "volumechange", this.update), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
        e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
      })
    }
  }), t.ra.prototype.e = function() {
    return t.w.prototype.e.call(this, "div", {
      className: "vjs-mute-control vjs-control",
      innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
    })
  }, t.ra.prototype.u = function() {
    this.d.muted(this.d.muted() ? l : f)
  }, t.ra.prototype.update = function() {
    var e = this.d.volume(),
      i = 3;
    for (0 === e || this.d.muted() ? i = 0 : e < .33 ? i = 1 : e < .67 && (i = 2), this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute")), e = 0; e < 4; e++) t.r(this.c, "vjs-vol-" + e);
    t.p(this.c, "vjs-vol-" + i)
  }, t.Ha = t.O.extend({
    l: function(e, i) {
      t.O.call(this, e, i), this.b(e, "volumechange", this.af), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
        e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
      }), this.p("vjs-menu-button")
    }
  }), t.Ha.prototype.La = function() {
    var e = new t.qa(this.d, {
        zc: "div"
      }),
      i = new t.Eb(this.d, this.q.volumeBar);
    return i.b("focus", function() {
      e.p("vjs-lock-showing")
    }), i.b("blur", function() {
      G(e)
    }), e.aa(i), e
  }, t.Ha.prototype.u = function() {
    t.ra.prototype.u.call(this), t.O.prototype.u.call(this)
  }, t.Ha.prototype.e = function() {
    return t.w.prototype.e.call(this, "div", {
      className: "vjs-volume-menu-button vjs-menu-button vjs-control",
      innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
    })
  }, t.Ha.prototype.af = t.ra.prototype.update, t.lc = t.O.extend({
    l: function(e, i) {
      t.O.call(this, e, i), this.pd(), this.od(), this.b(e, "loadstart", this.pd), this.b(e, "ratechange", this.od)
    }
  }), s = t.lc.prototype, s.ta = "Playback Rate", s.className = "vjs-playback-rate", s.e = function() {
    var e = t.O.prototype.e.call(this);
    return this.Oc = t.e("div", {
      className: "vjs-playback-rate-value",
      innerHTML: 1
    }), e.appendChild(this.Oc), e
  }, s.La = function() {
    var e = new t.qa(this.k()),
      i = this.k().options().playbackRates;
    if (i)
      for (var n = i.length - 1; 0 <= n; n--) e.aa(new t.Ab(this.k(), {
        rate: i[n] + "x"
      }));
    return e
  }, s.Ea = function() {
    this.m().setAttribute("aria-valuenow", this.k().playbackRate())
  }, s.u = function() {
    for (var t = this.k().playbackRate(), e = this.k().options().playbackRates, i = e[0], n = 0; n < e.length; n++)
      if (e[n] > t) {
        i = e[n];
        break
      } this.k().playbackRate(i)
  }, s.pd = function() {
    na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
  }, s.od = function() {
    na(this) && (this.Oc.innerHTML = this.k().playbackRate() + "x")
  }, t.Ab = t.M.extend({
    zc: "button",
    l: function(e, i) {
      var n = this.label = i.rate,
        o = this.Wc = parseFloat(n, 10);
      i.label = n, i.selected = 1 === o, t.M.call(this, e, i), this.b(e, "ratechange", this.update)
    }
  }), t.Ab.prototype.u = function() {
    t.M.prototype.u.call(this), this.k().playbackRate(this.Wc)
  }, t.Ab.prototype.update = function() {
    this.selected(this.k().playbackRate() == this.Wc)
  }, t.mc = t.w.extend({
    l: function(e, i) {
      t.w.call(this, e, i), this.update(), e.b("posterchange", t.bind(this, this.update))
    }
  }), s = t.mc.prototype, s.dispose = function() {
    this.k().n("posterchange", this.update), t.w.prototype.dispose.call(this)
  }, s.e = function() {
    var e = t.e("div", {
      className: "vjs-poster",
      tabIndex: -1
    });
    return t.td || (this.Mb = t.e("img"), e.appendChild(this.Mb)), e
  }, s.update = function() {
    var t = this.k().poster();
    this.na(t), t ? this.show() : this.W()
  }, s.na = function(t) {
    var e;
    this.Mb ? this.Mb.src = t : (e = "", t && (e = 'url("' + t + '")'), this.c.style.backgroundImage = e)
  }, s.u = function() {
    this.d.play()
  }, t.ic = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i)
    }
  }), t.ic.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-loading-spinner"
    })
  }, t.rb = t.w.extend(), t.rb.prototype.e = function() {
    return t.w.prototype.e.call(this, "div", {
      className: "vjs-big-play-button",
      innerHTML: '<span aria-hidden="true"></span>',
      "aria-label": "play video"
    })
  }, t.rb.prototype.u = function() {
    this.d.play()
  }, t.wb = t.a.extend({
    l: function(e, i) {
      t.a.call(this, e, i), this.update(), this.b(e, "error", this.update)
    }
  }), t.wb.prototype.e = function() {
    var e = t.a.prototype.e.call(this, "div", {
      className: "vjs-error-display"
    });
    return this.B = t.e("div"), e.appendChild(this.B), e
  }, t.wb.prototype.update = function() {
    this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
  }, t.j = t.a.extend({
    l: function(e, i, n) {
      (i = i || {}).$c = l, t.a.call(this, e, i, n), this.featuresProgressEvents || this.ne(), this.featuresTimeupdateEvents || this.oe(), this.be(), this.featuresNativeTextTracks || this.Sd(), this.de()
    }
  }), s = t.j.prototype, s.be = function() {
    var t, e;
    t = this.k(), e = function() {
      t.controls() && !t.usingNativeControls() && this.Fd()
    }, this.I(e), this.b(t, "controlsenabled", e), this.b(t, "controlsdisabled", this.De), this.I(function() {
      this.networkState && 0 < this.networkState() && this.k().o("loadstart")
    })
  }, s.Fd = function() {
    var t;
    this.b("mousedown", this.u), this.b("touchstart", function() {
      t = this.d.userActive()
    }), this.b("touchmove", function() {
      t && this.k().reportUserActivity()
    }), this.b("touchend", function(t) {
      t.preventDefault()
    }), da(this), this.b("tap", this.xe)
  }, s.De = function() {
    this.n("tap"), this.n("touchstart"), this.n("touchmove"), this.n("touchleave"), this.n("touchcancel"), this.n("touchend"), this.n("click"), this.n("mousedown")
  }, s.u = function(t) {
    0 === t.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
  }, s.xe = function() {
    this.k().userActive(!this.k().userActive())
  }, s.ne = function() {
    this.Qc = f, this.We()
  }, s.me = function() {
    this.Qc = l, this.hd()
  }, s.We = function() {
    this.Ce = this.setInterval(function() {
      var t = this.k().bufferedPercent();
      this.Jd != t && this.k().o("progress"), 1 === (this.Jd = t) && this.hd()
    }, 500)
  }, s.hd = function() {
    this.clearInterval(this.Ce)
  }, s.oe = function() {
    var t = this.d;
    this.Vb = f, this.b(t, "play", this.md), this.b(t, "pause", this.qb), this.N("timeupdate", function() {
      this.featuresTimeupdateEvents = f, this.Rc()
    })
  }, s.Rc = function() {
    var t = this.d;
    this.Vb = l, this.qb(), this.n(t, "play", this.md), this.n(t, "pause", this.qb)
  }, s.md = function() {
    this.Bc && this.qb(), this.Bc = this.setInterval(function() {
      this.k().o("timeupdate")
    }, 250)
  }, s.qb = function() {
    this.clearInterval(this.Bc), this.k().o("timeupdate")
  }, s.dispose = function() {
    this.Qc && this.me(), this.Vb && this.Rc(), t.a.prototype.dispose.call(this)
  }, s.Zb = function() {
    this.Vb && this.k().o("timeupdate")
  }, s.de = function() {
    function e() {
      var t = n.da("textTrackDisplay");
      t && t.C()
    }
    var i, n = this.d;
    (i = this.textTracks()) && (i.addEventListener("removetrack", e), i.addEventListener("addtrack", e), this.b("dispose", t.bind(this, function() {
      i.removeEventListener("removetrack", e), i.removeEventListener("addtrack", e)
    })))
  }, s.Sd = function() {
    var e, i, n, o = this.d;
    window.WebVTT || ((n = document.createElement("script")).src = o.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", o.m().appendChild(n), window.WebVTT = f), (i = this.textTracks()) && (e = function() {
      var e, i, n;
      for ((n = o.da("textTrackDisplay")).C(), e = 0; e < this.length; e++)(i = this[e]).removeEventListener("cuechange", t.bind(n, n.C)), "showing" === i.mode && i.addEventListener("cuechange", t.bind(n, n.C))
    }, i.addEventListener("change", e), this.b("dispose", t.bind(this, function() {
      i.removeEventListener("change", e)
    })))
  }, s.textTracks = function() {
    return this.d.ld = this.d.ld || new t.F, this.d.ld
  }, s.X = function() {
    return this.d.Xc = this.d.Xc || new t.F, this.d.Xc
  }, O = function(e, i, n, o, r) {
    var a = e.textTracks();
    return (r = r || {}).kind = i, n && (r.label = n), o && (r.language = o), r.player = e.d, P(a, e = new t.t(r)), e
  }, t.j.prototype.addTextTrack = function(t, e, i) {
    if (!t) throw Error("TextTrack kind is required but was not provided");
    return O(this, t, e, i)
  }, t.j.prototype.ha = function(t) {
    return t = O(this, t.kind, t.label, t.language, t), P(this.X(), t), {
      Y: t
    }
  }, t.j.prototype.Da = function(t) {
    Q(this.textTracks(), t), Q(this.X(), t)
  }, t.j.prototype.bd = m(), t.j.prototype.featuresVolumeControl = f, t.j.prototype.featuresFullscreenResize = l, t.j.prototype.featuresPlaybackRate = l, t.j.prototype.featuresProgressEvents = l, t.j.prototype.featuresTimeupdateEvents = l, t.j.prototype.featuresNativeTextTracks = l, t.j.dc = function(n) {
    n.registerSourceHandler = function(t, e) {
      var i = n.cd;
      i || (i = n.cd = []), e === b && (e = i.length), i.splice(e, 0, t)
    }, n.ob = function(t) {
      for (var e = n.cd || [], i = 0; i < e.length; i++)
        if (e[i].canHandleSource(t)) return e[i];
      return j
    }, n.wc = function(t) {
      var e = n.ob(t);
      return e ? e.canHandleSource(t) : ""
    }, n.prototype.ma = function(e) {
      var i = n.ob(e);
      return i || (n.nativeSourceHandler ? i = n.nativeSourceHandler : t.log.error("No source hander found for the current source.")), this.ia(), this.n("dispose", this.ia), this.fb = e, this.$b = i.handleSource(e, this), this.b("dispose", this.ia), this
    }, n.prototype.ia = function() {
      this.$b && this.$b.dispose && this.$b.dispose()
    }
  }, t.media = {}, t.f = t.j.extend({
    l: function(e, i, n) {
      var o, r, a, s, c, u;
      for (i.nativeCaptions !== l && i.nativeTextTracks !== l || (this.featuresNativeTextTracks = l), t.j.call(this, e, i, n), n = t.f.xb.length - 1; 0 <= n; n--) this.b(t.f.xb[n], this.Td);
      if ((i = i.source) && (this.c.currentSrc !== i.src || e.L && 3 === e.L.ce) && this.ma(i), this.c.hasChildNodes()) {
        for (o = (n = this.c.childNodes).length, i = []; o--;) "track" === (r = n[o]).nodeName.toLowerCase() && (this.featuresNativeTextTracks ? P(this.X(), r.track) : i.push(r));
        for (n = 0; n < i.length; n++) this.c.removeChild(i[n])
      }
      t.Db && e.options().nativeControlsForTouch === f && (i = (s = (a = this).k()).controls(), a.c.controls = !!i, c = function() {
        a.c.controls = f
      }, u = function() {
        a.c.controls = l
      }, s.b("controlsenabled", c), s.b("controlsdisabled", u), i = function() {
        s.n("controlsenabled", c), s.n("controlsdisabled", u)
      }, a.b("dispose", i), s.b("usingcustomcontrols", i), s.usingNativeControls(f));
      e.I(function() {
        this.src() && this.L && this.q.autoplay && this.paused() && (delete this.L.poster, this.play())
      }), this.Va()
    }
  }), s = t.f.prototype, s.dispose = function() {
    t.f.Kb(this.c), t.j.prototype.dispose.call(this)
  }, s.e = function() {
    var e, i, n, o = this.d,
      r = o.L;
    if (!r || this.movingMediaElementInDOM === l) {
      if (r ? (n = r.cloneNode(l), t.f.Kb(r), r = n, o.L = j) : (r = t.e("video"), n = videojs.Z.Aa({}, o.Te), (!t.Db || o.options().nativeControlsForTouch !== f) && delete n.controls, t.ad(r, t.i.D(n, {
          id: o.id() + "_html5_api",
          class: "vjs-tech"
        }))), (r.player = o).q.nd)
        for (n = 0; n < o.q.nd.length; n++) e = o.q.nd[n], (i = document.createElement("track")).Tb = e.Tb, i.label = e.label, i.ed = e.ed, i.src = e.src, "default" in e && i.setAttribute("default", "default"), r.appendChild(i);
      t.Rb(r, o.m())
    }
    for (n = (e = ["autoplay", "preload", "loop", "muted"]).length - 1; 0 <= n; n--) {
      i = e[n];
      var a = {};
      void 0 !== o.q[i] && (a[i] = o.q[i]), t.ad(r, a)
    }
    return r
  }, s.Td = function(t) {
    "error" == t.type && this.error() ? this.k().error(this.error().code) : (t.bubbles = l, this.k().o(t))
  }, s.play = function() {
    this.c.play()
  }, s.pause = function() {
    this.c.pause()
  }, s.paused = function() {
    return this.c.paused
  }, s.currentTime = function() {
    return this.c.currentTime
  }, s.Zb = function(e) {
    try {
      this.c.currentTime = e
    } catch (e) {
      t.log(e, "Video is not ready. (Video.js)")
    }
  }, s.duration = function() {
    return this.c.duration || 0
  }, s.buffered = function() {
    return this.c.buffered
  }, s.volume = function() {
    return this.c.volume
  }, s.Oe = function(t) {
    this.c.volume = t
  }, s.muted = function() {
    return this.c.muted
  }, s.Ke = function(t) {
    this.c.muted = t
  }, s.width = function() {
    return this.c.offsetWidth
  }, s.height = function() {
    return this.c.offsetHeight
  }, s.Sa = function() {
    return "function" != typeof this.c.webkitEnterFullScreen || !/Android/.test(t.P) && /Chrome|Mac OS X 10.5/.test(t.P) ? l : f
  }, s.Ec = function() {
    var t = this.c;
    "webkitDisplayingFullscreen" in t && this.N("webkitbeginfullscreen", function() {
      this.d.isFullscreen(f), this.N("webkitendfullscreen", function() {
        this.d.isFullscreen(l), this.d.o("fullscreenchange")
      }), this.d.o("fullscreenchange")
    }), t.paused && t.networkState <= t.ef ? (this.c.play(), this.setTimeout(function() {
      t.pause(), t.webkitEnterFullScreen()
    }, 0)) : t.webkitEnterFullScreen()
  }, s.Ud = function() {
    this.c.webkitExitFullScreen()
  }, s.src = function(t) {
    var e = this.c.src;
    if (t === b) return oa(e, this.dd);
    this.na(t)
  }, s.na = function(t) {
    this.c.src = t
  }, s.load = function() {
    this.c.load()
  }, s.currentSrc = function() {
    var t = this.c.currentSrc;
    return this.fb ? oa(t, this.fb.src) : t
  }, s.poster = function() {
    return this.c.poster
  }, s.bd = function(t) {
    this.c.poster = t
  }, s.Ra = function() {
    return this.c.Ra
  }, s.Me = function(t) {
    this.c.Ra = t
  }, s.autoplay = function() {
    return this.c.autoplay
  }, s.He = function(t) {
    this.c.autoplay = t
  }, s.controls = function() {
    return this.c.controls
  }, s.loop = function() {
    return this.c.loop
  }, s.Je = function(t) {
    this.c.loop = t
  }, s.error = function() {
    return this.c.error
  }, s.seeking = function() {
    return this.c.seeking
  }, s.seekable = function() {
    return this.c.seekable
  }, s.ended = function() {
    return this.c.ended
  }, s.playbackRate = function() {
    return this.c.playbackRate
  }, s.Le = function(t) {
    this.c.playbackRate = t
  }, s.networkState = function() {
    return this.c.networkState
  }, s.readyState = function() {
    return this.c.readyState
  }, s.textTracks = function() {
    return this.featuresNativeTextTracks ? this.c.textTracks : t.j.prototype.textTracks.call(this)
  }, s.addTextTrack = function(e, i, n) {
    return this.featuresNativeTextTracks ? this.c.addTextTrack(e, i, n) : t.j.prototype.addTextTrack.call(this, e, i, n)
  }, s.ha = function(e) {
    if (!this.featuresNativeTextTracks) return t.j.prototype.ha.call(this, e);
    var i = document.createElement("track");
    return (e = e || {}).kind && (i.kind = e.kind), e.label && (i.label = e.label), (e.language || e.srclang) && (i.srclang = e.language || e.srclang), e.default && (i.default = e.default), e.id && (i.id = e.id), e.src && (i.src = e.src), this.m().appendChild(i), P(this.X(), i.Y), i
  }, s.Da = function(e) {
    if (!this.featuresNativeTextTracks) return t.j.prototype.Da.call(this, e);
    var i, n;
    for (Q(this.X(), e), i = this.m().querySelectorAll("track"), n = 0; n < i.length; n++)
      if (i[n] === e || i[n].track === e) {
        i[n].parentNode.removeChild(i[n]);
        break
      }
  }, t.f.isSupported = function() {
    try {
      t.A.volume = .5
    } catch (t) {
      return l
    }
    return !!t.A.canPlayType
  }, t.j.dc(t.f);
  var pa = t.f.prototype.ma,
    qa = t.f.prototype.ia;
  t.f.prototype.ma = function(t) {
    var e = pa.call(this, t);
    return this.dd = t.src, e
  }, t.f.prototype.ia = function() {
    return this.dd = b, qa.call(this)
  }, t.f.nativeSourceHandler = {}, t.f.nativeSourceHandler.canHandleSource = function(e) {
    function i(e) {
      try {
        return t.A.canPlayType(e)
      } catch (t) {
        return ""
      }
    }
    return e.type ? i(e.type) : e.src ? i("video/" + (e = (e = e.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && e[1])) : ""
  }, t.f.nativeSourceHandler.handleSource = function(t, e) {
    e.na(t.src)
  }, t.f.nativeSourceHandler.dispose = m(), t.f.registerSourceHandler(t.f.nativeSourceHandler), t.f.Ld = function() {
    var e = t.A.volume;
    return t.A.volume = e / 2 + .1, e !== t.A.volume
  }, t.f.Kd = function() {
    var e = t.A.playbackRate;
    return t.A.playbackRate = e / 2 + .1, e !== t.A.playbackRate
  }, t.f.Re = function() {
    var e;
    return (e = !!t.A.textTracks) && 0 < t.A.textTracks.length && (e = "number" != typeof t.A.textTracks[0].mode), e && t.gc && (e = l), e
  }, t.f.prototype.featuresVolumeControl = t.f.Ld(), t.f.prototype.featuresPlaybackRate = t.f.Kd(), t.f.prototype.movingMediaElementInDOM = !t.xd, t.f.prototype.featuresFullscreenResize = f, t.f.prototype.featuresProgressEvents = f, t.f.prototype.featuresNativeTextTracks = t.f.Re();
  var S, ra = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
    sa = /^video\/mp4/i;

  function ta() {
    var e = T[U],
      t = e.charAt(0).toUpperCase() + e.slice(1);
    ua["set" + t] = function(t) {
      return this.c.vjs_setProperty(e, t)
    }
  }

  function va(t) {
    ua[t] = function() {
      return this.c.vjs_getProperty(t)
    }
  }
  t.f.Tc = function() {
    4 <= t.ec && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
      return t && ra.test(t) ? "maybe" : S.call(this, t)
    }), t.Bd && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
      return t && sa.test(t) ? "maybe" : S.call(this, t)
    })
  }, t.f.Ye = function() {
    var e = t.A.constructor.prototype.canPlayType;
    return t.A.constructor.prototype.canPlayType = S, S = j, e
  }, t.f.Tc(), t.f.xb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), t.f.Kb = function(t) {
    if (t) {
      for (t.player = j, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
      if (t.removeAttribute("src"), "function" == typeof t.load) try {
        t.load()
      } catch (t) {}
    }
  }, t.g = t.j.extend({
    l: function(e, i, n) {
      t.j.call(this, e, i, n);
      var o = i.source;
      n = e.id() + "_flash_api";
      var r = e.q,
        a = (r = t.i.D({
          readyFunction: "videojs.Flash.onReady",
          eventProxyFunction: "videojs.Flash.onEvent",
          errorEventProxyFunction: "videojs.Flash.onError",
          autoplay: r.autoplay,
          preload: r.Ra,
          loop: r.loop,
          muted: r.muted
        }, i.flashVars), t.i.D({
          wmode: "opaque",
          bgcolor: "#000000"
        }, i.params));
      n = t.i.D({
        id: n,
        name: n,
        class: "vjs-tech"
      }, i.attributes), o && this.I(function() {
        this.ma(o)
      }), t.Rb(this.c, i.parentEl), i.startTime && this.I(function() {
        this.load(), this.play(), this.currentTime(i.startTime)
      }), t.gc && this.I(function() {
        this.b("mousemove", function() {
          this.k().o({
            type: "mousemove",
            bubbles: l
          })
        })
      }), e.b("stageclick", e.reportUserActivity), this.c = t.g.Dc(i.swf, this.c, r, a, n)
    }
  }), s = t.g.prototype, s.dispose = function() {
    t.j.prototype.dispose.call(this)
  }, s.play = function() {
    this.ended() && this.setCurrentTime(0), this.c.vjs_play()
  }, s.pause = function() {
    this.c.vjs_pause()
  }, s.src = function(t) {
    return t === b ? this.currentSrc() : this.na(t)
  }, s.na = function(e) {
    if (e = t.Xd(e), this.c.vjs_src(e), this.d.autoplay()) {
      var i = this;
      this.setTimeout(function() {
        i.play()
      }, 0)
    }
  }, t.g.prototype.setCurrentTime = function(e) {
    this.ke = e, this.c.vjs_setProperty("currentTime", e), t.j.prototype.Zb.call(this)
  }, t.g.prototype.currentTime = function() {
    return this.seeking() ? this.ke || 0 : this.c.vjs_getProperty("currentTime")
  }, t.g.prototype.currentSrc = function() {
    return this.fb ? this.fb.src : this.c.vjs_getProperty("currentSrc")
  }, t.g.prototype.load = function() {
    this.c.vjs_load()
  }, t.g.prototype.poster = function() {
    this.c.vjs_getProperty("poster")
  }, t.g.prototype.setPoster = m(), s = t.g.prototype, s.seekable = function() {
    return 0 === this.duration() ? t.xa() : t.xa(0, this.duration())
  }, s.buffered = function() {
    return this.c.vjs_getProperty ? t.xa(0, this.c.vjs_getProperty("buffered")) : t.xa()
  }, s.duration = function() {
    return this.c.vjs_getProperty ? this.c.vjs_getProperty("duration") : 0
  }, s.Sa = p(l), s.Ec = p(l);
  var ua = t.g.prototype,
    T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
    wa = "error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),
    U, ya, V, xa;
  for (U = 0; U < T.length; U++) va(T[U]), ta();
  for (U = 0; U < wa.length; U++) va(wa[U]);
  for (var za in t.g.isSupported = function() {
      return 10 <= t.g.version()[0]
    }, t.j.dc(t.g), t.g.nativeSourceHandler = {}, t.g.nativeSourceHandler.canHandleSource = function(e) {
      return e.type && e.type.replace(/;.*/, "").toLowerCase() in t.g.Wd ? "maybe" : ""
    }, t.g.nativeSourceHandler.handleSource = function(t, e) {
      e.na(t.src)
    }, t.g.nativeSourceHandler.dispose = m(), t.g.registerSourceHandler(t.g.nativeSourceHandler), t.g.Wd = {
      "video/flv": "FLV",
      "video/x-flv": "FLV",
      "video/mp4": "MP4",
      "video/m4v": "MP4"
    }, t.g.onReady = function(e) {
      var i;
      (i = (e = t.m(e)) && e.parentNode && e.parentNode.player) && (e.player = i, t.g.checkReady(i.h))
    }, t.g.checkReady = function(e) {
      e.m() && (e.m().vjs_getProperty ? e.Va() : this.setTimeout(function() {
        t.g.checkReady(e)
      }, 50))
    }, t.g.onEvent = function(e, i) {
      t.m(e).player.o(i)
    }, t.g.onError = function(e, i) {
      var n = t.m(e).player,
        o = "FLASH: " + i;
      "srcnotfound" == i ? n.error({
        code: 4,
        message: o
      }) : n.error(o)
    }, t.g.version = function() {
      var e = "0,0,0";
      try {
        e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
      } catch (t) {
        try {
          navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
        } catch (t) {}
      }
      return e.split(",")
    }, t.g.Dc = function(e, i, n, o, r) {
      e = t.g.$d(e, n, o, r), e = t.e("div", {
        innerHTML: e
      }).childNodes[0], n = i.parentNode, i.parentNode.replaceChild(e, i), e[t.expando] = i[t.expando];
      var a = n.childNodes[0];
      return setTimeout(function() {
        a.style.display = "block"
      }, 1e3), e
    }, t.g.$d = function(e, i, n, o) {
      var r = "",
        a = "",
        s = "";
      return i && t.i.ca(i, function(t, e) {
        r += t + "=" + e + "&amp;"
      }), n = t.i.D({
        movie: e,
        flashvars: r,
        allowScriptAccess: "always",
        allowNetworking: "all"
      }, n), t.i.ca(n, function(t, e) {
        a += '<param name="' + t + '" value="' + e + '" />'
      }), o = t.i.D({
        data: e,
        width: "100%",
        height: "100%"
      }, o), t.i.ca(o, function(t, e) {
        s += t + '="' + e + '" '
      }), '<object type="application/x-shockwave-flash" ' + s + ">" + a + "</object>"
    }, t.g.Qe = {
      "rtmp/mp4": "MP4",
      "rtmp/flv": "FLV"
    }, t.g.Df = function(t, e) {
      return t + "&" + e
    }, t.g.Pe = function(t) {
      var e = {
        yc: "",
        jd: ""
      };
      if (!t) return e;
      var i, n = t.indexOf("&");
      return -1 !== n ? i = n + 1 : 0 === (n = i = t.lastIndexOf("/") + 1) && (n = i = t.length), e.yc = t.substring(0, n), e.jd = t.substring(i, t.length), e
    }, t.g.ie = function(e) {
      return e in t.g.Qe
    }, t.g.Dd = /^rtmp[set]?:\/\//i, t.g.he = function(e) {
      return t.g.Dd.test(e)
    }, t.g.Yb = {}, t.g.Yb.canHandleSource = function(e) {
      return t.g.ie(e.type) || t.g.he(e.src) ? "maybe" : ""
    }, t.g.Yb.handleSource = function(e, i) {
      var n = t.g.Pe(e.src);
      i.setRtmpConnection(n.yc), i.setRtmpStream(n.jd)
    }, t.g.registerSourceHandler(t.g.Yb), t.Cd = t.a.extend({
      l: function(e, i, n) {
        if (t.a.call(this, e, i, n), e.q.sources && 0 !== e.q.sources.length) e.src(e.q.sources);
        else
          for (i = 0, n = e.q.techOrder; i < n.length; i++) {
            var o = t.va(n[i]),
              r = window.videojs[o];
            if (r && r.isSupported()) {
              ka(e, o);
              break
            }
          }
      }
    }), t.oc = {
      disabled: "disabled",
      hidden: "hidden",
      showing: "showing"
    }, t.Ed = {
      subtitles: "subtitles",
      captions: "captions",
      descriptions: "descriptions",
      chapters: "chapters",
      metadata: "metadata"
    }, t.t = function(e) {
      var i, n, o, r, a, s, c, u, h, d, p;
      if (!(e = e || {}).player) throw Error("A player was not provided.");
      if (i = this, t.pa)
        for (p in i = document.createElement("custom"), t.t.prototype) i[p] = t.t.prototype[p];
      if (i.d = e.player, o = t.oc[e.mode] || "disabled", r = t.Ed[e.kind] || "subtitles", a = e.label || "", s = e.language || e.srclang || "", n = e.id || "vjs_text_track_" + t.s++, "metadata" !== r && "chapters" !== r || (o = "hidden"), i.V = [], i.Ia = [], c = new t.U(i.V), u = new t.U(i.Ia), d = l, h = t.bind(i, function() {
          this.activeCues, d && (this.trigger("cuechange"), d = l)
        }), "disabled" !== o && i.d.b("timeupdate", h), Object.defineProperty(i, "kind", {
          get: function() {
            return r
          },
          set: Function.prototype
        }), Object.defineProperty(i, "label", {
          get: function() {
            return a
          },
          set: Function.prototype
        }), Object.defineProperty(i, "language", {
          get: function() {
            return s
          },
          set: Function.prototype
        }), Object.defineProperty(i, "id", {
          get: function() {
            return n
          },
          set: Function.prototype
        }), Object.defineProperty(i, "mode", {
          get: function() {
            return o
          },
          set: function(e) {
            t.oc[e] && ("showing" === (o = e) && this.d.b("timeupdate", h), this.o("modechange"))
          }
        }), Object.defineProperty(i, "cues", {
          get: function() {
            return this.Ub ? c : j
          },
          set: Function.prototype
        }), Object.defineProperty(i, "activeCues", {
          get: function() {
            var t, e, i, n, o;
            if (!this.Ub) return j;
            if (0 === this.cues.length) return u;
            for (n = this.d.currentTime(), t = 0, e = this.cues.length, i = []; t < e; t++)(o = this.cues[t]).startTime <= n && o.endTime >= n ? i.push(o) : o.startTime === o.endTime && o.startTime <= n && o.startTime + .5 >= n && i.push(o);
            if (d = l, i.length !== this.Ia.length) d = f;
            else
              for (t = 0; t < i.length; t++) - 1 === xa.call(this.Ia, i[t]) && (d = f);
            return this.Ia = i, u.pb(this.Ia), u
          },
          set: Function.prototype
        }), e.src ? ya(e.src, i) : i.Ub = f, t.pa) return i
    }, t.t.prototype = t.i.create(t.z.prototype), t.t.prototype.constructor = t.t, t.t.prototype.ab = {
      cuechange: "cuechange"
    }, t.t.prototype.sc = function(t) {
      var e = this.d.textTracks(),
        i = 0;
      if (e)
        for (; i < e.length; i++) e[i] !== this && e[i].Yc(t);
      this.V.push(t), this.cues.pb(this.V)
    }, t.t.prototype.Yc = function(t) {
      for (var e = 0, i = this.V.length, n = l; e < i; e++) this.V[e] === t && (this.V.splice(e, 1), n = f);
      n && this.Ac.pb(this.V)
    }, ya = function(e, o) {
      t.bf(e, t.bind(this, function(e, i, n) {
        if (e) return t.log.error(e);
        o.Ub = f, V(n, o)
      }))
    }, V = function(e, i) {
      if ("function" != typeof window.WebVTT) window.setTimeout(function() {
        V(e, i)
      }, 25);
      else {
        var n = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
        n.oncue = function(t) {
          i.sc(t)
        }, n.onparsingerror = function(e) {
          t.log.error(e)
        }, n.parse(e), n.flush()
      }
    }, xa = function(t, e) {
      var i;
      if (this == j) throw new TypeError('"this" is null or not defined');
      var n = Object(this),
        o = n.length >>> 0;
      if (0 === o) return -1;
      if (i = +e || 0, 1 / 0 === Math.abs(i) && (i = 0), o <= i) return -1;
      for (i = Math.max(0 <= i ? i : o - Math.abs(i), 0); i < o;) {
        if (i in n && n[i] === t) return i;
        i++
      }
      return -1
    }, t.F = function(e) {
      var i, n = this,
        o = 0;
      if (t.pa)
        for (i in n = document.createElement("custom"), t.F.prototype) n[i] = t.F.prototype[i];
      for (e = e || [], n.Ua = [], Object.defineProperty(n, "length", {
          get: function() {
            return this.Ua.length
          }
        }); o < e.length; o++) P(n, e[o]);
      if (t.pa) return n
    }, t.F.prototype = t.i.create(t.z.prototype), t.F.prototype.constructor = t.F, t.F.prototype.ab = {
      change: "change",
      addtrack: "addtrack",
      removetrack: "removetrack"
    }, t.F.prototype.ab) t.F.prototype["on" + za] = j;

  function P(e, i) {
    var n = e.Ua.length;
    "" + n in e || Object.defineProperty(e, n, {
      get: function() {
        return this.Ua[n]
      }
    }), i.addEventListener("modechange", t.bind(e, function() {
      this.o("change")
    })), e.Ua.push(i), e.o({
      type: "addtrack",
      Y: i
    })
  }

  function Q(t, e) {
    for (var i = 0, n = t.length; i < n; i++)
      if (t[i] === e) {
        t.Ua.splice(i, 1);
        break
      } t.o({
      type: "removetrack",
      Y: e
    })
  }

  function W(t, e) {
    return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
  }
  t.F.prototype.ae = function(t) {
    for (var e, i = 0, n = this.length, o = j; i < n; i++)
      if ((e = this[i]).id === t) {
        o = e;
        break
      } return o
  }, t.U = function(e) {
    var i, o = this;
    if (t.pa)
      for (i in o = document.createElement("custom"), t.U.prototype) o[i] = t.U.prototype[i];
    if (t.U.prototype.pb.call(o, e), Object.defineProperty(o, "length", {
        get: n("le")
      }), t.pa) return o
  }, t.U.prototype.pb = function(t) {
    var e = this.length || 0,
      i = 0,
      n = t.length;
    if (this.V = t, this.le = t.length, t = function(t) {
        "" + t in this || Object.defineProperty(this, "" + t, {
          get: function() {
            return this.V[t]
          }
        })
      }, e < n)
      for (i = e; i < n; i++) t.call(this, i)
  }, t.U.prototype.Zd = function(t) {
    for (var e, i = 0, n = this.length, o = j; i < n; i++)
      if ((e = this[i]).id === t) {
        o = e;
        break
      } return o
  }, t.sa = t.a.extend({
    l: function(o, e, i) {
      t.a.call(this, o, e, i), o.b("loadstart", t.bind(this, this.Ve)), o.I(t.bind(this, function() {
        var e, i, n;
        if (o.h && o.h.featuresNativeTextTracks) this.W();
        else
          for (o.b("fullscreenchange", t.bind(this, this.C)), i = o.q.tracks || [], e = 0; e < i.length; e++) n = i[e], this.d.ha(n)
      }))
    }
  }), t.sa.prototype.Ve = function() {
    this.d.h && this.d.h.featuresNativeTextTracks ? this.W() : this.show()
  }, t.sa.prototype.e = function() {
    return t.a.prototype.e.call(this, "div", {
      className: "vjs-text-track-display"
    })
  }, t.sa.prototype.Md = function() {
    "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
  };
  var Aa = {
    tf: "monospace",
    zf: "sans-serif",
    Bf: "serif",
    uf: '"Andale Mono", "Lucida Console", monospace',
    vf: '"Courier New", monospace',
    xf: "sans-serif",
    yf: "serif",
    kf: '"Comic Sans MS", Impact, fantasy',
    Af: '"Monotype Corsiva", cursive',
    Cf: '"Andale Mono", "Lucida Console", monospace, sans-serif'
  };

  function X(t) {
    var e;
    return t.Ge ? e = t.Ge[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
  }

  function Y(t, e) {
    var i;
    if (e) {
      for (i = 0; i < t.options.length && t.options[i].value !== e; i++);
      t.selectedIndex = i
    }
  }
  if (t.sa.prototype.C = function() {
      var t, e = this.d.textTracks(),
        i = 0;
      if (this.Md(), e)
        for (; i < e.length; i++) "showing" === (t = e[i]).mode && this.Ze(t)
    }, t.sa.prototype.Ze = function(t) {
      if ("function" == typeof window.WebVTT && t.activeCues) {
        for (var e, i = 0, n = this.d.textTrackSettings.Hc(), o = []; i < t.activeCues.length; i++) o.push(t.activeCues[i]);
        for (window.WebVTT.processCues(window, t.activeCues, this.c), i = o.length; i--;) {
          if (t = o[i].lf, n.color && (t.firstChild.style.color = n.color), n.kd) try {
            t.firstChild.style.color = W(n.color || "#fff", n.kd)
          } catch (t) {}
          if (n.backgroundColor && (t.firstChild.style.backgroundColor = n.backgroundColor), n.vc) try {
            t.firstChild.style.backgroundColor = W(n.backgroundColor || "#000", n.vc)
          } catch (t) {}
          if (n.cc)
            if (n.rd) try {
              t.style.backgroundColor = W(n.cc, n.rd)
            } catch (t) {} else t.style.backgroundColor = n.cc;
          n.Ma && ("dropshadow" === n.Ma ? t.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === n.Ma ? t.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === n.Ma ? t.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === n.Ma && (t.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), n.Ob && 1 !== n.Ob && (e = window.wf(t.style.fontSize), t.style.fontSize = e * n.Ob + "px", t.style.height = "auto", t.style.top = "auto", t.style.bottom = "2px"), n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? t.firstChild.style.fontVariant = "small-caps" : t.firstChild.style.fontFamily = Aa[n.fontFamily])
        }
      }
    }, t.$ = t.M.extend({
      l: function(e, i) {
        var n, o, r = this.Y = i.track,
          a = e.textTracks();
        a && (n = t.bind(this, function() {
          var e, i, n, o = "showing" === this.Y.mode;
          if (this instanceof t.zb)
            for (o = f, i = 0, n = a.length; i < n; i++)
              if ((e = a[i]).kind === this.Y.kind && "showing" === e.mode) {
                o = l;
                break
              } this.selected(o)
        }), a.addEventListener("change", n), e.b("dispose", function() {
          a.removeEventListener("change", n)
        })), i.label = r.label || r.language || "Unknown", i.selected = r.default || "showing" === r.mode, t.M.call(this, e, i), a && a.onchange === b && this.b(["tap", "click"], function() {
          if ("object" != typeof window.vd) try {
            o = new window.vd("change")
          } catch (t) {}
          o || (o = document.createEvent("Event")).initEvent("change", f, f), a.dispatchEvent(o)
        })
      }
    }), t.$.prototype.u = function() {
      var e, i = this.Y.kind,
        n = this.d.textTracks(),
        o = 0;
      if (t.M.prototype.u.call(this), n)
        for (; o < n.length; o++)(e = n[o]).kind === i && (e.mode = e === this.Y ? "showing" : "disabled")
    }, t.zb = t.$.extend({
      l: function(e, i) {
        i.track = {
          kind: i.kind,
          player: e,
          label: i.kind + " off",
          default: l,
          mode: "disabled"
        }, t.$.call(this, e, i), this.selected(f)
      }
    }), t.sb = t.$.extend({
      l: function(e, i) {
        i.track = {
          kind: i.kind,
          player: e,
          label: i.kind + " settings",
          default: l,
          mode: "disabled"
        }, t.$.call(this, e, i), this.p("vjs-texttrack-settings")
      }
    }), t.sb.prototype.u = function() {
      this.k().da("textTrackSettings").show()
    }, t.Q = t.O.extend({
      l: function(e, i) {
        var n, o;
        t.O.call(this, e, i), n = this.d.textTracks(), this.H.length <= 1 && this.W(), n && (o = t.bind(this, this.update), n.addEventListener("removetrack", o), n.addEventListener("addtrack", o), this.d.b("dispose", function() {
          n.removeEventListener("removetrack", o), n.removeEventListener("addtrack", o)
        }))
      }
    }), t.Q.prototype.Ka = function() {
      var e, i, n = [];
      if (this instanceof t.oa && (!this.k().h || !this.k().h.featuresNativeTextTracks) && n.push(new t.sb(this.d, {
          kind: this.ea
        })), n.push(new t.zb(this.d, {
          kind: this.ea
        })), !(i = this.d.textTracks())) return n;
      for (var o = 0; o < i.length; o++)(e = i[o]).kind === this.ea && n.push(new t.$(this.d, {
        track: e
      }));
      return n
    }, t.oa = t.Q.extend({
      l: function(e, i, n) {
        t.Q.call(this, e, i, n), this.c.setAttribute("aria-label", "Captions Menu")
      }
    }), t.oa.prototype.ea = "captions", t.oa.prototype.ta = "Captions", t.oa.prototype.className = "vjs-captions-button", t.oa.prototype.update = function() {
      var e = 2;
      t.Q.prototype.update.call(this), this.k().h && this.k().h.featuresNativeTextTracks && (e = 1), this.H && this.H.length > e ? this.show() : this.W()
    }, t.$a = t.Q.extend({
      l: function(e, i, n) {
        t.Q.call(this, e, i, n), this.c.setAttribute("aria-label", "Subtitles Menu")
      }
    }), t.$a.prototype.ea = "subtitles", t.$a.prototype.ta = "Subtitles", t.$a.prototype.className = "vjs-subtitles-button", t.Wa = t.Q.extend({
      l: function(e, i, n) {
        t.Q.call(this, e, i, n), this.c.setAttribute("aria-label", "Chapters Menu")
      }
    }), s = t.Wa.prototype, s.ea = "chapters", s.ta = "Chapters", s.className = "vjs-chapters-button", s.Ka = function() {
      var e, i, n = [];
      if (!(i = this.d.textTracks())) return n;
      for (var o = 0; o < i.length; o++)(e = i[o]).kind === this.ea && n.push(new t.$(this.d, {
        track: e
      }));
      return n
    }, s.La = function() {
      for (var e, i, n = this.d.textTracks() || [], o = 0, r = n.length, a = this.H = []; o < r; o++)
        if ((e = n[o]).kind == this.ea) {
          if (e.Ac) {
            i = e;
            break
          }
          e.mode = "hidden", window.setTimeout(t.bind(this, function() {
            this.La()
          }), 100)
        } if ((n = this.za) === b && (n = new t.qa(this.d)).wa().appendChild(t.e("li", {
          className: "vjs-menu-title",
          innerHTML: t.va(this.ea),
          Se: -1
        })), i) {
        var s;
        for (o = 0, r = (e = i.cues).length; o < r; o++) s = e[o], s = new t.Xa(this.d, {
          track: i,
          cue: s
        }), a.push(s), n.aa(s);
        this.aa(n)
      }
      return 0 < this.H.length && this.show(), n
    }, t.Xa = t.M.extend({
      l: function(e, i) {
        var n = this.Y = i.track,
          o = this.cue = i.cue,
          r = e.currentTime();
        i.label = o.text, i.selected = o.startTime <= r && r < o.endTime, t.M.call(this, e, i), n.addEventListener("cuechange", t.bind(this, this.update))
      }
    }), t.Xa.prototype.u = function() {
      t.M.prototype.u.call(this), this.d.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, t.Xa.prototype.update = function() {
      var t = this.cue,
        e = this.d.currentTime();
      this.selected(t.startTime <= e && e < t.endTime)
    }, t.pc = t.a.extend({
      l: function(e, i) {
        t.a.call(this, e, i), this.W(), t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this, function() {
          this.Fe(), this.W()
        })), t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this, function() {
          this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0, this.m().querySelector(".window-color > select").selectedIndex = 0, this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-edge-style select").selectedIndex = 0, this.m().querySelector(".vjs-font-family select").selectedIndex = 0, this.m().querySelector(".vjs-font-percent select").selectedIndex = 2, this.C()
        })), t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C)), e.options().persistTextTrackSettings && this.Ee()
      }
    }), s = t.pc.prototype, s.e = function() {
      return t.a.prototype.e.call(this, "div", {
        className: "vjs-caption-settings vjs-modal-overlay",
        innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
      })
    }, s.Hc = function() {
      var t, e, i, n, o, r, a, s, l;
      for (l in n = X((t = this.m()).querySelector(".vjs-edge-style select")), o = X(t.querySelector(".vjs-font-family select")), r = X(t.querySelector(".vjs-fg-color > select")), i = X(t.querySelector(".vjs-text-opacity > select")), a = X(t.querySelector(".vjs-bg-color > select")), e = X(t.querySelector(".vjs-bg-opacity > select")), s = X(t.querySelector(".window-color > select")), e = {
          backgroundOpacity: e,
          textOpacity: i,
          windowOpacity: X(t.querySelector(".vjs-window-opacity > select")),
          edgeStyle: n,
          fontFamily: o,
          color: r,
          backgroundColor: a,
          windowColor: s,
          fontPercent: t = window.parseFloat(X(t.querySelector(".vjs-font-percent > select")))
        })("" === e[l] || "none" === e[l] || "fontPercent" === l && 1 === e[l]) && delete e[l];
      return e
    }, s.Ne = function(t) {
      var e = this.m();
      Y(e.querySelector(".vjs-edge-style select"), t.Ma), Y(e.querySelector(".vjs-font-family select"), t.fontFamily), Y(e.querySelector(".vjs-fg-color > select"), t.color), Y(e.querySelector(".vjs-text-opacity > select"), t.kd), Y(e.querySelector(".vjs-bg-color > select"), t.backgroundColor), Y(e.querySelector(".vjs-bg-opacity > select"), t.vc), Y(e.querySelector(".window-color > select"), t.cc), Y(e.querySelector(".vjs-window-opacity > select"), t.rd), (t = t.Ob) && (t = t.toFixed(2)), Y(e.querySelector(".vjs-font-percent > select"), t)
    }, s.Ee = function() {
      var t;
      try {
        t = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
      } catch (t) {}
      t && this.Ne(t)
    }, s.Fe = function() {
      var e;
      if (this.d.options().persistTextTrackSettings) {
        e = this.Hc();
        try {
          t.hb(e) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e))
        } catch (t) {}
      }
    }, s.C = function() {
      var t = this.d.da("textTrackDisplay");
      t && t.C()
    }, void 0 !== window.JSON && "function" == typeof window.JSON.parse) t.JSON = window.JSON;
  else {
    t.JSON = {};
    var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    t.JSON.parse = function(a, c) {
      function d(t, e) {
        var i, n, o = t[e];
        if (o && "object" == typeof o)
          for (i in o) Object.prototype.hasOwnProperty.call(o, i) && ((n = d(o, i)) !== b ? o[i] = n : delete o[i]);
        return c.call(t, e, o)
      }
      var e;
      if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z, function(t) {
          return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" == typeof c ? d({
        "": e
      }, "") : e;
      throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
    }
  }
  t.uc = function() {
    var e, i, n, o;
    e = document.getElementsByTagName("video"), i = document.getElementsByTagName("audio");
    var r = [];
    if (e && 0 < e.length)
      for (n = 0, o = e.length; n < o; n++) r.push(e[n]);
    if (i && 0 < i.length)
      for (n = 0, o = i.length; n < o; n++) r.push(i[n]);
    if (r && 0 < r.length)
      for (n = 0, o = r.length; n < o; n++) {
        if (!(i = r[n]) || !i.getAttribute) {
          t.Hb();
          break
        }
        i.player === b && ((e = i.getAttribute("data-setup")) !== j && videojs(i))
      } else t.qd || t.Hb()
  }, t.Hb = function() {
    setTimeout(t.uc, 1)
  }, "complete" === document.readyState ? t.qd = f : t.N(window, "load", function() {
    t.qd = f
  }), t.Hb(), t.Be = function(e, i) {
    t.Player.prototype[e] = i
  };
  var Ba = this;

  function $(t, e) {
    var i, n = t.split("."),
      o = Ba;
    !(n[0] in o) && o.execScript && o.execScript("var " + n[0]);
    for (; n.length && (i = n.shift());) n.length || e === b ? o = o[i] ? o[i] : o[i] = {} : o[i] = e
  }
  $("videojs", t), $("_V_", t), $("videojs.options", t.options), $("videojs.players", t.Ca), $("videojs.TOUCH_ENABLED", t.Db), $("videojs.cache", t.ua), $("videojs.Component", t.a), t.a.prototype.player = t.a.prototype.k, t.a.prototype.options = t.a.prototype.options, t.a.prototype.init = t.a.prototype.l, t.a.prototype.dispose = t.a.prototype.dispose, t.a.prototype.createEl = t.a.prototype.e, t.a.prototype.contentEl = t.a.prototype.wa, t.a.prototype.el = t.a.prototype.m, t.a.prototype.addChild = t.a.prototype.aa, t.a.prototype.getChild = t.a.prototype.da, t.a.prototype.getChildById = t.a.prototype.Yd, t.a.prototype.children = t.a.prototype.children, t.a.prototype.initChildren = t.a.prototype.Kc, t.a.prototype.removeChild = t.a.prototype.removeChild, t.a.prototype.on = t.a.prototype.b, t.a.prototype.off = t.a.prototype.n, t.a.prototype.one = t.a.prototype.N, t.a.prototype.trigger = t.a.prototype.o, t.a.prototype.triggerReady = t.a.prototype.Va, t.a.prototype.show = t.a.prototype.show, t.a.prototype.hide = t.a.prototype.W, t.a.prototype.width = t.a.prototype.width, t.a.prototype.height = t.a.prototype.height, t.a.prototype.dimensions = t.a.prototype.Qd, t.a.prototype.ready = t.a.prototype.I, t.a.prototype.addClass = t.a.prototype.p, t.a.prototype.removeClass = t.a.prototype.r, t.a.prototype.hasClass = t.a.prototype.Pa, t.a.prototype.buildCSSClass = t.a.prototype.T, t.a.prototype.localize = t.a.prototype.v, t.a.prototype.setInterval = t.a.prototype.setInterval, t.a.prototype.setTimeout = t.a.prototype.setTimeout, $("videojs.EventEmitter", t.z), t.z.prototype.on = t.z.prototype.b, t.z.prototype.addEventListener = t.z.prototype.addEventListener, t.z.prototype.off = t.z.prototype.n, t.z.prototype.removeEventListener = t.z.prototype.removeEventListener, t.z.prototype.one = t.z.prototype.N, t.z.prototype.trigger = t.z.prototype.o, t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent, t.Player.prototype.ended = t.Player.prototype.ended, t.Player.prototype.enterFullWindow = t.Player.prototype.Fc, t.Player.prototype.exitFullWindow = t.Player.prototype.Lb, t.Player.prototype.preload = t.Player.prototype.Ra, t.Player.prototype.remainingTime = t.Player.prototype.remainingTime, t.Player.prototype.supportsFullScreen = t.Player.prototype.Sa, t.Player.prototype.currentType = t.Player.prototype.Nd, t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen, t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen, t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen, t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen, t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen, t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen, t.Player.prototype.textTracks = t.Player.prototype.textTracks, t.Player.prototype.remoteTextTracks = t.Player.prototype.X, t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack, t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ha, t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Da, t.Player.prototype.seekable = t.Player.prototype.seekable, $("videojs.MediaLoader", t.Cd), $("videojs.TextTrackDisplay", t.sa), $("videojs.ControlBar", t.tb), $("videojs.Button", t.w), $("videojs.PlayToggle", t.kc), $("videojs.FullscreenToggle", t.Ya), $("videojs.BigPlayButton", t.rb), $("videojs.LoadingSpinner", t.ic), $("videojs.CurrentTimeDisplay", t.ub), $("videojs.DurationDisplay", t.vb), $("videojs.TimeDivider", t.qc), $("videojs.RemainingTimeDisplay", t.Cb), $("videojs.LiveDisplay", t.hc), $("videojs.ErrorDisplay", t.wb), $("videojs.Slider", t.S), $("videojs.ProgressControl", t.Bb), $("videojs.SeekBar", t.nc), $("videojs.LoadProgressBar", t.yb), $("videojs.PlayProgressBar", t.jc), $("videojs.SeekHandle", t.Za), $("videojs.VolumeControl", t.Fb), $("videojs.VolumeBar", t.Eb), $("videojs.VolumeLevel", t.rc), $("videojs.VolumeMenuButton", t.Ha), $("videojs.VolumeHandle", t.Gb), $("videojs.MuteToggle", t.ra), $("videojs.PosterImage", t.mc), $("videojs.Menu", t.qa), $("videojs.MenuItem", t.M), $("videojs.MenuButton", t.O), $("videojs.PlaybackRateMenuButton", t.lc), $("videojs.ChaptersTrackMenuItem", t.Xa), $("videojs.TextTrackButton", t.Q), $("videojs.TextTrackMenuItem", t.$), $("videojs.OffTextTrackMenuItem", t.zb), $("videojs.CaptionSettingsMenuItem", t.sb), t.O.prototype.createItems = t.O.prototype.Ka, t.Q.prototype.createItems = t.Q.prototype.Ka, t.Wa.prototype.createItems = t.Wa.prototype.Ka, $("videojs.SubtitlesButton", t.$a), $("videojs.CaptionsButton", t.oa), $("videojs.ChaptersButton", t.Wa), $("videojs.MediaTechController", t.j), t.j.withSourceHandlers = t.j.dc, t.j.prototype.featuresVolumeControl = t.j.prototype.qf, t.j.prototype.featuresFullscreenResize = t.j.prototype.mf, t.j.prototype.featuresPlaybackRate = t.j.prototype.nf, t.j.prototype.featuresProgressEvents = t.j.prototype.of, t.j.prototype.featuresTimeupdateEvents = t.j.prototype.pf, t.j.prototype.setPoster = t.j.prototype.bd, t.j.prototype.textTracks = t.j.prototype.textTracks, t.j.prototype.remoteTextTracks = t.j.prototype.X, t.j.prototype.addTextTrack = t.j.prototype.addTextTrack, t.j.prototype.addRemoteTextTrack = t.j.prototype.ha, t.j.prototype.removeRemoteTextTrack = t.j.prototype.Da, $("videojs.Html5", t.f), t.f.Events = t.f.xb, t.f.isSupported = t.f.isSupported, t.f.canPlaySource = t.f.wc, t.f.patchCanPlayType = t.f.Tc, t.f.unpatchCanPlayType = t.f.Ye, t.f.prototype.setCurrentTime = t.f.prototype.Zb, t.f.prototype.setVolume = t.f.prototype.Oe, t.f.prototype.setMuted = t.f.prototype.Ke, t.f.prototype.setPreload = t.f.prototype.Me, t.f.prototype.setAutoplay = t.f.prototype.He, t.f.prototype.setLoop = t.f.prototype.Je, t.f.prototype.enterFullScreen = t.f.prototype.Ec, t.f.prototype.exitFullScreen = t.f.prototype.Ud, t.f.prototype.playbackRate = t.f.prototype.playbackRate, t.f.prototype.setPlaybackRate = t.f.prototype.Le, t.f.selectSourceHandler = t.f.ob, t.f.prototype.setSource = t.f.prototype.ma, t.f.prototype.disposeSourceHandler = t.f.prototype.ia, t.f.prototype.textTracks = t.f.prototype.textTracks, t.f.prototype.remoteTextTracks = t.f.prototype.X, t.f.prototype.addTextTrack = t.f.prototype.addTextTrack, t.f.prototype.addRemoteTextTrack = t.f.prototype.ha, t.f.prototype.removeRemoteTextTrack = t.f.prototype.Da, $("videojs.Flash", t.g), t.g.isSupported = t.g.isSupported, t.g.canPlaySource = t.g.wc, t.g.onReady = t.g.onReady, t.g.embed = t.g.Dc, t.g.version = t.g.version, t.g.prototype.setSource = t.g.prototype.ma, t.g.selectSourceHandler = t.g.ob, t.g.prototype.setSource = t.g.prototype.ma, t.g.prototype.disposeSourceHandler = t.g.prototype.ia, $("videojs.TextTrack", t.t), $("videojs.TextTrackList", t.F), $("videojs.TextTrackCueList", t.U), $("videojs.TextTrackSettings", t.pc), t.t.prototype.id = t.t.prototype.id, t.t.prototype.label = t.t.prototype.label, t.t.prototype.kind = t.t.prototype.Tb, t.t.prototype.mode = t.t.prototype.mode, t.t.prototype.cues = t.t.prototype.Ac, t.t.prototype.activeCues = t.t.prototype.jf, t.t.prototype.addCue = t.t.prototype.sc, t.t.prototype.removeCue = t.t.prototype.Yc, t.F.prototype.getTrackById = t.F.prototype.ae, t.U.prototype.getCueById = t.F.prototype.Zd, $("videojs.CaptionsTrack", t.cf), $("videojs.SubtitlesTrack", t.hf), $("videojs.ChaptersTrack", t.df), $("videojs.autoSetup", t.uc), $("videojs.plugin", t.Be), $("videojs.createTimeRange", t.xa), $("videojs.util", t.Z), t.Z.mergeOptions = t.Z.Aa, t.addLanguage = t.Gd
}(),
function(t) {
  var e = t.vttjs = {},
    i = e.VTTCue,
    n = e.VTTRegion,
    o = t.VTTCue,
    r = t.VTTRegion;
  e.shim = function() {
    e.VTTCue = i, e.VTTRegion = n
  }, e.restore = function() {
    e.VTTCue = o, e.VTTRegion = r
  }
}(this),
function(t, e) {
  function x(t) {
    return "string" == typeof t && (!!n[t.toLowerCase()] && t.toLowerCase())
  }

  function w(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var n in i) t[n] = i[n]
    }
    return t
  }

  function i(t, e, i) {
    var n = this,
      o = /MSIE\s8\.0/.test(navigator.userAgent),
      r = {};
    o ? n = document.createElement("custom") : r.enumerable = !0, n.hasBeenReset = !1;
    var a = "",
      s = !1,
      l = t,
      c = e,
      u = i,
      h = null,
      d = "",
      f = !0,
      p = "auto",
      g = "start",
      v = 50,
      m = "middle",
      y = 50,
      b = "middle";
    return Object.defineProperty(n, "id", w({}, r, {
      get: function() {
        return a
      },
      set: function(t) {
        a = "" + t
      }
    })), Object.defineProperty(n, "pauseOnExit", w({}, r, {
      get: function() {
        return s
      },
      set: function(t) {
        s = !!t
      }
    })), Object.defineProperty(n, "startTime", w({}, r, {
      get: function() {
        return l
      },
      set: function(t) {
        if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
        l = t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "endTime", w({}, r, {
      get: function() {
        return c
      },
      set: function(t) {
        if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
        c = t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "text", w({}, r, {
      get: function() {
        return u
      },
      set: function(t) {
        u = "" + t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "region", w({}, r, {
      get: function() {
        return h
      },
      set: function(t) {
        h = t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "vertical", w({}, r, {
      get: function() {
        return d
      },
      set: function(t) {
        var e, i = "string" == typeof(e = t) && !!k[e.toLowerCase()] && e.toLowerCase();
        if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
        d = i, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "snapToLines", w({}, r, {
      get: function() {
        return f
      },
      set: function(t) {
        f = !!t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "line", w({}, r, {
      get: function() {
        return p
      },
      set: function(t) {
        if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
        p = t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "lineAlign", w({}, r, {
      get: function() {
        return g
      },
      set: function(t) {
        var e = x(t);
        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
        g = e, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "position", w({}, r, {
      get: function() {
        return v
      },
      set: function(t) {
        if (t < 0 || 100 < t) throw new Error("Position must be between 0 and 100.");
        v = t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "positionAlign", w({}, r, {
      get: function() {
        return m
      },
      set: function(t) {
        var e = x(t);
        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
        m = e, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "size", w({}, r, {
      get: function() {
        return y
      },
      set: function(t) {
        if (t < 0 || 100 < t) throw new Error("Size must be between 0 and 100.");
        y = t, this.hasBeenReset = !0
      }
    })), Object.defineProperty(n, "align", w({}, r, {
      get: function() {
        return b
      },
      set: function(t) {
        var e = x(t);
        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
        b = e, this.hasBeenReset = !0
      }
    })), n.displayState = void 0, o ? n : void 0
  }
  var k = {
      "": !0,
      lr: !0,
      rl: !0
    },
    n = {
      start: !0,
      middle: !0,
      end: !0,
      left: !0,
      right: !0
    };
  i.prototype.getCueAsHTML = function() {
    return WebVTT.convertCueToDOMTree(window, this.text)
  }, t.VTTCue = t.VTTCue || i, e.VTTCue = i
}(this, this.vttjs || {}),
function(t, e) {
  function l(t) {
    return "number" == typeof t && 0 <= t && t <= 100
  }

  function i() {
    var e = 100,
      i = 3,
      n = 0,
      o = 100,
      r = 0,
      a = 100,
      s = "";
    Object.defineProperties(this, {
      width: {
        enumerable: !0,
        get: function() {
          return e
        },
        set: function(t) {
          if (!l(t)) throw new Error("Width must be between 0 and 100.");
          e = t
        }
      },
      lines: {
        enumerable: !0,
        get: function() {
          return i
        },
        set: function(t) {
          if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
          i = t
        }
      },
      regionAnchorY: {
        enumerable: !0,
        get: function() {
          return o
        },
        set: function(t) {
          if (!l(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
          o = t
        }
      },
      regionAnchorX: {
        enumerable: !0,
        get: function() {
          return n
        },
        set: function(t) {
          if (!l(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
          n = t
        }
      },
      viewportAnchorY: {
        enumerable: !0,
        get: function() {
          return a
        },
        set: function(t) {
          if (!l(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
          a = t
        }
      },
      viewportAnchorX: {
        enumerable: !0,
        get: function() {
          return r
        },
        set: function(t) {
          if (!l(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
          r = t
        }
      },
      scroll: {
        enumerable: !0,
        get: function() {
          return s
        },
        set: function(t) {
          var e, i = "string" == typeof(e = t) && !!c[e.toLowerCase()] && e.toLowerCase();
          if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
          s = i
        }
      }
    })
  }
  var c = {
    "": !0,
    up: !0
  };
  t.VTTRegion = t.VTTRegion || i, e.VTTRegion = i
}(this, this.vttjs || {}),
function(t) {
  function c(t, e) {
    this.name = "ParsingError", this.code = t.code, this.message = e || t.message
  }

  function g(t) {
    function e(t, e, i, n) {
      return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
    }
    var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
    return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
  }

  function u() {
    this.values = i(null)
  }

  function h(t, e, i, n) {
    var o = n ? t.split(n) : [t];
    for (var r in o)
      if ("string" == typeof o[r]) {
        var a = o[r].split(i);
        if (2 === a.length) e(a[0], a[1])
      }
  }

  function l(e, t, r) {
    function i() {
      var t = g(e);
      if (null === t) throw new c(c.Errors.BadTimeStamp, "Malformed timestamp: " + l);
      return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
    }

    function n() {
      e = e.replace(/^\s+/, "")
    }
    var o, a, s, l = e;
    if (n(), t.startTime = i(), n(), "--\x3e" !== e.substr(0, 3)) throw new c(c.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + l);
    e = e.substr(3), n(), t.endTime = i(), n(), o = e, a = t, s = new u, h(o, function(t, e) {
      switch (t) {
        case "region":
          for (var i = r.length - 1; 0 <= i; i--)
            if (r[i].id === e) {
              s.set(t, r[i].region);
              break
            } break;
        case "vertical":
          s.alt(t, e, ["rl", "lr"]);
          break;
        case "line":
          var n = e.split(","),
            o = n[0];
          s.integer(t, o), s.percent(t, o) && s.set("snapToLines", !1), s.alt(t, o, ["auto"]), 2 === n.length && s.alt("lineAlign", n[1], ["start", "middle", "end"]);
          break;
        case "position":
          n = e.split(","), s.percent(t, n[0]), 2 === n.length && s.alt("positionAlign", n[1], ["start", "middle", "end"]);
          break;
        case "size":
          s.percent(t, e);
          break;
        case "align":
          s.alt(t, e, ["start", "middle", "end", "left", "right"])
      }
    }, /:/, /\s/), a.region = s.get("region", null), a.vertical = s.get("vertical", ""), a.line = s.get("line", "auto"), a.lineAlign = s.get("lineAlign", "start"), a.snapToLines = s.get("snapToLines", !0), a.size = s.get("size", 100), a.align = s.get("align", "middle"), a.position = s.get("position", {
      start: 0,
      left: 0,
      middle: 50,
      end: 100,
      right: 100
    }, a.align), a.positionAlign = s.get("positionAlign", {
      start: "start",
      left: "start",
      middle: "middle",
      end: "end",
      right: "end"
    }, a.align)
  }

  function d(r, i) {
    function t() {
      if (!i) return null;
      var t, e = i.match(/^([^<]*)(<[^>]+>?)?/);
      return t = e[1] ? e[1] : e[2], i = i.substr(t.length), t
    }

    function e(t) {
      return y[t]
    }

    function n(t) {
      for (; d = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(d[0], e);
      return t
    }

    function o(t, e) {
      var i = b[t];
      if (!i) return null;
      var n = r.document.createElement(i);
      n.localName = i;
      var o = x[t];
      return o && e && (n[o] = e.trim()), n
    }
    for (var a, s = r.document.createElement("div"), l = s, c = []; null !== (a = t());)
      if ("<" !== a[0]) l.appendChild(r.document.createTextNode(n(a)));
      else {
        if ("/" === a[1]) {
          c.length && c[c.length - 1] === a.substr(2).replace(">", "") && (c.pop(), l = l.parentNode);
          continue
        }
        var u, h = g(a.substr(1, a.length - 2));
        if (h) {
          u = r.document.createProcessingInstruction("timestamp", h), l.appendChild(u);
          continue
        }
        var d = a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
        if (!d) continue;
        if (!(u = o(d[1], d[3]))) continue;
        if (f = l, w[(p = u).localName] && w[p.localName] !== f.localName) continue;
        d[2] && (u.className = d[2].substr(1).replace(".", " ")), c.push(d[1]), l.appendChild(u), l = u
      } var f, p;
    return s
  }

  function f() {}

  function p(t, e, i) {
    var n = /MSIE\s8\.0/.test(navigator.userAgent),
      o = "rgba(255, 255, 255, 1)",
      r = "rgba(0, 0, 0, 0.8)";
    n && (o = "rgb(255, 255, 255)", r = "rgb(0, 0, 0)"), f.call(this), this.cue = e, this.cueDiv = d(t, e.text);
    var a = {
      color: o,
      backgroundColor: r,
      position: "relative",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "inline"
    };
    n || (a.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", a.unicodeBidi = "plaintext"), this.applyStyles(a, this.cueDiv), this.div = t.document.createElement("div"), a = {
      textAlign: "middle" === e.align ? "center" : e.align,
      font: i.font,
      whiteSpace: "pre-line",
      position: "absolute"
    }, n || (a.direction = function(t) {
      function o(t, e) {
        for (var i = e.childNodes.length - 1; 0 <= i; i--) t.push(e.childNodes[i])
      }

      function r(t) {
        if (!t || !t.length) return null;
        var e = t.pop(),
          i = e.textContent || e.innerText;
        if (i) {
          var n = i.match(/^.*(\n|\r)/);
          return n ? n[t.length = 0] : i
        }
        return "ruby" === e.tagName ? r(t) : e.childNodes ? (o(t, e), r(t)) : void 0
      }
      var e, i = [],
        n = "";
      if (!t || !t.childNodes) return "ltr";
      for (o(i, t); n = r(i);)
        for (var a = 0; a < n.length; a++) {
          e = n.charCodeAt(a);
          for (var s = 0; s < k.length; s++)
            if (k[s] === e) return "rtl"
        }
      return "ltr"
    }(this.cueDiv), a.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(a), this.div.appendChild(this.cueDiv);
    var s = 0;
    switch (e.positionAlign) {
      case "start":
        s = e.position;
        break;
      case "middle":
        s = e.position - e.size / 2;
        break;
      case "end":
        s = e.position - e.size
    }
    this.applyStyles("" === e.vertical ? {
      left: this.formatStyle(s, "%"),
      width: this.formatStyle(e.size, "%")
    } : {
      top: this.formatStyle(s, "%"),
      height: this.formatStyle(e.size, "%")
    }), this.move = function(t) {
      this.applyStyles({
        top: this.formatStyle(t.top, "px"),
        bottom: this.formatStyle(t.bottom, "px"),
        left: this.formatStyle(t.left, "px"),
        right: this.formatStyle(t.right, "px"),
        height: this.formatStyle(t.height, "px"),
        width: this.formatStyle(t.width, "px")
      })
    }
  }

  function v(t) {
    var e, i, n, o, r = /MSIE\s8\.0/.test(navigator.userAgent);
    if (t.div) {
      i = t.div.offsetHeight, n = t.div.offsetWidth, o = t.div.offsetTop;
      var a = (a = t.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
      t = t.div.getBoundingClientRect(), e = a ? Math.max(a[0] && a[0].height || 0, t.height / a.length) : 0
    }
    this.left = t.left, this.right = t.right, this.top = t.top || o, this.height = t.height || i, this.bottom = t.bottom || o + (t.height || i), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight, r && !this.lineHeight && (this.lineHeight = 13)
  }

  function m(t, e, s, l) {
    var i = new v(e),
      n = e.cue,
      o = function(t) {
        if ("number" == typeof t.line && (t.snapToLines || 0 <= t.line && t.line <= 100)) return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
        for (var e = t.track, i = e.textTrackList, n = 0, o = 0; o < i.length && i[o] !== e; o++) "showing" === i[o].mode && n++;
        return -1 * ++n
      }(n),
      r = [];
    if (n.snapToLines) {
      var a;
      switch (n.vertical) {
        case "":
          r = ["+y", "-y"], a = "height";
          break;
        case "rl":
          r = ["+x", "-x"], a = "width";
          break;
        case "lr":
          r = ["-x", "+x"], a = "width"
      }
      var c = i.lineHeight,
        u = c * Math.round(o),
        h = s[a] + c,
        d = r[0];
      Math.abs(u) > h && (u = u < 0 ? -1 : 1, u *= Math.ceil(h / c) * c), o < 0 && (u += "" === n.vertical ? s.height : s.width, r = r.reverse()), i.move(d, u)
    } else {
      var f = i.lineHeight / s.height * 100;
      switch (n.lineAlign) {
        case "middle":
          o -= f / 2;
          break;
        case "end":
          o -= f
      }
      switch (n.vertical) {
        case "":
          e.applyStyles({
            top: e.formatStyle(o, "%")
          });
          break;
        case "rl":
          e.applyStyles({
            left: e.formatStyle(o, "%")
          });
          break;
        case "lr":
          e.applyStyles({
            right: e.formatStyle(o, "%")
          })
      }
      r = ["+y", "-x", "+x", "-y"], i = new v(e)
    }
    var p = function(t, e) {
      for (var i, n = new v(t), o = 1, r = 0; r < e.length; r++) {
        for (; t.overlapsOppositeAxis(s, e[r]) || t.within(s) && t.overlapsAny(l);) t.move(e[r]);
        if (t.within(s)) return t;
        var a = t.intersectPercentage(s);
        a < o && (i = new v(t), o = a), t = new v(n)
      }
      return i || n
    }(i, r);
    e.move(p.toCSSCompatValues(s))
  }

  function e() {}
  var i = Object.create || function() {
    function e() {}
    return function(t) {
      if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
      return e.prototype = t, new e
    }
  }();
  ((c.prototype = i(Error.prototype)).constructor = c).Errors = {
    BadSignature: {
      code: 0,
      message: "Malformed WebVTT signature."
    },
    BadTimeStamp: {
      code: 1,
      message: "Malformed time stamp."
    }
  }, u.prototype = {
    set: function(t, e) {
      this.get(t) || "" === e || (this.values[t] = e)
    },
    get: function(t, e, i) {
      return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
    },
    has: function(t) {
      return t in this.values
    },
    alt: function(t, e, i) {
      for (var n = 0; n < i.length; ++n)
        if (e === i[n]) {
          this.set(t, e);
          break
        }
    },
    integer: function(t, e) {
      /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
    },
    percent: function(t, e) {
      return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (0 <= (e = parseFloat(e)) && e <= 100)) && (this.set(t, e), !0)
    }
  };
  var y = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&lrm;": "‎",
      "&rlm;": "‏",
      "&nbsp;": " "
    },
    b = {
      c: "span",
      i: "i",
      b: "b",
      u: "u",
      ruby: "ruby",
      rt: "rt",
      v: "span",
      lang: "span"
    },
    x = {
      v: "title",
      lang: "lang"
    },
    w = {
      rt: "ruby"
    },
    k = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
  f.prototype.applyStyles = function(t, e) {
    for (var i in e = e || this.div, t) t.hasOwnProperty(i) && (e.style[i] = t[i])
  }, f.prototype.formatStyle = function(t, e) {
    return 0 === t ? 0 : t + e
  }, (p.prototype = i(f.prototype)).constructor = p, v.prototype.move = function(t, e) {
    switch (e = void 0 !== e ? e : this.lineHeight, t) {
      case "+x":
        this.left += e, this.right += e;
        break;
      case "-x":
        this.left -= e, this.right -= e;
        break;
      case "+y":
        this.top += e, this.bottom += e;
        break;
      case "-y":
        this.top -= e, this.bottom -= e
    }
  }, v.prototype.overlaps = function(t) {
    return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
  }, v.prototype.overlapsAny = function(t) {
    for (var e = 0; e < t.length; e++)
      if (this.overlaps(t[e])) return !0;
    return !1
  }, v.prototype.within = function(t) {
    return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
  }, v.prototype.overlapsOppositeAxis = function(t, e) {
    switch (e) {
      case "+x":
        return this.left < t.left;
      case "-x":
        return this.right > t.right;
      case "+y":
        return this.top < t.top;
      case "-y":
        return this.bottom > t.bottom
    }
  }, v.prototype.intersectPercentage = function(t) {
    return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
  }, v.prototype.toCSSCompatValues = function(t) {
    return {
      top: this.top - t.top,
      bottom: t.bottom - this.bottom,
      left: this.left - t.left,
      right: t.right - this.right,
      height: this.height,
      width: this.width
    }
  }, v.getSimpleBoxPosition = function(t) {
    var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
      i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
      n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
    return {
      left: (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).left,
      right: t.right,
      top: t.top || n,
      height: t.height || e,
      bottom: t.bottom || n + (t.height || e),
      width: t.width || i
    }
  }, e.StringDecoder = function() {
    return {
      decode: function(t) {
        if (!t) return "";
        if ("string" != typeof t) throw new Error("Error - expected string data.");
        return decodeURIComponent(encodeURIComponent(t))
      }
    }
  }, e.convertCueToDOMTree = function(t, e) {
    return t && e ? d(t, e) : null
  };
  e.processCues = function(n, o, t) {
    if (!n || !o || !t) return null;
    for (; t.firstChild;) t.removeChild(t.firstChild);
    var r = n.document.createElement("div");
    if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = "1.5%", t.appendChild(r), function(t) {
        for (var e = 0; e < t.length; e++)
          if (t[e].hasBeenReset || !t[e].displayState) return !0;
        return !1
      }(o)) {
      var a = [],
        s = v.getSimpleBoxPosition(r),
        l = {
          font: Math.round(.05 * s.height * 100) / 100 + "px sans-serif"
        };
      ! function() {
        for (var t, e, i = 0; i < o.length; i++) e = o[i], t = new p(n, e, l), r.appendChild(t.div), m(0, t, s, a), e.displayState = t.div, a.push(v.getSimpleBoxPosition(t))
      }()
    } else
      for (var e = 0; e < o.length; e++) r.appendChild(o[e].displayState)
  }, (e.Parser = function(t, e, i) {
    i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
  }).prototype = {
    reportOrThrowError: function(t) {
      if (!(t instanceof c)) throw t;
      this.onparsingerror && this.onparsingerror(t)
    },
    parse: function(t) {
      function e() {
        for (var t = n.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
        var i = t.substr(0, e);
        return "\r" === t[e] && ++e, "\n" === t[e] && ++e, n.buffer = t.substr(e), i
      }

      function i(t) {
        h(t, function(t, e) {
          switch (t) {
            case "Region":
              ! function(t) {
                var o = new u;
                if (h(t, function(t, e) {
                    switch (t) {
                      case "id":
                        o.set(t, e);
                        break;
                      case "width":
                        o.percent(t, e);
                        break;
                      case "lines":
                        o.integer(t, e);
                        break;
                      case "regionanchor":
                      case "viewportanchor":
                        var i = e.split(",");
                        if (2 !== i.length) break;
                        var n = new u;
                        if (n.percent("x", i[0]), n.percent("y", i[1]), !n.has("x") || !n.has("y")) break;
                        o.set(t + "X", n.get("x")), o.set(t + "Y", n.get("y"));
                        break;
                      case "scroll":
                        o.alt(t, e, ["up"])
                    }
                  }, /=/, /\s/), o.has("id")) {
                  var e = new(n.vttjs.VTTRegion || n.window.VTTRegion);
                  e.width = o.get("width", 100), e.lines = o.get("lines", 3), e.regionAnchorX = o.get("regionanchorX", 0), e.regionAnchorY = o.get("regionanchorY", 100), e.viewportAnchorX = o.get("viewportanchorX", 0), e.viewportAnchorY = o.get("viewportanchorY", 100), e.scroll = o.get("scroll", ""), n.onregion && n.onregion(e), n.regionList.push({
                    id: o.get("id"),
                    region: e
                  })
                }
              }(e)
          }
        }, /:/)
      }
      var n = this;
      t && (n.buffer += n.decoder.decode(t, {
        stream: !0
      }));
      try {
        var o;
        if ("INITIAL" === n.state) {
          if (!/\r\n|\n/.test(n.buffer)) return this;
          var r = (o = e()).match(/^WEBVTT([ \t].*)?$/);
          if (!r || !r[0]) throw new c(c.Errors.BadSignature);
          n.state = "HEADER"
        }
        for (var a = !1; n.buffer;) {
          if (!/\r\n|\n/.test(n.buffer)) return this;
          switch (a ? a = !1 : o = e(), n.state) {
            case "HEADER":
              /:/.test(o) ? i(o) : o || (n.state = "ID");
              continue;
            case "NOTE":
              o || (n.state = "ID");
              continue;
            case "ID":
              if (/^NOTE($|[ \t])/.test(o)) {
                n.state = "NOTE";
                break
              }
              if (!o) continue;
              if (n.cue = new(n.vttjs.VTTCue || n.window.VTTCue)(0, 0, ""), n.state = "CUE", -1 === o.indexOf("--\x3e")) {
                n.cue.id = o;
                continue
              }
            case "CUE":
              try {
                l(o, n.cue, n.regionList)
              } catch (t) {
                n.reportOrThrowError(t), n.cue = null, n.state = "BADCUE";
                continue
              }
              n.state = "CUETEXT";
              continue;
            case "CUETEXT":
              var s = -1 !== o.indexOf("--\x3e");
              if (!o || s && (a = !0)) {
                n.oncue && n.oncue(n.cue), n.cue = null, n.state = "ID";
                continue
              }
              n.cue.text && (n.cue.text += "\n"), n.cue.text += o;
              continue;
            case "BADCUE":
              o || (n.state = "ID");
              continue
          }
        }
      } catch (t) {
        n.reportOrThrowError(t), "CUETEXT" === n.state && n.cue && n.oncue && n.oncue(n.cue), n.cue = null, n.state = "INITIAL" === n.state ? "BADWEBVTT" : "BADCUE"
      }
      return this
    },
    flush: function() {
      var e = this;
      try {
        if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new c(c.Errors.BadSignature)
      } catch (t) {
        e.reportOrThrowError(t)
      }
      return e.onflush && e.onflush(), this
    }
  }, t.WebVTT = e
}(this, this.vttjs),
function(a, u) {
  var h = {
      catchMethods: {
        methodreturn: [],
        count: 0
      },
      init: function(t) {
        var e, i, n;
        console.log(t), t.originalEvent.origin.match(/vimeo/gi) && "data" in t.originalEvent && ((n = "string" === a.type(t.originalEvent.data) ? a.parseJSON(t.originalEvent.data) : t.originalEvent.data) && ((e = this.setPlayerID(n)).length && (i = this.setVimeoAPIurl(e), n.hasOwnProperty("event") && this.handleEvent(n, e, i), n.hasOwnProperty("method") && this.handleMethod(n, e, i))))
      },
      setPlayerID: function(t) {
        return a("iframe[src*=" + t.player_id + "]")
      },
      setVimeoAPIurl: function(t) {
        return "http" !== t.attr("src").substr(0, 4) ? "https:" + t.attr("src").split("?")[0] : t.attr("src").split("?")[0]
      },
      handleMethod: function(t) {
        this.catchMethods.methodreturn.push(t.value)
      },
      handleEvent: function(t, e, i) {
        switch (t.event.toLowerCase()) {
          case "ready":
            for (var n in a._data(e[0], "events")) n.match(/loadProgress|playProgress|play|pause|finish|seek|cuechange/) && e[0].contentWindow.postMessage(JSON.stringify({
              method: "addEventListener",
              value: n
            }), i);
            if (e.data("vimeoAPICall")) {
              for (var o = e.data("vimeoAPICall"), r = 0; r < o.length; r++) e[0].contentWindow.postMessage(JSON.stringify(o[r].message), o[r].api);
              e.removeData("vimeoAPICall")
            }
            e.data("vimeoReady", !0), e.triggerHandler("ready");
            break;
          case "seek":
            e.triggerHandler("seek", [t.data]);
            break;
          case "loadprogress":
            e.triggerHandler("loadProgress", [t.data]);
            break;
          case "playprogress":
            e.triggerHandler("playProgress", [t.data]);
            break;
          case "pause":
            e.triggerHandler("pause");
            break;
          case "finish":
            e.triggerHandler("finish");
            break;
          case "play":
            e.triggerHandler("play");
            break;
          case "cuechange":
            e.triggerHandler("cuechange")
        }
      }
    },
    t = a.fn.vimeoLoad = function() {
      var t = a(this).attr("src"),
        e = !1;
      if ("https:" !== t.substr(0, 6) && (t = "http" === t.substr(0, 4) ? "https" + t.substr(4) : "https:" + t, e = !0), null === t.match(/player_id/g)) {
        e = !0;
        var i = -1 === t.indexOf("?") ? "?" : "&";
        t = t + i + a.param({
          api: 1,
          player_id: "vvvvimeoVideo-" + Math.floor(1e7 * Math.random() + 1).toString()
        })
      }
      return e && a(this).attr("src", t), this
    };
  jQuery(document).ready(function() {
    a("iframe[src*='vimeo.com']").each(function() {
      t.call(this)
    })
  }), a(["loadProgress", "playProgress", "play", "pause", "finish", "seek", "cuechange"]).each(function(t, n) {
    jQuery.event.special[n] = {
      setup: function() {
        var t = a(this).attr("src");
        if (a(this).is("iframe") && t.match(/vimeo/gi)) {
          var e = a(this);
          if (void 0 !== e.data("vimeoReady")) e[0].contentWindow.postMessage(JSON.stringify({
            method: "addEventListener",
            value: n
          }), h.setVimeoAPIurl(a(this)));
          else {
            var i = void 0 !== e.data("vimeoAPICall") ? e.data("vimeoAPICall") : [];
            i.push({
              message: n,
              api: h.setVimeoAPIurl(e)
            }), e.data("vimeoAPICall", i)
          }
        }
      }
    }
  }), a(u).on("message", function(t) {
    h.init(t)
  }), a.vimeo = function(t, e, i) {
    var n, o, r, a, s = {},
      l = h.catchMethods.methodreturn.length;
    if ("string" == typeof e && (s.method = e), void 0 !== typeof i && "function" != typeof i && (s.value = i), t.is("iframe") && s.hasOwnProperty("method"))
      if (t.data("vimeoReady")) t[0].contentWindow.postMessage(JSON.stringify(s), h.setVimeoAPIurl(t));
      else {
        var c = t.data("vimeoAPICall") ? t.data("vimeoAPICall") : [];
        c.push({
          message: s,
          api: h.setVimeoAPIurl(t)
        }), t.data("vimeoAPICall", c)
      } return "get" !== e.toString().substr(0, 3) && "paused" !== e.toString() || "function" != typeof i || (n = l, o = i, r = h.catchMethods.count, a = u.setInterval(function() {
      h.catchMethods.methodreturn.length != n && (u.clearInterval(a), o(h.catchMethods.methodreturn[r]))
    }, 10), h.catchMethods.count++), t
  }, a.fn.vimeo = function(t, e) {
    return a.vimeo(this, t, e)
  }
}(jQuery, window),
function(t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
}(function() {
  return function r(a, s, l) {
    function c(e, t) {
      if (!s[e]) {
        if (!a[e]) {
          var i = "function" == typeof require && require;
          if (!t && i) return i(e, !0);
          if (u) return u(e, !0);
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        var o = s[e] = {
          exports: {}
        };
        a[e][0].call(o.exports, function(t) {
          return c(a[e][1][t] || t)
        }, o, o.exports, r, a, s, l)
      }
      return s[e].exports
    }
    for (var u = "function" == typeof require && require, t = 0; t < l.length; t++) c(l[t]);
    return c
  }({
    1: [function(t, e, i) {}, {}],
    2: [function(t, e, i) {
      function n(t) {
        if (t) {
          var e = [0, 0, 0],
            i = 1,
            n = t.match(/^#([a-fA-F0-9]{3})$/i);
          if (n)
            for (n = n[1], o = 0; o < e.length; o++) e[o] = parseInt(n[o] + n[o], 16);
          else if (n = t.match(/^#([a-fA-F0-9]{6})$/i))
            for (n = n[1], o = 0; o < e.length; o++) e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16);
          else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (o = 0; o < e.length; o++) e[o] = parseInt(n[o + 1]);
            i = parseFloat(n[4])
          } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(n[o + 1]));
            i = parseFloat(n[4])
          } else if (n = t.match(/(\w+)/)) {
            if ("transparent" == n[1]) return [0, 0, 0, 0];
            if (!(e = h[n[1]])) return
          }
          for (var o = 0; o < e.length; o++) e[o] = c(e[o], 0, 255);
          return i = i || 0 == i ? c(i, 0, 1) : 1, e[3] = i, e
        }
      }

      function o(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
          if (e) {
            var i = parseFloat(e[4]);
            return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(i) ? 1 : i, 0, 1)]
          }
        }
      }

      function r(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
          if (e) {
            var i = parseFloat(e[4]);
            return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(i) ? 1 : i, 0, 1)]
          }
        }
      }

      function a(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
      }

      function s(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
      }

      function l(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
      }

      function c(t, e, i) {
        return Math.min(Math.max(e, t), i)
      }

      function u(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
      }
      var h = t(6);
      e.exports = {
        getRgba: n,
        getHsla: o,
        getRgb: function(t) {
          var e = n(t);
          return e && e.slice(0, 3)
        },
        getHsl: function(t) {
          var e = o(t);
          return e && e.slice(0, 3)
        },
        getHwb: r,
        getAlpha: function(t) {
          var e = n(t);
          return e ? e[3] : (e = o(t)) ? e[3] : (e = r(t)) ? e[3] : void 0
        },
        hexString: function(t) {
          return "#" + u(t[0]) + u(t[1]) + u(t[2])
        },
        rgbString: function(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? a(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        },
        rgbaString: a,
        percentString: function(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? s(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
        },
        percentaString: s,
        hslString: function(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? l(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        },
        hslaString: l,
        hwbString: function(t, e) {
          return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        },
        keyword: function(t) {
          return d[t.slice(0, 3)]
        }
      };
      var d = {};
      for (var f in h) d[h[f]] = f
    }, {
      6: 6
    }],
    3: [function(t, e, i) {
      var u = t(5),
        n = t(2),
        a = function(t) {
          return t instanceof a ? t : this instanceof a ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
          }, void("string" == typeof t ? (e = n.getRgba(t)) ? this.setValues("rgb", e) : (e = n.getHsla(t)) ? this.setValues("hsl", e) : (e = n.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new a(t);
          var e
        };
      a.prototype = {
        isValid: function() {
          return this.valid
        },
        rgb: function() {
          return this.setSpace("rgb", arguments)
        },
        hsl: function() {
          return this.setSpace("hsl", arguments)
        },
        hsv: function() {
          return this.setSpace("hsv", arguments)
        },
        hwb: function() {
          return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
          return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
          return this.values.rgb
        },
        hslArray: function() {
          return this.values.hsl
        },
        hsvArray: function() {
          return this.values.hsv
        },
        hwbArray: function() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
          return this.values.cmyk
        },
        rgbaArray: function() {
          var t = this.values;
          return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
          var t = this.values;
          return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
          return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
          return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
          return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
          return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
          return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
          return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
          return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
          return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
          return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
          return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
          return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
          return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
          return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
          return n.hexString(this.values.rgb)
        },
        rgbString: function() {
          return n.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
          return n.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
          return n.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
          return n.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
          return n.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
          return n.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
          return n.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
          for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
            var n = t[i] / 255;
            e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
          }
          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
          var e = this.luminosity(),
            i = t.luminosity();
          return i < e ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
        },
        level: function(t) {
          var e = this.contrast(t);
          return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
        },
        dark: function() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
          return !this.dark()
        },
        negate: function() {
          for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
          return this.setValues("rgb", t), this
        },
        lighten: function(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
          var t = this.values.rgb,
            e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
          var e = this.values.hsl,
            i = (e[0] + t) % 360;
          return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
          var i = this,
            n = t,
            o = void 0 === e ? .5 : e,
            r = 2 * o - 1,
            a = i.alpha() - n.alpha(),
            s = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
            l = 1 - s;
          return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * o + n.alpha() * (1 - o))
        },
        toJSON: function() {
          return this.rgb()
        },
        clone: function() {
          var t, e, i = new a,
            n = this.values,
            o = i.values;
          for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? o[r] = t.slice(0) : "[object Number]" === e ? o[r] = t : console.error("unexpected color value:", t));
          return i
        }
      }, a.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, a.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, a.prototype.getValues = function(t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
        return 1 !== e.alpha && (i.a = e.alpha), i
      }, a.prototype.setValues = function(t, e) {
        var i, n, o = this.values,
          r = this.spaces,
          a = this.maxes,
          s = 1;
        if (this.valid = !0, "alpha" === t) s = e;
        else if (e.length) o[t] = e.slice(0, t.length), s = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
          for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
          s = e.a
        } else if (void 0 !== e[r[t][0]]) {
          var l = r[t];
          for (i = 0; i < t.length; i++) o[t][i] = e[l[i]];
          s = e.alpha
        }
        if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t) return !1;
        for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(a[t][i], o[t][i])), o[t][i] = Math.round(n);
        for (var c in r) c !== t && (o[c] = u[t][c](o[t]));
        return !0
      }, a.prototype.setSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
      }, a.prototype.setChannel = function(t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
      }, "undefined" != typeof window && (window.Color = a), e.exports = a
    }, {
      2: 2,
      5: 5
    }],
    4: [function(t, e, i) {
      function o(t) {
        var e, i, n = t[0] / 255,
          o = t[1] / 255,
          r = t[2] / 255,
          a = Math.min(n, o, r),
          s = Math.max(n, o, r),
          l = s - a;
        return s == a ? e = 0 : n == s ? e = (o - r) / l : o == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (a + s) / 2, [e, 100 * (s == a ? 0 : i <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * i]
      }

      function n(t) {
        var e, i, n = t[0],
          o = t[1],
          r = t[2],
          a = Math.min(n, o, r),
          s = Math.max(n, o, r),
          l = s - a;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? e = 0 : n == s ? e = (o - r) / l : o == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
      }

      function a(t) {
        var e = t[0],
          i = t[1],
          n = t[2];
        return [o(t)[0], 1 / 255 * Math.min(e, Math.min(i, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
      }

      function s(t) {
        var e, i = t[0] / 255,
          n = t[1] / 255,
          o = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - o))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e]
      }

      function l(t) {
        return C[JSON.stringify(t)]
      }

      function c(t) {
        var e = t[0] / 255,
          i = t[1] / 255,
          n = t[2] / 255;
        return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
      }

      function u(t) {
        var e = c(t),
          i = e[0],
          n = e[1],
          o = e[2];
        return n /= 100, o /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (o = .008856 < o ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
      }

      function h(t) {
        var e, i, n, o, r, a = t[0] / 360,
          s = t[1] / 100,
          l = t[2] / 100;
        if (0 == s) return [r = 255 * l, r, r];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
        for (var c = 0; c < 3; c++)(n = a + 1 / 3 * -(c - 1)) < 0 && n++, 1 < n && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, o[c] = 255 * r;
        return o
      }

      function d(t) {
        var e = t[0] / 60,
          i = t[1] / 100,
          n = t[2] / 100,
          o = Math.floor(e) % 6,
          r = e - Math.floor(e),
          a = 255 * n * (1 - i),
          s = 255 * n * (1 - i * r),
          l = 255 * n * (1 - i * (1 - r));
        n *= 255;
        switch (o) {
          case 0:
            return [n, l, a];
          case 1:
            return [s, n, a];
          case 2:
            return [a, n, l];
          case 3:
            return [a, s, n];
          case 4:
            return [l, a, n];
          case 5:
            return [n, a, s]
        }
      }

      function f(t) {
        var e, i, n, o, a = t[0] / 360,
          s = t[1] / 100,
          l = t[2] / 100,
          c = s + l;
        switch (1 < c && (s /= c, l /= c), n = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (n = 1 - n), o = s + n * ((i = 1 - l) - s), e) {
          default:
          case 6:
          case 0:
            r = i, g = o, b = s;
            break;
          case 1:
            r = o, g = i, b = s;
            break;
          case 2:
            r = s, g = i, b = o;
            break;
          case 3:
            r = s, g = o, b = i;
            break;
          case 4:
            r = o, g = s, b = i;
            break;
          case 5:
            r = i, g = s, b = o
        }
        return [255 * r, 255 * g, 255 * b]
      }

      function p(t) {
        var e = t[0] / 100,
          i = t[1] / 100,
          n = t[2] / 100,
          o = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, i * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o))]
      }

      function v(t) {
        var e, i, n, o = t[0] / 100,
          r = t[1] / 100,
          a = t[2] / 100;
        return i = -.9689 * o + 1.8758 * r + .0415 * a, n = .0557 * o + -.204 * r + 1.057 * a, e = .0031308 < (e = 3.2406 * o + -1.5372 * r + -.4986 * a) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
      }

      function m(t) {
        var e = t[0],
          i = t[1],
          n = t[2];
        return i /= 100, n /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
      }

      function y(t) {
        var e, i, n, o, r = t[0],
          a = t[1],
          s = t[2];
        return o = r <= 8 ? (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3)]
      }

      function x(t) {
        var e, i = t[0],
          n = t[1],
          o = t[2];
        return (e = 360 * Math.atan2(o, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + o * o), e]
      }

      function w(t) {
        return v(y(t))
      }

      function k(t) {
        var e, i = t[0],
          n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
      }

      function S(t) {
        return T[t]
      }
      e.exports = {
        rgb2hsl: o,
        rgb2hsv: n,
        rgb2hwb: a,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: c,
        rgb2lab: u,
        rgb2lch: function(t) {
          return x(u(t))
        },
        hsl2rgb: h,
        hsl2hsv: function(t) {
          var e = t[0],
            i = t[1] / 100,
            n = t[2] / 100;
          return 0 === n ? [0, 0, 0] : [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
        },
        hsl2hwb: function(t) {
          return a(h(t))
        },
        hsl2cmyk: function(t) {
          return s(h(t))
        },
        hsl2keyword: function(t) {
          return l(h(t))
        },
        hsv2rgb: d,
        hsv2hsl: function(t) {
          var e, i, n = t[0],
            o = t[1] / 100,
            r = t[2] / 100;
          return e = o * r, [n, 100 * (e = (e /= (i = (2 - o) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
        },
        hsv2hwb: function(t) {
          return a(d(t))
        },
        hsv2cmyk: function(t) {
          return s(d(t))
        },
        hsv2keyword: function(t) {
          return l(d(t))
        },
        hwb2rgb: f,
        hwb2hsl: function(t) {
          return o(f(t))
        },
        hwb2hsv: function(t) {
          return n(f(t))
        },
        hwb2cmyk: function(t) {
          return s(f(t))
        },
        hwb2keyword: function(t) {
          return l(f(t))
        },
        cmyk2rgb: p,
        cmyk2hsl: function(t) {
          return o(p(t))
        },
        cmyk2hsv: function(t) {
          return n(p(t))
        },
        cmyk2hwb: function(t) {
          return a(p(t))
        },
        cmyk2keyword: function(t) {
          return l(p(t))
        },
        keyword2rgb: S,
        keyword2hsl: function(t) {
          return o(S(t))
        },
        keyword2hsv: function(t) {
          return n(S(t))
        },
        keyword2hwb: function(t) {
          return a(S(t))
        },
        keyword2cmyk: function(t) {
          return s(S(t))
        },
        keyword2lab: function(t) {
          return u(S(t))
        },
        keyword2xyz: function(t) {
          return c(S(t))
        },
        xyz2rgb: v,
        xyz2lab: m,
        xyz2lch: function(t) {
          return x(m(t))
        },
        lab2xyz: y,
        lab2rgb: w,
        lab2lch: x,
        lch2lab: k,
        lch2xyz: function(t) {
          return y(k(t))
        },
        lch2rgb: function(t) {
          return w(k(t))
        }
      };
      var T = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50]
        },
        C = {};
      for (var _ in T) C[JSON.stringify(T[_])] = _
    }, {}],
    5: [function(t, e, i) {
      var o = t(4),
        r = function() {
          return new c
        };
      for (var n in o) {
        r[n + "Raw"] = function(e) {
          return function(t) {
            return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), o[e](t)
          }
        }(n);
        var a = /(\w+)2(\w+)/.exec(n),
          s = a[1],
          l = a[2];
        (r[s] = r[s] || {})[l] = r[n] = function(n) {
          return function(t) {
            "number" == typeof t && (t = Array.prototype.slice.call(arguments));
            var e = o[n](t);
            if ("string" == typeof e || void 0 === e) return e;
            for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
            return e
          }
        }(n)
      }
      var c = function() {
        this.convs = {}
      };
      c.prototype.routeSpace = function(t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
      }, c.prototype.setValues = function(t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
      }, c.prototype.getValues = function(t) {
        var e = this.convs[t];
        if (!e) {
          var i = this.space,
            n = this.convs[i];
          e = r[i][t](n), this.convs[t] = e
        }
        return e
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
        c.prototype[e] = function(t) {
          return this.routeSpace(e, arguments)
        }
      }), e.exports = r
    }, {
      4: 4
    }],
    6: [function(t, e, i) {
      "use strict";
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      }
    }, {}],
    7: [function(t, e, i) {
      var n = t(29)();
      n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.platform = t(48), t(31)(n), t(22)(n), t(23)(n), t(24)(n), t(30)(n), t(33)(n), t(32)(n), t(35)(n), t(54)(n), t(52)(n), t(53)(n), t(55)(n), t(56)(n), t(57)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
      var o = [];
      o.push(t(49)(n), t(50)(n), t(51)(n)), n.plugins.register(o), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      35: 35,
      40: 40,
      45: 45,
      48: 48,
      49: 49,
      50: 50,
      51: 51,
      52: 52,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      8: 8,
      9: 9
    }],
    8: [function(t, e, i) {
      "use strict";
      e.exports = function(i) {
        i.Bar = function(t, e) {
          return e.type = "bar", new i(t, e)
        }
      }
    }, {}],
    9: [function(t, e, i) {
      "use strict";
      e.exports = function(i) {
        i.Bubble = function(t, e) {
          return e.type = "bubble", new i(t, e)
        }
      }
    }, {}],
    10: [function(t, e, i) {
      "use strict";
      e.exports = function(i) {
        i.Doughnut = function(t, e) {
          return e.type = "doughnut", new i(t, e)
        }
      }
    }, {}],
    11: [function(t, e, i) {
      "use strict";
      e.exports = function(i) {
        i.Line = function(t, e) {
          return e.type = "line", new i(t, e)
        }
      }
    }, {}],
    12: [function(t, e, i) {
      "use strict";
      e.exports = function(i) {
        i.PolarArea = function(t, e) {
          return e.type = "polarArea", new i(t, e)
        }
      }
    }, {}],
    13: [function(t, e, i) {
      "use strict";
      e.exports = function(i) {
        i.Radar = function(t, e) {
          return e.type = "radar", new i(t, e)
        }
      }
    }, {}],
    14: [function(t, e, i) {
      "use strict";
      e.exports = function(i) {
        i.Scatter = function(t, e) {
          return e.type = "scatter", new i(t, e)
        }
      }
    }, {}],
    15: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(40),
        g = t(45);
      n._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }],
          yAxes: [{
            type: "linear"
          }]
        }
      }), n._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function(t, e) {
              var i = "";
              return 0 < t.length && (t[0].yLabel ? i = t[0].yLabel : 0 < e.labels.length && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
            },
            label: function(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
            }
          },
          mode: "index",
          axis: "y"
        }
      }), e.exports = function(e) {
        e.controllers.bar = e.DatasetController.extend({
          dataElementType: o.Rectangle,
          initialize: function() {
            var t;
            e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
          },
          update: function(t) {
            var e, i, n = this.getMeta().data;
            for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
          },
          updateElement: function(t, e, i) {
            var n = this,
              o = n.chart,
              r = n.getMeta(),
              a = n.getDataset(),
              s = t.custom || {},
              l = o.options.elements.rectangle;
            t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
              datasetLabel: a.label,
              label: o.data.labels[e],
              borderSkipped: s.borderSkipped ? s.borderSkipped : l.borderSkipped,
              backgroundColor: s.backgroundColor ? s.backgroundColor : g.valueAtIndexOrDefault(a.backgroundColor, e, l.backgroundColor),
              borderColor: s.borderColor ? s.borderColor : g.valueAtIndexOrDefault(a.borderColor, e, l.borderColor),
              borderWidth: s.borderWidth ? s.borderWidth : g.valueAtIndexOrDefault(a.borderWidth, e, l.borderWidth)
            }, n.updateElementGeometry(t, e, i), t.pivot()
          },
          updateElementGeometry: function(t, e, i) {
            var n = this,
              o = t._model,
              r = n.getValueScale(),
              a = r.getBasePixel(),
              s = r.isHorizontal(),
              l = n._ruler || n.getRuler(),
              c = n.calculateBarValuePixels(n.index, e),
              u = n.calculateBarIndexPixels(n.index, e, l);
            o.horizontal = s, o.base = i ? a : c.base, o.x = s ? i ? a : c.head : u.center, o.y = s ? u.center : i ? a : c.head, o.height = s ? u.size : void 0, o.width = s ? void 0 : u.size
          },
          getValueScaleId: function() {
            return this.getMeta().yAxisID
          },
          getIndexScaleId: function() {
            return this.getMeta().xAxisID
          },
          getValueScale: function() {
            return this.getScaleForId(this.getValueScaleId())
          },
          getIndexScale: function() {
            return this.getScaleForId(this.getIndexScaleId())
          },
          getStackCount: function(t) {
            var e, i, n = this.chart,
              o = this.getIndexScale().options.stacked,
              r = void 0 === t ? n.data.datasets.length : t + 1,
              a = [];
            for (e = 0; e < r; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === o || !0 === o && -1 === a.indexOf(i.stack) || void 0 === o && (void 0 === i.stack || -1 === a.indexOf(i.stack))) && a.push(i.stack);
            return a.length
          },
          getStackIndex: function(t) {
            return this.getStackCount(t) - 1
          },
          getRuler: function() {
            var t, e, i = this.getIndexScale(),
              n = this.getStackCount(),
              o = this.index,
              r = [],
              a = i.isHorizontal(),
              s = a ? i.left : i.top,
              l = s + (a ? i.width : i.height);
            for (t = 0, e = this.getMeta().data.length; t < e; ++t) r.push(i.getPixelForValue(null, t, o));
            return {
              pixels: r,
              start: s,
              end: l,
              stackCount: n,
              scale: i
            }
          },
          calculateBarValuePixels: function(t, e) {
            var i, n, o, r, a, s, l = this.chart,
              c = this.getMeta(),
              u = this.getValueScale(),
              h = l.data.datasets,
              d = u.getRightValue(h[t].data[e]),
              f = u.options.stacked,
              p = c.stack,
              g = 0;
            if (f || void 0 === f && void 0 !== p)
              for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === p && n.controller.getValueScaleId() === u.id && l.isDatasetVisible(i) && (o = u.getRightValue(h[i].data[e]), (d < 0 && o < 0 || 0 <= d && 0 < o) && (g += o));
            return r = u.getPixelForValue(g), {
              size: s = ((a = u.getPixelForValue(g + d)) - r) / 2,
              base: r,
              head: a,
              center: a + s / 2
            }
          },
          calculateBarIndexPixels: function(t, e, i) {
            var n, o, r, a, s, l = i.scale.options,
              c = this.getStackIndex(t),
              u = i.pixels,
              h = u[e],
              d = u.length,
              f = i.start,
              p = i.end;
            return 1 === d ? (n = f < h ? h - f : p - h, o = h < p ? p - h : h - f) : (0 < e && (n = (h - u[e - 1]) / 2, e === d - 1 && (o = n)), e < d - 1 && (o = (u[e + 1] - h) / 2, 0 === e && (n = o))), s = (a = ((r = n * l.categoryPercentage) + o * l.categoryPercentage) / i.stackCount) * l.barPercentage, h -= r, h += a * c, {
              size: s = Math.min(g.valueOrDefault(l.barThickness, s), g.valueOrDefault(l.maxBarThickness, 1 / 0)),
              base: h += (a - s) / 2,
              head: h + s,
              center: h + s / 2
            }
          },
          draw: function() {
            var t = this.chart,
              e = this.getValueScale(),
              i = this.getMeta().data,
              n = this.getDataset(),
              o = i.length,
              r = 0;
            for (g.canvas.clipArea(t.ctx, t.chartArea); r < o; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
            g.canvas.unclipArea(t.ctx)
          },
          setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              i = t._index,
              n = t.custom || {},
              o = t._model;
            o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : g.valueAtIndexOrDefault(e.hoverBackgroundColor, i, g.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : g.valueAtIndexOrDefault(e.hoverBorderColor, i, g.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : g.valueAtIndexOrDefault(e.hoverBorderWidth, i, o.borderWidth)
          },
          removeHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              i = t._index,
              n = t.custom || {},
              o = t._model,
              r = this.chart.options.elements.rectangle;
            o.backgroundColor = n.backgroundColor ? n.backgroundColor : g.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : g.valueAtIndexOrDefault(e.borderColor, i, r.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : g.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth)
          }
        }), e.controllers.horizontalBar = e.controllers.bar.extend({
          getValueScaleId: function() {
            return this.getMeta().xAxisID
          },
          getIndexScaleId: function() {
            return this.getMeta().yAxisID
          }
        })
      }
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    16: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(40),
        p = t(45);
      n._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            position: "left",
            id: "y-axis-0"
          }]
        },
        tooltips: {
          callbacks: {
            title: function() {
              return ""
            },
            label: function(t, e) {
              var i = e.datasets[t.datasetIndex].label || "",
                n = e.datasets[t.datasetIndex].data[t.index];
              return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
            }
          }
        }
      }), e.exports = function(t) {
        t.controllers.bubble = t.DatasetController.extend({
          dataElementType: o.Point,
          update: function(i) {
            var n = this,
              t = n.getMeta().data;
            p.each(t, function(t, e) {
              n.updateElement(t, e, i)
            })
          },
          updateElement: function(t, e, i) {
            var n = this,
              o = n.getMeta(),
              r = t.custom || {},
              a = n.getScaleForId(o.xAxisID),
              s = n.getScaleForId(o.yAxisID),
              l = n._resolveElementOptions(t, e),
              c = n.getDataset().data[e],
              u = n.index,
              h = i ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof c ? c : NaN, e, u),
              d = i ? s.getBasePixel() : s.getPixelForValue(c, e, u);
            t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              radius: i ? 0 : l.radius,
              skip: r.skip || isNaN(h) || isNaN(d),
              x: h,
              y: d
            }, t.pivot()
          },
          setHoverStyle: function(t) {
            var e = t._model,
              i = t._options;
            e.backgroundColor = p.valueOrDefault(i.hoverBackgroundColor, p.getHoverColor(i.backgroundColor)), e.borderColor = p.valueOrDefault(i.hoverBorderColor, p.getHoverColor(i.borderColor)), e.borderWidth = p.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
          },
          removeHoverStyle: function(t) {
            var e = t._model,
              i = t._options;
            e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius
          },
          _resolveElementOptions: function(t, e) {
            var i, n, o, r = this.chart,
              a = r.data.datasets[this.index],
              s = t.custom || {},
              l = r.options.elements.point,
              c = p.options.resolve,
              u = a.data[e],
              h = {},
              d = {
                chart: r,
                dataIndex: e,
                dataset: a,
                datasetIndex: this.index
              },
              f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
            for (i = 0, n = f.length; i < n; ++i) h[o = f[i]] = c([s[o], a[o], l[o]], d, e);
            return h.radius = c([s.radius, u ? u.r : void 0, a.radius, l.radius], d, e), h
          }
        })
      }
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    17: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(40),
        j = t(45);
      n._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
            n = i.datasets,
            o = i.labels;
          if (n.length)
            for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
          return e.push("</ul>"), e.join("")
        },
        legend: {
          labels: {
            generateLabels: function(l) {
              var c = l.data;
              return c.labels.length && c.datasets.length ? c.labels.map(function(t, e) {
                var i = l.getDatasetMeta(0),
                  n = c.datasets[0],
                  o = i.data[e],
                  r = o && o.custom || {},
                  a = j.valueAtIndexOrDefault,
                  s = l.options.elements.arc;
                return {
                  text: t,
                  fillStyle: r.backgroundColor ? r.backgroundColor : a(n.backgroundColor, e, s.backgroundColor),
                  strokeStyle: r.borderColor ? r.borderColor : a(n.borderColor, e, s.borderColor),
                  lineWidth: r.borderWidth ? r.borderWidth : a(n.borderWidth, e, s.borderWidth),
                  hidden: isNaN(n.data[e]) || i.data[e].hidden,
                  index: e
                }
              }) : []
            }
          },
          onClick: function(t, e) {
            var i, n, o, r = e.index,
              a = this.chart;
            for (i = 0, n = (a.data.datasets || []).length; i < n; ++i)(o = a.getDatasetMeta(i)).data[r] && (o.data[r].hidden = !o.data[r].hidden);
            a.update()
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function() {
              return ""
            },
            label: function(t, e) {
              var i = e.labels[t.index],
                n = ": " + e.datasets[t.datasetIndex].data[t.index];
              return j.isArray(i) ? (i = i.slice())[0] += n : i += n, i
            }
          }
        }
      }), n._set("pie", j.clone(n.doughnut)), n._set("pie", {
        cutoutPercentage: 0
      }), e.exports = function(e) {
        e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
          dataElementType: o.Arc,
          linkScales: j.noop,
          getRingIndex: function(t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
            return e
          },
          update: function(i) {
            var n = this,
              t = n.chart,
              e = t.chartArea,
              o = t.options,
              r = o.elements.arc,
              a = e.right - e.left - r.borderWidth,
              s = e.bottom - e.top - r.borderWidth,
              l = Math.min(a, s),
              c = {
                x: 0,
                y: 0
              },
              u = n.getMeta(),
              h = o.cutoutPercentage,
              d = o.circumference;
            if (d < 2 * Math.PI) {
              var f = o.rotation % (2 * Math.PI),
                p = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + d,
                g = Math.cos(f),
                v = Math.sin(f),
                m = Math.cos(p),
                y = Math.sin(p),
                b = f <= 0 && 0 <= p || f <= 2 * Math.PI && 2 * Math.PI <= p,
                x = f <= .5 * Math.PI && .5 * Math.PI <= p || f <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                w = f <= -Math.PI && -Math.PI <= p || f <= Math.PI && Math.PI <= p,
                k = f <= .5 * -Math.PI && .5 * -Math.PI <= p || f <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                S = h / 100,
                T = w ? -1 : Math.min(g * (g < 0 ? 1 : S), m * (m < 0 ? 1 : S)),
                C = k ? -1 : Math.min(v * (v < 0 ? 1 : S), y * (y < 0 ? 1 : S)),
                _ = b ? 1 : Math.max(g * (0 < g ? 1 : S), m * (0 < m ? 1 : S)),
                M = x ? 1 : Math.max(v * (0 < v ? 1 : S), y * (0 < y ? 1 : S)),
                A = .5 * (_ - T),
                P = .5 * (M - C);
              l = Math.min(a / A, s / P), c = {
                x: -.5 * (_ + T),
                y: -.5 * (M + C)
              }
            }
            t.borderWidth = n.getMaxBorderWidth(u.data), t.outerRadius = Math.max((l - t.borderWidth) / 2, 0), t.innerRadius = Math.max(h ? t.outerRadius / 100 * h : 0, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), t.offsetX = c.x * t.outerRadius, t.offsetY = c.y * t.outerRadius, u.total = n.calculateTotal(), n.outerRadius = t.outerRadius - t.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - t.radiusLength, 0), j.each(u.data, function(t, e) {
              n.updateElement(t, e, i)
            })
          },
          updateElement: function(t, e, i) {
            var n = this,
              o = n.chart,
              r = o.chartArea,
              a = o.options,
              s = a.animation,
              l = (r.left + r.right) / 2,
              c = (r.top + r.bottom) / 2,
              u = a.rotation,
              h = a.rotation,
              d = n.getDataset(),
              f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(d.data[e]) * (a.circumference / (2 * Math.PI)),
              p = i && s.animateScale ? 0 : n.innerRadius,
              g = i && s.animateScale ? 0 : n.outerRadius,
              v = j.valueAtIndexOrDefault;
            j.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _model: {
                x: l + o.offsetX,
                y: c + o.offsetY,
                startAngle: u,
                endAngle: h,
                circumference: f,
                outerRadius: g,
                innerRadius: p,
                label: v(d.label, e, o.data.labels[e])
              }
            });
            var m = t._model;
            this.removeHoverStyle(t), i && s.animateRotate || (m.startAngle = 0 === e ? a.rotation : n.getMeta().data[e - 1]._model.endAngle, m.endAngle = m.startAngle + m.circumference), t.pivot()
          },
          removeHoverStyle: function(t) {
            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
          },
          calculateTotal: function() {
            var i, n = this.getDataset(),
              t = this.getMeta(),
              o = 0;
            return j.each(t.data, function(t, e) {
              i = n.data[e], isNaN(i) || t.hidden || (o += Math.abs(i))
            }), o
          },
          calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return 0 < e && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
          },
          getMaxBorderWidth: function(t) {
            for (var e, i, n = 0, o = this.index, r = t.length, a = 0; a < r; a++) e = t[a]._model ? t[a]._model.borderWidth : 0, n = (i = t[a]._chart ? t[a]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (n = n < e ? e : n) ? i : n;
            return n
          }
        })
      }
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    18: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(40),
        p = t(45);
      n._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            id: "y-axis-0"
          }]
        }
      }), e.exports = function(t) {
        function f(t, e) {
          return p.valueOrDefault(t.showLine, e.showLines)
        }
        t.controllers.line = t.DatasetController.extend({
          datasetElementType: o.Line,
          dataElementType: o.Point,
          update: function(t) {
            var e, i, n, o = this,
              r = o.getMeta(),
              a = r.dataset,
              s = r.data || [],
              l = o.chart.options,
              c = l.elements.line,
              u = o.getScaleForId(r.yAxisID),
              h = o.getDataset(),
              d = f(h, l);
            for (d && (n = a.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), a._scale = u, a._datasetIndex = o.index, a._children = s, a._model = {
                spanGaps: h.spanGaps ? h.spanGaps : l.spanGaps,
                tension: n.tension ? n.tension : p.valueOrDefault(h.lineTension, c.tension),
                backgroundColor: n.backgroundColor ? n.backgroundColor : h.backgroundColor || c.backgroundColor,
                borderWidth: n.borderWidth ? n.borderWidth : h.borderWidth || c.borderWidth,
                borderColor: n.borderColor ? n.borderColor : h.borderColor || c.borderColor,
                borderCapStyle: n.borderCapStyle ? n.borderCapStyle : h.borderCapStyle || c.borderCapStyle,
                borderDash: n.borderDash ? n.borderDash : h.borderDash || c.borderDash,
                borderDashOffset: n.borderDashOffset ? n.borderDashOffset : h.borderDashOffset || c.borderDashOffset,
                borderJoinStyle: n.borderJoinStyle ? n.borderJoinStyle : h.borderJoinStyle || c.borderJoinStyle,
                fill: n.fill ? n.fill : void 0 !== h.fill ? h.fill : c.fill,
                steppedLine: n.steppedLine ? n.steppedLine : p.valueOrDefault(h.steppedLine, c.stepped),
                cubicInterpolationMode: n.cubicInterpolationMode ? n.cubicInterpolationMode : p.valueOrDefault(h.cubicInterpolationMode, c.cubicInterpolationMode)
              }, a.pivot()), e = 0, i = s.length; e < i; ++e) o.updateElement(s[e], e, t);
            for (d && 0 !== a._model.tension && o.updateBezierControlPoints(), e = 0, i = s.length; e < i; ++e) s[e].pivot()
          },
          getPointBackgroundColor: function(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
              n = this.getDataset(),
              o = t.custom || {};
            return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = p.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
          },
          getPointBorderColor: function(t, e) {
            var i = this.chart.options.elements.point.borderColor,
              n = this.getDataset(),
              o = t.custom || {};
            return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = p.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
          },
          getPointBorderWidth: function(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
              n = this.getDataset(),
              o = t.custom || {};
            return isNaN(o.borderWidth) ? !isNaN(n.pointBorderWidth) || p.isArray(n.pointBorderWidth) ? i = p.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = o.borderWidth, i
          },
          updateElement: function(t, e, i) {
            var n, o, r = this,
              a = r.getMeta(),
              s = t.custom || {},
              l = r.getDataset(),
              c = r.index,
              u = l.data[e],
              h = r.getScaleForId(a.yAxisID),
              d = r.getScaleForId(a.xAxisID),
              f = r.chart.options.elements.point;
            void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), n = d.getPixelForValue("object" == typeof u ? u : NaN, e, c), o = i ? h.getBasePixel() : r.calculatePointY(u, e, c), t._xScale = d, t._yScale = h, t._datasetIndex = c, t._index = e, t._model = {
              x: n,
              y: o,
              skip: s.skip || isNaN(n) || isNaN(o),
              radius: s.radius || p.valueAtIndexOrDefault(l.pointRadius, e, f.radius),
              pointStyle: s.pointStyle || p.valueAtIndexOrDefault(l.pointStyle, e, f.pointStyle),
              backgroundColor: r.getPointBackgroundColor(t, e),
              borderColor: r.getPointBorderColor(t, e),
              borderWidth: r.getPointBorderWidth(t, e),
              tension: a.dataset._model ? a.dataset._model.tension : 0,
              steppedLine: !!a.dataset._model && a.dataset._model.steppedLine,
              hitRadius: s.hitRadius || p.valueAtIndexOrDefault(l.pointHitRadius, e, f.hitRadius)
            }
          },
          calculatePointY: function(t, e, i) {
            var n, o, r, a = this.chart,
              s = this.getMeta(),
              l = this.getScaleForId(s.yAxisID),
              c = 0,
              u = 0;
            if (l.options.stacked) {
              for (n = 0; n < i; n++)
                if (o = a.data.datasets[n], "line" === (r = a.getDatasetMeta(n)).type && r.yAxisID === l.id && a.isDatasetVisible(n)) {
                  var h = Number(l.getRightValue(o.data[e]));
                  h < 0 ? u += h || 0 : c += h || 0
                } var d = Number(l.getRightValue(t));
              return d < 0 ? l.getPixelForValue(u + d) : l.getPixelForValue(c + d)
            }
            return l.getPixelForValue(t)
          },
          updateBezierControlPoints: function() {
            function t(t, e, i) {
              return Math.max(Math.min(t, i), e)
            }
            var e, i, n, o, r = this.getMeta(),
              a = this.chart.chartArea,
              s = r.data || [];
            if (r.dataset._model.spanGaps && (s = s.filter(function(t) {
                return !t._model.skip
              })), "monotone" === r.dataset._model.cubicInterpolationMode) p.splineCurveMonotone(s);
            else
              for (e = 0, i = s.length; e < i; ++e) n = s[e]._model, o = p.splineCurve(p.previousItem(s, e)._model, n, p.nextItem(s, e)._model, r.dataset._model.tension), n.controlPointPreviousX = o.previous.x, n.controlPointPreviousY = o.previous.y, n.controlPointNextX = o.next.x, n.controlPointNextY = o.next.y;
            if (this.chart.options.elements.line.capBezierPoints)
              for (e = 0, i = s.length; e < i; ++e)(n = s[e]._model).controlPointPreviousX = t(n.controlPointPreviousX, a.left, a.right), n.controlPointPreviousY = t(n.controlPointPreviousY, a.top, a.bottom), n.controlPointNextX = t(n.controlPointNextX, a.left, a.right), n.controlPointNextY = t(n.controlPointNextY, a.top, a.bottom)
          },
          draw: function() {
            var t = this.chart,
              e = this.getMeta(),
              i = e.data || [],
              n = t.chartArea,
              o = i.length,
              r = 0;
            for (p.canvas.clipArea(t.ctx, n), f(this.getDataset(), t.options) && e.dataset.draw(), p.canvas.unclipArea(t.ctx); r < o; ++r) i[r].draw(n)
          },
          setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              i = t._index,
              n = t.custom || {},
              o = t._model;
            o.radius = n.hoverRadius || p.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor || p.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, p.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || p.valueAtIndexOrDefault(e.pointHoverBorderColor, i, p.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || p.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth)
          },
          removeHoverStyle: function(t) {
            var e = this,
              i = e.chart.data.datasets[t._datasetIndex],
              n = t._index,
              o = t.custom || {},
              r = t._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = o.radius || p.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n)
          }
        })
      }
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    19: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(40),
        w = t(45);
      n._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
            n = i.datasets,
            o = i.labels;
          if (n.length)
            for (var r = 0; r < n[0].data.length; ++r) e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), o[r] && e.push(o[r]), e.push("</li>");
          return e.push("</ul>"), e.join("")
        },
        legend: {
          labels: {
            generateLabels: function(s) {
              var l = s.data;
              return l.labels.length && l.datasets.length ? l.labels.map(function(t, e) {
                var i = s.getDatasetMeta(0),
                  n = l.datasets[0],
                  o = i.data[e].custom || {},
                  r = w.valueAtIndexOrDefault,
                  a = s.options.elements.arc;
                return {
                  text: t,
                  fillStyle: o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, e, a.backgroundColor),
                  strokeStyle: o.borderColor ? o.borderColor : r(n.borderColor, e, a.borderColor),
                  lineWidth: o.borderWidth ? o.borderWidth : r(n.borderWidth, e, a.borderWidth),
                  hidden: isNaN(n.data[e]) || i.data[e].hidden,
                  index: e
                }
              }) : []
            }
          },
          onClick: function(t, e) {
            var i, n, o, r = e.index,
              a = this.chart;
            for (i = 0, n = (a.data.datasets || []).length; i < n; ++i)(o = a.getDatasetMeta(i)).data[r].hidden = !o.data[r].hidden;
            a.update()
          }
        },
        tooltips: {
          callbacks: {
            title: function() {
              return ""
            },
            label: function(t, e) {
              return e.labels[t.index] + ": " + t.yLabel
            }
          }
        }
      }), e.exports = function(e) {
        e.controllers.polarArea = e.DatasetController.extend({
          dataElementType: o.Arc,
          linkScales: w.noop,
          update: function(i) {
            var n = this,
              t = n.chart,
              e = t.chartArea,
              o = n.getMeta(),
              r = t.options,
              a = r.elements.arc,
              s = Math.min(e.right - e.left, e.bottom - e.top);
            t.outerRadius = Math.max((s - a.borderWidth / 2) / 2, 0), t.innerRadius = Math.max(r.cutoutPercentage ? t.outerRadius / 100 * r.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), n.outerRadius = t.outerRadius - t.radiusLength * n.index, n.innerRadius = n.outerRadius - t.radiusLength, o.count = n.countVisibleElements(), w.each(o.data, function(t, e) {
              n.updateElement(t, e, i)
            })
          },
          updateElement: function(t, e, i) {
            for (var n = this, o = n.chart, r = n.getDataset(), a = o.options, s = a.animation, l = o.scale, c = o.data.labels, u = n.calculateCircumference(r.data[e]), h = l.xCenter, d = l.yCenter, f = 0, p = n.getMeta(), g = 0; g < e; ++g) isNaN(r.data[g]) || p.data[g].hidden || ++f;
            var v = a.startAngle,
              m = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
              y = v + u * f,
              b = y + (t.hidden ? 0 : u),
              x = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]);
            w.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: l,
              _model: {
                x: h,
                y: d,
                innerRadius: 0,
                outerRadius: i ? x : m,
                startAngle: i && s.animateRotate ? v : y,
                endAngle: i && s.animateRotate ? v : b,
                label: w.valueAtIndexOrDefault(c, e, c[e])
              }
            }), n.removeHoverStyle(t), t.pivot()
          },
          removeHoverStyle: function(t) {
            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
          },
          countVisibleElements: function() {
            var i = this.getDataset(),
              t = this.getMeta(),
              n = 0;
            return w.each(t.data, function(t, e) {
              isNaN(i.data[e]) || t.hidden || n++
            }), n
          },
          calculateCircumference: function(t) {
            var e = this.getMeta().count;
            return 0 < e && !isNaN(t) ? 2 * Math.PI / e : 0
          }
        })
      }
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    20: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(40),
        c = t(45);
      n._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), e.exports = function(t) {
        t.controllers.radar = t.DatasetController.extend({
          datasetElementType: o.Line,
          dataElementType: o.Point,
          linkScales: c.noop,
          update: function(i) {
            var n = this,
              t = n.getMeta(),
              e = t.dataset,
              o = t.data,
              r = e.custom || {},
              a = n.getDataset(),
              s = n.chart.options.elements.line,
              l = n.chart.scale;
            void 0 !== a.tension && void 0 === a.lineTension && (a.lineTension = a.tension), c.extend(t.dataset, {
              _datasetIndex: n.index,
              _scale: l,
              _children: o,
              _loop: !0,
              _model: {
                tension: r.tension ? r.tension : c.valueOrDefault(a.lineTension, s.tension),
                backgroundColor: r.backgroundColor ? r.backgroundColor : a.backgroundColor || s.backgroundColor,
                borderWidth: r.borderWidth ? r.borderWidth : a.borderWidth || s.borderWidth,
                borderColor: r.borderColor ? r.borderColor : a.borderColor || s.borderColor,
                fill: r.fill ? r.fill : void 0 !== a.fill ? a.fill : s.fill,
                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : a.borderCapStyle || s.borderCapStyle,
                borderDash: r.borderDash ? r.borderDash : a.borderDash || s.borderDash,
                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : a.borderDashOffset || s.borderDashOffset,
                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : a.borderJoinStyle || s.borderJoinStyle
              }
            }), t.dataset.pivot(), c.each(o, function(t, e) {
              n.updateElement(t, e, i)
            }, n), n.updateBezierControlPoints()
          },
          updateElement: function(t, e, i) {
            var n = this,
              o = t.custom || {},
              r = n.getDataset(),
              a = n.chart.scale,
              s = n.chart.options.elements.point,
              l = a.getPointPositionForValue(e, r.data[e]);
            void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), c.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: a,
              _model: {
                x: i ? a.xCenter : l.x,
                y: i ? a.yCenter : l.y,
                tension: o.tension ? o.tension : c.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
                radius: o.radius ? o.radius : c.valueAtIndexOrDefault(r.pointRadius, e, s.radius),
                backgroundColor: o.backgroundColor ? o.backgroundColor : c.valueAtIndexOrDefault(r.pointBackgroundColor, e, s.backgroundColor),
                borderColor: o.borderColor ? o.borderColor : c.valueAtIndexOrDefault(r.pointBorderColor, e, s.borderColor),
                borderWidth: o.borderWidth ? o.borderWidth : c.valueAtIndexOrDefault(r.pointBorderWidth, e, s.borderWidth),
                pointStyle: o.pointStyle ? o.pointStyle : c.valueAtIndexOrDefault(r.pointStyle, e, s.pointStyle),
                hitRadius: o.hitRadius ? o.hitRadius : c.valueAtIndexOrDefault(r.pointHitRadius, e, s.hitRadius)
              }
            }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
          },
          updateBezierControlPoints: function() {
            var o = this.chart.chartArea,
              r = this.getMeta();
            c.each(r.data, function(t, e) {
              var i = t._model,
                n = c.splineCurve(c.previousItem(r.data, e, !0)._model, i, c.nextItem(r.data, e, !0)._model, i.tension);
              i.controlPointPreviousX = Math.max(Math.min(n.previous.x, o.right), o.left), i.controlPointPreviousY = Math.max(Math.min(n.previous.y, o.bottom), o.top), i.controlPointNextX = Math.max(Math.min(n.next.x, o.right), o.left), i.controlPointNextY = Math.max(Math.min(n.next.y, o.bottom), o.top), t.pivot()
            })
          },
          setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              i = t.custom || {},
              n = t._index,
              o = t._model;
            o.radius = i.hoverRadius ? i.hoverRadius : c.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : c.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, c.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : c.valueAtIndexOrDefault(e.pointHoverBorderColor, n, c.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : c.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, o.borderWidth)
          },
          removeHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              i = t.custom || {},
              n = t._index,
              o = t._model,
              r = this.chart.options.elements.point;
            o.radius = i.radius ? i.radius : c.valueAtIndexOrDefault(e.pointRadius, n, r.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : c.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : c.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : c.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth)
          }
        })
      }
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    21: [function(t, e, i) {
      "use strict";
      t(25)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            id: "y-axis-1",
            type: "linear",
            position: "left"
          }]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function() {
              return ""
            },
            label: function(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")"
            }
          }
        }
      }), e.exports = function(t) {
        t.controllers.scatter = t.controllers.line
      }
    }, {
      25: 25
    }],
    22: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(26),
        r = t(45);
      n._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: r.noop,
          onComplete: r.noop
        }
      }), e.exports = function(t) {
        t.Animation = o.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function(t, e, i, n) {
            var o, r, a = this.animations;
            for (e.chart = t, n || (t.animating = !0), o = 0, r = a.length; o < r; ++o)
              if (a[o].chart === t) return void(a[o] = e);
            a.push(e), 1 === a.length && this.requestAnimationFrame()
          },
          cancelAnimation: function(e) {
            var t = r.findIndex(this.animations, function(t) {
              return t.chart === e
            }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
          },
          requestAnimationFrame: function() {
            var t = this;
            null === t.request && (t.request = r.requestAnimFrame.call(window, function() {
              t.request = null, t.startDigest()
            }))
          },
          startDigest: function() {
            var t = this,
              e = Date.now(),
              i = 0;
            1 < t.dropFrames && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
            var n = Date.now();
            t.dropFrames += (n - e) / t.frameDuration, 0 < t.animations.length && t.requestAnimationFrame()
          },
          advance: function(t) {
            for (var e, i, n = this.animations, o = 0; o < n.length;) i = (e = n[o]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), r.callback(e.render, [i, e], i), r.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (r.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(o, 1)) : ++o
          }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
          get: function() {
            return this
          }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
          get: function() {
            return this.chart
          },
          set: function(t) {
            this.chart = t
          }
        })
      }
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    23: [function(t, e, i) {
      "use strict";
      var u = t(25),
        h = t(45),
        o = t(28),
        d = t(48);
      e.exports = function(c) {
        function s(t) {
          return "top" === t || "bottom" === t
        }
        var l = c.plugins;
        c.types = {}, c.instances = {}, c.controllers = {}, h.extend(c.prototype, {
          construct: function(t, e) {
            var i, n, o = this;
            (n = (i = (i = e) || {}).data = i.data || {}).datasets = n.datasets || [], n.labels = n.labels || [], i.options = h.configMerge(u.global, u[i.type], i.options || {}), e = i;
            var r = d.acquireContext(t, e),
              a = r && r.canvas,
              s = a && a.height,
              l = a && a.width;
            o.id = h.uid(), o.ctx = r, o.canvas = a, o.config = e, o.width = l, o.height = s, o.aspectRatio = s ? l / s : null, o.options = e.options, o._bufferedRender = !1, (o.chart = o).controller = o, c.instances[o.id] = o, Object.defineProperty(o, "data", {
              get: function() {
                return o.config.data
              },
              set: function(t) {
                o.config.data = t
              }
            }), r && a ? (o.initialize(), o.update()) : console.error("Failed to create chart: can't acquire context from the given item")
          },
          initialize: function() {
            var t = this;
            return l.notify(t, "beforeInit"), h.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), l.notify(t, "afterInit"), t
          },
          clear: function() {
            return h.canvas.clear(this), this
          },
          stop: function() {
            return c.animationService.cancelAnimation(this), this
          },
          resize: function(t) {
            var e = this,
              i = e.options,
              n = e.canvas,
              o = i.maintainAspectRatio && e.aspectRatio || null,
              r = Math.max(0, Math.floor(h.getMaximumWidth(n))),
              a = Math.max(0, Math.floor(o ? r / o : h.getMaximumHeight(n)));
            if ((e.width !== r || e.height !== a) && (n.width = e.width = r, n.height = e.height = a, n.style.width = r + "px", n.style.height = a + "px", h.retinaScale(e, i.devicePixelRatio), !t)) {
              var s = {
                width: r,
                height: a
              };
              l.notify(e, "resize", [s]), e.options.onResize && e.options.onResize(e, s), e.stop(), e.update(e.options.responsiveAnimationDuration)
            }
          },
          ensureScalesHaveIDs: function() {
            var t = this.options,
              e = t.scales || {},
              i = t.scale;
            h.each(e.xAxes, function(t, e) {
              t.id = t.id || "x-axis-" + e
            }), h.each(e.yAxes, function(t, e) {
              t.id = t.id || "y-axis-" + e
            }), i && (i.id = i.id || "scale")
          },
          buildScales: function() {
            var r = this,
              t = r.options,
              a = r.scales = {},
              e = [];
            t.scales && (e = e.concat((t.scales.xAxes || []).map(function(t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              }
            }), (t.scales.yAxes || []).map(function(t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              }
            }))), t.scale && e.push({
              options: t.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), h.each(e, function(t) {
              var e = t.options,
                i = h.valueOrDefault(e.type, t.dtype),
                n = c.scaleService.getScaleConstructor(i);
              if (n) {
                s(e.position) !== s(t.dposition) && (e.position = t.dposition);
                var o = new n({
                  id: e.id,
                  options: e,
                  ctx: r.ctx,
                  chart: r
                });
                (a[o.id] = o).mergeTicksOptions(), t.isDefault && (r.scale = o)
              }
            }), c.scaleService.addScalesToLayout(this)
          },
          buildOrUpdateControllers: function() {
            var r = this,
              a = [],
              s = [];
            return h.each(r.data.datasets, function(t, e) {
              var i = r.getDatasetMeta(e),
                n = t.type || r.config.type;
              if (i.type && i.type !== n && (r.destroyDatasetMeta(e), i = r.getDatasetMeta(e)), i.type = n, a.push(i.type), i.controller) i.controller.updateIndex(e);
              else {
                var o = c.controllers[i.type];
                if (void 0 === o) throw new Error('"' + i.type + '" is not a chart type.');
                i.controller = new o(r, e), s.push(i.controller)
              }
            }, r), s
          },
          resetElements: function() {
            var i = this;
            h.each(i.data.datasets, function(t, e) {
              i.getDatasetMeta(e).controller.reset()
            }, i)
          },
          reset: function() {
            this.resetElements(), this.tooltip.initialize()
          },
          update: function(t) {
            var e, i, n = this;
            if (t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
              }), (i = (e = n).options).scale ? e.scale.options = i.scale : i.scales && i.scales.xAxes.concat(i.scales.yAxes).forEach(function(t) {
                e.scales[t.id].options = t
              }), e.tooltip._options = i.tooltips, !1 !== l.notify(n, "beforeUpdate")) {
              n.tooltip._data = n.data;
              var o = n.buildOrUpdateControllers();
              h.each(n.data.datasets, function(t, e) {
                n.getDatasetMeta(e).controller.buildOrUpdateElements()
              }, n), n.updateLayout(), h.each(o, function(t) {
                t.reset()
              }), n.updateDatasets(), l.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                duration: t.duration,
                easing: t.easing,
                lazy: t.lazy
              } : n.render(t)
            }
          },
          updateLayout: function() {
            !1 !== l.notify(this, "beforeLayout") && (c.layoutService.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"))
          },
          updateDatasets: function() {
            if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
              l.notify(this, "afterDatasetsUpdate")
            }
          },
          updateDataset: function(t) {
            var e = this.getDatasetMeta(t),
              i = {
                meta: e,
                index: t
              };
            !1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]))
          },
          render: function(t) {
            var e = this;
            t && "object" == typeof t || (t = {
              duration: t,
              lazy: arguments[1]
            });
            var i = t.duration,
              n = t.lazy;
            if (!1 !== l.notify(e, "beforeRender")) {
              var o = e.options.animation,
                r = function(t) {
                  l.notify(e, "afterRender"), h.callback(o && o.onComplete, [t], e)
                };
              if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                var a = new c.Animation({
                  numSteps: (i || o.duration) / 16.66,
                  easing: t.easing || o.easing,
                  render: function(t, e) {
                    var i = h.easing.effects[e.easing],
                      n = e.currentStep,
                      o = n / e.numSteps;
                    t.draw(i(o), o, n)
                  },
                  onAnimationProgress: o.onProgress,
                  onAnimationComplete: r
                });
                c.animationService.addAnimation(e, a, i, n)
              } else e.draw(), r(new c.Animation({
                numSteps: 0,
                chart: e
              }));
              return e
            }
          },
          draw: function(t) {
            var e = this;
            e.clear(), h.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (h.each(e.boxes, function(t) {
              t.draw(e.chartArea)
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e.tooltip.draw(), l.notify(e, "afterDraw", [t]))
          },
          transition: function(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
          },
          drawDatasets: function(t) {
            var e = this;
            if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
              for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
              l.notify(e, "afterDatasetsDraw", [t])
            }
          },
          drawDataset: function(t, e) {
            var i = this.getDatasetMeta(t),
              n = {
                meta: i,
                index: t,
                easingValue: e
              };
            !1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]))
          },
          getElementAtEvent: function(t) {
            return o.modes.single(this, t)
          },
          getElementsAtEvent: function(t) {
            return o.modes.label(this, t, {
              intersect: !0
            })
          },
          getElementsAtXAxis: function(t) {
            return o.modes["x-axis"](this, t, {
              intersect: !0
            })
          },
          getElementsAtEventForMode: function(t, e, i) {
            var n = o.modes[e];
            return "function" == typeof n ? n(this, t, i) : []
          },
          getDatasetAtEvent: function(t) {
            return o.modes.dataset(this, t, {
              intersect: !0
            })
          },
          getDatasetMeta: function(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i || (i = e._meta[this.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i
          },
          getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
            return t
          },
          isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
          },
          generateLegend: function() {
            return this.options.legendCallback(this)
          },
          destroyDatasetMeta: function(t) {
            var e = this.id,
              i = this.data.datasets[t],
              n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e])
          },
          destroy: function() {
            var t, e, i = this,
              n = i.canvas;
            for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
            n && (i.unbindEvents(), h.canvas.clear(i), d.releaseContext(i.ctx), i.canvas = null, i.ctx = null), l.notify(i, "destroy"), delete c.instances[i.id]
          },
          toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
          },
          initToolTip: function() {
            var t = this;
            t.tooltip = new c.Tooltip({
              _chart: t,
              _chartInstance: t,
              _data: t.data,
              _options: t.options.tooltips
            }, t)
          },
          bindEvents: function() {
            var e = this,
              i = e._listeners = {},
              n = function() {
                e.eventHandler.apply(e, arguments)
              };
            h.each(e.options.events, function(t) {
              d.addEventListener(e, t, n), i[t] = n
            }), e.options.responsive && (n = function() {
              e.resize()
            }, d.addEventListener(e, "resize", n), i.resize = n)
          },
          unbindEvents: function() {
            var i = this,
              t = i._listeners;
            t && (delete i._listeners, h.each(t, function(t, e) {
              d.removeEventListener(i, e, t)
            }))
          },
          updateHoverStyle: function(t, e, i) {
            var n, o, r, a = i ? "setHoverStyle" : "removeHoverStyle";
            for (o = 0, r = t.length; o < r; ++o)(n = t[o]) && this.getDatasetMeta(n._datasetIndex).controller[a](n)
          },
          eventHandler: function(t) {
            var e = this,
              i = e.tooltip;
            if (!1 !== l.notify(e, "beforeEvent", [t])) {
              e._bufferedRender = !0, e._bufferedRequest = null;
              var n = e.handleEvent(t);
              n |= i && i.handleEvent(t), l.notify(e, "afterEvent", [t]);
              var o = e._bufferedRequest;
              return o ? e.render(o) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
          },
          handleEvent: function(t) {
            var e, i = this,
              n = i.options || {},
              o = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), h.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !h.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
          }
        }), c.Controller = c
      }
    }, {
      25: 25,
      28: 28,
      45: 45,
      48: 48
    }],
    24: [function(t, e, i) {
      "use strict";
      var s = t(45);
      e.exports = function(t) {
        function r(e, t) {
          var i = e._chartjs;
          if (i) {
            var n = i.listeners,
              o = n.indexOf(t); - 1 !== o && n.splice(o, 1), 0 < n.length || (a.forEach(function(t) {
              delete e[t]
            }), delete e._chartjs)
          }
        }
        var a = ["push", "pop", "shift", "splice", "unshift"];
        t.DatasetController = function(t, e) {
          this.initialize(t, e)
        }, s.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements()
          },
          updateIndex: function(t) {
            this.index = t
          },
          linkScales: function() {
            var t = this.getMeta(),
              e = this.getDataset();
            null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
          },
          getDataset: function() {
            return this.chart.data.datasets[this.index]
          },
          getMeta: function() {
            return this.chart.getDatasetMeta(this.index)
          },
          getScaleForId: function(t) {
            return this.chart.scales[t]
          },
          reset: function() {
            this.update(!0)
          },
          destroy: function() {
            this._data && r(this._data, this)
          },
          createMetaDataset: function() {
            var t = this.datasetElementType;
            return t && new t({
              _chart: this.chart,
              _datasetIndex: this.index
            })
          },
          createMetaData: function(t) {
            var e = this.dataElementType;
            return e && new e({
              _chart: this.chart,
              _datasetIndex: this.index,
              _index: t
            })
          },
          addElements: function() {
            var t, e, i = this.getMeta(),
              n = this.getDataset().data || [],
              o = i.data;
            for (t = 0, e = n.length; t < e; ++t) o[t] = o[t] || this.createMetaData(t);
            i.dataset = i.dataset || this.createMetaDataset()
          },
          addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
          },
          buildOrUpdateElements: function() {
            var o, t, e = this,
              i = e.getDataset(),
              n = i.data || (i.data = []);
            e._data !== n && (e._data && r(e._data, e), t = e, (o = n)._chartjs ? o._chartjs.listeners.push(t) : (Object.defineProperty(o, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [t]
              }
            }), a.forEach(function(t) {
              var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                n = o[t];
              Object.defineProperty(o, t, {
                configurable: !0,
                enumerable: !1,
                value: function() {
                  var e = Array.prototype.slice.call(arguments),
                    t = n.apply(this, e);
                  return s.each(o._chartjs.listeners, function(t) {
                    "function" == typeof t[i] && t[i].apply(t, e)
                  }), t
                }
              })
            })), e._data = n), e.resyncElements()
          },
          update: s.noop,
          transition: function(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, o = 0; o < n; ++o) i[o].transition(t);
            e.dataset && e.dataset.transition(t)
          },
          draw: function() {
            var t = this.getMeta(),
              e = t.data || [],
              i = e.length,
              n = 0;
            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
          },
          removeHoverStyle: function(t, e) {
            var i = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              o = t.custom || {},
              r = s.valueAtIndexOrDefault,
              a = t._model;
            a.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, n, e.backgroundColor), a.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, n, e.borderColor), a.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, n, e.borderWidth)
          },
          setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              i = t._index,
              n = t.custom || {},
              o = s.valueAtIndexOrDefault,
              r = s.getHoverColor,
              a = t._model;
            a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o(e.hoverBorderColor, i, r(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o(e.hoverBorderWidth, i, a.borderWidth)
          },
          resyncElements: function() {
            var t = this.getMeta(),
              e = this.getDataset().data,
              i = t.data.length,
              n = e.length;
            n < i ? t.data.splice(n, i - n) : i < n && this.insertElements(i, n - i)
          },
          insertElements: function(t, e) {
            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
          },
          onDataPush: function() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length)
          },
          onDataPop: function() {
            this.getMeta().data.pop()
          },
          onDataShift: function() {
            this.getMeta().data.shift()
          },
          onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
          },
          onDataUnshift: function() {
            this.insertElements(0, arguments.length)
          }
        }), t.DatasetController.extend = s.inherits
      }
    }, {
      45: 45
    }],
    25: [function(t, e, i) {
      "use strict";
      var n = t(45);
      e.exports = {
        _set: function(t, e) {
          return n.merge(this[t] || (this[t] = {}), e)
        }
      }
    }, {
      45: 45
    }],
    26: [function(t, e, i) {
      "use strict";
      var p = t(3),
        n = t(45),
        o = function(t) {
          n.extend(this, t), this.initialize.apply(this, arguments)
        };
      n.extend(o.prototype, {
        initialize: function() {
          this.hidden = !1
        },
        pivot: function() {
          return this._view || (this._view = n.clone(this._model)), this._start = {}, this
        },
        transition: function(t) {
          var e = this._model,
            i = this._start,
            n = this._view;
          return e && 1 !== t ? (n || (n = this._view = {}), i || (i = this._start = {}), function(t, e, i, n) {
            var o, r, a, s, l, c, u, h, d, f = Object.keys(i);
            for (o = 0, r = f.length; o < r; ++o)
              if (c = i[a = f[o]], e.hasOwnProperty(a) || (e[a] = c), (s = e[a]) !== c && "_" !== a[0]) {
                if (t.hasOwnProperty(a) || (t[a] = s), (u = typeof c) == typeof(l = t[a]))
                  if ("string" === u) {
                    if ((h = p(l)).valid && (d = p(c)).valid) {
                      e[a] = d.mix(h, n).rgbString();
                      continue
                    }
                  } else if ("number" === u && isFinite(l) && isFinite(c)) {
                  e[a] = l + (c - l) * n;
                  continue
                }
                e[a] = c
              }
          }(i, n, e, t)) : (this._view = e, this._start = null), this
        },
        tooltipPosition: function() {
          return {
            x: this._model.x,
            y: this._model.y
          }
        },
        hasValue: function() {
          return n.isNumber(this._model.x) && n.isNumber(this._model.y)
        }
      }), o.extend = n.inherits, e.exports = o
    }, {
      3: 3,
      45: 45
    }],
    27: [function(t, e, i) {
      "use strict";
      var n = t(3),
        o = t(25),
        p = t(45);
      e.exports = function(l) {
        function u(t, e, i) {
          var n;
          return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
        }

        function h(t) {
          return null != t && "none" !== t
        }

        function e(t, e, i) {
          var n = document.defaultView,
            o = t.parentNode,
            r = n.getComputedStyle(t)[e],
            a = n.getComputedStyle(o)[e],
            s = h(r),
            l = h(a),
            c = Number.POSITIVE_INFINITY;
          return s || l ? Math.min(s ? u(r, t, i) : c, l ? u(a, o, i) : c) : "none"
        }
        p.extend = function(i) {
          for (var t = 1, e = arguments.length; t < e; t++) p.each(arguments[t], function(t, e) {
            i[e] = t
          });
          return i
        }, p.configMerge = function() {
          return p.merge(p.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function(t, e, i, n) {
              var o = e[t] || {},
                r = i[t];
              "scales" === t ? e[t] = p.scaleMerge(o, r) : "scale" === t ? e[t] = p.merge(o, [l.scaleService.getScaleDefaults(r.type), r]) : p._merger(t, e, i, n)
            }
          })
        }, p.scaleMerge = function() {
          return p.merge(p.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function(t, e, i, n) {
              if ("xAxes" === t || "yAxes" === t) {
                var o, r, a, s = i[t].length;
                for (e[t] || (e[t] = []), o = 0; o < s; ++o) a = i[t][o], r = p.valueOrDefault(a.type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), !e[t][o].type || a.type && a.type !== e[t][o].type ? p.merge(e[t][o], [l.scaleService.getScaleDefaults(r), a]) : p.merge(e[t][o], a)
              } else p._merger(t, e, i, n)
            }
          })
        }, p.where = function(t, e) {
          if (p.isArray(t) && Array.prototype.filter) return t.filter(e);
          var i = [];
          return p.each(t, function(t) {
            e(t) && i.push(t)
          }), i
        }, p.findIndex = Array.prototype.findIndex ? function(t, e, i) {
          return t.findIndex(e, i)
        } : function(t, e, i) {
          i = void 0 === i ? t : i;
          for (var n = 0, o = t.length; n < o; ++n)
            if (e.call(i, t[n], n, t)) return n;
          return -1
        }, p.findNextWhere = function(t, e, i) {
          p.isNullOrUndef(i) && (i = -1);
          for (var n = i + 1; n < t.length; n++) {
            var o = t[n];
            if (e(o)) return o
          }
        }, p.findPreviousWhere = function(t, e, i) {
          p.isNullOrUndef(i) && (i = t.length);
          for (var n = i - 1; 0 <= n; n--) {
            var o = t[n];
            if (e(o)) return o
          }
        }, p.inherits = function(t) {
          var e = this,
            i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
              return e.apply(this, arguments)
            },
            n = function() {
              this.constructor = i
            };
          return n.prototype = e.prototype, i.prototype = new n, i.extend = p.inherits, t && p.extend(i.prototype, t), i.__super__ = e.prototype, i
        }, p.isNumber = function(t) {
          return !isNaN(parseFloat(t)) && isFinite(t)
        }, p.almostEquals = function(t, e, i) {
          return Math.abs(t - e) < i
        }, p.almostWhole = function(t, e) {
          var i = Math.round(t);
          return i - e < t && t < i + e
        }, p.max = function(t) {
          return t.reduce(function(t, e) {
            return isNaN(e) ? t : Math.max(t, e)
          }, Number.NEGATIVE_INFINITY)
        }, p.min = function(t) {
          return t.reduce(function(t, e) {
            return isNaN(e) ? t : Math.min(t, e)
          }, Number.POSITIVE_INFINITY)
        }, p.sign = Math.sign ? function(t) {
          return Math.sign(t)
        } : function(t) {
          return 0 == (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
        }, p.log10 = Math.log10 ? function(t) {
          return Math.log10(t)
        } : function(t) {
          return Math.log(t) / Math.LN10
        }, p.toRadians = function(t) {
          return t * (Math.PI / 180)
        }, p.toDegrees = function(t) {
          return t * (180 / Math.PI)
        }, p.getAngleFromPoint = function(t, e) {
          var i = e.x - t.x,
            n = e.y - t.y,
            o = Math.sqrt(i * i + n * n),
            r = Math.atan2(n, i);
          return r < -.5 * Math.PI && (r += 2 * Math.PI), {
            angle: r,
            distance: o
          }
        }, p.distanceBetweenPoints = function(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }, p.aliasPixel = function(t) {
          return t % 2 == 0 ? 0 : .5
        }, p.splineCurve = function(t, e, i, n) {
          var o = t.skip ? e : t,
            r = e,
            a = i.skip ? e : i,
            s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
            l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
            c = s / (s + l),
            u = l / (s + l),
            h = n * (c = isNaN(c) ? 0 : c),
            d = n * (u = isNaN(u) ? 0 : u);
          return {
            previous: {
              x: r.x - h * (a.x - o.x),
              y: r.y - h * (a.y - o.y)
            },
            next: {
              x: r.x + d * (a.x - o.x),
              y: r.y + d * (a.y - o.y)
            }
          }
        }, p.EPSILON = Number.EPSILON || 1e-14, p.splineCurveMonotone = function(t) {
          var e, i, n, o, r, a, s, l, c, u = (t || []).map(function(t) {
              return {
                model: t._model,
                deltaK: 0,
                mK: 0
              }
            }),
            h = u.length;
          for (e = 0; e < h; ++e)
            if (!(n = u[e]).model.skip) {
              if (i = 0 < e ? u[e - 1] : null, (o = e < h - 1 ? u[e + 1] : null) && !o.model.skip) {
                var d = o.model.x - n.model.x;
                n.deltaK = 0 !== d ? (o.model.y - n.model.y) / d : 0
              }!i || i.model.skip ? n.mK = n.deltaK : !o || o.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
            } for (e = 0; e < h - 1; ++e) n = u[e], o = u[e + 1], n.model.skip || o.model.skip || (p.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = o.mK = 0 : (r = n.mK / n.deltaK, a = o.mK / n.deltaK, (l = Math.pow(r, 2) + Math.pow(a, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = r * s * n.deltaK, o.mK = a * s * n.deltaK)));
          for (e = 0; e < h; ++e)(n = u[e]).model.skip || (i = 0 < e ? u[e - 1] : null, o = e < h - 1 ? u[e + 1] : null, i && !i.model.skip && (c = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - c, n.model.controlPointPreviousY = n.model.y - c * n.mK), o && !o.model.skip && (c = (o.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + c, n.model.controlPointNextY = n.model.y + c * n.mK))
        }, p.nextItem = function(t, e, i) {
          return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
        }, p.previousItem = function(t, e, i) {
          return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
        }, p.niceNum = function(t, e) {
          var i = Math.floor(p.log10(t)),
            n = t / Math.pow(10, i);
          return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
        }, p.requestAnimFrame = "undefined" == typeof window ? function(t) {
          t()
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
          return window.setTimeout(t, 1e3 / 60)
        }, p.getRelativePosition = function(t, e) {
          var i, n, o = t.originalEvent || t,
            r = t.currentTarget || t.srcElement,
            a = r.getBoundingClientRect(),
            s = o.touches;
          n = s && 0 < s.length ? (i = s[0].clientX, s[0].clientY) : (i = o.clientX, o.clientY);
          var l = parseFloat(p.getStyle(r, "padding-left")),
            c = parseFloat(p.getStyle(r, "padding-top")),
            u = parseFloat(p.getStyle(r, "padding-right")),
            h = parseFloat(p.getStyle(r, "padding-bottom")),
            d = a.right - a.left - l - u,
            f = a.bottom - a.top - c - h;
          return {
            x: i = Math.round((i - a.left - l) / d * r.width / e.currentDevicePixelRatio),
            y: n = Math.round((n - a.top - c) / f * r.height / e.currentDevicePixelRatio)
          }
        }, p.getConstraintWidth = function(t) {
          return e(t, "max-width", "clientWidth")
        }, p.getConstraintHeight = function(t) {
          return e(t, "max-height", "clientHeight")
        }, p.getMaximumWidth = function(t) {
          var e = t.parentNode;
          if (!e) return t.clientWidth;
          var i = parseInt(p.getStyle(e, "padding-left"), 10),
            n = parseInt(p.getStyle(e, "padding-right"), 10),
            o = e.clientWidth - i - n,
            r = p.getConstraintWidth(t);
          return isNaN(r) ? o : Math.min(o, r)
        }, p.getMaximumHeight = function(t) {
          var e = t.parentNode;
          if (!e) return t.clientHeight;
          var i = parseInt(p.getStyle(e, "padding-top"), 10),
            n = parseInt(p.getStyle(e, "padding-bottom"), 10),
            o = e.clientHeight - i - n,
            r = p.getConstraintHeight(t);
          return isNaN(r) ? o : Math.min(o, r)
        }, p.getStyle = function(t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        }, p.retinaScale = function(t, e) {
          var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
          if (1 !== i) {
            var n = t.canvas,
              o = t.height,
              r = t.width;
            n.height = o * i, n.width = r * i, t.ctx.scale(i, i), n.style.height = o + "px", n.style.width = r + "px"
          }
        }, p.fontString = function(t, e, i) {
          return e + " " + t + "px " + i
        }, p.longestText = function(e, t, i, n) {
          var o = (n = n || {}).data = n.data || {},
            r = n.garbageCollect = n.garbageCollect || [];
          n.font !== t && (o = n.data = {}, r = n.garbageCollect = [], n.font = t), e.font = t;
          var a = 0;
          p.each(i, function(t) {
            null != t && !0 !== p.isArray(t) ? a = p.measureText(e, o, r, a, t) : p.isArray(t) && p.each(t, function(t) {
              null == t || p.isArray(t) || (a = p.measureText(e, o, r, a, t))
            })
          });
          var s = r.length / 2;
          if (s > i.length) {
            for (var l = 0; l < s; l++) delete o[r[l]];
            r.splice(0, s)
          }
          return a
        }, p.measureText = function(t, e, i, n, o) {
          var r = e[o];
          return r || (r = e[o] = t.measureText(o).width, i.push(o)), n < r && (n = r), n
        }, p.numberOfLabelLines = function(t) {
          var e = 1;
          return p.each(t, function(t) {
            p.isArray(t) && t.length > e && (e = t.length)
          }), e
        }, p.color = n ? function(t) {
          return t instanceof CanvasGradient && (t = o.global.defaultColor), n(t)
        } : function(t) {
          return console.error("Color.js not found!"), t
        }, p.getHoverColor = function(t) {
          return t instanceof CanvasPattern ? t : p.color(t).saturate(.5).darken(.1).rgbString()
        }
      }
    }, {
      25: 25,
      3: 3,
      45: 45
    }],
    28: [function(t, e, i) {
      "use strict";

      function s(t, e) {
        return t.native ? {
          x: t.x,
          y: t.y
        } : o.getRelativePosition(t, e)
      }

      function l(t, e) {
        var i, n, o, r, a;
        for (n = 0, r = t.data.datasets.length; n < r; ++n)
          if (t.isDatasetVisible(n))
            for (o = 0, a = (i = t.getDatasetMeta(n)).data.length; o < a; ++o) {
              var s = i.data[o];
              s._view.skip || e(s)
            }
      }

      function c(t, e) {
        var i = [];
        return l(t, function(t) {
          t.inRange(e.x, e.y) && i.push(t)
        }), i
      }

      function u(t, n, o, r) {
        var a = Number.POSITIVE_INFINITY,
          s = [];
        return l(t, function(t) {
          if (!o || t.inRange(n.x, n.y)) {
            var e = t.getCenterPoint(),
              i = r(n, e);
            i < a ? (s = [t], a = i) : i === a && s.push(t)
          }
        }), s
      }

      function h(t) {
        var o = -1 !== t.indexOf("x"),
          r = -1 !== t.indexOf("y");
        return function(t, e) {
          var i = o ? Math.abs(t.x - e.x) : 0,
            n = r ? Math.abs(t.y - e.y) : 0;
          return Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))
        }
      }

      function n(n, t, e) {
        var i = s(t, n);
        e.axis = e.axis || "x";
        var o = h(e.axis),
          r = e.intersect ? c(n, i) : u(n, i, !1, o),
          a = [];
        return r.length ? (n.data.datasets.forEach(function(t, e) {
          if (n.isDatasetVisible(e)) {
            var i = n.getDatasetMeta(e).data[r[0]._index];
            i && !i._view.skip && a.push(i)
          }
        }), a) : []
      }
      var o = t(45);
      e.exports = {
        modes: {
          single: function(t, e) {
            var i = s(e, t),
              n = [];
            return l(t, function(t) {
              if (t.inRange(i.x, i.y)) return n.push(t), n
            }), n.slice(0, 1)
          },
          label: n,
          index: n,
          dataset: function(t, e, i) {
            var n = s(e, t);
            i.axis = i.axis || "xy";
            var o = h(i.axis),
              r = i.intersect ? c(t, n) : u(t, n, !1, o);
            return 0 < r.length && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
          },
          "x-axis": function(t, e) {
            return n(t, e, {
              intersect: !0
            })
          },
          point: function(t, e) {
            return c(t, s(e, t))
          },
          nearest: function(t, e, i) {
            var n = s(e, t);
            i.axis = i.axis || "xy";
            var o = h(i.axis),
              r = u(t, n, i.intersect, o);
            return 1 < r.length && r.sort(function(t, e) {
              var i = t.getArea() - e.getArea();
              return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
            }), r.slice(0, 1)
          },
          x: function(t, e, i) {
            var n = s(e, t),
              o = [],
              r = !1;
            return l(t, function(t) {
              t.inXRange(n.x) && o.push(t), t.inRange(n.x, n.y) && (r = !0)
            }), i.intersect && !r && (o = []), o
          },
          y: function(t, e, i) {
            var n = s(e, t),
              o = [],
              r = !1;
            return l(t, function(t) {
              t.inYRange(n.y) && o.push(t), t.inRange(n.x, n.y) && (r = !0)
            }), i.intersect && !r && (o = []), o
          }
        }
      }
    }, {
      45: 45
    }],
    29: [function(t, e, i) {
      "use strict";
      t(25)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), e.exports = function() {
        var t = function(t, e) {
          return this.construct(t, e), this
        };
        return t.Chart = t
      }
    }, {
      25: 25
    }],
    30: [function(t, e, i) {
      "use strict";
      var H = t(45);
      e.exports = function(t) {
        function R(t, e) {
          return H.where(t, function(t) {
            return t.position === e
          })
        }

        function B(t, o) {
          t.forEach(function(t, e) {
            return t._tmpIndex_ = e, t
          }), t.sort(function(t, e) {
            var i = o ? e : t,
              n = o ? t : e;
            return i.weight === n.weight ? i._tmpIndex_ - n._tmpIndex_ : i.weight - n.weight
          }), t.forEach(function(t) {
            delete t._tmpIndex_
          })
        }
        t.layoutService = {
          defaults: {},
          addBox: function(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
          },
          removeBox: function(t, e) {
            var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
          },
          configure: function(t, e, i) {
            for (var n, o = ["fullWidth", "position", "weight"], r = o.length, a = 0; a < r; ++a) n = o[a], i.hasOwnProperty(n) && (e[n] = i[n])
          },
          update: function(e, i, t) {
            function n(e) {
              var t = H.findNextWhere(S, function(t) {
                return t.box === e
              });
              if (t)
                if (e.isHorizontal()) {
                  var i = {
                    left: Math.max(A, T),
                    right: Math.max(P, C),
                    top: 0,
                    bottom: 0
                  };
                  e.update(e.fullWidth ? v : w, m / 2, i)
                } else e.update(t.minSize.width, k)
            }

            function o(t) {
              t.isHorizontal() ? (t.left = t.fullWidth ? s : A, t.right = t.fullWidth ? i - l : A + w, t.top = L, t.bottom = L + t.height, L = t.bottom) : (t.left = N, t.right = N + t.width, t.top = j, t.bottom = j + k, N = t.right)
            }
            if (e) {
              var r = e.options.layout || {},
                a = H.options.toPadding(r.padding),
                s = a.left,
                l = a.right,
                c = a.top,
                u = a.bottom,
                h = R(e.boxes, "left"),
                d = R(e.boxes, "right"),
                f = R(e.boxes, "top"),
                p = R(e.boxes, "bottom"),
                g = R(e.boxes, "chartArea");
              B(h, !0), B(d, !1), B(f, !0), B(p, !1);
              var v = i - s - l,
                m = t - c - u,
                y = m / 2,
                b = (i - v / 2) / (h.length + d.length),
                x = (t - y) / (f.length + p.length),
                w = v,
                k = m,
                S = [];
              H.each(h.concat(d, f, p), function(t) {
                var e, i = t.isHorizontal();
                i ? (e = t.update(t.fullWidth ? v : w, x), k -= e.height) : (e = t.update(b, y), w -= e.width), S.push({
                  horizontal: i,
                  minSize: e,
                  box: t
                })
              });
              var T = 0,
                C = 0,
                _ = 0,
                M = 0;
              H.each(f.concat(p), function(t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  T = Math.max(T, e.left), C = Math.max(C, e.right)
                }
              }), H.each(h.concat(d), function(t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  _ = Math.max(_, e.top), M = Math.max(M, e.bottom)
                }
              });
              var A = s,
                P = l,
                j = c,
                I = u;
              H.each(h.concat(d), n), H.each(h, function(t) {
                A += t.width
              }), H.each(d, function(t) {
                P += t.width
              }), H.each(f.concat(p), n), H.each(f, function(t) {
                j += t.height
              }), H.each(p, function(t) {
                I += t.height
              }), H.each(h.concat(d), function(e) {
                var t = H.findNextWhere(S, function(t) {
                    return t.box === e
                  }),
                  i = {
                    left: 0,
                    right: 0,
                    top: j,
                    bottom: I
                  };
                t && e.update(t.minSize.width, k, i)
              }), A = s, P = l, j = c, I = u, H.each(h, function(t) {
                A += t.width
              }), H.each(d, function(t) {
                P += t.width
              }), H.each(f, function(t) {
                j += t.height
              }), H.each(p, function(t) {
                I += t.height
              });
              var D = Math.max(T - A, 0);
              A += D, P += Math.max(C - P, 0);
              var E = Math.max(_ - j, 0);
              j += E, I += Math.max(M - I, 0);
              var O = t - j - I,
                F = i - A - P;
              F === w && O === k || (H.each(h, function(t) {
                t.height = O
              }), H.each(d, function(t) {
                t.height = O
              }), H.each(f, function(t) {
                t.fullWidth || (t.width = F)
              }), H.each(p, function(t) {
                t.fullWidth || (t.width = F)
              }), k = O, w = F);
              var N = s + D,
                L = c + E;
              H.each(h.concat(f), o), N += w, L += k, H.each(d, o), H.each(p, o), e.chartArea = {
                left: A,
                top: j,
                right: A + w,
                bottom: j + k
              }, H.each(g, function(t) {
                t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(w, k)
              })
            }
          }
        }
      }
    }, {
      45: 45
    }],
    31: [function(t, e, i) {
      "use strict";
      var a = t(25),
        n = t(26),
        s = t(45);
      a._set("global", {
        plugins: {}
      }), e.exports = function(t) {
        t.plugins = {
          _plugins: [],
          _cacheId: 0,
          register: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
              -1 === e.indexOf(t) && e.push(t)
            }), this._cacheId++
          },
          unregister: function(t) {
            var i = this._plugins;
            [].concat(t).forEach(function(t) {
              var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
            }), this._cacheId++
          },
          clear: function() {
            this._plugins = [], this._cacheId++
          },
          count: function() {
            return this._plugins.length
          },
          getAll: function() {
            return this._plugins
          },
          notify: function(t, e, i) {
            var n, o, r, a, s, l = this.descriptors(t),
              c = l.length;
            for (n = 0; n < c; ++n)
              if ("function" == typeof(s = (r = (o = l[n]).plugin)[e]) && ((a = [t].concat(i || [])).push(o.options), !1 === s.apply(r, a))) return !1;
            return !0
          },
          descriptors: function(t) {
            var e = t._plugins || (t._plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
              o = [],
              i = t && t.config || {},
              r = i.options && i.options.plugins || {};
            return this._plugins.concat(i.plugins || []).forEach(function(t) {
              if (-1 === n.indexOf(t)) {
                var e = t.id,
                  i = r[e];
                !1 !== i && (!0 === i && (i = s.clone(a.global.plugins[e])), n.push(t), o.push({
                  plugin: t,
                  options: i || {}
                }))
              }
            }), e.descriptors = o, e.id = this._cacheId, o
          }
        }, t.pluginService = t.plugins, t.PluginBase = n.extend({})
      }
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    32: [function(t, e, i) {
      "use strict";

      function T(t) {
        var e, i, n = [];
        for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
        return n
      }

      function W(t, e, i) {
        var n = t.getPixelForTick(e);
        return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
      }
      var x = t(25),
        n = t(26),
        z = t(45),
        o = t(34);
      x._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: o.formatters.values,
          minor: {},
          major: {}
        }
      }), e.exports = function(t) {
        function w(t, e, i) {
          return z.isArray(e) ? z.longestText(t, i, e) : t.measureText(e).width
        }

        function k(t) {
          var e = z.valueOrDefault,
            i = x.global,
            n = e(t.fontSize, i.defaultFontSize),
            o = e(t.fontStyle, i.defaultFontStyle),
            r = e(t.fontFamily, i.defaultFontFamily);
          return {
            size: n,
            style: o,
            family: r,
            font: z.fontString(n, o, r)
          }
        }

        function S(t) {
          return z.options.toLineHeight(z.valueOrDefault(t.lineHeight, 1.2), z.valueOrDefault(t.fontSize, x.global.defaultFontSize))
        }
        t.Scale = n.extend({
          getPadding: function() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0
            }
          },
          getTicks: function() {
            return this._ticks
          },
          mergeTicksOptions: function() {
            var t = this.options.ticks;
            for (var e in !1 === t.minor && (t.minor = {
                display: !1
              }), !1 === t.major && (t.major = {
                display: !1
              }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
          },
          beforeUpdate: function() {
            z.callback(this.options.beforeUpdate, [this])
          },
          update: function(t, e, i) {
            var n, o, r, a, s, l, c = this;
            for (c.beforeUpdate(), c.maxWidth = t, c.maxHeight = e, c.margins = z.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }, i), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), s = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), r = c.convertTicksToLabels(s) || c.ticks, c.afterTickToLabelConversion(), n = 0, o = (c.ticks = r).length; n < o; ++n) a = r[n], (l = s[n]) ? l.label = a : s.push(l = {
              label: a,
              major: !1
            });
            return c._ticks = s, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize
          },
          afterUpdate: function() {
            z.callback(this.options.afterUpdate, [this])
          },
          beforeSetDimensions: function() {
            z.callback(this.options.beforeSetDimensions, [this])
          },
          setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
          },
          afterSetDimensions: function() {
            z.callback(this.options.afterSetDimensions, [this])
          },
          beforeDataLimits: function() {
            z.callback(this.options.beforeDataLimits, [this])
          },
          determineDataLimits: z.noop,
          afterDataLimits: function() {
            z.callback(this.options.afterDataLimits, [this])
          },
          beforeBuildTicks: function() {
            z.callback(this.options.beforeBuildTicks, [this])
          },
          buildTicks: z.noop,
          afterBuildTicks: function() {
            z.callback(this.options.afterBuildTicks, [this])
          },
          beforeTickToLabelConversion: function() {
            z.callback(this.options.beforeTickToLabelConversion, [this])
          },
          convertTicksToLabels: function() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
          },
          afterTickToLabelConversion: function() {
            z.callback(this.options.afterTickToLabelConversion, [this])
          },
          beforeCalculateTickRotation: function() {
            z.callback(this.options.beforeCalculateTickRotation, [this])
          },
          calculateTickRotation: function() {
            var t = this,
              e = t.ctx,
              i = t.options.ticks,
              n = T(t._ticks),
              o = k(i);
            e.font = o.font;
            var r = i.minRotation || 0;
            if (n.length && t.options.display && t.isHorizontal())
              for (var a, s = z.longestText(e, o.font, n, t.longestTextCache), l = s, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c < l && r < i.maxRotation;) {
                var u = z.toRadians(r);
                if (a = Math.cos(u), Math.sin(u) * s > t.maxHeight) {
                  r--;
                  break
                }
                r++, l = a * s
              }
            t.labelRotation = r
          },
          afterCalculateTickRotation: function() {
            z.callback(this.options.afterCalculateTickRotation, [this])
          },
          beforeFit: function() {
            z.callback(this.options.beforeFit, [this])
          },
          fit: function() {
            var t = this,
              e = t.minSize = {
                width: 0,
                height: 0
              },
              i = T(t._ticks),
              n = t.options,
              o = n.ticks,
              r = n.scaleLabel,
              a = n.gridLines,
              s = n.display,
              l = t.isHorizontal(),
              c = k(o),
              u = n.gridLines.tickMarkLength;
            if (e.width = l ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && a.drawTicks ? u : 0, e.height = l ? s && a.drawTicks ? u : 0 : t.maxHeight, r.display && s) {
              var h = S(r) + z.options.toPadding(r.padding).height;
              l ? e.height += h : e.width += h
            }
            if (o.display && s) {
              var d = z.longestText(t.ctx, c.font, i, t.longestTextCache),
                f = z.numberOfLabelLines(i),
                p = .5 * c.size,
                g = t.options.ticks.padding;
              if (l) {
                t.longestLabelWidth = d;
                var v = z.toRadians(t.labelRotation),
                  m = Math.cos(v),
                  y = Math.sin(v) * d + c.size * f + p * (f - 1) + p;
                e.height = Math.min(t.maxHeight, e.height + y + g), t.ctx.font = c.font;
                var b = w(t.ctx, i[0], c.font),
                  x = w(t.ctx, i[i.length - 1], c.font);
                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === n.position ? m * b + 3 : m * p + 3, t.paddingRight = "bottom" === n.position ? m * p + 3 : m * x + 3) : (t.paddingLeft = b / 2 + 3, t.paddingRight = x / 2 + 3)
              } else o.mirror ? d = 0 : d += g + p, e.width = Math.min(t.maxWidth, e.width + d), t.paddingTop = c.size / 2, t.paddingBottom = c.size / 2
            }
            t.handleMargins(), t.width = e.width, t.height = e.height
          },
          handleMargins: function() {
            var t = this;
            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
          },
          afterFit: function() {
            z.callback(this.options.afterFit, [this])
          },
          isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
          },
          isFullWidth: function() {
            return this.options.fullWidth
          },
          getRightValue: function(t) {
            if (z.isNullOrUndef(t)) return NaN;
            if ("number" == typeof t && !isFinite(t)) return NaN;
            if (t)
              if (this.isHorizontal()) {
                if (void 0 !== t.x) return this.getRightValue(t.x)
              } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t
          },
          getLabelForIndex: z.noop,
          getPixelForValue: z.noop,
          getValueForPixel: z.noop,
          getPixelForTick: function(t) {
            var e = this,
              i = e.options.offset;
            if (e.isHorizontal()) {
              var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                o = n * t + e.paddingLeft;
              return i && (o += n / 2), e.left + Math.round(o) + (e.isFullWidth() ? e.margins.left : 0)
            }
            var r = e.height - (e.paddingTop + e.paddingBottom);
            return e.top + t * (r / (e._ticks.length - 1))
          },
          getPixelForDecimal: function(t) {
            var e = this;
            if (e.isHorizontal()) {
              var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft;
              return e.left + Math.round(i) + (e.isFullWidth() ? e.margins.left : 0)
            }
            return e.top + t * e.height
          },
          getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue())
          },
          getBaseValue: function() {
            var t = this.min,
              e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
          },
          _autoSkip: function(t) {
            var e, i, n, o, r = this,
              a = r.isHorizontal(),
              s = r.options.ticks.minor,
              l = t.length,
              c = z.toRadians(r.labelRotation),
              u = Math.cos(c),
              h = r.longestLabelWidth * u,
              d = [];
            for (s.maxTicksLimit && (o = s.maxTicksLimit), a && (e = !1, (h + s.autoSkipPadding) * l > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + s.autoSkipPadding) * l / (r.width - (r.paddingLeft + r.paddingRight)))), o && o < l && (e = Math.max(e, Math.floor(l / o)))), i = 0; i < l; i++) n = t[i], ((1 < e && 0 < i % e || i % e == 0 && l <= i + e) && i !== l - 1 || z.isNullOrUndef(n.label)) && delete n.label, d.push(n);
            return d
          },
          draw: function(C) {
            var _ = this,
              M = _.options;
            if (M.display) {
              var o = _.ctx,
                A = x.global,
                P = M.ticks.minor,
                t = M.ticks.major || P,
                j = M.gridLines,
                e = M.scaleLabel,
                I = 0 !== _.labelRotation,
                D = _.isHorizontal(),
                E = P.autoSkip ? _._autoSkip(_.getTicks()) : _.getTicks(),
                r = z.valueOrDefault(P.fontColor, A.defaultFontColor),
                a = k(P),
                s = z.valueOrDefault(t.fontColor, A.defaultFontColor),
                l = k(t),
                O = j.drawTicks ? j.tickMarkLength : 0,
                i = z.valueOrDefault(e.fontColor, A.defaultFontColor),
                n = k(e),
                c = z.options.toPadding(e.padding),
                F = z.toRadians(_.labelRotation),
                N = [],
                L = "right" === M.position ? _.left : _.right - O,
                R = "right" === M.position ? _.left + O : _.right,
                B = "bottom" === M.position ? _.top : _.bottom - O,
                H = "bottom" === M.position ? _.top + O : _.bottom;
              if (z.each(E, function(t, e) {
                  if (void 0 !== t.label) {
                    var i, n, o, r, a = t.label;
                    r = e === _.zeroLineIndex && M.offset === j.offsetGridLines ? (i = j.zeroLineWidth, n = j.zeroLineColor, o = j.zeroLineBorderDash, j.zeroLineBorderDashOffset) : (i = z.valueAtIndexOrDefault(j.lineWidth, e), n = z.valueAtIndexOrDefault(j.color, e), o = z.valueOrDefault(j.borderDash, A.borderDash), z.valueOrDefault(j.borderDashOffset, A.borderDashOffset));
                    var s, l, c, u, h, d, f, p, g, v, m = "middle",
                      y = "middle",
                      b = P.padding;
                    if (D) {
                      var x = O + b;
                      v = "bottom" === M.position ? (y = I ? "middle" : "top", m = I ? "right" : "center", _.top + x) : (y = I ? "middle" : "bottom", m = I ? "left" : "center", _.bottom - x);
                      var w = W(_, e, j.offsetGridLines && 1 < E.length);
                      w < _.left && (n = "rgba(0,0,0,0)"), w += z.aliasPixel(i), g = _.getPixelForTick(e) + P.labelOffset, s = c = h = f = w, l = B, u = H, d = C.top, p = C.bottom
                    } else {
                      var k, S = "left" === M.position;
                      k = P.mirror ? (m = S ? "left" : "right", b) : (m = S ? "right" : "left", O + b), g = S ? _.right - k : _.left + k;
                      var T = W(_, e, j.offsetGridLines && 1 < E.length);
                      T < _.top && (n = "rgba(0,0,0,0)"), T += z.aliasPixel(i), v = _.getPixelForTick(e) + P.labelOffset, s = L, c = R, h = C.left, f = C.right, l = u = d = p = T
                    }
                    N.push({
                      tx1: s,
                      ty1: l,
                      tx2: c,
                      ty2: u,
                      x1: h,
                      y1: d,
                      x2: f,
                      y2: p,
                      labelX: g,
                      labelY: v,
                      glWidth: i,
                      glColor: n,
                      glBorderDash: o,
                      glBorderDashOffset: r,
                      rotation: -1 * F,
                      label: a,
                      major: t.major,
                      textBaseline: y,
                      textAlign: m
                    })
                  }
                }), z.each(N, function(t) {
                  if (j.display && (o.save(), o.lineWidth = t.glWidth, o.strokeStyle = t.glColor, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), j.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), j.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), P.display) {
                    o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = t.major ? l.font : a.font, o.fillStyle = t.major ? s : r, o.textBaseline = t.textBaseline, o.textAlign = t.textAlign;
                    var e = t.label;
                    if (z.isArray(e))
                      for (var i = 0, n = 0; i < e.length; ++i) o.fillText("" + e[i], 0, n), n += 1.5 * a.size;
                    else o.fillText(e, 0, 0);
                    o.restore()
                  }
                }), e.display) {
                var u, h, d = 0,
                  f = S(e) / 2;
                if (D) u = _.left + (_.right - _.left) / 2, h = "bottom" === M.position ? _.bottom - f - c.bottom : _.top + f + c.top;
                else {
                  var p = "left" === M.position;
                  u = p ? _.left + f + c.top : _.right - f - c.top, h = _.top + (_.bottom - _.top) / 2, d = p ? -.5 * Math.PI : .5 * Math.PI
                }
                o.save(), o.translate(u, h), o.rotate(d), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = i, o.font = n.font, o.fillText(e.labelString, 0, 0), o.restore()
              }
              if (j.drawBorder) {
                o.lineWidth = z.valueAtIndexOrDefault(j.lineWidth, 0), o.strokeStyle = z.valueAtIndexOrDefault(j.color, 0);
                var g = _.left,
                  v = _.right,
                  m = _.top,
                  y = _.bottom,
                  b = z.aliasPixel(o.lineWidth);
                D ? (m = y = "top" === M.position ? _.bottom : _.top, m += b, y += b) : (g = v = "left" === M.position ? _.right : _.left, g += b, v += b), o.beginPath(), o.moveTo(g, m), o.lineTo(v, y), o.stroke()
              }
            }
          }
        })
      }
    }, {
      25: 25,
      26: 26,
      34: 34,
      45: 45
    }],
    33: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(45);
      e.exports = function(i) {
        i.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function(t, e, i) {
            this.constructors[t] = e, this.defaults[t] = o.clone(i)
          },
          getScaleConstructor: function(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
          },
          getScaleDefaults: function(t) {
            return this.defaults.hasOwnProperty(t) ? o.merge({}, [n.scale, this.defaults[t]]) : {}
          },
          updateScaleDefaults: function(t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = o.extend(this.defaults[t], e))
          },
          addScalesToLayout: function(e) {
            o.each(e.scales, function(t) {
              t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, i.layoutService.addBox(e, t)
            })
          }
        }
      }
    }, {
      25: 25,
      45: 45
    }],
    34: [function(t, e, i) {
      "use strict";
      var u = t(45);
      e.exports = {
        generators: {
          linear: function(t, e) {
            var i, n = [];
            if (t.stepSize && 0 < t.stepSize) i = t.stepSize;
            else {
              var o = u.niceNum(e.max - e.min, !1);
              i = u.niceNum(o / (t.maxTicks - 1), !0)
            }
            var r = Math.floor(e.min / i) * i,
              a = Math.ceil(e.max / i) * i;
            t.min && t.max && t.stepSize && u.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, a = t.max);
            var s = (a - r) / i;
            s = u.almostEquals(s, Math.round(s), i / 1e3) ? Math.round(s) : Math.ceil(s), n.push(void 0 !== t.min ? t.min : r);
            for (var l = 1; l < s; ++l) n.push(r + l * i);
            return n.push(void 0 !== t.max ? t.max : a), n
          },
          logarithmic: function(t, e) {
            var i, n, o = [],
              r = u.valueOrDefault,
              a = r(t.min, Math.pow(10, Math.floor(u.log10(e.min)))),
              s = Math.floor(u.log10(e.max)),
              l = Math.ceil(e.max / Math.pow(10, s));
            for (0 === a ? (i = Math.floor(u.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(a), a = n * Math.pow(10, i)) : (i = Math.floor(u.log10(a)), n = Math.floor(a / Math.pow(10, i))); o.push(a), 10 == ++n && (n = 1, ++i), a = n * Math.pow(10, i), i < s || i === s && n < l;);
            var c = r(t.max, a);
            return o.push(c), o
          }
        },
        formatters: {
          values: function(t) {
            return u.isArray(t) ? t : "" + t
          },
          linear: function(t, e, i) {
            var n = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
            1 < Math.abs(n) && t !== Math.floor(t) && (n = t - Math.floor(t));
            var o = u.log10(Math.abs(n)),
              r = "";
            if (0 !== t) {
              var a = -1 * Math.floor(o);
              a = Math.max(Math.min(a, 20), 0), r = t.toFixed(a)
            } else r = "0";
            return r
          },
          logarithmic: function(t, e, i) {
            var n = t / Math.pow(10, Math.floor(u.log10(t)));
            return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
          }
        }
      }
    }, {
      45: 45
    }],
    35: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(26),
        F = t(45);
      n._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: F.noop,
            title: function(t, e) {
              var i = "",
                n = e.labels,
                o = n ? n.length : 0;
              if (0 < t.length) {
                var r = t[0];
                r.xLabel ? i = r.xLabel : 0 < o && r.index < o && (i = n[r.index])
              }
              return i
            },
            afterTitle: F.noop,
            beforeBody: F.noop,
            beforeLabel: F.noop,
            label: function(t, e) {
              var i = e.datasets[t.datasetIndex].label || "";
              return i && (i += ": "), i + t.yLabel
            },
            labelColor: function(t, e) {
              var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
              return {
                borderColor: i.borderColor,
                backgroundColor: i.backgroundColor
              }
            },
            labelTextColor: function() {
              return this._options.bodyFontColor
            },
            afterLabel: F.noop,
            afterBody: F.noop,
            beforeFooter: F.noop,
            footer: F.noop,
            afterFooter: F.noop
          }
        }
      }), e.exports = function(E) {
        function d(t, e) {
          var i = F.color(t);
          return i.alpha(e * i.alpha()).rgbaString()
        }

        function a(t, e) {
          return e && (F.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }

        function O(t) {
          var e = n.global,
            i = F.valueOrDefault;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: i(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: i(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
          }
        }
        E.Tooltip = o.extend({
          initialize: function() {
            this._model = O(this._options)
          },
          getTitle: function() {
            var t = this._options.callbacks,
              e = t.beforeTitle.apply(this, arguments),
              i = t.title.apply(this, arguments),
              n = t.afterTitle.apply(this, arguments),
              o = [];
            return a(o = a(o = a(o, e), i), n)
          },
          getBeforeBody: function() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);
            return F.isArray(t) ? t : void 0 !== t ? [t] : []
          },
          getBody: function(t, i) {
            var n = this,
              o = n._options.callbacks,
              r = [];
            return F.each(t, function(t) {
              var e = {
                before: [],
                lines: [],
                after: []
              };
              a(e.before, o.beforeLabel.call(n, t, i)), a(e.lines, o.label.call(n, t, i)), a(e.after, o.afterLabel.call(n, t, i)), r.push(e)
            }), r
          },
          getAfterBody: function() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);
            return F.isArray(t) ? t : void 0 !== t ? [t] : []
          },
          getFooter: function() {
            var t = this._options.callbacks,
              e = t.beforeFooter.apply(this, arguments),
              i = t.footer.apply(this, arguments),
              n = t.afterFooter.apply(this, arguments),
              o = [];
            return a(o = a(o = a(o, e), i), n)
          },
          update: function(t) {
            var e, i, n, o, r, a, s, l, c, u, h, d, f, p, g, v, m, y, b, x = this,
              w = x._options,
              k = x._model,
              S = x._model = O(w),
              T = x._active,
              C = x._data,
              _ = {
                xAlign: k.xAlign,
                yAlign: k.yAlign
              },
              M = {
                x: k.x,
                y: k.y
              },
              A = {
                width: k.width,
                height: k.height
              },
              P = {
                x: k.caretX,
                y: k.caretY
              };
            if (T.length) {
              S.opacity = 1;
              var j = [],
                I = [];
              P = E.Tooltip.positioners[w.position](T, x._eventPosition);
              var D = [];
              for (e = 0, i = T.length; e < i; ++e) D.push((g = T[e], m = v = void 0, v = g._xScale, m = g._yScale || g._scale, y = g._index, b = g._datasetIndex, {
                xLabel: v ? v.getLabelForIndex(y, b) : "",
                yLabel: m ? m.getLabelForIndex(y, b) : "",
                index: y,
                datasetIndex: b,
                x: g._model.x,
                y: g._model.y
              }));
              w.filter && (D = D.filter(function(t) {
                return w.filter(t, C)
              })), w.itemSort && (D = D.sort(function(t, e) {
                return w.itemSort(t, e, C)
              })), F.each(D, function(t) {
                j.push(w.callbacks.labelColor.call(x, t, x._chart)), I.push(w.callbacks.labelTextColor.call(x, t, x._chart))
              }), S.title = x.getTitle(D, C), S.beforeBody = x.getBeforeBody(D, C), S.body = x.getBody(D, C), S.afterBody = x.getAfterBody(D, C), S.footer = x.getFooter(D, C), S.x = Math.round(P.x), S.y = Math.round(P.y), S.caretPadding = w.caretPadding, S.labelColors = j, S.labelTextColors = I, S.dataPoints = D, o = A = function(t, e) {
                var i = t._chart.ctx,
                  n = 2 * e.yPadding,
                  o = 0,
                  r = e.body,
                  a = r.reduce(function(t, e) {
                    return t + e.before.length + e.lines.length + e.after.length
                  }, 0);
                a += e.beforeBody.length + e.afterBody.length;
                var s = e.title.length,
                  l = e.footer.length,
                  c = e.titleFontSize,
                  u = e.bodyFontSize,
                  h = e.footerFontSize;
                n += s * c, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += a * u, n += a ? (a - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;
                var d = 0,
                  f = function(t) {
                    o = Math.max(o, i.measureText(t).width + d)
                  };
                return i.font = F.fontString(c, e._titleFontStyle, e._titleFontFamily), F.each(e.title, f), i.font = F.fontString(u, e._bodyFontStyle, e._bodyFontFamily), F.each(e.beforeBody.concat(e.afterBody), f), d = e.displayColors ? u + 2 : 0, F.each(r, function(t) {
                  F.each(t.before, f), F.each(t.lines, f), F.each(t.after, f)
                }), d = 0, i.font = F.fontString(h, e._footerFontStyle, e._footerFontFamily), F.each(e.footer, f), {
                  width: o += 2 * e.xPadding,
                  height: n
                }
              }(this, n = S), r = _ = function(t, e) {
                var i = t._model,
                  n = t._chart,
                  o = t._chart.chartArea,
                  r = "center",
                  a = "center";
                i.y < e.height ? a = "top" : i.y > n.height - e.height && (a = "bottom");
                var s, l, c, u, h, d = (o.left + o.right) / 2,
                  f = (o.top + o.bottom) / 2;
                l = "center" === a ? (s = function(t) {
                  return t <= d
                }, function(t) {
                  return d < t
                }) : (s = function(t) {
                  return t <= e.width / 2
                }, function(t) {
                  return t >= n.width - e.width / 2
                }), c = function(t) {
                  return t + e.width > n.width
                }, u = function(t) {
                  return t - e.width < 0
                }, h = function(t) {
                  return t <= f ? "top" : "bottom"
                }, s(i.x) ? (r = "left", c(i.x) && (r = "center", a = h(i.y))) : l(i.x) && (r = "right", u(i.x) && (r = "center", a = h(i.y)));
                var p = t._options;
                return {
                  xAlign: p.xAlign ? p.xAlign : r,
                  yAlign: p.yAlign ? p.yAlign : a
                }
              }(this, A), a = n.x, s = n.y, l = n.caretSize, c = n.caretPadding, u = n.cornerRadius, h = r.xAlign, d = r.yAlign, f = l + c, p = u + c, "right" === h ? a -= o.width : "center" === h && (a -= o.width / 2), "top" === d ? s += f : s -= "bottom" === d ? o.height + f : o.height / 2, "center" === d ? "left" === h ? a += f : "right" === h && (a -= f) : "left" === h ? a -= p : "right" === h && (a += p), M = {
                x: a,
                y: s
              }
            } else S.opacity = 0;
            return S.xAlign = _.xAlign, S.yAlign = _.yAlign, S.x = M.x, S.y = M.y, S.width = A.width, S.height = A.height, S.caretX = P.x, S.caretY = P.y, x._model = S, t && w.custom && w.custom.call(x, S), x
          },
          drawCaret: function(t, e) {
            var i = this._chart.ctx,
              n = this._view,
              o = this.getCaretPosition(t, e, n);
            i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3)
          },
          getCaretPosition: function(t, e, i) {
            var n, o, r, a, s, l, c = i.caretSize,
              u = i.cornerRadius,
              h = i.xAlign,
              d = i.yAlign,
              f = t.x,
              p = t.y,
              g = e.width,
              v = e.height;
            if ("center" === d) s = p + v / 2, l = "left" === h ? (o = (n = f) - c, r = n, a = s + c, s - c) : (o = (n = f + g) + c, r = n, a = s - c, s + c);
            else if (r = (n = "left" === h ? (o = f + u + c) - c : "right" === h ? (o = f + g - u - c) - c : (o = f + g / 2) - c, o + c), "top" === d) s = (a = p) - c, l = a;
            else {
              s = (a = p + v) + c, l = a;
              var m = r;
              r = n, n = m
            }
            return {
              x1: n,
              x2: o,
              x3: r,
              y1: a,
              y2: s,
              y3: l
            }
          },
          drawTitle: function(t, e, i, n) {
            var o = e.title;
            if (o.length) {
              i.textAlign = e._titleAlign, i.textBaseline = "top";
              var r, a, s = e.titleFontSize,
                l = e.titleSpacing;
              for (i.fillStyle = d(e.titleFontColor, n), i.font = F.fontString(s, e._titleFontStyle, e._titleFontFamily), r = 0, a = o.length; r < a; ++r) i.fillText(o[r], t.x, t.y), t.y += s + l, r + 1 === o.length && (t.y += e.titleMarginBottom - l)
            }
          },
          drawBody: function(n, o, r, a) {
            var s = o.bodyFontSize,
              e = o.bodySpacing,
              t = o.body;
            r.textAlign = o._bodyAlign, r.textBaseline = "top", r.font = F.fontString(s, o._bodyFontStyle, o._bodyFontFamily);
            var i = 0,
              l = function(t) {
                r.fillText(t, n.x + i, n.y), n.y += s + e
              };
            F.each(o.beforeBody, l);
            var c = o.displayColors;
            i = c ? s + 2 : 0, F.each(t, function(t, i) {
              F.each(t.before, l), F.each(t.lines, function(t) {
                if (c) {
                  r.fillStyle = d(o.legendColorBackground, a), r.fillRect(n.x, n.y, s, s), r.lineWidth = 1, r.strokeStyle = d(o.labelColors[i].borderColor, a), r.strokeRect(n.x, n.y, s, s), r.fillStyle = d(o.labelColors[i].backgroundColor, a), r.fillRect(n.x + 1, n.y + 1, s - 2, s - 2);
                  var e = d(o.labelTextColors[i], a);
                  r.fillStyle = e
                }
                l(t)
              }), F.each(t.after, l)
            }), i = 0, F.each(o.afterBody, l), n.y -= e
          },
          drawFooter: function(e, i, n, t) {
            var o = i.footer;
            o.length && (e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = d(i.footerFontColor, t), n.font = F.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), F.each(o, function(t) {
              n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
            }))
          },
          drawBackground: function(t, e, i, n, o) {
            i.fillStyle = d(e.backgroundColor, o), i.strokeStyle = d(e.borderColor, o), i.lineWidth = e.borderWidth;
            var r = e.xAlign,
              a = e.yAlign,
              s = t.x,
              l = t.y,
              c = n.width,
              u = n.height,
              h = e.cornerRadius;
            i.beginPath(), i.moveTo(s + h, l), "top" === a && this.drawCaret(t, n), i.lineTo(s + c - h, l), i.quadraticCurveTo(s + c, l, s + c, l + h), "center" === a && "right" === r && this.drawCaret(t, n), i.lineTo(s + c, l + u - h), i.quadraticCurveTo(s + c, l + u, s + c - h, l + u), "bottom" === a && this.drawCaret(t, n), i.lineTo(s + h, l + u), i.quadraticCurveTo(s, l + u, s, l + u - h), "center" === a && "left" === r && this.drawCaret(t, n), i.lineTo(s, l + h), i.quadraticCurveTo(s, l, s + h, l), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
          },
          draw: function() {
            var t = this._chart.ctx,
              e = this._view;
            if (0 !== e.opacity) {
              var i = {
                  width: e.width,
                  height: e.height
                },
                n = {
                  x: e.x,
                  y: e.y
                },
                o = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
              this._options.enabled && r && (this.drawBackground(n, e, t, i, o), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, o), this.drawBody(n, e, t, o), this.drawFooter(n, e, t, o))
            }
          },
          handleEvent: function(t) {
            var e = this,
              i = e._options,
              n = !1;
            if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, i.mode, i), !(n = !F.arrayEquals(e._active, e._lastActive))) return !1;
            if (e._lastActive = e._active, i.enabled || i.custom) {
              e._eventPosition = {
                x: t.x,
                y: t.y
              };
              var o = e._model;
              e.update(!0), e.pivot(), n |= o.x !== e._model.x || o.y !== e._model.y
            }
            return n
          }
        }), E.Tooltip.positioners = {
          average: function(t) {
            if (!t.length) return !1;
            var e, i, n = 0,
              o = 0,
              r = 0;
            for (e = 0, i = t.length; e < i; ++e) {
              var a = t[e];
              if (a && a.hasValue()) {
                var s = a.tooltipPosition();
                n += s.x, o += s.y, ++r
              }
            }
            return {
              x: Math.round(n / r),
              y: Math.round(o / r)
            }
          },
          nearest: function(t, e) {
            var i, n, o, r = e.x,
              a = e.y,
              s = Number.POSITIVE_INFINITY;
            for (i = 0, n = t.length; i < n; ++i) {
              var l = t[i];
              if (l && l.hasValue()) {
                var c = l.getCenterPoint(),
                  u = F.distanceBetweenPoints(e, c);
                u < s && (s = u, o = l)
              }
            }
            if (o) {
              var h = o.tooltipPosition();
              r = h.x, a = h.y
            }
            return {
              x: r,
              y: a
            }
          }
        }
      }
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    36: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(26),
        u = t(45);
      n._set("global", {
        elements: {
          arc: {
            backgroundColor: n.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), e.exports = o.extend({
        inLabelRange: function(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
        },
        inRange: function(t, e) {
          var i = this._view;
          if (i) {
            for (var n = u.getAngleFromPoint(i, {
                x: t,
                y: e
              }), o = n.angle, r = n.distance, a = i.startAngle, s = i.endAngle; s < a;) s += 2 * Math.PI;
            for (; s < o;) o -= 2 * Math.PI;
            for (; o < a;) o += 2 * Math.PI;
            var l = a <= o && o <= s,
              c = r >= i.innerRadius && r <= i.outerRadius;
            return l && c
          }
          return !1
        },
        getCenterPoint: function() {
          var t = this._view,
            e = (t.startAngle + t.endAngle) / 2,
            i = (t.innerRadius + t.outerRadius) / 2;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          }
        },
        getArea: function() {
          var t = this._view;
          return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
        },
        tooltipPosition: function() {
          var t = this._view,
            e = t.startAngle + (t.endAngle - t.startAngle) / 2,
            i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          }
        },
        draw: function() {
          var t = this._chart.ctx,
            e = this._view,
            i = e.startAngle,
            n = e.endAngle;
          t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
        }
      })
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    37: [function(t, e, i) {
      "use strict";
      var n = t(25),
        o = t(26),
        u = t(45),
        h = n.global;
      n._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: h.defaultColor,
            borderWidth: 3,
            borderColor: h.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), e.exports = o.extend({
        draw: function() {
          var t, e, i, n, o = this._view,
            r = this._chart.ctx,
            a = o.spanGaps,
            s = this._children.slice(),
            l = h.elements.line,
            c = -1;
          for (this._loop && s.length && s.push(s[0]), r.save(), r.lineCap = o.borderCapStyle || l.borderCapStyle, r.setLineDash && r.setLineDash(o.borderDash || l.borderDash), r.lineDashOffset = o.borderDashOffset || l.borderDashOffset, r.lineJoin = o.borderJoinStyle || l.borderJoinStyle, r.lineWidth = o.borderWidth || l.borderWidth, r.strokeStyle = o.borderColor || h.defaultColor, r.beginPath(), c = -1, t = 0; t < s.length; ++t) e = s[t], i = u.previousItem(s, t), n = e._view, 0 === t ? n.skip || (r.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : s[c], n.skip || (c !== t - 1 && !a || -1 === c ? r.moveTo(n.x, n.y) : u.canvas.lineTo(r, i._view, e._view), c = t));
          r.stroke(), r.restore()
        }
      })
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    38: [function(t, e, i) {
      "use strict";

      function n(t) {
        var e = this._view;
        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
      }
      var u = t(25),
        o = t(26),
        h = t(45),
        d = u.global.defaultColor;
      u._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: d,
            borderColor: d,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), e.exports = o.extend({
        inRange: function(t, e) {
          var i = this._view;
          return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
        },
        inLabelRange: n,
        inXRange: n,
        inYRange: function(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
        },
        getCenterPoint: function() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          }
        },
        getArea: function() {
          return Math.PI * Math.pow(this._view.radius, 2)
        },
        tooltipPosition: function() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y,
            padding: t.radius + t.borderWidth
          }
        },
        draw: function(t) {
          var e = this._view,
            i = this._model,
            n = this._chart.ctx,
            o = e.pointStyle,
            r = e.radius,
            a = e.x,
            s = e.y,
            l = h.color,
            c = 0;
          e.skip || (n.strokeStyle = e.borderColor || d, n.lineWidth = h.valueOrDefault(e.borderWidth, u.global.elements.point.borderWidth), n.fillStyle = e.backgroundColor || d, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? c = (a - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? c = (i.x - a) / (i.x - t.right) : i.y < t.top ? c = (s - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (c = (i.y - s) / (i.y - t.bottom)), c = Math.round(100 * c) / 100, n.strokeStyle = l(n.strokeStyle).alpha(c).rgbString(), n.fillStyle = l(n.fillStyle).alpha(c).rgbString()), h.canvas.drawPoint(n, o, r, a, s))
        }
      })
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    39: [function(t, e, i) {
      "use strict";

      function l(t) {
        return void 0 !== t._view.width
      }

      function o(t) {
        var e, i, n, o, r = t._view;
        if (l(t)) {
          var a = r.width / 2;
          e = r.x - a, i = r.x + a, n = Math.min(r.y, r.base), o = Math.max(r.y, r.base)
        } else {
          var s = r.height / 2;
          e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - s, o = r.y + s
        }
        return {
          left: e,
          top: n,
          right: i,
          bottom: o
        }
      }
      var n = t(25),
        r = t(26);
      n._set("global", {
        elements: {
          rectangle: {
            backgroundColor: n.global.defaultColor,
            borderColor: n.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), e.exports = r.extend({
        draw: function() {
          function t(t) {
            return m[(y + t) % 4]
          }
          var e, i, n, o, r, a, s, l = this._chart.ctx,
            c = this._view,
            u = c.borderWidth;
          if (s = c.horizontal ? (e = c.base, i = c.x, n = c.y - c.height / 2, o = c.y + c.height / 2, r = e < i ? 1 : -1, a = 1, c.borderSkipped || "left") : (e = c.x - c.width / 2, i = c.x + c.width / 2, n = c.y, r = 1, a = (o = c.base) > n ? 1 : -1, c.borderSkipped || "bottom"), u) {
            var h = Math.min(Math.abs(e - i), Math.abs(n - o)),
              d = (u = h < u ? h : u) / 2,
              f = e + ("left" !== s ? d * r : 0),
              p = i + ("right" !== s ? -d * r : 0),
              g = n + ("top" !== s ? d * a : 0),
              v = o + ("bottom" !== s ? -d * a : 0);
            f !== p && (n = g, o = v), g !== v && (e = f, i = p)
          }
          l.beginPath(), l.fillStyle = c.backgroundColor, l.strokeStyle = c.borderColor, l.lineWidth = u;
          var m = [
              [e, o],
              [e, n],
              [i, n],
              [i, o]
            ],
            y = ["bottom", "left", "top", "right"].indexOf(s, 0); - 1 === y && (y = 0);
          var b = t(0);
          l.moveTo(b[0], b[1]);
          for (var x = 1; x < 4; x++) b = t(x), l.lineTo(b[0], b[1]);
          l.fill(), u && l.stroke()
        },
        height: function() {
          var t = this._view;
          return t.base - t.y
        },
        inRange: function(t, e) {
          var i = !1;
          if (this._view) {
            var n = o(this);
            i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
          }
          return i
        },
        inLabelRange: function(t, e) {
          if (!this._view) return !1;
          var i = o(this);
          return l(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
        },
        inXRange: function(t) {
          var e = o(this);
          return t >= e.left && t <= e.right
        },
        inYRange: function(t) {
          var e = o(this);
          return t >= e.top && t <= e.bottom
        },
        getCenterPoint: function() {
          var t, e, i = this._view;
          return e = l(this) ? (t = i.x, (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, i.y), {
            x: t,
            y: e
          }
        },
        getArea: function() {
          var t = this._view;
          return t.width * Math.abs(t.y - t.base)
        },
        tooltipPosition: function() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          }
        }
      })
    }, {
      25: 25,
      26: 26
    }],
    40: [function(t, e, i) {
      "use strict";
      e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
    }, {
      36: 36,
      37: 37,
      38: 38,
      39: 39
    }],
    41: [function(t, e, i) {
      "use strict";
      var n = t(42);
      i = e.exports = {
        clear: function(t) {
          t.ctx.clearRect(0, 0, t.width, t.height)
        },
        roundedRect: function(t, e, i, n, o, r) {
          if (r) {
            var a = Math.min(r, n / 2),
              s = Math.min(r, o / 2);
            t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + o - s), t.quadraticCurveTo(e + n, i + o, e + n - a, i + o), t.lineTo(e + a, i + o), t.quadraticCurveTo(e, i + o, e, i + o - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + a, i)
          } else t.rect(e, i, n, o)
        },
        drawPoint: function(t, e, i, n, o) {
          var r, a, s, l, c, u;
          if ("object" != typeof e || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
            if (!(isNaN(i) || i <= 0)) {
              switch (e) {
                default:
                  t.beginPath(), t.arc(n, o, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                  break;
                case "triangle":
                  t.beginPath(), c = (a = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - a / 2, o + c / 3), t.lineTo(n + a / 2, o + c / 3), t.lineTo(n, o - 2 * c / 3), t.closePath(), t.fill();
                  break;
                case "rect":
                  u = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - u, o - u, 2 * u, 2 * u), t.strokeRect(n - u, o - u, 2 * u, 2 * u);
                  break;
                case "rectRounded":
                  var h = i / Math.SQRT2,
                    d = n - h,
                    f = o - h,
                    p = Math.SQRT2 * i;
                  t.beginPath(), this.roundedRect(t, d, f, p, p, i / 2), t.closePath(), t.fill();
                  break;
                case "rectRot":
                  u = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - u, o), t.lineTo(n, o + u), t.lineTo(n + u, o), t.lineTo(n, o - u), t.closePath(), t.fill();
                  break;
                case "cross":
                  t.beginPath(), t.moveTo(n, o + i), t.lineTo(n, o - i), t.moveTo(n - i, o), t.lineTo(n + i, o), t.closePath();
                  break;
                case "crossRot":
                  t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, o - l), t.lineTo(n + s, o + l), t.moveTo(n - s, o + l), t.lineTo(n + s, o - l), t.closePath();
                  break;
                case "star":
                  t.beginPath(), t.moveTo(n, o + i), t.lineTo(n, o - i), t.moveTo(n - i, o), t.lineTo(n + i, o), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, o - l), t.lineTo(n + s, o + l), t.moveTo(n - s, o + l), t.lineTo(n + s, o - l), t.closePath();
                  break;
                case "line":
                  t.beginPath(), t.moveTo(n - i, o), t.lineTo(n + i, o), t.closePath();
                  break;
                case "dash":
                  t.beginPath(), t.moveTo(n, o), t.lineTo(n + i, o), t.closePath()
              }
              t.stroke()
            }
          } else t.drawImage(e, n - e.width / 2, o - e.height / 2, e.width, e.height)
        },
        clipArea: function(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
        },
        unclipArea: function(t) {
          t.restore()
        },
        lineTo: function(t, e, i, n) {
          if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
          i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
        }
      };
      n.clear = i.clear, n.drawRoundedRectangle = function(t) {
        t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath()
      }
    }, {
      42: 42
    }],
    42: [function(t, e, i) {
      "use strict";
      var n, u = {
        noop: function() {},
        uid: (n = 0, function() {
          return n++
        }),
        isNullOrUndef: function(t) {
          return null == t
        },
        isArray: Array.isArray ? Array.isArray : function(t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        },
        isObject: function(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t)
        },
        valueOrDefault: function(t, e) {
          return void 0 === t ? e : t
        },
        valueAtIndexOrDefault: function(t, e, i) {
          return u.valueOrDefault(u.isArray(t) ? t[e] : t, i)
        },
        callback: function(t, e, i) {
          if (t && "function" == typeof t.call) return t.apply(i, e)
        },
        each: function(t, e, i, n) {
          var o, r, a;
          if (u.isArray(t))
            if (r = t.length, n)
              for (o = r - 1; 0 <= o; o--) e.call(i, t[o], o);
            else
              for (o = 0; o < r; o++) e.call(i, t[o], o);
          else if (u.isObject(t))
            for (r = (a = Object.keys(t)).length, o = 0; o < r; o++) e.call(i, t[a[o]], a[o])
        },
        arrayEquals: function(t, e) {
          var i, n, o, r;
          if (!t || !e || t.length !== e.length) return !1;
          for (i = 0, n = t.length; i < n; ++i)
            if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) {
              if (!u.arrayEquals(o, r)) return !1
            } else if (o !== r) return !1;
          return !0
        },
        clone: function(t) {
          if (u.isArray(t)) return t.map(u.clone);
          if (u.isObject(t)) {
            for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) e[i[o]] = u.clone(t[i[o]]);
            return e
          }
          return t
        },
        _merger: function(t, e, i, n) {
          var o = e[t],
            r = i[t];
          u.isObject(o) && u.isObject(r) ? u.merge(o, r, n) : e[t] = u.clone(r)
        },
        _mergerIf: function(t, e, i) {
          var n = e[t],
            o = i[t];
          u.isObject(n) && u.isObject(o) ? u.mergeIf(n, o) : e.hasOwnProperty(t) || (e[t] = u.clone(o))
        },
        merge: function(t, e, i) {
          var n, o, r, a, s, l = u.isArray(e) ? e : [e],
            c = l.length;
          if (!u.isObject(t)) return t;
          for (n = (i = i || {}).merger || u._merger, o = 0; o < c; ++o)
            if (e = l[o], u.isObject(e))
              for (s = 0, a = (r = Object.keys(e)).length; s < a; ++s) n(r[s], t, e, i);
          return t
        },
        mergeIf: function(t, e) {
          return u.merge(t, e, {
            merger: u._mergerIf
          })
        }
      };
      (e.exports = u).callCallback = u.callback, u.indexOf = function(t, e, i) {
        return Array.prototype.indexOf.call(t, e, i)
      }, u.getValueOrDefault = u.valueOrDefault, u.getValueAtIndexOrDefault = u.valueAtIndexOrDefault
    }, {}],
    43: [function(t, e, i) {
      "use strict";
      var n = t(42),
        o = {
          linear: function(t) {
            return t
          },
          easeInQuad: function(t) {
            return t * t
          },
          easeOutQuad: function(t) {
            return -t * (t - 2)
          },
          easeInOutQuad: function(t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
          },
          easeInCubic: function(t) {
            return t * t * t
          },
          easeOutCubic: function(t) {
            return (t -= 1) * t * t + 1
          },
          easeInOutCubic: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
          },
          easeInQuart: function(t) {
            return t * t * t * t
          },
          easeOutQuart: function(t) {
            return -((t -= 1) * t * t * t - 1)
          },
          easeInOutQuart: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
          },
          easeInQuint: function(t) {
            return t * t * t * t * t
          },
          easeOutQuint: function(t) {
            return (t -= 1) * t * t * t * t + 1
          },
          easeInOutQuint: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
          },
          easeInSine: function(t) {
            return 1 - Math.cos(t * (Math.PI / 2))
          },
          easeOutSine: function(t) {
            return Math.sin(t * (Math.PI / 2))
          },
          easeInOutSine: function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
          },
          easeInExpo: function(t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
          },
          easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
          },
          easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
          },
          easeInCirc: function(t) {
            return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
          },
          easeOutCirc: function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
          },
          easeInOutCirc: function(t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
          },
          easeInElastic: function(t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
          },
          easeOutElastic: function(t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
          },
          easeInOutElastic: function(t) {
            var e = 1.70158,
              i = 0,
              n = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
          },
          easeInBack: function(t) {
            return t * t * (2.70158 * t - 1.70158)
          },
          easeOutBack: function(t) {
            return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
          },
          easeInOutBack: function(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
          },
          easeInBounce: function(t) {
            return 1 - o.easeOutBounce(1 - t)
          },
          easeOutBounce: function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
          },
          easeInOutBounce: function(t) {
            return t < .5 ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5
          }
        };
      e.exports = {
        effects: o
      }, n.easingEffects = o
    }, {
      42: 42
    }],
    44: [function(t, e, i) {
      "use strict";
      var a = t(42);
      e.exports = {
        toLineHeight: function(t, e) {
          var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!i || "normal" === i[1]) return 1.2 * e;
          switch (t = +i[2], i[3]) {
            case "px":
              return t;
            case "%":
              t /= 100
          }
          return e * t
        },
        toPadding: function(t) {
          var e, i, n, o;
          return a.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, o = +t.left || 0) : e = i = n = o = +t || 0, {
            top: e,
            right: i,
            bottom: n,
            left: o,
            height: e + n,
            width: o + i
          }
        },
        resolve: function(t, e, i) {
          var n, o, r;
          for (n = 0, o = t.length; n < o; ++n)
            if (void 0 !== (r = t[n]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && a.isArray(r) && (r = r[i]), void 0 !== r)) return r
        }
      }
    }, {
      42: 42
    }],
    45: [function(t, e, i) {
      "use strict";
      e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
    }, {
      41: 41,
      42: 42,
      43: 43,
      44: 44
    }],
    46: [function(t, e, i) {
      e.exports = {
        acquireContext: function(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
        }
      }
    }, {}],
    47: [function(t, e, i) {
      "use strict";

      function s(t, e) {
        var i = p.getStyle(t, e),
          n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? Number(n[1]) : void 0
      }

      function d(t, e, i) {
        t.addEventListener(e, i, o)
      }

      function a(t, e, i) {
        t.removeEventListener(e, i, o)
      }

      function f(t, e, i, n, o) {
        return {
          type: t,
          chart: e,
          native: o || null,
          x: void 0 !== i ? i : null,
          y: void 0 !== n ? n : null
        }
      }

      function n(e, t, i) {
        var n, o, r, a, s, l, c, u = e[g] || (e[g] = {}),
          h = u.resizer = function(t) {
            var e = document.createElement("div"),
              i = v + "size-monitor",
              n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
            e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
            var o = e.childNodes[0],
              r = e.childNodes[1];
            e._reset = function() {
              o.scrollLeft = 1e6, o.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
            };
            var a = function() {
              e._reset(), t()
            };
            return d(o, "scroll", a.bind(o, "expand")), d(r, "scroll", a.bind(r, "shrink")), e
          }((r = !(n = function() {
            if (u.resizer) return t(f("resize", i))
          }), a = [], function() {
            a = Array.prototype.slice.call(arguments), o = o || this, r || (r = !0, p.requestAnimFrame.call(window, function() {
              r = !1, n.apply(o, a)
            }))
          }));
        l = function() {
          if (u.resizer) {
            var t = e.parentNode;
            t && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset()
          }
        }, c = ((s = e)[g] || (s[g] = {})).renderProxy = function(t) {
          t.animationName === y && l()
        }, p.each(b, function(t) {
          d(s, t, c)
        }), s.classList.add(m)
      }

      function r(t) {
        var e, i, n, o = t[g] || {},
          r = o.resizer;
        delete o.resizer, i = (e = t)[g] || {}, (n = i.renderProxy) && (p.each(b, function(t) {
          a(e, t, n)
        }), delete i.renderProxy), e.classList.remove(m), r && r.parentNode && r.parentNode.removeChild(r)
      }
      var p = t(45),
        g = "$chartjs",
        v = "chartjs-",
        m = v + "render-monitor",
        y = v + "render-animation",
        b = ["animationstart", "webkitAnimationStart"],
        l = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout"
        },
        o = !! function() {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function() {
                t = !0
              }
            });
            window.addEventListener("e", null, e)
          } catch (t) {}
          return t
        }() && {
          passive: !0
        };
      e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function() {
          var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
          e = "@-webkit-keyframes " + y + "{" + n + "}@keyframes " + y + "{" + n + "}." + m + "{-webkit-animation:" + y + " 0.001s;animation:" + y + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (e = "/* Chart.js */\n" + e, (t._style = i).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
        },
        acquireContext: function(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
          var i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t ? (function(t, e) {
            var i = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");
            if (t[g] = {
                initial: {
                  height: n,
                  width: o,
                  style: {
                    display: i.display,
                    height: i.height,
                    width: i.width
                  }
                }
              }, i.display = i.display || "block", null === o || "" === o) {
              var r = s(t, "width");
              void 0 !== r && (t.width = r)
            }
            if (null === n || "" === n)
              if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
              else {
                var a = s(t, "height");
                void 0 !== r && (t.height = a)
              }
          }(t, e), i) : null
        },
        releaseContext: function(t) {
          var i = t.canvas;
          if (i[g]) {
            var n = i[g].initial;
            ["height", "width"].forEach(function(t) {
              var e = n[t];
              p.isNullOrUndef(e) ? i.removeAttribute(t) : i.setAttribute(t, e)
            }), p.each(n.style || {}, function(t, e) {
              i.style[e] = t
            }), i.width = i.width, delete i[g]
          }
        },
        addEventListener: function(r, t, a) {
          var e = r.canvas;
          if ("resize" !== t) {
            var i = a[g] || (a[g] = {});
            d(e, t, (i.proxies || (i.proxies = {}))[r.id + "_" + t] = function(t) {
              var e, i, n, o;
              a((i = r, n = l[(e = t).type] || e.type, o = p.getRelativePosition(e, i), f(n, i, o.x, o.y, e)))
            })
          } else n(e, a, r)
        },
        removeEventListener: function(t, e, i) {
          var n = t.canvas;
          if ("resize" !== e) {
            var o = ((i[g] || {}).proxies || {})[t.id + "_" + e];
            o && a(n, e, o)
          } else r(n)
        }
      }, p.addEvent = d, p.removeEvent = a
    }, {
      45: 45
    }],
    48: [function(t, e, i) {
      "use strict";
      var n = t(45),
        o = t(46),
        r = t(47),
        a = r._enabled ? r : o;
      e.exports = n.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
      }, a)
    }, {
      45: 45,
      46: 46,
      47: 47
    }],
    49: [function(t, e, i) {
      "use strict";
      var c = t(25),
        v = t(40),
        u = t(45);
      c._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      }), e.exports = function() {
        function d(t, e, i) {
          var n, o = t._model || {},
            r = o.fill;
          if (void 0 === r && (r = !!o.backgroundColor), !1 === r || null === r) return !1;
          if (!0 === r) return "origin";
          if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || i <= n) && n;
          switch (r) {
            case "bottom":
              return "start";
            case "top":
              return "end";
            case "zero":
              return "origin";
            case "origin":
            case "start":
            case "end":
              return r;
            default:
              return !1
          }
        }

        function f(t) {
          var e, i = t.el._model || {},
            n = t.el._scale || {},
            o = t.fill,
            r = null;
          if (isFinite(o)) return null;
          if ("start" === o ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === o ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), null != r) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if ("number" == typeof r && isFinite(r)) return {
              x: (e = n.isHorizontal()) ? r : null,
              y: e ? null : r
            }
          }
          return null
        }

        function p(t, e, i) {
          var n, o = t[e].fill,
            r = [e];
          if (!i) return o;
          for (; !1 !== o && -1 === r.indexOf(o);) {
            if (!isFinite(o)) return o;
            if (!(n = t[o])) return !1;
            if (n.visible) return o;
            r.push(o), o = n.fill
          }
          return !1
        }

        function b(t) {
          return t && !t.skip
        }

        function x(t, e, i, n, o) {
          var r;
          if (n && o) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) u.canvas.lineTo(t, e[r - 1], e[r]);
            for (t.lineTo(i[o - 1].x, i[o - 1].y), r = o - 1; 0 < r; --r) u.canvas.lineTo(t, i[r], i[r - 1], !0)
          }
        }
        var g = {
          dataset: function(t) {
            var e = t.fill,
              i = t.chart,
              n = i.getDatasetMeta(e),
              o = n && i.isDatasetVisible(e) && n.dataset._children || [],
              r = o.length || 0;
            return r ? function(t, e) {
              return e < r && o[e]._view || null
            } : null
          },
          boundary: function(t) {
            var e = t.boundary,
              i = e ? e.x : null,
              n = e ? e.y : null;
            return function(t) {
              return {
                x: null === i ? t.x : i,
                y: null === n ? t.y : n
              }
            }
          }
        };
        return {
          id: "filler",
          afterDatasetsUpdate: function(t, e) {
            var i, n, o, r, a, s, l, c = (t.data.datasets || []).length,
              u = e.propagate,
              h = [];
            for (n = 0; n < c; ++n) r = null, (o = (i = t.getDatasetMeta(n)).dataset) && o._model && o instanceof v.Line && (r = {
              visible: t.isDatasetVisible(n),
              fill: d(o, n, c),
              chart: t,
              el: o
            }), i.$filler = r, h.push(r);
            for (n = 0; n < c; ++n)(r = h[n]) && (r.fill = p(h, n, u), r.boundary = f(r), r.mapper = (l = void 0, s = (a = r).fill, !(l = "dataset") === s ? null : (isFinite(s) || (l = "boundary"), g[l](a))))
          },
          beforeDatasetDraw: function(t, e) {
            var i = e.meta.$filler;
            if (i) {
              var n = t.ctx,
                o = i.el,
                r = o._view,
                a = o._children || [],
                s = i.mapper,
                l = r.backgroundColor || c.global.defaultColor;
              s && l && a.length && (u.canvas.clipArea(n, t.chartArea), function(t, e, i, n, o, r) {
                var a, s, l, c, u, h, d, f = e.length,
                  p = n.spanGaps,
                  g = [],
                  v = [],
                  m = 0,
                  y = 0;
                for (t.beginPath(), a = 0, s = f + !!r; a < s; ++a) u = i(c = e[l = a % f]._view, l, n), h = b(c), d = b(u), h && d ? (m = g.push(c), y = v.push(u)) : m && y && (p ? (h && g.push(c), d && v.push(u)) : (x(t, g, v, m, y), m = y = 0, g = [], v = []));
                x(t, g, v, m, y), t.closePath(), t.fillStyle = o, t.fill()
              }(n, a, s, r, l, o._loop), u.canvas.unclipArea(n))
            }
          }
        }
      }
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    50: [function(t, e, i) {
      "use strict";
      var M = t(25),
        a = t(26),
        A = t(45);
      M._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function(t, e) {
            var i = e.datasetIndex,
              n = this.chart,
              o = n.getDatasetMeta(i);
            o.hidden = null === o.hidden ? !n.data.datasets[i].hidden : null, n.update()
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function(i) {
              var t = i.data;
              return A.isArray(t.datasets) ? t.datasets.map(function(t, e) {
                return {
                  text: t.label,
                  fillStyle: A.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                  hidden: !i.isDatasetVisible(e),
                  lineCap: t.borderCapStyle,
                  lineDash: t.borderDash,
                  lineDashOffset: t.borderDashOffset,
                  lineJoin: t.borderJoinStyle,
                  lineWidth: t.borderWidth,
                  strokeStyle: t.borderColor,
                  pointStyle: t.pointStyle,
                  datasetIndex: e
                }
              }, this) : []
            }
          }
        },
        legendCallback: function(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
          return e.push("</ul>"), e.join("")
        }
      }), e.exports = function(n) {
        function _(t, e) {
          return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
        }

        function o(t, e) {
          var i = new n.Legend({
            ctx: t.ctx,
            options: e,
            chart: t
          });
          r.configure(t, i, e), r.addBox(t, i), t.legend = i
        }
        var r = n.layoutService,
          t = A.noop;
        return n.Legend = a.extend({
          initialize: function(t) {
            A.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
          },
          beforeUpdate: t,
          update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
          },
          afterUpdate: t,
          beforeSetDimensions: t,
          setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            }
          },
          afterSetDimensions: t,
          beforeBuildLabels: t,
          buildLabels: function() {
            var e = this,
              i = e.options.labels || {},
              t = A.callback(i.generateLabels, [e.chart], e) || [];
            i.filter && (t = t.filter(function(t) {
              return i.filter(t, e.chart.data)
            })), e.options.reverse && t.reverse(), e.legendItems = t
          },
          afterBuildLabels: t,
          beforeFit: t,
          fit: function() {
            var n = this,
              t = n.options,
              o = t.labels,
              e = t.display,
              r = n.ctx,
              i = M.global,
              a = A.valueOrDefault,
              s = a(o.fontSize, i.defaultFontSize),
              l = a(o.fontStyle, i.defaultFontStyle),
              c = a(o.fontFamily, i.defaultFontFamily),
              u = A.fontString(s, l, c),
              h = n.legendHitBoxes = [],
              d = n.minSize,
              f = n.isHorizontal();
            if (d.height = f ? (d.width = n.maxWidth, e ? 10 : 0) : (d.width = e ? 10 : 0, n.maxHeight), e)
              if (r.font = u, f) {
                var p = n.lineWidths = [0],
                  g = n.legendItems.length ? s + o.padding : 0;
                r.textAlign = "left", r.textBaseline = "top", A.each(n.legendItems, function(t, e) {
                  var i = _(o, s) + s / 2 + r.measureText(t.text).width;
                  p[p.length - 1] + i + o.padding >= n.width && (g += s + o.padding, p[p.length] = n.left), h[e] = {
                    left: 0,
                    top: 0,
                    width: i,
                    height: s
                  }, p[p.length - 1] += i + o.padding
                }), d.height += g
              } else {
                var v = o.padding,
                  m = n.columnWidths = [],
                  y = o.padding,
                  b = 0,
                  x = 0,
                  w = s + v;
                A.each(n.legendItems, function(t, e) {
                  var i = _(o, s) + s / 2 + r.measureText(t.text).width;
                  x + w > d.height && (y += b + o.padding, m.push(b), x = b = 0), b = Math.max(b, i), x += w, h[e] = {
                    left: 0,
                    top: 0,
                    width: i,
                    height: s
                  }
                }), y += b, m.push(b), d.width += y
              } n.width = d.width, n.height = d.height
          },
          afterFit: t,
          isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
          },
          draw: function() {
            var h = this,
              d = h.options,
              f = d.labels,
              p = M.global,
              g = p.elements.line,
              v = h.width,
              m = h.lineWidths;
            if (d.display) {
              var y, b = h.ctx,
                x = A.valueOrDefault,
                t = x(f.fontColor, p.defaultFontColor),
                w = x(f.fontSize, p.defaultFontSize),
                e = x(f.fontStyle, p.defaultFontStyle),
                i = x(f.fontFamily, p.defaultFontFamily),
                n = A.fontString(w, e, i);
              b.textAlign = "left", b.textBaseline = "middle", b.lineWidth = .5, b.strokeStyle = t, b.fillStyle = t, b.font = n;
              var k = _(f, w),
                S = h.legendHitBoxes,
                T = h.isHorizontal();
              y = T ? {
                x: h.left + (v - m[0]) / 2,
                y: h.top + f.padding,
                line: 0
              } : {
                x: h.left + f.padding,
                y: h.top + f.padding,
                line: 0
              };
              var C = w + f.padding;
              A.each(h.legendItems, function(t, e) {
                var i, n, o, r, a, s = b.measureText(t.text).width,
                  l = k + w / 2 + s,
                  c = y.x,
                  u = y.y;
                T ? v <= c + l && (u = y.y += C, y.line++, c = y.x = h.left + (v - m[y.line]) / 2) : u + C > h.bottom && (c = y.x = c + h.columnWidths[y.line] + f.padding, u = y.y = h.top + f.padding, y.line++),
                  function(t, e, i) {
                    if (!(isNaN(k) || k <= 0)) {
                      b.save(), b.fillStyle = x(i.fillStyle, p.defaultColor), b.lineCap = x(i.lineCap, g.borderCapStyle), b.lineDashOffset = x(i.lineDashOffset, g.borderDashOffset), b.lineJoin = x(i.lineJoin, g.borderJoinStyle), b.lineWidth = x(i.lineWidth, g.borderWidth), b.strokeStyle = x(i.strokeStyle, p.defaultColor);
                      var n = 0 === x(i.lineWidth, g.borderWidth);
                      if (b.setLineDash && b.setLineDash(x(i.lineDash, g.borderDash)), d.labels && d.labels.usePointStyle) {
                        var o = w * Math.SQRT2 / 2,
                          r = o / Math.SQRT2,
                          a = t + r,
                          s = e + r;
                        A.canvas.drawPoint(b, i.pointStyle, o, a, s)
                      } else n || b.strokeRect(t, e, k, w), b.fillRect(t, e, k, w);
                      b.restore()
                    }
                  }(c, u, t), S[e].left = c, S[e].top = u, i = t, n = s, r = k + (o = w / 2) + c, a = u + o, b.fillText(i.text, r, a), i.hidden && (b.beginPath(), b.lineWidth = 2, b.moveTo(r, a), b.lineTo(r + n, a), b.stroke()), T ? y.x += l + f.padding : y.y += C
              })
            }
          },
          handleEvent: function(t) {
            var e = this,
              i = e.options,
              n = "mouseup" === t.type ? "click" : t.type,
              o = !1;
            if ("mousemove" === n) {
              if (!i.onHover) return
            } else {
              if ("click" !== n) return;
              if (!i.onClick) return
            }
            var r = t.x,
              a = t.y;
            if (r >= e.left && r <= e.right && a >= e.top && a <= e.bottom)
              for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                var c = s[l];
                if (r >= c.left && r <= c.left + c.width && a >= c.top && a <= c.top + c.height) {
                  if ("click" === n) {
                    i.onClick.call(e, t.native, e.legendItems[l]), o = !0;
                    break
                  }
                  if ("mousemove" === n) {
                    i.onHover.call(e, t.native, e.legendItems[l]), o = !0;
                    break
                  }
                }
              }
            return o
          }
        }), {
          id: "legend",
          beforeInit: function(t) {
            var e = t.options.legend;
            e && o(t, e)
          },
          beforeUpdate: function(t) {
            var e = t.options.legend,
              i = t.legend;
            e ? (A.mergeIf(e, M.global.legend), i ? (r.configure(t, i, e), i.options = e) : o(t, e)) : i && (r.removeBox(t, i), delete t.legend)
          },
          afterEvent: function(t, e) {
            var i = t.legend;
            i && i.handleEvent(e)
          }
        }
      }
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    51: [function(t, e, i) {
      "use strict";
      var w = t(25),
        a = t(26),
        k = t(45);
      w._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      }), e.exports = function(n) {
        function o(t, e) {
          var i = new n.Title({
            ctx: t.ctx,
            options: e,
            chart: t
          });
          r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i
        }
        var r = n.layoutService,
          t = k.noop;
        return n.Title = a.extend({
          initialize: function(t) {
            k.extend(this, t), this.legendHitBoxes = []
          },
          beforeUpdate: t,
          update: function(t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
          },
          afterUpdate: t,
          beforeSetDimensions: t,
          setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            }
          },
          afterSetDimensions: t,
          beforeBuildLabels: t,
          buildLabels: t,
          afterBuildLabels: t,
          beforeFit: t,
          fit: function() {
            var t = k.valueOrDefault,
              e = this.options,
              i = e.display,
              n = t(e.fontSize, w.global.defaultFontSize),
              o = this.minSize,
              r = k.isArray(e.text) ? e.text.length : 1,
              a = k.options.toLineHeight(e.lineHeight, n),
              s = i ? r * a + 2 * e.padding : 0;
            this.isHorizontal() ? (o.width = this.maxWidth, o.height = s) : (o.width = s, o.height = this.maxHeight), this.width = o.width, this.height = o.height
          },
          afterFit: t,
          isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
          },
          draw: function() {
            var t = this.ctx,
              e = k.valueOrDefault,
              i = this.options,
              n = w.global;
            if (i.display) {
              var o, r, a, s = e(i.fontSize, n.defaultFontSize),
                l = e(i.fontStyle, n.defaultFontStyle),
                c = e(i.fontFamily, n.defaultFontFamily),
                u = k.fontString(s, l, c),
                h = k.options.toLineHeight(i.lineHeight, s),
                d = h / 2 + i.padding,
                f = 0,
                p = this.top,
                g = this.left,
                v = this.bottom,
                m = this.right;
              t.fillStyle = e(i.fontColor, n.defaultFontColor), t.font = u, this.isHorizontal() ? (r = g + (m - g) / 2, a = p + d, o = m - g) : (r = "left" === i.position ? g + d : m - d, a = p + (v - p) / 2, o = v - p, f = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(r, a), t.rotate(f), t.textAlign = "center", t.textBaseline = "middle";
              var y = i.text;
              if (k.isArray(y))
                for (var b = 0, x = 0; x < y.length; ++x) t.fillText(y[x], 0, b, o), b += h;
              else t.fillText(y, 0, 0, o);
              t.restore()
            }
          }
        }), {
          id: "title",
          beforeInit: function(t) {
            var e = t.options.title;
            e && o(t, e)
          },
          beforeUpdate: function(t) {
            var e = t.options.title,
              i = t.titleBlock;
            e ? (k.mergeIf(e, w.global.title), i ? (r.configure(t, i, e), i.options = e) : o(t, e)) : i && (n.layoutService.removeBox(t, i), delete t.titleBlock)
          }
        }
      }
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    52: [function(t, e, i) {
      "use strict";
      e.exports = function(t) {
        var e = t.Scale.extend({
          getLabels: function() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
          },
          determineDataLimits: function() {
            var t, e = this,
              i = e.getLabels();
            e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
          },
          buildTicks: function() {
            var t = this.getLabels();
            this.ticks = 0 === this.minIndex && this.maxIndex === t.length - 1 ? t : t.slice(this.minIndex, this.maxIndex + 1)
          },
          getLabelForIndex: function(t, e) {
            var i = this.chart.data,
              n = this.isHorizontal();
            return i.yLabels && !n ? this.getRightValue(i.datasets[e].data[t]) : this.ticks[t - this.minIndex]
          },
          getPixelForValue: function(t, e) {
            var i, n = this,
              o = n.options.offset,
              r = Math.max(n.maxIndex + 1 - n.minIndex - (o ? 0 : 1), 1);
            if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
              t = i || t;
              var a = n.getLabels().indexOf(t);
              e = -1 !== a ? a : e
            }
            if (n.isHorizontal()) {
              var s = n.width / r,
                l = s * (e - n.minIndex);
              return o && (l += s / 2), n.left + Math.round(l)
            }
            var c = n.height / r,
              u = c * (e - n.minIndex);
            return o && (u += c / 2), n.top + Math.round(u)
          },
          getPixelForTick: function(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
          },
          getValueForPixel: function(t) {
            var e = this.options.offset,
              i = Math.max(this._ticks.length - (e ? 0 : 1), 1),
              n = this.isHorizontal(),
              o = (n ? this.width : this.height) / i;
            return t -= n ? this.left : this.top, e && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + this.minIndex
          },
          getBasePixel: function() {
            return this.bottom
          }
        });
        t.scaleService.registerScaleType("category", e, {
          position: "bottom"
        })
      }
    }, {}],
    53: [function(t, e, i) {
      "use strict";
      var n = t(25),
        h = t(45),
        o = t(34);
      e.exports = function(t) {
        var e = {
            position: "left",
            ticks: {
              callback: o.formatters.linear
            }
          },
          i = t.LinearScaleBase.extend({
            determineDataLimits: function() {
              function a(t) {
                return e ? t.xAxisID === s.id : t.yAxisID === s.id
              }
              var s = this,
                l = s.options,
                c = s.chart,
                t = c.data.datasets,
                e = s.isHorizontal();
              s.min = null, s.max = null;
              var n = l.stacked;
              if (void 0 === n && h.each(t, function(t, e) {
                  if (!n) {
                    var i = c.getDatasetMeta(e);
                    c.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (n = !0)
                  }
                }), l.stacked || n) {
                var u = {};
                h.each(t, function(t, e) {
                  var n = c.getDatasetMeta(e),
                    i = [n.type, void 0 === l.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                  void 0 === u[i] && (u[i] = {
                    positiveValues: [],
                    negativeValues: []
                  });
                  var o = u[i].positiveValues,
                    r = u[i].negativeValues;
                  c.isDatasetVisible(e) && a(n) && h.each(t.data, function(t, e) {
                    var i = +s.getRightValue(t);
                    isNaN(i) || n.data[e].hidden || (o[e] = o[e] || 0, r[e] = r[e] || 0, l.relativePoints ? o[e] = 100 : i < 0 ? r[e] += i : o[e] += i)
                  })
                }), h.each(u, function(t) {
                  var e = t.positiveValues.concat(t.negativeValues),
                    i = h.min(e),
                    n = h.max(e);
                  s.min = null === s.min ? i : Math.min(s.min, i), s.max = null === s.max ? n : Math.max(s.max, n)
                })
              } else h.each(t, function(t, e) {
                var n = c.getDatasetMeta(e);
                c.isDatasetVisible(e) && a(n) && h.each(t.data, function(t, e) {
                  var i = +s.getRightValue(t);
                  isNaN(i) || n.data[e].hidden || (null === s.min ? s.min = i : i < s.min && (s.min = i), null === s.max ? s.max = i : i > s.max && (s.max = i))
                })
              });
              s.min = isFinite(s.min) && !isNaN(s.min) ? s.min : 0, s.max = isFinite(s.max) && !isNaN(s.max) ? s.max : 1, this.handleTickRangeOptions()
            },
            getTickLimit: function() {
              var t, e = this.options.ticks;
              if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
              else {
                var i = h.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
              }
              return t
            },
            handleDirectionalChanges: function() {
              this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForValue: function(t) {
              var e, i = this.start,
                n = +this.getRightValue(t),
                o = this.end - i;
              return e = this.isHorizontal() ? this.left + this.width / o * (n - i) : this.bottom - this.height / o * (n - i), Math.round(e)
            },
            getValueForPixel: function(t) {
              var e = this.isHorizontal(),
                i = e ? this.width : this.height,
                n = (e ? t - this.left : this.bottom - t) / i;
              return this.start + (this.end - this.start) * n
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(this.ticksAsNumbers[t])
            }
          });
        t.scaleService.registerScaleType("linear", i, e)
      }
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    54: [function(t, e, i) {
      "use strict";
      var a = t(45),
        r = t(34);
      e.exports = function(e) {
        var t = a.noop;
        e.LinearScaleBase = e.Scale.extend({
          getRightValue: function(t) {
            return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
          },
          handleTickRangeOptions: function() {
            var t = this,
              e = t.options.ticks;
            if (e.beginAtZero) {
              var i = a.sign(t.min),
                n = a.sign(t.max);
              i < 0 && n < 0 ? t.max = 0 : 0 < i && 0 < n && (t.min = 0)
            }
            var o = void 0 !== e.min || void 0 !== e.suggestedMin,
              r = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
          },
          getTickLimit: t,
          handleDirectionalChanges: t,
          buildTicks: function() {
            var t = this,
              e = t.options.ticks,
              i = t.getTickLimit(),
              n = {
                maxTicks: i = Math.max(2, i),
                min: e.min,
                max: e.max,
                stepSize: a.valueOrDefault(e.fixedStepSize, e.stepSize)
              },
              o = t.ticks = r.generators.linear(n, t);
            t.handleDirectionalChanges(), t.max = a.max(o), t.min = a.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
          },
          convertTicksToLabels: function() {
            this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(this)
          }
        })
      }
    }, {
      34: 34,
      45: 45
    }],
    55: [function(t, e, i) {
      "use strict";
      var h = t(45),
        o = t(34);
      e.exports = function(t) {
        var e = {
            position: "left",
            ticks: {
              callback: o.formatters.logarithmic
            }
          },
          i = t.Scale.extend({
            determineDataLimits: function() {
              function a(t) {
                return n ? t.xAxisID === s.id : t.yAxisID === s.id
              }
              var s = this,
                l = s.options,
                t = l.ticks,
                c = s.chart,
                e = c.data.datasets,
                i = h.valueOrDefault,
                n = s.isHorizontal();
              s.min = null, s.max = null, s.minNotZero = null;
              var o = l.stacked;
              if (void 0 === o && h.each(e, function(t, e) {
                  if (!o) {
                    var i = c.getDatasetMeta(e);
                    c.isDatasetVisible(e) && a(i) && void 0 !== i.stack && (o = !0)
                  }
                }), l.stacked || o) {
                var u = {};
                h.each(e, function(t, e) {
                  var o = c.getDatasetMeta(e),
                    r = [o.type, void 0 === l.stacked && void 0 === o.stack ? e : "", o.stack].join(".");
                  c.isDatasetVisible(e) && a(o) && (void 0 === u[r] && (u[r] = []), h.each(t.data, function(t, e) {
                    var i = u[r],
                      n = +s.getRightValue(t);
                    isNaN(n) || o.data[e].hidden || (i[e] = i[e] || 0, l.relativePoints ? i[e] = 100 : i[e] += n)
                  }))
                }), h.each(u, function(t) {
                  var e = h.min(t),
                    i = h.max(t);
                  s.min = null === s.min ? e : Math.min(s.min, e), s.max = null === s.max ? i : Math.max(s.max, i)
                })
              } else h.each(e, function(t, e) {
                var n = c.getDatasetMeta(e);
                c.isDatasetVisible(e) && a(n) && h.each(t.data, function(t, e) {
                  var i = +s.getRightValue(t);
                  isNaN(i) || n.data[e].hidden || (null === s.min ? s.min = i : i < s.min && (s.min = i), null === s.max ? s.max = i : i > s.max && (s.max = i), 0 !== i && (null === s.minNotZero || i < s.minNotZero) && (s.minNotZero = i))
                })
              });
              s.min = i(t.min, s.min), s.max = i(t.max, s.max), s.min === s.max && (0 !== s.min && null !== s.min ? (s.min = Math.pow(10, Math.floor(h.log10(s.min)) - 1), s.max = Math.pow(10, Math.floor(h.log10(s.max)) + 1)) : (s.min = 1, s.max = 10))
            },
            buildTicks: function() {
              var t = this,
                e = t.options.ticks,
                i = {
                  min: e.min,
                  max: e.max
                },
                n = t.ticks = o.generators.logarithmic(i, t);
              t.isHorizontal() || n.reverse(), t.max = h.max(n), t.min = h.min(n), e.reverse ? (n.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
              this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            getPixelForTick: function(t) {
              return this.getPixelForValue(this.tickValues[t])
            },
            getPixelForValue: function(t) {
              var e, i, n = this,
                o = n.start,
                r = +n.getRightValue(t),
                a = n.options.ticks;
              return n.isHorizontal() ? (i = h.log10(n.end) - h.log10(o), 0 === r ? n.left : (e = n.width, n.left + e / i * (h.log10(r) - h.log10(o)))) : (e = n.height, 0 !== o || a.reverse ? 0 === n.end && a.reverse ? (i = h.log10(n.start) - h.log10(n.minNotZero), r === n.end ? n.top : r === n.minNotZero ? n.top + .02 * e : n.top + .02 * e + .98 * e / i * (h.log10(r) - h.log10(n.minNotZero))) : 0 === r ? a.reverse ? n.top : n.bottom : (i = h.log10(n.end) - h.log10(o), e = n.height, n.bottom - e / i * (h.log10(r) - h.log10(o))) : (i = h.log10(n.end) - h.log10(n.minNotZero), r === o ? n.bottom : r === n.minNotZero ? n.bottom - .02 * e : n.bottom - .02 * e - .98 * e / i * (h.log10(r) - h.log10(n.minNotZero))))
            },
            getValueForPixel: function(t) {
              var e, i = h.log10(this.end) - h.log10(this.start);
              return this.isHorizontal() ? (e = this.width, this.start * Math.pow(10, (t - this.left) * i / e)) : (e = this.height, Math.pow(10, (this.bottom - t) * i / e) / this.start)
            }
          });
        t.scaleService.registerScaleType("logarithmic", i, e)
      }
    }, {
      34: 34,
      45: 45
    }],
    56: [function(t, e, i) {
      "use strict";
      var n = t(25),
        k = t(45),
        o = t(34);
      e.exports = function(t) {
        function y(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
        }

        function b(t) {
          var e = t.options.pointLabels,
            i = k.valueOrDefault(e.fontSize, w.defaultFontSize),
            n = k.valueOrDefault(e.fontStyle, w.defaultFontStyle),
            o = k.valueOrDefault(e.fontFamily, w.defaultFontFamily);
          return {
            size: i,
            style: n,
            family: o,
            font: k.fontString(i, n, o)
          }
        }

        function v(t, e, i, n, o) {
          return t === n || t === o ? {
            start: e - i / 2,
            end: e + i / 2
          } : t < n || o < t ? {
            start: e - i - 5,
            end: e
          } : {
            start: e,
            end: e + i + 5
          }
        }

        function x(t, e, i, n) {
          if (k.isArray(e))
            for (var o = i.y, r = 1.5 * n, a = 0; a < e.length; ++a) t.fillText(e[a], i.x, o), o += r;
          else t.fillText(e, i.x, i.y)
        }

        function s(t) {
          return k.isNumber(t) ? t : 0
        }
        var w = n.global,
          e = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1
            },
            gridLines: {
              circular: !1
            },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: o.formatters.linear
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function(t) {
                return t
              }
            }
          },
          i = t.LinearScaleBase.extend({
            setDimensions: function() {
              var t = this,
                e = t.options,
                i = e.ticks;
              t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
              var n = k.min([t.height, t.width]),
                o = k.valueOrDefault(i.fontSize, w.defaultFontSize);
              t.drawingArea = e.display ? n / 2 - (o / 2 + i.backdropPaddingY) : n / 2
            },
            determineDataLimits: function() {
              var o = this,
                i = o.chart,
                r = Number.POSITIVE_INFINITY,
                a = Number.NEGATIVE_INFINITY;
              k.each(i.data.datasets, function(t, e) {
                if (i.isDatasetVisible(e)) {
                  var n = i.getDatasetMeta(e);
                  k.each(t.data, function(t, e) {
                    var i = +o.getRightValue(t);
                    isNaN(i) || n.data[e].hidden || (r = Math.min(i, r), a = Math.max(i, a))
                  })
                }
              }), o.min = r === Number.POSITIVE_INFINITY ? 0 : r, o.max = a === Number.NEGATIVE_INFINITY ? 0 : a, o.handleTickRangeOptions()
            },
            getTickLimit: function() {
              var t = this.options.ticks,
                e = k.valueOrDefault(t.fontSize, w.defaultFontSize);
              return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
            },
            convertTicksToLabels: function() {
              t.LinearScaleBase.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this)
            },
            getLabelForIndex: function(t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function() {
              var t, e;
              this.options.pointLabels.display ? function(t) {
                var e, i, n, o = b(t),
                  r = Math.min(t.height / 2, t.width / 2),
                  a = {
                    r: t.width,
                    l: 0,
                    t: t.height,
                    b: 0
                  },
                  s = {};
                t.ctx.font = o.font, t._pointLabelSizes = [];
                var l, c, u, h = y(t);
                for (e = 0; e < h; e++) {
                  n = t.getPointPosition(e, r), l = t.ctx, c = o.size, u = t.pointLabels[e] || "", i = k.isArray(u) ? {
                    w: k.longestText(l, l.font, u),
                    h: u.length * c + 1.5 * (u.length - 1) * c
                  } : {
                    w: l.measureText(u).width,
                    h: c
                  }, t._pointLabelSizes[e] = i;
                  var d = t.getIndexAngle(e),
                    f = k.toDegrees(d) % 360,
                    p = v(f, n.x, i.w, 0, 180),
                    g = v(f, n.y, i.h, 90, 270);
                  p.start < a.l && (a.l = p.start, s.l = d), p.end > a.r && (a.r = p.end, s.r = d), g.start < a.t && (a.t = g.start, s.t = d), g.end > a.b && (a.b = g.end, s.b = d)
                }
                t.setReductions(r, a, s)
              }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
            },
            setReductions: function(t, e, i) {
              var n = e.l / Math.sin(i.l),
                o = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                r = -e.t / Math.cos(i.t),
                a = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
              n = s(n), o = s(o), r = s(r), a = s(a), this.drawingArea = Math.min(Math.round(t - (n + o) / 2), Math.round(t - (r + a) / 2)), this.setCenterPoint(n, o, r, a)
            },
            setCenterPoint: function(t, e, i, n) {
              var o = this,
                r = o.width - e - o.drawingArea,
                a = t + o.drawingArea,
                s = i + o.drawingArea,
                l = o.height - n - o.drawingArea;
              o.xCenter = Math.round((a + r) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
            },
            getIndexAngle: function(t) {
              return t * (2 * Math.PI / y(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(t) {
              if (null === t) return 0;
              var e = this.drawingArea / (this.max - this.min);
              return this.options.ticks.reverse ? (this.max - t) * e : (t - this.min) * e
            },
            getPointPosition: function(t, e) {
              var i = this.getIndexAngle(t) - Math.PI / 2;
              return {
                x: Math.round(Math.cos(i) * e) + this.xCenter,
                y: Math.round(Math.sin(i) * e) + this.yCenter
              }
            },
            getPointPositionForValue: function(t, e) {
              return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function() {
              var t = this.min,
                e = this.max;
              return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
            },
            draw: function() {
              var r = this,
                t = r.options,
                a = t.gridLines,
                s = t.ticks,
                l = k.valueOrDefault;
              if (t.display) {
                var c = r.ctx,
                  u = this.getIndexAngle(0),
                  h = l(s.fontSize, w.defaultFontSize),
                  e = l(s.fontStyle, w.defaultFontStyle),
                  i = l(s.fontFamily, w.defaultFontFamily),
                  d = k.fontString(h, e, i);
                k.each(r.ticks, function(t, e) {
                  if (0 < e || s.reverse) {
                    var i = r.getDistanceFromCenterForValue(r.ticksAsNumbers[e]);
                    if (a.display && 0 !== e && function(t, e, i, n) {
                        var o = t.ctx;
                        if (o.strokeStyle = k.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = k.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();
                        else {
                          var r = y(t);
                          if (0 === r) return;
                          o.beginPath();
                          var a = t.getPointPosition(0, i);
                          o.moveTo(a.x, a.y);
                          for (var s = 1; s < r; s++) a = t.getPointPosition(s, i), o.lineTo(a.x, a.y);
                          o.closePath(), o.stroke()
                        }
                      }(r, a, i, e), s.display) {
                      var n = l(s.fontColor, w.defaultFontColor);
                      if (c.font = d, c.save(), c.translate(r.xCenter, r.yCenter), c.rotate(u), s.showLabelBackdrop) {
                        var o = c.measureText(t).width;
                        c.fillStyle = s.backdropColor, c.fillRect(-o / 2 - s.backdropPaddingX, -i - h / 2 - s.backdropPaddingY, o + 2 * s.backdropPaddingX, h + 2 * s.backdropPaddingY)
                      }
                      c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = n, c.fillText(t, 0, -i), c.restore()
                    }
                  }
                }), (t.angleLines.display || t.pointLabels.display) && function(t) {
                  var e = t.ctx,
                    i = k.valueOrDefault,
                    n = t.options,
                    o = n.angleLines,
                    r = n.pointLabels;
                  e.lineWidth = o.lineWidth, e.strokeStyle = o.color;
                  var a, s, l, c, u = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                    h = b(t);
                  e.textBaseline = "top";
                  for (var d = y(t) - 1; 0 <= d; d--) {
                    if (o.display) {
                      var f = t.getPointPosition(d, u);
                      e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(f.x, f.y), e.stroke(), e.closePath()
                    }
                    if (r.display) {
                      var p = t.getPointPosition(d, u + 5),
                        g = i(r.fontColor, w.defaultFontColor);
                      e.font = h.font, e.fillStyle = g;
                      var v = t.getIndexAngle(d),
                        m = k.toDegrees(v);
                      e.textAlign = 0 === (c = m) || 180 === c ? "center" : c < 180 ? "left" : "right", a = m, s = t._pointLabelSizes[d], l = p, 90 === a || 270 === a ? l.y -= s.h / 2 : (270 < a || a < 90) && (l.y -= s.h), x(e, t.pointLabels[d] || "", p, h.size)
                    }
                  }
                }(r)
              }
            }
          });
        t.scaleService.registerScaleType("radialLinear", i, e)
      }
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    57: [function(t, e, i) {
      "use strict";

      function p(t, e) {
        return t - e
      }

      function g(t) {
        var e, i, n, o = {},
          r = [];
        for (e = 0, i = t.length; e < i; ++e) o[n = t[e]] || (o[n] = !0, r.push(n));
        return r
      }

      function S(t, e, i, n) {
        var o = function(t, e, i) {
            for (var n, o, r, a = 0, s = t.length - 1; 0 <= a && a <= s;) {
              if (o = t[(n = a + s >> 1) - 1] || null, r = t[n], !o) return {
                lo: null,
                hi: r
              };
              if (r[e] < i) a = n + 1;
              else {
                if (!(o[e] > i)) return {
                  lo: o,
                  hi: r
                };
                s = n - 1
              }
            }
            return {
              lo: r,
              hi: null
            }
          }(t, e, i),
          r = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
          a = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
          s = a[e] - r[e],
          l = s ? (i - r[e]) / s : 0,
          c = (a[n] - r[n]) * l;
        return r[n] + c
      }

      function a(t, e) {
        var i = e.parser,
          n = e.parser || e.format;
        return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof n ? _(t, n) : (t instanceof _ || (t = _(t)), t.isValid() ? t : "function" == typeof n ? n(t) : t)
      }

      function T(t, e) {
        if (v.isNullOrUndef(t)) return null;
        var i = e.options.time,
          n = a(e.getRightValue(t), i);
        return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
      }

      function C(t, e, i, n, o, r) {
        var a, s = r.time,
          l = v.valueOrDefault(s.stepSize, s.unitStepSize),
          c = "week" === i && s.isoWeekday,
          u = r.ticks.major.enabled,
          h = A[i],
          d = _(t),
          f = _(e),
          p = [];
        for (l || (l = function(t, e, i, n) {
            var o, r, a, s = e - t,
              l = A[i],
              c = l.size,
              u = l.steps;
            if (!u) return Math.ceil(s / ((n || 1) * c));
            for (o = 0, r = u.length; o < r && (a = u[o], !(Math.ceil(s / (c * a)) <= n)); ++o);
            return a
          }(t, e, i, o)), c && (d = d.isoWeekday(c), f = f.isoWeekday(c)), d = d.startOf(c ? "day" : i), (f = f.startOf(c ? "day" : i)) < e && f.add(1, i), a = _(d), u && n && !c && !s.round && (a.startOf(n), a.add(~~((d - a) / (h.size * l)) * l, i)); a < f; a.add(l, i)) p.push(+a);
        return p.push(+a), p
      }
      var _ = t(1);
      _ = "function" == typeof _ ? _ : window.moment;
      var s = t(25),
        v = t(45),
        m = Number.MIN_SAFE_INTEGER || -9007199254740991,
        M = Number.MAX_SAFE_INTEGER || 9007199254740991,
        A = {
          millisecond: {
            major: !0,
            size: 1,
            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
          },
          second: {
            major: !0,
            size: 1e3,
            steps: [1, 2, 5, 10, 30]
          },
          minute: {
            major: !0,
            size: 6e4,
            steps: [1, 2, 5, 10, 30]
          },
          hour: {
            major: !0,
            size: 36e5,
            steps: [1, 2, 3, 6, 12]
          },
          day: {
            major: !0,
            size: 864e5,
            steps: [1, 2, 5]
          },
          week: {
            major: !1,
            size: 6048e5,
            steps: [1, 2, 3, 4]
          },
          month: {
            major: !0,
            size: 2628e6,
            steps: [1, 2, 3]
          },
          quarter: {
            major: !1,
            size: 7884e6,
            steps: [1, 2, 3, 4]
          },
          year: {
            major: !0,
            size: 3154e7
          }
        },
        P = Object.keys(A);
      e.exports = function(e) {
        var t = e.Scale.extend({
          initialize: function() {
            if (!_) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
          },
          update: function() {
            var t = this.options;
            return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(this, arguments)
          },
          getRightValue: function(t) {
            return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
          },
          determineDataLimits: function() {
            var t, e, i, n, o, r, a = this,
              s = a.chart,
              l = a.options.time,
              c = T(l.min, a) || M,
              u = T(l.max, a) || m,
              h = [],
              d = [],
              f = [];
            for (t = 0, i = s.data.labels.length; t < i; ++t) f.push(T(s.data.labels[t], a));
            for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
              if (s.isDatasetVisible(t))
                if (o = s.data.datasets[t].data, v.isObject(o[0]))
                  for (d[t] = [], e = 0, n = o.length; e < n; ++e) r = T(o[e], a), h.push(r), d[t][e] = r;
                else h.push.apply(h, f), d[t] = f.slice(0);
            else d[t] = [];
            f.length && (f = g(f).sort(p), c = Math.min(c, f[0]), u = Math.max(u, f[f.length - 1])), h.length && (h = g(h).sort(p), c = Math.min(c, h[0]), u = Math.max(u, h[h.length - 1])), c = c === M ? +_().startOf("day") : c, u = u === m ? +_().endOf("day") + 1 : u, a.min = Math.min(c, u), a.max = Math.max(c + 1, u), a._horizontal = a.isHorizontal(), a._table = [], a._timestamps = {
              data: h,
              datasets: d,
              labels: f
            }
          },
          buildTicks: function() {
            var t, e, i, n, o, r, a, s, l, c, u, h, d = this,
              f = d.min,
              p = d.max,
              g = d.options,
              v = g.time,
              m = v.displayFormats,
              y = d.getLabelCapacity(f),
              b = v.unit || function(t, e, i, n) {
                var o, r, a, s = P.length;
                for (o = P.indexOf(t); o < s - 1; ++o)
                  if (a = (r = A[P[o]]).steps ? r.steps[r.steps.length - 1] : M, Math.ceil((i - e) / (a * r.size)) <= n) return P[o];
                return P[s - 1]
              }(v.minUnit, f, p, y),
              x = function(t) {
                for (var e = P.indexOf(t) + 1, i = P.length; e < i; ++e)
                  if (A[P[e]].major) return P[e]
              }(b),
              w = [],
              k = [];
            switch (g.ticks.source) {
              case "data":
                w = d._timestamps.data;
                break;
              case "labels":
                w = d._timestamps.labels;
                break;
              case "auto":
              default:
                w = C(f, p, b, x, y, g)
            }
            for ("ticks" === g.bounds && w.length && (f = w[0], p = w[w.length - 1]), f = T(v.min, d) || f, p = T(v.max, d) || p, t = 0, e = w.length; t < e; ++t)(i = w[t]) >= f && i <= p && k.push(i);
            return d.min = f, d.max = p, d._unit = b, d._majorUnit = x, d._minorFormat = m[b], d._majorFormat = m[x], d._table = function(t, e, i, n) {
                if ("linear" === n || !t.length) return [{
                  time: e,
                  pos: 0
                }, {
                  time: i,
                  pos: 1
                }];
                var o, r, a, s, l, c = [],
                  u = [e];
                for (o = 0, r = t.length; o < r; ++o)(s = t[o]) > e && s < i && u.push(s);
                for (u.push(i), o = 0, r = u.length; o < r; ++o) l = u[o + 1], a = u[o - 1], s = u[o], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || c.push({
                  time: s,
                  pos: o / (r - 1)
                });
                return c
              }(d._timestamps.data, f, p, g.distribution), d._offsets = (n = d._table, o = k, r = f, a = p, h = u = 0, (s = g).offset && o.length && (s.time.min || (l = 1 < o.length ? o[1] : a, c = o[0], u = (S(n, "time", l, "pos") - S(n, "time", c, "pos")) / 2), s.time.max || (l = o[o.length - 1], c = 1 < o.length ? o[o.length - 2] : r, h = (S(n, "time", l, "pos") - S(n, "time", c, "pos")) / 2)), {
                left: u,
                right: h
              }),
              function(t, e) {
                var i, n, o, r, a = [];
                for (i = 0, n = t.length; i < n; ++i) o = t[i], r = !!e && o === +_(o).startOf(e), a.push({
                  value: o,
                  major: r
                });
                return a
              }(k, x)
          },
          getLabelForIndex: function(t, e) {
            var i = this.chart.data,
              n = this.options.time,
              o = i.labels && t < i.labels.length ? i.labels[t] : "",
              r = i.datasets[e].data[t];
            return v.isObject(r) && (o = this.getRightValue(r)), n.tooltipFormat && (o = a(o, n).format(n.tooltipFormat)), o
          },
          tickFormatFunction: function(t, e, i) {
            var n = this.options,
              o = t.valueOf(),
              r = this._majorUnit,
              a = this._majorFormat,
              s = t.clone().startOf(this._majorUnit).valueOf(),
              l = n.ticks.major,
              c = l.enabled && r && a && o === s,
              u = t.format(c ? a : this._minorFormat),
              h = c ? l : n.ticks.minor,
              d = v.valueOrDefault(h.callback, h.userCallback);
            return d ? d(u, e, i) : u
          },
          convertTicksToLabels: function(t) {
            var e, i, n = [];
            for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(_(t[e].value), e, t));
            return n
          },
          getPixelForOffset: function(t) {
            var e = this,
              i = e._horizontal ? e.width : e.height,
              n = e._horizontal ? e.left : e.top,
              o = S(e._table, "time", t, "pos");
            return n + i * (e._offsets.left + o) / (e._offsets.left + 1 + e._offsets.right)
          },
          getPixelForValue: function(t, e, i) {
            var n = null;
            if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = T(t, this)), null !== n) return this.getPixelForOffset(n)
          },
          getPixelForTick: function(t) {
            var e = this.getTicks();
            return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
          },
          getValueForPixel: function(t) {
            var e = this,
              i = e._horizontal ? e.width : e.height,
              n = e._horizontal ? e.left : e.top,
              o = (i ? (t - n) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
              r = S(e._table, "pos", o, "time");
            return _(r)
          },
          getLabelWidth: function(t) {
            var e = this.options.ticks,
              i = this.ctx.measureText(t).width,
              n = v.toRadians(e.maxRotation),
              o = Math.cos(n),
              r = Math.sin(n);
            return i * o + v.valueOrDefault(e.fontSize, s.global.defaultFontSize) * r
          },
          getLabelCapacity: function(t) {
            this._minorFormat = this.options.time.displayFormats.millisecond;
            var e = this.tickFormatFunction(_(t), 0, []),
              i = this.getLabelWidth(e),
              n = this.isHorizontal() ? this.width : this.height;
            return Math.floor(n / i)
          }
        });
        e.scaleService.registerScaleType("time", t, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        })
      }
    }, {
      1: 1,
      25: 25,
      45: 45
    }]
  }, {}, [7])(7)
}),
function(i) {
  "use strict";
  i(".wp-1").waypoint(function() {
    i(".wp-1").addClass("animated fadeInUp")
  }, {
    offset: "75%"
  }), i(".wp-2").waypoint(function() {
    i(".wp-2").addClass("animated fadeInUp")
  }, {
    offset: "75%"
  }), i(".wp-3").waypoint(function() {
    i(".wp-3").addClass("animated fadeInUp")
  }, {
    offset: "75%"
  }), i(".wp-4").waypoint(function() {
    i(".wp-4").addClass("animated fadeIn")
  }, {
    offset: "75%"
  }), i(".wp-5").waypoint(function() {
    i(".wp-5").addClass("animated fadeInRight")
  }, {
    offset: "50%"
  }), i(".wp-6").waypoint(function() {
    i(".wp-6").addClass("animated fadeInLeft")
  }, {
    offset: "50%"
  }), i(".wp-7").waypoint(function() {
    i(".wp-7").addClass("animated fadeInUp")
  }, {
    offset: "60%"
  }), i(".wp-8").waypoint(function() {
    i(".wp-8").addClass("animated fadeInUp")
  }, {
    offset: "60%"
  }), i("#collapsingMobileUser").on("show.bs.collapse", function() {
    i("#collapsingNavbar").removeClass("in"), i('[data-target="#collapsingNavbar"]').attr("aria-expanded", "false")
  }), i("#collapsingNavbar").on("show.bs.collapse", function() {
    i("#collapsingMobileUser").removeClass("in"), i('[data-target="#collapsingMobileUser"]').attr("aria-expanded", "false")
  }), i("#collapsingMobileUserInverse").on("show.bs.collapse", function() {
    i("#collapsingNavbarInverse").removeClass("in"), i('[data-target="#collapsingNavbarInverse"]').attr("aria-expanded", "false")
  }), i("#collapsingNavbarInverse").on("show.bs.collapse", function() {
    i("#collapsingMobileUserInverse").removeClass("in"), i('[data-target="#collapsingMobileUserInverse"]').attr("aria-expanded", "false")
  }), i(".nav-dropdown-search").on("show.bs.dropdown", function() {
    i(this).siblings().not(".navbar-nav .dropdown").addClass("sr-only")
  }), i(".nav-dropdown-search").on("shown.bs.dropdown", function() {
    i(".navbar-search-input").focus()
  }), i(".nav-dropdown-search").on("hide.bs.dropdown", function() {
    i(this).siblings().removeClass("sr-only")
  }), videojs("demo_video", {
    controlBar: {
      timeDivider: !1,
      fullscreenToggle: !1,
      playToggle: !1,
      remainingTimeDisplay: !1
    },
    height: "auto",
    width: "auto"
  }).ready(function() {
    var e = this,
      i = 5 / 12;

    function t() {
      var t = document.getElementById(e.id()).parentElement.offsetWidth;
      e.width(t).height(t * i)
    }
    t(), window.onresize = t
  }), i(".scroll-top").on("click", function() {
    return i("html, body").animate({
      scrollTop: 0
    }, 1e3), !1
  }), i("#videoModal").on("shown.bs.modal", function() {
    i("#vimeo-play").vimeo("play")
  }), i("#videoModal").on("hidden.bs.modal", function() {
    i("#vimeo-play").vimeo("pause")
  }), i("#youtube-trigger").click(function() {
    var t = i(this).attr("data-video"),
      e = t + "?autoplay=1&html5=1&rel=0&showinfo=0";
    i("#youtubeModal").on("shown.bs.modal", function() {
      i("#youtube-play").attr("src", e)
    }), i("#youtubeModal").on("hidden.bs.modal", function() {
      i("#youtube-play").attr("src", t)
    })
  })
}(jQuery);
