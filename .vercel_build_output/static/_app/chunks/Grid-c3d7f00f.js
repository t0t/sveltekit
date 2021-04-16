import {
	S as s,
	i as l,
	s as a,
	k as e,
	f as c,
	C as t,
	x as r,
	D as o,
	w as n,
	d as i,
	t as d,
	b as u,
	n as v,
	M as p,
	e as b,
	j as h,
	c as f,
	a as m,
	l as x,
	o as q,
	I as _,
	g as D,
	O as I
} from './index-d91e1ed8.js';
import './Grid.svelte-8e9d6b69.js';
const E = (s) => ({}),
	V = (s) => ({}),
	G = (s) => ({}),
	$ = (s) => ({}),
	j = (s) => ({}),
	g = (s) => ({}),
	y = (s) => ({}),
	k = (s) => ({}),
	w = (s) => ({}),
	C = (s) => ({}),
	M = (s) => ({}),
	N = (s) => ({}),
	O = (s) => ({}),
	S = (s) => ({}),
	z = (s) => ({}),
	A = (s) => ({}),
	B = (s) => ({}),
	F = (s) => ({}),
	H = (s) => ({}),
	J = (s) => ({}),
	K = (s) => ({}),
	L = (s) => ({}),
	P = (s) => ({}),
	Q = (s) => ({}),
	R = (s) => ({}),
	T = (s) => ({});
function U(s) {
	let l;
	return {
		c() {
			l = d('"define un tipo de layout"');
		},
		l(s) {
			l = u(s, '"define un tipo de layout"');
		},
		m(s, a) {
			c(s, l, a);
		},
		p: v,
		i: v,
		o: v,
		d(s) {
			s && i(l);
		}
	};
}
function W(s) {
	let l, a, e, t, o, d, u;
	const v = s[4].slot_5,
		M = p(v, s, s[3], C),
		N = s[4].slot_4,
		O = p(N, s, s[3], k),
		S = s[4].slot_3,
		z = p(S, s, s[3], g),
		A = s[4].slot_2,
		B = p(A, s, s[3], $),
		F = s[4].slot_1,
		H = p(F, s, s[3], V);
	return {
		c() {
			(l = b('div')),
				M && M.c(),
				(a = h()),
				O && O.c(),
				(e = h()),
				z && z.c(),
				(t = h()),
				B && B.c(),
				(o = h()),
				H && H.c(),
				this.h();
		},
		l(s) {
			l = f(s, 'DIV', { class: !0 });
			var c = m(l);
			M && M.l(c),
				(a = x(c)),
				O && O.l(c),
				(e = x(c)),
				z && z.l(c),
				(t = x(c)),
				B && B.l(c),
				(o = x(c)),
				H && H.l(c),
				c.forEach(i),
				this.h();
		},
		h() {
			q(l, 'class', (d = _(s[2][s[1]]) + ' svelte-1qexo7b'));
		},
		m(s, r) {
			c(s, l, r),
				M && M.m(l, null),
				D(l, a),
				O && O.m(l, null),
				D(l, e),
				z && z.m(l, null),
				D(l, t),
				B && B.m(l, null),
				D(l, o),
				H && H.m(l, null),
				(u = !0);
		},
		p(s, a) {
			M && M.p && 8 & a && I(M, v, s, s[3], a, w, C),
				O && O.p && 8 & a && I(O, N, s, s[3], a, y, k),
				z && z.p && 8 & a && I(z, S, s, s[3], a, j, g),
				B && B.p && 8 & a && I(B, A, s, s[3], a, G, $),
				H && H.p && 8 & a && I(H, F, s, s[3], a, E, V),
				(!u || (2 & a && d !== (d = _(s[2][s[1]]) + ' svelte-1qexo7b'))) && q(l, 'class', d);
		},
		i(s) {
			u || (n(M, s), n(O, s), n(z, s), n(B, s), n(H, s), (u = !0));
		},
		o(s) {
			r(M, s), r(O, s), r(z, s), r(B, s), r(H, s), (u = !1);
		},
		d(s) {
			s && i(l), M && M.d(s), O && O.d(s), z && z.d(s), B && B.d(s), H && H.d(s);
		}
	};
}
function X(s) {
	let l, a, e, t, o, d, u, v, E, V, G, $, j, g, y, k;
	const w = s[4].default,
		C = p(w, s, s[3], null),
		P = s[4].subarea1,
		Q = p(P, s, s[3], L),
		R = s[4].subarea2,
		T = p(R, s, s[3], J),
		U = s[4].subarea3,
		W = p(U, s, s[3], F),
		X = s[4].subarea4,
		Y = p(X, s, s[3], A),
		Z = s[4].subarea5,
		ss = p(Z, s, s[3], S),
		ls = s[4].subarea6,
		as = p(ls, s, s[3], N);
	return {
		c() {
			(l = b('div')),
				(a = b('div')),
				C && C.c(),
				(e = h()),
				(t = b('div')),
				Q && Q.c(),
				(o = h()),
				(d = b('div')),
				T && T.c(),
				(u = h()),
				(v = b('div')),
				W && W.c(),
				(E = h()),
				(V = b('div')),
				Y && Y.c(),
				(G = h()),
				($ = b('div')),
				ss && ss.c(),
				(j = h()),
				(g = b('div')),
				as && as.c(),
				this.h();
		},
		l(s) {
			l = f(s, 'DIV', { class: !0 });
			var c = m(l);
			a = f(c, 'DIV', { class: !0 });
			var r = m(a);
			C && C.l(r), r.forEach(i), (e = x(c)), (t = f(c, 'DIV', { class: !0 }));
			var n = m(t);
			Q && Q.l(n), n.forEach(i), (o = x(c)), (d = f(c, 'DIV', { class: !0 }));
			var p = m(d);
			T && T.l(p), p.forEach(i), (u = x(c)), (v = f(c, 'DIV', { class: !0 }));
			var b = m(v);
			W && W.l(b), b.forEach(i), (E = x(c)), (V = f(c, 'DIV', { class: !0 }));
			var h = m(V);
			Y && Y.l(h), h.forEach(i), (G = x(c)), ($ = f(c, 'DIV', { class: !0 }));
			var q = m($);
			ss && ss.l(q), q.forEach(i), (j = x(c)), (g = f(c, 'DIV', { class: !0 }));
			var _ = m(g);
			as && as.l(_), _.forEach(i), c.forEach(i), this.h();
		},
		h() {
			q(a, 'class', 'subarea a svelte-1qexo7b'),
				q(t, 'class', 'subarea b svelte-1qexo7b'),
				q(d, 'class', 'subarea c svelte-1qexo7b'),
				q(v, 'class', 'subarea d svelte-1qexo7b'),
				q(V, 'class', 'subarea e svelte-1qexo7b'),
				q($, 'class', 'subarea f svelte-1qexo7b'),
				q(g, 'class', 'subarea g svelte-1qexo7b'),
				q(l, 'class', (y = _(s[2][s[1]]) + ' svelte-1qexo7b'));
		},
		m(s, r) {
			c(s, l, r),
				D(l, a),
				C && C.m(a, null),
				D(l, e),
				D(l, t),
				Q && Q.m(t, null),
				D(l, o),
				D(l, d),
				T && T.m(d, null),
				D(l, u),
				D(l, v),
				W && W.m(v, null),
				D(l, E),
				D(l, V),
				Y && Y.m(V, null),
				D(l, G),
				D(l, $),
				ss && ss.m($, null),
				D(l, j),
				D(l, g),
				as && as.m(g, null),
				(k = !0);
		},
		p(s, a) {
			C && C.p && 8 & a && I(C, w, s, s[3], a, null, null),
				Q && Q.p && 8 & a && I(Q, P, s, s[3], a, K, L),
				T && T.p && 8 & a && I(T, R, s, s[3], a, H, J),
				W && W.p && 8 & a && I(W, U, s, s[3], a, B, F),
				Y && Y.p && 8 & a && I(Y, X, s, s[3], a, z, A),
				ss && ss.p && 8 & a && I(ss, Z, s, s[3], a, O, S),
				as && as.p && 8 & a && I(as, ls, s, s[3], a, M, N),
				(!k || (2 & a && y !== (y = _(s[2][s[1]]) + ' svelte-1qexo7b'))) && q(l, 'class', y);
		},
		i(s) {
			k || (n(C, s), n(Q, s), n(T, s), n(W, s), n(Y, s), n(ss, s), n(as, s), (k = !0));
		},
		o(s) {
			r(C, s), r(Q, s), r(T, s), r(W, s), r(Y, s), r(ss, s), r(as, s), (k = !1);
		},
		d(s) {
			s && i(l),
				C && C.d(s),
				Q && Q.d(s),
				T && T.d(s),
				W && W.d(s),
				Y && Y.d(s),
				ss && ss.d(s),
				as && as.d(s);
		}
	};
}
function Y(s) {
	let l, a, e, t, o, d, u, v;
	const E = s[4].subarea1,
		V = p(E, s, s[3], T),
		G = s[4].default,
		$ = p(G, s, s[3], null),
		j = s[4].subarea2,
		g = p(j, s, s[3], Q);
	return {
		c() {
			(l = b('div')),
				(a = b('div')),
				V && V.c(),
				(e = h()),
				(t = b('div')),
				$ && $.c(),
				(o = h()),
				(d = b('div')),
				g && g.c(),
				this.h();
		},
		l(s) {
			l = f(s, 'DIV', { class: !0 });
			var c = m(l);
			a = f(c, 'DIV', { class: !0 });
			var r = m(a);
			V && V.l(r), r.forEach(i), (e = x(c)), (t = f(c, 'DIV', { class: !0 }));
			var n = m(t);
			$ && $.l(n), n.forEach(i), (o = x(c)), (d = f(c, 'DIV', { class: !0 }));
			var u = m(d);
			g && g.l(u), u.forEach(i), c.forEach(i), this.h();
		},
		h() {
			q(a, 'class', 'svelte-1qexo7b'),
				q(t, 'class', 'svelte-1qexo7b'),
				q(d, 'class', 'svelte-1qexo7b'),
				q(l, 'class', (u = _(s[2][s[1]]) + ' svelte-1qexo7b'));
		},
		m(s, r) {
			c(s, l, r),
				D(l, a),
				V && V.m(a, null),
				D(l, e),
				D(l, t),
				$ && $.m(t, null),
				D(l, o),
				D(l, d),
				g && g.m(d, null),
				(v = !0);
		},
		p(s, a) {
			V && V.p && 8 & a && I(V, E, s, s[3], a, R, T),
				$ && $.p && 8 & a && I($, G, s, s[3], a, null, null),
				g && g.p && 8 & a && I(g, j, s, s[3], a, P, Q),
				(!v || (2 & a && u !== (u = _(s[2][s[1]]) + ' svelte-1qexo7b'))) && q(l, 'class', u);
		},
		i(s) {
			v || (n(V, s), n($, s), n(g, s), (v = !0));
		},
		o(s) {
			r(V, s), r($, s), r(g, s), (v = !1);
		},
		d(s) {
			s && i(l), V && V.d(s), $ && $.d(s), g && g.d(s);
		}
	};
}
function Z(s) {
	let l, a, d, u;
	const v = [Y, X, W, U],
		p = [];
	function b(s, l) {
		return 0 === s[0] ? 0 : 1 === s[0] ? 1 : 2 === s[0] ? 2 : 3;
	}
	return (
		(l = b(s)),
		(a = p[l] = v[l](s)),
		{
			c() {
				a.c(), (d = e());
			},
			l(s) {
				a.l(s), (d = e());
			},
			m(s, a) {
				p[l].m(s, a), c(s, d, a), (u = !0);
			},
			p(s, [e]) {
				let c = l;
				(l = b(s)),
					l === c
						? p[l].p(s, e)
						: (t(),
						  r(p[c], 1, 1, () => {
								p[c] = null;
						  }),
						  o(),
						  (a = p[l]),
						  a ? a.p(s, e) : ((a = p[l] = v[l](s)), a.c()),
						  n(a, 1),
						  a.m(d.parentNode, d));
			},
			i(s) {
				u || (n(a), (u = !0));
			},
			o(s) {
				r(a), (u = !1);
			},
			d(s) {
				p[l].d(s), s && i(d);
			}
		}
	);
}
function ss(s, l, a) {
	let { $$slots: e = {}, $$scope: c } = l,
		{ tipo: t = 0 } = l,
		{ variante: r = 0 } = l;
	return (
		(s.$$set = (s) => {
			'tipo' in s && a(0, (t = s.tipo)),
				'variante' in s && a(1, (r = s.variante)),
				'$$scope' in s && a(3, (c = s.$$scope));
		}),
		[
			t,
			r,
			[
				'Grid_0',
				'Grid_1',
				'Grid_2',
				'Grid_3',
				'Grid_4',
				'Grid_5',
				'Grid_6',
				'Grid_7',
				'Grid_8',
				'Grid_9'
			],
			c,
			e
		]
	);
}
class ls extends s {
	constructor(s) {
		super(), l(this, s, ss, Z, a, { tipo: 0, variante: 1 });
	}
}
export { ls as G };
