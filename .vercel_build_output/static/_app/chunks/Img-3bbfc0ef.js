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
	c as m,
	a as f,
	l as o,
	b as u,
	o as g,
	I as d,
	g as v,
	h as I,
	P as b
} from './index-d91e1ed8.js';
function p(s) {
	let a, e, t, c, b, p, _;
	return {
		c() {
			(a = n('figure')), (e = n('img')), (c = i()), (b = n('figcaption')), (p = h(s[1])), this.h();
		},
		l(t) {
			a = m(t, 'FIGURE', { class: !0 });
			var r = f(a);
			(e = m(r, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(c = o(r)),
				(b = m(r, 'FIGCAPTION', { class: !0 }));
			var n = f(b);
			(p = u(n, s[1])), n.forEach(l), r.forEach(l), this.h();
		},
		h() {
			e.src !== (t = s[0]) && g(e, 'src', t),
				g(e, 'alt', s[1]),
				g(e, 'href', s[2]),
				g(e, 'class', 'svelte-m6a4be'),
				g(b, 'class', 'alt svelte-m6a4be'),
				g(a, 'class', (_ = d(s[4][s[3]]) + ' svelte-m6a4be'));
		},
		m(s, t) {
			r(s, a, t), v(a, e), v(a, c), v(a, b), v(b, p);
		},
		p(s, r) {
			1 & r && e.src !== (t = s[0]) && g(e, 'src', t),
				2 & r && g(e, 'alt', s[1]),
				4 & r && g(e, 'href', s[2]),
				2 & r && I(p, s[1]),
				8 & r && _ !== (_ = d(s[4][s[3]]) + ' svelte-m6a4be') && g(a, 'class', _);
		},
		d(s) {
			s && l(a);
		}
	};
}
function _(s) {
	let a, e, t;
	return {
		c() {
			(a = n('img')), this.h();
		},
		l(s) {
			(a = m(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			a.src !== (e = s[0]) && g(a, 'src', e),
				g(a, 'alt', s[1]),
				g(a, 'href', s[2]),
				g(a, 'class', (t = d(s[4][s[3]]) + ' svelte-m6a4be'));
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, r) {
			1 & r && a.src !== (e = s[0]) && g(a, 'src', e),
				2 & r && g(a, 'alt', s[1]),
				4 & r && g(a, 'href', s[2]),
				8 & r && t !== (t = d(s[4][s[3]]) + ' svelte-m6a4be') && g(a, 'class', t);
		},
		d(s) {
			s && l(a);
		}
	};
}
function E(s) {
	let a, e;
	return {
		c() {
			(a = n('div')), this.h();
		},
		l(s) {
			(a = m(s, 'DIV', { class: !0, style: !0 })), f(a).forEach(l), this.h();
		},
		h() {
			g(a, 'class', (e = d(s[4][s[3]]) + ' svelte-m6a4be')),
				b(a, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, t) {
			8 & t && e !== (e = d(s[4][s[3]]) + ' svelte-m6a4be') && g(a, 'class', e),
				1 & t && b(a, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && l(a);
		}
	};
}
function G(s) {
	let a;
	function e(s, a) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? E : 1 === s[3] || 5 === s[3] ? _ : p;
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
function k(s, a, e) {
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
class x extends s {
	constructor(s) {
		super(), a(this, s, k, G, e, { src: 0, alt: 1, href: 2, variante: 3 });
	}
}
export { x as I };
