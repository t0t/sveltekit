import {
	S as t,
	i as e,
	s as a,
	e as s,
	p as n,
	c as r,
	a as o,
	q as c,
	d as l,
	o as i,
	P as u,
	f as h,
	r as f,
	w as m,
	Q as $,
	R as g,
	x as d,
	y as p,
	t as v,
	j as _,
	b,
	l as q,
	g as k,
	h as y,
	G as x,
	H as w,
	n as I,
	F as E,
	K as j,
	T as P,
	U as D,
	C as V,
	D as N,
	V as B,
	J as S,
	k as A
} from '../chunks/index-d91e1ed8.js';
import { c as O, B as L } from '../chunks/Grid.svelte-f6369e02.js';
import { s as R } from '../chunks/pages-cee8d843.js';
import { H } from '../chunks/Header-33a8b362.js';
import { L as W, a as C } from '../chunks/ListItem-50336afd.js';
import { B as F } from '../chunks/Blockquote-7c22a2d7.js';
import { f as G } from '../chunks/index-65311448.js';
import { I as Q } from '../chunks/Img-4bbf7ce3.js';
/* empty css                                  */ import '../chunks/index-78b22dae.js';
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
function U(t) {
	let e, a, n, c;
	return {
		c() {
			(e = s('q')), (a = v(t[0])), (n = _()), (c = s('br')), this.h();
		},
		l(s) {
			e = r(s, 'Q', { class: !0 });
			var i = o(e);
			(a = b(i, t[0])), i.forEach(l), (n = q(s)), (c = r(s, 'BR', { class: !0 })), this.h();
		},
		h() {
			i(e, 'class', 'svelte-dr3doo'), i(c, 'class', 'svelte-dr3doo');
		},
		m(t, s) {
			h(t, e, s), k(e, a), h(t, n, s), h(t, c, s);
		},
		p(t, e) {
			1 & e && y(a, t[0]);
		},
		d(t) {
			t && l(e), t && l(n), t && l(c);
		}
	};
}
function J(t) {
	let e, a, n;
	return {
		c() {
			(e = s('span')), (a = v('— ')), (n = v(t[1])), this.h();
		},
		l(s) {
			e = r(s, 'SPAN', { slot: !0, class: !0 });
			var c = o(e);
			(a = b(c, '— ')), (n = b(c, t[1])), c.forEach(l), this.h();
		},
		h() {
			i(e, 'slot', 'author'), i(e, 'class', 'svelte-dr3doo');
		},
		m(t, s) {
			h(t, e, s), k(e, a), k(e, n);
		},
		p(t, e) {
			2 & e && y(n, t[1]);
		},
		d(t) {
			t && l(e);
		}
	};
}
function K(t) {
	let e, a, v, _;
	return (
		(a = new F({ props: { $$slots: { author: [J], default: [U] }, $$scope: { ctx: t } } })),
		{
			c() {
				(e = s('div')), n(a.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0, style: !0 });
				var s = o(e);
				c(a.$$.fragment, s), s.forEach(l), this.h();
			},
			h() {
				i(e, 'class', 'mySlides svelte-dr3doo'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, s) {
				h(t, e, s), f(a, e, null), (_ = !0);
			},
			p(t, [s]) {
				const n = {};
				11 & s && (n.$$scope = { dirty: s, ctx: t }),
					a.$set(n),
					(!_ || 4 & s) && u(e, 'background-image', 'url(' + t[2] + ')');
			},
			i(t) {
				_ ||
					(m(a.$$.fragment, t),
					$(() => {
						v || (v = g(e, G, {}, !0)), v.run(1);
					}),
					(_ = !0));
			},
			o(t) {
				d(a.$$.fragment, t), v || (v = g(e, G, {}, !1)), v.run(0), (_ = !1);
			},
			d(t) {
				t && l(e), p(a), t && v && v.end();
			}
		}
	);
}
function z(t, e, a) {
	let { quote: s } = e,
		{ author: n } = e,
		{ image: r } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && a(0, (s = t.quote)),
				'author' in t && a(1, (n = t.author)),
				'image' in t && a(2, (r = t.image));
		}),
		[s, n, r]
	);
}
class M extends t {
	constructor(t) {
		super(), e(this, t, z, K, a, { quote: 0, author: 1, image: 2 });
	}
}
function X(t) {
	let e, a, n, c;
	return {
		c() {
			(e = s('span')), this.h();
		},
		l(t) {
			(e = r(t, 'SPAN', { class: !0, title: !0 })), o(e).forEach(l), this.h();
		},
		h() {
			i(e, 'class', 'dot svelte-nykevw'),
				i(e, 'title', (a = `quote by ${t[2]}`)),
				x(e, 'active', t[0] === t[1]),
				x(e, 'not-clickable', t[3]);
		},
		m(a, s) {
			h(a, e, s), n || ((c = w(e, 'click', t[4])), (n = !0));
		},
		p(t, [s]) {
			4 & s && a !== (a = `quote by ${t[2]}`) && i(e, 'title', a),
				3 & s && x(e, 'active', t[0] === t[1]),
				8 & s && x(e, 'not-clickable', t[3]);
		},
		i: I,
		o: I,
		d(t) {
			t && l(e), (n = !1), c();
		}
	};
}
function Y(t, e, a) {
	let { quoteIndex: s } = e,
		{ counter: n } = e,
		{ attribution: r } = e,
		{ autoPlaying: o } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && a(0, (s = t.quoteIndex)),
				'counter' in t && a(1, (n = t.counter)),
				'attribution' in t && a(2, (r = t.attribution)),
				'autoPlaying' in t && a(3, (o = t.autoPlaying));
		}),
		[
			s,
			n,
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
	let e, a, n, c, u, f, m;
	return {
		c() {
			(e = s('div')), (a = s('label')), (n = s('input')), (c = _()), (u = s('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var s = o(e);
			a = r(s, 'LABEL', { class: !0 });
			var i = o(a);
			(n = r(i, 'INPUT', { type: !0, class: !0 })),
				(c = q(i)),
				(u = r(i, 'SPAN', { class: !0 })),
				o(u).forEach(l),
				i.forEach(l),
				s.forEach(l),
				this.h();
		},
		h() {
			i(n, 'type', 'checkbox'),
				i(n, 'class', 'svelte-1tu79d6'),
				i(u, 'class', 'slider round svelte-1tu79d6'),
				i(a, 'class', 'switch svelte-1tu79d6'),
				i(e, 'class', 'switch-cont svelte-1tu79d6'),
				i(e, 'id', 'auto-play-cont');
		},
		m(s, r) {
			h(s, e, r),
				k(e, a),
				k(a, n),
				(n.checked = t[0]),
				k(a, c),
				k(a, u),
				f || ((m = [w(n, 'change', t[2]), w(n, 'change', t[1])]), (f = !0));
		},
		p(t, [e]) {
			1 & e && (n.checked = t[0]);
		},
		i: I,
		o: I,
		d(t) {
			t && l(e), (f = !1), j(m);
		}
	};
}
function et(t, e, a) {
	let { switchOn: s } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && a(0, (s = t.switchOn));
		}),
		[
			s,
			function (e) {
				E(t, e);
			},
			function () {
				(s = this.checked), a(0, s);
			}
		]
	);
}
class at extends t {
	constructor(t) {
		super(), e(this, t, et, tt, a, { switchOn: 0 });
	}
}
function st(t, e, a) {
	const s = t.slice();
	return (s[5] = e[a]), (s[13] = a), s;
}
function nt(t) {
	let e, a;
	return (
		(e = new M({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				n(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, s) {
				f(e, t, s), (a = !0);
			},
			p(t, a) {
				const s = {};
				32 & a && (s.quote = t[5]),
					8 & a && (s.author = t[3]),
					16 & a && (s.image = t[4]),
					e.$set(s);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				d(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				p(e, t);
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
				n(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, s) {
				f(e, t, s), (a = !0);
			},
			p(a, s) {
				t = a;
				const n = {};
				1 & s && (n.quoteIndex = t[0]), 4 & s && (n.autoPlaying = t[2]), e.$set(n);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				d(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				p(e, t);
			}
		}
	);
}
function ot(t) {
	let e,
		u,
		$,
		g,
		y,
		E,
		A,
		O,
		L,
		R,
		H,
		W,
		C,
		F,
		G,
		Q = t[5],
		U = nt(t),
		J = T,
		K = [];
	for (let a = 0; a < J.length; a += 1) K[a] = rt(st(t, J, a));
	const z = (t) =>
		d(K[t], 1, 1, () => {
			K[t] = null;
		});
	function M(e) {
		t[10](e);
	}
	let X = {};
	return (
		void 0 !== t[1] && (X.switchOn = t[1]),
		(H = new at({ props: X })),
		P.push(() => D(H, 'switchOn', M)),
		H.$on('change', t[8]),
		{
			c() {
				(e = s('div')),
					U.c(),
					(u = _()),
					($ = s('span')),
					(g = v('❮')),
					(y = _()),
					(E = s('span')),
					(A = v('❯')),
					(O = _()),
					(L = s('div'));
				for (let t = 0; t < K.length; t += 1) K[t].c();
				(R = _()), n(H.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var a = o(e);
				U.l(a), (u = q(a)), ($ = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o($);
				(g = b(s, '❮')),
					s.forEach(l),
					(y = q(a)),
					(E = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = o(E);
				(A = b(n, '❯')), n.forEach(l), (O = q(a)), (L = r(a, 'DIV', { class: !0 }));
				var i = o(L);
				for (let e = 0; e < K.length; e += 1) K[e].l(i);
				(R = q(i)), c(H.$$.fragment, i), i.forEach(l), a.forEach(l), this.h();
			},
			h() {
				i($, 'href', '#prev'),
					i($, 'class', 'prev svelte-9kj5qq'),
					i($, 'title', 'previous quote'),
					x($, 'not-clickable', t[2]),
					i(E, 'href', '#next'),
					i(E, 'class', 'next svelte-9kj5qq'),
					i(E, 'title', 'next quote'),
					x(E, 'not-clickable', t[2]),
					i(L, 'class', 'dot-container svelte-9kj5qq'),
					i(e, 'class', 'slideshow-container svelte-9kj5qq');
			},
			m(a, s) {
				h(a, e, s),
					U.m(e, null),
					k(e, u),
					k(e, $),
					k($, g),
					k(e, y),
					k(e, E),
					k(E, A),
					k(e, O),
					k(e, L);
				for (let t = 0; t < K.length; t += 1) K[t].m(L, null);
				k(L, R),
					f(H, L, null),
					(C = !0),
					F || ((G = [w($, 'click', t[7]), w(E, 'click', t[6])]), (F = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && a(Q, (Q = t[5]))
						? (V(), d(U, 1, 1, I), N(), (U = nt(t)), U.c(), m(U), U.m(e, u))
						: U.p(t, s),
					4 & s && x($, 'not-clickable', t[2]),
					4 & s && x(E, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (J = T, e = 0; e < J.length; e += 1) {
						const a = st(t, J, e);
						K[e]
							? (K[e].p(a, s), m(K[e], 1))
							: ((K[e] = rt(a)), K[e].c(), m(K[e], 1), K[e].m(L, R));
					}
					for (V(), e = J.length; e < K.length; e += 1) z(e);
					N();
				}
				const n = {};
				!W && 2 & s && ((W = !0), (n.switchOn = t[1]), B(() => (W = !1))), H.$set(n);
			},
			i(t) {
				if (!C) {
					m(U);
					for (let t = 0; t < J.length; t += 1) m(K[t]);
					m(H.$$.fragment, t), (C = !0);
				}
			},
			o(t) {
				d(U), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) d(K[e]);
				d(H.$$.fragment, t), (C = !1);
			},
			d(t) {
				t && l(e), U.d(t), S(K, t), p(H), (F = !1), j(G);
			}
		}
	);
}
function ct(t, e, a) {
	let s,
		n,
		r,
		o = 0;
	const c = () => {
		a(0, o === T.length - 1 ? (o = 0) : (o += 1));
	};
	let l,
		i = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && a(5, (s = T[o].quote)),
				1 & t.$$.dirty && a(3, (n = T[o].author)),
				1 & t.$$.dirty && a(4, (r = T[o].image));
		}),
		[
			o,
			i,
			u,
			n,
			r,
			s,
			c,
			() => {
				a(0, 0 === o ? (o = T.length - 1) : (o -= 1));
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
	const s = t.slice();
	return (s[3] = e[a].url), (s[4] = e[a].name), (s[5] = e[a].description), s;
}
function ut(t) {
	let e,
		a,
		n,
		c,
		u,
		f,
		m = t[4] + '',
		$ = t[5] + '';
	return {
		c() {
			(e = v(m)), (a = _()), (n = s('br')), (c = s('span')), (u = v($)), (f = _()), this.h();
		},
		l(t) {
			(e = b(t, m)), (a = q(t)), (n = r(t, 'BR', { class: !0 })), (c = r(t, 'SPAN', { class: !0 }));
			var s = o(c);
			(u = b(s, $)), s.forEach(l), (f = q(t)), this.h();
		},
		h() {
			i(n, 'class', 'svelte-1q902px'), i(c, 'class', 'svelte-1q902px');
		},
		m(t, s) {
			h(t, e, s), h(t, a, s), h(t, n, s), h(t, c, s), k(c, u), h(t, f, s);
		},
		p(t, a) {
			1 & a && m !== (m = t[4] + '') && y(e, m), 1 & a && $ !== ($ = t[5] + '') && y(u, $);
		},
		d(t) {
			t && l(e), t && l(a), t && l(n), t && l(c), t && l(f);
		}
	};
}
function ht(t) {
	let e, a;
	return (
		(e = new C({
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
				n(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, s) {
				f(e, t, s), (a = !0);
			},
			p(t, a) {
				const s = {};
				2 & a && (s.variante = t[1]),
					1 & a && (s.href = t[3]),
					1 & a && (s.alt = t[4]),
					513 & a && (s.$$scope = { dirty: a, ctx: t }),
					e.$set(s);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				d(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				p(e, t);
			}
		}
	);
}
function ft(t) {
	let e,
		a,
		s = t[0],
		n = [];
	for (let o = 0; o < s.length; o += 1) n[o] = ht(it(t, s, o));
	const r = (t) =>
		d(n[t], 1, 1, () => {
			n[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < n.length; t += 1) n[t].c();
			e = A();
		},
		l(t) {
			for (let e = 0; e < n.length; e += 1) n[e].l(t);
			e = A();
		},
		m(t, s) {
			for (let e = 0; e < n.length; e += 1) n[e].m(t, s);
			h(t, e, s), (a = !0);
		},
		p(t, a) {
			if (3 & a) {
				let o;
				for (s = t[0], o = 0; o < s.length; o += 1) {
					const r = it(t, s, o);
					n[o]
						? (n[o].p(r, a), m(n[o], 1))
						: ((n[o] = ht(r)), n[o].c(), m(n[o], 1), n[o].m(e.parentNode, e));
				}
				for (V(), o = s.length; o < n.length; o += 1) r(o);
				N();
			}
		},
		i(t) {
			if (!a) {
				for (let t = 0; t < s.length; t += 1) m(n[t]);
				a = !0;
			}
		},
		o(t) {
			n = n.filter(Boolean);
			for (let e = 0; e < n.length; e += 1) d(n[e]);
			a = !1;
		},
		d(t) {
			S(n, t), t && l(e);
		}
	};
}
function mt(t) {
	let e, a;
	return (
		(e = new W({
			props: { tipo: 3, variante: t[2], $$slots: { default: [ft] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				n(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, s) {
				f(e, t, s), (a = !0);
			},
			p(t, [a]) {
				const s = {};
				4 & a && (s.variante = t[2]), 515 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
			},
			i(t) {
				a || (m(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				d(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				p(e, t);
			}
		}
	);
}
function $t(t, e, a) {
	let { secondaryNav: s = [{}] } = e,
		{ url: n = '' } = e,
		{ name: r = '' } = e,
		{ description: o = '' } = e,
		{ variante_item: c = '4' } = e,
		{ variante_list: l = '4' } = e,
		{ tipo: i = '4' } = e;
	return (
		(t.$$set = (t) => {
			'secondaryNav' in t && a(0, (s = t.secondaryNav)),
				'url' in t && a(3, (n = t.url)),
				'name' in t && a(4, (r = t.name)),
				'description' in t && a(5, (o = t.description)),
				'variante_item' in t && a(1, (c = t.variante_item)),
				'variante_list' in t && a(2, (l = t.variante_list)),
				'tipo' in t && a(6, (i = t.tipo));
		}),
		[s, c, l, n, r, o, i]
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
function dt(t) {
	let e, a, u, $, g, v, b, y, x, w, E, j, P, D, V, N, B, S, A, W, C, G, T;
	return (
		(u = new H({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: O[0].subtitle }
		})),
		(v = new gt({ props: { secondaryNav: R, variante_item: 1, variante_list: 6 } })),
		(x = new lt({})),
		(P = new F({ props: { variante: 1, text: 'Percibir la conexión esencial de todo' } })),
		(N = new Q({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		(W = new F({
			props: {
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(G = new L({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				(e = s('div')),
					(a = s('div')),
					n(u.$$.fragment),
					($ = _()),
					(g = s('div')),
					n(v.$$.fragment),
					(b = _()),
					(y = s('div')),
					n(x.$$.fragment),
					(w = _()),
					(E = s('div')),
					(j = s('div')),
					n(P.$$.fragment),
					(D = _()),
					(V = s('div')),
					n(N.$$.fragment),
					(B = _()),
					(S = s('div')),
					(A = s('div')),
					n(W.$$.fragment),
					(C = _()),
					n(G.$$.fragment),
					this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var s = o(e);
				a = r(s, 'DIV', { class: !0 });
				var n = o(a);
				c(u.$$.fragment, n), n.forEach(l), ($ = q(s)), (g = r(s, 'DIV', { class: !0 }));
				var i = o(g);
				c(v.$$.fragment, i), i.forEach(l), (b = q(s)), (y = r(s, 'DIV', { class: !0 }));
				var h = o(y);
				c(x.$$.fragment, h),
					h.forEach(l),
					s.forEach(l),
					(w = q(t)),
					(E = r(t, 'DIV', { class: !0 }));
				var f = o(E);
				j = r(f, 'DIV', { class: !0 });
				var m = o(j);
				c(P.$$.fragment, m), m.forEach(l), (D = q(f)), (V = r(f, 'DIV', { class: !0 }));
				var d = o(V);
				c(N.$$.fragment, d),
					d.forEach(l),
					f.forEach(l),
					(B = q(t)),
					(S = r(t, 'DIV', { class: !0 }));
				var p = o(S);
				A = r(p, 'DIV', { class: !0 });
				var _ = o(A);
				c(W.$$.fragment, _), _.forEach(l), (C = q(p)), c(G.$$.fragment, p), p.forEach(l), this.h();
			},
			h() {
				i(a, 'class', ' bgc_primary c_5 mh_3 dg_0 pcc col_13 col_s2_5 '),
					i(g, 'class', 'col_13 col_s2_8 col_s2_8 mh_s2_5'),
					i(y, 'class', 'col_13 mh_5'),
					i(e, 'class', 'dg'),
					i(j, 'class', 'col_13 col_s2_8 c_5 tac'),
					i(V, 'class', 'col_13 col_s2_5 '),
					i(E, 'class', 'dg p_3 bgc_primary rg_1 mh_s2_5'),
					i(A, 'class', 'mw_6'),
					i(S, 'class', 'col_s2_13 rg_1 p_3 dg_0 pcc bgc_0 c_4 tac mh_2 mh_s2_5');
			},
			m(t, s) {
				h(t, e, s),
					k(e, a),
					f(u, a, null),
					k(e, $),
					k(e, g),
					f(v, g, null),
					k(e, b),
					k(e, y),
					f(x, y, null),
					h(t, w, s),
					h(t, E, s),
					k(E, j),
					f(P, j, null),
					k(E, D),
					k(E, V),
					f(N, V, null),
					h(t, B, s),
					h(t, S, s),
					k(S, A),
					f(W, A, null),
					k(S, C),
					f(G, S, null),
					(T = !0);
			},
			p: I,
			i(t) {
				T ||
					(m(u.$$.fragment, t),
					m(v.$$.fragment, t),
					m(x.$$.fragment, t),
					m(P.$$.fragment, t),
					m(N.$$.fragment, t),
					m(W.$$.fragment, t),
					m(G.$$.fragment, t),
					(T = !0));
			},
			o(t) {
				d(u.$$.fragment, t),
					d(v.$$.fragment, t),
					d(x.$$.fragment, t),
					d(P.$$.fragment, t),
					d(N.$$.fragment, t),
					d(W.$$.fragment, t),
					d(G.$$.fragment, t),
					(T = !1);
			},
			d(t) {
				t && l(e),
					p(u),
					p(v),
					p(x),
					t && l(w),
					t && l(E),
					p(P),
					p(N),
					t && l(B),
					t && l(S),
					p(W),
					p(G);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, dt, a, {});
	}
}
