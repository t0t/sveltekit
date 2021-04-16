var t = Object.defineProperty,
	e = Object.prototype.hasOwnProperty,
	r = Object.getOwnPropertySymbols,
	s = Object.prototype.propertyIsEnumerable,
	a = (e, r, s) =>
		r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[r] = s),
	n = (t, n) => {
		for (var o in n || (n = {})) e.call(n, o) && a(t, o, n[o]);
		if (r) for (var o of r(n)) s.call(n, o) && a(t, o, n[o]);
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
	f as m,
	g as v,
	h as g,
	j as y,
	k as w,
	l as $,
	n as E,
	m as x,
	o as _,
	p as b,
	q as k,
	r as z,
	u as L,
	v as V,
	w as C,
	x as q,
	y as A,
	z as S,
	A as M,
	B as R,
	C as N,
	D as O,
	E as I,
	F as T,
	G as P,
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
		r,
		s = t[1].stack + '';
	return {
		c() {
			(e = i('pre')), (r = h(s));
		},
		l(t) {
			e = u(t, 'PRE', {});
			var a = p(e);
			(r = f(a, s)), a.forEach(d);
		},
		m(t, s) {
			m(t, e, s), v(e, r);
		},
		p(t, e) {
			2 & e && s !== (s = t[1].stack + '') && g(r, s);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Z(t) {
	let e,
		r,
		s,
		a,
		n,
		o,
		c,
		l = t[1].message + '',
		x = t[1].stack && Y(t);
	return {
		c() {
			(e = i('h1')),
				(r = h(t[0])),
				(s = y()),
				(a = i('p')),
				(n = h(l)),
				(o = y()),
				x && x.c(),
				(c = w());
		},
		l(i) {
			e = u(i, 'H1', {});
			var h = p(e);
			(r = f(h, t[0])), h.forEach(d), (s = $(i)), (a = u(i, 'P', {}));
			var m = p(a);
			(n = f(m, l)), m.forEach(d), (o = $(i)), x && x.l(i), (c = w());
		},
		m(t, l) {
			m(t, e, l), v(e, r), m(t, s, l), m(t, a, l), v(a, n), m(t, o, l), x && x.m(t, l), m(t, c, l);
		},
		p(t, [e]) {
			1 & e && g(r, t[0]),
				2 & e && l !== (l = t[1].message + '') && g(n, l),
				t[1].stack
					? x
						? x.p(t, e)
						: ((x = Y(t)), x.c(), x.m(c.parentNode, c))
					: x && (x.d(1), (x = null));
		},
		i: E,
		o: E,
		d(t) {
			t && d(e), t && d(s), t && d(a), t && d(o), x && x.d(t), t && d(c);
		}
	};
}
function X(t, e, r) {
	let { status: s } = e,
		{ error: a } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && r(0, (s = t.status)), 'error' in t && r(1, (a = t.error));
		}),
		[s, a]
	);
}
class Q extends o {
	constructor(t) {
		super(), c(this, t, X, Z, l, { status: 0, error: 1 });
	}
}
function tt(t) {
	let e, r, s;
	const a = [t[4] || {}];
	var n = t[2][1];
	function o(t) {
		let e = {};
		for (let r = 0; r < a.length; r += 1) e = x(e, a[r]);
		return { props: e };
	}
	return (
		n && (e = new n(o())),
		{
			c() {
				e && b(e.$$.fragment), (r = w());
			},
			l(t) {
				e && k(e.$$.fragment, t), (r = w());
			},
			m(t, a) {
				e && z(e, t, a), m(t, r, a), (s = !0);
			},
			p(t, s) {
				const c = 16 & s ? L(a, [V(t[4] || {})]) : {};
				if (n !== (n = t[2][1])) {
					if (e) {
						N();
						const t = e;
						q(t.$$.fragment, 1, 0, () => {
							A(t, 1);
						}),
							O();
					}
					n
						? ((e = new n(o())), b(e.$$.fragment), C(e.$$.fragment, 1), z(e, r.parentNode, r))
						: (e = null);
				} else n && e.$set(c);
			},
			i(t) {
				s || (e && C(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && q(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && d(r), e && A(e, t);
			}
		}
	);
}
function et(t) {
	let e, r;
	return (
		(e = new Q({ props: { status: t[0], error: t[1] } })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, s) {
				z(e, t, s), (r = !0);
			},
			p(t, r) {
				const s = {};
				1 & r && (s.status = t[0]), 2 & r && (s.error = t[1]), e.$set(s);
			},
			i(t) {
				r || (C(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				q(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				A(e, t);
			}
		}
	);
}
function rt(t) {
	let e, r, s, a;
	const n = [et, tt],
		o = [];
	function c(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(r = o[e] = n[e](t)),
		{
			c() {
				r.c(), (s = w());
			},
			l(t) {
				r.l(t), (s = w());
			},
			m(t, r) {
				o[e].m(t, r), m(t, s, r), (a = !0);
			},
			p(t, a) {
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (N(),
						  q(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  O(),
						  (r = o[e]),
						  r ? r.p(t, a) : ((r = o[e] = n[e](t)), r.c()),
						  C(r, 1),
						  r.m(s.parentNode, s));
			},
			i(t) {
				a || (C(r), (a = !0));
			},
			o(t) {
				q(r), (a = !1);
			},
			d(t) {
				o[e].d(t), t && d(s);
			}
		}
	);
}
function st(t) {
	let e,
		r = t[6] && at(t);
	return {
		c() {
			(e = i('div')), r && r.c(), this.h();
		},
		l(t) {
			e = u(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var s = p(e);
			r && r.l(s), s.forEach(d), this.h();
		},
		h() {
			_(e, 'id', 'svelte-announcer'),
				_(e, 'aria-live', 'assertive'),
				_(e, 'aria-atomic', 'true'),
				_(e, 'class', 'svelte-1j55zn5');
		},
		m(t, s) {
			m(t, e, s), r && r.m(e, null);
		},
		p(t, s) {
			t[6] ? (r ? r.p(t, s) : ((r = at(t)), r.c(), r.m(e, null))) : r && (r.d(1), (r = null));
		},
		d(t) {
			t && d(e), r && r.d();
		}
	};
}
function at(t) {
	let e, r;
	return {
		c() {
			(e = h('Navigated to ')), (r = h(t[7]));
		},
		l(s) {
			(e = f(s, 'Navigated to ')), (r = f(s, t[7]));
		},
		m(t, s) {
			m(t, e, s), m(t, r, s);
		},
		p(t, e) {
			128 & e && g(r, t[7]);
		},
		d(t) {
			t && d(e), t && d(r);
		}
	};
}
function nt(t) {
	let e, r, s, a;
	const n = [t[3] || {}];
	let o = { $$slots: { default: [rt] }, $$scope: { ctx: t } };
	for (let l = 0; l < n.length; l += 1) o = x(o, n[l]);
	e = new t[8]({ props: o });
	let c = t[5] && st(t);
	return {
		c() {
			b(e.$$.fragment), (r = y()), c && c.c(), (s = w());
		},
		l(t) {
			k(e.$$.fragment, t), (r = $(t)), c && c.l(t), (s = w());
		},
		m(t, n) {
			z(e, t, n), m(t, r, n), c && c.m(t, n), m(t, s, n), (a = !0);
		},
		p(t, [r]) {
			const a = 8 & r ? L(n, [V(t[3] || {})]) : {};
			2071 & r && (a.$$scope = { dirty: r, ctx: t }),
				e.$set(a),
				t[5]
					? c
						? c.p(t, r)
						: ((c = st(t)), c.c(), c.m(s.parentNode, s))
					: c && (c.d(1), (c = null));
		},
		i(t) {
			a || (C(e.$$.fragment, t), (a = !0));
		},
		o(t) {
			q(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			A(e, t), t && d(r), c && c.d(t), t && d(s);
		}
	};
}
function ot(t, e, r) {
	let { status: s } = e,
		{ error: a } = e,
		{ stores: n } = e,
		{ page: o } = e,
		{ components: c } = e,
		{ props_0: l = null } = e,
		{ props_1: i = null } = e;
	const h = c[0];
	S('__svelte__', n), M(n.page.notify);
	let u = !1,
		p = !1,
		f = null;
	return (
		R(() => {
			const t = n.page.subscribe(() => {
				u && (r(6, (p = !0)), r(7, (f = document.title)));
			});
			return r(5, (u = !0)), t;
		}),
		(t.$$set = (t) => {
			'status' in t && r(0, (s = t.status)),
				'error' in t && r(1, (a = t.error)),
				'stores' in t && r(9, (n = t.stores)),
				'page' in t && r(10, (o = t.page)),
				'components' in t && r(2, (c = t.components)),
				'props_0' in t && r(3, (l = t.props_0)),
				'props_1' in t && r(4, (i = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && n.page.set(o);
		}),
		[s, a, c, l, i, u, p, f, h, n, o]
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
					r = e ? '[rel="stylesheet"]' : '';
				if (document.querySelector(`link[href="${t}"]${r}`)) return;
				const s = document.createElement('link');
				return (
					(s.rel = e ? 'stylesheet' : lt),
					e || ((s.as = 'script'), (s.crossOrigin = '')),
					(s.href = t),
					document.head.appendChild(s),
					e
						? new Promise((t, e) => {
								s.addEventListener('load', t), s.addEventListener('error', e);
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
	let e, r, s, a, n, o, c, l, i, h, f;
	return {
		c() {
			(e = I('svg')),
				(r = I('g')),
				(s = I('circle')),
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
			var m = p(e);
			r = u(m, 'g', { class: !0 }, 1);
			var v = p(r);
			(s = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(s).forEach(d),
				(a = u(v, 'g', { class: !0 }, 1));
			var g = p(a);
			(n = u(g, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(n).forEach(d),
				(o = u(g, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(o).forEach(d),
				g.forEach(d),
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
				m.forEach(d),
				this.h();
		},
		h() {
			_(s, 'cx', '25'),
				_(s, 'cy', '25'),
				_(s, 'r', '25'),
				_(s, 'class', 'svelte-wry6o5'),
				_(n, 'cx', '12.5'),
				_(n, 'cy', '25'),
				_(n, 'r', '12.5'),
				_(n, 'class', 'svelte-wry6o5'),
				_(o, 'cx', '38'),
				_(o, 'cy', '25'),
				_(o, 'r', '12.5'),
				_(o, 'class', 'svelte-wry6o5'),
				_(a, 'class', 'svelte-wry6o5'),
				_(l, 'cx', '6.5'),
				_(l, 'cy', '25'),
				_(l, 'r', '6.25'),
				_(l, 'class', 'svelte-wry6o5'),
				_(i, 'cx', '19'),
				_(i, 'cy', '25'),
				_(i, 'r', '6.25'),
				_(i, 'class', 'svelte-wry6o5'),
				_(h, 'cx', '31.5'),
				_(h, 'cy', '25'),
				_(h, 'r', '6.25'),
				_(h, 'class', 'svelte-wry6o5'),
				_(f, 'cx', '44'),
				_(f, 'cy', '25'),
				_(f, 'r', '6.25'),
				_(f, 'class', 'svelte-wry6o5'),
				_(c, 'class', 'svelte-wry6o5'),
				_(r, 'class', 'svelte-wry6o5'),
				_(e, 'class', 'logo svelte-wry6o5'),
				_(e, 'width', '51'),
				_(e, 'height', '51');
		},
		m(t, u) {
			m(t, e, u),
				v(e, r),
				v(r, s),
				v(r, a),
				v(a, n),
				v(a, o),
				v(r, c),
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
function dt(t, e, r) {
	const s = t.slice();
	return (s[9] = e[r].url), (s[10] = e[r].name), s;
}
function mt(t, e, r) {
	const s = t.slice();
	return (s[9] = e[r].url), (s[10] = e[r].name), s;
}
function vt(t) {
	let e,
		r,
		s = J,
		a = [];
	for (let n = 0; n < s.length; n += 1) a[n] = yt(dt(t, s, n));
	return {
		c() {
			e = i('nav');
			for (let t = 0; t < a.length; t += 1) a[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'NAV', { class: !0 });
			var r = p(e);
			for (let e = 0; e < a.length; e += 1) a[e].l(r);
			r.forEach(d), this.h();
		},
		h() {
			_(e, 'class', (r = B(t[4][t[1]]) + ' svelte-f5elk'));
		},
		m(t, r) {
			m(t, e, r);
			for (let s = 0; s < a.length; s += 1) a[s].m(e, null);
		},
		p(t, n) {
			if (1 & n) {
				let r;
				for (s = J, r = 0; r < s.length; r += 1) {
					const o = dt(t, s, r);
					a[r] ? a[r].p(o, n) : ((a[r] = yt(o)), a[r].c(), a[r].m(e, null));
				}
				for (; r < a.length; r += 1) a[r].d(1);
				a.length = s.length;
			}
			2 & n && r !== (r = B(t[4][t[1]]) + ' svelte-f5elk') && _(e, 'class', r);
		},
		i: E,
		o: E,
		d(t) {
			t && d(e), H(a, t);
		}
	};
}
function gt(t) {
	let e, r, s, a, n, o, c, l, h;
	s = new ft({});
	let f = J,
		g = [];
	for (let i = 0; i < f.length; i += 1) g[i] = wt(mt(t, f, i));
	return {
		c() {
			(e = i('div')), (r = i('div')), b(s.$$.fragment), (a = y()), (n = i('nav'));
			for (let t = 0; t < g.length; t += 1) g[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'DIV', { class: !0 });
			var o = p(e);
			r = u(o, 'DIV', { class: !0 });
			var c = p(r);
			k(s.$$.fragment, c), c.forEach(d), (a = $(o)), (n = u(o, 'NAV', { class: !0 }));
			var l = p(n);
			for (let e = 0; e < g.length; e += 1) g[e].l(l);
			l.forEach(d), o.forEach(d), this.h();
		},
		h() {
			_(r, 'class', 'ButtonNav svelte-f5elk'),
				_(n, 'class', (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-f5elk')),
				_(e, 'class', 'Variante_1 svelte-f5elk');
		},
		m(o, i) {
			m(o, e, i), v(e, r), z(s, r, null), v(e, a), v(e, n);
			for (let t = 0; t < g.length; t += 1) g[t].m(n, null);
			(c = !0),
				l ||
					((h = [j(r, 'click', t[7]), D(ut.call(null, e)), j(e, 'click_outside', t[3])]), (l = !0));
		},
		p(t, e) {
			if (9 & e) {
				let r;
				for (f = J, r = 0; r < f.length; r += 1) {
					const s = mt(t, f, r);
					g[r] ? g[r].p(s, e) : ((g[r] = wt(s)), g[r].c(), g[r].m(n, null));
				}
				for (; r < g.length; r += 1) g[r].d(1);
				g.length = f.length;
			}
			(!c ||
				(4 & e && o !== (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-f5elk'))) &&
				_(n, 'class', o);
		},
		i(t) {
			c || (C(s.$$.fragment, t), (c = !0));
		},
		o(t) {
			q(s.$$.fragment, t), (c = !1);
		},
		d(t) {
			t && d(e), A(s), H(g, t), (l = !1), U(h);
		}
	};
}
function yt(t) {
	let e,
		r,
		s,
		a,
		n,
		o = t[10] + '';
	return {
		c() {
			(e = i('a')), (r = h(o)), (s = y()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0 });
			var a = p(e);
			(r = f(a, o)), (s = $(a)), a.forEach(d), this.h();
		},
		h() {
			_(e, 'href', t[9]), _(e, 'class', 'svelte-f5elk'), P(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			m(o, e, c), v(e, r), v(e, s), a || ((n = j(e, 'click', t[6])), (a = !0));
		},
		p(t, r) {
			1 & r && P(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (a = !1), n();
		}
	};
}
function wt(t) {
	let e,
		r,
		s,
		a,
		n,
		o = t[10] + '';
	return {
		c() {
			(e = i('a')), (r = h(o)), (s = y()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0, role: !0 });
			var a = p(e);
			(r = f(a, o)), (s = $(a)), a.forEach(d), this.h();
		},
		h() {
			_(e, 'href', t[9]),
				_(e, 'class', 'NavItem svelte-f5elk'),
				_(e, 'role', 'navigation'),
				P(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			m(o, e, c),
				v(e, r),
				v(e, s),
				a || ((n = [j(e, 'click', t[5]), j(e, 'click', t[3])]), (a = !0));
		},
		p(t, r) {
			1 & r && P(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (a = !1), U(n);
		}
	};
}
function $t(t) {
	let e, r, s, a;
	const n = [gt, vt],
		o = [];
	function c(t, e) {
		return 1 === t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(r = o[e] = n[e](t)),
		{
			c() {
				r.c(), (s = w());
			},
			l(t) {
				r.l(t), (s = w());
			},
			m(t, r) {
				o[e].m(t, r), m(t, s, r), (a = !0);
			},
			p(t, [a]) {
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (N(),
						  q(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  O(),
						  (r = o[e]),
						  r ? r.p(t, a) : ((r = o[e] = n[e](t)), r.c()),
						  C(r, 1),
						  r.m(s.parentNode, s));
			},
			i(t) {
				a || (C(r), (a = !0));
			},
			o(t) {
				q(r), (a = !1);
			},
			d(t) {
				o[e].d(t), t && d(s);
			}
		}
	);
}
function Et(t, e, r) {
	let { current_page: s } = e,
		a = !1;
	let { variante: n = 0 } = e;
	return (
		(t.$$set = (t) => {
			'current_page' in t && r(0, (s = t.current_page)), 'variante' in t && r(1, (n = t.variante));
		}),
		[
			s,
			n,
			a,
			function () {
				r(2, (a = !1));
			},
			['Variante_0', 'Variante_1', 'Variante_2'],
			function (e) {
				T(t, e);
			},
			function (e) {
				T(t, e);
			},
			() => {
				r(2, (a = !a));
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
		r,
		s,
		a,
		n,
		o,
		c,
		l,
		g,
		w,
		x,
		b,
		k,
		z,
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
		T,
		P,
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
		rt;
	return {
		c() {
			(e = i('aside')),
				(r = i('small')),
				(s = h('Follow me at:')),
				(a = y()),
				(n = i('ul')),
				(o = i('li')),
				(c = i('a')),
				(l = I('svg')),
				(g = I('title')),
				(w = h('Instagram')),
				(x = I('circle')),
				(b = I('path')),
				(k = I('path')),
				(z = y()),
				(L = i('a')),
				(V = I('svg')),
				(C = I('title')),
				(q = h('Linkedin')),
				(A = I('path')),
				(S = y()),
				(M = i('a')),
				(R = I('svg')),
				(N = I('title')),
				(O = h('Algunos artículos en Medium')),
				(T = I('path')),
				(P = y()),
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
				(rt = I('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'ASIDE', { class: !0 });
			var i = p(e);
			r = u(i, 'SMALL', { class: !0 });
			var h = p(r);
			(s = f(h, 'Follow me at:')), h.forEach(d), (a = $(i)), (n = u(i, 'UL', { class: !0 }));
			var m = p(n);
			o = u(m, 'LI', { class: !0 });
			var v = p(o);
			c = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var y = p(c);
			l = u(y, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var E = p(l);
			g = u(E, 'title', { class: !0 }, 1);
			var _ = p(g);
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
				(z = $(v)),
				(L = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var I = p(L);
			V = u(I, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var st = p(V);
			C = u(st, 'title', { class: !0 }, 1);
			var at = p(C);
			(q = f(at, 'Linkedin')),
				at.forEach(d),
				(A = u(st, 'path', { d: !0, class: !0 }, 1)),
				p(A).forEach(d),
				st.forEach(d),
				I.forEach(d),
				(S = $(v)),
				(M = u(v, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var nt = p(M);
			R = u(nt, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ot = p(R);
			N = u(ot, 'title', { class: !0 }, 1);
			var ct = p(N);
			(O = f(ct, 'Algunos artículos en Medium')),
				ct.forEach(d),
				(T = u(ot, 'path', { d: !0, class: !0 }, 1)),
				p(T).forEach(d),
				ot.forEach(d),
				nt.forEach(d),
				(P = $(v)),
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
			var mt = p(Q);
			tt = u(mt, 'title', { class: !0 }, 1);
			var vt = p(tt);
			(et = f(vt, 'Facebook')),
				vt.forEach(d),
				(rt = u(mt, 'path', { d: !0, class: !0 }, 1)),
				p(rt).forEach(d),
				mt.forEach(d),
				dt.forEach(d),
				v.forEach(d),
				m.forEach(d),
				i.forEach(d),
				this.h();
		},
		h() {
			_(r, 'class', 'svelte-m3rrmz'),
				_(g, 'class', 'svelte-m3rrmz'),
				_(x, 'cx', '12.145'),
				_(x, 'cy', '3.892'),
				_(x, 'r', '0.96'),
				_(x, 'class', 'svelte-m3rrmz'),
				_(
					b,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				_(b, 'class', 'svelte-m3rrmz'),
				_(
					k,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				_(k, 'class', 'svelte-m3rrmz'),
				_(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(l, 'viewBox', '0 0 16 16'),
				_(l, 'class', 'svelte-m3rrmz'),
				_(c, 'href', 'https://www.instagram.com/t.o.d.h/'),
				_(c, 'target', '_blank'),
				_(c, 'rel', 'noopener'),
				_(c, 'class', 'svelte-m3rrmz'),
				_(C, 'class', 'svelte-m3rrmz'),
				_(
					A,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				_(A, 'class', 'svelte-m3rrmz'),
				_(V, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(V, 'viewBox', '0 0 16 16'),
				_(V, 'class', 'svelte-m3rrmz'),
				_(L, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				_(L, 'target', '_blank'),
				_(L, 'rel', 'noopener'),
				_(L, 'class', 'svelte-m3rrmz'),
				_(N, 'class', 'svelte-m3rrmz'),
				_(
					T,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				_(T, 'class', 'svelte-m3rrmz'),
				_(R, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(R, 'viewBox', '0 0 16 16'),
				_(R, 'class', 'svelte-m3rrmz'),
				_(M, 'href', 'https://medium.com/@todh'),
				_(M, 'target', '_blank'),
				_(M, 'rel', 'noopener'),
				_(M, 'class', 'svelte-m3rrmz'),
				_(H, 'class', 'svelte-m3rrmz'),
				_(
					D,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				_(D, 'class', 'svelte-m3rrmz'),
				_(B, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(B, 'viewBox', '0 0 16 16'),
				_(B, 'class', 'svelte-m3rrmz'),
				_(j, 'href', 'https://twitter.com/t0tinspire'),
				_(j, 'target', '_blank'),
				_(j, 'rel', 'noopener'),
				_(j, 'class', 'svelte-m3rrmz'),
				_(W, 'class', 'svelte-m3rrmz'),
				_(Y, 'fill-rule', 'evenodd'),
				_(Y, 'clip-rule', 'evenodd'),
				_(
					Y,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				_(Y, 'class', 'svelte-m3rrmz'),
				_(G, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(G, 'viewBox', '0 0 16 16'),
				_(G, 'class', 'svelte-m3rrmz'),
				_(F, 'href', 'https://github.com/t0t'),
				_(F, 'target', '_blank'),
				_(F, 'rel', 'noopener'),
				_(F, 'class', 'svelte-m3rrmz'),
				_(tt, 'class', 'svelte-m3rrmz'),
				_(
					rt,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				_(rt, 'class', 'svelte-m3rrmz'),
				_(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(Q, 'viewBox', '0 0 16 16'),
				_(Q, 'class', 'svelte-m3rrmz'),
				_(X, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				_(X, 'target', '_blank'),
				_(X, 'rel', 'noopener'),
				_(X, 'class', 'svelte-m3rrmz'),
				_(o, 'class', 'svelte-m3rrmz'),
				_(n, 'class', 'svelte-m3rrmz'),
				_(e, 'class', 'Links svelte-m3rrmz');
		},
		m(t, i) {
			m(t, e, i),
				v(e, r),
				v(r, s),
				v(e, a),
				v(e, n),
				v(n, o),
				v(o, c),
				v(c, l),
				v(l, g),
				v(g, w),
				v(l, x),
				v(l, b),
				v(l, k),
				v(o, z),
				v(o, L),
				v(L, V),
				v(V, C),
				v(C, q),
				v(V, A),
				v(o, S),
				v(o, M),
				v(M, R),
				v(R, N),
				v(N, O),
				v(R, T),
				v(o, P),
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
				v(Q, rt);
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
	let e, r, s;
	return (
		(r = new bt({})),
		{
			c() {
				(e = i('footer')), b(r.$$.fragment), this.h();
			},
			l(t) {
				e = u(t, 'FOOTER', { class: !0 });
				var s = p(e);
				k(r.$$.fragment, s), s.forEach(d), this.h();
			},
			h() {
				_(e, 'class', 'svelte-lti6kl');
			},
			m(t, a) {
				m(t, e, a), z(r, e, null), (s = !0);
			},
			p: E,
			i(t) {
				s || (C(r.$$.fragment, t), (s = !0));
			},
			o(t) {
				q(r.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && d(e), A(r);
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
	let e, r, s, a, n, o, c, l, h;
	(document.title = e = 'SvelteKit UI - ' + t[0]),
		(a = new xt({ props: { current_page: t[0], variante: 1 } })),
		a.$on('click', t[1]);
	const f = t[3].default,
		g = K(f, t, t[2], null);
	return (
		(l = new zt({})),
		{
			c() {
				(r = y()),
					(s = i('main')),
					b(a.$$.fragment),
					(n = y()),
					(o = i('section')),
					g && g.c(),
					(c = y()),
					b(l.$$.fragment);
			},
			l(t) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(r = $(t)),
					(s = u(t, 'MAIN', {}));
				var e = p(s);
				k(a.$$.fragment, e), (n = $(e)), (o = u(e, 'SECTION', {}));
				var i = p(o);
				g && g.l(i), i.forEach(d), (c = $(e)), k(l.$$.fragment, e), e.forEach(d);
			},
			m(t, e) {
				m(t, r, e),
					m(t, s, e),
					z(a, s, null),
					v(s, n),
					v(s, o),
					g && g.m(o, null),
					v(s, c),
					z(l, s, null),
					(h = !0);
			},
			p(t, [r]) {
				(!h || 1 & r) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e);
				const s = {};
				1 & r && (s.current_page = t[0]),
					a.$set(s),
					g && g.p && 4 & r && G(g, f, t, t[2], r, null, null);
			},
			i(t) {
				h || (C(a.$$.fragment, t), C(g, t), C(l.$$.fragment, t), (h = !0));
			},
			o(t) {
				q(a.$$.fragment, t), q(g, t), q(l.$$.fragment, t), (h = !1);
			},
			d(t) {
				t && d(r), t && d(s), A(a), g && g.d(t), A(l);
			}
		}
	);
}
function Vt(t, e, r) {
	let { $$slots: s = {}, $$scope: a } = e,
		n = '';
	return (
		(t.$$set = (t) => {
			'$$scope' in t && r(2, (a = t.$$scope));
		}),
		[
			n,
			(t) => {
				r(0, (n = t.srcElement.firstChild.data));
			},
			a,
			s
		]
	);
}
var Ct = Object.freeze({
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
			ht(() => import('./pages/index.svelte-fc569a43.js'), [
				'/_app/pages/index.svelte-fc569a43.js',
				'/_app/assets/pages/index.svelte-2235a02f.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-4b9a87b3.js',
				'/_app/assets/Cover-704a60ad.css',
				'/_app/chunks/Section-62f6895b.js',
				'/_app/assets/Section-5c957ed9.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/pages-26a130a6.js'
			]),
		() =>
			ht(() => import('./pages/philosophy/index.svelte-7f402a88.js'), [
				'/_app/pages/philosophy/index.svelte-7f402a88.js',
				'/_app/assets/pages/philosophy/index.svelte-3d1995db.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-4b9a87b3.js',
				'/_app/assets/Cover-704a60ad.css',
				'/_app/chunks/Section-62f6895b.js',
				'/_app/assets/Section-5c957ed9.css'
			]),
		() =>
			ht(() => import('./pages/artworks/index.svelte-10345df4.js'), [
				'/_app/pages/artworks/index.svelte-10345df4.js',
				'/_app/assets/pages/artworks/index.svelte-00578878.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-4b9a87b3.js',
				'/_app/assets/Cover-704a60ad.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-62f6895b.js',
				'/_app/assets/Section-5c957ed9.css'
			]),
		() =>
			ht(() => import('./pages/about/index.svelte-a55c954a.js'), [
				'/_app/pages/about/index.svelte-a55c954a.js',
				'/_app/assets/pages/about/index.svelte-98dc6577.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-62f6895b.js',
				'/_app/assets/Section-5c957ed9.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			ht(() => import('./pages/lab/index.svelte-fec1705d.js'), [
				'/_app/pages/lab/index.svelte-fec1705d.js',
				'/_app/assets/pages/lab/index.svelte-883c6c86.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-4b9a87b3.js',
				'/_app/assets/Cover-704a60ad.css',
				'/_app/chunks/Section-62f6895b.js',
				'/_app/assets/Section-5c957ed9.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	At = [
		[/^\/$/, [qt[0]]],
		[/^\/philosophy\/?$/, [qt[1]]],
		[/^\/artworks\/?$/, [qt[2]]],
		[/^\/about\/?$/, [qt[3]]],
		[/^\/lab\/?$/, [qt[4]]]
	];
function St() {
	return { x: pageXOffset, y: pageYOffset };
}
function Mt(t) {
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
						const t = n(n({}, history.state || {}), { 'sveltekit:scroll': St() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const r = (t) => {
			const e = Mt(t.target);
			e && e.hasAttribute('sveltekit:prefetch') && this.prefetch(new URL(e.href));
		};
		let s;
		addEventListener('touchstart', r),
			addEventListener('mousemove', (t) => {
				clearTimeout(s),
					(s = setTimeout(() => {
						r(t);
					}, 20));
			}),
			addEventListener('click', (t) => {
				if (!this.enabled) return;
				if (t.button || 1 !== t.which) return;
				if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
				if (t.defaultPrevented) return;
				const e = Mt(t.target);
				if (!e) return;
				if (!e.href) return;
				const r = 'object' == typeof e.href && 'SVGAnimatedString' === e.href.constructor.name,
					s = String(r ? e.href.baseVal : e.href);
				if (s === location.href) return void (location.hash || t.preventDefault());
				if (e.hasAttribute('download') || 'external' === e.getAttribute('rel')) return;
				if (r ? e.target.baseVal : e.target) return;
				const a = new URL(s);
				if (a.pathname === location.pathname && a.search === location.search) return;
				const n = this.parse(a);
				if (n) {
					const r = e.hasAttribute('sveltekit:noscroll');
					history.pushState({}, '', a.href),
						this._navigate(n, r ? St() : null, [], a.hash),
						t.preventDefault();
				}
			}),
			addEventListener('popstate', (t) => {
				if (t.state && this.enabled) {
					const e = new URL(location.href),
						r = this.parse(e);
					r ? this._navigate(r, t.state['sveltekit:scroll'], []) : (location.href = location.href);
				}
			}),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	parse(t) {
		if (t.origin !== location.origin) return null;
		if (!t.pathname.startsWith(this.base)) return null;
		const e = t.pathname.slice(this.base.length) || '/',
			r = this.routes.filter(([t]) => t.test(e));
		if (r.length > 0) {
			const s = new URLSearchParams(t.search);
			return { id: `${e}?${s}`, routes: r, path: e, query: s };
		}
	}
	async goto(t, { noscroll: e = !1, replaceState: r = !1 } = {}, s) {
		if (this.enabled) {
			const a = new URL(
					t,
					(function (t) {
						let e = t.baseURI;
						if (!e) {
							const r = t.getElementsByTagName('base');
							e = r.length ? r[0].href : t.URL;
						}
						return e;
					})(document)
				),
				n = this.parse(a);
			if (n)
				return (
					history[r ? 'replaceState' : 'pushState']({}, '', t),
					this._navigate(n, e ? St() : null, s, a.hash)
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
	async _navigate(t, e, r, s) {
		this.renderer.notify({ path: t.path, query: t.query }),
			location.pathname.endsWith('/') &&
				'/' !== location.pathname &&
				history.replaceState({}, '', `${location.pathname.slice(0, -1)}${location.search}`),
			await this.renderer.update(t, r),
			document.body.focus();
		const a = s && document.getElementById(s.slice(1));
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
			r = t.status;
		return e instanceof Error
			? !r || r < 400 || r > 599
				? (console.warn(
						'"error" returned from load() without a valid status code — defaulting to 500'
				  ),
				  { status: 500, error: e })
				: { status: r, error: e }
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
	let r = !0;
	return {
		notify: function () {
			(r = !0), e.update((t) => t);
		},
		set: function (t) {
			(r = !1), e.set(t);
		},
		subscribe: function (t) {
			let s;
			return e.subscribe((e) => {
				(void 0 === s || (r && e !== s)) && t((s = e));
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
				if (null != t && r) for (var o of r(t)) a.indexOf(o) < 0 && s.call(t, o) && (n[o] = t[o]);
				return n;
			})(t, ['body']);
		return Promise.resolve(new Response(a, n));
	}
	return fetch(t, a);
}
class Tt {
	constructor({ Root: t, layout: e, target: r, session: s, host: a }) {
		(this.Root = t),
			(this.layout = e),
			(this.host = a),
			(this.router = null),
			(this.target = r),
			(this.started = !1),
			(this.current = { page: null, query: null, session_changed: !1, nodes: [], contexts: [] }),
			(this.caches = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: Ot({}), navigating: W(null), session: W(s) }),
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
		const r = (this.token = {}),
			s = await this._get_navigation_result(t);
		if (r !== this.token) return;
		if (s.reload) location.reload();
		else if (s.redirect) {
			if (!(e.length > 10 || e.includes(t.path)))
				return void (this.router
					? this.router.goto(s.redirect, { replaceState: !0 }, [...e, t.path])
					: (location.href = new URL(s.redirect, location.href).href));
			this.root.$set({ status: 500, error: new Error('Redirect loop') });
		} else
			this.started
				? ((this.current = s.state),
				  this.root.$set(s.props),
				  this.stores.navigating.set(null),
				  await 0)
				: this._init(s);
		dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null);
		!1 === s.state.nodes[s.state.nodes.length - 1].module.router
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
			const r = t.routes[e],
				[s, a, n] = r;
			if (1 === r.length) return { reload: !0 };
			let o = e + 1;
			for (; o < t.routes.length; ) {
				const e = t.routes[o];
				if (e[0].toString() !== s.toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (o += 1);
			}
			const c = a.map((t) => t()),
				l = {
					host: this.host,
					path: t.path,
					params: n ? n(r[0].exec(t.path)) : {},
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
	async _load({ status: t, error: e, nodes: r, page: s }) {
		const a = s.query.toString(),
			o = {
				state: { page: s, query: a, session_changed: !1, nodes: [], contexts: [] },
				props: { status: t, error: e, components: [] }
			},
			c = {
				path: !this.current.page || s.path !== this.current.page.path,
				params: Object.keys(s.params).filter(
					(t) => !this.current.page || this.current.page.params[t] !== s.params[t]
				),
				query: a !== this.current.query,
				session: this.current.session_changed,
				context: !1
			};
		try {
			const t = [this.layout, ...r],
				l = [];
			let i;
			for (let r = 0; r < t.length; r += 1) {
				const h = this.current.nodes[r],
					u = this.current.contexts[r],
					p = await t[r];
				if (((o.props.components[r] = p.default), p.preload))
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
					const h = s.path + a,
						u = this.caches.get(p),
						f = u && u.get(h);
					let d, m;
					if (!f || (c.context && f.node.uses.context)) {
						d = {
							module: p,
							uses: { params: new Set(), path: !1, query: !1, session: !1, context: !1 }
						};
						const a = {};
						for (const t in s.params)
							Object.defineProperty(a, t, {
								get: () => (d.uses.params.add(t), s.params[t]),
								enumerable: !0
							});
						const o = this.$session;
						if (p.load) {
							m = await p.load.call(null, {
								page: {
									host: s.host,
									params: a,
									get path() {
										return (d.uses.path = !0), s.path;
									},
									get query() {
										return (d.uses.query = !0), s.query;
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
							const c = r === t.length - 1 && !e;
							if (!m && c) return;
						}
					} else ({ node: d, loaded: m } = f);
					if (m) {
						if (((m = Nt(m)), m.error)) {
							if (e) throw e;
							return await this._load({
								status: m.status || 500,
								error: m.error,
								nodes: [],
								page: { host: s.host, path: s.path, query: s.query, params: {} }
							});
						}
						if (m.redirect) return { redirect: m.redirect };
						if ((m.context && ((c.context = !0), (i = n(n({}, i), m.context))), m.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const t = this.caches.get(p),
								e = { node: d, loaded: m };
							t.set(h, e);
							let r = !1;
							const s = setTimeout(() => {
									a();
								}, 1e3 * m.maxage),
								a = () => {
									t.get(h) === e && t.delete(h), n(), clearTimeout(s);
								},
								n = this.stores.session.subscribe(() => {
									r && a();
								});
							r = !0;
						}
						l[r] = m.props;
					}
					(o.state.nodes[r] = d), (o.state.contexts[r] = i);
				} else (o.state.nodes[r] = h), (o.state.contexts[r] = i = u);
			}
			return (
				(await Promise.all(l)).forEach((t, e) => {
					t && (o.props[`props_${e}`] = t);
				}),
				(this.current.page && s.path === this.current.page.path && !c.query) || (o.props.page = s),
				o
			);
		} catch (l) {
			if (e) throw e;
			return await this._load({
				status: 500,
				error: l,
				nodes: [],
				page: { host: s.host, path: s.path, query: s.query, params: {} }
			});
		}
	}
}
async function Pt({ paths: t, target: e, session: r, host: s, route: a, hydrate: n }) {
	const o = a && new Rt({ base: t.base, routes: At }),
		c = new Tt({ Root: ct, layout: Ct, target: e, session: r, host: s });
	n && (await c.start(n)), a && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Pt as start };
