/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var t = {
      546: function (t, e) {
        !(function (t) {
          "use strict";
          function e(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function n(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          }
          var r,
            i,
            s,
            a,
            o,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            g,
            m = function () {
              return (
                r ||
                ("undefined" != typeof window &&
                  (r = window.gsap) &&
                  r.registerPlugin &&
                  r)
              );
            },
            _ = 1,
            v = [],
            y = [],
            b = [],
            w = Date.now,
            x = function (t, e) {
              return e;
            },
            S = function () {
              var t = h.core,
                e = t.bridge || {},
                n = t._scrollers,
                r = t._proxies;
              n.push.apply(n, y),
                r.push.apply(r, b),
                (y = n),
                (b = r),
                (x = function (t, n) {
                  return e[t](n);
                });
            },
            T = function (t, e) {
              return ~b.indexOf(t) && b[b.indexOf(t) + 1][e];
            },
            E = function (t) {
              return !!~d.indexOf(t);
            },
            A = function (t, e, n, r, i) {
              return t.addEventListener(e, n, { passive: !r, capture: !!i });
            },
            C = function (t, e, n, r) {
              return t.removeEventListener(e, n, !!r);
            },
            O = "scrollLeft",
            k = "scrollTop",
            M = function () {
              return (f && f.isPressed) || y.cache++;
            },
            L = function (t, e) {
              var n = function n(r) {
                if (r || 0 === r) {
                  _ && (s.history.scrollRestoration = "manual");
                  var i = f && f.isPressed;
                  (r = n.v = Math.round(r) || (f && f.iOS ? 1 : 0)),
                    t(r),
                    (n.cacheID = y.cache),
                    i && x("ss", r);
                } else
                  (e || y.cache !== n.cacheID || x("ref")) &&
                    ((n.cacheID = y.cache), (n.v = t()));
                return n.v + n.offset;
              };
              return (n.offset = 0), t && n;
            },
            P = {
              s: O,
              p: "left",
              p2: "Left",
              os: "right",
              os2: "Right",
              d: "width",
              d2: "Width",
              a: "x",
              sc: L(function (t) {
                return arguments.length
                  ? s.scrollTo(t, D.sc())
                  : s.pageXOffset || a[O] || o[O] || l[O] || 0;
              }),
            },
            D = {
              s: k,
              p: "top",
              p2: "Top",
              os: "bottom",
              os2: "Bottom",
              d: "height",
              d2: "Height",
              a: "y",
              op: P,
              sc: L(function (t) {
                return arguments.length
                  ? s.scrollTo(P.sc(), t)
                  : s.pageYOffset || a[k] || o[k] || l[k] || 0;
              }),
            },
            I = function (t, e) {
              return (
                ((e && e._ctx && e._ctx.selector) || r.utils.toArray)(t)[0] ||
                ("string" == typeof t && !1 !== r.config().nullTargetWarn
                  ? console.warn("Element not found:", t)
                  : null)
              );
            },
            R = function (t, e) {
              var n = e.s,
                i = e.sc;
              E(t) && (t = a.scrollingElement || o);
              var s = y.indexOf(t),
                l = i === D.sc ? 1 : 2;
              !~s && (s = y.push(t) - 1), y[s + l] || A(t, "scroll", M);
              var c = y[s + l],
                u =
                  c ||
                  (y[s + l] =
                    L(T(t, n), !0) ||
                    (E(t)
                      ? i
                      : L(function (e) {
                          return arguments.length ? (t[n] = e) : t[n];
                        })));
              return (
                (u.target = t),
                c ||
                  (u.smooth = "smooth" === r.getProperty(t, "scrollBehavior")),
                u
              );
            },
            z = function (t, e, n) {
              var r = t,
                i = t,
                s = w(),
                a = s,
                o = e || 50,
                l = Math.max(500, 3 * o),
                c = function (t, e) {
                  var l = w();
                  e || l - s > o
                    ? ((i = r), (r = t), (a = s), (s = l))
                    : n
                      ? (r += t)
                      : (r = i + ((t - i) / (l - a)) * (s - a));
                },
                u = function (t) {
                  var e = a,
                    o = i,
                    u = w();
                  return (
                    (t || 0 === t) && t !== r && c(t),
                    s === a || u - a > l
                      ? 0
                      : ((r + (n ? o : -o)) / ((n ? u : s) - e)) * 1e3
                  );
                };
              return {
                update: c,
                reset: function () {
                  (i = r = n ? 0 : r), (a = s = 0);
                },
                getVelocity: u,
              };
            },
            B = function (t, e) {
              return (
                e && !t._gsapAllow && t.preventDefault(),
                t.changedTouches ? t.changedTouches[0] : t
              );
            },
            $ = function (t) {
              var e = Math.max.apply(Math, t),
                n = Math.min.apply(Math, t);
              return Math.abs(e) >= Math.abs(n) ? e : n;
            },
            q = function () {
              (h = r.core.globals().ScrollTrigger) && h.core && S();
            },
            F = function (t) {
              return (
                (r = t || m()),
                !i &&
                  r &&
                  "undefined" != typeof document &&
                  document.body &&
                  ((s = window),
                  (a = document),
                  (o = a.documentElement),
                  (l = a.body),
                  (d = [s, a, o, l]),
                  r.utils.clamp,
                  (g = r.core.context || function () {}),
                  (u = "onpointerenter" in l ? "pointer" : "mouse"),
                  (c = N.isTouch =
                    s.matchMedia &&
                    s.matchMedia("(hover: none), (pointer: coarse)").matches
                      ? 1
                      : "ontouchstart" in s ||
                          navigator.maxTouchPoints > 0 ||
                          navigator.msMaxTouchPoints > 0
                        ? 2
                        : 0),
                  (p = N.eventTypes =
                    (
                      "ontouchstart" in o
                        ? "touchstart,touchmove,touchcancel,touchend"
                        : "onpointerdown" in o
                          ? "pointerdown,pointermove,pointercancel,pointerup"
                          : "mousedown,mousemove,mouseup,mouseup"
                    ).split(",")),
                  setTimeout(function () {
                    return (_ = 0);
                  }, 500),
                  q(),
                  (i = 1)),
                i
              );
            };
          (P.op = D), (y.cache = 0);
          var N = (function () {
            function t(t) {
              this.init(t);
            }
            return (
              (t.prototype.init = function (t) {
                i ||
                  F(r) ||
                  console.warn("Please gsap.registerPlugin(Observer)"),
                  h || q();
                var e = t.tolerance,
                  n = t.dragMinimum,
                  d = t.type,
                  m = t.target,
                  _ = t.lineHeight,
                  y = t.debounce,
                  b = t.preventDefault,
                  x = t.onStop,
                  S = t.onStopDelay,
                  T = t.ignore,
                  O = t.wheelSpeed,
                  k = t.event,
                  L = t.onDragStart,
                  N = t.onDragEnd,
                  Y = t.onDrag,
                  W = t.onPress,
                  H = t.onRelease,
                  X = t.onRight,
                  V = t.onLeft,
                  U = t.onUp,
                  j = t.onDown,
                  G = t.onChangeX,
                  Q = t.onChangeY,
                  Z = t.onChange,
                  J = t.onToggleX,
                  K = t.onToggleY,
                  tt = t.onHover,
                  et = t.onHoverEnd,
                  nt = t.onMove,
                  rt = t.ignoreCheck,
                  it = t.isNormalizer,
                  st = t.onGestureStart,
                  at = t.onGestureEnd,
                  ot = t.onWheel,
                  lt = t.onEnable,
                  ct = t.onDisable,
                  ut = t.onClick,
                  ht = t.scrollSpeed,
                  dt = t.capture,
                  ft = t.allowClicks,
                  pt = t.lockAxis,
                  gt = t.onLockAxis;
                (this.target = m = I(m) || o),
                  (this.vars = t),
                  T && (T = r.utils.toArray(T)),
                  (e = e || 1e-9),
                  (n = n || 0),
                  (O = O || 1),
                  (ht = ht || 1),
                  (d = d || "wheel,touch,pointer"),
                  (y = !1 !== y),
                  _ || (_ = parseFloat(s.getComputedStyle(l).lineHeight) || 22);
                var mt,
                  _t,
                  vt,
                  yt,
                  bt,
                  wt,
                  xt,
                  St = this,
                  Tt = 0,
                  Et = 0,
                  At = R(m, P),
                  Ct = R(m, D),
                  Ot = At(),
                  kt = Ct(),
                  Mt =
                    ~d.indexOf("touch") &&
                    !~d.indexOf("pointer") &&
                    "pointerdown" === p[0],
                  Lt = E(m),
                  Pt = m.ownerDocument || a,
                  Dt = [0, 0, 0],
                  It = [0, 0, 0],
                  Rt = 0,
                  zt = function () {
                    return (Rt = w());
                  },
                  Bt = function (t, e) {
                    return (
                      ((St.event = t) && T && ~T.indexOf(t.target)) ||
                      (e && Mt && "touch" !== t.pointerType) ||
                      (rt && rt(t, e))
                    );
                  },
                  $t = function () {
                    St._vx.reset(), St._vy.reset(), _t.pause(), x && x(St);
                  },
                  qt = function () {
                    var t = (St.deltaX = $(Dt)),
                      n = (St.deltaY = $(It)),
                      r = Math.abs(t) >= e,
                      i = Math.abs(n) >= e;
                    Z && (r || i) && Z(St, t, n, Dt, It),
                      r &&
                        (X && St.deltaX > 0 && X(St),
                        V && St.deltaX < 0 && V(St),
                        G && G(St),
                        J && St.deltaX < 0 != Tt < 0 && J(St),
                        (Tt = St.deltaX),
                        (Dt[0] = Dt[1] = Dt[2] = 0)),
                      i &&
                        (j && St.deltaY > 0 && j(St),
                        U && St.deltaY < 0 && U(St),
                        Q && Q(St),
                        K && St.deltaY < 0 != Et < 0 && K(St),
                        (Et = St.deltaY),
                        (It[0] = It[1] = It[2] = 0)),
                      (yt || vt) &&
                        (nt && nt(St), vt && (Y(St), (vt = !1)), (yt = !1)),
                      wt && !(wt = !1) && gt && gt(St),
                      bt && (ot(St), (bt = !1)),
                      (mt = 0);
                  },
                  Ft = function (t, e, n) {
                    (Dt[n] += t),
                      (It[n] += e),
                      St._vx.update(t),
                      St._vy.update(e),
                      y ? mt || (mt = requestAnimationFrame(qt)) : qt();
                  },
                  Nt = function (t, e) {
                    pt &&
                      !xt &&
                      ((St.axis = xt = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                      (wt = !0)),
                      "y" !== xt && ((Dt[2] += t), St._vx.update(t, !0)),
                      "x" !== xt && ((It[2] += e), St._vy.update(e, !0)),
                      y ? mt || (mt = requestAnimationFrame(qt)) : qt();
                  },
                  Yt = function (t) {
                    if (!Bt(t, 1)) {
                      var e = (t = B(t, b)).clientX,
                        r = t.clientY,
                        i = e - St.x,
                        s = r - St.y,
                        a = St.isDragging;
                      (St.x = e),
                        (St.y = r),
                        (a ||
                          Math.abs(St.startX - e) >= n ||
                          Math.abs(St.startY - r) >= n) &&
                          (Y && (vt = !0),
                          a || (St.isDragging = !0),
                          Nt(i, s),
                          a || (L && L(St)));
                    }
                  },
                  Wt = (St.onPress = function (t) {
                    Bt(t, 1) ||
                      (t && t.button) ||
                      ((St.axis = xt = null),
                      _t.pause(),
                      (St.isPressed = !0),
                      (t = B(t)),
                      (Tt = Et = 0),
                      (St.startX = St.x = t.clientX),
                      (St.startY = St.y = t.clientY),
                      St._vx.reset(),
                      St._vy.reset(),
                      A(it ? m : Pt, p[1], Yt, b, !0),
                      (St.deltaX = St.deltaY = 0),
                      W && W(St));
                  }),
                  Ht = (St.onRelease = function (t) {
                    if (!Bt(t, 1)) {
                      C(it ? m : Pt, p[1], Yt, !0);
                      var e = !isNaN(St.y - St.startY),
                        n = St.isDragging,
                        i =
                          n &&
                          (Math.abs(St.x - St.startX) > 3 ||
                            Math.abs(St.y - St.startY) > 3),
                        a = B(t);
                      !i &&
                        e &&
                        (St._vx.reset(),
                        St._vy.reset(),
                        b &&
                          ft &&
                          r.delayedCall(0.08, function () {
                            if (w() - Rt > 300 && !t.defaultPrevented)
                              if (t.target.click) t.target.click();
                              else if (Pt.createEvent) {
                                var e = Pt.createEvent("MouseEvents");
                                e.initMouseEvent(
                                  "click",
                                  !0,
                                  !0,
                                  s,
                                  1,
                                  a.screenX,
                                  a.screenY,
                                  a.clientX,
                                  a.clientY,
                                  !1,
                                  !1,
                                  !1,
                                  !1,
                                  0,
                                  null,
                                ),
                                  t.target.dispatchEvent(e);
                              }
                          })),
                        (St.isDragging = St.isGesturing = St.isPressed = !1),
                        x && n && !it && _t.restart(!0),
                        N && n && N(St),
                        H && H(St, i);
                    }
                  }),
                  Xt = function (t) {
                    return (
                      t.touches &&
                      t.touches.length > 1 &&
                      (St.isGesturing = !0) &&
                      st(t, St.isDragging)
                    );
                  },
                  Vt = function () {
                    return (St.isGesturing = !1) || at(St);
                  },
                  Ut = function (t) {
                    if (!Bt(t)) {
                      var e = At(),
                        n = Ct();
                      Ft((e - Ot) * ht, (n - kt) * ht, 1),
                        (Ot = e),
                        (kt = n),
                        x && _t.restart(!0);
                    }
                  },
                  jt = function (t) {
                    if (!Bt(t)) {
                      (t = B(t, b)), ot && (bt = !0);
                      var e =
                        (1 === t.deltaMode
                          ? _
                          : 2 === t.deltaMode
                            ? s.innerHeight
                            : 1) * O;
                      Ft(t.deltaX * e, t.deltaY * e, 0),
                        x && !it && _t.restart(!0);
                    }
                  },
                  Gt = function (t) {
                    if (!Bt(t)) {
                      var e = t.clientX,
                        n = t.clientY,
                        r = e - St.x,
                        i = n - St.y;
                      (St.x = e),
                        (St.y = n),
                        (yt = !0),
                        x && _t.restart(!0),
                        (r || i) && Nt(r, i);
                    }
                  },
                  Qt = function (t) {
                    (St.event = t), tt(St);
                  },
                  Zt = function (t) {
                    (St.event = t), et(St);
                  },
                  Jt = function (t) {
                    return Bt(t) || (B(t, b) && ut(St));
                  };
                (_t = St._dc = r.delayedCall(S || 0.25, $t).pause()),
                  (St.deltaX = St.deltaY = 0),
                  (St._vx = z(0, 50, !0)),
                  (St._vy = z(0, 50, !0)),
                  (St.scrollX = At),
                  (St.scrollY = Ct),
                  (St.isDragging = St.isGesturing = St.isPressed = !1),
                  g(this),
                  (St.enable = function (t) {
                    return (
                      St.isEnabled ||
                        (A(Lt ? Pt : m, "scroll", M),
                        d.indexOf("scroll") >= 0 &&
                          A(Lt ? Pt : m, "scroll", Ut, b, dt),
                        d.indexOf("wheel") >= 0 && A(m, "wheel", jt, b, dt),
                        ((d.indexOf("touch") >= 0 && c) ||
                          d.indexOf("pointer") >= 0) &&
                          (A(m, p[0], Wt, b, dt),
                          A(Pt, p[2], Ht),
                          A(Pt, p[3], Ht),
                          ft && A(m, "click", zt, !1, !0),
                          ut && A(m, "click", Jt),
                          st && A(Pt, "gesturestart", Xt),
                          at && A(Pt, "gestureend", Vt),
                          tt && A(m, u + "enter", Qt),
                          et && A(m, u + "leave", Zt),
                          nt && A(m, u + "move", Gt)),
                        (St.isEnabled = !0),
                        t && t.type && Wt(t),
                        lt && lt(St)),
                      St
                    );
                  }),
                  (St.disable = function () {
                    St.isEnabled &&
                      (v.filter(function (t) {
                        return t !== St && E(t.target);
                      }).length || C(Lt ? Pt : m, "scroll", M),
                      St.isPressed &&
                        (St._vx.reset(),
                        St._vy.reset(),
                        C(it ? m : Pt, p[1], Yt, !0)),
                      C(Lt ? Pt : m, "scroll", Ut, dt),
                      C(m, "wheel", jt, dt),
                      C(m, p[0], Wt, dt),
                      C(Pt, p[2], Ht),
                      C(Pt, p[3], Ht),
                      C(m, "click", zt, !0),
                      C(m, "click", Jt),
                      C(Pt, "gesturestart", Xt),
                      C(Pt, "gestureend", Vt),
                      C(m, u + "enter", Qt),
                      C(m, u + "leave", Zt),
                      C(m, u + "move", Gt),
                      (St.isEnabled = St.isPressed = St.isDragging = !1),
                      ct && ct(St));
                  }),
                  (St.kill = St.revert =
                    function () {
                      St.disable();
                      var t = v.indexOf(St);
                      t >= 0 && v.splice(t, 1), f === St && (f = 0);
                    }),
                  v.push(St),
                  it && E(m) && (f = St),
                  St.enable(k);
              }),
              n(t, [
                {
                  key: "velocityX",
                  get: function () {
                    return this._vx.getVelocity();
                  },
                },
                {
                  key: "velocityY",
                  get: function () {
                    return this._vy.getVelocity();
                  },
                },
              ]),
              t
            );
          })();
          (N.version = "3.12.4"),
            (N.create = function (t) {
              return new N(t);
            }),
            (N.register = F),
            (N.getAll = function () {
              return v.slice();
            }),
            (N.getById = function (t) {
              return v.filter(function (e) {
                return e.vars.id === t;
              })[0];
            }),
            m() && r.registerPlugin(N);
          var Y,
            W,
            H,
            X,
            V,
            U,
            j,
            G,
            Q,
            Z,
            J,
            K,
            tt,
            et,
            nt,
            rt,
            it,
            st,
            at,
            ot,
            lt,
            ct,
            ut,
            ht,
            dt,
            ft,
            pt,
            gt,
            mt,
            _t,
            vt,
            yt,
            bt,
            wt,
            xt,
            St,
            Tt,
            Et,
            At = 1,
            Ct = Date.now,
            Ot = Ct(),
            kt = 0,
            Mt = 0,
            Lt = function (t, e, n) {
              var r =
                Ut(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
              return (
                (n["_" + e + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t
              );
            },
            Pt = function (t, e) {
              return !e || (Ut(t) && "clamp(" === t.substr(0, 6))
                ? t
                : "clamp(" + t + ")";
            },
            Dt = function t() {
              return Mt && requestAnimationFrame(t);
            },
            It = function () {
              return (et = 1);
            },
            Rt = function () {
              return (et = 0);
            },
            zt = function (t) {
              return t;
            },
            Bt = function (t) {
              return Math.round(1e5 * t) / 1e5 || 0;
            },
            $t = function () {
              return "undefined" != typeof window;
            },
            qt = function () {
              return Y || ($t() && (Y = window.gsap) && Y.registerPlugin && Y);
            },
            Ft = function (t) {
              return !!~j.indexOf(t);
            },
            Nt = function (t) {
              return (
                ("Height" === t ? vt : H["inner" + t]) ||
                V["client" + t] ||
                U["client" + t]
              );
            },
            Yt = function (t) {
              return (
                T(t, "getBoundingClientRect") ||
                (Ft(t)
                  ? function () {
                      return (hn.width = H.innerWidth), (hn.height = vt), hn;
                    }
                  : function () {
                      return ve(t);
                    })
              );
            },
            Wt = function (t, e, n) {
              var r = n.d,
                i = n.d2,
                s = n.a;
              return (s = T(t, "getBoundingClientRect"))
                ? function () {
                    return s()[r];
                  }
                : function () {
                    return (e ? Nt(i) : t["client" + i]) || 0;
                  };
            },
            Ht = function (t, e) {
              return !e || ~b.indexOf(t)
                ? Yt(t)
                : function () {
                    return hn;
                  };
            },
            Xt = function (t, e) {
              var n = e.s,
                r = e.d2,
                i = e.d,
                s = e.a;
              return Math.max(
                0,
                (n = "scroll" + r) && (s = T(t, n))
                  ? s() - Yt(t)()[i]
                  : Ft(t)
                    ? (V[n] || U[n]) - Nt(r)
                    : t[n] - t["offset" + r],
              );
            },
            Vt = function (t, e) {
              for (var n = 0; n < at.length; n += 3)
                (!e || ~e.indexOf(at[n + 1])) && t(at[n], at[n + 1], at[n + 2]);
            },
            Ut = function (t) {
              return "string" == typeof t;
            },
            jt = function (t) {
              return "function" == typeof t;
            },
            Gt = function (t) {
              return "number" == typeof t;
            },
            Qt = function (t) {
              return "object" == typeof t;
            },
            Zt = function (t, e, n) {
              return t && t.progress(e ? 0 : 1) && n && t.pause();
            },
            Jt = function (t, e) {
              if (t.enabled) {
                var n = t._ctx
                  ? t._ctx.add(function () {
                      return e(t);
                    })
                  : e(t);
                n && n.totalTime && (t.callbackAnimation = n);
              }
            },
            Kt = Math.abs,
            te = "left",
            ee = "top",
            ne = "right",
            re = "bottom",
            ie = "width",
            se = "height",
            ae = "Right",
            oe = "Left",
            le = "Top",
            ce = "Bottom",
            ue = "padding",
            he = "margin",
            de = "Width",
            fe = "Height",
            pe = "px",
            ge = function (t) {
              return H.getComputedStyle(t);
            },
            me = function (t) {
              var e = ge(t).position;
              t.style.position =
                "absolute" === e || "fixed" === e ? e : "relative";
            },
            _e = function (t, e) {
              for (var n in e) n in t || (t[n] = e[n]);
              return t;
            },
            ve = function (t, e) {
              var n =
                  e &&
                  "matrix(1, 0, 0, 1, 0, 0)" !== ge(t)[nt] &&
                  Y.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  }).progress(1),
                r = t.getBoundingClientRect();
              return n && n.progress(0).kill(), r;
            },
            ye = function (t, e) {
              var n = e.d2;
              return t["offset" + n] || t["client" + n] || 0;
            },
            be = function (t) {
              var e,
                n = [],
                r = t.labels,
                i = t.duration();
              for (e in r) n.push(r[e] / i);
              return n;
            },
            we = function (t) {
              return function (e) {
                return Y.utils.snap(be(t), e);
              };
            },
            xe = function (t) {
              var e = Y.utils.snap(t),
                n =
                  Array.isArray(t) &&
                  t.slice(0).sort(function (t, e) {
                    return t - e;
                  });
              return n
                ? function (t, r, i) {
                    var s;
                    if ((void 0 === i && (i = 0.001), !r)) return e(t);
                    if (r > 0) {
                      for (t -= i, s = 0; s < n.length; s++)
                        if (n[s] >= t) return n[s];
                      return n[s - 1];
                    }
                    for (s = n.length, t += i; s--; )
                      if (n[s] <= t) return n[s];
                    return n[0];
                  }
                : function (n, r, i) {
                    void 0 === i && (i = 0.001);
                    var s = e(n);
                    return !r || Math.abs(s - n) < i || s - n < 0 == r < 0
                      ? s
                      : e(r < 0 ? n - t : n + t);
                  };
            },
            Se = function (t) {
              return function (e, n) {
                return xe(be(t))(e, n.direction);
              };
            },
            Te = function (t, e, n, r) {
              return n.split(",").forEach(function (n) {
                return t(e, n, r);
              });
            },
            Ee = function (t, e, n, r, i) {
              return t.addEventListener(e, n, { passive: !r, capture: !!i });
            },
            Ae = function (t, e, n, r) {
              return t.removeEventListener(e, n, !!r);
            },
            Ce = function (t, e, n) {
              (n = n && n.wheelHandler) &&
                (t(e, "wheel", n), t(e, "touchmove", n));
            },
            Oe = {
              startColor: "green",
              endColor: "red",
              indent: 0,
              fontSize: "16px",
              fontWeight: "normal",
            },
            ke = { toggleActions: "play", anticipatePin: 0 },
            Me = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
            Le = function (t, e) {
              if (Ut(t)) {
                var n = t.indexOf("="),
                  r = ~n
                    ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1))
                    : 0;
                ~n &&
                  (t.indexOf("%") > n && (r *= e / 100),
                  (t = t.substr(0, n - 1))),
                  (t =
                    r +
                    (t in Me
                      ? Me[t] * e
                      : ~t.indexOf("%")
                        ? (parseFloat(t) * e) / 100
                        : parseFloat(t) || 0));
              }
              return t;
            },
            Pe = function (t, e, n, r, i, s, a, o) {
              var l = i.startColor,
                c = i.endColor,
                u = i.fontSize,
                h = i.indent,
                d = i.fontWeight,
                f = X.createElement("div"),
                p = Ft(n) || "fixed" === T(n, "pinType"),
                g = -1 !== t.indexOf("scroller"),
                m = p ? U : n,
                _ = -1 !== t.indexOf("start"),
                v = _ ? l : c,
                y =
                  "border-color:" +
                  v +
                  ";font-size:" +
                  u +
                  ";color:" +
                  v +
                  ";font-weight:" +
                  d +
                  ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
              return (
                (y += "position:" + ((g || o) && p ? "fixed;" : "absolute;")),
                (g || o || !p) &&
                  (y +=
                    (r === D ? ne : re) + ":" + (s + parseFloat(h)) + "px;"),
                a &&
                  (y +=
                    "box-sizing:border-box;text-align:left;width:" +
                    a.offsetWidth +
                    "px;"),
                (f._isStart = _),
                f.setAttribute(
                  "class",
                  "gsap-marker-" + t + (e ? " marker-" + e : ""),
                ),
                (f.style.cssText = y),
                (f.innerText = e || 0 === e ? t + "-" + e : t),
                m.children[0]
                  ? m.insertBefore(f, m.children[0])
                  : m.appendChild(f),
                (f._offset = f["offset" + r.op.d2]),
                De(f, 0, r, _),
                f
              );
            },
            De = function (t, e, n, r) {
              var i = { display: "block" },
                s = n[r ? "os2" : "p2"],
                a = n[r ? "p2" : "os2"];
              (t._isFlipped = r),
                (i[n.a + "Percent"] = r ? -100 : 0),
                (i[n.a] = r ? "1px" : 0),
                (i["border" + s + de] = 1),
                (i["border" + a + de] = 0),
                (i[n.p] = e + "px"),
                Y.set(t, i);
            },
            Ie = [],
            Re = {},
            ze = function () {
              return Ct() - kt > 34 && (xt || (xt = requestAnimationFrame(en)));
            },
            Be = function () {
              (!ut || !ut.isPressed || ut.startX > U.clientWidth) &&
                (y.cache++,
                ut ? xt || (xt = requestAnimationFrame(en)) : en(),
                kt || We("scrollStart"),
                (kt = Ct()));
            },
            $e = function () {
              (ft = H.innerWidth), (dt = H.innerHeight);
            },
            qe = function () {
              y.cache++,
                !tt &&
                  !ct &&
                  !X.fullscreenElement &&
                  !X.webkitFullscreenElement &&
                  (!ht ||
                    ft !== H.innerWidth ||
                    Math.abs(H.innerHeight - dt) > 0.25 * H.innerHeight) &&
                  G.restart(!0);
            },
            Fe = {},
            Ne = [],
            Ye = function t() {
              return Ae(vn, "scrollEnd", t) || Je(!0);
            },
            We = function (t) {
              return (
                (Fe[t] &&
                  Fe[t].map(function (t) {
                    return t();
                  })) ||
                Ne
              );
            },
            He = [],
            Xe = function (t) {
              for (var e = 0; e < He.length; e += 5)
                (!t || (He[e + 4] && He[e + 4].query === t)) &&
                  ((He[e].style.cssText = He[e + 1]),
                  He[e].getBBox &&
                    He[e].setAttribute("transform", He[e + 2] || ""),
                  (He[e + 3].uncache = 1));
            },
            Ve = function (t, e) {
              var n;
              for (rt = 0; rt < Ie.length; rt++)
                !(n = Ie[rt]) ||
                  (e && n._ctx !== e) ||
                  (t ? n.kill(1) : n.revert(!0, !0));
              (yt = !0), e && Xe(e), e || We("revert");
            },
            Ue = function (t, e) {
              y.cache++,
                (e || !St) &&
                  y.forEach(function (t) {
                    return jt(t) && t.cacheID++ && (t.rec = 0);
                  }),
                Ut(t) && (H.history.scrollRestoration = mt = t);
            },
            je = 0,
            Ge = function () {
              if (Tt !== je) {
                var t = (Tt = je);
                requestAnimationFrame(function () {
                  return t === je && Je(!0);
                });
              }
            },
            Qe = function () {
              U.appendChild(_t),
                (vt = (!ut && _t.offsetHeight) || H.innerHeight),
                U.removeChild(_t);
            },
            Ze = function (t) {
              return Q(
                ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
              ).forEach(function (e) {
                return (e.style.display = t ? "none" : "block");
              });
            },
            Je = function (t, e) {
              if (!kt || t || yt) {
                Qe(),
                  (St = vn.isRefreshing = !0),
                  y.forEach(function (t) {
                    return jt(t) && ++t.cacheID && (t.rec = t());
                  });
                var n = We("refreshInit");
                ot && vn.sort(),
                  e || Ve(),
                  y.forEach(function (t) {
                    jt(t) &&
                      (t.smooth && (t.target.style.scrollBehavior = "auto"),
                      t(0));
                  }),
                  Ie.slice(0).forEach(function (t) {
                    return t.refresh();
                  }),
                  (yt = !1),
                  Ie.forEach(function (t) {
                    if (t._subPinOffset && t.pin) {
                      var e = t.vars.horizontal
                          ? "offsetWidth"
                          : "offsetHeight",
                        n = t.pin[e];
                      t.revert(!0, 1),
                        t.adjustPinSpacing(t.pin[e] - n),
                        t.refresh();
                    }
                  }),
                  (bt = 1),
                  Ze(!0),
                  Ie.forEach(function (t) {
                    var e = Xt(t.scroller, t._dir),
                      n = "max" === t.vars.end || (t._endClamp && t.end > e),
                      r = t._startClamp && t.start >= e;
                    (n || r) &&
                      t.setPositions(
                        r ? e - 1 : t.start,
                        n ? Math.max(r ? e : t.start + 1, e) : t.end,
                        !0,
                      );
                  }),
                  Ze(!1),
                  (bt = 0),
                  n.forEach(function (t) {
                    return t && t.render && t.render(-1);
                  }),
                  y.forEach(function (t) {
                    jt(t) &&
                      (t.smooth &&
                        requestAnimationFrame(function () {
                          return (t.target.style.scrollBehavior = "smooth");
                        }),
                      t.rec && t(t.rec));
                  }),
                  Ue(mt, 1),
                  G.pause(),
                  je++,
                  (St = 2),
                  en(2),
                  Ie.forEach(function (t) {
                    return jt(t.vars.onRefresh) && t.vars.onRefresh(t);
                  }),
                  (St = vn.isRefreshing = !1),
                  We("refresh");
              } else Ee(vn, "scrollEnd", Ye);
            },
            Ke = 0,
            tn = 1,
            en = function (t) {
              if (2 === t || (!St && !yt)) {
                (vn.isUpdating = !0), Et && Et.update(0);
                var e = Ie.length,
                  n = Ct(),
                  r = n - Ot >= 50,
                  i = e && Ie[0].scroll();
                if (
                  ((tn = Ke > i ? -1 : 1),
                  St || (Ke = i),
                  r &&
                    (kt && !et && n - kt > 200 && ((kt = 0), We("scrollEnd")),
                    (J = Ot),
                    (Ot = n)),
                  tn < 0)
                ) {
                  for (rt = e; rt-- > 0; ) Ie[rt] && Ie[rt].update(0, r);
                  tn = 1;
                } else for (rt = 0; rt < e; rt++) Ie[rt] && Ie[rt].update(0, r);
                vn.isUpdating = !1;
              }
              xt = 0;
            },
            nn = [
              te,
              ee,
              re,
              ne,
              he + ce,
              he + ae,
              he + le,
              he + oe,
              "display",
              "flexShrink",
              "float",
              "zIndex",
              "gridColumnStart",
              "gridColumnEnd",
              "gridRowStart",
              "gridRowEnd",
              "gridArea",
              "justifySelf",
              "alignSelf",
              "placeSelf",
              "order",
            ],
            rn = nn.concat([
              ie,
              se,
              "boxSizing",
              "max" + de,
              "max" + fe,
              "position",
              he,
              ue,
              ue + le,
              ue + ae,
              ue + ce,
              ue + oe,
            ]),
            sn = function (t, e, n) {
              ln(n);
              var r = t._gsap;
              if (r.spacerIsNative) ln(r.spacerState);
              else if (t._gsap.swappedIn) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e));
              }
              t._gsap.swappedIn = !1;
            },
            an = function (t, e, n, r) {
              if (!t._gsap.swappedIn) {
                for (var i, s = nn.length, a = e.style, o = t.style; s--; )
                  a[(i = nn[s])] = n[i];
                (a.position =
                  "absolute" === n.position ? "absolute" : "relative"),
                  "inline" === n.display && (a.display = "inline-block"),
                  (o[re] = o[ne] = "auto"),
                  (a.flexBasis = n.flexBasis || "auto"),
                  (a.overflow = "visible"),
                  (a.boxSizing = "border-box"),
                  (a[ie] = ye(t, P) + pe),
                  (a[se] = ye(t, D) + pe),
                  (a[ue] = o[he] = o[ee] = o[te] = "0"),
                  ln(r),
                  (o[ie] = o["max" + de] = n[ie]),
                  (o[se] = o["max" + fe] = n[se]),
                  (o[ue] = n[ue]),
                  t.parentNode !== e &&
                    (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                  (t._gsap.swappedIn = !0);
              }
            },
            on = /([A-Z])/g,
            ln = function (t) {
              if (t) {
                var e,
                  n,
                  r = t.t.style,
                  i = t.length,
                  s = 0;
                for (
                  (t.t._gsap || Y.core.getCache(t.t)).uncache = 1;
                  s < i;
                  s += 2
                )
                  (n = t[s + 1]),
                    (e = t[s]),
                    n
                      ? (r[e] = n)
                      : r[e] &&
                        r.removeProperty(e.replace(on, "-$1").toLowerCase());
              }
            },
            cn = function (t) {
              for (var e = rn.length, n = t.style, r = [], i = 0; i < e; i++)
                r.push(rn[i], n[rn[i]]);
              return (r.t = t), r;
            },
            un = function (t, e, n) {
              for (var r, i = [], s = t.length, a = n ? 8 : 0; a < s; a += 2)
                (r = t[a]), i.push(r, r in e ? e[r] : t[a + 1]);
              return (i.t = t.t), i;
            },
            hn = { left: 0, top: 0 },
            dn = function (t, e, n, r, i, s, a, o, l, c, u, h, d, f) {
              jt(t) && (t = t(o)),
                Ut(t) &&
                  "max" === t.substr(0, 3) &&
                  (t =
                    h + ("=" === t.charAt(4) ? Le("0" + t.substr(3), n) : 0));
              var p,
                g,
                m,
                _ = d ? d.time() : 0;
              if ((d && d.seek(0), isNaN(t) || (t = +t), Gt(t)))
                d &&
                  (t = Y.utils.mapRange(
                    d.scrollTrigger.start,
                    d.scrollTrigger.end,
                    0,
                    h,
                    t,
                  )),
                  a && De(a, n, r, !0);
              else {
                jt(e) && (e = e(o));
                var v,
                  y,
                  b,
                  w,
                  x = (t || "0").split(" ");
                (m = I(e, o) || U),
                  ((v = ve(m) || {}) && (v.left || v.top)) ||
                    "none" !== ge(m).display ||
                    ((w = m.style.display),
                    (m.style.display = "block"),
                    (v = ve(m)),
                    w
                      ? (m.style.display = w)
                      : m.style.removeProperty("display")),
                  (y = Le(x[0], v[r.d])),
                  (b = Le(x[1] || "0", n)),
                  (t = v[r.p] - l[r.p] - c + y + i - b),
                  a && De(a, b, r, n - b < 20 || (a._isStart && b > 20)),
                  (n -= n - b);
              }
              if ((f && ((o[f] = t || -0.001), t < 0 && (t = 0)), s)) {
                var S = t + n,
                  T = s._isStart;
                (p = "scroll" + r.d2),
                  De(
                    s,
                    S,
                    r,
                    (T && S > 20) ||
                      (!T &&
                        (u ? Math.max(U[p], V[p]) : s.parentNode[p]) <= S + 1),
                  ),
                  u &&
                    ((l = ve(a)),
                    u &&
                      (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + pe));
              }
              return (
                d &&
                  m &&
                  ((p = ve(m)),
                  d.seek(h),
                  (g = ve(m)),
                  (d._caScrollDist = p[r.p] - g[r.p]),
                  (t = (t / d._caScrollDist) * h)),
                d && d.seek(_),
                d ? t : Math.round(t)
              );
            },
            fn = /(webkit|moz|length|cssText|inset)/i,
            pn = function (t, e, n, r) {
              if (t.parentNode !== e) {
                var i,
                  s,
                  a = t.style;
                if (e === U) {
                  for (i in ((t._stOrig = a.cssText), (s = ge(t))))
                    +i ||
                      fn.test(i) ||
                      !s[i] ||
                      "string" != typeof a[i] ||
                      "0" === i ||
                      (a[i] = s[i]);
                  (a.top = n), (a.left = r);
                } else a.cssText = t._stOrig;
                (Y.core.getCache(t).uncache = 1), e.appendChild(t);
              }
            },
            gn = function (t, e, n) {
              var r = e,
                i = r;
              return function (e) {
                var s = Math.round(t());
                return (
                  s !== r &&
                    s !== i &&
                    Math.abs(s - r) > 3 &&
                    Math.abs(s - i) > 3 &&
                    ((e = s), n && n()),
                  (i = r),
                  (r = e),
                  e
                );
              };
            },
            mn = function (t, e, n) {
              var r = {};
              (r[e.p] = "+=" + n), Y.set(t, r);
            },
            _n = function (t, e) {
              var n = R(t, e),
                r = "_scroll" + e.p2,
                i = function e(i, s, a, o, l) {
                  var c = e.tween,
                    u = s.onComplete,
                    h = {};
                  a = a || n();
                  var d = gn(n, a, function () {
                    c.kill(), (e.tween = 0);
                  });
                  return (
                    (l = (o && l) || 0),
                    (o = o || i - a),
                    c && c.kill(),
                    (s[r] = i),
                    (s.modifiers = h),
                    (h[r] = function () {
                      return d(a + o * c.ratio + l * c.ratio * c.ratio);
                    }),
                    (s.onUpdate = function () {
                      y.cache++, e.tween && en();
                    }),
                    (s.onComplete = function () {
                      (e.tween = 0), u && u.call(c);
                    }),
                    (c = e.tween = Y.to(t, s))
                  );
                };
              return (
                (t[r] = n),
                (n.wheelHandler = function () {
                  return i.tween && i.tween.kill() && (i.tween = 0);
                }),
                Ee(t, "wheel", n.wheelHandler),
                vn.isTouch && Ee(t, "touchmove", n.wheelHandler),
                i
              );
            },
            vn = (function () {
              function t(e, n) {
                W ||
                  t.register(Y) ||
                  console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                  gt(this),
                  this.init(e, n);
              }
              return (
                (t.prototype.init = function (e, n) {
                  if (
                    ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    Mt)
                  ) {
                    var r,
                      i,
                      s,
                      a,
                      o,
                      l,
                      c,
                      u,
                      h,
                      d,
                      f,
                      p,
                      g,
                      m,
                      _,
                      v,
                      w,
                      x,
                      S,
                      E,
                      A,
                      C,
                      O,
                      k,
                      M,
                      L,
                      z,
                      B,
                      $,
                      q,
                      F,
                      N,
                      W,
                      j,
                      G,
                      K,
                      nt,
                      it,
                      st,
                      at = (e = _e(
                        Ut(e) || Gt(e) || e.nodeType ? { trigger: e } : e,
                        ke,
                      )),
                      ct = at.onUpdate,
                      ut = at.toggleClass,
                      ht = at.id,
                      dt = at.onToggle,
                      ft = at.onRefresh,
                      pt = at.scrub,
                      gt = at.trigger,
                      mt = at.pin,
                      _t = at.pinSpacing,
                      vt = at.invalidateOnRefresh,
                      yt = at.anticipatePin,
                      xt = at.onScrubComplete,
                      Tt = at.onSnapComplete,
                      Ot = at.once,
                      Dt = at.snap,
                      It = at.pinReparent,
                      Rt = at.pinSpacer,
                      $t = at.containerAnimation,
                      qt = at.fastScrollEnd,
                      Nt = at.preventOverlaps,
                      Yt =
                        e.horizontal ||
                        (e.containerAnimation && !1 !== e.horizontal)
                          ? P
                          : D,
                      Vt = !pt && 0 !== pt,
                      te = I(e.scroller || H),
                      ee = Y.core.getCache(te),
                      ne = Ft(te),
                      re =
                        "fixed" ===
                        ("pinType" in e
                          ? e.pinType
                          : T(te, "pinType") || (ne && "fixed")),
                      be = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                      Te = Vt && e.toggleActions.split(" "),
                      Ce = "markers" in e ? e.markers : ke.markers,
                      Me = ne
                        ? 0
                        : parseFloat(ge(te)["border" + Yt.p2 + de]) || 0,
                      De = this,
                      ze =
                        e.onRefreshInit &&
                        function () {
                          return e.onRefreshInit(De);
                        },
                      $e = Wt(te, ne, Yt),
                      Fe = Ht(te, ne),
                      Ne = 0,
                      We = 0,
                      He = 0,
                      Xe = R(te, Yt);
                    if (
                      ((De._startClamp = De._endClamp = !1),
                      (De._dir = Yt),
                      (yt *= 45),
                      (De.scroller = te),
                      (De.scroll = $t ? $t.time.bind($t) : Xe),
                      (a = Xe()),
                      (De.vars = e),
                      (n = n || e.animation),
                      "refreshPriority" in e &&
                        ((ot = 1), -9999 === e.refreshPriority && (Et = De)),
                      (ee.tweenScroll = ee.tweenScroll || {
                        top: _n(te, D),
                        left: _n(te, P),
                      }),
                      (De.tweenTo = r = ee.tweenScroll[Yt.p]),
                      (De.scrubDuration = function (t) {
                        (W = Gt(t) && t)
                          ? N
                            ? N.duration(t)
                            : (N = Y.to(n, {
                                ease: "expo",
                                totalProgress: "+=0",
                                duration: W,
                                paused: !0,
                                onComplete: function () {
                                  return xt && xt(De);
                                },
                              }))
                          : (N && N.progress(1).kill(), (N = 0));
                      }),
                      n &&
                        ((n.vars.lazy = !1),
                        (n._initted && !De.isReverted) ||
                          (!1 !== n.vars.immediateRender &&
                            !1 !== e.immediateRender &&
                            n.duration() &&
                            n.render(0, !0, !0)),
                        (De.animation = n.pause()),
                        (n.scrollTrigger = De),
                        De.scrubDuration(pt),
                        (q = 0),
                        ht || (ht = n.vars.id)),
                      Dt &&
                        ((Qt(Dt) && !Dt.push) || (Dt = { snapTo: Dt }),
                        "scrollBehavior" in U.style &&
                          Y.set(ne ? [U, V] : te, { scrollBehavior: "auto" }),
                        y.forEach(function (t) {
                          return (
                            jt(t) &&
                            t.target === (ne ? X.scrollingElement || V : te) &&
                            (t.smooth = !1)
                          );
                        }),
                        (s = jt(Dt.snapTo)
                          ? Dt.snapTo
                          : "labels" === Dt.snapTo
                            ? we(n)
                            : "labelsDirectional" === Dt.snapTo
                              ? Se(n)
                              : !1 !== Dt.directional
                                ? function (t, e) {
                                    return xe(Dt.snapTo)(
                                      t,
                                      Ct() - We < 500 ? 0 : e.direction,
                                    );
                                  }
                                : Y.utils.snap(Dt.snapTo)),
                        (j = Dt.duration || { min: 0.1, max: 2 }),
                        (j = Qt(j) ? Z(j.min, j.max) : Z(j, j)),
                        (G = Y.delayedCall(
                          Dt.delay || W / 2 || 0.1,
                          function () {
                            var t = Xe(),
                              e = Ct() - We < 500,
                              i = r.tween;
                            if (
                              !(e || Math.abs(De.getVelocity()) < 10) ||
                              i ||
                              et ||
                              Ne === t
                            )
                              De.isActive && Ne !== t && G.restart(!0);
                            else {
                              var a = (t - l) / m,
                                o = n && !Vt ? n.totalProgress() : a,
                                u = e ? 0 : ((o - F) / (Ct() - J)) * 1e3 || 0,
                                h = Y.utils.clamp(
                                  -a,
                                  1 - a,
                                  (Kt(u / 2) * u) / 0.185,
                                ),
                                d = a + (!1 === Dt.inertia ? 0 : h),
                                f = Z(0, 1, s(d, De)),
                                p = Math.round(l + f * m),
                                g = Dt,
                                _ = g.onStart,
                                v = g.onInterrupt,
                                y = g.onComplete;
                              if (t <= c && t >= l && p !== t) {
                                if (i && !i._initted && i.data <= Kt(p - t))
                                  return;
                                !1 === Dt.inertia && (h = f - a),
                                  r(
                                    p,
                                    {
                                      duration: j(
                                        Kt(
                                          (0.185 *
                                            Math.max(Kt(d - o), Kt(f - o))) /
                                            u /
                                            0.05 || 0,
                                        ),
                                      ),
                                      ease: Dt.ease || "power3",
                                      data: Kt(p - t),
                                      onInterrupt: function () {
                                        return G.restart(!0) && v && v(De);
                                      },
                                      onComplete: function () {
                                        De.update(),
                                          (Ne = Xe()),
                                          N && n && n.progress(f),
                                          (q = F =
                                            n && !Vt
                                              ? n.totalProgress()
                                              : De.progress),
                                          Tt && Tt(De),
                                          y && y(De);
                                      },
                                    },
                                    t,
                                    h * m,
                                    p - t - h * m,
                                  ),
                                  _ && _(De, r.tween);
                              }
                            }
                          },
                        ).pause())),
                      ht && (Re[ht] = De),
                      (st =
                        (gt = De.trigger = I(gt || (!0 !== mt && mt))) &&
                        gt._gsap &&
                        gt._gsap.stRevert) && (st = st(De)),
                      (mt = !0 === mt ? gt : I(mt)),
                      Ut(ut) && (ut = { targets: gt, className: ut }),
                      mt &&
                        (!1 === _t ||
                          _t === he ||
                          (_t =
                            !(
                              !_t &&
                              mt.parentNode &&
                              mt.parentNode.style &&
                              "flex" === ge(mt.parentNode).display
                            ) && ue),
                        (De.pin = mt),
                        (i = Y.core.getCache(mt)).spacer
                          ? (_ = i.pinState)
                          : (Rt &&
                              ((Rt = I(Rt)) &&
                                !Rt.nodeType &&
                                (Rt = Rt.current || Rt.nativeElement),
                              (i.spacerIsNative = !!Rt),
                              Rt && (i.spacerState = cn(Rt))),
                            (i.spacer = x = Rt || X.createElement("div")),
                            x.classList.add("pin-spacer"),
                            ht && x.classList.add("pin-spacer-" + ht),
                            (i.pinState = _ = cn(mt))),
                        !1 !== e.force3D && Y.set(mt, { force3D: !0 }),
                        (De.spacer = x = i.spacer),
                        ($ = ge(mt)),
                        (k = $[_t + Yt.os2]),
                        (E = Y.getProperty(mt)),
                        (A = Y.quickSetter(mt, Yt.a, pe)),
                        an(mt, x, $),
                        (w = cn(mt))),
                      Ce)
                    ) {
                      (p = Qt(Ce) ? _e(Ce, Oe) : Oe),
                        (d = Pe("scroller-start", ht, te, Yt, p, 0)),
                        (f = Pe("scroller-end", ht, te, Yt, p, 0, d)),
                        (S = d["offset" + Yt.op.d2]);
                      var Ve = I(T(te, "content") || te);
                      (u = this.markerStart =
                        Pe("start", ht, Ve, Yt, p, S, 0, $t)),
                        (h = this.markerEnd =
                          Pe("end", ht, Ve, Yt, p, S, 0, $t)),
                        $t && (it = Y.quickSetter([u, h], Yt.a, pe)),
                        re ||
                          (b.length && !0 === T(te, "fixedMarkers")) ||
                          (me(ne ? U : te),
                          Y.set([d, f], { force3D: !0 }),
                          (L = Y.quickSetter(d, Yt.a, pe)),
                          (B = Y.quickSetter(f, Yt.a, pe)));
                    }
                    if ($t) {
                      var Ue = $t.vars.onUpdate,
                        je = $t.vars.onUpdateParams;
                      $t.eventCallback("onUpdate", function () {
                        De.update(0, 0, 1), Ue && Ue.apply($t, je || []);
                      });
                    }
                    if (
                      ((De.previous = function () {
                        return Ie[Ie.indexOf(De) - 1];
                      }),
                      (De.next = function () {
                        return Ie[Ie.indexOf(De) + 1];
                      }),
                      (De.revert = function (t, e) {
                        if (!e) return De.kill(!0);
                        var r = !1 !== t || !De.enabled,
                          i = tt;
                        r !== De.isReverted &&
                          (r &&
                            ((K = Math.max(Xe(), De.scroll.rec || 0)),
                            (He = De.progress),
                            (nt = n && n.progress())),
                          u &&
                            [u, h, d, f].forEach(function (t) {
                              return (t.style.display = r ? "none" : "block");
                            }),
                          r && ((tt = De), De.update(r)),
                          !mt ||
                            (It && De.isActive) ||
                            (r ? sn(mt, x, _) : an(mt, x, ge(mt), M)),
                          r || De.update(r),
                          (tt = i),
                          (De.isReverted = r));
                      }),
                      (De.refresh = function (i, s, p, y) {
                        if ((!tt && De.enabled) || s)
                          if (mt && i && kt) Ee(t, "scrollEnd", Ye);
                          else {
                            !St && ze && ze(De),
                              (tt = De),
                              r.tween && !p && (r.tween.kill(), (r.tween = 0)),
                              N && N.pause(),
                              vt && n && n.revert({ kill: !1 }).invalidate(),
                              De.isReverted || De.revert(!0, !0),
                              (De._subPinOffset = !1);
                            var b,
                              S,
                              T,
                              A,
                              k,
                              L,
                              B,
                              $,
                              q,
                              F,
                              W,
                              H,
                              j,
                              Q = $e(),
                              Z = Fe(),
                              J = $t ? $t.duration() : Xt(te, Yt),
                              et = m <= 0.01,
                              rt = 0,
                              it = y || 0,
                              st = Qt(p) ? p.end : e.end,
                              at = e.endTrigger || gt,
                              ot = Qt(p)
                                ? p.start
                                : e.start ||
                                  (0 !== e.start && gt
                                    ? mt
                                      ? "0 0"
                                      : "0 100%"
                                    : 0),
                              ct = (De.pinnedContainer =
                                e.pinnedContainer && I(e.pinnedContainer, De)),
                              ut = (gt && Math.max(0, Ie.indexOf(De))) || 0,
                              ht = ut;
                            for (
                              Ce &&
                              Qt(p) &&
                              ((H = Y.getProperty(d, Yt.p)),
                              (j = Y.getProperty(f, Yt.p)));
                              ht--;

                            )
                              (L = Ie[ht]).end || L.refresh(0, 1) || (tt = De),
                                !(B = L.pin) ||
                                  (B !== gt && B !== mt && B !== ct) ||
                                  L.isReverted ||
                                  (F || (F = []),
                                  F.unshift(L),
                                  L.revert(!0, !0)),
                                L !== Ie[ht] && (ut--, ht--);
                            for (
                              jt(ot) && (ot = ot(De)),
                                ot = Lt(ot, "start", De),
                                l =
                                  dn(
                                    ot,
                                    gt,
                                    Q,
                                    Yt,
                                    Xe(),
                                    u,
                                    d,
                                    De,
                                    Z,
                                    Me,
                                    re,
                                    J,
                                    $t,
                                    De._startClamp && "_startClamp",
                                  ) || (mt ? -0.001 : 0),
                                jt(st) && (st = st(De)),
                                Ut(st) &&
                                  !st.indexOf("+=") &&
                                  (~st.indexOf(" ")
                                    ? (st =
                                        (Ut(ot) ? ot.split(" ")[0] : "") + st)
                                    : ((rt = Le(st.substr(2), Q)),
                                      (st = Ut(ot)
                                        ? ot
                                        : ($t
                                            ? Y.utils.mapRange(
                                                0,
                                                $t.duration(),
                                                $t.scrollTrigger.start,
                                                $t.scrollTrigger.end,
                                                l,
                                              )
                                            : l) + rt),
                                      (at = gt))),
                                st = Lt(st, "end", De),
                                c =
                                  Math.max(
                                    l,
                                    dn(
                                      st || (at ? "100% 0" : J),
                                      at,
                                      Q,
                                      Yt,
                                      Xe() + rt,
                                      h,
                                      f,
                                      De,
                                      Z,
                                      Me,
                                      re,
                                      J,
                                      $t,
                                      De._endClamp && "_endClamp",
                                    ),
                                  ) || -0.001,
                                rt = 0,
                                ht = ut;
                              ht--;

                            )
                              (B = (L = Ie[ht]).pin) &&
                                L.start - L._pinPush <= l &&
                                !$t &&
                                L.end > 0 &&
                                ((b =
                                  L.end -
                                  (De._startClamp
                                    ? Math.max(0, L.start)
                                    : L.start)),
                                ((B === gt && L.start - L._pinPush < l) ||
                                  B === ct) &&
                                  isNaN(ot) &&
                                  (rt += b * (1 - L.progress)),
                                B === mt && (it += b));
                            if (
                              ((l += rt),
                              (c += rt),
                              De._startClamp && (De._startClamp += rt),
                              De._endClamp &&
                                !St &&
                                ((De._endClamp = c || -0.001),
                                (c = Math.min(c, Xt(te, Yt)))),
                              (m = c - l || ((l -= 0.01) && 0.001)),
                              et &&
                                (He = Y.utils.clamp(
                                  0,
                                  1,
                                  Y.utils.normalize(l, c, K),
                                )),
                              (De._pinPush = it),
                              u &&
                                rt &&
                                (((b = {})[Yt.a] = "+=" + rt),
                                ct && (b[Yt.p] = "-=" + Xe()),
                                Y.set([u, h], b)),
                              !mt || (bt && De.end >= Xt(te, Yt)))
                            ) {
                              if (gt && Xe() && !$t)
                                for (S = gt.parentNode; S && S !== U; )
                                  S._pinOffset &&
                                    ((l -= S._pinOffset), (c -= S._pinOffset)),
                                    (S = S.parentNode);
                            } else
                              (b = ge(mt)),
                                (A = Yt === D),
                                (T = Xe()),
                                (C = parseFloat(E(Yt.a)) + it),
                                !J &&
                                  c > 1 &&
                                  ((W = {
                                    style: (W = (
                                      ne ? X.scrollingElement || V : te
                                    ).style),
                                    value: W["overflow" + Yt.a.toUpperCase()],
                                  }),
                                  ne &&
                                    "scroll" !==
                                      ge(U)["overflow" + Yt.a.toUpperCase()] &&
                                    (W.style["overflow" + Yt.a.toUpperCase()] =
                                      "scroll")),
                                an(mt, x, b),
                                (w = cn(mt)),
                                (S = ve(mt, !0)),
                                ($ = re && R(te, A ? P : D)()),
                                _t &&
                                  (((M = [_t + Yt.os2, m + it + pe]).t = x),
                                  (ht = _t === ue ? ye(mt, Yt) + m + it : 0) &&
                                    (M.push(Yt.d, ht + pe),
                                    "auto" !== x.style.flexBasis &&
                                      (x.style.flexBasis = ht + pe)),
                                  ln(M),
                                  ct &&
                                    Ie.forEach(function (t) {
                                      t.pin === ct &&
                                        !1 !== t.vars.pinSpacing &&
                                        (t._subPinOffset = !0);
                                    }),
                                  re && Xe(K)),
                                re &&
                                  (((k = {
                                    top: S.top + (A ? T - l : $) + pe,
                                    left: S.left + (A ? $ : T - l) + pe,
                                    boxSizing: "border-box",
                                    position: "fixed",
                                  })[ie] = k["max" + de] =
                                    Math.ceil(S.width) + pe),
                                  (k[se] = k["max" + fe] =
                                    Math.ceil(S.height) + pe),
                                  (k[he] =
                                    k[he + le] =
                                    k[he + ae] =
                                    k[he + ce] =
                                    k[he + oe] =
                                      "0"),
                                  (k[ue] = b[ue]),
                                  (k[ue + le] = b[ue + le]),
                                  (k[ue + ae] = b[ue + ae]),
                                  (k[ue + ce] = b[ue + ce]),
                                  (k[ue + oe] = b[ue + oe]),
                                  (v = un(_, k, It)),
                                  St && Xe(0)),
                                n
                                  ? ((q = n._initted),
                                    lt(1),
                                    n.render(n.duration(), !0, !0),
                                    (O = E(Yt.a) - C + m + it),
                                    (z = Math.abs(m - O) > 1),
                                    re && z && v.splice(v.length - 2, 2),
                                    n.render(0, !0, !0),
                                    q || n.invalidate(!0),
                                    n.parent || n.totalTime(n.totalTime()),
                                    lt(0))
                                  : (O = m),
                                W &&
                                  (W.value
                                    ? (W.style[
                                        "overflow" + Yt.a.toUpperCase()
                                      ] = W.value)
                                    : W.style.removeProperty(
                                        "overflow-" + Yt.a,
                                      ));
                            F &&
                              F.forEach(function (t) {
                                return t.revert(!1, !0);
                              }),
                              (De.start = l),
                              (De.end = c),
                              (a = o = St ? K : Xe()),
                              $t || St || (a < K && Xe(K), (De.scroll.rec = 0)),
                              De.revert(!1, !0),
                              (We = Ct()),
                              G && ((Ne = -1), G.restart(!0)),
                              (tt = 0),
                              n &&
                                Vt &&
                                (n._initted || nt) &&
                                n.progress() !== nt &&
                                n
                                  .progress(nt || 0, !0)
                                  .render(n.time(), !0, !0),
                              (et || He !== De.progress || $t) &&
                                (n &&
                                  !Vt &&
                                  n.totalProgress(
                                    $t && l < -0.001 && !He
                                      ? Y.utils.normalize(l, c, 0)
                                      : He,
                                    !0,
                                  ),
                                (De.progress =
                                  et || (a - l) / m === He ? 0 : He)),
                              mt &&
                                _t &&
                                (x._pinOffset = Math.round(De.progress * O)),
                              N && N.invalidate(),
                              isNaN(H) ||
                                ((H -= Y.getProperty(d, Yt.p)),
                                (j -= Y.getProperty(f, Yt.p)),
                                mn(d, Yt, H),
                                mn(u, Yt, H - (y || 0)),
                                mn(f, Yt, j),
                                mn(h, Yt, j - (y || 0))),
                              et && !St && De.update(),
                              !ft || St || g || ((g = !0), ft(De), (g = !1));
                          }
                      }),
                      (De.getVelocity = function () {
                        return ((Xe() - o) / (Ct() - J)) * 1e3 || 0;
                      }),
                      (De.endAnimation = function () {
                        Zt(De.callbackAnimation),
                          n &&
                            (N
                              ? N.progress(1)
                              : n.paused()
                                ? Vt || Zt(n, De.direction < 0, 1)
                                : Zt(n, n.reversed()));
                      }),
                      (De.labelToScroll = function (t) {
                        return (
                          (n &&
                            n.labels &&
                            (l || De.refresh() || l) +
                              (n.labels[t] / n.duration()) * m) ||
                          0
                        );
                      }),
                      (De.getTrailing = function (t) {
                        var e = Ie.indexOf(De),
                          n =
                            De.direction > 0
                              ? Ie.slice(0, e).reverse()
                              : Ie.slice(e + 1);
                        return (
                          Ut(t)
                            ? n.filter(function (e) {
                                return e.vars.preventOverlaps === t;
                              })
                            : n
                        ).filter(function (t) {
                          return De.direction > 0 ? t.end <= l : t.start >= c;
                        });
                      }),
                      (De.update = function (t, e, i) {
                        if (!$t || i || t) {
                          var s,
                            u,
                            h,
                            f,
                            p,
                            g,
                            _,
                            y = !0 === St ? K : De.scroll(),
                            b = t ? 0 : (y - l) / m,
                            S = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                            T = De.progress;
                          if (
                            (e &&
                              ((o = a),
                              (a = $t ? Xe() : y),
                              Dt &&
                                ((F = q),
                                (q = n && !Vt ? n.totalProgress() : S))),
                            yt &&
                              !S &&
                              mt &&
                              !tt &&
                              !At &&
                              kt &&
                              l < y + ((y - o) / (Ct() - J)) * yt &&
                              (S = 1e-4),
                            S !== T && De.enabled)
                          ) {
                            if (
                              ((f =
                                (p =
                                  (s = De.isActive = !!S && S < 1) !=
                                  (!!T && T < 1)) || !!S != !!T),
                              (De.direction = S > T ? 1 : -1),
                              (De.progress = S),
                              f &&
                                !tt &&
                                ((u =
                                  S && !T ? 0 : 1 === S ? 1 : 1 === T ? 2 : 3),
                                Vt &&
                                  ((h =
                                    (!p && "none" !== Te[u + 1] && Te[u + 1]) ||
                                    Te[u]),
                                  (_ =
                                    n &&
                                    ("complete" === h ||
                                      "reset" === h ||
                                      h in n)))),
                              Nt &&
                                (p || _) &&
                                (_ || pt || !n) &&
                                (jt(Nt)
                                  ? Nt(De)
                                  : De.getTrailing(Nt).forEach(function (t) {
                                      return t.endAnimation();
                                    })),
                              Vt ||
                                (!N || tt || At
                                  ? n &&
                                    n.totalProgress(S, !(!tt || (!We && !t)))
                                  : (N._dp._time - N._start !== N._time &&
                                      N.render(N._dp._time - N._start),
                                    N.resetTo
                                      ? N.resetTo(
                                          "totalProgress",
                                          S,
                                          n._tTime / n._tDur,
                                        )
                                      : ((N.vars.totalProgress = S),
                                        N.invalidate().restart()))),
                              mt)
                            )
                              if ((t && _t && (x.style[_t + Yt.os2] = k), re)) {
                                if (f) {
                                  if (
                                    ((g =
                                      !t &&
                                      S > T &&
                                      c + 1 > y &&
                                      y + 1 >= Xt(te, Yt)),
                                    It)
                                  )
                                    if (t || (!s && !g)) pn(mt, x);
                                    else {
                                      var E = ve(mt, !0),
                                        M = y - l;
                                      pn(
                                        mt,
                                        U,
                                        E.top + (Yt === D ? M : 0) + pe,
                                        E.left + (Yt === D ? 0 : M) + pe,
                                      );
                                    }
                                  ln(s || g ? v : w),
                                    (z && S < 1 && s) ||
                                      A(C + (1 !== S || g ? 0 : O));
                                }
                              } else A(Bt(C + O * S));
                            Dt && !r.tween && !tt && !At && G.restart(!0),
                              ut &&
                                (p || (Ot && S && (S < 1 || !wt))) &&
                                Q(ut.targets).forEach(function (t) {
                                  return t.classList[
                                    s || Ot ? "add" : "remove"
                                  ](ut.className);
                                }),
                              ct && !Vt && !t && ct(De),
                              f && !tt
                                ? (Vt &&
                                    (_ &&
                                      ("complete" === h
                                        ? n.pause().totalProgress(1)
                                        : "reset" === h
                                          ? n.restart(!0).pause()
                                          : "restart" === h
                                            ? n.restart(!0)
                                            : n[h]()),
                                    ct && ct(De)),
                                  (!p && wt) ||
                                    (dt && p && Jt(De, dt),
                                    be[u] && Jt(De, be[u]),
                                    Ot &&
                                      (1 === S ? De.kill(!1, 1) : (be[u] = 0)),
                                    p ||
                                      (be[(u = 1 === S ? 1 : 3)] &&
                                        Jt(De, be[u]))),
                                  qt &&
                                    !s &&
                                    Math.abs(De.getVelocity()) >
                                      (Gt(qt) ? qt : 2500) &&
                                    (Zt(De.callbackAnimation),
                                    N
                                      ? N.progress(1)
                                      : Zt(n, "reverse" === h ? 1 : !S, 1)))
                                : Vt && ct && !tt && ct(De);
                          }
                          if (B) {
                            var P = $t
                              ? (y / $t.duration()) * ($t._caScrollDist || 0)
                              : y;
                            L(P + (d._isFlipped ? 1 : 0)), B(P);
                          }
                          it &&
                            it((-y / $t.duration()) * ($t._caScrollDist || 0));
                        }
                      }),
                      (De.enable = function (e, n) {
                        De.enabled ||
                          ((De.enabled = !0),
                          Ee(te, "resize", qe),
                          ne || Ee(te, "scroll", Be),
                          ze && Ee(t, "refreshInit", ze),
                          !1 !== e &&
                            ((De.progress = He = 0), (a = o = Ne = Xe())),
                          !1 !== n && De.refresh());
                      }),
                      (De.getTween = function (t) {
                        return t && r ? r.tween : N;
                      }),
                      (De.setPositions = function (t, e, n, r) {
                        if ($t) {
                          var i = $t.scrollTrigger,
                            s = $t.duration(),
                            a = i.end - i.start;
                          (t = i.start + (a * t) / s),
                            (e = i.start + (a * e) / s);
                        }
                        De.refresh(
                          !1,
                          !1,
                          {
                            start: Pt(t, n && !!De._startClamp),
                            end: Pt(e, n && !!De._endClamp),
                          },
                          r,
                        ),
                          De.update();
                      }),
                      (De.adjustPinSpacing = function (t) {
                        if (M && t) {
                          var e = M.indexOf(Yt.d) + 1;
                          (M[e] = parseFloat(M[e]) + t + pe),
                            (M[1] = parseFloat(M[1]) + t + pe),
                            ln(M);
                        }
                      }),
                      (De.disable = function (e, n) {
                        if (
                          De.enabled &&
                          (!1 !== e && De.revert(!0, !0),
                          (De.enabled = De.isActive = !1),
                          n || (N && N.pause()),
                          (K = 0),
                          i && (i.uncache = 1),
                          ze && Ae(t, "refreshInit", ze),
                          G &&
                            (G.pause(),
                            r.tween && r.tween.kill() && (r.tween = 0)),
                          !ne)
                        ) {
                          for (var s = Ie.length; s--; )
                            if (Ie[s].scroller === te && Ie[s] !== De) return;
                          Ae(te, "resize", qe), ne || Ae(te, "scroll", Be);
                        }
                      }),
                      (De.kill = function (t, r) {
                        De.disable(t, r),
                          N && !r && N.kill(),
                          ht && delete Re[ht];
                        var s = Ie.indexOf(De);
                        s >= 0 && Ie.splice(s, 1),
                          s === rt && tn > 0 && rt--,
                          (s = 0),
                          Ie.forEach(function (t) {
                            return t.scroller === De.scroller && (s = 1);
                          }),
                          s || St || (De.scroll.rec = 0),
                          n &&
                            ((n.scrollTrigger = null),
                            t && n.revert({ kill: !1 }),
                            r || n.kill()),
                          u &&
                            [u, h, d, f].forEach(function (t) {
                              return (
                                t.parentNode && t.parentNode.removeChild(t)
                              );
                            }),
                          Et === De && (Et = 0),
                          mt &&
                            (i && (i.uncache = 1),
                            (s = 0),
                            Ie.forEach(function (t) {
                              return t.pin === mt && s++;
                            }),
                            s || (i.spacer = 0)),
                          e.onKill && e.onKill(De);
                      }),
                      Ie.push(De),
                      De.enable(!1, !1),
                      st && st(De),
                      n && n.add && !m)
                    ) {
                      var Qe = De.update;
                      (De.update = function () {
                        (De.update = Qe), l || c || De.refresh();
                      }),
                        Y.delayedCall(0.01, De.update),
                        (m = 0.01),
                        (l = c = 0);
                    } else De.refresh();
                    mt && Ge();
                  } else this.update = this.refresh = this.kill = zt;
                }),
                (t.register = function (e) {
                  return (
                    W ||
                      ((Y = e || qt()),
                      $t() && window.document && t.enable(),
                      (W = Mt)),
                    W
                  );
                }),
                (t.defaults = function (t) {
                  if (t) for (var e in t) ke[e] = t[e];
                  return ke;
                }),
                (t.disable = function (t, e) {
                  (Mt = 0),
                    Ie.forEach(function (n) {
                      return n[e ? "kill" : "disable"](t);
                    }),
                    Ae(H, "wheel", Be),
                    Ae(X, "scroll", Be),
                    clearInterval(K),
                    Ae(X, "touchcancel", zt),
                    Ae(U, "touchstart", zt),
                    Te(Ae, X, "pointerdown,touchstart,mousedown", It),
                    Te(Ae, X, "pointerup,touchend,mouseup", Rt),
                    G.kill(),
                    Vt(Ae);
                  for (var n = 0; n < y.length; n += 3)
                    Ce(Ae, y[n], y[n + 1]), Ce(Ae, y[n], y[n + 2]);
                }),
                (t.enable = function () {
                  if (
                    ((H = window),
                    (X = document),
                    (V = X.documentElement),
                    (U = X.body),
                    Y &&
                      ((Q = Y.utils.toArray),
                      (Z = Y.utils.clamp),
                      (gt = Y.core.context || zt),
                      (lt = Y.core.suppressOverwrites || zt),
                      (mt = H.history.scrollRestoration || "auto"),
                      (Ke = H.pageYOffset),
                      Y.core.globals("ScrollTrigger", t),
                      U))
                  ) {
                    (Mt = 1),
                      ((_t = document.createElement("div")).style.height =
                        "100vh"),
                      (_t.style.position = "absolute"),
                      Qe(),
                      Dt(),
                      N.register(Y),
                      (t.isTouch = N.isTouch),
                      (pt =
                        N.isTouch &&
                        /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                      Ee(H, "wheel", Be),
                      (j = [H, X, V, U]),
                      Y.matchMedia
                        ? ((t.matchMedia = function (t) {
                            var e,
                              n = Y.matchMedia();
                            for (e in t) n.add(e, t[e]);
                            return n;
                          }),
                          Y.addEventListener("matchMediaInit", function () {
                            return Ve();
                          }),
                          Y.addEventListener("matchMediaRevert", function () {
                            return Xe();
                          }),
                          Y.addEventListener("matchMedia", function () {
                            Je(0, 1), We("matchMedia");
                          }),
                          Y.matchMedia("(orientation: portrait)", function () {
                            return $e(), $e;
                          }))
                        : console.warn("Requires GSAP 3.11.0 or later"),
                      $e(),
                      Ee(X, "scroll", Be);
                    var e,
                      n,
                      r = U.style,
                      i = r.borderTopStyle,
                      s = Y.core.Animation.prototype;
                    for (
                      s.revert ||
                        Object.defineProperty(s, "revert", {
                          value: function () {
                            return this.time(-0.01, !0);
                          },
                        }),
                        r.borderTopStyle = "solid",
                        e = ve(U),
                        D.m = Math.round(e.top + D.sc()) || 0,
                        P.m = Math.round(e.left + P.sc()) || 0,
                        i
                          ? (r.borderTopStyle = i)
                          : r.removeProperty("border-top-style"),
                        K = setInterval(ze, 250),
                        Y.delayedCall(0.5, function () {
                          return (At = 0);
                        }),
                        Ee(X, "touchcancel", zt),
                        Ee(U, "touchstart", zt),
                        Te(Ee, X, "pointerdown,touchstart,mousedown", It),
                        Te(Ee, X, "pointerup,touchend,mouseup", Rt),
                        nt = Y.utils.checkPrefix("transform"),
                        rn.push(nt),
                        W = Ct(),
                        G = Y.delayedCall(0.2, Je).pause(),
                        at = [
                          X,
                          "visibilitychange",
                          function () {
                            var t = H.innerWidth,
                              e = H.innerHeight;
                            X.hidden
                              ? ((it = t), (st = e))
                              : (it === t && st === e) || qe();
                          },
                          X,
                          "DOMContentLoaded",
                          Je,
                          H,
                          "load",
                          Je,
                          H,
                          "resize",
                          qe,
                        ],
                        Vt(Ee),
                        Ie.forEach(function (t) {
                          return t.enable(0, 1);
                        }),
                        n = 0;
                      n < y.length;
                      n += 3
                    )
                      Ce(Ae, y[n], y[n + 1]), Ce(Ae, y[n], y[n + 2]);
                  }
                }),
                (t.config = function (e) {
                  "limitCallbacks" in e && (wt = !!e.limitCallbacks);
                  var n = e.syncInterval;
                  (n && clearInterval(K)) || ((K = n) && setInterval(ze, n)),
                    "ignoreMobileResize" in e &&
                      (ht = 1 === t.isTouch && e.ignoreMobileResize),
                    "autoRefreshEvents" in e &&
                      (Vt(Ae) || Vt(Ee, e.autoRefreshEvents || "none"),
                      (ct =
                        -1 === (e.autoRefreshEvents + "").indexOf("resize")));
                }),
                (t.scrollerProxy = function (t, e) {
                  var n = I(t),
                    r = y.indexOf(n),
                    i = Ft(n);
                  ~r && y.splice(r, i ? 6 : 2),
                    e && (i ? b.unshift(H, e, U, e, V, e) : b.unshift(n, e));
                }),
                (t.clearMatchMedia = function (t) {
                  Ie.forEach(function (e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                  });
                }),
                (t.isInViewport = function (t, e, n) {
                  var r = (Ut(t) ? I(t) : t).getBoundingClientRect(),
                    i = r[n ? ie : se] * e || 0;
                  return n
                    ? r.right - i > 0 && r.left + i < H.innerWidth
                    : r.bottom - i > 0 && r.top + i < H.innerHeight;
                }),
                (t.positionInViewport = function (t, e, n) {
                  Ut(t) && (t = I(t));
                  var r = t.getBoundingClientRect(),
                    i = r[n ? ie : se],
                    s =
                      null == e
                        ? i / 2
                        : e in Me
                          ? Me[e] * i
                          : ~e.indexOf("%")
                            ? (parseFloat(e) * i) / 100
                            : parseFloat(e) || 0;
                  return n
                    ? (r.left + s) / H.innerWidth
                    : (r.top + s) / H.innerHeight;
                }),
                (t.killAll = function (t) {
                  if (
                    (Ie.slice(0).forEach(function (t) {
                      return "ScrollSmoother" !== t.vars.id && t.kill();
                    }),
                    !0 !== t)
                  ) {
                    var e = Fe.killAll || [];
                    (Fe = {}),
                      e.forEach(function (t) {
                        return t();
                      });
                  }
                }),
                t
              );
            })();
          (vn.version = "3.12.4"),
            (vn.saveStyles = function (t) {
              return t
                ? Q(t).forEach(function (t) {
                    if (t && t.style) {
                      var e = He.indexOf(t);
                      e >= 0 && He.splice(e, 5),
                        He.push(
                          t,
                          t.style.cssText,
                          t.getBBox && t.getAttribute("transform"),
                          Y.core.getCache(t),
                          gt(),
                        );
                    }
                  })
                : He;
            }),
            (vn.revert = function (t, e) {
              return Ve(!t, e);
            }),
            (vn.create = function (t, e) {
              return new vn(t, e);
            }),
            (vn.refresh = function (t) {
              return t ? qe() : (W || vn.register()) && Je(!0);
            }),
            (vn.update = function (t) {
              return ++y.cache && en(!0 === t ? 2 : 0);
            }),
            (vn.clearScrollMemory = Ue),
            (vn.maxScroll = function (t, e) {
              return Xt(t, e ? P : D);
            }),
            (vn.getScrollFunc = function (t, e) {
              return R(I(t), e ? P : D);
            }),
            (vn.getById = function (t) {
              return Re[t];
            }),
            (vn.getAll = function () {
              return Ie.filter(function (t) {
                return "ScrollSmoother" !== t.vars.id;
              });
            }),
            (vn.isScrolling = function () {
              return !!kt;
            }),
            (vn.snapDirectional = xe),
            (vn.addEventListener = function (t, e) {
              var n = Fe[t] || (Fe[t] = []);
              ~n.indexOf(e) || n.push(e);
            }),
            (vn.removeEventListener = function (t, e) {
              var n = Fe[t],
                r = n && n.indexOf(e);
              r >= 0 && n.splice(r, 1);
            }),
            (vn.batch = function (t, e) {
              var n,
                r = [],
                i = {},
                s = e.interval || 0.016,
                a = e.batchMax || 1e9,
                o = function (t, e) {
                  var n = [],
                    r = [],
                    i = Y.delayedCall(s, function () {
                      e(n, r), (n = []), (r = []);
                    }).pause();
                  return function (t) {
                    n.length || i.restart(!0),
                      n.push(t.trigger),
                      r.push(t),
                      a <= n.length && i.progress(1);
                  };
                };
              for (n in e)
                i[n] =
                  "on" === n.substr(0, 2) && jt(e[n]) && "onRefreshInit" !== n
                    ? o(n, e[n])
                    : e[n];
              return (
                jt(a) &&
                  ((a = a()),
                  Ee(vn, "refresh", function () {
                    return (a = e.batchMax());
                  })),
                Q(t).forEach(function (t) {
                  var e = {};
                  for (n in i) e[n] = i[n];
                  (e.trigger = t), r.push(vn.create(e));
                }),
                r
              );
            });
          var yn,
            bn = function (t, e, n, r) {
              return (
                e > r ? t(r) : e < 0 && t(0),
                n > r ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
              );
            },
            wn = function t(e, n) {
              !0 === n
                ? e.style.removeProperty("touch-action")
                : (e.style.touchAction =
                    !0 === n
                      ? "auto"
                      : n
                        ? "pan-" + n + (N.isTouch ? " pinch-zoom" : "")
                        : "none"),
                e === V && t(U, n);
            },
            xn = { auto: 1, scroll: 1 },
            Sn = function (t) {
              var e,
                n = t.event,
                r = t.target,
                i = t.axis,
                s = (n.changedTouches ? n.changedTouches[0] : n).target,
                a = s._gsap || Y.core.getCache(s),
                o = Ct();
              if (!a._isScrollT || o - a._isScrollT > 2e3) {
                for (
                  ;
                  s &&
                  s !== U &&
                  ((s.scrollHeight <= s.clientHeight &&
                    s.scrollWidth <= s.clientWidth) ||
                    (!xn[(e = ge(s)).overflowY] && !xn[e.overflowX]));

                )
                  s = s.parentNode;
                (a._isScroll =
                  s &&
                  s !== r &&
                  !Ft(s) &&
                  (xn[(e = ge(s)).overflowY] || xn[e.overflowX])),
                  (a._isScrollT = o);
              }
              (a._isScroll || "x" === i) &&
                (n.stopPropagation(), (n._gsapAllow = !0));
            },
            Tn = function (t, e, n, r) {
              return N.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: (r = r && Sn),
                onPress: r,
                onDrag: r,
                onScroll: r,
                onEnable: function () {
                  return n && Ee(X, N.eventTypes[0], An, !1, !0);
                },
                onDisable: function () {
                  return Ae(X, N.eventTypes[0], An, !0);
                },
              });
            },
            En = /(input|label|select|textarea)/i,
            An = function (t) {
              var e = En.test(t.target.tagName);
              (e || yn) && ((t._gsapAllow = !0), (yn = e));
            },
            Cn = function (t) {
              Qt(t) || (t = {}),
                (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
                t.type || (t.type = "wheel,touch"),
                (t.debounce = !!t.debounce),
                (t.id = t.id || "normalizer");
              var e,
                n,
                r,
                i,
                s,
                a,
                o,
                l,
                c = t,
                u = c.normalizeScrollX,
                h = c.momentum,
                d = c.allowNestedScroll,
                f = c.onRelease,
                p = I(t.target) || V,
                g = Y.core.globals().ScrollSmoother,
                m = g && g.get(),
                _ =
                  pt &&
                  ((t.content && I(t.content)) ||
                    (m && !1 !== t.content && !m.smooth() && m.content())),
                v = R(p, D),
                b = R(p, P),
                w = 1,
                x =
                  (N.isTouch && H.visualViewport
                    ? H.visualViewport.scale * H.visualViewport.width
                    : H.outerWidth) / H.innerWidth,
                S = 0,
                T = jt(h)
                  ? function () {
                      return h(e);
                    }
                  : function () {
                      return h || 2.8;
                    },
                E = Tn(p, t.type, !0, d),
                A = function () {
                  return (i = !1);
                },
                C = zt,
                O = zt,
                k = function () {
                  (n = Xt(p, D)),
                    (O = Z(pt ? 1 : 0, n)),
                    u && (C = Z(0, Xt(p, P))),
                    (r = je);
                },
                M = function () {
                  (_._gsap.y = Bt(parseFloat(_._gsap.y) + v.offset) + "px"),
                    (_.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      parseFloat(_._gsap.y) +
                      ", 0, 1)"),
                    (v.offset = v.cacheID = 0);
                },
                L = function () {
                  if (i) {
                    requestAnimationFrame(A);
                    var t = Bt(e.deltaY / 2),
                      n = O(v.v - t);
                    if (_ && n !== v.v + v.offset) {
                      v.offset = n - v.v;
                      var r = Bt((parseFloat(_ && _._gsap.y) || 0) - v.offset);
                      (_.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        r +
                        ", 0, 1)"),
                        (_._gsap.y = r + "px"),
                        (v.cacheID = y.cache),
                        en();
                    }
                    return !0;
                  }
                  v.offset && M(), (i = !0);
                },
                z = function () {
                  k(),
                    s.isActive() &&
                      s.vars.scrollY > n &&
                      (v() > n
                        ? s.progress(1) && v(n)
                        : s.resetTo("scrollY", n));
                };
              return (
                _ && Y.set(_, { y: "+=0" }),
                (t.ignoreCheck = function (t) {
                  return (
                    (pt && "touchmove" === t.type && L()) ||
                    (w > 1.05 && "touchstart" !== t.type) ||
                    e.isGesturing ||
                    (t.touches && t.touches.length > 1)
                  );
                }),
                (t.onPress = function () {
                  i = !1;
                  var t = w;
                  (w = Bt(
                    ((H.visualViewport && H.visualViewport.scale) || 1) / x,
                  )),
                    s.pause(),
                    t !== w && wn(p, w > 1.01 || (!u && "x")),
                    (a = b()),
                    (o = v()),
                    k(),
                    (r = je);
                }),
                (t.onRelease = t.onGestureStart =
                  function (t, e) {
                    if ((v.offset && M(), e)) {
                      y.cache++;
                      var r,
                        i,
                        a = T();
                      u &&
                        ((i = (r = b()) + (0.05 * a * -t.velocityX) / 0.227),
                        (a *= bn(b, r, i, Xt(p, P))),
                        (s.vars.scrollX = C(i))),
                        (i = (r = v()) + (0.05 * a * -t.velocityY) / 0.227),
                        (a *= bn(v, r, i, Xt(p, D))),
                        (s.vars.scrollY = O(i)),
                        s.invalidate().duration(a).play(0.01),
                        ((pt && s.vars.scrollY >= n) || r >= n - 1) &&
                          Y.to({}, { onUpdate: z, duration: a });
                    } else l.restart(!0);
                    f && f(t);
                  }),
                (t.onWheel = function () {
                  s._ts && s.pause(), Ct() - S > 1e3 && ((r = 0), (S = Ct()));
                }),
                (t.onChange = function (t, e, n, i, s) {
                  if (
                    (je !== r && k(),
                    e &&
                      u &&
                      b(C(i[2] === e ? a + (t.startX - t.x) : b() + e - i[1])),
                    n)
                  ) {
                    v.offset && M();
                    var l = s[2] === n,
                      c = l ? o + t.startY - t.y : v() + n - s[1],
                      h = O(c);
                    l && c !== h && (o += h - c), v(h);
                  }
                  (n || e) && en();
                }),
                (t.onEnable = function () {
                  wn(p, !u && "x"),
                    vn.addEventListener("refresh", z),
                    Ee(H, "resize", z),
                    v.smooth &&
                      ((v.target.style.scrollBehavior = "auto"),
                      (v.smooth = b.smooth = !1)),
                    E.enable();
                }),
                (t.onDisable = function () {
                  wn(p, !0),
                    Ae(H, "resize", z),
                    vn.removeEventListener("refresh", z),
                    E.kill();
                }),
                (t.lockAxis = !1 !== t.lockAxis),
                ((e = new N(t)).iOS = pt),
                pt && !v() && v(1),
                pt && Y.ticker.add(zt),
                (l = e._dc),
                (s = Y.to(e, {
                  ease: "power4",
                  paused: !0,
                  scrollX: u ? "+=0.1" : "+=0",
                  scrollY: "+=0.1",
                  modifiers: {
                    scrollY: gn(v, v(), function () {
                      return s.pause();
                    }),
                  },
                  onUpdate: en,
                  onComplete: l.vars.onComplete,
                })),
                e
              );
            };
          (vn.sort = function (t) {
            return Ie.sort(
              t ||
                function (t, e) {
                  return (
                    -1e6 * (t.vars.refreshPriority || 0) +
                    t.start -
                    (e.start + -1e6 * (e.vars.refreshPriority || 0))
                  );
                },
            );
          }),
            (vn.observe = function (t) {
              return new N(t);
            }),
            (vn.normalizeScroll = function (t) {
              if (void 0 === t) return ut;
              if (!0 === t && ut) return ut.enable();
              if (!1 === t) return ut && ut.kill(), void (ut = t);
              var e = t instanceof N ? t : Cn(t);
              return (
                ut && ut.target === e.target && ut.kill(),
                Ft(e.target) && (ut = e),
                e
              );
            }),
            (vn.core = {
              _getVelocityProp: z,
              _inputObserver: Tn,
              _scrollers: y,
              _proxies: b,
              bridge: {
                ss: function () {
                  kt || We("scrollStart"), (kt = Ct());
                },
                ref: function () {
                  return tt;
                },
              },
            }),
            qt() && Y.registerPlugin(vn),
            (t.ScrollTrigger = vn),
            (t.default = vn),
            "undefined" == typeof window || window !== t
              ? Object.defineProperty(t, "__esModule", { value: !0 })
              : delete window.default;
        })(e);
      },
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (t[r] = n[r]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            r = e && "IntersectionObserver" in window,
            i = e && "classList" in document.createElement("p"),
            s = e && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            o = function (e) {
              return t({}, a, e);
            },
            l = function (t, e) {
              var n,
                r = "LazyLoad::Initialized",
                i = new t(e);
              try {
                n = new CustomEvent(r, { detail: { instance: i } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  r,
                  !1,
                  !1,
                  { instance: i },
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            u = "srcset",
            h = "sizes",
            d = "poster",
            f = "llOriginalAttrs",
            p = "data",
            g = "loading",
            m = "loaded",
            _ = "applied",
            v = "error",
            y = "native",
            b = "data-",
            w = "ll-status",
            x = function (t, e) {
              return t.getAttribute(b + e);
            },
            S = function (t) {
              return x(t, w);
            },
            T = function (t, e) {
              return (function (t, e, n) {
                var r = "data-ll-status";
                null !== n ? t.setAttribute(r, n) : t.removeAttribute(r);
              })(t, 0, e);
            },
            E = function (t) {
              return T(t, null);
            },
            A = function (t) {
              return null === S(t);
            },
            C = function (t) {
              return S(t) === y;
            },
            O = [g, m, _, v],
            k = function (t, e, n, r) {
              t &&
                "function" == typeof t &&
                (void 0 === r ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, r));
            },
            M = function (t, e) {
              i
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            L = function (t, e) {
              i
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (t) {
              return t.llTempImage;
            },
            D = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            I = function (t, e) {
              t && (t.loadingCount += e);
            },
            R = function (t, e) {
              t && (t.toLoadCount = e);
            },
            z = function (t) {
              for (var e, n = [], r = 0; (e = t.children[r]); r += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            B = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && z(n).forEach(e);
            },
            $ = function (t, e) {
              z(t).forEach(e);
            },
            q = [c],
            F = [c, d],
            N = [c, u, h],
            Y = [p],
            W = function (t) {
              return !!t[f];
            },
            H = function (t) {
              return t[f];
            },
            X = function (t) {
              return delete t[f];
            },
            V = function (t, e) {
              if (!W(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[f] = n);
              }
            },
            U = function (t, e) {
              if (W(t)) {
                var n = H(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            j = function (t, e, n) {
              M(t, e.class_applied),
                T(t, _),
                n &&
                  (e.unobserve_completed && D(t, e),
                  k(e.callback_applied, t, n));
            },
            G = function (t, e, n) {
              M(t, e.class_loading),
                T(t, g),
                n && (I(n, 1), k(e.callback_loading, t, n));
            },
            Q = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Z = function (t, e) {
              Q(t, h, x(t, e.data_sizes)),
                Q(t, u, x(t, e.data_srcset)),
                Q(t, c, x(t, e.data_src));
            },
            J = {
              IMG: function (t, e) {
                B(t, function (t) {
                  V(t, N), Z(t, e);
                }),
                  V(t, N),
                  Z(t, e);
              },
              IFRAME: function (t, e) {
                V(t, q), Q(t, c, x(t, e.data_src));
              },
              VIDEO: function (t, e) {
                $(t, function (t) {
                  V(t, q), Q(t, c, x(t, e.data_src));
                }),
                  V(t, F),
                  Q(t, d, x(t, e.data_poster)),
                  Q(t, c, x(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                V(t, Y), Q(t, p, x(t, e.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            tt = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                k(t.callback_finish, e);
            },
            et = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            nt = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            rt = function (t) {
              return !!t.llEvLisnrs;
            },
            it = function (t) {
              if (rt(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var r = e[n];
                  nt(t, n, r);
                }
                delete t.llEvLisnrs;
              }
            },
            st = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                I(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                L(t, e.class_loading),
                e.unobserve_completed && D(t, n);
            },
            at = function (t, e, n) {
              var r = P(t) || t;
              rt(r) ||
                (function (t, e, n) {
                  rt(t) || (t.llEvLisnrs = {});
                  var r = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  et(t, r, e), et(t, "error", n);
                })(
                  r,
                  function (i) {
                    !(function (t, e, n, r) {
                      var i = C(e);
                      st(e, n, r),
                        M(e, n.class_loaded),
                        T(e, m),
                        k(n.callback_loaded, e, r),
                        i || tt(n, r);
                    })(0, t, e, n),
                      it(r);
                  },
                  function (i) {
                    !(function (t, e, n, r) {
                      var i = C(e);
                      st(e, n, r),
                        M(e, n.class_error),
                        T(e, v),
                        k(n.callback_error, e, r),
                        n.restore_on_error && U(e, N),
                        i || tt(n, r);
                    })(0, t, e, n),
                      it(r);
                  },
                );
            },
            ot = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? (function (t, e, n) {
                    !(function (t) {
                      t.llTempImage = document.createElement("IMG");
                    })(t),
                      at(t, e, n),
                      (function (t) {
                        W(t) ||
                          (t[f] = { backgroundImage: t.style.backgroundImage });
                      })(t),
                      (function (t, e, n) {
                        var r = x(t, e.data_bg),
                          i = x(t, e.data_bg_hidpi),
                          a = s && i ? i : r;
                        a &&
                          ((t.style.backgroundImage = 'url("'.concat(a, '")')),
                          P(t).setAttribute(c, a),
                          G(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var r = x(t, e.data_bg_multi),
                          i = x(t, e.data_bg_multi_hidpi),
                          a = s && i ? i : r;
                        a && ((t.style.backgroundImage = a), j(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var r = x(t, e.data_bg_set);
                        if (r) {
                          var i = r.split("|"),
                            s = i.map(function (t) {
                              return "image-set(".concat(t, ")");
                            });
                          (t.style.backgroundImage = s.join()),
                            "" === t.style.backgroundImage &&
                              ((s = i.map(function (t) {
                                return "-webkit-image-set(".concat(t, ")");
                              })),
                              (t.style.backgroundImage = s.join())),
                            j(t, e, n);
                        }
                      })(t, e, n);
                  })(t, e, n)
                : (function (t, e, n) {
                    at(t, e, n),
                      (function (t, e, n) {
                        var r = J[t.tagName];
                        r && (r(t, e), G(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            lt = function (t) {
              t.removeAttribute(c), t.removeAttribute(u), t.removeAttribute(h);
            },
            ct = function (t) {
              B(t, function (t) {
                U(t, N);
              }),
                U(t, N);
            },
            ut = {
              IMG: ct,
              IFRAME: function (t) {
                U(t, q);
              },
              VIDEO: function (t) {
                $(t, function (t) {
                  U(t, q);
                }),
                  U(t, F),
                  t.load();
              },
              OBJECT: function (t) {
                U(t, Y);
              },
            },
            ht = function (t, e) {
              (function (t) {
                var e = ut[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (W(t)) {
                        var e = H(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  A(t) ||
                    C(t) ||
                    (L(t, e.class_entered),
                    L(t, e.class_exited),
                    L(t, e.class_applied),
                    L(t, e.class_loading),
                    L(t, e.class_loaded),
                    L(t, e.class_error));
                })(t, e),
                E(t),
                X(t);
            },
            dt = ["IMG", "IFRAME", "VIDEO"],
            ft = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            pt = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, r) {
                      var i = (function (t) {
                        return O.indexOf(S(t)) >= 0;
                      })(t);
                      T(t, "entered"),
                        M(t, n.class_entered),
                        L(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && D(t, n);
                        })(t, n, r),
                        k(n.callback_enter, t, e, r),
                        i || ot(t, n, r);
                    })(t.target, t, e, n)
                  : (function (t, e, n, r) {
                      A(t) ||
                        (M(t, n.class_exited),
                        (function (t, e, n, r) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return S(t) === g;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (it(t),
                            (function (t) {
                              B(t, function (t) {
                                lt(t);
                              }),
                                lt(t);
                            })(t),
                            ct(t),
                            L(t, n.class_loading),
                            I(r, -1),
                            E(t),
                            k(n.callback_cancel, t, e, r));
                        })(t, e, n, r),
                        k(n.callback_exit, t, e, r));
                    })(t.target, t, e, n);
              });
            },
            gt = function (t) {
              return Array.prototype.slice.call(t);
            },
            mt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            _t = function (t) {
              return (function (t) {
                return S(t) === v;
              })(t);
            },
            vt = function (t, e) {
              return (function (t) {
                return gt(t).filter(A);
              })(t || mt(e));
            },
            yt = function (t, n) {
              var i = o(t);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (t, e) {
                  r &&
                    !ft(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        pt(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t),
                    ));
                })(i, this),
                (function (t, n) {
                  e &&
                    ((n._onlineHandler = function () {
                      !(function (t, e) {
                        var n;
                        ((n = mt(t)), gt(n).filter(_t)).forEach(function (e) {
                          L(e, t.class_error), E(e);
                        }),
                          e.update();
                      })(t, n);
                    }),
                    window.addEventListener("online", n._onlineHandler));
                })(i, this),
                this.update(n);
            };
          return (
            (yt.prototype = {
              update: function (t) {
                var e,
                  i,
                  s = this._settings,
                  a = vt(t, s);
                R(this, a.length),
                  !n && r
                    ? ft(s)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== dt.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  at(t, e, n),
                                  (function (t, e) {
                                    var n = J[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  T(t, y);
                              })(t, e, n);
                          }),
                            R(n, 0);
                        })(a, s, this)
                      : ((i = a),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, i))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  e &&
                    window.removeEventListener("online", this._onlineHandler),
                  mt(this._settings).forEach(function (t) {
                    X(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                vt(t, n).forEach(function (t) {
                  D(t, e), ot(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                mt(t).forEach(function (e) {
                  ht(e, t);
                });
              },
            }),
            (yt.load = function (t, e) {
              var n = o(e);
              ot(t, n);
            }),
            (yt.resetStatus = function (t) {
              E(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, r = 0; (n = e[r]); r += 1) l(t, n);
                  else l(t, e);
              })(yt, window.lazyLoadOptions),
            yt
          );
        })();
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var s = (e[r] = { exports: {} });
    return t[r].call(s.exports, s, s.exports, n), s.exports;
  }
  (() => {
    "use strict";
    function t(t) {
      this.type = t;
    }
    (t.prototype.init = function () {
      const t = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let t = 0; t < this.nodes.length; t++) {
        const e = this.nodes[t],
          n = e.dataset.da.trim().split(","),
          r = {};
        (r.element = e),
          (r.parent = e.parentNode),
          (r.destination = document.querySelector(n[0].trim())),
          (r.breakpoint = n[1] ? n[1].trim() : "767"),
          (r.place = n[2] ? n[2].trim() : "last"),
          (r.index = this.indexInParent(r.parent, r.element)),
          this.оbjects.push(r);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (t) {
            return (
              "(" +
              this.type +
              "-width: " +
              t.breakpoint +
              "px)," +
              t.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (t, e, n) {
            return Array.prototype.indexOf.call(n, t) === e;
          },
        ));
      for (let e = 0; e < this.mediaQueries.length; e++) {
        const n = this.mediaQueries[e],
          r = String.prototype.split.call(n, ","),
          i = window.matchMedia(r[0]),
          s = r[1],
          a = Array.prototype.filter.call(this.оbjects, function (t) {
            return t.breakpoint === s;
          });
        i.addListener(function () {
          t.mediaHandler(i, a);
        }),
          this.mediaHandler(i, a);
      }
    }),
      (t.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (t.prototype.moveTo = function (t, e, n) {
        e.classList.add(this.daClassname),
          "last" === t || t >= n.children.length
            ? n.insertAdjacentElement("beforeend", e)
            : "first" !== t
              ? n.children[t].insertAdjacentElement("beforebegin", e)
              : n.insertAdjacentElement("afterbegin", e);
      }),
      (t.prototype.moveBack = function (t, e, n) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[n]
            ? t.children[n].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (t.prototype.indexInParent = function (t, e) {
        const n = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(n, e);
      }),
      (t.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                    ? -1
                    : "last" === t.place || "first" === e.place
                      ? 1
                      : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                    ? 1
                    : "last" === t.place || "first" === e.place
                      ? -1
                      : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    new t("max").init();
    class e {
      constructor(t) {
        let e = {
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
            popupContent: "popup-content",
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
            ...e,
            ...t,
            classes: { ...e.classes, ...t?.classes },
            hashSettings: { ...e.hashSettings, ...t?.hashSettings },
            on: { ...e.on, ...t?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (t) {
            const e = t.target.closest(`[${this.options.attributeOpenButton}]`);
            if (e)
              return (
                t.preventDefault(),
                (this._dataValue = e.getAttribute(
                  this.options.attributeOpenButton,
                )
                  ? e.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = e),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${e.classList}`,
                    )
              );
            return t.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!t.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (t.preventDefault(), void this.close())
              : void 0;
          }.bind(this),
        ),
          document.addEventListener(
            "keydown",
            function (t) {
              if (
                this.options.closeEsc &&
                27 == t.which &&
                "Escape" === t.code &&
                this.isOpen
              )
                return t.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == t.which &&
                this.isOpen &&
                this._focusCatch(t);
            }.bind(this),
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (t) {
                const e = t.detail.form.dataset.popupMessage;
                e && this.open(e);
              }.bind(this),
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this),
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this),
            ));
      }
      open(t) {
        if (
          (t &&
            "string" == typeof t &&
            "" !== t.trim() &&
            ((this.targetOpen.selector = t), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector,
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const t = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute,
              )}?rel=0&showinfo=0&autoplay=1`,
              e = document.createElement("iframe");
            e.setAttribute("allowfullscreen", "");
            const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
            e.setAttribute("allow", `${n}; encrypted-media`),
              e.setAttribute("src", t),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(e);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive,
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : l(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } }),
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. ",
          );
      }
      close(t) {
        t &&
          "string" == typeof t &&
          "" !== t.trim() &&
          (this.previousOpen.selector = t),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute,
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive,
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              l(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let t = document.querySelector(
          `.${window.location.hash.replace("#", "")}`,
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${t}"]`,
        ) &&
          t &&
          this.open(t);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(t) {
        const e = this.targetOpen.element.querySelectorAll(this._focusEl),
          n = Array.prototype.slice.call(e),
          r = n.indexOf(document.activeElement);
        t.shiftKey && 0 === r && (n[n.length - 1].focus(), t.preventDefault()),
          t.shiftKey ||
            r !== n.length - 1 ||
            (n[0].focus(), t.preventDefault());
      }
      _focusTrap() {
        const t = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : t[0].focus();
      }
      popupLogging(t) {
        this.options.logging && h(`[Попапос]: ${t}`);
      }
    }
    let r = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          r.Android() || r.BlackBerry() || r.iOS() || r.Opera() || r.Windows()
        );
      },
    };
    let i = (t, e = 500, n = 0) => {
        t.classList.contains("_slide") ||
          (t.classList.add("_slide"),
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = `${t.offsetHeight}px`),
          t.offsetHeight,
          (t.style.overflow = "hidden"),
          (t.style.height = n ? `${n}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          window.setTimeout(() => {
            (t.hidden = !n),
              !n && t.style.removeProperty("height"),
              t.style.removeProperty("padding-top"),
              t.style.removeProperty("padding-bottom"),
              t.style.removeProperty("margin-top"),
              t.style.removeProperty("margin-bottom"),
              !n && t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e));
      },
      s = (t, e = 500, n = 0) => {
        if (!t.classList.contains("_slide")) {
          t.classList.add("_slide"),
            (t.hidden = !t.hidden && null),
            n && t.style.removeProperty("height");
          let r = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = n ? `${n}px` : "0px"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = r + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property"),
                t.classList.remove("_slide");
            }, e);
        }
      },
      a = (t, e = 500) => (t.hidden ? s(t, e) : i(t, e)),
      o = !0,
      l = (t = 500) => {
        document.documentElement.classList.contains("lock") ? c(t) : u(t);
      },
      c = (t = 500) => {
        let e = document.querySelector("body");
        if (o) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (e.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, t);
        }
      },
      u = (t = 500) => {
        let e = document.querySelector("body");
        if (o) {
          let n = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < n.length; t++) {
            n[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (e.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, t);
        }
      };
    function h(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function d(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    function f(t, e) {
      const n = Array.from(t).filter(function (t, n, r) {
        if (t.dataset[e]) return t.dataset[e].split(",")[0];
      });
      if (n.length) {
        const t = [];
        n.forEach((n) => {
          const r = {},
            i = n.dataset[e].split(",");
          (r.value = i[0]),
            (r.type = i[1] ? i[1].trim() : "max"),
            (r.item = n),
            t.push(r);
        });
        let r = t.map(function (t) {
          return (
            "(" +
            t.type +
            "-width: " +
            t.value +
            "px)," +
            t.value +
            "," +
            t.type
          );
        });
        r = d(r);
        const i = [];
        if (r.length)
          return (
            r.forEach((e) => {
              const n = e.split(","),
                r = n[1],
                s = n[2],
                a = window.matchMedia(n[0]),
                o = t.filter(function (t) {
                  if (t.value === r && t.type === s) return !0;
                });
              i.push({ itemsArray: o, matchMedia: a });
            }),
            i
          );
      }
    }
    let p,
      g = !0;
    document.addEventListener("click", function (t) {
      (p = t.target),
        g && p.closest(".icon-menu")
          ? (document.documentElement.classList.add("menu-open"),
            document.documentElement.classList.add("no-scrolling"),
            (g = !1))
          : p.closest(".menu") ||
            (document.documentElement.classList.remove("menu-open"),
            document.documentElement.classList.remove("no-scrolling"),
            (g = !0));
    });
    let m = (t, e = !1, n = 500, r = 0) => {
      const i = document.querySelector(t);
      if (i) {
        let s = "",
          a = 0;
        e &&
          ((s = "header.header"), (a = document.querySelector(s).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: n,
          header: s,
          offset: r,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (g ||
              (document.documentElement.classList.remove("menu-open"),
              document.documentElement.classList.remove("no-scrolling"),
              (g = !0))),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", o);
        else {
          let t = i.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: a ? t - a : t, behavior: "smooth" });
        }
        h(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else h(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    class _ {
      constructor(t, e = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, t)),
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
          const t = e
            ? document.querySelectorAll(e)
            : document.querySelectorAll("select");
          t.length
            ? (this.selectsInit(t),
              this.setLogging(`Проснулся, построил селектов: (${t.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(t) {
        return `.${t}`;
      }
      getSelectElement(t, e) {
        return {
          originalSelect: t.querySelector("select"),
          selectElement: t.querySelector(this.getSelectClass(e)),
        };
      }
      selectsInit(t) {
        t.forEach((t, e) => {
          this.selectInit(t, e + 1);
        }),
          document.addEventListener(
            "click",
            function (t) {
              this.selectsActions(t);
            }.bind(this),
          ),
          document.addEventListener(
            "keydown",
            function (t) {
              this.selectsActions(t);
            }.bind(this),
          ),
          document.addEventListener(
            "focusin",
            function (t) {
              this.selectsActions(t);
            }.bind(this),
          ),
          document.addEventListener(
            "focusout",
            function (t) {
              this.selectsActions(t);
            }.bind(this),
          );
      }
      selectInit(t, e) {
        const n = this;
        let r = document.createElement("div");
        if (
          (r.classList.add(this.selectClasses.classSelect),
          t.parentNode.insertBefore(r, t),
          r.appendChild(t),
          (t.hidden = !0),
          e && (t.dataset.id = e),
          r.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`,
          ),
          this.selectBuild(t),
          this.getSelectPlaceholder(t) &&
            ((t.dataset.placeholder = this.getSelectPlaceholder(t).value),
            this.getSelectPlaceholder(t).label.show))
        ) {
          this.getSelectElement(
            r,
            this.selectClasses.classSelectTitle,
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(t).label.text
                ? this.getSelectPlaceholder(t).label.text
                : this.getSelectPlaceholder(t).value
            }</span>`,
          );
        }
        (t.dataset.speed = t.dataset.speed ? t.dataset.speed : "150"),
          t.addEventListener("change", function (t) {
            n.selectChange(t);
          });
      }
      selectBuild(t) {
        const e = t.parentElement;
        (e.dataset.id = t.dataset.id),
          e.classList.add(
            t.getAttribute("class") ? `select_${t.getAttribute("class")}` : "",
          ),
          t.multiple
            ? e.classList.add(this.selectClasses.classSelectMultiple)
            : e.classList.remove(this.selectClasses.classSelectMultiple),
          t.hasAttribute("data-checkbox") && t.multiple
            ? e.classList.add(this.selectClasses.classSelectCheckBox)
            : e.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(e, t),
          this.setOptions(e, t),
          t.hasAttribute("data-search") && this.searchActions(e),
          t.hasAttribute("data-open") && this.selectAction(e),
          this.selectDisabled(e, t);
      }
      selectsActions(t) {
        const e = t.target,
          n = t.type;
        if (
          e.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          e.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const r = e.closest(".select")
              ? e.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    e.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag),
                    ).dataset.selectId
                  }"]`,
                ),
            i = this.getSelectElement(r).originalSelect;
          if ("click" === n) {
            if (!i.disabled)
              if (
                e.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag),
                )
              ) {
                const t = e.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag),
                  ),
                  n = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${t.dataset.selectId}"] .select__option[data-value="${t.dataset.value}"]`,
                  );
                this.optionAction(r, i, n);
              } else if (
                e.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle),
                )
              )
                this.selectAction(r);
              else if (
                e.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                )
              ) {
                const t = e.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                );
                this.optionAction(r, i, t);
              }
          } else
            "focusin" === n || "focusout" === n
              ? e.closest(
                  this.getSelectClass(this.selectClasses.classSelect),
                ) &&
                ("focusin" === n
                  ? r.classList.add(this.selectClasses.classSelectFocus)
                  : r.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === n && "Escape" === t.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const t = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect,
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`,
        );
        t.length &&
          t.forEach((t) => {
            this.selectAction(t);
          });
      }
      selectAction(t) {
        const e = this.getSelectElement(t).originalSelect,
          n = this.getSelectElement(
            t,
            this.selectClasses.classSelectOptions,
          ).selectElement;
        n.classList.contains("_slide") ||
          (t.classList.toggle(this.selectClasses.classSelectOpen),
          a(n, e.dataset.speed));
      }
      setSelectTitleValue(t, e) {
        const n = this.getSelectElement(
            t,
            this.selectClasses.classSelectBody,
          ).selectElement,
          r = this.getSelectElement(
            t,
            this.selectClasses.classSelectTitle,
          ).selectElement;
        r && r.remove(),
          n.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(t, e));
      }
      getSelectTitleValue(t, e) {
        let n = this.getSelectedOptionsData(e, 2).html;
        if (
          (e.multiple &&
            e.hasAttribute("data-tags") &&
            ((n = this.getSelectedOptionsData(e)
              .elements.map(
                (e) =>
                  `<span role="button" data-select-id="${
                    t.dataset.id
                  }" data-value="${
                    e.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    e,
                  )}</span>`,
              )
              .join("")),
            e.dataset.tags &&
              document.querySelector(e.dataset.tags) &&
              ((document.querySelector(e.dataset.tags).innerHTML = n),
              e.hasAttribute("data-search") && (n = !1))),
          (n = n.length ? n : e.dataset.placeholder),
          this.getSelectedOptionsData(e).values.length
            ? t.classList.add(this.selectClasses.classSelectActive)
            : t.classList.remove(this.selectClasses.classSelectActive),
          e.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${n}" data-placeholder="${n}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const t =
            this.getSelectedOptionsData(e).elements.length &&
            this.getSelectedOptionsData(e).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(e).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${t}">${n}</span></span></button>`;
        }
      }
      getSelectElementContent(t) {
        const e = t.dataset.asset ? `${t.dataset.asset}` : "",
          n = e.indexOf("img") >= 0 ? `<img src="${e}" alt="">` : e;
        let r = "";
        return (
          (r += e ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (r += e
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (r += e ? n : ""),
          (r += e ? "</span>" : ""),
          (r += e
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (r += t.textContent),
          (r += e ? "</span>" : ""),
          (r += e ? "</span>" : ""),
          r
        );
      }
      getSelectPlaceholder(t) {
        const e = Array.from(t.options).find((t) => !t.value);
        if (e)
          return {
            value: e.textContent,
            show: e.hasAttribute("data-show"),
            label: {
              show: e.hasAttribute("data-label"),
              text: e.dataset.label,
            },
          };
      }
      getSelectedOptionsData(t, e) {
        let n = [];
        return (
          t.multiple
            ? (n = Array.from(t.options)
                .filter((t) => t.value)
                .filter((t) => t.selected))
            : n.push(t.options[t.selectedIndex]),
          {
            elements: n.map((t) => t),
            values: n.filter((t) => t.value).map((t) => t.value),
            html: n.map((t) => this.getSelectElementContent(t)),
          }
        );
      }
      getOptions(t) {
        let e = t.hasAttribute("data-scroll") ? "data-simplebar" : "",
          n = t.dataset.scroll
            ? `style="max-height:${t.dataset.scroll}px"`
            : "",
          r = Array.from(t.options);
        if (r.length > 0) {
          let i = "";
          return (
            ((this.getSelectPlaceholder(t) &&
              !this.getSelectPlaceholder(t).show) ||
              t.multiple) &&
              (r = r.filter((t) => t.value)),
            (i += e
              ? `<div ${e} ${n} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            r.forEach((e) => {
              i += this.getOption(e, t);
            }),
            (i += e ? "</div>" : ""),
            i
          );
        }
      }
      getOption(t, e) {
        const n =
            t.selected && e.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          r =
            t.selected && !e.hasAttribute("data-show-selected") ? "hidden" : "",
          i = t.dataset.class ? ` ${t.dataset.class}` : "",
          s = !!t.dataset.href && t.dataset.href,
          a = t.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += s
            ? `<a ${a} ${r} href="${s}" data-value="${t.value}" class="${this.selectClasses.classSelectOption}${i}${n}">`
            : `<button ${r} class="${this.selectClasses.classSelectOption}${i}${n}" data-value="${t.value}" type="button">`),
          (o += this.getSelectElementContent(t)),
          (o += s ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(t, e) {
        this.getSelectElement(
          t,
          this.selectClasses.classSelectOptions,
        ).selectElement.innerHTML = this.getOptions(e);
      }
      optionAction(t, e, n) {
        if (e.multiple) {
          n.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(e).elements.forEach((t) => {
            t.removeAttribute("selected");
          });
          t.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected),
          ).forEach((t) => {
            e.querySelector(`option[value="${t.dataset.value}"]`).setAttribute(
              "selected",
              "selected",
            );
          });
        } else
          e.hasAttribute("data-show-selected") ||
            (t.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption,
              )}[hidden]`,
            ) &&
              (t.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption,
                )}[hidden]`,
              ).hidden = !1),
            (n.hidden = !0)),
            (e.value = n.hasAttribute("data-value")
              ? n.dataset.value
              : n.textContent),
            this.selectAction(t);
        this.setSelectTitleValue(t, e), this.setSelectChange(e);
      }
      selectChange(t) {
        const e = t.target;
        this.selectBuild(e), this.setSelectChange(e);
      }
      setSelectChange(t) {
        if (
          (t.hasAttribute("data-validate") && y.validateInput(t),
          t.hasAttribute("data-submit") && t.value)
        ) {
          let e = document.createElement("button");
          (e.type = "submit"),
            t.closest("form").append(e),
            e.click(),
            e.remove();
        }
        const e = t.parentElement;
        this.selectCallback(e, t);
      }
      selectDisabled(t, e) {
        e.disabled
          ? (t.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              t,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !0))
          : (t.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              t,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !1));
      }
      searchActions(t) {
        this.getSelectElement(t).originalSelect;
        const e = this.getSelectElement(
            t,
            this.selectClasses.classSelectInput,
          ).selectElement,
          n = this.getSelectElement(
            t,
            this.selectClasses.classSelectOptions,
          ).selectElement,
          r = n.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          i = this;
        e.addEventListener("input", function () {
          r.forEach((t) => {
            t.textContent.toUpperCase().indexOf(e.value.toUpperCase()) >= 0
              ? (t.hidden = !1)
              : (t.hidden = !0);
          }),
            !0 === n.hidden && i.selectAction(t);
        });
      }
      selectCallback(t, e) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: e } }),
        );
      }
      setLogging(t) {
        this.config.logging && h(`[select]: ${t}`);
      }
    }
    const v = { inputMaskModule: null, selectModule: null };
    let y = {
      getErrors(t) {
        let e = 0,
          n = t.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((t) => {
              (null === t.offsetParent && "SELECT" !== t.tagName) ||
                t.disabled ||
                (e += this.validateInput(t));
            }),
          e
        );
      },
      validateInput(t) {
        let e = 0;
        return (
          "email" === t.dataset.required
            ? ((t.value = t.value.replace(" ", "")),
              this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
            : ("checkbox" !== t.type || t.checked) && t.value
              ? this.removeError(t)
              : (this.addError(t), e++),
          e
        );
      },
      addError(t) {
        t.classList.add("_form-error"),
          t.parentElement.classList.add("_form-error");
        let e = t.parentElement.querySelector(".form__error");
        e && t.parentElement.removeChild(e),
          t.dataset.error &&
            t.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${t.dataset.error}</div>`,
            );
      },
      removeError(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-error"),
          t.parentElement.querySelector(".form__error") &&
            t.parentElement.removeChild(
              t.parentElement.querySelector(".form__error"),
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let e = t.querySelectorAll("input,textarea");
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              n.parentElement.classList.remove("_form-focus"),
                n.classList.remove("_form-focus"),
                y.removeError(n),
                (n.value = n.dataset.placeholder);
            }
            let n = t.querySelectorAll(".checkbox__input");
            if (n.length > 0)
              for (let t = 0; t < n.length; t++) {
                n[t].checked = !1;
              }
            if (v.selectModule) {
              let e = t.querySelectorAll(".select");
              if (e.length)
                for (let t = 0; t < e.length; t++) {
                  const n = e[t].querySelector("select");
                  v.selectModule.selectBuild(n);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
    };
    new (n(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class b {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
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
            document.querySelectorAll("[data-watch]"),
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`,
          ),
            d(
              Array.from(t).map(function (t) {
                return `${t.dataset.watchRoot ? t.dataset.watchRoot : null}|${
                  t.dataset.watchMargin ? t.dataset.watchMargin : "0px"
                }|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              }),
            ).forEach((e) => {
              let n = e.split("|"),
                r = { root: n[0], margin: n[1], threshold: n[2] },
                i = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    i = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === r.root &&
                    String(n) === r.margin &&
                    String(i) === r.threshold
                  )
                    return t;
                }),
                s = this.getScrollWatcherConfig(r);
              this.scrollWatcherInit(i, s);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`,
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %",
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`,
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`,
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging && h(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } }),
          );
      }
    }
    let w = !1;
    setTimeout(() => {
      if (w) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0);
    let x = document.querySelectorAll(".menu__arrow");
    if (
      (r.any() &&
        x &&
        x.forEach((t) => {
          t.addEventListener("click", function (t) {
            if (t.target.closest(".menu__arrow")) {
              t.target.classList.toggle("_active");
              let e = t.target.parentElement;
              if (e.classList.contains("menu__item")) {
                e.querySelector(".sub-menu").classList.toggle("_active");
              }
            }
          });
        }),
      r.iOS())
    ) {
      let t = document.querySelector(".header");
      t && t.classList.add("red");
    }
    let S = new IntersectionObserver(
      function (t) {
        t.forEach((t) => {
          if (t.isIntersecting) {
            let e = t.target;
            !(function (t) {
              let e,
                n,
                r,
                i,
                s,
                a = 0;
              t.hasAttribute("data-time") &&
                ((e = Number(t.getAttribute("data-time"))),
                0 === e && (e = 1e3)),
                t.hasAttribute("data-number") &&
                  ((n = Number(t.getAttribute("data-number"))),
                  0 === n && (n = 100)),
                t.hasAttribute("data-step") &&
                  ((r = Number(t.getAttribute("data-step"))),
                  0 === r && (r = 1)),
                (i = Math.round(e / (n / r))),
                (s = setInterval(() => {
                  (a += r), a == n && clearInterval(s), (t.innerHTML = a);
                }, i));
            })(e),
              e.hasAttribute("data-show-one") && S.unobserve(e);
          }
        });
      },
      { threshold: 0.8 },
    );
    function T(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function E(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    document.querySelectorAll("[data-number]").forEach((t) => {
      S.observe(t);
    });
    var A,
      C,
      O,
      k,
      M,
      L,
      P,
      D,
      I,
      R,
      z,
      B,
      $,
      q,
      F,
      N = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      Y = { duration: 0.5, overwrite: !1, delay: 0 },
      W = 1e8,
      H = 1e-8,
      X = 2 * Math.PI,
      V = X / 4,
      U = 0,
      j = Math.sqrt,
      G = Math.cos,
      Q = Math.sin,
      Z = function (t) {
        return "string" == typeof t;
      },
      J = function (t) {
        return "function" == typeof t;
      },
      K = function (t) {
        return "number" == typeof t;
      },
      tt = function (t) {
        return void 0 === t;
      },
      et = function (t) {
        return "object" == typeof t;
      },
      nt = function (t) {
        return !1 !== t;
      },
      rt = function () {
        return "undefined" != typeof window;
      },
      it = function (t) {
        return J(t) || Z(t);
      },
      st =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      at = Array.isArray,
      ot = /(?:-?\.?\d|\.)+/gi,
      lt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      ct = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      ut = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      ht = /[+-]=-?[.\d]+/,
      dt = /[^,'"\[\]\s]+/gi,
      ft = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      pt = {},
      gt = {},
      mt = function (t) {
        return (gt = Xt(t, pt)) && Un;
      },
      _t = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()",
        );
      },
      vt = function (t, e) {
        return !e && console.warn(t);
      },
      yt = function (t, e) {
        return (t && (pt[t] = e) && gt && (gt[t] = e)) || pt;
      },
      bt = function () {
        return 0;
      },
      wt = { suppressEvents: !0, isStart: !0, kill: !1 },
      xt = { suppressEvents: !0, kill: !1 },
      St = { suppressEvents: !0 },
      Tt = {},
      Et = [],
      At = {},
      Ct = {},
      Ot = {},
      kt = 30,
      Mt = [],
      Lt = "",
      Pt = function (t) {
        var e,
          n,
          r = t[0];
        if ((et(r) || J(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
          for (n = Mt.length; n-- && !Mt[n].targetTest(r); );
          e = Mt[n];
        }
        for (n = t.length; n--; )
          (t[n] && (t[n]._gsap || (t[n]._gsap = new on(t[n], e)))) ||
            t.splice(n, 1);
        return t;
      },
      Dt = function (t) {
        return t._gsap || Pt(Se(t))[0]._gsap;
      },
      It = function (t, e, n) {
        return (n = t[e]) && J(n)
          ? t[e]()
          : (tt(n) && t.getAttribute && t.getAttribute(e)) || n;
      },
      Rt = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      zt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      Bt = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      $t = function (t, e) {
        var n = e.charAt(0),
          r = parseFloat(e.substr(2));
        return (
          (t = parseFloat(t)),
          "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
        );
      },
      qt = function (t, e) {
        for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
        return r < n;
      },
      Ft = function () {
        var t,
          e,
          n = Et.length,
          r = Et.slice(0);
        for (At = {}, Et.length = 0, t = 0; t < n; t++)
          (e = r[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      Nt = function (t, e, n, r) {
        Et.length && !C && Ft(),
          t.render(e, n, r || (C && e < 0 && (t._initted || t._startAt))),
          Et.length && !C && Ft();
      },
      Yt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(dt).length < 2
          ? e
          : Z(t)
            ? t.trim()
            : t;
      },
      Wt = function (t) {
        return t;
      },
      Ht = function (t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
        return t;
      },
      Xt = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      },
      Vt = function t(e, n) {
        for (var r in n)
          "__proto__" !== r &&
            "constructor" !== r &&
            "prototype" !== r &&
            (e[r] = et(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
        return e;
      },
      Ut = function (t, e) {
        var n,
          r = {};
        for (n in t) n in e || (r[n] = t[n]);
        return r;
      },
      jt = function (t) {
        var e,
          n = t.parent || k,
          r = t.keyframes
            ? ((e = at(t.keyframes)),
              function (t, n) {
                for (var r in n)
                  r in t ||
                    ("duration" === r && e) ||
                    "ease" === r ||
                    (t[r] = n[r]);
              })
            : Ht;
        if (nt(t.inherit))
          for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
        return t;
      },
      Gt = function (t, e, n, r, i) {
        void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
        var s,
          a = t[r];
        if (i) for (s = e[i]; a && a[i] > s; ) a = a._prev;
        return (
          a
            ? ((e._next = a._next), (a._next = e))
            : ((e._next = t[n]), (t[n] = e)),
          e._next ? (e._next._prev = e) : (t[r] = e),
          (e._prev = a),
          (e.parent = e._dp = t),
          e
        );
      },
      Qt = function (t, e, n, r) {
        void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
        var i = e._prev,
          s = e._next;
        i ? (i._next = s) : t[n] === e && (t[n] = s),
          s ? (s._prev = i) : t[r] === e && (t[r] = i),
          (e._next = e._prev = e.parent = null);
      },
      Zt = function (t, e) {
        t.parent &&
          (!e || t.parent.autoRemoveChildren) &&
          t.parent.remove &&
          t.parent.remove(t),
          (t._act = 0);
      },
      Jt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
        return t;
      },
      Kt = function (t, e, n, r) {
        return (
          t._startAt &&
          (C
            ? t._startAt.revert(xt)
            : (t.vars.immediateRender && !t.vars.autoRevert) ||
              t._startAt.render(e, !0, r))
        );
      },
      te = function t(e) {
        return !e || (e._ts && t(e.parent));
      },
      ee = function (t) {
        return t._repeat ? ne(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      ne = function (t, e) {
        var n = Math.floor((t /= e));
        return t && n === t ? n - 1 : n;
      },
      re = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      ie = function (t) {
        return (t._end = Bt(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || H) || 0),
        ));
      },
      se = function (t, e) {
        var n = t._dp;
        return (
          n &&
            n.smoothChildTiming &&
            t._ts &&
            ((t._start = Bt(
              n._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
            )),
            ie(t),
            n._dirty || Jt(n, t)),
          t
        );
      },
      ae = function (t, e) {
        var n;
        if (
          ((e._time ||
            (!e._dur && e._initted) ||
            (e._start < t._time && (e._dur || !e.add))) &&
            ((n = re(t.rawTime(), e)),
            (!e._dur || ve(0, e.totalDuration(), n) - e._tTime > H) &&
              e.render(n, !0)),
          Jt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (n = t; n._dp; )
              n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
          t._zTime = -1e-8;
        }
      },
      oe = function (t, e, n, r) {
        return (
          e.parent && Zt(e),
          (e._start = Bt(
            (K(n) ? n : n || t !== k ? ge(t, n, e) : t._time) + e._delay,
          )),
          (e._end = Bt(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
          )),
          Gt(t, e, "_first", "_last", t._sort ? "_start" : 0),
          he(e) || (t._recent = e),
          r || ae(t, e),
          t._ts < 0 && se(t, t._tTime),
          t
        );
      },
      le = function (t, e) {
        return (
          (pt.ScrollTrigger || _t("scrollTrigger", e)) &&
          pt.ScrollTrigger.create(e, t)
        );
      },
      ce = function (t, e, n, r, i) {
        return (
          gn(t, e, i),
          t._initted
            ? !n &&
              t._pt &&
              !C &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              I !== Ue.frame
              ? (Et.push(t), (t._lazy = [i, r]), 1)
              : void 0
            : 1
        );
      },
      ue = function t(e) {
        var n = e.parent;
        return (
          n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
        );
      },
      he = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      de = function (t, e, n, r) {
        var i = t._repeat,
          s = Bt(e) || 0,
          a = t._tTime / t._tDur;
        return (
          a && !r && (t._time *= s / t._dur),
          (t._dur = s),
          (t._tDur = i ? (i < 0 ? 1e10 : Bt(s * (i + 1) + t._rDelay * i)) : s),
          a > 0 && !r && se(t, (t._tTime = t._tDur * a)),
          t.parent && ie(t),
          n || Jt(t.parent, t),
          t
        );
      },
      fe = function (t) {
        return t instanceof cn ? Jt(t) : de(t, t._dur);
      },
      pe = { _start: 0, endTime: bt, totalDuration: bt },
      ge = function t(e, n, r) {
        var i,
          s,
          a,
          o = e.labels,
          l = e._recent || pe,
          c = e.duration() >= W ? l.endTime(!1) : e._dur;
        return Z(n) && (isNaN(n) || n in o)
          ? ((s = n.charAt(0)),
            (a = "%" === n.substr(-1)),
            (i = n.indexOf("=")),
            "<" === s || ">" === s
              ? (i >= 0 && (n = n.replace(/=/, "")),
                ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) *
                    (a ? (i < 0 ? l : r).totalDuration() / 100 : 1))
              : i < 0
                ? (n in o || (o[n] = c), o[n])
                : ((s = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  a &&
                    r &&
                    (s = (s / 100) * (at(r) ? r[0] : r).totalDuration()),
                  i > 1 ? t(e, n.substr(0, i - 1), r) + s : c + s))
          : null == n
            ? c
            : +n;
      },
      me = function (t, e, n) {
        var r,
          i,
          s = K(e[1]),
          a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
          o = e[a];
        if ((s && (o.duration = e[1]), (o.parent = n), t)) {
          for (r = o, i = n; i && !("immediateRender" in r); )
            (r = i.vars.defaults || {}), (i = nt(i.vars.inherit) && i.parent);
          (o.immediateRender = nt(r.immediateRender)),
            t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
        }
        return new bn(e[0], o, e[a + 1]);
      },
      _e = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      ve = function (t, e, n) {
        return n < t ? t : n > e ? e : n;
      },
      ye = function (t, e) {
        return Z(t) && (e = ft.exec(t)) ? e[1] : "";
      },
      be = [].slice,
      we = function (t, e) {
        return (
          t &&
          et(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && et(t[0]))) &&
          !t.nodeType &&
          t !== M
        );
      },
      xe = function (t, e, n) {
        return (
          void 0 === n && (n = []),
          t.forEach(function (t) {
            var r;
            return (Z(t) && !e) || we(t, 1)
              ? (r = n).push.apply(r, Se(t))
              : n.push(t);
          }) || n
        );
      },
      Se = function (t, e, n) {
        return O && !e && O.selector
          ? O.selector(t)
          : !Z(t) || n || (!L && je())
            ? at(t)
              ? xe(t, n)
              : we(t)
                ? be.call(t, 0)
                : t
                  ? [t]
                  : []
            : be.call((e || P).querySelectorAll(t), 0);
      },
      Te = function (t) {
        return (
          (t = Se(t)[0] || vt("Invalid scope") || {}),
          function (e) {
            var n = t.current || t.nativeElement || t;
            return Se(
              e,
              n.querySelectorAll
                ? n
                : n === t
                  ? vt("Invalid scope") || P.createElement("div")
                  : t,
            );
          }
        );
      },
      Ee = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Ae = function (t) {
        if (J(t)) return t;
        var e = et(t) ? t : { each: t },
          n = en(e.ease),
          r = e.from || 0,
          i = parseFloat(e.base) || 0,
          s = {},
          a = r > 0 && r < 1,
          o = isNaN(r) || a,
          l = e.axis,
          c = r,
          u = r;
        return (
          Z(r)
            ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
            : !a && o && ((c = r[0]), (u = r[1])),
          function (t, a, h) {
            var d,
              f,
              p,
              g,
              m,
              _,
              v,
              y,
              b,
              w = (h || e).length,
              x = s[w];
            if (!x) {
              if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, W])[1])) {
                for (
                  v = -W;
                  v < (v = h[b++].getBoundingClientRect().left) && b < w;

                );
                b < w && b--;
              }
              for (
                x = s[w] = [],
                  d = o ? Math.min(b, w) * c - 0.5 : r % b,
                  f = b === W ? 0 : o ? (w * u) / b - 0.5 : (r / b) | 0,
                  v = 0,
                  y = W,
                  _ = 0;
                _ < w;
                _++
              )
                (p = (_ % b) - d),
                  (g = f - ((_ / b) | 0)),
                  (x[_] = m =
                    l ? Math.abs("y" === l ? g : p) : j(p * p + g * g)),
                  m > v && (v = m),
                  m < y && (y = m);
              "random" === r && Ee(x),
                (x.max = v - y),
                (x.min = y),
                (x.v = w =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (b > w
                        ? w - 1
                        : l
                          ? "y" === l
                            ? w / b
                            : b
                          : Math.max(b, w / b)) ||
                    0) * ("edges" === r ? -1 : 1)),
                (x.b = w < 0 ? i - w : i),
                (x.u = ye(e.amount || e.each) || 0),
                (n = n && w < 0 ? Ke(n) : n);
            }
            return (
              (w = (x[t] - x.min) / x.max || 0),
              Bt(x.b + (n ? n(w) : w) * x.v) + x.u
            );
          }
        );
      },
      Ce = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (n) {
          var r = Bt(Math.round(parseFloat(n) / t) * t * e);
          return (r - (r % 1)) / e + (K(n) ? 0 : ye(n));
        };
      },
      Oe = function (t, e) {
        var n,
          r,
          i = at(t);
        return (
          !i &&
            et(t) &&
            ((n = i = t.radius || W),
            t.values
              ? ((t = Se(t.values)), (r = !K(t[0])) && (n *= n))
              : (t = Ce(t.increment))),
          _e(
            e,
            i
              ? J(t)
                ? function (e) {
                    return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                  }
                : function (e) {
                    for (
                      var i,
                        s,
                        a = parseFloat(r ? e.x : e),
                        o = parseFloat(r ? e.y : 0),
                        l = W,
                        c = 0,
                        u = t.length;
                      u--;

                    )
                      (i = r
                        ? (i = t[u].x - a) * i + (s = t[u].y - o) * s
                        : Math.abs(t[u] - a)) < l && ((l = i), (c = u));
                    return (
                      (c = !n || l <= n ? t[c] : e),
                      r || c === e || K(e) ? c : c + ye(e)
                    );
                  }
              : Ce(t),
          )
        );
      },
      ke = function (t, e, n, r) {
        return _e(at(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
          return at(t)
            ? t[~~(Math.random() * t.length)]
            : (n = n || 1e-5) &&
                (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n,
                  ) *
                    n *
                    r,
                ) / r;
        });
      },
      Me = function (t, e, n) {
        return _e(n, function (n) {
          return t[~~e(n)];
        });
      },
      Le = function (t) {
        for (var e, n, r, i, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
          (r = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (n = t.substr(e + 7, r - e - 7).match(i ? dt : ot)),
            (a +=
              t.substr(s, e - s) +
              ke(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
            (s = r + 1);
        return a + t.substr(s, t.length - s);
      },
      Pe = function (t, e, n, r, i) {
        var s = e - t,
          a = r - n;
        return _e(i, function (e) {
          return n + (((e - t) / s) * a || 0);
        });
      },
      De = function (t, e, n) {
        var r,
          i,
          s,
          a = t.labels,
          o = W;
        for (r in a)
          (i = a[r] - e) < 0 == !!n &&
            i &&
            o > (i = Math.abs(i)) &&
            ((s = r), (o = i));
        return s;
      },
      Ie = function (t, e, n) {
        var r,
          i,
          s,
          a = t.vars,
          o = a[e],
          l = O,
          c = t._ctx;
        if (o)
          return (
            (r = a[e + "Params"]),
            (i = a.callbackScope || t),
            n && Et.length && Ft(),
            c && (O = c),
            (s = r ? o.apply(i, r) : o.call(i)),
            (O = l),
            s
          );
      },
      Re = function (t) {
        return (
          Zt(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!C),
          t.progress() < 1 && Ie(t, "onInterrupt"),
          t
        );
      },
      ze = [],
      Be = function (t) {
        if (rt() && t) {
          var e = (t = (!t.name && t.default) || t).name,
            n = J(t),
            r =
              e && !n && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: bt,
              render: kn,
              add: fn,
              kill: Ln,
              modifier: Mn,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: En,
              aliases: {},
              register: 0,
            };
          if ((je(), t !== r)) {
            if (Ct[e]) return;
            Ht(r, Ht(Ut(t, i), s)),
              Xt(r.prototype, Xt(i, Ut(t, s))),
              (Ct[(r.prop = e)] = r),
              t.targetTest && (Mt.push(r), (Tt[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          yt(e, r), t.register && t.register(Un, r, In);
        } else t && ze.push(t);
      },
      $e = 255,
      qe = {
        aqua: [0, $e, $e],
        lime: [0, $e, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, $e],
        navy: [0, 0, 128],
        white: [$e, $e, $e],
        olive: [128, 128, 0],
        yellow: [$e, $e, 0],
        orange: [$e, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [$e, 0, 0],
        pink: [$e, 192, 203],
        cyan: [0, $e, $e],
        transparent: [$e, $e, $e, 0],
      },
      Fe = function (t, e, n) {
        return (
          ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
            ? e + (n - e) * t * 6
            : t < 0.5
              ? n
              : 3 * t < 2
                ? e + (n - e) * (2 / 3 - t) * 6
                : e) *
            $e +
            0.5) |
          0
        );
      },
      Ne = function (t, e, n) {
        var r,
          i,
          s,
          a,
          o,
          l,
          c,
          u,
          h,
          d,
          f = t ? (K(t) ? [t >> 16, (t >> 8) & $e, t & $e] : 0) : qe.black;
        if (!f) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), qe[t]))
            f = qe[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((r = t.charAt(1)),
                (i = t.charAt(2)),
                (s = t.charAt(3)),
                (t =
                  "#" +
                  r +
                  r +
                  i +
                  i +
                  s +
                  s +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (f = parseInt(t.substr(1, 6), 16)) >> 16,
                (f >> 8) & $e,
                f & $e,
                parseInt(t.substr(7), 16) / 255,
              ];
            f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & $e, t & $e];
          } else if ("hsl" === t.substr(0, 3))
            if (((f = d = t.match(ot)), e)) {
              if (~t.indexOf("="))
                return (f = t.match(lt)), n && f.length < 4 && (f[3] = 1), f;
            } else
              (a = (+f[0] % 360) / 360),
                (o = +f[1] / 100),
                (r =
                  2 * (l = +f[2] / 100) -
                  (i = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                f.length > 3 && (f[3] *= 1),
                (f[0] = Fe(a + 1 / 3, r, i)),
                (f[1] = Fe(a, r, i)),
                (f[2] = Fe(a - 1 / 3, r, i));
          else f = t.match(ot) || qe.transparent;
          f = f.map(Number);
        }
        return (
          e &&
            !d &&
            ((r = f[0] / $e),
            (i = f[1] / $e),
            (s = f[2] / $e),
            (l = ((c = Math.max(r, i, s)) + (u = Math.min(r, i, s))) / 2),
            c === u
              ? (a = o = 0)
              : ((h = c - u),
                (o = l > 0.5 ? h / (2 - c - u) : h / (c + u)),
                (a =
                  c === r
                    ? (i - s) / h + (i < s ? 6 : 0)
                    : c === i
                      ? (s - r) / h + 2
                      : (r - i) / h + 4),
                (a *= 60)),
            (f[0] = ~~(a + 0.5)),
            (f[1] = ~~(100 * o + 0.5)),
            (f[2] = ~~(100 * l + 0.5))),
          n && f.length < 4 && (f[3] = 1),
          f
        );
      },
      Ye = function (t) {
        var e = [],
          n = [],
          r = -1;
        return (
          t.split(He).forEach(function (t) {
            var i = t.match(ct) || [];
            e.push.apply(e, i), n.push((r += i.length + 1));
          }),
          (e.c = n),
          e
        );
      },
      We = function (t, e, n) {
        var r,
          i,
          s,
          a,
          o = "",
          l = (t + o).match(He),
          c = e ? "hsla(" : "rgba(",
          u = 0;
        if (!l) return t;
        if (
          ((l = l.map(function (t) {
            return (
              (t = Ne(t, e, 1)) &&
              c +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          n && ((s = Ye(t)), (r = n.c).join(o) !== s.c.join(o)))
        )
          for (a = (i = t.replace(He, "1").split(ct)).length - 1; u < a; u++)
            o +=
              i[u] +
              (~r.indexOf(u)
                ? l.shift() || c + "0,0,0,0)"
                : (s.length ? s : l.length ? l : n).shift());
        if (!i)
          for (a = (i = t.split(He)).length - 1; u < a; u++) o += i[u] + l[u];
        return o + i[a];
      },
      He = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in qe) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      Xe = /hsl[a]?\(/,
      Ve = function (t) {
        var e,
          n = t.join(" ");
        if (((He.lastIndex = 0), He.test(n)))
          return (
            (e = Xe.test(n)),
            (t[1] = We(t[1], e)),
            (t[0] = We(t[0], e, Ye(t[1]))),
            !0
          );
      },
      Ue = (function () {
        var t,
          e,
          n,
          r,
          i,
          s,
          a = Date.now,
          o = 500,
          l = 33,
          c = a(),
          u = c,
          h = 1e3 / 240,
          d = h,
          f = [],
          p = function n(p) {
            var g,
              m,
              _,
              v,
              y = a() - u,
              b = !0 === p;
            if (
              (y > o && (c += y - l),
              ((g = (_ = (u += y) - c) - d) > 0 || b) &&
                ((v = ++r.frame),
                (i = _ - 1e3 * r.time),
                (r.time = _ /= 1e3),
                (d += g + (g >= h ? 4 : h - g)),
                (m = 1)),
              b || (t = e(n)),
              m)
            )
              for (s = 0; s < f.length; s++) f[s](_, i, v, p);
          };
        return (r = {
          time: 0,
          frame: 0,
          tick: function () {
            p(!0);
          },
          deltaRatio: function (t) {
            return i / (1e3 / (t || 60));
          },
          wake: function () {
            D &&
              (!L &&
                rt() &&
                ((M = L = window),
                (P = M.document || {}),
                (pt.gsap = Un),
                (M.gsapVersions || (M.gsapVersions = [])).push(Un.version),
                mt(gt || M.GreenSockGlobals || (!M.gsap && M) || {}),
                (n = M.requestAnimationFrame),
                ze.forEach(Be)),
              t && r.sleep(),
              (e =
                n ||
                function (t) {
                  return setTimeout(t, (d - 1e3 * r.time + 1) | 0);
                }),
              (z = 1),
              p(2));
          },
          sleep: function () {
            (n ? M.cancelAnimationFrame : clearTimeout)(t), (z = 0), (e = bt);
          },
          lagSmoothing: function (t, e) {
            (o = t || 1 / 0), (l = Math.min(e || 33, o));
          },
          fps: function (t) {
            (h = 1e3 / (t || 240)), (d = 1e3 * r.time + h);
          },
          add: function (t, e, n) {
            var i = e
              ? function (e, n, s, a) {
                  t(e, n, s, a), r.remove(i);
                }
              : t;
            return r.remove(t), f[n ? "unshift" : "push"](i), je(), i;
          },
          remove: function (t, e) {
            ~(e = f.indexOf(t)) && f.splice(e, 1) && s >= e && s--;
          },
          _listeners: f,
        });
      })(),
      je = function () {
        return !z && Ue.wake();
      },
      Ge = {},
      Qe = /^[\d.\-M][\d.\-,\s]/,
      Ze = /["']/g,
      Je = function (t) {
        for (
          var e,
            n,
            r,
            i = {},
            s = t.substr(1, t.length - 3).split(":"),
            a = s[0],
            o = 1,
            l = s.length;
          o < l;
          o++
        )
          (n = s[o]),
            (e = o !== l - 1 ? n.lastIndexOf(",") : n.length),
            (r = n.substr(0, e)),
            (i[a] = isNaN(r) ? r.replace(Ze, "").trim() : +r),
            (a = n.substr(e + 1).trim());
        return i;
      },
      Ke = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      tn = function t(e, n) {
        for (var r, i = e._first; i; )
          i instanceof cn
            ? t(i, n)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === n ||
              (i.timeline
                ? t(i.timeline, n)
                : ((r = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = r),
                  (i._yoyo = n))),
            (i = i._next);
      },
      en = function (t, e) {
        return (
          (t &&
            (J(t)
              ? t
              : Ge[t] ||
                (function (t) {
                  var e,
                    n,
                    r,
                    i,
                    s = (t + "").split("("),
                    a = Ge[s[0]];
                  return a && s.length > 1 && a.config
                    ? a.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [Je(s[1])]
                          : ((e = t),
                            (n = e.indexOf("(") + 1),
                            (r = e.indexOf(")")),
                            (i = e.indexOf("(", n)),
                            e.substring(
                              n,
                              ~i && i < r ? e.indexOf(")", r + 1) : r,
                            ))
                              .split(",")
                              .map(Yt),
                      )
                    : Ge._CE && Qe.test(t)
                      ? Ge._CE("", t)
                      : a;
                })(t))) ||
          e
        );
      },
      nn = function (t, e, n, r) {
        void 0 === n &&
          (n = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === r &&
            (r = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          s = { easeIn: e, easeOut: n, easeInOut: r };
        return (
          Rt(t, function (t) {
            for (var e in ((Ge[t] = pt[t] = s),
            (Ge[(i = t.toLowerCase())] = n),
            s))
              Ge[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = Ge[t + "." + e] = s[e];
          }),
          s
        );
      },
      rn = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      sn = function t(e, n, r) {
        var i = n >= 1 ? n : 1,
          s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          a = (s / X) * (Math.asin(1 / i) || 0),
          o = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * s) + 1;
          },
          l =
            "out" === e
              ? o
              : "in" === e
                ? function (t) {
                    return 1 - o(1 - t);
                  }
                : rn(o);
        return (
          (s = X / s),
          (l.config = function (n, r) {
            return t(e, n, r);
          }),
          l
        );
      },
      an = function t(e, n) {
        void 0 === n && (n = 1.70158);
        var r = function (t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
          },
          i =
            "out" === e
              ? r
              : "in" === e
                ? function (t) {
                    return 1 - r(1 - t);
                  }
                : rn(r);
        return (
          (i.config = function (n) {
            return t(e, n);
          }),
          i
        );
      };
    Rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var n = e < 5 ? e + 1 : e;
      nn(
        t + ",Power" + (n - 1),
        e
          ? function (t) {
              return Math.pow(t, n);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, n);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, n) / 2
            : 1 - Math.pow(2 * (1 - t), n) / 2;
        },
      );
    }),
      (Ge.Linear.easeNone = Ge.none = Ge.Linear.easeIn),
      nn("Elastic", sn("in"), sn("out"), sn()),
      (B = 7.5625),
      (q = 1 / ($ = 2.75)),
      nn(
        "Bounce",
        function (t) {
          return 1 - F(1 - t);
        },
        (F = function (t) {
          return t < q
            ? B * t * t
            : t < 0.7272727272727273
              ? B * Math.pow(t - 1.5 / $, 2) + 0.75
              : t < 0.9090909090909092
                ? B * (t -= 2.25 / $) * t + 0.9375
                : B * Math.pow(t - 2.625 / $, 2) + 0.984375;
        }),
      ),
      nn("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      nn("Circ", function (t) {
        return -(j(1 - t * t) - 1);
      }),
      nn("Sine", function (t) {
        return 1 === t ? 1 : 1 - G(t * V);
      }),
      nn("Back", an("in"), an("out"), an()),
      (Ge.SteppedEase =
        Ge.steps =
        pt.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((r * ve(0, 0.99999999, t)) | 0) + i) * n;
              };
            },
          }),
      (Y.ease = Ge["quad.out"]),
      Rt(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (Lt += t + "," + t + "Params,");
        },
      );
    var on = function (t, e) {
        (this.id = U++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : It),
          (this.set = e ? e.getSetter : En);
      },
      ln = (function () {
        function t(t) {
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            de(this, +t.duration, 1, 1),
            (this.data = t.data),
            O && ((this._ctx = O), O.data.push(this)),
            z || Ue.wake();
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                de(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((je(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (
                se(this, t), !n._dp || n.parent || ae(n, this);
                n && n.parent;

              )
                n.parent._time !==
                  n._start +
                    (n._ts >= 0
                      ? n._tTime / n._ts
                      : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                oe(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && Math.abs(this._zTime) === H) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), Nt(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + ee(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                  e,
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() > 0
                  ? 1
                  : 0;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    ee(this),
                  e,
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                  ? 1
                  : 0;
          }),
          (e.iteration = function (t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * n, e)
              : this._repeat
                ? ne(this._tTime, n) + 1
                : 1;
          }),
          (e.timeScale = function (t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var n =
              this.parent && this._ts
                ? re(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              this.totalTime(
                ve(-Math.abs(this._delay), this._tDur, n),
                !1 !== e,
              ),
              ie(this),
              (function (t) {
                for (var e = t.parent; e && e.parent; )
                  (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
              })(this)
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (je(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          Math.abs(this._zTime) !== H &&
                          (this._tTime -= H),
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && oe(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (nt(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? re(e.rawTime(t), this)
                  : this._tTime
              : this._tTime;
          }),
          (e.revert = function (t) {
            void 0 === t && (t = St);
            var e = C;
            return (
              (C = t),
              (this._initted || this._startAt) &&
                (this.timeline && this.timeline.revert(t),
                this.totalTime(-0.01, t.suppressEvents)),
              "nested" !== this.data && !1 !== t.kill && this.kill(),
              (C = e),
              this
            );
          }),
          (e.globalTime = function (t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
              (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp);
            return !this.parent && this._sat ? this._sat.globalTime(t) : n;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), fe(this))
              : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), fe(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(ge(this, t), nt(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, nt(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              n = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= n &&
                t < this.endTime(!0) - H
              )
            );
          }),
          (e.eventCallback = function (t, e, n) {
            var r = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((r[t] = e),
                    n && (r[t + "Params"] = n),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete r[t],
                this)
              : r[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (n) {
              var r = J(t) ? t : Wt,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    J(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                    n(r),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            Re(this);
          }),
          t
        );
      })();
    Ht(ln.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var cn = (function (t) {
      function e(e, n) {
        var r;
        return (
          void 0 === e && (e = {}),
          ((r = t.call(this, e) || this).labels = {}),
          (r.smoothChildTiming = !!e.smoothChildTiming),
          (r.autoRemoveChildren = !!e.autoRemoveChildren),
          (r._sort = nt(e.sortChildren)),
          k && oe(e.parent || k, T(r), n),
          e.reversed && r.reverse(),
          e.paused && r.paused(!0),
          e.scrollTrigger && le(T(r), e.scrollTrigger),
          r
        );
      }
      E(e, t);
      var n = e.prototype;
      return (
        (n.to = function (t, e, n) {
          return me(0, arguments, this), this;
        }),
        (n.from = function (t, e, n) {
          return me(1, arguments, this), this;
        }),
        (n.fromTo = function (t, e, n, r) {
          return me(2, arguments, this), this;
        }),
        (n.set = function (t, e, n) {
          return (
            (e.duration = 0),
            (e.parent = this),
            jt(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new bn(t, e, ge(this, n), 1),
            this
          );
        }),
        (n.call = function (t, e, n) {
          return oe(this, bn.delayedCall(0, t, e), n);
        }),
        (n.staggerTo = function (t, e, n, r, i, s, a) {
          return (
            (n.duration = e),
            (n.stagger = n.stagger || r),
            (n.onComplete = s),
            (n.onCompleteParams = a),
            (n.parent = this),
            new bn(t, n, ge(this, i)),
            this
          );
        }),
        (n.staggerFrom = function (t, e, n, r, i, s, a) {
          return (
            (n.runBackwards = 1),
            (jt(n).immediateRender = nt(n.immediateRender)),
            this.staggerTo(t, e, n, r, i, s, a)
          );
        }),
        (n.staggerFromTo = function (t, e, n, r, i, s, a, o) {
          return (
            (r.startAt = n),
            (jt(r).immediateRender = nt(r.immediateRender)),
            this.staggerTo(t, e, r, i, s, a, o)
          );
        }),
        (n.render = function (t, e, n) {
          var r,
            i,
            s,
            a,
            o,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            g = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            _ = this._dur,
            v = t <= 0 ? 0 : Bt(t),
            y = this._zTime < 0 != t < 0 && (this._initted || !_);
          if (
            (this !== k && v > m && t >= 0 && (v = m),
            v !== this._tTime || n || y)
          ) {
            if (
              (g !== this._time &&
                _ &&
                ((v += this._time - g), (t += this._time - g)),
              (r = v),
              (h = this._start),
              (l = !(u = this._ts)),
              y && (_ || (g = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((f = this._yoyo),
                (o = _ + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * o + t, e, n);
              if (
                ((r = Bt(v % o)),
                v === m
                  ? ((a = this._repeat), (r = _))
                  : ((a = ~~(v / o)) && a === v / o && ((r = _), a--),
                    r > _ && (r = _)),
                (d = ne(this._tTime, o)),
                !g &&
                  this._tTime &&
                  d !== a &&
                  this._tTime - d * o - this._dur <= 0 &&
                  (d = a),
                f && 1 & a && ((r = _ - r), (p = 1)),
                a !== d && !this._lock)
              ) {
                var b = f && 1 & d,
                  w = b === (f && 1 & a);
                if (
                  (a < d && (b = !b),
                  (g = b ? 0 : v % _ ? _ : v),
                  (this._lock = 1),
                  (this.render(g || (p ? 0 : Bt(a * o)), e, !_)._lock = 0),
                  (this._tTime = v),
                  !e && this.parent && Ie(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !p &&
                    (this.invalidate()._lock = 1),
                  (g && g !== this._time) ||
                    l !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((_ = this._dur),
                  (m = this._tDur),
                  w &&
                    ((this._lock = 2),
                    (g = b ? _ : -1e-4),
                    this.render(g, !0),
                    this.vars.repeatRefresh && !p && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                tn(this, p);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((c = (function (t, e, n) {
                  var r;
                  if (n > e)
                    for (r = t._first; r && r._start <= n; ) {
                      if ("isPause" === r.data && r._start > e) return r;
                      r = r._next;
                    }
                  else
                    for (r = t._last; r && r._start >= n; ) {
                      if ("isPause" === r.data && r._start < e) return r;
                      r = r._prev;
                    }
                })(this, Bt(g), Bt(r))),
                c && (v -= r - (r = c._start))),
              (this._tTime = v),
              (this._time = r),
              (this._act = !u),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (g = 0)),
              !g && r && !e && !a && (Ie(this, "onStart"), this._tTime !== v))
            )
              return this;
            if (r >= g && t >= 0)
              for (i = this._first; i; ) {
                if (
                  ((s = i._next), (i._act || r >= i._start) && i._ts && c !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (r - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (r - i._start) * i._ts,
                      e,
                      n,
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), s && (v += this._zTime = -1e-8);
                    break;
                  }
                }
                i = s;
              }
            else {
              i = this._last;
              for (var x = t < 0 ? t : r; i; ) {
                if (
                  ((s = i._prev), (i._act || x <= i._end) && i._ts && c !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (x - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (x - i._start) * i._ts,
                      e,
                      n || (C && (i._initted || i._startAt)),
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), s && (v += this._zTime = x ? -1e-8 : H);
                    break;
                  }
                }
                i = s;
              }
            }
            if (
              c &&
              !e &&
              (this.pause(),
              (c.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1),
              this._ts)
            )
              return (this._start = h), ie(this), this.render(t, e, n);
            this._onUpdate && !e && Ie(this, "onUpdate", !0),
              ((v === m && this._tTime >= this.totalDuration()) || (!v && g)) &&
                ((h !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !_) &&
                    ((v === m && this._ts > 0) || (!v && this._ts < 0)) &&
                    Zt(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (!v && !g && m) ||
                    (Ie(
                      this,
                      v === m && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0,
                    ),
                    this._prom &&
                      !(v < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (n.add = function (t, e) {
          var n = this;
          if ((K(e) || (e = ge(this, e, t)), !(t instanceof ln))) {
            if (at(t))
              return (
                t.forEach(function (t) {
                  return n.add(t, e);
                }),
                this
              );
            if (Z(t)) return this.addLabel(t, e);
            if (!J(t)) return this;
            t = bn.delayedCall(0, t);
          }
          return this !== t ? oe(this, t, e) : this;
        }),
        (n.getChildren = function (t, e, n, r) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === r && (r = -W);
          for (var i = [], s = this._first; s; )
            s._start >= r &&
              (s instanceof bn
                ? e && i.push(s)
                : (n && i.push(s),
                  t && i.push.apply(i, s.getChildren(!0, e, n)))),
              (s = s._next);
          return i;
        }),
        (n.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
            if (e[n].vars.id === t) return e[n];
        }),
        (n.remove = function (t) {
          return Z(t)
            ? this.removeLabel(t)
            : J(t)
              ? this.killTweensOf(t)
              : (Qt(this, t),
                t === this._recent && (this._recent = this._last),
                Jt(this));
        }),
        (n.totalTime = function (e, n) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = Bt(
                  Ue.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts),
                )),
              t.prototype.totalTime.call(this, e, n),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (t, e) {
          return (this.labels[t] = ge(this, e)), this;
        }),
        (n.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (n.addPause = function (t, e, n) {
          var r = bn.delayedCall(0, e || bt, n);
          return (
            (r.data = "isPause"), (this._hasPause = 1), oe(this, r, ge(this, t))
          );
        }),
        (n.removePause = function (t) {
          var e = this._first;
          for (t = ge(this, t); e; )
            e._start === t && "isPause" === e.data && Zt(e), (e = e._next);
        }),
        (n.killTweensOf = function (t, e, n) {
          for (var r = this.getTweensOf(t, n), i = r.length; i--; )
            un !== r[i] && r[i].kill(t, e);
          return this;
        }),
        (n.getTweensOf = function (t, e) {
          for (var n, r = [], i = Se(t), s = this._first, a = K(e); s; )
            s instanceof bn
              ? qt(s._targets, i) &&
                (a
                  ? (!un || (s._initted && s._ts)) &&
                    s.globalTime(0) <= e &&
                    s.globalTime(s.totalDuration()) > e
                  : !e || s.isActive()) &&
                r.push(s)
              : (n = s.getTweensOf(i, e)).length && r.push.apply(r, n),
              (s = s._next);
          return r;
        }),
        (n.tweenTo = function (t, e) {
          e = e || {};
          var n,
            r = this,
            i = ge(r, t),
            s = e,
            a = s.startAt,
            o = s.onStart,
            l = s.onStartParams,
            c = s.immediateRender,
            u = bn.to(
              r,
              Ht(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (i - (a && "time" in a ? a.time : r._time)) /
                        r.timeScale(),
                    ) ||
                    H,
                  onStart: function () {
                    if ((r.pause(), !n)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (i - (a && "time" in a ? a.time : r._time)) /
                            r.timeScale(),
                        );
                      u._dur !== t && de(u, t, 0, 1).render(u._time, !0, !0),
                        (n = 1);
                    }
                    o && o.apply(u, l || []);
                  },
                },
                e,
              ),
            );
          return c ? u.render(0) : u;
        }),
        (n.tweenFromTo = function (t, e, n) {
          return this.tweenTo(e, Ht({ startAt: { time: ge(this, t) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (t) {
          return void 0 === t && (t = this._time), De(this, ge(this, t));
        }),
        (n.previousLabel = function (t) {
          return void 0 === t && (t = this._time), De(this, ge(this, t), 1);
        }),
        (n.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + H);
        }),
        (n.shiftChildren = function (t, e, n) {
          void 0 === n && (n = 0);
          for (var r, i = this._first, s = this.labels; i; )
            i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (r in s) s[r] >= n && (s[r] += t);
          return Jt(this);
        }),
        (n.invalidate = function (e) {
          var n = this._first;
          for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
          return t.prototype.invalidate.call(this, e);
        }),
        (n.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, n = this._first; n; )
            (e = n._next), this.remove(n), (n = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Jt(this)
          );
        }),
        (n.totalDuration = function (t) {
          var e,
            n,
            r,
            i = 0,
            s = this,
            a = s._last,
            o = W;
          if (arguments.length)
            return s.timeScale(
              (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                (s.reversed() ? -t : t),
            );
          if (s._dirty) {
            for (r = s.parent; a; )
              (e = a._prev),
                a._dirty && a.totalDuration(),
                (n = a._start) > o && s._sort && a._ts && !s._lock
                  ? ((s._lock = 1), (oe(s, a, n - a._delay, 1)._lock = 0))
                  : (o = n),
                n < 0 &&
                  a._ts &&
                  ((i -= n),
                  ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                    ((s._start += n / s._ts), (s._time -= n), (s._tTime -= n)),
                  s.shiftChildren(-n, !1, -Infinity),
                  (o = 0)),
                a._end > i && a._ts && (i = a._end),
                (a = e);
            de(s, s === k && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
          }
          return s._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((k._ts && (Nt(k, re(t, k)), (I = Ue.frame)), Ue.frame >= kt)) {
            kt += N.autoSleep || 120;
            var e = k._first;
            if ((!e || !e._ts) && N.autoSleep && Ue._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || Ue.sleep();
            }
          }
        }),
        e
      );
    })(ln);
    Ht(cn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var un,
      hn,
      dn = function (t, e, n, r, i, s, a) {
        var o,
          l,
          c,
          u,
          h,
          d,
          f,
          p,
          g = new In(this._pt, t, e, 0, 1, On, null, i),
          m = 0,
          _ = 0;
        for (
          g.b = n,
            g.e = r,
            n += "",
            (f = ~(r += "").indexOf("random(")) && (r = Le(r)),
            s && (s((p = [n, r]), t, e), (n = p[0]), (r = p[1])),
            l = n.match(ut) || [];
          (o = ut.exec(r));

        )
          (u = o[0]),
            (h = r.substring(m, o.index)),
            c ? (c = (c + 1) % 5) : "rgba(" === h.substr(-5) && (c = 1),
            u !== l[_++] &&
              ((d = parseFloat(l[_ - 1]) || 0),
              (g._pt = {
                _next: g._pt,
                p: h || 1 === _ ? h : ",",
                s: d,
                c: "=" === u.charAt(1) ? $t(d, u) - d : parseFloat(u) - d,
                m: c && c < 4 ? Math.round : 0,
              }),
              (m = ut.lastIndex));
        return (
          (g.c = m < r.length ? r.substring(m, r.length) : ""),
          (g.fp = a),
          (ht.test(r) || f) && (g.e = 0),
          (this._pt = g),
          g
        );
      },
      fn = function (t, e, n, r, i, s, a, o, l, c) {
        J(r) && (r = r(i || 0, t, s));
        var u,
          h = t[e],
          d =
            "get" !== n
              ? n
              : J(h)
                ? l
                  ? t[
                      e.indexOf("set") || !J(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](l)
                  : t[e]()
                : h,
          f = J(h) ? (l ? Sn : xn) : wn;
        if (
          (Z(r) &&
            (~r.indexOf("random(") && (r = Le(r)),
            "=" === r.charAt(1) &&
              ((u = $t(d, r) + (ye(d) || 0)) || 0 === u) &&
              (r = u)),
          !c || d !== r || hn)
        )
          return isNaN(d * r) || "" === r
            ? (!h && !(e in t) && _t(e, r),
              dn.call(this, t, e, d, r, f, o || N.stringFilter, l))
            : ((u = new In(
                this._pt,
                t,
                e,
                +d || 0,
                r - (d || 0),
                "boolean" == typeof h ? Cn : An,
                0,
                f,
              )),
              l && (u.fp = l),
              a && u.modifier(a, this, t),
              (this._pt = u));
      },
      pn = function (t, e, n, r, i, s) {
        var a, o, l, c;
        if (
          Ct[t] &&
          !1 !==
            (a = new Ct[t]()).init(
              i,
              a.rawVars
                ? e[t]
                : (function (t, e, n, r, i) {
                    if (
                      (J(t) && (t = _n(t, i, e, n, r)),
                      !et(t) || (t.style && t.nodeType) || at(t) || st(t))
                    )
                      return Z(t) ? _n(t, i, e, n, r) : t;
                    var s,
                      a = {};
                    for (s in t) a[s] = _n(t[s], i, e, n, r);
                    return a;
                  })(e[t], r, i, s, n),
              n,
              r,
              s,
            ) &&
          ((n._pt = o = new In(n._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
          n !== R)
        )
          for (
            l = n._ptLookup[n._targets.indexOf(i)], c = a._props.length;
            c--;

          )
            l[a._props[c]] = o;
        return a;
      },
      gn = function t(e, n, r) {
        var i,
          s,
          a,
          o,
          l,
          c,
          u,
          h,
          d,
          f,
          p,
          g,
          m,
          _ = e.vars,
          v = _.ease,
          y = _.startAt,
          b = _.immediateRender,
          w = _.lazy,
          x = _.onUpdate,
          S = _.runBackwards,
          T = _.yoyoEase,
          E = _.keyframes,
          O = _.autoRevert,
          M = e._dur,
          L = e._startAt,
          P = e._targets,
          D = e.parent,
          I = D && "nested" === D.data ? D.vars.targets : P,
          R = "auto" === e._overwrite && !A,
          z = e.timeline;
        if (
          (z && (!E || !v) && (v = "none"),
          (e._ease = en(v, Y.ease)),
          (e._yEase = T ? Ke(en(!0 === T ? v : T, Y.ease)) : 0),
          T &&
            e._yoyo &&
            !e._repeat &&
            ((T = e._yEase), (e._yEase = e._ease), (e._ease = T)),
          (e._from = !z && !!_.runBackwards),
          !z || (E && !_.stagger))
        ) {
          if (
            ((g = (h = P[0] ? Dt(P[0]).harness : 0) && _[h.prop]),
            (i = Ut(_, Tt)),
            L &&
              (L._zTime < 0 && L.progress(1),
              n < 0 && S && b && !O
                ? L.render(-1, !0)
                : L.revert(S && M ? xt : wt),
              (L._lazy = 0)),
            y)
          ) {
            if (
              (Zt(
                (e._startAt = bn.set(
                  P,
                  Ht(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: D,
                      immediateRender: !0,
                      lazy: !L && nt(w),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        x &&
                        function () {
                          return Ie(e, "onUpdate");
                        },
                      stagger: 0,
                    },
                    y,
                  ),
                )),
              ),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              n < 0 && (C || (!b && !O)) && e._startAt.revert(xt),
              b && M && n <= 0 && r <= 0)
            )
              return void (n && (e._zTime = n));
          } else if (S && M && !L)
            if (
              (n && (b = !1),
              (a = Ht(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: b && !L && nt(w),
                  immediateRender: b,
                  stagger: 0,
                  parent: D,
                },
                i,
              )),
              g && (a[h.prop] = g),
              Zt((e._startAt = bn.set(P, a))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              n < 0 && (C ? e._startAt.revert(xt) : e._startAt.render(-1, !0)),
              (e._zTime = n),
              b)
            ) {
              if (!n) return;
            } else t(e._startAt, H, H);
          for (
            e._pt = e._ptCache = 0, w = (M && nt(w)) || (w && !M), s = 0;
            s < P.length;
            s++
          ) {
            if (
              ((u = (l = P[s])._gsap || Pt(P)[s]._gsap),
              (e._ptLookup[s] = f = {}),
              At[u.id] && Et.length && Ft(),
              (p = I === P ? s : I.indexOf(l)),
              h &&
                !1 !== (d = new h()).init(l, g || i, e, p, I) &&
                ((e._pt = o =
                  new In(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority)),
                d._props.forEach(function (t) {
                  f[t] = o;
                }),
                d.priority && (c = 1)),
              !h || g)
            )
              for (a in i)
                Ct[a] && (d = pn(a, i, e, p, l, I))
                  ? d.priority && (c = 1)
                  : (f[a] = o =
                      fn.call(e, l, a, "get", i[a], p, I, 0, _.stringFilter));
            e._op && e._op[s] && e.kill(l, e._op[s]),
              R &&
                e._pt &&
                ((un = e),
                k.killTweensOf(l, f, e.globalTime(n)),
                (m = !e.parent),
                (un = 0)),
              e._pt && w && (At[u.id] = 1);
          }
          c && Dn(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = x),
          (e._initted = (!e._op || e._pt) && !m),
          E && n <= 0 && z.render(W, !0, !0);
      },
      mn = function (t, e, n, r) {
        var i,
          s,
          a = e.ease || r || "power1.inOut";
        if (at(e))
          (s = n[t] || (n[t] = [])),
            e.forEach(function (t, n) {
              return s.push({ t: (n / (e.length - 1)) * 100, v: t, e: a });
            });
        else
          for (i in e)
            (s = n[i] || (n[i] = [])),
              "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: a });
      },
      _n = function (t, e, n, r, i) {
        return J(t)
          ? t.call(e, n, r, i)
          : Z(t) && ~t.indexOf("random(")
            ? Le(t)
            : t;
      },
      vn = Lt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      yn = {};
    Rt(vn + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (yn[t] = 1);
    });
    var bn = (function (t) {
      function e(e, n, r, i) {
        var s;
        "number" == typeof n && ((r.duration = n), (n = r), (r = null));
        var a,
          o,
          l,
          c,
          u,
          h,
          d,
          f,
          p = (s = t.call(this, i ? n : jt(n)) || this).vars,
          g = p.duration,
          m = p.delay,
          _ = p.immediateRender,
          v = p.stagger,
          y = p.overwrite,
          b = p.keyframes,
          w = p.defaults,
          x = p.scrollTrigger,
          S = p.yoyoEase,
          E = n.parent || k,
          C = (at(e) || st(e) ? K(e[0]) : "length" in n) ? [e] : Se(e);
        if (
          ((s._targets = C.length
            ? Pt(C)
            : vt(
                "GSAP target " + e + " not found. https://gsap.com",
                !N.nullTargetWarn,
              ) || []),
          (s._ptLookup = []),
          (s._overwrite = y),
          b || v || it(g) || it(m))
        ) {
          if (
            ((n = s.vars),
            (a = s.timeline =
              new cn({
                data: "nested",
                defaults: w || {},
                targets: E && "nested" === E.data ? E.vars.targets : C,
              })).kill(),
            (a.parent = a._dp = T(s)),
            (a._start = 0),
            v || it(g) || it(m))
          ) {
            if (((c = C.length), (d = v && Ae(v)), et(v)))
              for (u in v) ~vn.indexOf(u) && (f || (f = {}), (f[u] = v[u]));
            for (o = 0; o < c; o++)
              ((l = Ut(n, yn)).stagger = 0),
                S && (l.yoyoEase = S),
                f && Xt(l, f),
                (h = C[o]),
                (l.duration = +_n(g, T(s), o, h, C)),
                (l.delay = (+_n(m, T(s), o, h, C) || 0) - s._delay),
                !v &&
                  1 === c &&
                  l.delay &&
                  ((s._delay = m = l.delay), (s._start += m), (l.delay = 0)),
                a.to(h, l, d ? d(o, h, C) : 0),
                (a._ease = Ge.none);
            a.duration() ? (g = m = 0) : (s.timeline = 0);
          } else if (b) {
            jt(Ht(a.vars.defaults, { ease: "none" })),
              (a._ease = en(b.ease || n.ease || "none"));
            var O,
              M,
              L,
              P = 0;
            if (at(b))
              b.forEach(function (t) {
                return a.to(C, t, ">");
              }),
                a.duration();
            else {
              for (u in ((l = {}), b))
                "ease" === u || "easeEach" === u || mn(u, b[u], l, b.easeEach);
              for (u in l)
                for (
                  O = l[u].sort(function (t, e) {
                    return t.t - e.t;
                  }),
                    P = 0,
                    o = 0;
                  o < O.length;
                  o++
                )
                  ((L = {
                    ease: (M = O[o]).e,
                    duration: ((M.t - (o ? O[o - 1].t : 0)) / 100) * g,
                  })[u] = M.v),
                    a.to(C, L, P),
                    (P += L.duration);
              a.duration() < g && a.to({}, { duration: g - a.duration() });
            }
          }
          g || s.duration((g = a.duration()));
        } else s.timeline = 0;
        return (
          !0 !== y || A || ((un = T(s)), k.killTweensOf(C), (un = 0)),
          oe(E, T(s), r),
          n.reversed && s.reverse(),
          n.paused && s.paused(!0),
          (_ ||
            (!g &&
              !b &&
              s._start === Bt(E._time) &&
              nt(_) &&
              te(T(s)) &&
              "nested" !== E.data)) &&
            ((s._tTime = -1e-8), s.render(Math.max(0, -m) || 0)),
          x && le(T(s), x),
          s
        );
      }
      E(e, t);
      var n = e.prototype;
      return (
        (n.render = function (t, e, n) {
          var r,
            i,
            s,
            a,
            o,
            l,
            c,
            u,
            h,
            d = this._time,
            f = this._tDur,
            p = this._dur,
            g = t < 0,
            m = t > f - H && !g ? f : t < H ? 0 : t;
          if (p) {
            if (
              m !== this._tTime ||
              !t ||
              n ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== g)
            ) {
              if (((r = m), (u = this.timeline), this._repeat)) {
                if (((a = p + this._rDelay), this._repeat < -1 && g))
                  return this.totalTime(100 * a + t, e, n);
                if (
                  ((r = Bt(m % a)),
                  m === f
                    ? ((s = this._repeat), (r = p))
                    : ((s = ~~(m / a)) && s === Bt(m / a) && ((r = p), s--),
                      r > p && (r = p)),
                  (l = this._yoyo && 1 & s) && ((h = this._yEase), (r = p - r)),
                  (o = ne(this._tTime, a)),
                  r === d && !n && this._initted && s === o)
                )
                  return (this._tTime = m), this;
                s !== o &&
                  (u && this._yEase && tn(u, l),
                  this.vars.repeatRefresh &&
                    !l &&
                    !this._lock &&
                    this._time !== p &&
                    this._initted &&
                    ((this._lock = n = 1),
                    (this.render(Bt(a * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (ce(this, g ? t : r, n, e, m))
                  return (this._tTime = 0), this;
                if (
                  !(
                    d === this._time ||
                    (n && this.vars.repeatRefresh && s !== o)
                  )
                )
                  return this;
                if (p !== this._dur) return this.render(t, e, n);
              }
              if (
                ((this._tTime = m),
                (this._time = r),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = c = (h || this._ease)(r / p)),
                this._from && (this.ratio = c = 1 - c),
                r && !d && !e && !s && (Ie(this, "onStart"), this._tTime !== m))
              )
                return this;
              for (i = this._pt; i; ) i.r(c, i.d), (i = i._next);
              (u &&
                u.render(
                  t < 0 ? t : !r && l ? -1e-8 : u._dur * u._ease(r / this._dur),
                  e,
                  n,
                )) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (g && Kt(this, t, 0, n), Ie(this, "onUpdate")),
                this._repeat &&
                  s !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  Ie(this, "onRepeat"),
                (m !== this._tDur && m) ||
                  this._tTime !== m ||
                  (g && !this._onUpdate && Kt(this, t, 0, !0),
                  (t || !p) &&
                    ((m === this._tDur && this._ts > 0) ||
                      (!m && this._ts < 0)) &&
                    Zt(this, 1),
                  e ||
                    (g && !d) ||
                    !(m || d || l) ||
                    (Ie(this, m === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(m < f && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, n, r) {
              var i,
                s,
                a,
                o = t.ratio,
                l =
                  e < 0 ||
                  (!e &&
                    ((!t._start && ue(t) && (t._initted || !he(t))) ||
                      ((t._ts < 0 || t._dp._ts < 0) && !he(t))))
                    ? 0
                    : 1,
                c = t._rDelay,
                u = 0;
              if (
                (c &&
                  t._repeat &&
                  ((u = ve(0, t._tDur, e)),
                  (s = ne(u, c)),
                  t._yoyo && 1 & s && (l = 1 - l),
                  s !== ne(t._tTime, c) &&
                    ((o = 1 - l),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                l !== o || C || r || t._zTime === H || (!e && t._zTime))
              ) {
                if (!t._initted && ce(t, e, r, n, u)) return;
                for (
                  a = t._zTime,
                    t._zTime = e || (n ? H : 0),
                    n || (n = e && !a),
                    t.ratio = l,
                    t._from && (l = 1 - l),
                    t._time = 0,
                    t._tTime = u,
                    i = t._pt;
                  i;

                )
                  i.r(l, i.d), (i = i._next);
                e < 0 && Kt(t, e, 0, !0),
                  t._onUpdate && !n && Ie(t, "onUpdate"),
                  u && t._repeat && !n && t.parent && Ie(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === l &&
                    (l && Zt(t, 1),
                    n ||
                      C ||
                      (Ie(t, l ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, n);
          return this;
        }),
        (n.targets = function () {
          return this._targets;
        }),
        (n.invalidate = function (e) {
          return (
            (!e || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
          );
        }),
        (n.resetTo = function (t, e, n, r, i) {
          z || Ue.wake(), this._ts || this.play();
          var s = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts,
          );
          return (
            this._initted || gn(this, s),
            (function (t, e, n, r, i, s, a, o) {
              var l,
                c,
                u,
                h,
                d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
              if (!d)
                for (
                  d = t._ptCache[e] = [],
                    u = t._ptLookup,
                    h = t._targets.length;
                  h--;

                ) {
                  if ((l = u[h][e]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
                      l = l._next;
                  if (!l)
                    return (
                      (hn = 1),
                      (t.vars[e] = "+=0"),
                      gn(t, a),
                      (hn = 0),
                      o ? vt(e + " not eligible for reset") : 1
                    );
                  d.push(l);
                }
              for (h = d.length; h--; )
                ((l = (c = d[h])._pt || c).s =
                  (!r && 0 !== r) || i ? l.s + (r || 0) + s * l.c : r),
                  (l.c = n - l.s),
                  c.e && (c.e = zt(n) + ye(c.e)),
                  c.b && (c.b = l.s + ye(c.b));
            })(this, t, e, n, r, this._ease(s / this._dur), s, i)
              ? this.resetTo(t, e, n, r, 1)
              : (se(this, 0),
                this.parent ||
                  Gt(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0,
                  ),
                this.render(0))
          );
        }),
        (n.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? Re(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, un && !0 !== un.vars.overwrite)
                ._first || Re(this),
              this.parent &&
                n !== this.timeline.totalDuration() &&
                de(this, (this._dur * this.timeline._tDur) / n, 0, 1),
              this
            );
          }
          var r,
            i,
            s,
            a,
            o,
            l,
            c,
            u = this._targets,
            h = t ? Se(t) : u,
            d = this._ptLookup,
            f = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var n = t.length, r = n === e.length;
                r && n-- && t[n] === e[n];

              );
              return n < 0;
            })(u, h)
          )
            return "all" === e && (this._pt = 0), Re(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (Z(e) &&
                  ((o = {}),
                  Rt(e, function (t) {
                    return (o[t] = 1);
                  }),
                  (e = o)),
                (e = (function (t, e) {
                  var n,
                    r,
                    i,
                    s,
                    a = t[0] ? Dt(t[0]).harness : 0,
                    o = a && a.aliases;
                  if (!o) return e;
                  for (r in ((n = Xt({}, e)), o))
                    if ((r in n))
                      for (i = (s = o[r].split(",")).length; i--; )
                        n[s[i]] = n[r];
                  return n;
                })(u, e))),
              c = u.length;
            c--;

          )
            if (~h.indexOf(u[c]))
              for (o in ((i = d[c]),
              "all" === e
                ? ((r[c] = e), (a = i), (s = {}))
                : ((s = r[c] = r[c] || {}), (a = e)),
              a))
                (l = i && i[o]) &&
                  (("kill" in l.d && !0 !== l.d.kill(o)) || Qt(this, l, "_pt"),
                  delete i[o]),
                  "all" !== s && (s[o] = 1);
          return this._initted && !this._pt && f && Re(this), this;
        }),
        (e.to = function (t, n) {
          return new e(t, n, arguments[2]);
        }),
        (e.from = function (t, e) {
          return me(1, arguments);
        }),
        (e.delayedCall = function (t, n, r, i) {
          return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (e.fromTo = function (t, e, n) {
          return me(2, arguments);
        }),
        (e.set = function (t, n) {
          return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
        }),
        (e.killTweensOf = function (t, e, n) {
          return k.killTweensOf(t, e, n);
        }),
        e
      );
    })(ln);
    Ht(bn.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      Rt("staggerTo,staggerFrom,staggerFromTo", function (t) {
        bn[t] = function () {
          var e = new cn(),
            n = be.call(arguments, 0);
          return (
            n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
          );
        };
      });
    var wn = function (t, e, n) {
        return (t[e] = n);
      },
      xn = function (t, e, n) {
        return t[e](n);
      },
      Sn = function (t, e, n, r) {
        return t[e](r.fp, n);
      },
      Tn = function (t, e, n) {
        return t.setAttribute(e, n);
      },
      En = function (t, e) {
        return J(t[e]) ? xn : tt(t[e]) && t.setAttribute ? Tn : wn;
      },
      An = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      Cn = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      On = function (t, e) {
        var n = e._pt,
          r = "";
        if (!t && e.b) r = e.b;
        else if (1 === t && e.e) r = e.e;
        else {
          for (; n; )
            (r =
              n.p +
              (n.m
                ? n.m(n.s + n.c * t)
                : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
              r),
              (n = n._next);
          r += e.c;
        }
        e.set(e.t, e.p, r, e);
      },
      kn = function (t, e) {
        for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
      },
      Mn = function (t, e, n, r) {
        for (var i, s = this._pt; s; )
          (i = s._next), s.p === r && s.modifier(t, e, n), (s = i);
      },
      Ln = function (t) {
        for (var e, n, r = this._pt; r; )
          (n = r._next),
            (r.p === t && !r.op) || r.op === t
              ? Qt(this, r, "_pt")
              : r.dep || (e = 1),
            (r = n);
        return !e;
      },
      Pn = function (t, e, n, r) {
        r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
      },
      Dn = function (t) {
        for (var e, n, r, i, s = t._pt; s; ) {
          for (e = s._next, n = r; n && n.pr > s.pr; ) n = n._next;
          (s._prev = n ? n._prev : i) ? (s._prev._next = s) : (r = s),
            (s._next = n) ? (n._prev = s) : (i = s),
            (s = e);
        }
        t._pt = r;
      },
      In = (function () {
        function t(t, e, n, r, i, s, a, o, l) {
          (this.t = e),
            (this.s = r),
            (this.c = i),
            (this.p = n),
            (this.r = s || An),
            (this.d = a || this),
            (this.set = o || wn),
            (this.pr = l || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, n) {
            (this.mSet = this.mSet || this.set),
              (this.set = Pn),
              (this.m = t),
              (this.mt = n),
              (this.tween = e);
          }),
          t
        );
      })();
    Rt(
      Lt +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (Tt[t] = 1);
      },
    ),
      (pt.TweenMax = pt.TweenLite = bn),
      (pt.TimelineLite = pt.TimelineMax = cn),
      (k = new cn({
        sortChildren: !1,
        defaults: Y,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (N.stringFilter = Ve);
    var Rn = [],
      zn = {},
      Bn = [],
      $n = 0,
      qn = 0,
      Fn = function (t) {
        return (zn[t] || Bn).map(function (t) {
          return t();
        });
      },
      Nn = function () {
        var t = Date.now(),
          e = [];
        t - $n > 2 &&
          (Fn("matchMediaInit"),
          Rn.forEach(function (t) {
            var n,
              r,
              i,
              s,
              a = t.queries,
              o = t.conditions;
            for (r in a)
              (n = M.matchMedia(a[r]).matches) && (i = 1),
                n !== o[r] && ((o[r] = n), (s = 1));
            s && (t.revert(), i && e.push(t));
          }),
          Fn("matchMediaRevert"),
          e.forEach(function (t) {
            return t.onMatch(t, function (e) {
              return t.add(null, e);
            });
          }),
          ($n = t),
          Fn("matchMedia"));
      },
      Yn = (function () {
        function t(t, e) {
          (this.selector = e && Te(e)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = qn++),
            t && this.add(t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, n) {
            J(t) && ((n = e), (e = t), (t = J));
            var r = this,
              i = function () {
                var t,
                  i = O,
                  s = r.selector;
                return (
                  i && i !== r && i.data.push(r),
                  n && (r.selector = Te(n)),
                  (O = r),
                  (t = e.apply(r, arguments)),
                  J(t) && r._r.push(t),
                  (O = i),
                  (r.selector = s),
                  (r.isReverted = !1),
                  t
                );
              };
            return (
              (r.last = i),
              t === J
                ? i(r, function (t) {
                    return r.add(null, t);
                  })
                : t
                  ? (r[t] = i)
                  : i
            );
          }),
          (e.ignore = function (t) {
            var e = O;
            (O = null), t(this), (O = e);
          }),
          (e.getTweens = function () {
            var e = [];
            return (
              this.data.forEach(function (n) {
                return n instanceof t
                  ? e.push.apply(e, n.getTweens())
                  : n instanceof bn &&
                      !(n.parent && "nested" === n.parent.data) &&
                      e.push(n);
              }),
              e
            );
          }),
          (e.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (e.kill = function (t, e) {
            var n = this;
            if (
              (t
                ? (function () {
                    for (var e, r = n.getTweens(), i = n.data.length; i--; )
                      "isFlip" === (e = n.data[i]).data &&
                        (e.revert(),
                        e.getChildren(!0, !0, !1).forEach(function (t) {
                          return r.splice(r.indexOf(t), 1);
                        }));
                    for (
                      r
                        .map(function (t) {
                          return {
                            g:
                              t._dur ||
                              t._delay ||
                              (t._sat && !t._sat.vars.immediateRender)
                                ? t.globalTime(0)
                                : -1 / 0,
                            t,
                          };
                        })
                        .sort(function (t, e) {
                          return e.g - t.g || -1 / 0;
                        })
                        .forEach(function (e) {
                          return e.t.revert(t);
                        }),
                        i = n.data.length;
                      i--;

                    )
                      (e = n.data[i]) instanceof cn
                        ? "nested" !== e.data &&
                          (e.scrollTrigger && e.scrollTrigger.revert(),
                          e.kill())
                        : !(e instanceof bn) && e.revert && e.revert(t);
                    n._r.forEach(function (e) {
                      return e(t, n);
                    }),
                      (n.isReverted = !0);
                  })()
                : this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  }),
              this.clear(),
              e)
            )
              for (var r = Rn.length; r--; )
                Rn[r].id === this.id && Rn.splice(r, 1);
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          t
        );
      })(),
      Wn = (function () {
        function t(t) {
          (this.contexts = []), (this.scope = t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, n) {
            et(t) || (t = { matches: t });
            var r,
              i,
              s,
              a = new Yn(0, n || this.scope),
              o = (a.conditions = {});
            for (i in (O && !a.selector && (a.selector = O.selector),
            this.contexts.push(a),
            (e = a.add("onMatch", e)),
            (a.queries = t),
            t))
              "all" === i
                ? (s = 1)
                : (r = M.matchMedia(t[i])) &&
                  (Rn.indexOf(a) < 0 && Rn.push(a),
                  (o[i] = r.matches) && (s = 1),
                  r.addListener
                    ? r.addListener(Nn)
                    : r.addEventListener("change", Nn));
            return (
              s &&
                e(a, function (t) {
                  return a.add(null, t);
                }),
              this
            );
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          (e.kill = function (t) {
            this.contexts.forEach(function (e) {
              return e.kill(t, !0);
            });
          }),
          t
        );
      })(),
      Hn = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          e.forEach(function (t) {
            return Be(t);
          });
        },
        timeline: function (t) {
          return new cn(t);
        },
        getTweensOf: function (t, e) {
          return k.getTweensOf(t, e);
        },
        getProperty: function (t, e, n, r) {
          Z(t) && (t = Se(t)[0]);
          var i = Dt(t || {}).get,
            s = n ? Wt : Yt;
          return (
            "native" === n && (n = ""),
            t
              ? e
                ? s(((Ct[e] && Ct[e].get) || i)(t, e, n, r))
                : function (e, n, r) {
                    return s(((Ct[e] && Ct[e].get) || i)(t, e, n, r));
                  }
              : t
          );
        },
        quickSetter: function (t, e, n) {
          if ((t = Se(t)).length > 1) {
            var r = t.map(function (t) {
                return Un.quickSetter(t, e, n);
              }),
              i = r.length;
            return function (t) {
              for (var e = i; e--; ) r[e](t);
            };
          }
          t = t[0] || {};
          var s = Ct[e],
            a = Dt(t),
            o = (a.harness && (a.harness.aliases || {})[e]) || e,
            l = s
              ? function (e) {
                  var r = new s();
                  (R._pt = 0),
                    r.init(t, n ? e + n : e, R, 0, [t]),
                    r.render(1, r),
                    R._pt && kn(1, R);
                }
              : a.set(t, o);
          return s
            ? l
            : function (e) {
                return l(t, o, n ? e + n : e, a, 1);
              };
        },
        quickTo: function (t, e, n) {
          var r,
            i = Un.to(
              t,
              Xt((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {}),
            ),
            s = function (t, n, r) {
              return i.resetTo(e, t, n, r);
            };
          return (s.tween = i), s;
        },
        isTweening: function (t) {
          return k.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = en(t.ease, Y.ease)), Vt(Y, t || {});
        },
        config: function (t) {
          return Vt(N, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            n = t.effect,
            r = t.plugins,
            i = t.defaults,
            s = t.extendTimeline;
          (r || "").split(",").forEach(function (t) {
            return (
              t &&
              !Ct[t] &&
              !pt[t] &&
              vt(e + " effect requires " + t + " plugin.")
            );
          }),
            (Ot[e] = function (t, e, r) {
              return n(Se(t), Ht(e || {}, i), r);
            }),
            s &&
              (cn.prototype[e] = function (t, n, r) {
                return this.add(Ot[e](t, et(n) ? n : (r = n) && {}, this), r);
              });
        },
        registerEase: function (t, e) {
          Ge[t] = en(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? en(t, e) : Ge;
        },
        getById: function (t) {
          return k.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var n,
            r,
            i = new cn(t);
          for (
            i.smoothChildTiming = nt(t.smoothChildTiming),
              k.remove(i),
              i._dp = 0,
              i._time = i._tTime = k._time,
              n = k._first;
            n;

          )
            (r = n._next),
              (!e &&
                !n._dur &&
                n instanceof bn &&
                n.vars.onComplete === n._targets[0]) ||
                oe(i, n, n._start - n._delay),
              (n = r);
          return oe(k, i, 0), i;
        },
        context: function (t, e) {
          return t ? new Yn(t, e) : O;
        },
        matchMedia: function (t) {
          return new Wn(t);
        },
        matchMediaRefresh: function () {
          return (
            Rn.forEach(function (t) {
              var e,
                n,
                r = t.conditions;
              for (n in r) r[n] && ((r[n] = !1), (e = 1));
              e && t.revert();
            }) || Nn()
          );
        },
        addEventListener: function (t, e) {
          var n = zn[t] || (zn[t] = []);
          ~n.indexOf(e) || n.push(e);
        },
        removeEventListener: function (t, e) {
          var n = zn[t],
            r = n && n.indexOf(e);
          r >= 0 && n.splice(r, 1);
        },
        utils: {
          wrap: function t(e, n, r) {
            var i = n - e;
            return at(e)
              ? Me(e, t(0, e.length), n)
              : _e(r, function (t) {
                  return ((i + ((t - e) % i)) % i) + e;
                });
          },
          wrapYoyo: function t(e, n, r) {
            var i = n - e,
              s = 2 * i;
            return at(e)
              ? Me(e, t(0, e.length - 1), n)
              : _e(r, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t)
                  );
                });
          },
          distribute: Ae,
          random: ke,
          snap: Oe,
          normalize: function (t, e, n) {
            return Pe(t, e, 0, 1, n);
          },
          getUnit: ye,
          clamp: function (t, e, n) {
            return _e(n, function (n) {
              return ve(t, e, n);
            });
          },
          splitColor: Ne,
          toArray: Se,
          selector: Te,
          mapRange: Pe,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (n) {
              return t(parseFloat(n)) + (e || ye(n));
            };
          },
          interpolate: function t(e, n, r, i) {
            var s = isNaN(e + n)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * n;
                };
            if (!s) {
              var a,
                o,
                l,
                c,
                u,
                h = Z(e),
                d = {};
              if ((!0 === r && (i = 1) && (r = null), h))
                (e = { p: e }), (n = { p: n });
              else if (at(e) && !at(n)) {
                for (l = [], c = e.length, u = c - 2, o = 1; o < c; o++)
                  l.push(t(e[o - 1], e[o]));
                c--,
                  (s = function (t) {
                    t *= c;
                    var e = Math.min(u, ~~t);
                    return l[e](t - e);
                  }),
                  (r = n);
              } else i || (e = Xt(at(e) ? [] : {}, e));
              if (!l) {
                for (a in n) fn.call(d, e, a, "get", n[a]);
                s = function (t) {
                  return kn(t, d) || (h ? e.p : e);
                };
              }
            }
            return _e(r, s);
          },
          shuffle: Ee,
        },
        install: mt,
        effects: Ot,
        ticker: Ue,
        updateRoot: cn.updateRoot,
        plugins: Ct,
        globalTimeline: k,
        core: {
          PropTween: In,
          globals: yt,
          Tween: bn,
          Timeline: cn,
          Animation: ln,
          getCache: Dt,
          _removeLinkedListItem: Qt,
          reverting: function () {
            return C;
          },
          context: function (t) {
            return t && O && (O.data.push(t), (t._ctx = O)), O;
          },
          suppressOverwrites: function (t) {
            return (A = t);
          },
        },
      };
    Rt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (Hn[t] = bn[t]);
    }),
      Ue.add(cn.updateRoot),
      (R = Hn.to({}, { duration: 0 }));
    var Xn = function (t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
          n = n._next;
        return n;
      },
      Vn = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, n, r) {
            r._onInit = function (t) {
              var r, i;
              if (
                (Z(n) &&
                  ((r = {}),
                  Rt(n, function (t) {
                    return (r[t] = 1);
                  }),
                  (n = r)),
                e)
              ) {
                for (i in ((r = {}), n)) r[i] = e(n[i]);
                n = r;
              }
              !(function (t, e) {
                var n,
                  r,
                  i,
                  s = t._targets;
                for (n in e)
                  for (r = s.length; r--; )
                    (i = t._ptLookup[r][n]) &&
                      (i = i.d) &&
                      (i._pt && (i = Xn(i, n)),
                      i && i.modifier && i.modifier(e[n], t, s[r], n));
              })(t, n);
            };
          },
        };
      },
      Un =
        Hn.registerPlugin(
          {
            name: "attr",
            init: function (t, e, n, r, i) {
              var s, a, o;
              for (s in ((this.tween = n), e))
                (o = t.getAttribute(s) || ""),
                  ((a = this.add(
                    t,
                    "setAttribute",
                    (o || 0) + "",
                    e[s],
                    r,
                    i,
                    0,
                    0,
                    s,
                  )).op = s),
                  (a.b = o),
                  this._props.push(s);
            },
            render: function (t, e) {
              for (var n = e._pt; n; )
                C ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var n = e.length; n--; )
                this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
            },
          },
          Vn("roundProps", Ce),
          Vn("modifiers"),
          Vn("snap", Oe),
        ) || Hn;
    (bn.version = cn.version = Un.version = "3.12.4"), (D = 1), rt() && je();
    Ge.Power0,
      Ge.Power1,
      Ge.Power2,
      Ge.Power3,
      Ge.Power4,
      Ge.Linear,
      Ge.Quad,
      Ge.Cubic,
      Ge.Quart,
      Ge.Quint,
      Ge.Strong,
      Ge.Elastic,
      Ge.Back,
      Ge.SteppedEase,
      Ge.Bounce,
      Ge.Sine,
      Ge.Expo,
      Ge.Circ;
    var jn,
      Gn,
      Qn,
      Zn,
      Jn,
      Kn,
      tr,
      er,
      nr = {},
      rr = 180 / Math.PI,
      ir = Math.PI / 180,
      sr = Math.atan2,
      ar = /([A-Z])/g,
      or = /(left|right|width|margin|padding|x)/i,
      lr = /[\s,\(]\S/,
      cr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      ur = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      hr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      dr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e,
        );
      },
      fr = function (t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      pr = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      gr = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      mr = function (t, e, n) {
        return (t.style[e] = n);
      },
      _r = function (t, e, n) {
        return t.style.setProperty(e, n);
      },
      vr = function (t, e, n) {
        return (t._gsap[e] = n);
      },
      yr = function (t, e, n) {
        return (t._gsap.scaleX = t._gsap.scaleY = n);
      },
      br = function (t, e, n, r, i) {
        var s = t._gsap;
        (s.scaleX = s.scaleY = n), s.renderTransform(i, s);
      },
      wr = function (t, e, n, r, i) {
        var s = t._gsap;
        (s[e] = n), s.renderTransform(i, s);
      },
      xr = "transform",
      Sr = xr + "Origin",
      Tr = function t(e, n) {
        var r = this,
          i = this.target,
          s = i.style,
          a = i._gsap;
        if (e in nr && s) {
          if (((this.tfm = this.tfm || {}), "transform" === e))
            return cr.transform.split(",").forEach(function (e) {
              return t.call(r, e, n);
            });
          if (
            (~(e = cr[e] || e).indexOf(",")
              ? e.split(",").forEach(function (t) {
                  return (r.tfm[t] = Yr(i, t));
                })
              : (this.tfm[e] = a.x ? a[e] : Yr(i, e)),
            e === Sr && (this.tfm.zOrigin = a.zOrigin),
            this.props.indexOf(xr) >= 0)
          )
            return;
          a.svg &&
            ((this.svgo = i.getAttribute("data-svg-origin")),
            this.props.push(Sr, n, "")),
            (e = xr);
        }
        (s || n) && this.props.push(e, n, s[e]);
      },
      Er = function (t) {
        t.translate &&
          (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"));
      },
      Ar = function () {
        var t,
          e,
          n = this.props,
          r = this.target,
          i = r.style,
          s = r._gsap;
        for (t = 0; t < n.length; t += 3)
          n[t + 1]
            ? (r[n[t]] = n[t + 2])
            : n[t + 2]
              ? (i[n[t]] = n[t + 2])
              : i.removeProperty(
                  "--" === n[t].substr(0, 2)
                    ? n[t]
                    : n[t].replace(ar, "-$1").toLowerCase(),
                );
        if (this.tfm) {
          for (e in this.tfm) s[e] = this.tfm[e];
          s.svg &&
            (s.renderTransform(),
            r.setAttribute("data-svg-origin", this.svgo || "")),
            ((t = tr()) && t.isStart) ||
              i[xr] ||
              (Er(i),
              s.zOrigin &&
                i[Sr] &&
                ((i[Sr] += " " + s.zOrigin + "px"),
                (s.zOrigin = 0),
                s.renderTransform()),
              (s.uncache = 1));
        }
      },
      Cr = function (t, e) {
        var n = { target: t, props: [], revert: Ar, save: Tr };
        return (
          t._gsap || Un.core.getCache(t),
          e &&
            e.split(",").forEach(function (t) {
              return n.save(t);
            }),
          n
        );
      },
      Or = function (t, e) {
        var n = Gn.createElementNS
          ? Gn.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t,
            )
          : Gn.createElement(t);
        return n && n.style ? n : Gn.createElement(t);
      },
      kr = function t(e, n, r) {
        var i = getComputedStyle(e);
        return (
          i[n] ||
          i.getPropertyValue(n.replace(ar, "-$1").toLowerCase()) ||
          i.getPropertyValue(n) ||
          (!r && t(e, Lr(n) || n, 1)) ||
          ""
        );
      },
      Mr = "O,Moz,ms,Ms,Webkit".split(","),
      Lr = function (t, e, n) {
        var r = (e || Jn).style,
          i = 5;
        if (t in r && !n) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(Mr[i] + t in r);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Mr[i] : "") + t;
      },
      Pr = function () {
        "undefined" != typeof window &&
          window.document &&
          ((jn = window),
          (Gn = jn.document),
          (Qn = Gn.documentElement),
          (Jn = Or("div") || { style: {} }),
          Or("div"),
          (xr = Lr(xr)),
          (Sr = xr + "Origin"),
          (Jn.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (er = !!Lr("perspective")),
          (tr = Un.core.reverting),
          (Zn = 1));
      },
      Dr = function t(e) {
        var n,
          r = Or(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg",
          ),
          i = this.parentNode,
          s = this.nextSibling,
          a = this.style.cssText;
        if (
          (Qn.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (n = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
          Qn.removeChild(r),
          (this.style.cssText = a),
          n
        );
      },
      Ir = function (t, e) {
        for (var n = e.length; n--; )
          if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
      },
      Rr = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (n) {
          e = Dr.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === Dr ||
            (e = Dr.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +Ir(t, ["x", "cx", "x1"]) || 0,
                y: +Ir(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      zr = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Rr(t));
      },
      Br = function (t, e) {
        if (e) {
          var n,
            r = t.style;
          e in nr && e !== Sr && (e = xr),
            r.removeProperty
              ? (("ms" !== (n = e.substr(0, 2)) &&
                  "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                r.removeProperty(
                  "--" === n ? e : e.replace(ar, "-$1").toLowerCase(),
                ))
              : r.removeAttribute(e);
        }
      },
      $r = function (t, e, n, r, i, s) {
        var a = new In(t._pt, e, n, 0, 1, s ? gr : pr);
        return (t._pt = a), (a.b = r), (a.e = i), t._props.push(n), a;
      },
      qr = { deg: 1, rad: 1, turn: 1 },
      Fr = { grid: 1, flex: 1 },
      Nr = function t(e, n, r, i) {
        var s,
          a,
          o,
          l,
          c = parseFloat(r) || 0,
          u = (r + "").trim().substr((c + "").length) || "px",
          h = Jn.style,
          d = or.test(n),
          f = "svg" === e.tagName.toLowerCase(),
          p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
          g = 100,
          m = "px" === i,
          _ = "%" === i;
        if (i === u || !c || qr[i] || qr[u]) return c;
        if (
          ("px" !== u && !m && (c = t(e, n, r, "px")),
          (l = e.getCTM && zr(e)),
          (_ || "%" === u) && (nr[n] || ~n.indexOf("adius")))
        )
          return (
            (s = l ? e.getBBox()[d ? "width" : "height"] : e[p]),
            zt(_ ? (c / s) * g : (c / 100) * s)
          );
        if (
          ((h[d ? "width" : "height"] = g + (m ? u : i)),
          (a =
            ~n.indexOf("adius") || ("em" === i && e.appendChild && !f)
              ? e
              : e.parentNode),
          l && (a = (e.ownerSVGElement || {}).parentNode),
          (a && a !== Gn && a.appendChild) || (a = Gn.body),
          (o = a._gsap) &&
            _ &&
            o.width &&
            d &&
            o.time === Ue.time &&
            !o.uncache)
        )
          return zt((c / o.width) * g);
        if (!_ || ("height" !== n && "width" !== n))
          (_ || "%" === u) &&
            !Fr[kr(a, "display")] &&
            (h.position = kr(e, "position")),
            a === e && (h.position = "static"),
            a.appendChild(Jn),
            (s = Jn[p]),
            a.removeChild(Jn),
            (h.position = "absolute");
        else {
          var v = e.style[n];
          (e.style[n] = g + i), (s = e[p]), v ? (e.style[n] = v) : Br(e, n);
        }
        return (
          d && _ && (((o = Dt(a)).time = Ue.time), (o.width = a[p])),
          zt(m ? (s * c) / g : s && c ? (g / s) * c : 0)
        );
      },
      Yr = function (t, e, n, r) {
        var i;
        return (
          Zn || Pr(),
          e in cr &&
            "transform" !== e &&
            ~(e = cr[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          nr[e] && "transform" !== e
            ? ((i = Kr(t, r)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : i.svg
                    ? i.origin
                    : ti(kr(t, Sr)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) ||
                "auto" === i ||
                r ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (Vr[e] && Vr[e](t, e, n)) ||
                kr(t, e) ||
                It(t, e) ||
                ("opacity" === e ? 1 : 0)),
          n && !~(i + "").trim().indexOf(" ") ? Nr(t, e, i, n) + n : i
        );
      },
      Wr = function (t, e, n, r) {
        if (!n || "none" === n) {
          var i = Lr(e, t, 1),
            s = i && kr(t, i, 1);
          s && s !== n
            ? ((e = i), (n = s))
            : "borderColor" === e && (n = kr(t, "borderTopColor"));
        }
        var a,
          o,
          l,
          c,
          u,
          h,
          d,
          f,
          p,
          g,
          m,
          _ = new In(this._pt, t.style, e, 0, 1, On),
          v = 0,
          y = 0;
        if (
          ((_.b = n),
          (_.e = r),
          (n += ""),
          "auto" === (r += "") &&
            ((h = t.style[e]),
            (t.style[e] = r),
            (r = kr(t, e) || r),
            h ? (t.style[e] = h) : Br(t, e)),
          Ve((a = [n, r])),
          (r = a[1]),
          (l = (n = a[0]).match(ct) || []),
          (r.match(ct) || []).length)
        ) {
          for (; (o = ct.exec(r)); )
            (d = o[0]),
              (p = r.substring(v, o.index)),
              u
                ? (u = (u + 1) % 5)
                : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                  (u = 1),
              d !== (h = l[y++] || "") &&
                ((c = parseFloat(h) || 0),
                (m = h.substr((c + "").length)),
                "=" === d.charAt(1) && (d = $t(c, d) + m),
                (f = parseFloat(d)),
                (g = d.substr((f + "").length)),
                (v = ct.lastIndex - g.length),
                g ||
                  ((g = g || N.units[e] || m),
                  v === r.length && ((r += g), (_.e += g))),
                m !== g && (c = Nr(t, e, h, g) || 0),
                (_._pt = {
                  _next: _._pt,
                  p: p || 1 === y ? p : ",",
                  s: c,
                  c: f - c,
                  m: (u && u < 4) || "zIndex" === e ? Math.round : 0,
                }));
          _.c = v < r.length ? r.substring(v, r.length) : "";
        } else _.r = "display" === e && "none" === r ? gr : pr;
        return ht.test(r) && (_.e = 0), (this._pt = _), _;
      },
      Hr = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      Xr = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var n,
            r,
            i,
            s = e.t,
            a = s.style,
            o = e.u,
            l = s._gsap;
          if ("all" === o || !0 === o) (a.cssText = ""), (r = 1);
          else
            for (i = (o = o.split(",")).length; --i > -1; )
              (n = o[i]),
                nr[n] && ((r = 1), (n = "transformOrigin" === n ? Sr : xr)),
                Br(s, n);
          r &&
            (Br(s, xr),
            l &&
              (l.svg && s.removeAttribute("transform"),
              Kr(s, 1),
              (l.uncache = 1),
              Er(a)));
        }
      },
      Vr = {
        clearProps: function (t, e, n, r, i) {
          if ("isFromStart" !== i.data) {
            var s = (t._pt = new In(t._pt, e, n, 0, 0, Xr));
            return (s.u = r), (s.pr = -10), (s.tween = i), t._props.push(n), 1;
          }
        },
      },
      Ur = [1, 0, 0, 1, 0, 0],
      jr = {},
      Gr = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      Qr = function (t) {
        var e = kr(t, xr);
        return Gr(e) ? Ur : e.substr(7).match(lt).map(zt);
      },
      Zr = function (t, e) {
        var n,
          r,
          i,
          s,
          a = t._gsap || Dt(t),
          o = t.style,
          l = Qr(t);
        return a.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? Ur
            : l
          : (l !== Ur ||
              t.offsetParent ||
              t === Qn ||
              a.svg ||
              ((i = o.display),
              (o.display = "block"),
              ((n = t.parentNode) && t.offsetParent) ||
                ((s = 1), (r = t.nextElementSibling), Qn.appendChild(t)),
              (l = Qr(t)),
              i ? (o.display = i) : Br(t, "display"),
              s &&
                (r
                  ? n.insertBefore(t, r)
                  : n
                    ? n.appendChild(t)
                    : Qn.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      Jr = function (t, e, n, r, i, s) {
        var a,
          o,
          l,
          c = t._gsap,
          u = i || Zr(t, !0),
          h = c.xOrigin || 0,
          d = c.yOrigin || 0,
          f = c.xOffset || 0,
          p = c.yOffset || 0,
          g = u[0],
          m = u[1],
          _ = u[2],
          v = u[3],
          y = u[4],
          b = u[5],
          w = e.split(" "),
          x = parseFloat(w[0]) || 0,
          S = parseFloat(w[1]) || 0;
        n
          ? u !== Ur &&
            (o = g * v - m * _) &&
            ((l = x * (-m / o) + S * (g / o) - (g * b - m * y) / o),
            (x = x * (v / o) + S * (-_ / o) + (_ * b - v * y) / o),
            (S = l))
          : ((x =
              (a = Rr(t)).x + (~w[0].indexOf("%") ? (x / 100) * a.width : x)),
            (S =
              a.y + (~(w[1] || w[0]).indexOf("%") ? (S / 100) * a.height : S))),
          r || (!1 !== r && c.smooth)
            ? ((y = x - h),
              (b = S - d),
              (c.xOffset = f + (y * g + b * _) - y),
              (c.yOffset = p + (y * m + b * v) - b))
            : (c.xOffset = c.yOffset = 0),
          (c.xOrigin = x),
          (c.yOrigin = S),
          (c.smooth = !!r),
          (c.origin = e),
          (c.originIsAbsolute = !!n),
          (t.style[Sr] = "0px 0px"),
          s &&
            ($r(s, c, "xOrigin", h, x),
            $r(s, c, "yOrigin", d, S),
            $r(s, c, "xOffset", f, c.xOffset),
            $r(s, c, "yOffset", p, c.yOffset)),
          t.setAttribute("data-svg-origin", x + " " + S);
      },
      Kr = function (t, e) {
        var n = t._gsap || new on(t);
        if ("x" in n && !e && !n.uncache) return n;
        var r,
          i,
          s,
          a,
          o,
          l,
          c,
          u,
          h,
          d,
          f,
          p,
          g,
          m,
          _,
          v,
          y,
          b,
          w,
          x,
          S,
          T,
          E,
          A,
          C,
          O,
          k,
          M,
          L,
          P,
          D,
          I,
          R = t.style,
          z = n.scaleX < 0,
          B = "px",
          $ = "deg",
          q = getComputedStyle(t),
          F = kr(t, Sr) || "0";
        return (
          (r = i = s = l = c = u = h = d = f = 0),
          (a = o = 1),
          (n.svg = !(!t.getCTM || !zr(t))),
          q.translate &&
            (("none" === q.translate &&
              "none" === q.scale &&
              "none" === q.rotate) ||
              (R[xr] =
                ("none" !== q.translate
                  ? "translate3d(" +
                    (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") +
                ("none" !== q.scale
                  ? "scale(" + q.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== q[xr] ? q[xr] : "")),
            (R.scale = R.rotate = R.translate = "none")),
          (m = Zr(t, n.svg)),
          n.svg &&
            (n.uncache
              ? ((C = t.getBBox()),
                (F = n.xOrigin - C.x + "px " + (n.yOrigin - C.y) + "px"),
                (A = ""))
              : (A = !e && t.getAttribute("data-svg-origin")),
            Jr(t, A || F, !!A || n.originIsAbsolute, !1 !== n.smooth, m)),
          (p = n.xOrigin || 0),
          (g = n.yOrigin || 0),
          m !== Ur &&
            ((b = m[0]),
            (w = m[1]),
            (x = m[2]),
            (S = m[3]),
            (r = T = m[4]),
            (i = E = m[5]),
            6 === m.length
              ? ((a = Math.sqrt(b * b + w * w)),
                (o = Math.sqrt(S * S + x * x)),
                (l = b || w ? sr(w, b) * rr : 0),
                (h = x || S ? sr(x, S) * rr + l : 0) &&
                  (o *= Math.abs(Math.cos(h * ir))),
                n.svg &&
                  ((r -= p - (p * b + g * x)), (i -= g - (p * w + g * S))))
              : ((I = m[6]),
                (P = m[7]),
                (k = m[8]),
                (M = m[9]),
                (L = m[10]),
                (D = m[11]),
                (r = m[12]),
                (i = m[13]),
                (s = m[14]),
                (c = (_ = sr(I, L)) * rr),
                _ &&
                  ((A = T * (v = Math.cos(-_)) + k * (y = Math.sin(-_))),
                  (C = E * v + M * y),
                  (O = I * v + L * y),
                  (k = T * -y + k * v),
                  (M = E * -y + M * v),
                  (L = I * -y + L * v),
                  (D = P * -y + D * v),
                  (T = A),
                  (E = C),
                  (I = O)),
                (u = (_ = sr(-x, L)) * rr),
                _ &&
                  ((v = Math.cos(-_)),
                  (D = S * (y = Math.sin(-_)) + D * v),
                  (b = A = b * v - k * y),
                  (w = C = w * v - M * y),
                  (x = O = x * v - L * y)),
                (l = (_ = sr(w, b)) * rr),
                _ &&
                  ((A = b * (v = Math.cos(_)) + w * (y = Math.sin(_))),
                  (C = T * v + E * y),
                  (w = w * v - b * y),
                  (E = E * v - T * y),
                  (b = A),
                  (T = C)),
                c &&
                  Math.abs(c) + Math.abs(l) > 359.9 &&
                  ((c = l = 0), (u = 180 - u)),
                (a = zt(Math.sqrt(b * b + w * w + x * x))),
                (o = zt(Math.sqrt(E * E + I * I))),
                (_ = sr(T, E)),
                (h = Math.abs(_) > 2e-4 ? _ * rr : 0),
                (f = D ? 1 / (D < 0 ? -D : D) : 0)),
            n.svg &&
              ((A = t.getAttribute("transform")),
              (n.forceCSS = t.setAttribute("transform", "") || !Gr(kr(t, xr))),
              A && t.setAttribute("transform", A))),
          Math.abs(h) > 90 &&
            Math.abs(h) < 270 &&
            (z
              ? ((a *= -1),
                (h += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((o *= -1), (h += h <= 0 ? 180 : -180))),
          (e = e || n.uncache),
          (n.x =
            r -
            ((n.xPercent =
              r &&
              ((!e && n.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
              ? (t.offsetWidth * n.xPercent) / 100
              : 0) +
            B),
          (n.y =
            i -
            ((n.yPercent =
              i &&
              ((!e && n.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (t.offsetHeight * n.yPercent) / 100
              : 0) +
            B),
          (n.z = s + B),
          (n.scaleX = zt(a)),
          (n.scaleY = zt(o)),
          (n.rotation = zt(l) + $),
          (n.rotationX = zt(c) + $),
          (n.rotationY = zt(u) + $),
          (n.skewX = h + $),
          (n.skewY = d + $),
          (n.transformPerspective = f + B),
          (n.zOrigin = parseFloat(F.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
            (R[Sr] = ti(F)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = N.force3D),
          (n.renderTransform = n.svg ? oi : er ? ai : ni),
          (n.uncache = 0),
          n
        );
      },
      ti = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      ei = function (t, e, n) {
        var r = ye(e);
        return zt(parseFloat(e) + parseFloat(Nr(t, "x", n + "px", r))) + r;
      },
      ni = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          ai(t, e);
      },
      ri = "0deg",
      ii = "0px",
      si = ") ",
      ai = function (t, e) {
        var n = e || this,
          r = n.xPercent,
          i = n.yPercent,
          s = n.x,
          a = n.y,
          o = n.z,
          l = n.rotation,
          c = n.rotationY,
          u = n.rotationX,
          h = n.skewX,
          d = n.skewY,
          f = n.scaleX,
          p = n.scaleY,
          g = n.transformPerspective,
          m = n.force3D,
          _ = n.target,
          v = n.zOrigin,
          y = "",
          b = ("auto" === m && t && 1 !== t) || !0 === m;
        if (v && (u !== ri || c !== ri)) {
          var w,
            x = parseFloat(c) * ir,
            S = Math.sin(x),
            T = Math.cos(x);
          (x = parseFloat(u) * ir),
            (w = Math.cos(x)),
            (s = ei(_, s, S * w * -v)),
            (a = ei(_, a, -Math.sin(x) * -v)),
            (o = ei(_, o, T * w * -v + v));
        }
        g !== ii && (y += "perspective(" + g + si),
          (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
          (b || s !== ii || a !== ii || o !== ii) &&
            (y +=
              o !== ii || b
                ? "translate3d(" + s + ", " + a + ", " + o + ") "
                : "translate(" + s + ", " + a + si),
          l !== ri && (y += "rotate(" + l + si),
          c !== ri && (y += "rotateY(" + c + si),
          u !== ri && (y += "rotateX(" + u + si),
          (h === ri && d === ri) || (y += "skew(" + h + ", " + d + si),
          (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + si),
          (_.style[xr] = y || "translate(0, 0)");
      },
      oi = function (t, e) {
        var n,
          r,
          i,
          s,
          a,
          o = e || this,
          l = o.xPercent,
          c = o.yPercent,
          u = o.x,
          h = o.y,
          d = o.rotation,
          f = o.skewX,
          p = o.skewY,
          g = o.scaleX,
          m = o.scaleY,
          _ = o.target,
          v = o.xOrigin,
          y = o.yOrigin,
          b = o.xOffset,
          w = o.yOffset,
          x = o.forceCSS,
          S = parseFloat(u),
          T = parseFloat(h);
        (d = parseFloat(d)),
          (f = parseFloat(f)),
          (p = parseFloat(p)) && ((f += p = parseFloat(p)), (d += p)),
          d || f
            ? ((d *= ir),
              (f *= ir),
              (n = Math.cos(d) * g),
              (r = Math.sin(d) * g),
              (i = Math.sin(d - f) * -m),
              (s = Math.cos(d - f) * m),
              f &&
                ((p *= ir),
                (a = Math.tan(f - p)),
                (i *= a = Math.sqrt(1 + a * a)),
                (s *= a),
                p &&
                  ((a = Math.tan(p)),
                  (n *= a = Math.sqrt(1 + a * a)),
                  (r *= a))),
              (n = zt(n)),
              (r = zt(r)),
              (i = zt(i)),
              (s = zt(s)))
            : ((n = g), (s = m), (r = i = 0)),
          ((S && !~(u + "").indexOf("px")) ||
            (T && !~(h + "").indexOf("px"))) &&
            ((S = Nr(_, "x", u, "px")), (T = Nr(_, "y", h, "px"))),
          (v || y || b || w) &&
            ((S = zt(S + v - (v * n + y * i) + b)),
            (T = zt(T + y - (v * r + y * s) + w))),
          (l || c) &&
            ((a = _.getBBox()),
            (S = zt(S + (l / 100) * a.width)),
            (T = zt(T + (c / 100) * a.height))),
          (a =
            "matrix(" +
            n +
            "," +
            r +
            "," +
            i +
            "," +
            s +
            "," +
            S +
            "," +
            T +
            ")"),
          _.setAttribute("transform", a),
          x && (_.style[xr] = a);
      },
      li = function (t, e, n, r, i) {
        var s,
          a,
          o = 360,
          l = Z(i),
          c = parseFloat(i) * (l && ~i.indexOf("rad") ? rr : 1) - r,
          u = r + c + "deg";
        return (
          l &&
            ("short" === (s = i.split("_")[1]) &&
              (c %= o) !== c % 180 &&
              (c += c < 0 ? o : -360),
            "cw" === s && c < 0
              ? (c = ((c + 36e9) % o) - ~~(c / o) * o)
              : "ccw" === s && c > 0 && (c = ((c - 36e9) % o) - ~~(c / o) * o)),
          (t._pt = a = new In(t._pt, e, n, r, c, hr)),
          (a.e = u),
          (a.u = "deg"),
          t._props.push(n),
          a
        );
      },
      ci = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      },
      ui = function (t, e, n) {
        var r,
          i,
          s,
          a,
          o,
          l,
          c,
          u = ci({}, n._gsap),
          h = n.style;
        for (i in (u.svg
          ? ((s = n.getAttribute("transform")),
            n.setAttribute("transform", ""),
            (h[xr] = e),
            (r = Kr(n, 1)),
            Br(n, xr),
            n.setAttribute("transform", s))
          : ((s = getComputedStyle(n)[xr]),
            (h[xr] = e),
            (r = Kr(n, 1)),
            (h[xr] = s)),
        nr))
          (s = u[i]) !== (a = r[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((o = ye(s) !== (c = ye(a)) ? Nr(n, i, s, c) : parseFloat(s)),
            (l = parseFloat(a)),
            (t._pt = new In(t._pt, r, i, o, l - o, ur)),
            (t._pt.u = c || 0),
            t._props.push(i));
        ci(r, u);
      };
    Rt("padding,margin,Width,Radius", function (t, e) {
      var n = "Top",
        r = "Right",
        i = "Bottom",
        s = "Left",
        a = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(
          function (n) {
            return e < 2 ? t + n : "border" + n + t;
          },
        );
      Vr[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
        var s, o;
        if (arguments.length < 4)
          return (
            (s = a.map(function (e) {
              return Yr(t, e, n);
            })),
            5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
          );
        (s = (r + "").split(" ")),
          (o = {}),
          a.forEach(function (t, e) {
            return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
          }),
          t.init(e, o, i);
      };
    });
    var hi,
      di,
      fi,
      pi = {
        name: "css",
        register: Pr,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, n, r, i) {
          var s,
            a,
            o,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            g,
            m,
            _,
            v,
            y,
            b,
            w,
            x,
            S,
            T,
            E = this._props,
            A = t.style,
            C = n.vars.startAt;
          for (h in (Zn || Pr(),
          (this.styles = this.styles || Cr(t)),
          (b = this.styles.props),
          (this.tween = n),
          e))
            if (
              "autoRound" !== h &&
              ((a = e[h]), !Ct[h] || !pn(h, e, n, r, t, i))
            )
              if (
                ((c = typeof a),
                (u = Vr[h]),
                "function" === c && (c = typeof (a = a.call(n, r, t, i))),
                "string" === c && ~a.indexOf("random(") && (a = Le(a)),
                u)
              )
                u(this, t, h, a, n) && (y = 1);
              else if ("--" === h.substr(0, 2))
                (s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                  (a += ""),
                  (He.lastIndex = 0),
                  He.test(s) || ((d = ye(s)), (f = ye(a))),
                  f ? d !== f && (s = Nr(t, h, s, f) + f) : d && (a += d),
                  this.add(A, "setProperty", s, a, r, i, 0, 0, h),
                  E.push(h),
                  b.push(h, 0, A[h]);
              else if ("undefined" !== c) {
                if (
                  (C && h in C
                    ? ((s =
                        "function" == typeof C[h]
                          ? C[h].call(n, r, t, i)
                          : C[h]),
                      Z(s) && ~s.indexOf("random(") && (s = Le(s)),
                      ye(s + "") ||
                        "auto" === s ||
                        (s += N.units[h] || ye(Yr(t, h)) || ""),
                      "=" === (s + "").charAt(1) && (s = Yr(t, h)))
                    : (s = Yr(t, h)),
                  (l = parseFloat(s)),
                  (p =
                    "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (o = parseFloat(a)),
                  h in cr &&
                    ("autoAlpha" === h &&
                      (1 === l &&
                        "hidden" === Yr(t, "visibility") &&
                        o &&
                        (l = 0),
                      b.push("visibility", 0, A.visibility),
                      $r(
                        this,
                        A,
                        "visibility",
                        l ? "inherit" : "hidden",
                        o ? "inherit" : "hidden",
                        !o,
                      )),
                    "scale" !== h &&
                      "transform" !== h &&
                      ~(h = cr[h]).indexOf(",") &&
                      (h = h.split(",")[0])),
                  (g = h in nr))
                )
                  if (
                    (this.styles.save(h),
                    m ||
                      (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                        Kr(t, e.parseTransform),
                      (v = !1 !== e.smoothOrigin && _.smooth),
                      ((m = this._pt =
                        new In(
                          this._pt,
                          A,
                          xr,
                          0,
                          1,
                          _.renderTransform,
                          _,
                          0,
                          -1,
                        )).dep = 1)),
                    "scale" === h)
                  )
                    (this._pt = new In(
                      this._pt,
                      _,
                      "scaleY",
                      _.scaleY,
                      (p ? $t(_.scaleY, p + o) : o) - _.scaleY || 0,
                      ur,
                    )),
                      (this._pt.u = 0),
                      E.push("scaleY", h),
                      (h += "X");
                  else {
                    if ("transformOrigin" === h) {
                      b.push(Sr, 0, A[Sr]),
                        (x = void 0),
                        (S = void 0),
                        (T = void 0),
                        (x = (w = a).split(" ")),
                        (S = x[0]),
                        (T = x[1] || "50%"),
                        ("top" !== S &&
                          "bottom" !== S &&
                          "left" !== T &&
                          "right" !== T) ||
                          ((w = S), (S = T), (T = w)),
                        (x[0] = Hr[S] || S),
                        (x[1] = Hr[T] || T),
                        (a = x.join(" ")),
                        _.svg
                          ? Jr(t, a, 0, v, 0, this)
                          : ((f = parseFloat(a.split(" ")[2]) || 0) !==
                              _.zOrigin && $r(this, _, "zOrigin", _.zOrigin, f),
                            $r(this, A, h, ti(s), ti(a)));
                      continue;
                    }
                    if ("svgOrigin" === h) {
                      Jr(t, a, 1, v, 0, this);
                      continue;
                    }
                    if (h in jr) {
                      li(this, _, h, l, p ? $t(l, p + a) : a);
                      continue;
                    }
                    if ("smoothOrigin" === h) {
                      $r(this, _, "smooth", _.smooth, a);
                      continue;
                    }
                    if ("force3D" === h) {
                      _[h] = a;
                      continue;
                    }
                    if ("transform" === h) {
                      ui(this, a, t);
                      continue;
                    }
                  }
                else h in A || (h = Lr(h) || h);
                if (
                  g ||
                  ((o || 0 === o) && (l || 0 === l) && !lr.test(a) && h in A)
                )
                  o || (o = 0),
                    (d = (s + "").substr((l + "").length)) !==
                      (f = ye(a) || (h in N.units ? N.units[h] : d)) &&
                      (l = Nr(t, h, s, f)),
                    (this._pt = new In(
                      this._pt,
                      g ? _ : A,
                      h,
                      l,
                      (p ? $t(l, p + o) : o) - l,
                      g || ("px" !== f && "zIndex" !== h) || !1 === e.autoRound
                        ? ur
                        : fr,
                    )),
                    (this._pt.u = f || 0),
                    d !== f &&
                      "%" !== f &&
                      ((this._pt.b = s), (this._pt.r = dr));
                else if (h in A) Wr.call(this, t, h, s, p ? p + a : a);
                else if (h in t) this.add(t, h, s || t[h], p ? p + a : a, r, i);
                else if ("parseTransform" !== h) {
                  _t(h, a);
                  continue;
                }
                g || (h in A ? b.push(h, 0, A[h]) : b.push(h, 1, s || t[h])),
                  E.push(h);
              }
          y && Dn(this);
        },
        render: function (t, e) {
          if (e.tween._time || !tr())
            for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
          else e.styles.revert();
        },
        get: Yr,
        aliases: cr,
        getSetter: function (t, e, n) {
          var r = cr[e];
          return (
            r && r.indexOf(",") < 0 && (e = r),
            e in nr && e !== Sr && (t._gsap.x || Yr(t, "x"))
              ? n && Kn === n
                ? "scale" === e
                  ? yr
                  : vr
                : (Kn = n || {}) && ("scale" === e ? br : wr)
              : t.style && !tt(t.style[e])
                ? mr
                : ~e.indexOf("-")
                  ? _r
                  : En(t, e)
          );
        },
        core: { _removeProperty: Br, _getMatrix: Zr },
      };
    (Un.utils.checkPrefix = Lr),
      (Un.core.getStyleSaver = Cr),
      (fi = Rt(
        (hi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
          "," +
          (di = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          nr[t] = 1;
        },
      )),
      Rt(di, function (t) {
        (N.units[t] = "deg"), (jr[t] = 1);
      }),
      (cr[fi[13]] = hi + "," + di),
      Rt(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          cr[e[1]] = fi[e[0]];
        },
      ),
      Rt(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          N.units[t] = "px";
        },
      ),
      Un.registerPlugin(pi);
    var gi = Un.registerPlugin(pi) || Un,
      mi = (gi.core.Tween, n(546));
    gi.registerPlugin(mi.ScrollTrigger);
    const _i = gi.fromTo(
      ".item-services",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        ease: "back.inOut(1.7)",
        duration: 0.8,
        stagger: 0.4,
      },
    );
    mi.ScrollTrigger.create({
      trigger: ".item-services",
      start: "top bottom",
      end: "bottom",
      animation: _i,
    }),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        const t = document.querySelectorAll("[data-spollers]");
        if (t.length > 0) {
          const e = Array.from(t).filter(function (t, e, n) {
            return !t.dataset.spollers.split(",")[0];
          });
          e.length && r(e);
          let n = f(t, "spollers");
          function r(t, e = !1) {
            t.forEach((t) => {
              (t = e ? t.item : t),
                e.matches || !e
                  ? (t.classList.add("_spoller-init"),
                    s(t),
                    t.addEventListener("click", o))
                  : (t.classList.remove("_spoller-init"),
                    s(t, !1),
                    t.removeEventListener("click", o));
            });
          }
          function s(t, e = !0) {
            const n = t.querySelectorAll("[data-spoller]");
            n.length > 0 &&
              n.forEach((t) => {
                e
                  ? (t.removeAttribute("tabindex"),
                    t.classList.contains("_spoller-active") ||
                      (t.nextElementSibling.hidden = !0))
                  : (t.setAttribute("tabindex", "-1"),
                    (t.nextElementSibling.hidden = !1));
              });
          }
          function o(t) {
            const e = t.target;
            if (e.closest("[data-spoller]")) {
              const n = e.closest("[data-spoller]"),
                r = n.closest("[data-spollers]"),
                i = !!r.hasAttribute("data-one-spoller");
              r.querySelectorAll("._slide").length ||
                (i && !n.classList.contains("_spoller-active") && l(r),
                n.classList.toggle("_spoller-active"),
                a(n.nextElementSibling, 500)),
                t.preventDefault();
            }
          }
          function l(t) {
            const e = t.querySelector("[data-spoller]._spoller-active");
            e &&
              (e.classList.remove("_spoller-active"),
              i(e.nextElementSibling, 500));
          }
          n &&
            n.length &&
            n.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                r(t.itemsArray, t.matchMedia);
              }),
                r(t.itemsArray, t.matchMedia);
            });
        }
      })(),
      (function () {
        const t = document.querySelectorAll("[data-tabs]");
        let e = [];
        if (t.length > 0) {
          const i = location.hash.replace("#", "");
          i.startsWith("tab-") && (e = i.replace("tab-", "").split("-")),
            t.forEach((t, n) => {
              t.classList.add("_tab-init"),
                t.setAttribute("data-tabs-index", n),
                t.addEventListener("click", r),
                (function (t) {
                  const n = t.querySelectorAll("[data-tabs-titles]>*"),
                    r = t.querySelectorAll("[data-tabs-body]>*"),
                    i = t.dataset.tabsIndex,
                    s = e[0] == i;
                  if (s) {
                    t.querySelector(
                      "[data-tabs-titles]>._tab-active",
                    ).classList.remove("_tab-active");
                  }
                  r.length > 0 &&
                    r.forEach((t, r) => {
                      n[r].setAttribute("data-tabs-title", ""),
                        t.setAttribute("data-tabs-item", ""),
                        s && r == e[1] && n[r].classList.add("_tab-active"),
                        (t.hidden = !n[r].classList.contains("_tab-active"));
                    });
                })(t);
            });
          let s = f(t, "tabs");
          s &&
            s.length &&
            s.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                n(t.itemsArray, t.matchMedia);
              }),
                n(t.itemsArray, t.matchMedia);
            });
        }
        function n(t, e) {
          t.forEach((t) => {
            const n = (t = t.item).querySelector("[data-tabs-titles]"),
              r = t.querySelectorAll("[data-tabs-title]"),
              i = t.querySelector("[data-tabs-body]");
            t.querySelectorAll("[data-tabs-item]").forEach((s, a) => {
              e.matches
                ? (i.append(r[a]), i.append(s), t.classList.add("_tab-spoller"))
                : (n.append(r[a]), t.classList.remove("_tab-spoller"));
            });
          });
        }
        function r(t) {
          const e = t.target;
          if (e.closest("[data-tabs-title]")) {
            const n = e.closest("[data-tabs-title]"),
              r = n.closest("[data-tabs]");
            if (
              !n.classList.contains("_tab-active") &&
              !r.querySelectorAll("._slide").length
            ) {
              const t = r.querySelector("[data-tabs-title]._tab-active");
              t && t.classList.remove("_tab-active"),
                n.classList.add("_tab-active"),
                (function (t) {
                  const e = t.querySelectorAll("[data-tabs-title]"),
                    n = t.querySelectorAll("[data-tabs-item]"),
                    r = t.dataset.tabsIndex,
                    a = (function (t) {
                      if (t.hasAttribute("data-tabs-animate"))
                        return t.dataset.tabsAnimate > 0
                          ? t.dataset.tabsAnimate
                          : 500;
                    })(t);
                  n.length > 0 &&
                    n.forEach((t, n) => {
                      e[n].classList.contains("_tab-active")
                        ? (a ? s(t, a) : (t.hidden = !1),
                          t.closest(".popup") ||
                            (location.hash = `tab-${r}-${n}`))
                        : a
                          ? i(t, a)
                          : (t.hidden = !0);
                    });
                })(r);
            }
            t.preventDefault();
          }
        }
      })(),
      new e({}),
      (function () {
        const t = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        t.length &&
          t.forEach((t) => {
            t.dataset.placeholder = t.placeholder;
          }),
          document.body.addEventListener("focusin", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = ""),
              e.classList.add("_form-focus"),
              e.parentElement.classList.add("_form-focus"),
              y.removeError(e));
          }),
          document.body.addEventListener("focusout", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && y.validateInput(e));
          });
      })(),
      (v.selectModule = new _({})),
      new b({}),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                r = n.dataset.goto ? n.dataset.goto : "",
                i = !!n.hasAttribute("data-goto-header"),
                s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              m(r, i, s), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              const t = n.id,
                r =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="#${t}"]`));
              e.isIntersecting
                ? r && r.classList.add("_navigator-active")
                : r && r.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })(),
      (w = !0),
      (function () {
        const t = document.querySelectorAll("[data-sticky]");
        t.length &&
          t.forEach((t) => {
            let e = {
              top: t.dataset.stickyTop ? parseInt(t.dataset.stickyTop) : 0,
              bottom: t.dataset.stickyBottom
                ? parseInt(t.dataset.stickyBottom)
                : 0,
              header: t.hasAttribute("data-sticky-header")
                ? document.querySelector("header.header").offsetHeight
                : 0,
            };
            !(function (t, e) {
              const n = t.querySelector("[data-sticky-item]"),
                r = e.header,
                i = r + e.top,
                s = n.getBoundingClientRect().top + scrollY - i;
              document.addEventListener("windowScroll", function (r) {
                const a =
                  t.offsetHeight +
                  t.getBoundingClientRect().top +
                  scrollY -
                  (i + n.offsetHeight + e.bottom);
                let o = {
                  position: "sticky",
                  bottom: "auto",
                  top: "0px",
                  left: "0px",
                  width: "auto",
                };
                i + e.bottom + n.offsetHeight < window.innerHeight &&
                  (scrollY >= s && scrollY <= a
                    ? ((o.position = "fixed"),
                      (o.bottom = "auto"),
                      (o.top = `${i}px`),
                      (o.left = `${n.getBoundingClientRect().left}px`),
                      (o.width = `${n.offsetWidth}px`))
                    : scrollY >= a &&
                      ((o.position = "absolute"),
                      (o.bottom = `${e.bottom}px`),
                      (o.top = "auto"),
                      (o.left = "0px"),
                      (o.width = `${n.offsetWidth}px`))),
                  (function (t, e) {
                    t.style.cssText = `position:${e.position};bottom:${e.bottom};top:${e.top};left:${e.left};width:${e.width};`;
                  })(n, o);
              });
            })(t, e);
          });
      })();
  })();
})();
