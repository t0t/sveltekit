import {
	S as t,
	i as e,
	s,
	k as n,
	f as l,
	C as a,
	x as r,
	D as c,
	w as o,
	d as i,
	t as $,
	b as u,
	n as f,
	M as p,
	e as d,
	j as m,
	c as h,
	a as v,
	l as g,
	o as x,
	I as y,
	g as b,
	O as w,
	Q as _,
	E,
	a3 as I,
	p as D,
	q as V,
	r as k,
	a4 as G,
	H as M,
	a5 as j,
	y as L,
	K as P,
	a0 as B,
	a6 as S,
	a7 as q,
	R as z,
	a8 as C,
	F as H,
	J as T,
	T as A,
	U as F,
	V as O,
	h as U,
	G as N
} from '../../chunks/index-d91e1ed8.js';
import { B as R, c as J } from '../../chunks/Grid.svelte-f6369e02.js';
import { H as Y } from '../../chunks/Header-33a8b362.js';
import { S as K } from '../../chunks/Section-ebe14856.js';
import { L as Q, a as W } from '../../chunks/ListItem-50336afd.js';
import { t as X } from '../../chunks/index-c4bdeab8.js';
import { f as Z } from '../../chunks/index-65311448.js';
import '../../chunks/index-cc16b092.js';
import '../../chunks/index-78b22dae.js';
const tt = (t) => ({}),
	et = (t) => ({}),
	st = (t) => ({}),
	nt = (t) => ({}),
	lt = (t) => ({}),
	at = (t) => ({}),
	rt = (t) => ({}),
	ct = (t) => ({}),
	ot = (t) => ({}),
	it = (t) => ({}),
	$t = (t) => ({}),
	ut = (t) => ({}),
	ft = (t) => ({}),
	pt = (t) => ({}),
	dt = (t) => ({}),
	mt = (t) => ({}),
	ht = (t) => ({}),
	vt = (t) => ({}),
	gt = (t) => ({}),
	xt = (t) => ({}),
	yt = (t) => ({}),
	bt = (t) => ({}),
	wt = (t) => ({}),
	_t = (t) => ({}),
	Et = (t) => ({}),
	It = (t) => ({});
function Dt(t) {
	let e;
	return {
		c() {
			e = $('"define un tipo de layout"');
		},
		l(t) {
			e = u(t, '"define un tipo de layout"');
		},
		m(t, s) {
			l(t, e, s);
		},
		p: f,
		i: f,
		o: f,
		d(t) {
			t && i(e);
		}
	};
}
function Vt(t) {
	let e, s, n, a, c, $, u;
	const f = t[4].slot_5,
		_ = p(f, t, t[3], it),
		E = t[4].slot_4,
		I = p(E, t, t[3], ct),
		D = t[4].slot_3,
		V = p(D, t, t[3], at),
		k = t[4].slot_2,
		G = p(k, t, t[3], nt),
		M = t[4].slot_1,
		j = p(M, t, t[3], et);
	return {
		c() {
			(e = d('div')),
				_ && _.c(),
				(s = m()),
				I && I.c(),
				(n = m()),
				V && V.c(),
				(a = m()),
				G && G.c(),
				(c = m()),
				j && j.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			_ && _.l(l),
				(s = g(l)),
				I && I.l(l),
				(n = g(l)),
				V && V.l(l),
				(a = g(l)),
				G && G.l(l),
				(c = g(l)),
				j && j.l(l),
				l.forEach(i),
				this.h();
		},
		h() {
			x(e, 'class', ($ = y(t[2][t[1]]) + ' svelte-1815v3e'));
		},
		m(t, r) {
			l(t, e, r),
				_ && _.m(e, null),
				b(e, s),
				I && I.m(e, null),
				b(e, n),
				V && V.m(e, null),
				b(e, a),
				G && G.m(e, null),
				b(e, c),
				j && j.m(e, null),
				(u = !0);
		},
		p(t, s) {
			_ && _.p && 8 & s && w(_, f, t, t[3], s, ot, it),
				I && I.p && 8 & s && w(I, E, t, t[3], s, rt, ct),
				V && V.p && 8 & s && w(V, D, t, t[3], s, lt, at),
				G && G.p && 8 & s && w(G, k, t, t[3], s, st, nt),
				j && j.p && 8 & s && w(j, M, t, t[3], s, tt, et),
				(!u || (2 & s && $ !== ($ = y(t[2][t[1]]) + ' svelte-1815v3e'))) && x(e, 'class', $);
		},
		i(t) {
			u || (o(_, t), o(I, t), o(V, t), o(G, t), o(j, t), (u = !0));
		},
		o(t) {
			r(_, t), r(I, t), r(V, t), r(G, t), r(j, t), (u = !1);
		},
		d(t) {
			t && i(e), _ && _.d(t), I && I.d(t), V && V.d(t), G && G.d(t), j && j.d(t);
		}
	};
}
function kt(t) {
	let e, s, n, a, c, $, u, f, _, E, I, D, V, k, G, M;
	const j = t[4].default,
		L = p(j, t, t[3], null),
		P = t[4].subarea1,
		B = p(P, t, t[3], bt),
		S = t[4].subarea2,
		q = p(S, t, t[3], xt),
		z = t[4].subarea3,
		C = p(z, t, t[3], vt),
		H = t[4].subarea4,
		T = p(H, t, t[3], mt),
		A = t[4].subarea5,
		F = p(A, t, t[3], pt),
		O = t[4].subarea6,
		U = p(O, t, t[3], ut);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				L && L.c(),
				(n = m()),
				(a = d('div')),
				B && B.c(),
				(c = m()),
				($ = d('div')),
				q && q.c(),
				(u = m()),
				(f = d('div')),
				C && C.c(),
				(_ = m()),
				(E = d('div')),
				T && T.c(),
				(I = m()),
				(D = d('div')),
				F && F.c(),
				(V = m()),
				(k = d('div')),
				U && U.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			s = h(l, 'DIV', { class: !0 });
			var r = v(s);
			L && L.l(r), r.forEach(i), (n = g(l)), (a = h(l, 'DIV', { class: !0 }));
			var o = v(a);
			B && B.l(o), o.forEach(i), (c = g(l)), ($ = h(l, 'DIV', { class: !0 }));
			var p = v($);
			q && q.l(p), p.forEach(i), (u = g(l)), (f = h(l, 'DIV', { class: !0 }));
			var d = v(f);
			C && C.l(d), d.forEach(i), (_ = g(l)), (E = h(l, 'DIV', { class: !0 }));
			var m = v(E);
			T && T.l(m), m.forEach(i), (I = g(l)), (D = h(l, 'DIV', { class: !0 }));
			var x = v(D);
			F && F.l(x), x.forEach(i), (V = g(l)), (k = h(l, 'DIV', { class: !0 }));
			var y = v(k);
			U && U.l(y), y.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'subarea a svelte-1815v3e'),
				x(a, 'class', 'subarea b svelte-1815v3e'),
				x($, 'class', 'subarea c svelte-1815v3e'),
				x(f, 'class', 'subarea d svelte-1815v3e'),
				x(E, 'class', 'subarea e svelte-1815v3e'),
				x(D, 'class', 'subarea f svelte-1815v3e'),
				x(k, 'class', 'subarea g svelte-1815v3e'),
				x(e, 'class', (G = y(t[2][t[1]]) + ' svelte-1815v3e'));
		},
		m(t, r) {
			l(t, e, r),
				b(e, s),
				L && L.m(s, null),
				b(e, n),
				b(e, a),
				B && B.m(a, null),
				b(e, c),
				b(e, $),
				q && q.m($, null),
				b(e, u),
				b(e, f),
				C && C.m(f, null),
				b(e, _),
				b(e, E),
				T && T.m(E, null),
				b(e, I),
				b(e, D),
				F && F.m(D, null),
				b(e, V),
				b(e, k),
				U && U.m(k, null),
				(M = !0);
		},
		p(t, s) {
			L && L.p && 8 & s && w(L, j, t, t[3], s, null, null),
				B && B.p && 8 & s && w(B, P, t, t[3], s, yt, bt),
				q && q.p && 8 & s && w(q, S, t, t[3], s, gt, xt),
				C && C.p && 8 & s && w(C, z, t, t[3], s, ht, vt),
				T && T.p && 8 & s && w(T, H, t, t[3], s, dt, mt),
				F && F.p && 8 & s && w(F, A, t, t[3], s, ft, pt),
				U && U.p && 8 & s && w(U, O, t, t[3], s, $t, ut),
				(!M || (2 & s && G !== (G = y(t[2][t[1]]) + ' svelte-1815v3e'))) && x(e, 'class', G);
		},
		i(t) {
			M || (o(L, t), o(B, t), o(q, t), o(C, t), o(T, t), o(F, t), o(U, t), (M = !0));
		},
		o(t) {
			r(L, t), r(B, t), r(q, t), r(C, t), r(T, t), r(F, t), r(U, t), (M = !1);
		},
		d(t) {
			t && i(e),
				L && L.d(t),
				B && B.d(t),
				q && q.d(t),
				C && C.d(t),
				T && T.d(t),
				F && F.d(t),
				U && U.d(t);
		}
	};
}
function Gt(t) {
	let e, s, n, a, c, $, u, f;
	const _ = t[4].subarea1,
		E = p(_, t, t[3], It),
		I = t[4].default,
		D = p(I, t, t[3], null),
		V = t[4].subarea2,
		k = p(V, t, t[3], _t);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				E && E.c(),
				(n = m()),
				(a = d('div')),
				D && D.c(),
				(c = m()),
				($ = d('div')),
				k && k.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			s = h(l, 'DIV', { class: !0 });
			var r = v(s);
			E && E.l(r), r.forEach(i), (n = g(l)), (a = h(l, 'DIV', { class: !0 }));
			var o = v(a);
			D && D.l(o), o.forEach(i), (c = g(l)), ($ = h(l, 'DIV', { class: !0 }));
			var u = v($);
			k && k.l(u), u.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'svelte-1815v3e'),
				x(a, 'class', 'svelte-1815v3e'),
				x($, 'class', 'svelte-1815v3e'),
				x(e, 'class', (u = y(t[2][t[1]]) + ' svelte-1815v3e'));
		},
		m(t, r) {
			l(t, e, r),
				b(e, s),
				E && E.m(s, null),
				b(e, n),
				b(e, a),
				D && D.m(a, null),
				b(e, c),
				b(e, $),
				k && k.m($, null),
				(f = !0);
		},
		p(t, s) {
			E && E.p && 8 & s && w(E, _, t, t[3], s, Et, It),
				D && D.p && 8 & s && w(D, I, t, t[3], s, null, null),
				k && k.p && 8 & s && w(k, V, t, t[3], s, wt, _t),
				(!f || (2 & s && u !== (u = y(t[2][t[1]]) + ' svelte-1815v3e'))) && x(e, 'class', u);
		},
		i(t) {
			f || (o(E, t), o(D, t), o(k, t), (f = !0));
		},
		o(t) {
			r(E, t), r(D, t), r(k, t), (f = !1);
		},
		d(t) {
			t && i(e), E && E.d(t), D && D.d(t), k && k.d(t);
		}
	};
}
function Mt(t) {
	let e, s, $, u;
	const f = [Gt, kt, Vt, Dt],
		p = [];
	function d(t, e) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2 === t[0] ? 2 : 3;
	}
	return (
		(e = d(t)),
		(s = p[e] = f[e](t)),
		{
			c() {
				s.c(), ($ = n());
			},
			l(t) {
				s.l(t), ($ = n());
			},
			m(t, s) {
				p[e].m(t, s), l(t, $, s), (u = !0);
			},
			p(t, [n]) {
				let l = e;
				(e = d(t)),
					e === l
						? p[e].p(t, n)
						: (a(),
						  r(p[l], 1, 1, () => {
								p[l] = null;
						  }),
						  c(),
						  (s = p[e]),
						  s ? s.p(t, n) : ((s = p[e] = f[e](t)), s.c()),
						  o(s, 1),
						  s.m($.parentNode, $));
			},
			i(t) {
				u || (o(s), (u = !0));
			},
			o(t) {
				r(s), (u = !1);
			},
			d(t) {
				p[e].d(t), t && i($);
			}
		}
	);
}
function jt(t, e, s) {
	let { $$slots: n = {}, $$scope: l } = e,
		{ tipo: a = 0 } = e,
		{ variante: r = 0 } = e;
	return (
		(t.$$set = (t) => {
			'tipo' in t && s(0, (a = t.tipo)),
				'variante' in t && s(1, (r = t.variante)),
				'$$scope' in t && s(3, (l = t.$$scope));
		}),
		[
			a,
			r,
			[
				'Grid_0',
				'Grid_1',
				'Grid_2',
				'Grid_3',
				'Grid_4',
				'Grid_5',
				'Grid_6',
				'Grid_7',
				'Grid_8',
				'Grid_9'
			],
			l,
			n
		]
	);
}
class Lt extends t {
	constructor(t) {
		super(), e(this, t, jt, Mt, s, { tipo: 0, variante: 1 });
	}
}
function Pt(t, e, s) {
	const n = t.slice();
	return (n[17] = e[s]), (n[19] = s), n;
}
const Bt = (t) => ({}),
	St = (t) => ({});
function qt(t) {
	let e;
	return {
		c() {
			e = $('Play');
		},
		l(t) {
			e = u(t, 'Play');
		},
		m(t, s) {
			l(t, e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function zt(t) {
	let e, s;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [qt] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				16384 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
function Ct(t, e) {
	let s, n, a;
	return {
		key: t,
		first: null,
		c() {
			(s = E('circle')), this.h();
		},
		l(t) {
			(s = h(t, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), v(s).forEach(i), this.h();
		},
		h() {
			x(s, 'r', e[6]),
				x(s, 'cx', (n = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'cy', (a = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'class', 'svelte-1i0nx2f'),
				(this.first = s);
		},
		m(t, e) {
			l(t, s, e);
		},
		p(t, l) {
			(e = t),
				36 & l && n !== (n = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2) && x(s, 'cx', n),
				36 & l && a !== (a = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2) && x(s, 'cy', a);
		},
		d(t) {
			t && i(s);
		}
	};
}
function Ht(t) {
	let e, s, n, a, c, $, u, f, y, B, S, z, C, H, T, A;
	_(t[10]),
		(n = new Y({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } })),
		(S = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [zt] }, $$scope: { ctx: t } }
		}));
	const F = t[9].hasvideo,
		O = p(F, t, t[14], St),
		U =
			O ||
			(function (t) {
				let e,
					s,
					n = [],
					a = new Map(),
					r = { length: t[5] };
				const c = (t) => t[19];
				for (let l = 0; l < r.length; l += 1) {
					let e = Pt(t, r, l),
						s = c(e);
					a.set(s, (n[l] = Ct(s, e)));
				}
				return {
					c() {
						(e = E('svg')), (s = E('g'));
						for (let t = 0; t < n.length; t += 1) n[t].c();
						this.h();
					},
					l(t) {
						e = h(t, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var l = v(e);
						s = h(l, 'g', { class: !0 }, 1);
						var a = v(s);
						for (let e = 0; e < n.length; e += 1) n[e].l(a);
						a.forEach(i), l.forEach(i), this.h();
					},
					h() {
						x(s, 'class', 'svelte-1i0nx2f'),
							x(e, 'viewBox', '0 0 200 200'),
							x(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							x(e, 'class', 'svelte-1i0nx2f');
					},
					m(t, a) {
						l(t, e, a), b(e, s);
						for (let e = 0; e < n.length; e += 1) n[e].m(s, null);
					},
					p(t, e) {
						100 & e && ((r = { length: t[5] }), (n = I(n, e, c, 1, t, r, a, s, q, Ct, null, Pt)));
					},
					d(t) {
						t && i(e);
						for (let e = 0; e < n.length; e += 1) n[e].d();
					}
				};
			})(t);
	return {
		c() {
			(e = d('main')),
				(s = d('div')),
				D(n.$$.fragment),
				(a = m()),
				(c = d('div')),
				($ = d('div')),
				(u = d('input')),
				(f = m()),
				(y = d('input')),
				(B = m()),
				D(S.$$.fragment),
				(z = m()),
				(C = d('div')),
				U && U.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'MAIN', { class: !0 });
			var l = v(e);
			s = h(l, 'DIV', { class: !0 });
			var r = v(s);
			V(n.$$.fragment, r), r.forEach(i), (a = g(l)), (c = h(l, 'DIV', { class: !0 }));
			var o = v(c);
			$ = h(o, 'DIV', { class: !0 });
			var p = v($);
			(u = h(p, 'INPUT', { type: !0, step: !0, class: !0 })),
				(f = g(p)),
				(y = h(p, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
				p.forEach(i),
				(B = g(o)),
				V(S.$$.fragment, o),
				o.forEach(i),
				(z = g(l)),
				(C = h(l, 'DIV', { class: !0 }));
			var d = v(C);
			U && U.l(d), d.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'col_13 p_3 bgc_3 svelte-1i0nx2f'),
				x(u, 'type', 'number'),
				x(u, 'step', '0.001'),
				x(u, 'class', 'svelte-1i0nx2f'),
				x(y, 'type', 'range'),
				x(y, 'min', 0),
				x(y, 'max', Tt),
				x(y, 'class', 'svelte-1i0nx2f'),
				x($, 'class', 'controls svelte-1i0nx2f'),
				x(c, 'class', 'col_12 col_s2_5 dg_0 p_3 pcc svelte-1i0nx2f'),
				x(C, 'class', 'col_13 col_s2_8 svelte-1i0nx2f'),
				x(e, 'class', 'dg bgc_4 svelte-1i0nx2f');
		},
		m(r, o) {
			l(r, e, o),
				b(e, s),
				k(n, s, null),
				b(e, a),
				b(e, c),
				b(c, $),
				b($, u),
				G(u, t[2]),
				b($, f),
				b($, y),
				G(y, t[5]),
				b(c, B),
				k(S, c, null),
				b(e, z),
				b(e, C),
				U && U.m(C, null),
				(H = !0),
				T ||
					((A = [
						M(window, 'resize', t[10]),
						M(u, 'input', t[11]),
						M(y, 'change', t[12]),
						M(y, 'input', t[12])
					]),
					(T = !0));
		},
		p(t, [e]) {
			const s = {};
			1 & e && (s.title = t[0]),
				2 & e && (s.subtitle = t[1]),
				n.$set(s),
				4 & e && j(u.value) !== t[2] && G(u, t[2]),
				32 & e && G(y, t[5]);
			const l = {};
			16416 & e && (l.$$scope = { dirty: e, ctx: t }),
				S.$set(l),
				O ? O.p && 16384 & e && w(O, F, t, t[14], e, Bt, St) : U && U.p && 36 & e && U.p(t, e);
		},
		i(t) {
			H || (o(n.$$.fragment, t), o(S.$$.fragment, t), o(U, t), (H = !0));
		},
		o(t) {
			r(n.$$.fragment, t), r(S.$$.fragment, t), r(U, t), (H = !1);
		},
		d(t) {
			t && i(e), L(n), L(S), U && U.d(t), (T = !1), P(A);
		}
	};
}
let Tt = 360;
function At(t, e, s) {
	let n,
		l,
		a,
		{ $$slots: r = {}, $$scope: c } = e,
		{ title: o = '' } = e,
		{ text: i = '' } = e,
		$ = 0.618033988749,
		u = X(0, { duration: 500, interpolate: (t, e) => (s) => Math.round((e - t) * s + t) });
	B(t, u, (t) => s(5, (n = t)));
	let { variante: f = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (o = t.title)),
				'text' in t && s(1, (i = t.text)),
				'variante' in t && s(8, (f = t.variante)),
				'$$scope' in t && s(14, (c = t.$$scope));
		}),
		S(u, (n = Tt), n),
		[
			o,
			i,
			$,
			l,
			a,
			n,
			1.62 * 1.62,
			u,
			f,
			r,
			function () {
				s(3, (l = window.innerWidth)), s(4, (a = window.innerHeight));
			},
			function () {
				($ = j(this.value)), s(2, $);
			},
			function () {
				(n = j(this.value)), u.set(n);
			},
			() => {
				S(u, (n = n > 0 ? 0 : Tt), n);
			},
			c
		]
	);
}
class Ft extends t {
	constructor(t) {
		super(), e(this, t, At, Ht, s, { title: 0, text: 1, variante: 8 });
	}
}
function Ot(t) {
	let e, s, n, a;
	return {
		c() {
			(e = E('div')), (s = $('xxx')), this.h();
		},
		l(t) {
			e = h(t, 'div', { class: !0 }, 1);
			var n = v(e);
			(s = u(n, 'xxx')), n.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'svelte-jbyz76');
		},
		m(t, n) {
			l(t, e, n), b(e, s), (a = !0);
		},
		i(t) {
			a ||
				(_(() => {
					n || (n = z(e, Z, {}, !0)), n.run(1);
				}),
				(a = !0));
		},
		o(t) {
			n || (n = z(e, Z, {}, !1)), n.run(0), (a = !1);
		},
		d(t) {
			t && i(e), t && n && n.end();
		}
	};
}
function Ut(t) {
	let e,
		s,
		$,
		u,
		f,
		d = t[2] && Ot();
	const m = t[7].default,
		g = p(m, t, t[6], null);
	return {
		c() {
			(e = E('text')), d && d.c(), (s = n()), g && g.c(), this.h();
		},
		l(t) {
			e = h(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var l = v(e);
			d && d.l(l), (s = n()), g && g.l(l), l.forEach(i), this.h();
		},
		h() {
			x(e, 'x', t[0]),
				x(e, 'y', t[1]),
				x(e, 'font-size', '55'),
				x(e, 'class', 'draggable svelte-jbyz76');
		},
		m(n, a) {
			l(n, e, a),
				d && d.m(e, null),
				b(e, s),
				g && g.m(e, null),
				($ = !0),
				u ||
					((f = [M(window, 'mouseup', t[4]), M(e, 'mousedown', t[3]), M(e, 'mousemove', t[5])]),
					(u = !0));
		},
		p(t, [n]) {
			t[2]
				? d
					? 4 & n && o(d, 1)
					: ((d = Ot()), d.c(), o(d, 1), d.m(e, s))
				: d &&
				  (a(),
				  r(d, 1, 1, () => {
						d = null;
				  }),
				  c()),
				g && g.p && 64 & n && w(g, m, t, t[6], n, null, null),
				(!$ || 1 & n) && x(e, 'x', t[0]),
				(!$ || 2 & n) && x(e, 'y', t[1]);
		},
		i(t) {
			$ || (o(d), o(g, t), ($ = !0));
		},
		o(t) {
			r(d), r(g, t), ($ = !1);
		},
		d(t) {
			t && i(e), d && d.d(), g && g.d(t), (u = !1), P(f);
		}
	};
}
function Nt(t, e, s) {
	let { $$slots: n = {}, $$scope: l } = e,
		{ x: a = 0 } = e,
		{ y: r = 0 } = e,
		c = !1;
	return (
		(t.$$set = (t) => {
			'x' in t && s(0, (a = t.x)),
				'y' in t && s(1, (r = t.y)),
				'$$scope' in t && s(6, (l = t.$$scope));
		}),
		[
			a,
			r,
			c,
			() => {
				s(2, (c = !0));
			},
			function () {
				s(2, (c = !1));
			},
			function (t) {
				c && (s(0, (a += 2.5 * t.movementX)), s(1, (r += 2.5 * t.movementY)));
			},
			l,
			n
		]
	);
}
class Rt extends t {
	constructor(t) {
		super(), e(this, t, Nt, Ut, s, { x: 0, y: 1 });
	}
}
function Jt(t) {
	let e, s, n, a, c;
	const $ = t[4].default,
		u = p($, t, t[3], null);
	return {
		c() {
			(e = d('form')), u && u.c(), this.h();
		},
		l(t) {
			e = h(t, 'FORM', { name: !0, class: !0 });
			var s = v(e);
			u && u.l(s), s.forEach(i), this.h();
		},
		h() {
			x(e, 'name', t[0]), x(e, 'class', (s = y(t[2][t[1]]) + ' svelte-1m6vagr'));
		},
		m(s, r) {
			l(s, e, r), u && u.m(e, null), (n = !0), a || ((c = M(e, 'submit', C(t[5]))), (a = !0));
		},
		p(t, [l]) {
			u && u.p && 8 & l && w(u, $, t, t[3], l, null, null),
				(!n || 1 & l) && x(e, 'name', t[0]),
				(!n || (2 & l && s !== (s = y(t[2][t[1]]) + ' svelte-1m6vagr'))) && x(e, 'class', s);
		},
		i(t) {
			n || (o(u, t), (n = !0));
		},
		o(t) {
			r(u, t), (n = !1);
		},
		d(t) {
			t && i(e), u && u.d(t), (a = !1), c();
		}
	};
}
function Yt(t, e, s) {
	let { $$slots: n = {}, $$scope: l } = e,
		{ name: a = 'My form group' } = e,
		{ variante: r = 0 } = e;
	return (
		(t.$$set = (t) => {
			'name' in t && s(0, (a = t.name)),
				'variante' in t && s(1, (r = t.variante)),
				'$$scope' in t && s(3, (l = t.$$scope));
		}),
		[
			a,
			r,
			['Form_0', 'Form_1'],
			l,
			n,
			function (e) {
				H(t, e);
			}
		]
	);
}
class Kt extends t {
	constructor(t) {
		super(), e(this, t, Yt, Jt, s, { name: 0, variante: 1 });
	}
}
function Qt(t) {
	let e, s, n;
	return {
		c() {
			(e = d('input')), this.h();
		},
		l(t) {
			(e = h(t, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(e.value = t[0]),
				x(e, 'placeholder', t[1]),
				x(e, 'type', ''),
				x(e, 'name', ''),
				x(e, 'class', 'svelte-1uc3o3j');
		},
		m(a, r) {
			l(a, e, r), s || ((n = M(e, 'input', t[2])), (s = !0));
		},
		p(t, [s]) {
			1 & s && e.value !== t[0] && (e.value = t[0]), 2 & s && x(e, 'placeholder', t[1]);
		},
		i: f,
		o: f,
		d(t) {
			t && i(e), (s = !1), n();
		}
	};
}
function Wt(t, e, s) {
	let { value: n = '' } = e,
		{ placeholder: l = '"...בראשית ברא אלהים"' } = e;
	return (
		(t.$$set = (t) => {
			'value' in t && s(0, (n = t.value)), 'placeholder' in t && s(1, (l = t.placeholder));
		}),
		[n, l, (t) => s(0, (n = t.target.value))]
	);
}
class Xt extends t {
	constructor(t) {
		super(), e(this, t, Wt, Qt, s, { value: 0, placeholder: 1 });
	}
}
function Zt(t, e, s) {
	const n = t.slice();
	return (n[13] = e[s]), n;
}
function te(t, e, s) {
	const n = t.slice();
	return (n[16] = e[s]), n;
}
function ee(t, e, s) {
	const n = t.slice();
	return (n[19] = e[s]), n;
}
function se(t) {
	let e;
	return {
		c() {
			(e = E('circle')), this.h();
		},
		l(t) {
			(e = h(t, 'circle', { cx: !0, cy: !0, r: !0, id: !0, fill: !0, stroke: !0, class: !0 }, 1)),
				v(e).forEach(i),
				this.h();
		},
		h() {
			x(e, 'cx', t[19].cx),
				x(e, 'cy', t[19].cy),
				x(e, 'r', t[19].r),
				x(e, 'id', t[19].id),
				x(e, 'fill', 'none'),
				x(e, 'stroke', 'black'),
				x(e, 'class', 'svelte-1ubqd8y');
		},
		m(t, s) {
			l(t, e, s);
		},
		p: f,
		d(t) {
			t && i(e);
		}
	};
}
function ne(t) {
	let e,
		s = t[16].id + '';
	return {
		c() {
			e = $(s);
		},
		l(t) {
			e = u(t, s);
		},
		m(t, s) {
			l(t, e, s);
		},
		p: f,
		d(t) {
			t && i(e);
		}
	};
}
function le(t) {
	let e, s;
	return (
		(e = new Rt({
			props: { x: t[16].xpos, y: t[16].ypos, $$slots: { default: [ne] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				4194304 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
function ae(t) {
	let e,
		s = t[13] + '';
	return {
		c() {
			e = $(s);
		},
		l(t) {
			e = u(t, s);
		},
		m(t, s) {
			l(t, e, s);
		},
		p(t, n) {
			1 & n && s !== (s = t[13] + '') && U(e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function re(t) {
	let e, s;
	return (
		(e = new Rt({ props: { x: de, y: me, $$slots: { default: [ae] }, $$scope: { ctx: t } } })),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				4194305 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
function ce(t) {
	let e,
		s,
		$,
		u,
		f,
		p = t[4],
		d = [];
	for (let n = 0; n < p.length; n += 1) d[n] = se(ee(t, p, n));
	let m = t[5],
		g = [];
	for (let n = 0; n < m.length; n += 1) g[n] = le(te(t, m, n));
	const y = (t) =>
		r(g[t], 1, 1, () => {
			g[t] = null;
		});
	let w = t[0],
		_ = [];
	for (let n = 0; n < w.length; n += 1) _[n] = re(Zt(t, w, n));
	const I = (t) =>
		r(_[t], 1, 1, () => {
			_[t] = null;
		});
	return {
		c() {
			(e = E('svg')), (s = E('g'));
			for (let t = 0; t < d.length; t += 1) d[t].c();
			$ = n();
			for (let t = 0; t < g.length; t += 1) g[t].c();
			u = n();
			for (let t = 0; t < _.length; t += 1) _[t].c();
			this.h();
		},
		l(t) {
			e = h(t, 'svg', { viewBox: !0, class: !0 }, 1);
			var l = v(e);
			s = h(l, 'g', { transform: !0, class: !0 }, 1);
			var a = v(s);
			for (let e = 0; e < d.length; e += 1) d[e].l(a);
			$ = n();
			for (let e = 0; e < g.length; e += 1) g[e].l(a);
			u = n();
			for (let e = 0; e < _.length; e += 1) _[e].l(a);
			a.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'transform', 'translate(150,150) scale(0.7)'),
				x(s, 'class', 'svelte-1ubqd8y'),
				x(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				x(e, 'class', 'svelte-1ubqd8y');
		},
		m(n, a) {
			l(n, e, a), b(e, s);
			for (let t = 0; t < d.length; t += 1) d[t].m(s, null);
			b(s, $);
			for (let t = 0; t < g.length; t += 1) g[t].m(s, null);
			b(s, u);
			for (let t = 0; t < _.length; t += 1) _[t].m(s, null);
			t[10](e), (f = !0);
		},
		p(t, e) {
			if (16 & e) {
				let n;
				for (p = t[4], n = 0; n < p.length; n += 1) {
					const l = ee(t, p, n);
					d[n] ? d[n].p(l, e) : ((d[n] = se(l)), d[n].c(), d[n].m(s, $));
				}
				for (; n < d.length; n += 1) d[n].d(1);
				d.length = p.length;
			}
			if (32 & e) {
				let n;
				for (m = t[5], n = 0; n < m.length; n += 1) {
					const l = te(t, m, n);
					g[n] ? (g[n].p(l, e), o(g[n], 1)) : ((g[n] = le(l)), g[n].c(), o(g[n], 1), g[n].m(s, u));
				}
				for (a(), n = m.length; n < g.length; n += 1) y(n);
				c();
			}
			if (1 & e) {
				let n;
				for (w = t[0], n = 0; n < w.length; n += 1) {
					const l = Zt(t, w, n);
					_[n]
						? (_[n].p(l, e), o(_[n], 1))
						: ((_[n] = re(l)), _[n].c(), o(_[n], 1), _[n].m(s, null));
				}
				for (a(), n = w.length; n < _.length; n += 1) I(n);
				c();
			}
		},
		i(t) {
			if (!f) {
				for (let t = 0; t < m.length; t += 1) o(g[t]);
				for (let t = 0; t < w.length; t += 1) o(_[t]);
				f = !0;
			}
		},
		o(t) {
			g = g.filter(Boolean);
			for (let e = 0; e < g.length; e += 1) r(g[e]);
			_ = _.filter(Boolean);
			for (let e = 0; e < _.length; e += 1) r(_[e]);
			f = !1;
		},
		d(s) {
			s && i(e), T(d, s), T(g, s), T(_, s), t[10](null);
		}
	};
}
function oe(t) {
	let e, s, n, a, c;
	function $(e) {
		t[9](e);
	}
	let u = { placeholder: 'Your word' };
	return (
		void 0 !== t[1] && (u.value = t[1]),
		(e = new Xt({ props: u })),
		A.push(() => F(e, 'value', $)),
		(a = new R({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				D(e.$$.fragment), (n = m()), D(a.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t), (n = g(t)), V(a.$$.fragment, t);
			},
			m(t, s) {
				k(e, t, s), l(t, n, s), k(a, t, s), (c = !0);
			},
			p(t, n) {
				const l = {};
				!s && 2 & n && ((s = !0), (l.value = t[1]), O(() => (s = !1))), e.$set(l);
			},
			i(t) {
				c || (o(e.$$.fragment, t), o(a.$$.fragment, t), (c = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(a.$$.fragment, t), (c = !1);
			},
			d(t) {
				L(e, t), t && i(n), L(a, t);
			}
		}
	);
}
function ie(t) {
	let e, s, n, a, c;
	return (
		(s = new Y({
			props: {
				tipo: 3,
				variante: 7,
				title: 'Meta-Mapa +0+1234',
				subtitle: 'Escribe y ordena conceptos en el mapa +0+1234'
			}
		})),
		(a = new Kt({ props: { variante: 1, $$slots: { default: [oe] }, $$scope: { ctx: t } } })),
		a.$on('submit', t[6]),
		{
			c() {
				(e = d('div')), D(s.$$.fragment), (n = m()), D(a.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var l = v(e);
				V(s.$$.fragment, l), (n = g(l)), V(a.$$.fragment, l), l.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea1'), x(e, 'class', 'svelte-1ubqd8y');
			},
			m(t, r) {
				l(t, e, r), k(s, e, null), b(e, n), k(a, e, null), (c = !0);
			},
			p(t, e) {
				const s = {};
				4194306 & e && (s.$$scope = { dirty: e, ctx: t }), a.$set(s);
			},
			i(t) {
				c || (o(s.$$.fragment, t), o(a.$$.fragment, t), (c = !0));
			},
			o(t) {
				r(s.$$.fragment, t), r(a.$$.fragment, t), (c = !1);
			},
			d(t) {
				t && i(e), L(s), L(a);
			}
		}
	);
}
function $e(t) {
	let e;
	return {
		c() {
			e = $('Download svg');
		},
		l(t) {
			e = u(t, 'Download svg');
		},
		m(t, s) {
			l(t, e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function ue(t) {
	let e, s;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [$e] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[8]),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				4194304 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
function fe(t) {
	let e, s, n;
	return (
		(s = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [ue] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = d('div')), D(s.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var n = v(e);
				V(s.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea2'), x(e, 'class', 'svelte-1ubqd8y');
			},
			m(t, a) {
				l(t, e, a), k(s, e, null), (n = !0);
			},
			p(t, e) {
				const n = {};
				4194308 & e && (n.$$scope = { dirty: e, ctx: t }), s.$set(n);
			},
			i(t) {
				n || (o(s.$$.fragment, t), (n = !0));
			},
			o(t) {
				r(s.$$.fragment, t), (n = !1);
			},
			d(t) {
				t && i(e), L(s);
			}
		}
	);
}
function pe(t) {
	let e, s;
	return (
		(e = new Lt({
			props: {
				variante: 0,
				$$slots: { subarea2: [fe], subarea1: [ie], default: [ce] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			p(t, [s]) {
				const n = {};
				4194311 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
let de = 0,
	me = 0;
function he(t, e, s) {
	let n = [],
		l = '',
		a = { width: 1e3, height: 1e3 },
		r = a.width / 4,
		c = a.width / 2;
	let o = null;
	const i = (t, e = 'your-01234-map.svg') => {
		t.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		let s = t.outerHTML,
			n = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', s], {
				type: 'image/svg+xml;charset=utf-8'
			}),
			l = URL.createObjectURL(n),
			a = document.createElement('a');
		(a.href = l),
			(a.download = e),
			document.body.appendChild(a),
			a.click(),
			document.body.removeChild(a);
	};
	return [
		n,
		l,
		o,
		a,
		[
			{ id: 'circulogrande', cx: c, cy: c, r: c },
			{ id: 'circuloizda', cx: r, cy: c, r: r },
			{ id: 'circulodcha', cx: 3 * r, cy: c, r: r }
		],
		[
			{ id: 0, xpos: 0, ypos: 500 },
			{ id: 1, xpos: 500, ypos: 500 },
			{ id: 2, xpos: 750, ypos: 750 },
			{ id: 3, xpos: 750, ypos: 250 },
			{ id: 4, xpos: 1e3, ypos: 500 }
		],
		() => {
			s(0, (n = [...n, l]));
		},
		i,
		() => i(o),
		function (t) {
			(l = t), s(1, l);
		},
		function (t) {
			A[t ? 'unshift' : 'push'](() => {
				(o = t), s(2, o);
			});
		}
	];
}
class ve extends t {
	constructor(t) {
		super(), e(this, t, he, pe, s, {});
	}
}
function ge(t) {
	let e, s;
	const n = t[2].default,
		a = p(n, t, t[1], null);
	return {
		c() {
			(e = d('div')), a && a.c(), this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var s = v(e);
			a && a.l(s), s.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'Alert svelte-r83tax'), N(e, 'haserror', !t[0]);
		},
		m(t, n) {
			l(t, e, n), a && a.m(e, null), (s = !0);
		},
		p(t, [s]) {
			a && a.p && 2 & s && w(a, n, t, t[1], s, null, null), 1 & s && N(e, 'haserror', !t[0]);
		},
		i(t) {
			s || (o(a, t), (s = !0));
		},
		o(t) {
			r(a, t), (s = !1);
		},
		d(t) {
			t && i(e), a && a.d(t);
		}
	};
}
function xe(t, e, s) {
	let { $$slots: n = {}, $$scope: l } = e,
		{ haserror: a = !1 } = e;
	return (
		(t.$$set = (t) => {
			'haserror' in t && s(0, (a = t.haserror)), '$$scope' in t && s(1, (l = t.$$scope));
		}),
		[a, l, n]
	);
}
class ye extends t {
	constructor(t) {
		super(), e(this, t, xe, ge, s, { haserror: 0 });
	}
}
function be(t) {
	let e;
	return {
		c() {
			e = $('Codex de Leningrado');
		},
		l(t) {
			e = u(t, 'Codex de Leningrado');
		},
		m(t, s) {
			l(t, e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function we(t) {
	let e, s;
	return (
		(e = new W({
			props: {
				tipo: 2,
				variante: 6,
				href: 'https://tanach.us/Server.txt?Genesis*&content=Consonants',
				target: '_blank',
				$$slots: { default: [be] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				512 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
function _e(t) {
	let e, s, n, a, c;
	function $(e) {
		t[5](e);
	}
	let u = {};
	return (
		void 0 !== t[0] && (u.value = t[0]),
		(e = new Xt({ props: u })),
		A.push(() => F(e, 'value', $)),
		(a = new R({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				D(e.$$.fragment), (n = m()), D(a.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t), (n = g(t)), V(a.$$.fragment, t);
			},
			m(t, s) {
				k(e, t, s), l(t, n, s), k(a, t, s), (c = !0);
			},
			p(t, n) {
				const l = {};
				!s && 1 & n && ((s = !0), (l.value = t[0]), O(() => (s = !1))), e.$set(l);
				const r = {};
				1 & n && (r.valorinput = t[0]), a.$set(r);
			},
			i(t) {
				c || (o(e.$$.fragment, t), o(a.$$.fragment, t), (c = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(a.$$.fragment, t), (c = !1);
			},
			d(t) {
				L(e, t), t && i(n), L(a, t);
			}
		}
	);
}
function Ee(t) {
	let e, s;
	return (
		(e = new ye({ props: { $$slots: { default: [Ie] }, $$scope: { ctx: t } } })),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				516 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
function Ie(t) {
	let e;
	return {
		c() {
			e = $(t[2]);
		},
		l(s) {
			e = u(s, t[2]);
		},
		m(t, s) {
			l(t, e, s);
		},
		p(t, s) {
			4 & s && U(e, t[2]);
		},
		d(t) {
			t && i(e);
		}
	};
}
function De(t) {
	let e, s, n, f, p, y, w, _, E, I, G, M, j, P, B, S, q, z, C, H;
	(n = new Y({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(E = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [we] }, $$scope: { ctx: t } }
		})),
		(S = new Kt({ props: { variante: 1, $$slots: { default: [_e] }, $$scope: { ctx: t } } })),
		S.$on('submit', t[4]);
	let T = 1 == t[1] && Ee(t);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				D(n.$$.fragment),
				(f = m()),
				(p = d('footer')),
				(y = d('small')),
				(w = $('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(_ = m()),
				D(E.$$.fragment),
				(I = m()),
				(G = d('div')),
				(M = d('h2')),
				(j = $(t[3])),
				(P = m()),
				(B = d('div')),
				D(S.$$.fragment),
				(q = m()),
				T && T.c(),
				(z = m()),
				(C = d('div')),
				this.h();
		},
		l(l) {
			e = h(l, 'DIV', { class: !0 });
			var a = v(e);
			s = h(a, 'DIV', { class: !0 });
			var r = v(s);
			V(n.$$.fragment, r), (f = g(r)), (p = h(r, 'FOOTER', { class: !0 }));
			var c = v(p);
			y = h(c, 'SMALL', { class: !0 });
			var o = v(y);
			(w = u(o, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				o.forEach(i),
				(_ = g(c)),
				V(E.$$.fragment, c),
				c.forEach(i),
				r.forEach(i),
				(I = g(a)),
				(G = h(a, 'DIV', { class: !0 }));
			var $ = v(G);
			M = h($, 'H2', { class: !0 });
			var d = v(M);
			(j = u(d, t[3])), d.forEach(i), (P = g($)), (B = h($, 'DIV', { class: !0 }));
			var m = v(B);
			V(S.$$.fragment, m),
				m.forEach(i),
				(q = g($)),
				T && T.l($),
				$.forEach(i),
				(z = g(a)),
				(C = h(a, 'DIV', { class: !0 })),
				v(C).forEach(i),
				a.forEach(i),
				this.h();
		},
		h() {
			x(y, 'class', 'svelte-1uepu72'),
				x(p, 'class', 'svelte-1uepu72'),
				x(s, 'class', 'col_6 svelte-1uepu72'),
				x(M, 'class', 'result svelte-1uepu72'),
				x(B, 'class', 'position-form svelte-1uepu72'),
				x(G, 'class', 'col_7 svelte-1uepu72'),
				x(C, 'class', 'col_5 svelte-1uepu72'),
				x(e, 'class', 'dg bgc_primary c_5 p_3 rg_1 cg_s2_2 tal svelte-1uepu72');
		},
		m(t, a) {
			l(t, e, a),
				b(e, s),
				k(n, s, null),
				b(s, f),
				b(s, p),
				b(p, y),
				b(y, w),
				b(p, _),
				k(E, p, null),
				b(e, I),
				b(e, G),
				b(G, M),
				b(M, j),
				b(G, P),
				b(G, B),
				k(S, B, null),
				b(G, q),
				T && T.m(G, null),
				b(e, z),
				b(e, C),
				(H = !0);
		},
		p(t, [e]) {
			const s = {};
			512 & e && (s.$$scope = { dirty: e, ctx: t }), E.$set(s), (!H || 8 & e) && U(j, t[3]);
			const n = {};
			513 & e && (n.$$scope = { dirty: e, ctx: t }),
				S.$set(n),
				1 == t[1]
					? T
						? (T.p(t, e), 2 & e && o(T, 1))
						: ((T = Ee(t)), T.c(), o(T, 1), T.m(G, null))
					: T &&
					  (a(),
					  r(T, 1, 1, () => {
							T = null;
					  }),
					  c());
		},
		i(t) {
			H || (o(n.$$.fragment, t), o(E.$$.fragment, t), o(S.$$.fragment, t), o(T), (H = !0));
		},
		o(t) {
			r(n.$$.fragment, t), r(E.$$.fragment, t), r(S.$$.fragment, t), r(T), (H = !1);
		},
		d(t) {
			t && i(e), L(n), L(E), L(S), T && T.d();
		}
	};
}
function Ve(t, e, s) {
	let n,
		l = '',
		a = !1,
		r = '',
		c = [];
	return (
		s(3, (n = 0)),
		[
			l,
			a,
			r,
			n,
			function () {
				s(1, (a = !1)), s(3, (n = 0)), s(0, l), (c = l.split('')), s(2, (r = ''));
				for (const t of c)
					'א' == t
						? s(3, (n += 1))
						: 'ב' == t
						? s(3, (n += 2))
						: 'ג' == t
						? s(3, (n += 3))
						: 'ד' == t
						? s(3, (n += 4))
						: 'ה' == t
						? s(3, (n += 5))
						: 'ו' == t
						? s(3, (n += 6))
						: 'ז' == t
						? s(3, (n += 7))
						: 'ח' == t
						? s(3, (n += 8))
						: 'ט' == t
						? s(3, (n += 9))
						: 'י' == t
						? s(3, (n += 10))
						: 'כ' == t
						? s(3, (n += 20))
						: 'ל' == t
						? s(3, (n += 30))
						: 'מ' == t
						? s(3, (n += 40))
						: 'ן' == t
						? s(3, (n += 50))
						: 'ס' == t
						? s(3, (n += 60))
						: 'ע' == t
						? s(3, (n += 70))
						: 'פ' == t
						? s(3, (n += 80))
						: 'צ' == t
						? s(3, (n += 90))
						: 'ק' == t
						? s(3, (n += 100))
						: 'ר' == t
						? s(3, (n += 200))
						: 'ש' == t
						? s(3, (n += 300))
						: 'ת' == t
						? s(3, (n += 400))
						: 'ך' == t
						? s(3, (n += 500))
						: 'ם' == t
						? s(3, (n += 600))
						: 'ן' == t
						? s(3, (n += 700))
						: 'ף' == t
						? s(3, (n += 800))
						: 'ץ' == t
						? s(3, (n += 900))
						: ' ' == t
						? s(3, (n += 0))
						: (s(1, (a = !0)),
						  s(1, (a = !0))
								? s(2, (r = 'Sólo contabilizan las consonantes hebreas.'))
								: (s(1, (a = !1)), s(2, (r = ''))));
				return n;
			},
			function (t) {
				(l = t), s(0, l);
			}
		]
	);
}
class ke extends t {
	constructor(t) {
		super(), e(this, t, Ve, De, s, {});
	}
}
function Ge(t) {
	let e, s;
	return (
		(e = new ve({})),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				k(e, t, n), (s = !0);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				L(e, t);
			}
		}
	);
}
function Me(t) {
	let e, s, n, a, c, $, u, f, p, y;
	return (
		(n = new Y({
			props: { tipo: 1, variante: 1, title: J[2].title, subtitle: J[2].subtitle, text: J[2].text }
		})),
		(c = new Ft({
			props: {
				title: 'La Divina Proporción',
				text:
					'<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>'
			}
		})),
		(u = new K({
			props: { id: 't0t', variante: 0, $$slots: { default: [Ge] }, $$scope: { ctx: t } }
		})),
		(p = new ke({})),
		{
			c() {
				(e = d('div')),
					(s = d('div')),
					D(n.$$.fragment),
					(a = m()),
					D(c.$$.fragment),
					($ = m()),
					D(u.$$.fragment),
					(f = m()),
					D(p.$$.fragment),
					this.h();
			},
			l(t) {
				e = h(t, 'DIV', { class: !0 });
				var l = v(e);
				s = h(l, 'DIV', { class: !0 });
				var r = v(s);
				V(n.$$.fragment, r),
					r.forEach(i),
					l.forEach(i),
					(a = g(t)),
					V(c.$$.fragment, t),
					($ = g(t)),
					V(u.$$.fragment, t),
					(f = g(t)),
					V(p.$$.fragment, t),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 p_3 dg_0 mh_0 pcc bgc_0 c_5 mh_2 tac'), x(e, 'class', 'dg');
			},
			m(t, r) {
				l(t, e, r),
					b(e, s),
					k(n, s, null),
					l(t, a, r),
					k(c, t, r),
					l(t, $, r),
					k(u, t, r),
					l(t, f, r),
					k(p, t, r),
					(y = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
			},
			i(t) {
				y ||
					(o(n.$$.fragment, t),
					o(c.$$.fragment, t),
					o(u.$$.fragment, t),
					o(p.$$.fragment, t),
					(y = !0));
			},
			o(t) {
				r(n.$$.fragment, t),
					r(c.$$.fragment, t),
					r(u.$$.fragment, t),
					r(p.$$.fragment, t),
					(y = !1);
			},
			d(t) {
				t && i(e), L(n), t && i(a), L(c, t), t && i($), L(u, t), t && i(f), L(p, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Me, s, {});
	}
}
