import {
	S as s,
	i as e,
	s as a,
	M as t,
	e as l,
	c,
	a as i,
	d as n,
	o as r,
	f as o,
	O as h,
	w as u,
	x as d,
	k as p,
	C as v,
	D as _,
	t as g,
	j as f,
	b as H,
	l as m,
	g as E,
	h as $,
	n as S,
	I as b
} from './index-d91e1ed8.js';
function x(s) {
	let e, a, p;
	const v = s[5].default,
		_ = t(v, s, s[4], null);
	return {
		c() {
			(e = l('section')), _ && _.c(), this.h();
		},
		l(s) {
			e = c(s, 'SECTION', { id: !0, class: !0 });
			var a = i(e);
			_ && _.l(a), a.forEach(n), this.h();
		},
		h() {
			r(e, 'id', s[1]), r(e, 'class', (a = s[3][s[0]] + ' ' + s[2] + ' svelte-p826gx'));
		},
		m(s, a) {
			o(s, e, a), _ && _.m(e, null), (p = !0);
		},
		p(s, [t]) {
			_ && _.p && 16 & t && h(_, v, s, s[4], t, null, null),
				(!p || 2 & t) && r(e, 'id', s[1]),
				(!p || (5 & t && a !== (a = s[3][s[0]] + ' ' + s[2] + ' svelte-p826gx'))) &&
					r(e, 'class', a);
		},
		i(s) {
			p || (u(_, s), (p = !0));
		},
		o(s) {
			d(_, s), (p = !1);
		},
		d(s) {
			s && n(e), _ && _.d(s);
		}
	};
}
function M(s, e, a) {
	let { $$slots: t = {}, $$scope: l } = e,
		{ variante: c = 0 } = e,
		{ id: i = '' } = e,
		{ bg_color: n = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && a(0, (c = s.variante)),
				'id' in s && a(1, (i = s.id)),
				'bg_color' in s && a(2, (n = s.bg_color)),
				'$$scope' in s && a(4, (l = s.$$scope));
		}),
		[
			c,
			i,
			n,
			[
				'Section_0',
				'Section_1',
				'Section_2',
				'Section_3',
				'Section_4',
				'Section_5',
				'Section_6',
				'Section_7',
				'Section_8'
			],
			l,
			t
		]
	);
}
class T extends s {
	constructor(s) {
		super(), e(this, s, M, x, a, { variante: 0, id: 1, bg_color: 2 });
	}
}
function A(s) {
	let e, a, p;
	const v = s[10].default,
		_ = t(v, s, s[9], null);
	return {
		c() {
			(e = l('header')), _ && _.c(), this.h();
		},
		l(s) {
			e = c(s, 'HEADER', { class: !0 });
			var a = i(e);
			_ && _.l(a), a.forEach(n), this.h();
		},
		h() {
			r(e, 'class', (a = s[4][s[3]] + '  svelte-a3506g'));
		},
		m(s, a) {
			o(s, e, a), _ && _.m(e, null), (p = !0);
		},
		p(s, t) {
			_ && _.p && 512 & t && h(_, v, s, s[9], t, null, null),
				(!p || (8 & t && a !== (a = s[4][s[3]] + '  svelte-a3506g'))) && r(e, 'class', a);
		},
		i(s) {
			p || (u(_, s), (p = !0));
		},
		o(s) {
			d(_, s), (p = !1);
		},
		d(s) {
			s && n(e), _ && _.d(s);
		}
	};
}
function L(s) {
	let e, a, t, h, u, d;
	return {
		c() {
			(e = l('header')), (a = l('h2')), (t = g(s[0])), (h = f()), (u = l('h3')), this.h();
		},
		l(l) {
			e = c(l, 'HEADER', { class: !0 });
			var r = i(e);
			a = c(r, 'H2', { class: !0 });
			var o = i(a);
			(t = H(o, s[0])),
				o.forEach(n),
				(h = m(r)),
				(u = c(r, 'H3', { class: !0 })),
				i(u).forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(a, 'class', 'svelte-a3506g'),
				r(u, 'class', 'svelte-a3506g'),
				r(e, 'class', (d = s[4][s[3]] + '  svelte-a3506g'));
		},
		m(l, c) {
			o(l, e, c), E(e, a), E(a, t), E(e, h), E(e, u), (u.innerHTML = s[1]);
		},
		p(s, a) {
			1 & a && $(t, s[0]),
				2 & a && (u.innerHTML = s[1]),
				8 & a && d !== (d = s[4][s[3]] + '  svelte-a3506g') && r(e, 'class', d);
		},
		i: S,
		o: S,
		d(s) {
			s && n(e);
		}
	};
}
function R(s) {
	let e, a, p, v, _, S, x, M, T, A, L;
	const R = s[10].default,
		D = t(R, s, s[9], null);
	return {
		c() {
			(e = l('header')),
				(a = l('h1')),
				(p = g(s[0])),
				(v = f()),
				(_ = l('br')),
				(S = f()),
				(x = l('span')),
				(M = l('h2')),
				(T = f()),
				D && D.c(),
				this.h();
		},
		l(t) {
			e = c(t, 'HEADER', { class: !0 });
			var l = i(e);
			a = c(l, 'H1', { class: !0 });
			var r = i(a);
			(p = H(r, s[0])),
				(v = m(r)),
				(_ = c(r, 'BR', { class: !0 })),
				(S = m(r)),
				(x = c(r, 'SPAN', { class: !0 }));
			var o = i(x);
			(M = c(o, 'H2', { class: !0 })),
				i(M).forEach(n),
				o.forEach(n),
				r.forEach(n),
				(T = m(l)),
				D && D.l(l),
				l.forEach(n),
				this.h();
		},
		h() {
			r(_, 'class', 'svelte-a3506g'),
				r(M, 'class', 'svelte-a3506g'),
				r(x, 'class', 'svelte-a3506g'),
				r(a, 'class', 'svelte-a3506g'),
				r(e, 'class', (A = b(s[4][s[3]]) + ' svelte-a3506g'));
		},
		m(t, l) {
			o(t, e, l),
				E(e, a),
				E(a, p),
				E(a, v),
				E(a, _),
				E(a, S),
				E(a, x),
				E(x, M),
				(M.innerHTML = s[1]),
				E(e, T),
				D && D.m(e, null),
				(L = !0);
		},
		p(s, a) {
			(!L || 1 & a) && $(p, s[0]),
				(!L || 2 & a) && (M.innerHTML = s[1]),
				D && D.p && 512 & a && h(D, R, s, s[9], a, null, null),
				(!L || (8 & a && A !== (A = b(s[4][s[3]]) + ' svelte-a3506g'))) && r(e, 'class', A);
		},
		i(s) {
			L || (u(D, s), (L = !0));
		},
		o(s) {
			d(D, s), (L = !1);
		},
		d(s) {
			s && n(e), D && D.d(s);
		}
	};
}
function D(s) {
	let e, a, t, h, u, d, p, v;
	return {
		c() {
			(e = l('header')),
				(a = l('h1')),
				(t = g(s[0])),
				(h = f()),
				(u = l('br')),
				(d = f()),
				(p = l('span')),
				this.h();
		},
		l(l) {
			e = c(l, 'HEADER', { class: !0 });
			var r = i(e);
			a = c(r, 'H1', { class: !0 });
			var o = i(a);
			(t = H(o, s[0])),
				(h = m(o)),
				(u = c(o, 'BR', { class: !0 })),
				(d = m(o)),
				(p = c(o, 'SPAN', { class: !0 })),
				i(p).forEach(n),
				o.forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(u, 'class', 'svelte-a3506g'),
				r(p, 'class', 'svelte-a3506g'),
				r(a, 'class', 'svelte-a3506g'),
				r(e, 'class', (v = s[4][s[3]] + '  svelte-a3506g'));
		},
		m(l, c) {
			o(l, e, c), E(e, a), E(a, t), E(a, h), E(a, u), E(a, d), E(a, p), (p.innerHTML = s[1]);
		},
		p(s, a) {
			1 & a && $(t, s[0]),
				2 & a && (p.innerHTML = s[1]),
				8 & a && v !== (v = s[4][s[3]] + '  svelte-a3506g') && r(e, 'class', v);
		},
		i: S,
		o: S,
		d(s) {
			s && n(e);
		}
	};
}
function N(s) {
	let e, a, t, l;
	const c = [D, R, L, A],
		i = [];
	function r(s, e) {
		return 1 === s[2] ? 0 : 2 === s[2] ? 1 : 3 === s[2] ? 2 : 3;
	}
	return (
		(e = r(s)),
		(a = i[e] = c[e](s)),
		{
			c() {
				a.c(), (t = p());
			},
			l(s) {
				a.l(s), (t = p());
			},
			m(s, a) {
				i[e].m(s, a), o(s, t, a), (l = !0);
			},
			p(s, [l]) {
				let n = e;
				(e = r(s)),
					e === n
						? i[e].p(s, l)
						: (v(),
						  d(i[n], 1, 1, () => {
								i[n] = null;
						  }),
						  _(),
						  (a = i[e]),
						  a ? a.p(s, l) : ((a = i[e] = c[e](s)), a.c()),
						  u(a, 1),
						  a.m(t.parentNode, t));
			},
			i(s) {
				l || (u(a), (l = !0));
			},
			o(s) {
				d(a), (l = !1);
			},
			d(s) {
				i[e].d(s), s && n(t);
			}
		}
	);
}
function j(s, e, a) {
	let { $$slots: t = {}, $$scope: l } = e,
		{ title: c = '' } = e,
		{ subtitle: i = '' } = e,
		{ text: n = '' } = e,
		{ img: r = '' } = e,
		{ is_home: o = !1 } = e,
		{ is_products_page: h = !1 } = e,
		{ tipo: u = 0 } = e,
		{ variante: d = 0 } = e;
	return (
		(s.$$set = (s) => {
			'title' in s && a(0, (c = s.title)),
				'subtitle' in s && a(1, (i = s.subtitle)),
				'text' in s && a(5, (n = s.text)),
				'img' in s && a(6, (r = s.img)),
				'is_home' in s && a(7, (o = s.is_home)),
				'is_products_page' in s && a(8, (h = s.is_products_page)),
				'tipo' in s && a(2, (u = s.tipo)),
				'variante' in s && a(3, (d = s.variante)),
				'$$scope' in s && a(9, (l = s.$$scope));
		}),
		[
			c,
			i,
			u,
			d,
			[
				'Header_0',
				'Header_1',
				'Header_2',
				'Header_3',
				'Header_4',
				'Header_5',
				'Header_6',
				'Header_7'
			],
			n,
			r,
			o,
			h,
			l,
			t
		]
	);
}
class B extends s {
	constructor(s) {
		super(),
			e(this, s, j, N, a, {
				title: 0,
				subtitle: 1,
				text: 5,
				img: 6,
				is_home: 7,
				is_products_page: 8,
				tipo: 2,
				variante: 3
			});
	}
}
export { B as H, T as S };
