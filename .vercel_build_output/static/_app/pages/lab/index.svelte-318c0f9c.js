import {
	S as t,
	i as e,
	s,
	k as n,
	f as l,
	C as a,
	x as r,
	D as o,
	w as c,
	d as i,
	t as $,
	b as u,
	n as f,
	M as h,
	e as p,
	j as m,
	c as d,
	a as v,
	l as g,
	o as x,
	I as y,
	g as w,
	O as b,
	Q as E,
	E as I,
	a3 as _,
	p as D,
	q as V,
	r as M,
	a4 as k,
	H as G,
	a5 as j,
	y as L,
	K as B,
	a0 as P,
	a6 as S,
	a7 as z,
	R as A,
	a8 as C,
	F as H,
	J as T,
	T as F,
	U as N,
	V as O,
	h as U,
	G as R
} from '../../chunks/index-d91e1ed8.js';
import { B as q, c as J } from '../../chunks/Grid.svelte-1b56dd60.js';
import { H as Y } from '../../chunks/Header-bbb40db3.js';
import { S as K } from '../../chunks/Section-18758c52.js';
import { L as Q, a as W } from '../../chunks/ListItem-13a8e652.js';
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
	ot = (t) => ({}),
	ct = (t) => ({}),
	it = (t) => ({}),
	$t = (t) => ({}),
	ut = (t) => ({}),
	ft = (t) => ({}),
	ht = (t) => ({}),
	pt = (t) => ({}),
	mt = (t) => ({}),
	dt = (t) => ({}),
	vt = (t) => ({}),
	gt = (t) => ({}),
	xt = (t) => ({}),
	yt = (t) => ({}),
	wt = (t) => ({}),
	bt = (t) => ({}),
	Et = (t) => ({}),
	It = (t) => ({}),
	_t = (t) => ({});
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
	let e, s, n, a, o, $, u;
	const f = t[4].slot_5,
		E = h(f, t, t[3], it),
		I = t[4].slot_4,
		_ = h(I, t, t[3], ot),
		D = t[4].slot_3,
		V = h(D, t, t[3], at),
		M = t[4].slot_2,
		k = h(M, t, t[3], nt),
		G = t[4].slot_1,
		j = h(G, t, t[3], et);
	return {
		c() {
			(e = p('div')),
				E && E.c(),
				(s = m()),
				_ && _.c(),
				(n = m()),
				V && V.c(),
				(a = m()),
				k && k.c(),
				(o = m()),
				j && j.c(),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { class: !0 });
			var l = v(e);
			E && E.l(l),
				(s = g(l)),
				_ && _.l(l),
				(n = g(l)),
				V && V.l(l),
				(a = g(l)),
				k && k.l(l),
				(o = g(l)),
				j && j.l(l),
				l.forEach(i),
				this.h();
		},
		h() {
			x(e, 'class', ($ = y(t[2][t[1]]) + ' svelte-1oha6uh'));
		},
		m(t, r) {
			l(t, e, r),
				E && E.m(e, null),
				w(e, s),
				_ && _.m(e, null),
				w(e, n),
				V && V.m(e, null),
				w(e, a),
				k && k.m(e, null),
				w(e, o),
				j && j.m(e, null),
				(u = !0);
		},
		p(t, s) {
			E && E.p && 8 & s && b(E, f, t, t[3], s, ct, it),
				_ && _.p && 8 & s && b(_, I, t, t[3], s, rt, ot),
				V && V.p && 8 & s && b(V, D, t, t[3], s, lt, at),
				k && k.p && 8 & s && b(k, M, t, t[3], s, st, nt),
				j && j.p && 8 & s && b(j, G, t, t[3], s, tt, et),
				(!u || (2 & s && $ !== ($ = y(t[2][t[1]]) + ' svelte-1oha6uh'))) && x(e, 'class', $);
		},
		i(t) {
			u || (c(E, t), c(_, t), c(V, t), c(k, t), c(j, t), (u = !0));
		},
		o(t) {
			r(E, t), r(_, t), r(V, t), r(k, t), r(j, t), (u = !1);
		},
		d(t) {
			t && i(e), E && E.d(t), _ && _.d(t), V && V.d(t), k && k.d(t), j && j.d(t);
		}
	};
}
function Mt(t) {
	let e, s, n, a, o, $, u, f, E, I, _, D, V, M, k, G;
	const j = t[4].default,
		L = h(j, t, t[3], null),
		B = t[4].subarea1,
		P = h(B, t, t[3], wt),
		S = t[4].subarea2,
		z = h(S, t, t[3], xt),
		A = t[4].subarea3,
		C = h(A, t, t[3], vt),
		H = t[4].subarea4,
		T = h(H, t, t[3], mt),
		F = t[4].subarea5,
		N = h(F, t, t[3], ht),
		O = t[4].subarea6,
		U = h(O, t, t[3], ut);
	return {
		c() {
			(e = p('div')),
				(s = p('div')),
				L && L.c(),
				(n = m()),
				(a = p('div')),
				P && P.c(),
				(o = m()),
				($ = p('div')),
				z && z.c(),
				(u = m()),
				(f = p('div')),
				C && C.c(),
				(E = m()),
				(I = p('div')),
				T && T.c(),
				(_ = m()),
				(D = p('div')),
				N && N.c(),
				(V = m()),
				(M = p('div')),
				U && U.c(),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { class: !0 });
			var l = v(e);
			s = d(l, 'DIV', { class: !0 });
			var r = v(s);
			L && L.l(r), r.forEach(i), (n = g(l)), (a = d(l, 'DIV', { class: !0 }));
			var c = v(a);
			P && P.l(c), c.forEach(i), (o = g(l)), ($ = d(l, 'DIV', { class: !0 }));
			var h = v($);
			z && z.l(h), h.forEach(i), (u = g(l)), (f = d(l, 'DIV', { class: !0 }));
			var p = v(f);
			C && C.l(p), p.forEach(i), (E = g(l)), (I = d(l, 'DIV', { class: !0 }));
			var m = v(I);
			T && T.l(m), m.forEach(i), (_ = g(l)), (D = d(l, 'DIV', { class: !0 }));
			var x = v(D);
			N && N.l(x), x.forEach(i), (V = g(l)), (M = d(l, 'DIV', { class: !0 }));
			var y = v(M);
			U && U.l(y), y.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'subarea a svelte-1oha6uh'),
				x(a, 'class', 'subarea b svelte-1oha6uh'),
				x($, 'class', 'subarea c svelte-1oha6uh'),
				x(f, 'class', 'subarea d svelte-1oha6uh'),
				x(I, 'class', 'subarea e svelte-1oha6uh'),
				x(D, 'class', 'subarea f svelte-1oha6uh'),
				x(M, 'class', 'subarea g svelte-1oha6uh'),
				x(e, 'class', (k = y(t[2][t[1]]) + ' svelte-1oha6uh'));
		},
		m(t, r) {
			l(t, e, r),
				w(e, s),
				L && L.m(s, null),
				w(e, n),
				w(e, a),
				P && P.m(a, null),
				w(e, o),
				w(e, $),
				z && z.m($, null),
				w(e, u),
				w(e, f),
				C && C.m(f, null),
				w(e, E),
				w(e, I),
				T && T.m(I, null),
				w(e, _),
				w(e, D),
				N && N.m(D, null),
				w(e, V),
				w(e, M),
				U && U.m(M, null),
				(G = !0);
		},
		p(t, s) {
			L && L.p && 8 & s && b(L, j, t, t[3], s, null, null),
				P && P.p && 8 & s && b(P, B, t, t[3], s, yt, wt),
				z && z.p && 8 & s && b(z, S, t, t[3], s, gt, xt),
				C && C.p && 8 & s && b(C, A, t, t[3], s, dt, vt),
				T && T.p && 8 & s && b(T, H, t, t[3], s, pt, mt),
				N && N.p && 8 & s && b(N, F, t, t[3], s, ft, ht),
				U && U.p && 8 & s && b(U, O, t, t[3], s, $t, ut),
				(!G || (2 & s && k !== (k = y(t[2][t[1]]) + ' svelte-1oha6uh'))) && x(e, 'class', k);
		},
		i(t) {
			G || (c(L, t), c(P, t), c(z, t), c(C, t), c(T, t), c(N, t), c(U, t), (G = !0));
		},
		o(t) {
			r(L, t), r(P, t), r(z, t), r(C, t), r(T, t), r(N, t), r(U, t), (G = !1);
		},
		d(t) {
			t && i(e),
				L && L.d(t),
				P && P.d(t),
				z && z.d(t),
				C && C.d(t),
				T && T.d(t),
				N && N.d(t),
				U && U.d(t);
		}
	};
}
function kt(t) {
	let e, s, n, a, o, $, u, f;
	const E = t[4].subarea1,
		I = h(E, t, t[3], _t),
		_ = t[4].default,
		D = h(_, t, t[3], null),
		V = t[4].subarea2,
		M = h(V, t, t[3], Et);
	return {
		c() {
			(e = p('div')),
				(s = p('div')),
				I && I.c(),
				(n = m()),
				(a = p('div')),
				D && D.c(),
				(o = m()),
				($ = p('div')),
				M && M.c(),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { class: !0 });
			var l = v(e);
			s = d(l, 'DIV', { class: !0 });
			var r = v(s);
			I && I.l(r), r.forEach(i), (n = g(l)), (a = d(l, 'DIV', { class: !0 }));
			var c = v(a);
			D && D.l(c), c.forEach(i), (o = g(l)), ($ = d(l, 'DIV', { class: !0 }));
			var u = v($);
			M && M.l(u), u.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'svelte-1oha6uh'),
				x(a, 'class', 'svelte-1oha6uh'),
				x($, 'class', 'svelte-1oha6uh'),
				x(e, 'class', (u = y(t[2][t[1]]) + ' svelte-1oha6uh'));
		},
		m(t, r) {
			l(t, e, r),
				w(e, s),
				I && I.m(s, null),
				w(e, n),
				w(e, a),
				D && D.m(a, null),
				w(e, o),
				w(e, $),
				M && M.m($, null),
				(f = !0);
		},
		p(t, s) {
			I && I.p && 8 & s && b(I, E, t, t[3], s, It, _t),
				D && D.p && 8 & s && b(D, _, t, t[3], s, null, null),
				M && M.p && 8 & s && b(M, V, t, t[3], s, bt, Et),
				(!f || (2 & s && u !== (u = y(t[2][t[1]]) + ' svelte-1oha6uh'))) && x(e, 'class', u);
		},
		i(t) {
			f || (c(I, t), c(D, t), c(M, t), (f = !0));
		},
		o(t) {
			r(I, t), r(D, t), r(M, t), (f = !1);
		},
		d(t) {
			t && i(e), I && I.d(t), D && D.d(t), M && M.d(t);
		}
	};
}
function Gt(t) {
	let e, s, $, u;
	const f = [kt, Mt, Vt, Dt],
		h = [];
	function p(t, e) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2 === t[0] ? 2 : 3;
	}
	return (
		(e = p(t)),
		(s = h[e] = f[e](t)),
		{
			c() {
				s.c(), ($ = n());
			},
			l(t) {
				s.l(t), ($ = n());
			},
			m(t, s) {
				h[e].m(t, s), l(t, $, s), (u = !0);
			},
			p(t, [n]) {
				let l = e;
				(e = p(t)),
					e === l
						? h[e].p(t, n)
						: (a(),
						  r(h[l], 1, 1, () => {
								h[l] = null;
						  }),
						  o(),
						  (s = h[e]),
						  s ? s.p(t, n) : ((s = h[e] = f[e](t)), s.c()),
						  c(s, 1),
						  s.m($.parentNode, $));
			},
			i(t) {
				u || (c(s), (u = !0));
			},
			o(t) {
				r(s), (u = !1);
			},
			d(t) {
				h[e].d(t), t && i($);
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
		super(), e(this, t, jt, Gt, s, { tipo: 0, variante: 1 });
	}
}
function Bt(t, e, s) {
	const n = t.slice();
	return (n[17] = e[s]), (n[19] = s), n;
}
const Pt = (t) => ({}),
	St = (t) => ({});
function zt(t) {
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
function At(t) {
	let e, s;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [zt] }, $$scope: { ctx: t } }
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
				M(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				16384 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
			(s = I('circle')), this.h();
		},
		l(t) {
			(s = d(t, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), v(s).forEach(i), this.h();
		},
		h() {
			x(s, 'r', e[6]),
				x(s, 'cx', (n = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'cy', (a = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'class', 'svelte-11vyvxs'),
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
	let e, s, n, a, o, $, u, f, y, P, S, A, C, H, T, F;
	E(t[10]),
		(n = new Y({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } })),
		(S = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [At] }, $$scope: { ctx: t } }
		}));
	const N = t[9].hasvideo,
		O = h(N, t, t[14], St),
		U =
			O ||
			(function (t) {
				let e,
					s,
					n = [],
					a = new Map(),
					r = { length: t[5] };
				const o = (t) => t[19];
				for (let l = 0; l < r.length; l += 1) {
					let e = Bt(t, r, l),
						s = o(e);
					a.set(s, (n[l] = Ct(s, e)));
				}
				return {
					c() {
						(e = I('svg')), (s = I('g'));
						for (let t = 0; t < n.length; t += 1) n[t].c();
						this.h();
					},
					l(t) {
						e = d(t, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var l = v(e);
						s = d(l, 'g', { class: !0 }, 1);
						var a = v(s);
						for (let e = 0; e < n.length; e += 1) n[e].l(a);
						a.forEach(i), l.forEach(i), this.h();
					},
					h() {
						x(s, 'class', 'svelte-11vyvxs'),
							x(e, 'viewBox', '0 0 200 200'),
							x(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							x(e, 'class', 'svelte-11vyvxs');
					},
					m(t, a) {
						l(t, e, a), w(e, s);
						for (let e = 0; e < n.length; e += 1) n[e].m(s, null);
					},
					p(t, e) {
						100 & e && ((r = { length: t[5] }), (n = _(n, e, o, 1, t, r, a, s, z, Ct, null, Bt)));
					},
					d(t) {
						t && i(e);
						for (let e = 0; e < n.length; e += 1) n[e].d();
					}
				};
			})(t);
	return {
		c() {
			(e = p('main')),
				(s = p('div')),
				D(n.$$.fragment),
				(a = m()),
				(o = p('div')),
				($ = p('div')),
				(u = p('input')),
				(f = m()),
				(y = p('input')),
				(P = m()),
				D(S.$$.fragment),
				(A = m()),
				(C = p('div')),
				U && U.c(),
				this.h();
		},
		l(t) {
			e = d(t, 'MAIN', { class: !0 });
			var l = v(e);
			s = d(l, 'DIV', { class: !0 });
			var r = v(s);
			V(n.$$.fragment, r), r.forEach(i), (a = g(l)), (o = d(l, 'DIV', { class: !0 }));
			var c = v(o);
			$ = d(c, 'DIV', { class: !0 });
			var h = v($);
			(u = d(h, 'INPUT', { type: !0, step: !0, class: !0 })),
				(f = g(h)),
				(y = d(h, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
				h.forEach(i),
				(P = g(c)),
				V(S.$$.fragment, c),
				c.forEach(i),
				(A = g(l)),
				(C = d(l, 'DIV', { class: !0 }));
			var p = v(C);
			U && U.l(p), p.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'col_13 p_3 bgc_3 svelte-11vyvxs'),
				x(u, 'type', 'number'),
				x(u, 'step', '0.001'),
				x(u, 'class', 'svelte-11vyvxs'),
				x(y, 'type', 'range'),
				x(y, 'min', 0),
				x(y, 'max', Tt),
				x(y, 'class', 'svelte-11vyvxs'),
				x($, 'class', 'controls svelte-11vyvxs'),
				x(o, 'class', 'col_5 dg_0 p_3 pcc svelte-11vyvxs'),
				x(C, 'class', 'BannerMedia col_8 svelte-11vyvxs'),
				x(e, 'class', 'dg bgc_4 svelte-11vyvxs');
		},
		m(r, c) {
			l(r, e, c),
				w(e, s),
				M(n, s, null),
				w(e, a),
				w(e, o),
				w(o, $),
				w($, u),
				k(u, t[2]),
				w($, f),
				w($, y),
				k(y, t[5]),
				w(o, P),
				M(S, o, null),
				w(e, A),
				w(e, C),
				U && U.m(C, null),
				(H = !0),
				T ||
					((F = [
						G(window, 'resize', t[10]),
						G(u, 'input', t[11]),
						G(y, 'change', t[12]),
						G(y, 'input', t[12])
					]),
					(T = !0));
		},
		p(t, [e]) {
			const s = {};
			1 & e && (s.title = t[0]),
				2 & e && (s.subtitle = t[1]),
				n.$set(s),
				4 & e && j(u.value) !== t[2] && k(u, t[2]),
				32 & e && k(y, t[5]);
			const l = {};
			16416 & e && (l.$$scope = { dirty: e, ctx: t }),
				S.$set(l),
				O ? O.p && 16384 & e && b(O, N, t, t[14], e, Pt, St) : U && U.p && 36 & e && U.p(t, e);
		},
		i(t) {
			H || (c(n.$$.fragment, t), c(S.$$.fragment, t), c(U, t), (H = !0));
		},
		o(t) {
			r(n.$$.fragment, t), r(S.$$.fragment, t), r(U, t), (H = !1);
		},
		d(t) {
			t && i(e), L(n), L(S), U && U.d(t), (T = !1), B(F);
		}
	};
}
let Tt = 360;
function Ft(t, e, s) {
	let n,
		l,
		a,
		{ $$slots: r = {}, $$scope: o } = e,
		{ title: c = '' } = e,
		{ text: i = '' } = e,
		$ = 0.618033988749,
		u = X(0, { duration: 500, interpolate: (t, e) => (s) => Math.round((e - t) * s + t) });
	P(t, u, (t) => s(5, (n = t)));
	let { variante: f = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (c = t.title)),
				'text' in t && s(1, (i = t.text)),
				'variante' in t && s(8, (f = t.variante)),
				'$$scope' in t && s(14, (o = t.$$scope));
		}),
		S(u, (n = Tt), n),
		[
			c,
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
			o
		]
	);
}
class Nt extends t {
	constructor(t) {
		super(), e(this, t, Ft, Ht, s, { title: 0, text: 1, variante: 8 });
	}
}
function Ot(t) {
	let e, s, n, a;
	return {
		c() {
			(e = I('div')), (s = $('xxx')), this.h();
		},
		l(t) {
			e = d(t, 'div', { class: !0 }, 1);
			var n = v(e);
			(s = u(n, 'xxx')), n.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'svelte-75ln75');
		},
		m(t, n) {
			l(t, e, n), w(e, s), (a = !0);
		},
		i(t) {
			a ||
				(E(() => {
					n || (n = A(e, Z, {}, !0)), n.run(1);
				}),
				(a = !0));
		},
		o(t) {
			n || (n = A(e, Z, {}, !1)), n.run(0), (a = !1);
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
		p = t[2] && Ot();
	const m = t[7].default,
		g = h(m, t, t[6], null);
	return {
		c() {
			(e = I('text')), p && p.c(), (s = n()), g && g.c(), this.h();
		},
		l(t) {
			e = d(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var l = v(e);
			p && p.l(l), (s = n()), g && g.l(l), l.forEach(i), this.h();
		},
		h() {
			x(e, 'x', t[0]),
				x(e, 'y', t[1]),
				x(e, 'font-size', '55'),
				x(e, 'class', 'draggable svelte-75ln75');
		},
		m(n, a) {
			l(n, e, a),
				p && p.m(e, null),
				w(e, s),
				g && g.m(e, null),
				($ = !0),
				u ||
					((f = [G(window, 'mouseup', t[4]), G(e, 'mousedown', t[3]), G(e, 'mousemove', t[5])]),
					(u = !0));
		},
		p(t, [n]) {
			t[2]
				? p
					? 4 & n && c(p, 1)
					: ((p = Ot()), p.c(), c(p, 1), p.m(e, s))
				: p &&
				  (a(),
				  r(p, 1, 1, () => {
						p = null;
				  }),
				  o()),
				g && g.p && 64 & n && b(g, m, t, t[6], n, null, null),
				(!$ || 1 & n) && x(e, 'x', t[0]),
				(!$ || 2 & n) && x(e, 'y', t[1]);
		},
		i(t) {
			$ || (c(p), c(g, t), ($ = !0));
		},
		o(t) {
			r(p), r(g, t), ($ = !1);
		},
		d(t) {
			t && i(e), p && p.d(), g && g.d(t), (u = !1), B(f);
		}
	};
}
function Rt(t, e, s) {
	let { $$slots: n = {}, $$scope: l } = e,
		{ x: a = 0 } = e,
		{ y: r = 0 } = e,
		o = !1;
	return (
		(t.$$set = (t) => {
			'x' in t && s(0, (a = t.x)),
				'y' in t && s(1, (r = t.y)),
				'$$scope' in t && s(6, (l = t.$$scope));
		}),
		[
			a,
			r,
			o,
			() => {
				s(2, (o = !0));
			},
			function () {
				s(2, (o = !1));
			},
			function (t) {
				o && (s(0, (a += 2.5 * t.movementX)), s(1, (r += 2.5 * t.movementY)));
			},
			l,
			n
		]
	);
}
class qt extends t {
	constructor(t) {
		super(), e(this, t, Rt, Ut, s, { x: 0, y: 1 });
	}
}
function Jt(t) {
	let e, s, n, a, o;
	const $ = t[4].default,
		u = h($, t, t[3], null);
	return {
		c() {
			(e = p('form')), u && u.c(), this.h();
		},
		l(t) {
			e = d(t, 'FORM', { name: !0, class: !0 });
			var s = v(e);
			u && u.l(s), s.forEach(i), this.h();
		},
		h() {
			x(e, 'name', t[0]), x(e, 'class', (s = y(t[2][t[1]]) + ' svelte-25zup8'));
		},
		m(s, r) {
			l(s, e, r), u && u.m(e, null), (n = !0), a || ((o = G(e, 'submit', C(t[5]))), (a = !0));
		},
		p(t, [l]) {
			u && u.p && 8 & l && b(u, $, t, t[3], l, null, null),
				(!n || 1 & l) && x(e, 'name', t[0]),
				(!n || (2 & l && s !== (s = y(t[2][t[1]]) + ' svelte-25zup8'))) && x(e, 'class', s);
		},
		i(t) {
			n || (c(u, t), (n = !0));
		},
		o(t) {
			r(u, t), (n = !1);
		},
		d(t) {
			t && i(e), u && u.d(t), (a = !1), o();
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
			(e = p('input')), this.h();
		},
		l(t) {
			(e = d(t, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(e.value = t[0]),
				x(e, 'placeholder', t[1]),
				x(e, 'type', ''),
				x(e, 'name', ''),
				x(e, 'class', 'svelte-fu16g');
		},
		m(a, r) {
			l(a, e, r), s || ((n = G(e, 'input', t[2])), (s = !0));
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
			(e = I('circle')), this.h();
		},
		l(t) {
			(e = d(t, 'circle', { cx: !0, cy: !0, r: !0, id: !0, fill: !0, stroke: !0, class: !0 }, 1)),
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
				x(e, 'class', 'svelte-10whpjl');
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
		(e = new qt({
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
				M(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				4194304 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
		(e = new qt({ props: { x: pe, y: me, $$slots: { default: [ae] }, $$scope: { ctx: t } } })),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				M(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				4194305 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
function oe(t) {
	let e,
		s,
		$,
		u,
		f,
		h = t[4],
		p = [];
	for (let n = 0; n < h.length; n += 1) p[n] = se(ee(t, h, n));
	let m = t[5],
		g = [];
	for (let n = 0; n < m.length; n += 1) g[n] = le(te(t, m, n));
	const y = (t) =>
		r(g[t], 1, 1, () => {
			g[t] = null;
		});
	let b = t[0],
		E = [];
	for (let n = 0; n < b.length; n += 1) E[n] = re(Zt(t, b, n));
	const _ = (t) =>
		r(E[t], 1, 1, () => {
			E[t] = null;
		});
	return {
		c() {
			(e = I('svg')), (s = I('g'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			$ = n();
			for (let t = 0; t < g.length; t += 1) g[t].c();
			u = n();
			for (let t = 0; t < E.length; t += 1) E[t].c();
			this.h();
		},
		l(t) {
			e = d(t, 'svg', { viewBox: !0, class: !0 }, 1);
			var l = v(e);
			s = d(l, 'g', { transform: !0, class: !0 }, 1);
			var a = v(s);
			for (let e = 0; e < p.length; e += 1) p[e].l(a);
			$ = n();
			for (let e = 0; e < g.length; e += 1) g[e].l(a);
			u = n();
			for (let e = 0; e < E.length; e += 1) E[e].l(a);
			a.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'transform', 'translate(150,150) scale(0.7)'),
				x(s, 'class', 'svelte-10whpjl'),
				x(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				x(e, 'class', 'svelte-10whpjl');
		},
		m(n, a) {
			l(n, e, a), w(e, s);
			for (let t = 0; t < p.length; t += 1) p[t].m(s, null);
			w(s, $);
			for (let t = 0; t < g.length; t += 1) g[t].m(s, null);
			w(s, u);
			for (let t = 0; t < E.length; t += 1) E[t].m(s, null);
			t[10](e), (f = !0);
		},
		p(t, e) {
			if (16 & e) {
				let n;
				for (h = t[4], n = 0; n < h.length; n += 1) {
					const l = ee(t, h, n);
					p[n] ? p[n].p(l, e) : ((p[n] = se(l)), p[n].c(), p[n].m(s, $));
				}
				for (; n < p.length; n += 1) p[n].d(1);
				p.length = h.length;
			}
			if (32 & e) {
				let n;
				for (m = t[5], n = 0; n < m.length; n += 1) {
					const l = te(t, m, n);
					g[n] ? (g[n].p(l, e), c(g[n], 1)) : ((g[n] = le(l)), g[n].c(), c(g[n], 1), g[n].m(s, u));
				}
				for (a(), n = m.length; n < g.length; n += 1) y(n);
				o();
			}
			if (1 & e) {
				let n;
				for (b = t[0], n = 0; n < b.length; n += 1) {
					const l = Zt(t, b, n);
					E[n]
						? (E[n].p(l, e), c(E[n], 1))
						: ((E[n] = re(l)), E[n].c(), c(E[n], 1), E[n].m(s, null));
				}
				for (a(), n = b.length; n < E.length; n += 1) _(n);
				o();
			}
		},
		i(t) {
			if (!f) {
				for (let t = 0; t < m.length; t += 1) c(g[t]);
				for (let t = 0; t < b.length; t += 1) c(E[t]);
				f = !0;
			}
		},
		o(t) {
			g = g.filter(Boolean);
			for (let e = 0; e < g.length; e += 1) r(g[e]);
			E = E.filter(Boolean);
			for (let e = 0; e < E.length; e += 1) r(E[e]);
			f = !1;
		},
		d(s) {
			s && i(e), T(p, s), T(g, s), T(E, s), t[10](null);
		}
	};
}
function ce(t) {
	let e, s, n, a, o;
	function $(e) {
		t[9](e);
	}
	let u = { placeholder: 'Your word' };
	return (
		void 0 !== t[1] && (u.value = t[1]),
		(e = new Xt({ props: u })),
		F.push(() => N(e, 'value', $)),
		(a = new q({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				D(e.$$.fragment), (n = m()), D(a.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t), (n = g(t)), V(a.$$.fragment, t);
			},
			m(t, s) {
				M(e, t, s), l(t, n, s), M(a, t, s), (o = !0);
			},
			p(t, n) {
				const l = {};
				!s && 2 & n && ((s = !0), (l.value = t[1]), O(() => (s = !1))), e.$set(l);
			},
			i(t) {
				o || (c(e.$$.fragment, t), c(a.$$.fragment, t), (o = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(a.$$.fragment, t), (o = !1);
			},
			d(t) {
				L(e, t), t && i(n), L(a, t);
			}
		}
	);
}
function ie(t) {
	let e, s, n, a, o;
	return (
		(s = new Y({
			props: {
				tipo: 3,
				variante: 7,
				title: 'Meta-Mapa +0+1234',
				subtitle: 'Escribe y ordena conceptos en el mapa +0+1234'
			}
		})),
		(a = new Kt({ props: { variante: 1, $$slots: { default: [ce] }, $$scope: { ctx: t } } })),
		a.$on('submit', t[6]),
		{
			c() {
				(e = p('div')), D(s.$$.fragment), (n = m()), D(a.$$.fragment), this.h();
			},
			l(t) {
				e = d(t, 'DIV', { slot: !0, class: !0 });
				var l = v(e);
				V(s.$$.fragment, l), (n = g(l)), V(a.$$.fragment, l), l.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea1'), x(e, 'class', 'svelte-10whpjl');
			},
			m(t, r) {
				l(t, e, r), M(s, e, null), w(e, n), M(a, e, null), (o = !0);
			},
			p(t, e) {
				const s = {};
				4194306 & e && (s.$$scope = { dirty: e, ctx: t }), a.$set(s);
			},
			i(t) {
				o || (c(s.$$.fragment, t), c(a.$$.fragment, t), (o = !0));
			},
			o(t) {
				r(s.$$.fragment, t), r(a.$$.fragment, t), (o = !1);
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
				M(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				4194304 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
				(e = p('div')), D(s.$$.fragment), this.h();
			},
			l(t) {
				e = d(t, 'DIV', { slot: !0, class: !0 });
				var n = v(e);
				V(s.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea2'), x(e, 'class', 'svelte-10whpjl');
			},
			m(t, a) {
				l(t, e, a), M(s, e, null), (n = !0);
			},
			p(t, e) {
				const n = {};
				4194308 & e && (n.$$scope = { dirty: e, ctx: t }), s.$set(n);
			},
			i(t) {
				n || (c(s.$$.fragment, t), (n = !0));
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
function he(t) {
	let e, s;
	return (
		(e = new Lt({
			props: {
				variante: 0,
				$$slots: { subarea2: [fe], subarea1: [ie], default: [oe] },
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
				M(e, t, n), (s = !0);
			},
			p(t, [s]) {
				const n = {};
				4194311 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
let pe = 0,
	me = 0;
function de(t, e, s) {
	let n = [],
		l = '',
		a = { width: 1e3, height: 1e3 },
		r = a.width / 4,
		o = a.width / 2;
	let c = null;
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
		c,
		a,
		[
			{ id: 'circulogrande', cx: o, cy: o, r: o },
			{ id: 'circuloizda', cx: r, cy: o, r: r },
			{ id: 'circulodcha', cx: 3 * r, cy: o, r: r }
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
		() => i(c),
		function (t) {
			(l = t), s(1, l);
		},
		function (t) {
			F[t ? 'unshift' : 'push'](() => {
				(c = t), s(2, c);
			});
		}
	];
}
class ve extends t {
	constructor(t) {
		super(), e(this, t, de, he, s, {});
	}
}
function ge(t) {
	let e, s;
	const n = t[2].default,
		a = h(n, t, t[1], null);
	return {
		c() {
			(e = p('div')), a && a.c(), this.h();
		},
		l(t) {
			e = d(t, 'DIV', { class: !0 });
			var s = v(e);
			a && a.l(s), s.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'Alert svelte-1wpv962'), R(e, 'haserror', !t[0]);
		},
		m(t, n) {
			l(t, e, n), a && a.m(e, null), (s = !0);
		},
		p(t, [s]) {
			a && a.p && 2 & s && b(a, n, t, t[1], s, null, null), 1 & s && R(e, 'haserror', !t[0]);
		},
		i(t) {
			s || (c(a, t), (s = !0));
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
function we(t) {
	let e, s, n, a, o;
	function $(e) {
		t[5](e);
	}
	let u = {};
	return (
		void 0 !== t[0] && (u.value = t[0]),
		(e = new Xt({ props: u })),
		F.push(() => N(e, 'value', $)),
		(a = new q({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				D(e.$$.fragment), (n = m()), D(a.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t), (n = g(t)), V(a.$$.fragment, t);
			},
			m(t, s) {
				M(e, t, s), l(t, n, s), M(a, t, s), (o = !0);
			},
			p(t, n) {
				const l = {};
				!s && 1 & n && ((s = !0), (l.value = t[0]), O(() => (s = !1))), e.$set(l);
				const r = {};
				1 & n && (r.valorinput = t[0]), a.$set(r);
			},
			i(t) {
				o || (c(e.$$.fragment, t), c(a.$$.fragment, t), (o = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(a.$$.fragment, t), (o = !1);
			},
			d(t) {
				L(e, t), t && i(n), L(a, t);
			}
		}
	);
}
function be(t) {
	let e, s;
	return (
		(e = new ye({ props: { $$slots: { default: [Ee] }, $$scope: { ctx: t } } })),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				M(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				516 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
function Ee(t) {
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
function Ie(t) {
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
function _e(t) {
	let e, s;
	return (
		(e = new W({
			props: {
				tipo: 2,
				variante: 6,
				href: 'https://tanach.us/Server.txt?Genesis*&content=Consonants',
				target: '_blank',
				$$slots: { default: [Ie] },
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
				M(e, t, n), (s = !0);
			},
			p(t, s) {
				const n = {};
				512 & s && (n.$$scope = { dirty: s, ctx: t }), e.$set(n);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
function De(t) {
	let e, s, n, f, h, y, b, E, I, _, k, G, j, B, P, S;
	(e = new Y({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(E = new Kt({ props: { variante: 1, $$slots: { default: [we] }, $$scope: { ctx: t } } })),
		E.$on('submit', t[4]);
	let z = 1 == t[1] && be(t);
	return (
		(P = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [_e] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				D(e.$$.fragment),
					(s = m()),
					(n = p('main')),
					(f = p('h2')),
					(h = $(t[3])),
					(y = m()),
					(b = p('div')),
					D(E.$$.fragment),
					(I = m()),
					z && z.c(),
					(_ = m()),
					(k = p('footer')),
					(G = p('small')),
					(j = $('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					(B = m()),
					D(P.$$.fragment),
					this.h();
			},
			l(l) {
				V(e.$$.fragment, l), (s = g(l)), (n = d(l, 'MAIN', { class: !0 }));
				var a = v(n);
				f = d(a, 'H2', { class: !0 });
				var r = v(f);
				(h = u(r, t[3])), r.forEach(i), (y = g(a)), (b = d(a, 'DIV', { class: !0 }));
				var o = v(b);
				V(E.$$.fragment, o),
					o.forEach(i),
					(I = g(a)),
					z && z.l(a),
					a.forEach(i),
					(_ = g(l)),
					(k = d(l, 'FOOTER', { class: !0 }));
				var c = v(k);
				G = d(c, 'SMALL', { class: !0 });
				var $ = v(G);
				(j = u($, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					$.forEach(i),
					(B = g(c)),
					V(P.$$.fragment, c),
					c.forEach(i),
					this.h();
			},
			h() {
				x(f, 'class', 'result svelte-9o2nt8'),
					x(b, 'class', 'position-form svelte-9o2nt8'),
					x(n, 'class', 'svelte-9o2nt8'),
					x(G, 'class', 'svelte-9o2nt8'),
					x(k, 'class', 'svelte-9o2nt8');
			},
			m(t, a) {
				M(e, t, a),
					l(t, s, a),
					l(t, n, a),
					w(n, f),
					w(f, h),
					w(n, y),
					w(n, b),
					M(E, b, null),
					w(n, I),
					z && z.m(n, null),
					l(t, _, a),
					l(t, k, a),
					w(k, G),
					w(G, j),
					w(k, B),
					M(P, k, null),
					(S = !0);
			},
			p(t, [e]) {
				(!S || 8 & e) && U(h, t[3]);
				const s = {};
				513 & e && (s.$$scope = { dirty: e, ctx: t }),
					E.$set(s),
					1 == t[1]
						? z
							? (z.p(t, e), 2 & e && c(z, 1))
							: ((z = be(t)), z.c(), c(z, 1), z.m(n, null))
						: z &&
						  (a(),
						  r(z, 1, 1, () => {
								z = null;
						  }),
						  o());
				const l = {};
				512 & e && (l.$$scope = { dirty: e, ctx: t }), P.$set(l);
			},
			i(t) {
				S || (c(e.$$.fragment, t), c(E.$$.fragment, t), c(z), c(P.$$.fragment, t), (S = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(E.$$.fragment, t), r(z), r(P.$$.fragment, t), (S = !1);
			},
			d(t) {
				L(e, t), t && i(s), t && i(n), L(E), z && z.d(), t && i(_), t && i(k), L(P);
			}
		}
	);
}
function Ve(t, e, s) {
	let n,
		l = '',
		a = !1,
		r = '',
		o = [];
	return (
		s(3, (n = 0)),
		[
			l,
			a,
			r,
			n,
			function () {
				s(1, (a = !1)), s(3, (n = 0)), s(0, l), (o = l.split('')), s(2, (r = ''));
				for (const t of o)
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
class Me extends t {
	constructor(t) {
		super(), e(this, t, Ve, De, s, {});
	}
}
function ke(t) {
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
				M(e, t, n), (s = !0);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
function Ge(t) {
	let e, s;
	return (
		(e = new Me({})),
		{
			c() {
				D(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				M(e, t, n), (s = !0);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
function je(t) {
	let e, s, n, a, o, $, u, f, h, y;
	return (
		(n = new Y({
			props: { tipo: 1, variante: 1, title: J[2].title, subtitle: J[2].subtitle, text: J[2].text }
		})),
		(o = new Nt({
			props: {
				title: 'La Divina Proporción',
				text:
					'<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>'
			}
		})),
		(u = new K({
			props: { id: 't0t', variante: 0, $$slots: { default: [ke] }, $$scope: { ctx: t } }
		})),
		(h = new K({
			props: { id: 'gematria', variante: 4, $$slots: { default: [Ge] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = p('div')),
					(s = p('div')),
					D(n.$$.fragment),
					(a = m()),
					D(o.$$.fragment),
					($ = m()),
					D(u.$$.fragment),
					(f = m()),
					D(h.$$.fragment),
					this.h();
			},
			l(t) {
				e = d(t, 'DIV', { class: !0 });
				var l = v(e);
				s = d(l, 'DIV', { class: !0 });
				var r = v(s);
				V(n.$$.fragment, r),
					r.forEach(i),
					l.forEach(i),
					(a = g(t)),
					V(o.$$.fragment, t),
					($ = g(t)),
					V(u.$$.fragment, t),
					(f = g(t)),
					V(h.$$.fragment, t),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 p_3 dg_0 mh_0 pcc bgc_0 c_5 mh_2 tac'), x(e, 'class', 'dg');
			},
			m(t, r) {
				l(t, e, r),
					w(e, s),
					M(n, s, null),
					l(t, a, r),
					M(o, t, r),
					l(t, $, r),
					M(u, t, r),
					l(t, f, r),
					M(h, t, r),
					(y = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
				const n = {};
				1 & e && (n.$$scope = { dirty: e, ctx: t }), h.$set(n);
			},
			i(t) {
				y ||
					(c(n.$$.fragment, t),
					c(o.$$.fragment, t),
					c(u.$$.fragment, t),
					c(h.$$.fragment, t),
					(y = !0));
			},
			o(t) {
				r(n.$$.fragment, t),
					r(o.$$.fragment, t),
					r(u.$$.fragment, t),
					r(h.$$.fragment, t),
					(y = !1);
			},
			d(t) {
				t && i(e), L(n), t && i(a), L(o, t), t && i($), L(u, t), t && i(f), L(h, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, je, s, {});
	}
}
