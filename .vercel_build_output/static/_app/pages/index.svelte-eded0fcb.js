import {
	S as t,
	i as e,
	s as a,
	e as n,
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
	h as d,
	Q as g,
	R as p,
	G as v,
	H as b,
	n as y,
	F as x,
	K as w,
	p as q,
	q as k,
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
import { S as O, H as C } from '../chunks/Header-e756daf8.js';
import { L as H, G as B, B as R } from '../chunks/ListItem-7b7dc3dc.js';
import { L as U } from '../chunks/List-340c877d.js';
import { f as F } from '../chunks/index-65311448.js';
import { I as G } from '../chunks/Img-3bbfc0ef.js';
import { s as Q } from '../chunks/pages-9b466ab8.js';
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
	let e, a, v, b, y, x, w, q, k;
	return {
		c() {
			(e = n('div')),
				(a = n('q')),
				(v = r(t[0])),
				(b = s()),
				(y = n('p')),
				(x = r('—')),
				(w = r(t[1])),
				this.h();
		},
		l(n) {
			e = o(n, 'DIV', { class: !0, style: !0 });
			var r = i(e);
			a = o(r, 'Q', { class: !0 });
			var s = i(a);
			(v = c(s, t[0])), s.forEach(l), (b = u(r)), (y = o(r, 'P', { class: !0 }));
			var $ = i(y);
			(x = c($, '—')), (w = c($, t[1])), $.forEach(l), r.forEach(l), this.h();
		},
		h() {
			$(a, 'class', 'svelte-vgayxl'),
				$(y, 'class', 'author svelte-vgayxl'),
				$(e, 'class', 'mySlides svelte-vgayxl'),
				f(e, 'background-image', 'url(' + t[2] + ')');
		},
		m(t, n) {
			h(t, e, n), m(e, a), m(a, v), m(e, b), m(e, y), m(y, x), m(y, w), (k = !0);
		},
		p(t, [a]) {
			(!k || 1 & a) && d(v, t[0]),
				(!k || 2 & a) && d(w, t[1]),
				(!k || 4 & a) && f(e, 'background-image', 'url(' + t[2] + ')');
		},
		i(t) {
			k ||
				(g(() => {
					q || (q = p(e, F, {}, !0)), q.run(1);
				}),
				(k = !0));
		},
		o(t) {
			q || (q = p(e, F, {}, !1)), q.run(0), (k = !1);
		},
		d(t) {
			t && l(e), t && q && q.end();
		}
	};
}
function z(t, e, a) {
	let { quote: n } = e,
		{ author: r } = e,
		{ image: s } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && a(0, (n = t.quote)),
				'author' in t && a(1, (r = t.author)),
				'image' in t && a(2, (s = t.image));
		}),
		[n, r, s]
	);
}
class J extends t {
	constructor(t) {
		super(), e(this, t, z, W, a, { quote: 0, author: 1, image: 2 });
	}
}
function K(t) {
	let e, a, r, s;
	return {
		c() {
			(e = n('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { class: !0, title: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'class', 'dot svelte-7zqpp0'),
				$(e, 'title', (a = `quote by ${t[2]}`)),
				v(e, 'active', t[0] === t[1]),
				v(e, 'not-clickable', t[3]);
		},
		m(a, n) {
			h(a, e, n), r || ((s = b(e, 'click', t[4])), (r = !0));
		},
		p(t, [n]) {
			4 & n && a !== (a = `quote by ${t[2]}`) && $(e, 'title', a),
				3 & n && v(e, 'active', t[0] === t[1]),
				8 & n && v(e, 'not-clickable', t[3]);
		},
		i: y,
		o: y,
		d(t) {
			t && l(e), (r = !1), s();
		}
	};
}
function M(t, e, a) {
	let { quoteIndex: n } = e,
		{ counter: r } = e,
		{ attribution: s } = e,
		{ autoPlaying: o } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && a(0, (n = t.quoteIndex)),
				'counter' in t && a(1, (r = t.counter)),
				'attribution' in t && a(2, (s = t.attribution)),
				'autoPlaying' in t && a(3, (o = t.autoPlaying));
		}),
		[
			n,
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
		super(), e(this, t, M, K, a, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function Y(t) {
	let e, a, r, c, f, d, g;
	return {
		c() {
			(e = n('div')), (a = n('label')), (r = n('input')), (c = s()), (f = n('span')), this.h();
		},
		l(t) {
			e = o(t, 'DIV', { class: !0, id: !0 });
			var n = i(e);
			a = o(n, 'LABEL', { class: !0 });
			var s = i(a);
			(r = o(s, 'INPUT', { type: !0, class: !0 })),
				(c = u(s)),
				(f = o(s, 'SPAN', { class: !0 })),
				i(f).forEach(l),
				s.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			$(r, 'type', 'checkbox'),
				$(r, 'class', 'svelte-odbh77'),
				$(f, 'class', 'slider round svelte-odbh77'),
				$(a, 'class', 'switch svelte-odbh77'),
				$(e, 'class', 'switch-cont svelte-odbh77'),
				$(e, 'id', 'auto-play-cont');
		},
		m(n, s) {
			h(n, e, s),
				m(e, a),
				m(a, r),
				(r.checked = t[0]),
				m(a, c),
				m(a, f),
				d || ((g = [b(r, 'change', t[2]), b(r, 'change', t[1])]), (d = !0));
		},
		p(t, [e]) {
			1 & e && (r.checked = t[0]);
		},
		i: y,
		o: y,
		d(t) {
			t && l(e), (d = !1), w(g);
		}
	};
}
function Z(t, e, a) {
	let { switchOn: n } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && a(0, (n = t.switchOn));
		}),
		[
			n,
			function (e) {
				x(t, e);
			},
			function () {
				(n = this.checked), a(0, n);
			}
		]
	);
}
class tt extends t {
	constructor(t) {
		super(), e(this, t, Z, Y, a, { switchOn: 0 });
	}
}
function et(t, e, a) {
	const n = t.slice();
	return (n[5] = e[a]), (n[13] = a), n;
}
function at(t) {
	let e, a;
	return (
		(e = new J({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				32 & a && (n.quote = t[5]),
					8 & a && (n.author = t[3]),
					16 & a && (n.image = t[4]),
					e.$set(n);
			},
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function nt(t) {
	let e, a;
	return (
		(e = new X({
			props: { counter: t[13], quoteIndex: t[0], autoPlaying: t[2], attribution: t[5].author }
		})),
		e.$on('click', function () {
			return t[9](t[13]);
		}),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(a, n) {
				t = a;
				const r = {};
				1 & n && (r.quoteIndex = t[0]), 4 & n && (r.autoPlaying = t[2]), e.$set(r);
			},
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
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
		d,
		g,
		p,
		x,
		L,
		O,
		C,
		H,
		B,
		R,
		U,
		F,
		G,
		Q = t[5],
		W = at(t),
		z = T,
		J = [];
	for (let a = 0; a < z.length; a += 1) J[a] = nt(et(t, z, a));
	const K = (t) =>
		I(J[t], 1, 1, () => {
			J[t] = null;
		});
	function M(e) {
		t[10](e);
	}
	let X = {};
	return (
		void 0 !== t[1] && (X.switchOn = t[1]),
		(B = new tt({ props: X })),
		S.push(() => j(B, 'switchOn', M)),
		B.$on('change', t[8]),
		{
			c() {
				(e = n('div')),
					W.c(),
					(f = s()),
					(d = n('span')),
					(g = r('❮')),
					(p = s()),
					(x = n('span')),
					(L = r('❯')),
					(O = s()),
					(C = n('div'));
				for (let t = 0; t < J.length; t += 1) J[t].c();
				(H = s()), q(B.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { class: !0 });
				var a = i(e);
				W.l(a), (f = u(a)), (d = o(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = i(d);
				(g = c(n, '❮')),
					n.forEach(l),
					(p = u(a)),
					(x = o(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var r = i(x);
				(L = c(r, '❯')), r.forEach(l), (O = u(a)), (C = o(a, 'DIV', { class: !0 }));
				var s = i(C);
				for (let e = 0; e < J.length; e += 1) J[e].l(s);
				(H = u(s)), k(B.$$.fragment, s), s.forEach(l), a.forEach(l), this.h();
			},
			h() {
				$(d, 'href', '#prev'),
					$(d, 'class', 'prev svelte-9a1y55'),
					$(d, 'title', 'previous quote'),
					v(d, 'not-clickable', t[2]),
					$(x, 'href', '#next'),
					$(x, 'class', 'next svelte-9a1y55'),
					$(x, 'title', 'next quote'),
					v(x, 'not-clickable', t[2]),
					$(C, 'class', 'dot-container svelte-9a1y55'),
					$(e, 'class', 'slideshow-container svelte-9a1y55');
			},
			m(a, n) {
				h(a, e, n),
					W.m(e, null),
					m(e, f),
					m(e, d),
					m(d, g),
					m(e, p),
					m(e, x),
					m(x, L),
					m(e, O),
					m(e, C);
				for (let t = 0; t < J.length; t += 1) J[t].m(C, null);
				m(C, H),
					E(B, C, null),
					(U = !0),
					F || ((G = [b(d, 'click', t[7]), b(x, 'click', t[6])]), (F = !0));
			},
			p(t, [n]) {
				if (
					(32 & n && a(Q, (Q = t[5]))
						? (A(), I(W, 1, 1, y), D(), (W = at(t)), W.c(), P(W), W.m(e, f))
						: W.p(t, n),
					4 & n && v(d, 'not-clickable', t[2]),
					4 & n && v(x, 'not-clickable', t[2]),
					5 & n)
				) {
					let e;
					for (z = T, e = 0; e < z.length; e += 1) {
						const a = et(t, z, e);
						J[e]
							? (J[e].p(a, n), P(J[e], 1))
							: ((J[e] = nt(a)), J[e].c(), P(J[e], 1), J[e].m(C, H));
					}
					for (A(), e = z.length; e < J.length; e += 1) K(e);
					D();
				}
				const r = {};
				!R && 2 & n && ((R = !0), (r.switchOn = t[1]), _(() => (R = !1))), B.$set(r);
			},
			i(t) {
				if (!U) {
					P(W);
					for (let t = 0; t < z.length; t += 1) P(J[t]);
					P(B.$$.fragment, t), (U = !0);
				}
			},
			o(t) {
				I(W), (J = J.filter(Boolean));
				for (let e = 0; e < J.length; e += 1) I(J[e]);
				I(B.$$.fragment, t), (U = !1);
			},
			d(t) {
				t && l(e), W.d(t), V(J, t), N(B), (F = !1), w(G);
			}
		}
	);
}
function st(t, e, a) {
	let n,
		r,
		s,
		o = 0;
	const i = () => {
		a(0, o === T.length - 1 ? (o = 0) : (o += 1));
	};
	let c,
		l = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && a(5, (n = T[o].quote)),
				1 & t.$$.dirty && a(3, (r = T[o].author)),
				1 & t.$$.dirty && a(4, (s = T[o].image));
		}),
		[
			o,
			l,
			u,
			r,
			s,
			n,
			i,
			() => {
				a(0, 0 === o ? (o = T.length - 1) : (o -= 1));
			},
			() => {
				l ? ((c = setInterval(i, 5e3)), a(2, (u = !0))) : (clearInterval(c), a(2, (u = !1)));
			},
			(t) => a(0, (o = t)),
			function (t) {
				(l = t), a(1, l);
			}
		]
	);
}
class ot extends t {
	constructor(t) {
		super(), e(this, t, st, rt, a, {});
	}
}
function it(t, e, a) {
	const n = t.slice();
	return (n[3] = e[a].url), (n[4] = e[a].name), (n[5] = e[a].description), n;
}
function ct(t) {
	let e,
		a,
		f,
		g,
		p,
		v,
		b = t[4] + '',
		y = t[5] + '';
	return {
		c() {
			(e = r(b)), (a = s()), (f = n('br')), (g = n('span')), (p = r(y)), (v = s()), this.h();
		},
		l(t) {
			(e = c(t, b)), (a = u(t)), (f = o(t, 'BR', { class: !0 })), (g = o(t, 'SPAN', { class: !0 }));
			var n = i(g);
			(p = c(n, y)), n.forEach(l), (v = u(t)), this.h();
		},
		h() {
			$(f, 'class', 'svelte-1d78h2a'), $(g, 'class', 'svelte-1d78h2a');
		},
		m(t, n) {
			h(t, e, n), h(t, a, n), h(t, f, n), h(t, g, n), m(g, p), h(t, v, n);
		},
		p(t, a) {
			1 & a && b !== (b = t[4] + '') && d(e, b), 1 & a && y !== (y = t[5] + '') && d(p, y);
		},
		d(t) {
			t && l(e), t && l(a), t && l(f), t && l(g), t && l(v);
		}
	};
}
function lt(t) {
	let e, a;
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
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
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
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function ut(t) {
	let e,
		a,
		n = t[0],
		r = [];
	for (let o = 0; o < n.length; o += 1) r[o] = lt(it(t, n, o));
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
		m(t, n) {
			for (let e = 0; e < r.length; e += 1) r[e].m(t, n);
			h(t, e, n), (a = !0);
		},
		p(t, a) {
			if (3 & a) {
				let o;
				for (n = t[0], o = 0; o < n.length; o += 1) {
					const s = it(t, n, o);
					r[o]
						? (r[o].p(s, a), P(r[o], 1))
						: ((r[o] = lt(s)), r[o].c(), P(r[o], 1), r[o].m(e.parentNode, e));
				}
				for (A(), o = n.length; o < r.length; o += 1) s(o);
				D();
			}
		},
		i(t) {
			if (!a) {
				for (let t = 0; t < n.length; t += 1) P(r[t]);
				a = !0;
			}
		},
		o(t) {
			r = r.filter(Boolean);
			for (let e = 0; e < r.length; e += 1) I(r[e]);
			a = !1;
		},
		d(t) {
			V(r, t), t && l(e);
		}
	};
}
function $t(t) {
	let e, a;
	return (
		(e = new U({
			props: { tipo: 3, variante: t[2], $$slots: { default: [ut] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(t, [a]) {
				const n = {};
				4 & a && (n.variante = t[2]), 515 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
			},
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function ft(t, e, a) {
	let { secondaryNav: n = [{}] } = e,
		{ url: r = '' } = e,
		{ name: s = '' } = e,
		{ description: o = '' } = e,
		{ variante_item: i = '4' } = e,
		{ variante_list: c = '4' } = e,
		{ tipo: l = '4' } = e;
	return (
		(t.$$set = (t) => {
			'secondaryNav' in t && a(0, (n = t.secondaryNav)),
				'url' in t && a(3, (r = t.url)),
				'name' in t && a(4, (s = t.name)),
				'description' in t && a(5, (o = t.description)),
				'variante_item' in t && a(1, (i = t.variante_item)),
				'variante_list' in t && a(2, (c = t.variante_list)),
				'tipo' in t && a(6, (l = t.tipo));
		}),
		[n, i, c, r, s, o, l]
	);
}
class ht extends t {
	constructor(t) {
		super(),
			e(this, t, ft, $t, a, {
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
	let e, a, r;
	return (
		(a = new C({
			props: { tipo: 2, variante: 6, title: 'Sergio Forés', subtitle: 'Hermenéutica Holística' }
		})),
		{
			c() {
				(e = n('span')), q(a.$$.fragment);
			},
			l(t) {
				e = o(t, 'SPAN', {});
				var n = i(e);
				k(a.$$.fragment, n), n.forEach(l);
			},
			m(t, n) {
				h(t, e, n), E(a, e, null), (r = !0);
			},
			p: y,
			i(t) {
				r || (P(a.$$.fragment, t), (r = !0));
			},
			o(t) {
				I(a.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && l(e), N(a);
			}
		}
	);
}
function dt(t) {
	let e, a, r;
	return (
		(a = new ht({ props: { secondaryNav: Q, variante_item: 1, variante_list: 6 } })),
		{
			c() {
				(e = n('span')), q(a.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'SPAN', { slot: !0 });
				var n = i(e);
				k(a.$$.fragment, n), n.forEach(l), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1');
			},
			m(t, n) {
				h(t, e, n), E(a, e, null), (r = !0);
			},
			p: y,
			i(t) {
				r || (P(a.$$.fragment, t), (r = !0));
			},
			o(t) {
				I(a.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && l(e), N(a);
			}
		}
	);
}
function gt(t) {
	let e;
	return {
		c() {
			(e = n('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, a) {
			h(t, e, a);
		},
		d(t) {
			t && l(e);
		}
	};
}
function pt(t) {
	let e;
	return {
		c() {
			(e = n('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea3');
		},
		m(t, a) {
			h(t, e, a);
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
			(e = n('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea4');
		},
		m(t, a) {
			h(t, e, a);
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
			(e = n('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea5');
		},
		m(t, a) {
			h(t, e, a);
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
			(e = n('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea6');
		},
		m(t, a) {
			h(t, e, a);
		},
		d(t) {
			t && l(e);
		}
	};
}
function xt(t) {
	let e, a;
	return (
		(e = new B({
			props: {
				tipo: 1,
				variante: 6,
				$$slots: {
					subarea6: [yt],
					subarea5: [bt],
					subarea4: [vt],
					subarea3: [pt],
					subarea2: [gt],
					subarea1: [dt],
					default: [mt]
				},
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
			},
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function wt(t) {
	let e, a;
	return (
		(e = new ot({})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function qt(t) {
	let e, a;
	return (
		(e = new G({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p: y,
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function kt(t) {
	let e, a, s;
	return {
		c() {
			(e = n('div')),
				(a = n('p')),
				(s = r(
					'Descifrando la Creación, en la intersección del arte, la tecnología y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexión.'
				)),
				this.h();
		},
		l(t) {
			e = o(t, 'DIV', { slot: !0 });
			var n = i(e);
			a = o(n, 'P', {});
			var r = i(a);
			(s = c(
				r,
				'Descifrando la Creación, en la intersección del arte, la tecnología y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexión.'
			)),
				r.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, n) {
			h(t, e, n), m(e, a), m(a, s);
		},
		d(t) {
			t && l(e);
		}
	};
}
function Et(t) {
	let e, a, r;
	return (
		(a = new R({
			props: {
				variante: 7,
				text: 'Chat-Whatsapp',
				url: 'https://api.whatsapp.com/send?phone=+34619549032'
			}
		})),
		{
			c() {
				(e = n('div')), q(a.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { slot: !0 });
				var n = i(e);
				k(a.$$.fragment, n), n.forEach(l), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1');
			},
			m(t, n) {
				h(t, e, n), E(a, e, null), (r = !0);
			},
			p: y,
			i(t) {
				r || (P(a.$$.fragment, t), (r = !0));
			},
			o(t) {
				I(a.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && l(e), N(a);
			}
		}
	);
}
function Pt(t) {
	let e, a;
	return (
		(e = new B({
			props: {
				variante: 5,
				$$slots: { subarea1: [Et], subarea2: [kt], default: [qt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
			},
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function It(t) {
	let e, a;
	return (
		(e = new G({ props: { variante: 4, src: './img/cover4.jpg', alt: 'Presentation' } })),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p: y,
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function Nt(t) {
	let e, a, s;
	return {
		c() {
			(e = n('div')),
				(a = n('p')),
				(s = r(
					'El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma un tipo de conexión trascendental.'
				)),
				this.h();
		},
		l(t) {
			e = o(t, 'DIV', { slot: !0 });
			var n = i(e);
			a = o(n, 'P', {});
			var r = i(a);
			(s = c(
				r,
				'El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma un tipo de conexión trascendental.'
			)),
				r.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			$(e, 'slot', 'subarea1');
		},
		m(t, n) {
			h(t, e, n), m(e, a), m(a, s);
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
			(e = n('div')), this.h();
		},
		l(t) {
			(e = o(t, 'DIV', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, a) {
			h(t, e, a);
		},
		d(t) {
			t && l(e);
		}
	};
}
function jt(t) {
	let e, a;
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
				q(e.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
			},
			i(t) {
				a || (P(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				N(e, t);
			}
		}
	);
}
function At(t) {
	let e, a, n, r, o, i, c, $, f, m;
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
		(n = new O({
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
				q(e.$$.fragment),
					(a = s()),
					q(n.$$.fragment),
					(r = s()),
					q(o.$$.fragment),
					(i = s()),
					q(c.$$.fragment),
					($ = s()),
					q(f.$$.fragment);
			},
			l(t) {
				k(e.$$.fragment, t),
					(a = u(t)),
					k(n.$$.fragment, t),
					(r = u(t)),
					k(o.$$.fragment, t),
					(i = u(t)),
					k(c.$$.fragment, t),
					($ = u(t)),
					k(f.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s),
					h(t, a, s),
					E(n, t, s),
					h(t, r, s),
					E(o, t, s),
					h(t, i, s),
					E(c, t, s),
					h(t, $, s),
					E(f, t, s),
					(m = !0);
			},
			p(t, [a]) {
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: t }), e.$set(r);
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: t }), n.$set(s);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: t }), c.$set(o);
				const i = {};
				1 & a && (i.$$scope = { dirty: a, ctx: t }), f.$set(i);
			},
			i(t) {
				m ||
					(P(e.$$.fragment, t),
					P(n.$$.fragment, t),
					P(o.$$.fragment, t),
					P(c.$$.fragment, t),
					P(f.$$.fragment, t),
					(m = !0));
			},
			o(t) {
				I(e.$$.fragment, t),
					I(n.$$.fragment, t),
					I(o.$$.fragment, t),
					I(c.$$.fragment, t),
					I(f.$$.fragment, t),
					(m = !1);
			},
			d(t) {
				N(e, t), t && l(a), N(n, t), t && l(r), N(o, t), t && l(i), N(c, t), t && l($), N(f, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, At, a, {});
	}
}
