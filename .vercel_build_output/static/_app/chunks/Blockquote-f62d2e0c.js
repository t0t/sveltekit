import {
	S as s,
	i as t,
	s as a,
	M as e,
	e as l,
	j as n,
	c,
	a as o,
	l as r,
	d as i,
	o as u,
	f as h,
	g as p,
	O as v,
	w as d,
	x as $,
	t as f,
	b as x,
	h as m
} from './index-d91e1ed8.js';
const q = (s) => ({}),
	k = (s) => ({});
function B(s) {
	let t, a, B, b;
	const y = s[4].default,
		E = e(y, s, s[3], null),
		O =
			E ||
			(function (s) {
				let t, a;
				return {
					c() {
						(t = l('q')), (a = f(s[0])), this.h();
					},
					l(e) {
						t = c(e, 'Q', { class: !0 });
						var l = o(t);
						(a = x(l, s[0])), l.forEach(i), this.h();
					},
					h() {
						u(t, 'class', 'svelte-rnv21y');
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
		j = s[4].author,
		Q = e(j, s, s[3], k);
	return {
		c() {
			(t = l('blockquote')), O && O.c(), (a = n()), Q && Q.c(), this.h();
		},
		l(s) {
			t = c(s, 'BLOCKQUOTE', { class: !0 });
			var e = o(t);
			O && O.l(e), (a = r(e)), Q && Q.l(e), e.forEach(i), this.h();
		},
		h() {
			u(t, 'class', (B = s[2][s[1]] + '  svelte-rnv21y'));
		},
		m(s, e) {
			h(s, t, e), O && O.m(t, null), p(t, a), Q && Q.m(t, null), (b = !0);
		},
		p(s, [a]) {
			E ? E.p && 8 & a && v(E, y, s, s[3], a, null, null) : O && O.p && 1 & a && O.p(s, a),
				Q && Q.p && 8 & a && v(Q, j, s, s[3], a, q, k),
				(!b || (2 & a && B !== (B = s[2][s[1]] + '  svelte-rnv21y'))) && u(t, 'class', B);
		},
		i(s) {
			b || (d(O, s), d(Q, s), (b = !0));
		},
		o(s) {
			$(O, s), $(Q, s), (b = !1);
		},
		d(s) {
			s && i(t), O && O.d(s), Q && Q.d(s);
		}
	};
}
function b(s, t, a) {
	let { $$slots: e = {}, $$scope: l } = t,
		{ text: n = 'blockquote' } = t,
		{ variante: c = 0 } = t;
	return (
		(s.$$set = (s) => {
			'text' in s && a(0, (n = s.text)),
				'variante' in s && a(1, (c = s.variante)),
				'$$scope' in s && a(3, (l = s.$$scope));
		}),
		[n, c, ['Blockquote_0', 'Blockquote_1'], l, e]
	);
}
class y extends s {
	constructor(s) {
		super(), t(this, s, b, B, a, { text: 0, variante: 1 });
	}
}
export { y as B };
