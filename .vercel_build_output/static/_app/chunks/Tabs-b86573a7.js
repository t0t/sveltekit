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
	l as h,
	J as d,
	e as u,
	c as v,
	a as x,
	o as _,
	g as k,
	X as b,
	I
} from './index-d91e1ed8.js';
import { B as w } from './Grid.svelte-e568fec9.js';
import { L as H, a as j } from './ListItem-ea6efde4.js';
import { I as y } from './Img-d7035d09.js';
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
		(s = new w({ props: { variante: 8, text: t[3].title } })),
		s.$on('click', function () {
			b(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = u('span')), a(s.$$.fragment), ($ = p()), this.h();
			},
			l(t) {
				e = v(t, 'SPAN', { class: !0 });
				var n = x(e);
				o(s.$$.fragment, n), n.forEach(m), ($ = h(t)), this.h();
			},
			h() {
				_(e, 'class', (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-h9klgs'));
			},
			m(t, n) {
				l(t, e, n), c(s, e, null), l(t, $, n), (g = !0);
			},
			p(l, r) {
				t = l;
				const a = {};
				1 & r && (a.text = t[3].title),
					s.$set(a),
					(!g || (3 & r && n !== (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-h9klgs'))) &&
						_(e, 'class', n);
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
function N(t) {
	let e, s;
	return (
		(e = new j({ props: { tipo: 1, $$slots: { default: [L] }, $$scope: { ctx: t } } })),
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
			d(o, t), t && m(e);
		}
	};
}
function T(t) {
	let e, s;
	return (
		(e = new H({
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
		d,
		b,
		I,
		w = t[3].content + '';
	return (
		(n = new y({ props: { variante: 5, src: t[3].img, alt: t[3].subtitle } })),
		{
			c() {
				(e = u('div')),
					(s = u('div')),
					a(n.$$.fragment),
					($ = p()),
					(g = u('div')),
					(d = u('p')),
					(b = p()),
					this.h();
			},
			l(t) {
				e = v(t, 'DIV', { class: !0 });
				var l = x(e);
				s = v(l, 'DIV', { class: !0 });
				var r = x(s);
				o(n.$$.fragment, r), r.forEach(m), ($ = h(l)), (g = v(l, 'DIV', { class: !0 }));
				var a = x(g);
				(d = v(a, 'P', { class: !0 })),
					x(d).forEach(m),
					a.forEach(m),
					l.forEach(m),
					(b = h(t)),
					this.h();
			},
			h() {
				_(s, 'class', 'col_13 col_s2_5 svelte-h9klgs'),
					_(d, 'class', 'svelte-h9klgs'),
					_(g, 'class', 'col_13 col_s2_8 svelte-h9klgs'),
					_(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-h9klgs');
			},
			m(t, r) {
				l(t, e, r),
					k(e, s),
					c(n, s, null),
					k(e, $),
					k(e, g),
					k(g, d),
					(d.innerHTML = w),
					l(t, b, r),
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
			a && a.d(t), t && m(e);
		}
	};
}
function P(t) {
	let e, s, u, v;
	e = new H({ props: { tipo: 3, variante: 3, $$slots: { default: [B] }, $$scope: { ctx: t } } });
	let x = t[0],
		_ = [];
	for (let n = 0; n < x.length; n += 1) _[n] = M(E(t, x, n));
	const k = (t) =>
		i(_[t], 1, 1, () => {
			_[t] = null;
		});
	return {
		c() {
			a(e.$$.fragment), (s = p());
			for (let t = 0; t < _.length; t += 1) _[t].c();
			u = n();
		},
		l(t) {
			o(e.$$.fragment, t), (s = h(t));
			for (let e = 0; e < _.length; e += 1) _[e].l(t);
			u = n();
		},
		m(t, n) {
			c(e, t, n), l(t, s, n);
			for (let e = 0; e < _.length; e += 1) _[e].m(t, n);
			l(t, u, n), (v = !0);
		},
		p(t, [s]) {
			const n = {};
			if ((259 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n), 3 & s)) {
				let e;
				for (x = t[0], e = 0; e < x.length; e += 1) {
					const n = E(t, x, e);
					_[e]
						? (_[e].p(n, s), r(_[e], 1))
						: ((_[e] = M(n)), _[e].c(), r(_[e], 1), _[e].m(u.parentNode, u));
				}
				for ($(), e = x.length; e < _.length; e += 1) k(e);
				g();
			}
		},
		i(t) {
			if (!v) {
				r(e.$$.fragment, t);
				for (let t = 0; t < x.length; t += 1) r(_[t]);
				v = !0;
			}
		},
		o(t) {
			i(e.$$.fragment, t), (_ = _.filter(Boolean));
			for (let e = 0; e < _.length; e += 1) i(_[e]);
			v = !1;
		},
		d(t) {
			f(e, t), t && m(s), d(_, t), t && m(u);
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
