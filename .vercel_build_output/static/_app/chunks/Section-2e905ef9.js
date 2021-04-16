import {
	S as s,
	i as e,
	s as i,
	M as o,
	e as t,
	c as a,
	a as n,
	d as c,
	o as l,
	f as r,
	O as d,
	w as _,
	x as p
} from './index-d91e1ed8.js';
import './Header-2dba8d98.js';
function S(s) {
	let e, i, S;
	const u = s[5].default,
		$ = o(u, s, s[4], null);
	return {
		c() {
			(e = t('section')), $ && $.c(), this.h();
		},
		l(s) {
			e = a(s, 'SECTION', { id: !0, class: !0 });
			var i = n(e);
			$ && $.l(i), i.forEach(c), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (i = s[3][s[0]] + ' ' + s[2] + ' svelte-aipohp'));
		},
		m(s, i) {
			r(s, e, i), $ && $.m(e, null), (S = !0);
		},
		p(s, [o]) {
			$ && $.p && 16 & o && d($, u, s, s[4], o, null, null),
				(!S || 2 & o) && l(e, 'id', s[1]),
				(!S || (5 & o && i !== (i = s[3][s[0]] + ' ' + s[2] + ' svelte-aipohp'))) &&
					l(e, 'class', i);
		},
		i(s) {
			S || (_($, s), (S = !0));
		},
		o(s) {
			p($, s), (S = !1);
		},
		d(s) {
			s && c(e), $ && $.d(s);
		}
	};
}
function u(s, e, i) {
	let { $$slots: o = {}, $$scope: t } = e,
		{ variante: a = 0 } = e,
		{ id: n = '' } = e,
		{ bg_color: c = 'bgc_1' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && i(0, (a = s.variante)),
				'id' in s && i(1, (n = s.id)),
				'bg_color' in s && i(2, (c = s.bg_color)),
				'$$scope' in s && i(4, (t = s.$$scope));
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
			o
		]
	);
}
class $ extends s {
	constructor(s) {
		super(), e(this, s, u, S, i, { variante: 0, id: 1, bg_color: 2 });
	}
}
export { $ as S };
