import {
	S as s,
	i as a,
	s as l,
	M as c,
	e,
	j as t,
	c as r,
	a as n,
	d as i,
	l as o,
	o as v,
	I as d,
	f as p,
	g as u,
	O as f,
	w as h,
	x as $
} from './index-d91e1ed8.js';
const m = (s) => ({}),
	q = (s) => ({}),
	I = (s) => ({}),
	x = (s) => ({});
function D(s) {
	let a, l, D, E, V, G, b, j;
	const _ = s[3].subarea1,
		g = c(_, s, s[2], x),
		w = s[3].default,
		M = c(w, s, s[2], null),
		O = s[3].subarea2,
		S = c(O, s, s[2], q);
	return {
		c() {
			(a = e('div')),
				(l = e('div')),
				g && g.c(),
				(D = t()),
				(E = e('div')),
				M && M.c(),
				(V = t()),
				(G = e('div')),
				S && S.c(),
				this.h();
		},
		l(s) {
			a = r(s, 'DIV', { class: !0 });
			var c = n(a);
			l = r(c, 'DIV', { class: !0 });
			var e = n(l);
			g && g.l(e), e.forEach(i), (D = o(c)), (E = r(c, 'DIV', { class: !0 }));
			var t = n(E);
			M && M.l(t), t.forEach(i), (V = o(c)), (G = r(c, 'DIV', { class: !0 }));
			var v = n(G);
			S && S.l(v), v.forEach(i), c.forEach(i), this.h();
		},
		h() {
			v(l, 'class', 'svelte-3p7cqf'),
				v(E, 'class', 'svelte-3p7cqf'),
				v(G, 'class', 'svelte-3p7cqf'),
				v(a, 'class', (b = d(s[1][s[0]]) + ' svelte-3p7cqf'));
		},
		m(s, c) {
			p(s, a, c),
				u(a, l),
				g && g.m(l, null),
				u(a, D),
				u(a, E),
				M && M.m(E, null),
				u(a, V),
				u(a, G),
				S && S.m(G, null),
				(j = !0);
		},
		p(s, [l]) {
			g && g.p && 4 & l && f(g, _, s, s[2], l, I, x),
				M && M.p && 4 & l && f(M, w, s, s[2], l, null, null),
				S && S.p && 4 & l && f(S, O, s, s[2], l, m, q),
				(!j || (1 & l && b !== (b = d(s[1][s[0]]) + ' svelte-3p7cqf'))) && v(a, 'class', b);
		},
		i(s) {
			j || (h(g, s), h(M, s), h(S, s), (j = !0));
		},
		o(s) {
			$(g, s), $(M, s), $(S, s), (j = !1);
		},
		d(s) {
			s && i(a), g && g.d(s), M && M.d(s), S && S.d(s);
		}
	};
}
function E(s, a, l) {
	let { $$slots: c = {}, $$scope: e } = a,
		{ variante: t = 0 } = a;
	return (
		(s.$$set = (s) => {
			'variante' in s && l(0, (t = s.variante)), '$$scope' in s && l(2, (e = s.$$scope));
		}),
		[t, ['Grid_0', 'Grid_1'], e, c]
	);
}
class V extends s {
	constructor(s) {
		super(), a(this, s, E, D, l, { variante: 0 });
	}
}
export { V as G };
