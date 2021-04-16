import {
	S as t,
	i as e,
	s,
	M as a,
	e as i,
	j as n,
	c as l,
	a as r,
	d as c,
	l as o,
	o as u,
	I as d,
	f as p,
	g as h,
	O as v,
	w as m,
	x as g,
	k as b,
	n as f,
	F as _,
	t as x,
	b as $,
	G as E,
	H as w,
	h as T,
	Q as y,
	p as B,
	q as H,
	r as C,
	y as D,
	P as j,
	C as k,
	D as G,
	K as A
} from './index-d91e1ed8.js';
const O = [
	{
		title: '+0+1234',
		subtitle: 'Hermenéutica Holística',
		text:
			'Descifrando la Creación, en la intersección del arte, la tecnología y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexión.',
		img: './img/cover3.jpg'
	},
	{ title: 'Artwork', subtitle: '3D printed art', text: 'Obra plástica', img: './img/bg2.jpg' },
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
const S = (t) => ({}),
	I = (t) => ({}),
	M = (t) => ({}),
	P = (t) => ({});
function V(t) {
	let e, s, b, f, _, x, $, E;
	const w = t[3].subarea1,
		T = a(w, t, t[2], P),
		y = t[3].default,
		B = a(y, t, t[2], null),
		H = t[3].subarea2,
		C = a(H, t, t[2], I);
	return {
		c() {
			(e = i('div')),
				(s = i('div')),
				T && T.c(),
				(b = n()),
				(f = i('div')),
				B && B.c(),
				(_ = n()),
				(x = i('div')),
				C && C.c(),
				this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0 });
			var a = r(e);
			s = l(a, 'DIV', { class: !0 });
			var i = r(s);
			T && T.l(i), i.forEach(c), (b = o(a)), (f = l(a, 'DIV', { class: !0 }));
			var n = r(f);
			B && B.l(n), n.forEach(c), (_ = o(a)), (x = l(a, 'DIV', { class: !0 }));
			var u = r(x);
			C && C.l(u), u.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(s, 'class', 'svelte-gpunpp'),
				u(f, 'class', 'svelte-gpunpp'),
				u(x, 'class', 'svelte-gpunpp'),
				u(e, 'class', ($ = d(t[1][t[0]]) + ' svelte-gpunpp'));
		},
		m(t, a) {
			p(t, e, a),
				h(e, s),
				T && T.m(s, null),
				h(e, b),
				h(e, f),
				B && B.m(f, null),
				h(e, _),
				h(e, x),
				C && C.m(x, null),
				(E = !0);
		},
		p(t, [s]) {
			T && T.p && 4 & s && v(T, w, t, t[2], s, M, P),
				B && B.p && 4 & s && v(B, y, t, t[2], s, null, null),
				C && C.p && 4 & s && v(C, H, t, t[2], s, S, I),
				(!E || (1 & s && $ !== ($ = d(t[1][t[0]]) + ' svelte-gpunpp'))) && u(e, 'class', $);
		},
		i(t) {
			E || (m(T, t), m(B, t), m(C, t), (E = !0));
		},
		o(t) {
			g(T, t), g(B, t), g(C, t), (E = !1);
		},
		d(t) {
			t && c(e), T && T.d(t), B && B.d(t), C && C.d(t);
		}
	};
}
function q(t, e, s) {
	let { $$slots: a = {}, $$scope: i } = e,
		{ variante: n = 0 } = e;
	return (
		(t.$$set = (t) => {
			'variante' in t && s(0, (n = t.variante)), '$$scope' in t && s(2, (i = t.$$scope));
		}),
		[n, ['Grid_0', 'Grid_1', 'Grid_2', 'Grid_3', 'Grid_4', 'Grid_5'], i, a]
	);
}
class F extends t {
	constructor(t) {
		super(), e(this, t, q, V, s, { variante: 0 });
	}
}
function N(t) {
	let e, s, a, n, o;
	return {
		c() {
			(e = i('button')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = l(a, 'BUTTON', { class: !0 });
			var i = r(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1bp600d')), E(e, 'not-clickable', '' == t[5]);
		},
		m(a, i) {
			p(a, e, i), h(e, s), n || ((o = w(e, 'click', t[8])), (n = !0));
		},
		p(t, i) {
			1 & i && T(s, t[0]),
				80 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1bp600d') && u(e, 'class', a),
				112 & i && E(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && c(e), (n = !1), o();
		}
	};
}
function L(t) {
	let e, s, a, n, o;
	return {
		c() {
			(e = i('button')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = l(a, 'BUTTON', { type: !0, class: !0 });
			var i = r(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'type', 'submit'), u(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1bp600d'));
		},
		m(a, i) {
			p(a, e, i), h(e, s), n || ((o = w(e, 'click', t[7])), (n = !0));
		},
		p(t, i) {
			1 & i && T(s, t[0]),
				80 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1bp600d') && u(e, 'class', a);
		},
		d(t) {
			t && c(e), (n = !1), o();
		}
	};
}
function U(t) {
	let e, s, a;
	return {
		c() {
			(e = i('a')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = l(a, 'A', { class: !0, href: !0 });
			var i = r(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-1bp600d')), u(e, 'href', t[1]);
		},
		m(t, a) {
			p(t, e, a), h(e, s);
		},
		p(t, i) {
			1 & i && T(s, t[0]),
				80 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-1bp600d') && u(e, 'class', a),
				2 & i && u(e, 'href', t[1]);
		},
		d(t) {
			t && c(e);
		}
	};
}
function R(t) {
	let e, s, a;
	return {
		c() {
			(e = i('a')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = l(a, 'A', { class: !0, href: !0, target: !0 });
			var i = r(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-1bp600d')),
				u(e, 'href', t[1]),
				u(e, 'target', t[3]);
		},
		m(t, a) {
			p(t, e, a), h(e, s);
		},
		p(t, i) {
			1 & i && T(s, t[0]),
				80 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-1bp600d') && u(e, 'class', a),
				2 & i && u(e, 'href', t[1]),
				8 & i && u(e, 'target', t[3]);
		},
		d(t) {
			t && c(e);
		}
	};
}
function z(t) {
	let e;
	function s(t, e) {
		return t[3] ? R : !t[3] && t[1] ? U : t[2] ? L : N;
	}
	let a = s(t),
		i = a(t);
	return {
		c() {
			i.c(), (e = b());
		},
		l(t) {
			i.l(t), (e = b());
		},
		m(t, s) {
			i.m(t, s), p(t, e, s);
		},
		p(t, [n]) {
			a === (a = s(t)) && i ? i.p(t, n) : (i.d(1), (i = a(t)), i && (i.c(), i.m(e.parentNode, e)));
		},
		i: f,
		o: f,
		d(t) {
			i.d(t), t && c(e);
		}
	};
}
function K(t, e, s) {
	let a,
		{ text: i = '' } = e,
		{ url: n = '' } = e,
		{ is_submit: l = !1 } = e,
		{ target: r = !1 } = e,
		{ variante: c = 0 } = e,
		{ valorinput: o = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (i = t.text)),
				'url' in t && s(1, (n = t.url)),
				'is_submit' in t && s(2, (l = t.is_submit)),
				'target' in t && s(3, (r = t.target)),
				'variante' in t && s(4, (c = t.variante)),
				'valorinput' in t && s(5, (o = t.valorinput));
		}),
		s(
			6,
			(a = [
				'Button_0',
				'Button_1',
				'Button_2',
				'Button_3',
				'Button_4',
				'Button_5',
				'Button_6',
				'Button_7'
			])
		),
		[
			i,
			n,
			l,
			r,
			c,
			o,
			a,
			function (e) {
				_(t, e);
			},
			function (e) {
				_(t, e);
			}
		]
	);
}
class Q extends t {
	constructor(t) {
		super(),
			e(this, t, K, z, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
function W(t) {
	let e, s;
	return (
		(e = new Q({ props: { variante: 5, text: 'ᐯ' } })),
		{
			c() {
				B(e.$$.fragment);
			},
			l(t) {
				H(e.$$.fragment, t);
			},
			m(t, a) {
				C(e, t, a), (s = !0);
			},
			i(t) {
				s || (m(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				g(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function X(t) {
	let e,
		s,
		a,
		v,
		b,
		f,
		_,
		B,
		H,
		C,
		D,
		O,
		S,
		I,
		M,
		P,
		V,
		q,
		F = !1,
		N = () => {
			F = !1;
		};
	y(t[11]), y(t[12]);
	let L = t[5] && W();
	return {
		c() {
			(s = i('header')),
				(a = i('h1')),
				(v = x(t[0])),
				(b = n()),
				(f = i('br')),
				(_ = n()),
				(B = i('span')),
				(H = i('h2')),
				(C = n()),
				(D = i('div')),
				(O = i('p')),
				(S = x(t[2])),
				(I = n()),
				L && L.c(),
				this.h();
		},
		l(e) {
			s = l(e, 'HEADER', { class: !0, style: !0 });
			var i = r(s);
			a = l(i, 'H1', { class: !0 });
			var n = r(a);
			(v = $(n, t[0])),
				(b = o(n)),
				(f = l(n, 'BR', { class: !0 })),
				(_ = o(n)),
				(B = l(n, 'SPAN', { class: !0 }));
			var u = r(B);
			(H = l(u, 'H2', { class: !0 })),
				r(H).forEach(c),
				u.forEach(c),
				n.forEach(c),
				(C = o(i)),
				(D = l(i, 'DIV', { class: !0 }));
			var d = r(D);
			O = l(d, 'P', { class: !0 });
			var p = r(O);
			(S = $(p, t[2])), p.forEach(c), (I = o(d)), L && L.l(d), d.forEach(c), i.forEach(c), this.h();
		},
		h() {
			u(f, 'class', 'svelte-dbdih0'),
				u(H, 'class', 'CoverSubTitle svelte-dbdih0'),
				u(B, 'class', 'svelte-dbdih0'),
				u(a, 'class', 'CoverTitle svelte-dbdih0'),
				u(O, 'class', 'svelte-dbdih0'),
				u(D, 'class', 'CoverText svelte-dbdih0'),
				u(s, 'class', (M = d(t[10][t[6]]) + ' svelte-dbdih0')),
				j(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				j(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				E(s, 'is_home', t[4]);
		},
		m(i, n) {
			p(i, s, n),
				h(s, a),
				h(a, v),
				h(a, b),
				h(a, f),
				h(a, _),
				h(a, B),
				h(B, H),
				(H.innerHTML = t[1]),
				h(s, C),
				h(s, D),
				h(D, O),
				h(O, S),
				h(D, I),
				L && L.m(D, null),
				(P = !0),
				V ||
					((q = [
						w(window, 'resize', t[11]),
						w(window, 'scroll', () => {
							(F = !0), clearTimeout(e), (e = setTimeout(N, 100)), t[12]();
						})
					]),
					(V = !0));
		},
		p(t, [a]) {
			512 & a &&
				!F &&
				((F = !0), clearTimeout(e), scrollTo(window.pageXOffset, t[9]), (e = setTimeout(N, 100))),
				(!P || 1 & a) && T(v, t[0]),
				(!P || 2 & a) && (H.innerHTML = t[1]),
				(!P || 4 & a) && T(S, t[2]),
				t[5]
					? L
						? 32 & a && m(L, 1)
						: ((L = W()), L.c(), m(L, 1), L.m(D, null))
					: L &&
					  (k(),
					  g(L, 1, 1, () => {
							L = null;
					  }),
					  G()),
				(!P || (64 & a && M !== (M = d(t[10][t[6]]) + ' svelte-dbdih0'))) && u(s, 'class', M),
				(!P || 768 & a) && j(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				(!P || 152 & a) &&
					j(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				80 & a && E(s, 'is_home', t[4]);
		},
		i(t) {
			P || (m(L), (P = !0));
		},
		o(t) {
			g(L), (P = !1);
		},
		d(t) {
			t && c(s), L && L.d(), (V = !1), A(q);
		}
	};
}
function Y(t, e, s) {
	let { title: a = '' } = e,
		{ subtitle: i = '' } = e,
		{ text: n = '' } = e,
		{ img: l = '' } = e,
		{ is_home: r = !1 } = e,
		{ is_products_page: c = !1 } = e,
		{ variante: o = 0 } = e;
	let u, d, p;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (a = t.title)),
				'subtitle' in t && s(1, (i = t.subtitle)),
				'text' in t && s(2, (n = t.text)),
				'img' in t && s(3, (l = t.img)),
				'is_home' in t && s(4, (r = t.is_home)),
				'is_products_page' in t && s(5, (c = t.is_products_page)),
				'variante' in t && s(6, (o = t.variante));
		}),
		[
			a,
			i,
			n,
			l,
			r,
			c,
			o,
			u,
			d,
			p,
			['Cover_0', 'Cover_1', 'Cover_2'],
			function () {
				s(7, (u = window.innerWidth)), s(8, (d = window.innerHeight));
			},
			function () {
				s(9, (p = window.pageYOffset));
			}
		]
	);
}
class J extends t {
	constructor(t) {
		super(),
			e(this, t, Y, X, s, {
				title: 0,
				subtitle: 1,
				text: 2,
				img: 3,
				is_home: 4,
				is_products_page: 5,
				variante: 6
			});
	}
}
export { Q as B, J as C, F as G, O as c };
