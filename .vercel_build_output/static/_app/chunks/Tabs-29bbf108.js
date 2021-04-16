import {
	S as t,
	i as e,
	s,
	k as n,
	f as l,
	w as r,
	p as a,
	q as o,
	r as c,
	x as i,
	y as f,
	C as $,
	D as g,
	d,
	j as m,
	l as p,
	J as u,
	e as h,
	c as v,
	a as x,
	o as j,
	g as _,
	X as b,
	I as k
} from './index-d91e1ed8.js';
import { B as I } from './Grid.svelte-dc7715e6.js';
import { L as w, a as H } from './ListItem-1d115590.js';
import { I as y } from './Img-374bd0d7.js';
function E(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function D(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function L(t) {
	let e, s, n, $, g;
	return (
		(s = new I({ props: { variante: 8, text: t[3].title } })),
		s.$on('click', function () {
			b(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = h('span')), a(s.$$.fragment), ($ = m()), this.h();
			},
			l(t) {
				e = v(t, 'SPAN', { class: !0 });
				var n = x(e);
				o(s.$$.fragment, n), n.forEach(d), ($ = p(t)), this.h();
			},
			h() {
				j(e, 'class', (n = k(t[1] === t[3].id ? 'active' : '') + ' svelte-1juk6dg'));
			},
			m(t, n) {
				l(t, e, n), c(s, e, null), l(t, $, n), (g = !0);
			},
			p(l, r) {
				t = l;
				const a = {};
				1 & r && (a.text = t[3].title),
					s.$set(a),
					(!g || (3 & r && n !== (n = k(t[1] === t[3].id ? 'active' : '') + ' svelte-1juk6dg'))) &&
						j(e, 'class', n);
			},
			i(t) {
				g || (r(s.$$.fragment, t), (g = !0));
			},
			o(t) {
				i(s.$$.fragment, t), (g = !1);
			},
			d(t) {
				t && d(e), f(s), t && d($);
			}
		}
	);
}
function N(t) {
	let e, s;
	return (
		(e = new H({ props: { tipo: 1, $$slots: { default: [L] }, $$scope: { ctx: t } } })),
		{
			c() {
				a(e.$$.fragment);
			},
			l(t) {
				o(e.$$.fragment, t);
			},
			m(t, n) {
				c(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				259 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (r(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				i(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				f(e, t);
			}
		}
	);
}
function B(t) {
	let e,
		s,
		a = t[0],
		o = [];
	for (let n = 0; n < a.length; n += 1) o[n] = N(D(t, a, n));
	const c = (t) =>
		i(o[t], 1, 1, () => {
			o[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < o.length; t += 1) o[t].c();
			e = n();
		},
		l(t) {
			for (let e = 0; e < o.length; e += 1) o[e].l(t);
			e = n();
		},
		m(t, n) {
			for (let e = 0; e < o.length; e += 1) o[e].m(t, n);
			l(t, e, n), (s = !0);
		},
		p(t, s) {
			if (7 & s) {
				let n;
				for (a = t[0], n = 0; n < a.length; n += 1) {
					const l = D(t, a, n);
					o[n]
						? (o[n].p(l, s), r(o[n], 1))
						: ((o[n] = N(l)), o[n].c(), r(o[n], 1), o[n].m(e.parentNode, e));
				}
				for ($(), n = a.length; n < o.length; n += 1) c(n);
				g();
			}
		},
		i(t) {
			if (!s) {
				for (let t = 0; t < a.length; t += 1) r(o[t]);
				s = !0;
			}
		},
		o(t) {
			o = o.filter(Boolean);
			for (let e = 0; e < o.length; e += 1) i(o[e]);
			s = !1;
		},
		d(t) {
			u(o, t), t && d(e);
		}
	};
}
function T(t) {
	let e, s;
	return (
		(e = new w({
			props: { tipo: 5, variante: 7, $$slots: { default: [V] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				a(e.$$.fragment);
			},
			l(t) {
				o(e.$$.fragment, t);
			},
			m(t, n) {
				c(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				257 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (r(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				i(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				f(e, t);
			}
		}
	);
}
function V(t) {
	let e,
		s,
		n,
		$,
		g,
		u,
		b,
		k,
		I = t[3].content + '';
	return (
		(n = new y({ props: { variante: 5, src: t[3].img, alt: t[3].subtitle } })),
		{
			c() {
				(e = h('div')),
					(s = h('div')),
					a(n.$$.fragment),
					($ = m()),
					(g = h('div')),
					(u = h('p')),
					(b = m()),
					this.h();
			},
			l(t) {
				e = v(t, 'DIV', { class: !0 });
				var l = x(e);
				s = v(l, 'DIV', { class: !0 });
				var r = x(s);
				o(n.$$.fragment, r), r.forEach(d), ($ = p(l)), (g = v(l, 'DIV', { class: !0 }));
				var a = x(g);
				(u = v(a, 'P', { class: !0 })),
					x(u).forEach(d),
					a.forEach(d),
					l.forEach(d),
					(b = p(t)),
					this.h();
			},
			h() {
				j(s, 'class', 'col_13 col_s2_5 svelte-1juk6dg'),
					j(u, 'class', 'svelte-1juk6dg'),
					j(g, 'class', 'col_13 col_s2_8 svelte-1juk6dg'),
					j(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-1juk6dg');
			},
			m(t, r) {
				l(t, e, r),
					_(e, s),
					c(n, s, null),
					_(e, $),
					_(e, g),
					_(g, u),
					(u.innerHTML = I),
					l(t, b, r),
					(k = !0);
			},
			p(t, e) {
				const s = {};
				1 & e && (s.src = t[3].img),
					1 & e && (s.alt = t[3].subtitle),
					n.$set(s),
					(!k || 1 & e) && I !== (I = t[3].content + '') && (u.innerHTML = I);
			},
			i(t) {
				k || (r(n.$$.fragment, t), (k = !0));
			},
			o(t) {
				i(n.$$.fragment, t), (k = !1);
			},
			d(t) {
				t && d(e), f(n), t && d(b);
			}
		}
	);
}
function M(t) {
	let e,
		s,
		a = t[1] == t[3].id && T(t);
	return {
		c() {
			a && a.c(), (e = n());
		},
		l(t) {
			a && a.l(t), (e = n());
		},
		m(t, n) {
			a && a.m(t, n), l(t, e, n), (s = !0);
		},
		p(t, s) {
			t[1] == t[3].id
				? a
					? (a.p(t, s), 3 & s && r(a, 1))
					: ((a = T(t)), a.c(), r(a, 1), a.m(e.parentNode, e))
				: a &&
				  ($(),
				  i(a, 1, 1, () => {
						a = null;
				  }),
				  g());
		},
		i(t) {
			s || (r(a), (s = !0));
		},
		o(t) {
			i(a), (s = !1);
		},
		d(t) {
			a && a.d(t), t && d(e);
		}
	};
}
function P(t) {
	let e, s, h, v;
	e = new w({ props: { tipo: 3, variante: 3, $$slots: { default: [B] }, $$scope: { ctx: t } } });
	let x = t[0],
		j = [];
	for (let n = 0; n < x.length; n += 1) j[n] = M(E(t, x, n));
	const _ = (t) =>
		i(j[t], 1, 1, () => {
			j[t] = null;
		});
	return {
		c() {
			a(e.$$.fragment), (s = m());
			for (let t = 0; t < j.length; t += 1) j[t].c();
			h = n();
		},
		l(t) {
			o(e.$$.fragment, t), (s = p(t));
			for (let e = 0; e < j.length; e += 1) j[e].l(t);
			h = n();
		},
		m(t, n) {
			c(e, t, n), l(t, s, n);
			for (let e = 0; e < j.length; e += 1) j[e].m(t, n);
			l(t, h, n), (v = !0);
		},
		p(t, [s]) {
			const n = {};
			if ((259 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n), 3 & s)) {
				let e;
				for (x = t[0], e = 0; e < x.length; e += 1) {
					const n = E(t, x, e);
					j[e]
						? (j[e].p(n, s), r(j[e], 1))
						: ((j[e] = M(n)), j[e].c(), r(j[e], 1), j[e].m(h.parentNode, h));
				}
				for ($(), e = x.length; e < j.length; e += 1) _(e);
				g();
			}
		},
		i(t) {
			if (!v) {
				r(e.$$.fragment, t);
				for (let t = 0; t < x.length; t += 1) r(j[t]);
				v = !0;
			}
		},
		o(t) {
			i(e.$$.fragment, t), (j = j.filter(Boolean));
			for (let e = 0; e < j.length; e += 1) i(j[e]);
			v = !1;
		},
		d(t) {
			f(e, t), t && d(s), u(j, t), t && d(h);
		}
	};
}
function S(t, e, s) {
	let { tabHeaders: n = [] } = e,
		l = 1;
	return (
		(t.$$set = (t) => {
			'tabHeaders' in t && s(0, (n = t.tabHeaders));
		}),
		[n, l, (t) => () => s(1, (l = t))]
	);
}
class q extends t {
	constructor(t) {
		super(), e(this, t, S, P, s, { tabHeaders: 0 });
	}
}
export { q as T };
