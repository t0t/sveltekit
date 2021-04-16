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
function i(t, n, e, o) {
	if (t) {
		const r = a(t, n, e, o);
		return t[0](r);
	}
}
function a(t, n, o, r) {
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
		const r = a(n, e, o, c);
		t.p(r, u);
	}
}
const f = 'undefined' != typeof window;
let d = f ? () => window.performance.now() : () => Date.now(),
	h = f ? (t) => requestAnimationFrame(t) : t;
const p = new Set();
function $(t) {
	p.forEach((n) => {
		n.c(t) || (p.delete(n), n.f());
	}),
		0 !== p.size && h($);
}
function m(t, n) {
	t.appendChild(n);
}
function g(t, n, e) {
	t.insertBefore(n, e || null);
}
function _(t) {
	t.parentNode.removeChild(t);
}
function y(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function b(t) {
	return document.createElement(t);
}
function v(t) {
	return document.createTextNode(t);
}
function x() {
	return v(' ');
}
function w() {
	return v('');
}
function E(t, n, e, o) {
	return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
}
function k(t, n, e) {
	null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function A(t) {
	return Array.from(t.childNodes);
}
function j(t, n, e, o) {
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
		: b(n);
}
function C(t, n) {
	for (let e = 0; e < t.length; e += 1) {
		const o = t[e];
		if (3 === o.nodeType) return (o.data = '' + n), t.splice(e, 1)[0];
	}
	return v(n);
}
function O(t) {
	return C(t, ' ');
}
function S(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function N(t, n, e) {
	t.classList[e ? 'add' : 'remove'](n);
}
function R(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
const q = new Set();
let z,
	L = 0;
function M(t, n, e, o, r, s, c, u = 0) {
	const i = 16.666 / o;
	let a = '{\n';
	for (let m = 0; m <= 1; m += i) {
		const t = n + (e - n) * s(m);
		a += 100 * m + `%{${c(t, 1 - t)}}\n`;
	}
	const l = a + `100% {${c(e, 1 - e)}}\n}`,
		f = `__svelte_${(function (t) {
			let n = 5381,
				e = t.length;
			for (; e--; ) n = ((n << 5) - n) ^ t.charCodeAt(e);
			return n >>> 0;
		})(l)}_${u}`,
		d = t.ownerDocument;
	q.add(d);
	const h = d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(b('style')).sheet),
		p = d.__svelte_rules || (d.__svelte_rules = {});
	p[f] || ((p[f] = !0), h.insertRule(`@keyframes ${f} ${l}`, h.cssRules.length));
	const $ = t.style.animation || '';
	return (t.style.animation = `${$ ? `${$}, ` : ''}${f} ${o}ms linear ${r}ms 1 both`), (L += 1), f;
}
function P(t, n) {
	const e = (t.style.animation || '').split(', '),
		o = e.filter(n ? (t) => t.indexOf(n) < 0 : (t) => -1 === t.indexOf('__svelte')),
		r = e.length - o.length;
	r &&
		((t.style.animation = o.join(', ')),
		(L -= r),
		L ||
			h(() => {
				L ||
					(q.forEach((t) => {
						const n = t.__svelte_stylesheet;
						let e = n.cssRules.length;
						for (; e--; ) n.deleteRule(e);
						t.__svelte_rules = {};
					}),
					q.clear());
			}));
}
function T(t) {
	z = t;
}
function D() {
	if (!z) throw new Error('Function called outside component initialization');
	return z;
}
function F(t) {
	D().$$.on_mount.push(t);
}
function B(t) {
	D().$$.after_update.push(t);
}
function G(t, n) {
	D().$$.context.set(t, n);
}
function H(t, n) {
	const e = t.$$.callbacks[n.type];
	e && e.slice().forEach((t) => t(n));
}
const I = [],
	J = [],
	K = [],
	Q = [],
	U = Promise.resolve();
let V = !1;
function W(t) {
	K.push(t);
}
function X(t) {
	Q.push(t);
}
let Y = !1;
const Z = new Set();
function tt() {
	if (!Y) {
		Y = !0;
		do {
			for (let t = 0; t < I.length; t += 1) {
				const n = I[t];
				T(n), nt(n.$$);
			}
			for (T(null), I.length = 0; J.length; ) J.pop()();
			for (let t = 0; t < K.length; t += 1) {
				const n = K[t];
				Z.has(n) || (Z.add(n), n());
			}
			K.length = 0;
		} while (I.length);
		for (; Q.length; ) Q.pop()();
		(V = !1), (Y = !1), Z.clear();
	}
}
function nt(t) {
	if (null !== t.fragment) {
		t.update(), s(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(W);
	}
}
let et;
function ot(t, n, e) {
	t.dispatchEvent(
		(function (t, n) {
			const e = document.createEvent('CustomEvent');
			return e.initCustomEvent(t, !1, !1, n), e;
		})(`${n ? 'intro' : 'outro'}${e}`)
	);
}
const rt = new Set();
let st;
function ct() {
	st = { r: 0, c: [], p: st };
}
function ut() {
	st.r || s(st.c), (st = st.p);
}
function it(t, n) {
	t && t.i && (rt.delete(t), t.i(n));
}
function at(t, n, e, o) {
	if (t && t.o) {
		if (rt.has(t)) return;
		rt.add(t),
			st.c.push(() => {
				rt.delete(t), o && (e && t.d(1), o());
			}),
			t.o(n);
	}
}
const lt = { duration: 0 };
function ft(e, o, r, u) {
	let i = o(e, r),
		a = u ? 0 : 1,
		l = null,
		f = null,
		m = null;
	function g() {
		m && P(e, m);
	}
	function _(t, n) {
		const e = t.b - a;
		return (
			(n *= Math.abs(e)),
			{ a: a, b: t.b, d: e, duration: n, start: t.start, end: t.start + n, group: t.group }
		);
	}
	function y(o) {
		const { delay: r = 0, duration: c = 300, easing: u = n, tick: y = t, css: b } = i || lt,
			v = { start: d() + r, b: o };
		o || ((v.group = st), (st.r += 1)),
			l || f
				? (f = v)
				: (b && (g(), (m = M(e, a, o, c, r, u, b))),
				  o && y(0, 1),
				  (l = _(v, c)),
				  W(() => ot(e, o, 'start')),
				  (function (t) {
						let n;
						0 === p.size && h($),
							new Promise((e) => {
								p.add((n = { c: t, f: e }));
							});
				  })((t) => {
						if (
							(f &&
								t > f.start &&
								((l = _(f, c)),
								(f = null),
								ot(e, l.b, 'start'),
								b && (g(), (m = M(e, a, l.b, l.duration, 0, u, i.css)))),
							l)
						)
							if (t >= l.end)
								y((a = l.b), 1 - a),
									ot(e, l.b, 'end'),
									f || (l.b ? g() : --l.group.r || s(l.group.c)),
									(l = null);
							else if (t >= l.start) {
								const n = t - l.start;
								(a = l.a + l.d * u(n / l.duration)), y(a, 1 - a);
							}
						return !(!l && !f);
				  }));
	}
	return {
		run(t) {
			c(i)
				? (et ||
						((et = Promise.resolve()),
						et.then(() => {
							et = null;
						})),
				  et).then(() => {
						(i = i()), y(t);
				  })
				: y(t);
		},
		end() {
			g(), (l = f = null);
		}
	};
}
function dt(t, n) {
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
function ht(t) {
	return 'object' == typeof t && null !== t ? t : {};
}
function pt(t, n, e) {
	const o = t.$$.props[n];
	void 0 !== o && ((t.$$.bound[o] = e), e(t.$$.ctx[o]));
}
function $t(t) {
	t && t.c();
}
function mt(t, n) {
	t && t.l(n);
}
function gt(t, n, e, r) {
	const { fragment: u, on_mount: i, on_destroy: a, after_update: l } = t.$$;
	u && u.m(n, e),
		r ||
			W(() => {
				const n = i.map(o).filter(c);
				a ? a.push(...n) : s(n), (t.$$.on_mount = []);
			}),
		l.forEach(W);
}
function _t(t, n) {
	const e = t.$$;
	null !== e.fragment &&
		(s(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function yt(t, n) {
	-1 === t.$$.dirty[0] && (I.push(t), V || ((V = !0), U.then(tt)), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function bt(n, e, o, c, u, i, a = [-1]) {
	const l = z;
	T(n);
	const f = (n.$$ = {
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
							u(f.ctx[t], (f.ctx[t] = r)) &&
							(!f.skip_bound && f.bound[t] && f.bound[t](r), d && yt(n, t)),
						e
					);
			  })
			: []),
		f.update(),
		(d = !0),
		s(f.before_update),
		(f.fragment = !!c && c(f.ctx)),
		e.target)
	) {
		if (e.hydrate) {
			const t = A(e.target);
			f.fragment && f.fragment.l(t), t.forEach(_);
		} else f.fragment && f.fragment.c();
		e.intro && it(n.$$.fragment), gt(n, e.target, e.anchor, e.customElement), tt();
	}
	T(l);
}
class vt {
	$destroy() {
		_t(this, 1), (this.$destroy = t);
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
const xt = [];
function wt(n, e = t) {
	let o;
	const r = [];
	function s(t) {
		if (u(n, t) && ((n = t), o)) {
			const t = !xt.length;
			for (let e = 0; e < r.length; e += 1) {
				const t = r[e];
				t[1](), xt.push(t, n);
			}
			if (t) {
				for (let t = 0; t < xt.length; t += 2) xt[t][0](xt[t + 1]);
				xt.length = 0;
			}
		}
	}
	return {
		set: s,
		update: function (t) {
			s(t(n));
		},
		subscribe: function (c, u = t) {
			const i = [c, u];
			return (
				r.push(i),
				1 === r.length && (o = e(s) || t),
				c(n),
				() => {
					const t = r.indexOf(i);
					-1 !== t && r.splice(t, 1), 0 === r.length && (o(), (o = null));
				}
			);
		}
	};
}
export {
	B as A,
	F as B,
	ct as C,
	ut as D,
	i as E,
	l as F,
	wt as G,
	n as H,
	W as I,
	ft as J,
	N as K,
	E as L,
	H as M,
	s as N,
	J as O,
	pt as P,
	X as Q,
	y as R,
	vt as S,
	R as T,
	A as a,
	C as b,
	j as c,
	_ as d,
	b as e,
	g as f,
	m as g,
	S as h,
	bt as i,
	x as j,
	w as k,
	O as l,
	e as m,
	t as n,
	k as o,
	$t as p,
	mt as q,
	gt as r,
	u as s,
	v as t,
	dt as u,
	ht as v,
	it as w,
	at as x,
	_t as y,
	G as z
};
