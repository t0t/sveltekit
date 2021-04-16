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
	f as v,
	g,
	h as m,
	j as y,
	k as w,
	l as $,
	n as E,
	m as _,
	o as x,
	p as b,
	q as k,
	r as z,
	u as L,
	v as V,
	w as A,
	x as q,
	y as C,
	z as M,
	A as S,
	B as R,
	C as O,
	D as N,
	E as I,
	F as P,
	G as T,
	H as j,
	I as B,
	J as H,
	K as D,
	L as U,
	M as K,
	N as F,
	O as G
} from './chunks/index-d91e1ed8.js';
import { w as W } from './chunks/index-cc16b092.js';
import { p as J } from './chunks/pages-ac57da01.js';
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
			v(t, e, r), g(e, s);
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
		_ = t[1].stack && Y(t);
	return {
		c() {
			(e = i('h1')),
				(s = h(t[0])),
				(r = y()),
				(a = i('p')),
				(n = h(l)),
				(o = y()),
				_ && _.c(),
				(c = w());
		},
		l(i) {
			e = u(i, 'H1', {});
			var h = p(e);
			(s = f(h, t[0])), h.forEach(d), (r = $(i)), (a = u(i, 'P', {}));
			var v = p(a);
			(n = f(v, l)), v.forEach(d), (o = $(i)), _ && _.l(i), (c = w());
		},
		m(t, l) {
			v(t, e, l), g(e, s), v(t, r, l), v(t, a, l), g(a, n), v(t, o, l), _ && _.m(t, l), v(t, c, l);
		},
		p(t, [e]) {
			1 & e && m(s, t[0]),
				2 & e && l !== (l = t[1].message + '') && m(n, l),
				t[1].stack
					? _
						? _.p(t, e)
						: ((_ = Y(t)), _.c(), _.m(c.parentNode, c))
					: _ && (_.d(1), (_ = null));
		},
		i: E,
		o: E,
		d(t) {
			t && d(e), t && d(r), t && d(a), t && d(o), _ && _.d(t), t && d(c);
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
		for (let s = 0; s < a.length; s += 1) e = _(e, a[s]);
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
				e && z(e, t, a), v(t, s, a), (r = !0);
			},
			p(t, r) {
				const c = 16 & r ? L(a, [V(t[4] || {})]) : {};
				if (n !== (n = t[2][1])) {
					if (e) {
						O();
						const t = e;
						q(t.$$.fragment, 1, 0, () => {
							C(t, 1);
						}),
							N();
					}
					n
						? ((e = new n(o())), b(e.$$.fragment), A(e.$$.fragment, 1), z(e, s.parentNode, s))
						: (e = null);
				} else n && e.$set(c);
			},
			i(t) {
				r || (e && A(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				e && q(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(s), e && C(e, t);
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
				z(e, t, r), (s = !0);
			},
			p(t, s) {
				const r = {};
				1 & s && (r.status = t[0]), 2 & s && (r.error = t[1]), e.$set(r);
			},
			i(t) {
				s || (A(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				q(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				C(e, t);
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
				o[e].m(t, s), v(t, r, s), (a = !0);
			},
			p(t, a) {
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (O(),
						  q(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  N(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  A(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (A(s), (a = !0));
			},
			o(t) {
				q(s), (a = !1);
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
			x(e, 'id', 'svelte-announcer'),
				x(e, 'aria-live', 'assertive'),
				x(e, 'aria-atomic', 'true'),
				x(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			v(t, e, r), s && s.m(e, null);
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
			v(t, e, r), v(t, s, r);
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
	for (let l = 0; l < n.length; l += 1) o = _(o, n[l]);
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
			z(e, t, n), v(t, s, n), c && c.m(t, n), v(t, r, n), (a = !0);
		},
		p(t, [s]) {
			const a = 8 & s ? L(n, [V(t[3] || {})]) : {};
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
			q(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			C(e, t), t && d(s), c && c.d(t), t && d(r);
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
	M('__svelte__', n), S(n.page.notify);
	let u = !1,
		p = !1,
		f = null;
	return (
		R(() => {
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
			var v = p(e);
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
				(c = u(g, 'g', { class: !0 }, 1));
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
				g.forEach(d),
				v.forEach(d),
				this.h();
		},
		h() {
			x(r, 'cx', '25'),
				x(r, 'cy', '25'),
				x(r, 'r', '25'),
				x(r, 'class', 'svelte-11eprzu'),
				x(n, 'cx', '12.5'),
				x(n, 'cy', '25'),
				x(n, 'r', '12.5'),
				x(n, 'class', 'svelte-11eprzu'),
				x(o, 'cx', '38'),
				x(o, 'cy', '25'),
				x(o, 'r', '12.5'),
				x(o, 'class', 'svelte-11eprzu'),
				x(a, 'class', 'svelte-11eprzu'),
				x(l, 'cx', '6.5'),
				x(l, 'cy', '25'),
				x(l, 'r', '6.25'),
				x(l, 'class', 'svelte-11eprzu'),
				x(i, 'cx', '19'),
				x(i, 'cy', '25'),
				x(i, 'r', '6.25'),
				x(i, 'class', 'svelte-11eprzu'),
				x(h, 'cx', '31.5'),
				x(h, 'cy', '25'),
				x(h, 'r', '6.25'),
				x(h, 'class', 'svelte-11eprzu'),
				x(f, 'cx', '44'),
				x(f, 'cy', '25'),
				x(f, 'r', '6.25'),
				x(f, 'class', 'svelte-11eprzu'),
				x(c, 'class', 'svelte-11eprzu'),
				x(s, 'class', 'svelte-11eprzu'),
				x(e, 'class', 'logo svelte-11eprzu'),
				x(e, 'width', '51'),
				x(e, 'height', '51');
		},
		m(t, u) {
			v(t, e, u),
				g(e, s),
				g(s, r),
				g(s, a),
				g(a, n),
				g(a, o),
				g(s, c),
				g(c, l),
				g(c, i),
				g(c, h),
				g(c, f);
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
function vt(t, e, s) {
	const r = t.slice();
	return (r[9] = e[s].url), (r[10] = e[s].name), r;
}
function gt(t) {
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
			x(e, 'class', (s = B(t[4][t[1]]) + ' svelte-1o749kp'));
		},
		m(t, s) {
			v(t, e, s);
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
			2 & n && s !== (s = B(t[4][t[1]]) + ' svelte-1o749kp') && x(e, 'class', s);
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
	for (let i = 0; i < f.length; i += 1) m[i] = wt(vt(t, f, i));
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
			x(s, 'class', 'ButtonNav svelte-1o749kp'),
				x(n, 'class', (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-1o749kp')),
				x(e, 'class', 'Variante_1 svelte-1o749kp');
		},
		m(o, i) {
			v(o, e, i), g(e, s), z(r, s, null), g(e, a), g(e, n);
			for (let t = 0; t < m.length; t += 1) m[t].m(n, null);
			(c = !0),
				l ||
					((h = [j(s, 'click', t[7]), U(ut.call(null, e)), j(e, 'click_outside', t[3])]), (l = !0));
		},
		p(t, e) {
			if (9 & e) {
				let s;
				for (f = J, s = 0; s < f.length; s += 1) {
					const r = vt(t, f, s);
					m[s] ? m[s].p(r, e) : ((m[s] = wt(r)), m[s].c(), m[s].m(n, null));
				}
				for (; s < m.length; s += 1) m[s].d(1);
				m.length = f.length;
			}
			(!c ||
				(4 & e &&
					o !== (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-1o749kp'))) &&
				x(n, 'class', o);
		},
		i(t) {
			c || (A(r.$$.fragment, t), (c = !0));
		},
		o(t) {
			q(r.$$.fragment, t), (c = !1);
		},
		d(t) {
			t && d(e), C(r), H(m, t), (l = !1), D(h);
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
			x(e, 'href', t[9]), x(e, 'class', 'svelte-1o749kp'), T(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			v(o, e, c), g(e, s), g(e, r), a || ((n = j(e, 'click', t[6])), (a = !0));
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
			x(e, 'href', t[9]),
				x(e, 'class', 'NavItem svelte-1o749kp'),
				x(e, 'role', 'navigation'),
				T(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			v(o, e, c),
				g(e, s),
				g(e, r),
				a || ((n = [j(e, 'click', t[5]), j(e, 'click', t[3])]), (a = !0));
		},
		p(t, s) {
			1 & s && T(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (a = !1), D(n);
		}
	};
}
function $t(t) {
	let e, s, r, a;
	const n = [mt, gt],
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
				o[e].m(t, s), v(t, r, s), (a = !0);
			},
			p(t, [a]) {
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (O(),
						  q(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  N(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  A(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (A(s), (a = !0));
			},
			o(t) {
				q(s), (a = !1);
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
class _t extends o {
	constructor(t) {
		super(), c(this, t, Et, $t, l, { current_page: 0, variante: 1 });
	}
}
function xt(t) {
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
		_,
		b,
		k,
		z,
		L,
		V,
		A,
		q,
		C,
		M,
		S,
		R,
		O,
		N,
		P,
		T,
		j,
		B,
		H,
		D,
		U,
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
				(_ = I('circle')),
				(b = I('path')),
				(k = I('path')),
				(z = y()),
				(L = i('a')),
				(V = I('svg')),
				(A = I('title')),
				(q = h('Linkedin')),
				(C = I('path')),
				(M = y()),
				(S = i('a')),
				(R = I('svg')),
				(O = I('title')),
				(N = h('Algunos artículos en Medium')),
				(P = I('path')),
				(T = y()),
				(j = i('a')),
				(B = I('svg')),
				(H = I('title')),
				(D = h('Twitter')),
				(U = I('path')),
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
			var v = p(n);
			o = u(v, 'LI', { class: !0 });
			var g = p(o);
			c = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var y = p(c);
			l = u(y, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var E = p(l);
			m = u(E, 'title', { class: !0 }, 1);
			var x = p(m);
			(w = f(x, 'Instagram')),
				x.forEach(d),
				(_ = u(E, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(_).forEach(d),
				(b = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(b).forEach(d),
				(k = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(k).forEach(d),
				E.forEach(d),
				y.forEach(d),
				(z = $(g)),
				(L = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var I = p(L);
			V = u(I, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var rt = p(V);
			A = u(rt, 'title', { class: !0 }, 1);
			var at = p(A);
			(q = f(at, 'Linkedin')),
				at.forEach(d),
				(C = u(rt, 'path', { d: !0, class: !0 }, 1)),
				p(C).forEach(d),
				rt.forEach(d),
				I.forEach(d),
				(M = $(g)),
				(S = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var nt = p(S);
			R = u(nt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ot = p(R);
			O = u(ot, 'title', { class: !0 }, 1);
			var ct = p(O);
			(N = f(ct, 'Algunos artículos en Medium')),
				ct.forEach(d),
				(P = u(ot, 'path', { d: !0, class: !0 }, 1)),
				p(P).forEach(d),
				ot.forEach(d),
				nt.forEach(d),
				(T = $(g)),
				(j = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var lt = p(j);
			B = u(lt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var it = p(B);
			H = u(it, 'title', { class: !0 }, 1);
			var ht = p(H);
			(D = f(ht, 'Twitter')),
				ht.forEach(d),
				(U = u(it, 'path', { d: !0, class: !0 }, 1)),
				p(U).forEach(d),
				it.forEach(d),
				lt.forEach(d),
				(K = $(g)),
				(F = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
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
				(Z = $(g)),
				(X = u(g, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var dt = p(X);
			Q = u(dt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var vt = p(Q);
			tt = u(vt, 'title', { class: !0 }, 1);
			var gt = p(tt);
			(et = f(gt, 'Facebook')),
				gt.forEach(d),
				(st = u(vt, 'path', { d: !0, class: !0 }, 1)),
				p(st).forEach(d),
				vt.forEach(d),
				dt.forEach(d),
				g.forEach(d),
				v.forEach(d),
				i.forEach(d),
				this.h();
		},
		h() {
			x(s, 'class', 'svelte-1vhz544'),
				x(m, 'class', 'svelte-1vhz544'),
				x(_, 'cx', '12.145'),
				x(_, 'cy', '3.892'),
				x(_, 'r', '0.96'),
				x(_, 'class', 'svelte-1vhz544'),
				x(
					b,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				x(b, 'class', 'svelte-1vhz544'),
				x(
					k,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				x(k, 'class', 'svelte-1vhz544'),
				x(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(l, 'viewBox', '0 0 16 16'),
				x(l, 'class', 'svelte-1vhz544'),
				x(c, 'href', 'https://www.instagram.com/t.o.d.h/'),
				x(c, 'target', '_blank'),
				x(c, 'rel', 'noopener'),
				x(c, 'class', 'svelte-1vhz544'),
				x(A, 'class', 'svelte-1vhz544'),
				x(
					C,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				x(C, 'class', 'svelte-1vhz544'),
				x(V, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(V, 'viewBox', '0 0 16 16'),
				x(V, 'class', 'svelte-1vhz544'),
				x(L, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				x(L, 'target', '_blank'),
				x(L, 'rel', 'noopener'),
				x(L, 'class', 'svelte-1vhz544'),
				x(O, 'class', 'svelte-1vhz544'),
				x(
					P,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				x(P, 'class', 'svelte-1vhz544'),
				x(R, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(R, 'viewBox', '0 0 16 16'),
				x(R, 'class', 'svelte-1vhz544'),
				x(S, 'href', 'https://medium.com/@todh'),
				x(S, 'target', '_blank'),
				x(S, 'rel', 'noopener'),
				x(S, 'class', 'svelte-1vhz544'),
				x(H, 'class', 'svelte-1vhz544'),
				x(
					U,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				x(U, 'class', 'svelte-1vhz544'),
				x(B, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(B, 'viewBox', '0 0 16 16'),
				x(B, 'class', 'svelte-1vhz544'),
				x(j, 'href', 'https://twitter.com/t0tinspire'),
				x(j, 'target', '_blank'),
				x(j, 'rel', 'noopener'),
				x(j, 'class', 'svelte-1vhz544'),
				x(W, 'class', 'svelte-1vhz544'),
				x(Y, 'fill-rule', 'evenodd'),
				x(Y, 'clip-rule', 'evenodd'),
				x(
					Y,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				x(Y, 'class', 'svelte-1vhz544'),
				x(G, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(G, 'viewBox', '0 0 16 16'),
				x(G, 'class', 'svelte-1vhz544'),
				x(F, 'href', 'https://github.com/t0t'),
				x(F, 'target', '_blank'),
				x(F, 'rel', 'noopener'),
				x(F, 'class', 'svelte-1vhz544'),
				x(tt, 'class', 'svelte-1vhz544'),
				x(
					st,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				x(st, 'class', 'svelte-1vhz544'),
				x(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(Q, 'viewBox', '0 0 16 16'),
				x(Q, 'class', 'svelte-1vhz544'),
				x(X, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				x(X, 'target', '_blank'),
				x(X, 'rel', 'noopener'),
				x(X, 'class', 'svelte-1vhz544'),
				x(o, 'class', 'svelte-1vhz544'),
				x(n, 'class', 'svelte-1vhz544'),
				x(e, 'class', 'Links svelte-1vhz544');
		},
		m(t, i) {
			v(t, e, i),
				g(e, s),
				g(s, r),
				g(e, a),
				g(e, n),
				g(n, o),
				g(o, c),
				g(c, l),
				g(l, m),
				g(m, w),
				g(l, _),
				g(l, b),
				g(l, k),
				g(o, z),
				g(o, L),
				g(L, V),
				g(V, A),
				g(A, q),
				g(V, C),
				g(o, M),
				g(o, S),
				g(S, R),
				g(R, O),
				g(O, N),
				g(R, P),
				g(o, T),
				g(o, j),
				g(j, B),
				g(B, H),
				g(H, D),
				g(B, U),
				g(o, K),
				g(o, F),
				g(F, G),
				g(G, W),
				g(W, J),
				g(G, Y),
				g(o, Z),
				g(o, X),
				g(X, Q),
				g(Q, tt),
				g(tt, et),
				g(Q, st);
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
		super(), c(this, t, null, xt, l, {});
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
				x(e, 'class', 'svelte-lti6kl');
			},
			m(t, a) {
				v(t, e, a), z(s, e, null), (r = !0);
			},
			p: E,
			i(t) {
				r || (A(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				q(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(e), C(s);
			}
		}
	);
}
class zt extends o {
	constructor(t) {
		super(), c(this, t, null, kt, l, {});
	}
}
function Lt(t) {
	let e, s, r, a, n, o, c, l;
	(document.title = e = 'SvelteKit UI - ' + t[0]),
		(a = new _t({ props: { current_page: t[0], variante: 1 } })),
		a.$on('click', t[1]);
	const h = t[3].default,
		f = K(h, t, t[2], null);
	return (
		(c = new zt({})),
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
				v(t, s, e),
					v(t, r, e),
					z(a, r, null),
					g(r, n),
					f && f.m(r, null),
					g(r, o),
					z(c, r, null),
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
				q(a.$$.fragment, t), q(f, t), q(c.$$.fragment, t), (l = !1);
			},
			d(t) {
				t && d(s), t && d(r), C(a), f && f.d(t), C(c);
			}
		}
	);
}
function Vt(t, e, s) {
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
			super(), c(this, t, Vt, Lt, l, {});
		}
	}
});
const qt = [
		() =>
			ht(() => import('./pages/index.svelte-6a8aa010.js'), [
				'/_app/pages/index.svelte-6a8aa010.js',
				'/_app/assets/pages/index.svelte-fa489fbf.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-12fb2afa.js',
				'/_app/assets/Cover-3b709232.css',
				'/_app/chunks/Section-b530c020.js',
				'/_app/assets/Section-77bf4b99.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-a99bd539.js',
				'/_app/assets/Img-1393e58e.css',
				'/_app/chunks/pages-ac57da01.js'
			]),
		() =>
			ht(() => import('./pages/philosophy/index.svelte-9c3c7726.js'), [
				'/_app/pages/philosophy/index.svelte-9c3c7726.js',
				'/_app/assets/pages/philosophy/index.svelte-e344f630.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-12fb2afa.js',
				'/_app/assets/Cover-3b709232.css',
				'/_app/chunks/Section-b530c020.js',
				'/_app/assets/Section-77bf4b99.css',
				'/_app/chunks/TabHeaders-cad36516.js',
				'/_app/assets/TabHeaders-8887b095.css'
			]),
		() =>
			ht(() => import('./pages/prototype/index.svelte-eb4365f6.js'), [
				'/_app/pages/prototype/index.svelte-eb4365f6.js',
				'/_app/assets/pages/prototype/index.svelte-5923df56.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-12fb2afa.js',
				'/_app/assets/Cover-3b709232.css',
				'/_app/chunks/Section-b530c020.js',
				'/_app/assets/Section-77bf4b99.css',
				'/_app/chunks/TabHeaders-cad36516.js',
				'/_app/assets/TabHeaders-8887b095.css'
			]),
		() =>
			ht(() => import('./pages/artworks/index.svelte-c7a88438.js'), [
				'/_app/pages/artworks/index.svelte-c7a88438.js',
				'/_app/assets/pages/artworks/index.svelte-8777494e.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-12fb2afa.js',
				'/_app/assets/Cover-3b709232.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-a99bd539.js',
				'/_app/assets/Img-1393e58e.css',
				'/_app/chunks/Section-b530c020.js',
				'/_app/assets/Section-77bf4b99.css'
			]),
		() =>
			ht(() => import('./pages/about/index.svelte-497830d7.js'), [
				'/_app/pages/about/index.svelte-497830d7.js',
				'/_app/assets/pages/about/index.svelte-f7bd1f2b.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-b530c020.js',
				'/_app/assets/Section-77bf4b99.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			ht(() => import('./pages/lab/index.svelte-5e4a0fb2.js'), [
				'/_app/pages/lab/index.svelte-5e4a0fb2.js',
				'/_app/assets/pages/lab/index.svelte-f721ad29.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-12fb2afa.js',
				'/_app/assets/Cover-3b709232.css',
				'/_app/chunks/Section-b530c020.js',
				'/_app/assets/Section-77bf4b99.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	Ct = [
		[/^\/$/, [qt[0]]],
		[/^\/philosophy\/?$/, [qt[1]]],
		[/^\/prototype\/?$/, [qt[2]]],
		[/^\/artworks\/?$/, [qt[3]]],
		[/^\/about\/?$/, [qt[4]]],
		[/^\/lab\/?$/, [qt[5]]]
	];
function Mt() {
	return { x: pageXOffset, y: pageYOffset };
}
function St(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class Rt {
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
						const t = n(n({}, history.state || {}), { 'sveltekit:scroll': Mt() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const s = (t) => {
			const e = St(t.target);
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
				const e = St(t.target);
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
						this._navigate(n, s ? Mt() : null, [], a.hash),
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
					this._navigate(n, e ? Mt() : null, r, a.hash)
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
function Nt(t) {
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
			(this.stores = { page: Nt({}), navigating: W(null), session: W(r) }),
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
					let d, v;
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
								fetch: this.started ? fetch : It
							});
							const c = s === t.length - 1 && !e;
							if (!v && c) return;
						}
					} else ({ node: d, loaded: v } = f);
					if (v) {
						if (((v = Ot(v)), v.error)) {
							if (e) throw e;
							return await this._load({
								status: v.status || 500,
								error: v.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (v.redirect) return { redirect: v.redirect };
						if ((v.context && ((c.context = !0), (i = n(n({}, i), v.context))), v.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const t = this.caches.get(p),
								e = { node: d, loaded: v };
							t.set(h, e);
							let s = !1;
							const r = setTimeout(() => {
									a();
								}, 1e3 * v.maxage),
								a = () => {
									t.get(h) === e && t.delete(h), n(), clearTimeout(r);
								},
								n = this.stores.session.subscribe(() => {
									s && a();
								});
							s = !0;
						}
						l[s] = v.props;
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
	const o = a && new Rt({ base: t.base, routes: Ct }),
		c = new Pt({ Root: ct, layout: At, target: e, session: s, host: r });
	n && (await c.start(n)), a && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Tt as start };
