function t() {}
const n = (t) => t;
function e(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function o(t) {
	return t();
}
function s() {
	return Object.create(null);
}
function r(t) {
	t.forEach(o);
}
function i(t) {
	return 'function' == typeof t;
}
function c(t, n) {
	return t != t ? n == n : t !== n || (t && 'object' == typeof t) || 'function' == typeof t;
}
function u(n, e, o) {
	n.$$.on_destroy.push(
		(function (n, ...e) {
			if (null == n) return t;
			const o = n.subscribe(...e);
			return o.unsubscribe ? () => o.unsubscribe() : o;
		})(e, o)
	);
}
function a(t, n, e, o) {
	if (t) {
		const s = l(t, n, e, o);
		return t[0](s);
	}
}
function l(t, n, o, s) {
	return t[1] && s ? e(o.ctx.slice(), t[1](s(n))) : o.ctx;
}
function f(t, n, e, o, s, r, i) {
	const c = (function (t, n, e, o) {
		if (t[2] && o) {
			const s = t[2](o(e));
			if (void 0 === n.dirty) return s;
			if ('object' == typeof s) {
				const t = [],
					e = Math.max(n.dirty.length, s.length);
				for (let o = 0; o < e; o += 1) t[o] = n.dirty[o] | s[o];
				return t;
			}
			return n.dirty | s;
		}
		return n.dirty;
	})(n, o, s, r);
	if (c) {
		const s = l(n, e, o, i);
		t.p(s, c);
	}
}
function d(t) {
	return null == t ? '' : t;
}
const h = 'undefined' != typeof window;
let p = h ? () => window.performance.now() : () => Date.now(),
	$ = h ? (t) => requestAnimationFrame(t) : t;
const m = new Set();
function g(t) {
	m.forEach((n) => {
		n.c(t) || (m.delete(n), n.f());
	}),
		0 !== m.size && $(g);
}
function b(t) {
	let n;
	return (
		0 === m.size && $(g),
		{
			promise: new Promise((e) => {
				m.add((n = { c: t, f: e }));
			}),
			abort() {
				m.delete(n);
			}
		}
	);
}
function y(t, n) {
	t.appendChild(n);
}
function _(t, n, e) {
	t.insertBefore(n, e || null);
}
function v(t) {
	t.parentNode.removeChild(t);
}
function x(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function w(t) {
	return document.createElement(t);
}
function E(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function k(t) {
	return document.createTextNode(t);
}
function A() {
	return k(' ');
}
function N() {
	return k('');
}
function j(t, n, e, o) {
	return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
}
function C(t, n, e) {
	null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function S(t) {
	return Array.from(t.childNodes);
}
function O(t, n, e, o) {
	for (let s = 0; s < t.length; s += 1) {
		const o = t[s];
		if (o.nodeName === n) {
			let n = 0;
			const r = [];
			for (; n < o.attributes.length; ) {
				const t = o.attributes[n++];
				e[t.name] || r.push(t.name);
			}
			for (let t = 0; t < r.length; t++) o.removeAttribute(r[t]);
			return t.splice(s, 1)[0];
		}
	}
	return o ? E(n) : w(n);
}
function L(t, n) {
	for (let e = 0; e < t.length; e += 1) {
		const o = t[e];
		if (3 === o.nodeType) return (o.data = '' + n), t.splice(e, 1)[0];
	}
	return k(n);
}
function M(t) {
	return L(t, ' ');
}
function P(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function R(t, n, e, o) {
	t.style.setProperty(n, e, o ? 'important' : '');
}
function T(t, n, e) {
	t.classList[e ? 'add' : 'remove'](n);
}
function q(t, n) {
	const e = document.createEvent('CustomEvent');
	return e.initCustomEvent(t, !1, !1, n), e;
}
function z(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
class D {
	constructor(t = null) {
		(this.a = t), (this.e = this.n = null);
	}
	m(t, n, e = null) {
		this.e || ((this.e = w(n.nodeName)), (this.t = n), this.h(t)), this.i(e);
	}
	h(t) {
		(this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
	}
	i(t) {
		for (let n = 0; n < this.n.length; n += 1) _(this.t, this.n[n], t);
	}
	p(t) {
		this.d(), this.h(t), this.i(this.a);
	}
	d() {
		this.n.forEach(v);
	}
}
const F = new Set();
let B,
	H = 0;
function G(t, n, e, o, s, r, i, c = 0) {
	const u = 16.666 / o;
	let a = '{\n';
	for (let m = 0; m <= 1; m += u) {
		const t = n + (e - n) * r(m);
		a += 100 * m + `%{${i(t, 1 - t)}}\n`;
	}
	const l = a + `100% {${i(e, 1 - e)}}\n}`,
		f = `__svelte_${(function (t) {
			let n = 5381,
				e = t.length;
			for (; e--; ) n = ((n << 5) - n) ^ t.charCodeAt(e);
			return n >>> 0;
		})(l)}_${c}`,
		d = t.ownerDocument;
	F.add(d);
	const h = d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(w('style')).sheet),
		p = d.__svelte_rules || (d.__svelte_rules = {});
	p[f] || ((p[f] = !0), h.insertRule(`@keyframes ${f} ${l}`, h.cssRules.length));
	const $ = t.style.animation || '';
	return (t.style.animation = `${$ ? `${$}, ` : ''}${f} ${o}ms linear ${s}ms 1 both`), (H += 1), f;
}
function I(t, n) {
	const e = (t.style.animation || '').split(', '),
		o = e.filter(n ? (t) => t.indexOf(n) < 0 : (t) => -1 === t.indexOf('__svelte')),
		s = e.length - o.length;
	s &&
		((t.style.animation = o.join(', ')),
		(H -= s),
		H ||
			$(() => {
				H ||
					(F.forEach((t) => {
						const n = t.__svelte_stylesheet;
						let e = n.cssRules.length;
						for (; e--; ) n.deleteRule(e);
						t.__svelte_rules = {};
					}),
					F.clear());
			}));
}
function J(t) {
	B = t;
}
function K() {
	if (!B) throw new Error('Function called outside component initialization');
	return B;
}
function Q(t) {
	K().$$.on_mount.push(t);
}
function U(t) {
	K().$$.after_update.push(t);
}
function V() {
	const t = K();
	return (n, e) => {
		const o = t.$$.callbacks[n];
		if (o) {
			const s = q(n, e);
			o.slice().forEach((n) => {
				n.call(t, s);
			});
		}
	};
}
function W(t, n) {
	K().$$.context.set(t, n);
}
function X(t, n) {
	const e = t.$$.callbacks[n.type];
	e && e.slice().forEach((t) => t(n));
}
const Y = [],
	Z = [],
	tt = [],
	nt = [],
	et = Promise.resolve();
let ot = !1;
function st(t) {
	tt.push(t);
}
function rt(t) {
	nt.push(t);
}
let it = !1;
const ct = new Set();
function ut() {
	if (!it) {
		it = !0;
		do {
			for (let t = 0; t < Y.length; t += 1) {
				const n = Y[t];
				J(n), at(n.$$);
			}
			for (J(null), Y.length = 0; Z.length; ) Z.pop()();
			for (let t = 0; t < tt.length; t += 1) {
				const n = tt[t];
				ct.has(n) || (ct.add(n), n());
			}
			tt.length = 0;
		} while (Y.length);
		for (; nt.length; ) nt.pop()();
		(ot = !1), (it = !1), ct.clear();
	}
}
function at(t) {
	if (null !== t.fragment) {
		t.update(), r(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(st);
	}
}
let lt;
function ft() {
	return (
		lt ||
			((lt = Promise.resolve()),
			lt.then(() => {
				lt = null;
			})),
		lt
	);
}
function dt(t, n, e) {
	t.dispatchEvent(q(`${n ? 'intro' : 'outro'}${e}`));
}
const ht = new Set();
let pt;
function $t() {
	pt = { r: 0, c: [], p: pt };
}
function mt() {
	pt.r || r(pt.c), (pt = pt.p);
}
function gt(t, n) {
	t && t.i && (ht.delete(t), t.i(n));
}
function bt(t, n, e, o) {
	if (t && t.o) {
		if (ht.has(t)) return;
		ht.add(t),
			pt.c.push(() => {
				ht.delete(t), o && (e && t.d(1), o());
			}),
			t.o(n);
	}
}
const yt = { duration: 0 };
function _t(e, o, s) {
	let r,
		c,
		u = o(e, s),
		a = !1,
		l = 0;
	function f() {
		r && I(e, r);
	}
	function d() {
		const { delay: o = 0, duration: s = 300, easing: i = n, tick: d = t, css: h } = u || yt;
		h && (r = G(e, 0, 1, s, o, i, h, l++)), d(0, 1);
		const $ = p() + o,
			m = $ + s;
		c && c.abort(),
			(a = !0),
			st(() => dt(e, !0, 'start')),
			(c = b((t) => {
				if (a) {
					if (t >= m) return d(1, 0), dt(e, !0, 'end'), f(), (a = !1);
					if (t >= $) {
						const n = i((t - $) / s);
						d(n, 1 - n);
					}
				}
				return a;
			}));
	}
	let h = !1;
	return {
		start() {
			h || (I(e), i(u) ? ((u = u()), ft().then(d)) : d());
		},
		invalidate() {
			h = !1;
		},
		end() {
			a && (f(), (a = !1));
		}
	};
}
function vt(e, o, s) {
	let c,
		u = o(e, s),
		a = !0;
	const l = pt;
	function f() {
		const { delay: o = 0, duration: s = 300, easing: i = n, tick: f = t, css: d } = u || yt;
		d && (c = G(e, 1, 0, s, o, i, d));
		const h = p() + o,
			$ = h + s;
		st(() => dt(e, !1, 'start')),
			b((t) => {
				if (a) {
					if (t >= $) return f(0, 1), dt(e, !1, 'end'), --l.r || r(l.c), !1;
					if (t >= h) {
						const n = i((t - h) / s);
						f(1 - n, n);
					}
				}
				return a;
			});
	}
	return (
		(l.r += 1),
		i(u)
			? ft().then(() => {
					(u = u()), f();
			  })
			: f(),
		{
			end(t) {
				t && u.tick && u.tick(1, 0), a && (c && I(e, c), (a = !1));
			}
		}
	);
}
function xt(e, o, s, c) {
	let u = o(e, s),
		a = c ? 0 : 1,
		l = null,
		f = null,
		d = null;
	function h() {
		d && I(e, d);
	}
	function $(t, n) {
		const e = t.b - a;
		return (
			(n *= Math.abs(e)),
			{ a: a, b: t.b, d: e, duration: n, start: t.start, end: t.start + n, group: t.group }
		);
	}
	function m(o) {
		const { delay: s = 0, duration: i = 300, easing: c = n, tick: m = t, css: g } = u || yt,
			y = { start: p() + s, b: o };
		o || ((y.group = pt), (pt.r += 1)),
			l || f
				? (f = y)
				: (g && (h(), (d = G(e, a, o, i, s, c, g))),
				  o && m(0, 1),
				  (l = $(y, i)),
				  st(() => dt(e, o, 'start')),
				  b((t) => {
						if (
							(f &&
								t > f.start &&
								((l = $(f, i)),
								(f = null),
								dt(e, l.b, 'start'),
								g && (h(), (d = G(e, a, l.b, l.duration, 0, c, u.css)))),
							l)
						)
							if (t >= l.end)
								m((a = l.b), 1 - a),
									dt(e, l.b, 'end'),
									f || (l.b ? h() : --l.group.r || r(l.group.c)),
									(l = null);
							else if (t >= l.start) {
								const n = t - l.start;
								(a = l.a + l.d * c(n / l.duration)), m(a, 1 - a);
							}
						return !(!l && !f);
				  }));
	}
	return {
		run(t) {
			i(u)
				? ft().then(() => {
						(u = u()), m(t);
				  })
				: m(t);
		},
		end() {
			h(), (l = f = null);
		}
	};
}
function wt(t, n) {
	const e = {},
		o = {},
		s = { $$scope: 1 };
	let r = t.length;
	for (; r--; ) {
		const i = t[r],
			c = n[r];
		if (c) {
			for (const t in i) t in c || (o[t] = 1);
			for (const t in c) s[t] || ((e[t] = c[t]), (s[t] = 1));
			t[r] = c;
		} else for (const t in i) s[t] = 1;
	}
	for (const i in o) i in e || (e[i] = void 0);
	return e;
}
function Et(t) {
	return 'object' == typeof t && null !== t ? t : {};
}
function kt(t, n, e) {
	const o = t.$$.props[n];
	void 0 !== o && ((t.$$.bound[o] = e), e(t.$$.ctx[o]));
}
function At(t) {
	t && t.c();
}
function Nt(t, n) {
	t && t.l(n);
}
function jt(t, n, e, s) {
	const { fragment: c, on_mount: u, on_destroy: a, after_update: l } = t.$$;
	c && c.m(n, e),
		s ||
			st(() => {
				const n = u.map(o).filter(i);
				a ? a.push(...n) : r(n), (t.$$.on_mount = []);
			}),
		l.forEach(st);
}
function Ct(t, n) {
	const e = t.$$;
	null !== e.fragment &&
		(r(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function St(t, n) {
	-1 === t.$$.dirty[0] && (Y.push(t), ot || ((ot = !0), et.then(ut)), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Ot(n, e, o, i, c, u, a = [-1]) {
	const l = B;
	J(n);
	const f = (n.$$ = {
		fragment: null,
		ctx: null,
		props: u,
		update: t,
		not_equal: c,
		bound: s(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(l ? l.$$.context : e.context || []),
		callbacks: s(),
		dirty: a,
		skip_bound: !1
	});
	let d = !1;
	if (
		((f.ctx = o
			? o(n, e.props || {}, (t, e, ...o) => {
					const s = o.length ? o[0] : e;
					return (
						f.ctx &&
							c(f.ctx[t], (f.ctx[t] = s)) &&
							(!f.skip_bound && f.bound[t] && f.bound[t](s), d && St(n, t)),
						e
					);
			  })
			: []),
		f.update(),
		(d = !0),
		r(f.before_update),
		(f.fragment = !!i && i(f.ctx)),
		e.target)
	) {
		if (e.hydrate) {
			const t = S(e.target);
			f.fragment && f.fragment.l(t), t.forEach(v);
		} else f.fragment && f.fragment.c();
		e.intro && gt(n.$$.fragment), jt(n, e.target, e.anchor, e.customElement), ut();
	}
	J(l);
}
class Lt {
	$destroy() {
		Ct(this, 1), (this.$destroy = t);
	}
	$on(t, n) {
		const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			e.push(n),
			() => {
				const t = e.indexOf(n);
				-1 !== t && e.splice(t, 1);
			}
		);
	}
	$set(t) {
		var n;
		this.$$set &&
			((n = t), 0 !== Object.keys(n).length) &&
			((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
export {
	p as $,
	U as A,
	Q as B,
	$t as C,
	mt as D,
	E,
	T as F,
	j as G,
	a as H,
	z as I,
	f as J,
	x as K,
	R as L,
	st as M,
	xt as N,
	X as O,
	r as P,
	Z as Q,
	kt as R,
	Lt as S,
	rt as T,
	d as U,
	n as V,
	i as W,
	V as X,
	_t as Y,
	vt as Z,
	D as _,
	S as a,
	b as a0,
	u as a1,
	L as b,
	O as c,
	v as d,
	w as e,
	_ as f,
	y as g,
	P as h,
	Ot as i,
	A as j,
	N as k,
	M as l,
	e as m,
	t as n,
	C as o,
	At as p,
	Nt as q,
	jt as r,
	c as s,
	k as t,
	wt as u,
	Et as v,
	gt as w,
	bt as x,
	Ct as y,
	W as z
};
