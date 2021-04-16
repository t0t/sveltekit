import {
	S as t,
	i as s,
	s as a,
	k as e,
	f as l,
	n as r,
	d as c,
	F as i,
	e as n,
	t as o,
	c as u,
	a as d,
	b as v,
	o as m,
	I as h,
	G as p,
	g as f,
	H as b,
	h as g,
	C as _,
	x as j,
	D as x,
	w as q,
	M as D,
	j as E,
	l as I,
	O as y
} from './index-d91e1ed8.js';
import './Header-cc4c0be9.js';
const V = [
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
function B(t) {
	let s, a, e, r, i;
	return {
		c() {
			(s = n('button')), (a = o(t[0])), this.h();
		},
		l(e) {
			s = u(e, 'BUTTON', { class: !0 });
			var l = d(s);
			(a = v(l, t[0])), l.forEach(c), this.h();
		},
		h() {
			m(s, 'class', (e = h(t[6][t[4]]) + ' svelte-10uymh2')), p(s, 'not-clickable', '' == t[5]);
		},
		m(e, c) {
			l(e, s, c), f(s, a), r || ((i = b(s, 'click', t[8])), (r = !0));
		},
		p(t, l) {
			1 & l && g(a, t[0]),
				16 & l && e !== (e = h(t[6][t[4]]) + ' svelte-10uymh2') && m(s, 'class', e),
				48 & l && p(s, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && c(s), (r = !1), i();
		}
	};
}
function $(t) {
	let s, a, e, r, i;
	return {
		c() {
			(s = n('button')), (a = o(t[0])), this.h();
		},
		l(e) {
			s = u(e, 'BUTTON', { type: !0, class: !0 });
			var l = d(s);
			(a = v(l, t[0])), l.forEach(c), this.h();
		},
		h() {
			m(s, 'type', 'submit'), m(s, 'class', (e = h(t[6][t[4]]) + ' svelte-10uymh2'));
		},
		m(e, c) {
			l(e, s, c), f(s, a), r || ((i = b(s, 'click', t[7])), (r = !0));
		},
		p(t, l) {
			1 & l && g(a, t[0]),
				16 & l && e !== (e = h(t[6][t[4]]) + ' svelte-10uymh2') && m(s, 'class', e);
		},
		d(t) {
			t && c(s), (r = !1), i();
		}
	};
}
function G(t) {
	let s, a, e;
	return {
		c() {
			(s = n('a')), (a = o(t[0])), this.h();
		},
		l(e) {
			s = u(e, 'A', { class: !0, href: !0 });
			var l = d(s);
			(a = v(l, t[0])), l.forEach(c), this.h();
		},
		h() {
			m(s, 'class', (e = 'button ' + t[6][t[4]] + ' svelte-10uymh2')), m(s, 'href', t[1]);
		},
		m(t, e) {
			l(t, s, e), f(s, a);
		},
		p(t, l) {
			1 & l && g(a, t[0]),
				16 & l && e !== (e = 'button ' + t[6][t[4]] + ' svelte-10uymh2') && m(s, 'class', e),
				2 & l && m(s, 'href', t[1]);
		},
		d(t) {
			t && c(s);
		}
	};
}
function S(t) {
	let s, a, e;
	return {
		c() {
			(s = n('a')), (a = o(t[0])), this.h();
		},
		l(e) {
			s = u(e, 'A', { class: !0, href: !0, target: !0 });
			var l = d(s);
			(a = v(l, t[0])), l.forEach(c), this.h();
		},
		h() {
			m(s, 'class', (e = 'button ' + t[6][t[4]] + ' svelte-10uymh2')),
				m(s, 'href', t[1]),
				m(s, 'target', t[3]);
		},
		m(t, e) {
			l(t, s, e), f(s, a);
		},
		p(t, l) {
			1 & l && g(a, t[0]),
				16 & l && e !== (e = 'button ' + t[6][t[4]] + ' svelte-10uymh2') && m(s, 'class', e),
				2 & l && m(s, 'href', t[1]),
				8 & l && m(s, 'target', t[3]);
		},
		d(t) {
			t && c(s);
		}
	};
}
function k(t) {
	let s;
	function a(t, s) {
		return t[3] ? S : !t[3] && t[1] ? G : t[2] ? $ : B;
	}
	let i = a(t),
		n = i(t);
	return {
		c() {
			n.c(), (s = e());
		},
		l(t) {
			n.l(t), (s = e());
		},
		m(t, a) {
			n.m(t, a), l(t, s, a);
		},
		p(t, [e]) {
			i === (i = a(t)) && n ? n.p(t, e) : (n.d(1), (n = i(t)), n && (n.c(), n.m(s.parentNode, s)));
		},
		i: r,
		o: r,
		d(t) {
			n.d(t), t && c(s);
		}
	};
}
function A(t, s, a) {
	let { text: e = '' } = s,
		{ url: l = '' } = s,
		{ is_submit: r = !1 } = s,
		{ target: c = !1 } = s,
		{ variante: n = 0 } = s,
		{ valorinput: o = 'input' } = s;
	return (
		(t.$$set = (t) => {
			'text' in t && a(0, (e = t.text)),
				'url' in t && a(1, (l = t.url)),
				'is_submit' in t && a(2, (r = t.is_submit)),
				'target' in t && a(3, (c = t.target)),
				'variante' in t && a(4, (n = t.variante)),
				'valorinput' in t && a(5, (o = t.valorinput));
		}),
		[
			e,
			l,
			r,
			c,
			n,
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
			function (s) {
				i(t, s);
			},
			function (s) {
				i(t, s);
			}
		]
	);
}
class C extends t {
	constructor(t) {
		super(),
			s(this, t, A, k, a, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
const F = (t) => ({}),
	H = (t) => ({}),
	N = (t) => ({}),
	O = (t) => ({}),
	P = (t) => ({}),
	T = (t) => ({}),
	U = (t) => ({}),
	w = (t) => ({}),
	M = (t) => ({}),
	z = (t) => ({}),
	L = (t) => ({}),
	J = (t) => ({}),
	K = (t) => ({}),
	Q = (t) => ({}),
	R = (t) => ({}),
	W = (t) => ({}),
	X = (t) => ({}),
	Y = (t) => ({}),
	Z = (t) => ({}),
	tt = (t) => ({}),
	st = (t) => ({}),
	at = (t) => ({}),
	et = (t) => ({}),
	lt = (t) => ({}),
	rt = (t) => ({}),
	ct = (t) => ({});
function it(t) {
	let s;
	return {
		c() {
			s = o('"define un tipo de layout"');
		},
		l(t) {
			s = v(t, '"define un tipo de layout"');
		},
		m(t, a) {
			l(t, s, a);
		},
		p: r,
		i: r,
		o: r,
		d(t) {
			t && c(s);
		}
	};
}
function nt(t) {
	let s, a, e, r, i, o, v, p, b, g, _, x;
	const V = t[4]._3x3,
		B = D(V, t, t[3], z),
		$ = t[4]._5x5,
		G = D($, t, t[3], w),
		S = t[4]._8x8,
		k = D(S, t, t[3], T),
		A = t[4]._2x2,
		C = D(A, t, t[3], O),
		L = t[4]._1x1,
		J = D(L, t, t[3], H);
	return {
		c() {
			(s = n('div')),
				(a = n('div')),
				B && B.c(),
				(e = E()),
				(r = n('div')),
				G && G.c(),
				(i = E()),
				(o = n('div')),
				k && k.c(),
				(v = E()),
				(p = n('div')),
				C && C.c(),
				(b = E()),
				(g = n('div')),
				J && J.c(),
				this.h();
		},
		l(t) {
			s = u(t, 'DIV', { class: !0 });
			var l = d(s);
			a = u(l, 'DIV', { class: !0 });
			var n = d(a);
			B && B.l(n), n.forEach(c), (e = I(l)), (r = u(l, 'DIV', { class: !0 }));
			var m = d(r);
			G && G.l(m), m.forEach(c), (i = I(l)), (o = u(l, 'DIV', { class: !0 }));
			var h = d(o);
			k && k.l(h), h.forEach(c), (v = I(l)), (p = u(l, 'DIV', { class: !0 }));
			var f = d(p);
			C && C.l(f), f.forEach(c), (b = I(l)), (g = u(l, 'DIV', { class: !0 }));
			var _ = d(g);
			J && J.l(_), _.forEach(c), l.forEach(c), this.h();
		},
		h() {
			m(a, 'class', '_3x3 svelte-1jmtr8q'),
				m(r, 'class', '_5x5 svelte-1jmtr8q'),
				m(o, 'class', '_8x8 svelte-1jmtr8q'),
				m(p, 'class', '_2x2 svelte-1jmtr8q'),
				m(g, 'class', '_1x1 svelte-1jmtr8q'),
				m(s, 'class', (_ = h(t[2][t[1]]) + ' svelte-1jmtr8q'));
		},
		m(t, c) {
			l(t, s, c),
				f(s, a),
				B && B.m(a, null),
				f(s, e),
				f(s, r),
				G && G.m(r, null),
				f(s, i),
				f(s, o),
				k && k.m(o, null),
				f(s, v),
				f(s, p),
				C && C.m(p, null),
				f(s, b),
				f(s, g),
				J && J.m(g, null),
				(x = !0);
		},
		p(t, a) {
			B && B.p && 8 & a && y(B, V, t, t[3], a, M, z),
				G && G.p && 8 & a && y(G, $, t, t[3], a, U, w),
				k && k.p && 8 & a && y(k, S, t, t[3], a, P, T),
				C && C.p && 8 & a && y(C, A, t, t[3], a, N, O),
				J && J.p && 8 & a && y(J, L, t, t[3], a, F, H),
				(!x || (2 & a && _ !== (_ = h(t[2][t[1]]) + ' svelte-1jmtr8q'))) && m(s, 'class', _);
		},
		i(t) {
			x || (q(B, t), q(G, t), q(k, t), q(C, t), q(J, t), (x = !0));
		},
		o(t) {
			j(B, t), j(G, t), j(k, t), j(C, t), j(J, t), (x = !1);
		},
		d(t) {
			t && c(s), B && B.d(t), G && G.d(t), k && k.d(t), C && C.d(t), J && J.d(t);
		}
	};
}
function ot(t) {
	let s, a, e, r, i, o, v, p, b, g, _, x, V, B, $, G;
	const S = t[4].default,
		k = D(S, t, t[3], null),
		A = t[4].subarea1,
		C = D(A, t, t[3], at),
		F = t[4].subarea2,
		H = D(F, t, t[3], tt),
		N = t[4].subarea3,
		O = D(N, t, t[3], Y),
		P = t[4].subarea4,
		T = D(P, t, t[3], W),
		U = t[4].subarea5,
		w = D(U, t, t[3], Q),
		M = t[4].subarea6,
		z = D(M, t, t[3], J);
	return {
		c() {
			(s = n('div')),
				(a = n('div')),
				k && k.c(),
				(e = E()),
				(r = n('div')),
				C && C.c(),
				(i = E()),
				(o = n('div')),
				H && H.c(),
				(v = E()),
				(p = n('div')),
				O && O.c(),
				(b = E()),
				(g = n('div')),
				T && T.c(),
				(_ = E()),
				(x = n('div')),
				w && w.c(),
				(V = E()),
				(B = n('div')),
				z && z.c(),
				this.h();
		},
		l(t) {
			s = u(t, 'DIV', { class: !0 });
			var l = d(s);
			a = u(l, 'DIV', { class: !0 });
			var n = d(a);
			k && k.l(n), n.forEach(c), (e = I(l)), (r = u(l, 'DIV', { class: !0 }));
			var m = d(r);
			C && C.l(m), m.forEach(c), (i = I(l)), (o = u(l, 'DIV', { class: !0 }));
			var h = d(o);
			H && H.l(h), h.forEach(c), (v = I(l)), (p = u(l, 'DIV', { class: !0 }));
			var f = d(p);
			O && O.l(f), f.forEach(c), (b = I(l)), (g = u(l, 'DIV', { class: !0 }));
			var j = d(g);
			T && T.l(j), j.forEach(c), (_ = I(l)), (x = u(l, 'DIV', { class: !0 }));
			var q = d(x);
			w && w.l(q), q.forEach(c), (V = I(l)), (B = u(l, 'DIV', { class: !0 }));
			var D = d(B);
			z && z.l(D), D.forEach(c), l.forEach(c), this.h();
		},
		h() {
			m(a, 'class', 'subarea a svelte-1jmtr8q'),
				m(r, 'class', 'subarea b svelte-1jmtr8q'),
				m(o, 'class', 'subarea c svelte-1jmtr8q'),
				m(p, 'class', 'subarea d svelte-1jmtr8q'),
				m(g, 'class', 'subarea e svelte-1jmtr8q'),
				m(x, 'class', 'subarea f svelte-1jmtr8q'),
				m(B, 'class', 'subarea g svelte-1jmtr8q'),
				m(s, 'class', ($ = h(t[2][t[1]]) + ' svelte-1jmtr8q'));
		},
		m(t, c) {
			l(t, s, c),
				f(s, a),
				k && k.m(a, null),
				f(s, e),
				f(s, r),
				C && C.m(r, null),
				f(s, i),
				f(s, o),
				H && H.m(o, null),
				f(s, v),
				f(s, p),
				O && O.m(p, null),
				f(s, b),
				f(s, g),
				T && T.m(g, null),
				f(s, _),
				f(s, x),
				w && w.m(x, null),
				f(s, V),
				f(s, B),
				z && z.m(B, null),
				(G = !0);
		},
		p(t, a) {
			k && k.p && 8 & a && y(k, S, t, t[3], a, null, null),
				C && C.p && 8 & a && y(C, A, t, t[3], a, st, at),
				H && H.p && 8 & a && y(H, F, t, t[3], a, Z, tt),
				O && O.p && 8 & a && y(O, N, t, t[3], a, X, Y),
				T && T.p && 8 & a && y(T, P, t, t[3], a, R, W),
				w && w.p && 8 & a && y(w, U, t, t[3], a, K, Q),
				z && z.p && 8 & a && y(z, M, t, t[3], a, L, J),
				(!G || (2 & a && $ !== ($ = h(t[2][t[1]]) + ' svelte-1jmtr8q'))) && m(s, 'class', $);
		},
		i(t) {
			G || (q(k, t), q(C, t), q(H, t), q(O, t), q(T, t), q(w, t), q(z, t), (G = !0));
		},
		o(t) {
			j(k, t), j(C, t), j(H, t), j(O, t), j(T, t), j(w, t), j(z, t), (G = !1);
		},
		d(t) {
			t && c(s),
				k && k.d(t),
				C && C.d(t),
				H && H.d(t),
				O && O.d(t),
				T && T.d(t),
				w && w.d(t),
				z && z.d(t);
		}
	};
}
function ut(t) {
	let s, a, e, r, i, o, v, p;
	const b = t[4].subarea1,
		g = D(b, t, t[3], ct),
		_ = t[4].default,
		x = D(_, t, t[3], null),
		V = t[4].subarea2,
		B = D(V, t, t[3], lt);
	return {
		c() {
			(s = n('div')),
				(a = n('div')),
				g && g.c(),
				(e = E()),
				(r = n('div')),
				x && x.c(),
				(i = E()),
				(o = n('div')),
				B && B.c(),
				this.h();
		},
		l(t) {
			s = u(t, 'DIV', { class: !0 });
			var l = d(s);
			a = u(l, 'DIV', { class: !0 });
			var n = d(a);
			g && g.l(n), n.forEach(c), (e = I(l)), (r = u(l, 'DIV', { class: !0 }));
			var v = d(r);
			x && x.l(v), v.forEach(c), (i = I(l)), (o = u(l, 'DIV', { class: !0 }));
			var m = d(o);
			B && B.l(m), m.forEach(c), l.forEach(c), this.h();
		},
		h() {
			m(a, 'class', 'svelte-1jmtr8q'),
				m(r, 'class', 'svelte-1jmtr8q'),
				m(o, 'class', 'svelte-1jmtr8q'),
				m(s, 'class', (v = h(t[2][t[1]]) + ' svelte-1jmtr8q'));
		},
		m(t, c) {
			l(t, s, c),
				f(s, a),
				g && g.m(a, null),
				f(s, e),
				f(s, r),
				x && x.m(r, null),
				f(s, i),
				f(s, o),
				B && B.m(o, null),
				(p = !0);
		},
		p(t, a) {
			g && g.p && 8 & a && y(g, b, t, t[3], a, rt, ct),
				x && x.p && 8 & a && y(x, _, t, t[3], a, null, null),
				B && B.p && 8 & a && y(B, V, t, t[3], a, et, lt),
				(!p || (2 & a && v !== (v = h(t[2][t[1]]) + ' svelte-1jmtr8q'))) && m(s, 'class', v);
		},
		i(t) {
			p || (q(g, t), q(x, t), q(B, t), (p = !0));
		},
		o(t) {
			j(g, t), j(x, t), j(B, t), (p = !1);
		},
		d(t) {
			t && c(s), g && g.d(t), x && x.d(t), B && B.d(t);
		}
	};
}
function dt(t) {
	let s, a, r, i;
	const n = [ut, ot, nt, it],
		o = [];
	function u(t, s) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2 === t[0] ? 2 : 3;
	}
	return (
		(s = u(t)),
		(a = o[s] = n[s](t)),
		{
			c() {
				a.c(), (r = e());
			},
			l(t) {
				a.l(t), (r = e());
			},
			m(t, a) {
				o[s].m(t, a), l(t, r, a), (i = !0);
			},
			p(t, [e]) {
				let l = s;
				(s = u(t)),
					s === l
						? o[s].p(t, e)
						: (_(),
						  j(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  x(),
						  (a = o[s]),
						  a ? a.p(t, e) : ((a = o[s] = n[s](t)), a.c()),
						  q(a, 1),
						  a.m(r.parentNode, r));
			},
			i(t) {
				i || (q(a), (i = !0));
			},
			o(t) {
				j(a), (i = !1);
			},
			d(t) {
				o[s].d(t), t && c(r);
			}
		}
	);
}
function vt(t, s, a) {
	let { $$slots: e = {}, $$scope: l } = s,
		{ tipo: r = 0 } = s,
		{ variante: c = 0 } = s;
	return (
		(t.$$set = (t) => {
			'tipo' in t && a(0, (r = t.tipo)),
				'variante' in t && a(1, (c = t.variante)),
				'$$scope' in t && a(3, (l = t.$$scope));
		}),
		[
			r,
			c,
			['Grid_0', 'Grid_1', 'Grid_2', 'Grid_3', 'Grid_4', 'Grid_5', 'Grid_6', 'Grid_7', 'Grid_8'],
			l,
			e
		]
	);
}
class mt extends t {
	constructor(t) {
		super(), s(this, t, vt, dt, a, { tipo: 0, variante: 1 });
	}
}
export { C as B, mt as G, V as c };
