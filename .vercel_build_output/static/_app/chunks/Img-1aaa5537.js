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
	t as f,
	c as h,
	a as o,
	l as p,
	b as g,
	o as m,
	I as u,
	g as d,
	h as v,
	P as I
} from './index-d91e1ed8.js';
function b(s) {
	let a, e, t, c, I, b, _;
	return {
		c() {
			(a = n('figure')), (e = n('img')), (c = i()), (I = n('figcaption')), (b = f(s[1])), this.h();
		},
		l(t) {
			a = h(t, 'FIGURE', { class: !0 });
			var r = o(a);
			(e = h(r, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(c = p(r)),
				(I = h(r, 'FIGCAPTION', { class: !0 }));
			var n = o(I);
			(b = g(n, s[1])), n.forEach(l), r.forEach(l), this.h();
		},
		h() {
			e.src !== (t = s[0]) && m(e, 'src', t),
				m(e, 'alt', s[1]),
				m(e, 'href', s[2]),
				m(e, 'class', 'svelte-1bopgpf'),
				m(I, 'class', 'alt svelte-1bopgpf'),
				m(a, 'class', (_ = u(s[4][s[3]]) + ' svelte-1bopgpf'));
		},
		m(s, t) {
			r(s, a, t), d(a, e), d(a, c), d(a, I), d(I, b);
		},
		p(s, r) {
			1 & r && e.src !== (t = s[0]) && m(e, 'src', t),
				2 & r && m(e, 'alt', s[1]),
				4 & r && m(e, 'href', s[2]),
				2 & r && v(b, s[1]),
				8 & r && _ !== (_ = u(s[4][s[3]]) + ' svelte-1bopgpf') && m(a, 'class', _);
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
			(a = h(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			a.src !== (e = s[0]) && m(a, 'src', e),
				m(a, 'alt', s[1]),
				m(a, 'href', s[2]),
				m(a, 'class', (t = u(s[4][s[3]]) + ' svelte-1bopgpf'));
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, r) {
			1 & r && a.src !== (e = s[0]) && m(a, 'src', e),
				2 & r && m(a, 'alt', s[1]),
				4 & r && m(a, 'href', s[2]),
				8 & r && t !== (t = u(s[4][s[3]]) + ' svelte-1bopgpf') && m(a, 'class', t);
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
			(a = h(s, 'DIV', { class: !0, style: !0 })), o(a).forEach(l), this.h();
		},
		h() {
			m(a, 'class', (e = u(s[4][s[3]]) + ' svelte-1bopgpf')),
				I(a, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, t) {
			8 & t && e !== (e = u(s[4][s[3]]) + ' svelte-1bopgpf') && m(a, 'class', e),
				1 & t && I(a, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && l(a);
		}
	};
}
function G(s) {
	let a;
	function e(s, a) {
		return 0 === s[3] || 3 === s[3] || 4 === s[3] ? E : 1 === s[3] || 5 === s[3] ? _ : b;
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
