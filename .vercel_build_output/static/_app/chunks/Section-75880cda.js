import {
	S as s,
	i as e,
	s as i,
	M as t,
	e as o,
	c as a,
	a as c,
	d as n,
	o as l,
	f as r,
	O as d,
	w as _,
	x as S
} from './index-d91e1ed8.js';
import './Header-eac1ad0e.js';
function u(s) {
	let e, i, u;
	const $ = s[5].default,
		p = t($, s, s[4], null);
	return {
		c() {
			(e = o('section')), p && p.c(), this.h();
		},
		l(s) {
			e = a(s, 'SECTION', { id: !0, class: !0 });
			var i = c(e);
			p && p.l(i), i.forEach(n), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (i = s[3][s[0]] + ' ' + s[2] + ' svelte-19lrdf4'));
		},
		m(s, i) {
			r(s, e, i), p && p.m(e, null), (u = !0);
		},
		p(s, [t]) {
			p && p.p && 16 & t && d(p, $, s, s[4], t, null, null),
				(!u || 2 & t) && l(e, 'id', s[1]),
				(!u || (5 & t && i !== (i = s[3][s[0]] + ' ' + s[2] + ' svelte-19lrdf4'))) &&
					l(e, 'class', i);
		},
		i(s) {
			u || (_(p, s), (u = !0));
		},
		o(s) {
			S(p, s), (u = !1);
		},
		d(s) {
			s && n(e), p && p.d(s);
		}
	};
}
function $(s, e, i) {
	let { $$slots: t = {}, $$scope: o } = e,
		{ variante: a = 0 } = e,
		{ id: c = '' } = e,
		{ bg_color: n = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && i(0, (a = s.variante)),
				'id' in s && i(1, (c = s.id)),
				'bg_color' in s && i(2, (n = s.bg_color)),
				'$$scope' in s && i(4, (o = s.$$scope));
		}),
		[
			a,
			c,
			n,
			[
				'Section_0',
				'Section_1',
				'Section_2',
				'Section_3',
				'Section_4',
				'Section_5',
				'Section_6',
				'Section_7',
				'Section_8'
			],
			o,
			t
		]
	);
}
class p extends s {
	constructor(s) {
		super(), e(this, s, $, u, i, { variante: 0, id: 1, bg_color: 2 });
	}
}
export { p as S };
