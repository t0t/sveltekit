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
	i as l,
	s as c,
	e as i,
	t as h,
	c as u,
	a as p,
	b as f,
	d,
	f as v,
	g,
	h as m,
	j as b,
	k as y,
	l as w,
	n as $,
	m as E,
	o as x,
	p as _,
	q as k,
	r as L,
	u as V,
	v as C,
	w as q,
	x as A,
	y as S,
	z as M,
	A as R,
	B as N,
	C as O,
	D as I,
	E as T,
	F as P,
	G as j,
	H as B,
	I as H,
	J as z,
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
			v(e, t, r), g(t, s);
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
		l,
		c = e[1].message + '',
		E = e[1].stack && Y(e);
	return {
		c() {
			(t = i('h1')),
				(s = h(e[0])),
				(r = b()),
				(a = i('p')),
				(n = h(c)),
				(o = b()),
				E && E.c(),
				(l = y());
		},
		l(i) {
			t = u(i, 'H1', {});
			var h = p(t);
			(s = f(h, e[0])), h.forEach(d), (r = w(i)), (a = u(i, 'P', {}));
			var v = p(a);
			(n = f(v, c)), v.forEach(d), (o = w(i)), E && E.l(i), (l = y());
		},
		m(e, c) {
			v(e, t, c), g(t, s), v(e, r, c), v(e, a, c), g(a, n), v(e, o, c), E && E.m(e, c), v(e, l, c);
		},
		p(e, [t]) {
			1 & t && m(s, e[0]),
				2 & t && c !== (c = e[1].message + '') && m(n, c),
				e[1].stack
					? E
						? E.p(e, t)
						: ((E = Y(e)), E.c(), E.m(l.parentNode, l))
					: E && (E.d(1), (E = null));
		},
		i: $,
		o: $,
		d(e) {
			e && d(t), e && d(r), e && d(a), e && d(o), E && E.d(e), e && d(l);
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
		super(), l(this, e, X, Z, c, { status: 0, error: 1 });
	}
}
function ee(e) {
	let t, s, r;
	const a = [e[4] || {}];
	var n = e[2][1];
	function o(e) {
		let t = {};
		for (let s = 0; s < a.length; s += 1) t = E(t, a[s]);
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
				t && L(t, e, a), v(e, s, a), (r = !0);
			},
			p(e, r) {
				const l = 16 & r ? V(a, [C(e[4] || {})]) : {};
				if (n !== (n = e[2][1])) {
					if (t) {
						O();
						const e = t;
						A(e.$$.fragment, 1, 0, () => {
							S(e, 1);
						}),
							I();
					}
					n
						? ((t = new n(o())), _(t.$$.fragment), q(t.$$.fragment, 1), L(t, s.parentNode, s))
						: (t = null);
				} else n && t.$set(l);
			},
			i(e) {
				r || (t && q(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				t && A(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && d(s), t && S(t, e);
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
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				A(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function se(e) {
	let t, s, r, a;
	const n = [te, ee],
		o = [];
	function l(e, t) {
		return e[1] ? 0 : 1;
	}
	return (
		(t = l(e)),
		(s = o[t] = n[t](e)),
		{
			c() {
				s.c(), (r = y());
			},
			l(e) {
				s.l(e), (r = y());
			},
			m(e, s) {
				o[t].m(e, s), v(e, r, s), (a = !0);
			},
			p(e, a) {
				let c = t;
				(t = l(e)),
					t === c
						? o[t].p(e, a)
						: (O(),
						  A(o[c], 1, 1, () => {
								o[c] = null;
						  }),
						  I(),
						  (s = o[t]),
						  s ? s.p(e, a) : ((s = o[t] = n[t](e)), s.c()),
						  q(s, 1),
						  s.m(r.parentNode, r));
			},
			i(e) {
				a || (q(s), (a = !0));
			},
			o(e) {
				A(s), (a = !1);
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
			x(t, 'id', 'svelte-announcer'),
				x(t, 'aria-live', 'assertive'),
				x(t, 'aria-atomic', 'true'),
				x(t, 'class', 'svelte-1j55zn5');
		},
		m(e, r) {
			v(e, t, r), s && s.m(t, null);
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
			v(e, t, r), v(e, s, r);
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
	for (let c = 0; c < n.length; c += 1) o = E(o, n[c]);
	t = new e[8]({ props: o });
	let l = e[5] && re(e);
	return {
		c() {
			_(t.$$.fragment), (s = b()), l && l.c(), (r = y());
		},
		l(e) {
			k(t.$$.fragment, e), (s = w(e)), l && l.l(e), (r = y());
		},
		m(e, n) {
			L(t, e, n), v(e, s, n), l && l.m(e, n), v(e, r, n), (a = !0);
		},
		p(e, [s]) {
			const a = 8 & s ? V(n, [C(e[3] || {})]) : {};
			2071 & s && (a.$$scope = { dirty: s, ctx: e }),
				t.$set(a),
				e[5]
					? l
						? l.p(e, s)
						: ((l = re(e)), l.c(), l.m(r.parentNode, r))
					: l && (l.d(1), (l = null));
		},
		i(e) {
			a || (q(t.$$.fragment, e), (a = !0));
		},
		o(e) {
			A(t.$$.fragment, e), (a = !1);
		},
		d(e) {
			S(t, e), e && d(s), l && l.d(e), e && d(r);
		}
	};
}
function oe(e, t, s) {
	let { status: r } = t,
		{ error: a } = t,
		{ stores: n } = t,
		{ page: o } = t,
		{ components: l } = t,
		{ props_0: c = null } = t,
		{ props_1: i = null } = t;
	const h = l[0];
	M('__svelte__', n), R(n.page.notify);
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
				'components' in e && s(2, (l = e.components)),
				'props_0' in e && s(3, (c = e.props_0)),
				'props_1' in e && s(4, (i = e.props_1));
		}),
		(e.$$.update = () => {
			1536 & e.$$.dirty && n.page.set(o);
		}),
		[r, a, l, c, i, u, p, f, h, n, o]
	);
}
class le extends o {
	constructor(e) {
		super(),
			l(this, e, oe, ne, c, {
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
let ce;
const ie = {},
	he = function (e, t) {
		if (!t) return e();
		if (void 0 === ce) {
			const e = document.createElement('link').relList;
			ce = e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
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
					(r.rel = t ? 'stylesheet' : ce),
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
	let t, s, r, a, n, o, l, c, i, h, f;
	return {
		c() {
			(t = T('svg')),
				(s = T('g')),
				(r = T('circle')),
				(a = T('g')),
				(n = T('circle')),
				(o = T('circle')),
				(l = T('g')),
				(c = T('circle')),
				(i = T('circle')),
				(h = T('circle')),
				(f = T('circle')),
				this.h();
		},
		l(e) {
			t = u(e, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var v = p(t);
			s = u(v, 'g', { class: !0 }, 1);
			var g = p(s);
			(r = u(g, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(r).forEach(d),
				(a = u(g, 'g', { class: !0 }, 1));
			var m = p(a);
			(n = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(n).forEach(d),
				(o = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(o).forEach(d),
				m.forEach(d),
				(l = u(g, 'g', { class: !0 }, 1));
			var b = p(l);
			(c = u(b, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(c).forEach(d),
				(i = u(b, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(i).forEach(d),
				(h = u(b, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(h).forEach(d),
				(f = u(b, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(f).forEach(d),
				b.forEach(d),
				g.forEach(d),
				v.forEach(d),
				this.h();
		},
		h() {
			x(r, 'cx', '25'),
				x(r, 'cy', '25'),
				x(r, 'r', '25'),
				x(r, 'class', 'svelte-1kmsbll'),
				x(n, 'cx', '12.5'),
				x(n, 'cy', '25'),
				x(n, 'r', '12.5'),
				x(n, 'class', 'svelte-1kmsbll'),
				x(o, 'cx', '38'),
				x(o, 'cy', '25'),
				x(o, 'r', '12.5'),
				x(o, 'class', 'svelte-1kmsbll'),
				x(a, 'class', 'svelte-1kmsbll'),
				x(c, 'cx', '6.5'),
				x(c, 'cy', '25'),
				x(c, 'r', '6.25'),
				x(c, 'class', 'svelte-1kmsbll'),
				x(i, 'cx', '19'),
				x(i, 'cy', '25'),
				x(i, 'r', '6.25'),
				x(i, 'class', 'svelte-1kmsbll'),
				x(h, 'cx', '31.5'),
				x(h, 'cy', '25'),
				x(h, 'r', '6.25'),
				x(h, 'class', 'svelte-1kmsbll'),
				x(f, 'cx', '44'),
				x(f, 'cy', '25'),
				x(f, 'r', '6.25'),
				x(f, 'class', 'svelte-1kmsbll'),
				x(l, 'class', 'svelte-1kmsbll'),
				x(s, 'class', 'svelte-1kmsbll'),
				x(t, 'class', 'logo svelte-1kmsbll'),
				x(t, 'width', '51'),
				x(t, 'height', '51');
		},
		m(e, u) {
			v(e, t, u),
				g(t, s),
				g(s, r),
				g(s, a),
				g(a, n),
				g(a, o),
				g(s, l),
				g(l, c),
				g(l, i),
				g(l, h),
				g(l, f);
		},
		p: $,
		i: $,
		o: $,
		d(e) {
			e && d(t);
		}
	};
}
class fe extends o {
	constructor(e) {
		super(), l(this, e, null, pe, c, {});
	}
}
function de(e, t, s) {
	const r = e.slice();
	return (r[9] = t[s].url), (r[10] = t[s].name), r;
}
function ve(e, t, s) {
	const r = e.slice();
	return (r[9] = t[s].url), (r[10] = t[s].name), r;
}
function ge(e) {
	let t,
		s,
		r = J,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = be(de(e, r, n));
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
			x(t, 'class', (s = H(e[4][e[1]]) + ' svelte-10r19l0'));
		},
		m(e, s) {
			v(e, t, s);
			for (let r = 0; r < a.length; r += 1) a[r].m(t, null);
		},
		p(e, n) {
			if (1 & n) {
				let s;
				for (r = J, s = 0; s < r.length; s += 1) {
					const o = de(e, r, s);
					a[s] ? a[s].p(o, n) : ((a[s] = be(o)), a[s].c(), a[s].m(t, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = H(e[4][e[1]]) + ' svelte-10r19l0') && x(t, 'class', s);
		},
		i: $,
		o: $,
		d(e) {
			e && d(t), z(a, e);
		}
	};
}
function me(e) {
	let t, s, r, a, n, o, l, c, h;
	r = new fe({});
	let f = J,
		m = [];
	for (let i = 0; i < f.length; i += 1) m[i] = ye(ve(e, f, i));
	return {
		c() {
			(t = i('div')), (s = i('div')), _(r.$$.fragment), (a = b()), (n = i('nav'));
			for (let e = 0; e < m.length; e += 1) m[e].c();
			this.h();
		},
		l(e) {
			t = u(e, 'DIV', { class: !0 });
			var o = p(t);
			s = u(o, 'DIV', { class: !0 });
			var l = p(s);
			k(r.$$.fragment, l), l.forEach(d), (a = w(o)), (n = u(o, 'NAV', { class: !0 }));
			var c = p(n);
			for (let t = 0; t < m.length; t += 1) m[t].l(c);
			c.forEach(d), o.forEach(d), this.h();
		},
		h() {
			x(s, 'class', 'ButtonNav svelte-10r19l0'),
				x(n, 'class', (o = H(e[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-10r19l0')),
				x(t, 'class', 'Variante_1 svelte-10r19l0');
		},
		m(o, i) {
			v(o, t, i), g(t, s), L(r, s, null), g(t, a), g(t, n);
			for (let e = 0; e < m.length; e += 1) m[e].m(n, null);
			(l = !0),
				c ||
					((h = [B(s, 'click', e[7]), D(ue.call(null, t)), B(t, 'click_outside', e[3])]), (c = !0));
		},
		p(e, t) {
			if (9 & t) {
				let s;
				for (f = J, s = 0; s < f.length; s += 1) {
					const r = ve(e, f, s);
					m[s] ? m[s].p(r, t) : ((m[s] = ye(r)), m[s].c(), m[s].m(n, null));
				}
				for (; s < m.length; s += 1) m[s].d(1);
				m.length = f.length;
			}
			(!l ||
				(4 & t &&
					o !== (o = H(e[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-10r19l0'))) &&
				x(n, 'class', o);
		},
		i(e) {
			l || (q(r.$$.fragment, e), (l = !0));
		},
		o(e) {
			A(r.$$.fragment, e), (l = !1);
		},
		d(e) {
			e && d(t), S(r), z(m, e), (c = !1), U(h);
		}
	};
}
function be(e) {
	let t,
		s,
		r,
		a,
		n,
		o = e[10] + '';
	return {
		c() {
			(t = i('a')), (s = h(o)), (r = b()), this.h();
		},
		l(e) {
			t = u(e, 'A', { href: !0, class: !0 });
			var a = p(t);
			(s = f(a, o)), (r = w(a)), a.forEach(d), this.h();
		},
		h() {
			x(t, 'href', e[9]), x(t, 'class', 'svelte-10r19l0'), j(t, 'active', e[10] === e[0]);
		},
		m(o, l) {
			v(o, t, l), g(t, s), g(t, r), a || ((n = B(t, 'click', e[6])), (a = !0));
		},
		p(e, s) {
			1 & s && j(t, 'active', e[10] === e[0]);
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
			(t = i('a')), (s = h(o)), (r = b()), this.h();
		},
		l(e) {
			t = u(e, 'A', { href: !0, class: !0, role: !0 });
			var a = p(t);
			(s = f(a, o)), (r = w(a)), a.forEach(d), this.h();
		},
		h() {
			x(t, 'href', e[9]),
				x(t, 'class', 'NavItem svelte-10r19l0'),
				x(t, 'role', 'navigation'),
				j(t, 'active', e[10] === e[0]);
		},
		m(o, l) {
			v(o, t, l),
				g(t, s),
				g(t, r),
				a || ((n = [B(t, 'click', e[5]), B(t, 'click', e[3])]), (a = !0));
		},
		p(e, s) {
			1 & s && j(t, 'active', e[10] === e[0]);
		},
		d(e) {
			e && d(t), (a = !1), U(n);
		}
	};
}
function we(e) {
	let t, s, r, a;
	const n = [me, ge],
		o = [];
	function l(e, t) {
		return 1 === e[1] ? 0 : 1;
	}
	return (
		(t = l(e)),
		(s = o[t] = n[t](e)),
		{
			c() {
				s.c(), (r = y());
			},
			l(e) {
				s.l(e), (r = y());
			},
			m(e, s) {
				o[t].m(e, s), v(e, r, s), (a = !0);
			},
			p(e, [a]) {
				let c = t;
				(t = l(e)),
					t === c
						? o[t].p(e, a)
						: (O(),
						  A(o[c], 1, 1, () => {
								o[c] = null;
						  }),
						  I(),
						  (s = o[t]),
						  s ? s.p(e, a) : ((s = o[t] = n[t](e)), s.c()),
						  q(s, 1),
						  s.m(r.parentNode, r));
			},
			i(e) {
				a || (q(s), (a = !0));
			},
			o(e) {
				A(s), (a = !1);
			},
			d(e) {
				o[t].d(e), e && d(r);
			}
		}
	);
}
function $e(e, t, s) {
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
class Ee extends o {
	constructor(e) {
		super(), l(this, e, $e, we, c, { current_page: 0, variante: 1 });
	}
}
function xe(e) {
	let t,
		s,
		r,
		a,
		n,
		o,
		l,
		c,
		m,
		y,
		E,
		_,
		k,
		L,
		V,
		C,
		q,
		A,
		S,
		M,
		R,
		N,
		O,
		I,
		P,
		j,
		B,
		H,
		z,
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
				(a = b()),
				(n = i('ul')),
				(o = i('li')),
				(l = i('a')),
				(c = T('svg')),
				(m = T('title')),
				(y = h('Instagram')),
				(E = T('circle')),
				(_ = T('path')),
				(k = T('path')),
				(L = b()),
				(V = i('a')),
				(C = T('svg')),
				(q = T('title')),
				(A = h('Linkedin')),
				(S = T('path')),
				(M = b()),
				(R = i('a')),
				(N = T('svg')),
				(O = T('title')),
				(I = h('Algunos artículos en Medium')),
				(P = T('path')),
				(j = b()),
				(B = i('a')),
				(H = T('svg')),
				(z = T('title')),
				(U = h('Twitter')),
				(D = T('path')),
				(K = b()),
				(F = i('a')),
				(G = T('svg')),
				(W = T('title')),
				(J = h('Mi repositorio en Github')),
				(Y = T('path')),
				(Z = b()),
				(X = i('a')),
				(Q = T('svg')),
				(ee = T('title')),
				(te = h('Facebook')),
				(se = T('path')),
				this.h();
		},
		l(e) {
			t = u(e, 'ASIDE', { class: !0 });
			var i = p(t);
			s = u(i, 'SMALL', { class: !0 });
			var h = p(s);
			(r = f(h, 'Follow me at:')), h.forEach(d), (a = w(i)), (n = u(i, 'UL', { class: !0 }));
			var v = p(n);
			o = u(v, 'LI', { class: !0 });
			var g = p(o);
			l = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var b = p(l);
			c = u(b, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var $ = p(c);
			m = u($, 'title', { class: !0 }, 1);
			var x = p(m);
			(y = f(x, 'Instagram')),
				x.forEach(d),
				(E = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(E).forEach(d),
				(_ = u($, 'path', { d: !0, class: !0 }, 1)),
				p(_).forEach(d),
				(k = u($, 'path', { d: !0, class: !0 }, 1)),
				p(k).forEach(d),
				$.forEach(d),
				b.forEach(d),
				(L = w(g)),
				(V = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var T = p(V);
			C = u(T, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var re = p(C);
			q = u(re, 'title', { class: !0 }, 1);
			var ae = p(q);
			(A = f(ae, 'Linkedin')),
				ae.forEach(d),
				(S = u(re, 'path', { d: !0, class: !0 }, 1)),
				p(S).forEach(d),
				re.forEach(d),
				T.forEach(d),
				(M = w(g)),
				(R = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ne = p(R);
			N = u(ne, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var oe = p(N);
			O = u(oe, 'title', { class: !0 }, 1);
			var le = p(O);
			(I = f(le, 'Algunos artículos en Medium')),
				le.forEach(d),
				(P = u(oe, 'path', { d: !0, class: !0 }, 1)),
				p(P).forEach(d),
				oe.forEach(d),
				ne.forEach(d),
				(j = w(g)),
				(B = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ce = p(B);
			H = u(ce, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ie = p(H);
			z = u(ie, 'title', { class: !0 }, 1);
			var he = p(z);
			(U = f(he, 'Twitter')),
				he.forEach(d),
				(D = u(ie, 'path', { d: !0, class: !0 }, 1)),
				p(D).forEach(d),
				ie.forEach(d),
				ce.forEach(d),
				(K = w(g)),
				(F = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
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
				(Z = w(g)),
				(X = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var de = p(X);
			Q = u(de, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ve = p(Q);
			ee = u(ve, 'title', { class: !0 }, 1);
			var ge = p(ee);
			(te = f(ge, 'Facebook')),
				ge.forEach(d),
				(se = u(ve, 'path', { d: !0, class: !0 }, 1)),
				p(se).forEach(d),
				ve.forEach(d),
				de.forEach(d),
				g.forEach(d),
				v.forEach(d),
				i.forEach(d),
				this.h();
		},
		h() {
			x(s, 'class', 'svelte-86bie3'),
				x(m, 'class', 'svelte-86bie3'),
				x(E, 'cx', '12.145'),
				x(E, 'cy', '3.892'),
				x(E, 'r', '0.96'),
				x(E, 'class', 'svelte-86bie3'),
				x(
					_,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				x(_, 'class', 'svelte-86bie3'),
				x(
					k,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				x(k, 'class', 'svelte-86bie3'),
				x(c, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(c, 'viewBox', '0 0 16 16'),
				x(c, 'class', 'svelte-86bie3'),
				x(l, 'href', 'https://www.instagram.com/t.o.d.h/'),
				x(l, 'target', '_blank'),
				x(l, 'rel', 'noopener'),
				x(l, 'class', 'svelte-86bie3'),
				x(q, 'class', 'svelte-86bie3'),
				x(
					S,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				x(S, 'class', 'svelte-86bie3'),
				x(C, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(C, 'viewBox', '0 0 16 16'),
				x(C, 'class', 'svelte-86bie3'),
				x(V, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				x(V, 'target', '_blank'),
				x(V, 'rel', 'noopener'),
				x(V, 'class', 'svelte-86bie3'),
				x(O, 'class', 'svelte-86bie3'),
				x(
					P,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				x(P, 'class', 'svelte-86bie3'),
				x(N, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(N, 'viewBox', '0 0 16 16'),
				x(N, 'class', 'svelte-86bie3'),
				x(R, 'href', 'https://medium.com/@todh'),
				x(R, 'target', '_blank'),
				x(R, 'rel', 'noopener'),
				x(R, 'class', 'svelte-86bie3'),
				x(z, 'class', 'svelte-86bie3'),
				x(
					D,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				x(D, 'class', 'svelte-86bie3'),
				x(H, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(H, 'viewBox', '0 0 16 16'),
				x(H, 'class', 'svelte-86bie3'),
				x(B, 'href', 'https://twitter.com/t0tinspire'),
				x(B, 'target', '_blank'),
				x(B, 'rel', 'noopener'),
				x(B, 'class', 'svelte-86bie3'),
				x(W, 'class', 'svelte-86bie3'),
				x(Y, 'fill-rule', 'evenodd'),
				x(Y, 'clip-rule', 'evenodd'),
				x(
					Y,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				x(Y, 'class', 'svelte-86bie3'),
				x(G, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(G, 'viewBox', '0 0 16 16'),
				x(G, 'class', 'svelte-86bie3'),
				x(F, 'href', 'https://github.com/t0t'),
				x(F, 'target', '_blank'),
				x(F, 'rel', 'noopener'),
				x(F, 'class', 'svelte-86bie3'),
				x(ee, 'class', 'svelte-86bie3'),
				x(
					se,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				x(se, 'class', 'svelte-86bie3'),
				x(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(Q, 'viewBox', '0 0 16 16'),
				x(Q, 'class', 'svelte-86bie3'),
				x(X, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				x(X, 'target', '_blank'),
				x(X, 'rel', 'noopener'),
				x(X, 'class', 'svelte-86bie3'),
				x(o, 'class', 'svelte-86bie3'),
				x(n, 'class', 'svelte-86bie3'),
				x(t, 'class', 'Links svelte-86bie3');
		},
		m(e, i) {
			v(e, t, i),
				g(t, s),
				g(s, r),
				g(t, a),
				g(t, n),
				g(n, o),
				g(o, l),
				g(l, c),
				g(c, m),
				g(m, y),
				g(c, E),
				g(c, _),
				g(c, k),
				g(o, L),
				g(o, V),
				g(V, C),
				g(C, q),
				g(q, A),
				g(C, S),
				g(o, M),
				g(o, R),
				g(R, N),
				g(N, O),
				g(O, I),
				g(N, P),
				g(o, j),
				g(o, B),
				g(B, H),
				g(H, z),
				g(z, U),
				g(H, D),
				g(o, K),
				g(o, F),
				g(F, G),
				g(G, W),
				g(W, J),
				g(G, Y),
				g(o, Z),
				g(o, X),
				g(X, Q),
				g(Q, ee),
				g(ee, te),
				g(Q, se);
		},
		p: $,
		i: $,
		o: $,
		d(e) {
			e && d(t);
		}
	};
}
class _e extends o {
	constructor(e) {
		super(), l(this, e, null, xe, c, {});
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
				x(t, 'class', 'svelte-lti6kl');
			},
			m(e, a) {
				v(e, t, a), L(s, t, null), (r = !0);
			},
			p: $,
			i(e) {
				r || (q(s.$$.fragment, e), (r = !0));
			},
			o(e) {
				A(s.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && d(t), S(s);
			}
		}
	);
}
class Le extends o {
	constructor(e) {
		super(), l(this, e, null, ke, c, {});
	}
}
function Ve(e) {
	let t, s, r, a, n, o, l, c, h;
	(document.title = t = 'SvelteKit UI - ' + e[0]),
		(a = new Ee({ props: { current_page: e[0], variante: 1 } })),
		a.$on('click', e[1]);
	const f = e[3].default,
		m = K(f, e, e[2], null);
	return (
		(c = new Le({})),
		{
			c() {
				(s = b()),
					(r = i('main')),
					_(a.$$.fragment),
					(n = b()),
					(o = i('section')),
					m && m.c(),
					(l = b()),
					_(c.$$.fragment);
			},
			l(e) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(s = w(e)),
					(r = u(e, 'MAIN', {}));
				var t = p(r);
				k(a.$$.fragment, t), (n = w(t)), (o = u(t, 'SECTION', {}));
				var i = p(o);
				m && m.l(i), i.forEach(d), (l = w(t)), k(c.$$.fragment, t), t.forEach(d);
			},
			m(e, t) {
				v(e, s, t),
					v(e, r, t),
					L(a, r, null),
					g(r, n),
					g(r, o),
					m && m.m(o, null),
					g(r, l),
					L(c, r, null),
					(h = !0);
			},
			p(e, [s]) {
				(!h || 1 & s) && t !== (t = 'SvelteKit UI - ' + e[0]) && (document.title = t);
				const r = {};
				1 & s && (r.current_page = e[0]),
					a.$set(r),
					m && m.p && 4 & s && G(m, f, e, e[2], s, null, null);
			},
			i(e) {
				h || (q(a.$$.fragment, e), q(m, e), q(c.$$.fragment, e), (h = !0));
			},
			o(e) {
				A(a.$$.fragment, e), A(m, e), A(c.$$.fragment, e), (h = !1);
			},
			d(e) {
				e && d(s), e && d(r), S(a), m && m.d(e), S(c);
			}
		}
	);
}
function Ce(e, t, s) {
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
var qe = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(e) {
			super(), l(this, e, Ce, Ve, c, {});
		}
	}
});
const Ae = [
		() =>
			he(() => import('./pages/index.svelte-88e8642f.js'), [
				'/_app/pages/index.svelte-88e8642f.js',
				'/_app/assets/pages/index.svelte-0c671fde.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-15f98305.js',
				'/_app/assets/Cover-135b87a3.css',
				'/_app/chunks/Section-f5afcac2.js',
				'/_app/assets/Section-18456eb9.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/pages-26a130a6.js'
			]),
		() =>
			he(() => import('./pages/philosophy/index.svelte-5971fb9a.js'), [
				'/_app/pages/philosophy/index.svelte-5971fb9a.js',
				'/_app/assets/pages/philosophy/index.svelte-48f7cc4e.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-15f98305.js',
				'/_app/assets/Cover-135b87a3.css',
				'/_app/chunks/GridBase-57efd4c1.js',
				'/_app/assets/GridBase-9bb25d37.css',
				'/_app/chunks/Section-f5afcac2.js',
				'/_app/assets/Section-18456eb9.css'
			]),
		() =>
			he(() => import('./pages/artworks/index.svelte-0e9b7e85.js'), [
				'/_app/pages/artworks/index.svelte-0e9b7e85.js',
				'/_app/assets/pages/artworks/index.svelte-df252ece.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-15f98305.js',
				'/_app/assets/Cover-135b87a3.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-f5afcac2.js',
				'/_app/assets/Section-18456eb9.css'
			]),
		() =>
			he(() => import('./pages/about/index.svelte-235473bd.js'), [
				'/_app/pages/about/index.svelte-235473bd.js',
				'/_app/assets/pages/about/index.svelte-40b75664.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-f5afcac2.js',
				'/_app/assets/Section-18456eb9.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			he(() => import('./pages/lab/index.svelte-426c2696.js'), [
				'/_app/pages/lab/index.svelte-426c2696.js',
				'/_app/assets/pages/lab/index.svelte-dad4fbe0.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-15f98305.js',
				'/_app/assets/Cover-135b87a3.css',
				'/_app/chunks/Section-f5afcac2.js',
				'/_app/assets/Section-18456eb9.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/GridBase-57efd4c1.js',
				'/_app/assets/GridBase-9bb25d37.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	Se = [
		[/^\/$/, [Ae[0]]],
		[/^\/philosophy\/?$/, [Ae[1]]],
		[/^\/artworks\/?$/, [Ae[2]]],
		[/^\/about\/?$/, [Ae[3]]],
		[/^\/lab\/?$/, [Ae[4]]]
	];
function Me() {
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
						const e = n(n({}, history.state || {}), { 'sveltekit:scroll': Me() });
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
						this._navigate(n, s ? Me() : null, [], a.hash),
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
					this._navigate(n, t ? Me() : null, r, a.hash)
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
function Ie(e) {
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
function Te(e, a) {
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
			(this.stores = { page: Ie({}), navigating: W(null), session: W(r) }),
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
			const l = a.map((e) => e()),
				c = {
					host: this.host,
					path: e.path,
					params: n ? n(s[0].exec(e.path)) : {},
					query: e.query
				},
				i = await this._load({ status: 200, error: null, nodes: l, page: c });
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
			l = {
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
				c = [];
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
					(l.path && h.uses.path) ||
					l.params.some((e) => h.uses.params.has(e)) ||
					(l.query && h.uses.query) ||
					(l.session && h.uses.session) ||
					(l.context && h.uses.context)
				) {
					const h = r.path + a,
						u = this.caches.get(p),
						f = u && u.get(h);
					let d, v;
					if (!f || (l.context && f.node.uses.context)) {
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
							v = await p.load.call(null, {
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
								fetch: this.started ? fetch : Te
							});
							const l = s === e.length - 1 && !t;
							if (!v && l) return;
						}
					} else ({ node: d, loaded: v } = f);
					if (v) {
						if (((v = Oe(v)), v.error)) {
							if (t) throw t;
							return await this._load({
								status: v.status || 500,
								error: v.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (v.redirect) return { redirect: v.redirect };
						if ((v.context && ((l.context = !0), (i = n(n({}, i), v.context))), v.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const e = this.caches.get(p),
								t = { node: d, loaded: v };
							e.set(h, t);
							let s = !1;
							const r = setTimeout(() => {
									a();
								}, 1e3 * v.maxage),
								a = () => {
									e.get(h) === t && e.delete(h), n(), clearTimeout(r);
								},
								n = this.stores.session.subscribe(() => {
									s && a();
								});
							s = !0;
						}
						c[s] = v.props;
					}
					(o.state.nodes[s] = d), (o.state.contexts[s] = i);
				} else (o.state.nodes[s] = h), (o.state.contexts[s] = i = u);
			}
			return (
				(await Promise.all(c)).forEach((e, t) => {
					e && (o.props[`props_${t}`] = e);
				}),
				(this.current.page && r.path === this.current.page.path && !l.query) || (o.props.page = r),
				o
			);
		} catch (c) {
			if (t) throw t;
			return await this._load({
				status: 500,
				error: c,
				nodes: [],
				page: { host: r.host, path: r.path, query: r.query, params: {} }
			});
		}
	}
}
async function je({ paths: e, target: t, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new Ne({ base: e.base, routes: Se }),
		l = new Pe({ Root: le, layout: qe, target: t, session: s, host: r });
	n && (await l.start(n)), a && o.init(l), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { je as start };
