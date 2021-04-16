import {
	S as s,
	i as a,
	s as r,
	e as t,
	t as e,
	j as n,
	p as o,
	c,
	a as f,
	b as m,
	d as l,
	l as u,
	q as $,
	f as i,
	g as p,
	r as d,
	n as g,
	w as h,
	x as k,
	y as w
} from '../../chunks/vendor-02401848.js';
import { F as j } from '../../chunks/FlipCard-594c53eb.js';
function x(s) {
	let a, r, x, b, v;
	return (
		(b = new j({})),
		{
			c() {
				(a = t('h1')), (r = e('Artworks')), (x = n()), o(b.$$.fragment);
			},
			l(s) {
				a = c(s, 'H1', {});
				var t = f(a);
				(r = m(t, 'Artworks')), t.forEach(l), (x = u(s)), $(b.$$.fragment, s);
			},
			m(s, t) {
				i(s, a, t), p(a, r), i(s, x, t), d(b, s, t), (v = !0);
			},
			p: g,
			i(s) {
				v || (h(b.$$.fragment, s), (v = !0));
			},
			o(s) {
				k(b.$$.fragment, s), (v = !1);
			},
			d(s) {
				s && l(a), s && l(x), w(b, s);
			}
		}
	);
}
export default class extends s {
	constructor(s) {
		super(), a(this, s, null, x, r, {});
	}
}
