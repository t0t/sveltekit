import {
	S as s,
	i as l,
	s as a,
	k as e,
	f as c,
	C as t,
	x as r,
	D as d,
	w as n,
	d as i,
	t as u,
	b as o,
	n as v,
	M as m,
	e as p,
	j as h,
	c as f,
	a as g,
	l as b,
	o as q,
	I as _,
	g as D,
	O as I
} from './index-d91e1ed8.js';
import './Grid.svelte-81f2d089.js';
const E = (s) => ({}),
	V = (s) => ({}),
	G = (s) => ({}),
	$ = (s) => ({}),
	x = (s) => ({}),
	j = (s) => ({}),
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
			l = u('"define un tipo de layout"');
		},
		l(s) {
			l = o(s, '"define un tipo de layout"');
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
	let l, a, e, t, d, u, o;
	const v = s[4].slot_5,
		M = m(v, s, s[3], C),
		N = s[4].slot_4,
		O = m(N, s, s[3], k),
		S = s[4].slot_3,
		z = m(S, s, s[3], j),
		A = s[4].slot_2,
		B = m(A, s, s[3], $),
		F = s[4].slot_1,
		H = m(F, s, s[3], V);
	return {
		c() {
			(l = p('div')),
				M && M.c(),
				(a = h()),
				O && O.c(),
				(e = h()),
				z && z.c(),
				(t = h()),
				B && B.c(),
				(d = h()),
				H && H.c(),
				this.h();
		},
		l(s) {
			l = f(s, 'DIV', { class: !0 });
			var c = g(l);
			M && M.l(c),
				(a = b(c)),
				O && O.l(c),
				(e = b(c)),
				z && z.l(c),
				(t = b(c)),
				B && B.l(c),
				(d = b(c)),
				H && H.l(c),
				c.forEach(i),
				this.h();
		},
		h() {
			q(l, 'class', (u = _(s[2][s[1]]) + ' svelte-gqm0ds'));
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
				D(l, d),
				H && H.m(l, null),
				(o = !0);
		},
		p(s, a) {
			M && M.p && 8 & a && I(M, v, s, s[3], a, w, C),
				O && O.p && 8 & a && I(O, N, s, s[3], a, y, k),
				z && z.p && 8 & a && I(z, S, s, s[3], a, x, j),
				B && B.p && 8 & a && I(B, A, s, s[3], a, G, $),
				H && H.p && 8 & a && I(H, F, s, s[3], a, E, V),
				(!o || (2 & a && u !== (u = _(s[2][s[1]]) + ' svelte-gqm0ds'))) && q(l, 'class', u);
		},
		i(s) {
			o || (n(M, s), n(O, s), n(z, s), n(B, s), n(H, s), (o = !0));
		},
		o(s) {
			r(M, s), r(O, s), r(z, s), r(B, s), r(H, s), (o = !1);
		},
		d(s) {
			s && i(l), M && M.d(s), O && O.d(s), z && z.d(s), B && B.d(s), H && H.d(s);
		}
	};
}
function X(s) {
	let l, a, e, t, d, u, o, v, E, V, G, $, x, j, y, k;
	const w = s[4].default,
		C = m(w, s, s[3], null),
		P = s[4].subarea1,
		Q = m(P, s, s[3], L),
		R = s[4].subarea2,
		T = m(R, s, s[3], J),
		U = s[4].subarea3,
		W = m(U, s, s[3], F),
		X = s[4].subarea4,
		Y = m(X, s, s[3], A),
		Z = s[4].subarea5,
		ss = m(Z, s, s[3], S),
		ls = s[4].subarea6,
		as = m(ls, s, s[3], N);
	return {
		c() {
			(l = p('div')),
				(a = p('div')),
				C && C.c(),
				(e = h()),
				(t = p('div')),
				Q && Q.c(),
				(d = h()),
				(u = p('div')),
				T && T.c(),
				(o = h()),
				(v = p('div')),
				W && W.c(),
				(E = h()),
				(V = p('div')),
				Y && Y.c(),
				(G = h()),
				($ = p('div')),
				ss && ss.c(),
				(x = h()),
				(j = p('div')),
				as && as.c(),
				this.h();
		},
		l(s) {
			l = f(s, 'DIV', { class: !0 });
			var c = g(l);
			a = f(c, 'DIV', { class: !0 });
			var r = g(a);
			C && C.l(r), r.forEach(i), (e = b(c)), (t = f(c, 'DIV', { class: !0 }));
			var n = g(t);
			Q && Q.l(n), n.forEach(i), (d = b(c)), (u = f(c, 'DIV', { class: !0 }));
			var m = g(u);
			T && T.l(m), m.forEach(i), (o = b(c)), (v = f(c, 'DIV', { class: !0 }));
			var p = g(v);
			W && W.l(p), p.forEach(i), (E = b(c)), (V = f(c, 'DIV', { class: !0 }));
			var h = g(V);
			Y && Y.l(h), h.forEach(i), (G = b(c)), ($ = f(c, 'DIV', { class: !0 }));
			var q = g($);
			ss && ss.l(q), q.forEach(i), (x = b(c)), (j = f(c, 'DIV', { class: !0 }));
			var _ = g(j);
			as && as.l(_), _.forEach(i), c.forEach(i), this.h();
		},
		h() {
			q(a, 'class', 'subarea a svelte-gqm0ds'),
				q(t, 'class', 'subarea b svelte-gqm0ds'),
				q(u, 'class', 'subarea c svelte-gqm0ds'),
				q(v, 'class', 'subarea d svelte-gqm0ds'),
				q(V, 'class', 'subarea e svelte-gqm0ds'),
				q($, 'class', 'subarea f svelte-gqm0ds'),
				q(j, 'class', 'subarea g svelte-gqm0ds'),
				q(l, 'class', (y = _(s[2][s[1]]) + ' svelte-gqm0ds'));
		},
		m(s, r) {
			c(s, l, r),
				D(l, a),
				C && C.m(a, null),
				D(l, e),
				D(l, t),
				Q && Q.m(t, null),
				D(l, d),
				D(l, u),
				T && T.m(u, null),
				D(l, o),
				D(l, v),
				W && W.m(v, null),
				D(l, E),
				D(l, V),
				Y && Y.m(V, null),
				D(l, G),
				D(l, $),
				ss && ss.m($, null),
				D(l, x),
				D(l, j),
				as && as.m(j, null),
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
				(!k || (2 & a && y !== (y = _(s[2][s[1]]) + ' svelte-gqm0ds'))) && q(l, 'class', y);
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
	let l, a, e, t, d, u, o, v;
	const E = s[4].subarea1,
		V = m(E, s, s[3], T),
		G = s[4].default,
		$ = m(G, s, s[3], null),
		x = s[4].subarea2,
		j = m(x, s, s[3], Q);
	return {
		c() {
			(l = p('div')),
				(a = p('div')),
				V && V.c(),
				(e = h()),
				(t = p('div')),
				$ && $.c(),
				(d = h()),
				(u = p('div')),
				j && j.c(),
				this.h();
		},
		l(s) {
			l = f(s, 'DIV', { class: !0 });
			var c = g(l);
			a = f(c, 'DIV', { class: !0 });
			var r = g(a);
			V && V.l(r), r.forEach(i), (e = b(c)), (t = f(c, 'DIV', { class: !0 }));
			var n = g(t);
			$ && $.l(n), n.forEach(i), (d = b(c)), (u = f(c, 'DIV', { class: !0 }));
			var o = g(u);
			j && j.l(o), o.forEach(i), c.forEach(i), this.h();
		},
		h() {
			q(a, 'class', 'svelte-gqm0ds'),
				q(t, 'class', 'svelte-gqm0ds'),
				q(u, 'class', 'svelte-gqm0ds'),
				q(l, 'class', (o = _(s[2][s[1]]) + ' svelte-gqm0ds'));
		},
		m(s, r) {
			c(s, l, r),
				D(l, a),
				V && V.m(a, null),
				D(l, e),
				D(l, t),
				$ && $.m(t, null),
				D(l, d),
				D(l, u),
				j && j.m(u, null),
				(v = !0);
		},
		p(s, a) {
			V && V.p && 8 & a && I(V, E, s, s[3], a, R, T),
				$ && $.p && 8 & a && I($, G, s, s[3], a, null, null),
				j && j.p && 8 & a && I(j, x, s, s[3], a, P, Q),
				(!v || (2 & a && o !== (o = _(s[2][s[1]]) + ' svelte-gqm0ds'))) && q(l, 'class', o);
		},
		i(s) {
			v || (n(V, s), n($, s), n(j, s), (v = !0));
		},
		o(s) {
			r(V, s), r($, s), r(j, s), (v = !1);
		},
		d(s) {
			s && i(l), V && V.d(s), $ && $.d(s), j && j.d(s);
		}
	};
}
function Z(s) {
	let l, a, u, o;
	const v = [Y, X, W, U],
		m = [];
	function p(s, l) {
		return 0 === s[0] ? 0 : 1 === s[0] ? 1 : 2 === s[0] ? 2 : 3;
	}
	return (
		(l = p(s)),
		(a = m[l] = v[l](s)),
		{
			c() {
				a.c(), (u = e());
			},
			l(s) {
				a.l(s), (u = e());
			},
			m(s, a) {
				m[l].m(s, a), c(s, u, a), (o = !0);
			},
			p(s, [e]) {
				let c = l;
				(l = p(s)),
					l === c
						? m[l].p(s, e)
						: (t(),
						  r(m[c], 1, 1, () => {
								m[c] = null;
						  }),
						  d(),
						  (a = m[l]),
						  a ? a.p(s, e) : ((a = m[l] = v[l](s)), a.c()),
						  n(a, 1),
						  a.m(u.parentNode, u));
			},
			i(s) {
				o || (n(a), (o = !0));
			},
			o(s) {
				r(a), (o = !1);
			},
			d(s) {
				m[l].d(s), s && i(u);
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
