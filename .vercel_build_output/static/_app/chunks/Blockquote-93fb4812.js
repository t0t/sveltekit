import {
	S as s,
	i as t,
	s as a,
	M as e,
	e as l,
	j as c,
	c as o,
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
/* empty css                          */ const j = (s) => ({}),
	q = (s) => ({});
function k(s) {
	let t, a, k, B;
	const b = s[4].default,
		z = e(b, s, s[3], null),
		E =
			z ||
			(function (s) {
				let t, a;
				return {
					c() {
						(t = l('q')), (a = f(s[0])), this.h();
					},
					l(e) {
						t = o(e, 'Q', { class: !0 });
						var l = n(t);
						(a = x(l, s[0])), l.forEach(i), this.h();
					},
					h() {
						u(t, 'class', 'svelte-lz8j8a');
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
		O = s[4].author,
		Q = e(O, s, s[3], q);
	return {
		c() {
			(t = l('blockquote')), E && E.c(), (a = c()), Q && Q.c(), this.h();
		},
		l(s) {
			t = o(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			E && E.l(e), (a = r(e)), Q && Q.l(e), e.forEach(i), this.h();
		},
		h() {
			u(t, 'class', (k = s[2][s[1]] + '  svelte-lz8j8a'));
		},
		m(s, e) {
			h(s, t, e), E && E.m(t, null), p(t, a), Q && Q.m(t, null), (B = !0);
		},
		p(s, [a]) {
			z ? z.p && 8 & a && d(z, b, s, s[3], a, null, null) : E && E.p && 1 & a && E.p(s, a),
				Q && Q.p && 8 & a && d(Q, O, s, s[3], a, j, q),
				(!B || (2 & a && k !== (k = s[2][s[1]] + '  svelte-lz8j8a'))) && u(t, 'class', k);
		},
		i(s) {
			B || (v(E, s), v(Q, s), (B = !0));
		},
		o(s) {
			$(E, s), $(Q, s), (B = !1);
		},
		d(s) {
			s && i(t), E && E.d(s), Q && Q.d(s);
		}
	};
}
function B(s, t, a) {
	let { $$slots: e = {}, $$scope: l } = t,
		{ text: c = 'blockquote' } = t,
		{ variante: o = 0 } = t;
	return (
		(s.$$set = (s) => {
			'text' in s && a(0, (c = s.text)),
				'variante' in s && a(1, (o = s.variante)),
				'$$scope' in s && a(3, (l = s.$$scope));
		}),
		[c, o, ['Blockquote_0', 'Blockquote_1'], l, e]
	);
}
class b extends s {
	constructor(s) {
		super(), t(this, s, B, k, a, { text: 0, variante: 1 });
	}
}
export { b as B };
