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
	w as $,
	x as h
} from './index-d91e1ed8.js';
function f(s) {
	let a, t, f;
	const p = s[4].default,
		v = e(p, s, s[3], null);
	return {
		c() {
			(a = i('section')), v && v.c(), this.h();
		},
		l(s) {
			a = n(s, 'SECTION', { id: !0, class: !0 });
			var t = c(a);
			v && v.l(t), t.forEach(l), this.h();
		},
		h() {
			o(a, 'id', s[1]), o(a, 'class', (t = r(s[2][s[0]]) + ' svelte-tm5fh9'));
		},
		m(s, t) {
			d(s, a, t), v && v.m(a, null), (f = !0);
		},
		p(s, [e]) {
			v && v.p && 8 & e && u(v, p, s, s[3], e, null, null),
				(!f || 2 & e) && o(a, 'id', s[1]),
				(!f || (1 & e && t !== (t = r(s[2][s[0]]) + ' svelte-tm5fh9'))) && o(a, 'class', t);
		},
		i(s) {
			f || ($(v, s), (f = !0));
		},
		o(s) {
			h(v, s), (f = !1);
		},
		d(s) {
			s && l(a), v && v.d(s);
		}
	};
}
function p(s, a, t) {
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
class v extends s {
	constructor(s) {
		super(), a(this, s, p, f, t, { variante: 0, id: 1 });
	}
}
export { v as S };
