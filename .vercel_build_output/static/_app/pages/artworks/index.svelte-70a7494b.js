import {
	S as e,
	i as t,
	s as a,
	e as n,
	t as s,
	j as r,
	c as i,
	a as c,
	b as o,
	d as l,
	l as m,
	o as $,
	f as g,
	g as d,
	h as f,
	n as p,
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
	Q as y,
	Z as S,
	_ as V,
	J as T
} from '../../chunks/index-d91e1ed8.js';
import { B as N, c as C } from '../../chunks/Grid.svelte-1020bc4e.js';
import { T as L } from '../../chunks/Tabs-59db9e00.js';
import { t as G } from '../../chunks/miProceso-ec715937.js';
import { a as q, f as H } from '../../chunks/index-65311448.js';
import { H as U } from '../../chunks/Header-6d172df2.js';
import { I as A } from '../../chunks/Img-4f632789.js';
import { S as B } from '../../chunks/Section-ebe14856.js';
import { B as M } from '../../chunks/Blockquote-1808185b.js';
import '../../chunks/ListItem-9aa7bd94.js';
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
function O(e) {
	let t, a, u, h, v, b, x, w;
	return {
		c() {
			(t = n('div')),
				(a = n('div')),
				(u = s(e[0])),
				(h = s(' / ')),
				(v = s(e[1])),
				(b = r()),
				(x = n('img')),
				this.h();
		},
		l(n) {
			t = i(n, 'DIV', { class: !0 });
			var s = c(t);
			a = i(s, 'DIV', { class: !0 });
			var r = c(a);
			(u = o(r, e[0])),
				(h = o(r, ' / ')),
				(v = o(r, e[1])),
				r.forEach(l),
				(b = m(s)),
				(x = i(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })),
				s.forEach(l),
				this.h();
		},
		h() {
			$(a, 'class', 'numbertext svelte-9dkt4o'),
				x.src !== (w = e[2]) && $(x, 'src', w),
				$(x, 'alt', e[3]),
				$(x, 'title', e[4]),
				$(x, 'class', 'svelte-9dkt4o'),
				$(t, 'class', 'Slide svelte-9dkt4o');
		},
		m(e, n) {
			g(e, t, n), d(t, a), d(a, u), d(a, h), d(a, v), d(t, b), d(t, x);
		},
		p(e, [t]) {
			1 & t && f(u, e[0]),
				2 & t && f(v, e[1]),
				4 & t && x.src !== (w = e[2]) && $(x, 'src', w),
				8 & t && $(x, 'alt', e[3]),
				16 & t && $(x, 'title', e[4]);
		},
		i: p,
		o: p,
		d(e) {
			e && l(t);
		}
	};
}
function W(e, t, a) {
	let { slideNo: n } = t,
		{ totalSlides: s } = t,
		{ image: r } = t,
		{ altTag: i } = t,
		{ description: c } = t;
	return (
		(e.$$set = (e) => {
			'slideNo' in e && a(0, (n = e.slideNo)),
				'totalSlides' in e && a(1, (s = e.totalSlides)),
				'image' in e && a(2, (r = e.image)),
				'altTag' in e && a(3, (i = e.altTag)),
				'description' in e && a(4, (c = e.description));
		}),
		[n, s, r, i, c]
	);
}
class z extends e {
	constructor(e) {
		super(),
			t(this, e, W, O, a, { slideNo: 0, totalSlides: 1, image: 2, altTag: 3, description: 4 });
	}
}
function F(e) {
	let t, a, s, r;
	return {
		c() {
			(t = n('img')), this.h();
		},
		l(e) {
			(t = i(e, 'IMG', { class: !0, id: !0, src: !0, alt: !0, title: !0 })), this.h();
		},
		h() {
			$(t, 'class', 'sample cursor svelte-1mpj9u0'),
				$(t, 'id', e[3]),
				t.src !== (a = e[0]) && $(t, 'src', a),
				$(t, 'alt', e[1]),
				$(t, 'title', e[2]),
				u(t, 'active', e[4]);
		},
		m(a, n) {
			g(a, t, n), s || ((r = h(t, 'click', e[5])), (s = !0));
		},
		p(e, [n]) {
			8 & n && $(t, 'id', e[3]),
				1 & n && t.src !== (a = e[0]) && $(t, 'src', a),
				2 & n && $(t, 'alt', e[1]),
				4 & n && $(t, 'title', e[2]),
				16 & n && u(t, 'active', e[4]);
		},
		i: p,
		o: p,
		d(e) {
			e && l(t), (s = !1), r();
		}
	};
}
function J(e, t, a) {
	let { thumbImg: n } = t,
		{ altTag: s } = t,
		{ titleLink: r } = t,
		{ id: i } = t,
		{ selected: c } = t;
	return (
		(e.$$set = (e) => {
			'thumbImg' in e && a(0, (n = e.thumbImg)),
				'altTag' in e && a(1, (s = e.altTag)),
				'titleLink' in e && a(2, (r = e.titleLink)),
				'id' in e && a(3, (i = e.id)),
				'selected' in e && a(4, (c = e.selected));
		}),
		[
			n,
			s,
			r,
			i,
			c,
			function (t) {
				v(e, t);
			}
		]
	);
}
class K extends e {
	constructor(e) {
		super(), t(this, e, J, F, a, { thumbImg: 0, altTag: 1, titleLink: 2, id: 3, selected: 4 });
	}
}
function Q(e) {
	let t, a, u, v, x, w, _, I, k, D, E;
	return {
		c() {
			(t = n('div')),
				(a = n('a')),
				(u = s('❮')),
				(v = r()),
				(x = n('p')),
				(w = s(e[0])),
				(_ = r()),
				(I = n('a')),
				(k = s('❯')),
				this.h();
		},
		l(n) {
			t = i(n, 'DIV', { class: !0 });
			var s = c(t);
			a = i(s, 'A', { href: !0, class: !0 });
			var r = c(a);
			(u = o(r, '❮')), r.forEach(l), (v = m(s)), (x = i(s, 'P', { id: !0, class: !0 }));
			var $ = c(x);
			(w = o($, e[0])), $.forEach(l), (_ = m(s)), (I = i(s, 'A', { href: !0, class: !0 }));
			var g = c(I);
			(k = o(g, '❯')), g.forEach(l), s.forEach(l), this.h();
		},
		h() {
			$(a, 'href', '#arrowL'),
				$(a, 'class', 'arrow prev svelte-1nmo9m2'),
				$(x, 'id', 'caption'),
				$(x, 'class', 'svelte-1nmo9m2'),
				$(I, 'href', '#arrowR'),
				$(I, 'class', 'arrow next svelte-1nmo9m2'),
				$(t, 'class', 'caption-container svelte-1nmo9m2');
		},
		m(n, s) {
			g(n, t, s),
				d(t, a),
				d(a, u),
				d(t, v),
				d(t, x),
				d(x, w),
				d(t, _),
				d(t, I),
				d(I, k),
				D || ((E = [h(a, 'click', e[2]), h(I, 'click', e[3])]), (D = !0));
		},
		p(e, [t]) {
			1 & t && f(w, e[0]);
		},
		i: p,
		o: p,
		d(e) {
			e && l(t), (D = !1), b(E);
		}
	};
}
function Y(e, t, a) {
	let { caption: n } = t;
	const s = x();
	return (
		(e.$$set = (e) => {
			'caption' in e && a(0, (n = e.caption));
		}),
		[n, s, () => s('prevClick'), () => s('nextClick')]
	);
}
class Z extends e {
	constructor(e) {
		super(), t(this, e, Y, Q, a, { caption: 0 });
	}
}
function X(e, t, a) {
	const n = e.slice();
	return (n[7] = t[a].id), (n[8] = t[a].imgurl), (n[9] = t[a].name), n;
}
function ee(e) {
	let t, a;
	return (
		(t = new K({
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
				_(t.$$.fragment, e);
			},
			m(e, n) {
				I(t, e, n), (a = !0);
			},
			p(a, n) {
				e = a;
				const s = {};
				1 & n && (s.selected = Number(e[0]) === e[7]), t.$set(s);
			},
			i(e) {
				a || (k(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function te(e) {
	let t, a, f, p, u, v, b, x, N, C, L, G, U, A;
	(u = new z({
		props: {
			image: e[1].imgurl,
			altTag: e[1].name,
			attr: e[1].description,
			slideNo: e[1].id + 1,
			totalSlides: R.length
		}
	})),
		(b = new Z({ props: { caption: R[e[0]].description } })),
		b.$on('prevClick', e[3]),
		b.$on('nextClick', e[2]);
	let B = R,
		M = [];
	for (let n = 0; n < B.length; n += 1) M[n] = ee(X(e, B, n));
	const O = (e) =>
		D(M[e], 1, 1, () => {
			M[e] = null;
		});
	return {
		c() {
			(t = n('div')),
				(a = n('span')),
				(f = s('✗')),
				(p = r()),
				w(u.$$.fragment),
				(v = r()),
				w(b.$$.fragment),
				(x = r()),
				(N = n('div'));
			for (let e = 0; e < M.length; e += 1) M[e].c();
			this.h();
		},
		l(e) {
			t = i(e, 'DIV', { class: !0 });
			var n = c(t);
			a = i(n, 'SPAN', { class: !0 });
			var s = c(a);
			(f = o(s, '✗')),
				s.forEach(l),
				(p = m(n)),
				_(u.$$.fragment, n),
				(v = m(n)),
				_(b.$$.fragment, n),
				(x = m(n)),
				(N = i(n, 'DIV', { class: !0 }));
			var r = c(N);
			for (let t = 0; t < M.length; t += 1) M[t].l(r);
			r.forEach(l), n.forEach(l), this.h();
		},
		h() {
			$(a, 'class', 'close cursor svelte-1cectlc'),
				$(N, 'class', 'Thumbnails svelte-1cectlc'),
				$(t, 'class', 'lightbox svelte-1cectlc');
		},
		m(n, s) {
			g(n, t, s),
				d(t, a),
				d(a, f),
				d(t, p),
				I(u, t, null),
				d(t, v),
				I(b, t, null),
				d(t, x),
				d(t, N);
			for (let e = 0; e < M.length; e += 1) M[e].m(N, null);
			(G = !0), U || ((A = h(a, 'click', e[5])), (U = !0));
		},
		p(e, [t]) {
			const a = {};
			2 & t && (a.image = e[1].imgurl),
				2 & t && (a.altTag = e[1].name),
				2 & t && (a.attr = e[1].description),
				2 & t && (a.slideNo = e[1].id + 1),
				u.$set(a);
			const n = {};
			if ((1 & t && (n.caption = R[e[0]].description), b.$set(n), 17 & t)) {
				let a;
				for (B = R, a = 0; a < B.length; a += 1) {
					const n = X(e, B, a);
					M[a]
						? (M[a].p(n, t), k(M[a], 1))
						: ((M[a] = ee(n)), M[a].c(), k(M[a], 1), M[a].m(N, null));
				}
				for (P(), a = B.length; a < M.length; a += 1) O(a);
				j();
			}
		},
		i(e) {
			if (!G) {
				k(u.$$.fragment, e), k(b.$$.fragment, e);
				for (let e = 0; e < B.length; e += 1) k(M[e]);
				y(() => {
					L && L.end(1), C || (C = S(t, q, { x: -300 })), C.start();
				}),
					(G = !0);
			}
		},
		o(e) {
			D(u.$$.fragment, e), D(b.$$.fragment, e), (M = M.filter(Boolean));
			for (let t = 0; t < M.length; t += 1) D(M[t]);
			C && C.invalidate(), (L = V(t, H, {})), (G = !1);
		},
		d(e) {
			e && l(t), E(u), E(b), T(M, e), e && L && L.end(), (U = !1), A();
		}
	};
}
function ae(e, t, a) {
	let n,
		{ imageShowingIndex: s = 0 } = t;
	const r = (e) => a(0, (s = Number(e)));
	return (
		(e.$$set = (e) => {
			'imageShowingIndex' in e && a(0, (s = e.imageShowingIndex));
		}),
		(e.$$.update = () => {
			1 & e.$$.dirty && a(1, (n = R[s]));
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
			function (t) {
				v(e, t);
			},
			(e) => r(e)
		]
	);
}
class ne extends e {
	constructor(e) {
		super(), t(this, e, ae, te, a, { imageShowingIndex: 0 });
	}
}
function se(e, t, a) {
	const n = e.slice();
	return (n[1] = t[a].id), (n[2] = t[a].imgurl), (n[3] = t[a].name), n;
}
function re(e) {
	let t, a, s, r;
	return {
		c() {
			(t = n('img')), this.h();
		},
		l(e) {
			(t = i(e, 'IMG', { id: !0, src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			$(t, 'id', e[1]),
				t.src !== (a = e[2]) && $(t, 'src', a),
				$(t, 'alt', e[3]),
				$(t, 'class', 'svelte-ysof57');
		},
		m(a, n) {
			g(a, t, n), s || ((r = h(t, 'click', e[0])), (s = !0));
		},
		p: p,
		d(e) {
			e && l(t), (s = !1), r();
		}
	};
}
function ie(e) {
	let t,
		a = R,
		s = [];
	for (let n = 0; n < a.length; n += 1) s[n] = re(se(e, a, n));
	return {
		c() {
			t = n('div');
			for (let e = 0; e < s.length; e += 1) s[e].c();
			this.h();
		},
		l(e) {
			t = i(e, 'DIV', { class: !0 });
			var a = c(t);
			for (let t = 0; t < s.length; t += 1) s[t].l(a);
			a.forEach(l), this.h();
		},
		h() {
			$(t, 'class', 'DemoGallery svelte-ysof57');
		},
		m(e, a) {
			g(e, t, a);
			for (let n = 0; n < s.length; n += 1) s[n].m(t, null);
		},
		p(e, [n]) {
			if (0 & n) {
				let r;
				for (a = R, r = 0; r < a.length; r += 1) {
					const i = se(e, a, r);
					s[r] ? s[r].p(i, n) : ((s[r] = re(i)), s[r].c(), s[r].m(t, null));
				}
				for (; r < s.length; r += 1) s[r].d(1);
				s.length = a.length;
			}
		},
		i: p,
		o: p,
		d(e) {
			e && l(t), T(s, e);
		}
	};
}
function ce(e) {
	return [
		function (t) {
			v(e, t);
		}
	];
}
class oe extends e {
	constructor(e) {
		super(), t(this, e, ce, ie, a, {});
	}
}
function le(e) {
	let t, a;
	return (
		(t = new oe({})),
		t.$on('click', e[2]),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				_(t.$$.fragment, e);
			},
			m(e, n) {
				I(t, e, n), (a = !0);
			},
			p: p,
			i(e) {
				a || (k(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function me(e) {
	let t, a;
	return (
		(t = new ne({ props: { imageShowingIndex: e[1] } })),
		t.$on('click', e[3]),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				_(t.$$.fragment, e);
			},
			m(e, n) {
				I(t, e, n), (a = !0);
			},
			p(e, a) {
				const n = {};
				2 & a && (n.imageShowingIndex = e[1]), t.$set(n);
			},
			i(e) {
				a || (k(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function $e(e) {
	let t, a, s, o, d, f;
	const p = [me, le],
		u = [];
	function h(e, t) {
		return e[0] ? 0 : 1;
	}
	return (
		(t = h(e)),
		(a = u[t] = p[t](e)),
		(d = new N({ props: { variante: 2, text: 'View All' } })),
		d.$on('click', e[4]),
		{
			c() {
				a.c(), (s = r()), (o = n('aside')), w(d.$$.fragment), this.h();
			},
			l(e) {
				a.l(e), (s = m(e)), (o = i(e, 'ASIDE', { class: !0 }));
				var t = c(o);
				_(d.$$.fragment, t), t.forEach(l), this.h();
			},
			h() {
				$(o, 'class', 'svelte-gmo2o0');
			},
			m(e, a) {
				u[t].m(e, a), g(e, s, a), g(e, o, a), I(d, o, null), (f = !0);
			},
			p(e, [n]) {
				let r = t;
				(t = h(e)),
					t === r
						? u[t].p(e, n)
						: (P(),
						  D(u[r], 1, 1, () => {
								u[r] = null;
						  }),
						  j(),
						  (a = u[t]),
						  a ? a.p(e, n) : ((a = u[t] = p[t](e)), a.c()),
						  k(a, 1),
						  a.m(s.parentNode, s));
			},
			i(e) {
				f || (k(a), k(d.$$.fragment, e), (f = !0));
			},
			o(e) {
				D(a), D(d.$$.fragment, e), (f = !1);
			},
			d(e) {
				u[t].d(e), e && l(s), e && l(o), E(d);
			}
		}
	);
}
function ge(e, t, a) {
	let n = !1,
		s = 0;
	return [
		n,
		s,
		(e) => {
			a(1, (s = Number(e.target.id))), a(0, (n = !0));
		},
		() => a(0, (n = !1)),
		() => a(0, (n = !0))
	];
}
class de extends e {
	constructor(e) {
		super(), t(this, e, ge, $e, a, {});
	}
}
function fe(e) {
	let t, a, r, m, f, u, h, v;
	return {
		c() {
			(t = n('div')),
				(a = n('video')),
				(r = n('source')),
				(f = n('source')),
				(h = n('p')),
				(v = s('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(e) {
			t = i(e, 'DIV', { class: !0 });
			var n = c(t);
			a = i(n, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var s = c(a);
			(r = i(s, 'SOURCE', { src: !0, type: !0 })),
				(f = i(s, 'SOURCE', { src: !0, type: !0 })),
				(h = i(s, 'P', {}));
			var m = c(h);
			(v = o(m, 'Ups! Su navegador no soporta vídeos HTML5.')),
				m.forEach(l),
				s.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			r.src !== (m = '/img/desdelapoesiadelamateria.webm') &&
				$(r, 'src', '/img/desdelapoesiadelamateria.webm'),
				$(r, 'type', 'video/webm'),
				f.src !== (u = '/img/desdelapoesiadelamateria.mp4') &&
					$(f, 'src', '/img/desdelapoesiadelamateria.mp4'),
				$(f, 'type', 'video/mp4'),
				$(a, 'poster', '/img/cover3.jpg'),
				(a.loop = !0),
				(a.playsInline = !0),
				(a.controls = 'controls'),
				$(t, 'class', 'video-wrapper svelte-uq8ila');
		},
		m(e, n) {
			g(e, t, n), d(t, a), d(a, r), d(a, f), d(a, h), d(h, v);
		},
		p: p,
		i: p,
		o: p,
		d(e) {
			e && l(t);
		}
	};
}
class pe extends e {
	constructor(e) {
		super(), t(this, e, null, fe, a, {});
	}
}
function ue(e) {
	let t, a, s, o, f, u, h, v, b, x;
	return (
		(s = new U({ props: { tipo: 2, variante: 5, title: C[1].title, subtitle: C[1].subtitle } })),
		(u = new pe({})),
		(b = new M({
			props: {
				variante: 1,
				text:
					'Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia.'
			}
		})),
		{
			c() {
				(t = n('div')),
					(a = n('div')),
					w(s.$$.fragment),
					(o = r()),
					(f = n('div')),
					w(u.$$.fragment),
					(h = r()),
					(v = n('div')),
					w(b.$$.fragment),
					this.h();
			},
			l(e) {
				t = i(e, 'DIV', { class: !0 });
				var n = c(t);
				a = i(n, 'DIV', { class: !0 });
				var r = c(a);
				_(s.$$.fragment, r), r.forEach(l), (o = m(n)), (f = i(n, 'DIV', { class: !0 }));
				var $ = c(f);
				_(u.$$.fragment, $), $.forEach(l), (h = m(n)), (v = i(n, 'DIV', { class: !0 }));
				var g = c(v);
				_(b.$$.fragment, g), g.forEach(l), n.forEach(l), this.h();
			},
			h() {
				$(a, 'class', 'col_13 mh_3 bgc_primary dg_0 pcc c_4'),
					$(f, 'class', 'col_13 col_s2_8'),
					$(v, 'class', 'col_13 col_s2_5 mh_2 mh_s2_5 tac dg_0 pcc p_2'),
					$(t, 'class', 'dg c_1 bgc_4');
			},
			m(e, n) {
				g(e, t, n),
					d(t, a),
					I(s, a, null),
					d(t, o),
					d(t, f),
					I(u, f, null),
					d(t, h),
					d(t, v),
					I(b, v, null),
					(x = !0);
			},
			p: p,
			i(e) {
				x || (k(s.$$.fragment, e), k(u.$$.fragment, e), k(b.$$.fragment, e), (x = !0));
			},
			o(e) {
				D(s.$$.fragment, e), D(u.$$.fragment, e), D(b.$$.fragment, e), (x = !1);
			},
			d(e) {
				e && l(t), E(s), E(u), E(b);
			}
		}
	);
}
function he(e) {
	let t, a, n, s;
	return (
		(t = new U({ props: { tipo: 1, variante: 3, title: 'Galería' } })),
		(n = new de({})),
		{
			c() {
				w(t.$$.fragment), (a = r()), w(n.$$.fragment);
			},
			l(e) {
				_(t.$$.fragment, e), (a = m(e)), _(n.$$.fragment, e);
			},
			m(e, r) {
				I(t, e, r), g(e, a, r), I(n, e, r), (s = !0);
			},
			p: p,
			i(e) {
				s || (k(t.$$.fragment, e), k(n.$$.fragment, e), (s = !0));
			},
			o(e) {
				D(t.$$.fragment, e), D(n.$$.fragment, e), (s = !1);
			},
			d(e) {
				E(t, e), e && l(a), E(n, e);
			}
		}
	);
}
function ve(e) {
	let t, a, s, o, f, u, h;
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
				(t = n('div')),
					(a = n('div')),
					w(s.$$.fragment),
					(o = r()),
					(f = n('div')),
					w(u.$$.fragment),
					this.h();
			},
			l(e) {
				t = i(e, 'DIV', { class: !0 });
				var n = c(t);
				a = i(n, 'DIV', { class: !0 });
				var r = c(a);
				_(s.$$.fragment, r), r.forEach(l), (o = m(n)), (f = i(n, 'DIV', { class: !0 }));
				var $ = c(f);
				_(u.$$.fragment, $), $.forEach(l), n.forEach(l), this.h();
			},
			h() {
				$(a, 'class', 'col_13 col_s2_5'),
					$(f, 'class', 'col_13 col_s2_8 p_3 tac'),
					$(t, 'class', 'dg c_4');
			},
			m(e, n) {
				g(e, t, n), d(t, a), I(s, a, null), d(t, o), d(t, f), I(u, f, null), (h = !0);
			},
			p: p,
			i(e) {
				h || (k(s.$$.fragment, e), k(u.$$.fragment, e), (h = !0));
			},
			o(e) {
				D(s.$$.fragment, e), D(u.$$.fragment, e), (h = !1);
			},
			d(e) {
				e && l(t), E(s), E(u);
			}
		}
	);
}
function be(e) {
	let t, a;
	return (
		(t = new L({ props: { tabHeaders: G } })),
		{
			c() {
				w(t.$$.fragment);
			},
			l(e) {
				_(t.$$.fragment, e);
			},
			m(e, n) {
				I(t, e, n), (a = !0);
			},
			p: p,
			i(e) {
				a || (k(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function xe(e) {
	let t, a, s, o, f, u, h, v, b;
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
				(t = n('div')),
					w(a.$$.fragment),
					(s = r()),
					(o = n('div')),
					(f = n('div')),
					w(u.$$.fragment),
					(h = r()),
					w(v.$$.fragment),
					this.h();
			},
			l(e) {
				t = i(e, 'DIV', { class: !0 });
				var n = c(t);
				_(a.$$.fragment, n), n.forEach(l), (s = m(e)), (o = i(e, 'DIV', { class: !0 }));
				var r = c(o);
				f = i(r, 'DIV', { class: !0 });
				var $ = c(f);
				_(u.$$.fragment, $), $.forEach(l), (h = m(r)), _(v.$$.fragment, r), r.forEach(l), this.h();
			},
			h() {
				$(t, 'class', 'col_13'),
					$(f, 'class', 'mw_7'),
					$(o, 'class', 'col_13 mh_0 dg_0 pt_3 pb_3 tac bgc_0 pcc_0 c_3 mh_s2_5 rg_1');
			},
			m(e, n) {
				g(e, t, n),
					I(a, t, null),
					g(e, s, n),
					g(e, o, n),
					d(o, f),
					I(u, f, null),
					d(o, h),
					I(v, o, null),
					(b = !0);
			},
			p: p,
			i(e) {
				b || (k(a.$$.fragment, e), k(u.$$.fragment, e), k(v.$$.fragment, e), (b = !0));
			},
			o(e) {
				D(a.$$.fragment, e), D(u.$$.fragment, e), D(v.$$.fragment, e), (b = !1);
			},
			d(e) {
				e && l(t), E(a), e && l(s), e && l(o), E(u), E(v);
			}
		}
	);
}
function we(e) {
	let t, a, n, s, i, c, o, $, d, f;
	return (
		(t = new B({ props: { id: 'cover', $$slots: { default: [ue] }, $$scope: { ctx: e } } })),
		(n = new B({
			props: { id: 'lightboxgallery', $$slots: { default: [he] }, $$scope: { ctx: e } }
		})),
		(i = new B({ props: { $$slots: { default: [ve] }, $$scope: { ctx: e } } })),
		(o = new B({ props: { id: 'proceso', $$slots: { default: [be] }, $$scope: { ctx: e } } })),
		(d = new B({ props: { $$slots: { default: [xe] }, $$scope: { ctx: e } } })),
		{
			c() {
				w(t.$$.fragment),
					(a = r()),
					w(n.$$.fragment),
					(s = r()),
					w(i.$$.fragment),
					(c = r()),
					w(o.$$.fragment),
					($ = r()),
					w(d.$$.fragment);
			},
			l(e) {
				_(t.$$.fragment, e),
					(a = m(e)),
					_(n.$$.fragment, e),
					(s = m(e)),
					_(i.$$.fragment, e),
					(c = m(e)),
					_(o.$$.fragment, e),
					($ = m(e)),
					_(d.$$.fragment, e);
			},
			m(e, r) {
				I(t, e, r),
					g(e, a, r),
					I(n, e, r),
					g(e, s, r),
					I(i, e, r),
					g(e, c, r),
					I(o, e, r),
					g(e, $, r),
					I(d, e, r),
					(f = !0);
			},
			p(e, [a]) {
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: e }), t.$set(s);
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), n.$set(r);
				const c = {};
				1 & a && (c.$$scope = { dirty: a, ctx: e }), i.$set(c);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: e }), o.$set(l);
				const m = {};
				1 & a && (m.$$scope = { dirty: a, ctx: e }), d.$set(m);
			},
			i(e) {
				f ||
					(k(t.$$.fragment, e),
					k(n.$$.fragment, e),
					k(i.$$.fragment, e),
					k(o.$$.fragment, e),
					k(d.$$.fragment, e),
					(f = !0));
			},
			o(e) {
				D(t.$$.fragment, e),
					D(n.$$.fragment, e),
					D(i.$$.fragment, e),
					D(o.$$.fragment, e),
					D(d.$$.fragment, e),
					(f = !1);
			},
			d(e) {
				E(t, e), e && l(a), E(n, e), e && l(s), E(i, e), e && l(c), E(o, e), e && l($), E(d, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, we, a, {});
	}
}
