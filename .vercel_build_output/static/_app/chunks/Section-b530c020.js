import {
	S as s,
	i as e,
	s as i,
	M as t,
	e as a,
	c as n,
	a as c,
	d as o,
	o as l,
	I as r,
	f as d,
	O as u,
	w as S,
	x as $
} from './index-d91e1ed8.js';
function p(s) {
	let e, i, p;
	const h = s[4].default,
		v = t(h, s, s[3], null);
	return {
		c() {
			(e = a('section')), v && v.c(), this.h();
		},
		l(s) {
			e = n(s, 'SECTION', { id: !0, class: !0 });
			var i = c(e);
			v && v.l(i), i.forEach(o), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (i = r(s[2][s[0]]) + ' svelte-1g4euiq'));
		},
		m(s, i) {
			d(s, e, i), v && v.m(e, null), (p = !0);
		},
		p(s, [t]) {
			v && v.p && 8 & t && u(v, h, s, s[3], t, null, null),
				(!p || 2 & t) && l(e, 'id', s[1]),
				(!p || (1 & t && i !== (i = r(s[2][s[0]]) + ' svelte-1g4euiq'))) && l(e, 'class', i);
		},
		i(s) {
			p || (S(v, s), (p = !0));
		},
		o(s) {
			$(v, s), (p = !1);
		},
		d(s) {
			s && o(e), v && v.d(s);
		}
	};
}
function h(s, e, i) {
	let { $$slots: t = {}, $$scope: a } = e,
		{ variante: n = 0 } = e,
		{ id: c = '' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && i(0, (n = s.variante)),
				'id' in s && i(1, (c = s.id)),
				'$$scope' in s && i(3, (a = s.$$scope));
		}),
		[
			n,
			c,
			['Section_0', 'Section_1', 'Section_2', 'Section_3', 'Section_4', 'Section_5', 'Section_6'],
			a,
			t
		]
	);
}
class v extends s {
	constructor(s) {
		super(), e(this, s, h, p, i, { variante: 0, id: 1 });
	}
}
export { v as S };
