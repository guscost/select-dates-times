import { r as u, a as zi, R as Ae } from "./index-BwDkhjyp.js";
import { d as rt, t as Ui } from "./timezone-C_aROZb4.js";
import { r as _t, b as qi } from "./index-BxibOwXx.js";
import "./_commonjsHelpers-BosuxZz1.js";
var So = { exports: {} },
  an = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xi = u,
  Gi = Symbol.for("react.element"),
  Ki = Symbol.for("react.fragment"),
  Zi = Object.prototype.hasOwnProperty,
  Qi = Xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ji = { key: !0, ref: !0, __self: !0, __source: !0 };
function Po(e, t, n) {
  var r,
    o = {},
    a = null,
    i = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Zi.call(t, r) && !Ji.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Gi,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: Qi.current,
  };
}
an.Fragment = Ki;
an.jsx = Po;
an.jsxs = Po;
So.exports = an;
var f = So.exports;
function Ge(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    (o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var es = ["color"],
  ts = u.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ge(e, es);
    return u.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      u.createElement("path", {
        d: "M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  ns = ["color"],
  rs = u.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ge(e, ns);
    return u.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      u.createElement("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  os = ["color"],
  as = u.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ge(e, os);
    return u.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      u.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  is = ["color"],
  ss = u.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ge(e, is);
    return u.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      u.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  ls = ["color"],
  cs = u.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ge(e, ls);
    return u.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      u.createElement("path", {
        d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  us = ["color"],
  ds = u.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ge(e, us);
    return u.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      u.createElement("path", {
        d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  fs = ["color"],
  ms = u.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ge(e, fs);
    return u.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      u.createElement("path", {
        d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function hs(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Eo(...e) {
  return (t) => e.forEach((n) => hs(n, t));
}
function X(...e) {
  return u.useCallback(Eo(...e), e);
}
function Mt(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i),
      l = n.length;
    n = [...n, i];
    function c(m) {
      const { scope: h, children: p, ...g } = m,
        v = (h == null ? void 0 : h[e][l]) || s,
        b = u.useMemo(() => g, Object.values(g));
      return f.jsx(v.Provider, { value: b, children: p });
    }
    function d(m, h) {
      const p = (h == null ? void 0 : h[e][l]) || s,
        g = u.useContext(p);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return (c.displayName = a + "Provider"), [c, d];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function (s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]);
    };
  };
  return (o.scopeName = e), [r, ps(o, ...t)];
}
function ps(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const m = l(a)[`__scope${c}`];
        return { ...s, ...m };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var ze = u.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = u.Children.toArray(n),
    a = o.find(gs);
  if (a) {
    const i = a.props.children,
      s = o.map((l) =>
        l === a
          ? u.Children.count(i) > 1
            ? u.Children.only(null)
            : u.isValidElement(i)
              ? i.props.children
              : null
          : l,
      );
    return f.jsx(kn, {
      ...r,
      ref: t,
      children: u.isValidElement(i) ? u.cloneElement(i, void 0, s) : null,
    });
  }
  return f.jsx(kn, { ...r, ref: t, children: n });
});
ze.displayName = "Slot";
var kn = u.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (u.isValidElement(n)) {
    const o = ys(n);
    return u.cloneElement(n, { ...bs(r, n.props), ref: t ? Eo(t, o) : o });
  }
  return u.Children.count(n) > 1 ? u.Children.only(null) : null;
});
kn.displayName = "SlotClone";
var vs = ({ children: e }) => f.jsx(f.Fragment, { children: e });
function gs(e) {
  return u.isValidElement(e) && e.type === vs;
}
function bs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? o && a
        ? (n[r] = (...s) => {
            a(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...a })
        : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ys(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ws = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  U = ws.reduce((e, t) => {
    const n = u.forwardRef((r, o) => {
      const { asChild: a, ...i } = r,
        s = a ? ze : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        f.jsx(s, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function xs(e, t) {
  e && _t.flushSync(() => e.dispatchEvent(t));
}
function te(e) {
  const t = u.useRef(e);
  return (
    u.useEffect(() => {
      t.current = e;
    }),
    u.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function Cs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = te(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Ss = "DismissableLayer",
  An = "dismissableLayer.update",
  Ps = "dismissableLayer.pointerDownOutside",
  Es = "dismissableLayer.focusOutside",
  Wr,
  No = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Gn = u.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: i,
        onDismiss: s,
        ...l
      } = e,
      c = u.useContext(No),
      [d, m] = u.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = u.useState({}),
      g = X(t, (N) => m(N)),
      v = Array.from(c.layers),
      [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = v.indexOf(b),
      w = d ? v.indexOf(d) : -1,
      x = c.layersWithOutsidePointerEventsDisabled.size > 0,
      C = w >= y,
      P = Ms((N) => {
        const R = N.target,
          O = [...c.branches].some((T) => T.contains(R));
        !C ||
          O ||
          (o == null || o(N),
          i == null || i(N),
          N.defaultPrevented || s == null || s());
      }, h),
      _ = Os((N) => {
        const R = N.target;
        [...c.branches].some((T) => T.contains(R)) ||
          (a == null || a(N),
          i == null || i(N),
          N.defaultPrevented || s == null || s());
      }, h);
    return (
      Cs((N) => {
        w === c.layers.size - 1 &&
          (r == null || r(N),
          !N.defaultPrevented && s && (N.preventDefault(), s()));
      }, h),
      u.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Wr = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Fr(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Wr);
            }
          );
      }, [d, h, n, c]),
      u.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            Fr());
        },
        [d, c],
      ),
      u.useEffect(() => {
        const N = () => p({});
        return (
          document.addEventListener(An, N),
          () => document.removeEventListener(An, N)
        );
      }, []),
      f.jsx(U.div, {
        ...l,
        ref: g,
        style: {
          pointerEvents: x ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: H(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: H(e.onPointerDownCapture, P.onPointerDownCapture),
      })
    );
  });
Gn.displayName = Ss;
var Ns = "DismissableLayerBranch",
  _s = u.forwardRef((e, t) => {
    const n = u.useContext(No),
      r = u.useRef(null),
      o = X(t, r);
    return (
      u.useEffect(() => {
        const a = r.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      f.jsx(U.div, { ...e, ref: o })
    );
  });
_s.displayName = Ns;
function Ms(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = te(e),
    r = u.useRef(!1),
    o = u.useRef(() => {});
  return (
    u.useEffect(() => {
      const a = (s) => {
          if (s.target && !r.current) {
            let l = function () {
              _o(Ps, n, c, { discrete: !0 });
            };
            const c = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Os(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = te(e),
    r = u.useRef(!1);
  return (
    u.useEffect(() => {
      const o = (a) => {
        a.target &&
          !r.current &&
          _o(Es, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Fr() {
  const e = new CustomEvent(An);
  document.dispatchEvent(e);
}
function _o(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? xs(o, a) : o.dispatchEvent(a);
}
var bn = 0;
function Mo() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Br()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Br()),
      bn++,
      () => {
        bn === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          bn--;
      }
    );
  }, []);
}
function Br() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var yn = "focusScope.autoFocusOnMount",
  wn = "focusScope.autoFocusOnUnmount",
  Hr = { bubbles: !1, cancelable: !0 },
  Rs = "FocusScope",
  Kn = u.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        ...i
      } = e,
      [s, l] = u.useState(null),
      c = te(o),
      d = te(a),
      m = u.useRef(null),
      h = X(t, (v) => l(v)),
      p = u.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    u.useEffect(() => {
      if (r) {
        let v = function (x) {
            if (p.paused || !s) return;
            const C = x.target;
            s.contains(C) ? (m.current = C) : je(m.current, { select: !0 });
          },
          b = function (x) {
            if (p.paused || !s) return;
            const C = x.relatedTarget;
            C !== null && (s.contains(C) || je(m.current, { select: !0 }));
          },
          y = function (x) {
            if (document.activeElement === document.body)
              for (const P of x) P.removedNodes.length > 0 && je(s);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", b);
        const w = new MutationObserver(y);
        return (
          s && w.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", b),
              w.disconnect();
          }
        );
      }
    }, [r, s, p.paused]),
      u.useEffect(() => {
        if (s) {
          Vr.add(p);
          const v = document.activeElement;
          if (!s.contains(v)) {
            const y = new CustomEvent(yn, Hr);
            s.addEventListener(yn, c),
              s.dispatchEvent(y),
              y.defaultPrevented ||
                (Ds(Is(Oo(s)), { select: !0 }),
                document.activeElement === v && je(s));
          }
          return () => {
            s.removeEventListener(yn, c),
              setTimeout(() => {
                const y = new CustomEvent(wn, Hr);
                s.addEventListener(wn, d),
                  s.dispatchEvent(y),
                  y.defaultPrevented || je(v ?? document.body, { select: !0 }),
                  s.removeEventListener(wn, d),
                  Vr.remove(p);
              }, 0);
          };
        }
      }, [s, c, d, p]);
    const g = u.useCallback(
      (v) => {
        if ((!n && !r) || p.paused) return;
        const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          y = document.activeElement;
        if (b && y) {
          const w = v.currentTarget,
            [x, C] = Ts(w);
          x && C
            ? !v.shiftKey && y === C
              ? (v.preventDefault(), n && je(x, { select: !0 }))
              : v.shiftKey &&
                y === x &&
                (v.preventDefault(), n && je(C, { select: !0 }))
            : y === w && v.preventDefault();
        }
      },
      [n, r, p.paused],
    );
    return f.jsx(U.div, { tabIndex: -1, ...i, ref: h, onKeyDown: g });
  });
Kn.displayName = Rs;
function Ds(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((je(r, { select: t }), document.activeElement !== n)) return;
}
function Ts(e) {
  const t = Oo(e),
    n = Yr(t, e),
    r = Yr(t.reverse(), e);
  return [n, r];
}
function Oo(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Yr(e, t) {
  for (const n of e) if (!ks(n, { upTo: t })) return n;
}
function ks(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function As(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function je(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && As(e) && t && e.select();
  }
}
var Vr = js();
function js() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = $r(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = $r(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function $r(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Is(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ne =
    globalThis != null && globalThis.document ? u.useLayoutEffect : () => {},
  Ls = zi.useId || (() => {}),
  Ws = 0;
function sn(e) {
  const [t, n] = u.useState(Ls());
  return (
    ne(() => {
      n((r) => r ?? String(Ws++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const Fs = ["top", "right", "bottom", "left"],
  be = Math.min,
  le = Math.max,
  Gt = Math.round,
  Lt = Math.floor,
  Ie = (e) => ({ x: e, y: e }),
  Bs = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Hs = { start: "end", end: "start" };
function jn(e, t, n) {
  return le(e, be(t, n));
}
function _e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Me(e) {
  return e.split("-")[0];
}
function ut(e) {
  return e.split("-")[1];
}
function Zn(e) {
  return e === "x" ? "y" : "x";
}
function Qn(e) {
  return e === "y" ? "height" : "width";
}
function Le(e) {
  return ["top", "bottom"].includes(Me(e)) ? "y" : "x";
}
function Jn(e) {
  return Zn(Le(e));
}
function Ys(e, t, n) {
  n === void 0 && (n = !1);
  const r = ut(e),
    o = Jn(e),
    a = Qn(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[a] > t.floating[a] && (i = Kt(i)), [i, Kt(i)];
}
function Vs(e) {
  const t = Kt(e);
  return [In(e), t, In(t)];
}
function In(e) {
  return e.replace(/start|end/g, (t) => Hs[t]);
}
function $s(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    a = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function zs(e, t, n, r) {
  const o = ut(e);
  let a = $s(Me(e), n === "start", r);
  return (
    o && ((a = a.map((i) => i + "-" + o)), t && (a = a.concat(a.map(In)))), a
  );
}
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bs[t]);
}
function Us(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ro(e) {
  return typeof e != "number"
    ? Us(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Zt(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function zr(e, t, n) {
  let { reference: r, floating: o } = e;
  const a = Le(t),
    i = Jn(t),
    s = Qn(i),
    l = Me(t),
    c = a === "y",
    d = r.x + r.width / 2 - o.width / 2,
    m = r.y + r.height / 2 - o.height / 2,
    h = r[s] / 2 - o[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: d, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: m };
      break;
    case "left":
      p = { x: r.x - o.width, y: m };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (ut(t)) {
    case "start":
      p[i] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      p[i] += h * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const qs = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: a = [],
      platform: i,
    } = n,
    s = a.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: m } = zr(c, r, l),
    h = r,
    p = {},
    g = 0;
  for (let v = 0; v < s.length; v++) {
    const { name: b, fn: y } = s[v],
      {
        x: w,
        y: x,
        data: C,
        reset: P,
      } = await y({
        x: d,
        y: m,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: p,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (d = w ?? d),
      (m = x ?? m),
      (p = { ...p, [b]: { ...p[b], ...C } }),
      P &&
        g <= 50 &&
        (g++,
        typeof P == "object" &&
          (P.placement && (h = P.placement),
          P.rects &&
            (c =
              P.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : P.rects),
          ({ x: d, y: m } = zr(c, h, l))),
        (v = -1));
  }
  return { x: d, y: m, placement: h, strategy: o, middlewareData: p };
};
async function Pt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: a, rects: i, elements: s, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: m = "floating",
      altBoundary: h = !1,
      padding: p = 0,
    } = _e(t, e),
    g = Ro(p),
    b = s[h ? (m === "floating" ? "reference" : "floating") : m],
    y = Zt(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(s.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    w =
      m === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(s.floating)),
    C = (await (a.isElement == null ? void 0 : a.isElement(x)))
      ? (await (a.getScale == null ? void 0 : a.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    P = Zt(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: w,
            offsetParent: x,
            strategy: l,
          })
        : w,
    );
  return {
    top: (y.top - P.top + g.top) / C.y,
    bottom: (P.bottom - y.bottom + g.bottom) / C.y,
    left: (y.left - P.left + g.left) / C.x,
    right: (P.right - y.right + g.right) / C.x,
  };
}
const Xs = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: a,
          platform: i,
          elements: s,
          middlewareData: l,
        } = t,
        { element: c, padding: d = 0 } = _e(e, t) || {};
      if (c == null) return {};
      const m = Ro(d),
        h = { x: n, y: r },
        p = Jn(o),
        g = Qn(p),
        v = await i.getDimensions(c),
        b = p === "y",
        y = b ? "top" : "left",
        w = b ? "bottom" : "right",
        x = b ? "clientHeight" : "clientWidth",
        C = a.reference[g] + a.reference[p] - h[p] - a.floating[g],
        P = h[p] - a.reference[p],
        _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let N = _ ? _[x] : 0;
      (!N || !(await (i.isElement == null ? void 0 : i.isElement(_)))) &&
        (N = s.floating[x] || a.floating[g]);
      const R = C / 2 - P / 2,
        O = N / 2 - v[g] / 2 - 1,
        T = be(m[y], O),
        L = be(m[w], O),
        M = T,
        V = N - v[g] - L,
        W = N / 2 - v[g] / 2 + R,
        j = jn(M, W, V),
        B =
          !l.arrow &&
          ut(o) != null &&
          W !== j &&
          a.reference[g] / 2 - (W < M ? T : L) - v[g] / 2 < 0,
        S = B ? (W < M ? W - M : W - V) : 0;
      return {
        [p]: h[p] + S,
        data: {
          [p]: j,
          centerOffset: W - j - S,
          ...(B && { alignmentOffset: S }),
        },
        reset: B,
      };
    },
  }),
  Gs = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: a,
              rects: i,
              initialPlacement: s,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: m = !0,
              fallbackPlacements: h,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: v = !0,
              ...b
            } = _e(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const y = Me(o),
            w = Le(s),
            x = Me(s) === s,
            C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            P = h || (x || !v ? [Kt(s)] : Vs(s)),
            _ = g !== "none";
          !h && _ && P.push(...zs(s, v, g, C));
          const N = [s, ...P],
            R = await Pt(t, b),
            O = [];
          let T = ((r = a.flip) == null ? void 0 : r.overflows) || [];
          if ((d && O.push(R[y]), m)) {
            const W = Ys(o, i, C);
            O.push(R[W[0]], R[W[1]]);
          }
          if (
            ((T = [...T, { placement: o, overflows: O }]),
            !O.every((W) => W <= 0))
          ) {
            var L, M;
            const W = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1,
              j = N[W];
            if (j)
              return {
                data: { index: W, overflows: T },
                reset: { placement: j },
              };
            let B =
              (M = T.filter((S) => S.overflows[0] <= 0).sort(
                (S, E) => S.overflows[1] - E.overflows[1],
              )[0]) == null
                ? void 0
                : M.placement;
            if (!B)
              switch (p) {
                case "bestFit": {
                  var V;
                  const S =
                    (V = T.filter((E) => {
                      if (_) {
                        const I = Le(E.placement);
                        return I === w || I === "y";
                      }
                      return !0;
                    })
                      .map((E) => [
                        E.placement,
                        E.overflows
                          .filter((I) => I > 0)
                          .reduce((I, oe) => I + oe, 0),
                      ])
                      .sort((E, I) => E[1] - I[1])[0]) == null
                      ? void 0
                      : V[0];
                  S && (B = S);
                  break;
                }
                case "initialPlacement":
                  B = s;
                  break;
              }
            if (o !== B) return { reset: { placement: B } };
          }
          return {};
        },
      }
    );
  };
function Ur(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function qr(e) {
  return Fs.some((t) => e[t] >= 0);
}
const Ks = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = _e(e, t);
        switch (r) {
          case "referenceHidden": {
            const a = await Pt(t, { ...o, elementContext: "reference" }),
              i = Ur(a, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: qr(i) },
            };
          }
          case "escaped": {
            const a = await Pt(t, { ...o, altBoundary: !0 }),
              i = Ur(a, n.floating);
            return { data: { escapedOffsets: i, escaped: qr(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Zs(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Me(n),
    s = ut(n),
    l = Le(n) === "y",
    c = ["left", "top"].includes(i) ? -1 : 1,
    d = a && l ? -1 : 1,
    m = _e(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: g,
  } = typeof m == "number"
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m };
  return (
    s && typeof g == "number" && (p = s === "end" ? g * -1 : g),
    l ? { x: p * d, y: h * c } : { x: h * c, y: p * d }
  );
}
const Qs = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: a, placement: i, middlewareData: s } = t,
            l = await Zs(t, e);
          return i === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: a + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  Js = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: a = !0,
              crossAxis: i = !1,
              limiter: s = {
                fn: (b) => {
                  let { x: y, y: w } = b;
                  return { x: y, y: w };
                },
              },
              ...l
            } = _e(e, t),
            c = { x: n, y: r },
            d = await Pt(t, l),
            m = Le(Me(o)),
            h = Zn(m);
          let p = c[h],
            g = c[m];
          if (a) {
            const b = h === "y" ? "top" : "left",
              y = h === "y" ? "bottom" : "right",
              w = p + d[b],
              x = p - d[y];
            p = jn(w, p, x);
          }
          if (i) {
            const b = m === "y" ? "top" : "left",
              y = m === "y" ? "bottom" : "right",
              w = g + d[b],
              x = g - d[y];
            g = jn(w, g, x);
          }
          const v = s.fn({ ...t, [h]: p, [m]: g });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  },
  el = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: a, middlewareData: i } = t,
            { offset: s = 0, mainAxis: l = !0, crossAxis: c = !0 } = _e(e, t),
            d = { x: n, y: r },
            m = Le(o),
            h = Zn(m);
          let p = d[h],
            g = d[m];
          const v = _e(s, t),
            b =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const x = h === "y" ? "height" : "width",
              C = a.reference[h] - a.floating[x] + b.mainAxis,
              P = a.reference[h] + a.reference[x] - b.mainAxis;
            p < C ? (p = C) : p > P && (p = P);
          }
          if (c) {
            var y, w;
            const x = h === "y" ? "width" : "height",
              C = ["top", "left"].includes(Me(o)),
              P =
                a.reference[m] -
                a.floating[x] +
                ((C && ((y = i.offset) == null ? void 0 : y[m])) || 0) +
                (C ? 0 : b.crossAxis),
              _ =
                a.reference[m] +
                a.reference[x] +
                (C ? 0 : ((w = i.offset) == null ? void 0 : w[m]) || 0) -
                (C ? b.crossAxis : 0);
            g < P ? (g = P) : g > _ && (g = _);
          }
          return { [h]: p, [m]: g };
        },
      }
    );
  },
  tl = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: a } = t,
            { apply: i = () => {}, ...s } = _e(e, t),
            l = await Pt(t, s),
            c = Me(n),
            d = ut(n),
            m = Le(n) === "y",
            { width: h, height: p } = r.floating;
          let g, v;
          c === "top" || c === "bottom"
            ? ((g = c),
              (v =
                d ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((v = c), (g = d === "end" ? "top" : "bottom"));
          const b = p - l.top - l.bottom,
            y = h - l.left - l.right,
            w = be(p - l[g], b),
            x = be(h - l[v], y),
            C = !t.middlewareData.shift;
          let P = w,
            _ = x;
          if (
            (m ? (_ = d || C ? be(x, y) : y) : (P = d || C ? be(w, b) : b),
            C && !d)
          ) {
            const R = le(l.left, 0),
              O = le(l.right, 0),
              T = le(l.top, 0),
              L = le(l.bottom, 0);
            m
              ? (_ = h - 2 * (R !== 0 || O !== 0 ? R + O : le(l.left, l.right)))
              : (P =
                  p - 2 * (T !== 0 || L !== 0 ? T + L : le(l.top, l.bottom)));
          }
          await i({ ...t, availableWidth: _, availableHeight: P });
          const N = await o.getDimensions(a.floating);
          return h !== N.width || p !== N.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function dt(e) {
  return Do(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ce(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Oe(e) {
  var t;
  return (t = (Do(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Do(e) {
  return e instanceof Node || e instanceof ce(e).Node;
}
function we(e) {
  return e instanceof Element || e instanceof ce(e).Element;
}
function xe(e) {
  return e instanceof HTMLElement || e instanceof ce(e).HTMLElement;
}
function Xr(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ce(e).ShadowRoot;
}
function Ot(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = fe(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function nl(e) {
  return ["table", "td", "th"].includes(dt(e));
}
function ln(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function er(e) {
  const t = tr(),
    n = fe(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function rl(e) {
  let t = We(e);
  for (; xe(t) && !it(t); ) {
    if (ln(t)) return null;
    if (er(t)) return t;
    t = We(t);
  }
  return null;
}
function tr() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function it(e) {
  return ["html", "body", "#document"].includes(dt(e));
}
function fe(e) {
  return ce(e).getComputedStyle(e);
}
function cn(e) {
  return we(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function We(e) {
  if (dt(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Xr(e) && e.host) || Oe(e);
  return Xr(t) ? t.host : t;
}
function To(e) {
  const t = We(e);
  return it(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : xe(t) && Ot(t)
      ? t
      : To(t);
}
function Et(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = To(e),
    a = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ce(o);
  return a
    ? t.concat(
        i,
        i.visualViewport || [],
        Ot(o) ? o : [],
        i.frameElement && n ? Et(i.frameElement) : [],
      )
    : t.concat(o, Et(o, [], n));
}
function ko(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = xe(e),
    a = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    s = Gt(n) !== a || Gt(r) !== i;
  return s && ((n = a), (r = i)), { width: n, height: r, $: s };
}
function nr(e) {
  return we(e) ? e : e.contextElement;
}
function ot(e) {
  const t = nr(e);
  if (!xe(t)) return Ie(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: a } = ko(t);
  let i = (a ? Gt(n.width) : n.width) / r,
    s = (a ? Gt(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: i, y: s }
  );
}
const ol = Ie(0);
function Ao(e) {
  const t = ce(e);
  return !tr() || !t.visualViewport
    ? ol
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function al(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ce(e)) ? !1 : t;
}
function Ue(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    a = nr(e);
  let i = Ie(1);
  t && (r ? we(r) && (i = ot(r)) : (i = ot(e)));
  const s = al(a, n, r) ? Ao(a) : Ie(0);
  let l = (o.left + s.x) / i.x,
    c = (o.top + s.y) / i.y,
    d = o.width / i.x,
    m = o.height / i.y;
  if (a) {
    const h = ce(a),
      p = r && we(r) ? ce(r) : r;
    let g = h,
      v = g.frameElement;
    for (; v && r && p !== g; ) {
      const b = ot(v),
        y = v.getBoundingClientRect(),
        w = fe(v),
        x = y.left + (v.clientLeft + parseFloat(w.paddingLeft)) * b.x,
        C = y.top + (v.clientTop + parseFloat(w.paddingTop)) * b.y;
      (l *= b.x),
        (c *= b.y),
        (d *= b.x),
        (m *= b.y),
        (l += x),
        (c += C),
        (g = ce(v)),
        (v = g.frameElement);
    }
  }
  return Zt({ width: d, height: m, x: l, y: c });
}
function il(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const a = o === "fixed",
    i = Oe(r),
    s = t ? ln(t.floating) : !1;
  if (r === i || (s && a)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = Ie(1);
  const d = Ie(0),
    m = xe(r);
  if (
    (m || (!m && !a)) &&
    ((dt(r) !== "body" || Ot(i)) && (l = cn(r)), xe(r))
  ) {
    const h = Ue(r);
    (c = ot(r)), (d.x = h.x + r.clientLeft), (d.y = h.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y,
  };
}
function sl(e) {
  return Array.from(e.getClientRects());
}
function jo(e) {
  return Ue(Oe(e)).left + cn(e).scrollLeft;
}
function ll(e) {
  const t = Oe(e),
    n = cn(e),
    r = e.ownerDocument.body,
    o = le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + jo(e);
  const s = -n.scrollTop;
  return (
    fe(r).direction === "rtl" && (i += le(t.clientWidth, r.clientWidth) - o),
    { width: o, height: a, x: i, y: s }
  );
}
function cl(e, t) {
  const n = ce(e),
    r = Oe(e),
    o = n.visualViewport;
  let a = r.clientWidth,
    i = r.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (a = o.width), (i = o.height);
    const c = tr();
    (!c || (c && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: a, height: i, x: s, y: l };
}
function ul(e, t) {
  const n = Ue(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    a = xe(e) ? ot(e) : Ie(1),
    i = e.clientWidth * a.x,
    s = e.clientHeight * a.y,
    l = o * a.x,
    c = r * a.y;
  return { width: i, height: s, x: l, y: c };
}
function Gr(e, t, n) {
  let r;
  if (t === "viewport") r = cl(e, n);
  else if (t === "document") r = ll(Oe(e));
  else if (we(t)) r = ul(t, n);
  else {
    const o = Ao(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Zt(r);
}
function Io(e, t) {
  const n = We(e);
  return n === t || !we(n) || it(n)
    ? !1
    : fe(n).position === "fixed" || Io(n, t);
}
function dl(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Et(e, [], !1).filter((s) => we(s) && dt(s) !== "body"),
    o = null;
  const a = fe(e).position === "fixed";
  let i = a ? We(e) : e;
  for (; we(i) && !it(i); ) {
    const s = fe(i),
      l = er(i);
    !l && s.position === "fixed" && (o = null),
      (
        a
          ? !l && !o
          : (!l &&
              s.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Ot(i) && !l && Io(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = s),
      (i = We(i));
  }
  return t.set(e, r), r;
}
function fl(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? ln(t)
          ? []
          : dl(t, this._c)
        : [].concat(n)),
      r,
    ],
    s = i[0],
    l = i.reduce(
      (c, d) => {
        const m = Gr(t, d, o);
        return (
          (c.top = le(m.top, c.top)),
          (c.right = be(m.right, c.right)),
          (c.bottom = be(m.bottom, c.bottom)),
          (c.left = le(m.left, c.left)),
          c
        );
      },
      Gr(t, s, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ml(e) {
  const { width: t, height: n } = ko(e);
  return { width: t, height: n };
}
function hl(e, t, n) {
  const r = xe(t),
    o = Oe(t),
    a = n === "fixed",
    i = Ue(e, !0, a, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = Ie(0);
  if (r || (!r && !a))
    if (((dt(t) !== "body" || Ot(o)) && (s = cn(t)), r)) {
      const m = Ue(t, !0, a, t);
      (l.x = m.x + t.clientLeft), (l.y = m.y + t.clientTop);
    } else o && (l.x = jo(o));
  const c = i.left + s.scrollLeft - l.x,
    d = i.top + s.scrollTop - l.y;
  return { x: c, y: d, width: i.width, height: i.height };
}
function xn(e) {
  return fe(e).position === "static";
}
function Kr(e, t) {
  return !xe(e) || fe(e).position === "fixed"
    ? null
    : t
      ? t(e)
      : e.offsetParent;
}
function Lo(e, t) {
  const n = ce(e);
  if (ln(e)) return n;
  if (!xe(e)) {
    let o = We(e);
    for (; o && !it(o); ) {
      if (we(o) && !xn(o)) return o;
      o = We(o);
    }
    return n;
  }
  let r = Kr(e, t);
  for (; r && nl(r) && xn(r); ) r = Kr(r, t);
  return r && it(r) && xn(r) && !er(r) ? n : r || rl(e) || n;
}
const pl = async function (e) {
  const t = this.getOffsetParent || Lo,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: hl(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function vl(e) {
  return fe(e).direction === "rtl";
}
const gl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: il,
  getDocumentElement: Oe,
  getClippingRect: fl,
  getOffsetParent: Lo,
  getElementRects: pl,
  getClientRects: sl,
  getDimensions: ml,
  getScale: ot,
  isElement: we,
  isRTL: vl,
};
function bl(e, t) {
  let n = null,
    r;
  const o = Oe(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const { left: c, top: d, width: m, height: h } = e.getBoundingClientRect();
    if ((s || t(), !m || !h)) return;
    const p = Lt(d),
      g = Lt(o.clientWidth - (c + m)),
      v = Lt(o.clientHeight - (d + h)),
      b = Lt(c),
      w = {
        rootMargin: -p + "px " + -g + "px " + -v + "px " + -b + "px",
        threshold: le(0, be(1, l)) || 1,
      };
    let x = !0;
    function C(P) {
      const _ = P[0].intersectionRatio;
      if (_ !== l) {
        if (!x) return i();
        _
          ? i(!1, _)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...w, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function yl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: a = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = nr(e),
    d = o || a ? [...(c ? Et(c) : []), ...Et(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, { passive: !0 }),
      a && y.addEventListener("resize", n);
  });
  const m = c && s ? bl(c, n) : null;
  let h = -1,
    p = null;
  i &&
    ((p = new ResizeObserver((y) => {
      let [w] = y;
      w &&
        w.target === c &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var x;
          (x = p) == null || x.observe(t);
        }))),
        n();
    })),
    c && !l && p.observe(c),
    p.observe(t));
  let g,
    v = l ? Ue(e) : null;
  l && b();
  function b() {
    const y = Ue(e);
    v &&
      (y.x !== v.x ||
        y.y !== v.y ||
        y.width !== v.width ||
        y.height !== v.height) &&
      n(),
      (v = y),
      (g = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      var y;
      d.forEach((w) => {
        o && w.removeEventListener("scroll", n),
          a && w.removeEventListener("resize", n);
      }),
        m == null || m(),
        (y = p) == null || y.disconnect(),
        (p = null),
        l && cancelAnimationFrame(g);
    }
  );
}
const wl = Qs,
  xl = Js,
  Cl = Gs,
  Sl = tl,
  Pl = Ks,
  Zr = Xs,
  El = el,
  Nl = (e, t, n) => {
    const r = new Map(),
      o = { platform: gl, ...n },
      a = { ...o.platform, _c: r };
    return qs(e, t, { ...o, platform: a });
  };
var zt = typeof document < "u" ? u.useLayoutEffect : u.useEffect;
function Qt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Qt(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Qt(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Wo(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qr(e, t) {
  const n = Wo(e);
  return Math.round(t * n) / n;
}
function Jr(e) {
  const t = u.useRef(e);
  return (
    zt(() => {
      t.current = e;
    }),
    t
  );
}
function _l(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: a, floating: i } = {},
      transform: s = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [d, m] = u.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, p] = u.useState(r);
  Qt(h, r) || p(r);
  const [g, v] = u.useState(null),
    [b, y] = u.useState(null),
    w = u.useCallback((S) => {
      S !== _.current && ((_.current = S), v(S));
    }, []),
    x = u.useCallback((S) => {
      S !== N.current && ((N.current = S), y(S));
    }, []),
    C = a || g,
    P = i || b,
    _ = u.useRef(null),
    N = u.useRef(null),
    R = u.useRef(d),
    O = l != null,
    T = Jr(l),
    L = Jr(o),
    M = u.useCallback(() => {
      if (!_.current || !N.current) return;
      const S = { placement: t, strategy: n, middleware: h };
      L.current && (S.platform = L.current),
        Nl(_.current, N.current, S).then((E) => {
          const I = { ...E, isPositioned: !0 };
          V.current &&
            !Qt(R.current, I) &&
            ((R.current = I),
            _t.flushSync(() => {
              m(I);
            }));
        });
    }, [h, t, n, L]);
  zt(() => {
    c === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), m((S) => ({ ...S, isPositioned: !1 })));
  }, [c]);
  const V = u.useRef(!1);
  zt(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    [],
  ),
    zt(() => {
      if ((C && (_.current = C), P && (N.current = P), C && P)) {
        if (T.current) return T.current(C, P, M);
        M();
      }
    }, [C, P, M, T, O]);
  const W = u.useMemo(
      () => ({ reference: _, floating: N, setReference: w, setFloating: x }),
      [w, x],
    ),
    j = u.useMemo(() => ({ reference: C, floating: P }), [C, P]),
    B = u.useMemo(() => {
      const S = { position: n, left: 0, top: 0 };
      if (!j.floating) return S;
      const E = Qr(j.floating, d.x),
        I = Qr(j.floating, d.y);
      return s
        ? {
            ...S,
            transform: "translate(" + E + "px, " + I + "px)",
            ...(Wo(j.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: E, top: I };
    }, [n, s, j.floating, d.x, d.y]);
  return u.useMemo(
    () => ({ ...d, update: M, refs: W, elements: j, floatingStyles: B }),
    [d, M, W, j, B],
  );
}
const Ml = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Zr({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Zr({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  Ol = (e, t) => ({ ...wl(e), options: [e, t] }),
  Rl = (e, t) => ({ ...xl(e), options: [e, t] }),
  Dl = (e, t) => ({ ...El(e), options: [e, t] }),
  Tl = (e, t) => ({ ...Cl(e), options: [e, t] }),
  kl = (e, t) => ({ ...Sl(e), options: [e, t] }),
  Al = (e, t) => ({ ...Pl(e), options: [e, t] }),
  jl = (e, t) => ({ ...Ml(e), options: [e, t] });
var Il = "Arrow",
  Fo = u.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...a } = e;
    return f.jsx(U.svg, {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : f.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Fo.displayName = Il;
var Ll = Fo;
function Wl(e) {
  const [t, n] = u.useState(void 0);
  return (
    ne(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const a = o[0];
          let i, s;
          if ("borderBoxSize" in a) {
            const l = a.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (i = c.inlineSize), (s = c.blockSize);
          } else (i = e.offsetWidth), (s = e.offsetHeight);
          n({ width: i, height: s });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var rr = "Popper",
  [Bo, un] = Mt(rr),
  [Fl, Ho] = Bo(rr),
  Yo = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = u.useState(null);
    return f.jsx(Fl, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
Yo.displayName = rr;
var Vo = "PopperAnchor",
  $o = u.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      a = Ho(Vo, n),
      i = u.useRef(null),
      s = X(t, i);
    return (
      u.useEffect(() => {
        a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : f.jsx(U.div, { ...o, ref: s })
    );
  });
$o.displayName = Vo;
var or = "PopperContent",
  [Bl, Hl] = Bo(or),
  zo = u.forwardRef((e, t) => {
    var k, K, ee, q, $, z;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: a = "center",
        alignOffset: i = 0,
        arrowPadding: s = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: m = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: g,
        ...v
      } = e,
      b = Ho(or, n),
      [y, w] = u.useState(null),
      x = X(t, (se) => w(se)),
      [C, P] = u.useState(null),
      _ = Wl(C),
      N = (_ == null ? void 0 : _.width) ?? 0,
      R = (_ == null ? void 0 : _.height) ?? 0,
      O = r + (a !== "center" ? "-" + a : ""),
      T =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      L = Array.isArray(c) ? c : [c],
      M = L.length > 0,
      V = { padding: T, boundary: L.filter(Vl), altBoundary: M },
      {
        refs: W,
        floatingStyles: j,
        placement: B,
        isPositioned: S,
        middlewareData: E,
      } = _l({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...se) =>
          yl(...se, { animationFrame: p === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          Ol({ mainAxis: o + R, alignmentAxis: i }),
          l &&
            Rl({
              mainAxis: !0,
              crossAxis: !1,
              limiter: m === "partial" ? Dl() : void 0,
              ...V,
            }),
          l && Tl({ ...V }),
          kl({
            ...V,
            apply: ({
              elements: se,
              rects: ve,
              availableWidth: pt,
              availableHeight: vt,
            }) => {
              const { width: gt, height: $i } = ve.reference,
                It = se.floating.style;
              It.setProperty("--radix-popper-available-width", `${pt}px`),
                It.setProperty("--radix-popper-available-height", `${vt}px`),
                It.setProperty("--radix-popper-anchor-width", `${gt}px`),
                It.setProperty("--radix-popper-anchor-height", `${$i}px`);
            },
          }),
          C && jl({ element: C, padding: s }),
          $l({ arrowWidth: N, arrowHeight: R }),
          h && Al({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [I, oe] = Xo(B),
      Q = te(g);
    ne(() => {
      S && (Q == null || Q());
    }, [S, Q]);
    const pe = (k = E.arrow) == null ? void 0 : k.x,
      ht = (K = E.arrow) == null ? void 0 : K.y,
      Re = ((ee = E.arrow) == null ? void 0 : ee.centerOffset) !== 0,
      [Qe, Ye] = u.useState();
    return (
      ne(() => {
        y && Ye(window.getComputedStyle(y).zIndex);
      }, [y]),
      f.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...j,
          transform: S ? j.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Qe,
          "--radix-popper-transform-origin": [
            (q = E.transformOrigin) == null ? void 0 : q.x,
            ($ = E.transformOrigin) == null ? void 0 : $.y,
          ].join(" "),
          ...(((z = E.hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: f.jsx(Bl, {
          scope: n,
          placedSide: I,
          onArrowChange: P,
          arrowX: pe,
          arrowY: ht,
          shouldHideArrow: Re,
          children: f.jsx(U.div, {
            "data-side": I,
            "data-align": oe,
            ...v,
            ref: x,
            style: { ...v.style, animation: S ? void 0 : "none" },
          }),
        }),
      })
    );
  });
zo.displayName = or;
var Uo = "PopperArrow",
  Yl = { top: "bottom", right: "left", bottom: "top", left: "right" },
  qo = u.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      a = Hl(Uo, r),
      i = Yl[a.placedSide];
    return f.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0,
      },
      children: f.jsx(Ll, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
qo.displayName = Uo;
function Vl(e) {
  return e !== null;
}
var $l = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, w;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0,
      s = i ? 0 : e.arrowWidth,
      l = i ? 0 : e.arrowHeight,
      [c, d] = Xo(n),
      m = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2,
      p = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let g = "",
      v = "";
    return (
      c === "bottom"
        ? ((g = i ? m : `${h}px`), (v = `${-l}px`))
        : c === "top"
          ? ((g = i ? m : `${h}px`), (v = `${r.floating.height + l}px`))
          : c === "right"
            ? ((g = `${-l}px`), (v = i ? m : `${p}px`))
            : c === "left" &&
              ((g = `${r.floating.width + l}px`), (v = i ? m : `${p}px`)),
      { data: { x: g, y: v } }
    );
  },
});
function Xo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Go = Yo,
  ar = $o,
  Ko = zo,
  Zo = qo,
  zl = "Portal",
  ir = u.forwardRef((e, t) => {
    var s;
    const { container: n, ...r } = e,
      [o, a] = u.useState(!1);
    ne(() => a(!0), []);
    const i =
      n ||
      (o &&
        ((s = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : s.body));
    return i ? qi.createPortal(f.jsx(U.div, { ...r, ref: t }), i) : null;
  });
ir.displayName = zl;
function Ul(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ke = (e) => {
  const { present: t, children: n } = e,
    r = ql(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n),
    a = X(r.ref, Xl(o));
  return typeof n == "function" || r.isPresent
    ? u.cloneElement(o, { ref: a })
    : null;
};
Ke.displayName = "Presence";
function ql(e) {
  const [t, n] = u.useState(),
    r = u.useRef({}),
    o = u.useRef(e),
    a = u.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [s, l] = Ul(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    u.useEffect(() => {
      const c = Wt(r.current);
      a.current = s === "mounted" ? c : "none";
    }, [s]),
    ne(() => {
      const c = r.current,
        d = o.current;
      if (d !== e) {
        const h = a.current,
          p = Wt(c);
        e
          ? l("MOUNT")
          : p === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(d && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    ne(() => {
      if (t) {
        const c = (m) => {
            const p = Wt(r.current).includes(m.animationName);
            m.target === t && p && _t.flushSync(() => l("ANIMATION_END"));
          },
          d = (m) => {
            m.target === t && (a.current = Wt(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: u.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function Wt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Xl(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Ln({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Gl({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    i = a ? e : r,
    s = te(n),
    l = u.useCallback(
      (c) => {
        if (a) {
          const m = typeof c == "function" ? c(e) : c;
          m !== e && s(m);
        } else o(c);
      },
      [a, e, o, s],
    );
  return [i, l];
}
function Gl({ defaultProp: e, onChange: t }) {
  const n = u.useState(e),
    [r] = n,
    o = u.useRef(r),
    a = te(t);
  return (
    u.useEffect(() => {
      o.current !== r && (a(r), (o.current = r));
    }, [r, o, a]),
    n
  );
}
var Kl = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Je = new WeakMap(),
  Ft = new WeakMap(),
  Bt = {},
  Cn = 0,
  Qo = function (e) {
    return e && (e.host || Qo(e.parentNode));
  },
  Zl = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Qo(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Ql = function (e, t, n, r) {
    var o = Zl(t, Array.isArray(e) ? e : [e]);
    Bt[n] || (Bt[n] = new WeakMap());
    var a = Bt[n],
      i = [],
      s = new Set(),
      l = new Set(o),
      c = function (m) {
        !m || s.has(m) || (s.add(m), c(m.parentNode));
      };
    o.forEach(c);
    var d = function (m) {
      !m ||
        l.has(m) ||
        Array.prototype.forEach.call(m.children, function (h) {
          if (s.has(h)) d(h);
          else
            try {
              var p = h.getAttribute(r),
                g = p !== null && p !== "false",
                v = (Je.get(h) || 0) + 1,
                b = (a.get(h) || 0) + 1;
              Je.set(h, v),
                a.set(h, b),
                i.push(h),
                v === 1 && g && Ft.set(h, !0),
                b === 1 && h.setAttribute(n, "true"),
                g || h.setAttribute(r, "true");
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", h, y);
            }
        });
    };
    return (
      d(t),
      s.clear(),
      Cn++,
      function () {
        i.forEach(function (m) {
          var h = Je.get(m) - 1,
            p = a.get(m) - 1;
          Je.set(m, h),
            a.set(m, p),
            h || (Ft.has(m) || m.removeAttribute(r), Ft.delete(m)),
            p || m.removeAttribute(n);
        }),
          Cn--,
          Cn ||
            ((Je = new WeakMap()),
            (Je = new WeakMap()),
            (Ft = new WeakMap()),
            (Bt = {}));
      }
    );
  },
  Jo = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Kl(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        Ql(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  ge = function () {
    return (
      (ge =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }),
      ge.apply(this, arguments)
    );
  };
function ea(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Jl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ut = "right-scroll-bar-position",
  qt = "width-before-scroll-bar",
  ec = "with-scroll-bars-hidden",
  tc = "--removed-body-scroll-bar-size";
function Sn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function nc(e, t) {
  var n = u.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var rc = typeof window < "u" ? u.useLayoutEffect : u.useEffect,
  eo = new WeakMap();
function oc(e, t) {
  var n = nc(null, function (r) {
    return e.forEach(function (o) {
      return Sn(o, r);
    });
  });
  return (
    rc(
      function () {
        var r = eo.get(n);
        if (r) {
          var o = new Set(r),
            a = new Set(e),
            i = n.current;
          o.forEach(function (s) {
            a.has(s) || Sn(s, null);
          }),
            a.forEach(function (s) {
              o.has(s) || Sn(s, i);
            });
        }
        eo.set(n, e);
      },
      [e],
    ),
    n
  );
}
function ac(e) {
  return e;
}
function ic(e, t) {
  t === void 0 && (t = ac);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var i = t(a, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (s) {
              return s !== i;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(a);
        }
        n = {
          push: function (s) {
            return a(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        r = !0;
        var i = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(a), (i = n);
        }
        var l = function () {
            var d = i;
            (i = []), d.forEach(a);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(),
          (n = {
            push: function (d) {
              i.push(d), c();
            },
            filter: function (d) {
              return (i = i.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function sc(e) {
  e === void 0 && (e = {});
  var t = ic(null);
  return (t.options = ge({ async: !0, ssr: !1 }, e)), t;
}
var ta = function (e) {
  var t = e.sideCar,
    n = ea(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return u.createElement(r, ge({}, n));
};
ta.isSideCarExport = !0;
function lc(e, t) {
  return e.useMedium(t), ta;
}
var na = sc(),
  Pn = function () {},
  dn = u.forwardRef(function (e, t) {
    var n = u.useRef(null),
      r = u.useState({
        onScrollCapture: Pn,
        onWheelCapture: Pn,
        onTouchMoveCapture: Pn,
      }),
      o = r[0],
      a = r[1],
      i = e.forwardProps,
      s = e.children,
      l = e.className,
      c = e.removeScrollBar,
      d = e.enabled,
      m = e.shards,
      h = e.sideCar,
      p = e.noIsolation,
      g = e.inert,
      v = e.allowPinchZoom,
      b = e.as,
      y = b === void 0 ? "div" : b,
      w = e.gapMode,
      x = ea(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = h,
      P = oc([n, t]),
      _ = ge(ge({}, x), o);
    return u.createElement(
      u.Fragment,
      null,
      d &&
        u.createElement(C, {
          sideCar: na,
          removeScrollBar: c,
          shards: m,
          noIsolation: p,
          inert: g,
          setCallbacks: a,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: w,
        }),
      i
        ? u.cloneElement(u.Children.only(s), ge(ge({}, _), { ref: P }))
        : u.createElement(y, ge({}, _, { className: l, ref: P }), s),
    );
  });
dn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
dn.classNames = { fullWidth: qt, zeroRight: Ut };
var cc = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function uc() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = cc();
  return t && e.setAttribute("nonce", t), e;
}
function dc(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function fc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var mc = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = uc()) && (dc(t, n), fc(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  hc = function () {
    var e = mc();
    return function (t, n) {
      u.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  ra = function () {
    var e = hc(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  pc = { left: 0, top: 0, right: 0, gap: 0 },
  En = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  vc = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [En(n), En(r), En(o)];
  },
  gc = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return pc;
    var t = vc(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  bc = ra(),
  at = "data-scroll-locked",
  yc = function (e, t, n, r) {
    var o = e.left,
      a = e.top,
      i = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          ec,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          at,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  a,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Ut,
          ` {
    right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          qt,
          ` {
    margin-right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Ut, " .")
        .concat(
          Ut,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(qt, " .")
        .concat(
          qt,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          at,
          `] {
    `,
        )
        .concat(tc, ": ")
        .concat(
          s,
          `px;
  }
`,
        )
    );
  },
  to = function () {
    var e = parseInt(document.body.getAttribute(at) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  wc = function () {
    u.useEffect(function () {
      return (
        document.body.setAttribute(at, (to() + 1).toString()),
        function () {
          var e = to() - 1;
          e <= 0
            ? document.body.removeAttribute(at)
            : document.body.setAttribute(at, e.toString());
        }
      );
    }, []);
  },
  xc = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    wc();
    var a = u.useMemo(
      function () {
        return gc(o);
      },
      [o],
    );
    return u.createElement(bc, { styles: yc(a, !t, o, n ? "" : "!important") });
  },
  Wn = !1;
if (typeof window < "u")
  try {
    var Ht = Object.defineProperty({}, "passive", {
      get: function () {
        return (Wn = !0), !0;
      },
    });
    window.addEventListener("test", Ht, Ht),
      window.removeEventListener("test", Ht, Ht);
  } catch {
    Wn = !1;
  }
var et = Wn ? { passive: !1 } : !1,
  Cc = function (e) {
    return e.tagName === "TEXTAREA";
  },
  oa = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Cc(e) && n[t] === "visible")
    );
  },
  Sc = function (e) {
    return oa(e, "overflowY");
  },
  Pc = function (e) {
    return oa(e, "overflowX");
  },
  no = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = aa(e, r);
      if (o) {
        var a = ia(e, r),
          i = a[1],
          s = a[2];
        if (i > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Ec = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Nc = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  aa = function (e, t) {
    return e === "v" ? Sc(t) : Pc(t);
  },
  ia = function (e, t) {
    return e === "v" ? Ec(t) : Nc(t);
  },
  _c = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Mc = function (e, t, n, r, o) {
    var a = _c(e, window.getComputedStyle(t).direction),
      i = a * r,
      s = n.target,
      l = t.contains(s),
      c = !1,
      d = i > 0,
      m = 0,
      h = 0;
    do {
      var p = ia(e, s),
        g = p[0],
        v = p[1],
        b = p[2],
        y = v - b - a * g;
      (g || y) && aa(e, s) && ((m += y), (h += g)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
    } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
    return (
      ((d && (Math.abs(m) < 1 || !o)) || (!d && (Math.abs(h) < 1 || !o))) &&
        (c = !0),
      c
    );
  },
  Yt = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ro = function (e) {
    return [e.deltaX, e.deltaY];
  },
  oo = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Oc = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Rc = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Dc = 0,
  tt = [];
function Tc(e) {
  var t = u.useRef([]),
    n = u.useRef([0, 0]),
    r = u.useRef(),
    o = u.useState(Dc++)[0],
    a = u.useState(ra)[0],
    i = u.useRef(e);
  u.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    u.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = Jl([e.lockRef.current], (e.shards || []).map(oo), !0).filter(
            Boolean,
          );
          return (
            v.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var s = u.useCallback(function (v, b) {
      if ("touches" in v && v.touches.length === 2)
        return !i.current.allowPinchZoom;
      var y = Yt(v),
        w = n.current,
        x = "deltaX" in v ? v.deltaX : w[0] - y[0],
        C = "deltaY" in v ? v.deltaY : w[1] - y[1],
        P,
        _ = v.target,
        N = Math.abs(x) > Math.abs(C) ? "h" : "v";
      if ("touches" in v && N === "h" && _.type === "range") return !1;
      var R = no(N, _);
      if (!R) return !0;
      if ((R ? (P = N) : ((P = N === "v" ? "h" : "v"), (R = no(N, _))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (x || C) && (r.current = P), !P)
      )
        return !0;
      var O = r.current || P;
      return Mc(O, b, v, O === "h" ? x : C, !0);
    }, []),
    l = u.useCallback(function (v) {
      var b = v;
      if (!(!tt.length || tt[tt.length - 1] !== a)) {
        var y = "deltaY" in b ? ro(b) : Yt(b),
          w = t.current.filter(function (P) {
            return (
              P.name === b.type &&
              (P.target === b.target || b.target === P.shadowParent) &&
              Oc(P.delta, y)
            );
          })[0];
        if (w && w.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!w) {
          var x = (i.current.shards || [])
              .map(oo)
              .filter(Boolean)
              .filter(function (P) {
                return P.contains(b.target);
              }),
            C = x.length > 0 ? s(b, x[0]) : !i.current.noIsolation;
          C && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    c = u.useCallback(function (v, b, y, w) {
      var x = { name: v, delta: b, target: y, should: w, shadowParent: kc(y) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== x;
          });
        }, 1);
    }, []),
    d = u.useCallback(function (v) {
      (n.current = Yt(v)), (r.current = void 0);
    }, []),
    m = u.useCallback(function (v) {
      c(v.type, ro(v), v.target, s(v, e.lockRef.current));
    }, []),
    h = u.useCallback(function (v) {
      c(v.type, Yt(v), v.target, s(v, e.lockRef.current));
    }, []);
  u.useEffect(function () {
    return (
      tt.push(a),
      e.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: h,
      }),
      document.addEventListener("wheel", l, et),
      document.addEventListener("touchmove", l, et),
      document.addEventListener("touchstart", d, et),
      function () {
        (tt = tt.filter(function (v) {
          return v !== a;
        })),
          document.removeEventListener("wheel", l, et),
          document.removeEventListener("touchmove", l, et),
          document.removeEventListener("touchstart", d, et);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    g = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    g ? u.createElement(a, { styles: Rc(o) }) : null,
    p ? u.createElement(xc, { gapMode: e.gapMode }) : null,
  );
}
function kc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Ac = lc(na, Tc);
var sr = u.forwardRef(function (e, t) {
  return u.createElement(dn, ge({}, e, { ref: t, sideCar: Ac }));
});
sr.classNames = dn.classNames;
var lr = "Popover",
  [sa, vh] = Mt(lr, [un]),
  Rt = un(),
  [jc, Fe] = sa(lr),
  la = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: a,
        modal: i = !1,
      } = e,
      s = Rt(t),
      l = u.useRef(null),
      [c, d] = u.useState(!1),
      [m = !1, h] = Ln({ prop: r, defaultProp: o, onChange: a });
    return f.jsx(Go, {
      ...s,
      children: f.jsx(jc, {
        scope: t,
        contentId: sn(),
        triggerRef: l,
        open: m,
        onOpenChange: h,
        onOpenToggle: u.useCallback(() => h((p) => !p), [h]),
        hasCustomAnchor: c,
        onCustomAnchorAdd: u.useCallback(() => d(!0), []),
        onCustomAnchorRemove: u.useCallback(() => d(!1), []),
        modal: i,
        children: n,
      }),
    });
  };
la.displayName = lr;
var ca = "PopoverAnchor",
  Ic = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Fe(ca, n),
      a = Rt(n),
      { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return (
      u.useEffect(() => (i(), () => s()), [i, s]),
      f.jsx(ar, { ...a, ...r, ref: t })
    );
  });
Ic.displayName = ca;
var ua = "PopoverTrigger",
  da = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Fe(ua, n),
      a = Rt(n),
      i = X(t, o.triggerRef),
      s = f.jsx(U.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": va(o.open),
        ...r,
        ref: i,
        onClick: H(e.onClick, o.onOpenToggle),
      });
    return o.hasCustomAnchor
      ? s
      : f.jsx(ar, { asChild: !0, ...a, children: s });
  });
da.displayName = ua;
var cr = "PopoverPortal",
  [Lc, Wc] = sa(cr, { forceMount: void 0 }),
  fa = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
      a = Fe(cr, t);
    return f.jsx(Lc, {
      scope: t,
      forceMount: n,
      children: f.jsx(Ke, {
        present: n || a.open,
        children: f.jsx(ir, { asChild: !0, container: o, children: r }),
      }),
    });
  };
fa.displayName = cr;
var st = "PopoverContent",
  ma = u.forwardRef((e, t) => {
    const n = Wc(st, e.__scopePopover),
      { forceMount: r = n.forceMount, ...o } = e,
      a = Fe(st, e.__scopePopover);
    return f.jsx(Ke, {
      present: r || a.open,
      children: a.modal
        ? f.jsx(Fc, { ...o, ref: t })
        : f.jsx(Bc, { ...o, ref: t }),
    });
  });
ma.displayName = st;
var Fc = u.forwardRef((e, t) => {
    const n = Fe(st, e.__scopePopover),
      r = u.useRef(null),
      o = X(t, r),
      a = u.useRef(!1);
    return (
      u.useEffect(() => {
        const i = r.current;
        if (i) return Jo(i);
      }, []),
      f.jsx(sr, {
        as: ze,
        allowPinchZoom: !0,
        children: f.jsx(ha, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: H(e.onCloseAutoFocus, (i) => {
            var s;
            i.preventDefault(),
              a.current || (s = n.triggerRef.current) == null || s.focus();
          }),
          onPointerDownOutside: H(
            e.onPointerDownOutside,
            (i) => {
              const s = i.detail.originalEvent,
                l = s.button === 0 && s.ctrlKey === !0,
                c = s.button === 2 || l;
              a.current = c;
            },
            { checkForDefaultPrevented: !1 },
          ),
          onFocusOutside: H(e.onFocusOutside, (i) => i.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  Bc = u.forwardRef((e, t) => {
    const n = Fe(st, e.__scopePopover),
      r = u.useRef(!1),
      o = u.useRef(!1);
    return f.jsx(ha, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        var i, s;
        (i = e.onCloseAutoFocus) == null || i.call(e, a),
          a.defaultPrevented ||
            (r.current || (s = n.triggerRef.current) == null || s.focus(),
            a.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (a) => {
        var l, c;
        (l = e.onInteractOutside) == null || l.call(e, a),
          a.defaultPrevented ||
            ((r.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const i = a.target;
        ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) &&
          a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            o.current &&
            a.preventDefault();
      },
    });
  }),
  ha = u.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: i,
        onEscapeKeyDown: s,
        onPointerDownOutside: l,
        onFocusOutside: c,
        onInteractOutside: d,
        ...m
      } = e,
      h = Fe(st, n),
      p = Rt(n);
    return (
      Mo(),
      f.jsx(Kn, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: f.jsx(Gn, {
          asChild: !0,
          disableOutsidePointerEvents: i,
          onInteractOutside: d,
          onEscapeKeyDown: s,
          onPointerDownOutside: l,
          onFocusOutside: c,
          onDismiss: () => h.onOpenChange(!1),
          children: f.jsx(Ko, {
            "data-state": va(h.open),
            role: "dialog",
            id: h.contentId,
            ...p,
            ...m,
            ref: t,
            style: {
              ...m.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  pa = "PopoverClose",
  Hc = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Fe(pa, n);
    return f.jsx(U.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: H(e.onClick, () => o.onOpenChange(!1)),
    });
  });
Hc.displayName = pa;
var Yc = "PopoverArrow",
  Vc = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Rt(n);
    return f.jsx(Zo, { ...o, ...r, ref: t });
  });
Vc.displayName = Yc;
function va(e) {
  return e ? "open" : "closed";
}
var $c = la,
  zc = da,
  Uc = fa,
  ga = ma;
function ba(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = ba(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function qc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = ba(e)) && (r && (r += " "), (r += t));
  return r;
}
const ur = "-";
function Xc(e) {
  const t = Kc(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const s = i.split(ur);
    return s[0] === "" && s.length !== 1 && s.shift(), ya(s, t) || Gc(i);
  }
  function a(i, s) {
    const l = n[i] || [];
    return s && r[i] ? [...l, ...r[i]] : l;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: a };
}
function ya(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? ya(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const a = e.join(ur);
  return (i = t.validators.find(({ validator: s }) => s(a))) == null
    ? void 0
    : i.classGroupId;
}
const ao = /^\[(.+)\]$/;
function Gc(e) {
  if (ao.test(e)) {
    const t = ao.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function Kc(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Qc(Object.entries(e.classGroups), n).forEach(([a, i]) => {
      Fn(i, r, a, t);
    }),
    r
  );
}
function Fn(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : io(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Zc(o)) {
        Fn(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Fn(i, io(t, a), n, r);
    });
  });
}
function io(e, t) {
  let n = e;
  return (
    t.split(ur).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function Zc(e) {
  return e.isThemeGetter;
}
function Qc(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((a) =>
          typeof a == "string"
            ? t + a
            : typeof a == "object"
              ? Object.fromEntries(
                  Object.entries(a).map(([i, s]) => [t + i, s]),
                )
              : a,
        );
        return [n, o];
      })
    : e;
}
function Jc(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(a, i) {
    n.set(a, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0) return i;
      if ((i = r.get(a)) !== void 0) return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    },
  };
}
const wa = "!";
function eu(e) {
  const { separator: t, experimentalParseClassName: n } = e,
    r = t.length === 1,
    o = t[0],
    a = t.length;
  function i(s) {
    const l = [];
    let c = 0,
      d = 0,
      m;
    for (let b = 0; b < s.length; b++) {
      let y = s[b];
      if (c === 0) {
        if (y === o && (r || s.slice(b, b + a) === t)) {
          l.push(s.slice(d, b)), (d = b + a);
          continue;
        }
        if (y === "/") {
          m = b;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const h = l.length === 0 ? s : s.substring(d),
      p = h.startsWith(wa),
      g = p ? h.substring(1) : h,
      v = m && m > d ? m - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: v,
    };
  }
  return n
    ? function (l) {
        return n({ className: l, parseClassName: i });
      }
    : i;
}
function tu(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function nu(e) {
  return { cache: Jc(e.cacheSize), parseClassName: eu(e), ...Xc(e) };
}
const ru = /\s+/;
function ou(e, t) {
  const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    a = new Set();
  return e
    .trim()
    .split(ru)
    .map((i) => {
      const {
        modifiers: s,
        hasImportantModifier: l,
        baseClassName: c,
        maybePostfixModifierPosition: d,
      } = n(i);
      let m = !!d,
        h = r(m ? c.substring(0, d) : c);
      if (!h) {
        if (!m) return { isTailwindClass: !1, originalClassName: i };
        if (((h = r(c)), !h))
          return { isTailwindClass: !1, originalClassName: i };
        m = !1;
      }
      const p = tu(s).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? p + wa : p,
        classGroupId: h,
        originalClassName: i,
        hasPostfixModifier: m,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: s, classGroupId: l, hasPostfixModifier: c } = i,
        d = s + l;
      return a.has(d)
        ? !1
        : (a.add(d), o(l, c).forEach((m) => a.add(s + m)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function au() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = xa(t)) && (r && (r += " "), (r += n));
  return r;
}
function xa(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xa(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function iu(e, ...t) {
  let n,
    r,
    o,
    a = i;
  function i(l) {
    const c = t.reduce((d, m) => m(d), e());
    return (n = nu(c)), (r = n.cache.get), (o = n.cache.set), (a = s), s(l);
  }
  function s(l) {
    const c = r(l);
    if (c) return c;
    const d = ou(l, n);
    return o(l, d), d;
  }
  return function () {
    return a(au.apply(null, arguments));
  };
}
function Z(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Ca = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  su = /^\d+\/\d+$/,
  lu = new Set(["px", "full", "screen"]),
  cu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  uu =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  du = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  fu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  mu =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Pe(e) {
  return $e(e) || lu.has(e) || su.test(e);
}
function De(e) {
  return ft(e, "length", xu);
}
function $e(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Vt(e) {
  return ft(e, "number", $e);
}
function bt(e) {
  return !!e && Number.isInteger(Number(e));
}
function hu(e) {
  return e.endsWith("%") && $e(e.slice(0, -1));
}
function A(e) {
  return Ca.test(e);
}
function Te(e) {
  return cu.test(e);
}
const pu = new Set(["length", "size", "percentage"]);
function vu(e) {
  return ft(e, pu, Sa);
}
function gu(e) {
  return ft(e, "position", Sa);
}
const bu = new Set(["image", "url"]);
function yu(e) {
  return ft(e, bu, Su);
}
function wu(e) {
  return ft(e, "", Cu);
}
function yt() {
  return !0;
}
function ft(e, t, n) {
  const r = Ca.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function xu(e) {
  return uu.test(e) && !du.test(e);
}
function Sa() {
  return !1;
}
function Cu(e) {
  return fu.test(e);
}
function Su(e) {
  return mu.test(e);
}
function Pu() {
  const e = Z("colors"),
    t = Z("spacing"),
    n = Z("blur"),
    r = Z("brightness"),
    o = Z("borderColor"),
    a = Z("borderRadius"),
    i = Z("borderSpacing"),
    s = Z("borderWidth"),
    l = Z("contrast"),
    c = Z("grayscale"),
    d = Z("hueRotate"),
    m = Z("invert"),
    h = Z("gap"),
    p = Z("gradientColorStops"),
    g = Z("gradientColorStopPositions"),
    v = Z("inset"),
    b = Z("margin"),
    y = Z("opacity"),
    w = Z("padding"),
    x = Z("saturate"),
    C = Z("scale"),
    P = Z("sepia"),
    _ = Z("skew"),
    N = Z("space"),
    R = Z("translate"),
    O = () => ["auto", "contain", "none"],
    T = () => ["auto", "hidden", "clip", "visible", "scroll"],
    L = () => ["auto", A, t],
    M = () => [A, t],
    V = () => ["", Pe, De],
    W = () => ["auto", $e, A],
    j = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    B = () => ["solid", "dashed", "dotted", "double", "none"],
    S = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    E = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    I = () => ["", "0", A],
    oe = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    Q = () => [$e, Vt],
    pe = () => [$e, A];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [yt],
      spacing: [Pe, De],
      blur: ["none", "", Te, A],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Te, A],
      borderSpacing: M(),
      borderWidth: V(),
      contrast: Q(),
      grayscale: I(),
      hueRotate: pe(),
      invert: I(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hu, De],
      inset: L(),
      margin: L(),
      opacity: Q(),
      padding: M(),
      saturate: Q(),
      scale: Q(),
      sepia: I(),
      skew: pe(),
      space: M(),
      translate: M(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", A] }],
      container: ["container"],
      columns: [{ columns: [Te] }],
      "break-after": [{ "break-after": oe() }],
      "break-before": [{ "break-before": oe() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...j(), A] }],
      overflow: [{ overflow: T() }],
      "overflow-x": [{ "overflow-x": T() }],
      "overflow-y": [{ "overflow-y": T() }],
      overscroll: [{ overscroll: O() }],
      "overscroll-x": [{ "overscroll-x": O() }],
      "overscroll-y": [{ "overscroll-y": O() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [v] }],
      "inset-x": [{ "inset-x": [v] }],
      "inset-y": [{ "inset-y": [v] }],
      start: [{ start: [v] }],
      end: [{ end: [v] }],
      top: [{ top: [v] }],
      right: [{ right: [v] }],
      bottom: [{ bottom: [v] }],
      left: [{ left: [v] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", bt, A] }],
      basis: [{ basis: L() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", A] }],
      grow: [{ grow: I() }],
      shrink: [{ shrink: I() }],
      order: [{ order: ["first", "last", "none", bt, A] }],
      "grid-cols": [{ "grid-cols": [yt] }],
      "col-start-end": [{ col: ["auto", { span: ["full", bt, A] }, A] }],
      "col-start": [{ "col-start": W() }],
      "col-end": [{ "col-end": W() }],
      "grid-rows": [{ "grid-rows": [yt] }],
      "row-start-end": [{ row: ["auto", { span: [bt, A] }, A] }],
      "row-start": [{ "row-start": W() }],
      "row-end": [{ "row-end": W() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", A] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", A] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...E()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...E(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...E(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [w] }],
      px: [{ px: [w] }],
      py: [{ py: [w] }],
      ps: [{ ps: [w] }],
      pe: [{ pe: [w] }],
      pt: [{ pt: [w] }],
      pr: [{ pr: [w] }],
      pb: [{ pb: [w] }],
      pl: [{ pl: [w] }],
      m: [{ m: [b] }],
      mx: [{ mx: [b] }],
      my: [{ my: [b] }],
      ms: [{ ms: [b] }],
      me: [{ me: [b] }],
      mt: [{ mt: [b] }],
      mr: [{ mr: [b] }],
      mb: [{ mb: [b] }],
      ml: [{ ml: [b] }],
      "space-x": [{ "space-x": [N] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [N] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", A, t] }],
      "min-w": [{ "min-w": [A, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            A,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Te] },
            Te,
          ],
        },
      ],
      h: [{ h: [A, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [A, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Te, De] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Vt,
          ],
        },
      ],
      "font-family": [{ font: [yt] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            A,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", $e, Vt] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Pe,
            A,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", A] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", A] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Pe, De] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Pe, A] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: M() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            A,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", A] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...j(), gu] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", vu] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            yu,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [g] }],
      "gradient-via-pos": [{ via: [g] }],
      "gradient-to-pos": [{ to: [g] }],
      "gradient-from": [{ from: [p] }],
      "gradient-via": [{ via: [p] }],
      "gradient-to": [{ to: [p] }],
      rounded: [{ rounded: [a] }],
      "rounded-s": [{ "rounded-s": [a] }],
      "rounded-e": [{ "rounded-e": [a] }],
      "rounded-t": [{ "rounded-t": [a] }],
      "rounded-r": [{ "rounded-r": [a] }],
      "rounded-b": [{ "rounded-b": [a] }],
      "rounded-l": [{ "rounded-l": [a] }],
      "rounded-ss": [{ "rounded-ss": [a] }],
      "rounded-se": [{ "rounded-se": [a] }],
      "rounded-ee": [{ "rounded-ee": [a] }],
      "rounded-es": [{ "rounded-es": [a] }],
      "rounded-tl": [{ "rounded-tl": [a] }],
      "rounded-tr": [{ "rounded-tr": [a] }],
      "rounded-br": [{ "rounded-br": [a] }],
      "rounded-bl": [{ "rounded-bl": [a] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [...B(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: B() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...B()] }],
      "outline-offset": [{ "outline-offset": [Pe, A] }],
      "outline-w": [{ outline: [Pe, De] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: V() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [Pe, De] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Te, wu] }],
      "shadow-color": [{ shadow: [yt] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": [...S(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": S() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Te, A] }],
      grayscale: [{ grayscale: [c] }],
      "hue-rotate": [{ "hue-rotate": [d] }],
      invert: [{ invert: [m] }],
      saturate: [{ saturate: [x] }],
      sepia: [{ sepia: [P] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
      "backdrop-invert": [{ "backdrop-invert": [m] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [x] }],
      "backdrop-sepia": [{ "backdrop-sepia": [P] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            A,
          ],
        },
      ],
      duration: [{ duration: pe() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", A] }],
      delay: [{ delay: pe() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", A] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [bt, A] }],
      "translate-x": [{ "translate-x": [R] }],
      "translate-y": [{ "translate-y": [R] }],
      "skew-x": [{ "skew-x": [_] }],
      "skew-y": [{ "skew-y": [_] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            A,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            A,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": M() }],
      "scroll-mx": [{ "scroll-mx": M() }],
      "scroll-my": [{ "scroll-my": M() }],
      "scroll-ms": [{ "scroll-ms": M() }],
      "scroll-me": [{ "scroll-me": M() }],
      "scroll-mt": [{ "scroll-mt": M() }],
      "scroll-mr": [{ "scroll-mr": M() }],
      "scroll-mb": [{ "scroll-mb": M() }],
      "scroll-ml": [{ "scroll-ml": M() }],
      "scroll-p": [{ "scroll-p": M() }],
      "scroll-px": [{ "scroll-px": M() }],
      "scroll-py": [{ "scroll-py": M() }],
      "scroll-ps": [{ "scroll-ps": M() }],
      "scroll-pe": [{ "scroll-pe": M() }],
      "scroll-pt": [{ "scroll-pt": M() }],
      "scroll-pr": [{ "scroll-pr": M() }],
      "scroll-pb": [{ "scroll-pb": M() }],
      "scroll-pl": [{ "scroll-pl": M() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", A] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Pe, De, Vt] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const Eu = iu(Pu);
function J(...e) {
  return Eu(qc(e));
}
const Nu = $c,
  _u = zc,
  dr = u.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) =>
      f.jsx(Uc, {
        children: f.jsx(ga, {
          ref: o,
          align: t,
          sideOffset: n,
          className: J(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e,
          ),
          ...r,
        }),
      }),
  );
dr.displayName = ga.displayName;
dr.__docgenInfo = {
  description: "",
  methods: [],
  props: {
    align: { defaultValue: { value: '"center"', computed: !1 }, required: !1 },
    sideOffset: { defaultValue: { value: "4", computed: !1 }, required: !1 },
  },
};
const Jt = u.forwardRef(({ className: e, type: t, ...n }, r) =>
  f.jsx("input", {
    type: t,
    className: J(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: r,
    ...n,
  }),
);
Jt.displayName = "Input";
Jt.__docgenInfo = { description: "", methods: [], displayName: "Input" };
function Pa(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Pa(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Mu() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Pa(e)) && (r && (r += " "), (r += t));
  return r;
}
const so = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  lo = Mu,
  Ou = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return lo(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: a } = t,
      i = Object.keys(o).map((c) => {
        const d = n == null ? void 0 : n[c],
          m = a == null ? void 0 : a[c];
        if (d === null) return null;
        const h = so(d) || so(m);
        return o[c][h];
      }),
      s =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [m, h] = d;
          return h === void 0 || (c[m] = h), c;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, d) => {
              let { class: m, className: h, ...p } = d;
              return Object.entries(p).every((g) => {
                let [v, b] = g;
                return Array.isArray(b)
                  ? b.includes({ ...a, ...s }[v])
                  : { ...a, ...s }[v] === b;
              })
                ? [...c, m, h]
                : c;
            }, []);
    return lo(
      e,
      i,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  Bn = Ou(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  fr = u.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
      const i = r ? ze : "button";
      return f.jsx(i, {
        className: J(Bn({ variant: t, size: n, className: e })),
        ref: a,
        ...o,
      });
    },
  );
fr.displayName = "Button";
fr.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: {
    asChild: { defaultValue: { value: "false", computed: !1 }, required: !1 },
  },
};
function F(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
        t === "[object Number]" ||
        typeof e == "string" ||
        t === "[object String]"
      ? new Date(e)
      : new Date(NaN);
}
function ue(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function re(e, t) {
  const n = F(e);
  return isNaN(t) ? ue(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function me(e, t) {
  const n = F(e);
  if (isNaN(t)) return ue(e, NaN);
  if (!t) return n;
  const r = n.getDate(),
    o = ue(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), r), n);
}
const mr = 6048e5,
  Ru = 864e5;
let Du = {};
function Dt() {
  return Du;
}
function Ce(e, t) {
  var s, l, c, d;
  const n = Dt(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    o = F(e),
    a = o.getDay(),
    i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function qe(e) {
  return Ce(e, { weekStartsOn: 1 });
}
function Ea(e) {
  const t = F(e),
    n = t.getFullYear(),
    r = ue(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = qe(r),
    a = ue(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = qe(a);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
      ? n
      : n - 1;
}
function lt(e) {
  const t = F(e);
  return t.setHours(0, 0, 0, 0), t;
}
function en(e) {
  const t = F(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function ye(e, t) {
  const n = lt(e),
    r = lt(t),
    o = +n - en(n),
    a = +r - en(r);
  return Math.round((o - a) / Ru);
}
function Tu(e) {
  const t = Ea(e),
    n = ue(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), qe(n);
}
function Hn(e, t) {
  const n = t * 7;
  return re(e, n);
}
function ku(e, t) {
  return me(e, t * 12);
}
function Au(e) {
  let t;
  return (
    e.forEach(function (n) {
      const r = F(n);
      (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
    }),
    t || new Date(NaN)
  );
}
function ju(e) {
  let t;
  return (
    e.forEach((n) => {
      const r = F(n);
      (!t || t > r || isNaN(+r)) && (t = r);
    }),
    t || new Date(NaN)
  );
}
function ae(e, t) {
  const n = lt(e),
    r = lt(t);
  return +n == +r;
}
function hr(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Iu(e) {
  if (!hr(e) && typeof e != "number") return !1;
  const t = F(e);
  return !isNaN(Number(t));
}
function Nt(e, t) {
  const n = F(e),
    r = F(t),
    o = n.getFullYear() - r.getFullYear(),
    a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function Lu(e, t, n) {
  const r = Ce(e, n),
    o = Ce(t, n),
    a = +r - en(r),
    i = +o - en(o);
  return Math.round((a - i) / mr);
}
function pr(e) {
  const t = F(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function ie(e) {
  const t = F(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Na(e) {
  const t = F(e),
    n = ue(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function vr(e, t) {
  var s, l, c, d;
  const n = Dt(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    o = F(e),
    a = o.getDay(),
    i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function _a(e) {
  return vr(e, { weekStartsOn: 1 });
}
const Wu = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  Fu = (e, t, n) => {
    let r;
    const o = Wu[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
          ? (r = o.one)
          : (r = o.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function Nn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Bu = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Hu = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Yu = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Vu = {
    date: Nn({ formats: Bu, defaultWidth: "full" }),
    time: Nn({ formats: Hu, defaultWidth: "full" }),
    dateTime: Nn({ formats: Yu, defaultWidth: "full" }),
  },
  $u = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  zu = (e, t, n, r) => $u[e];
function wt(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const Uu = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  qu = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Xu = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  Gu = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Ku = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Zu = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  Qu = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  Ju = {
    ordinalNumber: Qu,
    era: wt({ values: Uu, defaultWidth: "wide" }),
    quarter: wt({
      values: qu,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: wt({ values: Xu, defaultWidth: "wide" }),
    day: wt({ values: Gu, defaultWidth: "wide" }),
    dayPeriod: wt({
      values: Ku,
      defaultWidth: "wide",
      formattingValues: Zu,
      defaultFormattingWidth: "wide",
    }),
  };
function xt(e) {
  return (t, n = {}) => {
    const r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      a = t.match(o);
    if (!a) return null;
    const i = a[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s) ? td(s, (m) => m.test(i)) : ed(s, (m) => m.test(i));
    let c;
    (c = e.valueCallback ? e.valueCallback(l) : l),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const d = t.slice(i.length);
    return { value: c, rest: d };
  };
}
function ed(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function td(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function nd(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0],
      a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const rd = /^(\d+)(th|st|nd|rd)?/i,
  od = /\d+/i,
  ad = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  id = { any: [/^b/i, /^(a|c)/i] },
  sd = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  ld = { any: [/1/i, /2/i, /3/i, /4/i] },
  cd = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  ud = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  dd = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  fd = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  md = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  hd = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  pd = {
    ordinalNumber: nd({
      matchPattern: rd,
      parsePattern: od,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: xt({
      matchPatterns: ad,
      defaultMatchWidth: "wide",
      parsePatterns: id,
      defaultParseWidth: "any",
    }),
    quarter: xt({
      matchPatterns: sd,
      defaultMatchWidth: "wide",
      parsePatterns: ld,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: xt({
      matchPatterns: cd,
      defaultMatchWidth: "wide",
      parsePatterns: ud,
      defaultParseWidth: "any",
    }),
    day: xt({
      matchPatterns: dd,
      defaultMatchWidth: "wide",
      parsePatterns: fd,
      defaultParseWidth: "any",
    }),
    dayPeriod: xt({
      matchPatterns: md,
      defaultMatchWidth: "any",
      parsePatterns: hd,
      defaultParseWidth: "any",
    }),
  },
  Ma = {
    code: "en-US",
    formatDistance: Fu,
    formatLong: Vu,
    formatRelative: zu,
    localize: Ju,
    match: pd,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function vd(e) {
  const t = F(e);
  return ye(t, Na(t)) + 1;
}
function Oa(e) {
  const t = F(e),
    n = +qe(t) - +Tu(t);
  return Math.round(n / mr) + 1;
}
function Ra(e, t) {
  var d, m, h, p;
  const n = F(e),
    r = n.getFullYear(),
    o = Dt(),
    a =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((m = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : m.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((p = (h = o.locale) == null ? void 0 : h.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i = ue(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Ce(i, t),
    l = ue(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = Ce(l, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
      ? r
      : r - 1;
}
function gd(e, t) {
  var s, l, c, d;
  const n = Dt(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    o = Ra(e, t),
    a = ue(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Ce(a, t);
}
function Da(e, t) {
  const n = F(e),
    r = +Ce(n, t) - +gd(n, t);
  return Math.round(r / mr) + 1;
}
function Y(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const ke = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return Y(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : Y(n + 1, 2);
    },
    d(e, t) {
      return Y(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return Y(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return Y(e.getHours(), t.length);
    },
    m(e, t) {
      return Y(e.getMinutes(), t.length);
    },
    s(e, t) {
      return Y(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        o = Math.trunc(r * Math.pow(10, n - 3));
      return Y(o, t.length);
    },
  },
  nt = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  co = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          o = r > 0 ? r : 1 - r;
        return n.ordinalNumber(o, { unit: "year" });
      }
      return ke.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = Ra(e, r),
        a = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const i = a % 100;
        return Y(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Y(a, t.length);
    },
    R: function (e, t) {
      const n = Ea(e);
      return Y(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return Y(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return Y(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return Y(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return ke.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return Y(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const o = Da(e, r);
      return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Y(o, t.length);
    },
    I: function (e, t, n) {
      const r = Oa(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Y(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : ke.d(e, t);
    },
    D: function (e, t, n) {
      const r = vd(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : Y(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const o = e.getDay(),
        a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(a);
        case "ee":
          return Y(a, 2);
        case "eo":
          return n.ordinalNumber(a, { unit: "day" });
        case "eee":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(o, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const o = e.getDay(),
        a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(a);
        case "cc":
          return Y(a, t.length);
        case "co":
          return n.ordinalNumber(a, { unit: "day" });
        case "ccc":
          return n.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(o, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        o = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(o);
        case "ii":
          return Y(o, t.length);
        case "io":
          return n.ordinalNumber(o, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r === 12
          ? (o = nt.noon)
          : r === 0
            ? (o = nt.midnight)
            : (o = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r >= 17
          ? (o = nt.evening)
          : r >= 12
            ? (o = nt.afternoon)
            : r >= 4
              ? (o = nt.morning)
              : (o = nt.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return ke.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : ke.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Y(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Y(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : ke.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : ke.s(e, t);
    },
    S: function (e, t) {
      return ke.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return fo(r);
        case "XXXX":
        case "XX":
          return Ve(r);
        case "XXXXX":
        case "XXX":
        default:
          return Ve(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return fo(r);
        case "xxxx":
        case "xx":
          return Ve(r);
        case "xxxxx":
        case "xxx":
        default:
          return Ve(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + uo(r, ":");
        case "OOOO":
        default:
          return "GMT" + Ve(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + uo(r, ":");
        case "zzzz":
        default:
          return "GMT" + Ve(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return Y(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return Y(r, t.length);
    },
  };
function uo(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Y(a, 2);
}
function fo(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Y(Math.abs(e) / 60, 2) : Ve(e, t);
}
function Ve(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Y(Math.trunc(r / 60), 2),
    a = Y(r % 60, 2);
  return n + o + t + a;
}
const mo = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Ta = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  bd = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return mo(e, t);
    let a;
    switch (r) {
      case "P":
        a = t.dateTime({ width: "short" });
        break;
      case "PP":
        a = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        a = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        a = t.dateTime({ width: "full" });
        break;
    }
    return a.replace("{{date}}", mo(r, t)).replace("{{time}}", Ta(o, t));
  },
  yd = { p: Ta, P: bd },
  wd = /^D+$/,
  xd = /^Y+$/,
  Cd = ["D", "DD", "YY", "YYYY"];
function Sd(e) {
  return wd.test(e);
}
function Pd(e) {
  return xd.test(e);
}
function Ed(e, t, n) {
  const r = Nd(e, t, n);
  if ((console.warn(r), Cd.includes(e))) throw new RangeError(r);
}
function Nd(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const _d = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Md = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Od = /^'([^]*?)'?$/,
  Rd = /''/g,
  Dd = /[a-zA-Z]/;
function Ze(e, t, n) {
  var d, m, h, p, g, v, b, y;
  const r = Dt(),
    o = (n == null ? void 0 : n.locale) ?? r.locale ?? Ma,
    a =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((m = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : m.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((p = (h = r.locale) == null ? void 0 : h.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((v = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) ==
      null
        ? void 0
        : v.weekStartsOn) ??
      r.weekStartsOn ??
      ((y = (b = r.locale) == null ? void 0 : b.options) == null
        ? void 0
        : y.weekStartsOn) ??
      0,
    s = F(e);
  if (!Iu(s)) throw new RangeError("Invalid time value");
  let l = t
    .match(Md)
    .map((w) => {
      const x = w[0];
      if (x === "p" || x === "P") {
        const C = yd[x];
        return C(w, o.formatLong);
      }
      return w;
    })
    .join("")
    .match(_d)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const x = w[0];
      if (x === "'") return { isToken: !1, value: Td(w) };
      if (co[x]) return { isToken: !0, value: w };
      if (x.match(Dd))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            x +
            "`",
        );
      return { isToken: !1, value: w };
    });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = { firstWeekContainsDate: a, weekStartsOn: i, locale: o };
  return l
    .map((w) => {
      if (!w.isToken) return w.value;
      const x = w.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && Pd(x)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && Sd(x))) &&
        Ed(x, t, String(e));
      const C = co[x[0]];
      return C(s, x, o.localize, c);
    })
    .join("");
}
function Td(e) {
  const t = e.match(Od);
  return t ? t[1].replace(Rd, "'") : e;
}
function kd(e) {
  const t = F(e),
    n = t.getFullYear(),
    r = t.getMonth(),
    o = ue(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Ad(e) {
  return Math.trunc(+F(e) / 1e3);
}
function jd(e) {
  const t = F(e),
    n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Id(e, t) {
  return Lu(jd(e), ie(e), t) + 1;
}
function Yn(e, t) {
  const n = F(e),
    r = F(t);
  return n.getTime() > r.getTime();
}
function ka(e, t) {
  const n = F(e),
    r = F(t);
  return +n < +r;
}
function gr(e, t) {
  const n = F(e),
    r = F(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Ld(e, t) {
  const n = F(e),
    r = F(t);
  return n.getFullYear() === r.getFullYear();
}
function _n(e, t) {
  return re(e, -t);
}
function Mn(e, t) {
  const n = F(e),
    r = n.getFullYear(),
    o = n.getDate(),
    a = ue(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = kd(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function ho(e, t) {
  const n = F(e);
  return isNaN(+n) ? ue(e, NaN) : (n.setFullYear(t), n);
}
var D = function () {
  return (
    (D =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        }
        return t;
      }),
    D.apply(this, arguments)
  );
};
function Wd(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Aa(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) &&
      (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
function Tt(e) {
  return e.mode === "multiple";
}
function kt(e) {
  return e.mode === "range";
}
function fn(e) {
  return e.mode === "single";
}
var Fd = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle",
};
function Bd(e, t) {
  return Ze(e, "LLLL y", t);
}
function Hd(e, t) {
  return Ze(e, "d", t);
}
function Yd(e, t) {
  return Ze(e, "LLLL", t);
}
function Vd(e) {
  return "".concat(e);
}
function $d(e, t) {
  return Ze(e, "cccccc", t);
}
function zd(e, t) {
  return Ze(e, "yyyy", t);
}
var Ud = Object.freeze({
    __proto__: null,
    formatCaption: Bd,
    formatDay: Hd,
    formatMonthCaption: Yd,
    formatWeekNumber: Vd,
    formatWeekdayName: $d,
    formatYearCaption: zd,
  }),
  qd = function (e, t, n) {
    return Ze(e, "do MMMM (EEEE)", n);
  },
  Xd = function () {
    return "Month: ";
  },
  Gd = function () {
    return "Go to next month";
  },
  Kd = function () {
    return "Go to previous month";
  },
  Zd = function (e, t) {
    return Ze(e, "cccc", t);
  },
  Qd = function (e) {
    return "Week n. ".concat(e);
  },
  Jd = function () {
    return "Year: ";
  },
  ef = Object.freeze({
    __proto__: null,
    labelDay: qd,
    labelMonthDropdown: Xd,
    labelNext: Gd,
    labelPrevious: Kd,
    labelWeekNumber: Qd,
    labelWeekday: Zd,
    labelYearDropdown: Jd,
  });
function tf() {
  var e = "buttons",
    t = Fd,
    n = Ma,
    r = {},
    o = {},
    a = 1,
    i = {},
    s = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Ud,
    labels: ef,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default",
  };
}
function nf(e) {
  var t = e.fromYear,
    n = e.toYear,
    r = e.fromMonth,
    o = e.toMonth,
    a = e.fromDate,
    i = e.toDate;
  return (
    r ? (a = ie(r)) : t && (a = new Date(t, 0, 1)),
    o ? (i = pr(o)) : n && (i = new Date(n, 11, 31)),
    { fromDate: a ? lt(a) : void 0, toDate: i ? lt(i) : void 0 }
  );
}
var ja = u.createContext(void 0);
function rf(e) {
  var t,
    n = e.initialProps,
    r = tf(),
    o = nf(n),
    a = o.fromDate,
    i = o.toDate,
    s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (fn(n) || Tt(n) || kt(n)) && (l = n.onSelect);
  var c = D(D(D({}, r), n), {
    captionLayout: s,
    classNames: D(D({}, r.classNames), n.classNames),
    components: D({}, n.components),
    formatters: D(D({}, r.formatters), n.formatters),
    fromDate: a,
    labels: D(D({}, r.labels), n.labels),
    mode: n.mode || r.mode,
    modifiers: D(D({}, r.modifiers), n.modifiers),
    modifiersClassNames: D(D({}, r.modifiersClassNames), n.modifiersClassNames),
    onSelect: l,
    styles: D(D({}, r.styles), n.styles),
    toDate: i,
  });
  return f.jsx(ja.Provider, { value: c, children: e.children });
}
function G() {
  var e = u.useContext(ja);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Ia(e) {
  var t = G(),
    n = t.locale,
    r = t.classNames,
    o = t.styles,
    a = t.formatters.formatCaption;
  return f.jsx("div", {
    className: r.caption_label,
    style: o.caption_label,
    "aria-live": "polite",
    role: "presentation",
    id: e.id,
    children: a(e.displayMonth, { locale: n }),
  });
}
function of(e) {
  return f.jsx(
    "svg",
    D(
      {
        width: "8px",
        height: "8px",
        viewBox: "0 0 120 120",
        "data-testid": "iconDropdown",
      },
      e,
      {
        children: f.jsx("path", {
          d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
          fill: "currentColor",
          fillRule: "nonzero",
        }),
      },
    ),
  );
}
function La(e) {
  var t,
    n,
    r = e.onChange,
    o = e.value,
    a = e.children,
    i = e.caption,
    s = e.className,
    l = e.style,
    c = G(),
    d =
      (n =
        (t = c.components) === null || t === void 0
          ? void 0
          : t.IconDropdown) !== null && n !== void 0
        ? n
        : of;
  return f.jsxs("div", {
    className: s,
    style: l,
    children: [
      f.jsx("span", {
        className: c.classNames.vhidden,
        children: e["aria-label"],
      }),
      f.jsx("select", {
        name: e.name,
        "aria-label": e["aria-label"],
        className: c.classNames.dropdown,
        style: c.styles.dropdown,
        value: o,
        onChange: r,
        children: a,
      }),
      f.jsxs("div", {
        className: c.classNames.caption_label,
        style: c.styles.caption_label,
        "aria-hidden": "true",
        children: [
          i,
          f.jsx(d, {
            className: c.classNames.dropdown_icon,
            style: c.styles.dropdown_icon,
          }),
        ],
      }),
    ],
  });
}
function af(e) {
  var t,
    n = G(),
    r = n.fromDate,
    o = n.toDate,
    a = n.styles,
    i = n.locale,
    s = n.formatters.formatMonthCaption,
    l = n.classNames,
    c = n.components,
    d = n.labels.labelMonthDropdown;
  if (!r) return f.jsx(f.Fragment, {});
  if (!o) return f.jsx(f.Fragment, {});
  var m = [];
  if (Ld(r, o))
    for (var h = ie(r), p = r.getMonth(); p <= o.getMonth(); p++)
      m.push(Mn(h, p));
  else for (var h = ie(new Date()), p = 0; p <= 11; p++) m.push(Mn(h, p));
  var g = function (b) {
      var y = Number(b.target.value),
        w = Mn(ie(e.displayMonth), y);
      e.onChange(w);
    },
    v = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : La;
  return f.jsx(v, {
    name: "months",
    "aria-label": d(),
    className: l.dropdown_month,
    style: a.dropdown_month,
    onChange: g,
    value: e.displayMonth.getMonth(),
    caption: s(e.displayMonth, { locale: i }),
    children: m.map(function (b) {
      return f.jsx(
        "option",
        { value: b.getMonth(), children: s(b, { locale: i }) },
        b.getMonth(),
      );
    }),
  });
}
function sf(e) {
  var t,
    n = e.displayMonth,
    r = G(),
    o = r.fromDate,
    a = r.toDate,
    i = r.locale,
    s = r.styles,
    l = r.classNames,
    c = r.components,
    d = r.formatters.formatYearCaption,
    m = r.labels.labelYearDropdown,
    h = [];
  if (!o) return f.jsx(f.Fragment, {});
  if (!a) return f.jsx(f.Fragment, {});
  for (var p = o.getFullYear(), g = a.getFullYear(), v = p; v <= g; v++)
    h.push(ho(Na(new Date()), v));
  var b = function (w) {
      var x = ho(ie(n), Number(w.target.value));
      e.onChange(x);
    },
    y = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : La;
  return f.jsx(y, {
    name: "years",
    "aria-label": m(),
    className: l.dropdown_year,
    style: s.dropdown_year,
    onChange: b,
    value: n.getFullYear(),
    caption: d(n, { locale: i }),
    children: h.map(function (w) {
      return f.jsx(
        "option",
        { value: w.getFullYear(), children: d(w, { locale: i }) },
        w.getFullYear(),
      );
    }),
  });
}
function lf(e, t) {
  var n = u.useState(e),
    r = n[0],
    o = n[1],
    a = t === void 0 ? r : t;
  return [a, o];
}
function cf(e) {
  var t = e.month,
    n = e.defaultMonth,
    r = e.today,
    o = t || n || r || new Date(),
    a = e.toDate,
    i = e.fromDate,
    s = e.numberOfMonths,
    l = s === void 0 ? 1 : s;
  if (a && Nt(a, o) < 0) {
    var c = -1 * (l - 1);
    o = me(a, c);
  }
  return i && Nt(o, i) < 0 && (o = i), ie(o);
}
function uf() {
  var e = G(),
    t = cf(e),
    n = lf(t, e.month),
    r = n[0],
    o = n[1],
    a = function (i) {
      var s;
      if (!e.disableNavigation) {
        var l = ie(i);
        o(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
      }
    };
  return [r, a];
}
function df(e, t) {
  for (
    var n = t.reverseMonths,
      r = t.numberOfMonths,
      o = ie(e),
      a = ie(me(o, r)),
      i = Nt(a, o),
      s = [],
      l = 0;
    l < i;
    l++
  ) {
    var c = me(o, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function ff(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate,
      r = t.pagedNavigation,
      o = t.numberOfMonths,
      a = o === void 0 ? 1 : o,
      i = r ? a : 1,
      s = ie(e);
    if (!n) return me(s, i);
    var l = Nt(n, e);
    if (!(l < a)) return me(s, i);
  }
}
function mf(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate,
      r = t.pagedNavigation,
      o = t.numberOfMonths,
      a = o === void 0 ? 1 : o,
      i = r ? a : 1,
      s = ie(e);
    if (!n) return me(s, -i);
    var l = Nt(s, n);
    if (!(l <= 0)) return me(s, -i);
  }
}
var Wa = u.createContext(void 0);
function hf(e) {
  var t = G(),
    n = uf(),
    r = n[0],
    o = n[1],
    a = df(r, t),
    i = ff(r, t),
    s = mf(r, t),
    l = function (m) {
      return a.some(function (h) {
        return gr(m, h);
      });
    },
    c = function (m, h) {
      l(m) || (h && ka(m, h) ? o(me(m, 1 + t.numberOfMonths * -1)) : o(m));
    },
    d = {
      currentMonth: r,
      displayMonths: a,
      goToMonth: o,
      goToDate: c,
      previousMonth: s,
      nextMonth: i,
      isDateDisplayed: l,
    };
  return f.jsx(Wa.Provider, { value: d, children: e.children });
}
function At() {
  var e = u.useContext(Wa);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function po(e) {
  var t,
    n = G(),
    r = n.classNames,
    o = n.styles,
    a = n.components,
    i = At().goToMonth,
    s = function (d) {
      i(me(d, e.displayIndex ? -e.displayIndex : 0));
    },
    l =
      (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0
        ? t
        : Ia,
    c = f.jsx(l, { id: e.id, displayMonth: e.displayMonth });
  return f.jsxs("div", {
    className: r.caption_dropdowns,
    style: o.caption_dropdowns,
    children: [
      f.jsx("div", { className: r.vhidden, children: c }),
      f.jsx(af, { onChange: s, displayMonth: e.displayMonth }),
      f.jsx(sf, { onChange: s, displayMonth: e.displayMonth }),
    ],
  });
}
function pf(e) {
  return f.jsx(
    "svg",
    D({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, {
      children: f.jsx("path", {
        d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
        fill: "currentColor",
        fillRule: "nonzero",
      }),
    }),
  );
}
function vf(e) {
  return f.jsx(
    "svg",
    D({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, {
      children: f.jsx("path", {
        d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
        fill: "currentColor",
      }),
    }),
  );
}
var tn = u.forwardRef(function (e, t) {
  var n = G(),
    r = n.classNames,
    o = n.styles,
    a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "),
    s = D(D({}, o.button_reset), o.button);
  return (
    e.style && Object.assign(s, e.style),
    f.jsx(
      "button",
      D({}, e, { ref: t, type: "button", className: i, style: s }),
    )
  );
});
function gf(e) {
  var t,
    n,
    r = G(),
    o = r.dir,
    a = r.locale,
    i = r.classNames,
    s = r.styles,
    l = r.labels,
    c = l.labelPrevious,
    d = l.labelNext,
    m = r.components;
  if (!e.nextMonth && !e.previousMonth) return f.jsx(f.Fragment, {});
  var h = c(e.previousMonth, { locale: a }),
    p = [i.nav_button, i.nav_button_previous].join(" "),
    g = d(e.nextMonth, { locale: a }),
    v = [i.nav_button, i.nav_button_next].join(" "),
    b =
      (t = m == null ? void 0 : m.IconRight) !== null && t !== void 0 ? t : vf,
    y = (n = m == null ? void 0 : m.IconLeft) !== null && n !== void 0 ? n : pf;
  return f.jsxs("div", {
    className: i.nav,
    style: s.nav,
    children: [
      !e.hidePrevious &&
        f.jsx(tn, {
          name: "previous-month",
          "aria-label": h,
          className: p,
          style: s.nav_button_previous,
          disabled: !e.previousMonth,
          onClick: e.onPreviousClick,
          children:
            o === "rtl"
              ? f.jsx(b, { className: i.nav_icon, style: s.nav_icon })
              : f.jsx(y, { className: i.nav_icon, style: s.nav_icon }),
        }),
      !e.hideNext &&
        f.jsx(tn, {
          name: "next-month",
          "aria-label": g,
          className: v,
          style: s.nav_button_next,
          disabled: !e.nextMonth,
          onClick: e.onNextClick,
          children:
            o === "rtl"
              ? f.jsx(y, { className: i.nav_icon, style: s.nav_icon })
              : f.jsx(b, { className: i.nav_icon, style: s.nav_icon }),
        }),
    ],
  });
}
function vo(e) {
  var t = G().numberOfMonths,
    n = At(),
    r = n.previousMonth,
    o = n.nextMonth,
    a = n.goToMonth,
    i = n.displayMonths,
    s = i.findIndex(function (g) {
      return gr(e.displayMonth, g);
    }),
    l = s === 0,
    c = s === i.length - 1,
    d = t > 1 && (l || !c),
    m = t > 1 && (c || !l),
    h = function () {
      r && a(r);
    },
    p = function () {
      o && a(o);
    };
  return f.jsx(gf, {
    displayMonth: e.displayMonth,
    hideNext: d,
    hidePrevious: m,
    nextMonth: o,
    previousMonth: r,
    onPreviousClick: h,
    onNextClick: p,
  });
}
function bf(e) {
  var t,
    n = G(),
    r = n.classNames,
    o = n.disableNavigation,
    a = n.styles,
    i = n.captionLayout,
    s = n.components,
    l =
      (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0
        ? t
        : Ia,
    c;
  return (
    o
      ? (c = f.jsx(l, { id: e.id, displayMonth: e.displayMonth }))
      : i === "dropdown"
        ? (c = f.jsx(po, { displayMonth: e.displayMonth, id: e.id }))
        : i === "dropdown-buttons"
          ? (c = f.jsxs(f.Fragment, {
              children: [
                f.jsx(po, {
                  displayMonth: e.displayMonth,
                  displayIndex: e.displayIndex,
                  id: e.id,
                }),
                f.jsx(vo, {
                  displayMonth: e.displayMonth,
                  displayIndex: e.displayIndex,
                  id: e.id,
                }),
              ],
            }))
          : (c = f.jsxs(f.Fragment, {
              children: [
                f.jsx(l, {
                  id: e.id,
                  displayMonth: e.displayMonth,
                  displayIndex: e.displayIndex,
                }),
                f.jsx(vo, { displayMonth: e.displayMonth, id: e.id }),
              ],
            })),
    f.jsx("div", { className: r.caption, style: a.caption, children: c })
  );
}
function yf(e) {
  var t = G(),
    n = t.footer,
    r = t.styles,
    o = t.classNames.tfoot;
  return n
    ? f.jsx("tfoot", {
        className: o,
        style: r.tfoot,
        children: f.jsx("tr", {
          children: f.jsx("td", { colSpan: 8, children: n }),
        }),
      })
    : f.jsx(f.Fragment, {});
}
function wf(e, t, n) {
  for (
    var r = n ? qe(new Date()) : Ce(new Date(), { locale: e, weekStartsOn: t }),
      o = [],
      a = 0;
    a < 7;
    a++
  ) {
    var i = re(r, a);
    o.push(i);
  }
  return o;
}
function xf() {
  var e = G(),
    t = e.classNames,
    n = e.styles,
    r = e.showWeekNumber,
    o = e.locale,
    a = e.weekStartsOn,
    i = e.ISOWeek,
    s = e.formatters.formatWeekdayName,
    l = e.labels.labelWeekday,
    c = wf(o, a, i);
  return f.jsxs("tr", {
    style: n.head_row,
    className: t.head_row,
    children: [
      r && f.jsx("td", { style: n.head_cell, className: t.head_cell }),
      c.map(function (d, m) {
        return f.jsx(
          "th",
          {
            scope: "col",
            className: t.head_cell,
            style: n.head_cell,
            "aria-label": l(d, { locale: o }),
            children: s(d, { locale: o }),
          },
          m,
        );
      }),
    ],
  });
}
function Cf() {
  var e,
    t = G(),
    n = t.classNames,
    r = t.styles,
    o = t.components,
    a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : xf;
  return f.jsx("thead", {
    style: r.head,
    className: n.head,
    children: f.jsx(a, {}),
  });
}
function Sf(e) {
  var t = G(),
    n = t.locale,
    r = t.formatters.formatDay;
  return f.jsx(f.Fragment, { children: r(e.date, { locale: n }) });
}
var br = u.createContext(void 0);
function Pf(e) {
  if (!Tt(e.initialProps)) {
    var t = { selected: void 0, modifiers: { disabled: [] } };
    return f.jsx(br.Provider, { value: t, children: e.children });
  }
  return f.jsx(Ef, { initialProps: e.initialProps, children: e.children });
}
function Ef(e) {
  var t = e.initialProps,
    n = e.children,
    r = t.selected,
    o = t.min,
    a = t.max,
    i = function (c, d, m) {
      var h, p;
      (h = t.onDayClick) === null || h === void 0 || h.call(t, c, d, m);
      var g = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
      if (!g) {
        var v = !!(!d.selected && a && (r == null ? void 0 : r.length) === a);
        if (!v) {
          var b = r ? Aa([], r) : [];
          if (d.selected) {
            var y = b.findIndex(function (w) {
              return ae(c, w);
            });
            b.splice(y, 1);
          } else b.push(c);
          (p = t.onSelect) === null || p === void 0 || p.call(t, b, c, d, m);
        }
      }
    },
    s = { disabled: [] };
  r &&
    s.disabled.push(function (c) {
      var d = a && r.length > a - 1,
        m = r.some(function (h) {
          return ae(h, c);
        });
      return !!(d && !m);
    });
  var l = { selected: r, onDayClick: i, modifiers: s };
  return f.jsx(br.Provider, { value: l, children: n });
}
function yr() {
  var e = u.useContext(br);
  if (!e)
    throw new Error(
      "useSelectMultiple must be used within a SelectMultipleProvider",
    );
  return e;
}
function Nf(e, t) {
  var n = t || {},
    r = n.from,
    o = n.to;
  return r && o
    ? ae(o, e) && ae(r, e)
      ? void 0
      : ae(o, e)
        ? { from: o, to: void 0 }
        : ae(r, e)
          ? void 0
          : Yn(r, e)
            ? { from: e, to: o }
            : { from: r, to: e }
    : o
      ? Yn(e, o)
        ? { from: o, to: e }
        : { from: e, to: o }
      : r
        ? ka(e, r)
          ? { from: e, to: r }
          : { from: r, to: e }
        : { from: e, to: void 0 };
}
var wr = u.createContext(void 0);
function _f(e) {
  if (!kt(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: [],
      },
    };
    return f.jsx(wr.Provider, { value: t, children: e.children });
  }
  return f.jsx(Mf, { initialProps: e.initialProps, children: e.children });
}
function Mf(e) {
  var t = e.initialProps,
    n = e.children,
    r = t.selected,
    o = r || {},
    a = o.from,
    i = o.to,
    s = t.min,
    l = t.max,
    c = function (p, g, v) {
      var b, y;
      (b = t.onDayClick) === null || b === void 0 || b.call(t, p, g, v);
      var w = Nf(p, r);
      (y = t.onSelect) === null || y === void 0 || y.call(t, w, p, g, v);
    },
    d = { range_start: [], range_end: [], range_middle: [], disabled: [] };
  if (
    (a
      ? ((d.range_start = [a]),
        i
          ? ((d.range_end = [i]),
            ae(a, i) || (d.range_middle = [{ after: a, before: i }]))
          : (d.range_end = [a]))
      : i && ((d.range_start = [i]), (d.range_end = [i])),
    s &&
      (a &&
        !i &&
        d.disabled.push({ after: _n(a, s - 1), before: re(a, s - 1) }),
      a && i && d.disabled.push({ after: a, before: re(a, s - 1) }),
      !a &&
        i &&
        d.disabled.push({ after: _n(i, s - 1), before: re(i, s - 1) })),
    l)
  ) {
    if (
      (a &&
        !i &&
        (d.disabled.push({ before: re(a, -l + 1) }),
        d.disabled.push({ after: re(a, l - 1) })),
      a && i)
    ) {
      var m = ye(i, a) + 1,
        h = l - m;
      d.disabled.push({ before: _n(a, h) }),
        d.disabled.push({ after: re(i, h) });
    }
    !a &&
      i &&
      (d.disabled.push({ before: re(i, -l + 1) }),
      d.disabled.push({ after: re(i, l - 1) }));
  }
  return f.jsx(wr.Provider, {
    value: { selected: r, onDayClick: c, modifiers: d },
    children: n,
  });
}
function xr() {
  var e = u.useContext(wr);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Xt(e) {
  return Array.isArray(e) ? Aa([], e) : e !== void 0 ? [e] : [];
}
function Of(e) {
  var t = {};
  return (
    Object.entries(e).forEach(function (n) {
      var r = n[0],
        o = n[1];
      t[r] = Xt(o);
    }),
    t
  );
}
var he;
(function (e) {
  (e.Outside = "outside"),
    (e.Disabled = "disabled"),
    (e.Selected = "selected"),
    (e.Hidden = "hidden"),
    (e.Today = "today"),
    (e.RangeStart = "range_start"),
    (e.RangeEnd = "range_end"),
    (e.RangeMiddle = "range_middle");
})(he || (he = {}));
var Rf = he.Selected,
  Ee = he.Disabled,
  Df = he.Hidden,
  Tf = he.Today,
  On = he.RangeEnd,
  Rn = he.RangeMiddle,
  Dn = he.RangeStart,
  kf = he.Outside;
function Af(e, t, n) {
  var r,
    o =
      ((r = {}),
      (r[Rf] = Xt(e.selected)),
      (r[Ee] = Xt(e.disabled)),
      (r[Df] = Xt(e.hidden)),
      (r[Tf] = [e.today]),
      (r[On] = []),
      (r[Rn] = []),
      (r[Dn] = []),
      (r[kf] = []),
      r);
  return (
    e.fromDate && o[Ee].push({ before: e.fromDate }),
    e.toDate && o[Ee].push({ after: e.toDate }),
    Tt(e)
      ? (o[Ee] = o[Ee].concat(t.modifiers[Ee]))
      : kt(e) &&
        ((o[Ee] = o[Ee].concat(n.modifiers[Ee])),
        (o[Dn] = n.modifiers[Dn]),
        (o[Rn] = n.modifiers[Rn]),
        (o[On] = n.modifiers[On])),
    o
  );
}
var Fa = u.createContext(void 0);
function jf(e) {
  var t = G(),
    n = yr(),
    r = xr(),
    o = Af(t, n, r),
    a = Of(t.modifiers),
    i = D(D({}, o), a);
  return f.jsx(Fa.Provider, { value: i, children: e.children });
}
function Ba() {
  var e = u.useContext(Fa);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function If(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Lf(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Wf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ff(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Bf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Hf(e, t) {
  var n,
    r = t.from,
    o = t.to;
  if (r && o) {
    var a = ye(o, r) < 0;
    a && ((n = [o, r]), (r = n[0]), (o = n[1]));
    var i = ye(e, r) >= 0 && ye(o, e) >= 0;
    return i;
  }
  return o ? ae(o, e) : r ? ae(r, e) : !1;
}
function Yf(e) {
  return hr(e);
}
function Vf(e) {
  return Array.isArray(e) && e.every(hr);
}
function $f(e, t) {
  return t.some(function (n) {
    if (typeof n == "boolean") return n;
    if (Yf(n)) return ae(e, n);
    if (Vf(n)) return n.includes(e);
    if (Lf(n)) return Hf(e, n);
    if (Bf(n)) return n.dayOfWeek.includes(e.getDay());
    if (If(n)) {
      var r = ye(n.before, e),
        o = ye(n.after, e),
        a = r > 0,
        i = o < 0,
        s = Yn(n.before, n.after);
      return s ? i && a : a || i;
    }
    return Wf(n)
      ? ye(e, n.after) > 0
      : Ff(n)
        ? ye(n.before, e) > 0
        : typeof n == "function"
          ? n(e)
          : !1;
  });
}
function Cr(e, t, n) {
  var r = Object.keys(t).reduce(function (a, i) {
      var s = t[i];
      return $f(e, s) && a.push(i), a;
    }, []),
    o = {};
  return (
    r.forEach(function (a) {
      return (o[a] = !0);
    }),
    n && !gr(e, n) && (o.outside = !0),
    o
  );
}
function zf(e, t) {
  for (var n = ie(e[0]), r = pr(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = Cr(i, t),
      l = !s.disabled && !s.hidden;
    if (!l) {
      i = re(i, 1);
      continue;
    }
    if (s.selected) return i;
    s.today && !a && (a = i), o || (o = i), (i = re(i, 1));
  }
  return a || o;
}
var Uf = 365;
function Ha(e, t) {
  var n = t.moveBy,
    r = t.direction,
    o = t.context,
    a = t.modifiers,
    i = t.retry,
    s = i === void 0 ? { count: 0, lastFocused: e } : i,
    l = o.weekStartsOn,
    c = o.fromDate,
    d = o.toDate,
    m = o.locale,
    h = {
      day: re,
      week: Hn,
      month: me,
      year: ku,
      startOfWeek: function (b) {
        return o.ISOWeek ? qe(b) : Ce(b, { locale: m, weekStartsOn: l });
      },
      endOfWeek: function (b) {
        return o.ISOWeek ? _a(b) : vr(b, { locale: m, weekStartsOn: l });
      },
    },
    p = h[n](e, r === "after" ? 1 : -1);
  r === "before" && c
    ? (p = Au([c, p]))
    : r === "after" && d && (p = ju([d, p]));
  var g = !0;
  if (a) {
    var v = Cr(p, a);
    g = !v.disabled && !v.hidden;
  }
  return g
    ? p
    : s.count > Uf
      ? s.lastFocused
      : Ha(p, {
          moveBy: n,
          direction: r,
          context: o,
          modifiers: a,
          retry: D(D({}, s), { count: s.count + 1 }),
        });
}
var Ya = u.createContext(void 0);
function qf(e) {
  var t = At(),
    n = Ba(),
    r = u.useState(),
    o = r[0],
    a = r[1],
    i = u.useState(),
    s = i[0],
    l = i[1],
    c = zf(t.displayMonths, n),
    d = (o ?? (s && t.isDateDisplayed(s))) ? s : c,
    m = function () {
      l(o), a(void 0);
    },
    h = function (b) {
      a(b);
    },
    p = G(),
    g = function (b, y) {
      if (o) {
        var w = Ha(o, { moveBy: b, direction: y, context: p, modifiers: n });
        ae(o, w) || (t.goToDate(w, o), h(w));
      }
    },
    v = {
      focusedDay: o,
      focusTarget: d,
      blur: m,
      focus: h,
      focusDayAfter: function () {
        return g("day", "after");
      },
      focusDayBefore: function () {
        return g("day", "before");
      },
      focusWeekAfter: function () {
        return g("week", "after");
      },
      focusWeekBefore: function () {
        return g("week", "before");
      },
      focusMonthBefore: function () {
        return g("month", "before");
      },
      focusMonthAfter: function () {
        return g("month", "after");
      },
      focusYearBefore: function () {
        return g("year", "before");
      },
      focusYearAfter: function () {
        return g("year", "after");
      },
      focusStartOfWeek: function () {
        return g("startOfWeek", "before");
      },
      focusEndOfWeek: function () {
        return g("endOfWeek", "after");
      },
    };
  return f.jsx(Ya.Provider, { value: v, children: e.children });
}
function Sr() {
  var e = u.useContext(Ya);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Xf(e, t) {
  var n = Ba(),
    r = Cr(e, n, t);
  return r;
}
var Pr = u.createContext(void 0);
function Gf(e) {
  if (!fn(e.initialProps)) {
    var t = { selected: void 0 };
    return f.jsx(Pr.Provider, { value: t, children: e.children });
  }
  return f.jsx(Kf, { initialProps: e.initialProps, children: e.children });
}
function Kf(e) {
  var t = e.initialProps,
    n = e.children,
    r = function (a, i, s) {
      var l, c, d;
      if (
        ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, i, s),
        i.selected && !t.required)
      ) {
        (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, a, i, s);
        return;
      }
      (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, i, s);
    },
    o = { selected: t.selected, onDayClick: r };
  return f.jsx(Pr.Provider, { value: o, children: n });
}
function Va() {
  var e = u.useContext(Pr);
  if (!e)
    throw new Error(
      "useSelectSingle must be used within a SelectSingleProvider",
    );
  return e;
}
function Zf(e, t) {
  var n = G(),
    r = Va(),
    o = yr(),
    a = xr(),
    i = Sr(),
    s = i.focusDayAfter,
    l = i.focusDayBefore,
    c = i.focusWeekAfter,
    d = i.focusWeekBefore,
    m = i.blur,
    h = i.focus,
    p = i.focusMonthBefore,
    g = i.focusMonthAfter,
    v = i.focusYearBefore,
    b = i.focusYearAfter,
    y = i.focusStartOfWeek,
    w = i.focusEndOfWeek,
    x = function (S) {
      var E, I, oe, Q;
      fn(n)
        ? (E = r.onDayClick) === null || E === void 0 || E.call(r, e, t, S)
        : Tt(n)
          ? (I = o.onDayClick) === null || I === void 0 || I.call(o, e, t, S)
          : kt(n)
            ? (oe = a.onDayClick) === null ||
              oe === void 0 ||
              oe.call(a, e, t, S)
            : (Q = n.onDayClick) === null || Q === void 0 || Q.call(n, e, t, S);
    },
    C = function (S) {
      var E;
      h(e), (E = n.onDayFocus) === null || E === void 0 || E.call(n, e, t, S);
    },
    P = function (S) {
      var E;
      m(), (E = n.onDayBlur) === null || E === void 0 || E.call(n, e, t, S);
    },
    _ = function (S) {
      var E;
      (E = n.onDayMouseEnter) === null || E === void 0 || E.call(n, e, t, S);
    },
    N = function (S) {
      var E;
      (E = n.onDayMouseLeave) === null || E === void 0 || E.call(n, e, t, S);
    },
    R = function (S) {
      var E;
      (E = n.onDayPointerEnter) === null || E === void 0 || E.call(n, e, t, S);
    },
    O = function (S) {
      var E;
      (E = n.onDayPointerLeave) === null || E === void 0 || E.call(n, e, t, S);
    },
    T = function (S) {
      var E;
      (E = n.onDayTouchCancel) === null || E === void 0 || E.call(n, e, t, S);
    },
    L = function (S) {
      var E;
      (E = n.onDayTouchEnd) === null || E === void 0 || E.call(n, e, t, S);
    },
    M = function (S) {
      var E;
      (E = n.onDayTouchMove) === null || E === void 0 || E.call(n, e, t, S);
    },
    V = function (S) {
      var E;
      (E = n.onDayTouchStart) === null || E === void 0 || E.call(n, e, t, S);
    },
    W = function (S) {
      var E;
      (E = n.onDayKeyUp) === null || E === void 0 || E.call(n, e, t, S);
    },
    j = function (S) {
      var E;
      switch (S.key) {
        case "ArrowLeft":
          S.preventDefault(), S.stopPropagation(), n.dir === "rtl" ? s() : l();
          break;
        case "ArrowRight":
          S.preventDefault(), S.stopPropagation(), n.dir === "rtl" ? l() : s();
          break;
        case "ArrowDown":
          S.preventDefault(), S.stopPropagation(), c();
          break;
        case "ArrowUp":
          S.preventDefault(), S.stopPropagation(), d();
          break;
        case "PageUp":
          S.preventDefault(), S.stopPropagation(), S.shiftKey ? v() : p();
          break;
        case "PageDown":
          S.preventDefault(), S.stopPropagation(), S.shiftKey ? b() : g();
          break;
        case "Home":
          S.preventDefault(), S.stopPropagation(), y();
          break;
        case "End":
          S.preventDefault(), S.stopPropagation(), w();
          break;
      }
      (E = n.onDayKeyDown) === null || E === void 0 || E.call(n, e, t, S);
    },
    B = {
      onClick: x,
      onFocus: C,
      onBlur: P,
      onKeyDown: j,
      onKeyUp: W,
      onMouseEnter: _,
      onMouseLeave: N,
      onPointerEnter: R,
      onPointerLeave: O,
      onTouchCancel: T,
      onTouchEnd: L,
      onTouchMove: M,
      onTouchStart: V,
    };
  return B;
}
function Qf() {
  var e = G(),
    t = Va(),
    n = yr(),
    r = xr(),
    o = fn(e) ? t.selected : Tt(e) ? n.selected : kt(e) ? r.selected : void 0;
  return o;
}
function Jf(e) {
  return Object.values(he).includes(e);
}
function em(e, t) {
  var n = [e.classNames.day];
  return (
    Object.keys(t).forEach(function (r) {
      var o = e.modifiersClassNames[r];
      if (o) n.push(o);
      else if (Jf(r)) {
        var a = e.classNames["day_".concat(r)];
        a && n.push(a);
      }
    }),
    n
  );
}
function tm(e, t) {
  var n = D({}, e.styles.day);
  return (
    Object.keys(t).forEach(function (r) {
      var o;
      n = D(
        D({}, n),
        (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r],
      );
    }),
    n
  );
}
function nm(e, t, n) {
  var r,
    o,
    a,
    i = G(),
    s = Sr(),
    l = Xf(e, t),
    c = Zf(e, l),
    d = Qf(),
    m = !!(i.onDayClick || i.mode !== "default");
  u.useEffect(
    function () {
      var _;
      l.outside ||
        (s.focusedDay &&
          m &&
          ae(s.focusedDay, e) &&
          ((_ = n.current) === null || _ === void 0 || _.focus()));
    },
    [s.focusedDay, e, n, m, l.outside],
  );
  var h = em(i, l).join(" "),
    p = tm(i, l),
    g = !!((l.outside && !i.showOutsideDays) || l.hidden),
    v =
      (a =
        (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !==
        null && a !== void 0
        ? a
        : Sf,
    b = f.jsx(v, { date: e, displayMonth: t, activeModifiers: l }),
    y = { style: p, className: h, children: b, role: "gridcell" },
    w = s.focusTarget && ae(s.focusTarget, e) && !l.outside,
    x = s.focusedDay && ae(s.focusedDay, e),
    C = D(
      D(
        D({}, y),
        ((r = { disabled: l.disabled, role: "gridcell" }),
        (r["aria-selected"] = l.selected),
        (r.tabIndex = x || w ? 0 : -1),
        r),
      ),
      c,
    ),
    P = {
      isButton: m,
      isHidden: g,
      activeModifiers: l,
      selectedDays: d,
      buttonProps: C,
      divProps: y,
    };
  return P;
}
function rm(e) {
  var t = u.useRef(null),
    n = nm(e.date, e.displayMonth, t);
  return n.isHidden
    ? f.jsx("div", { role: "gridcell" })
    : n.isButton
      ? f.jsx(tn, D({ name: "day", ref: t }, n.buttonProps))
      : f.jsx("div", D({}, n.divProps));
}
function om(e) {
  var t = e.number,
    n = e.dates,
    r = G(),
    o = r.onWeekNumberClick,
    a = r.styles,
    i = r.classNames,
    s = r.locale,
    l = r.labels.labelWeekNumber,
    c = r.formatters.formatWeekNumber,
    d = c(Number(t), { locale: s });
  if (!o)
    return f.jsx("span", {
      className: i.weeknumber,
      style: a.weeknumber,
      children: d,
    });
  var m = l(Number(t), { locale: s }),
    h = function (p) {
      o(t, n, p);
    };
  return f.jsx(tn, {
    name: "week-number",
    "aria-label": m,
    className: i.weeknumber,
    style: a.weeknumber,
    onClick: h,
    children: d,
  });
}
function am(e) {
  var t,
    n,
    r = G(),
    o = r.styles,
    a = r.classNames,
    i = r.showWeekNumber,
    s = r.components,
    l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : rm,
    c =
      (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : om,
    d;
  return (
    i &&
      (d = f.jsx("td", {
        className: a.cell,
        style: o.cell,
        children: f.jsx(c, { number: e.weekNumber, dates: e.dates }),
      })),
    f.jsxs("tr", {
      className: a.row,
      style: o.row,
      children: [
        d,
        e.dates.map(function (m) {
          return f.jsx(
            "td",
            {
              className: a.cell,
              style: o.cell,
              role: "presentation",
              children: f.jsx(l, { displayMonth: e.displayMonth, date: m }),
            },
            Ad(m),
          );
        }),
      ],
    })
  );
}
function go(e, t, n) {
  for (
    var r = n != null && n.ISOWeek ? _a(t) : vr(t, n),
      o = n != null && n.ISOWeek ? qe(e) : Ce(e, n),
      a = ye(r, o),
      i = [],
      s = 0;
    s <= a;
    s++
  )
    i.push(re(o, s));
  var l = i.reduce(function (c, d) {
    var m = n != null && n.ISOWeek ? Oa(d) : Da(d, n),
      h = c.find(function (p) {
        return p.weekNumber === m;
      });
    return h
      ? (h.dates.push(d), c)
      : (c.push({ weekNumber: m, dates: [d] }), c);
  }, []);
  return l;
}
function im(e, t) {
  var n = go(ie(e), pr(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Id(e, t);
    if (r < 6) {
      var o = n[n.length - 1],
        a = o.dates[o.dates.length - 1],
        i = Hn(a, 6 - r),
        s = go(Hn(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function sm(e) {
  var t,
    n,
    r,
    o = G(),
    a = o.locale,
    i = o.classNames,
    s = o.styles,
    l = o.hideHead,
    c = o.fixedWeeks,
    d = o.components,
    m = o.weekStartsOn,
    h = o.firstWeekContainsDate,
    p = o.ISOWeek,
    g = im(e.displayMonth, {
      useFixedWeeks: !!c,
      ISOWeek: p,
      locale: a,
      weekStartsOn: m,
      firstWeekContainsDate: h,
    }),
    v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : Cf,
    b = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : am,
    y = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : yf;
  return f.jsxs("table", {
    id: e.id,
    className: i.table,
    style: s.table,
    role: "grid",
    "aria-labelledby": e["aria-labelledby"],
    children: [
      !l && f.jsx(v, {}),
      f.jsx("tbody", {
        className: i.tbody,
        style: s.tbody,
        children: g.map(function (w) {
          return f.jsx(
            b,
            {
              displayMonth: e.displayMonth,
              dates: w.dates,
              weekNumber: w.weekNumber,
            },
            w.weekNumber,
          );
        }),
      }),
      f.jsx(y, { displayMonth: e.displayMonth }),
    ],
  });
}
function lm() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var cm = lm() ? u.useLayoutEffect : u.useEffect,
  Tn = !1,
  um = 0;
function bo() {
  return "react-day-picker-".concat(++um);
}
function dm(e) {
  var t,
    n = e ?? (Tn ? bo() : null),
    r = u.useState(n),
    o = r[0],
    a = r[1];
  return (
    cm(function () {
      o === null && a(bo());
    }, []),
    u.useEffect(function () {
      Tn === !1 && (Tn = !0);
    }, []),
    (t = e ?? o) !== null && t !== void 0 ? t : void 0
  );
}
function fm(e) {
  var t,
    n,
    r = G(),
    o = r.dir,
    a = r.classNames,
    i = r.styles,
    s = r.components,
    l = At().displayMonths,
    c = dm(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0),
    d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0,
    m = [a.month],
    h = i.month,
    p = e.displayIndex === 0,
    g = e.displayIndex === l.length - 1,
    v = !p && !g;
  o === "rtl" && ((t = [p, g]), (g = t[0]), (p = t[1])),
    p && (m.push(a.caption_start), (h = D(D({}, h), i.caption_start))),
    g && (m.push(a.caption_end), (h = D(D({}, h), i.caption_end))),
    v && (m.push(a.caption_between), (h = D(D({}, h), i.caption_between)));
  var b =
    (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : bf;
  return f.jsxs(
    "div",
    {
      className: m.join(" "),
      style: h,
      children: [
        f.jsx(b, {
          id: c,
          displayMonth: e.displayMonth,
          displayIndex: e.displayIndex,
        }),
        f.jsx(sm, {
          id: d,
          "aria-labelledby": c,
          displayMonth: e.displayMonth,
        }),
      ],
    },
    e.displayIndex,
  );
}
function mm(e) {
  var t = G(),
    n = t.classNames,
    r = t.styles;
  return f.jsx("div", {
    className: n.months,
    style: r.months,
    children: e.children,
  });
}
function hm(e) {
  var t,
    n,
    r = e.initialProps,
    o = G(),
    a = Sr(),
    i = At(),
    s = u.useState(!1),
    l = s[0],
    c = s[1];
  u.useEffect(
    function () {
      o.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), c(!0)));
    },
    [o.initialFocus, l, a.focus, a.focusTarget, a],
  );
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months),
    o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var m = D(D({}, o.styles.root), o.style),
    h = Object.keys(r)
      .filter(function (g) {
        return g.startsWith("data-");
      })
      .reduce(function (g, v) {
        var b;
        return D(D({}, g), ((b = {}), (b[v] = r[v]), b));
      }, {}),
    p =
      (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !==
        null && n !== void 0
        ? n
        : mm;
  return f.jsx(
    "div",
    D(
      {
        className: d.join(" "),
        style: m,
        dir: o.dir,
        id: o.id,
        nonce: r.nonce,
        title: r.title,
        lang: r.lang,
      },
      h,
      {
        children: f.jsx(p, {
          children: i.displayMonths.map(function (g, v) {
            return f.jsx(fm, { displayIndex: v, displayMonth: g }, v);
          }),
        }),
      },
    ),
  );
}
function pm(e) {
  var t = e.children,
    n = Wd(e, ["children"]);
  return f.jsx(rf, {
    initialProps: n,
    children: f.jsx(hf, {
      children: f.jsx(Gf, {
        initialProps: n,
        children: f.jsx(Pf, {
          initialProps: n,
          children: f.jsx(_f, {
            initialProps: n,
            children: f.jsx(jf, { children: f.jsx(qf, { children: t }) }),
          }),
        }),
      }),
    }),
  });
}
function vm(e) {
  return f.jsx(pm, D({}, e, { children: f.jsx(hm, { initialProps: e }) }));
}
function Er({ className: e, classNames: t, showOutsideDays: n = !0, ...r }) {
  return f.jsx(vm, {
    showOutsideDays: n,
    className: J("p-3", e),
    classNames: {
      months: "flex flex-row gap-4",
      month: "space-y-4 group",
      caption:
        "flex justify-start group-first-of-type:justify-end -mx-2 relative items-center",
      caption_label: "text-sm font-medium",
      caption_dropdowns: "flex mr-5 sm:mr-4.5",
      nav: "space-x-1 flex items-center",
      nav_button: J(
        Bn({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
      ),
      nav_button_previous: "absolute left-1",
      nav_button_next: "absolute right-1",
      table: "w-full border-collapse space-y-1",
      head_row: "flex",
      head_cell:
        "text-muted-foreground rounded-md w-6 sm:w-7 text-xs sm:text-sm font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: J(
        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
        r.mode === "range"
          ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
          : "[&:has([aria-selected])]:rounded-md",
      ),
      day: J(
        Bn({ variant: "ghost" }),
        "h-6 w-6 sm:h-7 sm:w-7 text-xs sm:text-sm p-0 font-normal aria-selected:opacity-100",
      ),
      day_range_start: "day-range-start",
      day_range_end: "day-range-end",
      day_selected:
        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "bg-accent text-accent-foreground",
      day_outside:
        "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
      day_disabled: "text-muted-foreground opacity-50",
      day_range_middle:
        "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "invisible",
      ...t,
    },
    ...r,
  });
}
Er.displayName = "Calendar";
Er.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Calendar",
  props: {
    showOutsideDays: {
      defaultValue: { value: "true", computed: !1 },
      required: !1,
    },
  },
};
var gm = u.createContext(void 0);
function $a(e) {
  const t = u.useContext(gm);
  return e || t || "ltr";
}
function Vn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function bm(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Nr = "ScrollArea",
  [za, gh] = Mt(Nr),
  [ym, de] = za(Nr),
  Ua = u.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: r = "hover",
        dir: o,
        scrollHideDelay: a = 600,
        ...i
      } = e,
      [s, l] = u.useState(null),
      [c, d] = u.useState(null),
      [m, h] = u.useState(null),
      [p, g] = u.useState(null),
      [v, b] = u.useState(null),
      [y, w] = u.useState(0),
      [x, C] = u.useState(0),
      [P, _] = u.useState(!1),
      [N, R] = u.useState(!1),
      O = X(t, (L) => l(L)),
      T = $a(o);
    return f.jsx(ym, {
      scope: n,
      type: r,
      dir: T,
      scrollHideDelay: a,
      scrollArea: s,
      viewport: c,
      onViewportChange: d,
      content: m,
      onContentChange: h,
      scrollbarX: p,
      onScrollbarXChange: g,
      scrollbarXEnabled: P,
      onScrollbarXEnabledChange: _,
      scrollbarY: v,
      onScrollbarYChange: b,
      scrollbarYEnabled: N,
      onScrollbarYEnabledChange: R,
      onCornerWidthChange: w,
      onCornerHeightChange: C,
      children: f.jsx(U.div, {
        dir: T,
        ...i,
        ref: O,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": y + "px",
          "--radix-scroll-area-corner-height": x + "px",
          ...e.style,
        },
      }),
    });
  });
Ua.displayName = Nr;
var qa = "ScrollAreaViewport",
  Xa = u.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e,
      i = de(qa, n),
      s = u.useRef(null),
      l = X(t, s, i.onViewportChange);
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        f.jsx(U.div, {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: f.jsx("div", {
            ref: i.onContentChange,
            style: { minWidth: "100%", display: "table" },
            children: r,
          }),
        }),
      ],
    });
  });
Xa.displayName = qa;
var Se = "ScrollAreaScrollbar",
  _r = u.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = de(Se, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o,
      s = e.orientation === "horizontal";
    return (
      u.useEffect(
        () => (
          s ? a(!0) : i(!0),
          () => {
            s ? a(!1) : i(!1);
          }
        ),
        [s, a, i],
      ),
      o.type === "hover"
        ? f.jsx(wm, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
          ? f.jsx(xm, { ...r, ref: t, forceMount: n })
          : o.type === "auto"
            ? f.jsx(Ga, { ...r, ref: t, forceMount: n })
            : o.type === "always"
              ? f.jsx(Mr, { ...r, ref: t })
              : null
    );
  });
_r.displayName = Se;
var wm = u.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = de(Se, e.__scopeScrollArea),
      [a, i] = u.useState(!1);
    return (
      u.useEffect(() => {
        const s = o.scrollArea;
        let l = 0;
        if (s) {
          const c = () => {
              window.clearTimeout(l), i(!0);
            },
            d = () => {
              l = window.setTimeout(() => i(!1), o.scrollHideDelay);
            };
          return (
            s.addEventListener("pointerenter", c),
            s.addEventListener("pointerleave", d),
            () => {
              window.clearTimeout(l),
                s.removeEventListener("pointerenter", c),
                s.removeEventListener("pointerleave", d);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      f.jsx(Ke, {
        present: n || a,
        children: f.jsx(Ga, {
          "data-state": a ? "visible" : "hidden",
          ...r,
          ref: t,
        }),
      })
    );
  }),
  xm = u.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = de(Se, e.__scopeScrollArea),
      a = e.orientation === "horizontal",
      i = hn(() => l("SCROLL_END"), 100),
      [s, l] = bm("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      u.useEffect(() => {
        if (s === "idle") {
          const c = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [s, o.scrollHideDelay, l]),
      u.useEffect(() => {
        const c = o.viewport,
          d = a ? "scrollLeft" : "scrollTop";
        if (c) {
          let m = c[d];
          const h = () => {
            const p = c[d];
            m !== p && (l("SCROLL"), i()), (m = p);
          };
          return (
            c.addEventListener("scroll", h),
            () => c.removeEventListener("scroll", h)
          );
        }
      }, [o.viewport, a, l, i]),
      f.jsx(Ke, {
        present: n || s !== "hidden",
        children: f.jsx(Mr, {
          "data-state": s === "hidden" ? "hidden" : "visible",
          ...r,
          ref: t,
          onPointerEnter: H(e.onPointerEnter, () => l("POINTER_ENTER")),
          onPointerLeave: H(e.onPointerLeave, () => l("POINTER_LEAVE")),
        }),
      })
    );
  }),
  Ga = u.forwardRef((e, t) => {
    const n = de(Se, e.__scopeScrollArea),
      { forceMount: r, ...o } = e,
      [a, i] = u.useState(!1),
      s = e.orientation === "horizontal",
      l = hn(() => {
        if (n.viewport) {
          const c = n.viewport.offsetWidth < n.viewport.scrollWidth,
            d = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(s ? c : d);
        }
      }, 10);
    return (
      ct(n.viewport, l),
      ct(n.content, l),
      f.jsx(Ke, {
        present: r || a,
        children: f.jsx(Mr, {
          "data-state": a ? "visible" : "hidden",
          ...o,
          ref: t,
        }),
      })
    );
  }),
  Mr = u.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      o = de(Se, e.__scopeScrollArea),
      a = u.useRef(null),
      i = u.useRef(0),
      [s, l] = u.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      c = ei(s.viewport, s.content),
      d = {
        ...r,
        sizes: s,
        onSizesChange: l,
        hasThumb: c > 0 && c < 1,
        onThumbChange: (h) => (a.current = h),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (h) => (i.current = h),
      };
    function m(h, p) {
      return _m(h, i.current, s, p);
    }
    return n === "horizontal"
      ? f.jsx(Cm, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && a.current) {
              const h = o.viewport.scrollLeft,
                p = yo(h, s, o.dir);
              a.current.style.transform = `translate3d(${p}px, 0, 0)`;
            }
          },
          onWheelScroll: (h) => {
            o.viewport && (o.viewport.scrollLeft = h);
          },
          onDragScroll: (h) => {
            o.viewport && (o.viewport.scrollLeft = m(h, o.dir));
          },
        })
      : n === "vertical"
        ? f.jsx(Sm, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const h = o.viewport.scrollTop,
                  p = yo(h, s);
                a.current.style.transform = `translate3d(0, ${p}px, 0)`;
              }
            },
            onWheelScroll: (h) => {
              o.viewport && (o.viewport.scrollTop = h);
            },
            onDragScroll: (h) => {
              o.viewport && (o.viewport.scrollTop = m(h));
            },
          })
        : null;
  }),
  Cm = u.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      a = de(Se, e.__scopeScrollArea),
      [i, s] = u.useState(),
      l = u.useRef(null),
      c = X(t, l, a.onScrollbarXChange);
    return (
      u.useEffect(() => {
        l.current && s(getComputedStyle(l.current));
      }, [l]),
      f.jsx(Za, {
        "data-orientation": "horizontal",
        ...o,
        ref: c,
        sizes: n,
        style: {
          bottom: 0,
          left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": mn(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, m) => {
          if (a.viewport) {
            const h = a.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(h), ni(h, m) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            i &&
            r({
              content: a.viewport.scrollWidth,
              viewport: a.viewport.offsetWidth,
              scrollbar: {
                size: l.current.clientWidth,
                paddingStart: rn(i.paddingLeft),
                paddingEnd: rn(i.paddingRight),
              },
            });
        },
      })
    );
  }),
  Sm = u.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      a = de(Se, e.__scopeScrollArea),
      [i, s] = u.useState(),
      l = u.useRef(null),
      c = X(t, l, a.onScrollbarYChange);
    return (
      u.useEffect(() => {
        l.current && s(getComputedStyle(l.current));
      }, [l]),
      f.jsx(Za, {
        "data-orientation": "vertical",
        ...o,
        ref: c,
        sizes: n,
        style: {
          top: 0,
          right: a.dir === "ltr" ? 0 : void 0,
          left: a.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": mn(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, m) => {
          if (a.viewport) {
            const h = a.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(h), ni(h, m) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            i &&
            r({
              content: a.viewport.scrollHeight,
              viewport: a.viewport.offsetHeight,
              scrollbar: {
                size: l.current.clientHeight,
                paddingStart: rn(i.paddingTop),
                paddingEnd: rn(i.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [Pm, Ka] = za(Se),
  Za = u.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: r,
        hasThumb: o,
        onThumbChange: a,
        onThumbPointerUp: i,
        onThumbPointerDown: s,
        onThumbPositionChange: l,
        onDragScroll: c,
        onWheelScroll: d,
        onResize: m,
        ...h
      } = e,
      p = de(Se, n),
      [g, v] = u.useState(null),
      b = X(t, (O) => v(O)),
      y = u.useRef(null),
      w = u.useRef(""),
      x = p.viewport,
      C = r.content - r.viewport,
      P = te(d),
      _ = te(l),
      N = hn(m, 10);
    function R(O) {
      if (y.current) {
        const T = O.clientX - y.current.left,
          L = O.clientY - y.current.top;
        c({ x: T, y: L });
      }
    }
    return (
      u.useEffect(() => {
        const O = (T) => {
          const L = T.target;
          (g == null ? void 0 : g.contains(L)) && P(T, C);
        };
        return (
          document.addEventListener("wheel", O, { passive: !1 }),
          () => document.removeEventListener("wheel", O, { passive: !1 })
        );
      }, [x, g, C, P]),
      u.useEffect(_, [r, _]),
      ct(g, N),
      ct(p.content, N),
      f.jsx(Pm, {
        scope: n,
        scrollbar: g,
        hasThumb: o,
        onThumbChange: te(a),
        onThumbPointerUp: te(i),
        onThumbPositionChange: _,
        onThumbPointerDown: te(s),
        children: f.jsx(U.div, {
          ...h,
          ref: b,
          style: { position: "absolute", ...h.style },
          onPointerDown: H(e.onPointerDown, (O) => {
            O.button === 0 &&
              (O.target.setPointerCapture(O.pointerId),
              (y.current = g.getBoundingClientRect()),
              (w.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              p.viewport && (p.viewport.style.scrollBehavior = "auto"),
              R(O));
          }),
          onPointerMove: H(e.onPointerMove, R),
          onPointerUp: H(e.onPointerUp, (O) => {
            const T = O.target;
            T.hasPointerCapture(O.pointerId) &&
              T.releasePointerCapture(O.pointerId),
              (document.body.style.webkitUserSelect = w.current),
              p.viewport && (p.viewport.style.scrollBehavior = ""),
              (y.current = null);
          }),
        }),
      })
    );
  }),
  nn = "ScrollAreaThumb",
  Qa = u.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Ka(nn, e.__scopeScrollArea);
    return f.jsx(Ke, {
      present: n || o.hasThumb,
      children: f.jsx(Em, { ref: t, ...r }),
    });
  }),
  Em = u.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e,
      a = de(nn, n),
      i = Ka(nn, n),
      { onThumbPositionChange: s } = i,
      l = X(t, (m) => i.onThumbChange(m)),
      c = u.useRef(),
      d = hn(() => {
        c.current && (c.current(), (c.current = void 0));
      }, 100);
    return (
      u.useEffect(() => {
        const m = a.viewport;
        if (m) {
          const h = () => {
            if ((d(), !c.current)) {
              const p = Mm(m, s);
              (c.current = p), s();
            }
          };
          return (
            s(),
            m.addEventListener("scroll", h),
            () => m.removeEventListener("scroll", h)
          );
        }
      }, [a.viewport, d, s]),
      f.jsx(U.div, {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r,
        },
        onPointerDownCapture: H(e.onPointerDownCapture, (m) => {
          const p = m.target.getBoundingClientRect(),
            g = m.clientX - p.left,
            v = m.clientY - p.top;
          i.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: H(e.onPointerUp, i.onThumbPointerUp),
      })
    );
  });
Qa.displayName = nn;
var Or = "ScrollAreaCorner",
  Ja = u.forwardRef((e, t) => {
    const n = de(Or, e.__scopeScrollArea),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? f.jsx(Nm, { ...e, ref: t }) : null;
  });
Ja.displayName = Or;
var Nm = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e,
    o = de(Or, n),
    [a, i] = u.useState(0),
    [s, l] = u.useState(0),
    c = !!(a && s);
  return (
    ct(o.scrollbarX, () => {
      var m;
      const d = ((m = o.scrollbarX) == null ? void 0 : m.offsetHeight) || 0;
      o.onCornerHeightChange(d), l(d);
    }),
    ct(o.scrollbarY, () => {
      var m;
      const d = ((m = o.scrollbarY) == null ? void 0 : m.offsetWidth) || 0;
      o.onCornerWidthChange(d), i(d);
    }),
    c
      ? f.jsx(U.div, {
          ...r,
          ref: t,
          style: {
            width: a,
            height: s,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function rn(e) {
  return e ? parseInt(e, 10) : 0;
}
function ei(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function mn(e) {
  const t = ei(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function _m(e, t, n, r = "ltr") {
  const o = mn(n),
    a = o / 2,
    i = t || a,
    s = o - i,
    l = n.scrollbar.paddingStart + i,
    c = n.scrollbar.size - n.scrollbar.paddingEnd - s,
    d = n.content - n.viewport,
    m = r === "ltr" ? [0, d] : [d * -1, 0];
  return ti([l, c], m)(e);
}
function yo(e, t, n = "ltr") {
  const r = mn(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    a = t.scrollbar.size - o,
    i = t.content - t.viewport,
    s = a - r,
    l = n === "ltr" ? [0, i] : [i * -1, 0],
    c = Vn(e, l);
  return ti([0, i], [0, s])(c);
}
function ti(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ni(e, t) {
  return e > 0 && e < t;
}
var Mm = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const a = { left: e.scrollLeft, top: e.scrollTop },
        i = n.left !== a.left,
        s = n.top !== a.top;
      (i || s) && t(), (n = a), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function hn(e, t) {
  const n = te(e),
    r = u.useRef(0);
  return (
    u.useEffect(() => () => window.clearTimeout(r.current), []),
    u.useCallback(() => {
      window.clearTimeout(r.current), (r.current = window.setTimeout(n, t));
    }, [n, t])
  );
}
function ct(e, t) {
  const n = te(t);
  ne(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
var ri = Ua,
  Om = Xa,
  Rm = Ja;
const Rr = u.forwardRef(({ className: e, children: t, ...n }, r) =>
  f.jsxs(ri, {
    ref: r,
    className: J("relative overflow-hidden", e),
    ...n,
    children: [
      f.jsx(Om, { className: "h-full w-full rounded-[inherit]", children: t }),
      f.jsx(Dr, {}),
      f.jsx(Rm, {}),
    ],
  }),
);
Rr.displayName = ri.displayName;
const Dr = u.forwardRef(
  ({ className: e, orientation: t = "vertical", ...n }, r) =>
    f.jsx(_r, {
      ref: r,
      orientation: t,
      className: J(
        "flex touch-none select-none transition-colors",
        t === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        t === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        e,
      ),
      ...n,
      children: f.jsx(Qa, {
        className: "relative flex-1 rounded-full bg-border",
      }),
    }),
);
Dr.displayName = _r.displayName;
Rr.__docgenInfo = { description: "", methods: [] };
Dr.__docgenInfo = {
  description: "",
  methods: [],
  props: {
    orientation: {
      defaultValue: { value: '"vertical"', computed: !1 },
      required: !1,
    },
  },
};
function Dm(e) {
  const t = e + "CollectionProvider",
    [n, r] = Mt(t),
    [o, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (p) => {
      const { scope: g, children: v } = p,
        b = Ae.useRef(null),
        y = Ae.useRef(new Map()).current;
      return f.jsx(o, { scope: g, itemMap: y, collectionRef: b, children: v });
    };
  i.displayName = t;
  const s = e + "CollectionSlot",
    l = Ae.forwardRef((p, g) => {
      const { scope: v, children: b } = p,
        y = a(s, v),
        w = X(g, y.collectionRef);
      return f.jsx(ze, { ref: w, children: b });
    });
  l.displayName = s;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    m = Ae.forwardRef((p, g) => {
      const { scope: v, children: b, ...y } = p,
        w = Ae.useRef(null),
        x = X(g, w),
        C = a(c, v);
      return (
        Ae.useEffect(
          () => (
            C.itemMap.set(w, { ref: w, ...y }), () => void C.itemMap.delete(w)
          ),
        ),
        f.jsx(ze, { [d]: "", ref: x, children: b })
      );
    });
  m.displayName = c;
  function h(p) {
    const g = a(e + "CollectionConsumer", p);
    return Ae.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (C, P) => y.indexOf(C.ref.current) - y.indexOf(P.ref.current),
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: i, Slot: l, ItemSlot: m }, h, r];
}
function Tm(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var km = "VisuallyHidden",
  oi = u.forwardRef((e, t) =>
    f.jsx(U.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
oi.displayName = km;
var Am = [" ", "Enter", "ArrowUp", "ArrowDown"],
  jm = [" ", "Enter"],
  jt = "Select",
  [pn, vn, Im] = Dm(jt),
  [mt, bh] = Mt(jt, [Im, un]),
  gn = un(),
  [Lm, Be] = mt(jt),
  [Wm, Fm] = mt(jt),
  ai = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: a,
        value: i,
        defaultValue: s,
        onValueChange: l,
        dir: c,
        name: d,
        autoComplete: m,
        disabled: h,
        required: p,
      } = e,
      g = gn(t),
      [v, b] = u.useState(null),
      [y, w] = u.useState(null),
      [x, C] = u.useState(!1),
      P = $a(c),
      [_ = !1, N] = Ln({ prop: r, defaultProp: o, onChange: a }),
      [R, O] = Ln({ prop: i, defaultProp: s, onChange: l }),
      T = u.useRef(null),
      L = v ? !!v.closest("form") : !0,
      [M, V] = u.useState(new Set()),
      W = Array.from(M)
        .map((j) => j.props.value)
        .join(";");
    return f.jsx(Go, {
      ...g,
      children: f.jsxs(Lm, {
        required: p,
        scope: t,
        trigger: v,
        onTriggerChange: b,
        valueNode: y,
        onValueNodeChange: w,
        valueNodeHasChildren: x,
        onValueNodeHasChildrenChange: C,
        contentId: sn(),
        value: R,
        onValueChange: O,
        open: _,
        onOpenChange: N,
        dir: P,
        triggerPointerDownPosRef: T,
        disabled: h,
        children: [
          f.jsx(pn.Provider, {
            scope: t,
            children: f.jsx(Wm, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: u.useCallback((j) => {
                V((B) => new Set(B).add(j));
              }, []),
              onNativeOptionRemove: u.useCallback((j) => {
                V((B) => {
                  const S = new Set(B);
                  return S.delete(j), S;
                });
              }, []),
              children: n,
            }),
          }),
          L
            ? f.jsxs(
                Ri,
                {
                  "aria-hidden": !0,
                  required: p,
                  tabIndex: -1,
                  name: d,
                  autoComplete: m,
                  value: R,
                  onChange: (j) => O(j.target.value),
                  disabled: h,
                  children: [
                    R === void 0 ? f.jsx("option", { value: "" }) : null,
                    Array.from(M),
                  ],
                },
                W,
              )
            : null,
        ],
      }),
    });
  };
ai.displayName = jt;
var ii = "SelectTrigger",
  si = u.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      a = gn(n),
      i = Be(ii, n),
      s = i.disabled || r,
      l = X(t, i.onTriggerChange),
      c = vn(n),
      [d, m, h] = Di((g) => {
        const v = c().filter((w) => !w.disabled),
          b = v.find((w) => w.value === i.value),
          y = Ti(v, g, b);
        y !== void 0 && i.onValueChange(y.value);
      }),
      p = () => {
        s || (i.onOpenChange(!0), h());
      };
    return f.jsx(ar, {
      asChild: !0,
      ...a,
      children: f.jsx(U.button, {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": Oi(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: H(o.onClick, (g) => {
          g.currentTarget.focus();
        }),
        onPointerDown: H(o.onPointerDown, (g) => {
          const v = g.target;
          v.hasPointerCapture(g.pointerId) &&
            v.releasePointerCapture(g.pointerId),
            g.button === 0 &&
              g.ctrlKey === !1 &&
              (p(),
              (i.triggerPointerDownPosRef.current = {
                x: Math.round(g.pageX),
                y: Math.round(g.pageY),
              }),
              g.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (g) => {
          const v = d.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) &&
            g.key.length === 1 &&
            m(g.key),
            !(v && g.key === " ") &&
              Am.includes(g.key) &&
              (p(), g.preventDefault());
        }),
      }),
    });
  });
si.displayName = ii;
var li = "SelectValue",
  ci = u.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: a,
        placeholder: i = "",
        ...s
      } = e,
      l = Be(li, n),
      { onValueNodeHasChildrenChange: c } = l,
      d = a !== void 0,
      m = X(t, l.onValueNodeChange);
    return (
      ne(() => {
        c(d);
      }, [c, d]),
      f.jsx(U.span, {
        ...s,
        ref: m,
        style: { pointerEvents: "none" },
        children: Oi(l.value) ? f.jsx(f.Fragment, { children: i }) : a,
      })
    );
  });
ci.displayName = li;
var Bm = "SelectIcon",
  ui = u.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return f.jsx(U.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
ui.displayName = Bm;
var Hm = "SelectPortal",
  di = (e) => f.jsx(ir, { asChild: !0, ...e });
di.displayName = Hm;
var Xe = "SelectContent",
  fi = u.forwardRef((e, t) => {
    const n = Be(Xe, e.__scopeSelect),
      [r, o] = u.useState();
    if (
      (ne(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const a = r;
      return a
        ? _t.createPortal(
            f.jsx(mi, {
              scope: e.__scopeSelect,
              children: f.jsx(pn.Slot, {
                scope: e.__scopeSelect,
                children: f.jsx("div", { children: e.children }),
              }),
            }),
            a,
          )
        : null;
    }
    return f.jsx(hi, { ...e, ref: t });
  });
fi.displayName = Xe;
var Ne = 10,
  [mi, He] = mt(Xe),
  Ym = "SelectContentImpl",
  hi = u.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        side: s,
        sideOffset: l,
        align: c,
        alignOffset: d,
        arrowPadding: m,
        collisionBoundary: h,
        collisionPadding: p,
        sticky: g,
        hideWhenDetached: v,
        avoidCollisions: b,
        ...y
      } = e,
      w = Be(Xe, n),
      [x, C] = u.useState(null),
      [P, _] = u.useState(null),
      N = X(t, (k) => C(k)),
      [R, O] = u.useState(null),
      [T, L] = u.useState(null),
      M = vn(n),
      [V, W] = u.useState(!1),
      j = u.useRef(!1);
    u.useEffect(() => {
      if (x) return Jo(x);
    }, [x]),
      Mo();
    const B = u.useCallback(
        (k) => {
          const [K, ...ee] = M().map((z) => z.ref.current),
            [q] = ee.slice(-1),
            $ = document.activeElement;
          for (const z of k)
            if (
              z === $ ||
              (z == null || z.scrollIntoView({ block: "nearest" }),
              z === K && P && (P.scrollTop = 0),
              z === q && P && (P.scrollTop = P.scrollHeight),
              z == null || z.focus(),
              document.activeElement !== $)
            )
              return;
        },
        [M, P],
      ),
      S = u.useCallback(() => B([R, x]), [B, R, x]);
    u.useEffect(() => {
      V && S();
    }, [V, S]);
    const { onOpenChange: E, triggerPointerDownPosRef: I } = w;
    u.useEffect(() => {
      if (x) {
        let k = { x: 0, y: 0 };
        const K = (q) => {
            var $, z;
            k = {
              x: Math.abs(
                Math.round(q.pageX) -
                  ((($ = I.current) == null ? void 0 : $.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(q.pageY) -
                  (((z = I.current) == null ? void 0 : z.y) ?? 0),
              ),
            };
          },
          ee = (q) => {
            k.x <= 10 && k.y <= 10
              ? q.preventDefault()
              : x.contains(q.target) || E(!1),
              document.removeEventListener("pointermove", K),
              (I.current = null);
          };
        return (
          I.current !== null &&
            (document.addEventListener("pointermove", K),
            document.addEventListener("pointerup", ee, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", K),
              document.removeEventListener("pointerup", ee, { capture: !0 });
          }
        );
      }
    }, [x, E, I]),
      u.useEffect(() => {
        const k = () => E(!1);
        return (
          window.addEventListener("blur", k),
          window.addEventListener("resize", k),
          () => {
            window.removeEventListener("blur", k),
              window.removeEventListener("resize", k);
          }
        );
      }, [E]);
    const [oe, Q] = Di((k) => {
        const K = M().filter(($) => !$.disabled),
          ee = K.find(($) => $.ref.current === document.activeElement),
          q = Ti(K, k, ee);
        q && setTimeout(() => q.ref.current.focus());
      }),
      pe = u.useCallback(
        (k, K, ee) => {
          const q = !j.current && !ee;
          ((w.value !== void 0 && w.value === K) || q) &&
            (O(k), q && (j.current = !0));
        },
        [w.value],
      ),
      ht = u.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      Re = u.useCallback(
        (k, K, ee) => {
          const q = !j.current && !ee;
          ((w.value !== void 0 && w.value === K) || q) && L(k);
        },
        [w.value],
      ),
      Qe = r === "popper" ? $n : pi,
      Ye =
        Qe === $n
          ? {
              side: s,
              sideOffset: l,
              align: c,
              alignOffset: d,
              arrowPadding: m,
              collisionBoundary: h,
              collisionPadding: p,
              sticky: g,
              hideWhenDetached: v,
              avoidCollisions: b,
            }
          : {};
    return f.jsx(mi, {
      scope: n,
      content: x,
      viewport: P,
      onViewportChange: _,
      itemRefCallback: pe,
      selectedItem: R,
      onItemLeave: ht,
      itemTextRefCallback: Re,
      focusSelectedItem: S,
      selectedItemText: T,
      position: r,
      isPositioned: V,
      searchRef: oe,
      children: f.jsx(sr, {
        as: ze,
        allowPinchZoom: !0,
        children: f.jsx(Kn, {
          asChild: !0,
          trapped: w.open,
          onMountAutoFocus: (k) => {
            k.preventDefault();
          },
          onUnmountAutoFocus: H(o, (k) => {
            var K;
            (K = w.trigger) == null || K.focus({ preventScroll: !0 }),
              k.preventDefault();
          }),
          children: f.jsx(Gn, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: (k) => k.preventDefault(),
            onDismiss: () => w.onOpenChange(!1),
            children: f.jsx(Qe, {
              role: "listbox",
              id: w.contentId,
              "data-state": w.open ? "open" : "closed",
              dir: w.dir,
              onContextMenu: (k) => k.preventDefault(),
              ...y,
              ...Ye,
              onPlaced: () => W(!0),
              ref: N,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: H(y.onKeyDown, (k) => {
                const K = k.ctrlKey || k.altKey || k.metaKey;
                if (
                  (k.key === "Tab" && k.preventDefault(),
                  !K && k.key.length === 1 && Q(k.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key))
                ) {
                  let q = M()
                    .filter(($) => !$.disabled)
                    .map(($) => $.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(k.key) &&
                      (q = q.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(k.key))
                  ) {
                    const $ = k.target,
                      z = q.indexOf($);
                    q = q.slice(z + 1);
                  }
                  setTimeout(() => B(q)), k.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
hi.displayName = Ym;
var Vm = "SelectItemAlignedPosition",
  pi = u.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      a = Be(Xe, n),
      i = He(Xe, n),
      [s, l] = u.useState(null),
      [c, d] = u.useState(null),
      m = X(t, (N) => d(N)),
      h = vn(n),
      p = u.useRef(!1),
      g = u.useRef(!0),
      {
        viewport: v,
        selectedItem: b,
        selectedItemText: y,
        focusSelectedItem: w,
      } = i,
      x = u.useCallback(() => {
        if (a.trigger && a.valueNode && s && c && v && b && y) {
          const N = a.trigger.getBoundingClientRect(),
            R = c.getBoundingClientRect(),
            O = a.valueNode.getBoundingClientRect(),
            T = y.getBoundingClientRect();
          if (a.dir !== "rtl") {
            const $ = T.left - R.left,
              z = O.left - $,
              se = N.left - z,
              ve = N.width + se,
              pt = Math.max(ve, R.width),
              vt = window.innerWidth - Ne,
              gt = Vn(z, [Ne, vt - pt]);
            (s.style.minWidth = ve + "px"), (s.style.left = gt + "px");
          } else {
            const $ = R.right - T.right,
              z = window.innerWidth - O.right - $,
              se = window.innerWidth - N.right - z,
              ve = N.width + se,
              pt = Math.max(ve, R.width),
              vt = window.innerWidth - Ne,
              gt = Vn(z, [Ne, vt - pt]);
            (s.style.minWidth = ve + "px"), (s.style.right = gt + "px");
          }
          const L = h(),
            M = window.innerHeight - Ne * 2,
            V = v.scrollHeight,
            W = window.getComputedStyle(c),
            j = parseInt(W.borderTopWidth, 10),
            B = parseInt(W.paddingTop, 10),
            S = parseInt(W.borderBottomWidth, 10),
            E = parseInt(W.paddingBottom, 10),
            I = j + B + V + E + S,
            oe = Math.min(b.offsetHeight * 5, I),
            Q = window.getComputedStyle(v),
            pe = parseInt(Q.paddingTop, 10),
            ht = parseInt(Q.paddingBottom, 10),
            Re = N.top + N.height / 2 - Ne,
            Qe = M - Re,
            Ye = b.offsetHeight / 2,
            k = b.offsetTop + Ye,
            K = j + B + k,
            ee = I - K;
          if (K <= Re) {
            const $ = b === L[L.length - 1].ref.current;
            s.style.bottom = "0px";
            const z = c.clientHeight - v.offsetTop - v.offsetHeight,
              se = Math.max(Qe, Ye + ($ ? ht : 0) + z + S),
              ve = K + se;
            s.style.height = ve + "px";
          } else {
            const $ = b === L[0].ref.current;
            s.style.top = "0px";
            const se = Math.max(Re, j + v.offsetTop + ($ ? pe : 0) + Ye) + ee;
            (s.style.height = se + "px"), (v.scrollTop = K - Re + v.offsetTop);
          }
          (s.style.margin = `${Ne}px 0`),
            (s.style.minHeight = oe + "px"),
            (s.style.maxHeight = M + "px"),
            r == null || r(),
            requestAnimationFrame(() => (p.current = !0));
        }
      }, [h, a.trigger, a.valueNode, s, c, v, b, y, a.dir, r]);
    ne(() => x(), [x]);
    const [C, P] = u.useState();
    ne(() => {
      c && P(window.getComputedStyle(c).zIndex);
    }, [c]);
    const _ = u.useCallback(
      (N) => {
        N && g.current === !0 && (x(), w == null || w(), (g.current = !1));
      },
      [x, w],
    );
    return f.jsx(zm, {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: _,
      children: f.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: f.jsx(U.div, {
          ...o,
          ref: m,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
pi.displayName = Vm;
var $m = "SelectPopperPosition",
  $n = u.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Ne,
        ...a
      } = e,
      i = gn(n);
    return f.jsx(Ko, {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
$n.displayName = $m;
var [zm, Tr] = mt(Xe, {}),
  zn = "SelectViewport",
  vi = u.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      a = He(zn, n),
      i = Tr(zn, n),
      s = X(t, a.onViewportChange),
      l = u.useRef(0);
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        f.jsx(pn.Slot, {
          scope: n,
          children: f.jsx(U.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: s,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...o.style,
            },
            onScroll: H(o.onScroll, (c) => {
              const d = c.currentTarget,
                { contentWrapper: m, shouldExpandOnScrollRef: h } = i;
              if (h != null && h.current && m) {
                const p = Math.abs(l.current - d.scrollTop);
                if (p > 0) {
                  const g = window.innerHeight - Ne * 2,
                    v = parseFloat(m.style.minHeight),
                    b = parseFloat(m.style.height),
                    y = Math.max(v, b);
                  if (y < g) {
                    const w = y + p,
                      x = Math.min(g, w),
                      C = w - x;
                    (m.style.height = x + "px"),
                      m.style.bottom === "0px" &&
                        ((d.scrollTop = C > 0 ? C : 0),
                        (m.style.justifyContent = "flex-end"));
                  }
                }
              }
              l.current = d.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
vi.displayName = zn;
var gi = "SelectGroup",
  [Um, qm] = mt(gi),
  Xm = u.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = sn();
    return f.jsx(Um, {
      scope: n,
      id: o,
      children: f.jsx(U.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
Xm.displayName = gi;
var bi = "SelectLabel",
  yi = u.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = qm(bi, n);
    return f.jsx(U.div, { id: o.id, ...r, ref: t });
  });
yi.displayName = bi;
var on = "SelectItem",
  [Gm, wi] = mt(on),
  xi = u.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: a,
        ...i
      } = e,
      s = Be(on, n),
      l = He(on, n),
      c = s.value === r,
      [d, m] = u.useState(a ?? ""),
      [h, p] = u.useState(!1),
      g = X(t, (y) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, y, r, o);
      }),
      v = sn(),
      b = () => {
        o || (s.onValueChange(r), s.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return f.jsx(Gm, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: c,
      onItemTextChange: u.useCallback((y) => {
        m((w) => w || ((y == null ? void 0 : y.textContent) ?? "").trim());
      }, []),
      children: f.jsx(pn.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: d,
        children: f.jsx(U.div, {
          role: "option",
          "aria-labelledby": v,
          "data-highlighted": h ? "" : void 0,
          "aria-selected": c && h,
          "data-state": c ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...i,
          ref: g,
          onFocus: H(i.onFocus, () => p(!0)),
          onBlur: H(i.onBlur, () => p(!1)),
          onPointerUp: H(i.onPointerUp, b),
          onPointerMove: H(i.onPointerMove, (y) => {
            var w;
            o
              ? (w = l.onItemLeave) == null || w.call(l)
              : y.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: H(i.onPointerLeave, (y) => {
            var w;
            y.currentTarget === document.activeElement &&
              ((w = l.onItemLeave) == null || w.call(l));
          }),
          onKeyDown: H(i.onKeyDown, (y) => {
            var x;
            (((x = l.searchRef) == null ? void 0 : x.current) !== "" &&
              y.key === " ") ||
              (jm.includes(y.key) && b(), y.key === " " && y.preventDefault());
          }),
        }),
      }),
    });
  });
xi.displayName = on;
var Ct = "SelectItemText",
  Ci = u.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e,
      i = Be(Ct, n),
      s = He(Ct, n),
      l = wi(Ct, n),
      c = Fm(Ct, n),
      [d, m] = u.useState(null),
      h = X(
        t,
        (y) => m(y),
        l.onItemTextChange,
        (y) => {
          var w;
          return (w = s.itemTextRefCallback) == null
            ? void 0
            : w.call(s, y, l.value, l.disabled);
        },
      ),
      p = d == null ? void 0 : d.textContent,
      g = u.useMemo(
        () =>
          f.jsx(
            "option",
            { value: l.value, disabled: l.disabled, children: p },
            l.value,
          ),
        [l.disabled, l.value, p],
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: b } = c;
    return (
      ne(() => (v(g), () => b(g)), [v, b, g]),
      f.jsxs(f.Fragment, {
        children: [
          f.jsx(U.span, { id: l.textId, ...a, ref: h }),
          l.isSelected && i.valueNode && !i.valueNodeHasChildren
            ? _t.createPortal(a.children, i.valueNode)
            : null,
        ],
      })
    );
  });
Ci.displayName = Ct;
var Si = "SelectItemIndicator",
  Pi = u.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return wi(Si, n).isSelected
      ? f.jsx(U.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
Pi.displayName = Si;
var Un = "SelectScrollUpButton",
  Ei = u.forwardRef((e, t) => {
    const n = He(Un, e.__scopeSelect),
      r = Tr(Un, e.__scopeSelect),
      [o, a] = u.useState(!1),
      i = X(t, r.onScrollButtonChange);
    return (
      ne(() => {
        if (n.viewport && n.isPositioned) {
          let s = function () {
            const c = l.scrollTop > 0;
            a(c);
          };
          const l = n.viewport;
          return (
            s(),
            l.addEventListener("scroll", s),
            () => l.removeEventListener("scroll", s)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? f.jsx(_i, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: s, selectedItem: l } = n;
              s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
Ei.displayName = Un;
var qn = "SelectScrollDownButton",
  Ni = u.forwardRef((e, t) => {
    const n = He(qn, e.__scopeSelect),
      r = Tr(qn, e.__scopeSelect),
      [o, a] = u.useState(!1),
      i = X(t, r.onScrollButtonChange);
    return (
      ne(() => {
        if (n.viewport && n.isPositioned) {
          let s = function () {
            const c = l.scrollHeight - l.clientHeight,
              d = Math.ceil(l.scrollTop) < c;
            a(d);
          };
          const l = n.viewport;
          return (
            s(),
            l.addEventListener("scroll", s),
            () => l.removeEventListener("scroll", s)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? f.jsx(_i, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: s, selectedItem: l } = n;
              s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
Ni.displayName = qn;
var _i = u.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      a = He("SelectScrollButton", n),
      i = u.useRef(null),
      s = vn(n),
      l = u.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      u.useEffect(() => () => l(), [l]),
      ne(() => {
        var d;
        const c = s().find((m) => m.ref.current === document.activeElement);
        (d = c == null ? void 0 : c.ref.current) == null ||
          d.scrollIntoView({ block: "nearest" });
      }, [s]),
      f.jsx(U.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: H(o.onPointerDown, () => {
          i.current === null && (i.current = window.setInterval(r, 50));
        }),
        onPointerMove: H(o.onPointerMove, () => {
          var c;
          (c = a.onItemLeave) == null || c.call(a),
            i.current === null && (i.current = window.setInterval(r, 50));
        }),
        onPointerLeave: H(o.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  Km = "SelectSeparator",
  Mi = u.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return f.jsx(U.div, { "aria-hidden": !0, ...r, ref: t });
  });
Mi.displayName = Km;
var Xn = "SelectArrow",
  Zm = u.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = gn(n),
      a = Be(Xn, n),
      i = He(Xn, n);
    return a.open && i.position === "popper"
      ? f.jsx(Zo, { ...o, ...r, ref: t })
      : null;
  });
Zm.displayName = Xn;
function Oi(e) {
  return e === "" || e === void 0;
}
var Ri = u.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = u.useRef(null),
    a = X(t, o),
    i = Tm(n);
  return (
    u.useEffect(() => {
      const s = o.current,
        l = window.HTMLSelectElement.prototype,
        d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== n && d) {
        const m = new Event("change", { bubbles: !0 });
        d.call(s, n), s.dispatchEvent(m);
      }
    }, [i, n]),
    f.jsx(oi, {
      asChild: !0,
      children: f.jsx("select", { ...r, ref: a, defaultValue: n }),
    })
  );
});
Ri.displayName = "BubbleSelect";
function Di(e) {
  const t = te(e),
    n = u.useRef(""),
    r = u.useRef(0),
    o = u.useCallback(
      (i) => {
        const s = n.current + i;
        t(s),
          (function l(c) {
            (n.current = c),
              window.clearTimeout(r.current),
              c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
          })(s);
      },
      [t],
    ),
    a = u.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Ti(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    a = n ? e.indexOf(n) : -1;
  let i = Qm(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find((c) =>
    c.textValue.toLowerCase().startsWith(o.toLowerCase()),
  );
  return l !== n ? l : void 0;
}
function Qm(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Jm = ai,
  ki = si,
  eh = ci,
  th = ui,
  nh = di,
  Ai = fi,
  rh = vi,
  ji = yi,
  Ii = xi,
  oh = Ci,
  ah = Pi,
  Li = Ei,
  Wi = Ni,
  Fi = Mi;
const ih = Jm,
  sh = eh,
  kr = u.forwardRef(({ className: e, children: t, ...n }, r) =>
    f.jsxs(ki, {
      ref: r,
      className: J(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...n,
      children: [
        t,
        f.jsx(th, {
          asChild: !0,
          children: f.jsx(rs, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
kr.displayName = ki.displayName;
const Ar = u.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(Li, {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: f.jsx(ms, {}),
  }),
);
Ar.displayName = Li.displayName;
const jr = u.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(Wi, {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: f.jsx(ss, {}),
  }),
);
jr.displayName = Wi.displayName;
const Ir = u.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    f.jsx(nh, {
      children: f.jsxs(Ai, {
        ref: o,
        className: J(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: n,
        ...r,
        children: [
          f.jsx(Ar, {}),
          f.jsx(rh, {
            className: J(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: t,
          }),
          f.jsx(jr, {}),
        ],
      }),
    }),
);
Ir.displayName = Ai.displayName;
const Bi = u.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(ji, {
    ref: n,
    className: J("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  }),
);
Bi.displayName = ji.displayName;
const Lr = u.forwardRef(({ className: e, children: t, ...n }, r) =>
  f.jsxs(Ii, {
    ref: r,
    className: J(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      f.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: f.jsx(ah, { children: f.jsx(as, { className: "h-4 w-4" }) }),
      }),
      f.jsx(oh, { children: t }),
    ],
  }),
);
Lr.displayName = Ii.displayName;
const Hi = u.forwardRef(({ className: e, ...t }, n) =>
  f.jsx(Fi, { ref: n, className: J("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
Hi.displayName = Fi.displayName;
kr.__docgenInfo = { description: "", methods: [] };
Ir.__docgenInfo = {
  description: "",
  methods: [],
  props: {
    position: {
      defaultValue: { value: '"popper"', computed: !1 },
      required: !1,
    },
  },
};
Bi.__docgenInfo = { description: "", methods: [] };
Lr.__docgenInfo = { description: "", methods: [] };
Hi.__docgenInfo = { description: "", methods: [] };
Ar.__docgenInfo = { description: "", methods: [] };
jr.__docgenInfo = { description: "", methods: [] };
rt.extend(Ui);
const lh = new Date(1900, 0, 1),
  ch = new Date(2199, 11, 31),
  uh = ({
    range: e,
    align: t = "start",
    quickOptions: n,
    initialDateRange: r,
    showTimezone: o,
    onSelect: a,
  }) => {
    var c, d;
    const i = new Date(),
      [s, l] = u.useState({
        from: r ? r.from : new Date(i.valueOf() - 864e5 * 7),
        to: r ? r.to : i,
      });
    return f.jsxs(f.Fragment, {
      children: [
        n != null && n.length
          ? f.jsxs("div", {
              className: "my-2",
              children: [
                f.jsx("div", {
                  className: "text-sm mb-1 font-medium",
                  children: "Quick Options",
                }),
                f.jsx("div", {
                  className: "flex gap-3 flex-wrap",
                  children: n.map((m, h) => {
                    var p, g;
                    return f.jsx(
                      "div",
                      {
                        className: `text-xs sm:text-sm font-medium cursor-pointer ${(s == null ? void 0 : s.from) === ((p = m.range) == null ? void 0 : p.from) && (s == null ? void 0 : s.to) === ((g = m.range) == null ? void 0 : g.to) ? "text-gray-600" : "text-gray-400 hover:text-gray-500"}`,
                        onClick: () => l(m.range),
                        children: m.label,
                      },
                      h,
                    );
                  }),
                }),
              ],
            })
          : null,
        f.jsx("div", {
          className: "-mx-3 mb-2",
          children: f.jsx(Er, {
            mode: "range",
            defaultMonth: s == null ? void 0 : s.from,
            selected: s,
            onSelect: l,
            numberOfMonths: 2,
            captionLayout: "dropdown-buttons",
            fromDate: lh,
            toDate: ch,
            components: {
              CaptionLabel: () => null,
              Dropdown: ({ value: m, onChange: h, children: p, ...g }) => {
                var w;
                const v = Ae.Children.toArray(p),
                  b = v.find((x) => x.props.value === m),
                  y = (x) => {
                    const C = { target: { value: x } };
                    h == null || h(C);
                  };
                return f.jsxs(ih, {
                  value: m == null ? void 0 : m.toString(),
                  onValueChange: (x) => {
                    y(x);
                  },
                  children: [
                    f.jsx(kr, {
                      className:
                        "pr-0 -mr-3 sm:-mr-2.5 h-7 ring-0 focus:ring-0 shadow-none focus:shadow-none border-none focus:border-none",
                      children: f.jsx(sh, {
                        children:
                          (w = b == null ? void 0 : b.props) == null
                            ? void 0
                            : w.children,
                      }),
                    }),
                    f.jsx(Ir, {
                      position: "popper",
                      children: f.jsx(Rr, {
                        className: "h-80",
                        children: v.map((x, C) => {
                          var P;
                          return f.jsx(
                            Lr,
                            {
                              value:
                                ((P = x.props.value) == null
                                  ? void 0
                                  : P.toString()) ?? "",
                              children: x.props.children,
                            },
                            `${x.props.value}-${C}`,
                          );
                        }),
                      }),
                    }),
                  ],
                });
              },
              IconLeft: () => f.jsx(cs, { className: "h-4 w-4" }),
              IconRight: () => f.jsx(ds, { className: "h-4 w-4" }),
            },
          }),
        }),
        f.jsxs("div", {
          className: "flex gap-4 mb-4",
          children: [
            f.jsxs("div", {
              className: "w-1/2",
              children: [
                f.jsx("label", {
                  className: "block font-medium pb-1 text-sm",
                  children: "From Date & Time",
                }),
                f.jsx("div", {
                  className: "flex align-center gap-1",
                  children: f.jsx(Jt, {
                    type: "datetime-local",
                    className:
                      "cursor-text px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm",
                    value:
                      ((s == null ? void 0 : s.from) ?? {})
                        ? rt(s == null ? void 0 : s.from).format(
                            "YYYY-MM-DDTHH:mm",
                          )
                        : "",
                    onChange: (m) => {
                      const h = rt(m.target.value).toDate();
                      l({
                        from: h,
                        to:
                          s != null && s.to && h > s.to
                            ? h
                            : s == null
                              ? void 0
                              : s.to,
                      });
                    },
                  }),
                }),
              ],
            }),
            f.jsxs("div", {
              className: "w-1/2",
              children: [
                f.jsx("label", {
                  className: "block font-medium pb-1 text-sm",
                  children: "To Date & Time",
                }),
                f.jsx("div", {
                  className: "flex align-center gap-1",
                  children: f.jsx(Jt, {
                    type: "datetime-local",
                    className:
                      "cursor-text px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm",
                    value:
                      ((s == null ? void 0 : s.to) ?? "")
                        ? rt(s == null ? void 0 : s.to).format(
                            "YYYY-MM-DDTHH:mm",
                          )
                        : "",
                    onChange: (m) => {
                      const h = rt(m.target.value).toDate();
                      l({
                        to: h,
                        from:
                          s != null && s.from && h < s.from
                            ? h
                            : s == null
                              ? void 0
                              : s.from,
                      });
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
        o &&
          f.jsxs("div", {
            className:
              "text-xs font-semibold text-gray-600 flex justify-end mb-4",
            children: [
              "TZ: ",
              (d = (c = rt) == null ? void 0 : c.tz) == null
                ? void 0
                : d.guess(),
            ],
          }),
        a &&
          f.jsx("div", {
            className: "flex",
            children: f.jsx("button", {
              onClick: () => a(s ?? { from: void 0 }),
              className: "py-2 w-full bg-primary text-white rounded-md",
              children: "Done",
            }),
          }),
      ],
    });
  },
  Yi = ({
    range: e,
    align: t = "start",
    quickOptions: n,
    initialDateRange: r,
    showTimezone: o,
    onSelect: a,
  }) => {
    const [i, s] = u.useState(!1),
      l = (c) => {
        s(c === void 0 ? !i : c);
      };
    return f.jsxs(Nu, {
      open: i,
      onOpenChange: () => l(),
      children: [
        f.jsx(_u, {
          asChild: !0,
          children: f.jsx(fr, {
            className: "px-2",
            variant: e ? "default" : "outline",
            children: f.jsx(ts, {}),
          }),
        }),
        f.jsx(dr, {
          align: t,
          className: "p-3 pt-1 w-fit",
          children: f.jsx(uh, {
            range: e,
            align: t,
            quickOptions: n,
            initialDateRange: r,
            showTimezone: o,
            onSelect: (c) => {
              l(!1), a(c);
            },
          }),
        }),
      ],
    });
  },
  Vi = Yi;
Yi.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "PickDateTimeRange",
  props: {
    range: {
      required: !1,
      tsType: { name: "WrappedDateRange" },
      description: "",
    },
    align: {
      required: !1,
      tsType: {
        name: "union",
        raw: '"center" | "end" | "start"',
        elements: [
          { name: "literal", value: '"center"' },
          { name: "literal", value: '"end"' },
          { name: "literal", value: '"start"' },
        ],
      },
      description: "",
      defaultValue: { value: '"start"', computed: !1 },
    },
    quickOptions: {
      required: !1,
      tsType: {
        name: "Array",
        elements: [
          {
            name: "signature",
            type: "object",
            raw: "{ label: string; range: DateRange }",
            signature: {
              properties: [
                { key: "label", value: { name: "string", required: !0 } },
                {
                  key: "range",
                  value: { name: "WrappedDateRange", required: !0 },
                },
              ],
            },
          },
        ],
        raw: "Array<{ label: string; range: DateRange }>",
      },
      description: "",
    },
    initialDateRange: {
      required: !1,
      tsType: { name: "WrappedDateRange" },
      description: "",
    },
    showTimezone: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
    },
    onSelect: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(range: DateRange) => void",
        signature: {
          arguments: [{ type: { name: "WrappedDateRange" }, name: "range" }],
          return: { name: "void" },
        },
      },
      description: "",
    },
  },
};
const yh = {
    title: "Components/PickDateTimeRange",
    component: Vi,
    tags: ["autodocs"],
    parameters: {
      layout: "centered",
      docs: {
        description: {
          component: "Picker to select or filter a range of dates, with times",
        },
      },
    },
  },
  dh = (e) => {
    const [t, n] = u.useState();
    return f.jsx(Vi, {
      range: t,
      align: e.align,
      quickOptions: e.quickOptions,
      showTimezone: e.showTimezone,
      onSelect: n,
    });
  },
  St = dh.bind({}),
  $t = new Date().valueOf();
St.args = {
  align: "start",
  quickOptions: [
    { label: "Last Week", range: { from: $t - 864e5 * 7, to: $t } },
    { label: "Last 30 Days", range: { from: $t - 864e5 * 30, to: $t } },
  ],
  showTimezone: !1,
};
var wo, xo, Co;
St.parameters = {
  ...St.parameters,
  docs: {
    ...((wo = St.parameters) == null ? void 0 : wo.docs),
    source: {
      originalSource: `args => {
  const [range, setRange] = useState<DateRange>();
  return <PickDateTimeRange range={range} align={args.align} quickOptions={args.quickOptions} showTimezone={args.showTimezone} onSelect={setRange} />;
}`,
      ...((Co = (xo = St.parameters) == null ? void 0 : xo.docs) == null
        ? void 0
        : Co.source),
    },
  },
};
const wh = ["Default"];
export { St as Default, wh as __namedExportsOrder, yh as default };
