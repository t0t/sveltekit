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
	b as m,
	o as g,
	P as $,
	G as f,
	f as u,
	g as d,
	h,
	n as p,
	p as v,
	q as b,
	r as x,
	w as k,
	x as w,
	y as I,
	H as y,
	F as E,
	K as D,
	Y as T,
	C as N,
	D as S,
	J as P,
	Q as V,
	Z as C,
	_ as j
} from '../../chunks/index-d91e1ed8.js';
import { B as L, a as B, f as q } from '../../chunks/Button-e3a987c3.js';
import { S as G } from '../../chunks/Section-15bca940.js';
import '../../chunks/index-78b22dae.js';
const R = [
	{ word: 'Velociraptor', image: '/img/velociraptor.jpg' },
	{ word: 'Raptor Delta', image: '/img/raptordelta.jpeg' },
	{ word: 'vesica piscis', image: '/img/bg3.jpg' },
	{ word: 'vesica piscis', image: '/img/bg4.jpg' }
];
function _(t) {
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
			var g = l(x);
			(k = m(g, t[0])), g.forEach(c), r.forEach(c), this.h();
		},
		h() {
			g(a, 'class', 'image svelte-3n219r'),
				$(a, 'background-image', 'url(' + t[1] + ')'),
				g(e, 'class', 'flip-box-front svelte-3n219r'),
				g(b, 'class', 'flip-box-back svelte-3n219r'),
				f(b, 'NoRebelesTxt', t[2]);
		},
		m(t, n) {
			u(t, e, n), d(e, a), u(t, v, n), u(t, b, n), d(b, x), d(x, k);
		},
		p(t, [e]) {
			2 & e && $(a, 'background-image', 'url(' + t[1] + ')'),
				1 & e && h(k, t[0]),
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
class M extends t {
	constructor(t) {
		super(), e(this, t, A, _, a, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function O(t) {
	let e, a, r, m, $, h, p, y, E, D, T;
	return (
		(r = new M({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(h = new L({ props: { variante: 4, text: '↜' } })),
		h.$on('click', t[4]),
		(y = new L({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		y.$on('click', t[3]),
		(D = new L({ props: { variante: 4, text: '⤳' } })),
		D.$on('click', t[5]),
		{
			c() {
				(e = n('div')),
					(a = n('div')),
					v(r.$$.fragment),
					(m = s()),
					($ = n('div')),
					v(h.$$.fragment),
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
				b(r.$$.fragment, s), s.forEach(c), (m = o(n)), ($ = i(n, 'DIV', { class: !0 }));
				var g = l($);
				b(h.$$.fragment, g),
					(p = o(g)),
					b(y.$$.fragment, g),
					(E = o(g)),
					b(D.$$.fragment, g),
					g.forEach(c),
					n.forEach(c),
					this.h();
			},
			h() {
				g(a, 'class', 'flip-box-inner svelte-1xdkst'),
					f(a, 'flip-it', t[0]),
					g($, 'class', 'ButtonControls svelte-1xdkst'),
					g(e, 'class', 'flip-box svelte-1xdkst');
			},
			m(t, n) {
				u(t, e, n),
					d(e, a),
					x(r, a, null),
					d(e, m),
					d(e, $),
					x(h, $, null),
					d($, p),
					x(y, $, null),
					d($, E),
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
					k(h.$$.fragment, t),
					k(y.$$.fragment, t),
					k(D.$$.fragment, t),
					(T = !0));
			},
			o(t) {
				w(r.$$.fragment, t),
					w(h.$$.fragment, t),
					w(y.$$.fragment, t),
					w(D.$$.fragment, t),
					(T = !1);
			},
			d(t) {
				t && c(e), I(r), I(h), I(y), I(D);
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
			64 & t.$$.dirty && a(1, (n = R[i].image)), 64 & t.$$.dirty && a(2, (s = R[i].word));
		}),
		[
			r,
			n,
			s,
			() => a(0, (r = !r)),
			() => {
				a(0, (r = !1)), a(6, 0 === i ? (i = R.length - 1) : (i -= 1));
			},
			() => {
				a(0, (r = !1)), a(6, i === R.length - 1 ? (i = 0) : (i += 1));
			},
			i
		]
	);
}
class H extends t {
	constructor(t) {
		super(), e(this, t, U, O, a, {});
	}
}
const F = [
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
function J(t) {
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
			($ = m(r, t[0])),
				(f = m(r, ' / ')),
				(v = m(r, t[1])),
				r.forEach(c),
				(b = o(s)),
				(x = i(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				s.forEach(c),
				this.h();
		},
		h() {
			g(a, 'class', 'numbertext svelte-3q5nt5'),
				x.src !== (k = t[2]) && g(x, 'src', k),
				g(x, 'alt', t[3]),
				g(x, 'title', t[4]),
				g(x, 'class', 'svelte-3q5nt5'),
				g(e, 'class', 'mySlides svelte-3q5nt5');
		},
		m(t, n) {
			u(t, e, n), d(e, a), d(a, $), d(a, f), d(a, v), d(e, b), d(e, x);
		},
		p(t, [e]) {
			1 & e && h($, t[0]),
				2 & e && h(v, t[1]),
				4 & e && x.src !== (k = t[2]) && g(x, 'src', k),
				8 & e && g(x, 'alt', t[3]),
				16 & e && g(x, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e);
		}
	};
}
function K(t, e, a) {
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
class Q extends t {
	constructor(t) {
		super(), e(this, t, K, J, a, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function Y(t) {
	let e, a, s, r, o, m;
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
			g(a, 'class', 'sample cursor svelte-lou512'),
				g(a, 'id', t[3]),
				a.src !== (s = t[0]) && g(a, 'src', s),
				g(a, 'alt', t[1]),
				g(a, 'title', (r = 'Image from ' + t[2])),
				f(a, 'active', t[4]),
				g(e, 'class', 'thumbnail-cont svelte-lou512');
		},
		m(n, s) {
			u(n, e, s), d(e, a), o || ((m = y(a, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && g(a, 'id', t[3]),
				1 & e && a.src !== (s = t[0]) && g(a, 'src', s),
				2 & e && g(a, 'alt', t[1]),
				4 & e && r !== (r = 'Image from ' + t[2]) && g(a, 'title', r),
				16 & e && f(a, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (o = !1), m();
		}
	};
}
function Z(t, e, a) {
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
class z extends t {
	constructor(t) {
		super(), e(this, t, Z, Y, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function W(t) {
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
			($ = m(r, '❮')), r.forEach(c), (f = o(s)), (v = i(s, 'P', { id: !0, class: !0 }));
			var g = l(v);
			(b = m(g, t[0])), g.forEach(c), (x = o(s)), (k = i(s, 'A', { href: !0, class: !0 }));
			var u = l(k);
			(w = m(u, '❯')), u.forEach(c), s.forEach(c), this.h();
		},
		h() {
			g(a, 'href', '#arrowL'),
				g(a, 'class', 'arrow prev svelte-1yy3u47'),
				g(v, 'id', 'caption'),
				g(v, 'class', 'svelte-1yy3u47'),
				g(k, 'href', '#arrowR'),
				g(k, 'class', 'arrow next svelte-1yy3u47'),
				g(e, 'class', 'caption-container svelte-1yy3u47');
		},
		m(n, s) {
			u(n, e, s),
				d(e, a),
				d(a, $),
				d(e, f),
				d(e, v),
				d(v, b),
				d(e, x),
				d(e, k),
				d(k, w),
				I || ((E = [y(a, 'click', t[2]), y(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(b, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (I = !1), D(E);
		}
	};
}
function X(t, e, a) {
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
		super(), e(this, t, X, W, a, { caption: 0 });
	}
}
function et(t, e, a) {
	const n = t.slice();
	return (n[6] = e[a].id), (n[7] = e[a].imgurl), (n[8] = e[a].name), (n[9] = e[a].attribution), n;
}
function at(t) {
	let e, a;
	return (
		(e = new z({
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
	let e, a, r, m, $, f, d;
	(a = new Q({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: F.length
		}
	})),
		(m = new tt({ props: { caption: F[t[0]].name } })),
		m.$on('prevClick', t[3]),
		m.$on('nextClick', t[2]);
	let h = F,
		p = [];
	for (let n = 0; n < h.length; n += 1) p[n] = at(et(t, h, n));
	const y = (t) =>
		w(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(e = n('div')), v(a.$$.fragment), (r = s()), v(m.$$.fragment), ($ = s()), (f = n('div'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			b(a.$$.fragment, n),
				n.forEach(c),
				(r = o(t)),
				b(m.$$.fragment, t),
				($ = o(t)),
				(f = i(t, 'DIV', { class: !0 }));
			var s = l(f);
			for (let e = 0; e < p.length; e += 1) p[e].l(s);
			s.forEach(c), this.h();
		},
		h() {
			g(e, 'class', 'container svelte-1qcybd5'), g(f, 'class', 'thumbnails-row svelte-1qcybd5');
		},
		m(t, n) {
			u(t, e, n), x(a, e, null), u(t, r, n), x(m, t, n), u(t, $, n), u(t, f, n);
			for (let e = 0; e < p.length; e += 1) p[e].m(f, null);
			d = !0;
		},
		p(t, [e]) {
			const n = {};
			2 & e && (n.image = t[1].imgurl),
				2 & e && (n.altTag = t[1].name),
				2 & e && (n.attr = t[1].attribution),
				2 & e && (n.slideNo = t[1].id + 1),
				a.$set(n);
			const s = {};
			if ((1 & e && (s.caption = F[t[0]].name), m.$set(s), 17 & e)) {
				let a;
				for (h = F, a = 0; a < h.length; a += 1) {
					const n = et(t, h, a);
					p[a]
						? (p[a].p(n, e), k(p[a], 1))
						: ((p[a] = at(n)), p[a].c(), k(p[a], 1), p[a].m(f, null));
				}
				for (N(), a = h.length; a < p.length; a += 1) y(a);
				S();
			}
		},
		i(t) {
			if (!d) {
				k(a.$$.fragment, t), k(m.$$.fragment, t);
				for (let t = 0; t < h.length; t += 1) k(p[t]);
				d = !0;
			}
		},
		o(t) {
			w(a.$$.fragment, t), w(m.$$.fragment, t), (p = p.filter(Boolean));
			for (let e = 0; e < p.length; e += 1) w(p[e]);
			d = !1;
		},
		d(t) {
			t && c(e), I(a), t && c(r), I(m, t), t && c($), t && c(f), P(p, t);
		}
	};
}
function st(t, e, a) {
	let n,
		s = 0;
	const r = (t) => a(0, (s = t));
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(s), 1 & t.$$.dirty && a(1, (n = F[s]));
		}),
		[
			s,
			n,
			() => {
				a(0, s === F.length - 1 ? (s = 0) : (s += 1));
			},
			() => {
				a(0, 0 === s ? (s = F.length - 1) : (s -= 1));
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
			($ = m(r, t[0])),
				(f = m(r, ' / ')),
				(v = m(r, t[1])),
				r.forEach(c),
				(b = o(s)),
				(x = i(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				s.forEach(c),
				this.h();
		},
		h() {
			g(a, 'class', 'numbertext svelte-3q5nt5'),
				x.src !== (k = t[2]) && g(x, 'src', k),
				g(x, 'alt', t[3]),
				g(x, 'title', t[4]),
				g(x, 'class', 'svelte-3q5nt5'),
				g(e, 'class', 'mySlides svelte-3q5nt5');
		},
		m(t, n) {
			u(t, e, n), d(e, a), d(a, $), d(a, f), d(a, v), d(e, b), d(e, x);
		},
		p(t, [e]) {
			1 & e && h($, t[0]),
				2 & e && h(v, t[1]),
				4 & e && x.src !== (k = t[2]) && g(x, 'src', k),
				8 & e && g(x, 'alt', t[3]),
				16 & e && g(x, 'title', t[4]);
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
	let e, a, s, r, o, m;
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
			g(a, 'class', 'sample cursor svelte-lou512'),
				g(a, 'id', t[3]),
				a.src !== (s = t[0]) && g(a, 'src', s),
				g(a, 'alt', t[1]),
				g(a, 'title', (r = 'Image from ' + t[2])),
				f(a, 'active', t[4]),
				g(e, 'class', 'thumbnail-cont svelte-lou512');
		},
		m(n, s) {
			u(n, e, s), d(e, a), o || ((m = y(a, 'click', t[5])), (o = !0));
		},
		p(t, [e]) {
			8 & e && g(a, 'id', t[3]),
				1 & e && a.src !== (s = t[0]) && g(a, 'src', s),
				2 & e && g(a, 'alt', t[1]),
				4 & e && r !== (r = 'Image from ' + t[2]) && g(a, 'title', r),
				16 & e && f(a, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && c(e), (o = !1), m();
		}
	};
}
function mt(t, e, a) {
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
class gt extends t {
	constructor(t) {
		super(), e(this, t, mt, ot, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
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
			($ = m(r, '❮')), r.forEach(c), (f = o(s)), (v = i(s, 'P', { id: !0, class: !0 }));
			var g = l(v);
			(b = m(g, t[0])), g.forEach(c), (x = o(s)), (k = i(s, 'A', { href: !0, class: !0 }));
			var u = l(k);
			(w = m(u, '❯')), u.forEach(c), s.forEach(c), this.h();
		},
		h() {
			g(a, 'href', '#arrowL'),
				g(a, 'class', 'arrow prev svelte-1yy3u47'),
				g(v, 'id', 'caption'),
				g(v, 'class', 'svelte-1yy3u47'),
				g(k, 'href', '#arrowR'),
				g(k, 'class', 'arrow next svelte-1yy3u47'),
				g(e, 'class', 'caption-container svelte-1yy3u47');
		},
		m(n, s) {
			u(n, e, s),
				d(e, a),
				d(a, $),
				d(e, f),
				d(e, v),
				d(v, b),
				d(e, x),
				d(e, k),
				d(k, w),
				I || ((E = [y(a, 'click', t[2]), y(k, 'click', t[3])]), (I = !0));
		},
		p(t, [e]) {
			1 & e && h(b, t[0]);
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
function dt(t, e, a) {
	const n = t.slice();
	return (n[7] = e[a].id), (n[8] = e[a].imgurl), (n[9] = e[a].name), n;
}
function ht(t) {
	let e, a;
	return (
		(e = new gt({
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
	let e, a, $, f, h, p, E, D, T, L, G, R, _, A, M, O;
	(E = new ct({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: F.length
		}
	})),
		(T = new ut({ props: { caption: F[t[0]].name } })),
		T.$on('prevClick', t[3]),
		T.$on('nextClick', t[2]);
	let U = F,
		H = [];
	for (let n = 0; n < U.length; n += 1) H[n] = ht(dt(t, U, n));
	const J = (t) =>
		w(H[t], 1, 1, () => {
			H[t] = null;
		});
	return {
		c() {
			(e = n('section')),
				(a = n('span')),
				($ = r('✗')),
				(f = s()),
				(h = n('main')),
				(p = n('div')),
				v(E.$$.fragment),
				(D = s()),
				v(T.$$.fragment),
				(L = s()),
				(G = n('div'));
			for (let t = 0; t < H.length; t += 1) H[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'SECTION', { class: !0 });
			var n = l(e);
			a = i(n, 'SPAN', { class: !0 });
			var s = l(a);
			($ = m(s, '✗')), s.forEach(c), (f = o(n)), (h = i(n, 'MAIN', { class: !0 }));
			var r = l(h);
			p = i(r, 'DIV', { class: !0 });
			var g = l(p);
			b(E.$$.fragment, g),
				g.forEach(c),
				(D = o(r)),
				b(T.$$.fragment, r),
				(L = o(r)),
				(G = i(r, 'DIV', { class: !0 }));
			var u = l(G);
			for (let e = 0; e < H.length; e += 1) H[e].l(u);
			u.forEach(c), r.forEach(c), n.forEach(c), this.h();
		},
		h() {
			g(a, 'class', 'close cursor svelte-1snboxk'),
				g(p, 'class', 'container svelte-1snboxk'),
				g(G, 'class', 'thumbnails-row svelte-1snboxk'),
				g(h, 'class', 'svelte-1snboxk'),
				g(e, 'class', 'lightbox svelte-1snboxk');
		},
		m(n, s) {
			u(n, e, s),
				d(e, a),
				d(a, $),
				d(e, f),
				d(e, h),
				d(h, p),
				x(E, p, null),
				d(h, D),
				x(T, h, null),
				d(h, L),
				d(h, G);
			for (let t = 0; t < H.length; t += 1) H[t].m(G, null);
			(A = !0), M || ((O = y(a, 'click', t[5])), (M = !0));
		},
		p(t, [e]) {
			const a = {};
			2 & e && (a.image = t[1].imgurl),
				2 & e && (a.altTag = t[1].name),
				2 & e && (a.attr = t[1].attribution),
				2 & e && (a.slideNo = t[1].id + 1),
				E.$set(a);
			const n = {};
			if ((1 & e && (n.caption = F[t[0]].name), T.$set(n), 17 & e)) {
				let a;
				for (U = F, a = 0; a < U.length; a += 1) {
					const n = dt(t, U, a);
					H[a]
						? (H[a].p(n, e), k(H[a], 1))
						: ((H[a] = ht(n)), H[a].c(), k(H[a], 1), H[a].m(G, null));
				}
				for (N(), a = U.length; a < H.length; a += 1) J(a);
				S();
			}
		},
		i(t) {
			if (!A) {
				k(E.$$.fragment, t), k(T.$$.fragment, t);
				for (let t = 0; t < U.length; t += 1) k(H[t]);
				V(() => {
					_ && _.end(1), R || (R = C(e, B, { x: -300 })), R.start();
				}),
					(A = !0);
			}
		},
		o(t) {
			w(E.$$.fragment, t), w(T.$$.fragment, t), (H = H.filter(Boolean));
			for (let e = 0; e < H.length; e += 1) w(H[e]);
			R && R.invalidate(), (_ = j(e, q, {})), (A = !1);
		},
		d(t) {
			t && c(e), I(E), I(T), P(H, t), t && _ && _.end(), (M = !1), O();
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
			1 & t.$$.dirty && console.log(s), 1 & t.$$.dirty && a(1, (n = F[s]));
		}),
		[
			s,
			n,
			() => {
				a(0, s === F.length - 1 ? (s = 0) : (s += 1));
			},
			() => {
				a(0, 0 === s ? (s = F.length - 1) : (s -= 1));
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
	let e, a, r, m, $, f;
	return {
		c() {
			(e = n('div')), (a = n('img')), (m = s()), this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			(a = i(n, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })),
				(m = o(n)),
				n.forEach(c),
				this.h();
		},
		h() {
			g(a, 'id', t[1]),
				a.src !== (r = t[2]) && g(a, 'src', r),
				g(a, 'alt', t[3]),
				g(a, 'class', 'svelte-16smak5'),
				g(e, 'class', 'demo-cont svelte-16smak5');
		},
		m(n, s) {
			u(n, e, s), d(e, a), d(e, m), $ || ((f = y(a, 'click', t[0])), ($ = !0));
		},
		p: p,
		d(t) {
			t && c(e), ($ = !1), f();
		}
	};
}
function wt(t) {
	let e,
		a = F,
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
			g(e, 'class', 'demo-img-row svelte-16smak5');
		},
		m(t, a) {
			u(t, e, a);
			for (let n = 0; n < s.length; n += 1) s[n].m(e, null);
		},
		p(t, [n]) {
			if (0 & n) {
				let r;
				for (a = F, r = 0; r < a.length; r += 1) {
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
	let e, a, g, $, f, h, p, v, b;
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
				a.c(), (g = s()), ($ = n('section')), (f = n('button')), (h = r('Lightbox'));
			},
			l(t) {
				a.l(t), (g = o(t)), ($ = i(t, 'SECTION', {}));
				var e = l($);
				f = i(e, 'BUTTON', {});
				var n = l(f);
				(h = m(n, 'Lightbox')), n.forEach(c), e.forEach(c);
			},
			m(a, n) {
				I[e].m(a, n),
					u(a, g, n),
					u(a, $, n),
					d($, f),
					d(f, h),
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
						  a.m(g.parentNode, g));
			},
			i(t) {
				p || (k(a), (p = !0));
			},
			o(t) {
				w(a), (p = !1);
			},
			d(t) {
				I[e].d(t), t && c(g), t && c($), (v = !1), b();
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
function Vt(t) {
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
function Ct(t) {
	let e, a;
	return (
		(e = new H({})),
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
	let e, a, n, r, i, l;
	return (
		(e = new G({
			props: { id: 'slidegallery', variante: 0, $$slots: { default: [Pt] }, $$scope: { ctx: t } }
		})),
		(n = new G({
			props: { id: 'lightboxgallery', variante: 2, $$slots: { default: [Vt] }, $$scope: { ctx: t } }
		})),
		(i = new G({
			props: { id: 'flipcard', variante: 2, $$slots: { default: [Ct] }, $$scope: { ctx: t } }
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
		super(), e(this, t, null, jt, a, {});
	}
}
