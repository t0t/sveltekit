import {
	S as s,
	i as e,
	s as a,
	k as i,
	f as t,
	C as l,
	x as c,
	D as r,
	w as n,
	d as h,
	M as o,
	e as u,
	c as d,
	a as v,
	o as p,
	I as b,
	O as H,
	t as f,
	b as E,
	g as m,
	h as z,
	n as _,
	j as g,
	l as $,
	P as x
} from './index-d91e1ed8.js';
function A(s) {
	let e, a, i;
	const l = s[11].default,
		r = o(l, s, s[10], null);
	return {
		c() {
			(e = u('header')), r && r.c(), this.h();
		},
		l(s) {
			e = d(s, 'HEADER', { class: !0 });
			var a = v(e);
			r && r.l(a), a.forEach(h), this.h();
		},
		h() {
			p(e, 'class', (a = b(s[6][s[5]]) + ' svelte-b7ii0z'));
		},
		m(s, a) {
			t(s, e, a), r && r.m(e, null), (i = !0);
		},
		p(s, t) {
			r && r.p && 1024 & t && H(r, l, s, s[10], t, null, null),
				(!i || (32 & t && a !== (a = b(s[6][s[5]]) + ' svelte-b7ii0z'))) && p(e, 'class', a);
		},
		i(s) {
			i || (n(r, s), (i = !0));
		},
		o(s) {
			c(r, s), (i = !1);
		},
		d(s) {
			s && h(e), r && r.d(s);
		}
	};
}
function M(s) {
	let e, a, i, l;
	return {
		c() {
			(e = u('header')), (a = u('h1')), (i = f(s[2])), this.h();
		},
		l(t) {
			e = d(t, 'HEADER', { class: !0 });
			var l = v(e);
			a = d(l, 'H1', { class: !0 });
			var c = v(a);
			(i = E(c, s[2])), c.forEach(h), l.forEach(h), this.h();
		},
		h() {
			p(a, 'class', 'svelte-b7ii0z'),
				p(e, 'class', (l = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z'));
		},
		m(s, l) {
			t(s, e, l), m(e, a), m(a, i);
		},
		p(s, a) {
			4 & a && z(i, s[2]),
				33 & a && l !== (l = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z') && p(e, 'class', l);
		},
		i: _,
		o: _,
		d(s) {
			s && h(e);
		}
	};
}
function R(s) {
	let e, a, i, l, c, r;
	return {
		c() {
			(e = u('header')), (a = u('h2')), (i = f(s[2])), (l = g()), (c = u('h3')), this.h();
		},
		l(t) {
			e = d(t, 'HEADER', { class: !0 });
			var r = v(e);
			a = d(r, 'H2', { class: !0 });
			var n = v(a);
			(i = E(n, s[2])),
				n.forEach(h),
				(l = $(r)),
				(c = d(r, 'H3', { class: !0 })),
				v(c).forEach(h),
				r.forEach(h),
				this.h();
		},
		h() {
			p(a, 'class', 'svelte-b7ii0z'),
				p(c, 'class', 'svelte-b7ii0z'),
				p(e, 'class', (r = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z'));
		},
		m(r, n) {
			t(r, e, n), m(e, a), m(a, i), m(e, l), m(e, c), (c.innerHTML = s[3]);
		},
		p(s, a) {
			4 & a && z(i, s[2]),
				8 & a && (c.innerHTML = s[3]),
				33 & a && r !== (r = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z') && p(e, 'class', r);
		},
		i: _,
		o: _,
		d(s) {
			s && h(e);
		}
	};
}
function D(s) {
	let e, a, i, l, c, r, n, o, b;
	return {
		c() {
			(e = u('header')),
				(a = u('h1')),
				(i = f(s[2])),
				(l = g()),
				(c = u('br')),
				(r = g()),
				(n = u('span')),
				(o = u('h2')),
				this.h();
		},
		l(t) {
			e = d(t, 'HEADER', { class: !0, style: !0 });
			var u = v(e);
			a = d(u, 'H1', { class: !0 });
			var p = v(a);
			(i = E(p, s[2])),
				(l = $(p)),
				(c = d(p, 'BR', { class: !0 })),
				(r = $(p)),
				(n = d(p, 'SPAN', { class: !0 }));
			var b = v(n);
			(o = d(b, 'H2', { class: !0 })),
				v(o).forEach(h),
				b.forEach(h),
				p.forEach(h),
				u.forEach(h),
				this.h();
		},
		h() {
			p(c, 'class', 'svelte-b7ii0z'),
				p(o, 'class', 'svelte-b7ii0z'),
				p(n, 'class', 'svelte-b7ii0z'),
				p(a, 'class', 'svelte-b7ii0z'),
				p(e, 'class', (b = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z')),
				x(e, 'background-image', "url('" + s[4] + "')");
		},
		m(h, u) {
			t(h, e, u),
				m(e, a),
				m(a, i),
				m(a, l),
				m(a, c),
				m(a, r),
				m(a, n),
				m(n, o),
				(o.innerHTML = s[3]);
		},
		p(s, a) {
			4 & a && z(i, s[2]),
				8 & a && (o.innerHTML = s[3]),
				33 & a && b !== (b = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z') && p(e, 'class', b),
				16 & a && x(e, 'background-image', "url('" + s[4] + "')");
		},
		i: _,
		o: _,
		d(s) {
			s && h(e);
		}
	};
}
function L(s) {
	let e, a, i, l, c, r, n, o;
	return {
		c() {
			(e = u('header')),
				(a = u('h1')),
				(i = f(s[2])),
				(l = g()),
				(c = u('br')),
				(r = g()),
				(n = u('span')),
				this.h();
		},
		l(t) {
			e = d(t, 'HEADER', { class: !0 });
			var o = v(e);
			a = d(o, 'H1', { class: !0 });
			var u = v(a);
			(i = E(u, s[2])),
				(l = $(u)),
				(c = d(u, 'BR', { class: !0 })),
				(r = $(u)),
				(n = d(u, 'SPAN', { class: !0 })),
				v(n).forEach(h),
				u.forEach(h),
				o.forEach(h),
				this.h();
		},
		h() {
			p(c, 'class', 'svelte-b7ii0z'),
				p(n, 'class', 'svelte-b7ii0z'),
				p(a, 'class', 'svelte-b7ii0z'),
				p(e, 'class', (o = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z'));
		},
		m(h, o) {
			t(h, e, o), m(e, a), m(a, i), m(a, l), m(a, c), m(a, r), m(a, n), (n.innerHTML = s[3]);
		},
		p(s, a) {
			4 & a && z(i, s[2]),
				8 & a && (n.innerHTML = s[3]),
				33 & a && o !== (o = s[6][s[5]] + ' ' + s[0] + ' svelte-b7ii0z') && p(e, 'class', o);
		},
		i: _,
		o: _,
		d(s) {
			s && h(e);
		}
	};
}
function T(s) {
	let e, a, o, u;
	const d = [L, D, R, M, A],
		v = [];
	function p(s, e) {
		return 1 === s[1] ? 0 : 2 === s[1] ? 1 : 3 === s[1] ? 2 : 4 === s[1] ? 3 : 4;
	}
	return (
		(e = p(s)),
		(a = v[e] = d[e](s)),
		{
			c() {
				a.c(), (o = i());
			},
			l(s) {
				a.l(s), (o = i());
			},
			m(s, a) {
				v[e].m(s, a), t(s, o, a), (u = !0);
			},
			p(s, [i]) {
				let t = e;
				(e = p(s)),
					e === t
						? v[e].p(s, i)
						: (l(),
						  c(v[t], 1, 1, () => {
								v[t] = null;
						  }),
						  r(),
						  (a = v[e]),
						  a ? a.p(s, i) : ((a = v[e] = d[e](s)), a.c()),
						  n(a, 1),
						  a.m(o.parentNode, o));
			},
			i(s) {
				u || (n(a), (u = !0));
			},
			o(s) {
				c(a), (u = !1);
			},
			d(s) {
				v[e].d(s), s && h(o);
			}
		}
	);
}
function k(s, e, a) {
	let { $$slots: i = {}, $$scope: t } = e,
		{ clases: l = '' } = e,
		{ tipo: c = 4 } = e,
		{ title: r = '' } = e,
		{ subtitle: n = '' } = e,
		{ text: h = '' } = e,
		{ img: o = '' } = e,
		{ is_home: u = !1 } = e,
		{ is_products_page: d = !1 } = e,
		{ variante: v = 0 } = e;
	return (
		(s.$$set = (s) => {
			'clases' in s && a(0, (l = s.clases)),
				'tipo' in s && a(1, (c = s.tipo)),
				'title' in s && a(2, (r = s.title)),
				'subtitle' in s && a(3, (n = s.subtitle)),
				'text' in s && a(7, (h = s.text)),
				'img' in s && a(4, (o = s.img)),
				'is_home' in s && a(8, (u = s.is_home)),
				'is_products_page' in s && a(9, (d = s.is_products_page)),
				'variante' in s && a(5, (v = s.variante)),
				'$$scope' in s && a(10, (t = s.$$scope));
		}),
		[
			l,
			c,
			r,
			n,
			o,
			v,
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
			h,
			u,
			d,
			t,
			i
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
