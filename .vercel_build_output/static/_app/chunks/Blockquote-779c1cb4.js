import {
	S as s,
	i as t,
	s as a,
	M as e,
	e as l,
	j as o,
	c,
	a as n,
	l as r,
	d as i,
	o as u,
	f as h,
	g as p,
	O as f,
	w as d,
	x as v,
	t as $,
	b as x,
	h as m
} from './index-d91e1ed8.js';
/* empty css                          */ const b = (s) => ({}),
	q = (s) => ({});
function k(s) {
	let t, a, k, B;
	const j = s[4].default,
		E = e(j, s, s[3], null),
		O =
			E ||
			(function (s) {
				let t, a;
				return {
					c() {
						(t = l('q')), (a = $(s[0])), this.h();
					},
					l(e) {
						t = c(e, 'Q', { class: !0 });
						var l = n(t);
						(a = x(l, s[0])), l.forEach(i), this.h();
					},
					h() {
						u(t, 'class', 'svelte-1b31f2o');
					},
					m(s, e) {
						h(s, t, e), p(t, a);
					},
					p(s, t) {
						1 & t && m(a, s[0]);
					},
					d(s) {
						s && i(t);
					}
				};
			})(s),
		Q = s[4].author,
		_ = e(Q, s, s[3], q);
	return {
		c() {
			(t = l('blockquote')), O && O.c(), (a = o()), _ && _.c(), this.h();
		},
		l(s) {
			t = c(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			O && O.l(e), (a = r(e)), _ && _.l(e), e.forEach(i), this.h();
		},
		h() {
			u(t, 'class', (k = s[2][s[1]] + '  svelte-1b31f2o'));
		},
		m(s, e) {
			h(s, t, e), O && O.m(t, null), p(t, a), _ && _.m(t, null), (B = !0);
		},
		p(s, [a]) {
			E ? E.p && 8 & a && f(E, j, s, s[3], a, null, null) : O && O.p && 1 & a && O.p(s, a),
				_ && _.p && 8 & a && f(_, Q, s, s[3], a, b, q),
				(!B || (2 & a && k !== (k = s[2][s[1]] + '  svelte-1b31f2o'))) && u(t, 'class', k);
		},
		i(s) {
			B || (d(O, s), d(_, s), (B = !0));
		},
		o(s) {
			v(O, s), v(_, s), (B = !1);
		},
		d(s) {
			s && i(t), O && O.d(s), _ && _.d(s);
		}
	};
}
function B(s, t, a) {
	let { $$slots: e = {}, $$scope: l } = t,
		{ text: o = 'blockquote' } = t,
		{ variante: c = 0 } = t;
	return (
		(s.$$set = (s) => {
			'text' in s && a(0, (o = s.text)),
				'variante' in s && a(1, (c = s.variante)),
				'$$scope' in s && a(3, (l = s.$$scope));
		}),
		[o, c, ['Blockquote_0', 'Blockquote_1'], l, e]
	);
}
class j extends s {
	constructor(s) {
		super(), t(this, s, B, k, a, { text: 0, variante: 1 });
	}
}
export { j as B };
