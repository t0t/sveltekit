import {
	S as a,
	i as s,
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
} from './index-a07a4dd8.js';
function p(a) {
	let s, t, p;
	const h = a[4].default,
		f = e(h, a, a[3], null);
	return {
		c() {
			(s = i('section')), f && f.c(), this.h();
		},
		l(a) {
			s = n(a, 'SECTION', { id: !0, class: !0 });
			var t = l(s);
			f && f.l(t), t.forEach(r), this.h();
		},
		h() {
			c(s, 'id', a[1]), c(s, 'class', (t = o(a[2][a[0]]) + ' svelte-1v5ntaz'));
		},
		m(a, t) {
			d(a, s, t), f && f.m(s, null), (p = !0);
		},
		p(a, [e]) {
			f && f.p && 8 & e && u(f, h, a, a[3], e, null, null),
				(!p || 2 & e) && c(s, 'id', a[1]),
				(!p || (1 & e && t !== (t = o(a[2][a[0]]) + ' svelte-1v5ntaz'))) && c(s, 'class', t);
		},
		i(a) {
			p || ($(f, a), (p = !0));
		},
		o(a) {
			v(f, a), (p = !1);
		},
		d(a) {
			a && r(s), f && f.d(a);
		}
	};
}
function h(a, s, t) {
	let { $$slots: e = {}, $$scope: i } = s,
		{ variante: n = 0 } = s,
		{ id: l = '' } = s;
	return (
		(a.$$set = (a) => {
			'variante' in a && t(0, (n = a.variante)),
				'id' in a && t(1, (l = a.id)),
				'$$scope' in a && t(3, (i = a.$$scope));
		}),
		[n, l, ['Variante_0', 'Variante_1', 'Variante_2'], i, e]
	);
}
class f extends a {
	constructor(a) {
		super(), s(this, a, h, p, t, { variante: 0, id: 1 });
	}
}
export { f as S };
