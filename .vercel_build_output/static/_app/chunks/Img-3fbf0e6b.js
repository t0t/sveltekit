import {
	S as s,
	i as r,
	s as a,
	k as e,
	f as t,
	n as l,
	d as c,
	e as n,
	j as i,
	t as h,
	c as f,
	a as o,
	l as m,
	b as u,
	o as g,
	I as d,
	g as v,
	h as I,
	P as k
} from './index-d91e1ed8.js';
function p(s) {
	let r, a, e, l, k, p, w;
	return {
		c() {
			(r = n('figure')), (a = n('img')), (l = i()), (k = n('figcaption')), (p = h(s[1])), this.h();
		},
		l(e) {
			r = f(e, 'FIGURE', { class: !0 });
			var t = o(r);
			(a = f(t, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(l = m(t)),
				(k = f(t, 'FIGCAPTION', { class: !0 }));
			var n = o(k);
			(p = u(n, s[1])), n.forEach(c), t.forEach(c), this.h();
		},
		h() {
			a.src !== (e = s[0]) && g(a, 'src', e),
				g(a, 'alt', s[1]),
				g(a, 'href', s[2]),
				g(a, 'class', 'svelte-4klrwr'),
				g(k, 'class', 'alt svelte-4klrwr'),
				g(r, 'class', (w = d(s[4][s[3]]) + ' svelte-4klrwr'));
		},
		m(s, e) {
			t(s, r, e), v(r, a), v(r, l), v(r, k), v(k, p);
		},
		p(s, t) {
			1 & t && a.src !== (e = s[0]) && g(a, 'src', e),
				2 & t && g(a, 'alt', s[1]),
				4 & t && g(a, 'href', s[2]),
				2 & t && I(p, s[1]),
				8 & t && w !== (w = d(s[4][s[3]]) + ' svelte-4klrwr') && g(r, 'class', w);
		},
		d(s) {
			s && c(r);
		}
	};
}
function w(s) {
	let r, a, e;
	return {
		c() {
			(r = n('img')), this.h();
		},
		l(s) {
			(r = f(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			r.src !== (a = s[0]) && g(r, 'src', a),
				g(r, 'alt', s[1]),
				g(r, 'href', s[2]),
				g(r, 'class', (e = d(s[4][s[3]]) + ' svelte-4klrwr'));
		},
		m(s, a) {
			t(s, r, a);
		},
		p(s, t) {
			1 & t && r.src !== (a = s[0]) && g(r, 'src', a),
				2 & t && g(r, 'alt', s[1]),
				4 & t && g(r, 'href', s[2]),
				8 & t && e !== (e = d(s[4][s[3]]) + ' svelte-4klrwr') && g(r, 'class', e);
		},
		d(s) {
			s && c(r);
		}
	};
}
function _(s) {
	let r, a;
	return {
		c() {
			(r = n('div')), this.h();
		},
		l(s) {
			(r = f(s, 'DIV', { class: !0, style: !0 })), o(r).forEach(c), this.h();
		},
		h() {
			g(r, 'class', (a = d(s[4][s[3]]) + ' svelte-4klrwr')),
				k(r, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, a) {
			t(s, r, a);
		},
		p(s, e) {
			8 & e && a !== (a = d(s[4][s[3]]) + ' svelte-4klrwr') && g(r, 'class', a),
				1 & e && k(r, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && c(r);
		}
	};
}
function E(s) {
	let r;
	function a(s, r) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? _ : 1 === s[3] || 5 === s[3] ? w : p;
	}
	let n = a(s),
		i = n(s);
	return {
		c() {
			i.c(), (r = e());
		},
		l(s) {
			i.l(s), (r = e());
		},
		m(s, a) {
			i.m(s, a), t(s, r, a);
		},
		p(s, [e]) {
			n === (n = a(s)) && i ? i.p(s, e) : (i.d(1), (i = n(s)), i && (i.c(), i.m(r.parentNode, r)));
		},
		i: l,
		o: l,
		d(s) {
			i.d(s), s && c(r);
		}
	};
}
function G(s, r, a) {
	let { src: e } = r,
		{ alt: t = 'Imagen' } = r,
		{ href: l } = r,
		{ variante: c = 0 } = r;
	return (
		(s.$$set = (s) => {
			'src' in s && a(0, (e = s.src)),
				'alt' in s && a(1, (t = s.alt)),
				'href' in s && a(2, (l = s.href)),
				'variante' in s && a(3, (c = s.variante));
		}),
		[e, t, l, c, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class b extends s {
	constructor(s) {
		super(), r(this, s, G, E, a, { src: 0, alt: 1, href: 2, variante: 3 });
	}
}
export { b as I };
