import {
	S as t,
	i as e,
	s,
	M as a,
	e as i,
	j as n,
	c as r,
	a as l,
	d as c,
	l as o,
	o as u,
	I as h,
	f as p,
	g as m,
	O as v,
	w as d,
	x as f,
	k as g,
	n as _,
	F as b,
	t as x,
	b as $,
	G as E,
	H as w,
	h as j,
	Q as z,
	p as T,
	q as B,
	r as y,
	y as C,
	P as H,
	C as D,
	D as k,
	K as G
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
	}
];
const A = (t) => ({}),
	I = (t) => ({}),
	M = (t) => ({}),
	P = (t) => ({});
function V(t) {
	let e, s, g, _, b, x, $, E;
	const w = t[3].subarea1,
		j = a(w, t, t[2], P),
		z = t[3].default,
		T = a(z, t, t[2], null),
		B = t[3].subarea2,
		y = a(B, t, t[2], I);
	return {
		c() {
			(e = i('div')),
				(s = i('div')),
				j && j.c(),
				(g = n()),
				(_ = i('div')),
				T && T.c(),
				(b = n()),
				(x = i('div')),
				y && y.c(),
				this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0 });
			var a = l(e);
			s = r(a, 'DIV', { class: !0 });
			var i = l(s);
			j && j.l(i), i.forEach(c), (g = o(a)), (_ = r(a, 'DIV', { class: !0 }));
			var n = l(_);
			T && T.l(n), n.forEach(c), (b = o(a)), (x = r(a, 'DIV', { class: !0 }));
			var u = l(x);
			y && y.l(u), u.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(s, 'class', 'svelte-18znoa8'),
				u(_, 'class', 'svelte-18znoa8'),
				u(x, 'class', 'svelte-18znoa8'),
				u(e, 'class', ($ = h(t[1][t[0]]) + ' svelte-18znoa8'));
		},
		m(t, a) {
			p(t, e, a),
				m(e, s),
				j && j.m(s, null),
				m(e, g),
				m(e, _),
				T && T.m(_, null),
				m(e, b),
				m(e, x),
				y && y.m(x, null),
				(E = !0);
		},
		p(t, [s]) {
			j && j.p && 4 & s && v(j, w, t, t[2], s, M, P),
				T && T.p && 4 & s && v(T, z, t, t[2], s, null, null),
				y && y.p && 4 & s && v(y, B, t, t[2], s, A, I),
				(!E || (1 & s && $ !== ($ = h(t[1][t[0]]) + ' svelte-18znoa8'))) && u(e, 'class', $);
		},
		i(t) {
			E || (d(j, t), d(T, t), d(y, t), (E = !0));
		},
		o(t) {
			f(j, t), f(T, t), f(y, t), (E = !1);
		},
		d(t) {
			t && c(e), j && j.d(t), T && T.d(t), y && y.d(t);
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
class N extends t {
	constructor(t) {
		super(), e(this, t, q, V, s, { variante: 0 });
	}
}
function S(t) {
	let e, s, a, n, o;
	return {
		c() {
			(e = i('button')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = r(a, 'BUTTON', { class: !0 });
			var i = l(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = h(t[6][t[4]]) + ' svelte-cczht')), E(e, 'not-clickable', '' == t[5]);
		},
		m(a, i) {
			p(a, e, i), m(e, s), n || ((o = w(e, 'click', t[8])), (n = !0));
		},
		p(t, i) {
			1 & i && j(s, t[0]),
				80 & i && a !== (a = h(t[6][t[4]]) + ' svelte-cczht') && u(e, 'class', a),
				112 & i && E(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && c(e), (n = !1), o();
		}
	};
}
function F(t) {
	let e, s, a, n, o;
	return {
		c() {
			(e = i('button')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = r(a, 'BUTTON', { type: !0, class: !0 });
			var i = l(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'type', 'submit'), u(e, 'class', (a = h(t[6][t[4]]) + ' svelte-cczht'));
		},
		m(a, i) {
			p(a, e, i), m(e, s), n || ((o = w(e, 'click', t[7])), (n = !0));
		},
		p(t, i) {
			1 & i && j(s, t[0]),
				80 & i && a !== (a = h(t[6][t[4]]) + ' svelte-cczht') && u(e, 'class', a);
		},
		d(t) {
			t && c(e), (n = !1), o();
		}
	};
}
function L(t) {
	let e, s, a;
	return {
		c() {
			(e = i('a')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = r(a, 'A', { class: !0, href: !0 });
			var i = l(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-cczht')), u(e, 'href', t[1]);
		},
		m(t, a) {
			p(t, e, a), m(e, s);
		},
		p(t, i) {
			1 & i && j(s, t[0]),
				80 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-cczht') && u(e, 'class', a),
				2 & i && u(e, 'href', t[1]);
		},
		d(t) {
			t && c(e);
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
			e = r(a, 'A', { class: !0, href: !0, target: !0 });
			var i = l(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-cczht')),
				u(e, 'href', t[1]),
				u(e, 'target', t[3]);
		},
		m(t, a) {
			p(t, e, a), m(e, s);
		},
		p(t, i) {
			1 & i && j(s, t[0]),
				80 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-cczht') && u(e, 'class', a),
				2 & i && u(e, 'href', t[1]),
				8 & i && u(e, 'target', t[3]);
		},
		d(t) {
			t && c(e);
		}
	};
}
function R(t) {
	let e;
	function s(t, e) {
		return t[3] ? U : !t[3] && t[1] ? L : t[2] ? F : S;
	}
	let a = s(t),
		i = a(t);
	return {
		c() {
			i.c(), (e = g());
		},
		l(t) {
			i.l(t), (e = g());
		},
		m(t, s) {
			i.m(t, s), p(t, e, s);
		},
		p(t, [n]) {
			a === (a = s(t)) && i ? i.p(t, n) : (i.d(1), (i = a(t)), i && (i.c(), i.m(e.parentNode, e)));
		},
		i: _,
		o: _,
		d(t) {
			i.d(t), t && c(e);
		}
	};
}
function K(t, e, s) {
	let a,
		{ text: i = '' } = e,
		{ url: n = '' } = e,
		{ is_submit: r = !1 } = e,
		{ target: l = !1 } = e,
		{ variante: c = 0 } = e,
		{ valorinput: o = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (i = t.text)),
				'url' in t && s(1, (n = t.url)),
				'is_submit' in t && s(2, (r = t.is_submit)),
				'target' in t && s(3, (l = t.target)),
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
			r,
			l,
			c,
			o,
			a,
			function (e) {
				b(t, e);
			},
			function (e) {
				b(t, e);
			}
		]
	);
}
class Q extends t {
	constructor(t) {
		super(),
			e(this, t, K, R, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
function W(t) {
	let e, s;
	return (
		(e = new Q({ props: { variante: 5, text: 'ᐯ' } })),
		{
			c() {
				T(e.$$.fragment);
			},
			l(t) {
				B(e.$$.fragment, t);
			},
			m(t, a) {
				y(e, t, a), (s = !0);
			},
			i(t) {
				s || (d(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				f(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				C(e, t);
			}
		}
	);
}
function X(t) {
	let e,
		s,
		a,
		v,
		g,
		_,
		b,
		T,
		B,
		y,
		C,
		O,
		A,
		I,
		M,
		P,
		V,
		q,
		N = !1,
		S = () => {
			N = !1;
		};
	z(t[11]), z(t[12]);
	let F = t[5] && W();
	return {
		c() {
			(s = i('header')),
				(a = i('h1')),
				(v = x(t[0])),
				(g = n()),
				(_ = i('br')),
				(b = n()),
				(T = i('span')),
				(B = i('h2')),
				(y = n()),
				(C = i('div')),
				(O = i('p')),
				(A = x(t[2])),
				(I = n()),
				F && F.c(),
				this.h();
		},
		l(e) {
			s = r(e, 'HEADER', { class: !0, style: !0 });
			var i = l(s);
			a = r(i, 'H1', { class: !0 });
			var n = l(a);
			(v = $(n, t[0])),
				(g = o(n)),
				(_ = r(n, 'BR', { class: !0 })),
				(b = o(n)),
				(T = r(n, 'SPAN', { class: !0 }));
			var u = l(T);
			(B = r(u, 'H2', { class: !0 })),
				l(B).forEach(c),
				u.forEach(c),
				n.forEach(c),
				(y = o(i)),
				(C = r(i, 'DIV', { class: !0 }));
			var h = l(C);
			O = r(h, 'P', { class: !0 });
			var p = l(O);
			(A = $(p, t[2])), p.forEach(c), (I = o(h)), F && F.l(h), h.forEach(c), i.forEach(c), this.h();
		},
		h() {
			u(_, 'class', 'svelte-njh3mp'),
				u(B, 'class', 'CoverSubTitle svelte-njh3mp'),
				u(T, 'class', 'svelte-njh3mp'),
				u(a, 'class', 'CoverTitle svelte-njh3mp'),
				u(O, 'class', 'svelte-njh3mp'),
				u(C, 'class', 'CoverText svelte-njh3mp'),
				u(s, 'class', (M = h(t[10][t[6]]) + ' svelte-njh3mp')),
				H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				E(s, 'is_home', t[4]);
		},
		m(i, n) {
			p(i, s, n),
				m(s, a),
				m(a, v),
				m(a, g),
				m(a, _),
				m(a, b),
				m(a, T),
				m(T, B),
				(B.innerHTML = t[1]),
				m(s, y),
				m(s, C),
				m(C, O),
				m(O, A),
				m(C, I),
				F && F.m(C, null),
				(P = !0),
				V ||
					((q = [
						w(window, 'resize', t[11]),
						w(window, 'scroll', () => {
							(N = !0), clearTimeout(e), (e = setTimeout(S, 100)), t[12]();
						})
					]),
					(V = !0));
		},
		p(t, [a]) {
			512 & a &&
				!N &&
				((N = !0), clearTimeout(e), scrollTo(window.pageXOffset, t[9]), (e = setTimeout(S, 100))),
				(!P || 1 & a) && j(v, t[0]),
				(!P || 2 & a) && (B.innerHTML = t[1]),
				(!P || 4 & a) && j(A, t[2]),
				t[5]
					? F
						? 32 & a && d(F, 1)
						: ((F = W()), F.c(), d(F, 1), F.m(C, null))
					: F &&
					  (D(),
					  f(F, 1, 1, () => {
							F = null;
					  }),
					  k()),
				(!P || (64 & a && M !== (M = h(t[10][t[6]]) + ' svelte-njh3mp'))) && u(s, 'class', M),
				(!P || 768 & a) && H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				(!P || 152 & a) &&
					H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				80 & a && E(s, 'is_home', t[4]);
		},
		i(t) {
			P || (d(F), (P = !0));
		},
		o(t) {
			f(F), (P = !1);
		},
		d(t) {
			t && c(s), F && F.d(), (V = !1), G(q);
		}
	};
}
function Y(t, e, s) {
	let { title: a = '' } = e,
		{ subtitle: i = '' } = e,
		{ text: n = '' } = e,
		{ img: r = '' } = e,
		{ is_home: l = !1 } = e,
		{ is_products_page: c = !1 } = e,
		{ variante: o = 0 } = e;
	let u, h, p;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (a = t.title)),
				'subtitle' in t && s(1, (i = t.subtitle)),
				'text' in t && s(2, (n = t.text)),
				'img' in t && s(3, (r = t.img)),
				'is_home' in t && s(4, (l = t.is_home)),
				'is_products_page' in t && s(5, (c = t.is_products_page)),
				'variante' in t && s(6, (o = t.variante));
		}),
		[
			a,
			i,
			n,
			r,
			l,
			c,
			o,
			u,
			h,
			p,
			['Cover_0', 'Cover_1', 'Cover_2'],
			function () {
				s(7, (u = window.innerWidth)), s(8, (h = window.innerHeight));
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
export { Q as B, J as C, N as G, O as c };
