import {
	S as s,
	i as a,
	s as e,
	k as l,
	f as c,
	C as t,
	x as r,
	D as i,
	w as n,
	d as u,
	M as h,
	e as o,
	c as d,
	a as v,
	o as p,
	I as H,
	O as f,
	t as E,
	b as m,
	g as q,
	h as _,
	n as g,
	j as $,
	l as b,
	P as x
} from './index-d91e1ed8.js';
function A(s) {
	let a, e, l;
	const t = s[11].default,
		i = h(t, s, s[10], null);
	return {
		c() {
			(a = o('header')), i && i.c(), this.h();
		},
		l(s) {
			a = d(s, 'HEADER', { class: !0 });
			var e = v(a);
			i && i.l(e), e.forEach(u), this.h();
		},
		h() {
			p(a, 'class', (e = H(s[6][s[5]]) + ' svelte-1lcuq1a'));
		},
		m(s, e) {
			c(s, a, e), i && i.m(a, null), (l = !0);
		},
		p(s, c) {
			i && i.p && 1024 & c && f(i, t, s, s[10], c, null, null),
				(!l || (32 & c && e !== (e = H(s[6][s[5]]) + ' svelte-1lcuq1a'))) && p(a, 'class', e);
		},
		i(s) {
			l || (n(i, s), (l = !0));
		},
		o(s) {
			r(i, s), (l = !1);
		},
		d(s) {
			s && u(a), i && i.d(s);
		}
	};
}
function M(s) {
	let a, e, l, t;
	return {
		c() {
			(a = o('header')), (e = o('h1')), (l = E(s[2])), this.h();
		},
		l(c) {
			a = d(c, 'HEADER', { class: !0 });
			var t = v(a);
			e = d(t, 'H1', { class: !0 });
			var r = v(e);
			(l = m(r, s[2])), r.forEach(u), t.forEach(u), this.h();
		},
		h() {
			p(e, 'class', 'svelte-1lcuq1a'),
				p(a, 'class', (t = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a'));
		},
		m(s, t) {
			c(s, a, t), q(a, e), q(e, l);
		},
		p(s, e) {
			4 & e && _(l, s[2]),
				33 & e && t !== (t = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a') && p(a, 'class', t);
		},
		i: g,
		o: g,
		d(s) {
			s && u(a);
		}
	};
}
function R(s) {
	let a, e, l, t, r, i;
	return {
		c() {
			(a = o('header')), (e = o('h2')), (l = E(s[2])), (t = $()), (r = o('h3')), this.h();
		},
		l(c) {
			a = d(c, 'HEADER', { class: !0 });
			var i = v(a);
			e = d(i, 'H2', { class: !0 });
			var n = v(e);
			(l = m(n, s[2])),
				n.forEach(u),
				(t = b(i)),
				(r = d(i, 'H3', { class: !0 })),
				v(r).forEach(u),
				i.forEach(u),
				this.h();
		},
		h() {
			p(e, 'class', 'svelte-1lcuq1a'),
				p(r, 'class', 'svelte-1lcuq1a'),
				p(a, 'class', (i = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a'));
		},
		m(i, n) {
			c(i, a, n), q(a, e), q(e, l), q(a, t), q(a, r), (r.innerHTML = s[3]);
		},
		p(s, e) {
			4 & e && _(l, s[2]),
				8 & e && (r.innerHTML = s[3]),
				33 & e && i !== (i = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a') && p(a, 'class', i);
		},
		i: g,
		o: g,
		d(s) {
			s && u(a);
		}
	};
}
function D(s) {
	let a, e, l, t, r, i, n, h, H;
	return {
		c() {
			(a = o('header')),
				(e = o('h1')),
				(l = E(s[2])),
				(t = $()),
				(r = o('br')),
				(i = $()),
				(n = o('span')),
				(h = o('h2')),
				this.h();
		},
		l(c) {
			a = d(c, 'HEADER', { class: !0, style: !0 });
			var o = v(a);
			e = d(o, 'H1', { class: !0 });
			var p = v(e);
			(l = m(p, s[2])),
				(t = b(p)),
				(r = d(p, 'BR', { class: !0 })),
				(i = b(p)),
				(n = d(p, 'SPAN', { class: !0 }));
			var H = v(n);
			(h = d(H, 'H2', { class: !0 })),
				v(h).forEach(u),
				H.forEach(u),
				p.forEach(u),
				o.forEach(u),
				this.h();
		},
		h() {
			p(r, 'class', 'svelte-1lcuq1a'),
				p(h, 'class', 'svelte-1lcuq1a'),
				p(n, 'class', 'svelte-1lcuq1a'),
				p(e, 'class', 'svelte-1lcuq1a'),
				p(a, 'class', (H = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a')),
				x(a, 'background-image', "url('" + s[4] + "')");
		},
		m(u, o) {
			c(u, a, o),
				q(a, e),
				q(e, l),
				q(e, t),
				q(e, r),
				q(e, i),
				q(e, n),
				q(n, h),
				(h.innerHTML = s[3]);
		},
		p(s, e) {
			4 & e && _(l, s[2]),
				8 & e && (h.innerHTML = s[3]),
				33 & e && H !== (H = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a') && p(a, 'class', H),
				16 & e && x(a, 'background-image', "url('" + s[4] + "')");
		},
		i: g,
		o: g,
		d(s) {
			s && u(a);
		}
	};
}
function L(s) {
	let a, e, l, t, r, i, n, h;
	return {
		c() {
			(a = o('header')),
				(e = o('h1')),
				(l = E(s[2])),
				(t = $()),
				(r = o('br')),
				(i = $()),
				(n = o('span')),
				this.h();
		},
		l(c) {
			a = d(c, 'HEADER', { class: !0 });
			var h = v(a);
			e = d(h, 'H1', { class: !0 });
			var o = v(e);
			(l = m(o, s[2])),
				(t = b(o)),
				(r = d(o, 'BR', { class: !0 })),
				(i = b(o)),
				(n = d(o, 'SPAN', { class: !0 })),
				v(n).forEach(u),
				o.forEach(u),
				h.forEach(u),
				this.h();
		},
		h() {
			p(r, 'class', 'svelte-1lcuq1a'),
				p(n, 'class', 'svelte-1lcuq1a'),
				p(e, 'class', 'svelte-1lcuq1a'),
				p(a, 'class', (h = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a'));
		},
		m(u, h) {
			c(u, a, h), q(a, e), q(e, l), q(e, t), q(e, r), q(e, i), q(e, n), (n.innerHTML = s[3]);
		},
		p(s, e) {
			4 & e && _(l, s[2]),
				8 & e && (n.innerHTML = s[3]),
				33 & e && h !== (h = s[6][s[5]] + ' ' + s[0] + ' svelte-1lcuq1a') && p(a, 'class', h);
		},
		i: g,
		o: g,
		d(s) {
			s && u(a);
		}
	};
}
function T(s) {
	let a, e, h, o;
	const d = [L, D, R, M, A],
		v = [];
	function p(s, a) {
		return 1 === s[1] ? 0 : 2 === s[1] ? 1 : 3 === s[1] ? 2 : 4 === s[1] ? 3 : 4;
	}
	return (
		(a = p(s)),
		(e = v[a] = d[a](s)),
		{
			c() {
				e.c(), (h = l());
			},
			l(s) {
				e.l(s), (h = l());
			},
			m(s, e) {
				v[a].m(s, e), c(s, h, e), (o = !0);
			},
			p(s, [l]) {
				let c = a;
				(a = p(s)),
					a === c
						? v[a].p(s, l)
						: (t(),
						  r(v[c], 1, 1, () => {
								v[c] = null;
						  }),
						  i(),
						  (e = v[a]),
						  e ? e.p(s, l) : ((e = v[a] = d[a](s)), e.c()),
						  n(e, 1),
						  e.m(h.parentNode, h));
			},
			i(s) {
				o || (n(e), (o = !0));
			},
			o(s) {
				r(e), (o = !1);
			},
			d(s) {
				v[a].d(s), s && u(h);
			}
		}
	);
}
function k(s, a, e) {
	let { $$slots: l = {}, $$scope: c } = a,
		{ clases: t = '' } = a,
		{ tipo: r = 4 } = a,
		{ title: i = '' } = a,
		{ subtitle: n = '' } = a,
		{ text: u = '' } = a,
		{ img: h = '' } = a,
		{ is_home: o = !1 } = a,
		{ is_products_page: d = !1 } = a,
		{ variante: v = 0 } = a;
	return (
		(s.$$set = (s) => {
			'clases' in s && e(0, (t = s.clases)),
				'tipo' in s && e(1, (r = s.tipo)),
				'title' in s && e(2, (i = s.title)),
				'subtitle' in s && e(3, (n = s.subtitle)),
				'text' in s && e(7, (u = s.text)),
				'img' in s && e(4, (h = s.img)),
				'is_home' in s && e(8, (o = s.is_home)),
				'is_products_page' in s && e(9, (d = s.is_products_page)),
				'variante' in s && e(5, (v = s.variante)),
				'$$scope' in s && e(10, (c = s.$$scope));
		}),
		[
			t,
			r,
			i,
			n,
			h,
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
			u,
			o,
			d,
			c,
			l
		]
	);
}
class N extends s {
	constructor(s) {
		super(),
			a(this, s, k, T, e, {
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
