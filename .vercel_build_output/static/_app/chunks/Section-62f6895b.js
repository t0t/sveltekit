import {
	S as s,
	i as a,
	s as e,
	M as t,
	e as i,
	c as n,
	a as l,
	d as r,
	o as c,
	I as o,
	f as d,
	O as u,
	w as $,
	x as h
} from './index-d91e1ed8.js';
function p(s) {
	let a, e, p;
	const v = s[4].default,
		f = t(v, s, s[3], null);
	return {
		c() {
			(a = i('section')), f && f.c(), this.h();
		},
		l(s) {
			a = n(s, 'SECTION', { id: !0, class: !0 });
			var e = l(a);
			f && f.l(e), e.forEach(r), this.h();
		},
		h() {
			c(a, 'id', s[1]), c(a, 'class', (e = o(s[2][s[0]]) + ' svelte-whey3z'));
		},
		m(s, e) {
			d(s, a, e), f && f.m(a, null), (p = !0);
		},
		p(s, [t]) {
			f && f.p && 8 & t && u(f, v, s, s[3], t, null, null),
				(!p || 2 & t) && c(a, 'id', s[1]),
				(!p || (1 & t && e !== (e = o(s[2][s[0]]) + ' svelte-whey3z'))) && c(a, 'class', e);
		},
		i(s) {
			p || ($(f, s), (p = !0));
		},
		o(s) {
			h(f, s), (p = !1);
		},
		d(s) {
			s && r(a), f && f.d(s);
		}
	};
}
function v(s, a, e) {
	let { $$slots: t = {}, $$scope: i } = a,
		{ variante: n = 0 } = a,
		{ id: l = '' } = a;
	return (
		(s.$$set = (s) => {
			'variante' in s && e(0, (n = s.variante)),
				'id' in s && e(1, (l = s.id)),
				'$$scope' in s && e(3, (i = s.$$scope));
		}),
		[n, l, ['Variante_0', 'Variante_1', 'Variante_2', 'Variante_3'], i, t]
	);
}
class f extends s {
	constructor(s) {
		super(), a(this, s, v, p, e, { variante: 0, id: 1 });
	}
}
export { f as S };
