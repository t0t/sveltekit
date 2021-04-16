import {
	S as e,
	i as t,
	s as n,
	e as r,
	t as s,
	j as a,
	c as l,
	a as o,
	b as c,
	d as i,
	l as u,
	o as f,
	K as $,
	f as h,
	g,
	h as m,
	L as p,
	M as d,
	G as v,
	H as y,
	n as k,
	N as b,
	O as w,
	p as x,
	q,
	r as E,
	w as T,
	x as S,
	y as I,
	P,
	Q as j,
	C as A,
	D,
	R as O,
	J as B,
	m as V,
	T as L,
	U as N,
	V as M,
	W as C,
	F as H,
	E as G
} from '../chunks/index-a86d0367.js';
import { f as J, b as Q, B as R } from '../chunks/Button-8fecae15.js';
import { w as U } from '../chunks/index-b6faf84c.js';
import { S as W } from '../chunks/Section-0453228e.js';
const _ = [
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
function z(e) {
	let t, n, v, y, k, b, w, x, q;
	return {
		c() {
			(t = r('div')),
				(n = r('q')),
				(v = s(e[0])),
				(y = a()),
				(k = r('p')),
				(b = s('—')),
				(w = s(e[1])),
				this.h();
		},
		l(r) {
			t = l(r, 'DIV', { class: !0, style: !0 });
			var s = o(t);
			n = l(s, 'Q', { class: !0 });
			var a = o(n);
			(v = c(a, e[0])), a.forEach(i), (y = u(s)), (k = l(s, 'P', { class: !0 }));
			var f = o(k);
			(b = c(f, '—')), (w = c(f, e[1])), f.forEach(i), s.forEach(i), this.h();
		},
		h() {
			f(n, 'class', 'svelte-1pfkgpk'),
				f(k, 'class', 'author svelte-1pfkgpk'),
				f(t, 'class', 'mySlides svelte-1pfkgpk'),
				$(t, 'background-image', 'url(' + e[2] + ')');
		},
		m(e, r) {
			h(e, t, r), g(t, n), g(n, v), g(t, y), g(t, k), g(k, b), g(k, w), (q = !0);
		},
		p(e, [n]) {
			(!q || 1 & n) && m(v, e[0]),
				(!q || 2 & n) && m(w, e[1]),
				(!q || 4 & n) && $(t, 'background-image', 'url(' + e[2] + ')');
		},
		i(e) {
			q ||
				(p(() => {
					x || (x = d(t, J, {}, !0)), x.run(1);
				}),
				(q = !0));
		},
		o(e) {
			x || (x = d(t, J, {}, !1)), x.run(0), (q = !1);
		},
		d(e) {
			e && i(t), e && x && x.end();
		}
	};
}
function F(e, t, n) {
	let { quote: r } = t,
		{ author: s } = t,
		{ image: a } = t;
	return (
		(e.$$set = (e) => {
			'quote' in e && n(0, (r = e.quote)),
				'author' in e && n(1, (s = e.author)),
				'image' in e && n(2, (a = e.image));
		}),
		[r, s, a]
	);
}
class K extends e {
	constructor(e) {
		super(), t(this, e, F, z, n, { quote: 0, author: 1, image: 2 });
	}
}
function X(e) {
	let t, n, s, a;
	return {
		c() {
			(t = r('span')), this.h();
		},
		l(e) {
			(t = l(e, 'SPAN', { class: !0, title: !0 })), o(t).forEach(i), this.h();
		},
		h() {
			f(t, 'class', 'dot svelte-1bg8uoz'),
				f(t, 'title', (n = `quote by ${e[2]}`)),
				v(t, 'active', e[0] === e[1]),
				v(t, 'not-clickable', e[3]);
		},
		m(n, r) {
			h(n, t, r), s || ((a = y(t, 'click', e[4])), (s = !0));
		},
		p(e, [r]) {
			4 & r && n !== (n = `quote by ${e[2]}`) && f(t, 'title', n),
				3 & r && v(t, 'active', e[0] === e[1]),
				8 & r && v(t, 'not-clickable', e[3]);
		},
		i: k,
		o: k,
		d(e) {
			e && i(t), (s = !1), a();
		}
	};
}
function Y(e, t, n) {
	let { quoteIndex: r } = t,
		{ counter: s } = t,
		{ attribution: a } = t,
		{ autoPlaying: l } = t;
	return (
		(e.$$set = (e) => {
			'quoteIndex' in e && n(0, (r = e.quoteIndex)),
				'counter' in e && n(1, (s = e.counter)),
				'attribution' in e && n(2, (a = e.attribution)),
				'autoPlaying' in e && n(3, (l = e.autoPlaying));
		}),
		[
			r,
			s,
			a,
			l,
			function (t) {
				b(e, t);
			}
		]
	);
}
class Z extends e {
	constructor(e) {
		super(), t(this, e, Y, X, n, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function ee(e) {
	let t, n, s, c, $, m, p;
	return {
		c() {
			(t = r('section')), (n = r('label')), (s = r('input')), (c = a()), ($ = r('span')), this.h();
		},
		l(e) {
			t = l(e, 'SECTION', { id: !0, class: !0 });
			var r = o(t);
			n = l(r, 'LABEL', { class: !0 });
			var a = o(n);
			(s = l(a, 'INPUT', { type: !0, class: !0 })),
				(c = u(a)),
				($ = l(a, 'SPAN', { class: !0 })),
				o($).forEach(i),
				a.forEach(i),
				r.forEach(i),
				this.h();
		},
		h() {
			f(s, 'type', 'checkbox'),
				f(s, 'class', 'svelte-qu5u5u'),
				f($, 'class', 'slider round svelte-qu5u5u'),
				f(n, 'class', 'switch svelte-qu5u5u'),
				f(t, 'id', 'auto-play-cont'),
				f(t, 'class', 'svelte-qu5u5u');
		},
		m(r, a) {
			h(r, t, a),
				g(t, n),
				g(n, s),
				(s.checked = e[0]),
				g(n, c),
				g(n, $),
				m || ((p = [y(s, 'change', e[2]), y(s, 'change', e[1])]), (m = !0));
		},
		p(e, [t]) {
			1 & t && (s.checked = e[0]);
		},
		i: k,
		o: k,
		d(e) {
			e && i(t), (m = !1), w(p);
		}
	};
}
function te(e, t, n) {
	let { switchOn: r } = t;
	return (
		(e.$$set = (e) => {
			'switchOn' in e && n(0, (r = e.switchOn));
		}),
		[
			r,
			function (t) {
				b(e, t);
			},
			function () {
				(r = this.checked), n(0, r);
			}
		]
	);
}
class ne extends e {
	constructor(e) {
		super(), t(this, e, te, ee, n, { switchOn: 0 });
	}
}
function re(e, t, n) {
	const r = e.slice();
	return (r[5] = t[n]), (r[13] = n), r;
}
function se(e) {
	let t, n;
	return (
		(t = new K({ props: { quote: e[5], author: e[3], image: e[4] } })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			p(e, n) {
				const r = {};
				32 & n && (r.quote = e[5]),
					8 & n && (r.author = e[3]),
					16 & n && (r.image = e[4]),
					t.$set(r);
			},
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function ae(e) {
	let t, n;
	return (
		(t = new Z({
			props: { counter: e[13], quoteIndex: e[0], autoPlaying: e[2], attribution: e[5].author }
		})),
		t.$on('click', function () {
			return e[10](e[13]);
		}),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			p(n, r) {
				e = n;
				const s = {};
				1 & r && (s.quoteIndex = e[0]), 4 & r && (s.autoPlaying = e[2]), t.$set(s);
			},
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function le(e) {
	let t,
		$,
		m,
		p,
		d,
		b,
		V,
		L,
		N,
		M,
		C,
		H,
		G,
		J,
		Q,
		R = e[5],
		U = se(e),
		W = _,
		z = [];
	for (let n = 0; n < W.length; n += 1) z[n] = ae(re(e, W, n));
	const F = (e) =>
		S(z[e], 1, 1, () => {
			z[e] = null;
		});
	function K(t) {
		e[11](t);
	}
	let X = {};
	return (
		void 0 !== e[1] && (X.switchOn = e[1]),
		(C = new ne({ props: X })),
		P.push(() => j(C, 'switchOn', K)),
		C.$on('change', e[8]),
		{
			c() {
				(t = r('div')),
					U.c(),
					($ = a()),
					(m = r('span')),
					(p = s('❮')),
					(d = a()),
					(b = r('span')),
					(V = s('❯')),
					(L = a()),
					(N = r('div'));
				for (let e = 0; e < z.length; e += 1) z[e].c();
				(M = a()), x(C.$$.fragment), this.h();
			},
			l(e) {
				t = l(e, 'DIV', { class: !0 });
				var n = o(t);
				U.l(n), ($ = u(n)), (m = l(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var r = o(m);
				(p = c(r, '❮')),
					r.forEach(i),
					(d = u(n)),
					(b = l(n, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = o(b);
				(V = c(s, '❯')), s.forEach(i), n.forEach(i), (L = u(e)), (N = l(e, 'DIV', { class: !0 }));
				var a = o(N);
				for (let t = 0; t < z.length; t += 1) z[t].l(a);
				(M = u(a)), q(C.$$.fragment, a), a.forEach(i), this.h();
			},
			h() {
				f(m, 'href', '#prev'),
					f(m, 'class', 'prev svelte-5g8lv0'),
					f(m, 'title', 'previous quote'),
					v(m, 'not-clickable', e[2]),
					f(b, 'href', '#next'),
					f(b, 'class', 'next svelte-5g8lv0'),
					f(b, 'title', 'next quote'),
					v(b, 'not-clickable', e[2]),
					f(t, 'class', 'slideshow-container svelte-5g8lv0'),
					f(N, 'class', 'dot-container svelte-5g8lv0');
			},
			m(n, r) {
				h(n, t, r),
					U.m(t, null),
					g(t, $),
					g(t, m),
					g(m, p),
					g(t, d),
					g(t, b),
					g(b, V),
					h(n, L, r),
					h(n, N, r);
				for (let e = 0; e < z.length; e += 1) z[e].m(N, null);
				g(N, M),
					E(C, N, null),
					(G = !0),
					J || ((Q = [y(m, 'click', e[7]), y(b, 'click', e[6])]), (J = !0));
			},
			p(e, [r]) {
				if (
					(32 & r && n(R, (R = e[5]))
						? (A(), S(U, 1, 1, k), D(), (U = se(e)), U.c(), T(U), U.m(t, $))
						: U.p(e, r),
					4 & r && v(m, 'not-clickable', e[2]),
					4 & r && v(b, 'not-clickable', e[2]),
					5 & r)
				) {
					let t;
					for (W = _, t = 0; t < W.length; t += 1) {
						const n = re(e, W, t);
						z[t]
							? (z[t].p(n, r), T(z[t], 1))
							: ((z[t] = ae(n)), z[t].c(), T(z[t], 1), z[t].m(N, M));
					}
					for (A(), t = W.length; t < z.length; t += 1) F(t);
					D();
				}
				const s = {};
				!H && 2 & r && ((H = !0), (s.switchOn = e[1]), O(() => (H = !1))), C.$set(s);
			},
			i(e) {
				if (!G) {
					T(U);
					for (let e = 0; e < W.length; e += 1) T(z[e]);
					T(C.$$.fragment, e), (G = !0);
				}
			},
			o(e) {
				S(U), (z = z.filter(Boolean));
				for (let t = 0; t < z.length; t += 1) S(z[t]);
				S(C.$$.fragment, e), (G = !1);
			},
			d(e) {
				e && i(t), U.d(e), e && i(L), e && i(N), B(z, e), I(C), (J = !1), w(Q);
			}
		}
	);
}
function oe(e, t, n) {
	let r,
		s,
		a,
		l = 0;
	const o = () => {
		n(0, l === _.length - 1 ? (l = 0) : (l += 1));
	};
	let c,
		i = !1,
		u = !1;
	return (
		(e.$$.update = () => {
			1 & e.$$.dirty && console.log(l),
				1 & e.$$.dirty && n(5, (r = _[l].quote)),
				1 & e.$$.dirty && n(3, (s = _[l].author)),
				1 & e.$$.dirty && n(4, (a = _[l].image)),
				1 & e.$$.dirty && console.log(l),
				512 & e.$$.dirty && console.log(c);
		}),
		[
			l,
			i,
			u,
			s,
			a,
			r,
			o,
			() => {
				n(0, 0 === l ? (l = _.length - 1) : (l -= 1));
			},
			() => {
				i ? (n(9, (c = setInterval(o, 5e3))), n(2, (u = !0))) : (clearInterval(c), n(2, (u = !1)));
			},
			c,
			(e) => n(0, (l = e)),
			function (e) {
				(i = e), n(1, i);
			}
		]
	);
}
class ce extends e {
	constructor(e) {
		super(), t(this, e, oe, le, n, {});
	}
}
const ie = [
	{ skill: 'HTML / CSS-Sass / SVG', percent: 85, color: 'red', delTime: 0 },
	{ skill: 'JavaScript / Svelte', percent: 50, color: 'darkorange', delTime: 1e3 },
	{ skill: 'Blender / Python Scripting', percent: 35, color: 'green', delTime: 1500 },
	{ skill: '3D Printing', percent: 65, color: 'rebeccapurple', delTime: 2500 },
	{ skill: 'Three JS', percent: 28, color: 'black', delTime: 2500 }
];
function ue(e) {
	return '[object Date]' === Object.prototype.toString.call(e);
}
function fe(e, t) {
	if (e === t || e != e) return () => e;
	const n = typeof e;
	if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
		throw new Error('Cannot interpolate values of different type');
	if (Array.isArray(e)) {
		const n = t.map((t, n) => fe(e[n], t));
		return (e) => n.map((t) => t(e));
	}
	if ('object' === n) {
		if (!e || !t) throw new Error('Object cannot be null');
		if (ue(e) && ue(t)) {
			e = e.getTime();
			const n = (t = t.getTime()) - e;
			return (t) => new Date(e + t * n);
		}
		const n = Object.keys(t),
			r = {};
		return (
			n.forEach((n) => {
				r[n] = fe(e[n], t[n]);
			}),
			(e) => {
				const t = {};
				return (
					n.forEach((n) => {
						t[n] = r[n](e);
					}),
					t
				);
			}
		);
	}
	if ('number' === n) {
		const n = t - e;
		return (t) => e + t * n;
	}
	throw new Error(`Cannot interpolate ${n} values`);
}
function $e(e) {
	let t, n, p, d, v, y, b;
	return {
		c() {
			(t = r('div')),
				(n = r('span')),
				(p = s(e[0])),
				(d = a()),
				(v = r('div')),
				(y = s(e[1])),
				(b = s('%')),
				this.h();
		},
		l(r) {
			t = l(r, 'DIV', { class: !0 });
			var s = o(t);
			n = l(s, 'SPAN', { class: !0 });
			var a = o(n);
			(p = c(a, e[0])), a.forEach(i), (d = u(s)), (v = l(s, 'DIV', { class: !0, style: !0 }));
			var f = o(v);
			(y = c(f, e[1])), (b = c(f, '%')), f.forEach(i), s.forEach(i), this.h();
		},
		h() {
			f(n, 'class', 'skill svelte-1i1nua6'),
				f(v, 'class', 'skills svelte-1i1nua6'),
				$(v, 'width', e[3] + '%'),
				$(v, 'background-color', e[2]),
				f(t, 'class', 'container svelte-1i1nua6');
		},
		m(e, r) {
			h(e, t, r), g(t, n), g(n, p), g(t, d), g(t, v), g(v, y), g(v, b);
		},
		p(e, [t]) {
			1 & t && m(p, e[0]),
				2 & t && m(y, e[1]),
				8 & t && $(v, 'width', e[3] + '%'),
				4 & t && $(v, 'background-color', e[2]);
		},
		i: k,
		o: k,
		d(e) {
			e && i(t);
		}
	};
}
function he(e, t, n) {
	let r,
		{ skill: s } = t,
		{ percent: a } = t,
		{ color: l } = t,
		{ delTime: o } = t;
	const c = (function (e, t = {}) {
		const n = U(e);
		let r,
			s = e;
		function a(a, l) {
			if (null == e) return n.set((e = a)), Promise.resolve();
			s = a;
			let o = r,
				c = !1,
				{ delay: i = 0, duration: u = 400, easing: f = M, interpolate: $ = fe } = V(V({}, t), l);
			if (0 === u) return o && (o.abort(), (o = null)), n.set((e = s)), Promise.resolve();
			const h = L() + i;
			let g;
			return (
				(r = N((t) => {
					if (t < h) return !0;
					c || ((g = $(e, a)), 'function' == typeof u && (u = u(e, a)), (c = !0)),
						o && (o.abort(), (o = null));
					const r = t - h;
					return r > u ? (n.set((e = a)), !1) : (n.set((e = g(f(r / u)))), !0);
				})),
				r.promise
			);
		}
		return { set: a, update: (t, n) => a(t(s, e), n), subscribe: n.subscribe };
	})(30, { delay: o, duration: 2e3, easing: Q });
	return (
		C(e, c, (e) => n(3, (r = e))),
		c.set(a),
		(e.$$set = (e) => {
			'skill' in e && n(0, (s = e.skill)),
				'percent' in e && n(1, (a = e.percent)),
				'color' in e && n(2, (l = e.color)),
				'delTime' in e && n(5, (o = e.delTime));
		}),
		[s, a, l, r, c, o]
	);
}
class ge extends e {
	constructor(e) {
		super(), t(this, e, he, $e, n, { skill: 0, percent: 1, color: 2, delTime: 5 });
	}
}
function me(e, t, n) {
	const r = e.slice();
	return (r[0] = t[n].skill), (r[1] = t[n].percent), (r[2] = t[n].color), (r[3] = t[n].delTime), r;
}
function pe(e) {
	let t, n;
	return (
		(t = new ge({ props: { skill: e[0], percent: e[1], color: e[2], delTime: e[3] } })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			p: k,
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function de(e) {
	let t,
		n,
		f,
		$,
		m,
		p = ie,
		d = [];
	for (let r = 0; r < p.length; r += 1) d[r] = pe(me(e, p, r));
	const v = (e) =>
		S(d[e], 1, 1, () => {
			d[e] = null;
		});
	return {
		c() {
			(t = r('section')), (n = r('h2')), (f = s('Technical Skills')), ($ = a());
			for (let e = 0; e < d.length; e += 1) d[e].c();
		},
		l(e) {
			t = l(e, 'SECTION', {});
			var r = o(t);
			n = l(r, 'H2', {});
			var s = o(n);
			(f = c(s, 'Technical Skills')), s.forEach(i), ($ = u(r));
			for (let t = 0; t < d.length; t += 1) d[t].l(r);
			r.forEach(i);
		},
		m(e, r) {
			h(e, t, r), g(t, n), g(n, f), g(t, $);
			for (let n = 0; n < d.length; n += 1) d[n].m(t, null);
			m = !0;
		},
		p(e, [n]) {
			if (0 & n) {
				let r;
				for (p = ie, r = 0; r < p.length; r += 1) {
					const s = me(e, p, r);
					d[r]
						? (d[r].p(s, n), T(d[r], 1))
						: ((d[r] = pe(s)), d[r].c(), T(d[r], 1), d[r].m(t, null));
				}
				for (A(), r = p.length; r < d.length; r += 1) v(r);
				D();
			}
		},
		i(e) {
			if (!m) {
				for (let e = 0; e < p.length; e += 1) T(d[e]);
				m = !0;
			}
		},
		o(e) {
			d = d.filter(Boolean);
			for (let t = 0; t < d.length; t += 1) S(d[t]);
			m = !1;
		},
		d(e) {
			e && i(t), B(d, e);
		}
	};
}
class ve extends e {
	constructor(e) {
		super(), t(this, e, null, de, n, {});
	}
}
const ye = (e) => ({}),
	ke = (e) => ({}),
	be = (e) => ({}),
	we = (e) => ({}),
	xe = (e) => ({}),
	qe = (e) => ({});
function Ee(e) {
	let t;
	const n = e[6].hasimage,
		s = G(n, e, e[5], qe),
		a =
			s ||
			(function (e) {
				let t, n;
				return {
					c() {
						(t = r('img')), this.h();
					},
					l(e) {
						(t = l(e, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
					},
					h() {
						t.src !== (n = e[2]) && f(t, 'src', n),
							f(t, 'alt', 'Imagen'),
							f(t, 'class', 'svelte-nnqgyc');
					},
					m(e, n) {
						h(e, t, n);
					},
					p(e, r) {
						4 & r && t.src !== (n = e[2]) && f(t, 'src', n);
					},
					d(e) {
						e && i(t);
					}
				};
			})(e);
	return {
		c() {
			a && a.c();
		},
		l(e) {
			a && a.l(e);
		},
		m(e, n) {
			a && a.m(e, n), (t = !0);
		},
		p(e, t) {
			s ? s.p && 32 & t && H(s, n, e, e[5], t, xe, qe) : a && a.p && 4 & t && a.p(e, t);
		},
		i(e) {
			t || (T(a, e), (t = !0));
		},
		o(e) {
			S(a, e), (t = !1);
		},
		d(e) {
			a && a.d(e);
		}
	};
}
function Te(e) {
	let t,
		n,
		$,
		p,
		d,
		v,
		y,
		k,
		b,
		w,
		x,
		q,
		E,
		I = e[2] && Ee(e);
	const P = e[6].hasvideo,
		j = G(P, e, e[5], we),
		O = e[6].hasSVG,
		B = G(O, e, e[5], ke),
		V = e[6].default,
		L = G(V, e, e[5], null);
	return {
		c() {
			(t = r('div')),
				(n = r('div')),
				I && I.c(),
				($ = a()),
				j && j.c(),
				(p = a()),
				B && B.c(),
				(d = a()),
				(v = r('div')),
				(y = r('h2')),
				(k = s(e[0])),
				(b = a()),
				(w = r('p')),
				(x = a()),
				L && L.c(),
				this.h();
		},
		l(r) {
			t = l(r, 'DIV', { class: !0 });
			var s = o(t);
			n = l(s, 'DIV', { class: !0 });
			var a = o(n);
			I && I.l(a),
				($ = u(a)),
				j && j.l(a),
				(p = u(a)),
				B && B.l(a),
				a.forEach(i),
				(d = u(s)),
				(v = l(s, 'DIV', { class: !0 }));
			var f = o(v);
			y = l(f, 'H2', { class: !0 });
			var h = o(y);
			(k = c(h, e[0])),
				h.forEach(i),
				(b = u(f)),
				(w = l(f, 'P', { class: !0 })),
				o(w).forEach(i),
				(x = u(f)),
				L && L.l(f),
				f.forEach(i),
				s.forEach(i),
				this.h();
		},
		h() {
			f(n, 'class', 'BannerMedia svelte-nnqgyc'),
				f(y, 'class', 'svelte-nnqgyc'),
				f(w, 'class', 'svelte-nnqgyc'),
				f(v, 'class', 'BannerText svelte-nnqgyc'),
				f(t, 'class', (q = 'Banner ' + e[4][e[3]] + ' svelte-nnqgyc'));
		},
		m(r, s) {
			h(r, t, s),
				g(t, n),
				I && I.m(n, null),
				g(n, $),
				j && j.m(n, null),
				g(n, p),
				B && B.m(n, null),
				g(t, d),
				g(t, v),
				g(v, y),
				g(y, k),
				g(v, b),
				g(v, w),
				(w.innerHTML = e[1]),
				g(v, x),
				L && L.m(v, null),
				(E = !0);
		},
		p(e, [r]) {
			e[2]
				? I
					? (I.p(e, r), 4 & r && T(I, 1))
					: ((I = Ee(e)), I.c(), T(I, 1), I.m(n, $))
				: I &&
				  (A(),
				  S(I, 1, 1, () => {
						I = null;
				  }),
				  D()),
				j && j.p && 32 & r && H(j, P, e, e[5], r, be, we),
				B && B.p && 32 & r && H(B, O, e, e[5], r, ye, ke),
				(!E || 1 & r) && m(k, e[0]),
				(!E || 2 & r) && (w.innerHTML = e[1]),
				L && L.p && 32 & r && H(L, V, e, e[5], r, null, null),
				(!E || (8 & r && q !== (q = 'Banner ' + e[4][e[3]] + ' svelte-nnqgyc'))) &&
					f(t, 'class', q);
		},
		i(e) {
			E || (T(I), T(j, e), T(B, e), T(L, e), (E = !0));
		},
		o(e) {
			S(I), S(j, e), S(B, e), S(L, e), (E = !1);
		},
		d(e) {
			e && i(t), I && I.d(), j && j.d(e), B && B.d(e), L && L.d(e);
		}
	};
}
function Se(e, t, n) {
	let { $$slots: r = {}, $$scope: s } = t,
		{ title: a = '' } = t,
		{ text: l = '' } = t,
		{ img: o = '' } = t,
		{ variante: c = 0 } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && n(0, (a = e.title)),
				'text' in e && n(1, (l = e.text)),
				'img' in e && n(2, (o = e.img)),
				'variante' in e && n(3, (c = e.variante)),
				'$$scope' in e && n(5, (s = e.$$scope));
		}),
		[a, l, o, c, ['variante_0', 'variante_1'], s, r]
	);
}
class Ie extends e {
	constructor(e) {
		super(), t(this, e, Se, Te, n, { title: 0, text: 1, img: 2, variante: 3 });
	}
}
function Pe(e) {
	let t, n;
	return (
		(t = new R({ props: { variante: 1, text: 'cta text', url: '#' } })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			p: k,
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function je(e) {
	let t, n;
	return (
		(t = new Ie({
			props: {
				variante: 1,
				title: 'CTA Banner',
				text: 'Labore est temporibus odit, exercitationem et magnam',
				img: './img/bg1.jpg',
				$$slots: { default: [Pe] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			p(e, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: e }), t.$set(r);
			},
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
class Ae extends e {
	constructor(e) {
		super(), t(this, e, null, je, n, {});
	}
}
function De(e) {
	let t, n;
	return (
		(t = new ce({})),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Oe(e) {
	let t, n;
	return (
		(t = new ve({})),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Be(e) {
	let t, n;
	return (
		(t = new Ae({})),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e);
			},
			m(e, r) {
				E(t, e, r), (n = !0);
			},
			i(e) {
				n || (T(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				S(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Ve(e) {
	let t, n, r, s, l, o;
	return (
		(t = new W({
			props: { id: 'quoterotator', variante: 1, $$slots: { default: [De] }, $$scope: { ctx: e } }
		})),
		(r = new W({
			props: { id: 'skillsbar', variante: 0, $$slots: { default: [Oe] }, $$scope: { ctx: e } }
		})),
		(l = new W({
			props: { id: 'ctabanner', variante: 1, $$slots: { default: [Be] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				x(t.$$.fragment), (n = a()), x(r.$$.fragment), (s = a()), x(l.$$.fragment);
			},
			l(e) {
				q(t.$$.fragment, e), (n = u(e)), q(r.$$.fragment, e), (s = u(e)), q(l.$$.fragment, e);
			},
			m(e, a) {
				E(t, e, a), h(e, n, a), E(r, e, a), h(e, s, a), E(l, e, a), (o = !0);
			},
			p(e, [n]) {
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s);
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), r.$set(a);
				const o = {};
				1 & n && (o.$$scope = { dirty: n, ctx: e }), l.$set(o);
			},
			i(e) {
				o || (T(t.$$.fragment, e), T(r.$$.fragment, e), T(l.$$.fragment, e), (o = !0));
			},
			o(e) {
				S(t.$$.fragment, e), S(r.$$.fragment, e), S(l.$$.fragment, e), (o = !1);
			},
			d(e) {
				I(t, e), e && i(n), I(r, e), e && i(s), I(l, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Ve, n, {});
	}
}
