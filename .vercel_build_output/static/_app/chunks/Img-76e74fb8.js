import {
	S as s,
	i as a,
	s as e,
	k as t,
	f as c,
	n as r,
	d as l,
	e as i,
	j as n,
	t as h,
	c as u,
	a as f,
	l as o,
	b as m,
	o as g,
	I as d,
	g as v,
	h as I,
	P as p
} from './index-d91e1ed8.js';
function _(s) {
	let a, e, t, r, p, _, E;
	return {
		c() {
			(a = i('figure')), (e = i('img')), (r = n()), (p = i('figcaption')), (_ = h(s[1])), this.h();
		},
		l(t) {
			a = u(t, 'FIGURE', { class: !0 });
			var c = f(a);
			(e = u(c, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(r = o(c)),
				(p = u(c, 'FIGCAPTION', { class: !0 }));
			var i = f(p);
			(_ = m(i, s[1])), i.forEach(l), c.forEach(l), this.h();
		},
		h() {
			e.src !== (t = s[0]) && g(e, 'src', t),
				g(e, 'alt', s[1]),
				g(e, 'href', s[2]),
				g(e, 'class', 'svelte-cu7i62'),
				g(p, 'class', 'alt svelte-cu7i62'),
				g(a, 'class', (E = d(s[4][s[3]]) + ' svelte-cu7i62'));
		},
		m(s, t) {
			c(s, a, t), v(a, e), v(a, r), v(a, p), v(p, _);
		},
		p(s, c) {
			1 & c && e.src !== (t = s[0]) && g(e, 'src', t),
				2 & c && g(e, 'alt', s[1]),
				4 & c && g(e, 'href', s[2]),
				2 & c && I(_, s[1]),
				8 & c && E !== (E = d(s[4][s[3]]) + ' svelte-cu7i62') && g(a, 'class', E);
		},
		d(s) {
			s && l(a);
		}
	};
}
function E(s) {
	let a, e, t;
	return {
		c() {
			(a = i('img')), this.h();
		},
		l(s) {
			(a = u(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			a.src !== (e = s[0]) && g(a, 'src', e),
				g(a, 'alt', s[1]),
				g(a, 'href', s[2]),
				g(a, 'class', (t = d(s[4][s[3]]) + ' svelte-cu7i62'));
		},
		m(s, e) {
			c(s, a, e);
		},
		p(s, c) {
			1 & c && a.src !== (e = s[0]) && g(a, 'src', e),
				2 & c && g(a, 'alt', s[1]),
				4 & c && g(a, 'href', s[2]),
				8 & c && t !== (t = d(s[4][s[3]]) + ' svelte-cu7i62') && g(a, 'class', t);
		},
		d(s) {
			s && l(a);
		}
	};
}
function G(s) {
	let a, e;
	return {
		c() {
			(a = i('div')), this.h();
		},
		l(s) {
			(a = u(s, 'DIV', { class: !0, style: !0 })), f(a).forEach(l), this.h();
		},
		h() {
			g(a, 'class', (e = d(s[4][s[3]]) + ' svelte-cu7i62')),
				p(a, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, e) {
			c(s, a, e);
		},
		p(s, t) {
			8 & t && e !== (e = d(s[4][s[3]]) + ' svelte-cu7i62') && g(a, 'class', e),
				1 & t && p(a, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && l(a);
		}
	};
}
function b(s) {
	let a;
	function e(s, a) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? G : 1 === s[3] || 5 === s[3] ? E : _;
	}
	let i = e(s),
		n = i(s);
	return {
		c() {
			n.c(), (a = t());
		},
		l(s) {
			n.l(s), (a = t());
		},
		m(s, e) {
			n.m(s, e), c(s, a, e);
		},
		p(s, [t]) {
			i === (i = e(s)) && n ? n.p(s, t) : (n.d(1), (n = i(s)), n && (n.c(), n.m(a.parentNode, a)));
		},
		i: r,
		o: r,
		d(s) {
			n.d(s), s && l(a);
		}
	};
}
function k(s, a, e) {
	let { src: t } = a,
		{ alt: c = 'Imagen' } = a,
		{ href: r } = a,
		{ variante: l = 0 } = a;
	return (
		(s.$$set = (s) => {
			'src' in s && e(0, (t = s.src)),
				'alt' in s && e(1, (c = s.alt)),
				'href' in s && e(2, (r = s.href)),
				'variante' in s && e(3, (l = s.variante));
		}),
		[t, c, r, l, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class x extends s {
	constructor(s) {
		super(), a(this, s, k, b, e, { src: 0, alt: 1, href: 2, variante: 3 });
	}
}
export { x as I };
