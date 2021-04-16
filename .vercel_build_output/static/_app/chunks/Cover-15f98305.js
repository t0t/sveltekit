import {
	S as t,
	i as e,
	s,
	k as a,
	f as i,
	n as r,
	d as n,
	F as o,
	e as l,
	t as c,
	c as u,
	a as m,
	b as p,
	o as d,
	I as h,
	G as g,
	g as v,
	H as b,
	h as f,
	Q as _,
	p as x,
	q as k,
	r as w,
	w as T,
	x as $,
	y as C,
	j as E,
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
		img: './img/bg4.jpg'
	}
];
function M(t) {
	let e, s, a, r, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { class: !0 });
			var i = m(e);
			(s = p(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			d(e, 'class', (a = h(t[6][t[4]]) + ' svelte-15okep3')), g(e, 'not-clickable', '' == t[5]);
		},
		m(a, n) {
			i(a, e, n), v(e, s), r || ((o = b(e, 'click', t[8])), (r = !0));
		},
		p(t, i) {
			1 & i && f(s, t[0]),
				16 & i && a !== (a = h(t[6][t[4]]) + ' svelte-15okep3') && d(e, 'class', a),
				48 & i && g(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && n(e), (r = !1), o();
		}
	};
}
function P(t) {
	let e, s, a, r, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { type: !0, class: !0 });
			var i = m(e);
			(s = p(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			d(e, 'type', 'submit'), d(e, 'class', (a = h(t[6][t[4]]) + ' svelte-15okep3'));
		},
		m(a, n) {
			i(a, e, n), v(e, s), r || ((o = b(e, 'click', t[7])), (r = !0));
		},
		p(t, i) {
			1 & i && f(s, t[0]),
				16 & i && a !== (a = h(t[6][t[4]]) + ' svelte-15okep3') && d(e, 'class', a);
		},
		d(t) {
			t && n(e), (r = !1), o();
		}
	};
}
function S(t) {
	let e, s, a;
	return {
		c() {
			(e = l('a')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'A', { href: !0, target: !0, class: !0 });
			var i = m(e);
			(s = p(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			d(e, 'href', t[1]),
				d(e, 'target', t[3]),
				d(e, 'class', (a = h(t[6][t[4]]) + ' svelte-15okep3'));
		},
		m(t, a) {
			i(t, e, a), v(e, s);
		},
		p(t, i) {
			1 & i && f(s, t[0]),
				2 & i && d(e, 'href', t[1]),
				8 & i && d(e, 'target', t[3]),
				16 & i && a !== (a = h(t[6][t[4]]) + ' svelte-15okep3') && d(e, 'class', a);
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
	let o = s(t),
		l = o(t);
	return {
		c() {
			l.c(), (e = a());
		},
		l(t) {
			l.l(t), (e = a());
		},
		m(t, s) {
			l.m(t, s), i(t, e, s);
		},
		p(t, [a]) {
			o === (o = s(t)) && l ? l.p(t, a) : (l.d(1), (l = o(t)), l && (l.c(), l.m(e.parentNode, e)));
		},
		i: r,
		o: r,
		d(t) {
			l.d(t), t && n(e);
		}
	};
}
function B(t, e, s) {
	let { text: a = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: r = !1 } = e,
		{ target: n = '_blank' } = e,
		{ variante: l = 0 } = e,
		{ valorinput: c = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (a = t.text)),
				'url' in t && s(1, (i = t.url)),
				'is_submit' in t && s(2, (r = t.is_submit)),
				'target' in t && s(3, (n = t.target)),
				'variante' in t && s(4, (l = t.variante)),
				'valorinput' in t && s(5, (c = t.valorinput));
		}),
		[
			a,
			i,
			r,
			n,
			l,
			c,
			['Light', 'Dark', 'Variante_2', 'ColoredInvert', 'UnicodeIcon', 'ScrollTo', 'Variante_6'],
			function (e) {
				o(t, e);
			},
			function (e) {
				o(t, e);
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
				k(e.$$.fragment, t);
			},
			m(t, a) {
				w(e, t, a), (s = !0);
			},
			i(t) {
				s || (T(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				$(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				C(e, t);
			}
		}
	);
}
function N(t) {
	let e,
		s,
		a,
		r,
		o,
		x,
		k,
		w,
		C,
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
			(s = l('header')),
				(a = l('h1')),
				(r = c(t[0])),
				(o = E()),
				(x = l('br')),
				(k = E()),
				(w = l('span')),
				(C = l('h2')),
				(A = E()),
				(M = l('div')),
				(P = l('p')),
				(S = c(t[2])),
				(q = E()),
				R && R.c(),
				this.h();
		},
		l(e) {
			s = u(e, 'HEADER', { class: !0, style: !0 });
			var i = m(s);
			a = u(i, 'H1', { class: !0 });
			var l = m(a);
			(r = p(l, t[0])),
				(o = y(l)),
				(x = u(l, 'BR', { class: !0 })),
				(k = y(l)),
				(w = u(l, 'SPAN', { class: !0 }));
			var c = m(w);
			(C = u(c, 'H2', { class: !0 })),
				m(C).forEach(n),
				c.forEach(n),
				l.forEach(n),
				(A = y(i)),
				(M = u(i, 'DIV', { class: !0 }));
			var d = m(M);
			P = u(d, 'P', { class: !0 });
			var h = m(P);
			(S = p(h, t[2])), h.forEach(n), (q = y(d)), R && R.l(d), d.forEach(n), i.forEach(n), this.h();
		},
		h() {
			d(x, 'class', 'svelte-mdb18o'),
				d(C, 'class', 'CoverSubTitle svelte-mdb18o'),
				d(w, 'class', 'svelte-mdb18o'),
				d(a, 'class', 'CoverTitle svelte-mdb18o'),
				d(P, 'class', 'svelte-mdb18o'),
				d(M, 'class', 'CoverText svelte-mdb18o'),
				d(s, 'class', (B = h(t[10][t[6]]) + ' svelte-mdb18o')),
				H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				g(s, 'is_home', t[4]);
		},
		m(n, l) {
			i(n, s, l),
				v(s, a),
				v(a, r),
				v(a, o),
				v(a, x),
				v(a, k),
				v(a, w),
				v(w, C),
				(C.innerHTML = t[1]),
				v(s, A),
				v(s, M),
				v(M, P),
				v(P, S),
				v(M, q),
				R && R.m(M, null),
				(I = !0),
				N ||
					((U = [
						b(window, 'resize', t[11]),
						b(window, 'scroll', () => {
							(F = !0), clearTimeout(e), (e = setTimeout(V, 100)), t[12]();
						})
					]),
					(N = !0));
		},
		p(t, [a]) {
			512 & a &&
				!F &&
				((F = !0), clearTimeout(e), scrollTo(window.pageXOffset, t[9]), (e = setTimeout(V, 100))),
				(!I || 1 & a) && f(r, t[0]),
				(!I || 2 & a) && (C.innerHTML = t[1]),
				(!I || 4 & a) && f(S, t[2]),
				t[5]
					? R
						? 32 & a && T(R, 1)
						: ((R = L()), R.c(), T(R, 1), R.m(M, null))
					: R &&
					  (j(),
					  $(R, 1, 1, () => {
							R = null;
					  }),
					  D()),
				(!I || (64 & a && B !== (B = h(t[10][t[6]]) + ' svelte-mdb18o'))) && d(s, 'class', B),
				(!I || 768 & a) && H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				(!I || 152 & a) &&
					H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				80 & a && g(s, 'is_home', t[4]);
		},
		i(t) {
			I || (T(R), (I = !0));
		},
		o(t) {
			$(R), (I = !1);
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
		{ is_home: o = !1 } = e,
		{ is_products_page: l = !1 } = e,
		{ variante: c = 0 } = e;
	let u, m, p;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (a = t.title)),
				'subtitle' in t && s(1, (i = t.subtitle)),
				'text' in t && s(2, (r = t.text)),
				'img' in t && s(3, (n = t.img)),
				'is_home' in t && s(4, (o = t.is_home)),
				'is_products_page' in t && s(5, (l = t.is_products_page)),
				'variante' in t && s(6, (c = t.variante));
		}),
		[
			a,
			i,
			r,
			n,
			o,
			l,
			c,
			u,
			m,
			p,
			['Cover_0', 'Cover_1', 'Cover_2'],
			function () {
				s(7, (u = window.innerWidth)), s(8, (m = window.innerHeight));
			},
			function () {
				s(9, (p = window.pageYOffset));
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
