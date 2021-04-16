import {
	S as t,
	i as e,
	s,
	k as a,
	f as i,
	n,
	d as r,
	F as o,
	e as c,
	t as l,
	c as u,
	a as d,
	b as h,
	o as p,
	I as g,
	G as m,
	g as b,
	H as f,
	h as v
} from './index-d91e1ed8.js';
import './Header-72a33ab9.js';
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
	let e, s, a, n, o;
	return {
		c() {
			(e = c('button')), (s = l(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { class: !0 });
			var i = d(e);
			(s = h(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			p(e, 'class', (a = g(t[6][t[4]]) + ' svelte-15nsacd')), m(e, 'not-clickable', '' == t[5]);
		},
		m(a, r) {
			i(a, e, r), b(e, s), n || ((o = f(e, 'click', t[8])), (n = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = g(t[6][t[4]]) + ' svelte-15nsacd') && p(e, 'class', a),
				48 & i && m(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && r(e), (n = !1), o();
		}
	};
}
function B(t) {
	let e, s, a, n, o;
	return {
		c() {
			(e = c('button')), (s = l(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { type: !0, class: !0 });
			var i = d(e);
			(s = h(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			p(e, 'type', 'submit'), p(e, 'class', (a = g(t[6][t[4]]) + ' svelte-15nsacd'));
		},
		m(a, r) {
			i(a, e, r), b(e, s), n || ((o = f(e, 'click', t[7])), (n = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = g(t[6][t[4]]) + ' svelte-15nsacd') && p(e, 'class', a);
		},
		d(t) {
			t && r(e), (n = !1), o();
		}
	};
}
function j(t) {
	let e, s, a;
	return {
		c() {
			(e = c('a')), (s = l(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'A', { class: !0, href: !0 });
			var i = d(e);
			(s = h(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			p(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-15nsacd')), p(e, 'href', t[1]);
		},
		m(t, a) {
			i(t, e, a), b(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-15nsacd') && p(e, 'class', a),
				2 & i && p(e, 'href', t[1]);
		},
		d(t) {
			t && r(e);
		}
	};
}
function k(t) {
	let e, s, a;
	return {
		c() {
			(e = c('a')), (s = l(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'A', { class: !0, href: !0, target: !0 });
			var i = d(e);
			(s = h(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			p(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-15nsacd')),
				p(e, 'href', t[1]),
				p(e, 'target', t[3]);
		},
		m(t, a) {
			i(t, e, a), b(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-15nsacd') && p(e, 'class', a),
				2 & i && p(e, 'href', t[1]),
				8 & i && p(e, 'target', t[3]);
		},
		d(t) {
			t && r(e);
		}
	};
}
function y(t) {
	let e;
	function s(t, e) {
		return t[3] ? k : !t[3] && t[1] ? j : t[2] ? B : _;
	}
	let o = s(t),
		c = o(t);
	return {
		c() {
			c.c(), (e = a());
		},
		l(t) {
			c.l(t), (e = a());
		},
		m(t, s) {
			c.m(t, s), i(t, e, s);
		},
		p(t, [a]) {
			o === (o = s(t)) && c ? c.p(t, a) : (c.d(1), (c = o(t)), c && (c.c(), c.m(e.parentNode, e)));
		},
		i: n,
		o: n,
		d(t) {
			c.d(t), t && r(e);
		}
	};
}
function S(t, e, s) {
	let { text: a = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: n = !1 } = e,
		{ target: r = !1 } = e,
		{ variante: c = 0 } = e,
		{ valorinput: l = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (a = t.text)),
				'url' in t && s(1, (i = t.url)),
				'is_submit' in t && s(2, (n = t.is_submit)),
				'target' in t && s(3, (r = t.target)),
				'variante' in t && s(4, (c = t.variante)),
				'valorinput' in t && s(5, (l = t.valorinput));
		}),
		[
			a,
			i,
			n,
			r,
			c,
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
				o(t, e);
			},
			function (e) {
				o(t, e);
			}
		]
	);
}
class T extends t {
	constructor(t) {
		super(),
			e(this, t, S, y, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
export { T as B, x as c };
