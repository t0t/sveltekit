import {
	S as s,
	i as a,
	s as t,
	e,
	t as o,
	c as r,
	a as n,
	b as u,
	d as c,
	f as d,
	g as f,
	n as l
} from '../../chunks/vendor-8f03db9b.js';
function p(s) {
	let a, t;
	return {
		c() {
			(a = e('h1')), (t = o('About page'));
		},
		l(s) {
			a = r(s, 'H1', {});
			var e = n(a);
			(t = u(e, 'About page')), e.forEach(c);
		},
		m(s, e) {
			d(s, a, e), f(a, t);
		},
		p: l,
		i: l,
		o: l,
		d(s) {
			s && c(a);
		}
	};
}
export default class extends s {
	constructor(s) {
		super(), a(this, s, null, p, t, {});
	}
}
