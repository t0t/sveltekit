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
	i as l,
	s as c,
	e as i,
	t as h,
	c as u,
	a as p,
	b as d,
	d as f,
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
	v as C,
	w as A,
	x as q,
	y as M,
	z as S,
	A as R,
	B as j,
	C as N,
	D as O,
	E as I,
	F as T,
	G as P,
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
function J(t) {
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
			(s = d(a, r)), a.forEach(f);
		},
		m(t, r) {
			g(t, e, r), v(e, s);
		},
		p(t, e) {
			2 & e && r !== (r = t[1].stack + '') && m(s, r);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Y(t) {
	let e,
		s,
		r,
		a,
		n,
		o,
		l,
		c = t[1].message + '',
		x = t[1].stack && J(t);
	return {
		c() {
			(e = i('h1')),
				(s = h(t[0])),
				(r = w()),
				(a = i('p')),
				(n = h(c)),
				(o = w()),
				x && x.c(),
				(l = y());
		},
		l(i) {
			e = u(i, 'H1', {});
			var h = p(e);
			(s = d(h, t[0])), h.forEach(f), (r = $(i)), (a = u(i, 'P', {}));
			var g = p(a);
			(n = d(g, c)), g.forEach(f), (o = $(i)), x && x.l(i), (l = y());
		},
		m(t, c) {
			g(t, e, c), v(e, s), g(t, r, c), g(t, a, c), v(a, n), g(t, o, c), x && x.m(t, c), g(t, l, c);
		},
		p(t, [e]) {
			1 & e && m(s, t[0]),
				2 & e && c !== (c = t[1].message + '') && m(n, c),
				t[1].stack
					? x
						? x.p(t, e)
						: ((x = J(t)), x.c(), x.m(l.parentNode, l))
					: x && (x.d(1), (x = null));
		},
		i: E,
		o: E,
		d(t) {
			t && f(e), t && f(r), t && f(a), t && f(o), x && x.d(t), t && f(l);
		}
	};
}
function Z(t, e, s) {
	let { status: r } = e,
		{ error: a } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)), 'error' in t && s(1, (a = t.error));
		}),
		[r, a]
	);
}
class X extends o {
	constructor(t) {
		super(), l(this, t, Z, Y, c, { status: 0, error: 1 });
	}
}
function Q(t) {
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
				e && _(e.$$.fragment), (s = y());
			},
			l(t) {
				e && k(e.$$.fragment, t), (s = y());
			},
			m(t, a) {
				e && L(e, t, a), g(t, s, a), (r = !0);
			},
			p(t, r) {
				const l = 16 & r ? V(a, [C(t[4] || {})]) : {};
				if (n !== (n = t[2][1])) {
					if (e) {
						N();
						const t = e;
						q(t.$$.fragment, 1, 0, () => {
							M(t, 1);
						}),
							O();
					}
					n
						? ((e = new n(o())), _(e.$$.fragment), A(e.$$.fragment, 1), L(e, s.parentNode, s))
						: (e = null);
				} else n && e.$set(l);
			},
			i(t) {
				r || (e && A(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				e && q(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && f(s), e && M(e, t);
			}
		}
	);
}
function tt(t) {
	let e, s;
	return (
		(e = new X({ props: { status: t[0], error: t[1] } })),
		{
			c() {
				_(e.$$.fragment);
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
				q(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function et(t) {
	let e, s, r, a;
	const n = [tt, Q],
		o = [];
	function l(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = l(t)),
		(s = o[e] = n[e](t)),
		{
			c() {
				s.c(), (r = y());
			},
			l(t) {
				s.l(t), (r = y());
			},
			m(t, s) {
				o[e].m(t, s), g(t, r, s), (a = !0);
			},
			p(t, a) {
				let c = e;
				(e = l(t)),
					e === c
						? o[e].p(t, a)
						: (N(),
						  q(o[c], 1, 1, () => {
								o[c] = null;
						  }),
						  O(),
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
				o[e].d(t), t && f(r);
			}
		}
	);
}
function st(t) {
	let e,
		s = t[6] && rt(t);
	return {
		c() {
			(e = i('div')), s && s.c(), this.h();
		},
		l(t) {
			e = u(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var r = p(e);
			s && s.l(r), r.forEach(f), this.h();
		},
		h() {
			b(e, 'id', 'svelte-announcer'),
				b(e, 'aria-live', 'assertive'),
				b(e, 'aria-atomic', 'true'),
				b(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			g(t, e, r), s && s.m(e, null);
		},
		p(t, r) {
			t[6] ? (s ? s.p(t, r) : ((s = rt(t)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(t) {
			t && f(e), s && s.d();
		}
	};
}
function rt(t) {
	let e, s;
	return {
		c() {
			(e = h('Navigated to ')), (s = h(t[7]));
		},
		l(r) {
			(e = d(r, 'Navigated to ')), (s = d(r, t[7]));
		},
		m(t, r) {
			g(t, e, r), g(t, s, r);
		},
		p(t, e) {
			128 & e && m(s, t[7]);
		},
		d(t) {
			t && f(e), t && f(s);
		}
	};
}
function at(t) {
	let e, s, r, a;
	const n = [t[3] || {}];
	let o = { $$slots: { default: [et] }, $$scope: { ctx: t } };
	for (let c = 0; c < n.length; c += 1) o = x(o, n[c]);
	e = new t[8]({ props: o });
	let l = t[5] && st(t);
	return {
		c() {
			_(e.$$.fragment), (s = w()), l && l.c(), (r = y());
		},
		l(t) {
			k(e.$$.fragment, t), (s = $(t)), l && l.l(t), (r = y());
		},
		m(t, n) {
			L(e, t, n), g(t, s, n), l && l.m(t, n), g(t, r, n), (a = !0);
		},
		p(t, [s]) {
			const a = 8 & s ? V(n, [C(t[3] || {})]) : {};
			2071 & s && (a.$$scope = { dirty: s, ctx: t }),
				e.$set(a),
				t[5]
					? l
						? l.p(t, s)
						: ((l = st(t)), l.c(), l.m(r.parentNode, r))
					: l && (l.d(1), (l = null));
		},
		i(t) {
			a || (A(e.$$.fragment, t), (a = !0));
		},
		o(t) {
			q(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			M(e, t), t && f(s), l && l.d(t), t && f(r);
		}
	};
}
function nt(t, e, s) {
	let { status: r } = e,
		{ error: a } = e,
		{ stores: n } = e,
		{ page: o } = e,
		{ components: l } = e,
		{ props_0: c = null } = e,
		{ props_1: i = null } = e;
	const h = l[0];
	S('__svelte__', n), R(n.page.notify);
	let u = !1,
		p = !1,
		d = null;
	return (
		j(() => {
			const t = n.page.subscribe(() => {
				u && (s(6, (p = !0)), s(7, (d = document.title)));
			});
			return s(5, (u = !0)), t;
		}),
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)),
				'error' in t && s(1, (a = t.error)),
				'stores' in t && s(9, (n = t.stores)),
				'page' in t && s(10, (o = t.page)),
				'components' in t && s(2, (l = t.components)),
				'props_0' in t && s(3, (c = t.props_0)),
				'props_1' in t && s(4, (i = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && n.page.set(o);
		}),
		[r, a, l, c, i, u, p, d, h, n, o]
	);
}
class ot extends o {
	constructor(t) {
		super(),
			l(this, t, nt, at, c, {
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
const ct = {},
	it = function (t, e) {
		if (!e) return t();
		if (void 0 === lt) {
			const t = document.createElement('link').relList;
			lt = t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			e.map((t) => {
				if (t in ct) return;
				ct[t] = !0;
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
const ht = [
	{ name: 'home', url: '/' },
	{ name: 'artwork', url: '/artworks' },
	{ name: 'me', url: '/about' },
	{ name: 'philosophy', url: '/philosophy' },
	{ name: 'lab', url: '/lab' }
];
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
	let e, s, r, a, n, o, l, c, i, h, d;
	return {
		c() {
			(e = I('svg')),
				(s = I('g')),
				(r = I('circle')),
				(a = I('g')),
				(n = I('circle')),
				(o = I('circle')),
				(l = I('g')),
				(c = I('circle')),
				(i = I('circle')),
				(h = I('circle')),
				(d = I('circle')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var g = p(e);
			s = u(g, 'g', { class: !0 }, 1);
			var v = p(s);
			(r = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(r).forEach(f),
				(a = u(v, 'g', { class: !0 }, 1));
			var m = p(a);
			(n = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(n).forEach(f),
				(o = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(o).forEach(f),
				m.forEach(f),
				(l = u(v, 'g', { class: !0 }, 1));
			var w = p(l);
			(c = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(c).forEach(f),
				(i = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(i).forEach(f),
				(h = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(h).forEach(f),
				(d = u(w, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(d).forEach(f),
				w.forEach(f),
				v.forEach(f),
				g.forEach(f),
				this.h();
		},
		h() {
			b(r, 'cx', '25'),
				b(r, 'cy', '25'),
				b(r, 'r', '25'),
				b(r, 'class', 'svelte-1h6x560'),
				b(n, 'cx', '12.5'),
				b(n, 'cy', '25'),
				b(n, 'r', '12.5'),
				b(n, 'class', 'svelte-1h6x560'),
				b(o, 'cx', '38'),
				b(o, 'cy', '25'),
				b(o, 'r', '12.5'),
				b(o, 'class', 'svelte-1h6x560'),
				b(a, 'class', 'svelte-1h6x560'),
				b(c, 'cx', '6.5'),
				b(c, 'cy', '25'),
				b(c, 'r', '6.25'),
				b(c, 'class', 'svelte-1h6x560'),
				b(i, 'cx', '19'),
				b(i, 'cy', '25'),
				b(i, 'r', '6.25'),
				b(i, 'class', 'svelte-1h6x560'),
				b(h, 'cx', '31.5'),
				b(h, 'cy', '25'),
				b(h, 'r', '6.25'),
				b(h, 'class', 'svelte-1h6x560'),
				b(d, 'cx', '44'),
				b(d, 'cy', '25'),
				b(d, 'r', '6.25'),
				b(d, 'class', 'svelte-1h6x560'),
				b(l, 'class', 'svelte-1h6x560'),
				b(s, 'class', 'svelte-1h6x560'),
				b(e, 'class', 'logo svelte-1h6x560'),
				b(e, 'width', '51'),
				b(e, 'height', '51');
		},
		m(t, u) {
			g(t, e, u),
				v(e, s),
				v(s, r),
				v(s, a),
				v(a, n),
				v(a, o),
				v(s, l),
				v(l, c),
				v(l, i),
				v(l, h),
				v(l, d);
		},
		p: E,
		i: E,
		o: E,
		d(t) {
			t && f(e);
		}
	};
}
class dt extends o {
	constructor(t) {
		super(), l(this, t, null, pt, c, {});
	}
}
function ft(t, e, s) {
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
		r = ht,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = wt(ft(t, r, n));
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
			s.forEach(f), this.h();
		},
		h() {
			b(e, 'class', (s = H(t[4][t[1]]) + ' svelte-1jdxo14'));
		},
		m(t, s) {
			g(t, e, s);
			for (let r = 0; r < a.length; r += 1) a[r].m(e, null);
		},
		p(t, n) {
			if (1 & n) {
				let s;
				for (r = ht, s = 0; s < r.length; s += 1) {
					const o = ft(t, r, s);
					a[s] ? a[s].p(o, n) : ((a[s] = wt(o)), a[s].c(), a[s].m(e, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = H(t[4][t[1]]) + ' svelte-1jdxo14') && b(e, 'class', s);
		},
		i: E,
		o: E,
		d(t) {
			t && f(e), z(a, t);
		}
	};
}
function mt(t) {
	let e, s, r, a, n, o, l, c, h;
	r = new dt({});
	let d = ht,
		m = [];
	for (let i = 0; i < d.length; i += 1) m[i] = yt(gt(t, d, i));
	return {
		c() {
			(e = i('div')), (s = i('div')), _(r.$$.fragment), (a = w()), (n = i('nav'));
			for (let t = 0; t < m.length; t += 1) m[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'DIV', { class: !0 });
			var o = p(e);
			s = u(o, 'DIV', { class: !0 });
			var l = p(s);
			k(r.$$.fragment, l), l.forEach(f), (a = $(o)), (n = u(o, 'NAV', { class: !0 }));
			var c = p(n);
			for (let e = 0; e < m.length; e += 1) m[e].l(c);
			c.forEach(f), o.forEach(f), this.h();
		},
		h() {
			b(s, 'class', 'ButtonNav svelte-1jdxo14'),
				b(n, 'class', (o = H(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-1jdxo14')),
				b(e, 'class', 'Variante_1 svelte-1jdxo14');
		},
		m(o, i) {
			g(o, e, i), v(e, s), L(r, s, null), v(e, a), v(e, n);
			for (let t = 0; t < m.length; t += 1) m[t].m(n, null);
			(l = !0),
				c ||
					((h = [B(s, 'click', t[7]), D(ut.call(null, e)), B(e, 'click_outside', t[3])]), (c = !0));
		},
		p(t, e) {
			if (9 & e) {
				let s;
				for (d = ht, s = 0; s < d.length; s += 1) {
					const r = gt(t, d, s);
					m[s] ? m[s].p(r, e) : ((m[s] = yt(r)), m[s].c(), m[s].m(n, null));
				}
				for (; s < m.length; s += 1) m[s].d(1);
				m.length = d.length;
			}
			(!l ||
				(4 & e &&
					o !== (o = H(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-1jdxo14'))) &&
				b(n, 'class', o);
		},
		i(t) {
			l || (A(r.$$.fragment, t), (l = !0));
		},
		o(t) {
			q(r.$$.fragment, t), (l = !1);
		},
		d(t) {
			t && f(e), M(r), z(m, t), (c = !1), U(h);
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
			(e = i('a')), (s = h(o)), (r = w()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0 });
			var a = p(e);
			(s = d(a, o)), (r = $(a)), a.forEach(f), this.h();
		},
		h() {
			b(e, 'href', t[9]), b(e, 'class', 'svelte-1jdxo14'), P(e, 'active', t[10] === t[0]);
		},
		m(o, l) {
			g(o, e, l), v(e, s), v(e, r), a || ((n = B(e, 'click', t[6])), (a = !0));
		},
		p(t, s) {
			1 & s && P(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && f(e), (a = !1), n();
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
			(e = i('a')), (s = h(o)), (r = w()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0, role: !0 });
			var a = p(e);
			(s = d(a, o)), (r = $(a)), a.forEach(f), this.h();
		},
		h() {
			b(e, 'href', t[9]),
				b(e, 'class', 'NavItem svelte-1jdxo14'),
				b(e, 'role', 'navigation'),
				P(e, 'active', t[10] === t[0]);
		},
		m(o, l) {
			g(o, e, l),
				v(e, s),
				v(e, r),
				a || ((n = [B(e, 'click', t[5]), B(e, 'click', t[3])]), (a = !0));
		},
		p(t, s) {
			1 & s && P(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && f(e), (a = !1), U(n);
		}
	};
}
function $t(t) {
	let e, s, r, a;
	const n = [mt, vt],
		o = [];
	function l(t, e) {
		return 1 === t[1] ? 0 : 1;
	}
	return (
		(e = l(t)),
		(s = o[e] = n[e](t)),
		{
			c() {
				s.c(), (r = y());
			},
			l(t) {
				s.l(t), (r = y());
			},
			m(t, s) {
				o[e].m(t, s), g(t, r, s), (a = !0);
			},
			p(t, [a]) {
				let c = e;
				(e = l(t)),
					e === c
						? o[e].p(t, a)
						: (N(),
						  q(o[c], 1, 1, () => {
								o[c] = null;
						  }),
						  O(),
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
				o[e].d(t), t && f(r);
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
				T(t, e);
			},
			function (e) {
				T(t, e);
			},
			() => {
				s(2, (a = !a));
			}
		]
	);
}
class xt extends o {
	constructor(t) {
		super(), l(this, t, Et, $t, c, { current_page: 0, variante: 1 });
	}
}
function bt(t) {
	let e,
		s,
		r,
		a,
		n,
		o,
		l,
		c,
		m,
		y,
		x,
		_,
		k,
		L,
		V,
		C,
		A,
		q,
		M,
		S,
		R,
		j,
		N,
		O,
		T,
		P,
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
		tt,
		et,
		st;
	return {
		c() {
			(e = i('aside')),
				(s = i('small')),
				(r = h('Follow me at:')),
				(a = w()),
				(n = i('ul')),
				(o = i('li')),
				(l = i('a')),
				(c = I('svg')),
				(m = I('title')),
				(y = h('Instagram')),
				(x = I('circle')),
				(_ = I('path')),
				(k = I('path')),
				(L = w()),
				(V = i('a')),
				(C = I('svg')),
				(A = I('title')),
				(q = h('Linkedin')),
				(M = I('path')),
				(S = w()),
				(R = i('a')),
				(j = I('svg')),
				(N = I('title')),
				(O = h('Algunos artículos en Medium')),
				(T = I('path')),
				(P = w()),
				(B = i('a')),
				(H = I('svg')),
				(z = I('title')),
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
			(r = d(h, 'Follow me at:')), h.forEach(f), (a = $(i)), (n = u(i, 'UL', { class: !0 }));
			var g = p(n);
			o = u(g, 'LI', { class: !0 });
			var v = p(o);
			l = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var w = p(l);
			c = u(w, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var E = p(c);
			m = u(E, 'title', { class: !0 }, 1);
			var b = p(m);
			(y = d(b, 'Instagram')),
				b.forEach(f),
				(x = u(E, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(x).forEach(f),
				(_ = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(_).forEach(f),
				(k = u(E, 'path', { d: !0, class: !0 }, 1)),
				p(k).forEach(f),
				E.forEach(f),
				w.forEach(f),
				(L = $(v)),
				(V = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var I = p(V);
			C = u(I, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var rt = p(C);
			A = u(rt, 'title', { class: !0 }, 1);
			var at = p(A);
			(q = d(at, 'Linkedin')),
				at.forEach(f),
				(M = u(rt, 'path', { d: !0, class: !0 }, 1)),
				p(M).forEach(f),
				rt.forEach(f),
				I.forEach(f),
				(S = $(v)),
				(R = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var nt = p(R);
			j = u(nt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ot = p(j);
			N = u(ot, 'title', { class: !0 }, 1);
			var lt = p(N);
			(O = d(lt, 'Algunos artículos en Medium')),
				lt.forEach(f),
				(T = u(ot, 'path', { d: !0, class: !0 }, 1)),
				p(T).forEach(f),
				ot.forEach(f),
				nt.forEach(f),
				(P = $(v)),
				(B = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ct = p(B);
			H = u(ct, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var it = p(H);
			z = u(it, 'title', { class: !0 }, 1);
			var ht = p(z);
			(U = d(ht, 'Twitter')),
				ht.forEach(f),
				(D = u(it, 'path', { d: !0, class: !0 }, 1)),
				p(D).forEach(f),
				it.forEach(f),
				ct.forEach(f),
				(K = $(v)),
				(F = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ut = p(F);
			G = u(ut, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var pt = p(G);
			W = u(pt, 'title', { class: !0 }, 1);
			var dt = p(W);
			(J = d(dt, 'Mi repositorio en Github')),
				dt.forEach(f),
				(Y = u(pt, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				p(Y).forEach(f),
				pt.forEach(f),
				ut.forEach(f),
				(Z = $(v)),
				(X = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ft = p(X);
			Q = u(ft, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var gt = p(Q);
			tt = u(gt, 'title', { class: !0 }, 1);
			var vt = p(tt);
			(et = d(vt, 'Facebook')),
				vt.forEach(f),
				(st = u(gt, 'path', { d: !0, class: !0 }, 1)),
				p(st).forEach(f),
				gt.forEach(f),
				ft.forEach(f),
				v.forEach(f),
				g.forEach(f),
				i.forEach(f),
				this.h();
		},
		h() {
			b(s, 'class', 'svelte-1nrg4na'),
				b(m, 'class', 'svelte-1nrg4na'),
				b(x, 'cx', '12.145'),
				b(x, 'cy', '3.892'),
				b(x, 'r', '0.96'),
				b(x, 'class', 'svelte-1nrg4na'),
				b(
					_,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				b(_, 'class', 'svelte-1nrg4na'),
				b(
					k,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				b(k, 'class', 'svelte-1nrg4na'),
				b(c, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(c, 'viewBox', '0 0 16 16'),
				b(c, 'class', 'svelte-1nrg4na'),
				b(l, 'href', 'https://www.instagram.com/t.o.d.h/'),
				b(l, 'target', '_blank'),
				b(l, 'rel', 'noopener'),
				b(l, 'class', 'svelte-1nrg4na'),
				b(A, 'class', 'svelte-1nrg4na'),
				b(
					M,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				b(M, 'class', 'svelte-1nrg4na'),
				b(C, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(C, 'viewBox', '0 0 16 16'),
				b(C, 'class', 'svelte-1nrg4na'),
				b(V, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				b(V, 'target', '_blank'),
				b(V, 'rel', 'noopener'),
				b(V, 'class', 'svelte-1nrg4na'),
				b(N, 'class', 'svelte-1nrg4na'),
				b(
					T,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				b(T, 'class', 'svelte-1nrg4na'),
				b(j, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(j, 'viewBox', '0 0 16 16'),
				b(j, 'class', 'svelte-1nrg4na'),
				b(R, 'href', 'https://medium.com/@todh'),
				b(R, 'target', '_blank'),
				b(R, 'rel', 'noopener'),
				b(R, 'class', 'svelte-1nrg4na'),
				b(z, 'class', 'svelte-1nrg4na'),
				b(
					D,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				b(D, 'class', 'svelte-1nrg4na'),
				b(H, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(H, 'viewBox', '0 0 16 16'),
				b(H, 'class', 'svelte-1nrg4na'),
				b(B, 'href', 'https://twitter.com/t0tinspire'),
				b(B, 'target', '_blank'),
				b(B, 'rel', 'noopener'),
				b(B, 'class', 'svelte-1nrg4na'),
				b(W, 'class', 'svelte-1nrg4na'),
				b(Y, 'fill-rule', 'evenodd'),
				b(Y, 'clip-rule', 'evenodd'),
				b(
					Y,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				b(Y, 'class', 'svelte-1nrg4na'),
				b(G, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(G, 'viewBox', '0 0 16 16'),
				b(G, 'class', 'svelte-1nrg4na'),
				b(F, 'href', 'https://github.com/t0t'),
				b(F, 'target', '_blank'),
				b(F, 'rel', 'noopener'),
				b(F, 'class', 'svelte-1nrg4na'),
				b(tt, 'class', 'svelte-1nrg4na'),
				b(
					st,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				b(st, 'class', 'svelte-1nrg4na'),
				b(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(Q, 'viewBox', '0 0 16 16'),
				b(Q, 'class', 'svelte-1nrg4na'),
				b(X, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				b(X, 'target', '_blank'),
				b(X, 'rel', 'noopener'),
				b(X, 'class', 'svelte-1nrg4na'),
				b(o, 'class', 'svelte-1nrg4na'),
				b(n, 'class', 'svelte-1nrg4na'),
				b(e, 'class', 'Links svelte-1nrg4na');
		},
		m(t, i) {
			g(t, e, i),
				v(e, s),
				v(s, r),
				v(e, a),
				v(e, n),
				v(n, o),
				v(o, l),
				v(l, c),
				v(c, m),
				v(m, y),
				v(c, x),
				v(c, _),
				v(c, k),
				v(o, L),
				v(o, V),
				v(V, C),
				v(C, A),
				v(A, q),
				v(C, M),
				v(o, S),
				v(o, R),
				v(R, j),
				v(j, N),
				v(N, O),
				v(j, T),
				v(o, P),
				v(o, B),
				v(B, H),
				v(H, z),
				v(z, U),
				v(H, D),
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
			t && f(e);
		}
	};
}
class _t extends o {
	constructor(t) {
		super(), l(this, t, null, bt, c, {});
	}
}
function kt(t) {
	let e, s, r;
	return (
		(s = new _t({})),
		{
			c() {
				(e = i('footer')), _(s.$$.fragment), this.h();
			},
			l(t) {
				e = u(t, 'FOOTER', { class: !0 });
				var r = p(e);
				k(s.$$.fragment, r), r.forEach(f), this.h();
			},
			h() {
				b(e, 'class', 'svelte-lti6kl');
			},
			m(t, a) {
				g(t, e, a), L(s, e, null), (r = !0);
			},
			p: E,
			i(t) {
				r || (A(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				q(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && f(e), M(s);
			}
		}
	);
}
class Lt extends o {
	constructor(t) {
		super(), l(this, t, null, kt, c, {});
	}
}
function Vt(t) {
	let e, s, r, a, n, o, l, c, h;
	(document.title = e = 'SvelteKit UI - ' + t[0]),
		(a = new xt({ props: { current_page: t[0], variante: 1 } })),
		a.$on('click', t[1]);
	const d = t[3].default,
		m = K(d, t, t[2], null);
	return (
		(c = new Lt({})),
		{
			c() {
				(s = w()),
					(r = i('main')),
					_(a.$$.fragment),
					(n = w()),
					(o = i('section')),
					m && m.c(),
					(l = w()),
					_(c.$$.fragment);
			},
			l(t) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(f),
					(s = $(t)),
					(r = u(t, 'MAIN', {}));
				var e = p(r);
				k(a.$$.fragment, e), (n = $(e)), (o = u(e, 'SECTION', {}));
				var i = p(o);
				m && m.l(i), i.forEach(f), (l = $(e)), k(c.$$.fragment, e), e.forEach(f);
			},
			m(t, e) {
				g(t, s, e),
					g(t, r, e),
					L(a, r, null),
					v(r, n),
					v(r, o),
					m && m.m(o, null),
					v(r, l),
					L(c, r, null),
					(h = !0);
			},
			p(t, [s]) {
				(!h || 1 & s) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e);
				const r = {};
				1 & s && (r.current_page = t[0]),
					a.$set(r),
					m && m.p && 4 & s && G(m, d, t, t[2], s, null, null);
			},
			i(t) {
				h || (A(a.$$.fragment, t), A(m, t), A(c.$$.fragment, t), (h = !0));
			},
			o(t) {
				q(a.$$.fragment, t), q(m, t), q(c.$$.fragment, t), (h = !1);
			},
			d(t) {
				t && f(s), t && f(r), M(a), m && m.d(t), M(c);
			}
		}
	);
}
function Ct(t, e, s) {
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
			super(), l(this, t, Ct, Vt, c, {});
		}
	}
});
const qt = [
		() =>
			it(() => import('./pages/index.svelte-c8d6f274.js'), [
				'/_app/pages/index.svelte-c8d6f274.js',
				'/_app/assets/pages/index.svelte-2867184f.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Button-e3a987c3.js',
				'/_app/assets/Button-d752f774.css',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-15bca940.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			it(() => import('./pages/philosophy/index.svelte-900c2684.js'), [
				'/_app/pages/philosophy/index.svelte-900c2684.js',
				'/_app/assets/pages/philosophy/index.svelte-e3b19d08.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-15bca940.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			it(() => import('./pages/artworks/index.svelte-a7b0f2d2.js'), [
				'/_app/pages/artworks/index.svelte-a7b0f2d2.js',
				'/_app/assets/pages/artworks/index.svelte-63fec2b4.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Button-e3a987c3.js',
				'/_app/assets/Button-d752f774.css',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-15bca940.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			it(() => import('./pages/about/index.svelte-994ec616.js'), [
				'/_app/pages/about/index.svelte-994ec616.js',
				'/_app/assets/pages/about/index.svelte-23a90989.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-15bca940.js',
				'/_app/assets/Section-95823de1.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			it(() => import('./pages/lab/index.svelte-1d7cf993.js'), [
				'/_app/pages/lab/index.svelte-1d7cf993.js',
				'/_app/assets/pages/lab/index.svelte-a149a513.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-15bca940.js',
				'/_app/assets/Section-95823de1.css',
				'/_app/chunks/Button-e3a987c3.js',
				'/_app/assets/Button-d752f774.css',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js'
			])
	],
	Mt = [
		[/^\/$/, [qt[0]]],
		[/^\/philosophy\/?$/, [qt[1]]],
		[/^\/artworks\/?$/, [qt[2]]],
		[/^\/about\/?$/, [qt[3]]],
		[/^\/lab\/?$/, [qt[4]]]
	];
function St() {
	return { x: pageXOffset, y: pageYOffset };
}
function Rt(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class jt {
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
function Nt(t) {
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
function Ot(t) {
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
class Tt {
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
			(this.stores = { page: Ot({}), navigating: W(null), session: W(r) }),
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
			const l = a.map((t) => t()),
				c = {
					host: this.host,
					path: t.path,
					params: n ? n(s[0].exec(t.path)) : {},
					query: t.query
				},
				i = await this._load({ status: 200, error: null, nodes: l, page: c });
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
		(this.current = t.state),
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
			l = {
				params: Object.keys(r.params).filter(
					(t) => !this.current.page || this.current.page.params[t] !== r.params[t]
				),
				query: a !== this.current.query,
				session: this.current.session_changed,
				context: !1
			};
		try {
			const t = [this.layout, ...s],
				c = [];
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
					l.params.some((t) => h.uses.params.has(t)) ||
					(l.query && h.uses.query) ||
					(l.session && h.uses.session) ||
					(l.context && h.uses.context)
				) {
					const h = r.path + a,
						u = this.caches.get(p),
						d = u && u.get(h);
					let f, g;
					if (!d || (l.context && d.node.uses.context)) {
						f = { module: p, uses: { params: new Set(), query: !1, session: !1, context: !1 } };
						const a = {};
						for (const t in r.params)
							Object.defineProperty(a, t, {
								get: () => (f.uses.params.add(t), r.params[t]),
								enumerable: !0
							});
						const o = this.$session;
						if (p.load) {
							g = await p.load.call(null, {
								page: {
									host: r.host,
									path: r.path,
									params: a,
									get query() {
										return (f.uses.query = !0), r.query;
									}
								},
								get session() {
									return (f.uses.session = !0), o;
								},
								get context() {
									return (f.uses.context = !0), n({}, i);
								},
								fetch: this.started ? fetch : It
							});
							const l = s === t.length - 1 && !e;
							if (!g && l) return;
						}
					} else ({ node: f, loaded: g } = d);
					if (g) {
						if (((g = Nt(g)), g.error)) {
							if (e) throw e;
							return await this._load({
								status: g.status || 500,
								error: g.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (g.redirect) return { redirect: g.redirect };
						if ((g.context && ((l.context = !0), (i = n(n({}, i), g.context))), g.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const t = this.caches.get(p),
								e = { node: f, loaded: g };
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
						c[s] = g.props;
					}
					(o.state.nodes[s] = f), (o.state.contexts[s] = i);
				} else (o.state.nodes[s] = h), (o.state.contexts[s] = i = u);
			}
			return (
				(await Promise.all(c)).forEach((t, e) => {
					t && (o.props[`props_${e}`] = t);
				}),
				(this.current.page && r.path === this.current.page.path && !l.query) || (o.props.page = r),
				o
			);
		} catch (c) {
			if (e) throw e;
			return await this._load({
				status: 500,
				error: c,
				nodes: [],
				page: { host: r.host, path: r.path, query: r.query, params: {} }
			});
		}
	}
}
async function Pt({ paths: t, target: e, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new jt({ base: t.base, routes: Mt }),
		l = new Tt({ Root: ot, layout: At, target: e, session: s, host: r });
	n && (await l.start(n)), a && o.init(l), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Pt as start };
