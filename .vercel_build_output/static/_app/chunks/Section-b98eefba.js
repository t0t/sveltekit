import {
	S as s,
	i as e,
	s as i,
	M as t,
	e as o,
	c,
	a as n,
	d as a,
	o as l,
	f as r,
	O as d,
	w as _,
	x as S
} from './index-d91e1ed8.js';
import './Header-bff7bbb7.js';
function u(s) {
	let e, i, u;
	const $ = s[5].default,
		b = t($, s, s[4], null);
	return {
		c() {
			(e = o('section')), b && b.c(), this.h();
		},
		l(s) {
			e = c(s, 'SECTION', { id: !0, class: !0 });
			var i = n(e);
			b && b.l(i), i.forEach(a), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (i = s[3][s[0]] + ' ' + s[2] + ' svelte-113ecvs'));
		},
		m(s, i) {
			r(s, e, i), b && b.m(e, null), (u = !0);
		},
		p(s, [t]) {
			b && b.p && 16 & t && d(b, $, s, s[4], t, null, null),
				(!u || 2 & t) && l(e, 'id', s[1]),
				(!u || (5 & t && i !== (i = s[3][s[0]] + ' ' + s[2] + ' svelte-113ecvs'))) &&
					l(e, 'class', i);
		},
		i(s) {
			u || (_(b, s), (u = !0));
		},
		o(s) {
			S(b, s), (u = !1);
		},
		d(s) {
			s && a(e), b && b.d(s);
		}
	};
}
function $(s, e, i) {
	let { $$slots: t = {}, $$scope: o } = e,
		{ variante: c = 0 } = e,
		{ id: n = '' } = e,
		{ bg_color: a = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && i(0, (c = s.variante)),
				'id' in s && i(1, (n = s.id)),
				'bg_color' in s && i(2, (a = s.bg_color)),
				'$$scope' in s && i(4, (o = s.$$scope));
		}),
		[
			c,
			n,
			a,
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
class b extends s {
	constructor(s) {
		super(), e(this, s, $, u, i, { variante: 0, id: 1, bg_color: 2 });
	}
}
export { b as S };
