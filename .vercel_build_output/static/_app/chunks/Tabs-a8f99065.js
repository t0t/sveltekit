import {
	S as t,
	i as e,
	s,
	k as l,
	f as n,
	w as a,
	p as r,
	q as o,
	r as c,
	x as i,
	y as f,
	C as $,
	D as u,
	d as g,
	e as m,
	j as p,
	c as h,
	a as d,
	l as v,
	o as x,
	I as _,
	g as q,
	J as I,
	X as b
} from './index-d91e1ed8.js';
import { B as w } from './Grid.svelte-60585820.js';
import { L as E, a as H } from './ListItem-196d07d7.js';
import { I as j } from './Img-674f19a2.js';
function y(t, e, s) {
	const l = t.slice();
	return (l[4] = e[s]), l;
}
function D(t, e, s) {
	const l = t.slice();
	return (l[4] = e[s]), l;
}
function L(t) {
	let e, s, l, $, u;
	return (
		(s = new w({ props: { variante: 8, text: t[4].title } })),
		s.$on('click', function () {
			b(t[3](t[4].id)) && t[3](t[4].id).apply(this, arguments);
		}),
		{
			c() {
				(e = m('span')), r(s.$$.fragment), ($ = p()), this.h();
			},
			l(t) {
				e = h(t, 'SPAN', { class: !0 });
				var l = d(e);
				o(s.$$.fragment, l), l.forEach(g), ($ = v(t)), this.h();
			},
			h() {
				x(e, 'class', (l = _(t[2] === t[4].id ? 'active' : '') + ' svelte-xlu5uq'));
			},
			m(t, l) {
				n(t, e, l), c(s, e, null), n(t, $, l), (u = !0);
			},
			p(n, a) {
				t = n;
				const r = {};
				2 & a && (r.text = t[4].title),
					s.$set(r),
					(!u || (6 & a && l !== (l = _(t[2] === t[4].id ? 'active' : '') + ' svelte-xlu5uq'))) &&
						x(e, 'class', l);
			},
			i(t) {
				u || (a(s.$$.fragment, t), (u = !0));
			},
			o(t) {
				i(s.$$.fragment, t), (u = !1);
			},
			d(t) {
				t && g(e), f(s), t && g($);
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
				o(e.$$.fragment, t);
			},
			m(t, l) {
				c(e, t, l), (s = !0);
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
		o = [];
	for (let l = 0; l < r.length; l += 1) o[l] = V(D(t, r, l));
	const c = (t) =>
		i(o[t], 1, 1, () => {
			o[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < o.length; t += 1) o[t].c();
			e = l();
		},
		l(t) {
			for (let e = 0; e < o.length; e += 1) o[e].l(t);
			e = l();
		},
		m(t, l) {
			for (let e = 0; e < o.length; e += 1) o[e].m(t, l);
			n(t, e, l), (s = !0);
		},
		p(t, s) {
			if (14 & s) {
				let l;
				for (r = t[1], l = 0; l < r.length; l += 1) {
					const n = D(t, r, l);
					o[l]
						? (o[l].p(n, s), a(o[l], 1))
						: ((o[l] = V(n)), o[l].c(), a(o[l], 1), o[l].m(e.parentNode, e));
				}
				for ($(), l = r.length; l < o.length; l += 1) c(l);
				u();
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
			I(o, t), t && g(e);
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
				o(e.$$.fragment, t);
			},
			m(t, l) {
				c(e, t, l), (s = !0);
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
		u,
		_,
		I,
		b,
		w = t[4].content + '';
	return (
		(l = new j({ props: { variante: 5, src: t[4].img, alt: t[4].subtitle } })),
		{
			c() {
				(e = m('div')),
					(s = m('div')),
					r(l.$$.fragment),
					($ = p()),
					(u = m('div')),
					(_ = m('p')),
					(I = p()),
					this.h();
			},
			l(t) {
				e = h(t, 'DIV', { class: !0 });
				var n = d(e);
				s = h(n, 'DIV', { class: !0 });
				var a = d(s);
				o(l.$$.fragment, a), a.forEach(g), ($ = v(n)), (u = h(n, 'DIV', { class: !0 }));
				var r = d(u);
				(_ = h(r, 'P', { class: !0 })),
					d(_).forEach(g),
					r.forEach(g),
					n.forEach(g),
					(I = v(t)),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 col_s2_5 svelte-xlu5uq'),
					x(_, 'class', 'svelte-xlu5uq'),
					x(u, 'class', 'col_13 col_s2_8 svelte-xlu5uq'),
					x(e, 'class', 'dg cg_s2_1 p_2 bgc_0 c_5 svelte-xlu5uq');
			},
			m(t, a) {
				n(t, e, a),
					q(e, s),
					c(l, s, null),
					q(e, $),
					q(e, u),
					q(u, _),
					(_.innerHTML = w),
					n(t, I, a),
					(b = !0);
			},
			p(t, e) {
				const s = {};
				2 & e && (s.src = t[4].img),
					2 & e && (s.alt = t[4].subtitle),
					l.$set(s),
					(!b || 2 & e) && w !== (w = t[4].content + '') && (_.innerHTML = w);
			},
			i(t) {
				b || (a(l.$$.fragment, t), (b = !0));
			},
			o(t) {
				i(l.$$.fragment, t), (b = !1);
			},
			d(t) {
				t && g(e), f(l), t && g(I);
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
				  u());
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
function M(t) {
	let e, s, l, b, w;
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
			(e = m('div')), r(s.$$.fragment), (l = p());
			for (let t = 0; t < j.length; t += 1) j[t].c();
			this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var n = d(e);
			o(s.$$.fragment, n), (l = v(n));
			for (let e = 0; e < j.length; e += 1) j[e].l(n);
			n.forEach(g), this.h();
		},
		h() {
			x(e, 'class', (b = _(t[0]) + ' svelte-xlu5uq'));
		},
		m(t, a) {
			n(t, e, a), c(s, e, null), q(e, l);
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
				u();
			}
			(!w || (1 & l && b !== (b = _(t[0]) + ' svelte-xlu5uq'))) && x(e, 'class', b);
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
			t && g(e), f(s), I(j, t);
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
