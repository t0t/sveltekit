var e = Object.defineProperty,
	t = Object.prototype.hasOwnProperty,
	s = Object.getOwnPropertySymbols,
	r = Object.prototype.propertyIsEnumerable,
	a = (t, s, r) =>
		s in t ? e(t, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[s] = r),
	n = (e, n) => {
		for (var o in n || (n = {})) t.call(n, o) && a(e, o, n[o]);
		if (s) for (var o of s(n)) r.call(n, o) && a(e, o, n[o]);
		return e;
	};
import {
	S as o,
	i as c,
	s as l,
	e as i,
	t as h,
	c as u,
	a as p,
	b as f,
	d,
	f as g,
	g as v,
	h as m,
	j as w,
	k as y,
	l as $,
	n as E,
	m as x,
	o as b,
	p as _,
	q as k,
	r as L,
	u as V,
	v as q,
	w as A,
	x as C,
	y as M,
	z as S,
	A as R,
	B as N,
	C as O,
	D as z,
	E as I,
	F as P,
	G as T,
	H as j,
	I as B,
	J as H,
	K as U,
	L as D,
	M as K,
	N as F,
	O as G
} from './chunks/index-d91e1ed8.js';
import { w as W } from './chunks/index-cc16b092.js';
import { p as J } from './chunks/pages-26a130a6.js';
function Y(e) {
	let t,
		s,
		r = e[1].stack + '';
	return {
		c() {
			(t = i('pre')), (s = h(r));
		},
		l(e) {
			t = u(e, 'PRE', {});
			var a = p(t);
			(s = f(a, r)), a.forEach(d);
		},
		m(e, r) {
			g(e, t, r), v(t, s);
		},
		p(e, t) {
			2 & t && r !== (r = e[1].stack + '') && m(s, r);
		},
		d(e) {
			e && d(t);
		}
	};
}
function Z(e) {
	let t,
		s,
		r,
		a,
		n,
		o,
		c,
		l = e[1].message + '',
		x = e[1].stack && Y(e);
	return {
		c() {
			(t = i('h1')),
				(s = h(e[0])),
				(r = w()),
				(a = i('p')),
				(n = h(l)),
				(o = w()),
				x && x.c(),
				(c = y());
		},
		l(i) {
			t = u(i, 'H1', {});
			var h = p(t);
			(s = f(h, e[0])), h.forEach(d), (r = $(i)), (a = u(i, 'P', {}));
			var g = p(a);
			(n = f(g, l)), g.forEach(d), (o = $(i)), x && x.l(i), (c = y());
		},
		m(e, l) {
			g(e, t, l), v(t, s), g(e, r, l), g(e, a, l), v(a, n), g(e, o, l), x && x.m(e, l), g(e, c, l);
		},
		p(e, [t]) {
			1 & t && m(s, e[0]),
				2 & t && l !== (l = e[1].message + '') && m(n, l),
				e[1].stack
					? x
						? x.p(e, t)
						: ((x = Y(e)), x.c(), x.m(c.parentNode, c))
					: x && (x.d(1), (x = null));
		},
		i: E,
		o: E,
		d(e) {
			e && d(t), e && d(r), e && d(a), e && d(o), x && x.d(e), e && d(c);
		}
	};
}
function X(e, t, s) {
	let { status: r } = t,
		{ error: a } = t;
	return (
		(e.$$set = (e) => {
			'status' in e && s(0, (r = e.status)), 'error' in e && s(1, (a = e.error));
		}),
		[r, a]
	);
}
class Q extends o {
	constructor(e) {
		super(), c(this, e, X, Z, l, { status: 0, error: 1 });
	}
}
function ee(e) {
	let t, s, r;
	const a = [e[4] || {}];
	var n = e[2][1];
	function o(e) {
		let t = {};
		for (let s = 0; s < a.length; s += 1) t = x(t, a[s]);
		return { props: t };
	}
	return (
		n && (t = new n(o())),
		{
			c() {
				t && _(t.$$.fragment), (s = y());
			},
			l(e) {
				t && k(t.$$.fragment, e), (s = y());
			},
			m(e, a) {
				t && L(t, e, a), g(e, s, a), (r = !0);
			},
			p(e, r) {
				const c = 16 & r ? V(a, [q(e[4] || {})]) : {};
				if (n !== (n = e[2][1])) {
					if (t) {
						O();
						const e = t;
						C(e.$$.fragment, 1, 0, () => {
							M(e, 1);
						}),
							z();
					}
					n
						? ((t = new n(o())), _(t.$$.fragment), A(t.$$.fragment, 1), L(t, s.parentNode, s))
						: (t = null);
				} else n && t.$set(c);
			},
			i(e) {
				r || (t && A(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && C(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && d(s), t && M(t, e);
			}
		}
	);
}
function te(e) {
	let t, s;
	return (
		(t = new Q({ props: { status: e[0], error: e[1] } })),
		{
			c() {
				_(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
			},
			m(e, r) {
				L(t, e, r), (s = !0);
			},
			p(e, s) {
				const r = {};
				1 & s && (r.status = e[0]), 2 & s && (r.error = e[1]), t.$set(r);
			},
			i(e) {
				s || (A(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				C(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				M(t, e);
			}
		}
	);
}
function se(e) {
	let t, s, r, a;
	const n = [te, ee],
		o = [];
	function c(e, t) {
		return e[1] ? 0 : 1;
	}
	return (
		(t = c(e)),
		(s = o[t] = n[t](e)),
		{
			c() {
				s.c(), (r = y());
			},
			l(e) {
				s.l(e), (r = y());
			},
			m(e, s) {
				o[t].m(e, s), g(e, r, s), (a = !0);
			},
			p(e, a) {
				let l = t;
				(t = c(e)),
					t === l
						? o[t].p(e, a)
						: (O(),
						  C(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  z(),
						  (s = o[t]),
						  s ? s.p(e, a) : ((s = o[t] = n[t](e)), s.c()),
						  A(s, 1),
						  s.m(r.parentNode, r));
			},
			i(e) {
				a || (A(s), (a = !0));
			},
			o(e) {
				C(s), (a = !1);
			},
			d(e) {
				o[t].d(e), e && d(r);
			}
		}
	);
}
function re(e) {
	let t,
		s = e[6] && ae(e);
	return {
		c() {
			(t = i('div')), s && s.c(), this.h();
		},
		l(e) {
			t = u(e, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var r = p(t);
			s && s.l(r), r.forEach(d), this.h();
		},
		h() {
			b(t, 'id', 'svelte-announcer'),
				b(t, 'aria-live', 'assertive'),
				b(t, 'aria-atomic', 'true'),
				b(t, 'class', 'svelte-1j55zn5');
		},
		m(e, r) {
			g(e, t, r), s && s.m(t, null);
		},
		p(e, r) {
			e[6] ? (s ? s.p(e, r) : ((s = ae(e)), s.c(), s.m(t, null))) : s && (s.d(1), (s = null));
		},
		d(e) {
			e && d(t), s && s.d();
		}
	};
}
function ae(e) {
	let t, s;
	return {
		c() {
			(t = h('Navigated to ')), (s = h(e[7]));
		},
		l(r) {
			(t = f(r, 'Navigated to ')), (s = f(r, e[7]));
		},
		m(e, r) {
			g(e, t, r), g(e, s, r);
		},
		p(e, t) {
			128 & t && m(s, e[7]);
		},
		d(e) {
			e && d(t), e && d(s);
		}
	};
}
function ne(e) {
	let t, s, r, a;
	const n = [e[3] || {}];
	let o = { $$slots: { default: [se] }, $$scope: { ctx: e } };
	for (let l = 0; l < n.length; l += 1) o = x(o, n[l]);
	t = new e[8]({ props: o });
	let c = e[5] && re(e);
	return {
		c() {
			_(t.$$.fragment), (s = w()), c && c.c(), (r = y());
		},
		l(e) {
			k(t.$$.fragment, e), (s = $(e)), c && c.l(e), (r = y());
		},
		m(e, n) {
			L(t, e, n), g(e, s, n), c && c.m(e, n), g(e, r, n), (a = !0);
		},
		p(e, [s]) {
			const a = 8 & s ? V(n, [q(e[3] || {})]) : {};
			2071 & s && (a.$$scope = { dirty: s, ctx: e }),
				t.$set(a),
				e[5]
					? c
						? c.p(e, s)
						: ((c = re(e)), c.c(), c.m(r.parentNode, r))
					: c && (c.d(1), (c = null));
		},
		i(e) {
			a || (A(t.$$.fragment, e), (a = !0));
		},
		o(e) {
			C(t.$$.fragment, e), (a = !1);
		},
		d(e) {
			M(t, e), e && d(s), c && c.d(e), e && d(r);
		}
	};
}
function oe(e, t, s) {
	let { status: r } = t,
		{ error: a } = t,
		{ stores: n } = t,
		{ page: o } = t,
		{ components: c } = t,
		{ props_0: l = null } = t,
		{ props_1: i = null } = t;
	const h = c[0];
	S('__svelte__', n), R(n.page.notify);
	let u = !1,
		p = !1,
		f = null;
	return (
		N(() => {
			const e = n.page.subscribe(() => {
				u && (s(6, (p = !0)), s(7, (f = document.title)));
			});
			return s(5, (u = !0)), e;
		}),
		(e.$$set = (e) => {
			'status' in e && s(0, (r = e.status)),
				'error' in e && s(1, (a = e.error)),
				'stores' in e && s(9, (n = e.stores)),
				'page' in e && s(10, (o = e.page)),
				'components' in e && s(2, (c = e.components)),
				'props_0' in e && s(3, (l = e.props_0)),
				'props_1' in e && s(4, (i = e.props_1));
		}),
		(e.$$.update = () => {
			1536 & e.$$.dirty && n.page.set(o);
		}),
		[r, a, c, l, i, u, p, f, h, n, o]
	);
}
class ce extends o {
	constructor(e) {
		super(),
			c(this, e, oe, ne, l, {
				status: 0,
				error: 1,
				stores: 9,
				page: 10,
				components: 2,
				props_0: 3,
				props_1: 4
			});
	}
}
let le;
const ie = {},
	he = function (e, t) {
		if (!t) return e();
		if (void 0 === le) {
			const e = document.createElement('link').relList;
			le = e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			t.map((e) => {
				if (e in ie) return;
				ie[e] = !0;
				const t = e.endsWith('.css'),
					s = t ? '[rel="stylesheet"]' : '';
				if (document.querySelector(`link[href="${e}"]${s}`)) return;
				const r = document.createElement('link');
				return (
					(r.rel = t ? 'stylesheet' : le),
					t || ((r.as = 'script'), (r.crossOrigin = '')),
					(r.href = e),
					document.head.appendChild(r),
					t
						? new Promise((e, t) => {
								r.addEventListener('load', e), r.addEventListener('error', t);
						  })
						: void 0
				);
			})
		).then(() => e());
	};
function ue(e) {
	const t = (t) => {
		!e ||
			e.contains(t.target) ||
			t.defaultPrevented ||
			e.dispatchEvent(new CustomEvent('click_outside', e));
	};
	return (
		document.addEventListener('click', t, !0),
		{
			destroy() {
				document.removeEventListener('click', t, !0);
			}
		}
	);
}
function pe(e) {
	let t, s, r, a, n, o, c, l, i, h, f;
	return {
		c() {
			(t = I('svg')),
				(s = I('g')),
				(r = I('circle')),
				(a = I('g')),
				(n = I('circle')),
				(o = I('circle')),
				(c = I('g')),
				(l = I('circle')),
				(i = I('circle')),
				(h = I('circle')),
				(f = I('circle')),
				this.h();
		},
		l(e) {
			t = u(e, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var g = p(t);
			s = u(g, 'g', { class: !0 }, 1);
			var v = p(s);
			(r = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(r).forEach(d),
				(a = u(v, 'g', { class: !0 }, 1));
			var m = p(a);
			(n = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(n).forEach(d),
				(o = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(o).forEach(d),
				m.forEach(d),
				(c = u(v, 'g', { class: !0 }, 1));
			var w = p(c);
			(l = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(l).forEach(d),
				(i = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(i).forEach(d),
				(h = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(h).forEach(d),
				(f = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(f).forEach(d),
				w.forEach(d),
				v.forEach(d),
				g.forEach(d),
				this.h();
		},
		h() {
			b(r, 'cx', '25'),
				b(r, 'cy', '25'),
				b(r, 'r', '25'),
				b(r, 'class', 'svelte-1fhk7g3'),
				b(n, 'cx', '12.5'),
				b(n, 'cy', '25'),
				b(n, 'r', '12.5'),
				b(n, 'class', 'svelte-1fhk7g3'),
				b(o, 'cx', '38'),
				b(o, 'cy', '25'),
				b(o, 'r', '12.5'),
				b(o, 'class', 'svelte-1fhk7g3'),
				b(a, 'class', 'svelte-1fhk7g3'),
				b(l, 'cx', '6.5'),
				b(l, 'cy', '25'),
				b(l, 'r', '6.25'),
				b(l, 'class', 'svelte-1fhk7g3'),
				b(i, 'cx', '19'),
				b(i, 'cy', '25'),
				b(i, 'r', '6.25'),
				b(i, 'class', 'svelte-1fhk7g3'),
				b(h, 'cx', '31.5'),
				b(h, 'cy', '25'),
				b(h, 'r', '6.25'),
				b(h, 'class', 'svelte-1fhk7g3'),
				b(f, 'cx', '44'),
				b(f, 'cy', '25'),
				b(f, 'r', '6.25'),
				b(f, 'class', 'svelte-1fhk7g3'),
				b(c, 'class', 'svelte-1fhk7g3'),
				b(s, 'class', 'svelte-1fhk7g3'),
				b(t, 'class', 'logo svelte-1fhk7g3'),
				b(t, 'width', '51'),
				b(t, 'height', '51');
		},
		m(e, u) {
			g(e, t, u),
				v(t, s),
				v(s, r),
				v(s, a),
				v(a, n),
				v(a, o),
				v(s, c),
				v(c, l),
				v(c, i),
				v(c, h),
				v(c, f);
		},
		p: E,
		i: E,
		o: E,
		d(e) {
			e && d(t);
		}
	};
}
class fe extends o {
	constructor(e) {
		super(), c(this, e, null, pe, l, {});
	}
}
function de(e, t, s) {
	const r = e.slice();
	return (r[9] = t[s].url), (r[10] = t[s].name), r;
}
function ge(e, t, s) {
	const r = e.slice();
	return (r[9] = t[s].url), (r[10] = t[s].name), r;
}
function ve(e) {
	let t,
		s,
		r = J,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = we(de(e, r, n));
	return {
		c() {
			t = i('nav');
			for (let e = 0; e < a.length; e += 1) a[e].c();
			this.h();
		},
		l(e) {
			t = u(e, 'NAV', { class: !0 });
			var s = p(t);
			for (let t = 0; t < a.length; t += 1) a[t].l(s);
			s.forEach(d), this.h();
		},
		h() {
			b(t, 'class', (s = B(e[4][e[1]]) + ' svelte-4i5gzg'));
		},
		m(e, s) {
			g(e, t, s);
			for (let r = 0; r < a.length; r += 1) a[r].m(t, null);
		},
		p(e, n) {
			if (1 & n) {
				let s;
				for (r = J, s = 0; s < r.length; s += 1) {
					const o = de(e, r, s);
					a[s] ? a[s].p(o, n) : ((a[s] = we(o)), a[s].c(), a[s].m(t, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = B(e[4][e[1]]) + ' svelte-4i5gzg') && b(t, 'class', s);
		},
		i: E,
		o: E,
		d(e) {
			e && d(t), H(a, e);
		}
	};
}
function me(e) {
	let t, s, r, a, n, o, c, l, h;
	r = new fe({});
	let f = J,
		m = [];
	for (let i = 0; i < f.length; i += 1) m[i] = ye(ge(e, f, i));
	return {
		c() {
			(t = i('div')), (s = i('div')), _(r.$$.fragment), (a = w()), (n = i('nav'));
			for (let e = 0; e < m.length; e += 1) m[e].c();
			this.h();
		},
		l(e) {
			t = u(e, 'DIV', { class: !0 });
			var o = p(t);
			s = u(o, 'DIV', { class: !0 });
			var c = p(s);
			k(r.$$.fragment, c), c.forEach(d), (a = $(o)), (n = u(o, 'NAV', { class: !0 }));
			var l = p(n);
			for (let t = 0; t < m.length; t += 1) m[t].l(l);
			l.forEach(d), o.forEach(d), this.h();
		},
		h() {
			b(s, 'class', 'ButtonNav svelte-4i5gzg'),
				b(n, 'class', (o = B(e[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-4i5gzg')),
				b(t, 'class', 'Variante_1 svelte-4i5gzg');
		},
		m(o, i) {
			g(o, t, i), v(t, s), L(r, s, null), v(t, a), v(t, n);
			for (let e = 0; e < m.length; e += 1) m[e].m(n, null);
			(c = !0),
				l ||
					((h = [j(s, 'click', e[7]), D(ue.call(null, t)), j(t, 'click_outside', e[3])]), (l = !0));
		},
		p(e, t) {
			if (9 & t) {
				let s;
				for (f = J, s = 0; s < f.length; s += 1) {
					const r = ge(e, f, s);
					m[s] ? m[s].p(r, t) : ((m[s] = ye(r)), m[s].c(), m[s].m(n, null));
				}
				for (; s < m.length; s += 1) m[s].d(1);
				m.length = f.length;
			}
			(!c ||
				(4 & t && o !== (o = B(e[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-4i5gzg'))) &&
				b(n, 'class', o);
		},
		i(e) {
			c || (A(r.$$.fragment, e), (c = !0));
		},
		o(e) {
			C(r.$$.fragment, e), (c = !1);
		},
		d(e) {
			e && d(t), M(r), H(m, e), (l = !1), U(h);
		}
	};
}
function we(e) {
	let t,
		s,
		r,
		a,
		n,
		o = e[10] + '';
	return {
		c() {
			(t = i('a')), (s = h(o)), (r = w()), this.h();
		},
		l(e) {
			t = u(e, 'A', { href: !0, class: !0 });
			var a = p(t);
			(s = f(a, o)), (r = $(a)), a.forEach(d), this.h();
		},
		h() {
			b(t, 'href', e[9]), b(t, 'class', 'svelte-4i5gzg'), T(t, 'active', e[10] === e[0]);
		},
		m(o, c) {
			g(o, t, c), v(t, s), v(t, r), a || ((n = j(t, 'click', e[6])), (a = !0));
		},
		p(e, s) {
			1 & s && T(t, 'active', e[10] === e[0]);
		},
		d(e) {
			e && d(t), (a = !1), n();
		}
	};
}
function ye(e) {
	let t,
		s,
		r,
		a,
		n,
		o = e[10] + '';
	return {
		c() {
			(t = i('a')), (s = h(o)), (r = w()), this.h();
		},
		l(e) {
			t = u(e, 'A', { href: !0, class: !0, role: !0 });
			var a = p(t);
			(s = f(a, o)), (r = $(a)), a.forEach(d), this.h();
		},
		h() {
			b(t, 'href', e[9]),
				b(t, 'class', 'NavItem svelte-4i5gzg'),
				b(t, 'role', 'navigation'),
				T(t, 'active', e[10] === e[0]);
		},
		m(o, c) {
			g(o, t, c),
				v(t, s),
				v(t, r),
				a || ((n = [j(t, 'click', e[5]), j(t, 'click', e[3])]), (a = !0));
		},
		p(e, s) {
			1 & s && T(t, 'active', e[10] === e[0]);
		},
		d(e) {
			e && d(t), (a = !1), U(n);
		}
	};
}
function $e(e) {
	let t, s, r, a;
	const n = [me, ve],
		o = [];
	function c(e, t) {
		return 1 === e[1] ? 0 : 1;
	}
	return (
		(t = c(e)),
		(s = o[t] = n[t](e)),
		{
			c() {
				s.c(), (r = y());
			},
			l(e) {
				s.l(e), (r = y());
			},
			m(e, s) {
				o[t].m(e, s), g(e, r, s), (a = !0);
			},
			p(e, [a]) {
				let l = t;
				(t = c(e)),
					t === l
						? o[t].p(e, a)
						: (O(),
						  C(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  z(),
						  (s = o[t]),
						  s ? s.p(e, a) : ((s = o[t] = n[t](e)), s.c()),
						  A(s, 1),
						  s.m(r.parentNode, r));
			},
			i(e) {
				a || (A(s), (a = !0));
			},
			o(e) {
				C(s), (a = !1);
			},
			d(e) {
				o[t].d(e), e && d(r);
			}
		}
	);
}
function Ee(e, t, s) {
	let { current_page: r } = t,
		a = !1;
	let { variante: n = 0 } = t;
	return (
		(e.$$set = (e) => {
			'current_page' in e && s(0, (r = e.current_page)), 'variante' in e && s(1, (n = e.variante));
		}),
		[
			r,
			n,
			a,
			function () {
				s(2, (a = !1));
			},
			['Variante_0', 'Variante_1', 'Variante_2'],
			function (t) {
				P(e, t);
			},
			function (t) {
				P(e, t);
			},
			() => {
				s(2, (a = !a));
			}
		]
	);
}
class xe extends o {
	constructor(e) {
		super(), c(this, e, Ee, $e, l, { current_page: 0, variante: 1 });
	}
}
function be(e) {
	let t,
		s,
		r,
		a,
		n,
		o,
		c,
		l,
		m,
		y,
		x,
		_,
		k,
		L,
		V,
		q,
		A,
		C,
		M,
		S,
		R,
		N,
		O,
		z,
		P,
		T,
		j,
		B,
		H,
		U,
		D,
		K,
		F,
		G,
		W,
		J,
		Y,
		Z,
		X,
		Q,
		ee,
		te,
		se;
	return {
		c() {
			(t = i('aside')),
				(s = i('small')),
				(r = h('Follow me at:')),
				(a = w()),
				(n = i('ul')),
				(o = i('li')),
				(c = i('a')),
				(l = I('svg')),
				(m = I('title')),
				(y = h('Instagram')),
				(x = I('circle')),
				(_ = I('path')),
				(k = I('path')),
				(L = w()),
				(V = i('a')),
				(q = I('svg')),
				(A = I('title')),
				(C = h('Linkedin')),
				(M = I('path')),
				(S = w()),
				(R = i('a')),
				(N = I('svg')),
				(O = I('title')),
				(z = h('Algunos artículos en Medium')),
				(P = I('path')),
				(T = w()),
				(j = i('a')),
				(B = I('svg')),
				(H = I('title')),
				(U = h('Twitter')),
				(D = I('path')),
				(K = w()),
				(F = i('a')),
				(G = I('svg')),
				(W = I('title')),
				(J = h('Mi repositorio en Github')),
				(Y = I('path')),
				(Z = w()),
				(X = i('a')),
				(Q = I('svg')),
				(ee = I('title')),
				(te = h('Facebook')),
				(se = I('path')),
				this.h();
		},
		l(e) {
			t = u(e, 'ASIDE', { class: !0 });
			var i = p(t);
			s = u(i, 'SMALL', { class: !0 });
			var h = p(s);
			(r = f(h, 'Follow me at:')), h.forEach(d), (a = $(i)), (n = u(i, 'UL', { class: !0 }));
			var g = p(n);
			o = u(g, 'LI', { class: !0 });
			var v = p(o);
			c = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var w = p(c);
			l = u(w, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var E = p(l);
			m = u(E, 'title', { class: !0 }, 1);
			var b = p(m);
			(y = f(b, 'Instagram')),
				b.forEach(d),
				(x = u(E, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(x).forEach(d),
				(_ = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(_).forEach(d),
				(k = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(k).forEach(d),
				E.forEach(d),
				w.forEach(d),
				(L = $(v)),
				(V = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var I = p(V);
			q = u(I, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var re = p(q);
			A = u(re, 'title', { class: !0 }, 1);
			var ae = p(A);
			(C = f(ae, 'Linkedin')),
				ae.forEach(d),
				(M = u(re, 'path', { d: !0, class: !0 }, 1)),
				p(M).forEach(d),
				re.forEach(d),
				I.forEach(d),
				(S = $(v)),
				(R = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ne = p(R);
			N = u(ne, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var oe = p(N);
			O = u(oe, 'title', { class: !0 }, 1);
			var ce = p(O);
			(z = f(ce, 'Algunos artículos en Medium')),
				ce.forEach(d),
				(P = u(oe, 'path', { d: !0, class: !0 }, 1)),
				p(P).forEach(d),
				oe.forEach(d),
				ne.forEach(d),
				(T = $(v)),
				(j = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var le = p(j);
			B = u(le, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ie = p(B);
			H = u(ie, 'title', { class: !0 }, 1);
			var he = p(H);
			(U = f(he, 'Twitter')),
				he.forEach(d),
				(D = u(ie, 'path', { d: !0, class: !0 }, 1)),
				p(D).forEach(d),
				ie.forEach(d),
				le.forEach(d),
				(K = $(v)),
				(F = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ue = p(F);
			G = u(ue, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var pe = p(G);
			W = u(pe, 'title', { class: !0 }, 1);
			var fe = p(W);
			(J = f(fe, 'Mi repositorio en Github')),
				fe.forEach(d),
				(Y = u(pe, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				p(Y).forEach(d),
				pe.forEach(d),
				ue.forEach(d),
				(Z = $(v)),
				(X = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var de = p(X);
			Q = u(de, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ge = p(Q);
			ee = u(ge, 'title', { class: !0 }, 1);
			var ve = p(ee);
			(te = f(ve, 'Facebook')),
				ve.forEach(d),
				(se = u(ge, 'path', { d: !0, class: !0 }, 1)),
				p(se).forEach(d),
				ge.forEach(d),
				de.forEach(d),
				v.forEach(d),
				g.forEach(d),
				i.forEach(d),
				this.h();
		},
		h() {
			b(s, 'class', 'svelte-e2w270'),
				b(m, 'class', 'svelte-e2w270'),
				b(x, 'cx', '12.145'),
				b(x, 'cy', '3.892'),
				b(x, 'r', '0.96'),
				b(x, 'class', 'svelte-e2w270'),
				b(
					_,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				b(_, 'class', 'svelte-e2w270'),
				b(
					k,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				b(k, 'class', 'svelte-e2w270'),
				b(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(l, 'viewBox', '0 0 16 16'),
				b(l, 'class', 'svelte-e2w270'),
				b(c, 'href', 'https://www.instagram.com/t.o.d.h/'),
				b(c, 'target', '_blank'),
				b(c, 'rel', 'noopener'),
				b(c, 'class', 'svelte-e2w270'),
				b(A, 'class', 'svelte-e2w270'),
				b(
					M,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				b(M, 'class', 'svelte-e2w270'),
				b(q, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(q, 'viewBox', '0 0 16 16'),
				b(q, 'class', 'svelte-e2w270'),
				b(V, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				b(V, 'target', '_blank'),
				b(V, 'rel', 'noopener'),
				b(V, 'class', 'svelte-e2w270'),
				b(O, 'class', 'svelte-e2w270'),
				b(
					P,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				b(P, 'class', 'svelte-e2w270'),
				b(N, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(N, 'viewBox', '0 0 16 16'),
				b(N, 'class', 'svelte-e2w270'),
				b(R, 'href', 'https://medium.com/@todh'),
				b(R, 'target', '_blank'),
				b(R, 'rel', 'noopener'),
				b(R, 'class', 'svelte-e2w270'),
				b(H, 'class', 'svelte-e2w270'),
				b(
					D,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				b(D, 'class', 'svelte-e2w270'),
				b(B, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(B, 'viewBox', '0 0 16 16'),
				b(B, 'class', 'svelte-e2w270'),
				b(j, 'href', 'https://twitter.com/t0tinspire'),
				b(j, 'target', '_blank'),
				b(j, 'rel', 'noopener'),
				b(j, 'class', 'svelte-e2w270'),
				b(W, 'class', 'svelte-e2w270'),
				b(Y, 'fill-rule', 'evenodd'),
				b(Y, 'clip-rule', 'evenodd'),
				b(
					Y,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				b(Y, 'class', 'svelte-e2w270'),
				b(G, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(G, 'viewBox', '0 0 16 16'),
				b(G, 'class', 'svelte-e2w270'),
				b(F, 'href', 'https://github.com/t0t'),
				b(F, 'target', '_blank'),
				b(F, 'rel', 'noopener'),
				b(F, 'class', 'svelte-e2w270'),
				b(ee, 'class', 'svelte-e2w270'),
				b(
					se,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				b(se, 'class', 'svelte-e2w270'),
				b(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(Q, 'viewBox', '0 0 16 16'),
				b(Q, 'class', 'svelte-e2w270'),
				b(X, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				b(X, 'target', '_blank'),
				b(X, 'rel', 'noopener'),
				b(X, 'class', 'svelte-e2w270'),
				b(o, 'class', 'svelte-e2w270'),
				b(n, 'class', 'svelte-e2w270'),
				b(t, 'class', 'Links svelte-e2w270');
		},
		m(e, i) {
			g(e, t, i),
				v(t, s),
				v(s, r),
				v(t, a),
				v(t, n),
				v(n, o),
				v(o, c),
				v(c, l),
				v(l, m),
				v(m, y),
				v(l, x),
				v(l, _),
				v(l, k),
				v(o, L),
				v(o, V),
				v(V, q),
				v(q, A),
				v(A, C),
				v(q, M),
				v(o, S),
				v(o, R),
				v(R, N),
				v(N, O),
				v(O, z),
				v(N, P),
				v(o, T),
				v(o, j),
				v(j, B),
				v(B, H),
				v(H, U),
				v(B, D),
				v(o, K),
				v(o, F),
				v(F, G),
				v(G, W),
				v(W, J),
				v(G, Y),
				v(o, Z),
				v(o, X),
				v(X, Q),
				v(Q, ee),
				v(ee, te),
				v(Q, se);
		},
		p: E,
		i: E,
		o: E,
		d(e) {
			e && d(t);
		}
	};
}
class _e extends o {
	constructor(e) {
		super(), c(this, e, null, be, l, {});
	}
}
function ke(e) {
	let t, s, r;
	return (
		(s = new _e({})),
		{
			c() {
				(t = i('footer')), _(s.$$.fragment), this.h();
			},
			l(e) {
				t = u(e, 'FOOTER', { class: !0 });
				var r = p(t);
				k(s.$$.fragment, r), r.forEach(d), this.h();
			},
			h() {
				b(t, 'class', 'svelte-lti6kl');
			},
			m(e, a) {
				g(e, t, a), L(s, t, null), (r = !0);
			},
			p: E,
			i(e) {
				r || (A(s.$$.fragment, e), (r = !0));
			},
			o(e) {
				C(s.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && d(t), M(s);
			}
		}
	);
}
class Le extends o {
	constructor(e) {
		super(), c(this, e, null, ke, l, {});
	}
}
function Ve(e) {
	let t, s, r, a, n, o, c, l;
	(document.title = t = 'SvelteKit UI - ' + e[0]),
		(a = new xe({ props: { current_page: e[0], variante: 1 } })),
		a.$on('click', e[1]);
	const h = e[3].default,
		f = K(h, e, e[2], null);
	return (
		(c = new Le({})),
		{
			c() {
				(s = w()),
					(r = i('main')),
					_(a.$$.fragment),
					(n = w()),
					f && f.c(),
					(o = w()),
					_(c.$$.fragment);
			},
			l(e) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(s = $(e)),
					(r = u(e, 'MAIN', {}));
				var t = p(r);
				k(a.$$.fragment, t), (n = $(t)), f && f.l(t), (o = $(t)), k(c.$$.fragment, t), t.forEach(d);
			},
			m(e, t) {
				g(e, s, t),
					g(e, r, t),
					L(a, r, null),
					v(r, n),
					f && f.m(r, null),
					v(r, o),
					L(c, r, null),
					(l = !0);
			},
			p(e, [s]) {
				(!l || 1 & s) && t !== (t = 'SvelteKit UI - ' + e[0]) && (document.title = t);
				const r = {};
				1 & s && (r.current_page = e[0]),
					a.$set(r),
					f && f.p && 4 & s && G(f, h, e, e[2], s, null, null);
			},
			i(e) {
				l || (A(a.$$.fragment, e), A(f, e), A(c.$$.fragment, e), (l = !0));
			},
			o(e) {
				C(a.$$.fragment, e), C(f, e), C(c.$$.fragment, e), (l = !1);
			},
			d(e) {
				e && d(s), e && d(r), M(a), f && f.d(e), M(c);
			}
		}
	);
}
function qe(e, t, s) {
	let { $$slots: r = {}, $$scope: a } = t,
		n = '';
	return (
		(e.$$set = (e) => {
			'$$scope' in e && s(2, (a = e.$$scope));
		}),
		[
			n,
			(e) => {
				s(0, (n = e.srcElement.firstChild.data));
			},
			a,
			r
		]
	);
}
var Ae = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(e) {
			super(), c(this, e, qe, Ve, l, {});
		}
	}
});
const Ce = [
		() =>
			he(() => import('./pages/index.svelte-08bb5da9.js'), [
				'/_app/pages/index.svelte-08bb5da9.js',
				'/_app/assets/pages/index.svelte-8829a502.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-a94e894d.js',
				'/_app/assets/Cover-09fb2b3c.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-05e6f813.js',
				'/_app/assets/Img-28c88a41.css',
				'/_app/chunks/pages-26a130a6.js'
			]),
		() =>
			he(() => import('./pages/philosophy/index.svelte-52d55aee.js'), [
				'/_app/pages/philosophy/index.svelte-52d55aee.js',
				'/_app/assets/pages/philosophy/index.svelte-b253a867.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-a94e894d.js',
				'/_app/assets/Cover-09fb2b3c.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css'
			]),
		() =>
			he(() => import('./pages/artworks/index.svelte-d247f9d9.js'), [
				'/_app/pages/artworks/index.svelte-d247f9d9.js',
				'/_app/assets/pages/artworks/index.svelte-a895702c.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-a94e894d.js',
				'/_app/assets/Cover-09fb2b3c.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-05e6f813.js',
				'/_app/assets/Img-28c88a41.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css'
			]),
		() =>
			he(() => import('./pages/about/index.svelte-5548097e.js'), [
				'/_app/pages/about/index.svelte-5548097e.js',
				'/_app/assets/pages/about/index.svelte-f8c6d01a.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			he(() => import('./pages/lab/index.svelte-69cfac81.js'), [
				'/_app/pages/lab/index.svelte-69cfac81.js',
				'/_app/assets/pages/lab/index.svelte-04766849.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-a94e894d.js',
				'/_app/assets/Cover-09fb2b3c.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	Me = [
		[/^\/$/, [Ce[0]]],
		[/^\/philosophy\/?$/, [Ce[1]]],
		[/^\/artworks\/?$/, [Ce[2]]],
		[/^\/about\/?$/, [Ce[3]]],
		[/^\/lab\/?$/, [Ce[4]]]
	];
function Se() {
	return { x: pageXOffset, y: pageYOffset };
}
function Re(e) {
	for (; e && 'A' !== e.nodeName.toUpperCase(); ) e = e.parentNode;
	return e;
}
class Ne {
	constructor({ base: e, routes: t }) {
		(this.base = e), (this.routes = t);
	}
	init(e) {
		let t;
		(this.renderer = e),
			(e.router = this),
			(this.enabled = !0),
			'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			}),
			addEventListener('scroll', () => {
				clearTimeout(t),
					(t = setTimeout(() => {
						const e = n(n({}, history.state || {}), { 'sveltekit:scroll': Se() });
						history.replaceState(e, document.title, window.location.href);
					}, 50));
			});
		const s = (e) => {
			const t = Re(e.target);
			t && t.hasAttribute('sveltekit:prefetch') && this.prefetch(new URL(t.href));
		};
		let r;
		addEventListener('touchstart', s),
			addEventListener('mousemove', (e) => {
				clearTimeout(r),
					(r = setTimeout(() => {
						s(e);
					}, 20));
			}),
			addEventListener('click', (e) => {
				if (!this.enabled) return;
				if (e.button || 1 !== e.which) return;
				if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
				if (e.defaultPrevented) return;
				const t = Re(e.target);
				if (!t) return;
				if (!t.href) return;
				const s = 'object' == typeof t.href && 'SVGAnimatedString' === t.href.constructor.name,
					r = String(s ? t.href.baseVal : t.href);
				if (r === location.href) return void (location.hash || e.preventDefault());
				if (t.hasAttribute('download') || 'external' === t.getAttribute('rel')) return;
				if (s ? t.target.baseVal : t.target) return;
				const a = new URL(r);
				if (a.pathname === location.pathname && a.search === location.search) return;
				const n = this.parse(a);
				if (n) {
					const s = t.hasAttribute('sveltekit:noscroll');
					history.pushState({}, '', a.href),
						this._navigate(n, s ? Se() : null, [], a.hash),
						e.preventDefault();
				}
			}),
			addEventListener('popstate', (e) => {
				if (e.state && this.enabled) {
					const t = new URL(location.href),
						s = this.parse(t);
					s ? this._navigate(s, e.state['sveltekit:scroll'], []) : (location.href = location.href);
				}
			}),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	parse(e) {
		if (e.origin !== location.origin) return null;
		if (!e.pathname.startsWith(this.base)) return null;
		const t = e.pathname.slice(this.base.length) || '/',
			s = this.routes.filter(([e]) => e.test(t));
		if (s.length > 0) {
			const r = new URLSearchParams(e.search);
			return { id: `${t}?${r}`, routes: s, path: t, query: r };
		}
	}
	async goto(e, { noscroll: t = !1, replaceState: s = !1 } = {}, r) {
		if (this.enabled) {
			const a = new URL(
					e,
					(function (e) {
						let t = e.baseURI;
						if (!t) {
							const s = e.getElementsByTagName('base');
							t = s.length ? s[0].href : e.URL;
						}
						return t;
					})(document)
				),
				n = this.parse(a);
			if (n)
				return (
					history[s ? 'replaceState' : 'pushState']({}, '', e),
					this._navigate(n, t ? Se() : null, r, a.hash)
				);
		}
		return (location.href = e), new Promise(() => {});
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(e) {
		const t = this.parse(e);
		if (t) return this.renderer.load(t);
		throw new Error(`Could not prefetch ${e.href}`);
	}
	async _navigate(e, t, s, r) {
		this.renderer.notify({ path: e.path, query: e.query }),
			location.pathname.endsWith('/') &&
				'/' !== location.pathname &&
				history.replaceState({}, '', `${location.pathname.slice(0, -1)}${location.search}`),
			await this.renderer.update(e, s),
			document.body.focus();
		const a = r && document.getElementById(r.slice(1));
		t
			? scrollTo(t.x, t.y)
			: a
			? scrollTo(0, a.getBoundingClientRect().top + scrollY)
			: scrollTo(0, 0);
	}
}
function Oe(e) {
	if (e.error) {
		const t = 'string' == typeof e.error ? new Error(e.error) : e.error,
			s = e.status;
		return t instanceof Error
			? !s || s < 400 || s > 599
				? (console.warn(
						'"error" returned from load() without a valid status code — defaulting to 500'
				  ),
				  { status: 500, error: t })
				: { status: s, error: t }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof t}"`
					)
			  };
	}
	if (e.redirect) {
		if (!e.status || 3 !== Math.floor(e.status / 100))
			return {
				status: 500,
				error: new Error(
					'"redirect" property returned from load() must be accompanied by a 3xx status code'
				)
			};
		if ('string' != typeof e.redirect)
			return {
				status: 500,
				error: new Error('"redirect" property returned from load() must be a string')
			};
	}
	return e;
}
function ze(e) {
	const t = W(e);
	let s = !0;
	return {
		notify: function () {
			(s = !0), t.update((e) => e);
		},
		set: function (e) {
			(s = !1), t.set(e);
		},
		subscribe: function (e) {
			let r;
			return t.subscribe((t) => {
				(void 0 === r || (s && t !== r)) && e((r = t));
			});
		}
	};
}
function Ie(e, a) {
	const n = 'string' == typeof e ? e : e.url,
		o = document.querySelector(`script[type="svelte-data"][url="${n}"]`);
	if (o) {
		const e = JSON.parse(o.textContent),
			{ body: a } = e,
			n = ((e, a) => {
				var n = {};
				for (var o in e) t.call(e, o) && a.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && s) for (var o of s(e)) a.indexOf(o) < 0 && r.call(e, o) && (n[o] = e[o]);
				return n;
			})(e, ['body']);
		return Promise.resolve(new Response(a, n));
	}
	return fetch(e, a);
}
class Pe {
	constructor({ Root: e, layout: t, target: s, session: r, host: a }) {
		(this.Root = e),
			(this.layout = t),
			(this.host = a),
			(this.router = null),
			(this.target = s),
			(this.started = !1),
			(this.current = { page: null, query: null, session_changed: !1, nodes: [], contexts: [] }),
			(this.caches = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: ze({}), navigating: W(null), session: W(r) }),
			(this.$session = null),
			(this.root = null);
		let n = !1;
		this.stores.session.subscribe(async (e) => {
			if (((this.$session = e), !n)) return;
			this.current.session_changed = !0;
			const t = this.router.parse(new URL(location.href));
			this.update(t, []);
		}),
			(n = !0);
	}
	async start(e) {
		const t = await this._load(e);
		t.redirect ? (location.href = new URL(t.redirect, location.href).href) : this._init(t);
	}
	notify({ path: e, query: t }) {
		dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.started &&
				this.stores.navigating.set({
					from: { path: this.current.page.path, query: this.current.page.query },
					to: { path: e, query: t }
				});
	}
	async update(e, t) {
		const s = (this.token = {}),
			r = await this._get_navigation_result(e);
		if (s !== this.token) return;
		if (r.reload) location.reload();
		else if (r.redirect) {
			if (!(t.length > 10 || t.includes(e.path)))
				return void (this.router
					? this.router.goto(r.redirect, { replaceState: !0 }, [...t, e.path])
					: (location.href = new URL(r.redirect, location.href).href));
			this.root.$set({ status: 500, error: new Error('Redirect loop') });
		} else
			this.started
				? ((this.current = r.state),
				  this.root.$set(r.props),
				  this.stores.navigating.set(null),
				  await 0)
				: this._init(r);
		dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null);
		!1 === r.state.nodes[r.state.nodes.length - 1].module.router
			? this.router.disable()
			: this.router.enable();
	}
	load(e) {
		return (
			(this.loading.promise = this._get_navigation_result(e)),
			(this.loading.id = e.id),
			this.loading.promise
		);
	}
	async _get_navigation_result(e) {
		if (this.loading.id === e.id) return this.loading.promise;
		for (let t = 0; t < e.routes.length; t += 1) {
			const s = e.routes[t],
				[r, a, n] = s;
			if (1 === s.length) return { reload: !0 };
			let o = t + 1;
			for (; o < e.routes.length; ) {
				const t = e.routes[o];
				if (t[0].toString() !== r.toString()) break;
				1 !== t.length && t[1].forEach((e) => e()), (o += 1);
			}
			const c = a.map((e) => e()),
				l = {
					host: this.host,
					path: e.path,
					params: n ? n(s[0].exec(e.path)) : {},
					query: e.query
				},
				i = await this._load({ status: 200, error: null, nodes: c, page: l });
			if (i) return i;
		}
		return await this._load({
			status: 404,
			error: new Error(`Not found: ${e.path}`),
			nodes: [],
			page: { host: this.host, path: e.path, query: e.query, params: {} }
		});
	}
	_init(e) {
		this.current = e.state;
		const t = document.querySelector('style[data-svelte]');
		t && t.remove(),
			(this.root = new this.Root({
				target: this.target,
				props: n({ stores: this.stores }, e.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _load({ status: e, error: t, nodes: s, page: r }) {
		const a = r.query.toString(),
			o = {
				state: { page: r, query: a, session_changed: !1, nodes: [], contexts: [] },
				props: { status: e, error: t, components: [] }
			},
			c = {
				path: !this.current.page || r.path !== this.current.page.path,
				params: Object.keys(r.params).filter(
					(e) => !this.current.page || this.current.page.params[e] !== r.params[e]
				),
				query: a !== this.current.query,
				session: this.current.session_changed,
				context: !1
			};
		try {
			const e = [this.layout, ...s],
				l = [];
			let i;
			for (let s = 0; s < e.length; s += 1) {
				const h = this.current.nodes[s],
					u = this.current.contexts[s],
					p = await e[s];
				if (((o.props.components[s] = p.default), p.preload))
					throw new Error(
						'preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading'
					);
				if (
					!h ||
					p !== h.module ||
					(c.path && h.uses.path) ||
					c.params.some((e) => h.uses.params.has(e)) ||
					(c.query && h.uses.query) ||
					(c.session && h.uses.session) ||
					(c.context && h.uses.context)
				) {
					const h = r.path + a,
						u = this.caches.get(p),
						f = u && u.get(h);
					let d, g;
					if (!f || (c.context && f.node.uses.context)) {
						d = {
							module: p,
							uses: { params: new Set(), path: !1, query: !1, session: !1, context: !1 }
						};
						const a = {};
						for (const e in r.params)
							Object.defineProperty(a, e, {
								get: () => (d.uses.params.add(e), r.params[e]),
								enumerable: !0
							});
						const o = this.$session;
						if (p.load) {
							g = await p.load.call(null, {
								page: {
									host: r.host,
									params: a,
									get path() {
										return (d.uses.path = !0), r.path;
									},
									get query() {
										return (d.uses.query = !0), r.query;
									}
								},
								get session() {
									return (d.uses.session = !0), o;
								},
								get context() {
									return (d.uses.context = !0), n({}, i);
								},
								fetch: this.started ? fetch : Ie
							});
							const c = s === e.length - 1 && !t;
							if (!g && c) return;
						}
					} else ({ node: d, loaded: g } = f);
					if (g) {
						if (((g = Oe(g)), g.error)) {
							if (t) throw t;
							return await this._load({
								status: g.status || 500,
								error: g.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (g.redirect) return { redirect: g.redirect };
						if ((g.context && ((c.context = !0), (i = n(n({}, i), g.context))), g.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const e = this.caches.get(p),
								t = { node: d, loaded: g };
							e.set(h, t);
							let s = !1;
							const r = setTimeout(() => {
									a();
								}, 1e3 * g.maxage),
								a = () => {
									e.get(h) === t && e.delete(h), n(), clearTimeout(r);
								},
								n = this.stores.session.subscribe(() => {
									s && a();
								});
							s = !0;
						}
						l[s] = g.props;
					}
					(o.state.nodes[s] = d), (o.state.contexts[s] = i);
				} else (o.state.nodes[s] = h), (o.state.contexts[s] = i = u);
			}
			return (
				(await Promise.all(l)).forEach((e, t) => {
					e && (o.props[`props_${t}`] = e);
				}),
				(this.current.page && r.path === this.current.page.path && !c.query) || (o.props.page = r),
				o
			);
		} catch (l) {
			if (t) throw t;
			return await this._load({
				status: 500,
				error: l,
				nodes: [],
				page: { host: r.host, path: r.path, query: r.query, params: {} }
			});
		}
	}
}
async function Te({ paths: e, target: t, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new Ne({ base: e.base, routes: Me }),
		c = new Pe({ Root: ce, layout: Ae, target: t, session: s, host: r });
	n && (await c.start(n)), a && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Te as start };
