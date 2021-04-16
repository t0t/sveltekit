import {
	S as s,
	i as a,
	s as t,
	M as e,
	e as i,
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
	let a, t, h;
	const v = s[4].default,
		S = e(v, s, s[3], null);
	return {
		c() {
			(a = i('section')), S && S.c(), this.h();
		},
		l(s) {
			a = n(s, 'SECTION', { id: !0, class: !0 });
			var t = c(a);
			S && S.l(t), t.forEach(l), this.h();
		},
		h() {
			o(a, 'id', s[1]), o(a, 'class', (t = r(s[2][s[0]]) + ' svelte-pkth5g'));
		},
		m(s, t) {
			d(s, a, t), S && S.m(a, null), (h = !0);
		},
		p(s, [e]) {
			S && S.p && 8 & e && u(S, v, s, s[3], e, null, null),
				(!h || 2 & e) && o(a, 'id', s[1]),
				(!h || (1 & e && t !== (t = r(s[2][s[0]]) + ' svelte-pkth5g'))) && o(a, 'class', t);
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
function v(s, a, t) {
	let { $$slots: e = {}, $$scope: i } = a,
		{ variante: n = 0 } = a,
		{ id: c = '' } = a;
	return (
		(s.$$set = (s) => {
			'variante' in s && t(0, (n = s.variante)),
				'id' in s && t(1, (c = s.id)),
				'$$scope' in s && t(3, (i = s.$$scope));
		}),
		[n, c, ['Section_0', 'Section_1', 'Section_2', 'Section_3'], i, e]
	);
}
class S extends s {
	constructor(s) {
		super(), a(this, s, v, h, t, { variante: 0, id: 1 });
	}
}
export { S };
