var t = Object.defineProperty,
	e = Object.prototype.hasOwnProperty,
	s = Object.getOwnPropertySymbols,
	r = Object.prototype.propertyIsEnumerable,
	a = (e, s, r) =>
		s in e ? t(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[s] = r),
	n = (t, n) => {
		for (var o in n || (n = {})) e.call(n, o) && a(t, o, n[o]);
		if (s) for (var o of s(n)) r.call(n, o) && a(t, o, n[o]);
		return t;
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
	j as y,
	k as w,
	l as $,
	n as E,
	m as x,
	o as _,
	p as b,
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
function Y(t) {
	let e,
		s,
		r = t[1].stack + '';
	return {
		c() {
			(e = i('pre')), (s = h(r));
		},
		l(t) {
			e = u(t, 'PRE', {});
			var a = p(e);
			(s = f(a, r)), a.forEach(d);
		},
		m(t, r) {
			g(t, e, r), v(e, s);
		},
		p(t, e) {
			2 & e && r !== (r = t[1].stack + '') && m(s, r);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Z(t) {
	let e,
		s,
		r,
		a,
		n,
		o,
		c,
		l = t[1].message + '',
		x = t[1].stack && Y(t);
	return {
		c() {
			(e = i('h1')),
				(s = h(t[0])),
				(r = y()),
				(a = i('p')),
				(n = h(l)),
				(o = y()),
				x && x.c(),
				(c = w());
		},
		l(i) {
			e = u(i, 'H1', {});
			var h = p(e);
			(s = f(h, t[0])), h.forEach(d), (r = $(i)), (a = u(i, 'P', {}));
			var g = p(a);
			(n = f(g, l)), g.forEach(d), (o = $(i)), x && x.l(i), (c = w());
		},
		m(t, l) {
			g(t, e, l), v(e, s), g(t, r, l), g(t, a, l), v(a, n), g(t, o, l), x && x.m(t, l), g(t, c, l);
		},
		p(t, [e]) {
			1 & e && m(s, t[0]),
				2 & e && l !== (l = t[1].message + '') && m(n, l),
				t[1].stack
					? x
						? x.p(t, e)
						: ((x = Y(t)), x.c(), x.m(c.parentNode, c))
					: x && (x.d(1), (x = null));
		},
		i: E,
		o: E,
		d(t) {
			t && d(e), t && d(r), t && d(a), t && d(o), x && x.d(t), t && d(c);
		}
	};
}
function X(t, e, s) {
	let { status: r } = e,
		{ error: a } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)), 'error' in t && s(1, (a = t.error));
		}),
		[r, a]
	);
}
class Q extends o {
	constructor(t) {
		super(), c(this, t, X, Z, l, { status: 0, error: 1 });
	}
}
function tt(t) {
	let e, s, r;
	const a = [t[4] || {}];
	var n = t[2][1];
	function o(t) {
		let e = {};
		for (let s = 0; s < a.length; s += 1) e = x(e, a[s]);
		return { props: e };
	}
	return (
		n && (e = new n(o())),
		{
			c() {
				e && b(e.$$.fragment), (s = w());
			},
			l(t) {
				e && k(e.$$.fragment, t), (s = w());
			},
			m(t, a) {
				e && L(e, t, a), g(t, s, a), (r = !0);
			},
			p(t, r) {
				const c = 16 & r ? V(a, [q(t[4] || {})]) : {};
				if (n !== (n = t[2][1])) {
					if (e) {
						O();
						const t = e;
						C(t.$$.fragment, 1, 0, () => {
							M(t, 1);
						}),
							z();
					}
					n
						? ((e = new n(o())), b(e.$$.fragment), A(e.$$.fragment, 1), L(e, s.parentNode, s))
						: (e = null);
				} else n && e.$set(c);
			},
			i(t) {
				r || (e && A(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				e && C(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(s), e && M(e, t);
			}
		}
	);
}
function et(t) {
	let e, s;
	return (
		(e = new Q({ props: { status: t[0], error: t[1] } })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, r) {
				L(e, t, r), (s = !0);
			},
			p(t, s) {
				const r = {};
				1 & s && (r.status = t[0]), 2 & s && (r.error = t[1]), e.$set(r);
			},
			i(t) {
				s || (A(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				C(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function st(t) {
	let e, s, r, a;
	const n = [et, tt],
		o = [];
	function c(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(s = o[e] = n[e](t)),
		{
			c() {
				s.c(), (r = w());
			},
			l(t) {
				s.l(t), (r = w());
			},
			m(t, s) {
				o[e].m(t, s), g(t, r, s), (a = !0);
			},
			p(t, a) {
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (O(),
						  C(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  z(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  A(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (A(s), (a = !0));
			},
			o(t) {
				C(s), (a = !1);
			},
			d(t) {
				o[e].d(t), t && d(r);
			}
		}
	);
}
function rt(t) {
	let e,
		s = t[6] && at(t);
	return {
		c() {
			(e = i('div')), s && s.c(), this.h();
		},
		l(t) {
			e = u(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var r = p(e);
			s && s.l(r), r.forEach(d), this.h();
		},
		h() {
			_(e, 'id', 'svelte-announcer'),
				_(e, 'aria-live', 'assertive'),
				_(e, 'aria-atomic', 'true'),
				_(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			g(t, e, r), s && s.m(e, null);
		},
		p(t, r) {
			t[6] ? (s ? s.p(t, r) : ((s = at(t)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(t) {
			t && d(e), s && s.d();
		}
	};
}
function at(t) {
	let e, s;
	return {
		c() {
			(e = h('Navigated to ')), (s = h(t[7]));
		},
		l(r) {
			(e = f(r, 'Navigated to ')), (s = f(r, t[7]));
		},
		m(t, r) {
			g(t, e, r), g(t, s, r);
		},
		p(t, e) {
			128 & e && m(s, t[7]);
		},
		d(t) {
			t && d(e), t && d(s);
		}
	};
}
function nt(t) {
	let e, s, r, a;
	const n = [t[3] || {}];
	let o = { $$slots: { default: [st] }, $$scope: { ctx: t } };
	for (let l = 0; l < n.length; l += 1) o = x(o, n[l]);
	e = new t[8]({ props: o });
	let c = t[5] && rt(t);
	return {
		c() {
			b(e.$$.fragment), (s = y()), c && c.c(), (r = w());
		},
		l(t) {
			k(e.$$.fragment, t), (s = $(t)), c && c.l(t), (r = w());
		},
		m(t, n) {
			L(e, t, n), g(t, s, n), c && c.m(t, n), g(t, r, n), (a = !0);
		},
		p(t, [s]) {
			const a = 8 & s ? V(n, [q(t[3] || {})]) : {};
			2071 & s && (a.$$scope = { dirty: s, ctx: t }),
				e.$set(a),
				t[5]
					? c
						? c.p(t, s)
						: ((c = rt(t)), c.c(), c.m(r.parentNode, r))
					: c && (c.d(1), (c = null));
		},
		i(t) {
			a || (A(e.$$.fragment, t), (a = !0));
		},
		o(t) {
			C(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			M(e, t), t && d(s), c && c.d(t), t && d(r);
		}
	};
}
function ot(t, e, s) {
	let { status: r } = e,
		{ error: a } = e,
		{ stores: n } = e,
		{ page: o } = e,
		{ components: c } = e,
		{ props_0: l = null } = e,
		{ props_1: i = null } = e;
	const h = c[0];
	S('__svelte__', n), R(n.page.notify);
	let u = !1,
		p = !1,
		f = null;
	return (
		N(() => {
			const t = n.page.subscribe(() => {
				u && (s(6, (p = !0)), s(7, (f = document.title)));
			});
			return s(5, (u = !0)), t;
		}),
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)),
				'error' in t && s(1, (a = t.error)),
				'stores' in t && s(9, (n = t.stores)),
				'page' in t && s(10, (o = t.page)),
				'components' in t && s(2, (c = t.components)),
				'props_0' in t && s(3, (l = t.props_0)),
				'props_1' in t && s(4, (i = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && n.page.set(o);
		}),
		[r, a, c, l, i, u, p, f, h, n, o]
	);
}
class ct extends o {
	constructor(t) {
		super(),
			c(this, t, ot, nt, l, {
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
let lt;
const it = {},
	ht = function (t, e) {
		if (!e) return t();
		if (void 0 === lt) {
			const t = document.createElement('link').relList;
			lt = t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			e.map((t) => {
				if (t in it) return;
				it[t] = !0;
				const e = t.endsWith('.css'),
					s = e ? '[rel="stylesheet"]' : '';
				if (document.querySelector(`link[href="${t}"]${s}`)) return;
				const r = document.createElement('link');
				return (
					(r.rel = e ? 'stylesheet' : lt),
					e || ((r.as = 'script'), (r.crossOrigin = '')),
					(r.href = t),
					document.head.appendChild(r),
					e
						? new Promise((t, e) => {
								r.addEventListener('load', t), r.addEventListener('error', e);
						  })
						: void 0
				);
			})
		).then(() => t());
	};
function ut(t) {
	const e = (e) => {
		!t ||
			t.contains(e.target) ||
			e.defaultPrevented ||
			t.dispatchEvent(new CustomEvent('click_outside', t));
	};
	return (
		document.addEventListener('click', e, !0),
		{
			destroy() {
				document.removeEventListener('click', e, !0);
			}
		}
	);
}
function pt(t) {
	let e, s, r, a, n, o, c, l, i, h, f;
	return {
		c() {
			(e = I('svg')),
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
		l(t) {
			e = u(t, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var g = p(e);
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
			var y = p(c);
			(l = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(l).forEach(d),
				(i = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(i).forEach(d),
				(h = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(h).forEach(d),
				(f = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(f).forEach(d),
				y.forEach(d),
				v.forEach(d),
				g.forEach(d),
				this.h();
		},
		h() {
			_(r, 'cx', '25'),
				_(r, 'cy', '25'),
				_(r, 'r', '25'),
				_(r, 'class', 'svelte-1fhk7g3'),
				_(n, 'cx', '12.5'),
				_(n, 'cy', '25'),
				_(n, 'r', '12.5'),
				_(n, 'class', 'svelte-1fhk7g3'),
				_(o, 'cx', '38'),
				_(o, 'cy', '25'),
				_(o, 'r', '12.5'),
				_(o, 'class', 'svelte-1fhk7g3'),
				_(a, 'class', 'svelte-1fhk7g3'),
				_(l, 'cx', '6.5'),
				_(l, 'cy', '25'),
				_(l, 'r', '6.25'),
				_(l, 'class', 'svelte-1fhk7g3'),
				_(i, 'cx', '19'),
				_(i, 'cy', '25'),
				_(i, 'r', '6.25'),
				_(i, 'class', 'svelte-1fhk7g3'),
				_(h, 'cx', '31.5'),
				_(h, 'cy', '25'),
				_(h, 'r', '6.25'),
				_(h, 'class', 'svelte-1fhk7g3'),
				_(f, 'cx', '44'),
				_(f, 'cy', '25'),
				_(f, 'r', '6.25'),
				_(f, 'class', 'svelte-1fhk7g3'),
				_(c, 'class', 'svelte-1fhk7g3'),
				_(s, 'class', 'svelte-1fhk7g3'),
				_(e, 'class', 'logo svelte-1fhk7g3'),
				_(e, 'width', '51'),
				_(e, 'height', '51');
		},
		m(t, u) {
			g(t, e, u),
				v(e, s),
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
		d(t) {
			t && d(e);
		}
	};
}
class ft extends o {
	constructor(t) {
		super(), c(this, t, null, pt, l, {});
	}
}
function dt(t, e, s) {
	const r = t.slice();
	return (r[9] = e[s].url), (r[10] = e[s].name), r;
}
function gt(t, e, s) {
	const r = t.slice();
	return (r[9] = e[s].url), (r[10] = e[s].name), r;
}
function vt(t) {
	let e,
		s,
		r = J,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = yt(dt(t, r, n));
	return {
		c() {
			e = i('nav');
			for (let t = 0; t < a.length; t += 1) a[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'NAV', { class: !0 });
			var s = p(e);
			for (let e = 0; e < a.length; e += 1) a[e].l(s);
			s.forEach(d), this.h();
		},
		h() {
			_(e, 'class', (s = B(t[4][t[1]]) + ' svelte-4i5gzg'));
		},
		m(t, s) {
			g(t, e, s);
			for (let r = 0; r < a.length; r += 1) a[r].m(e, null);
		},
		p(t, n) {
			if (1 & n) {
				let s;
				for (r = J, s = 0; s < r.length; s += 1) {
					const o = dt(t, r, s);
					a[s] ? a[s].p(o, n) : ((a[s] = yt(o)), a[s].c(), a[s].m(e, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = B(t[4][t[1]]) + ' svelte-4i5gzg') && _(e, 'class', s);
		},
		i: E,
		o: E,
		d(t) {
			t && d(e), H(a, t);
		}
	};
}
function mt(t) {
	let e, s, r, a, n, o, c, l, h;
	r = new ft({});
	let f = J,
		m = [];
	for (let i = 0; i < f.length; i += 1) m[i] = wt(gt(t, f, i));
	return {
		c() {
			(e = i('div')), (s = i('div')), b(r.$$.fragment), (a = y()), (n = i('nav'));
			for (let t = 0; t < m.length; t += 1) m[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'DIV', { class: !0 });
			var o = p(e);
			s = u(o, 'DIV', { class: !0 });
			var c = p(s);
			k(r.$$.fragment, c), c.forEach(d), (a = $(o)), (n = u(o, 'NAV', { class: !0 }));
			var l = p(n);
			for (let e = 0; e < m.length; e += 1) m[e].l(l);
			l.forEach(d), o.forEach(d), this.h();
		},
		h() {
			_(s, 'class', 'ButtonNav svelte-4i5gzg'),
				_(n, 'class', (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-4i5gzg')),
				_(e, 'class', 'Variante_1 svelte-4i5gzg');
		},
		m(o, i) {
			g(o, e, i), v(e, s), L(r, s, null), v(e, a), v(e, n);
			for (let t = 0; t < m.length; t += 1) m[t].m(n, null);
			(c = !0),
				l ||
					((h = [j(s, 'click', t[7]), D(ut.call(null, e)), j(e, 'click_outside', t[3])]), (l = !0));
		},
		p(t, e) {
			if (9 & e) {
				let s;
				for (f = J, s = 0; s < f.length; s += 1) {
					const r = gt(t, f, s);
					m[s] ? m[s].p(r, e) : ((m[s] = wt(r)), m[s].c(), m[s].m(n, null));
				}
				for (; s < m.length; s += 1) m[s].d(1);
				m.length = f.length;
			}
			(!c ||
				(4 & e && o !== (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-4i5gzg'))) &&
				_(n, 'class', o);
		},
		i(t) {
			c || (A(r.$$.fragment, t), (c = !0));
		},
		o(t) {
			C(r.$$.fragment, t), (c = !1);
		},
		d(t) {
			t && d(e), M(r), H(m, t), (l = !1), U(h);
		}
	};
}
function yt(t) {
	let e,
		s,
		r,
		a,
		n,
		o = t[10] + '';
	return {
		c() {
			(e = i('a')), (s = h(o)), (r = y()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0 });
			var a = p(e);
			(s = f(a, o)), (r = $(a)), a.forEach(d), this.h();
		},
		h() {
			_(e, 'href', t[9]), _(e, 'class', 'svelte-4i5gzg'), T(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			g(o, e, c), v(e, s), v(e, r), a || ((n = j(e, 'click', t[6])), (a = !0));
		},
		p(t, s) {
			1 & s && T(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (a = !1), n();
		}
	};
}
function wt(t) {
	let e,
		s,
		r,
		a,
		n,
		o = t[10] + '';
	return {
		c() {
			(e = i('a')), (s = h(o)), (r = y()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0, role: !0 });
			var a = p(e);
			(s = f(a, o)), (r = $(a)), a.forEach(d), this.h();
		},
		h() {
			_(e, 'href', t[9]),
				_(e, 'class', 'NavItem svelte-4i5gzg'),
				_(e, 'role', 'navigation'),
				T(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			g(o, e, c),
				v(e, s),
				v(e, r),
				a || ((n = [j(e, 'click', t[5]), j(e, 'click', t[3])]), (a = !0));
		},
		p(t, s) {
			1 & s && T(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (a = !1), U(n);
		}
	};
}
function $t(t) {
	let e, s, r, a;
	const n = [mt, vt],
		o = [];
	function c(t, e) {
		return 1 === t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(s = o[e] = n[e](t)),
		{
			c() {
				s.c(), (r = w());
			},
			l(t) {
				s.l(t), (r = w());
			},
			m(t, s) {
				o[e].m(t, s), g(t, r, s), (a = !0);
			},
			p(t, [a]) {
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (O(),
						  C(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  z(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  A(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (A(s), (a = !0));
			},
			o(t) {
				C(s), (a = !1);
			},
			d(t) {
				o[e].d(t), t && d(r);
			}
		}
	);
}
function Et(t, e, s) {
	let { current_page: r } = e,
		a = !1;
	let { variante: n = 0 } = e;
	return (
		(t.$$set = (t) => {
			'current_page' in t && s(0, (r = t.current_page)), 'variante' in t && s(1, (n = t.variante));
		}),
		[
			r,
			n,
			a,
			function () {
				s(2, (a = !1));
			},
			['Variante_0', 'Variante_1', 'Variante_2'],
			function (e) {
				P(t, e);
			},
			function (e) {
				P(t, e);
			},
			() => {
				s(2, (a = !a));
			}
		]
	);
}
class xt extends o {
	constructor(t) {
		super(), c(this, t, Et, $t, l, { current_page: 0, variante: 1 });
	}
}
function _t(t) {
	let e,
		s,
		r,
		a,
		n,
		o,
		c,
		l,
		m,
		w,
		x,
		b,
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
		tt,
		et,
		st;
	return {
		c() {
			(e = i('aside')),
				(s = i('small')),
				(r = h('Follow me at:')),
				(a = y()),
				(n = i('ul')),
				(o = i('li')),
				(c = i('a')),
				(l = I('svg')),
				(m = I('title')),
				(w = h('Instagram')),
				(x = I('circle')),
				(b = I('path')),
				(k = I('path')),
				(L = y()),
				(V = i('a')),
				(q = I('svg')),
				(A = I('title')),
				(C = h('Linkedin')),
				(M = I('path')),
				(S = y()),
				(R = i('a')),
				(N = I('svg')),
				(O = I('title')),
				(z = h('Algunos artículos en Medium')),
				(P = I('path')),
				(T = y()),
				(j = i('a')),
				(B = I('svg')),
				(H = I('title')),
				(U = h('Twitter')),
				(D = I('path')),
				(K = y()),
				(F = i('a')),
				(G = I('svg')),
				(W = I('title')),
				(J = h('Mi repositorio en Github')),
				(Y = I('path')),
				(Z = y()),
				(X = i('a')),
				(Q = I('svg')),
				(tt = I('title')),
				(et = h('Facebook')),
				(st = I('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'ASIDE', { class: !0 });
			var i = p(e);
			s = u(i, 'SMALL', { class: !0 });
			var h = p(s);
			(r = f(h, 'Follow me at:')), h.forEach(d), (a = $(i)), (n = u(i, 'UL', { class: !0 }));
			var g = p(n);
			o = u(g, 'LI', { class: !0 });
			var v = p(o);
			c = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var y = p(c);
			l = u(y, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var E = p(l);
			m = u(E, 'title', { class: !0 }, 1);
			var _ = p(m);
			(w = f(_, 'Instagram')),
				_.forEach(d),
				(x = u(E, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(x).forEach(d),
				(b = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(b).forEach(d),
				(k = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(k).forEach(d),
				E.forEach(d),
				y.forEach(d),
				(L = $(v)),
				(V = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var I = p(V);
			q = u(I, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var rt = p(q);
			A = u(rt, 'title', { class: !0 }, 1);
			var at = p(A);
			(C = f(at, 'Linkedin')),
				at.forEach(d),
				(M = u(rt, 'path', { d: !0, class: !0 }, 1)),
				p(M).forEach(d),
				rt.forEach(d),
				I.forEach(d),
				(S = $(v)),
				(R = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var nt = p(R);
			N = u(nt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ot = p(N);
			O = u(ot, 'title', { class: !0 }, 1);
			var ct = p(O);
			(z = f(ct, 'Algunos artículos en Medium')),
				ct.forEach(d),
				(P = u(ot, 'path', { d: !0, class: !0 }, 1)),
				p(P).forEach(d),
				ot.forEach(d),
				nt.forEach(d),
				(T = $(v)),
				(j = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var lt = p(j);
			B = u(lt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var it = p(B);
			H = u(it, 'title', { class: !0 }, 1);
			var ht = p(H);
			(U = f(ht, 'Twitter')),
				ht.forEach(d),
				(D = u(it, 'path', { d: !0, class: !0 }, 1)),
				p(D).forEach(d),
				it.forEach(d),
				lt.forEach(d),
				(K = $(v)),
				(F = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ut = p(F);
			G = u(ut, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var pt = p(G);
			W = u(pt, 'title', { class: !0 }, 1);
			var ft = p(W);
			(J = f(ft, 'Mi repositorio en Github')),
				ft.forEach(d),
				(Y = u(pt, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				p(Y).forEach(d),
				pt.forEach(d),
				ut.forEach(d),
				(Z = $(v)),
				(X = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var dt = p(X);
			Q = u(dt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var gt = p(Q);
			tt = u(gt, 'title', { class: !0 }, 1);
			var vt = p(tt);
			(et = f(vt, 'Facebook')),
				vt.forEach(d),
				(st = u(gt, 'path', { d: !0, class: !0 }, 1)),
				p(st).forEach(d),
				gt.forEach(d),
				dt.forEach(d),
				v.forEach(d),
				g.forEach(d),
				i.forEach(d),
				this.h();
		},
		h() {
			_(s, 'class', 'svelte-s9r365'),
				_(m, 'class', 'svelte-s9r365'),
				_(x, 'cx', '12.145'),
				_(x, 'cy', '3.892'),
				_(x, 'r', '0.96'),
				_(x, 'class', 'svelte-s9r365'),
				_(
					b,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				_(b, 'class', 'svelte-s9r365'),
				_(
					k,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				_(k, 'class', 'svelte-s9r365'),
				_(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(l, 'viewBox', '0 0 16 16'),
				_(l, 'class', 'svelte-s9r365'),
				_(c, 'href', 'https://www.instagram.com/t.o.d.h/'),
				_(c, 'target', '_blank'),
				_(c, 'rel', 'noopener'),
				_(c, 'class', 'svelte-s9r365'),
				_(A, 'class', 'svelte-s9r365'),
				_(
					M,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				_(M, 'class', 'svelte-s9r365'),
				_(q, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(q, 'viewBox', '0 0 16 16'),
				_(q, 'class', 'svelte-s9r365'),
				_(V, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				_(V, 'target', '_blank'),
				_(V, 'rel', 'noopener'),
				_(V, 'class', 'svelte-s9r365'),
				_(O, 'class', 'svelte-s9r365'),
				_(
					P,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				_(P, 'class', 'svelte-s9r365'),
				_(N, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(N, 'viewBox', '0 0 16 16'),
				_(N, 'class', 'svelte-s9r365'),
				_(R, 'href', 'https://medium.com/@todh'),
				_(R, 'target', '_blank'),
				_(R, 'rel', 'noopener'),
				_(R, 'class', 'svelte-s9r365'),
				_(H, 'class', 'svelte-s9r365'),
				_(
					D,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				_(D, 'class', 'svelte-s9r365'),
				_(B, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(B, 'viewBox', '0 0 16 16'),
				_(B, 'class', 'svelte-s9r365'),
				_(j, 'href', 'https://twitter.com/t0tinspire'),
				_(j, 'target', '_blank'),
				_(j, 'rel', 'noopener'),
				_(j, 'class', 'svelte-s9r365'),
				_(W, 'class', 'svelte-s9r365'),
				_(Y, 'fill-rule', 'evenodd'),
				_(Y, 'clip-rule', 'evenodd'),
				_(
					Y,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				_(Y, 'class', 'svelte-s9r365'),
				_(G, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(G, 'viewBox', '0 0 16 16'),
				_(G, 'class', 'svelte-s9r365'),
				_(F, 'href', 'https://github.com/t0t'),
				_(F, 'target', '_blank'),
				_(F, 'rel', 'noopener'),
				_(F, 'class', 'svelte-s9r365'),
				_(tt, 'class', 'svelte-s9r365'),
				_(
					st,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				_(st, 'class', 'svelte-s9r365'),
				_(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(Q, 'viewBox', '0 0 16 16'),
				_(Q, 'class', 'svelte-s9r365'),
				_(X, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				_(X, 'target', '_blank'),
				_(X, 'rel', 'noopener'),
				_(X, 'class', 'svelte-s9r365'),
				_(o, 'class', 'svelte-s9r365'),
				_(n, 'class', 'svelte-s9r365'),
				_(e, 'class', 'Links svelte-s9r365');
		},
		m(t, i) {
			g(t, e, i),
				v(e, s),
				v(s, r),
				v(e, a),
				v(e, n),
				v(n, o),
				v(o, c),
				v(c, l),
				v(l, m),
				v(m, w),
				v(l, x),
				v(l, b),
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
				v(Q, tt),
				v(tt, et),
				v(Q, st);
		},
		p: E,
		i: E,
		o: E,
		d(t) {
			t && d(e);
		}
	};
}
class bt extends o {
	constructor(t) {
		super(), c(this, t, null, _t, l, {});
	}
}
function kt(t) {
	let e, s, r;
	return (
		(s = new bt({})),
		{
			c() {
				(e = i('footer')), b(s.$$.fragment), this.h();
			},
			l(t) {
				e = u(t, 'FOOTER', { class: !0 });
				var r = p(e);
				k(s.$$.fragment, r), r.forEach(d), this.h();
			},
			h() {
				_(e, 'class', 'svelte-lti6kl');
			},
			m(t, a) {
				g(t, e, a), L(s, e, null), (r = !0);
			},
			p: E,
			i(t) {
				r || (A(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				C(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(e), M(s);
			}
		}
	);
}
class Lt extends o {
	constructor(t) {
		super(), c(this, t, null, kt, l, {});
	}
}
function Vt(t) {
	let e, s, r, a, n, o, c, l;
	(document.title = e = 'SvelteKit UI - ' + t[0]),
		(a = new xt({ props: { current_page: t[0], variante: 1 } })),
		a.$on('click', t[1]);
	const h = t[3].default,
		f = K(h, t, t[2], null);
	return (
		(c = new Lt({})),
		{
			c() {
				(s = y()),
					(r = i('main')),
					b(a.$$.fragment),
					(n = y()),
					f && f.c(),
					(o = y()),
					b(c.$$.fragment);
			},
			l(t) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(s = $(t)),
					(r = u(t, 'MAIN', {}));
				var e = p(r);
				k(a.$$.fragment, e), (n = $(e)), f && f.l(e), (o = $(e)), k(c.$$.fragment, e), e.forEach(d);
			},
			m(t, e) {
				g(t, s, e),
					g(t, r, e),
					L(a, r, null),
					v(r, n),
					f && f.m(r, null),
					v(r, o),
					L(c, r, null),
					(l = !0);
			},
			p(t, [s]) {
				(!l || 1 & s) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e);
				const r = {};
				1 & s && (r.current_page = t[0]),
					a.$set(r),
					f && f.p && 4 & s && G(f, h, t, t[2], s, null, null);
			},
			i(t) {
				l || (A(a.$$.fragment, t), A(f, t), A(c.$$.fragment, t), (l = !0));
			},
			o(t) {
				C(a.$$.fragment, t), C(f, t), C(c.$$.fragment, t), (l = !1);
			},
			d(t) {
				t && d(s), t && d(r), M(a), f && f.d(t), M(c);
			}
		}
	);
}
function qt(t, e, s) {
	let { $$slots: r = {}, $$scope: a } = e,
		n = '';
	return (
		(t.$$set = (t) => {
			'$$scope' in t && s(2, (a = t.$$scope));
		}),
		[
			n,
			(t) => {
				s(0, (n = t.srcElement.firstChild.data));
			},
			a,
			r
		]
	);
}
var At = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(t) {
			super(), c(this, t, qt, Vt, l, {});
		}
	}
});
const Ct = [
		() =>
			ht(() => import('./pages/index.svelte-5022cc0c.js'), [
				'/_app/pages/index.svelte-5022cc0c.js',
				'/_app/assets/pages/index.svelte-4dca6470.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-baa7aeae.js',
				'/_app/assets/Cover-7f1543b7.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-05e6f813.js',
				'/_app/assets/Img-28c88a41.css',
				'/_app/chunks/pages-26a130a6.js'
			]),
		() =>
			ht(() => import('./pages/philosophy/index.svelte-22311703.js'), [
				'/_app/pages/philosophy/index.svelte-22311703.js',
				'/_app/assets/pages/philosophy/index.svelte-b253a867.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-baa7aeae.js',
				'/_app/assets/Cover-7f1543b7.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css'
			]),
		() =>
			ht(() => import('./pages/artworks/index.svelte-f715c19c.js'), [
				'/_app/pages/artworks/index.svelte-f715c19c.js',
				'/_app/assets/pages/artworks/index.svelte-8afe0abf.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-baa7aeae.js',
				'/_app/assets/Cover-7f1543b7.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-05e6f813.js',
				'/_app/assets/Img-28c88a41.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css'
			]),
		() =>
			ht(() => import('./pages/about/index.svelte-072ef0c9.js'), [
				'/_app/pages/about/index.svelte-072ef0c9.js',
				'/_app/assets/pages/about/index.svelte-a790baa5.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			ht(() => import('./pages/lab/index.svelte-22f89fc6.js'), [
				'/_app/pages/lab/index.svelte-22f89fc6.js',
				'/_app/assets/pages/lab/index.svelte-1b128f89.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-baa7aeae.js',
				'/_app/assets/Cover-7f1543b7.css',
				'/_app/chunks/Section-db7b341b.js',
				'/_app/assets/Section-4b036539.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	Mt = [
		[/^\/$/, [Ct[0]]],
		[/^\/philosophy\/?$/, [Ct[1]]],
		[/^\/artworks\/?$/, [Ct[2]]],
		[/^\/about\/?$/, [Ct[3]]],
		[/^\/lab\/?$/, [Ct[4]]]
	];
function St() {
	return { x: pageXOffset, y: pageYOffset };
}
function Rt(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class Nt {
	constructor({ base: t, routes: e }) {
		(this.base = t), (this.routes = e);
	}
	init(t) {
		let e;
		(this.renderer = t),
			(t.router = this),
			(this.enabled = !0),
			'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			}),
			addEventListener('scroll', () => {
				clearTimeout(e),
					(e = setTimeout(() => {
						const t = n(n({}, history.state || {}), { 'sveltekit:scroll': St() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const s = (t) => {
			const e = Rt(t.target);
			e && e.hasAttribute('sveltekit:prefetch') && this.prefetch(new URL(e.href));
		};
		let r;
		addEventListener('touchstart', s),
			addEventListener('mousemove', (t) => {
				clearTimeout(r),
					(r = setTimeout(() => {
						s(t);
					}, 20));
			}),
			addEventListener('click', (t) => {
				if (!this.enabled) return;
				if (t.button || 1 !== t.which) return;
				if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
				if (t.defaultPrevented) return;
				const e = Rt(t.target);
				if (!e) return;
				if (!e.href) return;
				const s = 'object' == typeof e.href && 'SVGAnimatedString' === e.href.constructor.name,
					r = String(s ? e.href.baseVal : e.href);
				if (r === location.href) return void (location.hash || t.preventDefault());
				if (e.hasAttribute('download') || 'external' === e.getAttribute('rel')) return;
				if (s ? e.target.baseVal : e.target) return;
				const a = new URL(r);
				if (a.pathname === location.pathname && a.search === location.search) return;
				const n = this.parse(a);
				if (n) {
					const s = e.hasAttribute('sveltekit:noscroll');
					history.pushState({}, '', a.href),
						this._navigate(n, s ? St() : null, [], a.hash),
						t.preventDefault();
				}
			}),
			addEventListener('popstate', (t) => {
				if (t.state && this.enabled) {
					const e = new URL(location.href),
						s = this.parse(e);
					s ? this._navigate(s, t.state['sveltekit:scroll'], []) : (location.href = location.href);
				}
			}),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	parse(t) {
		if (t.origin !== location.origin) return null;
		if (!t.pathname.startsWith(this.base)) return null;
		const e = t.pathname.slice(this.base.length) || '/',
			s = this.routes.filter(([t]) => t.test(e));
		if (s.length > 0) {
			const r = new URLSearchParams(t.search);
			return { id: `${e}?${r}`, routes: s, path: e, query: r };
		}
	}
	async goto(t, { noscroll: e = !1, replaceState: s = !1 } = {}, r) {
		if (this.enabled) {
			const a = new URL(
					t,
					(function (t) {
						let e = t.baseURI;
						if (!e) {
							const s = t.getElementsByTagName('base');
							e = s.length ? s[0].href : t.URL;
						}
						return e;
					})(document)
				),
				n = this.parse(a);
			if (n)
				return (
					history[s ? 'replaceState' : 'pushState']({}, '', t),
					this._navigate(n, e ? St() : null, r, a.hash)
				);
		}
		return (location.href = t), new Promise(() => {});
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(t) {
		const e = this.parse(t);
		if (e) return this.renderer.load(e);
		throw new Error(`Could not prefetch ${t.href}`);
	}
	async _navigate(t, e, s, r) {
		this.renderer.notify({ path: t.path, query: t.query }),
			location.pathname.endsWith('/') &&
				'/' !== location.pathname &&
				history.replaceState({}, '', `${location.pathname.slice(0, -1)}${location.search}`),
			await this.renderer.update(t, s),
			document.body.focus();
		const a = r && document.getElementById(r.slice(1));
		e
			? scrollTo(e.x, e.y)
			: a
			? scrollTo(0, a.getBoundingClientRect().top + scrollY)
			: scrollTo(0, 0);
	}
}
function Ot(t) {
	if (t.error) {
		const e = 'string' == typeof t.error ? new Error(t.error) : t.error,
			s = t.status;
		return e instanceof Error
			? !s || s < 400 || s > 599
				? (console.warn(
						'"error" returned from load() without a valid status code — defaulting to 500'
				  ),
				  { status: 500, error: e })
				: { status: s, error: e }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`
					)
			  };
	}
	if (t.redirect) {
		if (!t.status || 3 !== Math.floor(t.status / 100))
			return {
				status: 500,
				error: new Error(
					'"redirect" property returned from load() must be accompanied by a 3xx status code'
				)
			};
		if ('string' != typeof t.redirect)
			return {
				status: 500,
				error: new Error('"redirect" property returned from load() must be a string')
			};
	}
	return t;
}
function zt(t) {
	const e = W(t);
	let s = !0;
	return {
		notify: function () {
			(s = !0), e.update((t) => t);
		},
		set: function (t) {
			(s = !1), e.set(t);
		},
		subscribe: function (t) {
			let r;
			return e.subscribe((e) => {
				(void 0 === r || (s && e !== r)) && t((r = e));
			});
		}
	};
}
function It(t, a) {
	const n = 'string' == typeof t ? t : t.url,
		o = document.querySelector(`script[type="svelte-data"][url="${n}"]`);
	if (o) {
		const t = JSON.parse(o.textContent),
			{ body: a } = t,
			n = ((t, a) => {
				var n = {};
				for (var o in t) e.call(t, o) && a.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && s) for (var o of s(t)) a.indexOf(o) < 0 && r.call(t, o) && (n[o] = t[o]);
				return n;
			})(t, ['body']);
		return Promise.resolve(new Response(a, n));
	}
	return fetch(t, a);
}
class Pt {
	constructor({ Root: t, layout: e, target: s, session: r, host: a }) {
		(this.Root = t),
			(this.layout = e),
			(this.host = a),
			(this.router = null),
			(this.target = s),
			(this.started = !1),
			(this.current = { page: null, query: null, session_changed: !1, nodes: [], contexts: [] }),
			(this.caches = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: zt({}), navigating: W(null), session: W(r) }),
			(this.$session = null),
			(this.root = null);
		let n = !1;
		this.stores.session.subscribe(async (t) => {
			if (((this.$session = t), !n)) return;
			this.current.session_changed = !0;
			const e = this.router.parse(new URL(location.href));
			this.update(e, []);
		}),
			(n = !0);
	}
	async start(t) {
		const e = await this._load(t);
		e.redirect ? (location.href = new URL(e.redirect, location.href).href) : this._init(e);
	}
	notify({ path: t, query: e }) {
		dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.started &&
				this.stores.navigating.set({
					from: { path: this.current.page.path, query: this.current.page.query },
					to: { path: t, query: e }
				});
	}
	async update(t, e) {
		const s = (this.token = {}),
			r = await this._get_navigation_result(t);
		if (s !== this.token) return;
		if (r.reload) location.reload();
		else if (r.redirect) {
			if (!(e.length > 10 || e.includes(t.path)))
				return void (this.router
					? this.router.goto(r.redirect, { replaceState: !0 }, [...e, t.path])
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
	load(t) {
		return (
			(this.loading.promise = this._get_navigation_result(t)),
			(this.loading.id = t.id),
			this.loading.promise
		);
	}
	async _get_navigation_result(t) {
		if (this.loading.id === t.id) return this.loading.promise;
		for (let e = 0; e < t.routes.length; e += 1) {
			const s = t.routes[e],
				[r, a, n] = s;
			if (1 === s.length) return { reload: !0 };
			let o = e + 1;
			for (; o < t.routes.length; ) {
				const e = t.routes[o];
				if (e[0].toString() !== r.toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (o += 1);
			}
			const c = a.map((t) => t()),
				l = {
					host: this.host,
					path: t.path,
					params: n ? n(s[0].exec(t.path)) : {},
					query: t.query
				},
				i = await this._load({ status: 200, error: null, nodes: c, page: l });
			if (i) return i;
		}
		return await this._load({
			status: 404,
			error: new Error(`Not found: ${t.path}`),
			nodes: [],
			page: { host: this.host, path: t.path, query: t.query, params: {} }
		});
	}
	_init(t) {
		this.current = t.state;
		const e = document.querySelector('style[data-svelte]');
		e && e.remove(),
			(this.root = new this.Root({
				target: this.target,
				props: n({ stores: this.stores }, t.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _load({ status: t, error: e, nodes: s, page: r }) {
		const a = r.query.toString(),
			o = {
				state: { page: r, query: a, session_changed: !1, nodes: [], contexts: [] },
				props: { status: t, error: e, components: [] }
			},
			c = {
				path: !this.current.page || r.path !== this.current.page.path,
				params: Object.keys(r.params).filter(
					(t) => !this.current.page || this.current.page.params[t] !== r.params[t]
				),
				query: a !== this.current.query,
				session: this.current.session_changed,
				context: !1
			};
		try {
			const t = [this.layout, ...s],
				l = [];
			let i;
			for (let s = 0; s < t.length; s += 1) {
				const h = this.current.nodes[s],
					u = this.current.contexts[s],
					p = await t[s];
				if (((o.props.components[s] = p.default), p.preload))
					throw new Error(
						'preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading'
					);
				if (
					!h ||
					p !== h.module ||
					(c.path && h.uses.path) ||
					c.params.some((t) => h.uses.params.has(t)) ||
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
						for (const t in r.params)
							Object.defineProperty(a, t, {
								get: () => (d.uses.params.add(t), r.params[t]),
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
								fetch: this.started ? fetch : It
							});
							const c = s === t.length - 1 && !e;
							if (!g && c) return;
						}
					} else ({ node: d, loaded: g } = f);
					if (g) {
						if (((g = Ot(g)), g.error)) {
							if (e) throw e;
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
							const t = this.caches.get(p),
								e = { node: d, loaded: g };
							t.set(h, e);
							let s = !1;
							const r = setTimeout(() => {
									a();
								}, 1e3 * g.maxage),
								a = () => {
									t.get(h) === e && t.delete(h), n(), clearTimeout(r);
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
				(await Promise.all(l)).forEach((t, e) => {
					t && (o.props[`props_${e}`] = t);
				}),
				(this.current.page && r.path === this.current.page.path && !c.query) || (o.props.page = r),
				o
			);
		} catch (l) {
			if (e) throw e;
			return await this._load({
				status: 500,
				error: l,
				nodes: [],
				page: { host: r.host, path: r.path, query: r.query, params: {} }
			});
		}
	}
}
async function Tt({ paths: t, target: e, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new Nt({ base: t.base, routes: Mt }),
		c = new Pt({ Root: ct, layout: At, target: e, session: s, host: r });
	n && (await c.start(n)), a && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Tt as start };
