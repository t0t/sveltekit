import {
	S as s,
	i as e,
	s as a,
	M as t,
	e as i,
	c as n,
	a as c,
	d as o,
	o as l,
	I as r,
	f as d,
	O as u,
	w as $,
	x as S
} from './index-d91e1ed8.js';
function f(s) {
	let e, a, f;
	const p = s[4].default,
		h = t(p, s, s[3], null);
	return {
		c() {
			(e = i('section')), h && h.c(), this.h();
		},
		l(s) {
			e = n(s, 'SECTION', { id: !0, class: !0 });
			var a = c(e);
			h && h.l(a), a.forEach(o), this.h();
		},
		h() {
			l(e, 'id', s[1]), l(e, 'class', (a = r(s[2][s[0]]) + ' svelte-qyc0uf'));
		},
		m(s, a) {
			d(s, e, a), h && h.m(e, null), (f = !0);
		},
		p(s, [t]) {
			h && h.p && 8 & t && u(h, p, s, s[3], t, null, null),
				(!f || 2 & t) && l(e, 'id', s[1]),
				(!f || (1 & t && a !== (a = r(s[2][s[0]]) + ' svelte-qyc0uf'))) && l(e, 'class', a);
		},
		i(s) {
			f || ($(h, s), (f = !0));
		},
		o(s) {
			S(h, s), (f = !1);
		},
		d(s) {
			s && o(e), h && h.d(s);
		}
	};
}
function p(s, e, a) {
	let { $$slots: t = {}, $$scope: i } = e,
		{ variante: n = 0 } = e,
		{ id: c = '' } = e;
	return (
		(s.$$set = (s) => {
			'variante' in s && a(0, (n = s.variante)),
				'id' in s && a(1, (c = s.id)),
				'$$scope' in s && a(3, (i = s.$$scope));
		}),
		[n, c, ['Section_0', 'Section_1', 'Section_2', 'Section_3', 'Section_4', 'Section_5'], i, t]
	);
}
class h extends s {
	constructor(s) {
		super(), e(this, s, p, f, a, { variante: 0, id: 1 });
	}
}
export { h as S };
