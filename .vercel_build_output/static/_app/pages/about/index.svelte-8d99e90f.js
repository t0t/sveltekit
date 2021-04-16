import {
	S as e,
	i as t,
	s,
	e as n,
	j as r,
	t as l,
	c as a,
	a as o,
	l as i,
	b as c,
	d,
	o as u,
	f as p,
	g as f,
	H as m,
	h as g,
	n as $,
	k as h,
	$ as v,
	m as k,
	p as b,
	q as x,
	r as E,
	u as w,
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
import { S as C } from '../../chunks/Section-2261cd02.js';
import { t as P } from '../../chunks/index-c4bdeab8.js';
import { b as N } from '../../chunks/index-78b22dae.js';
import '../../chunks/index-cc16b092.js';
function L(e) {
	let t;
	return {
		c() {
			t = l('Español');
		},
		l(e) {
			t = c(e, 'Español');
		},
		m(e, s) {
			p(e, t, s);
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
			t = l('English');
		},
		l(e) {
			t = c(e, 'English');
		},
		m(e, s) {
			p(e, t, s);
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
		m(n, r) {
			t.m(e[3], n, r), p(n, s, r);
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
		m(n, r) {
			t.m(e[2], n, r), p(n, s, r);
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
	let t, s, h, v, k, b, x, E, w, S, T, y, D, A, H, I, j;
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
				(v = r()),
				(k = n('h2')),
				(b = l(e[0])),
				(x = r()),
				(E = n('br')),
				(w = r()),
				(S = n('span')),
				(T = r()),
				(y = n('div')),
				(D = n('button')),
				P.c(),
				(A = r()),
				(H = n('dl')),
				W.c(),
				this.h();
		},
		l(n) {
			t = a(n, 'SECTION', { class: !0 });
			var r = o(t);
			(s = a(r, 'IMG', { class: !0, src: !0, alt: !0 })),
				(v = i(r)),
				(k = a(r, 'H2', { class: !0 }));
			var l = o(k);
			(b = c(l, e[0])),
				(x = i(l)),
				(E = a(l, 'BR', { class: !0 })),
				(w = i(l)),
				(S = a(l, 'SPAN', { class: !0 })),
				o(S).forEach(d),
				l.forEach(d),
				(T = i(r)),
				(y = a(r, 'DIV', { class: !0 }));
			var u = o(y);
			D = a(u, 'BUTTON', { class: !0 });
			var p = o(D);
			P.l(p), p.forEach(d), u.forEach(d), (A = i(r)), (H = a(r, 'DL', { class: !0 }));
			var f = o(H);
			W.l(f), f.forEach(d), r.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'Avatar svelte-trapwf'),
				s.src !== (h = e[4]) && u(s, 'src', h),
				u(s, 'alt', e[0]),
				u(E, 'class', 'svelte-trapwf'),
				u(S, 'class', 'AboutMeText svelte-trapwf'),
				u(k, 'class', 'AboutMeHeader svelte-trapwf'),
				u(D, 'class', 'svelte-trapwf'),
				u(y, 'class', 'idioma_switch svelte-trapwf'),
				u(H, 'class', 'svelte-trapwf'),
				u(t, 'class', 'AboutMe svelte-trapwf');
		},
		m(n, r) {
			p(n, t, r),
				f(t, s),
				f(t, v),
				f(t, k),
				f(k, b),
				f(k, x),
				f(k, E),
				f(k, w),
				f(k, S),
				(S.innerHTML = e[1]),
				f(t, T),
				f(t, y),
				f(y, D),
				P.m(D, null),
				f(t, A),
				f(t, H),
				W.m(H, null),
				I || ((j = m(D, 'click', e[6])), (I = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== (h = e[4]) && u(s, 'src', h),
				1 & t && u(s, 'alt', e[0]),
				1 & t && g(b, e[0]),
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
		{ subtitle: r = '' } = t,
		{ text: l = '' } = t,
		{ textingles: a = '' } = t,
		{ img: o = '' } = t,
		i = !0;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (n = e.title)),
				'subtitle' in e && s(1, (r = e.subtitle)),
				'text' in e && s(2, (l = e.text)),
				'textingles' in e && s(3, (a = e.textingles)),
				'img' in e && s(4, (o = e.img));
		}),
		[
			n,
			r,
			l,
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
	let r = {};
	for (let l = 0; l < n.length; l += 1) r = k(r, n[l]);
	return (
		(t = new q({ props: r })),
		{
			c() {
				b(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			p(e, [s]) {
				const r = 0 & s ? w(n, [S(F)]) : {};
				t.$set(r);
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
	let t, s, m, h, v, k, b;
	return {
		c() {
			(t = n('div')),
				(s = n('span')),
				(m = l(e[0])),
				(h = r()),
				(v = n('div')),
				(k = l(e[1])),
				(b = l('%')),
				this.h();
		},
		l(n) {
			t = a(n, 'DIV', { class: !0 });
			var r = o(t);
			s = a(r, 'SPAN', { class: !0 });
			var l = o(s);
			(m = c(l, e[0])), l.forEach(d), (h = i(r)), (v = a(r, 'DIV', { class: !0, style: !0 }));
			var u = o(v);
			(k = c(u, e[1])), (b = c(u, '%')), u.forEach(d), r.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'skill svelte-1kfsnp2'),
				u(v, 'class', 'skills svelte-1kfsnp2'),
				A(v, 'width', e[3] + '%'),
				A(v, 'background-color', e[2]),
				u(t, 'class', 'container svelte-1kfsnp2');
		},
		m(e, n) {
			p(e, t, n), f(t, s), f(s, m), f(t, h), f(t, v), f(v, k), f(v, b);
		},
		p(e, [t]) {
			1 & t && g(m, e[0]),
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
		{ skill: r } = t,
		{ percent: l } = t,
		{ color: a } = t,
		{ delTime: o } = t;
	const i = P(30, { delay: o, duration: 2e3, easing: N });
	return (
		H(e, i, (e) => s(3, (n = e))),
		i.set(l),
		(e.$$set = (e) => {
			'skill' in e && s(0, (r = e.skill)),
				'percent' in e && s(1, (l = e.percent)),
				'color' in e && s(2, (a = e.color)),
				'delTime' in e && s(5, (o = e.delTime));
		}),
		[r, l, a, n, i, o]
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
				b(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
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
		m,
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
			(t = n('section')), (s = n('h2')), (u = l('Technical Skills')), (m = r());
			for (let e = 0; e < h.length; e += 1) h[e].c();
		},
		l(e) {
			t = a(e, 'SECTION', {});
			var n = o(t);
			s = a(n, 'H2', {});
			var r = o(s);
			(u = c(r, 'Technical Skills')), r.forEach(d), (m = i(n));
			for (let t = 0; t < h.length; t += 1) h[t].l(n);
			n.forEach(d);
		},
		m(e, n) {
			p(e, t, n), f(t, s), f(s, u), f(t, m);
			for (let s = 0; s < h.length; s += 1) h[s].m(t, null);
			g = !0;
		},
		p(e, [s]) {
			if (0 & s) {
				let n;
				for ($ = R, n = 0; n < $.length; n += 1) {
					const r = Q(e, $, n);
					h[n]
						? (h[n].p(r, s), T(h[n], 1))
						: ((h[n] = X(r)), h[n].c(), T(h[n], 1), h[n].m(t, null));
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
				b(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
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
				b(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
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
	let t, s, n, l;
	return (
		(t = new C({
			props: { id: 'aboutmetxt', variante: 3, $$slots: { default: [ee] }, $$scope: { ctx: e } }
		})),
		(n = new C({
			props: { id: 'skillsbar', variante: 0, $$slots: { default: [te] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				b(t.$$.fragment), (s = r()), b(n.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (s = i(e)), x(n.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), p(e, s, r), E(n, e, r), (l = !0);
			},
			p(e, [s]) {
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), n.$set(l);
			},
			i(e) {
				l || (T(t.$$.fragment, e), T(n.$$.fragment, e), (l = !0));
			},
			o(e) {
				y(t.$$.fragment, e), y(n.$$.fragment, e), (l = !1);
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
