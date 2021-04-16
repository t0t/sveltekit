import {
	S as s,
	i as t,
	s as e,
	M as a,
	e as l,
	j as o,
	c,
	a as n,
	l as r,
	d as i,
	o as u,
	f as p,
	g as h,
	O as d,
	w as x,
	x as v,
	t as $,
	b as j,
	h as f
} from './index-d91e1ed8.js';
/* empty css                          */ const m = (s) => ({}),
	q = (s) => ({});
function k(s) {
	let t, e, k, B;
	const b = s[4].default,
		g = a(b, s, s[3], null),
		E =
			g ||
			(function (s) {
				let t, e;
				return {
					c() {
						(t = l('q')), (e = $(s[0])), this.h();
					},
					l(a) {
						t = c(a, 'Q', { class: !0 });
						var l = n(t);
						(e = j(l, s[0])), l.forEach(i), this.h();
					},
					h() {
						u(t, 'class', 'svelte-jp3xjg');
					},
					m(s, a) {
						p(s, t, a), h(t, e);
					},
					p(s, t) {
						1 & t && f(e, s[0]);
					},
					d(s) {
						s && i(t);
					}
				};
			})(s),
		O = s[4].author,
		Q = a(O, s, s[3], q);
	return {
		c() {
			(t = l('blockquote')), E && E.c(), (e = o()), Q && Q.c(), this.h();
		},
		l(s) {
			t = c(s, 'BLOCKQUOTE', { class: !0 });
			var a = n(t);
			E && E.l(a), (e = r(a)), Q && Q.l(a), a.forEach(i), this.h();
		},
		h() {
			u(t, 'class', (k = s[2][s[1]] + '  svelte-jp3xjg'));
		},
		m(s, a) {
			p(s, t, a), E && E.m(t, null), h(t, e), Q && Q.m(t, null), (B = !0);
		},
		p(s, [e]) {
			g ? g.p && 8 & e && d(g, b, s, s[3], e, null, null) : E && E.p && 1 & e && E.p(s, e),
				Q && Q.p && 8 & e && d(Q, O, s, s[3], e, m, q),
				(!B || (2 & e && k !== (k = s[2][s[1]] + '  svelte-jp3xjg'))) && u(t, 'class', k);
		},
		i(s) {
			B || (x(E, s), x(Q, s), (B = !0));
		},
		o(s) {
			v(E, s), v(Q, s), (B = !1);
		},
		d(s) {
			s && i(t), E && E.d(s), Q && Q.d(s);
		}
	};
}
function B(s, t, e) {
	let { $$slots: a = {}, $$scope: l } = t,
		{ text: o = 'blockquote' } = t,
		{ variante: c = 0 } = t;
	return (
		(s.$$set = (s) => {
			'text' in s && e(0, (o = s.text)),
				'variante' in s && e(1, (c = s.variante)),
				'$$scope' in s && e(3, (l = s.$$scope));
		}),
		[o, c, ['Blockquote_0', 'Blockquote_1'], l, a]
	);
}
class b extends s {
	constructor(s) {
		super(), t(this, s, B, k, e, { text: 0, variante: 1 });
	}
}
export { b as B };
