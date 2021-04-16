import {
	S as e,
	i as t,
	s,
	e as n,
	j as l,
	t as r,
	c as i,
	a,
	l as o,
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
	m as k,
	p as x,
	q as b,
	r as E,
	u as y,
	v as S,
	w as T,
	x as D,
	y as w,
	P as A,
	a0 as H,
	C as I,
	D as j,
	J as M
} from '../../chunks/index-d91e1ed8.js';
import { S as C } from '../../chunks/Section-9405c539.js';
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
	let t, s, h, v, k, x, b, E, y, S, T, D, w, A, H, I, j;
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
				(k = n('h2')),
				(x = r(e[0])),
				(b = l()),
				(E = n('br')),
				(y = l()),
				(S = n('span')),
				(T = l()),
				(D = n('div')),
				(w = n('button')),
				P.c(),
				(A = l()),
				(H = n('dl')),
				W.c(),
				this.h();
		},
		l(n) {
			t = i(n, 'SECTION', { class: !0 });
			var l = a(t);
			(s = i(l, 'IMG', { class: !0, src: !0, alt: !0 })),
				(v = o(l)),
				(k = i(l, 'H2', { class: !0 }));
			var r = a(k);
			(x = c(r, e[0])),
				(b = o(r)),
				(E = i(r, 'BR', { class: !0 })),
				(y = o(r)),
				(S = i(r, 'SPAN', { class: !0 })),
				a(S).forEach(d),
				r.forEach(d),
				(T = o(l)),
				(D = i(l, 'DIV', { class: !0 }));
			var u = a(D);
			w = i(u, 'BUTTON', { class: !0 });
			var m = a(w);
			P.l(m), m.forEach(d), u.forEach(d), (A = o(l)), (H = i(l, 'DL', { class: !0 }));
			var p = a(H);
			W.l(p), p.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'Avatar svelte-n5xkit'),
				s.src !== (h = e[4]) && u(s, 'src', h),
				u(s, 'alt', e[0]),
				u(E, 'class', 'svelte-n5xkit'),
				u(S, 'class', 'AboutMeText svelte-n5xkit'),
				u(k, 'class', 'AboutMeHeader svelte-n5xkit'),
				u(w, 'class', 'svelte-n5xkit'),
				u(D, 'class', 'idioma_switch svelte-n5xkit'),
				u(H, 'class', 'svelte-n5xkit'),
				u(t, 'class', 'AboutMe svelte-n5xkit');
		},
		m(n, l) {
			m(n, t, l),
				p(t, s),
				p(t, v),
				p(t, k),
				p(k, x),
				p(k, b),
				p(k, E),
				p(k, y),
				p(k, S),
				(S.innerHTML = e[1]),
				p(t, T),
				p(t, D),
				p(D, w),
				P.m(w, null),
				p(t, A),
				p(t, H),
				W.m(H, null),
				I || ((j = f(w, 'click', e[6])), (I = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== (h = e[4]) && u(s, 'src', h),
				1 & t && u(s, 'alt', e[0]),
				1 & t && g(x, e[0]),
				2 & t && (S.innerHTML = e[1]),
				C !== (C = M(e)) && (P.d(1), (P = C(e)), P && (P.c(), P.m(w, null))),
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
		{ textingles: i = '' } = t,
		{ img: a = '' } = t,
		o = !0;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (n = e.title)),
				'subtitle' in e && s(1, (l = e.subtitle)),
				'text' in e && s(2, (r = e.text)),
				'textingles' in e && s(3, (i = e.textingles)),
				'img' in e && s(4, (a = e.img));
		}),
		[
			n,
			l,
			r,
			i,
			a,
			o,
			() => {
				s(5, (o = !o));
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
	for (let r = 0; r < n.length; r += 1) l = k(l, n[r]);
	return (
		(t = new q({ props: l })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			p(e, [s]) {
				const l = 0 & s ? y(n, [S(F)]) : {};
				t.$set(l);
			},
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				w(t, e);
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
	let t, s, f, h, v, k, x;
	return {
		c() {
			(t = n('div')),
				(s = n('span')),
				(f = r(e[0])),
				(h = l()),
				(v = n('div')),
				(k = r(e[1])),
				(x = r('%')),
				this.h();
		},
		l(n) {
			t = i(n, 'DIV', { class: !0 });
			var l = a(t);
			s = i(l, 'SPAN', { class: !0 });
			var r = a(s);
			(f = c(r, e[0])), r.forEach(d), (h = o(l)), (v = i(l, 'DIV', { class: !0, style: !0 }));
			var u = a(v);
			(k = c(u, e[1])), (x = c(u, '%')), u.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'skill svelte-y6te9y'),
				u(v, 'class', 'skills svelte-y6te9y'),
				A(v, 'width', e[3] + '%'),
				A(v, 'background-color', e[2]),
				u(t, 'class', 'container svelte-y6te9y');
		},
		m(e, n) {
			m(e, t, n), p(t, s), p(s, f), p(t, h), p(t, v), p(v, k), p(v, x);
		},
		p(e, [t]) {
			1 & t && g(f, e[0]),
				2 & t && g(k, e[1]),
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
		{ color: i } = t,
		{ delTime: a } = t;
	const o = P(30, { delay: a, duration: 2e3, easing: N });
	return (
		H(e, o, (e) => s(3, (n = e))),
		o.set(r),
		(e.$$set = (e) => {
			'skill' in e && s(0, (l = e.skill)),
				'percent' in e && s(1, (r = e.percent)),
				'color' in e && s(2, (i = e.color)),
				'delTime' in e && s(5, (a = e.delTime));
		}),
		[l, r, i, n, o, a]
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
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			p: $,
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				w(t, e);
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
		D(h[e], 1, 1, () => {
			h[e] = null;
		});
	return {
		c() {
			(t = n('section')), (s = n('h2')), (u = r('Technical Skills')), (f = l());
			for (let e = 0; e < h.length; e += 1) h[e].c();
		},
		l(e) {
			t = i(e, 'SECTION', {});
			var n = a(t);
			s = i(n, 'H2', {});
			var l = a(s);
			(u = c(l, 'Technical Skills')), l.forEach(d), (f = o(n));
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
			for (let t = 0; t < h.length; t += 1) D(h[t]);
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
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				w(t, e);
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
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			i(e) {
				s || (T(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				w(t, e);
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
				x(t.$$.fragment), (s = l()), x(n.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e), (s = o(e)), b(n.$$.fragment, e);
			},
			m(e, l) {
				E(t, e, l), m(e, s, l), E(n, e, l), (r = !0);
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
				D(t.$$.fragment, e), D(n.$$.fragment, e), (r = !1);
			},
			d(e) {
				w(t, e), e && d(s), w(n, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, se, s, {});
	}
}
