import {
	S as s,
	i as a,
	s as e,
	k as t,
	f as r,
	n as c,
	d as i,
	e as l,
	j as n,
	t as f,
	c as h,
	a as d,
	l as o,
	b as m,
	o as u,
	I as g,
	g as v,
	h as I,
	P as p
} from './index-d91e1ed8.js';
function q(s) {
	let a, e, t, c, p, q, _;
	return {
		c() {
			(a = l('figure')), (e = l('img')), (c = n()), (p = l('figcaption')), (q = f(s[1])), this.h();
		},
		l(t) {
			a = h(t, 'FIGURE', { class: !0 });
			var r = d(a);
			(e = h(r, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(c = o(r)),
				(p = h(r, 'FIGCAPTION', { class: !0 }));
			var l = d(p);
			(q = m(l, s[1])), l.forEach(i), r.forEach(i), this.h();
		},
		h() {
			e.src !== (t = s[0]) && u(e, 'src', t),
				u(e, 'alt', s[1]),
				u(e, 'href', s[2]),
				u(e, 'class', 'svelte-1d6iiqf'),
				u(p, 'class', 'alt svelte-1d6iiqf'),
				u(a, 'class', (_ = g(s[4][s[3]]) + ' svelte-1d6iiqf'));
		},
		m(s, t) {
			r(s, a, t), v(a, e), v(a, c), v(a, p), v(p, q);
		},
		p(s, r) {
			1 & r && e.src !== (t = s[0]) && u(e, 'src', t),
				2 & r && u(e, 'alt', s[1]),
				4 & r && u(e, 'href', s[2]),
				2 & r && I(q, s[1]),
				8 & r && _ !== (_ = g(s[4][s[3]]) + ' svelte-1d6iiqf') && u(a, 'class', _);
		},
		d(s) {
			s && i(a);
		}
	};
}
function _(s) {
	let a, e, t;
	return {
		c() {
			(a = l('img')), this.h();
		},
		l(s) {
			(a = h(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			a.src !== (e = s[0]) && u(a, 'src', e),
				u(a, 'alt', s[1]),
				u(a, 'href', s[2]),
				u(a, 'class', (t = g(s[4][s[3]]) + ' svelte-1d6iiqf'));
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, r) {
			1 & r && a.src !== (e = s[0]) && u(a, 'src', e),
				2 & r && u(a, 'alt', s[1]),
				4 & r && u(a, 'href', s[2]),
				8 & r && t !== (t = g(s[4][s[3]]) + ' svelte-1d6iiqf') && u(a, 'class', t);
		},
		d(s) {
			s && i(a);
		}
	};
}
function E(s) {
	let a, e;
	return {
		c() {
			(a = l('div')), this.h();
		},
		l(s) {
			(a = h(s, 'DIV', { class: !0, style: !0 })), d(a).forEach(i), this.h();
		},
		h() {
			u(a, 'class', (e = g(s[4][s[3]]) + ' svelte-1d6iiqf')),
				p(a, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, t) {
			8 & t && e !== (e = g(s[4][s[3]]) + ' svelte-1d6iiqf') && u(a, 'class', e),
				1 & t && p(a, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && i(a);
		}
	};
}
function G(s) {
	let a;
	function e(s, a) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? E : 1 === s[3] || 5 === s[3] ? _ : q;
	}
	let l = e(s),
		n = l(s);
	return {
		c() {
			n.c(), (a = t());
		},
		l(s) {
			n.l(s), (a = t());
		},
		m(s, e) {
			n.m(s, e), r(s, a, e);
		},
		p(s, [t]) {
			l === (l = e(s)) && n ? n.p(s, t) : (n.d(1), (n = l(s)), n && (n.c(), n.m(a.parentNode, a)));
		},
		i: c,
		o: c,
		d(s) {
			n.d(s), s && i(a);
		}
	};
}
function b(s, a, e) {
	let { src: t } = a,
		{ alt: r = 'Imagen' } = a,
		{ href: c } = a,
		{ variante: i = 0 } = a;
	return (
		(s.$$set = (s) => {
			'src' in s && e(0, (t = s.src)),
				'alt' in s && e(1, (r = s.alt)),
				'href' in s && e(2, (c = s.href)),
				'variante' in s && e(3, (i = s.variante));
		}),
		[t, r, c, i, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class k extends s {
	constructor(s) {
		super(), a(this, s, b, G, e, { src: 0, alt: 1, href: 2, variante: 3 });
	}
}
export { k as I };
