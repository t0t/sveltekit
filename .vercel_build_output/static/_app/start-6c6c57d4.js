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
	g as m,
	h as v,
	j as $,
	k as y,
	l as b,
	n as w,
	m as x,
	o as E,
	p as _,
	q as k,
	r as L,
	u as V,
	v as q,
	w as R,
	x as C,
	y as S,
	z as A,
	A as M,
	B as O,
	C as N,
	D as j,
	E as P,
	F as T,
	G as I,
	H as B,
	I as D,
	J as H,
	K as U,
	L as z,
	M as K,
	N as F,
	O as G
} from './chunks/index-d91e1ed8.js';
/* empty css                               */ import { w as W } from './chunks/index-cc16b092.js';
import { p as J } from './chunks/pages-6818a1c6.js';
import { L as Y, a as Z } from './chunks/ListItem-8591f839.js';
function X(t) {
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
			g(t, e, r), m(e, s);
		},
		p(t, e) {
			2 & e && r !== (r = t[1].stack + '') && v(s, r);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Q(t) {
	let e,
		s,
		r,
		a,
		n,
		o,
		c,
		l = t[1].message + '',
		x = t[1].stack && X(t);
	return {
		c() {
			(e = i('h1')),
				(s = h(t[0])),
				(r = $()),
				(a = i('p')),
				(n = h(l)),
				(o = $()),
				x && x.c(),
				(c = y());
		},
		l(i) {
			e = u(i, 'H1', {});
			var h = p(e);
			(s = f(h, t[0])), h.forEach(d), (r = b(i)), (a = u(i, 'P', {}));
			var g = p(a);
			(n = f(g, l)), g.forEach(d), (o = b(i)), x && x.l(i), (c = y());
		},
		m(t, l) {
			g(t, e, l), m(e, s), g(t, r, l), g(t, a, l), m(a, n), g(t, o, l), x && x.m(t, l), g(t, c, l);
		},
		p(t, [e]) {
			1 & e && v(s, t[0]),
				2 & e && l !== (l = t[1].message + '') && v(n, l),
				t[1].stack
					? x
						? x.p(t, e)
						: ((x = X(t)), x.c(), x.m(c.parentNode, c))
					: x && (x.d(1), (x = null));
		},
		i: w,
		o: w,
		d(t) {
			t && d(e), t && d(r), t && d(a), t && d(o), x && x.d(t), t && d(c);
		}
	};
}
function tt(t, e, s) {
	let { status: r } = e,
		{ error: a } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)), 'error' in t && s(1, (a = t.error));
		}),
		[r, a]
	);
}
class et extends o {
	constructor(t) {
		super(), c(this, t, tt, Q, l, { status: 0, error: 1 });
	}
}
function st(t) {
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
				const c = 16 & r ? V(a, [q(t[4] || {})]) : {};
				if (n !== (n = t[2][1])) {
					if (e) {
						N();
						const t = e;
						C(t.$$.fragment, 1, 0, () => {
							S(t, 1);
						}),
							j();
					}
					n
						? ((e = new n(o())), _(e.$$.fragment), R(e.$$.fragment, 1), L(e, s.parentNode, s))
						: (e = null);
				} else n && e.$set(c);
			},
			i(t) {
				r || (e && R(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				e && C(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(s), e && S(e, t);
			}
		}
	);
}
function rt(t) {
	let e, s;
	return (
		(e = new et({ props: { status: t[0], error: t[1] } })),
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
				s || (R(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				C(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function at(t) {
	let e, s, r, a;
	const n = [rt, st],
		o = [];
	function c(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
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
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (N(),
						  C(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  j(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  R(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (R(s), (a = !0));
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
function nt(t) {
	let e,
		s = t[6] && ot(t);
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
			E(e, 'id', 'svelte-announcer'),
				E(e, 'aria-live', 'assertive'),
				E(e, 'aria-atomic', 'true'),
				E(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			g(t, e, r), s && s.m(e, null);
		},
		p(t, r) {
			t[6] ? (s ? s.p(t, r) : ((s = ot(t)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(t) {
			t && d(e), s && s.d();
		}
	};
}
function ot(t) {
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
			128 & e && v(s, t[7]);
		},
		d(t) {
			t && d(e), t && d(s);
		}
	};
}
function ct(t) {
	let e, s, r, a;
	const n = [t[3] || {}];
	let o = { $$slots: { default: [at] }, $$scope: { ctx: t } };
	for (let l = 0; l < n.length; l += 1) o = x(o, n[l]);
	e = new t[8]({ props: o });
	let c = t[5] && nt(t);
	return {
		c() {
			_(e.$$.fragment), (s = $()), c && c.c(), (r = y());
		},
		l(t) {
			k(e.$$.fragment, t), (s = b(t)), c && c.l(t), (r = y());
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
						: ((c = nt(t)), c.c(), c.m(r.parentNode, r))
					: c && (c.d(1), (c = null));
		},
		i(t) {
			a || (R(e.$$.fragment, t), (a = !0));
		},
		o(t) {
			C(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			S(e, t), t && d(s), c && c.d(t), t && d(r);
		}
	};
}
function lt(t, e, s) {
	let { status: r } = e,
		{ error: a } = e,
		{ stores: n } = e,
		{ page: o } = e,
		{ components: c } = e,
		{ props_0: l = null } = e,
		{ props_1: i = null } = e;
	const h = c[0];
	A('__svelte__', n), M(n.page.notify);
	let u = !1,
		p = !1,
		f = null;
	return (
		O(() => {
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
class it extends o {
	constructor(t) {
		super(),
			c(this, t, lt, ct, l, {
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
let ht;
const ut = {},
	pt = function (t, e) {
		if (!e) return t();
		if (void 0 === ht) {
			const t = document.createElement('link').relList;
			ht = t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			e.map((t) => {
				if (t in ut) return;
				ut[t] = !0;
				const e = t.endsWith('.css'),
					s = e ? '[rel="stylesheet"]' : '';
				if (document.querySelector(`link[href="${t}"]${s}`)) return;
				const r = document.createElement('link');
				return (
					(r.rel = e ? 'stylesheet' : ht),
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
function ft(t) {
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
function dt(t) {
	let e, s, r, a, n, o, c, l, i, h, f;
	return {
		c() {
			(e = P('svg')),
				(s = P('g')),
				(r = P('circle')),
				(a = P('g')),
				(n = P('circle')),
				(o = P('circle')),
				(c = P('g')),
				(l = P('circle')),
				(i = P('circle')),
				(h = P('circle')),
				(f = P('circle')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var g = p(e);
			s = u(g, 'g', { class: !0 }, 1);
			var m = p(s);
			(r = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(r).forEach(d),
				(a = u(m, 'g', { class: !0 }, 1));
			var v = p(a);
			(n = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(n).forEach(d),
				(o = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(o).forEach(d),
				v.forEach(d),
				(c = u(m, 'g', { class: !0 }, 1));
			var $ = p(c);
			(l = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(l).forEach(d),
				(i = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(i).forEach(d),
				(h = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(h).forEach(d),
				(f = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(f).forEach(d),
				$.forEach(d),
				m.forEach(d),
				g.forEach(d),
				this.h();
		},
		h() {
			E(r, 'cx', '25'),
				E(r, 'cy', '25'),
				E(r, 'r', '25'),
				E(r, 'class', 'svelte-1sarock'),
				E(n, 'cx', '12.5'),
				E(n, 'cy', '25'),
				E(n, 'r', '12.5'),
				E(n, 'class', 'svelte-1sarock'),
				E(o, 'cx', '38'),
				E(o, 'cy', '25'),
				E(o, 'r', '12.5'),
				E(o, 'class', 'svelte-1sarock'),
				E(a, 'class', 'svelte-1sarock'),
				E(l, 'cx', '6.5'),
				E(l, 'cy', '25'),
				E(l, 'r', '6.25'),
				E(l, 'class', 'svelte-1sarock'),
				E(i, 'cx', '19'),
				E(i, 'cy', '25'),
				E(i, 'r', '6.25'),
				E(i, 'class', 'svelte-1sarock'),
				E(h, 'cx', '31.5'),
				E(h, 'cy', '25'),
				E(h, 'r', '6.25'),
				E(h, 'class', 'svelte-1sarock'),
				E(f, 'cx', '44'),
				E(f, 'cy', '25'),
				E(f, 'r', '6.25'),
				E(f, 'class', 'svelte-1sarock'),
				E(c, 'class', 'svelte-1sarock'),
				E(s, 'class', 'svelte-1sarock'),
				E(e, 'class', 'logo svelte-1sarock'),
				E(e, 'width', '51'),
				E(e, 'height', '51');
		},
		m(t, u) {
			g(t, e, u),
				m(e, s),
				m(s, r),
				m(s, a),
				m(a, n),
				m(a, o),
				m(s, c),
				m(c, l),
				m(c, i),
				m(c, h),
				m(c, f);
		},
		p: w,
		i: w,
		o: w,
		d(t) {
			t && d(e);
		}
	};
}
class gt extends o {
	constructor(t) {
		super(), c(this, t, null, dt, l, {});
	}
}
function mt(t, e, s) {
	const r = t.slice();
	return (r[9] = e[s].url), (r[10] = e[s].name), r;
}
function vt(t, e, s) {
	const r = t.slice();
	return (r[9] = e[s].url), (r[10] = e[s].name), r;
}
function $t(t) {
	let e,
		s,
		r = J,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = bt(mt(t, r, n));
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
			E(e, 'class', (s = D(t[4][t[1]]) + ' svelte-1h27k2l'));
		},
		m(t, s) {
			g(t, e, s);
			for (let r = 0; r < a.length; r += 1) a[r].m(e, null);
		},
		p(t, n) {
			if (1 & n) {
				let s;
				for (r = J, s = 0; s < r.length; s += 1) {
					const o = mt(t, r, s);
					a[s] ? a[s].p(o, n) : ((a[s] = bt(o)), a[s].c(), a[s].m(e, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = D(t[4][t[1]]) + ' svelte-1h27k2l') && E(e, 'class', s);
		},
		i: w,
		o: w,
		d(t) {
			t && d(e), H(a, t);
		}
	};
}
function yt(t) {
	let e, s, r, a, n, o, c, l, h;
	r = new gt({});
	let f = J,
		v = [];
	for (let i = 0; i < f.length; i += 1) v[i] = wt(vt(t, f, i));
	return {
		c() {
			(e = i('div')), (s = i('div')), _(r.$$.fragment), (a = $()), (n = i('nav'));
			for (let t = 0; t < v.length; t += 1) v[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'DIV', { class: !0 });
			var o = p(e);
			s = u(o, 'DIV', { class: !0 });
			var c = p(s);
			k(r.$$.fragment, c), c.forEach(d), (a = b(o)), (n = u(o, 'NAV', { class: !0 }));
			var l = p(n);
			for (let e = 0; e < v.length; e += 1) v[e].l(l);
			l.forEach(d), o.forEach(d), this.h();
		},
		h() {
			E(s, 'class', 'ButtonNav svelte-1h27k2l'),
				E(n, 'class', (o = D(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-1h27k2l')),
				E(e, 'class', 'Variante_1 svelte-1h27k2l');
		},
		m(o, i) {
			g(o, e, i), m(e, s), L(r, s, null), m(e, a), m(e, n);
			for (let t = 0; t < v.length; t += 1) v[t].m(n, null);
			(c = !0),
				l ||
					((h = [B(s, 'click', t[7]), z(ft.call(null, e)), B(e, 'click_outside', t[3])]), (l = !0));
		},
		p(t, e) {
			if (9 & e) {
				let s;
				for (f = J, s = 0; s < f.length; s += 1) {
					const r = vt(t, f, s);
					v[s] ? v[s].p(r, e) : ((v[s] = wt(r)), v[s].c(), v[s].m(n, null));
				}
				for (; s < v.length; s += 1) v[s].d(1);
				v.length = f.length;
			}
			(!c ||
				(4 & e &&
					o !== (o = D(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-1h27k2l'))) &&
				E(n, 'class', o);
		},
		i(t) {
			c || (R(r.$$.fragment, t), (c = !0));
		},
		o(t) {
			C(r.$$.fragment, t), (c = !1);
		},
		d(t) {
			t && d(e), S(r), H(v, t), (l = !1), U(h);
		}
	};
}
function bt(t) {
	let e,
		s,
		r,
		a,
		n,
		o = t[10] + '';
	return {
		c() {
			(e = i('a')), (s = h(o)), (r = $()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0 });
			var a = p(e);
			(s = f(a, o)), (r = b(a)), a.forEach(d), this.h();
		},
		h() {
			E(e, 'href', t[9]), E(e, 'class', 'svelte-1h27k2l'), I(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			g(o, e, c), m(e, s), m(e, r), a || ((n = B(e, 'click', t[6])), (a = !0));
		},
		p(t, s) {
			1 & s && I(e, 'active', t[10] === t[0]);
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
			(e = i('a')), (s = h(o)), (r = $()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0, role: !0 });
			var a = p(e);
			(s = f(a, o)), (r = b(a)), a.forEach(d), this.h();
		},
		h() {
			E(e, 'href', t[9]),
				E(e, 'class', 'NavItem svelte-1h27k2l'),
				E(e, 'role', 'navigation'),
				I(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			g(o, e, c),
				m(e, s),
				m(e, r),
				a || ((n = [B(e, 'click', t[5]), B(e, 'click', t[3])]), (a = !0));
		},
		p(t, s) {
			1 & s && I(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (a = !1), U(n);
		}
	};
}
function xt(t) {
	let e, s, r, a;
	const n = [yt, $t],
		o = [];
	function c(t, e) {
		return 1 === t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
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
				let l = e;
				(e = c(t)),
					e === l
						? o[e].p(t, a)
						: (N(),
						  C(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  j(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  R(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (R(s), (a = !0));
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
class _t extends o {
	constructor(t) {
		super(), c(this, t, Et, xt, l, { current_page: 0, variante: 1 });
	}
}
function kt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = P('svg')), (s = P('title')), (r = h('Linkedin')), (a = P('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Linkedin')),
				o.forEach(d),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(d),
				n.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-ob1bf'),
				E(
					a,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				E(a, 'class', 'svelte-ob1bf'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-ob1bf');
		},
		m(t, n) {
			g(t, e, n), m(e, s), m(s, r), m(e, a);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Lt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = P('svg')),
				(s = P('title')),
				(r = h('Algunos artículos en Medium')),
				(a = P('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Algunos artículos en Medium')),
				o.forEach(d),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(d),
				n.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-ob1bf'),
				E(
					a,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				E(a, 'class', 'svelte-ob1bf'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-ob1bf');
		},
		m(t, n) {
			g(t, e, n), m(e, s), m(s, r), m(e, a);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Vt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = P('svg')), (s = P('title')), (r = h('Twitter')), (a = P('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Twitter')),
				o.forEach(d),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(d),
				n.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-ob1bf'),
				E(
					a,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				E(a, 'class', 'svelte-ob1bf'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-ob1bf');
		},
		m(t, n) {
			g(t, e, n), m(e, s), m(s, r), m(e, a);
		},
		d(t) {
			t && d(e);
		}
	};
}
function qt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = P('svg')),
				(s = P('title')),
				(r = h('Mi repositorio en Github')),
				(a = P('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Mi repositorio en Github')),
				o.forEach(d),
				(a = u(n, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				p(a).forEach(d),
				n.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-ob1bf'),
				E(a, 'fill-rule', 'evenodd'),
				E(a, 'clip-rule', 'evenodd'),
				E(
					a,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				E(a, 'class', 'svelte-ob1bf'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-ob1bf');
		},
		m(t, n) {
			g(t, e, n), m(e, s), m(s, r), m(e, a);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Rt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = P('svg')), (s = P('title')), (r = h('Facebook')), (a = P('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Facebook')),
				o.forEach(d),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(d),
				n.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-ob1bf'),
				E(
					a,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				E(a, 'class', 'svelte-ob1bf'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-ob1bf');
		},
		m(t, n) {
			g(t, e, n), m(e, s), m(s, r), m(e, a);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Ct(t) {
	let e, s, r, a, n, o, c, l, i, h;
	return (
		(e = new Z({
			props: {
				tipo: 2,
				variante: 9,
				href: 'https://www.linkedin.com/in/sergiofores/',
				target: '_blank',
				rel: 'noopener',
				$$slots: { default: [kt] },
				$$scope: { ctx: t }
			}
		})),
		(r = new Z({
			props: {
				tipo: 2,
				variante: 9,
				href: 'https://medium.com/@todh',
				target: '_blank',
				rel: 'noopener',
				$$slots: { default: [Lt] },
				$$scope: { ctx: t }
			}
		})),
		(n = new Z({
			props: {
				tipo: 2,
				variante: 9,
				href: 'https://twitter.com/t0tinspire',
				target: '_blank',
				rel: 'noopener',
				$$slots: { default: [Vt] },
				$$scope: { ctx: t }
			}
		})),
		(c = new Z({
			props: {
				tipo: 2,
				variante: 9,
				href: 'https://github.com/t0t',
				target: '_blank',
				rel: 'noopener',
				$$slots: { default: [qt] },
				$$scope: { ctx: t }
			}
		})),
		(i = new Z({
			props: {
				tipo: 2,
				variante: 9,
				href: 'https://www.facebook.com/TODH-2139705836275088',
				target: '_blank',
				rel: 'noopener',
				$$slots: { default: [Rt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				_(e.$$.fragment),
					(s = $()),
					_(r.$$.fragment),
					(a = $()),
					_(n.$$.fragment),
					(o = $()),
					_(c.$$.fragment),
					(l = $()),
					_(i.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t),
					(s = b(t)),
					k(r.$$.fragment, t),
					(a = b(t)),
					k(n.$$.fragment, t),
					(o = b(t)),
					k(c.$$.fragment, t),
					(l = b(t)),
					k(i.$$.fragment, t);
			},
			m(t, u) {
				L(e, t, u),
					g(t, s, u),
					L(r, t, u),
					g(t, a, u),
					L(n, t, u),
					g(t, o, u),
					L(c, t, u),
					g(t, l, u),
					L(i, t, u),
					(h = !0);
			},
			p(t, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: t }), e.$set(a);
				const o = {};
				1 & s && (o.$$scope = { dirty: s, ctx: t }), r.$set(o);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: t }), n.$set(l);
				const h = {};
				1 & s && (h.$$scope = { dirty: s, ctx: t }), c.$set(h);
				const u = {};
				1 & s && (u.$$scope = { dirty: s, ctx: t }), i.$set(u);
			},
			i(t) {
				h ||
					(R(e.$$.fragment, t),
					R(r.$$.fragment, t),
					R(n.$$.fragment, t),
					R(c.$$.fragment, t),
					R(i.$$.fragment, t),
					(h = !0));
			},
			o(t) {
				C(e.$$.fragment, t),
					C(r.$$.fragment, t),
					C(n.$$.fragment, t),
					C(c.$$.fragment, t),
					C(i.$$.fragment, t),
					(h = !1);
			},
			d(t) {
				S(e, t), t && d(s), S(r, t), t && d(a), S(n, t), t && d(o), S(c, t), t && d(l), S(i, t);
			}
		}
	);
}
function St(t) {
	let e, s, r, a, n, o;
	return (
		(n = new Y({
			props: { tipo: 3, variante: 1, $$slots: { default: [Ct] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = i('aside')),
					(s = i('small')),
					(r = h('Follow me at:')),
					(a = $()),
					_(n.$$.fragment),
					this.h();
			},
			l(t) {
				e = u(t, 'ASIDE', { class: !0 });
				var o = p(e);
				s = u(o, 'SMALL', { class: !0 });
				var c = p(s);
				(r = f(c, 'Follow me at:')),
					c.forEach(d),
					(a = b(o)),
					k(n.$$.fragment, o),
					o.forEach(d),
					this.h();
			},
			h() {
				E(s, 'class', 'svelte-ob1bf'), E(e, 'class', 'Links svelte-ob1bf');
			},
			m(t, c) {
				g(t, e, c), m(e, s), m(s, r), m(e, a), L(n, e, null), (o = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
			},
			i(t) {
				o || (R(n.$$.fragment, t), (o = !0));
			},
			o(t) {
				C(n.$$.fragment, t), (o = !1);
			},
			d(t) {
				t && d(e), S(n);
			}
		}
	);
}
class At extends o {
	constructor(t) {
		super(), c(this, t, null, St, l, {});
	}
}
function Mt(t) {
	let e, s, r;
	return (
		(s = new At({})),
		{
			c() {
				(e = i('footer')), _(s.$$.fragment), this.h();
			},
			l(t) {
				e = u(t, 'FOOTER', { class: !0 });
				var r = p(e);
				k(s.$$.fragment, r), r.forEach(d), this.h();
			},
			h() {
				E(e, 'class', 'svelte-lti6kl');
			},
			m(t, a) {
				g(t, e, a), L(s, e, null), (r = !0);
			},
			p: w,
			i(t) {
				r || (R(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				C(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(e), S(s);
			}
		}
	);
}
class Ot extends o {
	constructor(t) {
		super(), c(this, t, null, Mt, l, {});
	}
}
function Nt(t) {
	let e, s, r, a, n, o, c, l;
	(document.title = e = 'SvelteKit UI - ' + t[0]),
		(a = new _t({ props: { current_page: t[0], variante: 1 } })),
		a.$on('click', t[1]);
	const h = t[3].default,
		f = K(h, t, t[2], null);
	return (
		(c = new Ot({})),
		{
			c() {
				(s = $()),
					(r = i('main')),
					_(a.$$.fragment),
					(n = $()),
					f && f.c(),
					(o = $()),
					_(c.$$.fragment);
			},
			l(t) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(s = b(t)),
					(r = u(t, 'MAIN', {}));
				var e = p(r);
				k(a.$$.fragment, e), (n = b(e)), f && f.l(e), (o = b(e)), k(c.$$.fragment, e), e.forEach(d);
			},
			m(t, e) {
				g(t, s, e),
					g(t, r, e),
					L(a, r, null),
					m(r, n),
					f && f.m(r, null),
					m(r, o),
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
				l || (R(a.$$.fragment, t), R(f, t), R(c.$$.fragment, t), (l = !0));
			},
			o(t) {
				C(a.$$.fragment, t), C(f, t), C(c.$$.fragment, t), (l = !1);
			},
			d(t) {
				t && d(s), t && d(r), S(a), f && f.d(t), S(c);
			}
		}
	);
}
function jt(t, e, s) {
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
var Pt = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(t) {
			super(), c(this, t, jt, Nt, l, {});
		}
	}
});
const Tt = [
		() =>
			pt(() => import('./pages/index.svelte-dfac6a61.js'), [
				'/_app/pages/index.svelte-dfac6a61.js',
				'/_app/assets/pages/index.svelte-291cde89.css',
				'/_app/assets/ListItem.svelte-ec9b63de.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/GridBase-a41c03d9.js',
				'/_app/assets/GridBase-565a41ed.css',
				'/_app/chunks/Header-c174dee5.js',
				'/_app/assets/Header-3aba2c67.css',
				'/_app/chunks/pages-6818a1c6.js',
				'/_app/chunks/Img.svelte-8aacfaef.js',
				'/_app/assets/Img.svelte-d00b731d.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/ListItem-8591f839.js'
			]),
		() =>
			pt(() => import('./pages/philosophy/index.svelte-4bf6f9fc.js'), [
				'/_app/pages/philosophy/index.svelte-4bf6f9fc.js',
				'/_app/assets/pages/philosophy/index.svelte-7a0305e9.css',
				'/_app/assets/Tabs.svelte-e014d439.css',
				'/_app/assets/ListItem.svelte-ec9b63de.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/GridBase-a41c03d9.js',
				'/_app/assets/GridBase-565a41ed.css',
				'/_app/chunks/Header-c174dee5.js',
				'/_app/assets/Header-3aba2c67.css',
				'/_app/chunks/Tabs-2bfa3994.js',
				'/_app/chunks/ListItem-8591f839.js'
			]),
		() =>
			pt(() => import('./pages/prototype/index.svelte-8c838c12.js'), [
				'/_app/pages/prototype/index.svelte-8c838c12.js',
				'/_app/assets/pages/prototype/index.svelte-cd8ffbab.css',
				'/_app/assets/Tabs.svelte-e014d439.css',
				'/_app/assets/ListItem.svelte-ec9b63de.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/GridBase-a41c03d9.js',
				'/_app/assets/GridBase-565a41ed.css',
				'/_app/chunks/Header-c174dee5.js',
				'/_app/assets/Header-3aba2c67.css',
				'/_app/chunks/Tabs-2bfa3994.js',
				'/_app/chunks/ListItem-8591f839.js'
			]),
		() =>
			pt(() => import('./pages/artworks/index.svelte-31b3799f.js'), [
				'/_app/pages/artworks/index.svelte-31b3799f.js',
				'/_app/assets/pages/artworks/index.svelte-2ad0ff8b.css',
				'/_app/assets/ListItem.svelte-ec9b63de.css',
				'/_app/assets/Tabs.svelte-e014d439.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/GridBase-a41c03d9.js',
				'/_app/assets/GridBase-565a41ed.css',
				'/_app/chunks/Header-c174dee5.js',
				'/_app/assets/Header-3aba2c67.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img.svelte-8aacfaef.js',
				'/_app/assets/Img.svelte-d00b731d.css'
			]),
		() =>
			pt(() => import('./pages/about/index.svelte-aef43c4d.js'), [
				'/_app/pages/about/index.svelte-aef43c4d.js',
				'/_app/assets/pages/about/index.svelte-37a567c9.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Header-c174dee5.js',
				'/_app/assets/Header-3aba2c67.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			pt(() => import('./pages/lab/index.svelte-bab60124.js'), [
				'/_app/pages/lab/index.svelte-bab60124.js',
				'/_app/assets/pages/lab/index.svelte-8f81bbd6.css',
				'/_app/assets/ListItem.svelte-ec9b63de.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/GridBase-a41c03d9.js',
				'/_app/assets/GridBase-565a41ed.css',
				'/_app/chunks/Header-c174dee5.js',
				'/_app/assets/Header-3aba2c67.css',
				'/_app/chunks/ListItem-8591f839.js',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	It = [
		[/^\/$/, [Tt[0]]],
		[/^\/philosophy\/?$/, [Tt[1]]],
		[/^\/prototype\/?$/, [Tt[2]]],
		[/^\/artworks\/?$/, [Tt[3]]],
		[/^\/about\/?$/, [Tt[4]]],
		[/^\/lab\/?$/, [Tt[5]]]
	];
function Bt() {
	return { x: pageXOffset, y: pageYOffset };
}
function Dt(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class Ht {
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
						const t = n(n({}, history.state || {}), { 'sveltekit:scroll': Bt() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const s = (t) => {
			const e = Dt(t.target);
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
				const e = Dt(t.target);
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
						this._navigate(n, s ? Bt() : null, [], a.hash),
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
					this._navigate(n, e ? Bt() : null, r, a.hash)
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
function Ut(t) {
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
function Kt(t, a) {
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
class Ft {
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
								fetch: this.started ? fetch : Kt
							});
							const c = s === t.length - 1 && !e;
							if (!g && c) return;
						}
					} else ({ node: d, loaded: g } = f);
					if (g) {
						if (((g = Ut(g)), g.error)) {
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
async function Gt({ paths: t, target: e, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new Ht({ base: t.base, routes: It }),
		c = new Ft({ Root: it, layout: Pt, target: e, session: s, host: r });
	n && (await c.start(n)), a && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Gt as start };
