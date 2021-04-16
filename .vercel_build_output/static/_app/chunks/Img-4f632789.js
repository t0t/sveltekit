import {
	S as s,
	i as e,
	s as a,
	k as t,
	f as r,
	n as c,
	d as l,
	e as n,
	j as i,
	t as h,
	c as f,
	a as o,
	l as m,
	b as u,
	o as g,
	g as d,
	h as v,
	P as I
} from './index-d91e1ed8.js';
function p(s) {
	let e, a, t, c, I, p, w;
	return {
		c() {
			(e = n('figure')), (a = n('img')), (c = i()), (I = n('figcaption')), (p = h(s[2])), this.h();
		},
		l(t) {
			e = f(t, 'FIGURE', { class: !0 });
			var r = o(e);
			(a = f(r, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(c = m(r)),
				(I = f(r, 'FIGCAPTION', { class: !0 }));
			var n = o(I);
			(p = u(n, s[2])), n.forEach(l), r.forEach(l), this.h();
		},
		h() {
			a.src !== (t = s[0]) && g(a, 'src', t),
				g(a, 'alt', s[2]),
				g(a, 'href', s[3]),
				g(a, 'class', 'svelte-1t1rwe1'),
				g(I, 'class', 'alt svelte-1t1rwe1'),
				g(e, 'class', (w = s[5][s[4]] + ' ' + s[1] + ' svelte-1t1rwe1'));
		},
		m(s, t) {
			r(s, e, t), d(e, a), d(e, c), d(e, I), d(I, p);
		},
		p(s, r) {
			1 & r && a.src !== (t = s[0]) && g(a, 'src', t),
				4 & r && g(a, 'alt', s[2]),
				8 & r && g(a, 'href', s[3]),
				4 & r && v(p, s[2]),
				18 & r && w !== (w = s[5][s[4]] + ' ' + s[1] + ' svelte-1t1rwe1') && g(e, 'class', w);
		},
		d(s) {
			s && l(e);
		}
	};
}
function w(s) {
	let e, a, t;
	return {
		c() {
			(e = n('img')), this.h();
		},
		l(s) {
			(e = f(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			e.src !== (a = s[0]) && g(e, 'src', a),
				g(e, 'alt', s[2]),
				g(e, 'href', s[3]),
				g(e, 'class', (t = s[5][s[4]] + ' ' + s[1] + ' svelte-1t1rwe1'));
		},
		m(s, a) {
			r(s, e, a);
		},
		p(s, r) {
			1 & r && e.src !== (a = s[0]) && g(e, 'src', a),
				4 & r && g(e, 'alt', s[2]),
				8 & r && g(e, 'href', s[3]),
				18 & r && t !== (t = s[5][s[4]] + ' ' + s[1] + ' svelte-1t1rwe1') && g(e, 'class', t);
		},
		d(s) {
			s && l(e);
		}
	};
}
function _(s) {
	let e, a;
	return {
		c() {
			(e = n('div')), this.h();
		},
		l(s) {
			(e = f(s, 'DIV', { class: !0, style: !0 })), o(e).forEach(l), this.h();
		},
		h() {
			g(e, 'class', (a = s[5][s[4]] + ' ' + s[1] + ' svelte-1t1rwe1')),
				I(e, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, a) {
			r(s, e, a);
		},
		p(s, t) {
			18 & t && a !== (a = s[5][s[4]] + ' ' + s[1] + ' svelte-1t1rwe1') && g(e, 'class', a),
				1 & t && I(e, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && l(e);
		}
	};
}
function E(s) {
	let e;
	function a(s, e) {
		return 0 === s[4] || 3 === s[4] || 4 === s[4] ? _ : 1 === s[4] || 5 === s[4] ? w : p;
	}
	let n = a(s),
		i = n(s);
	return {
		c() {
			i.c(), (e = t());
		},
		l(s) {
			i.l(s), (e = t());
		},
		m(s, a) {
			i.m(s, a), r(s, e, a);
		},
		p(s, [t]) {
			n === (n = a(s)) && i ? i.p(s, t) : (i.d(1), (i = n(s)), i && (i.c(), i.m(e.parentNode, e)));
		},
		i: c,
		o: c,
		d(s) {
			i.d(s), s && l(e);
		}
	};
}
function G(s, e, a) {
	let { src: t } = e,
		{ clases: r = '' } = e,
		{ alt: c = 'Imagen' } = e,
		{ href: l } = e,
		{ variante: n = 0 } = e;
	return (
		(s.$$set = (s) => {
			'src' in s && a(0, (t = s.src)),
				'clases' in s && a(1, (r = s.clases)),
				'alt' in s && a(2, (c = s.alt)),
				'href' in s && a(3, (l = s.href)),
				'variante' in s && a(4, (n = s.variante));
		}),
		[t, r, c, l, n, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class b extends s {
	constructor(s) {
		super(), e(this, s, G, E, a, { src: 0, clases: 1, alt: 2, href: 3, variante: 4 });
	}
}
export { b as I };
