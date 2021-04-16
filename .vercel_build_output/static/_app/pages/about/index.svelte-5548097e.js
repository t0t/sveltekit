import {
	S as e,
	i as t,
	s,
	e as n,
	j as l,
	t as r,
	c as a,
	a as i,
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
	$ as x,
	m as b,
	p as v,
	q as k,
	r as E,
	u as S,
	v as T,
	w as y,
	x as D,
	y as w,
	P as A,
	a0 as H,
	C as I,
	D as j,
	J as M
} from '../../chunks/index-d91e1ed8.js';
import { S as C } from '../../chunks/Section-db7b341b.js';
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
			t = new x(s);
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
			t = new x(s);
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
	let t, s, h, x, b, v, k, E, S, T, y, D, w, A, H, I, j;
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
				(x = l()),
				(b = n('h2')),
				(v = r(e[0])),
				(k = l()),
				(E = n('br')),
				(S = l()),
				(T = n('span')),
				(y = l()),
				(D = n('div')),
				(w = n('button')),
				P.c(),
				(A = l()),
				(H = n('dl')),
				W.c(),
				this.h();
		},
		l(n) {
			t = a(n, 'SECTION', { class: !0 });
			var l = i(t);
			(s = a(l, 'IMG', { class: !0, src: !0, alt: !0 })),
				(x = o(l)),
				(b = a(l, 'H2', { class: !0 }));
			var r = i(b);
			(v = c(r, e[0])),
				(k = o(r)),
				(E = a(r, 'BR', { class: !0 })),
				(S = o(r)),
				(T = a(r, 'SPAN', { class: !0 })),
				i(T).forEach(d),
				r.forEach(d),
				(y = o(l)),
				(D = a(l, 'DIV', { class: !0 }));
			var u = i(D);
			w = a(u, 'BUTTON', { class: !0 });
			var m = i(w);
			P.l(m), m.forEach(d), u.forEach(d), (A = o(l)), (H = a(l, 'DL', { class: !0 }));
			var p = i(H);
			W.l(p), p.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'Avatar svelte-1xb9ex'),
				s.src !== (h = e[4]) && u(s, 'src', h),
				u(s, 'alt', e[0]),
				u(E, 'class', 'svelte-1xb9ex'),
				u(T, 'class', 'AboutMeText svelte-1xb9ex'),
				u(b, 'class', 'AboutMeHeader svelte-1xb9ex'),
				u(w, 'class', 'svelte-1xb9ex'),
				u(D, 'class', 'idioma_switch svelte-1xb9ex'),
				u(H, 'class', 'timeline svelte-1xb9ex'),
				u(t, 'class', 'AboutMe svelte-1xb9ex');
		},
		m(n, l) {
			m(n, t, l),
				p(t, s),
				p(t, x),
				p(t, b),
				p(b, v),
				p(b, k),
				p(b, E),
				p(b, S),
				p(b, T),
				(T.innerHTML = e[1]),
				p(t, y),
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
				1 & t && g(v, e[0]),
				2 & t && (T.innerHTML = e[1]),
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
		{ textingles: a = '' } = t,
		{ img: i = '' } = t,
		o = !0;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (n = e.title)),
				'subtitle' in e && s(1, (l = e.subtitle)),
				'text' in e && s(2, (r = e.text)),
				'textingles' in e && s(3, (a = e.textingles)),
				'img' in e && s(4, (i = e.img));
		}),
		[
			n,
			l,
			r,
			a,
			i,
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
	for (let r = 0; r < n.length; r += 1) l = b(l, n[r]);
	return (
		(t = new q({ props: l })),
		{
			c() {
				v(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
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
	let t, s, f, h, x, b, v;
	return {
		c() {
			(t = n('div')),
				(s = n('span')),
				(f = r(e[0])),
				(h = l()),
				(x = n('div')),
				(b = r(e[1])),
				(v = r('%')),
				this.h();
		},
		l(n) {
			t = a(n, 'DIV', { class: !0 });
			var l = i(t);
			s = a(l, 'SPAN', { class: !0 });
			var r = i(s);
			(f = c(r, e[0])), r.forEach(d), (h = o(l)), (x = a(l, 'DIV', { class: !0, style: !0 }));
			var u = i(x);
			(b = c(u, e[1])), (v = c(u, '%')), u.forEach(d), l.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'skill svelte-ym7479'),
				u(x, 'class', 'skills svelte-ym7479'),
				A(x, 'width', e[3] + '%'),
				A(x, 'background-color', e[2]),
				u(t, 'class', 'container svelte-ym7479');
		},
		m(e, n) {
			m(e, t, n), p(t, s), p(s, f), p(t, h), p(t, x), p(x, b), p(x, v);
		},
		p(e, [t]) {
			1 & t && g(f, e[0]),
				2 & t && g(b, e[1]),
				8 & t && A(x, 'width', e[3] + '%'),
				4 & t && A(x, 'background-color', e[2]);
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
		{ color: a } = t,
		{ delTime: i } = t;
	const o = P(30, { delay: i, duration: 2e3, easing: N });
	return (
		H(e, o, (e) => s(3, (n = e))),
		o.set(r),
		(e.$$set = (e) => {
			'skill' in e && s(0, (l = e.skill)),
				'percent' in e && s(1, (r = e.percent)),
				'color' in e && s(2, (a = e.color)),
				'delTime' in e && s(5, (i = e.delTime));
		}),
		[l, r, a, n, o, i]
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
				v(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			p: $,
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
		g,
		$ = R,
		h = [];
	for (let n = 0; n < $.length; n += 1) h[n] = X(Q(e, $, n));
	const x = (e) =>
		D(h[e], 1, 1, () => {
			h[e] = null;
		});
	return {
		c() {
			(t = n('section')), (s = n('h2')), (u = r('Technical Skills')), (f = l());
			for (let e = 0; e < h.length; e += 1) h[e].c();
		},
		l(e) {
			t = a(e, 'SECTION', {});
			var n = i(t);
			s = a(n, 'H2', {});
			var l = i(s);
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
						? (h[n].p(l, s), y(h[n], 1))
						: ((h[n] = X(l)), h[n].c(), y(h[n], 1), h[n].m(t, null));
				}
				for (I(), n = $.length; n < h.length; n += 1) x(n);
				j();
			}
		},
		i(e) {
			if (!g) {
				for (let e = 0; e < $.length; e += 1) y(h[e]);
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
				v(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
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
				v(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
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
			props: { id: 'aboutmetxt', variante: 3, $$slots: { default: [ee] }, $$scope: { ctx: e } }
		})),
		(n = new C({
			props: { id: 'skillsbar', variante: 0, $$slots: { default: [te] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				v(t.$$.fragment), (s = l()), v(n.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e), (s = o(e)), k(n.$$.fragment, e);
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
