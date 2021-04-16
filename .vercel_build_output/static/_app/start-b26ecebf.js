var t = Object.defineProperty,
	e = Object.prototype.hasOwnProperty,
	s = Object.getOwnPropertySymbols,
	r = Object.prototype.propertyIsEnumerable,
	n = (e, s, r) =>
		s in e ? t(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[s] = r),
	a = (t, a) => {
		for (var o in a || (a = {})) e.call(a, o) && n(t, o, a[o]);
		if (s) for (var o of s(a)) r.call(a, o) && n(t, o, a[o]);
		return t;
	};
import {
	S as o,
	i as c,
	s as i,
	e as l,
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
	l as w,
	n as x,
	m as b,
	o as E,
	p as _,
	q as k,
	r as L,
	u as j,
	v as V,
	w as q,
	x as R,
	y as C,
	z as S,
	A,
	B as M,
	C as O,
	D as N,
	E as z,
	F as P,
	G as T,
	H as I,
	I as B,
	J as D,
	K as H,
	L as U,
	M as K,
	N as F,
	O as G
} from './chunks/index-d91e1ed8.js';
import { L as W, a as J } from './chunks/ListItem-48007294.js';
import { w as Y } from './chunks/index-cc16b092.js';
import { p as Z } from './chunks/pages-cee8d843.js';
function X(t) {
	let e,
		s,
		r = t[1].stack + '';
	return {
		c() {
			(e = l('pre')), (s = h(r));
		},
		l(t) {
			e = u(t, 'PRE', {});
			var n = p(e);
			(s = f(n, r)), n.forEach(d);
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
		n,
		a,
		o,
		c,
		i = t[1].message + '',
		b = t[1].stack && X(t);
	return {
		c() {
			(e = l('h1')),
				(s = h(t[0])),
				(r = $()),
				(n = l('p')),
				(a = h(i)),
				(o = $()),
				b && b.c(),
				(c = y());
		},
		l(l) {
			e = u(l, 'H1', {});
			var h = p(e);
			(s = f(h, t[0])), h.forEach(d), (r = w(l)), (n = u(l, 'P', {}));
			var g = p(n);
			(a = f(g, i)), g.forEach(d), (o = w(l)), b && b.l(l), (c = y());
		},
		m(t, i) {
			g(t, e, i), m(e, s), g(t, r, i), g(t, n, i), m(n, a), g(t, o, i), b && b.m(t, i), g(t, c, i);
		},
		p(t, [e]) {
			1 & e && v(s, t[0]),
				2 & e && i !== (i = t[1].message + '') && v(a, i),
				t[1].stack
					? b
						? b.p(t, e)
						: ((b = X(t)), b.c(), b.m(c.parentNode, c))
					: b && (b.d(1), (b = null));
		},
		i: x,
		o: x,
		d(t) {
			t && d(e), t && d(r), t && d(n), t && d(o), b && b.d(t), t && d(c);
		}
	};
}
function tt(t, e, s) {
	let { status: r } = e,
		{ error: n } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)), 'error' in t && s(1, (n = t.error));
		}),
		[r, n]
	);
}
class et extends o {
	constructor(t) {
		super(), c(this, t, tt, Q, i, { status: 0, error: 1 });
	}
}
function st(t) {
	let e, s, r;
	const n = [t[4] || {}];
	var a = t[2][1];
	function o(t) {
		let e = {};
		for (let s = 0; s < n.length; s += 1) e = b(e, n[s]);
		return { props: e };
	}
	return (
		a && (e = new a(o())),
		{
			c() {
				e && _(e.$$.fragment), (s = y());
			},
			l(t) {
				e && k(e.$$.fragment, t), (s = y());
			},
			m(t, n) {
				e && L(e, t, n), g(t, s, n), (r = !0);
			},
			p(t, r) {
				const c = 16 & r ? j(n, [V(t[4] || {})]) : {};
				if (a !== (a = t[2][1])) {
					if (e) {
						O();
						const t = e;
						R(t.$$.fragment, 1, 0, () => {
							C(t, 1);
						}),
							N();
					}
					a
						? ((e = new a(o())), _(e.$$.fragment), q(e.$$.fragment, 1), L(e, s.parentNode, s))
						: (e = null);
				} else a && e.$set(c);
			},
			i(t) {
				r || (e && q(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				e && R(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(s), e && C(e, t);
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
				s || (q(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				R(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				C(e, t);
			}
		}
	);
}
function nt(t) {
	let e, s, r, n;
	const a = [rt, st],
		o = [];
	function c(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(s = o[e] = a[e](t)),
		{
			c() {
				s.c(), (r = y());
			},
			l(t) {
				s.l(t), (r = y());
			},
			m(t, s) {
				o[e].m(t, s), g(t, r, s), (n = !0);
			},
			p(t, n) {
				let i = e;
				(e = c(t)),
					e === i
						? o[e].p(t, n)
						: (O(),
						  R(o[i], 1, 1, () => {
								o[i] = null;
						  }),
						  N(),
						  (s = o[e]),
						  s ? s.p(t, n) : ((s = o[e] = a[e](t)), s.c()),
						  q(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				n || (q(s), (n = !0));
			},
			o(t) {
				R(s), (n = !1);
			},
			d(t) {
				o[e].d(t), t && d(r);
			}
		}
	);
}
function at(t) {
	let e,
		s = t[6] && ot(t);
	return {
		c() {
			(e = l('div')), s && s.c(), this.h();
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
	let e, s, r, n;
	const a = [t[3] || {}];
	let o = { $$slots: { default: [nt] }, $$scope: { ctx: t } };
	for (let i = 0; i < a.length; i += 1) o = b(o, a[i]);
	e = new t[8]({ props: o });
	let c = t[5] && at(t);
	return {
		c() {
			_(e.$$.fragment), (s = $()), c && c.c(), (r = y());
		},
		l(t) {
			k(e.$$.fragment, t), (s = w(t)), c && c.l(t), (r = y());
		},
		m(t, a) {
			L(e, t, a), g(t, s, a), c && c.m(t, a), g(t, r, a), (n = !0);
		},
		p(t, [s]) {
			const n = 8 & s ? j(a, [V(t[3] || {})]) : {};
			2071 & s && (n.$$scope = { dirty: s, ctx: t }),
				e.$set(n),
				t[5]
					? c
						? c.p(t, s)
						: ((c = at(t)), c.c(), c.m(r.parentNode, r))
					: c && (c.d(1), (c = null));
		},
		i(t) {
			n || (q(e.$$.fragment, t), (n = !0));
		},
		o(t) {
			R(e.$$.fragment, t), (n = !1);
		},
		d(t) {
			C(e, t), t && d(s), c && c.d(t), t && d(r);
		}
	};
}
function it(t, e, s) {
	let { status: r } = e,
		{ error: n } = e,
		{ stores: a } = e,
		{ page: o } = e,
		{ components: c } = e,
		{ props_0: i = null } = e,
		{ props_1: l = null } = e;
	const h = c[0];
	S('__svelte__', a), A(a.page.notify);
	let u = !1,
		p = !1,
		f = null;
	return (
		M(() => {
			const t = a.page.subscribe(() => {
				u && (s(6, (p = !0)), s(7, (f = document.title)));
			});
			return s(5, (u = !0)), t;
		}),
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)),
				'error' in t && s(1, (n = t.error)),
				'stores' in t && s(9, (a = t.stores)),
				'page' in t && s(10, (o = t.page)),
				'components' in t && s(2, (c = t.components)),
				'props_0' in t && s(3, (i = t.props_0)),
				'props_1' in t && s(4, (l = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && a.page.set(o);
		}),
		[r, n, c, i, l, u, p, f, h, a, o]
	);
}
class lt extends o {
	constructor(t) {
		super(),
			c(this, t, it, ct, i, {
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
	let e, s, r, n, a, o, c, i, l, h, f;
	return {
		c() {
			(e = z('svg')),
				(s = z('g')),
				(r = z('circle')),
				(n = z('g')),
				(a = z('circle')),
				(o = z('circle')),
				(c = z('g')),
				(i = z('circle')),
				(l = z('circle')),
				(h = z('circle')),
				(f = z('circle')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var g = p(e);
			s = u(g, 'g', { class: !0 }, 1);
			var m = p(s);
			(r = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(r).forEach(d),
				(n = u(m, 'g', { class: !0 }, 1));
			var v = p(n);
			(a = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(a).forEach(d),
				(o = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(o).forEach(d),
				v.forEach(d),
				(c = u(m, 'g', { class: !0 }, 1));
			var $ = p(c);
			(i = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(i).forEach(d),
				(l = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(l).forEach(d),
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
				E(r, 'class', 'svelte-tzh2ng'),
				E(a, 'cx', '12.5'),
				E(a, 'cy', '25'),
				E(a, 'r', '12.5'),
				E(a, 'class', 'svelte-tzh2ng'),
				E(o, 'cx', '38'),
				E(o, 'cy', '25'),
				E(o, 'r', '12.5'),
				E(o, 'class', 'svelte-tzh2ng'),
				E(n, 'class', 'svelte-tzh2ng'),
				E(i, 'cx', '6.5'),
				E(i, 'cy', '25'),
				E(i, 'r', '6.25'),
				E(i, 'class', 'svelte-tzh2ng'),
				E(l, 'cx', '19'),
				E(l, 'cy', '25'),
				E(l, 'r', '6.25'),
				E(l, 'class', 'svelte-tzh2ng'),
				E(h, 'cx', '31.5'),
				E(h, 'cy', '25'),
				E(h, 'r', '6.25'),
				E(h, 'class', 'svelte-tzh2ng'),
				E(f, 'cx', '44'),
				E(f, 'cy', '25'),
				E(f, 'r', '6.25'),
				E(f, 'class', 'svelte-tzh2ng'),
				E(c, 'class', 'svelte-tzh2ng'),
				E(s, 'class', 'svelte-tzh2ng'),
				E(e, 'class', 'logo svelte-tzh2ng'),
				E(e, 'width', '51'),
				E(e, 'height', '51');
		},
		m(t, u) {
			g(t, e, u),
				m(e, s),
				m(s, r),
				m(s, n),
				m(n, a),
				m(n, o),
				m(s, c),
				m(c, i),
				m(c, l),
				m(c, h),
				m(c, f);
		},
		p: x,
		i: x,
		o: x,
		d(t) {
			t && d(e);
		}
	};
}
class gt extends o {
	constructor(t) {
		super(), c(this, t, null, dt, i, {});
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
		r = Z,
		n = [];
	for (let a = 0; a < r.length; a += 1) n[a] = wt(mt(t, r, a));
	return {
		c() {
			e = l('nav');
			for (let t = 0; t < n.length; t += 1) n[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'NAV', { class: !0 });
			var s = p(e);
			for (let e = 0; e < n.length; e += 1) n[e].l(s);
			s.forEach(d), this.h();
		},
		h() {
			E(e, 'class', (s = B(t[4][t[1]]) + ' svelte-b7h4ux'));
		},
		m(t, s) {
			g(t, e, s);
			for (let r = 0; r < n.length; r += 1) n[r].m(e, null);
		},
		p(t, a) {
			if (1 & a) {
				let s;
				for (r = Z, s = 0; s < r.length; s += 1) {
					const o = mt(t, r, s);
					n[s] ? n[s].p(o, a) : ((n[s] = wt(o)), n[s].c(), n[s].m(e, null));
				}
				for (; s < n.length; s += 1) n[s].d(1);
				n.length = r.length;
			}
			2 & a && s !== (s = B(t[4][t[1]]) + ' svelte-b7h4ux') && E(e, 'class', s);
		},
		i: x,
		o: x,
		d(t) {
			t && d(e), D(n, t);
		}
	};
}
function yt(t) {
	let e, s, r, n, a, o, c, i, h;
	r = new gt({});
	let f = Z,
		v = [];
	for (let l = 0; l < f.length; l += 1) v[l] = xt(vt(t, f, l));
	return {
		c() {
			(e = l('div')), (s = l('div')), _(r.$$.fragment), (n = $()), (a = l('nav'));
			for (let t = 0; t < v.length; t += 1) v[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'DIV', { class: !0 });
			var o = p(e);
			s = u(o, 'DIV', { class: !0 });
			var c = p(s);
			k(r.$$.fragment, c), c.forEach(d), (n = w(o)), (a = u(o, 'NAV', { class: !0 }));
			var i = p(a);
			for (let e = 0; e < v.length; e += 1) v[e].l(i);
			i.forEach(d), o.forEach(d), this.h();
		},
		h() {
			E(s, 'class', 'ButtonNav svelte-b7h4ux'),
				E(a, 'class', (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-b7h4ux')),
				E(e, 'class', 'Variante_1 svelte-b7h4ux');
		},
		m(o, l) {
			g(o, e, l), m(e, s), L(r, s, null), m(e, n), m(e, a);
			for (let t = 0; t < v.length; t += 1) v[t].m(a, null);
			(c = !0),
				i ||
					((h = [I(s, 'click', t[7]), U(ft.call(null, e)), I(e, 'click_outside', t[3])]), (i = !0));
		},
		p(t, e) {
			if (9 & e) {
				let s;
				for (f = Z, s = 0; s < f.length; s += 1) {
					const r = vt(t, f, s);
					v[s] ? v[s].p(r, e) : ((v[s] = xt(r)), v[s].c(), v[s].m(a, null));
				}
				for (; s < v.length; s += 1) v[s].d(1);
				v.length = f.length;
			}
			(!c ||
				(4 & e && o !== (o = B(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-b7h4ux'))) &&
				E(a, 'class', o);
		},
		i(t) {
			c || (q(r.$$.fragment, t), (c = !0));
		},
		o(t) {
			R(r.$$.fragment, t), (c = !1);
		},
		d(t) {
			t && d(e), C(r), D(v, t), (i = !1), H(h);
		}
	};
}
function wt(t) {
	let e,
		s,
		r,
		n,
		a,
		o = t[10] + '';
	return {
		c() {
			(e = l('a')), (s = h(o)), (r = $()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0 });
			var n = p(e);
			(s = f(n, o)), (r = w(n)), n.forEach(d), this.h();
		},
		h() {
			E(e, 'href', t[9]), E(e, 'class', 'svelte-b7h4ux'), T(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			g(o, e, c), m(e, s), m(e, r), n || ((a = I(e, 'click', t[6])), (n = !0));
		},
		p(t, s) {
			1 & s && T(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (n = !1), a();
		}
	};
}
function xt(t) {
	let e,
		s,
		r,
		n,
		a,
		o = t[10] + '';
	return {
		c() {
			(e = l('a')), (s = h(o)), (r = $()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0, role: !0 });
			var n = p(e);
			(s = f(n, o)), (r = w(n)), n.forEach(d), this.h();
		},
		h() {
			E(e, 'href', t[9]),
				E(e, 'class', 'NavItem svelte-b7h4ux'),
				E(e, 'role', 'navigation'),
				T(e, 'active', t[10] === t[0]);
		},
		m(o, c) {
			g(o, e, c),
				m(e, s),
				m(e, r),
				n || ((a = [I(e, 'click', t[5]), I(e, 'click', t[3])]), (n = !0));
		},
		p(t, s) {
			1 & s && T(e, 'active', t[10] === t[0]);
		},
		d(t) {
			t && d(e), (n = !1), H(a);
		}
	};
}
function bt(t) {
	let e, s, r, n;
	const a = [yt, $t],
		o = [];
	function c(t, e) {
		return 1 === t[1] ? 0 : 1;
	}
	return (
		(e = c(t)),
		(s = o[e] = a[e](t)),
		{
			c() {
				s.c(), (r = y());
			},
			l(t) {
				s.l(t), (r = y());
			},
			m(t, s) {
				o[e].m(t, s), g(t, r, s), (n = !0);
			},
			p(t, [n]) {
				let i = e;
				(e = c(t)),
					e === i
						? o[e].p(t, n)
						: (O(),
						  R(o[i], 1, 1, () => {
								o[i] = null;
						  }),
						  N(),
						  (s = o[e]),
						  s ? s.p(t, n) : ((s = o[e] = a[e](t)), s.c()),
						  q(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				n || (q(s), (n = !0));
			},
			o(t) {
				R(s), (n = !1);
			},
			d(t) {
				o[e].d(t), t && d(r);
			}
		}
	);
}
function Et(t, e, s) {
	let { current_page: r } = e,
		n = !1;
	let { variante: a = 0 } = e;
	return (
		(t.$$set = (t) => {
			'current_page' in t && s(0, (r = t.current_page)), 'variante' in t && s(1, (a = t.variante));
		}),
		[
			r,
			a,
			n,
			function () {
				s(2, (n = !1));
			},
			['Variante_0', 'Variante_1', 'Variante_2'],
			function (e) {
				P(t, e);
			},
			function (e) {
				P(t, e);
			},
			() => {
				s(2, (n = !n));
			}
		]
	);
}
class _t extends o {
	constructor(t) {
		super(), c(this, t, Et, bt, i, { current_page: 0, variante: 1 });
	}
}
function kt(t) {
	let e, s, r, n;
	return {
		c() {
			(e = z('svg')), (s = z('title')), (r = h('Linkedin')), (n = z('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var a = p(e);
			s = u(a, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Linkedin')),
				o.forEach(d),
				(n = u(a, 'path', { d: !0, class: !0 }, 1)),
				p(n).forEach(d),
				a.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1ntsjv3'),
				E(
					n,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				E(n, 'class', 'svelte-1ntsjv3'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1ntsjv3');
		},
		m(t, a) {
			g(t, e, a), m(e, s), m(s, r), m(e, n);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Lt(t) {
	let e, s, r, n;
	return {
		c() {
			(e = z('svg')),
				(s = z('title')),
				(r = h('Algunos artículos en Medium')),
				(n = z('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var a = p(e);
			s = u(a, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Algunos artículos en Medium')),
				o.forEach(d),
				(n = u(a, 'path', { d: !0, class: !0 }, 1)),
				p(n).forEach(d),
				a.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1ntsjv3'),
				E(
					n,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				E(n, 'class', 'svelte-1ntsjv3'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1ntsjv3');
		},
		m(t, a) {
			g(t, e, a), m(e, s), m(s, r), m(e, n);
		},
		d(t) {
			t && d(e);
		}
	};
}
function jt(t) {
	let e, s, r, n;
	return {
		c() {
			(e = z('svg')), (s = z('title')), (r = h('Twitter')), (n = z('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var a = p(e);
			s = u(a, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Twitter')),
				o.forEach(d),
				(n = u(a, 'path', { d: !0, class: !0 }, 1)),
				p(n).forEach(d),
				a.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1ntsjv3'),
				E(
					n,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				E(n, 'class', 'svelte-1ntsjv3'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1ntsjv3');
		},
		m(t, a) {
			g(t, e, a), m(e, s), m(s, r), m(e, n);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Vt(t) {
	let e, s, r, n;
	return {
		c() {
			(e = z('svg')),
				(s = z('title')),
				(r = h('Mi repositorio en Github')),
				(n = z('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var a = p(e);
			s = u(a, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Mi repositorio en Github')),
				o.forEach(d),
				(n = u(a, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				p(n).forEach(d),
				a.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1ntsjv3'),
				E(n, 'fill-rule', 'evenodd'),
				E(n, 'clip-rule', 'evenodd'),
				E(
					n,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				E(n, 'class', 'svelte-1ntsjv3'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1ntsjv3');
		},
		m(t, a) {
			g(t, e, a), m(e, s), m(s, r), m(e, n);
		},
		d(t) {
			t && d(e);
		}
	};
}
function qt(t) {
	let e, s, r, n;
	return {
		c() {
			(e = z('svg')), (s = z('title')), (r = h('Facebook')), (n = z('path')), this.h();
		},
		l(t) {
			e = u(t, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var a = p(e);
			s = u(a, 'title', { class: !0 }, 1);
			var o = p(s);
			(r = f(o, 'Facebook')),
				o.forEach(d),
				(n = u(a, 'path', { d: !0, class: !0 }, 1)),
				p(n).forEach(d),
				a.forEach(d),
				this.h();
		},
		h() {
			E(s, 'class', 'svelte-1ntsjv3'),
				E(
					n,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				E(n, 'class', 'svelte-1ntsjv3'),
				E(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				E(e, 'viewBox', '0 0 16 16'),
				E(e, 'class', 'svelte-1ntsjv3');
		},
		m(t, a) {
			g(t, e, a), m(e, s), m(s, r), m(e, n);
		},
		d(t) {
			t && d(e);
		}
	};
}
function Rt(t) {
	let e, s, r, n, a, o, c, i, l, h;
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
		(a = new J({
			props: {
				tipo: 2,
				variante: 9,
				href: 'https://twitter.com/t0tinspire',
				target: '_blank',
				rel: 'noopener',
				$$slots: { default: [jt] },
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
				$$slots: { default: [Vt] },
				$$scope: { ctx: t }
			}
		})),
		(l = new J({
			props: {
				tipo: 2,
				variante: 9,
				href: 'https://www.facebook.com/TODH-2139705836275088',
				target: '_blank',
				rel: 'noopener',
				$$slots: { default: [qt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				_(e.$$.fragment),
					(s = $()),
					_(r.$$.fragment),
					(n = $()),
					_(a.$$.fragment),
					(o = $()),
					_(c.$$.fragment),
					(i = $()),
					_(l.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t),
					(s = w(t)),
					k(r.$$.fragment, t),
					(n = w(t)),
					k(a.$$.fragment, t),
					(o = w(t)),
					k(c.$$.fragment, t),
					(i = w(t)),
					k(l.$$.fragment, t);
			},
			m(t, u) {
				L(e, t, u),
					g(t, s, u),
					L(r, t, u),
					g(t, n, u),
					L(a, t, u),
					g(t, o, u),
					L(c, t, u),
					g(t, i, u),
					L(l, t, u),
					(h = !0);
			},
			p(t, s) {
				const n = {};
				1 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
				const o = {};
				1 & s && (o.$$scope = { dirty: s, ctx: t }), r.$set(o);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: t }), a.$set(i);
				const h = {};
				1 & s && (h.$$scope = { dirty: s, ctx: t }), c.$set(h);
				const u = {};
				1 & s && (u.$$scope = { dirty: s, ctx: t }), l.$set(u);
			},
			i(t) {
				h ||
					(q(e.$$.fragment, t),
					q(r.$$.fragment, t),
					q(a.$$.fragment, t),
					q(c.$$.fragment, t),
					q(l.$$.fragment, t),
					(h = !0));
			},
			o(t) {
				R(e.$$.fragment, t),
					R(r.$$.fragment, t),
					R(a.$$.fragment, t),
					R(c.$$.fragment, t),
					R(l.$$.fragment, t),
					(h = !1);
			},
			d(t) {
				C(e, t), t && d(s), C(r, t), t && d(n), C(a, t), t && d(o), C(c, t), t && d(i), C(l, t);
			}
		}
	);
}
function Ct(t) {
	let e, s, r, n, a, o;
	return (
		(a = new W({
			props: { tipo: 3, variante: 1, $$slots: { default: [Rt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = l('aside')),
					(s = l('small')),
					(r = h('Follow me at:')),
					(n = $()),
					_(a.$$.fragment),
					this.h();
			},
			l(t) {
				e = u(t, 'ASIDE', { class: !0 });
				var o = p(e);
				s = u(o, 'SMALL', { class: !0 });
				var c = p(s);
				(r = f(c, 'Follow me at:')),
					c.forEach(d),
					(n = w(o)),
					k(a.$$.fragment, o),
					o.forEach(d),
					this.h();
			},
			h() {
				E(s, 'class', 'svelte-1ntsjv3'), E(e, 'class', 'Links svelte-1ntsjv3');
			},
			m(t, c) {
				g(t, e, c), m(e, s), m(s, r), m(e, n), L(a, e, null), (o = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), a.$set(s);
			},
			i(t) {
				o || (q(a.$$.fragment, t), (o = !0));
			},
			o(t) {
				R(a.$$.fragment, t), (o = !1);
			},
			d(t) {
				t && d(e), C(a);
			}
		}
	);
}
class St extends o {
	constructor(t) {
		super(), c(this, t, null, Ct, i, {});
	}
}
function At(t) {
	let e, s, r;
	return (
		(s = new St({})),
		{
			c() {
				(e = l('footer')), _(s.$$.fragment), this.h();
			},
			l(t) {
				e = u(t, 'FOOTER', { class: !0 });
				var r = p(e);
				k(s.$$.fragment, r), r.forEach(d), this.h();
			},
			h() {
				E(e, 'class', 'svelte-lti6kl');
			},
			m(t, n) {
				g(t, e, n), L(s, e, null), (r = !0);
			},
			p: x,
			i(t) {
				r || (q(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				R(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(e), C(s);
			}
		}
	);
}
class Mt extends o {
	constructor(t) {
		super(), c(this, t, null, At, i, {});
	}
}
function Ot(t) {
	let e, s, r, n, a, o, c, i;
	(document.title = e = 'SvelteKit UI - ' + t[0]),
		(n = new _t({ props: { current_page: t[0], variante: 1 } })),
		n.$on('click', t[1]);
	const h = t[3].default,
		f = K(h, t, t[2], null);
	return (
		(c = new Mt({})),
		{
			c() {
				(s = $()),
					(r = l('main')),
					_(n.$$.fragment),
					(a = $()),
					f && f.c(),
					(o = $()),
					_(c.$$.fragment);
			},
			l(t) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(s = w(t)),
					(r = u(t, 'MAIN', {}));
				var e = p(r);
				k(n.$$.fragment, e), (a = w(e)), f && f.l(e), (o = w(e)), k(c.$$.fragment, e), e.forEach(d);
			},
			m(t, e) {
				g(t, s, e),
					g(t, r, e),
					L(n, r, null),
					m(r, a),
					f && f.m(r, null),
					m(r, o),
					L(c, r, null),
					(i = !0);
			},
			p(t, [s]) {
				(!i || 1 & s) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e);
				const r = {};
				1 & s && (r.current_page = t[0]),
					n.$set(r),
					f && f.p && 4 & s && G(f, h, t, t[2], s, null, null);
			},
			i(t) {
				i || (q(n.$$.fragment, t), q(f, t), q(c.$$.fragment, t), (i = !0));
			},
			o(t) {
				R(n.$$.fragment, t), R(f, t), R(c.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && d(s), t && d(r), C(n), f && f.d(t), C(c);
			}
		}
	);
}
function Nt(t, e, s) {
	let { $$slots: r = {}, $$scope: n } = e,
		a = '';
	return (
		(t.$$set = (t) => {
			'$$scope' in t && s(2, (n = t.$$scope));
		}),
		[
			a,
			(t) => {
				s(0, (a = t.srcElement.firstChild.data));
			},
			n,
			r
		]
	);
}
var zt = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(t) {
			super(), c(this, t, Nt, Ot, i, {});
		}
	}
});
const Pt = [
		() =>
			pt(() => import('./pages/index.svelte-5e2f1bad.js'), [
				'/_app/pages/index.svelte-5e2f1bad.js',
				'/_app/assets/pages/index.svelte-e01006e7.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-dc7715e6.js',
				'/_app/assets/Grid.svelte-e7cb136c.css',
				'/_app/chunks/Header-eac1ad0e.js',
				'/_app/assets/Header-51bc0f14.css',
				'/_app/chunks/pages-cee8d843.js',
				'/_app/chunks/ListItem-48007294.js',
				'/_app/assets/ListItem-7a410ecd.css',
				'/_app/chunks/Blockquote-4c1d0247.js',
				'/_app/assets/Blockquote-92d7ce79.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-374bd0d7.js',
				'/_app/assets/Img-ca3afabc.css'
			]),
		() =>
			pt(() => import('./pages/philosophy/index.svelte-3b13c036.js'), [
				'/_app/pages/philosophy/index.svelte-3b13c036.js',
				'/_app/assets/pages/philosophy/index.svelte-bb19d5fc.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-dc7715e6.js',
				'/_app/assets/Grid.svelte-e7cb136c.css',
				'/_app/chunks/Header-eac1ad0e.js',
				'/_app/assets/Header-51bc0f14.css',
				'/_app/chunks/tabsContent-d9de8955.js',
				'/_app/chunks/Section-75880cda.js',
				'/_app/chunks/Tabs-45b71f0b.js',
				'/_app/assets/Tabs-e26d66cc.css',
				'/_app/chunks/ListItem-48007294.js',
				'/_app/assets/ListItem-7a410ecd.css',
				'/_app/chunks/Img-374bd0d7.js',
				'/_app/assets/Img-ca3afabc.css'
			]),
		() =>
			pt(() => import('./pages/prototype/index.svelte-78e297cd.js'), [
				'/_app/pages/prototype/index.svelte-78e297cd.js',
				'/_app/assets/pages/prototype/index.svelte-63bf6b01.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-dc7715e6.js',
				'/_app/assets/Grid.svelte-e7cb136c.css',
				'/_app/chunks/Header-eac1ad0e.js',
				'/_app/assets/Header-51bc0f14.css',
				'/_app/chunks/tabsContent-d9de8955.js',
				'/_app/chunks/Img-374bd0d7.js',
				'/_app/assets/Img-ca3afabc.css',
				'/_app/chunks/Section-75880cda.js',
				'/_app/chunks/ListItem-48007294.js',
				'/_app/assets/ListItem-7a410ecd.css',
				'/_app/chunks/Tabs-45b71f0b.js',
				'/_app/assets/Tabs-e26d66cc.css'
			]),
		() =>
			pt(() => import('./pages/artworks/index.svelte-40411d6a.js'), [
				'/_app/pages/artworks/index.svelte-40411d6a.js',
				'/_app/assets/pages/artworks/index.svelte-ce1314f3.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-dc7715e6.js',
				'/_app/assets/Grid.svelte-e7cb136c.css',
				'/_app/chunks/Header-eac1ad0e.js',
				'/_app/assets/Header-51bc0f14.css',
				'/_app/chunks/Tabs-45b71f0b.js',
				'/_app/assets/Tabs-e26d66cc.css',
				'/_app/chunks/ListItem-48007294.js',
				'/_app/assets/ListItem-7a410ecd.css',
				'/_app/chunks/Img-374bd0d7.js',
				'/_app/assets/Img-ca3afabc.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-75880cda.js',
				'/_app/chunks/Blockquote-4c1d0247.js',
				'/_app/assets/Blockquote-92d7ce79.css'
			]),
		() =>
			pt(() => import('./pages/about/index.svelte-bd43cd8d.js'), [
				'/_app/pages/about/index.svelte-bd43cd8d.js',
				'/_app/assets/pages/about/index.svelte-1f6d4949.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-75880cda.js',
				'/_app/chunks/Header-eac1ad0e.js',
				'/_app/assets/Header-51bc0f14.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			pt(() => import('./pages/lab/index.svelte-802c4c31.js'), [
				'/_app/pages/lab/index.svelte-802c4c31.js',
				'/_app/assets/pages/lab/index.svelte-5b1dc778.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Grid.svelte-dc7715e6.js',
				'/_app/assets/Grid.svelte-e7cb136c.css',
				'/_app/chunks/Header-eac1ad0e.js',
				'/_app/assets/Header-51bc0f14.css',
				'/_app/chunks/Section-75880cda.js',
				'/_app/chunks/ListItem-48007294.js',
				'/_app/assets/ListItem-7a410ecd.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	Tt = [
		[/^\/$/, [Pt[0]]],
		[/^\/philosophy\/?$/, [Pt[1]]],
		[/^\/prototype\/?$/, [Pt[2]]],
		[/^\/artworks\/?$/, [Pt[3]]],
		[/^\/about\/?$/, [Pt[4]]],
		[/^\/lab\/?$/, [Pt[5]]]
	];
function It() {
	return { x: pageXOffset, y: pageYOffset };
}
function Bt(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class Dt {
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
						const t = a(a({}, history.state || {}), { 'sveltekit:scroll': It() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const s = (t) => {
			const e = Bt(t.target);
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
				const e = Bt(t.target);
				if (!e) return;
				if (!e.href) return;
				const s = 'object' == typeof e.href && 'SVGAnimatedString' === e.href.constructor.name,
					r = String(s ? e.href.baseVal : e.href);
				if (r === location.href) return void (location.hash || t.preventDefault());
				if (e.hasAttribute('download') || 'external' === e.getAttribute('rel')) return;
				if (s ? e.target.baseVal : e.target) return;
				const n = new URL(r);
				if (n.pathname === location.pathname && n.search === location.search) return;
				const a = this.parse(n);
				if (a) {
					const s = e.hasAttribute('sveltekit:noscroll');
					history.pushState({}, '', n.href),
						this._navigate(a, s ? It() : null, [], n.hash),
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
			const n = new URL(
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
				a = this.parse(n);
			if (a)
				return (
					history[s ? 'replaceState' : 'pushState']({}, '', t),
					this._navigate(a, e ? It() : null, r, n.hash)
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
		const n = r && document.getElementById(r.slice(1));
		e
			? scrollTo(e.x, e.y)
			: n
			? scrollTo(0, n.getBoundingClientRect().top + scrollY)
			: scrollTo(0, 0);
	}
}
function Ht(t) {
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
function Ut(t) {
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
function Kt(t, n) {
	const a = 'string' == typeof t ? t : t.url,
		o = document.querySelector(`script[type="svelte-data"][url="${a}"]`);
	if (o) {
		const t = JSON.parse(o.textContent),
			{ body: n } = t,
			a = ((t, n) => {
				var a = {};
				for (var o in t) e.call(t, o) && n.indexOf(o) < 0 && (a[o] = t[o]);
				if (null != t && s) for (var o of s(t)) n.indexOf(o) < 0 && r.call(t, o) && (a[o] = t[o]);
				return a;
			})(t, ['body']);
		return Promise.resolve(new Response(n, a));
	}
	return fetch(t, n);
}
class Ft {
	constructor({ Root: t, layout: e, target: s, session: r, host: n }) {
		(this.Root = t),
			(this.layout = e),
			(this.host = n),
			(this.router = null),
			(this.target = s),
			(this.started = !1),
			(this.current = { page: null, query: null, session_changed: !1, nodes: [], contexts: [] }),
			(this.caches = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: Ut({}), navigating: Y(null), session: Y(r) }),
			(this.$session = null),
			(this.root = null);
		let a = !1;
		this.stores.session.subscribe(async (t) => {
			if (((this.$session = t), !a)) return;
			this.current.session_changed = !0;
			const e = this.router.parse(new URL(location.href));
			this.update(e, []);
		}),
			(a = !0);
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
				[r, n, a] = s;
			if (1 === s.length) return { reload: !0 };
			let o = e + 1;
			for (; o < t.routes.length; ) {
				const e = t.routes[o];
				if (e[0].toString() !== r.toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (o += 1);
			}
			const c = n.map((t) => t()),
				i = {
					host: this.host,
					path: t.path,
					params: a ? a(s[0].exec(t.path)) : {},
					query: t.query
				},
				l = await this._load({ status: 200, error: null, nodes: c, page: i });
			if (l) return l;
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
				props: a({ stores: this.stores }, t.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _load({ status: t, error: e, nodes: s, page: r }) {
		const n = r.query.toString(),
			o = {
				state: { page: r, query: n, session_changed: !1, nodes: [], contexts: [] },
				props: { status: t, error: e, components: [] }
			},
			c = {
				path: !this.current.page || r.path !== this.current.page.path,
				params: Object.keys(r.params).filter(
					(t) => !this.current.page || this.current.page.params[t] !== r.params[t]
				),
				query: n !== this.current.query,
				session: this.current.session_changed,
				context: !1
			};
		try {
			const t = [this.layout, ...s],
				i = [];
			let l;
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
					const h = r.path + n,
						u = this.caches.get(p),
						f = u && u.get(h);
					let d, g;
					if (!f || (c.context && f.node.uses.context)) {
						d = {
							module: p,
							uses: { params: new Set(), path: !1, query: !1, session: !1, context: !1 }
						};
						const n = {};
						for (const t in r.params)
							Object.defineProperty(n, t, {
								get: () => (d.uses.params.add(t), r.params[t]),
								enumerable: !0
							});
						const o = this.$session;
						if (p.load) {
							g = await p.load.call(null, {
								page: {
									host: r.host,
									params: n,
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
									return (d.uses.context = !0), a({}, l);
								},
								fetch: this.started ? fetch : Kt
							});
							const c = s === t.length - 1 && !e;
							if (!g && c) return;
						}
					} else ({ node: d, loaded: g } = f);
					if (g) {
						if (((g = Ht(g)), g.error)) {
							if (e) throw e;
							return await this._load({
								status: g.status || 500,
								error: g.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (g.redirect) return { redirect: g.redirect };
						if ((g.context && ((c.context = !0), (l = a(a({}, l), g.context))), g.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const t = this.caches.get(p),
								e = { node: d, loaded: g };
							t.set(h, e);
							let s = !1;
							const r = setTimeout(() => {
									n();
								}, 1e3 * g.maxage),
								n = () => {
									t.get(h) === e && t.delete(h), a(), clearTimeout(r);
								},
								a = this.stores.session.subscribe(() => {
									s && n();
								});
							s = !0;
						}
						i[s] = g.props;
					}
					(o.state.nodes[s] = d), (o.state.contexts[s] = l);
				} else (o.state.nodes[s] = h), (o.state.contexts[s] = l = u);
			}
			return (
				(await Promise.all(i)).forEach((t, e) => {
					t && (o.props[`props_${e}`] = t);
				}),
				(this.current.page && r.path === this.current.page.path && !c.query) || (o.props.page = r),
				o
			);
		} catch (i) {
			if (e) throw e;
			return await this._load({
				status: 500,
				error: i,
				nodes: [],
				page: { host: r.host, path: r.path, query: r.query, params: {} }
			});
		}
	}
}
async function Gt({ paths: t, target: e, session: s, host: r, route: n, hydrate: a }) {
	const o = n && new Dt({ base: t.base, routes: Tt }),
		c = new Ft({ Root: lt, layout: zt, target: e, session: s, host: r });
	a && (await c.start(a)), n && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Gt as start };
