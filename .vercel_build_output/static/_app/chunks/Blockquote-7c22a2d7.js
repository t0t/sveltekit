import {
	S as s,
	i as t,
	s as a,
	M as e,
	e as l,
	j as o,
	c,
	a as n,
	l as i,
	d as r,
	o as u,
	f as h,
	g as p,
	O as v,
	w as d,
	x as $,
	t as f,
	b as q,
	h as x
} from './index-d91e1ed8.js';
/* empty css                          */ const m = (s) => ({}),
	k = (s) => ({});
function B(s) {
	let t, a, B, b;
	const j = s[4].default,
		E = e(j, s, s[3], null),
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
						var l = n(t);
						(a = q(l, s[0])), l.forEach(r), this.h();
					},
					h() {
						u(t, 'class', 'svelte-1sq4vin');
					},
					m(s, e) {
						h(s, t, e), p(t, a);
					},
					p(s, t) {
						1 & t && x(a, s[0]);
					},
					d(s) {
						s && r(t);
					}
				};
			})(s),
		Q = s[4].author,
		_ = e(Q, s, s[3], k);
	return {
		c() {
			(t = l('blockquote')), O && O.c(), (a = o()), _ && _.c(), this.h();
		},
		l(s) {
			t = c(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			O && O.l(e), (a = i(e)), _ && _.l(e), e.forEach(r), this.h();
		},
		h() {
			u(t, 'class', (B = s[2][s[1]] + '  svelte-1sq4vin'));
		},
		m(s, e) {
			h(s, t, e), O && O.m(t, null), p(t, a), _ && _.m(t, null), (b = !0);
		},
		p(s, [a]) {
			E ? E.p && 8 & a && v(E, j, s, s[3], a, null, null) : O && O.p && 1 & a && O.p(s, a),
				_ && _.p && 8 & a && v(_, Q, s, s[3], a, m, k),
				(!b || (2 & a && B !== (B = s[2][s[1]] + '  svelte-1sq4vin'))) && u(t, 'class', B);
		},
		i(s) {
			b || (d(O, s), d(_, s), (b = !0));
		},
		o(s) {
			$(O, s), $(_, s), (b = !1);
		},
		d(s) {
			s && r(t), O && O.d(s), _ && _.d(s);
		}
	};
}
function b(s, t, a) {
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
		super(), t(this, s, b, B, a, { text: 0, variante: 1 });
	}
}
export { j as B };
