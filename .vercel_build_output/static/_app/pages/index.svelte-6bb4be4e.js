import {
	S as t,
	i as e,
	s as a,
	e as s,
	p as n,
	c as r,
	a as o,
	q as l,
	d as c,
	o as i,
	P as u,
	f as h,
	r as m,
	w as f,
	Q as $,
	R as g,
	x as p,
	y as d,
	t as v,
	j as _,
	b,
	l as k,
	g as x,
	h as y,
	G as q,
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
import { c as O, B as L } from '../chunks/Grid.svelte-1020bc4e.js';
import { s as R } from '../chunks/pages-cee8d843.js';
import { H } from '../chunks/Header-6d172df2.js';
import { L as W, a as C } from '../chunks/ListItem-9aa7bd94.js';
import { B as F } from '../chunks/Blockquote-1808185b.js';
import { f as G } from '../chunks/index-65311448.js';
import { I as Q } from '../chunks/Img-4f632789.js';
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
	let e, a, n, l;
	return {
		c() {
			(e = s('q')), (a = v(t[0])), (n = _()), (l = s('br')), this.h();
		},
		l(s) {
			e = r(s, 'Q', { class: !0 });
			var i = o(e);
			(a = b(i, t[0])), i.forEach(c), (n = k(s)), (l = r(s, 'BR', { class: !0 })), this.h();
		},
		h() {
			i(e, 'class', 'svelte-xkte65'), i(l, 'class', 'svelte-xkte65');
		},
		m(t, s) {
			h(t, e, s), x(e, a), h(t, n, s), h(t, l, s);
		},
		p(t, e) {
			1 & e && y(a, t[0]);
		},
		d(t) {
			t && c(e), t && c(n), t && c(l);
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
			var l = o(e);
			(a = b(l, '— ')), (n = b(l, t[1])), l.forEach(c), this.h();
		},
		h() {
			i(e, 'slot', 'author'), i(e, 'class', 'svelte-xkte65');
		},
		m(t, s) {
			h(t, e, s), x(e, a), x(e, n);
		},
		p(t, e) {
			2 & e && y(n, t[1]);
		},
		d(t) {
			t && c(e);
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
				l(a.$$.fragment, s), s.forEach(c), this.h();
			},
			h() {
				i(e, 'class', 'mySlides svelte-xkte65'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, s) {
				h(t, e, s), m(a, e, null), (_ = !0);
			},
			p(t, [s]) {
				const n = {};
				11 & s && (n.$$scope = { dirty: s, ctx: t }),
					a.$set(n),
					(!_ || 4 & s) && u(e, 'background-image', 'url(' + t[2] + ')');
			},
			i(t) {
				_ ||
					(f(a.$$.fragment, t),
					$(() => {
						v || (v = g(e, G, {}, !0)), v.run(1);
					}),
					(_ = !0));
			},
			o(t) {
				p(a.$$.fragment, t), v || (v = g(e, G, {}, !1)), v.run(0), (_ = !1);
			},
			d(t) {
				t && c(e), d(a), t && v && v.end();
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
	let e, a, n, l;
	return {
		c() {
			(e = s('span')), this.h();
		},
		l(t) {
			(e = r(t, 'SPAN', { class: !0, title: !0 })), o(e).forEach(c), this.h();
		},
		h() {
			i(e, 'class', 'dot svelte-ulr4g1'),
				i(e, 'title', (a = `quote by ${t[2]}`)),
				q(e, 'active', t[0] === t[1]),
				q(e, 'not-clickable', t[3]);
		},
		m(a, s) {
			h(a, e, s), n || ((l = w(e, 'click', t[4])), (n = !0));
		},
		p(t, [s]) {
			4 & s && a !== (a = `quote by ${t[2]}`) && i(e, 'title', a),
				3 & s && q(e, 'active', t[0] === t[1]),
				8 & s && q(e, 'not-clickable', t[3]);
		},
		i: I,
		o: I,
		d(t) {
			t && c(e), (n = !1), l();
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
	let e, a, n, l, u, m, f;
	return {
		c() {
			(e = s('div')), (a = s('label')), (n = s('input')), (l = _()), (u = s('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var s = o(e);
			a = r(s, 'LABEL', { class: !0 });
			var i = o(a);
			(n = r(i, 'INPUT', { type: !0, class: !0 })),
				(l = k(i)),
				(u = r(i, 'SPAN', { class: !0 })),
				o(u).forEach(c),
				i.forEach(c),
				s.forEach(c),
				this.h();
		},
		h() {
			i(n, 'type', 'checkbox'),
				i(n, 'class', 'svelte-1k8x49j'),
				i(u, 'class', 'slider round svelte-1k8x49j'),
				i(a, 'class', 'switch svelte-1k8x49j'),
				i(e, 'class', 'switch-cont svelte-1k8x49j'),
				i(e, 'id', 'auto-play-cont');
		},
		m(s, r) {
			h(s, e, r),
				x(e, a),
				x(a, n),
				(n.checked = t[0]),
				x(a, l),
				x(a, u),
				m || ((f = [w(n, 'change', t[2]), w(n, 'change', t[1])]), (m = !0));
		},
		p(t, [e]) {
			1 & e && (n.checked = t[0]);
		},
		i: I,
		o: I,
		d(t) {
			t && c(e), (m = !1), j(f);
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
				l(e.$$.fragment, t);
			},
			m(t, s) {
				m(e, t, s), (a = !0);
			},
			p(t, a) {
				const s = {};
				32 & a && (s.quote = t[5]),
					8 & a && (s.author = t[3]),
					16 & a && (s.image = t[4]),
					e.$set(s);
			},
			i(t) {
				a || (f(e.$$.fragment, t), (a = !0));
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
				n(e.$$.fragment);
			},
			l(t) {
				l(e.$$.fragment, t);
			},
			m(t, s) {
				m(e, t, s), (a = !0);
			},
			p(a, s) {
				t = a;
				const n = {};
				1 & s && (n.quoteIndex = t[0]), 4 & s && (n.autoPlaying = t[2]), e.$set(n);
			},
			i(t) {
				a || (f(e.$$.fragment, t), (a = !0));
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
		p(K[t], 1, 1, () => {
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
				U.l(a), (u = k(a)), ($ = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o($);
				(g = b(s, '❮')),
					s.forEach(c),
					(y = k(a)),
					(E = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = o(E);
				(A = b(n, '❯')), n.forEach(c), (O = k(a)), (L = r(a, 'DIV', { class: !0 }));
				var i = o(L);
				for (let e = 0; e < K.length; e += 1) K[e].l(i);
				(R = k(i)), l(H.$$.fragment, i), i.forEach(c), a.forEach(c), this.h();
			},
			h() {
				i($, 'href', '#prev'),
					i($, 'class', 'prev svelte-10qe6n'),
					i($, 'title', 'previous quote'),
					q($, 'not-clickable', t[2]),
					i(E, 'href', '#next'),
					i(E, 'class', 'next svelte-10qe6n'),
					i(E, 'title', 'next quote'),
					q(E, 'not-clickable', t[2]),
					i(L, 'class', 'dot-container svelte-10qe6n'),
					i(e, 'class', 'slideshow-container svelte-10qe6n');
			},
			m(a, s) {
				h(a, e, s),
					U.m(e, null),
					x(e, u),
					x(e, $),
					x($, g),
					x(e, y),
					x(e, E),
					x(E, A),
					x(e, O),
					x(e, L);
				for (let t = 0; t < K.length; t += 1) K[t].m(L, null);
				x(L, R),
					m(H, L, null),
					(C = !0),
					F || ((G = [w($, 'click', t[7]), w(E, 'click', t[6])]), (F = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && a(Q, (Q = t[5]))
						? (V(), p(U, 1, 1, I), N(), (U = nt(t)), U.c(), f(U), U.m(e, u))
						: U.p(t, s),
					4 & s && q($, 'not-clickable', t[2]),
					4 & s && q(E, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (J = T, e = 0; e < J.length; e += 1) {
						const a = st(t, J, e);
						K[e]
							? (K[e].p(a, s), f(K[e], 1))
							: ((K[e] = rt(a)), K[e].c(), f(K[e], 1), K[e].m(L, R));
					}
					for (V(), e = J.length; e < K.length; e += 1) z(e);
					N();
				}
				const n = {};
				!W && 2 & s && ((W = !0), (n.switchOn = t[1]), B(() => (W = !1))), H.$set(n);
			},
			i(t) {
				if (!C) {
					f(U);
					for (let t = 0; t < J.length; t += 1) f(K[t]);
					f(H.$$.fragment, t), (C = !0);
				}
			},
			o(t) {
				p(U), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) p(K[e]);
				p(H.$$.fragment, t), (C = !1);
			},
			d(t) {
				t && c(e), U.d(t), S(K, t), d(H), (F = !1), j(G);
			}
		}
	);
}
function lt(t, e, a) {
	let s,
		n,
		r,
		o = 0;
	const l = () => {
		a(0, o === T.length - 1 ? (o = 0) : (o += 1));
	};
	let c,
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
			l,
			() => {
				a(0, 0 === o ? (o = T.length - 1) : (o -= 1));
			},
			() => {
				i ? ((c = setInterval(l, 5e3)), a(2, (u = !0))) : (clearInterval(c), a(2, (u = !1)));
			},
			(t) => a(0, (o = t)),
			function (t) {
				(i = t), a(1, i);
			}
		]
	);
}
class ct extends t {
	constructor(t) {
		super(), e(this, t, lt, ot, a, {});
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
		l,
		u,
		m,
		f = t[4] + '',
		$ = t[5] + '';
	return {
		c() {
			(e = v(f)), (a = _()), (n = s('br')), (l = s('span')), (u = v($)), (m = _()), this.h();
		},
		l(t) {
			(e = b(t, f)), (a = k(t)), (n = r(t, 'BR', { class: !0 })), (l = r(t, 'SPAN', { class: !0 }));
			var s = o(l);
			(u = b(s, $)), s.forEach(c), (m = k(t)), this.h();
		},
		h() {
			i(n, 'class', 'svelte-h31maa'), i(l, 'class', 'svelte-h31maa');
		},
		m(t, s) {
			h(t, e, s), h(t, a, s), h(t, n, s), h(t, l, s), x(l, u), h(t, m, s);
		},
		p(t, a) {
			1 & a && f !== (f = t[4] + '') && y(e, f), 1 & a && $ !== ($ = t[5] + '') && y(u, $);
		},
		d(t) {
			t && c(e), t && c(a), t && c(n), t && c(l), t && c(m);
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
				l(e.$$.fragment, t);
			},
			m(t, s) {
				m(e, t, s), (a = !0);
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
				a || (f(e.$$.fragment, t), (a = !0));
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
function mt(t) {
	let e,
		a,
		s = t[0],
		n = [];
	for (let o = 0; o < s.length; o += 1) n[o] = ht(it(t, s, o));
	const r = (t) =>
		p(n[t], 1, 1, () => {
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
						? (n[o].p(r, a), f(n[o], 1))
						: ((n[o] = ht(r)), n[o].c(), f(n[o], 1), n[o].m(e.parentNode, e));
				}
				for (V(), o = s.length; o < n.length; o += 1) r(o);
				N();
			}
		},
		i(t) {
			if (!a) {
				for (let t = 0; t < s.length; t += 1) f(n[t]);
				a = !0;
			}
		},
		o(t) {
			n = n.filter(Boolean);
			for (let e = 0; e < n.length; e += 1) p(n[e]);
			a = !1;
		},
		d(t) {
			S(n, t), t && c(e);
		}
	};
}
function ft(t) {
	let e, a;
	return (
		(e = new W({
			props: { tipo: 3, variante: t[2], $$slots: { default: [mt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				n(e.$$.fragment);
			},
			l(t) {
				l(e.$$.fragment, t);
			},
			m(t, s) {
				m(e, t, s), (a = !0);
			},
			p(t, [a]) {
				const s = {};
				4 & a && (s.variante = t[2]), 515 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
			},
			i(t) {
				a || (f(e.$$.fragment, t), (a = !0));
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
	let { secondaryNav: s = [{}] } = e,
		{ url: n = '' } = e,
		{ name: r = '' } = e,
		{ description: o = '' } = e,
		{ variante_item: l = '4' } = e,
		{ variante_list: c = '4' } = e,
		{ tipo: i = '4' } = e;
	return (
		(t.$$set = (t) => {
			'secondaryNav' in t && a(0, (s = t.secondaryNav)),
				'url' in t && a(3, (n = t.url)),
				'name' in t && a(4, (r = t.name)),
				'description' in t && a(5, (o = t.description)),
				'variante_item' in t && a(1, (l = t.variante_item)),
				'variante_list' in t && a(2, (c = t.variante_list)),
				'tipo' in t && a(6, (i = t.tipo));
		}),
		[s, l, c, n, r, o, i]
	);
}
class gt extends t {
	constructor(t) {
		super(),
			e(this, t, $t, ft, a, {
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
	let e, a, u, $, g, v, b, y, q, w, E, j, P, D, V, N, B, S, A, W, C, G, T;
	return (
		(u = new H({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: O[0].subtitle }
		})),
		(v = new gt({ props: { secondaryNav: R, variante_item: 1, variante_list: 6 } })),
		(q = new ct({})),
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
					n(q.$$.fragment),
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
				l(u.$$.fragment, n), n.forEach(c), ($ = k(s)), (g = r(s, 'DIV', { class: !0 }));
				var i = o(g);
				l(v.$$.fragment, i), i.forEach(c), (b = k(s)), (y = r(s, 'DIV', { class: !0 }));
				var h = o(y);
				l(q.$$.fragment, h),
					h.forEach(c),
					s.forEach(c),
					(w = k(t)),
					(E = r(t, 'DIV', { class: !0 }));
				var m = o(E);
				j = r(m, 'DIV', { class: !0 });
				var f = o(j);
				l(P.$$.fragment, f), f.forEach(c), (D = k(m)), (V = r(m, 'DIV', { class: !0 }));
				var p = o(V);
				l(N.$$.fragment, p),
					p.forEach(c),
					m.forEach(c),
					(B = k(t)),
					(S = r(t, 'DIV', { class: !0 }));
				var d = o(S);
				A = r(d, 'DIV', { class: !0 });
				var _ = o(A);
				l(W.$$.fragment, _), _.forEach(c), (C = k(d)), l(G.$$.fragment, d), d.forEach(c), this.h();
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
					x(e, a),
					m(u, a, null),
					x(e, $),
					x(e, g),
					m(v, g, null),
					x(e, b),
					x(e, y),
					m(q, y, null),
					h(t, w, s),
					h(t, E, s),
					x(E, j),
					m(P, j, null),
					x(E, D),
					x(E, V),
					m(N, V, null),
					h(t, B, s),
					h(t, S, s),
					x(S, A),
					m(W, A, null),
					x(S, C),
					m(G, S, null),
					(T = !0);
			},
			p: I,
			i(t) {
				T ||
					(f(u.$$.fragment, t),
					f(v.$$.fragment, t),
					f(q.$$.fragment, t),
					f(P.$$.fragment, t),
					f(N.$$.fragment, t),
					f(W.$$.fragment, t),
					f(G.$$.fragment, t),
					(T = !0));
			},
			o(t) {
				p(u.$$.fragment, t),
					p(v.$$.fragment, t),
					p(q.$$.fragment, t),
					p(P.$$.fragment, t),
					p(N.$$.fragment, t),
					p(W.$$.fragment, t),
					p(G.$$.fragment, t),
					(T = !1);
			},
			d(t) {
				t && c(e),
					d(u),
					d(v),
					d(q),
					t && c(w),
					t && c(E),
					d(P),
					d(N),
					t && c(B),
					t && c(S),
					d(W),
					d(G);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, pt, a, {});
	}
}
