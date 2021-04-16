import {
	S as t,
	i as e,
	s,
	k as l,
	f as n,
	w as a,
	p as r,
	q as c,
	r as o,
	x as i,
	y as f,
	C as $,
	D as g,
	d as m,
	e as p,
	j as h,
	c as d,
	a as u,
	l as v,
	o as x,
	I as _,
	g as b,
	J as z,
	X as I
} from './index-d91e1ed8.js';
import { B as w } from './Grid.svelte-1020bc4e.js';
import { L as E, a as H } from './ListItem-9aa7bd94.js';
import { I as j } from './Img-4f632789.js';
function y(t, e, s) {
	const l = t.slice();
	return (l[4] = e[s]), l;
}
function D(t, e, s) {
	const l = t.slice();
	return (l[4] = e[s]), l;
}
function L(t) {
	let e, s, l, $, g;
	return (
		(s = new w({ props: { variante: 8, text: t[4].title } })),
		s.$on('click', function () {
			I(t[3](t[4].id)) && t[3](t[4].id).apply(this, arguments);
		}),
		{
			c() {
				(e = p('span')), r(s.$$.fragment), ($ = h()), this.h();
			},
			l(t) {
				e = d(t, 'SPAN', { class: !0 });
				var l = u(e);
				c(s.$$.fragment, l), l.forEach(m), ($ = v(t)), this.h();
			},
			h() {
				x(e, 'class', (l = _(t[2] === t[4].id ? 'active' : '') + ' svelte-82coz0'));
			},
			m(t, l) {
				n(t, e, l), o(s, e, null), n(t, $, l), (g = !0);
			},
			p(n, a) {
				t = n;
				const r = {};
				2 & a && (r.text = t[4].title),
					s.$set(r),
					(!g || (6 & a && l !== (l = _(t[2] === t[4].id ? 'active' : '') + ' svelte-82coz0'))) &&
						x(e, 'class', l);
			},
			i(t) {
				g || (a(s.$$.fragment, t), (g = !0));
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
function V(t) {
	let e, s;
	return (
		(e = new H({ props: { tipo: 1, $$slots: { default: [L] }, $$scope: { ctx: t } } })),
		{
			c() {
				r(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, l) {
				o(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				518 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
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
function B(t) {
	let e,
		s,
		r = t[1],
		c = [];
	for (let l = 0; l < r.length; l += 1) c[l] = V(D(t, r, l));
	const o = (t) =>
		i(c[t], 1, 1, () => {
			c[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < c.length; t += 1) c[t].c();
			e = l();
		},
		l(t) {
			for (let e = 0; e < c.length; e += 1) c[e].l(t);
			e = l();
		},
		m(t, l) {
			for (let e = 0; e < c.length; e += 1) c[e].m(t, l);
			n(t, e, l), (s = !0);
		},
		p(t, s) {
			if (14 & s) {
				let l;
				for (r = t[1], l = 0; l < r.length; l += 1) {
					const n = D(t, r, l);
					c[l]
						? (c[l].p(n, s), a(c[l], 1))
						: ((c[l] = V(n)), c[l].c(), a(c[l], 1), c[l].m(e.parentNode, e));
				}
				for ($(), l = r.length; l < c.length; l += 1) o(l);
				g();
			}
		},
		i(t) {
			if (!s) {
				for (let t = 0; t < r.length; t += 1) a(c[t]);
				s = !0;
			}
		},
		o(t) {
			c = c.filter(Boolean);
			for (let e = 0; e < c.length; e += 1) i(c[e]);
			s = !1;
		},
		d(t) {
			z(c, t), t && m(e);
		}
	};
}
function N(t) {
	let e, s;
	return (
		(e = new E({
			props: { tipo: 5, variante: 7, $$slots: { default: [T] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				r(e.$$.fragment);
			},
			l(t) {
				c(e.$$.fragment, t);
			},
			m(t, l) {
				o(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				514 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
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
		l,
		$,
		g,
		_,
		z,
		I,
		w = t[4].content + '';
	return (
		(l = new j({ props: { variante: 5, src: t[4].img, alt: t[4].subtitle } })),
		{
			c() {
				(e = p('div')),
					(s = p('div')),
					r(l.$$.fragment),
					($ = h()),
					(g = p('div')),
					(_ = p('p')),
					(z = h()),
					this.h();
			},
			l(t) {
				e = d(t, 'DIV', { class: !0 });
				var n = u(e);
				s = d(n, 'DIV', { class: !0 });
				var a = u(s);
				c(l.$$.fragment, a), a.forEach(m), ($ = v(n)), (g = d(n, 'DIV', { class: !0 }));
				var r = u(g);
				(_ = d(r, 'P', { class: !0 })),
					u(_).forEach(m),
					r.forEach(m),
					n.forEach(m),
					(z = v(t)),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 col_s2_5 svelte-82coz0'),
					x(_, 'class', 'svelte-82coz0'),
					x(g, 'class', 'col_13 col_s2_8 svelte-82coz0'),
					x(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-82coz0');
			},
			m(t, a) {
				n(t, e, a),
					b(e, s),
					o(l, s, null),
					b(e, $),
					b(e, g),
					b(g, _),
					(_.innerHTML = w),
					n(t, z, a),
					(I = !0);
			},
			p(t, e) {
				const s = {};
				2 & e && (s.src = t[4].img),
					2 & e && (s.alt = t[4].subtitle),
					l.$set(s),
					(!I || 2 & e) && w !== (w = t[4].content + '') && (_.innerHTML = w);
			},
			i(t) {
				I || (a(l.$$.fragment, t), (I = !0));
			},
			o(t) {
				i(l.$$.fragment, t), (I = !1);
			},
			d(t) {
				t && m(e), f(l), t && m(z);
			}
		}
	);
}
function k(t) {
	let e,
		s,
		r = t[2] == t[4].id && N(t);
	return {
		c() {
			r && r.c(), (e = l());
		},
		l(t) {
			r && r.l(t), (e = l());
		},
		m(t, l) {
			r && r.m(t, l), n(t, e, l), (s = !0);
		},
		p(t, s) {
			t[2] == t[4].id
				? r
					? (r.p(t, s), 6 & s && a(r, 1))
					: ((r = N(t)), r.c(), a(r, 1), r.m(e.parentNode, e))
				: r &&
				  ($(),
				  i(r, 1, 1, () => {
						r = null;
				  }),
				  g());
		},
		i(t) {
			s || (a(r), (s = !0));
		},
		o(t) {
			i(r), (s = !1);
		},
		d(t) {
			r && r.d(t), t && m(e);
		}
	};
}
function M(t) {
	let e, s, l, I, w;
	s = new E({ props: { tipo: 3, variante: 3, $$slots: { default: [B] }, $$scope: { ctx: t } } });
	let H = t[1],
		j = [];
	for (let n = 0; n < H.length; n += 1) j[n] = k(y(t, H, n));
	const D = (t) =>
		i(j[t], 1, 1, () => {
			j[t] = null;
		});
	return {
		c() {
			(e = p('div')), r(s.$$.fragment), (l = h());
			for (let t = 0; t < j.length; t += 1) j[t].c();
			this.h();
		},
		l(t) {
			e = d(t, 'DIV', { class: !0 });
			var n = u(e);
			c(s.$$.fragment, n), (l = v(n));
			for (let e = 0; e < j.length; e += 1) j[e].l(n);
			n.forEach(m), this.h();
		},
		h() {
			x(e, 'class', (I = _(t[0]) + ' svelte-82coz0'));
		},
		m(t, a) {
			n(t, e, a), o(s, e, null), b(e, l);
			for (let s = 0; s < j.length; s += 1) j[s].m(e, null);
			w = !0;
		},
		p(t, [l]) {
			const n = {};
			if ((518 & l && (n.$$scope = { dirty: l, ctx: t }), s.$set(n), 6 & l)) {
				let s;
				for (H = t[1], s = 0; s < H.length; s += 1) {
					const n = y(t, H, s);
					j[s]
						? (j[s].p(n, l), a(j[s], 1))
						: ((j[s] = k(n)), j[s].c(), a(j[s], 1), j[s].m(e, null));
				}
				for ($(), s = H.length; s < j.length; s += 1) D(s);
				g();
			}
			(!w || (1 & l && I !== (I = _(t[0]) + ' svelte-82coz0'))) && x(e, 'class', I);
		},
		i(t) {
			if (!w) {
				a(s.$$.fragment, t);
				for (let t = 0; t < H.length; t += 1) a(j[t]);
				w = !0;
			}
		},
		o(t) {
			i(s.$$.fragment, t), (j = j.filter(Boolean));
			for (let e = 0; e < j.length; e += 1) i(j[e]);
			w = !1;
		},
		d(t) {
			t && m(e), f(s), z(j, t);
		}
	};
}
function P(t, e, s) {
	let { clases: l = '' } = e,
		{ tabHeaders: n = [] } = e,
		a = 1;
	return (
		(t.$$set = (t) => {
			'clases' in t && s(0, (l = t.clases)), 'tabHeaders' in t && s(1, (n = t.tabHeaders));
		}),
		[l, n, a, (t) => () => s(2, (a = t))]
	);
}
class S extends t {
	constructor(t) {
		super(), e(this, t, P, M, s, { clases: 0, tabHeaders: 1 });
	}
}
export { S as T };
