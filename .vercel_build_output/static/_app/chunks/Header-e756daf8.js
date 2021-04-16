import {
	S as s,
	i as e,
	s as t,
	M as a,
	e as l,
	c as i,
	a as c,
	d as n,
	o as r,
	f as o,
	O as u,
	w as h,
	x as v,
	Q as d,
	k as _,
	H as p,
	C as b,
	D as f,
	K as g,
	t as m,
	j as H,
	b as E,
	l as $,
	g as q,
	h as x,
	n as S,
	P as w
} from './index-d91e1ed8.js';
function T(s) {
	let e, t, d;
	const _ = s[6].default,
		p = a(_, s, s[5], null);
	return {
		c() {
			(e = l('section')), p && p.c(), this.h();
		},
		l(s) {
			e = i(s, 'SECTION', { id: !0, class: !0 });
			var t = c(e);
			p && p.l(t), t.forEach(n), this.h();
		},
		h() {
			r(e, 'id', s[1]), r(e, 'class', (t = s[3][s[0]] + ' ' + s[4][s[2]] + ' svelte-17ts9cb'));
		},
		m(s, t) {
			o(s, e, t), p && p.m(e, null), (d = !0);
		},
		p(s, [a]) {
			p && p.p && 32 & a && u(p, _, s, s[5], a, null, null),
				(!d || 2 & a) && r(e, 'id', s[1]),
				(!d || (5 & a && t !== (t = s[3][s[0]] + ' ' + s[4][s[2]] + ' svelte-17ts9cb'))) &&
					r(e, 'class', t);
		},
		i(s) {
			d || (h(p, s), (d = !0));
		},
		o(s) {
			v(p, s), (d = !1);
		},
		d(s) {
			s && n(e), p && p.d(s);
		}
	};
}
function M(s, e, t) {
	let { $$slots: a = {}, $$scope: l } = e,
		{ variante: i = 0 } = e,
		{ id: c = '' } = e,
		{ bg_color: n = 0 } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && t(0, (i = s.variante)),
				'id' in s && t(1, (c = s.id)),
				'bg_color' in s && t(2, (n = s.bg_color)),
				'$$scope' in s && t(5, (l = s.$$scope));
		}),
		[
			i,
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
			['bg_color_0', 'bg_color_1', 'bg_color_2', 'bg_color_3', 'bg_color_4', 'bg_color_5'],
			l,
			a
		]
	);
}
class A extends s {
	constructor(s) {
		super(), e(this, s, M, T, t, { variante: 0, id: 1, bg_color: 2 });
	}
}
function L(s) {
	let e, t, d;
	const _ = s[14].default,
		p = a(_, s, s[13], null);
	return {
		c() {
			(e = l('header')), p && p.c(), this.h();
		},
		l(s) {
			e = i(s, 'HEADER', { class: !0 });
			var t = c(e);
			p && p.l(t), t.forEach(n), this.h();
		},
		h() {
			r(e, 'class', (t = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3'));
		},
		m(s, t) {
			o(s, e, t), p && p.m(e, null), (d = !0);
		},
		p(s, a) {
			p && p.p && 8192 & a && u(p, _, s, s[13], a, null, null),
				(!d || (24 & a && t !== (t = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3'))) &&
					r(e, 'class', t);
		},
		i(s) {
			d || (h(p, s), (d = !0));
		},
		o(s) {
			v(p, s), (d = !1);
		},
		d(s) {
			s && n(e), p && p.d(s);
		}
	};
}
function R(s) {
	let e, t, a, u, h, v;
	return {
		c() {
			(e = l('header')), (t = l('h2')), (a = m(s[0])), (u = H()), (h = l('h3')), this.h();
		},
		l(l) {
			e = i(l, 'HEADER', { class: !0 });
			var r = c(e);
			t = i(r, 'H2', { class: !0 });
			var o = c(t);
			(a = E(o, s[0])),
				o.forEach(n),
				(u = $(r)),
				(h = i(r, 'H3', { class: !0 })),
				c(h).forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(t, 'class', 'svelte-1vuqbr3'),
				r(h, 'class', 'svelte-1vuqbr3'),
				r(e, 'class', (v = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3'));
		},
		m(l, i) {
			o(l, e, i), q(e, t), q(t, a), q(e, u), q(e, h), (h.innerHTML = s[1]);
		},
		p(s, t) {
			1 & t && x(a, s[0]),
				2 & t && (h.innerHTML = s[1]),
				24 & t && v !== (v = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3') && r(e, 'class', v);
		},
		i: S,
		o: S,
		d(s) {
			s && n(e);
		}
	};
}
function D(s) {
	let e, t, d, _, p, b, f, g, S, T, M;
	const A = s[14].default,
		L = a(A, s, s[13], null);
	return {
		c() {
			(e = l('header')),
				(t = l('h1')),
				(d = m(s[0])),
				(_ = H()),
				(p = l('br')),
				(b = H()),
				(f = l('span')),
				(g = l('h2')),
				(S = H()),
				L && L.c(),
				this.h();
		},
		l(a) {
			e = i(a, 'HEADER', { class: !0, style: !0 });
			var l = c(e);
			t = i(l, 'H1', { class: !0 });
			var r = c(t);
			(d = E(r, s[0])),
				(_ = $(r)),
				(p = i(r, 'BR', { class: !0 })),
				(b = $(r)),
				(f = i(r, 'SPAN', { class: !0 }));
			var o = c(f);
			(g = i(o, 'H2', { class: !0 })),
				c(g).forEach(n),
				o.forEach(n),
				r.forEach(n),
				(S = $(l)),
				L && L.l(l),
				l.forEach(n),
				this.h();
		},
		h() {
			r(p, 'class', 'svelte-1vuqbr3'),
				r(g, 'class', 'svelte-1vuqbr3'),
				r(f, 'class', 'svelte-1vuqbr3'),
				r(t, 'class', 'svelte-1vuqbr3'),
				r(e, 'class', (T = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3')),
				w(e, 'opacity', 1 - Math.max(0, s[7] / (s[6] / 1.5)));
		},
		m(a, l) {
			o(a, e, l),
				q(e, t),
				q(t, d),
				q(t, _),
				q(t, p),
				q(t, b),
				q(t, f),
				q(f, g),
				(g.innerHTML = s[1]),
				q(e, S),
				L && L.m(e, null),
				(M = !0);
		},
		p(s, t) {
			(!M || 1 & t) && x(d, s[0]),
				(!M || 2 & t) && (g.innerHTML = s[1]),
				L && L.p && 8192 & t && u(L, A, s, s[13], t, null, null),
				(!M || (24 & t && T !== (T = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3'))) &&
					r(e, 'class', T),
				(!M || 192 & t) && w(e, 'opacity', 1 - Math.max(0, s[7] / (s[6] / 1.5)));
		},
		i(s) {
			M || (h(L, s), (M = !0));
		},
		o(s) {
			v(L, s), (M = !1);
		},
		d(s) {
			s && n(e), L && L.d(s);
		}
	};
}
function N(s) {
	let e, t, a, u, h, v, d, _;
	return {
		c() {
			(e = l('header')),
				(t = l('h1')),
				(a = m(s[0])),
				(u = H()),
				(h = l('br')),
				(v = H()),
				(d = l('span')),
				this.h();
		},
		l(l) {
			e = i(l, 'HEADER', { class: !0 });
			var r = c(e);
			t = i(r, 'H1', { class: !0 });
			var o = c(t);
			(a = E(o, s[0])),
				(u = $(o)),
				(h = i(o, 'BR', { class: !0 })),
				(v = $(o)),
				(d = i(o, 'SPAN', { class: !0 })),
				c(d).forEach(n),
				o.forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			r(h, 'class', 'svelte-1vuqbr3'),
				r(d, 'class', 'svelte-1vuqbr3'),
				r(t, 'class', 'svelte-1vuqbr3'),
				r(e, 'class', (_ = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3'));
		},
		m(l, i) {
			o(l, e, i), q(e, t), q(t, a), q(t, u), q(t, h), q(t, v), q(t, d), (d.innerHTML = s[1]);
		},
		p(s, t) {
			1 & t && x(a, s[0]),
				2 & t && (d.innerHTML = s[1]),
				24 & t && _ !== (_ = s[8][s[3]] + ' ' + s[4] + ' svelte-1vuqbr3') && r(e, 'class', _);
		},
		i: S,
		o: S,
		d(s) {
			s && n(e);
		}
	};
}
function O(s) {
	let e,
		t,
		a,
		l,
		i,
		c,
		r,
		u = !1,
		m = () => {
			u = !1;
		};
	d(s[15]), d(s[16]);
	const H = [N, D, R, L],
		E = [];
	function $(s, e) {
		return 1 === s[2] ? 0 : 2 === s[2] ? 1 : 3 === s[2] ? 2 : 3;
	}
	return (
		(t = $(s)),
		(a = E[t] = H[t](s)),
		{
			c() {
				a.c(), (l = _());
			},
			l(s) {
				a.l(s), (l = _());
			},
			m(a, n) {
				E[t].m(a, n),
					o(a, l, n),
					(i = !0),
					c ||
						((r = [
							p(window, 'resize', s[15]),
							p(window, 'scroll', () => {
								(u = !0), clearTimeout(e), (e = setTimeout(m, 100)), s[16]();
							})
						]),
						(c = !0));
			},
			p(s, [i]) {
				128 & i &&
					!u &&
					((u = !0), clearTimeout(e), scrollTo(window.pageXOffset, s[7]), (e = setTimeout(m, 100)));
				let c = t;
				(t = $(s)),
					t === c
						? E[t].p(s, i)
						: (b(),
						  v(E[c], 1, 1, () => {
								E[c] = null;
						  }),
						  f(),
						  (a = E[t]),
						  a ? a.p(s, i) : ((a = E[t] = H[t](s)), a.c()),
						  h(a, 1),
						  a.m(l.parentNode, l));
			},
			i(s) {
				i || (h(a), (i = !0));
			},
			o(s) {
				v(a), (i = !1);
			},
			d(s) {
				E[t].d(s), s && n(l), (c = !1), g(r);
			}
		}
	);
}
function y(s, e, t) {
	let { $$slots: a = {}, $$scope: l } = e,
		{ title: i = '' } = e,
		{ subtitle: c = '' } = e,
		{ text: n = '' } = e,
		{ img: r = '' } = e,
		{ is_home: o = !1 } = e,
		{ is_products_page: u = !1 } = e,
		{ tipo: h = 0 } = e,
		{ variante: v = 0 } = e;
	let d,
		_,
		p,
		{ textalign: b = 'align-center' } = e;
	return (
		(s.$$set = (s) => {
			'title' in s && t(0, (i = s.title)),
				'subtitle' in s && t(1, (c = s.subtitle)),
				'text' in s && t(9, (n = s.text)),
				'img' in s && t(10, (r = s.img)),
				'is_home' in s && t(11, (o = s.is_home)),
				'is_products_page' in s && t(12, (u = s.is_products_page)),
				'tipo' in s && t(2, (h = s.tipo)),
				'variante' in s && t(3, (v = s.variante)),
				'textalign' in s && t(4, (b = s.textalign)),
				'$$scope' in s && t(13, (l = s.$$scope));
		}),
		[
			i,
			c,
			h,
			v,
			b,
			d,
			_,
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
			u,
			l,
			a,
			function () {
				t(5, (d = window.innerWidth)), t(6, (_ = window.innerHeight));
			},
			function () {
				t(7, (p = window.pageYOffset));
			}
		]
	);
}
class P extends s {
	constructor(s) {
		super(),
			e(this, s, y, O, t, {
				title: 0,
				subtitle: 1,
				text: 9,
				img: 10,
				is_home: 11,
				is_products_page: 12,
				tipo: 2,
				variante: 3,
				textalign: 4
			});
	}
}
export { P as H, A as S };
