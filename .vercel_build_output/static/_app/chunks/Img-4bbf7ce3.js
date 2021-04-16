import {
	S as s,
	i as a,
	s as e,
	k as t,
	f as r,
	n as c,
	d as l,
	e as n,
	j as i,
	t as h,
	c as o,
	a as m,
	l as f,
	b as u,
	o as g,
	I as d,
	g as v,
	h as I,
	P as x
} from './index-d91e1ed8.js';
function p(s) {
	let a, e, t, c, x, p, w;
	return {
		c() {
			(a = n('figure')), (e = n('img')), (c = i()), (x = n('figcaption')), (p = h(s[1])), this.h();
		},
		l(t) {
			a = o(t, 'FIGURE', { class: !0 });
			var r = m(a);
			(e = o(r, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(c = f(r)),
				(x = o(r, 'FIGCAPTION', { class: !0 }));
			var n = m(x);
			(p = u(n, s[1])), n.forEach(l), r.forEach(l), this.h();
		},
		h() {
			e.src !== (t = s[0]) && g(e, 'src', t),
				g(e, 'alt', s[1]),
				g(e, 'href', s[2]),
				g(e, 'class', 'svelte-moaexw'),
				g(x, 'class', 'alt svelte-moaexw'),
				g(a, 'class', (w = d(s[4][s[3]]) + ' svelte-moaexw'));
		},
		m(s, t) {
			r(s, a, t), v(a, e), v(a, c), v(a, x), v(x, p);
		},
		p(s, r) {
			1 & r && e.src !== (t = s[0]) && g(e, 'src', t),
				2 & r && g(e, 'alt', s[1]),
				4 & r && g(e, 'href', s[2]),
				2 & r && I(p, s[1]),
				8 & r && w !== (w = d(s[4][s[3]]) + ' svelte-moaexw') && g(a, 'class', w);
		},
		d(s) {
			s && l(a);
		}
	};
}
function w(s) {
	let a, e, t;
	return {
		c() {
			(a = n('img')), this.h();
		},
		l(s) {
			(a = o(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			a.src !== (e = s[0]) && g(a, 'src', e),
				g(a, 'alt', s[1]),
				g(a, 'href', s[2]),
				g(a, 'class', (t = d(s[4][s[3]]) + ' svelte-moaexw'));
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, r) {
			1 & r && a.src !== (e = s[0]) && g(a, 'src', e),
				2 & r && g(a, 'alt', s[1]),
				4 & r && g(a, 'href', s[2]),
				8 & r && t !== (t = d(s[4][s[3]]) + ' svelte-moaexw') && g(a, 'class', t);
		},
		d(s) {
			s && l(a);
		}
	};
}
function _(s) {
	let a, e;
	return {
		c() {
			(a = n('div')), this.h();
		},
		l(s) {
			(a = o(s, 'DIV', { class: !0, style: !0 })), m(a).forEach(l), this.h();
		},
		h() {
			g(a, 'class', (e = d(s[4][s[3]]) + ' svelte-moaexw')),
				x(a, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, t) {
			8 & t && e !== (e = d(s[4][s[3]]) + ' svelte-moaexw') && g(a, 'class', e),
				1 & t && x(a, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && l(a);
		}
	};
}
function E(s) {
	let a;
	function e(s, a) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? _ : 1 === s[3] || 5 === s[3] ? w : p;
	}
	let n = e(s),
		i = n(s);
	return {
		c() {
			i.c(), (a = t());
		},
		l(s) {
			i.l(s), (a = t());
		},
		m(s, e) {
			i.m(s, e), r(s, a, e);
		},
		p(s, [t]) {
			n === (n = e(s)) && i ? i.p(s, t) : (i.d(1), (i = n(s)), i && (i.c(), i.m(a.parentNode, a)));
		},
		i: c,
		o: c,
		d(s) {
			i.d(s), s && l(a);
		}
	};
}
function G(s, a, e) {
	let { src: t } = a,
		{ alt: r = 'Imagen' } = a,
		{ href: c } = a,
		{ variante: l = 0 } = a;
	return (
		(s.$$set = (s) => {
			'src' in s && e(0, (t = s.src)),
				'alt' in s && e(1, (r = s.alt)),
				'href' in s && e(2, (c = s.href)),
				'variante' in s && e(3, (l = s.variante));
		}),
		[t, r, c, l, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class b extends s {
	constructor(s) {
		super(), a(this, s, G, E, e, { src: 0, alt: 1, href: 2, variante: 3 });
	}
}
export { b as I };
