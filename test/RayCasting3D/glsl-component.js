!(function (e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { exports: {}, id: n, loaded: !1 });
    return e[n].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
  }
  var r = {};
  return (t.m = e), (t.c = r), (t.p = ""), t(0);
})([
  function (e, t, r) {
    "use strict";
    r(1);
    var n = r(2),
      o = function () {};
    (o.prototype = Object.create(HTMLCanvasElement.prototype)),
      (o.prototype.createdCallback = function () {
        var e = this.attachShadow({ mode: "closed" }),
          t = document.createElement("canvas");
        e.appendChild(t),
          (this.style.width = "100%"),
          (this.style.height = "100%"),
          (this.style.display = "block"),
          (t.style.width = "100%"),
          (t.style.height = "100%"),
          (t.style.display = "block"),
          (t.width = t.offsetWidth),
          (t.height = t.offsetHeight);
        var r = {},
          o = this.innerHTML.replace(/&lt;br&gt;/g, "");
        (o = o.replace(/<br>/g, "")),
          (o = o.replace(/&nbsp;/g, "")),
          (o = o.replace(/&lt;/g, "<")),
          (o = o.replace(/&gt;/g, ">")),
          (o = o.replace(/&amp;/g, "&")),
          (r.fragmentString = o || EMPTY_FRAG_SHADER),
          o && (this.innerHTML = "");
        for (var i = 0; i < this.attributes.length; i++) {
          var a = this.attributes[i];
          if (a.specified) {
            var s = a.value;
            "true" === s
              ? (s = !0)
              : "false" === s
              ? (s = !1)
              : parseInt(s) && (s = parseInt(s)),
              (r[a.name] = s);
          }
        }
        this.glslCanvas = new n(t, r);
      }),
      document.registerElement("glsl-component", o);
  },
  function (e, t) {
    (function (t) {
      function r(e, t) {
        "use strict";
        function r() {
          var e = M.splice(0, M.length);
          for (ze = 0; e.length; ) e.shift().call(null, e.shift());
        }
        function n(e, t) {
          for (var r = 0, n = e.length; r < n; r++) m(e[r], t);
        }
        function o(e) {
          for (var t, r = 0, n = e.length; r < n; r++)
            (t = e[r]), P(t, oe[a(t)]);
        }
        function i(e) {
          return function (t) {
            Oe(t) && (m(t, e), n(t.querySelectorAll(ie), e));
          };
        }
        function a(e) {
          var t = Ie.call(e, "is"),
            r = e.nodeName.toUpperCase(),
            n = se.call(ne, t ? ee + t.toUpperCase() : Q + r);
          return t && -1 < n && !s(r, t) ? -1 : n;
        }
        function s(e, t) {
          return -1 < ie.indexOf(e + '[is="' + t + '"]');
        }
        function u(e) {
          var t = e.currentTarget,
            r = e.attrChange,
            n = e.attrName,
            o = e.target,
            i = e[W] || 2,
            a = e[z] || 3;
          !Qe ||
            (o && o !== t) ||
            !t[I] ||
            "style" === n ||
            (e.prevValue === e.newValue &&
              ("" !== e.newValue || (r !== i && r !== a))) ||
            t[I](n, r === i ? null : e.prevValue, r === a ? null : e.newValue);
        }
        function c(e) {
          var t = i(e);
          return function (e) {
            M.push(t, e.target),
              ze && clearTimeout(ze),
              (ze = setTimeout(r, 1));
          };
        }
        function l(e) {
          Ze && ((Ze = !1), e.currentTarget.removeEventListener(J, l)),
            n((e.target || x).querySelectorAll(ie), e.detail === N ? N : D),
            ke && d();
        }
        function f(e, t) {
          var r = this;
          Ve.call(r, e, t), L.call(r, { target: r });
        }
        function h(e, t) {
          Se(e, t),
            R
              ? R.observe(e, We)
              : (Je && ((e.setAttribute = f), (e[C] = j(e)), e[O](Z, L)),
                e[O](K, u)),
            e[q] && Qe && ((e.created = !0), e[q](), (e.created = !1));
        }
        function d() {
          for (var e, t = 0, r = De.length; t < r; t++)
            (e = De[t]), ae.contains(e) || (r--, De.splice(t--, 1), m(e, N));
        }
        function p(e) {
          throw new Error("A " + e + " type is already registered");
        }
        function m(e, t) {
          var r,
            n = a(e);
          -1 < n &&
            (H(e, oe[n]),
            (n = 0),
            t !== D || e[D]
              ? t !== N || e[N] || ((e[D] = !1), (e[N] = !0), (n = 1))
              : ((e[N] = !1),
                (e[D] = !0),
                (n = 1),
                ke && se.call(De, e) < 0 && De.push(e)),
            n && (r = e[t + U]) && r.call(e));
        }
        function g() {}
        function v(e, t, r) {
          var n = (r && r[F]) || "",
            o = t.prototype,
            i = Re(o),
            a = t.observedAttributes || he,
            s = { prototype: i };
          Ce(i, q, {
            value: function () {
              if (_e) _e = !1;
              else if (!this[ye]) {
                (this[ye] = !0), new t(this), o[q] && o[q].call(this);
                var e = Me[Ae.get(t)];
                (!Ee || e.create.length > 1) && $(this);
              }
            },
          }),
            Ce(i, I, {
              value: function (e) {
                -1 < se.call(a, e) && o[I].apply(this, arguments);
              },
            }),
            o[G] && Ce(i, X, { value: o[G] }),
            o[V] && Ce(i, B, { value: o[V] }),
            n && (s[F] = n),
            (e = e.toUpperCase()),
            (Me[e] = { constructor: t, create: n ? [n, je(e)] : [e] }),
            Ae.set(t, e),
            x[k](e.toLowerCase(), s),
            E(e),
            Le[e].r();
        }
        function b(e) {
          var t = Me[e.toUpperCase()];
          return t && t.constructor;
        }
        function y(e) {
          return "string" == typeof e ? e : (e && e.is) || "";
        }
        function $(e) {
          for (var t, r = e[I], n = r ? e.attributes : he, o = n.length; o--; )
            (t = n[o]),
              r.call(e, t.name || t.nodeName, null, t.value || t.nodeValue);
        }
        function E(e) {
          return (
            (e = e.toUpperCase()),
            e in Le ||
              ((Le[e] = {}),
              (Le[e].p = new we(function (t) {
                Le[e].r = t;
              }))),
            Le[e].p
          );
        }
        function T() {
          $e && delete e.customElements,
            fe(e, "customElements", { configurable: !0, value: new g() }),
            fe(e, "CustomElementRegistry", { configurable: !0, value: g });
          for (
            var t = function (t) {
                var r = e[t];
                if (r) {
                  (e[t] = function (e) {
                    var t, n;
                    return (
                      e || (e = this),
                      e[ye] ||
                        ((_e = !0),
                        (t = Me[Ae.get(e.constructor)]),
                        (n = Ee && 1 === t.create.length),
                        (e = n
                          ? Reflect.construct(r, he, t.constructor)
                          : x.createElement.apply(x, t.create)),
                        (e[ye] = !0),
                        (_e = !1),
                        n || $(e)),
                      e
                    );
                  }),
                    (e[t].prototype = r.prototype);
                  try {
                    r.prototype.constructor = e[t];
                  } catch (n) {
                    (be = !0), fe(r, ye, { value: e[t] });
                  }
                }
              },
              r = _.get(/^HTML[A-Z]*[a-z]/),
              n = r.length;
            n--;
            t(r[n])
          );
          x.createElement = function (e, t) {
            var r = y(t);
            return r ? Be.call(this, e, je(r)) : Be.call(this, e);
          };
        }
        var x = e.document,
          w = e.Object,
          _ = (function (e) {
            var t,
              r,
              n,
              o,
              i = /^[A-Z]+[a-z]/,
              a = function (e) {
                var t,
                  r = [];
                for (t in u) e.test(t) && r.push(t);
                return r;
              },
              s = function (e, t) {
                (t = t.toLowerCase()),
                  t in u ||
                    ((u[e] = (u[e] || []).concat(t)),
                    (u[t] = u[t.toUpperCase()] = e));
              },
              u = (w.create || w)(null),
              c = {};
            for (r in e)
              for (o in e[r])
                for (n = e[r][o], u[o] = n, t = 0; t < n.length; t++)
                  u[n[t].toLowerCase()] = u[n[t].toUpperCase()] = o;
            return (
              (c.get = function (e) {
                return "string" == typeof e
                  ? u[e] || (i.test(e) ? [] : "")
                  : a(e);
              }),
              (c.set = function (e, t) {
                return i.test(e) ? s(e, t) : s(t, e), c;
              }),
              c
            );
          })({
            collections: {
              HTMLAllCollection: ["all"],
              HTMLCollection: ["forms"],
              HTMLFormControlsCollection: ["elements"],
              HTMLOptionsCollection: ["options"],
            },
            elements: {
              Element: ["element"],
              HTMLAnchorElement: ["a"],
              HTMLAppletElement: ["applet"],
              HTMLAreaElement: ["area"],
              HTMLAttachmentElement: ["attachment"],
              HTMLAudioElement: ["audio"],
              HTMLBRElement: ["br"],
              HTMLBaseElement: ["base"],
              HTMLBodyElement: ["body"],
              HTMLButtonElement: ["button"],
              HTMLCanvasElement: ["canvas"],
              HTMLContentElement: ["content"],
              HTMLDListElement: ["dl"],
              HTMLDataElement: ["data"],
              HTMLDataListElement: ["datalist"],
              HTMLDetailsElement: ["details"],
              HTMLDialogElement: ["dialog"],
              HTMLDirectoryElement: ["dir"],
              HTMLDivElement: ["div"],
              HTMLDocument: ["document"],
              HTMLElement: [
                "element",
                "abbr",
                "address",
                "article",
                "aside",
                "b",
                "bdi",
                "bdo",
                "cite",
                "code",
                "command",
                "dd",
                "dfn",
                "dt",
                "em",
                "figcaption",
                "figure",
                "footer",
                "header",
                "i",
                "kbd",
                "mark",
                "nav",
                "noscript",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "section",
                "small",
                "strong",
                "sub",
                "summary",
                "sup",
                "u",
                "var",
                "wbr",
              ],
              HTMLEmbedElement: ["embed"],
              HTMLFieldSetElement: ["fieldset"],
              HTMLFontElement: ["font"],
              HTMLFormElement: ["form"],
              HTMLFrameElement: ["frame"],
              HTMLFrameSetElement: ["frameset"],
              HTMLHRElement: ["hr"],
              HTMLHeadElement: ["head"],
              HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
              HTMLHtmlElement: ["html"],
              HTMLIFrameElement: ["iframe"],
              HTMLImageElement: ["img"],
              HTMLInputElement: ["input"],
              HTMLKeygenElement: ["keygen"],
              HTMLLIElement: ["li"],
              HTMLLabelElement: ["label"],
              HTMLLegendElement: ["legend"],
              HTMLLinkElement: ["link"],
              HTMLMapElement: ["map"],
              HTMLMarqueeElement: ["marquee"],
              HTMLMediaElement: ["media"],
              HTMLMenuElement: ["menu"],
              HTMLMenuItemElement: ["menuitem"],
              HTMLMetaElement: ["meta"],
              HTMLMeterElement: ["meter"],
              HTMLModElement: ["del", "ins"],
              HTMLOListElement: ["ol"],
              HTMLObjectElement: ["object"],
              HTMLOptGroupElement: ["optgroup"],
              HTMLOptionElement: ["option"],
              HTMLOutputElement: ["output"],
              HTMLParagraphElement: ["p"],
              HTMLParamElement: ["param"],
              HTMLPictureElement: ["picture"],
              HTMLPreElement: ["pre"],
              HTMLProgressElement: ["progress"],
              HTMLQuoteElement: ["blockquote", "q", "quote"],
              HTMLScriptElement: ["script"],
              HTMLSelectElement: ["select"],
              HTMLShadowElement: ["shadow"],
              HTMLSlotElement: ["slot"],
              HTMLSourceElement: ["source"],
              HTMLSpanElement: ["span"],
              HTMLStyleElement: ["style"],
              HTMLTableCaptionElement: ["caption"],
              HTMLTableCellElement: ["td", "th"],
              HTMLTableColElement: ["col", "colgroup"],
              HTMLTableElement: ["table"],
              HTMLTableRowElement: ["tr"],
              HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
              HTMLTemplateElement: ["template"],
              HTMLTextAreaElement: ["textarea"],
              HTMLTimeElement: ["time"],
              HTMLTitleElement: ["title"],
              HTMLTrackElement: ["track"],
              HTMLUListElement: ["ul"],
              HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
              HTMLVideoElement: ["video"],
            },
            nodes: {
              Attr: ["node"],
              Audio: ["audio"],
              CDATASection: ["node"],
              CharacterData: ["node"],
              Comment: ["#comment"],
              Document: ["#document"],
              DocumentFragment: ["#document-fragment"],
              DocumentType: ["node"],
              HTMLDocument: ["#document"],
              Image: ["img"],
              Option: ["option"],
              ProcessingInstruction: ["node"],
              ShadowRoot: ["#shadow-root"],
              Text: ["#text"],
              XMLDocument: ["xml"],
            },
          });
        t || (t = "auto");
        var M,
          L,
          A,
          j,
          R,
          S,
          H,
          P,
          k = "registerElement",
          C = "__" + k + ((1e5 * e.Math.random()) >> 0),
          O = "addEventListener",
          D = "attached",
          U = "Callback",
          N = "detached",
          F = "extends",
          I = "attributeChanged" + U,
          X = D + U,
          G = "connected" + U,
          V = "disconnected" + U,
          q = "created" + U,
          B = N + U,
          W = "ADDITION",
          Y = "MODIFICATION",
          z = "REMOVAL",
          K = "DOMAttrModified",
          J = "DOMContentLoaded",
          Z = "DOMSubtreeModified",
          Q = "<",
          ee = "=",
          te = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
          re = [
            "ANNOTATION-XML",
            "COLOR-PROFILE",
            "FONT-FACE",
            "FONT-FACE-SRC",
            "FONT-FACE-URI",
            "FONT-FACE-FORMAT",
            "FONT-FACE-NAME",
            "MISSING-GLYPH",
          ],
          ne = [],
          oe = [],
          ie = "",
          ae = x.documentElement,
          se =
            ne.indexOf ||
            function (e) {
              for (var t = this.length; t-- && this[t] !== e; );
              return t;
            },
          ue = w.prototype,
          ce = ue.hasOwnProperty,
          le = ue.isPrototypeOf,
          fe = w.defineProperty,
          he = [],
          de = w.getOwnPropertyDescriptor,
          pe = w.getOwnPropertyNames,
          me = w.getPrototypeOf,
          ge = w.setPrototypeOf,
          ve = !!w.__proto__,
          be = !1,
          ye = "__dreCEv1",
          $e = e.customElements,
          Ee = "force" !== t && !!($e && $e.define && $e.get && $e.whenDefined),
          Te = w.create || w,
          xe =
            e.Map ||
            function () {
              var e,
                t = [],
                r = [];
              return {
                get: function (e) {
                  return r[se.call(t, e)];
                },
                set: function (n, o) {
                  (e = se.call(t, n)),
                    e < 0 ? (r[t.push(n) - 1] = o) : (r[e] = o);
                },
              };
            },
          we =
            e.Promise ||
            function (e) {
              function t(e) {
                for (n = !0; r.length; ) r.shift()(e);
              }
              var r = [],
                n = !1,
                o = {
                  catch: function () {
                    return o;
                  },
                  then: function (e) {
                    return r.push(e), n && setTimeout(t, 1), o;
                  },
                };
              return e(t), o;
            },
          _e = !1,
          Me = Te(null),
          Le = Te(null),
          Ae = new xe(),
          je = String,
          Re =
            w.create ||
            function e(t) {
              return t ? ((e.prototype = t), new e()) : this;
            },
          Se =
            ge ||
            (ve
              ? function (e, t) {
                  return (e.__proto__ = t), e;
                }
              : pe && de
              ? (function () {
                  function e(e, t) {
                    for (var r, n = pe(t), o = 0, i = n.length; o < i; o++)
                      (r = n[o]), ce.call(e, r) || fe(e, r, de(t, r));
                  }
                  return function (t, r) {
                    do e(t, r);
                    while ((r = me(r)) && !le.call(r, t));
                    return t;
                  };
                })()
              : function (e, t) {
                  for (var r in t) e[r] = t[r];
                  return e;
                }),
          He = e.MutationObserver || e.WebKitMutationObserver,
          Pe = (e.HTMLElement || e.Element || e.Node).prototype,
          ke = !le.call(Pe, ae),
          Ce = ke
            ? function (e, t, r) {
                return (e[t] = r.value), e;
              }
            : fe,
          Oe = ke
            ? function (e) {
                return 1 === e.nodeType;
              }
            : function (e) {
                return le.call(Pe, e);
              },
          De = ke && [],
          Ue = Pe.attachShadow,
          Ne = Pe.cloneNode,
          Fe = Pe.dispatchEvent,
          Ie = Pe.getAttribute,
          Xe = Pe.hasAttribute,
          Ge = Pe.removeAttribute,
          Ve = Pe.setAttribute,
          qe = x.createElement,
          Be = qe,
          We = He && {
            attributes: !0,
            characterData: !0,
            attributeOldValue: !0,
          },
          Ye =
            He ||
            function (e) {
              (Je = !1), ae.removeEventListener(K, Ye);
            },
          ze = 0,
          Ke = !1,
          Je = !0,
          Ze = !0,
          Qe = !0;
        if (
          (k in x ||
            (ge || ve
              ? ((H = function (e, t) {
                  le.call(t, e) || h(e, t);
                }),
                (P = h))
              : ((H = function (e, t) {
                  e[C] || ((e[C] = w(!0)), h(e, t));
                }),
                (P = H)),
            ke
              ? ((Je = !1),
                (function () {
                  var e = de(Pe, O),
                    t = e.value,
                    r = function (e) {
                      var t = new CustomEvent(K, { bubbles: !0 });
                      (t.attrName = e),
                        (t.prevValue = Ie.call(this, e)),
                        (t.newValue = null),
                        (t[z] = t.attrChange = 2),
                        Ge.call(this, e),
                        Fe.call(this, t);
                    },
                    n = function (e, t) {
                      var r = Xe.call(this, e),
                        n = r && Ie.call(this, e),
                        o = new CustomEvent(K, { bubbles: !0 });
                      Ve.call(this, e, t),
                        (o.attrName = e),
                        (o.prevValue = r ? n : null),
                        (o.newValue = t),
                        r
                          ? (o[Y] = o.attrChange = 1)
                          : (o[W] = o.attrChange = 0),
                        Fe.call(this, o);
                    },
                    o = function (e) {
                      var t,
                        r = e.currentTarget,
                        n = r[C],
                        o = e.propertyName;
                      n.hasOwnProperty(o) &&
                        ((n = n[o]),
                        (t = new CustomEvent(K, { bubbles: !0 })),
                        (t.attrName = n.name),
                        (t.prevValue = n.value || null),
                        (t.newValue = n.value = r[o] || null),
                        null == t.prevValue
                          ? (t[W] = t.attrChange = 0)
                          : (t[Y] = t.attrChange = 1),
                        Fe.call(r, t));
                    };
                  (e.value = function (e, i, a) {
                    e === K &&
                      this[I] &&
                      this.setAttribute !== n &&
                      ((this[C] = {
                        className: { name: "class", value: this.className },
                      }),
                      (this.setAttribute = n),
                      (this.removeAttribute = r),
                      t.call(this, "propertychange", o)),
                      t.call(this, e, i, a);
                  }),
                    fe(Pe, O, e);
                })())
              : He ||
                (ae[O](K, Ye),
                ae.setAttribute(C, 1),
                ae.removeAttribute(C),
                Je &&
                  ((L = function (e) {
                    var t,
                      r,
                      n,
                      o = this;
                    if (o === e.target) {
                      (t = o[C]), (o[C] = r = j(o));
                      for (n in r) {
                        if (!(n in t)) return A(0, o, n, t[n], r[n], W);
                        if (r[n] !== t[n]) return A(1, o, n, t[n], r[n], Y);
                      }
                      for (n in t)
                        if (!(n in r)) return A(2, o, n, t[n], r[n], z);
                    }
                  }),
                  (A = function (e, t, r, n, o, i) {
                    var a = {
                      attrChange: e,
                      currentTarget: t,
                      attrName: r,
                      prevValue: n,
                      newValue: o,
                    };
                    (a[i] = e), u(a);
                  }),
                  (j = function (e) {
                    for (
                      var t, r, n = {}, o = e.attributes, i = 0, a = o.length;
                      i < a;
                      i++
                    )
                      (t = o[i]),
                        (r = t.name),
                        "setAttribute" !== r && (n[r] = t.value);
                    return n;
                  }))),
            (x[k] = function (e, t) {
              if (
                ((r = e.toUpperCase()),
                Ke ||
                  ((Ke = !0),
                  He
                    ? ((R = (function (e, t) {
                        function r(e, t) {
                          for (var r = 0, n = e.length; r < n; t(e[r++]));
                        }
                        return new He(function (n) {
                          for (var o, i, a, s = 0, u = n.length; s < u; s++)
                            (o = n[s]),
                              "childList" === o.type
                                ? (r(o.addedNodes, e), r(o.removedNodes, t))
                                : ((i = o.target),
                                  Qe &&
                                    i[I] &&
                                    "style" !== o.attributeName &&
                                    ((a = Ie.call(i, o.attributeName)),
                                    a !== o.oldValue &&
                                      i[I](o.attributeName, o.oldValue, a)));
                        });
                      })(i(D), i(N))),
                      (S = function (e) {
                        return R.observe(e, { childList: !0, subtree: !0 }), e;
                      }),
                      S(x),
                      Ue &&
                        (Pe.attachShadow = function () {
                          return S(Ue.apply(this, arguments));
                        }))
                    : ((M = []),
                      x[O]("DOMNodeInserted", c(D)),
                      x[O]("DOMNodeRemoved", c(N))),
                  x[O](J, l),
                  x[O]("readystatechange", l),
                  (Pe.cloneNode = function (e) {
                    var t = Ne.call(this, !!e),
                      r = a(t);
                    return (
                      -1 < r && P(t, oe[r]), e && o(t.querySelectorAll(ie)), t
                    );
                  })),
                -2 < se.call(ne, ee + r) + se.call(ne, Q + r) && p(e),
                !te.test(r) || -1 < se.call(re, r))
              )
                throw new Error("The type " + e + " is invalid");
              var r,
                s,
                u = function () {
                  return h ? x.createElement(d, r) : x.createElement(d);
                },
                f = t || ue,
                h = ce.call(f, F),
                d = h ? t[F].toUpperCase() : r;
              return (
                h && -1 < se.call(ne, Q + d) && p(d),
                (s = ne.push((h ? ee : Q) + r) - 1),
                (ie = ie.concat(
                  ie.length ? "," : "",
                  h ? d + '[is="' + e.toLowerCase() + '"]' : d
                )),
                (u.prototype = oe[s] = ce.call(f, "prototype")
                  ? f.prototype
                  : Re(Pe)),
                n(x.querySelectorAll(ie), D),
                u
              );
            }),
            (x.createElement = Be = function (e, t) {
              var r = y(t),
                n = r ? qe.call(x, e, je(r)) : qe.call(x, e),
                o = "" + e,
                i = se.call(ne, (r ? ee : Q) + (r || o).toUpperCase()),
                a = -1 < i;
              return (
                r &&
                  (n.setAttribute("is", (r = r.toLowerCase())),
                  a && (a = s(o.toUpperCase(), r))),
                (Qe = !x.createElement.innerHTMLHelper),
                a && P(n, oe[i]),
                n
              );
            })),
          (g.prototype = {
            constructor: g,
            define: Ee
              ? function (e, t, r) {
                  if (r) v(e, t, r);
                  else {
                    var n = e.toUpperCase();
                    (Me[n] = { constructor: t, create: [n] }),
                      Ae.set(t, n),
                      $e.define(e, t);
                  }
                }
              : v,
            get: Ee
              ? function (e) {
                  return $e.get(e) || b(e);
                }
              : b,
            whenDefined: Ee
              ? function (e) {
                  return we.race([$e.whenDefined(e), E(e)]);
                }
              : E,
          }),
          $e && "force" !== t)
        )
          try {
            !(function (t, r, n) {
              if (
                ((r[F] = "a"),
                (t.prototype = Re(HTMLAnchorElement.prototype)),
                (t.prototype.constructor = t),
                e.customElements.define(n, t, r),
                Ie.call(x.createElement("a", { is: n }), "is") !== n ||
                  (Ee && Ie.call(new t(), "is") !== n))
              )
                throw r;
            })(
              function e() {
                return Reflect.construct(HTMLAnchorElement, [], e);
              },
              {},
              "document-register-element-a"
            );
          } catch (e) {
            T();
          }
        else T();
        try {
          qe.call(x, "a", "a");
        } catch (e) {
          je = function (e) {
            return { is: e };
          };
        }
      }
      (e.exports = r), r(t);
    }.call(
      t,
      (function () {
        return this;
      })()
    ));
  },
  function (e, t, r) {
    var n, n;
    (function (t) {
      !(function (t) {
        e.exports = t();
      })(function () {
        return (function e(t, r, o) {
          function i(s, u) {
            if (!r[s]) {
              if (!t[s]) {
                var c = "function" == typeof n && n;
                if (!u && c) return n(s, !0);
                if (a) return a(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw ((l.code = "MODULE_NOT_FOUND"), l);
              }
              var f = (r[s] = { exports: {} });
              t[s][0].call(
                f.exports,
                function (e) {
                  var r = t[s][1][e];
                  return i(r ? r : e);
                },
                f,
                f.exports,
                e,
                t,
                r,
                o
              );
            }
            return r[s].exports;
          }
          for (var a = "function" == typeof n && n, s = 0; s < o.length; s++)
            i(o[s]);
          return i;
        })(
          {
            1: [
              function (e, t, r) {
                t.exports = {
                  default: e("core-js/library/fn/array/from"),
                  __esModule: !0,
                };
              },
              { "core-js/library/fn/array/from": 12 },
            ],
            2: [
              function (e, t, r) {
                t.exports = {
                  default: e("core-js/library/fn/get-iterator"),
                  __esModule: !0,
                };
              },
              { "core-js/library/fn/get-iterator": 13 },
            ],
            3: [
              function (e, t, r) {
                t.exports = {
                  default: e("core-js/library/fn/object/assign"),
                  __esModule: !0,
                };
              },
              { "core-js/library/fn/object/assign": 14 },
            ],
            4: [
              function (e, t, r) {
                t.exports = {
                  default: e("core-js/library/fn/object/define-property"),
                  __esModule: !0,
                };
              },
              { "core-js/library/fn/object/define-property": 15 },
            ],
            5: [
              function (e, t, r) {
                t.exports = {
                  default: e("core-js/library/fn/object/keys"),
                  __esModule: !0,
                };
              },
              { "core-js/library/fn/object/keys": 16 },
            ],
            6: [
              function (e, t, r) {
                t.exports = {
                  default: e("core-js/library/fn/promise"),
                  __esModule: !0,
                };
              },
              { "core-js/library/fn/promise": 17 },
            ],
            7: [
              function (e, t, r) {
                t.exports = {
                  default: e("core-js/library/fn/set"),
                  __esModule: !0,
                };
              },
              { "core-js/library/fn/set": 18 },
            ],
            8: [
              function (e, t, r) {
                "use strict";
                (r.default = function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }),
                  (r.__esModule = !0);
              },
              {},
            ],
            9: [
              function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/define-property")
                  .default;
                (r.default = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var o = t[r];
                      (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        n(e, o.key, o);
                    }
                  }
                  return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                  };
                })()),
                  (r.__esModule = !0);
              },
              { "babel-runtime/core-js/object/define-property": 4 },
            ],
            10: [
              function (e, t, r) {
                "use strict";
                (r.default = function (e) {
                  return e && e.__esModule ? e : { default: e };
                }),
                  (r.__esModule = !0);
              },
              {},
            ],
            11: [
              function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/array/from").default;
                (r.default = function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++)
                      r[t] = e[t];
                    return r;
                  }
                  return n(e);
                }),
                  (r.__esModule = !0);
              },
              { "babel-runtime/core-js/array/from": 1 },
            ],
            12: [
              function (e, t, r) {
                e("../../modules/es6.string.iterator"),
                  e("../../modules/es6.array.from"),
                  (t.exports = e("../../modules/$.core").Array.from);
              },
              {
                "../../modules/$.core": 27,
                "../../modules/es6.array.from": 74,
                "../../modules/es6.string.iterator": 81,
              },
            ],
            13: [
              function (e, t, r) {
                e("../modules/web.dom.iterable"),
                  e("../modules/es6.string.iterator"),
                  (t.exports = e("../modules/core.get-iterator"));
              },
              {
                "../modules/core.get-iterator": 73,
                "../modules/es6.string.iterator": 81,
                "../modules/web.dom.iterable": 83,
              },
            ],
            14: [
              function (e, t, r) {
                e("../../modules/es6.object.assign"),
                  (t.exports = e("../../modules/$.core").Object.assign);
              },
              {
                "../../modules/$.core": 27,
                "../../modules/es6.object.assign": 76,
              },
            ],
            15: [
              function (e, t, r) {
                var n = e("../../modules/$");
                t.exports = function (e, t, r) {
                  return n.setDesc(e, t, r);
                };
              },
              { "../../modules/$": 49 },
            ],
            16: [
              function (e, t, r) {
                e("../../modules/es6.object.keys"),
                  (t.exports = e("../../modules/$.core").Object.keys);
              },
              {
                "../../modules/$.core": 27,
                "../../modules/es6.object.keys": 77,
              },
            ],
            17: [
              function (e, t, r) {
                e("../modules/es6.object.to-string"),
                  e("../modules/es6.string.iterator"),
                  e("../modules/web.dom.iterable"),
                  e("../modules/es6.promise"),
                  (t.exports = e("../modules/$.core").Promise);
              },
              {
                "../modules/$.core": 27,
                "../modules/es6.object.to-string": 78,
                "../modules/es6.promise": 79,
                "../modules/es6.string.iterator": 81,
                "../modules/web.dom.iterable": 83,
              },
            ],
            18: [
              function (e, t, r) {
                e("../modules/es6.object.to-string"),
                  e("../modules/es6.string.iterator"),
                  e("../modules/web.dom.iterable"),
                  e("../modules/es6.set"),
                  e("../modules/es7.set.to-json"),
                  (t.exports = e("../modules/$.core").Set);
              },
              {
                "../modules/$.core": 27,
                "../modules/es6.object.to-string": 78,
                "../modules/es6.set": 80,
                "../modules/es6.string.iterator": 81,
                "../modules/es7.set.to-json": 82,
                "../modules/web.dom.iterable": 83,
              },
            ],
            19: [
              function (e, t, r) {
                t.exports = function (e) {
                  if ("function" != typeof e)
                    throw TypeError(e + " is not a function!");
                  return e;
                };
              },
              {},
            ],
            20: [
              function (e, t, r) {
                t.exports = function () {};
              },
              {},
            ],
            21: [
              function (e, t, r) {
                var n = e("./$.is-object");
                t.exports = function (e) {
                  if (!n(e)) throw TypeError(e + " is not an object!");
                  return e;
                };
              },
              { "./$.is-object": 42 },
            ],
            22: [
              function (e, t, r) {
                var n = e("./$.cof"),
                  o = e("./$.wks")("toStringTag"),
                  i =
                    "Arguments" ==
                    n(
                      (function () {
                        return arguments;
                      })()
                    );
                t.exports = function (e) {
                  var t, r, a;
                  return void 0 === e
                    ? "Undefined"
                    : null === e
                    ? "Null"
                    : "string" == typeof (r = (t = Object(e))[o])
                    ? r
                    : i
                    ? n(t)
                    : "Object" == (a = n(t)) && "function" == typeof t.callee
                    ? "Arguments"
                    : a;
                };
              },
              { "./$.cof": 23, "./$.wks": 71 },
            ],
            23: [
              function (e, t, r) {
                var n = {}.toString;
                t.exports = function (e) {
                  return n.call(e).slice(8, -1);
                };
              },
              {},
            ],
            24: [
              function (e, t, r) {
                "use strict";
                var n = e("./$"),
                  o = e("./$.hide"),
                  i = e("./$.redefine-all"),
                  a = e("./$.ctx"),
                  s = e("./$.strict-new"),
                  u = e("./$.defined"),
                  c = e("./$.for-of"),
                  l = e("./$.iter-define"),
                  f = e("./$.iter-step"),
                  h = e("./$.uid")("id"),
                  d = e("./$.has"),
                  p = e("./$.is-object"),
                  m = e("./$.set-species"),
                  g = e("./$.descriptors"),
                  v = Object.isExtensible || p,
                  b = g ? "_s" : "size",
                  y = 0,
                  $ = function (e, t) {
                    if (!p(e))
                      return "symbol" == typeof e
                        ? e
                        : ("string" == typeof e ? "S" : "P") + e;
                    if (!d(e, h)) {
                      if (!v(e)) return "F";
                      if (!t) return "E";
                      o(e, h, ++y);
                    }
                    return "O" + e[h];
                  },
                  E = function (e, t) {
                    var r,
                      n = $(t);
                    if ("F" !== n) return e._i[n];
                    for (r = e._f; r; r = r.n) if (r.k == t) return r;
                  };
                t.exports = {
                  getConstructor: function (e, t, r, o) {
                    var l = e(function (e, i) {
                      s(e, l, t),
                        (e._i = n.create(null)),
                        (e._f = void 0),
                        (e._l = void 0),
                        (e[b] = 0),
                        void 0 != i && c(i, r, e[o], e);
                    });
                    return (
                      i(l.prototype, {
                        clear: function () {
                          for (var e = this, t = e._i, r = e._f; r; r = r.n)
                            (r.r = !0),
                              r.p && (r.p = r.p.n = void 0),
                              delete t[r.i];
                          (e._f = e._l = void 0), (e[b] = 0);
                        },
                        delete: function (e) {
                          var t = this,
                            r = E(t, e);
                          if (r) {
                            var n = r.n,
                              o = r.p;
                            delete t._i[r.i],
                              (r.r = !0),
                              o && (o.n = n),
                              n && (n.p = o),
                              t._f == r && (t._f = n),
                              t._l == r && (t._l = o),
                              t[b]--;
                          }
                          return !!r;
                        },
                        forEach: function (e) {
                          for (
                            var t,
                              r = a(
                                e,
                                arguments.length > 1 ? arguments[1] : void 0,
                                3
                              );
                            (t = t ? t.n : this._f);

                          )
                            for (r(t.v, t.k, this); t && t.r; ) t = t.p;
                        },
                        has: function (e) {
                          return !!E(this, e);
                        },
                      }),
                      g &&
                        n.setDesc(l.prototype, "size", {
                          get: function () {
                            return u(this[b]);
                          },
                        }),
                      l
                    );
                  },
                  def: function (e, t, r) {
                    var n,
                      o,
                      i = E(e, t);
                    return (
                      i
                        ? (i.v = r)
                        : ((e._l = i = {
                            i: (o = $(t, !0)),
                            k: t,
                            v: r,
                            p: (n = e._l),
                            n: void 0,
                            r: !1,
                          }),
                          e._f || (e._f = i),
                          n && (n.n = i),
                          e[b]++,
                          "F" !== o && (e._i[o] = i)),
                      e
                    );
                  },
                  getEntry: E,
                  setStrong: function (e, t, r) {
                    l(
                      e,
                      t,
                      function (e, t) {
                        (this._t = e), (this._k = t), (this._l = void 0);
                      },
                      function () {
                        for (var e = this, t = e._k, r = e._l; r && r.r; )
                          r = r.p;
                        return e._t && (e._l = r = r ? r.n : e._t._f)
                          ? "keys" == t
                            ? f(0, r.k)
                            : "values" == t
                            ? f(0, r.v)
                            : f(0, [r.k, r.v])
                          : ((e._t = void 0), f(1));
                      },
                      r ? "entries" : "values",
                      !r,
                      !0
                    ),
                      m(t);
                  },
                };
              },
              {
                "./$": 49,
                "./$.ctx": 28,
                "./$.defined": 29,
                "./$.descriptors": 30,
                "./$.for-of": 34,
                "./$.has": 36,
                "./$.hide": 37,
                "./$.is-object": 42,
                "./$.iter-define": 45,
                "./$.iter-step": 47,
                "./$.redefine-all": 55,
                "./$.set-species": 59,
                "./$.strict-new": 63,
                "./$.uid": 70,
              },
            ],
            25: [
              function (e, t, r) {
                var n = e("./$.for-of"),
                  o = e("./$.classof");
                t.exports = function (e) {
                  return function () {
                    if (o(this) != e)
                      throw TypeError(e + "#toJSON isn't generic");
                    var t = [];
                    return n(this, !1, t.push, t), t;
                  };
                };
              },
              { "./$.classof": 22, "./$.for-of": 34 },
            ],
            26: [
              function (e, t, r) {
                "use strict";
                var n = e("./$"),
                  o = e("./$.global"),
                  i = e("./$.export"),
                  a = e("./$.fails"),
                  s = e("./$.hide"),
                  u = e("./$.redefine-all"),
                  c = e("./$.for-of"),
                  l = e("./$.strict-new"),
                  f = e("./$.is-object"),
                  h = e("./$.set-to-string-tag"),
                  d = e("./$.descriptors");
                t.exports = function (e, t, r, p, m, g) {
                  var v = o[e],
                    b = v,
                    y = m ? "set" : "add",
                    $ = b && b.prototype,
                    E = {};
                  return (
                    d &&
                    "function" == typeof b &&
                    (g ||
                      ($.forEach &&
                        !a(function () {
                          new b().entries().next();
                        })))
                      ? ((b = t(function (t, r) {
                          l(t, b, e),
                            (t._c = new v()),
                            void 0 != r && c(r, m, t[y], t);
                        })),
                        n.each.call(
                          "add,clear,delete,forEach,get,has,set,keys,values,entries".split(
                            ","
                          ),
                          function (e) {
                            var t = "add" == e || "set" == e;
                            e in $ &&
                              (!g || "clear" != e) &&
                              s(b.prototype, e, function (r, n) {
                                if (!t && g && !f(r))
                                  return "get" == e && void 0;
                                var o = this._c[e](0 === r ? 0 : r, n);
                                return t ? this : o;
                              });
                          }
                        ),
                        "size" in $ &&
                          n.setDesc(b.prototype, "size", {
                            get: function () {
                              return this._c.size;
                            },
                          }))
                      : ((b = p.getConstructor(t, e, m, y)), u(b.prototype, r)),
                    h(b, e),
                    (E[e] = b),
                    i(i.G + i.W + i.F, E),
                    g || p.setStrong(b, e, m),
                    b
                  );
                };
              },
              {
                "./$": 49,
                "./$.descriptors": 30,
                "./$.export": 32,
                "./$.fails": 33,
                "./$.for-of": 34,
                "./$.global": 35,
                "./$.hide": 37,
                "./$.is-object": 42,
                "./$.redefine-all": 55,
                "./$.set-to-string-tag": 60,
                "./$.strict-new": 63,
              },
            ],
            27: [
              function (e, t, r) {
                var n = (t.exports = { version: "1.2.6" });
                "number" == typeof __e && (__e = n);
              },
              {},
            ],
            28: [
              function (e, t, r) {
                var n = e("./$.a-function");
                t.exports = function (e, t, r) {
                  if ((n(e), void 0 === t)) return e;
                  switch (r) {
                    case 1:
                      return function (r) {
                        return e.call(t, r);
                      };
                    case 2:
                      return function (r, n) {
                        return e.call(t, r, n);
                      };
                    case 3:
                      return function (r, n, o) {
                        return e.call(t, r, n, o);
                      };
                  }
                  return function () {
                    return e.apply(t, arguments);
                  };
                };
              },
              { "./$.a-function": 19 },
            ],
            29: [
              function (e, t, r) {
                t.exports = function (e) {
                  if (void 0 == e)
                    throw TypeError("Can't call method on  " + e);
                  return e;
                };
              },
              {},
            ],
            30: [
              function (e, t, r) {
                t.exports = !e("./$.fails")(function () {
                  return (
                    7 !=
                    Object.defineProperty({}, "a", {
                      get: function () {
                        return 7;
                      },
                    }).a
                  );
                });
              },
              { "./$.fails": 33 },
            ],
            31: [
              function (e, t, r) {
                var n = e("./$.is-object"),
                  o = e("./$.global").document,
                  i = n(o) && n(o.createElement);
                t.exports = function (e) {
                  return i ? o.createElement(e) : {};
                };
              },
              { "./$.global": 35, "./$.is-object": 42 },
            ],
            32: [
              function (e, t, r) {
                var n = e("./$.global"),
                  o = e("./$.core"),
                  i = e("./$.ctx"),
                  a = "prototype",
                  s = function (e, t, r) {
                    var u,
                      c,
                      l,
                      f = e & s.F,
                      h = e & s.G,
                      d = e & s.S,
                      p = e & s.P,
                      m = e & s.B,
                      g = e & s.W,
                      v = h ? o : o[t] || (o[t] = {}),
                      b = h ? n : d ? n[t] : (n[t] || {})[a];
                    h && (r = t);
                    for (u in r)
                      (c = !f && b && u in b),
                        (c && u in v) ||
                          ((l = c ? b[u] : r[u]),
                          (v[u] =
                            h && "function" != typeof b[u]
                              ? r[u]
                              : m && c
                              ? i(l, n)
                              : g && b[u] == l
                              ? (function (e) {
                                  var t = function (t) {
                                    return this instanceof e ? new e(t) : e(t);
                                  };
                                  return (t[a] = e[a]), t;
                                })(l)
                              : p && "function" == typeof l
                              ? i(Function.call, l)
                              : l),
                          p && ((v[a] || (v[a] = {}))[u] = l));
                  };
                (s.F = 1),
                  (s.G = 2),
                  (s.S = 4),
                  (s.P = 8),
                  (s.B = 16),
                  (s.W = 32),
                  (t.exports = s);
              },
              { "./$.core": 27, "./$.ctx": 28, "./$.global": 35 },
            ],
            33: [
              function (e, t, r) {
                t.exports = function (e) {
                  try {
                    return !!e();
                  } catch (e) {
                    return !0;
                  }
                };
              },
              {},
            ],
            34: [
              function (e, t, r) {
                var n = e("./$.ctx"),
                  o = e("./$.iter-call"),
                  i = e("./$.is-array-iter"),
                  a = e("./$.an-object"),
                  s = e("./$.to-length"),
                  u = e("./core.get-iterator-method");
                t.exports = function (e, t, r, c) {
                  var l,
                    f,
                    h,
                    d = u(e),
                    p = n(r, c, t ? 2 : 1),
                    m = 0;
                  if ("function" != typeof d)
                    throw TypeError(e + " is not iterable!");
                  if (i(d))
                    for (l = s(e.length); l > m; m++)
                      t ? p(a((f = e[m]))[0], f[1]) : p(e[m]);
                  else
                    for (h = d.call(e); !(f = h.next()).done; )
                      o(h, p, f.value, t);
                };
              },
              {
                "./$.an-object": 21,
                "./$.ctx": 28,
                "./$.is-array-iter": 41,
                "./$.iter-call": 43,
                "./$.to-length": 68,
                "./core.get-iterator-method": 72,
              },
            ],
            35: [
              function (e, t, r) {
                var n = (t.exports =
                  "undefined" != typeof window && window.Math == Math
                    ? window
                    : "undefined" != typeof self && self.Math == Math
                    ? self
                    : Function("return this")());
                "number" == typeof __g && (__g = n);
              },
              {},
            ],
            36: [
              function (e, t, r) {
                var n = {}.hasOwnProperty;
                t.exports = function (e, t) {
                  return n.call(e, t);
                };
              },
              {},
            ],
            37: [
              function (e, t, r) {
                var n = e("./$"),
                  o = e("./$.property-desc");
                t.exports = e("./$.descriptors")
                  ? function (e, t, r) {
                      return n.setDesc(e, t, o(1, r));
                    }
                  : function (e, t, r) {
                      return (e[t] = r), e;
                    };
              },
              { "./$": 49, "./$.descriptors": 30, "./$.property-desc": 54 },
            ],
            38: [
              function (e, t, r) {
                t.exports =
                  e("./$.global").document && document.documentElement;
              },
              { "./$.global": 35 },
            ],
            39: [
              function (e, t, r) {
                t.exports = function (e, t, r) {
                  var n = void 0 === r;
                  switch (t.length) {
                    case 0:
                      return n ? e() : e.call(r);
                    case 1:
                      return n ? e(t[0]) : e.call(r, t[0]);
                    case 2:
                      return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
                    case 3:
                      return n
                        ? e(t[0], t[1], t[2])
                        : e.call(r, t[0], t[1], t[2]);
                    case 4:
                      return n
                        ? e(t[0], t[1], t[2], t[3])
                        : e.call(r, t[0], t[1], t[2], t[3]);
                  }
                  return e.apply(r, t);
                };
              },
              {},
            ],
            40: [
              function (e, t, r) {
                var n = e("./$.cof");
                t.exports = Object("z").propertyIsEnumerable(0)
                  ? Object
                  : function (e) {
                      return "String" == n(e) ? e.split("") : Object(e);
                    };
              },
              { "./$.cof": 23 },
            ],
            41: [
              function (e, t, r) {
                var n = e("./$.iterators"),
                  o = e("./$.wks")("iterator"),
                  i = Array.prototype;
                t.exports = function (e) {
                  return void 0 !== e && (n.Array === e || i[o] === e);
                };
              },
              { "./$.iterators": 48, "./$.wks": 71 },
            ],
            42: [
              function (e, t, r) {
                t.exports = function (e) {
                  return "object" == typeof e
                    ? null !== e
                    : "function" == typeof e;
                };
              },
              {},
            ],
            43: [
              function (e, t, r) {
                var n = e("./$.an-object");
                t.exports = function (e, t, r, o) {
                  try {
                    return o ? t(n(r)[0], r[1]) : t(r);
                  } catch (t) {
                    var i = e.return;
                    throw (void 0 !== i && n(i.call(e)), t);
                  }
                };
              },
              { "./$.an-object": 21 },
            ],
            44: [
              function (e, t, r) {
                "use strict";
                var n = e("./$"),
                  o = e("./$.property-desc"),
                  i = e("./$.set-to-string-tag"),
                  a = {};
                e("./$.hide")(a, e("./$.wks")("iterator"), function () {
                  return this;
                }),
                  (t.exports = function (e, t, r) {
                    (e.prototype = n.create(a, { next: o(1, r) })),
                      i(e, t + " Iterator");
                  });
              },
              {
                "./$": 49,
                "./$.hide": 37,
                "./$.property-desc": 54,
                "./$.set-to-string-tag": 60,
                "./$.wks": 71,
              },
            ],
            45: [
              function (e, t, r) {
                "use strict";
                var n = e("./$.library"),
                  o = e("./$.export"),
                  i = e("./$.redefine"),
                  a = e("./$.hide"),
                  s = e("./$.has"),
                  u = e("./$.iterators"),
                  c = e("./$.iter-create"),
                  l = e("./$.set-to-string-tag"),
                  f = e("./$").getProto,
                  h = e("./$.wks")("iterator"),
                  d = !([].keys && "next" in [].keys()),
                  p = "@@iterator",
                  m = "keys",
                  g = "values",
                  v = function () {
                    return this;
                  };
                t.exports = function (e, t, r, b, y, $, E) {
                  c(r, t, b);
                  var T,
                    x,
                    w = function (e) {
                      if (!d && e in A) return A[e];
                      switch (e) {
                        case m:
                          return function () {
                            return new r(this, e);
                          };
                        case g:
                          return function () {
                            return new r(this, e);
                          };
                      }
                      return function () {
                        return new r(this, e);
                      };
                    },
                    _ = t + " Iterator",
                    M = y == g,
                    L = !1,
                    A = e.prototype,
                    j = A[h] || A[p] || (y && A[y]),
                    R = j || w(y);
                  if (j) {
                    var S = f(R.call(new e()));
                    l(S, _, !0),
                      !n && s(A, p) && a(S, h, v),
                      M &&
                        j.name !== g &&
                        ((L = !0),
                        (R = function () {
                          return j.call(this);
                        }));
                  }
                  if (
                    ((n && !E) || (!d && !L && A[h]) || a(A, h, R),
                    (u[t] = R),
                    (u[_] = v),
                    y)
                  )
                    if (
                      ((T = {
                        values: M ? R : w(g),
                        keys: $ ? R : w(m),
                        entries: M ? w("entries") : R,
                      }),
                      E)
                    )
                      for (x in T) x in A || i(A, x, T[x]);
                    else o(o.P + o.F * (d || L), t, T);
                  return T;
                };
              },
              {
                "./$": 49,
                "./$.export": 32,
                "./$.has": 36,
                "./$.hide": 37,
                "./$.iter-create": 44,
                "./$.iterators": 48,
                "./$.library": 50,
                "./$.redefine": 56,
                "./$.set-to-string-tag": 60,
                "./$.wks": 71,
              },
            ],
            46: [
              function (e, t, r) {
                var n = e("./$.wks")("iterator"),
                  o = !1;
                try {
                  var i = [7][n]();
                  (i.return = function () {
                    o = !0;
                  }),
                    Array.from(i, function () {
                      throw 2;
                    });
                } catch (e) {}
                t.exports = function (e, t) {
                  if (!t && !o) return !1;
                  var r = !1;
                  try {
                    var i = [7],
                      a = i[n]();
                    (a.next = function () {
                      r = !0;
                    }),
                      (i[n] = function () {
                        return a;
                      }),
                      e(i);
                  } catch (e) {}
                  return r;
                };
              },
              { "./$.wks": 71 },
            ],
            47: [
              function (e, t, r) {
                t.exports = function (e, t) {
                  return { value: t, done: !!e };
                };
              },
              {},
            ],
            48: [
              function (e, t, r) {
                t.exports = {};
              },
              {},
            ],
            49: [
              function (e, t, r) {
                var n = Object;
                t.exports = {
                  create: n.create,
                  getProto: n.getPrototypeOf,
                  isEnum: {}.propertyIsEnumerable,
                  getDesc: n.getOwnPropertyDescriptor,
                  setDesc: n.defineProperty,
                  setDescs: n.defineProperties,
                  getKeys: n.keys,
                  getNames: n.getOwnPropertyNames,
                  getSymbols: n.getOwnPropertySymbols,
                  each: [].forEach,
                };
              },
              {},
            ],
            50: [
              function (e, t, r) {
                t.exports = !0;
              },
              {},
            ],
            51: [
              function (e, t, r) {
                var n,
                  o,
                  i,
                  a = e("./$.global"),
                  s = e("./$.task").set,
                  u = a.MutationObserver || a.WebKitMutationObserver,
                  c = a.process,
                  l = a.Promise,
                  f = "process" == e("./$.cof")(c),
                  h = function () {
                    var e, t, r;
                    for (
                      f && (e = c.domain) && ((c.domain = null), e.exit());
                      n;

                    )
                      (t = n.domain),
                        (r = n.fn),
                        t && t.enter(),
                        r(),
                        t && t.exit(),
                        (n = n.next);
                    (o = void 0), e && e.enter();
                  };
                if (f)
                  i = function () {
                    c.nextTick(h);
                  };
                else if (u) {
                  var d = 1,
                    p = document.createTextNode("");
                  new u(h).observe(p, { characterData: !0 }),
                    (i = function () {
                      p.data = d = -d;
                    });
                } else
                  i =
                    l && l.resolve
                      ? function () {
                          l.resolve().then(h);
                        }
                      : function () {
                          s.call(a, h);
                        };
                t.exports = function (e) {
                  var t = { fn: e, next: void 0, domain: f && c.domain };
                  o && (o.next = t), n || ((n = t), i()), (o = t);
                };
              },
              { "./$.cof": 23, "./$.global": 35, "./$.task": 65 },
            ],
            52: [
              function (e, t, r) {
                var n = e("./$"),
                  o = e("./$.to-object"),
                  i = e("./$.iobject");
                t.exports = e("./$.fails")(function () {
                  var e = Object.assign,
                    t = {},
                    r = {},
                    n = Symbol(),
                    o = "abcdefghijklmnopqrst";
                  return (
                    (t[n] = 7),
                    o.split("").forEach(function (e) {
                      r[e] = e;
                    }),
                    7 != e({}, t)[n] || Object.keys(e({}, r)).join("") != o
                  );
                })
                  ? function (e, t) {
                      for (
                        var r = o(e),
                          a = arguments,
                          s = a.length,
                          u = 1,
                          c = n.getKeys,
                          l = n.getSymbols,
                          f = n.isEnum;
                        s > u;

                      )
                        for (
                          var h,
                            d = i(a[u++]),
                            p = l ? c(d).concat(l(d)) : c(d),
                            m = p.length,
                            g = 0;
                          m > g;

                        )
                          f.call(d, (h = p[g++])) && (r[h] = d[h]);
                      return r;
                    }
                  : Object.assign;
              },
              {
                "./$": 49,
                "./$.fails": 33,
                "./$.iobject": 40,
                "./$.to-object": 69,
              },
            ],
            53: [
              function (e, t, r) {
                var n = e("./$.export"),
                  o = e("./$.core"),
                  i = e("./$.fails");
                t.exports = function (e, t) {
                  var r = (o.Object || {})[e] || Object[e],
                    a = {};
                  (a[e] = t(r)),
                    n(
                      n.S +
                        n.F *
                          i(function () {
                            r(1);
                          }),
                      "Object",
                      a
                    );
                };
              },
              { "./$.core": 27, "./$.export": 32, "./$.fails": 33 },
            ],
            54: [
              function (e, t, r) {
                t.exports = function (e, t) {
                  return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t,
                  };
                };
              },
              {},
            ],
            55: [
              function (e, t, r) {
                var n = e("./$.redefine");
                t.exports = function (e, t) {
                  for (var r in t) n(e, r, t[r]);
                  return e;
                };
              },
              { "./$.redefine": 56 },
            ],
            56: [
              function (e, t, r) {
                t.exports = e("./$.hide");
              },
              { "./$.hide": 37 },
            ],
            57: [
              function (e, t, r) {
                t.exports =
                  Object.is ||
                  function (e, t) {
                    return e === t
                      ? 0 !== e || 1 / e === 1 / t
                      : e != e && t != t;
                  };
              },
              {},
            ],
            58: [
              function (e, t, r) {
                var n = e("./$").getDesc,
                  o = e("./$.is-object"),
                  i = e("./$.an-object"),
                  a = function (e, t) {
                    if ((i(e), !o(t) && null !== t))
                      throw TypeError(t + ": can't set as prototype!");
                  };
                t.exports = {
                  set:
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                      ? (function (t, r, o) {
                          try {
                            (o = e("./$.ctx")(
                              Function.call,
                              n(Object.prototype, "__proto__").set,
                              2
                            )),
                              o(t, []),
                              (r = !(t instanceof Array));
                          } catch (e) {
                            r = !0;
                          }
                          return function (e, t) {
                            return a(e, t), r ? (e.__proto__ = t) : o(e, t), e;
                          };
                        })({}, !1)
                      : void 0),
                  check: a,
                };
              },
              {
                "./$": 49,
                "./$.an-object": 21,
                "./$.ctx": 28,
                "./$.is-object": 42,
              },
            ],
            59: [
              function (e, t, r) {
                "use strict";
                var n = e("./$.core"),
                  o = e("./$"),
                  i = e("./$.descriptors"),
                  a = e("./$.wks")("species");
                t.exports = function (e) {
                  var t = n[e];
                  i &&
                    t &&
                    !t[a] &&
                    o.setDesc(t, a, {
                      configurable: !0,
                      get: function () {
                        return this;
                      },
                    });
                };
              },
              {
                "./$": 49,
                "./$.core": 27,
                "./$.descriptors": 30,
                "./$.wks": 71,
              },
            ],
            60: [
              function (e, t, r) {
                var n = e("./$").setDesc,
                  o = e("./$.has"),
                  i = e("./$.wks")("toStringTag");
                t.exports = function (e, t, r) {
                  e &&
                    !o((e = r ? e : e.prototype), i) &&
                    n(e, i, { configurable: !0, value: t });
                };
              },
              { "./$": 49, "./$.has": 36, "./$.wks": 71 },
            ],
            61: [
              function (e, t, r) {
                var n = e("./$.global"),
                  o = "__core-js_shared__",
                  i = n[o] || (n[o] = {});
                t.exports = function (e) {
                  return i[e] || (i[e] = {});
                };
              },
              { "./$.global": 35 },
            ],
            62: [
              function (e, t, r) {
                var n = e("./$.an-object"),
                  o = e("./$.a-function"),
                  i = e("./$.wks")("species");
                t.exports = function (e, t) {
                  var r,
                    a = n(e).constructor;
                  return void 0 === a || void 0 == (r = n(a)[i]) ? t : o(r);
                };
              },
              { "./$.a-function": 19, "./$.an-object": 21, "./$.wks": 71 },
            ],
            63: [
              function (e, t, r) {
                t.exports = function (e, t, r) {
                  if (!(e instanceof t))
                    throw TypeError(r + ": use the 'new' operator!");
                  return e;
                };
              },
              {},
            ],
            64: [
              function (e, t, r) {
                var n = e("./$.to-integer"),
                  o = e("./$.defined");
                t.exports = function (e) {
                  return function (t, r) {
                    var i,
                      a,
                      s = String(o(t)),
                      u = n(r),
                      c = s.length;
                    return u < 0 || u >= c
                      ? e
                        ? ""
                        : void 0
                      : ((i = s.charCodeAt(u)),
                        i < 55296 ||
                        i > 56319 ||
                        u + 1 === c ||
                        (a = s.charCodeAt(u + 1)) < 56320 ||
                        a > 57343
                          ? e
                            ? s.charAt(u)
                            : i
                          : e
                          ? s.slice(u, u + 2)
                          : ((i - 55296) << 10) + (a - 56320) + 65536);
                  };
                };
              },
              { "./$.defined": 29, "./$.to-integer": 66 },
            ],
            65: [
              function (e, t, r) {
                var n,
                  o,
                  i,
                  a = e("./$.ctx"),
                  s = e("./$.invoke"),
                  u = e("./$.html"),
                  c = e("./$.dom-create"),
                  l = e("./$.global"),
                  f = l.process,
                  h = l.setImmediate,
                  d = l.clearImmediate,
                  p = l.MessageChannel,
                  m = 0,
                  g = {},
                  v = "onreadystatechange",
                  b = function () {
                    var e = +this;
                    if (g.hasOwnProperty(e)) {
                      var t = g[e];
                      delete g[e], t();
                    }
                  },
                  y = function (e) {
                    b.call(e.data);
                  };
                (h && d) ||
                  ((h = function (e) {
                    for (var t = [], r = 1; arguments.length > r; )
                      t.push(arguments[r++]);
                    return (
                      (g[++m] = function () {
                        s("function" == typeof e ? e : Function(e), t);
                      }),
                      n(m),
                      m
                    );
                  }),
                  (d = function (e) {
                    delete g[e];
                  }),
                  "process" == e("./$.cof")(f)
                    ? (n = function (e) {
                        f.nextTick(a(b, e, 1));
                      })
                    : p
                    ? ((o = new p()),
                      (i = o.port2),
                      (o.port1.onmessage = y),
                      (n = a(i.postMessage, i, 1)))
                    : l.addEventListener &&
                      "function" == typeof postMessage &&
                      !l.importScripts
                    ? ((n = function (e) {
                        l.postMessage(e + "", "*");
                      }),
                      l.addEventListener("message", y, !1))
                    : (n =
                        v in c("script")
                          ? function (e) {
                              u.appendChild(c("script"))[v] = function () {
                                u.removeChild(this), b.call(e);
                              };
                            }
                          : function (e) {
                              setTimeout(a(b, e, 1), 0);
                            })),
                  (t.exports = { set: h, clear: d });
              },
              {
                "./$.cof": 23,
                "./$.ctx": 28,
                "./$.dom-create": 31,
                "./$.global": 35,
                "./$.html": 38,
                "./$.invoke": 39,
              },
            ],
            66: [
              function (e, t, r) {
                var n = Math.ceil,
                  o = Math.floor;
                t.exports = function (e) {
                  return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e);
                };
              },
              {},
            ],
            67: [
              function (e, t, r) {
                var n = e("./$.iobject"),
                  o = e("./$.defined");
                t.exports = function (e) {
                  return n(o(e));
                };
              },
              { "./$.defined": 29, "./$.iobject": 40 },
            ],
            68: [
              function (e, t, r) {
                var n = e("./$.to-integer"),
                  o = Math.min;
                t.exports = function (e) {
                  return e > 0 ? o(n(e), 9007199254740991) : 0;
                };
              },
              { "./$.to-integer": 66 },
            ],
            69: [
              function (e, t, r) {
                var n = e("./$.defined");
                t.exports = function (e) {
                  return Object(n(e));
                };
              },
              { "./$.defined": 29 },
            ],
            70: [
              function (e, t, r) {
                var n = 0,
                  o = Math.random();
                t.exports = function (e) {
                  return "Symbol(".concat(
                    void 0 === e ? "" : e,
                    ")_",
                    (++n + o).toString(36)
                  );
                };
              },
              {},
            ],
            71: [
              function (e, t, r) {
                var n = e("./$.shared")("wks"),
                  o = e("./$.uid"),
                  i = e("./$.global").Symbol;
                t.exports = function (e) {
                  return (
                    n[e] || (n[e] = (i && i[e]) || (i || o)("Symbol." + e))
                  );
                };
              },
              { "./$.global": 35, "./$.shared": 61, "./$.uid": 70 },
            ],
            72: [
              function (e, t, r) {
                var n = e("./$.classof"),
                  o = e("./$.wks")("iterator"),
                  i = e("./$.iterators");
                t.exports = e("./$.core").getIteratorMethod = function (e) {
                  if (void 0 != e) return e[o] || e["@@iterator"] || i[n(e)];
                };
              },
              {
                "./$.classof": 22,
                "./$.core": 27,
                "./$.iterators": 48,
                "./$.wks": 71,
              },
            ],
            73: [
              function (e, t, r) {
                var n = e("./$.an-object"),
                  o = e("./core.get-iterator-method");
                t.exports = e("./$.core").getIterator = function (e) {
                  var t = o(e);
                  if ("function" != typeof t)
                    throw TypeError(e + " is not iterable!");
                  return n(t.call(e));
                };
              },
              {
                "./$.an-object": 21,
                "./$.core": 27,
                "./core.get-iterator-method": 72,
              },
            ],
            74: [
              function (e, t, r) {
                "use strict";
                var n = e("./$.ctx"),
                  o = e("./$.export"),
                  i = e("./$.to-object"),
                  a = e("./$.iter-call"),
                  s = e("./$.is-array-iter"),
                  u = e("./$.to-length"),
                  c = e("./core.get-iterator-method");
                o(
                  o.S +
                    o.F *
                      !e("./$.iter-detect")(function (e) {
                        Array.from(e);
                      }),
                  "Array",
                  {
                    from: function (e) {
                      var t,
                        r,
                        o,
                        l,
                        f = i(e),
                        h = "function" == typeof this ? this : Array,
                        d = arguments,
                        p = d.length,
                        m = p > 1 ? d[1] : void 0,
                        g = void 0 !== m,
                        v = 0,
                        b = c(f);
                      if (
                        (g && (m = n(m, p > 2 ? d[2] : void 0, 2)),
                        void 0 == b || (h == Array && s(b)))
                      )
                        for (t = u(f.length), r = new h(t); t > v; v++)
                          r[v] = g ? m(f[v], v) : f[v];
                      else
                        for (
                          l = b.call(f), r = new h();
                          !(o = l.next()).done;
                          v++
                        )
                          r[v] = g ? a(l, m, [o.value, v], !0) : o.value;
                      return (r.length = v), r;
                    },
                  }
                );
              },
              {
                "./$.ctx": 28,
                "./$.export": 32,
                "./$.is-array-iter": 41,
                "./$.iter-call": 43,
                "./$.iter-detect": 46,
                "./$.to-length": 68,
                "./$.to-object": 69,
                "./core.get-iterator-method": 72,
              },
            ],
            75: [
              function (e, t, r) {
                "use strict";
                var n = e("./$.add-to-unscopables"),
                  o = e("./$.iter-step"),
                  i = e("./$.iterators"),
                  a = e("./$.to-iobject");
                (t.exports = e("./$.iter-define")(
                  Array,
                  "Array",
                  function (e, t) {
                    (this._t = a(e)), (this._i = 0), (this._k = t);
                  },
                  function () {
                    var e = this._t,
                      t = this._k,
                      r = this._i++;
                    return !e || r >= e.length
                      ? ((this._t = void 0), o(1))
                      : "keys" == t
                      ? o(0, r)
                      : "values" == t
                      ? o(0, e[r])
                      : o(0, [r, e[r]]);
                  },
                  "values"
                )),
                  (i.Arguments = i.Array),
                  n("keys"),
                  n("values"),
                  n("entries");
              },
              {
                "./$.add-to-unscopables": 20,
                "./$.iter-define": 45,
                "./$.iter-step": 47,
                "./$.iterators": 48,
                "./$.to-iobject": 67,
              },
            ],
            76: [
              function (e, t, r) {
                var n = e("./$.export");
                n(n.S + n.F, "Object", { assign: e("./$.object-assign") });
              },
              { "./$.export": 32, "./$.object-assign": 52 },
            ],
            77: [
              function (e, t, r) {
                var n = e("./$.to-object");
                e("./$.object-sap")("keys", function (e) {
                  return function (t) {
                    return e(n(t));
                  };
                });
              },
              { "./$.object-sap": 53, "./$.to-object": 69 },
            ],
            78: [function (e, t, r) {}, {}],
            79: [
              function (e, t, r) {
                "use strict";
                var n,
                  o = e("./$"),
                  i = e("./$.library"),
                  a = e("./$.global"),
                  s = e("./$.ctx"),
                  u = e("./$.classof"),
                  c = e("./$.export"),
                  l = e("./$.is-object"),
                  f = e("./$.an-object"),
                  h = e("./$.a-function"),
                  d = e("./$.strict-new"),
                  p = e("./$.for-of"),
                  m = e("./$.set-proto").set,
                  g = e("./$.same-value"),
                  v = e("./$.wks")("species"),
                  b = e("./$.species-constructor"),
                  y = e("./$.microtask"),
                  $ = "Promise",
                  E = a.process,
                  T = "process" == u(E),
                  x = a[$],
                  w = function (e) {
                    var t = new x(function () {});
                    return e && (t.constructor = Object), x.resolve(t) === t;
                  },
                  _ = (function () {
                    function t(e) {
                      var r = new x(e);
                      return m(r, t.prototype), r;
                    }
                    var r = !1;
                    try {
                      if (
                        ((r = x && x.resolve && w()),
                        m(t, x),
                        (t.prototype = o.create(x.prototype, {
                          constructor: { value: t },
                        })),
                        t.resolve(5).then(function () {}) instanceof t ||
                          (r = !1),
                        r && e("./$.descriptors"))
                      ) {
                        var n = !1;
                        x.resolve(
                          o.setDesc({}, "then", {
                            get: function () {
                              n = !0;
                            },
                          })
                        ),
                          (r = n);
                      }
                    } catch (e) {
                      r = !1;
                    }
                    return r;
                  })(),
                  M = function (e, t) {
                    return !(!i || e !== x || t !== n) || g(e, t);
                  },
                  L = function (e) {
                    var t = f(e)[v];
                    return void 0 != t ? t : e;
                  },
                  A = function (e) {
                    var t;
                    return !(!l(e) || "function" != typeof (t = e.then)) && t;
                  },
                  j = function (e) {
                    var t, r;
                    (this.promise = new e(function (e, n) {
                      if (void 0 !== t || void 0 !== r)
                        throw TypeError("Bad Promise constructor");
                      (t = e), (r = n);
                    })),
                      (this.resolve = h(t)),
                      (this.reject = h(r));
                  },
                  R = function (e) {
                    try {
                      e();
                    } catch (e) {
                      return { error: e };
                    }
                  },
                  S = function (e, t) {
                    if (!e.n) {
                      e.n = !0;
                      var r = e.c;
                      y(function () {
                        for (
                          var n = e.v,
                            o = 1 == e.s,
                            i = 0,
                            s = function (t) {
                              var r,
                                i,
                                a = o ? t.ok : t.fail,
                                s = t.resolve,
                                u = t.reject;
                              try {
                                a
                                  ? (o || (e.h = !0),
                                    (r = a === !0 ? n : a(n)),
                                    r === t.promise
                                      ? u(TypeError("Promise-chain cycle"))
                                      : (i = A(r))
                                      ? i.call(r, s, u)
                                      : s(r))
                                  : u(n);
                              } catch (e) {
                                u(e);
                              }
                            };
                          r.length > i;

                        )
                          s(r[i++]);
                        (r.length = 0),
                          (e.n = !1),
                          t &&
                            setTimeout(function () {
                              var t,
                                r,
                                o = e.p;
                              H(o) &&
                                (T
                                  ? E.emit("unhandledRejection", n, o)
                                  : (t = a.onunhandledrejection)
                                  ? t({ promise: o, reason: n })
                                  : (r = a.console) &&
                                    r.error &&
                                    r.error("Unhandled promise rejection", n)),
                                (e.a = void 0);
                            }, 1);
                      });
                    }
                  },
                  H = function (e) {
                    var t,
                      r = e._d,
                      n = r.a || r.c,
                      o = 0;
                    if (r.h) return !1;
                    for (; n.length > o; )
                      if (((t = n[o++]), t.fail || !H(t.promise))) return !1;
                    return !0;
                  },
                  P = function (e) {
                    var t = this;
                    t.d ||
                      ((t.d = !0),
                      (t = t.r || t),
                      (t.v = e),
                      (t.s = 2),
                      (t.a = t.c.slice()),
                      S(t, !0));
                  },
                  k = function (e) {
                    var t,
                      r = this;
                    if (!r.d) {
                      (r.d = !0), (r = r.r || r);
                      try {
                        if (r.p === e)
                          throw TypeError("Promise can't be resolved itself");
                        (t = A(e))
                          ? y(function () {
                              var n = { r: r, d: !1 };
                              try {
                                t.call(e, s(k, n, 1), s(P, n, 1));
                              } catch (e) {
                                P.call(n, e);
                              }
                            })
                          : ((r.v = e), (r.s = 1), S(r, !1));
                      } catch (e) {
                        P.call({ r: r, d: !1 }, e);
                      }
                    }
                  };
                _ ||
                  ((x = function (e) {
                    h(e);
                    var t = (this._d = {
                      p: d(this, x, $),
                      c: [],
                      a: void 0,
                      s: 0,
                      d: !1,
                      v: void 0,
                      h: !1,
                      n: !1,
                    });
                    try {
                      e(s(k, t, 1), s(P, t, 1));
                    } catch (e) {
                      P.call(t, e);
                    }
                  }),
                  e("./$.redefine-all")(x.prototype, {
                    then: function (e, t) {
                      var r = new j(b(this, x)),
                        n = r.promise,
                        o = this._d;
                      return (
                        (r.ok = "function" != typeof e || e),
                        (r.fail = "function" == typeof t && t),
                        o.c.push(r),
                        o.a && o.a.push(r),
                        o.s && S(o, !1),
                        n
                      );
                    },
                    catch: function (e) {
                      return this.then(void 0, e);
                    },
                  })),
                  c(c.G + c.W + c.F * !_, { Promise: x }),
                  e("./$.set-to-string-tag")(x, $),
                  e("./$.set-species")($),
                  (n = e("./$.core")[$]),
                  c(c.S + c.F * !_, $, {
                    reject: function (e) {
                      var t = new j(this),
                        r = t.reject;
                      return r(e), t.promise;
                    },
                  }),
                  c(c.S + c.F * (!_ || w(!0)), $, {
                    resolve: function (e) {
                      if (e instanceof x && M(e.constructor, this)) return e;
                      var t = new j(this),
                        r = t.resolve;
                      return r(e), t.promise;
                    },
                  }),
                  c(
                    c.S +
                      c.F *
                        !(
                          _ &&
                          e("./$.iter-detect")(function (e) {
                            x.all(e).catch(function () {});
                          })
                        ),
                    $,
                    {
                      all: function (e) {
                        var t = L(this),
                          r = new j(t),
                          n = r.resolve,
                          i = r.reject,
                          a = [],
                          s = R(function () {
                            p(e, !1, a.push, a);
                            var r = a.length,
                              s = Array(r);
                            r
                              ? o.each.call(a, function (e, o) {
                                  var a = !1;
                                  t.resolve(e).then(function (e) {
                                    a || ((a = !0), (s[o] = e), --r || n(s));
                                  }, i);
                                })
                              : n(s);
                          });
                        return s && i(s.error), r.promise;
                      },
                      race: function (e) {
                        var t = L(this),
                          r = new j(t),
                          n = r.reject,
                          o = R(function () {
                            p(e, !1, function (e) {
                              t.resolve(e).then(r.resolve, n);
                            });
                          });
                        return o && n(o.error), r.promise;
                      },
                    }
                  );
              },
              {
                "./$": 49,
                "./$.a-function": 19,
                "./$.an-object": 21,
                "./$.classof": 22,
                "./$.core": 27,
                "./$.ctx": 28,
                "./$.descriptors": 30,
                "./$.export": 32,
                "./$.for-of": 34,
                "./$.global": 35,
                "./$.is-object": 42,
                "./$.iter-detect": 46,
                "./$.library": 50,
                "./$.microtask": 51,
                "./$.redefine-all": 55,
                "./$.same-value": 57,
                "./$.set-proto": 58,
                "./$.set-species": 59,
                "./$.set-to-string-tag": 60,
                "./$.species-constructor": 62,
                "./$.strict-new": 63,
                "./$.wks": 71,
              },
            ],
            80: [
              function (e, t, r) {
                "use strict";
                var n = e("./$.collection-strong");
                e("./$.collection")(
                  "Set",
                  function (e) {
                    return function () {
                      return e(
                        this,
                        arguments.length > 0 ? arguments[0] : void 0
                      );
                    };
                  },
                  {
                    add: function (e) {
                      return n.def(this, (e = 0 === e ? 0 : e), e);
                    },
                  },
                  n
                );
              },
              { "./$.collection": 26, "./$.collection-strong": 24 },
            ],
            81: [
              function (e, t, r) {
                "use strict";
                var n = e("./$.string-at")(!0);
                e("./$.iter-define")(
                  String,
                  "String",
                  function (e) {
                    (this._t = String(e)), (this._i = 0);
                  },
                  function () {
                    var e,
                      t = this._t,
                      r = this._i;
                    return r >= t.length
                      ? { value: void 0, done: !0 }
                      : ((e = n(t, r)),
                        (this._i += e.length),
                        { value: e, done: !1 });
                  }
                );
              },
              { "./$.iter-define": 45, "./$.string-at": 64 },
            ],
            82: [
              function (e, t, r) {
                var n = e("./$.export");
                n(n.P, "Set", { toJSON: e("./$.collection-to-json")("Set") });
              },
              { "./$.collection-to-json": 25, "./$.export": 32 },
            ],
            83: [
              function (e, t, r) {
                e("./es6.array.iterator");
                var n = e("./$.iterators");
                n.NodeList = n.HTMLCollection = n.Array;
              },
              { "./$.iterators": 48, "./es6.array.iterator": 75 },
            ],
            84: [
              function (e, t, r) {
                function n(e, t, r) {
                  if (!s(t)) throw new TypeError("iterator must be a function");
                  arguments.length < 3 && (r = this),
                    "[object Array]" === u.call(e)
                      ? o(e, t, r)
                      : "string" == typeof e
                      ? i(e, t, r)
                      : a(e, t, r);
                }
                function o(e, t, r) {
                  for (var n = 0, o = e.length; n < o; n++)
                    c.call(e, n) && t.call(r, e[n], n, e);
                }
                function i(e, t, r) {
                  for (var n = 0, o = e.length; n < o; n++)
                    t.call(r, e.charAt(n), n, e);
                }
                function a(e, t, r) {
                  for (var n in e) c.call(e, n) && t.call(r, e[n], n, e);
                }
                var s = e("is-function");
                t.exports = n;
                var u = Object.prototype.toString,
                  c = Object.prototype.hasOwnProperty;
              },
              { "is-function": 86 },
            ],
            85: [
              function (e, r, n) {
                (function (e) {
                  "undefined" != typeof window
                    ? (r.exports = window)
                    : "undefined" != typeof e
                    ? (r.exports = e)
                    : "undefined" != typeof self
                    ? (r.exports = self)
                    : (r.exports = {});
                }.call(
                  this,
                  "undefined" != typeof t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            86: [
              function (e, t, r) {
                function n(e) {
                  var t = o.call(e);
                  return (
                    "[object Function]" === t ||
                    ("function" == typeof e && "[object RegExp]" !== t) ||
                    ("undefined" != typeof window &&
                      (e === window.setTimeout ||
                        e === window.alert ||
                        e === window.confirm ||
                        e === window.prompt))
                  );
                }
                t.exports = n;
                var o = Object.prototype.toString;
              },
              {},
            ],
            87: [
              function (e, t, r) {
                var n = e("trim"),
                  o = e("for-each"),
                  i = function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  };
                t.exports = function (e) {
                  if (!e) return {};
                  var t = {};
                  return (
                    o(n(e).split("\n"), function (e) {
                      var r = e.indexOf(":"),
                        o = n(e.slice(0, r)).toLowerCase(),
                        a = n(e.slice(r + 1));
                      "undefined" == typeof t[o]
                        ? (t[o] = a)
                        : i(t[o])
                        ? t[o].push(a)
                        : (t[o] = [t[o], a]);
                    }),
                    t
                  );
                };
              },
              { "for-each": 84, trim: 88 },
            ],
            88: [
              function (e, t, r) {
                function n(e) {
                  return e.replace(/^\s*|\s*$/g, "");
                }
                (r = t.exports = n),
                  (r.left = function (e) {
                    return e.replace(/^\s*/, "");
                  }),
                  (r.right = function (e) {
                    return e.replace(/\s*$/, "");
                  });
              },
              {},
            ],
            89: [
              function (e, t, r) {
                "use strict";
                function n(e, t) {
                  for (var r = 0; r < e.length; r++) t(e[r]);
                }
                function o(e) {
                  for (var t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
                }
                function i(e, t, r) {
                  var n = e;
                  return (
                    f(t)
                      ? ((r = t), "string" == typeof e && (n = { uri: e }))
                      : (n = d(t, { uri: e })),
                    (n.callback = r),
                    n
                  );
                }
                function a(e, t, r) {
                  return (t = i(e, t, r)), s(t);
                }
                function s(e) {
                  function t() {
                    4 === c.readyState && i();
                  }
                  function r() {
                    var e = void 0;
                    if (
                      (c.response
                        ? (e = c.response)
                        : ("text" !== c.responseType && c.responseType) ||
                          (e = c.responseText || c.responseXML),
                      $)
                    )
                      try {
                        e = JSON.parse(e);
                      } catch (e) {}
                    return e;
                  }
                  function n(e) {
                    clearTimeout(p),
                      e instanceof Error ||
                        (e = new Error(
                          "" + (e || "Unknown XMLHttpRequest Error")
                        )),
                      (e.statusCode = 0),
                      s(e, u);
                  }
                  function i() {
                    if (!d) {
                      var t;
                      clearTimeout(p),
                        (t =
                          e.useXDR && void 0 === c.status
                            ? 200
                            : 1223 === c.status
                            ? 204
                            : c.status);
                      var n = u,
                        o = null;
                      0 !== t
                        ? ((n = {
                            body: r(),
                            statusCode: t,
                            method: g,
                            headers: {},
                            url: m,
                            rawRequest: c,
                          }),
                          c.getAllResponseHeaders &&
                            (n.headers = h(c.getAllResponseHeaders())))
                        : (o = new Error("Internal XMLHttpRequest Error")),
                        s(o, n, n.body);
                    }
                  }
                  var s = e.callback;
                  if ("undefined" == typeof s)
                    throw new Error("callback argument missing");
                  s = l(s);
                  var u = {
                      body: void 0,
                      headers: {},
                      statusCode: 0,
                      method: g,
                      url: m,
                      rawRequest: c,
                    },
                    c = e.xhr || null;
                  c ||
                    (c =
                      e.cors || e.useXDR
                        ? new a.XDomainRequest()
                        : new a.XMLHttpRequest());
                  var f,
                    d,
                    p,
                    m = (c.url = e.uri || e.url),
                    g = (c.method = e.method || "GET"),
                    v = e.body || e.data || null,
                    b = (c.headers = e.headers || {}),
                    y = !!e.sync,
                    $ = !1;
                  if (
                    ("json" in e &&
                      (($ = !0),
                      b.accept || b.Accept || (b.Accept = "application/json"),
                      "GET" !== g &&
                        "HEAD" !== g &&
                        (b["content-type"] ||
                          b["Content-Type"] ||
                          (b["Content-Type"] = "application/json"),
                        (v = JSON.stringify(e.json)))),
                    (c.onreadystatechange = t),
                    (c.onload = i),
                    (c.onerror = n),
                    (c.onprogress = function () {}),
                    (c.ontimeout = n),
                    c.open(g, m, !y, e.username, e.password),
                    y || (c.withCredentials = !!e.withCredentials),
                    !y &&
                      e.timeout > 0 &&
                      (p = setTimeout(function () {
                        (d = !0), c.abort("timeout");
                        var e = new Error("XMLHttpRequest timeout");
                        (e.code = "ETIMEDOUT"), n(e);
                      }, e.timeout)),
                    c.setRequestHeader)
                  )
                    for (f in b)
                      b.hasOwnProperty(f) && c.setRequestHeader(f, b[f]);
                  else if (e.headers && !o(e.headers))
                    throw new Error(
                      "Headers cannot be set on an XDomainRequest object"
                    );
                  return (
                    "responseType" in e && (c.responseType = e.responseType),
                    "beforeSend" in e &&
                      "function" == typeof e.beforeSend &&
                      e.beforeSend(c),
                    c.send(v),
                    c
                  );
                }
                function u() {}
                var c = e("global/window"),
                  l = e("once"),
                  f = e("is-function"),
                  h = e("parse-headers"),
                  d = e("xtend");
                (t.exports = a),
                  (a.XMLHttpRequest = c.XMLHttpRequest || u),
                  (a.XDomainRequest =
                    "withCredentials" in new a.XMLHttpRequest()
                      ? a.XMLHttpRequest
                      : c.XDomainRequest),
                  n(
                    ["get", "put", "post", "patch", "head", "delete"],
                    function (e) {
                      a["delete" === e ? "del" : e] = function (t, r, n) {
                        return (
                          (r = i(t, r, n)), (r.method = e.toUpperCase()), s(r)
                        );
                      };
                    }
                  );
              },
              {
                "global/window": 85,
                "is-function": 86,
                once: 90,
                "parse-headers": 87,
                xtend: 91,
              },
            ],
            90: [
              function (e, t, r) {
                function n(e) {
                  var t = !1;
                  return function () {
                    if (!t) return (t = !0), e.apply(this, arguments);
                  };
                }
                (t.exports = n),
                  (n.proto = n(function () {
                    Object.defineProperty(Function.prototype, "once", {
                      value: function () {
                        return n(this);
                      },
                      configurable: !0,
                    });
                  }));
              },
              {},
            ],
            91: [
              function (e, t, r) {
                function n() {
                  for (var e = {}, t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) o.call(r, n) && (e[n] = r[n]);
                  }
                  return e;
                }
                t.exports = n;
                var o = Object.prototype.hasOwnProperty;
              },
              {},
            ],
            92: [
              function (e, t, r) {
                "use strict";
                function n() {
                  var e = document.getElementsByClassName("glslCanvas");
                  if (e.length > 0) {
                    window.glslCanvases = [];
                    for (var t = 0; t < e.length; t++) {
                      var r = new p(e[t]);
                      r.isValid && window.glslCanvases.push(r);
                    }
                  }
                }
                var o = e("babel-runtime/helpers/create-class").default,
                  i = e("babel-runtime/helpers/class-call-check").default,
                  a = e("babel-runtime/helpers/interop-require-default")
                    .default;
                Object.defineProperty(r, "__esModule", { value: !0 });
                var s = e("xhr"),
                  u = a(s),
                  c = e("./gl/gl"),
                  l = e("./gl/Texture"),
                  f = a(l),
                  h = e("./tools/common"),
                  d = e("./tools/mixin"),
                  p = (function () {
                    function e(t, r) {
                      function n() {
                        g.nMouse > 1 && g.setMouse(m),
                          g.render(),
                          (g.forceRender = g.resize()),
                          window.requestAnimationFrame(n);
                      }
                      var o = this;
                      i(this, e),
                        (0, d.subscribeMixin)(this),
                        (r = r || {}),
                        (this.width = t.clientWidth),
                        (this.height = t.clientHeight),
                        (this.canvas = t),
                        (this.gl = void 0),
                        (this.program = void 0),
                        (this.textures = {}),
                        (this.uniforms = {}),
                        (this.vbo = {}),
                        (this.isValid = !1),
                        (this.vertexString =
                          r.vertexString ||
                          "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n    gl_Position = vec4(a_position, 0.0, 1.0);\n    v_texcoord = a_texcoord;\n}\n"),
                        (this.fragmentString =
                          r.fragmentString ||
                          "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n    gl_FragColor = vec4(0.0);\n}\n");
                      var a = (0, c.setupWebGL)(t, r);
                      if (a) {
                        if (
                          ((this.gl = a),
                          (this.timeLoad = this.timePrev = Date.now()),
                          (this.forceRender = !0),
                          (this.paused = !1),
                          (t.style.backgroundColor =
                            r.backgroundColor || "rgba(1,1,1,0)"),
                          t.hasAttribute("data-fragment"))
                        )
                          this.fragmentString = t.getAttribute("data-fragment");
                        else if (t.hasAttribute("data-fragment-url")) {
                          var s = t.getAttribute("data-fragment-url");
                          u.default.get(s, function (e, t, r) {
                            o.load(r, o.vertexString);
                          });
                        }
                        if (t.hasAttribute("data-vertex"))
                          this.vertexString = t.getAttribute("data-vertex");
                        else if (t.hasAttribute("data-vertex-url")) {
                          var s = t.getAttribute("data-vertex-url");
                          u.default.get(s, function (e, t, r) {
                            o.load(o.fragmentString, r);
                          });
                        }
                        if ((this.load(), this.program)) {
                          var l = a.getAttribLocation(
                            this.program,
                            "a_texcoord"
                          );
                          (this.vbo.texCoords = a.createBuffer()),
                            this.gl.bindBuffer(
                              a.ARRAY_BUFFER,
                              this.vbo.texCoords
                            ),
                            this.gl.bufferData(
                              a.ARRAY_BUFFER,
                              new Float32Array([
                                0,
                                0,
                                1,
                                0,
                                0,
                                1,
                                0,
                                1,
                                1,
                                0,
                                1,
                                1,
                              ]),
                              a.STATIC_DRAW
                            ),
                            this.gl.enableVertexAttribArray(l),
                            this.gl.vertexAttribPointer(
                              l,
                              2,
                              a.FLOAT,
                              !1,
                              0,
                              0
                            );
                          var f = a.getAttribLocation(
                            this.program,
                            "a_position"
                          );
                          if (
                            ((this.vbo.vertices = a.createBuffer()),
                            this.gl.bindBuffer(
                              a.ARRAY_BUFFER,
                              this.vbo.vertices
                            ),
                            this.gl.bufferData(
                              a.ARRAY_BUFFER,
                              new Float32Array([
                                -1,
                                -1,
                                1,
                                -1,
                                -1,
                                1,
                                -1,
                                1,
                                1,
                                -1,
                                1,
                                1,
                              ]),
                              a.STATIC_DRAW
                            ),
                            this.gl.enableVertexAttribArray(f),
                            this.gl.vertexAttribPointer(
                              f,
                              2,
                              a.FLOAT,
                              !1,
                              0,
                              0
                            ),
                            t.hasAttribute("data-textures"))
                          ) {
                            var h = t.getAttribute("data-textures").split(",");
                            for (var p in h) this.setUniform("u_tex" + p, h[p]);
                          }
                          var m = { x: 0, y: 0 };
                          document.addEventListener(
                            "mousemove",
                            function (e) {
                              (m.x = e.clientX || e.pageX),
                                (m.y = e.clientY || e.pageY);
                            },
                            !1
                          );
                          var g = this;
                          return this.setMouse({ x: 0, y: 0 }), n(), this;
                        }
                      }
                    }
                    return (
                      o(e, [
                        {
                          key: "destroy",
                          value: function () {
                            (this.animated = !1), (this.isValid = !1);
                            for (var e in this.textures)
                              this.gl.deleteTexture(e);
                            this.textures = {};
                            for (var t in this.attribs)
                              this.gl.deleteBuffer(this.attribs[t]);
                            this.gl.useProgram(null),
                              this.gl.deleteProgram(this.program),
                              (this.program = null),
                              (this.gl = null);
                          },
                        },
                        {
                          key: "load",
                          value: function (e, t) {
                            t && (this.vertexString = t),
                              e && (this.fragmentString = e),
                              (this.animated = !1),
                              (this.nDelta = (
                                this.fragmentString.match(/u_delta/g) || []
                              ).length),
                              (this.nTime = (
                                this.fragmentString.match(/u_time/g) || []
                              ).length),
                              (this.nDate = (
                                this.fragmentString.match(/u_date/g) || []
                              ).length),
                              (this.nMouse = (
                                this.fragmentString.match(/u_mouse/g) || []
                              ).length),
                              (this.animated =
                                this.nDate > 1 ||
                                this.nTime > 1 ||
                                this.nMouse > 1);
                            var r = this.fragmentString.search(/sampler2D/g);
                            if (r)
                              for (
                                var n = this.fragmentString.split("\n"), o = 0;
                                o < n.length;
                                o++
                              ) {
                                var i = n[o].match(
                                  /uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i
                                );
                                if (i) {
                                  var a = i[2].split(".").pop();
                                  i[1] &&
                                    i[2] &&
                                    ("jpg" === a ||
                                      "JPG" === a ||
                                      "jpeg" === a ||
                                      "JPEG" === a ||
                                      "png" === a ||
                                      "PNG" === a) &&
                                    this.setUniform(i[1], i[2]);
                                }
                                var s = n[o].match(/\s*void\s*main\s*/g);
                                if (s) break;
                              }
                            var u = (0, c.createShader)(
                                this,
                                this.vertexString,
                                this.gl.VERTEX_SHADER
                              ),
                              l = (0, c.createShader)(
                                this,
                                this.fragmentString,
                                this.gl.FRAGMENT_SHADER
                              );
                            l
                              ? (this.isValid = !0)
                              : ((l = (0, c.createShader)(
                                  this,
                                  "void main(){\n\tgl_FragColor = vec4(1.0);\n}",
                                  this.gl.FRAGMENT_SHADER
                                )),
                                (this.isValid = !1));
                            var f = (0, c.createProgram)(this, [u, l]);
                            this.gl.useProgram(f),
                              this.gl.deleteShader(u),
                              this.gl.deleteShader(l),
                              (this.program = f),
                              (this.change = !0),
                              this.trigger("load", {}),
                              (this.forceRender = !0);
                          },
                        },
                        {
                          key: "loadTexture",
                          value: function (e, t, r) {
                            var n = this;
                            r || (r = {}),
                              "string" == typeof t
                                ? (r.url = t)
                                : "object" == typeof t &&
                                  t.data &&
                                  t.width &&
                                  t.height
                                ? ((r.data = t.data),
                                  (r.width = t.width),
                                  (r.height = t.height))
                                : "object" == typeof t && (r.element = t),
                              this.textures[e]
                                ? this.textures[e] &&
                                  (this.textures[e].load(r),
                                  this.textures[e].on("loaded", function (e) {
                                    n.forceRender = !0;
                                  }))
                                : ((this.textures[e] = new f.default(
                                    this.gl,
                                    e,
                                    r
                                  )),
                                  this.textures[e].on("loaded", function (e) {
                                    n.forceRender = !0;
                                  }));
                          },
                        },
                        {
                          key: "refreshUniforms",
                          value: function () {
                            this.uniforms = {};
                          },
                        },
                        {
                          key: "setUniform",
                          value: function (e) {
                            for (
                              var t = {},
                                r = arguments.length,
                                n = Array(r > 1 ? r - 1 : 0),
                                o = 1;
                              o < r;
                              o++
                            )
                              n[o - 1] = arguments[o];
                            (t[e] = n), this.setUniforms(t);
                          },
                        },
                        {
                          key: "setUniforms",
                          value: function (e) {
                            var t = (0, c.parseUniforms)(e);
                            for (var r in t)
                              "sampler2D" === t[r].type
                                ? this.loadTexture(t[r].name, t[r].value[0])
                                : (this.uniform(
                                    t[r].method,
                                    t[r].type,
                                    t[r].name,
                                    t[r].value
                                  ),
                                  (this.forceRender = !0));
                          },
                        },
                        {
                          key: "setMouse",
                          value: function (e) {
                            var t = this.canvas.getBoundingClientRect();
                            e &&
                              e.x &&
                              e.x >= t.left &&
                              e.x <= t.right &&
                              e.y &&
                              e.y >= t.top &&
                              e.y <= t.bottom &&
                              this.uniform(
                                "2f",
                                "vec2",
                                "u_mouse",
                                e.x - t.left,
                                this.canvas.height - (e.y - t.top)
                              );
                          },
                        },
                        {
                          key: "uniform",
                          value: function e(t, r, n) {
                            this.uniforms[n] = this.uniforms[n] || {};
                            for (
                              var e = this.uniforms[n],
                                o = arguments.length,
                                i = Array(o > 3 ? o - 3 : 0),
                                a = 3;
                              a < o;
                              a++
                            )
                              i[a - 3] = arguments[a];
                            var s = (0, h.isDiff)(e.value, i);
                            (s ||
                              this.change ||
                              void 0 === e.location ||
                              void 0 === e.value) &&
                              ((e.name = n),
                              (e.value = i),
                              (e.type = r),
                              (e.method = "uniform" + t),
                              (e.location = this.gl.getUniformLocation(
                                this.program,
                                n
                              )),
                              this.gl[e.method].apply(
                                this.gl,
                                [e.location].concat(e.value)
                              ));
                          },
                        },
                        {
                          key: "uniformTexture",
                          value: function (e, t, r) {
                            void 0 === this.textures[e]
                              ? this.loadTexture(e, t, r)
                              : (this.uniform(
                                  "1i",
                                  "sampler2D",
                                  e,
                                  this.texureIndex
                                ),
                                this.textures[e].bind(this.texureIndex),
                                this.uniform(
                                  "2f",
                                  "vec2",
                                  e + "Resolution",
                                  this.textures[e].width,
                                  this.textures[e].height
                                ),
                                this.texureIndex++);
                          },
                        },
                        {
                          key: "resize",
                          value: function () {
                            if (
                              this.width !== this.canvas.clientWidth ||
                              this.height !== this.canvas.clientHeight
                            ) {
                              var e = window.devicePixelRatio || 1,
                                t = Math.floor(this.gl.canvas.clientWidth * e),
                                r = Math.floor(this.gl.canvas.clientHeight * e);
                              return (
                                (this.gl.canvas.width === t &&
                                  this.gl.canvas.height === r) ||
                                  ((this.gl.canvas.width = t),
                                  (this.gl.canvas.height = r),
                                  this.gl.viewport(
                                    0,
                                    0,
                                    this.gl.canvas.width,
                                    this.gl.canvas.height
                                  )),
                                (this.width = this.canvas.clientWidth),
                                (this.height = this.canvas.clientHeight),
                                !0
                              );
                            }
                            return !1;
                          },
                        },
                        {
                          key: "render",
                          value: function () {
                            if (
                              ((this.visible = (0, h.isCanvasVisible)(
                                this.canvas
                              )),
                              this.forceRender ||
                                (this.animated && this.visible && !this.paused))
                            ) {
                              var e = new Date(),
                                t = e.getTime();
                              this.nDelta > 1 &&
                                (this.uniform(
                                  "1f",
                                  "float",
                                  "u_time",
                                  (t - this.timePrev) / 1e3
                                ),
                                (this.timePrev = t)),
                                this.nTime > 1 &&
                                  this.uniform(
                                    "1f",
                                    "float",
                                    "u_time",
                                    (t - this.timeLoad) / 1e3
                                  ),
                                this.nDate &&
                                  this.uniform(
                                    "4f",
                                    "float",
                                    "u_date",
                                    e.getFullYear(),
                                    e.getMonth(),
                                    e.getDate(),
                                    3600 * e.getHours() +
                                      60 * e.getMinutes() +
                                      e.getSeconds() +
                                      0.001 * e.getMilliseconds()
                                  ),
                                this.uniform(
                                  "2f",
                                  "vec2",
                                  "u_resolution",
                                  this.canvas.width,
                                  this.canvas.height
                                ),
                                (this.texureIndex = 0);
                              for (var r in this.textures)
                                this.uniformTexture(r);
                              this.gl.drawArrays(this.gl.TRIANGLES, 0, 6),
                                this.trigger("render", {}),
                                (this.change = !1),
                                (this.forceRender = !1);
                            }
                          },
                        },
                        {
                          key: "pause",
                          value: function () {
                            this.paused = !0;
                          },
                        },
                        {
                          key: "play",
                          value: function () {
                            this.paused = !1;
                          },
                        },
                        {
                          key: "version",
                          value: function () {
                            return "0.0.16";
                          },
                        },
                      ]),
                      e
                    );
                  })();
                (r.default = p),
                  (window.GlslCanvas = p),
                  window.addEventListener("load", function () {
                    n();
                  }),
                  (t.exports = r.default);
              },
              {
                "./gl/Texture": 93,
                "./gl/gl": 94,
                "./tools/common": 95,
                "./tools/mixin": 96,
                "babel-runtime/helpers/class-call-check": 8,
                "babel-runtime/helpers/create-class": 9,
                "babel-runtime/helpers/interop-require-default": 10,
                xhr: 89,
              },
            ],
            93: [
              function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class").default,
                  o = e("babel-runtime/helpers/class-call-check").default,
                  i = e("babel-runtime/core-js/promise").default;
                Object.defineProperty(r, "__esModule", { value: !0 });
                var a = e("../tools/common"),
                  s = e("../tools/mixin"),
                  u = (function () {
                    function e(t, r) {
                      var n =
                        arguments.length <= 2 || void 0 === arguments[2]
                          ? {}
                          : arguments[2];
                      o(this, e),
                        (0, s.subscribeMixin)(this),
                        (this.gl = t),
                        (this.texture = t.createTexture()),
                        this.texture && (this.valid = !0),
                        this.bind(),
                        (this.name = r),
                        (this.source = null),
                        (this.sourceType = null),
                        (this.loading = null),
                        this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), {
                          filtering: "linear",
                        }),
                        this.setFiltering(n.filtering),
                        this.load(n);
                    }
                    return (
                      n(e, [
                        {
                          key: "destroy",
                          value: function () {
                            this.valid &&
                              (this.gl.deleteTexture(this.texture),
                              (this.texture = null),
                              delete this.data,
                              (this.data = null),
                              (this.valid = !1));
                          },
                        },
                        {
                          key: "bind",
                          value: function (t) {
                            this.valid &&
                              ("number" == typeof t &&
                                e.activeUnit !== t &&
                                (this.gl.activeTexture(this.gl.TEXTURE0 + t),
                                (e.activeUnit = t)),
                              e.activeTexture !== this.texture &&
                                (this.gl.bindTexture(
                                  this.gl.TEXTURE_2D,
                                  this.texture
                                ),
                                (e.activeTexture = this.texture)));
                          },
                        },
                        {
                          key: "load",
                          value: function () {
                            var e =
                              arguments.length <= 0 || void 0 === arguments[0]
                                ? {}
                                : arguments[0];
                            (this.loading = null),
                              "string" == typeof e.url
                                ? (void 0 !== this.url && e.url === this.url) ||
                                  this.setUrl(e.url, e)
                                : e.element
                                ? this.setElement(e.element, e)
                                : e.data &&
                                  e.width &&
                                  e.height &&
                                  this.setData(e.width, e.height, e.data, e);
                          },
                        },
                        {
                          key: "setUrl",
                          value: function (e) {
                            var t = this,
                              r =
                                arguments.length <= 1 || void 0 === arguments[1]
                                  ? {}
                                  : arguments[1];
                            if (this.valid)
                              return (
                                (this.url = e),
                                (this.source = this.url),
                                (this.sourceType = "url"),
                                (this.loading = new i(function (e, n) {
                                  var o = new Image();
                                  (o.onload = function () {
                                    try {
                                      t.setElement(o, r);
                                    } catch (e) {
                                      console.log(
                                        "Texture '" +
                                          t.name +
                                          "': failed to load url: '" +
                                          t.source +
                                          "'",
                                        e,
                                        r
                                      );
                                    }
                                    e(t);
                                  }),
                                    (o.onerror = function (n) {
                                      console.log(
                                        "Texture '" +
                                          t.name +
                                          "': failed to load url: '" +
                                          t.source +
                                          "'",
                                        n,
                                        r
                                      ),
                                        e(t);
                                    }),
                                    (o.crossOrigin = "anonymous"),
                                    (o.src = t.source);
                                })),
                                this.loading
                              );
                          },
                        },
                        {
                          key: "setData",
                          value: function (e, t, r) {
                            var n =
                              arguments.length <= 3 || void 0 === arguments[3]
                                ? {}
                                : arguments[3];
                            return (
                              (this.width = e),
                              (this.height = t),
                              (this.source = r),
                              (this.sourceType = "data"),
                              this.update(n),
                              this.setFiltering(n),
                              (this.loading = i.resolve(this)),
                              this.loading
                            );
                          },
                        },
                        {
                          key: "setElement",
                          value: function (e, t) {
                            var r = e;
                            if (
                              ("string" == typeof e &&
                                (e = document.querySelector(e)),
                              e instanceof HTMLCanvasElement ||
                                e instanceof HTMLImageElement ||
                                e instanceof HTMLVideoElement)
                            )
                              (this.source = e),
                                (this.sourceType = "element"),
                                this.update(t),
                                this.setFiltering(t);
                            else {
                              var n =
                                "the 'element' parameter (`element: " +
                                JSON.stringify(r) +
                                "`) must be a CSS ";
                              (n +=
                                "selector string, or a <canvas>, <image> or <video> object"),
                                console.log(
                                  "Texture '" + this.name + "': " + n,
                                  t
                                );
                            }
                            return (
                              (this.loading = i.resolve(this)), this.loading
                            );
                          },
                        },
                        {
                          key: "update",
                          value: function () {
                            var e =
                              arguments.length <= 0 || void 0 === arguments[0]
                                ? {}
                                : arguments[0];
                            this.valid &&
                              (this.bind(),
                              this.gl.pixelStorei(
                                this.gl.UNPACK_FLIP_Y_WEBGL,
                                e.UNPACK_FLIP_Y_WEBGL !== !1
                              ),
                              this.gl.pixelStorei(
                                this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                                e.UNPACK_PREMULTIPLY_ALPHA_WEBGL || !1
                              ),
                              "element" === this.sourceType &&
                              (this.source instanceof HTMLCanvasElement ||
                                this.source instanceof HTMLVideoElement ||
                                (this.source instanceof HTMLImageElement &&
                                  this.source.complete))
                                ? ((this.width = this.source.width),
                                  (this.height = this.source.height),
                                  this.gl.texImage2D(
                                    this.gl.TEXTURE_2D,
                                    0,
                                    this.gl.RGBA,
                                    this.gl.RGBA,
                                    this.gl.UNSIGNED_BYTE,
                                    this.source
                                  ))
                                : "data" === this.sourceType &&
                                  this.gl.texImage2D(
                                    this.gl.TEXTURE_2D,
                                    0,
                                    this.gl.RGBA,
                                    this.width,
                                    this.height,
                                    0,
                                    this.gl.RGBA,
                                    this.gl.UNSIGNED_BYTE,
                                    this.source
                                  ),
                              this.trigger("loaded", this));
                          },
                        },
                        {
                          key: "setFiltering",
                          value: function () {
                            var e =
                              arguments.length <= 0 || void 0 === arguments[0]
                                ? {}
                                : arguments[0];
                            if (this.valid) {
                              this.powerOf2 =
                                (0, a.isPowerOf2)(this.width) &&
                                (0, a.isPowerOf2)(this.height);
                              var t = this.powerOf2 ? "mipmap" : "linear";
                              this.filtering = e.filtering || t;
                              var r = this.gl;
                              this.bind(),
                                this.powerOf2
                                  ? (r.texParameteri(
                                      r.TEXTURE_2D,
                                      r.TEXTURE_WRAP_S,
                                      e.TEXTURE_WRAP_S ||
                                        (e.repeat && r.REPEAT) ||
                                        r.CLAMP_TO_EDGE
                                    ),
                                    r.texParameteri(
                                      r.TEXTURE_2D,
                                      r.TEXTURE_WRAP_T,
                                      e.TEXTURE_WRAP_T ||
                                        (e.repeat && r.REPEAT) ||
                                        r.CLAMP_TO_EDGE
                                    ),
                                    "mipmap" === this.filtering
                                      ? (r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MIN_FILTER,
                                          r.LINEAR_MIPMAP_LINEAR
                                        ),
                                        r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MAG_FILTER,
                                          r.LINEAR
                                        ),
                                        r.generateMipmap(r.TEXTURE_2D))
                                      : "linear" === this.filtering
                                      ? (r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MIN_FILTER,
                                          r.LINEAR
                                        ),
                                        r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MAG_FILTER,
                                          r.LINEAR
                                        ))
                                      : "nearest" === this.filtering &&
                                        (r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MIN_FILTER,
                                          r.NEAREST
                                        ),
                                        r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MAG_FILTER,
                                          r.NEAREST
                                        )))
                                  : (r.texParameteri(
                                      r.TEXTURE_2D,
                                      r.TEXTURE_WRAP_S,
                                      r.CLAMP_TO_EDGE
                                    ),
                                    r.texParameteri(
                                      r.TEXTURE_2D,
                                      r.TEXTURE_WRAP_T,
                                      r.CLAMP_TO_EDGE
                                    ),
                                    "mipmap" === this.filtering &&
                                      (this.filtering = "linear"),
                                    "nearest" === this.filtering
                                      ? (r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MIN_FILTER,
                                          r.NEAREST
                                        ),
                                        r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MAG_FILTER,
                                          r.NEAREST
                                        ))
                                      : (r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MIN_FILTER,
                                          r.LINEAR
                                        ),
                                        r.texParameteri(
                                          r.TEXTURE_2D,
                                          r.TEXTURE_MAG_FILTER,
                                          r.LINEAR
                                        )));
                            }
                          },
                        },
                      ]),
                      e
                    );
                  })();
                (r.default = u),
                  (u.getMaxTextureSize = function (e) {
                    return e.getParameter(e.MAX_TEXTURE_SIZE);
                  }),
                  (u.activeUnit = -1),
                  (t.exports = r.default);
              },
              {
                "../tools/common": 95,
                "../tools/mixin": 96,
                "babel-runtime/core-js/promise": 6,
                "babel-runtime/helpers/class-call-check": 8,
                "babel-runtime/helpers/create-class": 9,
              },
            ],
            94: [
              function (e, t, r) {
                "use strict";
                function n(e) {
                  return (
                    '\n<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n<td align="center">\n<div style="display: table-cell; vertical-align: middle;">\n<div style="">' +
                    e +
                    "</div>\n</div>\n</td></tr></table>\n"
                  );
                }
                function o(e, t) {
                  function r(t) {
                    var r = e.parentNode;
                    r && (r.innerHTML = n(t));
                  }
                  if (!window.WebGLRenderingContext) return r(f), null;
                  var o = i(e, t);
                  return (
                    o || r(h), o.getExtension("OES_standard_derivatives"), o
                  );
                }
                function i(e, t) {
                  for (
                    var r = ["webgl", "experimental-webgl"], n = null, o = 0;
                    o < r.length;
                    ++o
                  )
                    try {
                      n = e.getContext(r[o], t);
                    } catch (e) {
                      if (n) break;
                    }
                  return n;
                }
                function a(e, t, r) {
                  var n = e.gl,
                    o = n.createShader(r);
                  n.shaderSource(o, t), n.compileShader(o);
                  var i = n.getShaderParameter(o, n.COMPILE_STATUS);
                  return i
                    ? o
                    : ((l = n.getShaderInfoLog(o)),
                      console.error(
                        "*** Error compiling shader " + o + ":" + l
                      ),
                      e.trigger("error", {
                        shader: o,
                        source: t,
                        type: r,
                        error: l,
                      }),
                      n.deleteShader(o),
                      null);
                }
                function s(e, t, r, n) {
                  for (
                    var o = e.gl, i = o.createProgram(), a = 0;
                    a < t.length;
                    ++a
                  )
                    o.attachShader(i, t[a]);
                  if (r)
                    for (var a = 0; a < r.length; ++a)
                      o.bindAttribLocation(i, n ? n[a] : a, r[a]);
                  o.linkProgram(i);
                  var s = o.getProgramParameter(i, o.LINK_STATUS);
                  return s
                    ? i
                    : ((l = o.getProgramInfoLog(i)),
                      console.log("Error in program linking:" + l),
                      o.deleteProgram(i),
                      null);
                }
                function u(e) {
                  var t =
                      arguments.length <= 1 || void 0 === arguments[1]
                        ? null
                        : arguments[1],
                    r = [];
                  for (var n in e) {
                    var o = e[n],
                      i = void 0;
                    if ((t && (n = t + "." + n), "number" == typeof o))
                      r.push({
                        type: "float",
                        method: "1f",
                        name: n,
                        value: o,
                      });
                    else if (Array.isArray(o)) {
                      if ("number" == typeof o[0])
                        1 === o.length
                          ? r.push({
                              type: "float",
                              method: "1f",
                              name: n,
                              value: o,
                            })
                          : o.length >= 2 && o.length <= 4
                          ? r.push({
                              type: "vec" + o.length,
                              method: o.length + "fv",
                              name: n,
                              value: o,
                            })
                          : o.length > 4 &&
                            r.push({
                              type: "float[]",
                              method: "1fv",
                              name: n + "[0]",
                              value: o,
                            });
                      else if ("string" == typeof o[0])
                        r.push({
                          type: "sampler2D",
                          method: "1i",
                          name: n,
                          value: o,
                        });
                      else if (
                        Array.isArray(o[0]) &&
                        "number" == typeof o[0][0]
                      ) {
                        if (o[0].length >= 2 && o[0].length <= 4)
                          for (i = 0; i < o.length; i++)
                            r.push({
                              type: "vec" + o[0].length,
                              method: o[i].length + "fv",
                              name: n + "[" + i + "]",
                              value: o[i],
                            });
                      } else if ("object" == typeof o[0])
                        for (i = 0; i < o.length; i++)
                          r.push.apply(r, c(u(o[i], n + "[" + i + "]")));
                    } else
                      "boolean" == typeof o
                        ? r.push({
                            type: "bool",
                            method: "1i",
                            name: n,
                            value: o,
                          })
                        : "string" == typeof o
                        ? r.push({
                            type: "sampler2D",
                            method: "1i",
                            name: n,
                            value: o,
                          })
                        : "object" == typeof o && r.push.apply(r, c(u(o, n)));
                  }
                  return r;
                }
                var c = e("babel-runtime/helpers/to-consumable-array").default;
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.setupWebGL = o),
                  (r.create3DContext = i),
                  (r.createShader = a),
                  (r.createProgram = s),
                  (r.parseUniforms = u);
                var l = "",
                  f =
                    '\n\tThis page requires a browser that supports WebGL.<br/>\n\t<a href="http://get.webgl.org">Click here to upgrade your browser.</a>\n',
                  h =
                    '\n\tIt does not appear your computer can support WebGL.<br/>\n\t<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>\n';
              },
              { "babel-runtime/helpers/to-consumable-array": 11 },
            ],
            95: [
              function (e, t, r) {
                "use strict";
                function n(e) {
                  return (
                    e.getBoundingClientRect().top + e.height > 0 &&
                    e.getBoundingClientRect().top <
                      (window.innerHeight ||
                        document.documentElement.clientHeight)
                  );
                }
                function o(e) {
                  return 0 === (e & (e - 1));
                }
                function i(e) {
                  --e;
                  for (var t = 1; t < 32; t <<= 1) e |= e >> t;
                  return e + 1;
                }
                function a(e, t) {
                  for (var r = e.toString(); r.length < t; ) r = "0" + r;
                  return r;
                }
                function s(e, t) {
                  var r = e.getBoundingClientRect();
                  return { x: t.clientX - r.left, y: t.clientY - r.top };
                }
                function u(e, t) {
                  return !(!e || !t) && e.toString() !== t.toString();
                }
                function c(e) {
                  var t = new l();
                  return f(e, {
                    subscribe: function (e) {
                      t.add(e);
                    },
                    on: function (e, r) {
                      var n = {};
                      (n[e] = r), t.add(n);
                    },
                    unsubscribe: function (e) {
                      t.delete(e);
                    },
                    unsubscribeAll: function () {
                      t.clear();
                    },
                    trigger: function (e) {
                      var r = !0,
                        n = !1,
                        o = void 0;
                      try {
                        for (
                          var i = arguments.length,
                            a = Array(i > 1 ? i - 1 : 0),
                            s = 1;
                          s < i;
                          s++
                        )
                          a[s - 1] = arguments[s];
                        for (
                          var u, c = h(t);
                          !(r = (u = c.next()).done);
                          r = !0
                        ) {
                          var l = u.value;
                          "function" == typeof l[e] && l[e].apply(l, a);
                        }
                      } catch (e) {
                        (n = !0), (o = e);
                      } finally {
                        try {
                          !r && c.return && c.return();
                        } finally {
                          if (n) throw o;
                        }
                      }
                    },
                  });
                }
                var l = e("babel-runtime/core-js/set").default,
                  f = e("babel-runtime/core-js/object/assign").default,
                  h = e("babel-runtime/core-js/get-iterator").default;
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.isCanvasVisible = n),
                  (r.isPowerOf2 = o),
                  (r.nextHighestPowerOfTwo = i),
                  (r.FormatNumberLength = a),
                  (r.getMousePos = s),
                  (r.isDiff = u),
                  (r.subscribeMixin = c);
              },
              {
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 3,
                "babel-runtime/core-js/set": 7,
              },
            ],
            96: [
              function (e, t, r) {
                "use strict";
                function n(e) {
                  var t = new o();
                  return i(e, {
                    on: function (e, r) {
                      var n = {};
                      (n[e] = r), t.add(n);
                    },
                    off: function (e, r) {
                      if (r) {
                        var n = {};
                        (n[e] = r), t.delete(n);
                      } else {
                        var o = !0,
                          i = !1,
                          u = void 0;
                        try {
                          for (
                            var c, l = a(t);
                            !(o = (c = l.next()).done);
                            o = !0
                          ) {
                            var f = c.value,
                              h = !0,
                              d = !1,
                              p = void 0;
                            try {
                              for (
                                var m, g = a(s(f));
                                !(h = (m = g.next()).done);
                                h = !0
                              ) {
                                var v = m.value;
                                if (v === e) return void t.delete(f);
                              }
                            } catch (e) {
                              (d = !0), (p = e);
                            } finally {
                              try {
                                !h && g.return && g.return();
                              } finally {
                                if (d) throw p;
                              }
                            }
                          }
                        } catch (e) {
                          (i = !0), (u = e);
                        } finally {
                          try {
                            !o && l.return && l.return();
                          } finally {
                            if (i) throw u;
                          }
                        }
                      }
                    },
                    listSubscriptions: function () {
                      var e = !0,
                        r = !1,
                        n = void 0;
                      try {
                        for (
                          var o, i = a(t);
                          !(e = (o = i.next()).done);
                          e = !0
                        ) {
                          var s = o.value;
                          console.log(s);
                        }
                      } catch (e) {
                        (r = !0), (n = e);
                      } finally {
                        try {
                          !e && i.return && i.return();
                        } finally {
                          if (r) throw n;
                        }
                      }
                    },
                    subscribe: function (e) {
                      t.add(e);
                    },
                    unsubscribe: function (e) {
                      t.delete(e);
                    },
                    unsubscribeAll: function () {
                      t.clear();
                    },
                    trigger: function (e) {
                      var r = !0,
                        n = !1,
                        o = void 0;
                      try {
                        for (
                          var i = arguments.length,
                            s = Array(i > 1 ? i - 1 : 0),
                            u = 1;
                          u < i;
                          u++
                        )
                          s[u - 1] = arguments[u];
                        for (
                          var c, l = a(t);
                          !(r = (c = l.next()).done);
                          r = !0
                        ) {
                          var f = c.value;
                          "function" == typeof f[e] && f[e].apply(f, s);
                        }
                      } catch (e) {
                        (n = !0), (o = e);
                      } finally {
                        try {
                          !r && l.return && l.return();
                        } finally {
                          if (n) throw o;
                        }
                      }
                    },
                  });
                }
                var o = e("babel-runtime/core-js/set").default,
                  i = e("babel-runtime/core-js/object/assign").default,
                  a = e("babel-runtime/core-js/get-iterator").default,
                  s = e("babel-runtime/core-js/object/keys").default;
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.subscribeMixin = n);
              },
              {
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 3,
                "babel-runtime/core-js/object/keys": 5,
                "babel-runtime/core-js/set": 7,
              },
            ],
          },
          {},
          [92]
        )(92);
      });
    }.call(
      t,
      (function () {
        return this;
      })()
    ));
  },
]);
//# sourceMappingURL=main.js.map
