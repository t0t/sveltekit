import {
	S as t,
	i as a,
	s as e,
	e as i,
	j as n,
	t as r,
	c as s,
	a as l,
	d as o,
	l as c,
	b as m,
	o as g,
	L as $,
	G as f,
	f as u,
	g as d,
	h,
	n as p,
	p as v,
	q as b,
	r as k,
	w as x,
	x as w,
	y,
	H as D,
	O as I,
	P,
	Y as j,
	C as E,
	D as T,
	J as C
} from '../../chunks/index-a07a4dd8.js';
import { B as V } from '../../chunks/Button-6edc0c58.js';
import { S as B } from '../../chunks/Section-114a1592.js';
const N = [
	{ word: 'Velociraptor', image: '/img/velociraptor.jpg' },
	{ word: 'Raptor Delta', image: '/img/raptordelta.jpeg' },
	{ word: 'vesica piscis', image: '/img/bg3.jpg' },
	{ word: 'vesica piscis', image: '/img/bg4.jpg' }
];
function S(t) {
	let a, e, v, b, k, x;
	return {
		c() {
			(a = i('div')),
				(e = i('div')),
				(v = n()),
				(b = i('div')),
				(k = i('h2')),
				(x = r(t[0])),
				this.h();
		},
		l(i) {
			a = s(i, 'DIV', { class: !0 });
			var n = l(a);
			(e = s(n, 'DIV', { class: !0, style: !0 })),
				l(e).forEach(o),
				n.forEach(o),
				(v = c(i)),
				(b = s(i, 'DIV', { class: !0 }));
			var r = l(b);
			k = s(r, 'H2', {});
			var g = l(k);
			(x = m(g, t[0])), g.forEach(o), r.forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'image svelte-3n219r'),
				$(e, 'background-image', 'url(' + t[1] + ')'),
				g(a, 'class', 'flip-box-front svelte-3n219r'),
				g(b, 'class', 'flip-box-back svelte-3n219r'),
				f(b, 'NoRebelesTxt', t[2]);
		},
		m(t, i) {
			u(t, a, i), d(a, e), u(t, v, i), u(t, b, i), d(b, k), d(k, x);
		},
		p(t, [a]) {
			2 & a && $(e, 'background-image', 'url(' + t[1] + ')'),
				1 & a && h(x, t[0]),
				4 & a && f(b, 'NoRebelesTxt', t[2]);
		},
		i: p,
		o: p,
		d(t) {
			t && o(a), t && o(v), t && o(b);
		}
	};
}
function L(t, a, e) {
	let { back_txt: i } = a,
		{ foto: n } = a,
		{ showCarBack: r } = a;
	return (
		(t.$$set = (t) => {
			'back_txt' in t && e(0, (i = t.back_txt)),
				'foto' in t && e(1, (n = t.foto)),
				'showCarBack' in t && e(2, (r = t.showCarBack));
		}),
		[i, n, r]
	);
}
class q extends t {
	constructor(t) {
		super(), a(this, t, L, S, e, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function R(t) {
	let a, e, r, m, $, h, p, D, I, P, j;
	return (
		(r = new q({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(h = new V({ props: { variante: 4, text: '↜' } })),
		h.$on('click', t[4]),
		(D = new V({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		D.$on('click', t[3]),
		(P = new V({ props: { variante: 4, text: '⤳' } })),
		P.$on('click', t[5]),
		{
			c() {
				(a = i('div')),
					(e = i('div')),
					v(r.$$.fragment),
					(m = n()),
					($ = i('div')),
					v(h.$$.fragment),
					(p = n()),
					v(D.$$.fragment),
					(I = n()),
					v(P.$$.fragment),
					this.h();
			},
			l(t) {
				a = s(t, 'DIV', { class: !0 });
				var i = l(a);
				e = s(i, 'DIV', { class: !0 });
				var n = l(e);
				b(r.$$.fragment, n), n.forEach(o), (m = c(i)), ($ = s(i, 'DIV', { class: !0 }));
				var g = l($);
				b(h.$$.fragment, g),
					(p = c(g)),
					b(D.$$.fragment, g),
					(I = c(g)),
					b(P.$$.fragment, g),
					g.forEach(o),
					i.forEach(o),
					this.h();
			},
			h() {
				g(e, 'class', 'flip-box-inner svelte-1xdkst'),
					f(e, 'flip-it', t[0]),
					g($, 'class', 'ButtonControls svelte-1xdkst'),
					g(a, 'class', 'flip-box svelte-1xdkst');
			},
			m(t, i) {
				u(t, a, i),
					d(a, e),
					k(r, e, null),
					d(a, m),
					d(a, $),
					k(h, $, null),
					d($, p),
					k(D, $, null),
					d($, I),
					k(P, $, null),
					(j = !0);
			},
			p(t, [a]) {
				const i = {};
				1 & a && (i.showCarBack = t[0]),
					2 & a && (i.foto = t[1]),
					4 & a && (i.back_txt = t[2]),
					r.$set(i),
					1 & a && f(e, 'flip-it', t[0]);
				const n = {};
				1 & a && (n.text = t[0] ? '⤿' : '⤾'), D.$set(n);
			},
			i(t) {
				j ||
					(x(r.$$.fragment, t),
					x(h.$$.fragment, t),
					x(D.$$.fragment, t),
					x(P.$$.fragment, t),
					(j = !0));
			},
			o(t) {
				w(r.$$.fragment, t),
					w(h.$$.fragment, t),
					w(D.$$.fragment, t),
					w(P.$$.fragment, t),
					(j = !1);
			},
			d(t) {
				t && o(a), y(r), y(h), y(D), y(P);
			}
		}
	);
}
function _(t, a, e) {
	let i, n;
	let r = !1,
		s = 0;
	return (
		(t.$$.update = () => {
			64 & t.$$.dirty && e(1, (i = N[s].image)), 64 & t.$$.dirty && e(2, (n = N[s].word));
		}),
		[
			r,
			i,
			n,
			() => e(0, (r = !r)),
			() => {
				e(0, (r = !1)), e(6, 0 === s ? (s = N.length - 1) : (s -= 1));
			},
			() => {
				e(0, (r = !1)), e(6, s === N.length - 1 ? (s = 0) : (s += 1));
			},
			s
		]
	);
}
class G extends t {
	constructor(t) {
		super(), a(this, t, _, R, e, {});
	}
}
const A = [
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
function H(t) {
	let a, e, $, f, v, b, k, x;
	return {
		c() {
			(a = i('div')),
				(e = i('div')),
				($ = r(t[0])),
				(f = r(' / ')),
				(v = r(t[1])),
				(b = n()),
				(k = i('img')),
				this.h();
		},
		l(i) {
			a = s(i, 'DIV', { class: !0 });
			var n = l(a);
			e = s(n, 'DIV', { class: !0 });
			var r = l(e);
			($ = m(r, t[0])),
				(f = m(r, ' / ')),
				(v = m(r, t[1])),
				r.forEach(o),
				(b = c(n)),
				(k = s(n, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				n.forEach(o),
				this.h();
		},
		h() {
			g(e, 'class', 'numbertext svelte-3q5nt5'),
				k.src !== (x = t[2]) && g(k, 'src', x),
				g(k, 'alt', t[3]),
				g(k, 'title', t[4]),
				g(k, 'class', 'svelte-3q5nt5'),
				g(a, 'class', 'mySlides svelte-3q5nt5');
		},
		m(t, i) {
			u(t, a, i), d(a, e), d(e, $), d(e, f), d(e, v), d(a, b), d(a, k);
		},
		p(t, [a]) {
			1 & a && h($, t[0]),
				2 & a && h(v, t[1]),
				4 & a && k.src !== (x = t[2]) && g(k, 'src', x),
				8 & a && g(k, 'alt', t[3]),
				16 & a && g(k, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && o(a);
		}
	};
}
function M(t, a, e) {
	let { slideNo: i } = a,
		{ totalSlides: n } = a,
		{ image: r } = a,
		{ altTag: s } = a,
		{ attr: l } = a;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && e(0, (i = t.slideNo)),
				'totalSlides' in t && e(1, (n = t.totalSlides)),
				'image' in t && e(2, (r = t.image)),
				'altTag' in t && e(3, (s = t.altTag)),
				'attr' in t && e(4, (l = t.attr));
		}),
		[i, n, r, s, l]
	);
}
class U extends t {
	constructor(t) {
		super(), a(this, t, M, H, e, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, attr: 4 });
	}
}
function J(t) {
	let a, e, n, r, c, m;
	return {
		c() {
			(a = i('div')), (e = i('img')), this.h();
		},
		l(t) {
			a = s(t, 'DIV', { class: !0 });
			var i = l(a);
			(e = s(i, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), i.forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'sample cursor svelte-3romed'),
				g(e, 'id', t[3]),
				e.src !== (n = t[0]) && g(e, 'src', n),
				g(e, 'alt', t[1]),
				g(e, 'title', (r = 'Image from ' + t[2])),
				f(e, 'active', t[4]),
				g(a, 'class', 'thumbnail-cont svelte-3romed');
		},
		m(i, n) {
			u(i, a, n), d(a, e), c || ((m = D(e, 'click', t[5])), (c = !0));
		},
		p(t, [a]) {
			8 & a && g(e, 'id', t[3]),
				1 & a && e.src !== (n = t[0]) && g(e, 'src', n),
				2 & a && g(e, 'alt', t[1]),
				4 & a && r !== (r = 'Image from ' + t[2]) && g(e, 'title', r),
				16 & a && f(e, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && o(a), (c = !1), m();
		}
	};
}
function O(t, a, e) {
	let { thumbImg: i } = a,
		{ altTag: n } = a,
		{ titleLink: r } = a,
		{ id: s } = a,
		{ selected: l } = a;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && e(0, (i = t.thumbImg)),
				'altTag' in t && e(1, (n = t.altTag)),
				'titleLink' in t && e(2, (r = t.titleLink)),
				'id' in t && e(3, (s = t.id)),
				'selected' in t && e(4, (l = t.selected));
		}),
		[
			i,
			n,
			r,
			s,
			l,
			function (a) {
				I(t, a);
			}
		]
	);
}
class Y extends t {
	constructor(t) {
		super(), a(this, t, O, J, e, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function z(t) {
	let a, e, $, f, v, b, k, x, w, y, I;
	return {
		c() {
			(a = i('div')),
				(e = i('a')),
				($ = r('❮')),
				(f = n()),
				(v = i('p')),
				(b = r(t[0])),
				(k = n()),
				(x = i('a')),
				(w = r('❯')),
				this.h();
		},
		l(i) {
			a = s(i, 'DIV', { class: !0 });
			var n = l(a);
			e = s(n, 'A', { href: !0, class: !0 });
			var r = l(e);
			($ = m(r, '❮')), r.forEach(o), (f = c(n)), (v = s(n, 'P', { id: !0, class: !0 }));
			var g = l(v);
			(b = m(g, t[0])), g.forEach(o), (k = c(n)), (x = s(n, 'A', { href: !0, class: !0 }));
			var u = l(x);
			(w = m(u, '❯')), u.forEach(o), n.forEach(o), this.h();
		},
		h() {
			g(e, 'href', '#arrowL'),
				g(e, 'class', 'arrow prev svelte-1yy3u47'),
				g(v, 'id', 'caption'),
				g(v, 'class', 'svelte-1yy3u47'),
				g(x, 'href', '#arrowR'),
				g(x, 'class', 'arrow next svelte-1yy3u47'),
				g(a, 'class', 'caption-container svelte-1yy3u47');
		},
		m(i, n) {
			u(i, a, n),
				d(a, e),
				d(e, $),
				d(a, f),
				d(a, v),
				d(v, b),
				d(a, k),
				d(a, x),
				d(x, w),
				y || ((I = [D(e, 'click', t[2]), D(x, 'click', t[3])]), (y = !0));
		},
		p(t, [a]) {
			1 & a && h(b, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && o(a), (y = !1), P(I);
		}
	};
}
function F(t, a, e) {
	let { caption: i } = a;
	const n = j();
	return (
		(t.$$set = (t) => {
			'caption' in t && e(0, (i = t.caption));
		}),
		[i, n, () => n('prevClick'), () => n('nextClick')]
	);
}
class K extends t {
	constructor(t) {
		super(), a(this, t, F, z, e, { caption: 0 });
	}
}
function Q(t, a, e) {
	const i = t.slice();
	return (i[6] = a[e].id), (i[7] = a[e].imgurl), (i[8] = a[e].name), (i[9] = a[e].attribution), i;
}
function W(t) {
	let a, e;
	return (
		(a = new Y({
			props: { thumbImg: t[7], altTag: t[8], titleLink: t[9], id: t[6], selected: t[0] === t[6] }
		})),
		a.$on('click', function () {
			return t[5](t[6]);
		}),
		{
			c() {
				v(a.$$.fragment);
			},
			l(t) {
				b(a.$$.fragment, t);
			},
			m(t, i) {
				k(a, t, i), (e = !0);
			},
			p(e, i) {
				t = e;
				const n = {};
				1 & i && (n.selected = t[0] === t[6]), a.$set(n);
			},
			i(t) {
				e || (x(a.$$.fragment, t), (e = !0));
			},
			o(t) {
				w(a.$$.fragment, t), (e = !1);
			},
			d(t) {
				y(a, t);
			}
		}
	);
}
function X(t) {
	let a, e, r, m, $, f, d;
	(e = new U({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].attribution,
			slideNo: t[1].id + 1,
			totalSlides: A.length
		}
	})),
		(m = new K({ props: { caption: A[t[0]].name } })),
		m.$on('prevClick', t[3]),
		m.$on('nextClick', t[2]);
	let h = A,
		p = [];
	for (let i = 0; i < h.length; i += 1) p[i] = W(Q(t, h, i));
	const D = (t) =>
		w(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(a = i('div')), v(e.$$.fragment), (r = n()), v(m.$$.fragment), ($ = n()), (f = i('div'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			this.h();
		},
		l(t) {
			a = s(t, 'DIV', { class: !0 });
			var i = l(a);
			b(e.$$.fragment, i),
				i.forEach(o),
				(r = c(t)),
				b(m.$$.fragment, t),
				($ = c(t)),
				(f = s(t, 'DIV', { class: !0 }));
			var n = l(f);
			for (let a = 0; a < p.length; a += 1) p[a].l(n);
			n.forEach(o), this.h();
		},
		h() {
			g(a, 'class', 'container svelte-1qcybd5'), g(f, 'class', 'thumbnails-row svelte-1qcybd5');
		},
		m(t, i) {
			u(t, a, i), k(e, a, null), u(t, r, i), k(m, t, i), u(t, $, i), u(t, f, i);
			for (let a = 0; a < p.length; a += 1) p[a].m(f, null);
			d = !0;
		},
		p(t, [a]) {
			const i = {};
			2 & a && (i.image = t[1].imgurl),
				2 & a && (i.altTag = t[1].name),
				2 & a && (i.attr = t[1].attribution),
				2 & a && (i.slideNo = t[1].id + 1),
				e.$set(i);
			const n = {};
			if ((1 & a && (n.caption = A[t[0]].name), m.$set(n), 17 & a)) {
				let e;
				for (h = A, e = 0; e < h.length; e += 1) {
					const i = Q(t, h, e);
					p[e]
						? (p[e].p(i, a), x(p[e], 1))
						: ((p[e] = W(i)), p[e].c(), x(p[e], 1), p[e].m(f, null));
				}
				for (E(), e = h.length; e < p.length; e += 1) D(e);
				T();
			}
		},
		i(t) {
			if (!d) {
				x(e.$$.fragment, t), x(m.$$.fragment, t);
				for (let t = 0; t < h.length; t += 1) x(p[t]);
				d = !0;
			}
		},
		o(t) {
			w(e.$$.fragment, t), w(m.$$.fragment, t), (p = p.filter(Boolean));
			for (let a = 0; a < p.length; a += 1) w(p[a]);
			d = !1;
		},
		d(t) {
			t && o(a), y(e), t && o(r), y(m, t), t && o($), t && o(f), C(p, t);
		}
	};
}
function Z(t, a, e) {
	let i,
		n = 0;
	const r = (t) => e(0, (n = t));
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(n), 1 & t.$$.dirty && e(1, (i = A[n]));
		}),
		[
			n,
			i,
			() => {
				e(0, n === A.length - 1 ? (n = 0) : (n += 1));
			},
			() => {
				e(0, 0 === n ? (n = A.length - 1) : (n -= 1));
			},
			r,
			(t) => r(t)
		]
	);
}
class tt extends t {
	constructor(t) {
		super(), a(this, t, Z, X, e, {});
	}
}
function at(t) {
	let a, e;
	return (
		(a = new tt({})),
		{
			c() {
				v(a.$$.fragment);
			},
			l(t) {
				b(a.$$.fragment, t);
			},
			m(t, i) {
				k(a, t, i), (e = !0);
			},
			i(t) {
				e || (x(a.$$.fragment, t), (e = !0));
			},
			o(t) {
				w(a.$$.fragment, t), (e = !1);
			},
			d(t) {
				y(a, t);
			}
		}
	);
}
function et(t) {
	let a, e;
	return (
		(a = new G({})),
		{
			c() {
				v(a.$$.fragment);
			},
			l(t) {
				b(a.$$.fragment, t);
			},
			m(t, i) {
				k(a, t, i), (e = !0);
			},
			i(t) {
				e || (x(a.$$.fragment, t), (e = !0));
			},
			o(t) {
				w(a.$$.fragment, t), (e = !1);
			},
			d(t) {
				y(a, t);
			}
		}
	);
}
function it(t) {
	let a, e, i, r;
	return (
		(a = new B({
			props: { id: 'slidegallery', variante: 0, $$slots: { default: [at] }, $$scope: { ctx: t } }
		})),
		(i = new B({
			props: { id: 'flipcard', variante: 2, $$slots: { default: [et] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				v(a.$$.fragment), (e = n()), v(i.$$.fragment);
			},
			l(t) {
				b(a.$$.fragment, t), (e = c(t)), b(i.$$.fragment, t);
			},
			m(t, n) {
				k(a, t, n), u(t, e, n), k(i, t, n), (r = !0);
			},
			p(t, [e]) {
				const n = {};
				1 & e && (n.$$scope = { dirty: e, ctx: t }), a.$set(n);
				const r = {};
				1 & e && (r.$$scope = { dirty: e, ctx: t }), i.$set(r);
			},
			i(t) {
				r || (x(a.$$.fragment, t), x(i.$$.fragment, t), (r = !0));
			},
			o(t) {
				w(a.$$.fragment, t), w(i.$$.fragment, t), (r = !1);
			},
			d(t) {
				y(a, t), t && o(e), y(i, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), a(this, t, null, it, e, {});
	}
}
