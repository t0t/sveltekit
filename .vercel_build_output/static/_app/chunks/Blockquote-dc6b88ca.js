import {
	S as s,
	i as t,
	s as a,
	M as e,
	e as l,
	j as o,
	c,
	a as n,
	l as u,
	d as r,
	o as i,
	f as d,
	g as h,
	O as p,
	w as v,
	x as $,
	t as f,
	b as x,
	h as m
} from './index-d91e1ed8.js';
/* empty css                          */ const q = (s) => ({}),
	b = (s) => ({});
function k(s) {
	let t, a, k, B;
	const g = s[4].default,
		j = e(g, s, s[3], null),
		E =
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
						(a = x(l, s[0])), l.forEach(r), this.h();
					},
					h() {
						i(t, 'class', 'svelte-1d76uvg');
					},
					m(s, e) {
						d(s, t, e), h(t, a);
					},
					p(s, t) {
						1 & t && m(a, s[0]);
					},
					d(s) {
						s && r(t);
					}
				};
			})(s),
		O = s[4].author,
		Q = e(O, s, s[3], b);
	return {
		c() {
			(t = l('blockquote')), E && E.c(), (a = o()), Q && Q.c(), this.h();
		},
		l(s) {
			t = c(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			E && E.l(e), (a = u(e)), Q && Q.l(e), e.forEach(r), this.h();
		},
		h() {
			i(t, 'class', (k = s[2][s[1]] + '  svelte-1d76uvg'));
		},
		m(s, e) {
			d(s, t, e), E && E.m(t, null), h(t, a), Q && Q.m(t, null), (B = !0);
		},
		p(s, [a]) {
			j ? j.p && 8 & a && p(j, g, s, s[3], a, null, null) : E && E.p && 1 & a && E.p(s, a),
				Q && Q.p && 8 & a && p(Q, O, s, s[3], a, q, b),
				(!B || (2 & a && k !== (k = s[2][s[1]] + '  svelte-1d76uvg'))) && i(t, 'class', k);
		},
		i(s) {
			B || (v(E, s), v(Q, s), (B = !0));
		},
		o(s) {
			$(E, s), $(Q, s), (B = !1);
		},
		d(s) {
			s && r(t), E && E.d(s), Q && Q.d(s);
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
class g extends s {
	constructor(s) {
		super(), t(this, s, B, k, a, { text: 0, variante: 1 });
	}
}
export { g as B };
