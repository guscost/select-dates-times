import {
  a as xi,
  b as Kn,
  c as Fi,
  d as Yn,
  $ as Zn,
  z as eu,
  e as tu,
  O as te,
  s as Wr,
  f as Gr,
  K as ru,
  B as iu,
  P as zr,
  g as $r,
  o as ft,
  H as nu,
} from "./isArray-BUAaHnL1.js";
import { g as pt, c as lt, a as uu } from "./_commonjsHelpers-BosuxZz1.js";
import { d as su } from "./index-DrFu-skq.js";
import { R as st, r as Ge } from "./index-BwDkhjyp.js";
var vi = { exports: {} },
  au = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ou = au,
  lu = ou;
function bi() {}
function Si() {}
Si.resetWarningCache = bi;
var cu = function () {
  function e(i, u, s, a, f, p) {
    if (p !== lu) {
      var D = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((D.name = "Invariant Violation"), D);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Si,
    resetWarningCache: bi,
  };
  return (r.PropTypes = r), r;
};
vi.exports = cu();
var hu = vi.exports;
const Jr = pt(hu),
  fu = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "search",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ];
var pu = fu;
const du = pt(pu);
var _i = {},
  Bi = {};
(function (e) {
  (function t(r) {
    var i, u, s, a, f, p;
    function D(g) {
      var x = {},
        F,
        B;
      for (F in g)
        g.hasOwnProperty(F) &&
          ((B = g[F]),
          typeof B == "object" && B !== null ? (x[F] = D(B)) : (x[F] = B));
      return x;
    }
    function m(g, x) {
      var F, B, R, N;
      for (B = g.length, R = 0; B; )
        (F = B >>> 1),
          (N = R + F),
          x(g[N]) ? (B = F) : ((R = N + 1), (B -= F + 1));
      return R;
    }
    (i = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression",
    }),
      (s = {
        AssignmentExpression: ["left", "right"],
        AssignmentPattern: ["left", "right"],
        ArrayExpression: ["elements"],
        ArrayPattern: ["elements"],
        ArrowFunctionExpression: ["params", "body"],
        AwaitExpression: ["argument"],
        BlockStatement: ["body"],
        BinaryExpression: ["left", "right"],
        BreakStatement: ["label"],
        CallExpression: ["callee", "arguments"],
        CatchClause: ["param", "body"],
        ChainExpression: ["expression"],
        ClassBody: ["body"],
        ClassDeclaration: ["id", "superClass", "body"],
        ClassExpression: ["id", "superClass", "body"],
        ComprehensionBlock: ["left", "right"],
        ComprehensionExpression: ["blocks", "filter", "body"],
        ConditionalExpression: ["test", "consequent", "alternate"],
        ContinueStatement: ["label"],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ["body", "test"],
        EmptyStatement: [],
        ExportAllDeclaration: ["source"],
        ExportDefaultDeclaration: ["declaration"],
        ExportNamedDeclaration: ["declaration", "specifiers", "source"],
        ExportSpecifier: ["exported", "local"],
        ExpressionStatement: ["expression"],
        ForStatement: ["init", "test", "update", "body"],
        ForInStatement: ["left", "right", "body"],
        ForOfStatement: ["left", "right", "body"],
        FunctionDeclaration: ["id", "params", "body"],
        FunctionExpression: ["id", "params", "body"],
        GeneratorExpression: ["blocks", "filter", "body"],
        Identifier: [],
        IfStatement: ["test", "consequent", "alternate"],
        ImportExpression: ["source"],
        ImportDeclaration: ["specifiers", "source"],
        ImportDefaultSpecifier: ["local"],
        ImportNamespaceSpecifier: ["local"],
        ImportSpecifier: ["imported", "local"],
        Literal: [],
        LabeledStatement: ["label", "body"],
        LogicalExpression: ["left", "right"],
        MemberExpression: ["object", "property"],
        MetaProperty: ["meta", "property"],
        MethodDefinition: ["key", "value"],
        ModuleSpecifier: [],
        NewExpression: ["callee", "arguments"],
        ObjectExpression: ["properties"],
        ObjectPattern: ["properties"],
        PrivateIdentifier: [],
        Program: ["body"],
        Property: ["key", "value"],
        PropertyDefinition: ["key", "value"],
        RestElement: ["argument"],
        ReturnStatement: ["argument"],
        SequenceExpression: ["expressions"],
        SpreadElement: ["argument"],
        Super: [],
        SwitchStatement: ["discriminant", "cases"],
        SwitchCase: ["test", "consequent"],
        TaggedTemplateExpression: ["tag", "quasi"],
        TemplateElement: [],
        TemplateLiteral: ["quasis", "expressions"],
        ThisExpression: [],
        ThrowStatement: ["argument"],
        TryStatement: ["block", "handler", "finalizer"],
        UnaryExpression: ["argument"],
        UpdateExpression: ["argument"],
        VariableDeclaration: ["declarations"],
        VariableDeclarator: ["id", "init"],
        WhileStatement: ["test", "body"],
        WithStatement: ["object", "body"],
        YieldExpression: ["argument"],
      }),
      (a = {}),
      (f = {}),
      (p = {}),
      (u = { Break: a, Skip: f, Remove: p });
    function y(g, x) {
      (this.parent = g), (this.key = x);
    }
    (y.prototype.replace = function (x) {
      this.parent[this.key] = x;
    }),
      (y.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function A(g, x, F, B) {
      (this.node = g), (this.path = x), (this.wrap = F), (this.ref = B);
    }
    function C() {}
    (C.prototype.path = function () {
      var x, F, B, R, N, W;
      function q(M, X) {
        if (Array.isArray(X))
          for (B = 0, R = X.length; B < R; ++B) M.push(X[B]);
        else M.push(X);
      }
      if (!this.__current.path) return null;
      for (N = [], x = 2, F = this.__leavelist.length; x < F; ++x)
        (W = this.__leavelist[x]), q(N, W.path);
      return q(N, this.__current.path), N;
    }),
      (C.prototype.type = function () {
        var g = this.current();
        return g.type || this.__current.wrap;
      }),
      (C.prototype.parents = function () {
        var x, F, B;
        for (B = [], x = 1, F = this.__leavelist.length; x < F; ++x)
          B.push(this.__leavelist[x].node);
        return B;
      }),
      (C.prototype.current = function () {
        return this.__current.node;
      }),
      (C.prototype.__execute = function (x, F) {
        var B, R;
        return (
          (R = void 0),
          (B = this.__current),
          (this.__current = F),
          (this.__state = null),
          x &&
            (R = x.call(
              this,
              F.node,
              this.__leavelist[this.__leavelist.length - 1].node,
            )),
          (this.__current = B),
          R
        );
      }),
      (C.prototype.notify = function (x) {
        this.__state = x;
      }),
      (C.prototype.skip = function () {
        this.notify(f);
      }),
      (C.prototype.break = function () {
        this.notify(a);
      }),
      (C.prototype.remove = function () {
        this.notify(p);
      }),
      (C.prototype.__initialize = function (g, x) {
        (this.visitor = x),
          (this.root = g),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          x.fallback === "iteration"
            ? (this.__fallback = Object.keys)
            : typeof x.fallback == "function" && (this.__fallback = x.fallback),
          (this.__keys = s),
          x.keys &&
            (this.__keys = Object.assign(Object.create(this.__keys), x.keys));
      });
    function v(g) {
      return g == null ? !1 : typeof g == "object" && typeof g.type == "string";
    }
    function E(g, x) {
      return (
        (g === i.ObjectExpression || g === i.ObjectPattern) &&
        x === "properties"
      );
    }
    function b(g, x) {
      for (var F = g.length - 1; F >= 0; --F) if (g[F].node === x) return !0;
      return !1;
    }
    (C.prototype.traverse = function (x, F) {
      var B, R, N, W, q, M, X, ne, oe, ie, Q, Ce;
      for (
        this.__initialize(x, F),
          Ce = {},
          B = this.__worklist,
          R = this.__leavelist,
          B.push(new A(x, null, null, null)),
          R.push(new A(null, null, null, null));
        B.length;

      ) {
        if (((N = B.pop()), N === Ce)) {
          if (
            ((N = R.pop()),
            (M = this.__execute(F.leave, N)),
            this.__state === a || M === a)
          )
            return;
          continue;
        }
        if (N.node) {
          if (((M = this.__execute(F.enter, N)), this.__state === a || M === a))
            return;
          if ((B.push(Ce), R.push(N), this.__state === f || M === f)) continue;
          if (
            ((W = N.node), (q = W.type || N.wrap), (ie = this.__keys[q]), !ie)
          )
            if (this.__fallback) ie = this.__fallback(W);
            else throw new Error("Unknown node type " + q + ".");
          for (ne = ie.length; (ne -= 1) >= 0; )
            if (((X = ie[ne]), (Q = W[X]), !!Q)) {
              if (Array.isArray(Q)) {
                for (oe = Q.length; (oe -= 1) >= 0; )
                  if (Q[oe] && !b(R, Q[oe])) {
                    if (E(q, ie[ne]))
                      N = new A(Q[oe], [X, oe], "Property", null);
                    else if (v(Q[oe])) N = new A(Q[oe], [X, oe], null, null);
                    else continue;
                    B.push(N);
                  }
              } else if (v(Q)) {
                if (b(R, Q)) continue;
                B.push(new A(Q, X, null, null));
              }
            }
        }
      }
    }),
      (C.prototype.replace = function (x, F) {
        var B, R, N, W, q, M, X, ne, oe, ie, Q, Ce, Be;
        function Je(O) {
          var Ve, Ct, Le, ee;
          if (O.ref.remove()) {
            for (Ct = O.ref.key, ee = O.ref.parent, Ve = B.length; Ve--; )
              if (((Le = B[Ve]), Le.ref && Le.ref.parent === ee)) {
                if (Le.ref.key < Ct) break;
                --Le.ref.key;
              }
          }
        }
        for (
          this.__initialize(x, F),
            Q = {},
            B = this.__worklist,
            R = this.__leavelist,
            Ce = { root: x },
            M = new A(x, null, null, new y(Ce, "root")),
            B.push(M),
            R.push(M);
          B.length;

        ) {
          if (((M = B.pop()), M === Q)) {
            if (
              ((M = R.pop()),
              (q = this.__execute(F.leave, M)),
              q !== void 0 && q !== a && q !== f && q !== p && M.ref.replace(q),
              (this.__state === p || q === p) && Je(M),
              this.__state === a || q === a)
            )
              return Ce.root;
            continue;
          }
          if (
            ((q = this.__execute(F.enter, M)),
            q !== void 0 &&
              q !== a &&
              q !== f &&
              q !== p &&
              (M.ref.replace(q), (M.node = q)),
            (this.__state === p || q === p) && (Je(M), (M.node = null)),
            this.__state === a || q === a)
          )
            return Ce.root;
          if (
            ((N = M.node),
            !!N && (B.push(Q), R.push(M), !(this.__state === f || q === f)))
          ) {
            if (((W = N.type || M.wrap), (oe = this.__keys[W]), !oe))
              if (this.__fallback) oe = this.__fallback(N);
              else throw new Error("Unknown node type " + W + ".");
            for (X = oe.length; (X -= 1) >= 0; )
              if (((Be = oe[X]), (ie = N[Be]), !!ie))
                if (Array.isArray(ie)) {
                  for (ne = ie.length; (ne -= 1) >= 0; )
                    if (ie[ne]) {
                      if (E(W, oe[X]))
                        M = new A(ie[ne], [Be, ne], "Property", new y(ie, ne));
                      else if (v(ie[ne]))
                        M = new A(ie[ne], [Be, ne], null, new y(ie, ne));
                      else continue;
                      B.push(M);
                    }
                } else v(ie) && B.push(new A(ie, Be, null, new y(N, Be)));
          }
        }
        return Ce.root;
      });
    function T(g, x) {
      var F = new C();
      return F.traverse(g, x);
    }
    function I(g, x) {
      var F = new C();
      return F.replace(g, x);
    }
    function V(g, x) {
      var F;
      return (
        (F = m(x, function (R) {
          return R.range[0] > g.range[0];
        })),
        (g.extendedRange = [g.range[0], g.range[1]]),
        F !== x.length && (g.extendedRange[1] = x[F].range[0]),
        (F -= 1),
        F >= 0 && (g.extendedRange[0] = x[F].range[1]),
        g
      );
    }
    function S(g, x, F) {
      var B = [],
        R,
        N,
        W,
        q;
      if (!g.range) throw new Error("attachComments needs range information");
      if (!F.length) {
        if (x.length) {
          for (W = 0, N = x.length; W < N; W += 1)
            (R = D(x[W])), (R.extendedRange = [0, g.range[0]]), B.push(R);
          g.leadingComments = B;
        }
        return g;
      }
      for (W = 0, N = x.length; W < N; W += 1) B.push(V(D(x[W]), F));
      return (
        (q = 0),
        T(g, {
          enter: function (M) {
            for (
              var X;
              q < B.length && ((X = B[q]), !(X.extendedRange[1] > M.range[0]));

            )
              X.extendedRange[1] === M.range[0]
                ? (M.leadingComments || (M.leadingComments = []),
                  M.leadingComments.push(X),
                  B.splice(q, 1))
                : (q += 1);
            if (q === B.length) return u.Break;
            if (B[q].extendedRange[0] > M.range[1]) return u.Skip;
          },
        }),
        (q = 0),
        T(g, {
          leave: function (M) {
            for (
              var X;
              q < B.length && ((X = B[q]), !(M.range[1] < X.extendedRange[0]));

            )
              M.range[1] === X.extendedRange[0]
                ? (M.trailingComments || (M.trailingComments = []),
                  M.trailingComments.push(X),
                  B.splice(q, 1))
                : (q += 1);
            if (q === B.length) return u.Break;
            if (B[q].extendedRange[0] > M.range[1]) return u.Skip;
          },
        }),
        g
      );
    }
    return (
      (r.Syntax = i),
      (r.traverse = T),
      (r.replace = I),
      (r.attachComments = S),
      (r.VisitorKeys = s),
      (r.VisitorOption = u),
      (r.Controller = C),
      (r.cloneEnvironment = function () {
        return t({});
      }),
      r
    );
  })(e);
})(Bi);
var St = {},
  wi = { exports: {} };
(function () {
  function e(a) {
    if (a == null) return !1;
    switch (a.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function t(a) {
    if (a == null) return !1;
    switch (a.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function r(a) {
    if (a == null) return !1;
    switch (a.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function i(a) {
    return r(a) || (a != null && a.type === "FunctionDeclaration");
  }
  function u(a) {
    switch (a.type) {
      case "IfStatement":
        return a.alternate != null ? a.alternate : a.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return a.body;
    }
    return null;
  }
  function s(a) {
    var f;
    if (a.type !== "IfStatement" || a.alternate == null) return !1;
    f = a.consequent;
    do {
      if (f.type === "IfStatement" && f.alternate == null) return !0;
      f = u(f);
    } while (f);
    return !1;
  }
  wi.exports = {
    isExpression: e,
    isStatement: r,
    isIterationStatement: t,
    isSourceElement: i,
    isProblematicIfStatement: s,
    trailingStatement: u,
  };
})();
var mu = wi.exports,
  ki = { exports: {} };
(function () {
  var e, t, r, i, u, s;
  (t = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (e = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function a(b) {
    return 48 <= b && b <= 57;
  }
  function f(b) {
    return (
      (48 <= b && b <= 57) || (97 <= b && b <= 102) || (65 <= b && b <= 70)
    );
  }
  function p(b) {
    return b >= 48 && b <= 55;
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279,
  ];
  function D(b) {
    return (
      b === 32 ||
      b === 9 ||
      b === 11 ||
      b === 12 ||
      b === 160 ||
      (b >= 5760 && r.indexOf(b) >= 0)
    );
  }
  function m(b) {
    return b === 10 || b === 13 || b === 8232 || b === 8233;
  }
  function y(b) {
    if (b <= 65535) return String.fromCharCode(b);
    var T = String.fromCharCode(Math.floor((b - 65536) / 1024) + 55296),
      I = String.fromCharCode(((b - 65536) % 1024) + 56320);
    return T + I;
  }
  for (i = new Array(128), s = 0; s < 128; ++s)
    i[s] =
      (s >= 97 && s <= 122) || (s >= 65 && s <= 90) || s === 36 || s === 95;
  for (u = new Array(128), s = 0; s < 128; ++s)
    u[s] =
      (s >= 97 && s <= 122) ||
      (s >= 65 && s <= 90) ||
      (s >= 48 && s <= 57) ||
      s === 36 ||
      s === 95;
  function A(b) {
    return b < 128 ? i[b] : t.NonAsciiIdentifierStart.test(y(b));
  }
  function C(b) {
    return b < 128 ? u[b] : t.NonAsciiIdentifierPart.test(y(b));
  }
  function v(b) {
    return b < 128 ? i[b] : e.NonAsciiIdentifierStart.test(y(b));
  }
  function E(b) {
    return b < 128 ? u[b] : e.NonAsciiIdentifierPart.test(y(b));
  }
  ki.exports = {
    isDecimalDigit: a,
    isHexDigit: f,
    isOctalDigit: p,
    isWhiteSpace: D,
    isLineTerminator: m,
    isIdentifierStartES5: A,
    isIdentifierPartES5: C,
    isIdentifierStartES6: v,
    isIdentifierPartES6: E,
  };
})();
var Ii = ki.exports,
  Ti = { exports: {} };
(function () {
  var e = Ii;
  function t(A) {
    switch (A) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function r(A, C) {
    return !C && A === "yield" ? !1 : i(A, C);
  }
  function i(A, C) {
    if (C && t(A)) return !0;
    switch (A.length) {
      case 2:
        return A === "if" || A === "in" || A === "do";
      case 3:
        return A === "var" || A === "for" || A === "new" || A === "try";
      case 4:
        return (
          A === "this" ||
          A === "else" ||
          A === "case" ||
          A === "void" ||
          A === "with" ||
          A === "enum"
        );
      case 5:
        return (
          A === "while" ||
          A === "break" ||
          A === "catch" ||
          A === "throw" ||
          A === "const" ||
          A === "yield" ||
          A === "class" ||
          A === "super"
        );
      case 6:
        return (
          A === "return" ||
          A === "typeof" ||
          A === "delete" ||
          A === "switch" ||
          A === "export" ||
          A === "import"
        );
      case 7:
        return A === "default" || A === "finally" || A === "extends";
      case 8:
        return A === "function" || A === "continue" || A === "debugger";
      case 10:
        return A === "instanceof";
      default:
        return !1;
    }
  }
  function u(A, C) {
    return A === "null" || A === "true" || A === "false" || r(A, C);
  }
  function s(A, C) {
    return A === "null" || A === "true" || A === "false" || i(A, C);
  }
  function a(A) {
    return A === "eval" || A === "arguments";
  }
  function f(A) {
    var C, v, E;
    if (A.length === 0 || ((E = A.charCodeAt(0)), !e.isIdentifierStartES5(E)))
      return !1;
    for (C = 1, v = A.length; C < v; ++C)
      if (((E = A.charCodeAt(C)), !e.isIdentifierPartES5(E))) return !1;
    return !0;
  }
  function p(A, C) {
    return (A - 55296) * 1024 + (C - 56320) + 65536;
  }
  function D(A) {
    var C, v, E, b, T;
    if (A.length === 0) return !1;
    for (T = e.isIdentifierStartES6, C = 0, v = A.length; C < v; ++C) {
      if (((E = A.charCodeAt(C)), 55296 <= E && E <= 56319)) {
        if (
          (++C, C >= v || ((b = A.charCodeAt(C)), !(56320 <= b && b <= 57343)))
        )
          return !1;
        E = p(E, b);
      }
      if (!T(E)) return !1;
      T = e.isIdentifierPartES6;
    }
    return !0;
  }
  function m(A, C) {
    return f(A) && !u(A, C);
  }
  function y(A, C) {
    return D(A) && !s(A, C);
  }
  Ti.exports = {
    isKeywordES5: r,
    isKeywordES6: i,
    isReservedWordES5: u,
    isReservedWordES6: s,
    isRestrictedWord: a,
    isIdentifierNameES5: f,
    isIdentifierNameES6: D,
    isIdentifierES5: m,
    isIdentifierES6: y,
  };
})();
var gu = Ti.exports;
(function () {
  (St.ast = mu), (St.code = Ii), (St.keyword = gu);
})();
var it = {},
  Zt = {},
  Ft = {},
  vt = {},
  Hr;
function Du() {
  if (Hr) return vt;
  Hr = 1;
  var e =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
      "",
    );
  return (
    (vt.encode = function (t) {
      if (0 <= t && t < e.length) return e[t];
      throw new TypeError("Must be between 0 and 63: " + t);
    }),
    (vt.decode = function (t) {
      var r = 65,
        i = 90,
        u = 97,
        s = 122,
        a = 48,
        f = 57,
        p = 43,
        D = 47,
        m = 26,
        y = 52;
      return r <= t && t <= i
        ? t - r
        : u <= t && t <= s
          ? t - u + m
          : a <= t && t <= f
            ? t - a + y
            : t == p
              ? 62
              : t == D
                ? 63
                : -1;
    }),
    vt
  );
}
var Xr;
function Pi() {
  if (Xr) return Ft;
  Xr = 1;
  var e = Du(),
    t = 5,
    r = 1 << t,
    i = r - 1,
    u = r;
  function s(f) {
    return f < 0 ? (-f << 1) + 1 : (f << 1) + 0;
  }
  function a(f) {
    var p = (f & 1) === 1,
      D = f >> 1;
    return p ? -D : D;
  }
  return (
    (Ft.encode = function (p) {
      var D = "",
        m,
        y = s(p);
      do (m = y & i), (y >>>= t), y > 0 && (m |= u), (D += e.encode(m));
      while (y > 0);
      return D;
    }),
    (Ft.decode = function (p, D, m) {
      var y = p.length,
        A = 0,
        C = 0,
        v,
        E;
      do {
        if (D >= y)
          throw new Error("Expected more digits in base 64 VLQ value.");
        if (((E = e.decode(p.charCodeAt(D++))), E === -1))
          throw new Error("Invalid base64 digit: " + p.charAt(D - 1));
        (v = !!(E & u)), (E &= i), (A = A + (E << C)), (C += t);
      } while (v);
      (m.value = a(A)), (m.rest = D);
    }),
    Ft
  );
}
var er = {},
  Qr;
function dt() {
  return (
    Qr ||
      ((Qr = 1),
      (function (e) {
        function t(S, g, x) {
          if (g in S) return S[g];
          if (arguments.length === 3) return x;
          throw new Error('"' + g + '" is a required argument.');
        }
        e.getArg = t;
        var r =
            /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
          i = /^data:.+\,.+$/;
        function u(S) {
          var g = S.match(r);
          return g
            ? { scheme: g[1], auth: g[2], host: g[3], port: g[4], path: g[5] }
            : null;
        }
        e.urlParse = u;
        function s(S) {
          var g = "";
          return (
            S.scheme && (g += S.scheme + ":"),
            (g += "//"),
            S.auth && (g += S.auth + "@"),
            S.host && (g += S.host),
            S.port && (g += ":" + S.port),
            S.path && (g += S.path),
            g
          );
        }
        e.urlGenerate = s;
        function a(S) {
          var g = S,
            x = u(S);
          if (x) {
            if (!x.path) return S;
            g = x.path;
          }
          for (
            var F = e.isAbsolute(g),
              B = g.split(/\/+/),
              R,
              N = 0,
              W = B.length - 1;
            W >= 0;
            W--
          )
            (R = B[W]),
              R === "."
                ? B.splice(W, 1)
                : R === ".."
                  ? N++
                  : N > 0 &&
                    (R === ""
                      ? (B.splice(W + 1, N), (N = 0))
                      : (B.splice(W, 2), N--));
          return (
            (g = B.join("/")),
            g === "" && (g = F ? "/" : "."),
            x ? ((x.path = g), s(x)) : g
          );
        }
        e.normalize = a;
        function f(S, g) {
          S === "" && (S = "."), g === "" && (g = ".");
          var x = u(g),
            F = u(S);
          if ((F && (S = F.path || "/"), x && !x.scheme))
            return F && (x.scheme = F.scheme), s(x);
          if (x || g.match(i)) return g;
          if (F && !F.host && !F.path) return (F.host = g), s(F);
          var B = g.charAt(0) === "/" ? g : a(S.replace(/\/+$/, "") + "/" + g);
          return F ? ((F.path = B), s(F)) : B;
        }
        (e.join = f),
          (e.isAbsolute = function (S) {
            return S.charAt(0) === "/" || r.test(S);
          });
        function p(S, g) {
          S === "" && (S = "."), (S = S.replace(/\/$/, ""));
          for (var x = 0; g.indexOf(S + "/") !== 0; ) {
            var F = S.lastIndexOf("/");
            if (F < 0 || ((S = S.slice(0, F)), S.match(/^([^\/]+:\/)?\/*$/)))
              return g;
            ++x;
          }
          return Array(x + 1).join("../") + g.substr(S.length + 1);
        }
        e.relative = p;
        var D = (function () {
          var S = Object.create(null);
          return !("__proto__" in S);
        })();
        function m(S) {
          return S;
        }
        function y(S) {
          return C(S) ? "$" + S : S;
        }
        e.toSetString = D ? m : y;
        function A(S) {
          return C(S) ? S.slice(1) : S;
        }
        e.fromSetString = D ? m : A;
        function C(S) {
          if (!S) return !1;
          var g = S.length;
          if (
            g < 9 ||
            S.charCodeAt(g - 1) !== 95 ||
            S.charCodeAt(g - 2) !== 95 ||
            S.charCodeAt(g - 3) !== 111 ||
            S.charCodeAt(g - 4) !== 116 ||
            S.charCodeAt(g - 5) !== 111 ||
            S.charCodeAt(g - 6) !== 114 ||
            S.charCodeAt(g - 7) !== 112 ||
            S.charCodeAt(g - 8) !== 95 ||
            S.charCodeAt(g - 9) !== 95
          )
            return !1;
          for (var x = g - 10; x >= 0; x--)
            if (S.charCodeAt(x) !== 36) return !1;
          return !0;
        }
        function v(S, g, x) {
          var F = b(S.source, g.source);
          return F !== 0 ||
            ((F = S.originalLine - g.originalLine), F !== 0) ||
            ((F = S.originalColumn - g.originalColumn), F !== 0 || x) ||
            ((F = S.generatedColumn - g.generatedColumn), F !== 0) ||
            ((F = S.generatedLine - g.generatedLine), F !== 0)
            ? F
            : b(S.name, g.name);
        }
        e.compareByOriginalPositions = v;
        function E(S, g, x) {
          var F = S.generatedLine - g.generatedLine;
          return F !== 0 ||
            ((F = S.generatedColumn - g.generatedColumn), F !== 0 || x) ||
            ((F = b(S.source, g.source)), F !== 0) ||
            ((F = S.originalLine - g.originalLine), F !== 0) ||
            ((F = S.originalColumn - g.originalColumn), F !== 0)
            ? F
            : b(S.name, g.name);
        }
        e.compareByGeneratedPositionsDeflated = E;
        function b(S, g) {
          return S === g
            ? 0
            : S === null
              ? 1
              : g === null
                ? -1
                : S > g
                  ? 1
                  : -1;
        }
        function T(S, g) {
          var x = S.generatedLine - g.generatedLine;
          return x !== 0 ||
            ((x = S.generatedColumn - g.generatedColumn), x !== 0) ||
            ((x = b(S.source, g.source)), x !== 0) ||
            ((x = S.originalLine - g.originalLine), x !== 0) ||
            ((x = S.originalColumn - g.originalColumn), x !== 0)
            ? x
            : b(S.name, g.name);
        }
        e.compareByGeneratedPositionsInflated = T;
        function I(S) {
          return JSON.parse(S.replace(/^\)]}'[^\n]*\n/, ""));
        }
        e.parseSourceMapInput = I;
        function V(S, g, x) {
          if (
            ((g = g || ""),
            S &&
              (S[S.length - 1] !== "/" && g[0] !== "/" && (S += "/"),
              (g = S + g)),
            x)
          ) {
            var F = u(x);
            if (!F) throw new Error("sourceMapURL could not be parsed");
            if (F.path) {
              var B = F.path.lastIndexOf("/");
              B >= 0 && (F.path = F.path.substring(0, B + 1));
            }
            g = f(s(F), g);
          }
          return a(g);
        }
        e.computeSourceURL = V;
      })(er)),
    er
  );
}
var tr = {},
  Kr;
function Ni() {
  if (Kr) return tr;
  Kr = 1;
  var e = dt(),
    t = Object.prototype.hasOwnProperty,
    r = typeof Map < "u";
  function i() {
    (this._array = []), (this._set = r ? new Map() : Object.create(null));
  }
  return (
    (i.fromArray = function (s, a) {
      for (var f = new i(), p = 0, D = s.length; p < D; p++) f.add(s[p], a);
      return f;
    }),
    (i.prototype.size = function () {
      return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    }),
    (i.prototype.add = function (s, a) {
      var f = r ? s : e.toSetString(s),
        p = r ? this.has(s) : t.call(this._set, f),
        D = this._array.length;
      (!p || a) && this._array.push(s),
        p || (r ? this._set.set(s, D) : (this._set[f] = D));
    }),
    (i.prototype.has = function (s) {
      if (r) return this._set.has(s);
      var a = e.toSetString(s);
      return t.call(this._set, a);
    }),
    (i.prototype.indexOf = function (s) {
      if (r) {
        var a = this._set.get(s);
        if (a >= 0) return a;
      } else {
        var f = e.toSetString(s);
        if (t.call(this._set, f)) return this._set[f];
      }
      throw new Error('"' + s + '" is not in the set.');
    }),
    (i.prototype.at = function (s) {
      if (s >= 0 && s < this._array.length) return this._array[s];
      throw new Error("No element indexed by " + s);
    }),
    (i.prototype.toArray = function () {
      return this._array.slice();
    }),
    (tr.ArraySet = i),
    tr
  );
}
var rr = {},
  Yr;
function Au() {
  if (Yr) return rr;
  Yr = 1;
  var e = dt();
  function t(i, u) {
    var s = i.generatedLine,
      a = u.generatedLine,
      f = i.generatedColumn,
      p = u.generatedColumn;
    return (
      a > s ||
      (a == s && p >= f) ||
      e.compareByGeneratedPositionsInflated(i, u) <= 0
    );
  }
  function r() {
    (this._array = []),
      (this._sorted = !0),
      (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  return (
    (r.prototype.unsortedForEach = function (u, s) {
      this._array.forEach(u, s);
    }),
    (r.prototype.add = function (u) {
      t(this._last, u)
        ? ((this._last = u), this._array.push(u))
        : ((this._sorted = !1), this._array.push(u));
    }),
    (r.prototype.toArray = function () {
      return (
        this._sorted ||
          (this._array.sort(e.compareByGeneratedPositionsInflated),
          (this._sorted = !0)),
        this._array
      );
    }),
    (rr.MappingList = r),
    rr
  );
}
var Zr;
function Li() {
  if (Zr) return Zt;
  Zr = 1;
  var e = Pi(),
    t = dt(),
    r = Ni().ArraySet,
    i = Au().MappingList;
  function u(s) {
    s || (s = {}),
      (this._file = t.getArg(s, "file", null)),
      (this._sourceRoot = t.getArg(s, "sourceRoot", null)),
      (this._skipValidation = t.getArg(s, "skipValidation", !1)),
      (this._sources = new r()),
      (this._names = new r()),
      (this._mappings = new i()),
      (this._sourcesContents = null);
  }
  return (
    (u.prototype._version = 3),
    (u.fromSourceMap = function (a) {
      var f = a.sourceRoot,
        p = new u({ file: a.file, sourceRoot: f });
      return (
        a.eachMapping(function (D) {
          var m = {
            generated: { line: D.generatedLine, column: D.generatedColumn },
          };
          D.source != null &&
            ((m.source = D.source),
            f != null && (m.source = t.relative(f, m.source)),
            (m.original = { line: D.originalLine, column: D.originalColumn }),
            D.name != null && (m.name = D.name)),
            p.addMapping(m);
        }),
        a.sources.forEach(function (D) {
          var m = D;
          f !== null && (m = t.relative(f, D)),
            p._sources.has(m) || p._sources.add(m);
          var y = a.sourceContentFor(D);
          y != null && p.setSourceContent(D, y);
        }),
        p
      );
    }),
    (u.prototype.addMapping = function (a) {
      var f = t.getArg(a, "generated"),
        p = t.getArg(a, "original", null),
        D = t.getArg(a, "source", null),
        m = t.getArg(a, "name", null);
      this._skipValidation || this._validateMapping(f, p, D, m),
        D != null &&
          ((D = String(D)), this._sources.has(D) || this._sources.add(D)),
        m != null &&
          ((m = String(m)), this._names.has(m) || this._names.add(m)),
        this._mappings.add({
          generatedLine: f.line,
          generatedColumn: f.column,
          originalLine: p != null && p.line,
          originalColumn: p != null && p.column,
          source: D,
          name: m,
        });
    }),
    (u.prototype.setSourceContent = function (a, f) {
      var p = a;
      this._sourceRoot != null && (p = t.relative(this._sourceRoot, p)),
        f != null
          ? (this._sourcesContents ||
              (this._sourcesContents = Object.create(null)),
            (this._sourcesContents[t.toSetString(p)] = f))
          : this._sourcesContents &&
            (delete this._sourcesContents[t.toSetString(p)],
            Object.keys(this._sourcesContents).length === 0 &&
              (this._sourcesContents = null));
    }),
    (u.prototype.applySourceMap = function (a, f, p) {
      var D = f;
      if (f == null) {
        if (a.file == null)
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`,
          );
        D = a.file;
      }
      var m = this._sourceRoot;
      m != null && (D = t.relative(m, D));
      var y = new r(),
        A = new r();
      this._mappings.unsortedForEach(function (C) {
        if (C.source === D && C.originalLine != null) {
          var v = a.originalPositionFor({
            line: C.originalLine,
            column: C.originalColumn,
          });
          v.source != null &&
            ((C.source = v.source),
            p != null && (C.source = t.join(p, C.source)),
            m != null && (C.source = t.relative(m, C.source)),
            (C.originalLine = v.line),
            (C.originalColumn = v.column),
            v.name != null && (C.name = v.name));
        }
        var E = C.source;
        E != null && !y.has(E) && y.add(E);
        var b = C.name;
        b != null && !A.has(b) && A.add(b);
      }, this),
        (this._sources = y),
        (this._names = A),
        a.sources.forEach(function (C) {
          var v = a.sourceContentFor(C);
          v != null &&
            (p != null && (C = t.join(p, C)),
            m != null && (C = t.relative(m, C)),
            this.setSourceContent(C, v));
        }, this);
    }),
    (u.prototype._validateMapping = function (a, f, p, D) {
      if (f && typeof f.line != "number" && typeof f.column != "number")
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.",
        );
      if (
        !(
          a &&
          "line" in a &&
          "column" in a &&
          a.line > 0 &&
          a.column >= 0 &&
          !f &&
          !p &&
          !D
        )
      ) {
        if (
          a &&
          "line" in a &&
          "column" in a &&
          f &&
          "line" in f &&
          "column" in f &&
          a.line > 0 &&
          a.column >= 0 &&
          f.line > 0 &&
          f.column >= 0 &&
          p
        )
          return;
        throw new Error(
          "Invalid mapping: " +
            JSON.stringify({ generated: a, source: p, original: f, name: D }),
        );
      }
    }),
    (u.prototype._serializeMappings = function () {
      for (
        var a = 0,
          f = 1,
          p = 0,
          D = 0,
          m = 0,
          y = 0,
          A = "",
          C,
          v,
          E,
          b,
          T = this._mappings.toArray(),
          I = 0,
          V = T.length;
        I < V;
        I++
      ) {
        if (((v = T[I]), (C = ""), v.generatedLine !== f))
          for (a = 0; v.generatedLine !== f; ) (C += ";"), f++;
        else if (I > 0) {
          if (!t.compareByGeneratedPositionsInflated(v, T[I - 1])) continue;
          C += ",";
        }
        (C += e.encode(v.generatedColumn - a)),
          (a = v.generatedColumn),
          v.source != null &&
            ((b = this._sources.indexOf(v.source)),
            (C += e.encode(b - y)),
            (y = b),
            (C += e.encode(v.originalLine - 1 - D)),
            (D = v.originalLine - 1),
            (C += e.encode(v.originalColumn - p)),
            (p = v.originalColumn),
            v.name != null &&
              ((E = this._names.indexOf(v.name)),
              (C += e.encode(E - m)),
              (m = E))),
          (A += C);
      }
      return A;
    }),
    (u.prototype._generateSourcesContent = function (a, f) {
      return a.map(function (p) {
        if (!this._sourcesContents) return null;
        f != null && (p = t.relative(f, p));
        var D = t.toSetString(p);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, D)
          ? this._sourcesContents[D]
          : null;
      }, this);
    }),
    (u.prototype.toJSON = function () {
      var a = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings(),
      };
      return (
        this._file != null && (a.file = this._file),
        this._sourceRoot != null && (a.sourceRoot = this._sourceRoot),
        this._sourcesContents &&
          (a.sourcesContent = this._generateSourcesContent(
            a.sources,
            a.sourceRoot,
          )),
        a
      );
    }),
    (u.prototype.toString = function () {
      return JSON.stringify(this.toJSON());
    }),
    (Zt.SourceMapGenerator = u),
    Zt
  );
}
var nt = {},
  ir = {},
  ei;
function Cu() {
  return (
    ei ||
      ((ei = 1),
      (function (e) {
        (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
        function t(r, i, u, s, a, f) {
          var p = Math.floor((i - r) / 2) + r,
            D = a(u, s[p], !0);
          return D === 0
            ? p
            : D > 0
              ? i - p > 1
                ? t(p, i, u, s, a, f)
                : f == e.LEAST_UPPER_BOUND
                  ? i < s.length
                    ? i
                    : -1
                  : p
              : p - r > 1
                ? t(r, p, u, s, a, f)
                : f == e.LEAST_UPPER_BOUND
                  ? p
                  : r < 0
                    ? -1
                    : r;
        }
        e.search = function (i, u, s, a) {
          if (u.length === 0) return -1;
          var f = t(-1, u.length, i, u, s, a || e.GREATEST_LOWER_BOUND);
          if (f < 0) return -1;
          for (; f - 1 >= 0 && s(u[f], u[f - 1], !0) === 0; ) --f;
          return f;
        };
      })(ir)),
    ir
  );
}
var nr = {},
  ti;
function Eu() {
  if (ti) return nr;
  ti = 1;
  function e(i, u, s) {
    var a = i[u];
    (i[u] = i[s]), (i[s] = a);
  }
  function t(i, u) {
    return Math.round(i + Math.random() * (u - i));
  }
  function r(i, u, s, a) {
    if (s < a) {
      var f = t(s, a),
        p = s - 1;
      e(i, f, a);
      for (var D = i[a], m = s; m < a; m++)
        u(i[m], D) <= 0 && ((p += 1), e(i, p, m));
      e(i, p + 1, m);
      var y = p + 1;
      r(i, u, s, y - 1), r(i, u, y + 1, a);
    }
  }
  return (
    (nr.quickSort = function (i, u) {
      r(i, u, 0, i.length - 1);
    }),
    nr
  );
}
var ri;
function yu() {
  if (ri) return nt;
  ri = 1;
  var e = dt(),
    t = Cu(),
    r = Ni().ArraySet,
    i = Pi(),
    u = Eu().quickSort;
  function s(D, m) {
    var y = D;
    return (
      typeof D == "string" && (y = e.parseSourceMapInput(D)),
      y.sections != null ? new p(y, m) : new a(y, m)
    );
  }
  (s.fromSourceMap = function (D, m) {
    return a.fromSourceMap(D, m);
  }),
    (s.prototype._version = 3),
    (s.prototype.__generatedMappings = null),
    Object.defineProperty(s.prototype, "_generatedMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__generatedMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__generatedMappings
        );
      },
    }),
    (s.prototype.__originalMappings = null),
    Object.defineProperty(s.prototype, "_originalMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__originalMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__originalMappings
        );
      },
    }),
    (s.prototype._charIsMappingSeparator = function (m, y) {
      var A = m.charAt(y);
      return A === ";" || A === ",";
    }),
    (s.prototype._parseMappings = function (m, y) {
      throw new Error("Subclasses must implement _parseMappings");
    }),
    (s.GENERATED_ORDER = 1),
    (s.ORIGINAL_ORDER = 2),
    (s.GREATEST_LOWER_BOUND = 1),
    (s.LEAST_UPPER_BOUND = 2),
    (s.prototype.eachMapping = function (m, y, A) {
      var C = y || null,
        v = A || s.GENERATED_ORDER,
        E;
      switch (v) {
        case s.GENERATED_ORDER:
          E = this._generatedMappings;
          break;
        case s.ORIGINAL_ORDER:
          E = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var b = this.sourceRoot;
      E.map(function (T) {
        var I = T.source === null ? null : this._sources.at(T.source);
        return (
          (I = e.computeSourceURL(b, I, this._sourceMapURL)),
          {
            source: I,
            generatedLine: T.generatedLine,
            generatedColumn: T.generatedColumn,
            originalLine: T.originalLine,
            originalColumn: T.originalColumn,
            name: T.name === null ? null : this._names.at(T.name),
          }
        );
      }, this).forEach(m, C);
    }),
    (s.prototype.allGeneratedPositionsFor = function (m) {
      var y = e.getArg(m, "line"),
        A = {
          source: e.getArg(m, "source"),
          originalLine: y,
          originalColumn: e.getArg(m, "column", 0),
        };
      if (((A.source = this._findSourceIndex(A.source)), A.source < 0))
        return [];
      var C = [],
        v = this._findMapping(
          A,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          t.LEAST_UPPER_BOUND,
        );
      if (v >= 0) {
        var E = this._originalMappings[v];
        if (m.column === void 0)
          for (var b = E.originalLine; E && E.originalLine === b; )
            C.push({
              line: e.getArg(E, "generatedLine", null),
              column: e.getArg(E, "generatedColumn", null),
              lastColumn: e.getArg(E, "lastGeneratedColumn", null),
            }),
              (E = this._originalMappings[++v]);
        else
          for (
            var T = E.originalColumn;
            E && E.originalLine === y && E.originalColumn == T;

          )
            C.push({
              line: e.getArg(E, "generatedLine", null),
              column: e.getArg(E, "generatedColumn", null),
              lastColumn: e.getArg(E, "lastGeneratedColumn", null),
            }),
              (E = this._originalMappings[++v]);
      }
      return C;
    }),
    (nt.SourceMapConsumer = s);
  function a(D, m) {
    var y = D;
    typeof D == "string" && (y = e.parseSourceMapInput(D));
    var A = e.getArg(y, "version"),
      C = e.getArg(y, "sources"),
      v = e.getArg(y, "names", []),
      E = e.getArg(y, "sourceRoot", null),
      b = e.getArg(y, "sourcesContent", null),
      T = e.getArg(y, "mappings"),
      I = e.getArg(y, "file", null);
    if (A != this._version) throw new Error("Unsupported version: " + A);
    E && (E = e.normalize(E)),
      (C = C.map(String)
        .map(e.normalize)
        .map(function (V) {
          return E && e.isAbsolute(E) && e.isAbsolute(V) ? e.relative(E, V) : V;
        })),
      (this._names = r.fromArray(v.map(String), !0)),
      (this._sources = r.fromArray(C, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (V) {
        return e.computeSourceURL(E, V, m);
      })),
      (this.sourceRoot = E),
      (this.sourcesContent = b),
      (this._mappings = T),
      (this._sourceMapURL = m),
      (this.file = I);
  }
  (a.prototype = Object.create(s.prototype)),
    (a.prototype.consumer = s),
    (a.prototype._findSourceIndex = function (D) {
      var m = D;
      if (
        (this.sourceRoot != null && (m = e.relative(this.sourceRoot, m)),
        this._sources.has(m))
      )
        return this._sources.indexOf(m);
      var y;
      for (y = 0; y < this._absoluteSources.length; ++y)
        if (this._absoluteSources[y] == D) return y;
      return -1;
    }),
    (a.fromSourceMap = function (m, y) {
      var A = Object.create(a.prototype),
        C = (A._names = r.fromArray(m._names.toArray(), !0)),
        v = (A._sources = r.fromArray(m._sources.toArray(), !0));
      (A.sourceRoot = m._sourceRoot),
        (A.sourcesContent = m._generateSourcesContent(
          A._sources.toArray(),
          A.sourceRoot,
        )),
        (A.file = m._file),
        (A._sourceMapURL = y),
        (A._absoluteSources = A._sources.toArray().map(function (x) {
          return e.computeSourceURL(A.sourceRoot, x, y);
        }));
      for (
        var E = m._mappings.toArray().slice(),
          b = (A.__generatedMappings = []),
          T = (A.__originalMappings = []),
          I = 0,
          V = E.length;
        I < V;
        I++
      ) {
        var S = E[I],
          g = new f();
        (g.generatedLine = S.generatedLine),
          (g.generatedColumn = S.generatedColumn),
          S.source &&
            ((g.source = v.indexOf(S.source)),
            (g.originalLine = S.originalLine),
            (g.originalColumn = S.originalColumn),
            S.name && (g.name = C.indexOf(S.name)),
            T.push(g)),
          b.push(g);
      }
      return u(A.__originalMappings, e.compareByOriginalPositions), A;
    }),
    (a.prototype._version = 3),
    Object.defineProperty(a.prototype, "sources", {
      get: function () {
        return this._absoluteSources.slice();
      },
    });
  function f() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  (a.prototype._parseMappings = function (m, y) {
    for (
      var A = 1,
        C = 0,
        v = 0,
        E = 0,
        b = 0,
        T = 0,
        I = m.length,
        V = 0,
        S = {},
        g = {},
        x = [],
        F = [],
        B,
        R,
        N,
        W,
        q;
      V < I;

    )
      if (m.charAt(V) === ";") A++, V++, (C = 0);
      else if (m.charAt(V) === ",") V++;
      else {
        for (
          B = new f(), B.generatedLine = A, W = V;
          W < I && !this._charIsMappingSeparator(m, W);
          W++
        );
        if (((R = m.slice(V, W)), (N = S[R]), N)) V += R.length;
        else {
          for (N = []; V < W; )
            i.decode(m, V, g), (q = g.value), (V = g.rest), N.push(q);
          if (N.length === 2)
            throw new Error("Found a source, but no line and column");
          if (N.length === 3)
            throw new Error("Found a source and line, but no column");
          S[R] = N;
        }
        (B.generatedColumn = C + N[0]),
          (C = B.generatedColumn),
          N.length > 1 &&
            ((B.source = b + N[1]),
            (b += N[1]),
            (B.originalLine = v + N[2]),
            (v = B.originalLine),
            (B.originalLine += 1),
            (B.originalColumn = E + N[3]),
            (E = B.originalColumn),
            N.length > 4 && ((B.name = T + N[4]), (T += N[4]))),
          F.push(B),
          typeof B.originalLine == "number" && x.push(B);
      }
    u(F, e.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = F),
      u(x, e.compareByOriginalPositions),
      (this.__originalMappings = x);
  }),
    (a.prototype._findMapping = function (m, y, A, C, v, E) {
      if (m[A] <= 0)
        throw new TypeError(
          "Line must be greater than or equal to 1, got " + m[A],
        );
      if (m[C] < 0)
        throw new TypeError(
          "Column must be greater than or equal to 0, got " + m[C],
        );
      return t.search(m, y, v, E);
    }),
    (a.prototype.computeColumnSpans = function () {
      for (var m = 0; m < this._generatedMappings.length; ++m) {
        var y = this._generatedMappings[m];
        if (m + 1 < this._generatedMappings.length) {
          var A = this._generatedMappings[m + 1];
          if (y.generatedLine === A.generatedLine) {
            y.lastGeneratedColumn = A.generatedColumn - 1;
            continue;
          }
        }
        y.lastGeneratedColumn = 1 / 0;
      }
    }),
    (a.prototype.originalPositionFor = function (m) {
      var y = {
          generatedLine: e.getArg(m, "line"),
          generatedColumn: e.getArg(m, "column"),
        },
        A = this._findMapping(
          y,
          this._generatedMappings,
          "generatedLine",
          "generatedColumn",
          e.compareByGeneratedPositionsDeflated,
          e.getArg(m, "bias", s.GREATEST_LOWER_BOUND),
        );
      if (A >= 0) {
        var C = this._generatedMappings[A];
        if (C.generatedLine === y.generatedLine) {
          var v = e.getArg(C, "source", null);
          v !== null &&
            ((v = this._sources.at(v)),
            (v = e.computeSourceURL(this.sourceRoot, v, this._sourceMapURL)));
          var E = e.getArg(C, "name", null);
          return (
            E !== null && (E = this._names.at(E)),
            {
              source: v,
              line: e.getArg(C, "originalLine", null),
              column: e.getArg(C, "originalColumn", null),
              name: E,
            }
          );
        }
      }
      return { source: null, line: null, column: null, name: null };
    }),
    (a.prototype.hasContentsOfAllSources = function () {
      return this.sourcesContent
        ? this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (m) {
              return m == null;
            })
        : !1;
    }),
    (a.prototype.sourceContentFor = function (m, y) {
      if (!this.sourcesContent) return null;
      var A = this._findSourceIndex(m);
      if (A >= 0) return this.sourcesContent[A];
      var C = m;
      this.sourceRoot != null && (C = e.relative(this.sourceRoot, C));
      var v;
      if (this.sourceRoot != null && (v = e.urlParse(this.sourceRoot))) {
        var E = C.replace(/^file:\/\//, "");
        if (v.scheme == "file" && this._sources.has(E))
          return this.sourcesContent[this._sources.indexOf(E)];
        if ((!v.path || v.path == "/") && this._sources.has("/" + C))
          return this.sourcesContent[this._sources.indexOf("/" + C)];
      }
      if (y) return null;
      throw new Error('"' + C + '" is not in the SourceMap.');
    }),
    (a.prototype.generatedPositionFor = function (m) {
      var y = e.getArg(m, "source");
      if (((y = this._findSourceIndex(y)), y < 0))
        return { line: null, column: null, lastColumn: null };
      var A = {
          source: y,
          originalLine: e.getArg(m, "line"),
          originalColumn: e.getArg(m, "column"),
        },
        C = this._findMapping(
          A,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          e.getArg(m, "bias", s.GREATEST_LOWER_BOUND),
        );
      if (C >= 0) {
        var v = this._originalMappings[C];
        if (v.source === A.source)
          return {
            line: e.getArg(v, "generatedLine", null),
            column: e.getArg(v, "generatedColumn", null),
            lastColumn: e.getArg(v, "lastGeneratedColumn", null),
          };
      }
      return { line: null, column: null, lastColumn: null };
    }),
    (nt.BasicSourceMapConsumer = a);
  function p(D, m) {
    var y = D;
    typeof D == "string" && (y = e.parseSourceMapInput(D));
    var A = e.getArg(y, "version"),
      C = e.getArg(y, "sections");
    if (A != this._version) throw new Error("Unsupported version: " + A);
    (this._sources = new r()), (this._names = new r());
    var v = { line: -1, column: 0 };
    this._sections = C.map(function (E) {
      if (E.url)
        throw new Error("Support for url field in sections not implemented.");
      var b = e.getArg(E, "offset"),
        T = e.getArg(b, "line"),
        I = e.getArg(b, "column");
      if (T < v.line || (T === v.line && I < v.column))
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return (
        (v = b),
        {
          generatedOffset: { generatedLine: T + 1, generatedColumn: I + 1 },
          consumer: new s(e.getArg(E, "map"), m),
        }
      );
    });
  }
  return (
    (p.prototype = Object.create(s.prototype)),
    (p.prototype.constructor = s),
    (p.prototype._version = 3),
    Object.defineProperty(p.prototype, "sources", {
      get: function () {
        for (var D = [], m = 0; m < this._sections.length; m++)
          for (var y = 0; y < this._sections[m].consumer.sources.length; y++)
            D.push(this._sections[m].consumer.sources[y]);
        return D;
      },
    }),
    (p.prototype.originalPositionFor = function (m) {
      var y = {
          generatedLine: e.getArg(m, "line"),
          generatedColumn: e.getArg(m, "column"),
        },
        A = t.search(y, this._sections, function (v, E) {
          var b = v.generatedLine - E.generatedOffset.generatedLine;
          return b || v.generatedColumn - E.generatedOffset.generatedColumn;
        }),
        C = this._sections[A];
      return C
        ? C.consumer.originalPositionFor({
            line: y.generatedLine - (C.generatedOffset.generatedLine - 1),
            column:
              y.generatedColumn -
              (C.generatedOffset.generatedLine === y.generatedLine
                ? C.generatedOffset.generatedColumn - 1
                : 0),
            bias: m.bias,
          })
        : { source: null, line: null, column: null, name: null };
    }),
    (p.prototype.hasContentsOfAllSources = function () {
      return this._sections.every(function (m) {
        return m.consumer.hasContentsOfAllSources();
      });
    }),
    (p.prototype.sourceContentFor = function (m, y) {
      for (var A = 0; A < this._sections.length; A++) {
        var C = this._sections[A],
          v = C.consumer.sourceContentFor(m, !0);
        if (v) return v;
      }
      if (y) return null;
      throw new Error('"' + m + '" is not in the SourceMap.');
    }),
    (p.prototype.generatedPositionFor = function (m) {
      for (var y = 0; y < this._sections.length; y++) {
        var A = this._sections[y];
        if (A.consumer._findSourceIndex(e.getArg(m, "source")) !== -1) {
          var C = A.consumer.generatedPositionFor(m);
          if (C) {
            var v = {
              line: C.line + (A.generatedOffset.generatedLine - 1),
              column:
                C.column +
                (A.generatedOffset.generatedLine === C.line
                  ? A.generatedOffset.generatedColumn - 1
                  : 0),
            };
            return v;
          }
        }
      }
      return { line: null, column: null };
    }),
    (p.prototype._parseMappings = function (m, y) {
      (this.__generatedMappings = []), (this.__originalMappings = []);
      for (var A = 0; A < this._sections.length; A++)
        for (
          var C = this._sections[A], v = C.consumer._generatedMappings, E = 0;
          E < v.length;
          E++
        ) {
          var b = v[E],
            T = C.consumer._sources.at(b.source);
          (T = e.computeSourceURL(
            C.consumer.sourceRoot,
            T,
            this._sourceMapURL,
          )),
            this._sources.add(T),
            (T = this._sources.indexOf(T));
          var I = null;
          b.name &&
            ((I = C.consumer._names.at(b.name)),
            this._names.add(I),
            (I = this._names.indexOf(I)));
          var V = {
            source: T,
            generatedLine:
              b.generatedLine + (C.generatedOffset.generatedLine - 1),
            generatedColumn:
              b.generatedColumn +
              (C.generatedOffset.generatedLine === b.generatedLine
                ? C.generatedOffset.generatedColumn - 1
                : 0),
            originalLine: b.originalLine,
            originalColumn: b.originalColumn,
            name: I,
          };
          this.__generatedMappings.push(V),
            typeof V.originalLine == "number" &&
              this.__originalMappings.push(V);
        }
      u(this.__generatedMappings, e.compareByGeneratedPositionsDeflated),
        u(this.__originalMappings, e.compareByOriginalPositions);
    }),
    (nt.IndexedSourceMapConsumer = p),
    nt
  );
}
var ur = {},
  ii;
function xu() {
  if (ii) return ur;
  ii = 1;
  var e = Li().SourceMapGenerator,
    t = dt(),
    r = /(\r?\n)/,
    i = 10,
    u = "$$$isSourceNode$$$";
  function s(a, f, p, D, m) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = a ?? null),
      (this.column = f ?? null),
      (this.source = p ?? null),
      (this.name = m ?? null),
      (this[u] = !0),
      D != null && this.add(D);
  }
  return (
    (s.fromStringWithSourceMap = function (f, p, D) {
      var m = new s(),
        y = f.split(r),
        A = 0,
        C = function () {
          var I = S(),
            V = S() || "";
          return I + V;
          function S() {
            return A < y.length ? y[A++] : void 0;
          }
        },
        v = 1,
        E = 0,
        b = null;
      return (
        p.eachMapping(function (I) {
          if (b !== null)
            if (v < I.generatedLine) T(b, C()), v++, (E = 0);
            else {
              var V = y[A] || "",
                S = V.substr(0, I.generatedColumn - E);
              (y[A] = V.substr(I.generatedColumn - E)),
                (E = I.generatedColumn),
                T(b, S),
                (b = I);
              return;
            }
          for (; v < I.generatedLine; ) m.add(C()), v++;
          if (E < I.generatedColumn) {
            var V = y[A] || "";
            m.add(V.substr(0, I.generatedColumn)),
              (y[A] = V.substr(I.generatedColumn)),
              (E = I.generatedColumn);
          }
          b = I;
        }, this),
        A < y.length && (b && T(b, C()), m.add(y.splice(A).join(""))),
        p.sources.forEach(function (I) {
          var V = p.sourceContentFor(I);
          V != null &&
            (D != null && (I = t.join(D, I)), m.setSourceContent(I, V));
        }),
        m
      );
      function T(I, V) {
        if (I === null || I.source === void 0) m.add(V);
        else {
          var S = D ? t.join(D, I.source) : I.source;
          m.add(new s(I.originalLine, I.originalColumn, S, V, I.name));
        }
      }
    }),
    (s.prototype.add = function (f) {
      if (Array.isArray(f))
        f.forEach(function (p) {
          this.add(p);
        }, this);
      else if (f[u] || typeof f == "string") f && this.children.push(f);
      else
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            f,
        );
      return this;
    }),
    (s.prototype.prepend = function (f) {
      if (Array.isArray(f))
        for (var p = f.length - 1; p >= 0; p--) this.prepend(f[p]);
      else if (f[u] || typeof f == "string") this.children.unshift(f);
      else
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            f,
        );
      return this;
    }),
    (s.prototype.walk = function (f) {
      for (var p, D = 0, m = this.children.length; D < m; D++)
        (p = this.children[D]),
          p[u]
            ? p.walk(f)
            : p !== "" &&
              f(p, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name,
              });
    }),
    (s.prototype.join = function (f) {
      var p,
        D,
        m = this.children.length;
      if (m > 0) {
        for (p = [], D = 0; D < m - 1; D++) p.push(this.children[D]), p.push(f);
        p.push(this.children[D]), (this.children = p);
      }
      return this;
    }),
    (s.prototype.replaceRight = function (f, p) {
      var D = this.children[this.children.length - 1];
      return (
        D[u]
          ? D.replaceRight(f, p)
          : typeof D == "string"
            ? (this.children[this.children.length - 1] = D.replace(f, p))
            : this.children.push("".replace(f, p)),
        this
      );
    }),
    (s.prototype.setSourceContent = function (f, p) {
      this.sourceContents[t.toSetString(f)] = p;
    }),
    (s.prototype.walkSourceContents = function (f) {
      for (var p = 0, D = this.children.length; p < D; p++)
        this.children[p][u] && this.children[p].walkSourceContents(f);
      for (
        var m = Object.keys(this.sourceContents), p = 0, D = m.length;
        p < D;
        p++
      )
        f(t.fromSetString(m[p]), this.sourceContents[m[p]]);
    }),
    (s.prototype.toString = function () {
      var f = "";
      return (
        this.walk(function (p) {
          f += p;
        }),
        f
      );
    }),
    (s.prototype.toStringWithSourceMap = function (f) {
      var p = { code: "", line: 1, column: 0 },
        D = new e(f),
        m = !1,
        y = null,
        A = null,
        C = null,
        v = null;
      return (
        this.walk(function (E, b) {
          (p.code += E),
            b.source !== null && b.line !== null && b.column !== null
              ? ((y !== b.source ||
                  A !== b.line ||
                  C !== b.column ||
                  v !== b.name) &&
                  D.addMapping({
                    source: b.source,
                    original: { line: b.line, column: b.column },
                    generated: { line: p.line, column: p.column },
                    name: b.name,
                  }),
                (y = b.source),
                (A = b.line),
                (C = b.column),
                (v = b.name),
                (m = !0))
              : m &&
                (D.addMapping({
                  generated: { line: p.line, column: p.column },
                }),
                (y = null),
                (m = !1));
          for (var T = 0, I = E.length; T < I; T++)
            E.charCodeAt(T) === i
              ? (p.line++,
                (p.column = 0),
                T + 1 === I
                  ? ((y = null), (m = !1))
                  : m &&
                    D.addMapping({
                      source: b.source,
                      original: { line: b.line, column: b.column },
                      generated: { line: p.line, column: p.column },
                      name: b.name,
                    }))
              : p.column++;
        }),
        this.walkSourceContents(function (E, b) {
          D.setSourceContent(E, b);
        }),
        { code: p.code, map: D }
      );
    }),
    (ur.SourceNode = s),
    ur
  );
}
var ni;
function Fu() {
  return (
    ni ||
      ((ni = 1),
      (it.SourceMapGenerator = Li().SourceMapGenerator),
      (it.SourceMapConsumer = yu().SourceMapConsumer),
      (it.SourceNode = xu().SourceNode)),
    it
  );
}
const vu = "escodegen",
  bu = "ECMAScript code generator",
  Su = "http://github.com/estools/escodegen",
  _u = "escodegen.js",
  Bu = { esgenerate: "./bin/esgenerate.js", escodegen: "./bin/escodegen.js" },
  wu = ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
  ku = "2.1.0",
  Iu = { node: ">=6.0" },
  Tu = [
    {
      name: "Yusuke Suzuki",
      email: "utatane.tea@gmail.com",
      web: "http://github.com/Constellation",
    },
  ],
  Pu = { type: "git", url: "http://github.com/estools/escodegen.git" },
  Nu = { estraverse: "^5.2.0", esutils: "^2.0.2", esprima: "^4.0.1" },
  Lu = { "source-map": "~0.6.1" },
  Ou = {
    acorn: "^8.0.4",
    bluebird: "^3.4.7",
    "bower-registry-client": "^1.0.0",
    chai: "^4.2.0",
    "chai-exclude": "^2.0.2",
    "commonjs-everywhere": "^0.9.7",
    gulp: "^4.0.2",
    "gulp-eslint": "^6.0.0",
    "gulp-mocha": "^7.0.2",
    minimist: "^1.2.5",
    optionator: "^0.9.1",
    semver: "^7.3.4",
  },
  Ru = "BSD-2-Clause",
  Mu = {
    test: "gulp travis",
    "unit-test": "gulp test",
    lint: "gulp lint",
    release: "node tools/release.js",
    "build-min":
      "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
    build:
      "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js",
  },
  Vu = {
    name: vu,
    description: bu,
    homepage: Su,
    main: _u,
    bin: Bu,
    files: wu,
    version: ku,
    engines: Iu,
    maintainers: Tu,
    repository: Pu,
    dependencies: Nu,
    optionalDependencies: Lu,
    devDependencies: Ou,
    license: Ru,
    scripts: Mu,
  };
(function (e) {
  (function () {
    var t,
      r,
      i,
      u,
      s,
      a,
      f,
      p,
      D,
      m,
      y,
      A,
      C,
      v,
      E,
      b,
      T,
      I,
      V,
      S,
      g,
      x,
      F,
      B,
      R,
      N;
    (s = Bi), (a = St), (t = s.Syntax);
    function W(n) {
      return ae.Expression.hasOwnProperty(n.type);
    }
    function q(n) {
      return ae.Statement.hasOwnProperty(n.type);
    }
    (r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22,
    }),
      (i = {
        "??": r.Coalesce,
        "||": r.LogicalOR,
        "&&": r.LogicalAND,
        "|": r.BitwiseOR,
        "^": r.BitwiseXOR,
        "&": r.BitwiseAND,
        "==": r.Equality,
        "!=": r.Equality,
        "===": r.Equality,
        "!==": r.Equality,
        is: r.Equality,
        isnt: r.Equality,
        "<": r.Relational,
        ">": r.Relational,
        "<=": r.Relational,
        ">=": r.Relational,
        in: r.Relational,
        instanceof: r.Relational,
        "<<": r.BitwiseSHIFT,
        ">>": r.BitwiseSHIFT,
        ">>>": r.BitwiseSHIFT,
        "+": r.Additive,
        "-": r.Additive,
        "*": r.Multiplicative,
        "%": r.Multiplicative,
        "/": r.Multiplicative,
        "**": r.Exponentiation,
      });
    var M = 1,
      X = 2,
      ne = 4,
      oe = 8,
      ie = 16,
      Q = 32,
      Ce = 64,
      Be = X | ne,
      Je = M | X,
      O = M | X | ne,
      Ve = M,
      Ct = ne,
      Le = M | ne,
      ee = M,
      be = M | Q,
      Et = 0,
      Rn = M | ie,
      Mn = M | oe;
    function Nr() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: "    ", base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1,
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1,
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null,
      };
    }
    function je(n, l) {
      var o = "";
      for (l |= 0; l > 0; l >>>= 1, n += n) l & 1 && (o += n);
      return o;
    }
    function Vn(n) {
      return /[\r\n]/g.test(n);
    }
    function he(n) {
      var l = n.length;
      return l && a.code.isLineTerminator(n.charCodeAt(l - 1));
    }
    function Lr(n, l) {
      var o;
      for (o in l) l.hasOwnProperty(o) && (n[o] = l[o]);
      return n;
    }
    function yt(n, l) {
      var o, c;
      function d(_) {
        return (
          typeof _ == "object" && _ instanceof Object && !(_ instanceof RegExp)
        );
      }
      for (o in l)
        l.hasOwnProperty(o) &&
          ((c = l[o]),
          d(c) ? (d(n[o]) ? yt(n[o], c) : (n[o] = yt({}, c))) : (n[o] = c));
      return n;
    }
    function jn(n) {
      var l, o, c, d, _;
      if (n !== n) throw new Error("Numeric literal whose value is NaN");
      if (n < 0 || (n === 0 && 1 / n < 0))
        throw new Error("Numeric literal whose value is negative");
      if (n === 1 / 0) return D ? "null" : m ? "1e400" : "1e+400";
      if (((l = "" + n), !m || l.length < 3)) return l;
      for (
        o = l.indexOf("."),
          !D &&
            l.charCodeAt(0) === 48 &&
            o === 1 &&
            ((o = 0), (l = l.slice(1))),
          c = l,
          l = l.replace("e+", "e"),
          d = 0,
          (_ = c.indexOf("e")) > 0 &&
            ((d = +c.slice(_ + 1)), (c = c.slice(0, _))),
          o >= 0 &&
            ((d -= c.length - o - 1),
            (c = +(c.slice(0, o) + c.slice(o + 1)) + "")),
          _ = 0;
        c.charCodeAt(c.length + _ - 1) === 48;

      )
        --_;
      return (
        _ !== 0 && ((d -= _), (c = c.slice(0, _))),
        d !== 0 && (c += "e" + d),
        (c.length < l.length ||
          (y &&
            n > 1e12 &&
            Math.floor(n) === n &&
            (c = "0x" + n.toString(16)).length < l.length)) &&
          +c === n &&
          (l = c),
        l
      );
    }
    function Or(n, l) {
      return (n & -2) === 8232
        ? (l ? "u" : "\\u") + (n === 8232 ? "2028" : "2029")
        : n === 10 || n === 13
          ? (l ? "" : "\\") + (n === 10 ? "n" : "r")
          : String.fromCharCode(n);
    }
    function qn(n) {
      var l, o, c, d, _, w, k, L;
      if (((o = n.toString()), n.source)) {
        if (((l = o.match(/\/([^/]*)$/)), !l)) return o;
        for (
          c = l[1], o = "", k = !1, L = !1, d = 0, _ = n.source.length;
          d < _;
          ++d
        )
          (w = n.source.charCodeAt(d)),
            L
              ? ((o += Or(w, L)), (L = !1))
              : (k
                  ? w === 93 && (k = !1)
                  : w === 47
                    ? (o += "\\")
                    : w === 91 && (k = !0),
                (o += Or(w, L)),
                (L = w === 92));
        return "/" + o + "/" + c;
      }
      return o;
    }
    function Un(n, l) {
      var o;
      return n === 8
        ? "\\b"
        : n === 12
          ? "\\f"
          : n === 9
            ? "\\t"
            : ((o = n.toString(16).toUpperCase()),
              D || n > 255
                ? "\\u" + "0000".slice(o.length) + o
                : n === 0 && !a.code.isDecimalDigit(l)
                  ? "\\0"
                  : n === 11
                    ? "\\x0B"
                    : "\\x" + "00".slice(o.length) + o);
    }
    function Wn(n) {
      if (n === 92) return "\\\\";
      if (n === 10) return "\\n";
      if (n === 13) return "\\r";
      if (n === 8232) return "\\u2028";
      if (n === 8233) return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function Gn(n) {
      var l, o, c, d;
      for (d = A === "double" ? '"' : "'", l = 0, o = n.length; l < o; ++l)
        if (((c = n.charCodeAt(l)), c === 39)) {
          d = '"';
          break;
        } else if (c === 34) {
          d = "'";
          break;
        } else c === 92 && ++l;
      return d + n + d;
    }
    function zn(n) {
      var l = "",
        o,
        c,
        d,
        _ = 0,
        w = 0,
        k,
        L;
      for (o = 0, c = n.length; o < c; ++o) {
        if (((d = n.charCodeAt(o)), d === 39)) ++_;
        else if (d === 34) ++w;
        else if (d === 47 && D) l += "\\";
        else if (a.code.isLineTerminator(d) || d === 92) {
          l += Wn(d);
          continue;
        } else if (
          !a.code.isIdentifierPartES5(d) &&
          ((D && d < 32) || (!D && !C && (d < 32 || d > 126)))
        ) {
          l += Un(d, n.charCodeAt(o + 1));
          continue;
        }
        l += String.fromCharCode(d);
      }
      if (
        ((k = !(A === "double" || (A === "auto" && w < _))),
        (L = k ? "'" : '"'),
        !(k ? _ : w))
      )
        return L + l + L;
      for (n = l, l = L, o = 0, c = n.length; o < c; ++o)
        (d = n.charCodeAt(o)),
          ((d === 39 && k) || (d === 34 && !k)) && (l += "\\"),
          (l += String.fromCharCode(d));
      return l + L;
    }
    function Rr(n) {
      var l,
        o,
        c,
        d = "";
      for (l = 0, o = n.length; l < o; ++l)
        (c = n[l]), (d += Array.isArray(c) ? Rr(c) : c);
      return d;
    }
    function Y(n, l) {
      if (!x) return Array.isArray(n) ? Rr(n) : n;
      if (l == null) {
        if (n instanceof u) return n;
        l = {};
      }
      return l.loc == null
        ? new u(null, null, x, n, l.name || null)
        : new u(
            l.loc.start.line,
            l.loc.start.column,
            x === !0 ? l.loc.source || null : x,
            n,
            l.name || null,
          );
    }
    function fe() {
      return E || " ";
    }
    function U(n, l) {
      var o, c, d, _;
      return (
        (o = Y(n).toString()),
        o.length === 0
          ? [l]
          : ((c = Y(l).toString()),
            c.length === 0
              ? [n]
              : ((d = o.charCodeAt(o.length - 1)),
                (_ = c.charCodeAt(0)),
                ((d === 43 || d === 45) && d === _) ||
                (a.code.isIdentifierPartES5(d) &&
                  a.code.isIdentifierPartES5(_)) ||
                (d === 47 && _ === 105)
                  ? [n, fe(), l]
                  : a.code.isWhiteSpace(d) ||
                      a.code.isLineTerminator(d) ||
                      a.code.isWhiteSpace(_) ||
                      a.code.isLineTerminator(_)
                    ? [n, l]
                    : [n, E, l]))
      );
    }
    function pe(n) {
      return [f, n];
    }
    function se(n) {
      var l;
      (l = f), (f += p), n(f), (f = l);
    }
    function $n(n) {
      var l;
      for (
        l = n.length - 1;
        l >= 0 && !a.code.isLineTerminator(n.charCodeAt(l));
        --l
      );
      return n.length - 1 - l;
    }
    function Jn(n, l) {
      var o, c, d, _, w, k, L, J;
      for (
        o = n.split(/\r\n|[\r\n]/), k = Number.MAX_VALUE, c = 1, d = o.length;
        c < d;
        ++c
      ) {
        for (
          _ = o[c], w = 0;
          w < _.length && a.code.isWhiteSpace(_.charCodeAt(w));

        )
          ++w;
        k > w && (k = w);
      }
      for (
        typeof l < "u"
          ? ((L = f), o[1][k] === "*" && (l += " "), (f = l))
          : (k & 1 && --k, (L = f)),
          c = 1,
          d = o.length;
        c < d;
        ++c
      )
        (J = Y(pe(o[c].slice(k)))), (o[c] = x ? J.join("") : J);
      return (
        (f = L),
        o.join(`
`)
      );
    }
    function we(n, l) {
      if (n.type === "Line") {
        if (he(n.value)) return "//" + n.value;
        var o = "//" + n.value;
        return (
          B ||
            (o += `
`),
          o
        );
      }
      return S.format.indent.adjustMultilineComment && /[\n\r]/.test(n.value)
        ? Jn("/*" + n.value + "*/", l)
        : "/*" + n.value + "*/";
    }
    function Mr(n, l) {
      var o, c, d, _, w, k, L, J, ce, qe, Xe, qr, Ur, Se;
      if (n.leadingComments && n.leadingComments.length > 0) {
        if (((_ = l), B)) {
          for (
            d = n.leadingComments[0],
              l = [],
              J = d.extendedRange,
              ce = d.range,
              Xe = F.substring(J[0], ce[0]),
              Se = (Xe.match(/\n/g) || []).length,
              Se > 0
                ? (l.push(
                    je(
                      `
`,
                      Se,
                    ),
                  ),
                  l.push(pe(we(d))))
                : (l.push(Xe), l.push(we(d))),
              qe = ce,
              o = 1,
              c = n.leadingComments.length;
            o < c;
            o++
          )
            (d = n.leadingComments[o]),
              (ce = d.range),
              (qr = F.substring(qe[1], ce[0])),
              (Se = (qr.match(/\n/g) || []).length),
              l.push(
                je(
                  `
`,
                  Se,
                ),
              ),
              l.push(pe(we(d))),
              (qe = ce);
          (Ur = F.substring(ce[1], J[1])),
            (Se = (Ur.match(/\n/g) || []).length),
            l.push(
              je(
                `
`,
                Se,
              ),
            );
        } else
          for (
            d = n.leadingComments[0],
              l = [],
              I &&
                n.type === t.Program &&
                n.body.length === 0 &&
                l.push(`
`),
              l.push(we(d)),
              he(Y(l).toString()) ||
                l.push(`
`),
              o = 1,
              c = n.leadingComments.length;
            o < c;
            ++o
          )
            (d = n.leadingComments[o]),
              (L = [we(d)]),
              he(Y(L).toString()) ||
                L.push(`
`),
              l.push(pe(L));
        l.push(pe(_));
      }
      if (n.trailingComments)
        if (B)
          (d = n.trailingComments[0]),
            (J = d.extendedRange),
            (ce = d.range),
            (Xe = F.substring(J[0], ce[0])),
            (Se = (Xe.match(/\n/g) || []).length),
            Se > 0
              ? (l.push(
                  je(
                    `
`,
                    Se,
                  ),
                ),
                l.push(pe(we(d))))
              : (l.push(Xe), l.push(we(d)));
        else
          for (
            w = !he(Y(l).toString()),
              k = je(" ", $n(Y([f, l, p]).toString())),
              o = 0,
              c = n.trailingComments.length;
            o < c;
            ++o
          )
            (d = n.trailingComments[o]),
              w
                ? (o === 0 ? (l = [l, p]) : (l = [l, k]), l.push(we(d, k)))
                : (l = [l, pe(we(d))]),
              o !== c - 1 &&
                !he(Y(l).toString()) &&
                (l = [
                  l,
                  `
`,
                ]);
      return l;
    }
    function He(n, l, o) {
      var c,
        d = 0;
      for (c = n; c < l; c++)
        F[c] ===
          `
` && d++;
      for (c = 1; c < d; c++) o.push(v);
    }
    function le(n, l, o) {
      return l < o ? ["(", n, ")"] : n;
    }
    function Vr(n) {
      var l, o, c;
      for (c = n.split(/\r\n|\n/), l = 1, o = c.length; l < o; l++)
        c[l] = v + f + c[l];
      return c;
    }
    function Hn(n, l) {
      var o, c, d;
      return (
        (o = n[S.verbatim]),
        typeof o == "string"
          ? (c = le(Vr(o), r.Sequence, l))
          : ((c = Vr(o.content)),
            (d = o.precedence != null ? o.precedence : r.Sequence),
            (c = le(c, d, l))),
        Y(c, n)
      );
    }
    function ae() {}
    (ae.prototype.maybeBlock = function (n, l) {
      var o,
        c,
        d = this;
      return (
        (c = !S.comment || !n.leadingComments),
        n.type === t.BlockStatement && c
          ? [E, this.generateStatement(n, l)]
          : n.type === t.EmptyStatement && c
            ? ";"
            : (se(function () {
                o = [v, pe(d.generateStatement(n, l))];
              }),
              o)
      );
    }),
      (ae.prototype.maybeBlockSuffix = function (n, l) {
        var o = he(Y(l).toString());
        return n.type === t.BlockStatement &&
          (!S.comment || !n.leadingComments) &&
          !o
          ? [l, E]
          : o
            ? [l, f]
            : [l, v, f];
      });
    function ge(n) {
      return Y(n.name, n);
    }
    function rt(n, l) {
      return n.async ? "async" + (l ? fe() : E) : "";
    }
    function xt(n) {
      var l = n.generator && !S.moz.starlessGenerator;
      return l ? "*" + E : "";
    }
    function jr(n) {
      var l = n.value,
        o = "";
      return (
        l.async && (o += rt(l, !n.computed)),
        l.generator && (o += xt(l) ? "*" : ""),
        o
      );
    }
    (ae.prototype.generatePattern = function (n, l, o) {
      return n.type === t.Identifier ? ge(n) : this.generateExpression(n, l, o);
    }),
      (ae.prototype.generateFunctionParams = function (n) {
        var l, o, c, d;
        if (
          ((d = !1),
          n.type === t.ArrowFunctionExpression &&
            !n.rest &&
            (!n.defaults || n.defaults.length === 0) &&
            n.params.length === 1 &&
            n.params[0].type === t.Identifier)
        )
          c = [rt(n, !0), ge(n.params[0])];
        else {
          for (
            c = n.type === t.ArrowFunctionExpression ? [rt(n, !1)] : [],
              c.push("("),
              n.defaults && (d = !0),
              l = 0,
              o = n.params.length;
            l < o;
            ++l
          )
            d && n.defaults[l]
              ? c.push(
                  this.generateAssignment(
                    n.params[l],
                    n.defaults[l],
                    "=",
                    r.Assignment,
                    O,
                  ),
                )
              : c.push(this.generatePattern(n.params[l], r.Assignment, O)),
              l + 1 < o && c.push("," + E);
          n.rest &&
            (n.params.length && c.push("," + E),
            c.push("..."),
            c.push(ge(n.rest))),
            c.push(")");
        }
        return c;
      }),
      (ae.prototype.generateFunctionBody = function (n) {
        var l, o;
        return (
          (l = this.generateFunctionParams(n)),
          n.type === t.ArrowFunctionExpression && (l.push(E), l.push("=>")),
          n.expression
            ? (l.push(E),
              (o = this.generateExpression(n.body, r.Assignment, O)),
              o.toString().charAt(0) === "{" && (o = ["(", o, ")"]),
              l.push(o))
            : l.push(this.maybeBlock(n.body, Mn)),
          l
        );
      }),
      (ae.prototype.generateIterationForStatement = function (n, l, o) {
        var c = ["for" + (l.await ? fe() + "await" : "") + E + "("],
          d = this;
        return (
          se(function () {
            l.left.type === t.VariableDeclaration
              ? se(function () {
                  c.push(l.left.kind + fe()),
                    c.push(d.generateStatement(l.left.declarations[0], Et));
                })
              : c.push(d.generateExpression(l.left, r.Call, O)),
              (c = U(c, n)),
              (c = [U(c, d.generateExpression(l.right, r.Assignment, O)), ")"]);
          }),
          c.push(this.maybeBlock(l.body, o)),
          c
        );
      }),
      (ae.prototype.generatePropertyKey = function (n, l) {
        var o = [];
        return (
          l && o.push("["),
          o.push(this.generateExpression(n, r.Assignment, O)),
          l && o.push("]"),
          o
        );
      }),
      (ae.prototype.generateAssignment = function (n, l, o, c, d) {
        return (
          r.Assignment < c && (d |= M),
          le(
            [
              this.generateExpression(n, r.Call, d),
              E + o + E,
              this.generateExpression(l, r.Assignment, d),
            ],
            r.Assignment,
            c,
          )
        );
      }),
      (ae.prototype.semicolon = function (n) {
        return !T && n & Q ? "" : ";";
      }),
      (ae.Statement = {
        BlockStatement: function (n, l) {
          var o,
            c,
            d = ["{", v],
            _ = this;
          return (
            se(function () {
              n.body.length === 0 &&
                B &&
                ((o = n.range),
                o[1] - o[0] > 2 &&
                  ((c = F.substring(o[0] + 1, o[1] - 1)),
                  c[0] ===
                    `
` && (d = ["{"]),
                  d.push(c)));
              var w, k, L, J;
              for (
                J = ee, l & oe && (J |= ie), w = 0, k = n.body.length;
                w < k;
                ++w
              )
                B &&
                  (w === 0 &&
                    (n.body[0].leadingComments &&
                      ((o = n.body[0].leadingComments[0].extendedRange),
                      (c = F.substring(o[0], o[1])),
                      c[0] ===
                        `
` && (d = ["{"])),
                    n.body[0].leadingComments ||
                      He(n.range[0], n.body[0].range[0], d)),
                  w > 0 &&
                    !n.body[w - 1].trailingComments &&
                    !n.body[w].leadingComments &&
                    He(n.body[w - 1].range[1], n.body[w].range[0], d)),
                  w === k - 1 && (J |= Q),
                  n.body[w].leadingComments && B
                    ? (L = _.generateStatement(n.body[w], J))
                    : (L = pe(_.generateStatement(n.body[w], J))),
                  d.push(L),
                  he(Y(L).toString()) ||
                    (B && w < k - 1 && n.body[w + 1].leadingComments) ||
                    d.push(v),
                  B &&
                    w === k - 1 &&
                    (n.body[w].trailingComments ||
                      He(n.body[w].range[1], n.range[1], d));
            }),
            d.push(pe("}")),
            d
          );
        },
        BreakStatement: function (n, l) {
          return n.label
            ? "break " + n.label.name + this.semicolon(l)
            : "break" + this.semicolon(l);
        },
        ContinueStatement: function (n, l) {
          return n.label
            ? "continue " + n.label.name + this.semicolon(l)
            : "continue" + this.semicolon(l);
        },
        ClassBody: function (n, l) {
          var o = ["{", v],
            c = this;
          return (
            se(function (d) {
              var _, w;
              for (_ = 0, w = n.body.length; _ < w; ++_)
                o.push(d),
                  o.push(c.generateExpression(n.body[_], r.Sequence, O)),
                  _ + 1 < w && o.push(v);
            }),
            he(Y(o).toString()) || o.push(v),
            o.push(f),
            o.push("}"),
            o
          );
        },
        ClassDeclaration: function (n, l) {
          var o, c;
          return (
            (o = ["class"]),
            n.id && (o = U(o, this.generateExpression(n.id, r.Sequence, O))),
            n.superClass &&
              ((c = U(
                "extends",
                this.generateExpression(n.superClass, r.Unary, O),
              )),
              (o = U(o, c))),
            o.push(E),
            o.push(this.generateStatement(n.body, be)),
            o
          );
        },
        DirectiveStatement: function (n, l) {
          return S.raw && n.raw
            ? n.raw + this.semicolon(l)
            : Gn(n.directive) + this.semicolon(l);
        },
        DoWhileStatement: function (n, l) {
          var o = U("do", this.maybeBlock(n.body, ee));
          return (
            (o = this.maybeBlockSuffix(n.body, o)),
            U(o, [
              "while" + E + "(",
              this.generateExpression(n.test, r.Sequence, O),
              ")" + this.semicolon(l),
            ])
          );
        },
        CatchClause: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              var d;
              n.param
                ? ((o = [
                    "catch" + E + "(",
                    c.generateExpression(n.param, r.Sequence, O),
                    ")",
                  ]),
                  n.guard &&
                    ((d = c.generateExpression(n.guard, r.Sequence, O)),
                    o.splice(2, 0, " if ", d)))
                : (o = ["catch"]);
            }),
            o.push(this.maybeBlock(n.body, ee)),
            o
          );
        },
        DebuggerStatement: function (n, l) {
          return "debugger" + this.semicolon(l);
        },
        EmptyStatement: function (n, l) {
          return ";";
        },
        ExportDefaultDeclaration: function (n, l) {
          var o = ["export"],
            c;
          return (
            (c = l & Q ? be : ee),
            (o = U(o, "default")),
            q(n.declaration)
              ? (o = U(o, this.generateStatement(n.declaration, c)))
              : (o = U(
                  o,
                  this.generateExpression(n.declaration, r.Assignment, O) +
                    this.semicolon(l),
                )),
            o
          );
        },
        ExportNamedDeclaration: function (n, l) {
          var o = ["export"],
            c,
            d = this;
          return (
            (c = l & Q ? be : ee),
            n.declaration
              ? U(o, this.generateStatement(n.declaration, c))
              : (n.specifiers &&
                  (n.specifiers.length === 0
                    ? (o = U(o, "{" + E + "}"))
                    : n.specifiers[0].type === t.ExportBatchSpecifier
                      ? (o = U(
                          o,
                          this.generateExpression(
                            n.specifiers[0],
                            r.Sequence,
                            O,
                          ),
                        ))
                      : ((o = U(o, "{")),
                        se(function (_) {
                          var w, k;
                          for (
                            o.push(v), w = 0, k = n.specifiers.length;
                            w < k;
                            ++w
                          )
                            o.push(_),
                              o.push(
                                d.generateExpression(
                                  n.specifiers[w],
                                  r.Sequence,
                                  O,
                                ),
                              ),
                              w + 1 < k && o.push("," + v);
                        }),
                        he(Y(o).toString()) || o.push(v),
                        o.push(f + "}")),
                  n.source
                    ? (o = U(o, [
                        "from" + E,
                        this.generateExpression(n.source, r.Sequence, O),
                        this.semicolon(l),
                      ]))
                    : o.push(this.semicolon(l))),
                o)
          );
        },
        ExportAllDeclaration: function (n, l) {
          return [
            "export" + E,
            "*" + E,
            "from" + E,
            this.generateExpression(n.source, r.Sequence, O),
            this.semicolon(l),
          ];
        },
        ExpressionStatement: function (n, l) {
          var o, c;
          function d(k) {
            var L;
            return k.slice(0, 5) !== "class"
              ? !1
              : ((L = k.charCodeAt(5)),
                L === 123 ||
                  a.code.isWhiteSpace(L) ||
                  a.code.isLineTerminator(L));
          }
          function _(k) {
            var L;
            return k.slice(0, 8) !== "function"
              ? !1
              : ((L = k.charCodeAt(8)),
                L === 40 ||
                  a.code.isWhiteSpace(L) ||
                  L === 42 ||
                  a.code.isLineTerminator(L));
          }
          function w(k) {
            var L, J, ce;
            if (
              k.slice(0, 5) !== "async" ||
              !a.code.isWhiteSpace(k.charCodeAt(5))
            )
              return !1;
            for (
              J = 6, ce = k.length;
              J < ce && a.code.isWhiteSpace(k.charCodeAt(J));
              ++J
            );
            return J === ce || k.slice(J, J + 8) !== "function"
              ? !1
              : ((L = k.charCodeAt(J + 8)),
                L === 40 ||
                  a.code.isWhiteSpace(L) ||
                  L === 42 ||
                  a.code.isLineTerminator(L));
          }
          return (
            (o = [this.generateExpression(n.expression, r.Sequence, O)]),
            (c = Y(o).toString()),
            c.charCodeAt(0) === 123 ||
            d(c) ||
            _(c) ||
            w(c) ||
            (V &&
              l & ie &&
              n.expression.type === t.Literal &&
              typeof n.expression.value == "string")
              ? (o = ["(", o, ")" + this.semicolon(l)])
              : o.push(this.semicolon(l)),
            o
          );
        },
        ImportDeclaration: function (n, l) {
          var o,
            c,
            d = this;
          return n.specifiers.length === 0
            ? [
                "import",
                E,
                this.generateExpression(n.source, r.Sequence, O),
                this.semicolon(l),
              ]
            : ((o = ["import"]),
              (c = 0),
              n.specifiers[c].type === t.ImportDefaultSpecifier &&
                ((o = U(o, [
                  this.generateExpression(n.specifiers[c], r.Sequence, O),
                ])),
                ++c),
              n.specifiers[c] &&
                (c !== 0 && o.push(","),
                n.specifiers[c].type === t.ImportNamespaceSpecifier
                  ? (o = U(o, [
                      E,
                      this.generateExpression(n.specifiers[c], r.Sequence, O),
                    ]))
                  : (o.push(E + "{"),
                    n.specifiers.length - c === 1
                      ? (o.push(E),
                        o.push(
                          this.generateExpression(
                            n.specifiers[c],
                            r.Sequence,
                            O,
                          ),
                        ),
                        o.push(E + "}" + E))
                      : (se(function (_) {
                          var w, k;
                          for (
                            o.push(v), w = c, k = n.specifiers.length;
                            w < k;
                            ++w
                          )
                            o.push(_),
                              o.push(
                                d.generateExpression(
                                  n.specifiers[w],
                                  r.Sequence,
                                  O,
                                ),
                              ),
                              w + 1 < k && o.push("," + v);
                        }),
                        he(Y(o).toString()) || o.push(v),
                        o.push(f + "}" + E)))),
              (o = U(o, [
                "from" + E,
                this.generateExpression(n.source, r.Sequence, O),
                this.semicolon(l),
              ])),
              o);
        },
        VariableDeclarator: function (n, l) {
          var o = l & M ? O : Be;
          return n.init
            ? [
                this.generateExpression(n.id, r.Assignment, o),
                E,
                "=",
                E,
                this.generateExpression(n.init, r.Assignment, o),
              ]
            : this.generatePattern(n.id, r.Assignment, o);
        },
        VariableDeclaration: function (n, l) {
          var o,
            c,
            d,
            _,
            w,
            k = this;
          (o = [n.kind]), (w = l & M ? ee : Et);
          function L() {
            for (
              _ = n.declarations[0],
                S.comment && _.leadingComments
                  ? (o.push(`
`),
                    o.push(pe(k.generateStatement(_, w))))
                  : (o.push(fe()), o.push(k.generateStatement(_, w))),
                c = 1,
                d = n.declarations.length;
              c < d;
              ++c
            )
              (_ = n.declarations[c]),
                S.comment && _.leadingComments
                  ? (o.push("," + v), o.push(pe(k.generateStatement(_, w))))
                  : (o.push("," + E), o.push(k.generateStatement(_, w)));
          }
          return (
            n.declarations.length > 1 ? se(L) : L(),
            o.push(this.semicolon(l)),
            o
          );
        },
        ThrowStatement: function (n, l) {
          return [
            U("throw", this.generateExpression(n.argument, r.Sequence, O)),
            this.semicolon(l),
          ];
        },
        TryStatement: function (n, l) {
          var o, c, d, _;
          if (
            ((o = ["try", this.maybeBlock(n.block, ee)]),
            (o = this.maybeBlockSuffix(n.block, o)),
            n.handlers)
          )
            for (c = 0, d = n.handlers.length; c < d; ++c)
              (o = U(o, this.generateStatement(n.handlers[c], ee))),
                (n.finalizer || c + 1 !== d) &&
                  (o = this.maybeBlockSuffix(n.handlers[c].body, o));
          else {
            for (_ = n.guardedHandlers || [], c = 0, d = _.length; c < d; ++c)
              (o = U(o, this.generateStatement(_[c], ee))),
                (n.finalizer || c + 1 !== d) &&
                  (o = this.maybeBlockSuffix(_[c].body, o));
            if (n.handler)
              if (Array.isArray(n.handler))
                for (c = 0, d = n.handler.length; c < d; ++c)
                  (o = U(o, this.generateStatement(n.handler[c], ee))),
                    (n.finalizer || c + 1 !== d) &&
                      (o = this.maybeBlockSuffix(n.handler[c].body, o));
              else
                (o = U(o, this.generateStatement(n.handler, ee))),
                  n.finalizer && (o = this.maybeBlockSuffix(n.handler.body, o));
          }
          return (
            n.finalizer &&
              (o = U(o, ["finally", this.maybeBlock(n.finalizer, ee)])),
            o
          );
        },
        SwitchStatement: function (n, l) {
          var o,
            c,
            d,
            _,
            w,
            k = this;
          if (
            (se(function () {
              o = [
                "switch" + E + "(",
                k.generateExpression(n.discriminant, r.Sequence, O),
                ")" + E + "{" + v,
              ];
            }),
            n.cases)
          )
            for (w = ee, d = 0, _ = n.cases.length; d < _; ++d)
              d === _ - 1 && (w |= Q),
                (c = pe(this.generateStatement(n.cases[d], w))),
                o.push(c),
                he(Y(c).toString()) || o.push(v);
          return o.push(pe("}")), o;
        },
        SwitchCase: function (n, l) {
          var o,
            c,
            d,
            _,
            w,
            k = this;
          return (
            se(function () {
              for (
                n.test
                  ? (o = [
                      U("case", k.generateExpression(n.test, r.Sequence, O)),
                      ":",
                    ])
                  : (o = ["default:"]),
                  d = 0,
                  _ = n.consequent.length,
                  _ &&
                    n.consequent[0].type === t.BlockStatement &&
                    ((c = k.maybeBlock(n.consequent[0], ee)),
                    o.push(c),
                    (d = 1)),
                  d !== _ && !he(Y(o).toString()) && o.push(v),
                  w = ee;
                d < _;
                ++d
              )
                d === _ - 1 && l & Q && (w |= Q),
                  (c = pe(k.generateStatement(n.consequent[d], w))),
                  o.push(c),
                  d + 1 !== _ && !he(Y(c).toString()) && o.push(v);
            }),
            o
          );
        },
        IfStatement: function (n, l) {
          var o,
            c,
            d,
            _ = this;
          return (
            se(function () {
              o = [
                "if" + E + "(",
                _.generateExpression(n.test, r.Sequence, O),
                ")",
              ];
            }),
            (d = l & Q),
            (c = ee),
            d && (c |= Q),
            n.alternate
              ? (o.push(this.maybeBlock(n.consequent, ee)),
                (o = this.maybeBlockSuffix(n.consequent, o)),
                n.alternate.type === t.IfStatement
                  ? (o = U(o, [
                      "else ",
                      this.generateStatement(n.alternate, c),
                    ]))
                  : (o = U(o, U("else", this.maybeBlock(n.alternate, c)))))
              : o.push(this.maybeBlock(n.consequent, c)),
            o
          );
        },
        ForStatement: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              (o = ["for" + E + "("]),
                n.init
                  ? n.init.type === t.VariableDeclaration
                    ? o.push(c.generateStatement(n.init, Et))
                    : (o.push(c.generateExpression(n.init, r.Sequence, Be)),
                      o.push(";"))
                  : o.push(";"),
                n.test &&
                  (o.push(E),
                  o.push(c.generateExpression(n.test, r.Sequence, O))),
                o.push(";"),
                n.update &&
                  (o.push(E),
                  o.push(c.generateExpression(n.update, r.Sequence, O))),
                o.push(")");
            }),
            o.push(this.maybeBlock(n.body, l & Q ? be : ee)),
            o
          );
        },
        ForInStatement: function (n, l) {
          return this.generateIterationForStatement("in", n, l & Q ? be : ee);
        },
        ForOfStatement: function (n, l) {
          return this.generateIterationForStatement("of", n, l & Q ? be : ee);
        },
        LabeledStatement: function (n, l) {
          return [n.label.name + ":", this.maybeBlock(n.body, l & Q ? be : ee)];
        },
        Program: function (n, l) {
          var o, c, d, _, w;
          for (
            _ = n.body.length,
              o = [
                I && _ > 0
                  ? `
`
                  : "",
              ],
              w = Rn,
              d = 0;
            d < _;
            ++d
          )
            !I && d === _ - 1 && (w |= Q),
              B &&
                (d === 0 &&
                  (n.body[0].leadingComments ||
                    He(n.range[0], n.body[d].range[0], o)),
                d > 0 &&
                  !n.body[d - 1].trailingComments &&
                  !n.body[d].leadingComments &&
                  He(n.body[d - 1].range[1], n.body[d].range[0], o)),
              (c = pe(this.generateStatement(n.body[d], w))),
              o.push(c),
              d + 1 < _ &&
                !he(Y(c).toString()) &&
                ((B && n.body[d + 1].leadingComments) || o.push(v)),
              B &&
                d === _ - 1 &&
                (n.body[d].trailingComments ||
                  He(n.body[d].range[1], n.range[1], o));
          return o;
        },
        FunctionDeclaration: function (n, l) {
          return [
            rt(n, !0),
            "function",
            xt(n) || fe(),
            n.id ? ge(n.id) : "",
            this.generateFunctionBody(n),
          ];
        },
        ReturnStatement: function (n, l) {
          return n.argument
            ? [
                U("return", this.generateExpression(n.argument, r.Sequence, O)),
                this.semicolon(l),
              ]
            : ["return" + this.semicolon(l)];
        },
        WhileStatement: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              o = [
                "while" + E + "(",
                c.generateExpression(n.test, r.Sequence, O),
                ")",
              ];
            }),
            o.push(this.maybeBlock(n.body, l & Q ? be : ee)),
            o
          );
        },
        WithStatement: function (n, l) {
          var o,
            c = this;
          return (
            se(function () {
              o = [
                "with" + E + "(",
                c.generateExpression(n.object, r.Sequence, O),
                ")",
              ];
            }),
            o.push(this.maybeBlock(n.body, l & Q ? be : ee)),
            o
          );
        },
      }),
      Lr(ae.prototype, ae.Statement),
      (ae.Expression = {
        SequenceExpression: function (n, l, o) {
          var c, d, _;
          for (
            r.Sequence < l && (o |= M), c = [], d = 0, _ = n.expressions.length;
            d < _;
            ++d
          )
            c.push(this.generateExpression(n.expressions[d], r.Assignment, o)),
              d + 1 < _ && c.push("," + E);
          return le(c, r.Sequence, l);
        },
        AssignmentExpression: function (n, l, o) {
          return this.generateAssignment(n.left, n.right, n.operator, l, o);
        },
        ArrowFunctionExpression: function (n, l, o) {
          return le(this.generateFunctionBody(n), r.ArrowFunction, l);
        },
        ConditionalExpression: function (n, l, o) {
          return (
            r.Conditional < l && (o |= M),
            le(
              [
                this.generateExpression(n.test, r.Coalesce, o),
                E + "?" + E,
                this.generateExpression(n.consequent, r.Assignment, o),
                E + ":" + E,
                this.generateExpression(n.alternate, r.Assignment, o),
              ],
              r.Conditional,
              l,
            )
          );
        },
        LogicalExpression: function (n, l, o) {
          return (
            n.operator === "??" && (o |= Ce), this.BinaryExpression(n, l, o)
          );
        },
        BinaryExpression: function (n, l, o) {
          var c, d, _, w, k, L;
          return (
            (w = i[n.operator]),
            (d = n.operator === "**" ? r.Postfix : w),
            (_ = n.operator === "**" ? w : w + 1),
            w < l && (o |= M),
            (k = this.generateExpression(n.left, d, o)),
            (L = k.toString()),
            L.charCodeAt(L.length - 1) === 47 &&
            a.code.isIdentifierPartES5(n.operator.charCodeAt(0))
              ? (c = [k, fe(), n.operator])
              : (c = U(k, n.operator)),
            (k = this.generateExpression(n.right, _, o)),
            (n.operator === "/" && k.toString().charAt(0) === "/") ||
            (n.operator.slice(-1) === "<" && k.toString().slice(0, 3) === "!--")
              ? (c.push(fe()), c.push(k))
              : (c = U(c, k)),
            n.operator === "in" && !(o & M)
              ? ["(", c, ")"]
              : (n.operator === "||" || n.operator === "&&") && o & Ce
                ? ["(", c, ")"]
                : le(c, w, l)
          );
        },
        CallExpression: function (n, l, o) {
          var c, d, _;
          for (
            c = [this.generateExpression(n.callee, r.Call, Je)],
              n.optional && c.push("?."),
              c.push("("),
              d = 0,
              _ = n.arguments.length;
            d < _;
            ++d
          )
            c.push(this.generateExpression(n.arguments[d], r.Assignment, O)),
              d + 1 < _ && c.push("," + E);
          return c.push(")"), o & X ? le(c, r.Call, l) : ["(", c, ")"];
        },
        ChainExpression: function (n, l, o) {
          r.OptionalChaining < l && (o |= X);
          var c = this.generateExpression(n.expression, r.OptionalChaining, o);
          return le(c, r.OptionalChaining, l);
        },
        NewExpression: function (n, l, o) {
          var c, d, _, w, k;
          if (
            ((d = n.arguments.length),
            (k = o & ne && !b && d === 0 ? Le : Ve),
            (c = U("new", this.generateExpression(n.callee, r.New, k))),
            !(o & ne) || b || d > 0)
          ) {
            for (c.push("("), _ = 0, w = d; _ < w; ++_)
              c.push(this.generateExpression(n.arguments[_], r.Assignment, O)),
                _ + 1 < w && c.push("," + E);
            c.push(")");
          }
          return le(c, r.New, l);
        },
        MemberExpression: function (n, l, o) {
          var c, d;
          return (
            (c = [this.generateExpression(n.object, r.Call, o & X ? Je : Ve)]),
            n.computed
              ? (n.optional && c.push("?."),
                c.push("["),
                c.push(
                  this.generateExpression(
                    n.property,
                    r.Sequence,
                    o & X ? O : Le,
                  ),
                ),
                c.push("]"))
              : (!n.optional &&
                  n.object.type === t.Literal &&
                  typeof n.object.value == "number" &&
                  ((d = Y(c).toString()),
                  d.indexOf(".") < 0 &&
                    !/[eExX]/.test(d) &&
                    a.code.isDecimalDigit(d.charCodeAt(d.length - 1)) &&
                    !(d.length >= 2 && d.charCodeAt(0) === 48) &&
                    c.push(" ")),
                c.push(n.optional ? "?." : "."),
                c.push(ge(n.property))),
            le(c, r.Member, l)
          );
        },
        MetaProperty: function (n, l, o) {
          var c;
          return (
            (c = []),
            c.push(typeof n.meta == "string" ? n.meta : ge(n.meta)),
            c.push("."),
            c.push(typeof n.property == "string" ? n.property : ge(n.property)),
            le(c, r.Member, l)
          );
        },
        UnaryExpression: function (n, l, o) {
          var c, d, _, w, k;
          return (
            (d = this.generateExpression(n.argument, r.Unary, O)),
            E === ""
              ? (c = U(n.operator, d))
              : ((c = [n.operator]),
                n.operator.length > 2
                  ? (c = U(c, d))
                  : ((w = Y(c).toString()),
                    (k = w.charCodeAt(w.length - 1)),
                    (_ = d.toString().charCodeAt(0)),
                    (((k === 43 || k === 45) && k === _) ||
                      (a.code.isIdentifierPartES5(k) &&
                        a.code.isIdentifierPartES5(_))) &&
                      c.push(fe()),
                    c.push(d))),
            le(c, r.Unary, l)
          );
        },
        YieldExpression: function (n, l, o) {
          var c;
          return (
            n.delegate ? (c = "yield*") : (c = "yield"),
            n.argument &&
              (c = U(c, this.generateExpression(n.argument, r.Yield, O))),
            le(c, r.Yield, l)
          );
        },
        AwaitExpression: function (n, l, o) {
          var c = U(
            n.all ? "await*" : "await",
            this.generateExpression(n.argument, r.Await, O),
          );
          return le(c, r.Await, l);
        },
        UpdateExpression: function (n, l, o) {
          return n.prefix
            ? le(
                [n.operator, this.generateExpression(n.argument, r.Unary, O)],
                r.Unary,
                l,
              )
            : le(
                [this.generateExpression(n.argument, r.Postfix, O), n.operator],
                r.Postfix,
                l,
              );
        },
        FunctionExpression: function (n, l, o) {
          var c = [rt(n, !0), "function"];
          return (
            n.id
              ? (c.push(xt(n) || fe()), c.push(ge(n.id)))
              : c.push(xt(n) || E),
            c.push(this.generateFunctionBody(n)),
            c
          );
        },
        ArrayPattern: function (n, l, o) {
          return this.ArrayExpression(n, l, o, !0);
        },
        ArrayExpression: function (n, l, o, c) {
          var d,
            _,
            w = this;
          return n.elements.length
            ? ((_ = c ? !1 : n.elements.length > 1),
              (d = ["[", _ ? v : ""]),
              se(function (k) {
                var L, J;
                for (L = 0, J = n.elements.length; L < J; ++L)
                  n.elements[L]
                    ? (d.push(_ ? k : ""),
                      d.push(
                        w.generateExpression(n.elements[L], r.Assignment, O),
                      ))
                    : (_ && d.push(k), L + 1 === J && d.push(",")),
                    L + 1 < J && d.push("," + (_ ? v : E));
              }),
              _ && !he(Y(d).toString()) && d.push(v),
              d.push(_ ? f : ""),
              d.push("]"),
              d)
            : "[]";
        },
        RestElement: function (n, l, o) {
          return "..." + this.generatePattern(n.argument);
        },
        ClassExpression: function (n, l, o) {
          var c, d;
          return (
            (c = ["class"]),
            n.id && (c = U(c, this.generateExpression(n.id, r.Sequence, O))),
            n.superClass &&
              ((d = U(
                "extends",
                this.generateExpression(n.superClass, r.Unary, O),
              )),
              (c = U(c, d))),
            c.push(E),
            c.push(this.generateStatement(n.body, be)),
            c
          );
        },
        MethodDefinition: function (n, l, o) {
          var c, d;
          return (
            n.static ? (c = ["static" + E]) : (c = []),
            n.kind === "get" || n.kind === "set"
              ? (d = [
                  U(n.kind, this.generatePropertyKey(n.key, n.computed)),
                  this.generateFunctionBody(n.value),
                ])
              : (d = [
                  jr(n),
                  this.generatePropertyKey(n.key, n.computed),
                  this.generateFunctionBody(n.value),
                ]),
            U(c, d)
          );
        },
        Property: function (n, l, o) {
          return n.kind === "get" || n.kind === "set"
            ? [
                n.kind,
                fe(),
                this.generatePropertyKey(n.key, n.computed),
                this.generateFunctionBody(n.value),
              ]
            : n.shorthand
              ? n.value.type === "AssignmentPattern"
                ? this.AssignmentPattern(n.value, r.Sequence, O)
                : this.generatePropertyKey(n.key, n.computed)
              : n.method
                ? [
                    jr(n),
                    this.generatePropertyKey(n.key, n.computed),
                    this.generateFunctionBody(n.value),
                  ]
                : [
                    this.generatePropertyKey(n.key, n.computed),
                    ":" + E,
                    this.generateExpression(n.value, r.Assignment, O),
                  ];
        },
        ObjectExpression: function (n, l, o) {
          var c,
            d,
            _,
            w = this;
          return n.properties.length
            ? ((c = n.properties.length > 1),
              se(function () {
                _ = w.generateExpression(n.properties[0], r.Sequence, O);
              }),
              !c && !Vn(Y(_).toString())
                ? ["{", E, _, E, "}"]
                : (se(function (k) {
                    var L, J;
                    if (((d = ["{", v, k, _]), c))
                      for (
                        d.push("," + v), L = 1, J = n.properties.length;
                        L < J;
                        ++L
                      )
                        d.push(k),
                          d.push(
                            w.generateExpression(
                              n.properties[L],
                              r.Sequence,
                              O,
                            ),
                          ),
                          L + 1 < J && d.push("," + v);
                  }),
                  he(Y(d).toString()) || d.push(v),
                  d.push(f),
                  d.push("}"),
                  d))
            : "{}";
        },
        AssignmentPattern: function (n, l, o) {
          return this.generateAssignment(n.left, n.right, "=", l, o);
        },
        ObjectPattern: function (n, l, o) {
          var c,
            d,
            _,
            w,
            k,
            L = this;
          if (!n.properties.length) return "{}";
          if (((w = !1), n.properties.length === 1))
            (k = n.properties[0]),
              k.type === t.Property &&
                k.value.type !== t.Identifier &&
                (w = !0);
          else
            for (d = 0, _ = n.properties.length; d < _; ++d)
              if (
                ((k = n.properties[d]), k.type === t.Property && !k.shorthand)
              ) {
                w = !0;
                break;
              }
          return (
            (c = ["{", w ? v : ""]),
            se(function (J) {
              var ce, qe;
              for (ce = 0, qe = n.properties.length; ce < qe; ++ce)
                c.push(w ? J : ""),
                  c.push(L.generateExpression(n.properties[ce], r.Sequence, O)),
                  ce + 1 < qe && c.push("," + (w ? v : E));
            }),
            w && !he(Y(c).toString()) && c.push(v),
            c.push(w ? f : ""),
            c.push("}"),
            c
          );
        },
        ThisExpression: function (n, l, o) {
          return "this";
        },
        Super: function (n, l, o) {
          return "super";
        },
        Identifier: function (n, l, o) {
          return ge(n);
        },
        ImportDefaultSpecifier: function (n, l, o) {
          return ge(n.id || n.local);
        },
        ImportNamespaceSpecifier: function (n, l, o) {
          var c = ["*"],
            d = n.id || n.local;
          return d && c.push(E + "as" + fe() + ge(d)), c;
        },
        ImportSpecifier: function (n, l, o) {
          var c = n.imported,
            d = [c.name],
            _ = n.local;
          return (
            _ && _.name !== c.name && d.push(fe() + "as" + fe() + ge(_)), d
          );
        },
        ExportSpecifier: function (n, l, o) {
          var c = n.local,
            d = [c.name],
            _ = n.exported;
          return (
            _ && _.name !== c.name && d.push(fe() + "as" + fe() + ge(_)), d
          );
        },
        Literal: function (n, l, o) {
          var c;
          if (n.hasOwnProperty("raw") && g && S.raw)
            try {
              if (
                ((c = g(n.raw).body[0].expression),
                c.type === t.Literal && c.value === n.value)
              )
                return n.raw;
            } catch {}
          return n.regex
            ? "/" + n.regex.pattern + "/" + n.regex.flags
            : typeof n.value == "bigint"
              ? n.value.toString() + "n"
              : n.bigint
                ? n.bigint + "n"
                : n.value === null
                  ? "null"
                  : typeof n.value == "string"
                    ? zn(n.value)
                    : typeof n.value == "number"
                      ? jn(n.value)
                      : typeof n.value == "boolean"
                        ? n.value
                          ? "true"
                          : "false"
                        : qn(n.value);
        },
        GeneratorExpression: function (n, l, o) {
          return this.ComprehensionExpression(n, l, o);
        },
        ComprehensionExpression: function (n, l, o) {
          var c,
            d,
            _,
            w,
            k = this;
          return (
            (c = n.type === t.GeneratorExpression ? ["("] : ["["]),
            S.moz.comprehensionExpressionStartsWithAssignment &&
              ((w = this.generateExpression(n.body, r.Assignment, O)),
              c.push(w)),
            n.blocks &&
              se(function () {
                for (d = 0, _ = n.blocks.length; d < _; ++d)
                  (w = k.generateExpression(n.blocks[d], r.Sequence, O)),
                    d > 0 || S.moz.comprehensionExpressionStartsWithAssignment
                      ? (c = U(c, w))
                      : c.push(w);
              }),
            n.filter &&
              ((c = U(c, "if" + E)),
              (w = this.generateExpression(n.filter, r.Sequence, O)),
              (c = U(c, ["(", w, ")"]))),
            S.moz.comprehensionExpressionStartsWithAssignment ||
              ((w = this.generateExpression(n.body, r.Assignment, O)),
              (c = U(c, w))),
            c.push(n.type === t.GeneratorExpression ? ")" : "]"),
            c
          );
        },
        ComprehensionBlock: function (n, l, o) {
          var c;
          return (
            n.left.type === t.VariableDeclaration
              ? (c = [
                  n.left.kind,
                  fe(),
                  this.generateStatement(n.left.declarations[0], Et),
                ])
              : (c = this.generateExpression(n.left, r.Call, O)),
            (c = U(c, n.of ? "of" : "in")),
            (c = U(c, this.generateExpression(n.right, r.Sequence, O))),
            ["for" + E + "(", c, ")"]
          );
        },
        SpreadElement: function (n, l, o) {
          return ["...", this.generateExpression(n.argument, r.Assignment, O)];
        },
        TaggedTemplateExpression: function (n, l, o) {
          var c = Je;
          o & X || (c = Ve);
          var d = [
            this.generateExpression(n.tag, r.Call, c),
            this.generateExpression(n.quasi, r.Primary, Ct),
          ];
          return le(d, r.TaggedTemplate, l);
        },
        TemplateElement: function (n, l, o) {
          return n.value.raw;
        },
        TemplateLiteral: function (n, l, o) {
          var c, d, _;
          for (c = ["`"], d = 0, _ = n.quasis.length; d < _; ++d)
            c.push(this.generateExpression(n.quasis[d], r.Primary, O)),
              d + 1 < _ &&
                (c.push("${" + E),
                c.push(
                  this.generateExpression(n.expressions[d], r.Sequence, O),
                ),
                c.push(E + "}"));
          return c.push("`"), c;
        },
        ModuleSpecifier: function (n, l, o) {
          return this.Literal(n, l, o);
        },
        ImportExpression: function (n, l, o) {
          return le(
            [
              "import(",
              this.generateExpression(n.source, r.Assignment, O),
              ")",
            ],
            r.Call,
            l,
          );
        },
      }),
      Lr(ae.prototype, ae.Expression),
      (ae.prototype.generateExpression = function (n, l, o) {
        var c, d;
        return (
          (d = n.type || t.Property),
          S.verbatim && n.hasOwnProperty(S.verbatim)
            ? Hn(n, l)
            : ((c = this[d](n, l, o)), S.comment && (c = Mr(n, c)), Y(c, n))
        );
      }),
      (ae.prototype.generateStatement = function (n, l) {
        var o, c;
        return (
          (o = this[n.type](n, l)),
          S.comment && (o = Mr(n, o)),
          (c = Y(o).toString()),
          n.type === t.Program &&
            !I &&
            v === "" &&
            c.charAt(c.length - 1) ===
              `
` &&
            (o = x ? Y(o).replaceRight(/\s+$/, "") : c.replace(/\s+$/, "")),
          Y(o, n)
        );
      });
    function Xn(n) {
      var l;
      if (((l = new ae()), q(n))) return l.generateStatement(n, ee);
      if (W(n)) return l.generateExpression(n, r.Sequence, O);
      throw new Error("Unknown node type: " + n.type);
    }
    function Qn(n, l) {
      var o = Nr(),
        c,
        d;
      return (
        l != null
          ? (typeof l.indent == "string" && (o.format.indent.style = l.indent),
            typeof l.base == "number" && (o.format.indent.base = l.base),
            (l = yt(o, l)),
            (p = l.format.indent.style),
            typeof l.base == "string"
              ? (f = l.base)
              : (f = je(p, l.format.indent.base)))
          : ((l = o),
            (p = l.format.indent.style),
            (f = je(p, l.format.indent.base))),
        (D = l.format.json),
        (m = l.format.renumber),
        (y = D ? !1 : l.format.hexadecimal),
        (A = D ? "double" : l.format.quotes),
        (C = l.format.escapeless),
        (v = l.format.newline),
        (E = l.format.space),
        l.format.compact && (v = E = p = f = ""),
        (b = l.format.parentheses),
        (T = l.format.semicolons),
        (I = l.format.safeConcatenation),
        (V = l.directive),
        (g = D ? null : l.parse),
        (x = l.sourceMap),
        (F = l.sourceCode),
        (B = l.format.preserveBlankLines && F !== null),
        (S = l),
        x &&
          (e.browser ? (u = lt.sourceMap.SourceNode) : (u = Fu().SourceNode)),
        (c = Xn(n)),
        x
          ? ((d = c.toStringWithSourceMap({
              file: l.file,
              sourceRoot: l.sourceMapRoot,
            })),
            l.sourceContent &&
              d.map.setSourceContent(l.sourceMap, l.sourceContent),
            l.sourceMapWithCode ? d : d.map.toString())
          : ((d = { code: c.toString(), map: null }),
            l.sourceMapWithCode ? d : d.code)
      );
    }
    (R = {
      indent: { style: "", base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1,
    }),
      (N = Nr().format),
      (e.version = Vu.version),
      (e.generate = Qn),
      (e.attachComments = s.attachComments),
      (e.Precedence = yt({}, r)),
      (e.browser = !1),
      (e.FORMAT_MINIFY = R),
      (e.FORMAT_DEFAULTS = N);
  })();
})(_i);
var sr = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict:
      "implements interface let package private protected public static yield",
    strictBind: "eval arguments",
  },
  ar =
    "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
  ju = {
    5: ar,
    "5module": ar + " export import",
    6: ar + " const class extends export import super",
  },
  qu = /^in(stanceof)?$/,
  Dr =
    "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
  Oi =
    "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
  Uu = new RegExp("[" + Dr + "]"),
  Wu = new RegExp("[" + Dr + Oi + "]");
Dr = Oi = null;
var Ri = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
    48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5,
    39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22,
    11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2,
    2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111,
    72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20,
    28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47,
    15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46,
    39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3,
    21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0,
    72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95,
    7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56,
    264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2,
    31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050,
    582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129,
    74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2,
    18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3,
    1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2,
    0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
    30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0,
    1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0,
    2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2,
    6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148,
    12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
  ],
  Gu = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
    574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9,
    7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0,
    161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193,
    17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12,
    9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9,
    120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7,
    17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2,
    4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82,
    0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513,
    54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262,
    6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
  ];
function lr(e, t) {
  for (var r = 65536, i = 0; i < t.length; i += 2) {
    if (((r += t[i]), r > e)) return !1;
    if (((r += t[i + 1]), r >= e)) return !0;
  }
}
function Te(e, t) {
  return e < 65
    ? e === 36
    : e < 91
      ? !0
      : e < 97
        ? e === 95
        : e < 123
          ? !0
          : e <= 65535
            ? e >= 170 && Uu.test(String.fromCharCode(e))
            : t === !1
              ? !1
              : lr(e, Ri);
}
function We(e, t) {
  return e < 48
    ? e === 36
    : e < 58
      ? !0
      : e < 65
        ? !1
        : e < 91
          ? !0
          : e < 97
            ? e === 95
            : e < 123
              ? !0
              : e <= 65535
                ? e >= 170 && Wu.test(String.fromCharCode(e))
                : t === !1
                  ? !1
                  : lr(e, Ri) || lr(e, Gu);
}
var K = function (t, r) {
  r === void 0 && (r = {}),
    (this.label = t),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function Ee(e, t) {
  return new K(e, { beforeExpr: !0, binop: t });
}
var ye = { beforeExpr: !0 },
  De = { startsExpr: !0 },
  Pt = {};
function H(e, t) {
  return t === void 0 && (t = {}), (t.keyword = e), (Pt[e] = new K(e, t));
}
var h = {
    num: new K("num", De),
    regexp: new K("regexp", De),
    string: new K("string", De),
    name: new K("name", De),
    eof: new K("eof"),
    bracketL: new K("[", { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new K("]"),
    braceL: new K("{", { beforeExpr: !0, startsExpr: !0 }),
    braceR: new K("}"),
    parenL: new K("(", { beforeExpr: !0, startsExpr: !0 }),
    parenR: new K(")"),
    comma: new K(",", ye),
    semi: new K(";", ye),
    colon: new K(":", ye),
    dot: new K("."),
    question: new K("?", ye),
    questionDot: new K("?."),
    arrow: new K("=>", ye),
    template: new K("template"),
    invalidTemplate: new K("invalidTemplate"),
    ellipsis: new K("...", ye),
    backQuote: new K("`", De),
    dollarBraceL: new K("${", { beforeExpr: !0, startsExpr: !0 }),
    eq: new K("=", { beforeExpr: !0, isAssign: !0 }),
    assign: new K("_=", { beforeExpr: !0, isAssign: !0 }),
    incDec: new K("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new K("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: Ee("||", 1),
    logicalAND: Ee("&&", 2),
    bitwiseOR: Ee("|", 3),
    bitwiseXOR: Ee("^", 4),
    bitwiseAND: Ee("&", 5),
    equality: Ee("==/!=/===/!==", 6),
    relational: Ee("</>/<=/>=", 7),
    bitShift: Ee("<</>>/>>>", 8),
    plusMin: new K("+/-", {
      beforeExpr: !0,
      binop: 9,
      prefix: !0,
      startsExpr: !0,
    }),
    modulo: Ee("%", 10),
    star: Ee("*", 10),
    slash: Ee("/", 10),
    starstar: new K("**", { beforeExpr: !0 }),
    coalesce: Ee("??", 1),
    _break: H("break"),
    _case: H("case", ye),
    _catch: H("catch"),
    _continue: H("continue"),
    _debugger: H("debugger"),
    _default: H("default", ye),
    _do: H("do", { isLoop: !0, beforeExpr: !0 }),
    _else: H("else", ye),
    _finally: H("finally"),
    _for: H("for", { isLoop: !0 }),
    _function: H("function", De),
    _if: H("if"),
    _return: H("return", ye),
    _switch: H("switch"),
    _throw: H("throw", ye),
    _try: H("try"),
    _var: H("var"),
    _const: H("const"),
    _while: H("while", { isLoop: !0 }),
    _with: H("with"),
    _new: H("new", { beforeExpr: !0, startsExpr: !0 }),
    _this: H("this", De),
    _super: H("super", De),
    _class: H("class", De),
    _extends: H("extends", ye),
    _export: H("export"),
    _import: H("import", De),
    _null: H("null", De),
    _true: H("true", De),
    _false: H("false", De),
    _in: H("in", { beforeExpr: !0, binop: 7 }),
    _instanceof: H("instanceof", { beforeExpr: !0, binop: 7 }),
    _typeof: H("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: H("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: H("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  Ae = /\r\n?|\n|\u2028|\u2029/,
  Qe = new RegExp(Ae.source, "g");
function et(e, t) {
  return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233));
}
var Ar = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  Fe = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Mi = Object.prototype,
  zu = Mi.hasOwnProperty,
  $u = Mi.toString;
function Nt(e, t) {
  return zu.call(e, t);
}
var ui =
  Array.isArray ||
  function (e) {
    return $u.call(e) === "[object Array]";
  };
function Ue(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var Ke = function (t, r) {
  (this.line = t), (this.column = r);
};
Ke.prototype.offset = function (t) {
  return new Ke(this.line, this.column + t);
};
var mt = function (t, r, i) {
  (this.start = r),
    (this.end = i),
    t.sourceFile !== null && (this.source = t.sourceFile);
};
function Cr(e, t) {
  for (var r = 1, i = 0; ; ) {
    Qe.lastIndex = i;
    var u = Qe.exec(e);
    if (u && u.index < t) ++r, (i = u.index + u[0].length);
    else return new Ke(r, t - i);
  }
}
var Bt = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1,
};
function Ju(e) {
  var t = {};
  for (var r in Bt) t[r] = e && Nt(e, r) ? e[r] : Bt[r];
  if (
    (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
    t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5),
    ui(t.onToken))
  ) {
    var i = t.onToken;
    t.onToken = function (u) {
      return i.push(u);
    };
  }
  return ui(t.onComment) && (t.onComment = Hu(t, t.onComment)), t;
}
function Hu(e, t) {
  return function (r, i, u, s, a, f) {
    var p = { type: r ? "Block" : "Line", value: i, start: u, end: s };
    e.locations && (p.loc = new mt(this, a, f)),
      e.ranges && (p.range = [u, s]),
      t.push(p);
  };
}
var ct = 1,
  gt = 2,
  Er = ct | gt,
  Vi = 4,
  ji = 8,
  qi = 16,
  Ui = 32,
  Wi = 64,
  Gi = 128;
function yr(e, t) {
  return gt | (e ? Vi : 0) | (t ? ji : 0);
}
var si = 0,
  xr = 1,
  Ie = 2,
  zi = 3,
  $i = 4,
  Ji = 5,
  re = function (t, r, i) {
    (this.options = t = Ju(t)),
      (this.sourceFile = t.sourceFile),
      (this.keywords = Ue(
        ju[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5],
      ));
    var u = "";
    if (t.allowReserved !== !0) {
      for (var s = t.ecmaVersion; !(u = sr[s]); s--);
      t.sourceType === "module" && (u += " await");
    }
    this.reservedWords = Ue(u);
    var a = (u ? u + " " : "") + sr.strict;
    (this.reservedWordsStrict = Ue(a)),
      (this.reservedWordsStrictBind = Ue(a + " " + sr.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      i
        ? ((this.pos = i),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              i - 1,
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(Ae).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = h.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = t.sourceType === "module"),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      this.pos === 0 &&
        t.allowHashBang &&
        this.input.slice(0, 2) === "#!" &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(ct),
      (this.regexpState = null);
  },
  ze = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
  };
re.prototype.parse = function () {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
ze.inFunction.get = function () {
  return (this.currentVarScope().flags & gt) > 0;
};
ze.inGenerator.get = function () {
  return (this.currentVarScope().flags & ji) > 0;
};
ze.inAsync.get = function () {
  return (this.currentVarScope().flags & Vi) > 0;
};
ze.allowSuper.get = function () {
  return (this.currentThisScope().flags & Wi) > 0;
};
ze.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & Gi) > 0;
};
ze.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
re.prototype.inNonArrowFunction = function () {
  return (this.currentThisScope().flags & gt) > 0;
};
re.extend = function () {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  for (var i = this, u = 0; u < t.length; u++) i = t[u](i);
  return i;
};
re.parse = function (t, r) {
  return new this(r, t).parse();
};
re.parseExpressionAt = function (t, r, i) {
  var u = new this(i, t, r);
  return u.nextToken(), u.parseExpression();
};
re.tokenizer = function (t, r) {
  return new this(r, t);
};
Object.defineProperties(re.prototype, ze);
var me = re.prototype,
  Xu = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
me.strictDirective = function (e) {
  for (;;) {
    (Fe.lastIndex = e), (e += Fe.exec(this.input)[0].length);
    var t = Xu.exec(this.input.slice(e));
    if (!t) return !1;
    if ((t[1] || t[2]) === "use strict") {
      Fe.lastIndex = e + t[0].length;
      var r = Fe.exec(this.input),
        i = r.index + r[0].length,
        u = this.input.charAt(i);
      return (
        u === ";" ||
        u === "}" ||
        (Ae.test(r[0]) &&
          !(
            /[(`.[+\-/*%<>=,?^&]/.test(u) ||
            (u === "!" && this.input.charAt(i + 1) === "=")
          ))
      );
    }
    (e += t[0].length),
      (Fe.lastIndex = e),
      (e += Fe.exec(this.input)[0].length),
      this.input[e] === ";" && e++;
  }
};
me.eat = function (e) {
  return this.type === e ? (this.next(), !0) : !1;
};
me.isContextual = function (e) {
  return this.type === h.name && this.value === e && !this.containsEsc;
};
me.eatContextual = function (e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
me.expectContextual = function (e) {
  this.eatContextual(e) || this.unexpected();
};
me.canInsertSemicolon = function () {
  return (
    this.type === h.eof ||
    this.type === h.braceR ||
    Ae.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
me.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return (
      this.options.onInsertedSemicolon &&
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
      !0
    );
};
me.semicolon = function () {
  !this.eat(h.semi) && !this.insertSemicolon() && this.unexpected();
};
me.afterTrailingComma = function (e, t) {
  if (this.type === e)
    return (
      this.options.onTrailingComma &&
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
      t || this.next(),
      !0
    );
};
me.expect = function (e) {
  this.eat(e) || this.unexpected();
};
me.unexpected = function (e) {
  this.raise(e ?? this.start, "Unexpected token");
};
function Lt() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
me.checkPatternErrors = function (e, t) {
  if (e) {
    e.trailingComma > -1 &&
      this.raiseRecoverable(
        e.trailingComma,
        "Comma is not permitted after the rest element",
      );
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
me.checkExpressionErrors = function (e, t) {
  if (!e) return !1;
  var r = e.shorthandAssign,
    i = e.doubleProto;
  if (!t) return r >= 0 || i >= 0;
  r >= 0 &&
    this.raise(
      r,
      "Shorthand property assignments are valid only in destructuring patterns",
    ),
    i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property");
};
me.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, "Yield expression cannot be a default value"),
    this.awaitPos &&
      this.raise(this.awaitPos, "Await expression cannot be a default value");
};
me.isSimpleAssignTarget = function (e) {
  return e.type === "ParenthesizedExpression"
    ? this.isSimpleAssignTarget(e.expression)
    : e.type === "Identifier" || e.type === "MemberExpression";
};
var G = re.prototype;
G.parseTopLevel = function (e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== h.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (
      var i = 0, u = Object.keys(this.undefinedExports);
      i < u.length;
      i += 1
    ) {
      var s = u[i];
      this.raiseRecoverable(
        this.undefinedExports[s].start,
        "Export '" + s + "' is not defined",
      );
    }
  return (
    this.adaptDirectivePrologue(e.body),
    this.next(),
    (e.sourceType = this.options.sourceType),
    this.finishNode(e, "Program")
  );
};
var Fr = { kind: "loop" },
  Qu = { kind: "switch" };
G.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
  Fe.lastIndex = this.pos;
  var t = Fe.exec(this.input),
    r = this.pos + t[0].length,
    i = this.input.charCodeAt(r);
  if (i === 91) return !0;
  if (e) return !1;
  if (i === 123) return !0;
  if (Te(i, !0)) {
    for (var u = r + 1; We(this.input.charCodeAt(u), !0); ) ++u;
    var s = this.input.slice(r, u);
    if (!qu.test(s)) return !0;
  }
  return !1;
};
G.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
  Fe.lastIndex = this.pos;
  var e = Fe.exec(this.input),
    t = this.pos + e[0].length;
  return (
    !Ae.test(this.input.slice(this.pos, t)) &&
    this.input.slice(t, t + 8) === "function" &&
    (t + 8 === this.input.length || !We(this.input.charAt(t + 8)))
  );
};
G.parseStatement = function (e, t, r) {
  var i = this.type,
    u = this.startNode(),
    s;
  switch ((this.isLet(e) && ((i = h._var), (s = "let")), i)) {
    case h._break:
    case h._continue:
      return this.parseBreakContinueStatement(u, i.keyword);
    case h._debugger:
      return this.parseDebuggerStatement(u);
    case h._do:
      return this.parseDoStatement(u);
    case h._for:
      return this.parseForStatement(u);
    case h._function:
      return (
        e &&
          (this.strict || (e !== "if" && e !== "label")) &&
          this.options.ecmaVersion >= 6 &&
          this.unexpected(),
        this.parseFunctionStatement(u, !1, !e)
      );
    case h._class:
      return e && this.unexpected(), this.parseClass(u, !0);
    case h._if:
      return this.parseIfStatement(u);
    case h._return:
      return this.parseReturnStatement(u);
    case h._switch:
      return this.parseSwitchStatement(u);
    case h._throw:
      return this.parseThrowStatement(u);
    case h._try:
      return this.parseTryStatement(u);
    case h._const:
    case h._var:
      return (
        (s = s || this.value),
        e && s !== "var" && this.unexpected(),
        this.parseVarStatement(u, s)
      );
    case h._while:
      return this.parseWhileStatement(u);
    case h._with:
      return this.parseWithStatement(u);
    case h.braceL:
      return this.parseBlock(!0, u);
    case h.semi:
      return this.parseEmptyStatement(u);
    case h._export:
    case h._import:
      if (this.options.ecmaVersion > 10 && i === h._import) {
        Fe.lastIndex = this.pos;
        var a = Fe.exec(this.input),
          f = this.pos + a[0].length,
          p = this.input.charCodeAt(f);
        if (p === 40 || p === 46)
          return this.parseExpressionStatement(u, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (t ||
            this.raise(
              this.start,
              "'import' and 'export' may only appear at the top level",
            ),
          this.inModule ||
            this.raise(
              this.start,
              "'import' and 'export' may appear only with 'sourceType: module'",
            )),
        i === h._import ? this.parseImport(u) : this.parseExport(u, r)
      );
    default:
      if (this.isAsyncFunction())
        return (
          e && this.unexpected(),
          this.next(),
          this.parseFunctionStatement(u, !0, !e)
        );
      var D = this.value,
        m = this.parseExpression();
      return i === h.name && m.type === "Identifier" && this.eat(h.colon)
        ? this.parseLabeledStatement(u, D, m, e)
        : this.parseExpressionStatement(u, m);
  }
};
G.parseBreakContinueStatement = function (e, t) {
  var r = t === "break";
  this.next(),
    this.eat(h.semi) || this.insertSemicolon()
      ? (e.label = null)
      : this.type !== h.name
        ? this.unexpected()
        : ((e.label = this.parseIdent()), this.semicolon());
  for (var i = 0; i < this.labels.length; ++i) {
    var u = this.labels[i];
    if (
      (e.label == null || u.name === e.label.name) &&
      ((u.kind != null && (r || u.kind === "loop")) || (e.label && r))
    )
      break;
  }
  return (
    i === this.labels.length && this.raise(e.start, "Unsyntactic " + t),
    this.finishNode(e, r ? "BreakStatement" : "ContinueStatement")
  );
};
G.parseDebuggerStatement = function (e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
G.parseDoStatement = function (e) {
  return (
    this.next(),
    this.labels.push(Fr),
    (e.body = this.parseStatement("do")),
    this.labels.pop(),
    this.expect(h._while),
    (e.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(h.semi) : this.semicolon(),
    this.finishNode(e, "DoWhileStatement")
  );
};
G.parseForStatement = function (e) {
  this.next();
  var t =
    this.options.ecmaVersion >= 9 &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
    this.eatContextual("await")
      ? this.lastTokStart
      : -1;
  if (
    (this.labels.push(Fr),
    this.enterScope(0),
    this.expect(h.parenL),
    this.type === h.semi)
  )
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === h._var || this.type === h._const || r) {
    var i = this.startNode(),
      u = r ? "let" : this.value;
    return (
      this.next(),
      this.parseVar(i, !0, u),
      this.finishNode(i, "VariableDeclaration"),
      (this.type === h._in ||
        (this.options.ecmaVersion >= 6 && this.isContextual("of"))) &&
      i.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 &&
            (this.type === h._in
              ? t > -1 && this.unexpected(t)
              : (e.await = t > -1)),
          this.parseForIn(e, i))
        : (t > -1 && this.unexpected(t), this.parseFor(e, i))
    );
  }
  var s = new Lt(),
    a = this.parseExpression(!0, s);
  return this.type === h._in ||
    (this.options.ecmaVersion >= 6 && this.isContextual("of"))
    ? (this.options.ecmaVersion >= 9 &&
        (this.type === h._in
          ? t > -1 && this.unexpected(t)
          : (e.await = t > -1)),
      this.toAssignable(a, !1, s),
      this.checkLVal(a),
      this.parseForIn(e, a))
    : (this.checkExpressionErrors(s, !0),
      t > -1 && this.unexpected(t),
      this.parseFor(e, a));
};
G.parseFunctionStatement = function (e, t, r) {
  return this.next(), this.parseFunction(e, at | (r ? 0 : cr), !1, t);
};
G.parseIfStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    (e.consequent = this.parseStatement("if")),
    (e.alternate = this.eat(h._else) ? this.parseStatement("if") : null),
    this.finishNode(e, "IfStatement")
  );
};
G.parseReturnStatement = function (e) {
  return (
    !this.inFunction &&
      !this.options.allowReturnOutsideFunction &&
      this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(h.semi) || this.insertSemicolon()
      ? (e.argument = null)
      : ((e.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(e, "ReturnStatement")
  );
};
G.parseSwitchStatement = function (e) {
  this.next(),
    (e.discriminant = this.parseParenExpression()),
    (e.cases = []),
    this.expect(h.braceL),
    this.labels.push(Qu),
    this.enterScope(0);
  for (var t, r = !1; this.type !== h.braceR; )
    if (this.type === h._case || this.type === h._default) {
      var i = this.type === h._case;
      t && this.finishNode(t, "SwitchCase"),
        e.cases.push((t = this.startNode())),
        (t.consequent = []),
        this.next(),
        i
          ? (t.test = this.parseExpression())
          : (r &&
              this.raiseRecoverable(
                this.lastTokStart,
                "Multiple default clauses",
              ),
            (r = !0),
            (t.test = null)),
        this.expect(h.colon);
    } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return (
    this.exitScope(),
    t && this.finishNode(t, "SwitchCase"),
    this.next(),
    this.labels.pop(),
    this.finishNode(e, "SwitchStatement")
  );
};
G.parseThrowStatement = function (e) {
  return (
    this.next(),
    Ae.test(this.input.slice(this.lastTokEnd, this.start)) &&
      this.raise(this.lastTokEnd, "Illegal newline after throw"),
    (e.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(e, "ThrowStatement")
  );
};
var Ku = [];
G.parseTryStatement = function (e) {
  if (
    (this.next(),
    (e.block = this.parseBlock()),
    (e.handler = null),
    this.type === h._catch)
  ) {
    var t = this.startNode();
    if ((this.next(), this.eat(h.parenL))) {
      t.param = this.parseBindingAtom();
      var r = t.param.type === "Identifier";
      this.enterScope(r ? Ui : 0),
        this.checkLVal(t.param, r ? $i : Ie),
        this.expect(h.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(),
        (t.param = null),
        this.enterScope(0);
    (t.body = this.parseBlock(!1)),
      this.exitScope(),
      (e.handler = this.finishNode(t, "CatchClause"));
  }
  return (
    (e.finalizer = this.eat(h._finally) ? this.parseBlock() : null),
    !e.handler &&
      !e.finalizer &&
      this.raise(e.start, "Missing catch or finally clause"),
    this.finishNode(e, "TryStatement")
  );
};
G.parseVarStatement = function (e, t) {
  return (
    this.next(),
    this.parseVar(e, !1, t),
    this.semicolon(),
    this.finishNode(e, "VariableDeclaration")
  );
};
G.parseWhileStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    this.labels.push(Fr),
    (e.body = this.parseStatement("while")),
    this.labels.pop(),
    this.finishNode(e, "WhileStatement")
  );
};
G.parseWithStatement = function (e) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (e.object = this.parseParenExpression()),
    (e.body = this.parseStatement("with")),
    this.finishNode(e, "WithStatement")
  );
};
G.parseEmptyStatement = function (e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
G.parseLabeledStatement = function (e, t, r, i) {
  for (var u = 0, s = this.labels; u < s.length; u += 1) {
    var a = s[u];
    a.name === t &&
      this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (
    var f = this.type.isLoop
        ? "loop"
        : this.type === h._switch
          ? "switch"
          : null,
      p = this.labels.length - 1;
    p >= 0;
    p--
  ) {
    var D = this.labels[p];
    if (D.statementStart === e.start)
      (D.statementStart = this.start), (D.kind = f);
    else break;
  }
  return (
    this.labels.push({ name: t, kind: f, statementStart: this.start }),
    (e.body = this.parseStatement(
      i ? (i.indexOf("label") === -1 ? i + "label" : i) : "label",
    )),
    this.labels.pop(),
    (e.label = r),
    this.finishNode(e, "LabeledStatement")
  );
};
G.parseExpressionStatement = function (e, t) {
  return (
    (e.expression = t),
    this.semicolon(),
    this.finishNode(e, "ExpressionStatement")
  );
};
G.parseBlock = function (e, t, r) {
  for (
    e === void 0 && (e = !0),
      t === void 0 && (t = this.startNode()),
      t.body = [],
      this.expect(h.braceL),
      e && this.enterScope(0);
    this.type !== h.braceR;

  ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return (
    r && (this.strict = !1),
    this.next(),
    e && this.exitScope(),
    this.finishNode(t, "BlockStatement")
  );
};
G.parseFor = function (e, t) {
  return (
    (e.init = t),
    this.expect(h.semi),
    (e.test = this.type === h.semi ? null : this.parseExpression()),
    this.expect(h.semi),
    (e.update = this.type === h.parenR ? null : this.parseExpression()),
    this.expect(h.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, "ForStatement")
  );
};
G.parseForIn = function (e, t) {
  var r = this.type === h._in;
  return (
    this.next(),
    t.type === "VariableDeclaration" &&
    t.declarations[0].init != null &&
    (!r ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      t.kind !== "var" ||
      t.declarations[0].id.type !== "Identifier")
      ? this.raise(
          t.start,
          (r ? "for-in" : "for-of") +
            " loop variable declaration may not have an initializer",
        )
      : t.type === "AssignmentPattern" &&
        this.raise(t.start, "Invalid left-hand side in for-loop"),
    (e.left = t),
    (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(h.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
  );
};
G.parseVar = function (e, t, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var i = this.startNode();
    if (
      (this.parseVarId(i, r),
      this.eat(h.eq)
        ? (i.init = this.parseMaybeAssign(t))
        : r === "const" &&
            !(
              this.type === h._in ||
              (this.options.ecmaVersion >= 6 && this.isContextual("of"))
            )
          ? this.unexpected()
          : i.id.type !== "Identifier" &&
              !(t && (this.type === h._in || this.isContextual("of")))
            ? this.raise(
                this.lastTokEnd,
                "Complex binding patterns require an initialization value",
              )
            : (i.init = null),
      e.declarations.push(this.finishNode(i, "VariableDeclarator")),
      !this.eat(h.comma))
    )
      break;
  }
  return e;
};
G.parseVarId = function (e, t) {
  (e.id = this.parseBindingAtom()),
    this.checkLVal(e.id, t === "var" ? xr : Ie, !1);
};
var at = 1,
  cr = 2,
  Hi = 4;
G.parseFunction = function (e, t, r, i) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !i)) &&
      (this.type === h.star && t & cr && this.unexpected(),
      (e.generator = this.eat(h.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!i),
    t & at &&
      ((e.id = t & Hi && this.type !== h.name ? null : this.parseIdent()),
      e.id &&
        !(t & cr) &&
        this.checkLVal(
          e.id,
          this.strict || e.generator || e.async
            ? this.treatFunctionsAsVar
              ? xr
              : Ie
            : zi,
        ));
  var u = this.yieldPos,
    s = this.awaitPos,
    a = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(yr(e.async, e.generator)),
    t & at || (e.id = this.type === h.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, r, !1),
    (this.yieldPos = u),
    (this.awaitPos = s),
    (this.awaitIdentPos = a),
    this.finishNode(e, t & at ? "FunctionDeclaration" : "FunctionExpression")
  );
};
G.parseFunctionParams = function (e) {
  this.expect(h.parenL),
    (e.params = this.parseBindingList(
      h.parenR,
      !1,
      this.options.ecmaVersion >= 8,
    )),
    this.checkYieldAwaitInDefaultParams();
};
G.parseClass = function (e, t) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
  var i = this.startNode(),
    u = !1;
  for (i.body = [], this.expect(h.braceL); this.type !== h.braceR; ) {
    var s = this.parseClassElement(e.superClass !== null);
    s &&
      (i.body.push(s),
      s.type === "MethodDefinition" &&
        s.kind === "constructor" &&
        (u && this.raise(s.start, "Duplicate constructor in the same class"),
        (u = !0)));
  }
  return (
    (this.strict = r),
    this.next(),
    (e.body = this.finishNode(i, "ClassBody")),
    this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
  );
};
G.parseClassElement = function (e) {
  var t = this;
  if (this.eat(h.semi)) return null;
  var r = this.startNode(),
    i = function (p, D) {
      D === void 0 && (D = !1);
      var m = t.start,
        y = t.startLoc;
      return t.eatContextual(p)
        ? t.type !== h.parenL && (!D || !t.canInsertSemicolon())
          ? !0
          : (r.key && t.unexpected(),
            (r.computed = !1),
            (r.key = t.startNodeAt(m, y)),
            (r.key.name = p),
            t.finishNode(r.key, "Identifier"),
            !1)
        : !1;
    };
  (r.kind = "method"), (r.static = i("static"));
  var u = this.eat(h.star),
    s = !1;
  u ||
    (this.options.ecmaVersion >= 8 && i("async", !0)
      ? ((s = !0), (u = this.options.ecmaVersion >= 9 && this.eat(h.star)))
      : i("get")
        ? (r.kind = "get")
        : i("set") && (r.kind = "set")),
    r.key || this.parsePropertyName(r);
  var a = r.key,
    f = !1;
  return (
    !r.computed &&
    !r.static &&
    ((a.type === "Identifier" && a.name === "constructor") ||
      (a.type === "Literal" && a.value === "constructor"))
      ? (r.kind !== "method" &&
          this.raise(a.start, "Constructor can't have get/set modifier"),
        u && this.raise(a.start, "Constructor can't be a generator"),
        s && this.raise(a.start, "Constructor can't be an async method"),
        (r.kind = "constructor"),
        (f = e))
      : r.static &&
        a.type === "Identifier" &&
        a.name === "prototype" &&
        this.raise(
          a.start,
          "Classes may not have a static property named prototype",
        ),
    this.parseClassMethod(r, u, s, f),
    r.kind === "get" &&
      r.value.params.length !== 0 &&
      this.raiseRecoverable(r.value.start, "getter should have no params"),
    r.kind === "set" &&
      r.value.params.length !== 1 &&
      this.raiseRecoverable(
        r.value.start,
        "setter should have exactly one param",
      ),
    r.kind === "set" &&
      r.value.params[0].type === "RestElement" &&
      this.raiseRecoverable(
        r.value.params[0].start,
        "Setter cannot use rest params",
      ),
    r
  );
};
G.parseClassMethod = function (e, t, r, i) {
  return (
    (e.value = this.parseMethod(t, r, i)),
    this.finishNode(e, "MethodDefinition")
  );
};
G.parseClassId = function (e, t) {
  this.type === h.name
    ? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, Ie, !1))
    : (t === !0 && this.unexpected(), (e.id = null));
};
G.parseClassSuper = function (e) {
  e.superClass = this.eat(h._extends) ? this.parseExprSubscripts() : null;
};
G.parseExport = function (e, t) {
  if ((this.next(), this.eat(h.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual("as")
          ? ((e.exported = this.parseIdent(!0)),
            this.checkExport(t, e.exported.name, this.lastTokStart))
          : (e.exported = null)),
      this.expectContextual("from"),
      this.type !== h.string && this.unexpected(),
      (e.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(e, "ExportAllDeclaration")
    );
  if (this.eat(h._default)) {
    this.checkExport(t, "default", this.lastTokStart);
    var r;
    if (this.type === h._function || (r = this.isAsyncFunction())) {
      var i = this.startNode();
      this.next(),
        r && this.next(),
        (e.declaration = this.parseFunction(i, at | Hi, !1, r));
    } else if (this.type === h._class) {
      var u = this.startNode();
      e.declaration = this.parseClass(u, "nullableID");
    } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    (e.declaration = this.parseStatement(null)),
      e.declaration.type === "VariableDeclaration"
        ? this.checkVariableExport(t, e.declaration.declarations)
        : this.checkExport(t, e.declaration.id.name, e.declaration.id.start),
      (e.specifiers = []),
      (e.source = null);
  else {
    if (
      ((e.declaration = null),
      (e.specifiers = this.parseExportSpecifiers(t)),
      this.eatContextual("from"))
    )
      this.type !== h.string && this.unexpected(),
        (e.source = this.parseExprAtom());
    else {
      for (var s = 0, a = e.specifiers; s < a.length; s += 1) {
        var f = a[s];
        this.checkUnreserved(f.local), this.checkLocalExport(f.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
G.checkExport = function (e, t, r) {
  e &&
    (Nt(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"),
    (e[t] = !0));
};
G.checkPatternExport = function (e, t) {
  var r = t.type;
  if (r === "Identifier") this.checkExport(e, t.name, t.start);
  else if (r === "ObjectPattern")
    for (var i = 0, u = t.properties; i < u.length; i += 1) {
      var s = u[i];
      this.checkPatternExport(e, s);
    }
  else if (r === "ArrayPattern")
    for (var a = 0, f = t.elements; a < f.length; a += 1) {
      var p = f[a];
      p && this.checkPatternExport(e, p);
    }
  else
    r === "Property"
      ? this.checkPatternExport(e, t.value)
      : r === "AssignmentPattern"
        ? this.checkPatternExport(e, t.left)
        : r === "RestElement"
          ? this.checkPatternExport(e, t.argument)
          : r === "ParenthesizedExpression" &&
            this.checkPatternExport(e, t.expression);
};
G.checkVariableExport = function (e, t) {
  if (e)
    for (var r = 0, i = t; r < i.length; r += 1) {
      var u = i[r];
      this.checkPatternExport(e, u.id);
    }
};
G.shouldParseExportStatement = function () {
  return (
    this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
G.parseExportSpecifiers = function (e) {
  var t = [],
    r = !0;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(h.comma), this.afterTrailingComma(h.braceR))) break;
    var i = this.startNode();
    (i.local = this.parseIdent(!0)),
      (i.exported = this.eatContextual("as") ? this.parseIdent(!0) : i.local),
      this.checkExport(e, i.exported.name, i.exported.start),
      t.push(this.finishNode(i, "ExportSpecifier"));
  }
  return t;
};
G.parseImport = function (e) {
  return (
    this.next(),
    this.type === h.string
      ? ((e.specifiers = Ku), (e.source = this.parseExprAtom()))
      : ((e.specifiers = this.parseImportSpecifiers()),
        this.expectContextual("from"),
        (e.source =
          this.type === h.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(e, "ImportDeclaration")
  );
};
G.parseImportSpecifiers = function () {
  var e = [],
    t = !0;
  if (this.type === h.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()),
      this.checkLVal(r.local, Ie),
      e.push(this.finishNode(r, "ImportDefaultSpecifier")),
      !this.eat(h.comma))
    )
      return e;
  }
  if (this.type === h.star) {
    var i = this.startNode();
    return (
      this.next(),
      this.expectContextual("as"),
      (i.local = this.parseIdent()),
      this.checkLVal(i.local, Ie),
      e.push(this.finishNode(i, "ImportNamespaceSpecifier")),
      e
    );
  }
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (t) t = !1;
    else if ((this.expect(h.comma), this.afterTrailingComma(h.braceR))) break;
    var u = this.startNode();
    (u.imported = this.parseIdent(!0)),
      this.eatContextual("as")
        ? (u.local = this.parseIdent())
        : (this.checkUnreserved(u.imported), (u.local = u.imported)),
      this.checkLVal(u.local, Ie),
      e.push(this.finishNode(u, "ImportSpecifier"));
  }
  return e;
};
G.adaptDirectivePrologue = function (e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
G.isDirectiveCandidate = function (e) {
  return (
    e.type === "ExpressionStatement" &&
    e.expression.type === "Literal" &&
    typeof e.expression.value == "string" &&
    (this.input[e.start] === '"' || this.input[e.start] === "'")
  );
};
var Pe = re.prototype;
Pe.toAssignable = function (e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync &&
          e.name === "await" &&
          this.raise(
            e.start,
            "Cannot use 'await' as identifier inside an async function",
          );
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        (e.type = "ObjectPattern"), r && this.checkPatternErrors(r, !0);
        for (var i = 0, u = e.properties; i < u.length; i += 1) {
          var s = u[i];
          this.toAssignable(s, t),
            s.type === "RestElement" &&
              (s.argument.type === "ArrayPattern" ||
                s.argument.type === "ObjectPattern") &&
              this.raise(s.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" &&
          this.raise(
            e.key.start,
            "Object pattern can't contain getter or setter",
          ),
          this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        (e.type = "ArrayPattern"),
          r && this.checkPatternErrors(r, !0),
          this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        (e.type = "RestElement"),
          this.toAssignable(e.argument, t),
          e.argument.type === "AssignmentPattern" &&
            this.raise(
              e.argument.start,
              "Rest elements cannot have a default value",
            );
        break;
      case "AssignmentExpression":
        e.operator !== "=" &&
          this.raise(
            e.left.end,
            "Only '=' operator can be used for specifying default value.",
          ),
          (e.type = "AssignmentPattern"),
          delete e.operator,
          this.toAssignable(e.left, t);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(
          e.start,
          "Optional chaining cannot appear in left-hand side",
        );
        break;
      case "MemberExpression":
        if (!t) break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
Pe.toAssignableList = function (e, t) {
  for (var r = e.length, i = 0; i < r; i++) {
    var u = e[i];
    u && this.toAssignable(u, t);
  }
  if (r) {
    var s = e[r - 1];
    this.options.ecmaVersion === 6 &&
      t &&
      s &&
      s.type === "RestElement" &&
      s.argument.type !== "Identifier" &&
      this.unexpected(s.argument.start);
  }
  return e;
};
Pe.parseSpread = function (e) {
  var t = this.startNode();
  return (
    this.next(),
    (t.argument = this.parseMaybeAssign(!1, e)),
    this.finishNode(t, "SpreadElement")
  );
};
Pe.parseRestBinding = function () {
  var e = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== h.name && this.unexpected(),
    (e.argument = this.parseBindingAtom()),
    this.finishNode(e, "RestElement")
  );
};
Pe.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case h.bracketL:
        var e = this.startNode();
        return (
          this.next(),
          (e.elements = this.parseBindingList(h.bracketR, !0, !0)),
          this.finishNode(e, "ArrayPattern")
        );
      case h.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Pe.parseBindingList = function (e, t, r) {
  for (var i = [], u = !0; !this.eat(e); )
    if ((u ? (u = !1) : this.expect(h.comma), t && this.type === h.comma))
      i.push(null);
    else {
      if (r && this.afterTrailingComma(e)) break;
      if (this.type === h.ellipsis) {
        var s = this.parseRestBinding();
        this.parseBindingListItem(s),
          i.push(s),
          this.type === h.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element",
            ),
          this.expect(e);
        break;
      } else {
        var a = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(a), i.push(a);
      }
    }
  return i;
};
Pe.parseBindingListItem = function (e) {
  return e;
};
Pe.parseMaybeDefault = function (e, t, r) {
  if (
    ((r = r || this.parseBindingAtom()),
    this.options.ecmaVersion < 6 || !this.eat(h.eq))
  )
    return r;
  var i = this.startNodeAt(e, t);
  return (
    (i.left = r),
    (i.right = this.parseMaybeAssign()),
    this.finishNode(i, "AssignmentPattern")
  );
};
Pe.checkLVal = function (e, t, r) {
  switch ((t === void 0 && (t = si), e.type)) {
    case "Identifier":
      t === Ie &&
        e.name === "let" &&
        this.raiseRecoverable(
          e.start,
          "let is disallowed as a lexically bound name",
        ),
        this.strict &&
          this.reservedWordsStrictBind.test(e.name) &&
          this.raiseRecoverable(
            e.start,
            (t ? "Binding " : "Assigning to ") + e.name + " in strict mode",
          ),
        r &&
          (Nt(r, e.name) &&
            this.raiseRecoverable(e.start, "Argument name clash"),
          (r[e.name] = !0)),
        t !== si && t !== Ji && this.declareName(e.name, t, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(
        e.start,
        "Optional chaining cannot appear in left-hand side",
      );
      break;
    case "MemberExpression":
      t && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var i = 0, u = e.properties; i < u.length; i += 1) {
        var s = u[i];
        this.checkLVal(s, t, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, t, r);
      break;
    case "ArrayPattern":
      for (var a = 0, f = e.elements; a < f.length; a += 1) {
        var p = f[a];
        p && this.checkLVal(p, t, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, t, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, t, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, t, r);
      break;
    default:
      this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
  }
};
var z = re.prototype;
z.checkPropClash = function (e, t, r) {
  if (
    !(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") &&
    !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
  ) {
    var i = e.key,
      u;
    switch (i.type) {
      case "Identifier":
        u = i.name;
        break;
      case "Literal":
        u = String(i.value);
        break;
      default:
        return;
    }
    var s = e.kind;
    if (this.options.ecmaVersion >= 6) {
      u === "__proto__" &&
        s === "init" &&
        (t.proto &&
          (r
            ? r.doubleProto < 0 && (r.doubleProto = i.start)
            : this.raiseRecoverable(
                i.start,
                "Redefinition of __proto__ property",
              )),
        (t.proto = !0));
      return;
    }
    u = "$" + u;
    var a = t[u];
    if (a) {
      var f;
      s === "init"
        ? (f = (this.strict && a.init) || a.get || a.set)
        : (f = a.init || a[s]),
        f && this.raiseRecoverable(i.start, "Redefinition of property");
    } else a = t[u] = { init: !1, get: !1, set: !1 };
    a[s] = !0;
  }
};
z.parseExpression = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    u = this.parseMaybeAssign(e, t);
  if (this.type === h.comma) {
    var s = this.startNodeAt(r, i);
    for (s.expressions = [u]; this.eat(h.comma); )
      s.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(s, "SequenceExpression");
  }
  return u;
};
z.parseMaybeAssign = function (e, t, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var i = !1,
    u = -1,
    s = -1;
  t
    ? ((u = t.parenthesizedAssign),
      (s = t.trailingComma),
      (t.parenthesizedAssign = t.trailingComma = -1))
    : ((t = new Lt()), (i = !0));
  var a = this.start,
    f = this.startLoc;
  (this.type === h.parenL || this.type === h.name) &&
    (this.potentialArrowAt = this.start);
  var p = this.parseMaybeConditional(e, t);
  if ((r && (p = r.call(this, p, a, f)), this.type.isAssign)) {
    var D = this.startNodeAt(a, f);
    return (
      (D.operator = this.value),
      (D.left = this.type === h.eq ? this.toAssignable(p, !1, t) : p),
      i || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
      t.shorthandAssign >= D.left.start && (t.shorthandAssign = -1),
      this.checkLVal(p),
      this.next(),
      (D.right = this.parseMaybeAssign(e)),
      this.finishNode(D, "AssignmentExpression")
    );
  } else i && this.checkExpressionErrors(t, !0);
  return (
    u > -1 && (t.parenthesizedAssign = u), s > -1 && (t.trailingComma = s), p
  );
};
z.parseMaybeConditional = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    u = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t)) return u;
  if (this.eat(h.question)) {
    var s = this.startNodeAt(r, i);
    return (
      (s.test = u),
      (s.consequent = this.parseMaybeAssign()),
      this.expect(h.colon),
      (s.alternate = this.parseMaybeAssign(e)),
      this.finishNode(s, "ConditionalExpression")
    );
  }
  return u;
};
z.parseExprOps = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    u = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) ||
    (u.start === r && u.type === "ArrowFunctionExpression")
    ? u
    : this.parseExprOp(u, r, i, -1, e);
};
z.parseExprOp = function (e, t, r, i, u) {
  var s = this.type.binop;
  if (s != null && (!u || this.type !== h._in) && s > i) {
    var a = this.type === h.logicalOR || this.type === h.logicalAND,
      f = this.type === h.coalesce;
    f && (s = h.logicalAND.binop);
    var p = this.value;
    this.next();
    var D = this.start,
      m = this.startLoc,
      y = this.parseExprOp(this.parseMaybeUnary(null, !1), D, m, s, u),
      A = this.buildBinary(t, r, e, y, p, a || f);
    return (
      ((a && this.type === h.coalesce) ||
        (f && (this.type === h.logicalOR || this.type === h.logicalAND))) &&
        this.raiseRecoverable(
          this.start,
          "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses",
        ),
      this.parseExprOp(A, t, r, i, u)
    );
  }
  return e;
};
z.buildBinary = function (e, t, r, i, u, s) {
  var a = this.startNodeAt(e, t);
  return (
    (a.left = r),
    (a.operator = u),
    (a.right = i),
    this.finishNode(a, s ? "LogicalExpression" : "BinaryExpression")
  );
};
z.parseMaybeUnary = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    u;
  if (
    this.isContextual("await") &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction))
  )
    (u = this.parseAwait()), (t = !0);
  else if (this.type.prefix) {
    var s = this.startNode(),
      a = this.type === h.incDec;
    (s.operator = this.value),
      (s.prefix = !0),
      this.next(),
      (s.argument = this.parseMaybeUnary(null, !0)),
      this.checkExpressionErrors(e, !0),
      a
        ? this.checkLVal(s.argument)
        : this.strict &&
            s.operator === "delete" &&
            s.argument.type === "Identifier"
          ? this.raiseRecoverable(
              s.start,
              "Deleting local variable in strict mode",
            )
          : (t = !0),
      (u = this.finishNode(s, a ? "UpdateExpression" : "UnaryExpression"));
  } else {
    if (((u = this.parseExprSubscripts(e)), this.checkExpressionErrors(e)))
      return u;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var f = this.startNodeAt(r, i);
      (f.operator = this.value),
        (f.prefix = !1),
        (f.argument = u),
        this.checkLVal(u),
        this.next(),
        (u = this.finishNode(f, "UpdateExpression"));
    }
  }
  return !t && this.eat(h.starstar)
    ? this.buildBinary(r, i, u, this.parseMaybeUnary(null, !1), "**", !1)
    : u;
};
z.parseExprSubscripts = function (e) {
  var t = this.start,
    r = this.startLoc,
    i = this.parseExprAtom(e);
  if (
    i.type === "ArrowFunctionExpression" &&
    this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
  )
    return i;
  var u = this.parseSubscripts(i, t, r);
  return (
    e &&
      u.type === "MemberExpression" &&
      (e.parenthesizedAssign >= u.start && (e.parenthesizedAssign = -1),
      e.parenthesizedBind >= u.start && (e.parenthesizedBind = -1)),
    u
  );
};
z.parseSubscripts = function (e, t, r, i) {
  for (
    var u =
        this.options.ecmaVersion >= 8 &&
        e.type === "Identifier" &&
        e.name === "async" &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start === 5 &&
        this.potentialArrowAt === e.start,
      s = !1;
    ;

  ) {
    var a = this.parseSubscript(e, t, r, i, u, s);
    if (
      (a.optional && (s = !0), a === e || a.type === "ArrowFunctionExpression")
    ) {
      if (s) {
        var f = this.startNodeAt(t, r);
        (f.expression = a), (a = this.finishNode(f, "ChainExpression"));
      }
      return a;
    }
    e = a;
  }
};
z.parseSubscript = function (e, t, r, i, u, s) {
  var a = this.options.ecmaVersion >= 11,
    f = a && this.eat(h.questionDot);
  i &&
    f &&
    this.raise(
      this.lastTokStart,
      "Optional chaining cannot appear in the callee of new expressions",
    );
  var p = this.eat(h.bracketL);
  if (
    p ||
    (f && this.type !== h.parenL && this.type !== h.backQuote) ||
    this.eat(h.dot)
  ) {
    var D = this.startNodeAt(t, r);
    (D.object = e),
      (D.property = p
        ? this.parseExpression()
        : this.parseIdent(this.options.allowReserved !== "never")),
      (D.computed = !!p),
      p && this.expect(h.bracketR),
      a && (D.optional = f),
      (e = this.finishNode(D, "MemberExpression"));
  } else if (!i && this.eat(h.parenL)) {
    var m = new Lt(),
      y = this.yieldPos,
      A = this.awaitPos,
      C = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var v = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, m);
    if (u && !f && !this.canInsertSemicolon() && this.eat(h.arrow))
      return (
        this.checkPatternErrors(m, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 &&
          this.raise(
            this.awaitIdentPos,
            "Cannot use 'await' as identifier inside an async function",
          ),
        (this.yieldPos = y),
        (this.awaitPos = A),
        (this.awaitIdentPos = C),
        this.parseArrowExpression(this.startNodeAt(t, r), v, !0)
      );
    this.checkExpressionErrors(m, !0),
      (this.yieldPos = y || this.yieldPos),
      (this.awaitPos = A || this.awaitPos),
      (this.awaitIdentPos = C || this.awaitIdentPos);
    var E = this.startNodeAt(t, r);
    (E.callee = e),
      (E.arguments = v),
      a && (E.optional = f),
      (e = this.finishNode(E, "CallExpression"));
  } else if (this.type === h.backQuote) {
    (f || s) &&
      this.raise(
        this.start,
        "Optional chaining cannot appear in the tag of tagged template expressions",
      );
    var b = this.startNodeAt(t, r);
    (b.tag = e),
      (b.quasi = this.parseTemplate({ isTagged: !0 })),
      (e = this.finishNode(b, "TaggedTemplateExpression"));
  }
  return e;
};
z.parseExprAtom = function (e) {
  this.type === h.slash && this.readRegexp();
  var t,
    r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case h._super:
      return (
        this.allowSuper ||
          this.raise(this.start, "'super' keyword outside a method"),
        (t = this.startNode()),
        this.next(),
        this.type === h.parenL &&
          !this.allowDirectSuper &&
          this.raise(t.start, "super() call outside constructor of a subclass"),
        this.type !== h.dot &&
          this.type !== h.bracketL &&
          this.type !== h.parenL &&
          this.unexpected(),
        this.finishNode(t, "Super")
      );
    case h._this:
      return (
        (t = this.startNode()),
        this.next(),
        this.finishNode(t, "ThisExpression")
      );
    case h.name:
      var i = this.start,
        u = this.startLoc,
        s = this.containsEsc,
        a = this.parseIdent(!1);
      if (
        this.options.ecmaVersion >= 8 &&
        !s &&
        a.name === "async" &&
        !this.canInsertSemicolon() &&
        this.eat(h._function)
      )
        return this.parseFunction(this.startNodeAt(i, u), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(h.arrow))
          return this.parseArrowExpression(this.startNodeAt(i, u), [a], !1);
        if (
          this.options.ecmaVersion >= 8 &&
          a.name === "async" &&
          this.type === h.name &&
          !s
        )
          return (
            (a = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(h.arrow)) &&
              this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(i, u), [a], !0)
          );
      }
      return a;
    case h.regexp:
      var f = this.value;
      return (
        (t = this.parseLiteral(f.value)),
        (t.regex = { pattern: f.pattern, flags: f.flags }),
        t
      );
    case h.num:
    case h.string:
      return this.parseLiteral(this.value);
    case h._null:
    case h._true:
    case h._false:
      return (
        (t = this.startNode()),
        (t.value = this.type === h._null ? null : this.type === h._true),
        (t.raw = this.type.keyword),
        this.next(),
        this.finishNode(t, "Literal")
      );
    case h.parenL:
      var p = this.start,
        D = this.parseParenAndDistinguishExpression(r);
      return (
        e &&
          (e.parenthesizedAssign < 0 &&
            !this.isSimpleAssignTarget(D) &&
            (e.parenthesizedAssign = p),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = p)),
        D
      );
    case h.bracketL:
      return (
        (t = this.startNode()),
        this.next(),
        (t.elements = this.parseExprList(h.bracketR, !0, !0, e)),
        this.finishNode(t, "ArrayExpression")
      );
    case h.braceL:
      return this.parseObj(!1, e);
    case h._function:
      return (t = this.startNode()), this.next(), this.parseFunction(t, 0);
    case h._class:
      return this.parseClass(this.startNode(), !1);
    case h._new:
      return this.parseNew();
    case h.backQuote:
      return this.parseTemplate();
    case h._import:
      return this.options.ecmaVersion >= 11
        ? this.parseExprImport()
        : this.unexpected();
    default:
      this.unexpected();
  }
};
z.parseExprImport = function () {
  var e = this.startNode();
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var t = this.parseIdent(!0);
  switch (this.type) {
    case h.parenL:
      return this.parseDynamicImport(e);
    case h.dot:
      return (e.meta = t), this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
z.parseDynamicImport = function (e) {
  if (
    (this.next(), (e.source = this.parseMaybeAssign()), !this.eat(h.parenR))
  ) {
    var t = this.start;
    this.eat(h.comma) && this.eat(h.parenR)
      ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()")
      : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
z.parseImportMeta = function (e) {
  this.next();
  var t = this.containsEsc;
  return (
    (e.property = this.parseIdent(!0)),
    e.property.name !== "meta" &&
      this.raiseRecoverable(
        e.property.start,
        "The only valid meta property for import is 'import.meta'",
      ),
    t &&
      this.raiseRecoverable(
        e.start,
        "'import.meta' must not contain escaped characters",
      ),
    this.options.sourceType !== "module" &&
      this.raiseRecoverable(
        e.start,
        "Cannot use 'import.meta' outside a module",
      ),
    this.finishNode(e, "MetaProperty")
  );
};
z.parseLiteral = function (e) {
  var t = this.startNode();
  return (
    (t.value = e),
    (t.raw = this.input.slice(this.start, this.end)),
    t.raw.charCodeAt(t.raw.length - 1) === 110 &&
      (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")),
    this.next(),
    this.finishNode(t, "Literal")
  );
};
z.parseParenExpression = function () {
  this.expect(h.parenL);
  var e = this.parseExpression();
  return this.expect(h.parenR), e;
};
z.parseParenAndDistinguishExpression = function (e) {
  var t = this.start,
    r = this.startLoc,
    i,
    u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var s = this.start,
      a = this.startLoc,
      f = [],
      p = !0,
      D = !1,
      m = new Lt(),
      y = this.yieldPos,
      A = this.awaitPos,
      C;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; )
      if (
        (p ? (p = !1) : this.expect(h.comma),
        u && this.afterTrailingComma(h.parenR, !0))
      ) {
        D = !0;
        break;
      } else if (this.type === h.ellipsis) {
        (C = this.start),
          f.push(this.parseParenItem(this.parseRestBinding())),
          this.type === h.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element",
            );
        break;
      } else f.push(this.parseMaybeAssign(!1, m, this.parseParenItem));
    var v = this.start,
      E = this.startLoc;
    if (
      (this.expect(h.parenR),
      e && !this.canInsertSemicolon() && this.eat(h.arrow))
    )
      return (
        this.checkPatternErrors(m, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = y),
        (this.awaitPos = A),
        this.parseParenArrowList(t, r, f)
      );
    (!f.length || D) && this.unexpected(this.lastTokStart),
      C && this.unexpected(C),
      this.checkExpressionErrors(m, !0),
      (this.yieldPos = y || this.yieldPos),
      (this.awaitPos = A || this.awaitPos),
      f.length > 1
        ? ((i = this.startNodeAt(s, a)),
          (i.expressions = f),
          this.finishNodeAt(i, "SequenceExpression", v, E))
        : (i = f[0]);
  } else i = this.parseParenExpression();
  if (this.options.preserveParens) {
    var b = this.startNodeAt(t, r);
    return (b.expression = i), this.finishNode(b, "ParenthesizedExpression");
  } else return i;
};
z.parseParenItem = function (e) {
  return e;
};
z.parseParenArrowList = function (e, t, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r);
};
var Yu = [];
z.parseNew = function () {
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(),
    t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(h.dot)) {
    e.meta = t;
    var r = this.containsEsc;
    return (
      (e.property = this.parseIdent(!0)),
      e.property.name !== "target" &&
        this.raiseRecoverable(
          e.property.start,
          "The only valid meta property for new is 'new.target'",
        ),
      r &&
        this.raiseRecoverable(
          e.start,
          "'new.target' must not contain escaped characters",
        ),
      this.inNonArrowFunction() ||
        this.raiseRecoverable(
          e.start,
          "'new.target' can only be used in functions",
        ),
      this.finishNode(e, "MetaProperty")
    );
  }
  var i = this.start,
    u = this.startLoc,
    s = this.type === h._import;
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), i, u, !0)),
    s &&
      e.callee.type === "ImportExpression" &&
      this.raise(i, "Cannot use new with import()"),
    this.eat(h.parenL)
      ? (e.arguments = this.parseExprList(
          h.parenR,
          this.options.ecmaVersion >= 8,
          !1,
        ))
      : (e.arguments = Yu),
    this.finishNode(e, "NewExpression")
  );
};
z.parseTemplateElement = function (e) {
  var t = e.isTagged,
    r = this.startNode();
  return (
    this.type === h.invalidTemplate
      ? (t ||
          this.raiseRecoverable(
            this.start,
            "Bad escape sequence in untagged template literal",
          ),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`,
          ),
          cooked: this.value,
        }),
    this.next(),
    (r.tail = this.type === h.backQuote),
    this.finishNode(r, "TemplateElement")
  );
};
z.parseTemplate = function (e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var i = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [i]; !i.tail; )
    this.type === h.eof &&
      this.raise(this.pos, "Unterminated template literal"),
      this.expect(h.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(h.braceR),
      r.quasis.push((i = this.parseTemplateElement({ isTagged: t })));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
z.isAsyncProp = function (e) {
  return (
    !e.computed &&
    e.key.type === "Identifier" &&
    e.key.name === "async" &&
    (this.type === h.name ||
      this.type === h.num ||
      this.type === h.string ||
      this.type === h.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === h.star)) &&
    !Ae.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
z.parseObj = function (e, t) {
  var r = this.startNode(),
    i = !0,
    u = {};
  for (r.properties = [], this.next(); !this.eat(h.braceR); ) {
    if (i) i = !1;
    else if (
      (this.expect(h.comma),
      this.options.ecmaVersion >= 5 && this.afterTrailingComma(h.braceR))
    )
      break;
    var s = this.parseProperty(e, t);
    e || this.checkPropClash(s, u, t), r.properties.push(s);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
z.parseProperty = function (e, t) {
  var r = this.startNode(),
    i,
    u,
    s,
    a;
  if (this.options.ecmaVersion >= 9 && this.eat(h.ellipsis))
    return e
      ? ((r.argument = this.parseIdent(!1)),
        this.type === h.comma &&
          this.raise(
            this.start,
            "Comma is not permitted after the rest element",
          ),
        this.finishNode(r, "RestElement"))
      : (this.type === h.parenL &&
          t &&
          (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
          t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, t)),
        this.type === h.comma &&
          t &&
          t.trailingComma < 0 &&
          (t.trailingComma = this.start),
        this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1),
    (r.shorthand = !1),
    (e || t) && ((s = this.start), (a = this.startLoc)),
    e || (i = this.eat(h.star)));
  var f = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !e && !f && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(r)
      ? ((u = !0),
        (i = this.options.ecmaVersion >= 9 && this.eat(h.star)),
        this.parsePropertyName(r, t))
      : (u = !1),
    this.parsePropertyValue(r, e, i, u, s, a, t, f),
    this.finishNode(r, "Property")
  );
};
z.parsePropertyValue = function (e, t, r, i, u, s, a, f) {
  if (
    ((r || i) && this.type === h.colon && this.unexpected(), this.eat(h.colon))
  )
    (e.value = t
      ? this.parseMaybeDefault(this.start, this.startLoc)
      : this.parseMaybeAssign(!1, a)),
      (e.kind = "init");
  else if (this.options.ecmaVersion >= 6 && this.type === h.parenL)
    t && this.unexpected(),
      (e.kind = "init"),
      (e.method = !0),
      (e.value = this.parseMethod(r, i));
  else if (
    !t &&
    !f &&
    this.options.ecmaVersion >= 5 &&
    !e.computed &&
    e.key.type === "Identifier" &&
    (e.key.name === "get" || e.key.name === "set") &&
    this.type !== h.comma &&
    this.type !== h.braceR &&
    this.type !== h.eq
  ) {
    (r || i) && this.unexpected(),
      (e.kind = e.key.name),
      this.parsePropertyName(e),
      (e.value = this.parseMethod(!1));
    var p = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== p) {
      var D = e.value.start;
      e.kind === "get"
        ? this.raiseRecoverable(D, "getter should have no params")
        : this.raiseRecoverable(D, "setter should have exactly one param");
    } else
      e.kind === "set" &&
        e.value.params[0].type === "RestElement" &&
        this.raiseRecoverable(
          e.value.params[0].start,
          "Setter cannot use rest params",
        );
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier"
      ? ((r || i) && this.unexpected(),
        this.checkUnreserved(e.key),
        e.key.name === "await" &&
          !this.awaitIdentPos &&
          (this.awaitIdentPos = u),
        (e.kind = "init"),
        t
          ? (e.value = this.parseMaybeDefault(u, s, e.key))
          : this.type === h.eq && a
            ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start),
              (e.value = this.parseMaybeDefault(u, s, e.key)))
            : (e.value = e.key),
        (e.shorthand = !0))
      : this.unexpected();
};
z.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(h.bracketL))
      return (
        (e.computed = !0),
        (e.key = this.parseMaybeAssign()),
        this.expect(h.bracketR),
        e.key
      );
    e.computed = !1;
  }
  return (e.key =
    this.type === h.num || this.type === h.string
      ? this.parseExprAtom()
      : this.parseIdent(this.options.allowReserved !== "never"));
};
z.initFunction = function (e) {
  (e.id = null),
    this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
    this.options.ecmaVersion >= 8 && (e.async = !1);
};
z.parseMethod = function (e, t, r) {
  var i = this.startNode(),
    u = this.yieldPos,
    s = this.awaitPos,
    a = this.awaitIdentPos;
  return (
    this.initFunction(i),
    this.options.ecmaVersion >= 6 && (i.generator = e),
    this.options.ecmaVersion >= 8 && (i.async = !!t),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(yr(t, i.generator) | Wi | (r ? Gi : 0)),
    this.expect(h.parenL),
    (i.params = this.parseBindingList(
      h.parenR,
      !1,
      this.options.ecmaVersion >= 8,
    )),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(i, !1, !0),
    (this.yieldPos = u),
    (this.awaitPos = s),
    (this.awaitIdentPos = a),
    this.finishNode(i, "FunctionExpression")
  );
};
z.parseArrowExpression = function (e, t, r) {
  var i = this.yieldPos,
    u = this.awaitPos,
    s = this.awaitIdentPos;
  return (
    this.enterScope(yr(r, !1) | qi),
    this.initFunction(e),
    this.options.ecmaVersion >= 8 && (e.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (e.params = this.toAssignableList(t, !0)),
    this.parseFunctionBody(e, !0, !1),
    (this.yieldPos = i),
    (this.awaitPos = u),
    (this.awaitIdentPos = s),
    this.finishNode(e, "ArrowFunctionExpression")
  );
};
z.parseFunctionBody = function (e, t, r) {
  var i = t && this.type !== h.braceL,
    u = this.strict,
    s = !1;
  if (i)
    (e.body = this.parseMaybeAssign()),
      (e.expression = !0),
      this.checkParams(e, !1);
  else {
    var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!u || a) &&
      ((s = this.strictDirective(this.end)),
      s &&
        a &&
        this.raiseRecoverable(
          e.start,
          "Illegal 'use strict' directive in function with non-simple parameter list",
        ));
    var f = this.labels;
    (this.labels = []),
      s && (this.strict = !0),
      this.checkParams(
        e,
        !u && !s && !t && !r && this.isSimpleParamList(e.params),
      ),
      this.strict && e.id && this.checkLVal(e.id, Ji),
      (e.body = this.parseBlock(!1, void 0, s && !u)),
      (e.expression = !1),
      this.adaptDirectivePrologue(e.body.body),
      (this.labels = f);
  }
  this.exitScope();
};
z.isSimpleParamList = function (e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var i = r[t];
    if (i.type !== "Identifier") return !1;
  }
  return !0;
};
z.checkParams = function (e, t) {
  for (var r = {}, i = 0, u = e.params; i < u.length; i += 1) {
    var s = u[i];
    this.checkLVal(s, xr, t ? null : r);
  }
};
z.parseExprList = function (e, t, r, i) {
  for (var u = [], s = !0; !this.eat(e); ) {
    if (s) s = !1;
    else if ((this.expect(h.comma), t && this.afterTrailingComma(e))) break;
    var a = void 0;
    r && this.type === h.comma
      ? (a = null)
      : this.type === h.ellipsis
        ? ((a = this.parseSpread(i)),
          i &&
            this.type === h.comma &&
            i.trailingComma < 0 &&
            (i.trailingComma = this.start))
        : (a = this.parseMaybeAssign(!1, i)),
      u.push(a);
  }
  return u;
};
z.checkUnreserved = function (e) {
  var t = e.start,
    r = e.end,
    i = e.name;
  if (
    (this.inGenerator &&
      i === "yield" &&
      this.raiseRecoverable(
        t,
        "Cannot use 'yield' as identifier inside a generator",
      ),
    this.inAsync &&
      i === "await" &&
      this.raiseRecoverable(
        t,
        "Cannot use 'await' as identifier inside an async function",
      ),
    this.keywords.test(i) && this.raise(t, "Unexpected keyword '" + i + "'"),
    !(
      this.options.ecmaVersion < 6 &&
      this.input.slice(t, r).indexOf("\\") !== -1
    ))
  ) {
    var u = this.strict ? this.reservedWordsStrict : this.reservedWords;
    u.test(i) &&
      (!this.inAsync &&
        i === "await" &&
        this.raiseRecoverable(
          t,
          "Cannot use keyword 'await' outside an async function",
        ),
      this.raiseRecoverable(t, "The keyword '" + i + "' is reserved"));
  }
};
z.parseIdent = function (e, t) {
  var r = this.startNode();
  return (
    this.type === h.name
      ? (r.name = this.value)
      : this.type.keyword
        ? ((r.name = this.type.keyword),
          (r.name === "class" || r.name === "function") &&
            (this.lastTokEnd !== this.lastTokStart + 1 ||
              this.input.charCodeAt(this.lastTokStart) !== 46) &&
            this.context.pop())
        : this.unexpected(),
    this.next(!!e),
    this.finishNode(r, "Identifier"),
    e ||
      (this.checkUnreserved(r),
      r.name === "await" &&
        !this.awaitIdentPos &&
        (this.awaitIdentPos = r.start)),
    r
  );
};
z.parseYield = function (e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return (
    this.next(),
    this.type === h.semi ||
    this.canInsertSemicolon() ||
    (this.type !== h.star && !this.type.startsExpr)
      ? ((t.delegate = !1), (t.argument = null))
      : ((t.delegate = this.eat(h.star)),
        (t.argument = this.parseMaybeAssign(e))),
    this.finishNode(t, "YieldExpression")
  );
};
z.parseAwait = function () {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeUnary(null, !1)),
    this.finishNode(e, "AwaitExpression")
  );
};
var wt = re.prototype;
wt.raise = function (e, t) {
  var r = Cr(this.input, e);
  t += " (" + r.line + ":" + r.column + ")";
  var i = new SyntaxError(t);
  throw ((i.pos = e), (i.loc = r), (i.raisedAt = this.pos), i);
};
wt.raiseRecoverable = wt.raise;
wt.curPosition = function () {
  if (this.options.locations)
    return new Ke(this.curLine, this.pos - this.lineStart);
};
var Me = re.prototype,
  Zu = function (t) {
    (this.flags = t),
      (this.var = []),
      (this.lexical = []),
      (this.functions = []);
  };
Me.enterScope = function (e) {
  this.scopeStack.push(new Zu(e));
};
Me.exitScope = function () {
  this.scopeStack.pop();
};
Me.treatFunctionsAsVarInScope = function (e) {
  return e.flags & gt || (!this.inModule && e.flags & ct);
};
Me.declareName = function (e, t, r) {
  var i = !1;
  if (t === Ie) {
    var u = this.currentScope();
    (i =
      u.lexical.indexOf(e) > -1 ||
      u.functions.indexOf(e) > -1 ||
      u.var.indexOf(e) > -1),
      u.lexical.push(e),
      this.inModule && u.flags & ct && delete this.undefinedExports[e];
  } else if (t === $i) {
    var s = this.currentScope();
    s.lexical.push(e);
  } else if (t === zi) {
    var a = this.currentScope();
    this.treatFunctionsAsVar
      ? (i = a.lexical.indexOf(e) > -1)
      : (i = a.lexical.indexOf(e) > -1 || a.var.indexOf(e) > -1),
      a.functions.push(e);
  } else
    for (var f = this.scopeStack.length - 1; f >= 0; --f) {
      var p = this.scopeStack[f];
      if (
        (p.lexical.indexOf(e) > -1 && !(p.flags & Ui && p.lexical[0] === e)) ||
        (!this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1)
      ) {
        i = !0;
        break;
      }
      if (
        (p.var.push(e),
        this.inModule && p.flags & ct && delete this.undefinedExports[e],
        p.flags & Er)
      )
        break;
    }
  i &&
    this.raiseRecoverable(
      r,
      "Identifier '" + e + "' has already been declared",
    );
};
Me.checkLocalExport = function (e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
    this.scopeStack[0].var.indexOf(e.name) === -1 &&
    (this.undefinedExports[e.name] = e);
};
Me.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
Me.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Er) return t;
  }
};
Me.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Er && !(t.flags & qi)) return t;
  }
};
var Ot = function (t, r, i) {
    (this.type = ""),
      (this.start = r),
      (this.end = 0),
      t.options.locations && (this.loc = new mt(t, i)),
      t.options.directSourceFile &&
        (this.sourceFile = t.options.directSourceFile),
      t.options.ranges && (this.range = [r, 0]);
  },
  Rt = re.prototype;
Rt.startNode = function () {
  return new Ot(this, this.start, this.startLoc);
};
Rt.startNodeAt = function (e, t) {
  return new Ot(this, e, t);
};
function Xi(e, t, r, i) {
  return (
    (e.type = t),
    (e.end = r),
    this.options.locations && (e.loc.end = i),
    this.options.ranges && (e.range[1] = r),
    e
  );
}
Rt.finishNode = function (e, t) {
  return Xi.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Rt.finishNodeAt = function (e, t, r, i) {
  return Xi.call(this, e, t, r, i);
};
var xe = function (t, r, i, u, s) {
    (this.token = t),
      (this.isExpr = !!r),
      (this.preserveSpace = !!i),
      (this.override = u),
      (this.generator = !!s);
  },
  ue = {
    b_stat: new xe("{", !1),
    b_expr: new xe("{", !0),
    b_tmpl: new xe("${", !1),
    p_stat: new xe("(", !1),
    p_expr: new xe("(", !0),
    q_tmpl: new xe("`", !0, !0, function (e) {
      return e.tryReadTemplateToken();
    }),
    f_stat: new xe("function", !1),
    f_expr: new xe("function", !0),
    f_expr_gen: new xe("function", !0, !1, null, !0),
    f_gen: new xe("function", !1, !1, null, !0),
  },
  Mt = re.prototype;
Mt.initialContext = function () {
  return [ue.b_stat];
};
Mt.braceIsBlock = function (e) {
  var t = this.curContext();
  return t === ue.f_expr || t === ue.f_stat
    ? !0
    : e === h.colon && (t === ue.b_stat || t === ue.b_expr)
      ? !t.isExpr
      : e === h._return || (e === h.name && this.exprAllowed)
        ? Ae.test(this.input.slice(this.lastTokEnd, this.start))
        : e === h._else ||
            e === h.semi ||
            e === h.eof ||
            e === h.parenR ||
            e === h.arrow
          ? !0
          : e === h.braceL
            ? t === ue.b_stat
            : e === h._var || e === h._const || e === h.name
              ? !1
              : !this.exprAllowed;
};
Mt.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function") return t.generator;
  }
  return !1;
};
Mt.updateContext = function (e) {
  var t,
    r = this.type;
  r.keyword && e === h.dot
    ? (this.exprAllowed = !1)
    : (t = r.updateContext)
      ? t.call(this, e)
      : (this.exprAllowed = r.beforeExpr);
};
h.parenR.updateContext = h.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === ue.b_stat &&
    this.curContext().token === "function" &&
    (e = this.context.pop()),
    (this.exprAllowed = !e.isExpr);
};
h.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? ue.b_stat : ue.b_expr),
    (this.exprAllowed = !0);
};
h.dollarBraceL.updateContext = function () {
  this.context.push(ue.b_tmpl), (this.exprAllowed = !0);
};
h.parenL.updateContext = function (e) {
  var t = e === h._if || e === h._for || e === h._with || e === h._while;
  this.context.push(t ? ue.p_stat : ue.p_expr), (this.exprAllowed = !0);
};
h.incDec.updateContext = function () {};
h._function.updateContext = h._class.updateContext = function (e) {
  e.beforeExpr &&
  e !== h.semi &&
  e !== h._else &&
  !(
    e === h._return && Ae.test(this.input.slice(this.lastTokEnd, this.start))
  ) &&
  !((e === h.colon || e === h.braceL) && this.curContext() === ue.b_stat)
    ? this.context.push(ue.f_expr)
    : this.context.push(ue.f_stat),
    (this.exprAllowed = !1);
};
h.backQuote.updateContext = function () {
  this.curContext() === ue.q_tmpl
    ? this.context.pop()
    : this.context.push(ue.q_tmpl),
    (this.exprAllowed = !1);
};
h.star.updateContext = function (e) {
  if (e === h._function) {
    var t = this.context.length - 1;
    this.context[t] === ue.f_expr
      ? (this.context[t] = ue.f_expr_gen)
      : (this.context[t] = ue.f_gen);
  }
  this.exprAllowed = !0;
};
h.name.updateContext = function (e) {
  var t = !1;
  this.options.ecmaVersion >= 6 &&
    e !== h.dot &&
    ((this.value === "of" && !this.exprAllowed) ||
      (this.value === "yield" && this.inGeneratorContext())) &&
    (t = !0),
    (this.exprAllowed = t);
};
var Qi =
    "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
  Ki = Qi + " Extended_Pictographic",
  es = Ki,
  ts = { 9: Qi, 10: Ki, 11: es },
  ai =
    "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
  Yi =
    "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
  Zi =
    Yi +
    " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
  rs =
    Zi +
    " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
  is = { 9: Yi, 10: Zi, 11: rs },
  en = {};
function vr(e) {
  var t = (en[e] = {
    binary: Ue(ts[e] + " " + ai),
    nonBinary: { General_Category: Ue(ai), Script: Ue(is[e]) },
  });
  (t.nonBinary.Script_Extensions = t.nonBinary.Script),
    (t.nonBinary.gc = t.nonBinary.General_Category),
    (t.nonBinary.sc = t.nonBinary.Script),
    (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
vr(9);
vr(10);
vr(11);
var j = re.prototype,
  Ne = function (t) {
    (this.parser = t),
      (this.validFlags =
        "gim" +
        (t.options.ecmaVersion >= 6 ? "uy" : "") +
        (t.options.ecmaVersion >= 9 ? "s" : "")),
      (this.unicodeProperties =
        en[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion]),
      (this.source = ""),
      (this.flags = ""),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ""),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
Ne.prototype.reset = function (t, r, i) {
  var u = i.indexOf("u") !== -1;
  (this.start = t | 0),
    (this.source = r + ""),
    (this.flags = i),
    (this.switchU = u && this.parser.options.ecmaVersion >= 6),
    (this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
Ne.prototype.raise = function (t) {
  this.parser.raiseRecoverable(
    this.start,
    "Invalid regular expression: /" + this.source + "/: " + t,
  );
};
Ne.prototype.at = function (t, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    u = i.length;
  if (t >= u) return -1;
  var s = i.charCodeAt(t);
  if (!(r || this.switchU) || s <= 55295 || s >= 57344 || t + 1 >= u) return s;
  var a = i.charCodeAt(t + 1);
  return a >= 56320 && a <= 57343 ? (s << 10) + a - 56613888 : s;
};
Ne.prototype.nextIndex = function (t, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    u = i.length;
  if (t >= u) return u;
  var s = i.charCodeAt(t),
    a;
  return !(r || this.switchU) ||
    s <= 55295 ||
    s >= 57344 ||
    t + 1 >= u ||
    (a = i.charCodeAt(t + 1)) < 56320 ||
    a > 57343
    ? t + 1
    : t + 2;
};
Ne.prototype.current = function (t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Ne.prototype.lookahead = function (t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Ne.prototype.advance = function (t) {
  t === void 0 && (t = !1), (this.pos = this.nextIndex(this.pos, t));
};
Ne.prototype.eat = function (t, r) {
  return (
    r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1
  );
};
function kt(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
j.validateRegExpFlags = function (e) {
  for (var t = e.validFlags, r = e.flags, i = 0; i < r.length; i++) {
    var u = r.charAt(i);
    t.indexOf(u) === -1 &&
      this.raise(e.start, "Invalid regular expression flag"),
      r.indexOf(u, i + 1) > -1 &&
        this.raise(e.start, "Duplicate regular expression flag");
  }
};
j.validateRegExpPattern = function (e) {
  this.regexp_pattern(e),
    !e.switchN &&
      this.options.ecmaVersion >= 9 &&
      e.groupNames.length > 0 &&
      ((e.switchN = !0), this.regexp_pattern(e));
};
j.regexp_pattern = function (e) {
  (e.pos = 0),
    (e.lastIntValue = 0),
    (e.lastStringValue = ""),
    (e.lastAssertionIsQuantifiable = !1),
    (e.numCapturingParens = 0),
    (e.maxBackReference = 0),
    (e.groupNames.length = 0),
    (e.backReferenceNames.length = 0),
    this.regexp_disjunction(e),
    e.pos !== e.source.length &&
      (e.eat(41) && e.raise("Unmatched ')'"),
      (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")),
    e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var i = r[t];
    e.groupNames.indexOf(i) === -1 &&
      e.raise("Invalid named capture referenced");
  }
};
j.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"),
    e.eat(123) && e.raise("Lone quantifier brackets");
};
j.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
};
j.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e)
    ? (e.lastAssertionIsQuantifiable &&
        this.regexp_eatQuantifier(e) &&
        e.switchU &&
        e.raise("Invalid quantifier"),
      !0)
    : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
      ? (this.regexp_eatQuantifier(e), !0)
      : !1;
};
j.regexp_eatAssertion = function (e) {
  var t = e.pos;
  if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return !0;
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if (
      (this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33))
    )
      return (
        this.regexp_disjunction(e),
        e.eat(41) || e.raise("Unterminated group"),
        (e.lastAssertionIsQuantifiable = !r),
        !0
      );
  }
  return (e.pos = t), !1;
};
j.regexp_eatQuantifier = function (e, t) {
  return (
    t === void 0 && (t = !1),
    this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1
  );
};
j.regexp_eatQuantifierPrefix = function (e, t) {
  return (
    e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t)
  );
};
j.regexp_eatBracedQuantifier = function (e, t) {
  var r = e.pos;
  if (e.eat(123)) {
    var i = 0,
      u = -1;
    if (
      this.regexp_eatDecimalDigits(e) &&
      ((i = e.lastIntValue),
      e.eat(44) && this.regexp_eatDecimalDigits(e) && (u = e.lastIntValue),
      e.eat(125))
    )
      return (
        u !== -1 &&
          u < i &&
          !t &&
          e.raise("numbers out of order in {} quantifier"),
        !0
      );
    e.switchU && !t && e.raise("Incomplete quantifier"), (e.pos = r);
  }
  return !1;
};
j.regexp_eatAtom = function (e) {
  return (
    this.regexp_eatPatternCharacters(e) ||
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e)
  );
};
j.regexp_eatReverseSolidusAtomEscape = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return !0;
    e.pos = t;
  }
  return !1;
};
j.regexp_eatUncapturingGroup = function (e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return !1;
};
j.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9
        ? this.regexp_groupSpecifier(e)
        : e.current() === 63 && e.raise("Invalid group"),
      this.regexp_disjunction(e),
      e.eat(41))
    )
      return (e.numCapturingParens += 1), !0;
    e.raise("Unterminated group");
  }
  return !1;
};
j.regexp_eatExtendedAtom = function (e) {
  return (
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e) ||
    this.regexp_eatInvalidBracedQuantifier(e) ||
    this.regexp_eatExtendedPatternCharacter(e)
  );
};
j.regexp_eatInvalidBracedQuantifier = function (e) {
  return (
    this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1
  );
};
j.regexp_eatSyntaxCharacter = function (e) {
  var t = e.current();
  return tn(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
};
function tn(e) {
  return (
    e === 36 ||
    (e >= 40 && e <= 43) ||
    e === 46 ||
    e === 63 ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  );
}
j.regexp_eatPatternCharacters = function (e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !tn(r); ) e.advance();
  return e.pos !== t;
};
j.regexp_eatExtendedPatternCharacter = function (e) {
  var t = e.current();
  return t !== -1 &&
    t !== 36 &&
    !(t >= 40 && t <= 43) &&
    t !== 46 &&
    t !== 63 &&
    t !== 91 &&
    t !== 94 &&
    t !== 124
    ? (e.advance(), !0)
    : !1;
};
j.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 &&
        e.raise("Duplicate capture group name"),
        e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
j.regexp_eatGroupName = function (e) {
  if (((e.lastStringValue = ""), e.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
j.regexp_eatRegExpIdentifierName = function (e) {
  if (((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))) {
    for (
      e.lastStringValue += kt(e.lastIntValue);
      this.regexp_eatRegExpIdentifierPart(e);

    )
      e.lastStringValue += kt(e.lastIntValue);
    return !0;
  }
  return !1;
};
j.regexp_eatRegExpIdentifierStart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    i = e.current(r);
  return (
    e.advance(r),
    i === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (i = e.lastIntValue),
    ns(i) ? ((e.lastIntValue = i), !0) : ((e.pos = t), !1)
  );
};
function ns(e) {
  return Te(e, !0) || e === 36 || e === 95;
}
j.regexp_eatRegExpIdentifierPart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    i = e.current(r);
  return (
    e.advance(r),
    i === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (i = e.lastIntValue),
    us(i) ? ((e.lastIntValue = i), !0) : ((e.pos = t), !1)
  );
};
function us(e) {
  return We(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
j.regexp_eatAtomEscape = function (e) {
  return this.regexp_eatBackReference(e) ||
    this.regexp_eatCharacterClassEscape(e) ||
    this.regexp_eatCharacterEscape(e) ||
    (e.switchN && this.regexp_eatKGroupName(e))
    ? !0
    : (e.switchU &&
        (e.current() === 99 && e.raise("Invalid unicode escape"),
        e.raise("Invalid escape")),
      !1);
};
j.regexp_eatBackReference = function (e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens) return !0;
    e.pos = t;
  }
  return !1;
};
j.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
j.regexp_eatCharacterEscape = function (e) {
  return (
    this.regexp_eatControlEscape(e) ||
    this.regexp_eatCControlLetter(e) ||
    this.regexp_eatZero(e) ||
    this.regexp_eatHexEscapeSequence(e) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
    (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
    this.regexp_eatIdentityEscape(e)
  );
};
j.regexp_eatCControlLetter = function (e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return !0;
    e.pos = t;
  }
  return !1;
};
j.regexp_eatZero = function (e) {
  return e.current() === 48 && !Vt(e.lookahead())
    ? ((e.lastIntValue = 0), e.advance(), !0)
    : !1;
};
j.regexp_eatControlEscape = function (e) {
  var t = e.current();
  return t === 116
    ? ((e.lastIntValue = 9), e.advance(), !0)
    : t === 110
      ? ((e.lastIntValue = 10), e.advance(), !0)
      : t === 118
        ? ((e.lastIntValue = 11), e.advance(), !0)
        : t === 102
          ? ((e.lastIntValue = 12), e.advance(), !0)
          : t === 114
            ? ((e.lastIntValue = 13), e.advance(), !0)
            : !1;
};
j.regexp_eatControlLetter = function (e) {
  var t = e.current();
  return rn(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
function rn(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
j.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
  t === void 0 && (t = !1);
  var r = e.pos,
    i = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var u = e.lastIntValue;
      if (i && u >= 55296 && u <= 56319) {
        var s = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var a = e.lastIntValue;
          if (a >= 56320 && a <= 57343)
            return (
              (e.lastIntValue = (u - 55296) * 1024 + (a - 56320) + 65536), !0
            );
        }
        (e.pos = s), (e.lastIntValue = u);
      }
      return !0;
    }
    if (
      i &&
      e.eat(123) &&
      this.regexp_eatHexDigits(e) &&
      e.eat(125) &&
      ss(e.lastIntValue)
    )
      return !0;
    i && e.raise("Invalid unicode escape"), (e.pos = r);
  }
  return !1;
};
function ss(e) {
  return e >= 0 && e <= 1114111;
}
j.regexp_eatIdentityEscape = function (e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e)
      ? !0
      : e.eat(47)
        ? ((e.lastIntValue = 47), !0)
        : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107)
    ? ((e.lastIntValue = t), e.advance(), !0)
    : !1;
};
j.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
j.regexp_eatCharacterClassEscape = function (e) {
  var t = e.current();
  if (as(t)) return (e.lastIntValue = -1), e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (
      ((e.lastIntValue = -1),
      e.advance(),
      e.eat(123) &&
        this.regexp_eatUnicodePropertyValueExpression(e) &&
        e.eat(125))
    )
      return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function as(e) {
  return (
    e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87
  );
}
j.regexp_eatUnicodePropertyValueExpression = function (e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var i = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, i), !0;
    }
  }
  if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
    var u = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, u), !0;
  }
  return !1;
};
j.regexp_validateUnicodePropertyNameAndValue = function (e, t, r) {
  Nt(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"),
    e.unicodeProperties.nonBinary[t].test(r) ||
      e.raise("Invalid property value");
};
j.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
  e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
};
j.regexp_eatUnicodePropertyName = function (e) {
  var t = 0;
  for (e.lastStringValue = ""; nn((t = e.current())); )
    (e.lastStringValue += kt(t)), e.advance();
  return e.lastStringValue !== "";
};
function nn(e) {
  return rn(e) || e === 95;
}
j.regexp_eatUnicodePropertyValue = function (e) {
  var t = 0;
  for (e.lastStringValue = ""; os((t = e.current())); )
    (e.lastStringValue += kt(t)), e.advance();
  return e.lastStringValue !== "";
};
function os(e) {
  return nn(e) || Vt(e);
}
j.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
j.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
j.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"),
        t !== -1 &&
          r !== -1 &&
          t > r &&
          e.raise("Range out of order in character class");
    }
  }
};
j.regexp_eatClassAtom = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || an(r)) && e.raise("Invalid class escape"),
        e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var i = e.current();
  return i !== 93 ? ((e.lastIntValue = i), e.advance(), !0) : !1;
};
j.regexp_eatClassEscape = function (e) {
  var t = e.pos;
  if (e.eat(98)) return (e.lastIntValue = 8), !0;
  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return !0;
    e.pos = t;
  }
  return (
    this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
  );
};
j.regexp_eatClassControlLetter = function (e) {
  var t = e.current();
  return Vt(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
j.regexp_eatHexEscapeSequence = function (e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
    e.switchU && e.raise("Invalid escape"), (e.pos = t);
  }
  return !1;
};
j.regexp_eatDecimalDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Vt((r = e.current())); )
    (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
  return e.pos !== t;
};
function Vt(e) {
  return e >= 48 && e <= 57;
}
j.regexp_eatHexDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; un((r = e.current())); )
    (e.lastIntValue = 16 * e.lastIntValue + sn(r)), e.advance();
  return e.pos !== t;
};
function un(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function sn(e) {
  return e >= 65 && e <= 70
    ? 10 + (e - 65)
    : e >= 97 && e <= 102
      ? 10 + (e - 97)
      : e - 48;
}
j.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e)
        ? (e.lastIntValue = t * 64 + r * 8 + e.lastIntValue)
        : (e.lastIntValue = t * 8 + r);
    } else e.lastIntValue = t;
    return !0;
  }
  return !1;
};
j.regexp_eatOctalDigit = function (e) {
  var t = e.current();
  return an(t)
    ? ((e.lastIntValue = t - 48), e.advance(), !0)
    : ((e.lastIntValue = 0), !1);
};
function an(e) {
  return e >= 48 && e <= 55;
}
j.regexp_eatFixedHexDigits = function (e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var i = 0; i < t; ++i) {
    var u = e.current();
    if (!un(u)) return (e.pos = r), !1;
    (e.lastIntValue = 16 * e.lastIntValue + sn(u)), e.advance();
  }
  return !0;
};
var jt = function (t) {
    (this.type = t.type),
      (this.value = t.value),
      (this.start = t.start),
      (this.end = t.end),
      t.options.locations && (this.loc = new mt(t, t.startLoc, t.endLoc)),
      t.options.ranges && (this.range = [t.start, t.end]);
  },
  $ = re.prototype;
$.next = function (e) {
  !e &&
    this.type.keyword &&
    this.containsEsc &&
    this.raiseRecoverable(
      this.start,
      "Escape sequence in keyword " + this.type.keyword,
    ),
    this.options.onToken && this.options.onToken(new jt(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
$.getToken = function () {
  return this.next(), new jt(this);
};
typeof Symbol < "u" &&
  ($[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var t = e.getToken();
        return { done: t.type === h.eof, value: t };
      },
    };
  });
$.curContext = function () {
  return this.context[this.context.length - 1];
};
$.nextToken = function () {
  var e = this.curContext();
  if (
    ((!e || !e.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(h.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
$.readToken = function (e) {
  return Te(e, this.options.ecmaVersion >= 6) || e === 92
    ? this.readWord()
    : this.getTokenFromCode(e);
};
$.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344) return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + t - 56613888;
};
$.skipBlockComment = function () {
  var e = this.options.onComment && this.curPosition(),
    t = this.pos,
    r = this.input.indexOf("*/", (this.pos += 2));
  if (
    (r === -1 && this.raise(this.pos - 2, "Unterminated comment"),
    (this.pos = r + 2),
    this.options.locations)
  ) {
    Qe.lastIndex = t;
    for (var i; (i = Qe.exec(this.input)) && i.index < this.pos; )
      ++this.curLine, (this.lineStart = i.index + i[0].length);
  }
  this.options.onComment &&
    this.options.onComment(
      !0,
      this.input.slice(t + 2, r),
      t,
      this.pos,
      e,
      this.curPosition(),
    );
};
$.skipLineComment = function (e) {
  for (
    var t = this.pos,
      r = this.options.onComment && this.curPosition(),
      i = this.input.charCodeAt((this.pos += e));
    this.pos < this.input.length && !et(i);

  )
    i = this.input.charCodeAt(++this.pos);
  this.options.onComment &&
    this.options.onComment(
      !1,
      this.input.slice(t + e, this.pos),
      t,
      this.pos,
      r,
      this.curPosition(),
    );
};
$.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos,
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((e > 8 && e < 14) || (e >= 5760 && Ar.test(String.fromCharCode(e))))
          ++this.pos;
        else break e;
    }
  }
};
$.finishToken = function (e, t) {
  (this.end = this.pos),
    this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = e), (this.value = t), this.updateContext(r);
};
$.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46
    ? ((this.pos += 3), this.finishToken(h.ellipsis))
    : (++this.pos, this.finishToken(h.dot));
};
$.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed
    ? (++this.pos, this.readRegexp())
    : e === 61
      ? this.finishOp(h.assign, 2)
      : this.finishOp(h.slash, 1);
};
$.readToken_mult_modulo_exp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1,
    i = e === 42 ? h.star : h.modulo;
  return (
    this.options.ecmaVersion >= 7 &&
      e === 42 &&
      t === 42 &&
      (++r, (i = h.starstar), (t = this.input.charCodeAt(this.pos + 2))),
    t === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(i, r)
  );
};
$.readToken_pipe_amp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(h.assign, 3);
    }
    return this.finishOp(e === 124 ? h.logicalOR : h.logicalAND, 2);
  }
  return t === 61
    ? this.finishOp(h.assign, 2)
    : this.finishOp(e === 124 ? h.bitwiseOR : h.bitwiseAND, 1);
};
$.readToken_caret = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.bitwiseXOR, 1);
};
$.readToken_plus_min = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e
    ? t === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 ||
        Ae.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(h.incDec, 2)
    : t === 61
      ? this.finishOp(h.assign, 2)
      : this.finishOp(h.plusMin, 1);
};
$.readToken_lt_gt = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return t === e
    ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61
        ? this.finishOp(h.assign, r + 1)
        : this.finishOp(h.bitShift, r))
    : t === 33 &&
        e === 60 &&
        !this.inModule &&
        this.input.charCodeAt(this.pos + 2) === 45 &&
        this.input.charCodeAt(this.pos + 3) === 45
      ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
      : (t === 61 && (r = 2), this.finishOp(h.relational, r));
};
$.readToken_eq_excl = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61
    ? this.finishOp(
        h.equality,
        this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2,
      )
    : e === 61 && t === 62 && this.options.ecmaVersion >= 6
      ? ((this.pos += 2), this.finishToken(h.arrow))
      : this.finishOp(e === 61 ? h.eq : h.prefix, 1);
};
$.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(h.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var i = this.input.charCodeAt(this.pos + 2);
        if (i === 61) return this.finishOp(h.assign, 3);
      }
      return this.finishOp(h.coalesce, 2);
    }
  }
  return this.finishOp(h.question, 1);
};
$.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(h.parenL);
    case 41:
      return ++this.pos, this.finishToken(h.parenR);
    case 59:
      return ++this.pos, this.finishToken(h.semi);
    case 44:
      return ++this.pos, this.finishToken(h.comma);
    case 91:
      return ++this.pos, this.finishToken(h.bracketL);
    case 93:
      return ++this.pos, this.finishToken(h.bracketR);
    case 123:
      return ++this.pos, this.finishToken(h.braceL);
    case 125:
      return ++this.pos, this.finishToken(h.braceR);
    case 58:
      return ++this.pos, this.finishToken(h.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(h.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79) return this.readRadixNumber(8);
        if (t === 98 || t === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(h.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + br(e) + "'");
};
$.finishOp = function (e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return (this.pos += t), this.finishToken(e, r);
};
$.readRegexp = function () {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(r, "Unterminated regular expression");
    var i = this.input.charAt(this.pos);
    if ((Ae.test(i) && this.raise(r, "Unterminated regular expression"), e))
      e = !1;
    else {
      if (i === "[") t = !0;
      else if (i === "]" && t) t = !1;
      else if (i === "/" && !t) break;
      e = i === "\\";
    }
    ++this.pos;
  }
  var u = this.input.slice(r, this.pos);
  ++this.pos;
  var s = this.pos,
    a = this.readWord1();
  this.containsEsc && this.unexpected(s);
  var f = this.regexpState || (this.regexpState = new Ne(this));
  f.reset(r, u, a), this.validateRegExpFlags(f), this.validateRegExpPattern(f);
  var p = null;
  try {
    p = new RegExp(u, a);
  } catch {}
  return this.finishToken(h.regexp, { pattern: u, flags: a, value: p });
};
$.readInt = function (e, t, r) {
  for (
    var i = this.options.ecmaVersion >= 12 && t === void 0,
      u = r && this.input.charCodeAt(this.pos) === 48,
      s = this.pos,
      a = 0,
      f = 0,
      p = 0,
      D = t ?? 1 / 0;
    p < D;
    ++p, ++this.pos
  ) {
    var m = this.input.charCodeAt(this.pos),
      y = void 0;
    if (i && m === 95) {
      u &&
        this.raiseRecoverable(
          this.pos,
          "Numeric separator is not allowed in legacy octal numeric literals",
        ),
        f === 95 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator must be exactly one underscore",
          ),
        p === 0 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator is not allowed at the first of digits",
          ),
        (f = m);
      continue;
    }
    if (
      (m >= 97
        ? (y = m - 97 + 10)
        : m >= 65
          ? (y = m - 65 + 10)
          : m >= 48 && m <= 57
            ? (y = m - 48)
            : (y = 1 / 0),
      y >= e)
    )
      break;
    (f = m), (a = a * e + y);
  }
  return (
    i &&
      f === 95 &&
      this.raiseRecoverable(
        this.pos - 1,
        "Numeric separator is not allowed at the last of digits",
      ),
    this.pos === s || (t != null && this.pos - s !== t) ? null : a
  );
};
function ls(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function on(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
$.readRadixNumber = function (e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return (
    r == null && this.raise(this.start + 2, "Expected number in radix " + e),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = on(this.input.slice(t, this.pos))), ++this.pos)
      : Te(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
    this.finishToken(h.num, r)
  );
};
$.readNumber = function (e) {
  var t = this.pos;
  !e &&
    this.readInt(10, void 0, !0) === null &&
    this.raise(t, "Invalid number");
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, "Invalid number");
  var i = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && i === 110) {
    var u = on(this.input.slice(t, this.pos));
    return (
      ++this.pos,
      Te(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
      this.finishToken(h.num, u)
    );
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1),
    i === 46 &&
      !r &&
      (++this.pos, this.readInt(10), (i = this.input.charCodeAt(this.pos))),
    (i === 69 || i === 101) &&
      !r &&
      ((i = this.input.charCodeAt(++this.pos)),
      (i === 43 || i === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(t, "Invalid number")),
    Te(this.fullCharCodeAtPos()) &&
      this.raise(this.pos, "Identifier directly after number");
  var s = ls(this.input.slice(t, this.pos), r);
  return this.finishToken(h.num, s);
};
$.readCodePoint = function () {
  var e = this.input.charCodeAt(this.pos),
    t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
      ++this.pos,
      t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else t = this.readHexChar(4);
  return t;
};
function br(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
$.readString = function (e) {
  for (var t = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated string constant");
    var i = this.input.charCodeAt(this.pos);
    if (i === e) break;
    i === 92
      ? ((t += this.input.slice(r, this.pos)),
        (t += this.readEscapedChar(!1)),
        (r = this.pos))
      : (et(i, this.options.ecmaVersion >= 10) &&
          this.raise(this.start, "Unterminated string constant"),
        ++this.pos);
  }
  return (t += this.input.slice(r, this.pos++)), this.finishToken(h.string, t);
};
var ln = {};
$.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === ln) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = !1;
};
$.invalidStringToken = function (e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw ln;
  this.raise(e, t);
};
$.readTmplToken = function () {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start &&
        (this.type === h.template || this.type === h.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(h.dollarBraceL))
          : (++this.pos, this.finishToken(h.backQuote))
        : ((e += this.input.slice(t, this.pos)),
          this.finishToken(h.template, e));
    if (r === 92)
      (e += this.input.slice(t, this.pos)),
        (e += this.readEscapedChar(!0)),
        (t = this.pos);
    else if (et(r)) {
      switch (((e += this.input.slice(t, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
        (t = this.pos);
    } else ++this.pos;
  }
};
$.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") break;
      case "`":
        return this.finishToken(
          h.invalidTemplate,
          this.input.slice(this.start, this.pos),
        );
    }
  this.raise(this.start, "Unterminated template");
};
$.readEscapedChar = function (e) {
  var t = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, t)) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return br(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return (
        this.options.locations && ((this.lineStart = this.pos), ++this.curLine),
        ""
      );
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return (
          this.invalidStringToken(
            r,
            "Invalid escape sequence in template string",
          ),
          null
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          u = parseInt(i, 8);
        return (
          u > 255 && ((i = i.slice(0, -1)), (u = parseInt(i, 8))),
          (this.pos += i.length - 1),
          (t = this.input.charCodeAt(this.pos)),
          (i !== "0" || t === 56 || t === 57) &&
            (this.strict || e) &&
            this.invalidStringToken(
              this.pos - 1 - i.length,
              e
                ? "Octal literal in template string"
                : "Octal literal in strict mode",
            ),
          String.fromCharCode(u)
        );
      }
      return et(t) ? "" : String.fromCharCode(t);
  }
};
$.readHexChar = function (e) {
  var t = this.pos,
    r = this.readInt(16, e);
  return (
    r === null && this.invalidStringToken(t, "Bad character escape sequence"), r
  );
};
$.readWord1 = function () {
  this.containsEsc = !1;
  for (
    var e = "", t = !0, r = this.pos, i = this.options.ecmaVersion >= 6;
    this.pos < this.input.length;

  ) {
    var u = this.fullCharCodeAtPos();
    if (We(u, i)) this.pos += u <= 65535 ? 1 : 2;
    else if (u === 92) {
      (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
      var s = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 &&
        this.invalidStringToken(
          this.pos,
          "Expecting Unicode escape sequence \\uXXXX",
        ),
        ++this.pos;
      var a = this.readCodePoint();
      (t ? Te : We)(a, i) ||
        this.invalidStringToken(s, "Invalid Unicode escape"),
        (e += br(a)),
        (r = this.pos);
    } else break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
$.readWord = function () {
  var e = this.readWord1(),
    t = h.name;
  return this.keywords.test(e) && (t = Pt[e]), this.finishToken(t, e);
};
var cn = "7.4.1";
re.acorn = {
  Parser: re,
  version: cn,
  defaultOptions: Bt,
  Position: Ke,
  SourceLocation: mt,
  getLineInfo: Cr,
  Node: Ot,
  TokenType: K,
  tokTypes: h,
  keywordTypes: Pt,
  TokContext: xe,
  tokContexts: ue,
  isIdentifierChar: We,
  isIdentifierStart: Te,
  Token: jt,
  isNewLine: et,
  lineBreak: Ae,
  lineBreakG: Qe,
  nonASCIIwhitespace: Ar,
};
function cs(e, t) {
  return re.parse(e, t);
}
function hs(e, t, r) {
  return re.parseExpressionAt(e, t, r);
}
function fs(e, t) {
  return re.tokenizer(e, t);
}
const ps = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Node: Ot,
      Parser: re,
      Position: Ke,
      SourceLocation: mt,
      TokContext: xe,
      Token: jt,
      TokenType: K,
      defaultOptions: Bt,
      getLineInfo: Cr,
      isIdentifierChar: We,
      isIdentifierStart: Te,
      isNewLine: et,
      keywordTypes: Pt,
      lineBreak: Ae,
      lineBreakG: Qe,
      nonASCIIwhitespace: Ar,
      parse: cs,
      parseExpressionAt: hs,
      tokContexts: ue,
      tokTypes: h,
      tokenizer: fs,
      version: cn,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var hn = { exports: {} },
  ds = {
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    frasl: "⁄",
    euro: "€",
    image: "ℑ",
    weierp: "℘",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦",
  };
const oi = uu(ps);
(function (e) {
  const t = ds,
    r = /^[\da-fA-F]+$/,
    i = /^\d+$/,
    u = new WeakMap();
  function s(p) {
    p = p.Parser.acorn || p;
    let D = u.get(p);
    if (!D) {
      const m = p.tokTypes,
        y = p.TokContext,
        A = p.TokenType,
        C = new y("<tag", !1),
        v = new y("</tag", !1),
        E = new y("<tag>...</tag>", !0, !0),
        b = { tc_oTag: C, tc_cTag: v, tc_expr: E },
        T = {
          jsxName: new A("jsxName"),
          jsxText: new A("jsxText", { beforeExpr: !0 }),
          jsxTagStart: new A("jsxTagStart", { startsExpr: !0 }),
          jsxTagEnd: new A("jsxTagEnd"),
        };
      (T.jsxTagStart.updateContext = function () {
        this.context.push(E), this.context.push(C), (this.exprAllowed = !1);
      }),
        (T.jsxTagEnd.updateContext = function (I) {
          let V = this.context.pop();
          (V === C && I === m.slash) || V === v
            ? (this.context.pop(), (this.exprAllowed = this.curContext() === E))
            : (this.exprAllowed = !0);
        }),
        (D = { tokContexts: b, tokTypes: T }),
        u.set(p, D);
    }
    return D;
  }
  function a(p) {
    if (!p) return p;
    if (p.type === "JSXIdentifier") return p.name;
    if (p.type === "JSXNamespacedName")
      return p.namespace.name + ":" + p.name.name;
    if (p.type === "JSXMemberExpression")
      return a(p.object) + "." + a(p.property);
  }
  (e.exports = function (p) {
    return (
      (p = p || {}),
      function (D) {
        return f(
          {
            allowNamespaces: p.allowNamespaces !== !1,
            allowNamespacedObjects: !!p.allowNamespacedObjects,
          },
          D,
        );
      }
    );
  }),
    Object.defineProperty(e.exports, "tokTypes", {
      get: function () {
        return s(oi).tokTypes;
      },
      configurable: !0,
      enumerable: !0,
    });
  function f(p, D) {
    const m = D.acorn || oi,
      y = s(m),
      A = m.tokTypes,
      C = y.tokTypes,
      v = m.tokContexts,
      E = y.tokContexts.tc_oTag,
      b = y.tokContexts.tc_cTag,
      T = y.tokContexts.tc_expr,
      I = m.isNewLine,
      V = m.isIdentifierStart,
      S = m.isIdentifierChar;
    return class extends D {
      static get acornJsx() {
        return y;
      }
      jsx_readToken() {
        let g = "",
          x = this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, "Unterminated JSX contents");
          let F = this.input.charCodeAt(this.pos);
          switch (F) {
            case 60:
            case 123:
              return this.pos === this.start
                ? F === 60 && this.exprAllowed
                  ? (++this.pos, this.finishToken(C.jsxTagStart))
                  : this.getTokenFromCode(F)
                : ((g += this.input.slice(x, this.pos)),
                  this.finishToken(C.jsxText, g));
            case 38:
              (g += this.input.slice(x, this.pos)),
                (g += this.jsx_readEntity()),
                (x = this.pos);
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" +
                  this.input[this.pos] +
                  "`. Did you mean `" +
                  (F === 62 ? "&gt;" : "&rbrace;") +
                  '` or `{"' +
                  this.input[this.pos] +
                  '"}`?',
              );
            default:
              I(F)
                ? ((g += this.input.slice(x, this.pos)),
                  (g += this.jsx_readNewLine(!0)),
                  (x = this.pos))
                : ++this.pos;
          }
        }
      }
      jsx_readNewLine(g) {
        let x = this.input.charCodeAt(this.pos),
          F;
        return (
          ++this.pos,
          x === 13 && this.input.charCodeAt(this.pos) === 10
            ? (++this.pos,
              (F = g
                ? `
`
                : `\r
`))
            : (F = String.fromCharCode(x)),
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos)),
          F
        );
      }
      jsx_readString(g) {
        let x = "",
          F = ++this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, "Unterminated string constant");
          let B = this.input.charCodeAt(this.pos);
          if (B === g) break;
          B === 38
            ? ((x += this.input.slice(F, this.pos)),
              (x += this.jsx_readEntity()),
              (F = this.pos))
            : I(B)
              ? ((x += this.input.slice(F, this.pos)),
                (x += this.jsx_readNewLine(!1)),
                (F = this.pos))
              : ++this.pos;
        }
        return (
          (x += this.input.slice(F, this.pos++)), this.finishToken(A.string, x)
        );
      }
      jsx_readEntity() {
        let g = "",
          x = 0,
          F,
          B = this.input[this.pos];
        B !== "&" &&
          this.raise(this.pos, "Entity must start with an ampersand");
        let R = ++this.pos;
        for (; this.pos < this.input.length && x++ < 10; ) {
          if (((B = this.input[this.pos++]), B === ";")) {
            g[0] === "#"
              ? g[1] === "x"
                ? ((g = g.substr(2)),
                  r.test(g) && (F = String.fromCharCode(parseInt(g, 16))))
                : ((g = g.substr(1)),
                  i.test(g) && (F = String.fromCharCode(parseInt(g, 10))))
              : (F = t[g]);
            break;
          }
          g += B;
        }
        return F || ((this.pos = R), "&");
      }
      jsx_readWord() {
        let g,
          x = this.pos;
        do g = this.input.charCodeAt(++this.pos);
        while (S(g) || g === 45);
        return this.finishToken(C.jsxName, this.input.slice(x, this.pos));
      }
      jsx_parseIdentifier() {
        let g = this.startNode();
        return (
          this.type === C.jsxName
            ? (g.name = this.value)
            : this.type.keyword
              ? (g.name = this.type.keyword)
              : this.unexpected(),
          this.next(),
          this.finishNode(g, "JSXIdentifier")
        );
      }
      jsx_parseNamespacedName() {
        let g = this.start,
          x = this.startLoc,
          F = this.jsx_parseIdentifier();
        if (!p.allowNamespaces || !this.eat(A.colon)) return F;
        var B = this.startNodeAt(g, x);
        return (
          (B.namespace = F),
          (B.name = this.jsx_parseIdentifier()),
          this.finishNode(B, "JSXNamespacedName")
        );
      }
      jsx_parseElementName() {
        if (this.type === C.jsxTagEnd) return "";
        let g = this.start,
          x = this.startLoc,
          F = this.jsx_parseNamespacedName();
        for (
          this.type === A.dot &&
          F.type === "JSXNamespacedName" &&
          !p.allowNamespacedObjects &&
          this.unexpected();
          this.eat(A.dot);

        ) {
          let B = this.startNodeAt(g, x);
          (B.object = F),
            (B.property = this.jsx_parseIdentifier()),
            (F = this.finishNode(B, "JSXMemberExpression"));
        }
        return F;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case A.braceL:
            let g = this.jsx_parseExpressionContainer();
            return (
              g.expression.type === "JSXEmptyExpression" &&
                this.raise(
                  g.start,
                  "JSX attributes must only be assigned a non-empty expression",
                ),
              g
            );
          case C.jsxTagStart:
          case A.string:
            return this.parseExprAtom();
          default:
            this.raise(
              this.start,
              "JSX value should be either an expression or a quoted JSX text",
            );
        }
      }
      jsx_parseEmptyExpression() {
        let g = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(
          g,
          "JSXEmptyExpression",
          this.start,
          this.startLoc,
        );
      }
      jsx_parseExpressionContainer() {
        let g = this.startNode();
        return (
          this.next(),
          (g.expression =
            this.type === A.braceR
              ? this.jsx_parseEmptyExpression()
              : this.parseExpression()),
          this.expect(A.braceR),
          this.finishNode(g, "JSXExpressionContainer")
        );
      }
      jsx_parseAttribute() {
        let g = this.startNode();
        return this.eat(A.braceL)
          ? (this.expect(A.ellipsis),
            (g.argument = this.parseMaybeAssign()),
            this.expect(A.braceR),
            this.finishNode(g, "JSXSpreadAttribute"))
          : ((g.name = this.jsx_parseNamespacedName()),
            (g.value = this.eat(A.eq) ? this.jsx_parseAttributeValue() : null),
            this.finishNode(g, "JSXAttribute"));
      }
      jsx_parseOpeningElementAt(g, x) {
        let F = this.startNodeAt(g, x);
        F.attributes = [];
        let B = this.jsx_parseElementName();
        for (
          B && (F.name = B);
          this.type !== A.slash && this.type !== C.jsxTagEnd;

        )
          F.attributes.push(this.jsx_parseAttribute());
        return (
          (F.selfClosing = this.eat(A.slash)),
          this.expect(C.jsxTagEnd),
          this.finishNode(F, B ? "JSXOpeningElement" : "JSXOpeningFragment")
        );
      }
      jsx_parseClosingElementAt(g, x) {
        let F = this.startNodeAt(g, x),
          B = this.jsx_parseElementName();
        return (
          B && (F.name = B),
          this.expect(C.jsxTagEnd),
          this.finishNode(F, B ? "JSXClosingElement" : "JSXClosingFragment")
        );
      }
      jsx_parseElementAt(g, x) {
        let F = this.startNodeAt(g, x),
          B = [],
          R = this.jsx_parseOpeningElementAt(g, x),
          N = null;
        if (!R.selfClosing) {
          e: for (;;)
            switch (this.type) {
              case C.jsxTagStart:
                if (
                  ((g = this.start),
                  (x = this.startLoc),
                  this.next(),
                  this.eat(A.slash))
                ) {
                  N = this.jsx_parseClosingElementAt(g, x);
                  break e;
                }
                B.push(this.jsx_parseElementAt(g, x));
                break;
              case C.jsxText:
                B.push(this.parseExprAtom());
                break;
              case A.braceL:
                B.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          a(N.name) !== a(R.name) &&
            this.raise(
              N.start,
              "Expected corresponding JSX closing tag for <" + a(R.name) + ">",
            );
        }
        let W = R.name ? "Element" : "Fragment";
        return (
          (F["opening" + W] = R),
          (F["closing" + W] = N),
          (F.children = B),
          this.type === A.relational &&
            this.value === "<" &&
            this.raise(
              this.start,
              "Adjacent JSX elements must be wrapped in an enclosing tag",
            ),
          this.finishNode(F, "JSX" + W)
        );
      }
      jsx_parseText() {
        let g = this.parseLiteral(this.value);
        return (g.type = "JSXText"), g;
      }
      jsx_parseElement() {
        let g = this.start,
          x = this.startLoc;
        return this.next(), this.jsx_parseElementAt(g, x);
      }
      parseExprAtom(g) {
        return this.type === C.jsxText
          ? this.jsx_parseText()
          : this.type === C.jsxTagStart
            ? this.jsx_parseElement()
            : super.parseExprAtom(g);
      }
      readToken(g) {
        let x = this.curContext();
        if (x === T) return this.jsx_readToken();
        if (x === E || x === b) {
          if (V(g)) return this.jsx_readWord();
          if (g == 62) return ++this.pos, this.finishToken(C.jsxTagEnd);
          if ((g === 34 || g === 39) && x == E) return this.jsx_readString(g);
        }
        return g === 60 &&
          this.exprAllowed &&
          this.input.charCodeAt(this.pos + 1) !== 33
          ? (++this.pos, this.finishToken(C.jsxTagStart))
          : super.readToken(g);
      }
      updateContext(g) {
        if (this.type == A.braceL) {
          var x = this.curContext();
          x == E
            ? this.context.push(v.b_expr)
            : x == T
              ? this.context.push(v.b_tmpl)
              : super.updateContext(g),
            (this.exprAllowed = !0);
        } else if (this.type === A.slash && g === C.jsxTagStart)
          (this.context.length -= 2),
            this.context.push(b),
            (this.exprAllowed = !1);
        else return super.updateContext(g);
      }
    };
  }
})(hn);
var ms = hn.exports;
const gs = pt(ms);
function fn(e, t, r, i, u) {
  r || (r = P),
    (function s(a, f, p) {
      var D = p || a.type,
        m = t[D];
      r[D](a, f, s), m && m(a, f);
    })(e, i, u);
}
function Ds(e, t, r, i, u) {
  var s = [];
  r || (r = P),
    (function a(f, p, D) {
      var m = D || f.type,
        y = t[m],
        A = f !== s[s.length - 1];
      A && s.push(f), r[m](f, p, a), y && y(f, p || s, s), A && s.pop();
    })(e, i, u);
}
function Sr(e, t, r) {
  r(e, t);
}
function $e(e, t, r) {}
var P = {};
P.Program = P.BlockStatement = function (e, t, r) {
  for (var i = 0, u = e.body; i < u.length; i += 1) {
    var s = u[i];
    r(s, t, "Statement");
  }
};
P.Statement = Sr;
P.EmptyStatement = $e;
P.ExpressionStatement =
  P.ParenthesizedExpression =
  P.ChainExpression =
    function (e, t, r) {
      return r(e.expression, t, "Expression");
    };
P.IfStatement = function (e, t, r) {
  r(e.test, t, "Expression"),
    r(e.consequent, t, "Statement"),
    e.alternate && r(e.alternate, t, "Statement");
};
P.LabeledStatement = function (e, t, r) {
  return r(e.body, t, "Statement");
};
P.BreakStatement = P.ContinueStatement = $e;
P.WithStatement = function (e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
P.SwitchStatement = function (e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var i = 0, u = e.cases; i < u.length; i += 1) {
    var s = u[i];
    s.test && r(s.test, t, "Expression");
    for (var a = 0, f = s.consequent; a < f.length; a += 1) {
      var p = f[a];
      r(p, t, "Statement");
    }
  }
};
P.SwitchCase = function (e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var i = 0, u = e.consequent; i < u.length; i += 1) {
    var s = u[i];
    r(s, t, "Statement");
  }
};
P.ReturnStatement =
  P.YieldExpression =
  P.AwaitExpression =
    function (e, t, r) {
      e.argument && r(e.argument, t, "Expression");
    };
P.ThrowStatement = P.SpreadElement = function (e, t, r) {
  return r(e.argument, t, "Expression");
};
P.TryStatement = function (e, t, r) {
  r(e.block, t, "Statement"),
    e.handler && r(e.handler, t),
    e.finalizer && r(e.finalizer, t, "Statement");
};
P.CatchClause = function (e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
P.WhileStatement = P.DoWhileStatement = function (e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
P.ForStatement = function (e, t, r) {
  e.init && r(e.init, t, "ForInit"),
    e.test && r(e.test, t, "Expression"),
    e.update && r(e.update, t, "Expression"),
    r(e.body, t, "Statement");
};
P.ForInStatement = P.ForOfStatement = function (e, t, r) {
  r(e.left, t, "ForInit"),
    r(e.right, t, "Expression"),
    r(e.body, t, "Statement");
};
P.ForInit = function (e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
P.DebuggerStatement = $e;
P.FunctionDeclaration = function (e, t, r) {
  return r(e, t, "Function");
};
P.VariableDeclaration = function (e, t, r) {
  for (var i = 0, u = e.declarations; i < u.length; i += 1) {
    var s = u[i];
    r(s, t);
  }
};
P.VariableDeclarator = function (e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
P.Function = function (e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var i = 0, u = e.params; i < u.length; i += 1) {
    var s = u[i];
    r(s, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
P.Pattern = function (e, t, r) {
  e.type === "Identifier"
    ? r(e, t, "VariablePattern")
    : e.type === "MemberExpression"
      ? r(e, t, "MemberPattern")
      : r(e, t);
};
P.VariablePattern = $e;
P.MemberPattern = Sr;
P.RestElement = function (e, t, r) {
  return r(e.argument, t, "Pattern");
};
P.ArrayPattern = function (e, t, r) {
  for (var i = 0, u = e.elements; i < u.length; i += 1) {
    var s = u[i];
    s && r(s, t, "Pattern");
  }
};
P.ObjectPattern = function (e, t, r) {
  for (var i = 0, u = e.properties; i < u.length; i += 1) {
    var s = u[i];
    s.type === "Property"
      ? (s.computed && r(s.key, t, "Expression"), r(s.value, t, "Pattern"))
      : s.type === "RestElement" && r(s.argument, t, "Pattern");
  }
};
P.Expression = Sr;
P.ThisExpression = P.Super = P.MetaProperty = $e;
P.ArrayExpression = function (e, t, r) {
  for (var i = 0, u = e.elements; i < u.length; i += 1) {
    var s = u[i];
    s && r(s, t, "Expression");
  }
};
P.ObjectExpression = function (e, t, r) {
  for (var i = 0, u = e.properties; i < u.length; i += 1) {
    var s = u[i];
    r(s, t);
  }
};
P.FunctionExpression = P.ArrowFunctionExpression = P.FunctionDeclaration;
P.SequenceExpression = function (e, t, r) {
  for (var i = 0, u = e.expressions; i < u.length; i += 1) {
    var s = u[i];
    r(s, t, "Expression");
  }
};
P.TemplateLiteral = function (e, t, r) {
  for (var i = 0, u = e.quasis; i < u.length; i += 1) {
    var s = u[i];
    r(s, t);
  }
  for (var a = 0, f = e.expressions; a < f.length; a += 1) {
    var p = f[a];
    r(p, t, "Expression");
  }
};
P.TemplateElement = $e;
P.UnaryExpression = P.UpdateExpression = function (e, t, r) {
  r(e.argument, t, "Expression");
};
P.BinaryExpression = P.LogicalExpression = function (e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
P.AssignmentExpression = P.AssignmentPattern = function (e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
P.ConditionalExpression = function (e, t, r) {
  r(e.test, t, "Expression"),
    r(e.consequent, t, "Expression"),
    r(e.alternate, t, "Expression");
};
P.NewExpression = P.CallExpression = function (e, t, r) {
  if ((r(e.callee, t, "Expression"), e.arguments))
    for (var i = 0, u = e.arguments; i < u.length; i += 1) {
      var s = u[i];
      r(s, t, "Expression");
    }
};
P.MemberExpression = function (e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
P.ExportNamedDeclaration = P.ExportDefaultDeclaration = function (e, t, r) {
  e.declaration &&
    r(
      e.declaration,
      t,
      e.type === "ExportNamedDeclaration" || e.declaration.id
        ? "Statement"
        : "Expression",
    ),
    e.source && r(e.source, t, "Expression");
};
P.ExportAllDeclaration = function (e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, "Expression");
};
P.ImportDeclaration = function (e, t, r) {
  for (var i = 0, u = e.specifiers; i < u.length; i += 1) {
    var s = u[i];
    r(s, t);
  }
  r(e.source, t, "Expression");
};
P.ImportExpression = function (e, t, r) {
  r(e.source, t, "Expression");
};
P.ImportSpecifier =
  P.ImportDefaultSpecifier =
  P.ImportNamespaceSpecifier =
  P.Identifier =
  P.Literal =
    $e;
P.TaggedTemplateExpression = function (e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
P.ClassDeclaration = P.ClassExpression = function (e, t, r) {
  return r(e, t, "Class");
};
P.Class = function (e, t, r) {
  e.id && r(e.id, t, "Pattern"),
    e.superClass && r(e.superClass, t, "Expression"),
    r(e.body, t);
};
P.ClassBody = function (e, t, r) {
  for (var i = 0, u = e.body; i < u.length; i += 1) {
    var s = u[i];
    r(s, t);
  }
};
P.MethodDefinition = P.Property = function (e, t, r) {
  e.computed && r(e.key, t, "Expression"), r(e.value, t, "Expression");
};
var As = xi,
  Cs = Kn,
  Es = Fi,
  ys = "[object Object]",
  xs = Function.prototype,
  Fs = Object.prototype,
  pn = xs.toString,
  vs = Fs.hasOwnProperty,
  bs = pn.call(Object);
function Ss(e) {
  if (!Es(e) || As(e) != ys) return !1;
  var t = Cs(e);
  if (t === null) return !0;
  var r = vs.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && pn.call(r) == bs;
}
var _s = Ss;
const Bs = pt(_s);
var ws = xi,
  ks = Yn,
  Is = Fi,
  Ts = "[object String]";
function Ps(e) {
  return typeof e == "string" || (!ks(e) && Is(e) && ws(e) == Ts);
}
var Ns = Ps;
const Ls = pt(Ns);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function li(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Os(e) {
  var t, r;
  return li(e) === !1
    ? !1
    : ((t = e.constructor),
      t === void 0
        ? !0
        : ((r = t.prototype),
          !(li(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var dn = {},
  It =
    (lt && lt.__assign) ||
    function () {
      return (
        (It =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) {
              t = arguments[r];
              for (var u in t)
                Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
            }
            return e;
          }),
        It.apply(this, arguments)
      );
    },
  Rs =
    (lt && lt.__spreadArrays) ||
    function () {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++)
        e += arguments[t].length;
      for (var i = Array(e), u = 0, t = 0; t < r; t++)
        for (var s = arguments[t], a = 0, f = s.length; a < f; a++, u++)
          i[u] = s[a];
      return i;
    };
Object.defineProperty(dn, "__esModule", { value: !0 });
var ut = [];
function Ms(e) {
  var t = typeof e;
  return e !== null && (t === "object" || t === "function");
}
function Vs(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function js(e) {
  return Object.getOwnPropertySymbols(e).filter(function (t) {
    return Object.prototype.propertyIsEnumerable.call(e, t);
  });
}
function _t(e, t, r) {
  r === void 0 && (r = "");
  var i = { indent: "	", singleQuotes: !0 },
    u = It(It({}, i), t),
    s;
  u.inlineCharacterLimit === void 0
    ? (s = {
        newLine: `
`,
        newLineOrSpace: `
`,
        pad: r,
        indent: r + u.indent,
      })
    : (s = {
        newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
        newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
        pad: "@@__PRETTY_PRINT_PAD__@@",
        indent: "@@__PRETTY_PRINT_INDENT__@@",
      });
  var a = function (D) {
    if (u.inlineCharacterLimit === void 0) return D;
    var m = D.replace(new RegExp(s.newLine, "g"), "")
      .replace(new RegExp(s.newLineOrSpace, "g"), " ")
      .replace(new RegExp(s.pad + "|" + s.indent, "g"), "");
    return m.length <= u.inlineCharacterLimit
      ? m
      : D.replace(
          new RegExp(s.newLine + "|" + s.newLineOrSpace, "g"),
          `
`,
        )
          .replace(new RegExp(s.pad, "g"), r)
          .replace(new RegExp(s.indent, "g"), r + u.indent);
  };
  if (ut.indexOf(e) !== -1) return '"[Circular]"';
  if (
    e == null ||
    typeof e == "number" ||
    typeof e == "boolean" ||
    typeof e == "function" ||
    typeof e == "symbol" ||
    Vs(e)
  )
    return String(e);
  if (e instanceof Date) return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    ut.push(e);
    var f =
      "[" +
      s.newLine +
      e
        .map(function (D, m) {
          var y = e.length - 1 === m ? s.newLine : "," + s.newLineOrSpace,
            A = _t(D, u, r + u.indent);
          return u.transform && (A = u.transform(e, m, A)), s.indent + A + y;
        })
        .join("") +
      s.pad +
      "]";
    return ut.pop(), a(f);
  }
  if (Ms(e)) {
    var p = Rs(Object.keys(e), js(e));
    if (
      (u.filter &&
        (p = p.filter(function (m) {
          return u.filter && u.filter(e, m);
        })),
      p.length === 0)
    )
      return "{}";
    ut.push(e);
    var f =
      "{" +
      s.newLine +
      p
        .map(function (m, y) {
          var A = p.length - 1 === y ? s.newLine : "," + s.newLineOrSpace,
            C = typeof m == "symbol",
            v = !C && /^[a-z$_][a-z$_0-9]*$/i.test(m.toString()),
            E = C || v ? m : _t(m, u),
            b = _t(e[m], u, r + u.indent);
          return (
            u.transform && (b = u.transform(e, m, b)),
            s.indent + String(E) + ": " + b + A
          );
        })
        .join("") +
      s.pad +
      "}";
    return ut.pop(), a(f);
  }
  return (
    (e = String(e).replace(/[\r\n]/g, function (D) {
      return D ===
        `
`
        ? "\\n"
        : "\\r";
    })),
    u.singleQuotes
      ? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'")
      : ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
  );
}
var qs = (dn.prettyPrint = _t),
  mn = { exports: {} },
  Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r = Symbol.for("react.element"),
  Br = Symbol.for("react.portal"),
  qt = Symbol.for("react.fragment"),
  Ut = Symbol.for("react.strict_mode"),
  Wt = Symbol.for("react.profiler"),
  Gt = Symbol.for("react.provider"),
  zt = Symbol.for("react.context"),
  Us = Symbol.for("react.server_context"),
  $t = Symbol.for("react.forward_ref"),
  Jt = Symbol.for("react.suspense"),
  Ht = Symbol.for("react.suspense_list"),
  Xt = Symbol.for("react.memo"),
  Qt = Symbol.for("react.lazy"),
  Ws = Symbol.for("react.offscreen"),
  gn;
gn = Symbol.for("react.module.reference");
function ve(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _r:
        switch (((e = e.type), e)) {
          case qt:
          case Wt:
          case Ut:
          case Jt:
          case Ht:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Us:
              case zt:
              case $t:
              case Qt:
              case Xt:
              case Gt:
                return e;
              default:
                return t;
            }
        }
      case Br:
        return t;
    }
  }
}
Z.ContextConsumer = zt;
Z.ContextProvider = Gt;
Z.Element = _r;
Z.ForwardRef = $t;
Z.Fragment = qt;
Z.Lazy = Qt;
Z.Memo = Xt;
Z.Portal = Br;
Z.Profiler = Wt;
Z.StrictMode = Ut;
Z.Suspense = Jt;
Z.SuspenseList = Ht;
Z.isAsyncMode = function () {
  return !1;
};
Z.isConcurrentMode = function () {
  return !1;
};
Z.isContextConsumer = function (e) {
  return ve(e) === zt;
};
Z.isContextProvider = function (e) {
  return ve(e) === Gt;
};
Z.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === _r;
};
Z.isForwardRef = function (e) {
  return ve(e) === $t;
};
Z.isFragment = function (e) {
  return ve(e) === qt;
};
Z.isLazy = function (e) {
  return ve(e) === Qt;
};
Z.isMemo = function (e) {
  return ve(e) === Xt;
};
Z.isPortal = function (e) {
  return ve(e) === Br;
};
Z.isProfiler = function (e) {
  return ve(e) === Wt;
};
Z.isStrictMode = function (e) {
  return ve(e) === Ut;
};
Z.isSuspense = function (e) {
  return ve(e) === Jt;
};
Z.isSuspenseList = function (e) {
  return ve(e) === Ht;
};
Z.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === qt ||
    e === Wt ||
    e === Ut ||
    e === Jt ||
    e === Ht ||
    e === Ws ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Qt ||
        e.$$typeof === Xt ||
        e.$$typeof === Gt ||
        e.$$typeof === zt ||
        e.$$typeof === $t ||
        e.$$typeof === gn ||
        e.getModuleId !== void 0))
  );
};
Z.typeOf = ve;
mn.exports = Z;
var _e = mn.exports,
  ke = function (e, t) {
    return e === 0 ? "" : new Array(e * t).fill(" ").join("");
  };
function ht(e) {
  "@babel/helpers - typeof";
  return (
    (ht =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ht(e)
  );
}
function ci(e) {
  return Gs(e) || zs(e) || $s(e) || Js();
}
function Gs(e) {
  if (Array.isArray(e)) return hr(e);
}
function zs(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function $s(e, t) {
  if (e) {
    if (typeof e == "string") return hr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hr(e, t);
  }
}
function hr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function Js() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr(e, t) {
  return e === null ||
    ht(e) !== "object" ||
    e instanceof Date ||
    e instanceof RegExp ||
    Ge.isValidElement(e)
    ? e
    : (t.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return fr(r, t);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, i) {
              return (
                i === "_owner" ||
                  (i === "current" || t.has(e[i])
                    ? (r[i] = "[Circular]")
                    : (r[i] = fr(e[i], t))),
                r
              );
            }, {}));
}
function Hs(e) {
  return fr(e, new WeakSet());
}
var Dn = function (t) {
    return { type: "string", value: t };
  },
  Xs = function (t) {
    return { type: "number", value: t };
  },
  Qs = function (t, r, i, u) {
    return {
      type: "ReactElement",
      displayName: t,
      props: r,
      defaultProps: i,
      childrens: u,
    };
  },
  Ks = function (t, r) {
    return { type: "ReactFragment", key: t, childrens: r };
  },
  Ys = !!Ge.Fragment,
  An = function (t) {
    return !t.name || t.name === "_default" ? "No Display Name" : t.name;
  },
  Zs = function e(t) {
    switch (!0) {
      case !!t.displayName:
        return t.displayName;
      case t.$$typeof === _e.Memo:
        return e(t.type);
      case t.$$typeof === _e.ForwardRef:
        return e(t.render);
      default:
        return An(t);
    }
  },
  ea = function (t) {
    switch (!0) {
      case typeof t.type == "string":
        return t.type;
      case typeof t.type == "function":
        return t.type.displayName ? t.type.displayName : An(t.type);
      case _e.isForwardRef(t):
      case _e.isMemo(t):
        return Zs(t.type);
      case _e.isContextConsumer(t):
        return "".concat(t.type._context.displayName || "Context", ".Consumer");
      case _e.isContextProvider(t):
        return "".concat(t.type._context.displayName || "Context", ".Provider");
      case _e.isLazy(t):
        return "Lazy";
      case _e.isProfiler(t):
        return "Profiler";
      case _e.isStrictMode(t):
        return "StrictMode";
      case _e.isSuspense(t):
        return "Suspense";
      default:
        return "UnknownElementType";
    }
  },
  hi = function (t, r) {
    return r !== "children";
  },
  ta = function (t) {
    return t !== !0 && t !== !1 && t !== null && t !== "";
  },
  fi = function (t, r) {
    var i = {};
    return (
      Object.keys(t)
        .filter(function (u) {
          return r(t[u], u);
        })
        .forEach(function (u) {
          return (i[u] = t[u]);
        }),
      i
    );
  },
  wr = function e(t, r) {
    var i = r.displayName,
      u = i === void 0 ? ea : i;
    if (typeof t == "string") return Dn(t);
    if (typeof t == "number") return Xs(t);
    if (!st.isValidElement(t))
      throw new Error(
        "react-element-to-jsx-string: Expected a React.Element, got `".concat(
          ht(t),
          "`",
        ),
      );
    var s = u(t),
      a = fi(t.props, hi);
    t.ref !== null && (a.ref = t.ref);
    var f = t.key;
    typeof f == "string" && f.search(/^\./) && (a.key = f);
    var p = fi(t.type.defaultProps || {}, hi),
      D = st.Children.toArray(t.props.children)
        .filter(ta)
        .map(function (m) {
          return e(m, r);
        });
    return Ys && t.type === Ge.Fragment ? Ks(f, D) : Qs(s, a, p, D);
  };
function ra() {}
var ia = function (t) {
    return t
      .toString()
      .split(
        `
`,
      )
      .map(function (r) {
        return r.trim();
      })
      .join("");
  },
  pi = ia,
  Cn = function (e, t) {
    var r = t.functionValue,
      i = r === void 0 ? pi : r,
      u = t.showFunctions;
    return i(!u && i === pi ? ra : e);
  },
  na = function (e, t, r, i) {
    var u = Hs(e),
      s = qs(u, {
        transform: function (f, p, D) {
          var m = f[p];
          return m && Ge.isValidElement(m)
            ? Kt(wr(m, i), !0, r, i)
            : typeof m == "function"
              ? Cn(m, i)
              : D;
        },
      });
    return t
      ? s
          .replace(/\s+/g, " ")
          .replace(/{ /g, "{")
          .replace(/ }/g, "}")
          .replace(/\[ /g, "[")
          .replace(/ ]/g, "]")
      : s.replace(/\t/g, ke(1, i.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(ke(r + 1, i.tabStop), "$1"),
        );
  },
  ua = function (t) {
    return t.replace(/"/g, "&quot;");
  },
  sa = function (t, r, i, u) {
    if (typeof t == "number") return "{".concat(String(t), "}");
    if (typeof t == "string") return '"'.concat(ua(t), '"');
    if (ht(t) === "symbol") {
      var s = t
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, "$1");
      return s ? "{Symbol('".concat(s, "')}") : "{Symbol()}";
    }
    return typeof t == "function"
      ? "{".concat(Cn(t, u), "}")
      : Ge.isValidElement(t)
        ? "{".concat(Kt(wr(t, u), !0, i, u), "}")
        : t instanceof Date
          ? isNaN(t.valueOf())
            ? "{new Date(NaN)}"
            : '{new Date("'.concat(t.toISOString(), '")}')
          : Os(t) || Array.isArray(t)
            ? "{".concat(na(t, r, i, u), "}")
            : "{".concat(String(t), "}");
  },
  aa = function (e, t, r, i, u, s, a, f) {
    if (!t && !i)
      throw new Error(
        'The prop "'.concat(
          e,
          '" has no value and no default: could not be formatted',
        ),
      );
    var p = t ? r : u,
      D = f.useBooleanShorthandSyntax,
      m = f.tabStop,
      y = sa(p, s, a, f),
      A = " ",
      C = `
`.concat(ke(a + 1, m)),
      v = y.includes(`
`);
    return (
      D && y === "{false}" && !i
        ? ((A = ""), (C = ""))
        : D && y === "{true}"
          ? ((A += "".concat(e)), (C += "".concat(e)))
          : ((A += "".concat(e, "=").concat(y)),
            (C += "".concat(e, "=").concat(y))),
      {
        attributeFormattedInline: A,
        attributeFormattedMultiline: C,
        isMultilineAttribute: v,
      }
    );
  },
  oa = function (e, t) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      i = e[e.length - 1];
    return (
      i &&
      (t.type === "string" || t.type === "number") &&
      (i.type === "string" || i.type === "number")
        ? r.push(Dn(String(i.value) + String(t.value)))
        : (i && r.push(i), r.push(t)),
      r
    );
  },
  la = function (t) {
    return ["key", "ref"].includes(t);
  },
  ca = function (e) {
    return function (t) {
      var r = t.includes("key"),
        i = t.includes("ref"),
        u = t.filter(function (a) {
          return !la(a);
        }),
        s = ci(e ? u.sort() : u);
      return i && s.unshift("ref"), r && s.unshift("key"), s;
    };
  };
function ha(e, t) {
  return Array.isArray(t)
    ? function (r) {
        return t.indexOf(r) === -1;
      }
    : function (r) {
        return t(e[r], r);
      };
}
var fa = function (t, r, i, u, s) {
    var a = s.tabStop;
    return t.type === "string"
      ? r
          .split(
            `
`,
          )
          .map(function (f, p) {
            return p === 0 ? f : "".concat(ke(u, a)).concat(f);
          }).join(`
`)
      : r;
  },
  pa = function (t, r, i) {
    return function (u) {
      return fa(u, Kt(u, t, r, i), t, r, i);
    };
  },
  da = function (t, r) {
    return function (i) {
      var u = Object.keys(t).includes(i);
      return !u || (u && t[i] !== r[i]);
    };
  },
  En = function (t, r, i, u, s) {
    return s ? ke(i, u).length + r.length > s : t.length > 1;
  },
  ma = function (t, r, i, u, s, a, f) {
    return (En(t, r, s, a, f) || i) && !u;
  },
  yn = function (e, t, r, i) {
    var u = e.type,
      s = e.displayName,
      a = s === void 0 ? "" : s,
      f = e.childrens,
      p = e.props,
      D = p === void 0 ? {} : p,
      m = e.defaultProps,
      y = m === void 0 ? {} : m;
    if (u !== "ReactElement")
      throw new Error(
        'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
          u,
        ),
      );
    var A = i.filterProps,
      C = i.maxInlineAttributesLineLength,
      v = i.showDefaultProps,
      E = i.sortProps,
      b = i.tabStop,
      T = "<".concat(a),
      I = T,
      V = T,
      S = !1,
      g = [],
      x = ha(D, A);
    Object.keys(D)
      .filter(x)
      .filter(da(y, D))
      .forEach(function (R) {
        return g.push(R);
      }),
      Object.keys(y)
        .filter(x)
        .filter(function () {
          return v;
        })
        .filter(function (R) {
          return !g.includes(R);
        })
        .forEach(function (R) {
          return g.push(R);
        });
    var F = ca(E)(g);
    if (
      (F.forEach(function (R) {
        var N = aa(
            R,
            Object.keys(D).includes(R),
            D[R],
            Object.keys(y).includes(R),
            y[R],
            t,
            r,
            i,
          ),
          W = N.attributeFormattedInline,
          q = N.attributeFormattedMultiline,
          M = N.isMultilineAttribute;
        M && (S = !0), (I += W), (V += q);
      }),
      (V += `
`.concat(ke(r, b))),
      ma(F, I, S, t, r, b, C) ? (T = V) : (T = I),
      f && f.length > 0)
    ) {
      var B = r + 1;
      (T += ">"),
        t ||
          ((T += `
`),
          (T += ke(B, b))),
        (T += f
          .reduce(oa, [])
          .map(pa(t, B, i))
          .join(
            t
              ? ""
              : `
`.concat(ke(B, b)),
          )),
        t ||
          ((T += `
`),
          (T += ke(B - 1, b))),
        (T += "</".concat(a, ">"));
    } else En(F, I, r, b, C) || (T += " "), (T += "/>");
    return T;
  },
  ga = "",
  di = "React.Fragment",
  Da = function (t, r, i) {
    var u = {};
    return (
      r && (u = { key: r }),
      {
        type: "ReactElement",
        displayName: t,
        props: u,
        defaultProps: {},
        childrens: i,
      }
    );
  },
  Aa = function (t) {
    var r = t.key;
    return !!r;
  },
  Ca = function (t) {
    var r = t.childrens;
    return r.length === 0;
  },
  Ea = function (e, t, r, i) {
    var u = e.type,
      s = e.key,
      a = e.childrens;
    if (u !== "ReactFragment")
      throw new Error(
        'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
          u,
        ),
      );
    var f = i.useFragmentShortSyntax,
      p;
    return (
      f ? (Ca(e) || Aa(e) ? (p = di) : (p = ga)) : (p = di),
      yn(Da(p, s, a), t, r, i)
    );
  },
  ya = ["<", ">", "{", "}"],
  xa = function (t) {
    return ya.some(function (r) {
      return t.includes(r);
    });
  },
  Fa = function (t) {
    return xa(t) ? "{`".concat(t, "`}") : t;
  },
  va = function (t) {
    var r = t;
    return (
      r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
      r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
      r
    );
  },
  Kt = function (e, t, r, i) {
    if (e.type === "number") return String(e.value);
    if (e.type === "string")
      return e.value ? "".concat(va(Fa(String(e.value)))) : "";
    if (e.type === "ReactElement") return yn(e, t, r, i);
    if (e.type === "ReactFragment") return Ea(e, t, r, i);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  ba = function (e, t) {
    return Kt(e, !1, 0, t);
  },
  ot = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = r.filterProps,
      u = i === void 0 ? [] : i,
      s = r.showDefaultProps,
      a = s === void 0 ? !0 : s,
      f = r.showFunctions,
      p = f === void 0 ? !1 : f,
      D = r.functionValue,
      m = r.tabStop,
      y = m === void 0 ? 2 : m,
      A = r.useBooleanShorthandSyntax,
      C = A === void 0 ? !0 : A,
      v = r.useFragmentShortSyntax,
      E = v === void 0 ? !0 : v,
      b = r.sortProps,
      T = b === void 0 ? !0 : b,
      I = r.maxInlineAttributesLineLength,
      V = r.displayName;
    if (!t)
      throw new Error("react-element-to-jsx-string: Expected a ReactElement");
    var S = {
      filterProps: u,
      showDefaultProps: a,
      showFunctions: p,
      functionValue: D,
      tabStop: y,
      useBooleanShorthandSyntax: C,
      useFragmentShortSyntax: E,
      sortProps: T,
      maxInlineAttributesLineLength: I,
      displayName: V,
    };
    return ba(wr(t, S), S);
  };
const {
    defaultDecorateStory: Sa,
    addons: _a,
    useEffect: Ba,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  { logger: bt } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function wa(e, t) {
  let r = e != null,
    i = t != null;
  if (!r && !i) return "";
  let u = [];
  if (r) {
    let s = e.map((a) => {
      let f = a.getPrettyName(),
        p = a.getTypeName();
      return p != null ? `${f}: ${p}` : f;
    });
    u.push(`(${s.join(", ")})`);
  } else u.push("()");
  return i && u.push(`=> ${t.getTypeName()}`), u.join(" ");
}
function ka(e, t) {
  let r = e != null,
    i = t != null;
  if (!r && !i) return "";
  let u = [];
  return (
    r ? u.push("( ... )") : u.push("()"),
    i && u.push(`=> ${t.getTypeName()}`),
    u.join(" ")
  );
}
function Ia(e) {
  return e.replace(
    /,/g,
    `,\r
`,
  );
}
var pr = "custom",
  Dt = "object",
  kr = "array",
  Ta = "class",
  Ye = "func",
  tt = "element";
function Ir(e) {
  return du.includes(e.toLowerCase());
}
var xn = { format: { indent: { style: "  " }, semicolons: !1 } },
  Pa = { ...xn, format: { newline: "" } },
  Na = { ...xn };
function Oe(e, t = !1) {
  return _i.generate(e, t ? Pa : Na);
}
function dr(e, t = !1) {
  return t ? La(e) : Oe(e);
}
function La(e) {
  let t = Oe(e, !0);
  return t.endsWith(" }") || (t = `${t.slice(0, -1)} }`), t;
}
function mi(e, t = !1) {
  return t ? Ra(e) : Oa(e);
}
function Oa(e) {
  let t = Oe(e);
  return t.endsWith("  }]") && (t = su(t)), t;
}
function Ra(e) {
  let t = Oe(e, !0);
  return t.startsWith("[    ") && (t = t.replace("[    ", "[")), t;
}
var Fn = (e) => e.$$typeof === Symbol.for("react.memo"),
  Ma = (e) => e.$$typeof === Symbol.for("react.forward_ref"),
  Tr = { ...P, JSXElement: () => {} },
  Va = re.extend(gs());
function At(e) {
  return e != null ? e.name : null;
}
function gi(e) {
  return e.filter(
    (t) => t.type === "ObjectExpression" || t.type === "ArrayExpression",
  );
}
function vn(e) {
  let t = [];
  return (
    Ds(
      e,
      {
        ObjectExpression(r, i) {
          t.push(gi(i).length);
        },
        ArrayExpression(r, i) {
          t.push(gi(i).length);
        },
      },
      Tr,
    ),
    Math.max(...t)
  );
}
function ja(e) {
  return { inferredType: { type: "Identifier", identifier: At(e) }, ast: e };
}
function qa(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function Ua(e) {
  let t;
  fn(
    e.body,
    {
      JSXElement(u) {
        t = u;
      },
    },
    Tr,
  );
  let r = {
      type: t != null ? "Element" : "Function",
      params: e.params,
      hasParams: e.params.length !== 0,
    },
    i = At(e.id);
  return i != null && (r.identifier = i), { inferredType: r, ast: e };
}
function Wa(e) {
  let t;
  return (
    fn(
      e.body,
      {
        JSXElement(r) {
          t = r;
        },
      },
      Tr,
    ),
    {
      inferredType: {
        type: t != null ? "Element" : "Class",
        identifier: At(e.id),
      },
      ast: e,
    }
  );
}
function Ga(e) {
  let t = { type: "Element" },
    r = At(e.openingElement.name);
  return r != null && (t.identifier = r), { inferredType: t, ast: e };
}
function za(e) {
  let t = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return At(t) === "shape" ? bn(e.arguments[0]) : null;
}
function bn(e) {
  return { inferredType: { type: "Object", depth: vn(e) }, ast: e };
}
function $a(e) {
  return { inferredType: { type: "Array", depth: vn(e) }, ast: e };
}
function Ja(e) {
  switch (e.type) {
    case "Identifier":
      return ja(e);
    case "Literal":
      return qa(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return Ua(e);
    case "ClassExpression":
      return Wa(e);
    case "JSXElement":
      return Ga(e);
    case "CallExpression":
      return za(e);
    case "ObjectExpression":
      return bn(e);
    case "ArrayExpression":
      return $a(e);
    default:
      return null;
  }
}
function Ha(e) {
  let t = Va.parse(`(${e})`, { ecmaVersion: 2020 }),
    r = { inferredType: { type: "Unknown" }, ast: t };
  if (t.body[0] != null) {
    let i = t.body[0];
    switch (i.type) {
      case "ExpressionStatement": {
        let u = Ja(i.expression);
        u != null && (r = u);
        break;
      }
    }
  }
  return r;
}
function Re(e) {
  try {
    return { ...Ha(e) };
  } catch {}
  return { inferredType: { type: "Unknown" } };
}
var Xa = 150;
function de({ name: e, short: t, compact: r, full: i, inferredType: u }) {
  return { name: e, short: t, compact: r, full: i ?? t, inferredType: u };
}
function Sn(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function Di(e) {
  return e.split(/\r?\n/);
}
function Tt(e, t = !1) {
  return Sn(dr(e, t));
}
function Ai(e, t = !1) {
  return Sn(Oe(e, t));
}
function Qa(e) {
  switch (e) {
    case "Object":
      return Dt;
    case "Array":
      return kr;
    case "Class":
      return Ta;
    case "Function":
      return Ye;
    case "Element":
      return tt;
    default:
      return pr;
  }
}
function _n(e, t) {
  let { inferredType: r, ast: i } = Re(e),
    { type: u } = r,
    s,
    a,
    f;
  switch (u) {
    case "Identifier":
    case "Literal":
      (s = e), (a = e);
      break;
    case "Object": {
      let { depth: p } = r;
      (s = Dt), (a = p === 1 ? Tt(i, !0) : null), (f = Tt(i));
      break;
    }
    case "Element": {
      let { identifier: p } = r;
      (s = p != null && !Ir(p) ? p : tt),
        (a = Di(e).length === 1 ? e : null),
        (f = e);
      break;
    }
    case "Array": {
      let { depth: p } = r;
      (s = kr), (a = p <= 2 ? Ai(i, !0) : null), (f = Ai(i));
      break;
    }
    default:
      (s = Qa(u)), (a = Di(e).length === 1 ? e : null), (f = e);
      break;
  }
  return de({ name: t, short: s, compact: a, full: f, inferredType: u });
}
function Ka({ raw: e }) {
  return e != null
    ? _n(e, "custom")
    : de({ name: "custom", short: pr, compact: pr });
}
function Ya(e) {
  let { jsDocTags: t } = e;
  return t != null && (t.params != null || t.returns != null)
    ? de({
        name: "func",
        short: ka(t.params, t.returns),
        compact: null,
        full: wa(t.params, t.returns),
      })
    : de({ name: "func", short: Ye, compact: Ye });
}
function Za(e, t) {
  let r = Object.keys(e.value)
      .map((a) => `${a}: ${Ze(e.value[a], t).full}`)
      .join(", "),
    { inferredType: i, ast: u } = Re(`{ ${r} }`),
    { depth: s } = i;
  return de({
    name: "shape",
    short: Dt,
    compact: s === 1 && u ? Tt(u, !0) : null,
    full: u ? Tt(u) : null,
  });
}
function or(e) {
  return `objectOf(${e})`;
}
function eo(e, t) {
  let { short: r, compact: i, full: u } = Ze(e.value, t);
  return de({
    name: "objectOf",
    short: or(r),
    compact: i != null ? or(i) : null,
    full: u && or(u),
  });
}
function to(e, t) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce(
      (i, u) => {
        let { short: s, compact: a, full: f } = Ze(u, t);
        return i.short.push(s), i.compact.push(a), i.full.push(f), i;
      },
      { short: [], compact: [], full: [] },
    );
    return de({
      name: "union",
      short: r.short.join(" | "),
      compact: r.compact.every((i) => i != null) ? r.compact.join(" | ") : null,
      full: r.full.join(" | "),
    });
  }
  return de({ name: "union", short: e.value, compact: null });
}
function ro({ value: e, computed: t }) {
  return t
    ? _n(e, "enumvalue")
    : de({ name: "enumvalue", short: e, compact: e });
}
function io(e) {
  if (Array.isArray(e.value)) {
    let t = e.value.reduce(
      (r, i) => {
        let { short: u, compact: s, full: a } = ro(i);
        return r.short.push(u), r.compact.push(s), r.full.push(a), r;
      },
      { short: [], compact: [], full: [] },
    );
    return de({
      name: "enum",
      short: t.short.join(" | "),
      compact: t.compact.every((r) => r != null) ? t.compact.join(" | ") : null,
      full: t.full.join(" | "),
    });
  }
  return de({ name: "enum", short: e.value, compact: e.value });
}
function mr(e) {
  return `${e}[]`;
}
function Ci(e) {
  return `[${e}]`;
}
function Ei(e, t, r) {
  return de({
    name: "arrayOf",
    short: mr(e),
    compact: t != null ? Ci(t) : null,
    full: r && Ci(r),
  });
}
function no(e, t) {
  let {
    name: r,
    short: i,
    compact: u,
    full: s,
    inferredType: a,
  } = Ze(e.value, t);
  if (r === "custom") {
    if (a === "Object") return Ei(i, u, s);
  } else if (r === "shape") return Ei(i, u, s);
  return de({ name: "arrayOf", short: mr(i), compact: mr(i) });
}
function Ze(e, t) {
  try {
    switch (e.name) {
      case "custom":
        return Ka(e);
      case "func":
        return Ya(t);
      case "shape":
        return Za(e, t);
      case "instanceOf":
        return de({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return eo(e, t);
      case "union":
        return to(e, t);
      case "enum":
        return io(e);
      case "arrayOf":
        return no(e, t);
      default:
        return de({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return de({ name: "unknown", short: "unknown", compact: "unknown" });
}
function uo(e) {
  let { type: t } = e.docgenInfo;
  if (t == null) return null;
  try {
    switch (t.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: i, full: u } = Ze(t, e);
        return i != null && !nu(i) ? te(i) : u ? te(r, u) : te(r);
      }
      case "func": {
        let { short: r, full: i } = Ze(t, e),
          u = r,
          s;
        return i && i.length < Xa ? (u = i) : i && (s = Ia(i)), te(u, s);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function Bn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r === 1) {
    let i = dr(t, !0);
    if (!ft(i)) return te(i);
  }
  return te(Dt, dr(t));
}
function wn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r <= 2) {
    let i = mi(t, !0);
    if (!ft(i)) return te(i);
  }
  return te(kr, mi(t));
}
function Pr(e, t) {
  return t ? `${e}( ... )` : `${e}()`;
}
function Yt(e) {
  return `<${e} />`;
}
function kn(e) {
  let { type: t, identifier: r } = e;
  switch (t) {
    case "Function":
      return Pr(r, e.hasParams);
    case "Element":
      return Yt(r);
    default:
      return r;
  }
}
function so({ inferredType: e, ast: t }) {
  let { identifier: r } = e;
  if (r != null) return te(kn(e), Oe(t));
  let i = Oe(t, !0);
  return ft(i) ? te(Ye, Oe(t)) : te(i);
}
function ao(e, t) {
  let { inferredType: r } = t,
    { identifier: i } = r;
  if (i != null && !Ir(i)) {
    let u = kn(r);
    return te(u, e);
  }
  return ft(e) ? te(tt, e) : te(e);
}
function In(e) {
  try {
    let t = Re(e);
    switch (t.inferredType.type) {
      case "Object":
        return Bn(t);
      case "Function":
        return so(t);
      case "Element":
        return ao(e, t);
      case "Array":
        return wn(t);
      default:
        return null;
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
function Tn(e) {
  return e.$$typeof != null;
}
function Pn(e, t) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== t ? r : null;
}
var oo = (e) => te(JSON.stringify(e));
function lo(e) {
  let { type: t } = e,
    { displayName: r } = t,
    i = ot(e, {});
  if (r != null) {
    let u = Yt(r);
    return te(u, i);
  }
  if (Ls(t) && Ir(t)) {
    let u = ot(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!ft(u)) return te(u);
  }
  return te(tt, i);
}
var co = (e) => {
    if (Tn(e) && e.type != null) return lo(e);
    if (Bs(e)) {
      let t = Re(JSON.stringify(e));
      return Bn(t);
    }
    if (Array.isArray(e)) {
      let t = Re(JSON.stringify(e));
      return wn(t);
    }
    return te(Dt);
  },
  ho = (e, t) => {
    let r = !1,
      i;
    if (Gr(e.render)) r = !0;
    else if (e.prototype != null && Gr(e.prototype.render)) r = !0;
    else {
      let s;
      try {
        i = Re(e.toString());
        let { hasParams: a, params: f } = i.inferredType;
        a
          ? f.length === 1 && f[0].type === "ObjectPattern" && (s = e({}))
          : (s = e()),
          s != null && Tn(s) && (r = !0);
      } catch {}
    }
    let u = Pn(e, t.name);
    if (u != null) {
      if (r) return te(Yt(u));
      i != null && (i = Re(e.toString()));
      let { hasParams: s } = i.inferredType;
      return te(Pr(u, s));
    }
    return te(r ? tt : Ye);
  },
  fo = (e) => te(e.toString()),
  Nn = { string: oo, object: co, function: ho, default: fo };
function po(e = {}) {
  return { ...Nn, ...e };
}
function mo(e, t, r = Nn) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, t);
      case "object":
        return r.object(e, t);
      case "function":
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function go(e, t) {
  let { propTypes: r } = t;
  return r != null
    ? Object.keys(r)
        .map((i) => e.find((u) => u.name === i))
        .filter(Boolean)
    : e;
}
var Do = (e, { name: t, type: r }) => {
    let i =
        (r == null ? void 0 : r.summary) === "element" ||
        (r == null ? void 0 : r.summary) === "elementType",
      u = Pn(e, t);
    if (u != null) {
      if (i) return te(Yt(u));
      let { hasParams: s } = Re(e.toString()).inferredType;
      return te(Pr(u, s));
    }
    return te(i ? tt : Ye);
  },
  Ao = po({ function: Do });
function Co(e, t) {
  let { propDef: r } = e,
    i = uo(e);
  i != null && (r.type = i);
  let { defaultValue: u } = e.docgenInfo;
  if (u != null && u.value != null) {
    let s = In(u.value);
    s != null && (r.defaultValue = s);
  } else if (t != null) {
    let s = mo(t, r, Ao);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function Eo(e, t) {
  let r = t.defaultProps != null ? t.defaultProps : {},
    i = e.map((u) => Co(u, r[u.propDef.name]));
  return go(i, t);
}
function yo(e, t) {
  let { propDef: r } = e,
    { defaultValue: i } = e.docgenInfo;
  if (i != null && i.value != null) {
    let u = In(i.value);
    u != null && (r.defaultValue = u);
  }
  return r;
}
function xo(e) {
  return e.map((t) => yo(t));
}
var yi = new Map();
Object.keys(Jr).forEach((e) => {
  let t = Jr[e];
  yi.set(t, e), yi.set(t.isRequired, e);
});
function Fo(e, t) {
  let r = e;
  !ru(e) && !e.propTypes && Fn(e) && (r = e.type);
  let i = iu(r, t);
  if (i.length === 0) return [];
  switch (i[0].typeSystem) {
    case zr.JAVASCRIPT:
      return Eo(i, e);
    case zr.TYPESCRIPT:
      return xo(i);
    default:
      return i.map((u) => u.propDef);
  }
}
var vo = (e) => ({ rows: Fo(e, "props") }),
  bo = (e) => {
    if (e) {
      let { rows: t } = vo(e);
      if (t)
        return t.reduce((r, i) => {
          let {
            name: u,
            description: s,
            type: a,
            sbType: f,
            defaultValue: p,
            jsDocTags: D,
            required: m,
          } = i;
          return (
            (r[u] = {
              name: u,
              description: s,
              type: { required: m, ...f },
              table: {
                type: a ?? void 0,
                jsDocTags: D,
                defaultValue: p ?? void 0,
              },
            }),
            r
          );
        }, {});
    }
    return null;
  },
  So = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  _o = (e) =>
    (e.$$typeof || e)
      .toString()
      .replace(/^Symbol\((.*)\)$/, "$1")
      .split(".")
      .map((t) => t.split("_").map(So).join(""))
      .join(".");
function gr(e) {
  if (Ge.isValidElement(e)) {
    let t = Object.keys(e.props).reduce(
      (r, i) => ((r[i] = gr(e.props[i])), r),
      {},
    );
    return { ...e, props: t, _owner: null };
  }
  return Array.isArray(e) ? e.map(gr) : e;
}
var Bo = (e, t) => {
    if (typeof e > "u")
      return bt.warn("Too many skip or undefined component"), null;
    let r = e,
      i = r.type;
    for (let a = 0; a < (t == null ? void 0 : t.skip); a += 1) {
      if (typeof r > "u") return bt.warn("Cannot skip undefined element"), null;
      if (st.Children.count(r) > 1)
        return bt.warn("Trying to skip an array of elements"), null;
      typeof r.props.children > "u"
        ? (bt.warn("Not enough children to skip elements."),
          typeof r.type == "function" &&
            r.type.name === "" &&
            (r = st.createElement(i, { ...r.props })))
        : typeof r.props.children == "function"
          ? (r = r.props.children())
          : (r = r.props.children);
    }
    let u;
    typeof (t == null ? void 0 : t.displayName) == "string"
      ? (u = { showFunctions: !0, displayName: () => t.displayName })
      : (u = {
          displayName: (a) => {
            var f;
            return a.type.displayName
              ? a.type.displayName
              : $r(a.type, "displayName")
                ? $r(a.type, "displayName")
                : (f = a.type.render) != null && f.displayName
                  ? a.type.render.displayName
                  : typeof a.type == "symbol" ||
                      (a.type.$$typeof && typeof a.type.$$typeof == "symbol")
                    ? _o(a.type)
                    : a.type.name && a.type.name !== "_default"
                      ? a.type.name
                      : typeof a.type == "function"
                        ? "No Display Name"
                        : Ma(a.type)
                          ? a.type.render.name
                          : Fn(a.type)
                            ? a.type.type.name
                            : a.type;
          },
        });
    let s = { ...u, filterProps: (a, f) => a !== void 0, ...t };
    return st.Children.map(e, (a) => {
      let f = typeof a == "number" ? a.toString() : a,
        p = (typeof ot == "function" ? ot : ot.default)(gr(f), s);
      if (p.indexOf("&quot;") > -1) {
        let D = p.match(/\S+=\\"([^"]*)\\"/g);
        D &&
          D.forEach((m) => {
            p = p.replace(m, m.replace(/&quot;/g, "'"));
          });
      }
      return p;
    })
      .join(
        `
`,
      )
      .replace(/function\s+noRefCheck\(\)\s*\{\}/g, "() => {}");
  },
  wo = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  ko = (e) => {
    var i;
    let t =
        (i = e == null ? void 0 : e.parameters.docs) == null
          ? void 0
          : i.source,
      r = e == null ? void 0 : e.parameters.__isArgsStory;
    return (t == null ? void 0 : t.type) === Wr.DYNAMIC
      ? !1
      : !r ||
          (t == null ? void 0 : t.code) ||
          (t == null ? void 0 : t.type) === Wr.CODE;
  },
  Io = (e) => {
    var t, r;
    return (
      ((t = e.type) == null ? void 0 : t.displayName) === "MDXCreateElement" &&
      !!((r = e.props) != null && r.mdxType)
    );
  },
  Ln = (e) => {
    if (!Io(e)) return e;
    let { mdxType: t, originalType: r, children: i, ...u } = e.props,
      s = [];
    return (
      i && (s = (Array.isArray(i) ? i : [i]).map(Ln)),
      Ge.createElement(r, u, ...s)
    );
  },
  On = (e, t) => {
    var m, y;
    let r = _a.getChannel(),
      i = ko(t),
      u = "";
    Ba(() => {
      if (!i) {
        let { id: A, unmappedArgs: C } = t;
        r.emit(tu, { id: A, source: u, args: C });
      }
    });
    let s = e();
    if (i) return s;
    let a = { ...wo, ...((t == null ? void 0 : t.parameters.jsx) || {}) },
      f =
        (y =
          (m = t == null ? void 0 : t.parameters.docs) == null
            ? void 0
            : m.source) != null && y.excludeDecorators
          ? t.originalStoryFn(t.args, t)
          : s,
      p = Ln(f),
      D = Bo(p, a);
    return D && (u = D), s;
  },
  Oo = (e, t) => {
    let r = t.findIndex((u) => u.originalFn === On),
      i = r === -1 ? t : [...t.splice(r, 1), ...t];
    return Sa(e, i);
  },
  Ro = {
    docs: {
      story: { inline: !0 },
      extractArgTypes: bo,
      extractComponentDescription: Zn,
    },
  },
  Mo = [On],
  Vo = [eu];
export {
  Oo as applyDecorators,
  Vo as argTypesEnhancers,
  Mo as decorators,
  Ro as parameters,
};
