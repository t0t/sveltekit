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
	o as v,
	I as d,
	f as p,
	g as u,
	O as h,
	w as $,
	x as f
} from './index-d91e1ed8.js';
const m = (s) => ({}),
	k = (s) => ({}),
	z = (s) => ({}),
	I = (s) => ({});
function x(s) {
	let a, l, x, D, E, V, G, b;
	const j = s[3].subarea1,
		_ = e(j, s, s[2], I),
		g = s[3].default,
		w = e(g, s, s[2], null),
		M = s[3].subarea2,
		O = e(M, s, s[2], k);
	return {
		c() {
			(a = c('div')),
				(l = c('div')),
				_ && _.c(),
				(x = t()),
				(D = c('div')),
				w && w.c(),
				(E = t()),
				(V = c('div')),
				O && O.c(),
				this.h();
		},
		l(s) {
			a = r(s, 'DIV', { class: !0 });
			var e = o(a);
			l = r(e, 'DIV', { class: !0 });
			var c = o(l);
			_ && _.l(c), c.forEach(n), (x = i(e)), (D = r(e, 'DIV', { class: !0 }));
			var t = o(D);
			w && w.l(t), t.forEach(n), (E = i(e)), (V = r(e, 'DIV', { class: !0 }));
			var v = o(V);
			O && O.l(v), v.forEach(n), e.forEach(n), this.h();
		},
		h() {
			v(l, 'class', 'svelte-1p9kz7o'),
				v(D, 'class', 'svelte-1p9kz7o'),
				v(V, 'class', 'svelte-1p9kz7o'),
				v(a, 'class', (G = d(s[1][s[0]]) + ' svelte-1p9kz7o'));
		},
		m(s, e) {
			p(s, a, e),
				u(a, l),
				_ && _.m(l, null),
				u(a, x),
				u(a, D),
				w && w.m(D, null),
				u(a, E),
				u(a, V),
				O && O.m(V, null),
				(b = !0);
		},
		p(s, [l]) {
			_ && _.p && 4 & l && h(_, j, s, s[2], l, z, I),
				w && w.p && 4 & l && h(w, g, s, s[2], l, null, null),
				O && O.p && 4 & l && h(O, M, s, s[2], l, m, k),
				(!b || (1 & l && G !== (G = d(s[1][s[0]]) + ' svelte-1p9kz7o'))) && v(a, 'class', G);
		},
		i(s) {
			b || ($(_, s), $(w, s), $(O, s), (b = !0));
		},
		o(s) {
			f(_, s), f(w, s), f(O, s), (b = !1);
		},
		d(s) {
			s && n(a), _ && _.d(s), w && w.d(s), O && O.d(s);
		}
	};
}
function D(s, a, l) {
	let { $$slots: e = {}, $$scope: c } = a,
		{ variante: t = 0 } = a;
	return (
		(s.$$set = (s) => {
			'variante' in s && l(0, (t = s.variante)), '$$scope' in s && l(2, (c = s.$$scope));
		}),
		[t, ['Grid_0', 'Grid_1'], c, e]
	);
}
class E extends s {
	constructor(s) {
		super(), a(this, s, D, x, l, { variante: 0 });
	}
}
export { E as G };
