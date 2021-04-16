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
	P as m,
	f,
	g as h,
	h as g,
	Q as p,
	R as d,
	G as v,
	H as b,
	n as y,
	F as x,
	K as w,
	p as k,
	q,
	r as E,
	w as I,
	x as P,
	y as j,
	T as V,
	U as D,
	C as S,
	D as L,
	V as M,
	J as T
} from '../chunks/index-d91e1ed8.js';
import { B as A, C as O, c as N, G as B } from '../chunks/Cover-baa7aeae.js';
import { S as C } from '../chunks/Section-db7b341b.js';
import { f as H } from '../chunks/index-65311448.js';
import { I as G } from '../chunks/Img-05e6f813.js';
import { s as Q } from '../chunks/pages-26a130a6.js';
import '../chunks/index-78b22dae.js';
const R = [
	{
		quote: 'The road to success is always under construction.',
		author: 'Lily Tomlin',
		image: '/img/bg1.jpg'
	},
	{
		quote: 'A day without sunshine is like, you know, night.',
		author: 'Steve Martin',
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
		image: '/img/bg4.jpg'
	},
	{
		quote:
			'Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.',
		author: 'Helen Rowland',
		image: '/img/cover4.jpg'
	}
];
function U(t) {
	let e, a, v, b, y, x, w, k, q;
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
			$(a, 'class', 'svelte-1hfc72k'),
				$(y, 'class', 'author svelte-1hfc72k'),
				$(e, 'class', 'mySlides svelte-1hfc72k'),
				m(e, 'background-image', 'url(' + t[2] + ')');
		},
		m(t, n) {
			f(t, e, n), h(e, a), h(a, v), h(e, b), h(e, y), h(y, x), h(y, w), (q = !0);
		},
		p(t, [a]) {
			(!q || 1 & a) && g(v, t[0]),
				(!q || 2 & a) && g(w, t[1]),
				(!q || 4 & a) && m(e, 'background-image', 'url(' + t[2] + ')');
		},
		i(t) {
			q ||
				(p(() => {
					k || (k = d(e, H, {}, !0)), k.run(1);
				}),
				(q = !0));
		},
		o(t) {
			k || (k = d(e, H, {}, !1)), k.run(0), (q = !1);
		},
		d(t) {
			t && l(e), t && k && k.end();
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
class F extends t {
	constructor(t) {
		super(), e(this, t, z, U, a, { quote: 0, author: 1, image: 2 });
	}
}
function J(t) {
	let e, a, r, s;
	return {
		c() {
			(e = n('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { class: !0, title: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'class', 'dot svelte-1vzan7b'),
				$(e, 'title', (a = `quote by ${t[2]}`)),
				v(e, 'active', t[0] === t[1]),
				v(e, 'not-clickable', t[3]);
		},
		m(a, n) {
			f(a, e, n), r || ((s = b(e, 'click', t[4])), (r = !0));
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
function K(t, e, a) {
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
class W extends t {
	constructor(t) {
		super(), e(this, t, K, J, a, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function X(t) {
	let e, a, r, c, m, g, p;
	return {
		c() {
			(e = n('div')), (a = n('label')), (r = n('input')), (c = s()), (m = n('span')), this.h();
		},
		l(t) {
			e = o(t, 'DIV', { class: !0, id: !0 });
			var n = i(e);
			a = o(n, 'LABEL', { class: !0 });
			var s = i(a);
			(r = o(s, 'INPUT', { type: !0, class: !0 })),
				(c = u(s)),
				(m = o(s, 'SPAN', { class: !0 })),
				i(m).forEach(l),
				s.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			$(r, 'type', 'checkbox'),
				$(r, 'class', 'svelte-fvt8ch'),
				$(m, 'class', 'slider round svelte-fvt8ch'),
				$(a, 'class', 'switch svelte-fvt8ch'),
				$(e, 'class', 'switch-cont svelte-fvt8ch'),
				$(e, 'id', 'auto-play-cont');
		},
		m(n, s) {
			f(n, e, s),
				h(e, a),
				h(a, r),
				(r.checked = t[0]),
				h(a, c),
				h(a, m),
				g || ((p = [b(r, 'change', t[2]), b(r, 'change', t[1])]), (g = !0));
		},
		p(t, [e]) {
			1 & e && (r.checked = t[0]);
		},
		i: y,
		o: y,
		d(t) {
			t && l(e), (g = !1), w(p);
		}
	};
}
function Y(t, e, a) {
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
class Z extends t {
	constructor(t) {
		super(), e(this, t, Y, X, a, { switchOn: 0 });
	}
}
function _(t, e, a) {
	const n = t.slice();
	return (n[5] = e[a]), (n[13] = a), n;
}
function tt(t) {
	let e, a;
	return (
		(e = new F({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
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
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function et(t) {
	let e, a;
	return (
		(e = new W({
			props: { counter: t[13], quoteIndex: t[0], autoPlaying: t[2], attribution: t[5].author }
		})),
		e.$on('click', function () {
			return t[10](t[13]);
		}),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
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
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function at(t) {
	let e,
		m,
		g,
		p,
		d,
		x,
		A,
		O,
		N,
		B,
		C,
		H,
		G,
		Q,
		U,
		z = t[5],
		F = tt(t),
		J = R,
		K = [];
	for (let a = 0; a < J.length; a += 1) K[a] = et(_(t, J, a));
	const W = (t) =>
		P(K[t], 1, 1, () => {
			K[t] = null;
		});
	function X(e) {
		t[11](e);
	}
	let Y = {};
	return (
		void 0 !== t[1] && (Y.switchOn = t[1]),
		(C = new Z({ props: Y })),
		V.push(() => D(C, 'switchOn', X)),
		C.$on('change', t[8]),
		{
			c() {
				(e = n('div')),
					F.c(),
					(m = s()),
					(g = n('span')),
					(p = r('❮')),
					(d = s()),
					(x = n('span')),
					(A = r('❯')),
					(O = s()),
					(N = n('div'));
				for (let t = 0; t < K.length; t += 1) K[t].c();
				(B = s()), k(C.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { class: !0 });
				var a = i(e);
				F.l(a), (m = u(a)), (g = o(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = i(g);
				(p = c(n, '❮')),
					n.forEach(l),
					(d = u(a)),
					(x = o(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var r = i(x);
				(A = c(r, '❯')), r.forEach(l), (O = u(a)), (N = o(a, 'DIV', { class: !0 }));
				var s = i(N);
				for (let e = 0; e < K.length; e += 1) K[e].l(s);
				(B = u(s)), q(C.$$.fragment, s), s.forEach(l), a.forEach(l), this.h();
			},
			h() {
				$(g, 'href', '#prev'),
					$(g, 'class', 'prev svelte-18vbar9'),
					$(g, 'title', 'previous quote'),
					v(g, 'not-clickable', t[2]),
					$(x, 'href', '#next'),
					$(x, 'class', 'next svelte-18vbar9'),
					$(x, 'title', 'next quote'),
					v(x, 'not-clickable', t[2]),
					$(N, 'class', 'dot-container svelte-18vbar9'),
					$(e, 'class', 'slideshow-container svelte-18vbar9');
			},
			m(a, n) {
				f(a, e, n),
					F.m(e, null),
					h(e, m),
					h(e, g),
					h(g, p),
					h(e, d),
					h(e, x),
					h(x, A),
					h(e, O),
					h(e, N);
				for (let t = 0; t < K.length; t += 1) K[t].m(N, null);
				h(N, B),
					E(C, N, null),
					(G = !0),
					Q || ((U = [b(g, 'click', t[7]), b(x, 'click', t[6])]), (Q = !0));
			},
			p(t, [n]) {
				if (
					(32 & n && a(z, (z = t[5]))
						? (S(), P(F, 1, 1, y), L(), (F = tt(t)), F.c(), I(F), F.m(e, m))
						: F.p(t, n),
					4 & n && v(g, 'not-clickable', t[2]),
					4 & n && v(x, 'not-clickable', t[2]),
					5 & n)
				) {
					let e;
					for (J = R, e = 0; e < J.length; e += 1) {
						const a = _(t, J, e);
						K[e]
							? (K[e].p(a, n), I(K[e], 1))
							: ((K[e] = et(a)), K[e].c(), I(K[e], 1), K[e].m(N, B));
					}
					for (S(), e = J.length; e < K.length; e += 1) W(e);
					L();
				}
				const r = {};
				!H && 2 & n && ((H = !0), (r.switchOn = t[1]), M(() => (H = !1))), C.$set(r);
			},
			i(t) {
				if (!G) {
					I(F);
					for (let t = 0; t < J.length; t += 1) I(K[t]);
					I(C.$$.fragment, t), (G = !0);
				}
			},
			o(t) {
				P(F), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) P(K[e]);
				P(C.$$.fragment, t), (G = !1);
			},
			d(t) {
				t && l(e), F.d(t), T(K, t), j(C), (Q = !1), w(U);
			}
		}
	);
}
function nt(t, e, a) {
	let n,
		r,
		s,
		o = 0;
	const i = () => {
		a(0, o === R.length - 1 ? (o = 0) : (o += 1));
	};
	let c,
		l = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(o),
				1 & t.$$.dirty && a(5, (n = R[o].quote)),
				1 & t.$$.dirty && a(3, (r = R[o].author)),
				1 & t.$$.dirty && a(4, (s = R[o].image)),
				1 & t.$$.dirty && console.log(o),
				512 & t.$$.dirty && console.log(c);
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
				a(0, 0 === o ? (o = R.length - 1) : (o -= 1));
			},
			() => {
				l ? (a(9, (c = setInterval(i, 5e3))), a(2, (u = !0))) : (clearInterval(c), a(2, (u = !1)));
			},
			c,
			(t) => a(0, (o = t)),
			function (t) {
				(l = t), a(1, l);
			}
		]
	);
}
class rt extends t {
	constructor(t) {
		super(), e(this, t, nt, at, a, {});
	}
}
function st(t, e, a) {
	const n = t.slice();
	return (n[0] = e[a].url), (n[1] = e[a].name), n;
}
function ot(t) {
	let e, a;
	return (
		(e = new A({ props: { variante: 4, url: t[0], text: t[1] } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p: y,
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function it(t) {
	let e,
		a,
		r = Q,
		s = [];
	for (let n = 0; n < r.length; n += 1) s[n] = ot(st(t, r, n));
	const c = (t) =>
		P(s[t], 1, 1, () => {
			s[t] = null;
		});
	return {
		c() {
			e = n('nav');
			for (let t = 0; t < s.length; t += 1) s[t].c();
			this.h();
		},
		l(t) {
			e = o(t, 'NAV', { class: !0 });
			var a = i(e);
			for (let e = 0; e < s.length; e += 1) s[e].l(a);
			a.forEach(l), this.h();
		},
		h() {
			$(e, 'class', 'svelte-1nvj0dk');
		},
		m(t, n) {
			f(t, e, n);
			for (let a = 0; a < s.length; a += 1) s[a].m(e, null);
			a = !0;
		},
		p(t, [a]) {
			if (0 & a) {
				let n;
				for (r = Q, n = 0; n < r.length; n += 1) {
					const o = st(t, r, n);
					s[n]
						? (s[n].p(o, a), I(s[n], 1))
						: ((s[n] = ot(o)), s[n].c(), I(s[n], 1), s[n].m(e, null));
				}
				for (S(), n = r.length; n < s.length; n += 1) c(n);
				L();
			}
		},
		i(t) {
			if (!a) {
				for (let t = 0; t < r.length; t += 1) I(s[t]);
				a = !0;
			}
		},
		o(t) {
			s = s.filter(Boolean);
			for (let e = 0; e < s.length; e += 1) P(s[e]);
			a = !1;
		},
		d(t) {
			t && l(e), T(s, t);
		}
	};
}
class ct extends t {
	constructor(t) {
		super(), e(this, t, null, it, a, {});
	}
}
function lt(t) {
	let e, a;
	return (
		(e = new O({
			props: { title: N[0].title, subtitle: N[0].subtitle, text: N[0].text, img: N[0].img }
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p: y,
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function ut(t) {
	let e, a;
	return (
		(e = new ct({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function $t(t) {
	let e, a;
	return (
		(e = new rt({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function mt(t) {
	let e, a;
	return (
		(e = new G({ props: { variante: 1, src: './img/02234-14.jpg', alt: 'Presentation' } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p: y,
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function ft(t) {
	let e, a, m, g, p, d;
	return {
		c() {
			(e = n('div')),
				(a = n('h2')),
				(m = r('Mas info')),
				(g = s()),
				(p = n('p')),
				(d = r(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
				)),
				this.h();
		},
		l(t) {
			e = o(t, 'DIV', { slot: !0 });
			var n = i(e);
			a = o(n, 'H2', {});
			var r = i(a);
			(m = c(r, 'Mas info')), r.forEach(l), (g = u(n)), (p = o(n, 'P', {}));
			var s = i(p);
			(d = c(
				s,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
			)),
				s.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, n) {
			f(t, e, n), h(e, a), h(a, m), h(e, g), h(e, p), h(p, d);
		},
		d(t) {
			t && l(e);
		}
	};
}
function ht(t) {
	let e;
	return {
		c() {
			(e = n('div')), this.h();
		},
		l(t) {
			(e = o(t, 'DIV', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea1');
		},
		m(t, a) {
			f(t, e, a);
		},
		d(t) {
			t && l(e);
		}
	};
}
function gt(t) {
	let e, a;
	return (
		(e = new B({
			props: {
				variante: 5,
				$$slots: { subarea1: [ht], subarea2: [ft], default: [mt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function pt(t) {
	let e, a;
	return (
		(e = new G({ props: { variante: 4, src: './img/cover4.jpg', alt: 'Presentation' } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p: y,
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function dt(t) {
	let e, a, s;
	return {
		c() {
			(e = n('div')),
				(a = n('p')),
				(s = r(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
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
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.'
			)),
				r.forEach(l),
				n.forEach(l),
				this.h();
		},
		h() {
			$(e, 'slot', 'subarea1');
		},
		m(t, n) {
			f(t, e, n), h(e, a), h(a, s);
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
			(e = n('div')), this.h();
		},
		l(t) {
			(e = o(t, 'DIV', { slot: !0 })), i(e).forEach(l), this.h();
		},
		h() {
			$(e, 'slot', 'subarea2');
		},
		m(t, a) {
			f(t, e, a);
		},
		d(t) {
			t && l(e);
		}
	};
}
function bt(t) {
	let e, a;
	return (
		(e = new B({
			props: {
				variante: 4,
				$$slots: { subarea2: [vt], subarea1: [dt], default: [pt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, n) {
				E(e, t, n), (a = !0);
			},
			p(t, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function yt(t) {
	let e, a, n, r, o, i, c, $, m, h;
	return (
		(e = new C({
			props: { id: 'cover', variante: 3, $$slots: { default: [lt] }, $$scope: { ctx: t } }
		})),
		(n = new C({
			props: { id: 'navsecondary', variante: 3, $$slots: { default: [ut] }, $$scope: { ctx: t } }
		})),
		(o = new C({
			props: { id: 'quoterotator', variante: 3, $$slots: { default: [$t] }, $$scope: { ctx: t } }
		})),
		(c = new C({ props: { variante: 3, $$slots: { default: [gt] }, $$scope: { ctx: t } } })),
		(m = new C({ props: { variante: 3, $$slots: { default: [bt] }, $$scope: { ctx: t } } })),
		{
			c() {
				k(e.$$.fragment),
					(a = s()),
					k(n.$$.fragment),
					(r = s()),
					k(o.$$.fragment),
					(i = s()),
					k(c.$$.fragment),
					($ = s()),
					k(m.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t),
					(a = u(t)),
					q(n.$$.fragment, t),
					(r = u(t)),
					q(o.$$.fragment, t),
					(i = u(t)),
					q(c.$$.fragment, t),
					($ = u(t)),
					q(m.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s),
					f(t, a, s),
					E(n, t, s),
					f(t, r, s),
					E(o, t, s),
					f(t, i, s),
					E(c, t, s),
					f(t, $, s),
					E(m, t, s),
					(h = !0);
			},
			p(t, [a]) {
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: t }), e.$set(r);
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: t }), n.$set(s);
				const i = {};
				1 & a && (i.$$scope = { dirty: a, ctx: t }), o.$set(i);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: t }), c.$set(l);
				const u = {};
				1 & a && (u.$$scope = { dirty: a, ctx: t }), m.$set(u);
			},
			i(t) {
				h ||
					(I(e.$$.fragment, t),
					I(n.$$.fragment, t),
					I(o.$$.fragment, t),
					I(c.$$.fragment, t),
					I(m.$$.fragment, t),
					(h = !0));
			},
			o(t) {
				P(e.$$.fragment, t),
					P(n.$$.fragment, t),
					P(o.$$.fragment, t),
					P(c.$$.fragment, t),
					P(m.$$.fragment, t),
					(h = !1);
			},
			d(t) {
				j(e, t), t && l(a), j(n, t), t && l(r), j(o, t), t && l(i), j(c, t), t && l($), j(m, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, yt, a, {});
	}
}
