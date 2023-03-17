var vo = Object.defineProperty;
var mo = (t, n, e) => n in t ? vo(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var P = (t, n, e) => (mo(t, typeof n != "symbol" ? n + "" : n, e), e), dt = (t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
};
var p = (t, n, e) => (dt(t, n, "read from private field"), e ? e.call(t) : n.get(t)), E = (t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, S = (t, n, e, o) => (dt(t, n, "write to private field"), o ? o.call(t, e) : n.set(t, e), e);
var I = (t, n, e) => (dt(t, n, "access private method"), e);
var ct, N, _n, fn, ke, Ot, Ue = {}, un = [], bo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ee(t, n) {
  for (var e in n)
    t[e] = n[e];
  return t;
}
function dn(t) {
  var n = t.parentNode;
  n && n.removeChild(t);
}
function pn(t, n, e) {
  var o, r, s, l = {};
  for (s in n)
    s == "key" ? o = n[s] : s == "ref" ? r = n[s] : l[s] = n[s];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ct.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      l[s] === void 0 && (l[s] = t.defaultProps[s]);
  return je(t, l, o, r, null);
}
function je(t, n, e, o, r) {
  var s = { type: t, props: n, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r ?? ++_n };
  return r == null && N.vnode != null && N.vnode(s), s;
}
function wo() {
  return { current: null };
}
function at(t) {
  return t.children;
}
function ze(t, n) {
  this.props = t, this.context = n;
}
function $e(t, n) {
  if (n == null)
    return t.__ ? $e(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var e; n < t.__k.length; n++)
    if ((e = t.__k[n]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? $e(t) : null;
}
function gn(t) {
  var n, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
      if ((e = t.__k[n]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return gn(t);
  }
}
function Ut(t) {
  (!t.__d && (t.__d = !0) && ke.push(t) && !Fe.__r++ || Ot !== N.debounceRendering) && ((Ot = N.debounceRendering) || setTimeout)(Fe);
}
function Fe() {
  for (var t; Fe.__r = ke.length; )
    t = ke.sort(function(n, e) {
      return n.__v.__b - e.__v.__b;
    }), ke = [], t.some(function(n) {
      var e, o, r, s, l, a;
      n.__d && (l = (s = (e = n).__v).__e, (a = e.__P) && (o = [], (r = ee({}, s)).__v = s.__v + 1, xt(a, s, r, e.__n, a.ownerSVGElement !== void 0, s.__h != null ? [l] : null, o, l ?? $e(s), s.__h), bn(o, s), s.__e != l && gn(s)));
    });
}
function yn(t, n, e, o, r, s, l, a, h, u) {
  var i, d, _, c, f, v, y, g = o && o.__k || un, b = g.length;
  for (e.__k = [], i = 0; i < n.length; i++)
    if ((c = e.__k[i] = (c = n[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? je(null, c, null, null, c) : Array.isArray(c) ? je(at, { children: c }, null, null, null) : c.__b > 0 ? je(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (_ = g[i]) === null || _ && c.key == _.key && c.type === _.type)
        g[i] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((_ = g[d]) && c.key == _.key && c.type === _.type) {
            g[d] = void 0;
            break;
          }
          _ = null;
        }
      xt(t, c, _ = _ || Ue, r, s, l, a, h, u), f = c.__e, (d = c.ref) && _.ref != d && (y || (y = []), _.ref && y.push(_.ref, null, c), y.push(d, c.__c || f, c)), f != null ? (v == null && (v = f), typeof c.type == "function" && c.__k === _.__k ? c.__d = h = vn(c, h, t) : h = mn(t, c, _, g, f, h), typeof e.type == "function" && (e.__d = h)) : h && _.__e == h && h.parentNode != t && (h = $e(_));
    }
  for (e.__e = v, i = b; i--; )
    g[i] != null && kn(g[i], g[i]);
  if (y)
    for (i = 0; i < y.length; i++)
      wn(y[i], y[++i], y[++i]);
}
function vn(t, n, e) {
  for (var o, r = t.__k, s = 0; r && s < r.length; s++)
    (o = r[s]) && (o.__ = t, n = typeof o.type == "function" ? vn(o, n, e) : mn(e, o, o, r, o.__e, n));
  return n;
}
function mn(t, n, e, o, r, s) {
  var l, a, h;
  if (n.__d !== void 0)
    l = n.__d, n.__d = void 0;
  else if (e == null || r != s || r.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(r), l = null;
      else {
        for (a = s, h = 0; (a = a.nextSibling) && h < o.length; h += 2)
          if (a == r)
            break e;
        t.insertBefore(r, s), l = s;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function ko(t, n, e, o, r) {
  var s;
  for (s in e)
    s === "children" || s === "key" || s in n || Be(t, s, null, e[s], o);
  for (s in n)
    r && typeof n[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || e[s] === n[s] || Be(t, s, n[s], e[s], o);
}
function Ft(t, n, e) {
  n[0] === "-" ? t.setProperty(n, e) : t[n] = e == null ? "" : typeof e != "number" || bo.test(n) ? e : e + "px";
}
function Be(t, n, e, o, r) {
  var s;
  e:
    if (n === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (n in o)
            e && n in e || Ft(t.style, n, "");
        if (e)
          for (n in e)
            o && e[n] === o[n] || Ft(t.style, n, e[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      s = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in t ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + s] = e, e ? o || t.addEventListener(n, s ? Vt : Bt, s) : t.removeEventListener(n, s ? Vt : Bt, s);
    else if (n !== "dangerouslySetInnerHTML") {
      if (r)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in t)
        try {
          t[n] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && n.indexOf("-") == -1 ? t.removeAttribute(n) : t.setAttribute(n, e));
    }
}
function Bt(t) {
  this.l[t.type + !1](N.event ? N.event(t) : t);
}
function Vt(t) {
  this.l[t.type + !0](N.event ? N.event(t) : t);
}
function xt(t, n, e, o, r, s, l, a, h) {
  var u, i, d, _, c, f, v, y, g, b, C, R, D, $, M, w = n.type;
  if (n.constructor !== void 0)
    return null;
  e.__h != null && (h = e.__h, a = n.__e = e.__e, n.__h = null, s = [a]), (u = N.__b) && u(n);
  try {
    e:
      if (typeof w == "function") {
        if (y = n.props, g = (u = w.contextType) && o[u.__c], b = u ? g ? g.props.value : u.__ : o, e.__c ? v = (i = n.__c = e.__c).__ = i.__E : ("prototype" in w && w.prototype.render ? n.__c = i = new w(y, b) : (n.__c = i = new ze(y, b), i.constructor = w, i.render = xo), g && g.sub(i), i.props = y, i.state || (i.state = {}), i.context = b, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ee({}, i.__s)), ee(i.__s, w.getDerivedStateFromProps(y, i.__s))), _ = i.props, c = i.state, d)
          w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && y !== _ && i.componentWillReceiveProps != null && i.componentWillReceiveProps(y, b), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(y, i.__s, b) === !1 || n.__v === e.__v) {
            for (i.props = y, i.state = i.__s, n.__v !== e.__v && (i.__d = !1), i.__v = n, n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(m) {
              m && (m.__ = n);
            }), C = 0; C < i._sb.length; C++)
              i.__h.push(i._sb[C]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(y, i.__s, b), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(_, c, f);
          });
        }
        if (i.context = b, i.props = y, i.__v = n, i.__P = t, R = N.__r, D = 0, "prototype" in w && w.prototype.render) {
          for (i.state = i.__s, i.__d = !1, R && R(n), u = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, R && R(n), u = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++D < 25);
        i.state = i.__s, i.getChildContext != null && (o = ee(ee({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(_, c)), M = u != null && u.type === at && u.key == null ? u.props.children : u, yn(t, Array.isArray(M) ? M : [M], n, e, o, r, s, l, a, h), i.base = n.__e, n.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = Co(e.__e, n, e, o, r, s, l, h);
    (u = N.diffed) && u(n);
  } catch (m) {
    n.__v = null, (h || s != null) && (n.__e = a, n.__h = !!h, s[s.indexOf(a)] = null), N.__e(m, n, e);
  }
}
function bn(t, n) {
  N.__c && N.__c(n, t), t.some(function(e) {
    try {
      t = e.__h, e.__h = [], t.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      N.__e(o, e.__v);
    }
  });
}
function Co(t, n, e, o, r, s, l, a) {
  var h, u, i, d = e.props, _ = n.props, c = n.type, f = 0;
  if (c === "svg" && (r = !0), s != null) {
    for (; f < s.length; f++)
      if ((h = s[f]) && "setAttribute" in h == !!c && (c ? h.localName === c : h.nodeType === 3)) {
        t = h, s[f] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(_);
    t = r ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, _.is && _), s = null, a = !1;
  }
  if (c === null)
    d === _ || a && t.data === _ || (t.data = _);
  else {
    if (s = s && ct.call(t.childNodes), u = (d = e.props || Ue).dangerouslySetInnerHTML, i = _.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || u) && (i && (u && i.__html == u.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (ko(t, _, d, r, a), i)
      n.__k = [];
    else if (f = n.props.children, yn(t, Array.isArray(f) ? f : [f], n, e, o, r && c !== "foreignObject", s, l, s ? s[0] : e.__k && $e(e, 0), a), s != null)
      for (f = s.length; f--; )
        s[f] != null && dn(s[f]);
    a || ("value" in _ && (f = _.value) !== void 0 && (f !== t.value || c === "progress" && !f || c === "option" && f !== d.value) && Be(t, "value", f, d.value, !1), "checked" in _ && (f = _.checked) !== void 0 && f !== t.checked && Be(t, "checked", f, d.checked, !1));
  }
  return t;
}
function wn(t, n, e) {
  try {
    typeof t == "function" ? t(n) : t.current = n;
  } catch (o) {
    N.__e(o, e);
  }
}
function kn(t, n, e) {
  var o, r;
  if (N.unmount && N.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || wn(o, null, n)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (s) {
        N.__e(s, n);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (r = 0; r < o.length; r++)
      o[r] && kn(o[r], n, e || typeof t.type != "function");
  e || t.__e == null || dn(t.__e), t.__ = t.__e = t.__d = void 0;
}
function xo(t, n, e) {
  return this.constructor(t, e);
}
function Eo(t, n, e) {
  var o, r, s;
  N.__ && N.__(t, n), r = (o = typeof e == "function") ? null : e && e.__k || n.__k, s = [], xt(n, t = (!o && e || n).__k = pn(at, null, [t]), r || Ue, Ue, n.ownerSVGElement !== void 0, !o && e ? [e] : r ? null : n.firstChild ? ct.call(n.childNodes) : null, s, !o && e ? e : r ? r.__e : n.firstChild, o), bn(s, t);
}
ct = un.slice, N = { __e: function(t, n, e, o) {
  for (var r, s, l; n = n.__; )
    if ((r = n.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(t)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), l = r.__d), l)
          return r.__E = r;
      } catch (a) {
        t = a;
      }
  throw t;
} }, _n = 0, fn = function(t) {
  return t != null && t.constructor === void 0;
}, ze.prototype.setState = function(t, n) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof t == "function" && (t = t(ee({}, e), this.props)), t && ee(e, t), t != null && this.__v && (n && this._sb.push(n), Ut(this));
}, ze.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ut(this));
}, ze.prototype.render = at, ke = [], Fe.__r = 0;
var Ro = 0;
function Cn(t, n, e, o, r) {
  var s, l, a = {};
  for (l in n)
    l == "ref" ? s = n[l] : a[l] = n[l];
  var h = { type: t, props: a, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ro, __source: r, __self: o };
  if (typeof t == "function" && (s = t.defaultProps))
    for (l in s)
      a[l] === void 0 && (a[l] = s[l]);
  return N.vnode && N.vnode(h), h;
}
var K;
class $o {
  constructor(n = "") {
    E(this, K, void 0);
    typeof n == "object" ? S(this, K, n) : S(this, K, document.appendChild(document.createComment(n)));
  }
  on(n, e, o) {
    p(this, K).addEventListener(n, e, o);
  }
  once(n, e, o) {
    p(this, K).addEventListener(n, e, { once: !0, ...o });
  }
  off(n, e, o) {
    p(this, K).removeEventListener(n, e, o);
  }
  emit(n) {
    return p(this, K).dispatchEvent(n), n;
  }
}
K = new WeakMap();
const mt = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
class Et extends $o {
  on(n, e, o) {
    super.on(n, e, o);
  }
  off(n, e, o) {
    super.off(n, e, o);
  }
  once(n, e, o) {
    super.once(n, e, o);
  }
  emit(n, e) {
    return typeof n == "string" && (mt.has(n) ? (n = new Event(n), Object.assign(n, { detail: e })) : n = new CustomEvent(n, { detail: e })), super.emit(Et.createEvent(n, e));
  }
  static createEvent(n, e) {
    return typeof n == "string" && (mt.has(n) ? (n = new Event(n), Object.assign(n, { detail: e })) : n = new CustomEvent(n, { detail: e })), n;
  }
}
var q, Ae, re, be;
class Gt extends Et {
  constructor(e = "", o) {
    super(e);
    E(this, re);
    E(this, q, /* @__PURE__ */ new Map());
    E(this, Ae, void 0);
    S(this, Ae, o == null ? void 0 : o.customEventSuffix);
  }
  on(e, o, r) {
    e = I(this, re, be).call(this, e), super.on(e, o, r), p(this, q).set(o, [e, r]);
  }
  off(e, o, r) {
    e = I(this, re, be).call(this, e), super.off(e, o, r), p(this, q).delete(o);
  }
  once(e, o, r) {
    e = I(this, re, be).call(this, e);
    const s = (l) => {
      o(l), p(this, q).delete(s);
    };
    super.once(e, s, r), p(this, q).set(s, [e, r]);
  }
  emit(e, o) {
    return typeof e == "string" && (e = I(this, re, be).call(this, e)), super.emit(e, o);
  }
  offAll() {
    Array.from(p(this, q).entries()).forEach(([e, [o, r]]) => {
      super.off(o, e, r);
    }), p(this, q).clear();
  }
}
q = new WeakMap(), Ae = new WeakMap(), re = new WeakSet(), be = function(e) {
  const o = p(this, Ae);
  return mt.has(e) || typeof o != "string" || e.endsWith(o) ? e : `${e}${o}`;
};
function So(t, n) {
  if (t == null)
    return [t, void 0];
  typeof n == "string" && (n = n.split("."));
  const e = n.join(".");
  let o = t;
  const r = [o];
  for (; typeof o == "object" && o !== null && n.length; ) {
    let s = n.shift(), l;
    const a = s.indexOf("[");
    if (a > 0 && a < s.length - 1 && s.endsWith("]") && (l = s.substring(a + 1, s.length - 1), s = s.substring(0, a)), o = o[s], r.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], r.push(o);
      else
        throw new Error(`Cannot access property "${s}[${l}]", the full path is "${e}".`);
  }
  if (n.length)
    throw new Error(`Cannot access property with rest path "${n.join(".")}", the full path is "${e}".`);
  return r;
}
function Mo(t, n, e) {
  const o = So(t, n), r = o[o.length - 1];
  return r === void 0 ? e : r;
}
function pt(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function bt(t, ...n) {
  if (!n.length)
    return t;
  const e = n.shift();
  if (pt(t) && pt(e))
    for (const o in e)
      pt(e[o]) ? (t[o] || Object.assign(t, { [o]: {} }), bt(t[o], e[o])) : Object.assign(t, { [o]: e[o] });
  return bt(t, ...n);
}
function we(t, ...n) {
  if (n.length === 0)
    return t;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const e = n[0];
    return Object.keys(e).forEach((o) => {
      const r = e[o] ?? 0;
      t = t.replace(new RegExp(`\\{${o}\\}`, "g"), `${r}`);
    }), t;
  }
  for (let e = 0; e < n.length; e++) {
    const o = n[e] ?? "";
    t = t.replace(new RegExp(`\\{${e}\\}`, "g"), `${o}`);
  }
  return t;
}
var hn;
let Rt = ((hn = document.documentElement.getAttribute("lang")) == null ? void 0 : hn.toLowerCase()) ?? "zh_cn", J;
function Ao() {
  return Rt;
}
function No(t) {
  Rt = t.toLowerCase();
}
function Ho(t, n) {
  J || (J = {}), typeof t == "string" && (t = { [t]: n ?? {} }), bt(J, t);
}
function De(t, n, e, o, r, s) {
  Array.isArray(t) ? J && t.unshift(J) : t = J ? [J, t] : [t], typeof e == "string" && (s = r, r = o, o = e, e = void 0);
  const l = r || Rt;
  let a;
  for (const h of t) {
    if (!h)
      continue;
    const u = h[l];
    if (!u)
      continue;
    const i = s && h === J ? `${s}.${n}` : n;
    if (a = Mo(u, i), a !== void 0)
      break;
  }
  return a === void 0 ? o : e ? we(a, ...Array.isArray(e) ? e : [e]) : a;
}
De.addLang = Ho;
De.getCode = Ao;
De.setCode = No;
function To(t) {
  return Object.fromEntries(Object.entries(t).map(([n, e]) => {
    if (typeof e == "string")
      try {
        e = JSON.parse(e);
      } catch {
      }
    return [n, e];
  }));
}
const gt = /* @__PURE__ */ new Map();
var Y, ae, z;
class wt {
  constructor(n, e) {
    E(this, Y, void 0);
    E(this, ae, void 0);
    E(this, z, void 0);
    n = typeof n == "string" ? document.querySelector(n) : n, this.constructor.EVENTS && S(this, z, new Gt(n, { customEventSuffix: `.${this.constructor.KEY}` })), S(this, Y, { ...this.constructor.DEFAULT }), this.setOptions({ ...n instanceof HTMLElement ? To(n.dataset) : null, ...e }), this.constructor.all.set(n, this), S(this, ae, n), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return p(this, Y);
  }
  get element() {
    return p(this, ae);
  }
  get events() {
    return p(this, z);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(n) {
    return n && Object.assign(p(this, Y), n), p(this, Y);
  }
  render(n) {
    this.setOptions(n);
  }
  destroy() {
    this.constructor.all.delete(p(this, ae)), p(this, z) && (this.emit("destroyed", this), p(this, z).offAll());
  }
  on(n, e, o) {
    var r;
    (r = p(this, z)) == null || r.on(n, e, o);
  }
  once(n, e, o) {
    var r;
    (r = p(this, z)) == null || r.once(n, e, o);
  }
  off(n, e, o) {
    var r;
    (r = p(this, z)) == null || r.off(n, e, o);
  }
  emit(n, e) {
    var l;
    let o = Gt.createEvent(n, e);
    const r = `on${n[0].toUpperCase()}${n.substring(1)}`, s = p(this, Y)[r];
    return s && s(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = p(this, z)) == null ? void 0 : l.emit(n, e), o;
  }
  i18n(n, e, o) {
    return De(p(this, Y).i18n, n, e, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${n}}`;
  }
  /**
   * Component internal name, like "Menu"
   */
  static get NAME() {
    throw new Error(`static NAME should be override in class ${this.name}`);
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  static get all() {
    const n = this.NAME;
    if (gt.has(n))
      return gt.get(n);
    const e = /* @__PURE__ */ new Map();
    return gt.set(n, e), e;
  }
  static getAll() {
    return this.all;
  }
  static get(n) {
    return this.all.get(n);
  }
  static ensure(n, e) {
    return this.get(n) || new this(n, e);
  }
}
Y = new WeakMap(), ae = new WeakMap(), z = new WeakMap(), P(wt, "EVENTS", !1), P(wt, "DEFAULT", {});
class xn extends wt {
  constructor() {
    super(...arguments);
    P(this, "ref", wo());
  }
  get $() {
    return this.ref.current;
  }
  init() {
    requestAnimationFrame(() => this.render());
  }
  destroy() {
    super.destroy(), this.element.innerHTML = "";
  }
  render(e) {
    const o = this.constructor.Component;
    Eo(/* @__PURE__ */ Cn(o, { ref: this.ref, ...this.setOptions(e) }), this.element);
  }
}
P(xn, "Component");
var $t, H, En, Rn, Ce, Kt, $n = {}, Sn = [], Lo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function te(t, n) {
  for (var e in n)
    t[e] = n[e];
  return t;
}
function Mn(t) {
  var n = t.parentNode;
  n && n.removeChild(t);
}
function St(t, n, e) {
  var o, r, s, l = {};
  for (s in n)
    s == "key" ? o = n[s] : s == "ref" ? r = n[s] : l[s] = n[s];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? $t.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      l[s] === void 0 && (l[s] = t.defaultProps[s]);
  return Oe(t, l, o, r, null);
}
function Oe(t, n, e, o, r) {
  var s = { type: t, props: n, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r ?? ++En };
  return r == null && H.vnode != null && H.vnode(s), s;
}
function Po() {
  return { current: null };
}
function Mt(t) {
  return t.children;
}
function xe(t, n) {
  this.props = t, this.context = n;
}
function Se(t, n) {
  if (n == null)
    return t.__ ? Se(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var e; n < t.__k.length; n++)
    if ((e = t.__k[n]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? Se(t) : null;
}
function An(t) {
  var n, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
      if ((e = t.__k[n]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return An(t);
  }
}
function qt(t) {
  (!t.__d && (t.__d = !0) && Ce.push(t) && !Ve.__r++ || Kt !== H.debounceRendering) && ((Kt = H.debounceRendering) || setTimeout)(Ve);
}
function Ve() {
  for (var t; Ve.__r = Ce.length; )
    t = Ce.sort(function(n, e) {
      return n.__v.__b - e.__v.__b;
    }), Ce = [], t.some(function(n) {
      var e, o, r, s, l, a;
      n.__d && (l = (s = (e = n).__v).__e, (a = e.__P) && (o = [], (r = te({}, s)).__v = s.__v + 1, Ln(a, s, r, e.__n, a.ownerSVGElement !== void 0, s.__h != null ? [l] : null, o, l ?? Se(s), s.__h), Wo(o, s), s.__e != l && An(s)));
    });
}
function Nn(t, n, e, o, r, s, l, a, h, u) {
  var i, d, _, c, f, v, y, g = o && o.__k || Sn, b = g.length;
  for (e.__k = [], i = 0; i < n.length; i++)
    if ((c = e.__k[i] = (c = n[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? Oe(null, c, null, null, c) : Array.isArray(c) ? Oe(Mt, { children: c }, null, null, null) : c.__b > 0 ? Oe(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (_ = g[i]) === null || _ && c.key == _.key && c.type === _.type)
        g[i] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((_ = g[d]) && c.key == _.key && c.type === _.type) {
            g[d] = void 0;
            break;
          }
          _ = null;
        }
      Ln(t, c, _ = _ || $n, r, s, l, a, h, u), f = c.__e, (d = c.ref) && _.ref != d && (y || (y = []), _.ref && y.push(_.ref, null, c), y.push(d, c.__c || f, c)), f != null ? (v == null && (v = f), typeof c.type == "function" && c.__k === _.__k ? c.__d = h = Hn(c, h, t) : h = Tn(t, c, _, g, f, h), typeof e.type == "function" && (e.__d = h)) : h && _.__e == h && h.parentNode != t && (h = Se(_));
    }
  for (e.__e = v, i = b; i--; )
    g[i] != null && Dn(g[i], g[i]);
  if (y)
    for (i = 0; i < y.length; i++)
      Pn(y[i], y[++i], y[++i]);
}
function Hn(t, n, e) {
  for (var o, r = t.__k, s = 0; r && s < r.length; s++)
    (o = r[s]) && (o.__ = t, n = typeof o.type == "function" ? Hn(o, n, e) : Tn(e, o, o, r, o.__e, n));
  return n;
}
function Tn(t, n, e, o, r, s) {
  var l, a, h;
  if (n.__d !== void 0)
    l = n.__d, n.__d = void 0;
  else if (e == null || r != s || r.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(r), l = null;
      else {
        for (a = s, h = 0; (a = a.nextSibling) && h < o.length; h += 2)
          if (a == r)
            break e;
        t.insertBefore(r, s), l = s;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function Do(t, n, e, o, r) {
  var s;
  for (s in e)
    s === "children" || s === "key" || s in n || Ge(t, s, null, e[s], o);
  for (s in n)
    r && typeof n[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || e[s] === n[s] || Ge(t, s, n[s], e[s], o);
}
function Yt(t, n, e) {
  n[0] === "-" ? t.setProperty(n, e) : t[n] = e == null ? "" : typeof e != "number" || Lo.test(n) ? e : e + "px";
}
function Ge(t, n, e, o, r) {
  var s;
  e:
    if (n === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (n in o)
            e && n in e || Yt(t.style, n, "");
        if (e)
          for (n in e)
            o && e[n] === o[n] || Yt(t.style, n, e[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      s = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in t ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + s] = e, e ? o || t.addEventListener(n, s ? Jt : Xt, s) : t.removeEventListener(n, s ? Jt : Xt, s);
    else if (n !== "dangerouslySetInnerHTML") {
      if (r)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in t)
        try {
          t[n] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && n.indexOf("-") == -1 ? t.removeAttribute(n) : t.setAttribute(n, e));
    }
}
function Xt(t) {
  this.l[t.type + !1](H.event ? H.event(t) : t);
}
function Jt(t) {
  this.l[t.type + !0](H.event ? H.event(t) : t);
}
function Ln(t, n, e, o, r, s, l, a, h) {
  var u, i, d, _, c, f, v, y, g, b, C, R, D, $, M, w = n.type;
  if (n.constructor !== void 0)
    return null;
  e.__h != null && (h = e.__h, a = n.__e = e.__e, n.__h = null, s = [a]), (u = H.__b) && u(n);
  try {
    e:
      if (typeof w == "function") {
        if (y = n.props, g = (u = w.contextType) && o[u.__c], b = u ? g ? g.props.value : u.__ : o, e.__c ? v = (i = n.__c = e.__c).__ = i.__E : ("prototype" in w && w.prototype.render ? n.__c = i = new w(y, b) : (n.__c = i = new xe(y, b), i.constructor = w, i.render = jo), g && g.sub(i), i.props = y, i.state || (i.state = {}), i.context = b, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = te({}, i.__s)), te(i.__s, w.getDerivedStateFromProps(y, i.__s))), _ = i.props, c = i.state, d)
          w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && y !== _ && i.componentWillReceiveProps != null && i.componentWillReceiveProps(y, b), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(y, i.__s, b) === !1 || n.__v === e.__v) {
            for (i.props = y, i.state = i.__s, n.__v !== e.__v && (i.__d = !1), i.__v = n, n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(m) {
              m && (m.__ = n);
            }), C = 0; C < i._sb.length; C++)
              i.__h.push(i._sb[C]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(y, i.__s, b), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(_, c, f);
          });
        }
        if (i.context = b, i.props = y, i.__v = n, i.__P = t, R = H.__r, D = 0, "prototype" in w && w.prototype.render) {
          for (i.state = i.__s, i.__d = !1, R && R(n), u = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, R && R(n), u = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++D < 25);
        i.state = i.__s, i.getChildContext != null && (o = te(te({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(_, c)), M = u != null && u.type === Mt && u.key == null ? u.props.children : u, Nn(t, Array.isArray(M) ? M : [M], n, e, o, r, s, l, a, h), i.base = n.__e, n.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = Io(e.__e, n, e, o, r, s, l, h);
    (u = H.diffed) && u(n);
  } catch (m) {
    n.__v = null, (h || s != null) && (n.__e = a, n.__h = !!h, s[s.indexOf(a)] = null), H.__e(m, n, e);
  }
}
function Wo(t, n) {
  H.__c && H.__c(n, t), t.some(function(e) {
    try {
      t = e.__h, e.__h = [], t.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      H.__e(o, e.__v);
    }
  });
}
function Io(t, n, e, o, r, s, l, a) {
  var h, u, i, d = e.props, _ = n.props, c = n.type, f = 0;
  if (c === "svg" && (r = !0), s != null) {
    for (; f < s.length; f++)
      if ((h = s[f]) && "setAttribute" in h == !!c && (c ? h.localName === c : h.nodeType === 3)) {
        t = h, s[f] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(_);
    t = r ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, _.is && _), s = null, a = !1;
  }
  if (c === null)
    d === _ || a && t.data === _ || (t.data = _);
  else {
    if (s = s && $t.call(t.childNodes), u = (d = e.props || $n).dangerouslySetInnerHTML, i = _.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || u) && (i && (u && i.__html == u.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Do(t, _, d, r, a), i)
      n.__k = [];
    else if (f = n.props.children, Nn(t, Array.isArray(f) ? f : [f], n, e, o, r && c !== "foreignObject", s, l, s ? s[0] : e.__k && Se(e, 0), a), s != null)
      for (f = s.length; f--; )
        s[f] != null && Mn(s[f]);
    a || ("value" in _ && (f = _.value) !== void 0 && (f !== t.value || c === "progress" && !f || c === "option" && f !== d.value) && Ge(t, "value", f, d.value, !1), "checked" in _ && (f = _.checked) !== void 0 && f !== t.checked && Ge(t, "checked", f, d.checked, !1));
  }
  return t;
}
function Pn(t, n, e) {
  try {
    typeof t == "function" ? t(n) : t.current = n;
  } catch (o) {
    H.__e(o, e);
  }
}
function Dn(t, n, e) {
  var o, r;
  if (H.unmount && H.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Pn(o, null, n)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (s) {
        H.__e(s, n);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (r = 0; r < o.length; r++)
      o[r] && Dn(o[r], n, e || typeof t.type != "function");
  e || t.__e == null || Mn(t.__e), t.__ = t.__e = t.__d = void 0;
}
function jo(t, n, e) {
  return this.constructor(t, e);
}
$t = Sn.slice, H = { __e: function(t, n, e, o) {
  for (var r, s, l; n = n.__; )
    if ((r = n.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(t)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), l = r.__d), l)
          return r.__E = r;
      } catch (a) {
        t = a;
      }
  throw t;
} }, En = 0, Rn = function(t) {
  return t != null && t.constructor === void 0;
}, xe.prototype.setState = function(t, n) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof t == "function" && (t = t(te({}, e), this.props)), t && te(e, t), t != null && this.__v && (n && this._sb.push(n), qt(this));
}, xe.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), qt(this));
}, xe.prototype.render = Mt, Ce = [], Ve.__r = 0;
var zo = 0;
function k(t, n, e, o, r) {
  var s, l, a = {};
  for (l in n)
    l == "ref" ? s = n[l] : a[l] = n[l];
  var h = { type: t, props: a, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zo, __source: r, __self: o };
  if (typeof t == "function" && (s = t.defaultProps))
    for (l in s)
      a[l] === void 0 && (a[l] = s[l]);
  return H.vnode && H.vnode(h), h;
}
let Oo = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((n, e) => (e &= 63, e < 36 ? n += e.toString(36) : e < 62 ? n += (e - 26).toString(36).toUpperCase() : e > 62 ? n += "-" : n += "_", n), "");
function Wn(...t) {
  const n = [], e = /* @__PURE__ */ new Map(), o = (r, s) => {
    if (Array.isArray(r) && (s = r[1], r = r[0]), !r.length)
      return;
    const l = e.get(r);
    typeof l == "number" ? n[l][1] = !!s : (e.set(r, n.length), n.push([r, !!s]));
  };
  return t.forEach((r) => {
    typeof r == "function" && (r = r()), Array.isArray(r) ? Wn(...r).forEach(o) : r && typeof r == "object" ? Object.entries(r).forEach(o) : typeof r == "string" && r.split(" ").forEach((s) => o(s, !0));
  }), n.sort((r, s) => (e.get(r[0]) || 0) - (e.get(s[0]) || 0));
}
const j = (...t) => Wn(...t).reduce((n, [e, o]) => (o && n.push(e), n), []).join(" ");
var In, T, jn, Ee, Qt, zn = {}, On = [], Uo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ne(t, n) {
  for (var e in n)
    t[e] = n[e];
  return t;
}
function Un(t) {
  var n = t.parentNode;
  n && n.removeChild(t);
}
function yt(t, n, e, o, r) {
  var s = { type: t, props: n, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r ?? ++jn };
  return r == null && T.vnode != null && T.vnode(s), s;
}
function At(t) {
  return t.children;
}
function Re(t, n) {
  this.props = t, this.context = n;
}
function Me(t, n) {
  if (n == null)
    return t.__ ? Me(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var e; n < t.__k.length; n++)
    if ((e = t.__k[n]) != null && e.__e != null)
      return e.__e;
  return typeof t.type == "function" ? Me(t) : null;
}
function Fn(t) {
  var n, e;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
      if ((e = t.__k[n]) != null && e.__e != null) {
        t.__e = t.__c.base = e.__e;
        break;
      }
    return Fn(t);
  }
}
function Zt(t) {
  (!t.__d && (t.__d = !0) && Ee.push(t) && !Ke.__r++ || Qt !== T.debounceRendering) && ((Qt = T.debounceRendering) || setTimeout)(Ke);
}
function Ke() {
  for (var t; Ke.__r = Ee.length; )
    t = Ee.sort(function(n, e) {
      return n.__v.__b - e.__v.__b;
    }), Ee = [], t.some(function(n) {
      var e, o, r, s, l, a;
      n.__d && (l = (s = (e = n).__v).__e, (a = e.__P) && (o = [], (r = ne({}, s)).__v = s.__v + 1, Kn(a, s, r, e.__n, a.ownerSVGElement !== void 0, s.__h != null ? [l] : null, o, l ?? Me(s), s.__h), Bo(o, s), s.__e != l && Fn(s)));
    });
}
function Bn(t, n, e, o, r, s, l, a, h, u) {
  var i, d, _, c, f, v, y, g = o && o.__k || On, b = g.length;
  for (e.__k = [], i = 0; i < n.length; i++)
    if ((c = e.__k[i] = (c = n[i]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? yt(null, c, null, null, c) : Array.isArray(c) ? yt(At, { children: c }, null, null, null) : c.__b > 0 ? yt(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c) != null) {
      if (c.__ = e, c.__b = e.__b + 1, (_ = g[i]) === null || _ && c.key == _.key && c.type === _.type)
        g[i] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((_ = g[d]) && c.key == _.key && c.type === _.type) {
            g[d] = void 0;
            break;
          }
          _ = null;
        }
      Kn(t, c, _ = _ || zn, r, s, l, a, h, u), f = c.__e, (d = c.ref) && _.ref != d && (y || (y = []), _.ref && y.push(_.ref, null, c), y.push(d, c.__c || f, c)), f != null ? (v == null && (v = f), typeof c.type == "function" && c.__k === _.__k ? c.__d = h = Vn(c, h, t) : h = Gn(t, c, _, g, f, h), typeof e.type == "function" && (e.__d = h)) : h && _.__e == h && h.parentNode != t && (h = Me(_));
    }
  for (e.__e = v, i = b; i--; )
    g[i] != null && Yn(g[i], g[i]);
  if (y)
    for (i = 0; i < y.length; i++)
      qn(y[i], y[++i], y[++i]);
}
function Vn(t, n, e) {
  for (var o, r = t.__k, s = 0; r && s < r.length; s++)
    (o = r[s]) && (o.__ = t, n = typeof o.type == "function" ? Vn(o, n, e) : Gn(e, o, o, r, o.__e, n));
  return n;
}
function Gn(t, n, e, o, r, s) {
  var l, a, h;
  if (n.__d !== void 0)
    l = n.__d, n.__d = void 0;
  else if (e == null || r != s || r.parentNode == null)
    e:
      if (s == null || s.parentNode !== t)
        t.appendChild(r), l = null;
      else {
        for (a = s, h = 0; (a = a.nextSibling) && h < o.length; h += 2)
          if (a == r)
            break e;
        t.insertBefore(r, s), l = s;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function Fo(t, n, e, o, r) {
  var s;
  for (s in e)
    s === "children" || s === "key" || s in n || qe(t, s, null, e[s], o);
  for (s in n)
    r && typeof n[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || e[s] === n[s] || qe(t, s, n[s], e[s], o);
}
function en(t, n, e) {
  n[0] === "-" ? t.setProperty(n, e) : t[n] = e == null ? "" : typeof e != "number" || Uo.test(n) ? e : e + "px";
}
function qe(t, n, e, o, r) {
  var s;
  e:
    if (n === "style")
      if (typeof e == "string")
        t.style.cssText = e;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (n in o)
            e && n in e || en(t.style, n, "");
        if (e)
          for (n in e)
            o && e[n] === o[n] || en(t.style, n, e[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      s = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in t ? n.toLowerCase().slice(2) : n.slice(2), t.l || (t.l = {}), t.l[n + s] = e, e ? o || t.addEventListener(n, s ? nn : tn, s) : t.removeEventListener(n, s ? nn : tn, s);
    else if (n !== "dangerouslySetInnerHTML") {
      if (r)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n in t)
        try {
          t[n] = e ?? "";
          break e;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && n.indexOf("-") == -1 ? t.removeAttribute(n) : t.setAttribute(n, e));
    }
}
function tn(t) {
  this.l[t.type + !1](T.event ? T.event(t) : t);
}
function nn(t) {
  this.l[t.type + !0](T.event ? T.event(t) : t);
}
function Kn(t, n, e, o, r, s, l, a, h) {
  var u, i, d, _, c, f, v, y, g, b, C, R, D, $, M, w = n.type;
  if (n.constructor !== void 0)
    return null;
  e.__h != null && (h = e.__h, a = n.__e = e.__e, n.__h = null, s = [a]), (u = T.__b) && u(n);
  try {
    e:
      if (typeof w == "function") {
        if (y = n.props, g = (u = w.contextType) && o[u.__c], b = u ? g ? g.props.value : u.__ : o, e.__c ? v = (i = n.__c = e.__c).__ = i.__E : ("prototype" in w && w.prototype.render ? n.__c = i = new w(y, b) : (n.__c = i = new Re(y, b), i.constructor = w, i.render = Go), g && g.sub(i), i.props = y, i.state || (i.state = {}), i.context = b, i.__n = o, d = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ne({}, i.__s)), ne(i.__s, w.getDerivedStateFromProps(y, i.__s))), _ = i.props, c = i.state, d)
          w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && y !== _ && i.componentWillReceiveProps != null && i.componentWillReceiveProps(y, b), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(y, i.__s, b) === !1 || n.__v === e.__v) {
            for (i.props = y, i.state = i.__s, n.__v !== e.__v && (i.__d = !1), i.__v = n, n.__e = e.__e, n.__k = e.__k, n.__k.forEach(function(m) {
              m && (m.__ = n);
            }), C = 0; C < i._sb.length; C++)
              i.__h.push(i._sb[C]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(y, i.__s, b), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(_, c, f);
          });
        }
        if (i.context = b, i.props = y, i.__v = n, i.__P = t, R = T.__r, D = 0, "prototype" in w && w.prototype.render) {
          for (i.state = i.__s, i.__d = !1, R && R(n), u = i.render(i.props, i.state, i.context), $ = 0; $ < i._sb.length; $++)
            i.__h.push(i._sb[$]);
          i._sb = [];
        } else
          do
            i.__d = !1, R && R(n), u = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++D < 25);
        i.state = i.__s, i.getChildContext != null && (o = ne(ne({}, o), i.getChildContext())), d || i.getSnapshotBeforeUpdate == null || (f = i.getSnapshotBeforeUpdate(_, c)), M = u != null && u.type === At && u.key == null ? u.props.children : u, Bn(t, Array.isArray(M) ? M : [M], n, e, o, r, s, l, a, h), i.base = n.__e, n.__h = null, i.__h.length && l.push(i), v && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && n.__v === e.__v ? (n.__k = e.__k, n.__e = e.__e) : n.__e = Vo(e.__e, n, e, o, r, s, l, h);
    (u = T.diffed) && u(n);
  } catch (m) {
    n.__v = null, (h || s != null) && (n.__e = a, n.__h = !!h, s[s.indexOf(a)] = null), T.__e(m, n, e);
  }
}
function Bo(t, n) {
  T.__c && T.__c(n, t), t.some(function(e) {
    try {
      t = e.__h, e.__h = [], t.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      T.__e(o, e.__v);
    }
  });
}
function Vo(t, n, e, o, r, s, l, a) {
  var h, u, i, d = e.props, _ = n.props, c = n.type, f = 0;
  if (c === "svg" && (r = !0), s != null) {
    for (; f < s.length; f++)
      if ((h = s[f]) && "setAttribute" in h == !!c && (c ? h.localName === c : h.nodeType === 3)) {
        t = h, s[f] = null;
        break;
      }
  }
  if (t == null) {
    if (c === null)
      return document.createTextNode(_);
    t = r ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, _.is && _), s = null, a = !1;
  }
  if (c === null)
    d === _ || a && t.data === _ || (t.data = _);
  else {
    if (s = s && In.call(t.childNodes), u = (d = e.props || zn).dangerouslySetInnerHTML, i = _.dangerouslySetInnerHTML, !a) {
      if (s != null)
        for (d = {}, f = 0; f < t.attributes.length; f++)
          d[t.attributes[f].name] = t.attributes[f].value;
      (i || u) && (i && (u && i.__html == u.__html || i.__html === t.innerHTML) || (t.innerHTML = i && i.__html || ""));
    }
    if (Fo(t, _, d, r, a), i)
      n.__k = [];
    else if (f = n.props.children, Bn(t, Array.isArray(f) ? f : [f], n, e, o, r && c !== "foreignObject", s, l, s ? s[0] : e.__k && Me(e, 0), a), s != null)
      for (f = s.length; f--; )
        s[f] != null && Un(s[f]);
    a || ("value" in _ && (f = _.value) !== void 0 && (f !== t.value || c === "progress" && !f || c === "option" && f !== d.value) && qe(t, "value", f, d.value, !1), "checked" in _ && (f = _.checked) !== void 0 && f !== t.checked && qe(t, "checked", f, d.checked, !1));
  }
  return t;
}
function qn(t, n, e) {
  try {
    typeof t == "function" ? t(n) : t.current = n;
  } catch (o) {
    T.__e(o, e);
  }
}
function Yn(t, n, e) {
  var o, r;
  if (T.unmount && T.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || qn(o, null, n)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (s) {
        T.__e(s, n);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (r = 0; r < o.length; r++)
      o[r] && Yn(o[r], n, e || typeof t.type != "function");
  e || t.__e == null || Un(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Go(t, n, e) {
  return this.constructor(t, e);
}
In = On.slice, T = { __e: function(t, n, e, o) {
  for (var r, s, l; n = n.__; )
    if ((r = n.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(t)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(t, o || {}), l = r.__d), l)
          return r.__E = r;
      } catch (a) {
        t = a;
      }
  throw t;
} }, jn = 0, Re.prototype.setState = function(t, n) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ne({}, this.state), typeof t == "function" && (t = t(ne({}, e), this.props)), t && ne(e, t), t != null && this.__v && (n && this._sb.push(n), Zt(this));
}, Re.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Zt(this));
}, Re.prototype.render = At, Ee = [], Ke.__r = 0;
var Ko = 0;
function on(t, n, e, o, r) {
  var s, l, a = {};
  for (l in n)
    l == "ref" ? s = n[l] : a[l] = n[l];
  var h = { type: t, props: a, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ko, __source: r, __self: o };
  if (typeof t == "function" && (s = t.defaultProps))
    for (l in s)
      a[l] === void 0 && (a[l] = s[l]);
  return T.vnode && T.vnode(h), h;
}
var ie, le;
class sn extends Re {
  constructor(e) {
    super(e);
    E(this, ie, 0);
    E(this, le, null);
    P(this, "_handleWheel", (e) => {
      const { wheelContainer: o } = this.props, r = e.target;
      if (!(!r || !o) && (typeof o == "string" && r.closest(o) || typeof o == "object")) {
        const s = (this.props.type === "horz" ? e.deltaX : e.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(s) && e.preventDefault();
      }
    });
    P(this, "_handleMouseMove", (e) => {
      const { dragStart: o } = this.state;
      o && (p(this, ie) && cancelAnimationFrame(p(this, ie)), S(this, ie, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? e.clientX - o.x : e.clientY - o.y;
        this.scroll(o.offset + r * this.props.scrollSize / this.props.clientSize), S(this, ie, 0);
      })), e.preventDefault());
    });
    P(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    P(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    P(this, "_handleClick", (e) => {
      const o = e.currentTarget;
      if (!o)
        return;
      const r = o.getBoundingClientRect(), { type: s, clientSize: l, scrollSize: a } = this.props, h = (s === "horz" ? e.clientX - r.left : e.clientY - r.top) - this.barSize / 2;
      this.scroll(h * a / l), e.preventDefault();
    });
    this.state = {
      scrollPos: this.props.defaultScrollPos ?? 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    return this.props.scrollPos ?? this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: e, clientSize: o } = this.props;
    return Math.max(0, e - o);
  }
  get barSize() {
    const { clientSize: e, scrollSize: o, size: r = 12, minBarSize: s = 3 * r } = this.props;
    return Math.max(Math.round(e * e / o), s);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (S(this, le, typeof e == "string" ? document : e.current), p(this, le).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, le) && p(this, le).removeEventListener("wheel", this._handleWheel);
  }
  scroll(e) {
    return e = Math.max(0, Math.min(Math.round(e), this.maxScrollPos)), e === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(e) : this.setState({
      scrollPos: e
    }, this._afterScroll.bind(this, e)), !0);
  }
  scrollOffset(e) {
    return this.scroll(this.scrollPos + e);
  }
  _afterScroll(e) {
    const { onScroll: o } = this.props;
    o && o(e, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: e,
      type: o,
      size: r = 12,
      className: s,
      style: l,
      left: a,
      top: h,
      bottom: u,
      right: i
    } = this.props, { maxScrollPos: d, scrollPos: _ } = this, { dragStart: c } = this.state, f = {
      left: a,
      top: h,
      bottom: u,
      right: i,
      ...l
    }, v = {};
    return o === "horz" ? (f.height = r, f.width = e, v.width = this.barSize, v.left = Math.round(Math.min(d, _) * (e - v.width) / d)) : (f.width = r, f.height = e, v.height = this.barSize, v.top = Math.round(Math.min(d, _) * (e - v.height) / d)), /* @__PURE__ */ on(
      "div",
      {
        className: j("scrollbar", s, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": c
        }),
        style: f,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ on(
          "div",
          {
            className: "scrollbar-bar",
            style: v,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
ie = new WeakMap(), le = new WeakMap();
function rn(t, n, e) {
  return t && (n && (t = Math.max(n, t)), e && (t = Math.min(e, t))), t;
}
function Xn({ col: t, className: n, height: e, row: o, onRenderCell: r, style: s, outerStyle: l, children: a, outerClass: h, ...u }) {
  var w;
  const i = {
    left: t.left,
    width: t.realWidth,
    height: e,
    ...l
  }, { align: d, border: _ } = t.setting, c = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...s
  }, f = ["dtable-cell", h, t.setting.className, {
    "has-border-left": _ === !0 || _ === "left",
    "has-border-right": _ === !0 || _ === "right"
  }], v = ["dtable-cell-content", n], y = [a ?? ((w = o.data) == null ? void 0 : w[t.name]) ?? ""], g = r ? r(y, { row: o, col: t }, St) : y, b = [], C = [], R = {}, D = {};
  let $ = "div";
  g == null || g.forEach((m) => {
    if (typeof m == "object" && m && !Rn(m) && ("html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m || "tagName" in m)) {
      const pe = m.outer ? b : C;
      m.html ? pe.push(/* @__PURE__ */ k("div", { className: j("dtable-cell-html", m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })) : (m.style && Object.assign(m.outer ? i : c, m.style), m.className && (m.outer ? f : v).push(m.className), m.children && pe.push(m.children), m.attrs && Object.assign(m.outer ? R : D, m.attrs)), m.tagName && !m.outer && ($ = m.tagName);
    } else
      C.push(m);
  });
  const M = $;
  return /* @__PURE__ */ k(
    "div",
    {
      className: j(f),
      style: i,
      "data-col": t.name,
      ...u,
      ...R,
      children: [
        C.length > 0 && /* @__PURE__ */ k(M, { className: j(v), style: c, ...D, children: C }),
        b
      ]
    }
  );
}
function vt({ row: t, className: n, top: e = 0, left: o = 0, width: r, height: s, cols: l, CellComponent: a = Xn, onRenderCell: h }) {
  return /* @__PURE__ */ k("div", { className: j("dtable-cells", n), style: { top: e, left: o, width: r, height: s }, children: l.map((u) => u.visible ? /* @__PURE__ */ k(
    a,
    {
      col: u,
      row: t,
      onRenderCell: h
    },
    u.name
  ) : null) });
}
function Jn({
  row: t,
  className: n,
  top: e,
  height: o,
  fixedLeftCols: r,
  fixedRightCols: s,
  scrollCols: l,
  fixedLeftWidth: a,
  scrollWidth: h,
  scrollColsWidth: u,
  fixedRightWidth: i,
  scrollLeft: d,
  CellComponent: _ = Xn,
  onRenderCell: c,
  style: f,
  ...v
}) {
  let y = null;
  r != null && r.length && (y = /* @__PURE__ */ k(
    vt,
    {
      className: "dtable-fixed-left",
      cols: r,
      width: a,
      row: t,
      CellComponent: _,
      onRenderCell: c
    }
  ));
  let g = null;
  l != null && l.length && (g = /* @__PURE__ */ k(
    vt,
    {
      className: "dtable-flexable",
      cols: l,
      left: a - d,
      width: Math.max(h, u),
      row: t,
      CellComponent: _,
      onRenderCell: c
    }
  ));
  let b = null;
  s != null && s.length && (b = /* @__PURE__ */ k(
    vt,
    {
      className: "dtable-fixed-right",
      cols: s,
      left: a + h,
      width: i,
      row: t,
      CellComponent: _,
      onRenderCell: c
    }
  ));
  const C = { top: e, height: o, lineHeight: `${o - 2}px`, ...f };
  return /* @__PURE__ */ k(
    "div",
    {
      className: j("dtable-row", n),
      style: C,
      "data-id": t.id,
      ...v,
      children: [
        y,
        g,
        b
      ]
    }
  );
}
function qo({ height: t, onRenderRow: n, ...e }) {
  const o = {
    height: t,
    ...e,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (n) {
    const r = n({ props: o }, St);
    r && Object.assign(o, r);
  }
  return /* @__PURE__ */ k("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ k(Jn, { ...o }) });
}
function Yo({
  className: t,
  style: n,
  top: e,
  rows: o,
  height: r,
  rowHeight: s,
  scrollTop: l,
  onRenderRow: a,
  ...h
}) {
  return n = { ...n, top: e, height: r }, /* @__PURE__ */ k("div", { className: j("dtable-rows", t), style: n, children: o.map((u) => {
    const i = {
      className: `dtable-row-${u.index % 2 ? "odd" : "even"}`,
      row: u,
      top: u.top - l,
      height: s,
      ...h
    }, d = a == null ? void 0 : a({ props: i, row: u }, St);
    return d && Object.assign(i, d), /* @__PURE__ */ k(Jn, { ...i });
  }) });
}
const Ye = /* @__PURE__ */ new Map(), Xe = [];
function Qn(t, n) {
  const { name: e } = t;
  if (!(n != null && n.override) && Ye.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Ye.set(e, t), n != null && n.buildIn && !Xe.includes(e) && Xe.push(e);
}
function de(t, n) {
  Qn(t, n);
  const e = (o) => {
    if (!o)
      return t;
    const { defaultOptions: r, ...s } = t;
    return {
      ...s,
      defaultOptions: { ...r, ...o }
    };
  };
  return e.plugin = t, e;
}
function Zn(t) {
  return Ye.delete(t);
}
function Xo(t) {
  if (typeof t == "string") {
    const n = Ye.get(t);
    return n || console.warn(`DTable: Cannot found plugin "${t}"`), n;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function eo(t, n, e) {
  return n.forEach((o) => {
    var s;
    if (!o)
      return;
    const r = Xo(o);
    r && (e.has(r.name) || ((s = r.plugins) != null && s.length && eo(t, r.plugins, e), t.push(r), e.add(r.name)));
  }), t;
}
function Jo(t = [], n = !0) {
  return n && Xe.length && t.unshift(...Xe), t != null && t.length ? eo([], t, /* @__PURE__ */ new Set()) : [];
}
function ln() {
  return {
    cols: [],
    data: [],
    rowKey: "id",
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 9999,
    header: !0,
    footer: !1,
    headerHeight: 0,
    footerHeight: 0,
    rowHover: !0,
    colHover: !1,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    horzScrollbarPos: "outside"
  };
}
function Qo(t) {
  const {
    tag: n,
    className: e,
    style: o,
    renders: r,
    generateArgs: s = [],
    generatorThis: l,
    generators: a,
    onGenerate: h,
    onRenderItem: u,
    ...i
  } = t, d = [e], _ = { ...o }, c = [], f = [];
  return r.forEach((v) => {
    const y = [];
    typeof v == "string" && a && a[v] && (v = a[v]), typeof v == "function" ? h ? y.push(...h.call(l, v, c, ...s)) : y.push(...v.call(l, c, ...s) ?? []) : y.push(v), y.forEach((g) => {
      g != null && (typeof g == "object" && !fn(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? c.push(
        /* @__PURE__ */ Cn("div", { className: j(g.className), style: g.style, dangerouslySetInnerHTML: { __html: g.html }, ...g.attrs ?? {} })
      ) : g.__html ? f.push(g.__html) : (g.style && Object.assign(_, g.style), g.className && d.push(g.className), g.children && c.push(g.children), g.attrs && Object.assign(i, g.attrs)) : c.push(g));
    });
  }), f.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: f } }), [{
    className: j(d),
    style: _,
    ...i
  }, c];
}
function cn({
  tag: t = "div",
  ...n
}) {
  const [e, o] = Qo(n);
  return pn(t, e, ...o);
}
var Ie, ce, he, Q, U, Z, W, O, F, _e, Ne, He, X, fe, ue, Je, to, Qe, no, Ze, oo, et, so, Te, kt, tt, nt, Le, Pe, ot, st, rt, ro, it, io, lt, lo;
let Zo = (Ie = class extends xe {
  constructor(e) {
    super(e);
    E(this, Je);
    E(this, Qe);
    E(this, Ze);
    E(this, et);
    E(this, Te);
    E(this, rt);
    E(this, it);
    E(this, lt);
    P(this, "ref", Po());
    E(this, ce, 0);
    E(this, he, void 0);
    E(this, Q, !1);
    E(this, U, void 0);
    E(this, Z, void 0);
    E(this, W, []);
    E(this, O, void 0);
    E(this, F, /* @__PURE__ */ new Map());
    E(this, _e, {});
    E(this, Ne, void 0);
    E(this, He, []);
    P(this, "updateLayout", () => {
      p(this, ce) && cancelAnimationFrame(p(this, ce)), S(this, ce, requestAnimationFrame(() => {
        S(this, O, void 0), this.forceUpdate(), S(this, ce, 0);
      }));
    });
    E(this, X, (e, o) => {
      o = o || e.type;
      const r = p(this, F).get(o);
      if (r != null && r.length) {
        for (const s of r)
          if (s.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    });
    E(this, fe, (e) => {
      p(this, X).call(this, e, `window_${e.type}`);
    });
    E(this, ue, (e) => {
      p(this, X).call(this, e, `document_${e.type}`);
    });
    E(this, tt, (e, o) => {
      if (this.options.onRenderRow) {
        const r = this.options.onRenderRow.call(this, e, o);
        r && Object.assign(e.props, r);
      }
      return p(this, W).forEach((r) => {
        if (r.onRenderRow) {
          const s = r.onRenderRow.call(this, e, o);
          s && Object.assign(e.props, s);
        }
      }), e.props;
    });
    E(this, nt, (e, o) => (this.options.onRenderHeaderRow && (e.props = this.options.onRenderHeaderRow.call(this, e, o)), p(this, W).forEach((r) => {
      r.onRenderHeaderRow && (e.props = r.onRenderHeaderRow.call(this, e, o));
    }), e.props));
    E(this, Le, (e, o, r) => {
      const { row: s, col: l } = o;
      e[0] = this.getCellValue(s, l);
      const a = s.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[a] && (e = l.setting[a].call(this, e, o, r)), this.options[a] && (e = this.options[a].call(this, e, o, r)), p(this, W).forEach((h) => {
        h[a] && (e = h[a].call(this, e, o, r));
      }), e;
    });
    E(this, Pe, (e, o) => {
      o === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    });
    E(this, ot, (e) => {
      var a, h, u, i, d;
      const o = this.getPointerInfo(e);
      if (!o)
        return;
      const { rowID: r, colName: s, cellElement: l } = o;
      if (r === "HEADER")
        l && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: s, element: l }), p(this, W).forEach((_) => {
          var c;
          (c = _.onHeaderCellClick) == null || c.call(this, e, { colName: s, element: l });
        }));
      else {
        const { rowElement: _ } = o, c = this.layout.visibleRows.find((f) => f.id === r);
        if (l) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, e, { colName: s, rowID: r, rowInfo: c, element: l, rowElement: _ })) === !0)
            return;
          for (const f of p(this, W))
            if (((u = f.onCellClick) == null ? void 0 : u.call(this, e, { colName: s, rowID: r, rowInfo: c, element: l, rowElement: _ })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, e, { rowID: r, rowInfo: c, element: _ })) === !0)
          return;
        for (const f of p(this, W))
          if (((d = f.onRowClick) == null ? void 0 : d.call(this, e, { rowID: r, rowInfo: c, element: _ })) === !0)
            return;
      }
    });
    E(this, st, (e) => {
      const o = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    S(this, he, e.id ?? `dtable-${Oo(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, S(this, Z, Object.freeze(Jo(e.plugins))), p(this, Z).forEach((o) => {
      var a;
      const { methods: r, data: s, state: l } = o;
      r && Object.entries(r).forEach(([h, u]) => {
        typeof u == "function" && Object.assign(this, { [h]: u.bind(this) });
      }), s && Object.assign(p(this, _e), s.call(this)), l && Object.assign(this.state, l.call(this)), (a = o.onCreate) == null || a.call(this, o);
    });
  }
  get options() {
    var e;
    return ((e = p(this, O)) == null ? void 0 : e.options) || p(this, U) || ln();
  }
  get plugins() {
    return p(this, W);
  }
  get layout() {
    return p(this, O);
  }
  get id() {
    return p(this, he);
  }
  get data() {
    return p(this, _e);
  }
  get parent() {
    var e;
    return this.props.parent ?? ((e = this.ref.current) == null ? void 0 : e.parentElement);
  }
  componentWillReceiveProps() {
    S(this, U, void 0);
  }
  componentDidMount() {
    if (p(this, Q) ? this.forceUpdate() : I(this, Te, kt).call(this), p(this, W).forEach((e) => {
      let { events: o } = e;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([r, s]) => {
        s && this.on(r, s);
      }));
    }), this.on("click", p(this, ot)), this.on("keydown", p(this, st)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(e), S(this, Ne, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    p(this, W).forEach((e) => {
      var o;
      (o = e.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    p(this, Q) ? I(this, Te, kt).call(this) : p(this, W).forEach((e) => {
      var o;
      (o = e.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = p(this, Ne)) == null || o.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const r of p(this, F).keys())
        r.startsWith("window_") ? window.removeEventListener(r.replace("window_", ""), p(this, fe)) : r.startsWith("document_") ? document.removeEventListener(r.replace("document_", ""), p(this, ue)) : e.removeEventListener(r, p(this, X));
    p(this, W).forEach((r) => {
      var s;
      (s = r.onUnmounted) == null || s.call(this);
    }), p(this, Z).forEach((r) => {
      var s;
      (s = r.onDestory) == null || s.call(this);
    }), S(this, _e, {}), p(this, F).clear();
  }
  on(e, o, r) {
    var l;
    r && (e = `${r}_${e}`);
    const s = p(this, F).get(e);
    s ? s.push(o) : (p(this, F).set(e, [o]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), p(this, fe)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), p(this, ue)) : (l = this.ref.current) == null || l.addEventListener(e, p(this, X)));
  }
  off(e, o, r) {
    var a;
    r && (e = `${r}_${e}`);
    const s = p(this, F).get(e);
    if (!s)
      return;
    const l = s.indexOf(o);
    l >= 0 && s.splice(l, 1), s.length || (p(this, F).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), p(this, fe)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), p(this, ue)) : (a = this.ref.current) == null || a.removeEventListener(e, p(this, X)));
  }
  emitCustomEvent(e, o) {
    p(this, X).call(this, o instanceof Event ? o : new CustomEvent(e, { detail: o }), e);
  }
  scroll(e, o) {
    const { scrollLeft: r, scrollTop: s, rowsHeightTotal: l, rowsHeight: a, rowHeight: h, colsInfo: { scrollWidth: u, scrollColsWidth: i } } = this.layout, { to: d } = e;
    let { scrollLeft: _, scrollTop: c } = e;
    if (d === "up" || d === "down")
      c = s + (d === "down" ? 1 : -1) * Math.floor(a / h) * h;
    else if (d === "left" || d === "right")
      _ = r + (d === "right" ? 1 : -1) * u;
    else if (d === "home")
      c = 0;
    else if (d === "end")
      c = l - a;
    else if (d === "left-begin")
      _ = 0;
    else if (d === "right-end")
      _ = i - u;
    else {
      const { offsetLeft: v, offsetTop: y } = e;
      typeof v == "number" && (_ = r + v), typeof y == "number" && (_ = s + y);
    }
    const f = {};
    return typeof _ == "number" && (_ = Math.max(0, Math.min(_, i - u)), _ !== r && (f.scrollLeft = _)), typeof c == "number" && (c = Math.max(0, Math.min(c, l - a)), c !== s && (f.scrollTop = c)), Object.keys(f).length ? (this.setState(f, () => {
      var v;
      (v = this.options.onScroll) == null || v.call(this, f), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    const { colsMap: o, colsList: r } = this.layout;
    return typeof e == "number" ? r[e] : o[e];
  }
  getRowInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    if (e === -1 || e === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: r } = this.layout;
    return typeof e == "number" ? o[e] : r[e];
  }
  getCellValue(e, o) {
    var h;
    const r = typeof e == "object" ? e : this.getRowInfo(e);
    if (!r)
      return;
    const s = typeof o == "object" ? o : this.getColInfo(o);
    if (!s)
      return;
    let l = r.id === "HEADER" ? s.setting.title : (h = r.data) == null ? void 0 : h[s.name];
    const { cellValueGetter: a } = this.options;
    return a && (l = a.call(this, r, s, l)), l;
  }
  getRowInfoByIndex(e) {
    return this.layout.rows[e];
  }
  update(e = {}, o) {
    if (!p(this, U))
      return;
    typeof e == "function" && (o = e, e = {});
    const { dirtyType: r, state: s } = e;
    if (r === "layout")
      S(this, O, void 0);
    else if (r === "options") {
      if (S(this, U, void 0), !p(this, O))
        return;
      S(this, O, void 0);
    }
    this.setState(s ?? ((l) => ({ renderCount: l.renderCount + 1 })), o);
  }
  getPointerInfo(e) {
    const o = e.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const r = o.closest(".dtable-cell");
    if (!r)
      return;
    const s = r.closest(".dtable-row");
    if (!s)
      return;
    const l = r == null ? void 0 : r.getAttribute("data-col"), a = s == null ? void 0 : s.getAttribute("data-id");
    if (!(typeof l != "string" || typeof a != "string"))
      return {
        cellElement: r,
        rowElement: s,
        colName: l,
        rowID: a,
        target: o
      };
  }
  i18n(e, o, r) {
    return De(p(this, He), e, o, r, this.options.lang) ?? `{i18n:${e}}`;
  }
  render() {
    const e = I(this, lt, lo).call(this), { className: o, rowHover: r, colHover: s, cellHover: l, bordered: a, striped: h, scrollbarHover: u } = this.options, i = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, d = ["dtable", o, {
      "dtable-hover-row": r,
      "dtable-hover-col": s,
      "dtable-hover-cell": l,
      "dtable-bordered": a,
      "dtable-striped": h,
      "dtable-scrolled-down": ((e == null ? void 0 : e.scrollTop) ?? 0) > 0,
      "scrollbar-hover": u
    }], _ = [];
    return e && p(this, W).forEach((c) => {
      var v;
      const f = (v = c.onRender) == null ? void 0 : v.call(this, e);
      f && (f.style && Object.assign(i, f.style), f.className && d.push(f.className), f.children && _.push(f.children));
    }), /* @__PURE__ */ k(
      "div",
      {
        id: p(this, he),
        className: j(d),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          e && I(this, Je, to).call(this, e),
          e && I(this, Qe, no).call(this, e),
          e && I(this, Ze, oo).call(this, e),
          e && I(this, et, so).call(this, e)
        ]
      }
    );
  }
}, ce = new WeakMap(), he = new WeakMap(), Q = new WeakMap(), U = new WeakMap(), Z = new WeakMap(), W = new WeakMap(), O = new WeakMap(), F = new WeakMap(), _e = new WeakMap(), Ne = new WeakMap(), He = new WeakMap(), X = new WeakMap(), fe = new WeakMap(), ue = new WeakMap(), Je = new WeakSet(), to = function(e) {
  const { header: o, colsInfo: r, headerHeight: s, scrollLeft: l } = e;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ k(
      qo,
      {
        scrollLeft: l,
        height: s,
        onRenderCell: p(this, Le),
        onRenderRow: p(this, nt),
        ...r
      }
    );
  const a = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ k(
    cn,
    {
      className: "dtable-header",
      style: { height: s },
      renders: a,
      generateArgs: [e],
      generatorThis: this
    }
  );
}, Qe = new WeakSet(), no = function(e) {
  const { headerHeight: o, rowsHeight: r, visibleRows: s, rowHeight: l, colsInfo: a, scrollLeft: h, scrollTop: u } = e;
  return /* @__PURE__ */ k(
    Yo,
    {
      top: o,
      height: r,
      rows: s,
      rowHeight: l,
      scrollLeft: h,
      scrollTop: u,
      onRenderCell: p(this, Le),
      onRenderRow: p(this, tt),
      ...a
    }
  );
}, Ze = new WeakSet(), oo = function(e) {
  const { footer: o } = e;
  if (!o)
    return null;
  const r = typeof o == "function" ? o.call(this, e) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ k(
    cn,
    {
      className: "dtable-footer",
      style: { height: e.footerHeight, top: e.rowsHeight + e.headerHeight },
      renders: r,
      generateArgs: [e],
      generatorThis: this,
      generators: e.footerGenerators
    }
  );
}, et = new WeakSet(), so = function(e) {
  const o = [], { scrollLeft: r, colsInfo: s, scrollTop: l, rowsHeight: a, rowsHeightTotal: h, footerHeight: u } = e, { scrollColsWidth: i, scrollWidth: d } = s, { scrollbarSize: _ = 12, horzScrollbarPos: c } = this.options;
  return i > d && o.push(
    /* @__PURE__ */ k(
      sn,
      {
        type: "horz",
        scrollPos: r,
        scrollSize: i,
        clientSize: d,
        onScroll: p(this, Pe),
        left: s.fixedLeftWidth,
        bottom: (c === "inside" ? 0 : -_) + u,
        size: _,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), h > a && o.push(
    /* @__PURE__ */ k(
      sn,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: h,
        clientSize: a,
        onScroll: p(this, Pe),
        right: 0,
        size: _,
        top: e.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Te = new WeakSet(), kt = function() {
  var e;
  S(this, Q, !1), (e = this.options.afterRender) == null || e.call(this), p(this, W).forEach((o) => {
    var r;
    return (r = o.afterRender) == null ? void 0 : r.call(this);
  });
}, tt = new WeakMap(), nt = new WeakMap(), Le = new WeakMap(), Pe = new WeakMap(), ot = new WeakMap(), st = new WeakMap(), rt = new WeakSet(), ro = function() {
  if (p(this, U))
    return !1;
  const o = { ...ln(), ...p(this, Z).reduce((r, s) => {
    const { defaultOptions: l } = s;
    return l && Object.assign(r, l), r;
  }, {}), ...this.props };
  return S(this, U, o), S(this, W, p(this, Z).reduce((r, s) => {
    const { when: l, options: a } = s;
    return (!l || l(o)) && (r.push(s), a && Object.assign(o, typeof a == "function" ? a.call(this, o) : a)), r;
  }, [])), S(this, He, [this.options.i18n, ...this.plugins.map((r) => r.i18n)].filter(Boolean)), !0;
}, it = new WeakSet(), io = function() {
  var Pt, Dt;
  const { plugins: e } = this;
  let o = p(this, U);
  const r = {
    flex: /* @__PURE__ */ k("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ k("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((x) => {
    var V;
    const L = (V = x.beforeLayout) == null ? void 0 : V.call(this, o);
    L && (o = { ...o, ...L }), Object.assign(r, x.footer);
  });
  const { defaultColWidth: s, minColWidth: l, maxColWidth: a } = o, h = [], u = [], i = [], d = {}, _ = [], c = [];
  let f = 0, v = 0, y = 0;
  o.cols.forEach((x) => {
    if (x.hidden)
      return;
    const {
      name: L,
      type: V = "",
      fixed: G = !1,
      flex: se = !1,
      width: ye = s,
      minWidth: ve = l,
      maxWidth: ut = a,
      ...yo
    } = x, A = {
      name: L,
      type: V,
      setting: {
        name: L,
        type: V,
        fixed: G,
        flex: se,
        width: ye,
        minWidth: ve,
        maxWidth: ut,
        ...yo
      },
      flex: G ? 0 : se === !0 ? 1 : typeof se == "number" ? se : 0,
      left: 0,
      width: rn(ye, ve, ut),
      realWidth: 0,
      visible: !0,
      index: _.length
    };
    e.forEach((Wt) => {
      var It, jt;
      const We = (It = Wt.colTypes) == null ? void 0 : It[V];
      if (We) {
        const zt = typeof We == "function" ? We(A) : We;
        zt && Object.assign(A.setting, zt);
      }
      (jt = Wt.onAddCol) == null || jt.call(this, A);
    }), A.width = rn(A.setting.width ?? A.width, A.setting.minWidth ?? ve, A.setting.maxWidth ?? ut), A.realWidth = A.realWidth || A.width, G === "left" ? (A.left = f, f += A.width, h.push(A)) : G === "right" ? (A.left = v, v += A.width, u.push(A)) : (A.left = y, y += A.width, i.push(A)), A.flex && c.push(A), _.push(A), d[A.name] = A;
  });
  let g = o.width, b = 0;
  const C = f + y + v;
  if (typeof g == "function" && (g = g.call(this, C)), g === "auto")
    b = C;
  else if (g === "100%") {
    const { parent: x } = this;
    if (x)
      b = x.clientWidth;
    else {
      b = 0, S(this, Q, !0);
      return;
    }
  } else
    b = g ?? 0;
  const { data: R, rowKey: D = "id", rowHeight: $ } = o, M = [], w = (x, L, V) => {
    var se, ye;
    const G = { data: V ?? { [D]: x }, id: x, index: M.length, top: 0 };
    if (V || (G.lazy = !0), M.push(G), ((se = o.onAddRow) == null ? void 0 : se.call(this, G, L)) !== !1) {
      for (const ve of e)
        if (((ye = ve.onAddRow) == null ? void 0 : ye.call(this, G, L)) === !1)
          return;
    }
  };
  if (typeof R == "number")
    for (let x = 0; x < R; x++)
      w(`${x}`, x);
  else
    Array.isArray(R) && R.forEach((x, L) => {
      typeof x == "object" ? w(`${x[D] ?? ""}`, L, x) : w(`${x ?? ""}`, L);
    });
  let m = M;
  const pe = {};
  if (o.onAddRows) {
    const x = o.onAddRows.call(this, m);
    x && (m = x);
  }
  for (const x of e) {
    const L = (Pt = x.onAddRows) == null ? void 0 : Pt.call(this, m);
    L && (m = L);
  }
  m.forEach((x, L) => {
    pe[x.id] = x, x.index = L, x.top = x.index * $;
  });
  const { header: Nt, footer: Ht } = o, ht = Nt ? o.headerHeight || $ : 0, _t = Ht ? o.footerHeight || $ : 0;
  let B = o.height, oe = 0;
  const Tt = m.length * $, ft = ht + _t + Tt;
  if (typeof B == "function" && (B = B.call(this, ft)), B === "auto")
    oe = ft;
  else if (typeof B == "object")
    oe = Math.min(B.max, Math.max(B.min, ft));
  else if (B === "100%") {
    const { parent: x } = this;
    if (x)
      oe = x.clientHeight;
    else {
      oe = 0, S(this, Q, !0);
      return;
    }
  } else
    oe = B;
  const po = oe - ht - _t, go = b - f - v, ge = {
    options: o,
    allRows: M,
    width: b,
    height: oe,
    rows: m,
    rowsMap: pe,
    rowHeight: $,
    rowsHeight: po,
    rowsHeightTotal: Tt,
    header: Nt,
    footer: Ht,
    footerGenerators: r,
    headerHeight: ht,
    footerHeight: _t,
    colsMap: d,
    colsList: _,
    flexCols: c,
    colsInfo: {
      fixedLeftCols: h,
      fixedRightCols: u,
      scrollCols: i,
      fixedLeftWidth: f,
      scrollWidth: go,
      scrollColsWidth: y,
      fixedRightWidth: v
    }
  }, Lt = (Dt = o.onLayout) == null ? void 0 : Dt.call(this, ge);
  Lt && Object.assign(ge, Lt), e.forEach((x) => {
    if (x.onLayout) {
      const L = x.onLayout.call(this, ge);
      L && Object.assign(ge, L);
    }
  }), S(this, O, ge);
}, lt = new WeakSet(), lo = function() {
  (I(this, rt, ro).call(this) || !p(this, O)) && I(this, it, io).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: r, colsInfo: { scrollCols: s, scrollWidth: l, scrollColsWidth: a } } = e;
  if (r.length) {
    const C = l - a;
    if (C > 0) {
      const R = r.reduce(($, M) => $ + M.flex, 0);
      let D = 0;
      r.forEach(($) => {
        const M = Math.min(C - D, Math.ceil(C * ($.flex / R)));
        $.realWidth = M + $.width, D += $.realWidth;
      });
    } else
      r.forEach((R) => {
        R.realWidth = R.width;
      });
  }
  o = Math.min(Math.max(0, a - l), o);
  let h = 0;
  s.forEach((C) => {
    C.left = h, h += C.realWidth, C.visible = C.left + C.realWidth >= o && C.left <= o + l;
  });
  const { rowsHeightTotal: u, rowsHeight: i, rows: d, rowHeight: _ } = e, c = Math.min(Math.max(0, u - i), this.state.scrollTop), f = Math.floor(c / _), v = c + i, y = Math.min(d.length, Math.ceil(v / _)), g = [], { rowDataGetter: b } = this.options;
  for (let C = f; C < y; C++) {
    const R = d[C];
    R.lazy && b && (R.data = b([R.id])[0], R.lazy = !1), g.push(R);
  }
  return e.visibleRows = g, e.scrollTop = c, e.scrollLeft = o, e;
}, P(Ie, "addPlugin", Qn), P(Ie, "removePlugin", Zn), Ie);
function an(t, n) {
  n !== void 0 ? t.data.hoverCol = n : n = t.data.hoverCol;
  const { current: e } = t.ref;
  if (!e)
    return;
  const o = "dtable-col-hover";
  e.querySelectorAll(`.${o}`).forEach((r) => r.classList.remove(o)), typeof n == "string" && n.length && e.querySelectorAll(`.dtable-cell[data-col="${n}"]`).forEach((r) => r.classList.add(o));
}
const es = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var r;
      const { colHover: n } = this.options;
      if (!n)
        return;
      const e = (r = t.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!e || n === "header" && !e.closest(".dtable-header"))
        return;
      const o = (e == null ? void 0 : e.getAttribute("data-col")) ?? !1;
      an(this, o);
    },
    mouseleave() {
      an(this, !1);
    }
  }
}, ts = de(es, { buildIn: !0 });
function ns(t, n) {
  var l, a;
  typeof t == "boolean" && (n = t, t = void 0);
  const e = this.state.checkedRows, o = {}, { canRowCheckable: r } = this.options, s = (h, u) => {
    r && !r.call(this, h) || !!e[h] === u || (u ? e[h] = !0 : delete e[h], o[h] = u);
  };
  if (t === void 0 ? (n === void 0 && (n = !co.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: h }) => {
    s(h, !!n);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((h) => {
    s(h, n ?? !e[h]);
  })), Object.keys(o).length) {
    const h = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, t, o, e);
    h && Object.keys(h).forEach((u) => {
      h[u] ? e[u] = !0 : delete e[u];
    }), this.setState({ checkedRows: { ...e } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, o);
    });
  }
  return o;
}
function os(t) {
  return this.state.checkedRows[t] ?? !1;
}
function co() {
  var e, o;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((e = this.layout) == null ? void 0 : e.allRows.reduce((r, s) => r + (n.call(this, s.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function ss() {
  return Object.keys(this.state.checkedRows);
}
const rs = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: ns,
    isRowChecked: os,
    isAllRowChecked: co,
    getChecks: ss
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const t = this.isAllRowChecked();
      return [
        /* @__PURE__ */ k("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ k("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, n) {
      const e = this.getChecks().length, o = [];
      return e && o.push(this.i18n("checkedCountInfo", { selected: e })), o.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ k("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: n, col: e }) {
    var a;
    const { id: o } = n, { canRowCheckable: r } = this.options;
    if (r && !r.call(this, o))
      return t;
    const { checkbox: s } = e.setting;
    if (typeof s == "function" ? s.call(this, o) : s) {
      const h = this.isRowChecked(o), u = ((a = this.options.checkboxRender) == null ? void 0 : a.call(this, h, o)) ?? /* @__PURE__ */ k("input", { type: "checkbox", checked: h });
      t.unshift(u), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: n, col: e }) {
    var l;
    const { id: o } = n, { checkbox: r } = e.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const a = this.isAllRowChecked(), h = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, a, o)) ?? /* @__PURE__ */ k("input", { type: "checkbox", checked: a });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: n }) {
    if (this.isRowChecked(n.id))
      return { className: j(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const n = t.target;
    if (!n)
      return;
    const e = n.closest('input[type="checkbox"],.dtable-checkbox');
    e && (this.toggleCheckRows(e.checked), t.stopPropagation());
  },
  onRowClick(t, { rowID: n }) {
    const e = t.target;
    if (!e)
      return;
    (e.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(n);
  }
}, is = de(rs);
var ao = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(ao || {});
function Ct(t) {
  const n = this.data.nestedMap.get(t);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const e = this.state.collapsedRows, o = n.children && e && e[t];
  let r = !1, { parent: s } = n;
  for (; s; ) {
    const l = Ct.call(this, s);
    if (l.state !== "expanded") {
      r = !0;
      break;
    }
    s = l.parent;
  }
  return n.state = r ? "hidden" : o ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Ct.call(this, n.parent).level + 1 : 0, n;
}
function ls(t, n) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (n === void 0 && (n = !ho.call(this)), n) {
      const r = o.entries();
      for (const [s, l] of r)
        l.state === "expanded" && (e[s] = !0);
    } else
      e = {};
  else {
    const r = Array.isArray(t) ? t : [t];
    n === void 0 && (n = !e[r[0]]), r.forEach((s) => {
      const l = o.get(s);
      n && (l != null && l.children) ? e[s] = !0 : delete e[s];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...e } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function ho() {
  const t = this.data.nestedMap.values();
  for (const n of t)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function _o(t, n = 0, e, o = 0) {
  var r;
  e || (e = [...t.keys()]);
  for (const s of e) {
    const l = t.get(s);
    l && (l.level === o && (l.order = n++), (r = l.children) != null && r.length && (n = _o(t, n, l.children, o + 1)));
  }
  return n;
}
function fo(t, n, e, o) {
  const r = t.getNestedRowInfo(n);
  return !r || r.state === "" || !r.children || r.children.forEach((s) => {
    o[s] = e, fo(t, s, e, o);
  }), r;
}
function uo(t, n, e, o, r) {
  var a;
  const s = t.getNestedRowInfo(n);
  if (!s || s.state === "")
    return;
  ((a = s.children) == null ? void 0 : a.every((h) => {
    const u = !!(o[h] !== void 0 ? o[h] : r[h]);
    return e === u;
  })) && (o[n] = e), s.parent && uo(t, s.parent, e, o, r);
}
const cs = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, n) {
      const { nestedMap: e } = this.data, o = e.get(t.id), r = e.get(n.id);
      return (o == null ? void 0 : o.parent) === (r == null ? void 0 : r.parent);
    },
    beforeCheckRows(t, n, e) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const o = {};
      return Object.entries(n).forEach(([r, s]) => {
        const l = fo(this, r, s, o);
        l != null && l.parent && uo(this, l.parent, s, o, e);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: ls,
    isAllCollapsed: ho,
    getNestedRowInfo: Ct
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var r, s;
    const { nestedMap: n } = this.data, e = (r = t.data) == null ? void 0 : r[this.options.nestedParentKey ?? "parent"], o = n.get(t.id) ?? {
      state: "",
      level: 0
    };
    if (o.parent = e, (s = t.data) != null && s[this.options.asParentKey ?? "asParent"] && (o.children = []), n.set(t.id, o), e) {
      let l = n.get(e);
      l || (l = {
        state: "",
        level: 0
      }, n.set(e, l)), l.children || (l.children = []), l.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter(
      (n) => this.getNestedRowInfo(n.id).state !== "hidden"
      /* hidden */
    ), _o(this.data.nestedMap), t.sort((n, e) => {
      const o = this.getNestedRowInfo(n.id), r = this.getNestedRowInfo(e.id), s = (o.order ?? 0) - (r.order ?? 0);
      return s === 0 ? n.index - e.index : s;
    }), t;
  },
  onRenderCell(t, { col: n, row: e }) {
    var a;
    const { id: o, data: r } = e, { nestedToggle: s } = n.setting, l = this.getNestedRowInfo(o);
    if (s && (l.children || l.parent) && t.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, l, o, n, r)) ?? /* @__PURE__ */ k("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ k("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: h = s } = n.setting;
      h && (h === !0 && (h = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ k("div", { className: "dtable-nested-indent", style: { width: h * l.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: n, col: e }) {
    var r;
    const { id: o } = n;
    return e.setting.nestedToggle && t.unshift(((r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, void 0, o, e, void 0)) ?? /* @__PURE__ */ k("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ k("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: n }) {
    const e = this.getNestedRowInfo(n.id);
    return {
      className: j(t.className, `is-${e.state}`),
      "data-parent": e.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = j(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const n = t.target;
    if (!(!n || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: n }) {
    const e = t.target;
    if (!(!e || !this.getNestedRowInfo(n).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(n), !0;
  }
}, as = de(cs), hs = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), _s = (t, n = "yyyy-MM-dd hh:mm") => {
  t = hs(t);
  const e = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n = n.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((o) => {
    if (new RegExp(`(${o})`).test(n)) {
      const r = `${e[o]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), n;
};
const fs = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t) {
        return t[0] = {
          html: t[0]
        }, t;
      }
    },
    link: {
      onRenderCell(t, { col: n, row: e }) {
        const { linkTemplate: o = "", linkProps: r } = n.setting, s = we(o, e.data);
        return t[0] = /* @__PURE__ */ k("a", { href: s, ...r, children: t[0] }), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: n, row: e }) {
        const { data: o } = e, { avatarWithName: r, avatarClass: s = "size-xs circle", avatarKey: l = `${n.name}Avatar` } = n.setting, a = /* @__PURE__ */ k("div", { className: `avatar ${s} flex-none`, children: /* @__PURE__ */ k("img", { src: o ? o[l] : "" }) });
        return r ? t.unshift(a) : t[0] = a, t;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(t, { col: n }) {
        const { circleSize: e = 24, circleBorderSize: o = 1, circleBgColor: r = "var(--color-border)", circleColor: s = "var(--color-success-500)" } = n.setting, l = (e - o) / 2, a = e / 2, h = t[0];
        return t[0] = /* @__PURE__ */ k("svg", { width: e, height: e, children: [
          /* @__PURE__ */ k("circle", { cx: a, cy: a, r: l, "stroke-width": o, stroke: r, fill: "transparent" }),
          /* @__PURE__ */ k("circle", { cx: a, cy: a, r: l, "stroke-width": o, stroke: s, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - h) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ k("text", { x: a, y: a + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(h) })
        ] }), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: n, row: e }) {
        var a;
        const o = (a = e.data) == null ? void 0 : a[n.name];
        if (!o)
          return t;
        const { actionBtnTemplate: r = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: s = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = n.setting;
        return [{
          html: o.map((h) => {
            typeof h == "string" && (h = { action: h });
            const u = s[h.action];
            return u && (h = { className: l, ...u, ...h }), we(r, h);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, { col: n }) {
        let { format: e } = n.setting;
        if (!e)
          return t;
        typeof e == "string" && (e = { type: "text", format: e });
        const { format: o, type: r } = e, s = t[0];
        return typeof o == "function" ? t[0] = r === "html" ? { html: o(s) } : o(s) : r === "datetime" ? t[0] = _s(s, o) : r === "html" ? t[0] = { html: we(o, s) } : t[0] = we(o, s), t;
      }
    }
  }
}, us = de(fs, { buildIn: !0 }), ds = {
  name: "sort-type",
  onRenderHeaderCell(t, { col: n }) {
    const { sortType: e } = n.setting;
    if (e) {
      const { sortLink: o = this.options.sortLink, sortAttrs: r } = n.setting, s = e === !0 ? "none" : e;
      if (t.push(
        /* @__PURE__ */ k("div", { className: `dtable-sort dtable-sort-${s}` }),
        { outer: !0, attrs: { "data-sort": s } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, n, s) : o;
        t.push(
          { tagName: "a", attrs: { href: l, ...r } }
        );
      }
    }
    return t;
  }
}, ps = de(ds, { buildIn: !0 }), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ao,
  checkable: is,
  colHover: ts,
  nested: as,
  rich: us,
  sortType: ps
}, Symbol.toStringTag, { value: "Module" }));
class me extends xn {
}
P(me, "NAME", "dtable"), P(me, "Component", Zo), P(me, "definePlugin", de), P(me, "removePlugin", Zn), P(me, "plugins", gs);
export {
  me as DTable
};
