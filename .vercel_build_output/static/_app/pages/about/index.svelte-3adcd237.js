import {
	S as e,
	i as t,
	s,
	e as n,
	j as r,
	t as l,
	c as a,
	a as i,
	l as o,
	b as c,
	d,
	o as p,
	f as u,
	g as m,
	H as f,
	h as $,
	n as g,
	k as h,
	$ as v,
	m as b,
	p as k,
	q as x,
	r as E,
	u as T,
	v as S,
	w as j,
	x as y,
	y as D,
	P as w,
	a0 as A,
	C as H,
	D as I,
	J as M
} from '../../chunks/index-d91e1ed8.js';
import { S as C, H as P } from '../../chunks/Header-e756daf8.js';
import { t as N } from '../../chunks/index-c4bdeab8.js';
import { b as L } from '../../chunks/index-78b22dae.js';
import '../../chunks/index-cc16b092.js';
function z(e) {
	let t;
	return {
		c() {
			t = l('Español');
		},
		l(e) {
			t = c(e, 'Español');
		},
		m(e, s) {
			u(e, t, s);
		},
		d(e) {
			e && d(t);
		}
	};
}
function B(e) {
	let t;
	return {
		c() {
			t = l('English');
		},
		l(e) {
			t = c(e, 'English');
		},
		m(e, s) {
			u(e, t, s);
		},
		d(e) {
			e && d(t);
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
			t.m(e[3], n, r), u(n, s, r);
		},
		p(e, s) {
			8 & s && t.p(e[3]);
		},
		d(e) {
			e && d(s), e && t.d();
		}
	};
}
function V(e) {
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
			t.m(e[2], n, r), u(n, s, r);
		},
		p(e, s) {
			4 & s && t.p(e[2]);
		},
		d(e) {
			e && d(s), e && t.d();
		}
	};
}
function W(e) {
	let t, s, h, v, b, k, x, E, T, S, j, y, D, w, A, H, I;
	function M(e, t) {
		return e[5] ? B : z;
	}
	let C = M(e),
		P = C(e);
	function N(e, t) {
		return e[5] ? V : G;
	}
	let L = N(e),
		W = L(e);
	return {
		c() {
			(t = n('section')),
				(s = n('img')),
				(v = r()),
				(b = n('h2')),
				(k = l(e[0])),
				(x = r()),
				(E = n('br')),
				(T = r()),
				(S = n('span')),
				(j = r()),
				(y = n('div')),
				(D = n('button')),
				P.c(),
				(w = r()),
				(A = n('dl')),
				W.c(),
				this.h();
		},
		l(n) {
			t = a(n, 'SECTION', { class: !0 });
			var r = i(t);
			(s = a(r, 'IMG', { class: !0, src: !0, alt: !0 })),
				(v = o(r)),
				(b = a(r, 'H2', { class: !0 }));
			var l = i(b);
			(k = c(l, e[0])),
				(x = o(l)),
				(E = a(l, 'BR', { class: !0 })),
				(T = o(l)),
				(S = a(l, 'SPAN', { class: !0 })),
				i(S).forEach(d),
				l.forEach(d),
				(j = o(r)),
				(y = a(r, 'DIV', { class: !0 }));
			var p = i(y);
			D = a(p, 'BUTTON', { class: !0 });
			var u = i(D);
			P.l(u), u.forEach(d), p.forEach(d), (w = o(r)), (A = a(r, 'DL', { class: !0 }));
			var m = i(A);
			W.l(m), m.forEach(d), r.forEach(d), this.h();
		},
		h() {
			p(s, 'class', 'Avatar svelte-rntjtp'),
				s.src !== (h = e[4]) && p(s, 'src', h),
				p(s, 'alt', e[0]),
				p(E, 'class', 'svelte-rntjtp'),
				p(S, 'class', 'AboutMeText svelte-rntjtp'),
				p(b, 'class', 'AboutMeHeader svelte-rntjtp'),
				p(D, 'class', 'svelte-rntjtp'),
				p(y, 'class', 'idioma_switch svelte-rntjtp'),
				p(A, 'class', 'timeline svelte-rntjtp'),
				p(t, 'class', 'AboutMe svelte-rntjtp');
		},
		m(n, r) {
			u(n, t, r),
				m(t, s),
				m(t, v),
				m(t, b),
				m(b, k),
				m(b, x),
				m(b, E),
				m(b, T),
				m(b, S),
				(S.innerHTML = e[1]),
				m(t, j),
				m(t, y),
				m(y, D),
				P.m(D, null),
				m(t, w),
				m(t, A),
				W.m(A, null),
				H || ((I = f(D, 'click', e[6])), (H = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== (h = e[4]) && p(s, 'src', h),
				1 & t && p(s, 'alt', e[0]),
				1 & t && $(k, e[0]),
				2 & t && (S.innerHTML = e[1]),
				C !== (C = M(e)) && (P.d(1), (P = C(e)), P && (P.c(), P.m(D, null))),
				L === (L = N(e)) && W ? W.p(e, t) : (W.d(1), (W = L(e)), W && (W.c(), W.m(A, null)));
		},
		i: g,
		o: g,
		d(e) {
			e && d(t), P.d(), W.d(), (H = !1), I();
		}
	};
}
function q(e, t, s) {
	let { title: n = '' } = t,
		{ subtitle: r = '' } = t,
		{ text: l = '' } = t,
		{ textingles: a = '' } = t,
		{ img: i = '' } = t,
		o = !0;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (n = e.title)),
				'subtitle' in e && s(1, (r = e.subtitle)),
				'text' in e && s(2, (l = e.text)),
				'textingles' in e && s(3, (a = e.textingles)),
				'img' in e && s(4, (i = e.img));
		}),
		[
			n,
			r,
			l,
			a,
			i,
			o,
			() => {
				s(5, (o = !o));
			}
		]
	);
}
class F extends e {
	constructor(e) {
		super(), t(this, e, q, W, s, { title: 0, subtitle: 1, text: 2, textingles: 3, img: 4 });
	}
}
const J = {
	title: 'Sergio Forés Raga',
	subtitle:
		'Siento que todo está unido y también imbricado por una paradoja tan sutil como rotunda. No distingo entre pintura, impresión 3D, diseño web, código o poesía. Lo que Es es todo a la vez y en eso consiste el proceso de toda la Creación.',
	text:
		'<dt>1992</dt><dd>Estudios de Artes Aplicadas y procedimientos pictóricos.</dd> <dt>1997</dt> <dd>Estudios de Arte Electrónico y Diseño Digital en EsDi.</dd> <dt>Desde 1999</dt> <dd>Ejerciendo como freelance: Diseño Gráfico/Web y desarrollo de temas en Wordpress.</dd> <dt>En 2010</dt> <dd>Me enfoco en Prototipado Frontend y desarrollo de interfaz de usuario.</dd> <dt>2020</dt> <dd>Incorporo la impresión 3D en mi proceso creativo y desarrollo una Hermenéutica Holística de la Creación (+0+1234) como vía trascendental y de autorealización.</dd>',
	textingles:
		'<dt>1992</dt><dd>Studied Applied Arts and pictorial procedures, then Electronic Art and Digital Design.</dd> <dt>Since 1999</dt> <dd>Working as a Graphic and Web Designer.</dd> <dt>2010</dt><dd>I focused on Frontend Prototyping and UI development.</dd> <dt>Since 2020</dt> <dd>I incorporate 3D printing into my creative process and develop a Holistic Hermeneutics of Creation (+0+1234) as a transcendental and self-realization way.</dd>',
	img: './img/avatar.jpg'
};
function O(e) {
	let t, s;
	const n = [J];
	let r = {};
	for (let l = 0; l < n.length; l += 1) r = b(r, n[l]);
	return (
		(t = new F({ props: r })),
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
				const r = 0 & s ? T(n, [S(J)]) : {};
				t.$set(r);
			},
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
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
class R extends e {
	constructor(e) {
		super(), t(this, e, null, O, s, {});
	}
}
const U = [
	{ skill: 'HTML / CSS-Sass / SVG', percent: 85, color: 'red', delTime: 0 },
	{ skill: 'JavaScript / Svelte', percent: 50, color: 'darkorange', delTime: 1e3 },
	{ skill: 'Blender / Python Scripting', percent: 35, color: 'green', delTime: 1500 },
	{ skill: '3D Printing', percent: 65, color: 'rebeccapurple', delTime: 2500 },
	{ skill: 'Three JS', percent: 28, color: 'black', delTime: 2500 }
];
function _(e) {
	let t, s, f, h, v, b, k;
	return {
		c() {
			(t = n('div')),
				(s = n('span')),
				(f = l(e[0])),
				(h = r()),
				(v = n('div')),
				(b = l(e[1])),
				(k = l('%')),
				this.h();
		},
		l(n) {
			t = a(n, 'DIV', { class: !0 });
			var r = i(t);
			s = a(r, 'SPAN', { class: !0 });
			var l = i(s);
			(f = c(l, e[0])), l.forEach(d), (h = o(r)), (v = a(r, 'DIV', { class: !0, style: !0 }));
			var p = i(v);
			(b = c(p, e[1])), (k = c(p, '%')), p.forEach(d), r.forEach(d), this.h();
		},
		h() {
			p(s, 'class', 'skill svelte-1chp2pu'),
				p(v, 'class', 'skills svelte-1chp2pu'),
				w(v, 'width', e[3] + '%'),
				w(v, 'background-color', e[2]),
				p(t, 'class', 'container svelte-1chp2pu');
		},
		m(e, n) {
			u(e, t, n), m(t, s), m(s, f), m(t, h), m(t, v), m(v, b), m(v, k);
		},
		p(e, [t]) {
			1 & t && $(f, e[0]),
				2 & t && $(b, e[1]),
				8 & t && w(v, 'width', e[3] + '%'),
				4 & t && w(v, 'background-color', e[2]);
		},
		i: g,
		o: g,
		d(e) {
			e && d(t);
		}
	};
}
function K(e, t, s) {
	let n,
		{ skill: r } = t,
		{ percent: l } = t,
		{ color: a } = t,
		{ delTime: i } = t;
	const o = N(30, { delay: i, duration: 2e3, easing: L });
	return (
		A(e, o, (e) => s(3, (n = e))),
		o.set(l),
		(e.$$set = (e) => {
			'skill' in e && s(0, (r = e.skill)),
				'percent' in e && s(1, (l = e.percent)),
				'color' in e && s(2, (a = e.color)),
				'delTime' in e && s(5, (i = e.delTime));
		}),
		[r, l, a, n, o, i]
	);
}
class Q extends e {
	constructor(e) {
		super(), t(this, e, K, _, s, { skill: 0, percent: 1, color: 2, delTime: 5 });
	}
}
function X(e, t, s) {
	const n = e.slice();
	return (n[0] = t[s].skill), (n[1] = t[s].percent), (n[2] = t[s].color), (n[3] = t[s].delTime), n;
}
function Y(e) {
	let t, s;
	return (
		(t = new Q({ props: { skill: e[0], percent: e[1], color: e[2], delTime: e[3] } })),
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
				s || (j(t.$$.fragment, e), (s = !0));
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
function Z(e) {
	let t,
		s,
		r = U,
		l = [];
	for (let n = 0; n < r.length; n += 1) l[n] = Y(X(e, r, n));
	const o = (e) =>
		y(l[e], 1, 1, () => {
			l[e] = null;
		});
	return {
		c() {
			t = n('section');
			for (let e = 0; e < l.length; e += 1) l[e].c();
		},
		l(e) {
			t = a(e, 'SECTION', {});
			var s = i(t);
			for (let t = 0; t < l.length; t += 1) l[t].l(s);
			s.forEach(d);
		},
		m(e, n) {
			u(e, t, n);
			for (let s = 0; s < l.length; s += 1) l[s].m(t, null);
			s = !0;
		},
		p(e, [s]) {
			if (0 & s) {
				let n;
				for (r = U, n = 0; n < r.length; n += 1) {
					const a = X(e, r, n);
					l[n]
						? (l[n].p(a, s), j(l[n], 1))
						: ((l[n] = Y(a)), l[n].c(), j(l[n], 1), l[n].m(t, null));
				}
				for (H(), n = r.length; n < l.length; n += 1) o(n);
				I();
			}
		},
		i(e) {
			if (!s) {
				for (let e = 0; e < r.length; e += 1) j(l[e]);
				s = !0;
			}
		},
		o(e) {
			l = l.filter(Boolean);
			for (let t = 0; t < l.length; t += 1) y(l[t]);
			s = !1;
		},
		d(e) {
			e && d(t), M(l, e);
		}
	};
}
class ee extends e {
	constructor(e) {
		super(), t(this, e, null, Z, s, {});
	}
}
function te(e) {
	let t, s;
	return (
		(t = new R({})),
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
				s || (j(t.$$.fragment, e), (s = !0));
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
	let t, s;
	return (
		(t = new ee({})),
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
				s || (j(t.$$.fragment, e), (s = !0));
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
function ne(e) {
	let t, s, n, l, a, i;
	return (
		(t = new C({
			props: { id: 'aboutmetxt', variante: 7, $$slots: { default: [te] }, $$scope: { ctx: e } }
		})),
		(n = new P({ props: { tipo: 1, variante: 4, title: 'Technical Skills' } })),
		(a = new C({
			props: { id: 'skillsbar', variante: 1, $$slots: { default: [se] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				k(t.$$.fragment), (s = r()), k(n.$$.fragment), (l = r()), k(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (s = o(e)), x(n.$$.fragment, e), (l = o(e)), x(a.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), u(e, s, r), E(n, e, r), u(e, l, r), E(a, e, r), (i = !0);
			},
			p(e, [s]) {
				const n = {};
				1 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), a.$set(r);
			},
			i(e) {
				i || (j(t.$$.fragment, e), j(n.$$.fragment, e), j(a.$$.fragment, e), (i = !0));
			},
			o(e) {
				y(t.$$.fragment, e), y(n.$$.fragment, e), y(a.$$.fragment, e), (i = !1);
			},
			d(e) {
				D(t, e), e && d(s), D(n, e), e && d(l), D(a, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, ne, s, {});
	}
}
