import { c as t } from './index-78b22dae.js';
import {
	V as s,
	S as a,
	i as e,
	s as n,
	k as r,
	f as i,
	n as c,
	d as l,
	O as o,
	e as u,
	t as d,
	c as f,
	a as h,
	b as p,
	o as m,
	U as g,
	g as v,
	G as y,
	h as x
} from './index-83f33906.js';
function b(t, { delay: a = 0, duration: e = 400, easing: n = s } = {}) {
	const r = +getComputedStyle(t).opacity;
	return { delay: a, duration: e, easing: n, css: (t) => 'opacity: ' + t * r };
}
function j(
	s,
	{ delay: a = 0, duration: e = 400, easing: n = t, x: r = 0, y: i = 0, opacity: c = 0 } = {}
) {
	const l = getComputedStyle(s),
		o = +l.opacity,
		u = 'none' === l.transform ? '' : l.transform,
		d = o * (1 - c);
	return {
		delay: a,
		duration: e,
		easing: n,
		css: (t, s) =>
			`\n\t\t\ttransform: ${u} translate(${(1 - t) * r}px, ${(1 - t) * i}px);\n\t\t\topacity: ${
				o - d * s
			}`
	};
}
function $(t) {
	let s, a, e, n, r;
	return {
		c() {
			(s = u('button')), (a = d(t[0])), this.h();
		},
		l(e) {
			s = f(e, 'BUTTON', { class: !0 });
			var n = h(s);
			(a = p(n, t[0])), n.forEach(l), this.h();
		},
		h() {
			m(s, 'class', (e = g(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, c) {
			i(e, s, c), v(s, a), n || ((r = y(s, 'click', t[7])), (n = !0));
		},
		p(t, n) {
			1 & n && x(a, t[0]),
				16 & n && e !== (e = g(t[5][t[4]]) + ' svelte-1cj8l1u') && m(s, 'class', e);
		},
		d(t) {
			t && l(s), (n = !1), r();
		}
	};
}
function k(t) {
	let s, a, e, n, r;
	return {
		c() {
			(s = u('button')), (a = d(t[0])), this.h();
		},
		l(e) {
			s = f(e, 'BUTTON', { type: !0, class: !0 });
			var n = h(s);
			(a = p(n, t[0])), n.forEach(l), this.h();
		},
		h() {
			m(s, 'type', 'submit'), m(s, 'class', (e = g(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, c) {
			i(e, s, c), v(s, a), n || ((r = y(s, 'click', t[6])), (n = !0));
		},
		p(t, n) {
			1 & n && x(a, t[0]),
				16 & n && e !== (e = g(t[5][t[4]]) + ' svelte-1cj8l1u') && m(s, 'class', e);
		},
		d(t) {
			t && l(s), (n = !1), r();
		}
	};
}
function T(t) {
	let s, a, e;
	return {
		c() {
			(s = u('a')), (a = d(t[0])), this.h();
		},
		l(e) {
			s = f(e, 'A', { href: !0, target: !0, class: !0 });
			var n = h(s);
			(a = p(n, t[0])), n.forEach(l), this.h();
		},
		h() {
			m(s, 'href', t[1]),
				m(s, 'target', t[3]),
				m(s, 'class', (e = g(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(t, e) {
			i(t, s, e), v(s, a);
		},
		p(t, n) {
			1 & n && x(a, t[0]),
				2 & n && m(s, 'href', t[1]),
				8 & n && m(s, 'target', t[3]),
				16 & n && e !== (e = g(t[5][t[4]]) + ' svelte-1cj8l1u') && m(s, 'class', e);
		},
		d(t) {
			t && l(s);
		}
	};
}
function _(t) {
	let s;
	function a(t, s) {
		return t[1] ? T : t[2] ? k : $;
	}
	let e = a(t),
		n = e(t);
	return {
		c() {
			n.c(), (s = r());
		},
		l(t) {
			n.l(t), (s = r());
		},
		m(t, a) {
			n.m(t, a), i(t, s, a);
		},
		p(t, [r]) {
			e === (e = a(t)) && n ? n.p(t, r) : (n.d(1), (n = e(t)), n && (n.c(), n.m(s.parentNode, s)));
		},
		i: c,
		o: c,
		d(t) {
			n.d(t), t && l(s);
		}
	};
}
function C(t, s, a) {
	let { text: e = '' } = s,
		{ url: n = '' } = s,
		{ is_submit: r = !1 } = s,
		{ target: i = '_blank' } = s,
		{ variante: c = 0 } = s;
	return (
		(t.$$set = (t) => {
			'text' in t && a(0, (e = t.text)),
				'url' in t && a(1, (n = t.url)),
				'is_submit' in t && a(2, (r = t.is_submit)),
				'target' in t && a(3, (i = t.target)),
				'variante' in t && a(4, (c = t.variante));
		}),
		[
			e,
			n,
			r,
			i,
			c,
			['Light', 'Dark', 'Colored', 'ColoredInvert', 'UnicodeIcon', 'ScrollTo'],
			function (s) {
				o(t, s);
			},
			function (s) {
				o(t, s);
			}
		]
	);
}
class S extends a {
	constructor(t) {
		super(), e(this, t, C, _, n, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4 });
	}
}
export { S as B, j as a, b as f };
