import {
	S as t,
	i as e,
	s as n,
	e as a,
	j as r,
	t as i,
	c as s,
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
	F as E,
	K as T,
	Y as y,
	C as P,
	D as S,
	J as N,
	Q as V,
	Z as j,
	_ as C
} from '../../chunks/index-d91e1ed8.js';
import { B as L, C as B, c as G } from '../../chunks/Cover-4d50fe6e.js';
import { a as q, f as R } from '../../chunks/index-65311448.js';
import { S as _ } from '../../chunks/Section-9405c539.js';
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
				(v = r()),
				(x = a('div')),
				(b = a('h2')),
				(k = i(t[0])),
				this.h();
		},
		l(a) {
			e = s(a, 'DIV', { class: !0 });
			var r = l(e);
			(n = s(r, 'DIV', { class: !0, style: !0 })),
				l(n).forEach(c),
				r.forEach(c),
				(v = o(a)),
				(x = s(a, 'DIV', { class: !0 }));
			var i = l(x);
			b = s(i, 'H2', {});
			var m = l(b);
			(k = g(m, t[0])), m.forEach(c), i.forEach(c), this.h();
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
function z(t, e, n) {
	let { back_txt: a } = e,
		{ foto: r } = e,
		{ showCarBack: i } = e;
	return (
		(t.$$set = (t) => {
			'back_txt' in t && n(0, (a = t.back_txt)),
				'foto' in t && n(1, (r = t.foto)),
				'showCarBack' in t && n(2, (i = t.showCarBack));
		}),
		[a, r, i]
	);
}
class H extends t {
	constructor(t) {
		super(), e(this, t, z, M, n, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function U(t) {
	let e, n, i, g, $, h, p, D, E, T, y;
	return (
		(i = new H({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(h = new L({ props: { variante: 4, text: '↜' } })),
		h.$on('click', t[4]),
		(D = new L({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		D.$on('click', t[3]),
		(T = new L({ props: { variante: 4, text: '⤳' } })),
		T.$on('click', t[5]),
		{
			c() {
				(e = a('div')),
					(n = a('div')),
					v(i.$$.fragment),
					(g = r()),
					($ = a('div')),
					v(h.$$.fragment),
					(p = r()),
					v(D.$$.fragment),
					(E = r()),
					v(T.$$.fragment),
					this.h();
			},
			l(t) {
				e = s(t, 'DIV', { class: !0 });
				var a = l(e);
				n = s(a, 'DIV', { class: !0 });
				var r = l(n);
				x(i.$$.fragment, r), r.forEach(c), (g = o(a)), ($ = s(a, 'DIV', { class: !0 }));
				var m = l($);
				x(h.$$.fragment, m),
					(p = o(m)),
					x(D.$$.fragment, m),
					(E = o(m)),
					x(T.$$.fragment, m),
					m.forEach(c),
					a.forEach(c),
					this.h();
			},
			h() {
				m(n, 'class', 'flip-box-inner svelte-lv5a5'),
					f(n, 'flip-it', t[0]),
					m($, 'class', 'ButtonControls svelte-lv5a5'),
					m(e, 'class', 'flip-box svelte-lv5a5');
			},
			m(t, a) {
				d(t, e, a),
					u(e, n),
					b(i, n, null),
					u(e, g),
					u(e, $),
					b(h, $, null),
					u($, p),
					b(D, $, null),
					u($, E),
					b(T, $, null),
					(y = !0);
			},
			p(t, [e]) {
				const a = {};
				1 & e && (a.showCarBack = t[0]),
					2 & e && (a.foto = t[1]),
					4 & e && (a.back_txt = t[2]),
					i.$set(a),
					1 & e && f(n, 'flip-it', t[0]);
				const r = {};
				1 & e && (r.text = t[0] ? '⤿' : '⤾'), D.$set(r);
			},
			i(t) {
				y ||
					(k(i.$$.fragment, t),
					k(h.$$.fragment, t),
					k(D.$$.fragment, t),
					k(T.$$.fragment, t),
					(y = !0));
			},
			o(t) {
				w(i.$$.fragment, t),
					w(h.$$.fragment, t),
					w(D.$$.fragment, t),
					w(T.$$.fragment, t),
					(y = !1);
			},
			d(t) {
				t && c(e), I(i), I(h), I(D), I(T);
			}
		}
	);
}
function F(t, e, n) {
	let a, r;
	let i = !1,
		s = 0;
	return (
		(t.$$.update = () => {
			64 & t.$$.dirty && n(1, (a = A[s].image)), 64 & t.$$.dirty && n(2, (r = A[s].word));
		}),
		[
			i,
			a,
			r,
			() => n(0, (i = !i)),
			() => {
				n(0, (i = !1)), n(6, 0 === s ? (s = A.length - 1) : (s -= 1));
			},
			() => {
				n(0, (i = !1)), n(6, s === A.length - 1 ? (s = 0) : (s += 1));
			},
			s
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
	let e, n, $, f, v, x, b, k;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				($ = i(t[0])),
				(f = i(' / ')),
				(v = i(t[1])),
				(x = r()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			e = s(a, 'DIV', { class: !0 });
			var r = l(e);
			n = s(r, 'DIV', { class: !0 });
			var i = l(n);
			($ = g(i, t[0])),
				(f = g(i, ' / ')),
				(v = g(i, t[1])),
				i.forEach(c),
				(x = o(r)),
				(b = s(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(c),
				this.h();
		},
		h() {
			m(n, 'class', 'numbertext svelte-cu9x69'),
				b.src !== (k = t[2]) && m(b, 'src', k),
				m(b, 'alt', t[3]),
				m(b, 'title', t[4]),
				m(b, 'class', 'svelte-cu9x69'),
				m(e, 'class', 'mySlides svelte-cu9x69');
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
function Y(t, e, n) {
	let { slideNo: a } = e,
		{ totalSlides: r } = e,
		{ image: i } = e,
		{ altTag: s } = e,
		{ attr: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && n(0, (a = t.slideNo)),
				'totalSlides' in t && n(1, (r = t.totalSlides)),
				'image' in t && n(2, (i = t.image)),
				'altTag' in t && n(3, (s = t.altTag)),
				'attr' in t && n(4, (l = t.attr));
		}),
		[a, r, i, s, l]
	);
}
class Z extends t {
	constructor(t) {
		super(), e(this, t, Y, Q, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function O(t) {
	let e, n, r, i, o, g;
	return {
		c() {
			(e = a('div')), (n = a('img')), this.h();
		},
		l(t) {
			e = s(t, 'DIV', { class: !0 });
			var a = l(e);
			(n = s(a, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), a.forEach(c), this.h();
		},
		h() {
			m(n, 'class', 'sample cursor svelte-pemw9q'),
				m(n, 'id', t[3]),
				n.src !== (r = t[0]) && m(n, 'src', r),
				m(n, 'alt', t[1]),
				m(n, 'title', (i = 'Image from ' + t[2])),
				f(n, 'active', t[4]),
				m(e, 'class', 'thumbnail-cont svelte-pemw9q');
		},
		m(a, r) {
			d(a, e, r), u(e, n), o || ((g = D(n, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && m(n, 'id', t[3]),
				1 & e && n.src !== (r = t[0]) && m(n, 'src', r),
				2 & e && m(n, 'alt', t[1]),
				4 & e && i !== (i = 'Image from ' + t[2]) && m(n, 'title', i),
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
		{ altTag: r } = e,
		{ titleLink: i } = e,
		{ id: s } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && n(0, (a = t.thumbImg)),
				'altTag' in t && n(1, (r = t.altTag)),
				'titleLink' in t && n(2, (i = t.titleLink)),
				'id' in t && n(3, (s = t.id)),
				'selected' in t && n(4, (l = t.selected));
		}),
		[
			a,
			r,
			i,
			s,
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
	let e, n, $, f, v, x, b, k, w, I, E;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = i('❮')),
				(f = r()),
				(v = a('p')),
				(x = i(t[0])),
				(b = r()),
				(k = a('a')),
				(w = i('❯')),
				this.h();
		},
		l(a) {
			e = s(a, 'DIV', { class: !0 });
			var r = l(e);
			n = s(r, 'A', { href: !0, class: !0 });
			var i = l(n);
			($ = g(i, '❮')), i.forEach(c), (f = o(r)), (v = s(r, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(x = g(m, t[0])), m.forEach(c), (b = o(r)), (k = s(r, 'A', { href: !0, class: !0 }));
			var d = l(k);
			(w = g(d, '❯')), d.forEach(c), r.forEach(c), this.h();
		},
		h() {
			m(n, 'href', '#arrowL'),
				m(n, 'class', 'arrow prev svelte-zy0aur'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-zy0aur'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-zy0aur'),
				m(e, 'class', 'caption-container svelte-zy0aur');
		},
		m(a, r) {
			d(a, e, r),
				u(e, n),
				u(n, $),
				u(e, f),
				u(e, v),
				u(v, x),
				u(e, b),
				u(e, k),
				u(k, w),
				I || ((E = [D(n, 'click', t[2]), D(k, 'click', t[3])]), (I = !0));
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
	const r = y();
	return (
		(t.$$set = (t) => {
			'caption' in t && n(0, (a = t.caption));
		}),
		[a, r, () => r('prevClick'), () => r('nextClick')]
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
function rt(t) {
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
				const r = {};
				1 & a && (r.selected = t[0] === t[6]), e.$set(r);
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
function it(t) {
	let e, n, i, g, $, f, u;
	(n = new Z({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: K.length
		}
	})),
		(g = new nt({ props: { caption: K[t[0]].name } })),
		g.$on('prevClick', t[3]),
		g.$on('nextClick', t[2]);
	let h = K,
		p = [];
	for (let a = 0; a < h.length; a += 1) p[a] = rt(at(t, h, a));
	const D = (t) =>
		w(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(e = a('div')), v(n.$$.fragment), (i = r()), v(g.$$.fragment), ($ = r()), (f = a('div'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			this.h();
		},
		l(t) {
			e = s(t, 'DIV', { class: !0 });
			var a = l(e);
			x(n.$$.fragment, a),
				a.forEach(c),
				(i = o(t)),
				x(g.$$.fragment, t),
				($ = o(t)),
				(f = s(t, 'DIV', { class: !0 }));
			var r = l(f);
			for (let e = 0; e < p.length; e += 1) p[e].l(r);
			r.forEach(c), this.h();
		},
		h() {
			m(e, 'class', 'container svelte-1qcybd5'), m(f, 'class', 'thumbnails-row svelte-1qcybd5');
		},
		m(t, a) {
			d(t, e, a), b(n, e, null), d(t, i, a), b(g, t, a), d(t, $, a), d(t, f, a);
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
			const r = {};
			if ((1 & e && (r.caption = K[t[0]].name), g.$set(r), 17 & e)) {
				let n;
				for (h = K, n = 0; n < h.length; n += 1) {
					const a = at(t, h, n);
					p[n]
						? (p[n].p(a, e), k(p[n], 1))
						: ((p[n] = rt(a)), p[n].c(), k(p[n], 1), p[n].m(f, null));
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
			t && c(e), I(n), t && c(i), I(g, t), t && c($), t && c(f), N(p, t);
		}
	};
}
function st(t, e, n) {
	let a,
		r = 0;
	const i = (t) => n(0, (r = t));
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(r), 1 & t.$$.dirty && n(1, (a = K[r]));
		}),
		[
			r,
			a,
			() => {
				n(0, r === K.length - 1 ? (r = 0) : (r += 1));
			},
			() => {
				n(0, 0 === r ? (r = K.length - 1) : (r -= 1));
			},
			i,
			(t) => i(t)
		]
	);
}
class lt extends t {
	constructor(t) {
		super(), e(this, t, st, it, n, {});
	}
}
function ct(t) {
	let e, n, $, f, v, x, b, k;
	return {
		c() {
			(e = a('div')),
				(n = a('div')),
				($ = i(t[0])),
				(f = i(' / ')),
				(v = i(t[1])),
				(x = r()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			e = s(a, 'DIV', { class: !0 });
			var r = l(e);
			n = s(r, 'DIV', { class: !0 });
			var i = l(n);
			($ = g(i, t[0])),
				(f = g(i, ' / ')),
				(v = g(i, t[1])),
				i.forEach(c),
				(x = o(r)),
				(b = s(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(c),
				this.h();
		},
		h() {
			m(n, 'class', 'numbertext svelte-198enrg'),
				b.src !== (k = t[2]) && m(b, 'src', k),
				m(b, 'alt', t[3]),
				m(b, 'title', t[4]),
				m(b, 'class', 'svelte-198enrg'),
				m(e, 'class', 'Slide svelte-198enrg');
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
		{ totalSlides: r } = e,
		{ image: i } = e,
		{ altTag: s } = e,
		{ description: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && n(0, (a = t.slideNo)),
				'totalSlides' in t && n(1, (r = t.totalSlides)),
				'image' in t && n(2, (i = t.image)),
				'altTag' in t && n(3, (s = t.altTag)),
				'description' in t && n(4, (l = t.description));
		}),
		[a, r, i, s, l]
	);
}
class gt extends t {
	constructor(t) {
		super(),
			e(this, t, ot, ct, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function mt(t) {
	let e, n, r, i;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = s(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			m(e, 'class', 'sample cursor svelte-18ugpgg'),
				m(e, 'id', t[3]),
				e.src !== (n = t[0]) && m(e, 'src', n),
				m(e, 'alt', t[1]),
				m(e, 'title', t[2]),
				f(e, 'active', t[4]);
		},
		m(n, a) {
			d(n, e, a), r || ((i = D(e, 'click', t[5])), (r = !0));
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
			t && c(e), (r = !1), i();
		}
	};
}
function $t(t, e, n) {
	let { thumbImg: a } = e,
		{ altTag: r } = e,
		{ titleLink: i } = e,
		{ id: s } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && n(0, (a = t.thumbImg)),
				'altTag' in t && n(1, (r = t.altTag)),
				'titleLink' in t && n(2, (i = t.titleLink)),
				'id' in t && n(3, (s = t.id)),
				'selected' in t && n(4, (l = t.selected));
		}),
		[
			a,
			r,
			i,
			s,
			l,
			function (e) {
				E(t, e);
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
	let e, n, $, f, v, x, b, k, w, I, E;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = i('❮')),
				(f = r()),
				(v = a('p')),
				(x = i(t[0])),
				(b = r()),
				(k = a('a')),
				(w = i('❯')),
				this.h();
		},
		l(a) {
			e = s(a, 'DIV', { class: !0 });
			var r = l(e);
			n = s(r, 'A', { href: !0, class: !0 });
			var i = l(n);
			($ = g(i, '❮')), i.forEach(c), (f = o(r)), (v = s(r, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(x = g(m, t[0])), m.forEach(c), (b = o(r)), (k = s(r, 'A', { href: !0, class: !0 }));
			var d = l(k);
			(w = g(d, '❯')), d.forEach(c), r.forEach(c), this.h();
		},
		h() {
			m(n, 'href', '#arrowL'),
				m(n, 'class', 'arrow prev svelte-1rbfc4r'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-1rbfc4r'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-1rbfc4r'),
				m(e, 'class', 'caption-container svelte-1rbfc4r');
		},
		m(a, r) {
			d(a, e, r),
				u(e, n),
				u(n, $),
				u(e, f),
				u(e, v),
				u(v, x),
				u(e, b),
				u(e, k),
				u(k, w),
				I || ((E = [D(n, 'click', t[2]), D(k, 'click', t[3])]), (I = !0));
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
	const r = y();
	return (
		(t.$$set = (t) => {
			'caption' in t && n(0, (a = t.caption));
		}),
		[a, r, () => r('prevClick'), () => r('nextClick')]
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
				const r = {};
				1 & a && (r.selected = Number(t[0]) === t[7]), e.$set(r);
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
	let e, n, $, f, h, p, E, T, y, L, B, G, _, A;
	(h = new gt({
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
		z = [];
	for (let a = 0; a < M.length; a += 1) z[a] = vt(pt(t, M, a));
	const H = (t) =>
		w(z[t], 1, 1, () => {
			z[t] = null;
		});
	return {
		c() {
			(e = a('div')),
				(n = a('span')),
				($ = i('✗')),
				(f = r()),
				v(h.$$.fragment),
				(p = r()),
				v(E.$$.fragment),
				(T = r()),
				(y = a('div'));
			for (let t = 0; t < z.length; t += 1) z[t].c();
			this.h();
		},
		l(t) {
			e = s(t, 'DIV', { class: !0 });
			var a = l(e);
			n = s(a, 'SPAN', { class: !0 });
			var r = l(n);
			($ = g(r, '✗')),
				r.forEach(c),
				(f = o(a)),
				x(h.$$.fragment, a),
				(p = o(a)),
				x(E.$$.fragment, a),
				(T = o(a)),
				(y = s(a, 'DIV', { class: !0 }));
			var i = l(y);
			for (let e = 0; e < z.length; e += 1) z[e].l(i);
			i.forEach(c), a.forEach(c), this.h();
		},
		h() {
			m(n, 'class', 'close cursor svelte-6x5ihb'),
				m(y, 'class', 'Thumbnails svelte-6x5ihb'),
				m(e, 'class', 'lightbox svelte-6x5ihb');
		},
		m(a, r) {
			d(a, e, r),
				u(e, n),
				u(n, $),
				u(e, f),
				b(h, e, null),
				u(e, p),
				b(E, e, null),
				u(e, T),
				u(e, y);
			for (let t = 0; t < z.length; t += 1) z[t].m(y, null);
			(G = !0), _ || ((A = D(n, 'click', t[5])), (_ = !0));
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
					z[n]
						? (z[n].p(a, e), k(z[n], 1))
						: ((z[n] = vt(a)), z[n].c(), k(z[n], 1), z[n].m(y, null));
				}
				for (P(), n = M.length; n < z.length; n += 1) H(n);
				S();
			}
		},
		i(t) {
			if (!G) {
				k(h.$$.fragment, t), k(E.$$.fragment, t);
				for (let t = 0; t < M.length; t += 1) k(z[t]);
				V(() => {
					B && B.end(1), L || (L = j(e, q, { x: -300 })), L.start();
				}),
					(G = !0);
			}
		},
		o(t) {
			w(h.$$.fragment, t), w(E.$$.fragment, t), (z = z.filter(Boolean));
			for (let e = 0; e < z.length; e += 1) w(z[e]);
			L && L.invalidate(), (B = C(e, R, {})), (G = !1);
		},
		d(t) {
			t && c(e), I(h), I(E), N(z, t), t && B && B.end(), (_ = !1), A();
		}
	};
}
function bt(t, e, n) {
	let a,
		{ imageShowingIndex: r = 0 } = e;
	const i = (t) => n(0, (r = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && n(0, (r = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(r), 1 & t.$$.dirty && n(1, (a = K[r]));
		}),
		[
			r,
			a,
			() => {
				n(0, r === K.length - 1 ? (r = 0) : (r += 1));
			},
			() => {
				n(0, 0 === r ? (r = K.length - 1) : (r -= 1));
			},
			i,
			function (e) {
				E(t, e);
			},
			(t) => i(t)
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
	let e, n, r, i;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = s(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			m(e, 'id', t[1]),
				e.src !== (n = t[2]) && m(e, 'src', n),
				m(e, 'alt', t[3]),
				m(e, 'class', 'svelte-1p1n4qb');
		},
		m(n, a) {
			d(n, e, a), r || ((i = D(e, 'click', t[0])), (r = !0));
		},
		p: p,
		d(t) {
			t && c(e), (r = !1), i();
		}
	};
}
function Dt(t) {
	let e,
		n = K,
		r = [];
	for (let a = 0; a < n.length; a += 1) r[a] = It(wt(t, n, a));
	return {
		c() {
			e = a('div');
			for (let t = 0; t < r.length; t += 1) r[t].c();
			this.h();
		},
		l(t) {
			e = s(t, 'DIV', { class: !0 });
			var n = l(e);
			for (let e = 0; e < r.length; e += 1) r[e].l(n);
			n.forEach(c), this.h();
		},
		h() {
			m(e, 'class', 'DemoGallery svelte-1p1n4qb');
		},
		m(t, n) {
			d(t, e, n);
			for (let a = 0; a < r.length; a += 1) r[a].m(e, null);
		},
		p(t, [a]) {
			if (0 & a) {
				let i;
				for (n = K, i = 0; i < n.length; i += 1) {
					const s = wt(t, n, i);
					r[i] ? r[i].p(s, a) : ((r[i] = It(s)), r[i].c(), r[i].m(e, null));
				}
				for (; i < r.length; i += 1) r[i].d(1);
				r.length = n.length;
			}
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), N(r, t);
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
function yt(t) {
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
	let e, n, i, g, $, f;
	const u = [Pt, yt],
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
				n.c(), (i = r()), (g = a('aside')), v($.$$.fragment), this.h();
			},
			l(t) {
				n.l(t), (i = o(t)), (g = s(t, 'ASIDE', { class: !0 }));
				var e = l(g);
				x($.$$.fragment, e), e.forEach(c), this.h();
			},
			h() {
				m(g, 'class', 'svelte-1j4t90k');
			},
			m(t, n) {
				h[e].m(t, n), d(t, i, n), d(t, g, n), b($, g, null), (f = !0);
			},
			p(t, [a]) {
				let r = e;
				(e = p(t)),
					e === r
						? h[e].p(t, a)
						: (P(),
						  w(h[r], 1, 1, () => {
								h[r] = null;
						  }),
						  S(),
						  (n = h[e]),
						  n ? n.p(t, a) : ((n = h[e] = u[e](t)), n.c()),
						  k(n, 1),
						  n.m(i.parentNode, i));
			},
			i(t) {
				f || (k(n), k($.$$.fragment, t), (f = !0));
			},
			o(t) {
				w(n), w($.$$.fragment, t), (f = !1);
			},
			d(t) {
				h[e].d(t), t && c(i), t && c(g), I($);
			}
		}
	);
}
function Nt(t, e, n) {
	let a = !1,
		r = 0;
	return [
		a,
		r,
		(t) => {
			n(1, (r = Number(t.target.id))), n(0, (a = !0));
		},
		() => n(0, (a = !1)),
		() => n(0, (a = !0))
	];
}
class Vt extends t {
	constructor(t) {
		super(), e(this, t, Nt, St, n, {});
	}
}
function jt(t) {
	let e, n;
	return (
		(e = new B({
			props: { title: G[1].title, subtitle: G[1].subtitle, text: G[1].text, img: G[1].img }
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
		(e = new Vt({})),
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
function Gt(t) {
	let e, n, a, i, s, l, g, m;
	return (
		(e = new _({
			props: { id: 'cover', variante: 3, $$slots: { default: [jt] }, $$scope: { ctx: t } }
		})),
		(a = new _({
			props: { id: 'slidegallery', variante: 0, $$slots: { default: [Ct] }, $$scope: { ctx: t } }
		})),
		(s = new _({
			props: { id: 'lightboxgallery', variante: 3, $$slots: { default: [Lt] }, $$scope: { ctx: t } }
		})),
		(g = new _({
			props: { id: 'flipcard', variante: 2, $$slots: { default: [Bt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				v(e.$$.fragment),
					(n = r()),
					v(a.$$.fragment),
					(i = r()),
					v(s.$$.fragment),
					(l = r()),
					v(g.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t),
					(n = o(t)),
					x(a.$$.fragment, t),
					(i = o(t)),
					x(s.$$.fragment, t),
					(l = o(t)),
					x(g.$$.fragment, t);
			},
			m(t, r) {
				b(e, t, r),
					d(t, n, r),
					b(a, t, r),
					d(t, i, r),
					b(s, t, r),
					d(t, l, r),
					b(g, t, r),
					(m = !0);
			},
			p(t, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: t }), a.$set(i);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: t }), s.$set(l);
				const c = {};
				1 & n && (c.$$scope = { dirty: n, ctx: t }), g.$set(c);
			},
			i(t) {
				m ||
					(k(e.$$.fragment, t),
					k(a.$$.fragment, t),
					k(s.$$.fragment, t),
					k(g.$$.fragment, t),
					(m = !0));
			},
			o(t) {
				w(e.$$.fragment, t),
					w(a.$$.fragment, t),
					w(s.$$.fragment, t),
					w(g.$$.fragment, t),
					(m = !1);
			},
			d(t) {
				I(e, t), t && c(n), I(a, t), t && c(i), I(s, t), t && c(l), I(g, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Gt, n, {});
	}
}
