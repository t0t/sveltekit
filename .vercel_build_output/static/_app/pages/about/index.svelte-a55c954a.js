import {
	S as e,
	i as t,
	s,
	e as n,
	j as l,
	t as r,
	c as a,
	a as o,
	l as i,
	b as c,
	d,
	o as u,
	f as m,
	g as p,
	H as f,
	h,
	n as g,
	k as $,
	$ as v,
	m as b,
	p as k,
	q as x,
	r as E,
	u as S,
	v as T,
	w as y,
	x as D,
	y as w,
	P as j,
	a0 as A,
	C as H,
	D as I,
	J as M
} from '../../chunks/index-d91e1ed8.js';
import { S as C } from '../../chunks/Section-62f6895b.js';
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
			(s = $()), this.h();
		},
		l(e) {
			(s = $()), this.h();
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
			(s = $()), this.h();
		},
		l(e) {
			(s = $()), this.h();
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
	let t, s, $, v, b, k, x, E, S, T, y, D, w, j, A, H, I;
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
				(E = n('br')),
				(S = l()),
				(T = n('span')),
				(y = l()),
				(D = n('div')),
				(w = n('button')),
				P.c(),
				(j = l()),
				(A = n('dl')),
				W.c(),
				this.h();
		},
		l(n) {
			t = a(n, 'SECTION', { class: !0 });
			var l = o(t);
			(s = a(l, 'IMG', { class: !0, src: !0, alt: !0 })),
				(v = i(l)),
				(b = a(l, 'H2', { class: !0 }));
			var r = o(b);
			(k = c(r, e[0])),
				(x = i(r)),
				(E = a(r, 'BR', { class: !0 })),
				(S = i(r)),
				(T = a(r, 'SPAN', { class: !0 })),
				o(T).forEach(d),
				r.forEach(d),
				(y = i(l)),
				(D = a(l, 'DIV', { class: !0 }));
			var u = o(D);
			w = a(u, 'BUTTON', { class: !0 });
			var m = o(w);
			P.l(m), m.forEach(d), u.forEach(d), (j = i(l)), (A = a(l, 'DL', { class: !0 }));
			var p = o(A);
			W.l(p), p.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'Avatar svelte-kh3eab'),
				s.src !== ($ = e[4]) && u(s, 'src', $),
				u(s, 'alt', e[0]),
				u(E, 'class', 'svelte-kh3eab'),
				u(T, 'class', 'AboutMeText svelte-kh3eab'),
				u(b, 'class', 'AboutMeHeader svelte-kh3eab'),
				u(w, 'class', 'svelte-kh3eab'),
				u(D, 'class', 'idioma_switch svelte-kh3eab'),
				u(A, 'class', 'svelte-kh3eab'),
				u(t, 'class', 'AboutMe svelte-kh3eab');
		},
		m(n, l) {
			m(n, t, l),
				p(t, s),
				p(t, v),
				p(t, b),
				p(b, k),
				p(b, x),
				p(b, E),
				p(b, S),
				p(b, T),
				(T.innerHTML = e[1]),
				p(t, y),
				p(t, D),
				p(D, w),
				P.m(w, null),
				p(t, j),
				p(t, A),
				W.m(A, null),
				H || ((I = f(w, 'click', e[6])), (H = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== ($ = e[4]) && u(s, 'src', $),
				1 & t && u(s, 'alt', e[0]),
				1 & t && h(k, e[0]),
				2 & t && (T.innerHTML = e[1]),
				C !== (C = M(e)) && (P.d(1), (P = C(e)), P && (P.c(), P.m(w, null))),
				V === (V = N(e)) && W ? W.p(e, t) : (W.d(1), (W = V(e)), W && (W.c(), W.m(A, null)));
		},
		i: g,
		o: g,
		d(e) {
			e && d(t), P.d(), W.d(), (H = !1), I();
		}
	};
}
function W(e, t, s) {
	let { title: n = '' } = t,
		{ subtitle: l = '' } = t,
		{ text: r = '' } = t,
		{ textingles: a = '' } = t,
		{ img: o = '' } = t,
		i = !0;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (n = e.title)),
				'subtitle' in e && s(1, (l = e.subtitle)),
				'text' in e && s(2, (r = e.text)),
				'textingles' in e && s(3, (a = e.textingles)),
				'img' in e && s(4, (o = e.img));
		}),
		[
			n,
			l,
			r,
			a,
			o,
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
				E(t, e, n), (s = !0);
			},
			p(e, [s]) {
				const l = 0 & s ? S(n, [T(F)]) : {};
				t.$set(l);
			},
			i(e) {
				s || (y(t.$$.fragment, e), (s = !0));
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
	let t, s, f, $, v, b, k;
	return {
		c() {
			(t = n('div')),
				(s = n('span')),
				(f = r(e[0])),
				($ = l()),
				(v = n('div')),
				(b = r(e[1])),
				(k = r('%')),
				this.h();
		},
		l(n) {
			t = a(n, 'DIV', { class: !0 });
			var l = o(t);
			s = a(l, 'SPAN', { class: !0 });
			var r = o(s);
			(f = c(r, e[0])), r.forEach(d), ($ = i(l)), (v = a(l, 'DIV', { class: !0, style: !0 }));
			var u = o(v);
			(b = c(u, e[1])), (k = c(u, '%')), u.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'skill svelte-1p0ypoj'),
				u(v, 'class', 'skills svelte-1p0ypoj'),
				j(v, 'width', e[3] + '%'),
				j(v, 'background-color', e[2]),
				u(t, 'class', 'container svelte-1p0ypoj');
		},
		m(e, n) {
			m(e, t, n), p(t, s), p(s, f), p(t, $), p(t, v), p(v, b), p(v, k);
		},
		p(e, [t]) {
			1 & t && h(f, e[0]),
				2 & t && h(b, e[1]),
				8 & t && j(v, 'width', e[3] + '%'),
				4 & t && j(v, 'background-color', e[2]);
		},
		i: g,
		o: g,
		d(e) {
			e && d(t);
		}
	};
}
function _(e, t, s) {
	let n,
		{ skill: l } = t,
		{ percent: r } = t,
		{ color: a } = t,
		{ delTime: o } = t;
	const i = P(30, { delay: o, duration: 2e3, easing: N });
	return (
		A(e, i, (e) => s(3, (n = e))),
		i.set(r),
		(e.$$set = (e) => {
			'skill' in e && s(0, (l = e.skill)),
				'percent' in e && s(1, (r = e.percent)),
				'color' in e && s(2, (a = e.color)),
				'delTime' in e && s(5, (o = e.delTime));
		}),
		[l, r, a, n, i, o]
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
				E(t, e, n), (s = !0);
			},
			p: g,
			i(e) {
				s || (y(t.$$.fragment, e), (s = !0));
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
		h,
		g = R,
		$ = [];
	for (let n = 0; n < g.length; n += 1) $[n] = X(Q(e, g, n));
	const v = (e) =>
		D($[e], 1, 1, () => {
			$[e] = null;
		});
	return {
		c() {
			(t = n('section')), (s = n('h2')), (u = r('Technical Skills')), (f = l());
			for (let e = 0; e < $.length; e += 1) $[e].c();
		},
		l(e) {
			t = a(e, 'SECTION', {});
			var n = o(t);
			s = a(n, 'H2', {});
			var l = o(s);
			(u = c(l, 'Technical Skills')), l.forEach(d), (f = i(n));
			for (let t = 0; t < $.length; t += 1) $[t].l(n);
			n.forEach(d);
		},
		m(e, n) {
			m(e, t, n), p(t, s), p(s, u), p(t, f);
			for (let s = 0; s < $.length; s += 1) $[s].m(t, null);
			h = !0;
		},
		p(e, [s]) {
			if (0 & s) {
				let n;
				for (g = R, n = 0; n < g.length; n += 1) {
					const l = Q(e, g, n);
					$[n]
						? ($[n].p(l, s), y($[n], 1))
						: (($[n] = X(l)), $[n].c(), y($[n], 1), $[n].m(t, null));
				}
				for (H(), n = g.length; n < $.length; n += 1) v(n);
				I();
			}
		},
		i(e) {
			if (!h) {
				for (let e = 0; e < g.length; e += 1) y($[e]);
				h = !0;
			}
		},
		o(e) {
			$ = $.filter(Boolean);
			for (let t = 0; t < $.length; t += 1) D($[t]);
			h = !1;
		},
		d(e) {
			e && d(t), M($, e);
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
				E(t, e, n), (s = !0);
			},
			i(e) {
				s || (y(t.$$.fragment, e), (s = !0));
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
				k(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			i(e) {
				s || (y(t.$$.fragment, e), (s = !0));
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
				k(t.$$.fragment), (s = l()), k(n.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (s = i(e)), x(n.$$.fragment, e);
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
				r || (y(t.$$.fragment, e), y(n.$$.fragment, e), (r = !0));
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
