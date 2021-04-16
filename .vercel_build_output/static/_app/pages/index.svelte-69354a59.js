import {
	S as t,
	i as e,
	s as a,
	e as s,
	t as n,
	j as r,
	c as o,
	a as l,
	b as i,
	d as c,
	l as u,
	o as $,
	P as h,
	f,
	g,
	h as m,
	Q as d,
	R as p,
	G as v,
	H as y,
	n as b,
	F as x,
	K as w,
	p as k,
	q,
	r as E,
	w as I,
	x as P,
	y as S,
	T as j,
	U as D,
	C as O,
	D as A,
	V as N,
	J as V
} from '../chunks/index-d91e1ed8.js';
import { G as T, B as C, C as L, c as U } from '../chunks/Cover-f3b4dc33.js';
import { S as H } from '../chunks/Section-2261cd02.js';
import { f as M } from '../chunks/index-65311448.js';
import { s as R } from '../chunks/pages-26a130a6.js';
import '../chunks/index-78b22dae.js';
const B = [
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
	let e, a, v, y, b, x, w, k, q;
	return {
		c() {
			(e = s('div')),
				(a = s('q')),
				(v = n(t[0])),
				(y = r()),
				(b = s('p')),
				(x = n('—')),
				(w = n(t[1])),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0, style: !0 });
			var n = l(e);
			a = o(n, 'Q', { class: !0 });
			var r = l(a);
			(v = i(r, t[0])), r.forEach(c), (y = u(n)), (b = o(n, 'P', { class: !0 }));
			var $ = l(b);
			(x = i($, '—')), (w = i($, t[1])), $.forEach(c), n.forEach(c), this.h();
		},
		h() {
			$(a, 'class', 'svelte-af3sga'),
				$(b, 'class', 'author svelte-af3sga'),
				$(e, 'class', 'mySlides svelte-af3sga'),
				h(e, 'background-image', 'url(' + t[2] + ')');
		},
		m(t, s) {
			f(t, e, s), g(e, a), g(a, v), g(e, y), g(e, b), g(b, x), g(b, w), (q = !0);
		},
		p(t, [a]) {
			(!q || 1 & a) && m(v, t[0]),
				(!q || 2 & a) && m(w, t[1]),
				(!q || 4 & a) && h(e, 'background-image', 'url(' + t[2] + ')');
		},
		i(t) {
			q ||
				(d(() => {
					k || (k = p(e, M, {}, !0)), k.run(1);
				}),
				(q = !0));
		},
		o(t) {
			k || (k = p(e, M, {}, !1)), k.run(0), (q = !1);
		},
		d(t) {
			t && c(e), t && k && k.end();
		}
	};
}
function Q(t, e, a) {
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
class F extends t {
	constructor(t) {
		super(), e(this, t, Q, G, a, { quote: 0, author: 1, image: 2 });
	}
}
function J(t) {
	let e, a, n, r;
	return {
		c() {
			(e = s('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { class: !0, title: !0 })), l(e).forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'dot svelte-1p4qrk9'),
				$(e, 'title', (a = `quote by ${t[2]}`)),
				v(e, 'active', t[0] === t[1]),
				v(e, 'not-clickable', t[3]);
		},
		m(a, s) {
			f(a, e, s), n || ((r = y(e, 'click', t[4])), (n = !0));
		},
		p(t, [s]) {
			4 & s && a !== (a = `quote by ${t[2]}`) && $(e, 'title', a),
				3 & s && v(e, 'active', t[0] === t[1]),
				8 & s && v(e, 'not-clickable', t[3]);
		},
		i: b,
		o: b,
		d(t) {
			t && c(e), (n = !1), r();
		}
	};
}
function K(t, e, a) {
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
function z(t) {
	let e, a, n, i, h, m, d;
	return {
		c() {
			(e = s('section')), (a = s('label')), (n = s('input')), (i = r()), (h = s('span')), this.h();
		},
		l(t) {
			e = o(t, 'SECTION', { id: !0, class: !0 });
			var s = l(e);
			a = o(s, 'LABEL', { class: !0 });
			var r = l(a);
			(n = o(r, 'INPUT', { type: !0, class: !0 })),
				(i = u(r)),
				(h = o(r, 'SPAN', { class: !0 })),
				l(h).forEach(c),
				r.forEach(c),
				s.forEach(c),
				this.h();
		},
		h() {
			$(n, 'type', 'checkbox'),
				$(n, 'class', 'svelte-oaleaa'),
				$(h, 'class', 'slider round svelte-oaleaa'),
				$(a, 'class', 'switch svelte-oaleaa'),
				$(e, 'id', 'auto-play-cont'),
				$(e, 'class', 'svelte-oaleaa');
		},
		m(s, r) {
			f(s, e, r),
				g(e, a),
				g(a, n),
				(n.checked = t[0]),
				g(a, i),
				g(a, h),
				m || ((d = [y(n, 'change', t[2]), y(n, 'change', t[1])]), (m = !0));
		},
		p(t, [e]) {
			1 & e && (n.checked = t[0]);
		},
		i: b,
		o: b,
		d(t) {
			t && c(e), (m = !1), w(d);
		}
	};
}
function X(t, e, a) {
	let { switchOn: s } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && a(0, (s = t.switchOn));
		}),
		[
			s,
			function (e) {
				x(t, e);
			},
			function () {
				(s = this.checked), a(0, s);
			}
		]
	);
}
class Y extends t {
	constructor(t) {
		super(), e(this, t, X, z, a, { switchOn: 0 });
	}
}
function Z(t, e, a) {
	const s = t.slice();
	return (s[5] = e[a]), (s[13] = a), s;
}
function _(t) {
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
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			p(t, a) {
				const s = {};
				32 & a && (s.quote = t[5]),
					8 & a && (s.author = t[3]),
					16 & a && (s.image = t[4]),
					e.$set(s);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function tt(t) {
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
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			p(a, s) {
				t = a;
				const n = {};
				1 & s && (n.quoteIndex = t[0]), 4 & s && (n.autoPlaying = t[2]), e.$set(n);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function et(t) {
	let e,
		h,
		m,
		d,
		p,
		x,
		T,
		C,
		L,
		U,
		H,
		M,
		R,
		G,
		Q,
		F = t[5],
		J = _(t),
		K = B,
		W = [];
	for (let a = 0; a < K.length; a += 1) W[a] = tt(Z(t, K, a));
	const z = (t) =>
		P(W[t], 1, 1, () => {
			W[t] = null;
		});
	function X(e) {
		t[11](e);
	}
	let et = {};
	return (
		void 0 !== t[1] && (et.switchOn = t[1]),
		(H = new Y({ props: et })),
		j.push(() => D(H, 'switchOn', X)),
		H.$on('change', t[8]),
		{
			c() {
				(e = s('div')),
					J.c(),
					(h = r()),
					(m = s('span')),
					(d = n('❮')),
					(p = r()),
					(x = s('span')),
					(T = n('❯')),
					(C = r()),
					(L = s('div'));
				for (let t = 0; t < W.length; t += 1) W[t].c();
				(U = r()), k(H.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { class: !0 });
				var a = l(e);
				J.l(a), (h = u(a)), (m = o(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = l(m);
				(d = i(s, '❮')),
					s.forEach(c),
					(p = u(a)),
					(x = o(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var n = l(x);
				(T = i(n, '❯')), n.forEach(c), a.forEach(c), (C = u(t)), (L = o(t, 'DIV', { class: !0 }));
				var r = l(L);
				for (let e = 0; e < W.length; e += 1) W[e].l(r);
				(U = u(r)), q(H.$$.fragment, r), r.forEach(c), this.h();
			},
			h() {
				$(m, 'href', '#prev'),
					$(m, 'class', 'prev svelte-l7vht7'),
					$(m, 'title', 'previous quote'),
					v(m, 'not-clickable', t[2]),
					$(x, 'href', '#next'),
					$(x, 'class', 'next svelte-l7vht7'),
					$(x, 'title', 'next quote'),
					v(x, 'not-clickable', t[2]),
					$(e, 'class', 'slideshow-container svelte-l7vht7'),
					$(L, 'class', 'dot-container svelte-l7vht7');
			},
			m(a, s) {
				f(a, e, s),
					J.m(e, null),
					g(e, h),
					g(e, m),
					g(m, d),
					g(e, p),
					g(e, x),
					g(x, T),
					f(a, C, s),
					f(a, L, s);
				for (let t = 0; t < W.length; t += 1) W[t].m(L, null);
				g(L, U),
					E(H, L, null),
					(R = !0),
					G || ((Q = [y(m, 'click', t[7]), y(x, 'click', t[6])]), (G = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && a(F, (F = t[5]))
						? (O(), P(J, 1, 1, b), A(), (J = _(t)), J.c(), I(J), J.m(e, h))
						: J.p(t, s),
					4 & s && v(m, 'not-clickable', t[2]),
					4 & s && v(x, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (K = B, e = 0; e < K.length; e += 1) {
						const a = Z(t, K, e);
						W[e]
							? (W[e].p(a, s), I(W[e], 1))
							: ((W[e] = tt(a)), W[e].c(), I(W[e], 1), W[e].m(L, U));
					}
					for (O(), e = K.length; e < W.length; e += 1) z(e);
					A();
				}
				const n = {};
				!M && 2 & s && ((M = !0), (n.switchOn = t[1]), N(() => (M = !1))), H.$set(n);
			},
			i(t) {
				if (!R) {
					I(J);
					for (let t = 0; t < K.length; t += 1) I(W[t]);
					I(H.$$.fragment, t), (R = !0);
				}
			},
			o(t) {
				P(J), (W = W.filter(Boolean));
				for (let e = 0; e < W.length; e += 1) P(W[e]);
				P(H.$$.fragment, t), (R = !1);
			},
			d(t) {
				t && c(e), J.d(t), t && c(C), t && c(L), V(W, t), S(H), (G = !1), w(Q);
			}
		}
	);
}
function at(t, e, a) {
	let s,
		n,
		r,
		o = 0;
	const l = () => {
		a(0, o === B.length - 1 ? (o = 0) : (o += 1));
	};
	let i,
		c = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(o),
				1 & t.$$.dirty && a(5, (s = B[o].quote)),
				1 & t.$$.dirty && a(3, (n = B[o].author)),
				1 & t.$$.dirty && a(4, (r = B[o].image)),
				1 & t.$$.dirty && console.log(o),
				512 & t.$$.dirty && console.log(i);
		}),
		[
			o,
			c,
			u,
			n,
			r,
			s,
			l,
			() => {
				a(0, 0 === o ? (o = B.length - 1) : (o -= 1));
			},
			() => {
				c ? (a(9, (i = setInterval(l, 5e3))), a(2, (u = !0))) : (clearInterval(i), a(2, (u = !1)));
			},
			i,
			(t) => a(0, (o = t)),
			function (t) {
				(c = t), a(1, c);
			}
		]
	);
}
class st extends t {
	constructor(t) {
		super(), e(this, t, at, et, a, {});
	}
}
function nt(t) {
	let e, a, r, u, h, m, d;
	return {
		c() {
			(e = s('video')),
				(a = s('source')),
				(u = s('source')),
				(m = s('p')),
				(d = n('Ups! Su navegador no soporta vídeos HTML5.')),
				this.h();
		},
		l(t) {
			e = o(t, 'VIDEO', { poster: !0, loop: !0, playsinline: !0, controls: !0 });
			var s = l(e);
			(a = o(s, 'SOURCE', { src: !0, type: !0 })),
				(u = o(s, 'SOURCE', { src: !0, type: !0 })),
				(m = o(s, 'P', {}));
			var n = l(m);
			(d = i(n, 'Ups! Su navegador no soporta vídeos HTML5.')),
				n.forEach(c),
				s.forEach(c),
				this.h();
		},
		h() {
			a.src !== (r = '/img/desdelapoesiadelamateria.webm') &&
				$(a, 'src', '/img/desdelapoesiadelamateria.webm'),
				$(a, 'type', 'video/webm'),
				u.src !== (h = '/img/desdelapoesiadelamateria.mp4') &&
					$(u, 'src', '/img/desdelapoesiadelamateria.mp4'),
				$(u, 'type', 'video/mp4'),
				$(e, 'poster', '/img/cover3.jpg'),
				(e.loop = !0),
				(e.playsInline = !0),
				(e.controls = 'controls');
		},
		m(t, s) {
			f(t, e, s), g(e, a), g(e, u), g(e, m), g(m, d);
		},
		d(t) {
			t && c(e);
		}
	};
}
function rt(t) {
	let e, a, r;
	return {
		c() {
			(e = s('div')), (a = s('p')), (r = n('Desde la poesía de la materia')), this.h();
		},
		l(t) {
			e = o(t, 'DIV', { slot: !0 });
			var s = l(e);
			a = o(s, 'P', {});
			var n = l(a);
			(r = i(n, 'Desde la poesía de la materia')), n.forEach(c), s.forEach(c), this.h();
		},
		h() {
			$(e, 'slot', 'subarea1');
		},
		m(t, s) {
			f(t, e, s), g(e, a), g(a, r);
		},
		d(t) {
			t && c(e);
		}
	};
}
function ot(t) {
	let e, a, n;
	return (
		(a = new C({ props: { variante: 0, text: 'cta text', url: '#' } })),
		{
			c() {
				(e = s('div')), k(a.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { slot: !0 });
				var s = l(e);
				q(a.$$.fragment, s), s.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea2');
			},
			m(t, s) {
				f(t, e, s), E(a, e, null), (n = !0);
			},
			p: b,
			i(t) {
				n || (I(a.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(a.$$.fragment, t), (n = !1);
			},
			d(t) {
				t && c(e), S(a);
			}
		}
	);
}
function lt(t) {
	let e, a;
	return (
		(e = new T({
			props: {
				variante: 4,
				$$slots: { subarea2: [ot], subarea1: [rt], default: [nt] },
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
				E(e, t, s), (a = !0);
			},
			p(t, [a]) {
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
class it extends t {
	constructor(t) {
		super(), e(this, t, null, lt, a, {});
	}
}
function ct(t, e, a) {
	const s = t.slice();
	return (s[0] = e[a].url), (s[1] = e[a].name), s;
}
function ut(t) {
	let e,
		a,
		h,
		m = t[1] + '';
	return {
		c() {
			(e = s('a')), (a = n(m)), (h = r()), this.h();
		},
		l(t) {
			e = o(t, 'A', { href: !0, class: !0, role: !0 });
			var s = l(e);
			(a = i(s, m)), (h = u(s)), s.forEach(c), this.h();
		},
		h() {
			$(e, 'href', t[0]), $(e, 'class', 'NavItem svelte-ge4s9i'), $(e, 'role', 'navigation');
		},
		m(t, s) {
			f(t, e, s), g(e, a), g(e, h);
		},
		p: b,
		d(t) {
			t && c(e);
		}
	};
}
function $t(t) {
	let e,
		a = R,
		n = [];
	for (let s = 0; s < a.length; s += 1) n[s] = ut(ct(t, a, s));
	return {
		c() {
			e = s('nav');
			for (let t = 0; t < n.length; t += 1) n[t].c();
			this.h();
		},
		l(t) {
			e = o(t, 'NAV', { class: !0 });
			var a = l(e);
			for (let e = 0; e < n.length; e += 1) n[e].l(a);
			a.forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'svelte-ge4s9i');
		},
		m(t, a) {
			f(t, e, a);
			for (let s = 0; s < n.length; s += 1) n[s].m(e, null);
		},
		p(t, [s]) {
			if (0 & s) {
				let r;
				for (a = R, r = 0; r < a.length; r += 1) {
					const o = ct(t, a, r);
					n[r] ? n[r].p(o, s) : ((n[r] = ut(o)), n[r].c(), n[r].m(e, null));
				}
				for (; r < n.length; r += 1) n[r].d(1);
				n.length = a.length;
			}
		},
		i: b,
		o: b,
		d(t) {
			t && c(e), V(n, t);
		}
	};
}
class ht extends t {
	constructor(t) {
		super(), e(this, t, null, $t, a, {});
	}
}
function ft(t) {
	let e, a;
	return (
		(e = new L({
			props: { title: U[0].title, subtitle: U[0].subtitle, text: U[0].text, img: U[0].img }
		})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			p: b,
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function gt(t) {
	let e, a;
	return (
		(e = new ht({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function mt(t) {
	let e, a;
	return (
		(e = new st({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function dt(t) {
	let e, a;
	return (
		(e = new it({})),
		{
			c() {
				k(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (a = !0);
			},
			i(t) {
				a || (I(e.$$.fragment, t), (a = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1);
			},
			d(t) {
				S(e, t);
			}
		}
	);
}
function pt(t) {
	let e, a, s, n, o, l, i, $;
	return (
		(e = new H({
			props: { id: 'cover', variante: 3, $$slots: { default: [ft] }, $$scope: { ctx: t } }
		})),
		(s = new H({
			props: { id: 'navsecondary', variante: 3, $$slots: { default: [gt] }, $$scope: { ctx: t } }
		})),
		(o = new H({
			props: { id: 'quoterotator', variante: 3, $$slots: { default: [mt] }, $$scope: { ctx: t } }
		})),
		(i = new H({
			props: { id: 'ctabanner', variante: 2, $$slots: { default: [dt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				k(e.$$.fragment),
					(a = r()),
					k(s.$$.fragment),
					(n = r()),
					k(o.$$.fragment),
					(l = r()),
					k(i.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t),
					(a = u(t)),
					q(s.$$.fragment, t),
					(n = u(t)),
					q(o.$$.fragment, t),
					(l = u(t)),
					q(i.$$.fragment, t);
			},
			m(t, r) {
				E(e, t, r),
					f(t, a, r),
					E(s, t, r),
					f(t, n, r),
					E(o, t, r),
					f(t, l, r),
					E(i, t, r),
					($ = !0);
			},
			p(t, [a]) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: t }), e.$set(n);
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: t }), s.$set(r);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: t }), o.$set(l);
				const c = {};
				1 & a && (c.$$scope = { dirty: a, ctx: t }), i.$set(c);
			},
			i(t) {
				$ ||
					(I(e.$$.fragment, t),
					I(s.$$.fragment, t),
					I(o.$$.fragment, t),
					I(i.$$.fragment, t),
					($ = !0));
			},
			o(t) {
				P(e.$$.fragment, t),
					P(s.$$.fragment, t),
					P(o.$$.fragment, t),
					P(i.$$.fragment, t),
					($ = !1);
			},
			d(t) {
				S(e, t), t && c(a), S(s, t), t && c(n), S(o, t), t && c(l), S(i, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, pt, a, {});
	}
}
