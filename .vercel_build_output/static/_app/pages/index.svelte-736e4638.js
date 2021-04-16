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
	r as m,
	w as f,
	Q as g,
	R as h,
	x as p,
	y as d,
	t as v,
	j as x,
	b as y,
	l as k,
	g as b,
	h as q,
	G as w,
	H as _,
	n as P,
	F as I,
	K as j,
	T as E,
	U as N,
	C as S,
	D as A,
	V as B,
	J as D,
	k as L
} from '../chunks/index-d91e1ed8.js';
import { G as O, c as V, B as R } from '../chunks/Grid-86dcf0b4.js';
import { s as H } from '../chunks/pages-6818a1c6.js';
import { H as G, S as W } from '../chunks/Header-cc4c0be9.js';
/* empty css                                */ import {
	B as C,
	I as F
} from '../chunks/Img-a5b8f450.js';
import { f as Q } from '../chunks/index-65311448.js';
import { L as T, a as U } from '../chunks/ListItem-800c4c59.js';
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
			(e = a('q')), (n = v(t[0])), (s = x()), (i = a('br')), this.h();
		},
		l(a) {
			e = r(a, 'Q', { class: !0 });
			var c = o(e);
			(n = y(c, t[0])), c.forEach(l), (s = k(a)), (i = r(a, 'BR', { class: !0 })), this.h();
		},
		h() {
			c(e, 'class', 'svelte-1klekgs'), c(i, 'class', 'svelte-1klekgs');
		},
		m(t, a) {
			$(t, e, a), b(e, n), $(t, s, a), $(t, i, a);
		},
		p(t, e) {
			1 & e && q(n, t[0]);
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
			(n = y(i, '— ')), (s = y(i, t[1])), i.forEach(l), this.h();
		},
		h() {
			c(e, 'slot', 'author'), c(e, 'class', 'svelte-1klekgs');
		},
		m(t, a) {
			$(t, e, a), b(e, n), b(e, s);
		},
		p(t, e) {
			2 & e && q(s, t[1]);
		},
		d(t) {
			t && l(e);
		}
	};
}
function M(t) {
	let e, n, v, x;
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
				c(e, 'class', 'mySlides svelte-1klekgs'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, a) {
				$(t, e, a), m(n, e, null), (x = !0);
			},
			p(t, [a]) {
				const s = {};
				11 & a && (s.$$scope = { dirty: a, ctx: t }),
					n.$set(s),
					(!x || 4 & a) && u(e, 'background-image', 'url(' + t[2] + ')');
			},
			i(t) {
				x ||
					(f(n.$$.fragment, t),
					g(() => {
						v || (v = h(e, Q, {}, !0)), v.run(1);
					}),
					(x = !0));
			},
			o(t) {
				p(n.$$.fragment, t), v || (v = h(e, Q, {}, !1)), v.run(0), (x = !1);
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
			c(e, 'class', 'dot svelte-11opwi8'),
				c(e, 'title', (n = `quote by ${t[2]}`)),
				w(e, 'active', t[0] === t[1]),
				w(e, 'not-clickable', t[3]);
		},
		m(n, a) {
			$(n, e, a), s || ((i = _(e, 'click', t[4])), (s = !0));
		},
		p(t, [a]) {
			4 & a && n !== (n = `quote by ${t[2]}`) && c(e, 'title', n),
				3 & a && w(e, 'active', t[0] === t[1]),
				8 & a && w(e, 'not-clickable', t[3]);
		},
		i: P,
		o: P,
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
				I(t, e);
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
	let e, n, s, i, u, m, f;
	return {
		c() {
			(e = a('div')), (n = a('label')), (s = a('input')), (i = x()), (u = a('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var a = o(e);
			n = r(a, 'LABEL', { class: !0 });
			var c = o(n);
			(s = r(c, 'INPUT', { type: !0, class: !0 })),
				(i = k(c)),
				(u = r(c, 'SPAN', { class: !0 })),
				o(u).forEach(l),
				c.forEach(l),
				a.forEach(l),
				this.h();
		},
		h() {
			c(s, 'type', 'checkbox'),
				c(s, 'class', 'svelte-1rexq7m'),
				c(u, 'class', 'slider round svelte-1rexq7m'),
				c(n, 'class', 'switch svelte-1rexq7m'),
				c(e, 'class', 'switch-cont svelte-1rexq7m'),
				c(e, 'id', 'auto-play-cont');
		},
		m(a, r) {
			$(a, e, r),
				b(e, n),
				b(n, s),
				(s.checked = t[0]),
				b(n, i),
				b(n, u),
				m || ((f = [_(s, 'change', t[2]), _(s, 'change', t[1])]), (m = !0));
		},
		p(t, [e]) {
			1 & e && (s.checked = t[0]);
		},
		i: P,
		o: P,
		d(t) {
			t && l(e), (m = !1), j(f);
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
				I(t, e);
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
				m(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				32 & n && (a.quote = t[5]),
					8 & n && (a.author = t[3]),
					16 & n && (a.image = t[4]),
					e.$set(a);
			},
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
				m(e, t, a), (n = !0);
			},
			p(n, a) {
				t = n;
				const s = {};
				1 & a && (s.quoteIndex = t[0]), 4 & a && (s.autoPlaying = t[2]), e.$set(s);
			},
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
		q,
		I,
		L,
		O,
		V,
		R,
		H,
		G,
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
		(H = new st({ props: X })),
		E.push(() => N(H, 'switchOn', M)),
		H.$on('change', t[8]),
		{
			c() {
				(e = a('div')),
					T.c(),
					(u = x()),
					(g = a('span')),
					(h = v('❮')),
					(q = x()),
					(I = a('span')),
					(L = v('❯')),
					(O = x()),
					(V = a('div'));
				for (let t = 0; t < K.length; t += 1) K[t].c();
				(R = x()), s(H.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var n = o(e);
				T.l(n), (u = k(n)), (g = r(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var a = o(g);
				(h = y(a, '❮')),
					a.forEach(l),
					(q = k(n)),
					(I = r(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o(I);
				(L = y(s, '❯')), s.forEach(l), (O = k(n)), (V = r(n, 'DIV', { class: !0 }));
				var c = o(V);
				for (let e = 0; e < K.length; e += 1) K[e].l(c);
				(R = k(c)), i(H.$$.fragment, c), c.forEach(l), n.forEach(l), this.h();
			},
			h() {
				c(g, 'href', '#prev'),
					c(g, 'class', 'prev svelte-4ukypm'),
					c(g, 'title', 'previous quote'),
					w(g, 'not-clickable', t[2]),
					c(I, 'href', '#next'),
					c(I, 'class', 'next svelte-4ukypm'),
					c(I, 'title', 'next quote'),
					w(I, 'not-clickable', t[2]),
					c(V, 'class', 'dot-container svelte-4ukypm'),
					c(e, 'class', 'slideshow-container svelte-4ukypm');
			},
			m(n, a) {
				$(n, e, a),
					T.m(e, null),
					b(e, u),
					b(e, g),
					b(g, h),
					b(e, q),
					b(e, I),
					b(I, L),
					b(e, O),
					b(e, V);
				for (let t = 0; t < K.length; t += 1) K[t].m(V, null);
				b(V, R),
					m(H, V, null),
					(W = !0),
					C || ((F = [_(g, 'click', t[7]), _(I, 'click', t[6])]), (C = !0));
			},
			p(t, [a]) {
				if (
					(32 & a && n(Q, (Q = t[5]))
						? (S(), p(T, 1, 1, P), A(), (T = ot(t)), T.c(), f(T), T.m(e, u))
						: T.p(t, a),
					4 & a && w(g, 'not-clickable', t[2]),
					4 & a && w(I, 'not-clickable', t[2]),
					5 & a)
				) {
					let e;
					for (U = J, e = 0; e < U.length; e += 1) {
						const n = rt(t, U, e);
						K[e]
							? (K[e].p(n, a), f(K[e], 1))
							: ((K[e] = it(n)), K[e].c(), f(K[e], 1), K[e].m(V, R));
					}
					for (S(), e = U.length; e < K.length; e += 1) z(e);
					A();
				}
				const s = {};
				!G && 2 & a && ((G = !0), (s.switchOn = t[1]), B(() => (G = !1))), H.$set(s);
			},
			i(t) {
				if (!W) {
					f(T);
					for (let t = 0; t < U.length; t += 1) f(K[t]);
					f(H.$$.fragment, t), (W = !0);
				}
			},
			o(t) {
				p(T), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) p(K[e]);
				p(H.$$.fragment, t), (W = !1);
			},
			d(t) {
				t && l(e), T.d(t), D(K, t), d(H), (C = !1), j(F);
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
function mt(t) {
	let e,
		n,
		s,
		i,
		u,
		m,
		f = t[4] + '',
		g = t[5] + '';
	return {
		c() {
			(e = v(f)), (n = x()), (s = a('br')), (i = a('span')), (u = v(g)), (m = x()), this.h();
		},
		l(t) {
			(e = y(t, f)), (n = k(t)), (s = r(t, 'BR', { class: !0 })), (i = r(t, 'SPAN', { class: !0 }));
			var a = o(i);
			(u = y(a, g)), a.forEach(l), (m = k(t)), this.h();
		},
		h() {
			c(s, 'class', 'svelte-shk14v'), c(i, 'class', 'svelte-shk14v');
		},
		m(t, a) {
			$(t, e, a), $(t, n, a), $(t, s, a), $(t, i, a), b(i, u), $(t, m, a);
		},
		p(t, n) {
			1 & n && f !== (f = t[4] + '') && q(e, f), 1 & n && g !== (g = t[5] + '') && q(u, g);
		},
		d(t) {
			t && l(e), t && l(n), t && l(s), t && l(i), t && l(m);
		}
	};
}
function ft(t) {
	let e, n;
	return (
		(e = new U({
			props: {
				tipo: 2,
				variante: t[1],
				href: t[3],
				alt: t[4],
				$$slots: { default: [mt] },
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
				m(e, t, a), (n = !0);
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
				n || (f(e.$$.fragment, t), (n = !0));
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
	for (let o = 0; o < a.length; o += 1) s[o] = ft($t(t, a, o));
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
						? (s[o].p(r, n), f(s[o], 1))
						: ((s[o] = ft(r)), s[o].c(), f(s[o], 1), s[o].m(e.parentNode, e));
				}
				for (S(), o = a.length; o < s.length; o += 1) r(o);
				A();
			}
		},
		i(t) {
			if (!n) {
				for (let t = 0; t < a.length; t += 1) f(s[t]);
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
				m(e, t, a), (n = !0);
			},
			p(t, [n]) {
				const a = {};
				4 & n && (a.variante = t[2]), 515 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
				subtitle: V[0].subtitle
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
				m(e, t, a), (n = !0);
			},
			p: P,
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
		(e = new dt({ props: { secondaryNav: H, variante_item: 1, variante_list: 6 } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				m(e, t, a), (n = !0);
			},
			p: P,
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
		(e = new ut({})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				m(e, t, a), (n = !0);
			},
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
				m(e, t, a), (n = !0);
			},
			p: P,
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
		(e = new F({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				m(e, t, a), (n = !0);
			},
			p: P,
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
function qt(t) {
	let e, n, a, r;
	return (
		(e = new C({
			props: {
				variante: 1,
				color: 'grey_5',
				text: 'Puedes obtener más información contactándome en las redes o por Whatsapp'
			}
		})),
		(a = new R({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				s(e.$$.fragment), (n = x()), s(a.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t), (n = k(t)), i(a.$$.fragment, t);
			},
			m(t, s) {
				m(e, t, s), $(t, n, s), m(a, t, s), (r = !0);
			},
			p: P,
			i(t) {
				r || (f(e.$$.fragment, t), f(a.$$.fragment, t), (r = !0));
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
function wt(t) {
	let e, n;
	return (
		(e = new W({
			props: { variante: 0, bg_color: 'bggrey_1', $$slots: { default: [qt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t);
			},
			m(t, a) {
				m(e, t, a), (n = !0);
			},
			p(t, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (f(e.$$.fragment, t), (n = !0));
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
			c(e, 'class', 'bggrey_3 fullfill');
		},
		m(t, n) {
			$(t, e, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function Pt(t) {
	let e, n, a, r;
	return (
		(e = new O({
			props: {
				tipo: 2,
				variante: 7,
				$$slots: { _8x8: [yt], _5x5: [xt], _3x3: [vt] },
				$$scope: { ctx: t }
			}
		})),
		(a = new O({
			props: {
				tipo: 2,
				variante: 7,
				$$slots: { _1x1: [_t], _8x8: [wt], _5x5: [bt], _3x3: [kt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				s(e.$$.fragment), (n = x()), s(a.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t), (n = k(t)), i(a.$$.fragment, t);
			},
			m(t, s) {
				m(e, t, s), $(t, n, s), m(a, t, s), (r = !0);
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), a.$set(r);
			},
			i(t) {
				r || (f(e.$$.fragment, t), f(a.$$.fragment, t), (r = !0));
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
		super(), e(this, t, null, Pt, n, {});
	}
}
