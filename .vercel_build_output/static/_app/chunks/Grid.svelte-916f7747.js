import {
	S as t,
	i as e,
	s,
	k as r,
	f as i,
	n,
	d as a,
	F as o,
	e as l,
	t as c,
	c as u,
	a as h,
	b,
	o as p,
	I as d,
	G as g,
	g as m,
	H as f,
	h as v
} from './index-d91e1ed8.js';
import './Header-cd15ff25.js';
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
	let e, s, r, n, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(r) {
			e = u(r, 'BUTTON', { class: !0 });
			var i = h(e);
			(s = b(i, t[0])), i.forEach(a), this.h();
		},
		h() {
			p(e, 'class', (r = d(t[6][t[4]]) + ' svelte-r9rbn0')), g(e, 'not-clickable', '' == t[5]);
		},
		m(r, a) {
			i(r, e, a), m(e, s), n || ((o = f(e, 'click', t[8])), (n = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && r !== (r = d(t[6][t[4]]) + ' svelte-r9rbn0') && p(e, 'class', r),
				48 & i && g(e, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && a(e), (n = !1), o();
		}
	};
}
function B(t) {
	let e, s, r, n, o;
	return {
		c() {
			(e = l('button')), (s = c(t[0])), this.h();
		},
		l(r) {
			e = u(r, 'BUTTON', { type: !0, class: !0 });
			var i = h(e);
			(s = b(i, t[0])), i.forEach(a), this.h();
		},
		h() {
			p(e, 'type', 'submit'), p(e, 'class', (r = d(t[6][t[4]]) + ' svelte-r9rbn0'));
		},
		m(r, a) {
			i(r, e, a), m(e, s), n || ((o = f(e, 'click', t[7])), (n = !0));
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && r !== (r = d(t[6][t[4]]) + ' svelte-r9rbn0') && p(e, 'class', r);
		},
		d(t) {
			t && a(e), (n = !1), o();
		}
	};
}
function j(t) {
	let e, s, r;
	return {
		c() {
			(e = l('a')), (s = c(t[0])), this.h();
		},
		l(r) {
			e = u(r, 'A', { class: !0, href: !0 });
			var i = h(e);
			(s = b(i, t[0])), i.forEach(a), this.h();
		},
		h() {
			p(e, 'class', (r = 'button ' + t[6][t[4]] + ' svelte-r9rbn0')), p(e, 'href', t[1]);
		},
		m(t, r) {
			i(t, e, r), m(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && r !== (r = 'button ' + t[6][t[4]] + ' svelte-r9rbn0') && p(e, 'class', r),
				2 & i && p(e, 'href', t[1]);
		},
		d(t) {
			t && a(e);
		}
	};
}
function k(t) {
	let e, s, r;
	return {
		c() {
			(e = l('a')), (s = c(t[0])), this.h();
		},
		l(r) {
			e = u(r, 'A', { class: !0, href: !0, target: !0 });
			var i = h(e);
			(s = b(i, t[0])), i.forEach(a), this.h();
		},
		h() {
			p(e, 'class', (r = 'button ' + t[6][t[4]] + ' svelte-r9rbn0')),
				p(e, 'href', t[1]),
				p(e, 'target', t[3]);
		},
		m(t, r) {
			i(t, e, r), m(e, s);
		},
		p(t, i) {
			1 & i && v(s, t[0]),
				16 & i && r !== (r = 'button ' + t[6][t[4]] + ' svelte-r9rbn0') && p(e, 'class', r),
				2 & i && p(e, 'href', t[1]),
				8 & i && p(e, 'target', t[3]);
		},
		d(t) {
			t && a(e);
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
			l.c(), (e = r());
		},
		l(t) {
			l.l(t), (e = r());
		},
		m(t, s) {
			l.m(t, s), i(t, e, s);
		},
		p(t, [r]) {
			o === (o = s(t)) && l ? l.p(t, r) : (l.d(1), (l = o(t)), l && (l.c(), l.m(e.parentNode, e)));
		},
		i: n,
		o: n,
		d(t) {
			l.d(t), t && a(e);
		}
	};
}
function S(t, e, s) {
	let { text: r = '' } = e,
		{ url: i = '' } = e,
		{ is_submit: n = !1 } = e,
		{ target: a = !1 } = e,
		{ variante: l = 0 } = e,
		{ valorinput: c = 'input' } = e;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (r = t.text)),
				'url' in t && s(1, (i = t.url)),
				'is_submit' in t && s(2, (n = t.is_submit)),
				'target' in t && s(3, (a = t.target)),
				'variante' in t && s(4, (l = t.variante)),
				'valorinput' in t && s(5, (c = t.valorinput));
		}),
		[
			r,
			i,
			n,
			a,
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
class T extends t {
	constructor(t) {
		super(),
			e(this, t, S, y, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
export { T as B, x as c };
