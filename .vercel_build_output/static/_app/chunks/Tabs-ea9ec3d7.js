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
	x as f,
	y as i,
	C as $,
	D as p,
	d as g,
	j as m,
	l as d,
	J as h,
	e as u,
	c as v,
	a as y,
	o as x,
	g as _,
	X as b,
	I
} from './index-d91e1ed8.js';
import { B as w } from './Grid.svelte-f6369e02.js';
import { L as H, a as j } from './ListItem-50336afd.js';
import { I as E } from './Img-4bbf7ce3.js';
function D(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function L(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function N(t) {
	let e, s, n, $, p;
	return (
		(s = new w({ props: { variante: 8, text: t[3].title } })),
		s.$on('click', function () {
			b(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = u('span')), a(s.$$.fragment), ($ = m()), this.h();
			},
			l(t) {
				e = v(t, 'SPAN', { class: !0 });
				var n = y(e);
				o(s.$$.fragment, n), n.forEach(g), ($ = d(t)), this.h();
			},
			h() {
				x(e, 'class', (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-1fypey7'));
			},
			m(t, n) {
				l(t, e, n), c(s, e, null), l(t, $, n), (p = !0);
			},
			p(l, r) {
				t = l;
				const a = {};
				1 & r && (a.text = t[3].title),
					s.$set(a),
					(!p || (3 & r && n !== (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-1fypey7'))) &&
						x(e, 'class', n);
			},
			i(t) {
				p || (r(s.$$.fragment, t), (p = !0));
			},
			o(t) {
				f(s.$$.fragment, t), (p = !1);
			},
			d(t) {
				t && g(e), i(s), t && g($);
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
				f(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				i(e, t);
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
		f(o[t], 1, 1, () => {
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
				p();
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
			for (let e = 0; e < o.length; e += 1) f(o[e]);
			s = !1;
		},
		d(t) {
			h(o, t), t && g(e);
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
				f(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				i(e, t);
			}
		}
	);
}
function k(t) {
	let e,
		s,
		n,
		$,
		p,
		h,
		b,
		I,
		w = t[3].content + '';
	return (
		(n = new E({ props: { variante: 5, src: t[3].img, alt: t[3].subtitle } })),
		{
			c() {
				(e = u('div')),
					(s = u('div')),
					a(n.$$.fragment),
					($ = m()),
					(p = u('div')),
					(h = u('p')),
					(b = m()),
					this.h();
			},
			l(t) {
				e = v(t, 'DIV', { class: !0 });
				var l = y(e);
				s = v(l, 'DIV', { class: !0 });
				var r = y(s);
				o(n.$$.fragment, r), r.forEach(g), ($ = d(l)), (p = v(l, 'DIV', { class: !0 }));
				var a = y(p);
				(h = v(a, 'P', { class: !0 })),
					y(h).forEach(g),
					a.forEach(g),
					l.forEach(g),
					(b = d(t)),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 col_s2_5 svelte-1fypey7'),
					x(h, 'class', 'svelte-1fypey7'),
					x(p, 'class', 'col_13 col_s2_8 svelte-1fypey7'),
					x(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-1fypey7');
			},
			m(t, r) {
				l(t, e, r),
					_(e, s),
					c(n, s, null),
					_(e, $),
					_(e, p),
					_(p, h),
					(h.innerHTML = w),
					l(t, b, r),
					(I = !0);
			},
			p(t, e) {
				const s = {};
				1 & e && (s.src = t[3].img),
					1 & e && (s.alt = t[3].subtitle),
					n.$set(s),
					(!I || 1 & e) && w !== (w = t[3].content + '') && (h.innerHTML = w);
			},
			i(t) {
				I || (r(n.$$.fragment, t), (I = !0));
			},
			o(t) {
				f(n.$$.fragment, t), (I = !1);
			},
			d(t) {
				t && g(e), i(n), t && g(b);
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
				  f(a, 1, 1, () => {
						a = null;
				  }),
				  p());
		},
		i(t) {
			s || (r(a), (s = !0));
		},
		o(t) {
			f(a), (s = !1);
		},
		d(t) {
			a && a.d(t), t && g(e);
		}
	};
}
function P(t) {
	let e, s, u, v;
	e = new H({ props: { tipo: 3, variante: 3, $$slots: { default: [T] }, $$scope: { ctx: t } } });
	let y = t[0],
		x = [];
	for (let n = 0; n < y.length; n += 1) x[n] = M(D(t, y, n));
	const _ = (t) =>
		f(x[t], 1, 1, () => {
			x[t] = null;
		});
	return {
		c() {
			a(e.$$.fragment), (s = m());
			for (let t = 0; t < x.length; t += 1) x[t].c();
			u = n();
		},
		l(t) {
			o(e.$$.fragment, t), (s = d(t));
			for (let e = 0; e < x.length; e += 1) x[e].l(t);
			u = n();
		},
		m(t, n) {
			c(e, t, n), l(t, s, n);
			for (let e = 0; e < x.length; e += 1) x[e].m(t, n);
			l(t, u, n), (v = !0);
		},
		p(t, [s]) {
			const n = {};
			if ((259 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n), 3 & s)) {
				let e;
				for (y = t[0], e = 0; e < y.length; e += 1) {
					const n = D(t, y, e);
					x[e]
						? (x[e].p(n, s), r(x[e], 1))
						: ((x[e] = M(n)), x[e].c(), r(x[e], 1), x[e].m(u.parentNode, u));
				}
				for ($(), e = y.length; e < x.length; e += 1) _(e);
				p();
			}
		},
		i(t) {
			if (!v) {
				r(e.$$.fragment, t);
				for (let t = 0; t < y.length; t += 1) r(x[t]);
				v = !0;
			}
		},
		o(t) {
			f(e.$$.fragment, t), (x = x.filter(Boolean));
			for (let e = 0; e < x.length; e += 1) f(x[e]);
			v = !1;
		},
		d(t) {
			i(e, t), t && g(s), h(x, t), t && g(u);
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
