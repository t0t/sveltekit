import {
	S as s,
	i as e,
	s as t,
	M as a,
	e as i,
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
	let e, t, p;
	const h = s[4].default,
		v = a(h, s, s[3], null);
	return {
		c() {
			(e = i('section')), v && v.c(), this.h();
		},
		l(s) {
			e = n(s, 'SECTION', { id: !0, class: !0 });
			var t = c(e);
			v && v.l(t), t.forEach(o), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (t = r(s[2][s[0]]) + ' svelte-1xsl35n'));
		},
		m(s, t) {
			d(s, e, t), v && v.m(e, null), (p = !0);
		},
		p(s, [a]) {
			v && v.p && 8 & a && u(v, h, s, s[3], a, null, null),
				(!p || 2 & a) && l(e, 'id', s[1]),
				(!p || (1 & a && t !== (t = r(s[2][s[0]]) + ' svelte-1xsl35n'))) && l(e, 'class', t);
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
function h(s, e, t) {
	let { $$slots: a = {}, $$scope: i } = e,
		{ variante: n = 0 } = e,
		{ id: c = '' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && t(0, (n = s.variante)),
				'id' in s && t(1, (c = s.id)),
				'$$scope' in s && t(3, (i = s.$$scope));
		}),
		[
			n,
			c,
			['Section_0', 'Section_1', 'Section_2', 'Section_3', 'Section_4', 'Section_5', 'Section_6'],
			i,
			a
		]
	);
}
class v extends s {
	constructor(s) {
		super(), e(this, s, h, p, t, { variante: 0, id: 1 });
	}
}
export { v as S };
