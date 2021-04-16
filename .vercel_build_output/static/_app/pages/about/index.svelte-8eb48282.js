import {
	S as e,
	i as t,
	s,
	e as n,
	j as l,
	t as r,
	c as o,
	a,
	l as i,
	b as c,
	d,
	o as u,
	f as m,
	g as p,
	H as f,
	h as g,
	n as $,
	k as h,
	$ as v,
	m as b,
	p as k,
	q as x,
	r as w,
	u as E,
	v as S,
	w as T,
	x as y,
	y as D,
	P as A,
	a0 as H,
	C as I,
	D as j,
	J as M
} from '../../chunks/index-d91e1ed8.js';
import { S as C } from '../../chunks/Section-554b0cec.js';
import { t as P } from '../../chunks/index-c4bdeab8.js';
import { b as N } from '../../chunks/index-78b22dae.js';
import '../../chunks/index-cc16b092.js';
function L(e) {
	let t;
	return {
		c() {
			t = r('Español');
		},
		l(e) {
			t = c(e, 'Español');
		},
		m(e, s) {
			m(e, t, s);
		},
		d(e) {
			e && d(t);
		}
	};
}
function z(e) {
	let t;
	return {
		c() {
			t = r('English');
		},
		l(e) {
			t = c(e, 'English');
		},
		m(e, s) {
			m(e, t, s);
		},
		d(e) {
			e && d(t);
		}
	};
}
function B(e) {
	let t, s;
	return {
		c() {
			(s = h()), this.h();
		},
		l(e) {
			(s = h()), this.h();
		},
		h() {
			t = new v(s);
		},
		m(n, l) {
			t.m(e[3], n, l), m(n, s, l);
		},
		p(e, s) {
			8 & s && t.p(e[3]);
		},
		d(e) {
			e && d(s), e && t.d();
		}
	};
}
function G(e) {
	let t, s;
	return {
		c() {
			(s = h()), this.h();
		},
		l(e) {
			(s = h()), this.h();
		},
		h() {
			t = new v(s);
		},
		m(n, l) {
			t.m(e[2], n, l), m(n, s, l);
		},
		p(e, s) {
			4 & s && t.p(e[2]);
		},
		d(e) {
			e && d(s), e && t.d();
		}
	};
}
function V(e) {
	let t, s, h, v, b, k, x, w, E, S, T, y, D, A, H, I, j;
	function M(e, t) {
		return e[5] ? z : L;
	}
	let C = M(e),
		P = C(e);
	function N(e, t) {
		return e[5] ? G : B;
	}
	let V = N(e),
		W = V(e);
	return {
		c() {
			(t = n('section')),
				(s = n('img')),
				(v = l()),
				(b = n('h2')),
				(k = r(e[0])),
				(x = l()),
				(w = n('br')),
				(E = l()),
				(S = n('span')),
				(T = l()),
				(y = n('div')),
				(D = n('button')),
				P.c(),
				(A = l()),
				(H = n('dl')),
				W.c(),
				this.h();
		},
		l(n) {
			t = o(n, 'SECTION', { class: !0 });
			var l = a(t);
			(s = o(l, 'IMG', { class: !0, src: !0, alt: !0 })),
				(v = i(l)),
				(b = o(l, 'H2', { class: !0 }));
			var r = a(b);
			(k = c(r, e[0])),
				(x = i(r)),
				(w = o(r, 'BR', { class: !0 })),
				(E = i(r)),
				(S = o(r, 'SPAN', { class: !0 })),
				a(S).forEach(d),
				r.forEach(d),
				(T = i(l)),
				(y = o(l, 'DIV', { class: !0 }));
			var u = a(y);
			D = o(u, 'BUTTON', { class: !0 });
			var m = a(D);
			P.l(m), m.forEach(d), u.forEach(d), (A = i(l)), (H = o(l, 'DL', { class: !0 }));
			var p = a(H);
			W.l(p), p.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'Avatar svelte-10tguw5'),
				s.src !== (h = e[4]) && u(s, 'src', h),
				u(s, 'alt', e[0]),
				u(w, 'class', 'svelte-10tguw5'),
				u(S, 'class', 'AboutMeText svelte-10tguw5'),
				u(b, 'class', 'AboutMeHeader svelte-10tguw5'),
				u(D, 'class', 'svelte-10tguw5'),
				u(y, 'class', 'idioma_switch svelte-10tguw5'),
				u(H, 'class', 'svelte-10tguw5'),
				u(t, 'class', 'AboutMe svelte-10tguw5');
		},
		m(n, l) {
			m(n, t, l),
				p(t, s),
				p(t, v),
				p(t, b),
				p(b, k),
				p(b, x),
				p(b, w),
				p(b, E),
				p(b, S),
				(S.innerHTML = e[1]),
				p(t, T),
				p(t, y),
				p(y, D),
				P.m(D, null),
				p(t, A),
				p(t, H),
				W.m(H, null),
				I || ((j = f(D, 'click', e[6])), (I = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== (h = e[4]) && u(s, 'src', h),
				1 & t && u(s, 'alt', e[0]),
				1 & t && g(k, e[0]),
				2 & t && (S.innerHTML = e[1]),
				C !== (C = M(e)) && (P.d(1), (P = C(e)), P && (P.c(), P.m(D, null))),
				V === (V = N(e)) && W ? W.p(e, t) : (W.d(1), (W = V(e)), W && (W.c(), W.m(H, null)));
		},
		i: $,
		o: $,
		d(e) {
			e && d(t), P.d(), W.d(), (I = !1), j();
		}
	};
}
function W(e, t, s) {
	let { title: n = '' } = t,
		{ subtitle: l = '' } = t,
		{ text: r = '' } = t,
		{ textingles: o = '' } = t,
		{ img: a = '' } = t,
		i = !0;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (n = e.title)),
				'subtitle' in e && s(1, (l = e.subtitle)),
				'text' in e && s(2, (r = e.text)),
				'textingles' in e && s(3, (o = e.textingles)),
				'img' in e && s(4, (a = e.img));
		}),
		[
			n,
			l,
			r,
			o,
			a,
			i,
			() => {
				s(5, (i = !i));
			}
		]
	);
}
class q extends e {
	constructor(e) {
		super(), t(this, e, W, V, s, { title: 0, subtitle: 1, text: 2, textingles: 3, img: 4 });
	}
}
const F = {
	title: 'Sergio Forés Raga',
	subtitle:
		'Siento que todo está unido y también imbricado por una paradoja tan sutil como rotunda. No distingo entre pintura, impresión 3D, diseño web, código o poesía. Lo que Es es todo a la vez y en eso consiste el proceso de toda la Creación.',
	text:
		'<dt>1992</dt><dd>Estudios de Artes Aplicadas y procedimientos pictóricos.</dd> <dt>1997</dt> <dd>Estudios de Arte Electrónico y Diseño Digital en EsDi.</dd> <dt>Desde 1999</dt> <dd>Ejerciendo como freelance: Diseño Gráfico/Web y desarrollo de temas en Wordpress.</dd> <dt>En 2010</dt> <dd>Me enfoco en Prototipado Frontend y desarrollo de interfaz de usuario.</dd> <dt>2020</dt> <dd>Incorporo la impresión 3D en mi proceso creativo y desarrollo una Hermenéutica Holística de la Creación (+0+1234) como vía trascendental y de autorealización.</dd>',
	textingles:
		'<dt>1992</dt><dd>Studied Applied Arts and pictorial procedures, then Electronic Art and Digital Design.</dd> <dt>Since 1999</dt> <dd>Working as a Graphic and Web Designer.</dd> <dt>2010</dt><dd>I focused on Frontend Prototyping and UI development.</dd> <dt>Since 2020</dt> <dd>I incorporate 3D printing into my creative process and develop a Holistic Hermeneutics of Creation (+0+1234) as a transcendental and self-realization way.</dd>',
	img: './img/avatar.jpg'
};
function J(e) {
	let t, s;
	const n = [F];
	let l = {};
	for (let r = 0; r < n.length; r += 1) l = b(l, n[r]);
	return (
		(t = new q({ props: l })),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			p(e, [s]) {
				const l = 0 & s ? E(n, [S(F)]) : {};
				t.$set(l);
			},
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
class O extends e {
	constructor(e) {
		super(), t(this, e, null, J, s, {});
	}
}
const R = [
	{ skill: 'HTML / CSS-Sass / SVG', percent: 85, color: 'red', delTime: 0 },
	{ skill: 'JavaScript / Svelte', percent: 50, color: 'darkorange', delTime: 1e3 },
	{ skill: 'Blender / Python Scripting', percent: 35, color: 'green', delTime: 1500 },
	{ skill: '3D Printing', percent: 65, color: 'rebeccapurple', delTime: 2500 },
	{ skill: 'Three JS', percent: 28, color: 'black', delTime: 2500 }
];
function U(e) {
	let t, s, f, h, v, b, k;
	return {
		c() {
			(t = n('div')),
				(s = n('span')),
				(f = r(e[0])),
				(h = l()),
				(v = n('div')),
				(b = r(e[1])),
				(k = r('%')),
				this.h();
		},
		l(n) {
			t = o(n, 'DIV', { class: !0 });
			var l = a(t);
			s = o(l, 'SPAN', { class: !0 });
			var r = a(s);
			(f = c(r, e[0])), r.forEach(d), (h = i(l)), (v = o(l, 'DIV', { class: !0, style: !0 }));
			var u = a(v);
			(b = c(u, e[1])), (k = c(u, '%')), u.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'skill svelte-24m9ow'),
				u(v, 'class', 'skills svelte-24m9ow'),
				A(v, 'width', e[3] + '%'),
				A(v, 'background-color', e[2]),
				u(t, 'class', 'container svelte-24m9ow');
		},
		m(e, n) {
			m(e, t, n), p(t, s), p(s, f), p(t, h), p(t, v), p(v, b), p(v, k);
		},
		p(e, [t]) {
			1 & t && g(f, e[0]),
				2 & t && g(b, e[1]),
				8 & t && A(v, 'width', e[3] + '%'),
				4 & t && A(v, 'background-color', e[2]);
		},
		i: $,
		o: $,
		d(e) {
			e && d(t);
		}
	};
}
function _(e, t, s) {
	let n,
		{ skill: l } = t,
		{ percent: r } = t,
		{ color: o } = t,
		{ delTime: a } = t;
	const i = P(30, { delay: a, duration: 2e3, easing: N });
	return (
		H(e, i, (e) => s(3, (n = e))),
		i.set(r),
		(e.$$set = (e) => {
			'skill' in e && s(0, (l = e.skill)),
				'percent' in e && s(1, (r = e.percent)),
				'color' in e && s(2, (o = e.color)),
				'delTime' in e && s(5, (a = e.delTime));
		}),
		[l, r, o, n, i, a]
	);
}
class K extends e {
	constructor(e) {
		super(), t(this, e, _, U, s, { skill: 0, percent: 1, color: 2, delTime: 5 });
	}
}
function Q(e, t, s) {
	const n = e.slice();
	return (n[0] = t[s].skill), (n[1] = t[s].percent), (n[2] = t[s].color), (n[3] = t[s].delTime), n;
}
function X(e) {
	let t, s;
	return (
		(t = new K({ props: { skill: e[0], percent: e[1], color: e[2], delTime: e[3] } })),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			p: $,
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
function Y(e) {
	let t,
		s,
		u,
		f,
		g,
		$ = R,
		h = [];
	for (let n = 0; n < $.length; n += 1) h[n] = X(Q(e, $, n));
	const v = (e) =>
		y(h[e], 1, 1, () => {
			h[e] = null;
		});
	return {
		c() {
			(t = n('section')), (s = n('h2')), (u = r('Technical Skills')), (f = l());
			for (let e = 0; e < h.length; e += 1) h[e].c();
		},
		l(e) {
			t = o(e, 'SECTION', {});
			var n = a(t);
			s = o(n, 'H2', {});
			var l = a(s);
			(u = c(l, 'Technical Skills')), l.forEach(d), (f = i(n));
			for (let t = 0; t < h.length; t += 1) h[t].l(n);
			n.forEach(d);
		},
		m(e, n) {
			m(e, t, n), p(t, s), p(s, u), p(t, f);
			for (let s = 0; s < h.length; s += 1) h[s].m(t, null);
			g = !0;
		},
		p(e, [s]) {
			if (0 & s) {
				let n;
				for ($ = R, n = 0; n < $.length; n += 1) {
					const l = Q(e, $, n);
					h[n]
						? (h[n].p(l, s), T(h[n], 1))
						: ((h[n] = X(l)), h[n].c(), T(h[n], 1), h[n].m(t, null));
				}
				for (I(), n = $.length; n < h.length; n += 1) v(n);
				j();
			}
		},
		i(e) {
			if (!g) {
				for (let e = 0; e < $.length; e += 1) T(h[e]);
				g = !0;
			}
		},
		o(e) {
			h = h.filter(Boolean);
			for (let t = 0; t < h.length; t += 1) y(h[t]);
			g = !1;
		},
		d(e) {
			e && d(t), M(h, e);
		}
	};
}
class Z extends e {
	constructor(e) {
		super(), t(this, e, null, Y, s, {});
	}
}
function ee(e) {
	let t, s;
	return (
		(t = new O({})),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
function te(e) {
	let t, s;
	return (
		(t = new Z({})),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
function se(e) {
	let t, s, n, r;
	return (
		(t = new C({
			props: { id: 'aboutmetxt', variante: 1, $$slots: { default: [ee] }, $$scope: { ctx: e } }
		})),
		(n = new C({
			props: { id: 'skillsbar', variante: 0, $$slots: { default: [te] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				k(t.$$.fragment), (s = l()), k(n.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (s = i(e)), x(n.$$.fragment, e);
			},
			m(e, l) {
				w(t, e, l), m(e, s, l), w(n, e, l), (r = !0);
			},
			p(e, [s]) {
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), t.$set(l);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), n.$set(r);
			},
			i(e) {
				r || (T(t.$$.fragment, e), T(n.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(t.$$.fragment, e), y(n.$$.fragment, e), (r = !1);
			},
			d(e) {
				D(t, e), e && d(s), D(n, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, se, s, {});
	}
}
