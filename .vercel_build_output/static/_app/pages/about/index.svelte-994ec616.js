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
	r as E,
	u as S,
	v as T,
	w as y,
	x as D,
	y as w,
	P as A,
	a0 as q,
	C as H,
	D as I,
	J as j
} from '../../chunks/index-d91e1ed8.js';
import { S as M } from '../../chunks/Section-15bca940.js';
import { t as C } from '../../chunks/index-c4bdeab8.js';
import { b as P } from '../../chunks/index-78b22dae.js';
import '../../chunks/index-cc16b092.js';
function N(e) {
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
function L(e) {
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
function G(e) {
	let t, s, h, v, b, k, x, E, S, T, y, D, w, A, q, H, I;
	function j(e, t) {
		return e[5] ? L : N;
	}
	let M = j(e),
		C = M(e);
	function P(e, t) {
		return e[5] ? B : z;
	}
	let G = P(e),
		V = G(e);
	return {
		c() {
			(t = n('section')),
				(s = n('img')),
				(v = r()),
				(b = n('h2')),
				(k = l(e[0])),
				(x = r()),
				(E = n('br')),
				(S = r()),
				(T = n('span')),
				(y = r()),
				(D = n('div')),
				(w = n('button')),
				C.c(),
				(A = r()),
				(q = n('dl')),
				V.c(),
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
				(S = o(l)),
				(T = a(l, 'SPAN', { class: !0 })),
				i(T).forEach(d),
				l.forEach(d),
				(y = o(r)),
				(D = a(r, 'DIV', { class: !0 }));
			var u = i(D);
			w = a(u, 'BUTTON', { class: !0 });
			var m = i(w);
			C.l(m), m.forEach(d), u.forEach(d), (A = o(r)), (q = a(r, 'DL', { class: !0 }));
			var p = i(q);
			V.l(p), p.forEach(d), r.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'Avatar svelte-kmbrq6'),
				s.src !== (h = e[4]) && u(s, 'src', h),
				u(s, 'alt', e[0]),
				u(E, 'class', 'svelte-kmbrq6'),
				u(T, 'class', 'AboutMeText svelte-kmbrq6'),
				u(b, 'class', 'AboutMeHeader svelte-kmbrq6'),
				u(w, 'class', 'svelte-kmbrq6'),
				u(D, 'class', 'idioma_switch svelte-kmbrq6'),
				u(q, 'class', 'svelte-kmbrq6'),
				u(t, 'class', 'AboutMe svelte-kmbrq6');
		},
		m(n, r) {
			m(n, t, r),
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
				C.m(w, null),
				p(t, A),
				p(t, q),
				V.m(q, null),
				H || ((I = f(w, 'click', e[6])), (H = !0));
		},
		p(e, [t]) {
			16 & t && s.src !== (h = e[4]) && u(s, 'src', h),
				1 & t && u(s, 'alt', e[0]),
				1 & t && g(k, e[0]),
				2 & t && (T.innerHTML = e[1]),
				M !== (M = j(e)) && (C.d(1), (C = M(e)), C && (C.c(), C.m(w, null))),
				G === (G = P(e)) && V ? V.p(e, t) : (V.d(1), (V = G(e)), V && (V.c(), V.m(q, null)));
		},
		i: $,
		o: $,
		d(e) {
			e && d(t), C.d(), V.d(), (H = !1), I();
		}
	};
}
function V(e, t, s) {
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
class W extends e {
	constructor(e) {
		super(), t(this, e, V, G, s, { title: 0, subtitle: 1, text: 2, textingles: 3, img: 4 });
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
		(t = new W({ props: r })),
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
				const r = 0 & s ? S(n, [T(F)]) : {};
				t.$set(r);
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
			var u = i(v);
			(b = c(u, e[1])), (k = c(u, '%')), u.forEach(d), r.forEach(d), this.h();
		},
		h() {
			u(s, 'class', 'skill svelte-1i1nua6'),
				u(v, 'class', 'skills svelte-1i1nua6'),
				A(v, 'width', e[3] + '%'),
				A(v, 'background-color', e[2]),
				u(t, 'class', 'container svelte-1i1nua6');
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
		{ skill: r } = t,
		{ percent: l } = t,
		{ color: a } = t,
		{ delTime: i } = t;
	const o = C(30, { delay: i, duration: 2e3, easing: P });
	return (
		q(e, o, (e) => s(3, (n = e))),
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
	const v = (e) =>
		D(h[e], 1, 1, () => {
			h[e] = null;
		});
	return {
		c() {
			(t = n('section')), (s = n('h2')), (u = l('Technical Skills')), (f = r());
			for (let e = 0; e < h.length; e += 1) h[e].c();
		},
		l(e) {
			t = a(e, 'SECTION', {});
			var n = i(t);
			s = a(n, 'H2', {});
			var r = i(s);
			(u = c(r, 'Technical Skills')), r.forEach(d), (f = o(n));
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
					const r = Q(e, $, n);
					h[n]
						? (h[n].p(r, s), y(h[n], 1))
						: ((h[n] = X(r)), h[n].c(), y(h[n], 1), h[n].m(t, null));
				}
				for (H(), n = $.length; n < h.length; n += 1) v(n);
				I();
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
			e && d(t), j(h, e);
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
	let t, s, n, l;
	return (
		(t = new M({
			props: { id: 'aboutmetxt', variante: 1, $$slots: { default: [ee] }, $$scope: { ctx: e } }
		})),
		(n = new M({
			props: { id: 'skillsbar', variante: 0, $$slots: { default: [te] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				k(t.$$.fragment), (s = r()), k(n.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (s = o(e)), x(n.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), m(e, s, r), E(n, e, r), (l = !0);
			},
			p(e, [s]) {
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), n.$set(l);
			},
			i(e) {
				l || (y(t.$$.fragment, e), y(n.$$.fragment, e), (l = !0));
			},
			o(e) {
				D(t.$$.fragment, e), D(n.$$.fragment, e), (l = !1);
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
