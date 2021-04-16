import {
	V as t,
	S as s,
	i as a,
	s as e,
	k as n,
	f as r,
	n as c,
	d as i,
	N as o,
	e as l,
	t as u,
	c as d,
	a as f,
	b as h,
	o as p,
	X as m,
	g,
	H as v,
	h as y
} from './index-a86d0367.js';
function b(t) {
	const s = 2.5949095;
	return (t *= 2) < 1
		? t * t * ((s + 1) * t - s) * 0.5
		: 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function x(t) {
	const s = t - 1;
	return s * s * s + 1;
}
function j(s, { delay: a = 0, duration: e = 400, easing: n = t } = {}) {
	const r = +getComputedStyle(s).opacity;
	return { delay: a, duration: e, easing: n, css: (t) => 'opacity: ' + t * r };
}
function $(
	t,
	{ delay: s = 0, duration: a = 400, easing: e = x, x: n = 0, y: r = 0, opacity: c = 0 } = {}
) {
	const i = getComputedStyle(t),
		o = +i.opacity,
		l = 'none' === i.transform ? '' : i.transform,
		u = o * (1 - c);
	return {
		delay: s,
		duration: a,
		easing: e,
		css: (t, s) =>
			`\n\t\t\ttransform: ${l} translate(${(1 - t) * n}px, ${(1 - t) * r}px);\n\t\t\topacity: ${
				o - u * s
			}`
	};
}
function k(t) {
	let s, a, e, n, c;
	return {
		c() {
			(s = l('button')), (a = u(t[0])), this.h();
		},
		l(e) {
			s = d(e, 'BUTTON', { class: !0 });
			var n = f(s);
			(a = h(n, t[0])), n.forEach(i), this.h();
		},
		h() {
			p(s, 'class', (e = m(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, i) {
			r(e, s, i), g(s, a), n || ((c = v(s, 'click', t[7])), (n = !0));
		},
		p(t, n) {
			1 & n && y(a, t[0]),
				16 & n && e !== (e = m(t[5][t[4]]) + ' svelte-1cj8l1u') && p(s, 'class', e);
		},
		d(t) {
			t && i(s), (n = !1), c();
		}
	};
}
function T(t) {
	let s, a, e, n, c;
	return {
		c() {
			(s = l('button')), (a = u(t[0])), this.h();
		},
		l(e) {
			s = d(e, 'BUTTON', { type: !0, class: !0 });
			var n = f(s);
			(a = h(n, t[0])), n.forEach(i), this.h();
		},
		h() {
			p(s, 'type', 'submit'), p(s, 'class', (e = m(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, i) {
			r(e, s, i), g(s, a), n || ((c = v(s, 'click', t[6])), (n = !0));
		},
		p(t, n) {
			1 & n && y(a, t[0]),
				16 & n && e !== (e = m(t[5][t[4]]) + ' svelte-1cj8l1u') && p(s, 'class', e);
		},
		d(t) {
			t && i(s), (n = !1), c();
		}
	};
}
function _(t) {
	let s, a, e;
	return {
		c() {
			(s = l('a')), (a = u(t[0])), this.h();
		},
		l(e) {
			s = d(e, 'A', { href: !0, target: !0, class: !0 });
			var n = f(s);
			(a = h(n, t[0])), n.forEach(i), this.h();
		},
		h() {
			p(s, 'href', t[1]),
				p(s, 'target', t[3]),
				p(s, 'class', (e = m(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(t, e) {
			r(t, s, e), g(s, a);
		},
		p(t, n) {
			1 & n && y(a, t[0]),
				2 & n && p(s, 'href', t[1]),
				8 & n && p(s, 'target', t[3]),
				16 & n && e !== (e = m(t[5][t[4]]) + ' svelte-1cj8l1u') && p(s, 'class', e);
		},
		d(t) {
			t && i(s);
		}
	};
}
function C(t) {
	let s;
	function a(t, s) {
		return t[1] ? _ : t[2] ? T : k;
	}
	let e = a(t),
		o = e(t);
	return {
		c() {
			o.c(), (s = n());
		},
		l(t) {
			o.l(t), (s = n());
		},
		m(t, a) {
			o.m(t, a), r(t, s, a);
		},
		p(t, [n]) {
			e === (e = a(t)) && o ? o.p(t, n) : (o.d(1), (o = e(t)), o && (o.c(), o.m(s.parentNode, s)));
		},
		i: c,
		o: c,
		d(t) {
			o.d(t), t && i(s);
		}
	};
}
function N(t, s, a) {
	let { text: e = '' } = s,
		{ url: n = '' } = s,
		{ is_submit: r = !1 } = s,
		{ target: c = '_blank' } = s,
		{ variante: i = 0 } = s;
	return (
		(t.$$set = (t) => {
			'text' in t && a(0, (e = t.text)),
				'url' in t && a(1, (n = t.url)),
				'is_submit' in t && a(2, (r = t.is_submit)),
				'target' in t && a(3, (c = t.target)),
				'variante' in t && a(4, (i = t.variante));
		}),
		[
			e,
			n,
			r,
			c,
			i,
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
class S extends s {
	constructor(t) {
		super(), a(this, t, N, C, e, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4 });
	}
}
export { S as B, $ as a, b, j as f };
