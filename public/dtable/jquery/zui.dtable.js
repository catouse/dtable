var ms = Object.defineProperty;
var ws = (e, t, o) => t in e ? ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var j = (e, t, o) => (ws(e, typeof t != "symbol" ? t + "" : t, o), o), Nt = (e, t, o) => {
  if (!t.has(e))
    throw TypeError("Cannot " + o);
};
var g = (e, t, o) => (Nt(e, t, "read from private field"), o ? o.call(e) : t.get(e)), x = (e, t, o) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, o);
}, M = (e, t, o, n) => (Nt(e, t, "write to private field"), n ? n.call(e, o) : t.set(e, o), o);
var z = (e, t, o) => (Nt(e, t, "access private method"), o);
function bs(e, t) {
  function o(n, ...r) {
    return $(this).each(function() {
      var c;
      const s = $(this), l = s.data(e.KEY);
      l ? typeof n == "string" && ((c = l[n]) == null || c.call(l, ...r)) : (typeof n == "string" && (n = {}), s.data(e.KEY, new e(this, {
        ...s.data(),
        ...n
      })));
    });
  }
  $.extend(!0, $, { zui3: { [t ?? e.NAME]: e }, fn: { [(t ?? e.NAME).toLowerCase()]: o } });
}
var St, N, en, tn, Ae, Ro, it = {}, on = [], vs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ae(e, t) {
  for (var o in t)
    e[o] = t[o];
  return e;
}
function nn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function sn(e, t, o) {
  var n, r, s, l = {};
  for (s in t)
    s == "key" ? n = t[s] : s == "ref" ? r = t[s] : l[s] = t[s];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? St.call(arguments, 2) : o), typeof e == "function" && e.defaultProps != null)
    for (s in e.defaultProps)
      l[s] === void 0 && (l[s] = e.defaultProps[s]);
  return ot(e, l, n, r, null);
}
function ot(e, t, o, n, r) {
  var s = { type: e, props: t, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r ?? ++en };
  return r == null && N.vnode != null && N.vnode(s), s;
}
function Cs() {
  return { current: null };
}
function Et(e) {
  return e.children;
}
function nt(e, t) {
  this.props = e, this.context = t;
}
function Le(e, t) {
  if (t == null)
    return e.__ ? Le(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var o; t < e.__k.length; t++)
    if ((o = e.__k[t]) != null && o.__e != null)
      return o.__e;
  return typeof e.type == "function" ? Le(e) : null;
}
function rn(e) {
  var t, o;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((o = e.__k[t]) != null && o.__e != null) {
        e.__e = e.__c.base = o.__e;
        break;
      }
    return rn(e);
  }
}
function So(e) {
  (!e.__d && (e.__d = !0) && Ae.push(e) && !lt.__r++ || Ro !== N.debounceRendering) && ((Ro = N.debounceRendering) || setTimeout)(lt);
}
function lt() {
  for (var e; lt.__r = Ae.length; )
    e = Ae.sort(function(t, o) {
      return t.__v.__b - o.__v.__b;
    }), Ae = [], e.some(function(t) {
      var o, n, r, s, l, c;
      t.__d && (l = (s = (o = t).__v).__e, (c = o.__P) && (n = [], (r = ae({}, s)).__v = s.__v + 1, so(c, s, r, o.__n, c.ownerSVGElement !== void 0, s.__h != null ? [l] : null, n, l ?? Le(s), s.__h), fn(n, s), s.__e != l && rn(s)));
    });
}
function ln(e, t, o, n, r, s, l, c, f, d) {
  var i, p, h, a, u, m, _, y = n && n.__k || on, w = y.length;
  for (o.__k = [], i = 0; i < t.length; i++)
    if ((a = o.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? ot(null, a, null, null, a) : Array.isArray(a) ? ot(Et, { children: a }, null, null, null) : a.__b > 0 ? ot(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = o, a.__b = o.__b + 1, (h = y[i]) === null || h && a.key == h.key && a.type === h.type)
        y[i] = void 0;
      else
        for (p = 0; p < w; p++) {
          if ((h = y[p]) && a.key == h.key && a.type === h.type) {
            y[p] = void 0;
            break;
          }
          h = null;
        }
      so(e, a, h = h || it, r, s, l, c, f, d), u = a.__e, (p = a.ref) && h.ref != p && (_ || (_ = []), h.ref && _.push(h.ref, null, a), _.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === h.__k ? a.__d = f = cn(a, f, e) : f = an(e, a, h, y, u, f), typeof o.type == "function" && (o.__d = f)) : f && h.__e == f && f.parentNode != e && (f = Le(h));
    }
  for (o.__e = m, i = w; i--; )
    y[i] != null && un(y[i], y[i]);
  if (_)
    for (i = 0; i < _.length; i++)
      hn(_[i], _[++i], _[++i]);
}
function cn(e, t, o) {
  for (var n, r = e.__k, s = 0; r && s < r.length; s++)
    (n = r[s]) && (n.__ = e, t = typeof n.type == "function" ? cn(n, t, o) : an(o, n, n, r, n.__e, t));
  return t;
}
function an(e, t, o, n, r, s) {
  var l, c, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (o == null || r != s || r.parentNode == null)
    e:
      if (s == null || s.parentNode !== e)
        e.appendChild(r), l = null;
      else {
        for (c = s, f = 0; (c = c.nextSibling) && f < n.length; f += 2)
          if (c == r)
            break e;
        e.insertBefore(r, s), l = s;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function xs(e, t, o, n, r) {
  var s;
  for (s in o)
    s === "children" || s === "key" || s in t || ct(e, s, null, o[s], n);
  for (s in t)
    r && typeof t[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || o[s] === t[s] || ct(e, s, t[s], o[s], n);
}
function Eo(e, t, o) {
  t[0] === "-" ? e.setProperty(t, o) : e[t] = o == null ? "" : typeof o != "number" || vs.test(t) ? o : o + "px";
}
function ct(e, t, o, n, r) {
  var s;
  e:
    if (t === "style")
      if (typeof o == "string")
        e.style.cssText = o;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            o && t in o || Eo(e.style, t, "");
        if (o)
          for (t in o)
            n && o[t] === n[t] || Eo(e.style, t, o[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = o, o ? n || e.addEventListener(t, s ? Do : Mo, s) : e.removeEventListener(t, s ? Do : Mo, s);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = o ?? "";
          break e;
        } catch {
        }
      typeof o == "function" || (o == null || o === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, o));
    }
}
function Mo(e) {
  this.l[e.type + !1](N.event ? N.event(e) : e);
}
function Do(e) {
  this.l[e.type + !0](N.event ? N.event(e) : e);
}
function so(e, t, o, n, r, s, l, c, f) {
  var d, i, p, h, a, u, m, _, y, w, C, R, P, E, D, v = t.type;
  if (t.constructor !== void 0)
    return null;
  o.__h != null && (f = o.__h, c = t.__e = o.__e, t.__h = null, s = [c]), (d = N.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (_ = t.props, y = (d = v.contextType) && n[d.__c], w = d ? y ? y.props.value : d.__ : n, o.__c ? m = (i = t.__c = o.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(_, w) : (t.__c = i = new nt(_, w), i.constructor = v, i.render = Rs), y && y.sub(i), i.props = _, i.state || (i.state = {}), i.context = w, i.__n = n, p = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = ae({}, i.__s)), ae(i.__s, v.getDerivedStateFromProps(_, i.__s))), h = i.props, a = i.state, p)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && _ !== h && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, w), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, w) === !1 || t.__v === o.__v) {
            for (i.props = _, i.state = i.__s, t.__v !== o.__v && (i.__d = !1), i.__v = t, t.__e = o.__e, t.__k = o.__k, t.__k.forEach(function(b) {
              b && (b.__ = t);
            }), C = 0; C < i._sb.length; C++)
              i.__h.push(i._sb[C]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, w), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(h, a, u);
          });
        }
        if (i.context = w, i.props = _, i.__v = t, i.__P = e, R = N.__r, P = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, R && R(t), d = i.render(i.props, i.state, i.context), E = 0; E < i._sb.length; E++)
            i.__h.push(i._sb[E]);
          i._sb = [];
        } else
          do
            i.__d = !1, R && R(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++P < 25);
        i.state = i.__s, i.getChildContext != null && (n = ae(ae({}, n), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(h, a)), D = d != null && d.type === Et && d.key == null ? d.props.children : d, ln(e, Array.isArray(D) ? D : [D], t, o, n, r, s, l, c, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), m && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && t.__v === o.__v ? (t.__k = o.__k, t.__e = o.__e) : t.__e = ks(o.__e, t, o, n, r, s, l, f);
    (d = N.diffed) && d(t);
  } catch (b) {
    t.__v = null, (f || s != null) && (t.__e = c, t.__h = !!f, s[s.indexOf(c)] = null), N.__e(b, t, o);
  }
}
function fn(e, t) {
  N.__c && N.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      N.__e(n, o.__v);
    }
  });
}
function ks(e, t, o, n, r, s, l, c) {
  var f, d, i, p = o.props, h = t.props, a = t.type, u = 0;
  if (a === "svg" && (r = !0), s != null) {
    for (; u < s.length; u++)
      if ((f = s[u]) && "setAttribute" in f == !!a && (a ? f.localName === a : f.nodeType === 3)) {
        e = f, s[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(h);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, h.is && h), s = null, c = !1;
  }
  if (a === null)
    p === h || c && e.data === h || (e.data = h);
  else {
    if (s = s && St.call(e.childNodes), d = (p = o.props || it).dangerouslySetInnerHTML, i = h.dangerouslySetInnerHTML, !c) {
      if (s != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (xs(e, h, p, r, c), i)
      t.__k = [];
    else if (u = t.props.children, ln(e, Array.isArray(u) ? u : [u], t, o, n, r && a !== "foreignObject", s, l, s ? s[0] : o.__k && Le(o, 0), c), s != null)
      for (u = s.length; u--; )
        s[u] != null && nn(s[u]);
    c || ("value" in h && (u = h.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && ct(e, "value", u, p.value, !1), "checked" in h && (u = h.checked) !== void 0 && u !== e.checked && ct(e, "checked", u, p.checked, !1));
  }
  return e;
}
function hn(e, t, o) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    N.__e(n, o);
  }
}
function un(e, t, o) {
  var n, r;
  if (N.unmount && N.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || hn(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        N.__e(s, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (r = 0; r < n.length; r++)
      n[r] && un(n[r], t, o || typeof e.type != "function");
  o || e.__e == null || nn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Rs(e, t, o) {
  return this.constructor(e, o);
}
function Ss(e, t, o) {
  var n, r, s;
  N.__ && N.__(e, t), r = (n = typeof o == "function") ? null : o && o.__k || t.__k, s = [], so(t, e = (!n && o || t).__k = sn(Et, null, [e]), r || it, it, t.ownerSVGElement !== void 0, !n && o ? [o] : r ? null : t.firstChild ? St.call(t.childNodes) : null, s, !n && o ? o : r ? r.__e : t.firstChild, n), fn(s, e);
}
St = on.slice, N = { __e: function(e, t, o, n) {
  for (var r, s, l; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), l = r.__d), l)
          return r.__E = r;
      } catch (c) {
        e = c;
      }
  throw e;
} }, en = 0, tn = function(e) {
  return e != null && e.constructor === void 0;
}, nt.prototype.setState = function(e, t) {
  var o;
  o = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ae({}, this.state), typeof e == "function" && (e = e(ae({}, o), this.props)), e && ae(o, e), e != null && this.__v && (t && this._sb.push(t), So(this));
}, nt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), So(this));
}, nt.prototype.render = Et, Ae = [], lt.__r = 0;
var Es = 0;
function dn(e, t, o, n, r) {
  var s, l, c = {};
  for (l in t)
    l == "ref" ? s = t[l] : c[l] = t[l];
  var f = { type: e, props: c, key: o, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Es, __source: r, __self: n };
  if (typeof e == "function" && (s = e.defaultProps))
    for (l in s)
      c[l] === void 0 && (c[l] = s[l]);
  return N.vnode && N.vnode(f), f;
}
var te;
class Ms {
  constructor(t = "") {
    x(this, te, void 0);
    typeof t == "object" ? M(this, te, t) : M(this, te, document.appendChild(document.createComment(t)));
  }
  on(t, o, n) {
    g(this, te).addEventListener(t, o, n);
  }
  once(t, o, n) {
    g(this, te).addEventListener(t, o, { once: !0, ...n });
  }
  off(t, o, n) {
    g(this, te).removeEventListener(t, o, n);
  }
  emit(t) {
    return g(this, te).dispatchEvent(t), t;
  }
}
te = new WeakMap();
const Vt = /* @__PURE__ */ new Set([
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
class ro extends Ms {
  on(t, o, n) {
    super.on(t, o, n);
  }
  off(t, o, n) {
    super.off(t, o, n);
  }
  once(t, o, n) {
    super.once(t, o, n);
  }
  emit(t, o) {
    return typeof t == "string" && (Vt.has(t) ? (t = new Event(t), Object.assign(t, { detail: o })) : t = new CustomEvent(t, { detail: o })), super.emit(ro.createEvent(t, o));
  }
  static createEvent(t, o) {
    return typeof t == "string" && (Vt.has(t) ? (t = new Event(t), Object.assign(t, { detail: o })) : t = new CustomEvent(t, { detail: o })), t;
  }
}
var oe, Ke, pe, Ie;
class Io extends ro {
  constructor(o = "", n) {
    super(o);
    x(this, pe);
    x(this, oe, /* @__PURE__ */ new Map());
    x(this, Ke, void 0);
    M(this, Ke, n == null ? void 0 : n.customEventSuffix);
  }
  on(o, n, r) {
    o = z(this, pe, Ie).call(this, o), super.on(o, n, r), g(this, oe).set(n, [o, r]);
  }
  off(o, n, r) {
    o = z(this, pe, Ie).call(this, o), super.off(o, n, r), g(this, oe).delete(n);
  }
  once(o, n, r) {
    o = z(this, pe, Ie).call(this, o);
    const s = (l) => {
      n(l), g(this, oe).delete(s);
    };
    super.once(o, s, r), g(this, oe).set(s, [o, r]);
  }
  emit(o, n) {
    return typeof o == "string" && (o = z(this, pe, Ie).call(this, o)), super.emit(o, n);
  }
  offAll() {
    Array.from(g(this, oe).entries()).forEach(([o, [n, r]]) => {
      super.off(n, o, r);
    }), g(this, oe).clear();
  }
}
oe = new WeakMap(), Ke = new WeakMap(), pe = new WeakSet(), Ie = function(o) {
  const n = g(this, Ke);
  return Vt.has(o) || typeof n != "string" || o.endsWith(n) ? o : `${o}${n}`;
};
function Ds(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const o = t.join(".");
  let n = e;
  const r = [n];
  for (; typeof n == "object" && n !== null && t.length; ) {
    let s = t.shift(), l;
    const c = s.indexOf("[");
    if (c > 0 && c < s.length - 1 && s.endsWith("]") && (l = s.substring(c + 1, s.length - 1), s = s.substring(0, c)), n = n[s], r.push(n), l !== void 0)
      if (typeof n == "object" && n !== null)
        n instanceof Map ? n = n.get(l) : n = n[l], r.push(n);
      else
        throw new Error(`Cannot access property "${s}[${l}]", the full path is "${o}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${o}".`);
  return r;
}
function Is(e, t, o) {
  const n = Ds(e, t), r = n[n.length - 1];
  return r === void 0 ? o : r;
}
function Ht(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Bt(e, ...t) {
  if (!t.length)
    return e;
  const o = t.shift();
  if (Ht(e) && Ht(o))
    for (const n in o)
      Ht(o[n]) ? (e[n] || Object.assign(e, { [n]: {} }), Bt(e[n], o[n])) : Object.assign(e, { [n]: o[n] });
  return Bt(e, ...t);
}
function $e(e, ...t) {
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const o = t[0];
    return Object.keys(o).forEach((n) => {
      const r = o[n] ?? 0;
      e = e.replace(new RegExp(`\\{${n}\\}`, "g"), `${r}`);
    }), e;
  }
  for (let o = 0; o < t.length; o++) {
    const n = t[o] ?? "";
    e = e.replace(new RegExp(`\\{${o}\\}`, "g"), `${n}`);
  }
  return e;
}
var Zo;
let io = ((Zo = document.documentElement.getAttribute("lang")) == null ? void 0 : Zo.toLowerCase()) ?? "zh_cn", re;
function $s() {
  return io;
}
function As(e) {
  io = e.toLowerCase();
}
function Ns(e, t) {
  re || (re = {}), typeof e == "string" && (e = { [e]: t ?? {} }), Bt(re, e);
}
function qe(e, t, o, n, r, s) {
  Array.isArray(e) ? re && e.unshift(re) : e = re ? [re, e] : [e], typeof o == "string" && (s = r, r = n, n = o, o = void 0);
  const l = r || io;
  let c;
  for (const f of e) {
    if (!f)
      continue;
    const d = f[l];
    if (!d)
      continue;
    const i = s && f === re ? `${s}.${t}` : t;
    if (c = Is(d, i), c !== void 0)
      break;
  }
  return c === void 0 ? n : o ? $e(c, ...Array.isArray(o) ? o : [o]) : c;
}
qe.addLang = Ns;
qe.getCode = $s;
qe.setCode = As;
function Hs(e) {
  return Object.fromEntries(Object.entries(e).map(([t, o]) => {
    if (typeof o == "string")
      try {
        o = JSON.parse(o);
      } catch {
      }
    return [t, o];
  }));
}
const Tt = /* @__PURE__ */ new Map();
var ne, we, V;
class Gt {
  constructor(t, o) {
    x(this, ne, void 0);
    x(this, we, void 0);
    x(this, V, void 0);
    t = typeof t == "string" ? document.querySelector(t) : t, this.constructor.EVENTS && M(this, V, new Io(t, { customEventSuffix: `.${this.constructor.KEY}` })), M(this, ne, { ...this.constructor.DEFAULT }), this.setOptions({ ...t instanceof HTMLElement ? Hs(t.dataset) : null, ...o }), this.constructor.all.set(t, this), M(this, we, t), this.init(), requestAnimationFrame(() => {
      this.afterInit(), this.emit("inited", this);
    });
  }
  get options() {
    return g(this, ne);
  }
  get element() {
    return g(this, we);
  }
  get events() {
    return g(this, V);
  }
  init() {
  }
  afterInit() {
  }
  setOptions(t) {
    return t && Object.assign(g(this, ne), t), g(this, ne);
  }
  render(t) {
    this.setOptions(t);
  }
  destroy() {
    this.constructor.all.delete(g(this, we)), g(this, V) && (this.emit("destroyed", this), g(this, V).offAll());
  }
  on(t, o, n) {
    var r;
    (r = g(this, V)) == null || r.on(t, o, n);
  }
  once(t, o, n) {
    var r;
    (r = g(this, V)) == null || r.once(t, o, n);
  }
  off(t, o, n) {
    var r;
    (r = g(this, V)) == null || r.off(t, o, n);
  }
  emit(t, o) {
    var l;
    let n = Io.createEvent(t, o);
    const r = `on${t[0].toUpperCase()}${t.substring(1)}`, s = g(this, ne)[r];
    return s && s(n) === !1 && (n.preventDefault(), n.stopPropagation()), n = (l = g(this, V)) == null ? void 0 : l.emit(t, o), n;
  }
  i18n(t, o, n) {
    return qe(g(this, ne).i18n, t, o, n, this.options.lang, this.constructor.NAME) ?? `{i18n:${t}}`;
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
    const t = this.NAME;
    if (Tt.has(t))
      return Tt.get(t);
    const o = /* @__PURE__ */ new Map();
    return Tt.set(t, o), o;
  }
  static getAll() {
    return this.all;
  }
  static get(t) {
    return this.all.get(t);
  }
  static ensure(t, o) {
    return this.get(t) || new this(t, o);
  }
}
ne = new WeakMap(), we = new WeakMap(), V = new WeakMap(), j(Gt, "EVENTS", !1), j(Gt, "DEFAULT", {});
class pn extends Gt {
  constructor() {
    super(...arguments);
    j(this, "ref", Cs());
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
  render(o) {
    const n = this.constructor.Component;
    Ss(/* @__PURE__ */ dn(n, { ref: this.ref, ...this.setOptions(o) }), this.element);
  }
}
j(pn, "Component");
var lo, H, _n, gn, Ne, $o, yn = {}, mn = [], Ts = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function fe(e, t) {
  for (var o in t)
    e[o] = t[o];
  return e;
}
function wn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function co(e, t, o) {
  var n, r, s, l = {};
  for (s in t)
    s == "key" ? n = t[s] : s == "ref" ? r = t[s] : l[s] = t[s];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? lo.call(arguments, 2) : o), typeof e == "function" && e.defaultProps != null)
    for (s in e.defaultProps)
      l[s] === void 0 && (l[s] = e.defaultProps[s]);
  return st(e, l, n, r, null);
}
function st(e, t, o, n, r) {
  var s = { type: e, props: t, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r ?? ++_n };
  return r == null && H.vnode != null && H.vnode(s), s;
}
function bn() {
  return { current: null };
}
function ao(e) {
  return e.children;
}
function He(e, t) {
  this.props = e, this.context = t;
}
function je(e, t) {
  if (t == null)
    return e.__ ? je(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var o; t < e.__k.length; t++)
    if ((o = e.__k[t]) != null && o.__e != null)
      return o.__e;
  return typeof e.type == "function" ? je(e) : null;
}
function vn(e) {
  var t, o;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((o = e.__k[t]) != null && o.__e != null) {
        e.__e = e.__c.base = o.__e;
        break;
      }
    return vn(e);
  }
}
function Ao(e) {
  (!e.__d && (e.__d = !0) && Ne.push(e) && !at.__r++ || $o !== H.debounceRendering) && (($o = H.debounceRendering) || setTimeout)(at);
}
function at() {
  for (var e; at.__r = Ne.length; )
    e = Ne.sort(function(t, o) {
      return t.__v.__b - o.__v.__b;
    }), Ne = [], e.some(function(t) {
      var o, n, r, s, l, c;
      t.__d && (l = (s = (o = t).__v).__e, (c = o.__P) && (n = [], (r = fe({}, s)).__v = s.__v + 1, Rn(c, s, r, o.__n, c.ownerSVGElement !== void 0, s.__h != null ? [l] : null, n, l ?? je(s), s.__h), Os(n, s), s.__e != l && vn(s)));
    });
}
function Cn(e, t, o, n, r, s, l, c, f, d) {
  var i, p, h, a, u, m, _, y = n && n.__k || mn, w = y.length;
  for (o.__k = [], i = 0; i < t.length; i++)
    if ((a = o.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? st(null, a, null, null, a) : Array.isArray(a) ? st(ao, { children: a }, null, null, null) : a.__b > 0 ? st(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = o, a.__b = o.__b + 1, (h = y[i]) === null || h && a.key == h.key && a.type === h.type)
        y[i] = void 0;
      else
        for (p = 0; p < w; p++) {
          if ((h = y[p]) && a.key == h.key && a.type === h.type) {
            y[p] = void 0;
            break;
          }
          h = null;
        }
      Rn(e, a, h = h || yn, r, s, l, c, f, d), u = a.__e, (p = a.ref) && h.ref != p && (_ || (_ = []), h.ref && _.push(h.ref, null, a), _.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === h.__k ? a.__d = f = xn(a, f, e) : f = kn(e, a, h, y, u, f), typeof o.type == "function" && (o.__d = f)) : f && h.__e == f && f.parentNode != e && (f = je(h));
    }
  for (o.__e = m, i = w; i--; )
    y[i] != null && En(y[i], y[i]);
  if (_)
    for (i = 0; i < _.length; i++)
      Sn(_[i], _[++i], _[++i]);
}
function xn(e, t, o) {
  for (var n, r = e.__k, s = 0; r && s < r.length; s++)
    (n = r[s]) && (n.__ = e, t = typeof n.type == "function" ? xn(n, t, o) : kn(o, n, n, r, n.__e, t));
  return t;
}
function kn(e, t, o, n, r, s) {
  var l, c, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (o == null || r != s || r.parentNode == null)
    e:
      if (s == null || s.parentNode !== e)
        e.appendChild(r), l = null;
      else {
        for (c = s, f = 0; (c = c.nextSibling) && f < n.length; f += 2)
          if (c == r)
            break e;
        e.insertBefore(r, s), l = s;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function Ps(e, t, o, n, r) {
  var s;
  for (s in o)
    s === "children" || s === "key" || s in t || ft(e, s, null, o[s], n);
  for (s in t)
    r && typeof t[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || o[s] === t[s] || ft(e, s, t[s], o[s], n);
}
function No(e, t, o) {
  t[0] === "-" ? e.setProperty(t, o) : e[t] = o == null ? "" : typeof o != "number" || Ts.test(t) ? o : o + "px";
}
function ft(e, t, o, n, r) {
  var s;
  e:
    if (t === "style")
      if (typeof o == "string")
        e.style.cssText = o;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            o && t in o || No(e.style, t, "");
        if (o)
          for (t in o)
            n && o[t] === n[t] || No(e.style, t, o[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = o, o ? n || e.addEventListener(t, s ? To : Ho, s) : e.removeEventListener(t, s ? To : Ho, s);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = o ?? "";
          break e;
        } catch {
        }
      typeof o == "function" || (o == null || o === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, o));
    }
}
function Ho(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function To(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function Rn(e, t, o, n, r, s, l, c, f) {
  var d, i, p, h, a, u, m, _, y, w, C, R, P, E, D, v = t.type;
  if (t.constructor !== void 0)
    return null;
  o.__h != null && (f = o.__h, c = t.__e = o.__e, t.__h = null, s = [c]), (d = H.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (_ = t.props, y = (d = v.contextType) && n[d.__c], w = d ? y ? y.props.value : d.__ : n, o.__c ? m = (i = t.__c = o.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(_, w) : (t.__c = i = new He(_, w), i.constructor = v, i.render = js), y && y.sub(i), i.props = _, i.state || (i.state = {}), i.context = w, i.__n = n, p = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = fe({}, i.__s)), fe(i.__s, v.getDerivedStateFromProps(_, i.__s))), h = i.props, a = i.state, p)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && _ !== h && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, w), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, w) === !1 || t.__v === o.__v) {
            for (i.props = _, i.state = i.__s, t.__v !== o.__v && (i.__d = !1), i.__v = t, t.__e = o.__e, t.__k = o.__k, t.__k.forEach(function(b) {
              b && (b.__ = t);
            }), C = 0; C < i._sb.length; C++)
              i.__h.push(i._sb[C]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, w), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(h, a, u);
          });
        }
        if (i.context = w, i.props = _, i.__v = t, i.__P = e, R = H.__r, P = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, R && R(t), d = i.render(i.props, i.state, i.context), E = 0; E < i._sb.length; E++)
            i.__h.push(i._sb[E]);
          i._sb = [];
        } else
          do
            i.__d = !1, R && R(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++P < 25);
        i.state = i.__s, i.getChildContext != null && (n = fe(fe({}, n), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(h, a)), D = d != null && d.type === ao && d.key == null ? d.props.children : d, Cn(e, Array.isArray(D) ? D : [D], t, o, n, r, s, l, c, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), m && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && t.__v === o.__v ? (t.__k = o.__k, t.__e = o.__e) : t.__e = Ls(o.__e, t, o, n, r, s, l, f);
    (d = H.diffed) && d(t);
  } catch (b) {
    t.__v = null, (f || s != null) && (t.__e = c, t.__h = !!f, s[s.indexOf(c)] = null), H.__e(b, t, o);
  }
}
function Os(e, t) {
  H.__c && H.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      H.__e(n, o.__v);
    }
  });
}
function Ls(e, t, o, n, r, s, l, c) {
  var f, d, i, p = o.props, h = t.props, a = t.type, u = 0;
  if (a === "svg" && (r = !0), s != null) {
    for (; u < s.length; u++)
      if ((f = s[u]) && "setAttribute" in f == !!a && (a ? f.localName === a : f.nodeType === 3)) {
        e = f, s[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(h);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, h.is && h), s = null, c = !1;
  }
  if (a === null)
    p === h || c && e.data === h || (e.data = h);
  else {
    if (s = s && lo.call(e.childNodes), d = (p = o.props || yn).dangerouslySetInnerHTML, i = h.dangerouslySetInnerHTML, !c) {
      if (s != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ps(e, h, p, r, c), i)
      t.__k = [];
    else if (u = t.props.children, Cn(e, Array.isArray(u) ? u : [u], t, o, n, r && a !== "foreignObject", s, l, s ? s[0] : o.__k && je(o, 0), c), s != null)
      for (u = s.length; u--; )
        s[u] != null && wn(s[u]);
    c || ("value" in h && (u = h.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && ft(e, "value", u, p.value, !1), "checked" in h && (u = h.checked) !== void 0 && u !== e.checked && ft(e, "checked", u, p.checked, !1));
  }
  return e;
}
function Sn(e, t, o) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    H.__e(n, o);
  }
}
function En(e, t, o) {
  var n, r;
  if (H.unmount && H.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Sn(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        H.__e(s, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (r = 0; r < n.length; r++)
      n[r] && En(n[r], t, o || typeof e.type != "function");
  o || e.__e == null || wn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function js(e, t, o) {
  return this.constructor(e, o);
}
lo = mn.slice, H = { __e: function(e, t, o, n) {
  for (var r, s, l; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), l = r.__d), l)
          return r.__E = r;
      } catch (c) {
        e = c;
      }
  throw e;
} }, _n = 0, gn = function(e) {
  return e != null && e.constructor === void 0;
}, He.prototype.setState = function(e, t) {
  var o;
  o = this.__s != null && this.__s !== this.state ? this.__s : this.__s = fe({}, this.state), typeof e == "function" && (e = e(fe({}, o), this.props)), e && fe(o, e), e != null && this.__v && (t && this._sb.push(t), Ao(this));
}, He.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ao(this));
}, He.prototype.render = ao, Ne = [], at.__r = 0;
var zs = 0;
function k(e, t, o, n, r) {
  var s, l, c = {};
  for (l in t)
    l == "ref" ? s = t[l] : c[l] = t[l];
  var f = { type: e, props: c, key: o, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zs, __source: r, __self: n };
  if (typeof e == "function" && (s = e.defaultProps))
    for (l in s)
      c[l] === void 0 && (c[l] = s[l]);
  return H.vnode && H.vnode(f), f;
}
let Us = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, o) => (o &= 63, o < 36 ? t += o.toString(36) : o < 62 ? t += (o - 26).toString(36).toUpperCase() : o > 62 ? t += "-" : t += "_", t), "");
function Mn(...e) {
  const t = [], o = /* @__PURE__ */ new Map(), n = (r, s) => {
    if (Array.isArray(r) && (s = r[1], r = r[0]), !r.length)
      return;
    const l = o.get(r);
    typeof l == "number" ? t[l][1] = !!s : (o.set(r, t.length), t.push([r, !!s]));
  };
  return e.forEach((r) => {
    typeof r == "function" && (r = r()), Array.isArray(r) ? Mn(...r).forEach(n) : r && typeof r == "object" ? Object.entries(r).forEach(n) : typeof r == "string" && r.split(" ").forEach((s) => n(s, !0));
  }), t.sort((r, s) => (o.get(r[0]) || 0) - (o.get(s[0]) || 0));
}
const F = (...e) => Mn(...e).reduce((t, [o, n]) => (n && t.push(o), t), []).join(" ");
var Dn, T, In, Te, Po, $n = {}, An = [], Ws = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function he(e, t) {
  for (var o in t)
    e[o] = t[o];
  return e;
}
function Nn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Pt(e, t, o, n, r) {
  var s = { type: e, props: t, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r ?? ++In };
  return r == null && T.vnode != null && T.vnode(s), s;
}
function fo(e) {
  return e.children;
}
function Pe(e, t) {
  this.props = e, this.context = t;
}
function ze(e, t) {
  if (t == null)
    return e.__ ? ze(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var o; t < e.__k.length; t++)
    if ((o = e.__k[t]) != null && o.__e != null)
      return o.__e;
  return typeof e.type == "function" ? ze(e) : null;
}
function Hn(e) {
  var t, o;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((o = e.__k[t]) != null && o.__e != null) {
        e.__e = e.__c.base = o.__e;
        break;
      }
    return Hn(e);
  }
}
function Oo(e) {
  (!e.__d && (e.__d = !0) && Te.push(e) && !ht.__r++ || Po !== T.debounceRendering) && ((Po = T.debounceRendering) || setTimeout)(ht);
}
function ht() {
  for (var e; ht.__r = Te.length; )
    e = Te.sort(function(t, o) {
      return t.__v.__b - o.__v.__b;
    }), Te = [], e.some(function(t) {
      var o, n, r, s, l, c;
      t.__d && (l = (s = (o = t).__v).__e, (c = o.__P) && (n = [], (r = he({}, s)).__v = s.__v + 1, Ln(c, s, r, o.__n, c.ownerSVGElement !== void 0, s.__h != null ? [l] : null, n, l ?? ze(s), s.__h), Fs(n, s), s.__e != l && Hn(s)));
    });
}
function Tn(e, t, o, n, r, s, l, c, f, d) {
  var i, p, h, a, u, m, _, y = n && n.__k || An, w = y.length;
  for (o.__k = [], i = 0; i < t.length; i++)
    if ((a = o.__k[i] = (a = t[i]) == null || typeof a == "boolean" ? null : typeof a == "string" || typeof a == "number" || typeof a == "bigint" ? Pt(null, a, null, null, a) : Array.isArray(a) ? Pt(fo, { children: a }, null, null, null) : a.__b > 0 ? Pt(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) != null) {
      if (a.__ = o, a.__b = o.__b + 1, (h = y[i]) === null || h && a.key == h.key && a.type === h.type)
        y[i] = void 0;
      else
        for (p = 0; p < w; p++) {
          if ((h = y[p]) && a.key == h.key && a.type === h.type) {
            y[p] = void 0;
            break;
          }
          h = null;
        }
      Ln(e, a, h = h || $n, r, s, l, c, f, d), u = a.__e, (p = a.ref) && h.ref != p && (_ || (_ = []), h.ref && _.push(h.ref, null, a), _.push(p, a.__c || u, a)), u != null ? (m == null && (m = u), typeof a.type == "function" && a.__k === h.__k ? a.__d = f = Pn(a, f, e) : f = On(e, a, h, y, u, f), typeof o.type == "function" && (o.__d = f)) : f && h.__e == f && f.parentNode != e && (f = ze(h));
    }
  for (o.__e = m, i = w; i--; )
    y[i] != null && zn(y[i], y[i]);
  if (_)
    for (i = 0; i < _.length; i++)
      jn(_[i], _[++i], _[++i]);
}
function Pn(e, t, o) {
  for (var n, r = e.__k, s = 0; r && s < r.length; s++)
    (n = r[s]) && (n.__ = e, t = typeof n.type == "function" ? Pn(n, t, o) : On(o, n, n, r, n.__e, t));
  return t;
}
function On(e, t, o, n, r, s) {
  var l, c, f;
  if (t.__d !== void 0)
    l = t.__d, t.__d = void 0;
  else if (o == null || r != s || r.parentNode == null)
    e:
      if (s == null || s.parentNode !== e)
        e.appendChild(r), l = null;
      else {
        for (c = s, f = 0; (c = c.nextSibling) && f < n.length; f += 2)
          if (c == r)
            break e;
        e.insertBefore(r, s), l = s;
      }
  return l !== void 0 ? l : r.nextSibling;
}
function Ks(e, t, o, n, r) {
  var s;
  for (s in o)
    s === "children" || s === "key" || s in t || ut(e, s, null, o[s], n);
  for (s in t)
    r && typeof t[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || o[s] === t[s] || ut(e, s, t[s], o[s], n);
}
function Lo(e, t, o) {
  t[0] === "-" ? e.setProperty(t, o) : e[t] = o == null ? "" : typeof o != "number" || Ws.test(t) ? o : o + "px";
}
function ut(e, t, o, n, r) {
  var s;
  e:
    if (t === "style")
      if (typeof o == "string")
        e.style.cssText = o;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            o && t in o || Lo(e.style, t, "");
        if (o)
          for (t in o)
            n && o[t] === n[t] || Lo(e.style, t, o[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = o, o ? n || e.addEventListener(t, s ? zo : jo, s) : e.removeEventListener(t, s ? zo : jo, s);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = o ?? "";
          break e;
        } catch {
        }
      typeof o == "function" || (o == null || o === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, o));
    }
}
function jo(e) {
  this.l[e.type + !1](T.event ? T.event(e) : e);
}
function zo(e) {
  this.l[e.type + !0](T.event ? T.event(e) : e);
}
function Ln(e, t, o, n, r, s, l, c, f) {
  var d, i, p, h, a, u, m, _, y, w, C, R, P, E, D, v = t.type;
  if (t.constructor !== void 0)
    return null;
  o.__h != null && (f = o.__h, c = t.__e = o.__e, t.__h = null, s = [c]), (d = T.__b) && d(t);
  try {
    e:
      if (typeof v == "function") {
        if (_ = t.props, y = (d = v.contextType) && n[d.__c], w = d ? y ? y.props.value : d.__ : n, o.__c ? m = (i = t.__c = o.__c).__ = i.__E : ("prototype" in v && v.prototype.render ? t.__c = i = new v(_, w) : (t.__c = i = new Pe(_, w), i.constructor = v, i.render = Bs), y && y.sub(i), i.props = _, i.state || (i.state = {}), i.context = w, i.__n = n, p = i.__d = !0, i.__h = [], i._sb = []), i.__s == null && (i.__s = i.state), v.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = he({}, i.__s)), he(i.__s, v.getDerivedStateFromProps(_, i.__s))), h = i.props, a = i.state, p)
          v.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v.getDerivedStateFromProps == null && _ !== h && i.componentWillReceiveProps != null && i.componentWillReceiveProps(_, w), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(_, i.__s, w) === !1 || t.__v === o.__v) {
            for (i.props = _, i.state = i.__s, t.__v !== o.__v && (i.__d = !1), i.__v = t, t.__e = o.__e, t.__k = o.__k, t.__k.forEach(function(b) {
              b && (b.__ = t);
            }), C = 0; C < i._sb.length; C++)
              i.__h.push(i._sb[C]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(_, i.__s, w), i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(h, a, u);
          });
        }
        if (i.context = w, i.props = _, i.__v = t, i.__P = e, R = T.__r, P = 0, "prototype" in v && v.prototype.render) {
          for (i.state = i.__s, i.__d = !1, R && R(t), d = i.render(i.props, i.state, i.context), E = 0; E < i._sb.length; E++)
            i.__h.push(i._sb[E]);
          i._sb = [];
        } else
          do
            i.__d = !1, R && R(t), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++P < 25);
        i.state = i.__s, i.getChildContext != null && (n = he(he({}, n), i.getChildContext())), p || i.getSnapshotBeforeUpdate == null || (u = i.getSnapshotBeforeUpdate(h, a)), D = d != null && d.type === fo && d.key == null ? d.props.children : d, Tn(e, Array.isArray(D) ? D : [D], t, o, n, r, s, l, c, f), i.base = t.__e, t.__h = null, i.__h.length && l.push(i), m && (i.__E = i.__ = null), i.__e = !1;
      } else
        s == null && t.__v === o.__v ? (t.__k = o.__k, t.__e = o.__e) : t.__e = Vs(o.__e, t, o, n, r, s, l, f);
    (d = T.diffed) && d(t);
  } catch (b) {
    t.__v = null, (f || s != null) && (t.__e = c, t.__h = !!f, s[s.indexOf(c)] = null), T.__e(b, t, o);
  }
}
function Fs(e, t) {
  T.__c && T.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      T.__e(n, o.__v);
    }
  });
}
function Vs(e, t, o, n, r, s, l, c) {
  var f, d, i, p = o.props, h = t.props, a = t.type, u = 0;
  if (a === "svg" && (r = !0), s != null) {
    for (; u < s.length; u++)
      if ((f = s[u]) && "setAttribute" in f == !!a && (a ? f.localName === a : f.nodeType === 3)) {
        e = f, s[u] = null;
        break;
      }
  }
  if (e == null) {
    if (a === null)
      return document.createTextNode(h);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a, h.is && h), s = null, c = !1;
  }
  if (a === null)
    p === h || c && e.data === h || (e.data = h);
  else {
    if (s = s && Dn.call(e.childNodes), d = (p = o.props || $n).dangerouslySetInnerHTML, i = h.dangerouslySetInnerHTML, !c) {
      if (s != null)
        for (p = {}, u = 0; u < e.attributes.length; u++)
          p[e.attributes[u].name] = e.attributes[u].value;
      (i || d) && (i && (d && i.__html == d.__html || i.__html === e.innerHTML) || (e.innerHTML = i && i.__html || ""));
    }
    if (Ks(e, h, p, r, c), i)
      t.__k = [];
    else if (u = t.props.children, Tn(e, Array.isArray(u) ? u : [u], t, o, n, r && a !== "foreignObject", s, l, s ? s[0] : o.__k && ze(o, 0), c), s != null)
      for (u = s.length; u--; )
        s[u] != null && Nn(s[u]);
    c || ("value" in h && (u = h.value) !== void 0 && (u !== e.value || a === "progress" && !u || a === "option" && u !== p.value) && ut(e, "value", u, p.value, !1), "checked" in h && (u = h.checked) !== void 0 && u !== e.checked && ut(e, "checked", u, p.checked, !1));
  }
  return e;
}
function jn(e, t, o) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    T.__e(n, o);
  }
}
function zn(e, t, o) {
  var n, r;
  if (T.unmount && T.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || jn(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        T.__e(s, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (r = 0; r < n.length; r++)
      n[r] && zn(n[r], t, o || typeof e.type != "function");
  o || e.__e == null || Nn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Bs(e, t, o) {
  return this.constructor(e, o);
}
Dn = An.slice, T = { __e: function(e, t, o, n) {
  for (var r, s, l; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), l = r.__d), l)
          return r.__E = r;
      } catch (c) {
        e = c;
      }
  throw e;
} }, In = 0, Pe.prototype.setState = function(e, t) {
  var o;
  o = this.__s != null && this.__s !== this.state ? this.__s : this.__s = he({}, this.state), typeof e == "function" && (e = e(he({}, o), this.props)), e && he(o, e), e != null && this.__v && (t && this._sb.push(t), Oo(this));
}, Pe.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Oo(this));
}, Pe.prototype.render = fo, Te = [], ht.__r = 0;
var Gs = 0;
function Uo(e, t, o, n, r) {
  var s, l, c = {};
  for (l in t)
    l == "ref" ? s = t[l] : c[l] = t[l];
  var f = { type: e, props: c, key: o, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gs, __source: r, __self: n };
  if (typeof e == "function" && (s = e.defaultProps))
    for (l in s)
      c[l] === void 0 && (c[l] = s[l]);
  return T.vnode && T.vnode(f), f;
}
var _e, ge;
class Wo extends Pe {
  constructor(o) {
    super(o);
    x(this, _e, 0);
    x(this, ge, null);
    j(this, "_handleWheel", (o) => {
      const { wheelContainer: n } = this.props, r = o.target;
      if (!(!r || !n) && (typeof n == "string" && r.closest(n) || typeof n == "object")) {
        const s = (this.props.type === "horz" ? o.deltaX : o.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(s) && o.preventDefault();
      }
    });
    j(this, "_handleMouseMove", (o) => {
      const { dragStart: n } = this.state;
      n && (g(this, _e) && cancelAnimationFrame(g(this, _e)), M(this, _e, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? o.clientX - n.x : o.clientY - n.y;
        this.scroll(n.offset + r * this.props.scrollSize / this.props.clientSize), M(this, _e, 0);
      })), o.preventDefault());
    });
    j(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    j(this, "_handleMouseDown", (o) => {
      this.state.dragStart || this.setState({ dragStart: { x: o.clientX, y: o.clientY, offset: this.scrollPos } }), o.stopPropagation();
    });
    j(this, "_handleClick", (o) => {
      const n = o.currentTarget;
      if (!n)
        return;
      const r = n.getBoundingClientRect(), { type: s, clientSize: l, scrollSize: c } = this.props, f = (s === "horz" ? o.clientX - r.left : o.clientY - r.top) - this.barSize / 2;
      this.scroll(f * c / l), o.preventDefault();
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
    const { scrollSize: o, clientSize: n } = this.props;
    return Math.max(0, o - n);
  }
  get barSize() {
    const { clientSize: o, scrollSize: n, size: r = 12, minBarSize: s = 3 * r } = this.props;
    return Math.max(Math.round(o * o / n), s);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: o } = this.props;
    o && (M(this, ge, typeof o == "string" ? document : o.current), g(this, ge).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), g(this, ge) && g(this, ge).removeEventListener("wheel", this._handleWheel);
  }
  scroll(o) {
    return o = Math.max(0, Math.min(Math.round(o), this.maxScrollPos)), o === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(o) : this.setState({
      scrollPos: o
    }, this._afterScroll.bind(this, o)), !0);
  }
  scrollOffset(o) {
    return this.scroll(this.scrollPos + o);
  }
  _afterScroll(o) {
    const { onScroll: n } = this.props;
    n && n(o, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: o,
      type: n,
      size: r = 12,
      className: s,
      style: l,
      left: c,
      top: f,
      bottom: d,
      right: i
    } = this.props, { maxScrollPos: p, scrollPos: h } = this, { dragStart: a } = this.state, u = {
      left: c,
      top: f,
      bottom: d,
      right: i,
      ...l
    }, m = {};
    return n === "horz" ? (u.height = r, u.width = o, m.width = this.barSize, m.left = Math.round(Math.min(p, h) * (o - m.width) / p)) : (u.width = r, u.height = o, m.height = this.barSize, m.top = Math.round(Math.min(p, h) * (o - m.height) / p)), /* @__PURE__ */ Uo(
      "div",
      {
        className: F("scrollbar", s, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": a
        }),
        style: u,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ Uo(
          "div",
          {
            className: "scrollbar-bar",
            style: m,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
_e = new WeakMap(), ge = new WeakMap();
function Xt(e, t, o) {
  return e && (t && (e = Math.max(t, e)), o && (e = Math.min(o, e))), e;
}
function Un({ col: e, className: t, height: o, row: n, onRenderCell: r, style: s, outerStyle: l, children: c, outerClass: f, ...d }) {
  var v;
  const i = {
    left: e.left,
    width: e.realWidth,
    height: o,
    ...l
  }, { align: p, border: h } = e.setting, a = {
    justifyContent: p ? p === "left" ? "start" : p === "right" ? "end" : p : void 0,
    ...e.setting.cellStyle,
    ...s
  }, u = ["dtable-cell", f, e.setting.className, {
    "has-border-left": h === !0 || h === "left",
    "has-border-right": h === !0 || h === "right"
  }], m = ["dtable-cell-content", t], _ = [c ?? ((v = n.data) == null ? void 0 : v[e.name]) ?? ""], y = r ? r(_, { row: n, col: e }, co) : _, w = [], C = [], R = {}, P = {};
  let E = "div";
  y == null || y.forEach((b) => {
    if (typeof b == "object" && b && !gn(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const Se = b.outer ? w : C;
      b.html ? Se.push(/* @__PURE__ */ k("div", { className: F("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? i : a, b.style), b.className && (b.outer ? u : m).push(b.className), b.children && Se.push(b.children), b.attrs && Object.assign(b.outer ? R : P, b.attrs)), b.tagName && !b.outer && (E = b.tagName);
    } else
      C.push(b);
  });
  const D = E;
  return /* @__PURE__ */ k(
    "div",
    {
      className: F(u),
      style: i,
      "data-col": e.name,
      ...d,
      ...R,
      children: [
        C.length > 0 && /* @__PURE__ */ k(D, { className: F(m), style: a, ...P, children: C }),
        w
      ]
    }
  );
}
function Ot({ row: e, className: t, top: o = 0, left: n = 0, width: r, height: s, cols: l, CellComponent: c = Un, onRenderCell: f }) {
  return /* @__PURE__ */ k("div", { className: F("dtable-cells", t), style: { top: o, left: n, width: r, height: s }, children: l.map((d) => d.visible ? /* @__PURE__ */ k(
    c,
    {
      col: d,
      row: e,
      onRenderCell: f
    },
    d.name
  ) : null) });
}
function Wn({
  row: e,
  className: t,
  top: o,
  height: n,
  fixedLeftCols: r,
  fixedRightCols: s,
  scrollCols: l,
  fixedLeftWidth: c,
  scrollWidth: f,
  scrollColsWidth: d,
  fixedRightWidth: i,
  scrollLeft: p,
  CellComponent: h = Un,
  onRenderCell: a,
  style: u,
  ...m
}) {
  let _ = null;
  r != null && r.length && (_ = /* @__PURE__ */ k(
    Ot,
    {
      className: "dtable-fixed-left",
      cols: r,
      width: c,
      row: e,
      CellComponent: h,
      onRenderCell: a
    }
  ));
  let y = null;
  l != null && l.length && (y = /* @__PURE__ */ k(
    Ot,
    {
      className: "dtable-flexable",
      cols: l,
      left: c - p,
      width: Math.max(f, d),
      row: e,
      CellComponent: h,
      onRenderCell: a
    }
  ));
  let w = null;
  s != null && s.length && (w = /* @__PURE__ */ k(
    Ot,
    {
      className: "dtable-fixed-right",
      cols: s,
      left: c + f,
      width: i,
      row: e,
      CellComponent: h,
      onRenderCell: a
    }
  ));
  const C = { top: o, height: n, lineHeight: `${n - 2}px`, ...u };
  return /* @__PURE__ */ k(
    "div",
    {
      className: F("dtable-row", t),
      style: C,
      "data-id": e.id,
      ...m,
      children: [
        _,
        y,
        w
      ]
    }
  );
}
function Xs({ height: e, onRenderRow: t, ...o }) {
  const n = {
    height: e,
    ...o,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const r = t({ props: n }, co);
    r && Object.assign(n, r);
  }
  return /* @__PURE__ */ k("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ k(Wn, { ...n }) });
}
function Ys({
  className: e,
  style: t,
  top: o,
  rows: n,
  height: r,
  rowHeight: s,
  scrollTop: l,
  onRenderRow: c,
  ...f
}) {
  return t = { ...t, top: o, height: r }, /* @__PURE__ */ k("div", { className: F("dtable-rows", e), style: t, children: n.map((d) => {
    const i = {
      className: `dtable-row-${d.index % 2 ? "odd" : "even"}`,
      row: d,
      top: d.top - l,
      height: s,
      ...f
    }, p = c == null ? void 0 : c({ props: i, row: d }, co);
    return p && Object.assign(i, p), /* @__PURE__ */ k(Wn, { ...i });
  }) });
}
const dt = /* @__PURE__ */ new Map(), pt = [];
function Kn(e, t) {
  const { name: o } = e;
  if (!(t != null && t.override) && dt.has(o))
    throw new Error(`DTable: Plugin with name ${o} already exists`);
  dt.set(o, e), t != null && t.buildIn && !pt.includes(o) && pt.push(o);
}
function K(e, t) {
  Kn(e, t);
  const o = (n) => {
    if (!n)
      return e;
    const { defaultOptions: r, ...s } = e;
    return {
      ...s,
      defaultOptions: { ...r, ...n }
    };
  };
  return o.plugin = e, o;
}
function Fn(e) {
  return dt.delete(e);
}
function qs(e) {
  if (typeof e == "string") {
    const t = dt.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Vn(e, t, o) {
  return t.forEach((n) => {
    var s;
    if (!n)
      return;
    const r = qs(n);
    r && (o.has(r.name) || ((s = r.plugins) != null && s.length && Vn(e, r.plugins, o), e.push(r), o.add(r.name)));
  }), e;
}
function Js(e = [], t = !0) {
  return t && pt.length && e.unshift(...pt), e != null && e.length ? Vn([], e, /* @__PURE__ */ new Set()) : [];
}
function Ko() {
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
function Qs(e) {
  const {
    tag: t,
    className: o,
    style: n,
    renders: r,
    generateArgs: s = [],
    generatorThis: l,
    generators: c,
    onGenerate: f,
    onRenderItem: d,
    ...i
  } = e, p = [o], h = { ...n }, a = [], u = [];
  return r.forEach((m) => {
    const _ = [];
    typeof m == "string" && c && c[m] && (m = c[m]), typeof m == "function" ? f ? _.push(...f.call(l, m, a, ...s)) : _.push(...m.call(l, a, ...s) ?? []) : _.push(m), _.forEach((y) => {
      y != null && (typeof y == "object" && !tn(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? a.push(
        /* @__PURE__ */ dn("div", { className: F(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? u.push(y.__html) : (y.style && Object.assign(h, y.style), y.className && p.push(y.className), y.children && a.push(y.children), y.attrs && Object.assign(i, y.attrs)) : a.push(y));
    });
  }), u.length && Object.assign(i, { dangerouslySetInnerHTML: { __html: u } }), [{
    className: F(p),
    style: h,
    ...i
  }, a];
}
function Fo({
  tag: e = "div",
  ...t
}) {
  const [o, n] = Qs(t);
  return sn(e, o, ...n);
}
var tt, ye, be, ie, G, le, U, B, X, ve, Fe, Ve, se, Ce, xe, _t, Bn, gt, Gn, yt, Xn, mt, Yn, Be, Yt, wt, bt, Ge, Xe, vt, Ct, xt, qn, kt, Jn, Rt, Qn;
let Zs = (tt = class extends He {
  constructor(o) {
    super(o);
    x(this, _t);
    x(this, gt);
    x(this, yt);
    x(this, mt);
    x(this, Be);
    x(this, xt);
    x(this, kt);
    x(this, Rt);
    j(this, "ref", bn());
    x(this, ye, 0);
    x(this, be, void 0);
    x(this, ie, !1);
    x(this, G, void 0);
    x(this, le, void 0);
    x(this, U, []);
    x(this, B, void 0);
    x(this, X, /* @__PURE__ */ new Map());
    x(this, ve, {});
    x(this, Fe, void 0);
    x(this, Ve, []);
    j(this, "updateLayout", () => {
      g(this, ye) && cancelAnimationFrame(g(this, ye)), M(this, ye, requestAnimationFrame(() => {
        M(this, B, void 0), this.forceUpdate(), M(this, ye, 0);
      }));
    });
    x(this, se, (o, n) => {
      n = n || o.type;
      const r = g(this, X).get(n);
      if (r != null && r.length) {
        for (const s of r)
          if (s.call(this, o) === !1) {
            o.stopPropagation(), o.preventDefault();
            break;
          }
      }
    });
    x(this, Ce, (o) => {
      g(this, se).call(this, o, `window_${o.type}`);
    });
    x(this, xe, (o) => {
      g(this, se).call(this, o, `document_${o.type}`);
    });
    x(this, wt, (o, n) => {
      if (this.options.onRenderRow) {
        const r = this.options.onRenderRow.call(this, o, n);
        r && Object.assign(o.props, r);
      }
      return g(this, U).forEach((r) => {
        if (r.onRenderRow) {
          const s = r.onRenderRow.call(this, o, n);
          s && Object.assign(o.props, s);
        }
      }), o.props;
    });
    x(this, bt, (o, n) => (this.options.onRenderHeaderRow && (o.props = this.options.onRenderHeaderRow.call(this, o, n)), g(this, U).forEach((r) => {
      r.onRenderHeaderRow && (o.props = r.onRenderHeaderRow.call(this, o, n));
    }), o.props));
    x(this, Ge, (o, n, r) => {
      const { row: s, col: l } = n;
      o[0] = this.getCellValue(s, l);
      const c = s.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return l.setting[c] && (o = l.setting[c].call(this, o, n, r)), this.options[c] && (o = this.options[c].call(this, o, n, r)), g(this, U).forEach((f) => {
        f[c] && (o = f[c].call(this, o, n, r));
      }), o;
    });
    x(this, Xe, (o, n) => {
      n === "horz" ? this.scroll({ scrollLeft: o }) : this.scroll({ scrollTop: o });
    });
    x(this, vt, (o) => {
      var c, f, d, i, p;
      const n = this.getPointerInfo(o);
      if (!n)
        return;
      const { rowID: r, colName: s, cellElement: l } = n;
      if (r === "HEADER")
        l && ((c = this.options.onHeaderCellClick) == null || c.call(this, o, { colName: s, element: l }), g(this, U).forEach((h) => {
          var a;
          (a = h.onHeaderCellClick) == null || a.call(this, o, { colName: s, element: l });
        }));
      else {
        const { rowElement: h } = n, a = this.layout.visibleRows.find((u) => u.id === r);
        if (l) {
          if (((f = this.options.onCellClick) == null ? void 0 : f.call(this, o, { colName: s, rowID: r, rowInfo: a, element: l, rowElement: h })) === !0)
            return;
          for (const u of g(this, U))
            if (((d = u.onCellClick) == null ? void 0 : d.call(this, o, { colName: s, rowID: r, rowInfo: a, element: l, rowElement: h })) === !0)
              return;
        }
        if (((i = this.options.onRowClick) == null ? void 0 : i.call(this, o, { rowID: r, rowInfo: a, element: h })) === !0)
          return;
        for (const u of g(this, U))
          if (((p = u.onRowClick) == null ? void 0 : p.call(this, o, { rowID: r, rowInfo: a, element: h })) === !0)
            return;
      }
    });
    x(this, Ct, (o) => {
      const n = o.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    });
    M(this, be, o.id ?? `dtable-${Us(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, M(this, le, Object.freeze(Js(o.plugins))), g(this, le).forEach((n) => {
      var c;
      const { methods: r, data: s, state: l } = n;
      r && Object.entries(r).forEach(([f, d]) => {
        typeof d == "function" && Object.assign(this, { [f]: d.bind(this) });
      }), s && Object.assign(g(this, ve), s.call(this)), l && Object.assign(this.state, l.call(this)), (c = n.onCreate) == null || c.call(this, n);
    });
  }
  get options() {
    var o;
    return ((o = g(this, B)) == null ? void 0 : o.options) || g(this, G) || Ko();
  }
  get plugins() {
    return g(this, U);
  }
  get layout() {
    return g(this, B);
  }
  get id() {
    return g(this, be);
  }
  get data() {
    return g(this, ve);
  }
  get parent() {
    var o;
    return this.props.parent ?? ((o = this.ref.current) == null ? void 0 : o.parentElement);
  }
  componentWillReceiveProps() {
    M(this, G, void 0);
  }
  componentDidMount() {
    if (g(this, ie) ? this.forceUpdate() : z(this, Be, Yt).call(this), g(this, U).forEach((o) => {
      let { events: n } = o;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([r, s]) => {
        s && this.on(r, s);
      }));
    }), this.on("click", g(this, vt)), this.on("keydown", g(this, Ct)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: o } = this;
        if (o) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(o), M(this, Fe, n);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    g(this, U).forEach((o) => {
      var n;
      (n = o.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    g(this, ie) ? z(this, Be, Yt).call(this) : g(this, U).forEach((o) => {
      var n;
      (n = o.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = g(this, Fe)) == null || n.disconnect();
    const { current: o } = this.ref;
    if (o)
      for (const r of g(this, X).keys())
        r.startsWith("window_") ? window.removeEventListener(r.replace("window_", ""), g(this, Ce)) : r.startsWith("document_") ? document.removeEventListener(r.replace("document_", ""), g(this, xe)) : o.removeEventListener(r, g(this, se));
    g(this, U).forEach((r) => {
      var s;
      (s = r.onUnmounted) == null || s.call(this);
    }), g(this, le).forEach((r) => {
      var s;
      (s = r.onDestory) == null || s.call(this);
    }), M(this, ve, {}), g(this, X).clear();
  }
  on(o, n, r) {
    var l;
    r && (o = `${r}_${o}`);
    const s = g(this, X).get(o);
    s ? s.push(n) : (g(this, X).set(o, [n]), o.startsWith("window_") ? window.addEventListener(o.replace("window_", ""), g(this, Ce)) : o.startsWith("document_") ? document.addEventListener(o.replace("document_", ""), g(this, xe)) : (l = this.ref.current) == null || l.addEventListener(o, g(this, se)));
  }
  off(o, n, r) {
    var c;
    r && (o = `${r}_${o}`);
    const s = g(this, X).get(o);
    if (!s)
      return;
    const l = s.indexOf(n);
    l >= 0 && s.splice(l, 1), s.length || (g(this, X).delete(o), o.startsWith("window_") ? window.removeEventListener(o.replace("window_", ""), g(this, Ce)) : o.startsWith("document_") ? document.removeEventListener(o.replace("document_", ""), g(this, xe)) : (c = this.ref.current) == null || c.removeEventListener(o, g(this, se)));
  }
  emitCustomEvent(o, n) {
    g(this, se).call(this, n instanceof Event ? n : new CustomEvent(o, { detail: n }), o);
  }
  scroll(o, n) {
    const { scrollLeft: r, scrollTop: s, rowsHeightTotal: l, rowsHeight: c, rowHeight: f, colsInfo: { scrollWidth: d, scrollColsWidth: i } } = this.layout, { to: p } = o;
    let { scrollLeft: h, scrollTop: a } = o;
    if (p === "up" || p === "down")
      a = s + (p === "down" ? 1 : -1) * Math.floor(c / f) * f;
    else if (p === "left" || p === "right")
      h = r + (p === "right" ? 1 : -1) * d;
    else if (p === "home")
      a = 0;
    else if (p === "end")
      a = l - c;
    else if (p === "left-begin")
      h = 0;
    else if (p === "right-end")
      h = i - d;
    else {
      const { offsetLeft: m, offsetTop: _ } = o;
      typeof m == "number" && (h = r + m), typeof _ == "number" && (h = s + _);
    }
    const u = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, i - d)), h !== r && (u.scrollLeft = h)), typeof a == "number" && (a = Math.max(0, Math.min(a, l - c)), a !== s && (u.scrollTop = a)), Object.keys(u).length ? (this.setState(u, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, u), n == null || n.call(this, !0);
    }), !0) : (n == null || n.call(this, !1), !1);
  }
  getColInfo(o) {
    if (o === void 0)
      return;
    if (typeof o == "object")
      return o;
    const { colsMap: n, colsList: r } = this.layout;
    return typeof o == "number" ? r[o] : n[o];
  }
  getRowInfo(o) {
    if (o === void 0)
      return;
    if (typeof o == "object")
      return o;
    if (o === -1 || o === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: n, rowsMap: r } = this.layout;
    return typeof o == "number" ? n[o] : r[o];
  }
  getCellValue(o, n) {
    var f;
    const r = typeof o == "object" ? o : this.getRowInfo(o);
    if (!r)
      return;
    const s = typeof n == "object" ? n : this.getColInfo(n);
    if (!s)
      return;
    let l = r.id === "HEADER" ? s.setting.title : (f = r.data) == null ? void 0 : f[s.name];
    const { cellValueGetter: c } = this.options;
    return c && (l = c.call(this, r, s, l)), l;
  }
  getRowInfoByIndex(o) {
    return this.layout.rows[o];
  }
  update(o = {}, n) {
    if (!g(this, G))
      return;
    typeof o == "function" && (n = o, o = {});
    const { dirtyType: r, state: s } = o;
    if (r === "layout")
      M(this, B, void 0);
    else if (r === "options") {
      if (M(this, G, void 0), !g(this, B))
        return;
      M(this, B, void 0);
    }
    this.setState(s ?? ((l) => ({ renderCount: l.renderCount + 1 })), n);
  }
  getPointerInfo(o) {
    const n = o.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const r = n.closest(".dtable-cell");
    if (!r)
      return;
    const s = r.closest(".dtable-row");
    if (!s)
      return;
    const l = r == null ? void 0 : r.getAttribute("data-col"), c = s == null ? void 0 : s.getAttribute("data-id");
    if (!(typeof l != "string" || typeof c != "string"))
      return {
        cellElement: r,
        rowElement: s,
        colName: l,
        rowID: c,
        target: n
      };
  }
  i18n(o, n, r) {
    return qe(g(this, Ve), o, n, r, this.options.lang) ?? `{i18n:${o}}`;
  }
  render() {
    const o = z(this, Rt, Qn).call(this), { className: n, rowHover: r, colHover: s, cellHover: l, bordered: c, striped: f, scrollbarHover: d } = this.options, i = { width: o == null ? void 0 : o.width, height: o == null ? void 0 : o.height }, p = ["dtable", n, {
      "dtable-hover-row": r,
      "dtable-hover-col": s,
      "dtable-hover-cell": l,
      "dtable-bordered": c,
      "dtable-striped": f,
      "dtable-scrolled-down": ((o == null ? void 0 : o.scrollTop) ?? 0) > 0,
      "scrollbar-hover": d
    }], h = [];
    return o && g(this, U).forEach((a) => {
      var m;
      const u = (m = a.onRender) == null ? void 0 : m.call(this, o);
      u && (u.style && Object.assign(i, u.style), u.className && p.push(u.className), u.children && h.push(u.children));
    }), /* @__PURE__ */ k(
      "div",
      {
        id: g(this, be),
        className: F(p),
        style: i,
        ref: this.ref,
        tabIndex: -1,
        children: [
          o && z(this, _t, Bn).call(this, o),
          o && z(this, gt, Gn).call(this, o),
          o && z(this, yt, Xn).call(this, o),
          o && z(this, mt, Yn).call(this, o)
        ]
      }
    );
  }
}, ye = new WeakMap(), be = new WeakMap(), ie = new WeakMap(), G = new WeakMap(), le = new WeakMap(), U = new WeakMap(), B = new WeakMap(), X = new WeakMap(), ve = new WeakMap(), Fe = new WeakMap(), Ve = new WeakMap(), se = new WeakMap(), Ce = new WeakMap(), xe = new WeakMap(), _t = new WeakSet(), Bn = function(o) {
  const { header: n, colsInfo: r, headerHeight: s, scrollLeft: l } = o;
  if (!n)
    return null;
  if (n === !0)
    return /* @__PURE__ */ k(
      Xs,
      {
        scrollLeft: l,
        height: s,
        onRenderCell: g(this, Ge),
        onRenderRow: g(this, bt),
        ...r
      }
    );
  const c = Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ k(
    Fo,
    {
      className: "dtable-header",
      style: { height: s },
      renders: c,
      generateArgs: [o],
      generatorThis: this
    }
  );
}, gt = new WeakSet(), Gn = function(o) {
  const { headerHeight: n, rowsHeight: r, visibleRows: s, rowHeight: l, colsInfo: c, scrollLeft: f, scrollTop: d } = o;
  return /* @__PURE__ */ k(
    Ys,
    {
      top: n,
      height: r,
      rows: s,
      rowHeight: l,
      scrollLeft: f,
      scrollTop: d,
      onRenderCell: g(this, Ge),
      onRenderRow: g(this, wt),
      ...c
    }
  );
}, yt = new WeakSet(), Xn = function(o) {
  const { footer: n } = o;
  if (!n)
    return null;
  const r = typeof n == "function" ? n.call(this, o) : Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ k(
    Fo,
    {
      className: "dtable-footer",
      style: { height: o.footerHeight, top: o.rowsHeight + o.headerHeight },
      renders: r,
      generateArgs: [o],
      generatorThis: this,
      generators: o.footerGenerators
    }
  );
}, mt = new WeakSet(), Yn = function(o) {
  const n = [], { scrollLeft: r, colsInfo: s, scrollTop: l, rowsHeight: c, rowsHeightTotal: f, footerHeight: d } = o, { scrollColsWidth: i, scrollWidth: p } = s, { scrollbarSize: h = 12, horzScrollbarPos: a } = this.options;
  return i > p && n.push(
    /* @__PURE__ */ k(
      Wo,
      {
        type: "horz",
        scrollPos: r,
        scrollSize: i,
        clientSize: p,
        onScroll: g(this, Xe),
        left: s.fixedLeftWidth,
        bottom: (a === "inside" ? 0 : -h) + d,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), f > c && n.push(
    /* @__PURE__ */ k(
      Wo,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: f,
        clientSize: c,
        onScroll: g(this, Xe),
        right: 0,
        size: h,
        top: o.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), n.length ? n : null;
}, Be = new WeakSet(), Yt = function() {
  var o;
  M(this, ie, !1), (o = this.options.afterRender) == null || o.call(this), g(this, U).forEach((n) => {
    var r;
    return (r = n.afterRender) == null ? void 0 : r.call(this);
  });
}, wt = new WeakMap(), bt = new WeakMap(), Ge = new WeakMap(), Xe = new WeakMap(), vt = new WeakMap(), Ct = new WeakMap(), xt = new WeakSet(), qn = function() {
  if (g(this, G))
    return !1;
  const n = { ...Ko(), ...g(this, le).reduce((r, s) => {
    const { defaultOptions: l } = s;
    return l && Object.assign(r, l), r;
  }, {}), ...this.props };
  return M(this, G, n), M(this, U, g(this, le).reduce((r, s) => {
    const { when: l, options: c } = s;
    return (!l || l(n)) && (r.push(s), c && Object.assign(n, typeof c == "function" ? c.call(this, n) : c)), r;
  }, [])), M(this, Ve, [this.options.i18n, ...this.plugins.map((r) => r.i18n)].filter(Boolean)), !0;
}, kt = new WeakSet(), Jn = function() {
  var wo, bo;
  const { plugins: o } = this;
  let n = g(this, G);
  const r = {
    flex: /* @__PURE__ */ k("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ k("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  o.forEach((S) => {
    var Z;
    const L = (Z = S.beforeLayout) == null ? void 0 : Z.call(this, n);
    L && (n = { ...n, ...L }), Object.assign(r, S.footer);
  });
  const { defaultColWidth: s, minColWidth: l, maxColWidth: c } = n, f = [], d = [], i = [], p = {}, h = [], a = [];
  let u = 0, m = 0, _ = 0;
  n.cols.forEach((S) => {
    if (S.hidden)
      return;
    const {
      name: L,
      type: Z = "",
      fixed: ee = !1,
      flex: de = !1,
      width: Me = s,
      minWidth: De = l,
      maxWidth: At = c,
      ...ys
    } = S, I = {
      name: L,
      type: Z,
      setting: {
        name: L,
        type: Z,
        fixed: ee,
        flex: de,
        width: Me,
        minWidth: De,
        maxWidth: At,
        ...ys
      },
      flex: ee ? 0 : de === !0 ? 1 : typeof de == "number" ? de : 0,
      left: 0,
      width: Xt(Me, De, At),
      realWidth: 0,
      visible: !0,
      index: h.length
    };
    o.forEach((vo) => {
      var Co, xo;
      const Je = (Co = vo.colTypes) == null ? void 0 : Co[Z];
      if (Je) {
        const ko = typeof Je == "function" ? Je(I) : Je;
        ko && Object.assign(I.setting, ko);
      }
      (xo = vo.onAddCol) == null || xo.call(this, I);
    }), I.width = Xt(I.setting.width ?? I.width, I.setting.minWidth ?? De, I.setting.maxWidth ?? At), I.realWidth = I.realWidth || I.width, ee === "left" ? (I.left = u, u += I.width, f.push(I)) : ee === "right" ? (I.left = m, m += I.width, d.push(I)) : (I.left = _, _ += I.width, i.push(I)), I.flex && a.push(I), h.push(I), p[I.name] = I;
  });
  let y = n.width, w = 0;
  const C = u + _ + m;
  if (typeof y == "function" && (y = y.call(this, C)), y === "auto")
    w = C;
  else if (y === "100%") {
    const { parent: S } = this;
    if (S)
      w = S.clientWidth;
    else {
      w = 0, M(this, ie, !0);
      return;
    }
  } else
    w = y ?? 0;
  const { data: R, rowKey: P = "id", rowHeight: E } = n, D = [], v = (S, L, Z) => {
    var de, Me;
    const ee = { data: Z ?? { [P]: S }, id: S, index: D.length, top: 0 };
    if (Z || (ee.lazy = !0), D.push(ee), ((de = n.onAddRow) == null ? void 0 : de.call(this, ee, L)) !== !1) {
      for (const De of o)
        if (((Me = De.onAddRow) == null ? void 0 : Me.call(this, ee, L)) === !1)
          return;
    }
  };
  if (typeof R == "number")
    for (let S = 0; S < R; S++)
      v(`${S}`, S);
  else
    Array.isArray(R) && R.forEach((S, L) => {
      typeof S == "object" ? v(`${S[P] ?? ""}`, L, S) : v(`${S ?? ""}`, L);
    });
  let b = D;
  const Se = {};
  if (n.onAddRows) {
    const S = n.onAddRows.call(this, b);
    S && (b = S);
  }
  for (const S of o) {
    const L = (wo = S.onAddRows) == null ? void 0 : wo.call(this, b);
    L && (b = L);
  }
  b.forEach((S, L) => {
    Se[S.id] = S, S.index = L, S.top = S.index * E;
  });
  const { header: _o, footer: go } = n, Dt = _o ? n.headerHeight || E : 0, It = go ? n.footerHeight || E : 0;
  let Q = n.height, ue = 0;
  const yo = b.length * E, $t = Dt + It + yo;
  if (typeof Q == "function" && (Q = Q.call(this, $t)), Q === "auto")
    ue = $t;
  else if (typeof Q == "object")
    ue = Math.min(Q.max, Math.max(Q.min, $t));
  else if (Q === "100%") {
    const { parent: S } = this;
    if (S)
      ue = S.clientHeight;
    else {
      ue = 0, M(this, ie, !0);
      return;
    }
  } else
    ue = Q;
  const _s = ue - Dt - It, gs = w - u - m, Ee = {
    options: n,
    allRows: D,
    width: w,
    height: ue,
    rows: b,
    rowsMap: Se,
    rowHeight: E,
    rowsHeight: _s,
    rowsHeightTotal: yo,
    header: _o,
    footer: go,
    footerGenerators: r,
    headerHeight: Dt,
    footerHeight: It,
    colsMap: p,
    colsList: h,
    flexCols: a,
    colsInfo: {
      fixedLeftCols: f,
      fixedRightCols: d,
      scrollCols: i,
      fixedLeftWidth: u,
      scrollWidth: gs,
      scrollColsWidth: _,
      fixedRightWidth: m
    }
  }, mo = (bo = n.onLayout) == null ? void 0 : bo.call(this, Ee);
  mo && Object.assign(Ee, mo), o.forEach((S) => {
    if (S.onLayout) {
      const L = S.onLayout.call(this, Ee);
      L && Object.assign(Ee, L);
    }
  }), M(this, B, Ee);
}, Rt = new WeakSet(), Qn = function() {
  (z(this, xt, qn).call(this) || !g(this, B)) && z(this, kt, Jn).call(this);
  const { layout: o } = this;
  if (!o)
    return;
  let { scrollLeft: n } = this.state;
  const { flexCols: r, colsInfo: { scrollCols: s, scrollWidth: l, scrollColsWidth: c } } = o;
  if (r.length) {
    const C = l - c;
    if (C > 0) {
      const R = r.reduce((E, D) => E + D.flex, 0);
      let P = 0;
      r.forEach((E) => {
        const D = Math.min(C - P, Math.ceil(C * (E.flex / R)));
        E.realWidth = D + E.width, P += E.realWidth;
      });
    } else
      r.forEach((R) => {
        R.realWidth = R.width;
      });
  }
  n = Math.min(Math.max(0, c - l), n);
  let f = 0;
  s.forEach((C) => {
    C.left = f, f += C.realWidth, C.visible = C.left + C.realWidth >= n && C.left <= n + l;
  });
  const { rowsHeightTotal: d, rowsHeight: i, rows: p, rowHeight: h } = o, a = Math.min(Math.max(0, d - i), this.state.scrollTop), u = Math.floor(a / h), m = a + i, _ = Math.min(p.length, Math.ceil(m / h)), y = [], { rowDataGetter: w } = this.options;
  for (let C = u; C < _; C++) {
    const R = p[C];
    R.lazy && w && (R.data = w([R.id])[0], R.lazy = !1), y.push(R);
  }
  return o.visibleRows = y, o.scrollTop = a, o.scrollLeft = n, o;
}, j(tt, "addPlugin", Kn), j(tt, "removePlugin", Fn), tt);
function Vo(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: o } = e.ref;
  if (!o)
    return;
  const n = "dtable-col-hover";
  o.querySelectorAll(`.${n}`).forEach((r) => r.classList.remove(n)), typeof t == "string" && t.length && o.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((r) => r.classList.add(n));
}
const er = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var r;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const o = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || t === "header" && !o.closest(".dtable-header"))
        return;
      const n = (o == null ? void 0 : o.getAttribute("data-col")) ?? !1;
      Vo(this, n);
    },
    mouseleave() {
      Vo(this, !1);
    }
  }
}, tr = K(er, { buildIn: !0 });
function or(e, t) {
  var l, c;
  typeof e == "boolean" && (t = e, e = void 0);
  const o = this.state.checkedRows, n = {}, { canRowCheckable: r } = this.options, s = (f, d) => {
    r && !r.call(this, f) || !!o[f] === d || (d ? o[f] = !0 : delete o[f], n[f] = d);
  };
  if (e === void 0 ? (t === void 0 && (t = !Zn.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: f }) => {
    s(f, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((f) => {
    s(f, t ?? !o[f]);
  })), Object.keys(n).length) {
    const f = (c = this.options.beforeCheckRows) == null ? void 0 : c.call(this, e, n, o);
    f && Object.keys(f).forEach((d) => {
      f[d] ? o[d] = !0 : delete o[d];
    }), this.setState({ checkedRows: { ...o } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, n);
    });
  }
  return n;
}
function nr(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Zn() {
  var o, n;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((o = this.layout) == null ? void 0 : o.allRows.reduce((r, s) => r + (t.call(this, s.id) ? 1 : 0), 0)) : e === ((n = this.layout) == null ? void 0 : n.allRows.length);
}
function sr() {
  return Object.keys(this.state.checkedRows);
}
const rr = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (e) => !!e.checkable,
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: or,
    isRowChecked: nr,
    isAllRowChecked: Zn,
    getChecks: sr
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
      const e = this.isAllRowChecked();
      return [
        /* @__PURE__ */ k("div", { style: { padding: "0 calc(3 * var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ k("input", { type: "checkbox", checked: e }) })
      ];
    },
    checkedInfo(e, t) {
      const o = this.getChecks().length, n = [];
      return o && n.push(this.i18n("checkedCountInfo", { selected: o })), n.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ k("div", { children: n.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: o }) {
    var c;
    const { id: n } = t, { canRowCheckable: r } = this.options;
    if (r && !r.call(this, n))
      return e;
    const { checkbox: s } = o.setting;
    if (typeof s == "function" ? s.call(this, n) : s) {
      const f = this.isRowChecked(n), d = ((c = this.options.checkboxRender) == null ? void 0 : c.call(this, f, n)) ?? /* @__PURE__ */ k("input", { type: "checkbox", checked: f });
      e.unshift(d), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: o }) {
    var l;
    const { id: n } = t, { checkbox: r } = o.setting;
    if (typeof r == "function" ? r.call(this, n) : r) {
      const c = this.isAllRowChecked(), f = ((l = this.options.checkboxRender) == null ? void 0 : l.call(this, c, n)) ?? /* @__PURE__ */ k("input", { type: "checkbox", checked: c });
      e.unshift(f), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: F(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const o = t.closest('input[type="checkbox"],.dtable-checkbox');
    o && (this.toggleCheckRows(o.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const o = e.target;
    if (!o)
      return;
    (o.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, ir = K(rr);
var es = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(es || {});
function qt(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const o = this.state.collapsedRows, n = t.children && o && o[e];
  let r = !1, { parent: s } = t;
  for (; s; ) {
    const l = qt.call(this, s);
    if (l.state !== "expanded") {
      r = !0;
      break;
    }
    s = l.parent;
  }
  return t.state = r ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? qt.call(this, t.parent).level + 1 : 0, t;
}
function lr(e, t) {
  let o = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ts.call(this)), t) {
      const r = n.entries();
      for (const [s, l] of r)
        l.state === "expanded" && (o[s] = !0);
    } else
      o = {};
  else {
    const r = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !o[r[0]]), r.forEach((s) => {
      const l = n.get(s);
      t && (l != null && l.children) ? o[s] = !0 : delete o[s];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...o } }
  }, () => {
    var r;
    (r = this.options.onNestedChange) == null || r.call(this);
  });
}
function ts() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function os(e, t = 0, o, n = 0) {
  var r;
  o || (o = [...e.keys()]);
  for (const s of o) {
    const l = e.get(s);
    l && (l.level === n && (l.order = t++), (r = l.children) != null && r.length && (t = os(e, t, l.children, n + 1)));
  }
  return t;
}
function ns(e, t, o, n) {
  const r = e.getNestedRowInfo(t);
  return !r || r.state === "" || !r.children || r.children.forEach((s) => {
    n[s] = o, ns(e, s, o, n);
  }), r;
}
function ss(e, t, o, n, r) {
  var c;
  const s = e.getNestedRowInfo(t);
  if (!s || s.state === "")
    return;
  ((c = s.children) == null ? void 0 : c.every((f) => {
    const d = !!(n[f] !== void 0 ? n[f] : r[f]);
    return o === d;
  })) && (n[t] = o), s.parent && ss(e, s.parent, o, n, r);
}
const cr = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: o } = this.data, n = o.get(e.id), r = o.get(t.id);
      return (n == null ? void 0 : n.parent) === (r == null ? void 0 : r.parent);
    },
    beforeCheckRows(e, t, o) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const n = {};
      return Object.entries(t).forEach(([r, s]) => {
        const l = ns(this, r, s, n);
        l != null && l.parent && ss(this, l.parent, s, n, o);
      }), n;
    }
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    toggleRow: lr,
    isAllCollapsed: ts,
    getNestedRowInfo: qt
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(e) {
    var r, s;
    const { nestedMap: t } = this.data, o = (r = e.data) == null ? void 0 : r[this.options.nestedParentKey ?? "parent"], n = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (n.parent = o, (s = e.data) != null && s[this.options.asParentKey ?? "asParent"] && (n.children = []), t.set(e.id, n), o) {
      let l = t.get(o);
      l || (l = {
        state: "",
        level: 0
      }, t.set(o, l)), l.children || (l.children = []), l.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), os(this.data.nestedMap), e.sort((t, o) => {
      const n = this.getNestedRowInfo(t.id), r = this.getNestedRowInfo(o.id), s = (n.order ?? 0) - (r.order ?? 0);
      return s === 0 ? t.index - o.index : s;
    }), e;
  },
  onRenderCell(e, { col: t, row: o }) {
    var c;
    const { id: n, data: r } = o, { nestedToggle: s } = t.setting, l = this.getNestedRowInfo(n);
    if (s && (l.children || l.parent) && e.unshift(((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, n, t, r)) ?? /* @__PURE__ */ k("a", { role: "button", className: `dtable-nested-toggle state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ k("span", { className: "toggle-icon" }) })), l.level) {
      let { nestedIndent: f = s } = t.setting;
      f && (f === !0 && (f = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ k("div", { className: "dtable-nested-indent", style: { width: f * l.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: o }) {
    var r;
    const { id: n } = t;
    return o.setting.nestedToggle && e.unshift(((r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, void 0, n, o, void 0)) ?? /* @__PURE__ */ k("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ k("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const o = this.getNestedRowInfo(t.id);
    return {
      className: F(e.className, `is-${o.state}`),
      "data-parent": o.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = F(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: t }) {
    const o = e.target;
    if (!(!o || !this.getNestedRowInfo(t).children || !o.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, ar = K(cr), fr = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : new Date(), hr = (e, t = "yyyy-MM-dd hh:mm") => {
  e = fr(e);
  const o = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(o).forEach((n) => {
    if (new RegExp(`(${n})`).test(t)) {
      const r = `${o[n]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
};
const ur = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e) {
        return e[0] = {
          html: e[0]
        }, e;
      }
    },
    link: {
      onRenderCell(e, { col: t, row: o }) {
        const { linkTemplate: n = "", linkProps: r } = t.setting, s = $e(n, o.data);
        return e[0] = /* @__PURE__ */ k("a", { href: s, ...r, children: e[0] }), e;
      }
    },
    avatar: {
      onRenderCell(e, { col: t, row: o }) {
        const { data: n } = o, { avatarWithName: r, avatarClass: s = "size-xs circle", avatarKey: l = `${t.name}Avatar` } = t.setting, c = /* @__PURE__ */ k("div", { className: `avatar ${s} flex-none`, children: /* @__PURE__ */ k("img", { src: n ? n[l] : "" }) });
        return r ? e.unshift(c) : e[0] = c, e;
      }
    },
    circleProgress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: o = 24, circleBorderSize: n = 1, circleBgColor: r = "var(--color-border)", circleColor: s = "var(--color-success-500)" } = t.setting, l = (o - n) / 2, c = o / 2, f = e[0];
        return e[0] = /* @__PURE__ */ k("svg", { width: o, height: o, children: [
          /* @__PURE__ */ k("circle", { cx: c, cy: c, r: l, "stroke-width": n, stroke: r, fill: "transparent" }),
          /* @__PURE__ */ k("circle", { cx: c, cy: c, r: l, "stroke-width": n, stroke: s, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * l * 2, "stroke-dashoffset": Math.PI * l * 2 * (100 - f) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ k("text", { x: c, y: c + n, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${l}px` }, children: Math.round(f) })
        ] }), e;
      }
    },
    actionButtons: {
      onRenderCell(e, { col: t, row: o }) {
        var c;
        const n = (c = o.data) == null ? void 0 : c[t.name];
        if (!n)
          return e;
        const { actionBtnTemplate: r = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: s = {}, actionBtnClass: l = "btn text-primary square size-sm ghost" } = t.setting;
        return [{
          html: n.map((f) => {
            typeof f == "string" && (f = { action: f });
            const d = s[f.action];
            return d && (f = { className: l, ...d, ...f }), $e(r, f);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(e, { col: t }) {
        let { format: o } = t.setting;
        if (!o)
          return e;
        typeof o == "string" && (o = { type: "text", format: o });
        const { format: n, type: r } = o, s = e[0];
        return typeof n == "function" ? e[0] = r === "html" ? { html: n(s) } : n(s) : r === "datetime" ? e[0] = hr(s, n) : r === "html" ? e[0] = { html: $e(n, s) } : e[0] = $e(n, s), e;
      }
    }
  }
}, dr = K(ur, { buildIn: !0 }), pr = {
  name: "sort-type",
  onRenderHeaderCell(e, { col: t }) {
    const { sortType: o } = t.setting;
    if (o) {
      const { sortLink: n = this.options.sortLink, sortAttrs: r } = t.setting, s = o === !0 ? "none" : o;
      if (e.push(
        /* @__PURE__ */ k("div", { className: `dtable-sort dtable-sort-${s}` }),
        { outer: !0, attrs: { "data-sort": s } }
      ), n) {
        const l = typeof n == "function" ? n.call(this, t, s) : n;
        e.push(
          { tagName: "a", attrs: { href: l, ...r } }
        );
      }
    }
    return e;
  }
}, _r = K(pr, { buildIn: !0 }), gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: es,
  checkable: ir,
  colHover: tr,
  nested: ar,
  rich: dr,
  sortType: _r
}, Symbol.toStringTag, { value: "Module" }));
class me extends pn {
}
j(me, "NAME", "dtable"), j(me, "Component", Zs), j(me, "definePlugin", K), j(me, "removePlugin", Fn), j(me, "plugins", gr);
bs(me, "DTable");
function Jt(e, t) {
  return Object.entries(t).reduce((o, [n, r]) => {
    const s = o[n];
    return s ? r === void 0 ? delete o[n] : Object.keys(r).forEach((l) => {
      const c = r[l];
      c === void 0 ? delete s[l] : s[l] = c;
    }) : r !== void 0 && (o[n] = r), o;
  }, e);
}
function Oe(e) {
  return Object.entries(e).reduce((t, [o, n]) => (t && typeof n == "object" && (t[o] = { ...n }), t), {});
}
const yr = {
  name: "draft",
  defaultOptions: {
    draft: !0,
    selectAllOnFocus: !0,
    history: 20
  },
  when: (e) => !!e.draft,
  state() {
    return { stagingDraft: {}, appliedDraft: {} };
  },
  methods: {
    getCellDraftValue(e, t) {
      const o = this.getRowInfo(e);
      if (!o)
        return;
      const n = this.getColInfo(t);
      if (!n)
        return;
      const { id: r } = o, { name: s } = n, l = this.state.stagingDraft[r];
      if (l && s in l)
        return l[s];
      const c = this.state.appliedDraft[r];
      return c && s in c ? c[s] : this.getCellValue(o, n);
    },
    getRowDraftData(e, t) {
      const o = this.getRowInfo(e);
      return o ? this.layout.colsList.reduce((n, r) => {
        if (!(t != null && t.includeIndexCol) && r.name === "INDEX")
          return n;
        const s = this.getCellDraftValue(o, r);
        return n[r.name] = s === void 0 ? t == null ? void 0 : t.emptyCellValue : s, n;
      }, {}) : {};
    },
    getColDraftData(e, t) {
      const o = this.getColInfo(e);
      return o ? this.layout.rows.reduce((n, r) => {
        const s = this.getCellDraftValue(r, o);
        return n[r.id] = s === void 0 ? t == null ? void 0 : t.emptyCellValue : s, n;
      }, t != null && t.includeHeaderRow ? { HEADER: this.getCellDraftValue("HEADER", o) } : {}) : {};
    },
    stageDraft(e, t) {
      var s;
      const { stagingDraft: o } = this.state;
      if (((s = this.options.onStageDraft) == null ? void 0 : s.call(this, e, o)) === !1)
        return;
      const n = Oe(o);
      Jt(o, e);
      const r = () => {
        var l, c;
        (l = t == null ? void 0 : t.callback) == null || l.call(t, e), (c = this.options.afterStageDraft) == null || c.call(this, e, this.state.stagingDraft, n, { skipUpdate: !!(t != null && t.skipUpdate) });
      };
      t != null && t.skipUpdate ? r() : this.update(r);
    },
    applyDraft(e, t) {
      const { stagingDraft: o, appliedDraft: n } = this.state, r = Oe(n);
      Object.entries(e).forEach(([l, c]) => {
        const f = o[l];
        f && typeof c == "object" && (c === null ? delete o[l] : Object.keys(c).forEach((i) => {
          f[i] === c[i] && delete f[i];
        }), Object.keys(f).length || delete o[l]);
        const d = n[l];
        d ? c === null ? delete n[l] : Object.assign(d, c) : c !== null && (n[l] = c);
      });
      const s = () => {
        var l, c;
        (l = t == null ? void 0 : t.callback) == null || l.call(t, e), (c = this.options.afterApplyDraft) == null || c.call(this, e, this.state.appliedDraft, r);
      };
      t != null && t.skipUpdate ? s() : this.forceUpdate(s);
    },
    renderDraftCell(e, { col: t, row: o }) {
      let n = this.getCellDraftValue(o, t) ?? "";
      return typeof n == "string" && !n.length && o.id === "HEADER" && (n = t.name), e[0] = { children: n, attrs: { title: n } }, e;
    }
  },
  onRenderCell(e, ...t) {
    return this.options.skipRenderDraftCell ? e : this.renderDraftCell(e, ...t);
  },
  onRenderHeaderCell(e, ...t) {
    return this.options.skipRenderDraftCell ? e : this.renderDraftCell(e, ...t);
  }
}, rs = K(yr);
function Bo(e, t, o) {
  return e.every((n) => t[n] === o[n]);
}
const mr = {
  name: "editable",
  plugins: [rs],
  defaultOptions: {
    editable: !0,
    selectAllOnFocus: !0,
    history: 20,
    skipRenderDraftCell: !0,
    emptyCellValue: ""
  },
  when: (e) => !!e.editable,
  events: {
    dblclick(e) {
      this.editCell(this.getPointerInfo(e));
    },
    click(e) {
      const t = this.getPointerInfo(e);
      t && t.cellElement.classList.contains("is-selected") && this.editCell(t);
    }
  },
  data() {
    return { editingInputRef: bn() };
  },
  methods: {
    isCellEditing(e, t) {
      const { editingCell: o } = this.state;
      return !!o && o.rowID === e && o.colName === t;
    },
    editCell(e) {
      const { editable: t, headerEditable: o } = this.options;
      e && (typeof t == "function" && !t(e.rowID, e.colName) || !o && e.rowID === "HEADER") && (e = void 0), this.data.editingInputRef.current = null, this.data.needAutoFocus = !0, this.setState({ editingCell: e ? { colName: e.colName, rowID: e.rowID } : void 0 });
    },
    deleteCells(e) {
      const t = {}, { emptyCellValue: o } = this.options;
      return e.forEach((n) => {
        const r = t[n.rowID];
        r ? r[n.colName] = o : t[n.rowID] = { [n.colName]: o };
      }), Object.keys(t).length ? (this.stageDraft(t), !0) : !1;
    },
    deleteRows(e, t) {
      Array.isArray(e) || (e = [e]);
      const o = this.layout.colsList.reduce((p, h) => (h.name !== "HEADER" && p.push(h.name), p), []), n = e.reduce((p, h) => {
        const a = this.getRowInfo(h);
        return a && a.id !== "HEADER" && p.push(a), p;
      }, []).sort((p, h) => p.index - h.index);
      if (!n.length)
        return;
      const r = new Set(n.map((p) => p.index)), s = /* @__PURE__ */ new Map(), l = this.layout.rows, c = l.length, { emptyCellValue: f } = this.options;
      let d = n[0].index;
      for (let p = d + 1; p < c; p++) {
        if (r.has(p))
          continue;
        const h = l[p];
        s.set(d, this.getRowDraftData(h, { emptyCellValue: f })), d++;
      }
      const i = {};
      d = n[0].index;
      for (let p = d; p < c; p++) {
        const h = l[p], a = this.getRowDraftData(h, { emptyCellValue: f }), u = s.get(p) || {};
        Bo(o, a, u) || (i[h.id] = u);
      }
      Object.keys(i).length && this.stageDraft(i, { skipUpdate: t == null ? void 0 : t.skipUpdate });
    },
    deleteCols(e, t) {
      Array.isArray(e) || (e = [e]);
      const o = e.reduce((p, h) => {
        const a = this.getColInfo(h);
        return a && a.name !== "INDEX" && p.push(a), p;
      }, []).sort((p, h) => p.index - h.index);
      if (!o.length)
        return;
      const n = new Set(o.map((p) => p.index)), r = /* @__PURE__ */ new Map(), { colsList: s } = this.layout, l = s.length, c = this.layout.rows.reduce((p, h) => (p.push(h.id), p), ["HEADER"]), { emptyCellValue: f } = this.options;
      let d = o[0].index;
      for (let p = d + 1; p < l; p++) {
        if (n.has(p))
          continue;
        const h = s[p];
        r.set(d, this.getColDraftData(h, { emptyCellValue: f, includeHeaderRow: !0 })), d++;
      }
      const i = {};
      d = o[0].index;
      for (let p = d; p < l; p++) {
        const h = s[p], a = this.getColDraftData(h, { emptyCellValue: f, includeHeaderRow: !0 }), u = r.get(p) || {};
        if (!Bo(c, a, u))
          for (const m of c)
            i[m] || (i[m] = {}), i[m][h.name] = u[m] ?? f;
      }
      Object.keys(i).length && this.stageDraft(i, { skipUpdate: t == null ? void 0 : t.skipUpdate });
    },
    handleEditingInputChange(e) {
      var l, c;
      const t = (l = e.target) == null ? void 0 : l.value, { editingCell: o } = this.state;
      if (typeof t != "string" || !o)
        return;
      const { rowID: n, colName: r } = o, s = this.getCellDraftValue(n, r);
      s !== t && ((c = this.options.onEditCell) == null ? void 0 : c.call(this, {
        rowID: n,
        colName: r,
        value: t,
        oldValue: s
      })) !== !1 && this.stageDraft({ [n]: { [r]: t } });
    },
    handleEditingInputBlur() {
      this.editCell();
    },
    handleEditingKeyDown(e) {
      var t;
      e.key === "Enter" ? (t = this.data.editingInputRef.current) == null || t.blur() : e.key === "Esc" && this.editCell();
    },
    renderEditableCell(e, { col: t, row: o }, n) {
      const { id: r } = o;
      if (this.isCellEditing(r, t.name)) {
        const s = `${this.getCellDraftValue(r, t.name) ?? ""}`;
        return [{
          outer: !0,
          className: "is-editing",
          children: /* @__PURE__ */ k(
            "input",
            {
              ref: this.data.editingInputRef,
              class: "dtable-editing-input",
              type: "text",
              defaultValue: s,
              style: { textAlign: t.setting.align },
              onChange: this.handleEditingInputChange,
              onBlur: this.handleEditingInputBlur,
              onKeyDown: this.handleEditingKeyDown,
              onPaste: this.options.onPasteToCell
            }
          )
        }];
      }
      return this.renderDraftCell(e, { row: o, col: t }, n);
    }
  },
  onUpdated() {
    const e = this.data.editingInputRef.current;
    e && this.data.needAutoFocus && (this.data.needAutoFocus = !1, e.focus({ preventScroll: !0 }), this.options.selectAllOnFocus && e.select());
  },
  onRender() {
    return {
      className: {
        "dtable-editable": this.options.editable,
        "dtable-editing": this.state.editingCell
      }
    };
  },
  onRenderCell(...e) {
    return this.renderEditableCell(...e);
  },
  onRenderHeaderCell(...e) {
    return this.renderEditableCell(...e);
  }
}, wr = K(mr), br = {
  name: "mousemove",
  events: {
    mousemove(e) {
      this.data.mmRafID && (cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = 0), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", e);
      }), e.preventDefault();
    },
    document_mousemove(e) {
      this.data.dmmRafID && (cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = 0), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", e);
      }), e.preventDefault();
    }
  }
}, ho = K(br);
function Go(e, t, o) {
  const { colResizing: n } = e.state;
  if (!n)
    return;
  const r = Math.round(t.clientX - n.startX);
  if (!r && !o)
    return;
  const s = {};
  o && (s.colResizing = void 0);
  const { colsSizes: l } = e.state, { colName: c } = n;
  l[n.colName] = n.startSize + r, s.colsSizes = { ...l }, e.update({ dirtyType: "layout", state: s }, o ? () => {
    var d;
    const f = e.getColInfo(c);
    f && ((d = e.options.onColResize) == null || d.call(e, c, f.realWidth));
  } : void 0), t.stopPropagation(), t.preventDefault();
}
const vr = {
  name: "resize",
  defaultOptions: {
    colResize: !0
  },
  when: (e) => !!e.colResize,
  plugins: [ho],
  state() {
    return { colsSizes: {} };
  },
  events: {
    mousedown(e) {
      var n;
      const t = e.target.closest(".dtable-col-splitter");
      if (!t)
        return;
      const o = (n = t.closest(".dtable-cell")) == null ? void 0 : n.dataset.col;
      if (o)
        return this.setState({
          colResizing: {
            colName: o,
            startSize: this.state.colsSizes[o] ?? 0,
            startX: e.clientX
          }
        }), e.stopPropagation(), !1;
    },
    dblclick(e) {
      var r;
      const t = e.target.closest(".dtable-col-splitter");
      if (!t)
        return;
      const o = (r = t.closest(".dtable-cell")) == null ? void 0 : r.dataset.col;
      if (!o)
        return;
      const { colsSizes: n } = this.state;
      n[o] && (delete n[o], this.update({ dirtyType: "layout", state: {
        colResizing: void 0,
        colsSizes: { ...n }
      } }, () => {
        var s;
        (s = this.options.onColResize) == null || s.call(this, o, 0);
      }));
    },
    document_mouseup(e) {
      if (this.state.colResizing)
        return Go(this, e, !0), !1;
    },
    document_mousemovesmooth(e) {
      if (this.state.colResizing)
        return Go(this, e), !1;
    }
  },
  onRenderHeaderCell(e, { col: t }) {
    var n;
    const { colResize: o } = this.options;
    return !t.flex && (typeof o != "function" || o.call(this, t.name) !== !1) && (e.push({
      className: "has-col-splitter",
      children: /* @__PURE__ */ k("div", { className: "dtable-col-splitter no-cell-event" }),
      outer: !0
    }), ((n = this.state.colResizing) == null ? void 0 : n.colName) === t.name && e.push({
      className: "has-col-resizing",
      outer: !0
    })), e;
  },
  onAddCol(e) {
    const t = this.state.colsSizes[e.name];
    typeof t == "number" && (e.realWidth = Xt(e.width + t, e.setting.minWidth, e.setting.maxWidth));
  },
  onRender() {
    if (this.state.colResizing)
      return { className: "has-col-resizing" };
  }
}, Cr = K(vr);
const xr = /C(\d+)R(\d+)/i, kr = /(?:C(\d+))?(?:R(\d+))?/i;
function is(e) {
  const t = xr.exec(e);
  if (!t || t.length < 3)
    return;
  const [, o, n] = t;
  return { col: +o, row: +n };
}
function Qt(e) {
  const t = kr.exec(e);
  if (!t)
    return;
  const [, o = -1, n = -1] = t, r = +o, s = +n;
  return { col: r, row: s };
}
function Zt(e) {
  const t = [], o = Qt(e);
  if (!o)
    return t;
  const { col: n, row: r } = o;
  if (n >= 0)
    if (r >= 0)
      t.push({ col: n, row: r });
    else {
      const s = this.layout.rows.length;
      for (let l = 0; l < s; l++)
        t.push({ col: n, row: l });
    }
  else if (r >= 0) {
    const { colsInfo: s } = this.layout, l = s.fixedLeftCols.length + s.scrollCols.length + s.fixedRightCols.length;
    for (let c = 0; c < l; c++)
      t.push({ col: c, row: r });
  }
  return t;
}
function ls(e) {
  const [t, o] = e.split(":");
  if (t) {
    if (!o)
      return Zt.call(this, t);
  } else
    return o ? Zt.call(this, o) : [];
  const n = Qt(t), r = Qt(o);
  if (!n || !r)
    return [];
  const s = Math.min(n.col, r.col), l = Math.max(n.col, r.col), c = Math.min(n.row, r.row), f = Math.max(n.row, r.row), d = [], i = Object.keys(this.layout.colsMap).length;
  for (let p = s; p <= l; p++)
    if (c < 0 || f < 0) {
      const h = this.layout.rows.length;
      for (let a = 0; a < h; a++)
        d.push({ col: p, row: a });
    } else
      for (let h = c; h <= f; h++)
        if (p < 0)
          for (let a = 0; a < i; a++)
            d.push({ col: a, row: h });
        else
          d.push({ col: p, row: h });
  return d;
}
function Rr(e) {
  return e.reduce((t, o) => (typeof o == "object" ? t.push(o) : o.includes(":") ? t.push(...ls.call(this, o)) : t.push(...Zt.call(this, o)), t), []);
}
function eo(e, t) {
  const { col: o, row: n } = e, r = [];
  if (o >= 0 && r.push(`C${o}`), n >= 0 && r.push(`R${n}`), t) {
    const s = eo(t);
    s && r.push(":", s);
  }
  return r.join("");
}
function to(e, t) {
  const { selectable: o } = e.options;
  return typeof o == "function" ? o.call(e, t) : !!o;
}
function uo(e, t = {}) {
  var h;
  Array.isArray(e) || (e = [e]);
  let o = Rr.call(this, e);
  const n = (h = this.options.beforeSelectCells) == null ? void 0 : h.call(this, o);
  n && (o = n);
  const { clearBefore: r = !0, deselect: s, selecting: l, callback: c } = t, { selectingMap: f, selectedMap: d } = this.state, i = l ? f : d;
  f.clear(), r && d.clear();
  let p = !1;
  return s ? o.forEach((a) => {
    if (!to(this, a))
      return;
    const { col: u, row: m } = a, _ = i.get(u);
    _ && (_.delete(m), _.size || i.delete(u)), p = !0;
  }) : o.forEach((a) => {
    if (!to(this, a))
      return;
    const { col: u, row: m } = a, _ = i.get(u);
    _ ? _.add(m) : i.set(u, /* @__PURE__ */ new Set([m])), p = !0;
  }), p ? (this.update({}, () => {
    var a;
    c == null || c.call(this, o), (a = this.options.onSelectCells) == null || a.call(this, o);
  }), o) : [];
}
function Sr(e) {
  const { selectedMap: t } = this.state;
  let o = -1, n = -1;
  for (const [r, s] of t.entries()) {
    n = n < 0 ? r : Math.min(r, n);
    const l = Math.min(...s);
    o = o < 0 ? l : Math.min(l, o);
  }
  if (!(o < 0 || n < 0) && (e === "down" ? o++ : e === "up" ? o-- : e === "left" ? n-- : n++, o >= 0 && n >= 0 && o < this.layout.rows.length && n < this.layout.colsList.length)) {
    const r = { col: n, row: o };
    if (to(this, r))
      return this.scrollTo(r), this.selectCells([r]), r;
  }
}
function Er(e, t) {
  return uo.call(this, e, { ...t, selecting: !0 });
}
function Mr(e, t) {
  return uo.call(this, e, { ...t, deselect: !0 });
}
function Dr() {
  const { colsInfo: e } = this.layout, t = e.fixedLeftCols.length + e.scrollCols.length + e.fixedRightCols.length, o = this.layout.rows.length, { selectedMap: n } = this.state, r = typeof this.options.selectable == "function" ? this.options.selectable : !1;
  for (let s = 0; s < t; s++) {
    let l = n.get(s);
    l || (l = /* @__PURE__ */ new Set(), n.set(s, l));
    for (let c = 0; c < o; c++)
      r && !r({ row: c, col: s }) || l.add(c);
  }
  this.forceUpdate();
}
function Ir() {
  const { selectedMap: e } = this.state;
  return e.size ? (e.clear(), this.forceUpdate(), !0) : !1;
}
function $r(e) {
  var o;
  const t = typeof e == "string" ? is(e) : e;
  return t ? ((o = this.state.selectedMap.get(t.col)) == null ? void 0 : o.has(t.row)) ?? !1 : !1;
}
function Lt(e, t) {
  for (const [, o] of e.state.selectedMap.entries())
    if (o.has(t))
      return !0;
  for (const [, o] of e.state.selectingMap.entries())
    if (o.has(t))
      return !0;
  return !1;
}
function Ar(e) {
  var n;
  const t = (n = this.getRowInfo(e)) == null ? void 0 : n.index;
  if (typeof t != "number")
    return !1;
  const { colsList: o } = this.layout;
  return o.every((r) => r.name === "INDEX" || this.isCellSelected({ col: r.index, row: t }));
}
function Nr(e) {
  var n;
  const t = (n = this.getColInfo(e)) == null ? void 0 : n.index;
  if (typeof t != "number")
    return !1;
  const { rows: o } = this.layout;
  return o.every((r) => this.isCellSelected({ col: t, row: r.index }));
}
function Xo(e, t) {
  var o, n;
  return !!((o = e.state.selectedMap.get(t)) != null && o.size || (n = e.state.selectingMap.get(t)) != null && n.size);
}
function Hr(e) {
  var o;
  const t = typeof e == "string" ? is(e) : e;
  return t ? ((o = this.state.selectingMap.get(t.col)) == null ? void 0 : o.has(t.row)) ?? !1 : !1;
}
function Tr() {
  const e = [];
  for (const [t, o] of this.state.selectedMap.entries())
    for (const n of o)
      e.push({ col: t, row: n });
  return e;
}
function Pr() {
  const e = [];
  for (const [o, n] of this.state.selectedMap.entries())
    n.size && e.push(o);
  return [...new Set(e)].map((o) => this.getColInfo(o)).filter((o) => o && this.isColSelected(o)).sort((o, n) => o.index - n.index);
}
function Or() {
  const e = [];
  for (const [, o] of this.state.selectedMap.entries())
    e.push(...o);
  return [...new Set(e)].map((o) => this.getRowInfo(o)).filter((o) => o && this.isRowSelected(o)).sort((o, n) => o.index - n.index);
}
function Lr() {
  let e = 0;
  for (const t of this.state.selectedMap.values())
    e += t.size;
  return e;
}
function jt(e, t, o) {
  var d, i;
  const n = e.getPointerInfo(t);
  if (!n || n.target.closest("input,textarea,[contenteditable]"))
    return;
  const { rowID: r, colName: s } = n, l = ((d = e.getColInfo(s)) == null ? void 0 : d.index) ?? -1;
  if (l < 0)
    return;
  const c = r === "HEADER";
  if (c && (o != null && o.ignoreHeaderCell))
    return;
  const f = c ? -1 : ((i = e.getRowInfo(r)) == null ? void 0 : i.index) ?? -1;
  return { col: l, row: f };
}
const jr = {
  name: "selectable",
  defaultOptions: { selectable: !0, markSelectRange: !0 },
  when: (e) => !!e.selectable,
  plugins: [ho],
  state() {
    return {
      selectedMap: /* @__PURE__ */ new Map(),
      selectingMap: /* @__PURE__ */ new Map()
    };
  },
  methods: {
    selectCells: uo,
    selectNextCell: Sr,
    selectingCells: Er,
    deselectCells: Mr,
    isCellSelected: $r,
    isCellSelecting: Hr,
    isRowSelected: Ar,
    isColSelected: Nr,
    hasCellSelectInRow: Lt,
    hasCellSelectInCol: Xo,
    getSelectedCols: Pr,
    getSelectedRows: Or,
    getSelectedCells: Tr,
    selectAllCells: Dr,
    deselectAllCells: Ir,
    getSelectedCellsSize: Lr
  },
  events: {
    mousedown(e) {
      if (this.data.disableSelectable)
        return;
      const t = jt(this, e);
      e.button !== 0 && (!t || this.isCellSelected(t) || t.row < 0 && this.isColSelected(t.col) || t.col < 1 && this.isRowSelected(t.row)) || (this.data.selectingStart = t, this.startScrollToMouse(), t && e.stopPropagation());
    },
    document_mouseup(e) {
      const { selectingStart: t } = this.data;
      if (this.stopScrollToMouse(), !t)
        return;
      this.data.selectingStart = void 0;
      const o = jt(this, e);
      if (o) {
        const n = eo(t, o);
        n && (this.selectCells(n), e.stopPropagation());
      }
    },
    document_click(e) {
      const t = e.target;
      if (!t)
        return;
      const { ignoreDeselectOn: o } = this.options;
      t.closest(`#${this.id}${o ? `,${o}` : ""}`) || this.deselectAllCells();
    },
    mousemovesmooth(e) {
      const t = this, { selectingStart: o } = t.data;
      if (!o)
        return;
      const n = jt(t, e);
      if (!n)
        return;
      const r = eo(o, n);
      r && (t.selectingCells(r), e.preventDefault(), e.stopPropagation());
    }
  },
  onRender() {
    if (this.options.selectable)
      return { className: "dtable-selectable" };
  },
  onRenderRow({ props: e, row: t }) {
    if (Lt(this, t.index))
      return { className: F(e.className, "has-cell-select", this.isRowSelected(t) ? "is-row-selected" : "") };
  },
  onRenderCell(e, { row: t, col: o }) {
    const n = this.getRowInfo(t.id);
    if (!n)
      return e;
    const r = { col: o.index, row: n.index };
    return this.isCellSelecting(r) ? e.push({ outer: !0, className: "is-select is-selecting" }) : this.isCellSelected(r) && e.push({ outer: !0, className: "is-select is-selected" }), this.options.markSelectRange && o.name === "INDEX" && Lt(this, n.index) && e.push({ outer: !0, className: "has-cell-selected" }), e;
  },
  onRenderHeaderCell(e, { col: t }) {
    return this.options.markSelectRange && t.name !== "INDEX" && Xo(this, t.index) && (e.push({ outer: !0, className: "has-cell-selected" }), this.isColSelected(t) && e.push({ outer: !0, className: "is-col-selected" })), e;
  }
}, zr = K(jr);
var zt = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function Ut(e, t, o, n) {
  e.addEventListener ? e.addEventListener(t, o, n) : e.attachEvent && e.attachEvent("on".concat(t), function() {
    o(window.event);
  });
}
function cs(e, t) {
  for (var o = t.slice(0, t.length - 1), n = 0; n < o.length; n++)
    o[n] = e[o[n].toLowerCase()];
  return o;
}
function as(e) {
  typeof e != "string" && (e = ""), e = e.replace(/\s/g, "");
  for (var t = e.split(","), o = t.lastIndexOf(""); o >= 0; )
    t[o - 1] += ",", t.splice(o, 1), o = t.lastIndexOf("");
  return t;
}
function Ur(e, t) {
  for (var o = e.length >= t.length ? e : t, n = e.length >= t.length ? t : e, r = !0, s = 0; s < o.length; s++)
    n.indexOf(o[s]) === -1 && (r = !1);
  return r;
}
var Ue = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": zt ? 173 : 189,
  "=": zt ? 61 : 187,
  ";": zt ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
}, J = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
}, oo = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, W = {
  16: !1,
  18: !1,
  17: !1,
  91: !1
}, O = {};
for (var Qe = 1; Qe < 20; Qe++)
  Ue["f".concat(Qe)] = 111 + Qe;
var A = [], Yo = !1, fs = "all", hs = [], Mt = function(t) {
  return Ue[t.toLowerCase()] || J[t.toLowerCase()] || t.toUpperCase().charCodeAt(0);
}, Wr = function(t) {
  return Object.keys(Ue).find(function(o) {
    return Ue[o] === t;
  });
}, Kr = function(t) {
  return Object.keys(J).find(function(o) {
    return J[o] === t;
  });
};
function us(e) {
  fs = e || "all";
}
function We() {
  return fs || "all";
}
function Fr() {
  return A.slice(0);
}
function Vr() {
  return A.map(function(e) {
    return Wr(e) || Kr(e) || String.fromCharCode(e);
  });
}
function Br(e) {
  var t = e.target || e.srcElement, o = t.tagName, n = !0;
  return (t.isContentEditable || (o === "INPUT" || o === "TEXTAREA" || o === "SELECT") && !t.readOnly) && (n = !1), n;
}
function Gr(e) {
  return typeof e == "string" && (e = Mt(e)), A.indexOf(e) !== -1;
}
function Xr(e, t) {
  var o, n;
  e || (e = We());
  for (var r in O)
    if (Object.prototype.hasOwnProperty.call(O, r))
      for (o = O[r], n = 0; n < o.length; )
        o[n].scope === e ? o.splice(n, 1) : n++;
  We() === e && us(t || "all");
}
function Yr(e) {
  var t = e.keyCode || e.which || e.charCode, o = A.indexOf(t);
  if (o >= 0 && A.splice(o, 1), e.key && e.key.toLowerCase() === "meta" && A.splice(0, A.length), (t === 93 || t === 224) && (t = 91), t in W) {
    W[t] = !1;
    for (var n in J)
      J[n] === t && (q[n] = !1);
  }
}
function qr(e) {
  if (typeof e > "u")
    Object.keys(O).forEach(function(l) {
      return delete O[l];
    });
  else if (Array.isArray(e))
    e.forEach(function(l) {
      l.key && Wt(l);
    });
  else if (typeof e == "object")
    e.key && Wt(e);
  else if (typeof e == "string") {
    for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      o[n - 1] = arguments[n];
    var r = o[0], s = o[1];
    typeof r == "function" && (s = r, r = ""), Wt({
      key: e,
      scope: r,
      method: s,
      splitKey: "+"
    });
  }
}
var Wt = function(t) {
  var o = t.key, n = t.scope, r = t.method, s = t.splitKey, l = s === void 0 ? "+" : s, c = as(o);
  c.forEach(function(f) {
    var d = f.split(l), i = d.length, p = d[i - 1], h = p === "*" ? "*" : Mt(p);
    if (O[h]) {
      n || (n = We());
      var a = i > 1 ? cs(J, d) : [];
      O[h] = O[h].filter(function(u) {
        var m = r ? u.method === r : !0;
        return !(m && u.scope === n && Ur(u.mods, a));
      });
    }
  });
};
function qo(e, t, o, n) {
  if (t.element === n) {
    var r;
    if (t.scope === o || t.scope === "all") {
      r = t.mods.length > 0;
      for (var s in W)
        Object.prototype.hasOwnProperty.call(W, s) && (!W[s] && t.mods.indexOf(+s) > -1 || W[s] && t.mods.indexOf(+s) === -1) && (r = !1);
      (t.mods.length === 0 && !W[16] && !W[18] && !W[17] && !W[91] || r || t.shortcut === "*") && t.method(e, t) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0));
    }
  }
}
function Jo(e, t) {
  var o = O["*"], n = e.keyCode || e.which || e.charCode;
  if (q.filter.call(this, e)) {
    if ((n === 93 || n === 224) && (n = 91), A.indexOf(n) === -1 && n !== 229 && A.push(n), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(u) {
      var m = oo[u];
      e[u] && A.indexOf(m) === -1 ? A.push(m) : !e[u] && A.indexOf(m) > -1 ? A.splice(A.indexOf(m), 1) : u === "metaKey" && e[u] && A.length === 3 && (e.ctrlKey || e.shiftKey || e.altKey || (A = A.slice(A.indexOf(m))));
    }), n in W) {
      W[n] = !0;
      for (var r in J)
        J[r] === n && (q[r] = !0);
      if (!o)
        return;
    }
    for (var s in W)
      Object.prototype.hasOwnProperty.call(W, s) && (W[s] = e[oo[s]]);
    e.getModifierState && !(e.altKey && !e.ctrlKey) && e.getModifierState("AltGraph") && (A.indexOf(17) === -1 && A.push(17), A.indexOf(18) === -1 && A.push(18), W[17] = !0, W[18] = !0);
    var l = We();
    if (o)
      for (var c = 0; c < o.length; c++)
        o[c].scope === l && (e.type === "keydown" && o[c].keydown || e.type === "keyup" && o[c].keyup) && qo(e, o[c], l, t);
    if (n in O) {
      for (var f = 0; f < O[n].length; f++)
        if ((e.type === "keydown" && O[n][f].keydown || e.type === "keyup" && O[n][f].keyup) && O[n][f].key) {
          for (var d = O[n][f], i = d.splitKey, p = d.key.split(i), h = [], a = 0; a < p.length; a++)
            h.push(Mt(p[a]));
          h.sort().join("") === A.sort().join("") && qo(e, d, l, t);
        }
    }
  }
}
function Jr(e) {
  return hs.indexOf(e) > -1;
}
function q(e, t, o) {
  A = [];
  var n = as(e), r = [], s = "all", l = document, c = 0, f = !1, d = !0, i = "+", p = !1;
  for (o === void 0 && typeof t == "function" && (o = t), Object.prototype.toString.call(t) === "[object Object]" && (t.scope && (s = t.scope), t.element && (l = t.element), t.keyup && (f = t.keyup), t.keydown !== void 0 && (d = t.keydown), t.capture !== void 0 && (p = t.capture), typeof t.splitKey == "string" && (i = t.splitKey)), typeof t == "string" && (s = t); c < n.length; c++)
    e = n[c].split(i), r = [], e.length > 1 && (r = cs(J, e)), e = e[e.length - 1], e = e === "*" ? "*" : Mt(e), e in O || (O[e] = []), O[e].push({
      keyup: f,
      keydown: d,
      scope: s,
      mods: r,
      shortcut: n[c],
      method: o,
      key: n[c],
      splitKey: i,
      element: l
    });
  typeof l < "u" && !Jr(l) && window && (hs.push(l), Ut(l, "keydown", function(h) {
    Jo(h, l);
  }, p), Yo || (Yo = !0, Ut(window, "focus", function() {
    A = [];
  }, p)), Ut(l, "keyup", function(h) {
    Jo(h, l), Yr(h);
  }, p));
}
function Qr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(O).forEach(function(o) {
    var n = O[o].find(function(r) {
      return r.scope === t && r.shortcut === e;
    });
    n && n.method && n.method();
  });
}
var Kt = {
  getPressedKeyString: Vr,
  setScope: us,
  getScope: We,
  deleteScope: Xr,
  getPressedKeyCodes: Fr,
  isPressed: Gr,
  filter: Br,
  trigger: Qr,
  unbind: qr,
  keyMap: Ue,
  modifier: J,
  modifierMap: oo
};
for (var Ft in Kt)
  Object.prototype.hasOwnProperty.call(Kt, Ft) && (q[Ft] = Kt[Ft]);
if (typeof window < "u") {
  var Zr = window.hotkeys;
  q.noConflict = function(e) {
    return e && window.hotkeys === q && (window.hotkeys = Zr), q;
  }, window.hotkeys = q;
}
const ei = {
  name: "hotkey",
  data() {
    return { hotkeys: /* @__PURE__ */ new Map() };
  },
  when: (e) => !!e.hotkeys,
  methods: {
    hotkeyHandler(e, t) {
      var o;
      (o = this.data.hotkeys.get(t.key)) == null || o.call(this, e, t);
    }
  },
  onMounted() {
    const { hotkeys: e } = this.options;
    if (!e)
      return;
    const t = /* @__PURE__ */ new Map();
    Object.keys(e).forEach((n) => {
      const r = e[n];
      n.split(",").forEach((s) => {
        s = s.trim(), s.length && t.set(s, r);
      });
    });
    const o = [...t.keys()];
    o.length && (this.data.keys = o.join(","), q(this.data.keys, { element: this.ref.current }, this.hotkeyHandler), this.data.hotkeys = t);
  },
  onUnmounted() {
    this.data.keys && q.unbind(this.data.keys, this.hotkeyHandler);
  }
}, ti = K(ei);
let oi = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, o) => (o &= 63, o < 36 ? t += o.toString(36) : o < 62 ? t += (o - 26).toString(36).toUpperCase() : o > 62 ? t += "-" : t += "_", t), "");
var Ye, ce, Y, ke, Re, rt;
const po = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, o = "local") {
    x(this, Re);
    x(this, Ye, void 0);
    x(this, ce, void 0);
    x(this, Y, void 0);
    x(this, ke, void 0);
    M(this, Ye, o), M(this, ce, `ZUI_STORE:${t ?? oi()}`), M(this, Y, o === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return g(this, Ye);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (g(this, ke) || M(this, ke, new po(g(this, ce), "session")), g(this, ke));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, o) {
    const n = g(this, Y).getItem(z(this, Re, rt).call(this, t));
    return typeof n == "string" ? JSON.parse(n) : n ?? o;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, o) {
    if (o == null)
      return this.remove(t);
    g(this, Y).setItem(z(this, Re, rt).call(this, t), JSON.stringify(o));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    g(this, Y).removeItem(z(this, Re, rt).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let o = 0; o < g(this, Y).length; o++) {
      const n = g(this, Y).key(o);
      if (n != null && n.startsWith(g(this, ce))) {
        const r = g(this, Y).getItem(n);
        typeof r == "string" && t(n.substring(g(this, ce).length + 1), JSON.parse(r));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((o, n) => {
      t[o] = n;
    }), t;
  }
};
let no = po;
Ye = new WeakMap(), ce = new WeakMap(), Y = new WeakMap(), ke = new WeakMap(), Re = new WeakSet(), rt = function(t) {
  return `${g(this, ce)}:${t}`;
};
const ni = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (e) => !!e.store,
  data() {
    return { store: new no(this.id) };
  }
}, si = K(ni);
function Ze(e, t) {
  const o = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  return Array.from(o).reduce((n, r) => {
    const s = e[r] || {}, l = t[r] || {};
    if (s === l)
      return n;
    const c = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(l)]), f = {};
    let d = !1;
    return c.forEach((i) => {
      const p = s[i], h = l[i];
      p !== h && (f[i] = p, d = !0);
    }), d && (n[r] = f), n;
  }, {});
}
const ri = {
  name: "history",
  plugins: [si, rs],
  defaultOptions: {
    history: !0,
    historyTarget: "staging",
    historyThreshold: 10
  },
  when: (e) => !!e.history,
  options(e) {
    const { afterApplyDraft: t, afterStageDraft: o, historyTarget: n, history: r } = e;
    return {
      afterApplyDraft: r && n === "applied" ? (s, l, c) => {
        t && t.call(this, s, l, c), this.addHistory({ after: Ze(l, c), before: Ze(c, l) });
      } : t,
      afterStageDraft: r && n !== "applied" ? (s, l, c, f) => {
        o && o.call(this, s, l, c, f), this.addHistory({ after: Ze(l, c), before: Ze(c, l) });
      } : o
    };
  },
  data() {
    return { historyIdx: 1 };
  },
  state() {
    return { historyCursor: 0, historyItems: [] };
  },
  methods: {
    addHistory(e) {
      let { historyCursor: t, historyItems: o } = this.state;
      t > 0 && (o.splice(0, t).forEach((s) => {
        typeof s == "number" && this.data.store.session.remove(`HISTORY:${this.id}:${s}`);
      }), t = 0), o = [e, ...o];
      const { historyThreshold: n } = this.options;
      if (n && o.length > n)
        for (let r = n; r < o.length; r++) {
          const s = o[r];
          if (typeof s == "number")
            break;
          const l = this.data.historyIdx++;
          this.data.store.session.set(`HISTORY:${this.id}:${l}`, s), o[r] = l;
        }
      this.setState({ historyCursor: t, historyItems: o });
    },
    getHistory(e) {
      if (typeof e == "object")
        return e;
      const { historyCursor: t, historyItems: o } = this.state;
      e === void 0 && (e = t);
      const n = o[e];
      return typeof n == "number" ? this.data.store.session.get(`HISTORY:${this.id}:${n}`) : n;
    },
    applyHistory(e, t, o) {
      const n = { historyCursor: e }, r = this.options.historyTarget === "applied", { appliedDraft: s, stagingDraft: l } = this.state, c = Oe((r ? s : l) ?? {});
      r ? n.appliedDraft = Jt(s, t) : n.stagingDraft = Jt(l, t), this.setState(n, () => {
        var d;
        o == null || o();
        const f = Object.entries(t).reduce((i, [p, h]) => {
          if (h) {
            const a = {};
            Object.entries(h).forEach(([u, m]) => {
              a[u] = m === void 0 ? this.getCellDraftValue(p, u) : m;
            }), i[p] = a;
          }
          return i;
        }, {});
        (d = this.options.onHistoryApplied) == null || d.call(this, f, r ? s : l ?? {}, c);
      });
    },
    undoHistory(e) {
      if (!this.canUndoHistory())
        return !1;
      const { historyCursor: t } = this.state, o = this.getHistory(t);
      return o ? (this.applyHistory(t + 1, Oe(o.before), e), !0) : !1;
    },
    redoHistory(e) {
      if (!this.canRedoHistory())
        return !1;
      const { historyCursor: t } = this.state, o = this.getHistory(t - 1);
      return o ? (this.applyHistory(t - 1, Oe(o.after), e), !0) : !1;
    },
    canUndoHistory() {
      const { historyCursor: e, historyItems: t } = this.state;
      return t.length > 0 && e < t.length;
    },
    canRedoHistory() {
      return this.state.historyCursor > 0;
    }
  }
}, ii = K(ri);
function li() {
  var y, w;
  const { scrollToMouse: e } = this.data;
  if (!e)
    return this.stopScrollToMouse();
  const { position: t, startTime: o, delay: n } = e;
  if (!t || Date.now() - o < n)
    return;
  const r = (w = (y = this.ref.current) == null ? void 0 : y.querySelector(".dtable-rows")) == null ? void 0 : w.getBoundingClientRect();
  if (!r)
    return;
  const { maxStep: s, detectPadding: l, speed: c } = e, { x: f, y: d } = t, { left: i, top: p, right: h, bottom: a } = r;
  let u = 0;
  f < i - l ? u = -Math.max(s, i - l - f) : f > h - l && (u = Math.max(s, f - (h - l)));
  let m = 0;
  d < p - l ? m = -Math.max(s, p - l - d) : d > a - l && (m = Math.max(s, d - (a - l)));
  const _ = {};
  u !== 0 && (_.scrollLeft = this.layout.scrollLeft + c * u), m !== 0 && (_.scrollTop = this.layout.scrollTop + c * m), Object.keys(_).length && this.scroll(_);
}
const ci = {
  name: "autoscroll",
  plugins: [ho],
  events: {
    document_mousemovesmooth(e) {
      if (!this.data.scrollToMouse)
        return;
      const { clientX: t, clientY: o } = e;
      this.data.scrollToMouse.position = { x: t, y: o };
    }
  },
  methods: {
    scrollTo({ col: e, row: t, extra: o = 2 }) {
      const n = this.getColInfo(e), r = this.getRowInfo(t);
      if (!n && !r)
        return !1;
      const s = {}, { layout: l } = this;
      if (n) {
        const { scrollLeft: c, colsInfo: f } = l, d = n.left + n.realWidth;
        n.left < c ? s.scrollLeft = n.left - o : d > f.scrollWidth + c && (s.scrollLeft = d - f.scrollWidth + o);
      }
      if (r) {
        const { scrollTop: c, rowHeight: f, rowsHeight: d } = l, i = r.top + f;
        r.top < c ? s.scrollTop = r.top - o : i > d + c && (s.scrollTop = i - d + o);
      }
      return this.scroll(s), !0;
    },
    startScrollToMouse(e) {
      const t = {
        interval: 60,
        speed: 0.2,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...e
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(li.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, ai = K(ci);
function fi(e, t) {
  const { colsCount: o, rowsCount: n } = e.getGridSize(), { cols: r = [] } = t, { showRowIndex: s, defaultColWidth: l } = e.options, c = [];
  s !== !1 && c.push({
    width: `${n + 1}`.length * 8 + 24,
    name: "INDEX",
    fixed: "left",
    align: "right",
    title: "#",
    ...r.find((f) => f.name === "INDEX")
  });
  for (let f = 0; f < o; ++f) {
    const d = `C${f + 1}`, i = {
      name: d,
      width: l,
      ...r.find((p) => p.name === d)
    };
    c.push(i);
  }
  return {
    cols: c,
    data: n
  };
}
function hi(e, t, o) {
  var n, r;
  return t.name === "INDEX" ? e.id === "HEADER" ? o : e.index + 1 : e.id !== "HEADER" ? (r = (n = this.options.datasource.data) == null ? void 0 : n[+e.id]) == null ? void 0 : r[+t.name.replace("C", "") - 1] : o;
}
function et(e, t, o) {
  e.selectNextCell(o) && (t.preventDefault(), t.stopPropagation());
}
const ui = {
  delete() {
    this.deleteSelections();
  },
  cut() {
    this.cutSelections();
  },
  selectAll(e) {
    this.selectAllCells(), e.preventDefault();
  },
  paste() {
    this.pasteToSelection();
  },
  copy(e) {
    this.copySelections(), e.preventDefault();
  },
  focus() {
    const e = this.getSelectedCells()[0];
    if (!e)
      return;
    const t = this.getColInfo(e.col), o = this.getRowInfo(e.row);
    !t || !o || this.editCell({ rowID: o.id, colName: t.name });
  },
  cancel() {
    this.deselectAllCells();
  },
  undo() {
    this.undoHistory();
  },
  redo() {
    this.redoHistory();
  },
  selectRight(e) {
    et(this, e, "right");
  },
  selectLeft(e) {
    et(this, e, "left");
  },
  selectDown(e) {
    et(this, e, "down");
  },
  selectUp(e) {
    et(this, e, "up");
  }
};
function ds(e, t) {
  Array.isArray(e) || (e = [e]);
  let o = 0, n = 0;
  const r = t == null ? void 0 : t.ignoreEmptyCell;
  return e.forEach((s) => {
    Object.entries(s).forEach(([l, c]) => {
      l !== "HEADER" && (o = Math.max(o, +l + 1), n = Math.max(n, ...Object.keys(c).map((f) => r && ps(c[f]) || f[0] !== "C" ? 0 : +f.replace("C", ""))));
    });
  }), { maxRow: o, maxCol: n };
}
function di() {
  const { minRows: e = 1, minCols: t = 1, extraRows: o = 0, extraCols: n = 0, datasource: r } = this.options, { data: s = [], cols: l = [] } = r, { stagingDraft: c, appliedDraft: f } = this.state, { maxRow: d, maxCol: i } = ds([c, f]);
  return {
    rowsCount: Math.max(d, s.length + o, e, this.data.rowsCount ?? 0),
    colsCount: Math.max(i, t, l.length, s.reduce((p, h) => Math.max(p, h.length), 0) + n, this.data.colsCount ?? 0)
  };
}
function pi(e = 1, t) {
  const { rowsCount: o } = this.getGridSize();
  let n = o;
  return typeof e == "number" ? n = o + Math.max(e, 0) : Array.isArray(e) && (n = o + Math.max(e.length, 0), this.stageDraft(e.reduce((r, s, l) => (Array.isArray(s) && (s = s.reduce((c, f, d) => (c[`C${d + 1}`] = f, c), {})), r[o + l] = s, r), {}), { skipUpdate: !0 })), n > o ? (this.data.rowsCount = n, t != null && t.skipUpdate || this.update({ dirtyType: "options" }, () => {
    (t == null ? void 0 : t.select) !== !1 && this.selectCells(`R${o}:R${n - 1}`), (t == null ? void 0 : t.autoScroll) !== !1 && this.scrollTo({ row: n - 1, col: 0 });
  }), !0) : !1;
}
function _i(e = 1, t) {
  const { colsCount: o } = this.getGridSize();
  let n = o;
  const { showRowIndex: r } = this.options;
  return typeof e == "number" ? n = o + Math.max(e, 0) : Array.isArray(e) && (n = o + Math.max(e.length, 0), this.stageDraft(e.reduce((s, l, c) => (l.forEach((f, d) => {
    const i = s[d], p = `C${o + c + (r ? 1 : 0)}`;
    i ? i[p] = f : s[d] = { [p]: f };
  }), s), {}), { skipUpdate: !0 })), n > o ? (this.data.colsCount = n, t != null && t.skipUpdate || this.update({ dirtyType: "options" }, () => {
    (t == null ? void 0 : t.select) !== !1 && this.selectCells(`C${o + (r ? 1 : 0)}:C${n - 1 + (r ? 1 : 0)}`), (t == null ? void 0 : t.autoScroll) !== !1 && this.scrollTo({ col: n - (r ? 0 : 1), row: 0 });
  }), !0) : !1;
}
function gi(e, t) {
  const o = this.getGridSize(), n = Math.max(0, (e.rowsCount ?? 0) - o.rowsCount), r = Math.max(0, (e.colsCount ?? 0) - o.colsCount);
  return n && this.appendRows(n, { skipUpdate: !0, select: !1 }), r && this.appendCols(r, { skipUpdate: !0, select: !1 }), n || r ? (t != null && t.skipUpdate || this.update({ dirtyType: "options" }), !0) : !1;
}
function ps(e) {
  return e == null || typeof e == "string" && !e.length;
}
function Qo(e) {
  let t = 0, o = 0;
  return e.forEach((n, r) => {
    n.forEach((s, l) => {
      ps(s) || (t = Math.max(t, l), o = Math.max(o, r));
    });
  }), e.slice(0, o + 1).map((n) => n.slice(0, t + 1));
}
const yi = {
  name: "datagrid",
  plugins: [wr, zr, ti, Cr, ii, ai],
  defaultOptions: {
    defaultColWidth: 80,
    headerEditable: !0,
    minRows: 20,
    minCols: 10,
    extraRows: 5,
    extraCols: 5,
    showRowIndex: !0,
    rowHover: !1,
    colHover: !1,
    cellHover: !0,
    bordered: !0,
    striped: !1,
    datagridHotkeys: {},
    cellValueSplitter: "	",
    cellValueGetter: hi,
    hotkeys: {},
    autoExpandGrid: !0
  },
  options(e) {
    const { datagridHotkeys: t, datasource: o, hotkeys: n, editable: r, selectable: s, beforeSelectCells: l, showRowIndex: c, colResize: f, onPasteToCell: d, afterStageDraft: i } = e, p = {
      delete: "delete,backspace",
      selectAll: "ctrl+a,command+a",
      paste: "ctrl+v,command+v",
      copy: "ctrl+c,command+c",
      focus: "enter",
      cancel: "esc",
      cut: "ctrl+x,command+x",
      redo: "ctrl+shift+z,command+shift+z",
      undo: "ctrl+z,command+z",
      selectRight: "tab,right",
      selectLeft: "left",
      selectDown: "down",
      selectUp: "up"
    };
    return {
      hotkeys: {
        ...n,
        ...Object.entries({
          ...p,
          ...t
        }).reduce((a, [u, m]) => {
          var _;
          return m && (a[m === !0 ? p[u] : m] = (_ = ui[u]) == null ? void 0 : _.bind(this)), a;
        }, {})
      },
      colResize: f ? (a) => (typeof f != "function" || f.call(this, a)) && a !== "INDEX" : !1,
      editable: r ? (a, u) => typeof r == "function" && !r(a, u) ? !1 : u !== "INDEX" : !1,
      selectable: s ? (a) => typeof s == "function" && !s(a) ? !1 : a.col >= (c ? 1 : 0) : !1,
      beforeSelectCells: c ? (a) => (a.every((u) => u.col === 0) && (a = ls.call(this, `R${Math.min(...a.map((u) => u.row))}:R${Math.max(...a.map((u) => u.row))}`)), l ? l.call(this, a) : a) : l,
      ...fi(this, o),
      onPasteToCell: (a) => {
        var m;
        const u = (m = a.clipboardData) == null ? void 0 : m.getData("text");
        typeof u == "string" && (u.includes("	") || u.includes(`
`)) && this.state.editingCell && (this.pasteCells(this.state.editingCell, { data: u }), a.preventDefault()), d == null || d.call(this, a);
      },
      afterStageDraft: (a, u, m, _) => {
        i == null || i.call(this, a, u, m, _);
        const { autoExpandGrid: y } = this.options;
        if (!y)
          return;
        const { maxCol: w, maxRow: C } = ds(u, { ignoreEmptyCell: !0 }), { extraCols: R = 1, extraRows: P = 1 } = this.options;
        this.expandGridSize({
          rowsCount: C + (typeof y == "number" ? y : P),
          colsCount: w + (typeof y == "number" ? y : R)
        }, _);
      }
    };
  },
  methods: {
    deleteSelections() {
      const e = [];
      for (const [t, o] of this.state.selectedMap.entries()) {
        const n = this.getColInfo(t);
        if (n)
          for (const r of o) {
            const s = this.getRowInfo(r);
            s && e.push({ colName: n.name, rowID: s.id });
          }
      }
      return this.deleteCells(e);
    },
    deleteSelectedRows() {
      const e = this.getSelectedRows();
      return e.length ? (this.deleteRows(e), this.deselectAllCells(), !0) : !1;
    },
    deleteSelectedCols() {
      const e = this.getSelectedCols();
      return e.length ? (this.deleteCols(e), this.deselectAllCells(), !0) : !1;
    },
    copySelectedCols() {
      const e = this.getSelectedCols();
      if (!e.length)
        return !1;
      const t = this.layout.rows.length, o = [];
      for (let r = -1; r < t; ++r)
        o.push(e.map((s) => {
          const l = this.getCellDraftValue(r, s);
          return r === -1 && l === s.name ? "" : l;
        }));
      const n = Qo(o).map((r) => r.join("	")).join(`
`);
      return navigator.clipboard.writeText(n), !0;
    },
    clearSelectedCols() {
      const e = this.getSelectedCols();
      if (!e.length)
        return !1;
      const t = {}, { emptyCellValue: o } = this.options;
      return [this.getRowInfo("HEADER"), ...this.layout.rows].forEach((n) => {
        const r = {};
        e.forEach((s) => {
          const l = this.getCellDraftValue(n, s);
          l != null && l !== o && (r[s.name] = o);
        }), Object.keys(r).length && (t[n.id] = r);
      }), Object.keys(t).length ? (this.stageDraft(t), !0) : !1;
    },
    async pasteToSelectedCol() {
      const e = this.getSelectedCols();
      return e.length ? await this.pasteCells({ colName: e[0].name, rowID: "HEADER" }) : !1;
    },
    cutSelectedCols() {
      return this.copySelectedCols(), this.clearSelectedCols();
    },
    copySelections() {
      const e = this.getSelectedCells();
      if (!e.length)
        return !1;
      let t = Number.MAX_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER;
      e.forEach((s) => {
        t = Math.min(s.col, t), o = Math.min(s.row, o);
      });
      const n = [];
      e.forEach((s) => {
        const l = this.getCellDraftValue(s.row, s.col);
        let c = n[s.row - o];
        c || (c = [], n[s.row - o] = c), c[s.col - t] = l;
      });
      const r = Qo(n).map((s) => s.join("	")).join(`
`);
      return navigator.clipboard.writeText(r), !0;
    },
    cutSelections() {
      return this.copySelections(), this.deleteSelections();
    },
    async pasteCells(e, t) {
      var h, a;
      let o = -1, n = -1;
      if ("colName" in e) {
        const u = this.getColInfo(e.colName), m = this.getRowInfo(e.rowID);
        if (!u || !m)
          return !1;
        o = u.index, n = m.index;
      } else
        o = e.col, n = e.row;
      let r = t == null ? void 0 : t.data;
      if (r === void 0)
        try {
          const u = "clipboard-read";
          if ((await navigator.permissions.query({ name: u })).state === "denied")
            return (h = this.options.onReadClipboardFail) == null || h.call(this), !1;
          r = await navigator.clipboard.readText();
        } catch {
          return (a = this.options.onReadClipboardFail) == null || a.call(this), !1;
        }
      if (!r.length)
        return !1;
      const s = {}, l = [], c = (t == null ? void 0 : t.expandCells) !== !1;
      let f = !1, d = 0, i = 0;
      const p = r.split(/\r?\n/);
      return p.forEach((u, m) => {
        var C;
        if (!u.trim().length && m === p.length - 1)
          return;
        const _ = m + n;
        let y = (C = this.getRowInfo(_)) == null ? void 0 : C.id;
        if (y === void 0) {
          if (!c)
            return;
          f = !0, y = `${_}`;
        }
        let w = s[y];
        w || (w = {}, s[y] = w), u.split("	").forEach((R, P) => {
          var v;
          const E = P + o;
          let D = (v = this.getColInfo(E)) == null ? void 0 : v.name;
          if (D === void 0) {
            if (!c)
              return;
            f = !0, D = `C${E}`;
          }
          w[D] = R, l.push({ col: E, row: _ }), d = Math.max(d, _), i = Math.max(i, E);
        });
      }), this.stageDraft(s, { skipUpdate: !0 }), (t == null ? void 0 : t.select) !== !1 && this.selectCells(l), this.update({ dirtyType: f ? "options" : void 0 }, () => {
        t != null && t.autoscroll && this.scrollTo({ col: i, row: d });
      }), !0;
    },
    pasteToSelection() {
      const e = this.getSelectedCells();
      if (!e.length)
        return Promise.resolve(!1);
      const t = e[0];
      return this.pasteCells(t);
    },
    getGridSize: di,
    appendRows: pi,
    appendCols: _i,
    expandGridSize: gi
  },
  onRender() {
    return { className: "dtable-datagrid" };
  }
}, bi = K(yi);
export {
  bi as datagrid,
  yi as datagridPlugin,
  gi as expandGridSize
};
