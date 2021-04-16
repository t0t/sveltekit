import {
	S as e,
	i as s,
	s as t,
	M as a,
	e as i,
	c as l,
	a as c,
	d as n,
	o as r,
	f as o,
	O as h,
	w as u,
	x as d,
	k as p,
	C as v,
	D as _,
	t as f,
	j as H,
	b as g,
	l as m,
	g as E,
	h as $,
	n as z
} from './index-d91e1ed8.js';
function S(e) {
	let s, t, p;
	const v = e[5].default,
		_ = a(v, e, e[4], null);
	return {
		c() {
			(s = i('section')), _ && _.c(), this.h();
		},
		l(e) {
			s = l(e, 'SECTION', { id: !0, class: !0 });
			var t = c(s);
			_ && _.l(t), t.forEach(n), this.h();
		},
		h() {
			r(s, 'id', e[1]), r(s, 'class', (t = e[3][e[0]] + ' ' + e[2] + ' svelte-1i4e3gd'));
		},
		m(e, t) {
			o(e, s, t), _ && _.m(s, null), (p = !0);
		},
		p(e, [a]) {
			_ && _.p && 16 & a && h(_, v, e, e[4], a, null, null),
				(!p || 2 & a) && r(s, 'id', e[1]),
				(!p || (5 & a && t !== (t = e[3][e[0]] + ' ' + e[2] + ' svelte-1i4e3gd'))) &&
					r(s, 'class', t);
		},
		i(e) {
			p || (u(_, e), (p = !0));
		},
		o(e) {
			d(_, e), (p = !1);
		},
		d(e) {
			e && n(s), _ && _.d(e);
		}
	};
}
function x(e, s, t) {
	let { $$slots: a = {}, $$scope: i } = s,
		{ variante: l = 0 } = s,
		{ id: c = '' } = s,
		{ bg_color: n = 'bggrey_1' } = s;
	return (
		(e.$$set = (e) => {
			'variante' in e && t(0, (l = e.variante)),
				'id' in e && t(1, (c = e.id)),
				'bg_color' in e && t(2, (n = e.bg_color)),
				'$$scope' in e && t(4, (i = e.$$scope));
		}),
		[
			l,
			c,
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
			i,
			a
		]
	);
}
class b extends e {
	constructor(e) {
		super(), s(this, e, x, S, t, { variante: 0, id: 1, bg_color: 2 });
	}
}
function M(e) {
	let s, t, p;
	const v = e[11].default,
		_ = a(v, e, e[10], null);
	return {
		c() {
			(s = i('header')), _ && _.c(), this.h();
		},
		l(e) {
			s = l(e, 'HEADER', { class: !0 });
			var t = c(s);
			_ && _.l(t), t.forEach(n), this.h();
		},
		h() {
			r(s, 'class', (t = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z'));
		},
		m(e, t) {
			o(e, s, t), _ && _.m(s, null), (p = !0);
		},
		p(e, a) {
			_ && _.p && 1024 & a && h(_, v, e, e[10], a, null, null),
				(!p || (24 & a && t !== (t = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z'))) &&
					r(s, 'class', t);
		},
		i(e) {
			p || (u(_, e), (p = !0));
		},
		o(e) {
			d(_, e), (p = !1);
		},
		d(e) {
			e && n(s), _ && _.d(e);
		}
	};
}
function T(e) {
	let s, t, a, h, u, d;
	return {
		c() {
			(s = i('header')), (t = i('h2')), (a = f(e[0])), (h = H()), (u = i('h3')), this.h();
		},
		l(i) {
			s = l(i, 'HEADER', { class: !0 });
			var r = c(s);
			t = l(r, 'H2', { class: !0 });
			var o = c(t);
			(a = g(o, e[0])),
				o.forEach(n),
				(h = m(r)),
				(u = l(r, 'H3', { class: !0 })),
				c(u).forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(t, 'class', 'svelte-10tei0z'),
				r(u, 'class', 'svelte-10tei0z'),
				r(s, 'class', (d = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z'));
		},
		m(i, l) {
			o(i, s, l), E(s, t), E(t, a), E(s, h), E(s, u), (u.innerHTML = e[1]);
		},
		p(e, t) {
			1 & t && $(a, e[0]),
				2 & t && (u.innerHTML = e[1]),
				24 & t && d !== (d = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z') && r(s, 'class', d);
		},
		i: z,
		o: z,
		d(e) {
			e && n(s);
		}
	};
}
function A(e) {
	let s, t, p, v, _, z, S, x, b, M, T;
	const A = e[11].default,
		L = a(A, e, e[10], null);
	return {
		c() {
			(s = i('header')),
				(t = i('h1')),
				(p = f(e[0])),
				(v = H()),
				(_ = i('br')),
				(z = H()),
				(S = i('span')),
				(x = i('h2')),
				(b = H()),
				L && L.c(),
				this.h();
		},
		l(a) {
			s = l(a, 'HEADER', { class: !0 });
			var i = c(s);
			t = l(i, 'H1', { class: !0 });
			var r = c(t);
			(p = g(r, e[0])),
				(v = m(r)),
				(_ = l(r, 'BR', { class: !0 })),
				(z = m(r)),
				(S = l(r, 'SPAN', { class: !0 }));
			var o = c(S);
			(x = l(o, 'H2', { class: !0 })),
				c(x).forEach(n),
				o.forEach(n),
				r.forEach(n),
				(b = m(i)),
				L && L.l(i),
				i.forEach(n),
				this.h();
		},
		h() {
			r(_, 'class', 'svelte-10tei0z'),
				r(x, 'class', 'svelte-10tei0z'),
				r(S, 'class', 'svelte-10tei0z'),
				r(t, 'class', 'svelte-10tei0z'),
				r(s, 'class', (M = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z'));
		},
		m(a, i) {
			o(a, s, i),
				E(s, t),
				E(t, p),
				E(t, v),
				E(t, _),
				E(t, z),
				E(t, S),
				E(S, x),
				(x.innerHTML = e[1]),
				E(s, b),
				L && L.m(s, null),
				(T = !0);
		},
		p(e, t) {
			(!T || 1 & t) && $(p, e[0]),
				(!T || 2 & t) && (x.innerHTML = e[1]),
				L && L.p && 1024 & t && h(L, A, e, e[10], t, null, null),
				(!T || (24 & t && M !== (M = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z'))) &&
					r(s, 'class', M);
		},
		i(e) {
			T || (u(L, e), (T = !0));
		},
		o(e) {
			d(L, e), (T = !1);
		},
		d(e) {
			e && n(s), L && L.d(e);
		}
	};
}
function L(e) {
	let s, t, a, h, u, d, p, v;
	return {
		c() {
			(s = i('header')),
				(t = i('h1')),
				(a = f(e[0])),
				(h = H()),
				(u = i('br')),
				(d = H()),
				(p = i('span')),
				this.h();
		},
		l(i) {
			s = l(i, 'HEADER', { class: !0 });
			var r = c(s);
			t = l(r, 'H1', { class: !0 });
			var o = c(t);
			(a = g(o, e[0])),
				(h = m(o)),
				(u = l(o, 'BR', { class: !0 })),
				(d = m(o)),
				(p = l(o, 'SPAN', { class: !0 })),
				c(p).forEach(n),
				o.forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(u, 'class', 'svelte-10tei0z'),
				r(p, 'class', 'svelte-10tei0z'),
				r(t, 'class', 'svelte-10tei0z'),
				r(s, 'class', (v = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z'));
		},
		m(i, l) {
			o(i, s, l), E(s, t), E(t, a), E(t, h), E(t, u), E(t, d), E(t, p), (p.innerHTML = e[1]);
		},
		p(e, t) {
			1 & t && $(a, e[0]),
				2 & t && (p.innerHTML = e[1]),
				24 & t && v !== (v = e[5][e[3]] + ' ' + e[4] + ' svelte-10tei0z') && r(s, 'class', v);
		},
		i: z,
		o: z,
		d(e) {
			e && n(s);
		}
	};
}
function R(e) {
	let s, t, a, i;
	const l = [L, A, T, M],
		c = [];
	function r(e, s) {
		return 1 === e[2] ? 0 : 2 === e[2] ? 1 : 3 === e[2] ? 2 : 3;
	}
	return (
		(s = r(e)),
		(t = c[s] = l[s](e)),
		{
			c() {
				t.c(), (a = p());
			},
			l(e) {
				t.l(e), (a = p());
			},
			m(e, t) {
				c[s].m(e, t), o(e, a, t), (i = !0);
			},
			p(e, [i]) {
				let n = s;
				(s = r(e)),
					s === n
						? c[s].p(e, i)
						: (v(),
						  d(c[n], 1, 1, () => {
								c[n] = null;
						  }),
						  _(),
						  (t = c[s]),
						  t ? t.p(e, i) : ((t = c[s] = l[s](e)), t.c()),
						  u(t, 1),
						  t.m(a.parentNode, a));
			},
			i(e) {
				i || (u(t), (i = !0));
			},
			o(e) {
				d(t), (i = !1);
			},
			d(e) {
				c[s].d(e), e && n(a);
			}
		}
	);
}
function D(e, s, t) {
	let { $$slots: a = {}, $$scope: i } = s,
		{ title: l = '' } = s,
		{ subtitle: c = '' } = s,
		{ text: n = '' } = s,
		{ img: r = '' } = s,
		{ is_home: o = !1 } = s,
		{ is_products_page: h = !1 } = s,
		{ tipo: u = 0 } = s,
		{ variante: d = 0 } = s;
	let { textalign: p = 'tac' } = s;
	return (
		(e.$$set = (e) => {
			'title' in e && t(0, (l = e.title)),
				'subtitle' in e && t(1, (c = e.subtitle)),
				'text' in e && t(6, (n = e.text)),
				'img' in e && t(7, (r = e.img)),
				'is_home' in e && t(8, (o = e.is_home)),
				'is_products_page' in e && t(9, (h = e.is_products_page)),
				'tipo' in e && t(2, (u = e.tipo)),
				'variante' in e && t(3, (d = e.variante)),
				'textalign' in e && t(4, (p = e.textalign)),
				'$$scope' in e && t(10, (i = e.$$scope));
		}),
		[
			l,
			c,
			u,
			d,
			p,
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
			i,
			a
		]
	);
}
class N extends e {
	constructor(e) {
		super(),
			s(this, e, D, R, t, {
				title: 0,
				subtitle: 1,
				text: 6,
				img: 7,
				is_home: 8,
				is_products_page: 9,
				tipo: 2,
				variante: 3,
				textalign: 4
			});
	}
}
export { N as H, b as S };
