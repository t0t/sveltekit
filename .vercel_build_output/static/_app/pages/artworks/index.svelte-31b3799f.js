import {
	S as e,
	i as t,
	s as n,
	e as a,
	t as r,
	j as i,
	c as s,
	a as o,
	b as l,
	d as c,
	l as m,
	o as g,
	f as $,
	g as d,
	h as p,
	n as f,
	G as u,
	H as h,
	F as v,
	K as x,
	Y as b,
	p as w,
	q as I,
	r as k,
	w as y,
	x as P,
	y as E,
	C as j,
	D,
	Q as _,
	Z as S,
	_ as T,
	J as N
} from '../../chunks/index-d91e1ed8.js';
import { B as G, G as V, c as L } from '../../chunks/GridBase-a41c03d9.js';
/* empty css                                   */ /* empty css                               */ import {
	a as C,
	f as q
} from '../../chunks/index-65311448.js';
import { S as M, H as U } from '../../chunks/Header-c174dee5.js';
import { B as A } from '../../chunks/Img.svelte-8aacfaef.js';
import '../../chunks/index-78b22dae.js';
const H = [
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
	let t, n, u, h, v, x, b, w;
	return {
		c() {
			(t = a('div')),
				(n = a('div')),
				(u = r(e[0])),
				(h = r(' / ')),
				(v = r(e[1])),
				(x = i()),
				(b = a('img')),
				this.h();
		},
		l(a) {
			t = s(a, 'DIV', { class: !0 });
			var r = o(t);
			n = s(r, 'DIV', { class: !0 });
			var i = o(n);
			(u = l(i, e[0])),
				(h = l(i, ' / ')),
				(v = l(i, e[1])),
				i.forEach(c),
				(x = m(r)),
				(b = s(r, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				r.forEach(c),
				this.h();
		},
		h() {
			g(n, 'class', 'numbertext svelte-12f791k'),
				b.src !== (w = e[2]) && g(b, 'src', w),
				g(b, 'alt', e[3]),
				g(b, 'title', e[4]),
				g(b, 'class', 'svelte-12f791k'),
				g(t, 'class', 'Slide svelte-12f791k');
		},
		m(e, a) {
			$(e, t, a), d(t, n), d(n, u), d(n, h), d(n, v), d(t, x), d(t, b);
		},
		p(e, [t]) {
			1 & t && p(u, e[0]),
				2 & t && p(v, e[1]),
				4 & t && b.src !== (w = e[2]) && g(b, 'src', w),
				8 & t && g(b, 'alt', e[3]),
				16 & t && g(b, 'title', e[4]);
		},
		i: f,
		o: f,
		d(e) {
			e && c(t);
		}
	};
}
function z(e, t, n) {
	let { slideNo: a } = t,
		{ totalSlides: r } = t,
		{ image: i } = t,
		{ altTag: s } = t,
		{ description: o } = t;
	return (
		(e.$$set = (e) => {
			'slideNo' in e && n(0, (a = e.slideNo)),
				'totalSlides' in e && n(1, (r = e.totalSlides)),
				'image' in e && n(2, (i = e.image)),
				'altTag' in e && n(3, (s = e.altTag)),
				'description' in e && n(4, (o = e.description));
		}),
		[a, r, i, s, o]
	);
}
class B extends e {
	constructor(e) {
		super(),
			t(this, e, z, R, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function O(e) {
	let t, n, r, i;
	return {
		c() {
			(t = a('img')), this.h();
		},
		l(e) {
			(t = s(e, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			g(t, 'class', 'sample cursor svelte-1cx7vco'),
				g(t, 'id', e[3]),
				t.src !== (n = e[0]) && g(t, 'src', n),
				g(t, 'alt', e[1]),
				g(t, 'title', e[2]),
				u(t, 'active', e[4]);
		},
		m(n, a) {
			$(n, t, a), r || ((i = h(t, 'click', e[5])), (r = !0));
		},
		p(e, [a]) {
			8 & a && g(t, 'id', e[3]),
				1 & a && t.src !== (n = e[0]) && g(t, 'src', n),
				2 & a && g(t, 'alt', e[1]),
				4 & a && g(t, 'title', e[2]),
				16 & a && u(t, 'active', e[4]);
		},
		i: f,
		o: f,
		d(e) {
			e && c(t), (r = !1), i();
		}
	};
}
function W(e, t, n) {
	let { thumbImg: a } = t,
		{ altTag: r } = t,
		{ titleLink: i } = t,
		{ id: s } = t,
		{ selected: o } = t;
	return (
		(e.$$set = (e) => {
			'thumbImg' in e && n(0, (a = e.thumbImg)),
				'altTag' in e && n(1, (r = e.altTag)),
				'titleLink' in e && n(2, (i = e.titleLink)),
				'id' in e && n(3, (s = e.id)),
				'selected' in e && n(4, (o = e.selected));
		}),
		[
			a,
			r,
			i,
			s,
			o,
			function (t) {
				v(e, t);
			}
		]
	);
}
class F extends e {
	constructor(e) {
		super(), t(this, e, W, O, n, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function J(e) {
	let t, n, u, v, b, w, I, k, y, P, E;
	return {
		c() {
			(t = a('div')),
				(n = a('a')),
				(u = r('❮')),
				(v = i()),
				(b = a('p')),
				(w = r(e[0])),
				(I = i()),
				(k = a('a')),
				(y = r('❯')),
				this.h();
		},
		l(a) {
			t = s(a, 'DIV', { class: !0 });
			var r = o(t);
			n = s(r, 'A', { href: !0, class: !0 });
			var i = o(n);
			(u = l(i, '❮')), i.forEach(c), (v = m(r)), (b = s(r, 'P', { id: !0, class: !0 }));
			var g = o(b);
			(w = l(g, e[0])), g.forEach(c), (I = m(r)), (k = s(r, 'A', { href: !0, class: !0 }));
			var $ = o(k);
			(y = l($, '❯')), $.forEach(c), r.forEach(c), this.h();
		},
		h() {
			g(n, 'href', '#arrowL'),
				g(n, 'class', 'arrow prev svelte-1u7512'),
				g(b, 'id', 'caption'),
				g(b, 'class', 'svelte-1u7512'),
				g(k, 'href', '#arrowR'),
				g(k, 'class', 'arrow next svelte-1u7512'),
				g(t, 'class', 'caption-container svelte-1u7512');
		},
		m(a, r) {
			$(a, t, r),
				d(t, n),
				d(n, u),
				d(t, v),
				d(t, b),
				d(b, w),
				d(t, I),
				d(t, k),
				d(k, y),
				P || ((E = [h(n, 'click', e[2]), h(k, 'click', e[3])]), (P = !0));
		},
		p(e, [t]) {
			1 & t && p(w, e[0]);
		},
		i: f,
		o: f,
		d(e) {
			e && c(t), (P = !1), x(E);
		}
	};
}
function K(e, t, n) {
	let { caption: a } = t;
	const r = b();
	return (
		(e.$$set = (e) => {
			'caption' in e && n(0, (a = e.caption));
		}),
		[a, r, () => r('prevClick'), () => r('nextClick')]
	);
}
class Q extends e {
	constructor(e) {
		super(), t(this, e, K, J, n, { caption: 0 });
	}
}
function Y(e, t, n) {
	const a = e.slice();
	return (a[7] = t[n].id), (a[8] = t[n].imgurl), (a[9] = t[n].name), a;
}
function Z(e) {
	let t, n;
	return (
		(t = new F({
			props: { thumbImg: e[8], altTag: e[9], id: e[7], selected: Number(e[0]) === e[7] }
		})),
		t.$on('click', function () {
			return e[6](e[7]);
		}),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p(n, a) {
				e = n;
				const r = {};
				1 & a && (r.selected = Number(e[0]) === e[7]), t.$set(r);
			},
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function X(e) {
	let t, n, p, f, u, v, x, b, G, V, L, M, U, A;
	(u = new B({
		props: {
			image: e[1].imgurl,
			altTag: e[1].name,
			attr: e[1].description,
			slideNo: e[1].id + 1,
			totalSlides: H.length
		}
	})),
		(x = new Q({ props: { caption: H[e[0]].description } })),
		x.$on('prevClick', e[3]),
		x.$on('nextClick', e[2]);
	let R = H,
		z = [];
	for (let a = 0; a < R.length; a += 1) z[a] = Z(Y(e, R, a));
	const O = (e) =>
		P(z[e], 1, 1, () => {
			z[e] = null;
		});
	return {
		c() {
			(t = a('div')),
				(n = a('span')),
				(p = r('✗')),
				(f = i()),
				w(u.$$.fragment),
				(v = i()),
				w(x.$$.fragment),
				(b = i()),
				(G = a('div'));
			for (let e = 0; e < z.length; e += 1) z[e].c();
			this.h();
		},
		l(e) {
			t = s(e, 'DIV', { class: !0 });
			var a = o(t);
			n = s(a, 'SPAN', { class: !0 });
			var r = o(n);
			(p = l(r, '✗')),
				r.forEach(c),
				(f = m(a)),
				I(u.$$.fragment, a),
				(v = m(a)),
				I(x.$$.fragment, a),
				(b = m(a)),
				(G = s(a, 'DIV', { class: !0 }));
			var i = o(G);
			for (let t = 0; t < z.length; t += 1) z[t].l(i);
			i.forEach(c), a.forEach(c), this.h();
		},
		h() {
			g(n, 'class', 'close cursor svelte-1ce2p68'),
				g(G, 'class', 'Thumbnails svelte-1ce2p68'),
				g(t, 'class', 'lightbox svelte-1ce2p68');
		},
		m(a, r) {
			$(a, t, r),
				d(t, n),
				d(n, p),
				d(t, f),
				k(u, t, null),
				d(t, v),
				k(x, t, null),
				d(t, b),
				d(t, G);
			for (let e = 0; e < z.length; e += 1) z[e].m(G, null);
			(M = !0), U || ((A = h(n, 'click', e[5])), (U = !0));
		},
		p(e, [t]) {
			const n = {};
			2 & t && (n.image = e[1].imgurl),
				2 & t && (n.altTag = e[1].name),
				2 & t && (n.attr = e[1].description),
				2 & t && (n.slideNo = e[1].id + 1),
				u.$set(n);
			const a = {};
			if ((1 & t && (a.caption = H[e[0]].description), x.$set(a), 17 & t)) {
				let n;
				for (R = H, n = 0; n < R.length; n += 1) {
					const a = Y(e, R, n);
					z[n]
						? (z[n].p(a, t), y(z[n], 1))
						: ((z[n] = Z(a)), z[n].c(), y(z[n], 1), z[n].m(G, null));
				}
				for (j(), n = R.length; n < z.length; n += 1) O(n);
				D();
			}
		},
		i(e) {
			if (!M) {
				y(u.$$.fragment, e), y(x.$$.fragment, e);
				for (let e = 0; e < R.length; e += 1) y(z[e]);
				_(() => {
					L && L.end(1), V || (V = S(t, C, { x: -300 })), V.start();
				}),
					(M = !0);
			}
		},
		o(e) {
			P(u.$$.fragment, e), P(x.$$.fragment, e), (z = z.filter(Boolean));
			for (let t = 0; t < z.length; t += 1) P(z[t]);
			V && V.invalidate(), (L = T(t, q, {})), (M = !1);
		},
		d(e) {
			e && c(t), E(u), E(x), N(z, e), e && L && L.end(), (U = !1), A();
		}
	};
}
function ee(e, t, n) {
	let a,
		{ imageShowingIndex: r = 0 } = t;
	const i = (e) => n(0, (r = Number(e)));
	return (
		(e.$$set = (e) => {
			'imageShowingIndex' in e && n(0, (r = e.imageShowingIndex));
		}),
		(e.$$.update = () => {
			1 & e.$$.dirty && n(1, (a = H[r]));
		}),
		[
			r,
			a,
			() => {
				n(0, r === H.length - 1 ? (r = 0) : (r += 1));
			},
			() => {
				n(0, 0 === r ? (r = H.length - 1) : (r -= 1));
			},
			i,
			function (t) {
				v(e, t);
			},
			(e) => i(e)
		]
	);
}
class te extends e {
	constructor(e) {
		super(), t(this, e, ee, X, n, { imageShowingIndex: 0 });
	}
}
function ne(e, t, n) {
	const a = e.slice();
	return (a[1] = t[n].id), (a[2] = t[n].imgurl), (a[3] = t[n].name), a;
}
function ae(e) {
	let t, n, r, i;
	return {
		c() {
			(t = a('img')), this.h();
		},
		l(e) {
			(t = s(e, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			g(t, 'id', e[1]),
				t.src !== (n = e[2]) && g(t, 'src', n),
				g(t, 'alt', e[3]),
				g(t, 'class', 'svelte-1ewiukz');
		},
		m(n, a) {
			$(n, t, a), r || ((i = h(t, 'click', e[0])), (r = !0));
		},
		p: f,
		d(e) {
			e && c(t), (r = !1), i();
		}
	};
}
function re(e) {
	let t,
		n = H,
		r = [];
	for (let a = 0; a < n.length; a += 1) r[a] = ae(ne(e, n, a));
	return {
		c() {
			t = a('div');
			for (let e = 0; e < r.length; e += 1) r[e].c();
			this.h();
		},
		l(e) {
			t = s(e, 'DIV', { class: !0 });
			var n = o(t);
			for (let t = 0; t < r.length; t += 1) r[t].l(n);
			n.forEach(c), this.h();
		},
		h() {
			g(t, 'class', 'DemoGallery svelte-1ewiukz');
		},
		m(e, n) {
			$(e, t, n);
			for (let a = 0; a < r.length; a += 1) r[a].m(t, null);
		},
		p(e, [a]) {
			if (0 & a) {
				let i;
				for (n = H, i = 0; i < n.length; i += 1) {
					const s = ne(e, n, i);
					r[i] ? r[i].p(s, a) : ((r[i] = ae(s)), r[i].c(), r[i].m(t, null));
				}
				for (; i < r.length; i += 1) r[i].d(1);
				r.length = n.length;
			}
		},
		i: f,
		o: f,
		d(e) {
			e && c(t), N(r, e);
		}
	};
}
function ie(e) {
	return [
		function (t) {
			v(e, t);
		}
	];
}
class se extends e {
	constructor(e) {
		super(), t(this, e, ie, re, n, {});
	}
}
function oe(e) {
	let t, n;
	return (
		(t = new se({})),
		t.$on('click', e[2]),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p: f,
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function le(e) {
	let t, n;
	return (
		(t = new te({ props: { imageShowingIndex: e[1] } })),
		t.$on('click', e[3]),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				2 & n && (a.imageShowingIndex = e[1]), t.$set(a);
			},
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function ce(e) {
	let t, n, r, l, d, p;
	const f = [le, oe],
		u = [];
	function h(e, t) {
		return e[0] ? 0 : 1;
	}
	return (
		(t = h(e)),
		(n = u[t] = f[t](e)),
		(d = new G({ props: { variante: 3, text: 'View All' } })),
		d.$on('click', e[4]),
		{
			c() {
				n.c(), (r = i()), (l = a('aside')), w(d.$$.fragment), this.h();
			},
			l(e) {
				n.l(e), (r = m(e)), (l = s(e, 'ASIDE', { class: !0 }));
				var t = o(l);
				I(d.$$.fragment, t), t.forEach(c), this.h();
			},
			h() {
				g(l, 'class', 'svelte-1q6c1hc');
			},
			m(e, n) {
				u[t].m(e, n), $(e, r, n), $(e, l, n), k(d, l, null), (p = !0);
			},
			p(e, [a]) {
				let i = t;
				(t = h(e)),
					t === i
						? u[t].p(e, a)
						: (j(),
						  P(u[i], 1, 1, () => {
								u[i] = null;
						  }),
						  D(),
						  (n = u[t]),
						  n ? n.p(e, a) : ((n = u[t] = f[t](e)), n.c()),
						  y(n, 1),
						  n.m(r.parentNode, r));
			},
			i(e) {
				p || (y(n), y(d.$$.fragment, e), (p = !0));
			},
			o(e) {
				P(n), P(d.$$.fragment, e), (p = !1);
			},
			d(e) {
				u[t].d(e), e && c(r), e && c(l), E(d);
			}
		}
	);
}
function me(e, t, n) {
	let a = !1,
		r = 0;
	return [
		a,
		r,
		(e) => {
			n(1, (r = Number(e.target.id))), n(0, (a = !0));
		},
		() => n(0, (a = !1)),
		() => n(0, (a = !0))
	];
}
class ge extends e {
	constructor(e) {
		super(), t(this, e, me, ce, n, {});
	}
}
function $e(e) {
	let t, n, i, m, p, u, h;
	return {
		c() {
			(t = a('video')),
				(n = a('source')),
				(m = a('source')),
				(u = a('p')),
				(h = r('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(e) {
			t = s(e, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var a = o(t);
			(n = s(a, 'SOURCE', { src: !0, type: !0 })),
				(m = s(a, 'SOURCE', { src: !0, type: !0 })),
				(u = s(a, 'P', {}));
			var r = o(u);
			(h = l(r, 'Ups! Su navegador no soporta vídeos HTML5.')),
				r.forEach(c),
				a.forEach(c),
				this.h();
		},
		h() {
			n.src !== (i = '/img/desdelapoesiadelamateria.webm') &&
				g(n, 'src', '/img/desdelapoesiadelamateria.webm'),
				g(n, 'type', 'video/webm'),
				m.src !== (p = '/img/desdelapoesiadelamateria.mp4') &&
					g(m, 'src', '/img/desdelapoesiadelamateria.mp4'),
				g(m, 'type', 'video/mp4'),
				g(t, 'poster', '/img/cover3.jpg'),
				(t.loop = !0),
				(t.playsInline = !0),
				(t.controls = 'controls');
		},
		m(e, a) {
			$(e, t, a), d(t, n), d(t, m), d(t, u), d(u, h);
		},
		p: f,
		i: f,
		o: f,
		d(e) {
			e && c(t);
		}
	};
}
class de extends e {
	constructor(e) {
		super(), t(this, e, null, $e, n, {});
	}
}
function pe(e) {
	let t, n;
	return (
		(t = new U({
			props: { tipo: 2, variante: 6, title: L[1].title, subtitle: L[1].subtitle, text: L[1].text }
		})),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p: f,
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function fe(e) {
	let t, n;
	return (
		(t = new A({
			props: {
				align: 'tar',
				color: 'grey_3',
				variante: 1,
				text:
					'Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia.'
			}
		})),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p: f,
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function ue(e) {
	let t, n;
	return (
		(t = new de({})),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function he(e) {
	let t;
	return {
		c() {
			(t = a('div')), this.h();
		},
		l(e) {
			(t = s(e, 'DIV', { class: !0 })), o(t).forEach(c), this.h();
		},
		h() {
			g(t, 'class', 'bggrey_3 fullfill');
		},
		m(e, n) {
			$(e, t, n);
		},
		d(e) {
			e && c(t);
		}
	};
}
function ve(e) {
	let t, n;
	return (
		(t = new V({
			props: {
				tipo: 2,
				variante: 8,
				$$slots: { _1x1: [he], _8x8: [ue], _5x5: [fe], _3x3: [pe] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
			},
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function xe(e) {
	let t, n;
	return (
		(t = new ge({})),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function be(e) {
	let t, n;
	return (
		(t = new A({
			props: {
				align: 'tar',
				color: 'grey_3',
				variante: 1,
				text:
					'Me interesa recrear las condiciones necesarias para que las leyes de la física y el tiempo puedan quedar atrapadas en una forma.'
			}
		})),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p: f,
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function we(e) {
	let t, n;
	return {
		c() {
			(t = a('p')),
				(n = r(
					'En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original.'
				));
		},
		l(e) {
			t = s(e, 'P', {});
			var a = o(t);
			(n = l(
				a,
				'En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original.'
			)),
				a.forEach(c);
		},
		m(e, a) {
			$(e, t, a), d(t, n);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Ie(e) {
	let t, n;
	return {
		c() {
			(t = a('img')), this.h();
		},
		l(e) {
			(t = s(e, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			t.src !== (n = './img/cover4.jpg') && g(t, 'src', './img/cover4.jpg'), g(t, 'alt', '');
		},
		m(e, n) {
			$(e, t, n);
		},
		d(e) {
			e && c(t);
		}
	};
}
function ke(e) {
	let t;
	return {
		c() {
			(t = a('div')), this.h();
		},
		l(e) {
			(t = s(e, 'DIV', { class: !0 })), o(t).forEach(c), this.h();
		},
		h() {
			g(t, 'class', 'bggrey_3 fullfill');
		},
		m(e, n) {
			$(e, t, n);
		},
		d(e) {
			e && c(t);
		}
	};
}
function ye(e) {
	let t, n;
	return (
		(t = new U({
			props: {
				tipo: 3,
				variante: 7,
				textalign: 'align-left',
				title: '¿Interesado en alguna pieza?'
			}
		})),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e);
			},
			m(e, a) {
				k(t, e, a), (n = !0);
			},
			p: f,
			i(e) {
				n || (y(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function Pe(e) {
	let t, n, a, r;
	return (
		(t = new A({
			props: {
				align: 'tar',
				color: 'grey_3',
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(a = new G({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				w(t.$$.fragment), (n = i()), w(a.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e), (n = m(e)), I(a.$$.fragment, e);
			},
			m(e, i) {
				k(t, e, i), $(e, n, i), k(a, e, i), (r = !0);
			},
			p: f,
			i(e) {
				r || (y(t.$$.fragment, e), y(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				P(t.$$.fragment, e), P(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				E(t, e), e && c(n), E(a, e);
			}
		}
	);
}
function Ee(e) {
	let t, n;
	return {
		c() {
			(t = a('img')), this.h();
		},
		l(e) {
			(t = s(e, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			t.src !== (n = './img/bg2.jpg') && g(t, 'src', './img/bg2.jpg'), g(t, 'alt', '');
		},
		m(e, n) {
			$(e, t, n);
		},
		d(e) {
			e && c(t);
		}
	};
}
function je(e) {
	let t;
	return {
		c() {
			(t = a('div')), this.h();
		},
		l(e) {
			(t = s(e, 'DIV', { class: !0 })), o(t).forEach(c), this.h();
		},
		h() {
			g(t, 'class', 'bggrey_3 fullfill');
		},
		m(e, n) {
			$(e, t, n);
		},
		d(e) {
			e && c(t);
		}
	};
}
function De(e) {
	let t, n, a, r;
	return (
		(t = new V({
			props: {
				tipo: 2,
				variante: 8,
				$$slots: { _1x1: [ke], _8x8: [Ie], _5x5: [we], _3x3: [be] },
				$$scope: { ctx: e }
			}
		})),
		(a = new V({
			props: {
				tipo: 2,
				variante: 8,
				$$slots: { _1x1: [je], _8x8: [Ee], _5x5: [Pe], _3x3: [ye] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				w(t.$$.fragment), (n = i()), w(a.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e), (n = m(e)), I(a.$$.fragment, e);
			},
			m(e, i) {
				k(t, e, i), $(e, n, i), k(a, e, i), (r = !0);
			},
			p(e, n) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: e }), t.$set(r);
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: e }), a.$set(i);
			},
			i(e) {
				r || (y(t.$$.fragment, e), y(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				P(t.$$.fragment, e), P(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				E(t, e), e && c(n), E(a, e);
			}
		}
	);
}
function _e(e) {
	let t, n, a, r, s, o, l, g;
	return (
		(t = new M({
			props: { id: 'cover', variante: 3, $$slots: { default: [ve] }, $$scope: { ctx: e } }
		})),
		(a = new U({ props: { tipo: 1, variante: 4, title: 'Galería' } })),
		(s = new M({
			props: {
				id: 'lightboxgallery',
				variante: 0,
				bg_color: 'bggrey_1',
				$$slots: { default: [xe] },
				$$scope: { ctx: e }
			}
		})),
		(l = new M({
			props: { id: 'cover', variante: 3, $$slots: { default: [De] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				w(t.$$.fragment),
					(n = i()),
					w(a.$$.fragment),
					(r = i()),
					w(s.$$.fragment),
					(o = i()),
					w(l.$$.fragment);
			},
			l(e) {
				I(t.$$.fragment, e),
					(n = m(e)),
					I(a.$$.fragment, e),
					(r = m(e)),
					I(s.$$.fragment, e),
					(o = m(e)),
					I(l.$$.fragment, e);
			},
			m(e, i) {
				k(t, e, i),
					$(e, n, i),
					k(a, e, i),
					$(e, r, i),
					k(s, e, i),
					$(e, o, i),
					k(l, e, i),
					(g = !0);
			},
			p(e, [n]) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: e }), s.$set(r);
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: e }), l.$set(i);
			},
			i(e) {
				g ||
					(y(t.$$.fragment, e),
					y(a.$$.fragment, e),
					y(s.$$.fragment, e),
					y(l.$$.fragment, e),
					(g = !0));
			},
			o(e) {
				P(t.$$.fragment, e),
					P(a.$$.fragment, e),
					P(s.$$.fragment, e),
					P(l.$$.fragment, e),
					(g = !1);
			},
			d(e) {
				E(t, e), e && c(n), E(a, e), e && c(r), E(s, e), e && c(o), E(l, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, _e, n, {});
	}
}
