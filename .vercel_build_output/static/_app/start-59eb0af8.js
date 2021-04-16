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
	a as f,
	b as p,
	d,
	f as g,
	g as m,
	h as v,
	j as y,
	k as w,
	l as $,
	n as E,
	m as b,
	o as x,
	p as _,
	q,
	r as k,
	u as L,
	v as V,
	w as C,
	x as A,
	y as S,
	z as M,
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
			var a = f(t);
			(s = p(a, r)), a.forEach(d);
		},
		m(e, r) {
			g(e, t, r), m(t, s);
		},
		p(e, t) {
			2 & t && r !== (r = e[1].stack + '') && v(s, r);
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
		b = e[1].stack && Y(e);
	return {
		c() {
			(t = i('h1')),
				(s = h(e[0])),
				(r = y()),
				(a = i('p')),
				(n = h(l)),
				(o = y()),
				b && b.c(),
				(c = w());
		},
		l(i) {
			t = u(i, 'H1', {});
			var h = f(t);
			(s = p(h, e[0])), h.forEach(d), (r = $(i)), (a = u(i, 'P', {}));
			var g = f(a);
			(n = p(g, l)), g.forEach(d), (o = $(i)), b && b.l(i), (c = w());
		},
		m(e, l) {
			g(e, t, l), m(t, s), g(e, r, l), g(e, a, l), m(a, n), g(e, o, l), b && b.m(e, l), g(e, c, l);
		},
		p(e, [t]) {
			1 & t && v(s, e[0]),
				2 & t && l !== (l = e[1].message + '') && v(n, l),
				e[1].stack
					? b
						? b.p(e, t)
						: ((b = Y(e)), b.c(), b.m(c.parentNode, c))
					: b && (b.d(1), (b = null));
		},
		i: E,
		o: E,
		d(e) {
			e && d(t), e && d(r), e && d(a), e && d(o), b && b.d(e), e && d(c);
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
		for (let s = 0; s < a.length; s += 1) t = b(t, a[s]);
		return { props: t };
	}
	return (
		n && (t = new n(o())),
		{
			c() {
				t && _(t.$$.fragment), (s = w());
			},
			l(e) {
				t && q(t.$$.fragment, e), (s = w());
			},
			m(e, a) {
				t && k(t, e, a), g(e, s, a), (r = !0);
			},
			p(e, r) {
				const c = 16 & r ? L(a, [V(e[4] || {})]) : {};
				if (n !== (n = e[2][1])) {
					if (t) {
						N();
						const e = t;
						A(e.$$.fragment, 1, 0, () => {
							S(e, 1);
						}),
							O();
					}
					n
						? ((t = new n(o())), _(t.$$.fragment), C(t.$$.fragment, 1), k(t, s.parentNode, s))
						: (t = null);
				} else n && t.$set(c);
			},
			i(e) {
				r || (t && C(t.$$.fragment, e), (r = !0));
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
				q(t.$$.fragment, e);
			},
			m(e, r) {
				k(t, e, r), (s = !0);
			},
			p(e, s) {
				const r = {};
				1 & s && (r.status = e[0]), 2 & s && (r.error = e[1]), t.$set(r);
			},
			i(e) {
				s || (C(t.$$.fragment, e), (s = !0));
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
	function c(e, t) {
		return e[1] ? 0 : 1;
	}
	return (
		(t = c(e)),
		(s = o[t] = n[t](e)),
		{
			c() {
				s.c(), (r = w());
			},
			l(e) {
				s.l(e), (r = w());
			},
			m(e, s) {
				o[t].m(e, s), g(e, r, s), (a = !0);
			},
			p(e, a) {
				let l = t;
				(t = c(e)),
					t === l
						? o[t].p(e, a)
						: (N(),
						  A(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  O(),
						  (s = o[t]),
						  s ? s.p(e, a) : ((s = o[t] = n[t](e)), s.c()),
						  C(s, 1),
						  s.m(r.parentNode, r));
			},
			i(e) {
				a || (C(s), (a = !0));
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
			var r = f(t);
			s && s.l(r), r.forEach(d), this.h();
		},
		h() {
			x(t, 'id', 'svelte-announcer'),
				x(t, 'aria-live', 'assertive'),
				x(t, 'aria-atomic', 'true'),
				x(t, 'class', 'svelte-1j55zn5');
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
			(t = p(r, 'Navigated to ')), (s = p(r, e[7]));
		},
		m(e, r) {
			g(e, t, r), g(e, s, r);
		},
		p(e, t) {
			128 & t && v(s, e[7]);
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
	for (let l = 0; l < n.length; l += 1) o = b(o, n[l]);
	t = new e[8]({ props: o });
	let c = e[5] && re(e);
	return {
		c() {
			_(t.$$.fragment), (s = y()), c && c.c(), (r = w());
		},
		l(e) {
			q(t.$$.fragment, e), (s = $(e)), c && c.l(e), (r = w());
		},
		m(e, n) {
			k(t, e, n), g(e, s, n), c && c.m(e, n), g(e, r, n), (a = !0);
		},
		p(e, [s]) {
			const a = 8 & s ? L(n, [V(e[3] || {})]) : {};
			2071 & s && (a.$$scope = { dirty: s, ctx: e }),
				t.$set(a),
				e[5]
					? c
						? c.p(e, s)
						: ((c = re(e)), c.c(), c.m(r.parentNode, r))
					: c && (c.d(1), (c = null));
		},
		i(e) {
			a || (C(t.$$.fragment, e), (a = !0));
		},
		o(e) {
			A(t.$$.fragment, e), (a = !1);
		},
		d(e) {
			S(t, e), e && d(s), c && c.d(e), e && d(r);
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
	M('__svelte__', n), R(n.page.notify);
	let u = !1,
		f = !1,
		p = null;
	return (
		j(() => {
			const e = n.page.subscribe(() => {
				u && (s(6, (f = !0)), s(7, (p = document.title)));
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
		[r, a, c, l, i, u, f, p, h, n, o]
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
function fe(e) {
	let t, s, r, a, n, o, c, l, i, h, p;
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
				(p = I('circle')),
				this.h();
		},
		l(e) {
			t = u(e, 'svg', { class: !0, width: !0, height: !0 }, 1);
			var g = f(t);
			s = u(g, 'g', { class: !0 }, 1);
			var m = f(s);
			(r = u(m, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(r).forEach(d),
				(a = u(m, 'g', { class: !0 }, 1));
			var v = f(a);
			(n = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(n).forEach(d),
				(o = u(v, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(o).forEach(d),
				v.forEach(d),
				(c = u(m, 'g', { class: !0 }, 1));
			var y = f(c);
			(l = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(l).forEach(d),
				(i = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(i).forEach(d),
				(h = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(h).forEach(d),
				(p = u(y, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(p).forEach(d),
				y.forEach(d),
				m.forEach(d),
				g.forEach(d),
				this.h();
		},
		h() {
			x(r, 'cx', '25'),
				x(r, 'cy', '25'),
				x(r, 'r', '25'),
				x(r, 'class', 'svelte-q2itqu'),
				x(n, 'cx', '12.5'),
				x(n, 'cy', '25'),
				x(n, 'r', '12.5'),
				x(n, 'class', 'svelte-q2itqu'),
				x(o, 'cx', '38'),
				x(o, 'cy', '25'),
				x(o, 'r', '12.5'),
				x(o, 'class', 'svelte-q2itqu'),
				x(a, 'class', 'svelte-q2itqu'),
				x(l, 'cx', '6.5'),
				x(l, 'cy', '25'),
				x(l, 'r', '6.25'),
				x(l, 'class', 'svelte-q2itqu'),
				x(i, 'cx', '19'),
				x(i, 'cy', '25'),
				x(i, 'r', '6.25'),
				x(i, 'class', 'svelte-q2itqu'),
				x(h, 'cx', '31.5'),
				x(h, 'cy', '25'),
				x(h, 'r', '6.25'),
				x(h, 'class', 'svelte-q2itqu'),
				x(p, 'cx', '44'),
				x(p, 'cy', '25'),
				x(p, 'r', '6.25'),
				x(p, 'class', 'svelte-q2itqu'),
				x(c, 'class', 'svelte-q2itqu'),
				x(s, 'class', 'svelte-q2itqu'),
				x(t, 'class', 'logo svelte-q2itqu'),
				x(t, 'width', '51'),
				x(t, 'height', '51');
		},
		m(e, u) {
			g(e, t, u),
				m(t, s),
				m(s, r),
				m(s, a),
				m(a, n),
				m(a, o),
				m(s, c),
				m(c, l),
				m(c, i),
				m(c, h),
				m(c, p);
		},
		p: E,
		i: E,
		o: E,
		d(e) {
			e && d(t);
		}
	};
}
class pe extends o {
	constructor(e) {
		super(), c(this, e, null, fe, l, {});
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
function me(e) {
	let t,
		s,
		r = J,
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = ye(de(e, r, n));
	return {
		c() {
			t = i('nav');
			for (let e = 0; e < a.length; e += 1) a[e].c();
			this.h();
		},
		l(e) {
			t = u(e, 'NAV', { class: !0 });
			var s = f(t);
			for (let t = 0; t < a.length; t += 1) a[t].l(s);
			s.forEach(d), this.h();
		},
		h() {
			x(t, 'class', (s = H(e[4][e[1]]) + ' svelte-145c9kj'));
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
					a[s] ? a[s].p(o, n) : ((a[s] = ye(o)), a[s].c(), a[s].m(t, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = r.length;
			}
			2 & n && s !== (s = H(e[4][e[1]]) + ' svelte-145c9kj') && x(t, 'class', s);
		},
		i: E,
		o: E,
		d(e) {
			e && d(t), z(a, e);
		}
	};
}
function ve(e) {
	let t, s, r, a, n, o, c, l, h;
	r = new pe({});
	let p = J,
		v = [];
	for (let i = 0; i < p.length; i += 1) v[i] = we(ge(e, p, i));
	return {
		c() {
			(t = i('div')), (s = i('div')), _(r.$$.fragment), (a = y()), (n = i('nav'));
			for (let e = 0; e < v.length; e += 1) v[e].c();
			this.h();
		},
		l(e) {
			t = u(e, 'DIV', { class: !0 });
			var o = f(t);
			s = u(o, 'DIV', { class: !0 });
			var c = f(s);
			q(r.$$.fragment, c), c.forEach(d), (a = $(o)), (n = u(o, 'NAV', { class: !0 }));
			var l = f(n);
			for (let t = 0; t < v.length; t += 1) v[t].l(l);
			l.forEach(d), o.forEach(d), this.h();
		},
		h() {
			x(s, 'class', 'ButtonNav svelte-145c9kj'),
				x(n, 'class', (o = H(e[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-145c9kj')),
				x(t, 'class', 'Variante_1 svelte-145c9kj');
		},
		m(o, i) {
			g(o, t, i), m(t, s), k(r, s, null), m(t, a), m(t, n);
			for (let e = 0; e < v.length; e += 1) v[e].m(n, null);
			(c = !0),
				l ||
					((h = [B(s, 'click', e[7]), D(ue.call(null, t)), B(t, 'click_outside', e[3])]), (l = !0));
		},
		p(e, t) {
			if (9 & t) {
				let s;
				for (p = J, s = 0; s < p.length; s += 1) {
					const r = ge(e, p, s);
					v[s] ? v[s].p(r, t) : ((v[s] = we(r)), v[s].c(), v[s].m(n, null));
				}
				for (; s < v.length; s += 1) v[s].d(1);
				v.length = p.length;
			}
			(!c ||
				(4 & t &&
					o !== (o = H(e[2] ? 'MainNav MainNavVisible' : 'MainNav') + ' svelte-145c9kj'))) &&
				x(n, 'class', o);
		},
		i(e) {
			c || (C(r.$$.fragment, e), (c = !0));
		},
		o(e) {
			A(r.$$.fragment, e), (c = !1);
		},
		d(e) {
			e && d(t), S(r), z(v, e), (l = !1), U(h);
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
			(t = i('a')), (s = h(o)), (r = y()), this.h();
		},
		l(e) {
			t = u(e, 'A', { href: !0, class: !0 });
			var a = f(t);
			(s = p(a, o)), (r = $(a)), a.forEach(d), this.h();
		},
		h() {
			x(t, 'href', e[9]), x(t, 'class', 'svelte-145c9kj'), P(t, 'active', e[10] === e[0]);
		},
		m(o, c) {
			g(o, t, c), m(t, s), m(t, r), a || ((n = B(t, 'click', e[6])), (a = !0));
		},
		p(e, s) {
			1 & s && P(t, 'active', e[10] === e[0]);
		},
		d(e) {
			e && d(t), (a = !1), n();
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
			(t = i('a')), (s = h(o)), (r = y()), this.h();
		},
		l(e) {
			t = u(e, 'A', { href: !0, class: !0, role: !0 });
			var a = f(t);
			(s = p(a, o)), (r = $(a)), a.forEach(d), this.h();
		},
		h() {
			x(t, 'href', e[9]),
				x(t, 'class', 'NavItem svelte-145c9kj'),
				x(t, 'role', 'navigation'),
				P(t, 'active', e[10] === e[0]);
		},
		m(o, c) {
			g(o, t, c),
				m(t, s),
				m(t, r),
				a || ((n = [B(t, 'click', e[5]), B(t, 'click', e[3])]), (a = !0));
		},
		p(e, s) {
			1 & s && P(t, 'active', e[10] === e[0]);
		},
		d(e) {
			e && d(t), (a = !1), U(n);
		}
	};
}
function $e(e) {
	let t, s, r, a;
	const n = [ve, me],
		o = [];
	function c(e, t) {
		return 1 === e[1] ? 0 : 1;
	}
	return (
		(t = c(e)),
		(s = o[t] = n[t](e)),
		{
			c() {
				s.c(), (r = w());
			},
			l(e) {
				s.l(e), (r = w());
			},
			m(e, s) {
				o[t].m(e, s), g(e, r, s), (a = !0);
			},
			p(e, [a]) {
				let l = t;
				(t = c(e)),
					t === l
						? o[t].p(e, a)
						: (N(),
						  A(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  O(),
						  (s = o[t]),
						  s ? s.p(e, a) : ((s = o[t] = n[t](e)), s.c()),
						  C(s, 1),
						  s.m(r.parentNode, r));
			},
			i(e) {
				a || (C(s), (a = !0));
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
				T(e, t);
			},
			function (t) {
				T(e, t);
			},
			() => {
				s(2, (a = !a));
			}
		]
	);
}
class be extends o {
	constructor(e) {
		super(), c(this, e, Ee, $e, l, { current_page: 0, variante: 1 });
	}
}
function xe(e) {
	let t,
		s,
		r,
		a,
		n,
		o,
		c,
		l,
		v,
		w,
		b,
		_,
		q,
		k,
		L,
		V,
		C,
		A,
		S,
		M,
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
		ee,
		te,
		se;
	return {
		c() {
			(t = i('aside')),
				(s = i('small')),
				(r = h('Follow me at:')),
				(a = y()),
				(n = i('ul')),
				(o = i('li')),
				(c = i('a')),
				(l = I('svg')),
				(v = I('title')),
				(w = h('Instagram')),
				(b = I('circle')),
				(_ = I('path')),
				(q = I('path')),
				(k = y()),
				(L = i('a')),
				(V = I('svg')),
				(C = I('title')),
				(A = h('Linkedin')),
				(S = I('path')),
				(M = y()),
				(R = i('a')),
				(j = I('svg')),
				(N = I('title')),
				(O = h('Algunos artículos en Medium')),
				(T = I('path')),
				(P = y()),
				(B = i('a')),
				(H = I('svg')),
				(z = I('title')),
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
				(ee = I('title')),
				(te = h('Facebook')),
				(se = I('path')),
				this.h();
		},
		l(e) {
			t = u(e, 'ASIDE', { class: !0 });
			var i = f(t);
			s = u(i, 'SMALL', { class: !0 });
			var h = f(s);
			(r = p(h, 'Follow me at:')), h.forEach(d), (a = $(i)), (n = u(i, 'UL', { class: !0 }));
			var g = f(n);
			o = u(g, 'LI', { class: !0 });
			var m = f(o);
			c = u(m, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var y = f(c);
			l = u(y, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var E = f(l);
			v = u(E, 'title', { class: !0 }, 1);
			var x = f(v);
			(w = p(x, 'Instagram')),
				x.forEach(d),
				(b = u(E, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				f(b).forEach(d),
				(_ = u(E, 'path', { d: !0, class: !0 }, 1)),
				f(_).forEach(d),
				(q = u(E, 'path', { d: !0, class: !0 }, 1)),
				f(q).forEach(d),
				E.forEach(d),
				y.forEach(d),
				(k = $(m)),
				(L = u(m, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var I = f(L);
			V = u(I, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var re = f(V);
			C = u(re, 'title', { class: !0 }, 1);
			var ae = f(C);
			(A = p(ae, 'Linkedin')),
				ae.forEach(d),
				(S = u(re, 'path', { d: !0, class: !0 }, 1)),
				f(S).forEach(d),
				re.forEach(d),
				I.forEach(d),
				(M = $(m)),
				(R = u(m, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ne = f(R);
			j = u(ne, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var oe = f(j);
			N = u(oe, 'title', { class: !0 }, 1);
			var ce = f(N);
			(O = p(ce, 'Algunos artículos en Medium')),
				ce.forEach(d),
				(T = u(oe, 'path', { d: !0, class: !0 }, 1)),
				f(T).forEach(d),
				oe.forEach(d),
				ne.forEach(d),
				(P = $(m)),
				(B = u(m, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var le = f(B);
			H = u(le, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ie = f(H);
			z = u(ie, 'title', { class: !0 }, 1);
			var he = f(z);
			(U = p(he, 'Twitter')),
				he.forEach(d),
				(D = u(ie, 'path', { d: !0, class: !0 }, 1)),
				f(D).forEach(d),
				ie.forEach(d),
				le.forEach(d),
				(K = $(m)),
				(F = u(m, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var ue = f(F);
			G = u(ue, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var fe = f(G);
			W = u(fe, 'title', { class: !0 }, 1);
			var pe = f(W);
			(J = p(pe, 'Mi repositorio en Github')),
				pe.forEach(d),
				(Y = u(fe, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, class: !0 }, 1)),
				f(Y).forEach(d),
				fe.forEach(d),
				ue.forEach(d),
				(Z = $(m)),
				(X = u(m, 'A', { href: !0, target: !0, rel: !0, class: !0 }));
			var de = f(X);
			Q = u(de, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var ge = f(Q);
			ee = u(ge, 'title', { class: !0 }, 1);
			var me = f(ee);
			(te = p(me, 'Facebook')),
				me.forEach(d),
				(se = u(ge, 'path', { d: !0, class: !0 }, 1)),
				f(se).forEach(d),
				ge.forEach(d),
				de.forEach(d),
				m.forEach(d),
				g.forEach(d),
				i.forEach(d),
				this.h();
		},
		h() {
			x(s, 'class', 'svelte-7mefqg'),
				x(v, 'class', 'svelte-7mefqg'),
				x(b, 'cx', '12.145'),
				x(b, 'cy', '3.892'),
				x(b, 'r', '0.96'),
				x(b, 'class', 'svelte-7mefqg'),
				x(
					_,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				x(_, 'class', 'svelte-7mefqg'),
				x(
					q,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				x(q, 'class', 'svelte-7mefqg'),
				x(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(l, 'viewBox', '0 0 16 16'),
				x(l, 'class', 'svelte-7mefqg'),
				x(c, 'href', 'https://www.instagram.com/t.o.d.h/'),
				x(c, 'target', '_blank'),
				x(c, 'rel', 'noopener'),
				x(c, 'class', 'svelte-7mefqg'),
				x(C, 'class', 'svelte-7mefqg'),
				x(
					S,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z'
				),
				x(S, 'class', 'svelte-7mefqg'),
				x(V, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(V, 'viewBox', '0 0 16 16'),
				x(V, 'class', 'svelte-7mefqg'),
				x(L, 'href', 'https://www.linkedin.com/in/sergiofores/'),
				x(L, 'target', '_blank'),
				x(L, 'rel', 'noopener'),
				x(L, 'class', 'svelte-7mefqg'),
				x(N, 'class', 'svelte-7mefqg'),
				x(
					T,
					'd',
					'M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z'
				),
				x(T, 'class', 'svelte-7mefqg'),
				x(j, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(j, 'viewBox', '0 0 16 16'),
				x(j, 'class', 'svelte-7mefqg'),
				x(R, 'href', 'https://medium.com/@todh'),
				x(R, 'target', '_blank'),
				x(R, 'rel', 'noopener'),
				x(R, 'class', 'svelte-7mefqg'),
				x(z, 'class', 'svelte-7mefqg'),
				x(
					D,
					'd',
					'M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z'
				),
				x(D, 'class', 'svelte-7mefqg'),
				x(H, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(H, 'viewBox', '0 0 16 16'),
				x(H, 'class', 'svelte-7mefqg'),
				x(B, 'href', 'https://twitter.com/t0tinspire'),
				x(B, 'target', '_blank'),
				x(B, 'rel', 'noopener'),
				x(B, 'class', 'svelte-7mefqg'),
				x(W, 'class', 'svelte-7mefqg'),
				x(Y, 'fill-rule', 'evenodd'),
				x(Y, 'clip-rule', 'evenodd'),
				x(
					Y,
					'd',
					'M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z'
				),
				x(Y, 'class', 'svelte-7mefqg'),
				x(G, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(G, 'viewBox', '0 0 16 16'),
				x(G, 'class', 'svelte-7mefqg'),
				x(F, 'href', 'https://github.com/t0t'),
				x(F, 'target', '_blank'),
				x(F, 'rel', 'noopener'),
				x(F, 'class', 'svelte-7mefqg'),
				x(ee, 'class', 'svelte-7mefqg'),
				x(
					se,
					'd',
					'M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z'
				),
				x(se, 'class', 'svelte-7mefqg'),
				x(Q, 'xmlns', 'http://www.w3.org/2000/svg'),
				x(Q, 'viewBox', '0 0 16 16'),
				x(Q, 'class', 'svelte-7mefqg'),
				x(X, 'href', 'https://www.facebook.com/TODH-2139705836275088'),
				x(X, 'target', '_blank'),
				x(X, 'rel', 'noopener'),
				x(X, 'class', 'svelte-7mefqg'),
				x(o, 'class', 'svelte-7mefqg'),
				x(n, 'class', 'svelte-7mefqg'),
				x(t, 'class', 'Links svelte-7mefqg');
		},
		m(e, i) {
			g(e, t, i),
				m(t, s),
				m(s, r),
				m(t, a),
				m(t, n),
				m(n, o),
				m(o, c),
				m(c, l),
				m(l, v),
				m(v, w),
				m(l, b),
				m(l, _),
				m(l, q),
				m(o, k),
				m(o, L),
				m(L, V),
				m(V, C),
				m(C, A),
				m(V, S),
				m(o, M),
				m(o, R),
				m(R, j),
				m(j, N),
				m(N, O),
				m(j, T),
				m(o, P),
				m(o, B),
				m(B, H),
				m(H, z),
				m(z, U),
				m(H, D),
				m(o, K),
				m(o, F),
				m(F, G),
				m(G, W),
				m(W, J),
				m(G, Y),
				m(o, Z),
				m(o, X),
				m(X, Q),
				m(Q, ee),
				m(ee, te),
				m(Q, se);
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
		super(), c(this, e, null, xe, l, {});
	}
}
function qe(e) {
	let t, s, r;
	return (
		(s = new _e({})),
		{
			c() {
				(t = i('footer')), _(s.$$.fragment), this.h();
			},
			l(e) {
				t = u(e, 'FOOTER', { class: !0 });
				var r = f(t);
				q(s.$$.fragment, r), r.forEach(d), this.h();
			},
			h() {
				x(t, 'class', 'svelte-lti6kl');
			},
			m(e, a) {
				g(e, t, a), k(s, t, null), (r = !0);
			},
			p: E,
			i(e) {
				r || (C(s.$$.fragment, e), (r = !0));
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
class ke extends o {
	constructor(e) {
		super(), c(this, e, null, qe, l, {});
	}
}
function Le(e) {
	let t, s, r, a, n, o, c, l, h;
	(document.title = t = 'SvelteKit UI - ' + e[0]),
		(a = new be({ props: { current_page: e[0], variante: 1 } })),
		a.$on('click', e[1]);
	const p = e[3].default,
		v = K(p, e, e[2], null);
	return (
		(l = new ke({})),
		{
			c() {
				(s = y()),
					(r = i('main')),
					_(a.$$.fragment),
					(n = y()),
					(o = i('section')),
					v && v.c(),
					(c = y()),
					_(l.$$.fragment);
			},
			l(e) {
				F('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(d),
					(s = $(e)),
					(r = u(e, 'MAIN', {}));
				var t = f(r);
				q(a.$$.fragment, t), (n = $(t)), (o = u(t, 'SECTION', {}));
				var i = f(o);
				v && v.l(i), i.forEach(d), (c = $(t)), q(l.$$.fragment, t), t.forEach(d);
			},
			m(e, t) {
				g(e, s, t),
					g(e, r, t),
					k(a, r, null),
					m(r, n),
					m(r, o),
					v && v.m(o, null),
					m(r, c),
					k(l, r, null),
					(h = !0);
			},
			p(e, [s]) {
				(!h || 1 & s) && t !== (t = 'SvelteKit UI - ' + e[0]) && (document.title = t);
				const r = {};
				1 & s && (r.current_page = e[0]),
					a.$set(r),
					v && v.p && 4 & s && G(v, p, e, e[2], s, null, null);
			},
			i(e) {
				h || (C(a.$$.fragment, e), C(v, e), C(l.$$.fragment, e), (h = !0));
			},
			o(e) {
				A(a.$$.fragment, e), A(v, e), A(l.$$.fragment, e), (h = !1);
			},
			d(e) {
				e && d(s), e && d(r), S(a), v && v.d(e), S(l);
			}
		}
	);
}
function Ve(e, t, s) {
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
var Ce = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(e) {
			super(), c(this, e, Ve, Le, l, {});
		}
	}
});
const Ae = [
		() =>
			he(() => import('./pages/index.svelte-87b1244b.js'), [
				'/_app/pages/index.svelte-87b1244b.js',
				'/_app/assets/pages/index.svelte-6f410189.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-1da3f25f.js',
				'/_app/assets/Cover-0803ba31.css',
				'/_app/chunks/Section-554b0cec.js',
				'/_app/assets/Section-a4f1452c.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/pages-26a130a6.js'
			]),
		() =>
			he(() => import('./pages/philosophy/index.svelte-68db6323.js'), [
				'/_app/pages/philosophy/index.svelte-68db6323.js',
				'/_app/assets/pages/philosophy/index.svelte-58876415.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-1da3f25f.js',
				'/_app/assets/Cover-0803ba31.css',
				'/_app/chunks/GridBase-6deb16d5.js',
				'/_app/assets/GridBase-4822ae5e.css',
				'/_app/chunks/Section-554b0cec.js',
				'/_app/assets/Section-a4f1452c.css'
			]),
		() =>
			he(() => import('./pages/artworks/index.svelte-3f21ef8b.js'), [
				'/_app/pages/artworks/index.svelte-3f21ef8b.js',
				'/_app/assets/pages/artworks/index.svelte-1a769b2f.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-1da3f25f.js',
				'/_app/assets/Cover-0803ba31.css',
				'/_app/chunks/index-65311448.js',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-554b0cec.js',
				'/_app/assets/Section-a4f1452c.css'
			]),
		() =>
			he(() => import('./pages/about/index.svelte-8eb48282.js'), [
				'/_app/pages/about/index.svelte-8eb48282.js',
				'/_app/assets/pages/about/index.svelte-9b2d0114.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Section-554b0cec.js',
				'/_app/assets/Section-a4f1452c.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/index-78b22dae.js'
			]),
		() =>
			he(() => import('./pages/lab/index.svelte-423e5fbd.js'), [
				'/_app/pages/lab/index.svelte-423e5fbd.js',
				'/_app/assets/pages/lab/index.svelte-43141682.css',
				'/_app/chunks/index-d91e1ed8.js',
				'/_app/chunks/Cover-1da3f25f.js',
				'/_app/assets/Cover-0803ba31.css',
				'/_app/chunks/Section-554b0cec.js',
				'/_app/assets/Section-a4f1452c.css',
				'/_app/chunks/index-c4bdeab8.js',
				'/_app/chunks/index-cc16b092.js',
				'/_app/chunks/GridBase-6deb16d5.js',
				'/_app/assets/GridBase-4822ae5e.css',
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
class je {
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
function Ne(e) {
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
function Oe(e) {
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
class Te {
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
			(this.stores = { page: Oe({}), navigating: W(null), session: W(r) }),
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
					f = await e[s];
				if (((o.props.components[s] = f.default), f.preload))
					throw new Error(
						'preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading'
					);
				if (
					!h ||
					f !== h.module ||
					(c.path && h.uses.path) ||
					c.params.some((e) => h.uses.params.has(e)) ||
					(c.query && h.uses.query) ||
					(c.session && h.uses.session) ||
					(c.context && h.uses.context)
				) {
					const h = r.path + a,
						u = this.caches.get(f),
						p = u && u.get(h);
					let d, g;
					if (!p || (c.context && p.node.uses.context)) {
						d = {
							module: f,
							uses: { params: new Set(), path: !1, query: !1, session: !1, context: !1 }
						};
						const a = {};
						for (const e in r.params)
							Object.defineProperty(a, e, {
								get: () => (d.uses.params.add(e), r.params[e]),
								enumerable: !0
							});
						const o = this.$session;
						if (f.load) {
							g = await f.load.call(null, {
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
					} else ({ node: d, loaded: g } = p);
					if (g) {
						if (((g = Ne(g)), g.error)) {
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
							this.caches.has(f) || this.caches.set(f, new Map());
							const e = this.caches.get(f),
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
async function Pe({ paths: e, target: t, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new je({ base: e.base, routes: Se }),
		c = new Te({ Root: ce, layout: Ce, target: t, session: s, host: r });
	n && (await c.start(n)), a && o.init(c), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Pe as start };
