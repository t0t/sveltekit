import {
	S as e,
	i as a,
	s as i,
	e as t,
	t as o,
	j as s,
	c as r,
	a as n,
	b as u,
	d as c,
	l as m,
	f as d,
	g as l,
	n as p
} from '../../chunks/vendor-8f03db9b.js';
function f(e) {
	let a, i, f, v, h;
	return {
		c() {
			(a = t('h1')),
				(i = o('Artworks')),
				(f = s()),
				(v = t('p')),
				(h = o(
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem natus commodi? Tempore ad enim voluptate nemo nihil voluptatibus unde modi in corporis? Quidem error natus voluptate facere nesciunt quia.'
				));
		},
		l(e) {
			a = r(e, 'H1', {});
			var t = n(a);
			(i = u(t, 'Artworks')), t.forEach(c), (f = m(e)), (v = r(e, 'P', {}));
			var o = n(v);
			(h = u(
				o,
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae exercitationem natus commodi? Tempore ad enim voluptate nemo nihil voluptatibus unde modi in corporis? Quidem error natus voluptate facere nesciunt quia.'
			)),
				o.forEach(c);
		},
		m(e, t) {
			d(e, a, t), l(a, i), d(e, f, t), d(e, v, t), l(v, h);
		},
		p: p,
		i: p,
		o: p,
		d(e) {
			e && c(a), e && c(f), e && c(v);
		}
	};
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, f, i, {});
	}
}
