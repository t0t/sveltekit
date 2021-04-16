import {
	S as t,
	i as e,
	s as n,
	M as s,
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
	p as g,
	q as h,
	r as d,
	y as v,
	C as x,
	D as z,
	j as b,
	l as S,
	J as w,
	t as y,
	b as E,
	g as I,
	h as N,
	X as _
} from './index-d91e1ed8.js';
import { G as H, L, B as T } from './ListItem-e194f349.js';
import { L as j } from './List-23857782.js';
function B(t) {
	let e, n, p;
	const g = t[4].default,
		h = s(g, t, t[3], null);
	return {
		c() {
			(e = l('section')), h && h.c(), this.h();
		},
		l(t) {
			e = r(t, 'SECTION', { id: !0, class: !0 });
			var n = a(e);
			h && h.l(n), n.forEach(o), this.h();
		},
		h() {
			c(e, 'id', t[1]), c(e, 'class', (n = i(t[2][t[0]]) + ' svelte-139nqg1'));
		},
		m(t, n) {
			$(t, e, n), h && h.m(e, null), (p = !0);
		},
		p(t, [s]) {
			h && h.p && 8 & s && f(h, g, t, t[3], s, null, null),
				(!p || 2 & s) && c(e, 'id', t[1]),
				(!p || (1 & s && n !== (n = i(t[2][t[0]]) + ' svelte-139nqg1'))) && c(e, 'class', n);
		},
		i(t) {
			p || (u(h, t), (p = !0));
		},
		o(t) {
			m(h, t), (p = !1);
		},
		d(t) {
			t && o(e), h && h.d(t);
		}
	};
}
function G(t, e, n) {
	let { $$slots: s = {}, $$scope: l } = e,
		{ variante: r = 0 } = e,
		{ id: a = '' } = e;
	return (
		(t.$$set = (t) => {
			'variante' in t && n(0, (r = t.variante)),
				'id' in t && n(1, (a = t.id)),
				'$$scope' in t && n(3, (l = t.$$scope));
		}),
		[
			r,
			a,
			['Section_0', 'Section_1', 'Section_2', 'Section_3', 'Section_4', 'Section_5', 'Section_6'],
			l,
			s
		]
	);
}
class M extends t {
	constructor(t) {
		super(), e(this, t, G, B, n, { variante: 0, id: 1 });
	}
}
function q(t, e, n) {
	const s = t.slice();
	return (s[3] = e[n]), s;
}
function C(t, e, n) {
	const s = t.slice();
	return (s[6] = e[n]), s;
}
function O(t, e, n) {
	const s = t.slice();
	return (s[3] = e[n]), s;
}
function P(t) {
	let e, n, s, f, p;
	return (
		(n = new T({ props: { variante: 8, text: t[3].title } })),
		n.$on('click', function () {
			_(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = l('span')), g(n.$$.fragment), (f = b()), this.h();
			},
			l(t) {
				e = r(t, 'SPAN', { class: !0 });
				var s = a(e);
				h(n.$$.fragment, s), s.forEach(o), (f = S(t)), this.h();
			},
			h() {
				c(e, 'class', (s = i(t[1] === t[3].id ? 'active' : '') + ' svelte-1lumz3z'));
			},
			m(t, s) {
				$(t, e, s), d(n, e, null), $(t, f, s), (p = !0);
			},
			p(l, r) {
				t = l;
				const a = {};
				1 & r && (a.text = t[3].title),
					n.$set(a),
					(!p || (3 & r && s !== (s = i(t[1] === t[3].id ? 'active' : '') + ' svelte-1lumz3z'))) &&
						c(e, 'class', s);
			},
			i(t) {
				p || (u(n.$$.fragment, t), (p = !0));
			},
			o(t) {
				m(n.$$.fragment, t), (p = !1);
			},
			d(t) {
				t && o(e), v(n), t && o(f);
			}
		}
	);
}
function k(t) {
	let e, n;
	return (
		(e = new L({ props: { tipo: 1, $$slots: { default: [P] }, $$scope: { ctx: t } } })),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				d(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				2051 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (u(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function A(t) {
	let e,
		n,
		s = t[0],
		l = [];
	for (let a = 0; a < s.length; a += 1) l[a] = k(O(t, s, a));
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
		m(t, s) {
			for (let e = 0; e < l.length; e += 1) l[e].m(t, s);
			$(t, e, s), (n = !0);
		},
		p(t, n) {
			if (7 & n) {
				let a;
				for (s = t[0], a = 0; a < s.length; a += 1) {
					const r = O(t, s, a);
					l[a]
						? (l[a].p(r, n), u(l[a], 1))
						: ((l[a] = k(r)), l[a].c(), u(l[a], 1), l[a].m(e.parentNode, e));
				}
				for (x(), a = s.length; a < l.length; a += 1) r(a);
				z();
			}
		},
		i(t) {
			if (!n) {
				for (let t = 0; t < s.length; t += 1) u(l[t]);
				n = !0;
			}
		},
		o(t) {
			l = l.filter(Boolean);
			for (let e = 0; e < l.length; e += 1) m(l[e]);
			n = !1;
		},
		d(t) {
			w(l, t), t && o(e);
		}
	};
}
function D(t) {
	let e, n;
	return (
		(e = new M({ props: { variante: 6, $$slots: { default: [K] }, $$scope: { ctx: t } } })),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				d(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				2049 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (u(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function F(t) {
	let e,
		n = t[3].content + '';
	return {
		c() {
			(e = l('p')), this.h();
		},
		l(t) {
			(e = r(t, 'P', { class: !0 })), a(e).forEach(o), this.h();
		},
		h() {
			c(e, 'class', 'svelte-1lumz3z');
		},
		m(t, s) {
			$(t, e, s), (e.innerHTML = n);
		},
		p(t, s) {
			1 & s && n !== (n = t[3].content + '') && (e.innerHTML = n);
		},
		d(t) {
			t && o(e);
		}
	};
}
function J(t) {
	let e,
		n,
		s,
		i,
		f,
		u,
		m,
		p = t[3].subtitle + '';
	return {
		c() {
			(e = l('figure')), (n = l('img')), (f = b()), (u = l('figcaption')), (m = y(p)), this.h();
		},
		l(t) {
			e = r(t, 'FIGURE', { slot: !0, class: !0 });
			var s = a(e);
			(n = r(s, 'IMG', { src: !0, alt: !0, class: !0 })),
				(f = S(s)),
				(u = r(s, 'FIGCAPTION', { class: !0 }));
			var l = a(u);
			(m = E(l, p)), l.forEach(o), s.forEach(o), this.h();
		},
		h() {
			n.src !== (s = t[3].img) && c(n, 'src', s),
				c(n, 'alt', (i = t[3].subtitle)),
				c(n, 'class', 'svelte-1lumz3z'),
				c(u, 'class', 'svelte-1lumz3z'),
				c(e, 'slot', 'subarea1'),
				c(e, 'class', 'svelte-1lumz3z');
		},
		m(t, s) {
			$(t, e, s), I(e, n), I(e, f), I(e, u), I(u, m);
		},
		p(t, e) {
			1 & e && n.src !== (s = t[3].img) && c(n, 'src', s),
				1 & e && i !== (i = t[3].subtitle) && c(n, 'alt', i),
				1 & e && p !== (p = t[3].subtitle + '') && N(m, p);
		},
		d(t) {
			t && o(e);
		}
	};
}
function R(t) {
	let e,
		n,
		s = t[6] + '';
	return {
		c() {
			(e = y(s)), (n = b());
		},
		l(t) {
			(e = E(t, s)), (n = S(t));
		},
		m(t, s) {
			$(t, e, s), $(t, n, s);
		},
		p(t, n) {
			1 & n && s !== (s = t[6] + '') && N(e, s);
		},
		d(t) {
			t && o(e), t && o(n);
		}
	};
}
function U(t) {
	let e, n;
	return (
		(e = new L({
			props: { tipo: 0, variante: 2, $$slots: { default: [R] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				d(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				2049 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (u(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				v(e, t);
			}
		}
	);
}
function V(t) {
	let e,
		n,
		s = t[3].tags,
		l = [];
	for (let a = 0; a < s.length; a += 1) l[a] = U(C(t, s, a));
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
		m(t, s) {
			for (let e = 0; e < l.length; e += 1) l[e].m(t, s);
			$(t, e, s), (n = !0);
		},
		p(t, n) {
			if (1 & n) {
				let a;
				for (s = t[3].tags, a = 0; a < s.length; a += 1) {
					const r = C(t, s, a);
					l[a]
						? (l[a].p(r, n), u(l[a], 1))
						: ((l[a] = U(r)), l[a].c(), u(l[a], 1), l[a].m(e.parentNode, e));
				}
				for (x(), a = s.length; a < l.length; a += 1) r(a);
				z();
			}
		},
		i(t) {
			if (!n) {
				for (let t = 0; t < s.length; t += 1) u(l[t]);
				n = !0;
			}
		},
		o(t) {
			l = l.filter(Boolean);
			for (let e = 0; e < l.length; e += 1) m(l[e]);
			n = !1;
		},
		d(t) {
			w(l, t), t && o(e);
		}
	};
}
function X(t) {
	let e, n, s;
	return (
		(n = new j({
			props: { tipo: 0, variante: 1, $$slots: { default: [V] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = l('div')), g(n.$$.fragment), this.h();
			},
			l(t) {
				e = r(t, 'DIV', { slot: !0, class: !0 });
				var s = a(e);
				h(n.$$.fragment, s), s.forEach(o), this.h();
			},
			h() {
				c(e, 'slot', 'subarea2'), c(e, 'class', 'svelte-1lumz3z');
			},
			m(t, l) {
				$(t, e, l), d(n, e, null), (s = !0);
			},
			p(t, e) {
				const s = {};
				2049 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
			},
			i(t) {
				s || (u(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				m(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && o(e), v(n);
			}
		}
	);
}
function K(t) {
	let e, n, s;
	return (
		(e = new H({
			props: {
				variante: 3,
				$$slots: { subarea2: [X], subarea1: [J], default: [F] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				g(e.$$.fragment), (n = b());
			},
			l(t) {
				h(e.$$.fragment, t), (n = S(t));
			},
			m(t, l) {
				d(e, t, l), $(t, n, l), (s = !0);
			},
			p(t, n) {
				const s = {};
				2049 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				s || (u(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				v(e, t), t && o(n);
			}
		}
	);
}
function Q(t) {
	let e,
		n,
		s = t[1] == t[3].id && D(t);
	return {
		c() {
			s && s.c(), (e = p());
		},
		l(t) {
			s && s.l(t), (e = p());
		},
		m(t, l) {
			s && s.m(t, l), $(t, e, l), (n = !0);
		},
		p(t, n) {
			t[1] == t[3].id
				? s
					? (s.p(t, n), 3 & n && u(s, 1))
					: ((s = D(t)), s.c(), u(s, 1), s.m(e.parentNode, e))
				: s &&
				  (x(),
				  m(s, 1, 1, () => {
						s = null;
				  }),
				  z());
		},
		i(t) {
			n || (u(s), (n = !0));
		},
		o(t) {
			m(s), (n = !1);
		},
		d(t) {
			s && s.d(t), t && o(e);
		}
	};
}
function W(t) {
	let e, n, s, l;
	e = new j({ props: { tipo: 3, variante: 3, $$slots: { default: [A] }, $$scope: { ctx: t } } });
	let r = t[0],
		a = [];
	for (let o = 0; o < r.length; o += 1) a[o] = Q(q(t, r, o));
	const c = (t) =>
		m(a[t], 1, 1, () => {
			a[t] = null;
		});
	return {
		c() {
			g(e.$$.fragment), (n = b());
			for (let t = 0; t < a.length; t += 1) a[t].c();
			s = p();
		},
		l(t) {
			h(e.$$.fragment, t), (n = S(t));
			for (let e = 0; e < a.length; e += 1) a[e].l(t);
			s = p();
		},
		m(t, r) {
			d(e, t, r), $(t, n, r);
			for (let e = 0; e < a.length; e += 1) a[e].m(t, r);
			$(t, s, r), (l = !0);
		},
		p(t, [n]) {
			const l = {};
			if ((2051 & n && (l.$$scope = { dirty: n, ctx: t }), e.$set(l), 3 & n)) {
				let e;
				for (r = t[0], e = 0; e < r.length; e += 1) {
					const l = q(t, r, e);
					a[e]
						? (a[e].p(l, n), u(a[e], 1))
						: ((a[e] = Q(l)), a[e].c(), u(a[e], 1), a[e].m(s.parentNode, s));
				}
				for (x(), e = r.length; e < a.length; e += 1) c(e);
				z();
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
			v(e, t), t && o(n), w(a, t), t && o(s);
		}
	};
}
function Y(t, e, n) {
	let { tabHeaders: s = [] } = e,
		l = 1;
	return (
		(t.$$set = (t) => {
			'tabHeaders' in t && n(0, (s = t.tabHeaders));
		}),
		[s, l, (t) => () => n(1, (l = t))]
	);
}
class Z extends t {
	constructor(t) {
		super(), e(this, t, Y, W, n, { tabHeaders: 0 });
	}
}
export { Z as T };
