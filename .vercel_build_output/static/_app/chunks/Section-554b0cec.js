import {
	S as s,
	i as a,
	s as e,
	M as i,
	e as t,
	c as n,
	a as c,
	d as l,
	o,
	I as r,
	f as d,
	O as u,
	w as p,
	x as $
} from './index-d91e1ed8.js';
function h(s) {
	let a, e, h;
	const v = s[4].default,
		S = i(v, s, s[3], null);
	return {
		c() {
			(a = t('section')), S && S.c(), this.h();
		},
		l(s) {
			a = n(s, 'SECTION', { id: !0, class: !0 });
			var e = c(a);
			S && S.l(e), e.forEach(l), this.h();
		},
		h() {
			o(a, 'id', s[1]), o(a, 'class', (e = r(s[2][s[0]]) + ' svelte-sp7k4i'));
		},
		m(s, e) {
			d(s, a, e), S && S.m(a, null), (h = !0);
		},
		p(s, [i]) {
			S && S.p && 8 & i && u(S, v, s, s[3], i, null, null),
				(!h || 2 & i) && o(a, 'id', s[1]),
				(!h || (1 & i && e !== (e = r(s[2][s[0]]) + ' svelte-sp7k4i'))) && o(a, 'class', e);
		},
		i(s) {
			h || (p(S, s), (h = !0));
		},
		o(s) {
			$(S, s), (h = !1);
		},
		d(s) {
			s && l(a), S && S.d(s);
		}
	};
}
function v(s, a, e) {
	let { $$slots: i = {}, $$scope: t } = a,
		{ variante: n = 0 } = a,
		{ id: c = '' } = a;
	return (
		(s.$$set = (s) => {
			'variante' in s && e(0, (n = s.variante)),
				'id' in s && e(1, (c = s.id)),
				'$$scope' in s && e(3, (t = s.$$scope));
		}),
		[n, c, ['Section_0', 'Section_1', 'Section_2', 'Section_3'], t, i]
	);
}
class S extends s {
	constructor(s) {
		super(), a(this, s, v, h, e, { variante: 0, id: 1 });
	}
}
export { S };
