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
	r as m,
	w as f,
	Q as $,
	R as g,
	x as d,
	y as p,
	t as v,
	j as _,
	b,
	l as y,
	g as w,
	h as k,
	G as x,
	H as q,
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
import { c as O, B as L } from '../chunks/Grid.svelte-e568fec9.js';
import { s as R } from '../chunks/pages-cee8d843.js';
import { H as z } from '../chunks/Header-72a33ab9.js';
import { L as H, a as W } from '../chunks/ListItem-ea6efde4.js';
import { B as C } from '../chunks/Blockquote-dc6b88ca.js';
import { f as F } from '../chunks/index-65311448.js';
import { I as G } from '../chunks/Img-d7035d09.js';
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
			(e = s('q')), (a = v(t[0])), (n = _()), (c = s('br')), this.h();
		},
		l(s) {
			e = r(s, 'Q', { class: !0 });
			var i = o(e);
			(a = b(i, t[0])), i.forEach(l), (n = y(s)), (c = r(s, 'BR', { class: !0 })), this.h();
		},
		h() {
			i(e, 'class', 'svelte-dmwotv'), i(c, 'class', 'svelte-dmwotv');
		},
		m(t, s) {
			h(t, e, s), w(e, a), h(t, n, s), h(t, c, s);
		},
		p(t, e) {
			1 & e && k(a, t[0]);
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
			(a = b(c, '— ')), (n = b(c, t[1])), c.forEach(l), this.h();
		},
		h() {
			i(e, 'slot', 'author'), i(e, 'class', 'svelte-dmwotv');
		},
		m(t, s) {
			h(t, e, s), w(e, a), w(e, n);
		},
		p(t, e) {
			2 & e && k(n, t[1]);
		},
		d(t) {
			t && l(e);
		}
	};
}
function J(t) {
	let e, a, v, _;
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
				i(e, 'class', 'mySlides svelte-dmwotv'), u(e, 'background-image', 'url(' + t[2] + ')');
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
						v || (v = g(e, F, {}, !0)), v.run(1);
					}),
					(_ = !0));
			},
			o(t) {
				d(a.$$.fragment, t), v || (v = g(e, F, {}, !1)), v.run(0), (_ = !1);
			},
			d(t) {
				t && l(e), p(a), t && v && v.end();
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
			i(e, 'class', 'dot svelte-1t2iq73'),
				i(e, 'title', (a = `quote by ${t[2]}`)),
				x(e, 'active', t[0] === t[1]),
				x(e, 'not-clickable', t[3]);
		},
		m(a, s) {
			h(a, e, s), n || ((c = q(e, 'click', t[4])), (n = !0));
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
	let e, a, n, c, u, m, f;
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
				(c = y(i)),
				(u = r(i, 'SPAN', { class: !0 })),
				o(u).forEach(l),
				i.forEach(l),
				s.forEach(l),
				this.h();
		},
		h() {
			i(n, 'type', 'checkbox'),
				i(n, 'class', 'svelte-iuribd'),
				i(u, 'class', 'slider round svelte-iuribd'),
				i(a, 'class', 'switch svelte-iuribd'),
				i(e, 'class', 'switch-cont svelte-iuribd'),
				i(e, 'id', 'auto-play-cont');
		},
		m(s, r) {
			h(s, e, r),
				w(e, a),
				w(a, n),
				(n.checked = t[0]),
				w(a, c),
				w(a, u),
				m || ((f = [q(n, 'change', t[2]), q(n, 'change', t[1])]), (m = !0));
		},
		p(t, [e]) {
			1 & e && (n.checked = t[0]);
		},
		i: I,
		o: I,
		d(t) {
			t && l(e), (m = !1), j(f);
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
		k,
		E,
		A,
		O,
		L,
		R,
		z,
		H,
		W,
		C,
		F,
		G = t[5],
		T = nt(t),
		U = Q,
		J = [];
	for (let a = 0; a < U.length; a += 1) J[a] = rt(st(t, U, a));
	const K = (t) =>
		d(J[t], 1, 1, () => {
			J[t] = null;
		});
	function M(e) {
		t[10](e);
	}
	let X = {};
	return (
		void 0 !== t[1] && (X.switchOn = t[1]),
		(z = new at({ props: X })),
		P.push(() => D(z, 'switchOn', M)),
		z.$on('change', t[8]),
		{
			c() {
				(e = s('div')),
					T.c(),
					(u = _()),
					($ = s('span')),
					(g = v('❮')),
					(k = _()),
					(E = s('span')),
					(A = v('❯')),
					(O = _()),
					(L = s('div'));
				for (let t = 0; t < J.length; t += 1) J[t].c();
				(R = _()), n(z.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var a = o(e);
				T.l(a), (u = y(a)), ($ = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o($);
				(g = b(s, '❮')),
					s.forEach(l),
					(k = y(a)),
					(E = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = o(E);
				(A = b(n, '❯')), n.forEach(l), (O = y(a)), (L = r(a, 'DIV', { class: !0 }));
				var i = o(L);
				for (let e = 0; e < J.length; e += 1) J[e].l(i);
				(R = y(i)), c(z.$$.fragment, i), i.forEach(l), a.forEach(l), this.h();
			},
			h() {
				i($, 'href', '#prev'),
					i($, 'class', 'prev svelte-wzyh1t'),
					i($, 'title', 'previous quote'),
					x($, 'not-clickable', t[2]),
					i(E, 'href', '#next'),
					i(E, 'class', 'next svelte-wzyh1t'),
					i(E, 'title', 'next quote'),
					x(E, 'not-clickable', t[2]),
					i(L, 'class', 'dot-container svelte-wzyh1t'),
					i(e, 'class', 'slideshow-container svelte-wzyh1t');
			},
			m(a, s) {
				h(a, e, s),
					T.m(e, null),
					w(e, u),
					w(e, $),
					w($, g),
					w(e, k),
					w(e, E),
					w(E, A),
					w(e, O),
					w(e, L);
				for (let t = 0; t < J.length; t += 1) J[t].m(L, null);
				w(L, R),
					m(z, L, null),
					(W = !0),
					C || ((F = [q($, 'click', t[7]), q(E, 'click', t[6])]), (C = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && a(G, (G = t[5]))
						? (V(), d(T, 1, 1, I), N(), (T = nt(t)), T.c(), f(T), T.m(e, u))
						: T.p(t, s),
					4 & s && x($, 'not-clickable', t[2]),
					4 & s && x(E, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (U = Q, e = 0; e < U.length; e += 1) {
						const a = st(t, U, e);
						J[e]
							? (J[e].p(a, s), f(J[e], 1))
							: ((J[e] = rt(a)), J[e].c(), f(J[e], 1), J[e].m(L, R));
					}
					for (V(), e = U.length; e < J.length; e += 1) K(e);
					N();
				}
				const n = {};
				!H && 2 & s && ((H = !0), (n.switchOn = t[1]), B(() => (H = !1))), z.$set(n);
			},
			i(t) {
				if (!W) {
					f(T);
					for (let t = 0; t < U.length; t += 1) f(J[t]);
					f(z.$$.fragment, t), (W = !0);
				}
			},
			o(t) {
				d(T), (J = J.filter(Boolean));
				for (let e = 0; e < J.length; e += 1) d(J[e]);
				d(z.$$.fragment, t), (W = !1);
			},
			d(t) {
				t && l(e), T.d(t), S(J, t), p(z), (C = !1), j(F);
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
		m,
		f = t[4] + '',
		$ = t[5] + '';
	return {
		c() {
			(e = v(f)), (a = _()), (n = s('br')), (c = s('span')), (u = v($)), (m = _()), this.h();
		},
		l(t) {
			(e = b(t, f)), (a = y(t)), (n = r(t, 'BR', { class: !0 })), (c = r(t, 'SPAN', { class: !0 }));
			var s = o(c);
			(u = b(s, $)), s.forEach(l), (m = y(t)), this.h();
		},
		h() {
			i(n, 'class', 'svelte-1pii9jy'), i(c, 'class', 'svelte-1pii9jy');
		},
		m(t, s) {
			h(t, e, s), h(t, a, s), h(t, n, s), h(t, c, s), w(c, u), h(t, m, s);
		},
		p(t, a) {
			1 & a && f !== (f = t[4] + '') && k(e, f), 1 & a && $ !== ($ = t[5] + '') && k(u, $);
		},
		d(t) {
			t && l(e), t && l(a), t && l(n), t && l(c), t && l(m);
		}
	};
}
function ht(t) {
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
				n(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
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
				d(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				p(e, t);
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
			for (let e = 0; e < n.length; e += 1) d(n[e]);
			a = !1;
		},
		d(t) {
			S(n, t), t && l(e);
		}
	};
}
function ft(t) {
	let e, a;
	return (
		(e = new H({
			props: { tipo: 3, variante: t[2], $$slots: { default: [mt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				n(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
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
function dt(t) {
	let e, a, u, $, g, v, b, k, x, q, E, j, P, D, V, N, B, S, A, H, W, F, Q;
	return (
		(u = new z({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: O[0].subtitle }
		})),
		(v = new gt({ props: { secondaryNav: R, variante_item: 1, variante_list: 6 } })),
		(x = new lt({})),
		(P = new C({ props: { variante: 1, text: 'Percibir la conexión esencial de todo' } })),
		(N = new G({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		(H = new C({
			props: {
				variante: 1,
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(F = new L({
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
					(k = s('div')),
					n(x.$$.fragment),
					(q = _()),
					(E = s('div')),
					(j = s('div')),
					n(P.$$.fragment),
					(D = _()),
					(V = s('div')),
					n(N.$$.fragment),
					(B = _()),
					(S = s('div')),
					(A = s('div')),
					n(H.$$.fragment),
					(W = _()),
					n(F.$$.fragment),
					this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var s = o(e);
				a = r(s, 'DIV', { class: !0 });
				var n = o(a);
				c(u.$$.fragment, n), n.forEach(l), ($ = y(s)), (g = r(s, 'DIV', { class: !0 }));
				var i = o(g);
				c(v.$$.fragment, i), i.forEach(l), (b = y(s)), (k = r(s, 'DIV', { class: !0 }));
				var h = o(k);
				c(x.$$.fragment, h),
					h.forEach(l),
					s.forEach(l),
					(q = y(t)),
					(E = r(t, 'DIV', { class: !0 }));
				var m = o(E);
				j = r(m, 'DIV', { class: !0 });
				var f = o(j);
				c(P.$$.fragment, f), f.forEach(l), (D = y(m)), (V = r(m, 'DIV', { class: !0 }));
				var d = o(V);
				c(N.$$.fragment, d),
					d.forEach(l),
					m.forEach(l),
					(B = y(t)),
					(S = r(t, 'DIV', { class: !0 }));
				var p = o(S);
				A = r(p, 'DIV', { class: !0 });
				var _ = o(A);
				c(H.$$.fragment, _), _.forEach(l), (W = y(p)), c(F.$$.fragment, p), p.forEach(l), this.h();
			},
			h() {
				i(a, 'class', ' bgc_primary c_5 mh_3 dg_0 pcc col_13 col_s2_5 '),
					i(g, 'class', 'col_13 col_s2_8 col_s2_8 mh_s2_5'),
					i(k, 'class', 'col_13 mh_5'),
					i(e, 'class', 'dg'),
					i(j, 'class', 'col_13 col_s2_8 c_5 tac'),
					i(V, 'class', 'col_13 col_s2_5 '),
					i(E, 'class', 'dg p_3 bgc_primary rg_1 mh_s2_5'),
					i(A, 'class', 'mw_6'),
					i(S, 'class', 'col_s2_13 rg_1 p_3 dg_0 pcc bgc_0 c_4 tac mh_2 mh_s2_5');
			},
			m(t, s) {
				h(t, e, s),
					w(e, a),
					m(u, a, null),
					w(e, $),
					w(e, g),
					m(v, g, null),
					w(e, b),
					w(e, k),
					m(x, k, null),
					h(t, q, s),
					h(t, E, s),
					w(E, j),
					m(P, j, null),
					w(E, D),
					w(E, V),
					m(N, V, null),
					h(t, B, s),
					h(t, S, s),
					w(S, A),
					m(H, A, null),
					w(S, W),
					m(F, S, null),
					(Q = !0);
			},
			p: I,
			i(t) {
				Q ||
					(f(u.$$.fragment, t),
					f(v.$$.fragment, t),
					f(x.$$.fragment, t),
					f(P.$$.fragment, t),
					f(N.$$.fragment, t),
					f(H.$$.fragment, t),
					f(F.$$.fragment, t),
					(Q = !0));
			},
			o(t) {
				d(u.$$.fragment, t),
					d(v.$$.fragment, t),
					d(x.$$.fragment, t),
					d(P.$$.fragment, t),
					d(N.$$.fragment, t),
					d(H.$$.fragment, t),
					d(F.$$.fragment, t),
					(Q = !1);
			},
			d(t) {
				t && l(e),
					p(u),
					p(v),
					p(x),
					t && l(q),
					t && l(E),
					p(P),
					p(N),
					t && l(B),
					t && l(S),
					p(H),
					p(F);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, dt, a, {});
	}
}
