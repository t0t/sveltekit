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
	M as p,
	e as m,
	j as d,
	c as h,
	a as v,
	l as g,
	o as x,
	I as w,
	g as y,
	O as b,
	Q as E,
	E as I,
	a3 as D,
	p as j,
	q as V,
	r as _,
	a4 as M,
	H as k,
	a5 as G,
	y as P,
	K as z,
	a0 as L,
	a6 as S,
	a7 as B,
	R as T,
	a8 as q,
	F as A,
	J as C,
	T as H,
	U as F,
	V as N,
	h as O,
	G as U
} from '../../chunks/index-d91e1ed8.js';
import { B as R, c as J } from '../../chunks/Grid.svelte-ab8cbe1f.js';
import { H as Y } from '../../chunks/Header-bff7bbb7.js';
import { S as K } from '../../chunks/Section-b98eefba.js';
import { L as Q, a as W } from '../../chunks/ListItem-dc89416a.js';
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
	pt = (t) => ({}),
	mt = (t) => ({}),
	dt = (t) => ({}),
	ht = (t) => ({}),
	vt = (t) => ({}),
	gt = (t) => ({}),
	xt = (t) => ({}),
	wt = (t) => ({}),
	yt = (t) => ({}),
	bt = (t) => ({}),
	Et = (t) => ({}),
	It = (t) => ({}),
	Dt = (t) => ({});
function jt(t) {
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
		E = p(f, t, t[3], it),
		I = t[4].slot_4,
		D = p(I, t, t[3], ot),
		j = t[4].slot_3,
		V = p(j, t, t[3], at),
		_ = t[4].slot_2,
		M = p(_, t, t[3], nt),
		k = t[4].slot_1,
		G = p(k, t, t[3], et);
	return {
		c() {
			(e = m('div')),
				E && E.c(),
				(s = d()),
				D && D.c(),
				(n = d()),
				V && V.c(),
				(a = d()),
				M && M.c(),
				(o = d()),
				G && G.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			E && E.l(l),
				(s = g(l)),
				D && D.l(l),
				(n = g(l)),
				V && V.l(l),
				(a = g(l)),
				M && M.l(l),
				(o = g(l)),
				G && G.l(l),
				l.forEach(i),
				this.h();
		},
		h() {
			x(e, 'class', ($ = w(t[2][t[1]]) + ' svelte-1s8pt1w'));
		},
		m(t, r) {
			l(t, e, r),
				E && E.m(e, null),
				y(e, s),
				D && D.m(e, null),
				y(e, n),
				V && V.m(e, null),
				y(e, a),
				M && M.m(e, null),
				y(e, o),
				G && G.m(e, null),
				(u = !0);
		},
		p(t, s) {
			E && E.p && 8 & s && b(E, f, t, t[3], s, ct, it),
				D && D.p && 8 & s && b(D, I, t, t[3], s, rt, ot),
				V && V.p && 8 & s && b(V, j, t, t[3], s, lt, at),
				M && M.p && 8 & s && b(M, _, t, t[3], s, st, nt),
				G && G.p && 8 & s && b(G, k, t, t[3], s, tt, et),
				(!u || (2 & s && $ !== ($ = w(t[2][t[1]]) + ' svelte-1s8pt1w'))) && x(e, 'class', $);
		},
		i(t) {
			u || (c(E, t), c(D, t), c(V, t), c(M, t), c(G, t), (u = !0));
		},
		o(t) {
			r(E, t), r(D, t), r(V, t), r(M, t), r(G, t), (u = !1);
		},
		d(t) {
			t && i(e), E && E.d(t), D && D.d(t), V && V.d(t), M && M.d(t), G && G.d(t);
		}
	};
}
function _t(t) {
	let e, s, n, a, o, $, u, f, E, I, D, j, V, _, M, k;
	const G = t[4].default,
		P = p(G, t, t[3], null),
		z = t[4].subarea1,
		L = p(z, t, t[3], yt),
		S = t[4].subarea2,
		B = p(S, t, t[3], xt),
		T = t[4].subarea3,
		q = p(T, t, t[3], vt),
		A = t[4].subarea4,
		C = p(A, t, t[3], dt),
		H = t[4].subarea5,
		F = p(H, t, t[3], pt),
		N = t[4].subarea6,
		O = p(N, t, t[3], ut);
	return {
		c() {
			(e = m('div')),
				(s = m('div')),
				P && P.c(),
				(n = d()),
				(a = m('div')),
				L && L.c(),
				(o = d()),
				($ = m('div')),
				B && B.c(),
				(u = d()),
				(f = m('div')),
				q && q.c(),
				(E = d()),
				(I = m('div')),
				C && C.c(),
				(D = d()),
				(j = m('div')),
				F && F.c(),
				(V = d()),
				(_ = m('div')),
				O && O.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			s = h(l, 'DIV', { class: !0 });
			var r = v(s);
			P && P.l(r), r.forEach(i), (n = g(l)), (a = h(l, 'DIV', { class: !0 }));
			var c = v(a);
			L && L.l(c), c.forEach(i), (o = g(l)), ($ = h(l, 'DIV', { class: !0 }));
			var p = v($);
			B && B.l(p), p.forEach(i), (u = g(l)), (f = h(l, 'DIV', { class: !0 }));
			var m = v(f);
			q && q.l(m), m.forEach(i), (E = g(l)), (I = h(l, 'DIV', { class: !0 }));
			var d = v(I);
			C && C.l(d), d.forEach(i), (D = g(l)), (j = h(l, 'DIV', { class: !0 }));
			var x = v(j);
			F && F.l(x), x.forEach(i), (V = g(l)), (_ = h(l, 'DIV', { class: !0 }));
			var w = v(_);
			O && O.l(w), w.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'subarea a svelte-1s8pt1w'),
				x(a, 'class', 'subarea b svelte-1s8pt1w'),
				x($, 'class', 'subarea c svelte-1s8pt1w'),
				x(f, 'class', 'subarea d svelte-1s8pt1w'),
				x(I, 'class', 'subarea e svelte-1s8pt1w'),
				x(j, 'class', 'subarea f svelte-1s8pt1w'),
				x(_, 'class', 'subarea g svelte-1s8pt1w'),
				x(e, 'class', (M = w(t[2][t[1]]) + ' svelte-1s8pt1w'));
		},
		m(t, r) {
			l(t, e, r),
				y(e, s),
				P && P.m(s, null),
				y(e, n),
				y(e, a),
				L && L.m(a, null),
				y(e, o),
				y(e, $),
				B && B.m($, null),
				y(e, u),
				y(e, f),
				q && q.m(f, null),
				y(e, E),
				y(e, I),
				C && C.m(I, null),
				y(e, D),
				y(e, j),
				F && F.m(j, null),
				y(e, V),
				y(e, _),
				O && O.m(_, null),
				(k = !0);
		},
		p(t, s) {
			P && P.p && 8 & s && b(P, G, t, t[3], s, null, null),
				L && L.p && 8 & s && b(L, z, t, t[3], s, wt, yt),
				B && B.p && 8 & s && b(B, S, t, t[3], s, gt, xt),
				q && q.p && 8 & s && b(q, T, t, t[3], s, ht, vt),
				C && C.p && 8 & s && b(C, A, t, t[3], s, mt, dt),
				F && F.p && 8 & s && b(F, H, t, t[3], s, ft, pt),
				O && O.p && 8 & s && b(O, N, t, t[3], s, $t, ut),
				(!k || (2 & s && M !== (M = w(t[2][t[1]]) + ' svelte-1s8pt1w'))) && x(e, 'class', M);
		},
		i(t) {
			k || (c(P, t), c(L, t), c(B, t), c(q, t), c(C, t), c(F, t), c(O, t), (k = !0));
		},
		o(t) {
			r(P, t), r(L, t), r(B, t), r(q, t), r(C, t), r(F, t), r(O, t), (k = !1);
		},
		d(t) {
			t && i(e),
				P && P.d(t),
				L && L.d(t),
				B && B.d(t),
				q && q.d(t),
				C && C.d(t),
				F && F.d(t),
				O && O.d(t);
		}
	};
}
function Mt(t) {
	let e, s, n, a, o, $, u, f;
	const E = t[4].subarea1,
		I = p(E, t, t[3], Dt),
		D = t[4].default,
		j = p(D, t, t[3], null),
		V = t[4].subarea2,
		_ = p(V, t, t[3], Et);
	return {
		c() {
			(e = m('div')),
				(s = m('div')),
				I && I.c(),
				(n = d()),
				(a = m('div')),
				j && j.c(),
				(o = d()),
				($ = m('div')),
				_ && _.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var l = v(e);
			s = h(l, 'DIV', { class: !0 });
			var r = v(s);
			I && I.l(r), r.forEach(i), (n = g(l)), (a = h(l, 'DIV', { class: !0 }));
			var c = v(a);
			j && j.l(c), c.forEach(i), (o = g(l)), ($ = h(l, 'DIV', { class: !0 }));
			var u = v($);
			_ && _.l(u), u.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'svelte-1s8pt1w'),
				x(a, 'class', 'svelte-1s8pt1w'),
				x($, 'class', 'svelte-1s8pt1w'),
				x(e, 'class', (u = w(t[2][t[1]]) + ' svelte-1s8pt1w'));
		},
		m(t, r) {
			l(t, e, r),
				y(e, s),
				I && I.m(s, null),
				y(e, n),
				y(e, a),
				j && j.m(a, null),
				y(e, o),
				y(e, $),
				_ && _.m($, null),
				(f = !0);
		},
		p(t, s) {
			I && I.p && 8 & s && b(I, E, t, t[3], s, It, Dt),
				j && j.p && 8 & s && b(j, D, t, t[3], s, null, null),
				_ && _.p && 8 & s && b(_, V, t, t[3], s, bt, Et),
				(!f || (2 & s && u !== (u = w(t[2][t[1]]) + ' svelte-1s8pt1w'))) && x(e, 'class', u);
		},
		i(t) {
			f || (c(I, t), c(j, t), c(_, t), (f = !0));
		},
		o(t) {
			r(I, t), r(j, t), r(_, t), (f = !1);
		},
		d(t) {
			t && i(e), I && I.d(t), j && j.d(t), _ && _.d(t);
		}
	};
}
function kt(t) {
	let e, s, $, u;
	const f = [Mt, _t, Vt, jt],
		p = [];
	function m(t, e) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2 === t[0] ? 2 : 3;
	}
	return (
		(e = m(t)),
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
				(e = m(t)),
					e === l
						? p[e].p(t, n)
						: (a(),
						  r(p[l], 1, 1, () => {
								p[l] = null;
						  }),
						  o(),
						  (s = p[e]),
						  s ? s.p(t, n) : ((s = p[e] = f[e](t)), s.c()),
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
				p[e].d(t), t && i($);
			}
		}
	);
}
function Gt(t, e, s) {
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
		super(), e(this, t, Gt, kt, s, { tipo: 0, variante: 1 });
	}
}
function zt(t, e, s) {
	const n = t.slice();
	return (n[17] = e[s]), (n[19] = s), n;
}
const Lt = (t) => ({}),
	St = (t) => ({});
function Bt(t, e) {
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
				x(s, 'class', 'svelte-8nwnjt'),
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
function Tt(t) {
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
function qt(t) {
	let e, s;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [Tt] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
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
				P(e, t);
			}
		}
	);
}
function At(t) {
	let e, s, n, a, o, $, u, f, w, L, S, T, q, A, C;
	E(t[10]), (e = new Y({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } }));
	const H = t[9].hasvideo,
		F = p(H, t, t[14], St),
		N =
			F ||
			(function (t) {
				let e,
					s,
					n = [],
					a = new Map(),
					r = { length: t[5] };
				const o = (t) => t[19];
				for (let l = 0; l < r.length; l += 1) {
					let e = zt(t, r, l),
						s = o(e);
					a.set(s, (n[l] = Bt(s, e)));
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
						x(s, 'class', 'svelte-8nwnjt'),
							x(e, 'viewBox', '0 0 200 200'),
							x(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							x(e, 'class', 'svelte-8nwnjt');
					},
					m(t, a) {
						l(t, e, a), y(e, s);
						for (let e = 0; e < n.length; e += 1) n[e].m(s, null);
					},
					p(t, e) {
						100 & e && ((r = { length: t[5] }), (n = D(n, e, o, 1, t, r, a, s, B, Bt, null, zt)));
					},
					d(t) {
						t && i(e);
						for (let e = 0; e < n.length; e += 1) n[e].d();
					}
				};
			})(t);
	return (
		(T = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [qt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				j(e.$$.fragment),
					(s = d()),
					(n = m('main')),
					(a = m('div')),
					N && N.c(),
					(o = d()),
					($ = m('div')),
					(u = m('div')),
					(f = m('input')),
					(w = d()),
					(L = m('input')),
					(S = d()),
					j(T.$$.fragment),
					this.h();
			},
			l(t) {
				V(e.$$.fragment, t), (s = g(t)), (n = h(t, 'MAIN', { class: !0 }));
				var l = v(n);
				a = h(l, 'DIV', { class: !0 });
				var r = v(a);
				N && N.l(r), r.forEach(i), (o = g(l)), ($ = h(l, 'DIV', { class: !0 }));
				var c = v($);
				u = h(c, 'DIV', { class: !0 });
				var p = v(u);
				(f = h(p, 'INPUT', { type: !0, step: !0, class: !0 })),
					(w = g(p)),
					(L = h(p, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					p.forEach(i),
					(S = g(c)),
					V(T.$$.fragment, c),
					c.forEach(i),
					l.forEach(i),
					this.h();
			},
			h() {
				x(a, 'class', 'BannerMedia svelte-8nwnjt'),
					x(f, 'type', 'number'),
					x(f, 'step', '0.001'),
					x(f, 'class', 'svelte-8nwnjt'),
					x(L, 'type', 'range'),
					x(L, 'min', 0),
					x(L, 'max', Ct),
					x(L, 'class', 'svelte-8nwnjt'),
					x(u, 'class', 'controls svelte-8nwnjt'),
					x($, 'class', 'PhiSvgText svelte-8nwnjt'),
					x(n, 'class', 'PhiSvg svelte-8nwnjt');
			},
			m(r, c) {
				_(e, r, c),
					l(r, s, c),
					l(r, n, c),
					y(n, a),
					N && N.m(a, null),
					y(n, o),
					y(n, $),
					y($, u),
					y(u, f),
					M(f, t[2]),
					y(u, w),
					y(u, L),
					M(L, t[5]),
					y($, S),
					_(T, $, null),
					(q = !0),
					A ||
						((C = [
							k(window, 'resize', t[10]),
							k(f, 'input', t[11]),
							k(L, 'change', t[12]),
							k(L, 'input', t[12])
						]),
						(A = !0));
			},
			p(t, [s]) {
				const n = {};
				1 & s && (n.title = t[0]),
					2 & s && (n.subtitle = t[1]),
					e.$set(n),
					F ? F.p && 16384 & s && b(F, H, t, t[14], s, Lt, St) : N && N.p && 36 & s && N.p(t, s),
					4 & s && G(f.value) !== t[2] && M(f, t[2]),
					32 & s && M(L, t[5]);
				const l = {};
				16416 & s && (l.$$scope = { dirty: s, ctx: t }), T.$set(l);
			},
			i(t) {
				q || (c(e.$$.fragment, t), c(N, t), c(T.$$.fragment, t), (q = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(N, t), r(T.$$.fragment, t), (q = !1);
			},
			d(t) {
				P(e, t), t && i(s), t && i(n), N && N.d(t), P(T), (A = !1), z(C);
			}
		}
	);
}
let Ct = 360;
function Ht(t, e, s) {
	let n,
		l,
		a,
		{ $$slots: r = {}, $$scope: o } = e,
		{ title: c = '' } = e,
		{ text: i = '' } = e,
		$ = 0.618033988749,
		u = X(0, { duration: 500, interpolate: (t, e) => (s) => Math.round((e - t) * s + t) });
	L(t, u, (t) => s(5, (n = t)));
	let { variante: f = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (c = t.title)),
				'text' in t && s(1, (i = t.text)),
				'variante' in t && s(8, (f = t.variante)),
				'$$scope' in t && s(14, (o = t.$$scope));
		}),
		S(u, (n = Ct), n),
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
				($ = G(this.value)), s(2, $);
			},
			function () {
				(n = G(this.value)), u.set(n);
			},
			() => {
				S(u, (n = n > 0 ? 0 : Ct), n);
			},
			o
		]
	);
}
class Ft extends t {
	constructor(t) {
		super(), e(this, t, Ht, At, s, { title: 0, text: 1, variante: 8 });
	}
}
function Nt(t) {
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
			x(e, 'class', 'svelte-11xaeo2');
		},
		m(t, n) {
			l(t, e, n), y(e, s), (a = !0);
		},
		i(t) {
			a ||
				(E(() => {
					n || (n = T(e, Z, {}, !0)), n.run(1);
				}),
				(a = !0));
		},
		o(t) {
			n || (n = T(e, Z, {}, !1)), n.run(0), (a = !1);
		},
		d(t) {
			t && i(e), t && n && n.end();
		}
	};
}
function Ot(t) {
	let e,
		s,
		$,
		u,
		f,
		m = t[2] && Nt();
	const d = t[7].default,
		g = p(d, t, t[6], null);
	return {
		c() {
			(e = I('text')), m && m.c(), (s = n()), g && g.c(), this.h();
		},
		l(t) {
			e = h(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var l = v(e);
			m && m.l(l), (s = n()), g && g.l(l), l.forEach(i), this.h();
		},
		h() {
			x(e, 'x', t[0]),
				x(e, 'y', t[1]),
				x(e, 'font-size', '55'),
				x(e, 'class', 'draggable svelte-11xaeo2');
		},
		m(n, a) {
			l(n, e, a),
				m && m.m(e, null),
				y(e, s),
				g && g.m(e, null),
				($ = !0),
				u ||
					((f = [k(window, 'mouseup', t[4]), k(e, 'mousedown', t[3]), k(e, 'mousemove', t[5])]),
					(u = !0));
		},
		p(t, [n]) {
			t[2]
				? m
					? 4 & n && c(m, 1)
					: ((m = Nt()), m.c(), c(m, 1), m.m(e, s))
				: m &&
				  (a(),
				  r(m, 1, 1, () => {
						m = null;
				  }),
				  o()),
				g && g.p && 64 & n && b(g, d, t, t[6], n, null, null),
				(!$ || 1 & n) && x(e, 'x', t[0]),
				(!$ || 2 & n) && x(e, 'y', t[1]);
		},
		i(t) {
			$ || (c(m), c(g, t), ($ = !0));
		},
		o(t) {
			r(m), r(g, t), ($ = !1);
		},
		d(t) {
			t && i(e), m && m.d(), g && g.d(t), (u = !1), z(f);
		}
	};
}
function Ut(t, e, s) {
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
class Rt extends t {
	constructor(t) {
		super(), e(this, t, Ut, Ot, s, { x: 0, y: 1 });
	}
}
function Jt(t) {
	let e, s, n, a, o;
	const $ = t[4].default,
		u = p($, t, t[3], null);
	return {
		c() {
			(e = m('form')), u && u.c(), this.h();
		},
		l(t) {
			e = h(t, 'FORM', { name: !0, class: !0 });
			var s = v(e);
			u && u.l(s), s.forEach(i), this.h();
		},
		h() {
			x(e, 'name', t[0]), x(e, 'class', (s = w(t[2][t[1]]) + ' svelte-o0mo2l'));
		},
		m(s, r) {
			l(s, e, r), u && u.m(e, null), (n = !0), a || ((o = k(e, 'submit', q(t[5]))), (a = !0));
		},
		p(t, [l]) {
			u && u.p && 8 & l && b(u, $, t, t[3], l, null, null),
				(!n || 1 & l) && x(e, 'name', t[0]),
				(!n || (2 & l && s !== (s = w(t[2][t[1]]) + ' svelte-o0mo2l'))) && x(e, 'class', s);
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
				A(t, e);
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
			(e = m('input')), this.h();
		},
		l(t) {
			(e = h(t, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(e.value = t[0]),
				x(e, 'placeholder', t[1]),
				x(e, 'type', ''),
				x(e, 'name', ''),
				x(e, 'class', 'svelte-pelzi9');
		},
		m(a, r) {
			l(a, e, r), s || ((n = k(e, 'input', t[2])), (s = !0));
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
				x(e, 'class', 'svelte-mfio2q');
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
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
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
			1 & n && s !== (s = t[13] + '') && O(e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function re(t) {
	let e, s;
	return (
		(e = new Rt({ props: { x: me, y: de, $$slots: { default: [ae] }, $$scope: { ctx: t } } })),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
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
				P(e, t);
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
		p = t[4],
		m = [];
	for (let n = 0; n < p.length; n += 1) m[n] = se(ee(t, p, n));
	let d = t[5],
		g = [];
	for (let n = 0; n < d.length; n += 1) g[n] = le(te(t, d, n));
	const w = (t) =>
		r(g[t], 1, 1, () => {
			g[t] = null;
		});
	let b = t[0],
		E = [];
	for (let n = 0; n < b.length; n += 1) E[n] = re(Zt(t, b, n));
	const D = (t) =>
		r(E[t], 1, 1, () => {
			E[t] = null;
		});
	return {
		c() {
			(e = I('svg')), (s = I('g'));
			for (let t = 0; t < m.length; t += 1) m[t].c();
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
			for (let e = 0; e < m.length; e += 1) m[e].l(a);
			$ = n();
			for (let e = 0; e < g.length; e += 1) g[e].l(a);
			u = n();
			for (let e = 0; e < E.length; e += 1) E[e].l(a);
			a.forEach(i), l.forEach(i), this.h();
		},
		h() {
			x(s, 'transform', 'translate(150,150) scale(0.7)'),
				x(s, 'class', 'svelte-mfio2q'),
				x(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				x(e, 'class', 'svelte-mfio2q');
		},
		m(n, a) {
			l(n, e, a), y(e, s);
			for (let t = 0; t < m.length; t += 1) m[t].m(s, null);
			y(s, $);
			for (let t = 0; t < g.length; t += 1) g[t].m(s, null);
			y(s, u);
			for (let t = 0; t < E.length; t += 1) E[t].m(s, null);
			t[10](e), (f = !0);
		},
		p(t, e) {
			if (16 & e) {
				let n;
				for (p = t[4], n = 0; n < p.length; n += 1) {
					const l = ee(t, p, n);
					m[n] ? m[n].p(l, e) : ((m[n] = se(l)), m[n].c(), m[n].m(s, $));
				}
				for (; n < m.length; n += 1) m[n].d(1);
				m.length = p.length;
			}
			if (32 & e) {
				let n;
				for (d = t[5], n = 0; n < d.length; n += 1) {
					const l = te(t, d, n);
					g[n] ? (g[n].p(l, e), c(g[n], 1)) : ((g[n] = le(l)), g[n].c(), c(g[n], 1), g[n].m(s, u));
				}
				for (a(), n = d.length; n < g.length; n += 1) w(n);
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
				for (a(), n = b.length; n < E.length; n += 1) D(n);
				o();
			}
		},
		i(t) {
			if (!f) {
				for (let t = 0; t < d.length; t += 1) c(g[t]);
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
			s && i(e), C(m, s), C(g, s), C(E, s), t[10](null);
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
		H.push(() => F(e, 'value', $)),
		(a = new R({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				j(e.$$.fragment), (n = d()), j(a.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t), (n = g(t)), V(a.$$.fragment, t);
			},
			m(t, s) {
				_(e, t, s), l(t, n, s), _(a, t, s), (o = !0);
			},
			p(t, n) {
				const l = {};
				!s && 2 & n && ((s = !0), (l.value = t[1]), N(() => (s = !1))), e.$set(l);
			},
			i(t) {
				o || (c(e.$$.fragment, t), c(a.$$.fragment, t), (o = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(a.$$.fragment, t), (o = !1);
			},
			d(t) {
				P(e, t), t && i(n), P(a, t);
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
				(e = m('div')), j(s.$$.fragment), (n = d()), j(a.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var l = v(e);
				V(s.$$.fragment, l), (n = g(l)), V(a.$$.fragment, l), l.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea1'), x(e, 'class', 'svelte-mfio2q');
			},
			m(t, r) {
				l(t, e, r), _(s, e, null), y(e, n), _(a, e, null), (o = !0);
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
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
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
				(e = m('div')), j(s.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var n = v(e);
				V(s.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea2'), x(e, 'class', 'svelte-mfio2q');
			},
			m(t, a) {
				l(t, e, a), _(s, e, null), (n = !0);
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
				t && i(e), P(s);
			}
		}
	);
}
function pe(t) {
	let e, s;
	return (
		(e = new Pt({
			props: {
				variante: 0,
				$$slots: { subarea2: [fe], subarea1: [ie], default: [oe] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
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
				P(e, t);
			}
		}
	);
}
let me = 0,
	de = 0;
function he(t, e, s) {
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
			H[t ? 'unshift' : 'push'](() => {
				(c = t), s(2, c);
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
			(e = m('div')), a && a.c(), this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var s = v(e);
			a && a.l(s), s.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'Alert svelte-r8wy8v'), U(e, 'haserror', !t[0]);
		},
		m(t, n) {
			l(t, e, n), a && a.m(e, null), (s = !0);
		},
		p(t, [s]) {
			a && a.p && 2 & s && b(a, n, t, t[1], s, null, null), 1 & s && U(e, 'haserror', !t[0]);
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
class we extends t {
	constructor(t) {
		super(), e(this, t, xe, ge, s, { haserror: 0 });
	}
}
function ye(t) {
	let e, s, n, a, o;
	function $(e) {
		t[5](e);
	}
	let u = {};
	return (
		void 0 !== t[0] && (u.value = t[0]),
		(e = new Xt({ props: u })),
		H.push(() => F(e, 'value', $)),
		(a = new R({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				j(e.$$.fragment), (n = d()), j(a.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t), (n = g(t)), V(a.$$.fragment, t);
			},
			m(t, s) {
				_(e, t, s), l(t, n, s), _(a, t, s), (o = !0);
			},
			p(t, n) {
				const l = {};
				!s && 1 & n && ((s = !0), (l.value = t[0]), N(() => (s = !1))), e.$set(l);
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
				P(e, t), t && i(n), P(a, t);
			}
		}
	);
}
function be(t) {
	let e, s;
	return (
		(e = new we({ props: { $$slots: { default: [Ee] }, $$scope: { ctx: t } } })),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
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
			4 & s && O(e, t[2]);
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
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
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
				P(e, t);
			}
		}
	);
}
function je(t) {
	let e, s, n, f, p, w, b, E, I, D, M, k, G, z, L, S;
	(e = new Y({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(E = new Kt({ props: { variante: 1, $$slots: { default: [ye] }, $$scope: { ctx: t } } })),
		E.$on('submit', t[4]);
	let B = 1 == t[1] && be(t);
	return (
		(L = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [De] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				j(e.$$.fragment),
					(s = d()),
					(n = m('main')),
					(f = m('h2')),
					(p = $(t[3])),
					(w = d()),
					(b = m('div')),
					j(E.$$.fragment),
					(I = d()),
					B && B.c(),
					(D = d()),
					(M = m('footer')),
					(k = m('small')),
					(G = $('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					(z = d()),
					j(L.$$.fragment),
					this.h();
			},
			l(l) {
				V(e.$$.fragment, l), (s = g(l)), (n = h(l, 'MAIN', { class: !0 }));
				var a = v(n);
				f = h(a, 'H2', { class: !0 });
				var r = v(f);
				(p = u(r, t[3])), r.forEach(i), (w = g(a)), (b = h(a, 'DIV', { class: !0 }));
				var o = v(b);
				V(E.$$.fragment, o),
					o.forEach(i),
					(I = g(a)),
					B && B.l(a),
					a.forEach(i),
					(D = g(l)),
					(M = h(l, 'FOOTER', { class: !0 }));
				var c = v(M);
				k = h(c, 'SMALL', { class: !0 });
				var $ = v(k);
				(G = u($, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					$.forEach(i),
					(z = g(c)),
					V(L.$$.fragment, c),
					c.forEach(i),
					this.h();
			},
			h() {
				x(f, 'class', 'result svelte-jzvegt'),
					x(b, 'class', 'position-form svelte-jzvegt'),
					x(n, 'class', 'svelte-jzvegt'),
					x(k, 'class', 'svelte-jzvegt'),
					x(M, 'class', 'svelte-jzvegt');
			},
			m(t, a) {
				_(e, t, a),
					l(t, s, a),
					l(t, n, a),
					y(n, f),
					y(f, p),
					y(n, w),
					y(n, b),
					_(E, b, null),
					y(n, I),
					B && B.m(n, null),
					l(t, D, a),
					l(t, M, a),
					y(M, k),
					y(k, G),
					y(M, z),
					_(L, M, null),
					(S = !0);
			},
			p(t, [e]) {
				(!S || 8 & e) && O(p, t[3]);
				const s = {};
				513 & e && (s.$$scope = { dirty: e, ctx: t }),
					E.$set(s),
					1 == t[1]
						? B
							? (B.p(t, e), 2 & e && c(B, 1))
							: ((B = be(t)), B.c(), c(B, 1), B.m(n, null))
						: B &&
						  (a(),
						  r(B, 1, 1, () => {
								B = null;
						  }),
						  o());
				const l = {};
				512 & e && (l.$$scope = { dirty: e, ctx: t }), L.$set(l);
			},
			i(t) {
				S || (c(e.$$.fragment, t), c(E.$$.fragment, t), c(B), c(L.$$.fragment, t), (S = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(E.$$.fragment, t), r(B), r(L.$$.fragment, t), (S = !1);
			},
			d(t) {
				P(e, t), t && i(s), t && i(n), P(E), B && B.d(), t && i(D), t && i(M), P(L);
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
class _e extends t {
	constructor(t) {
		super(), e(this, t, Ve, je, s, {});
	}
}
function Me(t) {
	let e, s;
	return (
		(e = new ve({})),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
function ke(t) {
	let e, s;
	return (
		(e = new _e({})),
		{
			c() {
				j(e.$$.fragment);
			},
			l(t) {
				V(e.$$.fragment, t);
			},
			m(t, n) {
				_(e, t, n), (s = !0);
			},
			i(t) {
				s || (c(e.$$.fragment, t), (s = !0));
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
	let e, s, n, a, o, $, u, f, p, w, b;
	return (
		(n = new Y({
			props: { tipo: 1, variante: 1, title: J[2].title, subtitle: J[2].subtitle, text: J[2].text }
		})),
		($ = new Ft({
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
			props: { id: 'gematria', variante: 4, $$slots: { default: [ke] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = m('div')),
					(s = m('div')),
					j(n.$$.fragment),
					(a = d()),
					(o = m('div')),
					j($.$$.fragment),
					(u = d()),
					j(f.$$.fragment),
					(p = d()),
					j(w.$$.fragment),
					this.h();
			},
			l(t) {
				e = h(t, 'DIV', { class: !0 });
				var l = v(e);
				s = h(l, 'DIV', { class: !0 });
				var r = v(s);
				V(n.$$.fragment, r), r.forEach(i), (a = g(l)), (o = h(l, 'DIV', { class: !0 }));
				var c = v(o);
				V($.$$.fragment, c),
					c.forEach(i),
					l.forEach(i),
					(u = g(t)),
					V(f.$$.fragment, t),
					(p = g(t)),
					V(w.$$.fragment, t),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 dg_0 mh_0 bgc_primary c_5 tac'),
					x(o, 'class', 'col_13'),
					x(e, 'class', 'dg');
			},
			m(t, r) {
				l(t, e, r),
					y(e, s),
					_(n, s, null),
					y(e, a),
					y(e, o),
					_($, o, null),
					l(t, u, r),
					_(f, t, r),
					l(t, p, r),
					_(w, t, r),
					(b = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), f.$set(s);
				const n = {};
				1 & e && (n.$$scope = { dirty: e, ctx: t }), w.$set(n);
			},
			i(t) {
				b ||
					(c(n.$$.fragment, t),
					c($.$$.fragment, t),
					c(f.$$.fragment, t),
					c(w.$$.fragment, t),
					(b = !0));
			},
			o(t) {
				r(n.$$.fragment, t),
					r($.$$.fragment, t),
					r(f.$$.fragment, t),
					r(w.$$.fragment, t),
					(b = !1);
			},
			d(t) {
				t && i(e), P(n), P($), t && i(u), P(f, t), t && i(p), P(w, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Ge, s, {});
	}
}
