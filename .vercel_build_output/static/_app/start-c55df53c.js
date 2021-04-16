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
	i,
	s as c,
	e as l,
	t as h,
	c as u,
	a as p,
	b as f,
	d,
	f as v,
	g,
	h as m,
	j as $,
	k as y,
	l as w,
	n as E,
	m as _,
	o as b,
	p as x,
	q,
	r as k,
	u as j,
	v as L,
	w as V,
	x as A,
	y as R,
	z as C,
	A as S,
	B as M,
	C as O,
	D as N,
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
import { L as W } from './chunks/List-23857782.js';
import { w as J } from './chunks/index-cc16b092.js';
import { p as Y } from './chunks/pages-508a9d98.js';
function Z(t) {
	let e,
		s,
		r = t[1].stack + '';
	return {
		c() {
			(e = l('pre')), (s = h(r));
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
function X(t) {
	let e,
		s,
		r,
		a,
		n,
		o,
		i,
		c = t[1].message + '',
		_ = t[1].stack && Z(t);
	return {
		c() {
			(e = l('h1')),
				(s = h(t[0])),
				(r = $()),
				(a = l('p')),
				(n = h(c)),
				(o = $()),
				_ && _.c(),
				(i = y());
		},
		l(l) {
			e = u(l, 'H1', {});
			var h = p(e);
			(s = f(h, t[0])), h.forEach(d), (r = w(l)), (a = u(l, 'P', {}));
			var v = p(a);
			(n = f(v, c)), v.forEach(d), (o = w(l)), _ && _.l(l), (i = y());
		},
		m(t, c) {
			v(t, e, c), g(e, s), v(t, r, c), v(t, a, c), g(a, n), v(t, o, c), _ && _.m(t, c), v(t, i, c);
		},
		p(t, [e]) {
			1 & e && m(s, t[0]),
				2 & e && c !== (c = t[1].message + '') && m(n, c),
				t[1].stack
					? _
						? _.p(t, e)
						: ((_ = Z(t)), _.c(), _.m(i.parentNode, i))
					: _ && (_.d(1), (_ = null));
		},
		i: E,
		o: E,
		d(t) {
			t && d(e), t && d(r), t && d(a), t && d(o), _ && _.d(t), t && d(i);
		}
	};
}
function Q(t, e, s) {
	let { status: r } = e,
		{ error: a } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)), 'error' in t && s(1, (a = t.error));
		}),
		[r, a]
	);
}
class tt extends o {
	constructor(t) {
		super(), i(this, t, Q, X, c, { status: 0, error: 1 });
	}
}
function et(t) {
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
				e && x(e.$$.fragment), (s = y());
			},
			l(t) {
				e && q(e.$$.fragment, t), (s = y());
			},
			m(t, a) {
				e && k(e, t, a), v(t, s, a), (r = !0);
			},
			p(t, r) {
				const i = 16 & r ? j(a, [L(t[4] || {})]) : {};
				if (n !== (n = t[2][1])) {
					if (e) {
						O();
						const t = e;
						A(t.$$.fragment, 1, 0, () => {
							R(t, 1);
						}),
							N();
					}
					n
						? ((e = new n(o())), x(e.$$.fragment), V(e.$$.fragment, 1), k(e, s.parentNode, s))
						: (e = null);
				} else n && e.$set(i);
			},
			i(t) {
				r || (e && V(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				e && A(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(s), e && R(e, t);
			}
		}
	);
}
function st(t) {
	let e, s;
	return (
		(e = new tt({ props: { status: t[0], error: t[1] } })),
		{
			c() {
				x(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, r) {
				k(e, t, r), (s = !0);
			},
			p(t, s) {
				const r = {};
				1 & s && (r.status = t[0]), 2 & s && (r.error = t[1]), e.$set(r);
			},
			i(t) {
				s || (V(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				A(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				R(e, t);
			}
		}
	);
}
function rt(t) {
	let e, s, r, a;
	const n = [st, et],
		o = [];
	function i(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = i(t)),
		(s = o[e] = n[e](t)),
		{
			c() {
				s.c(), (r = y());
			},
			l(t) {
				s.l(t), (r = y());
			},
			m(t, s) {
				o[e].m(t, s), v(t, r, s), (a = !0);
			},
			p(t, a) {
				let c = e;
				(e = i(t)),
					e === c
						? o[e].p(t, a)
						: (O(),
						  A(o[c], 1, 1, () => {
								o[c] = null;
						  }),
						  N(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  V(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (V(s), (a = !0));
			},
			o(t) {
				A(s), (a = !1);
			},
			d(t) {
				o[e].d(t), t && d(r);
			}
		}
	);
}
function at(t) {
	let e,
		s = t[6] && nt(t);
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
			b(e, 'id', 'svelte-announcer'),
				b(e, 'aria-live', 'assertive'),
				b(e, 'aria-atomic', 'true'),
				b(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			v(t, e, r), s && s.m(e, null);
		},
		p(t, r) {
			t[6] ? (s ? s.p(t, r) : ((s = nt(t)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(t) {
			t && d(e), s && s.d();
		}
	};
}
function nt(t) {
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
function ot(t) {
	let e, s, r, a;
	const n = [t[3] || {}];
	let o = { $$slots: { default: [rt] }, $$scope: { ctx: t } };
	for (let c = 0; c < n.length; c += 1) o = _(o, n[c]);
	e = new t[8]({ props: o });
	let i = t[5] && at(t);
	return {
		c() {
			x(e.$$.fragment), (s = $()), i && i.c(), (r = y());
		},
		l(t) {
			q(e.$$.fragment, t), (s = w(t)), i && i.l(t), (r = y());
		},
		m(t, n) {
			k(e, t, n), v(t, s, n), i && i.m(t, n), v(t, r, n), (a = !0);
		},
		p(t, [s]) {
			const a = 8 & s ? j(n, [L(t[3] || {})]) : {};
			2071 & s && (a.$$scope = { dirty: s, ctx: t }),
				e.$set(a),
				t[5]
					? i
						? i.p(t, s)
						: ((i = at(t)), i.c(), i.m(r.parentNode, r))
					: i && (i.d(1), (i = null));
		},
		i(t) {
			a || (V(e.$$.fragment, t), (a = !0));
		},
		o(t) {
			A(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			R(e, t), t && d(s), i && i.d(t), t && d(r);
		}
	};
}
function it(t, e, s) {
	let { status: r } = e,
		{ error: a } = e,
		{ stores: n } = e,
		{ page: o } = e,
		{ components: i } = e,
		{ props_0: c = null } = e,
		{ props_1: l = null } = e;
	const h = i[0];
	C('__svelte__', n), S(n.page.notify);
	let u = !1,
		p = !1,
		f = null;
	return (
		M(() => {
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
				'components' in t && s(2, (i = t.components)),
				'props_0' in t && s(3, (c = t.props_0)),
				'props_1' in t && s(4, (l = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && n.page.set(o);
		}),
		[r, a, i, c, l, u, p, f, h, n, o]
	);
}
class ct extends o {
	constructor(t) {
		super(),
			i(this, t, it, ot, c, {
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
const ht = {},
	ut = function (t, e) {
		if (!e) return t();
		if (void 0 === lt) {
			const t = document.createElement('link').relList;
			lt = t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			e.map((t) => {
				if (t in ht) return;
				ht[t] = !0;
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
function pt(t) {
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
	let e, s, r, a, n, o, i, c, l, h, f;
	return {
		c() {
			(e = P('svg')),
				(s = P('g')),
				(r = P('circle')),
				(a = P('g')),
				(n = P('circle')),
				(o = P('circle')),
				(i = P('g')),
				(c = P('circle')),
				(l = P('circle')),
				(h = P('circle')),
				(f = P('circle')),
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
				(i = u(g, 'g', { class: !0 }, 1));
			var $ = p(i);
			(c = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(c).forEach(d),
				(l = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(l).forEach(d),
				(h = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(h).forEach(d),
				(f = u($, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(f).forEach(d),
				$.forEach(d),
				g.forEach(d),
				v.forEach(d),
				this.h();
		},
		h() {
			b(r, 'cx', '25'),
				b(r, 'cy', '25'),
				b(r, 'r', '25'),
				b(r, 'class', 'svelte-povrm5'),
				b(n, 'cx', '12.5'),
				b(n, 'cy', '25'),
				b(n, 'r', '12.5'),
				b(n, 'class', 'svelte-povrm5'),
				b(o, 'cx', '38'),
				b(o, 'cy', '25'),
				b(o, 'r', '12.5'),
				b(o, 'class', 'svelte-povrm5'),
				b(a, 'class', 'svelte-povrm5'),
				b(c, 'cx', '6.5'),
				b(c, 'cy', '25'),
				b(c, 'r', '6.25'),
				b(c, 'class', 'svelte-povrm5'),
				b(l, 'cx', '19'),
				b(l, 'cy', '25'),
				b(l, 'r', '6.25'),
				b(l, 'class', 'svelte-povrm5'),
				b(h, 'cx', '31.5'),
				b(h, 'cy', '25'),
				b(h, 'r', '6.25'),
				b(h, 'class', 'svelte-povrm5'),
				b(f, 'cx', '44'),
				b(f, 'cy', '25'),
				b(f, 'r', '6.25'),
				b(f, 'class', 'svelte-povrm5'),
				b(i, 'class', 'svelte-povrm5'),
				b(s, 'class', 'svelte-povrm5'),
				b(e, 'class', 'logo svelte-povrm5'),
				b(e, 'width', '51'),
				b(e, 'height', '51');
		},
		m(t, u) {
			v(t, e, u),
				g(e, s),
				g(s, r),
				g(s, a),
				g(a, n),
				g(a, o),
				g(s, i),
				g(i, c),
				g(i, l),
				g(i, h),
				g(i, f);
		},
		p: E,
		i: E,
		o: E,
		d(t) {
			t && d(e);
		}
	};
}
class dt extends o {
	constructor(t) {
		super(), i(this, t, null, ft, c, {});
	}
}
function vt(t, e, s) {
	const r = t.slice();
	return (r[9] = e[s].url), (r[10] = e[s].name), r;
}
function gt(t, e, s) {
	const r = t.slice();
	return (r[9] = e[s].url), (r[10] = e[s].name), r;
}
function mt(t) {
	let e,
		s,
		r = Y,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = yt(vt(t, r, n));
	return {
		c() {
			e = l('nav');
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
			b(e, 'class', (s = D(t[4][t[1]]) + ' svelte-s7inos'));
		},
		m(t, s) {
			v(t, e, s);
			for (let r = 0; r < a.length; r += 1) a[r].m(e, null);
		},
		p(t, n) {
			if (1 & n) {
				let s;
				for (r = Y, s = 0; s < r.length; s += 1) {
					const o = vt(t, r, s);
					a[s] ? a[s].p(o, n) : ((a[s] = yt(o)), a[s].c(), a[s].m(e, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = D(t[4][t[1]]) + ' svelte-s7inos') && b(e, 'class', s);
		},
		i: E,
		o: E,
		d(t) {
			t && d(e), H(a, t);
		}
	};
}
function $t(t) {
	let e, s, r, a, n, o, i, c, h;
	r = new dt({});
	let f = Y,
		m = [];
	for (let l = 0; l < f.length; l += 1) m[l] = wt(gt(t, f, l));
	return {
		c() {
			(e = l('div')), (s = l('div')), x(r.$$.fragment), (a = $()), (n = l('nav'));
			for (let t = 0; t < m.length; t += 1) m[t].c();
			this.h();
		},
		l(t) {
			e = u(t, 'DIV', { class: !0 });
			var o = p(e);
			s = u(o, 'DIV', { class: !0 });
			var i = p(s);
			q(r.$$.fragment, i), i.forEach(d), (a = w(o)), (n = u(o, 'NAV', { class: !0 }));
			var c = p(n);
			for (let e = 0; e < m.length; e += 1) m[e].l(c);
			c.forEach(d), o.forEach(d), this.h();
		},
		h() {
			b(s, 'class', 'ButtonNav svelte-s7inos'),
				b(n, 'class', (o = D(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-s7inos')),
				b(e, 'class', 'Variante_1 svelte-s7inos');
		},
		m(o, l) {
			v(o, e, l), g(e, s), k(r, s, null), g(e, a), g(e, n);
			for (let t = 0; t < m.length; t += 1) m[t].m(n, null);
			(i = !0),
				c ||
					((h = [B(s, 'click', t[7]), z(pt.call(null, e)), B(e, 'click_outside', t[3])]), (c = !0));
		},
		p(t, e) {
			if (9 & e) {
				let s;
				for (f = Y, s = 0; s < f.length; s += 1) {
					const r = gt(t, f, s);
					m[s] ? m[s].p(r, e) : ((m[s] = wt(r)), m[s].c(), m[s].m(n, null));
				}
				for (; s < m.length; s += 1) m[s].d(1);
				m.length = f.length;
			}
			(!i ||
				(4 & e && o !== (o = D(t[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-s7inos'))) &&
				b(n, 'class', o);
		},
		i(t) {
			i || (V(r.$$.fragment, t), (i = !0));
		},
		o(t) {
			A(r.$$.fragment, t), (i = !1);
		},
		d(t) {
			t && d(e), R(r), H(m, t), (c = !1), U(h);
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
			(e = l('a')), (s = h(o)), (r = $()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0 });
			var a = p(e);
			(s = f(a, o)), (r = w(a)), a.forEach(d), this.h();
		},
		h() {
			b(e, 'href', t[9]), b(e, 'class', 'svelte-s7inos'), I(e, 'active', t[10] === t[0]);
		},
		m(o, i) {
			v(o, e, i), g(e, s), g(e, r), a || ((n = B(e, 'click', t[6])), (a = !0));
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
			(e = l('a')), (s = h(o)), (r = $()), this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, class: !0, role: !0 });
			var a = p(e);
			(s = f(a, o)), (r = w(a)), a.forEach(d), this.h();
		},
		h() {
			b(e, 'href', t[9]),
				b(e, 'class', 'NavItem svelte-s7inos'),
				b(e, 'role', 'navigation'),
				I(e, 'active', t[10] === t[0]);
		},
		m(o, i) {
			v(o, e, i),
				g(e, s),
				g(e, r),
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
function Et(t) {
	let e, s, r, a;
	const n = [$t, mt],
		o = [];
	function i(t, e) {
		return 1 === t[1] ? 0 : 1;
	}
	return (
		(e = i(t)),
		(s = o[e] = n[e](t)),
		{
			c() {
				s.c(), (r = y());
			},
			l(t) {
				s.l(t), (r = y());
			},
			m(t, s) {
				o[e].m(t, s), v(t, r, s), (a = !0);
			},
			p(t, [a]) {
				let c = e;
				(e = i(t)),
					e === c
						? o[e].p(t, a)
						: (O(),
						  A(o[c], 1, 1, () => {
								o[c] = null;
						  }),
						  N(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  V(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (V(s), (a = !0));
			},
			o(t) {
				A(s), (a = !1);
			},
			d(t) {
				o[e].d(t), t && d(r);
			}
		}
	);
}
function _t(t, e, s) {
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
class bt extends o {
	constructor(t) {
		super(), i(this, t, _t, Et, c, { current_page: 0, variante: 1 });
	}
}
function xt(t) {
	let e, s, r, a, n, o, i, c, m, y, E, _, x, q, k, j, L, V, A, R, C, S, M, O, N, T, I, B, D;
	return {
		c() {
			(e = l('a')),
				(s = P('svg')),
				(r = P('title')),
				(a = h('Linkedin')),
				(n = P('path')),
				(o = $()),
				(i = l('a')),
				(c = P('svg')),
				(m = P('title')),
				(y = h('Algunos artículos en Medium')),
				(E = P('path')),
				(_ = $()),
				(x = l('a')),
				(q = P('svg')),
				(k = P('title')),
				(j = h('Twitter')),
				(L = P('path')),
				(V = $()),
				(A = l('a')),
				(R = P('svg')),
				(C = P('title')),
				(S = h('Mi repositorio en Github')),
				(M = P('path')),
				(O = $()),
				(N = l('a')),
				(T = P('svg')),
				(I = P('title')),
				(B = h('Facebook')),
				(D = P('path')),
				this.h();
		},
		l(t) {
			e = u(t, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var l = p(e);
			s = u(l, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var h = p(s);
			r = u(h, 'title', { class: !0 }, 1);
			var v = p(r);
			(a = f(v, 'Linkedin')),
				v.forEach(d),
				(n = u(h, 'path', { d: !0, class: !0 }, 1)),
				p(n).forEach(d),
				h.forEach(d),
				l.forEach(d),
				(o = w(t)),
				(i = u(t, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var g = p(i);
			c = u(g, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var $ = p(c);
			m = u($, 'title', { class: !0 }, 1);
			var b = p(m);
			(y = f(b, 'Algunos artículos en Medium')),
				b.forEach(d),
				(E = u($, 'path', { d: !0, class: !0 }, 1)),
				p(E).forEach(d),
				$.forEach(d),
				g.forEach(d),
				(_ = w(t)),
				(x = u(t, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var P = p(x);
			q = u(P, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var H = p(q);
			k = u(H, 'title', { class: !0 }, 1);
			var U = p(k);
			(j = f(U, 'Twitter')),
				U.forEach(d),
				(L = u(H, 'path', { d: !0, class: !0 }, 1)),
				p(L).forEach(d),
				H.forEach(d),
				P.forEach(d),
				(V = w(t)),
				(A = u(t, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var z = p(A);
			R = u(z, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var K = p(R);
			C = u(K, 'title', { class: !0 }, 1);
			var F = p(C);
			(S = f(F, 'Mi repositorio en Github')),
				F.forEach(d),
				(M = u(K, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				p(M).forEach(d),
				K.forEach(d),
				z.forEach(d),
				(O = w(t)),
				(N = u(t, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var G = p(N);
			T = u(G, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var W = p(T);
			I = u(W, 'title', { class: !0 }, 1);
			var J = p(I);
			(B = f(J, 'Facebook')),
				J.forEach(d),
				(D = u(W, 'path', { d: !0, class: !0 }, 1)),
				p(D).forEach(d),
				W.forEach(d),
				G.forEach(d),
				this.h();
		},
		h() {
			b(r, 'class', 'svelte-q46tij'),
				b(
					n,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				b(n, 'class', 'svelte-q46tij'),
				b(s, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(s, 'viewBox', '0 0 16 16'),
				b(s, 'class', 'svelte-q46tij'),
				b(e, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				b(e, 'target', '_blank'),
				b(e, 'rel', 'noopener'),
				b(e, 'class', 'svelte-q46tij'),
				b(m, 'class', 'svelte-q46tij'),
				b(
					E,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				b(E, 'class', 'svelte-q46tij'),
				b(c, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(c, 'viewBox', '0 0 16 16'),
				b(c, 'class', 'svelte-q46tij'),
				b(i, 'href', 'https://medium.com/@todh'),
				b(i, 'target', '_blank'),
				b(i, 'rel', 'noopener'),
				b(i, 'class', 'svelte-q46tij'),
				b(k, 'class', 'svelte-q46tij'),
				b(
					L,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				b(L, 'class', 'svelte-q46tij'),
				b(q, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(q, 'viewBox', '0 0 16 16'),
				b(q, 'class', 'svelte-q46tij'),
				b(x, 'href', 'https://twitter.com/t0tinspire'),
				b(x, 'target', '_blank'),
				b(x, 'rel', 'noopener'),
				b(x, 'class', 'svelte-q46tij'),
				b(C, 'class', 'svelte-q46tij'),
				b(M, 'fill-rule', 'evenodd'),
				b(M, 'clip-rule', 'evenodd'),
				b(
					M,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				b(M, 'class', 'svelte-q46tij'),
				b(R, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(R, 'viewBox', '0 0 16 16'),
				b(R, 'class', 'svelte-q46tij'),
				b(A, 'href', 'https://github.com/t0t'),
				b(A, 'target', '_blank'),
				b(A, 'rel', 'noopener'),
				b(A, 'class', 'svelte-q46tij'),
				b(I, 'class', 'svelte-q46tij'),
				b(
					D,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				b(D, 'class', 'svelte-q46tij'),
				b(T, 'xmlns', 'http://www.w3.org/2000/svg'),
				b(T, 'viewBox', '0 0 16 16'),
				b(T, 'class', 'svelte-q46tij'),
				b(N, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				b(N, 'target', '_blank'),
				b(N, 'rel', 'noopener'),
				b(N, 'class', 'svelte-q46tij');
		},
		m(t, l) {
			v(t, e, l),
				g(e, s),
				g(s, r),
				g(r, a),
				g(s, n),
				v(t, o, l),
				v(t, i, l),
				g(i, c),
				g(c, m),
				g(m, y),
				g(c, E),
				v(t, _, l),
				v(t, x, l),
				g(x, q),
				g(q, k),
				g(k, j),
				g(q, L),
				v(t, V, l),
				v(t, A, l),
				g(A, R),
				g(R, C),
				g(C, S),
				g(R, M),
				v(t, O, l),
				v(t, N, l),
				g(N, T),
				g(T, I),
				g(I, B),
				g(T, D);
		},
		d(t) {
			t && d(e),
				t && d(o),
				t && d(i),
				t && d(_),
				t && d(x),
				t && d(V),
				t && d(A),
				t && d(O),
				t && d(N);
		}
	};
}
function qt(t) {
	let e, s, r, a, n, o;
	return (
		(n = new W({
			props: { tipo: 1, variante: 1, $$slots: { default: [xt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = l('aside')),
					(s = l('small')),
					(r = h('Follow me at:')),
					(a = $()),
					x(n.$$.fragment),
					this.h();
			},
			l(t) {
				e = u(t, 'ASIDE', { class: !0 });
				var o = p(e);
				s = u(o, 'SMALL', { class: !0 });
				var i = p(s);
				(r = f(i, 'Follow me at:')),
					i.forEach(d),
					(a = w(o)),
					q(n.$$.fragment, o),
					o.forEach(d),
					this.h();
			},
			h() {
				b(s, 'class', 'svelte-q46tij'), b(e, 'class', 'Links svelte-q46tij');
			},
			m(t, i) {
				v(t, e, i), g(e, s), g(s, r), g(e, a), k(n, e, null), (o = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
			},
			i(t) {
				o || (V(n.$$.fragment, t), (o = !0));
			},
			o(t) {
				A(n.$$.fragment, t), (o = !1);
			},
			d(t) {
				t && d(e), R(n);
			}
		}
	);
}
class kt extends o {
	constructor(t) {
		super(), i(this, t, null, qt, c, {});
	}
}
function jt(t) {
	let e, s, r;
	return (
		(s = new kt({})),
		{
			c() {
				(e = l('footer')), x(s.$$.fragment), this.h();
			},
			l(t) {
				e = u(t, 'FOOTER', { class: !0 });
				var r = p(e);
				q(s.$$.fragment, r), r.forEach(d), this.h();
			},
			h() {
				b(e, 'class', 'svelte-lti6kl');
			},
			m(t, a) {
				v(t, e, a), k(s, e, null), (r = !0);
			},
			p: E,
			i(t) {
				r || (V(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				A(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && d(e), R(s);
			}
		}
	);
}
class Lt extends o {
	constructor(t) {
		super(), i(this, t, null, jt, c, {});
	}
}
function Vt(t) {
	let e, s, r, a, n, o, i, c;
	(document.title = e = 'SvelteKit UI - ' + t[0]),
		(a = new bt({ props: { current_page: t[0], variante: 1 } })),
		a.$on('click', t[1]);
	const h = t[3].default,
		f = K(h, t, t[2], null);
	return (
		(i = new Lt({})),
		{
			c() {
				(s = $()),
					(r = l('main')),
					x(a.$$.fragment),
					(n = $()),
					f && f.c(),
					(o = $()),
					x(i.$$.fragment);
			},
			l(t) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(s = w(t)),
					(r = u(t, 'MAIN', {}));
				var e = p(r);
				q(a.$$.fragment, e), (n = w(e)), f && f.l(e), (o = w(e)), q(i.$$.fragment, e), e.forEach(d);
			},
			m(t, e) {
				v(t, s, e),
					v(t, r, e),
					k(a, r, null),
					g(r, n),
					f && f.m(r, null),
					g(r, o),
					k(i, r, null),
					(c = !0);
			},
			p(t, [s]) {
				(!c || 1 & s) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e);
				const r = {};
				1 & s && (r.current_page = t[0]),
					a.$set(r),
					f && f.p && 4 & s && G(f, h, t, t[2], s, null, null);
			},
			i(t) {
				c || (V(a.$$.fragment, t), V(f, t), V(i.$$.fragment, t), (c = !0));
			},
			o(t) {
				A(a.$$.fragment, t), A(f, t), A(i.$$.fragment, t), (c = !1);
			},
			d(t) {
				t && d(s), t && d(r), R(a), f && f.d(t), R(i);
			}
		}
	);
}
function At(t, e, s) {
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
var Rt = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(t) {
			super(), i(this, t, At, Vt, c, {});
		}
	}
});
const Ct = [
		() =>
			ut(() => import('./pages/index.svelte-83ccf2b5.js'), [
				'/_app/pages/index.svelte-83ccf2b5.js',
				'/_app/assets/pages/index.svelte-db0343ba.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Header-a9ed1c92.js',
				'/_app/assets/Header-d5cb8cb3.css',
				'/_app/chunks/ListItem-e194f349.js',
				'/_app/assets/ListItem-cce47c7f.css',
				'/_app/chunks/List-23857782.js',
				'/_app/assets/List-0680258e.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-3fbf0e6b.js',
				'/_app/assets/Img-7ecb2879.css',
				'/_app/chunks/pages-508a9d98.js'
			]),
		() =>
			ut(() => import('./pages/philosophy/index.svelte-0aab6424.js'), [
				'/_app/pages/philosophy/index.svelte-0aab6424.js',
				'/_app/assets/pages/philosophy/index.svelte-defa0083.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/coverData-76b1c622.js',
				'/_app/chunks/tabsContent-d0ddc54a.js',
				'/_app/chunks/ListItem-e194f349.js',
				'/_app/assets/ListItem-cce47c7f.css',
				'/_app/chunks/Header-a9ed1c92.js',
				'/_app/assets/Header-d5cb8cb3.css',
				'/_app/chunks/Tabs-f87287a6.js',
				'/_app/assets/Tabs-c43955ab.css',
				'/_app/chunks/List-23857782.js',
				'/_app/assets/List-0680258e.css'
			]),
		() =>
			ut(() => import('./pages/prototype/index.svelte-be12b952.js'), [
				'/_app/pages/prototype/index.svelte-be12b952.js',
				'/_app/assets/pages/prototype/index.svelte-f6e192f0.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/coverData-76b1c622.js',
				'/_app/chunks/Header-a9ed1c92.js',
				'/_app/assets/Header-d5cb8cb3.css',
				'/_app/chunks/ListItem-e194f349.js',
				'/_app/assets/ListItem-cce47c7f.css',
				'/_app/chunks/List-23857782.js',
				'/_app/assets/List-0680258e.css',
				'/_app/chunks/tabsContent-d0ddc54a.js',
				'/_app/chunks/Tabs-f87287a6.js',
				'/_app/assets/Tabs-c43955ab.css'
			]),
		() =>
			ut(() => import('./pages/artworks/index.svelte-29841e8e.js'), [
				'/_app/pages/artworks/index.svelte-29841e8e.js',
				'/_app/assets/pages/artworks/index.svelte-7ad138ba.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/coverData-76b1c622.js',
				'/_app/chunks/Tabs-f87287a6.js',
				'/_app/assets/Tabs-c43955ab.css',
				'/_app/chunks/ListItem-e194f349.js',
				'/_app/assets/ListItem-cce47c7f.css',
				'/_app/chunks/Header-a9ed1c92.js',
				'/_app/assets/Header-d5cb8cb3.css',
				'/_app/chunks/List-23857782.js',
				'/_app/assets/List-0680258e.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Img-3fbf0e6b.js',
				'/_app/assets/Img-7ecb2879.css'
			]),
		() =>
			ut(() => import('./pages/about/index.svelte-42db5a60.js'), [
				'/_app/pages/about/index.svelte-42db5a60.js',
				'/_app/assets/pages/about/index.svelte-1bab4db8.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Header-a9ed1c92.js',
				'/_app/assets/Header-d5cb8cb3.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			ut(() => import('./pages/lab/index.svelte-989fdfda.js'), [
				'/_app/pages/lab/index.svelte-989fdfda.js',
				'/_app/assets/pages/lab/index.svelte-cebcad9e.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/coverData-76b1c622.js',
				'/_app/chunks/Header-a9ed1c92.js',
				'/_app/assets/Header-d5cb8cb3.css',
				'/_app/chunks/List-23857782.js',
				'/_app/assets/List-0680258e.css',
				'/_app/chunks/ListItem-e194f349.js',
				'/_app/assets/ListItem-cce47c7f.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	St = [
		[/^\/$/, [Ct[0]]],
		[/^\/philosophy\/?$/, [Ct[1]]],
		[/^\/prototype\/?$/, [Ct[2]]],
		[/^\/artworks\/?$/, [Ct[3]]],
		[/^\/about\/?$/, [Ct[4]]],
		[/^\/lab\/?$/, [Ct[5]]]
	];
function Mt() {
	return { x: pageXOffset, y: pageYOffset };
}
function Ot(t) {
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
						const t = n(n({}, history.state || {}), { 'sveltekit:scroll': Mt() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const s = (t) => {
			const e = Ot(t.target);
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
				const e = Ot(t.target);
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
function Pt(t) {
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
function Tt(t) {
	const e = J(t);
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
class Bt {
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
			(this.stores = { page: Tt({}), navigating: J(null), session: J(r) }),
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
			const i = a.map((t) => t()),
				c = {
					host: this.host,
					path: t.path,
					params: n ? n(s[0].exec(t.path)) : {},
					query: t.query
				},
				l = await this._load({ status: 200, error: null, nodes: i, page: c });
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
			i = {
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
				c = [];
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
					(i.path && h.uses.path) ||
					i.params.some((t) => h.uses.params.has(t)) ||
					(i.query && h.uses.query) ||
					(i.session && h.uses.session) ||
					(i.context && h.uses.context)
				) {
					const h = r.path + a,
						u = this.caches.get(p),
						f = u && u.get(h);
					let d, v;
					if (!f || (i.context && f.node.uses.context)) {
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
									return (d.uses.context = !0), n({}, l);
								},
								fetch: this.started ? fetch : It
							});
							const i = s === t.length - 1 && !e;
							if (!v && i) return;
						}
					} else ({ node: d, loaded: v } = f);
					if (v) {
						if (((v = Pt(v)), v.error)) {
							if (e) throw e;
							return await this._load({
								status: v.status || 500,
								error: v.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (v.redirect) return { redirect: v.redirect };
						if ((v.context && ((i.context = !0), (l = n(n({}, l), v.context))), v.maxage)) {
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
						c[s] = v.props;
					}
					(o.state.nodes[s] = d), (o.state.contexts[s] = l);
				} else (o.state.nodes[s] = h), (o.state.contexts[s] = l = u);
			}
			return (
				(await Promise.all(c)).forEach((t, e) => {
					t && (o.props[`props_${e}`] = t);
				}),
				(this.current.page && r.path === this.current.page.path && !i.query) || (o.props.page = r),
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
async function Dt({ paths: t, target: e, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new Nt({ base: t.base, routes: St }),
		i = new Bt({ Root: ct, layout: Rt, target: e, session: s, host: r });
	n && (await i.start(n)), a && o.init(i), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Dt as start };
