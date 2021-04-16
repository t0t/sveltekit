import {
	S as t,
	i as e,
	s,
	M as a,
	e as i,
	j as r,
	c as l,
	a as n,
	d as c,
	l as o,
	o as u,
	I as d,
	f as v,
	g as h,
	O as p,
	w as m,
	x as f,
	k as g,
	n as b,
	F as _,
	t as x,
	b as $,
	G as w,
	H as E,
	h as T,
	Q as q,
	p as j,
	q as C,
	r as k,
	y,
	P as D,
	C as H,
	D as I,
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
const V = (t) => ({}),
	M = (t) => ({}),
	A = (t) => ({}),
	P = (t) => ({});
function S(t) {
	let e, s, g, b, _, x, $, w;
	const E = t[3].subarea1,
		T = a(E, t, t[2], P),
		q = t[3].default,
		j = a(q, t, t[2], null),
		C = t[3].subarea2,
		k = a(C, t, t[2], M);
	return {
		c() {
			(e = i('div')),
				(s = i('div')),
				T && T.c(),
				(g = r()),
				(b = i('div')),
				j && j.c(),
				(_ = r()),
				(x = i('div')),
				k && k.c(),
				this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0 });
			var a = n(e);
			s = l(a, 'DIV', { class: !0 });
			var i = n(s);
			T && T.l(i), i.forEach(c), (g = o(a)), (b = l(a, 'DIV', { class: !0 }));
			var r = n(b);
			j && j.l(r), r.forEach(c), (_ = o(a)), (x = l(a, 'DIV', { class: !0 }));
			var u = n(x);
			k && k.l(u), u.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(s, 'class', 'svelte-4ivujl'),
				u(b, 'class', 'svelte-4ivujl'),
				u(x, 'class', 'svelte-4ivujl'),
				u(e, 'class', ($ = d(t[1][t[0]]) + ' svelte-4ivujl'));
		},
		m(t, a) {
			v(t, e, a),
				h(e, s),
				T && T.m(s, null),
				h(e, g),
				h(e, b),
				j && j.m(b, null),
				h(e, _),
				h(e, x),
				k && k.m(x, null),
				(w = !0);
		},
		p(t, [s]) {
			T && T.p && 4 & s && p(T, E, t, t[2], s, A, P),
				j && j.p && 4 & s && p(j, q, t, t[2], s, null, null),
				k && k.p && 4 & s && p(k, C, t, t[2], s, V, M),
				(!w || (1 & s && $ !== ($ = d(t[1][t[0]]) + ' svelte-4ivujl'))) && u(e, 'class', $);
		},
		i(t) {
			w || (m(T, t), m(j, t), m(k, t), (w = !0));
		},
		o(t) {
			f(T, t), f(j, t), f(k, t), (w = !1);
		},
		d(t) {
			t && c(e), T && T.d(t), j && j.d(t), k && k.d(t);
		}
	};
}
function B(t, e, s) {
	let { $$slots: a = {}, $$scope: i } = e,
		{ variante: r = 0 } = e;
	return (
		(t.$$set = (t) => {
			'variante' in t && s(0, (r = t.variante)), '$$scope' in t && s(2, (i = t.$$scope));
		}),
		[r, ['Grid_0', 'Grid_1', 'Grid_2', 'Grid_3', 'Grid_4'], i, a]
	);
}
class L extends t {
	constructor(t) {
		super(), e(this, t, B, S, s, { variante: 0 });
	}
}
function N(t) {
	let e, s, a, r, o;
	return {
		c() {
			(e = i('button')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = l(a, 'BUTTON', { class: !0 });
			var i = n(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1swrfe6')), w(e, 'not-clickable', '' == t[5]);
		},
		m(a, i) {
			v(a, e, i), h(e, s), r || ((o = E(e, 'click', t[8])), (r = !0));
		},
		p(t, i) {
			1 & i && T(s, t[0]),
				16 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1swrfe6') && u(e, 'class', a),
				48 & i && w(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && c(e), (r = !1), o();
		}
	};
}
function U(t) {
	let e, s, a, r, o;
	return {
		c() {
			(e = i('button')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = l(a, 'BUTTON', { type: !0, class: !0 });
			var i = n(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'type', 'submit'), u(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1swrfe6'));
		},
		m(a, i) {
			v(a, e, i), h(e, s), r || ((o = E(e, 'click', t[7])), (r = !0));
		},
		p(t, i) {
			1 & i && T(s, t[0]),
				16 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1swrfe6') && u(e, 'class', a);
		},
		d(t) {
			t && c(e), (r = !1), o();
		}
	};
}
function F(t) {
	let e, s, a;
	return {
		c() {
			(e = i('a')), (s = x(t[0])), this.h();
		},
		l(a) {
			e = l(a, 'A', { href: !0, target: !0, class: !0 });
			var i = n(e);
			(s = $(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'href', t[1]),
				u(e, 'target', t[3]),
				u(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1swrfe6'));
		},
		m(t, a) {
			v(t, e, a), h(e, s);
		},
		p(t, i) {
			1 & i && T(s, t[0]),
				2 & i && u(e, 'href', t[1]),
				8 & i && u(e, 'target', t[3]),
				16 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1swrfe6') && u(e, 'class', a);
		},
		d(t) {
			t && c(e);
		}
	};
}
function R(t) {
	let e;
	function s(t, e) {
		return t[1] ? F : t[2] ? U : N;
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
			i.m(t, s), v(t, e, s);
		},
		p(t, [r]) {
			a === (a = s(t)) && i ? i.p(t, r) : (i.d(1), (i = a(t)), i && (i.c(), i.m(e.parentNode, e)));
		},
		i: b,
		o: b,
		d(t) {
			i.d(t), t && c(e);
		}
	};
}
function z(t, e, s) {
	let { text: a = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: r = !1 } = e,
		{ target: l = '_blank' } = e,
		{ variante: n = 0 } = e,
		{ valorinput: c = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (a = t.text)),
				'url' in t && s(1, (i = t.url)),
				'is_submit' in t && s(2, (r = t.is_submit)),
				'target' in t && s(3, (l = t.target)),
				'variante' in t && s(4, (n = t.variante)),
				'valorinput' in t && s(5, (c = t.valorinput));
		}),
		[
			a,
			i,
			r,
			l,
			n,
			c,
			['Light', 'Dark', 'Variante_2', 'ColoredInvert', 'UnicodeIcon', 'ScrollTo', 'Variante_6'],
			function (e) {
				_(t, e);
			},
			function (e) {
				_(t, e);
			}
		]
	);
}
class K extends t {
	constructor(t) {
		super(),
			e(this, t, z, R, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
function Q(t) {
	let e, s;
	return (
		(e = new K({ props: { variante: 5, text: 'ᐯ' } })),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				C(e.$$.fragment, t);
			},
			m(t, a) {
				k(e, t, a), (s = !0);
			},
			i(t) {
				s || (m(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				f(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				y(e, t);
			}
		}
	);
}
function W(t) {
	let e,
		s,
		a,
		p,
		g,
		b,
		_,
		j,
		C,
		k,
		y,
		O,
		V,
		M,
		A,
		P,
		S,
		B,
		L = !1,
		N = () => {
			L = !1;
		};
	q(t[11]), q(t[12]);
	let U = t[5] && Q();
	return {
		c() {
			(s = i('header')),
				(a = i('h1')),
				(p = x(t[0])),
				(g = r()),
				(b = i('br')),
				(_ = r()),
				(j = i('span')),
				(C = i('h2')),
				(k = r()),
				(y = i('div')),
				(O = i('p')),
				(V = x(t[2])),
				(M = r()),
				U && U.c(),
				this.h();
		},
		l(e) {
			s = l(e, 'HEADER', { class: !0, style: !0 });
			var i = n(s);
			a = l(i, 'H1', { class: !0 });
			var r = n(a);
			(p = $(r, t[0])),
				(g = o(r)),
				(b = l(r, 'BR', { class: !0 })),
				(_ = o(r)),
				(j = l(r, 'SPAN', { class: !0 }));
			var u = n(j);
			(C = l(u, 'H2', { class: !0 })),
				n(C).forEach(c),
				u.forEach(c),
				r.forEach(c),
				(k = o(i)),
				(y = l(i, 'DIV', { class: !0 }));
			var d = n(y);
			O = l(d, 'P', { class: !0 });
			var v = n(O);
			(V = $(v, t[2])), v.forEach(c), (M = o(d)), U && U.l(d), d.forEach(c), i.forEach(c), this.h();
		},
		h() {
			u(b, 'class', 'svelte-1d15n6q'),
				u(C, 'class', 'CoverSubTitle svelte-1d15n6q'),
				u(j, 'class', 'svelte-1d15n6q'),
				u(a, 'class', 'CoverTitle svelte-1d15n6q'),
				u(O, 'class', 'svelte-1d15n6q'),
				u(y, 'class', 'CoverText svelte-1d15n6q'),
				u(s, 'class', (A = d(t[10][t[6]]) + ' svelte-1d15n6q')),
				D(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				D(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				w(s, 'is_home', t[4]);
		},
		m(i, r) {
			v(i, s, r),
				h(s, a),
				h(a, p),
				h(a, g),
				h(a, b),
				h(a, _),
				h(a, j),
				h(j, C),
				(C.innerHTML = t[1]),
				h(s, k),
				h(s, y),
				h(y, O),
				h(O, V),
				h(y, M),
				U && U.m(y, null),
				(P = !0),
				S ||
					((B = [
						E(window, 'resize', t[11]),
						E(window, 'scroll', () => {
							(L = !0), clearTimeout(e), (e = setTimeout(N, 100)), t[12]();
						})
					]),
					(S = !0));
		},
		p(t, [a]) {
			512 & a &&
				!L &&
				((L = !0), clearTimeout(e), scrollTo(window.pageXOffset, t[9]), (e = setTimeout(N, 100))),
				(!P || 1 & a) && T(p, t[0]),
				(!P || 2 & a) && (C.innerHTML = t[1]),
				(!P || 4 & a) && T(V, t[2]),
				t[5]
					? U
						? 32 & a && m(U, 1)
						: ((U = Q()), U.c(), m(U, 1), U.m(y, null))
					: U &&
					  (H(),
					  f(U, 1, 1, () => {
							U = null;
					  }),
					  I()),
				(!P || (64 & a && A !== (A = d(t[10][t[6]]) + ' svelte-1d15n6q'))) && u(s, 'class', A),
				(!P || 768 & a) && D(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				(!P || 152 & a) &&
					D(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				80 & a && w(s, 'is_home', t[4]);
		},
		i(t) {
			P || (m(U), (P = !0));
		},
		o(t) {
			f(U), (P = !1);
		},
		d(t) {
			t && c(s), U && U.d(), (S = !1), G(B);
		}
	};
}
function X(t, e, s) {
	let { title: a = '' } = e,
		{ subtitle: i = '' } = e,
		{ text: r = '' } = e,
		{ img: l = '' } = e,
		{ is_home: n = !1 } = e,
		{ is_products_page: c = !1 } = e,
		{ variante: o = 0 } = e;
	let u, d, v;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (a = t.title)),
				'subtitle' in t && s(1, (i = t.subtitle)),
				'text' in t && s(2, (r = t.text)),
				'img' in t && s(3, (l = t.img)),
				'is_home' in t && s(4, (n = t.is_home)),
				'is_products_page' in t && s(5, (c = t.is_products_page)),
				'variante' in t && s(6, (o = t.variante));
		}),
		[
			a,
			i,
			r,
			l,
			n,
			c,
			o,
			u,
			d,
			v,
			['Cover_0', 'Cover_1', 'Cover_2'],
			function () {
				s(7, (u = window.innerWidth)), s(8, (d = window.innerHeight));
			},
			function () {
				s(9, (v = window.pageYOffset));
			}
		]
	);
}
class Y extends t {
	constructor(t) {
		super(),
			e(this, t, X, W, s, {
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
export { K as B, Y as C, L as G, O as c };
