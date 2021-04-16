import {
	S as t,
	i as e,
	s,
	k as a,
	f as i,
	n as r,
	d as n,
	F as l,
	e as o,
	t as c,
	c as u,
	a as v,
	b as h,
	o as m,
	I as p,
	G as d,
	g,
	H as f,
	h as b,
	Q as _,
	p as x,
	q as w,
	r as T,
	w as $,
	x as C,
	y as E,
	j as k,
	l as y,
	P as H,
	C as j,
	D,
	K as O
} from './index-d91e1ed8.js';
const A = [
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
function M(t) {
	let e, s, a, r, l;
	return {
		c() {
			(e = o('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { class: !0 });
			var i = v(e);
			(s = h(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			m(e, 'class', (a = p(t[6][t[4]]) + ' svelte-1rb7f9a')), d(e, 'not-clickable', '' == t[5]);
		},
		m(a, n) {
			i(a, e, n), g(e, s), r || ((l = f(e, 'click', t[8])), (r = !0));
		},
		p(t, i) {
			1 & i && b(s, t[0]),
				16 & i && a !== (a = p(t[6][t[4]]) + ' svelte-1rb7f9a') && m(e, 'class', a),
				48 & i && d(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && n(e), (r = !1), l();
		}
	};
}
function P(t) {
	let e, s, a, r, l;
	return {
		c() {
			(e = o('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { type: !0, class: !0 });
			var i = v(e);
			(s = h(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			m(e, 'type', 'submit'), m(e, 'class', (a = p(t[6][t[4]]) + ' svelte-1rb7f9a'));
		},
		m(a, n) {
			i(a, e, n), g(e, s), r || ((l = f(e, 'click', t[7])), (r = !0));
		},
		p(t, i) {
			1 & i && b(s, t[0]),
				16 & i && a !== (a = p(t[6][t[4]]) + ' svelte-1rb7f9a') && m(e, 'class', a);
		},
		d(t) {
			t && n(e), (r = !1), l();
		}
	};
}
function S(t) {
	let e, s, a;
	return {
		c() {
			(e = o('a')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'A', { href: !0, target: !0, class: !0 });
			var i = v(e);
			(s = h(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			m(e, 'href', t[1]),
				m(e, 'target', t[3]),
				m(e, 'class', (a = p(t[6][t[4]]) + ' svelte-1rb7f9a'));
		},
		m(t, a) {
			i(t, e, a), g(e, s);
		},
		p(t, i) {
			1 & i && b(s, t[0]),
				2 & i && m(e, 'href', t[1]),
				8 & i && m(e, 'target', t[3]),
				16 & i && a !== (a = p(t[6][t[4]]) + ' svelte-1rb7f9a') && m(e, 'class', a);
		},
		d(t) {
			t && n(e);
		}
	};
}
function q(t) {
	let e;
	function s(t, e) {
		return t[1] ? S : t[2] ? P : M;
	}
	let l = s(t),
		o = l(t);
	return {
		c() {
			o.c(), (e = a());
		},
		l(t) {
			o.l(t), (e = a());
		},
		m(t, s) {
			o.m(t, s), i(t, e, s);
		},
		p(t, [a]) {
			l === (l = s(t)) && o ? o.p(t, a) : (o.d(1), (o = l(t)), o && (o.c(), o.m(e.parentNode, e)));
		},
		i: r,
		o: r,
		d(t) {
			o.d(t), t && n(e);
		}
	};
}
function B(t, e, s) {
	let { text: a = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: r = !1 } = e,
		{ target: n = '_blank' } = e,
		{ variante: o = 0 } = e,
		{ valorinput: c = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (a = t.text)),
				'url' in t && s(1, (i = t.url)),
				'is_submit' in t && s(2, (r = t.is_submit)),
				'target' in t && s(3, (n = t.target)),
				'variante' in t && s(4, (o = t.variante)),
				'valorinput' in t && s(5, (c = t.valorinput));
		}),
		[
			a,
			i,
			r,
			n,
			o,
			c,
			['Light', 'Dark', 'Variante_2', 'ColoredInvert', 'UnicodeIcon', 'ScrollTo', 'Variante_6'],
			function (e) {
				l(t, e);
			},
			function (e) {
				l(t, e);
			}
		]
	);
}
class I extends t {
	constructor(t) {
		super(),
			e(this, t, B, q, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
function L(t) {
	let e, s;
	return (
		(e = new I({ props: { variante: 5, text: 'ᐯ' } })),
		{
			c() {
				x(e.$$.fragment);
			},
			l(t) {
				w(e.$$.fragment, t);
			},
			m(t, a) {
				T(e, t, a), (s = !0);
			},
			i(t) {
				s || ($(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				C(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				E(e, t);
			}
		}
	);
}
function N(t) {
	let e,
		s,
		a,
		r,
		l,
		x,
		w,
		T,
		E,
		A,
		M,
		P,
		S,
		q,
		B,
		I,
		N,
		U,
		F = !1,
		V = () => {
			F = !1;
		};
	_(t[11]), _(t[12]);
	let R = t[5] && L();
	return {
		c() {
			(s = o('header')),
				(a = o('h1')),
				(r = c(t[0])),
				(l = k()),
				(x = o('br')),
				(w = k()),
				(T = o('span')),
				(E = o('h2')),
				(A = k()),
				(M = o('div')),
				(P = o('p')),
				(S = c(t[2])),
				(q = k()),
				R && R.c(),
				this.h();
		},
		l(e) {
			s = u(e, 'HEADER', { class: !0, style: !0 });
			var i = v(s);
			a = u(i, 'H1', { class: !0 });
			var o = v(a);
			(r = h(o, t[0])),
				(l = y(o)),
				(x = u(o, 'BR', { class: !0 })),
				(w = y(o)),
				(T = u(o, 'SPAN', { class: !0 }));
			var c = v(T);
			(E = u(c, 'H2', { class: !0 })),
				v(E).forEach(n),
				c.forEach(n),
				o.forEach(n),
				(A = y(i)),
				(M = u(i, 'DIV', { class: !0 }));
			var m = v(M);
			P = u(m, 'P', { class: !0 });
			var p = v(P);
			(S = h(p, t[2])), p.forEach(n), (q = y(m)), R && R.l(m), m.forEach(n), i.forEach(n), this.h();
		},
		h() {
			m(x, 'class', 'svelte-9ev976'),
				m(E, 'class', 'CoverSubTitle svelte-9ev976'),
				m(T, 'class', 'svelte-9ev976'),
				m(a, 'class', 'CoverTitle svelte-9ev976'),
				m(P, 'class', 'svelte-9ev976'),
				m(M, 'class', 'CoverText svelte-9ev976'),
				m(s, 'class', (B = p(t[10][t[6]]) + ' svelte-9ev976')),
				H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				d(s, 'is_home', t[4]);
		},
		m(n, o) {
			i(n, s, o),
				g(s, a),
				g(a, r),
				g(a, l),
				g(a, x),
				g(a, w),
				g(a, T),
				g(T, E),
				(E.innerHTML = t[1]),
				g(s, A),
				g(s, M),
				g(M, P),
				g(P, S),
				g(M, q),
				R && R.m(M, null),
				(I = !0),
				N ||
					((U = [
						f(window, 'resize', t[11]),
						f(window, 'scroll', () => {
							(F = !0), clearTimeout(e), (e = setTimeout(V, 100)), t[12]();
						})
					]),
					(N = !0));
		},
		p(t, [a]) {
			512 & a &&
				!F &&
				((F = !0), clearTimeout(e), scrollTo(window.pageXOffset, t[9]), (e = setTimeout(V, 100))),
				(!I || 1 & a) && b(r, t[0]),
				(!I || 2 & a) && (E.innerHTML = t[1]),
				(!I || 4 & a) && b(S, t[2]),
				t[5]
					? R
						? 32 & a && $(R, 1)
						: ((R = L()), R.c(), $(R, 1), R.m(M, null))
					: R &&
					  (j(),
					  C(R, 1, 1, () => {
							R = null;
					  }),
					  D()),
				(!I || (64 & a && B !== (B = p(t[10][t[6]]) + ' svelte-9ev976'))) && m(s, 'class', B),
				(!I || 768 & a) && H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				(!I || 152 & a) &&
					H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				80 & a && d(s, 'is_home', t[4]);
		},
		i(t) {
			I || ($(R), (I = !0));
		},
		o(t) {
			C(R), (I = !1);
		},
		d(t) {
			t && n(s), R && R.d(), (N = !1), O(U);
		}
	};
}
function U(t, e, s) {
	let { title: a = '' } = e,
		{ subtitle: i = '' } = e,
		{ text: r = '' } = e,
		{ img: n = '' } = e,
		{ is_home: l = !1 } = e,
		{ is_products_page: o = !1 } = e,
		{ variante: c = 0 } = e;
	let u, v, h;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (a = t.title)),
				'subtitle' in t && s(1, (i = t.subtitle)),
				'text' in t && s(2, (r = t.text)),
				'img' in t && s(3, (n = t.img)),
				'is_home' in t && s(4, (l = t.is_home)),
				'is_products_page' in t && s(5, (o = t.is_products_page)),
				'variante' in t && s(6, (c = t.variante));
		}),
		[
			a,
			i,
			r,
			n,
			l,
			o,
			c,
			u,
			v,
			h,
			['Cover_0', 'Cover_1', 'Cover_2'],
			function () {
				s(7, (u = window.innerWidth)), s(8, (v = window.innerHeight));
			},
			function () {
				s(9, (h = window.pageYOffset));
			}
		]
	);
}
class F extends t {
	constructor(t) {
		super(),
			e(this, t, U, N, s, {
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
export { I as B, F as C, A as c };
