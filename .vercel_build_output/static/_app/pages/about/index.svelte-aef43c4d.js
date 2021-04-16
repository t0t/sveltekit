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
	f as m,
	g as p,
	H as f,
	h as g,
	n as $,
	k as h,
	$ as v,
	m as x,
	p as b,
	q as k,
	r as E,
	u as T,
	v as y,
	w as S,
	x as D,
	y as j,
	P as w,
	a0 as z,
	C as A,
	D as H,
	J as I
} from '../../chunks/index-d91e1ed8.js';
import { S as q, H as M } from '../../chunks/Header-c174dee5.js';
import { t as P } from '../../chunks/index-c4bdeab8.js';
import { b as C } from '../../chunks/index-78b22dae.js';
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
			m(e, t, s);
		},
		d(e) {
			e && d(t);
		}
	};
}
function N(e) {
	let t;
	return {
		c() {
			t = l('English');
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
			t.m(e[3], n, r), m(n, s, r);
		},
		p(e, s) {
			8 & s && t.p(e[3]);
		},
		d(e) {
			e && d(s), e && t.d();
		}
	};
}
function _(e) {
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
			t.m(e[2], n, r), m(n, s, r);
		},
		p(e, s) {
			4 & s && t.p(e[2]);
		},
		d(e) {
			e && d(s), e && t.d();
		}
	};
}
function B(e) {
	let t, s, h, v, x, b, k, E, T, y, S, D, j, w, z, A, H;
	function I(e, t) {
		return e[5] ? N : L;
	}
	let q = I(e),
		M = q(e);
	function P(e, t) {
		return e[5] ? _ : V;
	}
	let C = P(e),
		B = C(e);
	return {
		c() {
			(t = n('div')),
				(s = n('img')),
				(v = r()),
				(x = n('h2')),
				(b = l(e[0])),
				(k = r()),
				(E = n('br')),
				(T = r()),
				(y = n('span')),
				(S = r()),
				(D = n('div')),
				(j = n('button')),
				M.c(),
				(w = r()),
				(z = n('dl')),
				B.c(),
				this.h();
		},
		l(n) {
			t = a(n, 'DIV', { class: !0 });
			var r = o(t);
			(s = a(r, 'IMG', { class: !0, src: !0, alt: !0 })),
				(v = i(r)),
				(x = a(r, 'H2', { class: !0 }));
			var l = o(x);
			(b = c(l, e[0])),
				(k = i(l)),
				(E = a(l, 'BR', { class: !0 })),
				(T = i(l)),
				(y = a(l, 'SPAN', { class: !0 })),
				o(y).forEach(d),
				l.forEach(d),
				(S = i(r)),
				(D = a(r, 'DIV', { class: !0 }));
			var u = o(D);
			j = a(u, 'BUTTON', { class: !0 });
			var m = o(j);
			M.l(m), m.forEach(d), u.forEach(d), (w = i(r)), (z = a(r, 'DL', { class: !0 }));
			var p = o(z);
			B.l(p), p.forEach(d), r.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'Avatar svelte-8zjx1u'),
				s.src !== (h = e[4]) && u(s, 'src', h),
				u(s, 'alt', e[0]),
				u(E, 'class', 'svelte-8zjx1u'),
				u(y, 'class', 'AboutMeText svelte-8zjx1u'),
				u(x, 'class', 'AboutMeHeader svelte-8zjx1u'),
				u(j, 'class', 'svelte-8zjx1u'),
				u(D, 'class', 'idioma_switch svelte-8zjx1u'),
				u(z, 'class', 'timeline svelte-8zjx1u'),
				u(t, 'class', 'AboutMe svelte-8zjx1u');
		},
		m(n, r) {
			m(n, t, r),
				p(t, s),
				p(t, v),
				p(t, x),
				p(x, b),
				p(x, k),
				p(x, E),
				p(x, T),
				p(x, y),
				(y.innerHTML = e[1]),
				p(t, S),
				p(t, D),
				p(D, j),
				M.m(j, null),
				p(t, w),
				p(t, z),
				B.m(z, null),
				A || ((H = f(j, 'click', e[6])), (A = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== (h = e[4]) && u(s, 'src', h),
				1 & t && u(s, 'alt', e[0]),
				1 & t && g(b, e[0]),
				2 & t && (y.innerHTML = e[1]),
				q !== (q = I(e)) && (M.d(1), (M = q(e)), M && (M.c(), M.m(j, null))),
				C === (C = P(e)) && B ? B.p(e, t) : (B.d(1), (B = C(e)), B && (B.c(), B.m(z, null)));
		},
		i: $,
		o: $,
		d(e) {
			e && d(t), M.d(), B.d(), (A = !1), H();
		}
	};
}
function G(e, t, s) {
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
class W extends e {
	constructor(e) {
		super(), t(this, e, G, B, s, { title: 0, subtitle: 1, text: 2, textingles: 3, img: 4 });
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
	for (let l = 0; l < n.length; l += 1) r = x(r, n[l]);
	return (
		(t = new W({ props: r })),
		{
			c() {
				b(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			p(e, [s]) {
				const r = 0 & s ? T(n, [y(F)]) : {};
				t.$set(r);
			},
			i(e) {
				s || (S(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				j(t, e);
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
	let t, s, f, h, v, x, b;
	return {
		c() {
			(t = n('div')),
				(s = n('span')),
				(f = l(e[0])),
				(h = r()),
				(v = n('div')),
				(x = l(e[1])),
				(b = l('%')),
				this.h();
		},
		l(n) {
			t = a(n, 'DIV', { class: !0 });
			var r = o(t);
			s = a(r, 'SPAN', { class: !0 });
			var l = o(s);
			(f = c(l, e[0])), l.forEach(d), (h = i(r)), (v = a(r, 'DIV', { class: !0, style: !0 }));
			var u = o(v);
			(x = c(u, e[1])), (b = c(u, '%')), u.forEach(d), r.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'skill svelte-1moqx9q'),
				u(v, 'class', 'skills svelte-1moqx9q'),
				w(v, 'width', e[3] + '%'),
				w(v, 'background-color', e[2]),
				u(t, 'class', 'container svelte-1moqx9q');
		},
		m(e, n) {
			m(e, t, n), p(t, s), p(s, f), p(t, h), p(t, v), p(v, x), p(v, b);
		},
		p(e, [t]) {
			1 & t && g(f, e[0]),
				2 & t && g(x, e[1]),
				8 & t && w(v, 'width', e[3] + '%'),
				4 & t && w(v, 'background-color', e[2]);
		},
		i: $,
		o: $,
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
		{ delTime: o } = t;
	const i = P(30, { delay: o, duration: 2e3, easing: C });
	return (
		z(e, i, (e) => s(3, (n = e))),
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
class Q extends e {
	constructor(e) {
		super(), t(this, e, K, U, s, { skill: 0, percent: 1, color: 2, delTime: 5 });
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
				b(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			p: $,
			i(e) {
				s || (S(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				j(t, e);
			}
		}
	);
}
function Z(e) {
	let t,
		s,
		r = R,
		l = [];
	for (let n = 0; n < r.length; n += 1) l[n] = Y(X(e, r, n));
	const i = (e) =>
		D(l[e], 1, 1, () => {
			l[e] = null;
		});
	return {
		c() {
			t = n('section');
			for (let e = 0; e < l.length; e += 1) l[e].c();
		},
		l(e) {
			t = a(e, 'SECTION', {});
			var s = o(t);
			for (let t = 0; t < l.length; t += 1) l[t].l(s);
			s.forEach(d);
		},
		m(e, n) {
			m(e, t, n);
			for (let s = 0; s < l.length; s += 1) l[s].m(t, null);
			s = !0;
		},
		p(e, [s]) {
			if (0 & s) {
				let n;
				for (r = R, n = 0; n < r.length; n += 1) {
					const a = X(e, r, n);
					l[n]
						? (l[n].p(a, s), S(l[n], 1))
						: ((l[n] = Y(a)), l[n].c(), S(l[n], 1), l[n].m(t, null));
				}
				for (A(), n = r.length; n < l.length; n += 1) i(n);
				H();
			}
		},
		i(e) {
			if (!s) {
				for (let e = 0; e < r.length; e += 1) S(l[e]);
				s = !0;
			}
		},
		o(e) {
			l = l.filter(Boolean);
			for (let t = 0; t < l.length; t += 1) D(l[t]);
			s = !1;
		},
		d(e) {
			e && d(t), I(l, e);
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
		(t = new O({})),
		{
			c() {
				b(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			i(e) {
				s || (S(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				j(t, e);
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
				b(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (s = !0);
			},
			i(e) {
				s || (S(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				j(t, e);
			}
		}
	);
}
function ne(e) {
	let t, s, n, l, a, o;
	return (
		(t = new q({
			props: {
				id: 'aboutmetxt',
				variante: 7,
				bg_color: 'bggrey_0',
				$$slots: { default: [te] },
				$$scope: { ctx: e }
			}
		})),
		(n = new M({ props: { tipo: 1, variante: 4, title: 'Technical Skills' } })),
		(a = new q({
			props: {
				id: 'skillsbar',
				variante: 1,
				bg_color: 'bggrey_4',
				$$slots: { default: [se] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				b(t.$$.fragment), (s = r()), b(n.$$.fragment), (l = r()), b(a.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e), (s = i(e)), k(n.$$.fragment, e), (l = i(e)), k(a.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), m(e, s, r), E(n, e, r), m(e, l, r), E(a, e, r), (o = !0);
			},
			p(e, [s]) {
				const n = {};
				1 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), a.$set(r);
			},
			i(e) {
				o || (S(t.$$.fragment, e), S(n.$$.fragment, e), S(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				D(t.$$.fragment, e), D(n.$$.fragment, e), D(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				j(t, e), e && d(s), j(n, e), e && d(l), j(a, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, ne, s, {});
	}
}
