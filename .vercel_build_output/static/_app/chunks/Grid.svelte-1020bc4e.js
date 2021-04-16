import {
	S as t,
	i as s,
	s as e,
	k as i,
	f as a,
	n as r,
	d as n,
	F as o,
	e as l,
	t as c,
	c as u,
	a as g,
	b as h,
	o as p,
	I as d,
	G as m,
	g as b,
	H as f,
	h as v
} from './index-d91e1ed8.js';
import './Header-6d172df2.js';
const j = [
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
function x(t) {
	let s, e, i, r, o;
	return {
		c() {
			(s = l('button')), (e = c(t[0])), this.h();
		},
		l(i) {
			s = u(i, 'BUTTON', { class: !0 });
			var a = g(s);
			(e = h(a, t[0])), a.forEach(n), this.h();
		},
		h() {
			p(s, 'class', (i = d(t[6][t[4]]) + ' svelte-1sgr8sj')), m(s, 'not-clickable', '' == t[5]);
		},
		m(i, n) {
			a(i, s, n), b(s, e), r || ((o = f(s, 'click', t[8])), (r = !0));
		},
		p(t, a) {
			1 & a && v(e, t[0]),
				16 & a && i !== (i = d(t[6][t[4]]) + ' svelte-1sgr8sj') && p(s, 'class', i),
				48 & a && m(s, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && n(s), (r = !1), o();
		}
	};
}
function _(t) {
	let s, e, i, r, o;
	return {
		c() {
			(s = l('button')), (e = c(t[0])), this.h();
		},
		l(i) {
			s = u(i, 'BUTTON', { type: !0, class: !0 });
			var a = g(s);
			(e = h(a, t[0])), a.forEach(n), this.h();
		},
		h() {
			p(s, 'type', 'submit'), p(s, 'class', (i = d(t[6][t[4]]) + ' svelte-1sgr8sj'));
		},
		m(i, n) {
			a(i, s, n), b(s, e), r || ((o = f(s, 'click', t[7])), (r = !0));
		},
		p(t, a) {
			1 & a && v(e, t[0]),
				16 & a && i !== (i = d(t[6][t[4]]) + ' svelte-1sgr8sj') && p(s, 'class', i);
		},
		d(t) {
			t && n(s), (r = !1), o();
		}
	};
}
function B(t) {
	let s, e, i;
	return {
		c() {
			(s = l('a')), (e = c(t[0])), this.h();
		},
		l(i) {
			s = u(i, 'A', { class: !0, href: !0 });
			var a = g(s);
			(e = h(a, t[0])), a.forEach(n), this.h();
		},
		h() {
			p(s, 'class', (i = 'button ' + t[6][t[4]] + ' svelte-1sgr8sj')), p(s, 'href', t[1]);
		},
		m(t, i) {
			a(t, s, i), b(s, e);
		},
		p(t, a) {
			1 & a && v(e, t[0]),
				16 & a && i !== (i = 'button ' + t[6][t[4]] + ' svelte-1sgr8sj') && p(s, 'class', i),
				2 & a && p(s, 'href', t[1]);
		},
		d(t) {
			t && n(s);
		}
	};
}
function k(t) {
	let s, e, i;
	return {
		c() {
			(s = l('a')), (e = c(t[0])), this.h();
		},
		l(i) {
			s = u(i, 'A', { class: !0, href: !0, target: !0 });
			var a = g(s);
			(e = h(a, t[0])), a.forEach(n), this.h();
		},
		h() {
			p(s, 'class', (i = 'button ' + t[6][t[4]] + ' svelte-1sgr8sj')),
				p(s, 'href', t[1]),
				p(s, 'target', t[3]);
		},
		m(t, i) {
			a(t, s, i), b(s, e);
		},
		p(t, a) {
			1 & a && v(e, t[0]),
				16 & a && i !== (i = 'button ' + t[6][t[4]] + ' svelte-1sgr8sj') && p(s, 'class', i),
				2 & a && p(s, 'href', t[1]),
				8 & a && p(s, 'target', t[3]);
		},
		d(t) {
			t && n(s);
		}
	};
}
function y(t) {
	let s;
	function e(t, s) {
		return t[3] ? k : !t[3] && t[1] ? B : t[2] ? _ : x;
	}
	let o = e(t),
		l = o(t);
	return {
		c() {
			l.c(), (s = i());
		},
		l(t) {
			l.l(t), (s = i());
		},
		m(t, e) {
			l.m(t, e), a(t, s, e);
		},
		p(t, [i]) {
			o === (o = e(t)) && l ? l.p(t, i) : (l.d(1), (l = o(t)), l && (l.c(), l.m(s.parentNode, s)));
		},
		i: r,
		o: r,
		d(t) {
			l.d(t), t && n(s);
		}
	};
}
function S(t, s, e) {
	let { text: i = '' } = s,
		{ url: a = '' } = s,
		{ is_submit: r = !1 } = s,
		{ target: n = !1 } = s,
		{ variante: l = 0 } = s,
		{ valorinput: c = 'input' } = s;
	return (
		(t.$$set = (t) => {
			'text' in t && e(0, (i = t.text)),
				'url' in t && e(1, (a = t.url)),
				'is_submit' in t && e(2, (r = t.is_submit)),
				'target' in t && e(3, (n = t.target)),
				'variante' in t && e(4, (l = t.variante)),
				'valorinput' in t && e(5, (c = t.valorinput));
		}),
		[
			i,
			a,
			r,
			n,
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
			function (s) {
				o(t, s);
			},
			function (s) {
				o(t, s);
			}
		]
	);
}
class T extends t {
	constructor(t) {
		super(),
			s(this, t, S, y, e, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
export { T as B, j as c };
