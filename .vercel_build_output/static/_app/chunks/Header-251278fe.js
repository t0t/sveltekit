import {
	S as s,
	i as e,
	s as a,
	k as t,
	f as l,
	C as i,
	x as c,
	D as r,
	w as h,
	d as n,
	M as o,
	e as j,
	c as u,
	a as d,
	o as v,
	I as p,
	O as H,
	t as f,
	b as E,
	g as m,
	h as _,
	n as g,
	j as $,
	l as b,
	P as x
} from './index-d91e1ed8.js';
function A(s) {
	let e, a, t;
	const i = s[11].default,
		r = o(i, s, s[10], null);
	return {
		c() {
			(e = j('header')), r && r.c(), this.h();
		},
		l(s) {
			e = u(s, 'HEADER', { class: !0 });
			var a = d(e);
			r && r.l(a), a.forEach(n), this.h();
		},
		h() {
			v(e, 'class', (a = p(s[6][s[5]]) + ' svelte-18hijj8'));
		},
		m(s, a) {
			l(s, e, a), r && r.m(e, null), (t = !0);
		},
		p(s, l) {
			r && r.p && 1024 & l && H(r, i, s, s[10], l, null, null),
				(!t || (32 & l && a !== (a = p(s[6][s[5]]) + ' svelte-18hijj8'))) && v(e, 'class', a);
		},
		i(s) {
			t || (h(r, s), (t = !0));
		},
		o(s) {
			c(r, s), (t = !1);
		},
		d(s) {
			s && n(e), r && r.d(s);
		}
	};
}
function M(s) {
	let e, a, t, i;
	return {
		c() {
			(e = j('header')), (a = j('h1')), (t = f(s[2])), this.h();
		},
		l(l) {
			e = u(l, 'HEADER', { class: !0 });
			var i = d(e);
			a = u(i, 'H1', { class: !0 });
			var c = d(a);
			(t = E(c, s[2])), c.forEach(n), i.forEach(n), this.h();
		},
		h() {
			v(a, 'class', 'svelte-18hijj8'),
				v(e, 'class', (i = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8'));
		},
		m(s, i) {
			l(s, e, i), m(e, a), m(a, t);
		},
		p(s, a) {
			4 & a && _(t, s[2]),
				33 & a && i !== (i = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8') && v(e, 'class', i);
		},
		i: g,
		o: g,
		d(s) {
			s && n(e);
		}
	};
}
function R(s) {
	let e, a, t, i, c, r;
	return {
		c() {
			(e = j('header')), (a = j('h2')), (t = f(s[2])), (i = $()), (c = j('h3')), this.h();
		},
		l(l) {
			e = u(l, 'HEADER', { class: !0 });
			var r = d(e);
			a = u(r, 'H2', { class: !0 });
			var h = d(a);
			(t = E(h, s[2])),
				h.forEach(n),
				(i = b(r)),
				(c = u(r, 'H3', { class: !0 })),
				d(c).forEach(n),
				r.forEach(n),
				this.h();
		},
		h() {
			v(a, 'class', 'svelte-18hijj8'),
				v(c, 'class', 'svelte-18hijj8'),
				v(e, 'class', (r = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8'));
		},
		m(r, h) {
			l(r, e, h), m(e, a), m(a, t), m(e, i), m(e, c), (c.innerHTML = s[3]);
		},
		p(s, a) {
			4 & a && _(t, s[2]),
				8 & a && (c.innerHTML = s[3]),
				33 & a && r !== (r = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8') && v(e, 'class', r);
		},
		i: g,
		o: g,
		d(s) {
			s && n(e);
		}
	};
}
function D(s) {
	let e, a, t, i, c, r, h, o, p;
	return {
		c() {
			(e = j('header')),
				(a = j('h1')),
				(t = f(s[2])),
				(i = $()),
				(c = j('br')),
				(r = $()),
				(h = j('span')),
				(o = j('h2')),
				this.h();
		},
		l(l) {
			e = u(l, 'HEADER', { class: !0, style: !0 });
			var j = d(e);
			a = u(j, 'H1', { class: !0 });
			var v = d(a);
			(t = E(v, s[2])),
				(i = b(v)),
				(c = u(v, 'BR', { class: !0 })),
				(r = b(v)),
				(h = u(v, 'SPAN', { class: !0 }));
			var p = d(h);
			(o = u(p, 'H2', { class: !0 })),
				d(o).forEach(n),
				p.forEach(n),
				v.forEach(n),
				j.forEach(n),
				this.h();
		},
		h() {
			v(c, 'class', 'svelte-18hijj8'),
				v(o, 'class', 'svelte-18hijj8'),
				v(h, 'class', 'svelte-18hijj8'),
				v(a, 'class', 'svelte-18hijj8'),
				v(e, 'class', (p = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8')),
				x(e, 'background-image', "url('" + s[4] + "')");
		},
		m(n, j) {
			l(n, e, j),
				m(e, a),
				m(a, t),
				m(a, i),
				m(a, c),
				m(a, r),
				m(a, h),
				m(h, o),
				(o.innerHTML = s[3]);
		},
		p(s, a) {
			4 & a && _(t, s[2]),
				8 & a && (o.innerHTML = s[3]),
				33 & a && p !== (p = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8') && v(e, 'class', p),
				16 & a && x(e, 'background-image', "url('" + s[4] + "')");
		},
		i: g,
		o: g,
		d(s) {
			s && n(e);
		}
	};
}
function L(s) {
	let e, a, t, i, c, r, h, o;
	return {
		c() {
			(e = j('header')),
				(a = j('h1')),
				(t = f(s[2])),
				(i = $()),
				(c = j('br')),
				(r = $()),
				(h = j('span')),
				this.h();
		},
		l(l) {
			e = u(l, 'HEADER', { class: !0 });
			var o = d(e);
			a = u(o, 'H1', { class: !0 });
			var j = d(a);
			(t = E(j, s[2])),
				(i = b(j)),
				(c = u(j, 'BR', { class: !0 })),
				(r = b(j)),
				(h = u(j, 'SPAN', { class: !0 })),
				d(h).forEach(n),
				j.forEach(n),
				o.forEach(n),
				this.h();
		},
		h() {
			v(c, 'class', 'svelte-18hijj8'),
				v(h, 'class', 'svelte-18hijj8'),
				v(a, 'class', 'svelte-18hijj8'),
				v(e, 'class', (o = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8'));
		},
		m(n, o) {
			l(n, e, o), m(e, a), m(a, t), m(a, i), m(a, c), m(a, r), m(a, h), (h.innerHTML = s[3]);
		},
		p(s, a) {
			4 & a && _(t, s[2]),
				8 & a && (h.innerHTML = s[3]),
				33 & a && o !== (o = s[6][s[5]] + ' ' + s[0] + ' svelte-18hijj8') && v(e, 'class', o);
		},
		i: g,
		o: g,
		d(s) {
			s && n(e);
		}
	};
}
function T(s) {
	let e, a, o, j;
	const u = [L, D, R, M, A],
		d = [];
	function v(s, e) {
		return 1 === s[1] ? 0 : 2 === s[1] ? 1 : 3 === s[1] ? 2 : 4 === s[1] ? 3 : 4;
	}
	return (
		(e = v(s)),
		(a = d[e] = u[e](s)),
		{
			c() {
				a.c(), (o = t());
			},
			l(s) {
				a.l(s), (o = t());
			},
			m(s, a) {
				d[e].m(s, a), l(s, o, a), (j = !0);
			},
			p(s, [t]) {
				let l = e;
				(e = v(s)),
					e === l
						? d[e].p(s, t)
						: (i(),
						  c(d[l], 1, 1, () => {
								d[l] = null;
						  }),
						  r(),
						  (a = d[e]),
						  a ? a.p(s, t) : ((a = d[e] = u[e](s)), a.c()),
						  h(a, 1),
						  a.m(o.parentNode, o));
			},
			i(s) {
				j || (h(a), (j = !0));
			},
			o(s) {
				c(a), (j = !1);
			},
			d(s) {
				d[e].d(s), s && n(o);
			}
		}
	);
}
function k(s, e, a) {
	let { $$slots: t = {}, $$scope: l } = e,
		{ clases: i = '' } = e,
		{ tipo: c = 4 } = e,
		{ title: r = '' } = e,
		{ subtitle: h = '' } = e,
		{ text: n = '' } = e,
		{ img: o = '' } = e,
		{ is_home: j = !1 } = e,
		{ is_products_page: u = !1 } = e,
		{ variante: d = 0 } = e;
	return (
		(s.$$set = (s) => {
			'clases' in s && a(0, (i = s.clases)),
				'tipo' in s && a(1, (c = s.tipo)),
				'title' in s && a(2, (r = s.title)),
				'subtitle' in s && a(3, (h = s.subtitle)),
				'text' in s && a(7, (n = s.text)),
				'img' in s && a(4, (o = s.img)),
				'is_home' in s && a(8, (j = s.is_home)),
				'is_products_page' in s && a(9, (u = s.is_products_page)),
				'variante' in s && a(5, (d = s.variante)),
				'$$scope' in s && a(10, (l = s.$$scope));
		}),
		[
			i,
			c,
			r,
			h,
			o,
			d,
			[
				'Header_0',
				'Header_1',
				'Header_2',
				'Header_3',
				'Header_4',
				'Header_5',
				'Header_6',
				'Header_7'
			],
			n,
			j,
			u,
			l,
			t
		]
	);
}
class N extends s {
	constructor(s) {
		super(),
			e(this, s, k, T, a, {
				clases: 0,
				tipo: 1,
				title: 2,
				subtitle: 3,
				text: 7,
				img: 4,
				is_home: 8,
				is_products_page: 9,
				variante: 5
			});
	}
}
export { N as H };
