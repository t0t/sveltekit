import {
	S as s,
	i as e,
	s as t,
	M as a,
	e as l,
	c,
	a as i,
	d as n,
	o,
	f as r,
	O as h,
	w as u,
	x as d,
	Q as _,
	k as p,
	H as v,
	C as f,
	D as g,
	K as m,
	t as H,
	j as E,
	b as $,
	l as b,
	g as q,
	h as w,
	n as x,
	P as S
} from './index-d91e1ed8.js';
function T(s) {
	let e, t, _;
	const p = s[6].default,
		v = a(p, s, s[5], null);
	return {
		c() {
			(e = l('section')), v && v.c(), this.h();
		},
		l(s) {
			e = c(s, 'SECTION', { id: !0, class: !0 });
			var t = i(e);
			v && v.l(t), t.forEach(n), this.h();
		},
		h() {
			o(e, 'id', s[1]), o(e, 'class', (t = s[3][s[0]] + ' ' + s[4][s[2]] + ' svelte-dw98uz'));
		},
		m(s, t) {
			r(s, e, t), v && v.m(e, null), (_ = !0);
		},
		p(s, [a]) {
			v && v.p && 32 & a && h(v, p, s, s[5], a, null, null),
				(!_ || 2 & a) && o(e, 'id', s[1]),
				(!_ || (5 & a && t !== (t = s[3][s[0]] + ' ' + s[4][s[2]] + ' svelte-dw98uz'))) &&
					o(e, 'class', t);
		},
		i(s) {
			_ || (u(v, s), (_ = !0));
		},
		o(s) {
			d(v, s), (_ = !1);
		},
		d(s) {
			s && n(e), v && v.d(s);
		}
	};
}
function M(s, e, t) {
	let { $$slots: a = {}, $$scope: l } = e,
		{ variante: c = 0 } = e,
		{ id: i = '' } = e,
		{ bg_color: n = 0 } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && t(0, (c = s.variante)),
				'id' in s && t(1, (i = s.id)),
				'bg_color' in s && t(2, (n = s.bg_color)),
				'$$scope' in s && t(5, (l = s.$$scope));
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
	let e, t, _;
	const p = s[14].default,
		v = a(p, s, s[13], null);
	return {
		c() {
			(e = l('header')), v && v.c(), this.h();
		},
		l(s) {
			e = c(s, 'HEADER', { class: !0 });
			var t = i(e);
			v && v.l(t), t.forEach(n), this.h();
		},
		h() {
			o(e, 'class', (t = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52'));
		},
		m(s, t) {
			r(s, e, t), v && v.m(e, null), (_ = !0);
		},
		p(s, a) {
			v && v.p && 8192 & a && h(v, p, s, s[13], a, null, null),
				(!_ || (48 & a && t !== (t = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52'))) &&
					o(e, 'class', t);
		},
		i(s) {
			_ || (u(v, s), (_ = !0));
		},
		o(s) {
			d(v, s), (_ = !1);
		},
		d(s) {
			s && n(e), v && v.d(s);
		}
	};
}
function R(s) {
	let e, t, a, h, u, d;
	return {
		c() {
			(e = l('header')), (t = l('h2')), (a = H(s[0])), (h = E()), (u = l('h3')), this.h();
		},
		l(l) {
			e = c(l, 'HEADER', { class: !0 });
			var o = i(e);
			t = c(o, 'H2', { class: !0 });
			var r = i(t);
			(a = $(r, s[0])),
				r.forEach(n),
				(h = b(o)),
				(u = c(o, 'H3', { class: !0 })),
				i(u).forEach(n),
				o.forEach(n),
				this.h();
		},
		h() {
			o(t, 'class', 'svelte-95qc52'),
				o(u, 'class', 'svelte-95qc52'),
				o(e, 'class', (d = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52'));
		},
		m(l, c) {
			r(l, e, c), q(e, t), q(t, a), q(e, h), q(e, u), (u.innerHTML = s[1]);
		},
		p(s, t) {
			1 & t && w(a, s[0]),
				2 & t && (u.innerHTML = s[1]),
				48 & t && d !== (d = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52') && o(e, 'class', d);
		},
		i: x,
		o: x,
		d(s) {
			s && n(e);
		}
	};
}
function D(s) {
	let e, t, _, p, v, f, g, m, x, T, M, A, L, R;
	const D = s[14].default,
		N = a(D, s, s[13], null);
	return {
		c() {
			(e = l('header')),
				(t = l('h1')),
				(_ = H(s[0])),
				(p = E()),
				(v = l('br')),
				(f = E()),
				(g = l('span')),
				(m = l('h2')),
				(x = E()),
				(T = l('p')),
				(M = H(s[2])),
				(A = E()),
				N && N.c(),
				this.h();
		},
		l(a) {
			e = c(a, 'HEADER', { class: !0, style: !0 });
			var l = i(e);
			t = c(l, 'H1', { class: !0 });
			var o = i(t);
			(_ = $(o, s[0])),
				(p = b(o)),
				(v = c(o, 'BR', { class: !0 })),
				(f = b(o)),
				(g = c(o, 'SPAN', { class: !0 }));
			var r = i(g);
			(m = c(r, 'H2', { class: !0 })),
				i(m).forEach(n),
				r.forEach(n),
				o.forEach(n),
				(x = b(l)),
				(T = c(l, 'P', { class: !0 }));
			var h = i(T);
			(M = $(h, s[2])), h.forEach(n), (A = b(l)), N && N.l(l), l.forEach(n), this.h();
		},
		h() {
			o(v, 'class', 'svelte-95qc52'),
				o(m, 'class', 'CoverSubTitle svelte-95qc52'),
				o(g, 'class', 'svelte-95qc52'),
				o(t, 'class', 'svelte-95qc52'),
				o(T, 'class', 'svelte-95qc52'),
				o(e, 'class', (L = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52')),
				S(e, 'opacity', 1 - Math.max(0, s[8] / (s[7] / 1.5)));
		},
		m(a, l) {
			r(a, e, l),
				q(e, t),
				q(t, _),
				q(t, p),
				q(t, v),
				q(t, f),
				q(t, g),
				q(g, m),
				(m.innerHTML = s[1]),
				q(e, x),
				q(e, T),
				q(T, M),
				q(e, A),
				N && N.m(e, null),
				(R = !0);
		},
		p(s, t) {
			(!R || 1 & t) && w(_, s[0]),
				(!R || 2 & t) && (m.innerHTML = s[1]),
				(!R || 4 & t) && w(M, s[2]),
				N && N.p && 8192 & t && h(N, D, s, s[13], t, null, null),
				(!R || (48 & t && L !== (L = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52'))) &&
					o(e, 'class', L),
				(!R || 384 & t) && S(e, 'opacity', 1 - Math.max(0, s[8] / (s[7] / 1.5)));
		},
		i(s) {
			R || (u(N, s), (R = !0));
		},
		o(s) {
			d(N, s), (R = !1);
		},
		d(s) {
			s && n(e), N && N.d(s);
		}
	};
}
function N(s) {
	let e, t, a, h, u, d, _, p;
	return {
		c() {
			(e = l('header')),
				(t = l('h1')),
				(a = H(s[0])),
				(h = E()),
				(u = l('br')),
				(d = E()),
				(_ = l('span')),
				this.h();
		},
		l(l) {
			e = c(l, 'HEADER', { class: !0 });
			var o = i(e);
			t = c(o, 'H1', { class: !0 });
			var r = i(t);
			(a = $(r, s[0])),
				(h = b(r)),
				(u = c(r, 'BR', { class: !0 })),
				(d = b(r)),
				(_ = c(r, 'SPAN', { class: !0 })),
				i(_).forEach(n),
				r.forEach(n),
				o.forEach(n),
				this.h();
		},
		h() {
			o(u, 'class', 'svelte-95qc52'),
				o(_, 'class', 'svelte-95qc52'),
				o(t, 'class', 'svelte-95qc52'),
				o(e, 'class', (p = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52'));
		},
		m(l, c) {
			r(l, e, c), q(e, t), q(t, a), q(t, h), q(t, u), q(t, d), q(t, _), (_.innerHTML = s[1]);
		},
		p(s, t) {
			1 & t && w(a, s[0]),
				2 & t && (_.innerHTML = s[1]),
				48 & t && p !== (p = s[9][s[4]] + ' ' + s[5] + ' svelte-95qc52') && o(e, 'class', p);
		},
		i: x,
		o: x,
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
		c,
		i,
		o,
		h = !1,
		H = () => {
			h = !1;
		};
	_(s[15]), _(s[16]);
	const E = [N, D, R, L],
		$ = [];
	function b(s, e) {
		return 1 === s[3] ? 0 : 2 === s[3] ? 1 : 3 === s[3] ? 2 : 3;
	}
	return (
		(t = b(s)),
		(a = $[t] = E[t](s)),
		{
			c() {
				a.c(), (l = p());
			},
			l(s) {
				a.l(s), (l = p());
			},
			m(a, n) {
				$[t].m(a, n),
					r(a, l, n),
					(c = !0),
					i ||
						((o = [
							v(window, 'resize', s[15]),
							v(window, 'scroll', () => {
								(h = !0), clearTimeout(e), (e = setTimeout(H, 100)), s[16]();
							})
						]),
						(i = !0));
			},
			p(s, [c]) {
				256 & c &&
					!h &&
					((h = !0), clearTimeout(e), scrollTo(window.pageXOffset, s[8]), (e = setTimeout(H, 100)));
				let i = t;
				(t = b(s)),
					t === i
						? $[t].p(s, c)
						: (f(),
						  d($[i], 1, 1, () => {
								$[i] = null;
						  }),
						  g(),
						  (a = $[t]),
						  a ? a.p(s, c) : ((a = $[t] = E[t](s)), a.c()),
						  u(a, 1),
						  a.m(l.parentNode, l));
			},
			i(s) {
				c || (u(a), (c = !0));
			},
			o(s) {
				d(a), (c = !1);
			},
			d(s) {
				$[t].d(s), s && n(l), (i = !1), m(o);
			}
		}
	);
}
function P(s, e, t) {
	let { $$slots: a = {}, $$scope: l } = e,
		{ title: c = '' } = e,
		{ subtitle: i = '' } = e,
		{ text: n = '' } = e,
		{ img: o = '' } = e,
		{ is_home: r = !1 } = e,
		{ is_products_page: h = !1 } = e,
		{ tipo: u = 0 } = e,
		{ variante: d = 0 } = e;
	let _,
		p,
		v,
		{ textalign: f = 'align-center' } = e;
	return (
		(s.$$set = (s) => {
			'title' in s && t(0, (c = s.title)),
				'subtitle' in s && t(1, (i = s.subtitle)),
				'text' in s && t(2, (n = s.text)),
				'img' in s && t(10, (o = s.img)),
				'is_home' in s && t(11, (r = s.is_home)),
				'is_products_page' in s && t(12, (h = s.is_products_page)),
				'tipo' in s && t(3, (u = s.tipo)),
				'variante' in s && t(4, (d = s.variante)),
				'textalign' in s && t(5, (f = s.textalign)),
				'$$scope' in s && t(13, (l = s.$$scope));
		}),
		[
			c,
			i,
			n,
			u,
			d,
			f,
			_,
			p,
			v,
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
			o,
			r,
			h,
			l,
			a,
			function () {
				t(6, (_ = window.innerWidth)), t(7, (p = window.innerHeight));
			},
			function () {
				t(8, (v = window.pageYOffset));
			}
		]
	);
}
class y extends s {
	constructor(s) {
		super(),
			e(this, s, P, O, t, {
				title: 0,
				subtitle: 1,
				text: 2,
				img: 10,
				is_home: 11,
				is_products_page: 12,
				tipo: 3,
				variante: 4,
				textalign: 5
			});
	}
}
export { y as H, A as S };
