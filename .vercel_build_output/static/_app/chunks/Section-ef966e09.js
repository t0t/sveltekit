import {
	S as s,
	i as e,
	s as n,
	M as i,
	e as t,
	c as o,
	a as c,
	d as a,
	o as l,
	f as r,
	O as d,
	w as _,
	x as S
} from './index-d91e1ed8.js';
import './Header-cd15ff25.js';
function u(s) {
	let e, n, u;
	const $ = s[5].default,
		p = i($, s, s[4], null);
	return {
		c() {
			(e = t('section')), p && p.c(), this.h();
		},
		l(s) {
			e = o(s, 'SECTION', { id: !0, class: !0 });
			var n = c(e);
			p && p.l(n), n.forEach(a), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (n = s[3][s[0]] + ' ' + s[2] + ' svelte-195n6ny'));
		},
		m(s, n) {
			r(s, e, n), p && p.m(e, null), (u = !0);
		},
		p(s, [i]) {
			p && p.p && 16 & i && d(p, $, s, s[4], i, null, null),
				(!u || 2 & i) && l(e, 'id', s[1]),
				(!u || (5 & i && n !== (n = s[3][s[0]] + ' ' + s[2] + ' svelte-195n6ny'))) &&
					l(e, 'class', n);
		},
		i(s) {
			u || (_(p, s), (u = !0));
		},
		o(s) {
			S(p, s), (u = !1);
		},
		d(s) {
			s && a(e), p && p.d(s);
		}
	};
}
function $(s, e, n) {
	let { $$slots: i = {}, $$scope: t } = e,
		{ variante: o = 0 } = e,
		{ id: c = '' } = e,
		{ bg_color: a = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && n(0, (o = s.variante)),
				'id' in s && n(1, (c = s.id)),
				'bg_color' in s && n(2, (a = s.bg_color)),
				'$$scope' in s && n(4, (t = s.$$scope));
		}),
		[
			o,
			c,
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
			t,
			i
		]
	);
}
class p extends s {
	constructor(s) {
		super(), e(this, s, $, u, n, { variante: 0, id: 1, bg_color: 2 });
	}
}
export { p as S };
