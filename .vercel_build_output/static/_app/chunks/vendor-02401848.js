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
function u(t) {
	return 'function' == typeof t;
}
function c(t, n) {
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
		const r = l(t, n, e, o);
		return t[0](r);
	}
}
function l(t, n, o, r) {
	return t[1] && r ? e(o.ctx.slice(), t[1](r(n))) : o.ctx;
}
function f(t, n, e, o, r, s, u) {
	const c = (function (t, n, e, o) {
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
	if (c) {
		const r = l(n, e, o, u);
		t.p(r, c);
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
function _(t, n) {
	t.appendChild(n);
}
function y(t, n, e) {
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
function L(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
const M = new Set();
let T,
	D = 0;
function F(t, n, e, o, r, s, u, c = 0) {
	const i = 16.666 / o;
	let a = '{\n';
	for (let m = 0; m <= 1; m += i) {
		const t = n + (e - n) * s(m);
		a += 100 * m + `%{${u(t, 1 - t)}}\n`;
	}
	const l = a + `100% {${u(e, 1 - e)}}\n}`,
		f = `__svelte_${(function (t) {
			let n = 5381,
				e = t.length;
			for (; e--; ) n = ((n << 5) - n) ^ t.charCodeAt(e);
			return n >>> 0;
		})(l)}_${c}`,
		d = t.ownerDocument;
	M.add(d);
	const h = d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(w('style')).sheet),
		p = d.__svelte_rules || (d.__svelte_rules = {});
	p[f] || ((p[f] = !0), h.insertRule(`@keyframes ${f} ${l}`, h.cssRules.length));
	const $ = t.style.animation || '';
	return (t.style.animation = `${$ ? `${$}, ` : ''}${f} ${o}ms linear ${r}ms 1 both`), (D += 1), f;
}
function B(t, n) {
	const e = (t.style.animation || '').split(', '),
		o = e.filter(n ? (t) => t.indexOf(n) < 0 : (t) => -1 === t.indexOf('__svelte')),
		r = e.length - o.length;
	r &&
		((t.style.animation = o.join(', ')),
		(D -= r),
		D ||
			$(() => {
				D ||
					(M.forEach((t) => {
						const n = t.__svelte_stylesheet;
						let e = n.cssRules.length;
						for (; e--; ) n.deleteRule(e);
						t.__svelte_rules = {};
					}),
					M.clear());
			}));
}
function G(t) {
	T = t;
}
function H() {
	if (!T) throw new Error('Function called outside component initialization');
	return T;
}
function I(t) {
	H().$$.on_mount.push(t);
}
function J(t) {
	H().$$.after_update.push(t);
}
function K(t, n) {
	H().$$.context.set(t, n);
}
function Q(t, n) {
	const e = t.$$.callbacks[n.type];
	e && e.slice().forEach((t) => t(n));
}
const U = [],
	V = [],
	W = [],
	X = [],
	Y = Promise.resolve();
let Z = !1;
function tt(t) {
	W.push(t);
}
function nt(t) {
	X.push(t);
}
let et = !1;
const ot = new Set();
function rt() {
	if (!et) {
		et = !0;
		do {
			for (let t = 0; t < U.length; t += 1) {
				const n = U[t];
				G(n), st(n.$$);
			}
			for (G(null), U.length = 0; V.length; ) V.pop()();
			for (let t = 0; t < W.length; t += 1) {
				const n = W[t];
				ot.has(n) || (ot.add(n), n());
			}
			W.length = 0;
		} while (U.length);
		for (; X.length; ) X.pop()();
		(Z = !1), (et = !1), ot.clear();
	}
}
function st(t) {
	if (null !== t.fragment) {
		t.update(), s(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(tt);
	}
}
let ut;
function ct(t, n, e) {
	t.dispatchEvent(
		(function (t, n) {
			const e = document.createEvent('CustomEvent');
			return e.initCustomEvent(t, !1, !1, n), e;
		})(`${n ? 'intro' : 'outro'}${e}`)
	);
}
const it = new Set();
let at;
function lt() {
	at = { r: 0, c: [], p: at };
}
function ft() {
	at.r || s(at.c), (at = at.p);
}
function dt(t, n) {
	t && t.i && (it.delete(t), t.i(n));
}
function ht(t, n, e, o) {
	if (t && t.o) {
		if (it.has(t)) return;
		it.add(t),
			at.c.push(() => {
				it.delete(t), o && (e && t.d(1), o());
			}),
			t.o(n);
	}
}
const pt = { duration: 0 };
function $t(e, o, r, c) {
	let i = o(e, r),
		a = c ? 0 : 1,
		l = null,
		f = null,
		d = null;
	function h() {
		d && B(e, d);
	}
	function $(t, n) {
		const e = t.b - a;
		return (
			(n *= Math.abs(e)),
			{ a: a, b: t.b, d: e, duration: n, start: t.start, end: t.start + n, group: t.group }
		);
	}
	function m(o) {
		const { delay: r = 0, duration: u = 300, easing: c = n, tick: m = t, css: g } = i || pt,
			_ = { start: p() + r, b: o };
		o || ((_.group = at), (at.r += 1)),
			l || f
				? (f = _)
				: (g && (h(), (d = F(e, a, o, u, r, c, g))),
				  o && m(0, 1),
				  (l = $(_, u)),
				  tt(() => ct(e, o, 'start')),
				  b((t) => {
						if (
							(f &&
								t > f.start &&
								((l = $(f, u)),
								(f = null),
								ct(e, l.b, 'start'),
								g && (h(), (d = F(e, a, l.b, l.duration, 0, c, i.css)))),
							l)
						)
							if (t >= l.end)
								m((a = l.b), 1 - a),
									ct(e, l.b, 'end'),
									f || (l.b ? h() : --l.group.r || s(l.group.c)),
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
			u(i)
				? (ut ||
						((ut = Promise.resolve()),
						ut.then(() => {
							ut = null;
						})),
				  ut).then(() => {
						(i = i()), m(t);
				  })
				: m(t);
		},
		end() {
			h(), (l = f = null);
		}
	};
}
function mt(t, n) {
	const e = {},
		o = {},
		r = { $$scope: 1 };
	let s = t.length;
	for (; s--; ) {
		const u = t[s],
			c = n[s];
		if (c) {
			for (const t in u) t in c || (o[t] = 1);
			for (const t in c) r[t] || ((e[t] = c[t]), (r[t] = 1));
			t[s] = c;
		} else for (const t in u) r[t] = 1;
	}
	for (const u in o) u in e || (e[u] = void 0);
	return e;
}
function gt(t) {
	return 'object' == typeof t && null !== t ? t : {};
}
function bt(t, n, e) {
	const o = t.$$.props[n];
	void 0 !== o && ((t.$$.bound[o] = e), e(t.$$.ctx[o]));
}
function _t(t) {
	t && t.c();
}
function yt(t, n) {
	t && t.l(n);
}
function vt(t, n, e, r) {
	const { fragment: c, on_mount: i, on_destroy: a, after_update: l } = t.$$;
	c && c.m(n, e),
		r ||
			tt(() => {
				const n = i.map(o).filter(u);
				a ? a.push(...n) : s(n), (t.$$.on_mount = []);
			}),
		l.forEach(tt);
}
function xt(t, n) {
	const e = t.$$;
	null !== e.fragment &&
		(s(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function wt(t, n) {
	-1 === t.$$.dirty[0] && (U.push(t), Z || ((Z = !0), Y.then(rt)), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Et(n, e, o, u, c, i, a = [-1]) {
	const l = T;
	G(n);
	const f = (n.$$ = {
		fragment: null,
		ctx: null,
		props: i,
		update: t,
		not_equal: c,
		bound: r(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(l ? l.$$.context : e.context || []),
		callbacks: r(),
		dirty: a,
		skip_bound: !1
	});
	let d = !1;
	if (
		((f.ctx = o
			? o(n, e.props || {}, (t, e, ...o) => {
					const r = o.length ? o[0] : e;
					return (
						f.ctx &&
							c(f.ctx[t], (f.ctx[t] = r)) &&
							(!f.skip_bound && f.bound[t] && f.bound[t](r), d && wt(n, t)),
						e
					);
			  })
			: []),
		f.update(),
		(d = !0),
		s(f.before_update),
		(f.fragment = !!u && u(f.ctx)),
		e.target)
	) {
		if (e.hydrate) {
			const t = S(e.target);
			f.fragment && f.fragment.l(t), t.forEach(v);
		} else f.fragment && f.fragment.c();
		e.intro && dt(n.$$.fragment), vt(n, e.target, e.anchor, e.customElement), rt();
	}
	G(l);
}
class kt {
	$destroy() {
		xt(this, 1), (this.$destroy = t);
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
	J as A,
	I as B,
	lt as C,
	ft as D,
	a as E,
	f as F,
	z as G,
	j as H,
	L as I,
	x as J,
	n as K,
	q as L,
	tt as M,
	$t as N,
	Q as O,
	s as P,
	V as Q,
	bt as R,
	kt as S,
	nt as T,
	p as U,
	b as V,
	i as W,
	d as X,
	S as a,
	O as b,
	N as c,
	v as d,
	w as e,
	y as f,
	_ as g,
	R as h,
	Et as i,
	k as j,
	A as k,
	P as l,
	e as m,
	t as n,
	C as o,
	_t as p,
	yt as q,
	vt as r,
	c as s,
	E as t,
	mt as u,
	gt as v,
	dt as w,
	ht as x,
	xt as y,
	K as z
};
