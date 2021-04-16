import {
	S as t,
	i as e,
	s as a,
	e as s,
	t as r,
	j as n,
	c as i,
	a as l,
	b as c,
	d as o,
	l as m,
	o as g,
	f as d,
	g as $,
	h as p,
	n as u,
	G as f,
	H as h,
	F as v,
	K as b,
	Y as I,
	p as x,
	q as _,
	r as E,
	w as D,
	x as w,
	y as V,
	C as k,
	D as P,
	Q as y,
	Z as q,
	_ as j,
	J as S
} from '../../chunks/index-d91e1ed8.js';
import { B as T, c as N } from '../../chunks/Grid.svelte-81f2d089.js';
/* empty css                                   */ import { I as C } from '../../chunks/Img-8391a33a.js';
/* empty css                               */ import {
	a as L,
	f as G
} from '../../chunks/index-65311448.js';
import { S as U, H as A } from '../../chunks/Header-3d35273a.js';
import { B as H } from '../../chunks/Blockquote-e9c576c6.js';
import '../../chunks/index-78b22dae.js';
const M = [
	{
		id: 0,
		name: 'Primera imagen',
		imgurl: 'img/obra/img1.jpg',
		description: '3D Print Painting. 100cm'
	},
	{
		id: 1,
		name: 'Red Nature',
		imgurl: 'img/obra/img2.jpg',
		description: '3D Print Painting. 100cm'
	},
	{ id: 2, name: 'Path', imgurl: 'img/obra/img3.jpg', description: '3D Print Painting. 100cm' },
	{
		id: 3,
		name: 'Country Road',
		imgurl: 'img/obra/img4.jpg',
		description: '3D Print Painting. 100cm'
	},
	{
		id: 4,
		name: 'Throughway',
		imgurl: 'img/obra/img5.jpg',
		description: '3D Print Painting. 100cm'
	},
	{
		id: 5,
		name: 'Golden Pond',
		imgurl: 'img/obra/img5.jpg',
		description: '3D Print Painting. 100cm'
	},
	{
		id: 6,
		name: 'preUltima imagen',
		imgurl: 'img/obra/img6.jpg',
		description: '3D Print Painting. 100cm'
	},
	{
		id: 7,
		name: 'Ultima imagen',
		imgurl: 'img/obra/img3.jpg',
		description: '3D Print Painting. 100cm'
	}
];
function R(t) {
	let e, a, f, h, v, b, I, x;
	return {
		c() {
			(e = s('div')),
				(a = s('div')),
				(f = r(t[0])),
				(h = r(' / ')),
				(v = r(t[1])),
				(b = n()),
				(I = s('img')),
				this.h();
		},
		l(s) {
			e = i(s, 'DIV', { class: !0 });
			var r = l(e);
			a = i(r, 'DIV', { class: !0 });
			var n = l(a);
			(f = c(n, t[0])),
				(h = c(n, ' / ')),
				(v = c(n, t[1])),
				n.forEach(o),
				(b = m(r)),
				(I = i(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(o),
				this.h();
		},
		h() {
			g(a, 'class', 'numbertext svelte-sxsvy1'),
				I.src !== (x = t[2]) && g(I, 'src', x),
				g(I, 'alt', t[3]),
				g(I, 'title', t[4]),
				g(I, 'class', 'svelte-sxsvy1'),
				g(e, 'class', 'Slide svelte-sxsvy1');
		},
		m(t, s) {
			d(t, e, s), $(e, a), $(a, f), $(a, h), $(a, v), $(e, b), $(e, I);
		},
		p(t, [e]) {
			1 & e && p(f, t[0]),
				2 & e && p(v, t[1]),
				4 & e && I.src !== (x = t[2]) && g(I, 'src', x),
				8 & e && g(I, 'alt', t[3]),
				16 & e && g(I, 'title', t[4]);
		},
		i: u,
		o: u,
		d(t) {
			t && o(e);
		}
	};
}
function B(t, e, a) {
	let { slideNo: s } = e,
		{ totalSlides: r } = e,
		{ image: n } = e,
		{ altTag: i } = e,
		{ description: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && a(0, (s = t.slideNo)),
				'totalSlides' in t && a(1, (r = t.totalSlides)),
				'image' in t && a(2, (n = t.image)),
				'altTag' in t && a(3, (i = t.altTag)),
				'description' in t && a(4, (l = t.description));
		}),
		[s, r, n, i, l]
	);
}
class O extends t {
	constructor(t) {
		super(),
			e(this, t, B, R, a, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function W(t) {
	let e, a, r, n;
	return {
		c() {
			(e = s('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			g(e, 'class', 'sample cursor svelte-1apwds9'),
				g(e, 'id', t[3]),
				e.src !== (a = t[0]) && g(e, 'src', a),
				g(e, 'alt', t[1]),
				g(e, 'title', t[2]),
				f(e, 'active', t[4]);
		},
		m(a, s) {
			d(a, e, s), r || ((n = h(e, 'click', t[5])), (r = !0));
		},
		p(t, [s]) {
			8 & s && g(e, 'id', t[3]),
				1 & s && e.src !== (a = t[0]) && g(e, 'src', a),
				2 & s && g(e, 'alt', t[1]),
				4 & s && g(e, 'title', t[2]),
				16 & s && f(e, 'active', t[4]);
		},
		i: u,
		o: u,
		d(t) {
			t && o(e), (r = !1), n();
		}
	};
}
function z(t, e, a) {
	let { thumbImg: s } = e,
		{ altTag: r } = e,
		{ titleLink: n } = e,
		{ id: i } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && a(0, (s = t.thumbImg)),
				'altTag' in t && a(1, (r = t.altTag)),
				'titleLink' in t && a(2, (n = t.titleLink)),
				'id' in t && a(3, (i = t.id)),
				'selected' in t && a(4, (l = t.selected));
		}),
		[
			s,
			r,
			n,
			i,
			l,
			function (e) {
				v(t, e);
			}
		]
	);
}
class F extends t {
	constructor(t) {
		super(), e(this, t, z, W, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function J(t) {
	let e, a, f, v, I, x, _, E, D, w, V;
	return {
		c() {
			(e = s('div')),
				(a = s('a')),
				(f = r('❮')),
				(v = n()),
				(I = s('p')),
				(x = r(t[0])),
				(_ = n()),
				(E = s('a')),
				(D = r('❯')),
				this.h();
		},
		l(s) {
			e = i(s, 'DIV', { class: !0 });
			var r = l(e);
			a = i(r, 'A', { href: !0, class: !0 });
			var n = l(a);
			(f = c(n, '❮')), n.forEach(o), (v = m(r)), (I = i(r, 'P', { id: !0, class: !0 }));
			var g = l(I);
			(x = c(g, t[0])), g.forEach(o), (_ = m(r)), (E = i(r, 'A', { href: !0, class: !0 }));
			var d = l(E);
			(D = c(d, '❯')), d.forEach(o), r.forEach(o), this.h();
		},
		h() {
			g(a, 'href', '#arrowL'),
				g(a, 'class', 'arrow prev svelte-1rbbar7'),
				g(I, 'id', 'caption'),
				g(I, 'class', 'svelte-1rbbar7'),
				g(E, 'href', '#arrowR'),
				g(E, 'class', 'arrow next svelte-1rbbar7'),
				g(e, 'class', 'caption-container svelte-1rbbar7');
		},
		m(s, r) {
			d(s, e, r),
				$(e, a),
				$(a, f),
				$(e, v),
				$(e, I),
				$(I, x),
				$(e, _),
				$(e, E),
				$(E, D),
				w || ((V = [h(a, 'click', t[2]), h(E, 'click', t[3])]), (w = !0));
		},
		p(t, [e]) {
			1 & e && p(x, t[0]);
		},
		i: u,
		o: u,
		d(t) {
			t && o(e), (w = !1), b(V);
		}
	};
}
function K(t, e, a) {
	let { caption: s } = e;
	const r = I();
	return (
		(t.$$set = (t) => {
			'caption' in t && a(0, (s = t.caption));
		}),
		[s, r, () => r('prevClick'), () => r('nextClick')]
	);
}
class Q extends t {
	constructor(t) {
		super(), e(this, t, K, J, a, { caption: 0 });
	}
}
function Y(t, e, a) {
	const s = t.slice();
	return (s[7] = e[a].id), (s[8] = e[a].imgurl), (s[9] = e[a].name), s;
}
function Z(t) {
	let e, a;
	return (
		(e = new F({
			props: { thumbImg: t[8], altTag: t[9], id: t[7], selected: Number(t[0]) === t[7] }
		})),
		e.$on('click', function () {
			return t[6](t[7]);
		}),
		{
			c() {
				x(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			p(a, s) {
				t = a;
				const r = {};
				1 & s && (r.selected = Number(t[0]) === t[7]), e.$set(r);
			},
			i(t) {
				a || (D(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				V(e, t);
			}
		}
	);
}
function X(t) {
	let e, a, p, u, f, v, b, I, T, N, C, U, A, H;
	(f = new O({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: M.length
		}
	})),
		(b = new Q({ props: { caption: M[t[0]].description } })),
		b.$on('prevClick', t[3]),
		b.$on('nextClick', t[2]);
	let R = M,
		B = [];
	for (let s = 0; s < R.length; s += 1) B[s] = Z(Y(t, R, s));
	const W = (t) =>
		w(B[t], 1, 1, () => {
			B[t] = null;
		});
	return {
		c() {
			(e = s('div')),
				(a = s('span')),
				(p = r('✗')),
				(u = n()),
				x(f.$$.fragment),
				(v = n()),
				x(b.$$.fragment),
				(I = n()),
				(T = s('div'));
			for (let t = 0; t < B.length; t += 1) B[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var s = l(e);
			a = i(s, 'SPAN', { class: !0 });
			var r = l(a);
			(p = c(r, '✗')),
				r.forEach(o),
				(u = m(s)),
				_(f.$$.fragment, s),
				(v = m(s)),
				_(b.$$.fragment, s),
				(I = m(s)),
				(T = i(s, 'DIV', { class: !0 }));
			var n = l(T);
			for (let e = 0; e < B.length; e += 1) B[e].l(n);
			n.forEach(o), s.forEach(o), this.h();
		},
		h() {
			g(a, 'class', 'close cursor svelte-1khr2xt'),
				g(T, 'class', 'Thumbnails svelte-1khr2xt'),
				g(e, 'class', 'lightbox svelte-1khr2xt');
		},
		m(s, r) {
			d(s, e, r),
				$(e, a),
				$(a, p),
				$(e, u),
				E(f, e, null),
				$(e, v),
				E(b, e, null),
				$(e, I),
				$(e, T);
			for (let t = 0; t < B.length; t += 1) B[t].m(T, null);
			(U = !0), A || ((H = h(a, 'click', t[5])), (A = !0));
		},
		p(t, [e]) {
			const a = {};
			2 & e && (a.image = t[1].imgurl),
				2 & e && (a.altTag = t[1].name),
				2 & e && (a.attr = t[1].description),
				2 & e && (a.slideNo = t[1].id + 1),
				f.$set(a);
			const s = {};
			if ((1 & e && (s.caption = M[t[0]].description), b.$set(s), 17 & e)) {
				let a;
				for (R = M, a = 0; a < R.length; a += 1) {
					const s = Y(t, R, a);
					B[a]
						? (B[a].p(s, e), D(B[a], 1))
						: ((B[a] = Z(s)), B[a].c(), D(B[a], 1), B[a].m(T, null));
				}
				for (k(), a = R.length; a < B.length; a += 1) W(a);
				P();
			}
		},
		i(t) {
			if (!U) {
				D(f.$$.fragment, t), D(b.$$.fragment, t);
				for (let t = 0; t < R.length; t += 1) D(B[t]);
				y(() => {
					C && C.end(1), N || (N = q(e, L, { x: -300 })), N.start();
				}),
					(U = !0);
			}
		},
		o(t) {
			w(f.$$.fragment, t), w(b.$$.fragment, t), (B = B.filter(Boolean));
			for (let e = 0; e < B.length; e += 1) w(B[e]);
			N && N.invalidate(), (C = j(e, G, {})), (U = !1);
		},
		d(t) {
			t && o(e), V(f), V(b), S(B, t), t && C && C.end(), (A = !1), H();
		}
	};
}
function tt(t, e, a) {
	let s,
		{ imageShowingIndex: r = 0 } = e;
	const n = (t) => a(0, (r = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && a(0, (r = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && a(1, (s = M[r]));
		}),
		[
			r,
			s,
			() => {
				a(0, r === M.length - 1 ? (r = 0) : (r += 1));
			},
			() => {
				a(0, 0 === r ? (r = M.length - 1) : (r -= 1));
			},
			n,
			function (e) {
				v(t, e);
			},
			(t) => n(t)
		]
	);
}
class et extends t {
	constructor(t) {
		super(), e(this, t, tt, X, a, { imageShowingIndex: 0 });
	}
}
function at(t, e, a) {
	const s = t.slice();
	return (s[1] = e[a].id), (s[2] = e[a].imgurl), (s[3] = e[a].name), s;
}
function st(t) {
	let e, a, r, n;
	return {
		c() {
			(e = s('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			g(e, 'id', t[1]),
				e.src !== (a = t[2]) && g(e, 'src', a),
				g(e, 'alt', t[3]),
				g(e, 'class', 'svelte-1a2q42q');
		},
		m(a, s) {
			d(a, e, s), r || ((n = h(e, 'click', t[0])), (r = !0));
		},
		p: u,
		d(t) {
			t && o(e), (r = !1), n();
		}
	};
}
function rt(t) {
	let e,
		a = M,
		r = [];
	for (let s = 0; s < a.length; s += 1) r[s] = st(at(t, a, s));
	return {
		c() {
			e = s('div');
			for (let t = 0; t < r.length; t += 1) r[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var a = l(e);
			for (let e = 0; e < r.length; e += 1) r[e].l(a);
			a.forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'DemoGallery svelte-1a2q42q');
		},
		m(t, a) {
			d(t, e, a);
			for (let s = 0; s < r.length; s += 1) r[s].m(e, null);
		},
		p(t, [s]) {
			if (0 & s) {
				let n;
				for (a = M, n = 0; n < a.length; n += 1) {
					const i = at(t, a, n);
					r[n] ? r[n].p(i, s) : ((r[n] = st(i)), r[n].c(), r[n].m(e, null));
				}
				for (; n < r.length; n += 1) r[n].d(1);
				r.length = a.length;
			}
		},
		i: u,
		o: u,
		d(t) {
			t && o(e), S(r, t);
		}
	};
}
function nt(t) {
	return [
		function (e) {
			v(t, e);
		}
	];
}
class it extends t {
	constructor(t) {
		super(), e(this, t, nt, rt, a, {});
	}
}
function lt(t) {
	let e, a;
	return (
		(e = new it({})),
		e.$on('click', t[2]),
		{
			c() {
				x(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			p: u,
			i(t) {
				a || (D(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				V(e, t);
			}
		}
	);
}
function ct(t) {
	let e, a;
	return (
		(e = new et({ props: { imageShowingIndex: t[1] } })),
		e.$on('click', t[3]),
		{
			c() {
				x(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			p(t, a) {
				const s = {};
				2 & a && (s.imageShowingIndex = t[1]), e.$set(s);
			},
			i(t) {
				a || (D(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				V(e, t);
			}
		}
	);
}
function ot(t) {
	let e, a, r, c, $, p;
	const u = [ct, lt],
		f = [];
	function h(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = h(t)),
		(a = f[e] = u[e](t)),
		($ = new T({ props: { variante: 2, text: 'View All' } })),
		$.$on('click', t[4]),
		{
			c() {
				a.c(), (r = n()), (c = s('aside')), x($.$$.fragment), this.h();
			},
			l(t) {
				a.l(t), (r = m(t)), (c = i(t, 'ASIDE', { class: !0 }));
				var e = l(c);
				_($.$$.fragment, e), e.forEach(o), this.h();
			},
			h() {
				g(c, 'class', 'svelte-13vdff5');
			},
			m(t, a) {
				f[e].m(t, a), d(t, r, a), d(t, c, a), E($, c, null), (p = !0);
			},
			p(t, [s]) {
				let n = e;
				(e = h(t)),
					e === n
						? f[e].p(t, s)
						: (k(),
						  w(f[n], 1, 1, () => {
								f[n] = null;
						  }),
						  P(),
						  (a = f[e]),
						  a ? a.p(t, s) : ((a = f[e] = u[e](t)), a.c()),
						  D(a, 1),
						  a.m(r.parentNode, r));
			},
			i(t) {
				p || (D(a), D($.$$.fragment, t), (p = !0));
			},
			o(t) {
				w(a), w($.$$.fragment, t), (p = !1);
			},
			d(t) {
				f[e].d(t), t && o(r), t && o(c), V($);
			}
		}
	);
}
function mt(t, e, a) {
	let s = !1,
		r = 0;
	return [
		s,
		r,
		(t) => {
			a(1, (r = Number(t.target.id))), a(0, (s = !0));
		},
		() => a(0, (s = !1)),
		() => a(0, (s = !0))
	];
}
class gt extends t {
	constructor(t) {
		super(), e(this, t, mt, ot, a, {});
	}
}
function dt(t) {
	let e, a, n, m, p, f, h, v;
	return {
		c() {
			(e = s('div')),
				(a = s('video')),
				(n = s('source')),
				(p = s('source')),
				(h = s('p')),
				(v = r('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var s = l(e);
			a = i(s, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var r = l(a);
			(n = i(r, 'SOURCE', { src: !0, type: !0 })),
				(p = i(r, 'SOURCE', { src: !0, type: !0 })),
				(h = i(r, 'P', {}));
			var m = l(h);
			(v = c(m, 'Ups! Su navegador no soporta vídeos HTML5.')),
				m.forEach(o),
				r.forEach(o),
				s.forEach(o),
				this.h();
		},
		h() {
			n.src !== (m = '/img/desdelapoesiadelamateria.webm') &&
				g(n, 'src', '/img/desdelapoesiadelamateria.webm'),
				g(n, 'type', 'video/webm'),
				p.src !== (f = '/img/desdelapoesiadelamateria.mp4') &&
					g(p, 'src', '/img/desdelapoesiadelamateria.mp4'),
				g(p, 'type', 'video/mp4'),
				g(a, 'poster', '/img/cover3.jpg'),
				(a.loop = !0),
				(a.playsInline = !0),
				(a.controls = 'controls'),
				g(e, 'class', 'video-wrapper svelte-1vnv3v8');
		},
		m(t, s) {
			d(t, e, s), $(e, a), $(a, n), $(a, p), $(a, h), $(h, v);
		},
		p: u,
		i: u,
		o: u,
		d(t) {
			t && o(e);
		}
	};
}
class $t extends t {
	constructor(t) {
		super(), e(this, t, null, dt, a, {});
	}
}
function pt(t) {
	let e, a, r, c, p, f, h, v, b, I, k, P, y, q, j, S, T, C;
	return (
		(c = new A({
			props: { tipo: 2, variante: 6, title: N[1].title, subtitle: N[1].subtitle, text: N[1].text }
		})),
		(h = new $t({})),
		(j = new H({
			props: {
				variante: 1,
				text:
					'Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia.'
			}
		})),
		{
			c() {
				(e = s('div')),
					(a = s('div')),
					(r = s('div')),
					x(c.$$.fragment),
					(p = n()),
					(f = s('div')),
					x(h.$$.fragment),
					(v = n()),
					(b = s('div')),
					(I = s('div')),
					(k = n()),
					(P = s('div')),
					(y = n()),
					(q = s('div')),
					x(j.$$.fragment),
					(S = n()),
					(T = s('div')),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var s = l(e);
				a = i(s, 'DIV', { class: !0 });
				var n = l(a);
				r = i(n, 'DIV', { class: !0 });
				var g = l(r);
				_(c.$$.fragment, g), g.forEach(o), (p = m(n)), (f = i(n, 'DIV', { class: !0 }));
				var d = l(f);
				_(h.$$.fragment, d),
					d.forEach(o),
					n.forEach(o),
					(v = m(s)),
					(b = i(s, 'DIV', { class: !0 }));
				var $ = l(b);
				(I = i($, 'DIV', { class: !0 })),
					l(I).forEach(o),
					(k = m($)),
					(P = i($, 'DIV', { class: !0 })),
					l(P).forEach(o),
					$.forEach(o),
					(y = m(s)),
					(q = i(s, 'DIV', { class: !0 }));
				var u = l(q);
				_(j.$$.fragment, u),
					u.forEach(o),
					(S = m(s)),
					(T = i(s, 'DIV', { class: !0 })),
					l(T).forEach(o),
					s.forEach(o),
					this.h();
			},
			h() {
				g(r, 'class', 'grid-3 bgc_primary p_2'),
					g(f, 'class', 'grid-10 bgc_4'),
					g(a, 'class', 'gr'),
					g(I, 'class', 'grid-5 bgc_5'),
					g(P, 'class', 'grid-8 bgc_5'),
					g(b, 'class', 'gr'),
					g(q, 'class', 'slot_5 c_1 bgc_4 pcc p_2 tac'),
					g(T, 'class', 'slot_4 bgc_4'),
					g(e, 'class', 'dg g_0');
			},
			m(t, s) {
				d(t, e, s),
					$(e, a),
					$(a, r),
					E(c, r, null),
					$(a, p),
					$(a, f),
					E(h, f, null),
					$(e, v),
					$(e, b),
					$(b, I),
					$(b, k),
					$(b, P),
					$(e, y),
					$(e, q),
					E(j, q, null),
					$(e, S),
					$(e, T),
					(C = !0);
			},
			p: u,
			i(t) {
				C || (D(c.$$.fragment, t), D(h.$$.fragment, t), D(j.$$.fragment, t), (C = !0));
			},
			o(t) {
				w(c.$$.fragment, t), w(h.$$.fragment, t), w(j.$$.fragment, t), (C = !1);
			},
			d(t) {
				t && o(e), V(c), V(h), V(j);
			}
		}
	);
}
function ut(t) {
	let e, a, s, r;
	return (
		(e = new A({ props: { tipo: 1, variante: 3, title: 'Galería' } })),
		(s = new gt({})),
		{
			c() {
				x(e.$$.fragment), (a = n()), x(s.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t), (a = m(t)), _(s.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), d(t, a, n), E(s, t, n), (r = !0);
			},
			p: u,
			i(t) {
				r || (D(e.$$.fragment, t), D(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				w(e.$$.fragment, t), w(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				V(e, t), t && o(a), V(s, t);
			}
		}
	);
}
function ft(t) {
	let e, a, p, f, h, v, b, I, k, P, y, q, j, S, T, N;
	return (
		(b = new C({ props: { variante: 1, src: './img/bg3.jpg', alt: 'Presentation' } })),
		(j = new H({
			props: {
				variante: 1,
				text:
					'En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original.'
			}
		})),
		{
			c() {
				(e = s('div')),
					(a = s('div')),
					(p = s('p')),
					(f = r(
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nulla labore ipsam? Excepturi nostrum doloremque fugit quidem porro corporis? Cumque atque consequuntur aliquid labore assumenda dolores, magnam quia eius voluptatem.'
					)),
					(h = n()),
					(v = s('div')),
					x(b.$$.fragment),
					(I = n()),
					(k = s('div')),
					(P = r('aqui')),
					(y = n()),
					(q = s('div')),
					x(j.$$.fragment),
					(S = n()),
					(T = s('div')),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var s = l(e);
				a = i(s, 'DIV', { class: !0 });
				var r = l(a);
				p = i(r, 'P', {});
				var n = l(p);
				(f = c(
					n,
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nulla labore ipsam? Excepturi nostrum doloremque fugit quidem porro corporis? Cumque atque consequuntur aliquid labore assumenda dolores, magnam quia eius voluptatem.'
				)),
					n.forEach(o),
					r.forEach(o),
					(h = m(s)),
					(v = i(s, 'DIV', { class: !0 }));
				var g = l(v);
				_(b.$$.fragment, g), g.forEach(o), (I = m(s)), (k = i(s, 'DIV', { class: !0 }));
				var d = l(k);
				(P = c(d, 'aqui')), d.forEach(o), (y = m(s)), (q = i(s, 'DIV', { class: !0 }));
				var $ = l(q);
				_(j.$$.fragment, $),
					$.forEach(o),
					(S = m(s)),
					(T = i(s, 'DIV', { class: !0 })),
					l(T).forEach(o),
					s.forEach(o),
					this.h();
			},
			h() {
				g(a, 'class', 'slot_1 bgc_5 pl_2 pr_2'),
					g(v, 'class', 'slot_2 bgc_4'),
					g(k, 'class', 'slot_3 bgc_primary fullfill'),
					g(q, 'class', 'slot_4 bgc_primary pt_3 pb_3  bgc_0 c_4 pl_0'),
					g(T, 'class', 'slot_5'),
					g(e, 'class', 'dg g_0');
			},
			m(t, s) {
				d(t, e, s),
					$(e, a),
					$(a, p),
					$(p, f),
					$(e, h),
					$(e, v),
					E(b, v, null),
					$(e, I),
					$(e, k),
					$(k, P),
					$(e, y),
					$(e, q),
					E(j, q, null),
					$(e, S),
					$(e, T),
					(N = !0);
			},
			p: u,
			i(t) {
				N || (D(b.$$.fragment, t), D(j.$$.fragment, t), (N = !0));
			},
			o(t) {
				w(b.$$.fragment, t), w(j.$$.fragment, t), (N = !1);
			},
			d(t) {
				t && o(e), V(b), V(j);
			}
		}
	);
}
function ht(t) {
	let e, a, r, c, p, f, h, v, b, I, k, P, y, q, j;
	return (
		(p = new H({
			props: {
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(h = new T({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		(P = new C({ props: { variante: 1, src: './img/bg2.jpg', alt: 'Presentation' } })),
		{
			c() {
				(e = s('div')),
					(a = s('div')),
					(r = n()),
					(c = s('div')),
					x(p.$$.fragment),
					(f = n()),
					x(h.$$.fragment),
					(v = n()),
					(b = s('div')),
					(I = n()),
					(k = s('div')),
					x(P.$$.fragment),
					(y = n()),
					(q = s('div')),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var s = l(e);
				(a = i(s, 'DIV', { class: !0 })),
					l(a).forEach(o),
					(r = m(s)),
					(c = i(s, 'DIV', { class: !0 }));
				var n = l(c);
				_(p.$$.fragment, n),
					(f = m(n)),
					_(h.$$.fragment, n),
					n.forEach(o),
					(v = m(s)),
					(b = i(s, 'DIV', { class: !0 })),
					l(b).forEach(o),
					(I = m(s)),
					(k = i(s, 'DIV', { class: !0 }));
				var g = l(k);
				_(P.$$.fragment, g),
					g.forEach(o),
					(y = m(s)),
					(q = i(s, 'DIV', { class: !0 })),
					l(q).forEach(o),
					s.forEach(o),
					this.h();
			},
			h() {
				g(a, 'class', 'slot_1 bgc_primary c_4 pl_2 pr_2'),
					g(c, 'class', 'slot_3 dg pt_3 pb_3 tac bgc_0 pcc c_4 gap_2'),
					g(b, 'class', 'slot_2 bgc_0'),
					g(k, 'class', 'slot_4 bgc_primary'),
					g(q, 'class', 'slot_5 bgc_4'),
					g(e, 'class', 'dg g_0');
			},
			m(t, s) {
				d(t, e, s),
					$(e, a),
					$(e, r),
					$(e, c),
					E(p, c, null),
					$(c, f),
					E(h, c, null),
					$(e, v),
					$(e, b),
					$(e, I),
					$(e, k),
					E(P, k, null),
					$(e, y),
					$(e, q),
					(j = !0);
			},
			p: u,
			i(t) {
				j || (D(p.$$.fragment, t), D(h.$$.fragment, t), D(P.$$.fragment, t), (j = !0));
			},
			o(t) {
				w(p.$$.fragment, t), w(h.$$.fragment, t), w(P.$$.fragment, t), (j = !1);
			},
			d(t) {
				t && o(e), V(p), V(h), V(P);
			}
		}
	);
}
function vt(t) {
	let e, a, p, u, f, h, v, b, I, k, P, y, q, j, S;
	return (
		(b = new U({
			props: { id: 'cover', variante: 3, $$slots: { default: [pt] }, $$scope: { ctx: t } }
		})),
		(k = new U({
			props: {
				id: 'lightboxgallery',
				variante: 0,
				bg_color: 'bgc_5',
				$$slots: { default: [ut] },
				$$scope: { ctx: t }
			}
		})),
		(y = new U({ props: { variante: 1, $$slots: { default: [ft] }, $$scope: { ctx: t } } })),
		(j = new U({ props: { variante: 1, $$slots: { default: [ht] }, $$scope: { ctx: t } } })),
		{
			c() {
				(e = s('div')),
					(a = s('div')),
					(p = r('555')),
					(u = n()),
					(f = s('div')),
					(h = r('8')),
					(v = n()),
					x(b.$$.fragment),
					(I = n()),
					x(k.$$.fragment),
					(P = n()),
					x(y.$$.fragment),
					(q = n()),
					x(j.$$.fragment),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var s = l(e);
				a = i(s, 'DIV', { class: !0 });
				var r = l(a);
				(p = c(r, '555')), r.forEach(o), (u = m(s)), (f = i(s, 'DIV', { class: !0 }));
				var n = l(f);
				(h = c(n, '8')),
					n.forEach(o),
					s.forEach(o),
					(v = m(t)),
					_(b.$$.fragment, t),
					(I = m(t)),
					_(k.$$.fragment, t),
					(P = m(t)),
					_(y.$$.fragment, t),
					(q = m(t)),
					_(j.$$.fragment, t),
					this.h();
			},
			h() {
				g(a, 'class', 'grid-5'), g(f, 'class', 'grid-8'), g(e, 'class', 'dg');
			},
			m(t, s) {
				d(t, e, s),
					$(e, a),
					$(a, p),
					$(e, u),
					$(e, f),
					$(f, h),
					d(t, v, s),
					E(b, t, s),
					d(t, I, s),
					E(k, t, s),
					d(t, P, s),
					E(y, t, s),
					d(t, q, s),
					E(j, t, s),
					(S = !0);
			},
			p(t, [e]) {
				const a = {};
				1 & e && (a.$$scope = { dirty: e, ctx: t }), b.$set(a);
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), k.$set(s);
				const r = {};
				1 & e && (r.$$scope = { dirty: e, ctx: t }), y.$set(r);
				const n = {};
				1 & e && (n.$$scope = { dirty: e, ctx: t }), j.$set(n);
			},
			i(t) {
				S ||
					(D(b.$$.fragment, t),
					D(k.$$.fragment, t),
					D(y.$$.fragment, t),
					D(j.$$.fragment, t),
					(S = !0));
			},
			o(t) {
				w(b.$$.fragment, t),
					w(k.$$.fragment, t),
					w(y.$$.fragment, t),
					w(j.$$.fragment, t),
					(S = !1);
			},
			d(t) {
				t && o(e), t && o(v), V(b, t), t && o(I), V(k, t), t && o(P), V(y, t), t && o(q), V(j, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, vt, a, {});
	}
}
