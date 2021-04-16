import {
	S as t,
	i as e,
	s as a,
	e as n,
	p as s,
	c as r,
	a as o,
	q as l,
	d as c,
	o as i,
	P as u,
	f as h,
	r as $,
	w as f,
	Q as m,
	R as g,
	x as p,
	y as d,
	t as v,
	j as y,
	b as _,
	l as b,
	g as x,
	h as k,
	G as w,
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
import { c as O, B as L } from '../chunks/Grid.svelte-dc7715e6.js';
import { s as R } from '../chunks/pages-cee8d843.js';
import { H } from '../chunks/Header-eac1ad0e.js';
import { L as W, a as z } from '../chunks/ListItem-48007294.js';
import { B as C } from '../chunks/Blockquote-4c1d0247.js';
import { f as F } from '../chunks/index-65311448.js';
import { I as G } from '../chunks/Img-374bd0d7.js';
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
	let e, a, s, l;
	return {
		c() {
			(e = n('q')), (a = v(t[0])), (s = y()), (l = n('br')), this.h();
		},
		l(n) {
			e = r(n, 'Q', { class: !0 });
			var i = o(e);
			(a = _(i, t[0])), i.forEach(c), (s = b(n)), (l = r(n, 'BR', { class: !0 })), this.h();
		},
		h() {
			i(e, 'class', 'svelte-110t74d'), i(l, 'class', 'svelte-110t74d');
		},
		m(t, n) {
			h(t, e, n), x(e, a), h(t, s, n), h(t, l, n);
		},
		p(t, e) {
			1 & e && k(a, t[0]);
		},
		d(t) {
			t && c(e), t && c(s), t && c(l);
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
			var l = o(e);
			(a = _(l, '— ')), (s = _(l, t[1])), l.forEach(c), this.h();
		},
		h() {
			i(e, 'slot', 'author'), i(e, 'class', 'svelte-110t74d');
		},
		m(t, n) {
			h(t, e, n), x(e, a), x(e, s);
		},
		p(t, e) {
			2 & e && k(s, t[1]);
		},
		d(t) {
			t && c(e);
		}
	};
}
function J(t) {
	let e, a, v, y;
	return (
		(a = new C({ props: { $$slots: { author: [U], default: [T] }, $$scope: { ctx: t } } })),
		{
			c() {
				(e = n('div')), s(a.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0, style: !0 });
				var n = o(e);
				l(a.$$.fragment, n), n.forEach(c), this.h();
			},
			h() {
				i(e, 'class', 'mySlides svelte-110t74d'), u(e, 'background-image', 'url(' + t[2] + ')');
			},
			m(t, n) {
				h(t, e, n), $(a, e, null), (y = !0);
			},
			p(t, [n]) {
				const s = {};
				11 & n && (s.$$scope = { dirty: n, ctx: t }),
					a.$set(s),
					(!y || 4 & n) && u(e, 'background-image', 'url(' + t[2] + ')');
			},
			i(t) {
				y ||
					(f(a.$$.fragment, t),
					m(() => {
						v || (v = g(e, F, {}, !0)), v.run(1);
					}),
					(y = !0));
			},
			o(t) {
				p(a.$$.fragment, t), v || (v = g(e, F, {}, !1)), v.run(0), (y = !1);
			},
			d(t) {
				t && c(e), d(a), t && v && v.end();
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
	let e, a, s, l;
	return {
		c() {
			(e = n('span')), this.h();
		},
		l(t) {
			(e = r(t, 'SPAN', { class: !0, title: !0 })), o(e).forEach(c), this.h();
		},
		h() {
			i(e, 'class', 'dot svelte-1ik7835'),
				i(e, 'title', (a = `quote by ${t[2]}`)),
				w(e, 'active', t[0] === t[1]),
				w(e, 'not-clickable', t[3]);
		},
		m(a, n) {
			h(a, e, n), s || ((l = q(e, 'click', t[4])), (s = !0));
		},
		p(t, [n]) {
			4 & n && a !== (a = `quote by ${t[2]}`) && i(e, 'title', a),
				3 & n && w(e, 'active', t[0] === t[1]),
				8 & n && w(e, 'not-clickable', t[3]);
		},
		i: I,
		o: I,
		d(t) {
			t && c(e), (s = !1), l();
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
	let e, a, s, l, u, $, f;
	return {
		c() {
			(e = n('div')), (a = n('label')), (s = n('input')), (l = y()), (u = n('span')), this.h();
		},
		l(t) {
			e = r(t, 'DIV', { class: !0, id: !0 });
			var n = o(e);
			a = r(n, 'LABEL', { class: !0 });
			var i = o(a);
			(s = r(i, 'INPUT', { type: !0, class: !0 })),
				(l = b(i)),
				(u = r(i, 'SPAN', { class: !0 })),
				o(u).forEach(c),
				i.forEach(c),
				n.forEach(c),
				this.h();
		},
		h() {
			i(s, 'type', 'checkbox'),
				i(s, 'class', 'svelte-12y1a77'),
				i(u, 'class', 'slider round svelte-12y1a77'),
				i(a, 'class', 'switch svelte-12y1a77'),
				i(e, 'class', 'switch-cont svelte-12y1a77'),
				i(e, 'id', 'auto-play-cont');
		},
		m(n, r) {
			h(n, e, r),
				x(e, a),
				x(a, s),
				(s.checked = t[0]),
				x(a, l),
				x(a, u),
				$ || ((f = [q(s, 'change', t[2]), q(s, 'change', t[1])]), ($ = !0));
		},
		p(t, [e]) {
			1 & e && (s.checked = t[0]);
		},
		i: I,
		o: I,
		d(t) {
			t && c(e), ($ = !1), j(f);
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
				l(e.$$.fragment, t);
			},
			m(t, n) {
				$(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				32 & a && (n.quote = t[5]),
					8 & a && (n.author = t[3]),
					16 & a && (n.image = t[4]),
					e.$set(n);
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
				s(e.$$.fragment);
			},
			l(t) {
				l(e.$$.fragment, t);
			},
			m(t, n) {
				$(e, t, n), (a = !0);
			},
			p(a, n) {
				t = a;
				const s = {};
				1 & n && (s.quoteIndex = t[0]), 4 & n && (s.autoPlaying = t[2]), e.$set(s);
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
		m,
		g,
		k,
		E,
		B,
		O,
		L,
		R,
		H,
		W,
		z,
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
		(H = new at({ props: X })),
		P.push(() => D(H, 'switchOn', M)),
		H.$on('change', t[8]),
		{
			c() {
				(e = n('div')),
					T.c(),
					(u = y()),
					(m = n('span')),
					(g = v('❮')),
					(k = y()),
					(E = n('span')),
					(B = v('❯')),
					(O = y()),
					(L = n('div'));
				for (let t = 0; t < J.length; t += 1) J[t].c();
				(R = y()), s(H.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var a = o(e);
				T.l(a), (u = b(a)), (m = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = o(m);
				(g = _(n, '❮')),
					n.forEach(c),
					(k = b(a)),
					(E = r(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o(E);
				(B = _(s, '❯')), s.forEach(c), (O = b(a)), (L = r(a, 'DIV', { class: !0 }));
				var i = o(L);
				for (let e = 0; e < J.length; e += 1) J[e].l(i);
				(R = b(i)), l(H.$$.fragment, i), i.forEach(c), a.forEach(c), this.h();
			},
			h() {
				i(m, 'href', '#prev'),
					i(m, 'class', 'prev svelte-12jowln'),
					i(m, 'title', 'previous quote'),
					w(m, 'not-clickable', t[2]),
					i(E, 'href', '#next'),
					i(E, 'class', 'next svelte-12jowln'),
					i(E, 'title', 'next quote'),
					w(E, 'not-clickable', t[2]),
					i(L, 'class', 'dot-container svelte-12jowln'),
					i(e, 'class', 'slideshow-container svelte-12jowln');
			},
			m(a, n) {
				h(a, e, n),
					T.m(e, null),
					x(e, u),
					x(e, m),
					x(m, g),
					x(e, k),
					x(e, E),
					x(E, B),
					x(e, O),
					x(e, L);
				for (let t = 0; t < J.length; t += 1) J[t].m(L, null);
				x(L, R),
					$(H, L, null),
					(z = !0),
					C || ((F = [q(m, 'click', t[7]), q(E, 'click', t[6])]), (C = !0));
			},
			p(t, [n]) {
				if (
					(32 & n && a(G, (G = t[5]))
						? (N(), p(T, 1, 1, I), V(), (T = st(t)), T.c(), f(T), T.m(e, u))
						: T.p(t, n),
					4 & n && w(m, 'not-clickable', t[2]),
					4 & n && w(E, 'not-clickable', t[2]),
					5 & n)
				) {
					let e;
					for (U = Q, e = 0; e < U.length; e += 1) {
						const a = nt(t, U, e);
						J[e]
							? (J[e].p(a, n), f(J[e], 1))
							: ((J[e] = rt(a)), J[e].c(), f(J[e], 1), J[e].m(L, R));
					}
					for (N(), e = U.length; e < J.length; e += 1) K(e);
					V();
				}
				const s = {};
				!W && 2 & n && ((W = !0), (s.switchOn = t[1]), S(() => (W = !1))), H.$set(s);
			},
			i(t) {
				if (!z) {
					f(T);
					for (let t = 0; t < U.length; t += 1) f(J[t]);
					f(H.$$.fragment, t), (z = !0);
				}
			},
			o(t) {
				p(T), (J = J.filter(Boolean));
				for (let e = 0; e < J.length; e += 1) p(J[e]);
				p(H.$$.fragment, t), (z = !1);
			},
			d(t) {
				t && c(e), T.d(t), A(J, t), d(H), (C = !1), j(F);
			}
		}
	);
}
function lt(t, e, a) {
	let n,
		s,
		r,
		o = 0;
	const l = () => {
		a(0, o === Q.length - 1 ? (o = 0) : (o += 1));
	};
	let c,
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
			l,
			() => {
				a(0, 0 === o ? (o = Q.length - 1) : (o -= 1));
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
	const n = t.slice();
	return (n[3] = e[a].url), (n[4] = e[a].name), (n[5] = e[a].description), n;
}
function ut(t) {
	let e,
		a,
		s,
		l,
		u,
		$,
		f = t[4] + '',
		m = t[5] + '';
	return {
		c() {
			(e = v(f)), (a = y()), (s = n('br')), (l = n('span')), (u = v(m)), ($ = y()), this.h();
		},
		l(t) {
			(e = _(t, f)), (a = b(t)), (s = r(t, 'BR', { class: !0 })), (l = r(t, 'SPAN', { class: !0 }));
			var n = o(l);
			(u = _(n, m)), n.forEach(c), ($ = b(t)), this.h();
		},
		h() {
			i(s, 'class', 'svelte-mrzx2u'), i(l, 'class', 'svelte-mrzx2u');
		},
		m(t, n) {
			h(t, e, n), h(t, a, n), h(t, s, n), h(t, l, n), x(l, u), h(t, $, n);
		},
		p(t, a) {
			1 & a && f !== (f = t[4] + '') && k(e, f), 1 & a && m !== (m = t[5] + '') && k(u, m);
		},
		d(t) {
			t && c(e), t && c(a), t && c(s), t && c(l), t && c($);
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
				s(e.$$.fragment);
			},
			l(t) {
				l(e.$$.fragment, t);
			},
			m(t, n) {
				$(e, t, n), (a = !0);
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
function $t(t) {
	let e,
		a,
		n = t[0],
		s = [];
	for (let o = 0; o < n.length; o += 1) s[o] = ht(it(t, n, o));
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
			h(t, e, n), (a = !0);
		},
		p(t, a) {
			if (3 & a) {
				let o;
				for (n = t[0], o = 0; o < n.length; o += 1) {
					const r = it(t, n, o);
					s[o]
						? (s[o].p(r, a), f(s[o], 1))
						: ((s[o] = ht(r)), s[o].c(), f(s[o], 1), s[o].m(e.parentNode, e));
				}
				for (N(), o = n.length; o < s.length; o += 1) r(o);
				V();
			}
		},
		i(t) {
			if (!a) {
				for (let t = 0; t < n.length; t += 1) f(s[t]);
				a = !0;
			}
		},
		o(t) {
			s = s.filter(Boolean);
			for (let e = 0; e < s.length; e += 1) p(s[e]);
			a = !1;
		},
		d(t) {
			A(s, t), t && c(e);
		}
	};
}
function ft(t) {
	let e, a;
	return (
		(e = new W({
			props: { tipo: 3, variante: t[2], $$slots: { default: [$t] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				s(e.$$.fragment);
			},
			l(t) {
				l(e.$$.fragment, t);
			},
			m(t, n) {
				$(e, t, n), (a = !0);
			},
			p(t, [a]) {
				const n = {};
				4 & a && (n.variante = t[2]), 515 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
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
function mt(t, e, a) {
	let { secondaryNav: n = [{}] } = e,
		{ url: s = '' } = e,
		{ name: r = '' } = e,
		{ description: o = '' } = e,
		{ variante_item: l = '4' } = e,
		{ variante_list: c = '4' } = e,
		{ tipo: i = '4' } = e;
	return (
		(t.$$set = (t) => {
			'secondaryNav' in t && a(0, (n = t.secondaryNav)),
				'url' in t && a(3, (s = t.url)),
				'name' in t && a(4, (r = t.name)),
				'description' in t && a(5, (o = t.description)),
				'variante_item' in t && a(1, (l = t.variante_item)),
				'variante_list' in t && a(2, (c = t.variante_list)),
				'tipo' in t && a(6, (i = t.tipo));
		}),
		[n, l, c, s, r, o, i]
	);
}
class gt extends t {
	constructor(t) {
		super(),
			e(this, t, mt, ft, a, {
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
	let e, a, u, m, g, v, _, k, w, q, E, j, P, D, N, V, S, A, B, W, z, F;
	return (
		(u = new H({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: O[0].subtitle }
		})),
		(v = new gt({ props: { secondaryNav: R, variante_item: 1, variante_list: 6 } })),
		(w = new ct({})),
		(P = new C({ props: { variante: 1, text: 'Percibir la conexión esencial de todo' } })),
		(V = new G({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		(B = new C({
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
				(e = n('div')),
					(a = n('div')),
					s(u.$$.fragment),
					(m = y()),
					(g = n('div')),
					s(v.$$.fragment),
					(_ = y()),
					(k = n('div')),
					s(w.$$.fragment),
					(q = y()),
					(E = n('div')),
					(j = n('div')),
					s(P.$$.fragment),
					(D = y()),
					(N = n('div')),
					s(V.$$.fragment),
					(S = y()),
					(A = n('div')),
					s(B.$$.fragment),
					(W = y()),
					s(z.$$.fragment),
					this.h();
			},
			l(t) {
				e = r(t, 'DIV', { class: !0 });
				var n = o(e);
				a = r(n, 'DIV', { class: !0 });
				var s = o(a);
				l(u.$$.fragment, s), s.forEach(c), (m = b(n)), (g = r(n, 'DIV', { class: !0 }));
				var i = o(g);
				l(v.$$.fragment, i), i.forEach(c), (_ = b(n)), (k = r(n, 'DIV', { class: !0 }));
				var h = o(k);
				l(w.$$.fragment, h),
					h.forEach(c),
					n.forEach(c),
					(q = b(t)),
					(E = r(t, 'DIV', { class: !0 }));
				var $ = o(E);
				j = r($, 'DIV', { class: !0 });
				var f = o(j);
				l(P.$$.fragment, f), f.forEach(c), (D = b($)), (N = r($, 'DIV', { class: !0 }));
				var p = o(N);
				l(V.$$.fragment, p),
					p.forEach(c),
					$.forEach(c),
					(S = b(t)),
					(A = r(t, 'DIV', { class: !0 }));
				var d = o(A);
				l(B.$$.fragment, d), (W = b(d)), l(z.$$.fragment, d), d.forEach(c), this.h();
			},
			h() {
				i(a, 'class', ' bgc_primary c_5 mh_0 dg_0 pcc col_13 col_s2_5 '),
					i(g, 'class', 'col_13 col_s2_8'),
					i(k, 'class', 'col_13 mh_0'),
					i(e, 'class', 'dg'),
					i(j, 'class', 'col_13 col_s2_8 c_5 tac'),
					i(N, 'class', 'col_13 col_s2_5 '),
					i(E, 'class', 'dg p_3 bgc_primary rg_1 mh_0'),
					i(A, 'class', 'col_s2_13 \nrg_1 p_3 dg_0 pcc bgc_0 c_4 tac mh_0');
			},
			m(t, n) {
				h(t, e, n),
					x(e, a),
					$(u, a, null),
					x(e, m),
					x(e, g),
					$(v, g, null),
					x(e, _),
					x(e, k),
					$(w, k, null),
					h(t, q, n),
					h(t, E, n),
					x(E, j),
					$(P, j, null),
					x(E, D),
					x(E, N),
					$(V, N, null),
					h(t, S, n),
					h(t, A, n),
					$(B, A, null),
					x(A, W),
					$(z, A, null),
					(F = !0);
			},
			p: I,
			i(t) {
				F ||
					(f(u.$$.fragment, t),
					f(v.$$.fragment, t),
					f(w.$$.fragment, t),
					f(P.$$.fragment, t),
					f(V.$$.fragment, t),
					f(B.$$.fragment, t),
					f(z.$$.fragment, t),
					(F = !0));
			},
			o(t) {
				p(u.$$.fragment, t),
					p(v.$$.fragment, t),
					p(w.$$.fragment, t),
					p(P.$$.fragment, t),
					p(V.$$.fragment, t),
					p(B.$$.fragment, t),
					p(z.$$.fragment, t),
					(F = !1);
			},
			d(t) {
				t && c(e),
					d(u),
					d(v),
					d(w),
					t && c(q),
					t && c(E),
					d(P),
					d(V),
					t && c(S),
					t && c(A),
					d(B),
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
