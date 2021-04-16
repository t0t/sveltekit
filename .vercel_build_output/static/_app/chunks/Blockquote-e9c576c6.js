import {
	S as s,
	i as t,
	s as a,
	M as e,
	e as l,
	j as c,
	c as o,
	a as n,
	l as u,
	d as r,
	o as i,
	f as h,
	g as p,
	O as v,
	w as x,
	x as d,
	t as $,
	b as f,
	h as m
} from './index-d91e1ed8.js';
const q = (s) => ({}),
	k = (s) => ({});
function B(s) {
	let t, a, B, b;
	const E = s[4].default,
		O = e(E, s, s[3], null),
		j =
			O ||
			(function (s) {
				let t, a;
				return {
					c() {
						(t = l('q')), (a = $(s[0])), this.h();
					},
					l(e) {
						t = o(e, 'Q', { class: !0 });
						var l = n(t);
						(a = f(l, s[0])), l.forEach(r), this.h();
					},
					h() {
						i(t, 'class', 'svelte-uvu07x');
					},
					m(s, e) {
						h(s, t, e), p(t, a);
					},
					p(s, t) {
						1 & t && m(a, s[0]);
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
			(t = l('blockquote')), j && j.c(), (a = c()), _ && _.c(), this.h();
		},
		l(s) {
			t = o(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			j && j.l(e), (a = u(e)), _ && _.l(e), e.forEach(r), this.h();
		},
		h() {
			i(t, 'class', (B = s[2][s[1]] + '  svelte-uvu07x'));
		},
		m(s, e) {
			h(s, t, e), j && j.m(t, null), p(t, a), _ && _.m(t, null), (b = !0);
		},
		p(s, [a]) {
			O ? O.p && 8 & a && v(O, E, s, s[3], a, null, null) : j && j.p && 1 & a && j.p(s, a),
				_ && _.p && 8 & a && v(_, Q, s, s[3], a, q, k),
				(!b || (2 & a && B !== (B = s[2][s[1]] + '  svelte-uvu07x'))) && i(t, 'class', B);
		},
		i(s) {
			b || (x(j, s), x(_, s), (b = !0));
		},
		o(s) {
			d(j, s), d(_, s), (b = !1);
		},
		d(s) {
			s && r(t), j && j.d(s), _ && _.d(s);
		}
	};
}
function b(s, t, a) {
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
class E extends s {
	constructor(s) {
		super(), t(this, s, b, B, a, { text: 0, variante: 1 });
	}
}
export { E as B };
