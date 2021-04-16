import {
	S as s,
	i as a,
	s as l,
	M as e,
	e as c,
	j as t,
	c as r,
	a as o,
	d as n,
	l as i,
	o as u,
	I as v,
	f as d,
	g as j,
	O as h,
	w as p,
	x as $
} from './index-d91e1ed8.js';
const f = (s) => ({}),
	m = (s) => ({}),
	I = (s) => ({}),
	x = (s) => ({});
function D(s) {
	let a, l, D, E, V, G, b, _;
	const g = s[3].subarea1,
		w = e(g, s, s[2], x),
		M = s[3].default,
		O = e(M, s, s[2], null),
		S = s[3].subarea2,
		k = e(S, s, s[2], m);
	return {
		c() {
			(a = c('div')),
				(l = c('div')),
				w && w.c(),
				(D = t()),
				(E = c('div')),
				O && O.c(),
				(V = t()),
				(G = c('div')),
				k && k.c(),
				this.h();
		},
		l(s) {
			a = r(s, 'DIV', { class: !0 });
			var e = o(a);
			l = r(e, 'DIV', { class: !0 });
			var c = o(l);
			w && w.l(c), c.forEach(n), (D = i(e)), (E = r(e, 'DIV', { class: !0 }));
			var t = o(E);
			O && O.l(t), t.forEach(n), (V = i(e)), (G = r(e, 'DIV', { class: !0 }));
			var u = o(G);
			k && k.l(u), u.forEach(n), e.forEach(n), this.h();
		},
		h() {
			u(l, 'class', 'svelte-16ju3oj'),
				u(E, 'class', 'svelte-16ju3oj'),
				u(G, 'class', 'svelte-16ju3oj'),
				u(a, 'class', (b = v(s[1][s[0]]) + ' svelte-16ju3oj'));
		},
		m(s, e) {
			d(s, a, e),
				j(a, l),
				w && w.m(l, null),
				j(a, D),
				j(a, E),
				O && O.m(E, null),
				j(a, V),
				j(a, G),
				k && k.m(G, null),
				(_ = !0);
		},
		p(s, [l]) {
			w && w.p && 4 & l && h(w, g, s, s[2], l, I, x),
				O && O.p && 4 & l && h(O, M, s, s[2], l, null, null),
				k && k.p && 4 & l && h(k, S, s, s[2], l, f, m),
				(!_ || (1 & l && b !== (b = v(s[1][s[0]]) + ' svelte-16ju3oj'))) && u(a, 'class', b);
		},
		i(s) {
			_ || (p(w, s), p(O, s), p(k, s), (_ = !0));
		},
		o(s) {
			$(w, s), $(O, s), $(k, s), (_ = !1);
		},
		d(s) {
			s && n(a), w && w.d(s), O && O.d(s), k && k.d(s);
		}
	};
}
function E(s, a, l) {
	let { $$slots: e = {}, $$scope: c } = a,
		{ variante: t = 0 } = a;
	return (
		(s.$$set = (s) => {
			'variante' in s && l(0, (t = s.variante)), '$$scope' in s && l(2, (c = s.$$scope));
		}),
		[t, ['Grid_0', 'Grid_1'], c, e]
	);
}
class V extends s {
	constructor(s) {
		super(), a(this, s, E, D, l, { variante: 0 });
	}
}
export { V as G };
