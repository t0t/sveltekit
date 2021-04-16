function t() {}
const n = (t) => t;
function e(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function o(t) {
	return t();
}
function r() {
	return Object.create(null);
}
function s(t) {
	t.forEach(o);
}
function c(t) {
	return 'function' == typeof t;
}
function u(t, n) {
	return t != t ? n == n : t !== n || (t && 'object' == typeof t) || 'function' == typeof t;
}
function i(n, e, o) {
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
		const r = f(t, n, e, o);
		return t[0](r);
	}
}
function f(t, n, o, r) {
	return t[1] && r ? e(o.ctx.slice(), t[1](r(n))) : o.ctx;
}
function l(t, n, e, o, r, s, c) {
	const u = (function (t, n, e, o) {
		if (t[2] && o) {
			const r = t[2](o(e));
			if (void 0 === n.dirty) return r;
			if ('object' == typeof r) {
				const t = [],
					e = Math.max(n.dirty.length, r.length);
				for (let o = 0; o < e; o += 1) t[o] = n.dirty[o] | r[o];
				return t;
			}
			return n.dirty | r;
		}
		return n.dirty;
	})(n, o, r, s);
	if (u) {
		const r = f(n, e, o, c);
		t.p(r, u);
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
	return document.createTextNode(t);
}
function k() {
	return E(' ');
}
function A() {
	return E('');
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
function N(t, n, e, o) {
	for (let r = 0; r < t.length; r += 1) {
		const o = t[r];
		if (o.nodeName === n) {
			let n = 0;
			const s = [];
			for (; n < o.attributes.length; ) {
				const t = o.attributes[n++];
				e[t.name] || s.push(t.name);
			}
			for (let t = 0; t < s.length; t++) o.removeAttribute(s[t]);
			return t.splice(r, 1)[0];
		}
	}
	return o
		? (function (t) {
				return document.createElementNS('http://www.w3.org/2000/svg', t);
		  })(n)
		: w(n);
}
function O(t, n) {
	for (let e = 0; e < t.length; e += 1) {
		const o = t[e];
		if (3 === o.nodeType) return (o.data = '' + n), t.splice(e, 1)[0];
	}
	return E(n);
}
function P(t) {
	return O(t, ' ');
}
function R(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function q(t, n, e, o) {
	t.style.setProperty(n, e, o ? 'important' : '');
}
function z(t, n, e) {
	t.classList[e ? 'add' : 'remove'](n);
}
function L(t, n) {
	const e = document.createEvent('CustomEvent');
	return e.initCustomEvent(t, !1, !1, n), e;
}
function M(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
const T = new Set();
let D,
	F = 0;
function B(t, n, e, o, r, s, c, u = 0) {
	const i = 16.666 / o;
	let a = '{\n';
	for (let m = 0; m <= 1; m += i) {
		const t = n + (e - n) * s(m);
		a += 100 * m + `%{${c(t, 1 - t)}}\n`;
	}
	const f = a + `100% {${c(e, 1 - e)}}\n}`,
		l = `__svelte_${(function (t) {
			let n = 5381,
				e = t.length;
			for (; e--; ) n = ((n << 5) - n) ^ t.charCodeAt(e);
			return n >>> 0;
		})(f)}_${u}`,
		d = t.ownerDocument;
	T.add(d);
	const h = d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(w('style')).sheet),
		p = d.__svelte_rules || (d.__svelte_rules = {});
	p[l] || ((p[l] = !0), h.insertRule(`@keyframes ${l} ${f}`, h.cssRules.length));
	const $ = t.style.animation || '';
	return (t.style.animation = `${$ ? `${$}, ` : ''}${l} ${o}ms linear ${r}ms 1 both`), (F += 1), l;
}
function G(t, n) {
	const e = (t.style.animation || '').split(', '),
		o = e.filter(n ? (t) => t.indexOf(n) < 0 : (t) => -1 === t.indexOf('__svelte')),
		r = e.length - o.length;
	r &&
		((t.style.animation = o.join(', ')),
		(F -= r),
		F ||
			$(() => {
				F ||
					(T.forEach((t) => {
						const n = t.__svelte_stylesheet;
						let e = n.cssRules.length;
						for (; e--; ) n.deleteRule(e);
						t.__svelte_rules = {};
					}),
					T.clear());
			}));
}
function H(t) {
	D = t;
}
function I() {
	if (!D) throw new Error('Function called outside component initialization');
	return D;
}
function J(t) {
	I().$$.on_mount.push(t);
}
function K(t) {
	I().$$.after_update.push(t);
}
function Q() {
	const t = I();
	return (n, e) => {
		const o = t.$$.callbacks[n];
		if (o) {
			const r = L(n, e);
			o.slice().forEach((n) => {
				n.call(t, r);
			});
		}
	};
}
function U(t, n) {
	I().$$.context.set(t, n);
}
function V(t, n) {
	const e = t.$$.callbacks[n.type];
	e && e.slice().forEach((t) => t(n));
}
const W = [],
	X = [],
	Y = [],
	Z = [],
	tt = Promise.resolve();
let nt = !1;
function et(t) {
	Y.push(t);
}
function ot(t) {
	Z.push(t);
}
let rt = !1;
const st = new Set();
function ct() {
	if (!rt) {
		rt = !0;
		do {
			for (let t = 0; t < W.length; t += 1) {
				const n = W[t];
				H(n), ut(n.$$);
			}
			for (H(null), W.length = 0; X.length; ) X.pop()();
			for (let t = 0; t < Y.length; t += 1) {
				const n = Y[t];
				st.has(n) || (st.add(n), n());
			}
			Y.length = 0;
		} while (W.length);
		for (; Z.length; ) Z.pop()();
		(nt = !1), (rt = !1), st.clear();
	}
}
function ut(t) {
	if (null !== t.fragment) {
		t.update(), s(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(et);
	}
}
let it;
function at() {
	return (
		it ||
			((it = Promise.resolve()),
			it.then(() => {
				it = null;
			})),
		it
	);
}
function ft(t, n, e) {
	t.dispatchEvent(L(`${n ? 'intro' : 'outro'}${e}`));
}
const lt = new Set();
let dt;
function ht() {
	dt = { r: 0, c: [], p: dt };
}
function pt() {
	dt.r || s(dt.c), (dt = dt.p);
}
function $t(t, n) {
	t && t.i && (lt.delete(t), t.i(n));
}
function mt(t, n, e, o) {
	if (t && t.o) {
		if (lt.has(t)) return;
		lt.add(t),
			dt.c.push(() => {
				lt.delete(t), o && (e && t.d(1), o());
			}),
			t.o(n);
	}
}
const gt = { duration: 0 };
function bt(e, o, r) {
	let s,
		u,
		i = o(e, r),
		a = !1,
		f = 0;
	function l() {
		s && G(e, s);
	}
	function d() {
		const { delay: o = 0, duration: r = 300, easing: c = n, tick: d = t, css: h } = i || gt;
		h && (s = B(e, 0, 1, r, o, c, h, f++)), d(0, 1);
		const $ = p() + o,
			m = $ + r;
		u && u.abort(),
			(a = !0),
			et(() => ft(e, !0, 'start')),
			(u = b((t) => {
				if (a) {
					if (t >= m) return d(1, 0), ft(e, !0, 'end'), l(), (a = !1);
					if (t >= $) {
						const n = c((t - $) / r);
						d(n, 1 - n);
					}
				}
				return a;
			}));
	}
	let h = !1;
	return {
		start() {
			h || (G(e), c(i) ? ((i = i()), at().then(d)) : d());
		},
		invalidate() {
			h = !1;
		},
		end() {
			a && (l(), (a = !1));
		}
	};
}
function yt(e, o, r) {
	let u,
		i = o(e, r),
		a = !0;
	const f = dt;
	function l() {
		const { delay: o = 0, duration: r = 300, easing: c = n, tick: l = t, css: d } = i || gt;
		d && (u = B(e, 1, 0, r, o, c, d));
		const h = p() + o,
			$ = h + r;
		et(() => ft(e, !1, 'start')),
			b((t) => {
				if (a) {
					if (t >= $) return l(0, 1), ft(e, !1, 'end'), --f.r || s(f.c), !1;
					if (t >= h) {
						const n = c((t - h) / r);
						l(1 - n, n);
					}
				}
				return a;
			});
	}
	return (
		(f.r += 1),
		c(i)
			? at().then(() => {
					(i = i()), l();
			  })
			: l(),
		{
			end(t) {
				t && i.tick && i.tick(1, 0), a && (u && G(e, u), (a = !1));
			}
		}
	);
}
function _t(e, o, r, u) {
	let i = o(e, r),
		a = u ? 0 : 1,
		f = null,
		l = null,
		d = null;
	function h() {
		d && G(e, d);
	}
	function $(t, n) {
		const e = t.b - a;
		return (
			(n *= Math.abs(e)),
			{ a: a, b: t.b, d: e, duration: n, start: t.start, end: t.start + n, group: t.group }
		);
	}
	function m(o) {
		const { delay: r = 0, duration: c = 300, easing: u = n, tick: m = t, css: g } = i || gt,
			y = { start: p() + r, b: o };
		o || ((y.group = dt), (dt.r += 1)),
			f || l
				? (l = y)
				: (g && (h(), (d = B(e, a, o, c, r, u, g))),
				  o && m(0, 1),
				  (f = $(y, c)),
				  et(() => ft(e, o, 'start')),
				  b((t) => {
						if (
							(l &&
								t > l.start &&
								((f = $(l, c)),
								(l = null),
								ft(e, f.b, 'start'),
								g && (h(), (d = B(e, a, f.b, f.duration, 0, u, i.css)))),
							f)
						)
							if (t >= f.end)
								m((a = f.b), 1 - a),
									ft(e, f.b, 'end'),
									l || (f.b ? h() : --f.group.r || s(f.group.c)),
									(f = null);
							else if (t >= f.start) {
								const n = t - f.start;
								(a = f.a + f.d * u(n / f.duration)), m(a, 1 - a);
							}
						return !(!f && !l);
				  }));
	}
	return {
		run(t) {
			c(i)
				? at().then(() => {
						(i = i()), m(t);
				  })
				: m(t);
		},
		end() {
			h(), (f = l = null);
		}
	};
}
function vt(t, n) {
	const e = {},
		o = {},
		r = { $$scope: 1 };
	let s = t.length;
	for (; s--; ) {
		const c = t[s],
			u = n[s];
		if (u) {
			for (const t in c) t in u || (o[t] = 1);
			for (const t in u) r[t] || ((e[t] = u[t]), (r[t] = 1));
			t[s] = u;
		} else for (const t in c) r[t] = 1;
	}
	for (const c in o) c in e || (e[c] = void 0);
	return e;
}
function xt(t) {
	return 'object' == typeof t && null !== t ? t : {};
}
function wt(t, n, e) {
	const o = t.$$.props[n];
	void 0 !== o && ((t.$$.bound[o] = e), e(t.$$.ctx[o]));
}
function Et(t) {
	t && t.c();
}
function kt(t, n) {
	t && t.l(n);
}
function At(t, n, e, r) {
	const { fragment: u, on_mount: i, on_destroy: a, after_update: f } = t.$$;
	u && u.m(n, e),
		r ||
			et(() => {
				const n = i.map(o).filter(c);
				a ? a.push(...n) : s(n), (t.$$.on_mount = []);
			}),
		f.forEach(et);
}
function jt(t, n) {
	const e = t.$$;
	null !== e.fragment &&
		(s(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function Ct(t, n) {
	-1 === t.$$.dirty[0] && (W.push(t), nt || ((nt = !0), tt.then(ct)), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function St(n, e, o, c, u, i, a = [-1]) {
	const f = D;
	H(n);
	const l = (n.$$ = {
		fragment: null,
		ctx: null,
		props: i,
		update: t,
		not_equal: u,
		bound: r(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(f ? f.$$.context : e.context || []),
		callbacks: r(),
		dirty: a,
		skip_bound: !1
	});
	let d = !1;
	if (
		((l.ctx = o
			? o(n, e.props || {}, (t, e, ...o) => {
					const r = o.length ? o[0] : e;
					return (
						l.ctx &&
							u(l.ctx[t], (l.ctx[t] = r)) &&
							(!l.skip_bound && l.bound[t] && l.bound[t](r), d && Ct(n, t)),
						e
					);
			  })
			: []),
		l.update(),
		(d = !0),
		s(l.before_update),
		(l.fragment = !!c && c(l.ctx)),
		e.target)
	) {
		if (e.hydrate) {
			const t = S(e.target);
			l.fragment && l.fragment.l(t), t.forEach(v);
		} else l.fragment && l.fragment.c();
		e.intro && $t(n.$$.fragment), At(n, e.target, e.anchor, e.customElement), ct();
	}
	H(f);
}
class Nt {
	$destroy() {
		jt(this, 1), (this.$destroy = t);
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
	c as $,
	K as A,
	J as B,
	ht as C,
	pt as D,
	a as E,
	l as F,
	z as G,
	j as H,
	M as I,
	x as J,
	q as K,
	et as L,
	_t as M,
	V as N,
	s as O,
	X as P,
	wt as Q,
	ot as R,
	Nt as S,
	p as T,
	b as U,
	n as V,
	i as W,
	d as X,
	Q as Y,
	bt as Z,
	yt as _,
	S as a,
	O as b,
	N as c,
	v as d,
	w as e,
	_ as f,
	y as g,
	R as h,
	St as i,
	k as j,
	A as k,
	P as l,
	e as m,
	t as n,
	C as o,
	Et as p,
	kt as q,
	At as r,
	u as s,
	E as t,
	vt as u,
	xt as v,
	$t as w,
	mt as x,
	jt as y,
	U as z
};
