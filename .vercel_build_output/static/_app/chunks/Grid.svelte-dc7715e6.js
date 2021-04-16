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
	a as h,
	b as f,
	o as g,
	I as p,
	G as m,
	g as d,
	H as b,
	h as v
} from './index-d91e1ed8.js';
import './Header-eac1ad0e.js';
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
		title: 'Holistic Prototype',
		subtitle: 'A Frontend Design System',
		text: 'Svelte.js, Sass...',
		img: './img/bg2.jpg'
	}
];
function _(t) {
	let e, s, a, r, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { class: !0 });
			var i = h(e);
			(s = f(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			g(e, 'class', (a = p(t[6][t[4]]) + ' svelte-8art0f')), m(e, 'not-clickable', '' == t[5]);
		},
		m(a, n) {
			i(a, e, n), d(e, s), r || ((o = b(e, 'click', t[8])), (r = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = p(t[6][t[4]]) + ' svelte-8art0f') && g(e, 'class', a),
				48 & i && m(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && n(e), (r = !1), o();
		}
	};
}
function B(t) {
	let e, s, a, r, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'BUTTON', { type: !0, class: !0 });
			var i = h(e);
			(s = f(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			g(e, 'type', 'submit'), g(e, 'class', (a = p(t[6][t[4]]) + ' svelte-8art0f'));
		},
		m(a, n) {
			i(a, e, n), d(e, s), r || ((o = b(e, 'click', t[7])), (r = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = p(t[6][t[4]]) + ' svelte-8art0f') && g(e, 'class', a);
		},
		d(t) {
			t && n(e), (r = !1), o();
		}
	};
}
function j(t) {
	let e, s, a;
	return {
		c() {
			(e = l('a')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'A', { class: !0, href: !0 });
			var i = h(e);
			(s = f(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			g(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-8art0f')), g(e, 'href', t[1]);
		},
		m(t, a) {
			i(t, e, a), d(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-8art0f') && g(e, 'class', a),
				2 & i && g(e, 'href', t[1]);
		},
		d(t) {
			t && n(e);
		}
	};
}
function y(t) {
	let e, s, a;
	return {
		c() {
			(e = l('a')), (s = c(t[0])), this.h();
		},
		l(a) {
			e = u(a, 'A', { class: !0, href: !0, target: !0 });
			var i = h(e);
			(s = f(i, t[0])), i.forEach(n), this.h();
		},
		h() {
			g(e, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-8art0f')),
				g(e, 'href', t[1]),
				g(e, 'target', t[3]);
		},
		m(t, a) {
			i(t, e, a), d(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && a !== (a = 'button ' + t[6][t[4]] + ' svelte-8art0f') && g(e, 'class', a),
				2 & i && g(e, 'href', t[1]),
				8 & i && g(e, 'target', t[3]);
		},
		d(t) {
			t && n(e);
		}
	};
}
function S(t) {
	let e;
	function s(t, e) {
		return t[3] ? y : !t[3] && t[1] ? j : t[2] ? B : _;
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
function k(t, e, s) {
	let { text: a = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: r = !1 } = e,
		{ target: n = !1 } = e,
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
export { A as B, x as c };
