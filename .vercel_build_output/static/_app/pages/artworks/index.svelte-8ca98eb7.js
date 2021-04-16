import {
	S as t,
	i as e,
	s as a,
	e as n,
	t as s,
	j as r,
	c as i,
	a as o,
	b as c,
	d as l,
	l as m,
	o as g,
	f as $,
	g as d,
	h as p,
	n as f,
	G as u,
	H as h,
	F as v,
	K as b,
	Y as x,
	p as w,
	q as _,
	r as I,
	w as k,
	x as D,
	y as E,
	C as P,
	D as j,
	Q as S,
	Z as y,
	_ as V,
	J as T
} from '../../chunks/index-d91e1ed8.js';
import { B as N, c as q } from '../../chunks/Grid.svelte-60585820.js';
import { T as C } from '../../chunks/Tabs-a8f99065.js';
import { t as L } from '../../chunks/miProceso-ec715937.js';
import { a as G, f as H } from '../../chunks/index-65311448.js';
import { H as U } from '../../chunks/Header-251278fe.js';
import { I as A } from '../../chunks/Img-674f19a2.js';
import { S as B } from '../../chunks/Section-ebe14856.js';
import { B as M } from '../../chunks/Blockquote-32fc30bd.js';
import '../../chunks/ListItem-196d07d7.js';
import '../../chunks/index-78b22dae.js';
/* empty css                                     */ const R = [
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
function O(t) {
	let e, a, u, h, v, b, x, w;
	return {
		c() {
			(e = n('div')),
				(a = n('div')),
				(u = s(t[0])),
				(h = s(' / ')),
				(v = s(t[1])),
				(b = r()),
				(x = n('img')),
				this.h();
		},
		l(n) {
			e = i(n, 'DIV', { class: !0 });
			var s = o(e);
			a = i(s, 'DIV', { class: !0 });
			var r = o(a);
			(u = c(r, t[0])),
				(h = c(r, ' / ')),
				(v = c(r, t[1])),
				r.forEach(l),
				(b = m(s)),
				(x = i(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				s.forEach(l),
				this.h();
		},
		h() {
			g(a, 'class', 'numbertext svelte-8btup2'),
				x.src !== (w = t[2]) && g(x, 'src', w),
				g(x, 'alt', t[3]),
				g(x, 'title', t[4]),
				g(x, 'class', 'svelte-8btup2'),
				g(e, 'class', 'Slide svelte-8btup2');
		},
		m(t, n) {
			$(t, e, n), d(e, a), d(a, u), d(a, h), d(a, v), d(e, b), d(e, x);
		},
		p(t, [e]) {
			1 & e && p(u, t[0]),
				2 & e && p(v, t[1]),
				4 & e && x.src !== (w = t[2]) && g(x, 'src', w),
				8 & e && g(x, 'alt', t[3]),
				16 & e && g(x, 'title', t[4]);
		},
		i: f,
		o: f,
		d(t) {
			t && l(e);
		}
	};
}
function W(t, e, a) {
	let { slideNo: n } = e,
		{ totalSlides: s } = e,
		{ image: r } = e,
		{ altTag: i } = e,
		{ description: o } = e;
	return (
		(t.$$set = (t) => {
			'slideNo' in t && a(0, (n = t.slideNo)),
				'totalSlides' in t && a(1, (s = t.totalSlides)),
				'image' in t && a(2, (r = t.image)),
				'altTag' in t && a(3, (i = t.altTag)),
				'description' in t && a(4, (o = t.description));
		}),
		[n, s, r, i, o]
	);
}
class z extends t {
	constructor(t) {
		super(),
			e(this, t, W, O, a, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function F(t) {
	let e, a, s, r;
	return {
		c() {
			(e = n('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			g(e, 'class', 'sample cursor svelte-lg00t2'),
				g(e, 'id', t[3]),
				e.src !== (a = t[0]) && g(e, 'src', a),
				g(e, 'alt', t[1]),
				g(e, 'title', t[2]),
				u(e, 'active', t[4]);
		},
		m(a, n) {
			$(a, e, n), s || ((r = h(e, 'click', t[5])), (s = !0));
		},
		p(t, [n]) {
			8 & n && g(e, 'id', t[3]),
				1 & n && e.src !== (a = t[0]) && g(e, 'src', a),
				2 & n && g(e, 'alt', t[1]),
				4 & n && g(e, 'title', t[2]),
				16 & n && u(e, 'active', t[4]);
		},
		i: f,
		o: f,
		d(t) {
			t && l(e), (s = !1), r();
		}
	};
}
function J(t, e, a) {
	let { thumbImg: n } = e,
		{ altTag: s } = e,
		{ titleLink: r } = e,
		{ id: i } = e,
		{ selected: o } = e;
	return (
		(t.$$set = (t) => {
			'thumbImg' in t && a(0, (n = t.thumbImg)),
				'altTag' in t && a(1, (s = t.altTag)),
				'titleLink' in t && a(2, (r = t.titleLink)),
				'id' in t && a(3, (i = t.id)),
				'selected' in t && a(4, (o = t.selected));
		}),
		[
			n,
			s,
			r,
			i,
			o,
			function (e) {
				v(t, e);
			}
		]
	);
}
class K extends t {
	constructor(t) {
		super(), e(this, t, J, F, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function Q(t) {
	let e, a, u, v, x, w, _, I, k, D, E;
	return {
		c() {
			(e = n('div')),
				(a = n('a')),
				(u = s('❮')),
				(v = r()),
				(x = n('p')),
				(w = s(t[0])),
				(_ = r()),
				(I = n('a')),
				(k = s('❯')),
				this.h();
		},
		l(n) {
			e = i(n, 'DIV', { class: !0 });
			var s = o(e);
			a = i(s, 'A', { href: !0, class: !0 });
			var r = o(a);
			(u = c(r, '❮')), r.forEach(l), (v = m(s)), (x = i(s, 'P', { id: !0, class: !0 }));
			var g = o(x);
			(w = c(g, t[0])), g.forEach(l), (_ = m(s)), (I = i(s, 'A', { href: !0, class: !0 }));
			var $ = o(I);
			(k = c($, '❯')), $.forEach(l), s.forEach(l), this.h();
		},
		h() {
			g(a, 'href', '#arrowL'),
				g(a, 'class', 'arrow prev svelte-1ioogqw'),
				g(x, 'id', 'caption'),
				g(x, 'class', 'svelte-1ioogqw'),
				g(I, 'href', '#arrowR'),
				g(I, 'class', 'arrow next svelte-1ioogqw'),
				g(e, 'class', 'caption-container svelte-1ioogqw');
		},
		m(n, s) {
			$(n, e, s),
				d(e, a),
				d(a, u),
				d(e, v),
				d(e, x),
				d(x, w),
				d(e, _),
				d(e, I),
				d(I, k),
				D || ((E = [h(a, 'click', t[2]), h(I, 'click', t[3])]), (D = !0));
		},
		p(t, [e]) {
			1 & e && p(w, t[0]);
		},
		i: f,
		o: f,
		d(t) {
			t && l(e), (D = !1), b(E);
		}
	};
}
function Y(t, e, a) {
	let { caption: n } = e;
	const s = x();
	return (
		(t.$$set = (t) => {
			'caption' in t && a(0, (n = t.caption));
		}),
		[n, s, () => s('prevClick'), () => s('nextClick')]
	);
}
class Z extends t {
	constructor(t) {
		super(), e(this, t, Y, Q, a, { caption: 0 });
	}
}
function X(t, e, a) {
	const n = t.slice();
	return (n[7] = e[a].id), (n[8] = e[a].imgurl), (n[9] = e[a].name), n;
}
function tt(t) {
	let e, a;
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
				_(e.$$.fragment, t);
			},
			m(t, n) {
				I(e, t, n), (a = !0);
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
				D(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				E(e, t);
			}
		}
	);
}
function et(t) {
	let e, a, p, f, u, v, b, x, N, q, C, L, U, A;
	(u = new z({
		props: {
			image: t[1].imgurl,
			altTag: t[1].name,
			attr: t[1].description,
			slideNo: t[1].id + 1,
			totalSlides: R.length
		}
	})),
		(b = new Z({ props: { caption: R[t[0]].description } })),
		b.$on('prevClick', t[3]),
		b.$on('nextClick', t[2]);
	let B = R,
		M = [];
	for (let n = 0; n < B.length; n += 1) M[n] = tt(X(t, B, n));
	const O = (t) =>
		D(M[t], 1, 1, () => {
			M[t] = null;
		});
	return {
		c() {
			(e = n('div')),
				(a = n('span')),
				(p = s('✗')),
				(f = r()),
				w(u.$$.fragment),
				(v = r()),
				w(b.$$.fragment),
				(x = r()),
				(N = n('div'));
			for (let t = 0; t < M.length; t += 1) M[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = o(e);
			a = i(n, 'SPAN', { class: !0 });
			var s = o(a);
			(p = c(s, '✗')),
				s.forEach(l),
				(f = m(n)),
				_(u.$$.fragment, n),
				(v = m(n)),
				_(b.$$.fragment, n),
				(x = m(n)),
				(N = i(n, 'DIV', { class: !0 }));
			var r = o(N);
			for (let e = 0; e < M.length; e += 1) M[e].l(r);
			r.forEach(l), n.forEach(l), this.h();
		},
		h() {
			g(a, 'class', 'close cursor svelte-1igxoi6'),
				g(N, 'class', 'Thumbnails svelte-1igxoi6'),
				g(e, 'class', 'lightbox svelte-1igxoi6');
		},
		m(n, s) {
			$(n, e, s),
				d(e, a),
				d(a, p),
				d(e, f),
				I(u, e, null),
				d(e, v),
				I(b, e, null),
				d(e, x),
				d(e, N);
			for (let t = 0; t < M.length; t += 1) M[t].m(N, null);
			(L = !0), U || ((A = h(a, 'click', t[5])), (U = !0));
		},
		p(t, [e]) {
			const a = {};
			2 & e && (a.image = t[1].imgurl),
				2 & e && (a.altTag = t[1].name),
				2 & e && (a.attr = t[1].description),
				2 & e && (a.slideNo = t[1].id + 1),
				u.$set(a);
			const n = {};
			if ((1 & e && (n.caption = R[t[0]].description), b.$set(n), 17 & e)) {
				let a;
				for (B = R, a = 0; a < B.length; a += 1) {
					const n = X(t, B, a);
					M[a]
						? (M[a].p(n, e), k(M[a], 1))
						: ((M[a] = tt(n)), M[a].c(), k(M[a], 1), M[a].m(N, null));
				}
				for (P(), a = B.length; a < M.length; a += 1) O(a);
				j();
			}
		},
		i(t) {
			if (!L) {
				k(u.$$.fragment, t), k(b.$$.fragment, t);
				for (let t = 0; t < B.length; t += 1) k(M[t]);
				S(() => {
					C && C.end(1), q || (q = y(e, G, { x: -300 })), q.start();
				}),
					(L = !0);
			}
		},
		o(t) {
			D(u.$$.fragment, t), D(b.$$.fragment, t), (M = M.filter(Boolean));
			for (let e = 0; e < M.length; e += 1) D(M[e]);
			q && q.invalidate(), (C = V(e, H, {})), (L = !1);
		},
		d(t) {
			t && l(e), E(u), E(b), T(M, t), t && C && C.end(), (U = !1), A();
		}
	};
}
function at(t, e, a) {
	let n,
		{ imageShowingIndex: s = 0 } = e;
	const r = (t) => a(0, (s = Number(t)));
	return (
		(t.$$set = (t) => {
			'imageShowingIndex' in t && a(0, (s = t.imageShowingIndex));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && a(1, (n = R[s]));
		}),
		[
			s,
			n,
			() => {
				a(0, s === R.length - 1 ? (s = 0) : (s += 1));
			},
			() => {
				a(0, 0 === s ? (s = R.length - 1) : (s -= 1));
			},
			r,
			function (e) {
				v(t, e);
			},
			(t) => r(t)
		]
	);
}
class nt extends t {
	constructor(t) {
		super(), e(this, t, at, et, a, { imageShowingIndex: 0 });
	}
}
function st(t, e, a) {
	const n = t.slice();
	return (n[1] = e[a].id), (n[2] = e[a].imgurl), (n[3] = e[a].name), n;
}
function rt(t) {
	let e, a, s, r;
	return {
		c() {
			(e = n('img')), this.h();
		},
		l(t) {
			(e = i(t, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			g(e, 'id', t[1]),
				e.src !== (a = t[2]) && g(e, 'src', a),
				g(e, 'alt', t[3]),
				g(e, 'class', 'svelte-n8d4gx');
		},
		m(a, n) {
			$(a, e, n), s || ((r = h(e, 'click', t[0])), (s = !0));
		},
		p: f,
		d(t) {
			t && l(e), (s = !1), r();
		}
	};
}
function it(t) {
	let e,
		a = R,
		s = [];
	for (let n = 0; n < a.length; n += 1) s[n] = rt(st(t, a, n));
	return {
		c() {
			e = n('div');
			for (let t = 0; t < s.length; t += 1) s[t].c();
			this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var a = o(e);
			for (let e = 0; e < s.length; e += 1) s[e].l(a);
			a.forEach(l), this.h();
		},
		h() {
			g(e, 'class', 'DemoGallery svelte-n8d4gx');
		},
		m(t, a) {
			$(t, e, a);
			for (let n = 0; n < s.length; n += 1) s[n].m(e, null);
		},
		p(t, [n]) {
			if (0 & n) {
				let r;
				for (a = R, r = 0; r < a.length; r += 1) {
					const i = st(t, a, r);
					s[r] ? s[r].p(i, n) : ((s[r] = rt(i)), s[r].c(), s[r].m(e, null));
				}
				for (; r < s.length; r += 1) s[r].d(1);
				s.length = a.length;
			}
		},
		i: f,
		o: f,
		d(t) {
			t && l(e), T(s, t);
		}
	};
}
function ot(t) {
	return [
		function (e) {
			v(t, e);
		}
	];
}
class ct extends t {
	constructor(t) {
		super(), e(this, t, ot, it, a, {});
	}
}
function lt(t) {
	let e, a;
	return (
		(e = new ct({})),
		e.$on('click', t[2]),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
			},
			m(t, n) {
				I(e, t, n), (a = !0);
			},
			p: f,
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				E(e, t);
			}
		}
	);
}
function mt(t) {
	let e, a;
	return (
		(e = new nt({ props: { imageShowingIndex: t[1] } })),
		e.$on('click', t[3]),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
			},
			m(t, n) {
				I(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				2 & a && (n.imageShowingIndex = t[1]), e.$set(n);
			},
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				E(e, t);
			}
		}
	);
}
function gt(t) {
	let e, a, s, c, d, p;
	const f = [mt, lt],
		u = [];
	function h(t, e) {
		return t[0] ? 0 : 1;
	}
	return (
		(e = h(t)),
		(a = u[e] = f[e](t)),
		(d = new N({ props: { variante: 2, text: 'View All' } })),
		d.$on('click', t[4]),
		{
			c() {
				a.c(), (s = r()), (c = n('aside')), w(d.$$.fragment), this.h();
			},
			l(t) {
				a.l(t), (s = m(t)), (c = i(t, 'ASIDE', { class: !0 }));
				var e = o(c);
				_(d.$$.fragment, e), e.forEach(l), this.h();
			},
			h() {
				g(c, 'class', 'svelte-1tkegm6');
			},
			m(t, a) {
				u[e].m(t, a), $(t, s, a), $(t, c, a), I(d, c, null), (p = !0);
			},
			p(t, [n]) {
				let r = e;
				(e = h(t)),
					e === r
						? u[e].p(t, n)
						: (P(),
						  D(u[r], 1, 1, () => {
								u[r] = null;
						  }),
						  j(),
						  (a = u[e]),
						  a ? a.p(t, n) : ((a = u[e] = f[e](t)), a.c()),
						  k(a, 1),
						  a.m(s.parentNode, s));
			},
			i(t) {
				p || (k(a), k(d.$$.fragment, t), (p = !0));
			},
			o(t) {
				D(a), D(d.$$.fragment, t), (p = !1);
			},
			d(t) {
				u[e].d(t), t && l(s), t && l(c), E(d);
			}
		}
	);
}
function $t(t, e, a) {
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
class dt extends t {
	constructor(t) {
		super(), e(this, t, $t, gt, a, {});
	}
}
function pt(t) {
	let e, a, r, m, p, u, h, v;
	return {
		c() {
			(e = n('div')),
				(a = n('video')),
				(r = n('source')),
				(p = n('source')),
				(h = n('p')),
				(v = s('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(t) {
			e = i(t, 'DIV', { class: !0 });
			var n = o(e);
			a = i(n, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var s = o(a);
			(r = i(s, 'SOURCE', { src: !0, type: !0 })),
				(p = i(s, 'SOURCE', { src: !0, type: !0 })),
				(h = i(s, 'P', {}));
			var m = o(h);
			(v = c(m, 'Ups! Su navegador no soporta vídeos HTML5.')),
				m.forEach(l),
				s.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			r.src !== (m = '/img/desdelapoesiadelamateria.webm') &&
				g(r, 'src', '/img/desdelapoesiadelamateria.webm'),
				g(r, 'type', 'video/webm'),
				p.src !== (u = '/img/desdelapoesiadelamateria.mp4') &&
					g(p, 'src', '/img/desdelapoesiadelamateria.mp4'),
				g(p, 'type', 'video/mp4'),
				g(a, 'poster', '/img/cover3.jpg'),
				(a.loop = !0),
				(a.playsInline = !0),
				(a.controls = 'controls'),
				g(e, 'class', 'video-wrapper svelte-1vnv3v8');
		},
		m(t, n) {
			$(t, e, n), d(e, a), d(a, r), d(a, p), d(a, h), d(h, v);
		},
		p: f,
		i: f,
		o: f,
		d(t) {
			t && l(e);
		}
	};
}
class ft extends t {
	constructor(t) {
		super(), e(this, t, null, pt, a, {});
	}
}
function ut(t) {
	let e, a, s, c, p, u, h, v, b, x;
	return (
		(s = new U({ props: { tipo: 2, variante: 5, title: q[1].title, subtitle: q[1].subtitle } })),
		(u = new ft({})),
		(b = new M({
			props: {
				variante: 1,
				text:
					'Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia.'
			}
		})),
		{
			c() {
				(e = n('div')),
					(a = n('div')),
					w(s.$$.fragment),
					(c = r()),
					(p = n('div')),
					w(u.$$.fragment),
					(h = r()),
					(v = n('div')),
					w(b.$$.fragment),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var n = o(e);
				a = i(n, 'DIV', { class: !0 });
				var r = o(a);
				_(s.$$.fragment, r), r.forEach(l), (c = m(n)), (p = i(n, 'DIV', { class: !0 }));
				var g = o(p);
				_(u.$$.fragment, g), g.forEach(l), (h = m(n)), (v = i(n, 'DIV', { class: !0 }));
				var $ = o(v);
				_(b.$$.fragment, $), $.forEach(l), n.forEach(l), this.h();
			},
			h() {
				g(a, 'class', 'col_13 mh_3 bgc_primary dg_0 pcc c_4'),
					g(p, 'class', 'col_13 col_s2_8'),
					g(v, 'class', 'col_13 col_s2_5 mh_2 mh_s2_5 tac dg_0 pcc p_2'),
					g(e, 'class', 'dg c_1 bgc_4');
			},
			m(t, n) {
				$(t, e, n),
					d(e, a),
					I(s, a, null),
					d(e, c),
					d(e, p),
					I(u, p, null),
					d(e, h),
					d(e, v),
					I(b, v, null),
					(x = !0);
			},
			p: f,
			i(t) {
				x || (k(s.$$.fragment, t), k(u.$$.fragment, t), k(b.$$.fragment, t), (x = !0));
			},
			o(t) {
				D(s.$$.fragment, t), D(u.$$.fragment, t), D(b.$$.fragment, t), (x = !1);
			},
			d(t) {
				t && l(e), E(s), E(u), E(b);
			}
		}
	);
}
function ht(t) {
	let e, a, n, s;
	return (
		(e = new U({ props: { tipo: 1, variante: 3, title: 'Galería' } })),
		(n = new dt({})),
		{
			c() {
				w(e.$$.fragment), (a = r()), w(n.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t), (a = m(t)), _(n.$$.fragment, t);
			},
			m(t, r) {
				I(e, t, r), $(t, a, r), I(n, t, r), (s = !0);
			},
			p: f,
			i(t) {
				s || (k(e.$$.fragment, t), k(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				D(e.$$.fragment, t), D(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				E(e, t), t && l(a), E(n, t);
			}
		}
	);
}
function vt(t) {
	let e, a, s, c, p, u, h;
	return (
		(s = new A({ props: { variante: 1, src: './img/bg3.jpg', alt: 'Presentation' } })),
		(u = new M({
			props: {
				variante: 1,
				text:
					'En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original.'
			}
		})),
		{
			c() {
				(e = n('div')),
					(a = n('div')),
					w(s.$$.fragment),
					(c = r()),
					(p = n('div')),
					w(u.$$.fragment),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var n = o(e);
				a = i(n, 'DIV', { class: !0 });
				var r = o(a);
				_(s.$$.fragment, r), r.forEach(l), (c = m(n)), (p = i(n, 'DIV', { class: !0 }));
				var g = o(p);
				_(u.$$.fragment, g), g.forEach(l), n.forEach(l), this.h();
			},
			h() {
				g(a, 'class', 'col_13 col_s2_5'),
					g(p, 'class', 'col_13 col_s2_8 p_3 tac'),
					g(e, 'class', 'dg c_4');
			},
			m(t, n) {
				$(t, e, n), d(e, a), I(s, a, null), d(e, c), d(e, p), I(u, p, null), (h = !0);
			},
			p: f,
			i(t) {
				h || (k(s.$$.fragment, t), k(u.$$.fragment, t), (h = !0));
			},
			o(t) {
				D(s.$$.fragment, t), D(u.$$.fragment, t), (h = !1);
			},
			d(t) {
				t && l(e), E(s), E(u);
			}
		}
	);
}
function bt(t) {
	let e, a;
	return (
		(e = new C({ props: { tabHeaders: L } })),
		{
			c() {
				w(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
			},
			m(t, n) {
				I(e, t, n), (a = !0);
			},
			p: f,
			i(t) {
				a || (k(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				D(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				E(e, t);
			}
		}
	);
}
function xt(t) {
	let e, a, s, c, p, u, h, v, b;
	return (
		(a = new A({ props: { variante: 1, src: './img/bg2.jpg', alt: 'Presentation' } })),
		(u = new M({
			props: {
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(v = new N({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				(e = n('div')),
					w(a.$$.fragment),
					(s = r()),
					(c = n('div')),
					(p = n('div')),
					w(u.$$.fragment),
					(h = r()),
					w(v.$$.fragment),
					this.h();
			},
			l(t) {
				e = i(t, 'DIV', { class: !0 });
				var n = o(e);
				_(a.$$.fragment, n), n.forEach(l), (s = m(t)), (c = i(t, 'DIV', { class: !0 }));
				var r = o(c);
				p = i(r, 'DIV', { class: !0 });
				var g = o(p);
				_(u.$$.fragment, g), g.forEach(l), (h = m(r)), _(v.$$.fragment, r), r.forEach(l), this.h();
			},
			h() {
				g(e, 'class', 'col_13'),
					g(p, 'class', 'mw_7'),
					g(c, 'class', 'col_13 mh_0 dg_0 pt_3 pb_3 tac bgc_0 pcc_0 c_3 mh_s2_5 rg_1');
			},
			m(t, n) {
				$(t, e, n),
					I(a, e, null),
					$(t, s, n),
					$(t, c, n),
					d(c, p),
					I(u, p, null),
					d(c, h),
					I(v, c, null),
					(b = !0);
			},
			p: f,
			i(t) {
				b || (k(a.$$.fragment, t), k(u.$$.fragment, t), k(v.$$.fragment, t), (b = !0));
			},
			o(t) {
				D(a.$$.fragment, t), D(u.$$.fragment, t), D(v.$$.fragment, t), (b = !1);
			},
			d(t) {
				t && l(e), E(a), t && l(s), t && l(c), E(u), E(v);
			}
		}
	);
}
function wt(t) {
	let e, a, n, s, i, o, c, g, d, p;
	return (
		(e = new B({
			props: { id: 'cover', variante: 3, $$slots: { default: [ut] }, $$scope: { ctx: t } }
		})),
		(n = new B({
			props: {
				id: 'lightboxgallery',
				variante: 0,
				bg_color: 'bgc_5',
				$$slots: { default: [ht] },
				$$scope: { ctx: t }
			}
		})),
		(i = new B({ props: { variante: 1, $$slots: { default: [vt] }, $$scope: { ctx: t } } })),
		(c = new B({
			props: { id: 'proceso', variante: 2, $$slots: { default: [bt] }, $$scope: { ctx: t } }
		})),
		(d = new B({ props: { variante: 1, $$slots: { default: [xt] }, $$scope: { ctx: t } } })),
		{
			c() {
				w(e.$$.fragment),
					(a = r()),
					w(n.$$.fragment),
					(s = r()),
					w(i.$$.fragment),
					(o = r()),
					w(c.$$.fragment),
					(g = r()),
					w(d.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t),
					(a = m(t)),
					_(n.$$.fragment, t),
					(s = m(t)),
					_(i.$$.fragment, t),
					(o = m(t)),
					_(c.$$.fragment, t),
					(g = m(t)),
					_(d.$$.fragment, t);
			},
			m(t, r) {
				I(e, t, r),
					$(t, a, r),
					I(n, t, r),
					$(t, s, r),
					I(i, t, r),
					$(t, o, r),
					I(c, t, r),
					$(t, g, r),
					I(d, t, r),
					(p = !0);
			},
			p(t, [a]) {
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: t }), n.$set(r);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: t }), i.$set(o);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: t }), c.$set(l);
				const m = {};
				1 & a && (m.$$scope = { dirty: a, ctx: t }), d.$set(m);
			},
			i(t) {
				p ||
					(k(e.$$.fragment, t),
					k(n.$$.fragment, t),
					k(i.$$.fragment, t),
					k(c.$$.fragment, t),
					k(d.$$.fragment, t),
					(p = !0));
			},
			o(t) {
				D(e.$$.fragment, t),
					D(n.$$.fragment, t),
					D(i.$$.fragment, t),
					D(c.$$.fragment, t),
					D(d.$$.fragment, t),
					(p = !1);
			},
			d(t) {
				E(e, t), t && l(a), E(n, t), t && l(s), E(i, t), t && l(o), E(c, t), t && l(g), E(d, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, wt, a, {});
	}
}
