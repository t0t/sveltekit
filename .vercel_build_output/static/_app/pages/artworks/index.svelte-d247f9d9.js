import {
	S as t,
	i as e,
	s as i,
	e as a,
	t as r,
	j as s,
	c as n,
	a as o,
	b as l,
	d as c,
	l as m,
	o as u,
	f as d,
	g as $,
	h as p,
	n as g,
	G as f,
	H as h,
	F as v,
	K as x,
	Y as b,
	p as w,
	q as I,
	r as E,
	w as P,
	x as D,
	y as k,
	C as y,
	D as S,
	Q as V,
	Z as q,
	_ as T,
	J as j
} from '../../chunks/index-d91e1ed8.js';
import { B as L, G as N, C, c as M } from '../../chunks/Cover-a94e894d.js';
import { a as G, f as z } from '../../chunks/index-65311448.js';
import { I as R } from '../../chunks/Img-05e6f813.js';
import { S as U } from '../../chunks/Section-db7b341b.js';
import '../../chunks/index-78b22dae.js';
const A = [
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
function H(t) {
	let e, i, f, h, v, x, b, w;
	return {
		c() {
			(e = a('div')),
				(i = a('div')),
				(f = r(t[0])),
				(h = r(' / ')),
				(v = r(t[1])),
				(x = s()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			e = n(a, 'DIV', { class: !0 });
			var r = o(e);
			i = n(r, 'DIV', { class: !0 });
			var s = o(i);
			(f = l(s, t[0])),
				(h = l(s, ' / ')),
				(v = l(s, t[1])),
				s.forEach(c),
				(x = m(r)),
				(b = n(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(c),
				this.h();
		},
		h() {
			u(i, 'class', 'numbertext svelte-1owz2nr'),
				b.src !== (w = t[2]) && u(b, 'src', w),
				u(b, 'alt', t[3]),
				u(b, 'title', t[4]),
				u(b, 'class', 'svelte-1owz2nr'),
				u(e, 'class', 'Slide svelte-1owz2nr');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, f), $(i, h), $(i, v), $(e, x), $(e, b);
		},
		p(t, [e]) {
			1 & e && p(f, t[0]),
				2 & e && p(v, t[1]),
				4 & e && b.src !== (w = t[2]) && u(b, 'src', w),
				8 & e && u(b, 'alt', t[3]),
				16 & e && u(b, 'title', t[4]);
		},
		i: g,
		o: g,
		d(t) {
			t && c(e);
		}
	};
}
function O(t, e, i) {
	let { slideNo: a } = e,
		{ totalSlides: r } = e,
		{ image: s } = e,
		{ altTag: n } = e,
		{ description: o } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && i(0, (a = t.slideNo)),
				'totalSlides' in t && i(1, (r = t.totalSlides)),
				'image' in t && i(2, (s = t.image)),
				'altTag' in t && i(3, (n = t.altTag)),
				'description' in t && i(4, (o = t.description));
		}),
		[a, r, s, n, o]
	);
}
class B extends t {
	constructor(t) {
		super(),
			e(this, t, O, H, i, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function F(t) {
	let e, i, r, s;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = n(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			u(e, 'class', 'sample cursor svelte-1ud5a2z'),
				u(e, 'id', t[3]),
				e.src !== (i = t[0]) && u(e, 'src', i),
				u(e, 'alt', t[1]),
				u(e, 'title', t[2]),
				f(e, 'active', t[4]);
		},
		m(i, a) {
			d(i, e, a), r || ((s = h(e, 'click', t[5])), (r = !0));
		},
		p(t, [a]) {
			8 & a && u(e, 'id', t[3]),
				1 & a && e.src !== (i = t[0]) && u(e, 'src', i),
				2 & a && u(e, 'alt', t[1]),
				4 & a && u(e, 'title', t[2]),
				16 & a && f(e, 'active', t[4]);
		},
		i: g,
		o: g,
		d(t) {
			t && c(e), (r = !1), s();
		}
	};
}
function J(t, e, i) {
	let { thumbImg: a } = e,
		{ altTag: r } = e,
		{ titleLink: s } = e,
		{ id: n } = e,
		{ selected: o } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && i(0, (a = t.thumbImg)),
				'altTag' in t && i(1, (r = t.altTag)),
				'titleLink' in t && i(2, (s = t.titleLink)),
				'id' in t && i(3, (n = t.id)),
				'selected' in t && i(4, (o = t.selected));
		}),
		[
			a,
			r,
			s,
			n,
			o,
			function (e) {
				v(t, e);
			}
		]
	);
}
class K extends t {
	constructor(t) {
		super(), e(this, t, J, F, i, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function Q(t) {
	let e, i, f, v, b, w, I, E, P, D, k;
	return {
		c() {
			(e = a('div')),
				(i = a('a')),
				(f = r('❮')),
				(v = s()),
				(b = a('p')),
				(w = r(t[0])),
				(I = s()),
				(E = a('a')),
				(P = r('❯')),
				this.h();
		},
		l(a) {
			e = n(a, 'DIV', { class: !0 });
			var r = o(e);
			i = n(r, 'A', { href: !0, class: !0 });
			var s = o(i);
			(f = l(s, '❮')), s.forEach(c), (v = m(r)), (b = n(r, 'P', { id: !0, class: !0 }));
			var u = o(b);
			(w = l(u, t[0])), u.forEach(c), (I = m(r)), (E = n(r, 'A', { href: !0, class: !0 }));
			var d = o(E);
			(P = l(d, '❯')), d.forEach(c), r.forEach(c), this.h();
		},
		h() {
			u(i, 'href', '#arrowL'),
				u(i, 'class', 'arrow prev svelte-xmhhxr'),
				u(b, 'id', 'caption'),
				u(b, 'class', 'svelte-xmhhxr'),
				u(E, 'href', '#arrowR'),
				u(E, 'class', 'arrow next svelte-xmhhxr'),
				u(e, 'class', 'caption-container svelte-xmhhxr');
		},
		m(a, r) {
			d(a, e, r),
				$(e, i),
				$(i, f),
				$(e, v),
				$(e, b),
				$(b, w),
				$(e, I),
				$(e, E),
				$(E, P),
				D || ((k = [h(i, 'click', t[2]), h(E, 'click', t[3])]), (D = !0));
		},
		p(t, [e]) {
			1 & e && p(w, t[0]);
		},
		i: g,
		o: g,
		d(t) {
			t && c(e), (D = !1), x(k);
		}
	};
}
function W(t, e, i) {
	let { caption: a } = e;
	const r = b();
	return (
		(t.$$set = (t) => {
			'caption' in t && i(0, (a = t.caption));
		}),
		[a, r, () => r('prevClick'), () => r('nextClick')]
	);
}
class Y extends t {
	constructor(t) {
		super(), e(this, t, W, Q, i, { caption: 0 });
	}
}
function Z(t, e, i) {
	const a = t.slice();
	return (a[7] = e[i].id), (a[8] = e[i].imgurl), (a[9] = e[i].name), a;
}
function _(t) {
	let e, i;
	return (
		(e = new K({
			props: { thumbImg: t[8], altTag: t[9], id: t[7], selected: Number(t[0]) === t[7] }
		})),
		e.$on('click', function () {
			return t[6](t[7]);
		}),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p(i, a) {
				t = i;
				const r = {};
				1 & a && (r.selected = Number(t[0]) === t[7]), e.$set(r);
			},
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function X(t) {
	let e, i, p, g, f, v, x, b, L, N, C, M, R, U;
	(f = new B({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: A.length
		}
	})),
		(x = new Y({ props: { caption: A[t[0]].description } })),
		x.$on('prevClick', t[3]),
		x.$on('nextClick', t[2]);
	let H = A,
		O = [];
	for (let a = 0; a < H.length; a += 1) O[a] = _(Z(t, H, a));
	const F = (t) =>
		D(O[t], 1, 1, () => {
			O[t] = null;
		});
	return {
		c() {
			(e = a('div')),
				(i = a('span')),
				(p = r('✗')),
				(g = s()),
				w(f.$$.fragment),
				(v = s()),
				w(x.$$.fragment),
				(b = s()),
				(L = a('div'));
			for (let t = 0; t < O.length; t += 1) O[t].c();
			this.h();
		},
		l(t) {
			e = n(t, 'DIV', { class: !0 });
			var a = o(e);
			i = n(a, 'SPAN', { class: !0 });
			var r = o(i);
			(p = l(r, '✗')),
				r.forEach(c),
				(g = m(a)),
				I(f.$$.fragment, a),
				(v = m(a)),
				I(x.$$.fragment, a),
				(b = m(a)),
				(L = n(a, 'DIV', { class: !0 }));
			var s = o(L);
			for (let e = 0; e < O.length; e += 1) O[e].l(s);
			s.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(i, 'class', 'close cursor svelte-idci7x'),
				u(L, 'class', 'Thumbnails svelte-idci7x'),
				u(e, 'class', 'lightbox svelte-idci7x');
		},
		m(a, r) {
			d(a, e, r),
				$(e, i),
				$(i, p),
				$(e, g),
				E(f, e, null),
				$(e, v),
				E(x, e, null),
				$(e, b),
				$(e, L);
			for (let t = 0; t < O.length; t += 1) O[t].m(L, null);
			(M = !0), R || ((U = h(i, 'click', t[5])), (R = !0));
		},
		p(t, [e]) {
			const i = {};
			2 & e && (i.image = t[1].imgurl),
				2 & e && (i.altTag = t[1].name),
				2 & e && (i.attr = t[1].description),
				2 & e && (i.slideNo = t[1].id + 1),
				f.$set(i);
			const a = {};
			if ((1 & e && (a.caption = A[t[0]].description), x.$set(a), 17 & e)) {
				let i;
				for (H = A, i = 0; i < H.length; i += 1) {
					const a = Z(t, H, i);
					O[i]
						? (O[i].p(a, e), P(O[i], 1))
						: ((O[i] = _(a)), O[i].c(), P(O[i], 1), O[i].m(L, null));
				}
				for (y(), i = H.length; i < O.length; i += 1) F(i);
				S();
			}
		},
		i(t) {
			if (!M) {
				P(f.$$.fragment, t), P(x.$$.fragment, t);
				for (let t = 0; t < H.length; t += 1) P(O[t]);
				V(() => {
					C && C.end(1), N || (N = q(e, G, { x: -300 })), N.start();
				}),
					(M = !0);
			}
		},
		o(t) {
			D(f.$$.fragment, t), D(x.$$.fragment, t), (O = O.filter(Boolean));
			for (let e = 0; e < O.length; e += 1) D(O[e]);
			N && N.invalidate(), (C = T(e, z, {})), (M = !1);
		},
		d(t) {
			t && c(e), k(f), k(x), j(O, t), t && C && C.end(), (R = !1), U();
		}
	};
}
function tt(t, e, i) {
	let a,
		{ imageShowingIndex: r = 0 } = e;
	const s = (t) => i(0, (r = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && i(0, (r = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(r), 1 & t.$$.dirty && i(1, (a = A[r]));
		}),
		[
			r,
			a,
			() => {
				i(0, r === A.length - 1 ? (r = 0) : (r += 1));
			},
			() => {
				i(0, 0 === r ? (r = A.length - 1) : (r -= 1));
			},
			s,
			function (e) {
				v(t, e);
			},
			(t) => s(t)
		]
	);
}
class et extends t {
	constructor(t) {
		super(), e(this, t, tt, X, i, { imageShowingIndex: 0 });
	}
}
function it(t, e, i) {
	const a = t.slice();
	return (a[1] = e[i].id), (a[2] = e[i].imgurl), (a[3] = e[i].name), a;
}
function at(t) {
	let e, i, r, s;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = n(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			u(e, 'id', t[1]),
				e.src !== (i = t[2]) && u(e, 'src', i),
				u(e, 'alt', t[3]),
				u(e, 'class', 'svelte-1as159a');
		},
		m(i, a) {
			d(i, e, a), r || ((s = h(e, 'click', t[0])), (r = !0));
		},
		p: g,
		d(t) {
			t && c(e), (r = !1), s();
		}
	};
}
function rt(t) {
	let e,
		i = A,
		r = [];
	for (let a = 0; a < i.length; a += 1) r[a] = at(it(t, i, a));
	return {
		c() {
			e = a('div');
			for (let t = 0; t < r.length; t += 1) r[t].c();
			this.h();
		},
		l(t) {
			e = n(t, 'DIV', { class: !0 });
			var i = o(e);
			for (let e = 0; e < r.length; e += 1) r[e].l(i);
			i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', 'DemoGallery svelte-1as159a');
		},
		m(t, i) {
			d(t, e, i);
			for (let a = 0; a < r.length; a += 1) r[a].m(e, null);
		},
		p(t, [a]) {
			if (0 & a) {
				let s;
				for (i = A, s = 0; s < i.length; s += 1) {
					const n = it(t, i, s);
					r[s] ? r[s].p(n, a) : ((r[s] = at(n)), r[s].c(), r[s].m(e, null));
				}
				for (; s < r.length; s += 1) r[s].d(1);
				r.length = i.length;
			}
		},
		i: g,
		o: g,
		d(t) {
			t && c(e), j(r, t);
		}
	};
}
function st(t) {
	return [
		function (e) {
			v(t, e);
		}
	];
}
class nt extends t {
	constructor(t) {
		super(), e(this, t, st, rt, i, {});
	}
}
function ot(t) {
	let e, i;
	return (
		(e = new nt({})),
		e.$on('click', t[2]),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p: g,
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function lt(t) {
	let e, i;
	return (
		(e = new et({ props: { imageShowingIndex: t[1] } })),
		e.$on('click', t[3]),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p(t, i) {
				const a = {};
				2 & i && (a.imageShowingIndex = t[1]), e.$set(a);
			},
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function ct(t) {
	let e, i, r, l, $, p;
	const g = [lt, ot],
		f = [];
	function h(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = h(t)),
		(i = f[e] = g[e](t)),
		($ = new L({ props: { variante: 7, text: 'View gallery' } })),
		$.$on('click', t[4]),
		{
			c() {
				i.c(), (r = s()), (l = a('aside')), w($.$$.fragment), this.h();
			},
			l(t) {
				i.l(t), (r = m(t)), (l = n(t, 'ASIDE', { class: !0 }));
				var e = o(l);
				I($.$$.fragment, e), e.forEach(c), this.h();
			},
			h() {
				u(l, 'class', 'svelte-13uk8sv');
			},
			m(t, i) {
				f[e].m(t, i), d(t, r, i), d(t, l, i), E($, l, null), (p = !0);
			},
			p(t, [a]) {
				let s = e;
				(e = h(t)),
					e === s
						? f[e].p(t, a)
						: (y(),
						  D(f[s], 1, 1, () => {
								f[s] = null;
						  }),
						  S(),
						  (i = f[e]),
						  i ? i.p(t, a) : ((i = f[e] = g[e](t)), i.c()),
						  P(i, 1),
						  i.m(r.parentNode, r));
			},
			i(t) {
				p || (P(i), P($.$$.fragment, t), (p = !0));
			},
			o(t) {
				D(i), D($.$$.fragment, t), (p = !1);
			},
			d(t) {
				f[e].d(t), t && c(r), t && c(l), k($);
			}
		}
	);
}
function mt(t, e, i) {
	let a = !1,
		r = 0;
	return [
		a,
		r,
		(t) => {
			i(1, (r = Number(t.target.id))), i(0, (a = !0));
		},
		() => i(0, (a = !1)),
		() => i(0, (a = !0))
	];
}
class ut extends t {
	constructor(t) {
		super(), e(this, t, mt, ct, i, {});
	}
}
function dt(t) {
	let e, i, s, m, p, g, f;
	return {
		c() {
			(e = a('video')),
				(i = a('source')),
				(m = a('source')),
				(g = a('p')),
				(f = r('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(t) {
			e = n(t, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var a = o(e);
			(i = n(a, 'SOURCE', { src: !0, type: !0 })),
				(m = n(a, 'SOURCE', { src: !0, type: !0 })),
				(g = n(a, 'P', {}));
			var r = o(g);
			(f = l(r, 'Ups! Su navegador no soporta vídeos HTML5.')),
				r.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			i.src !== (s = '/img/desdelapoesiadelamateria.webm') &&
				u(i, 'src', '/img/desdelapoesiadelamateria.webm'),
				u(i, 'type', 'video/webm'),
				m.src !== (p = '/img/desdelapoesiadelamateria.mp4') &&
					u(m, 'src', '/img/desdelapoesiadelamateria.mp4'),
				u(m, 'type', 'video/mp4'),
				u(e, 'poster', '/img/cover3.jpg'),
				(e.loop = !0),
				(e.playsInline = !0),
				(e.controls = 'controls');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(e, m), $(e, g), $(g, f);
		},
		d(t) {
			t && c(e);
		}
	};
}
function $t(t) {
	let e, i, s;
	return {
		c() {
			(e = a('div')), (i = a('p')), (s = r('Desde la poesía de la materia')), this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var r = o(i);
			(s = l(r, 'Desde la poesía de la materia')), r.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(e, 'slot', 'subarea1');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, s);
		},
		d(t) {
			t && c(e);
		}
	};
}
function pt(t) {
	let e, i, s;
	return {
		c() {
			(e = a('div')),
				(i = a('p')),
				(s = r(
					'Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var r = o(i);
			(s = l(
				r,
				'Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.'
			)),
				r.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			u(e, 'slot', 'subarea2');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, s);
		},
		d(t) {
			t && c(e);
		}
	};
}
function gt(t) {
	let e, i;
	return (
		(e = new N({
			props: {
				variante: 4,
				$$slots: { subarea2: [pt], subarea1: [$t], default: [dt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p(t, [i]) {
				const a = {};
				1 & i && (a.$$scope = { dirty: i, ctx: t }), e.$set(a);
			},
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
class ft extends t {
	constructor(t) {
		super(), e(this, t, null, gt, i, {});
	}
}
function ht(t) {
	let e, i;
	return (
		(e = new C({
			props: { variante: 1, title: M[1].title, subtitle: M[1].subtitle, text: M[1].text }
		})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p: g,
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function vt(t) {
	let e, i;
	return (
		(e = new ft({})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function xt(t) {
	let e, i;
	return (
		(e = new ut({})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function bt(t) {
	let e, i;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = n(t, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			e.src !== (i = './img/grafico-8.svg') && u(e, 'src', './img/grafico-8.svg'), u(e, 'alt', '');
		},
		m(t, i) {
			d(t, e, i);
		},
		d(t) {
			t && c(e);
		}
	};
}
function wt(t) {
	let e, i, s, m;
	return {
		c() {
			(e = a('div')),
				(i = a('p')),
				(s = a('strong')),
				(m = r(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var r = o(i);
			s = n(r, 'STRONG', {});
			var u = o(s);
			(m = l(
				u,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				u.forEach(c),
				r.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			u(e, 'slot', 'subarea1');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, s), $(s, m);
		},
		d(t) {
			t && c(e);
		}
	};
}
function It(t) {
	let e, i, p, g, f, h;
	return {
		c() {
			(e = a('div')),
				(i = a('p')),
				(p = r(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				(g = s()),
				(f = a('p')),
				(h = r(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var r = o(i);
			(p = l(
				r,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				r.forEach(c),
				(g = m(a)),
				(f = n(a, 'P', {}));
			var s = o(f);
			(h = l(
				s,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				s.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			u(e, 'slot', 'subarea2');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, p), $(e, g), $(e, f), $(f, h);
		},
		d(t) {
			t && c(e);
		}
	};
}
function Et(t) {
	let e, i;
	return (
		(e = new N({
			props: {
				variante: 2,
				$$slots: { subarea2: [It], subarea1: [wt], default: [bt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p(t, i) {
				const a = {};
				1 & i && (a.$$scope = { dirty: i, ctx: t }), e.$set(a);
			},
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Pt(t) {
	let e, i;
	return (
		(e = new R({ props: { variante: 4, src: './img/cover4.jpg', alt: 'Presentation' } })),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p: g,
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Dt(t) {
	let e, i, p, g, f, h;
	return {
		c() {
			(e = a('div')),
				(i = a('h2')),
				(p = r('Mas info')),
				(g = s()),
				(f = a('p')),
				(h = r(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'H2', {});
			var r = o(i);
			(p = l(r, 'Mas info')), r.forEach(c), (g = m(a)), (f = n(a, 'P', {}));
			var s = o(f);
			(h = l(
				s,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
			)),
				s.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			u(e, 'slot', 'subarea2');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, p), $(e, g), $(e, f), $(f, h);
		},
		d(t) {
			t && c(e);
		}
	};
}
function kt(t) {
	let e, i, r;
	return (
		(i = new L({
			props: {
				variante: 1,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				(e = a('div')), w(i.$$.fragment), this.h();
			},
			l(t) {
				e = n(t, 'DIV', { slot: !0 });
				var a = o(e);
				I(i.$$.fragment, a), a.forEach(c), this.h();
			},
			h() {
				u(e, 'slot', 'subarea1');
			},
			m(t, a) {
				d(t, e, a), E(i, e, null), (r = !0);
			},
			p: g,
			i(t) {
				r || (P(i.$$.fragment, t), (r = !0));
			},
			o(t) {
				D(i.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && c(e), k(i);
			}
		}
	);
}
function yt(t) {
	let e, i;
	return (
		(e = new N({
			props: {
				variante: 5,
				$$slots: { subarea1: [kt], subarea2: [Dt], default: [Pt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (i = !0);
			},
			p(t, i) {
				const a = {};
				1 & i && (a.$$scope = { dirty: i, ctx: t }), e.$set(a);
			},
			i(t) {
				i || (P(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function St(t) {
	let e, i, a, r, n, o, l, u, $, p;
	return (
		(e = new U({
			props: { id: 'cover', variante: 3, $$slots: { default: [ht] }, $$scope: { ctx: t } }
		})),
		(a = new U({
			props: { variante: 1, id: 'video', $$slots: { default: [vt] }, $$scope: { ctx: t } }
		})),
		(n = new U({
			props: { id: 'lightboxgallery', variante: 0, $$slots: { default: [xt] }, $$scope: { ctx: t } }
		})),
		(l = new U({ props: { variante: 4, $$slots: { default: [Et] }, $$scope: { ctx: t } } })),
		($ = new U({ props: { variante: 3, $$slots: { default: [yt] }, $$scope: { ctx: t } } })),
		{
			c() {
				w(e.$$.fragment),
					(i = s()),
					w(a.$$.fragment),
					(r = s()),
					w(n.$$.fragment),
					(o = s()),
					w(l.$$.fragment),
					(u = s()),
					w($.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t),
					(i = m(t)),
					I(a.$$.fragment, t),
					(r = m(t)),
					I(n.$$.fragment, t),
					(o = m(t)),
					I(l.$$.fragment, t),
					(u = m(t)),
					I($.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s),
					d(t, i, s),
					E(a, t, s),
					d(t, r, s),
					E(n, t, s),
					d(t, o, s),
					E(l, t, s),
					d(t, u, s),
					E($, t, s),
					(p = !0);
			},
			p(t, [i]) {
				const r = {};
				1 & i && (r.$$scope = { dirty: i, ctx: t }), e.$set(r);
				const s = {};
				1 & i && (s.$$scope = { dirty: i, ctx: t }), a.$set(s);
				const o = {};
				1 & i && (o.$$scope = { dirty: i, ctx: t }), n.$set(o);
				const c = {};
				1 & i && (c.$$scope = { dirty: i, ctx: t }), l.$set(c);
				const m = {};
				1 & i && (m.$$scope = { dirty: i, ctx: t }), $.$set(m);
			},
			i(t) {
				p ||
					(P(e.$$.fragment, t),
					P(a.$$.fragment, t),
					P(n.$$.fragment, t),
					P(l.$$.fragment, t),
					P($.$$.fragment, t),
					(p = !0));
			},
			o(t) {
				D(e.$$.fragment, t),
					D(a.$$.fragment, t),
					D(n.$$.fragment, t),
					D(l.$$.fragment, t),
					D($.$$.fragment, t),
					(p = !1);
			},
			d(t) {
				k(e, t), t && c(i), k(a, t), t && c(r), k(n, t), t && c(o), k(l, t), t && c(u), k($, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, St, i, {});
	}
}
