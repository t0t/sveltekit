import {
	H as t,
	S as e,
	i as n,
	s,
	e as a,
	t as o,
	j as r,
	c as l,
	a as i,
	b as c,
	d as u,
	l as h,
	o as d,
	f,
	g,
	h as $,
	I as p,
	J as y,
	K as m,
	L as v,
	n as k,
	M as q,
	N as w,
	p as b,
	q as x,
	r as I,
	w as E,
	x as P,
	y as S,
	O,
	P as A,
	C as D,
	D as N,
	Q as T,
	R as j,
	T as L
} from '../chunks/vendor-8f03db9b.js';
/* empty css                              */ const C = [
	{ quote: 'The road to success is always under construction.', author: 'Lily Tomlin' },
	{ quote: 'A day without sunshine is like, you know, night.', author: 'Steve Martin' },
	{
		quote:
			"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
		author: 'Ellen Degeneres'
	},
	{
		quote:
			'Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.',
		author: 'Denis Wholey'
	},
	{
		quote:
			'Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.',
		author: 'Helen Rowland'
	},
	{
		quote:
			'Light travels faster than sound. This is why some people appear bright until you hear them speak.',
		author: 'Alan Dundes'
	},
	{
		quote:
			"I want my children to have all the things I couldn't afford. Then I want to move in with them.",
		author: 'Phyllis Diller'
	},
	{
		quote:
			'Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?',
		author: 'George Carlin'
	},
	{ quote: "Folks, I don't trust children. They're here to replace us.", author: 'Stephen Colbert' }
];
function M(e, { delay: n = 0, duration: s = 400, easing: a = t } = {}) {
	const o = +getComputedStyle(e).opacity;
	return { delay: n, duration: s, easing: a, css: (t) => 'opacity: ' + t * o };
}
function z(t) {
	let e, n, s, m, v, k, q, w, b;
	return {
		c() {
			(e = a('div')),
				(n = a('q')),
				(s = o(t[0])),
				(m = r()),
				(v = a('p')),
				(k = o('—')),
				(q = o(t[1])),
				this.h();
		},
		l(a) {
			e = l(a, 'DIV', { class: !0 });
			var o = i(e);
			n = l(o, 'Q', { class: !0 });
			var r = i(n);
			(s = c(r, t[0])), r.forEach(u), (m = h(o)), (v = l(o, 'P', { class: !0 }));
			var d = i(v);
			(k = c(d, '—')), (q = c(d, t[1])), d.forEach(u), o.forEach(u), this.h();
		},
		h() {
			d(n, 'class', 'svelte-nj7r8r'),
				d(v, 'class', 'author svelte-nj7r8r'),
				d(e, 'class', 'mySlides svelte-nj7r8r');
		},
		m(t, a) {
			f(t, e, a), g(e, n), g(n, s), g(e, m), g(e, v), g(v, k), g(v, q), (b = !0);
		},
		p(t, [e]) {
			(!b || 1 & e) && $(s, t[0]), (!b || 2 & e) && $(q, t[1]);
		},
		i(t) {
			b ||
				(p(() => {
					w || (w = y(e, M, {}, !0)), w.run(1);
				}),
				(b = !0));
		},
		o(t) {
			w || (w = y(e, M, {}, !1)), w.run(0), (b = !1);
		},
		d(t) {
			t && u(e), t && w && w.end();
		}
	};
}
function H(t, e, n) {
	let { quote: s } = e,
		{ author: a } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && n(0, (s = t.quote)), 'author' in t && n(1, (a = t.author));
		}),
		[s, a]
	);
}
class V extends e {
	constructor(t) {
		super(), n(this, t, H, z, s, { quote: 0, author: 1 });
	}
}
function B(t) {
	let e, n, s, o;
	return {
		c() {
			(e = a('span')), this.h();
		},
		l(t) {
			(e = l(t, 'SPAN', { class: !0, title: !0 })), i(e).forEach(u), this.h();
		},
		h() {
			d(e, 'class', 'dot svelte-mvhozd'),
				d(e, 'title', (n = `quote by ${t[2]}`)),
				m(e, 'active', t[0] === t[1]),
				m(e, 'not-clickable', t[3]);
		},
		m(n, a) {
			f(n, e, a), s || ((o = v(e, 'click', t[4])), (s = !0));
		},
		p(t, [s]) {
			4 & s && n !== (n = `quote by ${t[2]}`) && d(e, 'title', n),
				3 & s && m(e, 'active', t[0] === t[1]),
				8 & s && m(e, 'not-clickable', t[3]);
		},
		i: k,
		o: k,
		d(t) {
			t && u(e), (s = !1), o();
		}
	};
}
function F(t, e, n) {
	let { quoteIndex: s } = e,
		{ counter: a } = e,
		{ attribution: o } = e,
		{ autoPlaying: r } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && n(0, (s = t.quoteIndex)),
				'counter' in t && n(1, (a = t.counter)),
				'attribution' in t && n(2, (o = t.attribution)),
				'autoPlaying' in t && n(3, (r = t.autoPlaying));
		}),
		[
			s,
			a,
			o,
			r,
			function (e) {
				q(t, e);
			}
		]
	);
}
class Q extends e {
	constructor(t) {
		super(), n(this, t, F, B, s, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function R(t) {
	let e, n, s, o, c, $, p;
	return {
		c() {
			(e = a('section')), (n = a('label')), (s = a('input')), (o = r()), (c = a('span')), this.h();
		},
		l(t) {
			e = l(t, 'SECTION', { id: !0, class: !0 });
			var a = i(e);
			n = l(a, 'LABEL', { class: !0 });
			var r = i(n);
			(s = l(r, 'INPUT', { type: !0, class: !0 })),
				(o = h(r)),
				(c = l(r, 'SPAN', { class: !0 })),
				i(c).forEach(u),
				r.forEach(u),
				a.forEach(u),
				this.h();
		},
		h() {
			d(s, 'type', 'checkbox'),
				d(s, 'class', 'svelte-xp57ke'),
				d(c, 'class', 'slider round svelte-xp57ke'),
				d(n, 'class', 'switch svelte-xp57ke'),
				d(e, 'id', 'auto-play-cont'),
				d(e, 'class', 'svelte-xp57ke');
		},
		m(a, r) {
			f(a, e, r),
				g(e, n),
				g(n, s),
				(s.checked = t[0]),
				g(n, o),
				g(n, c),
				$ || ((p = [v(s, 'change', t[2]), v(s, 'change', t[1])]), ($ = !0));
		},
		p(t, [e]) {
			1 & e && (s.checked = t[0]);
		},
		i: k,
		o: k,
		d(t) {
			t && u(e), ($ = !1), w(p);
		}
	};
}
function W(t, e, n) {
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
class G extends e {
	constructor(t) {
		super(), n(this, t, W, R, s, { switchOn: 0 });
	}
}
function J(t, e, n) {
	const s = t.slice();
	return (s[4] = e[n]), (s[12] = n), s;
}
function K(t) {
	let e, n;
	return (
		(e = new V({ props: { quote: t[4], author: t[3] } })),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				I(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				16 & n && (s.quote = t[4]), 8 & n && (s.author = t[3]), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
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
function U(t) {
	let e, n;
	return (
		(e = new Q({
			props: { counter: t[12], quoteIndex: t[0], autoPlaying: t[2], attribution: t[4].author }
		})),
		e.$on('click', function () {
			return t[9](t[12]);
		}),
		{
			c() {
				b(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				I(e, t, s), (n = !0);
			},
			p(n, s) {
				t = n;
				const a = {};
				1 & s && (a.quoteIndex = t[0]), 4 & s && (a.autoPlaying = t[2]), e.$set(a);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
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
function X(t) {
	let e,
		n,
		$,
		p,
		y,
		q,
		L,
		M,
		z,
		H,
		V,
		B,
		F,
		Q,
		R,
		W,
		X = t[4],
		Y = K(t),
		Z = C,
		_ = [];
	for (let s = 0; s < Z.length; s += 1) _[s] = U(J(t, Z, s));
	const tt = (t) =>
		P(_[t], 1, 1, () => {
			_[t] = null;
		});
	function et(e) {
		t[10](e);
	}
	let nt = {};
	return (
		void 0 !== t[1] && (nt.switchOn = t[1]),
		(B = new G({ props: nt })),
		O.push(() => A(B, 'switchOn', et)),
		B.$on('change', t[7]),
		{
			c() {
				(e = a('main')),
					(n = a('div')),
					Y.c(),
					($ = r()),
					(p = a('span')),
					(y = o('❮')),
					(q = r()),
					(L = a('span')),
					(M = o('❯')),
					(z = r()),
					(H = a('div'));
				for (let t = 0; t < _.length; t += 1) _[t].c();
				(V = r()), b(B.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'MAIN', { class: !0 });
				var s = i(e);
				n = l(s, 'DIV', { class: !0 });
				var a = i(n);
				Y.l(a), ($ = h(a)), (p = l(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var o = i(p);
				(y = c(o, '❮')),
					o.forEach(u),
					(q = h(a)),
					(L = l(a, 'SPAN', { href: !0, class: !0, title: !0 }));
				var r = i(L);
				(M = c(r, '❯')), r.forEach(u), a.forEach(u), (z = h(s)), (H = l(s, 'DIV', { class: !0 }));
				var d = i(H);
				for (let e = 0; e < _.length; e += 1) _[e].l(d);
				(V = h(d)), x(B.$$.fragment, d), d.forEach(u), s.forEach(u), this.h();
			},
			h() {
				d(p, 'href', '#prev'),
					d(p, 'class', 'prev svelte-74nqsk'),
					d(p, 'title', 'previous quote'),
					m(p, 'not-clickable', t[2]),
					d(L, 'href', '#next'),
					d(L, 'class', 'next svelte-74nqsk'),
					d(L, 'title', 'next quote'),
					m(L, 'not-clickable', t[2]),
					d(n, 'class', 'slideshow-container svelte-74nqsk'),
					d(H, 'class', 'dot-container svelte-74nqsk'),
					d(e, 'class', 'svelte-74nqsk');
			},
			m(s, a) {
				f(s, e, a),
					g(e, n),
					Y.m(n, null),
					g(n, $),
					g(n, p),
					g(p, y),
					g(n, q),
					g(n, L),
					g(L, M),
					g(e, z),
					g(e, H);
				for (let t = 0; t < _.length; t += 1) _[t].m(H, null);
				g(H, V),
					I(B, H, null),
					(Q = !0),
					R || ((W = [v(p, 'click', t[6]), v(L, 'click', t[5])]), (R = !0));
			},
			p(t, [e]) {
				if (
					(16 & e && s(X, (X = t[4]))
						? (D(), P(Y, 1, 1, k), N(), (Y = K(t)), Y.c(), E(Y), Y.m(n, $))
						: Y.p(t, e),
					4 & e && m(p, 'not-clickable', t[2]),
					4 & e && m(L, 'not-clickable', t[2]),
					5 & e)
				) {
					let n;
					for (Z = C, n = 0; n < Z.length; n += 1) {
						const s = J(t, Z, n);
						_[n] ? (_[n].p(s, e), E(_[n], 1)) : ((_[n] = U(s)), _[n].c(), E(_[n], 1), _[n].m(H, V));
					}
					for (D(), n = Z.length; n < _.length; n += 1) tt(n);
					N();
				}
				const a = {};
				!F && 2 & e && ((F = !0), (a.switchOn = t[1]), T(() => (F = !1))), B.$set(a);
			},
			i(t) {
				if (!Q) {
					E(Y);
					for (let t = 0; t < Z.length; t += 1) E(_[t]);
					E(B.$$.fragment, t), (Q = !0);
				}
			},
			o(t) {
				P(Y), (_ = _.filter(Boolean));
				for (let e = 0; e < _.length; e += 1) P(_[e]);
				P(B.$$.fragment, t), (Q = !1);
			},
			d(t) {
				t && u(e), Y.d(t), j(_, t), S(B), (R = !1), w(W);
			}
		}
	);
}
function Y(t, e, n) {
	let s,
		a,
		o = 0;
	const r = () => {
		n(0, o === C.length - 1 ? (o = 0) : (o += 1));
	};
	let l,
		i = !1,
		c = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(o),
				1 & t.$$.dirty && n(4, (s = C[o].quote)),
				1 & t.$$.dirty && n(3, (a = C[o].author)),
				1 & t.$$.dirty && console.log(o),
				256 & t.$$.dirty && console.log(l);
		}),
		[
			o,
			i,
			c,
			a,
			s,
			r,
			() => {
				n(0, 0 === o ? (o = C.length - 1) : (o -= 1));
			},
			() => {
				i ? (n(8, (l = setInterval(r, 5e3))), n(2, (c = !0))) : (clearInterval(l), n(2, (c = !1)));
			},
			l,
			(t) => n(0, (o = t)),
			function (t) {
				(i = t), n(1, i);
			}
		]
	);
}
class Z extends e {
	constructor(t) {
		super(), n(this, t, Y, X, s, {});
	}
}
function _(t) {
	let e, n, s;
	return (
		(n = new Z({})),
		{
			c() {
				(e = r()), b(n.$$.fragment), this.h();
			},
			l(t) {
				L('[data-svelte="svelte-czi6z8"]', document.head).forEach(u),
					(e = h(t)),
					x(n.$$.fragment, t),
					this.h();
			},
			h() {
				document.title = 'Welcome';
			},
			m(t, a) {
				f(t, e, a), I(n, t, a), (s = !0);
			},
			p: k,
			i(t) {
				s || (E(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				P(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && u(e), S(n, t);
			}
		}
	);
}
export default class extends e {
	constructor(t) {
		super(), n(this, t, null, _, s, {});
	}
}
