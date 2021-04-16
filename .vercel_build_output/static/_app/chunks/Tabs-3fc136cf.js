import {
	S as t,
	i as e,
	s,
	k as n,
	f as l,
	w as a,
	p as r,
	q as o,
	r as c,
	x as i,
	y as f,
	C as $,
	D as h,
	d as g,
	j as m,
	l as p,
	J as d,
	e as u,
	c as v,
	a as x,
	o as y,
	g as _,
	X as b,
	I
} from './index-d91e1ed8.js';
import { B as w } from './Grid.svelte-ab8cbe1f.js';
import { L as H, a as j } from './ListItem-dc89416a.js';
import { I as E } from './Img-76e74fb8.js';
function D(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function L(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function N(t) {
	let e, s, n, $, h;
	return (
		(s = new w({ props: { variante: 8, text: t[3].title } })),
		s.$on('click', function () {
			b(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = u('span')), r(s.$$.fragment), ($ = m()), this.h();
			},
			l(t) {
				e = v(t, 'SPAN', { class: !0 });
				var n = x(e);
				o(s.$$.fragment, n), n.forEach(g), ($ = p(t)), this.h();
			},
			h() {
				y(e, 'class', (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-4hhy35'));
			},
			m(t, n) {
				l(t, e, n), c(s, e, null), l(t, $, n), (h = !0);
			},
			p(l, a) {
				t = l;
				const r = {};
				1 & a && (r.text = t[3].title),
					s.$set(r),
					(!h || (3 & a && n !== (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-4hhy35'))) &&
						y(e, 'class', n);
			},
			i(t) {
				h || (a(s.$$.fragment, t), (h = !0));
			},
			o(t) {
				i(s.$$.fragment, t), (h = !1);
			},
			d(t) {
				t && g(e), f(s), t && g($);
			}
		}
	);
}
function B(t) {
	let e, s;
	return (
		(e = new j({ props: { tipo: 1, $$slots: { default: [N] }, $$scope: { ctx: t } } })),
		{
			c() {
				r(e.$$.fragment);
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
				s || (a(e.$$.fragment, t), (s = !0));
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
		r = t[0],
		o = [];
	for (let n = 0; n < r.length; n += 1) o[n] = B(L(t, r, n));
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
				for (r = t[0], n = 0; n < r.length; n += 1) {
					const l = L(t, r, n);
					o[n]
						? (o[n].p(l, s), a(o[n], 1))
						: ((o[n] = B(l)), o[n].c(), a(o[n], 1), o[n].m(e.parentNode, e));
				}
				for ($(), n = r.length; n < o.length; n += 1) c(n);
				h();
			}
		},
		i(t) {
			if (!s) {
				for (let t = 0; t < r.length; t += 1) a(o[t]);
				s = !0;
			}
		},
		o(t) {
			o = o.filter(Boolean);
			for (let e = 0; e < o.length; e += 1) i(o[e]);
			s = !1;
		},
		d(t) {
			d(o, t), t && g(e);
		}
	};
}
function V(t) {
	let e, s;
	return (
		(e = new H({
			props: { tipo: 5, variante: 7, $$slots: { default: [k] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				r(e.$$.fragment);
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
				s || (a(e.$$.fragment, t), (s = !0));
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
		h,
		d,
		b,
		I,
		w = t[3].content + '';
	return (
		(n = new E({ props: { variante: 5, src: t[3].img, alt: t[3].subtitle } })),
		{
			c() {
				(e = u('div')),
					(s = u('div')),
					r(n.$$.fragment),
					($ = m()),
					(h = u('div')),
					(d = u('p')),
					(b = m()),
					this.h();
			},
			l(t) {
				e = v(t, 'DIV', { class: !0 });
				var l = x(e);
				s = v(l, 'DIV', { class: !0 });
				var a = x(s);
				o(n.$$.fragment, a), a.forEach(g), ($ = p(l)), (h = v(l, 'DIV', { class: !0 }));
				var r = x(h);
				(d = v(r, 'P', { class: !0 })),
					x(d).forEach(g),
					r.forEach(g),
					l.forEach(g),
					(b = p(t)),
					this.h();
			},
			h() {
				y(s, 'class', 'col_13 col_s2_5 svelte-4hhy35'),
					y(d, 'class', 'svelte-4hhy35'),
					y(h, 'class', 'col_13 col_s2_8 svelte-4hhy35'),
					y(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-4hhy35');
			},
			m(t, a) {
				l(t, e, a),
					_(e, s),
					c(n, s, null),
					_(e, $),
					_(e, h),
					_(h, d),
					(d.innerHTML = w),
					l(t, b, a),
					(I = !0);
			},
			p(t, e) {
				const s = {};
				1 & e && (s.src = t[3].img),
					1 & e && (s.alt = t[3].subtitle),
					n.$set(s),
					(!I || 1 & e) && w !== (w = t[3].content + '') && (d.innerHTML = w);
			},
			i(t) {
				I || (a(n.$$.fragment, t), (I = !0));
			},
			o(t) {
				i(n.$$.fragment, t), (I = !1);
			},
			d(t) {
				t && g(e), f(n), t && g(b);
			}
		}
	);
}
function M(t) {
	let e,
		s,
		r = t[1] == t[3].id && V(t);
	return {
		c() {
			r && r.c(), (e = n());
		},
		l(t) {
			r && r.l(t), (e = n());
		},
		m(t, n) {
			r && r.m(t, n), l(t, e, n), (s = !0);
		},
		p(t, s) {
			t[1] == t[3].id
				? r
					? (r.p(t, s), 3 & s && a(r, 1))
					: ((r = V(t)), r.c(), a(r, 1), r.m(e.parentNode, e))
				: r &&
				  ($(),
				  i(r, 1, 1, () => {
						r = null;
				  }),
				  h());
		},
		i(t) {
			s || (a(r), (s = !0));
		},
		o(t) {
			i(r), (s = !1);
		},
		d(t) {
			r && r.d(t), t && g(e);
		}
	};
}
function P(t) {
	let e, s, u, v;
	e = new H({ props: { tipo: 3, variante: 3, $$slots: { default: [T] }, $$scope: { ctx: t } } });
	let x = t[0],
		y = [];
	for (let n = 0; n < x.length; n += 1) y[n] = M(D(t, x, n));
	const _ = (t) =>
		i(y[t], 1, 1, () => {
			y[t] = null;
		});
	return {
		c() {
			r(e.$$.fragment), (s = m());
			for (let t = 0; t < y.length; t += 1) y[t].c();
			u = n();
		},
		l(t) {
			o(e.$$.fragment, t), (s = p(t));
			for (let e = 0; e < y.length; e += 1) y[e].l(t);
			u = n();
		},
		m(t, n) {
			c(e, t, n), l(t, s, n);
			for (let e = 0; e < y.length; e += 1) y[e].m(t, n);
			l(t, u, n), (v = !0);
		},
		p(t, [s]) {
			const n = {};
			if ((259 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n), 3 & s)) {
				let e;
				for (x = t[0], e = 0; e < x.length; e += 1) {
					const n = D(t, x, e);
					y[e]
						? (y[e].p(n, s), a(y[e], 1))
						: ((y[e] = M(n)), y[e].c(), a(y[e], 1), y[e].m(u.parentNode, u));
				}
				for ($(), e = x.length; e < y.length; e += 1) _(e);
				h();
			}
		},
		i(t) {
			if (!v) {
				a(e.$$.fragment, t);
				for (let t = 0; t < x.length; t += 1) a(y[t]);
				v = !0;
			}
		},
		o(t) {
			i(e.$$.fragment, t), (y = y.filter(Boolean));
			for (let e = 0; e < y.length; e += 1) i(y[e]);
			v = !1;
		},
		d(t) {
			f(e, t), t && g(s), d(y, t), t && g(u);
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
