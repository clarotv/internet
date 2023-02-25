!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(0), n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p;
    console.log("JS OK!"),
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) && ($("#cep").attr("type", "tel"), $("#numero").attr("type", "tel"));
    var i,
      r = r || {};
    (i = jQuery),
      (r.Cep = {
        init: function () {
          this.cacheSelectors(), this.bindMask(), this.bindEvents();
        },
        cacheSelectors: function () {
          (this.cepdiv = i("#minhaDiv")),
            (this.btnOpenClose = i('a[data-element="#minhaDiv"]')),
            (this.cepInput = this.cepdiv.find("#cep")),
            (this.numeroInput = this.cepdiv.find("#numero")),
            (this.consultarCobertura = this.cepdiv.find(
              "#consultar-cobertura"
            )),
            (this.cepError = i(".ceperror")),
            (this.btn35mb = i("#btn35mb")),
            (this.btn120mb = i("#btn120mb")),
            (this.btn120mb02 = i("#btn120mb02")),
            (this.btn120mb03 = i("#btn120mb03")),
            (this.btn240mb = i("#btn240mb")),
            (this.btnMonteSeuCombo = i("#btnMonteSeuCombo")),
            (this.btnNav = i("#btnNav")),
            (this.btnHeader = i("#btnHeader")),
            (this.btnBandaLarga2 = i("#btnBandaLarga2")),
            (this.btnContrate = i("#btnContrate")),
            (this.contrateBtns = i('[data-btn-type="contrate"]')),
            (this.form = i(".form-inline"));
        },
        bindMask: function () {
          this.cepInput.mask("00000-000");
        },
        bindEvents: function () {
          this.btnOpenClose.click(this.Events.openAndCloseCepDiv),
            this.btn35mb.click(this.Events.openAndCloseCepDiv),
            this.btnMonteSeuCombo.click(this.Events.openAndCloseCepDiv),
            this.btn240mb.click(this.Events.openAndCloseCepDiv),
            this.btn120mb.click(this.Events.openAndCloseCepDiv),
            this.btn120mb02.click(this.Events.openAndCloseCepDiv),
            this.btn120mb03.click(this.Events.openAndCloseCepDiv),
            this.btnNav.click(this.Events.openAndCloseCepDiv),
            this.btnHeader.click(this.Events.openAndCloseCepDiv),
            this.btnBandaLarga2.click(this.Events.openAndCloseCepDiv),
            this.btnContrate.click(this.Events.openAndCloseCepDiv),
            this.cepInput.keyup(this.Events.changeUrlVariable),
            this.numeroInput.keyup(this.Events.changeUrlVariable),
            this.consultarCobertura.click(this.Events.verifyValidInput),
            this.btn35mb.click(this.Events.setAttrModal),
            this.btnMonteSeuCombo.click(this.Events.setAttrModal),
            this.btn240mb.click(this.Events.setAttrModal),
            this.btn120mb.click(this.Events.setAttrModal),
            this.btn120mb02.click(this.Events.setAttrModal),
            this.btn120mb03.click(this.Events.setAttrModal),
            this.btnNav.click(this.Events.setAttrModal),
            this.btnHeader.click(this.Events.setAttrModal),
            this.btnBandaLarga2.click(this.Events.setAttrModal),
            this.btnContrate.click(this.Events.setAttrModal),
            this.contrateBtns.click(this.Events.defineFormUrl),
            this.form.submit(this.Events.dispatchFormAction);
        },
        Events: {
          openAndCloseCepDiv: function (t) {
            var e = r.Cep,
              n = i("#main");
            i(".main").toggleClass("active-body"),
              n.toggleClass("overflowHidden"),
              e.cepdiv.toggleClass("active");
          },
          defineFormUrl: function (t) {
            var e = i(this);
            r.Cep.form.attr("data-action", e.attr("data-btn-prop-type"));
          },
          dispatchFormAction: function (t) {
            t.preventDefault();
            var e = r.Cep,
              n = i(this).attr("data-action"),
              o = i(this)
                .find("#cep")
                .val()
                .replace(/[^0-9]/g, ""),
              s = i(this)
                .find("#numero")
                .val()
                .replace(/[^0-9]/g, ""),
              a = i("#" + n).attr("href"),
              c = i("#" + n)
                .attr("href")
                .match(/_ga=([^&]*)/)[1],
              l = a.replace("&_ga=" + c, "");
            if (
              (console.log(l),
              !o || 0 === o.length || !s || 0 === s.length || o.length < 8)
            )
              return e.cepError.css({ display: "block" });
            window.location.href =
              l + "&cep=" + o + "&number=" + s + "&_ga=" + c;
          },
          changeUrlVariable: function (t) {
            var e = r.Cep;
            t.target.getAttribute("id"),
              e.cepInput.val().length >= 9 && e.numeroInput.focus();
          },
          verifyValidInput: function (t) {
            var e = r.Cep,
              n = e.cepInput.val(),
              i = e.numeroInput.val();
            if (!n || 0 === n.length || !i || 0 === i.length)
              return e.cepError.css({ display: "block" }), t.preventDefault();
          },
        },
      });
    r = r || {};
    !(function (t) {
      (r.Main = {
        init: function () {
          this.cacheSelectors(), this.bindScripts();
        },
        cacheSelectors: function () {
          this.dataScript = document.querySelectorAll("[data-script]");
        },
        bindScripts: function () {
          for (
            var t = Array.prototype.slice
                .call(this.dataScript)
                .map(function (t) {
                  return t.getAttribute("data-script");
                }),
              e = t.filter(function (e, n) {
                return t.indexOf(e) == n;
              }),
              n = 0;
            n < e.length;
            n++
          )
            r[e[n]].init();
        },
      }),
        document.addEventListener("DOMContentLoaded", function () {
          r.Main.init();
        }),
        t(document).ready(function () {
          t("input").click(function (t) {
            t.preventDefault();
          }),
            t(".no-click").click(function (t) {
              t.preventDefault();
            });
        });
    })(jQuery);
  },
]);
