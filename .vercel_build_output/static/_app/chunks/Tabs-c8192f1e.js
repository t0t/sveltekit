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
	d as m,
	j as p,
	l as d,
	J as h,
	e as u,
	c as x,
	a as v,
	o as w,
	g as _,
	X as b,
	I
} from './index-d91e1ed8.js';
import { B as H } from './Grid.svelte-916f7747.js';
import { L as j, a as y } from './ListItem-cf78d2b1.js';
import { I as E } from './Img-fdbb3f27.js';
function D(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function L(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function N(t) {
	let e, s, n, $, g;
	return (
		(s = new H({ props: { variante: 8, text: t[3].title } })),
		s.$on('click', function () {
			b(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = u('span')), a(s.$$.fragment), ($ = p()), this.h();
			},
			l(t) {
				e = x(t, 'SPAN', { class: !0 });
				var n = v(e);
				o(s.$$.fragment, n), n.forEach(m), ($ = d(t)), this.h();
			},
			h() {
				w(e, 'class', (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-1g9xowx'));
			},
			m(t, n) {
				l(t, e, n), c(s, e, null), l(t, $, n), (g = !0);
			},
			p(l, r) {
				t = l;
				const a = {};
				1 & r && (a.text = t[3].title),
					s.$set(a),
					(!g || (3 & r && n !== (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-1g9xowx'))) &&
						w(e, 'class', n);
			},
			i(t) {
				g || (r(s.$$.fragment, t), (g = !0));
			},
			o(t) {
				i(s.$$.fragment, t), (g = !1);
			},
			d(t) {
				t && m(e), f(s), t && m($);
			}
		}
	);
}
function B(t) {
	let e, s;
	return (
		(e = new y({ props: { tipo: 1, $$slots: { default: [N] }, $$scope: { ctx: t } } })),
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
function T(t) {
	let e,
		s,
		a = t[0],
		o = [];
	for (let n = 0; n < a.length; n += 1) o[n] = B(L(t, a, n));
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
					const l = L(t, a, n);
					o[n]
						? (o[n].p(l, s), r(o[n], 1))
						: ((o[n] = B(l)), o[n].c(), r(o[n], 1), o[n].m(e.parentNode, e));
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
			h(o, t), t && m(e);
		}
	};
}
function V(t) {
	let e, s;
	return (
		(e = new j({
			props: { tipo: 5, variante: 7, $$slots: { default: [k] }, $$scope: { ctx: t } }
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
function k(t) {
	let e,
		s,
		n,
		$,
		g,
		h,
		b,
		I,
		H = t[3].content + '';
	return (
		(n = new E({ props: { variante: 5, src: t[3].img, alt: t[3].subtitle } })),
		{
			c() {
				(e = u('div')),
					(s = u('div')),
					a(n.$$.fragment),
					($ = p()),
					(g = u('div')),
					(h = u('p')),
					(b = p()),
					this.h();
			},
			l(t) {
				e = x(t, 'DIV', { class: !0 });
				var l = v(e);
				s = x(l, 'DIV', { class: !0 });
				var r = v(s);
				o(n.$$.fragment, r), r.forEach(m), ($ = d(l)), (g = x(l, 'DIV', { class: !0 }));
				var a = v(g);
				(h = x(a, 'P', { class: !0 })),
					v(h).forEach(m),
					a.forEach(m),
					l.forEach(m),
					(b = d(t)),
					this.h();
			},
			h() {
				w(s, 'class', 'col_13 col_s2_5 svelte-1g9xowx'),
					w(h, 'class', 'svelte-1g9xowx'),
					w(g, 'class', 'col_13 col_s2_8 svelte-1g9xowx'),
					w(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-1g9xowx');
			},
			m(t, r) {
				l(t, e, r),
					_(e, s),
					c(n, s, null),
					_(e, $),
					_(e, g),
					_(g, h),
					(h.innerHTML = H),
					l(t, b, r),
					(I = !0);
			},
			p(t, e) {
				const s = {};
				1 & e && (s.src = t[3].img),
					1 & e && (s.alt = t[3].subtitle),
					n.$set(s),
					(!I || 1 & e) && H !== (H = t[3].content + '') && (h.innerHTML = H);
			},
			i(t) {
				I || (r(n.$$.fragment, t), (I = !0));
			},
			o(t) {
				i(n.$$.fragment, t), (I = !1);
			},
			d(t) {
				t && m(e), f(n), t && m(b);
			}
		}
	);
}
function M(t) {
	let e,
		s,
		a = t[1] == t[3].id && V(t);
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
					: ((a = V(t)), a.c(), r(a, 1), a.m(e.parentNode, e))
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
			a && a.d(t), t && m(e);
		}
	};
}
function P(t) {
	let e, s, u, x;
	e = new j({ props: { tipo: 3, variante: 3, $$slots: { default: [T] }, $$scope: { ctx: t } } });
	let v = t[0],
		w = [];
	for (let n = 0; n < v.length; n += 1) w[n] = M(D(t, v, n));
	const _ = (t) =>
		i(w[t], 1, 1, () => {
			w[t] = null;
		});
	return {
		c() {
			a(e.$$.fragment), (s = p());
			for (let t = 0; t < w.length; t += 1) w[t].c();
			u = n();
		},
		l(t) {
			o(e.$$.fragment, t), (s = d(t));
			for (let e = 0; e < w.length; e += 1) w[e].l(t);
			u = n();
		},
		m(t, n) {
			c(e, t, n), l(t, s, n);
			for (let e = 0; e < w.length; e += 1) w[e].m(t, n);
			l(t, u, n), (x = !0);
		},
		p(t, [s]) {
			const n = {};
			if ((259 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n), 3 & s)) {
				let e;
				for (v = t[0], e = 0; e < v.length; e += 1) {
					const n = D(t, v, e);
					w[e]
						? (w[e].p(n, s), r(w[e], 1))
						: ((w[e] = M(n)), w[e].c(), r(w[e], 1), w[e].m(u.parentNode, u));
				}
				for ($(), e = v.length; e < w.length; e += 1) _(e);
				g();
			}
		},
		i(t) {
			if (!x) {
				r(e.$$.fragment, t);
				for (let t = 0; t < v.length; t += 1) r(w[t]);
				x = !0;
			}
		},
		o(t) {
			i(e.$$.fragment, t), (w = w.filter(Boolean));
			for (let e = 0; e < w.length; e += 1) i(w[e]);
			x = !1;
		},
		d(t) {
			f(e, t), t && m(s), h(w, t), t && m(u);
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
