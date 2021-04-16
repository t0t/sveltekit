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
	o as m,
	f as u,
	g as p,
	H as f,
	h as g,
	n as $,
	k as h,
	$ as v,
	m as b,
	p as k,
	q as x,
	r as E,
	u as y,
	v as T,
	w as S,
	x as D,
	y as w,
	P as A,
	a0 as H,
	C as I,
	D as j,
	J as M
} from '../../chunks/index-d91e1ed8.js';
import { S as P, H as C } from '../../chunks/Header-3d35273a.js';
import { t as L } from '../../chunks/index-c4bdeab8.js';
import { b as N } from '../../chunks/index-78b22dae.js';
import '../../chunks/index-cc16b092.js';
function V(e) {
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
function _(e) {
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
function z(e) {
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
function G(e) {
	let t, s, h, v, b, k, x, E, y, T, S, D, w, A, H, I, j;
	function M(e, t) {
		return e[5] ? _ : V;
	}
	let P = M(e),
		C = P(e);
	function L(e, t) {
		return e[5] ? B : z;
	}
	let N = L(e),
		G = N(e);
	return {
		c() {
			(t = n('div')),
				(s = n('img')),
				(v = r()),
				(b = n('h2')),
				(k = l(e[0])),
				(x = r()),
				(E = n('br')),
				(y = r()),
				(T = n('span')),
				(S = r()),
				(D = n('div')),
				(w = n('button')),
				C.c(),
				(A = r()),
				(H = n('dl')),
				G.c(),
				this.h();
		},
		l(n) {
			t = a(n, 'DIV', { class: !0 });
			var r = o(t);
			(s = a(r, 'IMG', { class: !0, src: !0, alt: !0 })),
				(v = i(r)),
				(b = a(r, 'H2', { class: !0 }));
			var l = o(b);
			(k = c(l, e[0])),
				(x = i(l)),
				(E = a(l, 'BR', { class: !0 })),
				(y = i(l)),
				(T = a(l, 'SPAN', { class: !0 })),
				o(T).forEach(d),
				l.forEach(d),
				(S = i(r)),
				(D = a(r, 'DIV', { class: !0 }));
			var m = o(D);
			w = a(m, 'BUTTON', { class: !0 });
			var u = o(w);
			C.l(u), u.forEach(d), m.forEach(d), (A = i(r)), (H = a(r, 'DL', { class: !0 }));
			var p = o(H);
			G.l(p), p.forEach(d), r.forEach(d), this.h();
		},
		h() {
			m(s, 'class', 'Avatar svelte-7n51pr'),
				s.src !== (h = e[4]) && m(s, 'src', h),
				m(s, 'alt', e[0]),
				m(E, 'class', 'svelte-7n51pr'),
				m(T, 'class', 'AboutMeText svelte-7n51pr'),
				m(b, 'class', 'AboutMeHeader svelte-7n51pr'),
				m(w, 'class', 'svelte-7n51pr'),
				m(D, 'class', 'idioma_switch svelte-7n51pr'),
				m(H, 'class', 'timeline svelte-7n51pr'),
				m(t, 'class', 'AboutMe svelte-7n51pr');
		},
		m(n, r) {
			u(n, t, r),
				p(t, s),
				p(t, v),
				p(t, b),
				p(b, k),
				p(b, x),
				p(b, E),
				p(b, y),
				p(b, T),
				(T.innerHTML = e[1]),
				p(t, S),
				p(t, D),
				p(D, w),
				C.m(w, null),
				p(t, A),
				p(t, H),
				G.m(H, null),
				I || ((j = f(w, 'click', e[6])), (I = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== (h = e[4]) && m(s, 'src', h),
				1 & t && m(s, 'alt', e[0]),
				1 & t && g(k, e[0]),
				2 & t && (T.innerHTML = e[1]),
				P !== (P = M(e)) && (C.d(1), (C = P(e)), C && (C.c(), C.m(w, null))),
				N === (N = L(e)) && G ? G.p(e, t) : (G.d(1), (G = N(e)), G && (G.c(), G.m(H, null)));
		},
		i: $,
		o: $,
		d(e) {
			e && d(t), C.d(), G.d(), (I = !1), j();
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
		super(), t(this, e, W, G, s, { title: 0, subtitle: 1, text: 2, textingles: 3, img: 4 });
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
	for (let l = 0; l < n.length; l += 1) r = b(r, n[l]);
	return (
		(t = new q({ props: r })),
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
				const r = 0 & s ? y(n, [T(F)]) : {};
				t.$set(r);
			},
			i(e) {
				s || (S(t.$$.fragment, e), (s = !0));
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
			var r = o(t);
			s = a(r, 'SPAN', { class: !0 });
			var l = o(s);
			(f = c(l, e[0])), l.forEach(d), (h = i(r)), (v = a(r, 'DIV', { class: !0, style: !0 }));
			var m = o(v);
			(b = c(m, e[1])), (k = c(m, '%')), m.forEach(d), r.forEach(d), this.h();
		},
		h() {
			m(s, 'class', 'skill svelte-ymos17'),
				m(v, 'class', 'skills svelte-ymos17'),
				A(v, 'width', e[3] + '%'),
				A(v, 'background-color', e[2]),
				m(t, 'class', 'container svelte-ymos17');
		},
		m(e, n) {
			u(e, t, n), p(t, s), p(s, f), p(t, h), p(t, v), p(v, b), p(v, k);
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
function K(e, t, s) {
	let n,
		{ skill: r } = t,
		{ percent: l } = t,
		{ color: a } = t,
		{ delTime: o } = t;
	const i = L(30, { delay: o, duration: 2e3, easing: N });
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
				k(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
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
				w(t, e);
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
			u(e, t, n);
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
				for (I(), n = r.length; n < l.length; n += 1) i(n);
				j();
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
				s || (S(t.$$.fragment, e), (s = !0));
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
				s || (S(t.$$.fragment, e), (s = !0));
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
function ne(e) {
	let t, s, n, l, a, o;
	return (
		(t = new P({
			props: {
				id: 'aboutmetxt',
				variante: 7,
				bg_color: 'bgc_0',
				$$slots: { default: [te] },
				$$scope: { ctx: e }
			}
		})),
		(n = new C({ props: { tipo: 1, variante: 4, title: 'Technical Skills' } })),
		(a = new P({
			props: {
				id: 'skillsbar',
				variante: 1,
				bg_color: 'bgc_4',
				$$slots: { default: [se] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				k(t.$$.fragment), (s = r()), k(n.$$.fragment), (l = r()), k(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (s = i(e)), x(n.$$.fragment, e), (l = i(e)), x(a.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), u(e, s, r), E(n, e, r), u(e, l, r), E(a, e, r), (o = !0);
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
				w(t, e), e && d(s), w(n, e), e && d(l), w(a, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, ne, s, {});
	}
}
