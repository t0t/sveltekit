import {
	K as t,
	S as e,
	i as n,
	s as r,
	e as s,
	t as a,
	j as l,
	c as o,
	a as c,
	b as i,
	d as u,
	l as f,
	o as $,
	L as h,
	f as g,
	g as m,
	h as d,
	M as p,
	N as v,
	G as y,
	H as k,
	n as b,
	O as w,
	P as x,
	p as q,
	q as E,
	r as T,
	w as S,
	x as I,
	y as P,
	Q as j,
	R as A,
	C as D,
	D as O,
	T as B,
	J as V,
	m as L,
	U as N,
	V as C,
	W as M,
	F as H,
	E as G
} from '../chunks/index-a07a4dd8.js';
import { w as J } from '../chunks/index-4e5ad634.js';
import { B as Q } from '../chunks/Button-6edc0c58.js';
import { S as R } from '../chunks/Section-114a1592.js';
const U = [
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
function W(t) {
	const e = 2.5949095;
	return (t *= 2) < 1
		? t * t * ((e + 1) * t - e) * 0.5
		: 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
}
function _(e, { delay: n = 0, duration: r = 400, easing: s = t } = {}) {
	const a = +getComputedStyle(e).opacity;
	return { delay: n, duration: r, easing: s, css: (t) => 'opacity: ' + t * a };
}
function z(t) {
	let e, n, r, y, k, b, w, x, q;
	return {
		c() {
			(e = s('div')),
				(n = s('q')),
				(r = a(t[0])),
				(y = l()),
				(k = s('p')),
				(b = a('—')),
				(w = a(t[1])),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0, style: !0 });
			var a = c(e);
			n = o(a, 'Q', { class: !0 });
			var l = c(n);
			(r = i(l, t[0])), l.forEach(u), (y = f(a)), (k = o(a, 'P', { class: !0 }));
			var $ = c(k);
			(b = i($, '—')), (w = i($, t[1])), $.forEach(u), a.forEach(u), this.h();
		},
		h() {
			$(n, 'class', 'svelte-1pfkgpk'),
				$(k, 'class', 'author svelte-1pfkgpk'),
				$(e, 'class', 'mySlides svelte-1pfkgpk'),
				h(e, 'background-image', 'url(' + t[2] + ')');
		},
		m(t, s) {
			g(t, e, s), m(e, n), m(n, r), m(e, y), m(e, k), m(k, b), m(k, w), (q = !0);
		},
		p(t, [n]) {
			(!q || 1 & n) && d(r, t[0]),
				(!q || 2 & n) && d(w, t[1]),
				(!q || 4 & n) && h(e, 'background-image', 'url(' + t[2] + ')');
		},
		i(t) {
			q ||
				(p(() => {
					x || (x = v(e, _, {}, !0)), x.run(1);
				}),
				(q = !0));
		},
		o(t) {
			x || (x = v(e, _, {}, !1)), x.run(0), (q = !1);
		},
		d(t) {
			t && u(e), t && x && x.end();
		}
	};
}
function F(t, e, n) {
	let { quote: r } = e,
		{ author: s } = e,
		{ image: a } = e;
	return (
		(t.$$set = (t) => {
			'quote' in t && n(0, (r = t.quote)),
				'author' in t && n(1, (s = t.author)),
				'image' in t && n(2, (a = t.image));
		}),
		[r, s, a]
	);
}
class K extends e {
	constructor(t) {
		super(), n(this, t, F, z, r, { quote: 0, author: 1, image: 2 });
	}
}
function X(t) {
	let e, n, r, a;
	return {
		c() {
			(e = s('span')), this.h();
		},
		l(t) {
			(e = o(t, 'SPAN', { class: !0, title: !0 })), c(e).forEach(u), this.h();
		},
		h() {
			$(e, 'class', 'dot svelte-1bg8uoz'),
				$(e, 'title', (n = `quote by ${t[2]}`)),
				y(e, 'active', t[0] === t[1]),
				y(e, 'not-clickable', t[3]);
		},
		m(n, s) {
			g(n, e, s), r || ((a = k(e, 'click', t[4])), (r = !0));
		},
		p(t, [r]) {
			4 & r && n !== (n = `quote by ${t[2]}`) && $(e, 'title', n),
				3 & r && y(e, 'active', t[0] === t[1]),
				8 & r && y(e, 'not-clickable', t[3]);
		},
		i: b,
		o: b,
		d(t) {
			t && u(e), (r = !1), a();
		}
	};
}
function Y(t, e, n) {
	let { quoteIndex: r } = e,
		{ counter: s } = e,
		{ attribution: a } = e,
		{ autoPlaying: l } = e;
	return (
		(t.$$set = (t) => {
			'quoteIndex' in t && n(0, (r = t.quoteIndex)),
				'counter' in t && n(1, (s = t.counter)),
				'attribution' in t && n(2, (a = t.attribution)),
				'autoPlaying' in t && n(3, (l = t.autoPlaying));
		}),
		[
			r,
			s,
			a,
			l,
			function (e) {
				w(t, e);
			}
		]
	);
}
class Z extends e {
	constructor(t) {
		super(), n(this, t, Y, X, r, { quoteIndex: 0, counter: 1, attribution: 2, autoPlaying: 3 });
	}
}
function tt(t) {
	let e, n, r, a, i, h, d;
	return {
		c() {
			(e = s('section')), (n = s('label')), (r = s('input')), (a = l()), (i = s('span')), this.h();
		},
		l(t) {
			e = o(t, 'SECTION', { id: !0, class: !0 });
			var s = c(e);
			n = o(s, 'LABEL', { class: !0 });
			var l = c(n);
			(r = o(l, 'INPUT', { type: !0, class: !0 })),
				(a = f(l)),
				(i = o(l, 'SPAN', { class: !0 })),
				c(i).forEach(u),
				l.forEach(u),
				s.forEach(u),
				this.h();
		},
		h() {
			$(r, 'type', 'checkbox'),
				$(r, 'class', 'svelte-qu5u5u'),
				$(i, 'class', 'slider round svelte-qu5u5u'),
				$(n, 'class', 'switch svelte-qu5u5u'),
				$(e, 'id', 'auto-play-cont'),
				$(e, 'class', 'svelte-qu5u5u');
		},
		m(s, l) {
			g(s, e, l),
				m(e, n),
				m(n, r),
				(r.checked = t[0]),
				m(n, a),
				m(n, i),
				h || ((d = [k(r, 'change', t[2]), k(r, 'change', t[1])]), (h = !0));
		},
		p(t, [e]) {
			1 & e && (r.checked = t[0]);
		},
		i: b,
		o: b,
		d(t) {
			t && u(e), (h = !1), x(d);
		}
	};
}
function et(t, e, n) {
	let { switchOn: r } = e;
	return (
		(t.$$set = (t) => {
			'switchOn' in t && n(0, (r = t.switchOn));
		}),
		[
			r,
			function (e) {
				w(t, e);
			},
			function () {
				(r = this.checked), n(0, r);
			}
		]
	);
}
class nt extends e {
	constructor(t) {
		super(), n(this, t, et, tt, r, { switchOn: 0 });
	}
}
function rt(t, e, n) {
	const r = t.slice();
	return (r[5] = e[n]), (r[13] = n), r;
}
function st(t) {
	let e, n;
	return (
		(e = new K({ props: { quote: t[5], author: t[3], image: t[4] } })),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			p(t, n) {
				const r = {};
				32 & n && (r.quote = t[5]),
					8 & n && (r.author = t[3]),
					16 & n && (r.image = t[4]),
					e.$set(r);
			},
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
function at(t) {
	let e, n;
	return (
		(e = new Z({
			props: { counter: t[13], quoteIndex: t[0], autoPlaying: t[2], attribution: t[5].author }
		})),
		e.$on('click', function () {
			return t[10](t[13]);
		}),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			p(n, r) {
				t = n;
				const s = {};
				1 & r && (s.quoteIndex = t[0]), 4 & r && (s.autoPlaying = t[2]), e.$set(s);
			},
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
function lt(t) {
	let e,
		n,
		h,
		d,
		p,
		v,
		w,
		L,
		N,
		C,
		M,
		H,
		G,
		J,
		Q,
		R = t[5],
		W = st(t),
		_ = U,
		z = [];
	for (let r = 0; r < _.length; r += 1) z[r] = at(rt(t, _, r));
	const F = (t) =>
		I(z[t], 1, 1, () => {
			z[t] = null;
		});
	function K(e) {
		t[11](e);
	}
	let X = {};
	return (
		void 0 !== t[1] && (X.switchOn = t[1]),
		(M = new nt({ props: X })),
		j.push(() => A(M, 'switchOn', K)),
		M.$on('change', t[8]),
		{
			c() {
				(e = s('div')),
					W.c(),
					(n = l()),
					(h = s('span')),
					(d = a('❮')),
					(p = l()),
					(v = s('span')),
					(w = a('❯')),
					(L = l()),
					(N = s('div'));
				for (let t = 0; t < z.length; t += 1) z[t].c();
				(C = l()), q(M.$$.fragment), this.h();
			},
			l(t) {
				e = o(t, 'DIV', { class: !0 });
				var r = c(e);
				W.l(r), (n = f(r)), (h = o(r, 'SPAN', { href: !0, class: !0, title: !0 }));
				var s = c(h);
				(d = i(s, '❮')),
					s.forEach(u),
					(p = f(r)),
					(v = o(r, 'SPAN', { href: !0, class: !0, title: !0 }));
				var a = c(v);
				(w = i(a, '❯')), a.forEach(u), r.forEach(u), (L = f(t)), (N = o(t, 'DIV', { class: !0 }));
				var l = c(N);
				for (let e = 0; e < z.length; e += 1) z[e].l(l);
				(C = f(l)), E(M.$$.fragment, l), l.forEach(u), this.h();
			},
			h() {
				$(h, 'href', '#prev'),
					$(h, 'class', 'prev svelte-5g8lv0'),
					$(h, 'title', 'previous quote'),
					y(h, 'not-clickable', t[2]),
					$(v, 'href', '#next'),
					$(v, 'class', 'next svelte-5g8lv0'),
					$(v, 'title', 'next quote'),
					y(v, 'not-clickable', t[2]),
					$(e, 'class', 'slideshow-container svelte-5g8lv0'),
					$(N, 'class', 'dot-container svelte-5g8lv0');
			},
			m(r, s) {
				g(r, e, s),
					W.m(e, null),
					m(e, n),
					m(e, h),
					m(h, d),
					m(e, p),
					m(e, v),
					m(v, w),
					g(r, L, s),
					g(r, N, s);
				for (let t = 0; t < z.length; t += 1) z[t].m(N, null);
				m(N, C),
					T(M, N, null),
					(G = !0),
					J || ((Q = [k(h, 'click', t[7]), k(v, 'click', t[6])]), (J = !0));
			},
			p(t, [s]) {
				if (
					(32 & s && r(R, (R = t[5]))
						? (D(), I(W, 1, 1, b), O(), (W = st(t)), W.c(), S(W), W.m(e, n))
						: W.p(t, s),
					4 & s && y(h, 'not-clickable', t[2]),
					4 & s && y(v, 'not-clickable', t[2]),
					5 & s)
				) {
					let e;
					for (_ = U, e = 0; e < _.length; e += 1) {
						const n = rt(t, _, e);
						z[e]
							? (z[e].p(n, s), S(z[e], 1))
							: ((z[e] = at(n)), z[e].c(), S(z[e], 1), z[e].m(N, C));
					}
					for (D(), e = _.length; e < z.length; e += 1) F(e);
					O();
				}
				const a = {};
				!H && 2 & s && ((H = !0), (a.switchOn = t[1]), B(() => (H = !1))), M.$set(a);
			},
			i(t) {
				if (!G) {
					S(W);
					for (let t = 0; t < _.length; t += 1) S(z[t]);
					S(M.$$.fragment, t), (G = !0);
				}
			},
			o(t) {
				I(W), (z = z.filter(Boolean));
				for (let e = 0; e < z.length; e += 1) I(z[e]);
				I(M.$$.fragment, t), (G = !1);
			},
			d(t) {
				t && u(e), W.d(t), t && u(L), t && u(N), V(z, t), P(M), (J = !1), x(Q);
			}
		}
	);
}
function ot(t, e, n) {
	let r,
		s,
		a,
		l = 0;
	const o = () => {
		n(0, l === U.length - 1 ? (l = 0) : (l += 1));
	};
	let c,
		i = !1,
		u = !1;
	return (
		(t.$$.update = () => {
			1 & t.$$.dirty && console.log(l),
				1 & t.$$.dirty && n(5, (r = U[l].quote)),
				1 & t.$$.dirty && n(3, (s = U[l].author)),
				1 & t.$$.dirty && n(4, (a = U[l].image)),
				1 & t.$$.dirty && console.log(l),
				512 & t.$$.dirty && console.log(c);
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
				n(0, 0 === l ? (l = U.length - 1) : (l -= 1));
			},
			() => {
				i ? (n(9, (c = setInterval(o, 5e3))), n(2, (u = !0))) : (clearInterval(c), n(2, (u = !1)));
			},
			c,
			(t) => n(0, (l = t)),
			function (t) {
				(i = t), n(1, i);
			}
		]
	);
}
class ct extends e {
	constructor(t) {
		super(), n(this, t, ot, lt, r, {});
	}
}
const it = [
	{ skill: 'HTML / CSS-Sass / SVG', percent: 85, color: 'red', delTime: 0 },
	{ skill: 'JavaScript / Svelte', percent: 50, color: 'darkorange', delTime: 1e3 },
	{ skill: 'Blender / Python Scripting', percent: 35, color: 'green', delTime: 1500 },
	{ skill: '3D Printing', percent: 65, color: 'rebeccapurple', delTime: 2500 },
	{ skill: 'Three JS', percent: 28, color: 'black', delTime: 2500 }
];
function ut(t) {
	return '[object Date]' === Object.prototype.toString.call(t);
}
function ft(t, e) {
	if (t === e || t != t) return () => t;
	const n = typeof t;
	if (n !== typeof e || Array.isArray(t) !== Array.isArray(e))
		throw new Error('Cannot interpolate values of different type');
	if (Array.isArray(t)) {
		const n = e.map((e, n) => ft(t[n], e));
		return (t) => n.map((e) => e(t));
	}
	if ('object' === n) {
		if (!t || !e) throw new Error('Object cannot be null');
		if (ut(t) && ut(e)) {
			t = t.getTime();
			const n = (e = e.getTime()) - t;
			return (e) => new Date(t + e * n);
		}
		const n = Object.keys(e),
			r = {};
		return (
			n.forEach((n) => {
				r[n] = ft(t[n], e[n]);
			}),
			(t) => {
				const e = {};
				return (
					n.forEach((n) => {
						e[n] = r[n](t);
					}),
					e
				);
			}
		);
	}
	if ('number' === n) {
		const n = e - t;
		return (e) => t + e * n;
	}
	throw new Error(`Cannot interpolate ${n} values`);
}
function $t(t) {
	let e, n, r, p, v, y, k;
	return {
		c() {
			(e = s('div')),
				(n = s('span')),
				(r = a(t[0])),
				(p = l()),
				(v = s('div')),
				(y = a(t[1])),
				(k = a('%')),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0 });
			var a = c(e);
			n = o(a, 'SPAN', { class: !0 });
			var l = c(n);
			(r = i(l, t[0])), l.forEach(u), (p = f(a)), (v = o(a, 'DIV', { class: !0, style: !0 }));
			var $ = c(v);
			(y = i($, t[1])), (k = i($, '%')), $.forEach(u), a.forEach(u), this.h();
		},
		h() {
			$(n, 'class', 'skill svelte-1i1nua6'),
				$(v, 'class', 'skills svelte-1i1nua6'),
				h(v, 'width', t[3] + '%'),
				h(v, 'background-color', t[2]),
				$(e, 'class', 'container svelte-1i1nua6');
		},
		m(t, s) {
			g(t, e, s), m(e, n), m(n, r), m(e, p), m(e, v), m(v, y), m(v, k);
		},
		p(t, [e]) {
			1 & e && d(r, t[0]),
				2 & e && d(y, t[1]),
				8 & e && h(v, 'width', t[3] + '%'),
				4 & e && h(v, 'background-color', t[2]);
		},
		i: b,
		o: b,
		d(t) {
			t && u(e);
		}
	};
}
function ht(e, n, r) {
	let s,
		{ skill: a } = n,
		{ percent: l } = n,
		{ color: o } = n,
		{ delTime: c } = n;
	const i = (function (e, n = {}) {
		const r = J(e);
		let s,
			a = e;
		function l(l, o) {
			if (null == e) return r.set((e = l)), Promise.resolve();
			a = l;
			let c = s,
				i = !1,
				{ delay: u = 0, duration: f = 400, easing: $ = t, interpolate: h = ft } = L(L({}, n), o);
			if (0 === f) return c && (c.abort(), (c = null)), r.set((e = a)), Promise.resolve();
			const g = N() + u;
			let m;
			return (
				(s = C((t) => {
					if (t < g) return !0;
					i || ((m = h(e, l)), 'function' == typeof f && (f = f(e, l)), (i = !0)),
						c && (c.abort(), (c = null));
					const n = t - g;
					return n > f ? (r.set((e = l)), !1) : (r.set((e = m($(n / f)))), !0);
				})),
				s.promise
			);
		}
		return { set: l, update: (t, n) => l(t(a, e), n), subscribe: r.subscribe };
	})(30, { delay: c, duration: 2e3, easing: W });
	return (
		M(e, i, (t) => r(3, (s = t))),
		i.set(l),
		(e.$$set = (t) => {
			'skill' in t && r(0, (a = t.skill)),
				'percent' in t && r(1, (l = t.percent)),
				'color' in t && r(2, (o = t.color)),
				'delTime' in t && r(5, (c = t.delTime));
		}),
		[a, l, o, s, i, c]
	);
}
class gt extends e {
	constructor(t) {
		super(), n(this, t, ht, $t, r, { skill: 0, percent: 1, color: 2, delTime: 5 });
	}
}
function mt(t, e, n) {
	const r = t.slice();
	return (r[0] = e[n].skill), (r[1] = e[n].percent), (r[2] = e[n].color), (r[3] = e[n].delTime), r;
}
function dt(t) {
	let e, n;
	return (
		(e = new gt({ props: { skill: t[0], percent: t[1], color: t[2], delTime: t[3] } })),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			p: b,
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
function pt(t) {
	let e,
		n,
		r,
		$,
		h,
		d = it,
		p = [];
	for (let s = 0; s < d.length; s += 1) p[s] = dt(mt(t, d, s));
	const v = (t) =>
		I(p[t], 1, 1, () => {
			p[t] = null;
		});
	return {
		c() {
			(e = s('section')), (n = s('h2')), (r = a('Technical Skills')), ($ = l());
			for (let t = 0; t < p.length; t += 1) p[t].c();
		},
		l(t) {
			e = o(t, 'SECTION', {});
			var s = c(e);
			n = o(s, 'H2', {});
			var a = c(n);
			(r = i(a, 'Technical Skills')), a.forEach(u), ($ = f(s));
			for (let e = 0; e < p.length; e += 1) p[e].l(s);
			s.forEach(u);
		},
		m(t, s) {
			g(t, e, s), m(e, n), m(n, r), m(e, $);
			for (let n = 0; n < p.length; n += 1) p[n].m(e, null);
			h = !0;
		},
		p(t, [n]) {
			if (0 & n) {
				let r;
				for (d = it, r = 0; r < d.length; r += 1) {
					const s = mt(t, d, r);
					p[r]
						? (p[r].p(s, n), S(p[r], 1))
						: ((p[r] = dt(s)), p[r].c(), S(p[r], 1), p[r].m(e, null));
				}
				for (D(), r = d.length; r < p.length; r += 1) v(r);
				O();
			}
		},
		i(t) {
			if (!h) {
				for (let t = 0; t < d.length; t += 1) S(p[t]);
				h = !0;
			}
		},
		o(t) {
			p = p.filter(Boolean);
			for (let e = 0; e < p.length; e += 1) I(p[e]);
			h = !1;
		},
		d(t) {
			t && u(e), V(p, t);
		}
	};
}
class vt extends e {
	constructor(t) {
		super(), n(this, t, null, pt, r, {});
	}
}
const yt = (t) => ({}),
	kt = (t) => ({}),
	bt = (t) => ({}),
	wt = (t) => ({}),
	xt = (t) => ({}),
	qt = (t) => ({});
function Et(t) {
	let e;
	const n = t[6].hasimage,
		r = G(n, t, t[5], qt),
		a =
			r ||
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
							$(e, 'class', 'svelte-nnqgyc');
					},
					m(t, n) {
						g(t, e, n);
					},
					p(t, r) {
						4 & r && e.src !== (n = t[2]) && $(e, 'src', n);
					},
					d(t) {
						t && u(e);
					}
				};
			})(t);
	return {
		c() {
			a && a.c();
		},
		l(t) {
			a && a.l(t);
		},
		m(t, n) {
			a && a.m(t, n), (e = !0);
		},
		p(t, e) {
			r ? r.p && 32 & e && H(r, n, t, t[5], e, xt, qt) : a && a.p && 4 & e && a.p(t, e);
		},
		i(t) {
			e || (S(a, t), (e = !0));
		},
		o(t) {
			I(a, t), (e = !1);
		},
		d(t) {
			a && a.d(t);
		}
	};
}
function Tt(t) {
	let e,
		n,
		r,
		h,
		p,
		v,
		y,
		k,
		b,
		w,
		x,
		q,
		E,
		T = t[2] && Et(t);
	const P = t[6].hasvideo,
		j = G(P, t, t[5], wt),
		A = t[6].hasSVG,
		B = G(A, t, t[5], kt),
		V = t[6].default,
		L = G(V, t, t[5], null);
	return {
		c() {
			(e = s('div')),
				(n = s('div')),
				T && T.c(),
				(r = l()),
				j && j.c(),
				(h = l()),
				B && B.c(),
				(p = l()),
				(v = s('div')),
				(y = s('h2')),
				(k = a(t[0])),
				(b = l()),
				(w = s('p')),
				(x = l()),
				L && L.c(),
				this.h();
		},
		l(s) {
			e = o(s, 'DIV', { class: !0 });
			var a = c(e);
			n = o(a, 'DIV', { class: !0 });
			var l = c(n);
			T && T.l(l),
				(r = f(l)),
				j && j.l(l),
				(h = f(l)),
				B && B.l(l),
				l.forEach(u),
				(p = f(a)),
				(v = o(a, 'DIV', { class: !0 }));
			var $ = c(v);
			y = o($, 'H2', { class: !0 });
			var g = c(y);
			(k = i(g, t[0])),
				g.forEach(u),
				(b = f($)),
				(w = o($, 'P', { class: !0 })),
				c(w).forEach(u),
				(x = f($)),
				L && L.l($),
				$.forEach(u),
				a.forEach(u),
				this.h();
		},
		h() {
			$(n, 'class', 'BannerMedia svelte-nnqgyc'),
				$(y, 'class', 'svelte-nnqgyc'),
				$(w, 'class', 'svelte-nnqgyc'),
				$(v, 'class', 'BannerText svelte-nnqgyc'),
				$(e, 'class', (q = 'Banner ' + t[4][t[3]] + ' svelte-nnqgyc'));
		},
		m(s, a) {
			g(s, e, a),
				m(e, n),
				T && T.m(n, null),
				m(n, r),
				j && j.m(n, null),
				m(n, h),
				B && B.m(n, null),
				m(e, p),
				m(e, v),
				m(v, y),
				m(y, k),
				m(v, b),
				m(v, w),
				(w.innerHTML = t[1]),
				m(v, x),
				L && L.m(v, null),
				(E = !0);
		},
		p(t, [s]) {
			t[2]
				? T
					? (T.p(t, s), 4 & s && S(T, 1))
					: ((T = Et(t)), T.c(), S(T, 1), T.m(n, r))
				: T &&
				  (D(),
				  I(T, 1, 1, () => {
						T = null;
				  }),
				  O()),
				j && j.p && 32 & s && H(j, P, t, t[5], s, bt, wt),
				B && B.p && 32 & s && H(B, A, t, t[5], s, yt, kt),
				(!E || 1 & s) && d(k, t[0]),
				(!E || 2 & s) && (w.innerHTML = t[1]),
				L && L.p && 32 & s && H(L, V, t, t[5], s, null, null),
				(!E || (8 & s && q !== (q = 'Banner ' + t[4][t[3]] + ' svelte-nnqgyc'))) &&
					$(e, 'class', q);
		},
		i(t) {
			E || (S(T), S(j, t), S(B, t), S(L, t), (E = !0));
		},
		o(t) {
			I(T), I(j, t), I(B, t), I(L, t), (E = !1);
		},
		d(t) {
			t && u(e), T && T.d(), j && j.d(t), B && B.d(t), L && L.d(t);
		}
	};
}
function St(t, e, n) {
	let { $$slots: r = {}, $$scope: s } = e,
		{ title: a = '' } = e,
		{ text: l = '' } = e,
		{ img: o = '' } = e,
		{ variante: c = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && n(0, (a = t.title)),
				'text' in t && n(1, (l = t.text)),
				'img' in t && n(2, (o = t.img)),
				'variante' in t && n(3, (c = t.variante)),
				'$$scope' in t && n(5, (s = t.$$scope));
		}),
		[a, l, o, c, ['variante_0', 'variante_1'], s, r]
	);
}
class It extends e {
	constructor(t) {
		super(), n(this, t, St, Tt, r, { title: 0, text: 1, img: 2, variante: 3 });
	}
}
function Pt(t) {
	let e, n;
	return (
		(e = new Q({ props: { variante: 1, text: 'cta text', url: '#' } })),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			p: b,
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
	let e, n;
	return (
		(e = new It({
			props: {
				variante: 1,
				title: 'CTA Banner',
				text: 'Labore est temporibus odit, exercitationem et magnam',
				img: './img/bg1.jpg',
				$$slots: { default: [Pt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			p(t, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
			},
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
class At extends e {
	constructor(t) {
		super(), n(this, t, null, jt, r, {});
	}
}
function Dt(t) {
	let e, n;
	return (
		(e = new ct({})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
function Ot(t) {
	let e, n;
	return (
		(e = new vt({})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
function Bt(t) {
	let e, n;
	return (
		(e = new At({})),
		{
			c() {
				q(e.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t);
			},
			m(t, r) {
				T(e, t, r), (n = !0);
			},
			i(t) {
				n || (S(e.$$.fragment, t), (n = !0));
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
function Vt(t) {
	let e, n, r, s, a, o;
	return (
		(e = new R({
			props: { id: 'quoterotator', variante: 1, $$slots: { default: [Dt] }, $$scope: { ctx: t } }
		})),
		(r = new R({
			props: { id: 'skillsbar', variante: 0, $$slots: { default: [Ot] }, $$scope: { ctx: t } }
		})),
		(a = new R({
			props: { id: 'ctabanner', variante: 1, $$slots: { default: [Bt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				q(e.$$.fragment), (n = l()), q(r.$$.fragment), (s = l()), q(a.$$.fragment);
			},
			l(t) {
				E(e.$$.fragment, t), (n = f(t)), E(r.$$.fragment, t), (s = f(t)), E(a.$$.fragment, t);
			},
			m(t, l) {
				T(e, t, l), g(t, n, l), T(r, t, l), g(t, s, l), T(a, t, l), (o = !0);
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: t }), r.$set(l);
				const o = {};
				1 & n && (o.$$scope = { dirty: n, ctx: t }), a.$set(o);
			},
			i(t) {
				o || (S(e.$$.fragment, t), S(r.$$.fragment, t), S(a.$$.fragment, t), (o = !0));
			},
			o(t) {
				I(e.$$.fragment, t), I(r.$$.fragment, t), I(a.$$.fragment, t), (o = !1);
			},
			d(t) {
				P(e, t), t && u(n), P(r, t), t && u(s), P(a, t);
			}
		}
	);
}
export default class extends e {
	constructor(t) {
		super(), n(this, t, null, Vt, r, {});
	}
}
