var vg = Object.defineProperty;
var bg = (t, e, n) => e in t ? vg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (bg(t, typeof e != "symbol" ? e + "" : e, n), n), ec = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var b = (t, e, n) => (ec(t, e, "read from private field"), n ? n.call(t) : e.get(t)), T = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, H = (t, e, n, o) => (ec(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n), Ea = (t, e, n, o) => ({
  set _(i) {
    H(t, e, i, n);
  },
  get _() {
    return b(t, e, o);
  }
}), W = (t, e, n) => (ec(t, e, "access private method"), n);
var Rl, tt, Zf, Jf, _o, Aa, Es = {}, Qf = [], wg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Se(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function tu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function eu(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Rl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return _s(t, l, o, i, null);
}
function _s(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Zf };
  return i == null && tt.vnode != null && tt.vnode(r), r;
}
function $g() {
  return { current: null };
}
function Nl(t) {
  return t.children;
}
function fs(t, e) {
  this.props = t, this.context = e;
}
function Xo(t, e) {
  if (e == null)
    return t.__ ? Xo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Xo(t) : null;
}
function nu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return nu(t);
  }
}
function Ta(t) {
  (!t.__d && (t.__d = !0) && _o.push(t) && !As.__r++ || Aa !== tt.debounceRendering) && ((Aa = tt.debounceRendering) || setTimeout)(As);
}
function As() {
  for (var t; As.__r = _o.length; )
    t = _o.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), _o = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Se({}, r)).__v = r.__v + 1, Hc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Xo(r), r.__h), iu(o, r), r.__e != l && nu(r)));
    });
}
function ou(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Qf, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _s(null, a, null, null, a) : Array.isArray(a) ? _s(Nl, { children: a }, null, null, null) : a.__b > 0 ? _s(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Hc(t, a, f = f || Es, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ru(a, _, t) : _ = su(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Xo(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && cu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      lu(p[s], p[++s], p[++s]);
}
function ru(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? ru(o, e, n) : su(n, o, o, i, o.__e, e));
  return e;
}
function su(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function kg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ts(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ts(t, r, e[r], n[r], o);
}
function Ma(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || wg.test(e) ? n : n + "px";
}
function Ts(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Ma(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Ma(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ra : La, r) : t.removeEventListener(e, r ? Ra : La, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function La(t) {
  this.l[t.type + !1](tt.event ? tt.event(t) : t);
}
function Ra(t) {
  this.l[t.type + !0](tt.event ? tt.event(t) : t);
}
function Hc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = tt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new fs(p, g), s.constructor = y, s.render = Sg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Se({}, s.__s)), Se(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = tt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Se(Se({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Nl && h.key == null ? h.props.children : h, ou(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = xg(n.__e, e, n, o, i, r, l, _);
    (h = tt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), tt.__e(x, e, n);
  }
}
function iu(t, e) {
  tt.__c && tt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      tt.__e(o, n.__v);
    }
  });
}
function xg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Rl.call(t.childNodes), h = (d = n.props || Es).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (kg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ou(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Xo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && tu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ts(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ts(t, "checked", u, d.checked, !1));
  }
  return t;
}
function lu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    tt.__e(o, n);
  }
}
function cu(t, e, n) {
  var o, i;
  if (tt.unmount && tt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || lu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        tt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && cu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || tu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Sg(t, e, n) {
  return this.constructor(t, n);
}
function Cg(t, e, n) {
  var o, i, r;
  tt.__ && tt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Hc(e, t = (!o && n || e).__k = eu(Nl, null, [t]), i || Es, Es, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Rl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), iu(r, t);
}
Rl = Qf.slice, tt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Zf = 0, Jf = function(t) {
  return t != null && t.constructor === void 0;
}, fs.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Se({}, this.state), typeof t == "function" && (t = t(Se({}, n), this.props)), t && Se(n, t), t != null && this.__v && (e && this._sb.push(e), Ta(this));
}, fs.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ta(this));
}, fs.prototype.render = Nl, _o = [], As.__r = 0;
var Eg = 0;
function au(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Eg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return tt.vnode && tt.vnode(_), _;
}
var ae;
class Ag {
  constructor(e = "") {
    T(this, ae, void 0);
    typeof e == "object" ? H(this, ae, e) : H(this, ae, document.appendChild(document.createComment(e)));
  }
  on(e, n, o) {
    b(this, ae).addEventListener(e, n, o);
  }
  once(e, n, o) {
    b(this, ae).addEventListener(e, n, { once: !0, ...o });
  }
  off(e, n, o) {
    b(this, ae).removeEventListener(e, n, o);
  }
  emit(e) {
    return b(this, ae).dispatchEvent(e), e;
  }
}
ae = new WeakMap();
const gc = /* @__PURE__ */ new Set([
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
class Wc extends Ag {
  on(e, n, o) {
    super.on(e, n, o);
  }
  off(e, n, o) {
    super.off(e, n, o);
  }
  once(e, n, o) {
    super.once(e, n, o);
  }
  emit(e, n) {
    return typeof e == "string" && (gc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Wc.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (gc.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
var _e, yr, tn, so;
class Na extends Wc {
  constructor(n = "", o) {
    super(n);
    T(this, tn);
    T(this, _e, /* @__PURE__ */ new Map());
    T(this, yr, void 0);
    H(this, yr, o == null ? void 0 : o.customEventSuffix);
  }
  on(n, o, i) {
    n = W(this, tn, so).call(this, n), super.on(n, o, i), b(this, _e).set(o, [n, i]);
  }
  off(n, o, i) {
    n = W(this, tn, so).call(this, n), super.off(n, o, i), b(this, _e).delete(o);
  }
  once(n, o, i) {
    n = W(this, tn, so).call(this, n);
    const r = (l) => {
      o(l), b(this, _e).delete(r);
    };
    super.once(n, r, i), b(this, _e).set(r, [n, i]);
  }
  emit(n, o) {
    return typeof n == "string" && (n = W(this, tn, so).call(this, n)), super.emit(n, o);
  }
  offAll() {
    Array.from(b(this, _e).entries()).forEach(([n, [o, i]]) => {
      super.off(o, n, i);
    }), b(this, _e).clear();
  }
}
_e = new WeakMap(), yr = new WeakMap(), tn = new WeakSet(), so = function(n) {
  const o = b(this, yr);
  return gc.has(n) || typeof o != "string" || n.endsWith(o) ? n : `${n}${o}`;
};
function Tg(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let o = t;
  const i = [o];
  for (; typeof o == "object" && o !== null && e.length; ) {
    let r = e.shift(), l;
    const c = r.indexOf("[");
    if (c > 0 && c < r.length - 1 && r.endsWith("]") && (l = r.substring(c + 1, r.length - 1), r = r.substring(0, c)), o = o[r], i.push(o), l !== void 0)
      if (typeof o == "object" && o !== null)
        o instanceof Map ? o = o.get(l) : o = o[l], i.push(o);
      else
        throw new Error(`Cannot access property "${r}[${l}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return i;
}
function Mg(t, e, n) {
  const o = Tg(t, e), i = o[o.length - 1];
  return i === void 0 ? n : i;
}
function nc(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function yc(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (nc(t) && nc(n))
    for (const o in n)
      nc(n[o]) ? (t[o] || Object.assign(t, { [o]: {} }), yc(t[o], n[o])) : Object.assign(t, { [o]: n[o] });
  return yc(t, ...e);
}
function Lt(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((o) => {
      const i = n[o] ?? 0;
      t = t.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const o = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return t;
}
var Ic = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Ic || {});
function v$(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Ic[n]).toFixed(e) + n);
}
const b$ = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const o = n[1];
  return t = t.replace(o, ""), Number.parseInt(t, 10) * Ic[o];
};
var Kf;
let Uc = ((Kf = document.documentElement.getAttribute("lang")) == null ? void 0 : Kf.toLowerCase()) ?? "zh_cn", ye;
function Lg() {
  return Uc;
}
function Rg(t) {
  Uc = t.toLowerCase();
}
function Ng(t, e) {
  ye || (ye = {}), typeof t == "string" && (t = { [t]: e ?? {} }), yc(ye, t);
}
function Xr(t, e, n, o, i, r) {
  Array.isArray(t) ? ye && t.unshift(ye) : t = ye ? [ye, t] : [t], typeof n == "string" && (r = i, i = o, o = n, n = void 0);
  const l = i || Uc;
  let c;
  for (const _ of t) {
    if (!_)
      continue;
    const h = _[l];
    if (!h)
      continue;
    const s = r && _ === ye ? `${r}.${e}` : e;
    if (c = Mg(h, s), c !== void 0)
      break;
  }
  return c === void 0 ? o : n ? Lt(c, ...Array.isArray(n) ? n : [n]) : c;
}
Xr.addLang = Ng;
Xr.getCode = Lg;
Xr.setCode = Rg;
function Dg(t) {
  return Object.fromEntries(Object.entries(t).map(([e, n]) => {
    if (typeof n == "string")
      try {
        n = JSON.parse(n);
      } catch {
      }
    return [e, n];
  }));
}
const oc = /* @__PURE__ */ new Map();
var fe, wn, Bt;
class qt {
  constructor(e, n) {
    T(this, fe, void 0);
    T(this, wn, void 0);
    T(this, Bt, void 0);
    e = typeof e == "string" ? document.querySelector(e) : e, this.constructor.EVENTS && H(this, Bt, new Na(e, { customEventSuffix: `.${this.constructor.KEY}` })), H(this, fe, { ...this.constructor.DEFAULT }), this.setOptions({ ...e instanceof HTMLElement ? Dg(e.dataset) : null, ...n }), this.constructor.all.set(e, this), H(this, wn, e), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return b(this, fe);
  }
  get element() {
    return b(this, wn);
  }
  get events() {
    return b(this, Bt);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(e) {
    return e && Object.assign(b(this, fe), e), b(this, fe);
  }
  render(e) {
    this.setOptions(e);
  }
  destroy() {
    this.constructor.all.delete(b(this, wn)), b(this, Bt) && (this.emit("destroyed", this), b(this, Bt).offAll());
  }
  on(e, n, o) {
    var i;
    (i = b(this, Bt)) == null || i.on(e, n, o);
  }
  once(e, n, o) {
    var i;
    (i = b(this, Bt)) == null || i.once(e, n, o);
  }
  off(e, n, o) {
    var i;
    (i = b(this, Bt)) == null || i.off(e, n, o);
  }
  emit(e, n) {
    var l;
    let o = Na.createEvent(e, n);
    const i = `on${e[0].toUpperCase()}${e.substring(1)}`, r = b(this, fe)[i];
    return r && r(o) === !1 && (o.preventDefault(), o.stopPropagation()), o = (l = b(this, Bt)) == null ? void 0 : l.emit(e, n), o;
  }
  i18n(e, n, o) {
    return Xr(b(this, fe).i18n, e, n, o, this.options.lang, this.constructor.NAME) ?? `{i18n:${e}}`;
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
    const e = this.NAME;
    if (oc.has(e))
      return oc.get(e);
    const n = /* @__PURE__ */ new Map();
    return oc.set(e, n), n;
  }
  static getAll() {
    return this.all;
  }
  static get(e) {
    return this.all.get(e);
  }
  static ensure(e, n) {
    return this.get(e) || new this(e, n);
  }
}
fe = new WeakMap(), wn = new WeakMap(), Bt = new WeakMap(), L(qt, "EVENTS", !1), L(qt, "DEFAULT", {});
class $t extends qt {
  constructor() {
    super(...arguments);
    L(this, "ref", $g());
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
  render(n) {
    const o = this.constructor.Component;
    Cg(/* @__PURE__ */ au(o, { ref: this.ref, ...this.setOptions(n) }), this.element);
  }
}
L($t, "Component");
var Fc, lt, _u, fu, fo, Da, uu = {}, hu = [], Pg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ce(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function du(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Qn(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Fc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return us(t, l, o, i, null);
}
function us(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++_u };
  return i == null && lt.vnode != null && lt.vnode(r), r;
}
function Og() {
  return { current: null };
}
function Bc(t) {
  return t.children;
}
function uo(t, e) {
  this.props = t, this.context = e;
}
function Ko(t, e) {
  if (e == null)
    return t.__ ? Ko(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Ko(t) : null;
}
function pu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return pu(t);
  }
}
function Pa(t) {
  (!t.__d && (t.__d = !0) && fo.push(t) && !Ms.__r++ || Da !== lt.debounceRendering) && ((Da = lt.debounceRendering) || setTimeout)(Ms);
}
function Ms() {
  for (var t; Ms.__r = fo.length; )
    t = fo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), fo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ce({}, r)).__v = r.__v + 1, vu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Ko(r), r.__h), Wg(o, r), r.__e != l && pu(r)));
    });
}
function mu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || hu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? us(null, a, null, null, a) : Array.isArray(a) ? us(Bc, { children: a }, null, null, null) : a.__b > 0 ? us(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      vu(t, a, f = f || uu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = gu(a, _, t) : _ = yu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Ko(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && wu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      bu(p[s], p[++s], p[++s]);
}
function gu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? gu(o, e, n) : yu(n, o, o, i, o.__e, e));
  return e;
}
function yu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Hg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ls(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ls(t, r, e[r], n[r], o);
}
function Oa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Pg.test(e) ? n : n + "px";
}
function Ls(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Oa(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Oa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Wa : Ha, r) : t.removeEventListener(e, r ? Wa : Ha, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Ha(t) {
  this.l[t.type + !1](lt.event ? lt.event(t) : t);
}
function Wa(t) {
  this.l[t.type + !0](lt.event ? lt.event(t) : t);
}
function vu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = lt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new uo(p, g), s.constructor = y, s.render = Ug), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ce({}, s.__s)), Ce(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = lt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ce(Ce({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Bc && h.key == null ? h.props.children : h, mu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ig(n.__e, e, n, o, i, r, l, _);
    (h = lt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), lt.__e(x, e, n);
  }
}
function Wg(t, e) {
  lt.__c && lt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      lt.__e(o, n.__v);
    }
  });
}
function Ig(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Fc.call(t.childNodes), h = (d = n.props || uu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Hg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, mu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Ko(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && du(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ls(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ls(t, "checked", u, d.checked, !1));
  }
  return t;
}
function bu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    lt.__e(o, n);
  }
}
function wu(t, e, n) {
  var o, i;
  if (lt.unmount && lt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || bu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        lt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && wu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || du(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ug(t, e, n) {
  return this.constructor(t, n);
}
Fc = hu.slice, lt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, _u = 0, fu = function(t) {
  return t != null && t.constructor === void 0;
}, uo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ce({}, this.state), typeof t == "function" && (t = t(Ce({}, n), this.props)), t && Ce(n, t), t != null && this.__v && (e && this._sb.push(e), Pa(this));
}, uo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Pa(this));
}, uo.prototype.render = Bc, fo = [], Ms.__r = 0;
var Fg = 0;
function te(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Fg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return lt.vnode && lt.vnode(_), _;
}
function Dl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), o = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const l = n.get(i);
    typeof l == "number" ? e[l][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Dl(...i).forEach(o) : i && typeof i == "object" ? Object.entries(i).forEach(o) : typeof i == "string" && i.split(" ").forEach((r) => o(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const F = (...t) => Dl(...t).reduce((e, [n, o]) => (o && e.push(n), e), []).join(" ");
function Bg({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Qn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
function $u({
  component: t = "a",
  className: e,
  children: n,
  attrs: o,
  url: i,
  disabled: r,
  active: l,
  icon: c,
  text: _,
  target: h,
  trailingIcon: s,
  hint: d,
  style: f,
  onClick: a
}) {
  const u = [
    typeof c == "string" ? /* @__PURE__ */ te("i", { class: `icon ${c}` }) : c,
    /* @__PURE__ */ te("span", { className: "text", children: _ }),
    typeof n == "function" ? n() : n,
    typeof s == "string" ? /* @__PURE__ */ te("i", { class: `icon ${s}` }) : s
  ];
  return Qn(t, {
    className: F(e, { disabled: r, active: l }),
    title: d,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: h,
    style: f,
    onClick: a,
    ...o
  }, ...u);
}
function jg({
  component: t = "div",
  className: e,
  text: n,
  attrs: o,
  children: i,
  style: r,
  onClick: l
}) {
  return Qn(t, {
    className: F(e),
    style: r,
    onClick: l,
    ...o
  }, n, typeof i == "function" ? i() : i);
}
function zg({
  component: t = "div",
  className: e,
  style: n,
  space: o,
  flex: i,
  attrs: r,
  onClick: l,
  children: c
}) {
  return Qn(t, {
    className: F(e),
    style: { width: o, height: o, flex: i, ...n },
    onClick: l,
    ...r
  }, c);
}
function Vg(t) {
  const {
    tag: e,
    className: n,
    style: o,
    renders: i,
    generateArgs: r = [],
    generatorThis: l,
    generators: c,
    onGenerate: _,
    onRenderItem: h,
    ...s
  } = t, d = [n], f = { ...o }, a = [], u = [];
  return i.forEach((v) => {
    const p = [];
    typeof v == "string" && c && c[v] && (v = c[v]), typeof v == "function" ? _ ? p.push(..._.call(l, v, a, ...r)) : p.push(...v.call(l, a, ...r) ?? []) : p.push(v), p.forEach((m) => {
      m != null && (typeof m == "object" && !Jf(m) && ("html" in m || "__html" in m || "className" in m || "style" in m || "attrs" in m || "children" in m) ? m.html ? a.push(
        /* @__PURE__ */ au("div", { className: F(m.className), style: m.style, dangerouslySetInnerHTML: { __html: m.html }, ...m.attrs ?? {} })
      ) : m.__html ? u.push(m.__html) : (m.style && Object.assign(f, m.style), m.className && d.push(m.className), m.children && a.push(m.children), m.attrs && Object.assign(s, m.attrs)) : a.push(m));
    });
  }), u.length && Object.assign(s, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(d),
    style: f,
    ...s
  }, a];
}
function vc({
  tag: t = "div",
  ...e
}) {
  const [n, o] = Vg(e);
  return eu(t, n, ...o);
}
function Yg(t) {
  return /* @__PURE__ */ te(vc, { ...t });
}
function ku({
  component: t = "div",
  className: e,
  children: n,
  style: o,
  attrs: i
}) {
  return Qn(t, {
    className: F(e),
    style: o,
    ...i
  }, n);
}
var oo;
let qn = (oo = class extends uo {
  constructor() {
    super(...arguments);
    L(this, "ref", Og());
  }
  get name() {
    return this.props.name ?? this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var n, o;
    (o = (n = this.props).beforeDestroy) == null || o.call(n, { menu: this });
  }
  afterRender(n) {
    var o, i;
    (i = (o = this.props).afterRender) == null || i.call(o, { menu: this, firstRender: n });
  }
  handleItemClick(n, o, i, r) {
    i && i.call(r.target, r);
    const { onClickItem: l } = this.props;
    l && l({ menu: this, item: n, index: o, event: r });
  }
  beforeRender() {
    var i;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this));
    const o = (i = n.beforeRender) == null ? void 0 : i.call(n, { menu: this, options: n });
    return o && Object.assign(n, o), n;
  }
  getItemRenderProps(n, o, i) {
    const { itemProps: r, onClickItem: l } = n, c = { key: i, ...o };
    return r && Object.assign(c, r[o.type || "item"]), (l || o.onClick) && (c.onClick = this.handleItemClick.bind(this, c, i, o.onClick)), c.className = F(c.className), c;
  }
  renderItem(n, o, i) {
    const r = this.getItemRenderProps(n, o, i), { itemRender: l } = n;
    if (l) {
      if (typeof l == "object") {
        const p = l[o.type || "item"];
        if (p)
          return /* @__PURE__ */ te(p, { ...r });
      } else if (typeof l == "function") {
        const p = l.call(this, r, Qn);
        if (fu(p))
          return p;
        typeof p == "object" && Object.assign(r, p);
      }
    }
    const { type: c = "item", component: _, key: h = i, rootAttrs: s, rootClass: d, rootStyle: f, rootChildren: a, ...u } = r, v = !_ || typeof _ == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[c] || qn.ItemComponents[c] : _;
    return Object.assign(u, {
      type: c,
      component: typeof _ == "string" ? _ : void 0
    }), this.renderTypedItem(v, {
      className: F(d),
      children: a,
      style: f,
      key: h,
      ...s
    }, {
      ...u,
      type: c,
      component: typeof _ == "string" ? _ : void 0
    });
  }
  renderTypedItem(n, o, i) {
    const { children: r, className: l, key: c, ..._ } = o;
    return /* @__PURE__ */ te(
      "li",
      {
        className: F(`${this.name}-${i.type}`, l),
        ..._,
        children: [
          /* @__PURE__ */ te(n, { ...i }),
          typeof r == "function" ? r() : r
        ]
      },
      c
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: o,
      style: i,
      itemProps: r,
      className: l,
      items: c,
      children: _,
      itemRender: h,
      onClickItem: s,
      beforeRender: d,
      afterRender: f,
      beforeDestroy: a,
      ...u
    } = n, v = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ te(v, { class: F(this.name, l), ...u, ref: this.ref, children: [
      c && c.map(this.renderItem.bind(this, n)),
      _
    ] });
  }
}, L(oo, "ItemComponents", {
  divider: Bg,
  item: $u,
  heading: jg,
  space: zg,
  custom: Yg,
  basic: ku
}), L(oo, "ROOT_TAG", "menu"), L(oo, "NAME", "action-menu"), oo);
class Ia extends $t {
}
L(Ia, "NAME", "actionmenu"), L(Ia, "Component", qn);
function Ua({
  ...t
}) {
  return /* @__PURE__ */ te($u, { ...t });
}
var hc, vr, Xt, $n;
let xu = (hc = class extends qn {
  constructor(n) {
    super(n);
    T(this, vr, /* @__PURE__ */ new Set());
    T(this, Xt, void 0);
    T(this, $n, (n, o, i) => {
      this.toggleNestedMenu(n, o), i.preventDefault();
    });
    H(this, Xt, n.nestedShow === void 0), b(this, Xt) && (this.state = { nestedShow: n.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const n = super.beforeRender(), { nestedShow: o, nestedTrigger: i, defaultNestedShow: r, controlledMenu: l, ...c } = n;
    return c;
  }
  renderNestedMenu(n) {
    let { items: o } = n;
    if (!o || (typeof o == "function" && (o = o(n, this)), !o.length))
      return;
    const i = this.constructor;
    return /* @__PURE__ */ te(
      i,
      {
        items: o,
        name: this.props.name,
        nestedShow: b(this, Xt) ? this.state.nestedShow : this.props.nestedShow,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: this.props.controlledMenu || this,
        itemProps: this.props.itemProps,
        onClickItem: this.props.onClickItem,
        afterRender: this.props.afterRender,
        beforeRender: this.props.beforeRender,
        beforeDestroy: this.props.beforeDestroy,
        itemRender: this.props.itemRender
      }
    );
  }
  isNestedItem(n) {
    return (!n.type || n.type === "item") && !!n.items;
  }
  renderToggleIcon(n, o) {
  }
  getItemRenderProps(n, o, i) {
    const r = super.getItemRenderProps(n, o, i);
    if (!this.isNestedItem(r))
      return r;
    const l = r.key ?? i;
    b(this, vr).add(l);
    const c = this.isNestedMenuShow(l);
    if (c && (r.rootChildren = [
      r.rootChildren,
      this.renderNestedMenu(o)
    ], r.component = Ua), this.nestedTrigger === "hover")
      r.rootAttrs = {
        ...r.rootAttrs,
        onMouseEnter: b(this, $n).bind(this, l, !0),
        onMouseLeave: b(this, $n).bind(this, l, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = r;
      r.onClick = (s) => {
        b(this, $n).call(this, l, void 0, s), h == null || h(s);
      };
    }
    const _ = this.renderToggleIcon(c, r);
    return _ && (r.children = [r.children, _]), r.rootClass = [r.rootClass, "has-nested-menu", c ? "show" : ""], r;
  }
  isNestedMenuShow(n) {
    const o = b(this, Xt) ? this.state.nestedShow : this.props.nestedShow;
    return o && typeof o == "object" ? o[n] : !!o;
  }
  toggleNestedMenu(n, o) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggleNestedMenu(n, o);
    if (!b(this, Xt))
      return !1;
    let { nestedShow: r = {} } = this.state;
    if (typeof r == "boolean" && (r === !0 ? r = [...b(this, vr).values()].reduce((l, c) => (l[c] = !0, l), {}) : r = {}), o === void 0)
      o = !r[n];
    else if (!!r[n] == !!o)
      return !1;
    return o ? r[n] = o : delete r[n], this.setState({ nestedShow: { ...r } }), !0;
  }
  showNestedMenu(n) {
    return this.toggleNestedMenu(n, !0);
  }
  hideNestedMenu(n) {
    return this.toggleNestedMenu(n, !1);
  }
  showAllNestedMenu() {
    b(this, Xt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    b(this, Xt) && this.setState({ nestedShow: !1 });
  }
}, vr = new WeakMap(), Xt = new WeakMap(), $n = new WeakMap(), L(hc, "ItemComponents", {
  item: Ua
}), hc);
class Fa extends $t {
}
L(Fa, "NAME", "actionmenunested"), L(Fa, "Component", xu);
var jc, ct, Su, ho, Ba, Cu = {}, Eu = [], Gg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ee(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Au(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function qg(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? jc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return hs(t, l, o, i, null);
}
function hs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Su };
  return i == null && ct.vnode != null && ct.vnode(r), r;
}
function zc(t) {
  return t.children;
}
function po(t, e) {
  this.props = t, this.context = e;
}
function Zo(t, e) {
  if (e == null)
    return t.__ ? Zo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Zo(t) : null;
}
function Tu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Tu(t);
  }
}
function ja(t) {
  (!t.__d && (t.__d = !0) && ho.push(t) && !Rs.__r++ || Ba !== ct.debounceRendering) && ((Ba = ct.debounceRendering) || setTimeout)(Rs);
}
function Rs() {
  for (var t; Rs.__r = ho.length; )
    t = ho.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ho = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ee({}, r)).__v = r.__v + 1, Nu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Zo(r), r.__h), Kg(o, r), r.__e != l && Tu(r)));
    });
}
function Mu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Eu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? hs(null, a, null, null, a) : Array.isArray(a) ? hs(zc, { children: a }, null, null, null) : a.__b > 0 ? hs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Nu(t, a, f = f || Cu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Lu(a, _, t) : _ = Ru(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Zo(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && Pu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Du(p[s], p[++s], p[++s]);
}
function Lu(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Lu(o, e, n) : Ru(n, o, o, i, o.__e, e));
  return e;
}
function Ru(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Xg(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ns(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ns(t, r, e[r], n[r], o);
}
function za(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Gg.test(e) ? n : n + "px";
}
function Ns(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || za(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || za(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Ya : Va, r) : t.removeEventListener(e, r ? Ya : Va, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Va(t) {
  this.l[t.type + !1](ct.event ? ct.event(t) : t);
}
function Ya(t) {
  this.l[t.type + !0](ct.event ? ct.event(t) : t);
}
function Nu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ct.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new po(p, g), s.constructor = y, s.render = Jg), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ee({}, s.__s)), Ee(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ct.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ee(Ee({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === zc && h.key == null ? h.props.children : h, Mu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Zg(n.__e, e, n, o, i, r, l, _);
    (h = ct.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ct.__e(x, e, n);
  }
}
function Kg(t, e) {
  ct.__c && ct.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ct.__e(o, n.__v);
    }
  });
}
function Zg(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && jc.call(t.childNodes), h = (d = n.props || Cu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Xg(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Mu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Zo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Au(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ns(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ns(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Du(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ct.__e(o, n);
  }
}
function Pu(t, e, n) {
  var o, i;
  if (ct.unmount && ct.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Du(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ct.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Pu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Au(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Jg(t, e, n) {
  return this.constructor(t, n);
}
jc = Eu.slice, ct = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Su = 0, po.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), ja(this));
}, po.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ja(this));
}, po.prototype.render = zc, ho = [], Rs.__r = 0;
var Qg = 0;
function eo(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Qg, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ct.vnode && ct.vnode(_), _;
}
let ee = class extends po {
  render() {
    const {
      component: e,
      type: n,
      size: o,
      className: i,
      children: r,
      url: l,
      target: c,
      disabled: _,
      active: h,
      loading: s,
      loadingIcon: d,
      loadingText: f,
      icon: a,
      text: u,
      trailingIcon: v,
      caret: p,
      square: m,
      hint: g,
      ...w
    } = this.props, k = e || (l ? "a" : "button"), C = u == null || typeof u == "string" && !u.length || s && !f, A = C && !a && !v && !r && !s;
    return qg(
      k,
      {
        className: F("btn", n, i, {
          "btn-caret": A,
          disabled: _ || s,
          active: h,
          loading: s,
          square: m === void 0 ? !A && !r && C : m
        }, o ? `size-${o}` : ""),
        title: g,
        [k === "a" ? "href" : "data-url"]: l,
        [k === "a" ? "target" : "data-target"]: c,
        type: k === "button" ? "button" : void 0,
        ...w
      },
      s ? /* @__PURE__ */ eo("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : typeof a == "string" ? /* @__PURE__ */ eo("i", { class: `icon ${a}` }) : a,
      C ? null : /* @__PURE__ */ eo("span", { className: "text", children: s ? f : u }),
      s ? null : r,
      s ? null : typeof v == "string" ? /* @__PURE__ */ eo("i", { class: `icon ${v}` }) : v,
      s ? null : p ? /* @__PURE__ */ eo("span", { className: typeof p == "string" ? `caret-${p}` : "caret" }) : null
    );
  }
};
class Ga extends $t {
}
L(Ga, "NAME", "button"), L(Ga, "Component", ee);
var bc;
bc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var ty = 0;
function ey(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ty, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return bc.vnode && bc.vnode(_), _;
}
var dc;
let Vc = (dc = class extends xu {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((o) => o.icon)), e.className = F(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((o) => this.isNestedItem(o))
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ ey("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, L(dc, "NAME", "menu"), dc);
class qa extends $t {
}
L(qa, "NAME", "menu"), L(qa, "Component", Vc);
let ny = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Ou, at, Hu, mo, Xa, Wu = {}, Iu = [], oy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Uu(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function rc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Hu };
  return i == null && at.vnode != null && at.vnode(r), r;
}
function Yc(t) {
  return t.children;
}
function go(t, e) {
  this.props = t, this.context = e;
}
function Jo(t, e) {
  if (e == null)
    return t.__ ? Jo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Jo(t) : null;
}
function Fu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Fu(t);
  }
}
function Ka(t) {
  (!t.__d && (t.__d = !0) && mo.push(t) && !Ds.__r++ || Xa !== at.debounceRendering) && ((Xa = at.debounceRendering) || setTimeout)(Ds);
}
function Ds() {
  for (var t; Ds.__r = mo.length; )
    t = mo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), mo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ae({}, r)).__v = r.__v + 1, Vu(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Jo(r), r.__h), sy(o, r), r.__e != l && Fu(r)));
    });
}
function Bu(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Iu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? rc(null, a, null, null, a) : Array.isArray(a) ? rc(Yc, { children: a }, null, null, null) : a.__b > 0 ? rc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Vu(t, a, f = f || Wu, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = ju(a, _, t) : _ = zu(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Jo(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && Gu(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Yu(p[s], p[++s], p[++s]);
}
function ju(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? ju(o, e, n) : zu(n, o, o, i, o.__e, e));
  return e;
}
function zu(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function ry(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ps(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ps(t, r, e[r], n[r], o);
}
function Za(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || oy.test(e) ? n : n + "px";
}
function Ps(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Za(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Za(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Qa : Ja, r) : t.removeEventListener(e, r ? Qa : Ja, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Ja(t) {
  this.l[t.type + !1](at.event ? at.event(t) : t);
}
function Qa(t) {
  this.l[t.type + !0](at.event ? at.event(t) : t);
}
function Vu(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = at.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new go(p, g), s.constructor = y, s.render = ly), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ae({}, s.__s)), Ae(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = at.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ae(Ae({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Yc && h.key == null ? h.props.children : h, Bu(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = iy(n.__e, e, n, o, i, r, l, _);
    (h = at.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), at.__e(x, e, n);
  }
}
function sy(t, e) {
  at.__c && at.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      at.__e(o, n.__v);
    }
  });
}
function iy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Ou.call(t.childNodes), h = (d = n.props || Wu).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (ry(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Bu(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Jo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Uu(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ps(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ps(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Yu(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    at.__e(o, n);
  }
}
function Gu(t, e, n) {
  var o, i;
  if (at.unmount && at.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Yu(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        at.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Gu(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Uu(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ly(t, e, n) {
  return this.constructor(t, n);
}
Ou = Iu.slice, at = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Hu = 0, go.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof t == "function" && (t = t(Ae({}, n), this.props)), t && Ae(n, t), t != null && this.__v && (e && this._sb.push(e), Ka(this));
}, go.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ka(this));
}, go.prototype.render = Yc, mo = [], Ds.__r = 0;
var cy = 0;
function ay(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return at.vnode && at.vnode(_), _;
}
var wc, pn;
wc = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, pn = function(t) {
  return t != null && t.constructor === void 0;
};
var _y = 0;
function ie(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_y, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return wc.vnode && wc.vnode(_), _;
}
var $c;
$c = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var fy = 0;
function Pl(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --fy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return $c.vnode && $c.vnode(_), _;
}
function uy({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Pl(ee, { type: n, ...o });
}
var qu, _t, Xu, yo, t_, Ku = {}, Zu = [], hy = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Te(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ju(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function sc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Xu };
  return i == null && _t.vnode != null && _t.vnode(r), r;
}
function dy() {
  return { current: null };
}
function Gc(t) {
  return t.children;
}
function vo(t, e) {
  this.props = t, this.context = e;
}
function Qo(t, e) {
  if (e == null)
    return t.__ ? Qo(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Qo(t) : null;
}
function Qu(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Qu(t);
  }
}
function e_(t) {
  (!t.__d && (t.__d = !0) && yo.push(t) && !Os.__r++ || t_ !== _t.debounceRendering) && ((t_ = _t.debounceRendering) || setTimeout)(Os);
}
function Os() {
  for (var t; Os.__r = yo.length; )
    t = yo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), yo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Te({}, r)).__v = r.__v + 1, oh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? Qo(r), r.__h), my(o, r), r.__e != l && Qu(r)));
    });
}
function th(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Zu, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? sc(null, a, null, null, a) : Array.isArray(a) ? sc(Gc, { children: a }, null, null, null) : a.__b > 0 ? sc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      oh(t, a, f = f || Ku, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = eh(a, _, t) : _ = nh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = Qo(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && sh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      rh(p[s], p[++s], p[++s]);
}
function eh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? eh(o, e, n) : nh(n, o, o, i, o.__e, e));
  return e;
}
function nh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function py(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Hs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Hs(t, r, e[r], n[r], o);
}
function n_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || hy.test(e) ? n : n + "px";
}
function Hs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || n_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || n_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? r_ : o_, r) : t.removeEventListener(e, r ? r_ : o_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function o_(t) {
  this.l[t.type + !1](_t.event ? _t.event(t) : t);
}
function r_(t) {
  this.l[t.type + !0](_t.event ? _t.event(t) : t);
}
function oh(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = _t.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new vo(p, g), s.constructor = y, s.render = yy), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Te({}, s.__s)), Te(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = _t.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Te(Te({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Gc && h.key == null ? h.props.children : h, th(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = gy(n.__e, e, n, o, i, r, l, _);
    (h = _t.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), _t.__e(x, e, n);
  }
}
function my(t, e) {
  _t.__c && _t.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      _t.__e(o, n.__v);
    }
  });
}
function gy(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && qu.call(t.childNodes), h = (d = n.props || Ku).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (py(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, th(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && Qo(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ju(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Hs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Hs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function rh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    _t.__e(o, n);
  }
}
function sh(t, e, n) {
  var o, i;
  if (_t.unmount && _t.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || rh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        _t.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && sh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ju(t.__e), t.__ = t.__e = t.__d = void 0;
}
function yy(t, e, n) {
  return this.constructor(t, n);
}
qu = Zu.slice, _t = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Xu = 0, vo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Te({}, this.state), typeof t == "function" && (t = t(Te({}, n), this.props)), t && Te(n, t), t != null && this.__v && (e && this._sb.push(e), e_(this));
}, vo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), e_(this));
}, vo.prototype.render = Gc, yo = [], Os.__r = 0;
var vy = 0;
function ih(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --vy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return _t.vnode && _t.vnode(_), _;
}
var Ol, et, lh, bo, s_, Ws = {}, ch = [], by = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Me(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ah(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function _h(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ol.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ds(t, l, o, i, null);
}
function ds(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++lh };
  return i == null && et.vnode != null && et.vnode(r), r;
}
function Hl(t) {
  return t.children;
}
function ps(t, e) {
  this.props = t, this.context = e;
}
function tr(t, e) {
  if (e == null)
    return t.__ ? tr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? tr(t) : null;
}
function fh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return fh(t);
  }
}
function i_(t) {
  (!t.__d && (t.__d = !0) && bo.push(t) && !Is.__r++ || s_ !== et.debounceRendering) && ((s_ = et.debounceRendering) || setTimeout)(Is);
}
function Is() {
  for (var t; Is.__r = bo.length; )
    t = bo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), bo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Me({}, r)).__v = r.__v + 1, qc(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? tr(r), r.__h), ph(o, r), r.__e != l && fh(r)));
    });
}
function uh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || ch, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ds(null, a, null, null, a) : Array.isArray(a) ? ds(Hl, { children: a }, null, null, null) : a.__b > 0 ? ds(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      qc(t, a, f = f || Ws, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = hh(a, _, t) : _ = dh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = tr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && gh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      mh(p[s], p[++s], p[++s]);
}
function hh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? hh(o, e, n) : dh(n, o, o, i, o.__e, e));
  return e;
}
function dh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function wy(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Us(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Us(t, r, e[r], n[r], o);
}
function l_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || by.test(e) ? n : n + "px";
}
function Us(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || l_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || l_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? a_ : c_, r) : t.removeEventListener(e, r ? a_ : c_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function c_(t) {
  this.l[t.type + !1](et.event ? et.event(t) : t);
}
function a_(t) {
  this.l[t.type + !0](et.event ? et.event(t) : t);
}
function qc(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = et.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new ps(p, g), s.constructor = y, s.render = ky), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Me({}, s.__s)), Me(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = et.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Me(Me({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Hl && h.key == null ? h.props.children : h, uh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = $y(n.__e, e, n, o, i, r, l, _);
    (h = et.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), et.__e(x, e, n);
  }
}
function ph(t, e) {
  et.__c && et.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      et.__e(o, n.__v);
    }
  });
}
function $y(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Ol.call(t.childNodes), h = (d = n.props || Ws).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (wy(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, uh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && tr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && ah(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Us(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Us(t, "checked", u, d.checked, !1));
  }
  return t;
}
function mh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    et.__e(o, n);
  }
}
function gh(t, e, n) {
  var o, i;
  if (et.unmount && et.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || mh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        et.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && gh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || ah(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ky(t, e, n) {
  return this.constructor(t, n);
}
function xy(t, e, n) {
  var o, i, r;
  et.__ && et.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], qc(e, t = (!o && n || e).__k = _h(Hl, null, [t]), i || Ws, Ws, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Ol.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), ph(r, t);
}
Ol = ch.slice, et = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, lh = 0, ps.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Me({}, this.state), typeof t == "function" && (t = t(Me({}, n), this.props)), t && Me(n, t), t != null && this.__v && (e && this._sb.push(e), i_(this));
}, ps.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), i_(this));
}, ps.prototype.render = Hl, bo = [], Is.__r = 0;
function Sy(t) {
  return t.button === 2;
}
var Cy = 0;
function Ey(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Cy, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return et.vnode && et.vnode(_), _;
}
function Xc(t) {
  return t.split("-")[1];
}
function yh(t) {
  return t === "y" ? "height" : "width";
}
function er(t) {
  return t.split("-")[0];
}
function vh(t) {
  return ["top", "bottom"].includes(er(t)) ? "x" : "y";
}
function __(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = vh(e), _ = yh(c), h = o[_] / 2 - i[_] / 2, s = er(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Xc(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Ay = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = __(h, o, _), f = o, a = {}, u = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = __(h, f, _)), v = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function Ty(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function My(t) {
  return typeof t != "number" ? Ty(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Fs(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Ly(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = My(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = Fs(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Fs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const Ry = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ry[e]);
}
function Ny(t, e, n) {
  n === void 0 && (n = !1);
  const o = Xc(t), i = vh(t), r = yh(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Bs(l)), {
    main: l,
    cross: Bs(l)
  };
}
const Dy = {
  start: "end",
  end: "start"
};
function kc(t) {
  return t.replace(/start|end/g, (e) => Dy[e]);
}
function Py(t) {
  const e = Bs(t);
  return [kc(t), e, kc(e)];
}
function Oy(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Hy(t, e, n, o) {
  const i = Xc(t);
  let r = Oy(er(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(kc)))), r;
}
const bh = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...v
      } = t, p = er(o), m = er(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [Bs(l)] : Py(l));
      !d && a !== "none" && w.push(...Hy(l, u, a, g));
      const k = [l, ...w], C = await Ly(e, v), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = Ny(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var y;
        const R = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Wt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ne(t) {
  return Wt(t).getComputedStyle(t);
}
function je(t) {
  return $h(t) ? (t.nodeName || "").toLowerCase() : "";
}
let es;
function wh() {
  if (es)
    return es;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (es = t.brands.map((e) => e.brand + "/" + e.version).join(" "), es) : navigator.userAgent;
}
function de(t) {
  return t instanceof Wt(t).HTMLElement;
}
function zt(t) {
  return t instanceof Wt(t).Element;
}
function $h(t) {
  return t instanceof Wt(t).Node;
}
function f_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Wt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Wl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = ne(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Wy(t) {
  return ["table", "td", "th"].includes(je(t));
}
function Kc(t) {
  const e = /firefox/i.test(wh()), n = ne(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function kh() {
  return !/^((?!chrome|android).)*safari/i.test(wh());
}
function Zc(t) {
  return ["html", "body", "#document"].includes(je(t));
}
const u_ = Math.min, wo = Math.max, js = Math.round;
function xh(t) {
  const e = ne(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = js(n) !== i || js(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Sh(t) {
  return zt(t) ? t : t.contextElement;
}
const Ch = {
  x: 1,
  y: 1
};
function mn(t) {
  const e = Sh(t);
  if (!de(e))
    return Ch;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = xh(e);
  let l = (r ? js(n.width) : n.width) / o, c = (r ? js(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function _n(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Sh(t);
  let _ = Ch;
  e && (o ? zt(o) && (_ = mn(o)) : _ = mn(t));
  const h = c ? Wt(c) : window, s = !kh() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const v = Wt(c), p = o && zt(o) ? Wt(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = mn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Wt(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Ge(t) {
  return (($h(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Il(t) {
  return zt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Eh(t) {
  return _n(Ge(t)).left + Il(t).scrollLeft;
}
function Iy(t, e, n) {
  const o = de(e), i = Ge(e), r = _n(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((je(e) !== "body" || Wl(i)) && (l = Il(e)), de(e)) {
      const _ = _n(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Eh(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function nr(t) {
  if (je(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (f_(t) ? t.host : null) || // Fallback
    Ge(t)
  );
  return f_(e) ? e.host : e;
}
function h_(t) {
  return !de(t) || ne(t).position === "fixed" ? null : t.offsetParent;
}
function Uy(t) {
  let e = nr(t);
  for (; de(e) && !Zc(e); ) {
    if (Kc(e))
      return e;
    e = nr(e);
  }
  return null;
}
function d_(t) {
  const e = Wt(t);
  let n = h_(t);
  for (; n && Wy(n) && ne(n).position === "static"; )
    n = h_(n);
  return n && (je(n) === "html" || je(n) === "body" && ne(n).position === "static" && !Kc(n)) ? e : n || Uy(t) || e;
}
function Fy(t) {
  return xh(t);
}
function By(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = de(n), r = Ge(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((je(n) !== "body" || Wl(r)) && (l = Il(n)), de(n))) {
    const h = _n(n);
    c = mn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function jy(t, e) {
  const n = Wt(t), o = Ge(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = kh();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function zy(t) {
  var e;
  const n = Ge(t), o = Il(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = wo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = wo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Eh(t);
  const _ = -o.scrollTop;
  return ne(i || n).direction === "rtl" && (c += wo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Ah(t) {
  const e = nr(t);
  return Zc(e) ? t.ownerDocument.body : de(e) && Wl(e) ? e : Ah(e);
}
function $o(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Ah(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Wt(o);
  return i ? e.concat(r, r.visualViewport || [], Wl(o) ? o : []) : e.concat(o, $o(o));
}
function Vy(t, e) {
  const n = _n(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = de(t) ? mn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function p_(t, e, n) {
  return e === "viewport" ? Fs(jy(t, n)) : zt(e) ? Vy(e, n) : Fs(zy(Ge(t)));
}
function Yy(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = $o(t).filter((c) => zt(c) && je(c) !== "body"), i = null;
  const r = ne(t).position === "fixed";
  let l = r ? nr(t) : t;
  for (; zt(l) && !Zc(l); ) {
    const c = ne(l), _ = Kc(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = nr(l);
  }
  return e.set(t, o), o;
}
function Gy(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Yy(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = p_(e, s, i);
    return h.top = wo(d.top, h.top), h.right = u_(d.right, h.right), h.bottom = u_(d.bottom, h.bottom), h.left = wo(d.left, h.left), h;
  }, p_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const qy = {
  getClippingRect: Gy,
  convertOffsetParentRelativeRectToViewportRelativeRect: By,
  isElement: zt,
  getDimensions: Fy,
  getOffsetParent: d_,
  getDocumentElement: Ge,
  getScale: mn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || d_, r = this.getDimensions;
    return {
      reference: Iy(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => ne(t).direction === "rtl"
};
function Xy(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...zt(t) ? $o(t) : t.contextElement ? $o(t.contextElement) : [], ...$o(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), zt(t) && !c && s.observe(t), !zt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? _n(t) : null;
  c && a();
  function a() {
    const u = _n(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Th = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: qy,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Ay(t, e, {
    ...i,
    platform: r
  });
};
let Ky = class extends Vc {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  componentWillUnmount() {
    super.componentWillUnmount();
  }
  _getPopperOptions() {
    return {
      middleware: [bh()],
      placement: "right-start"
    };
  }
  _getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  _createPopper() {
    const e = this._getPopperOptions();
    this.ref.current && Th(this._getPopperElement(), this.ref.current, e).then(({ x: n, y: o }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${o}px`
      });
    });
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && this._createPopper();
  }
  renderToggleIcon() {
    return /* @__PURE__ */ Ey("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var ve, kn, br, wr, Ai, Mh, Ti, Lh;
class Mt extends qt {
  constructor() {
    super(...arguments);
    T(this, Ai);
    T(this, Ti);
    T(this, ve, void 0);
    T(this, kn, void 0);
    T(this, br, void 0);
    L(this, "arrowEl");
    T(this, wr, void 0);
  }
  get isShown() {
    var n;
    return (n = b(this, ve)) == null ? void 0 : n.classList.contains(this.constructor.CLASS_SHOW);
  }
  get menu() {
    return b(this, ve) || this._ensureMenu();
  }
  get trigger() {
    return b(this, br) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "contextmenu");
  }
  show(n) {
    return H(this, br, n), this.emit("show", { menu: this, trigger: this.trigger }).defaultPrevented || this.isDynamic && !this._renderMenu() ? !1 : (this.menu.classList.add(this.constructor.CLASS_SHOW), this._createPopper(), this.emit("shown", this), !0);
  }
  hide() {
    var o, i;
    return (o = b(this, wr)) == null || o.call(this), this.emit("hide", this).defaultPrevented ? !1 : ((i = b(this, ve)) == null || i.classList.remove(this.constructor.CLASS_SHOW), this.emit("hidden", this), !0);
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, ve)) == null || n.remove();
  }
  _ensureMenu() {
    var r;
    const { element: n } = this, o = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = document.createElement("div"), i.classList.add(o), document.body.appendChild(i);
    else if (n) {
      const l = n.getAttribute("href") ?? n.dataset.target;
      if ((l == null ? void 0 : l[0]) === "#" && (i = document.querySelector(l)), !i) {
        const c = n.nextElementSibling;
        c != null && c.classList.contains(o) ? i = c : i = (r = n.parentNode) == null ? void 0 : r.querySelector(`.${o}`);
      }
    }
    if (!i)
      throw new Error("ContextMenu: Cannot find menu element");
    return i.style.width = "max-content", i.style.position = this.options.strategy, i.style.top = "0", i.style.left = "0", H(this, ve, i), i;
  }
  _getPopperOptions() {
    var r;
    const { placement: n, strategy: o } = this.options, i = {
      middleware: [],
      placement: n,
      strategy: o
    };
    return this.options.flip && ((r = i.middleware) == null || r.push(bh())), i;
  }
  _createPopper() {
    const n = this._getPopperOptions(), o = this._getPopperElement();
    H(this, wr, Xy(o, this.menu, () => {
      Th(o, this.menu, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
        Object.assign(this.menu.style, {
          left: `${i}px`,
          top: `${r}px`
        });
        const _ = c.split("-")[0], h = W(this, Ai, Mh).call(this, _);
        if (l.arrow && this.arrowEl) {
          const { x: s, y: d } = l.arrow;
          Object.assign(this.arrowEl.style, {
            left: s != null ? `${s}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...W(this, Ti, Lh).call(this, _)
          });
        }
      });
    }));
  }
  _getMenuOptions() {
    const { menu: n, items: o } = this.options;
    let i = o || (n == null ? void 0 : n.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...n,
        items: i
      };
  }
  _renderMenu() {
    const n = this._getMenuOptions();
    return !n || this.emit("updateMenu", { menu: n, trigger: this.trigger, contextmenu: this }).defaultPrevented ? !1 : (xy(_h(Ky, n), this.menu), !0);
  }
  _getPopperElement() {
    return b(this, kn) || H(this, kn, {
      getBoundingClientRect: () => {
        const { trigger: n } = this;
        if (n instanceof MouseEvent) {
          const { clientX: o, clientY: i } = n;
          return {
            width: 0,
            height: 0,
            top: i,
            right: o,
            bottom: i,
            left: o
          };
        }
        return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
      },
      contextElement: this.element
    }), b(this, kn);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-menu" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)) || o && Sy(o))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
}
ve = new WeakMap(), kn = new WeakMap(), br = new WeakMap(), wr = new WeakMap(), Ai = new WeakSet(), Mh = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Ti = new WeakSet(), Lh = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, L(Mt, "NAME", "contextmenu"), L(Mt, "EVENTS", !0), L(Mt, "DEFAULT", {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
}), L(Mt, "MENU_CLASS", "contextmenu"), L(Mt, "CLASS_SHOW", "show"), L(Mt, "MENU_SELECTOR", '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)');
document.addEventListener("contextmenu", (t) => {
  const e = t.target;
  if (e.closest(`.${Mt.MENU_CLASS}`))
    return;
  const n = e.closest(Mt.MENU_SELECTOR);
  n && (Mt.ensure(n).show(t), t.preventDefault());
});
document.addEventListener("click", Mt.clear.bind(Mt));
function Rh(t) {
  return t.split("-")[1];
}
function Zy(t) {
  return t === "y" ? "height" : "width";
}
function Nh(t) {
  return t.split("-")[0];
}
function Dh(t) {
  return ["top", "bottom"].includes(Nh(t)) ? "x" : "y";
}
function Jy(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Qy(t) {
  return typeof t != "number" ? Jy(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
const tv = Math.min, ev = Math.max;
function nv(t, e, n) {
  return ev(t, tv(e, n));
}
const ov = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Qy(o), s = {
      x: i,
      y: r
    }, d = Dh(l), f = Zy(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[v], E = w / 2 - a[f] / 2 + k, y = nv(C, E, A), R = Rh(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[v]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
});
async function rv(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Nh(n), c = Rh(n), _ = Dh(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const sv = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await rv(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var xn, Sn, Cn, Mi, Ph;
const ba = class extends Mt {
  constructor() {
    super(...arguments);
    T(this, Mi);
    T(this, xn, !1);
    T(this, Sn, 0);
    L(this, "hideLater", () => {
      b(this, Cn).call(this), H(this, Sn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Cn, () => {
      clearTimeout(b(this, Sn)), H(this, Sn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(n, o) {
    (o == null ? void 0 : o.clearOthers) !== !1 && ba.clear({ event: o == null ? void 0 : o.event, exclude: [this.element] });
    const i = super.show(n);
    return i && (!b(this, xn) && this.isHover && W(this, Mi, Ph).call(this), this.element.classList.add(this.elementShowClass)), i;
  }
  hide() {
    const n = super.hide();
    return n && this.element.classList.remove(this.elementShowClass), n;
  }
  toggle(n, o) {
    return this.isShown ? this.hide() : this.show(n, { event: n, ...o });
  }
  destroy() {
    b(this, xn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.menu.removeEventListener("mouseenter", b(this, Cn)), this.menu.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  _getArrowSize() {
    const { arrow: n } = this.options;
    return n ? typeof n == "number" ? n : 8 : 0;
  }
  _getPopperOptions() {
    var i, r;
    const n = super._getPopperOptions(), o = this._getArrowSize();
    return o && this.arrowEl && ((i = n.middleware) == null || i.push(sv(o)), (r = n.middleware) == null || r.push(ov({ element: this.arrowEl }))), n;
  }
  _ensureMenu() {
    const n = super._ensureMenu();
    if (this.options.arrow) {
      const o = this._getArrowSize();
      this.arrowEl = document.createElement("div"), this.arrowEl.style.position = "absolute", this.arrowEl.style.width = `${o}px`, this.arrowEl.style.height = `${o}px`, this.arrowEl.style.transform = "rotate(45deg)", n.append(this.arrowEl);
    }
    return n;
  }
  _getMenuOptions() {
    const n = super._getMenuOptions();
    if (n && this.options.arrow) {
      const { afterRender: o } = n;
      n.afterRender = (...i) => {
        var r;
        this.arrowEl && ((r = this.menu.querySelector(".menu")) == null || r.appendChild(this.arrowEl)), o == null || o(...i);
      };
    }
    return n;
  }
};
let Ct = ba;
xn = new WeakMap(), Sn = new WeakMap(), Cn = new WeakMap(), Mi = new WeakSet(), Ph = function() {
  const { menu: n } = this;
  n.addEventListener("mouseenter", b(this, Cn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, xn, !0);
}, L(Ct, "NAME", "dropdown"), L(Ct, "MENU_CLASS", "dropdown-menu"), L(Ct, "MENU_SELECTOR", '[data-toggle="dropdown"]:not(.disabled):not(:disabled)'), L(Ct, "DEFAULT", {
  ...Mt.DEFAULT,
  strategy: "absolute",
  trigger: "click"
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ct.MENU_SELECTOR);
  if (n) {
    const o = Ct.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ct.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Ct.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ct.ensure(n);
  o.isHover && o.show();
});
const iv = (t) => {
  const e = document.getElementsByClassName("with-dropdown-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Ct.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Ct.clear({ event: t });
};
window.addEventListener("scroll", iv, !0);
var $r, En;
class lv extends vo {
  constructor(n) {
    var o;
    super(n);
    T(this, $r, void 0);
    T(this, En, dy());
    this.state = { placement: ((o = n.dropdown) == null ? void 0 : o.placement) || "", show: !1 };
  }
  get ref() {
    return b(this, En);
  }
  get triggerElement() {
    return b(this, En).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...o } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var l;
        const r = ((l = i.placement) == null ? void 0 : l.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), H(this, $r, Ct.ensure(this.triggerElement, {
      ...o,
      modifiers: n,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var n;
    (n = b(this, $r)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: o, dropdown: i, ...r } = this.props;
    return {
      className: F("dropdown", n),
      children: typeof o == "function" ? o(this.state) : o,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: b(this, En)
    };
  }
  render() {
    const { children: n, ...o } = this.beforeRender();
    return /* @__PURE__ */ ih("div", { ...o, children: n });
  }
}
$r = new WeakMap(), En = new WeakMap();
class cv extends lv {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: e, show: n } = this.state, o = this.beforeRender();
    let { caret: i = !0 } = o;
    if (i !== !1 && (n || i === !0)) {
      const l = n ? e : (r = this.props.dropdown) == null ? void 0 : r.placement;
      i = (l === "top" ? "up" : l === "bottom" ? "down" : l) || (typeof i == "string" ? i : "") || "down";
    }
    return o.caret = i, /* @__PURE__ */ ih(ee, { ...o });
  }
}
function Oh({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Pl(cv, { type: n, ...o });
}
var Jc, ft, Hh, Wh, ko, m_, Ih = {}, Uh = [], av = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Le(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Fh(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function _v(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Jc.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return ms(t, l, o, i, null);
}
function ms(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Hh };
  return i == null && ft.vnode != null && ft.vnode(r), r;
}
function Qc(t) {
  return t.children;
}
function xo(t, e) {
  this.props = t, this.context = e;
}
function or(t, e) {
  if (e == null)
    return t.__ ? or(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? or(t) : null;
}
function Bh(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Bh(t);
  }
}
function g_(t) {
  (!t.__d && (t.__d = !0) && ko.push(t) && !zs.__r++ || m_ !== ft.debounceRendering) && ((m_ = ft.debounceRendering) || setTimeout)(zs);
}
function zs() {
  for (var t; zs.__r = ko.length; )
    t = ko.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), ko = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Le({}, r)).__v = r.__v + 1, Yh(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? or(r), r.__h), uv(o, r), r.__e != l && Bh(r)));
    });
}
function jh(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Uh, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ms(null, a, null, null, a) : Array.isArray(a) ? ms(Qc, { children: a }, null, null, null) : a.__b > 0 ? ms(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Yh(t, a, f = f || Ih, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = zh(a, _, t) : _ = Vh(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = or(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && qh(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Gh(p[s], p[++s], p[++s]);
}
function zh(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? zh(o, e, n) : Vh(n, o, o, i, o.__e, e));
  return e;
}
function Vh(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function fv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Vs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Vs(t, r, e[r], n[r], o);
}
function y_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || av.test(e) ? n : n + "px";
}
function Vs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || y_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || y_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? b_ : v_, r) : t.removeEventListener(e, r ? b_ : v_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function v_(t) {
  this.l[t.type + !1](ft.event ? ft.event(t) : t);
}
function b_(t) {
  this.l[t.type + !0](ft.event ? ft.event(t) : t);
}
function Yh(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ft.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new xo(p, g), s.constructor = y, s.render = dv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Le({}, s.__s)), Le(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ft.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Le(Le({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Qc && h.key == null ? h.props.children : h, jh(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = hv(n.__e, e, n, o, i, r, l, _);
    (h = ft.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ft.__e(x, e, n);
  }
}
function uv(t, e) {
  ft.__c && ft.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ft.__e(o, n.__v);
    }
  });
}
function hv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Jc.call(t.childNodes), h = (d = n.props || Ih).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (fv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, jh(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && or(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Fh(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Vs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Vs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Gh(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ft.__e(o, n);
  }
}
function qh(t, e, n) {
  var o, i;
  if (ft.unmount && ft.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Gh(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ft.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && qh(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Fh(t.__e), t.__ = t.__e = t.__d = void 0;
}
function dv(t, e, n) {
  return this.constructor(t, n);
}
Jc = Uh.slice, ft = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Hh = 0, Wh = function(t) {
  return t != null && t.constructor === void 0;
}, xo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Le({}, this.state), typeof t == "function" && (t = t(Le({}, n), this.props)), t && Le(n, t), t != null && this.__v && (e && this._sb.push(e), g_(this));
}, xo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), g_(this));
}, xo.prototype.render = Qc, ko = [], zs.__r = 0;
var pv = 0;
function w_(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --pv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ft.vnode && ft.vnode(_), _;
}
let Xh = class extends xo {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  handleItemClick(e, n, o, i) {
    o && o.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: e, index: n, event: i });
  }
  beforeRender() {
    var o;
    const e = { ...this.props }, n = (o = e.beforeRender) == null ? void 0 : o.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { key: o = n, ...i } = e;
    return /* @__PURE__ */ w_(ee, { ...i }, o);
  }
  renderItem(e, n, o) {
    const { itemRender: i, defaultBtnProps: r, onClickItem: l } = e, c = { key: o, ...n };
    if (r && Object.assign(c, r), l && (c.onClick = this.handleItemClick.bind(this, c, o, n.onClick)), i) {
      const _ = i.call(this, c, _v);
      if (Wh(_))
        return _;
      typeof _ == "object" && Object.assign(c, _);
    }
    return this.onRenderItem(c, o);
  }
  render() {
    const e = this.beforeRender(), {
      className: n,
      items: o,
      size: i,
      type: r,
      defaultBtnProps: l,
      children: c,
      itemRender: _,
      onClickItem: h,
      beforeRender: s,
      afterRender: d,
      beforeDestroy: f,
      ...a
    } = e;
    return /* @__PURE__ */ w_(
      "div",
      {
        className: F("btn-group", i ? `size-${i}` : "", n),
        ...a,
        children: [
          o && o.map(this.renderItem.bind(this, e)),
          c
        ]
      }
    );
  }
};
function mv({
  key: t,
  type: e,
  btnType: n,
  ...o
}) {
  return /* @__PURE__ */ Pl(Xh, { type: n, ...o });
}
var dn;
let Xn = (dn = class extends qn {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: o, ...i } = super.beforeRender();
    return i.className = F(i.className, o ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, o) {
    const i = this.isBtnItem(o.type) ? { btnType: "ghost", ...this.props.btnProps } : {}, r = {
      ...n,
      ...i,
      ...o,
      className: F(`${this.name}-${o.type}`, n.className, i.className, o.className),
      style: Object.assign({}, n.style, i.style, o.style)
    };
    return /* @__PURE__ */ Pl(e, { ...r });
  }
}, L(dn, "ItemComponents", {
  item: uy,
  dropdown: Oh,
  "btn-group": mv
}), L(dn, "ROOT_TAG", "nav"), L(dn, "NAME", "toolbar"), L(dn, "defaultProps", {
  btnProps: {
    btnType: "ghost"
  }
}), dn);
function gv({
  className: t,
  style: e,
  actions: n,
  heading: o,
  content: i,
  contentClass: r,
  children: l,
  close: c,
  onClose: _,
  icon: h,
  ...s
}) {
  let d;
  c === !0 ? d = /* @__PURE__ */ ie(ee, { className: "alert-close btn ghost", square: !0, onClick: _, children: /* @__PURE__ */ ie("span", { class: "close" }) }) : pn(c) ? d = c : typeof c == "object" && (d = /* @__PURE__ */ ie(ee, { ...c, onClick: _ }));
  const f = pn(n) ? n : n ? /* @__PURE__ */ ie(Xn, { ...n }) : null;
  return /* @__PURE__ */ ie("div", { className: F("alert", t), style: e, ...s, children: [
    pn(h) ? h : typeof h == "string" ? /* @__PURE__ */ ie("i", { className: `icon ${h}` }) : null,
    pn(i) ? i : /* @__PURE__ */ ie("div", { className: F("alert-content", r), children: [
      pn(o) ? o : o && /* @__PURE__ */ ie("div", { className: "alert-heading", children: o }),
      /* @__PURE__ */ ie("div", { className: "alert-text", children: i }),
      o ? f : null
    ] }),
    o ? null : f,
    d,
    l
  ] });
}
function yv(t) {
  if (t === "center")
    return "fade-from-center";
  if (t) {
    if (t.includes("top"))
      return "fade-from-top";
    if (t.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let vv = class extends go {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  render() {
    const {
      afterRender: e,
      beforeDestroy: n,
      margin: o,
      type: i,
      placement: r,
      animation: l,
      show: c,
      className: _,
      time: h,
      ...s
    } = this.props;
    return /* @__PURE__ */ ay(
      gv,
      {
        className: F("messager", _, i, l === !0 ? yv(r) : l, c ? "in" : ""),
        ...s
      }
    );
  }
};
var An, ys;
class gs extends $t {
  constructor() {
    super(...arguments);
    T(this, An);
    L(this, "_show", !1);
    L(this, "_showTimer", 0);
    L(this, "_afterRender", ({ firstRender: n }) => {
      n && this.show();
      const { margin: o } = this.options;
      o && (this.element.style.margin = `${o}px`);
    });
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (n) => {
      n.target.closest('.alert-close,[data-dismiss="messager"]') && (n.preventDefault(), n.stopPropagation(), this.hide());
    });
  }
  setOptions(n) {
    return n = super.setOptions(n), {
      ...n,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this._show || (this.emit("show"), this.render(), this._show = !0, W(this, An, ys).call(this, () => {
      this.emit("shown");
      const { time: n } = this.options;
      n && W(this, An, ys).call(this, () => this.hide(), n);
    }));
  }
  hide() {
    this._show && (this._show = !1, this.emit("hide"), this.render(), W(this, An, ys).call(this, () => {
      this.emit("hidden");
    }));
  }
}
An = new WeakSet(), ys = function(n, o = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, o);
}, L(gs, "NAME", "MessagerItem"), L(gs, "EVENTS", !0), L(gs, "Component", vv);
var en, Tn, ue, Li, Kh, Ri, Zh;
const wa = class extends qt {
  constructor() {
    super(...arguments);
    T(this, Li);
    T(this, Ri);
    T(this, en, void 0);
    T(this, Tn, ny(6));
    T(this, ue, void 0);
  }
  get id() {
    return b(this, Tn);
  }
  get isShown() {
    var n;
    return !!((n = b(this, ue)) != null && n.isShown);
  }
  show(n) {
    this.setOptions(n), W(this, Li, Kh).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, ue)) == null || n.hide();
  }
  static show(n) {
    typeof n == "string" && (n = { content: n });
    const { container: o, ...i } = n, r = new wa(o || "body", i);
    return r.show(), r;
  }
};
let ns = wa;
en = new WeakMap(), Tn = new WeakMap(), ue = new WeakMap(), Li = new WeakSet(), Kh = function() {
  if (b(this, ue))
    b(this, ue).setOptions(this.options);
  else {
    const n = W(this, Ri, Zh).call(this), o = new gs(n, this.options);
    o.on("hidden", () => {
      o.destroy(), n.remove(), H(this, en, void 0);
    }), H(this, ue, o);
  }
  return b(this, ue);
}, Ri = new WeakSet(), Zh = function() {
  if (b(this, en))
    return b(this, en);
  const { placement: n = "top" } = this.options;
  let o = this.element.querySelector(`.messagers-${n}`);
  o || (o = document.createElement("div"), o.className = `messagers messagers-${n}`, this.element.appendChild(o));
  let i = o.querySelector(`#messager-${b(this, Tn)}`);
  return i || (i = document.createElement("div"), i.className = "messager-holder", i.id = `messager-${b(this, Tn)}`, o.appendChild(i), H(this, en, i)), i;
}, L(ns, "NAME", "messager"), L(ns, "DEFAULT", {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
});
var Jh, ut, Qh, So, $_, td = {}, ed = [], bv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Re(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function nd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ic(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Qh };
  return i == null && ut.vnode != null && ut.vnode(r), r;
}
function ta(t) {
  return t.children;
}
function Co(t, e) {
  this.props = t, this.context = e;
}
function rr(t, e) {
  if (e == null)
    return t.__ ? rr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? rr(t) : null;
}
function od(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return od(t);
  }
}
function k_(t) {
  (!t.__d && (t.__d = !0) && So.push(t) && !Ys.__r++ || $_ !== ut.debounceRendering) && (($_ = ut.debounceRendering) || setTimeout)(Ys);
}
function Ys() {
  for (var t; Ys.__r = So.length; )
    t = So.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), So = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Re({}, r)).__v = r.__v + 1, ld(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? rr(r), r.__h), $v(o, r), r.__e != l && od(r)));
    });
}
function rd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || ed, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ic(null, a, null, null, a) : Array.isArray(a) ? ic(ta, { children: a }, null, null, null) : a.__b > 0 ? ic(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ld(t, a, f = f || td, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = sd(a, _, t) : _ = id(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = rr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && ad(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      cd(p[s], p[++s], p[++s]);
}
function sd(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? sd(o, e, n) : id(n, o, o, i, o.__e, e));
  return e;
}
function id(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function wv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Gs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Gs(t, r, e[r], n[r], o);
}
function x_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || bv.test(e) ? n : n + "px";
}
function Gs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || x_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || x_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? C_ : S_, r) : t.removeEventListener(e, r ? C_ : S_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function S_(t) {
  this.l[t.type + !1](ut.event ? ut.event(t) : t);
}
function C_(t) {
  this.l[t.type + !0](ut.event ? ut.event(t) : t);
}
function ld(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ut.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Co(p, g), s.constructor = y, s.render = xv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Re({}, s.__s)), Re(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ut.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Re(Re({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ta && h.key == null ? h.props.children : h, rd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = kv(n.__e, e, n, o, i, r, l, _);
    (h = ut.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ut.__e(x, e, n);
  }
}
function $v(t, e) {
  ut.__c && ut.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ut.__e(o, n.__v);
    }
  });
}
function kv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Jh.call(t.childNodes), h = (d = n.props || td).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (wv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, rd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && rr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && nd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Gs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Gs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function cd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ut.__e(o, n);
  }
}
function ad(t, e, n) {
  var o, i;
  if (ut.unmount && ut.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || cd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ut.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ad(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || nd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function xv(t, e, n) {
  return this.constructor(t, n);
}
Jh = ed.slice, ut = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Qh = 0, Co.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Re({}, this.state), typeof t == "function" && (t = t(Re({}, n), this.props)), t && Re(n, t), t != null && this.__v && (e && this._sb.push(e), k_(this));
}, Co.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), k_(this));
}, Co.prototype.render = ta, So = [], Ys.__r = 0;
var Sv = 0;
function os(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Sv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ut.vnode && ut.vnode(_), _;
}
var cs;
let Cv = (cs = class extends Co {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: o, circleBgColor: i, circleColor: r } = this.props, l = (n - o) / 2, c = n / 2;
    return /* @__PURE__ */ os("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ os("circle", { cx: c, cy: c, r: l, stroke: i, "stroke-width": o }),
      /* @__PURE__ */ os("circle", { cx: c, cy: c, r: l, stroke: r, "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - e) / 100, "stroke-width": o }),
      /* @__PURE__ */ os("text", { x: c, y: c + o / 4, "dominant-baseline": "middle", style: { fontSize: `${l}px` }, children: Math.round(e) })
    ] });
  }
}, L(cs, "NAME", "zui.progress-circle"), L(cs, "defaultProps", {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
}), cs);
class E_ extends $t {
}
L(E_, "NAME", "table-sorter"), L(E_, "Component", Cv);
function Ev(t) {
  const e = typeof t == "string" ? document.querySelector(t) : t;
  if (!e)
    return !1;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)
    return e.select(), !0;
  if (window.getSelection) {
    const n = window.getSelection();
    if (n) {
      const o = document.createRange();
      return o.selectNodeContents(e), n.removeAllRanges(), n.addRange(o), !0;
    }
  }
  return !1;
}
function Av(t) {
  document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", t);
}
function Tv(t, e) {
  const n = typeof t == "string" ? document.querySelector(t) : t;
  if (!n)
    return !1;
  const o = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth;
  if (e != null && e.fullyCheck)
    return o.left >= 0 && o.top >= 0 && o.left + o.width <= r && o.top + o.height <= i;
  const l = o.top <= i && o.top + o.height >= 0, c = o.left <= r && o.left + o.width >= 0;
  return l && c;
}
const M$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classes: F,
  domReady: Av,
  getClassList: Dl,
  isElementVisible: Tv,
  selectText: Ev
}, Symbol.toStringTag, { value: "Module" }));
let Mv = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var kr, be, Kt, Mn, Ln, vs;
const $a = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    T(this, Ln);
    T(this, kr, void 0);
    T(this, be, void 0);
    T(this, Kt, void 0);
    T(this, Mn, void 0);
    H(this, kr, n), H(this, be, `ZUI_STORE:${e ?? Mv()}`), H(this, Kt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return b(this, kr);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (b(this, Mn) || H(this, Mn, new $a(b(this, be), "session")), b(this, Mn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const o = b(this, Kt).getItem(W(this, Ln, vs).call(this, e));
    return typeof o == "string" ? JSON.parse(o) : o ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, n) {
    if (n == null)
      return this.remove(e);
    b(this, Kt).setItem(W(this, Ln, vs).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    b(this, Kt).removeItem(W(this, Ln, vs).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < b(this, Kt).length; n++) {
      const o = b(this, Kt).key(n);
      if (o != null && o.startsWith(b(this, be))) {
        const i = b(this, Kt).getItem(o);
        typeof i == "string" && e(o.substring(b(this, be).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((n, o) => {
      e[n] = o;
    }), e;
  }
};
let qs = $a;
kr = new WeakMap(), be = new WeakMap(), Kt = new WeakMap(), Mn = new WeakMap(), Ln = new WeakSet(), vs = function(e) {
  return `${b(this, be)}:${e}`;
};
const Lv = new qs("DEFAULT");
function Rv(t, e = "local") {
  return new qs(t, e);
}
Object.assign(Lv, { create: Rv });
var _d, ht, fd, Eo, A_, ud = {}, hd = [], Nv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function dd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function lc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++fd };
  return i == null && ht.vnode != null && ht.vnode(r), r;
}
function ea(t) {
  return t.children;
}
function Ao(t, e) {
  this.props = t, this.context = e;
}
function sr(t, e) {
  if (e == null)
    return t.__ ? sr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? sr(t) : null;
}
function pd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return pd(t);
  }
}
function T_(t) {
  (!t.__d && (t.__d = !0) && Eo.push(t) && !Xs.__r++ || A_ !== ht.debounceRendering) && ((A_ = ht.debounceRendering) || setTimeout)(Xs);
}
function Xs() {
  for (var t; Xs.__r = Eo.length; )
    t = Eo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Eo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ne({}, r)).__v = r.__v + 1, vd(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? sr(r), r.__h), Pv(o, r), r.__e != l && pd(r)));
    });
}
function md(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || hd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? lc(null, a, null, null, a) : Array.isArray(a) ? lc(ea, { children: a }, null, null, null) : a.__b > 0 ? lc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      vd(t, a, f = f || ud, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = gd(a, _, t) : _ = yd(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = sr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && wd(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      bd(p[s], p[++s], p[++s]);
}
function gd(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? gd(o, e, n) : yd(n, o, o, i, o.__e, e));
  return e;
}
function yd(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Dv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ks(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ks(t, r, e[r], n[r], o);
}
function M_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Nv.test(e) ? n : n + "px";
}
function Ks(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || M_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || M_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? R_ : L_, r) : t.removeEventListener(e, r ? R_ : L_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function L_(t) {
  this.l[t.type + !1](ht.event ? ht.event(t) : t);
}
function R_(t) {
  this.l[t.type + !0](ht.event ? ht.event(t) : t);
}
function vd(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ht.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Ao(p, g), s.constructor = y, s.render = Hv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ne({}, s.__s)), Ne(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ht.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ne(Ne({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ea && h.key == null ? h.props.children : h, md(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Ov(n.__e, e, n, o, i, r, l, _);
    (h = ht.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ht.__e(x, e, n);
  }
}
function Pv(t, e) {
  ht.__c && ht.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ht.__e(o, n.__v);
    }
  });
}
function Ov(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && _d.call(t.childNodes), h = (d = n.props || ud).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Dv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, md(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && sr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && dd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Ks(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Ks(t, "checked", u, d.checked, !1));
  }
  return t;
}
function bd(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ht.__e(o, n);
  }
}
function wd(t, e, n) {
  var o, i;
  if (ht.unmount && ht.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || bd(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ht.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && wd(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || dd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Hv(t, e, n) {
  return this.constructor(t, n);
}
_d = hd.slice, ht = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, fd = 0, Ao.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof t == "function" && (t = t(Ne({}, n), this.props)), t && Ne(n, t), t != null && this.__v && (e && this._sb.push(e), T_(this));
}, Ao.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), T_(this));
}, Ao.prototype.render = ea, Eo = [], Xs.__r = 0;
var Wv = 0;
function cc(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Wv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ht.vnode && ht.vnode(_), _;
}
function Iv(t) {
  if (t.indexOf("#") === 0 && (t = t.slice(1)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t.length !== 6)
    throw new Error(`Invalid HEX color "${t}".`);
  return [
    parseInt(t.slice(0, 2), 16),
    // r
    parseInt(t.slice(2, 4), 16),
    // g
    parseInt(t.slice(4, 6), 16)
    // b
  ];
}
function Uv(t) {
  const [e, n, o] = typeof t == "string" ? Iv(t) : t;
  return e * 0.299 + n * 0.587 + o * 0.114 > 186;
}
function N_(t, e) {
  return Uv(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function D_(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function Fv(t, e, n) {
  t = t % 360 / 360, e = D_(e), n = D_(n);
  const o = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - o, r = (l) => (l = l < 0 ? l + 1 : l > 1 ? l - 1 : l, l * 6 < 1 ? i + (o - i) * l * 6 : l * 2 < 1 ? o : l * 3 < 2 ? i + (o - i) * (2 / 3 - l) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function Bv(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function jv(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t = t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t = t[0].toUpperCase() : t = t.length <= e ? t : t.substring(0, e), t;
}
let zv = class extends Ao {
  render() {
    const {
      className: e,
      style: n,
      size: o = "",
      circle: i,
      rounded: r,
      background: l,
      foreColor: c,
      text: _,
      code: h,
      maxTextLength: s = 2,
      src: d,
      hueDistance: f = 43,
      saturation: a = 0.4,
      lightness: u = 0.6,
      children: v,
      ...p
    } = this.props, m = ["avatar", e], g = { ...n, background: l, color: c };
    let w = 32;
    o && (typeof o == "number" ? (g.width = `${o}px`, g.height = `${o}px`, g.fontSize = `${Math.max(12, Math.round(o / 2))}px`, w = o) : (m.push(`size-${o}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[o])), i ? m.push("circle") : r && (typeof r == "number" ? g.borderRadius = `${r}px` : m.push(`rounded-${r}`));
    let k;
    if (d)
      m.push("has-img"), k = /* @__PURE__ */ cc("img", { className: "avatar-img", src: d, alt: _ });
    else if (_ != null && _.length) {
      const C = jv(_, s);
      if (m.push("has-text", `has-text-${C.length}`), l)
        !c && l && (g.color = N_(l));
      else {
        const E = h ?? _, y = (typeof E == "number" ? E : Bv(E)) * f % 360;
        if (g.background = `hsl(${y},${a * 100}%,${u * 100}%)`, !c) {
          const x = Fv(y, a, u);
          g.color = N_(x);
        }
      }
      let A;
      w && w < 14 * C.length && (A = { transform: `scale(${w / (14 * C.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ cc("div", { "data-actualSize": w, className: "avatar-text", style: A, children: C });
    }
    return /* @__PURE__ */ cc(
      "div",
      {
        className: F(m),
        style: g,
        ...p,
        children: [
          k,
          v
        ]
      }
    );
  }
};
class P_ extends $t {
}
L(P_, "NAME", "avatar"), L(P_, "Component", zv);
class O_ extends $t {
}
L(O_, "NAME", "btngroup"), L(O_, "Component", Xh);
var Ul, nt, $d, To, H_, Zs = {}, kd = [], Vv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function xd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ir(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ul.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return bs(t, l, o, i, null);
}
function bs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++$d };
  return i == null && nt.vnode != null && nt.vnode(r), r;
}
function Yv() {
  return { current: null };
}
function Fl(t) {
  return t.children;
}
function Mo(t, e) {
  this.props = t, this.context = e;
}
function lr(t, e) {
  if (e == null)
    return t.__ ? lr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? lr(t) : null;
}
function Sd(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Sd(t);
  }
}
function W_(t) {
  (!t.__d && (t.__d = !0) && To.push(t) && !Js.__r++ || H_ !== nt.debounceRendering) && ((H_ = nt.debounceRendering) || setTimeout)(Js);
}
function Js() {
  for (var t; Js.__r = To.length; )
    t = To.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), To = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = De({}, r)).__v = r.__v + 1, na(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? lr(r), r.__h), Td(o, r), r.__e != l && Sd(r)));
    });
}
function Cd(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || kd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? bs(null, a, null, null, a) : Array.isArray(a) ? bs(Fl, { children: a }, null, null, null) : a.__b > 0 ? bs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      na(t, a, f = f || Zs, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Ed(a, _, t) : _ = Ad(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = lr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && Ld(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Md(p[s], p[++s], p[++s]);
}
function Ed(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Ed(o, e, n) : Ad(n, o, o, i, o.__e, e));
  return e;
}
function Ad(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Gv(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Qs(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Qs(t, r, e[r], n[r], o);
}
function I_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Vv.test(e) ? n : n + "px";
}
function Qs(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || I_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || I_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? F_ : U_, r) : t.removeEventListener(e, r ? F_ : U_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function U_(t) {
  this.l[t.type + !1](nt.event ? nt.event(t) : t);
}
function F_(t) {
  this.l[t.type + !0](nt.event ? nt.event(t) : t);
}
function na(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = nt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Mo(p, g), s.constructor = y, s.render = Xv), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = De({}, s.__s)), De(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = nt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = De(De({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Fl && h.key == null ? h.props.children : h, Cd(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = qv(n.__e, e, n, o, i, r, l, _);
    (h = nt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), nt.__e(x, e, n);
  }
}
function Td(t, e) {
  nt.__c && nt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      nt.__e(o, n.__v);
    }
  });
}
function qv(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Ul.call(t.childNodes), h = (d = n.props || Zs).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Gv(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Cd(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && lr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && xd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Qs(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Qs(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Md(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    nt.__e(o, n);
  }
}
function Ld(t, e, n) {
  var o, i;
  if (nt.unmount && nt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Md(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        nt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Ld(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || xd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Xv(t, e, n) {
  return this.constructor(t, n);
}
function Kv(t, e, n) {
  var o, i, r;
  nt.__ && nt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], na(e, t = (!o && n || e).__k = ir(Fl, null, [t]), i || Zs, Zs, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Ul.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Td(r, t);
}
Ul = kd.slice, nt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, $d = 0, Mo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof t == "function" && (t = t(De({}, n), this.props)), t && De(n, t), t != null && this.__v && (e && this._sb.push(e), W_(this));
}, Mo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), W_(this));
}, Mo.prototype.render = Fl, To = [], Js.__r = 0;
var Zv = 0;
function q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Zv, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return nt.vnode && nt.vnode(_), _;
}
var Rd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = {}, Jv = {
  get exports() {
    return Z;
  },
  set exports(t) {
    Z = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Rd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var D = String(N);
      return !D || D.length >= S ? N : "" + Array(S + 1 - D.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), D = Math.floor($ / 60), M = $ % 60;
      return (S <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(M, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var D = 12 * ($.year() - S.year()) + ($.month() - S.month()), M = S.clone().add(D, d), O = $ - M < 0, P = S.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + ($ - M) / (O ? M - P : P - M)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof V;
    }, y = function N(S, $, D) {
      var M;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (M = O), $ && (A[O] = $, M = O);
        var P = S.split("-");
        if (!M && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, M = I;
      }
      return !D && M && (C = M), M || !D && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new V($);
    }, R = k;
    R.l = y, R.i = E, R.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var V = function() {
      function N($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(D) {
          var M = D.date, O = D.utc;
          if (M === null)
            return new Date(NaN);
          if (R.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
            }
          }
          return new Date(M);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return R;
      }, S.isValid = function() {
        return this.$d.toString() !== v;
      }, S.isSame = function($, D) {
        var M = x($);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, S.isAfter = function($, D) {
        return x($) < this.startOf(D);
      }, S.isBefore = function($, D) {
        return this.endOf(D) < x($);
      }, S.$g = function($, D, M) {
        return R.u($) ? this[D] : this.set(M, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, D) {
        var M = this, O = !!R.u(D) || D, P = R.p($), I = function(st, G) {
          var it = R.w(M.$u ? Date.UTC(M.$y, G, st) : new Date(M.$y, G, st), M);
          return O ? it : it.endOf(h);
        }, z = function(st, G) {
          return R.w(M.toDate()[st].apply(M.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), M);
        }, j = this.$W, X = this.$M, vt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return I(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return z(U + "Hours", 0);
          case _:
            return z(U + "Minutes", 1);
          case c:
            return z(U + "Seconds", 2);
          case l:
            return z(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, D) {
        var M, O = R.p($), P = "set" + (this.$u ? "UTC" : ""), I = (M = {}, M[h] = P + "Date", M[u] = P + "Date", M[d] = P + "Month", M[a] = P + "FullYear", M[_] = P + "Hours", M[c] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[O], z = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, S.set = function($, D) {
        return this.clone().$set($, D);
      }, S.get = function($) {
        return this[R.p($)]();
      }, S.add = function($, D) {
        var M, O = this;
        $ = Number($);
        var P = R.p(D), I = function(X) {
          var vt = x(O);
          return R.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (M = {}, M[c] = o, M[_] = i, M[l] = n, M)[P] || 1, j = this.$d.getTime() + $ * z;
        return R.w(j, this);
      }, S.subtract = function($, D) {
        return this.add(-1 * $, D);
      }, S.format = function($) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || v;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = M.weekdays, vt = M.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(D, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return R.s(I % 12 || 12, G, "0");
        }, yt = M.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(M.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(M.weekdaysMin, this.$W, X, 2), ddd: U(M.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, z, !0), A: yt(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, D, M) {
        var O, P = R.p(D), I = x($), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, M ? X : R.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, D) {
        if (!$)
          return this.$L;
        var M = this.clone(), O = y($, D, !0);
        return O && (M.$L = O), M;
      }, S.clone = function() {
        return R.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, V, x), N.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(Jv);
const xc = (t = 0, e = 0) => {
  const n = [];
  for (let o = t; o <= e; o++)
    n.push(o);
  return n;
}, Nd = (t, e) => {
  const n = Math.ceil(t.length / e);
  return new Array(e).fill({}).map((o, i) => t.slice(i * n, (i + 1) * n));
}, Qv = (t) => {
  const { format: e, minDate: n, maxDate: o, tagDate: i, DATEROWCOUNT: r, showOtherMonth: l, clickDay: c, selectedDate: _, handleChangePanel: h, showToday: s, handleChange: d, clickToday: f } = t, a = (R) => Z(R).isValid() ? Z(R).add(1, "months").format(e) : "", u = (R) => Z(R).isValid() ? Z(R).subtract(1, "months").format(e) : "", v = () => {
    const R = u(_);
    d(R, !1);
  }, p = () => {
    const R = a(_);
    d(R, !1);
  }, m = () => {
    d("", !0);
  }, g = () => {
    d(_, !0);
  }, w = (R, V, B, N) => {
    const S = Z(), $ = Z(_), D = new Array(R);
    for (let M = 0; M < R; M++) {
      const O = V + M + 1, P = B.set("date", O), I = N && !l ? !0 : n && P.isBefore(n, "date") || o && P.isAfter(o, "date");
      D[M] = {
        isSelected: $.isSame(B.set("date", O), "date"),
        isToday: S.isSame(P, "date"),
        isDisable: !!I,
        isTag: !!(i != null && i.includes(P.format(e))),
        date: P,
        isOtherMonth: N,
        onClick: () => I ? {} : c(P)
      };
    }
    return D;
  }, k = () => {
    const R = Z(_), V = Z(), B = _ ? R : V, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.subtract(1, "month"), M = Number($.endOf("month").get("date")) - S;
    return w(S, M, $, !0);
  }, C = () => {
    const R = Z(_), V = Z(), B = _ ? R : V, N = B.set("date", 1).day(), S = N === 0 ? 6 : N - 1, $ = B.endOf("month").get("date"), D = B.add(1, "month"), M = 7 * 6 % (S + $);
    return w(M, 0, D, !0);
  }, A = () => {
    const R = _, V = Z(), B = _ ? Z(R) : V, N = B.endOf("month").get("date"), S = w(N, 0, B, !1), $ = k(), D = C(), M = [...$, ...S, ...D];
    return Nd(M, r);
  }, E = ["一", "二", "三", "四", "五", "六", "日"], y = A(), x = _ || Z().format(e);
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-day"), children: [
    /* @__PURE__ */ q("div", { className: "datepicker-calendar-bar not-hide-datepicker", children: [
      /* @__PURE__ */ q("div", { class: "flex", children: /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => h("year"), children: [
        /* @__PURE__ */ q("span", { children: Z(x).format("YYYY 年 MM 月") }),
        /* @__PURE__ */ q("span", { class: "caret" })
      ] }) }),
      /* @__PURE__ */ q("div", { class: "flex", children: [
        s && /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => {
          f();
        }, children: "今天" }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => v(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-left" }) }),
        /* @__PURE__ */ q("button", { type: "button", className: "btn ghost", onClick: () => p(), children: /* @__PURE__ */ q("i", { className: "icon icon-angle-right" }) })
      ] })
    ] }),
    /* @__PURE__ */ q("table", { className: "datepicker-calendar-table not-hide-datepicker", children: [
      /* @__PURE__ */ q("thead", { className: "datepicker-calendar-thead", children: /* @__PURE__ */ q("tr", { children: E.map((R, V) => /* @__PURE__ */ q("th", { children: R }, V)) }) }),
      /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-tbody", children: y.map((R, V) => /* @__PURE__ */ q("tr", { children: R.map((B, N) => {
        const S = ["text-center"];
        return B.isToday && S.push("datepicker-calendar-today"), B.isSelected && S.push("datepicker-calendar-selected-date"), B.isOtherMonth && S.push("datepicker-calendar-other-month"), B.isTag && S.push("datepicker-calendar-tag"), /* @__PURE__ */ q("td", { className: F(S), children: /* @__PURE__ */ q("div", { className: F("btn", "ghost", "datepicker-calendar-date", B.isDisable ? "disabled" : ""), onClick: B.onClick, children: !l && B.isOtherMonth ? "" : Z(B.date).format("DD") }) }, N);
      }) }, V)) })
    ] }),
    /* @__PURE__ */ q("div", { class: "datepicker-calendar-footer text-right mt-1", children: [
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: m, children: /* @__PURE__ */ q("span", { children: "清除" }) }),
      /* @__PURE__ */ q("button", { type: "button", className: "btn ghost text-primary", onClick: g, children: /* @__PURE__ */ q("span", { children: "确认" }) })
    ] })
  ] });
};
const tb = (t) => {
  const { format: e, selectedDate: n, minDate: o, maxDate: i, year: r, handleChangeMonth: l } = t, c = Z(o).format("M"), _ = Z(i).format("M"), h = Nd(xc(1, 12), 3), s = (d, f) => {
    f || l(d);
  };
  return /* @__PURE__ */ q("div", { className: F("datepicker-calendar-month", "not-hide-datepicker"), children: /* @__PURE__ */ q("table", { className: "datepicker-calendar-month-table", children: /* @__PURE__ */ q("tbody", { className: "datepicker-calendar-month-table-body", children: h.map((d, f) => /* @__PURE__ */ q("tr", { children: d.map((a, u) => {
    const v = ["text-center"], p = Z(`${r}-${a}-01`).format(e), m = !!(c && Z(n).isBefore(c) || _ && Z(n).isBefore(_));
    return /* @__PURE__ */ q("td", { className: F(v), children: /* @__PURE__ */ q("div", { className: F("btn", "size-sm", "ghost", "datepicker-calendar-month", m ? "disabled" : ""), onClick: () => {
      s(p, m);
    }, children: [
      Z(p).format("MM"),
      " 月"
    ] }) }, u);
  }) }, f)) }) }) });
}, eb = (t) => {
  const { selectedDate: e, handleChangeMonth: n } = t;
  setTimeout(() => {
    const l = document.getElementsByClassName("datepicker-accordion");
    l != null && l.length && (l[0].scrollTop = 2400);
  }, 800);
  const o = Z(e).year(), i = [...xc(o - 100, o), ...xc(o + 1, o + 100)], r = (l, c) => {
    var s, d, f;
    if (!(l != null && l.target))
      return;
    const _ = document.querySelectorAll(".datepicker-accordion > ul > li > .datepicker-accordion-title");
    for (let a = 0; a < _.length; a++)
      (s = _[a].nextElementSibling) != null && s.classList.contains("hidden") || (d = _[a].nextElementSibling) == null || d.classList.add("hidden");
    (f = l.target.nextElementSibling) == null || f.classList.toggle("hidden");
    const h = document.querySelector(".datepicker-accordion");
    h && (h.scrollTop + h.clientHeight === h.scrollHeight ? h.scrollTop = 0 : c < o ? h.scrollTop = h.scrollTop - 30 : h.scrollTop = h.scrollTop + 30);
  };
  return /* @__PURE__ */ q("div", { class: "datepicker-accordion scroll-smooth not-hide-datepicker", children: /* @__PURE__ */ q("ul", { children: i.map((l, c) => /* @__PURE__ */ q("li", { id: o === l ? "selected" : "", children: [
    /* @__PURE__ */ q("div", { class: "datepicker-accordion-title", onClick: (_) => r(_, l), children: l }),
    /* @__PURE__ */ q("div", { className: F("datepicker-accordion-content", o === l ? "" : "hidden"), children: ir(tb, {
      ...t,
      year: l.toString(),
      handleChangeMonth: n
    }) }, c)
  ] })) }) });
};
class nb extends Mo {
  constructor() {
    super(...arguments);
    L(this, "DATEROWCOUNT", 6);
    L(this, "ref", Yv());
    L(this, "state", {
      selectedDate: this.props.date || Z().format("YYYY-MM-DD"),
      type: "day"
    });
  }
  handleChange(n, o = !1) {
    var i, r;
    this.setState({ selectedDate: n }), o && ((r = (i = this.props).onChange) == null || r.call(i, n));
  }
  handleChangePanel(n) {
    this.setState({ type: n });
  }
  handleChangeMonth(n) {
    this.setState({ selectedDate: n, type: "day" });
  }
  handleChangeYear(n) {
    this.setState({ selectedDate: n, type: "month" });
  }
  changeYear(n) {
    const o = n === "subtract" ? Z(this.state.selectedDate).subtract(1, "year").startOf("year").format(this.props.format) : Z(this.state.selectedDate).add(1, "year").startOf("year").format(this.props.format);
    this.handleChange(o);
  }
  clickDay(n) {
    const o = Z(n).format(this.props.format);
    this.handleChange(o);
  }
  clickToday() {
    this.handleChange(Z().format(this.props.format));
  }
  renderPanel() {
    return this.state.type === "day" ? ir(Qv, {
      ...this.props,
      handleChange: this.handleChange.bind(this),
      handleChangePanel: this.handleChangePanel.bind(this),
      clickToday: this.clickToday.bind(this),
      clickDay: this.clickDay.bind(this),
      selectedDate: this.state.selectedDate,
      DATEROWCOUNT: this.DATEROWCOUNT
    }) : ir(eb, {
      ...this.props,
      selectedDate: this.state.selectedDate,
      handleChangeMonth: this.handleChangeMonth.bind(this)
    });
  }
  render() {
    const { className: n } = this.props;
    return /* @__PURE__ */ q("div", { className: F("datepicker-calendar", n), ref: this.ref, children: this.renderPanel() });
  }
}
function Kr(t) {
  return t.split("-")[1];
}
function oa(t) {
  return t === "y" ? "height" : "width";
}
function Kn(t) {
  return t.split("-")[0];
}
function Bl(t) {
  return ["top", "bottom"].includes(Kn(t)) ? "x" : "y";
}
function B_(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Bl(e), _ = oa(c), h = o[_] / 2 - i[_] / 2, s = Kn(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Kr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const ob = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = B_(h, o, _), f = o, a = {}, u = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = B_(h, f, _)), v = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function rb(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Dd(t) {
  return typeof t != "number" ? rb(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ti(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function sb(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = Dd(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = ti(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ti(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const ib = Math.min, lb = Math.max;
function cb(t, e, n) {
  return lb(t, ib(e, n));
}
const ab = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Dd(o), s = {
      x: i,
      y: r
    }, d = Bl(l), f = oa(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[v], E = w / 2 - a[f] / 2 + k, y = cb(C, E, A), R = Kr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[v]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), _b = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ei(t) {
  return t.replace(/left|right|bottom|top/g, (e) => _b[e]);
}
function fb(t, e, n) {
  n === void 0 && (n = !1);
  const o = Kr(t), i = Bl(t), r = oa(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = ei(l)), {
    main: l,
    cross: ei(l)
  };
}
const ub = {
  start: "end",
  end: "start"
};
function Sc(t) {
  return t.replace(/start|end/g, (e) => ub[e]);
}
function hb(t) {
  const e = ei(t);
  return [Sc(t), e, Sc(e)];
}
function db(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function pb(t, e, n, o) {
  const i = Kr(t);
  let r = db(Kn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Sc)))), r;
}
const mb = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...v
      } = t, p = Kn(o), m = Kn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [ei(l)] : hb(l));
      !d && a !== "none" && w.push(...pb(l, u, a, g));
      const k = [l, ...w], C = await sb(e, v), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = fb(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var y;
        const R = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function gb(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Kn(n), c = Kr(n), _ = Bl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const yb = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await gb(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function It(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function oe(t) {
  return It(t).getComputedStyle(t);
}
function ze(t) {
  return Od(t) ? (t.nodeName || "").toLowerCase() : "";
}
let rs;
function Pd() {
  if (rs)
    return rs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (rs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), rs) : navigator.userAgent;
}
function pe(t) {
  return t instanceof It(t).HTMLElement;
}
function Vt(t) {
  return t instanceof It(t).Element;
}
function Od(t) {
  return t instanceof It(t).Node;
}
function j_(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = It(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function jl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = oe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function vb(t) {
  return ["table", "td", "th"].includes(ze(t));
}
function ra(t) {
  const e = /firefox/i.test(Pd()), n = oe(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Hd() {
  return !/^((?!chrome|android).)*safari/i.test(Pd());
}
function sa(t) {
  return ["html", "body", "#document"].includes(ze(t));
}
const z_ = Math.min, Lo = Math.max, ni = Math.round;
function Wd(t) {
  const e = oe(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = ni(n) !== i || ni(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function Id(t) {
  return Vt(t) ? t : t.contextElement;
}
const Ud = {
  x: 1,
  y: 1
};
function gn(t) {
  const e = Id(t);
  if (!pe(e))
    return Ud;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = Wd(e);
  let l = (r ? ni(n.width) : n.width) / o, c = (r ? ni(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function fn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = Id(t);
  let _ = Ud;
  e && (o ? Vt(o) && (_ = gn(o)) : _ = gn(t));
  const h = c ? It(c) : window, s = !Hd() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const v = It(c), p = o && Vt(o) ? It(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = gn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = It(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function qe(t) {
  return ((Od(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function zl(t) {
  return Vt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Fd(t) {
  return fn(qe(t)).left + zl(t).scrollLeft;
}
function bb(t, e, n) {
  const o = pe(e), i = qe(e), r = fn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((ze(e) !== "body" || jl(i)) && (l = zl(e)), pe(e)) {
      const _ = fn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Fd(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function cr(t) {
  if (ze(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (j_(t) ? t.host : null) || // Fallback
    qe(t)
  );
  return j_(e) ? e.host : e;
}
function V_(t) {
  return !pe(t) || oe(t).position === "fixed" ? null : t.offsetParent;
}
function wb(t) {
  let e = cr(t);
  for (; pe(e) && !sa(e); ) {
    if (ra(e))
      return e;
    e = cr(e);
  }
  return null;
}
function Y_(t) {
  const e = It(t);
  let n = V_(t);
  for (; n && vb(n) && oe(n).position === "static"; )
    n = V_(n);
  return n && (ze(n) === "html" || ze(n) === "body" && oe(n).position === "static" && !ra(n)) ? e : n || wb(t) || e;
}
function $b(t) {
  return Wd(t);
}
function kb(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = pe(n), r = qe(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((ze(n) !== "body" || jl(r)) && (l = zl(n)), pe(n))) {
    const h = fn(n);
    c = gn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function xb(t, e) {
  const n = It(t), o = qe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Hd();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Sb(t) {
  var e;
  const n = qe(t), o = zl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Lo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Lo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Fd(t);
  const _ = -o.scrollTop;
  return oe(i || n).direction === "rtl" && (c += Lo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Bd(t) {
  const e = cr(t);
  return sa(e) ? t.ownerDocument.body : pe(e) && jl(e) ? e : Bd(e);
}
function Ro(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Bd(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = It(o);
  return i ? e.concat(r, r.visualViewport || [], jl(o) ? o : []) : e.concat(o, Ro(o));
}
function Cb(t, e) {
  const n = fn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = pe(t) ? gn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function G_(t, e, n) {
  return e === "viewport" ? ti(xb(t, n)) : Vt(e) ? Cb(e, n) : ti(Sb(qe(t)));
}
function Eb(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Ro(t).filter((c) => Vt(c) && ze(c) !== "body"), i = null;
  const r = oe(t).position === "fixed";
  let l = r ? cr(t) : t;
  for (; Vt(l) && !sa(l); ) {
    const c = oe(l), _ = ra(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = cr(l);
  }
  return e.set(t, o), o;
}
function Ab(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Eb(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = G_(e, s, i);
    return h.top = Lo(d.top, h.top), h.right = z_(d.right, h.right), h.bottom = z_(d.bottom, h.bottom), h.left = Lo(d.left, h.left), h;
  }, G_(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Tb = {
  getClippingRect: Ab,
  convertOffsetParentRelativeRectToViewportRelativeRect: kb,
  isElement: Vt,
  getDimensions: $b,
  getOffsetParent: Y_,
  getDocumentElement: qe,
  getScale: gn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || Y_, r = this.getDimensions;
    return {
      reference: bb(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => oe(t).direction === "rtl"
};
function Mb(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Vt(t) ? Ro(t) : t.contextElement ? Ro(t.contextElement) : [], ...Ro(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Vt(t) && !c && s.observe(t), !Vt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? fn(t) : null;
  c && a();
  function a() {
    const u = fn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Lb = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Tb,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return ob(t, e, {
    ...i,
    platform: r
  });
};
var Rn, Nn, kt, nn, xr, Sr, Cr, Cc, Ni, jd, Di, zd, Pi, Vd, Oi, Yd, Hi, Gd, Wi, qd, Ii, Xd, Ui;
const Ze = class extends qt {
  constructor() {
    super(...arguments);
    T(this, Cr);
    T(this, Ni);
    T(this, Di);
    T(this, Pi);
    T(this, Oi);
    T(this, Hi);
    T(this, Wi);
    T(this, Ii);
    T(this, Rn, void 0);
    T(this, Nn, 0);
    T(this, kt, void 0);
    T(this, nn, void 0);
    T(this, xr, void 0);
    T(this, Sr, void 0);
    L(this, "hideLater", () => {
      b(this, Ui).call(this), H(this, Nn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, Ui, () => {
      clearTimeout(b(this, Nn)), H(this, Nn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, nn)) == null ? void 0 : n.classList.contains(Ze.CLASS_SHOW);
  }
  get datepicker() {
    return b(this, nn) || W(this, Di, zd).call(this);
  }
  get trigger() {
    return b(this, xr) || this.element;
  }
  get elementShowClass() {
    return `with-${Ze.NAME}-show`;
  }
  show(n) {
    return H(this, xr, n), !this.datepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.datepicker.classList.add(Ze.CLASS_SHOW), this.datepicker.classList.add("fade"), W(this, Wi, qd).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = b(this, Sr)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, nn)) == null || o.classList.remove(Ze.CLASS_SHOW), this.datepicker.classList.remove("fade"), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-datepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
};
let Pt = Ze;
Rn = new WeakMap(), Nn = new WeakMap(), kt = new WeakMap(), nn = new WeakMap(), xr = new WeakMap(), Sr = new WeakMap(), Cr = new WeakSet(), Cc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, Ni = new WeakSet(), jd = function() {
  const n = W(this, Cr, Cc).call(this);
  return H(this, kt, document.createElement("div")), b(this, kt).style.position = "absolute", b(this, kt).style.width = `${n}px`, b(this, kt).style.height = `${n}px`, b(this, kt).style.transform = "rotate(45deg)", b(this, kt);
}, Di = new WeakSet(), zd = function() {
  const n = Ze.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), Kv(ir(nb, { ...this.options }), o), this.options.arrow && o.append(W(this, Ni, jd).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, nn, o), o;
}, Pi = new WeakSet(), Vd = function() {
  var l;
  const n = W(this, Cr, Cc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [yb(n), mb()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && b(this, kt) && ((l = r.middleware) == null || l.push(ab({ element: b(this, kt) }))), r;
}, Oi = new WeakSet(), Yd = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, Hi = new WeakSet(), Gd = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, Wi = new WeakSet(), qd = function() {
  const n = W(this, Pi, Vd).call(this), o = W(this, Ii, Xd).call(this);
  H(this, Sr, Mb(o, this.datepicker, () => {
    Lb(o, this.datepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.datepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, Oi, Yd).call(this, _);
      if (l.arrow && b(this, kt)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(b(this, kt).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-b(this, kt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, Hi, Gd).call(this, _)
        });
      }
    });
  }));
}, Ii = new WeakSet(), Xd = function() {
  return b(this, Rn) || H(this, Rn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), b(this, Rn);
}, Ui = new WeakMap(), L(Pt, "NAME", "datepicker"), L(Pt, "CLASSNAME", "datepicker"), L(Pt, "CLASS_SHOW", "show"), L(Pt, "MENU_SELECTOR", ".form-datetime:not(.disabled):not(:disabled)"), L(Pt, "DEFAULT", {
  date: Z().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD",
  showOtherMonth: !0,
  placement: "bottom-start",
  strategy: "absolute",
  trigger: "click",
  showToday: !0,
  arrow: !0
});
document.addEventListener("click", function(t) {
  const e = t.target, n = e.closest(Pt.MENU_SELECTOR), o = e.closest(".datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table");
  n ? Pt.ensure(n).toggle() : o || Pt.clear({ event: t });
});
const Rb = (t) => {
  const e = document.getElementsByClassName("with-datepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Pt.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Pt.clear({ event: t });
};
window.addEventListener("scroll", Rb, !0);
function Kd(t, e, n) {
  if (n) {
    t.setAttribute("class", F(e));
    return;
  }
  Dl(t.getAttribute("class"), e).forEach(([o, i]) => {
    t.classList.toggle(o, i);
  });
}
function io(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      io(t, o, i);
    });
  n !== void 0 && (t.style[e] = typeof n == "number" ? `${n}px` : n);
}
function oi(t, e, n) {
  if (typeof e == "object")
    return Object.entries(e).forEach(([o, i]) => {
      oi(t, o, i);
    });
  n !== void 0 && (n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
var on, Er, we, Fi, Dn, ws;
const le = class extends qt {
  constructor() {
    super(...arguments);
    T(this, Dn);
    T(this, on, 0);
    T(this, Er, void 0);
    T(this, we, void 0);
    T(this, Fi, (n) => {
      const o = n.target;
      (o.closest(le.DISMISS_SELECTOR) || this.options.backdrop === !0 && !o.closest(".modal-dialog") && o.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(le.CLASS_SHOW);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", b(this, Fi)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: n } = this;
      if (n) {
        const o = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const i = n.clientWidth, r = n.clientHeight;
          (!b(this, we) || b(this, we)[0] !== i || b(this, we)[1] !== r) && (H(this, we, [i, r]), this.layout());
        });
        o.observe(n), H(this, Er, o);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var n;
    super.destroy(), (n = b(this, Er)) == null || n.disconnect();
  }
  show(n) {
    if (this.isShown)
      return !1;
    this.setOptions(n);
    const { modalElement: o } = this, { animation: i, backdrop: r, className: l, style: c } = this.options;
    return Kd(o, [{
      "modal-trans": i,
      "modal-no-backdrop": !r
    }, le.CLASS_SHOW, l]), io(o, {
      zIndex: `${le.zIndex++}`,
      ...c
    }), this.layout(), this.emit("show", this), W(this, Dn, ws).call(this, () => {
      o.classList.add(le.CLASS_SHOWN), W(this, Dn, ws).call(this, () => {
        this.emit("shown", this);
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (this.modalElement.classList.remove(le.CLASS_SHOWN), this.emit("hide", this), W(this, Dn, ws).call(this, () => {
      this.modalElement.classList.remove(le.CLASS_SHOW), this.emit("hidden", this);
    }), !0) : !1;
  }
  layout(n, o) {
    if (!this.isShown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    o = o ?? this.options.size, oi(i, "data-size", null);
    const r = { width: null, height: null };
    typeof o == "object" ? (r.width = o.width, r.height = o.height) : typeof o == "string" && ["md", "sm", "lg", "full"].includes(o) ? oi(i, "data-size", o) : o && (r.width = o), io(i, r), n = n ?? this.options.position ?? "fit";
    const l = i.clientWidth, c = i.clientHeight;
    H(this, we, [l, c]), typeof n == "function" && (n = n({ width: l, height: c }));
    const _ = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof n == "number" ? (_.alignSelf = "flex-start", _.top = n) : typeof n == "object" && n ? (_.alignSelf = "flex-start", Object.assign(_, n)) : n === "fit" ? (_.alignSelf = "flex-start", _.top = `${Math.max(0, Math.floor((window.innerHeight - c) / 3))}px`) : n === "bottom" ? _.alignSelf = "flex-end" : n === "top" ? _.alignSelf = "flex-start" : n !== "center" && typeof n == "string" && (_.alignSelf = "flex-start", _.top = n), io(i, _), io(this.modalElement, "justifyContent", _.left ? "flex-start" : "center");
  }
};
let Tt = le;
on = new WeakMap(), Er = new WeakMap(), we = new WeakMap(), Fi = new WeakMap(), Dn = new WeakSet(), ws = function(n, o) {
  b(this, on) && (clearTimeout(b(this, on)), H(this, on, 0)), n && (this.options.animation ? H(this, on, window.setTimeout(n, o ?? this.options.transTime)) : n());
}, L(Tt, "NAME", "Modal"), L(Tt, "EVENTS", !0), L(Tt, "DEFAULT", {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}), L(Tt, "CLASS_SHOW", "show"), L(Tt, "CLASS_SHOWN", "in"), L(Tt, "DISMISS_SELECTOR", '[data-dismiss="modal"]'), L(Tt, "zIndex", 2e3);
window.addEventListener("resize", () => {
  Tt.all.forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
var Vl, ot, Zd, lo, No, q_, ri = {}, Jd = [], Nb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Pe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Qd(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Db(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Vl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return $s(t, l, o, i, null);
}
function $s(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Zd };
  return i == null && ot.vnode != null && ot.vnode(r), r;
}
function Pb() {
  return { current: null };
}
function Yl(t) {
  return t.children;
}
function yn(t, e) {
  this.props = t, this.context = e;
}
function ar(t, e) {
  if (e == null)
    return t.__ ? ar(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ar(t) : null;
}
function tp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return tp(t);
  }
}
function X_(t) {
  (!t.__d && (t.__d = !0) && No.push(t) && !si.__r++ || q_ !== ot.debounceRendering) && ((q_ = ot.debounceRendering) || setTimeout)(si);
}
function si() {
  for (var t; si.__r = No.length; )
    t = No.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), No = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Pe({}, r)).__v = r.__v + 1, ia(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ar(r), r.__h), rp(o, r), r.__e != l && tp(r)));
    });
}
function ep(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Jd, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? $s(null, a, null, null, a) : Array.isArray(a) ? $s(Yl, { children: a }, null, null, null) : a.__b > 0 ? $s(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ia(t, a, f = f || ri, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = np(a, _, t) : _ = op(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = ar(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && ip(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      sp(p[s], p[++s], p[++s]);
}
function np(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? np(o, e, n) : op(n, o, o, i, o.__e, e));
  return e;
}
function op(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Ob(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ii(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ii(t, r, e[r], n[r], o);
}
function K_(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Nb.test(e) ? n : n + "px";
}
function ii(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || K_(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || K_(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? J_ : Z_, r) : t.removeEventListener(e, r ? J_ : Z_, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Z_(t) {
  this.l[t.type + !1](ot.event ? ot.event(t) : t);
}
function J_(t) {
  this.l[t.type + !0](ot.event ? ot.event(t) : t);
}
function ia(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = ot.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new yn(p, g), s.constructor = y, s.render = Wb), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Pe({}, s.__s)), Pe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = ot.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Pe(Pe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === Yl && h.key == null ? h.props.children : h, ep(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Hb(n.__e, e, n, o, i, r, l, _);
    (h = ot.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), ot.__e(x, e, n);
  }
}
function rp(t, e) {
  ot.__c && ot.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      ot.__e(o, n.__v);
    }
  });
}
function Hb(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Vl.call(t.childNodes), h = (d = n.props || ri).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Ob(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, ep(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ar(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Qd(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ii(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ii(t, "checked", u, d.checked, !1));
  }
  return t;
}
function sp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    ot.__e(o, n);
  }
}
function ip(t, e, n) {
  var o, i;
  if (ot.unmount && ot.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || sp(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        ot.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && ip(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Qd(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Wb(t, e, n) {
  return this.constructor(t, n);
}
function Ib(t, e, n) {
  var o, i, r;
  ot.__ && ot.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], ia(e, t = (!o && n || e).__k = Db(Yl, null, [t]), i || ri, ri, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Vl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), rp(r, t);
}
Vl = Jd.slice, ot = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Zd = 0, lo = function(t) {
  return t != null && t.constructor === void 0;
}, yn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pe({}, this.state), typeof t == "function" && (t = t(Pe({}, n), this.props)), t && Pe(n, t), t != null && this.__v && (e && this._sb.push(e), X_(this));
}, yn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), X_(this));
}, yn.prototype.render = Yl, No = [], si.__r = 0;
var Ub = 0;
function bt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ub, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return ot.vnode && ot.vnode(_), _;
}
let Fb = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
class lp extends yn {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  renderHeader() {
    const {
      header: e,
      title: n
    } = this.props;
    return lo(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-header", children: /* @__PURE__ */ bt("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : lo(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ bt(Xn, { ...e }) : null,
      n ? /* @__PURE__ */ bt("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ bt("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? lo(e) ? e : /* @__PURE__ */ bt("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return lo(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ bt("div", { className: "modal-footer", children: n ? /* @__PURE__ */ bt(Xn, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: o
    } = this.props;
    return /* @__PURE__ */ bt("div", { className: F("modal-dialog", e), style: n, children: /* @__PURE__ */ bt("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      o,
      this.renderFooter()
    ] }) });
  }
}
L(lp, "defaultProps", { closeBtn: !0 });
var Ar, Pn, Tr;
class Bb extends yn {
  constructor() {
    super(...arguments);
    T(this, Ar, Pb());
    T(this, Pn, void 0);
    L(this, "state", {});
    T(this, Tr, () => {
      var i, r;
      const n = (r = (i = b(this, Ar).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let o = b(this, Pn);
      o == null || o.disconnect(), o = new ResizeObserver(() => {
        const l = n.body, c = n.documentElement, _ = Math.ceil(Math.max(l.scrollHeight, l.offsetHeight, c.offsetHeight));
        this.setState({ height: _ });
      }), o.observe(n.body), o.observe(n.documentElement), H(this, Pn, o);
    });
  }
  componentDidMount() {
    b(this, Tr).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = b(this, Pn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ bt(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: b(this, Ar),
        onLoad: b(this, Tr)
      }
    );
  }
}
Ar = new WeakMap(), Pn = new WeakMap(), Tr = new WeakMap();
function jb(t, e) {
  const { custom: n, title: o, content: i } = e;
  return {
    body: i,
    title: o,
    ...typeof n == "function" ? n() : n
  };
}
async function zb(t, e) {
  const { dataType: n, url: o, request: i, custom: r, title: l } = e, _ = await (await fetch(o, i)).text();
  if (n !== "html")
    try {
      const h = JSON.parse(_);
      return {
        title: l,
        ...r,
        ...h
      };
    } catch {
    }
  return {
    title: l,
    ...r,
    body: n === "html" ? /* @__PURE__ */ bt("div", { className: "modal-body", dangerouslySetInnerHTML: { __html: _ } }) : _
  };
}
async function Vb(t, e) {
  const { url: n, custom: o, title: i } = e;
  return {
    title: i,
    ...o,
    body: /* @__PURE__ */ bt(Bb, { url: n })
  };
}
const Yb = {
  custom: jb,
  ajax: zb,
  iframe: Vb
};
var Mr, Lr, Zt, On, ks, Bi, cp, Rr, Ec;
const qo = class extends Tt {
  constructor() {
    super(...arguments);
    T(this, On);
    T(this, Bi);
    T(this, Rr);
    T(this, Mr, void 0);
    T(this, Lr, void 0);
    T(this, Zt, void 0);
  }
  get id() {
    return b(this, Lr);
  }
  get loading() {
    return this.modalElement.classList.contains(qo.LOADING_CLASS);
  }
  get modalElement() {
    let n = b(this, Mr);
    if (!n) {
      const { id: o } = this;
      n = this.element.querySelector(`#${o}`), n || (n = document.createElement("div"), oi(n, {
        id: o,
        style: this.options.style
      }), Kd(n, ["modal modal-async", this.options.className]), this.element.appendChild(n)), H(this, Mr, n);
    }
    return n;
  }
  afterInit() {
    super.afterInit(), H(this, Lr, this.options.id || `modal-${Fb()}`);
  }
  show(n) {
    return super.show(n) ? (this.buildDialog(), !0) : !1;
  }
  render(n) {
    super.render(n), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    b(this, Zt) && clearTimeout(b(this, Zt));
    const { modalElement: n, options: o } = this, { type: i, loadTimeout: r } = o, l = Yb[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.classList.add(qo.LOADING_CLASS), await W(this, Bi, cp).call(this), r && H(this, Zt, window.setTimeout(() => {
      H(this, Zt, 0), W(this, Rr, Ec).call(this, this.options.timeoutTip);
    }, r));
    const c = await l(n, o);
    return c === !1 ? await W(this, Rr, Ec).call(this, this.options.failedTip) : c && typeof c == "object" && await W(this, On, ks).call(this, c), b(this, Zt) && (clearTimeout(b(this, Zt)), H(this, Zt, 0)), n.classList.remove(qo.LOADING_CLASS), !0;
  }
};
let co = qo;
Mr = new WeakMap(), Lr = new WeakMap(), Zt = new WeakMap(), On = new WeakSet(), ks = function(n) {
  return new Promise((o) => {
    const { afterRender: i, ...r } = n;
    n = {
      afterRender: (l) => {
        this.layout(), i == null || i(l), o();
      },
      ...r
    }, Ib(
      /* @__PURE__ */ bt(lp, { ...n }),
      this.modalElement
    );
  });
}, Bi = new WeakSet(), cp = function() {
  const { loadingText: n } = this.options;
  return W(this, On, ks).call(this, {
    body: /* @__PURE__ */ bt("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ bt("span", { className: "spinner" }),
      n ? /* @__PURE__ */ bt("span", { className: "modal-loading-text", children: n }) : null
    ] })
  });
}, Rr = new WeakSet(), Ec = function(n) {
  if (n)
    return W(this, On, ks).call(this, {
      body: /* @__PURE__ */ bt("div", { className: "modal-load-failed", children: n })
    });
}, L(co, "LOADING_CLASS", "loading"), L(co, "DEFAULT", {
  ...Tt.DEFAULT,
  loadTimeout: 1e4
});
var $e, ji, ap, zi, _p, Vi, fp;
class Do extends qt {
  constructor() {
    super(...arguments);
    T(this, ji);
    T(this, zi);
    T(this, Vi);
    T(this, $e, void 0);
  }
  get modal() {
    return b(this, $e);
  }
  get container() {
    const { container: n } = this.options;
    return typeof n == "string" ? document.querySelector(n) : n instanceof HTMLElement ? n : document.body;
  }
  show() {
    return W(this, zi, _p).call(this).show();
  }
  hide() {
    var n;
    (n = b(this, $e)) == null || n.hide();
  }
}
$e = new WeakMap(), ji = new WeakSet(), ap = function() {
  const {
    container: n,
    ...o
  } = this.options, i = o, r = this.element.getAttribute("href") || "";
  return i.type || (i.target || r[0] === "#" ? i.type = "static" : i.type = i.type || (i.url ? "iframe" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && r[0] !== "#" && (i.url = r), i;
}, zi = new WeakSet(), _p = function() {
  const n = W(this, ji, ap).call(this);
  let o = b(this, $e);
  return o ? o.setOptions(n) : n.type === "static" ? (o = new Tt(W(this, Vi, fp).call(this), n), H(this, $e, o)) : (o = new co(this.container, n), H(this, $e, o)), o;
}, Vi = new WeakSet(), fp = function() {
  let n = this.options.target;
  if (!n) {
    const { element: o } = this;
    if (o.tagName === "A") {
      const i = o.getAttribute("href");
      i != null && i.startsWith("#") && (n = i);
    }
  }
  return this.container.querySelector(n || ".modal");
}, L(Do, "NAME", "ModalTrigger"), L(Do, "EVENTS", !0), L(Do, "TOGGLE_SELECTOR", '[data-toggle="modal"]');
window.addEventListener("click", (t) => {
  const n = t.target.closest(Do.TOGGLE_SELECTOR);
  if (n) {
    const o = Do.ensure(n);
    o && o.show(), console.log("> modalTrigger", o);
  }
});
var pc;
let Gb = (pc = class extends qn {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = F(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, L(pc, "NAME", "nav"), pc);
class Q_ extends $t {
}
L(Q_, "NAME", "nav"), L(Q_, "Component", Gb);
var Ac;
Ac = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} };
var qb = 0;
function Fe(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --qb, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return Ac.vnode && Ac.vnode(_), _;
}
function _r(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function Xb({
  key: t,
  type: e,
  btnType: n,
  page: o,
  format: i,
  pagerInfo: r,
  linkCreator: l,
  ...c
}) {
  const _ = _r(r, o);
  return c.text === void 0 && !c.icon && i && (c.text = typeof i == "function" ? i(_) : Lt(i, _)), c.url === void 0 && l && (c.url = typeof l == "function" ? l(_) : Lt(l, _)), c.disabled === void 0 && (c.disabled = o !== void 0 && _.page === r.page), /* @__PURE__ */ Fe(ee, { type: n, ...c });
}
const ce = 24 * 60 * 60 * 1e3, Rt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : new Date(), Zr = (t, e = new Date()) => (t = Rt(t), e = Rt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), tf = (t, e = new Date()) => Rt(t).getFullYear() === Rt(e).getFullYear(), Kb = (t, e = new Date()) => (t = Rt(t), e = Rt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), N$ = (t, e = new Date()) => {
  t = Rt(t), e = Rt(e);
  const n = 1e3 * 60 * 60 * 24, o = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((o + 4) / 7) === Math.floor((i + 4) / 7);
}, D$ = (t, e) => Zr(Rt(e), t), P$ = (t, e) => Zr(Rt(e).getTime() - ce, t), O$ = (t, e) => Zr(Rt(e).getTime() + ce, t), H$ = (t, e) => Zr(Rt(e).getTime() - 2 * ce, t), Tc = (t, e = "yyyy-MM-dd hh:mm") => {
  t = Rt(t);
  const n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((o) => {
    if (new RegExp(`(${o})`).test(e)) {
      const i = `${n[o]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), e;
}, W$ = (t, e, n) => {
  const o = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Tc(t, tf(t) ? o.month : o.full);
  if (Zr(t, e))
    return i;
  const r = Tc(e, tf(t, e) ? Kb(t, e) ? o.day : o.month : o.full);
  return o.str.replace("{0}", i).replace("{1}", r);
}, I$ = (t) => {
  const e = new Date().getTime();
  switch (t) {
    case "oneWeek":
      return e - ce * 7;
    case "oneMonth":
      return e - ce * 31;
    case "threeMonth":
      return e - ce * 31 * 3;
    case "halfYear":
      return e - ce * 183;
    case "oneYear":
      return e - ce * 365;
    case "twoYear":
      return e - 2 * (ce * 365);
    default:
      return 0;
  }
}, ef = (t, e, n = !0, o = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, ef(t, "day", n, o);
    case "quarter":
      t *= 3;
    case "month":
      return t *= 30, ef(t, "day", n, o);
    case "week":
      t *= 7;
    case "day":
      t *= 24;
    case "hour":
      t *= 60;
    case "minute":
      t *= 6e4;
      break;
    default:
      t = 0;
  }
  return n ? o + t : o - t;
};
function Zb({
  key: t,
  type: e,
  page: n,
  text: o = "",
  pagerInfo: i,
  children: r,
  ...l
}) {
  const c = _r(i, n);
  return o = typeof o == "function" ? o(c) : Lt(o, c), /* @__PURE__ */ Fe(ku, { ...l, children: [
    r,
    o
  ] });
}
function Jb({
  key: t,
  type: e,
  btnType: n,
  count: o = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: l,
  ...c
}) {
  if (!i.pageTotal)
    return;
  const _ = { ...c, square: !0 }, h = () => (_.text = "", _.icon = "icon-ellipsis-h", _.disabled = !0, /* @__PURE__ */ Fe(ee, { type: n, ..._ })), s = (f, a) => {
    const u = [];
    for (let v = f; v <= a; v++) {
      _.text = v, delete _.icon, _.disabled = !1;
      const p = _r(i, v);
      l && (_.url = typeof l == "function" ? l(p) : Lt(l, p)), u.push(/* @__PURE__ */ Fe(ee, { type: n, ..._, onClick: r }));
    }
    return u;
  };
  let d = [];
  return d = [...s(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= o ? d = [...d, ...s(2, i.pageTotal)] : i.page < o - 2 ? d = [...d, ...s(2, o - 2), h(), ...s(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - o + 3 ? d = [...d, h(), ...s(i.pageTotal - o + 3, i.pageTotal)] : d = [...d, h(), ...s(i.page - Math.ceil((o - 4) / 2), i.page + Math.floor((o - 4) / 2)), h(), ...s(i.pageTotal, i.pageTotal)]), d;
}
function Qb({
  type: t,
  pagerInfo: e,
  linkCreator: n,
  items: o = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var c;
  i.items = i.items ?? o.map((_) => {
    const h = { ...e, recPerPage: _ };
    return {
      text: `${_}`,
      url: typeof n == "function" ? n(h) : Lt(n, h)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(e) : Lt(l, e), i.menu = { ...i.menu, className: F((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ Fe(Oh, { type: "dropdown", dropdown: i, ...r });
}
function t0({
  key: t,
  page: e,
  type: n,
  btnType: o,
  pagerInfo: i,
  size: r,
  onClick: l,
  onChange: c,
  linkCreator: _,
  ...h
}) {
  const s = { ...h };
  let d;
  const f = (v) => {
    var p;
    d = Number((p = v.target) == null ? void 0 : p.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, a = (v) => {
    if (!(v != null && v.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const p = _r(i, d);
    c && !c({ info: p, event: v }) || (v.target.href = s.url = typeof _ == "function" ? _(p) : Lt(_, p));
  }, u = _r(i, e || 0);
  return s.url = typeof _ == "function" ? _(u) : Lt(_, u), s.className = F("input-group-addon", s.className), /* @__PURE__ */ Fe("div", { className: F("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ Fe("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ Fe(ee, { type: o, ...s, onClick: a })
  ] });
}
var ro;
let e0 = (ro = class extends Xn {
  get pagerInfo() {
    const { page: e = 1, recTotal: n = 0, recPerPage: o = 10 } = this.props;
    return { page: e, recTotal: n, recPerPage: o, pageTotal: o ? Math.ceil(n / o) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, n, o) {
    const i = super.getItemRenderProps(e, n, o), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, L(ro, "NAME", "pager"), L(ro, "defaultProps", {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}), L(ro, "ItemComponents", {
  ...Xn.ItemComponents,
  link: Xb,
  info: Zb,
  nav: Jb,
  "size-menu": Qb,
  goto: t0
}), ro);
class nf extends $t {
}
L(nf, "NAME", "pager"), L(nf, "Component", e0);
var up, dt, hp, Po, of, dp = {}, pp = [], n0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Oe(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function mp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ac(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++hp };
  return i == null && dt.vnode != null && dt.vnode(r), r;
}
function o0() {
  return { current: null };
}
function la(t) {
  return t.children;
}
function Be(t, e) {
  this.props = t, this.context = e;
}
function fr(t, e) {
  if (e == null)
    return t.__ ? fr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? fr(t) : null;
}
function gp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return gp(t);
  }
}
function rf(t) {
  (!t.__d && (t.__d = !0) && Po.push(t) && !li.__r++ || of !== dt.debounceRendering) && ((of = dt.debounceRendering) || setTimeout)(li);
}
function li() {
  for (var t; li.__r = Po.length; )
    t = Po.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Po = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Oe({}, r)).__v = r.__v + 1, wp(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? fr(r), r.__h), s0(o, r), r.__e != l && gp(r)));
    });
}
function yp(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || pp, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ac(null, a, null, null, a) : Array.isArray(a) ? ac(la, { children: a }, null, null, null) : a.__b > 0 ? ac(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      wp(t, a, f = f || dp, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = vp(a, _, t) : _ = bp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = fr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && kp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      $p(p[s], p[++s], p[++s]);
}
function vp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? vp(o, e, n) : bp(n, o, o, i, o.__e, e));
  return e;
}
function bp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function r0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ci(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ci(t, r, e[r], n[r], o);
}
function sf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || n0.test(e) ? n : n + "px";
}
function ci(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || sf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || sf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? cf : lf, r) : t.removeEventListener(e, r ? cf : lf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function lf(t) {
  this.l[t.type + !1](dt.event ? dt.event(t) : t);
}
function cf(t) {
  this.l[t.type + !0](dt.event ? dt.event(t) : t);
}
function wp(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = dt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Be(p, g), s.constructor = y, s.render = l0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Oe({}, s.__s)), Oe(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = dt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Oe(Oe({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === la && h.key == null ? h.props.children : h, yp(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = i0(n.__e, e, n, o, i, r, l, _);
    (h = dt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), dt.__e(x, e, n);
  }
}
function s0(t, e) {
  dt.__c && dt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      dt.__e(o, n.__v);
    }
  });
}
function i0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && up.call(t.childNodes), h = (d = n.props || dp).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (r0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, yp(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && fr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && mp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ci(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ci(t, "checked", u, d.checked, !1));
  }
  return t;
}
function $p(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    dt.__e(o, n);
  }
}
function kp(t, e, n) {
  var o, i;
  if (dt.unmount && dt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || $p(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        dt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && kp(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || mp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function l0(t, e, n) {
  return this.constructor(t, n);
}
up = pp.slice, dt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, hp = 0, Be.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Oe({}, this.state), typeof t == "function" && (t = t(Oe({}, n), this.props)), t && Oe(n, t), t != null && this.__v && (e && this._sb.push(e), rf(this));
}, Be.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), rf(this));
}, Be.prototype.render = la, Po = [], li.__r = 0;
var c0 = 0;
function Q(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --c0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return dt.vnode && dt.vnode(_), _;
}
let a0 = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Yi;
class _0 extends Be {
  constructor() {
    super(...arguments);
    T(this, Yi, (n) => {
      var l;
      const { onDeselect: o, selections: i } = this.props, r = (l = n.target.closest(".picker-deselect-btn")) == null ? void 0 : l.dataset.idx;
      r && o && (i != null && i.length) && (n.stopPropagation(), o([i[+r]], n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: i,
      placeholder: r,
      focused: l,
      selections: c = [],
      onClick: _,
      children: h
    } = this.props;
    let s;
    return c.length ? s = /* @__PURE__ */ Q("div", { className: "picker-multi-selections", children: c.map((d, f) => /* @__PURE__ */ Q("div", { className: "picker-multi-selection", children: [
      d.text ?? d.value,
      /* @__PURE__ */ Q("div", { className: "picker-deselect-btn btn", onClick: b(this, Yi), "data-idx": f, children: /* @__PURE__ */ Q("span", { className: "close" }) })
    ] })) }) : s = /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-multi form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: _,
        children: [
          s,
          h,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
Yi = new WeakMap();
var Gi;
class f0 extends Be {
  constructor() {
    super(...arguments);
    T(this, Gi, (n) => {
      const { onDeselect: o, selections: i } = this.props;
      o && (i != null && i.length) && (n.stopPropagation(), o(i, n));
    });
  }
  render() {
    const {
      className: n,
      style: o,
      disabled: i,
      placeholder: r,
      focused: l,
      selections: c = [],
      onDeselect: _,
      onClick: h,
      children: s
    } = this.props, [d] = c, f = d ? /* @__PURE__ */ Q("span", { className: "picker-single-selection", children: d.text ?? d.value }) : /* @__PURE__ */ Q("span", { className: "picker-select-placeholder", children: r }), a = d && _ ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-deselect-btn", onClick: b(this, Gi), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ Q(
      "div",
      {
        className: F("picker-select picker-select-single form-control", n, { disabled: i, focused: l }),
        style: o,
        onClick: h,
        children: [
          f,
          s,
          a,
          /* @__PURE__ */ Q("span", { class: "caret" })
        ]
      }
    );
  }
}
Gi = new WeakMap();
var qi, xp, Nr, Xi, Dr, Ki;
class u0 extends Be {
  constructor() {
    super(...arguments);
    T(this, qi);
    L(this, "state", { keys: "", shown: !1 });
    T(this, Nr, (n) => {
      var o;
      (o = n.target) != null && o.closest(`#picker-menu-${this.props.id}`) || this.hide();
    });
    T(this, Xi, ({ item: n }) => {
      const o = this.props.items.find((i) => i.value === n.key);
      o && this.props.onSelectItem(o);
    });
    T(this, Dr, (n) => {
      this.setState({ keys: n.target.value });
    });
    T(this, Ki, () => {
      this.setState({ keys: "" });
    });
  }
  componentDidMount() {
    document.addEventListener("click", b(this, Nr)), this.show();
  }
  componentWillUnmount() {
    document.removeEventListener("click", b(this, Nr));
  }
  show() {
    this.state.shown || this.setState({ shown: !0 });
  }
  hide() {
    this.state.shown && this.setState({ shown: !1 }, () => {
      window.setTimeout(() => {
        var n, o;
        (o = (n = this.props).onRequestHide) == null || o.call(n);
      }, 200);
    });
  }
  render() {
    const {
      id: n,
      search: o,
      className: i,
      style: r = {},
      maxHeight: l,
      maxWidth: c,
      width: _,
      menu: h,
      searchHint: s
    } = this.props, { shown: d, keys: f } = this.state, a = f.trim().length;
    return /* @__PURE__ */ Q("div", { className: F("picker-menu", i, { shown: d, "has-search": a }), id: `picker-menu-${n}`, style: { maxHeight: l, maxWidth: c, width: _, ...r }, children: [
      o ? /* @__PURE__ */ Q("div", { className: "picker-menu-search", children: [
        /* @__PURE__ */ Q("input", { className: "form-control picker-menu-search-input", type: "text", placeholder: s, value: f, onChange: b(this, Dr), onInput: b(this, Dr) }),
        a ? /* @__PURE__ */ Q("button", { type: "button", className: "btn picker-menu-search-clear", onClick: b(this, Ki), children: /* @__PURE__ */ Q("span", { className: "close" }) }) : /* @__PURE__ */ Q("span", { className: "magnifier" })
      ] }) : null,
      /* @__PURE__ */ Q(Vc, { className: "picker-menu-list", items: W(this, qi, xp).call(this), onClickItem: b(this, Xi), ...h })
    ] });
  }
}
qi = new WeakSet(), xp = function() {
  const { selections: n, items: o } = this.props, i = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((l) => l.length);
  return o.reduce((l, c) => {
    const {
      value: _,
      keys: h,
      text: s,
      ...d
    } = c;
    if (!r.length || r.every((f) => _.toLowerCase().includes(f) || (h == null ? void 0 : h.toLowerCase().includes(f)) || typeof s == "string" && s.toLowerCase().includes(f))) {
      let f = s ?? _;
      typeof f == "string" && r.length && (f = /* @__PURE__ */ Q("span", { dangerouslySetInnerHTML: { __html: r.reduce((a, u) => a.replace(u, `<span class="picker-menu-item-match">${u}</span>`), f) } })), l.push({
        key: _,
        active: i.has(_),
        text: f,
        ...d
      });
    }
    return l;
  }, []);
}, Nr = new WeakMap(), Xi = new WeakMap(), Dr = new WeakMap(), Ki = new WeakMap();
function af(t) {
  const e = /* @__PURE__ */ new Set();
  return t.reduce((n, o) => (e.has(o) || (e.add(o), n.push(o)), n), []);
}
var mc, Pr, Or, Hr, Hn, xs, Wr, Mc, Zi, Sp, Ji, Cp, Qi, tl, el, nl, ol, Ep;
let h0 = (mc = class extends Be {
  constructor(n) {
    super(n);
    T(this, Hn);
    T(this, Wr);
    T(this, Zi);
    T(this, Ji);
    T(this, ol);
    T(this, Pr, 0);
    T(this, Or, a0());
    T(this, Hr, o0());
    T(this, Qi, (n, o) => {
      const { valueList: i } = this, r = new Set(n.map((c) => c.value)), l = i.filter((c) => !r.has(c));
      this.setState({ value: l.length ? l.join(this.props.valueSplitter ?? ",") : void 0 });
    });
    T(this, tl, (n) => {
      console.log("#handleSelectClick", n), this.setState({ open: !0 });
    });
    T(this, el, () => {
      this.close();
    });
    T(this, nl, (n) => {
      this.props.multi ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var o;
        (o = b(this, Hr).current) == null || o.hide();
      });
    });
    this.state = {
      value: W(this, Zi, Sp).call(this, n.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(n.items) ? n.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return W(this, Wr, Mc).call(this, this.state.value);
  }
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  async loadItemList() {
    let { items: n } = this.props;
    if (typeof n == "function") {
      const i = ++Ea(this, Pr)._;
      if (await W(this, Hn, xs).call(this, { loading: !0, items: [] }), n = await n(), b(this, Pr) !== i)
        return [];
    }
    const o = {};
    return Array.isArray(n) && this.state.items !== n && (o.items = n), this.state.loading && (o.loading = !1), Object.keys(o).length && await W(this, Hn, xs).call(this, o), n;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((n, o) => (n[o.value] = o, n), {});
  }
  getItemByValue(n) {
    return this.getItemList().find((o) => o.value === n);
  }
  getSelections() {
    const n = this.getItemMap();
    return this.valueList.map((o) => n[o] || { value: o });
  }
  async toggle(n) {
    if (n === void 0)
      n = !this.state.open;
    else if (n === this.state.open)
      return;
    await W(this, Hn, xs).call(this, { open: n }), n && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(n, o) {
    const { valueList: i } = this, r = i.indexOf(n);
    o !== !!r && (r > -1 ? i.splice(r, 1) : i.push(n), this.setState({ value: i.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: n,
      style: o,
      children: i,
      multi: r
    } = this.props, l = r ? _0 : f0;
    return /* @__PURE__ */ Q("div", { className: F("picker", n), style: o, id: `picker-${b(this, Or)}`, children: [
      /* @__PURE__ */ Q(l, { ...W(this, Ji, Cp).call(this) }),
      i,
      this.state.open ? /* @__PURE__ */ Q(u0, { ...W(this, ol, Ep).call(this), ref: b(this, Hr) }) : null
    ] });
  }
}, Pr = new WeakMap(), Or = new WeakMap(), Hr = new WeakMap(), Hn = new WeakSet(), xs = function(n) {
  return new Promise((o) => {
    this.setState(n, o);
  });
}, Wr = new WeakSet(), Mc = function(n) {
  return typeof n == "string" ? af(n.split(this.props.valueSplitter ?? ",")) : Array.isArray(n) ? af(n) : [];
}, Zi = new WeakSet(), Sp = function(n) {
  const o = W(this, Wr, Mc).call(this, n);
  return o.length ? o.join(this.props.valueSplitter ?? ",") : void 0;
}, Ji = new WeakSet(), Cp = function() {
  const { placeholder: n, disabled: o } = this.props, { open: i } = this.state;
  return {
    focused: i,
    placeholder: n,
    disabled: o,
    selections: this.getSelections(),
    onClick: b(this, tl),
    onDeselect: b(this, Qi)
  };
}, Qi = new WeakMap(), tl = new WeakMap(), el = new WeakMap(), nl = new WeakMap(), ol = new WeakSet(), Ep = function() {
  const { search: n, menuClass: o, menuWidth: i, menuStyle: r, menuMaxHeight: l, menuMaxWidth: c } = this.props, { items: _ } = this.state;
  return {
    id: b(this, Or),
    items: _,
    selections: this.valueList,
    search: n === !0 || typeof n == "number" && n <= _.length,
    style: r,
    className: o,
    width: i,
    maxHeight: l,
    maxWidth: c,
    onRequestHide: b(this, el),
    onSelectItem: b(this, nl)
  };
}, L(mc, "defaultProps", {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "auto",
  menuMaxHeight: 400
}), mc);
class _f extends $t {
}
L(_f, "NAME", "picker"), L(_f, "Component", h0);
var Gl, rt, Ap, Oo, ff, ai = {}, Tp = [], d0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function He(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Mp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Lp(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Gl.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Ss(t, l, o, i, null);
}
function Ss(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ap };
  return i == null && rt.vnode != null && rt.vnode(r), r;
}
function ss() {
  return { current: null };
}
function ql(t) {
  return t.children;
}
function Ho(t, e) {
  this.props = t, this.context = e;
}
function ur(t, e) {
  if (e == null)
    return t.__ ? ur(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ur(t) : null;
}
function Rp(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Rp(t);
  }
}
function uf(t) {
  (!t.__d && (t.__d = !0) && Oo.push(t) && !_i.__r++ || ff !== rt.debounceRendering) && ((ff = rt.debounceRendering) || setTimeout)(_i);
}
function _i() {
  for (var t; _i.__r = Oo.length; )
    t = Oo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Oo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = He({}, r)).__v = r.__v + 1, ca(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? ur(r), r.__h), Op(o, r), r.__e != l && Rp(r)));
    });
}
function Np(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Tp, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Ss(null, a, null, null, a) : Array.isArray(a) ? Ss(ql, { children: a }, null, null, null) : a.__b > 0 ? Ss(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      ca(t, a, f = f || ai, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Dp(a, _, t) : _ = Pp(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = ur(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && Wp(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Hp(p[s], p[++s], p[++s]);
}
function Dp(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Dp(o, e, n) : Pp(n, o, o, i, o.__e, e));
  return e;
}
function Pp(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function p0(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || fi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || fi(t, r, e[r], n[r], o);
}
function hf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || d0.test(e) ? n : n + "px";
}
function fi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || hf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || hf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? pf : df, r) : t.removeEventListener(e, r ? pf : df, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function df(t) {
  this.l[t.type + !1](rt.event ? rt.event(t) : t);
}
function pf(t) {
  this.l[t.type + !0](rt.event ? rt.event(t) : t);
}
function ca(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = rt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Ho(p, g), s.constructor = y, s.render = g0), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = He({}, s.__s)), He(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = rt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = He(He({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ql && h.key == null ? h.props.children : h, Np(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = m0(n.__e, e, n, o, i, r, l, _);
    (h = rt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), rt.__e(x, e, n);
  }
}
function Op(t, e) {
  rt.__c && rt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      rt.__e(o, n.__v);
    }
  });
}
function m0(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Gl.call(t.childNodes), h = (d = n.props || ai).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (p0(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Np(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && ur(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Mp(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && fi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && fi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Hp(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    rt.__e(o, n);
  }
}
function Wp(t, e, n) {
  var o, i;
  if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Hp(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        rt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Wp(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Mp(t.__e), t.__ = t.__e = t.__d = void 0;
}
function g0(t, e, n) {
  return this.constructor(t, n);
}
function y0(t, e, n) {
  var o, i, r;
  rt.__ && rt.__(t, e), i = (o = typeof n == "function") ? null : n && n.__k || e.__k, r = [], ca(e, t = (!o && n || e).__k = Lp(ql, null, [t]), i || ai, ai, e.ownerSVGElement !== void 0, !o && n ? [n] : i ? null : e.firstChild ? Gl.call(e.childNodes) : null, r, !o && n ? n : i ? i.__e : e.firstChild, o), Op(r, t);
}
Gl = Tp.slice, rt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Ap = 0, Ho.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = He({}, this.state), typeof t == "function" && (t = t(He({}, n), this.props)), t && He(n, t), t != null && this.__v && (e && this._sb.push(e), uf(this));
}, Ho.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), uf(this));
}, Ho.prototype.render = ql, Oo = [], _i.__r = 0;
var v0 = 0;
function Nt(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --v0, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return rt.vnode && rt.vnode(_), _;
}
var ui = {}, b0 = {
  get exports() {
    return ui;
  },
  set exports(t) {
    ui = t;
  }
};
(function(t, e) {
  (function(n, o) {
    t.exports = o();
  })(Rd, function() {
    var n = 1e3, o = 6e4, i = 36e5, r = "millisecond", l = "second", c = "minute", _ = "hour", h = "day", s = "week", d = "month", f = "quarter", a = "year", u = "date", v = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var S = ["th", "st", "nd", "rd"], $ = N % 100;
      return "[" + N + (S[($ - 20) % 10] || S[$] || S[0]) + "]";
    } }, w = function(N, S, $) {
      var D = String(N);
      return !D || D.length >= S ? N : "" + Array(S + 1 - D.length).join($) + N;
    }, k = { s: w, z: function(N) {
      var S = -N.utcOffset(), $ = Math.abs(S), D = Math.floor($ / 60), M = $ % 60;
      return (S <= 0 ? "+" : "-") + w(D, 2, "0") + ":" + w(M, 2, "0");
    }, m: function N(S, $) {
      if (S.date() < $.date())
        return -N($, S);
      var D = 12 * ($.year() - S.year()) + ($.month() - S.month()), M = S.clone().add(D, d), O = $ - M < 0, P = S.clone().add(D + (O ? -1 : 1), d);
      return +(-(D + ($ - M) / (O ? M - P : P - M)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: a, w: s, d: h, D: u, h: _, m: c, s: l, ms: r, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, C = "en", A = {};
    A[C] = g;
    var E = function(N) {
      return N instanceof V;
    }, y = function N(S, $, D) {
      var M;
      if (!S)
        return C;
      if (typeof S == "string") {
        var O = S.toLowerCase();
        A[O] && (M = O), $ && (A[O] = $, M = O);
        var P = S.split("-");
        if (!M && P.length > 1)
          return N(P[0]);
      } else {
        var I = S.name;
        A[I] = S, M = I;
      }
      return !D && M && (C = M), M || !D && C;
    }, x = function(N, S) {
      if (E(N))
        return N.clone();
      var $ = typeof S == "object" ? S : {};
      return $.date = N, $.args = arguments, new V($);
    }, R = k;
    R.l = y, R.i = E, R.w = function(N, S) {
      return x(N, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var V = function() {
      function N($) {
        this.$L = y($.locale, null, !0), this.parse($);
      }
      var S = N.prototype;
      return S.parse = function($) {
        this.$d = function(D) {
          var M = D.date, O = D.utc;
          if (M === null)
            return new Date(NaN);
          if (R.u(M))
            return new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var P = M.match(p);
            if (P) {
              var I = P[2] - 1 || 0, z = (P[7] || "0").substring(0, 3);
              return O ? new Date(Date.UTC(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z)) : new Date(P[1], I, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, z);
            }
          }
          return new Date(M);
        }($), this.$x = $.x || {}, this.init();
      }, S.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, S.$utils = function() {
        return R;
      }, S.isValid = function() {
        return this.$d.toString() !== v;
      }, S.isSame = function($, D) {
        var M = x($);
        return this.startOf(D) <= M && M <= this.endOf(D);
      }, S.isAfter = function($, D) {
        return x($) < this.startOf(D);
      }, S.isBefore = function($, D) {
        return this.endOf(D) < x($);
      }, S.$g = function($, D, M) {
        return R.u($) ? this[D] : this.set(M, $);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function($, D) {
        var M = this, O = !!R.u(D) || D, P = R.p($), I = function(st, G) {
          var it = R.w(M.$u ? Date.UTC(M.$y, G, st) : new Date(M.$y, G, st), M);
          return O ? it : it.endOf(h);
        }, z = function(st, G) {
          return R.w(M.toDate()[st].apply(M.toDate("s"), (O ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), M);
        }, j = this.$W, X = this.$M, vt = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case a:
            return O ? I(1, 0) : I(31, 11);
          case d:
            return O ? I(1, X) : I(0, X + 1);
          case s:
            var K = this.$locale().weekStart || 0, yt = (j < K ? j + 7 : j) - K;
            return I(O ? vt - yt : vt + (6 - yt), X);
          case h:
          case u:
            return z(U + "Hours", 0);
          case _:
            return z(U + "Minutes", 1);
          case c:
            return z(U + "Seconds", 2);
          case l:
            return z(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function($) {
        return this.startOf($, !1);
      }, S.$set = function($, D) {
        var M, O = R.p($), P = "set" + (this.$u ? "UTC" : ""), I = (M = {}, M[h] = P + "Date", M[u] = P + "Date", M[d] = P + "Month", M[a] = P + "FullYear", M[_] = P + "Hours", M[c] = P + "Minutes", M[l] = P + "Seconds", M[r] = P + "Milliseconds", M)[O], z = O === h ? this.$D + (D - this.$W) : D;
        if (O === d || O === a) {
          var j = this.clone().set(u, 1);
          j.$d[I](z), j.init(), this.$d = j.set(u, Math.min(this.$D, j.daysInMonth())).$d;
        } else
          I && this.$d[I](z);
        return this.init(), this;
      }, S.set = function($, D) {
        return this.clone().$set($, D);
      }, S.get = function($) {
        return this[R.p($)]();
      }, S.add = function($, D) {
        var M, O = this;
        $ = Number($);
        var P = R.p(D), I = function(X) {
          var vt = x(O);
          return R.w(vt.date(vt.date() + Math.round(X * $)), O);
        };
        if (P === d)
          return this.set(d, this.$M + $);
        if (P === a)
          return this.set(a, this.$y + $);
        if (P === h)
          return I(1);
        if (P === s)
          return I(7);
        var z = (M = {}, M[c] = o, M[_] = i, M[l] = n, M)[P] || 1, j = this.$d.getTime() + $ * z;
        return R.w(j, this);
      }, S.subtract = function($, D) {
        return this.add(-1 * $, D);
      }, S.format = function($) {
        var D = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || v;
        var O = $ || "YYYY-MM-DDTHH:mm:ssZ", P = R.z(this), I = this.$H, z = this.$m, j = this.$M, X = M.weekdays, vt = M.months, U = function(G, it, Et, At) {
          return G && (G[it] || G(D, O)) || Et[it].slice(0, At);
        }, K = function(G) {
          return R.s(I % 12 || 12, G, "0");
        }, yt = M.meridiem || function(G, it, Et) {
          var At = G < 12 ? "AM" : "PM";
          return Et ? At.toLowerCase() : At;
        }, st = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: j + 1, MM: R.s(j + 1, 2, "0"), MMM: U(M.monthsShort, j, vt, 3), MMMM: U(vt, j), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: U(M.weekdaysMin, this.$W, X, 2), ddd: U(M.weekdaysShort, this.$W, X, 3), dddd: X[this.$W], H: String(I), HH: R.s(I, 2, "0"), h: K(1), hh: K(2), a: yt(I, z, !0), A: yt(I, z, !1), m: String(z), mm: R.s(z, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: P };
        return O.replace(m, function(G, it) {
          return it || st[G] || P.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function($, D, M) {
        var O, P = R.p(D), I = x($), z = (I.utcOffset() - this.utcOffset()) * o, j = this - I, X = R.m(this, I);
        return X = (O = {}, O[a] = X / 12, O[d] = X, O[f] = X / 3, O[s] = (j - z) / 6048e5, O[h] = (j - z) / 864e5, O[_] = j / i, O[c] = j / o, O[l] = j / n, O)[P] || j, M ? X : R.a(X);
      }, S.daysInMonth = function() {
        return this.endOf(d).$D;
      }, S.$locale = function() {
        return A[this.$L];
      }, S.locale = function($, D) {
        if (!$)
          return this.$L;
        var M = this.clone(), O = y($, D, !0);
        return O && (M.$L = O), M;
      }, S.clone = function() {
        return R.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), B = V.prototype;
    return x.prototype = B, [["$ms", r], ["$s", l], ["$m", c], ["$H", _], ["$W", h], ["$M", d], ["$y", a], ["$D", u]].forEach(function(N) {
      B[N[1]] = function(S) {
        return this.$g(S, N[0], N[1]);
      };
    }), x.extend = function(N, S) {
      return N.$i || (N(S, V, x), N.$i = !0), x;
    }, x.locale = y, x.isDayjs = E, x.unix = function(N) {
      return x(1e3 * N);
    }, x.en = A[C], x.Ls = A, x.p = {}, x;
  });
})(b0);
const w0 = (t = "00:00:00") => {
  const e = ui(`1989-01-01 ${t}`);
  return {
    hour: e.hour(),
    minute: e.minute(),
    second: e.second()
  };
};
function $0() {
  let t = new Array(24).fill(0), e = new Array(60).fill(0), n = new Array(60).fill(0);
  return t = t.map((o, i) => o + i), e = e.map((o, i) => o + i), n = n.map((o, i) => o + i), { hourList: t, minuteList: e, secondList: n };
}
class k0 extends Ho {
  constructor() {
    super(...arguments);
    L(this, "cellHeight", 24);
    L(this, "ref", ss());
    L(this, "hourRef", ss());
    L(this, "minuteRef", ss());
    L(this, "secondRef", ss());
    L(this, "state", {
      selectTime: this.props.value || "00:00:00"
    });
  }
  handleMoveTime(n) {
    var i, r, l;
    const o = "smooth";
    n.hour && this.hourRef.current && ((i = this.hourRef.current) == null || i.scrollTo({ behavior: o, top: n.hour * this.cellHeight })), n.minute && this.minuteRef.current && ((r = this.minuteRef.current) == null || r.scrollTo({ behavior: o, top: n.minute * this.cellHeight })), n.second && this.secondRef.current && ((l = this.secondRef.current) == null || l.scrollTo({ behavior: o, top: n.second * this.cellHeight }));
  }
  handleChange(n) {
    this.handleMoveTime(n), this.setState({ selectTime: this.getTimeString(n) });
  }
  getTimeString(n) {
    return this.props.showSeconds ? `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}:${(n == null ? void 0 : n.second) && this.addZero(n.second) || "00"}` : `${(n == null ? void 0 : n.hour) && this.addZero(n.hour) || "00"}:${(n == null ? void 0 : n.minute) && this.addZero(n.minute) || "00"}`;
  }
  addZero(n) {
    return n < 10 ? `0${n}` : n;
  }
  renderColumn(n, o) {
    const i = w0(this.state.selectTime);
    return o.map((r) => {
      const l = i[n] === r, c = { ...i, [n]: r };
      return /* @__PURE__ */ Nt(
        "button",
        {
          className: F("btn", "size-sm", "ghost", "flex", { active: l }),
          type: "button",
          onClick: () => this.handleChange(c),
          children: this.addZero(r)
        },
        `unit-${n}-${r}`
      );
    });
  }
  onSubmit() {
    console.log(this.state.selectTime), this.props.onChange && this.props.onChange(this.state.selectTime);
  }
  onClear() {
    this.setState({ selectTime: "" }), this.props.onChange && this.props.onChange("");
  }
  render() {
    const { showSeconds: n, style: o } = this.props, { hourList: i, minuteList: r, secondList: l } = $0();
    return /* @__PURE__ */ Nt("div", { className: F("timepicker-timepanel", "pt-px"), style: o, ref: this.ref, children: [
      /* @__PURE__ */ Nt("div", { className: F("flex", " justify-around", "p-px", "not-hide-timepicker"), children: [
        /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.hourRef, children: this.renderColumn("hour", i) }) }),
        /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.minuteRef, children: this.renderColumn("minute", r) }) }),
        n && /* @__PURE__ */ Nt("div", { className: "overflow-hidden", children: /* @__PURE__ */ Nt("div", { className: "timepicker-timepanel-select-col", ref: this.secondRef, children: this.renderColumn("second", l) }) })
      ] }),
      /* @__PURE__ */ Nt("div", { className: F("timepicker-timepanel-actions", "flex", "p-px", "justify-between", "align-center"), children: [
        /* @__PURE__ */ Nt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onClear.bind(this), children: "清除" }),
        /* @__PURE__ */ Nt("button", { className: F("btn", "size-sm", "ghost", "text-primary"), type: "button", onClick: this.onSubmit.bind(this), children: "确认" })
      ] })
    ] });
  }
}
function Jr(t) {
  return t.split("-")[1];
}
function aa(t) {
  return t === "y" ? "height" : "width";
}
function Zn(t) {
  return t.split("-")[0];
}
function Xl(t) {
  return ["top", "bottom"].includes(Zn(t)) ? "x" : "y";
}
function mf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Xl(e), _ = aa(c), h = o[_] / 2 - i[_] / 2, s = Zn(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Jr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const x0 = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = mf(h, o, _), f = o, a = {}, u = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = mf(h, f, _)), v = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function S0(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ip(t) {
  return typeof t != "number" ? S0(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function hi(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function C0(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = Ip(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = hi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = hi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const E0 = Math.min, A0 = Math.max;
function T0(t, e, n) {
  return A0(t, E0(e, n));
}
const M0 = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = Ip(o), s = {
      x: i,
      y: r
    }, d = Xl(l), f = aa(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[v], E = w / 2 - a[f] / 2 + k, y = T0(C, E, A), R = Jr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[v]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), L0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function di(t) {
  return t.replace(/left|right|bottom|top/g, (e) => L0[e]);
}
function R0(t, e, n) {
  n === void 0 && (n = !1);
  const o = Jr(t), i = Xl(t), r = aa(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = di(l)), {
    main: l,
    cross: di(l)
  };
}
const N0 = {
  start: "end",
  end: "start"
};
function Lc(t) {
  return t.replace(/start|end/g, (e) => N0[e]);
}
function D0(t) {
  const e = di(t);
  return [Lc(t), e, Lc(e)];
}
function P0(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function O0(t, e, n, o) {
  const i = Jr(t);
  let r = P0(Zn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Lc)))), r;
}
const H0 = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...v
      } = t, p = Zn(o), m = Zn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [di(l)] : D0(l));
      !d && a !== "none" && w.push(...O0(l, u, a, g));
      const k = [l, ...w], C = await C0(e, v), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = R0(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var y;
        const R = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function W0(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Zn(n), c = Jr(n), _ = Xl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const I0 = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await W0(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ut(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function re(t) {
  return Ut(t).getComputedStyle(t);
}
function Ve(t) {
  return Fp(t) ? (t.nodeName || "").toLowerCase() : "";
}
let is;
function Up() {
  if (is)
    return is;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (is = t.brands.map((e) => e.brand + "/" + e.version).join(" "), is) : navigator.userAgent;
}
function me(t) {
  return t instanceof Ut(t).HTMLElement;
}
function Yt(t) {
  return t instanceof Ut(t).Element;
}
function Fp(t) {
  return t instanceof Ut(t).Node;
}
function gf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ut(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Kl(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = re(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function U0(t) {
  return ["table", "td", "th"].includes(Ve(t));
}
function _a(t) {
  const e = /firefox/i.test(Up()), n = re(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function Bp() {
  return !/^((?!chrome|android).)*safari/i.test(Up());
}
function fa(t) {
  return ["html", "body", "#document"].includes(Ve(t));
}
const yf = Math.min, Wo = Math.max, pi = Math.round;
function jp(t) {
  const e = re(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = pi(n) !== i || pi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function zp(t) {
  return Yt(t) ? t : t.contextElement;
}
const Vp = {
  x: 1,
  y: 1
};
function vn(t) {
  const e = zp(t);
  if (!me(e))
    return Vp;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = jp(e);
  let l = (r ? pi(n.width) : n.width) / o, c = (r ? pi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function un(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = zp(t);
  let _ = Vp;
  e && (o ? Yt(o) && (_ = vn(o)) : _ = vn(t));
  const h = c ? Ut(c) : window, s = !Bp() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const v = Ut(c), p = o && Yt(o) ? Ut(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = vn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ut(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Xe(t) {
  return ((Fp(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Zl(t) {
  return Yt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Yp(t) {
  return un(Xe(t)).left + Zl(t).scrollLeft;
}
function F0(t, e, n) {
  const o = me(e), i = Xe(e), r = un(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ve(e) !== "body" || Kl(i)) && (l = Zl(e)), me(e)) {
      const _ = un(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = Yp(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function hr(t) {
  if (Ve(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (gf(t) ? t.host : null) || // Fallback
    Xe(t)
  );
  return gf(e) ? e.host : e;
}
function vf(t) {
  return !me(t) || re(t).position === "fixed" ? null : t.offsetParent;
}
function B0(t) {
  let e = hr(t);
  for (; me(e) && !fa(e); ) {
    if (_a(e))
      return e;
    e = hr(e);
  }
  return null;
}
function bf(t) {
  const e = Ut(t);
  let n = vf(t);
  for (; n && U0(n) && re(n).position === "static"; )
    n = vf(n);
  return n && (Ve(n) === "html" || Ve(n) === "body" && re(n).position === "static" && !_a(n)) ? e : n || B0(t) || e;
}
function j0(t) {
  return jp(t);
}
function z0(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = me(n), r = Xe(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((Ve(n) !== "body" || Kl(r)) && (l = Zl(n)), me(n))) {
    const h = un(n);
    c = vn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function V0(t, e) {
  const n = Ut(t), o = Xe(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = Bp();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Y0(t) {
  var e;
  const n = Xe(t), o = Zl(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Wo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Wo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + Yp(t);
  const _ = -o.scrollTop;
  return re(i || n).direction === "rtl" && (c += Wo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function Gp(t) {
  const e = hr(t);
  return fa(e) ? t.ownerDocument.body : me(e) && Kl(e) ? e : Gp(e);
}
function Io(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = Gp(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ut(o);
  return i ? e.concat(r, r.visualViewport || [], Kl(o) ? o : []) : e.concat(o, Io(o));
}
function G0(t, e) {
  const n = un(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = me(t) ? vn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function wf(t, e, n) {
  return e === "viewport" ? hi(V0(t, n)) : Yt(e) ? G0(e, n) : hi(Y0(Xe(t)));
}
function q0(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Io(t).filter((c) => Yt(c) && Ve(c) !== "body"), i = null;
  const r = re(t).position === "fixed";
  let l = r ? hr(t) : t;
  for (; Yt(l) && !fa(l); ) {
    const c = re(l), _ = _a(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = hr(l);
  }
  return e.set(t, o), o;
}
function X0(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? q0(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = wf(e, s, i);
    return h.top = Wo(d.top, h.top), h.right = yf(d.right, h.right), h.bottom = yf(d.bottom, h.bottom), h.left = Wo(d.left, h.left), h;
  }, wf(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const K0 = {
  getClippingRect: X0,
  convertOffsetParentRelativeRectToViewportRelativeRect: z0,
  isElement: Yt,
  getDimensions: j0,
  getOffsetParent: bf,
  getDocumentElement: Xe,
  getScale: vn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || bf, r = this.getDimensions;
    return {
      reference: F0(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => re(t).direction === "rtl"
};
function Z0(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Yt(t) ? Io(t) : t.contextElement ? Io(t.contextElement) : [], ...Io(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Yt(t) && !c && s.observe(t), !Yt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? un(t) : null;
  c && a();
  function a() {
    const u = un(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const J0 = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: K0,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return x0(t, e, {
    ...i,
    platform: r
  });
};
var Wn, In, rn, Ir, xt, Ur, Fr, Rc, rl, qp, sl, Xp, il, Kp, ll, Zp, cl, Jp, al, Qp, _l, tm, fl;
const Je = class extends qt {
  constructor() {
    super(...arguments);
    T(this, Fr);
    T(this, rl);
    T(this, sl);
    T(this, il);
    T(this, ll);
    T(this, cl);
    T(this, al);
    T(this, _l);
    T(this, Wn, void 0);
    T(this, In, 0);
    T(this, rn, void 0);
    T(this, Ir, void 0);
    T(this, xt, void 0);
    T(this, Ur, void 0);
    L(this, "hideLater", () => {
      b(this, fl).call(this), H(this, In, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, fl, () => {
      clearTimeout(b(this, In)), H(this, In, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, rn)) == null ? void 0 : n.classList.contains(Je.CLASS_SHOW);
  }
  get timepicker() {
    return b(this, rn) || W(this, sl, Xp).call(this);
  }
  get trigger() {
    return b(this, Ir) || this.element;
  }
  get elementShowClass() {
    return `with-${Je.NAME}-show`;
  }
  show(n) {
    return H(this, Ir, n), !this.timepicker || !this.element ? !1 : (this.element.classList.add(this.elementShowClass), this.timepicker.classList.add(Je.CLASS_SHOW), W(this, al, Qp).call(this), !0);
  }
  hide() {
    var n, o;
    return (n = b(this, Ur)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, rn)) == null || o.classList.remove(Je.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  static show(n) {
    var l;
    const { event: o, ...i } = n, r = this.ensure(document.body);
    return Object.keys(i).length && r.setOptions(i), r.show(o), (l = o == null ? void 0 : o.stopPropagation) == null || l.call(o), r;
  }
  static hide() {
    const n = this.get(document.body);
    return n == null || n.hide(), n;
  }
  static clear(n) {
    var _, h;
    n instanceof Event && (n = { event: n });
    const { event: o, exclude: i, ignoreSelector: r = ".not-hide-timepicker" } = n || {};
    if (o && r && ((h = (_ = o.target).closest) != null && h.call(_, r)))
      return;
    const l = this.getAll().entries(), c = new Set(i || []);
    for (const [s, d] of l)
      c.has(s) || d.hide();
  }
};
let Ot = Je;
Wn = new WeakMap(), In = new WeakMap(), rn = new WeakMap(), Ir = new WeakMap(), xt = new WeakMap(), Ur = new WeakMap(), Fr = new WeakSet(), Rc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, rl = new WeakSet(), qp = function() {
  const n = W(this, Fr, Rc).call(this);
  return H(this, xt, document.createElement("div")), b(this, xt).style.position = "absolute", b(this, xt).style.width = `${n}px`, b(this, xt).style.height = `${n}px`, b(this, xt).style.transform = "rotate(45deg)", b(this, xt);
}, sl = new WeakSet(), Xp = function() {
  const n = Je.CLASSNAME, o = document.createElement("div");
  return o.classList.add(n), y0(Lp(k0, { ...this.options }), o), this.options.arrow && o.append(W(this, rl, qp).call(this)), o.style.width = "max-content", o.style.position = this.options.strategy, o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, rn, o), o;
}, il = new WeakSet(), Kp = function() {
  var l;
  const n = W(this, Fr, Rc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [I0(n), H0()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && b(this, xt) && ((l = r.middleware) == null || l.push(M0({ element: b(this, xt) }))), r;
}, ll = new WeakSet(), Zp = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, cl = new WeakSet(), Jp = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, al = new WeakSet(), Qp = function() {
  const n = W(this, il, Kp).call(this), o = W(this, _l, tm).call(this);
  H(this, Ur, Z0(o, this.timepicker, () => {
    J0(o, this.timepicker, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.timepicker.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, ll, Zp).call(this, _);
      if (l.arrow && b(this, xt)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(b(this, xt).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-b(this, xt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, cl, Jp).call(this, _)
        });
      }
    });
  }));
}, _l = new WeakSet(), tm = function() {
  return b(this, Wn) || H(this, Wn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), b(this, Wn);
}, fl = new WeakMap(), L(Ot, "NAME", "timepicker"), L(Ot, "CLASSNAME", "timepicker"), L(Ot, "CLASS_SHOW", "show"), L(Ot, "MENU_SELECTOR", ".form-time input:not(.disabled):not(:disabled)"), L(Ot, "DEFAULT", {
  value: ui().format("HH:mm:ss"),
  showSeconds: !1,
  placement: "bottom-start",
  strategy: "absolute",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ot.MENU_SELECTOR);
  n ? Ot.ensure(n).toggle() : Ot.clear({ event: t });
});
const Q0 = (t) => {
  const e = document.getElementsByClassName("with-timepicker-show")[0];
  if (!e)
    return;
  const n = typeof e.closest == "function" ? e.closest(Ot.MENU_SELECTOR) : null;
  !n || !t.target.contains(n) || Ot.clear({ event: t });
};
window.addEventListener("scroll", Q0, !0);
class $f extends $t {
}
L($f, "NAME", "toolbar"), L($f, "Component", Xn);
function Qr(t) {
  return t.split("-")[1];
}
function ua(t) {
  return t === "y" ? "height" : "width";
}
function Jn(t) {
  return t.split("-")[0];
}
function Jl(t) {
  return ["top", "bottom"].includes(Jn(t)) ? "x" : "y";
}
function kf(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, c = Jl(e), _ = ua(c), h = o[_] / 2 - i[_] / 2, s = Jn(e), d = c === "x";
  let f;
  switch (s) {
    case "top":
      f = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Qr(e)) {
    case "start":
      f[c] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      f[c] += h * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const tw = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, c = r.filter(Boolean), _ = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: s,
    y: d
  } = kf(h, o, _), f = o, a = {}, u = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: p,
      fn: m
    } = c[v], {
      x: g,
      y: w,
      data: k,
      reset: C
    } = await m({
      x: s,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: a,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (s = g ?? s, d = w ?? d, a = {
      ...a,
      [p]: {
        ...a[p],
        ...k
      }
    }, C && u <= 50) {
      u++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : C.rects), {
        x: s,
        y: d
      } = kf(h, f, _)), v = -1;
      continue;
    }
  }
  return {
    x: s,
    y: d,
    placement: f,
    strategy: i,
    middlewareData: a
  };
};
function ew(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function em(t) {
  return typeof t != "number" ? ew(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function mi(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function nw(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: _
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: s = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: a = 0
  } = e, u = em(a), p = c[f ? d === "floating" ? "reference" : "floating" : d], m = mi(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null || n ? p : p.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: s,
    strategy: _
  })), g = d === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = mi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: g,
    offsetParent: w,
    strategy: _
  }) : g);
  return {
    top: (m.top - C.top + u.top) / k.y,
    bottom: (C.bottom - m.bottom + u.bottom) / k.y,
    left: (m.left - C.left + u.left) / k.x,
    right: (C.right - m.right + u.right) / k.x
  };
}
const ow = Math.min, rw = Math.max;
function sw(t, e, n) {
  return rw(t, ow(e, n));
}
const iw = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t || {}, {
      x: i,
      y: r,
      placement: l,
      rects: c,
      platform: _
    } = e;
    if (n == null)
      return {};
    const h = em(o), s = {
      x: i,
      y: r
    }, d = Jl(l), f = ua(d), a = await _.getDimensions(n), u = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", p = c.reference[f] + c.reference[d] - s[d] - c.floating[f], m = s[d] - c.reference[d], g = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(n));
    let w = g ? d === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0;
    w === 0 && (w = c.floating[f]);
    const k = p / 2 - m / 2, C = h[u], A = w - a[f] - h[v], E = w / 2 - a[f] / 2 + k, y = sw(C, E, A), R = Qr(l) != null && E != y && c.reference[f] / 2 - (E < C ? h[u] : h[v]) - a[f] / 2 < 0 ? E < C ? C - E : A - E : 0;
    return {
      [d]: s[d] - R,
      data: {
        [d]: y,
        centerOffset: E - y
      }
    };
  }
}), lw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function gi(t) {
  return t.replace(/left|right|bottom|top/g, (e) => lw[e]);
}
function cw(t, e, n) {
  n === void 0 && (n = !1);
  const o = Qr(t), i = Jl(t), r = ua(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = gi(l)), {
    main: l,
    cross: gi(l)
  };
}
const aw = {
  start: "end",
  end: "start"
};
function Nc(t) {
  return t.replace(/start|end/g, (e) => aw[e]);
}
function _w(t) {
  const e = gi(t);
  return [Nc(t), e, Nc(e)];
}
function fw(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function uw(t, e, n, o) {
  const i = Qr(t);
  let r = fw(Jn(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Nc)))), r;
}
const hw = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: _
      } = e, {
        mainAxis: h = !0,
        crossAxis: s = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: a = "none",
        flipAlignment: u = !0,
        ...v
      } = t, p = Jn(o), m = Jn(l) === l, g = await (c.isRTL == null ? void 0 : c.isRTL(_.floating)), w = d || (m || !u ? [gi(l)] : _w(l));
      !d && a !== "none" && w.push(...uw(l, u, a, g));
      const k = [l, ...w], C = await nw(e, v), A = [];
      let E = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (h && A.push(C[p]), s) {
        const {
          main: R,
          cross: V
        } = cw(o, r, g);
        A.push(C[R], C[V]);
      }
      if (E = [...E, {
        placement: o,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var y;
        const R = (((y = i.flip) == null ? void 0 : y.index) || 0) + 1, V = k[R];
        if (V)
          return {
            data: {
              index: R,
              overflows: E
            },
            reset: {
              placement: V
            }
          };
        let B = "bottom";
        switch (f) {
          case "bestFit": {
            var x;
            const N = (x = E.map((S) => [S, S.overflows.filter(($) => $ > 0).reduce(($, D) => $ + D, 0)]).sort((S, $) => S[1] - $[1])[0]) == null ? void 0 : x[0].placement;
            N && (B = N);
            break;
          }
          case "initialPlacement":
            B = l;
            break;
        }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
async function dw(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Jn(n), c = Qr(n), _ = Jl(n) === "x", h = ["left", "top"].includes(l) ? -1 : 1, s = r && _ ? -1 : 1, d = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
    crossAxis: a,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof u == "number" && (a = c === "end" ? u * -1 : u), _ ? {
    x: a * s,
    y: f * h
  } : {
    x: f * h,
    y: a * s
  };
}
const pw = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await dw(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Ft(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function se(t) {
  return Ft(t).getComputedStyle(t);
}
function Ye(t) {
  return om(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ls;
function nm() {
  if (ls)
    return ls;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ls = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ls) : navigator.userAgent;
}
function ge(t) {
  return t instanceof Ft(t).HTMLElement;
}
function Gt(t) {
  return t instanceof Ft(t).Element;
}
function om(t) {
  return t instanceof Ft(t).Node;
}
function xf(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Ft(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ql(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = se(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function mw(t) {
  return ["table", "td", "th"].includes(Ye(t));
}
function ha(t) {
  const e = /firefox/i.test(nm()), n = se(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    // TS 4.1 compat
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function rm() {
  return !/^((?!chrome|android).)*safari/i.test(nm());
}
function da(t) {
  return ["html", "body", "#document"].includes(Ye(t));
}
const Sf = Math.min, Uo = Math.max, yi = Math.round;
function sm(t) {
  const e = se(t);
  let n = parseFloat(e.width), o = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, l = yi(n) !== i || yi(o) !== r;
  return l && (n = i, o = r), {
    width: n,
    height: o,
    fallback: l
  };
}
function im(t) {
  return Gt(t) ? t : t.contextElement;
}
const lm = {
  x: 1,
  y: 1
};
function bn(t) {
  const e = im(t);
  if (!ge(e))
    return lm;
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    fallback: r
  } = sm(e);
  let l = (r ? yi(n.width) : n.width) / o, c = (r ? yi(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
function hn(t, e, n, o) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), c = im(t);
  let _ = lm;
  e && (o ? Gt(o) && (_ = bn(o)) : _ = bn(t));
  const h = c ? Ft(c) : window, s = !rm() && n;
  let d = (l.left + (s && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / _.x, f = (l.top + (s && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / _.y, a = l.width / _.x, u = l.height / _.y;
  if (c) {
    const v = Ft(c), p = o && Gt(o) ? Ft(o) : o;
    let m = v.frameElement;
    for (; m && o && p !== v; ) {
      const g = bn(m), w = m.getBoundingClientRect(), k = getComputedStyle(m);
      w.x += (m.clientLeft + parseFloat(k.paddingLeft)) * g.x, w.y += (m.clientTop + parseFloat(k.paddingTop)) * g.y, d *= g.x, f *= g.y, a *= g.x, u *= g.y, d += w.x, f += w.y, m = Ft(m).frameElement;
    }
  }
  return {
    width: a,
    height: u,
    top: f,
    right: d + a,
    bottom: f + u,
    left: d,
    x: d,
    y: f
  };
}
function Ke(t) {
  return ((om(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function tc(t) {
  return Gt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function cm(t) {
  return hn(Ke(t)).left + tc(t).scrollLeft;
}
function gw(t, e, n) {
  const o = ge(e), i = Ke(e), r = hn(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((Ye(e) !== "body" || Ql(i)) && (l = tc(e)), ge(e)) {
      const _ = hn(e, !0);
      c.x = _.x + e.clientLeft, c.y = _.y + e.clientTop;
    } else
      i && (c.x = cm(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function dr(t) {
  if (Ye(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node
    t.assignedSlot || // DOM Element detected
    t.parentNode || // ShadowRoot detected
    (xf(t) ? t.host : null) || // Fallback
    Ke(t)
  );
  return xf(e) ? e.host : e;
}
function Cf(t) {
  return !ge(t) || se(t).position === "fixed" ? null : t.offsetParent;
}
function yw(t) {
  let e = dr(t);
  for (; ge(e) && !da(e); ) {
    if (ha(e))
      return e;
    e = dr(e);
  }
  return null;
}
function Ef(t) {
  const e = Ft(t);
  let n = Cf(t);
  for (; n && mw(n) && se(n).position === "static"; )
    n = Cf(n);
  return n && (Ye(n) === "html" || Ye(n) === "body" && se(n).position === "static" && !ha(n)) ? e : n || yw(t) || e;
}
function vw(t) {
  return sm(t);
}
function bw(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = ge(n), r = Ke(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 1,
    y: 1
  };
  const _ = {
    x: 0,
    y: 0
  };
  if ((i || !i && o !== "fixed") && ((Ye(n) !== "body" || Ql(r)) && (l = tc(n)), ge(n))) {
    const h = hn(n);
    c = bn(n), _.x = h.x + n.clientLeft, _.y = h.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + _.x,
    y: e.y * c.y - l.scrollTop * c.y + _.y
  };
}
function ww(t, e) {
  const n = Ft(t), o = Ke(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, c = 0, _ = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = rm();
    (h || !h && e === "fixed") && (c = i.offsetLeft, _ = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function $w(t) {
  var e;
  const n = Ke(t), o = tc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = Uo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Uo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let c = -o.scrollLeft + cm(t);
  const _ = -o.scrollTop;
  return se(i || n).direction === "rtl" && (c += Uo(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: c,
    y: _
  };
}
function am(t) {
  const e = dr(t);
  return da(e) ? t.ownerDocument.body : ge(e) && Ql(e) ? e : am(e);
}
function Fo(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = am(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ft(o);
  return i ? e.concat(r, r.visualViewport || [], Ql(o) ? o : []) : e.concat(o, Fo(o));
}
function kw(t, e) {
  const n = hn(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = ge(t) ? bn(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * r.x, c = t.clientHeight * r.y, _ = i * r.x, h = o * r.y;
  return {
    top: h,
    left: _,
    right: _ + l,
    bottom: h + c,
    x: _,
    y: h,
    width: l,
    height: c
  };
}
function Af(t, e, n) {
  return e === "viewport" ? mi(ww(t, n)) : Gt(e) ? kw(e, n) : mi($w(Ke(t)));
}
function xw(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Fo(t).filter((c) => Gt(c) && Ye(c) !== "body"), i = null;
  const r = se(t).position === "fixed";
  let l = r ? dr(t) : t;
  for (; Gt(l) && !da(l); ) {
    const c = se(l), _ = ha(l);
    (r ? !_ && !i : !_ && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? o = o.filter((s) => s !== l) : i = c, l = dr(l);
  }
  return e.set(t, o), o;
}
function Sw(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? xw(e, this._c) : [].concat(n), o], c = l[0], _ = l.reduce((h, s) => {
    const d = Af(e, s, i);
    return h.top = Uo(d.top, h.top), h.right = Sf(d.right, h.right), h.bottom = Sf(d.bottom, h.bottom), h.left = Uo(d.left, h.left), h;
  }, Af(e, c, i));
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    x: _.left,
    y: _.top
  };
}
const Cw = {
  getClippingRect: Sw,
  convertOffsetParentRelativeRectToViewportRelativeRect: bw,
  isElement: Gt,
  getDimensions: vw,
  getOffsetParent: Ef,
  getDocumentElement: Ke,
  getScale: bn,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    const i = this.getOffsetParent || Ef, r = this.getDimensions;
    return {
      reference: gw(e, await i(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => se(t).direction === "rtl"
};
function Ew(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: c = !1
  } = o, _ = i && !c, h = _ || r ? [...Gt(t) ? Fo(t) : t.contextElement ? Fo(t.contextElement) : [], ...Fo(e)] : [];
  h.forEach((u) => {
    _ && u.addEventListener("scroll", n, {
      passive: !0
    }), r && u.addEventListener("resize", n);
  });
  let s = null;
  if (l) {
    let u = !0;
    s = new ResizeObserver(() => {
      u || n(), u = !1;
    }), Gt(t) && !c && s.observe(t), !Gt(t) && t.contextElement && !c && s.observe(t.contextElement), s.observe(e);
  }
  let d, f = c ? hn(t) : null;
  c && a();
  function a() {
    const u = hn(t);
    f && (u.x !== f.x || u.y !== f.y || u.width !== f.width || u.height !== f.height) && n(), f = u, d = requestAnimationFrame(a);
  }
  return n(), () => {
    var u;
    h.forEach((v) => {
      _ && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), (u = s) == null || u.disconnect(), s = null, c && cancelAnimationFrame(d);
  };
}
const Aw = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Cw,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return tw(t, e, {
    ...i,
    platform: r
  });
};
var Un, Fn, Bn, sn, St, ul, Br, jr, Dc, hl, _m, dl, fm, pl, um, ml, hm, gl, dm, yl, pm, vl, mm, jn, bl, gm;
const Qe = class extends qt {
  constructor() {
    super(...arguments);
    T(this, jr);
    T(this, hl);
    T(this, dl);
    T(this, pl);
    T(this, ml);
    T(this, gl);
    T(this, yl);
    T(this, vl);
    T(this, bl);
    T(this, Un, !1);
    T(this, Fn, void 0);
    T(this, Bn, 0);
    T(this, sn, void 0);
    T(this, St, void 0);
    T(this, ul, void 0);
    T(this, Br, void 0);
    L(this, "hideLater", () => {
      b(this, jn).call(this), H(this, Bn, window.setTimeout(this.hide.bind(this), 100));
    });
    T(this, jn, () => {
      clearTimeout(b(this, Bn)), H(this, Bn, 0);
    });
  }
  get isShown() {
    var n;
    return (n = b(this, sn)) == null ? void 0 : n.classList.contains(Qe.CLASS_SHOW);
  }
  get tooltip() {
    return b(this, sn) || W(this, dl, fm).call(this);
  }
  get trigger() {
    return b(this, ul) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Qe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tooltip");
  }
  show(n) {
    return this.setOptions(n), !b(this, Un) && this.isHover && W(this, bl, gm).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Qe.CLASS_SHOW), W(this, yl, pm).call(this), !0;
  }
  hide() {
    var n, o;
    return (n = b(this, Br)) == null || n.call(this), this.element.classList.remove(this.elementShowClass), (o = b(this, sn)) == null || o.classList.remove(Qe.CLASS_SHOW), !0;
  }
  toggle(n) {
    return this.isShown ? this.hide() : this.show(n);
  }
  destroy() {
    b(this, Un) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", b(this, jn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(n) {
    n instanceof Event && (n = { event: n });
    const { exclude: o } = n || {}, i = this.getAll().entries(), r = new Set(o || []);
    for (const [l, c] of i)
      r.has(l) || c.hide();
  }
};
let Ht = Qe;
Un = new WeakMap(), Fn = new WeakMap(), Bn = new WeakMap(), sn = new WeakMap(), St = new WeakMap(), ul = new WeakMap(), Br = new WeakMap(), jr = new WeakSet(), Dc = function() {
  const { arrow: n } = this.options;
  return typeof n == "number" ? n : 8;
}, hl = new WeakSet(), _m = function() {
  const n = W(this, jr, Dc).call(this);
  return H(this, St, document.createElement("div")), b(this, St).style.position = this.options.strategy, b(this, St).style.width = `${n}px`, b(this, St).style.height = `${n}px`, b(this, St).style.transform = "rotate(45deg)", b(this, St);
}, dl = new WeakSet(), fm = function() {
  var i;
  const n = Qe.TOOLTIP_CLASS;
  let o;
  if (this.isDynamic) {
    o = document.createElement("div");
    const r = this.options.className ? this.options.className.split(" ") : [];
    let l = [n, this.options.type || ""];
    l = l.concat(r), o.classList.add(...l), o[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const r = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (r != null && r.startsWith("#") && (o = document.querySelector(r)), !o) {
      const l = this.element.nextElementSibling;
      l != null && l.classList.contains(n) ? o = l : o = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${n}`);
    }
  }
  if (this.options.arrow && (o == null || o.append(W(this, hl, _m).call(this))), !o)
    throw new Error("Tooltip: Cannot find tooltip element");
  return o.style.width = "max-content", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", document.body.appendChild(o), H(this, sn, o), o;
}, pl = new WeakSet(), um = function() {
  var l;
  const n = W(this, jr, Dc).call(this), { strategy: o, placement: i } = this.options, r = {
    middleware: [pw(n), hw()],
    strategy: o,
    placement: i
  };
  return this.options.arrow && b(this, St) && ((l = r.middleware) == null || l.push(iw({ element: b(this, St) }))), r;
}, ml = new WeakSet(), hm = function(n) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[n];
}, gl = new WeakSet(), dm = function(n) {
  return n === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : n === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : n === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, yl = new WeakSet(), pm = function() {
  const n = W(this, pl, um).call(this), o = W(this, vl, mm).call(this);
  H(this, Br, Ew(o, this.tooltip, () => {
    Aw(o, this.tooltip, n).then(({ x: i, y: r, middlewareData: l, placement: c }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${r}px`
      });
      const _ = c.split("-")[0], h = W(this, ml, hm).call(this, _);
      if (l.arrow && b(this, St)) {
        const { x: s, y: d } = l.arrow;
        Object.assign(b(this, St).style, {
          left: s != null ? `${s}px` : "",
          top: d != null ? `${d}px` : "",
          [h]: `${-b(this, St).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...W(this, gl, dm).call(this, _)
        });
      }
    });
  }));
}, vl = new WeakSet(), mm = function() {
  return b(this, Fn) || H(this, Fn, {
    getBoundingClientRect: () => {
      const { element: n } = this;
      if (n instanceof MouseEvent) {
        const { clientX: o, clientY: i } = n;
        return {
          width: 0,
          height: 0,
          top: i,
          right: o,
          bottom: i,
          left: o
        };
      }
      return n instanceof HTMLElement ? n.getBoundingClientRect() : n;
    },
    contextElement: this.element
  }), b(this, Fn);
}, jn = new WeakMap(), bl = new WeakSet(), gm = function() {
  const { tooltip: n } = this;
  n.addEventListener("mouseenter", b(this, jn)), n.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), H(this, Un, !0);
}, L(Ht, "NAME", "tooltip"), L(Ht, "TOOLTIP_CLASS", "tooltip"), L(Ht, "CLASS_SHOW", "show"), L(Ht, "MENU_SELECTOR", '[data-toggle="tooltip"]:not(.disabled):not(:disabled)'), L(Ht, "DEFAULT", {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
});
document.addEventListener("click", function(t) {
  const n = t.target.closest(Ht.MENU_SELECTOR);
  if (n) {
    const o = Ht.ensure(n);
    o.options.trigger === "click" && o.toggle();
  } else
    Ht.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  const e = t.target, n = typeof e.closest == "function" ? e.closest(Ht.MENU_SELECTOR) : null;
  if (!n)
    return;
  const o = Ht.ensure(n);
  o.isHover && o.show();
});
var ym, pt, vm, Bo, Tf, bm = {}, wm = [], Tw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function $m(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function _c(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++vm };
  return i == null && pt.vnode != null && pt.vnode(r), r;
}
function pa(t) {
  return t.children;
}
function jo(t, e) {
  this.props = t, this.context = e;
}
function pr(t, e) {
  if (e == null)
    return t.__ ? pr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? pr(t) : null;
}
function km(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return km(t);
  }
}
function Mf(t) {
  (!t.__d && (t.__d = !0) && Bo.push(t) && !vi.__r++ || Tf !== pt.debounceRendering) && ((Tf = pt.debounceRendering) || setTimeout)(vi);
}
function vi() {
  for (var t; vi.__r = Bo.length; )
    t = Bo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Bo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = We({}, r)).__v = r.__v + 1, Em(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? pr(r), r.__h), Lw(o, r), r.__e != l && km(r)));
    });
}
function xm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || wm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? _c(null, a, null, null, a) : Array.isArray(a) ? _c(pa, { children: a }, null, null, null) : a.__b > 0 ? _c(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Em(t, a, f = f || bm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Sm(a, _, t) : _ = Cm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = pr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && Tm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Am(p[s], p[++s], p[++s]);
}
function Sm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Sm(o, e, n) : Cm(n, o, o, i, o.__e, e));
  return e;
}
function Cm(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Mw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || bi(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || bi(t, r, e[r], n[r], o);
}
function Lf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Tw.test(e) ? n : n + "px";
}
function bi(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Lf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Lf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? Nf : Rf, r) : t.removeEventListener(e, r ? Nf : Rf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Rf(t) {
  this.l[t.type + !1](pt.event ? pt.event(t) : t);
}
function Nf(t) {
  this.l[t.type + !0](pt.event ? pt.event(t) : t);
}
function Em(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = pt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new jo(p, g), s.constructor = y, s.render = Nw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = We({}, s.__s)), We(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = pt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = We(We({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === pa && h.key == null ? h.props.children : h, xm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Rw(n.__e, e, n, o, i, r, l, _);
    (h = pt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), pt.__e(x, e, n);
  }
}
function Lw(t, e) {
  pt.__c && pt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      pt.__e(o, n.__v);
    }
  });
}
function Rw(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ym.call(t.childNodes), h = (d = n.props || bm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Mw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, xm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && pr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && $m(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && bi(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && bi(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Am(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    pt.__e(o, n);
  }
}
function Tm(t, e, n) {
  var o, i;
  if (pt.unmount && pt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Am(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        pt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Tm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || $m(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Nw(t, e, n) {
  return this.constructor(t, n);
}
ym = wm.slice, pt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, vm = 0, jo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof t == "function" && (t = t(We({}, n), this.props)), t && We(n, t), t != null && this.__v && (e && this._sb.push(e), Mf(this));
}, jo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Mf(this));
}, jo.prototype.render = pa, Bo = [], vi.__r = 0;
var Dw = 0;
function wi(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Dw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return pt.vnode && pt.vnode(_), _;
}
function Pw({
  type: t,
  key: e,
  style: n,
  bounding: o,
  offsetX: i = 0,
  offsetY: r = 0,
  component: l,
  data: c,
  hidden: _,
  props: h,
  children: s,
  onRender: d,
  ...f
}) {
  if (_)
    return null;
  let a;
  d ? a = d(t, c) : l ? a = /* @__PURE__ */ wi(l, { ...h }) : a = c;
  const { left: u, top: v, width: p, height: m } = o;
  return /* @__PURE__ */ wi("div", { style: { width: p, height: m, left: u + i, top: v + r, ...n }, ...f, children: [
    a,
    s
  ] });
}
function Ow(t, e, n = 0, o = 0) {
  const i = t.left + n, r = t.top + o;
  return !(i > e.left + e.width || r > e.top + e.height || i + t.width < e.left || r + t.height < e.top);
}
let Hw = class extends jo {
  render() {
    const { width: e, height: n, cells: o, left: i, top: r, visibleBounding: l, onRenderCell: c, style: _, children: h, offsetX: s = 0, offsetY: d = 0, ...f } = this.props, a = l ? o.filter((u) => Ow(u.bounding, l, s, d)) : o;
    return /* @__PURE__ */ wi("div", { style: { width: e, height: n, left: i, top: r, ..._ }, ...f, children: [
      a.map((u) => /* @__PURE__ */ wi(Pw, { offsetX: s, offsetY: d, ...u })),
      h
    ] });
  }
};
class Df extends $t {
}
L(Df, "NAME", "virtualgrid"), L(Df, "Component", Hw);
var ma, mt, Mm, Lm, zo, Pf, Rm = {}, Nm = [], Ww = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ie(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Dm(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ga(t, e, n) {
  var o, i, r, l = {};
  for (r in e)
    r == "key" ? o = e[r] : r == "ref" ? i = e[r] : l[r] = e[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? ma.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      l[r] === void 0 && (l[r] = t.defaultProps[r]);
  return Cs(t, l, o, i, null);
}
function Cs(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Mm };
  return i == null && mt.vnode != null && mt.vnode(r), r;
}
function Iw() {
  return { current: null };
}
function ya(t) {
  return t.children;
}
function Vo(t, e) {
  this.props = t, this.context = e;
}
function mr(t, e) {
  if (e == null)
    return t.__ ? mr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? mr(t) : null;
}
function Pm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Pm(t);
  }
}
function Of(t) {
  (!t.__d && (t.__d = !0) && zo.push(t) && !$i.__r++ || Pf !== mt.debounceRendering) && ((Pf = mt.debounceRendering) || setTimeout)($i);
}
function $i() {
  for (var t; $i.__r = zo.length; )
    t = zo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), zo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ie({}, r)).__v = r.__v + 1, Im(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? mr(r), r.__h), Fw(o, r), r.__e != l && Pm(r)));
    });
}
function Om(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Nm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Cs(null, a, null, null, a) : Array.isArray(a) ? Cs(ya, { children: a }, null, null, null) : a.__b > 0 ? Cs(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Im(t, a, f = f || Rm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Hm(a, _, t) : _ = Wm(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = mr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && Fm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Um(p[s], p[++s], p[++s]);
}
function Hm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Hm(o, e, n) : Wm(n, o, o, i, o.__e, e));
  return e;
}
function Wm(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Uw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ki(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ki(t, r, e[r], n[r], o);
}
function Hf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Ww.test(e) ? n : n + "px";
}
function ki(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Hf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Hf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? If : Wf, r) : t.removeEventListener(e, r ? If : Wf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Wf(t) {
  this.l[t.type + !1](mt.event ? mt.event(t) : t);
}
function If(t) {
  this.l[t.type + !0](mt.event ? mt.event(t) : t);
}
function Im(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = mt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Vo(p, g), s.constructor = y, s.render = jw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ie({}, s.__s)), Ie(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = mt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ie(Ie({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === ya && h.key == null ? h.props.children : h, Om(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Bw(n.__e, e, n, o, i, r, l, _);
    (h = mt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), mt.__e(x, e, n);
  }
}
function Fw(t, e) {
  mt.__c && mt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      mt.__e(o, n.__v);
    }
  });
}
function Bw(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && ma.call(t.childNodes), h = (d = n.props || Rm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Uw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, Om(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && mr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Dm(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && ki(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && ki(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Um(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    mt.__e(o, n);
  }
}
function Fm(t, e, n) {
  var o, i;
  if (mt.unmount && mt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Um(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        mt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Fm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Dm(t.__e), t.__ = t.__e = t.__d = void 0;
}
function jw(t, e, n) {
  return this.constructor(t, n);
}
ma = Nm.slice, mt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, Mm = 0, Lm = function(t) {
  return t != null && t.constructor === void 0;
}, Vo.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof t == "function" && (t = t(Ie({}, n), this.props)), t && Ie(n, t), t != null && this.__v && (e && this._sb.push(e), Of(this));
}, Vo.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Of(this));
}, Vo.prototype.render = ya, zo = [], $i.__r = 0;
var zw = 0;
function Y(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return mt.vnode && mt.vnode(_), _;
}
let Vw = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Bm, gt, jm, Yo, Uf, zm = {}, Vm = [], Yw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ue(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ym(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function fc(t, e, n, o, i) {
  var r = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++jm };
  return i == null && gt.vnode != null && gt.vnode(r), r;
}
function va(t) {
  return t.children;
}
function Go(t, e) {
  this.props = t, this.context = e;
}
function gr(t, e) {
  if (e == null)
    return t.__ ? gr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? gr(t) : null;
}
function Gm(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Gm(t);
  }
}
function Ff(t) {
  (!t.__d && (t.__d = !0) && Yo.push(t) && !xi.__r++ || Uf !== gt.debounceRendering) && ((Uf = gt.debounceRendering) || setTimeout)(xi);
}
function xi() {
  for (var t; xi.__r = Yo.length; )
    t = Yo.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Yo = [], t.some(function(e) {
      var n, o, i, r, l, c;
      e.__d && (l = (r = (n = e).__v).__e, (c = n.__P) && (o = [], (i = Ue({}, r)).__v = r.__v + 1, Zm(c, r, i, n.__n, c.ownerSVGElement !== void 0, r.__h != null ? [l] : null, o, l ?? gr(r), r.__h), qw(o, r), r.__e != l && Gm(r)));
    });
}
function qm(t, e, n, o, i, r, l, c, _, h) {
  var s, d, f, a, u, v, p, m = o && o.__k || Vm, g = m.length;
  for (n.__k = [], s = 0; s < e.length; s++)
    if ((a = n.__k[s] = (a = e[s]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? fc(null, a, null, null, a) : Array.isArray(a) ? fc(va, { children: a }, null, null, null) : a.__b > 0 ? fc(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = n, a.__b = n.__b + 1, (f = m[s]) === null || f && a.key == f.key && a.type === f.type)
        m[s] = void 0;
      else
        for (d = 0; d < g; d++) {
          if ((f = m[d]) && a.key == f.key && a.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      Zm(t, a, f = f || zm, i, r, l, c, _, h), u = a.__e, (d = a.ref) && f.ref != d && (p || (p = []), f.ref && p.push(f.ref, null, a), p.push(d, a.__c || u, a)), u != null ? (v == null && (v = u), typeof a.type == "function" && a.__k === f.__k ? a.__d = _ = Xm(a, _, t) : _ = Km(t, a, f, m, u, _), typeof n.type == "function" && (n.__d = _)) : _ && f.__e == _ && _.parentNode != t && (_ = gr(f));
    }
  for (n.__e = v, s = g; s--; )
    m[s] != null && Qm(m[s], m[s]);
  if (p)
    for (s = 0; s < p.length; s++)
      Jm(p[s], p[++s], p[++s]);
}
function Xm(t, e, n) {
  for (var o, i = t.__k, r = 0; i && r < i.length; r++)
    (o = i[r]) && (o.__ = t, e = typeof o.type == "function" ? Xm(o, e, n) : Km(n, o, o, i, o.__e, e));
  return e;
}
function Km(t, e, n, o, i, r) {
  var l, c, _;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (c = r, _ = 0; (c = c.nextSibling) && _ < o.length; _ += 2)
          if (c == i)
            break t;
        t.insertBefore(i, r), l = r;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Gw(t, e, n, o, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Si(t, r, null, n[r], o);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Si(t, r, e[r], n[r], o);
}
function Bf(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || Yw.test(e) ? n : n + "px";
}
function Si(t, e, n, o, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            n && e in n || Bf(t.style, e, "");
        if (n)
          for (e in n)
            o && n[e] === o[e] || Bf(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? o || t.addEventListener(e, r ? zf : jf, r) : t.removeEventListener(e, r ? zf : jf, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function jf(t) {
  this.l[t.type + !1](gt.event ? gt.event(t) : t);
}
function zf(t) {
  this.l[t.type + !0](gt.event ? gt.event(t) : t);
}
function Zm(t, e, n, o, i, r, l, c, _) {
  var h, s, d, f, a, u, v, p, m, g, w, k, C, A, E, y = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (_ = n.__h, c = e.__e = n.__e, e.__h = null, r = [c]), (h = gt.__b) && h(e);
  try {
    t:
      if (typeof y == "function") {
        if (p = e.props, m = (h = y.contextType) && o[h.__c], g = h ? m ? m.props.value : h.__ : o, n.__c ? v = (s = e.__c = n.__c).__ = s.__E : ("prototype" in y && y.prototype.render ? e.__c = s = new y(p, g) : (e.__c = s = new Go(p, g), s.constructor = y, s.render = Kw), m && m.sub(s), s.props = p, s.state || (s.state = {}), s.context = g, s.__n = o, d = s.__d = !0, s.__h = [], s._sb = []), s.__s == null && (s.__s = s.state), y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = Ue({}, s.__s)), Ue(s.__s, y.getDerivedStateFromProps(p, s.__s))), f = s.props, a = s.state, d)
          y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (y.getDerivedStateFromProps == null && p !== f && s.componentWillReceiveProps != null && s.componentWillReceiveProps(p, g), !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(p, s.__s, g) === !1 || e.__v === n.__v) {
            for (s.props = p, s.state = s.__s, e.__v !== n.__v && (s.__d = !1), s.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), w = 0; w < s._sb.length; w++)
              s.__h.push(s._sb[w]);
            s._sb = [], s.__h.length && l.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(p, s.__s, g), s.componentDidUpdate != null && s.__h.push(function() {
            s.componentDidUpdate(f, a, u);
          });
        }
        if (s.context = g, s.props = p, s.__v = e, s.__P = t, k = gt.__r, C = 0, "prototype" in y && y.prototype.render) {
          for (s.state = s.__s, s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), A = 0; A < s._sb.length; A++)
            s.__h.push(s._sb[A]);
          s._sb = [];
        } else
          do
            s.__d = !1, k && k(e), h = s.render(s.props, s.state, s.context), s.state = s.__s;
          while (s.__d && ++C < 25);
        s.state = s.__s, s.getChildContext != null && (o = Ue(Ue({}, o), s.getChildContext())), d || s.getSnapshotBeforeUpdate == null || (u = s.getSnapshotBeforeUpdate(f, a)), E = h != null && h.type === va && h.key == null ? h.props.children : h, qm(t, Array.isArray(E) ? E : [E], e, n, o, i, r, l, c, _), s.base = e.__e, e.__h = null, s.__h.length && l.push(s), v && (s.__E = s.__ = null), s.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Xw(n.__e, e, n, o, i, r, l, _);
    (h = gt.diffed) && h(e);
  } catch (x) {
    e.__v = null, (_ || r != null) && (e.__e = c, e.__h = !!_, r[r.indexOf(c)] = null), gt.__e(x, e, n);
  }
}
function qw(t, e) {
  gt.__c && gt.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      gt.__e(o, n.__v);
    }
  });
}
function Xw(t, e, n, o, i, r, l, c) {
  var _, h, s, d = n.props, f = e.props, a = e.type, u = 0;
  if (a === "svg" && (i = !0), r != null) {
    for (; u < r.length; u++)
      if ((_ = r[u]) && "setAttribute" in _ == !!a && (a ? _.localName === a : _.nodeType === 3)) {
        t = _, r[u] = null;
        break;
      }
  }
  if (t == null) {
    if (a === null)
      return document.createTextNode(f);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, f.is && f), r = null, c = !1;
  }
  if (a === null)
    d === f || c && t.data === f || (t.data = f);
  else {
    if (r = r && Bm.call(t.childNodes), h = (d = n.props || zm).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c) {
      if (r != null)
        for (d = {}, u = 0; u < t.attributes.length; u++)
          d[t.attributes[u].name] = t.attributes[u].value;
      (s || h) && (s && (h && s.__html == h.__html || s.__html === t.innerHTML) || (t.innerHTML = s && s.__html || ""));
    }
    if (Gw(t, f, d, i, c), s)
      e.__k = [];
    else if (u = e.props.children, qm(t, Array.isArray(u) ? u : [u], e, n, o, i && a !== "foreignObject", r, l, r ? r[0] : n.__k && gr(n, 0), c), r != null)
      for (u = r.length; u--; )
        r[u] != null && Ym(r[u]);
    c || ("value" in f && (u = f.value) !== void 0 && (u !== t.value || a === "progress" && !u || a === "option" && u !== d.value) && Si(t, "value", u, d.value, !1), "checked" in f && (u = f.checked) !== void 0 && u !== t.checked && Si(t, "checked", u, d.checked, !1));
  }
  return t;
}
function Jm(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    gt.__e(o, n);
  }
}
function Qm(t, e, n) {
  var o, i;
  if (gt.unmount && gt.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || Jm(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (r) {
        gt.__e(r, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && Qm(o[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ym(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Kw(t, e, n) {
  return this.constructor(t, n);
}
Bm = Vm.slice, gt = { __e: function(t, e, n, o) {
  for (var i, r, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (c) {
        t = c;
      }
  throw t;
} }, jm = 0, Go.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ue({}, this.state), typeof t == "function" && (t = t(Ue({}, n), this.props)), t && Ue(n, t), t != null && this.__v && (e && this._sb.push(e), Ff(this));
}, Go.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ff(this));
}, Go.prototype.render = va, Yo = [], xi.__r = 0;
var Zw = 0;
function Vf(t, e, n, o, i) {
  var r, l, c = {};
  for (l in e)
    l == "ref" ? r = e[l] : c[l] = e[l];
  var _ = { type: t, props: c, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Zw, __source: i, __self: o };
  if (typeof t == "function" && (r = t.defaultProps))
    for (l in r)
      c[l] === void 0 && (c[l] = r[l]);
  return gt.vnode && gt.vnode(_), _;
}
var ln, cn;
class Yf extends Go {
  constructor(n) {
    super(n);
    T(this, ln, 0);
    T(this, cn, null);
    L(this, "_handleWheel", (n) => {
      const { wheelContainer: o } = this.props, i = n.target;
      if (!(!i || !o) && (typeof o == "string" && i.closest(o) || typeof o == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    });
    L(this, "_handleMouseMove", (n) => {
      const { dragStart: o } = this.state;
      o && (b(this, ln) && cancelAnimationFrame(b(this, ln)), H(this, ln, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? n.clientX - o.x : n.clientY - o.y;
        this.scroll(o.offset + i * this.props.scrollSize / this.props.clientSize), H(this, ln, 0);
      })), n.preventDefault());
    });
    L(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    L(this, "_handleMouseDown", (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    });
    L(this, "_handleClick", (n) => {
      const o = n.currentTarget;
      if (!o)
        return;
      const i = o.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: c } = this.props, _ = (r === "horz" ? n.clientX - i.left : n.clientY - i.top) - this.barSize / 2;
      this.scroll(_ * c / l), n.preventDefault();
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
    const { scrollSize: n, clientSize: o } = this.props;
    return Math.max(0, n - o);
  }
  get barSize() {
    const { clientSize: n, scrollSize: o, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(n * n / o), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (H(this, cn, typeof n == "string" ? document : n.current), b(this, cn).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, cn) && b(this, cn).removeEventListener("wheel", this._handleWheel);
  }
  scroll(n) {
    return n = Math.max(0, Math.min(Math.round(n), this.maxScrollPos)), n === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(n) : this.setState({
      scrollPos: n
    }, this._afterScroll.bind(this, n)), !0);
  }
  scrollOffset(n) {
    return this.scroll(this.scrollPos + n);
  }
  _afterScroll(n) {
    const { onScroll: o } = this.props;
    o && o(n, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: n,
      type: o,
      size: i = 12,
      className: r,
      style: l,
      left: c,
      top: _,
      bottom: h,
      right: s
    } = this.props, { maxScrollPos: d, scrollPos: f } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: _,
      bottom: h,
      right: s,
      ...l
    }, v = {};
    return o === "horz" ? (u.height = i, u.width = n, v.width = this.barSize, v.left = Math.round(Math.min(d, f) * (n - v.width) / d)) : (u.width = i, u.height = n, v.height = this.barSize, v.top = Math.round(Math.min(d, f) * (n - v.height) / d)), /* @__PURE__ */ Vf(
      "div",
      {
        className: F("scrollbar", r, {
          "is-vert": o === "vert",
          "is-horz": o === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Vf(
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
ln = new WeakMap(), cn = new WeakMap();
function Gf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function tg({ col: t, className: e, height: n, row: o, onRenderCell: i, style: r, outerStyle: l, children: c, outerClass: _, ...h }) {
  var y;
  const s = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...l
  }, { align: d, border: f } = t.setting, a = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...t.setting.cellStyle,
    ...r
  }, u = ["dtable-cell", _, t.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], v = ["dtable-cell-content", e], p = [c ?? ((y = o.data) == null ? void 0 : y[t.name]) ?? ""], m = i ? i(p, { row: o, col: t }, ga) : p, g = [], w = [], k = {}, C = {};
  let A = "div";
  m == null || m.forEach((x) => {
    if (typeof x == "object" && x && !Lm(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const R = x.outer ? g : w;
      x.html ? R.push(/* @__PURE__ */ Y("div", { className: F("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? s : a, x.style), x.className && (x.outer ? u : v).push(x.className), x.children && R.push(x.children), x.attrs && Object.assign(x.outer ? k : C, x.attrs)), x.tagName && !x.outer && (A = x.tagName);
    } else
      w.push(x);
  });
  const E = A;
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F(u),
      style: s,
      "data-col": t.name,
      ...h,
      ...k,
      children: [
        w.length > 0 && /* @__PURE__ */ Y(E, { className: F(v), style: a, ...C, children: w }),
        g
      ]
    }
  );
}
function uc({ row: t, className: e, top: n = 0, left: o = 0, width: i, height: r, cols: l, CellComponent: c = tg, onRenderCell: _ }) {
  return /* @__PURE__ */ Y("div", { className: F("dtable-cells", e), style: { top: n, left: o, width: i, height: r }, children: l.map((h) => h.visible ? /* @__PURE__ */ Y(
    c,
    {
      col: h,
      row: t,
      onRenderCell: _
    },
    h.name
  ) : null) });
}
function eg({
  row: t,
  className: e,
  top: n,
  height: o,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: _,
  scrollColsWidth: h,
  fixedRightWidth: s,
  scrollLeft: d,
  CellComponent: f = tg,
  onRenderCell: a,
  style: u,
  ...v
}) {
  let p = null;
  i != null && i.length && (p = /* @__PURE__ */ Y(
    uc,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: c,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let m = null;
  l != null && l.length && (m = /* @__PURE__ */ Y(
    uc,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - d,
      width: Math.max(_, h),
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  let g = null;
  r != null && r.length && (g = /* @__PURE__ */ Y(
    uc,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: c + _,
      width: s,
      row: t,
      CellComponent: f,
      onRenderCell: a
    }
  ));
  const w = { top: n, height: o, lineHeight: `${o - 2}px`, ...u };
  return /* @__PURE__ */ Y(
    "div",
    {
      className: F("dtable-row", e),
      style: w,
      "data-id": t.id,
      ...v,
      children: [
        p,
        m,
        g
      ]
    }
  );
}
function Jw({ height: t, onRenderRow: e, ...n }) {
  const o = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: o }, ga);
    i && Object.assign(o, i);
  }
  return /* @__PURE__ */ Y("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ Y(eg, { ...o }) });
}
function Qw({
  className: t,
  style: e,
  top: n,
  rows: o,
  height: i,
  rowHeight: r,
  scrollTop: l,
  onRenderRow: c,
  ..._
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ Y("div", { className: F("dtable-rows", t), style: e, children: o.map((h) => {
    const s = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - l,
      height: r,
      ..._
    }, d = c == null ? void 0 : c({ props: s, row: h }, ga);
    return d && Object.assign(s, d), /* @__PURE__ */ Y(eg, { ...s });
  }) });
}
const Ci = /* @__PURE__ */ new Map(), Ei = [];
function ng(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && Ci.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ci.set(n, t), e != null && e.buildIn && !Ei.includes(n) && Ei.push(n);
}
function to(t, e) {
  ng(t, e);
  const n = (o) => {
    if (!o)
      return t;
    const { defaultOptions: i, ...r } = t;
    return {
      ...r,
      defaultOptions: { ...i, ...o }
    };
  };
  return n.plugin = t, n;
}
function og(t) {
  return Ci.delete(t);
}
function t$(t) {
  if (typeof t == "string") {
    const e = Ci.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function rg(t, e, n) {
  return e.forEach((o) => {
    var r;
    if (!o)
      return;
    const i = t$(o);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && rg(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function e$(t = [], e = !0) {
  return e && Ei.length && t.unshift(...Ei), t != null && t.length ? rg([], t, /* @__PURE__ */ new Set()) : [];
}
function qf() {
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
var as, an, zn, ke, Jt, xe, wt, jt, Qt, Vn, zr, Vr, he, Yn, Gn, wl, sg, $l, ig, kl, lg, xl, cg, Yr, Pc, Sl, Cl, Gr, qr, El, Al, Tl, ag, Ml, _g, Ll, fg;
let n$ = (as = class extends Vo {
  constructor(n) {
    super(n);
    T(this, wl);
    T(this, $l);
    T(this, kl);
    T(this, xl);
    T(this, Yr);
    T(this, Tl);
    T(this, Ml);
    T(this, Ll);
    L(this, "ref", Iw());
    T(this, an, 0);
    T(this, zn, void 0);
    T(this, ke, !1);
    T(this, Jt, void 0);
    T(this, xe, void 0);
    T(this, wt, []);
    T(this, jt, void 0);
    T(this, Qt, /* @__PURE__ */ new Map());
    T(this, Vn, {});
    T(this, zr, void 0);
    T(this, Vr, []);
    L(this, "updateLayout", () => {
      b(this, an) && cancelAnimationFrame(b(this, an)), H(this, an, requestAnimationFrame(() => {
        H(this, jt, void 0), this.forceUpdate(), H(this, an, 0);
      }));
    });
    T(this, he, (n, o) => {
      o = o || n.type;
      const i = b(this, Qt).get(o);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    });
    T(this, Yn, (n) => {
      b(this, he).call(this, n, `window_${n.type}`);
    });
    T(this, Gn, (n) => {
      b(this, he).call(this, n, `document_${n.type}`);
    });
    T(this, Sl, (n, o) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, o);
        i && Object.assign(n.props, i);
      }
      return b(this, wt).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, o);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    });
    T(this, Cl, (n, o) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, o)), b(this, wt).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, o));
    }), n.props));
    T(this, Gr, (n, o, i) => {
      const { row: r, col: l } = o;
      n[0] = this.getCellValue(r, l);
      const c = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (n = l.setting[c].call(this, n, o, i)), this.options[c] && (n = this.options[c].call(this, n, o, i)), b(this, wt).forEach((_) => {
        _[c] && (n = _[c].call(this, n, o, i));
      }), n;
    });
    T(this, qr, (n, o) => {
      o === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    });
    T(this, El, (n) => {
      var c, _, h, s, d;
      const o = this.getPointerInfo(n);
      if (!o)
        return;
      const { rowID: i, colName: r, cellElement: l } = o;
      if (i === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, n, { colName: r, element: l }), b(this, wt).forEach((f) => {
          var a;
          (a = f.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: l });
        }));
      else {
        const { rowElement: f } = o, a = this.layout.visibleRows.find((u) => u.id === i);
        if (l) {
          if (((_ = this.options.onCellClick) == null ? void 0 : _.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
            return;
          for (const u of b(this, wt))
            if (((h = u.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: a, element: l, rowElement: f })) === !0)
              return;
        }
        if (((s = this.options.onRowClick) == null ? void 0 : s.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
          return;
        for (const u of b(this, wt))
          if (((d = u.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: a, element: f })) === !0)
            return;
      }
    });
    T(this, Al, (n) => {
      const o = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(o))
        return !this.scroll({ to: o.replace("page", "") });
    });
    H(this, zn, n.id ?? `dtable-${Vw(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, H(this, xe, Object.freeze(e$(n.plugins))), b(this, xe).forEach((o) => {
      var c;
      const { methods: i, data: r, state: l } = o;
      i && Object.entries(i).forEach(([_, h]) => {
        typeof h == "function" && Object.assign(this, { [_]: h.bind(this) });
      }), r && Object.assign(b(this, Vn), r.call(this)), l && Object.assign(this.state, l.call(this)), (c = o.onCreate) == null || c.call(this, o);
    });
  }
  get options() {
    var n;
    return ((n = b(this, jt)) == null ? void 0 : n.options) || b(this, Jt) || qf();
  }
  get plugins() {
    return b(this, wt);
  }
  get layout() {
    return b(this, jt);
  }
  get id() {
    return b(this, zn);
  }
  get data() {
    return b(this, Vn);
  }
  get parent() {
    var n;
    return this.props.parent ?? ((n = this.ref.current) == null ? void 0 : n.parentElement);
  }
  componentWillReceiveProps() {
    H(this, Jt, void 0);
  }
  componentDidMount() {
    if (b(this, ke) ? this.forceUpdate() : W(this, Yr, Pc).call(this), b(this, wt).forEach((n) => {
      let { events: o } = n;
      o && (typeof o == "function" && (o = o.call(this)), Object.entries(o).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", b(this, El)), this.on("keydown", b(this, Al)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const o = new ResizeObserver(this.updateLayout);
          o.observe(n), H(this, zr, o);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    b(this, wt).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    b(this, ke) ? W(this, Yr, Pc).call(this) : b(this, wt).forEach((n) => {
      var o;
      (o = n.onUpdated) == null || o.call(this);
    });
  }
  componentWillUnmount() {
    var o;
    (o = b(this, zr)) == null || o.disconnect();
    const { current: n } = this.ref;
    if (n)
      for (const i of b(this, Qt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), b(this, Yn)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), b(this, Gn)) : n.removeEventListener(i, b(this, he));
    b(this, wt).forEach((i) => {
      var r;
      (r = i.onUnmounted) == null || r.call(this);
    }), b(this, xe).forEach((i) => {
      var r;
      (r = i.onDestory) == null || r.call(this);
    }), H(this, Vn, {}), b(this, Qt).clear();
  }
  on(n, o, i) {
    var l;
    i && (n = `${i}_${n}`);
    const r = b(this, Qt).get(n);
    r ? r.push(o) : (b(this, Qt).set(n, [o]), n.startsWith("window_") ? window.addEventListener(n.replace("window_", ""), b(this, Yn)) : n.startsWith("document_") ? document.addEventListener(n.replace("document_", ""), b(this, Gn)) : (l = this.ref.current) == null || l.addEventListener(n, b(this, he)));
  }
  off(n, o, i) {
    var c;
    i && (n = `${i}_${n}`);
    const r = b(this, Qt).get(n);
    if (!r)
      return;
    const l = r.indexOf(o);
    l >= 0 && r.splice(l, 1), r.length || (b(this, Qt).delete(n), n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), b(this, Yn)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), b(this, Gn)) : (c = this.ref.current) == null || c.removeEventListener(n, b(this, he)));
  }
  emitCustomEvent(n, o) {
    b(this, he).call(this, o instanceof Event ? o : new CustomEvent(n, { detail: o }), n);
  }
  scroll(n, o) {
    const { scrollLeft: i, scrollTop: r, rowsHeightTotal: l, rowsHeight: c, rowHeight: _, colsInfo: { scrollWidth: h, scrollColsWidth: s } } = this.layout, { to: d } = n;
    let { scrollLeft: f, scrollTop: a } = n;
    if (d === "up" || d === "down")
      a = r + (d === "down" ? 1 : -1) * Math.floor(c / _) * _;
    else if (d === "left" || d === "right")
      f = i + (d === "right" ? 1 : -1) * h;
    else if (d === "home")
      a = 0;
    else if (d === "end")
      a = l - c;
    else if (d === "left-begin")
      f = 0;
    else if (d === "right-end")
      f = s - h;
    else {
      const { offsetLeft: v, offsetTop: p } = n;
      typeof v == "number" && (f = i + v), typeof p == "number" && (f = r + p);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, s - h)), f !== i && (u.scrollLeft = f)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== r && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var v;
      (v = this.options.onScroll) == null || v.call(this, u), o == null || o.call(this, !0);
    }), !0) : (o == null || o.call(this, !1), !1);
  }
  getColInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    const { colsMap: o, colsList: i } = this.layout;
    return typeof n == "number" ? i[n] : o[n];
  }
  getRowInfo(n) {
    if (n === void 0)
      return;
    if (typeof n == "object")
      return n;
    if (n === -1 || n === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: o, rowsMap: i } = this.layout;
    return typeof n == "number" ? o[n] : i[n];
  }
  getCellValue(n, o) {
    var _;
    const i = typeof n == "object" ? n : this.getRowInfo(n);
    if (!i)
      return;
    const r = typeof o == "object" ? o : this.getColInfo(o);
    if (!r)
      return;
    let l = i.id === "HEADER" ? r.setting.title ?? r.setting.name : (_ = i.data) == null ? void 0 : _[r.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, i, r, l)), l;
  }
  getRowInfoByIndex(n) {
    return this.layout.rows[n];
  }
  update(n = {}, o) {
    if (!b(this, Jt))
      return;
    typeof n == "function" && (o = n, n = {});
    const { dirtyType: i, state: r } = n;
    if (i === "layout")
      H(this, jt, void 0);
    else if (i === "options") {
      if (H(this, Jt, void 0), !b(this, jt))
        return;
      H(this, jt, void 0);
    }
    this.setState(r ?? ((l) => ({ renderCount: l.renderCount + 1 })), o);
  }
  getPointerInfo(n) {
    const o = n.target;
    if (!o || o.closest(".no-cell-event"))
      return;
    const i = o.closest(".dtable-cell");
    if (!i)
      return;
    const r = i.closest(".dtable-row");
    if (!r)
      return;
    const l = i == null ? void 0 : i.getAttribute("data-col"), c = r == null ? void 0 : r.getAttribute("data-id");
    if (!(typeof l != "string" || typeof c != "string"))
      return {
        cellElement: i,
        rowElement: r,
        colName: l,
        rowID: c,
        target: o
      };
  }
  i18n(n, o, i) {
    return Xr(b(this, Vr), n, o, i, this.options.lang) ?? `{i18n:${n}}`;
  }
  render() {
    const n = W(this, Ll, fg).call(this), { className: o, rowHover: i, colHover: r, cellHover: l, bordered: c, striped: _, scrollbarHover: h } = this.options, s = { width: n == null ? void 0 : n.width, height: n == null ? void 0 : n.height }, d = ["dtable", o, {
      "dtable-hover-row": i,
      "dtable-hover-col": r,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": _,
      "dtable-scrolled-down": ((n == null ? void 0 : n.scrollTop) ?? 0) > 0,
      "scrollbar-hover": h
    }], f = [];
    return n && b(this, wt).forEach((a) => {
      var v;
      const u = (v = a.onRender) == null ? void 0 : v.call(this, n);
      u && (u.style && Object.assign(s, u.style), u.className && d.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ Y(
      "div",
      {
        id: b(this, zn),
        className: F(d),
        style: s,
        ref: this.ref,
        tabIndex: -1,
        children: [
          n && W(this, wl, sg).call(this, n),
          n && W(this, $l, ig).call(this, n),
          n && W(this, kl, lg).call(this, n),
          n && W(this, xl, cg).call(this, n)
        ]
      }
    );
  }
}, an = new WeakMap(), zn = new WeakMap(), ke = new WeakMap(), Jt = new WeakMap(), xe = new WeakMap(), wt = new WeakMap(), jt = new WeakMap(), Qt = new WeakMap(), Vn = new WeakMap(), zr = new WeakMap(), Vr = new WeakMap(), he = new WeakMap(), Yn = new WeakMap(), Gn = new WeakMap(), wl = new WeakSet(), sg = function(n) {
  const { header: o, colsInfo: i, headerHeight: r, scrollLeft: l } = n;
  if (!o)
    return null;
  if (o === !0)
    return /* @__PURE__ */ Y(
      Jw,
      {
        scrollLeft: l,
        height: r,
        onRenderCell: b(this, Gr),
        onRenderRow: b(this, Cl),
        ...i
      }
    );
  const c = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    vc,
    {
      className: "dtable-header",
      style: { height: r },
      renders: c,
      generateArgs: [n],
      generatorThis: this
    }
  );
}, $l = new WeakSet(), ig = function(n) {
  const { headerHeight: o, rowsHeight: i, visibleRows: r, rowHeight: l, colsInfo: c, scrollLeft: _, scrollTop: h } = n;
  return /* @__PURE__ */ Y(
    Qw,
    {
      top: o,
      height: i,
      rows: r,
      rowHeight: l,
      scrollLeft: _,
      scrollTop: h,
      onRenderCell: b(this, Gr),
      onRenderRow: b(this, Sl),
      ...c
    }
  );
}, kl = new WeakSet(), lg = function(n) {
  const { footer: o } = n;
  if (!o)
    return null;
  const i = typeof o == "function" ? o.call(this, n) : Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ Y(
    vc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: i,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators
    }
  );
}, xl = new WeakSet(), cg = function(n) {
  const o = [], { scrollLeft: i, colsInfo: r, scrollTop: l, rowsHeight: c, rowsHeightTotal: _, footerHeight: h } = n, { scrollColsWidth: s, scrollWidth: d } = r, { scrollbarSize: f = 12, horzScrollbarPos: a } = this.options;
  return s > d && o.push(
    /* @__PURE__ */ Y(
      Yf,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: s,
        clientSize: d,
        onScroll: b(this, qr),
        left: r.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -f) + h,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), _ > c && o.push(
    /* @__PURE__ */ Y(
      Yf,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: _,
        clientSize: c,
        onScroll: b(this, qr),
        right: 0,
        size: f,
        top: n.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), o.length ? o : null;
}, Yr = new WeakSet(), Pc = function() {
  var n;
  H(this, ke, !1), (n = this.options.afterRender) == null || n.call(this), b(this, wt).forEach((o) => {
    var i;
    return (i = o.afterRender) == null ? void 0 : i.call(this);
  });
}, Sl = new WeakMap(), Cl = new WeakMap(), Gr = new WeakMap(), qr = new WeakMap(), El = new WeakMap(), Al = new WeakMap(), Tl = new WeakSet(), ag = function() {
  if (b(this, Jt))
    return !1;
  const o = { ...qf(), ...b(this, xe).reduce((i, r) => {
    const { defaultOptions: l } = r;
    return l && Object.assign(i, l), i;
  }, {}), ...this.props };
  return H(this, Jt, o), H(this, wt, b(this, xe).reduce((i, r) => {
    const { when: l, options: c } = r;
    return (!l || l(o)) && (i.push(r), c && Object.assign(o, typeof c == "function" ? c.call(this, o) : c)), i;
  }, [])), H(this, Vr, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ml = new WeakSet(), _g = function() {
  var X, vt;
  const { plugins: n } = this;
  let o = b(this, Jt);
  const i = {
    flex: /* @__PURE__ */ Y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ Y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((U) => {
    var yt;
    const K = (yt = U.beforeLayout) == null ? void 0 : yt.call(this, o);
    K && (o = { ...o, ...K }), Object.assign(i, U.footer);
  });
  const { defaultColWidth: r, minColWidth: l, maxColWidth: c } = o, _ = [], h = [], s = [], d = {}, f = [], a = [];
  let u = 0, v = 0, p = 0;
  o.cols.forEach((U) => {
    if (U.hidden)
      return;
    const {
      name: K,
      type: yt = "",
      fixed: st = !1,
      flex: G = !1,
      width: it = r,
      minWidth: Et = l,
      maxWidth: At = c,
      ...yg
    } = U, J = {
      name: K,
      type: yt,
      setting: {
        name: K,
        type: yt,
        fixed: st,
        flex: G,
        width: it,
        minWidth: Et,
        maxWidth: At,
        ...yg
      },
      flex: st ? 0 : G === !0 ? 1 : typeof G == "number" ? G : 0,
      left: 0,
      width: Gf(it, Et, At),
      realWidth: 0,
      visible: !0,
      index: f.length
    };
    n.forEach((ka) => {
      var xa, Sa;
      const ts = (xa = ka.colTypes) == null ? void 0 : xa[yt];
      if (ts) {
        const Ca = typeof ts == "function" ? ts(J) : ts;
        Ca && Object.assign(J.setting, Ca);
      }
      (Sa = ka.onAddCol) == null || Sa.call(this, J);
    }), J.width = Gf(J.setting.width ?? J.width, J.setting.minWidth ?? Et, J.setting.maxWidth ?? At), J.realWidth = J.realWidth || J.width, st === "left" ? (J.left = u, u += J.width, _.push(J)) : st === "right" ? (J.left = v, v += J.width, h.push(J)) : (J.left = p, p += J.width, s.push(J)), J.flex && a.push(J), f.push(J), d[J.name] = J;
  });
  let m = o.width, g = 0;
  const w = u + p + v;
  if (typeof m == "function" && (m = m.call(this, w)), m === "auto")
    g = w;
  else if (m === "100%") {
    const { parent: U } = this;
    if (U)
      g = U.clientWidth;
    else {
      g = 0, H(this, ke, !0);
      return;
    }
  } else
    g = m ?? 0;
  const { data: k, rowKey: C = "id", rowHeight: A } = o, E = [], y = (U, K, yt) => {
    var G, it;
    const st = { data: yt ?? { [C]: U }, id: U, index: E.length, top: 0 };
    if (yt || (st.lazy = !0), E.push(st), ((G = o.onAddRow) == null ? void 0 : G.call(this, st, K)) !== !1) {
      for (const Et of n)
        if (((it = Et.onAddRow) == null ? void 0 : it.call(this, st, K)) === !1)
          return;
    }
  };
  if (typeof k == "number")
    for (let U = 0; U < k; U++)
      y(`${U}`, U);
  else
    Array.isArray(k) && k.forEach((U, K) => {
      typeof U == "object" ? y(`${U[C] ?? ""}`, K, U) : y(`${U ?? ""}`, K);
    });
  let x = E;
  const R = {};
  if (o.onAddRows) {
    const U = o.onAddRows.call(this, x);
    U && (x = U);
  }
  for (const U of n) {
    const K = (X = U.onAddRows) == null ? void 0 : X.call(this, x);
    K && (x = K);
  }
  x.forEach((U, K) => {
    R[U.id] = U, U.index = K, U.top = U.index * A;
  });
  const { header: V, footer: B } = o, N = V ? o.headerHeight || A : 0, S = B ? o.footerHeight || A : 0;
  let $ = o.height, D = 0;
  const M = x.length * A, O = N + S + M;
  if (typeof $ == "function" && ($ = $.call(this, O)), $ === "auto")
    D = O;
  else if (typeof $ == "object")
    D = Math.min($.max, Math.max($.min, O));
  else if ($ === "100%") {
    const { parent: U } = this;
    if (U)
      D = U.clientHeight;
    else {
      D = 0, H(this, ke, !0);
      return;
    }
  } else
    D = $;
  const P = D - N - S, I = g - u - v, z = {
    options: o,
    allRows: E,
    width: g,
    height: D,
    rows: x,
    rowsMap: R,
    rowHeight: A,
    rowsHeight: P,
    rowsHeightTotal: M,
    header: V,
    footer: B,
    footerGenerators: i,
    headerHeight: N,
    footerHeight: S,
    colsMap: d,
    colsList: f,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: _,
      fixedRightCols: h,
      scrollCols: s,
      fixedLeftWidth: u,
      scrollWidth: I,
      scrollColsWidth: p,
      fixedRightWidth: v
    }
  }, j = (vt = o.onLayout) == null ? void 0 : vt.call(this, z);
  j && Object.assign(z, j), n.forEach((U) => {
    if (U.onLayout) {
      const K = U.onLayout.call(this, z);
      K && Object.assign(z, K);
    }
  }), H(this, jt, z);
}, Ll = new WeakSet(), fg = function() {
  (W(this, Tl, ag).call(this) || !b(this, jt)) && W(this, Ml, _g).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  let { scrollLeft: o } = this.state;
  const { flexCols: i, colsInfo: { scrollCols: r, scrollWidth: l, scrollColsWidth: c } } = n;
  if (i.length) {
    const w = l - c;
    if (w > 0) {
      const k = i.reduce((A, E) => A + E.flex, 0);
      let C = 0;
      i.forEach((A) => {
        const E = Math.min(w - C, Math.ceil(w * (A.flex / k)));
        A.realWidth = E + A.width, C += A.realWidth;
      });
    } else
      i.forEach((k) => {
        k.realWidth = k.width;
      });
  }
  o = Math.min(Math.max(0, c - l), o);
  let _ = 0;
  r.forEach((w) => {
    w.left = _, _ += w.realWidth, w.visible = w.left + w.realWidth >= o && w.left <= o + l;
  });
  const { rowsHeightTotal: h, rowsHeight: s, rows: d, rowHeight: f } = n, a = Math.min(Math.max(0, h - s), this.state.scrollTop), u = Math.floor(a / f), v = a + s, p = Math.min(d.length, Math.ceil(v / f)), m = [], { rowDataGetter: g } = this.options;
  for (let w = u; w < p; w++) {
    const k = d[w];
    k.lazy && g && (k.data = g([k.id])[0], k.lazy = !1), m.push(k);
  }
  return n.visibleRows = m, n.scrollTop = a, n.scrollLeft = o, n;
}, L(as, "addPlugin", ng), L(as, "removePlugin", og), as);
function Xf(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const o = "dtable-col-hover";
  n.querySelectorAll(`.${o}`).forEach((i) => i.classList.remove(o)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(o));
}
const o$ = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var i;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (i = t.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const o = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      Xf(this, o);
    },
    mouseleave() {
      Xf(this, !1);
    }
  }
}, r$ = to(o$, { buildIn: !0 });
function s$(t, e) {
  var l, c;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, o = {}, { canRowCheckable: i } = this.options, r = (_, h) => {
    i && !i.call(this, _) || !!n[_] === h || (h ? n[_] = !0 : delete n[_], o[_] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !ug.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: _ }) => {
    r(_, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((_) => {
    r(_, e ?? !n[_]);
  })), Object.keys(o).length) {
    const _ = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, t, o, n);
    _ && Object.keys(_).forEach((h) => {
      _[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, o);
    });
  }
  return o;
}
function i$(t) {
  return this.state.checkedRows[t] ?? !1;
}
function ug() {
  var n, o;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((o = this.layout) == null ? void 0 : o.allRows.length);
}
function l$() {
  return Object.keys(this.state.checkedRows);
}
const c$ = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (t) => !!t.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: s$,
    isRowChecked: i$,
    isAllRowChecked: ug,
    getChecks: l$
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
        /* @__PURE__ */ Y("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ Y("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks().length, o = [];
      return n && o.push(this.i18n("checkedCountInfo", { selected: n })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ Y("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var c;
    const { id: o } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, o))
      return t;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, o) : r) {
      const _ = this.isRowChecked(o), h = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, _, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: _ });
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var l;
    const { id: o } = e, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, o) : i) {
      const c = this.isAllRowChecked(), _ = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, o)) ?? /* @__PURE__ */ Y("input", { type: "checkbox", checked: c });
      t.unshift(_), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (this.isRowChecked(e.id))
      return { className: F(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"],.dtable-checkbox');
    n && this.toggleCheckRows(n.checked);
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, a$ = to(c$);
var hg = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(hg || {});
function Oc(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, o = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const l = Oc.call(this, r);
    if (l.state !== "expanded") {
      i = !0;
      break;
    }
    r = l.parent;
  }
  return e.state = i ? "hidden" : o ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Oc.call(this, e.parent).level + 1 : 0, e;
}
function _$(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: o } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !dg.call(this)), e) {
      const i = o.entries();
      for (const [r, l] of i)
        l.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[i[0]]), i.forEach((r) => {
      const l = o.get(r);
      e && (l != null && l.children) ? n[r] = !0 : delete n[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...n } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function dg() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function pg(t, e = 0, n, o = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const l = t.get(r);
    l && (l.level === o && (l.order = e++), (i = l.children) != null && i.length && (e = pg(t, e, l.children, o + 1)));
  }
  return e;
}
function mg(t, e, n, o) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    o[r] = n, mg(t, r, n, o);
  }), i;
}
function gg(t, e, n, o, i) {
  var c;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((c = r.children) == null ? void 0 : c.every((_) => {
    const h = !!(o[_] !== void 0 ? o[_] : i[_]);
    return n === h;
  })) && (o[e] = n), r.parent && gg(t, r.parent, n, o, i);
}
const f$ = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, o = n.get(t.id), i = n.get(e.id);
      return (o == null ? void 0 : o.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const o = {};
      return Object.entries(e).forEach(([i, r]) => {
        const l = mg(this, i, r, o);
        l != null && l.parent && gg(this, l.parent, r, o, n);
      }), o;
    }
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: _$,
    isAllCollapsed: dg,
    getNestedRowInfo: Oc
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var i, r;
    const { nestedMap: e } = this.data, n = (i = t.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"], o = e.get(t.id) ?? {
      state: "",
      level: 0
    };
    if (o.parent = n, (r = t.data) != null && r[this.options.asParentKey ?? "asParent"] && (o.children = []), e.set(t.id, o), n) {
      let l = e.get(n);
      l || (l = {
        state: "",
        level: 0
      }, e.set(n, l)), l.children || (l.children = []), l.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), pg(this.data.nestedMap), t.sort((e, n) => {
      const o = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (o.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var c;
    const { id: o, data: i } = n, { nestedToggle: r } = e.setting, l = this.getNestedRowInfo(o);
    if (r && (l.children || l.parent) && t.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, o, e, i)) ?? /* @__PURE__ */ Y("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: _ = r } = e.setting;
      _ && (_ === !0 && (_ = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ Y("div", { className: "dtable-nested-indent", style: { width: _ * l.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: o } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, o, n, void 0)) ?? /* @__PURE__ */ Y("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ Y("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: F(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = F(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, u$ = to(f$);
const h$ = {
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
      onRenderCell(t, { col: e, row: n }) {
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = Lt(o, n.data);
        return t[0] = /* @__PURE__ */ Y("a", { href: r, ...i, children: t[0] }), t;
      }
    },
    avatar: {
      onRenderCell(t, { col: e, row: n }) {
        const { data: o } = n, { avatarWithName: i, avatarClass: r = "size-xs circle", avatarKey: l = `${e.name}Avatar` } = e.setting, c = /* @__PURE__ */ Y("div", { className: `avatar ${r} flex-none`, children: /* @__PURE__ */ Y("img", { src: o ? o[l] : "" }) });
        return i ? t.unshift(c) : t[0] = c, t;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, l = (n - o) / 2, c = n / 2, _ = t[0];
        return t[0] = /* @__PURE__ */ Y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ Y("circle", { cx: c, cy: c, r: l, "stroke-width": o, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - _) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ Y("text", { x: c, y: c + o, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(_) })
        ] }), t;
      }
    },
    actionButtons: {
      onRenderCell(t, { col: e, row: n }) {
        var c;
        const o = (c = n.data) == null ? void 0 : c[e.name];
        if (!o)
          return t;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((_) => {
            typeof _ == "string" && (_ = { action: _ });
            const h = r[_.action];
            return h && (_ = { className: l, ...h, ..._ }), Lt(i, _);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(t, { col: e }) {
        let { format: n } = e.setting;
        if (!n)
          return t;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: i } = n, r = t[0];
        return typeof o == "function" ? t[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? t[0] = Tc(r, o) : i === "html" ? t[0] = { html: Lt(o, r) } : t[0] = Lt(o, r), t;
      }
    }
  }
}, d$ = to(h$, { buildIn: !0 }), p$ = {
  name: "sort-type",
  onRenderHeaderCell(t, { col: e }) {
    const { sortType: n } = e.setting;
    if (n) {
      const { sortLink: o = this.options.sortLink, sortAttrs: i } = e.setting, r = n === !0 ? "none" : n;
      if (t.push(
        /* @__PURE__ */ Y("div", { className: `dtable-sort dtable-sort-${r}` }),
        { outer: !0, attrs: { "data-sort": r } }
      ), o) {
        const l = typeof o == "function" ? o.call(this, e, r) : o;
        t.push(
          { tagName: "a", attrs: { href: l, ...i } }
        );
      }
    }
    return t;
  }
}, m$ = to(p$, { buildIn: !0 }), g$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: hg,
  checkable: a$,
  colHover: r$,
  nested: u$,
  rich: d$,
  sortType: m$
}, Symbol.toStringTag, { value: "Module" }));
class no extends $t {
}
L(no, "NAME", "dtable"), L(no, "Component", n$), L(no, "definePlugin", to), L(no, "removePlugin", og), L(no, "plugins", g$);
var Dt;
class ao extends qt {
  constructor() {
    super(...arguments);
    T(this, Dt, void 0);
  }
  init() {
    const { element: n } = this;
    n !== document.body && !n.hasAttribute("data-toggle") && n.setAttribute("data-toggle", "tab");
  }
  showTarget() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Dt, document.querySelector(n)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement), b(this, Dt) && (this.addActive(b(this, Dt).parentElement, b(this, Dt)), b(this, Dt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const n = this.element.getAttribute("href") || this.element.dataset.target || this.element.dataset.tab;
    n != null && n.startsWith("#") && H(this, Dt, document.querySelector(n)), b(this, Dt) && (this.addActive(b(this, Dt).parentElement, b(this, Dt)), this.addActive(this.element.closest(`.${this.constructor.NAV_CLASS}`), this.element.parentElement));
  }
  addActive(n, o) {
    const i = n.children;
    Array.from(i).forEach((l) => {
      l.classList.remove("active"), l.classList.contains("fade") && l.classList.remove("in");
    }), o.classList.add("active"), o.classList.contains("fade") && this.transition(o).then(function() {
      o.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(n) {
    return new Promise(function(o) {
      setTimeout(() => {
        n.classList.add("in"), o();
      }, 100);
    });
  }
}
Dt = new WeakMap(), L(ao, "NAME", "NavTabs"), L(ao, "NAV_CLASS", "nav-tabs"), L(ao, "EVENTS", !0), L(ao, "TOGGLE_SELECTOR", '[data-toggle="tab"]');
document.addEventListener("click", (t) => {
  t.target instanceof HTMLElement && (t.target.dataset.toggle === "tab" || t.target.getAttribute("data-tab")) && (t.preventDefault(), new ao(t.target).showTarget());
});
export {
  Ia as ActionMenu,
  Fa as ActionMenuNested,
  P_ as Avatar,
  O_ as BtnGroup,
  Ga as Button,
  Mt as ContextMenu,
  no as DTable,
  Pt as Datepicker,
  Ct as Dropdown,
  Wc as EventBus,
  qa as Menu,
  ns as Messager,
  Tt as Modal,
  Do as ModalTrigger,
  Q_ as Nav,
  ao as NavTabs,
  nf as Pager,
  _f as Picker,
  E_ as ProgressCircle,
  ce as TIME_DAY,
  Ot as Timepicker,
  $f as Toolbar,
  Ht as Tooltip,
  Df as VirtualGrid,
  Ng as addI18nMap,
  M$ as browser,
  ef as calculateTimestamp,
  b$ as convertBytes,
  Rt as createDate,
  v$ as formatBytes,
  Tc as formatDate,
  W$ as formatDateSpan,
  Lt as formatString,
  Lg as getLangCode,
  I$ as getTimeBeforeDesc,
  Xr as i18n,
  H$ as isDBY,
  nc as isObject,
  Zr as isSameDay,
  Kb as isSameMonth,
  N$ as isSameWeek,
  tf as isSameYear,
  D$ as isToday,
  O$ as isTomorrow,
  P$ as isYesterday,
  yc as mergeDeep,
  gc as nativeEvents,
  Rg as setLangCode,
  Lv as store
};
