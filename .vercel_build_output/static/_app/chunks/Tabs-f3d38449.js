import {
	S as t,
	i as e,
	s,
	M as n,
	e as l,
	c as r,
	a,
	d as o,
	o as c,
	I as i,
	f as $,
	O as f,
	w as u,
	x as m,
	k as p,
	p as d,
	q as g,
	r as h,
	y as v,
	C as x,
	D as y,
	j as b,
	l as S,
	J as w,
	t as E,
	b as I,
	g as N,
	h as _,
	X as H
} from './index-d91e1ed8.js';
import { G as L, L as T, B as j } from './ListItem-7b7dc3dc.js';
import { L as B } from './List-340c877d.js';
function G(t) {
	let e, s, p;
	const d = t[4].default,
		g = n(d, t, t[3], null);
	return {
		c() {
			(e = l('section')), g && g.c(), this.h();
		},
		l(t) {
			e = r(t, 'SECTION', { id: !0, class: !0 });
			var s = a(e);
			g && g.l(s), s.forEach(o), this.h();
		},
		h() {
			c(e, 'id', t[1]), c(e, 'class', (s = i(t[2][t[0]]) + ' svelte-bz0fya'));
		},
		m(t, s) {
			$(t, e, s), g && g.m(e, null), (p = !0);
		},
		p(t, [n]) {
			g && g.p && 8 & n && f(g, d, t, t[3], n, null, null),
				(!p || 2 & n) && c(e, 'id', t[1]),
				(!p || (1 & n && s !== (s = i(t[2][t[0]]) + ' svelte-bz0fya'))) && c(e, 'class', s);
		},
		i(t) {
			p || (u(g, t), (p = !0));
		},
		o(t) {
			m(g, t), (p = !1);
		},
		d(t) {
			t && o(e), g && g.d(t);
		}
	};
}
function M(t, e, s) {
	let { $$slots: n = {}, $$scope: l } = e,
		{ variante: r = 0 } = e,
		{ id: a = '' } = e;
	return (
		(t.$$set = (t) => {
			'variante' in t && s(0, (r = t.variante)),
				'id' in t && s(1, (a = t.id)),
				'$$scope' in t && s(3, (l = t.$$scope));
		}),
		[
			r,
			a,
			['Section_0', 'Section_1', 'Section_2', 'Section_3', 'Section_4', 'Section_5', 'Section_6'],
			l,
			n
		]
	);
}
class C extends t {
	constructor(t) {
		super(), e(this, t, M, G, s, { variante: 0, id: 1 });
	}
}
function O(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function P(t, e, s) {
	const n = t.slice();
	return (n[6] = e[s]), n;
}
function k(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function z(t) {
	let e, s, n, f, p;
	return (
		(s = new j({ props: { variante: 8, text: t[3].title } })),
		s.$on('click', function () {
			H(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = l('span')), d(s.$$.fragment), (f = b()), this.h();
			},
			l(t) {
				e = r(t, 'SPAN', { class: !0 });
				var n = a(e);
				g(s.$$.fragment, n), n.forEach(o), (f = S(t)), this.h();
			},
			h() {
				c(e, 'class', (n = i(t[1] === t[3].id ? 'active' : '') + ' svelte-11dm67y'));
			},
			m(t, n) {
				$(t, e, n), h(s, e, null), $(t, f, n), (p = !0);
			},
			p(l, r) {
				t = l;
				const a = {};
				1 & r && (a.text = t[3].title),
					s.$set(a),
					(!p || (3 & r && n !== (n = i(t[1] === t[3].id ? 'active' : '') + ' svelte-11dm67y'))) &&
						c(e, 'class', n);
			},
			i(t) {
				p || (u(s.$$.fragment, t), (p = !0));
			},
			o(t) {
				m(s.$$.fragment, t), (p = !1);
			},
			d(t) {
				t && o(e), v(s), t && o(f);
			}
		}
	);
}
function A(t) {
	let e, s;
	return (
		(e = new T({ props: { tipo: 1, $$slots: { default: [z] }, $$scope: { ctx: t } } })),
		{
			c() {
				d(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, n) {
				h(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				2051 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (u(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function D(t) {
	let e,
		s,
		n = t[0],
		l = [];
	for (let a = 0; a < n.length; a += 1) l[a] = A(k(t, n, a));
	const r = (t) =>
		m(l[t], 1, 1, () => {
			l[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < l.length; t += 1) l[t].c();
			e = p();
		},
		l(t) {
			for (let e = 0; e < l.length; e += 1) l[e].l(t);
			e = p();
		},
		m(t, n) {
			for (let e = 0; e < l.length; e += 1) l[e].m(t, n);
			$(t, e, n), (s = !0);
		},
		p(t, s) {
			if (7 & s) {
				let a;
				for (n = t[0], a = 0; a < n.length; a += 1) {
					const r = k(t, n, a);
					l[a]
						? (l[a].p(r, s), u(l[a], 1))
						: ((l[a] = A(r)), l[a].c(), u(l[a], 1), l[a].m(e.parentNode, e));
				}
				for (x(), a = n.length; a < l.length; a += 1) r(a);
				y();
			}
		},
		i(t) {
			if (!s) {
				for (let t = 0; t < n.length; t += 1) u(l[t]);
				s = !0;
			}
		},
		o(t) {
			l = l.filter(Boolean);
			for (let e = 0; e < l.length; e += 1) m(l[e]);
			s = !1;
		},
		d(t) {
			w(l, t), t && o(e);
		}
	};
}
function F(t) {
	let e, s;
	return (
		(e = new C({ props: { variante: 6, $$slots: { default: [K] }, $$scope: { ctx: t } } })),
		{
			c() {
				d(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, n) {
				h(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				2049 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (u(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function q(t) {
	let e,
		s = t[3].content + '';
	return {
		c() {
			(e = l('p')), this.h();
		},
		l(t) {
			(e = r(t, 'P', { class: !0 })), a(e).forEach(o), this.h();
		},
		h() {
			c(e, 'class', 'svelte-11dm67y');
		},
		m(t, n) {
			$(t, e, n), (e.innerHTML = s);
		},
		p(t, n) {
			1 & n && s !== (s = t[3].content + '') && (e.innerHTML = s);
		},
		d(t) {
			t && o(e);
		}
	};
}
function J(t) {
	let e,
		s,
		n,
		i,
		f,
		u,
		m,
		p = t[3].subtitle + '';
	return {
		c() {
			(e = l('figure')), (s = l('img')), (f = b()), (u = l('figcaption')), (m = E(p)), this.h();
		},
		l(t) {
			e = r(t, 'FIGURE', { slot: !0, class: !0 });
			var n = a(e);
			(s = r(n, 'IMG', { src: !0, alt: !0, class: !0 })),
				(f = S(n)),
				(u = r(n, 'FIGCAPTION', { class: !0 }));
			var l = a(u);
			(m = I(l, p)), l.forEach(o), n.forEach(o), this.h();
		},
		h() {
			s.src !== (n = t[3].img) && c(s, 'src', n),
				c(s, 'alt', (i = t[3].subtitle)),
				c(s, 'class', 'svelte-11dm67y'),
				c(u, 'class', 'svelte-11dm67y'),
				c(e, 'slot', 'subarea1'),
				c(e, 'class', 'svelte-11dm67y');
		},
		m(t, n) {
			$(t, e, n), N(e, s), N(e, f), N(e, u), N(u, m);
		},
		p(t, e) {
			1 & e && s.src !== (n = t[3].img) && c(s, 'src', n),
				1 & e && i !== (i = t[3].subtitle) && c(s, 'alt', i),
				1 & e && p !== (p = t[3].subtitle + '') && _(m, p);
		},
		d(t) {
			t && o(e);
		}
	};
}
function R(t) {
	let e,
		s,
		n = t[6] + '';
	return {
		c() {
			(e = E(n)), (s = b());
		},
		l(t) {
			(e = I(t, n)), (s = S(t));
		},
		m(t, n) {
			$(t, e, n), $(t, s, n);
		},
		p(t, s) {
			1 & s && n !== (n = t[6] + '') && _(e, n);
		},
		d(t) {
			t && o(e), t && o(s);
		}
	};
}
function U(t) {
	let e, s;
	return (
		(e = new T({
			props: { tipo: 0, variante: 2, $$slots: { default: [R] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				d(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, n) {
				h(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				2049 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (u(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function V(t) {
	let e,
		s,
		n = t[3].tags,
		l = [];
	for (let a = 0; a < n.length; a += 1) l[a] = U(P(t, n, a));
	const r = (t) =>
		m(l[t], 1, 1, () => {
			l[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < l.length; t += 1) l[t].c();
			e = p();
		},
		l(t) {
			for (let e = 0; e < l.length; e += 1) l[e].l(t);
			e = p();
		},
		m(t, n) {
			for (let e = 0; e < l.length; e += 1) l[e].m(t, n);
			$(t, e, n), (s = !0);
		},
		p(t, s) {
			if (1 & s) {
				let a;
				for (n = t[3].tags, a = 0; a < n.length; a += 1) {
					const r = P(t, n, a);
					l[a]
						? (l[a].p(r, s), u(l[a], 1))
						: ((l[a] = U(r)), l[a].c(), u(l[a], 1), l[a].m(e.parentNode, e));
				}
				for (x(), a = n.length; a < l.length; a += 1) r(a);
				y();
			}
		},
		i(t) {
			if (!s) {
				for (let t = 0; t < n.length; t += 1) u(l[t]);
				s = !0;
			}
		},
		o(t) {
			l = l.filter(Boolean);
			for (let e = 0; e < l.length; e += 1) m(l[e]);
			s = !1;
		},
		d(t) {
			w(l, t), t && o(e);
		}
	};
}
function X(t) {
	let e, s, n;
	return (
		(s = new B({
			props: { tipo: 0, variante: 1, $$slots: { default: [V] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = l('div')), d(s.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { slot: !0, class: !0 });
				var n = a(e);
				g(s.$$.fragment, n), n.forEach(o), this.h();
			},
			h() {
				c(e, 'slot', 'subarea2'), c(e, 'class', 'svelte-11dm67y');
			},
			m(t, l) {
				$(t, e, l), h(s, e, null), (n = !0);
			},
			p(t, e) {
				const n = {};
				2049 & e && (n.$$scope = { dirty: e, ctx: t }), s.$set(n);
			},
			i(t) {
				n || (u(s.$$.fragment, t), (n = !0));
			},
			o(t) {
				m(s.$$.fragment, t), (n = !1);
			},
			d(t) {
				t && o(e), v(s);
			}
		}
	);
}
function K(t) {
	let e, s, n;
	return (
		(e = new L({
			props: {
				variante: 3,
				$$slots: { subarea2: [X], subarea1: [J], default: [q] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				d(e.$$.fragment), (s = b());
			},
			l(t) {
				g(e.$$.fragment, t), (s = S(t));
			},
			m(t, l) {
				h(e, t, l), $(t, s, l), (n = !0);
			},
			p(t, s) {
				const n = {};
				2049 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				n || (u(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				v(e, t), t && o(s);
			}
		}
	);
}
function Q(t) {
	let e,
		s,
		n = t[1] == t[3].id && F(t);
	return {
		c() {
			n && n.c(), (e = p());
		},
		l(t) {
			n && n.l(t), (e = p());
		},
		m(t, l) {
			n && n.m(t, l), $(t, e, l), (s = !0);
		},
		p(t, s) {
			t[1] == t[3].id
				? n
					? (n.p(t, s), 3 & s && u(n, 1))
					: ((n = F(t)), n.c(), u(n, 1), n.m(e.parentNode, e))
				: n &&
				  (x(),
				  m(n, 1, 1, () => {
						n = null;
				  }),
				  y());
		},
		i(t) {
			s || (u(n), (s = !0));
		},
		o(t) {
			m(n), (s = !1);
		},
		d(t) {
			n && n.d(t), t && o(e);
		}
	};
}
function W(t) {
	let e, s, n, l;
	e = new B({ props: { tipo: 3, variante: 3, $$slots: { default: [D] }, $$scope: { ctx: t } } });
	let r = t[0],
		a = [];
	for (let o = 0; o < r.length; o += 1) a[o] = Q(O(t, r, o));
	const c = (t) =>
		m(a[t], 1, 1, () => {
			a[t] = null;
		});
	return {
		c() {
			d(e.$$.fragment), (s = b());
			for (let t = 0; t < a.length; t += 1) a[t].c();
			n = p();
		},
		l(t) {
			g(e.$$.fragment, t), (s = S(t));
			for (let e = 0; e < a.length; e += 1) a[e].l(t);
			n = p();
		},
		m(t, r) {
			h(e, t, r), $(t, s, r);
			for (let e = 0; e < a.length; e += 1) a[e].m(t, r);
			$(t, n, r), (l = !0);
		},
		p(t, [s]) {
			const l = {};
			if ((2051 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l), 3 & s)) {
				let e;
				for (r = t[0], e = 0; e < r.length; e += 1) {
					const l = O(t, r, e);
					a[e]
						? (a[e].p(l, s), u(a[e], 1))
						: ((a[e] = Q(l)), a[e].c(), u(a[e], 1), a[e].m(n.parentNode, n));
				}
				for (x(), e = r.length; e < a.length; e += 1) c(e);
				y();
			}
		},
		i(t) {
			if (!l) {
				u(e.$$.fragment, t);
				for (let t = 0; t < r.length; t += 1) u(a[t]);
				l = !0;
			}
		},
		o(t) {
			m(e.$$.fragment, t), (a = a.filter(Boolean));
			for (let e = 0; e < a.length; e += 1) m(a[e]);
			l = !1;
		},
		d(t) {
			v(e, t), t && o(s), w(a, t), t && o(n);
		}
	};
}
function Y(t, e, s) {
	let { tabHeaders: n = [] } = e,
		l = 1;
	return (
		(t.$$set = (t) => {
			'tabHeaders' in t && s(0, (n = t.tabHeaders));
		}),
		[n, l, (t) => () => s(1, (l = t))]
	);
}
class Z extends t {
	constructor(t) {
		super(), e(this, t, Y, W, s, { tabHeaders: 0 });
	}
}
export { Z as T };
