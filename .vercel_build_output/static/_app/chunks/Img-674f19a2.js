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
	c as f,
	a as v,
	l as o,
	b as m,
	o as u,
	g,
	h as d,
	P as I
} from './index-d91e1ed8.js';
function b(s) {
	let a, e, t, c, I, b, x;
	return {
		c() {
			(a = n('figure')), (e = n('img')), (c = i()), (I = n('figcaption')), (b = h(s[2])), this.h();
		},
		l(t) {
			a = f(t, 'FIGURE', { class: !0 });
			var r = v(a);
			(e = f(r, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })),
				(c = o(r)),
				(I = f(r, 'FIGCAPTION', { class: !0 }));
			var n = v(I);
			(b = m(n, s[2])), n.forEach(l), r.forEach(l), this.h();
		},
		h() {
			e.src !== (t = s[0]) && u(e, 'src', t),
				u(e, 'alt', s[2]),
				u(e, 'href', s[3]),
				u(e, 'class', 'svelte-1x206vb'),
				u(I, 'class', 'alt svelte-1x206vb'),
				u(a, 'class', (x = s[5][s[4]] + ' ' + s[1] + ' svelte-1x206vb'));
		},
		m(s, t) {
			r(s, a, t), g(a, e), g(a, c), g(a, I), g(I, b);
		},
		p(s, r) {
			1 & r && e.src !== (t = s[0]) && u(e, 'src', t),
				4 & r && u(e, 'alt', s[2]),
				8 & r && u(e, 'href', s[3]),
				4 & r && d(b, s[2]),
				18 & r && x !== (x = s[5][s[4]] + ' ' + s[1] + ' svelte-1x206vb') && u(a, 'class', x);
		},
		d(s) {
			s && l(a);
		}
	};
}
function x(s) {
	let a, e, t;
	return {
		c() {
			(a = n('img')), this.h();
		},
		l(s) {
			(a = f(s, 'IMG', { src: !0, alt: !0, href: !0, class: !0 })), this.h();
		},
		h() {
			a.src !== (e = s[0]) && u(a, 'src', e),
				u(a, 'alt', s[2]),
				u(a, 'href', s[3]),
				u(a, 'class', (t = s[5][s[4]] + ' ' + s[1] + ' svelte-1x206vb'));
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, r) {
			1 & r && a.src !== (e = s[0]) && u(a, 'src', e),
				4 & r && u(a, 'alt', s[2]),
				8 & r && u(a, 'href', s[3]),
				18 & r && t !== (t = s[5][s[4]] + ' ' + s[1] + ' svelte-1x206vb') && u(a, 'class', t);
		},
		d(s) {
			s && l(a);
		}
	};
}
function p(s) {
	let a, e;
	return {
		c() {
			(a = n('div')), this.h();
		},
		l(s) {
			(a = f(s, 'DIV', { class: !0, style: !0 })), v(a).forEach(l), this.h();
		},
		h() {
			u(a, 'class', (e = s[5][s[4]] + ' ' + s[1] + ' svelte-1x206vb')),
				I(a, 'background-image', 'url(' + s[0] + ')');
		},
		m(s, e) {
			r(s, a, e);
		},
		p(s, t) {
			18 & t && e !== (e = s[5][s[4]] + ' ' + s[1] + ' svelte-1x206vb') && u(a, 'class', e),
				1 & t && I(a, 'background-image', 'url(' + s[0] + ')');
		},
		d(s) {
			s && l(a);
		}
	};
}
function _(s) {
	let a;
	function e(s, a) {
		return 0 === s[4] || 3 === s[4] || 4 === s[4] ? p : 1 === s[4] || 5 === s[4] ? x : b;
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
function E(s, a, e) {
	let { src: t } = a,
		{ clases: r = '' } = a,
		{ alt: c = 'Imagen' } = a,
		{ href: l } = a,
		{ variante: n = 0 } = a;
	return (
		(s.$$set = (s) => {
			'src' in s && e(0, (t = s.src)),
				'clases' in s && e(1, (r = s.clases)),
				'alt' in s && e(2, (c = s.alt)),
				'href' in s && e(3, (l = s.href)),
				'variante' in s && e(4, (n = s.variante));
		}),
		[t, r, c, l, n, ['Img_0', 'Img_1', 'Img_2', 'Img_3', 'Img_4', 'Img_5']]
	);
}
class G extends s {
	constructor(s) {
		super(), a(this, s, E, _, e, { src: 0, clases: 1, alt: 2, href: 3, variante: 4 });
	}
}
export { G as I };
