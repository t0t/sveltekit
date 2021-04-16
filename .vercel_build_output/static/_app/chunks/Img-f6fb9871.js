import {
	S as s,
	i as a,
	s as t,
	k as e,
	f as r,
	n as c,
	d as l,
	e as n,
	j as i,
	t as h,
	c as m,
	a as d,
	l as f,
	b as o,
	o as u,
	I as g,
	g as v,
	h as I,
	P as x
} from './index-d91e1ed8.js';
function j(s) {
	let a, t, e, c, x, j, p;
	return {
		c() {
			(a = n('figure')), (t = n('img')), (c = i()), (x = n('figcaption')), (j = h(s[1])), this.h();
		},
		l(e) {
			a = m(e, 'FIGURE', { class: !0 });
			var r = d(a);
			(t = m(r, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(c = f(r)),
				(x = m(r, 'FIGCAPTION', { class: !0 }));
			var n = d(x);
			(j = o(n, s[1])), n.forEach(l), r.forEach(l), this.h();
		},
		h() {
			t.src !== (e = s[0]) && u(t, 'src', e),
				u(t, 'alt', s[1]),
				u(t, 'href', s[2]),
				u(t, 'class', 'svelte-1jdmtxw'),
				u(x, 'class', 'alt svelte-1jdmtxw'),
				u(a, 'class', (p = g(s[4][s[3]]) + ' svelte-1jdmtxw'));
		},
		m(s, e) {
			r(s, a, e), v(a, t), v(a, c), v(a, x), v(x, j);
		},
		p(s, r) {
			1 & r && t.src !== (e = s[0]) && u(t, 'src', e),
				2 & r && u(t, 'alt', s[1]),
				4 & r && u(t, 'href', s[2]),
				2 & r && I(j, s[1]),
				8 & r && p !== (p = g(s[4][s[3]]) + ' svelte-1jdmtxw') && u(a, 'class', p);
		},
		d(s) {
			s && l(a);
		}
	};
}
function p(s) {
	let a, t, e;
	return {
		c() {
			(a = n('img')), this.h();
		},
		l(s) {
			(a = m(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			a.src !== (t = s[0]) && u(a, 'src', t),
				u(a, 'alt', s[1]),
				u(a, 'href', s[2]),
				u(a, 'class', (e = g(s[4][s[3]]) + ' svelte-1jdmtxw'));
		},
		m(s, t) {
			r(s, a, t);
		},
		p(s, r) {
			1 & r && a.src !== (t = s[0]) && u(a, 'src', t),
				2 & r && u(a, 'alt', s[1]),
				4 & r && u(a, 'href', s[2]),
				8 & r && e !== (e = g(s[4][s[3]]) + ' svelte-1jdmtxw') && u(a, 'class', e);
		},
		d(s) {
			s && l(a);
		}
	};
}
function w(s) {
	let a, t;
	return {
		c() {
			(a = n('div')), this.h();
		},
		l(s) {
			(a = m(s, 'DIV', { class: !0, style: !0 })), d(a).forEach(l), this.h();
		},
		h() {
			u(a, 'class', (t = g(s[4][s[3]]) + ' svelte-1jdmtxw')),
				x(a, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, t) {
			r(s, a, t);
		},
		p(s, e) {
			8 & e && t !== (t = g(s[4][s[3]]) + ' svelte-1jdmtxw') && u(a, 'class', t),
				1 & e && x(a, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && l(a);
		}
	};
}
function _(s) {
	let a;
	function t(s, a) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? w : 1 === s[3] || 5 === s[3] ? p : j;
	}
	let n = t(s),
		i = n(s);
	return {
		c() {
			i.c(), (a = e());
		},
		l(s) {
			i.l(s), (a = e());
		},
		m(s, t) {
			i.m(s, t), r(s, a, t);
		},
		p(s, [e]) {
			n === (n = t(s)) && i ? i.p(s, e) : (i.d(1), (i = n(s)), i && (i.c(), i.m(a.parentNode, a)));
		},
		i: c,
		o: c,
		d(s) {
			i.d(s), s && l(a);
		}
	};
}
function E(s, a, t) {
	let { src: e } = a,
		{ alt: r = 'Imagen' } = a,
		{ href: c } = a,
		{ variante: l = 0 } = a;
	return (
		(s.$$set = (s) => {
			'src' in s && t(0, (e = s.src)),
				'alt' in s && t(1, (r = s.alt)),
				'href' in s && t(2, (c = s.href)),
				'variante' in s && t(3, (l = s.variante));
		}),
		[e, r, c, l, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class G extends s {
	constructor(s) {
		super(), a(this, s, E, _, t, { src: 0, alt: 1, href: 2, variante: 3 });
	}
}
export { G as I };
