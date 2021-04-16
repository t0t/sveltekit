import {
	S as t,
	i as e,
	s as i,
	e as a,
	t as s,
	j as r,
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
	K as b,
	Y as x,
	p as w,
	q as I,
	r as y,
	w as E,
	x as P,
	y as k,
	C as D,
	D as j,
	Q as q,
	Z as S,
	_ as V,
	J as T
} from '../../chunks/index-d91e1ed8.js';
import { B as L, G as N, C, c as M } from '../../chunks/Cover-12fb2afa.js';
import { a as G, f as z } from '../../chunks/index-65311448.js';
import { I as R } from '../../chunks/Img-a99bd539.js';
import { S as U } from '../../chunks/Section-b530c020.js';
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
	let e, i, f, h, v, b, x, w;
	return {
		c() {
			(e = a('div')),
				(i = a('div')),
				(f = s(t[0])),
				(h = s(' / ')),
				(v = s(t[1])),
				(b = r()),
				(x = a('img')),
				this.h();
		},
		l(a) {
			e = n(a, 'DIV', { class: !0 });
			var s = o(e);
			i = n(s, 'DIV', { class: !0 });
			var r = o(i);
			(f = l(r, t[0])),
				(h = l(r, ' / ')),
				(v = l(r, t[1])),
				r.forEach(c),
				(b = m(s)),
				(x = n(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				s.forEach(c),
				this.h();
		},
		h() {
			u(i, 'class', 'numbertext svelte-168sdzy'),
				x.src !== (w = t[2]) && u(x, 'src', w),
				u(x, 'alt', t[3]),
				u(x, 'title', t[4]),
				u(x, 'class', 'svelte-168sdzy'),
				u(e, 'class', 'Slide svelte-168sdzy');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, f), $(i, h), $(i, v), $(e, b), $(e, x);
		},
		p(t, [e]) {
			1 & e && p(f, t[0]),
				2 & e && p(v, t[1]),
				4 & e && x.src !== (w = t[2]) && u(x, 'src', w),
				8 & e && u(x, 'alt', t[3]),
				16 & e && u(x, 'title', t[4]);
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
		{ totalSlides: s } = e,
		{ image: r } = e,
		{ altTag: n } = e,
		{ description: o } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && i(0, (a = t.slideNo)),
				'totalSlides' in t && i(1, (s = t.totalSlides)),
				'image' in t && i(2, (r = t.image)),
				'altTag' in t && i(3, (n = t.altTag)),
				'description' in t && i(4, (o = t.description));
		}),
		[a, s, r, n, o]
	);
}
class B extends t {
	constructor(t) {
		super(),
			e(this, t, O, H, i, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function F(t) {
	let e, i, s, r;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = n(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			u(e, 'class', 'sample cursor svelte-14jorua'),
				u(e, 'id', t[3]),
				e.src !== (i = t[0]) && u(e, 'src', i),
				u(e, 'alt', t[1]),
				u(e, 'title', t[2]),
				f(e, 'active', t[4]);
		},
		m(i, a) {
			d(i, e, a), s || ((r = h(e, 'click', t[5])), (s = !0));
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
			t && c(e), (s = !1), r();
		}
	};
}
function J(t, e, i) {
	let { thumbImg: a } = e,
		{ altTag: s } = e,
		{ titleLink: r } = e,
		{ id: n } = e,
		{ selected: o } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && i(0, (a = t.thumbImg)),
				'altTag' in t && i(1, (s = t.altTag)),
				'titleLink' in t && i(2, (r = t.titleLink)),
				'id' in t && i(3, (n = t.id)),
				'selected' in t && i(4, (o = t.selected));
		}),
		[
			a,
			s,
			r,
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
	let e, i, f, v, x, w, I, y, E, P, k;
	return {
		c() {
			(e = a('div')),
				(i = a('a')),
				(f = s('❮')),
				(v = r()),
				(x = a('p')),
				(w = s(t[0])),
				(I = r()),
				(y = a('a')),
				(E = s('❯')),
				this.h();
		},
		l(a) {
			e = n(a, 'DIV', { class: !0 });
			var s = o(e);
			i = n(s, 'A', { href: !0, class: !0 });
			var r = o(i);
			(f = l(r, '❮')), r.forEach(c), (v = m(s)), (x = n(s, 'P', { id: !0, class: !0 }));
			var u = o(x);
			(w = l(u, t[0])), u.forEach(c), (I = m(s)), (y = n(s, 'A', { href: !0, class: !0 }));
			var d = o(y);
			(E = l(d, '❯')), d.forEach(c), s.forEach(c), this.h();
		},
		h() {
			u(i, 'href', '#arrowL'),
				u(i, 'class', 'arrow prev svelte-1kngayd'),
				u(x, 'id', 'caption'),
				u(x, 'class', 'svelte-1kngayd'),
				u(y, 'href', '#arrowR'),
				u(y, 'class', 'arrow next svelte-1kngayd'),
				u(e, 'class', 'caption-container svelte-1kngayd');
		},
		m(a, s) {
			d(a, e, s),
				$(e, i),
				$(i, f),
				$(e, v),
				$(e, x),
				$(x, w),
				$(e, I),
				$(e, y),
				$(y, E),
				P || ((k = [h(i, 'click', t[2]), h(y, 'click', t[3])]), (P = !0));
		},
		p(t, [e]) {
			1 & e && p(w, t[0]);
		},
		i: g,
		o: g,
		d(t) {
			t && c(e), (P = !1), b(k);
		}
	};
}
function W(t, e, i) {
	let { caption: a } = e;
	const s = x();
	return (
		(t.$$set = (t) => {
			'caption' in t && i(0, (a = t.caption));
		}),
		[a, s, () => s('prevClick'), () => s('nextClick')]
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
				y(e, t, a), (i = !0);
			},
			p(i, a) {
				t = i;
				const s = {};
				1 & a && (s.selected = Number(t[0]) === t[7]), e.$set(s);
			},
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function X(t) {
	let e, i, p, g, f, v, b, x, L, N, C, M, R, U;
	(f = new B({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: A.length
		}
	})),
		(b = new Y({ props: { caption: A[t[0]].description } })),
		b.$on('prevClick', t[3]),
		b.$on('nextClick', t[2]);
	let H = A,
		O = [];
	for (let a = 0; a < H.length; a += 1) O[a] = _(Z(t, H, a));
	const F = (t) =>
		P(O[t], 1, 1, () => {
			O[t] = null;
		});
	return {
		c() {
			(e = a('div')),
				(i = a('span')),
				(p = s('✗')),
				(g = r()),
				w(f.$$.fragment),
				(v = r()),
				w(b.$$.fragment),
				(x = r()),
				(L = a('div'));
			for (let t = 0; t < O.length; t += 1) O[t].c();
			this.h();
		},
		l(t) {
			e = n(t, 'DIV', { class: !0 });
			var a = o(e);
			i = n(a, 'SPAN', { class: !0 });
			var s = o(i);
			(p = l(s, '✗')),
				s.forEach(c),
				(g = m(a)),
				I(f.$$.fragment, a),
				(v = m(a)),
				I(b.$$.fragment, a),
				(x = m(a)),
				(L = n(a, 'DIV', { class: !0 }));
			var r = o(L);
			for (let e = 0; e < O.length; e += 1) O[e].l(r);
			r.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(i, 'class', 'close cursor svelte-r15ul5'),
				u(L, 'class', 'Thumbnails svelte-r15ul5'),
				u(e, 'class', 'lightbox svelte-r15ul5');
		},
		m(a, s) {
			d(a, e, s),
				$(e, i),
				$(i, p),
				$(e, g),
				y(f, e, null),
				$(e, v),
				y(b, e, null),
				$(e, x),
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
			if ((1 & e && (a.caption = A[t[0]].description), b.$set(a), 17 & e)) {
				let i;
				for (H = A, i = 0; i < H.length; i += 1) {
					const a = Z(t, H, i);
					O[i]
						? (O[i].p(a, e), E(O[i], 1))
						: ((O[i] = _(a)), O[i].c(), E(O[i], 1), O[i].m(L, null));
				}
				for (D(), i = H.length; i < O.length; i += 1) F(i);
				j();
			}
		},
		i(t) {
			if (!M) {
				E(f.$$.fragment, t), E(b.$$.fragment, t);
				for (let t = 0; t < H.length; t += 1) E(O[t]);
				q(() => {
					C && C.end(1), N || (N = S(e, G, { x: -300 })), N.start();
				}),
					(M = !0);
			}
		},
		o(t) {
			P(f.$$.fragment, t), P(b.$$.fragment, t), (O = O.filter(Boolean));
			for (let e = 0; e < O.length; e += 1) P(O[e]);
			N && N.invalidate(), (C = V(e, z, {})), (M = !1);
		},
		d(t) {
			t && c(e), k(f), k(b), T(O, t), t && C && C.end(), (R = !1), U();
		}
	};
}
function tt(t, e, i) {
	let a,
		{ imageShowingIndex: s = 0 } = e;
	const r = (t) => i(0, (s = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && i(0, (s = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && i(1, (a = A[s]));
		}),
		[
			s,
			a,
			() => {
				i(0, s === A.length - 1 ? (s = 0) : (s += 1));
			},
			() => {
				i(0, 0 === s ? (s = A.length - 1) : (s -= 1));
			},
			r,
			function (e) {
				v(t, e);
			},
			(t) => r(t)
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
	let e, i, s, r;
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
				u(e, 'class', 'svelte-1cj8jz7');
		},
		m(i, a) {
			d(i, e, a), s || ((r = h(e, 'click', t[0])), (s = !0));
		},
		p: g,
		d(t) {
			t && c(e), (s = !1), r();
		}
	};
}
function st(t) {
	let e,
		i = A,
		s = [];
	for (let a = 0; a < i.length; a += 1) s[a] = at(it(t, i, a));
	return {
		c() {
			e = a('div');
			for (let t = 0; t < s.length; t += 1) s[t].c();
			this.h();
		},
		l(t) {
			e = n(t, 'DIV', { class: !0 });
			var i = o(e);
			for (let e = 0; e < s.length; e += 1) s[e].l(i);
			i.forEach(c), this.h();
		},
		h() {
			u(e, 'class', 'DemoGallery svelte-1cj8jz7');
		},
		m(t, i) {
			d(t, e, i);
			for (let a = 0; a < s.length; a += 1) s[a].m(e, null);
		},
		p(t, [a]) {
			if (0 & a) {
				let r;
				for (i = A, r = 0; r < i.length; r += 1) {
					const n = it(t, i, r);
					s[r] ? s[r].p(n, a) : ((s[r] = at(n)), s[r].c(), s[r].m(e, null));
				}
				for (; r < s.length; r += 1) s[r].d(1);
				s.length = i.length;
			}
		},
		i: g,
		o: g,
		d(t) {
			t && c(e), T(s, t);
		}
	};
}
function rt(t) {
	return [
		function (e) {
			v(t, e);
		}
	];
}
class nt extends t {
	constructor(t) {
		super(), e(this, t, rt, st, i, {});
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
				y(e, t, a), (i = !0);
			},
			p: g,
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
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
				y(e, t, a), (i = !0);
			},
			p(t, i) {
				const a = {};
				2 & i && (a.imageShowingIndex = t[1]), e.$set(a);
			},
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function ct(t) {
	let e, i, s, l, $, p;
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
				i.c(), (s = r()), (l = a('aside')), w($.$$.fragment), this.h();
			},
			l(t) {
				i.l(t), (s = m(t)), (l = n(t, 'ASIDE', { class: !0 }));
				var e = o(l);
				I($.$$.fragment, e), e.forEach(c), this.h();
			},
			h() {
				u(l, 'class', 'svelte-i6qeye');
			},
			m(t, i) {
				f[e].m(t, i), d(t, s, i), d(t, l, i), y($, l, null), (p = !0);
			},
			p(t, [a]) {
				let r = e;
				(e = h(t)),
					e === r
						? f[e].p(t, a)
						: (D(),
						  P(f[r], 1, 1, () => {
								f[r] = null;
						  }),
						  j(),
						  (i = f[e]),
						  i ? i.p(t, a) : ((i = f[e] = g[e](t)), i.c()),
						  E(i, 1),
						  i.m(s.parentNode, s));
			},
			i(t) {
				p || (E(i), E($.$$.fragment, t), (p = !0));
			},
			o(t) {
				P(i), P($.$$.fragment, t), (p = !1);
			},
			d(t) {
				f[e].d(t), t && c(s), t && c(l), k($);
			}
		}
	);
}
function mt(t, e, i) {
	let a = !1,
		s = 0;
	return [
		a,
		s,
		(t) => {
			i(1, (s = Number(t.target.id))), i(0, (a = !0));
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
	let e, i, r, m, p, g, f;
	return {
		c() {
			(e = a('video')),
				(i = a('source')),
				(m = a('source')),
				(g = a('p')),
				(f = s('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(t) {
			e = n(t, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var a = o(e);
			(i = n(a, 'SOURCE', { src: !0, type: !0 })),
				(m = n(a, 'SOURCE', { src: !0, type: !0 })),
				(g = n(a, 'P', {}));
			var s = o(g);
			(f = l(s, 'Ups! Su navegador no soporta vídeos HTML5.')),
				s.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			i.src !== (r = '/img/desdelapoesiadelamateria.webm') &&
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
	let e, i, r;
	return {
		c() {
			(e = a('div')), (i = a('p')), (r = s('Desde la poesía de la materia')), this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var s = o(i);
			(r = l(s, 'Desde la poesía de la materia')), s.forEach(c), a.forEach(c), this.h();
		},
		h() {
			u(e, 'slot', 'subarea1');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, r);
		},
		d(t) {
			t && c(e);
		}
	};
}
function pt(t) {
	let e, i, r;
	return {
		c() {
			(e = a('div')),
				(i = a('p')),
				(r = s(
					'Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var s = o(i);
			(r = l(
				s,
				'Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.'
			)),
				s.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			u(e, 'slot', 'subarea2');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, r);
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
				y(e, t, a), (i = !0);
			},
			p(t, [i]) {
				const a = {};
				1 & i && (a.$$scope = { dirty: i, ctx: t }), e.$set(a);
			},
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
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
				y(e, t, a), (i = !0);
			},
			p: g,
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
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
				y(e, t, a), (i = !0);
			},
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function bt(t) {
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
				y(e, t, a), (i = !0);
			},
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function xt(t) {
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
	let e, i, r, m;
	return {
		c() {
			(e = a('div')),
				(i = a('p')),
				(r = a('strong')),
				(m = s(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var s = o(i);
			r = n(s, 'STRONG', {});
			var u = o(r);
			(m = l(
				u,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				u.forEach(c),
				s.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			u(e, 'slot', 'subarea1');
		},
		m(t, a) {
			d(t, e, a), $(e, i), $(i, r), $(r, m);
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
				(p = s(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				(g = r()),
				(f = a('p')),
				(h = s(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'P', {});
			var s = o(i);
			(p = l(
				s,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				s.forEach(c),
				(g = m(a)),
				(f = n(a, 'P', {}));
			var r = o(f);
			(h = l(
				r,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				r.forEach(c),
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
function yt(t) {
	let e, i;
	return (
		(e = new N({
			props: {
				variante: 2,
				$$slots: { subarea2: [It], subarea1: [wt], default: [xt] },
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
				y(e, t, a), (i = !0);
			},
			p(t, i) {
				const a = {};
				1 & i && (a.$$scope = { dirty: i, ctx: t }), e.$set(a);
			},
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Et(t) {
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
				y(e, t, a), (i = !0);
			},
			p: g,
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Pt(t) {
	let e, i, p, g, f, h;
	return {
		c() {
			(e = a('div')),
				(i = a('h2')),
				(p = s('Mas info')),
				(g = r()),
				(f = a('p')),
				(h = s(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
				)),
				this.h();
		},
		l(t) {
			e = n(t, 'DIV', { slot: !0 });
			var a = o(e);
			i = n(a, 'H2', {});
			var s = o(i);
			(p = l(s, 'Mas info')), s.forEach(c), (g = m(a)), (f = n(a, 'P', {}));
			var r = o(f);
			(h = l(
				r,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
			)),
				r.forEach(c),
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
	let e, i, s;
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
				d(t, e, a), y(i, e, null), (s = !0);
			},
			p: g,
			i(t) {
				s || (E(i.$$.fragment, t), (s = !0));
			},
			o(t) {
				P(i.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && c(e), k(i);
			}
		}
	);
}
function Dt(t) {
	let e, i;
	return (
		(e = new N({
			props: {
				variante: 5,
				$$slots: { subarea1: [kt], subarea2: [Pt], default: [Et] },
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
				y(e, t, a), (i = !0);
			},
			p(t, i) {
				const a = {};
				1 & i && (a.$$scope = { dirty: i, ctx: t }), e.$set(a);
			},
			i(t) {
				i || (E(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function jt(t) {
	let e, i, a, s, n, o, l, u, $, p;
	return (
		(e = new U({
			props: { id: 'cover', variante: 3, $$slots: { default: [ht] }, $$scope: { ctx: t } }
		})),
		(a = new U({
			props: { variante: 1, id: 'video', $$slots: { default: [vt] }, $$scope: { ctx: t } }
		})),
		(n = new U({
			props: { id: 'lightboxgallery', variante: 0, $$slots: { default: [bt] }, $$scope: { ctx: t } }
		})),
		(l = new U({ props: { variante: 4, $$slots: { default: [yt] }, $$scope: { ctx: t } } })),
		($ = new U({ props: { variante: 3, $$slots: { default: [Dt] }, $$scope: { ctx: t } } })),
		{
			c() {
				w(e.$$.fragment),
					(i = r()),
					w(a.$$.fragment),
					(s = r()),
					w(n.$$.fragment),
					(o = r()),
					w(l.$$.fragment),
					(u = r()),
					w($.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t),
					(i = m(t)),
					I(a.$$.fragment, t),
					(s = m(t)),
					I(n.$$.fragment, t),
					(o = m(t)),
					I(l.$$.fragment, t),
					(u = m(t)),
					I($.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r),
					d(t, i, r),
					y(a, t, r),
					d(t, s, r),
					y(n, t, r),
					d(t, o, r),
					y(l, t, r),
					d(t, u, r),
					y($, t, r),
					(p = !0);
			},
			p(t, [i]) {
				const s = {};
				1 & i && (s.$$scope = { dirty: i, ctx: t }), e.$set(s);
				const r = {};
				1 & i && (r.$$scope = { dirty: i, ctx: t }), a.$set(r);
				const o = {};
				1 & i && (o.$$scope = { dirty: i, ctx: t }), n.$set(o);
				const c = {};
				1 & i && (c.$$scope = { dirty: i, ctx: t }), l.$set(c);
				const m = {};
				1 & i && (m.$$scope = { dirty: i, ctx: t }), $.$set(m);
			},
			i(t) {
				p ||
					(E(e.$$.fragment, t),
					E(a.$$.fragment, t),
					E(n.$$.fragment, t),
					E(l.$$.fragment, t),
					E($.$$.fragment, t),
					(p = !0));
			},
			o(t) {
				P(e.$$.fragment, t),
					P(a.$$.fragment, t),
					P(n.$$.fragment, t),
					P(l.$$.fragment, t),
					P($.$$.fragment, t),
					(p = !1);
			},
			d(t) {
				k(e, t), t && c(i), k(a, t), t && c(s), k(n, t), t && c(o), k(l, t), t && c(u), k($, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, jt, i, {});
	}
}
