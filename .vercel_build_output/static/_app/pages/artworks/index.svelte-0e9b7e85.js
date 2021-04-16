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
	b as m,
	o as g,
	P as $,
	G as f,
	f as d,
	g as u,
	h,
	n as p,
	p as v,
	q as x,
	r as k,
	w,
	x as b,
	y as I,
	H as D,
	F as E,
	K as T,
	Y as P,
	C as S,
	D as y,
	J as N,
	Q as V,
	Z as j,
	_ as C
} from '../../chunks/index-d91e1ed8.js';
import { B as z, C as L, c as B } from '../../chunks/Cover-15f98305.js';
import { a as G, f as R } from '../../chunks/index-65311448.js';
import { S as _ } from '../../chunks/Section-f5afcac2.js';
import '../../chunks/index-78b22dae.js';
const A = [
	{ word: 'Velociraptor', image: '/img/velociraptor.jpg' },
	{ word: 'Raptor Delta', image: '/img/raptordelta.jpeg' },
	{ word: 'vesica piscis', image: '/img/bg3.jpg' },
	{ word: 'vesica piscis', image: '/img/bg4.jpg' }
];
function M(t) {
	let e, n, v, x, k, w;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				(v = i()),
				(x = a('div')),
				(k = a('h2')),
				(w = s(t[0])),
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
			k = r(s, 'H2', {});
			var g = l(k);
			(w = m(g, t[0])), g.forEach(c), s.forEach(c), this.h();
		},
		h() {
			g(n, 'class', 'image svelte-3n219r'),
				$(n, 'background-image', 'url(' + t[1] + ')'),
				g(e, 'class', 'flip-box-front svelte-3n219r'),
				g(x, 'class', 'flip-box-back svelte-3n219r'),
				f(x, 'NoRebelesTxt', t[2]);
		},
		m(t, a) {
			d(t, e, a), u(e, n), d(t, v, a), d(t, x, a), u(x, k), u(k, w);
		},
		p(t, [e]) {
			2 & e && $(n, 'background-image', 'url(' + t[1] + ')'),
				1 & e && h(w, t[0]),
				4 & e && f(x, 'NoRebelesTxt', t[2]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), t && c(v), t && c(x);
		}
	};
}
function q(t, e, n) {
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
class H extends t {
	constructor(t) {
		super(), e(this, t, q, M, n, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function U(t) {
	let e, n, s, m, $, h, p, D, E, T, P;
	return (
		(s = new H({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(h = new z({ props: { variante: 4, text: '↜' } })),
		h.$on('click', t[4]),
		(D = new z({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		D.$on('click', t[3]),
		(T = new z({ props: { variante: 4, text: '⤳' } })),
		T.$on('click', t[5]),
		{
			c() {
				(e = a('div')),
					(n = a('div')),
					v(s.$$.fragment),
					(m = i()),
					($ = a('div')),
					v(h.$$.fragment),
					(p = i()),
					v(D.$$.fragment),
					(E = i()),
					v(T.$$.fragment),
					this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var a = l(e);
				n = r(a, 'DIV', { class: !0 });
				var i = l(n);
				x(s.$$.fragment, i), i.forEach(c), (m = o(a)), ($ = r(a, 'DIV', { class: !0 }));
				var g = l($);
				x(h.$$.fragment, g),
					(p = o(g)),
					x(D.$$.fragment, g),
					(E = o(g)),
					x(T.$$.fragment, g),
					g.forEach(c),
					a.forEach(c),
					this.h();
			},
			h() {
				g(n, 'class', 'flip-box-inner svelte-1l2slni'),
					f(n, 'flip-it', t[0]),
					g($, 'class', 'ButtonControls svelte-1l2slni'),
					g(e, 'class', 'flip-box svelte-1l2slni');
			},
			m(t, a) {
				d(t, e, a),
					u(e, n),
					k(s, n, null),
					u(e, m),
					u(e, $),
					k(h, $, null),
					u($, p),
					k(D, $, null),
					u($, E),
					k(T, $, null),
					(P = !0);
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
				P ||
					(w(s.$$.fragment, t),
					w(h.$$.fragment, t),
					w(D.$$.fragment, t),
					w(T.$$.fragment, t),
					(P = !0));
			},
			o(t) {
				b(s.$$.fragment, t),
					b(h.$$.fragment, t),
					b(D.$$.fragment, t),
					b(T.$$.fragment, t),
					(P = !1);
			},
			d(t) {
				t && c(e), I(s), I(h), I(D), I(T);
			}
		}
	);
}
function F(t, e, n) {
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
class J extends t {
	constructor(t) {
		super(), e(this, t, F, U, n, {});
	}
}
const K = [
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
function Q(t) {
	let e, n, $, f, v, x, k, w;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				($ = s(t[0])),
				(f = s(' / ')),
				(v = s(t[1])),
				(x = i()),
				(k = a('img')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'DIV', { class: !0 });
			var s = l(n);
			($ = m(s, t[0])),
				(f = m(s, ' / ')),
				(v = m(s, t[1])),
				s.forEach(c),
				(x = o(i)),
				(k = r(i, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				i.forEach(c),
				this.h();
		},
		h() {
			g(n, 'class', 'numbertext svelte-1ti22lu'),
				k.src !== (w = t[2]) && g(k, 'src', w),
				g(k, 'alt', t[3]),
				g(k, 'title', t[4]),
				g(k, 'class', 'svelte-1ti22lu'),
				g(e, 'class', 'mySlides svelte-1ti22lu');
		},
		m(t, a) {
			d(t, e, a), u(e, n), u(n, $), u(n, f), u(n, v), u(e, x), u(e, k);
		},
		p(t, [e]) {
			1 & e && h($, t[0]),
				2 & e && h(v, t[1]),
				4 & e && k.src !== (w = t[2]) && g(k, 'src', w),
				8 & e && g(k, 'alt', t[3]),
				16 & e && g(k, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e);
		}
	};
}
function Y(t, e, n) {
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
class Z extends t {
	constructor(t) {
		super(), e(this, t, Y, Q, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function O(t) {
	let e, n, i, s, o, m;
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
			g(n, 'class', 'sample cursor svelte-1w2chfv'),
				g(n, 'id', t[3]),
				n.src !== (i = t[0]) && g(n, 'src', i),
				g(n, 'alt', t[1]),
				g(n, 'title', (s = 'Image from ' + t[2])),
				f(n, 'active', t[4]),
				g(e, 'class', 'thumbnail-cont svelte-1w2chfv');
		},
		m(a, i) {
			d(a, e, i), u(e, n), o || ((m = D(n, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && g(n, 'id', t[3]),
				1 & e && n.src !== (i = t[0]) && g(n, 'src', i),
				2 & e && g(n, 'alt', t[1]),
				4 & e && s !== (s = 'Image from ' + t[2]) && g(n, 'title', s),
				16 & e && f(n, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (o = !1), m();
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
				E(t, e);
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
	let e, n, $, f, v, x, k, w, b, I, E;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = s('❮')),
				(f = i()),
				(v = a('p')),
				(x = s(t[0])),
				(k = i()),
				(w = a('a')),
				(b = s('❯')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'A', { href: !0, class: !0 });
			var s = l(n);
			($ = m(s, '❮')), s.forEach(c), (f = o(i)), (v = r(i, 'P', { id: !0, class: !0 }));
			var g = l(v);
			(x = m(g, t[0])), g.forEach(c), (k = o(i)), (w = r(i, 'A', { href: !0, class: !0 }));
			var d = l(w);
			(b = m(d, '❯')), d.forEach(c), i.forEach(c), this.h();
		},
		h() {
			g(n, 'href', '#arrowL'),
				g(n, 'class', 'arrow prev svelte-1mnxz2c'),
				g(v, 'id', 'caption'),
				g(v, 'class', 'svelte-1mnxz2c'),
				g(w, 'href', '#arrowR'),
				g(w, 'class', 'arrow next svelte-1mnxz2c'),
				g(e, 'class', 'caption-container svelte-1mnxz2c');
		},
		m(a, i) {
			d(a, e, i),
				u(e, n),
				u(n, $),
				u(e, f),
				u(e, v),
				u(v, x),
				u(e, k),
				u(e, w),
				u(w, b),
				I || ((E = [D(n, 'click', t[2]), D(w, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(x, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), T(E);
		}
	};
}
function et(t, e, n) {
	let { caption: a } = e;
	const i = P();
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
				k(e, t, a), (n = !0);
			},
			p(n, a) {
				t = n;
				const i = {};
				1 & a && (i.selected = t[0] === t[6]), e.$set(i);
			},
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function st(t) {
	let e, n, s, m, $, f, u;
	(n = new Z({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: K.length
		}
	})),
		(m = new nt({ props: { caption: K[t[0]].name } })),
		m.$on('prevClick', t[3]),
		m.$on('nextClick', t[2]);
	let h = K,
		p = [];
	for (let a = 0; a < h.length; a += 1) p[a] = it(at(t, h, a));
	const D = (t) =>
		b(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(e = a('div')), v(n.$$.fragment), (s = i()), v(m.$$.fragment), ($ = i()), (f = a('div'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0 });
			var a = l(e);
			x(n.$$.fragment, a),
				a.forEach(c),
				(s = o(t)),
				x(m.$$.fragment, t),
				($ = o(t)),
				(f = r(t, 'DIV', { class: !0 }));
			var i = l(f);
			for (let e = 0; e < p.length; e += 1) p[e].l(i);
			i.forEach(c), this.h();
		},
		h() {
			g(e, 'class', 'container svelte-1qcybd5'), g(f, 'class', 'thumbnails-row svelte-1qcybd5');
		},
		m(t, a) {
			d(t, e, a), k(n, e, null), d(t, s, a), k(m, t, a), d(t, $, a), d(t, f, a);
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
			if ((1 & e && (i.caption = K[t[0]].name), m.$set(i), 17 & e)) {
				let n;
				for (h = K, n = 0; n < h.length; n += 1) {
					const a = at(t, h, n);
					p[n]
						? (p[n].p(a, e), w(p[n], 1))
						: ((p[n] = it(a)), p[n].c(), w(p[n], 1), p[n].m(f, null));
				}
				for (S(), n = h.length; n < p.length; n += 1) D(n);
				y();
			}
		},
		i(t) {
			if (!u) {
				w(n.$$.fragment, t), w(m.$$.fragment, t);
				for (let t = 0; t < h.length; t += 1) w(p[t]);
				u = !0;
			}
		},
		o(t) {
			b(n.$$.fragment, t), b(m.$$.fragment, t), (p = p.filter(Boolean));
			for (let e = 0; e < p.length; e += 1) b(p[e]);
			u = !1;
		},
		d(t) {
			t && c(e), I(n), t && c(s), I(m, t), t && c($), t && c(f), N(p, t);
		}
	};
}
function rt(t, e, n) {
	let a,
		i = 0;
	const s = (t) => n(0, (i = t));
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(i), 1 & t.$$.dirty && n(1, (a = K[i]));
		}),
		[
			i,
			a,
			() => {
				n(0, i === K.length - 1 ? (i = 0) : (i += 1));
			},
			() => {
				n(0, 0 === i ? (i = K.length - 1) : (i -= 1));
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
	let e, n, $, f, v, x, k, w;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				($ = s(t[0])),
				(f = s(' / ')),
				(v = s(t[1])),
				(x = i()),
				(k = a('img')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'DIV', { class: !0 });
			var s = l(n);
			($ = m(s, t[0])),
				(f = m(s, ' / ')),
				(v = m(s, t[1])),
				s.forEach(c),
				(x = o(i)),
				(k = r(i, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				i.forEach(c),
				this.h();
		},
		h() {
			g(n, 'class', 'numbertext svelte-1i5k80d'),
				k.src !== (w = t[2]) && g(k, 'src', w),
				g(k, 'alt', t[3]),
				g(k, 'title', t[4]),
				g(k, 'class', 'svelte-1i5k80d'),
				g(e, 'class', 'Slide svelte-1i5k80d');
		},
		m(t, a) {
			d(t, e, a), u(e, n), u(n, $), u(n, f), u(n, v), u(e, x), u(e, k);
		},
		p(t, [e]) {
			1 & e && h($, t[0]),
				2 & e && h(v, t[1]),
				4 & e && k.src !== (w = t[2]) && g(k, 'src', w),
				8 & e && g(k, 'alt', t[3]),
				16 & e && g(k, 'title', t[4]);
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
class mt extends t {
	constructor(t) {
		super(),
			e(this, t, ot, ct, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function gt(t) {
	let e, n, i, s;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = r(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			g(e, 'class', 'sample cursor svelte-17c75jl'),
				g(e, 'id', t[3]),
				e.src !== (n = t[0]) && g(e, 'src', n),
				g(e, 'alt', t[1]),
				g(e, 'title', t[2]),
				f(e, 'active', t[4]);
		},
		m(n, a) {
			d(n, e, a), i || ((s = D(e, 'click', t[5])), (i = !0));
		},
		p(t, [a]) {
			8 & a && g(e, 'id', t[3]),
				1 & a && e.src !== (n = t[0]) && g(e, 'src', n),
				2 & a && g(e, 'alt', t[1]),
				4 & a && g(e, 'title', t[2]),
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
				E(t, e);
			}
		]
	);
}
class ft extends t {
	constructor(t) {
		super(), e(this, t, $t, gt, n, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function dt(t) {
	let e, n, $, f, v, x, k, w, b, I, E;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = s('❮')),
				(f = i()),
				(v = a('p')),
				(x = s(t[0])),
				(k = i()),
				(w = a('a')),
				(b = s('❯')),
				this.h();
		},
		l(a) {
			e = r(a, 'DIV', { class: !0 });
			var i = l(e);
			n = r(i, 'A', { href: !0, class: !0 });
			var s = l(n);
			($ = m(s, '❮')), s.forEach(c), (f = o(i)), (v = r(i, 'P', { id: !0, class: !0 }));
			var g = l(v);
			(x = m(g, t[0])), g.forEach(c), (k = o(i)), (w = r(i, 'A', { href: !0, class: !0 }));
			var d = l(w);
			(b = m(d, '❯')), d.forEach(c), i.forEach(c), this.h();
		},
		h() {
			g(n, 'href', '#arrowL'),
				g(n, 'class', 'arrow prev svelte-f8zwc8'),
				g(v, 'id', 'caption'),
				g(v, 'class', 'svelte-f8zwc8'),
				g(w, 'href', '#arrowR'),
				g(w, 'class', 'arrow next svelte-f8zwc8'),
				g(e, 'class', 'caption-container svelte-f8zwc8');
		},
		m(a, i) {
			d(a, e, i),
				u(e, n),
				u(n, $),
				u(e, f),
				u(e, v),
				u(v, x),
				u(e, k),
				u(e, w),
				u(w, b),
				I || ((E = [D(n, 'click', t[2]), D(w, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(x, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), T(E);
		}
	};
}
function ut(t, e, n) {
	let { caption: a } = e;
	const i = P();
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
				k(e, t, a), (n = !0);
			},
			p(n, a) {
				t = n;
				const i = {};
				1 & a && (i.selected = Number(t[0]) === t[7]), e.$set(i);
			},
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function xt(t) {
	let e, n, $, f, h, p, E, T, P, z, L, B, _, A;
	(h = new mt({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: K.length
		}
	})),
		(E = new ht({ props: { caption: K[t[0]].description } })),
		E.$on('prevClick', t[3]),
		E.$on('nextClick', t[2]);
	let M = K,
		q = [];
	for (let a = 0; a < M.length; a += 1) q[a] = vt(pt(t, M, a));
	const H = (t) =>
		b(q[t], 1, 1, () => {
			q[t] = null;
		});
	return {
		c() {
			(e = a('div')),
				(n = a('span')),
				($ = s('✗')),
				(f = i()),
				v(h.$$.fragment),
				(p = i()),
				v(E.$$.fragment),
				(T = i()),
				(P = a('div'));
			for (let t = 0; t < q.length; t += 1) q[t].c();
			this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0 });
			var a = l(e);
			n = r(a, 'SPAN', { class: !0 });
			var i = l(n);
			($ = m(i, '✗')),
				i.forEach(c),
				(f = o(a)),
				x(h.$$.fragment, a),
				(p = o(a)),
				x(E.$$.fragment, a),
				(T = o(a)),
				(P = r(a, 'DIV', { class: !0 }));
			var s = l(P);
			for (let e = 0; e < q.length; e += 1) q[e].l(s);
			s.forEach(c), a.forEach(c), this.h();
		},
		h() {
			g(n, 'class', 'close cursor svelte-mo93zs'),
				g(P, 'class', 'Thumbnails svelte-mo93zs'),
				g(e, 'class', 'lightbox svelte-mo93zs');
		},
		m(a, i) {
			d(a, e, i),
				u(e, n),
				u(n, $),
				u(e, f),
				k(h, e, null),
				u(e, p),
				k(E, e, null),
				u(e, T),
				u(e, P);
			for (let t = 0; t < q.length; t += 1) q[t].m(P, null);
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
			if ((1 & e && (a.caption = K[t[0]].description), E.$set(a), 17 & e)) {
				let n;
				for (M = K, n = 0; n < M.length; n += 1) {
					const a = pt(t, M, n);
					q[n]
						? (q[n].p(a, e), w(q[n], 1))
						: ((q[n] = vt(a)), q[n].c(), w(q[n], 1), q[n].m(P, null));
				}
				for (S(), n = M.length; n < q.length; n += 1) H(n);
				y();
			}
		},
		i(t) {
			if (!B) {
				w(h.$$.fragment, t), w(E.$$.fragment, t);
				for (let t = 0; t < M.length; t += 1) w(q[t]);
				V(() => {
					L && L.end(1), z || (z = j(e, G, { x: -300 })), z.start();
				}),
					(B = !0);
			}
		},
		o(t) {
			b(h.$$.fragment, t), b(E.$$.fragment, t), (q = q.filter(Boolean));
			for (let e = 0; e < q.length; e += 1) b(q[e]);
			z && z.invalidate(), (L = C(e, R, {})), (B = !1);
		},
		d(t) {
			t && c(e), I(h), I(E), N(q, t), t && L && L.end(), (_ = !1), A();
		}
	};
}
function kt(t, e, n) {
	let a,
		{ imageShowingIndex: i = 0 } = e;
	const s = (t) => n(0, (i = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && n(0, (i = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(i), 1 & t.$$.dirty && n(1, (a = K[i]));
		}),
		[
			i,
			a,
			() => {
				n(0, i === K.length - 1 ? (i = 0) : (i += 1));
			},
			() => {
				n(0, 0 === i ? (i = K.length - 1) : (i -= 1));
			},
			s,
			function (e) {
				E(t, e);
			},
			(t) => s(t)
		]
	);
}
class wt extends t {
	constructor(t) {
		super(), e(this, t, kt, xt, n, { imageShowingIndex: 0 });
	}
}
function bt(t, e, n) {
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
			g(e, 'id', t[1]),
				e.src !== (n = t[2]) && g(e, 'src', n),
				g(e, 'alt', t[3]),
				g(e, 'class', 'svelte-10x30rs');
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
		n = K,
		i = [];
	for (let a = 0; a < n.length; a += 1) i[a] = It(bt(t, n, a));
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
			g(e, 'class', 'DemoGallery svelte-10x30rs');
		},
		m(t, n) {
			d(t, e, n);
			for (let a = 0; a < i.length; a += 1) i[a].m(e, null);
		},
		p(t, [a]) {
			if (0 & a) {
				let s;
				for (n = K, s = 0; s < n.length; s += 1) {
					const r = bt(t, n, s);
					i[s] ? i[s].p(r, a) : ((i[s] = It(r)), i[s].c(), i[s].m(e, null));
				}
				for (; s < i.length; s += 1) i[s].d(1);
				i.length = n.length;
			}
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), N(i, t);
		}
	};
}
function Et(t) {
	return [
		function (e) {
			E(t, e);
		}
	];
}
class Tt extends t {
	constructor(t) {
		super(), e(this, t, Et, Dt, n, {});
	}
}
function Pt(t) {
	let e, n;
	return (
		(e = new Tt({})),
		e.$on('click', t[2]),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				k(e, t, a), (n = !0);
			},
			p: p,
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function St(t) {
	let e, n;
	return (
		(e = new wt({ props: { imageShowingIndex: t[1] } })),
		e.$on('click', t[3]),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				k(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				2 & n && (a.imageShowingIndex = t[1]), e.$set(a);
			},
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function yt(t) {
	let e, n, s, m, $, f;
	const u = [St, Pt],
		h = [];
	function p(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = p(t)),
		(n = h[e] = u[e](t)),
		($ = new z({ props: { variante: 2, text: 'View gallery' } })),
		$.$on('click', t[4]),
		{
			c() {
				n.c(), (s = i()), (m = a('aside')), v($.$$.fragment), this.h();
			},
			l(t) {
				n.l(t), (s = o(t)), (m = r(t, 'ASIDE', { class: !0 }));
				var e = l(m);
				x($.$$.fragment, e), e.forEach(c), this.h();
			},
			h() {
				g(m, 'class', 'svelte-1fxa0g5');
			},
			m(t, n) {
				h[e].m(t, n), d(t, s, n), d(t, m, n), k($, m, null), (f = !0);
			},
			p(t, [a]) {
				let i = e;
				(e = p(t)),
					e === i
						? h[e].p(t, a)
						: (S(),
						  b(h[i], 1, 1, () => {
								h[i] = null;
						  }),
						  y(),
						  (n = h[e]),
						  n ? n.p(t, a) : ((n = h[e] = u[e](t)), n.c()),
						  w(n, 1),
						  n.m(s.parentNode, s));
			},
			i(t) {
				f || (w(n), w($.$$.fragment, t), (f = !0));
			},
			o(t) {
				b(n), b($.$$.fragment, t), (f = !1);
			},
			d(t) {
				h[e].d(t), t && c(s), t && c(m), I($);
			}
		}
	);
}
function Nt(t, e, n) {
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
class Vt extends t {
	constructor(t) {
		super(), e(this, t, Nt, yt, n, {});
	}
}
function jt(t) {
	let e, n;
	return (
		(e = new L({
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
				k(e, t, a), (n = !0);
			},
			p: p,
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
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
				k(e, t, a), (n = !0);
			},
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function zt(t) {
	let e, n;
	return (
		(e = new Vt({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				k(e, t, a), (n = !0);
			},
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
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
		(e = new J({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, a) {
				k(e, t, a), (n = !0);
			},
			i(t) {
				n || (w(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Bt(t) {
	let e, n, a, s, r, l, m, g;
	return (
		(e = new _({
			props: { id: 'cover', variante: 1, $$slots: { default: [jt] }, $$scope: { ctx: t } }
		})),
		(a = new _({
			props: { id: 'slidegallery', variante: 0, $$slots: { default: [Ct] }, $$scope: { ctx: t } }
		})),
		(r = new _({
			props: { id: 'lightboxgallery', variante: 3, $$slots: { default: [zt] }, $$scope: { ctx: t } }
		})),
		(m = new _({
			props: { id: 'flipcard', variante: 2, $$slots: { default: [Lt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				v(e.$$.fragment),
					(n = i()),
					v(a.$$.fragment),
					(s = i()),
					v(r.$$.fragment),
					(l = i()),
					v(m.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t),
					(n = o(t)),
					x(a.$$.fragment, t),
					(s = o(t)),
					x(r.$$.fragment, t),
					(l = o(t)),
					x(m.$$.fragment, t);
			},
			m(t, i) {
				k(e, t, i),
					d(t, n, i),
					k(a, t, i),
					d(t, s, i),
					k(r, t, i),
					d(t, l, i),
					k(m, t, i),
					(g = !0);
			},
			p(t, [n]) {
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: t }), e.$set(i);
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), a.$set(s);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: t }), r.$set(l);
				const c = {};
				1 & n && (c.$$scope = { dirty: n, ctx: t }), m.$set(c);
			},
			i(t) {
				g ||
					(w(e.$$.fragment, t),
					w(a.$$.fragment, t),
					w(r.$$.fragment, t),
					w(m.$$.fragment, t),
					(g = !0));
			},
			o(t) {
				b(e.$$.fragment, t),
					b(a.$$.fragment, t),
					b(r.$$.fragment, t),
					b(m.$$.fragment, t),
					(g = !1);
			},
			d(t) {
				I(e, t), t && c(n), I(a, t), t && c(s), I(r, t), t && c(l), I(m, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Bt, n, {});
	}
}
