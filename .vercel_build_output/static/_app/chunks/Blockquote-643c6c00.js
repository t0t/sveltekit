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
	O as d,
	w as v,
	x as $,
	t as f,
	b as x,
	h as m
} from './index-d91e1ed8.js';
/* empty css                          */ const w = (s) => ({}),
	q = (s) => ({});
function k(s) {
	let t, a, k, B;
	const b = s[4].default,
		j = e(b, s, s[3], null),
		y =
			j ||
			(function (s) {
				let t, a;
				return {
					c() {
						(t = l('q')), (a = f(s[0])), this.h();
					},
					l(e) {
						t = c(e, 'Q', { class: !0 });
						var l = n(t);
						(a = x(l, s[0])), l.forEach(i), this.h();
					},
					h() {
						u(t, 'class', 'svelte-1w9oyw9');
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
		E = s[4].author,
		O = e(E, s, s[3], q);
	return {
		c() {
			(t = l('blockquote')), y && y.c(), (a = o()), O && O.c(), this.h();
		},
		l(s) {
			t = c(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			y && y.l(e), (a = r(e)), O && O.l(e), e.forEach(i), this.h();
		},
		h() {
			u(t, 'class', (k = s[2][s[1]] + '  svelte-1w9oyw9'));
		},
		m(s, e) {
			h(s, t, e), y && y.m(t, null), p(t, a), O && O.m(t, null), (B = !0);
		},
		p(s, [a]) {
			j ? j.p && 8 & a && d(j, b, s, s[3], a, null, null) : y && y.p && 1 & a && y.p(s, a),
				O && O.p && 8 & a && d(O, E, s, s[3], a, w, q),
				(!B || (2 & a && k !== (k = s[2][s[1]] + '  svelte-1w9oyw9'))) && u(t, 'class', k);
		},
		i(s) {
			B || (v(y, s), v(O, s), (B = !0));
		},
		o(s) {
			$(y, s), $(O, s), (B = !1);
		},
		d(s) {
			s && i(t), y && y.d(s), O && O.d(s);
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
class b extends s {
	constructor(s) {
		super(), t(this, s, B, k, a, { text: 0, variante: 1 });
	}
}
export { b as B };
