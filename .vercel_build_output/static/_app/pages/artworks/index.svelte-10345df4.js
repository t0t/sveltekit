import {
	S as t,
	i as e,
	s as n,
	e as a,
	j as r,
	t as s,
	c as i,
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
	H as y,
	F as D,
	K as E,
	Y as T,
	C as j,
	D as P,
	J as S,
	Q as N,
	Z as V,
	_ as C
} from '../../chunks/index-d91e1ed8.js';
import { B as L, C as B, c as q } from '../../chunks/Cover-4b9a87b3.js';
import { a as G, f as R } from '../../chunks/index-65311448.js';
import { S as _ } from '../../chunks/Section-62f6895b.js';
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
				(k = s(t[0])),
				this.h();
		},
		l(a) {
			e = i(a, 'DIV', { class: !0 });
			var r = l(e);
			(n = i(r, 'DIV', { class: !0, style: !0 })),
				l(n).forEach(c),
				r.forEach(c),
				(v = o(a)),
				(x = i(a, 'DIV', { class: !0 }));
			var s = l(x);
			b = i(s, 'H2', {});
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
		{ foto: r } = e,
		{ showCarBack: s } = e;
	return (
		(t.$$set = (t) => {
			'back_txt' in t && n(0, (a = t.back_txt)),
				'foto' in t && n(1, (r = t.foto)),
				'showCarBack' in t && n(2, (s = t.showCarBack));
		}),
		[a, r, s]
	);
}
class U extends t {
	constructor(t) {
		super(), e(this, t, H, M, n, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function F(t) {
	let e, n, s, g, $, h, p, y, D, E, T;
	return (
		(s = new U({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(h = new L({ props: { variante: 4, text: '↜' } })),
		h.$on('click', t[4]),
		(y = new L({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		y.$on('click', t[3]),
		(E = new L({ props: { variante: 4, text: '⤳' } })),
		E.$on('click', t[5]),
		{
			c() {
				(e = a('div')),
					(n = a('div')),
					v(s.$$.fragment),
					(g = r()),
					($ = a('div')),
					v(h.$$.fragment),
					(p = r()),
					v(y.$$.fragment),
					(D = r()),
					v(E.$$.fragment),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var a = l(e);
				n = i(a, 'DIV', { class: !0 });
				var r = l(n);
				x(s.$$.fragment, r), r.forEach(c), (g = o(a)), ($ = i(a, 'DIV', { class: !0 }));
				var m = l($);
				x(h.$$.fragment, m),
					(p = o(m)),
					x(y.$$.fragment, m),
					(D = o(m)),
					x(E.$$.fragment, m),
					m.forEach(c),
					a.forEach(c),
					this.h();
			},
			h() {
				m(n, 'class', 'flip-box-inner svelte-1y97moe'),
					f(n, 'flip-it', t[0]),
					m($, 'class', 'ButtonControls svelte-1y97moe'),
					m(e, 'class', 'flip-box svelte-1y97moe');
			},
			m(t, a) {
				d(t, e, a),
					u(e, n),
					b(s, n, null),
					u(e, g),
					u(e, $),
					b(h, $, null),
					u($, p),
					b(y, $, null),
					u($, D),
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
				const r = {};
				1 & e && (r.text = t[0] ? '⤿' : '⤾'), y.$set(r);
			},
			i(t) {
				T ||
					(k(s.$$.fragment, t),
					k(h.$$.fragment, t),
					k(y.$$.fragment, t),
					k(E.$$.fragment, t),
					(T = !0));
			},
			o(t) {
				w(s.$$.fragment, t),
					w(h.$$.fragment, t),
					w(y.$$.fragment, t),
					w(E.$$.fragment, t),
					(T = !1);
			},
			d(t) {
				t && c(e), I(s), I(h), I(y), I(E);
			}
		}
	);
}
function J(t, e, n) {
	let a, r;
	let s = !1,
		i = 0;
	return (
		(t.$$.update = () => {
			64 & t.$$.dirty && n(1, (a = A[i].image)), 64 & t.$$.dirty && n(2, (r = A[i].word));
		}),
		[
			s,
			a,
			r,
			() => n(0, (s = !s)),
			() => {
				n(0, (s = !1)), n(6, 0 === i ? (i = A.length - 1) : (i -= 1));
			},
			() => {
				n(0, (s = !1)), n(6, i === A.length - 1 ? (i = 0) : (i += 1));
			},
			i
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
				(x = r()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			e = i(a, 'DIV', { class: !0 });
			var r = l(e);
			n = i(r, 'DIV', { class: !0 });
			var s = l(n);
			($ = g(s, t[0])),
				(f = g(s, ' / ')),
				(v = g(s, t[1])),
				s.forEach(c),
				(x = o(r)),
				(b = i(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(c),
				this.h();
		},
		h() {
			m(n, 'class', 'numbertext svelte-1trwyk2'),
				b.src !== (k = t[2]) && m(b, 'src', k),
				m(b, 'alt', t[3]),
				m(b, 'title', t[4]),
				m(b, 'class', 'svelte-1trwyk2'),
				m(e, 'class', 'mySlides svelte-1trwyk2');
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
		{ totalSlides: r } = e,
		{ image: s } = e,
		{ altTag: i } = e,
		{ attr: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && n(0, (a = t.slideNo)),
				'totalSlides' in t && n(1, (r = t.totalSlides)),
				'image' in t && n(2, (s = t.image)),
				'altTag' in t && n(3, (i = t.altTag)),
				'attr' in t && n(4, (l = t.attr));
		}),
		[a, r, s, i, l]
	);
}
class z extends t {
	constructor(t) {
		super(), e(this, t, Z, Y, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function O(t) {
	let e, n, r, s, o, g;
	return {
		c() {
			(e = a('div')), (n = a('img')), this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var a = l(e);
			(n = i(a, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), a.forEach(c), this.h();
		},
		h() {
			m(n, 'class', 'sample cursor svelte-ljhgb'),
				m(n, 'id', t[3]),
				n.src !== (r = t[0]) && m(n, 'src', r),
				m(n, 'alt', t[1]),
				m(n, 'title', (s = 'Image from ' + t[2])),
				f(n, 'active', t[4]),
				m(e, 'class', 'thumbnail-cont svelte-ljhgb');
		},
		m(a, r) {
			d(a, e, r), u(e, n), o || ((g = y(n, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && m(n, 'id', t[3]),
				1 & e && n.src !== (r = t[0]) && m(n, 'src', r),
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
		{ altTag: r } = e,
		{ titleLink: s } = e,
		{ id: i } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && n(0, (a = t.thumbImg)),
				'altTag' in t && n(1, (r = t.altTag)),
				'titleLink' in t && n(2, (s = t.titleLink)),
				'id' in t && n(3, (i = t.id)),
				'selected' in t && n(4, (l = t.selected));
		}),
		[
			a,
			r,
			s,
			i,
			l,
			function (e) {
				D(t, e);
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
	let e, n, $, f, v, x, b, k, w, I, D;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = s('❮')),
				(f = r()),
				(v = a('p')),
				(x = s(t[0])),
				(b = r()),
				(k = a('a')),
				(w = s('❯')),
				this.h();
		},
		l(a) {
			e = i(a, 'DIV', { class: !0 });
			var r = l(e);
			n = i(r, 'A', { href: !0, class: !0 });
			var s = l(n);
			($ = g(s, '❮')), s.forEach(c), (f = o(r)), (v = i(r, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(x = g(m, t[0])), m.forEach(c), (b = o(r)), (k = i(r, 'A', { href: !0, class: !0 }));
			var d = l(k);
			(w = g(d, '❯')), d.forEach(c), r.forEach(c), this.h();
		},
		h() {
			m(n, 'href', '#arrowL'),
				m(n, 'class', 'arrow prev svelte-1yecaaw'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-1yecaaw'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-1yecaaw'),
				m(e, 'class', 'caption-container svelte-1yecaaw');
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
				I || ((D = [y(n, 'click', t[2]), y(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(x, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), E(D);
		}
	};
}
function et(t, e, n) {
	let { caption: a } = e;
	const r = T();
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
	for (let a = 0; a < h.length; a += 1) p[a] = rt(at(t, h, a));
	const y = (t) =>
		w(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(e = a('div')), v(n.$$.fragment), (s = r()), v(g.$$.fragment), ($ = r()), (f = a('div'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var a = l(e);
			x(n.$$.fragment, a),
				a.forEach(c),
				(s = o(t)),
				x(g.$$.fragment, t),
				($ = o(t)),
				(f = i(t, 'DIV', { class: !0 }));
			var r = l(f);
			for (let e = 0; e < p.length; e += 1) p[e].l(r);
			r.forEach(c), this.h();
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
			const r = {};
			if ((1 & e && (r.caption = Q[t[0]].name), g.$set(r), 17 & e)) {
				let n;
				for (h = Q, n = 0; n < h.length; n += 1) {
					const a = at(t, h, n);
					p[n]
						? (p[n].p(a, e), k(p[n], 1))
						: ((p[n] = rt(a)), p[n].c(), k(p[n], 1), p[n].m(f, null));
				}
				for (j(), n = h.length; n < p.length; n += 1) y(n);
				P();
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
			t && c(e), I(n), t && c(s), I(g, t), t && c($), t && c(f), S(p, t);
		}
	};
}
function it(t, e, n) {
	let a,
		r = 0;
	const s = (t) => n(0, (r = t));
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(r), 1 & t.$$.dirty && n(1, (a = Q[r]));
		}),
		[
			r,
			a,
			() => {
				n(0, r === Q.length - 1 ? (r = 0) : (r += 1));
			},
			() => {
				n(0, 0 === r ? (r = Q.length - 1) : (r -= 1));
			},
			s,
			(t) => s(t)
		]
	);
}
class lt extends t {
	constructor(t) {
		super(), e(this, t, it, st, n, {});
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
				(x = r()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			e = i(a, 'DIV', { class: !0 });
			var r = l(e);
			n = i(r, 'DIV', { class: !0 });
			var s = l(n);
			($ = g(s, t[0])),
				(f = g(s, ' / ')),
				(v = g(s, t[1])),
				s.forEach(c),
				(x = o(r)),
				(b = i(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(c),
				this.h();
		},
		h() {
			m(n, 'class', 'numbertext svelte-rujp2h'),
				b.src !== (k = t[2]) && m(b, 'src', k),
				m(b, 'alt', t[3]),
				m(b, 'title', t[4]),
				m(b, 'class', 'svelte-rujp2h'),
				m(e, 'class', 'Slide svelte-rujp2h');
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
		{ image: s } = e,
		{ altTag: i } = e,
		{ description: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && n(0, (a = t.slideNo)),
				'totalSlides' in t && n(1, (r = t.totalSlides)),
				'image' in t && n(2, (s = t.image)),
				'altTag' in t && n(3, (i = t.altTag)),
				'description' in t && n(4, (l = t.description));
		}),
		[a, r, s, i, l]
	);
}
class gt extends t {
	constructor(t) {
		super(),
			e(this, t, ot, ct, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function mt(t) {
	let e, n, r, s;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			m(e, 'class', 'sample cursor svelte-1wipku5'),
				m(e, 'id', t[3]),
				e.src !== (n = t[0]) && m(e, 'src', n),
				m(e, 'alt', t[1]),
				m(e, 'title', t[2]),
				f(e, 'active', t[4]);
		},
		m(n, a) {
			d(n, e, a), r || ((s = y(e, 'click', t[5])), (r = !0));
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
			t && c(e), (r = !1), s();
		}
	};
}
function $t(t, e, n) {
	let { thumbImg: a } = e,
		{ altTag: r } = e,
		{ titleLink: s } = e,
		{ id: i } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && n(0, (a = t.thumbImg)),
				'altTag' in t && n(1, (r = t.altTag)),
				'titleLink' in t && n(2, (s = t.titleLink)),
				'id' in t && n(3, (i = t.id)),
				'selected' in t && n(4, (l = t.selected));
		}),
		[
			a,
			r,
			s,
			i,
			l,
			function (e) {
				D(t, e);
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
	let e, n, $, f, v, x, b, k, w, I, D;
	return {
		c() {
			(e = a('div')),
				(n = a('a')),
				($ = s('❮')),
				(f = r()),
				(v = a('p')),
				(x = s(t[0])),
				(b = r()),
				(k = a('a')),
				(w = s('❯')),
				this.h();
		},
		l(a) {
			e = i(a, 'DIV', { class: !0 });
			var r = l(e);
			n = i(r, 'A', { href: !0, class: !0 });
			var s = l(n);
			($ = g(s, '❮')), s.forEach(c), (f = o(r)), (v = i(r, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(x = g(m, t[0])), m.forEach(c), (b = o(r)), (k = i(r, 'A', { href: !0, class: !0 }));
			var d = l(k);
			(w = g(d, '❯')), d.forEach(c), r.forEach(c), this.h();
		},
		h() {
			m(n, 'href', '#arrowL'),
				m(n, 'class', 'arrow prev svelte-64qdcs'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-64qdcs'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-64qdcs'),
				m(e, 'class', 'caption-container svelte-64qdcs');
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
				I || ((D = [y(n, 'click', t[2]), y(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(x, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), E(D);
		}
	};
}
function ut(t, e, n) {
	let { caption: a } = e;
	const r = T();
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
	let e, n, $, f, h, p, D, E, T, L, B, q, _, A;
	(h = new gt({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: Q.length
		}
	})),
		(D = new ht({ props: { caption: Q[t[0]].description } })),
		D.$on('prevClick', t[3]),
		D.$on('nextClick', t[2]);
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
				(f = r()),
				v(h.$$.fragment),
				(p = r()),
				v(D.$$.fragment),
				(E = r()),
				(T = a('div'));
			for (let t = 0; t < H.length; t += 1) H[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var a = l(e);
			n = i(a, 'SPAN', { class: !0 });
			var r = l(n);
			($ = g(r, '✗')),
				r.forEach(c),
				(f = o(a)),
				x(h.$$.fragment, a),
				(p = o(a)),
				x(D.$$.fragment, a),
				(E = o(a)),
				(T = i(a, 'DIV', { class: !0 }));
			var s = l(T);
			for (let e = 0; e < H.length; e += 1) H[e].l(s);
			s.forEach(c), a.forEach(c), this.h();
		},
		h() {
			m(n, 'class', 'close cursor svelte-pgcopo'),
				m(T, 'class', 'Thumbnails svelte-pgcopo'),
				m(e, 'class', 'lightbox svelte-pgcopo');
		},
		m(a, r) {
			d(a, e, r),
				u(e, n),
				u(n, $),
				u(e, f),
				b(h, e, null),
				u(e, p),
				b(D, e, null),
				u(e, E),
				u(e, T);
			for (let t = 0; t < H.length; t += 1) H[t].m(T, null);
			(q = !0), _ || ((A = y(n, 'click', t[5])), (_ = !0));
		},
		p(t, [e]) {
			const n = {};
			2 & e && (n.image = t[1].imgurl),
				2 & e && (n.altTag = t[1].name),
				2 & e && (n.attr = t[1].description),
				2 & e && (n.slideNo = t[1].id + 1),
				h.$set(n);
			const a = {};
			if ((1 & e && (a.caption = Q[t[0]].description), D.$set(a), 17 & e)) {
				let n;
				for (M = Q, n = 0; n < M.length; n += 1) {
					const a = pt(t, M, n);
					H[n]
						? (H[n].p(a, e), k(H[n], 1))
						: ((H[n] = vt(a)), H[n].c(), k(H[n], 1), H[n].m(T, null));
				}
				for (j(), n = M.length; n < H.length; n += 1) U(n);
				P();
			}
		},
		i(t) {
			if (!q) {
				k(h.$$.fragment, t), k(D.$$.fragment, t);
				for (let t = 0; t < M.length; t += 1) k(H[t]);
				N(() => {
					B && B.end(1), L || (L = V(e, G, { x: -300 })), L.start();
				}),
					(q = !0);
			}
		},
		o(t) {
			w(h.$$.fragment, t), w(D.$$.fragment, t), (H = H.filter(Boolean));
			for (let e = 0; e < H.length; e += 1) w(H[e]);
			L && L.invalidate(), (B = C(e, R, {})), (q = !1);
		},
		d(t) {
			t && c(e), I(h), I(D), S(H, t), t && B && B.end(), (_ = !1), A();
		}
	};
}
function bt(t, e, n) {
	let a,
		{ imageShowingIndex: r = 0 } = e;
	const s = (t) => n(0, (r = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && n(0, (r = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(r), 1 & t.$$.dirty && n(1, (a = Q[r]));
		}),
		[
			r,
			a,
			() => {
				n(0, r === Q.length - 1 ? (r = 0) : (r += 1));
			},
			() => {
				n(0, 0 === r ? (r = Q.length - 1) : (r -= 1));
			},
			s,
			function (e) {
				D(t, e);
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
	let e, n, r, s;
	return {
		c() {
			(e = a('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			m(e, 'id', t[1]),
				e.src !== (n = t[2]) && m(e, 'src', n),
				m(e, 'alt', t[3]),
				m(e, 'class', 'svelte-lfgex8');
		},
		m(n, a) {
			d(n, e, a), r || ((s = y(e, 'click', t[0])), (r = !0));
		},
		p: p,
		d(t) {
			t && c(e), (r = !1), s();
		}
	};
}
function yt(t) {
	let e,
		n = Q,
		r = [];
	for (let a = 0; a < n.length; a += 1) r[a] = It(wt(t, n, a));
	return {
		c() {
			e = a('div');
			for (let t = 0; t < r.length; t += 1) r[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			for (let e = 0; e < r.length; e += 1) r[e].l(n);
			n.forEach(c), this.h();
		},
		h() {
			m(e, 'class', 'DemoGallery svelte-lfgex8');
		},
		m(t, n) {
			d(t, e, n);
			for (let a = 0; a < r.length; a += 1) r[a].m(e, null);
		},
		p(t, [a]) {
			if (0 & a) {
				let s;
				for (n = Q, s = 0; s < n.length; s += 1) {
					const i = wt(t, n, s);
					r[s] ? r[s].p(i, a) : ((r[s] = It(i)), r[s].c(), r[s].m(e, null));
				}
				for (; s < r.length; s += 1) r[s].d(1);
				r.length = n.length;
			}
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), S(r, t);
		}
	};
}
function Dt(t) {
	return [
		function (e) {
			D(t, e);
		}
	];
}
class Et extends t {
	constructor(t) {
		super(), e(this, t, Dt, yt, n, {});
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
function jt(t) {
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
function Pt(t) {
	let e, n, s, g, $, f;
	const u = [jt, Tt],
		h = [];
	function p(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = p(t)),
		(n = h[e] = u[e](t)),
		($ = new L({ props: { variante: 2, text: 'View gallery' } })),
		$.$on('click', t[4]),
		{
			c() {
				n.c(), (s = r()), (g = a('aside')), v($.$$.fragment), this.h();
			},
			l(t) {
				n.l(t), (s = o(t)), (g = i(t, 'ASIDE', { class: !0 }));
				var e = l(g);
				x($.$$.fragment, e), e.forEach(c), this.h();
			},
			h() {
				m(g, 'class', 'svelte-1jkqfxd');
			},
			m(t, n) {
				h[e].m(t, n), d(t, s, n), d(t, g, n), b($, g, null), (f = !0);
			},
			p(t, [a]) {
				let r = e;
				(e = p(t)),
					e === r
						? h[e].p(t, a)
						: (j(),
						  w(h[r], 1, 1, () => {
								h[r] = null;
						  }),
						  P(),
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
function St(t, e, n) {
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
class Nt extends t {
	constructor(t) {
		super(), e(this, t, St, Pt, n, {});
	}
}
function Vt(t) {
	let e, n;
	return (
		(e = new B({
			props: { title: q[1].title, subtitle: q[1].subtitle, text: q[1].text, img: q[1].img }
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
function Bt(t) {
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
function qt(t) {
	let e, n, a, s, i, l, g, m;
	return (
		(e = new _({
			props: { id: 'cover', variante: 1, $$slots: { default: [Vt] }, $$scope: { ctx: t } }
		})),
		(a = new _({
			props: { id: 'slidegallery', variante: 0, $$slots: { default: [Ct] }, $$scope: { ctx: t } }
		})),
		(i = new _({
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
					(s = r()),
					v(i.$$.fragment),
					(l = r()),
					v(g.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t),
					(n = o(t)),
					x(a.$$.fragment, t),
					(s = o(t)),
					x(i.$$.fragment, t),
					(l = o(t)),
					x(g.$$.fragment, t);
			},
			m(t, r) {
				b(e, t, r),
					d(t, n, r),
					b(a, t, r),
					d(t, s, r),
					b(i, t, r),
					d(t, l, r),
					b(g, t, r),
					(m = !0);
			},
			p(t, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), a.$set(s);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: t }), i.$set(l);
				const c = {};
				1 & n && (c.$$scope = { dirty: n, ctx: t }), g.$set(c);
			},
			i(t) {
				m ||
					(k(e.$$.fragment, t),
					k(a.$$.fragment, t),
					k(i.$$.fragment, t),
					k(g.$$.fragment, t),
					(m = !0));
			},
			o(t) {
				w(e.$$.fragment, t),
					w(a.$$.fragment, t),
					w(i.$$.fragment, t),
					w(g.$$.fragment, t),
					(m = !1);
			},
			d(t) {
				I(e, t), t && c(n), I(a, t), t && c(s), I(i, t), t && c(l), I(g, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, qt, n, {});
	}
}
