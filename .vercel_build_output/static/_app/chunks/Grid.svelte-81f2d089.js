import {
	S as t,
	i as e,
	s,
	k as i,
	f as a,
	n,
	d as r,
	F as o,
	e as l,
	t as c,
	c as u,
	a as p,
	b as h,
	o as g,
	I as m,
	G as d,
	g as b,
	H as f,
	h as v
} from './index-d91e1ed8.js';
import './Header-3d35273a.js';
const y = [
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
function x(t) {
	let e, s, i, n, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'BUTTON', { class: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			g(e, 'class', (i = m(t[6][t[4]]) + ' svelte-up86y2')), d(e, 'not-clickable', '' == t[5]);
		},
		m(i, r) {
			a(i, e, r), b(e, s), n || ((o = f(e, 'click', t[8])), (n = !0));
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = m(t[6][t[4]]) + ' svelte-up86y2') && g(e, 'class', i),
				48 & a && d(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && r(e), (n = !1), o();
		}
	};
}
function _(t) {
	let e, s, i, n, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'BUTTON', { type: !0, class: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			g(e, 'type', 'submit'), g(e, 'class', (i = m(t[6][t[4]]) + ' svelte-up86y2'));
		},
		m(i, r) {
			a(i, e, r), b(e, s), n || ((o = f(e, 'click', t[7])), (n = !0));
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = m(t[6][t[4]]) + ' svelte-up86y2') && g(e, 'class', i);
		},
		d(t) {
			t && r(e), (n = !1), o();
		}
	};
}
function B(t) {
	let e, s, i;
	return {
		c() {
			(e = l('a')), (s = c(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'A', { class: !0, href: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			g(e, 'class', (i = 'button ' + t[6][t[4]] + ' svelte-up86y2')), g(e, 'href', t[1]);
		},
		m(t, i) {
			a(t, e, i), b(e, s);
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = 'button ' + t[6][t[4]] + ' svelte-up86y2') && g(e, 'class', i),
				2 & a && g(e, 'href', t[1]);
		},
		d(t) {
			t && r(e);
		}
	};
}
function j(t) {
	let e, s, i;
	return {
		c() {
			(e = l('a')), (s = c(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'A', { class: !0, href: !0, target: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			g(e, 'class', (i = 'button ' + t[6][t[4]] + ' svelte-up86y2')),
				g(e, 'href', t[1]),
				g(e, 'target', t[3]);
		},
		m(t, i) {
			a(t, e, i), b(e, s);
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = 'button ' + t[6][t[4]] + ' svelte-up86y2') && g(e, 'class', i),
				2 & a && g(e, 'href', t[1]),
				8 & a && g(e, 'target', t[3]);
		},
		d(t) {
			t && r(e);
		}
	};
}
function S(t) {
	let e;
	function s(t, e) {
		return t[3] ? j : !t[3] && t[1] ? B : t[2] ? _ : x;
	}
	let o = s(t),
		l = o(t);
	return {
		c() {
			l.c(), (e = i());
		},
		l(t) {
			l.l(t), (e = i());
		},
		m(t, s) {
			l.m(t, s), a(t, e, s);
		},
		p(t, [i]) {
			o === (o = s(t)) && l ? l.p(t, i) : (l.d(1), (l = o(t)), l && (l.c(), l.m(e.parentNode, e)));
		},
		i: n,
		o: n,
		d(t) {
			l.d(t), t && r(e);
		}
	};
}
function k(t, e, s) {
	let { text: i = '' } = e,
		{ url: a = '' } = e,
		{ is_submit: n = !1 } = e,
		{ target: r = !1 } = e,
		{ variante: l = 0 } = e,
		{ valorinput: c = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (i = t.text)),
				'url' in t && s(1, (a = t.url)),
				'is_submit' in t && s(2, (n = t.is_submit)),
				'target' in t && s(3, (r = t.target)),
				'variante' in t && s(4, (l = t.variante)),
				'valorinput' in t && s(5, (c = t.valorinput));
		}),
		[
			i,
			a,
			n,
			r,
			l,
			c,
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
			function (e) {
				o(t, e);
			},
			function (e) {
				o(t, e);
			}
		]
	);
}
class A extends t {
	constructor(t) {
		super(),
			e(this, t, k, S, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
export { A as B, y as c };
