import {
	S as s,
	i as e,
	s as o,
	M as i,
	e as t,
	c as a,
	a as n,
	d as c,
	o as l,
	f as r,
	O as d,
	w as _,
	x as S
} from './index-d91e1ed8.js';
import './Header-72a33ab9.js';
function u(s) {
	let e, o, u;
	const $ = s[5].default,
		p = i($, s, s[4], null);
	return {
		c() {
			(e = t('section')), p && p.c(), this.h();
		},
		l(s) {
			e = a(s, 'SECTION', { id: !0, class: !0 });
			var o = n(e);
			p && p.l(o), o.forEach(c), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (o = s[3][s[0]] + ' ' + s[2] + ' svelte-1ovybqj'));
		},
		m(s, o) {
			r(s, e, o), p && p.m(e, null), (u = !0);
		},
		p(s, [i]) {
			p && p.p && 16 & i && d(p, $, s, s[4], i, null, null),
				(!u || 2 & i) && l(e, 'id', s[1]),
				(!u || (5 & i && o !== (o = s[3][s[0]] + ' ' + s[2] + ' svelte-1ovybqj'))) &&
					l(e, 'class', o);
		},
		i(s) {
			u || (_(p, s), (u = !0));
		},
		o(s) {
			S(p, s), (u = !1);
		},
		d(s) {
			s && c(e), p && p.d(s);
		}
	};
}
function $(s, e, o) {
	let { $$slots: i = {}, $$scope: t } = e,
		{ variante: a = 0 } = e,
		{ id: n = '' } = e,
		{ bg_color: c = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && o(0, (a = s.variante)),
				'id' in s && o(1, (n = s.id)),
				'bg_color' in s && o(2, (c = s.bg_color)),
				'$$scope' in s && o(4, (t = s.$$scope));
		}),
		[
			a,
			n,
			c,
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
		super(), e(this, s, $, u, o, { variante: 0, id: 1, bg_color: 2 });
	}
}
export { p as S };
