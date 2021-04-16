import {
	S as e,
	i as t,
	s as r,
	e as n,
	j as s,
	t as o,
	c as l,
	a,
	l as i,
	b as c,
	d,
	o as u,
	f,
	g as m,
	G as p,
	h as g,
	n as h,
	k as $,
	_ as b,
	m as v,
	p as k,
	q as y,
	r as E,
	u as x,
	v as T,
	w as S,
	x as w,
	y as D,
	$ as A,
	a0 as j,
	V as q,
	L as H,
	a1 as I,
	C,
	D as M,
	K as P
} from '../../chunks/index-83f33906.js';
import { S as L } from '../../chunks/Section-1b31e13c.js';
import { w as N } from '../../chunks/index-729ebf5a.js';
import { b as O } from '../../chunks/index-78b22dae.js';
function G(e) {
	let t;
	return {
		c() {
			t = o('Español');
		},
		l(e) {
			t = c(e, 'Español');
		},
		m(e, r) {
			f(e, t, r);
		},
		d(e) {
			e && d(t);
		}
	};
}
function V(e) {
	let t;
	return {
		c() {
			t = o('English');
		},
		l(e) {
			t = c(e, 'English');
		},
		m(e, r) {
			f(e, t, r);
		},
		d(e) {
			e && d(t);
		}
	};
}
function z(e) {
	let t, r;
	return {
		c() {
			(r = $()), this.h();
		},
		l(e) {
			(r = $()), this.h();
		},
		h() {
			t = new b(r);
		},
		m(n, s) {
			t.m(e[3], n, s), f(n, r, s);
		},
		p(e, r) {
			8 & r && t.p(e[3]);
		},
		d(e) {
			e && d(r), e && t.d();
		}
	};
}
function B(e) {
	let t, r;
	return {
		c() {
			(r = $()), this.h();
		},
		l(e) {
			(r = $()), this.h();
		},
		h() {
			t = new b(r);
		},
		m(n, s) {
			t.m(e[2], n, s), f(n, r, s);
		},
		p(e, r) {
			4 & r && t.p(e[2]);
		},
		d(e) {
			e && d(r), e && t.d();
		}
	};
}
function W(e) {
	let t, r, $, b, v, k, y, E, x, T, S, w, D, A, j, q, H;
	function I(e, t) {
		return e[5] ? V : G;
	}
	let C = I(e),
		M = C(e);
	function P(e, t) {
		return e[5] ? B : z;
	}
	let L = P(e),
		N = L(e);
	return {
		c() {
			(t = n('section')),
				(r = n('img')),
				(b = s()),
				(v = n('h2')),
				(k = o(e[0])),
				(y = s()),
				(E = n('br')),
				(x = s()),
				(T = n('span')),
				(S = s()),
				(w = n('div')),
				(D = n('button')),
				M.c(),
				(A = s()),
				(j = n('dl')),
				N.c(),
				this.h();
		},
		l(n) {
			t = l(n, 'SECTION', { class: !0 });
			var s = a(t);
			(r = l(s, 'IMG', { class: !0, src: !0, alt: !0 })),
				(b = i(s)),
				(v = l(s, 'H2', { class: !0 }));
			var o = a(v);
			(k = c(o, e[0])),
				(y = i(o)),
				(E = l(o, 'BR', { class: !0 })),
				(x = i(o)),
				(T = l(o, 'SPAN', { class: !0 })),
				a(T).forEach(d),
				o.forEach(d),
				(S = i(s)),
				(w = l(s, 'DIV', { class: !0 }));
			var u = a(w);
			D = l(u, 'BUTTON', { class: !0 });
			var f = a(D);
			M.l(f), f.forEach(d), u.forEach(d), (A = i(s)), (j = l(s, 'DL', { class: !0 }));
			var m = a(j);
			N.l(m), m.forEach(d), s.forEach(d), this.h();
		},
		h() {
			u(r, 'class', 'Avatar svelte-kmbrq6'),
				r.src !== ($ = e[4]) && u(r, 'src', $),
				u(r, 'alt', e[0]),
				u(E, 'class', 'svelte-kmbrq6'),
				u(T, 'class', 'AboutMeText svelte-kmbrq6'),
				u(v, 'class', 'AboutMeHeader svelte-kmbrq6'),
				u(D, 'class', 'svelte-kmbrq6'),
				u(w, 'class', 'idioma_switch svelte-kmbrq6'),
				u(j, 'class', 'svelte-kmbrq6'),
				u(t, 'class', 'AboutMe svelte-kmbrq6');
		},
		m(n, s) {
			f(n, t, s),
				m(t, r),
				m(t, b),
				m(t, v),
				m(v, k),
				m(v, y),
				m(v, E),
				m(v, x),
				m(v, T),
				(T.innerHTML = e[1]),
				m(t, S),
				m(t, w),
				m(w, D),
				M.m(D, null),
				m(t, A),
				m(t, j),
				N.m(j, null),
				q || ((H = p(D, 'click', e[6])), (q = !0));
		},
		p(e, [t]) {
			16 & t && r.src !== ($ = e[4]) && u(r, 'src', $),
				1 & t && u(r, 'alt', e[0]),
				1 & t && g(k, e[0]),
				2 & t && (T.innerHTML = e[1]),
				C !== (C = I(e)) && (M.d(1), (M = C(e)), M && (M.c(), M.m(D, null))),
				L === (L = P(e)) && N ? N.p(e, t) : (N.d(1), (N = L(e)), N && (N.c(), N.m(j, null)));
		},
		i: h,
		o: h,
		d(e) {
			e && d(t), M.d(), N.d(), (q = !1), H();
		}
	};
}
function F(e, t, r) {
	let { title: n = '' } = t,
		{ subtitle: s = '' } = t,
		{ text: o = '' } = t,
		{ textingles: l = '' } = t,
		{ img: a = '' } = t,
		i = !0;
	return (
		(e.$$set = (e) => {
			'title' in e && r(0, (n = e.title)),
				'subtitle' in e && r(1, (s = e.subtitle)),
				'text' in e && r(2, (o = e.text)),
				'textingles' in e && r(3, (l = e.textingles)),
				'img' in e && r(4, (a = e.img));
		}),
		[
			n,
			s,
			o,
			l,
			a,
			i,
			() => {
				r(5, (i = !i));
			}
		]
	);
}
class J extends e {
	constructor(e) {
		super(), t(this, e, F, W, r, { title: 0, subtitle: 1, text: 2, textingles: 3, img: 4 });
	}
}
const R = {
	title: 'Sergio Forés Raga',
	subtitle:
		'Siento que todo está unido y también imbricado por una paradoja tan sutil como rotunda. No distingo entre pintura, impresión 3D, diseño web, código o poesía. Lo que Es es todo a la vez y en eso consiste el proceso de toda la Creación.',
	text:
		'<dt>1992</dt><dd>Estudios de Artes Aplicadas y procedimientos pictóricos.</dd> <dt>1997</dt> <dd>Estudios de Arte Electrónico y Diseño Digital en EsDi.</dd> <dt>Desde 1999</dt> <dd>Ejerciendo como freelance: Diseño Gráfico/Web y desarrollo de temas en Wordpress.</dd> <dt>En 2010</dt> <dd>Me enfoco en Prototipado Frontend y desarrollo de interfaz de usuario.</dd> <dt>2020</dt> <dd>Incorporo la impresión 3D en mi proceso creativo y desarrollo una Hermenéutica Holística de la Creación (+0+1234) como vía trascendental y de autorealización.</dd>',
	textingles:
		'<dt>1992</dt><dd>Studied Applied Arts and pictorial procedures, then Electronic Art and Digital Design.</dd> <dt>Since 1999</dt> <dd>Working as a Graphic and Web Designer.</dd> <dt>2010</dt><dd>I focused on Frontend Prototyping and UI development.</dd> <dt>Since 2020</dt> <dd>I incorporate 3D printing into my creative process and develop a Holistic Hermeneutics of Creation (+0+1234) as a transcendental and self-realization way.</dd>',
	img: './img/avatar.jpg'
};
function U(e) {
	let t, r;
	const n = [R];
	let s = {};
	for (let o = 0; o < n.length; o += 1) s = v(s, n[o]);
	return (
		(t = new J({ props: s })),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (r = !0);
			},
			p(e, [r]) {
				const s = 0 & r ? x(n, [T(R)]) : {};
				t.$set(s);
			},
			i(e) {
				r || (S(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				w(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
class _ extends e {
	constructor(e) {
		super(), t(this, e, null, U, r, {});
	}
}
const K = [
	{ skill: 'HTML / CSS-Sass / SVG', percent: 85, color: 'red', delTime: 0 },
	{ skill: 'JavaScript / Svelte', percent: 50, color: 'darkorange', delTime: 1e3 },
	{ skill: 'Blender / Python Scripting', percent: 35, color: 'green', delTime: 1500 },
	{ skill: '3D Printing', percent: 65, color: 'rebeccapurple', delTime: 2500 },
	{ skill: 'Three JS', percent: 28, color: 'black', delTime: 2500 }
];
function Q(e) {
	return '[object Date]' === Object.prototype.toString.call(e);
}
function X(e, t) {
	if (e === t || e != e) return () => e;
	const r = typeof e;
	if (r !== typeof t || Array.isArray(e) !== Array.isArray(t))
		throw new Error('Cannot interpolate values of different type');
	if (Array.isArray(e)) {
		const r = t.map((t, r) => X(e[r], t));
		return (e) => r.map((t) => t(e));
	}
	if ('object' === r) {
		if (!e || !t) throw new Error('Object cannot be null');
		if (Q(e) && Q(t)) {
			e = e.getTime();
			const r = (t = t.getTime()) - e;
			return (t) => new Date(e + t * r);
		}
		const r = Object.keys(t),
			n = {};
		return (
			r.forEach((r) => {
				n[r] = X(e[r], t[r]);
			}),
			(e) => {
				const t = {};
				return (
					r.forEach((r) => {
						t[r] = n[r](e);
					}),
					t
				);
			}
		);
	}
	if ('number' === r) {
		const r = t - e;
		return (t) => e + t * r;
	}
	throw new Error(`Cannot interpolate ${r} values`);
}
function Y(e) {
	let t, r, p, $, b, v, k;
	return {
		c() {
			(t = n('div')),
				(r = n('span')),
				(p = o(e[0])),
				($ = s()),
				(b = n('div')),
				(v = o(e[1])),
				(k = o('%')),
				this.h();
		},
		l(n) {
			t = l(n, 'DIV', { class: !0 });
			var s = a(t);
			r = l(s, 'SPAN', { class: !0 });
			var o = a(r);
			(p = c(o, e[0])), o.forEach(d), ($ = i(s)), (b = l(s, 'DIV', { class: !0, style: !0 }));
			var u = a(b);
			(v = c(u, e[1])), (k = c(u, '%')), u.forEach(d), s.forEach(d), this.h();
		},
		h() {
			u(r, 'class', 'skill svelte-1i1nua6'),
				u(b, 'class', 'skills svelte-1i1nua6'),
				H(b, 'width', e[3] + '%'),
				H(b, 'background-color', e[2]),
				u(t, 'class', 'container svelte-1i1nua6');
		},
		m(e, n) {
			f(e, t, n), m(t, r), m(r, p), m(t, $), m(t, b), m(b, v), m(b, k);
		},
		p(e, [t]) {
			1 & t && g(p, e[0]),
				2 & t && g(v, e[1]),
				8 & t && H(b, 'width', e[3] + '%'),
				4 & t && H(b, 'background-color', e[2]);
		},
		i: h,
		o: h,
		d(e) {
			e && d(t);
		}
	};
}
function Z(e, t, r) {
	let n,
		{ skill: s } = t,
		{ percent: o } = t,
		{ color: l } = t,
		{ delTime: a } = t;
	const i = (function (e, t = {}) {
		const r = N(e);
		let n,
			s = e;
		function o(o, l) {
			if (null == e) return r.set((e = o)), Promise.resolve();
			s = o;
			let a = n,
				i = !1,
				{ delay: c = 0, duration: d = 400, easing: u = q, interpolate: f = X } = v(v({}, t), l);
			if (0 === d) return a && (a.abort(), (a = null)), r.set((e = s)), Promise.resolve();
			const m = A() + c;
			let p;
			return (
				(n = j((t) => {
					if (t < m) return !0;
					i || ((p = f(e, o)), 'function' == typeof d && (d = d(e, o)), (i = !0)),
						a && (a.abort(), (a = null));
					const n = t - m;
					return n > d ? (r.set((e = o)), !1) : (r.set((e = p(u(n / d)))), !0);
				})),
				n.promise
			);
		}
		return { set: o, update: (t, r) => o(t(s, e), r), subscribe: r.subscribe };
	})(30, { delay: a, duration: 2e3, easing: O });
	return (
		I(e, i, (e) => r(3, (n = e))),
		i.set(o),
		(e.$$set = (e) => {
			'skill' in e && r(0, (s = e.skill)),
				'percent' in e && r(1, (o = e.percent)),
				'color' in e && r(2, (l = e.color)),
				'delTime' in e && r(5, (a = e.delTime));
		}),
		[s, o, l, n, i, a]
	);
}
class ee extends e {
	constructor(e) {
		super(), t(this, e, Z, Y, r, { skill: 0, percent: 1, color: 2, delTime: 5 });
	}
}
function te(e, t, r) {
	const n = e.slice();
	return (n[0] = t[r].skill), (n[1] = t[r].percent), (n[2] = t[r].color), (n[3] = t[r].delTime), n;
}
function re(e) {
	let t, r;
	return (
		(t = new ee({ props: { skill: e[0], percent: e[1], color: e[2], delTime: e[3] } })),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (r = !0);
			},
			p: h,
			i(e) {
				r || (S(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				w(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
function ne(e) {
	let t,
		r,
		u,
		p,
		g,
		h = K,
		$ = [];
	for (let n = 0; n < h.length; n += 1) $[n] = re(te(e, h, n));
	const b = (e) =>
		w($[e], 1, 1, () => {
			$[e] = null;
		});
	return {
		c() {
			(t = n('section')), (r = n('h2')), (u = o('Technical Skills')), (p = s());
			for (let e = 0; e < $.length; e += 1) $[e].c();
		},
		l(e) {
			t = l(e, 'SECTION', {});
			var n = a(t);
			r = l(n, 'H2', {});
			var s = a(r);
			(u = c(s, 'Technical Skills')), s.forEach(d), (p = i(n));
			for (let t = 0; t < $.length; t += 1) $[t].l(n);
			n.forEach(d);
		},
		m(e, n) {
			f(e, t, n), m(t, r), m(r, u), m(t, p);
			for (let r = 0; r < $.length; r += 1) $[r].m(t, null);
			g = !0;
		},
		p(e, [r]) {
			if (0 & r) {
				let n;
				for (h = K, n = 0; n < h.length; n += 1) {
					const s = te(e, h, n);
					$[n]
						? ($[n].p(s, r), S($[n], 1))
						: (($[n] = re(s)), $[n].c(), S($[n], 1), $[n].m(t, null));
				}
				for (C(), n = h.length; n < $.length; n += 1) b(n);
				M();
			}
		},
		i(e) {
			if (!g) {
				for (let e = 0; e < h.length; e += 1) S($[e]);
				g = !0;
			}
		},
		o(e) {
			$ = $.filter(Boolean);
			for (let t = 0; t < $.length; t += 1) w($[t]);
			g = !1;
		},
		d(e) {
			e && d(t), P($, e);
		}
	};
}
class se extends e {
	constructor(e) {
		super(), t(this, e, null, ne, r, {});
	}
}
function oe(e) {
	let t, r;
	return (
		(t = new _({})),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (r = !0);
			},
			i(e) {
				r || (S(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				w(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
function le(e) {
	let t, r;
	return (
		(t = new se({})),
		{
			c() {
				k(t.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), (r = !0);
			},
			i(e) {
				r || (S(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				w(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				D(t, e);
			}
		}
	);
}
function ae(e) {
	let t, r, n, o;
	return (
		(t = new L({
			props: { id: 'aboutmetxt', variante: 1, $$slots: { default: [oe] }, $$scope: { ctx: e } }
		})),
		(n = new L({
			props: { id: 'skillsbar', variante: 0, $$slots: { default: [le] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				k(t.$$.fragment), (r = s()), k(n.$$.fragment);
			},
			l(e) {
				y(t.$$.fragment, e), (r = i(e)), y(n.$$.fragment, e);
			},
			m(e, s) {
				E(t, e, s), f(e, r, s), E(n, e, s), (o = !0);
			},
			p(e, [r]) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
				const o = {};
				1 & r && (o.$$scope = { dirty: r, ctx: e }), n.$set(o);
			},
			i(e) {
				o || (S(t.$$.fragment, e), S(n.$$.fragment, e), (o = !0));
			},
			o(e) {
				w(t.$$.fragment, e), w(n.$$.fragment, e), (o = !1);
			},
			d(e) {
				D(t, e), e && d(r), D(n, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, ae, r, {});
	}
}
