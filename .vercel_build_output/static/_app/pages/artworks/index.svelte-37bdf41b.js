import {
	S as t,
	i as e,
	s as n,
	e as r,
	t as a,
	j as s,
	c as i,
	a as l,
	b as c,
	d as o,
	l as m,
	o as g,
	f as $,
	g as f,
	h as d,
	n as p,
	G as u,
	H as h,
	F as v,
	K as x,
	Y as b,
	p as w,
	q as I,
	r as y,
	w as k,
	x as _,
	y as D,
	C as E,
	D as P,
	Q as j,
	Z as S,
	_ as T,
	J as V
} from '../../chunks/index-d91e1ed8.js';
import { B as N, G as C, c as G } from '../../chunks/Grid-86dcf0b4.js';
/* empty css                                   */ /* empty css                               */ import {
	a as L,
	f as U
} from '../../chunks/index-65311448.js';
import { S as q, H as A } from '../../chunks/Header-cc4c0be9.js';
import { B as H, I as M } from '../../chunks/Img-a5b8f450.js';
import '../../chunks/index-78b22dae.js';
const R = [
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
function B(t) {
	let e, n, u, h, v, x, b, w;
	return {
		c() {
			(e = r('div')),
				(n = r('div')),
				(u = a(t[0])),
				(h = a(' / ')),
				(v = a(t[1])),
				(x = s()),
				(b = r('img')),
				this.h();
		},
		l(r) {
			e = i(r, 'DIV', { class: !0 });
			var a = l(e);
			n = i(a, 'DIV', { class: !0 });
			var s = l(n);
			(u = c(s, t[0])),
				(h = c(s, ' / ')),
				(v = c(s, t[1])),
				s.forEach(o),
				(x = m(a)),
				(b = i(a, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				a.forEach(o),
				this.h();
		},
		h() {
			g(n, 'class', 'numbertext svelte-1tv6r81'),
				b.src !== (w = t[2]) && g(b, 'src', w),
				g(b, 'alt', t[3]),
				g(b, 'title', t[4]),
				g(b, 'class', 'svelte-1tv6r81'),
				g(e, 'class', 'Slide svelte-1tv6r81');
		},
		m(t, r) {
			$(t, e, r), f(e, n), f(n, u), f(n, h), f(n, v), f(e, x), f(e, b);
		},
		p(t, [e]) {
			1 & e && d(u, t[0]),
				2 & e && d(v, t[1]),
				4 & e && b.src !== (w = t[2]) && g(b, 'src', w),
				8 & e && g(b, 'alt', t[3]),
				16 & e && g(b, 'title', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && o(e);
		}
	};
}
function O(t, e, n) {
	let { slideNo: r } = e,
		{ totalSlides: a } = e,
		{ image: s } = e,
		{ altTag: i } = e,
		{ description: l } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && n(0, (r = t.slideNo)),
				'totalSlides' in t && n(1, (a = t.totalSlides)),
				'image' in t && n(2, (s = t.image)),
				'altTag' in t && n(3, (i = t.altTag)),
				'description' in t && n(4, (l = t.description));
		}),
		[r, a, s, i, l]
	);
}
class W extends t {
	constructor(t) {
		super(),
			e(this, t, O, B, n, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function z(t) {
	let e, n, a, s;
	return {
		c() {
			(e = r('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			g(e, 'class', 'sample cursor svelte-1wr3r0h'),
				g(e, 'id', t[3]),
				e.src !== (n = t[0]) && g(e, 'src', n),
				g(e, 'alt', t[1]),
				g(e, 'title', t[2]),
				u(e, 'active', t[4]);
		},
		m(n, r) {
			$(n, e, r), a || ((s = h(e, 'click', t[5])), (a = !0));
		},
		p(t, [r]) {
			8 & r && g(e, 'id', t[3]),
				1 & r && e.src !== (n = t[0]) && g(e, 'src', n),
				2 & r && g(e, 'alt', t[1]),
				4 & r && g(e, 'title', t[2]),
				16 & r && u(e, 'active', t[4]);
		},
		i: p,
		o: p,
		d(t) {
			t && o(e), (a = !1), s();
		}
	};
}
function F(t, e, n) {
	let { thumbImg: r } = e,
		{ altTag: a } = e,
		{ titleLink: s } = e,
		{ id: i } = e,
		{ selected: l } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && n(0, (r = t.thumbImg)),
				'altTag' in t && n(1, (a = t.altTag)),
				'titleLink' in t && n(2, (s = t.titleLink)),
				'id' in t && n(3, (i = t.id)),
				'selected' in t && n(4, (l = t.selected));
		}),
		[
			r,
			a,
			s,
			i,
			l,
			function (e) {
				v(t, e);
			}
		]
	);
}
class J extends t {
	constructor(t) {
		super(), e(this, t, F, z, n, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function K(t) {
	let e, n, u, v, b, w, I, y, k, _, D;
	return {
		c() {
			(e = r('div')),
				(n = r('a')),
				(u = a('❮')),
				(v = s()),
				(b = r('p')),
				(w = a(t[0])),
				(I = s()),
				(y = r('a')),
				(k = a('❯')),
				this.h();
		},
		l(r) {
			e = i(r, 'DIV', { class: !0 });
			var a = l(e);
			n = i(a, 'A', { href: !0, class: !0 });
			var s = l(n);
			(u = c(s, '❮')), s.forEach(o), (v = m(a)), (b = i(a, 'P', { id: !0, class: !0 }));
			var g = l(b);
			(w = c(g, t[0])), g.forEach(o), (I = m(a)), (y = i(a, 'A', { href: !0, class: !0 }));
			var $ = l(y);
			(k = c($, '❯')), $.forEach(o), a.forEach(o), this.h();
		},
		h() {
			g(n, 'href', '#arrowL'),
				g(n, 'class', 'arrow prev svelte-18kv47b'),
				g(b, 'id', 'caption'),
				g(b, 'class', 'svelte-18kv47b'),
				g(y, 'href', '#arrowR'),
				g(y, 'class', 'arrow next svelte-18kv47b'),
				g(e, 'class', 'caption-container svelte-18kv47b');
		},
		m(r, a) {
			$(r, e, a),
				f(e, n),
				f(n, u),
				f(e, v),
				f(e, b),
				f(b, w),
				f(e, I),
				f(e, y),
				f(y, k),
				_ || ((D = [h(n, 'click', t[2]), h(y, 'click', t[3])]), (_ = !0));
		},
		p(t, [e]) {
			1 & e && d(w, t[0]);
		},
		i: p,
		o: p,
		d(t) {
			t && o(e), (_ = !1), x(D);
		}
	};
}
function Q(t, e, n) {
	let { caption: r } = e;
	const a = b();
	return (
		(t.$$set = (t) => {
			'caption' in t && n(0, (r = t.caption));
		}),
		[r, a, () => a('prevClick'), () => a('nextClick')]
	);
}
class Y extends t {
	constructor(t) {
		super(), e(this, t, Q, K, n, { caption: 0 });
	}
}
function Z(t, e, n) {
	const r = t.slice();
	return (r[7] = e[n].id), (r[8] = e[n].imgurl), (r[9] = e[n].name), r;
}
function X(t) {
	let e, n;
	return (
		(e = new J({
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
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			p(n, r) {
				t = n;
				const a = {};
				1 & r && (a.selected = Number(t[0]) === t[7]), e.$set(a);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function tt(t) {
	let e, n, d, p, u, v, x, b, N, C, G, q, A, H;
	(u = new W({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: R.length
		}
	})),
		(x = new Y({ props: { caption: R[t[0]].description } })),
		x.$on('prevClick', t[3]),
		x.$on('nextClick', t[2]);
	let M = R,
		B = [];
	for (let r = 0; r < M.length; r += 1) B[r] = X(Z(t, M, r));
	const O = (t) =>
		_(B[t], 1, 1, () => {
			B[t] = null;
		});
	return {
		c() {
			(e = r('div')),
				(n = r('span')),
				(d = a('✗')),
				(p = s()),
				w(u.$$.fragment),
				(v = s()),
				w(x.$$.fragment),
				(b = s()),
				(N = r('div'));
			for (let t = 0; t < B.length; t += 1) B[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var r = l(e);
			n = i(r, 'SPAN', { class: !0 });
			var a = l(n);
			(d = c(a, '✗')),
				a.forEach(o),
				(p = m(r)),
				I(u.$$.fragment, r),
				(v = m(r)),
				I(x.$$.fragment, r),
				(b = m(r)),
				(N = i(r, 'DIV', { class: !0 }));
			var s = l(N);
			for (let e = 0; e < B.length; e += 1) B[e].l(s);
			s.forEach(o), r.forEach(o), this.h();
		},
		h() {
			g(n, 'class', 'close cursor svelte-14rayxl'),
				g(N, 'class', 'Thumbnails svelte-14rayxl'),
				g(e, 'class', 'lightbox svelte-14rayxl');
		},
		m(r, a) {
			$(r, e, a),
				f(e, n),
				f(n, d),
				f(e, p),
				y(u, e, null),
				f(e, v),
				y(x, e, null),
				f(e, b),
				f(e, N);
			for (let t = 0; t < B.length; t += 1) B[t].m(N, null);
			(q = !0), A || ((H = h(n, 'click', t[5])), (A = !0));
		},
		p(t, [e]) {
			const n = {};
			2 & e && (n.image = t[1].imgurl),
				2 & e && (n.altTag = t[1].name),
				2 & e && (n.attr = t[1].description),
				2 & e && (n.slideNo = t[1].id + 1),
				u.$set(n);
			const r = {};
			if ((1 & e && (r.caption = R[t[0]].description), x.$set(r), 17 & e)) {
				let n;
				for (M = R, n = 0; n < M.length; n += 1) {
					const r = Z(t, M, n);
					B[n]
						? (B[n].p(r, e), k(B[n], 1))
						: ((B[n] = X(r)), B[n].c(), k(B[n], 1), B[n].m(N, null));
				}
				for (E(), n = M.length; n < B.length; n += 1) O(n);
				P();
			}
		},
		i(t) {
			if (!q) {
				k(u.$$.fragment, t), k(x.$$.fragment, t);
				for (let t = 0; t < M.length; t += 1) k(B[t]);
				j(() => {
					G && G.end(1), C || (C = S(e, L, { x: -300 })), C.start();
				}),
					(q = !0);
			}
		},
		o(t) {
			_(u.$$.fragment, t), _(x.$$.fragment, t), (B = B.filter(Boolean));
			for (let e = 0; e < B.length; e += 1) _(B[e]);
			C && C.invalidate(), (G = T(e, U, {})), (q = !1);
		},
		d(t) {
			t && o(e), D(u), D(x), V(B, t), t && G && G.end(), (A = !1), H();
		}
	};
}
function et(t, e, n) {
	let r,
		{ imageShowingIndex: a = 0 } = e;
	const s = (t) => n(0, (a = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && n(0, (a = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && n(1, (r = R[a]));
		}),
		[
			a,
			r,
			() => {
				n(0, a === R.length - 1 ? (a = 0) : (a += 1));
			},
			() => {
				n(0, 0 === a ? (a = R.length - 1) : (a -= 1));
			},
			s,
			function (e) {
				v(t, e);
			},
			(t) => s(t)
		]
	);
}
class nt extends t {
	constructor(t) {
		super(), e(this, t, et, tt, n, { imageShowingIndex: 0 });
	}
}
function rt(t, e, n) {
	const r = t.slice();
	return (r[1] = e[n].id), (r[2] = e[n].imgurl), (r[3] = e[n].name), r;
}
function at(t) {
	let e, n, a, s;
	return {
		c() {
			(e = r('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			g(e, 'id', t[1]),
				e.src !== (n = t[2]) && g(e, 'src', n),
				g(e, 'alt', t[3]),
				g(e, 'class', 'svelte-1e2aw1q');
		},
		m(n, r) {
			$(n, e, r), a || ((s = h(e, 'click', t[0])), (a = !0));
		},
		p: p,
		d(t) {
			t && o(e), (a = !1), s();
		}
	};
}
function st(t) {
	let e,
		n = R,
		a = [];
	for (let r = 0; r < n.length; r += 1) a[r] = at(rt(t, n, r));
	return {
		c() {
			e = r('div');
			for (let t = 0; t < a.length; t += 1) a[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = l(e);
			for (let e = 0; e < a.length; e += 1) a[e].l(n);
			n.forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'DemoGallery svelte-1e2aw1q');
		},
		m(t, n) {
			$(t, e, n);
			for (let r = 0; r < a.length; r += 1) a[r].m(e, null);
		},
		p(t, [r]) {
			if (0 & r) {
				let s;
				for (n = R, s = 0; s < n.length; s += 1) {
					const i = rt(t, n, s);
					a[s] ? a[s].p(i, r) : ((a[s] = at(i)), a[s].c(), a[s].m(e, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = n.length;
			}
		},
		i: p,
		o: p,
		d(t) {
			t && o(e), V(a, t);
		}
	};
}
function it(t) {
	return [
		function (e) {
			v(t, e);
		}
	];
}
class lt extends t {
	constructor(t) {
		super(), e(this, t, it, st, n, {});
	}
}
function ct(t) {
	let e, n;
	return (
		(e = new lt({})),
		e.$on('click', t[2]),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			p: p,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function ot(t) {
	let e, n;
	return (
		(e = new nt({ props: { imageShowingIndex: t[1] } })),
		e.$on('click', t[3]),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			p(t, n) {
				const r = {};
				2 & n && (r.imageShowingIndex = t[1]), e.$set(r);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function mt(t) {
	let e, n, a, c, f, d;
	const p = [ot, ct],
		u = [];
	function h(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = h(t)),
		(n = u[e] = p[e](t)),
		(f = new N({ props: { variante: 2, text: 'View All' } })),
		f.$on('click', t[4]),
		{
			c() {
				n.c(), (a = s()), (c = r('aside')), w(f.$$.fragment), this.h();
			},
			l(t) {
				n.l(t), (a = m(t)), (c = i(t, 'ASIDE', { class: !0 }));
				var e = l(c);
				I(f.$$.fragment, e), e.forEach(o), this.h();
			},
			h() {
				g(c, 'class', 'svelte-19rr42x');
			},
			m(t, n) {
				u[e].m(t, n), $(t, a, n), $(t, c, n), y(f, c, null), (d = !0);
			},
			p(t, [r]) {
				let s = e;
				(e = h(t)),
					e === s
						? u[e].p(t, r)
						: (E(),
						  _(u[s], 1, 1, () => {
								u[s] = null;
						  }),
						  P(),
						  (n = u[e]),
						  n ? n.p(t, r) : ((n = u[e] = p[e](t)), n.c()),
						  k(n, 1),
						  n.m(a.parentNode, a));
			},
			i(t) {
				d || (k(n), k(f.$$.fragment, t), (d = !0));
			},
			o(t) {
				_(n), _(f.$$.fragment, t), (d = !1);
			},
			d(t) {
				u[e].d(t), t && o(a), t && o(c), D(f);
			}
		}
	);
}
function gt(t, e, n) {
	let r = !1,
		a = 0;
	return [
		r,
		a,
		(t) => {
			n(1, (a = Number(t.target.id))), n(0, (r = !0));
		},
		() => n(0, (r = !1)),
		() => n(0, (r = !0))
	];
}
class $t extends t {
	constructor(t) {
		super(), e(this, t, gt, mt, n, {});
	}
}
function ft(t) {
	let e, n, s, m, d, u, h;
	return {
		c() {
			(e = r('video')),
				(n = r('source')),
				(m = r('source')),
				(u = r('p')),
				(h = a('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(t) {
			e = i(t, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var r = l(e);
			(n = i(r, 'SOURCE', { src: !0, type: !0 })),
				(m = i(r, 'SOURCE', { src: !0, type: !0 })),
				(u = i(r, 'P', {}));
			var a = l(u);
			(h = c(a, 'Ups! Su navegador no soporta vídeos HTML5.')),
				a.forEach(o),
				r.forEach(o),
				this.h();
		},
		h() {
			n.src !== (s = '/img/desdelapoesiadelamateria.webm') &&
				g(n, 'src', '/img/desdelapoesiadelamateria.webm'),
				g(n, 'type', 'video/webm'),
				m.src !== (d = '/img/desdelapoesiadelamateria.mp4') &&
					g(m, 'src', '/img/desdelapoesiadelamateria.mp4'),
				g(m, 'type', 'video/mp4'),
				g(e, 'poster', '/img/cover3.jpg'),
				(e.loop = !0),
				(e.playsInline = !0),
				(e.controls = 'controls');
		},
		m(t, r) {
			$(t, e, r), f(e, n), f(e, m), f(e, u), f(u, h);
		},
		p: p,
		i: p,
		o: p,
		d(t) {
			t && o(e);
		}
	};
}
class dt extends t {
	constructor(t) {
		super(), e(this, t, null, ft, n, {});
	}
}
function pt(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bghighlight fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function ut(t) {
	let e, n, r, a;
	return (
		(e = new A({
			props: { tipo: 2, variante: 6, title: G[1].title, subtitle: G[1].subtitle, text: G[1].text }
		})),
		(r = new H({
			props: {
				align: 'tac',
				color: 'grey_3',
				variante: 1,
				text:
					'Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia.'
			}
		})),
		{
			c() {
				w(e.$$.fragment), (n = s()), w(r.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t), (n = m(t)), I(r.$$.fragment, t);
			},
			m(t, s) {
				y(e, t, s), $(t, n, s), y(r, t, s), (a = !0);
			},
			p: p,
			i(t) {
				a || (k(e.$$.fragment, t), k(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				_(e.$$.fragment, t), _(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				D(e, t), t && o(n), D(r, t);
			}
		}
	);
}
function ht(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bggrey_4 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function vt(t) {
	let e, n;
	return (
		(e = new dt({})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function xt(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bggrey_3 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function bt(t) {
	let e, n;
	return (
		(e = new C({
			props: {
				tipo: 2,
				variante: 8,
				$$slots: { _1x1: [xt], _8x8: [vt], _2x2: [ht], _5x5: [ut], _3x3: [pt] },
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
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			p(t, n) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function wt(t) {
	let e, n;
	return (
		(e = new $t({})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function It(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bggrey_3 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function yt(t) {
	let e, n;
	return (
		(e = new H({
			props: {
				align: 'tar',
				color: 'grey_3',
				variante: 1,
				text:
					'En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original.'
			}
		})),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			p: p,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function kt(t) {
	let e, n;
	return (
		(e = new M({ props: { variante: 1, src: './img/bg3.jpg', alt: 'Presentation' } })),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			p: p,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function _t(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bggrey_3 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function Dt(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bggrey_3 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function Et(t) {
	let e, n, r, a;
	return (
		(e = new H({
			props: {
				align: 'tac',
				color: 'grey_3',
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(r = new N({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				w(e.$$.fragment), (n = s()), w(r.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t), (n = m(t)), I(r.$$.fragment, t);
			},
			m(t, s) {
				y(e, t, s), $(t, n, s), y(r, t, s), (a = !0);
			},
			p: p,
			i(t) {
				a || (k(e.$$.fragment, t), k(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				_(e.$$.fragment, t), _(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				D(e, t), t && o(n), D(r, t);
			}
		}
	);
}
function Pt(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bggrey_4 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function jt(t) {
	let e, n;
	return (
		(e = new M({ props: { variante: 1, src: './img/bg2.jpg', alt: 'Presentation' } })),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t);
			},
			m(t, r) {
				y(e, t, r), (n = !0);
			},
			p: p,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				_(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				D(e, t);
			}
		}
	);
}
function St(t) {
	let e;
	return {
		c() {
			(e = r('div')), this.h();
		},
		l(t) {
			(e = i(t, 'DIV', { class: !0 })), l(e).forEach(o), this.h();
		},
		h() {
			g(e, 'class', 'bggrey_3 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function Tt(t) {
	let e, n, r, a;
	return (
		(e = new C({
			props: {
				tipo: 2,
				variante: 8,
				$$slots: { _1x1: [_t], _8x8: [kt], _5x5: [yt], _3x3: [It] },
				$$scope: { ctx: t }
			}
		})),
		(r = new C({
			props: {
				tipo: 2,
				variante: 8,
				$$slots: { _1x1: [St], _8x8: [jt], _2x2: [Pt], _5x5: [Et], _3x3: [Dt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				w(e.$$.fragment), (n = s()), w(r.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t), (n = m(t)), I(r.$$.fragment, t);
			},
			m(t, s) {
				y(e, t, s), $(t, n, s), y(r, t, s), (a = !0);
			},
			p(t, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), r.$set(s);
			},
			i(t) {
				a || (k(e.$$.fragment, t), k(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				_(e.$$.fragment, t), _(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				D(e, t), t && o(n), D(r, t);
			}
		}
	);
}
function Vt(t) {
	let e, n, r, a, i, l, c, g;
	return (
		(e = new q({
			props: { id: 'cover', variante: 3, $$slots: { default: [bt] }, $$scope: { ctx: t } }
		})),
		(r = new A({ props: { tipo: 1, variante: 4, title: 'Galería' } })),
		(i = new q({
			props: {
				id: 'lightboxgallery',
				variante: 0,
				bg_color: 'bggrey_4',
				$$slots: { default: [wt] },
				$$scope: { ctx: t }
			}
		})),
		(c = new q({
			props: { id: 'cover', variante: 3, $$slots: { default: [Tt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				w(e.$$.fragment),
					(n = s()),
					w(r.$$.fragment),
					(a = s()),
					w(i.$$.fragment),
					(l = s()),
					w(c.$$.fragment);
			},
			l(t) {
				I(e.$$.fragment, t),
					(n = m(t)),
					I(r.$$.fragment, t),
					(a = m(t)),
					I(i.$$.fragment, t),
					(l = m(t)),
					I(c.$$.fragment, t);
			},
			m(t, s) {
				y(e, t, s),
					$(t, n, s),
					y(r, t, s),
					$(t, a, s),
					y(i, t, s),
					$(t, l, s),
					y(c, t, s),
					(g = !0);
			},
			p(t, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), i.$set(a);
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), c.$set(s);
			},
			i(t) {
				g ||
					(k(e.$$.fragment, t),
					k(r.$$.fragment, t),
					k(i.$$.fragment, t),
					k(c.$$.fragment, t),
					(g = !0));
			},
			o(t) {
				_(e.$$.fragment, t),
					_(r.$$.fragment, t),
					_(i.$$.fragment, t),
					_(c.$$.fragment, t),
					(g = !1);
			},
			d(t) {
				D(e, t), t && o(n), D(r, t), t && o(a), D(i, t), t && o(l), D(c, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Vt, n, {});
	}
}
