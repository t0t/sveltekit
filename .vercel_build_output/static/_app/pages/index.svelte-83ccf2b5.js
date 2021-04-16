import {
	S as t,
	i as e,
	s as n,
	e as a,
	t as r,
	j as s,
	c as o,
	a as i,
	b as c,
	d as l,
	l as u,
	o as $,
	P as f,
	f as h,
	g as m,
	h as p,
	Q as g,
	R as d,
	G as v,
	H as b,
	n as y,
	F as x,
	K as w,
	p as k,
	q,
	r as E,
	w as P,
	x as I,
	y as N,
	T as S,
	U as j,
	C as A,
	D,
	V as _,
	J as V,
	k as L
} from '../chunks/index-d91e1ed8.js';
import { S as O, H as C } from '../chunks/Header-a9ed1c92.js';
import { L as H, G as B, B as U } from '../chunks/ListItem-e194f349.js';
import { L as R } from '../chunks/List-23857782.js';
import { f as F } from '../chunks/index-65311448.js';
import { I as G } from '../chunks/Img-3fbf0e6b.js';
import { s as Q } from '../chunks/pages-508a9d98.js';
import '../chunks/index-78b22dae.js';
const T = [
	{
		quote: 'Aquel que sabe contar hasta cuatro puede conocer el universo entero',
		author: 'Pitágoras',
		image: '/img/bg1.jpg'
	},
	{
		quote: 'Lo que la realidad es, es su símbolo; el es, es el símbolo de lo real',
		author: 'Raimon Panikkar',
		image: '/img/bg2.jpg'
	},
	{
		quote:
			"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
		author: 'Ellen Degeneres',
		image: '/img/bg3.jpg'
	},
	{
		quote:
			'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.',
		author: 'Denis Wholey',
		image: '/img/img3.jpg'
	},
	{
		quote:
			'Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.',
		author: 'Helen Rowland',
		image: '/img/cover4.jpg'
	}
];
function W(t) {
	let e, n, v, b, y, x, w, k, q;
	return {
		c() {
			(e = a('div')),
				(n = a('q')),
				(v = r(t[0])),
				(b = s()),
				(y = a('p')),
				(x = r('—')),
				(w = r(t[1])),
				this.h();
		},
		l(a) {
			e = o(a, 'DIV', { class: !0, style: !0 });
			var r = i(e);
			n = o(r, 'Q', { class: !0 });
			var s = i(n);
			(v = c(s, t[0])), s.forEach(l), (b = u(r)), (y = o(r, 'P', { class: !0 }));
			var $ = i(y);
			(x = c($, '—')), (w = c($, t[1])), $.forEach(l), r.forEach(l), this.h();
		},
		h() {
			$(n, 'class', 'svelte-1ylgsd0'),
				$(y, 'class', 'author svelte-1ylgsd0'),
				$(e, 'class', 'mySlides svelte-1ylgsd0'),
				f(e, 'background-image', 'url(' + t[2] + ')');
		},
		m(t, a) {
			h(t, e, a), m(e, n), m(n, v), m(e, b), m(e, y), m(y, x), m(y, w), (q = !0);
		},
		p(t, [n]) {
			(!q || 1 & n) && p(v, t[0]),
				(!q || 2 & n) && p(w, t[1]),
				(!q || 4 & n) && f(e, 'background-image', 'url(' + t[2] + ')');
		},
		i(t) {
			q ||
				(g(() => {
					k || (k = d(e, F, {}, !0)), k.run(1);
				}),
				(q = !0));
		},
		o(t) {
			k || (k = d(e, F, {}, !1)), k.run(0), (q = !1);
		},
		d(t) {
			t && l(e), t && k && k.end();
		}
	};
}
function J(t, e, n) {
	let { quote: a } = e,
		{ author: r } = e,
		{ image: s } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && n(0, (a = t.quote)),
				'author' in t && n(1, (r = t.author)),
				'image' in t && n(2, (s = t.image));
		}),
		[a, r, s]
	);
}
class K extends t {
	constructor(t) {
		super(), e(this, t, J, W, n, { quote: 0, author: 1, image: 2 });
	}
}
function M(t) {
	let e, n, r, s;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { class: !0, title: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'class', 'dot svelte-1aawsh8'),
				$(e, 'title', (n = `quote by ${t[2]}`)),
				v(e, 'active', t[0] === t[1]),
				v(e, 'not-clickable', t[3]);
		},
		m(n, a) {
			h(n, e, a), r || ((s = b(e, 'click', t[4])), (r = !0));
		},
		p(t, [a]) {
			4 & a && n !== (n = `quote by ${t[2]}`) && $(e, 'title', n),
				3 & a && v(e, 'active', t[0] === t[1]),
				8 & a && v(e, 'not-clickable', t[3]);
		},
		i: y,
		o: y,
		d(t) {
			t && l(e), (r = !1), s();
		}
	};
}
function z(t, e, n) {
	let { quoteIndex: a } = e,
		{ counter: r } = e,
		{ attribution: s } = e,
		{ autoPlaying: o } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && n(0, (a = t.quoteIndex)),
				'counter' in t && n(1, (r = t.counter)),
				'attribution' in t && n(2, (s = t.attribution)),
				'autoPlaying' in t && n(3, (o = t.autoPlaying));
		}),
		[
			a,
			r,
			s,
			o,
			function (e) {
				x(t, e);
			}
		]
	);
}
class X extends t {
	constructor(t) {
		super(), e(this, t, z, M, n, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function Y(t) {
	let e, n, r, c, f, p, g;
	return {
		c() {
			(e = a('div')), (n = a('label')), (r = a('input')), (c = s()), (f = a('span')), this.h();
		},
		l(t) {
			e = o(t, 'DIV', { class: !0, id: !0 });
			var a = i(e);
			n = o(a, 'LABEL', { class: !0 });
			var s = i(n);
			(r = o(s, 'INPUT', { type: !0, class: !0 })),
				(c = u(s)),
				(f = o(s, 'SPAN', { class: !0 })),
				i(f).forEach(l),
				s.forEach(l),
				a.forEach(l),
				this.h();
		},
		h() {
			$(r, 'type', 'checkbox'),
				$(r, 'class', 'svelte-1ph28mb'),
				$(f, 'class', 'slider round svelte-1ph28mb'),
				$(n, 'class', 'switch svelte-1ph28mb'),
				$(e, 'class', 'switch-cont svelte-1ph28mb'),
				$(e, 'id', 'auto-play-cont');
		},
		m(a, s) {
			h(a, e, s),
				m(e, n),
				m(n, r),
				(r.checked = t[0]),
				m(n, c),
				m(n, f),
				p || ((g = [b(r, 'change', t[2]), b(r, 'change', t[1])]), (p = !0));
		},
		p(t, [e]) {
			1 & e && (r.checked = t[0]);
		},
		i: y,
		o: y,
		d(t) {
			t && l(e), (p = !1), w(g);
		}
	};
}
function Z(t, e, n) {
	let { switchOn: a } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && n(0, (a = t.switchOn));
		}),
		[
			a,
			function (e) {
				x(t, e);
			},
			function () {
				(a = this.checked), n(0, a);
			}
		]
	);
}
class tt extends t {
	constructor(t) {
		super(), e(this, t, Z, Y, n, { switchOn: 0 });
	}
}
function et(t, e, n) {
	const a = t.slice();
	return (a[5] = e[n]), (a[13] = n), a;
}
function nt(t) {
	let e, n;
	return (
		(e = new K({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				32 & n && (a.quote = t[5]),
					8 & n && (a.author = t[3]),
					16 & n && (a.image = t[4]),
					e.$set(a);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function at(t) {
	let e, n;
	return (
		(e = new X({
			props: { counter: t[13], quoteIndex: t[0], autoPlaying: t[2], attribution: t[5].author }
		})),
		e.$on('click', function () {
			return t[9](t[13]);
		}),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p(n, a) {
				t = n;
				const r = {};
				1 & a && (r.quoteIndex = t[0]), 4 & a && (r.autoPlaying = t[2]), e.$set(r);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function rt(t) {
	let e,
		f,
		p,
		g,
		d,
		x,
		L,
		O,
		C,
		H,
		B,
		U,
		R,
		F,
		G,
		Q = t[5],
		W = nt(t),
		J = T,
		K = [];
	for (let n = 0; n < J.length; n += 1) K[n] = at(et(t, J, n));
	const M = (t) =>
		I(K[t], 1, 1, () => {
			K[t] = null;
		});
	function z(e) {
		t[10](e);
	}
	let X = {};
	return (
		void 0 !== t[1] && (X.switchOn = t[1]),
		(B = new tt({ props: X })),
		S.push(() => j(B, 'switchOn', z)),
		B.$on('change', t[8]),
		{
			c() {
				(e = a('div')),
					W.c(),
					(f = s()),
					(p = a('span')),
					(g = r('❮')),
					(d = s()),
					(x = a('span')),
					(L = r('❯')),
					(O = s()),
					(C = a('div'));
				for (let t = 0; t < K.length; t += 1) K[t].c();
				(H = s()), k(B.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { class: !0 });
				var n = i(e);
				W.l(n), (f = u(n)), (p = o(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var a = i(p);
				(g = c(a, '❮')),
					a.forEach(l),
					(d = u(n)),
					(x = o(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var r = i(x);
				(L = c(r, '❯')), r.forEach(l), (O = u(n)), (C = o(n, 'DIV', { class: !0 }));
				var s = i(C);
				for (let e = 0; e < K.length; e += 1) K[e].l(s);
				(H = u(s)), q(B.$$.fragment, s), s.forEach(l), n.forEach(l), this.h();
			},
			h() {
				$(p, 'href', '#prev'),
					$(p, 'class', 'prev svelte-nnpsk'),
					$(p, 'title', 'previous quote'),
					v(p, 'not-clickable', t[2]),
					$(x, 'href', '#next'),
					$(x, 'class', 'next svelte-nnpsk'),
					$(x, 'title', 'next quote'),
					v(x, 'not-clickable', t[2]),
					$(C, 'class', 'dot-container svelte-nnpsk'),
					$(e, 'class', 'slideshow-container svelte-nnpsk');
			},
			m(n, a) {
				h(n, e, a),
					W.m(e, null),
					m(e, f),
					m(e, p),
					m(p, g),
					m(e, d),
					m(e, x),
					m(x, L),
					m(e, O),
					m(e, C);
				for (let t = 0; t < K.length; t += 1) K[t].m(C, null);
				m(C, H),
					E(B, C, null),
					(R = !0),
					F || ((G = [b(p, 'click', t[7]), b(x, 'click', t[6])]), (F = !0));
			},
			p(t, [a]) {
				if (
					(32 & a && n(Q, (Q = t[5]))
						? (A(), I(W, 1, 1, y), D(), (W = nt(t)), W.c(), P(W), W.m(e, f))
						: W.p(t, a),
					4 & a && v(p, 'not-clickable', t[2]),
					4 & a && v(x, 'not-clickable', t[2]),
					5 & a)
				) {
					let e;
					for (J = T, e = 0; e < J.length; e += 1) {
						const n = et(t, J, e);
						K[e]
							? (K[e].p(n, a), P(K[e], 1))
							: ((K[e] = at(n)), K[e].c(), P(K[e], 1), K[e].m(C, H));
					}
					for (A(), e = J.length; e < K.length; e += 1) M(e);
					D();
				}
				const r = {};
				!U && 2 & a && ((U = !0), (r.switchOn = t[1]), _(() => (U = !1))), B.$set(r);
			},
			i(t) {
				if (!R) {
					P(W);
					for (let t = 0; t < J.length; t += 1) P(K[t]);
					P(B.$$.fragment, t), (R = !0);
				}
			},
			o(t) {
				I(W), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) I(K[e]);
				I(B.$$.fragment, t), (R = !1);
			},
			d(t) {
				t && l(e), W.d(t), V(K, t), N(B), (F = !1), w(G);
			}
		}
	);
}
function st(t, e, n) {
	let a,
		r,
		s,
		o = 0;
	const i = () => {
		n(0, o === T.length - 1 ? (o = 0) : (o += 1));
	};
	let c,
		l = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && n(5, (a = T[o].quote)),
				1 & t.$$.dirty && n(3, (r = T[o].author)),
				1 & t.$$.dirty && n(4, (s = T[o].image));
		}),
		[
			o,
			l,
			u,
			r,
			s,
			a,
			i,
			() => {
				n(0, 0 === o ? (o = T.length - 1) : (o -= 1));
			},
			() => {
				l ? ((c = setInterval(i, 5e3)), n(2, (u = !0))) : (clearInterval(c), n(2, (u = !1)));
			},
			(t) => n(0, (o = t)),
			function (t) {
				(l = t), n(1, l);
			}
		]
	);
}
class ot extends t {
	constructor(t) {
		super(), e(this, t, st, rt, n, {});
	}
}
function it(t, e, n) {
	const a = t.slice();
	return (a[3] = e[n].url), (a[4] = e[n].name), (a[5] = e[n].description), a;
}
function ct(t) {
	let e,
		n,
		$,
		f,
		g,
		d = t[4] + '',
		v = t[5] + '';
	return {
		c() {
			(e = r(d)), (n = s()), ($ = a('span')), (f = r(v)), (g = s());
		},
		l(t) {
			(e = c(t, d)), (n = u(t)), ($ = o(t, 'SPAN', {}));
			var a = i($);
			(f = c(a, v)), a.forEach(l), (g = u(t));
		},
		m(t, a) {
			h(t, e, a), h(t, n, a), h(t, $, a), m($, f), h(t, g, a);
		},
		p(t, n) {
			1 & n && d !== (d = t[4] + '') && p(e, d), 1 & n && v !== (v = t[5] + '') && p(f, v);
		},
		d(t) {
			t && l(e), t && l(n), t && l($), t && l(g);
		}
	};
}
function lt(t) {
	let e, n;
	return (
		(e = new H({
			props: {
				tipo: 2,
				variante: t[1],
				href: t[3],
				alt: t[4],
				$$slots: { default: [ct] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				2 & n && (a.variante = t[1]),
					1 & n && (a.href = t[3]),
					1 & n && (a.alt = t[4]),
					513 & n && (a.$$scope = { dirty: n, ctx: t }),
					e.$set(a);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function ut(t) {
	let e,
		n,
		a = t[0],
		r = [];
	for (let o = 0; o < a.length; o += 1) r[o] = lt(it(t, a, o));
	const s = (t) =>
		I(r[t], 1, 1, () => {
			r[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < r.length; t += 1) r[t].c();
			e = L();
		},
		l(t) {
			for (let e = 0; e < r.length; e += 1) r[e].l(t);
			e = L();
		},
		m(t, a) {
			for (let e = 0; e < r.length; e += 1) r[e].m(t, a);
			h(t, e, a), (n = !0);
		},
		p(t, n) {
			if (3 & n) {
				let o;
				for (a = t[0], o = 0; o < a.length; o += 1) {
					const s = it(t, a, o);
					r[o]
						? (r[o].p(s, n), P(r[o], 1))
						: ((r[o] = lt(s)), r[o].c(), P(r[o], 1), r[o].m(e.parentNode, e));
				}
				for (A(), o = a.length; o < r.length; o += 1) s(o);
				D();
			}
		},
		i(t) {
			if (!n) {
				for (let t = 0; t < a.length; t += 1) P(r[t]);
				n = !0;
			}
		},
		o(t) {
			r = r.filter(Boolean);
			for (let e = 0; e < r.length; e += 1) I(r[e]);
			n = !1;
		},
		d(t) {
			V(r, t), t && l(e);
		}
	};
}
function $t(t) {
	let e, n;
	return (
		(e = new R({
			props: { tipo: 3, variante: t[2], $$slots: { default: [ut] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p(t, [n]) {
				const a = {};
				4 & n && (a.variante = t[2]), 515 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function ft(t, e, n) {
	let { secondaryNav: a = [{}] } = e,
		{ url: r = '' } = e,
		{ name: s = '' } = e,
		{ description: o = '' } = e,
		{ variante_item: i = '4' } = e,
		{ variante_list: c = '4' } = e,
		{ tipo: l = '4' } = e;
	return (
		(t.$$set = (t) => {
			'secondaryNav' in t && n(0, (a = t.secondaryNav)),
				'url' in t && n(3, (r = t.url)),
				'name' in t && n(4, (s = t.name)),
				'description' in t && n(5, (o = t.description)),
				'variante_item' in t && n(1, (i = t.variante_item)),
				'variante_list' in t && n(2, (c = t.variante_list)),
				'tipo' in t && n(6, (l = t.tipo));
		}),
		[a, i, c, r, s, o, l]
	);
}
class ht extends t {
	constructor(t) {
		super(),
			e(this, t, ft, $t, n, {
				secondaryNav: 0,
				url: 3,
				name: 4,
				description: 5,
				variante_item: 1,
				variante_list: 2,
				tipo: 6
			});
	}
}
function mt(t) {
	let e, n, r;
	return (
		(n = new C({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: 'Hermenéutica Holística' }
		})),
		{
			c() {
				(e = a('span')), k(n.$$.fragment);
			},
			l(t) {
				e = o(t, 'SPAN', {});
				var a = i(e);
				q(n.$$.fragment, a), a.forEach(l);
			},
			m(t, a) {
				h(t, e, a), E(n, e, null), (r = !0);
			},
			p: y,
			i(t) {
				r || (P(n.$$.fragment, t), (r = !0));
			},
			o(t) {
				I(n.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && l(e), N(n);
			}
		}
	);
}
function pt(t) {
	let e, n, r;
	return (
		(n = new ht({ props: { secondaryNav: Q, variante_item: 1, variante_list: 6 } })),
		{
			c() {
				(e = a('span')), k(n.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'SPAN', { slot: !0 });
				var a = i(e);
				q(n.$$.fragment, a), a.forEach(l), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1');
			},
			m(t, a) {
				h(t, e, a), E(n, e, null), (r = !0);
			},
			p: y,
			i(t) {
				r || (P(n.$$.fragment, t), (r = !0));
			},
			o(t) {
				I(n.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && l(e), N(n);
			}
		}
	);
}
function gt(t) {
	let e;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, n) {
			h(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function dt(t) {
	let e;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea3');
		},
		m(t, n) {
			h(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function vt(t) {
	let e;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea4');
		},
		m(t, n) {
			h(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function bt(t) {
	let e;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea5');
		},
		m(t, n) {
			h(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function yt(t) {
	let e;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea6');
		},
		m(t, n) {
			h(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function xt(t) {
	let e, n;
	return (
		(e = new B({
			props: {
				tipo: 1,
				variante: 6,
				$$slots: {
					subarea6: [yt],
					subarea5: [bt],
					subarea4: [vt],
					subarea3: [dt],
					subarea2: [gt],
					subarea1: [pt],
					default: [mt]
				},
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function wt(t) {
	let e, n;
	return (
		(e = new ot({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function kt(t) {
	let e, n;
	return (
		(e = new G({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p: y,
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function qt(t) {
	let e, n, s;
	return {
		c() {
			(e = a('div')),
				(n = a('p')),
				(s = r(
					'Descifrando la Creación, en la intersección del arte, la tecnología y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexión.'
				)),
				this.h();
		},
		l(t) {
			e = o(t, 'DIV', { slot: !0 });
			var a = i(e);
			n = o(a, 'P', {});
			var r = i(n);
			(s = c(
				r,
				'Descifrando la Creación, en la intersección del arte, la tecnología y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexión.'
			)),
				r.forEach(l),
				a.forEach(l),
				this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, a) {
			h(t, e, a), m(e, n), m(n, s);
		},
		d(t) {
			t && l(e);
		}
	};
}
function Et(t) {
	let e, n, r;
	return (
		(n = new U({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				(e = a('div')), k(n.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { slot: !0 });
				var a = i(e);
				q(n.$$.fragment, a), a.forEach(l), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1');
			},
			m(t, a) {
				h(t, e, a), E(n, e, null), (r = !0);
			},
			p: y,
			i(t) {
				r || (P(n.$$.fragment, t), (r = !0));
			},
			o(t) {
				I(n.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && l(e), N(n);
			}
		}
	);
}
function Pt(t) {
	let e, n;
	return (
		(e = new B({
			props: {
				variante: 5,
				$$slots: { subarea1: [Et], subarea2: [qt], default: [kt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function It(t) {
	let e, n;
	return (
		(e = new G({ props: { variante: 4, src: './img/cover4.jpg', alt: 'Presentation' } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p: y,
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function Nt(t) {
	let e, n, s;
	return {
		c() {
			(e = a('div')),
				(n = a('p')),
				(s = r(
					'El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma un tipo de conexión trascendental.'
				)),
				this.h();
		},
		l(t) {
			e = o(t, 'DIV', { slot: !0 });
			var a = i(e);
			n = o(a, 'P', {});
			var r = i(n);
			(s = c(
				r,
				'El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma un tipo de conexión trascendental.'
			)),
				r.forEach(l),
				a.forEach(l),
				this.h();
		},
		h() {
			$(e, 'slot', 'subarea1');
		},
		m(t, a) {
			h(t, e, a), m(e, n), m(n, s);
		},
		d(t) {
			t && l(e);
		}
	};
}
function St(t) {
	let e;
	return {
		c() {
			(e = a('div')), this.h();
		},
		l(t) {
			(e = o(t, 'DIV', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, n) {
			h(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function jt(t) {
	let e, n;
	return (
		(e = new B({
			props: {
				variante: 4,
				$$slots: { subarea2: [St], subarea1: [Nt], default: [It] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, a) {
				E(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (P(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function At(t) {
	let e, n, a, r, o, i, c, $, f, m;
	return (
		(e = new O({
			props: {
				id: 'cover',
				variante: 8,
				bg_color: 5,
				$$slots: { default: [xt] },
				$$scope: { ctx: t }
			}
		})),
		(a = new O({
			props: { id: 'quoterotator', variante: 3, $$slots: { default: [wt] }, $$scope: { ctx: t } }
		})),
		(o = new C({
			props: { tipo: 1, variante: 3, title: 'Percibir la conexión esencial de todo', subtitle: '' }
		})),
		(c = new O({
			props: { variante: 3, bg_color: 1, $$slots: { default: [Pt] }, $$scope: { ctx: t } }
		})),
		(f = new O({
			props: { variante: 3, bg_color: 1, $$slots: { default: [jt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				k(e.$$.fragment),
					(n = s()),
					k(a.$$.fragment),
					(r = s()),
					k(o.$$.fragment),
					(i = s()),
					k(c.$$.fragment),
					($ = s()),
					k(f.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t),
					(n = u(t)),
					q(a.$$.fragment, t),
					(r = u(t)),
					q(o.$$.fragment, t),
					(i = u(t)),
					q(c.$$.fragment, t),
					($ = u(t)),
					q(f.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s),
					h(t, n, s),
					E(a, t, s),
					h(t, r, s),
					E(o, t, s),
					h(t, i, s),
					E(c, t, s),
					h(t, $, s),
					E(f, t, s),
					(m = !0);
			},
			p(t, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), a.$set(s);
				const o = {};
				1 & n && (o.$$scope = { dirty: n, ctx: t }), c.$set(o);
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: t }), f.$set(i);
			},
			i(t) {
				m ||
					(P(e.$$.fragment, t),
					P(a.$$.fragment, t),
					P(o.$$.fragment, t),
					P(c.$$.fragment, t),
					P(f.$$.fragment, t),
					(m = !0));
			},
			o(t) {
				I(e.$$.fragment, t),
					I(a.$$.fragment, t),
					I(o.$$.fragment, t),
					I(c.$$.fragment, t),
					I(f.$$.fragment, t),
					(m = !1);
			},
			d(t) {
				N(e, t), t && l(n), N(a, t), t && l(r), N(o, t), t && l(i), N(c, t), t && l($), N(f, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, At, n, {});
	}
}
