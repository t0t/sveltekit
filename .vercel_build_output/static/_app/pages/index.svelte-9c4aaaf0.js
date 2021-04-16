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
	x as p,
	y as d,
	t as v,
	j as b,
	b as k,
	l as _,
	g as y,
	h as x,
	G as w,
	H as q,
	n as I,
	F as E,
	K as P,
	T as j,
	U as D,
	C as N,
	D as V,
	V as B,
	J as S,
	k as A
} from '../chunks/index-d91e1ed8.js';
import { c as O, B as L } from '../chunks/Grid.svelte-ab8cbe1f.js';
import { s as R } from '../chunks/pages-cee8d843.js';
import { H } from '../chunks/Header-bff7bbb7.js';
import { L as W, a as z } from '../chunks/ListItem-dc89416a.js';
import { B as C } from '../chunks/Blockquote-93fb4812.js';
import { f as F } from '../chunks/index-65311448.js';
import { I as G } from '../chunks/Img-76e74fb8.js';
/* empty css                                  */ import '../chunks/index-78b22dae.js';
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
	let e, a, n, c;
	return {
		c() {
			(e = s('q')), (a = v(t[0])), (n = b()), (c = s('br')), this.h();
		},
		l(s) {
			e = r(s, 'Q', { class: !0 });
			var i = o(e);
			(a = k(i, t[0])), i.forEach(l), (n = _(s)), (c = r(s, 'BR', { class: !0 })), this.h();
		},
		h() {
			i(e, 'class', 'svelte-k2v0k'), i(c, 'class', 'svelte-k2v0k');
		},
		m(t, s) {
			h(t, e, s), y(e, a), h(t, n, s), h(t, c, s);
		},
		p(t, e) {
			1 & e && x(a, t[0]);
		},
		d(t) {
			t && l(e), t && l(n), t && l(c);
		}
	};
}
function U(t) {
	let e, a, n;
	return {
		c() {
			(e = s('span')), (a = v('— ')), (n = v(t[1])), this.h();
		},
		l(s) {
			e = r(s, 'SPAN', { slot: !0, class: !0 });
			var c = o(e);
			(a = k(c, '— ')), (n = k(c, t[1])), c.forEach(l), this.h();
		},
		h() {
			i(e, 'slot', 'author'), i(e, 'class', 'svelte-k2v0k');
		},
		m(t, s) {
			h(t, e, s), y(e, a), y(e, n);
		},
		p(t, e) {
			2 & e && x(n, t[1]);
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
				(e = s('div')), n(a.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0, style: !0 });
				var s = o(e);
				c(a.$$.fragment, s), s.forEach(l), this.h();
			},
			h() {
				i(e, 'class', 'mySlides svelte-k2v0k'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, s) {
				h(t, e, s), f(a, e, null), (b = !0);
			},
			p(t, [s]) {
				const n = {};
				11 & s && (n.$$scope = { dirty: s, ctx: t }),
					a.$set(n),
					(!b || 4 & s) && u(e, 'background-image', 'url(' + t[2] + ')');
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
		super(), e(this, t, K, J, a, { quote: 0, author: 1, image: 2 });
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
			i(e, 'class', 'dot svelte-17uj6c8'),
				i(e, 'title', (a = `quote by ${t[2]}`)),
				w(e, 'active', t[0] === t[1]),
				w(e, 'not-clickable', t[3]);
		},
		m(a, s) {
			h(a, e, s), n || ((c = q(e, 'click', t[4])), (n = !0));
		},
		p(t, [s]) {
			4 & s && a !== (a = `quote by ${t[2]}`) && i(e, 'title', a),
				3 & s && w(e, 'active', t[0] === t[1]),
				8 & s && w(e, 'not-clickable', t[3]);
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
			(e = s('div')), (a = s('label')), (n = s('input')), (c = b()), (u = s('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var s = o(e);
			a = r(s, 'LABEL', { class: !0 });
			var i = o(a);
			(n = r(i, 'INPUT', { type: !0, class: !0 })),
				(c = _(i)),
				(u = r(i, 'SPAN', { class: !0 })),
				o(u).forEach(l),
				i.forEach(l),
				s.forEach(l),
				this.h();
		},
		h() {
			i(n, 'type', 'checkbox'),
				i(n, 'class', 'svelte-27w422'),
				i(u, 'class', 'slider round svelte-27w422'),
				i(a, 'class', 'switch svelte-27w422'),
				i(e, 'class', 'switch-cont svelte-27w422'),
				i(e, 'id', 'auto-play-cont');
		},
		m(s, r) {
			h(s, e, r),
				y(e, a),
				y(a, n),
				(n.checked = t[0]),
				y(a, c),
				y(a, u),
				f || ((m = [q(n, 'change', t[2]), q(n, 'change', t[1])]), (f = !0));
		},
		p(t, [e]) {
			1 & e && (n.checked = t[0]);
		},
		i: I,
		o: I,
		d(t) {
			t && l(e), (f = !1), P(m);
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
		x,
		E,
		A,
		O,
		L,
		R,
		H,
		W,
		z,
		C,
		F,
		G = t[5],
		T = nt(t),
		U = Q,
		J = [];
	for (let a = 0; a < U.length; a += 1) J[a] = rt(st(t, U, a));
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
		(H = new at({ props: X })),
		j.push(() => D(H, 'switchOn', M)),
		H.$on('change', t[8]),
		{
			c() {
				(e = s('div')),
					T.c(),
					(u = b()),
					($ = s('span')),
					(g = v('❮')),
					(x = b()),
					(E = s('span')),
					(A = v('❯')),
					(O = b()),
					(L = s('div'));
				for (let t = 0; t < J.length; t += 1) J[t].c();
				(R = b()), n(H.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var a = o(e);
				T.l(a), (u = _(a)), ($ = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o($);
				(g = k(s, '❮')),
					s.forEach(l),
					(x = _(a)),
					(E = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = o(E);
				(A = k(n, '❯')), n.forEach(l), (O = _(a)), (L = r(a, 'DIV', { class: !0 }));
				var i = o(L);
				for (let e = 0; e < J.length; e += 1) J[e].l(i);
				(R = _(i)), c(H.$$.fragment, i), i.forEach(l), a.forEach(l), this.h();
			},
			h() {
				i($, 'href', '#prev'),
					i($, 'class', 'prev svelte-8gctnm'),
					i($, 'title', 'previous quote'),
					w($, 'not-clickable', t[2]),
					i(E, 'href', '#next'),
					i(E, 'class', 'next svelte-8gctnm'),
					i(E, 'title', 'next quote'),
					w(E, 'not-clickable', t[2]),
					i(L, 'class', 'dot-container svelte-8gctnm'),
					i(e, 'class', 'slideshow-container svelte-8gctnm');
			},
			m(a, s) {
				h(a, e, s),
					T.m(e, null),
					y(e, u),
					y(e, $),
					y($, g),
					y(e, x),
					y(e, E),
					y(E, A),
					y(e, O),
					y(e, L);
				for (let t = 0; t < J.length; t += 1) J[t].m(L, null);
				y(L, R),
					f(H, L, null),
					(z = !0),
					C || ((F = [q($, 'click', t[7]), q(E, 'click', t[6])]), (C = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && a(G, (G = t[5]))
						? (N(), p(T, 1, 1, I), V(), (T = nt(t)), T.c(), m(T), T.m(e, u))
						: T.p(t, s),
					4 & s && w($, 'not-clickable', t[2]),
					4 & s && w(E, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (U = Q, e = 0; e < U.length; e += 1) {
						const a = st(t, U, e);
						J[e]
							? (J[e].p(a, s), m(J[e], 1))
							: ((J[e] = rt(a)), J[e].c(), m(J[e], 1), J[e].m(L, R));
					}
					for (N(), e = U.length; e < J.length; e += 1) K(e);
					V();
				}
				const n = {};
				!W && 2 & s && ((W = !0), (n.switchOn = t[1]), B(() => (W = !1))), H.$set(n);
			},
			i(t) {
				if (!z) {
					m(T);
					for (let t = 0; t < U.length; t += 1) m(J[t]);
					m(H.$$.fragment, t), (z = !0);
				}
			},
			o(t) {
				p(T), (J = J.filter(Boolean));
				for (let e = 0; e < J.length; e += 1) p(J[e]);
				p(H.$$.fragment, t), (z = !1);
			},
			d(t) {
				t && l(e), T.d(t), S(J, t), d(H), (C = !1), P(F);
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
		a(0, o === Q.length - 1 ? (o = 0) : (o += 1));
	};
	let l,
		i = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && a(5, (s = Q[o].quote)),
				1 & t.$$.dirty && a(3, (n = Q[o].author)),
				1 & t.$$.dirty && a(4, (r = Q[o].image));
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
			(e = v(m)), (a = b()), (n = s('br')), (c = s('span')), (u = v($)), (f = b()), this.h();
		},
		l(t) {
			(e = k(t, m)), (a = _(t)), (n = r(t, 'BR', { class: !0 })), (c = r(t, 'SPAN', { class: !0 }));
			var s = o(c);
			(u = k(s, $)), s.forEach(l), (f = _(t)), this.h();
		},
		h() {
			i(n, 'class', 'svelte-3z3dvv'), i(c, 'class', 'svelte-3z3dvv');
		},
		m(t, s) {
			h(t, e, s), h(t, a, s), h(t, n, s), h(t, c, s), y(c, u), h(t, f, s);
		},
		p(t, a) {
			1 & a && m !== (m = t[4] + '') && x(e, m), 1 & a && $ !== ($ = t[5] + '') && x(u, $);
		},
		d(t) {
			t && l(e), t && l(a), t && l(n), t && l(c), t && l(f);
		}
	};
}
function ht(t) {
	let e, a;
	return (
		(e = new z({
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
				p(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				d(e, t);
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
						? (n[o].p(r, a), m(n[o], 1))
						: ((n[o] = ht(r)), n[o].c(), m(n[o], 1), n[o].m(e.parentNode, e));
				}
				for (N(), o = s.length; o < n.length; o += 1) r(o);
				V();
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
			for (let e = 0; e < n.length; e += 1) p(n[e]);
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
function pt(t) {
	let e, a, u, $, g, v, k, x, w, q, E, P, j, D, N, V, B, S, A, W, z, F;
	return (
		(u = new H({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: O[0].subtitle }
		})),
		(v = new gt({ props: { secondaryNav: R, variante_item: 1, variante_list: 6 } })),
		(w = new lt({})),
		(j = new C({ props: { variante: 1, text: 'Percibir la conexión esencial de todo' } })),
		(V = new G({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		(A = new C({
			props: {
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(z = new L({
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
					($ = b()),
					(g = s('div')),
					n(v.$$.fragment),
					(k = b()),
					(x = s('div')),
					n(w.$$.fragment),
					(q = b()),
					(E = s('div')),
					(P = s('div')),
					n(j.$$.fragment),
					(D = b()),
					(N = s('div')),
					n(V.$$.fragment),
					(B = b()),
					(S = s('div')),
					n(A.$$.fragment),
					(W = b()),
					n(z.$$.fragment),
					this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var s = o(e);
				a = r(s, 'DIV', { class: !0 });
				var n = o(a);
				c(u.$$.fragment, n), n.forEach(l), ($ = _(s)), (g = r(s, 'DIV', { class: !0 }));
				var i = o(g);
				c(v.$$.fragment, i), i.forEach(l), (k = _(s)), (x = r(s, 'DIV', { class: !0 }));
				var h = o(x);
				c(w.$$.fragment, h),
					h.forEach(l),
					s.forEach(l),
					(q = _(t)),
					(E = r(t, 'DIV', { class: !0 }));
				var f = o(E);
				P = r(f, 'DIV', { class: !0 });
				var m = o(P);
				c(j.$$.fragment, m), m.forEach(l), (D = _(f)), (N = r(f, 'DIV', { class: !0 }));
				var p = o(N);
				c(V.$$.fragment, p),
					p.forEach(l),
					f.forEach(l),
					(B = _(t)),
					(S = r(t, 'DIV', { class: !0 }));
				var d = o(S);
				c(A.$$.fragment, d), (W = _(d)), c(z.$$.fragment, d), d.forEach(l), this.h();
			},
			h() {
				i(a, 'class', ' bgc_primary c_5 mh_3 dg_0 pcc col_13 col_s2_5 '),
					i(g, 'class', 'col_13 col_s2_8'),
					i(x, 'class', 'col_13 mh_5'),
					i(e, 'class', 'dg'),
					i(P, 'class', 'col_13 col_s2_8 c_5 tac'),
					i(N, 'class', 'col_13 col_s2_5 '),
					i(E, 'class', 'dg p_3 bgc_primary rg_1'),
					i(S, 'class', 'col_s2_13 rg_1 p_3 dg_0 pcc bgc_0 c_4 tac');
			},
			m(t, s) {
				h(t, e, s),
					y(e, a),
					f(u, a, null),
					y(e, $),
					y(e, g),
					f(v, g, null),
					y(e, k),
					y(e, x),
					f(w, x, null),
					h(t, q, s),
					h(t, E, s),
					y(E, P),
					f(j, P, null),
					y(E, D),
					y(E, N),
					f(V, N, null),
					h(t, B, s),
					h(t, S, s),
					f(A, S, null),
					y(S, W),
					f(z, S, null),
					(F = !0);
			},
			p: I,
			i(t) {
				F ||
					(m(u.$$.fragment, t),
					m(v.$$.fragment, t),
					m(w.$$.fragment, t),
					m(j.$$.fragment, t),
					m(V.$$.fragment, t),
					m(A.$$.fragment, t),
					m(z.$$.fragment, t),
					(F = !0));
			},
			o(t) {
				p(u.$$.fragment, t),
					p(v.$$.fragment, t),
					p(w.$$.fragment, t),
					p(j.$$.fragment, t),
					p(V.$$.fragment, t),
					p(A.$$.fragment, t),
					p(z.$$.fragment, t),
					(F = !1);
			},
			d(t) {
				t && l(e),
					d(u),
					d(v),
					d(w),
					t && l(q),
					t && l(E),
					d(j),
					d(V),
					t && l(B),
					t && l(S),
					d(A),
					d(z);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, pt, a, {});
	}
}
