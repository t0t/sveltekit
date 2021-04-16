import {
	S as s,
	i as e,
	s as i,
	M as t,
	e as o,
	c as n,
	a,
	d as c,
	o as l,
	f as r,
	O as d,
	w as _,
	x as S
} from './index-d91e1ed8.js';
import './Header-bbb40db3.js';
function b(s) {
	let e, i, b;
	const u = s[5].default,
		$ = t(u, s, s[4], null);
	return {
		c() {
			(e = o('section')), $ && $.c(), this.h();
		},
		l(s) {
			e = n(s, 'SECTION', { id: !0, class: !0 });
			var i = a(e);
			$ && $.l(i), i.forEach(c), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (i = s[3][s[0]] + ' ' + s[2] + ' svelte-7lddgb'));
		},
		m(s, i) {
			r(s, e, i), $ && $.m(e, null), (b = !0);
		},
		p(s, [t]) {
			$ && $.p && 16 & t && d($, u, s, s[4], t, null, null),
				(!b || 2 & t) && l(e, 'id', s[1]),
				(!b || (5 & t && i !== (i = s[3][s[0]] + ' ' + s[2] + ' svelte-7lddgb'))) &&
					l(e, 'class', i);
		},
		i(s) {
			b || (_($, s), (b = !0));
		},
		o(s) {
			S($, s), (b = !1);
		},
		d(s) {
			s && c(e), $ && $.d(s);
		}
	};
}
function u(s, e, i) {
	let { $$slots: t = {}, $$scope: o } = e,
		{ variante: n = 0 } = e,
		{ id: a = '' } = e,
		{ bg_color: c = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && i(0, (n = s.variante)),
				'id' in s && i(1, (a = s.id)),
				'bg_color' in s && i(2, (c = s.bg_color)),
				'$$scope' in s && i(4, (o = s.$$scope));
		}),
		[
			n,
			a,
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
			o,
			t
		]
	);
}
class $ extends s {
	constructor(s) {
		super(), e(this, s, u, b, i, { variante: 0, id: 1, bg_color: 2 });
	}
}
export { $ as S };
