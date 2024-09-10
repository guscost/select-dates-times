import { d as D, t as z } from "./timezone-C_aROZb4.js";
import { c as C, g as O } from "./_commonjsHelpers-BosuxZz1.js";
var S = { exports: {} };
(function ($, H) {
  (function (s, a) {
    $.exports = a();
  })(C, function () {
    var s = "minute",
      a = /[+-]\d\d(?::?\d\d)?/g,
      m = /([+-]|\d\d)/g;
    return function (g, f, o) {
      var e = f.prototype;
      (o.utc = function (t) {
        var i = { date: t, utc: !0, args: arguments };
        return new f(i);
      }),
        (e.utc = function (t) {
          var i = o(this.toDate(), { locale: this.$L, utc: !0 });
          return t ? i.add(this.utcOffset(), s) : i;
        }),
        (e.local = function () {
          return o(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var c = e.parse;
      e.parse = function (t) {
        t.utc && (this.$u = !0),
          this.$utils().u(t.$offset) || (this.$offset = t.$offset),
          c.call(this, t);
      };
      var d = e.init;
      e.init = function () {
        if (this.$u) {
          var t = this.$d;
          (this.$y = t.getUTCFullYear()),
            (this.$M = t.getUTCMonth()),
            (this.$D = t.getUTCDate()),
            (this.$W = t.getUTCDay()),
            (this.$H = t.getUTCHours()),
            (this.$m = t.getUTCMinutes()),
            (this.$s = t.getUTCSeconds()),
            (this.$ms = t.getUTCMilliseconds());
        } else d.call(this);
      };
      var v = e.utcOffset;
      e.utcOffset = function (t, i) {
        var u = this.$utils().u;
        if (u(t))
          return this.$u ? 0 : u(this.$offset) ? v.call(this) : this.$offset;
        if (
          typeof t == "string" &&
          ((t = (function (M) {
            M === void 0 && (M = "");
            var L = M.match(a);
            if (!L) return null;
            var Y = ("" + L[0]).match(m) || ["-", 0, 0],
              y = Y[0],
              p = 60 * +Y[1] + +Y[2];
            return p === 0 ? 0 : y === "+" ? p : -p;
          })(t)),
          t === null)
        )
          return this;
        var n = Math.abs(t) <= 16 ? 60 * t : t,
          r = this;
        if (i) return (r.$offset = n), (r.$u = t === 0), r;
        if (t !== 0) {
          var T = this.$u
            ? this.toDate().getTimezoneOffset()
            : -1 * this.utcOffset();
          ((r = this.local().add(n + T, s)).$offset = n),
            (r.$x.$localOffset = T);
        } else r = this.utc();
        return r;
      };
      var l = e.format;
      (e.format = function (t) {
        var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return l.call(this, i);
      }),
        (e.valueOf = function () {
          var t = this.$utils().u(this.$offset)
            ? 0
            : this.$offset +
              (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t;
        }),
        (e.isUTC = function () {
          return !!this.$u;
        }),
        (e.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (e.toString = function () {
          return this.toDate().toUTCString();
        });
      var x = e.toDate;
      e.toDate = function (t) {
        return t === "s" && this.$offset
          ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
          : x.call(this);
      };
      var h = e.diff;
      e.diff = function (t, i, u) {
        if (t && this.$u === t.$u) return h.call(this, t, i, u);
        var n = this.local(),
          r = o(t).local();
        return h.call(n, r, i, u);
      };
    };
  });
})(S);
var F = S.exports;
const A = O(F);
var U = { exports: {} };
(function ($, H) {
  (function (s, a) {
    $.exports = a();
  })(C, function () {
    var s = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    };
    return function (a, m, g) {
      var f = m.prototype,
        o = f.format;
      (g.en.formats = s),
        (f.format = function (e) {
          e === void 0 && (e = "YYYY-MM-DDTHH:mm:ssZ");
          var c = this.$locale().formats,
            d = (function (v, l) {
              return v.replace(
                /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                function (x, h, t) {
                  var i = t && t.toUpperCase();
                  return (
                    h ||
                    l[t] ||
                    s[t] ||
                    l[i].replace(
                      /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                      function (u, n, r) {
                        return n || r.slice(1);
                      },
                    )
                  );
                },
              );
            })(e, c === void 0 ? {} : c);
          return o.call(this, d);
        });
    };
  });
})(U);
var b = U.exports;
const j = O(b);
D.extend(A);
D.extend(z);
D.extend(j);
const I = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};
export { I as default };
