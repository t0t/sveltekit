import {
	S as e,
	i as t,
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
	Y as x,
	p as _,
	q as I,
	r as E,
	w as D,
	x as w,
	y as V,
	C as k,
	D as q,
	Q as j,
	Z as P,
	_ as y,
	J as S
} from '../../chunks/index-d91e1ed8.js';
import { B as T, c as N } from '../../chunks/Grid.svelte-8e9d6b69.js';
/* empty css                                   */ import { I as C } from '../../chunks/Img-f6fb9871.js';
/* empty css                               */ import {
	a as L,
	f as G
} from '../../chunks/index-65311448.js';
import { S as U, H as A } from '../../chunks/Header-8a27feeb.js';
import { B as H } from '../../chunks/Blockquote-f62d2e0c.js';
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
function R(e) {
	let t, a, f, h, v, b, x, _;
	return {
		c() {
			(t = s('div')),
				(a = s('div')),
				(f = r(e[0])),
				(h = r(' / ')),
				(v = r(e[1])),
				(b = n()),
				(x = s('img')),
				this.h();
		},
		l(s) {
			t = i(s, 'DIV', { class: !0 });
			var r = l(t);
			a = i(r, 'DIV', { class: !0 });
			var n = l(a);
			(f = c(n, e[0])),
				(h = c(n, ' / ')),
				(v = c(n, e[1])),
				n.forEach(o),
				(b = m(r)),
				(x = i(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(o),
				this.h();
		},
		h() {
			g(a, 'class', 'numbertext svelte-2j6qqa'),
				x.src !== (_ = e[2]) && g(x, 'src', _),
				g(x, 'alt', e[3]),
				g(x, 'title', e[4]),
				g(x, 'class', 'svelte-2j6qqa'),
				g(t, 'class', 'Slide svelte-2j6qqa');
		},
		m(e, s) {
			d(e, t, s), $(t, a), $(a, f), $(a, h), $(a, v), $(t, b), $(t, x);
		},
		p(e, [t]) {
			1 & t && p(f, e[0]),
				2 & t && p(v, e[1]),
				4 & t && x.src !== (_ = e[2]) && g(x, 'src', _),
				8 & t && g(x, 'alt', e[3]),
				16 & t && g(x, 'title', e[4]);
		},
		i: u,
		o: u,
		d(e) {
			e && o(t);
		}
	};
}
function B(e, t, a) {
	let { slideNo: s } = t,
		{ totalSlides: r } = t,
		{ image: n } = t,
		{ altTag: i } = t,
		{ description: l } = t;
	return (
		(e.$$set = (e) => {
			'slideNo' in e && a(0, (s = e.slideNo)),
				'totalSlides' in e && a(1, (r = e.totalSlides)),
				'image' in e && a(2, (n = e.image)),
				'altTag' in e && a(3, (i = e.altTag)),
				'description' in e && a(4, (l = e.description));
		}),
		[s, r, n, i, l]
	);
}
class z extends e {
	constructor(e) {
		super(),
			t(this, e, B, R, a, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function O(e) {
	let t, a, r, n;
	return {
		c() {
			(t = s('img')), this.h();
		},
		l(e) {
			(t = i(e, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			g(t, 'class', 'sample cursor svelte-s6svpe'),
				g(t, 'id', e[3]),
				t.src !== (a = e[0]) && g(t, 'src', a),
				g(t, 'alt', e[1]),
				g(t, 'title', e[2]),
				f(t, 'active', e[4]);
		},
		m(a, s) {
			d(a, t, s), r || ((n = h(t, 'click', e[5])), (r = !0));
		},
		p(e, [s]) {
			8 & s && g(t, 'id', e[3]),
				1 & s && t.src !== (a = e[0]) && g(t, 'src', a),
				2 & s && g(t, 'alt', e[1]),
				4 & s && g(t, 'title', e[2]),
				16 & s && f(t, 'active', e[4]);
		},
		i: u,
		o: u,
		d(e) {
			e && o(t), (r = !1), n();
		}
	};
}
function W(e, t, a) {
	let { thumbImg: s } = t,
		{ altTag: r } = t,
		{ titleLink: n } = t,
		{ id: i } = t,
		{ selected: l } = t;
	return (
		(e.$$set = (e) => {
			'thumbImg' in e && a(0, (s = e.thumbImg)),
				'altTag' in e && a(1, (r = e.altTag)),
				'titleLink' in e && a(2, (n = e.titleLink)),
				'id' in e && a(3, (i = e.id)),
				'selected' in e && a(4, (l = e.selected));
		}),
		[
			s,
			r,
			n,
			i,
			l,
			function (t) {
				v(e, t);
			}
		]
	);
}
class F extends e {
	constructor(e) {
		super(), t(this, e, W, O, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function J(e) {
	let t, a, f, v, x, _, I, E, D, w, V;
	return {
		c() {
			(t = s('div')),
				(a = s('a')),
				(f = r('❮')),
				(v = n()),
				(x = s('p')),
				(_ = r(e[0])),
				(I = n()),
				(E = s('a')),
				(D = r('❯')),
				this.h();
		},
		l(s) {
			t = i(s, 'DIV', { class: !0 });
			var r = l(t);
			a = i(r, 'A', { href: !0, class: !0 });
			var n = l(a);
			(f = c(n, '❮')), n.forEach(o), (v = m(r)), (x = i(r, 'P', { id: !0, class: !0 }));
			var g = l(x);
			(_ = c(g, e[0])), g.forEach(o), (I = m(r)), (E = i(r, 'A', { href: !0, class: !0 }));
			var d = l(E);
			(D = c(d, '❯')), d.forEach(o), r.forEach(o), this.h();
		},
		h() {
			g(a, 'href', '#arrowL'),
				g(a, 'class', 'arrow prev svelte-exxv4o'),
				g(x, 'id', 'caption'),
				g(x, 'class', 'svelte-exxv4o'),
				g(E, 'href', '#arrowR'),
				g(E, 'class', 'arrow next svelte-exxv4o'),
				g(t, 'class', 'caption-container svelte-exxv4o');
		},
		m(s, r) {
			d(s, t, r),
				$(t, a),
				$(a, f),
				$(t, v),
				$(t, x),
				$(x, _),
				$(t, I),
				$(t, E),
				$(E, D),
				w || ((V = [h(a, 'click', e[2]), h(E, 'click', e[3])]), (w = !0));
		},
		p(e, [t]) {
			1 & t && p(_, e[0]);
		},
		i: u,
		o: u,
		d(e) {
			e && o(t), (w = !1), b(V);
		}
	};
}
function K(e, t, a) {
	let { caption: s } = t;
	const r = x();
	return (
		(e.$$set = (e) => {
			'caption' in e && a(0, (s = e.caption));
		}),
		[s, r, () => r('prevClick'), () => r('nextClick')]
	);
}
class Q extends e {
	constructor(e) {
		super(), t(this, e, K, J, a, { caption: 0 });
	}
}
function Y(e, t, a) {
	const s = e.slice();
	return (s[7] = t[a].id), (s[8] = t[a].imgurl), (s[9] = t[a].name), s;
}
function Z(e) {
	let t, a;
	return (
		(t = new F({
			props: { thumbImg: e[8], altTag: e[9], id: e[7], selected: Number(e[0]) === e[7] }
		})),
		t.$on('click', function () {
			return e[6](e[7]);
		}),
		{
			c() {
				_(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, s) {
				E(t, e, s), (a = !0);
			},
			p(a, s) {
				e = a;
				const r = {};
				1 & s && (r.selected = Number(e[0]) === e[7]), t.$set(r);
			},
			i(e) {
				a || (D(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				w(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				V(t, e);
			}
		}
	);
}
function X(e) {
	let t, a, p, u, f, v, b, x, T, N, C, U, A, H;
	(f = new z({
		props: {
			image: e[1].imgurl,
			altTag: e[1].name,
			attr: e[1].description,
			slideNo: e[1].id + 1,
			totalSlides: M.length
		}
	})),
		(b = new Q({ props: { caption: M[e[0]].description } })),
		b.$on('prevClick', e[3]),
		b.$on('nextClick', e[2]);
	let R = M,
		B = [];
	for (let s = 0; s < R.length; s += 1) B[s] = Z(Y(e, R, s));
	const O = (e) =>
		w(B[e], 1, 1, () => {
			B[e] = null;
		});
	return {
		c() {
			(t = s('div')),
				(a = s('span')),
				(p = r('✗')),
				(u = n()),
				_(f.$$.fragment),
				(v = n()),
				_(b.$$.fragment),
				(x = n()),
				(T = s('div'));
			for (let e = 0; e < B.length; e += 1) B[e].c();
			this.h();
		},
		l(e) {
			t = i(e, 'DIV', { class: !0 });
			var s = l(t);
			a = i(s, 'SPAN', { class: !0 });
			var r = l(a);
			(p = c(r, '✗')),
				r.forEach(o),
				(u = m(s)),
				I(f.$$.fragment, s),
				(v = m(s)),
				I(b.$$.fragment, s),
				(x = m(s)),
				(T = i(s, 'DIV', { class: !0 }));
			var n = l(T);
			for (let t = 0; t < B.length; t += 1) B[t].l(n);
			n.forEach(o), s.forEach(o), this.h();
		},
		h() {
			g(a, 'class', 'close cursor svelte-1dg3xju'),
				g(T, 'class', 'Thumbnails svelte-1dg3xju'),
				g(t, 'class', 'lightbox svelte-1dg3xju');
		},
		m(s, r) {
			d(s, t, r),
				$(t, a),
				$(a, p),
				$(t, u),
				E(f, t, null),
				$(t, v),
				E(b, t, null),
				$(t, x),
				$(t, T);
			for (let e = 0; e < B.length; e += 1) B[e].m(T, null);
			(U = !0), A || ((H = h(a, 'click', e[5])), (A = !0));
		},
		p(e, [t]) {
			const a = {};
			2 & t && (a.image = e[1].imgurl),
				2 & t && (a.altTag = e[1].name),
				2 & t && (a.attr = e[1].description),
				2 & t && (a.slideNo = e[1].id + 1),
				f.$set(a);
			const s = {};
			if ((1 & t && (s.caption = M[e[0]].description), b.$set(s), 17 & t)) {
				let a;
				for (R = M, a = 0; a < R.length; a += 1) {
					const s = Y(e, R, a);
					B[a]
						? (B[a].p(s, t), D(B[a], 1))
						: ((B[a] = Z(s)), B[a].c(), D(B[a], 1), B[a].m(T, null));
				}
				for (k(), a = R.length; a < B.length; a += 1) O(a);
				q();
			}
		},
		i(e) {
			if (!U) {
				D(f.$$.fragment, e), D(b.$$.fragment, e);
				for (let e = 0; e < R.length; e += 1) D(B[e]);
				j(() => {
					C && C.end(1), N || (N = P(t, L, { x: -300 })), N.start();
				}),
					(U = !0);
			}
		},
		o(e) {
			w(f.$$.fragment, e), w(b.$$.fragment, e), (B = B.filter(Boolean));
			for (let t = 0; t < B.length; t += 1) w(B[t]);
			N && N.invalidate(), (C = y(t, G, {})), (U = !1);
		},
		d(e) {
			e && o(t), V(f), V(b), S(B, e), e && C && C.end(), (A = !1), H();
		}
	};
}
function ee(e, t, a) {
	let s,
		{ imageShowingIndex: r = 0 } = t;
	const n = (e) => a(0, (r = Number(e)));
	return (
		(e.$$set = (e) => {
			'imageShowingIndex' in e && a(0, (r = e.imageShowingIndex));
		}),
		(e.$$.update = () => {
			1 & e.$$.dirty && a(1, (s = M[r]));
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
			function (t) {
				v(e, t);
			},
			(e) => n(e)
		]
	);
}
class te extends e {
	constructor(e) {
		super(), t(this, e, ee, X, a, { imageShowingIndex: 0 });
	}
}
function ae(e, t, a) {
	const s = e.slice();
	return (s[1] = t[a].id), (s[2] = t[a].imgurl), (s[3] = t[a].name), s;
}
function se(e) {
	let t, a, r, n;
	return {
		c() {
			(t = s('img')), this.h();
		},
		l(e) {
			(t = i(e, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			g(t, 'id', e[1]),
				t.src !== (a = e[2]) && g(t, 'src', a),
				g(t, 'alt', e[3]),
				g(t, 'class', 'svelte-ewzqkf');
		},
		m(a, s) {
			d(a, t, s), r || ((n = h(t, 'click', e[0])), (r = !0));
		},
		p: u,
		d(e) {
			e && o(t), (r = !1), n();
		}
	};
}
function re(e) {
	let t,
		a = M,
		r = [];
	for (let s = 0; s < a.length; s += 1) r[s] = se(ae(e, a, s));
	return {
		c() {
			t = s('div');
			for (let e = 0; e < r.length; e += 1) r[e].c();
			this.h();
		},
		l(e) {
			t = i(e, 'DIV', { class: !0 });
			var a = l(t);
			for (let t = 0; t < r.length; t += 1) r[t].l(a);
			a.forEach(o), this.h();
		},
		h() {
			g(t, 'class', 'DemoGallery svelte-ewzqkf');
		},
		m(e, a) {
			d(e, t, a);
			for (let s = 0; s < r.length; s += 1) r[s].m(t, null);
		},
		p(e, [s]) {
			if (0 & s) {
				let n;
				for (a = M, n = 0; n < a.length; n += 1) {
					const i = ae(e, a, n);
					r[n] ? r[n].p(i, s) : ((r[n] = se(i)), r[n].c(), r[n].m(t, null));
				}
				for (; n < r.length; n += 1) r[n].d(1);
				r.length = a.length;
			}
		},
		i: u,
		o: u,
		d(e) {
			e && o(t), S(r, e);
		}
	};
}
function ne(e) {
	return [
		function (t) {
			v(e, t);
		}
	];
}
class ie extends e {
	constructor(e) {
		super(), t(this, e, ne, re, a, {});
	}
}
function le(e) {
	let t, a;
	return (
		(t = new ie({})),
		t.$on('click', e[2]),
		{
			c() {
				_(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, s) {
				E(t, e, s), (a = !0);
			},
			p: u,
			i(e) {
				a || (D(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				w(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				V(t, e);
			}
		}
	);
}
function ce(e) {
	let t, a;
	return (
		(t = new te({ props: { imageShowingIndex: e[1] } })),
		t.$on('click', e[3]),
		{
			c() {
				_(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, s) {
				E(t, e, s), (a = !0);
			},
			p(e, a) {
				const s = {};
				2 & a && (s.imageShowingIndex = e[1]), t.$set(s);
			},
			i(e) {
				a || (D(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				w(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				V(t, e);
			}
		}
	);
}
function oe(e) {
	let t, a, r, c, $, p;
	const u = [ce, le],
		f = [];
	function h(e, t) {
		return e[0] ? 0 : 1;
	}
	return (
		(t = h(e)),
		(a = f[t] = u[t](e)),
		($ = new T({ props: { variante: 2, text: 'View All' } })),
		$.$on('click', e[4]),
		{
			c() {
				a.c(), (r = n()), (c = s('aside')), _($.$$.fragment), this.h();
			},
			l(e) {
				a.l(e), (r = m(e)), (c = i(e, 'ASIDE', { class: !0 }));
				var t = l(c);
				I($.$$.fragment, t), t.forEach(o), this.h();
			},
			h() {
				g(c, 'class', 'svelte-df1pm2');
			},
			m(e, a) {
				f[t].m(e, a), d(e, r, a), d(e, c, a), E($, c, null), (p = !0);
			},
			p(e, [s]) {
				let n = t;
				(t = h(e)),
					t === n
						? f[t].p(e, s)
						: (k(),
						  w(f[n], 1, 1, () => {
								f[n] = null;
						  }),
						  q(),
						  (a = f[t]),
						  a ? a.p(e, s) : ((a = f[t] = u[t](e)), a.c()),
						  D(a, 1),
						  a.m(r.parentNode, r));
			},
			i(e) {
				p || (D(a), D($.$$.fragment, e), (p = !0));
			},
			o(e) {
				w(a), w($.$$.fragment, e), (p = !1);
			},
			d(e) {
				f[t].d(e), e && o(r), e && o(c), V($);
			}
		}
	);
}
function me(e, t, a) {
	let s = !1,
		r = 0;
	return [
		s,
		r,
		(e) => {
			a(1, (r = Number(e.target.id))), a(0, (s = !0));
		},
		() => a(0, (s = !1)),
		() => a(0, (s = !0))
	];
}
class ge extends e {
	constructor(e) {
		super(), t(this, e, me, oe, a, {});
	}
}
function de(e) {
	let t, a, n, m, p, f, h, v;
	return {
		c() {
			(t = s('div')),
				(a = s('video')),
				(n = s('source')),
				(p = s('source')),
				(h = s('p')),
				(v = r('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(e) {
			t = i(e, 'DIV', { class: !0 });
			var s = l(t);
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
				g(t, 'class', 'video-wrapper svelte-1vnv3v8');
		},
		m(e, s) {
			d(e, t, s), $(t, a), $(a, n), $(a, p), $(a, h), $(h, v);
		},
		p: u,
		i: u,
		o: u,
		d(e) {
			e && o(t);
		}
	};
}
class $e extends e {
	constructor(e) {
		super(), t(this, e, null, de, a, {});
	}
}
function pe(e) {
	let t, a, p, f, h, v, b, x, k, q, j, P, y, S, T, C, L, G, U, M;
	return (
		(k = new A({
			props: { tipo: 2, variante: 6, title: N[1].title, subtitle: N[1].subtitle, text: N[1].text }
		})),
		(P = new $e({})),
		(L = new H({
			props: {
				variante: 1,
				text:
					'Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia.'
			}
		})),
		{
			c() {
				(t = s('div')),
					(a = s('div')),
					(p = r('dd')),
					(f = n()),
					(h = s('div')),
					(v = r('ss')),
					(b = n()),
					(x = s('div')),
					_(k.$$.fragment),
					(q = n()),
					(j = s('div')),
					_(P.$$.fragment),
					(y = n()),
					(S = s('div')),
					(T = n()),
					(C = s('div')),
					_(L.$$.fragment),
					(G = n()),
					(U = s('div')),
					this.h();
			},
			l(e) {
				t = i(e, 'DIV', { class: !0 });
				var s = l(t);
				a = i(s, 'DIV', { class: !0 });
				var r = l(a);
				(p = c(r, 'dd')), r.forEach(o), (f = m(s)), (h = i(s, 'DIV', { class: !0 }));
				var n = l(h);
				(v = c(n, 'ss')), n.forEach(o), (b = m(s)), (x = i(s, 'DIV', { class: !0 }));
				var g = l(x);
				I(k.$$.fragment, g), g.forEach(o), (q = m(s)), (j = i(s, 'DIV', { class: !0 }));
				var d = l(j);
				I(P.$$.fragment, d),
					d.forEach(o),
					(y = m(s)),
					(S = i(s, 'DIV', { class: !0 })),
					l(S).forEach(o),
					(T = m(s)),
					(C = i(s, 'DIV', { class: !0 }));
				var $ = l(C);
				I(L.$$.fragment, $),
					$.forEach(o),
					(G = m(s)),
					(U = i(s, 'DIV', { class: !0 })),
					l(U).forEach(o),
					s.forEach(o),
					this.h();
			},
			h() {
				g(a, 'class', 'grid-4'),
					g(h, 'class', 'grid-9'),
					g(x, 'class', 'slot_1 bgc_primary p_2'),
					g(j, 'class', 'slot_2 bgc_4'),
					g(S, 'class', 'slot_3 bgc_5'),
					g(C, 'class', 'slot_5 c_1 bgc_4 pcc p_2 tac'),
					g(U, 'class', 'slot_4 bgc_4'),
					g(t, 'class', 'dg g_0');
			},
			m(e, s) {
				d(e, t, s),
					$(t, a),
					$(a, p),
					$(t, f),
					$(t, h),
					$(h, v),
					$(t, b),
					$(t, x),
					E(k, x, null),
					$(t, q),
					$(t, j),
					E(P, j, null),
					$(t, y),
					$(t, S),
					$(t, T),
					$(t, C),
					E(L, C, null),
					$(t, G),
					$(t, U),
					(M = !0);
			},
			p: u,
			i(e) {
				M || (D(k.$$.fragment, e), D(P.$$.fragment, e), D(L.$$.fragment, e), (M = !0));
			},
			o(e) {
				w(k.$$.fragment, e), w(P.$$.fragment, e), w(L.$$.fragment, e), (M = !1);
			},
			d(e) {
				e && o(t), V(k), V(P), V(L);
			}
		}
	);
}
function ue(e) {
	let t, a, s, r;
	return (
		(t = new A({ props: { tipo: 1, variante: 3, title: 'Galería' } })),
		(s = new ge({})),
		{
			c() {
				_(t.$$.fragment), (a = n()), _(s.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e), (a = m(e)), I(s.$$.fragment, e);
			},
			m(e, n) {
				E(t, e, n), d(e, a, n), E(s, e, n), (r = !0);
			},
			p: u,
			i(e) {
				r || (D(t.$$.fragment, e), D(s.$$.fragment, e), (r = !0));
			},
			o(e) {
				w(t.$$.fragment, e), w(s.$$.fragment, e), (r = !1);
			},
			d(e) {
				V(t, e), e && o(a), V(s, e);
			}
		}
	);
}
function fe(e) {
	let t, a, p, f, h, v, b, x, k, q, j, P, y, S, T, N;
	return (
		(b = new C({ props: { variante: 1, src: './img/bg3.jpg', alt: 'Presentation' } })),
		(y = new H({
			props: {
				variante: 1,
				text:
					'En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original.'
			}
		})),
		{
			c() {
				(t = s('div')),
					(a = s('div')),
					(p = s('p')),
					(f = r(
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nulla labore ipsam? Excepturi nostrum doloremque fugit quidem porro corporis? Cumque atque consequuntur aliquid labore assumenda dolores, magnam quia eius voluptatem.'
					)),
					(h = n()),
					(v = s('div')),
					_(b.$$.fragment),
					(x = n()),
					(k = s('div')),
					(q = r('aqui')),
					(j = n()),
					(P = s('div')),
					_(y.$$.fragment),
					(S = n()),
					(T = s('div')),
					this.h();
			},
			l(e) {
				t = i(e, 'DIV', { class: !0 });
				var s = l(t);
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
				I(b.$$.fragment, g), g.forEach(o), (x = m(s)), (k = i(s, 'DIV', { class: !0 }));
				var d = l(k);
				(q = c(d, 'aqui')), d.forEach(o), (j = m(s)), (P = i(s, 'DIV', { class: !0 }));
				var $ = l(P);
				I(y.$$.fragment, $),
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
					g(P, 'class', 'slot_4 bgc_primary pt_3 pb_3  bgc_0 c_4 pl_0'),
					g(T, 'class', 'slot_5'),
					g(t, 'class', 'dg g_0');
			},
			m(e, s) {
				d(e, t, s),
					$(t, a),
					$(a, p),
					$(p, f),
					$(t, h),
					$(t, v),
					E(b, v, null),
					$(t, x),
					$(t, k),
					$(k, q),
					$(t, j),
					$(t, P),
					E(y, P, null),
					$(t, S),
					$(t, T),
					(N = !0);
			},
			p: u,
			i(e) {
				N || (D(b.$$.fragment, e), D(y.$$.fragment, e), (N = !0));
			},
			o(e) {
				w(b.$$.fragment, e), w(y.$$.fragment, e), (N = !1);
			},
			d(e) {
				e && o(t), V(b), V(y);
			}
		}
	);
}
function he(e) {
	let t, a, r, c, p, f, h, v, b, x, k, q, j, P, y;
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
		(q = new C({ props: { variante: 1, src: './img/bg2.jpg', alt: 'Presentation' } })),
		{
			c() {
				(t = s('div')),
					(a = s('div')),
					(r = n()),
					(c = s('div')),
					_(p.$$.fragment),
					(f = n()),
					_(h.$$.fragment),
					(v = n()),
					(b = s('div')),
					(x = n()),
					(k = s('div')),
					_(q.$$.fragment),
					(j = n()),
					(P = s('div')),
					this.h();
			},
			l(e) {
				t = i(e, 'DIV', { class: !0 });
				var s = l(t);
				(a = i(s, 'DIV', { class: !0 })),
					l(a).forEach(o),
					(r = m(s)),
					(c = i(s, 'DIV', { class: !0 }));
				var n = l(c);
				I(p.$$.fragment, n),
					(f = m(n)),
					I(h.$$.fragment, n),
					n.forEach(o),
					(v = m(s)),
					(b = i(s, 'DIV', { class: !0 })),
					l(b).forEach(o),
					(x = m(s)),
					(k = i(s, 'DIV', { class: !0 }));
				var g = l(k);
				I(q.$$.fragment, g),
					g.forEach(o),
					(j = m(s)),
					(P = i(s, 'DIV', { class: !0 })),
					l(P).forEach(o),
					s.forEach(o),
					this.h();
			},
			h() {
				g(a, 'class', 'slot_1 bgc_primary c_4 pl_2 pr_2'),
					g(c, 'class', 'slot_3 dg pt_3 pb_3 tac bgc_0 pcc c_4 gap_2'),
					g(b, 'class', 'slot_2 bgc_0'),
					g(k, 'class', 'slot_4 bgc_primary'),
					g(P, 'class', 'slot_5 bgc_4'),
					g(t, 'class', 'dg g_0');
			},
			m(e, s) {
				d(e, t, s),
					$(t, a),
					$(t, r),
					$(t, c),
					E(p, c, null),
					$(c, f),
					E(h, c, null),
					$(t, v),
					$(t, b),
					$(t, x),
					$(t, k),
					E(q, k, null),
					$(t, j),
					$(t, P),
					(y = !0);
			},
			p: u,
			i(e) {
				y || (D(p.$$.fragment, e), D(h.$$.fragment, e), D(q.$$.fragment, e), (y = !0));
			},
			o(e) {
				w(p.$$.fragment, e), w(h.$$.fragment, e), w(q.$$.fragment, e), (y = !1);
			},
			d(e) {
				e && o(t), V(p), V(h), V(q);
			}
		}
	);
}
function ve(e) {
	let t, a, p, u, f, h, v, b, x, k, q, j, P, y, S;
	return (
		(b = new U({
			props: { id: 'cover', variante: 3, $$slots: { default: [pe] }, $$scope: { ctx: e } }
		})),
		(k = new U({
			props: {
				id: 'lightboxgallery',
				variante: 0,
				bg_color: 'bgc_5',
				$$slots: { default: [ue] },
				$$scope: { ctx: e }
			}
		})),
		(j = new U({ props: { variante: 1, $$slots: { default: [fe] }, $$scope: { ctx: e } } })),
		(y = new U({ props: { variante: 1, $$slots: { default: [he] }, $$scope: { ctx: e } } })),
		{
			c() {
				(t = s('div')),
					(a = s('div')),
					(p = r('5')),
					(u = n()),
					(f = s('div')),
					(h = r('8')),
					(v = n()),
					_(b.$$.fragment),
					(x = n()),
					_(k.$$.fragment),
					(q = n()),
					_(j.$$.fragment),
					(P = n()),
					_(y.$$.fragment),
					this.h();
			},
			l(e) {
				t = i(e, 'DIV', { class: !0 });
				var s = l(t);
				a = i(s, 'DIV', { class: !0 });
				var r = l(a);
				(p = c(r, '5')), r.forEach(o), (u = m(s)), (f = i(s, 'DIV', { class: !0 }));
				var n = l(f);
				(h = c(n, '8')),
					n.forEach(o),
					s.forEach(o),
					(v = m(e)),
					I(b.$$.fragment, e),
					(x = m(e)),
					I(k.$$.fragment, e),
					(q = m(e)),
					I(j.$$.fragment, e),
					(P = m(e)),
					I(y.$$.fragment, e),
					this.h();
			},
			h() {
				g(a, 'class', 'grid-5'), g(f, 'class', 'grid-8'), g(t, 'class', 'dg');
			},
			m(e, s) {
				d(e, t, s),
					$(t, a),
					$(a, p),
					$(t, u),
					$(t, f),
					$(f, h),
					d(e, v, s),
					E(b, e, s),
					d(e, x, s),
					E(k, e, s),
					d(e, q, s),
					E(j, e, s),
					d(e, P, s),
					E(y, e, s),
					(S = !0);
			},
			p(e, [t]) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), b.$set(a);
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), k.$set(s);
				const r = {};
				1 & t && (r.$$scope = { dirty: t, ctx: e }), j.$set(r);
				const n = {};
				1 & t && (n.$$scope = { dirty: t, ctx: e }), y.$set(n);
			},
			i(e) {
				S ||
					(D(b.$$.fragment, e),
					D(k.$$.fragment, e),
					D(j.$$.fragment, e),
					D(y.$$.fragment, e),
					(S = !0));
			},
			o(e) {
				w(b.$$.fragment, e),
					w(k.$$.fragment, e),
					w(j.$$.fragment, e),
					w(y.$$.fragment, e),
					(S = !1);
			},
			d(e) {
				e && o(t), e && o(v), V(b, e), e && o(x), V(k, e), e && o(q), V(j, e), e && o(P), V(y, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, ve, a, {});
	}
}
