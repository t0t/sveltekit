import {
	S as s,
	i as a,
	s as t,
	M as l,
	e,
	j as n,
	c as o,
	a as c,
	l as r,
	d as i,
	o as u,
	f as h,
	g as p,
	O as d,
	w as $,
	x as m,
	t as v,
	b as f,
	h as x
} from './index-d91e1ed8.js';
const g = (s) => ({}),
	j = (s) => ({});
function q(s) {
	let a, t, q, k;
	const B = s[6].default,
		b = l(B, s, s[5], null),
		E =
			b ||
			(function (s) {
				let a, t;
				return {
					c() {
						(a = e('q')), (t = v(s[0])), this.h();
					},
					l(l) {
						a = o(l, 'Q', { class: !0 });
						var e = c(a);
						(t = f(e, s[0])), e.forEach(i), this.h();
					},
					h() {
						u(a, 'class', 'svelte-1rmsu4j');
					},
					m(s, l) {
						h(s, a, l), p(a, t);
					},
					p(s, a) {
						1 & a && x(t, s[0]);
					},
					d(s) {
						s && i(a);
					}
				};
			})(s),
		O = s[6].author,
		_ = l(O, s, s[5], j);
	return {
		c() {
			(a = e('blockquote')), E && E.c(), (t = n()), _ && _.c(), this.h();
		},
		l(s) {
			a = o(s, 'BLOCKQUOTE', { class: !0 });
			var l = c(a);
			E && E.l(l), (t = r(l)), _ && _.l(l), l.forEach(i), this.h();
		},
		h() {
			u(a, 'class', (q = '\n' + s[4][s[1]] + ' ' + s[2] + ' ' + s[3] + '\n svelte-1rmsu4j'));
		},
		m(s, l) {
			h(s, a, l), E && E.m(a, null), p(a, t), _ && _.m(a, null), (k = !0);
		},
		p(s, [t]) {
			b ? b.p && 32 & t && d(b, B, s, s[5], t, null, null) : E && E.p && 1 & t && E.p(s, t),
				_ && _.p && 32 & t && d(_, O, s, s[5], t, g, j),
				(!k ||
					(14 & t &&
						q !== (q = '\n' + s[4][s[1]] + ' ' + s[2] + ' ' + s[3] + '\n svelte-1rmsu4j'))) &&
					u(a, 'class', q);
		},
		i(s) {
			k || ($(E, s), $(_, s), (k = !0));
		},
		o(s) {
			m(E, s), m(_, s), (k = !1);
		},
		d(s) {
			s && i(a), E && E.d(s), _ && _.d(s);
		}
	};
}
function k(s, a, t) {
	let { $$slots: l = {}, $$scope: e } = a,
		{ text: n = 'blockquote' } = a,
		{ variante: o = 0 } = a,
		{ align: c = 'tac' } = a,
		{ color: r = 'grey_0' } = a;
	return (
		(s.$$set = (s) => {
			'text' in s && t(0, (n = s.text)),
				'variante' in s && t(1, (o = s.variante)),
				'align' in s && t(2, (c = s.align)),
				'color' in s && t(3, (r = s.color)),
				'$$scope' in s && t(5, (e = s.$$scope));
		}),
		[n, o, c, r, ['Blockquote_0', 'Blockquote_1'], e, l]
	);
}
class B extends s {
	constructor(s) {
		super(), a(this, s, k, q, t, { text: 0, variante: 1, align: 2, color: 3 });
	}
}
export { B };
