import {
	S as s,
	i as t,
	s as a,
	M as c,
	e,
	j as l,
	c as r,
	a as n,
	l as i,
	d as o,
	o as h,
	f as u,
	g as f,
	O as m,
	w as v,
	x as d,
	t as g,
	b as p,
	h as I,
	k as $,
	n as w,
	I as x,
	P as _
} from './index-d91e1ed8.js';
const k = (s) => ({}),
	E = (s) => ({});
function b(s) {
	let t, a, $, w;
	const x = s[6].default,
		_ = c(x, s, s[5], null),
		b =
			_ ||
			(function (s) {
				let t, a;
				return {
					c() {
						(t = e('q')), (a = g(s[0])), this.h();
					},
					l(c) {
						t = r(c, 'Q', { class: !0 });
						var e = n(t);
						(a = p(e, s[0])), e.forEach(o), this.h();
					},
					h() {
						h(t, 'class', 'svelte-1thr5a');
					},
					m(s, c) {
						u(s, t, c), f(t, a);
					},
					p(s, t) {
						1 & t && I(a, s[0]);
					},
					d(s) {
						s && o(t);
					}
				};
			})(s),
		q = s[6].author,
		B = c(q, s, s[5], E);
	return {
		c() {
			(t = e('blockquote')), b && b.c(), (a = l()), B && B.c(), this.h();
		},
		l(s) {
			t = r(s, 'BLOCKQUOTE', { class: !0 });
			var c = n(t);
			b && b.l(c), (a = i(c)), B && B.l(c), c.forEach(o), this.h();
		},
		h() {
			h(t, 'class', ($ = '\n' + s[4][s[1]] + ' ' + s[2] + ' ' + s[3] + '\n svelte-1thr5a'));
		},
		m(s, c) {
			u(s, t, c), b && b.m(t, null), f(t, a), B && B.m(t, null), (w = !0);
		},
		p(s, [a]) {
			_ ? _.p && 32 & a && m(_, x, s, s[5], a, null, null) : b && b.p && 1 & a && b.p(s, a),
				B && B.p && 32 & a && m(B, q, s, s[5], a, k, E),
				(!w ||
					(14 & a &&
						$ !== ($ = '\n' + s[4][s[1]] + ' ' + s[2] + ' ' + s[3] + '\n svelte-1thr5a'))) &&
					h(t, 'class', $);
		},
		i(s) {
			w || (v(b, s), v(B, s), (w = !0));
		},
		o(s) {
			d(b, s), d(B, s), (w = !1);
		},
		d(s) {
			s && o(t), b && b.d(s), B && B.d(s);
		}
	};
}
function q(s, t, a) {
	let { $$slots: c = {}, $$scope: e } = t,
		{ text: l = 'blockquote' } = t,
		{ variante: r = 0 } = t,
		{ align: n = 'tac' } = t,
		{ color: i = 'grey_0' } = t;
	return (
		(s.$$set = (s) => {
			'text' in s && a(0, (l = s.text)),
				'variante' in s && a(1, (r = s.variante)),
				'align' in s && a(2, (n = s.align)),
				'color' in s && a(3, (i = s.color)),
				'$$scope' in s && a(5, (e = s.$$scope));
		}),
		[l, r, n, i, ['Blockquote_0', 'Blockquote_1'], e, c]
	);
}
class B extends s {
	constructor(s) {
		super(), t(this, s, q, b, a, { text: 0, variante: 1, align: 2, color: 3 });
	}
}
function G(s) {
	let t, a, c, m, v, d, $;
	return {
		c() {
			(t = e('figure')), (a = e('img')), (m = l()), (v = e('figcaption')), (d = g(s[1])), this.h();
		},
		l(c) {
			t = r(c, 'FIGURE', { class: !0 });
			var e = n(t);
			(a = r(e, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(m = i(e)),
				(v = r(e, 'FIGCAPTION', { class: !0 }));
			var l = n(v);
			(d = p(l, s[1])), l.forEach(o), e.forEach(o), this.h();
		},
		h() {
			a.src !== (c = s[0]) && h(a, 'src', c),
				h(a, 'alt', s[1]),
				h(a, 'href', s[2]),
				h(a, 'class', 'svelte-1c4cmfw'),
				h(v, 'class', 'alt svelte-1c4cmfw'),
				h(t, 'class', ($ = x(s[4][s[3]]) + ' svelte-1c4cmfw'));
		},
		m(s, c) {
			u(s, t, c), f(t, a), f(t, m), f(t, v), f(v, d);
		},
		p(s, e) {
			1 & e && a.src !== (c = s[0]) && h(a, 'src', c),
				2 & e && h(a, 'alt', s[1]),
				4 & e && h(a, 'href', s[2]),
				2 & e && I(d, s[1]),
				8 & e && $ !== ($ = x(s[4][s[3]]) + ' svelte-1c4cmfw') && h(t, 'class', $);
		},
		d(s) {
			s && o(t);
		}
	};
}
function O(s) {
	let t, a, c;
	return {
		c() {
			(t = e('img')), this.h();
		},
		l(s) {
			(t = r(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			t.src !== (a = s[0]) && h(t, 'src', a),
				h(t, 'alt', s[1]),
				h(t, 'href', s[2]),
				h(t, 'class', (c = x(s[4][s[3]]) + ' svelte-1c4cmfw'));
		},
		m(s, a) {
			u(s, t, a);
		},
		p(s, e) {
			1 & e && t.src !== (a = s[0]) && h(t, 'src', a),
				2 & e && h(t, 'alt', s[1]),
				4 & e && h(t, 'href', s[2]),
				8 & e && c !== (c = x(s[4][s[3]]) + ' svelte-1c4cmfw') && h(t, 'class', c);
		},
		d(s) {
			s && o(t);
		}
	};
}
function M(s) {
	let t, a;
	return {
		c() {
			(t = e('div')), this.h();
		},
		l(s) {
			(t = r(s, 'DIV', { class: !0, style: !0 })), n(t).forEach(o), this.h();
		},
		h() {
			h(t, 'class', (a = x(s[4][s[3]]) + ' svelte-1c4cmfw')),
				_(t, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, a) {
			u(s, t, a);
		},
		p(s, c) {
			8 & c && a !== (a = x(s[4][s[3]]) + ' svelte-1c4cmfw') && h(t, 'class', a),
				1 & c && _(t, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && o(t);
		}
	};
}
function j(s) {
	let t;
	function a(s, t) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? M : 1 === s[3] || 5 === s[3] ? O : G;
	}
	let c = a(s),
		e = c(s);
	return {
		c() {
			e.c(), (t = $());
		},
		l(s) {
			e.l(s), (t = $());
		},
		m(s, a) {
			e.m(s, a), u(s, t, a);
		},
		p(s, [l]) {
			c === (c = a(s)) && e ? e.p(s, l) : (e.d(1), (e = c(s)), e && (e.c(), e.m(t.parentNode, t)));
		},
		i: w,
		o: w,
		d(s) {
			e.d(s), s && o(t);
		}
	};
}
function y(s, t, a) {
	let { src: c } = t,
		{ alt: e = 'Imagen' } = t,
		{ href: l } = t,
		{ variante: r = 0 } = t;
	return (
		(s.$$set = (s) => {
			'src' in s && a(0, (c = s.src)),
				'alt' in s && a(1, (e = s.alt)),
				'href' in s && a(2, (l = s.href)),
				'variante' in s && a(3, (r = s.variante));
		}),
		[c, e, l, r, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class C extends s {
	constructor(s) {
		super(), t(this, s, y, j, a, { src: 0, alt: 1, href: 2, variante: 3 });
	}
}
export { B, C as I };
