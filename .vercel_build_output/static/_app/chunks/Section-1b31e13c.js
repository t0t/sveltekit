import {
	S as s,
	i as a,
	s as t,
	H as e,
	e as i,
	c as n,
	a as l,
	d as r,
	o as c,
	U as o,
	f as d,
	J as u,
	w as $,
	x as v
} from './index-83f33906.js';
function p(s) {
	let a, t, p;
	const f = s[4].default,
		h = e(f, s, s[3], null);
	return {
		c() {
			(a = i('section')), h && h.c(), this.h();
		},
		l(s) {
			a = n(s, 'SECTION', { id: !0, class: !0 });
			var t = l(a);
			h && h.l(t), t.forEach(r), this.h();
		},
		h() {
			c(a, 'id', s[1]), c(a, 'class', (t = o(s[2][s[0]]) + ' svelte-1v5ntaz'));
		},
		m(s, t) {
			d(s, a, t), h && h.m(a, null), (p = !0);
		},
		p(s, [e]) {
			h && h.p && 8 & e && u(h, f, s, s[3], e, null, null),
				(!p || 2 & e) && c(a, 'id', s[1]),
				(!p || (1 & e && t !== (t = o(s[2][s[0]]) + ' svelte-1v5ntaz'))) && c(a, 'class', t);
		},
		i(s) {
			p || ($(h, s), (p = !0));
		},
		o(s) {
			v(h, s), (p = !1);
		},
		d(s) {
			s && r(a), h && h.d(s);
		}
	};
}
function f(s, a, t) {
	let { $$slots: e = {}, $$scope: i } = a,
		{ variante: n = 0 } = a,
		{ id: l = '' } = a;
	return (
		(s.$$set = (s) => {
			'variante' in s && t(0, (n = s.variante)),
				'id' in s && t(1, (l = s.id)),
				'$$scope' in s && t(3, (i = s.$$scope));
		}),
		[n, l, ['Variante_0', 'Variante_1', 'Variante_2'], i, e]
	);
}
class h extends s {
	constructor(s) {
		super(), a(this, s, f, p, t, { variante: 0, id: 1 });
	}
}
export { h as S };
