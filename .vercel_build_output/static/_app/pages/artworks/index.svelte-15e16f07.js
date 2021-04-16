import {
	S as t,
	i as e,
	s as a,
	e as n,
	j as s,
	t as r,
	c as i,
	a as l,
	d as c,
	l as o,
	b as g,
	o as m,
	L as $,
	F as f,
	f as u,
	g as h,
	h as d,
	n as p,
	p as v,
	q as b,
	r as x,
	w as k,
	x as w,
	y as I,
	G as y,
	O as E,
	P as D,
	X as T,
	C as N,
	D as S,
	K as P,
	M as j,
	Y as V,
	Z as C
} from '../../chunks/index-83f33906.js';
import { B as L, a as B, f as q } from '../../chunks/Button-ee442612.js';
import { S as G } from '../../chunks/Section-1b31e13c.js';
import '../../chunks/index-78b22dae.js';
const M = [
	{ word: 'Velociraptor', image: '/img/velociraptor.jpg' },
	{ word: 'Raptor Delta', image: '/img/raptordelta.jpeg' },
	{ word: 'vesica piscis', image: '/img/bg3.jpg' },
	{ word: 'vesica piscis', image: '/img/bg4.jpg' }
];
function R(t) {
	let e, a, v, b, x, k;
	return {
		c() {
			(e = n('div')),
				(a = n('div')),
				(v = s()),
				(b = n('div')),
				(x = n('h2')),
				(k = r(t[0])),
				this.h();
		},
		l(n) {
			e = i(n, 'DIV', { class: !0 });
			var s = l(e);
			(a = i(s, 'DIV', { class: !0, style: !0 })),
				l(a).forEach(c),
				s.forEach(c),
				(v = o(n)),
				(b = i(n, 'DIV', { class: !0 }));
			var r = l(b);
			x = i(r, 'H2', {});
			var m = l(x);
			(k = g(m, t[0])), m.forEach(c), r.forEach(c), this.h();
		},
		h() {
			m(a, 'class', 'image svelte-3n219r'),
				$(a, 'background-image', 'url(' + t[1] + ')'),
				m(e, 'class', 'flip-box-front svelte-3n219r'),
				m(b, 'class', 'flip-box-back svelte-3n219r'),
				f(b, 'NoRebelesTxt', t[2]);
		},
		m(t, n) {
			u(t, e, n), h(e, a), u(t, v, n), u(t, b, n), h(b, x), h(x, k);
		},
		p(t, [e]) {
			2 & e && $(a, 'background-image', 'url(' + t[1] + ')'),
				1 & e && d(k, t[0]),
				4 & e && f(b, 'NoRebelesTxt', t[2]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), t && c(v), t && c(b);
		}
	};
}
function A(t, e, a) {
	let { back_txt: n } = e,
		{ foto: s } = e,
		{ showCarBack: r } = e;
	return (
		(t.$$set = (t) => {
			'back_txt' in t && a(0, (n = t.back_txt)),
				'foto' in t && a(1, (s = t.foto)),
				'showCarBack' in t && a(2, (r = t.showCarBack));
		}),
		[n, s, r]
	);
}
class _ extends t {
	constructor(t) {
		super(), e(this, t, A, R, a, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function O(t) {
	let e, a, r, g, $, d, p, y, E, D, T;
	return (
		(r = new _({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(d = new L({ props: { variante: 4, text: '↜' } })),
		d.$on('click', t[4]),
		(y = new L({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		y.$on('click', t[3]),
		(D = new L({ props: { variante: 4, text: '⤳' } })),
		D.$on('click', t[5]),
		{
			c() {
				(e = n('div')),
					(a = n('div')),
					v(r.$$.fragment),
					(g = s()),
					($ = n('div')),
					v(d.$$.fragment),
					(p = s()),
					v(y.$$.fragment),
					(E = s()),
					v(D.$$.fragment),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var n = l(e);
				a = i(n, 'DIV', { class: !0 });
				var s = l(a);
				b(r.$$.fragment, s), s.forEach(c), (g = o(n)), ($ = i(n, 'DIV', { class: !0 }));
				var m = l($);
				b(d.$$.fragment, m),
					(p = o(m)),
					b(y.$$.fragment, m),
					(E = o(m)),
					b(D.$$.fragment, m),
					m.forEach(c),
					n.forEach(c),
					this.h();
			},
			h() {
				m(a, 'class', 'flip-box-inner svelte-1xdkst'),
					f(a, 'flip-it', t[0]),
					m($, 'class', 'ButtonControls svelte-1xdkst'),
					m(e, 'class', 'flip-box svelte-1xdkst');
			},
			m(t, n) {
				u(t, e, n),
					h(e, a),
					x(r, a, null),
					h(e, g),
					h(e, $),
					x(d, $, null),
					h($, p),
					x(y, $, null),
					h($, E),
					x(D, $, null),
					(T = !0);
			},
			p(t, [e]) {
				const n = {};
				1 & e && (n.showCarBack = t[0]),
					2 & e && (n.foto = t[1]),
					4 & e && (n.back_txt = t[2]),
					r.$set(n),
					1 & e && f(a, 'flip-it', t[0]);
				const s = {};
				1 & e && (s.text = t[0] ? '⤿' : '⤾'), y.$set(s);
			},
			i(t) {
				T ||
					(k(r.$$.fragment, t),
					k(d.$$.fragment, t),
					k(y.$$.fragment, t),
					k(D.$$.fragment, t),
					(T = !0));
			},
			o(t) {
				w(r.$$.fragment, t),
					w(d.$$.fragment, t),
					w(y.$$.fragment, t),
					w(D.$$.fragment, t),
					(T = !1);
			},
			d(t) {
				t && c(e), I(r), I(d), I(y), I(D);
			}
		}
	);
}
function U(t, e, a) {
	let n, s;
	let r = !1,
		i = 0;
	return (
		(t.$$.update = () => {
			64 & t.$$.dirty && a(1, (n = M[i].image)), 64 & t.$$.dirty && a(2, (s = M[i].word));
		}),
		[
			r,
			n,
			s,
			() => a(0, (r = !r)),
			() => {
				a(0, (r = !1)), a(6, 0 === i ? (i = M.length - 1) : (i -= 1));
			},
			() => {
				a(0, (r = !1)), a(6, i === M.length - 1 ? (i = 0) : (i += 1));
			},
			i
		]
	);
}
class F extends t {
	constructor(t) {
		super(), e(this, t, U, O, a, {});
	}
}
const H = [
	{
		id: 0,
		name: 'Primera imagen',
		imgurl: 'img/obra/img1.jpg',
		attribution: '3D Print Painting. 100cm'
	},
	{
		id: 1,
		name: 'Red Nature',
		imgurl: 'img/obra/img2.jpg',
		attribution: '3D Print Painting. 100cm'
	},
	{ id: 2, name: 'Path', imgurl: 'img/obra/img3.jpg', attribution: '3D Print Painting. 100cm' },
	{
		id: 3,
		name: 'Country Road',
		imgurl: 'img/obra/img4.jpg',
		attribution: '3D Print Painting. 100cm'
	},
	{
		id: 4,
		name: 'Throughway',
		imgurl: 'img/obra/img5.jpg',
		attribution: '3D Print Painting. 100cm'
	},
	{
		id: 5,
		name: 'Golden Pond',
		imgurl: 'img/obra/img5.jpg',
		attribution: '3D Print Painting. 100cm'
	},
	{
		id: 6,
		name: 'preUltima imagen',
		imgurl: 'img/obra/img6.jpg',
		attribution: '3D Print Painting. 100cm'
	},
	{
		id: 7,
		name: 'Ultima imagen',
		imgurl: 'img/obra/img3.jpg',
		attribution: '3D Print Painting. 100cm'
	}
];
function K(t) {
	let e, a, $, f, v, b, x, k;
	return {
		c() {
			(e = n('div')),
				(a = n('div')),
				($ = r(t[0])),
				(f = r(' / ')),
				(v = r(t[1])),
				(b = s()),
				(x = n('img')),
				this.h();
		},
		l(n) {
			e = i(n, 'DIV', { class: !0 });
			var s = l(e);
			a = i(s, 'DIV', { class: !0 });
			var r = l(a);
			($ = g(r, t[0])),
				(f = g(r, ' / ')),
				(v = g(r, t[1])),
				r.forEach(c),
				(b = o(s)),
				(x = i(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				s.forEach(c),
				this.h();
		},
		h() {
			m(a, 'class', 'numbertext svelte-3q5nt5'),
				x.src !== (k = t[2]) && m(x, 'src', k),
				m(x, 'alt', t[3]),
				m(x, 'title', t[4]),
				m(x, 'class', 'svelte-3q5nt5'),
				m(e, 'class', 'mySlides svelte-3q5nt5');
		},
		m(t, n) {
			u(t, e, n), h(e, a), h(a, $), h(a, f), h(a, v), h(e, b), h(e, x);
		},
		p(t, [e]) {
			1 & e && d($, t[0]),
				2 & e && d(v, t[1]),
				4 & e && x.src !== (k = t[2]) && m(x, 'src', k),
				8 & e && m(x, 'alt', t[3]),
				16 & e && m(x, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e);
		}
	};
}
function X(t, e, a) {
	let { slideNo: n } = e,
		{ totalSlides: s } = e,
		{ image: r } = e,
		{ altTag: i } = e,
		{ attr: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && a(0, (n = t.slideNo)),
				'totalSlides' in t && a(1, (s = t.totalSlides)),
				'image' in t && a(2, (r = t.image)),
				'altTag' in t && a(3, (i = t.altTag)),
				'attr' in t && a(4, (l = t.attr));
		}),
		[n, s, r, i, l]
	);
}
class Y extends t {
	constructor(t) {
		super(), e(this, t, X, K, a, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function Z(t) {
	let e, a, s, r, o, g;
	return {
		c() {
			(e = n('div')), (a = n('img')), this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			(a = i(n, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), n.forEach(c), this.h();
		},
		h() {
			m(a, 'class', 'sample cursor svelte-lou512'),
				m(a, 'id', t[3]),
				a.src !== (s = t[0]) && m(a, 'src', s),
				m(a, 'alt', t[1]),
				m(a, 'title', (r = 'Image from ' + t[2])),
				f(a, 'active', t[4]),
				m(e, 'class', 'thumbnail-cont svelte-lou512');
		},
		m(n, s) {
			u(n, e, s), h(e, a), o || ((g = y(a, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && m(a, 'id', t[3]),
				1 & e && a.src !== (s = t[0]) && m(a, 'src', s),
				2 & e && m(a, 'alt', t[1]),
				4 & e && r !== (r = 'Image from ' + t[2]) && m(a, 'title', r),
				16 & e && f(a, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (o = !1), g();
		}
	};
}
function z(t, e, a) {
	let { thumbImg: n } = e,
		{ altTag: s } = e,
		{ titleLink: r } = e,
		{ id: i } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && a(0, (n = t.thumbImg)),
				'altTag' in t && a(1, (s = t.altTag)),
				'titleLink' in t && a(2, (r = t.titleLink)),
				'id' in t && a(3, (i = t.id)),
				'selected' in t && a(4, (l = t.selected));
		}),
		[
			n,
			s,
			r,
			i,
			l,
			function (e) {
				E(t, e);
			}
		]
	);
}
class J extends t {
	constructor(t) {
		super(), e(this, t, z, Z, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function Q(t) {
	let e, a, $, f, v, b, x, k, w, I, E;
	return {
		c() {
			(e = n('div')),
				(a = n('a')),
				($ = r('❮')),
				(f = s()),
				(v = n('p')),
				(b = r(t[0])),
				(x = s()),
				(k = n('a')),
				(w = r('❯')),
				this.h();
		},
		l(n) {
			e = i(n, 'DIV', { class: !0 });
			var s = l(e);
			a = i(s, 'A', { href: !0, class: !0 });
			var r = l(a);
			($ = g(r, '❮')), r.forEach(c), (f = o(s)), (v = i(s, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(b = g(m, t[0])), m.forEach(c), (x = o(s)), (k = i(s, 'A', { href: !0, class: !0 }));
			var u = l(k);
			(w = g(u, '❯')), u.forEach(c), s.forEach(c), this.h();
		},
		h() {
			m(a, 'href', '#arrowL'),
				m(a, 'class', 'arrow prev svelte-1yy3u47'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-1yy3u47'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-1yy3u47'),
				m(e, 'class', 'caption-container svelte-1yy3u47');
		},
		m(n, s) {
			u(n, e, s),
				h(e, a),
				h(a, $),
				h(e, f),
				h(e, v),
				h(v, b),
				h(e, x),
				h(e, k),
				h(k, w),
				I || ((E = [y(a, 'click', t[2]), y(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && d(b, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), D(E);
		}
	};
}
function W(t, e, a) {
	let { caption: n } = e;
	const s = T();
	return (
		(t.$$set = (t) => {
			'caption' in t && a(0, (n = t.caption));
		}),
		[n, s, () => s('prevClick'), () => s('nextClick')]
	);
}
class tt extends t {
	constructor(t) {
		super(), e(this, t, W, Q, a, { caption: 0 });
	}
}
function et(t, e, a) {
	const n = t.slice();
	return (n[6] = e[a].id), (n[7] = e[a].imgurl), (n[8] = e[a].name), (n[9] = e[a].attribution), n;
}
function at(t) {
	let e, a;
	return (
		(e = new J({
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
				b(e.$$.fragment, t);
			},
			m(t, n) {
				x(e, t, n), (a = !0);
			},
			p(a, n) {
				t = a;
				const s = {};
				1 & n && (s.selected = t[0] === t[6]), e.$set(s);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function nt(t) {
	let e, a, r, g, $, f, h;
	(a = new Y({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: H.length
		}
	})),
		(g = new tt({ props: { caption: H[t[0]].name } })),
		g.$on('prevClick', t[3]),
		g.$on('nextClick', t[2]);
	let d = H,
		p = [];
	for (let n = 0; n < d.length; n += 1) p[n] = at(et(t, d, n));
	const y = (t) =>
		w(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(e = n('div')), v(a.$$.fragment), (r = s()), v(g.$$.fragment), ($ = s()), (f = n('div'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			b(a.$$.fragment, n),
				n.forEach(c),
				(r = o(t)),
				b(g.$$.fragment, t),
				($ = o(t)),
				(f = i(t, 'DIV', { class: !0 }));
			var s = l(f);
			for (let e = 0; e < p.length; e += 1) p[e].l(s);
			s.forEach(c), this.h();
		},
		h() {
			m(e, 'class', 'container svelte-1qcybd5'), m(f, 'class', 'thumbnails-row svelte-1qcybd5');
		},
		m(t, n) {
			u(t, e, n), x(a, e, null), u(t, r, n), x(g, t, n), u(t, $, n), u(t, f, n);
			for (let e = 0; e < p.length; e += 1) p[e].m(f, null);
			h = !0;
		},
		p(t, [e]) {
			const n = {};
			2 & e && (n.image = t[1].imgurl),
				2 & e && (n.altTag = t[1].name),
				2 & e && (n.attr = t[1].attribution),
				2 & e && (n.slideNo = t[1].id + 1),
				a.$set(n);
			const s = {};
			if ((1 & e && (s.caption = H[t[0]].name), g.$set(s), 17 & e)) {
				let a;
				for (d = H, a = 0; a < d.length; a += 1) {
					const n = et(t, d, a);
					p[a]
						? (p[a].p(n, e), k(p[a], 1))
						: ((p[a] = at(n)), p[a].c(), k(p[a], 1), p[a].m(f, null));
				}
				for (N(), a = d.length; a < p.length; a += 1) y(a);
				S();
			}
		},
		i(t) {
			if (!h) {
				k(a.$$.fragment, t), k(g.$$.fragment, t);
				for (let t = 0; t < d.length; t += 1) k(p[t]);
				h = !0;
			}
		},
		o(t) {
			w(a.$$.fragment, t), w(g.$$.fragment, t), (p = p.filter(Boolean));
			for (let e = 0; e < p.length; e += 1) w(p[e]);
			h = !1;
		},
		d(t) {
			t && c(e), I(a), t && c(r), I(g, t), t && c($), t && c(f), P(p, t);
		}
	};
}
function st(t, e, a) {
	let n,
		s = 0;
	const r = (t) => a(0, (s = t));
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(s), 1 & t.$$.dirty && a(1, (n = H[s]));
		}),
		[
			s,
			n,
			() => {
				a(0, s === H.length - 1 ? (s = 0) : (s += 1));
			},
			() => {
				a(0, 0 === s ? (s = H.length - 1) : (s -= 1));
			},
			r,
			(t) => r(t)
		]
	);
}
class rt extends t {
	constructor(t) {
		super(), e(this, t, st, nt, a, {});
	}
}
function it(t) {
	let e, a, $, f, v, b, x, k;
	return {
		c() {
			(e = n('div')),
				(a = n('div')),
				($ = r(t[0])),
				(f = r(' / ')),
				(v = r(t[1])),
				(b = s()),
				(x = n('img')),
				this.h();
		},
		l(n) {
			e = i(n, 'DIV', { class: !0 });
			var s = l(e);
			a = i(s, 'DIV', { class: !0 });
			var r = l(a);
			($ = g(r, t[0])),
				(f = g(r, ' / ')),
				(v = g(r, t[1])),
				r.forEach(c),
				(b = o(s)),
				(x = i(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				s.forEach(c),
				this.h();
		},
		h() {
			m(a, 'class', 'numbertext svelte-3q5nt5'),
				x.src !== (k = t[2]) && m(x, 'src', k),
				m(x, 'alt', t[3]),
				m(x, 'title', t[4]),
				m(x, 'class', 'svelte-3q5nt5'),
				m(e, 'class', 'mySlides svelte-3q5nt5');
		},
		m(t, n) {
			u(t, e, n), h(e, a), h(a, $), h(a, f), h(a, v), h(e, b), h(e, x);
		},
		p(t, [e]) {
			1 & e && d($, t[0]),
				2 & e && d(v, t[1]),
				4 & e && x.src !== (k = t[2]) && m(x, 'src', k),
				8 & e && m(x, 'alt', t[3]),
				16 & e && m(x, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e);
		}
	};
}
function lt(t, e, a) {
	let { slideNo: n } = e,
		{ totalSlides: s } = e,
		{ image: r } = e,
		{ altTag: i } = e,
		{ attr: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && a(0, (n = t.slideNo)),
				'totalSlides' in t && a(1, (s = t.totalSlides)),
				'image' in t && a(2, (r = t.image)),
				'altTag' in t && a(3, (i = t.altTag)),
				'attr' in t && a(4, (l = t.attr));
		}),
		[n, s, r, i, l]
	);
}
class ct extends t {
	constructor(t) {
		super(), e(this, t, lt, it, a, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function ot(t) {
	let e, a, s, r, o, g;
	return {
		c() {
			(e = n('div')), (a = n('img')), this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			(a = i(n, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), n.forEach(c), this.h();
		},
		h() {
			m(a, 'class', 'sample cursor svelte-lou512'),
				m(a, 'id', t[3]),
				a.src !== (s = t[0]) && m(a, 'src', s),
				m(a, 'alt', t[1]),
				m(a, 'title', (r = 'Image from ' + t[2])),
				f(a, 'active', t[4]),
				m(e, 'class', 'thumbnail-cont svelte-lou512');
		},
		m(n, s) {
			u(n, e, s), h(e, a), o || ((g = y(a, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && m(a, 'id', t[3]),
				1 & e && a.src !== (s = t[0]) && m(a, 'src', s),
				2 & e && m(a, 'alt', t[1]),
				4 & e && r !== (r = 'Image from ' + t[2]) && m(a, 'title', r),
				16 & e && f(a, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (o = !1), g();
		}
	};
}
function gt(t, e, a) {
	let { thumbImg: n } = e,
		{ altTag: s } = e,
		{ titleLink: r } = e,
		{ id: i } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && a(0, (n = t.thumbImg)),
				'altTag' in t && a(1, (s = t.altTag)),
				'titleLink' in t && a(2, (r = t.titleLink)),
				'id' in t && a(3, (i = t.id)),
				'selected' in t && a(4, (l = t.selected));
		}),
		[
			n,
			s,
			r,
			i,
			l,
			function (e) {
				E(t, e);
			}
		]
	);
}
class mt extends t {
	constructor(t) {
		super(), e(this, t, gt, ot, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function $t(t) {
	let e, a, $, f, v, b, x, k, w, I, E;
	return {
		c() {
			(e = n('div')),
				(a = n('a')),
				($ = r('❮')),
				(f = s()),
				(v = n('p')),
				(b = r(t[0])),
				(x = s()),
				(k = n('a')),
				(w = r('❯')),
				this.h();
		},
		l(n) {
			e = i(n, 'DIV', { class: !0 });
			var s = l(e);
			a = i(s, 'A', { href: !0, class: !0 });
			var r = l(a);
			($ = g(r, '❮')), r.forEach(c), (f = o(s)), (v = i(s, 'P', { id: !0, class: !0 }));
			var m = l(v);
			(b = g(m, t[0])), m.forEach(c), (x = o(s)), (k = i(s, 'A', { href: !0, class: !0 }));
			var u = l(k);
			(w = g(u, '❯')), u.forEach(c), s.forEach(c), this.h();
		},
		h() {
			m(a, 'href', '#arrowL'),
				m(a, 'class', 'arrow prev svelte-1yy3u47'),
				m(v, 'id', 'caption'),
				m(v, 'class', 'svelte-1yy3u47'),
				m(k, 'href', '#arrowR'),
				m(k, 'class', 'arrow next svelte-1yy3u47'),
				m(e, 'class', 'caption-container svelte-1yy3u47');
		},
		m(n, s) {
			u(n, e, s),
				h(e, a),
				h(a, $),
				h(e, f),
				h(e, v),
				h(v, b),
				h(e, x),
				h(e, k),
				h(k, w),
				I || ((E = [y(a, 'click', t[2]), y(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && d(b, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), D(E);
		}
	};
}
function ft(t, e, a) {
	let { caption: n } = e;
	const s = T();
	return (
		(t.$$set = (t) => {
			'caption' in t && a(0, (n = t.caption));
		}),
		[n, s, () => s('prevClick'), () => s('nextClick')]
	);
}
class ut extends t {
	constructor(t) {
		super(), e(this, t, ft, $t, a, { caption: 0 });
	}
}
function ht(t, e, a) {
	const n = t.slice();
	return (n[7] = e[a].id), (n[8] = e[a].imgurl), (n[9] = e[a].name), n;
}
function dt(t) {
	let e, a;
	return (
		(e = new mt({
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
				b(e.$$.fragment, t);
			},
			m(t, n) {
				x(e, t, n), (a = !0);
			},
			p(a, n) {
				t = a;
				const s = {};
				1 & n && (s.selected = Number(t[0]) === t[7]), e.$set(s);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function pt(t) {
	let e, a, $, f, d, p, E, D, T, L, G, M, R, A, _, O;
	(E = new ct({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: H.length
		}
	})),
		(T = new ut({ props: { caption: H[t[0]].name } })),
		T.$on('prevClick', t[3]),
		T.$on('nextClick', t[2]);
	let U = H,
		F = [];
	for (let n = 0; n < U.length; n += 1) F[n] = dt(ht(t, U, n));
	const K = (t) =>
		w(F[t], 1, 1, () => {
			F[t] = null;
		});
	return {
		c() {
			(e = n('section')),
				(a = n('span')),
				($ = r('✗')),
				(f = s()),
				(d = n('main')),
				(p = n('div')),
				v(E.$$.fragment),
				(D = s()),
				v(T.$$.fragment),
				(L = s()),
				(G = n('div'));
			for (let t = 0; t < F.length; t += 1) F[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'SECTION', { class: !0 });
			var n = l(e);
			a = i(n, 'SPAN', { class: !0 });
			var s = l(a);
			($ = g(s, '✗')), s.forEach(c), (f = o(n)), (d = i(n, 'MAIN', { class: !0 }));
			var r = l(d);
			p = i(r, 'DIV', { class: !0 });
			var m = l(p);
			b(E.$$.fragment, m),
				m.forEach(c),
				(D = o(r)),
				b(T.$$.fragment, r),
				(L = o(r)),
				(G = i(r, 'DIV', { class: !0 }));
			var u = l(G);
			for (let e = 0; e < F.length; e += 1) F[e].l(u);
			u.forEach(c), r.forEach(c), n.forEach(c), this.h();
		},
		h() {
			m(a, 'class', 'close cursor svelte-2yjgga'),
				m(p, 'class', 'container svelte-2yjgga'),
				m(G, 'class', 'thumbnails-row svelte-2yjgga'),
				m(d, 'class', 'svelte-2yjgga'),
				m(e, 'class', 'lightbox svelte-2yjgga');
		},
		m(n, s) {
			u(n, e, s),
				h(e, a),
				h(a, $),
				h(e, f),
				h(e, d),
				h(d, p),
				x(E, p, null),
				h(d, D),
				x(T, d, null),
				h(d, L),
				h(d, G);
			for (let t = 0; t < F.length; t += 1) F[t].m(G, null);
			(A = !0), _ || ((O = y(a, 'click', t[5])), (_ = !0));
		},
		p(t, [e]) {
			const a = {};
			2 & e && (a.image = t[1].imgurl),
				2 & e && (a.altTag = t[1].name),
				2 & e && (a.attr = t[1].attribution),
				2 & e && (a.slideNo = t[1].id + 1),
				E.$set(a);
			const n = {};
			if ((1 & e && (n.caption = H[t[0]].name), T.$set(n), 17 & e)) {
				let a;
				for (U = H, a = 0; a < U.length; a += 1) {
					const n = ht(t, U, a);
					F[a]
						? (F[a].p(n, e), k(F[a], 1))
						: ((F[a] = dt(n)), F[a].c(), k(F[a], 1), F[a].m(G, null));
				}
				for (N(), a = U.length; a < F.length; a += 1) K(a);
				S();
			}
		},
		i(t) {
			if (!A) {
				k(E.$$.fragment, t), k(T.$$.fragment, t);
				for (let t = 0; t < U.length; t += 1) k(F[t]);
				j(() => {
					R && R.end(1), M || (M = V(e, B, { x: -300 })), M.start();
				}),
					(A = !0);
			}
		},
		o(t) {
			w(E.$$.fragment, t), w(T.$$.fragment, t), (F = F.filter(Boolean));
			for (let e = 0; e < F.length; e += 1) w(F[e]);
			M && M.invalidate(), (R = C(e, q, {})), (A = !1);
		},
		d(t) {
			t && c(e), I(E), I(T), P(F, t), t && R && R.end(), (_ = !1), O();
		}
	};
}
function vt(t, e, a) {
	let n,
		{ imageShowingIndex: s = 0 } = e;
	const r = (t) => a(0, (s = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && a(0, (s = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(s), 1 & t.$$.dirty && a(1, (n = H[s]));
		}),
		[
			s,
			n,
			() => {
				a(0, s === H.length - 1 ? (s = 0) : (s += 1));
			},
			() => {
				a(0, 0 === s ? (s = H.length - 1) : (s -= 1));
			},
			r,
			function (e) {
				E(t, e);
			},
			(t) => r(t)
		]
	);
}
class bt extends t {
	constructor(t) {
		super(), e(this, t, vt, pt, a, { imageShowingIndex: 0 });
	}
}
function xt(t, e, a) {
	const n = t.slice();
	return (n[1] = e[a].id), (n[2] = e[a].imgurl), (n[3] = e[a].name), n;
}
function kt(t) {
	let e, a, r, g, $, f;
	return {
		c() {
			(e = n('div')), (a = n('img')), (g = s()), this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			(a = i(n, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })),
				(g = o(n)),
				n.forEach(c),
				this.h();
		},
		h() {
			m(a, 'id', t[1]),
				a.src !== (r = t[2]) && m(a, 'src', r),
				m(a, 'alt', t[3]),
				m(a, 'class', 'svelte-16smak5'),
				m(e, 'class', 'demo-cont svelte-16smak5');
		},
		m(n, s) {
			u(n, e, s), h(e, a), h(e, g), $ || ((f = y(a, 'click', t[0])), ($ = !0));
		},
		p: p,
		d(t) {
			t && c(e), ($ = !1), f();
		}
	};
}
function wt(t) {
	let e,
		a = H,
		s = [];
	for (let n = 0; n < a.length; n += 1) s[n] = kt(xt(t, a, n));
	return {
		c() {
			e = n('div');
			for (let t = 0; t < s.length; t += 1) s[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var a = l(e);
			for (let e = 0; e < s.length; e += 1) s[e].l(a);
			a.forEach(c), this.h();
		},
		h() {
			m(e, 'class', 'demo-img-row svelte-16smak5');
		},
		m(t, a) {
			u(t, e, a);
			for (let n = 0; n < s.length; n += 1) s[n].m(e, null);
		},
		p(t, [n]) {
			if (0 & n) {
				let r;
				for (a = H, r = 0; r < a.length; r += 1) {
					const i = xt(t, a, r);
					s[r] ? s[r].p(i, n) : ((s[r] = kt(i)), s[r].c(), s[r].m(e, null));
				}
				for (; r < s.length; r += 1) s[r].d(1);
				s.length = a.length;
			}
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), P(s, t);
		}
	};
}
function It(t) {
	return [
		function (e) {
			E(t, e);
		}
	];
}
class yt extends t {
	constructor(t) {
		super(), e(this, t, It, wt, a, {});
	}
}
function Et(t) {
	let e, a;
	return (
		(e = new yt({})),
		e.$on('click', t[2]),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				b(e.$$.fragment, t);
			},
			m(t, n) {
				x(e, t, n), (a = !0);
			},
			p: p,
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Dt(t) {
	let e, a;
	return (
		(e = new bt({ props: { imageShowingIndex: t[1] } })),
		e.$on('click', t[3]),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				b(e.$$.fragment, t);
			},
			m(t, n) {
				x(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				2 & a && (n.imageShowingIndex = t[1]), e.$set(n);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Tt(t) {
	let e, a, m, $, f, d, p, v, b;
	const x = [Dt, Et],
		I = [];
	function E(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = E(t)),
		(a = I[e] = x[e](t)),
		{
			c() {
				a.c(), (m = s()), ($ = n('section')), (f = n('button')), (d = r('Lightbox'));
			},
			l(t) {
				a.l(t), (m = o(t)), ($ = i(t, 'SECTION', {}));
				var e = l($);
				f = i(e, 'BUTTON', {});
				var n = l(f);
				(d = g(n, 'Lightbox')), n.forEach(c), e.forEach(c);
			},
			m(a, n) {
				I[e].m(a, n),
					u(a, m, n),
					u(a, $, n),
					h($, f),
					h(f, d),
					(p = !0),
					v || ((b = y(f, 'click', t[4])), (v = !0));
			},
			p(t, [n]) {
				let s = e;
				(e = E(t)),
					e === s
						? I[e].p(t, n)
						: (N(),
						  w(I[s], 1, 1, () => {
								I[s] = null;
						  }),
						  S(),
						  (a = I[e]),
						  a ? a.p(t, n) : ((a = I[e] = x[e](t)), a.c()),
						  k(a, 1),
						  a.m(m.parentNode, m));
			},
			i(t) {
				p || (k(a), (p = !0));
			},
			o(t) {
				w(a), (p = !1);
			},
			d(t) {
				I[e].d(t), t && c(m), t && c($), (v = !1), b();
			}
		}
	);
}
function Nt(t, e, a) {
	let n = !1,
		s = 0;
	return [
		n,
		s,
		(t) => {
			a(1, (s = Number(t.target.id))), a(0, (n = !0));
		},
		() => a(0, (n = !1)),
		() => a(0, (n = !0))
	];
}
class St extends t {
	constructor(t) {
		super(), e(this, t, Nt, Tt, a, {});
	}
}
function Pt(t) {
	let e, a;
	return (
		(e = new rt({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				b(e.$$.fragment, t);
			},
			m(t, n) {
				x(e, t, n), (a = !0);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function jt(t) {
	let e, a;
	return (
		(e = new St({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				b(e.$$.fragment, t);
			},
			m(t, n) {
				x(e, t, n), (a = !0);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Vt(t) {
	let e, a;
	return (
		(e = new F({})),
		{
			c() {
				v(e.$$.fragment);
			},
			l(t) {
				b(e.$$.fragment, t);
			},
			m(t, n) {
				x(e, t, n), (a = !0);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				w(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function Ct(t) {
	let e, a, n, r, i, l;
	return (
		(e = new G({
			props: { id: 'slidegallery', variante: 0, $$slots: { default: [Pt] }, $$scope: { ctx: t } }
		})),
		(n = new G({
			props: { id: 'lightboxgallery', variante: 2, $$slots: { default: [jt] }, $$scope: { ctx: t } }
		})),
		(i = new G({
			props: { id: 'flipcard', variante: 2, $$slots: { default: [Vt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				v(e.$$.fragment), (a = s()), v(n.$$.fragment), (r = s()), v(i.$$.fragment);
			},
			l(t) {
				b(e.$$.fragment, t), (a = o(t)), b(n.$$.fragment, t), (r = o(t)), b(i.$$.fragment, t);
			},
			m(t, s) {
				x(e, t, s), u(t, a, s), x(n, t, s), u(t, r, s), x(i, t, s), (l = !0);
			},
			p(t, [a]) {
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: t }), n.$set(r);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: t }), i.$set(l);
			},
			i(t) {
				l || (k(e.$$.fragment, t), k(n.$$.fragment, t), k(i.$$.fragment, t), (l = !0));
			},
			o(t) {
				w(e.$$.fragment, t), w(n.$$.fragment, t), w(i.$$.fragment, t), (l = !1);
			},
			d(t) {
				I(e, t), t && c(a), I(n, t), t && c(r), I(i, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Ct, a, {});
	}
}
