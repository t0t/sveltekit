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
	Q as h,
	R as g,
	x as p,
	y as d,
	t as v,
	j as b,
	b as y,
	l as x,
	g as q,
	h as w,
	G as k,
	H as _,
	n as P,
	F as j,
	K as I,
	T as E,
	U as N,
	C as S,
	D as A,
	V as B,
	J as D,
	k as L
} from '../chunks/index-d91e1ed8.js';
import { c as O, B as V } from '../chunks/Grid.svelte-81f2d089.js';
import { s as R } from '../chunks/pages-6818a1c6.js';
import { H as G, S as H } from '../chunks/Header-3d35273a.js';
import { G as W } from '../chunks/Grid-11b84c17.js';
/* empty css                                */ import { B as z } from '../chunks/Blockquote-e9c576c6.js';
import { f as C } from '../chunks/index-65311448.js';
import { I as F } from '../chunks/Img-8391a33a.js';
import { L as Q, a as T } from '../chunks/ListItem-91cb1752.js';
import '../chunks/index-78b22dae.js';
const U = [
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
function J(t) {
	let e, n, s, i;
	return {
		c() {
			(e = a('q')), (n = v(t[0])), (s = b()), (i = a('br')), this.h();
		},
		l(a) {
			e = r(a, 'Q', { class: !0 });
			var c = o(e);
			(n = y(c, t[0])), c.forEach(l), (s = x(a)), (i = r(a, 'BR', { class: !0 })), this.h();
		},
		h() {
			c(e, 'class', 'svelte-1lbmdm4'), c(i, 'class', 'svelte-1lbmdm4');
		},
		m(t, a) {
			$(t, e, a), q(e, n), $(t, s, a), $(t, i, a);
		},
		p(t, e) {
			1 & e && w(n, t[0]);
		},
		d(t) {
			t && l(e), t && l(s), t && l(i);
		}
	};
}
function K(t) {
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
			c(e, 'slot', 'author'), c(e, 'class', 'svelte-1lbmdm4');
		},
		m(t, a) {
			$(t, e, a), q(e, n), q(e, s);
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
		(n = new z({ props: { $$slots: { author: [K], default: [J] }, $$scope: { ctx: t } } })),
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
				c(e, 'class', 'mySlides svelte-1lbmdm4'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, a) {
				$(t, e, a), m(n, e, null), (b = !0);
			},
			p(t, [a]) {
				const s = {};
				11 & a && (s.$$scope = { dirty: a, ctx: t }),
					n.$set(s),
					(!b || 4 & a) && u(e, 'background-image', 'url(' + t[2] + ')');
			},
			i(t) {
				b ||
					(f(n.$$.fragment, t),
					h(() => {
						v || (v = g(e, C, {}, !0)), v.run(1);
					}),
					(b = !0));
			},
			o(t) {
				p(n.$$.fragment, t), v || (v = g(e, C, {}, !1)), v.run(0), (b = !1);
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
			c(e, 'class', 'dot svelte-10wkm3c'),
				c(e, 'title', (n = `quote by ${t[2]}`)),
				k(e, 'active', t[0] === t[1]),
				k(e, 'not-clickable', t[3]);
		},
		m(n, a) {
			$(n, e, a), s || ((i = _(e, 'click', t[4])), (s = !0));
		},
		p(t, [a]) {
			4 & a && n !== (n = `quote by ${t[2]}`) && c(e, 'title', n),
				3 & a && k(e, 'active', t[0] === t[1]),
				8 & a && k(e, 'not-clickable', t[3]);
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
				j(t, e);
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
			(e = a('div')), (n = a('label')), (s = a('input')), (i = b()), (u = a('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var a = o(e);
			n = r(a, 'LABEL', { class: !0 });
			var c = o(n);
			(s = r(c, 'INPUT', { type: !0, class: !0 })),
				(i = x(c)),
				(u = r(c, 'SPAN', { class: !0 })),
				o(u).forEach(l),
				c.forEach(l),
				a.forEach(l),
				this.h();
		},
		h() {
			c(s, 'type', 'checkbox'),
				c(s, 'class', 'svelte-1wqyur2'),
				c(u, 'class', 'slider round svelte-1wqyur2'),
				c(n, 'class', 'switch svelte-1wqyur2'),
				c(e, 'class', 'switch-cont svelte-1wqyur2'),
				c(e, 'id', 'auto-play-cont');
		},
		m(a, r) {
			$(a, e, r),
				q(e, n),
				q(n, s),
				(s.checked = t[0]),
				q(n, i),
				q(n, u),
				m || ((f = [_(s, 'change', t[2]), _(s, 'change', t[1])]), (m = !0));
		},
		p(t, [e]) {
			1 & e && (s.checked = t[0]);
		},
		i: P,
		o: P,
		d(t) {
			t && l(e), (m = !1), I(f);
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
				j(t, e);
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
		h,
		g,
		w,
		j,
		L,
		O,
		V,
		R,
		G,
		H,
		W,
		z,
		C,
		F = t[5],
		Q = ot(t),
		T = U,
		J = [];
	for (let n = 0; n < T.length; n += 1) J[n] = it(rt(t, T, n));
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
		(G = new st({ props: X })),
		E.push(() => N(G, 'switchOn', M)),
		G.$on('change', t[8]),
		{
			c() {
				(e = a('div')),
					Q.c(),
					(u = b()),
					(h = a('span')),
					(g = v('❮')),
					(w = b()),
					(j = a('span')),
					(L = v('❯')),
					(O = b()),
					(V = a('div'));
				for (let t = 0; t < J.length; t += 1) J[t].c();
				(R = b()), s(G.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var n = o(e);
				Q.l(n), (u = x(n)), (h = r(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var a = o(h);
				(g = y(a, '❮')),
					a.forEach(l),
					(w = x(n)),
					(j = r(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o(j);
				(L = y(s, '❯')), s.forEach(l), (O = x(n)), (V = r(n, 'DIV', { class: !0 }));
				var c = o(V);
				for (let e = 0; e < J.length; e += 1) J[e].l(c);
				(R = x(c)), i(G.$$.fragment, c), c.forEach(l), n.forEach(l), this.h();
			},
			h() {
				c(h, 'href', '#prev'),
					c(h, 'class', 'prev svelte-1atbqdy'),
					c(h, 'title', 'previous quote'),
					k(h, 'not-clickable', t[2]),
					c(j, 'href', '#next'),
					c(j, 'class', 'next svelte-1atbqdy'),
					c(j, 'title', 'next quote'),
					k(j, 'not-clickable', t[2]),
					c(V, 'class', 'dot-container svelte-1atbqdy'),
					c(e, 'class', 'slideshow-container svelte-1atbqdy');
			},
			m(n, a) {
				$(n, e, a),
					Q.m(e, null),
					q(e, u),
					q(e, h),
					q(h, g),
					q(e, w),
					q(e, j),
					q(j, L),
					q(e, O),
					q(e, V);
				for (let t = 0; t < J.length; t += 1) J[t].m(V, null);
				q(V, R),
					m(G, V, null),
					(W = !0),
					z || ((C = [_(h, 'click', t[7]), _(j, 'click', t[6])]), (z = !0));
			},
			p(t, [a]) {
				if (
					(32 & a && n(F, (F = t[5]))
						? (S(), p(Q, 1, 1, P), A(), (Q = ot(t)), Q.c(), f(Q), Q.m(e, u))
						: Q.p(t, a),
					4 & a && k(h, 'not-clickable', t[2]),
					4 & a && k(j, 'not-clickable', t[2]),
					5 & a)
				) {
					let e;
					for (T = U, e = 0; e < T.length; e += 1) {
						const n = rt(t, T, e);
						J[e]
							? (J[e].p(n, a), f(J[e], 1))
							: ((J[e] = it(n)), J[e].c(), f(J[e], 1), J[e].m(V, R));
					}
					for (S(), e = T.length; e < J.length; e += 1) K(e);
					A();
				}
				const s = {};
				!H && 2 & a && ((H = !0), (s.switchOn = t[1]), B(() => (H = !1))), G.$set(s);
			},
			i(t) {
				if (!W) {
					f(Q);
					for (let t = 0; t < T.length; t += 1) f(J[t]);
					f(G.$$.fragment, t), (W = !0);
				}
			},
			o(t) {
				p(Q), (J = J.filter(Boolean));
				for (let e = 0; e < J.length; e += 1) p(J[e]);
				p(G.$$.fragment, t), (W = !1);
			},
			d(t) {
				t && l(e), Q.d(t), D(J, t), d(G), (z = !1), I(C);
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
		n(0, o === U.length - 1 ? (o = 0) : (o += 1));
	};
	let l,
		c = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && n(5, (a = U[o].quote)),
				1 & t.$$.dirty && n(3, (s = U[o].author)),
				1 & t.$$.dirty && n(4, (r = U[o].image));
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
				n(0, 0 === o ? (o = U.length - 1) : (o -= 1));
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
		h = t[5] + '';
	return {
		c() {
			(e = v(f)), (n = b()), (s = a('br')), (i = a('span')), (u = v(h)), (m = b()), this.h();
		},
		l(t) {
			(e = y(t, f)), (n = x(t)), (s = r(t, 'BR', { class: !0 })), (i = r(t, 'SPAN', { class: !0 }));
			var a = o(i);
			(u = y(a, h)), a.forEach(l), (m = x(t)), this.h();
		},
		h() {
			c(s, 'class', 'svelte-cwi2z'), c(i, 'class', 'svelte-cwi2z');
		},
		m(t, a) {
			$(t, e, a), $(t, n, a), $(t, s, a), $(t, i, a), q(i, u), $(t, m, a);
		},
		p(t, n) {
			1 & n && f !== (f = t[4] + '') && w(e, f), 1 & n && h !== (h = t[5] + '') && w(u, h);
		},
		d(t) {
			t && l(e), t && l(n), t && l(s), t && l(i), t && l(m);
		}
	};
}
function ft(t) {
	let e, n;
	return (
		(e = new T({
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
function ht(t) {
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
function gt(t) {
	let e, n;
	return (
		(e = new Q({
			props: { tipo: 3, variante: t[2], $$slots: { default: [ht] }, $$scope: { ctx: t } }
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
			e(this, t, pt, gt, n, {
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
		(e = new dt({ props: { secondaryNav: R, variante_item: 1, variante_list: 6 } })),
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
function xt(t) {
	let e, n;
	return (
		(e = new z({
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
function qt(t) {
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
function wt(t) {
	let e, n, a, r;
	return (
		(e = new z({
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
				i(e.$$.fragment, t), (n = x(t)), i(a.$$.fragment, t);
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
function kt(t) {
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
function Pt(t) {
	let e, n, a, r;
	return (
		(e = new W({
			props: {
				tipo: 2,
				variante: 7,
				$$slots: { slot_4: [yt], slot_5: [bt], slot_3: [vt] },
				$$scope: { ctx: t }
			}
		})),
		(a = new W({
			props: {
				tipo: 2,
				variante: 7,
				$$slots: { slot_1: [_t], slot_5: [kt], slot_4: [qt], slot_3: [xt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				s(e.$$.fragment), (n = b()), s(a.$$.fragment);
			},
			l(t) {
				i(e.$$.fragment, t), (n = x(t)), i(a.$$.fragment, t);
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
