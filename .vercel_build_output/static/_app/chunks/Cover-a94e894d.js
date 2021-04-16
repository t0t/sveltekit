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
	I as p,
	f as v,
	g as h,
	O as m,
	w as d,
	x as g,
	k as f,
	n as _,
	F as b,
	t as x,
	b as w,
	G as $,
	H as E,
	h as z,
	Q as T,
	p as q,
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
const j = (t) => ({}),
	A = (t) => ({}),
	I = (t) => ({}),
	M = (t) => ({});
function P(t) {
	let e, s, f, _, b, x, w, $;
	const E = t[3].subarea1,
		z = a(E, t, t[2], M),
		T = t[3].default,
		q = a(T, t, t[2], null),
		B = t[3].subarea2,
		y = a(B, t, t[2], A);
	return {
		c() {
			(e = i('div')),
				(s = i('div')),
				z && z.c(),
				(f = n()),
				(_ = i('div')),
				q && q.c(),
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
			z && z.l(i), i.forEach(c), (f = o(a)), (_ = r(a, 'DIV', { class: !0 }));
			var n = l(_);
			q && q.l(n), n.forEach(c), (b = o(a)), (x = r(a, 'DIV', { class: !0 }));
			var u = l(x);
			y && y.l(u), u.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(s, 'class', 'svelte-18znoa8'),
				u(_, 'class', 'svelte-18znoa8'),
				u(x, 'class', 'svelte-18znoa8'),
				u(e, 'class', (w = p(t[1][t[0]]) + ' svelte-18znoa8'));
		},
		m(t, a) {
			v(t, e, a),
				h(e, s),
				z && z.m(s, null),
				h(e, f),
				h(e, _),
				q && q.m(_, null),
				h(e, b),
				h(e, x),
				y && y.m(x, null),
				($ = !0);
		},
		p(t, [s]) {
			z && z.p && 4 & s && m(z, E, t, t[2], s, I, M),
				q && q.p && 4 & s && m(q, T, t, t[2], s, null, null),
				y && y.p && 4 & s && m(y, B, t, t[2], s, j, A),
				(!$ || (1 & s && w !== (w = p(t[1][t[0]]) + ' svelte-18znoa8'))) && u(e, 'class', w);
		},
		i(t) {
			$ || (d(z, t), d(q, t), d(y, t), ($ = !0));
		},
		o(t) {
			g(z, t), g(q, t), g(y, t), ($ = !1);
		},
		d(t) {
			t && c(e), z && z.d(t), q && q.d(t), y && y.d(t);
		}
	};
}
function V(t, e, s) {
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
		super(), e(this, t, V, P, s, { variante: 0 });
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
			(s = w(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = p(t[6][t[4]]) + ' svelte-v16tm2')), $(e, 'not-clickable', '' == t[5]);
		},
		m(a, i) {
			v(a, e, i), h(e, s), n || ((o = E(e, 'click', t[8])), (n = !0));
		},
		p(t, i) {
			1 & i && z(s, t[0]),
				80 & i && a !== (a = p(t[6][t[4]]) + ' svelte-v16tm2') && u(e, 'class', a),
				112 & i && $(e, 'not-clickable', '' == t[5]);
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
			(s = w(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'type', 'submit'), u(e, 'class', (a = p(t[6][t[4]]) + ' svelte-v16tm2'));
		},
		m(a, i) {
			v(a, e, i), h(e, s), n || ((o = E(e, 'click', t[7])), (n = !0));
		},
		p(t, i) {
			1 & i && z(s, t[0]),
				80 & i && a !== (a = p(t[6][t[4]]) + ' svelte-v16tm2') && u(e, 'class', a);
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
			(s = w(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-v16tm2')), u(e, 'href', t[1]);
		},
		m(t, a) {
			v(t, e, a), h(e, s);
		},
		p(t, i) {
			1 & i && z(s, t[0]),
				80 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-v16tm2') && u(e, 'class', a),
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
			(s = w(i, t[0])), i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-v16tm2')),
				u(e, 'href', t[1]),
				u(e, 'target', t[3]);
		},
		m(t, a) {
			v(t, e, a), h(e, s);
		},
		p(t, i) {
			1 & i && z(s, t[0]),
				80 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-v16tm2') && u(e, 'class', a),
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
			i.c(), (e = f());
		},
		l(t) {
			i.l(t), (e = f());
		},
		m(t, s) {
			i.m(t, s), v(t, e, s);
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
				q(e.$$.fragment);
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
				g(e.$$.fragment, t), (s = !1);
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
		m,
		f,
		_,
		b,
		q,
		B,
		y,
		C,
		O,
		j,
		A,
		I,
		M,
		P,
		V,
		N = !1,
		S = () => {
			N = !1;
		};
	T(t[11]), T(t[12]);
	let F = t[5] && W();
	return {
		c() {
			(s = i('header')),
				(a = i('h1')),
				(m = x(t[0])),
				(f = n()),
				(_ = i('br')),
				(b = n()),
				(q = i('span')),
				(B = i('h2')),
				(y = n()),
				(C = i('div')),
				(O = i('p')),
				(j = x(t[2])),
				(A = n()),
				F && F.c(),
				this.h();
		},
		l(e) {
			s = r(e, 'HEADER', { class: !0, style: !0 });
			var i = l(s);
			a = r(i, 'H1', { class: !0 });
			var n = l(a);
			(m = w(n, t[0])),
				(f = o(n)),
				(_ = r(n, 'BR', { class: !0 })),
				(b = o(n)),
				(q = r(n, 'SPAN', { class: !0 }));
			var u = l(q);
			(B = r(u, 'H2', { class: !0 })),
				l(B).forEach(c),
				u.forEach(c),
				n.forEach(c),
				(y = o(i)),
				(C = r(i, 'DIV', { class: !0 }));
			var p = l(C);
			O = r(p, 'P', { class: !0 });
			var v = l(O);
			(j = w(v, t[2])), v.forEach(c), (A = o(p)), F && F.l(p), p.forEach(c), i.forEach(c), this.h();
		},
		h() {
			u(_, 'class', 'svelte-zpwpgq'),
				u(B, 'class', 'CoverSubTitle svelte-zpwpgq'),
				u(q, 'class', 'svelte-zpwpgq'),
				u(a, 'class', 'CoverTitle svelte-zpwpgq'),
				u(O, 'class', 'svelte-zpwpgq'),
				u(C, 'class', 'CoverText svelte-zpwpgq'),
				u(s, 'class', (I = p(t[10][t[6]]) + ' svelte-zpwpgq')),
				H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				$(s, 'is_home', t[4]);
		},
		m(i, n) {
			v(i, s, n),
				h(s, a),
				h(a, m),
				h(a, f),
				h(a, _),
				h(a, b),
				h(a, q),
				h(q, B),
				(B.innerHTML = t[1]),
				h(s, y),
				h(s, C),
				h(C, O),
				h(O, j),
				h(C, A),
				F && F.m(C, null),
				(M = !0),
				P ||
					((V = [
						E(window, 'resize', t[11]),
						E(window, 'scroll', () => {
							(N = !0), clearTimeout(e), (e = setTimeout(S, 100)), t[12]();
						})
					]),
					(P = !0));
		},
		p(t, [a]) {
			512 & a &&
				!N &&
				((N = !0), clearTimeout(e), scrollTo(window.pageXOffset, t[9]), (e = setTimeout(S, 100))),
				(!M || 1 & a) && z(m, t[0]),
				(!M || 2 & a) && (B.innerHTML = t[1]),
				(!M || 4 & a) && z(j, t[2]),
				t[5]
					? F
						? 32 & a && d(F, 1)
						: ((F = W()), F.c(), d(F, 1), F.m(C, null))
					: F &&
					  (D(),
					  g(F, 1, 1, () => {
							F = null;
					  }),
					  k()),
				(!M || (64 & a && I !== (I = p(t[10][t[6]]) + ' svelte-zpwpgq'))) && u(s, 'class', I),
				(!M || 768 & a) && H(s, 'opacity', 1 - Math.max(0, t[9] / (t[8] / 1.5))),
				(!M || 152 & a) &&
					H(s, 'background-image', 'url( ' + (t[7] > 769 || t[4] ? t[3] : '') + ')\n    '),
				80 & a && $(s, 'is_home', t[4]);
		},
		i(t) {
			M || (d(F), (M = !0));
		},
		o(t) {
			g(F), (M = !1);
		},
		d(t) {
			t && c(s), F && F.d(), (P = !1), G(V);
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
	let u, p, v;
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
			p,
			v,
			['Cover_0', 'Cover_1', 'Cover_2'],
			function () {
				s(7, (u = window.innerWidth)), s(8, (p = window.innerHeight));
			},
			function () {
				s(9, (v = window.pageYOffset));
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
