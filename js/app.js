(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var l in s)
                      Object.prototype.hasOwnProperty.call(s, l) &&
                        (e[l] = s[l]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            l = t && "IntersectionObserver" in window,
            a = t && "classList" in document.createElement("p"),
            n = t && window.devicePixelRatio > 1,
            i = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
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
            o = function (t) {
              return e({}, i, t);
            },
            c = function (e, t) {
              var s,
                l = "LazyLoad::Initialized",
                a = new e(t);
              try {
                s = new CustomEvent(l, { detail: { instance: a } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  l,
                  !1,
                  !1,
                  { instance: a },
                );
              }
              window.dispatchEvent(s);
            },
            r = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            m = "data",
            f = "loading",
            g = "loaded",
            b = "applied",
            v = "error",
            y = "native",
            S = "data-",
            _ = "ll-status",
            A = function (e, t) {
              return e.getAttribute(S + t);
            },
            E = function (e) {
              return A(e, _);
            },
            L = function (e, t) {
              return (function (e, t, s) {
                var l = "data-ll-status";
                null !== s ? e.setAttribute(l, s) : e.removeAttribute(l);
              })(e, 0, t);
            },
            C = function (e) {
              return L(e, null);
            },
            w = function (e) {
              return null === E(e);
            },
            O = function (e) {
              return E(e) === y;
            },
            $ = [f, g, b, v],
            x = function (e, t, s, l) {
              e &&
                "function" == typeof e &&
                (void 0 === l ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, l));
            },
            k = function (e, t) {
              a
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            I = function (e, t) {
              a
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            T = function (e) {
              return e.llTempImage;
            },
            q = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            P = function (e, t) {
              e && (e.loadingCount += t);
            },
            M = function (e, t) {
              e && (e.toLoadCount = t);
            },
            B = function (e) {
              for (var t, s = [], l = 0; (t = e.children[l]); l += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            W = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && B(s).forEach(t);
            },
            D = function (e, t) {
              B(e).forEach(t);
            },
            H = [r],
            R = [r, h],
            N = [r, d, u],
            j = [m],
            z = function (e) {
              return !!e[p];
            },
            V = function (e) {
              return e[p];
            },
            F = function (e) {
              return delete e[p];
            },
            U = function (e, t) {
              if (!z(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[p] = s);
              }
            },
            Z = function (e, t) {
              if (z(e)) {
                var s = V(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            G = function (e, t, s) {
              k(e, t.class_applied),
                L(e, b),
                s &&
                  (t.unobserve_completed && q(e, t),
                  x(t.callback_applied, e, s));
            },
            Q = function (e, t, s) {
              k(e, t.class_loading),
                L(e, f),
                s && (P(s, 1), x(t.callback_loading, e, s));
            },
            J = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            X = function (e, t) {
              J(e, u, A(e, t.data_sizes)),
                J(e, d, A(e, t.data_srcset)),
                J(e, r, A(e, t.data_src));
            },
            Y = {
              IMG: function (e, t) {
                W(e, function (e) {
                  U(e, N), X(e, t);
                }),
                  U(e, N),
                  X(e, t);
              },
              IFRAME: function (e, t) {
                U(e, H), J(e, r, A(e, t.data_src));
              },
              VIDEO: function (e, t) {
                D(e, function (e) {
                  U(e, H), J(e, r, A(e, t.data_src));
                }),
                  U(e, R),
                  J(e, h, A(e, t.data_poster)),
                  J(e, r, A(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                U(e, j), J(e, m, A(e, t.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                x(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            le = function (e) {
              return !!e.llEvLisnrs;
            },
            ae = function (e) {
              if (le(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var l = t[s];
                  se(e, s, l);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                P(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                I(e, t.class_loading),
                t.unobserve_completed && q(e, s);
            },
            ie = function (e, t, s) {
              var l = T(e) || e;
              le(l) ||
                (function (e, t, s) {
                  le(e) || (e.llEvLisnrs = {});
                  var l = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, l, t), te(e, "error", s);
                })(
                  l,
                  function (a) {
                    !(function (e, t, s, l) {
                      var a = O(t);
                      ne(t, s, l),
                        k(t, s.class_loaded),
                        L(t, g),
                        x(s.callback_loaded, t, l),
                        a || ee(s, l);
                    })(0, e, t, s),
                      ae(l);
                  },
                  function (a) {
                    !(function (e, t, s, l) {
                      var a = O(t);
                      ne(t, s, l),
                        k(t, s.class_error),
                        L(t, v),
                        x(s.callback_error, t, l),
                        s.restore_on_error && Z(t, N),
                        a || ee(s, l);
                    })(0, e, t, s),
                      ae(l);
                  },
                );
            },
            oe = function (e, t, s) {
              !(function (e) {
                return K.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ie(e, t, s),
                      (function (e) {
                        z(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var l = A(e, t.data_bg),
                          a = A(e, t.data_bg_hidpi),
                          i = n && a ? a : l;
                        i &&
                          ((e.style.backgroundImage = 'url("'.concat(i, '")')),
                          T(e).setAttribute(r, i),
                          Q(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var l = A(e, t.data_bg_multi),
                          a = A(e, t.data_bg_multi_hidpi),
                          i = n && a ? a : l;
                        i && ((e.style.backgroundImage = i), G(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var l = A(e, t.data_bg_set);
                        if (l) {
                          var a = l.split("|"),
                            n = a.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = n.join()),
                            "" === e.style.backgroundImage &&
                              ((n = a.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = n.join())),
                            G(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    ie(e, t, s),
                      (function (e, t, s) {
                        var l = Y[e.tagName];
                        l && (l(e, t), Q(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            ce = function (e) {
              e.removeAttribute(r), e.removeAttribute(d), e.removeAttribute(u);
            },
            re = function (e) {
              W(e, function (e) {
                Z(e, N);
              }),
                Z(e, N);
            },
            de = {
              IMG: re,
              IFRAME: function (e) {
                Z(e, H);
              },
              VIDEO: function (e) {
                D(e, function (e) {
                  Z(e, H);
                }),
                  Z(e, R),
                  e.load();
              },
              OBJECT: function (e) {
                Z(e, j);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (z(e)) {
                        var t = V(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  w(e) ||
                    O(e) ||
                    (I(e, t.class_entered),
                    I(e, t.class_exited),
                    I(e, t.class_applied),
                    I(e, t.class_loading),
                    I(e, t.class_loaded),
                    I(e, t.class_error));
                })(e, t),
                C(e),
                F(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            me = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, l) {
                      var a = (function (e) {
                        return $.indexOf(E(e)) >= 0;
                      })(e);
                      L(e, "entered"),
                        k(e, s.class_entered),
                        I(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && q(e, s);
                        })(e, s, l),
                        x(s.callback_enter, e, t, l),
                        a || oe(e, s, l);
                    })(e.target, e, t, s)
                  : (function (e, t, s, l) {
                      w(e) ||
                        (k(e, s.class_exited),
                        (function (e, t, s, l) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return E(e) === f;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ae(e),
                            (function (e) {
                              W(e, function (e) {
                                ce(e);
                              }),
                                ce(e);
                            })(e),
                            re(e),
                            I(e, s.class_loading),
                            P(l, -1),
                            C(e),
                            x(s.callback_cancel, e, t, l));
                        })(e, t, s, l),
                        x(s.callback_exit, e, t, l));
                    })(e.target, e, t, s);
              });
            },
            fe = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            be = function (e) {
              return (function (e) {
                return E(e) === v;
              })(e);
            },
            ve = function (e, t) {
              return (function (e) {
                return fe(e).filter(w);
              })(e || ge(t));
            },
            ye = function (e, s) {
              var a = o(e);
              (this._settings = a),
                (this.loadingCount = 0),
                (function (e, t) {
                  l &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        me(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(a, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), fe(s).filter(be)).forEach(function (t) {
                          I(t, e.class_error), C(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(a, this),
                this.update(s);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  a,
                  n = this._settings,
                  i = ve(e, n);
                M(this, i.length),
                  !s && l
                    ? pe(n)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ie(e, t, s),
                                  (function (e, t) {
                                    var s = Y[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  L(e, y);
                              })(e, t, s);
                          }),
                            M(s, 0);
                        })(i, n, this)
                      : ((a = i),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, a))
                    : this.loadAll(i);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    F(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ve(e, s).forEach(function (e) {
                  q(e, t), oe(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var s = o(t);
              oe(e, s);
            }),
            (ye.resetStatus = function (e) {
              C(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, l = 0; (s = t[l]); l += 1) c(e, s);
                  else c(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function s(l) {
    var a = t[l];
    if (void 0 !== a) return a.exports;
    var n = (t[l] = { exports: {} });
    return e[l].call(n.exports, n, n.exports, s), n.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          l = {};
        (l.element = t),
          (l.parent = t.parentNode),
          (l.destination = document.querySelector(s[0].trim())),
          (l.breakpoint = s[1] ? s[1].trim() : "767"),
          (l.place = s[2] ? s[2].trim() : "last"),
          (l.index = this.indexInParent(l.parent, l.element)),
          this.оbjects.push(l);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
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
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          },
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          l = String.prototype.split.call(s, ","),
          a = window.matchMedia(l[0]),
          n = l[1],
          i = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === n;
          });
        a.addListener(function () {
          e.mediaHandler(a, i);
        }),
          this.mediaHandler(a, i);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
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
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
              ? s.children[e].insertAdjacentElement("beforebegin", t)
              : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
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
    new e("max").init();
    class t {
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
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
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
                  this.options.attributeOpenButton,
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`,
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this),
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
            }.bind(this),
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
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
            this.targetOpen.selector,
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute,
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`,
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive,
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : c(),
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
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
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
              c(),
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
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`,
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`,
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
          l = s.indexOf(document.activeElement);
        e.shiftKey && 0 === l && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            l !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && u(`[Попапос]: ${e}`);
      }
    }
    let l = {
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
          l.Android() || l.BlackBerry() || l.iOS() || l.Opera() || l.Windows()
        );
      },
    };
    let a = (e, t = 500, s = 0) => {
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
              e.classList.remove("_slide");
          }, t));
      },
      n = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let l = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = l + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      i = (e, t = 500) => (e.hidden ? n(e, t) : a(e, t)),
      o = !0,
      c = (e = 500) => {
        document.documentElement.classList.contains("lock") ? r(e) : d(e);
      },
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      d = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
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
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function u(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function h(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function p(e, t) {
      const s = Array.from(e).filter(function (e, s, l) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const l = {},
            a = s.dataset[t].split(",");
          (l.value = a[0]),
            (l.type = a[1] ? a[1].trim() : "max"),
            (l.item = s),
            e.push(l);
        });
        let l = e.map(function (e) {
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
        l = h(l);
        const a = [];
        if (l.length)
          return (
            l.forEach((t) => {
              const s = t.split(","),
                l = s[1],
                n = s[2],
                i = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === l && e.type === n) return !0;
                });
              a.push({ itemsArray: o, matchMedia: i });
            }),
            a
          );
      }
    }
    let m,
      f = !0;
    document.addEventListener("click", function (e) {
      (m = e.target),
        f && m.closest(".icon-menu")
          ? (document.documentElement.classList.add("menu-open"),
            document.documentElement.classList.add("no-scrolling"),
            (f = !1))
          : m.closest(".menu") ||
            (document.documentElement.classList.remove("menu-open"),
            document.documentElement.classList.remove("no-scrolling"),
            (f = !0));
    });
    let g = (e, t = !1, s = 500, l = 0) => {
      const a = document.querySelector(e);
      if (a) {
        let n = "",
          i = 0;
        t &&
          ((n = "header.header"), (i = document.querySelector(n).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: n,
          offset: l,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (f ||
              (document.documentElement.classList.remove("menu-open"),
              document.documentElement.classList.remove("no-scrolling"),
              (f = !0))),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", o);
        else {
          let e = a.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: i ? e - i : e, behavior: "smooth" });
        }
        u(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else u(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class b {
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
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
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
            }.bind(this),
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this),
          );
      }
      selectInit(e, t) {
        const s = this;
        let l = document.createElement("div");
        if (
          (l.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(l, e),
          l.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          l.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`,
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            l,
            this.selectClasses.classSelectTitle,
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`,
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
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : "",
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
          const l = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag),
                    ).dataset.selectId
                  }"]`,
                ),
            a = this.getSelectElement(l).originalSelect;
          if ("click" === s) {
            if (!a.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag),
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag),
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`,
                  );
                this.optionAction(l, a, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle),
                )
              )
                this.selectAction(l);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption),
                );
                this.optionAction(l, a, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect),
                ) &&
                ("focusin" === s
                  ? l.classList.add(this.selectClasses.classSelectFocus)
                  : l.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect,
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`,
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
            this.selectClasses.classSelectOptions,
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          i(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody,
          ).selectElement,
          l = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle,
          ).selectElement;
        l && l.remove(),
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
                    t,
                  )}</span>`,
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
        let l = "";
        return (
          (l += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (l += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (l += t ? s : ""),
          (l += t ? "</span>" : ""),
          (l += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (l += e.textContent),
          (l += t ? "</span>" : ""),
          (l += t ? "</span>" : ""),
          l
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
          l = Array.from(e.options);
        if (l.length > 0) {
          let a = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (l = l.filter((e) => e.value)),
            (a += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            l.forEach((t) => {
              a += this.getOption(t, e);
            }),
            (a += t ? "</div>" : ""),
            a
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          l =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          a = e.dataset.class ? ` ${e.dataset.class}` : "",
          n = !!e.dataset.href && e.dataset.href,
          i = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += n
            ? `<a ${i} ${l} href="${n}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${a}${s}">`
            : `<button ${l} class="${this.selectClasses.classSelectOption}${a}${s}" data-value="${e.value}" type="button">`),
          (o += this.getSelectElementContent(e)),
          (o += n ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions,
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected),
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected",
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption,
              )}[hidden]`,
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption,
                )}[hidden]`,
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
          (e.hasAttribute("data-validate") && y.validateInput(e),
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
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle,
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput,
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions,
          ).selectElement,
          l = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          a = this;
        t.addEventListener("input", function () {
          l.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && a.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } }),
        );
      }
      setLogging(e) {
        this.config.logging && u(`[select]: ${e}`);
      }
    }
    const v = { inputMaskModule: null, selectModule: null };
    let y = {
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
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                y.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (v.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  v.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class S {
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
            document.querySelectorAll("[data-watch]"),
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`,
          ),
            h(
              Array.from(e).map(function (e) {
                return `${e.dataset.watchRoot ? e.dataset.watchRoot : null}|${
                  e.dataset.watchMargin ? e.dataset.watchMargin : "0px"
                }|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              }),
            ).forEach((t) => {
              let s = t.split("|"),
                l = { root: s[0], margin: s[1], threshold: s[2] },
                a = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    a = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === l.root &&
                    String(s) === l.margin &&
                    String(a) === l.threshold
                  )
                    return e;
                }),
                n = this.getScrollWatcherConfig(l);
              this.scrollWatcherInit(a, n);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`,
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
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %",
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
              `Я вижу ${t.classList}, добавил класс _watcher-view`,
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`,
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && u(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } }),
          );
      }
    }
    let _ = !1;
    setTimeout(() => {
      if (_) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    let A = document.querySelectorAll(".menu__arrow");
    l.any() &&
      A &&
      A.forEach((e) => {
        e.addEventListener("click", function (e) {
          if (e.target.closest(".menu__arrow")) {
            e.target.classList.toggle("_active");
            let t = e.target.parentElement;
            if (t.classList.contains("menu__item")) {
              t.querySelector(".sub-menu").classList.toggle("_active");
            }
          }
        });
      });
    let E = new IntersectionObserver(
      function (e) {
        e.forEach((e) => {
          if (e.isIntersecting) {
            let t = e.target;
            !(function (e) {
              let t,
                s,
                l,
                a,
                n,
                i = 0;
              e.hasAttribute("data-time") &&
                ((t = Number(e.getAttribute("data-time"))),
                0 === t && (t = 1e3)),
                e.hasAttribute("data-number") &&
                  ((s = Number(e.getAttribute("data-number"))),
                  0 === s && (s = 100)),
                e.hasAttribute("data-step") &&
                  ((l = Number(e.getAttribute("data-step"))),
                  0 === l && (l = 1)),
                (a = Math.round(t / (s / l))),
                (n = setInterval(() => {
                  (i += l), i == s && clearInterval(n), (e.innerHTML = i);
                }, a));
            })(t),
              t.hasAttribute("data-show-one") && E.unobserve(t);
          }
        });
      },
      { threshold: 0.8 },
    );
    document.querySelectorAll("[data-number]").forEach((e) => {
      E.observe(e);
    }),
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
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && l(t);
          let s = p(e, "spollers");
          function l(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    n(e),
                    e.addEventListener("click", o))
                  : (e.classList.remove("_spoller-init"),
                    n(e, !1),
                    e.removeEventListener("click", o));
            });
          }
          function n(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                l = s.closest("[data-spollers]"),
                a = !!l.hasAttribute("data-one-spoller");
              l.querySelectorAll("._slide").length ||
                (a && !s.classList.contains("_spoller-active") && c(l),
                s.classList.toggle("_spoller-active"),
                i(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function c(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              a(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                l(e.itemsArray, e.matchMedia);
              }),
                l(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const a = location.hash.replace("#", "");
          a.startsWith("tab-") && (t = a.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", l),
                (function (e) {
                  const s = e.querySelectorAll("[data-tabs-titles]>*"),
                    l = e.querySelectorAll("[data-tabs-body]>*"),
                    a = e.dataset.tabsIndex,
                    n = t[0] == a;
                  if (n) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active",
                    ).classList.remove("_tab-active");
                  }
                  l.length > 0 &&
                    l.forEach((e, l) => {
                      s[l].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        n && l == t[1] && s[l].classList.add("_tab-active"),
                        (e.hidden = !s[l].classList.contains("_tab-active"));
                    });
                })(e);
            });
          let n = p(e, "tabs");
          n &&
            n.length &&
            n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            const s = (e = e.item).querySelector("[data-tabs-titles]"),
              l = e.querySelectorAll("[data-tabs-title]"),
              a = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((n, i) => {
              t.matches
                ? (a.append(l[i]), a.append(n), e.classList.add("_tab-spoller"))
                : (s.append(l[i]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function l(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              l = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !l.querySelectorAll("._slide").length
            ) {
              const e = l.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-title]"),
                    s = e.querySelectorAll("[data-tabs-item]"),
                    l = e.dataset.tabsIndex,
                    i = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  s.length > 0 &&
                    s.forEach((e, s) => {
                      t[s].classList.contains("_tab-active")
                        ? (i ? n(e, i) : (e.hidden = !1),
                          e.closest(".popup") ||
                            (location.hash = `tab-${l}-${s}`))
                        : i
                          ? a(e, i)
                          : (e.hidden = !0);
                    });
                })(l);
            }
            e.preventDefault();
          }
        }
      })(),
      new t({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
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
              y.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && y.validateInput(t));
          });
      })(),
      (v.selectModule = new b({})),
      new S({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                l = s.dataset.goto ? s.dataset.goto : "",
                a = !!s.hasAttribute("data-goto-header"),
                n = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              g(l, a, n), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                l =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="#${e}"]`));
              t.isIntersecting
                ? l && l.classList.add("_navigator-active")
                : l && l.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
