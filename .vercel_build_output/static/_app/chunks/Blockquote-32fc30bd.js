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
	t as q,
	b as f,
	h as x
} from './index-d91e1ed8.js';
/* empty css                          */ const m = (s) => ({}),
	k = (s) => ({});
function B(s) {
	let t, a, B, g;
	const w = s[4].default,
		b = e(w, s, s[3], null),
		j =
			b ||
			(function (s) {
				let t, a;
				return {
					c() {
						(t = l('q')), (a = q(s[0])), this.h();
					},
					l(e) {
						t = c(e, 'Q', { class: !0 });
						var l = n(t);
						(a = f(l, s[0])), l.forEach(i), this.h();
					},
					h() {
						u(t, 'class', 'svelte-14yqwg2');
					},
					m(s, e) {
						h(s, t, e), p(t, a);
					},
					p(s, t) {
						1 & t && x(a, s[0]);
					},
					d(s) {
						s && i(t);
					}
				};
			})(s),
		y = s[4].author,
		E = e(y, s, s[3], k);
	return {
		c() {
			(t = l('blockquote')), j && j.c(), (a = o()), E && E.c(), this.h();
		},
		l(s) {
			t = c(s, 'BLOCKQUOTE', { class: !0 });
			var e = n(t);
			j && j.l(e), (a = r(e)), E && E.l(e), e.forEach(i), this.h();
		},
		h() {
			u(t, 'class', (B = s[2][s[1]] + '  svelte-14yqwg2'));
		},
		m(s, e) {
			h(s, t, e), j && j.m(t, null), p(t, a), E && E.m(t, null), (g = !0);
		},
		p(s, [a]) {
			b ? b.p && 8 & a && d(b, w, s, s[3], a, null, null) : j && j.p && 1 & a && j.p(s, a),
				E && E.p && 8 & a && d(E, y, s, s[3], a, m, k),
				(!g || (2 & a && B !== (B = s[2][s[1]] + '  svelte-14yqwg2'))) && u(t, 'class', B);
		},
		i(s) {
			g || (v(j, s), v(E, s), (g = !0));
		},
		o(s) {
			$(j, s), $(E, s), (g = !1);
		},
		d(s) {
			s && i(t), j && j.d(s), E && E.d(s);
		}
	};
}
function g(s, t, a) {
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
class w extends s {
	constructor(s) {
		super(), t(this, s, g, B, a, { text: 0, variante: 1 });
	}
}
export { w as B };
