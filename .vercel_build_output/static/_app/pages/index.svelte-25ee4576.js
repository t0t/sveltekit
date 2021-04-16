import {
	S as t,
	i as e,
	s as n,
	e as a,
	p as s,
	c as r,
	a as o,
	q as i,
	d as l,
	o as c,
	P as u,
	f as $,
	r as f,
	w as m,
	Q as g,
	R as h,
	x as p,
	y as d,
	t as v,
	j as b,
	b as x,
	l as y,
	g as k,
	h as w,
	G as q,
	H as _,
	n as j,
	F as P,
	K as I,
	T as E,
	U as N,
	C as S,
	D as A,
	V as B,
	J as D,
	k as L
} from '../chunks/index-d91e1ed8.js';
import { c as O, B as V } from '../chunks/Grid.svelte-8e9d6b69.js';
import { s as R } from '../chunks/pages-6818a1c6.js';
import { H as G, S as H } from '../chunks/Header-8a27feeb.js';
import { G as W } from '../chunks/Grid-c3d7f00f.js';
/* empty css                                */ import { B as C } from '../chunks/Blockquote-f62d2e0c.js';
import { f as F } from '../chunks/index-65311448.js';
import { I as Q } from '../chunks/Img-f6fb9871.js';
import { L as T, a as U } from '../chunks/ListItem-d0f4c833.js';
import '../chunks/index-78b22dae.js';
const J = [
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
function K(t) {
	let e, n, s, i;
	return {
		c() {
			(e = a('q')), (n = v(t[0])), (s = b()), (i = a('br')), this.h();
		},
		l(a) {
			e = r(a, 'Q', { class: !0 });
			var c = o(e);
			(n = x(c, t[0])), c.forEach(l), (s = y(a)), (i = r(a, 'BR', { class: !0 })), this.h();
		},
		h() {
			c(e, 'class', 'svelte-fggtfx'), c(i, 'class', 'svelte-fggtfx');
		},
		m(t, a) {
			$(t, e, a), k(e, n), $(t, s, a), $(t, i, a);
		},
		p(t, e) {
			1 & e && w(n, t[0]);
		},
		d(t) {
			t && l(e), t && l(s), t && l(i);
		}
	};
}
function z(t) {
	let e, n, s;
	return {
		c() {
			(e = a('span')), (n = v('— ')), (s = v(t[1])), this.h();
		},
		l(a) {
			e = r(a, 'SPAN', { slot: !0, class: !0 });
			var i = o(e);
			(n = x(i, '— ')), (s = x(i, t[1])), i.forEach(l), this.h();
		},
		h() {
			c(e, 'slot', 'author'), c(e, 'class', 'svelte-fggtfx');
		},
		m(t, a) {
			$(t, e, a), k(e, n), k(e, s);
		},
		p(t, e) {
			2 & e && w(s, t[1]);
		},
		d(t) {
			t && l(e);
		}
	};
}
function M(t) {
	let e, n, v, b;
	return (
		(n = new C({ props: { $$slots: { author: [z], default: [K] }, $$scope: { ctx: t } } })),
		{
			c() {
				(e = a('div')), s(n.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0, style: !0 });
				var a = o(e);
				i(n.$$.fragment, a), a.forEach(l), this.h();
			},
			h() {
				c(e, 'class', 'mySlides svelte-fggtfx'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, a) {
				$(t, e, a), f(n, e, null), (b = !0);
			},
			p(t, [a]) {
				const s = {};
				11 & a && (s.$$scope = { dirty: a, ctx: t }),
					n.$set(s),
					(!b || 4 & a) && u(e, 'background-image', 'url(' + t[2] + ')');
			},
			i(t) {
				b ||
					(m(n.$$.fragment, t),
					g(() => {
						v || (v = h(e, F, {}, !0)), v.run(1);
					}),
					(b = !0));
			},
			o(t) {
				p(n.$$.fragment, t), v || (v = h(e, F, {}, !1)), v.run(0), (b = !1);
			},
			d(t) {
				t && l(e), d(n), t && v && v.end();
			}
		}
	);
}
function X(t, e, n) {
	let { quote: a } = e,
		{ author: s } = e,
		{ image: r } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && n(0, (a = t.quote)),
				'author' in t && n(1, (s = t.author)),
				'image' in t && n(2, (r = t.image));
		}),
		[a, s, r]
	);
}
class Y extends t {
	constructor(t) {
		super(), e(this, t, X, M, n, { quote: 0, author: 1, image: 2 });
	}
}
function Z(t) {
	let e, n, s, i;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = r(t, 'SPAN', { class: !0, title: !0 })), o(e).forEach(l), this.h();
		},
		h() {
			c(e, 'class', 'dot svelte-1w9jqgp'),
				c(e, 'title', (n = `quote by ${t[2]}`)),
				q(e, 'active', t[0] === t[1]),
				q(e, 'not-clickable', t[3]);
		},
		m(n, a) {
			$(n, e, a), s || ((i = _(e, 'click', t[4])), (s = !0));
		},
		p(t, [a]) {
			4 & a && n !== (n = `quote by ${t[2]}`) && c(e, 'title', n),
				3 & a && q(e, 'active', t[0] === t[1]),
				8 & a && q(e, 'not-clickable', t[3]);
		},
		i: j,
		o: j,
		d(t) {
			t && l(e), (s = !1), i();
		}
	};
}
function tt(t, e, n) {
	let { quoteIndex: a } = e,
		{ counter: s } = e,
		{ attribution: r } = e,
		{ autoPlaying: o } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && n(0, (a = t.quoteIndex)),
				'counter' in t && n(1, (s = t.counter)),
				'attribution' in t && n(2, (r = t.attribution)),
				'autoPlaying' in t && n(3, (o = t.autoPlaying));
		}),
		[
			a,
			s,
			r,
			o,
			function (e) {
				P(t, e);
			}
		]
	);
}
class et extends t {
	constructor(t) {
		super(), e(this, t, tt, Z, n, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function nt(t) {
	let e, n, s, i, u, f, m;
	return {
		c() {
			(e = a('div')), (n = a('label')), (s = a('input')), (i = b()), (u = a('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var a = o(e);
			n = r(a, 'LABEL', { class: !0 });
			var c = o(n);
			(s = r(c, 'INPUT', { type: !0, class: !0 })),
				(i = y(c)),
				(u = r(c, 'SPAN', { class: !0 })),
				o(u).forEach(l),
				c.forEach(l),
				a.forEach(l),
				this.h();
		},
		h() {
			c(s, 'type', 'checkbox'),
				c(s, 'class', 'svelte-lb14p7'),
				c(u, 'class', 'slider round svelte-lb14p7'),
				c(n, 'class', 'switch svelte-lb14p7'),
				c(e, 'class', 'switch-cont svelte-lb14p7'),
				c(e, 'id', 'auto-play-cont');
		},
		m(a, r) {
			$(a, e, r),
				k(e, n),
				k(n, s),
				(s.checked = t[0]),
				k(n, i),
				k(n, u),
				f || ((m = [_(s, 'change', t[2]), _(s, 'change', t[1])]), (f = !0));
		},
		p(t, [e]) {
			1 & e && (s.checked = t[0]);
		},
		i: j,
		o: j,
		d(t) {
			t && l(e), (f = !1), I(m);
		}
	};
}
function at(t, e, n) {
	let { switchOn: a } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && n(0, (a = t.switchOn));
		}),
		[
			a,
			function (e) {
				P(t, e);
			},
			function () {
				(a = this.checked), n(0, a);
			}
		]
	);
}
class st extends t {
	constructor(t) {
		super(), e(this, t, at, nt, n, { switchOn: 0 });
	}
}
function rt(t, e, n) {
	const a = t.slice();
	return (a[5] = e[n]), (a[13] = n), a;
}
function ot(t) {
	let e, n;
	return (
		(e = new Y({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				32 & n && (a.quote = t[5]),
					8 & n && (a.author = t[3]),
					16 & n && (a.image = t[4]),
					e.$set(a);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function it(t) {
	let e, n;
	return (
		(e = new et({
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
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p(n, a) {
				t = n;
				const s = {};
				1 & a && (s.quoteIndex = t[0]), 4 & a && (s.autoPlaying = t[2]), e.$set(s);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function lt(t) {
	let e,
		u,
		g,
		h,
		w,
		P,
		L,
		O,
		V,
		R,
		G,
		H,
		W,
		C,
		F,
		Q = t[5],
		T = ot(t),
		U = J,
		K = [];
	for (let n = 0; n < U.length; n += 1) K[n] = it(rt(t, U, n));
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
		(G = new st({ props: X })),
		E.push(() => N(G, 'switchOn', M)),
		G.$on('change', t[8]),
		{
			c() {
				(e = a('div')),
					T.c(),
					(u = b()),
					(g = a('span')),
					(h = v('❮')),
					(w = b()),
					(P = a('span')),
					(L = v('❯')),
					(O = b()),
					(V = a('div'));
				for (let t = 0; t < K.length; t += 1) K[t].c();
				(R = b()), s(G.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var n = o(e);
				T.l(n), (u = y(n)), (g = r(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var a = o(g);
				(h = x(a, '❮')),
					a.forEach(l),
					(w = y(n)),
					(P = r(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o(P);
				(L = x(s, '❯')), s.forEach(l), (O = y(n)), (V = r(n, 'DIV', { class: !0 }));
				var c = o(V);
				for (let e = 0; e < K.length; e += 1) K[e].l(c);
				(R = y(c)), i(G.$$.fragment, c), c.forEach(l), n.forEach(l), this.h();
			},
			h() {
				c(g, 'href', '#prev'),
					c(g, 'class', 'prev svelte-1isr177'),
					c(g, 'title', 'previous quote'),
					q(g, 'not-clickable', t[2]),
					c(P, 'href', '#next'),
					c(P, 'class', 'next svelte-1isr177'),
					c(P, 'title', 'next quote'),
					q(P, 'not-clickable', t[2]),
					c(V, 'class', 'dot-container svelte-1isr177'),
					c(e, 'class', 'slideshow-container svelte-1isr177');
			},
			m(n, a) {
				$(n, e, a),
					T.m(e, null),
					k(e, u),
					k(e, g),
					k(g, h),
					k(e, w),
					k(e, P),
					k(P, L),
					k(e, O),
					k(e, V);
				for (let t = 0; t < K.length; t += 1) K[t].m(V, null);
				k(V, R),
					f(G, V, null),
					(W = !0),
					C || ((F = [_(g, 'click', t[7]), _(P, 'click', t[6])]), (C = !0));
			},
			p(t, [a]) {
				if (
					(32 & a && n(Q, (Q = t[5]))
						? (S(), p(T, 1, 1, j), A(), (T = ot(t)), T.c(), m(T), T.m(e, u))
						: T.p(t, a),
					4 & a && q(g, 'not-clickable', t[2]),
					4 & a && q(P, 'not-clickable', t[2]),
					5 & a)
				) {
					let e;
					for (U = J, e = 0; e < U.length; e += 1) {
						const n = rt(t, U, e);
						K[e]
							? (K[e].p(n, a), m(K[e], 1))
							: ((K[e] = it(n)), K[e].c(), m(K[e], 1), K[e].m(V, R));
					}
					for (S(), e = U.length; e < K.length; e += 1) z(e);
					A();
				}
				const s = {};
				!H && 2 & a && ((H = !0), (s.switchOn = t[1]), B(() => (H = !1))), G.$set(s);
			},
			i(t) {
				if (!W) {
					m(T);
					for (let t = 0; t < U.length; t += 1) m(K[t]);
					m(G.$$.fragment, t), (W = !0);
				}
			},
			o(t) {
				p(T), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) p(K[e]);
				p(G.$$.fragment, t), (W = !1);
			},
			d(t) {
				t && l(e), T.d(t), D(K, t), d(G), (C = !1), I(F);
			}
		}
	);
}
function ct(t, e, n) {
	let a,
		s,
		r,
		o = 0;
	const i = () => {
		n(0, o === J.length - 1 ? (o = 0) : (o += 1));
	};
	let l,
		c = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && n(5, (a = J[o].quote)),
				1 & t.$$.dirty && n(3, (s = J[o].author)),
				1 & t.$$.dirty && n(4, (r = J[o].image));
		}),
		[
			o,
			c,
			u,
			s,
			r,
			a,
			i,
			() => {
				n(0, 0 === o ? (o = J.length - 1) : (o -= 1));
			},
			() => {
				c ? ((l = setInterval(i, 5e3)), n(2, (u = !0))) : (clearInterval(l), n(2, (u = !1)));
			},
			(t) => n(0, (o = t)),
			function (t) {
				(c = t), n(1, c);
			}
		]
	);
}
class ut extends t {
	constructor(t) {
		super(), e(this, t, ct, lt, n, {});
	}
}
function $t(t, e, n) {
	const a = t.slice();
	return (a[3] = e[n].url), (a[4] = e[n].name), (a[5] = e[n].description), a;
}
function ft(t) {
	let e,
		n,
		s,
		i,
		u,
		f,
		m = t[4] + '',
		g = t[5] + '';
	return {
		c() {
			(e = v(m)), (n = b()), (s = a('br')), (i = a('span')), (u = v(g)), (f = b()), this.h();
		},
		l(t) {
			(e = x(t, m)), (n = y(t)), (s = r(t, 'BR', { class: !0 })), (i = r(t, 'SPAN', { class: !0 }));
			var a = o(i);
			(u = x(a, g)), a.forEach(l), (f = y(t)), this.h();
		},
		h() {
			c(s, 'class', 'svelte-p76muo'), c(i, 'class', 'svelte-p76muo');
		},
		m(t, a) {
			$(t, e, a), $(t, n, a), $(t, s, a), $(t, i, a), k(i, u), $(t, f, a);
		},
		p(t, n) {
			1 & n && m !== (m = t[4] + '') && w(e, m), 1 & n && g !== (g = t[5] + '') && w(u, g);
		},
		d(t) {
			t && l(e), t && l(n), t && l(s), t && l(i), t && l(f);
		}
	};
}
function mt(t) {
	let e, n;
	return (
		(e = new U({
			props: {
				tipo: 2,
				variante: t[1],
				href: t[3],
				alt: t[4],
				$$slots: { default: [ft] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
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
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function gt(t) {
	let e,
		n,
		a = t[0],
		s = [];
	for (let o = 0; o < a.length; o += 1) s[o] = mt($t(t, a, o));
	const r = (t) =>
		p(s[t], 1, 1, () => {
			s[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < s.length; t += 1) s[t].c();
			e = L();
		},
		l(t) {
			for (let e = 0; e < s.length; e += 1) s[e].l(t);
			e = L();
		},
		m(t, a) {
			for (let e = 0; e < s.length; e += 1) s[e].m(t, a);
			$(t, e, a), (n = !0);
		},
		p(t, n) {
			if (3 & n) {
				let o;
				for (a = t[0], o = 0; o < a.length; o += 1) {
					const r = $t(t, a, o);
					s[o]
						? (s[o].p(r, n), m(s[o], 1))
						: ((s[o] = mt(r)), s[o].c(), m(s[o], 1), s[o].m(e.parentNode, e));
				}
				for (S(), o = a.length; o < s.length; o += 1) r(o);
				A();
			}
		},
		i(t) {
			if (!n) {
				for (let t = 0; t < a.length; t += 1) m(s[t]);
				n = !0;
			}
		},
		o(t) {
			s = s.filter(Boolean);
			for (let e = 0; e < s.length; e += 1) p(s[e]);
			n = !1;
		},
		d(t) {
			D(s, t), t && l(e);
		}
	};
}
function ht(t) {
	let e, n;
	return (
		(e = new T({
			props: { tipo: 3, variante: t[2], $$slots: { default: [gt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p(t, [n]) {
				const a = {};
				4 & n && (a.variante = t[2]), 515 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function pt(t, e, n) {
	let { secondaryNav: a = [{}] } = e,
		{ url: s = '' } = e,
		{ name: r = '' } = e,
		{ description: o = '' } = e,
		{ variante_item: i = '4' } = e,
		{ variante_list: l = '4' } = e,
		{ tipo: c = '4' } = e;
	return (
		(t.$$set = (t) => {
			'secondaryNav' in t && n(0, (a = t.secondaryNav)),
				'url' in t && n(3, (s = t.url)),
				'name' in t && n(4, (r = t.name)),
				'description' in t && n(5, (o = t.description)),
				'variante_item' in t && n(1, (i = t.variante_item)),
				'variante_list' in t && n(2, (l = t.variante_list)),
				'tipo' in t && n(6, (c = t.tipo));
		}),
		[a, i, l, s, r, o, c]
	);
}
class dt extends t {
	constructor(t) {
		super(),
			e(this, t, pt, ht, n, {
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
function vt(t) {
	let e, n;
	return (
		(e = new G({
			props: {
				tipo: 2,
				variante: 6,
				textalign: 'align-left',
				title: 'Sergio Forés',
				subtitle: O[0].subtitle
			}
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p: j,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function bt(t) {
	let e, n;
	return (
		(e = new dt({ props: { secondaryNav: R, variante_item: 1, variante_list: 6 } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p: j,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function xt(t) {
	let e, n;
	return (
		(e = new ut({})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function yt(t) {
	let e, n;
	return (
		(e = new C({
			props: {
				variante: 1,
				color: 'grey_1',
				align: 'tal',
				text: 'Percibir la conexión esencial de todo'
			}
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p: j,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function kt(t) {
	let e, n;
	return (
		(e = new Q({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p: j,
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function wt(t) {
	let e, n, a, r;
	return (
		(e = new C({
			props: {
				variante: 1,
				color: 'grey_5',
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(a = new V({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				s(e.$$.fragment), (n = b()), s(a.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t), (n = y(t)), i(a.$$.fragment, t);
			},
			m(t, s) {
				f(e, t, s), $(t, n, s), f(a, t, s), (r = !0);
			},
			p: j,
			i(t) {
				r || (m(e.$$.fragment, t), m(a.$$.fragment, t), (r = !0));
			},
			o(t) {
				p(e.$$.fragment, t), p(a.$$.fragment, t), (r = !1);
			},
			d(t) {
				d(e, t), t && l(n), d(a, t);
			}
		}
	);
}
function qt(t) {
	let e, n;
	return (
		(e = new H({
			props: { variante: 0, bg_color: 'bgc_1', $$slots: { default: [wt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				f(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (m(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				p(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				d(e, t);
			}
		}
	);
}
function _t(t) {
	let e;
	return {
		c() {
			(e = a('div')), this.h();
		},
		l(t) {
			(e = r(t, 'DIV', { class: !0 })), o(e).forEach(l), this.h();
		},
		h() {
			c(e, 'class', 'bgc_3 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function jt(t) {
	let e, n, a, r;
	return (
		(e = new W({
			props: {
				tipo: 2,
				variante: 7,
				$$slots: { slot_4: [xt], slot_5: [bt], slot_3: [vt] },
				$$scope: { ctx: t }
			}
		})),
		(a = new W({
			props: {
				tipo: 2,
				variante: 7,
				$$slots: { slot_1: [_t], slot_5: [qt], slot_4: [kt], slot_3: [yt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				s(e.$$.fragment), (n = b()), s(a.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t), (n = y(t)), i(a.$$.fragment, t);
			},
			m(t, s) {
				f(e, t, s), $(t, n, s), f(a, t, s), (r = !0);
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), a.$set(r);
			},
			i(t) {
				r || (m(e.$$.fragment, t), m(a.$$.fragment, t), (r = !0));
			},
			o(t) {
				p(e.$$.fragment, t), p(a.$$.fragment, t), (r = !1);
			},
			d(t) {
				d(e, t), t && l(n), d(a, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, jt, n, {});
	}
}
