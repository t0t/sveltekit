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
	w as $,
	x as v,
	t as f,
	b as x,
	h as m
} from './index-d91e1ed8.js';
const q = (s) => ({}),
	g = (s) => ({});
function k(s) {
	let t, a, k, B;
	const b = s[4].default,
		y = e(b, s, s[3], null),
		E =
			y ||
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
						u(t, 'class', 'svelte-1yter9g');
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
		j = e(O, s, s[3], g);
	return {
		c() {
			(t = l('blockquote')), E && E.c(), (a = c()), j && j.c(), this.h();
		},
		l(s) {
			t = o(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			E && E.l(e), (a = r(e)), j && j.l(e), e.forEach(i), this.h();
		},
		h() {
			u(t, 'class', (k = s[2][s[1]] + '  svelte-1yter9g'));
		},
		m(s, e) {
			h(s, t, e), E && E.m(t, null), p(t, a), j && j.m(t, null), (B = !0);
		},
		p(s, [a]) {
			y ? y.p && 8 & a && d(y, b, s, s[3], a, null, null) : E && E.p && 1 & a && E.p(s, a),
				j && j.p && 8 & a && d(j, O, s, s[3], a, q, g),
				(!B || (2 & a && k !== (k = s[2][s[1]] + '  svelte-1yter9g'))) && u(t, 'class', k);
		},
		i(s) {
			B || ($(E, s), $(j, s), (B = !0));
		},
		o(s) {
			v(E, s), v(j, s), (B = !1);
		},
		d(s) {
			s && i(t), E && E.d(s), j && j.d(s);
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
