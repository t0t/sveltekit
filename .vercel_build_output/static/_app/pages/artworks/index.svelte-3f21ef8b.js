import {
	S as t,
	i as e,
	s as n,
	e as a,
	j as i,
	t as s,
	c as r,
	a as l,
	d as c,
	l as o,
	b as g,
	o as m,
	P as $,
	G as f,
	f as d,
	g as u,
	h,
	n as p,
	p as v,
	q as x,
	r as b,
	w as k,
	x as w,
	y as I,
	H as D,
	F as j,
	K as E,
	Y as T,
	C as P,
	D as S,
	J as y,
	Q as N,
	Z as V,
	_ as C
} from '../../chunks/index-d91e1ed8.js';
import { B as L, C as q, c as B } from '../../chunks/Cover-1da3f25f.js';
import { a as G, f as R } from '../../chunks/index-65311448.js';
import { S as _ } from '../../chunks/Section-554b0cec.js';
import '../../chunks/index-78b22dae.js';
const A = [
	{ word: 'Velociraptor', image: '/img/velociraptor.jpg' },
	{ word: 'Raptor Delta', image: '/img/raptordelta.jpeg' },
	{ word: 'vesica piscis', image: '/img/bg3.jpg' },
	{ word: 'vesica piscis', image: '/img/bg4.jpg' }
];
function M(t) {
	let e, n, v, x, b, k;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				(v = i()),
				(x = a('div')),
				(b = a('h2')),
				(k = s(t[0])),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			(n = r(i, 'DIV', { class: !0, style: !0 })),
				l(n).forEach(c),
				i.forEach(c),
				(v = o(a)),
				(x = r(a, 'DIV', { class: !0 }));
			var s = l(x);
			b = r(s, 'H2', {});
			var m = l(b);
			(k = g(m, t[0])), m.forEach(c), s.forEach(c), this.h();
		},
		h() {
			m(n, 'class', 'image svelte-3n219r'),
				$(n, 'background-image', 'url(' + t[1] + ')'),
				m(e, 'class', 'flip-box-front svelte-3n219r'),
				m(x, 'class', 'flip-box-back svelte-3n219r'),
				f(x, 'NoRebelesTxt', t[2]);
		},
		m(t, a) {
			d(t, e, a), u(e, n), d(t, v, a), d(t, x, a), u(x, b), u(b, k);
		},
		p(t, [e]) {
			2 & e && $(n, 'background-image', 'url(' + t[1] + ')'),
				1 & e && h(k, t[0]),
				4 & e && f(x, 'NoRebelesTxt', t[2]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), t && c(v), t && c(x);
		}
	};
}
function H(t, e, n) {
	let { back_txt: a } = e,
		{ foto: i } = e,
		{ showCarBack: s } = e;
	return (
		(t.$$set = (t) => {
			'back_txt' in t && n(0, (a = t.back_txt)),
				'foto' in t && n(1, (i = t.foto)),
				'showCarBack' in t && n(2, (s = t.showCarBack));
		}),
		[a, i, s]
	);
}
class U extends t {
	constructor(t) {
		super(), e(this, t, H, M, n, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function F(t) {
	let e, n, s, g, $, h, p, D, j, E, T;
	return (
		(s = new U({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(h = new L({ props: { variante: 4, text: '↜' } })),
		h.$on('click', t[4]),
		(D = new L({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		D.$on('click', t[3]),
		(E = new L({ props: { variante: 4, text: '⤳' } })),
		E.$on('click', t[5]),
		{
			c() {
				(e = a('div')),
					(n = a('div')),
					v(s.$$.fragment),
					(g = i()),
					($ = a('div')),
					v(h.$$.fragment),
					(p = i()),
					v(D.$$.fragment),
					(j = i()),
					v(E.$$.fragment),
					this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var a = l(e);
				n = r(a, 'DIV', { class: !0 });
				var i = l(n);
				x(s.$$.fragment, i), i.forEach(c), (g = o(a)), ($ = r(a, 'DIV', { class: !0 }));
				var m = l($);
				x(h.$$.fragment, m),
					(p = o(m)),
					x(D.$$.fragment, m),
					(j = o(m)),
					x(E.$$.fragment, m),
					m.forEach(c),
					a.forEach(c),
					this.h();
			},
			h() {
				m(n, 'class', 'flip-box-inner svelte-6ihavh'),
					f(n, 'flip-it', t[0]),
					m($, 'class', 'ButtonControls svelte-6ihavh'),
					m(e, 'class', 'flip-box svelte-6ihavh');
			},
			m(t, a) {
				d(t, e, a),
					u(e, n),
					b(s, n, null),
					u(e, g),
					u(e, $),
					b(h, $, null),
					u($, p),
					b(D, $, null),
					u($, j),
					b(E, $, null),
					(T = !0);
			},
			p(t, [e]) {
				const a = {};
				1 & e && (a.showCarBack = t[0]),
					2 & e && (a.foto = t[1]),
					4 & e && (a.back_txt = t[2]),
					s.$set(a),
					1 & e && f(n, 'flip-it', t[0]);
				const i = {};
				1 & e && (i.text = t[0] ? '⤿' : '⤾'), D.$set(i);
			},
			i(t) {
				T ||
					(k(s.$$.fragment, t),
					k(h.$$.fragment, t),
					k(D.$$.fragment, t),
					k(E.$$.fragment, t),
					(T = !0));
			},
			o(t) {
				w(s.$$.fragment, t),
					w(h.$$.fragment, t),
					w(D.$$.fragment, t),
					w(E.$$.fragment, t),
					(T = !1);
			},
			d(t) {
				t && c(e), I(s), I(h), I(D), I(E);
			}
		}
	);
}
function J(t, e, n) {
	let a, i;
	let s = !1,
		r = 0;
	return (
		(t.$$.update = () => {
			64 & t.$$.dirty && n(1, (a = A[r].image)), 64 & t.$$.dirty && n(2, (i = A[r].word));
		}),
		[
			s,
			a,
			i,
			() => n(0, (s = !s)),
			() => {
				n(0, (s = !1)), n(6, 0 === r ? (r = A.length - 1) : (r -= 1));
			},
			() => {
				n(0, (s = !1)), n(6, r === A.length - 1 ? (r = 0) : (r += 1));
			},
			r
		]
	);
}
class K extends t {
	constructor(t) {
		super(), e(this, t, J, F, n, {});
	}
}
const Q = [
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
function Y(t) {
	let e, n, $, f, v, x, b, k;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				($ = s(t[0])),
				(f = s(' / ')),
				(v = s(t[1])),
				(x = i()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'DIV', { class: !0 });
			var s = l(n);
			($ = g(s, t[0])),
				(f = g(s, ' / ')),
				(v = g(s, t[1])),
				s.forEach(c),
				(x = o(i)),
				(b = r(i, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				i.forEach(c),
				this.h();
		},
		h() {
			m(n, 'class', 'numbertext svelte-gu5xq9'),
				b.src !== (k = t[2]) && m(b, 'src', k),
				m(b, 'alt', t[3]),
				m(b, 'title', t[4]),
				m(b, 'class', 'svelte-gu5xq9'),
				m(e, 'class', 'mySlides svelte-gu5xq9');
		},
		m(t, a) {
			d(t, e, a), u(e, n), u(n, $), u(n, f), u(n, v), u(e, x), u(e, b);
		},
		p(t, [e]) {
			1 & e && h($, t[0]),
				2 & e && h(v, t[1]),
				4 & e && b.src !== (k = t[2]) && m(b, 'src', k),
				8 & e && m(b, 'alt', t[3]),
				16 & e && m(b, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e);
		}
	};
}
function Z(t, e, n) {
	let { slideNo: a } = e,
		{ totalSlides: i } = e,
		{ image: s } = e,
		{ altTag: r } = e,
		{ attr: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && n(0, (a = t.slideNo)),
				'totalSlides' in t && n(1, (i = t.totalSlides)),
				'image' in t && n(2, (s = t.image)),
				'altTag' in t && n(3, (r = t.altTag)),
				'attr' in t && n(4, (l = t.attr));
		}),
		[a, i, s, r, l]
	);
}
class z extends t {
	constructor(t) {
		super(), e(this, t, Z, Y, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function O(t) {
	let e, n, i, s, o, g;
	return {
		c() {
			(e = a('div')), (n = a('img')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0 });
			var a = l(e);
			(n = r(a, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), a.forEach(c), this.h();
		},
		h() {
			m(n, 'class', 'sample cursor svelte-jjase0'),
				m(n, 'id', t[3]),
				n.src !== (i = t[0]) && m(n, 'src', i),
				m(n, 'alt', t[1]),
				m(n, 'title', (s = 'Image from ' + t[2])),
				f(n, 'active', t[4]),
				m(e, 'class', 'thumbnail-cont svelte-jjase0');
		},
		m(a, i) {
			d(a, e, i), u(e, n), o || ((g = D(n, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && m(n, 'id', t[3]),
				1 & e && n.src !== (i = t[0]) && m(n, 'src', i),
				2 & e && m(n, 'alt', t[1]),
				4 & e && s !== (s = 'Image from ' + t[2]) && m(n, 'title', s),
				16 & e && f(n, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (o = !1), g();
		}
	};
}
function W(t, e, n) {
	let { thumbImg: a } = e,
		{ altTag: i } = e,
		{ titleLink: s } = e,
		{ id: r } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && n(0, (a = t.thumbImg)),
				'altTag' in t && n(1, (i = t.altTag)),
				'titleLink' in t && n(2, (s = t.titleLink)),
				'id' in t && n(3, (r = t.id)),
				'selected' in t && n(4, (l = t.selected));
		}),
		[
			a,
			i,
			s,
			r,
			l,
			function (e) {
				j(t, e);
			}
		]
	);
}
class X extends t {
	constructor(t) {
		super(), e(this, t, W, O, n, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function tt(t) {
	let e, n, $, f, v, x, b, k, w, I, j;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = s('❮')),
				(f = i()),
				(v = a('p')),
				(x = s(t[0])),
				(b = i()),
				(k = a('a')),
				(w = s('❯')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'A', { href: !0, class: !0 });
			var s = l(n);
			($ = g(s, '❮')), s.forEach(c), (f = o(i)), (v = r(i, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(x = g(m, t[0])), m.forEach(c), (b = o(i)), (k = r(i, 'A', { href: !0, class: !0 }));
			var d = l(k);
			(w = g(d, '❯')), d.forEach(c), i.forEach(c), this.h();
		},
		h() {
			m(n, 'href', '#arrowL'),
				m(n, 'class', 'arrow prev svelte-j2tqib'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-j2tqib'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-j2tqib'),
				m(e, 'class', 'caption-container svelte-j2tqib');
		},
		m(a, i) {
			d(a, e, i),
				u(e, n),
				u(n, $),
				u(e, f),
				u(e, v),
				u(v, x),
				u(e, b),
				u(e, k),
				u(k, w),
				I || ((j = [D(n, 'click', t[2]), D(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(x, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), E(j);
		}
	};
}
function et(t, e, n) {
	let { caption: a } = e;
	const i = T();
	return (
		(t.$$set = (t) => {
			'caption' in t && n(0, (a = t.caption));
		}),
		[a, i, () => i('prevClick'), () => i('nextClick')]
	);
}
class nt extends t {
	constructor(t) {
		super(), e(this, t, et, tt, n, { caption: 0 });
	}
}
function at(t, e, n) {
	const a = t.slice();
	return (a[6] = e[n].id), (a[7] = e[n].imgurl), (a[8] = e[n].name), (a[9] = e[n].attribution), a;
}
function it(t) {
	let e, n;
	return (
		(e = new X({
			props: { thumbImg: t[7], altTag: t[8], titleLink: t[9], id: t[6], selected: t[0] === t[6] }
		})),
		e.$on('click', function () {
			return t[5](t[6]);
		}),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			p(n, a) {
				t = n;
				const i = {};
				1 & a && (i.selected = t[0] === t[6]), e.$set(i);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function st(t) {
	let e, n, s, g, $, f, u;
	(n = new z({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: Q.length
		}
	})),
		(g = new nt({ props: { caption: Q[t[0]].name } })),
		g.$on('prevClick', t[3]),
		g.$on('nextClick', t[2]);
	let h = Q,
		p = [];
	for (let a = 0; a < h.length; a += 1) p[a] = it(at(t, h, a));
	const D = (t) =>
		w(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(e = a('div')), v(n.$$.fragment), (s = i()), v(g.$$.fragment), ($ = i()), (f = a('div'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0 });
			var a = l(e);
			x(n.$$.fragment, a),
				a.forEach(c),
				(s = o(t)),
				x(g.$$.fragment, t),
				($ = o(t)),
				(f = r(t, 'DIV', { class: !0 }));
			var i = l(f);
			for (let e = 0; e < p.length; e += 1) p[e].l(i);
			i.forEach(c), this.h();
		},
		h() {
			m(e, 'class', 'container svelte-1qcybd5'), m(f, 'class', 'thumbnails-row svelte-1qcybd5');
		},
		m(t, a) {
			d(t, e, a), b(n, e, null), d(t, s, a), b(g, t, a), d(t, $, a), d(t, f, a);
			for (let e = 0; e < p.length; e += 1) p[e].m(f, null);
			u = !0;
		},
		p(t, [e]) {
			const a = {};
			2 & e && (a.image = t[1].imgurl),
				2 & e && (a.altTag = t[1].name),
				2 & e && (a.attr = t[1].attribution),
				2 & e && (a.slideNo = t[1].id + 1),
				n.$set(a);
			const i = {};
			if ((1 & e && (i.caption = Q[t[0]].name), g.$set(i), 17 & e)) {
				let n;
				for (h = Q, n = 0; n < h.length; n += 1) {
					const a = at(t, h, n);
					p[n]
						? (p[n].p(a, e), k(p[n], 1))
						: ((p[n] = it(a)), p[n].c(), k(p[n], 1), p[n].m(f, null));
				}
				for (P(), n = h.length; n < p.length; n += 1) D(n);
				S();
			}
		},
		i(t) {
			if (!u) {
				k(n.$$.fragment, t), k(g.$$.fragment, t);
				for (let t = 0; t < h.length; t += 1) k(p[t]);
				u = !0;
			}
		},
		o(t) {
			w(n.$$.fragment, t), w(g.$$.fragment, t), (p = p.filter(Boolean));
			for (let e = 0; e < p.length; e += 1) w(p[e]);
			u = !1;
		},
		d(t) {
			t && c(e), I(n), t && c(s), I(g, t), t && c($), t && c(f), y(p, t);
		}
	};
}
function rt(t, e, n) {
	let a,
		i = 0;
	const s = (t) => n(0, (i = t));
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(i), 1 & t.$$.dirty && n(1, (a = Q[i]));
		}),
		[
			i,
			a,
			() => {
				n(0, i === Q.length - 1 ? (i = 0) : (i += 1));
			},
			() => {
				n(0, 0 === i ? (i = Q.length - 1) : (i -= 1));
			},
			s,
			(t) => s(t)
		]
	);
}
class lt extends t {
	constructor(t) {
		super(), e(this, t, rt, st, n, {});
	}
}
function ct(t) {
	let e, n, $, f, v, x, b, k;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				($ = s(t[0])),
				(f = s(' / ')),
				(v = s(t[1])),
				(x = i()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'DIV', { class: !0 });
			var s = l(n);
			($ = g(s, t[0])),
				(f = g(s, ' / ')),
				(v = g(s, t[1])),
				s.forEach(c),
				(x = o(i)),
				(b = r(i, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				i.forEach(c),
				this.h();
		},
		h() {
			m(n, 'class', 'numbertext svelte-1nwe1ii'),
				b.src !== (k = t[2]) && m(b, 'src', k),
				m(b, 'alt', t[3]),
				m(b, 'title', t[4]),
				m(b, 'class', 'svelte-1nwe1ii'),
				m(e, 'class', 'Slide svelte-1nwe1ii');
		},
		m(t, a) {
			d(t, e, a), u(e, n), u(n, $), u(n, f), u(n, v), u(e, x), u(e, b);
		},
		p(t, [e]) {
			1 & e && h($, t[0]),
				2 & e && h(v, t[1]),
				4 & e && b.src !== (k = t[2]) && m(b, 'src', k),
				8 & e && m(b, 'alt', t[3]),
				16 & e && m(b, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e);
		}
	};
}
function ot(t, e, n) {
	let { slideNo: a } = e,
		{ totalSlides: i } = e,
		{ image: s } = e,
		{ altTag: r } = e,
		{ description: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && n(0, (a = t.slideNo)),
				'totalSlides' in t && n(1, (i = t.totalSlides)),
				'image' in t && n(2, (s = t.image)),
				'altTag' in t && n(3, (r = t.altTag)),
				'description' in t && n(4, (l = t.description));
		}),
		[a, i, s, r, l]
	);
}
class gt extends t {
	constructor(t) {
		super(),
			e(this, t, ot, ct, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function mt(t) {
	let e, n, i, s;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = r(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			m(e, 'class', 'sample cursor svelte-vigem6'),
				m(e, 'id', t[3]),
				e.src !== (n = t[0]) && m(e, 'src', n),
				m(e, 'alt', t[1]),
				m(e, 'title', t[2]),
				f(e, 'active', t[4]);
		},
		m(n, a) {
			d(n, e, a), i || ((s = D(e, 'click', t[5])), (i = !0));
		},
		p(t, [a]) {
			8 & a && m(e, 'id', t[3]),
				1 & a && e.src !== (n = t[0]) && m(e, 'src', n),
				2 & a && m(e, 'alt', t[1]),
				4 & a && m(e, 'title', t[2]),
				16 & a && f(e, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (i = !1), s();
		}
	};
}
function $t(t, e, n) {
	let { thumbImg: a } = e,
		{ altTag: i } = e,
		{ titleLink: s } = e,
		{ id: r } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && n(0, (a = t.thumbImg)),
				'altTag' in t && n(1, (i = t.altTag)),
				'titleLink' in t && n(2, (s = t.titleLink)),
				'id' in t && n(3, (r = t.id)),
				'selected' in t && n(4, (l = t.selected));
		}),
		[
			a,
			i,
			s,
			r,
			l,
			function (e) {
				j(t, e);
			}
		]
	);
}
class ft extends t {
	constructor(t) {
		super(), e(this, t, $t, mt, n, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function dt(t) {
	let e, n, $, f, v, x, b, k, w, I, j;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = s('❮')),
				(f = i()),
				(v = a('p')),
				(x = s(t[0])),
				(b = i()),
				(k = a('a')),
				(w = s('❯')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'A', { href: !0, class: !0 });
			var s = l(n);
			($ = g(s, '❮')), s.forEach(c), (f = o(i)), (v = r(i, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(x = g(m, t[0])), m.forEach(c), (b = o(i)), (k = r(i, 'A', { href: !0, class: !0 }));
			var d = l(k);
			(w = g(d, '❯')), d.forEach(c), i.forEach(c), this.h();
		},
		h() {
			m(n, 'href', '#arrowL'),
				m(n, 'class', 'arrow prev svelte-vmtfav'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-vmtfav'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-vmtfav'),
				m(e, 'class', 'caption-container svelte-vmtfav');
		},
		m(a, i) {
			d(a, e, i),
				u(e, n),
				u(n, $),
				u(e, f),
				u(e, v),
				u(v, x),
				u(e, b),
				u(e, k),
				u(k, w),
				I || ((j = [D(n, 'click', t[2]), D(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(x, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), E(j);
		}
	};
}
function ut(t, e, n) {
	let { caption: a } = e;
	const i = T();
	return (
		(t.$$set = (t) => {
			'caption' in t && n(0, (a = t.caption));
		}),
		[a, i, () => i('prevClick'), () => i('nextClick')]
	);
}
class ht extends t {
	constructor(t) {
		super(), e(this, t, ut, dt, n, { caption: 0 });
	}
}
function pt(t, e, n) {
	const a = t.slice();
	return (a[7] = e[n].id), (a[8] = e[n].imgurl), (a[9] = e[n].name), a;
}
function vt(t) {
	let e, n;
	return (
		(e = new ft({
			props: { thumbImg: t[8], altTag: t[9], id: t[7], selected: Number(t[0]) === t[7] }
		})),
		e.$on('click', function () {
			return t[6](t[7]);
		}),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			p(n, a) {
				t = n;
				const i = {};
				1 & a && (i.selected = Number(t[0]) === t[7]), e.$set(i);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function xt(t) {
	let e, n, $, f, h, p, j, E, T, L, q, B, _, A;
	(h = new gt({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: Q.length
		}
	})),
		(j = new ht({ props: { caption: Q[t[0]].description } })),
		j.$on('prevClick', t[3]),
		j.$on('nextClick', t[2]);
	let M = Q,
		H = [];
	for (let a = 0; a < M.length; a += 1) H[a] = vt(pt(t, M, a));
	const U = (t) =>
		w(H[t], 1, 1, () => {
			H[t] = null;
		});
	return {
		c() {
			(e = a('div')),
				(n = a('span')),
				($ = s('✗')),
				(f = i()),
				v(h.$$.fragment),
				(p = i()),
				v(j.$$.fragment),
				(E = i()),
				(T = a('div'));
			for (let t = 0; t < H.length; t += 1) H[t].c();
			this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0 });
			var a = l(e);
			n = r(a, 'SPAN', { class: !0 });
			var i = l(n);
			($ = g(i, '✗')),
				i.forEach(c),
				(f = o(a)),
				x(h.$$.fragment, a),
				(p = o(a)),
				x(j.$$.fragment, a),
				(E = o(a)),
				(T = r(a, 'DIV', { class: !0 }));
			var s = l(T);
			for (let e = 0; e < H.length; e += 1) H[e].l(s);
			s.forEach(c), a.forEach(c), this.h();
		},
		h() {
			m(n, 'class', 'close cursor svelte-osgp13'),
				m(T, 'class', 'Thumbnails svelte-osgp13'),
				m(e, 'class', 'lightbox svelte-osgp13');
		},
		m(a, i) {
			d(a, e, i),
				u(e, n),
				u(n, $),
				u(e, f),
				b(h, e, null),
				u(e, p),
				b(j, e, null),
				u(e, E),
				u(e, T);
			for (let t = 0; t < H.length; t += 1) H[t].m(T, null);
			(B = !0), _ || ((A = D(n, 'click', t[5])), (_ = !0));
		},
		p(t, [e]) {
			const n = {};
			2 & e && (n.image = t[1].imgurl),
				2 & e && (n.altTag = t[1].name),
				2 & e && (n.attr = t[1].description),
				2 & e && (n.slideNo = t[1].id + 1),
				h.$set(n);
			const a = {};
			if ((1 & e && (a.caption = Q[t[0]].description), j.$set(a), 17 & e)) {
				let n;
				for (M = Q, n = 0; n < M.length; n += 1) {
					const a = pt(t, M, n);
					H[n]
						? (H[n].p(a, e), k(H[n], 1))
						: ((H[n] = vt(a)), H[n].c(), k(H[n], 1), H[n].m(T, null));
				}
				for (P(), n = M.length; n < H.length; n += 1) U(n);
				S();
			}
		},
		i(t) {
			if (!B) {
				k(h.$$.fragment, t), k(j.$$.fragment, t);
				for (let t = 0; t < M.length; t += 1) k(H[t]);
				N(() => {
					q && q.end(1), L || (L = V(e, G, { x: -300 })), L.start();
				}),
					(B = !0);
			}
		},
		o(t) {
			w(h.$$.fragment, t), w(j.$$.fragment, t), (H = H.filter(Boolean));
			for (let e = 0; e < H.length; e += 1) w(H[e]);
			L && L.invalidate(), (q = C(e, R, {})), (B = !1);
		},
		d(t) {
			t && c(e), I(h), I(j), y(H, t), t && q && q.end(), (_ = !1), A();
		}
	};
}
function bt(t, e, n) {
	let a,
		{ imageShowingIndex: i = 0 } = e;
	const s = (t) => n(0, (i = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && n(0, (i = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(i), 1 & t.$$.dirty && n(1, (a = Q[i]));
		}),
		[
			i,
			a,
			() => {
				n(0, i === Q.length - 1 ? (i = 0) : (i += 1));
			},
			() => {
				n(0, 0 === i ? (i = Q.length - 1) : (i -= 1));
			},
			s,
			function (e) {
				j(t, e);
			},
			(t) => s(t)
		]
	);
}
class kt extends t {
	constructor(t) {
		super(), e(this, t, bt, xt, n, { imageShowingIndex: 0 });
	}
}
function wt(t, e, n) {
	const a = t.slice();
	return (a[1] = e[n].id), (a[2] = e[n].imgurl), (a[3] = e[n].name), a;
}
function It(t) {
	let e, n, i, s;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = r(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			m(e, 'id', t[1]),
				e.src !== (n = t[2]) && m(e, 'src', n),
				m(e, 'alt', t[3]),
				m(e, 'class', 'svelte-1br8slj');
		},
		m(n, a) {
			d(n, e, a), i || ((s = D(e, 'click', t[0])), (i = !0));
		},
		p: p,
		d(t) {
			t && c(e), (i = !1), s();
		}
	};
}
function Dt(t) {
	let e,
		n = Q,
		i = [];
	for (let a = 0; a < n.length; a += 1) i[a] = It(wt(t, n, a));
	return {
		c() {
			e = a('div');
			for (let t = 0; t < i.length; t += 1) i[t].c();
			this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0 });
			var n = l(e);
			for (let e = 0; e < i.length; e += 1) i[e].l(n);
			n.forEach(c), this.h();
		},
		h() {
			m(e, 'class', 'DemoGallery svelte-1br8slj');
		},
		m(t, n) {
			d(t, e, n);
			for (let a = 0; a < i.length; a += 1) i[a].m(e, null);
		},
		p(t, [a]) {
			if (0 & a) {
				let s;
				for (n = Q, s = 0; s < n.length; s += 1) {
					const r = wt(t, n, s);
					i[s] ? i[s].p(r, a) : ((i[s] = It(r)), i[s].c(), i[s].m(e, null));
				}
				for (; s < i.length; s += 1) i[s].d(1);
				i.length = n.length;
			}
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), y(i, t);
		}
	};
}
function jt(t) {
	return [
		function (e) {
			j(t, e);
		}
	];
}
class Et extends t {
	constructor(t) {
		super(), e(this, t, jt, Dt, n, {});
	}
}
function Tt(t) {
	let e, n;
	return (
		(e = new Et({})),
		e.$on('click', t[2]),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			p: p,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Pt(t) {
	let e, n;
	return (
		(e = new kt({ props: { imageShowingIndex: t[1] } })),
		e.$on('click', t[3]),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				2 & n && (a.imageShowingIndex = t[1]), e.$set(a);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function St(t) {
	let e, n, s, g, $, f;
	const u = [Pt, Tt],
		h = [];
	function p(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = p(t)),
		(n = h[e] = u[e](t)),
		($ = new L({ props: { variante: 1, text: 'View gallery' } })),
		$.$on('click', t[4]),
		{
			c() {
				n.c(), (s = i()), (g = a('aside')), v($.$$.fragment), this.h();
			},
			l(t) {
				n.l(t), (s = o(t)), (g = r(t, 'ASIDE', { class: !0 }));
				var e = l(g);
				x($.$$.fragment, e), e.forEach(c), this.h();
			},
			h() {
				m(g, 'class', 'svelte-ffon02');
			},
			m(t, n) {
				h[e].m(t, n), d(t, s, n), d(t, g, n), b($, g, null), (f = !0);
			},
			p(t, [a]) {
				let i = e;
				(e = p(t)),
					e === i
						? h[e].p(t, a)
						: (P(),
						  w(h[i], 1, 1, () => {
								h[i] = null;
						  }),
						  S(),
						  (n = h[e]),
						  n ? n.p(t, a) : ((n = h[e] = u[e](t)), n.c()),
						  k(n, 1),
						  n.m(s.parentNode, s));
			},
			i(t) {
				f || (k(n), k($.$$.fragment, t), (f = !0));
			},
			o(t) {
				w(n), w($.$$.fragment, t), (f = !1);
			},
			d(t) {
				h[e].d(t), t && c(s), t && c(g), I($);
			}
		}
	);
}
function yt(t, e, n) {
	let a = !1,
		i = 0;
	return [
		a,
		i,
		(t) => {
			n(1, (i = Number(t.target.id))), n(0, (a = !0));
		},
		() => n(0, (a = !1)),
		() => n(0, (a = !0))
	];
}
class Nt extends t {
	constructor(t) {
		super(), e(this, t, yt, St, n, {});
	}
}
function Vt(t) {
	let e, n;
	return (
		(e = new q({
			props: { title: B[1].title, subtitle: B[1].subtitle, text: B[1].text, img: B[1].img }
		})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			p: p,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Ct(t) {
	let e, n;
	return (
		(e = new lt({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Lt(t) {
	let e, n;
	return (
		(e = new Nt({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function qt(t) {
	let e, n;
	return (
		(e = new K({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				b(e, t, a), (n = !0);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Bt(t) {
	let e, n, a, s, r, l, g, m;
	return (
		(e = new _({
			props: { id: 'cover', variante: 3, $$slots: { default: [Vt] }, $$scope: { ctx: t } }
		})),
		(a = new _({
			props: { id: 'slidegallery', variante: 0, $$slots: { default: [Ct] }, $$scope: { ctx: t } }
		})),
		(r = new _({
			props: { id: 'lightboxgallery', variante: 3, $$slots: { default: [Lt] }, $$scope: { ctx: t } }
		})),
		(g = new _({
			props: { id: 'flipcard', variante: 2, $$slots: { default: [qt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				v(e.$$.fragment),
					(n = i()),
					v(a.$$.fragment),
					(s = i()),
					v(r.$$.fragment),
					(l = i()),
					v(g.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t),
					(n = o(t)),
					x(a.$$.fragment, t),
					(s = o(t)),
					x(r.$$.fragment, t),
					(l = o(t)),
					x(g.$$.fragment, t);
			},
			m(t, i) {
				b(e, t, i),
					d(t, n, i),
					b(a, t, i),
					d(t, s, i),
					b(r, t, i),
					d(t, l, i),
					b(g, t, i),
					(m = !0);
			},
			p(t, [n]) {
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: t }), e.$set(i);
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), a.$set(s);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: t }), r.$set(l);
				const c = {};
				1 & n && (c.$$scope = { dirty: n, ctx: t }), g.$set(c);
			},
			i(t) {
				m ||
					(k(e.$$.fragment, t),
					k(a.$$.fragment, t),
					k(r.$$.fragment, t),
					k(g.$$.fragment, t),
					(m = !0));
			},
			o(t) {
				w(e.$$.fragment, t),
					w(a.$$.fragment, t),
					w(r.$$.fragment, t),
					w(g.$$.fragment, t),
					(m = !1);
			},
			d(t) {
				I(e, t), t && c(n), I(a, t), t && c(s), I(r, t), t && c(l), I(g, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Bt, n, {});
	}
}
