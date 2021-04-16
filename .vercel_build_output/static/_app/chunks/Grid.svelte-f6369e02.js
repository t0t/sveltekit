import {
	S as t,
	i as e,
	s,
	k as n,
	f as i,
	n as a,
	d as r,
	F as o,
	e as l,
	t as u,
	c,
	a as p,
	b as d,
	o as h,
	I as g,
	G as m,
	g as b,
	H as f,
	h as v
} from './index-d91e1ed8.js';
import './Header-33a8b362.js';
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
	let e, s, n, a, o;
	return {
		c() {
			(e = l('button')), (s = u(t[0])), this.h();
		},
		l(n) {
			e = c(n, 'BUTTON', { class: !0 });
			var i = p(e);
			(s = d(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			h(e, 'class', (n = g(t[6][t[4]]) + ' svelte-1dnpnuu')), m(e, 'not-clickable', '' == t[5]);
		},
		m(n, r) {
			i(n, e, r), b(e, s), a || ((o = f(e, 'click', t[8])), (a = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && n !== (n = g(t[6][t[4]]) + ' svelte-1dnpnuu') && h(e, 'class', n),
				48 & i && m(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && r(e), (a = !1), o();
		}
	};
}
function B(t) {
	let e, s, n, a, o;
	return {
		c() {
			(e = l('button')), (s = u(t[0])), this.h();
		},
		l(n) {
			e = c(n, 'BUTTON', { type: !0, class: !0 });
			var i = p(e);
			(s = d(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			h(e, 'type', 'submit'), h(e, 'class', (n = g(t[6][t[4]]) + ' svelte-1dnpnuu'));
		},
		m(n, r) {
			i(n, e, r), b(e, s), a || ((o = f(e, 'click', t[7])), (a = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && n !== (n = g(t[6][t[4]]) + ' svelte-1dnpnuu') && h(e, 'class', n);
		},
		d(t) {
			t && r(e), (a = !1), o();
		}
	};
}
function j(t) {
	let e, s, n;
	return {
		c() {
			(e = l('a')), (s = u(t[0])), this.h();
		},
		l(n) {
			e = c(n, 'A', { class: !0, href: !0 });
			var i = p(e);
			(s = d(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			h(e, 'class', (n = 'button ' + t[6][t[4]] + ' svelte-1dnpnuu')), h(e, 'href', t[1]);
		},
		m(t, n) {
			i(t, e, n), b(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && n !== (n = 'button ' + t[6][t[4]] + ' svelte-1dnpnuu') && h(e, 'class', n),
				2 & i && h(e, 'href', t[1]);
		},
		d(t) {
			t && r(e);
		}
	};
}
function k(t) {
	let e, s, n;
	return {
		c() {
			(e = l('a')), (s = u(t[0])), this.h();
		},
		l(n) {
			e = c(n, 'A', { class: !0, href: !0, target: !0 });
			var i = p(e);
			(s = d(i, t[0])), i.forEach(r), this.h();
		},
		h() {
			h(e, 'class', (n = 'button ' + t[6][t[4]] + ' svelte-1dnpnuu')),
				h(e, 'href', t[1]),
				h(e, 'target', t[3]);
		},
		m(t, n) {
			i(t, e, n), b(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && n !== (n = 'button ' + t[6][t[4]] + ' svelte-1dnpnuu') && h(e, 'class', n),
				2 & i && h(e, 'href', t[1]),
				8 & i && h(e, 'target', t[3]);
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
		l = o(t);
	return {
		c() {
			l.c(), (e = n());
		},
		l(t) {
			l.l(t), (e = n());
		},
		m(t, s) {
			l.m(t, s), i(t, e, s);
		},
		p(t, [n]) {
			o === (o = s(t)) && l ? l.p(t, n) : (l.d(1), (l = o(t)), l && (l.c(), l.m(e.parentNode, e)));
		},
		i: a,
		o: a,
		d(t) {
			l.d(t), t && r(e);
		}
	};
}
function S(t, e, s) {
	let { text: n = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: a = !1 } = e,
		{ target: r = !1 } = e,
		{ variante: l = 0 } = e,
		{ valorinput: u = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (n = t.text)),
				'url' in t && s(1, (i = t.url)),
				'is_submit' in t && s(2, (a = t.is_submit)),
				'target' in t && s(3, (r = t.target)),
				'variante' in t && s(4, (l = t.variante)),
				'valorinput' in t && s(5, (u = t.valorinput));
		}),
		[
			n,
			i,
			a,
			r,
			l,
			u,
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
