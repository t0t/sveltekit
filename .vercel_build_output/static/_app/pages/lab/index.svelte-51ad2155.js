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
	M as m,
	e as d,
	j as p,
	c as h,
	a as v,
	l as g,
	o as x,
	I as w,
	g as b,
	O as y,
	Q as E,
	E as I,
	a3 as D,
	p as V,
	q as _,
	r as k,
	a4 as M,
	H as G,
	a5 as j,
	y as P,
	K as L,
	a0 as S,
	a6 as B,
	a7 as T,
	R as q,
	a8 as A,
	F as C,
	J as H,
	T as F,
	U as N,
	V as O,
	h as U,
	G as z
} from '../../chunks/index-d91e1ed8.js';
import { B as R, c as J } from '../../chunks/Grid.svelte-393f5de7.js';
import { H as Y } from '../../chunks/Header-2dba8d98.js';
import { S as K } from '../../chunks/Section-2e905ef9.js';
import { L as Q, a as W } from '../../chunks/ListItem-df6649ee.js';
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
	mt = (t) => ({}),
	dt = (t) => ({}),
	pt = (t) => ({}),
	ht = (t) => ({}),
	vt = (t) => ({}),
	gt = (t) => ({}),
	xt = (t) => ({}),
	wt = (t) => ({}),
	bt = (t) => ({}),
	yt = (t) => ({}),
	Et = (t) => ({}),
	It = (t) => ({}),
	Dt = (t) => ({});
function Vt(t) {
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
function _t(t) {
	let e, s, n, a, c, $, u;
	const f = t[4].slot_5,
		E = m(f, t, t[3], it),
		I = t[4].slot_4,
		D = m(I, t, t[3], ct),
		V = t[4].slot_3,
		_ = m(V, t, t[3], at),
		k = t[4].slot_2,
		M = m(k, t, t[3], nt),
		G = t[4].slot_1,
		j = m(G, t, t[3], et);
	return {
		c() {
			(e = d('div')),
				E && E.c(),
				(s = p()),
				D && D.c(),
				(n = p()),
				_ && _.c(),
				(a = p()),
				M && M.c(),
				(c = p()),
				j && j.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			E && E.l(l),
				(s = g(l)),
				D && D.l(l),
				(n = g(l)),
				_ && _.l(l),
				(a = g(l)),
				M && M.l(l),
				(c = g(l)),
				j && j.l(l),
				l.forEach(i),
				this.h();
		},
		h() {
			x(e, 'class', ($ = w(t[2][t[1]]) + ' svelte-1x4bdg'));
		},
		m(t, r) {
			l(t, e, r),
				E && E.m(e, null),
				b(e, s),
				D && D.m(e, null),
				b(e, n),
				_ && _.m(e, null),
				b(e, a),
				M && M.m(e, null),
				b(e, c),
				j && j.m(e, null),
				(u = !0);
		},
		p(t, s) {
			E && E.p && 8 & s && y(E, f, t, t[3], s, ot, it),
				D && D.p && 8 & s && y(D, I, t, t[3], s, rt, ct),
				_ && _.p && 8 & s && y(_, V, t, t[3], s, lt, at),
				M && M.p && 8 & s && y(M, k, t, t[3], s, st, nt),
				j && j.p && 8 & s && y(j, G, t, t[3], s, tt, et),
				(!u || (2 & s && $ !== ($ = w(t[2][t[1]]) + ' svelte-1x4bdg'))) && x(e, 'class', $);
		},
		i(t) {
			u || (o(E, t), o(D, t), o(_, t), o(M, t), o(j, t), (u = !0));
		},
		o(t) {
			r(E, t), r(D, t), r(_, t), r(M, t), r(j, t), (u = !1);
		},
		d(t) {
			t && i(e), E && E.d(t), D && D.d(t), _ && _.d(t), M && M.d(t), j && j.d(t);
		}
	};
}
function kt(t) {
	let e, s, n, a, c, $, u, f, E, I, D, V, _, k, M, G;
	const j = t[4].default,
		P = m(j, t, t[3], null),
		L = t[4].subarea1,
		S = m(L, t, t[3], bt),
		B = t[4].subarea2,
		T = m(B, t, t[3], xt),
		q = t[4].subarea3,
		A = m(q, t, t[3], vt),
		C = t[4].subarea4,
		H = m(C, t, t[3], pt),
		F = t[4].subarea5,
		N = m(F, t, t[3], mt),
		O = t[4].subarea6,
		U = m(O, t, t[3], ut);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				P && P.c(),
				(n = p()),
				(a = d('div')),
				S && S.c(),
				(c = p()),
				($ = d('div')),
				T && T.c(),
				(u = p()),
				(f = d('div')),
				A && A.c(),
				(E = p()),
				(I = d('div')),
				H && H.c(),
				(D = p()),
				(V = d('div')),
				N && N.c(),
				(_ = p()),
				(k = d('div')),
				U && U.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			s = h(l, 'DIV', { class: !0 });
			var r = v(s);
			P && P.l(r), r.forEach(i), (n = g(l)), (a = h(l, 'DIV', { class: !0 }));
			var o = v(a);
			S && S.l(o), o.forEach(i), (c = g(l)), ($ = h(l, 'DIV', { class: !0 }));
			var m = v($);
			T && T.l(m), m.forEach(i), (u = g(l)), (f = h(l, 'DIV', { class: !0 }));
			var d = v(f);
			A && A.l(d), d.forEach(i), (E = g(l)), (I = h(l, 'DIV', { class: !0 }));
			var p = v(I);
			H && H.l(p), p.forEach(i), (D = g(l)), (V = h(l, 'DIV', { class: !0 }));
			var x = v(V);
			N && N.l(x), x.forEach(i), (_ = g(l)), (k = h(l, 'DIV', { class: !0 }));
			var w = v(k);
			U && U.l(w), w.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'subarea a svelte-1x4bdg'),
				x(a, 'class', 'subarea b svelte-1x4bdg'),
				x($, 'class', 'subarea c svelte-1x4bdg'),
				x(f, 'class', 'subarea d svelte-1x4bdg'),
				x(I, 'class', 'subarea e svelte-1x4bdg'),
				x(V, 'class', 'subarea f svelte-1x4bdg'),
				x(k, 'class', 'subarea g svelte-1x4bdg'),
				x(e, 'class', (M = w(t[2][t[1]]) + ' svelte-1x4bdg'));
		},
		m(t, r) {
			l(t, e, r),
				b(e, s),
				P && P.m(s, null),
				b(e, n),
				b(e, a),
				S && S.m(a, null),
				b(e, c),
				b(e, $),
				T && T.m($, null),
				b(e, u),
				b(e, f),
				A && A.m(f, null),
				b(e, E),
				b(e, I),
				H && H.m(I, null),
				b(e, D),
				b(e, V),
				N && N.m(V, null),
				b(e, _),
				b(e, k),
				U && U.m(k, null),
				(G = !0);
		},
		p(t, s) {
			P && P.p && 8 & s && y(P, j, t, t[3], s, null, null),
				S && S.p && 8 & s && y(S, L, t, t[3], s, wt, bt),
				T && T.p && 8 & s && y(T, B, t, t[3], s, gt, xt),
				A && A.p && 8 & s && y(A, q, t, t[3], s, ht, vt),
				H && H.p && 8 & s && y(H, C, t, t[3], s, dt, pt),
				N && N.p && 8 & s && y(N, F, t, t[3], s, ft, mt),
				U && U.p && 8 & s && y(U, O, t, t[3], s, $t, ut),
				(!G || (2 & s && M !== (M = w(t[2][t[1]]) + ' svelte-1x4bdg'))) && x(e, 'class', M);
		},
		i(t) {
			G || (o(P, t), o(S, t), o(T, t), o(A, t), o(H, t), o(N, t), o(U, t), (G = !0));
		},
		o(t) {
			r(P, t), r(S, t), r(T, t), r(A, t), r(H, t), r(N, t), r(U, t), (G = !1);
		},
		d(t) {
			t && i(e),
				P && P.d(t),
				S && S.d(t),
				T && T.d(t),
				A && A.d(t),
				H && H.d(t),
				N && N.d(t),
				U && U.d(t);
		}
	};
}
function Mt(t) {
	let e, s, n, a, c, $, u, f;
	const E = t[4].subarea1,
		I = m(E, t, t[3], Dt),
		D = t[4].default,
		V = m(D, t, t[3], null),
		_ = t[4].subarea2,
		k = m(_, t, t[3], Et);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				I && I.c(),
				(n = p()),
				(a = d('div')),
				V && V.c(),
				(c = p()),
				($ = d('div')),
				k && k.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			s = h(l, 'DIV', { class: !0 });
			var r = v(s);
			I && I.l(r), r.forEach(i), (n = g(l)), (a = h(l, 'DIV', { class: !0 }));
			var o = v(a);
			V && V.l(o), o.forEach(i), (c = g(l)), ($ = h(l, 'DIV', { class: !0 }));
			var u = v($);
			k && k.l(u), u.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'svelte-1x4bdg'),
				x(a, 'class', 'svelte-1x4bdg'),
				x($, 'class', 'svelte-1x4bdg'),
				x(e, 'class', (u = w(t[2][t[1]]) + ' svelte-1x4bdg'));
		},
		m(t, r) {
			l(t, e, r),
				b(e, s),
				I && I.m(s, null),
				b(e, n),
				b(e, a),
				V && V.m(a, null),
				b(e, c),
				b(e, $),
				k && k.m($, null),
				(f = !0);
		},
		p(t, s) {
			I && I.p && 8 & s && y(I, E, t, t[3], s, It, Dt),
				V && V.p && 8 & s && y(V, D, t, t[3], s, null, null),
				k && k.p && 8 & s && y(k, _, t, t[3], s, yt, Et),
				(!f || (2 & s && u !== (u = w(t[2][t[1]]) + ' svelte-1x4bdg'))) && x(e, 'class', u);
		},
		i(t) {
			f || (o(I, t), o(V, t), o(k, t), (f = !0));
		},
		o(t) {
			r(I, t), r(V, t), r(k, t), (f = !1);
		},
		d(t) {
			t && i(e), I && I.d(t), V && V.d(t), k && k.d(t);
		}
	};
}
function Gt(t) {
	let e, s, $, u;
	const f = [Mt, kt, _t, Vt],
		m = [];
	function d(t, e) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2 === t[0] ? 2 : 3;
	}
	return (
		(e = d(t)),
		(s = m[e] = f[e](t)),
		{
			c() {
				s.c(), ($ = n());
			},
			l(t) {
				s.l(t), ($ = n());
			},
			m(t, s) {
				m[e].m(t, s), l(t, $, s), (u = !0);
			},
			p(t, [n]) {
				let l = e;
				(e = d(t)),
					e === l
						? m[e].p(t, n)
						: (a(),
						  r(m[l], 1, 1, () => {
								m[l] = null;
						  }),
						  c(),
						  (s = m[e]),
						  s ? s.p(t, n) : ((s = m[e] = f[e](t)), s.c()),
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
				m[e].d(t), t && i($);
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
class Pt extends t {
	constructor(t) {
		super(), e(this, t, jt, Gt, s, { tipo: 0, variante: 1 });
	}
}
function Lt(t, e, s) {
	const n = t.slice();
	return (n[17] = e[s]), (n[19] = s), n;
}
const St = (t) => ({}),
	Bt = (t) => ({});
function Tt(t, e) {
	let s, n, a;
	return {
		key: t,
		first: null,
		c() {
			(s = I('circle')), this.h();
		},
		l(t) {
			(s = h(t, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), v(s).forEach(i), this.h();
		},
		h() {
			x(s, 'r', e[6]),
				x(s, 'cx', (n = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'cy', (a = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'class', 'svelte-1wmsvox'),
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
function At(t) {
	let e, s;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [qt] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
			}
		}
	);
}
function Ct(t) {
	let e, s, n, a, c, $, u, f, w, S, B, q, A, C, H;
	E(t[10]), (e = new Y({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } }));
	const F = t[9].hasvideo,
		N = m(F, t, t[14], Bt),
		O =
			N ||
			(function (t) {
				let e,
					s,
					n = [],
					a = new Map(),
					r = { length: t[5] };
				const c = (t) => t[19];
				for (let l = 0; l < r.length; l += 1) {
					let e = Lt(t, r, l),
						s = c(e);
					a.set(s, (n[l] = Tt(s, e)));
				}
				return {
					c() {
						(e = I('svg')), (s = I('g'));
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
						x(s, 'class', 'svelte-1wmsvox'),
							x(e, 'viewBox', '0 0 200 200'),
							x(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							x(e, 'class', 'svelte-1wmsvox');
					},
					m(t, a) {
						l(t, e, a), b(e, s);
						for (let e = 0; e < n.length; e += 1) n[e].m(s, null);
					},
					p(t, e) {
						100 & e && ((r = { length: t[5] }), (n = D(n, e, c, 1, t, r, a, s, T, Tt, null, Lt)));
					},
					d(t) {
						t && i(e);
						for (let e = 0; e < n.length; e += 1) n[e].d();
					}
				};
			})(t);
	return (
		(q = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [At] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				V(e.$$.fragment),
					(s = p()),
					(n = d('main')),
					(a = d('div')),
					O && O.c(),
					(c = p()),
					($ = d('div')),
					(u = d('div')),
					(f = d('input')),
					(w = p()),
					(S = d('input')),
					(B = p()),
					V(q.$$.fragment),
					this.h();
			},
			l(t) {
				_(e.$$.fragment, t), (s = g(t)), (n = h(t, 'MAIN', { class: !0 }));
				var l = v(n);
				a = h(l, 'DIV', { class: !0 });
				var r = v(a);
				O && O.l(r), r.forEach(i), (c = g(l)), ($ = h(l, 'DIV', { class: !0 }));
				var o = v($);
				u = h(o, 'DIV', { class: !0 });
				var m = v(u);
				(f = h(m, 'INPUT', { type: !0, step: !0, class: !0 })),
					(w = g(m)),
					(S = h(m, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					m.forEach(i),
					(B = g(o)),
					_(q.$$.fragment, o),
					o.forEach(i),
					l.forEach(i),
					this.h();
			},
			h() {
				x(a, 'class', 'BannerMedia svelte-1wmsvox'),
					x(f, 'type', 'number'),
					x(f, 'step', '0.001'),
					x(f, 'class', 'svelte-1wmsvox'),
					x(S, 'type', 'range'),
					x(S, 'min', 0),
					x(S, 'max', Ht),
					x(S, 'class', 'svelte-1wmsvox'),
					x(u, 'class', 'controls svelte-1wmsvox'),
					x($, 'class', 'PhiSvgText svelte-1wmsvox'),
					x(n, 'class', 'PhiSvg svelte-1wmsvox');
			},
			m(r, o) {
				k(e, r, o),
					l(r, s, o),
					l(r, n, o),
					b(n, a),
					O && O.m(a, null),
					b(n, c),
					b(n, $),
					b($, u),
					b(u, f),
					M(f, t[2]),
					b(u, w),
					b(u, S),
					M(S, t[5]),
					b($, B),
					k(q, $, null),
					(A = !0),
					C ||
						((H = [
							G(window, 'resize', t[10]),
							G(f, 'input', t[11]),
							G(S, 'change', t[12]),
							G(S, 'input', t[12])
						]),
						(C = !0));
			},
			p(t, [s]) {
				const n = {};
				1 & s && (n.title = t[0]),
					2 & s && (n.subtitle = t[1]),
					e.$set(n),
					N ? N.p && 16384 & s && y(N, F, t, t[14], s, St, Bt) : O && O.p && 36 & s && O.p(t, s),
					4 & s && j(f.value) !== t[2] && M(f, t[2]),
					32 & s && M(S, t[5]);
				const l = {};
				16416 & s && (l.$$scope = { dirty: s, ctx: t }), q.$set(l);
			},
			i(t) {
				A || (o(e.$$.fragment, t), o(O, t), o(q.$$.fragment, t), (A = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(O, t), r(q.$$.fragment, t), (A = !1);
			},
			d(t) {
				P(e, t), t && i(s), t && i(n), O && O.d(t), P(q), (C = !1), L(H);
			}
		}
	);
}
let Ht = 360;
function Ft(t, e, s) {
	let n,
		l,
		a,
		{ $$slots: r = {}, $$scope: c } = e,
		{ title: o = '' } = e,
		{ text: i = '' } = e,
		$ = 0.618033988749,
		u = X(0, { duration: 500, interpolate: (t, e) => (s) => Math.round((e - t) * s + t) });
	S(t, u, (t) => s(5, (n = t)));
	let { variante: f = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (o = t.title)),
				'text' in t && s(1, (i = t.text)),
				'variante' in t && s(8, (f = t.variante)),
				'$$scope' in t && s(14, (c = t.$$scope));
		}),
		B(u, (n = Ht), n),
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
				B(u, (n = n > 0 ? 0 : Ht), n);
			},
			c
		]
	);
}
class Nt extends t {
	constructor(t) {
		super(), e(this, t, Ft, Ct, s, { title: 0, text: 1, variante: 8 });
	}
}
function Ot(t) {
	let e, s, n, a;
	return {
		c() {
			(e = I('div')), (s = $('xxx')), this.h();
		},
		l(t) {
			e = h(t, 'div', { class: !0 }, 1);
			var n = v(e);
			(s = u(n, 'xxx')), n.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'svelte-gt640');
		},
		m(t, n) {
			l(t, e, n), b(e, s), (a = !0);
		},
		i(t) {
			a ||
				(E(() => {
					n || (n = q(e, Z, {}, !0)), n.run(1);
				}),
				(a = !0));
		},
		o(t) {
			n || (n = q(e, Z, {}, !1)), n.run(0), (a = !1);
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
	const p = t[7].default,
		g = m(p, t, t[6], null);
	return {
		c() {
			(e = I('text')), d && d.c(), (s = n()), g && g.c(), this.h();
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
				x(e, 'class', 'draggable svelte-gt640');
		},
		m(n, a) {
			l(n, e, a),
				d && d.m(e, null),
				b(e, s),
				g && g.m(e, null),
				($ = !0),
				u ||
					((f = [G(window, 'mouseup', t[4]), G(e, 'mousedown', t[3]), G(e, 'mousemove', t[5])]),
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
				g && g.p && 64 & n && y(g, p, t, t[6], n, null, null),
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
			t && i(e), d && d.d(), g && g.d(t), (u = !1), L(f);
		}
	};
}
function zt(t, e, s) {
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
		super(), e(this, t, zt, Ut, s, { x: 0, y: 1 });
	}
}
function Jt(t) {
	let e, s, n, a, c;
	const $ = t[4].default,
		u = m($, t, t[3], null);
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
			x(e, 'name', t[0]), x(e, 'class', (s = w(t[2][t[1]]) + ' svelte-1n4y40t'));
		},
		m(s, r) {
			l(s, e, r), u && u.m(e, null), (n = !0), a || ((c = G(e, 'submit', A(t[5]))), (a = !0));
		},
		p(t, [l]) {
			u && u.p && 8 & l && y(u, $, t, t[3], l, null, null),
				(!n || 1 & l) && x(e, 'name', t[0]),
				(!n || (2 & l && s !== (s = w(t[2][t[1]]) + ' svelte-1n4y40t'))) && x(e, 'class', s);
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
				C(t, e);
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
				x(e, 'class', 'svelte-1ieu7i1');
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
				x(e, 'class', 'svelte-ew5ehc');
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
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
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
		(e = new Rt({ props: { x: de, y: pe, $$slots: { default: [ae] }, $$scope: { ctx: t } } })),
		{
			c() {
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
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
		m = t[4],
		d = [];
	for (let n = 0; n < m.length; n += 1) d[n] = se(ee(t, m, n));
	let p = t[5],
		g = [];
	for (let n = 0; n < p.length; n += 1) g[n] = le(te(t, p, n));
	const w = (t) =>
		r(g[t], 1, 1, () => {
			g[t] = null;
		});
	let y = t[0],
		E = [];
	for (let n = 0; n < y.length; n += 1) E[n] = re(Zt(t, y, n));
	const D = (t) =>
		r(E[t], 1, 1, () => {
			E[t] = null;
		});
	return {
		c() {
			(e = I('svg')), (s = I('g'));
			for (let t = 0; t < d.length; t += 1) d[t].c();
			$ = n();
			for (let t = 0; t < g.length; t += 1) g[t].c();
			u = n();
			for (let t = 0; t < E.length; t += 1) E[t].c();
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
			for (let e = 0; e < E.length; e += 1) E[e].l(a);
			a.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'transform', 'translate(150,150) scale(0.7)'),
				x(s, 'class', 'svelte-ew5ehc'),
				x(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				x(e, 'class', 'svelte-ew5ehc');
		},
		m(n, a) {
			l(n, e, a), b(e, s);
			for (let t = 0; t < d.length; t += 1) d[t].m(s, null);
			b(s, $);
			for (let t = 0; t < g.length; t += 1) g[t].m(s, null);
			b(s, u);
			for (let t = 0; t < E.length; t += 1) E[t].m(s, null);
			t[10](e), (f = !0);
		},
		p(t, e) {
			if (16 & e) {
				let n;
				for (m = t[4], n = 0; n < m.length; n += 1) {
					const l = ee(t, m, n);
					d[n] ? d[n].p(l, e) : ((d[n] = se(l)), d[n].c(), d[n].m(s, $));
				}
				for (; n < d.length; n += 1) d[n].d(1);
				d.length = m.length;
			}
			if (32 & e) {
				let n;
				for (p = t[5], n = 0; n < p.length; n += 1) {
					const l = te(t, p, n);
					g[n] ? (g[n].p(l, e), o(g[n], 1)) : ((g[n] = le(l)), g[n].c(), o(g[n], 1), g[n].m(s, u));
				}
				for (a(), n = p.length; n < g.length; n += 1) w(n);
				c();
			}
			if (1 & e) {
				let n;
				for (y = t[0], n = 0; n < y.length; n += 1) {
					const l = Zt(t, y, n);
					E[n]
						? (E[n].p(l, e), o(E[n], 1))
						: ((E[n] = re(l)), E[n].c(), o(E[n], 1), E[n].m(s, null));
				}
				for (a(), n = y.length; n < E.length; n += 1) D(n);
				c();
			}
		},
		i(t) {
			if (!f) {
				for (let t = 0; t < p.length; t += 1) o(g[t]);
				for (let t = 0; t < y.length; t += 1) o(E[t]);
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
			s && i(e), H(d, s), H(g, s), H(E, s), t[10](null);
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
		F.push(() => N(e, 'value', $)),
		(a = new R({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				V(e.$$.fragment), (n = p()), V(a.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t), (n = g(t)), _(a.$$.fragment, t);
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
				P(e, t), t && i(n), P(a, t);
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
				(e = d('div')), V(s.$$.fragment), (n = p()), V(a.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var l = v(e);
				_(s.$$.fragment, l), (n = g(l)), _(a.$$.fragment, l), l.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea1'), x(e, 'class', 'svelte-ew5ehc');
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
				t && i(e), P(s), P(a);
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
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
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
				(e = d('div')), V(s.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var n = v(e);
				_(s.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea2'), x(e, 'class', 'svelte-ew5ehc');
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
				t && i(e), P(s);
			}
		}
	);
}
function me(t) {
	let e, s;
	return (
		(e = new Pt({
			props: {
				variante: 0,
				$$slots: { subarea2: [fe], subarea1: [ie], default: [ce] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
			}
		}
	);
}
let de = 0,
	pe = 0;
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
			F[t ? 'unshift' : 'push'](() => {
				(o = t), s(2, o);
			});
		}
	];
}
class ve extends t {
	constructor(t) {
		super(), e(this, t, he, me, s, {});
	}
}
function ge(t) {
	let e, s;
	const n = t[2].default,
		a = m(n, t, t[1], null);
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
			x(e, 'class', 'Alert svelte-1o7rbrj'), z(e, 'haserror', !t[0]);
		},
		m(t, n) {
			l(t, e, n), a && a.m(e, null), (s = !0);
		},
		p(t, [s]) {
			a && a.p && 2 & s && y(a, n, t, t[1], s, null, null), 1 & s && z(e, 'haserror', !t[0]);
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
class we extends t {
	constructor(t) {
		super(), e(this, t, xe, ge, s, { haserror: 0 });
	}
}
function be(t) {
	let e, s, n, a, c;
	function $(e) {
		t[5](e);
	}
	let u = {};
	return (
		void 0 !== t[0] && (u.value = t[0]),
		(e = new Xt({ props: u })),
		F.push(() => N(e, 'value', $)),
		(a = new R({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				V(e.$$.fragment), (n = p()), V(a.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t), (n = g(t)), _(a.$$.fragment, t);
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
				P(e, t), t && i(n), P(a, t);
			}
		}
	);
}
function ye(t) {
	let e, s;
	return (
		(e = new we({ props: { $$slots: { default: [Ee] }, $$scope: { ctx: t } } })),
		{
			c() {
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
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
function De(t) {
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
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
			}
		}
	);
}
function Ve(t) {
	let e, s, n, f, m, w, y, E, I, D, M, G, j, L, S, B;
	(e = new Y({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(E = new Kt({ props: { variante: 1, $$slots: { default: [be] }, $$scope: { ctx: t } } })),
		E.$on('submit', t[4]);
	let T = 1 == t[1] && ye(t);
	return (
		(S = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [De] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				V(e.$$.fragment),
					(s = p()),
					(n = d('main')),
					(f = d('h2')),
					(m = $(t[3])),
					(w = p()),
					(y = d('div')),
					V(E.$$.fragment),
					(I = p()),
					T && T.c(),
					(D = p()),
					(M = d('footer')),
					(G = d('small')),
					(j = $('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					(L = p()),
					V(S.$$.fragment),
					this.h();
			},
			l(l) {
				_(e.$$.fragment, l), (s = g(l)), (n = h(l, 'MAIN', { class: !0 }));
				var a = v(n);
				f = h(a, 'H2', { class: !0 });
				var r = v(f);
				(m = u(r, t[3])), r.forEach(i), (w = g(a)), (y = h(a, 'DIV', { class: !0 }));
				var c = v(y);
				_(E.$$.fragment, c),
					c.forEach(i),
					(I = g(a)),
					T && T.l(a),
					a.forEach(i),
					(D = g(l)),
					(M = h(l, 'FOOTER', { class: !0 }));
				var o = v(M);
				G = h(o, 'SMALL', { class: !0 });
				var $ = v(G);
				(j = u($, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					$.forEach(i),
					(L = g(o)),
					_(S.$$.fragment, o),
					o.forEach(i),
					this.h();
			},
			h() {
				x(f, 'class', 'result svelte-1wkqmv1'),
					x(y, 'class', 'position-form svelte-1wkqmv1'),
					x(n, 'class', 'svelte-1wkqmv1'),
					x(G, 'class', 'svelte-1wkqmv1'),
					x(M, 'class', 'svelte-1wkqmv1');
			},
			m(t, a) {
				k(e, t, a),
					l(t, s, a),
					l(t, n, a),
					b(n, f),
					b(f, m),
					b(n, w),
					b(n, y),
					k(E, y, null),
					b(n, I),
					T && T.m(n, null),
					l(t, D, a),
					l(t, M, a),
					b(M, G),
					b(G, j),
					b(M, L),
					k(S, M, null),
					(B = !0);
			},
			p(t, [e]) {
				(!B || 8 & e) && U(m, t[3]);
				const s = {};
				513 & e && (s.$$scope = { dirty: e, ctx: t }),
					E.$set(s),
					1 == t[1]
						? T
							? (T.p(t, e), 2 & e && o(T, 1))
							: ((T = ye(t)), T.c(), o(T, 1), T.m(n, null))
						: T &&
						  (a(),
						  r(T, 1, 1, () => {
								T = null;
						  }),
						  c());
				const l = {};
				512 & e && (l.$$scope = { dirty: e, ctx: t }), S.$set(l);
			},
			i(t) {
				B || (o(e.$$.fragment, t), o(E.$$.fragment, t), o(T), o(S.$$.fragment, t), (B = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(E.$$.fragment, t), r(T), r(S.$$.fragment, t), (B = !1);
			},
			d(t) {
				P(e, t), t && i(s), t && i(n), P(E), T && T.d(), t && i(D), t && i(M), P(S);
			}
		}
	);
}
function _e(t, e, s) {
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
		super(), e(this, t, _e, Ve, s, {});
	}
}
function Me(t) {
	let e, s;
	return (
		(e = new ve({})),
		{
			c() {
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
			}
		}
	);
}
function Ge(t) {
	let e, s;
	return (
		(e = new ke({})),
		{
			c() {
				V(e.$$.fragment);
			},
			l(t) {
				_(e.$$.fragment, t);
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
				P(e, t);
			}
		}
	);
}
function je(t) {
	let e, s, n, a, c, $, u, f, m, w, y;
	return (
		(n = new Y({
			props: { tipo: 1, variante: 1, title: J[2].title, subtitle: J[2].subtitle, text: J[2].text }
		})),
		($ = new Nt({
			props: {
				title: 'La Divina Proporción',
				text:
					'<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>'
			}
		})),
		(f = new K({
			props: { id: 't0t', variante: 0, $$slots: { default: [Me] }, $$scope: { ctx: t } }
		})),
		(w = new K({
			props: { id: 'gematria', variante: 4, $$slots: { default: [Ge] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = d('div')),
					(s = d('div')),
					V(n.$$.fragment),
					(a = p()),
					(c = d('div')),
					V($.$$.fragment),
					(u = p()),
					V(f.$$.fragment),
					(m = p()),
					V(w.$$.fragment),
					this.h();
			},
			l(t) {
				e = h(t, 'DIV', { class: !0 });
				var l = v(e);
				s = h(l, 'DIV', { class: !0 });
				var r = v(s);
				_(n.$$.fragment, r), r.forEach(i), (a = g(l)), (c = h(l, 'DIV', { class: !0 }));
				var o = v(c);
				_($.$$.fragment, o),
					o.forEach(i),
					l.forEach(i),
					(u = g(t)),
					_(f.$$.fragment, t),
					(m = g(t)),
					_(w.$$.fragment, t),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 dg_0 mh_0 bgc_primary c_5 tac'),
					x(c, 'class', 'col_13'),
					x(e, 'class', 'dg');
			},
			m(t, r) {
				l(t, e, r),
					b(e, s),
					k(n, s, null),
					b(e, a),
					b(e, c),
					k($, c, null),
					l(t, u, r),
					k(f, t, r),
					l(t, m, r),
					k(w, t, r),
					(y = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), f.$set(s);
				const n = {};
				1 & e && (n.$$scope = { dirty: e, ctx: t }), w.$set(n);
			},
			i(t) {
				y ||
					(o(n.$$.fragment, t),
					o($.$$.fragment, t),
					o(f.$$.fragment, t),
					o(w.$$.fragment, t),
					(y = !0));
			},
			o(t) {
				r(n.$$.fragment, t),
					r($.$$.fragment, t),
					r(f.$$.fragment, t),
					r(w.$$.fragment, t),
					(y = !1);
			},
			d(t) {
				t && i(e), P(n), P($), t && i(u), P(f, t), t && i(m), P(w, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, je, s, {});
	}
}
