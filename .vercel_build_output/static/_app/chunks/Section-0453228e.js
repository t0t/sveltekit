import {
	S as s,
	i as a,
	s as t,
	E as e,
	e as i,
	c as n,
	a as l,
	d as r,
	o as c,
	X as o,
	f as d,
	F as u,
	w as $,
	x as v
} from './index-a86d0367.js';
function p(s) {
	let a, t, p;
	const h = s[4].default,
		f = e(h, s, s[3], null);
	return {
		c() {
			(a = i('section')), f && f.c(), this.h();
		},
		l(s) {
			a = n(s, 'SECTION', { id: !0, class: !0 });
			var t = l(a);
			f && f.l(t), t.forEach(r), this.h();
		},
		h() {
			c(a, 'id', s[1]), c(a, 'class', (t = o(s[2][s[0]]) + ' svelte-1v5ntaz'));
		},
		m(s, t) {
			d(s, a, t), f && f.m(a, null), (p = !0);
		},
		p(s, [e]) {
			f && f.p && 8 & e && u(f, h, s, s[3], e, null, null),
				(!p || 2 & e) && c(a, 'id', s[1]),
				(!p || (1 & e && t !== (t = o(s[2][s[0]]) + ' svelte-1v5ntaz'))) && c(a, 'class', t);
		},
		i(s) {
			p || ($(f, s), (p = !0));
		},
		o(s) {
			v(f, s), (p = !1);
		},
		d(s) {
			s && r(a), f && f.d(s);
		}
	};
}
function h(s, a, t) {
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
class f extends s {
	constructor(s) {
		super(), a(this, s, h, p, t, { variante: 0, id: 1 });
	}
}
export { f as S };
