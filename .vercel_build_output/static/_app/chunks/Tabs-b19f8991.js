import {
	S as t,
	i as e,
	s as n,
	k as s,
	f as r,
	w as a,
	p as l,
	q as o,
	r as c,
	x as i,
	y as f,
	C as $,
	D as d,
	d as g,
	j as m,
	l as p,
	J as h,
	e as u,
	c as v,
	a as b,
	o as w,
	g as x,
	X as I,
	I as H
} from './index-d91e1ed8.js';
import { B as _ } from './Grid.svelte-393f5de7.js';
import { L as j, a as y } from './ListItem-df6649ee.js';
import { I as E } from './Img-01748947.js';
function D(t, e, n) {
	const s = t.slice();
	return (s[3] = e[n]), s;
}
function L(t, e, n) {
	const s = t.slice();
	return (s[3] = e[n]), s;
}
function N(t) {
	let e, n, s, $, d;
	return (
		(n = new _({ props: { variante: 8, text: t[3].title } })),
		n.$on('click', function () {
			I(t[2](t[3].id)) && t[2](t[3].id).apply(this, arguments);
		}),
		{
			c() {
				(e = u('span')), l(n.$$.fragment), ($ = m()), this.h();
			},
			l(t) {
				e = v(t, 'SPAN', { class: !0 });
				var s = b(e);
				o(n.$$.fragment, s), s.forEach(g), ($ = p(t)), this.h();
			},
			h() {
				w(e, 'class', (s = H(t[1] === t[3].id ? 'active' : '') + ' svelte-17bwind'));
			},
			m(t, s) {
				r(t, e, s), c(n, e, null), r(t, $, s), (d = !0);
			},
			p(r, a) {
				t = r;
				const l = {};
				1 & a && (l.text = t[3].title),
					n.$set(l),
					(!d || (3 & a && s !== (s = H(t[1] === t[3].id ? 'active' : '') + ' svelte-17bwind'))) &&
						w(e, 'class', s);
			},
			i(t) {
				d || (a(n.$$.fragment, t), (d = !0));
			},
			o(t) {
				i(n.$$.fragment, t), (d = !1);
			},
			d(t) {
				t && g(e), f(n), t && g($);
			}
		}
	);
}
function B(t) {
	let e, n;
	return (
		(e = new y({ props: { tipo: 1, $$slots: { default: [N] }, $$scope: { ctx: t } } })),
		{
			c() {
				l(e.$$.fragment);
			},
			l(t) {
				o(e.$$.fragment, t);
			},
			m(t, s) {
				c(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				259 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (a(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				i(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				f(e, t);
			}
		}
	);
}
function T(t) {
	let e,
		n,
		l = t[0],
		o = [];
	for (let s = 0; s < l.length; s += 1) o[s] = B(L(t, l, s));
	const c = (t) =>
		i(o[t], 1, 1, () => {
			o[t] = null;
		});
	return {
		c() {
			for (let t = 0; t < o.length; t += 1) o[t].c();
			e = s();
		},
		l(t) {
			for (let e = 0; e < o.length; e += 1) o[e].l(t);
			e = s();
		},
		m(t, s) {
			for (let e = 0; e < o.length; e += 1) o[e].m(t, s);
			r(t, e, s), (n = !0);
		},
		p(t, n) {
			if (7 & n) {
				let s;
				for (l = t[0], s = 0; s < l.length; s += 1) {
					const r = L(t, l, s);
					o[s]
						? (o[s].p(r, n), a(o[s], 1))
						: ((o[s] = B(r)), o[s].c(), a(o[s], 1), o[s].m(e.parentNode, e));
				}
				for ($(), s = l.length; s < o.length; s += 1) c(s);
				d();
			}
		},
		i(t) {
			if (!n) {
				for (let t = 0; t < l.length; t += 1) a(o[t]);
				n = !0;
			}
		},
		o(t) {
			o = o.filter(Boolean);
			for (let e = 0; e < o.length; e += 1) i(o[e]);
			n = !1;
		},
		d(t) {
			h(o, t), t && g(e);
		}
	};
}
function V(t) {
	let e, n;
	return (
		(e = new j({
			props: { tipo: 5, variante: 7, $$slots: { default: [k] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				l(e.$$.fragment);
			},
			l(t) {
				o(e.$$.fragment, t);
			},
			m(t, s) {
				c(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				257 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (a(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				i(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				f(e, t);
			}
		}
	);
}
function k(t) {
	let e,
		n,
		s,
		$,
		d,
		h,
		I,
		H,
		_ = t[3].content + '';
	return (
		(s = new E({ props: { variante: 5, src: t[3].img, alt: t[3].subtitle } })),
		{
			c() {
				(e = u('div')),
					(n = u('div')),
					l(s.$$.fragment),
					($ = m()),
					(d = u('div')),
					(h = u('p')),
					(I = m()),
					this.h();
			},
			l(t) {
				e = v(t, 'DIV', { class: !0 });
				var r = b(e);
				n = v(r, 'DIV', { class: !0 });
				var a = b(n);
				o(s.$$.fragment, a), a.forEach(g), ($ = p(r)), (d = v(r, 'DIV', { class: !0 }));
				var l = b(d);
				(h = v(l, 'P', { class: !0 })),
					b(h).forEach(g),
					l.forEach(g),
					r.forEach(g),
					(I = p(t)),
					this.h();
			},
			h() {
				w(n, 'class', 'col_5 svelte-17bwind'),
					w(h, 'class', 'svelte-17bwind'),
					w(d, 'class', 'col_8 svelte-17bwind'),
					w(e, 'class', 'dg gap_3 p_3 bgc_0 c_5 svelte-17bwind');
			},
			m(t, a) {
				r(t, e, a),
					x(e, n),
					c(s, n, null),
					x(e, $),
					x(e, d),
					x(d, h),
					(h.innerHTML = _),
					r(t, I, a),
					(H = !0);
			},
			p(t, e) {
				const n = {};
				1 & e && (n.src = t[3].img),
					1 & e && (n.alt = t[3].subtitle),
					s.$set(n),
					(!H || 1 & e) && _ !== (_ = t[3].content + '') && (h.innerHTML = _);
			},
			i(t) {
				H || (a(s.$$.fragment, t), (H = !0));
			},
			o(t) {
				i(s.$$.fragment, t), (H = !1);
			},
			d(t) {
				t && g(e), f(s), t && g(I);
			}
		}
	);
}
function M(t) {
	let e,
		n,
		l = t[1] == t[3].id && V(t);
	return {
		c() {
			l && l.c(), (e = s());
		},
		l(t) {
			l && l.l(t), (e = s());
		},
		m(t, s) {
			l && l.m(t, s), r(t, e, s), (n = !0);
		},
		p(t, n) {
			t[1] == t[3].id
				? l
					? (l.p(t, n), 3 & n && a(l, 1))
					: ((l = V(t)), l.c(), a(l, 1), l.m(e.parentNode, e))
				: l &&
				  ($(),
				  i(l, 1, 1, () => {
						l = null;
				  }),
				  d());
		},
		i(t) {
			n || (a(l), (n = !0));
		},
		o(t) {
			i(l), (n = !1);
		},
		d(t) {
			l && l.d(t), t && g(e);
		}
	};
}
function P(t) {
	let e, n, u, v;
	e = new j({ props: { tipo: 3, variante: 3, $$slots: { default: [T] }, $$scope: { ctx: t } } });
	let b = t[0],
		w = [];
	for (let s = 0; s < b.length; s += 1) w[s] = M(D(t, b, s));
	const x = (t) =>
		i(w[t], 1, 1, () => {
			w[t] = null;
		});
	return {
		c() {
			l(e.$$.fragment), (n = m());
			for (let t = 0; t < w.length; t += 1) w[t].c();
			u = s();
		},
		l(t) {
			o(e.$$.fragment, t), (n = p(t));
			for (let e = 0; e < w.length; e += 1) w[e].l(t);
			u = s();
		},
		m(t, s) {
			c(e, t, s), r(t, n, s);
			for (let e = 0; e < w.length; e += 1) w[e].m(t, s);
			r(t, u, s), (v = !0);
		},
		p(t, [n]) {
			const s = {};
			if ((259 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s), 3 & n)) {
				let e;
				for (b = t[0], e = 0; e < b.length; e += 1) {
					const s = D(t, b, e);
					w[e]
						? (w[e].p(s, n), a(w[e], 1))
						: ((w[e] = M(s)), w[e].c(), a(w[e], 1), w[e].m(u.parentNode, u));
				}
				for ($(), e = b.length; e < w.length; e += 1) x(e);
				d();
			}
		},
		i(t) {
			if (!v) {
				a(e.$$.fragment, t);
				for (let t = 0; t < b.length; t += 1) a(w[t]);
				v = !0;
			}
		},
		o(t) {
			i(e.$$.fragment, t), (w = w.filter(Boolean));
			for (let e = 0; e < w.length; e += 1) i(w[e]);
			v = !1;
		},
		d(t) {
			f(e, t), t && g(n), h(w, t), t && g(u);
		}
	};
}
function S(t, e, n) {
	let { tabHeaders: s = [] } = e,
		r = 1;
	return (
		(t.$$set = (t) => {
			'tabHeaders' in t && n(0, (s = t.tabHeaders));
		}),
		[s, r, (t) => () => n(1, (r = t))]
	);
}
class q extends t {
	constructor(t) {
		super(), e(this, t, S, P, n, { tabHeaders: 0 });
	}
}
export { q as T };
