import {
	S as s,
	i as a,
	s as e,
	k as t,
	f as l,
	C as r,
	x as c,
	D as i,
	w as h,
	d as n,
	M as o,
	e as v,
	c as u,
	a as d,
	o as p,
	O as b,
	t as x,
	j as H,
	b as f,
	l as m,
	g as _,
	h as E,
	n as g,
	I as $,
	P as M
} from './index-d91e1ed8.js';
function A(s) {
	let a, e, t;
	const r = s[10].default,
		i = o(r, s, s[9], null);
	return {
		c() {
			(a = v('header')), i && i.c(), this.h();
		},
		l(s) {
			a = u(s, 'HEADER', { class: !0 });
			var e = d(a);
			i && i.l(e), e.forEach(n), this.h();
		},
		h() {
			p(a, 'class', (e = s[5][s[4]] + '  svelte-12bvxah'));
		},
		m(s, e) {
			l(s, a, e), i && i.m(a, null), (t = !0);
		},
		p(s, l) {
			i && i.p && 512 & l && b(i, r, s, s[9], l, null, null),
				(!t || (16 & l && e !== (e = s[5][s[4]] + '  svelte-12bvxah'))) && p(a, 'class', e);
		},
		i(s) {
			t || (h(i, s), (t = !0));
		},
		o(s) {
			c(i, s), (t = !1);
		},
		d(s) {
			s && n(a), i && i.d(s);
		}
	};
}
function L(s) {
	let a, e, t, r, c, i;
	return {
		c() {
			(a = v('header')), (e = v('h2')), (t = x(s[0])), (r = H()), (c = v('h3')), this.h();
		},
		l(l) {
			a = u(l, 'HEADER', { class: !0 });
			var i = d(a);
			e = u(i, 'H2', { class: !0 });
			var h = d(e);
			(t = f(h, s[0])),
				h.forEach(n),
				(r = m(i)),
				(c = u(i, 'H3', { class: !0 })),
				d(c).forEach(n),
				i.forEach(n),
				this.h();
		},
		h() {
			p(e, 'class', 'svelte-12bvxah'),
				p(c, 'class', 'svelte-12bvxah'),
				p(a, 'class', (i = s[5][s[4]] + '  svelte-12bvxah'));
		},
		m(i, h) {
			l(i, a, h), _(a, e), _(e, t), _(a, r), _(a, c), (c.innerHTML = s[1]);
		},
		p(s, e) {
			1 & e && E(t, s[0]),
				2 & e && (c.innerHTML = s[1]),
				16 & e && i !== (i = s[5][s[4]] + '  svelte-12bvxah') && p(a, 'class', i);
		},
		i: g,
		o: g,
		d(s) {
			s && n(a);
		}
	};
}
function R(s) {
	let a, e, t, r, c, i, h, o, b;
	return {
		c() {
			(a = v('header')),
				(e = v('h1')),
				(t = x(s[0])),
				(r = H()),
				(c = v('br')),
				(i = H()),
				(h = v('span')),
				(o = v('h2')),
				this.h();
		},
		l(l) {
			a = u(l, 'HEADER', { class: !0, style: !0 });
			var v = d(a);
			e = u(v, 'H1', { class: !0 });
			var p = d(e);
			(t = f(p, s[0])),
				(r = m(p)),
				(c = u(p, 'BR', { class: !0 })),
				(i = m(p)),
				(h = u(p, 'SPAN', { class: !0 }));
			var b = d(h);
			(o = u(b, 'H2', { class: !0 })),
				d(o).forEach(n),
				b.forEach(n),
				p.forEach(n),
				v.forEach(n),
				this.h();
		},
		h() {
			p(c, 'class', 'svelte-12bvxah'),
				p(o, 'class', 'svelte-12bvxah'),
				p(h, 'class', 'svelte-12bvxah'),
				p(e, 'class', 'svelte-12bvxah'),
				p(a, 'class', (b = $(s[5][s[4]]) + ' svelte-12bvxah')),
				M(a, 'background-image', "url('" + s[2] + "')");
		},
		m(n, v) {
			l(n, a, v),
				_(a, e),
				_(e, t),
				_(e, r),
				_(e, c),
				_(e, i),
				_(e, h),
				_(h, o),
				(o.innerHTML = s[1]);
		},
		p(s, e) {
			1 & e && E(t, s[0]),
				2 & e && (o.innerHTML = s[1]),
				16 & e && b !== (b = $(s[5][s[4]]) + ' svelte-12bvxah') && p(a, 'class', b),
				4 & e && M(a, 'background-image', "url('" + s[2] + "')");
		},
		i: g,
		o: g,
		d(s) {
			s && n(a);
		}
	};
}
function T(s) {
	let a, e, t, r, c, i, h, o;
	return {
		c() {
			(a = v('header')),
				(e = v('h1')),
				(t = x(s[0])),
				(r = H()),
				(c = v('br')),
				(i = H()),
				(h = v('span')),
				this.h();
		},
		l(l) {
			a = u(l, 'HEADER', { class: !0 });
			var o = d(a);
			e = u(o, 'H1', { class: !0 });
			var v = d(e);
			(t = f(v, s[0])),
				(r = m(v)),
				(c = u(v, 'BR', { class: !0 })),
				(i = m(v)),
				(h = u(v, 'SPAN', { class: !0 })),
				d(h).forEach(n),
				v.forEach(n),
				o.forEach(n),
				this.h();
		},
		h() {
			p(c, 'class', 'svelte-12bvxah'),
				p(h, 'class', 'svelte-12bvxah'),
				p(e, 'class', 'svelte-12bvxah'),
				p(a, 'class', (o = s[5][s[4]] + '  svelte-12bvxah'));
		},
		m(n, o) {
			l(n, a, o), _(a, e), _(e, t), _(e, r), _(e, c), _(e, i), _(e, h), (h.innerHTML = s[1]);
		},
		p(s, e) {
			1 & e && E(t, s[0]),
				2 & e && (h.innerHTML = s[1]),
				16 & e && o !== (o = s[5][s[4]] + '  svelte-12bvxah') && p(a, 'class', o);
		},
		i: g,
		o: g,
		d(s) {
			s && n(a);
		}
	};
}
function D(s) {
	let a, e, o, v;
	const u = [T, R, L, A],
		d = [];
	function p(s, a) {
		return 1 === s[3] ? 0 : 2 === s[3] ? 1 : 3 === s[3] ? 2 : 3;
	}
	return (
		(a = p(s)),
		(e = d[a] = u[a](s)),
		{
			c() {
				e.c(), (o = t());
			},
			l(s) {
				e.l(s), (o = t());
			},
			m(s, e) {
				d[a].m(s, e), l(s, o, e), (v = !0);
			},
			p(s, [t]) {
				let l = a;
				(a = p(s)),
					a === l
						? d[a].p(s, t)
						: (r(),
						  c(d[l], 1, 1, () => {
								d[l] = null;
						  }),
						  i(),
						  (e = d[a]),
						  e ? e.p(s, t) : ((e = d[a] = u[a](s)), e.c()),
						  h(e, 1),
						  e.m(o.parentNode, o));
			},
			i(s) {
				v || (h(e), (v = !0));
			},
			o(s) {
				c(e), (v = !1);
			},
			d(s) {
				d[a].d(s), s && n(o);
			}
		}
	);
}
function k(s, a, e) {
	let { $$slots: t = {}, $$scope: l } = a,
		{ title: r = '' } = a,
		{ subtitle: c = '' } = a,
		{ text: i = '' } = a,
		{ img: h = '' } = a,
		{ is_home: n = !1 } = a,
		{ is_products_page: o = !1 } = a,
		{ tipo: v = 0 } = a,
		{ variante: u = 0 } = a;
	return (
		(s.$$set = (s) => {
			'title' in s && e(0, (r = s.title)),
				'subtitle' in s && e(1, (c = s.subtitle)),
				'text' in s && e(6, (i = s.text)),
				'img' in s && e(2, (h = s.img)),
				'is_home' in s && e(7, (n = s.is_home)),
				'is_products_page' in s && e(8, (o = s.is_products_page)),
				'tipo' in s && e(3, (v = s.tipo)),
				'variante' in s && e(4, (u = s.variante)),
				'$$scope' in s && e(9, (l = s.$$scope));
		}),
		[
			r,
			c,
			h,
			v,
			u,
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
			i,
			n,
			o,
			l,
			t
		]
	);
}
class N extends s {
	constructor(s) {
		super(),
			a(this, s, k, D, e, {
				title: 0,
				subtitle: 1,
				text: 6,
				img: 2,
				is_home: 7,
				is_products_page: 8,
				tipo: 3,
				variante: 4
			});
	}
}
export { N as H };
