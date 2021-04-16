import {
	S as s,
	i as t,
	s as e,
	k as a,
	f as l,
	n as c,
	d as n,
	F as r,
	e as i,
	t as o,
	c as u,
	a as d,
	b as v,
	o as h,
	I as p,
	G as f,
	g,
	H as m,
	h as b,
	C as _,
	x,
	D,
	w as E,
	M as I,
	j as y,
	l as V,
	O as B
} from './index-d91e1ed8.js';
import './Header-c174dee5.js';
const $ = [
	{
		title: 'Sergio Forés',
		subtitle: 'Sentir la Creación',
		text:
			'Descifrando la Creación, en la intersección del arte, la tecnología y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexión.',
		img: './img/cover3.jpg'
	},
	{
		title: 'Impresión 3D',
		subtitle: 'Cristalizo corrientes de formas',
		text: '3D Printed Artworks',
		img: './img/bg2.jpg'
	},
	{
		title: 'Lab',
		subtitle: 'Frontend design laboratory',
		text: 'Pequeños ejercicios de programación en los que pongo en práctica ideas',
		img: './img/bg1.jpg'
	},
	{
		title: '+0+1234',
		subtitle: "<span class='tachado'>My</span> A Holistic Philosophy",
		text: 'Sentir Orden Forma Conexión',
		img: './img/circle.svg'
	},
	{
		title: 'Holistic Prototype',
		subtitle: 'A Frontend Design System',
		text: 'Svelte.js, Sass...',
		img: './img/bg2.jpg'
	}
];
function G(s) {
	let t, e, a, c, r;
	return {
		c() {
			(t = i('button')), (e = o(s[0])), this.h();
		},
		l(a) {
			t = u(a, 'BUTTON', { class: !0 });
			var l = d(t);
			(e = v(l, s[0])), l.forEach(n), this.h();
		},
		h() {
			h(t, 'class', (a = p(s[6][s[4]]) + ' svelte-a63byz')), f(t, 'not-clickable', '' == s[5]);
		},
		m(a, n) {
			l(a, t, n), g(t, e), c || ((r = m(t, 'click', s[8])), (c = !0));
		},
		p(s, l) {
			1 & l && b(e, s[0]),
				16 & l && a !== (a = p(s[6][s[4]]) + ' svelte-a63byz') && h(t, 'class', a),
				48 & l && f(t, 'not-clickable', '' == s[5]);
		},
		d(s) {
			s && n(t), (c = !1), r();
		}
	};
}
function j(s) {
	let t, e, a, c, r;
	return {
		c() {
			(t = i('button')), (e = o(s[0])), this.h();
		},
		l(a) {
			t = u(a, 'BUTTON', { type: !0, class: !0 });
			var l = d(t);
			(e = v(l, s[0])), l.forEach(n), this.h();
		},
		h() {
			h(t, 'type', 'submit'), h(t, 'class', (a = p(s[6][s[4]]) + ' svelte-a63byz'));
		},
		m(a, n) {
			l(a, t, n), g(t, e), c || ((r = m(t, 'click', s[7])), (c = !0));
		},
		p(s, l) {
			1 & l && b(e, s[0]),
				16 & l && a !== (a = p(s[6][s[4]]) + ' svelte-a63byz') && h(t, 'class', a);
		},
		d(s) {
			s && n(t), (c = !1), r();
		}
	};
}
function z(s) {
	let t, e, a;
	return {
		c() {
			(t = i('a')), (e = o(s[0])), this.h();
		},
		l(a) {
			t = u(a, 'A', { class: !0, href: !0 });
			var l = d(t);
			(e = v(l, s[0])), l.forEach(n), this.h();
		},
		h() {
			h(t, 'class', (a = 'button ' + s[6][s[4]] + ' svelte-a63byz')), h(t, 'href', s[1]);
		},
		m(s, a) {
			l(s, t, a), g(t, e);
		},
		p(s, l) {
			1 & l && b(e, s[0]),
				16 & l && a !== (a = 'button ' + s[6][s[4]] + ' svelte-a63byz') && h(t, 'class', a),
				2 & l && h(t, 'href', s[1]);
		},
		d(s) {
			s && n(t);
		}
	};
}
function S(s) {
	let t, e, a;
	return {
		c() {
			(t = i('a')), (e = o(s[0])), this.h();
		},
		l(a) {
			t = u(a, 'A', { class: !0, href: !0, target: !0 });
			var l = d(t);
			(e = v(l, s[0])), l.forEach(n), this.h();
		},
		h() {
			h(t, 'class', (a = 'button ' + s[6][s[4]] + ' svelte-a63byz')),
				h(t, 'href', s[1]),
				h(t, 'target', s[3]);
		},
		m(s, a) {
			l(s, t, a), g(t, e);
		},
		p(s, l) {
			1 & l && b(e, s[0]),
				16 & l && a !== (a = 'button ' + s[6][s[4]] + ' svelte-a63byz') && h(t, 'class', a),
				2 & l && h(t, 'href', s[1]),
				8 & l && h(t, 'target', s[3]);
		},
		d(s) {
			s && n(t);
		}
	};
}
function k(s) {
	let t;
	function e(s, t) {
		return s[3] ? S : !s[3] && s[1] ? z : s[2] ? j : G;
	}
	let r = e(s),
		i = r(s);
	return {
		c() {
			i.c(), (t = a());
		},
		l(s) {
			i.l(s), (t = a());
		},
		m(s, e) {
			i.m(s, e), l(s, t, e);
		},
		p(s, [a]) {
			r === (r = e(s)) && i ? i.p(s, a) : (i.d(1), (i = r(s)), i && (i.c(), i.m(t.parentNode, t)));
		},
		i: c,
		o: c,
		d(s) {
			i.d(s), s && n(t);
		}
	};
}
function A(s, t, e) {
	let { text: a = '' } = t,
		{ url: l = '' } = t,
		{ is_submit: c = !1 } = t,
		{ target: n = !1 } = t,
		{ variante: i = 0 } = t,
		{ valorinput: o = 'input' } = t;
	return (
		(s.$$set = (s) => {
			'text' in s && e(0, (a = s.text)),
				'url' in s && e(1, (l = s.url)),
				'is_submit' in s && e(2, (c = s.is_submit)),
				'target' in s && e(3, (n = s.target)),
				'variante' in s && e(4, (i = s.variante)),
				'valorinput' in s && e(5, (o = s.valorinput));
		}),
		[
			a,
			l,
			c,
			n,
			i,
			o,
			[
				'Button_0',
				'Button_1',
				'Button_2',
				'Button_3',
				'Button_4',
				'Button_5',
				'Button_6',
				'Button_7',
				'Button_8'
			],
			function (t) {
				r(s, t);
			},
			function (t) {
				r(s, t);
			}
		]
	);
}
class C extends s {
	constructor(s) {
		super(),
			t(this, s, A, k, e, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
const F = (s) => ({}),
	H = (s) => ({}),
	N = (s) => ({}),
	O = (s) => ({}),
	P = (s) => ({}),
	T = (s) => ({}),
	q = (s) => ({}),
	U = (s) => ({}),
	w = (s) => ({}),
	M = (s) => ({}),
	L = (s) => ({}),
	J = (s) => ({}),
	K = (s) => ({}),
	Q = (s) => ({}),
	R = (s) => ({}),
	W = (s) => ({}),
	X = (s) => ({}),
	Y = (s) => ({}),
	Z = (s) => ({}),
	ss = (s) => ({}),
	ts = (s) => ({}),
	es = (s) => ({}),
	as = (s) => ({}),
	ls = (s) => ({}),
	cs = (s) => ({}),
	ns = (s) => ({});
function rs(s) {
	let t;
	return {
		c() {
			t = o('"define un tipo de layout"');
		},
		l(s) {
			t = v(s, '"define un tipo de layout"');
		},
		m(s, e) {
			l(s, t, e);
		},
		p: c,
		i: c,
		o: c,
		d(s) {
			s && n(t);
		}
	};
}
function is(s) {
	let t, e, a, c, r, o, v, f, m, b, _, D;
	const $ = s[4]._3x3,
		G = I($, s, s[3], M),
		j = s[4]._5x5,
		z = I(j, s, s[3], U),
		S = s[4]._8x8,
		k = I(S, s, s[3], T),
		A = s[4]._2x2,
		C = I(A, s, s[3], O),
		L = s[4]._1x1,
		J = I(L, s, s[3], H);
	return {
		c() {
			(t = i('div')),
				(e = i('div')),
				G && G.c(),
				(a = y()),
				(c = i('div')),
				z && z.c(),
				(r = y()),
				(o = i('div')),
				k && k.c(),
				(v = y()),
				(f = i('div')),
				C && C.c(),
				(m = y()),
				(b = i('div')),
				J && J.c(),
				this.h();
		},
		l(s) {
			t = u(s, 'DIV', { class: !0 });
			var l = d(t);
			e = u(l, 'DIV', { class: !0 });
			var i = d(e);
			G && G.l(i), i.forEach(n), (a = V(l)), (c = u(l, 'DIV', { class: !0 }));
			var h = d(c);
			z && z.l(h), h.forEach(n), (r = V(l)), (o = u(l, 'DIV', { class: !0 }));
			var p = d(o);
			k && k.l(p), p.forEach(n), (v = V(l)), (f = u(l, 'DIV', { class: !0 }));
			var g = d(f);
			C && C.l(g), g.forEach(n), (m = V(l)), (b = u(l, 'DIV', { class: !0 }));
			var _ = d(b);
			J && J.l(_), _.forEach(n), l.forEach(n), this.h();
		},
		h() {
			h(e, 'class', '_3x3 svelte-18nceg9'),
				h(c, 'class', '_5x5 svelte-18nceg9'),
				h(o, 'class', '_8x8 svelte-18nceg9'),
				h(f, 'class', '_2x2 svelte-18nceg9'),
				h(b, 'class', '_1x1 svelte-18nceg9'),
				h(t, 'class', (_ = p(s[2][s[1]]) + ' svelte-18nceg9'));
		},
		m(s, n) {
			l(s, t, n),
				g(t, e),
				G && G.m(e, null),
				g(t, a),
				g(t, c),
				z && z.m(c, null),
				g(t, r),
				g(t, o),
				k && k.m(o, null),
				g(t, v),
				g(t, f),
				C && C.m(f, null),
				g(t, m),
				g(t, b),
				J && J.m(b, null),
				(D = !0);
		},
		p(s, e) {
			G && G.p && 8 & e && B(G, $, s, s[3], e, w, M),
				z && z.p && 8 & e && B(z, j, s, s[3], e, q, U),
				k && k.p && 8 & e && B(k, S, s, s[3], e, P, T),
				C && C.p && 8 & e && B(C, A, s, s[3], e, N, O),
				J && J.p && 8 & e && B(J, L, s, s[3], e, F, H),
				(!D || (2 & e && _ !== (_ = p(s[2][s[1]]) + ' svelte-18nceg9'))) && h(t, 'class', _);
		},
		i(s) {
			D || (E(G, s), E(z, s), E(k, s), E(C, s), E(J, s), (D = !0));
		},
		o(s) {
			x(G, s), x(z, s), x(k, s), x(C, s), x(J, s), (D = !1);
		},
		d(s) {
			s && n(t), G && G.d(s), z && z.d(s), k && k.d(s), C && C.d(s), J && J.d(s);
		}
	};
}
function os(s) {
	let t, e, a, c, r, o, v, f, m, b, _, D, $, G, j, z;
	const S = s[4].default,
		k = I(S, s, s[3], null),
		A = s[4].subarea1,
		C = I(A, s, s[3], es),
		F = s[4].subarea2,
		H = I(F, s, s[3], ss),
		N = s[4].subarea3,
		O = I(N, s, s[3], Y),
		P = s[4].subarea4,
		T = I(P, s, s[3], W),
		q = s[4].subarea5,
		U = I(q, s, s[3], Q),
		w = s[4].subarea6,
		M = I(w, s, s[3], J);
	return {
		c() {
			(t = i('div')),
				(e = i('div')),
				k && k.c(),
				(a = y()),
				(c = i('div')),
				C && C.c(),
				(r = y()),
				(o = i('div')),
				H && H.c(),
				(v = y()),
				(f = i('div')),
				O && O.c(),
				(m = y()),
				(b = i('div')),
				T && T.c(),
				(_ = y()),
				(D = i('div')),
				U && U.c(),
				($ = y()),
				(G = i('div')),
				M && M.c(),
				this.h();
		},
		l(s) {
			t = u(s, 'DIV', { class: !0 });
			var l = d(t);
			e = u(l, 'DIV', { class: !0 });
			var i = d(e);
			k && k.l(i), i.forEach(n), (a = V(l)), (c = u(l, 'DIV', { class: !0 }));
			var h = d(c);
			C && C.l(h), h.forEach(n), (r = V(l)), (o = u(l, 'DIV', { class: !0 }));
			var p = d(o);
			H && H.l(p), p.forEach(n), (v = V(l)), (f = u(l, 'DIV', { class: !0 }));
			var g = d(f);
			O && O.l(g), g.forEach(n), (m = V(l)), (b = u(l, 'DIV', { class: !0 }));
			var x = d(b);
			T && T.l(x), x.forEach(n), (_ = V(l)), (D = u(l, 'DIV', { class: !0 }));
			var E = d(D);
			U && U.l(E), E.forEach(n), ($ = V(l)), (G = u(l, 'DIV', { class: !0 }));
			var I = d(G);
			M && M.l(I), I.forEach(n), l.forEach(n), this.h();
		},
		h() {
			h(e, 'class', 'subarea a svelte-18nceg9'),
				h(c, 'class', 'subarea b svelte-18nceg9'),
				h(o, 'class', 'subarea c svelte-18nceg9'),
				h(f, 'class', 'subarea d svelte-18nceg9'),
				h(b, 'class', 'subarea e svelte-18nceg9'),
				h(D, 'class', 'subarea f svelte-18nceg9'),
				h(G, 'class', 'subarea g svelte-18nceg9'),
				h(t, 'class', (j = p(s[2][s[1]]) + ' svelte-18nceg9'));
		},
		m(s, n) {
			l(s, t, n),
				g(t, e),
				k && k.m(e, null),
				g(t, a),
				g(t, c),
				C && C.m(c, null),
				g(t, r),
				g(t, o),
				H && H.m(o, null),
				g(t, v),
				g(t, f),
				O && O.m(f, null),
				g(t, m),
				g(t, b),
				T && T.m(b, null),
				g(t, _),
				g(t, D),
				U && U.m(D, null),
				g(t, $),
				g(t, G),
				M && M.m(G, null),
				(z = !0);
		},
		p(s, e) {
			k && k.p && 8 & e && B(k, S, s, s[3], e, null, null),
				C && C.p && 8 & e && B(C, A, s, s[3], e, ts, es),
				H && H.p && 8 & e && B(H, F, s, s[3], e, Z, ss),
				O && O.p && 8 & e && B(O, N, s, s[3], e, X, Y),
				T && T.p && 8 & e && B(T, P, s, s[3], e, R, W),
				U && U.p && 8 & e && B(U, q, s, s[3], e, K, Q),
				M && M.p && 8 & e && B(M, w, s, s[3], e, L, J),
				(!z || (2 & e && j !== (j = p(s[2][s[1]]) + ' svelte-18nceg9'))) && h(t, 'class', j);
		},
		i(s) {
			z || (E(k, s), E(C, s), E(H, s), E(O, s), E(T, s), E(U, s), E(M, s), (z = !0));
		},
		o(s) {
			x(k, s), x(C, s), x(H, s), x(O, s), x(T, s), x(U, s), x(M, s), (z = !1);
		},
		d(s) {
			s && n(t),
				k && k.d(s),
				C && C.d(s),
				H && H.d(s),
				O && O.d(s),
				T && T.d(s),
				U && U.d(s),
				M && M.d(s);
		}
	};
}
function us(s) {
	let t, e, a, c, r, o, v, f;
	const m = s[4].subarea1,
		b = I(m, s, s[3], ns),
		_ = s[4].default,
		D = I(_, s, s[3], null),
		$ = s[4].subarea2,
		G = I($, s, s[3], ls);
	return {
		c() {
			(t = i('div')),
				(e = i('div')),
				b && b.c(),
				(a = y()),
				(c = i('div')),
				D && D.c(),
				(r = y()),
				(o = i('div')),
				G && G.c(),
				this.h();
		},
		l(s) {
			t = u(s, 'DIV', { class: !0 });
			var l = d(t);
			e = u(l, 'DIV', { class: !0 });
			var i = d(e);
			b && b.l(i), i.forEach(n), (a = V(l)), (c = u(l, 'DIV', { class: !0 }));
			var v = d(c);
			D && D.l(v), v.forEach(n), (r = V(l)), (o = u(l, 'DIV', { class: !0 }));
			var h = d(o);
			G && G.l(h), h.forEach(n), l.forEach(n), this.h();
		},
		h() {
			h(e, 'class', 'svelte-18nceg9'),
				h(c, 'class', 'svelte-18nceg9'),
				h(o, 'class', 'svelte-18nceg9'),
				h(t, 'class', (v = p(s[2][s[1]]) + ' svelte-18nceg9'));
		},
		m(s, n) {
			l(s, t, n),
				g(t, e),
				b && b.m(e, null),
				g(t, a),
				g(t, c),
				D && D.m(c, null),
				g(t, r),
				g(t, o),
				G && G.m(o, null),
				(f = !0);
		},
		p(s, e) {
			b && b.p && 8 & e && B(b, m, s, s[3], e, cs, ns),
				D && D.p && 8 & e && B(D, _, s, s[3], e, null, null),
				G && G.p && 8 & e && B(G, $, s, s[3], e, as, ls),
				(!f || (2 & e && v !== (v = p(s[2][s[1]]) + ' svelte-18nceg9'))) && h(t, 'class', v);
		},
		i(s) {
			f || (E(b, s), E(D, s), E(G, s), (f = !0));
		},
		o(s) {
			x(b, s), x(D, s), x(G, s), (f = !1);
		},
		d(s) {
			s && n(t), b && b.d(s), D && D.d(s), G && G.d(s);
		}
	};
}
function ds(s) {
	let t, e, c, r;
	const i = [us, os, is, rs],
		o = [];
	function u(s, t) {
		return 0 === s[0] ? 0 : 1 === s[0] ? 1 : 2 === s[0] ? 2 : 3;
	}
	return (
		(t = u(s)),
		(e = o[t] = i[t](s)),
		{
			c() {
				e.c(), (c = a());
			},
			l(s) {
				e.l(s), (c = a());
			},
			m(s, e) {
				o[t].m(s, e), l(s, c, e), (r = !0);
			},
			p(s, [a]) {
				let l = t;
				(t = u(s)),
					t === l
						? o[t].p(s, a)
						: (_(),
						  x(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  D(),
						  (e = o[t]),
						  e ? e.p(s, a) : ((e = o[t] = i[t](s)), e.c()),
						  E(e, 1),
						  e.m(c.parentNode, c));
			},
			i(s) {
				r || (E(e), (r = !0));
			},
			o(s) {
				x(e), (r = !1);
			},
			d(s) {
				o[t].d(s), s && n(c);
			}
		}
	);
}
function vs(s, t, e) {
	let { $$slots: a = {}, $$scope: l } = t,
		{ tipo: c = 0 } = t,
		{ variante: n = 0 } = t;
	return (
		(s.$$set = (s) => {
			'tipo' in s && e(0, (c = s.tipo)),
				'variante' in s && e(1, (n = s.variante)),
				'$$scope' in s && e(3, (l = s.$$scope));
		}),
		[
			c,
			n,
			['Grid_0', 'Grid_1', 'Grid_2', 'Grid_3', 'Grid_4', 'Grid_5', 'Grid_6', 'Grid_7', 'Grid_8'],
			l,
			a
		]
	);
}
class hs extends s {
	constructor(s) {
		super(), t(this, s, vs, ds, e, { tipo: 0, variante: 1 });
	}
}
export { C as B, hs as G, $ as c };
