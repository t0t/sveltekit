import {
	S as t,
	i as e,
	s as n,
	e as s,
	t as a,
	j as r,
	c as o,
	a as l,
	b as c,
	d as i,
	l as u,
	o as h,
	L as $,
	f as g,
	g as f,
	h as m,
	M as d,
	N as p,
	F as v,
	G as y,
	n as x,
	O as q,
	P as b,
	p as k,
	q as w,
	r as E,
	w as I,
	x as P,
	y as S,
	Q as j,
	R as B,
	C as D,
	D as O,
	T,
	K as L,
	J as A,
	H as M
} from '../chunks/index-83f33906.js';
import { f as N, B as V } from '../chunks/Button-ee442612.js';
import { S as H } from '../chunks/Section-1b31e13c.js';
import '../chunks/index-78b22dae.js';
const C = [
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
function G(t) {
	let e, n, v, y, x, q, b, k, w;
	return {
		c() {
			(e = s('div')),
				(n = s('q')),
				(v = a(t[0])),
				(y = r()),
				(x = s('p')),
				(q = a('—')),
				(b = a(t[1])),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0, style: !0 });
			var a = l(e);
			n = o(a, 'Q', { class: !0 });
			var r = l(n);
			(v = c(r, t[0])), r.forEach(i), (y = u(a)), (x = o(a, 'P', { class: !0 }));
			var h = l(x);
			(q = c(h, '—')), (b = c(h, t[1])), h.forEach(i), a.forEach(i), this.h();
		},
		h() {
			h(n, 'class', 'svelte-1pfkgpk'),
				h(x, 'class', 'author svelte-1pfkgpk'),
				h(e, 'class', 'mySlides svelte-1pfkgpk'),
				$(e, 'background-image', 'url(' + t[2] + ')');
		},
		m(t, s) {
			g(t, e, s), f(e, n), f(n, v), f(e, y), f(e, x), f(x, q), f(x, b), (w = !0);
		},
		p(t, [n]) {
			(!w || 1 & n) && m(v, t[0]),
				(!w || 2 & n) && m(b, t[1]),
				(!w || 4 & n) && $(e, 'background-image', 'url(' + t[2] + ')');
		},
		i(t) {
			w ||
				(d(() => {
					k || (k = p(e, N, {}, !0)), k.run(1);
				}),
				(w = !0));
		},
		o(t) {
			k || (k = p(e, N, {}, !1)), k.run(0), (w = !1);
		},
		d(t) {
			t && i(e), t && k && k.end();
		}
	};
}
function Q(t, e, n) {
	let { quote: s } = e,
		{ author: a } = e,
		{ image: r } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && n(0, (s = t.quote)),
				'author' in t && n(1, (a = t.author)),
				'image' in t && n(2, (r = t.image));
		}),
		[s, a, r]
	);
}
class R extends t {
	constructor(t) {
		super(), e(this, t, Q, G, n, { quote: 0, author: 1, image: 2 });
	}
}
function _(t) {
	let e, n, a, r;
	return {
		c() {
			(e = s('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { class: !0, title: !0 })), l(e).forEach(i), this.h();
		},
		h() {
			h(e, 'class', 'dot svelte-1bg8uoz'),
				h(e, 'title', (n = `quote by ${t[2]}`)),
				v(e, 'active', t[0] === t[1]),
				v(e, 'not-clickable', t[3]);
		},
		m(n, s) {
			g(n, e, s), a || ((r = y(e, 'click', t[4])), (a = !0));
		},
		p(t, [s]) {
			4 & s && n !== (n = `quote by ${t[2]}`) && h(e, 'title', n),
				3 & s && v(e, 'active', t[0] === t[1]),
				8 & s && v(e, 'not-clickable', t[3]);
		},
		i: x,
		o: x,
		d(t) {
			t && i(e), (a = !1), r();
		}
	};
}
function z(t, e, n) {
	let { quoteIndex: s } = e,
		{ counter: a } = e,
		{ attribution: r } = e,
		{ autoPlaying: o } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && n(0, (s = t.quoteIndex)),
				'counter' in t && n(1, (a = t.counter)),
				'attribution' in t && n(2, (r = t.attribution)),
				'autoPlaying' in t && n(3, (o = t.autoPlaying));
		}),
		[
			s,
			a,
			r,
			o,
			function (e) {
				q(t, e);
			}
		]
	);
}
class F extends t {
	constructor(t) {
		super(), e(this, t, z, _, n, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function J(t) {
	let e, n, a, c, $, m, d;
	return {
		c() {
			(e = s('section')), (n = s('label')), (a = s('input')), (c = r()), ($ = s('span')), this.h();
		},
		l(t) {
			e = o(t, 'SECTION', { id: !0, class: !0 });
			var s = l(e);
			n = o(s, 'LABEL', { class: !0 });
			var r = l(n);
			(a = o(r, 'INPUT', { type: !0, class: !0 })),
				(c = u(r)),
				($ = o(r, 'SPAN', { class: !0 })),
				l($).forEach(i),
				r.forEach(i),
				s.forEach(i),
				this.h();
		},
		h() {
			h(a, 'type', 'checkbox'),
				h(a, 'class', 'svelte-qu5u5u'),
				h($, 'class', 'slider round svelte-qu5u5u'),
				h(n, 'class', 'switch svelte-qu5u5u'),
				h(e, 'id', 'auto-play-cont'),
				h(e, 'class', 'svelte-qu5u5u');
		},
		m(s, r) {
			g(s, e, r),
				f(e, n),
				f(n, a),
				(a.checked = t[0]),
				f(n, c),
				f(n, $),
				m || ((d = [y(a, 'change', t[2]), y(a, 'change', t[1])]), (m = !0));
		},
		p(t, [e]) {
			1 & e && (a.checked = t[0]);
		},
		i: x,
		o: x,
		d(t) {
			t && i(e), (m = !1), b(d);
		}
	};
}
function K(t, e, n) {
	let { switchOn: s } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && n(0, (s = t.switchOn));
		}),
		[
			s,
			function (e) {
				q(t, e);
			},
			function () {
				(s = this.checked), n(0, s);
			}
		]
	);
}
class U extends t {
	constructor(t) {
		super(), e(this, t, K, J, n, { switchOn: 0 });
	}
}
function W(t, e, n) {
	const s = t.slice();
	return (s[5] = e[n]), (s[13] = n), s;
}
function X(t) {
	let e, n;
	return (
		(e = new R({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				w(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				32 & n && (s.quote = t[5]),
					8 & n && (s.author = t[3]),
					16 & n && (s.image = t[4]),
					e.$set(s);
			},
			i(t) {
				n || (I(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function Y(t) {
	let e, n;
	return (
		(e = new F({
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
				w(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p(n, s) {
				t = n;
				const a = {};
				1 & s && (a.quoteIndex = t[0]), 4 & s && (a.autoPlaying = t[2]), e.$set(a);
			},
			i(t) {
				n || (I(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function Z(t) {
	let e,
		$,
		m,
		d,
		p,
		q,
		A,
		M,
		N,
		V,
		H,
		G,
		Q,
		R,
		_,
		z = t[5],
		F = X(t),
		J = C,
		K = [];
	for (let n = 0; n < J.length; n += 1) K[n] = Y(W(t, J, n));
	const Z = (t) =>
		P(K[t], 1, 1, () => {
			K[t] = null;
		});
	function tt(e) {
		t[11](e);
	}
	let et = {};
	return (
		void 0 !== t[1] && (et.switchOn = t[1]),
		(H = new U({ props: et })),
		j.push(() => B(H, 'switchOn', tt)),
		H.$on('change', t[8]),
		{
			c() {
				(e = s('div')),
					F.c(),
					($ = r()),
					(m = s('span')),
					(d = a('❮')),
					(p = r()),
					(q = s('span')),
					(A = a('❯')),
					(M = r()),
					(N = s('div'));
				for (let t = 0; t < K.length; t += 1) K[t].c();
				(V = r()), k(H.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { class: !0 });
				var n = l(e);
				F.l(n), ($ = u(n)), (m = o(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = l(m);
				(d = c(s, '❮')),
					s.forEach(i),
					(p = u(n)),
					(q = o(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var a = l(q);
				(A = c(a, '❯')), a.forEach(i), n.forEach(i), (M = u(t)), (N = o(t, 'DIV', { class: !0 }));
				var r = l(N);
				for (let e = 0; e < K.length; e += 1) K[e].l(r);
				(V = u(r)), w(H.$$.fragment, r), r.forEach(i), this.h();
			},
			h() {
				h(m, 'href', '#prev'),
					h(m, 'class', 'prev svelte-5g8lv0'),
					h(m, 'title', 'previous quote'),
					v(m, 'not-clickable', t[2]),
					h(q, 'href', '#next'),
					h(q, 'class', 'next svelte-5g8lv0'),
					h(q, 'title', 'next quote'),
					v(q, 'not-clickable', t[2]),
					h(e, 'class', 'slideshow-container svelte-5g8lv0'),
					h(N, 'class', 'dot-container svelte-5g8lv0');
			},
			m(n, s) {
				g(n, e, s),
					F.m(e, null),
					f(e, $),
					f(e, m),
					f(m, d),
					f(e, p),
					f(e, q),
					f(q, A),
					g(n, M, s),
					g(n, N, s);
				for (let t = 0; t < K.length; t += 1) K[t].m(N, null);
				f(N, V),
					E(H, N, null),
					(Q = !0),
					R || ((_ = [y(m, 'click', t[7]), y(q, 'click', t[6])]), (R = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && n(z, (z = t[5]))
						? (D(), P(F, 1, 1, x), O(), (F = X(t)), F.c(), I(F), F.m(e, $))
						: F.p(t, s),
					4 & s && v(m, 'not-clickable', t[2]),
					4 & s && v(q, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (J = C, e = 0; e < J.length; e += 1) {
						const n = W(t, J, e);
						K[e] ? (K[e].p(n, s), I(K[e], 1)) : ((K[e] = Y(n)), K[e].c(), I(K[e], 1), K[e].m(N, V));
					}
					for (D(), e = J.length; e < K.length; e += 1) Z(e);
					O();
				}
				const a = {};
				!G && 2 & s && ((G = !0), (a.switchOn = t[1]), T(() => (G = !1))), H.$set(a);
			},
			i(t) {
				if (!Q) {
					I(F);
					for (let t = 0; t < J.length; t += 1) I(K[t]);
					I(H.$$.fragment, t), (Q = !0);
				}
			},
			o(t) {
				P(F), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) P(K[e]);
				P(H.$$.fragment, t), (Q = !1);
			},
			d(t) {
				t && i(e), F.d(t), t && i(M), t && i(N), L(K, t), S(H), (R = !1), b(_);
			}
		}
	);
}
function tt(t, e, n) {
	let s,
		a,
		r,
		o = 0;
	const l = () => {
		n(0, o === C.length - 1 ? (o = 0) : (o += 1));
	};
	let c,
		i = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(o),
				1 & t.$$.dirty && n(5, (s = C[o].quote)),
				1 & t.$$.dirty && n(3, (a = C[o].author)),
				1 & t.$$.dirty && n(4, (r = C[o].image)),
				1 & t.$$.dirty && console.log(o),
				512 & t.$$.dirty && console.log(c);
		}),
		[
			o,
			i,
			u,
			a,
			r,
			s,
			l,
			() => {
				n(0, 0 === o ? (o = C.length - 1) : (o -= 1));
			},
			() => {
				i ? (n(9, (c = setInterval(l, 5e3))), n(2, (u = !0))) : (clearInterval(c), n(2, (u = !1)));
			},
			c,
			(t) => n(0, (o = t)),
			function (t) {
				(i = t), n(1, i);
			}
		]
	);
}
class et extends t {
	constructor(t) {
		super(), e(this, t, tt, Z, n, {});
	}
}
const nt = (t) => ({}),
	st = (t) => ({}),
	at = (t) => ({}),
	rt = (t) => ({}),
	ot = (t) => ({}),
	lt = (t) => ({});
function ct(t) {
	let e;
	const n = t[6].hasimage,
		a = M(n, t, t[5], lt),
		r =
			a ||
			(function (t) {
				let e, n;
				return {
					c() {
						(e = s('img')), this.h();
					},
					l(t) {
						(e = o(t, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
					},
					h() {
						e.src !== (n = t[2]) && h(e, 'src', n),
							h(e, 'alt', 'Imagen'),
							h(e, 'class', 'svelte-nnqgyc');
					},
					m(t, n) {
						g(t, e, n);
					},
					p(t, s) {
						4 & s && e.src !== (n = t[2]) && h(e, 'src', n);
					},
					d(t) {
						t && i(e);
					}
				};
			})(t);
	return {
		c() {
			r && r.c();
		},
		l(t) {
			r && r.l(t);
		},
		m(t, n) {
			r && r.m(t, n), (e = !0);
		},
		p(t, e) {
			a ? a.p && 32 & e && A(a, n, t, t[5], e, ot, lt) : r && r.p && 4 & e && r.p(t, e);
		},
		i(t) {
			e || (I(r, t), (e = !0));
		},
		o(t) {
			P(r, t), (e = !1);
		},
		d(t) {
			r && r.d(t);
		}
	};
}
function it(t) {
	let e,
		n,
		$,
		d,
		p,
		v,
		y,
		x,
		q,
		b,
		k,
		w,
		E,
		S = t[2] && ct(t);
	const j = t[6].hasvideo,
		B = M(j, t, t[5], rt),
		T = t[6].hasSVG,
		L = M(T, t, t[5], st),
		N = t[6].default,
		V = M(N, t, t[5], null);
	return {
		c() {
			(e = s('div')),
				(n = s('div')),
				S && S.c(),
				($ = r()),
				B && B.c(),
				(d = r()),
				L && L.c(),
				(p = r()),
				(v = s('div')),
				(y = s('h2')),
				(x = a(t[0])),
				(q = r()),
				(b = s('p')),
				(k = r()),
				V && V.c(),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0 });
			var a = l(e);
			n = o(a, 'DIV', { class: !0 });
			var r = l(n);
			S && S.l(r),
				($ = u(r)),
				B && B.l(r),
				(d = u(r)),
				L && L.l(r),
				r.forEach(i),
				(p = u(a)),
				(v = o(a, 'DIV', { class: !0 }));
			var h = l(v);
			y = o(h, 'H2', { class: !0 });
			var g = l(y);
			(x = c(g, t[0])),
				g.forEach(i),
				(q = u(h)),
				(b = o(h, 'P', { class: !0 })),
				l(b).forEach(i),
				(k = u(h)),
				V && V.l(h),
				h.forEach(i),
				a.forEach(i),
				this.h();
		},
		h() {
			h(n, 'class', 'BannerMedia svelte-nnqgyc'),
				h(y, 'class', 'svelte-nnqgyc'),
				h(b, 'class', 'svelte-nnqgyc'),
				h(v, 'class', 'BannerText svelte-nnqgyc'),
				h(e, 'class', (w = 'Banner ' + t[4][t[3]] + ' svelte-nnqgyc'));
		},
		m(s, a) {
			g(s, e, a),
				f(e, n),
				S && S.m(n, null),
				f(n, $),
				B && B.m(n, null),
				f(n, d),
				L && L.m(n, null),
				f(e, p),
				f(e, v),
				f(v, y),
				f(y, x),
				f(v, q),
				f(v, b),
				(b.innerHTML = t[1]),
				f(v, k),
				V && V.m(v, null),
				(E = !0);
		},
		p(t, [s]) {
			t[2]
				? S
					? (S.p(t, s), 4 & s && I(S, 1))
					: ((S = ct(t)), S.c(), I(S, 1), S.m(n, $))
				: S &&
				  (D(),
				  P(S, 1, 1, () => {
						S = null;
				  }),
				  O()),
				B && B.p && 32 & s && A(B, j, t, t[5], s, at, rt),
				L && L.p && 32 & s && A(L, T, t, t[5], s, nt, st),
				(!E || 1 & s) && m(x, t[0]),
				(!E || 2 & s) && (b.innerHTML = t[1]),
				V && V.p && 32 & s && A(V, N, t, t[5], s, null, null),
				(!E || (8 & s && w !== (w = 'Banner ' + t[4][t[3]] + ' svelte-nnqgyc'))) &&
					h(e, 'class', w);
		},
		i(t) {
			E || (I(S), I(B, t), I(L, t), I(V, t), (E = !0));
		},
		o(t) {
			P(S), P(B, t), P(L, t), P(V, t), (E = !1);
		},
		d(t) {
			t && i(e), S && S.d(), B && B.d(t), L && L.d(t), V && V.d(t);
		}
	};
}
function ut(t, e, n) {
	let { $$slots: s = {}, $$scope: a } = e,
		{ title: r = '' } = e,
		{ text: o = '' } = e,
		{ img: l = '' } = e,
		{ variante: c = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && n(0, (r = t.title)),
				'text' in t && n(1, (o = t.text)),
				'img' in t && n(2, (l = t.img)),
				'variante' in t && n(3, (c = t.variante)),
				'$$scope' in t && n(5, (a = t.$$scope));
		}),
		[r, o, l, c, ['variante_0', 'variante_1'], a, s]
	);
}
class ht extends t {
	constructor(t) {
		super(), e(this, t, ut, it, n, { title: 0, text: 1, img: 2, variante: 3 });
	}
}
function $t(t) {
	let e, n;
	return (
		(e = new V({ props: { variante: 1, text: 'cta text', url: '#' } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				w(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p: x,
			i(t) {
				n || (I(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function gt(t) {
	let e, n;
	return (
		(e = new ht({
			props: {
				variante: 1,
				title: 'CTA Banner',
				text: 'Labore est temporibus odit, exercitationem et magnam',
				img: './img/bg1.jpg',
				$$slots: { default: [$t] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				w(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (I(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
class ft extends t {
	constructor(t) {
		super(), e(this, t, null, gt, n, {});
	}
}
function mt(t) {
	let e, n;
	return (
		(e = new et({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				w(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			i(t) {
				n || (I(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function dt(t) {
	let e, n;
	return (
		(e = new ft({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				w(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			i(t) {
				n || (I(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function pt(t) {
	let e, n, s, a;
	return (
		(e = new H({
			props: { id: 'quoterotator', variante: 1, $$slots: { default: [mt] }, $$scope: { ctx: t } }
		})),
		(s = new H({
			props: { id: 'ctabanner', variante: 1, $$slots: { default: [dt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				k(e.$$.fragment), (n = r()), k(s.$$.fragment);
			},
			l(t) {
				w(e.$$.fragment, t), (n = u(t)), w(s.$$.fragment, t);
			},
			m(t, r) {
				E(e, t, r), g(t, n, r), E(s, t, r), (a = !0);
			},
			p(t, [n]) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), s.$set(r);
			},
			i(t) {
				a || (I(e.$$.fragment, t), I(s.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), P(s.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t), t && i(n), S(s, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, pt, n, {});
	}
}
