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
	o as $,
	P as h,
	f,
	g,
	h as m,
	Q as d,
	R as p,
	G as v,
	H as x,
	n as y,
	F as b,
	K as w,
	p as k,
	q,
	r as E,
	w as j,
	x as I,
	y as P,
	T as S,
	U as A,
	C as D,
	D as O,
	V as T,
	J as V,
	O as B,
	M as N
} from '../chunks/index-d91e1ed8.js';
import { B as L, C as M, c as C } from '../chunks/Cover-4b9a87b3.js';
import { S as H } from '../chunks/Section-62f6895b.js';
import { f as G } from '../chunks/index-65311448.js';
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
	let e, n, v, x, y, b, w, k, q;
	return {
		c() {
			(e = s('div')),
				(n = s('q')),
				(v = a(t[0])),
				(x = r()),
				(y = s('p')),
				(b = a('—')),
				(w = a(t[1])),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0, style: !0 });
			var a = l(e);
			n = o(a, 'Q', { class: !0 });
			var r = l(n);
			(v = c(r, t[0])), r.forEach(i), (x = u(a)), (y = o(a, 'P', { class: !0 }));
			var $ = l(y);
			(b = c($, '—')), (w = c($, t[1])), $.forEach(i), a.forEach(i), this.h();
		},
		h() {
			$(n, 'class', 'svelte-1m3rt2t'),
				$(y, 'class', 'author svelte-1m3rt2t'),
				$(e, 'class', 'mySlides svelte-1m3rt2t'),
				h(e, 'background-image', 'url(' + t[2] + ')');
		},
		m(t, s) {
			f(t, e, s), g(e, n), g(n, v), g(e, x), g(e, y), g(y, b), g(y, w), (q = !0);
		},
		p(t, [n]) {
			(!q || 1 & n) && m(v, t[0]),
				(!q || 2 & n) && m(w, t[1]),
				(!q || 4 & n) && h(e, 'background-image', 'url(' + t[2] + ')');
		},
		i(t) {
			q ||
				(d(() => {
					k || (k = p(e, G, {}, !0)), k.run(1);
				}),
				(q = !0));
		},
		o(t) {
			k || (k = p(e, G, {}, !1)), k.run(0), (q = !1);
		},
		d(t) {
			t && i(e), t && k && k.end();
		}
	};
}
function _(t, e, n) {
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
class F extends t {
	constructor(t) {
		super(), e(this, t, _, U, n, { quote: 0, author: 1, image: 2 });
	}
}
function J(t) {
	let e, n, a, r;
	return {
		c() {
			(e = s('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { class: !0, title: !0 })), l(e).forEach(i), this.h();
		},
		h() {
			$(e, 'class', 'dot svelte-1noma18'),
				$(e, 'title', (n = `quote by ${t[2]}`)),
				v(e, 'active', t[0] === t[1]),
				v(e, 'not-clickable', t[3]);
		},
		m(n, s) {
			f(n, e, s), a || ((r = x(e, 'click', t[4])), (a = !0));
		},
		p(t, [s]) {
			4 & s && n !== (n = `quote by ${t[2]}`) && $(e, 'title', n),
				3 & s && v(e, 'active', t[0] === t[1]),
				8 & s && v(e, 'not-clickable', t[3]);
		},
		i: y,
		o: y,
		d(t) {
			t && i(e), (a = !1), r();
		}
	};
}
function K(t, e, n) {
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
				b(t, e);
			}
		]
	);
}
class W extends t {
	constructor(t) {
		super(), e(this, t, K, J, n, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function z(t) {
	let e, n, a, c, h, m, d;
	return {
		c() {
			(e = s('section')), (n = s('label')), (a = s('input')), (c = r()), (h = s('span')), this.h();
		},
		l(t) {
			e = o(t, 'SECTION', { id: !0, class: !0 });
			var s = l(e);
			n = o(s, 'LABEL', { class: !0 });
			var r = l(n);
			(a = o(r, 'INPUT', { type: !0, class: !0 })),
				(c = u(r)),
				(h = o(r, 'SPAN', { class: !0 })),
				l(h).forEach(i),
				r.forEach(i),
				s.forEach(i),
				this.h();
		},
		h() {
			$(a, 'type', 'checkbox'),
				$(a, 'class', 'svelte-bcuo27'),
				$(h, 'class', 'slider round svelte-bcuo27'),
				$(n, 'class', 'switch svelte-bcuo27'),
				$(e, 'id', 'auto-play-cont'),
				$(e, 'class', 'svelte-bcuo27');
		},
		m(s, r) {
			f(s, e, r),
				g(e, n),
				g(n, a),
				(a.checked = t[0]),
				g(n, c),
				g(n, h),
				m || ((d = [x(a, 'change', t[2]), x(a, 'change', t[1])]), (m = !0));
		},
		p(t, [e]) {
			1 & e && (a.checked = t[0]);
		},
		i: y,
		o: y,
		d(t) {
			t && i(e), (m = !1), w(d);
		}
	};
}
function X(t, e, n) {
	let { switchOn: s } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && n(0, (s = t.switchOn));
		}),
		[
			s,
			function (e) {
				b(t, e);
			},
			function () {
				(s = this.checked), n(0, s);
			}
		]
	);
}
class Y extends t {
	constructor(t) {
		super(), e(this, t, X, z, n, { switchOn: 0 });
	}
}
function Z(t, e, n) {
	const s = t.slice();
	return (s[5] = e[n]), (s[13] = n), s;
}
function tt(t) {
	let e, n;
	return (
		(e = new F({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
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
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function et(t) {
	let e, n;
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
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p(n, s) {
				t = n;
				const a = {};
				1 & s && (a.quoteIndex = t[0]), 4 & s && (a.autoPlaying = t[2]), e.$set(a);
			},
			i(t) {
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function nt(t) {
	let e,
		h,
		m,
		d,
		p,
		b,
		B,
		N,
		L,
		M,
		C,
		H,
		G,
		Q,
		U,
		_ = t[5],
		F = tt(t),
		J = R,
		K = [];
	for (let n = 0; n < J.length; n += 1) K[n] = et(Z(t, J, n));
	const W = (t) =>
		I(K[t], 1, 1, () => {
			K[t] = null;
		});
	function z(e) {
		t[11](e);
	}
	let X = {};
	return (
		void 0 !== t[1] && (X.switchOn = t[1]),
		(C = new Y({ props: X })),
		S.push(() => A(C, 'switchOn', z)),
		C.$on('change', t[8]),
		{
			c() {
				(e = s('div')),
					F.c(),
					(h = r()),
					(m = s('span')),
					(d = a('❮')),
					(p = r()),
					(b = s('span')),
					(B = a('❯')),
					(N = r()),
					(L = s('div'));
				for (let t = 0; t < K.length; t += 1) K[t].c();
				(M = r()), k(C.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { class: !0 });
				var n = l(e);
				F.l(n), (h = u(n)), (m = o(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = l(m);
				(d = c(s, '❮')),
					s.forEach(i),
					(p = u(n)),
					(b = o(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var a = l(b);
				(B = c(a, '❯')), a.forEach(i), n.forEach(i), (N = u(t)), (L = o(t, 'DIV', { class: !0 }));
				var r = l(L);
				for (let e = 0; e < K.length; e += 1) K[e].l(r);
				(M = u(r)), q(C.$$.fragment, r), r.forEach(i), this.h();
			},
			h() {
				$(m, 'href', '#prev'),
					$(m, 'class', 'prev svelte-1igetor'),
					$(m, 'title', 'previous quote'),
					v(m, 'not-clickable', t[2]),
					$(b, 'href', '#next'),
					$(b, 'class', 'next svelte-1igetor'),
					$(b, 'title', 'next quote'),
					v(b, 'not-clickable', t[2]),
					$(e, 'class', 'slideshow-container svelte-1igetor'),
					$(L, 'class', 'dot-container svelte-1igetor');
			},
			m(n, s) {
				f(n, e, s),
					F.m(e, null),
					g(e, h),
					g(e, m),
					g(m, d),
					g(e, p),
					g(e, b),
					g(b, B),
					f(n, N, s),
					f(n, L, s);
				for (let t = 0; t < K.length; t += 1) K[t].m(L, null);
				g(L, M),
					E(C, L, null),
					(G = !0),
					Q || ((U = [x(m, 'click', t[7]), x(b, 'click', t[6])]), (Q = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && n(_, (_ = t[5]))
						? (D(), I(F, 1, 1, y), O(), (F = tt(t)), F.c(), j(F), F.m(e, h))
						: F.p(t, s),
					4 & s && v(m, 'not-clickable', t[2]),
					4 & s && v(b, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (J = R, e = 0; e < J.length; e += 1) {
						const n = Z(t, J, e);
						K[e]
							? (K[e].p(n, s), j(K[e], 1))
							: ((K[e] = et(n)), K[e].c(), j(K[e], 1), K[e].m(L, M));
					}
					for (D(), e = J.length; e < K.length; e += 1) W(e);
					O();
				}
				const a = {};
				!H && 2 & s && ((H = !0), (a.switchOn = t[1]), T(() => (H = !1))), C.$set(a);
			},
			i(t) {
				if (!G) {
					j(F);
					for (let t = 0; t < J.length; t += 1) j(K[t]);
					j(C.$$.fragment, t), (G = !0);
				}
			},
			o(t) {
				I(F), (K = K.filter(Boolean));
				for (let e = 0; e < K.length; e += 1) I(K[e]);
				I(C.$$.fragment, t), (G = !1);
			},
			d(t) {
				t && i(e), F.d(t), t && i(N), t && i(L), V(K, t), P(C), (Q = !1), w(U);
			}
		}
	);
}
function st(t, e, n) {
	let s,
		a,
		r,
		o = 0;
	const l = () => {
		n(0, o === R.length - 1 ? (o = 0) : (o += 1));
	};
	let c,
		i = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(o),
				1 & t.$$.dirty && n(5, (s = R[o].quote)),
				1 & t.$$.dirty && n(3, (a = R[o].author)),
				1 & t.$$.dirty && n(4, (r = R[o].image)),
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
				n(0, 0 === o ? (o = R.length - 1) : (o -= 1));
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
class at extends t {
	constructor(t) {
		super(), e(this, t, st, nt, n, {});
	}
}
const rt = (t) => ({}),
	ot = (t) => ({}),
	lt = (t) => ({}),
	ct = (t) => ({}),
	it = (t) => ({}),
	ut = (t) => ({});
function $t(t) {
	let e;
	const n = t[6].hasimage,
		a = N(n, t, t[5], ut),
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
						e.src !== (n = t[2]) && $(e, 'src', n),
							$(e, 'alt', 'Imagen'),
							$(e, 'class', 'svelte-1rtc8jt');
					},
					m(t, n) {
						f(t, e, n);
					},
					p(t, s) {
						4 & s && e.src !== (n = t[2]) && $(e, 'src', n);
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
			a ? a.p && 32 & e && B(a, n, t, t[5], e, it, ut) : r && r.p && 4 & e && r.p(t, e);
		},
		i(t) {
			e || (j(r, t), (e = !0));
		},
		o(t) {
			I(r, t), (e = !1);
		},
		d(t) {
			r && r.d(t);
		}
	};
}
function ht(t) {
	let e,
		n,
		h,
		d,
		p,
		v,
		x,
		y,
		b,
		w,
		k,
		q,
		E,
		P = t[2] && $t(t);
	const S = t[6].hasvideo,
		A = N(S, t, t[5], ct),
		T = t[6].hasSVG,
		V = N(T, t, t[5], ot),
		L = t[6].default,
		M = N(L, t, t[5], null);
	return {
		c() {
			(e = s('div')),
				(n = s('div')),
				P && P.c(),
				(h = r()),
				A && A.c(),
				(d = r()),
				V && V.c(),
				(p = r()),
				(v = s('div')),
				(x = s('h2')),
				(y = a(t[0])),
				(b = r()),
				(w = s('p')),
				(k = r()),
				M && M.c(),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0 });
			var a = l(e);
			n = o(a, 'DIV', { class: !0 });
			var r = l(n);
			P && P.l(r),
				(h = u(r)),
				A && A.l(r),
				(d = u(r)),
				V && V.l(r),
				r.forEach(i),
				(p = u(a)),
				(v = o(a, 'DIV', { class: !0 }));
			var $ = l(v);
			x = o($, 'H2', { class: !0 });
			var f = l(x);
			(y = c(f, t[0])),
				f.forEach(i),
				(b = u($)),
				(w = o($, 'P', { class: !0 })),
				l(w).forEach(i),
				(k = u($)),
				M && M.l($),
				$.forEach(i),
				a.forEach(i),
				this.h();
		},
		h() {
			$(n, 'class', 'BannerMedia svelte-1rtc8jt'),
				$(x, 'class', 'svelte-1rtc8jt'),
				$(w, 'class', 'svelte-1rtc8jt'),
				$(v, 'class', 'BannerText svelte-1rtc8jt'),
				$(e, 'class', (q = 'Banner ' + t[4][t[3]] + ' svelte-1rtc8jt'));
		},
		m(s, a) {
			f(s, e, a),
				g(e, n),
				P && P.m(n, null),
				g(n, h),
				A && A.m(n, null),
				g(n, d),
				V && V.m(n, null),
				g(e, p),
				g(e, v),
				g(v, x),
				g(x, y),
				g(v, b),
				g(v, w),
				(w.innerHTML = t[1]),
				g(v, k),
				M && M.m(v, null),
				(E = !0);
		},
		p(t, [s]) {
			t[2]
				? P
					? (P.p(t, s), 4 & s && j(P, 1))
					: ((P = $t(t)), P.c(), j(P, 1), P.m(n, h))
				: P &&
				  (D(),
				  I(P, 1, 1, () => {
						P = null;
				  }),
				  O()),
				A && A.p && 32 & s && B(A, S, t, t[5], s, lt, ct),
				V && V.p && 32 & s && B(V, T, t, t[5], s, rt, ot),
				(!E || 1 & s) && m(y, t[0]),
				(!E || 2 & s) && (w.innerHTML = t[1]),
				M && M.p && 32 & s && B(M, L, t, t[5], s, null, null),
				(!E || (8 & s && q !== (q = 'Banner ' + t[4][t[3]] + ' svelte-1rtc8jt'))) &&
					$(e, 'class', q);
		},
		i(t) {
			E || (j(P), j(A, t), j(V, t), j(M, t), (E = !0));
		},
		o(t) {
			I(P), I(A, t), I(V, t), I(M, t), (E = !1);
		},
		d(t) {
			t && i(e), P && P.d(), A && A.d(t), V && V.d(t), M && M.d(t);
		}
	};
}
function ft(t, e, n) {
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
class gt extends t {
	constructor(t) {
		super(), e(this, t, ft, ht, n, { title: 0, text: 1, img: 2, variante: 3 });
	}
}
function mt(t) {
	let e, n;
	return (
		(e = new L({ props: { variante: 1, text: 'cta text', url: '#' } })),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p: y,
			i(t) {
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function dt(t) {
	let e, n;
	return (
		(e = new gt({
			props: {
				variante: 1,
				title: 'CTA Banner',
				text: 'Labore est temporibus odit, exercitationem et magnam',
				img: './img/bg1.jpg',
				$$slots: { default: [mt] },
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
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
class pt extends t {
	constructor(t) {
		super(), e(this, t, null, dt, n, {});
	}
}
function vt(t, e, n) {
	const s = t.slice();
	return (s[0] = e[n].url), (s[1] = e[n].name), s;
}
function xt(t) {
	let e,
		n,
		h,
		m = t[1] + '';
	return {
		c() {
			(e = s('a')), (n = a(m)), (h = r()), this.h();
		},
		l(t) {
			e = o(t, 'A', { href: !0, class: !0, role: !0 });
			var s = l(e);
			(n = c(s, m)), (h = u(s)), s.forEach(i), this.h();
		},
		h() {
			$(e, 'href', t[0]), $(e, 'class', 'NavItem svelte-n7pfs3'), $(e, 'role', 'navigation');
		},
		m(t, s) {
			f(t, e, s), g(e, n), g(e, h);
		},
		p: y,
		d(t) {
			t && i(e);
		}
	};
}
function yt(t) {
	let e,
		n = Q,
		a = [];
	for (let s = 0; s < n.length; s += 1) a[s] = xt(vt(t, n, s));
	return {
		c() {
			e = s('nav');
			for (let t = 0; t < a.length; t += 1) a[t].c();
			this.h();
		},
		l(t) {
			e = o(t, 'NAV', { class: !0 });
			var n = l(e);
			for (let e = 0; e < a.length; e += 1) a[e].l(n);
			n.forEach(i), this.h();
		},
		h() {
			$(e, 'class', 'svelte-n7pfs3');
		},
		m(t, n) {
			f(t, e, n);
			for (let s = 0; s < a.length; s += 1) a[s].m(e, null);
		},
		p(t, [s]) {
			if (0 & s) {
				let r;
				for (n = Q, r = 0; r < n.length; r += 1) {
					const o = vt(t, n, r);
					a[r] ? a[r].p(o, s) : ((a[r] = xt(o)), a[r].c(), a[r].m(e, null));
				}
				for (; r < a.length; r += 1) a[r].d(1);
				a.length = n.length;
			}
		},
		i: y,
		o: y,
		d(t) {
			t && i(e), V(a, t);
		}
	};
}
class bt extends t {
	constructor(t) {
		super(), e(this, t, null, yt, n, {});
	}
}
function wt(t) {
	let e, n;
	return (
		(e = new M({
			props: { title: C[0].title, subtitle: C[0].subtitle, text: C[0].text, img: C[0].img }
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			p: y,
			i(t) {
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function kt(t) {
	let e, n;
	return (
		(e = new bt({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			i(t) {
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function qt(t) {
	let e, n;
	return (
		(e = new at({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			i(t) {
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function Et(t) {
	let e, n;
	return (
		(e = new pt({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (n = !0);
			},
			i(t) {
				n || (j(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				I(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function jt(t) {
	let e, n, s, a, o, l, c, $;
	return (
		(e = new H({
			props: { id: 'cover', variante: 1, $$slots: { default: [wt] }, $$scope: { ctx: t } }
		})),
		(s = new H({
			props: { id: 'navsecondary', variante: 1, $$slots: { default: [kt] }, $$scope: { ctx: t } }
		})),
		(o = new H({
			props: { id: 'quoterotator', variante: 1, $$slots: { default: [qt] }, $$scope: { ctx: t } }
		})),
		(c = new H({
			props: { id: 'ctabanner', variante: 1, $$slots: { default: [Et] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				k(e.$$.fragment),
					(n = r()),
					k(s.$$.fragment),
					(a = r()),
					k(o.$$.fragment),
					(l = r()),
					k(c.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t),
					(n = u(t)),
					q(s.$$.fragment, t),
					(a = u(t)),
					q(o.$$.fragment, t),
					(l = u(t)),
					q(c.$$.fragment, t);
			},
			m(t, r) {
				E(e, t, r),
					f(t, n, r),
					E(s, t, r),
					f(t, a, r),
					E(o, t, r),
					f(t, l, r),
					E(c, t, r),
					($ = !0);
			},
			p(t, [n]) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), s.$set(r);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: t }), o.$set(l);
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: t }), c.$set(i);
			},
			i(t) {
				$ ||
					(j(e.$$.fragment, t),
					j(s.$$.fragment, t),
					j(o.$$.fragment, t),
					j(c.$$.fragment, t),
					($ = !0));
			},
			o(t) {
				I(e.$$.fragment, t),
					I(s.$$.fragment, t),
					I(o.$$.fragment, t),
					I(c.$$.fragment, t),
					($ = !1);
			},
			d(t) {
				P(e, t), t && i(n), P(s, t), t && i(a), P(o, t), t && i(l), P(c, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, jt, n, {});
	}
}
