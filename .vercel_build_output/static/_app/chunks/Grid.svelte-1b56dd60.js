import {
	S as t,
	i as e,
	s,
	k as i,
	f as a,
	n,
	d as r,
	F as c,
	e as o,
	t as l,
	c as u,
	a as p,
	b as h,
	o as d,
	I as g,
	G as m,
	g as b,
	H as f,
	h as v
} from './index-d91e1ed8.js';
import './Header-bbb40db3.js';
const x = [
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
		title: 'TOT PHI',
		subtitle: 'Un sistema de prototipado holístico',
		text: 'Svelte.js, Sass...',
		img: './img/bg2.jpg'
	}
];
function _(t) {
	let e, s, i, n, c;
	return {
		c() {
			(e = o('button')), (s = l(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'BUTTON', { class: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			d(e, 'class', (i = g(t[6][t[4]]) + ' svelte-1c3cpzx')), m(e, 'not-clickable', '' == t[5]);
		},
		m(i, r) {
			a(i, e, r), b(e, s), n || ((c = f(e, 'click', t[8])), (n = !0));
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = g(t[6][t[4]]) + ' svelte-1c3cpzx') && d(e, 'class', i),
				48 & a && m(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && r(e), (n = !1), c();
		}
	};
}
function B(t) {
	let e, s, i, n, c;
	return {
		c() {
			(e = o('button')), (s = l(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'BUTTON', { type: !0, class: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			d(e, 'type', 'submit'), d(e, 'class', (i = g(t[6][t[4]]) + ' svelte-1c3cpzx'));
		},
		m(i, r) {
			a(i, e, r), b(e, s), n || ((c = f(e, 'click', t[7])), (n = !0));
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = g(t[6][t[4]]) + ' svelte-1c3cpzx') && d(e, 'class', i);
		},
		d(t) {
			t && r(e), (n = !1), c();
		}
	};
}
function z(t) {
	let e, s, i;
	return {
		c() {
			(e = o('a')), (s = l(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'A', { class: !0, href: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			d(e, 'class', (i = 'button ' + t[6][t[4]] + ' svelte-1c3cpzx')), d(e, 'href', t[1]);
		},
		m(t, i) {
			a(t, e, i), b(e, s);
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = 'button ' + t[6][t[4]] + ' svelte-1c3cpzx') && d(e, 'class', i),
				2 & a && d(e, 'href', t[1]);
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
			(e = o('a')), (s = l(t[0])), this.h();
		},
		l(i) {
			e = u(i, 'A', { class: !0, href: !0, target: !0 });
			var a = p(e);
			(s = h(a, t[0])), a.forEach(r), this.h();
		},
		h() {
			d(e, 'class', (i = 'button ' + t[6][t[4]] + ' svelte-1c3cpzx')),
				d(e, 'href', t[1]),
				d(e, 'target', t[3]);
		},
		m(t, i) {
			a(t, e, i), b(e, s);
		},
		p(t, a) {
			1 & a && v(s, t[0]),
				16 & a && i !== (i = 'button ' + t[6][t[4]] + ' svelte-1c3cpzx') && d(e, 'class', i),
				2 & a && d(e, 'href', t[1]),
				8 & a && d(e, 'target', t[3]);
		},
		d(t) {
			t && r(e);
		}
	};
}
function k(t) {
	let e;
	function s(t, e) {
		return t[3] ? j : !t[3] && t[1] ? z : t[2] ? B : _;
	}
	let c = s(t),
		o = c(t);
	return {
		c() {
			o.c(), (e = i());
		},
		l(t) {
			o.l(t), (e = i());
		},
		m(t, s) {
			o.m(t, s), a(t, e, s);
		},
		p(t, [i]) {
			c === (c = s(t)) && o ? o.p(t, i) : (o.d(1), (o = c(t)), o && (o.c(), o.m(e.parentNode, e)));
		},
		i: n,
		o: n,
		d(t) {
			o.d(t), t && r(e);
		}
	};
}
function y(t, e, s) {
	let { text: i = '' } = e,
		{ url: a = '' } = e,
		{ is_submit: n = !1 } = e,
		{ target: r = !1 } = e,
		{ variante: o = 0 } = e,
		{ valorinput: l = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (i = t.text)),
				'url' in t && s(1, (a = t.url)),
				'is_submit' in t && s(2, (n = t.is_submit)),
				'target' in t && s(3, (r = t.target)),
				'variante' in t && s(4, (o = t.variante)),
				'valorinput' in t && s(5, (l = t.valorinput));
		}),
		[
			i,
			a,
			n,
			r,
			o,
			l,
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
				c(t, e);
			},
			function (e) {
				c(t, e);
			}
		]
	);
}
class S extends t {
	constructor(t) {
		super(),
			e(this, t, y, k, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
export { S as B, x as c };
