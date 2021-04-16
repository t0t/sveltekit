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
	D as m,
	d,
	j as g,
	l as p,
	J as h,
	e as u,
	c as v,
	a as x,
	o as _,
	g as b,
	X as k,
	I
} from './index-d91e1ed8.js';
import { B as w } from './Grid.svelte-1b56dd60.js';
import { L as z, a as H } from './ListItem-13a8e652.js';
import { I as j } from './Img-1aaa5537.js';
function y(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function E(t, e, s) {
	const n = t.slice();
	return (n[3] = e[s]), n;
}
function D(t) {
	let e, s, n, $, m;
	return (
		(s = new w({ props: { variante: 8, text: t[3].title } })),
		s.$on('click', function () {
			k(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = u('span')), r(s.$$.fragment), ($ = g()), this.h();
			},
			l(t) {
				e = v(t, 'SPAN', { class: !0 });
				var n = x(e);
				o(s.$$.fragment, n), n.forEach(d), ($ = p(t)), this.h();
			},
			h() {
				_(e, 'class', (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-kdlzm0'));
			},
			m(t, n) {
				l(t, e, n), c(s, e, null), l(t, $, n), (m = !0);
			},
			p(l, a) {
				t = l;
				const r = {};
				1 & a && (r.text = t[3].title),
					s.$set(r),
					(!m || (3 & a && n !== (n = I(t[1] === t[3].id ? 'active' : '') + ' svelte-kdlzm0'))) &&
						_(e, 'class', n);
			},
			i(t) {
				m || (a(s.$$.fragment, t), (m = !0));
			},
			o(t) {
				i(s.$$.fragment, t), (m = !1);
			},
			d(t) {
				t && d(e), f(s), t && d($);
			}
		}
	);
}
function L(t) {
	let e, s;
	return (
		(e = new H({ props: { tipo: 1, $$slots: { default: [D] }, $$scope: { ctx: t } } })),
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
function N(t) {
	let e,
		s,
		r = t[0],
		o = [];
	for (let n = 0; n < r.length; n += 1) o[n] = L(E(t, r, n));
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
					const l = E(t, r, n);
					o[n]
						? (o[n].p(l, s), a(o[n], 1))
						: ((o[n] = L(l)), o[n].c(), a(o[n], 1), o[n].m(e.parentNode, e));
				}
				for ($(), n = r.length; n < o.length; n += 1) c(n);
				m();
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
			h(o, t), t && d(e);
		}
	};
}
function B(t) {
	let e, s;
	return (
		(e = new z({
			props: { tipo: 5, variante: 7, $$slots: { default: [T] }, $$scope: { ctx: t } }
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
function T(t) {
	let e,
		s,
		n,
		$,
		m,
		h,
		k,
		I,
		w = t[3].content + '';
	return (
		(n = new j({ props: { variante: 5, src: t[3].img, alt: t[3].subtitle } })),
		{
			c() {
				(e = u('div')),
					(s = u('div')),
					r(n.$$.fragment),
					($ = g()),
					(m = u('div')),
					(h = u('p')),
					(k = g()),
					this.h();
			},
			l(t) {
				e = v(t, 'DIV', { class: !0 });
				var l = x(e);
				s = v(l, 'DIV', { class: !0 });
				var a = x(s);
				o(n.$$.fragment, a), a.forEach(d), ($ = p(l)), (m = v(l, 'DIV', { class: !0 }));
				var r = x(m);
				(h = v(r, 'P', { class: !0 })),
					x(h).forEach(d),
					r.forEach(d),
					l.forEach(d),
					(k = p(t)),
					this.h();
			},
			h() {
				_(s, 'class', 'col_13 col_s2_5 svelte-kdlzm0'),
					_(h, 'class', 'svelte-kdlzm0'),
					_(m, 'class', 'col_13 col_s2_8 svelte-kdlzm0'),
					_(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-kdlzm0');
			},
			m(t, a) {
				l(t, e, a),
					b(e, s),
					c(n, s, null),
					b(e, $),
					b(e, m),
					b(m, h),
					(h.innerHTML = w),
					l(t, k, a),
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
				I || (a(n.$$.fragment, t), (I = !0));
			},
			o(t) {
				i(n.$$.fragment, t), (I = !1);
			},
			d(t) {
				t && d(e), f(n), t && d(k);
			}
		}
	);
}
function V(t) {
	let e,
		s,
		r = t[1] == t[3].id && B(t);
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
					: ((r = B(t)), r.c(), a(r, 1), r.m(e.parentNode, e))
				: r &&
				  ($(),
				  i(r, 1, 1, () => {
						r = null;
				  }),
				  m());
		},
		i(t) {
			s || (a(r), (s = !0));
		},
		o(t) {
			i(r), (s = !1);
		},
		d(t) {
			r && r.d(t), t && d(e);
		}
	};
}
function M(t) {
	let e, s, u, v;
	e = new z({ props: { tipo: 3, variante: 3, $$slots: { default: [N] }, $$scope: { ctx: t } } });
	let x = t[0],
		_ = [];
	for (let n = 0; n < x.length; n += 1) _[n] = V(y(t, x, n));
	const b = (t) =>
		i(_[t], 1, 1, () => {
			_[t] = null;
		});
	return {
		c() {
			r(e.$$.fragment), (s = g());
			for (let t = 0; t < _.length; t += 1) _[t].c();
			u = n();
		},
		l(t) {
			o(e.$$.fragment, t), (s = p(t));
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
					const n = y(t, x, e);
					_[e]
						? (_[e].p(n, s), a(_[e], 1))
						: ((_[e] = V(n)), _[e].c(), a(_[e], 1), _[e].m(u.parentNode, u));
				}
				for ($(), e = x.length; e < _.length; e += 1) b(e);
				m();
			}
		},
		i(t) {
			if (!v) {
				a(e.$$.fragment, t);
				for (let t = 0; t < x.length; t += 1) a(_[t]);
				v = !0;
			}
		},
		o(t) {
			i(e.$$.fragment, t), (_ = _.filter(Boolean));
			for (let e = 0; e < _.length; e += 1) i(_[e]);
			v = !1;
		},
		d(t) {
			f(e, t), t && d(s), h(_, t), t && d(u);
		}
	};
}
function P(t, e, s) {
	let { tabHeaders: n = [] } = e,
		l = 1;
	return (
		(t.$$set = (t) => {
			'tabHeaders' in t && s(0, (n = t.tabHeaders));
		}),
		[n, l, (t) => () => s(1, (l = t))]
	);
}
class S extends t {
	constructor(t) {
		super(), e(this, t, P, M, s, { tabHeaders: 0 });
	}
}
export { S as T };
