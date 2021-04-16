import {
	S as s,
	i as e,
	s as a,
	M as t,
	e as c,
	c as l,
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
	t as b,
	j as f,
	b as H,
	l as m,
	g as E,
	h as $,
	n as j,
	I as g
} from './index-d91e1ed8.js';
function S(s) {
	let e, a, p;
	const v = s[5].default,
		_ = t(v, s, s[4], null);
	return {
		c() {
			(e = c('section')), _ && _.c(), this.h();
		},
		l(s) {
			e = l(s, 'SECTION', { id: !0, class: !0 });
			var a = i(e);
			_ && _.l(a), a.forEach(n), this.h();
		},
		h() {
			r(e, 'id', s[1]), r(e, 'class', (a = s[3][s[0]] + ' ' + s[2] + ' svelte-1r45r6o'));
		},
		m(s, a) {
			o(s, e, a), _ && _.m(e, null), (p = !0);
		},
		p(s, [t]) {
			_ && _.p && 16 & t && h(_, v, s, s[4], t, null, null),
				(!p || 2 & t) && r(e, 'id', s[1]),
				(!p || (5 & t && a !== (a = s[3][s[0]] + ' ' + s[2] + ' svelte-1r45r6o'))) &&
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
function x(s, e, a) {
	let { $$slots: t = {}, $$scope: c } = e,
		{ variante: l = 0 } = e,
		{ id: i = '' } = e,
		{ bg_color: n = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && a(0, (l = s.variante)),
				'id' in s && a(1, (i = s.id)),
				'bg_color' in s && a(2, (n = s.bg_color)),
				'$$scope' in s && a(4, (c = s.$$scope));
		}),
		[
			l,
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
			c,
			t
		]
	);
}
class M extends s {
	constructor(s) {
		super(), e(this, s, x, S, a, { variante: 0, id: 1, bg_color: 2 });
	}
}
function T(s) {
	let e, a, p;
	const v = s[10].default,
		_ = t(v, s, s[9], null);
	return {
		c() {
			(e = c('header')), _ && _.c(), this.h();
		},
		l(s) {
			e = l(s, 'HEADER', { class: !0 });
			var a = i(e);
			_ && _.l(a), a.forEach(n), this.h();
		},
		h() {
			r(e, 'class', (a = s[4][s[3]] + '  svelte-18b7acj'));
		},
		m(s, a) {
			o(s, e, a), _ && _.m(e, null), (p = !0);
		},
		p(s, t) {
			_ && _.p && 512 & t && h(_, v, s, s[9], t, null, null),
				(!p || (8 & t && a !== (a = s[4][s[3]] + '  svelte-18b7acj'))) && r(e, 'class', a);
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
function A(s) {
	let e, a, t, h, u, d;
	return {
		c() {
			(e = c('header')), (a = c('h2')), (t = b(s[0])), (h = f()), (u = c('h3')), this.h();
		},
		l(c) {
			e = l(c, 'HEADER', { class: !0 });
			var r = i(e);
			a = l(r, 'H2', { class: !0 });
			var o = i(a);
			(t = H(o, s[0])),
				o.forEach(n),
				(h = m(r)),
				(u = l(r, 'H3', { class: !0 })),
				i(u).forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(a, 'class', 'svelte-18b7acj'),
				r(u, 'class', 'svelte-18b7acj'),
				r(e, 'class', (d = s[4][s[3]] + '  svelte-18b7acj'));
		},
		m(c, l) {
			o(c, e, l), E(e, a), E(a, t), E(e, h), E(e, u), (u.innerHTML = s[1]);
		},
		p(s, a) {
			1 & a && $(t, s[0]),
				2 & a && (u.innerHTML = s[1]),
				8 & a && d !== (d = s[4][s[3]] + '  svelte-18b7acj') && r(e, 'class', d);
		},
		i: j,
		o: j,
		d(s) {
			s && n(e);
		}
	};
}
function L(s) {
	let e, a, p, v, _, j, S, x, M, T, A;
	const L = s[10].default,
		R = t(L, s, s[9], null);
	return {
		c() {
			(e = c('header')),
				(a = c('h1')),
				(p = b(s[0])),
				(v = f()),
				(_ = c('br')),
				(j = f()),
				(S = c('span')),
				(x = c('h2')),
				(M = f()),
				R && R.c(),
				this.h();
		},
		l(t) {
			e = l(t, 'HEADER', { class: !0 });
			var c = i(e);
			a = l(c, 'H1', { class: !0 });
			var r = i(a);
			(p = H(r, s[0])),
				(v = m(r)),
				(_ = l(r, 'BR', { class: !0 })),
				(j = m(r)),
				(S = l(r, 'SPAN', { class: !0 }));
			var o = i(S);
			(x = l(o, 'H2', { class: !0 })),
				i(x).forEach(n),
				o.forEach(n),
				r.forEach(n),
				(M = m(c)),
				R && R.l(c),
				c.forEach(n),
				this.h();
		},
		h() {
			r(_, 'class', 'svelte-18b7acj'),
				r(x, 'class', 'svelte-18b7acj'),
				r(S, 'class', 'svelte-18b7acj'),
				r(a, 'class', 'svelte-18b7acj'),
				r(e, 'class', (T = g(s[4][s[3]]) + ' svelte-18b7acj'));
		},
		m(t, c) {
			o(t, e, c),
				E(e, a),
				E(a, p),
				E(a, v),
				E(a, _),
				E(a, j),
				E(a, S),
				E(S, x),
				(x.innerHTML = s[1]),
				E(e, M),
				R && R.m(e, null),
				(A = !0);
		},
		p(s, a) {
			(!A || 1 & a) && $(p, s[0]),
				(!A || 2 & a) && (x.innerHTML = s[1]),
				R && R.p && 512 & a && h(R, L, s, s[9], a, null, null),
				(!A || (8 & a && T !== (T = g(s[4][s[3]]) + ' svelte-18b7acj'))) && r(e, 'class', T);
		},
		i(s) {
			A || (u(R, s), (A = !0));
		},
		o(s) {
			d(R, s), (A = !1);
		},
		d(s) {
			s && n(e), R && R.d(s);
		}
	};
}
function R(s) {
	let e, a, t, h, u, d, p, v;
	return {
		c() {
			(e = c('header')),
				(a = c('h1')),
				(t = b(s[0])),
				(h = f()),
				(u = c('br')),
				(d = f()),
				(p = c('span')),
				this.h();
		},
		l(c) {
			e = l(c, 'HEADER', { class: !0 });
			var r = i(e);
			a = l(r, 'H1', { class: !0 });
			var o = i(a);
			(t = H(o, s[0])),
				(h = m(o)),
				(u = l(o, 'BR', { class: !0 })),
				(d = m(o)),
				(p = l(o, 'SPAN', { class: !0 })),
				i(p).forEach(n),
				o.forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(u, 'class', 'svelte-18b7acj'),
				r(p, 'class', 'svelte-18b7acj'),
				r(a, 'class', 'svelte-18b7acj'),
				r(e, 'class', (v = s[4][s[3]] + '  svelte-18b7acj'));
		},
		m(c, l) {
			o(c, e, l), E(e, a), E(a, t), E(a, h), E(a, u), E(a, d), E(a, p), (p.innerHTML = s[1]);
		},
		p(s, a) {
			1 & a && $(t, s[0]),
				2 & a && (p.innerHTML = s[1]),
				8 & a && v !== (v = s[4][s[3]] + '  svelte-18b7acj') && r(e, 'class', v);
		},
		i: j,
		o: j,
		d(s) {
			s && n(e);
		}
	};
}
function D(s) {
	let e, a, t, c;
	const l = [R, L, A, T],
		i = [];
	function r(s, e) {
		return 1 === s[2] ? 0 : 2 === s[2] ? 1 : 3 === s[2] ? 2 : 3;
	}
	return (
		(e = r(s)),
		(a = i[e] = l[e](s)),
		{
			c() {
				a.c(), (t = p());
			},
			l(s) {
				a.l(s), (t = p());
			},
			m(s, a) {
				i[e].m(s, a), o(s, t, a), (c = !0);
			},
			p(s, [c]) {
				let n = e;
				(e = r(s)),
					e === n
						? i[e].p(s, c)
						: (v(),
						  d(i[n], 1, 1, () => {
								i[n] = null;
						  }),
						  _(),
						  (a = i[e]),
						  a ? a.p(s, c) : ((a = i[e] = l[e](s)), a.c()),
						  u(a, 1),
						  a.m(t.parentNode, t));
			},
			i(s) {
				c || (u(a), (c = !0));
			},
			o(s) {
				d(a), (c = !1);
			},
			d(s) {
				i[e].d(s), s && n(t);
			}
		}
	);
}
function N(s, e, a) {
	let { $$slots: t = {}, $$scope: c } = e,
		{ title: l = '' } = e,
		{ subtitle: i = '' } = e,
		{ text: n = '' } = e,
		{ img: r = '' } = e,
		{ is_home: o = !1 } = e,
		{ is_products_page: h = !1 } = e,
		{ tipo: u = 0 } = e,
		{ variante: d = 0 } = e;
	return (
		(s.$$set = (s) => {
			'title' in s && a(0, (l = s.title)),
				'subtitle' in s && a(1, (i = s.subtitle)),
				'text' in s && a(5, (n = s.text)),
				'img' in s && a(6, (r = s.img)),
				'is_home' in s && a(7, (o = s.is_home)),
				'is_products_page' in s && a(8, (h = s.is_products_page)),
				'tipo' in s && a(2, (u = s.tipo)),
				'variante' in s && a(3, (d = s.variante)),
				'$$scope' in s && a(9, (c = s.$$scope));
		}),
		[
			l,
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
			c,
			t
		]
	);
}
class B extends s {
	constructor(s) {
		super(),
			e(this, s, N, D, a, {
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
export { B as H, M as S };
