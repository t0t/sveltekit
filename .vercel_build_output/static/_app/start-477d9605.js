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
	b as d,
	d as f,
	f as m,
	g,
	h as v,
	j as $,
	k as y,
	l as w,
	n as b,
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
	D as P,
	E as T,
	F as j,
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
import { L as W, a as J } from './chunks/ListItem-196d07d7.js';
import { w as Y } from './chunks/index-cc16b092.js';
import { p as Z } from './chunks/pages-cee8d843.js';
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
			(s = d(a, r)), a.forEach(f);
		},
		m(t, r) {
			m(t, e, r), g(e, s);
		},
		p(t, e) {
			2 & e && r !== (r = t[1].stack + '') && v(s, r);
		},
		d(t) {
			t && f(e);
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
			(s = d(h, t[0])), h.forEach(f), (r = w(i)), (a = u(i, 'P', {}));
			var m = p(a);
			(n = d(m, l)), m.forEach(f), (o = w(i)), x && x.l(i), (c = y());
		},
		m(t, l) {
			m(t, e, l), g(e, s), m(t, r, l), m(t, a, l), g(a, n), m(t, o, l), x && x.m(t, l), m(t, c, l);
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
		i: b,
		o: b,
		d(t) {
			t && f(e), t && f(r), t && f(a), t && f(o), x && x.d(t), t && f(c);
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
				e && L(e, t, a), m(t, s, a), (r = !0);
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
							P();
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
				t && f(s), e && S(e, t);
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
				o[e].m(t, s), m(t, r, s), (a = !0);
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
						  P(),
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
				o[e].d(t), t && f(r);
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
			s && s.l(r), r.forEach(f), this.h();
		},
		h() {
			E(e, 'id', 'svelte-announcer'),
				E(e, 'aria-live', 'assertive'),
				E(e, 'aria-atomic', 'true'),
				E(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			m(t, e, r), s && s.m(e, null);
		},
		p(t, r) {
			t[6] ? (s ? s.p(t, r) : ((s = ot(t)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(t) {
			t && f(e), s && s.d();
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
			(e = d(r, 'Navigated to ')), (s = d(r, t[7]));
		},
		m(t, r) {
			m(t, e, r), m(t, s, r);
		},
		p(t, e) {
			128 & e && v(s, t[7]);
		},
		d(t) {
			t && f(e), t && f(s);
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
			k(e.$$.fragment, t), (s = w(t)), c && c.l(t), (r = y());
		},
		m(t, n) {
			L(e, t, n), m(t, s, n), c && c.m(t, n), m(t, r, n), (a = !0);
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
			S(e, t), t && f(s), c && c.d(t), t && f(r);
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
		d = null;
	return (
		O(() => {
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
				'components' in t && s(2, (c = t.components)),
				'props_0' in t && s(3, (l = t.props_0)),
				'props_1' in t && s(4, (i = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && n.page.set(o);
		}),
		[r, a, c, l, i, u, p, d, h, n, o]
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
function dt(t) {
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
function ft(t) {
	let e, s, r, a, n, o, c, l, i, h, d;
	return {
		c() {
			(e = T('svg')),
				(s = T('g')),
				(r = T('circle')),
				(a = T('g')),
				(n = T('circle')),
				(o = T('circle')),
				(c = T('g')),
				(l = T('circle')),
				(i = T('circle')),
				(h = T('circle')),
				(d = T('circle')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var m = p(e);
			s = u(m, 'g', { class: !0 }, 1);
			var g = p(s);
			(r = u(g, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(r).forEach(f),
				(a = u(g, 'g', { class: !0 }, 1));
			var v = p(a);
			(n = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(n).forEach(f),
				(o = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(o).forEach(f),
				v.forEach(f),
				(c = u(g, 'g', { class: !0 }, 1));
			var $ = p(c);
			(l = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(l).forEach(f),
				(i = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(i).forEach(f),
				(h = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(h).forEach(f),
				(d = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(d).forEach(f),
				$.forEach(f),
				g.forEach(f),
				m.forEach(f),
				this.h();
		},
		h() {
			E(r, 'cx', '25'),
				E(r, 'cy', '25'),
				E(r, 'r', '25'),
				E(r, 'class', 'svelte-1ovedbe'),
				E(n, 'cx', '12.5'),
				E(n, 'cy', '25'),
				E(n, 'r', '12.5'),
				E(n, 'class', 'svelte-1ovedbe'),
				E(o, 'cx', '38'),
				E(o, 'cy', '25'),
				E(o, 'r', '12.5'),
				E(o, 'class', 'svelte-1ovedbe'),
				E(a, 'class', 'svelte-1ovedbe'),
				E(l, 'cx', '6.5'),
				E(l, 'cy', '25'),
				E(l, 'r', '6.25'),
				E(l, 'class', 'svelte-1ovedbe'),
				E(i, 'cx', '19'),
				E(i, 'cy', '25'),
				E(i, 'r', '6.25'),
				E(i, 'class', 'svelte-1ovedbe'),
				E(h, 'cx', '31.5'),
				E(h, 'cy', '25'),
				E(h, 'r', '6.25'),
				E(h, 'class', 'svelte-1ovedbe'),
				E(d, 'cx', '44'),
				E(d, 'cy', '25'),
				E(d, 'r', '6.25'),
				E(d, 'class', 'svelte-1ovedbe'),
				E(c, 'class', 'svelte-1ovedbe'),
				E(s, 'class', 'svelte-1ovedbe'),
				E(e, 'class', 'logo svelte-1ovedbe'),
				E(e, 'width', '51'),
				E(e, 'height', '51');
		},
		m(t, u) {
			m(t, e, u),
				g(e, s),
				g(s, r),
				g(s, a),
				g(a, n),
				g(a, o),
				g(s, c),
				g(c, l),
				g(c, i),
				g(c, h),
				g(c, d);
		},
		p: b,
		i: b,
		o: b,
		d(t) {
			t && f(e);
		}
	};
}
class mt extends o {
	constructor(t) {
		super(), c(this, t, null, ft, l, {});
	}
}
function gt(t, e, s) {
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
		r = Z,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = wt(gt(t, r, n));
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
			E(e, 'class', (s = D(t[4][t[1]]) + ' svelte-2cml53'));
		},
		m(t, s) {
			m(t, e, s);
			for (let r = 0; r < a.length; r += 1) a[r].m(e, null);
		},
		p(t, n) {
			if (1 & n) {
				let s;
				for (r = Z, s = 0; s < r.length; s += 1) {
					const o = gt(t, r, s);
					a[s] ? a[s].p(o, n) : ((a[s] = wt(o)), a[s].c(), a[s].m(e, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = D(t[4][t[1]]) + ' svelte-2cml53') && E(e, 'class', s);
		},
		i: b,
		o: b,
		d(t) {
			t && f(e), H(a, t);
		}
	};
}
function yt(t) {
	let e, s, r, a, n, o, c, l, h;
	r = new mt({});
	let d = Z,
		v = [];
	for (let i = 0; i < d.length; i += 1) v[i] = bt(vt(t, d, i));
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
			k(r.$$.fragment, c), c.forEach(f), (a = w(o)), (n = u(o, 'NAV', { class: !0 }));
			var l = p(n);
			for (let e = 0; e < v.length; e += 1) v[e].l(l);
			l.forEach(f), o.forEach(f), this.h();
		},
		h() {
			E(s, 'class', 'ButtonNav svelte-2cml53'),
				E(n, 'class', (o = D(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-2cml53')),
				E(e, 'class', 'Variante_1 svelte-2cml53');
		},
		m(o, i) {
			m(o, e, i), g(e, s), L(r, s, null), g(e, a), g(e, n);
			for (let t = 0; t < v.length; t += 1) v[t].m(n, null);
			(c = !0),
				l ||
					((h = [B(s, 'click', t[7]), z(dt.call(null, e)), B(e, 'click_outside', t[3])]), (l = !0));
		},
		p(t, e) {
			if (9 & e) {
				let s;
				for (d = Z, s = 0; s < d.length; s += 1) {
					const r = vt(t, d, s);
					v[s] ? v[s].p(r, e) : ((v[s] = bt(r)), v[s].c(), v[s].m(n, null));
				}
				for (; s < v.length; s += 1) v[s].d(1);
				v.length = d.length;
			}
			(!c ||
				(4 & e && o !== (o = D(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-2cml53'))) &&
				E(n, 'class', o);
		},
		i(t) {
			c || (R(r.$$.fragment, t), (c = !0));
		},
		o(t) {
			C(r.$$.fragment, t), (c = !1);
		},
		d(t) {
			t && f(e), S(r), H(v, t), (l = !1), U(h);
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
			e = u(t, 'A', { href: !0, class: !0 });
			var a = p(e);
			(s = d(a, o)), (r = w(a)), a.forEach(f), this.h();
		},
		h() {
			E(e, 'href', t[9]), E(e, 'class', 'svelte-2cml53'), I(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			m(o, e, c), g(e, s), g(e, r), a || ((n = B(e, 'click', t[6])), (a = !0));
		},
		p(t, s) {
			1 & s && I(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && f(e), (a = !1), n();
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
			e = u(t, 'A', { href: !0, class: !0, role: !0 });
			var a = p(e);
			(s = d(a, o)), (r = w(a)), a.forEach(f), this.h();
		},
		h() {
			E(e, 'href', t[9]),
				E(e, 'class', 'NavItem svelte-2cml53'),
				E(e, 'role', 'navigation'),
				I(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			m(o, e, c),
				g(e, s),
				g(e, r),
				a || ((n = [B(e, 'click', t[5]), B(e, 'click', t[3])]), (a = !0));
		},
		p(t, s) {
			1 & s && I(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && f(e), (a = !1), U(n);
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
				o[e].m(t, s), m(t, r, s), (a = !0);
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
						  P(),
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
				j(t, e);
			},
			function (e) {
				j(t, e);
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
			(e = T('svg')), (s = T('title')), (r = h('Linkedin')), (a = T('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = d(o, 'Linkedin')),
				o.forEach(f),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(f),
				n.forEach(f),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1d6luvt'),
				E(
					a,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				E(a, 'class', 'svelte-1d6luvt'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1d6luvt');
		},
		m(t, n) {
			m(t, e, n), g(e, s), g(s, r), g(e, a);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Lt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = T('svg')),
				(s = T('title')),
				(r = h('Algunos artículos en Medium')),
				(a = T('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = d(o, 'Algunos artículos en Medium')),
				o.forEach(f),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(f),
				n.forEach(f),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1d6luvt'),
				E(
					a,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				E(a, 'class', 'svelte-1d6luvt'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1d6luvt');
		},
		m(t, n) {
			m(t, e, n), g(e, s), g(s, r), g(e, a);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Vt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = T('svg')), (s = T('title')), (r = h('Twitter')), (a = T('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = d(o, 'Twitter')),
				o.forEach(f),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(f),
				n.forEach(f),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1d6luvt'),
				E(
					a,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				E(a, 'class', 'svelte-1d6luvt'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1d6luvt');
		},
		m(t, n) {
			m(t, e, n), g(e, s), g(s, r), g(e, a);
		},
		d(t) {
			t && f(e);
		}
	};
}
function qt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = T('svg')),
				(s = T('title')),
				(r = h('Mi repositorio en Github')),
				(a = T('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = d(o, 'Mi repositorio en Github')),
				o.forEach(f),
				(a = u(n, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				p(a).forEach(f),
				n.forEach(f),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1d6luvt'),
				E(a, 'fill-rule', 'evenodd'),
				E(a, 'clip-rule', 'evenodd'),
				E(
					a,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				E(a, 'class', 'svelte-1d6luvt'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1d6luvt');
		},
		m(t, n) {
			m(t, e, n), g(e, s), g(s, r), g(e, a);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Rt(t) {
	let e, s, r, a;
	return {
		c() {
			(e = T('svg')), (s = T('title')), (r = h('Facebook')), (a = T('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var n = p(e);
			s = u(n, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = d(o, 'Facebook')),
				o.forEach(f),
				(a = u(n, 'path', { d: !0, class: !0 }, 1)),
				p(a).forEach(f),
				n.forEach(f),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1d6luvt'),
				E(
					a,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				E(a, 'class', 'svelte-1d6luvt'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1d6luvt');
		},
		m(t, n) {
			m(t, e, n), g(e, s), g(s, r), g(e, a);
		},
		d(t) {
			t && f(e);
		}
	};
}
function Ct(t) {
	let e, s, r, a, n, o, c, l, i, h;
	return (
		(e = new J({
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
		(r = new J({
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
		(n = new J({
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
		(c = new J({
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
		(i = new J({
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
					(s = w(t)),
					k(r.$$.fragment, t),
					(a = w(t)),
					k(n.$$.fragment, t),
					(o = w(t)),
					k(c.$$.fragment, t),
					(l = w(t)),
					k(i.$$.fragment, t);
			},
			m(t, u) {
				L(e, t, u),
					m(t, s, u),
					L(r, t, u),
					m(t, a, u),
					L(n, t, u),
					m(t, o, u),
					L(c, t, u),
					m(t, l, u),
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
				S(e, t), t && f(s), S(r, t), t && f(a), S(n, t), t && f(o), S(c, t), t && f(l), S(i, t);
			}
		}
	);
}
function St(t) {
	let e, s, r, a, n, o;
	return (
		(n = new W({
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
				(r = d(c, 'Follow me at:')),
					c.forEach(f),
					(a = w(o)),
					k(n.$$.fragment, o),
					o.forEach(f),
					this.h();
			},
			h() {
				E(s, 'class', 'svelte-1d6luvt'), E(e, 'class', 'Links svelte-1d6luvt');
			},
			m(t, c) {
				m(t, e, c), g(e, s), g(s, r), g(e, a), L(n, e, null), (o = !0);
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
				t && f(e), S(n);
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
				k(s.$$.fragment, r), r.forEach(f), this.h();
			},
			h() {
				E(e, 'class', 'svelte-lti6kl');
			},
			m(t, a) {
				m(t, e, a), L(s, e, null), (r = !0);
			},
			p: b,
			i(t) {
				r || (R(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				C(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && f(e), S(s);
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
		d = K(h, t, t[2], null);
	return (
		(c = new Ot({})),
		{
			c() {
				(s = $()),
					(r = i('main')),
					_(a.$$.fragment),
					(n = $()),
					d && d.c(),
					(o = $()),
					_(c.$$.fragment);
			},
			l(t) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(f),
					(s = w(t)),
					(r = u(t, 'MAIN', {}));
				var e = p(r);
				k(a.$$.fragment, e), (n = w(e)), d && d.l(e), (o = w(e)), k(c.$$.fragment, e), e.forEach(f);
			},
			m(t, e) {
				m(t, s, e),
					m(t, r, e),
					L(a, r, null),
					g(r, n),
					d && d.m(r, null),
					g(r, o),
					L(c, r, null),
					(l = !0);
			},
			p(t, [s]) {
				(!l || 1 & s) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e);
				const r = {};
				1 & s && (r.current_page = t[0]),
					a.$set(r),
					d && d.p && 4 & s && G(d, h, t, t[2], s, null, null);
			},
			i(t) {
				l || (R(a.$$.fragment, t), R(d, t), R(c.$$.fragment, t), (l = !0));
			},
			o(t) {
				C(a.$$.fragment, t), C(d, t), C(c.$$.fragment, t), (l = !1);
			},
			d(t) {
				t && f(s), t && f(r), S(a), d && d.d(t), S(c);
			}
		}
	);
}
function Pt(t, e, s) {
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
var Tt = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(t) {
			super(), c(this, t, Pt, Nt, l, {});
		}
	}
});
const jt = [
		() =>
			pt(() => import('./pages/index.svelte-c9c5a9e7.js'), [
				'/_app/pages/index.svelte-c9c5a9e7.js',
				'/_app/assets/pages/index.svelte-203af825.css',
				'/_app/assets/Blockquote.svelte-c1b1a9c4.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-60585820.js',
				'/_app/assets/Grid.svelte-285ca72d.css',
				'/_app/chunks/Header-251278fe.js',
				'/_app/assets/Header-82a1b71c.css',
				'/_app/chunks/pages-cee8d843.js',
				'/_app/chunks/ListItem-196d07d7.js',
				'/_app/assets/ListItem-fdbc349a.css',
				'/_app/chunks/Blockquote-32fc30bd.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-674f19a2.js',
				'/_app/assets/Img-22fb8781.css'
			]),
		() =>
			pt(() => import('./pages/philosophy/index.svelte-e3360282.js'), [
				'/_app/pages/philosophy/index.svelte-e3360282.js',
				'/_app/assets/pages/philosophy/index.svelte-475e7970.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-60585820.js',
				'/_app/assets/Grid.svelte-285ca72d.css',
				'/_app/chunks/Header-251278fe.js',
				'/_app/assets/Header-82a1b71c.css',
				'/_app/chunks/miProceso-ec715937.js',
				'/_app/chunks/Section-ebe14856.js',
				'/_app/chunks/Tabs-a8f99065.js',
				'/_app/assets/Tabs-22a97931.css',
				'/_app/chunks/ListItem-196d07d7.js',
				'/_app/assets/ListItem-fdbc349a.css',
				'/_app/chunks/Img-674f19a2.js',
				'/_app/assets/Img-22fb8781.css'
			]),
		() =>
			pt(() => import('./pages/prototype/index.svelte-399a0e24.js'), [
				'/_app/pages/prototype/index.svelte-399a0e24.js',
				'/_app/assets/pages/prototype/index.svelte-9b3d4d9f.css',
				'/_app/assets/Blockquote.svelte-c1b1a9c4.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-60585820.js',
				'/_app/assets/Grid.svelte-285ca72d.css',
				'/_app/chunks/Header-251278fe.js',
				'/_app/assets/Header-82a1b71c.css',
				'/_app/chunks/Img-674f19a2.js',
				'/_app/assets/Img-22fb8781.css',
				'/_app/chunks/Section-ebe14856.js',
				'/_app/chunks/ListItem-196d07d7.js',
				'/_app/assets/ListItem-fdbc349a.css',
				'/_app/chunks/Tabs-a8f99065.js',
				'/_app/assets/Tabs-22a97931.css'
			]),
		() =>
			pt(() => import('./pages/artworks/index.svelte-8ca98eb7.js'), [
				'/_app/pages/artworks/index.svelte-8ca98eb7.js',
				'/_app/assets/pages/artworks/index.svelte-b65203b1.css',
				'/_app/assets/Blockquote.svelte-c1b1a9c4.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-60585820.js',
				'/_app/assets/Grid.svelte-285ca72d.css',
				'/_app/chunks/Header-251278fe.js',
				'/_app/assets/Header-82a1b71c.css',
				'/_app/chunks/Tabs-a8f99065.js',
				'/_app/assets/Tabs-22a97931.css',
				'/_app/chunks/ListItem-196d07d7.js',
				'/_app/assets/ListItem-fdbc349a.css',
				'/_app/chunks/Img-674f19a2.js',
				'/_app/assets/Img-22fb8781.css',
				'/_app/chunks/miProceso-ec715937.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-ebe14856.js',
				'/_app/chunks/Blockquote-32fc30bd.js'
			]),
		() =>
			pt(() => import('./pages/about/index.svelte-4339a4e3.js'), [
				'/_app/pages/about/index.svelte-4339a4e3.js',
				'/_app/assets/pages/about/index.svelte-906f8caf.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-ebe14856.js',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Header-251278fe.js',
				'/_app/assets/Header-82a1b71c.css'
			]),
		() =>
			pt(() => import('./pages/lab/index.svelte-1165a9f4.js'), [
				'/_app/pages/lab/index.svelte-1165a9f4.js',
				'/_app/assets/pages/lab/index.svelte-cbcfd908.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-60585820.js',
				'/_app/assets/Grid.svelte-285ca72d.css',
				'/_app/chunks/Header-251278fe.js',
				'/_app/assets/Header-82a1b71c.css',
				'/_app/chunks/Section-ebe14856.js',
				'/_app/chunks/ListItem-196d07d7.js',
				'/_app/assets/ListItem-fdbc349a.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	It = [
		[/^\/$/, [jt[0]]],
		[/^\/philosophy\/?$/, [jt[1]]],
		[/^\/prototype\/?$/, [jt[2]]],
		[/^\/artworks\/?$/, [jt[3]]],
		[/^\/about\/?$/, [jt[4]]],
		[/^\/lab\/?$/, [jt[5]]]
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
	const e = Y(t);
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
			(this.stores = { page: zt({}), navigating: Y(null), session: Y(r) }),
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
						d = u && u.get(h);
					let f, m;
					if (!d || (c.context && d.node.uses.context)) {
						f = {
							module: p,
							uses: { params: new Set(), path: !1, query: !1, session: !1, context: !1 }
						};
						const a = {};
						for (const t in r.params)
							Object.defineProperty(a, t, {
								get: () => (f.uses.params.add(t), r.params[t]),
								enumerable: !0
							});
						const o = this.$session;
						if (p.load) {
							m = await p.load.call(null, {
								page: {
									host: r.host,
									params: a,
									get path() {
										return (f.uses.path = !0), r.path;
									},
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
								fetch: this.started ? fetch : Kt
							});
							const c = s === t.length - 1 && !e;
							if (!m && c) return;
						}
					} else ({ node: f, loaded: m } = d);
					if (m) {
						if (((m = Ut(m)), m.error)) {
							if (e) throw e;
							return await this._load({
								status: m.status || 500,
								error: m.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (m.redirect) return { redirect: m.redirect };
						if ((m.context && ((c.context = !0), (i = n(n({}, i), m.context))), m.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const t = this.caches.get(p),
								e = { node: f, loaded: m };
							t.set(h, e);
							let s = !1;
							const r = setTimeout(() => {
									a();
								}, 1e3 * m.maxage),
								a = () => {
									t.get(h) === e && t.delete(h), n(), clearTimeout(r);
								},
								n = this.stores.session.subscribe(() => {
									s && a();
								});
							s = !0;
						}
						l[s] = m.props;
					}
					(o.state.nodes[s] = f), (o.state.contexts[s] = i);
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
		c = new Ft({ Root: it, layout: Tt, target: e, session: s, host: r });
	n && (await c.start(n)), a && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Gt as start };
