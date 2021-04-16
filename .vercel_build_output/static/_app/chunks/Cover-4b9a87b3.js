import {
	S as t,
	i as e,
	s,
	k as a,
	f as i,
	n,
	d as r,
	F as l,
	e as o,
	t as c,
	c as u,
	a as h,
	b as g,
	o as m,
	I as d,
	G as p,
	g as v,
	H as f,
	h as b,
	Q as x,
	p as _,
	q as y,
	r as w,
	w as T,
	x as j,
	y as $,
	j as q,
	l as E,
	P as k,
	C as H,
	D as C,
	K as D
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
		text: 'dddd',
		img: './img/bg3.jpg'
	}
];
function M(t) {
	let e, s, a, n, l;
	return {
		c() {
			(e = o('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { class: !0 });
			var i = h(e);
			(s = g(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			m(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1542v4n')), p(e, 'not-clickable', '' == t[5]);
		},
		m(a, r) {
			i(a, e, r), v(e, s), n || ((l = f(e, 'click', t[8])), (n = !0));
		},
		p(t, i) {
			1 & i && b(s, t[0]),
				16 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1542v4n') && m(e, 'class', a),
				48 & i && p(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && r(e), (n = !1), l();
		}
	};
}
function O(t) {
	let e, s, a, n, l;
	return {
		c() {
			(e = o('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { type: !0, class: !0 });
			var i = h(e);
			(s = g(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			m(e, 'type', 'submit'), m(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1542v4n'));
		},
		m(a, r) {
			i(a, e, r), v(e, s), n || ((l = f(e, 'click', t[7])), (n = !0));
		},
		p(t, i) {
			1 & i && b(s, t[0]),
				16 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1542v4n') && m(e, 'class', a);
		},
		d(t) {
			t && r(e), (n = !1), l();
		}
	};
}
function P(t) {
	let e, s, a;
	return {
		c() {
			(e = o('a')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'A', { href: !0, target: !0, class: !0 });
			var i = h(e);
			(s = g(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			m(e, 'href', t[1]),
				m(e, 'target', t[3]),
				m(e, 'class', (a = d(t[6][t[4]]) + ' svelte-1542v4n'));
		},
		m(t, a) {
			i(t, e, a), v(e, s);
		},
		p(t, i) {
			1 & i && b(s, t[0]),
				2 & i && m(e, 'href', t[1]),
				8 & i && m(e, 'target', t[3]),
				16 & i && a !== (a = d(t[6][t[4]]) + ' svelte-1542v4n') && m(e, 'class', a);
		},
		d(t) {
			t && r(e);
		}
	};
}
function B(t) {
	let e;
	function s(t, e) {
		return t[1] ? P : t[2] ? O : M;
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
		i: n,
		o: n,
		d(t) {
			o.d(t), t && r(e);
		}
	};
}
function I(t, e, s) {
	let { text: a = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: n = !1 } = e,
		{ target: r = '_blank' } = e,
		{ variante: o = 0 } = e,
		{ valorinput: c = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (a = t.text)),
				'url' in t && s(1, (i = t.url)),
				'is_submit' in t && s(2, (n = t.is_submit)),
				'target' in t && s(3, (r = t.target)),
				'variante' in t && s(4, (o = t.variante)),
				'valorinput' in t && s(5, (c = t.valorinput));
		}),
		[
			a,
			i,
			n,
			r,
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
class L extends t {
	constructor(t) {
		super(),
			e(this, t, I, B, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
function N(t) {
	let e, s, a;
	return (
		(s = new L({ props: { variante: 5, text: 'ᐯ' } })),
		{
			c() {
				(e = o('div')), _(s.$$.fragment), this.h();
			},
			l(t) {
				e = u(t, 'DIV', { class: !0 });
				var a = h(e);
				y(s.$$.fragment, a), a.forEach(r), this.h();
			},
			h() {
				m(e, 'class', 'CoverText svelte-1hqyjg2');
			},
			m(t, n) {
				i(t, e, n), w(s, e, null), (a = !0);
			},
			i(t) {
				a || (T(s.$$.fragment, t), (a = !0));
			},
			o(t) {
				j(s.$$.fragment, t), (a = !1);
			},
			d(t) {
				t && r(e), $(s);
			}
		}
	);
}
function S(t) {
	let e,
		s,
		a,
		n,
		l,
		d,
		_,
		y,
		w,
		$,
		A,
		M,
		O,
		P,
		B,
		I,
		L = !1,
		S = () => {
			L = !1;
		};
	x(t[9]), x(t[10]);
	let U = t[5] && N();
	return {
		c() {
			(s = o('header')),
				(a = o('h1')),
				(n = c(t[0])),
				(l = q()),
				(d = o('br')),
				(_ = q()),
				(y = o('span')),
				(w = o('h2')),
				($ = q()),
				(A = o('p')),
				(M = c(t[2])),
				(O = q()),
				U && U.c(),
				this.h();
		},
		l(e) {
			s = u(e, 'HEADER', { class: !0, style: !0 });
			var i = h(s);
			a = u(i, 'H1', { class: !0 });
			var o = h(a);
			(n = g(o, t[0])),
				(l = E(o)),
				(d = u(o, 'BR', { class: !0 })),
				(_ = E(o)),
				(y = u(o, 'SPAN', { class: !0 }));
			var c = h(y);
			(w = u(c, 'H2', { class: !0 })),
				h(w).forEach(r),
				c.forEach(r),
				o.forEach(r),
				($ = E(i)),
				(A = u(i, 'P', { class: !0 }));
			var m = h(A);
			(M = g(m, t[2])), m.forEach(r), (O = E(i)), U && U.l(i), i.forEach(r), this.h();
		},
		h() {
			m(d, 'class', 'svelte-1hqyjg2'),
				m(w, 'class', 'CoverSubTitle svelte-1hqyjg2'),
				m(y, 'class', 'svelte-1hqyjg2'),
				m(a, 'class', 'CoverTitle svelte-1hqyjg2'),
				m(A, 'class', 'svelte-1hqyjg2'),
				m(s, 'class', 'Cover svelte-1hqyjg2'),
				k(s, 'opacity', 1 - Math.max(0, t[8] / (t[7] / 1.5))),
				k(s, 'background-image', 'url( ' + (t[6] > 769 || t[4] ? t[3] : '') + ')\n    '),
				p(s, 'is_home', t[4]);
		},
		m(r, o) {
			i(r, s, o),
				v(s, a),
				v(a, n),
				v(a, l),
				v(a, d),
				v(a, _),
				v(a, y),
				v(y, w),
				(w.innerHTML = t[1]),
				v(s, $),
				v(s, A),
				v(A, M),
				v(s, O),
				U && U.m(s, null),
				(P = !0),
				B ||
					((I = [
						f(window, 'resize', t[9]),
						f(window, 'scroll', () => {
							(L = !0), clearTimeout(e), (e = setTimeout(S, 100)), t[10]();
						})
					]),
					(B = !0));
		},
		p(t, [a]) {
			256 & a &&
				!L &&
				((L = !0), clearTimeout(e), scrollTo(window.pageXOffset, t[8]), (e = setTimeout(S, 100))),
				(!P || 1 & a) && b(n, t[0]),
				(!P || 2 & a) && (w.innerHTML = t[1]),
				(!P || 4 & a) && b(M, t[2]),
				t[5]
					? U
						? 32 & a && T(U, 1)
						: ((U = N()), U.c(), T(U, 1), U.m(s, null))
					: U &&
					  (H(),
					  j(U, 1, 1, () => {
							U = null;
					  }),
					  C()),
				(!P || 384 & a) && k(s, 'opacity', 1 - Math.max(0, t[8] / (t[7] / 1.5))),
				(!P || 88 & a) &&
					k(s, 'background-image', 'url( ' + (t[6] > 769 || t[4] ? t[3] : '') + ')\n    '),
				16 & a && p(s, 'is_home', t[4]);
		},
		i(t) {
			P || (T(U), (P = !0));
		},
		o(t) {
			j(U), (P = !1);
		},
		d(t) {
			t && r(s), U && U.d(), (B = !1), D(I);
		}
	};
}
function U(t, e, s) {
	let a,
		i,
		n,
		{ title: r = ' ' } = e,
		{ subtitle: l = ' ' } = e,
		{ text: o = ' ' } = e,
		{ img: c = ' ' } = e,
		{ is_home: u = !1 } = e,
		{ is_products_page: h = !1 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (r = t.title)),
				'subtitle' in t && s(1, (l = t.subtitle)),
				'text' in t && s(2, (o = t.text)),
				'img' in t && s(3, (c = t.img)),
				'is_home' in t && s(4, (u = t.is_home)),
				'is_products_page' in t && s(5, (h = t.is_products_page));
		}),
		[
			r,
			l,
			o,
			c,
			u,
			h,
			a,
			i,
			n,
			function () {
				s(6, (a = window.innerWidth)), s(7, (i = window.innerHeight));
			},
			function () {
				s(8, (n = window.pageYOffset));
			}
		]
	);
}
class V extends t {
	constructor(t) {
		super(),
			e(this, t, U, S, s, {
				title: 0,
				subtitle: 1,
				text: 2,
				img: 3,
				is_home: 4,
				is_products_page: 5
			});
	}
}
export { L as B, V as C, A as c };
