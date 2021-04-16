import {
	S as t,
	i as e,
	s as a,
	e as n,
	p as s,
	c as r,
	a as o,
	q as c,
	d as l,
	o as i,
	P as u,
	f,
	r as h,
	w as m,
	Q as $,
	R as g,
	x as p,
	y as d,
	t as v,
	j as b,
	b as x,
	l as _,
	g as y,
	h as w,
	G as k,
	H as q,
	n as I,
	F as E,
	K as j,
	T as P,
	U as D,
	C as N,
	D as V,
	V as S,
	J as A,
	k as B
} from '../chunks/index-d91e1ed8.js';
import { c as O, B as L } from '../chunks/Grid.svelte-393f5de7.js';
import { s as z } from '../chunks/pages-cee8d843.js';
import { H as R } from '../chunks/Header-2dba8d98.js';
import { L as H, a as W } from '../chunks/ListItem-df6649ee.js';
import { B as C } from '../chunks/Blockquote-589a86f2.js';
import { f as F } from '../chunks/index-65311448.js';
import { I as G } from '../chunks/Img-01748947.js';
import '../chunks/index-78b22dae.js';
const Q = [
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
		quote: 'El mundo es un conglomerado de maneras diferentes de que ocurra siempre lo mismo.',
		author: '+0+1234',
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
function T(t) {
	let e, a, s, c;
	return {
		c() {
			(e = n('q')), (a = v(t[0])), (s = b()), (c = n('br')), this.h();
		},
		l(n) {
			e = r(n, 'Q', { class: !0 });
			var i = o(e);
			(a = x(i, t[0])), i.forEach(l), (s = _(n)), (c = r(n, 'BR', { class: !0 })), this.h();
		},
		h() {
			i(e, 'class', 'svelte-8f0xrm'), i(c, 'class', 'svelte-8f0xrm');
		},
		m(t, n) {
			f(t, e, n), y(e, a), f(t, s, n), f(t, c, n);
		},
		p(t, e) {
			1 & e && w(a, t[0]);
		},
		d(t) {
			t && l(e), t && l(s), t && l(c);
		}
	};
}
function U(t) {
	let e, a, s;
	return {
		c() {
			(e = n('span')), (a = v('— ')), (s = v(t[1])), this.h();
		},
		l(n) {
			e = r(n, 'SPAN', { slot: !0, class: !0 });
			var c = o(e);
			(a = x(c, '— ')), (s = x(c, t[1])), c.forEach(l), this.h();
		},
		h() {
			i(e, 'slot', 'author'), i(e, 'class', 'svelte-8f0xrm');
		},
		m(t, n) {
			f(t, e, n), y(e, a), y(e, s);
		},
		p(t, e) {
			2 & e && w(s, t[1]);
		},
		d(t) {
			t && l(e);
		}
	};
}
function J(t) {
	let e, a, v, b;
	return (
		(a = new C({ props: { $$slots: { author: [U], default: [T] }, $$scope: { ctx: t } } })),
		{
			c() {
				(e = n('div')), s(a.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0, style: !0 });
				var n = o(e);
				c(a.$$.fragment, n), n.forEach(l), this.h();
			},
			h() {
				i(e, 'class', 'mySlides svelte-8f0xrm'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, n) {
				f(t, e, n), h(a, e, null), (b = !0);
			},
			p(t, [n]) {
				const s = {};
				11 & n && (s.$$scope = { dirty: n, ctx: t }),
					a.$set(s),
					(!b || 4 & n) && u(e, 'background-image', 'url(' + t[2] + ')');
			},
			i(t) {
				b ||
					(m(a.$$.fragment, t),
					$(() => {
						v || (v = g(e, F, {}, !0)), v.run(1);
					}),
					(b = !0));
			},
			o(t) {
				p(a.$$.fragment, t), v || (v = g(e, F, {}, !1)), v.run(0), (b = !1);
			},
			d(t) {
				t && l(e), d(a), t && v && v.end();
			}
		}
	);
}
function K(t, e, a) {
	let { quote: n } = e,
		{ author: s } = e,
		{ image: r } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && a(0, (n = t.quote)),
				'author' in t && a(1, (s = t.author)),
				'image' in t && a(2, (r = t.image));
		}),
		[n, s, r]
	);
}
class M extends t {
	constructor(t) {
		super(), e(this, t, K, J, a, { quote: 0, author: 1, image: 2 });
	}
}
function X(t) {
	let e, a, s, c;
	return {
		c() {
			(e = n('span')), this.h();
		},
		l(t) {
			(e = r(t, 'SPAN', { class: !0, title: !0 })), o(e).forEach(l), this.h();
		},
		h() {
			i(e, 'class', 'dot svelte-xhezfi'),
				i(e, 'title', (a = `quote by ${t[2]}`)),
				k(e, 'active', t[0] === t[1]),
				k(e, 'not-clickable', t[3]);
		},
		m(a, n) {
			f(a, e, n), s || ((c = q(e, 'click', t[4])), (s = !0));
		},
		p(t, [n]) {
			4 & n && a !== (a = `quote by ${t[2]}`) && i(e, 'title', a),
				3 & n && k(e, 'active', t[0] === t[1]),
				8 & n && k(e, 'not-clickable', t[3]);
		},
		i: I,
		o: I,
		d(t) {
			t && l(e), (s = !1), c();
		}
	};
}
function Y(t, e, a) {
	let { quoteIndex: n } = e,
		{ counter: s } = e,
		{ attribution: r } = e,
		{ autoPlaying: o } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && a(0, (n = t.quoteIndex)),
				'counter' in t && a(1, (s = t.counter)),
				'attribution' in t && a(2, (r = t.attribution)),
				'autoPlaying' in t && a(3, (o = t.autoPlaying));
		}),
		[
			n,
			s,
			r,
			o,
			function (e) {
				E(t, e);
			}
		]
	);
}
class Z extends t {
	constructor(t) {
		super(), e(this, t, Y, X, a, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function tt(t) {
	let e, a, s, c, u, h, m;
	return {
		c() {
			(e = n('div')), (a = n('label')), (s = n('input')), (c = b()), (u = n('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var n = o(e);
			a = r(n, 'LABEL', { class: !0 });
			var i = o(a);
			(s = r(i, 'INPUT', { type: !0, class: !0 })),
				(c = _(i)),
				(u = r(i, 'SPAN', { class: !0 })),
				o(u).forEach(l),
				i.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			i(s, 'type', 'checkbox'),
				i(s, 'class', 'svelte-w3nwjc'),
				i(u, 'class', 'slider round svelte-w3nwjc'),
				i(a, 'class', 'switch svelte-w3nwjc'),
				i(e, 'class', 'switch-cont svelte-w3nwjc'),
				i(e, 'id', 'auto-play-cont');
		},
		m(n, r) {
			f(n, e, r),
				y(e, a),
				y(a, s),
				(s.checked = t[0]),
				y(a, c),
				y(a, u),
				h || ((m = [q(s, 'change', t[2]), q(s, 'change', t[1])]), (h = !0));
		},
		p(t, [e]) {
			1 & e && (s.checked = t[0]);
		},
		i: I,
		o: I,
		d(t) {
			t && l(e), (h = !1), j(m);
		}
	};
}
function et(t, e, a) {
	let { switchOn: n } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && a(0, (n = t.switchOn));
		}),
		[
			n,
			function (e) {
				E(t, e);
			},
			function () {
				(n = this.checked), a(0, n);
			}
		]
	);
}
class at extends t {
	constructor(t) {
		super(), e(this, t, et, tt, a, { switchOn: 0 });
	}
}
function nt(t, e, a) {
	const n = t.slice();
	return (n[5] = e[a]), (n[13] = a), n;
}
function st(t) {
	let e, a;
	return (
		(e = new M({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, n) {
				h(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				32 & a && (n.quote = t[5]),
					8 & a && (n.author = t[3]),
					16 & a && (n.image = t[4]),
					e.$set(n);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function rt(t) {
	let e, a;
	return (
		(e = new Z({
			props: { counter: t[13], quoteIndex: t[0], autoPlaying: t[2], attribution: t[5].author }
		})),
		e.$on('click', function () {
			return t[9](t[13]);
		}),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, n) {
				h(e, t, n), (a = !0);
			},
			p(a, n) {
				t = a;
				const s = {};
				1 & n && (s.quoteIndex = t[0]), 4 & n && (s.autoPlaying = t[2]), e.$set(s);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function ot(t) {
	let e,
		u,
		$,
		g,
		w,
		E,
		B,
		O,
		L,
		z,
		R,
		H,
		W,
		C,
		F,
		G = t[5],
		T = st(t),
		U = Q,
		J = [];
	for (let a = 0; a < U.length; a += 1) J[a] = rt(nt(t, U, a));
	const K = (t) =>
		p(J[t], 1, 1, () => {
			J[t] = null;
		});
	function M(e) {
		t[10](e);
	}
	let X = {};
	return (
		void 0 !== t[1] && (X.switchOn = t[1]),
		(R = new at({ props: X })),
		P.push(() => D(R, 'switchOn', M)),
		R.$on('change', t[8]),
		{
			c() {
				(e = n('div')),
					T.c(),
					(u = b()),
					($ = n('span')),
					(g = v('❮')),
					(w = b()),
					(E = n('span')),
					(B = v('❯')),
					(O = b()),
					(L = n('div'));
				for (let t = 0; t < J.length; t += 1) J[t].c();
				(z = b()), s(R.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var a = o(e);
				T.l(a), (u = _(a)), ($ = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = o($);
				(g = x(n, '❮')),
					n.forEach(l),
					(w = _(a)),
					(E = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o(E);
				(B = x(s, '❯')), s.forEach(l), (O = _(a)), (L = r(a, 'DIV', { class: !0 }));
				var i = o(L);
				for (let e = 0; e < J.length; e += 1) J[e].l(i);
				(z = _(i)), c(R.$$.fragment, i), i.forEach(l), a.forEach(l), this.h();
			},
			h() {
				i($, 'href', '#prev'),
					i($, 'class', 'prev svelte-1dcz1lc'),
					i($, 'title', 'previous quote'),
					k($, 'not-clickable', t[2]),
					i(E, 'href', '#next'),
					i(E, 'class', 'next svelte-1dcz1lc'),
					i(E, 'title', 'next quote'),
					k(E, 'not-clickable', t[2]),
					i(L, 'class', 'dot-container svelte-1dcz1lc'),
					i(e, 'class', 'slideshow-container svelte-1dcz1lc');
			},
			m(a, n) {
				f(a, e, n),
					T.m(e, null),
					y(e, u),
					y(e, $),
					y($, g),
					y(e, w),
					y(e, E),
					y(E, B),
					y(e, O),
					y(e, L);
				for (let t = 0; t < J.length; t += 1) J[t].m(L, null);
				y(L, z),
					h(R, L, null),
					(W = !0),
					C || ((F = [q($, 'click', t[7]), q(E, 'click', t[6])]), (C = !0));
			},
			p(t, [n]) {
				if (
					(32 & n && a(G, (G = t[5]))
						? (N(), p(T, 1, 1, I), V(), (T = st(t)), T.c(), m(T), T.m(e, u))
						: T.p(t, n),
					4 & n && k($, 'not-clickable', t[2]),
					4 & n && k(E, 'not-clickable', t[2]),
					5 & n)
				) {
					let e;
					for (U = Q, e = 0; e < U.length; e += 1) {
						const a = nt(t, U, e);
						J[e]
							? (J[e].p(a, n), m(J[e], 1))
							: ((J[e] = rt(a)), J[e].c(), m(J[e], 1), J[e].m(L, z));
					}
					for (N(), e = U.length; e < J.length; e += 1) K(e);
					V();
				}
				const s = {};
				!H && 2 & n && ((H = !0), (s.switchOn = t[1]), S(() => (H = !1))), R.$set(s);
			},
			i(t) {
				if (!W) {
					m(T);
					for (let t = 0; t < U.length; t += 1) m(J[t]);
					m(R.$$.fragment, t), (W = !0);
				}
			},
			o(t) {
				p(T), (J = J.filter(Boolean));
				for (let e = 0; e < J.length; e += 1) p(J[e]);
				p(R.$$.fragment, t), (W = !1);
			},
			d(t) {
				t && l(e), T.d(t), A(J, t), d(R), (C = !1), j(F);
			}
		}
	);
}
function ct(t, e, a) {
	let n,
		s,
		r,
		o = 0;
	const c = () => {
		a(0, o === Q.length - 1 ? (o = 0) : (o += 1));
	};
	let l,
		i = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && a(5, (n = Q[o].quote)),
				1 & t.$$.dirty && a(3, (s = Q[o].author)),
				1 & t.$$.dirty && a(4, (r = Q[o].image));
		}),
		[
			o,
			i,
			u,
			s,
			r,
			n,
			c,
			() => {
				a(0, 0 === o ? (o = Q.length - 1) : (o -= 1));
			},
			() => {
				i ? ((l = setInterval(c, 5e3)), a(2, (u = !0))) : (clearInterval(l), a(2, (u = !1)));
			},
			(t) => a(0, (o = t)),
			function (t) {
				(i = t), a(1, i);
			}
		]
	);
}
class lt extends t {
	constructor(t) {
		super(), e(this, t, ct, ot, a, {});
	}
}
function it(t, e, a) {
	const n = t.slice();
	return (n[3] = e[a].url), (n[4] = e[a].name), (n[5] = e[a].description), n;
}
function ut(t) {
	let e,
		a,
		s,
		c,
		u,
		h,
		m = t[4] + '',
		$ = t[5] + '';
	return {
		c() {
			(e = v(m)), (a = b()), (s = n('br')), (c = n('span')), (u = v($)), (h = b()), this.h();
		},
		l(t) {
			(e = x(t, m)), (a = _(t)), (s = r(t, 'BR', { class: !0 })), (c = r(t, 'SPAN', { class: !0 }));
			var n = o(c);
			(u = x(n, $)), n.forEach(l), (h = _(t)), this.h();
		},
		h() {
			i(s, 'class', 'svelte-166flgj'), i(c, 'class', 'svelte-166flgj');
		},
		m(t, n) {
			f(t, e, n), f(t, a, n), f(t, s, n), f(t, c, n), y(c, u), f(t, h, n);
		},
		p(t, a) {
			1 & a && m !== (m = t[4] + '') && w(e, m), 1 & a && $ !== ($ = t[5] + '') && w(u, $);
		},
		d(t) {
			t && l(e), t && l(a), t && l(s), t && l(c), t && l(h);
		}
	};
}
function ft(t) {
	let e, a;
	return (
		(e = new W({
			props: {
				tipo: 2,
				variante: t[1],
				href: t[3],
				alt: t[4],
				$$slots: { default: [ut] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, n) {
				h(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				2 & a && (n.variante = t[1]),
					1 & a && (n.href = t[3]),
					1 & a && (n.alt = t[4]),
					513 & a && (n.$$scope = { dirty: a, ctx: t }),
					e.$set(n);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function ht(t) {
	let e,
		a,
		n = t[0],
		s = [];
	for (let o = 0; o < n.length; o += 1) s[o] = ft(it(t, n, o));
	const r = (t) =>
		p(s[t], 1, 1, () => {
			s[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < s.length; t += 1) s[t].c();
			e = B();
		},
		l(t) {
			for (let e = 0; e < s.length; e += 1) s[e].l(t);
			e = B();
		},
		m(t, n) {
			for (let e = 0; e < s.length; e += 1) s[e].m(t, n);
			f(t, e, n), (a = !0);
		},
		p(t, a) {
			if (3 & a) {
				let o;
				for (n = t[0], o = 0; o < n.length; o += 1) {
					const r = it(t, n, o);
					s[o]
						? (s[o].p(r, a), m(s[o], 1))
						: ((s[o] = ft(r)), s[o].c(), m(s[o], 1), s[o].m(e.parentNode, e));
				}
				for (N(), o = n.length; o < s.length; o += 1) r(o);
				V();
			}
		},
		i(t) {
			if (!a) {
				for (let t = 0; t < n.length; t += 1) m(s[t]);
				a = !0;
			}
		},
		o(t) {
			s = s.filter(Boolean);
			for (let e = 0; e < s.length; e += 1) p(s[e]);
			a = !1;
		},
		d(t) {
			A(s, t), t && l(e);
		}
	};
}
function mt(t) {
	let e, a;
	return (
		(e = new H({
			props: { tipo: 3, variante: t[2], $$slots: { default: [ht] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, n) {
				h(e, t, n), (a = !0);
			},
			p(t, [a]) {
				const n = {};
				4 & a && (n.variante = t[2]), 515 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function $t(t, e, a) {
	let { secondaryNav: n = [{}] } = e,
		{ url: s = '' } = e,
		{ name: r = '' } = e,
		{ description: o = '' } = e,
		{ variante_item: c = '4' } = e,
		{ variante_list: l = '4' } = e,
		{ tipo: i = '4' } = e;
	return (
		(t.$$set = (t) => {
			'secondaryNav' in t && a(0, (n = t.secondaryNav)),
				'url' in t && a(3, (s = t.url)),
				'name' in t && a(4, (r = t.name)),
				'description' in t && a(5, (o = t.description)),
				'variante_item' in t && a(1, (c = t.variante_item)),
				'variante_list' in t && a(2, (l = t.variante_list)),
				'tipo' in t && a(6, (i = t.tipo));
		}),
		[n, c, l, s, r, o, i]
	);
}
class gt extends t {
	constructor(t) {
		super(),
			e(this, t, $t, mt, a, {
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
function pt(t) {
	let e, a, u, $, g, v, x, w, k, q, E, j, P, D, N, V, S, A, B, H, W, F;
	return (
		(u = new R({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: O[0].subtitle }
		})),
		(v = new gt({ props: { secondaryNav: z, variante_item: 1, variante_list: 6 } })),
		(k = new lt({})),
		(P = new C({ props: { variante: 1, text: 'Percibir la conexión esencial de todo' } })),
		(V = new G({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		(B = new C({
			props: {
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(W = new L({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				(e = n('div')),
					(a = n('div')),
					s(u.$$.fragment),
					($ = b()),
					(g = n('div')),
					s(v.$$.fragment),
					(x = b()),
					(w = n('div')),
					s(k.$$.fragment),
					(q = b()),
					(E = n('div')),
					(j = n('div')),
					s(P.$$.fragment),
					(D = b()),
					(N = n('div')),
					s(V.$$.fragment),
					(S = b()),
					(A = n('div')),
					s(B.$$.fragment),
					(H = b()),
					s(W.$$.fragment),
					this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var n = o(e);
				a = r(n, 'DIV', { class: !0 });
				var s = o(a);
				c(u.$$.fragment, s), s.forEach(l), ($ = _(n)), (g = r(n, 'DIV', { class: !0 }));
				var i = o(g);
				c(v.$$.fragment, i), i.forEach(l), (x = _(n)), (w = r(n, 'DIV', { class: !0 }));
				var f = o(w);
				c(k.$$.fragment, f),
					f.forEach(l),
					n.forEach(l),
					(q = _(t)),
					(E = r(t, 'DIV', { class: !0 }));
				var h = o(E);
				j = r(h, 'DIV', { class: !0 });
				var m = o(j);
				c(P.$$.fragment, m), m.forEach(l), (D = _(h)), (N = r(h, 'DIV', { class: !0 }));
				var p = o(N);
				c(V.$$.fragment, p),
					p.forEach(l),
					h.forEach(l),
					(S = _(t)),
					(A = r(t, 'DIV', { class: !0 }));
				var d = o(A);
				c(B.$$.fragment, d), (H = _(d)), c(W.$$.fragment, d), d.forEach(l), this.h();
			},
			h() {
				i(a, 'class', '\n\tbgc_primary c_5 mh_0 dg_0 pcc \n\tcol_13 col_s2_5\n\t'),
					i(g, 'class', 'col_13 col_s2_8'),
					i(w, 'class', 'col_13 mh_0'),
					i(e, 'class', 'dg'),
					i(j, 'class', '\n\tcol_13 col_s2_8 \n\tc_5'),
					i(N, 'class', '\n\tcol_13 col_s2_5\n\t'),
					i(E, 'class', 'dg p_3 bgc_primary gap_3'),
					i(A, 'class', 'col_s2_13 mh_0 dg_0 pcc bgc_0 c_4 tac');
			},
			m(t, n) {
				f(t, e, n),
					y(e, a),
					h(u, a, null),
					y(e, $),
					y(e, g),
					h(v, g, null),
					y(e, x),
					y(e, w),
					h(k, w, null),
					f(t, q, n),
					f(t, E, n),
					y(E, j),
					h(P, j, null),
					y(E, D),
					y(E, N),
					h(V, N, null),
					f(t, S, n),
					f(t, A, n),
					h(B, A, null),
					y(A, H),
					h(W, A, null),
					(F = !0);
			},
			p: I,
			i(t) {
				F ||
					(m(u.$$.fragment, t),
					m(v.$$.fragment, t),
					m(k.$$.fragment, t),
					m(P.$$.fragment, t),
					m(V.$$.fragment, t),
					m(B.$$.fragment, t),
					m(W.$$.fragment, t),
					(F = !0));
			},
			o(t) {
				p(u.$$.fragment, t),
					p(v.$$.fragment, t),
					p(k.$$.fragment, t),
					p(P.$$.fragment, t),
					p(V.$$.fragment, t),
					p(B.$$.fragment, t),
					p(W.$$.fragment, t),
					(F = !1);
			},
			d(t) {
				t && l(e),
					d(u),
					d(v),
					d(k),
					t && l(q),
					t && l(E),
					d(P),
					d(V),
					t && l(S),
					t && l(A),
					d(B),
					d(W);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, pt, a, {});
	}
}
