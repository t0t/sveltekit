import {
	S as t,
	i as e,
	s,
	k as l,
	f as a,
	C as n,
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
	g as w,
	O as b,
	Q as _,
	E,
	a3 as k,
	p as I,
	q as D,
	r as V,
	a4 as q,
	H as G,
	a5 as M,
	y as j,
	K as L,
	a0 as P,
	a6 as B,
	a7 as S,
	R as C,
	a8 as H,
	F as T,
	J as A,
	T as F,
	U as O,
	V as U,
	h as z,
	G as N
} from '../../chunks/index-d91e1ed8.js';
import { B as R, c as J } from '../../chunks/Grid.svelte-e568fec9.js';
import { H as Y } from '../../chunks/Header-72a33ab9.js';
import { S as K } from '../../chunks/Section-2abcbe78.js';
import { L as Q, a as W } from '../../chunks/ListItem-ea6efde4.js';
import { t as X } from '../../chunks/index-c4bdeab8.js';
import { f as Z } from '../../chunks/index-65311448.js';
import '../../chunks/index-cc16b092.js';
import '../../chunks/index-78b22dae.js';
const tt = (t) => ({}),
	et = (t) => ({}),
	st = (t) => ({}),
	lt = (t) => ({}),
	at = (t) => ({}),
	nt = (t) => ({}),
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
	wt = (t) => ({}),
	bt = (t) => ({}),
	_t = (t) => ({}),
	Et = (t) => ({}),
	kt = (t) => ({});
function It(t) {
	let e;
	return {
		c() {
			e = $('"define un tipo de layout"');
		},
		l(t) {
			e = u(t, '"define un tipo de layout"');
		},
		m(t, s) {
			a(t, e, s);
		},
		p: f,
		i: f,
		o: f,
		d(t) {
			t && i(e);
		}
	};
}
function Dt(t) {
	let e, s, l, n, c, $, u;
	const f = t[4].slot_5,
		_ = p(f, t, t[3], it),
		E = t[4].slot_4,
		k = p(E, t, t[3], ct),
		I = t[4].slot_3,
		D = p(I, t, t[3], nt),
		V = t[4].slot_2,
		q = p(V, t, t[3], lt),
		G = t[4].slot_1,
		M = p(G, t, t[3], et);
	return {
		c() {
			(e = d('div')),
				_ && _.c(),
				(s = m()),
				k && k.c(),
				(l = m()),
				D && D.c(),
				(n = m()),
				q && q.c(),
				(c = m()),
				M && M.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var a = v(e);
			_ && _.l(a),
				(s = g(a)),
				k && k.l(a),
				(l = g(a)),
				D && D.l(a),
				(n = g(a)),
				q && q.l(a),
				(c = g(a)),
				M && M.l(a),
				a.forEach(i),
				this.h();
		},
		h() {
			x(e, 'class', ($ = y(t[2][t[1]]) + ' svelte-1a6sqal'));
		},
		m(t, r) {
			a(t, e, r),
				_ && _.m(e, null),
				w(e, s),
				k && k.m(e, null),
				w(e, l),
				D && D.m(e, null),
				w(e, n),
				q && q.m(e, null),
				w(e, c),
				M && M.m(e, null),
				(u = !0);
		},
		p(t, s) {
			_ && _.p && 8 & s && b(_, f, t, t[3], s, ot, it),
				k && k.p && 8 & s && b(k, E, t, t[3], s, rt, ct),
				D && D.p && 8 & s && b(D, I, t, t[3], s, at, nt),
				q && q.p && 8 & s && b(q, V, t, t[3], s, st, lt),
				M && M.p && 8 & s && b(M, G, t, t[3], s, tt, et),
				(!u || (2 & s && $ !== ($ = y(t[2][t[1]]) + ' svelte-1a6sqal'))) && x(e, 'class', $);
		},
		i(t) {
			u || (o(_, t), o(k, t), o(D, t), o(q, t), o(M, t), (u = !0));
		},
		o(t) {
			r(_, t), r(k, t), r(D, t), r(q, t), r(M, t), (u = !1);
		},
		d(t) {
			t && i(e), _ && _.d(t), k && k.d(t), D && D.d(t), q && q.d(t), M && M.d(t);
		}
	};
}
function Vt(t) {
	let e, s, l, n, c, $, u, f, _, E, k, I, D, V, q, G;
	const M = t[4].default,
		j = p(M, t, t[3], null),
		L = t[4].subarea1,
		P = p(L, t, t[3], wt),
		B = t[4].subarea2,
		S = p(B, t, t[3], xt),
		C = t[4].subarea3,
		H = p(C, t, t[3], vt),
		T = t[4].subarea4,
		A = p(T, t, t[3], mt),
		F = t[4].subarea5,
		O = p(F, t, t[3], pt),
		U = t[4].subarea6,
		z = p(U, t, t[3], ut);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				j && j.c(),
				(l = m()),
				(n = d('div')),
				P && P.c(),
				(c = m()),
				($ = d('div')),
				S && S.c(),
				(u = m()),
				(f = d('div')),
				H && H.c(),
				(_ = m()),
				(E = d('div')),
				A && A.c(),
				(k = m()),
				(I = d('div')),
				O && O.c(),
				(D = m()),
				(V = d('div')),
				z && z.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var a = v(e);
			s = h(a, 'DIV', { class: !0 });
			var r = v(s);
			j && j.l(r), r.forEach(i), (l = g(a)), (n = h(a, 'DIV', { class: !0 }));
			var o = v(n);
			P && P.l(o), o.forEach(i), (c = g(a)), ($ = h(a, 'DIV', { class: !0 }));
			var p = v($);
			S && S.l(p), p.forEach(i), (u = g(a)), (f = h(a, 'DIV', { class: !0 }));
			var d = v(f);
			H && H.l(d), d.forEach(i), (_ = g(a)), (E = h(a, 'DIV', { class: !0 }));
			var m = v(E);
			A && A.l(m), m.forEach(i), (k = g(a)), (I = h(a, 'DIV', { class: !0 }));
			var x = v(I);
			O && O.l(x), x.forEach(i), (D = g(a)), (V = h(a, 'DIV', { class: !0 }));
			var y = v(V);
			z && z.l(y), y.forEach(i), a.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'subarea a svelte-1a6sqal'),
				x(n, 'class', 'subarea b svelte-1a6sqal'),
				x($, 'class', 'subarea c svelte-1a6sqal'),
				x(f, 'class', 'subarea d svelte-1a6sqal'),
				x(E, 'class', 'subarea e svelte-1a6sqal'),
				x(I, 'class', 'subarea f svelte-1a6sqal'),
				x(V, 'class', 'subarea g svelte-1a6sqal'),
				x(e, 'class', (q = y(t[2][t[1]]) + ' svelte-1a6sqal'));
		},
		m(t, r) {
			a(t, e, r),
				w(e, s),
				j && j.m(s, null),
				w(e, l),
				w(e, n),
				P && P.m(n, null),
				w(e, c),
				w(e, $),
				S && S.m($, null),
				w(e, u),
				w(e, f),
				H && H.m(f, null),
				w(e, _),
				w(e, E),
				A && A.m(E, null),
				w(e, k),
				w(e, I),
				O && O.m(I, null),
				w(e, D),
				w(e, V),
				z && z.m(V, null),
				(G = !0);
		},
		p(t, s) {
			j && j.p && 8 & s && b(j, M, t, t[3], s, null, null),
				P && P.p && 8 & s && b(P, L, t, t[3], s, yt, wt),
				S && S.p && 8 & s && b(S, B, t, t[3], s, gt, xt),
				H && H.p && 8 & s && b(H, C, t, t[3], s, ht, vt),
				A && A.p && 8 & s && b(A, T, t, t[3], s, dt, mt),
				O && O.p && 8 & s && b(O, F, t, t[3], s, ft, pt),
				z && z.p && 8 & s && b(z, U, t, t[3], s, $t, ut),
				(!G || (2 & s && q !== (q = y(t[2][t[1]]) + ' svelte-1a6sqal'))) && x(e, 'class', q);
		},
		i(t) {
			G || (o(j, t), o(P, t), o(S, t), o(H, t), o(A, t), o(O, t), o(z, t), (G = !0));
		},
		o(t) {
			r(j, t), r(P, t), r(S, t), r(H, t), r(A, t), r(O, t), r(z, t), (G = !1);
		},
		d(t) {
			t && i(e),
				j && j.d(t),
				P && P.d(t),
				S && S.d(t),
				H && H.d(t),
				A && A.d(t),
				O && O.d(t),
				z && z.d(t);
		}
	};
}
function qt(t) {
	let e, s, l, n, c, $, u, f;
	const _ = t[4].subarea1,
		E = p(_, t, t[3], kt),
		k = t[4].default,
		I = p(k, t, t[3], null),
		D = t[4].subarea2,
		V = p(D, t, t[3], _t);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				E && E.c(),
				(l = m()),
				(n = d('div')),
				I && I.c(),
				(c = m()),
				($ = d('div')),
				V && V.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var a = v(e);
			s = h(a, 'DIV', { class: !0 });
			var r = v(s);
			E && E.l(r), r.forEach(i), (l = g(a)), (n = h(a, 'DIV', { class: !0 }));
			var o = v(n);
			I && I.l(o), o.forEach(i), (c = g(a)), ($ = h(a, 'DIV', { class: !0 }));
			var u = v($);
			V && V.l(u), u.forEach(i), a.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'svelte-1a6sqal'),
				x(n, 'class', 'svelte-1a6sqal'),
				x($, 'class', 'svelte-1a6sqal'),
				x(e, 'class', (u = y(t[2][t[1]]) + ' svelte-1a6sqal'));
		},
		m(t, r) {
			a(t, e, r),
				w(e, s),
				E && E.m(s, null),
				w(e, l),
				w(e, n),
				I && I.m(n, null),
				w(e, c),
				w(e, $),
				V && V.m($, null),
				(f = !0);
		},
		p(t, s) {
			E && E.p && 8 & s && b(E, _, t, t[3], s, Et, kt),
				I && I.p && 8 & s && b(I, k, t, t[3], s, null, null),
				V && V.p && 8 & s && b(V, D, t, t[3], s, bt, _t),
				(!f || (2 & s && u !== (u = y(t[2][t[1]]) + ' svelte-1a6sqal'))) && x(e, 'class', u);
		},
		i(t) {
			f || (o(E, t), o(I, t), o(V, t), (f = !0));
		},
		o(t) {
			r(E, t), r(I, t), r(V, t), (f = !1);
		},
		d(t) {
			t && i(e), E && E.d(t), I && I.d(t), V && V.d(t);
		}
	};
}
function Gt(t) {
	let e, s, $, u;
	const f = [qt, Vt, Dt, It],
		p = [];
	function d(t, e) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2 === t[0] ? 2 : 3;
	}
	return (
		(e = d(t)),
		(s = p[e] = f[e](t)),
		{
			c() {
				s.c(), ($ = l());
			},
			l(t) {
				s.l(t), ($ = l());
			},
			m(t, s) {
				p[e].m(t, s), a(t, $, s), (u = !0);
			},
			p(t, [l]) {
				let a = e;
				(e = d(t)),
					e === a
						? p[e].p(t, l)
						: (n(),
						  r(p[a], 1, 1, () => {
								p[a] = null;
						  }),
						  c(),
						  (s = p[e]),
						  s ? s.p(t, l) : ((s = p[e] = f[e](t)), s.c()),
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
function Mt(t, e, s) {
	let { $$slots: l = {}, $$scope: a } = e,
		{ tipo: n = 0 } = e,
		{ variante: r = 0 } = e;
	return (
		(t.$$set = (t) => {
			'tipo' in t && s(0, (n = t.tipo)),
				'variante' in t && s(1, (r = t.variante)),
				'$$scope' in t && s(3, (a = t.$$scope));
		}),
		[
			n,
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
			a,
			l
		]
	);
}
class jt extends t {
	constructor(t) {
		super(), e(this, t, Mt, Gt, s, { tipo: 0, variante: 1 });
	}
}
function Lt(t, e, s) {
	const l = t.slice();
	return (l[17] = e[s]), (l[19] = s), l;
}
const Pt = (t) => ({}),
	Bt = (t) => ({});
function St(t) {
	let e;
	return {
		c() {
			e = $('Play');
		},
		l(t) {
			e = u(t, 'Play');
		},
		m(t, s) {
			a(t, e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function Ct(t) {
	let e, s;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [St] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				16384 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function Ht(t, e) {
	let s, l, n;
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
				x(s, 'cx', (l = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'cy', (n = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				x(s, 'class', 'svelte-p6788k'),
				(this.first = s);
		},
		m(t, e) {
			a(t, s, e);
		},
		p(t, a) {
			(e = t),
				36 & a && l !== (l = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2) && x(s, 'cx', l),
				36 & a && n !== (n = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2) && x(s, 'cy', n);
		},
		d(t) {
			t && i(s);
		}
	};
}
function Tt(t) {
	let e, s, l, n, c, $, u, f, y, P, B, C, H, T, A, F;
	_(t[10]),
		(l = new Y({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } })),
		(B = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [Ct] }, $$scope: { ctx: t } }
		}));
	const O = t[9].hasvideo,
		U = p(O, t, t[14], Bt),
		z =
			U ||
			(function (t) {
				let e,
					s,
					l = [],
					n = new Map(),
					r = { length: t[5] };
				const c = (t) => t[19];
				for (let a = 0; a < r.length; a += 1) {
					let e = Lt(t, r, a),
						s = c(e);
					n.set(s, (l[a] = Ht(s, e)));
				}
				return {
					c() {
						(e = E('svg')), (s = E('g'));
						for (let t = 0; t < l.length; t += 1) l[t].c();
						this.h();
					},
					l(t) {
						e = h(t, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var a = v(e);
						s = h(a, 'g', { class: !0 }, 1);
						var n = v(s);
						for (let e = 0; e < l.length; e += 1) l[e].l(n);
						n.forEach(i), a.forEach(i), this.h();
					},
					h() {
						x(s, 'class', 'svelte-p6788k'),
							x(e, 'viewBox', '0 0 200 200'),
							x(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							x(e, 'class', 'svelte-p6788k');
					},
					m(t, n) {
						a(t, e, n), w(e, s);
						for (let e = 0; e < l.length; e += 1) l[e].m(s, null);
					},
					p(t, e) {
						100 & e && ((r = { length: t[5] }), (l = k(l, e, c, 1, t, r, n, s, S, Ht, null, Lt)));
					},
					d(t) {
						t && i(e);
						for (let e = 0; e < l.length; e += 1) l[e].d();
					}
				};
			})(t);
	return {
		c() {
			(e = d('main')),
				(s = d('div')),
				I(l.$$.fragment),
				(n = m()),
				(c = d('div')),
				($ = d('div')),
				(u = d('input')),
				(f = m()),
				(y = d('input')),
				(P = m()),
				I(B.$$.fragment),
				(C = m()),
				(H = d('div')),
				z && z.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'MAIN', { class: !0 });
			var a = v(e);
			s = h(a, 'DIV', { class: !0 });
			var r = v(s);
			D(l.$$.fragment, r), r.forEach(i), (n = g(a)), (c = h(a, 'DIV', { class: !0 }));
			var o = v(c);
			$ = h(o, 'DIV', { class: !0 });
			var p = v($);
			(u = h(p, 'INPUT', { type: !0, step: !0, class: !0 })),
				(f = g(p)),
				(y = h(p, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
				p.forEach(i),
				(P = g(o)),
				D(B.$$.fragment, o),
				o.forEach(i),
				(C = g(a)),
				(H = h(a, 'DIV', { class: !0 }));
			var d = v(H);
			z && z.l(d), d.forEach(i), a.forEach(i), this.h();
		},
		h() {
			x(s, 'class', 'col_13 p_3 bgc_3 svelte-p6788k'),
				x(u, 'type', 'number'),
				x(u, 'step', '0.001'),
				x(u, 'class', 'svelte-p6788k'),
				x(y, 'type', 'range'),
				x(y, 'min', 0),
				x(y, 'max', At),
				x(y, 'class', 'svelte-p6788k'),
				x($, 'class', 'controls svelte-p6788k'),
				x(c, 'class', 'col_12 col_s2_5 dg_0 p_3 pcc svelte-p6788k'),
				x(H, 'class', 'col_13 col_s2_8 svelte-p6788k'),
				x(e, 'class', 'dg bgc_4 svelte-p6788k');
		},
		m(r, o) {
			a(r, e, o),
				w(e, s),
				V(l, s, null),
				w(e, n),
				w(e, c),
				w(c, $),
				w($, u),
				q(u, t[2]),
				w($, f),
				w($, y),
				q(y, t[5]),
				w(c, P),
				V(B, c, null),
				w(e, C),
				w(e, H),
				z && z.m(H, null),
				(T = !0),
				A ||
					((F = [
						G(window, 'resize', t[10]),
						G(u, 'input', t[11]),
						G(y, 'change', t[12]),
						G(y, 'input', t[12])
					]),
					(A = !0));
		},
		p(t, [e]) {
			const s = {};
			1 & e && (s.title = t[0]),
				2 & e && (s.subtitle = t[1]),
				l.$set(s),
				4 & e && M(u.value) !== t[2] && q(u, t[2]),
				32 & e && q(y, t[5]);
			const a = {};
			16416 & e && (a.$$scope = { dirty: e, ctx: t }),
				B.$set(a),
				U ? U.p && 16384 & e && b(U, O, t, t[14], e, Pt, Bt) : z && z.p && 36 & e && z.p(t, e);
		},
		i(t) {
			T || (o(l.$$.fragment, t), o(B.$$.fragment, t), o(z, t), (T = !0));
		},
		o(t) {
			r(l.$$.fragment, t), r(B.$$.fragment, t), r(z, t), (T = !1);
		},
		d(t) {
			t && i(e), j(l), j(B), z && z.d(t), (A = !1), L(F);
		}
	};
}
let At = 360;
function Ft(t, e, s) {
	let l,
		a,
		n,
		{ $$slots: r = {}, $$scope: c } = e,
		{ title: o = '' } = e,
		{ text: i = '' } = e,
		$ = 0.618033988749,
		u = X(0, { duration: 500, interpolate: (t, e) => (s) => Math.round((e - t) * s + t) });
	P(t, u, (t) => s(5, (l = t)));
	let { variante: f = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && s(0, (o = t.title)),
				'text' in t && s(1, (i = t.text)),
				'variante' in t && s(8, (f = t.variante)),
				'$$scope' in t && s(14, (c = t.$$scope));
		}),
		B(u, (l = At), l),
		[
			o,
			i,
			$,
			a,
			n,
			l,
			1.62 * 1.62,
			u,
			f,
			r,
			function () {
				s(3, (a = window.innerWidth)), s(4, (n = window.innerHeight));
			},
			function () {
				($ = M(this.value)), s(2, $);
			},
			function () {
				(l = M(this.value)), u.set(l);
			},
			() => {
				B(u, (l = l > 0 ? 0 : At), l);
			},
			c
		]
	);
}
class Ot extends t {
	constructor(t) {
		super(), e(this, t, Ft, Tt, s, { title: 0, text: 1, variante: 8 });
	}
}
function Ut(t) {
	let e, s, l, n;
	return {
		c() {
			(e = E('div')), (s = $('xxx')), this.h();
		},
		l(t) {
			e = h(t, 'div', { class: !0 }, 1);
			var l = v(e);
			(s = u(l, 'xxx')), l.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'svelte-1fkdoa9');
		},
		m(t, l) {
			a(t, e, l), w(e, s), (n = !0);
		},
		i(t) {
			n ||
				(_(() => {
					l || (l = C(e, Z, {}, !0)), l.run(1);
				}),
				(n = !0));
		},
		o(t) {
			l || (l = C(e, Z, {}, !1)), l.run(0), (n = !1);
		},
		d(t) {
			t && i(e), t && l && l.end();
		}
	};
}
function zt(t) {
	let e,
		s,
		$,
		u,
		f,
		d = t[2] && Ut();
	const m = t[7].default,
		g = p(m, t, t[6], null);
	return {
		c() {
			(e = E('text')), d && d.c(), (s = l()), g && g.c(), this.h();
		},
		l(t) {
			e = h(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var a = v(e);
			d && d.l(a), (s = l()), g && g.l(a), a.forEach(i), this.h();
		},
		h() {
			x(e, 'x', t[0]),
				x(e, 'y', t[1]),
				x(e, 'font-size', '55'),
				x(e, 'class', 'draggable svelte-1fkdoa9');
		},
		m(l, n) {
			a(l, e, n),
				d && d.m(e, null),
				w(e, s),
				g && g.m(e, null),
				($ = !0),
				u ||
					((f = [G(window, 'mouseup', t[4]), G(e, 'mousedown', t[3]), G(e, 'mousemove', t[5])]),
					(u = !0));
		},
		p(t, [l]) {
			t[2]
				? d
					? 4 & l && o(d, 1)
					: ((d = Ut()), d.c(), o(d, 1), d.m(e, s))
				: d &&
				  (n(),
				  r(d, 1, 1, () => {
						d = null;
				  }),
				  c()),
				g && g.p && 64 & l && b(g, m, t, t[6], l, null, null),
				(!$ || 1 & l) && x(e, 'x', t[0]),
				(!$ || 2 & l) && x(e, 'y', t[1]);
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
function Nt(t, e, s) {
	let { $$slots: l = {}, $$scope: a } = e,
		{ x: n = 0 } = e,
		{ y: r = 0 } = e,
		c = !1;
	return (
		(t.$$set = (t) => {
			'x' in t && s(0, (n = t.x)),
				'y' in t && s(1, (r = t.y)),
				'$$scope' in t && s(6, (a = t.$$scope));
		}),
		[
			n,
			r,
			c,
			() => {
				s(2, (c = !0));
			},
			function () {
				s(2, (c = !1));
			},
			function (t) {
				c && (s(0, (n += 2.5 * t.movementX)), s(1, (r += 2.5 * t.movementY)));
			},
			a,
			l
		]
	);
}
class Rt extends t {
	constructor(t) {
		super(), e(this, t, Nt, zt, s, { x: 0, y: 1 });
	}
}
function Jt(t) {
	let e, s, l, n, c;
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
			x(e, 'name', t[0]), x(e, 'class', (s = y(t[2][t[1]]) + ' svelte-10qlrls'));
		},
		m(s, r) {
			a(s, e, r), u && u.m(e, null), (l = !0), n || ((c = G(e, 'submit', H(t[5]))), (n = !0));
		},
		p(t, [a]) {
			u && u.p && 8 & a && b(u, $, t, t[3], a, null, null),
				(!l || 1 & a) && x(e, 'name', t[0]),
				(!l || (2 & a && s !== (s = y(t[2][t[1]]) + ' svelte-10qlrls'))) && x(e, 'class', s);
		},
		i(t) {
			l || (o(u, t), (l = !0));
		},
		o(t) {
			r(u, t), (l = !1);
		},
		d(t) {
			t && i(e), u && u.d(t), (n = !1), c();
		}
	};
}
function Yt(t, e, s) {
	let { $$slots: l = {}, $$scope: a } = e,
		{ name: n = 'My form group' } = e,
		{ variante: r = 0 } = e;
	return (
		(t.$$set = (t) => {
			'name' in t && s(0, (n = t.name)),
				'variante' in t && s(1, (r = t.variante)),
				'$$scope' in t && s(3, (a = t.$$scope));
		}),
		[
			n,
			r,
			['Form_0', 'Form_1'],
			a,
			l,
			function (e) {
				T(t, e);
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
	let e, s, l;
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
				x(e, 'class', 'svelte-8q4hwc');
		},
		m(n, r) {
			a(n, e, r), s || ((l = G(e, 'input', t[2])), (s = !0));
		},
		p(t, [s]) {
			1 & s && e.value !== t[0] && (e.value = t[0]), 2 & s && x(e, 'placeholder', t[1]);
		},
		i: f,
		o: f,
		d(t) {
			t && i(e), (s = !1), l();
		}
	};
}
function Wt(t, e, s) {
	let { value: l = '' } = e,
		{ placeholder: a = '"...בראשית ברא אלהים"' } = e;
	return (
		(t.$$set = (t) => {
			'value' in t && s(0, (l = t.value)), 'placeholder' in t && s(1, (a = t.placeholder));
		}),
		[l, a, (t) => s(0, (l = t.target.value))]
	);
}
class Xt extends t {
	constructor(t) {
		super(), e(this, t, Wt, Qt, s, { value: 0, placeholder: 1 });
	}
}
function Zt(t, e, s) {
	const l = t.slice();
	return (l[13] = e[s]), l;
}
function te(t, e, s) {
	const l = t.slice();
	return (l[16] = e[s]), l;
}
function ee(t, e, s) {
	const l = t.slice();
	return (l[19] = e[s]), l;
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
				x(e, 'class', 'svelte-1ttao41');
		},
		m(t, s) {
			a(t, e, s);
		},
		p: f,
		d(t) {
			t && i(e);
		}
	};
}
function le(t) {
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
			a(t, e, s);
		},
		p: f,
		d(t) {
			t && i(e);
		}
	};
}
function ae(t) {
	let e, s;
	return (
		(e = new Rt({
			props: { x: t[16].xpos, y: t[16].ypos, $$slots: { default: [le] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				4194304 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function ne(t) {
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
			a(t, e, s);
		},
		p(t, l) {
			1 & l && s !== (s = t[13] + '') && z(e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function re(t) {
	let e, s;
	return (
		(e = new Rt({ props: { x: de, y: me, $$slots: { default: [ne] }, $$scope: { ctx: t } } })),
		{
			c() {
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				4194305 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
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
	for (let l = 0; l < p.length; l += 1) d[l] = se(ee(t, p, l));
	let m = t[5],
		g = [];
	for (let l = 0; l < m.length; l += 1) g[l] = ae(te(t, m, l));
	const y = (t) =>
		r(g[t], 1, 1, () => {
			g[t] = null;
		});
	let b = t[0],
		_ = [];
	for (let l = 0; l < b.length; l += 1) _[l] = re(Zt(t, b, l));
	const k = (t) =>
		r(_[t], 1, 1, () => {
			_[t] = null;
		});
	return {
		c() {
			(e = E('svg')), (s = E('g'));
			for (let t = 0; t < d.length; t += 1) d[t].c();
			$ = l();
			for (let t = 0; t < g.length; t += 1) g[t].c();
			u = l();
			for (let t = 0; t < _.length; t += 1) _[t].c();
			this.h();
		},
		l(t) {
			e = h(t, 'svg', { viewBox: !0, class: !0 }, 1);
			var a = v(e);
			s = h(a, 'g', { transform: !0, class: !0 }, 1);
			var n = v(s);
			for (let e = 0; e < d.length; e += 1) d[e].l(n);
			$ = l();
			for (let e = 0; e < g.length; e += 1) g[e].l(n);
			u = l();
			for (let e = 0; e < _.length; e += 1) _[e].l(n);
			n.forEach(i), a.forEach(i), this.h();
		},
		h() {
			x(s, 'transform', 'translate(150,150) scale(0.7)'),
				x(s, 'class', 'svelte-1ttao41'),
				x(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				x(e, 'class', 'svelte-1ttao41');
		},
		m(l, n) {
			a(l, e, n), w(e, s);
			for (let t = 0; t < d.length; t += 1) d[t].m(s, null);
			w(s, $);
			for (let t = 0; t < g.length; t += 1) g[t].m(s, null);
			w(s, u);
			for (let t = 0; t < _.length; t += 1) _[t].m(s, null);
			t[10](e), (f = !0);
		},
		p(t, e) {
			if (16 & e) {
				let l;
				for (p = t[4], l = 0; l < p.length; l += 1) {
					const a = ee(t, p, l);
					d[l] ? d[l].p(a, e) : ((d[l] = se(a)), d[l].c(), d[l].m(s, $));
				}
				for (; l < d.length; l += 1) d[l].d(1);
				d.length = p.length;
			}
			if (32 & e) {
				let l;
				for (m = t[5], l = 0; l < m.length; l += 1) {
					const a = te(t, m, l);
					g[l] ? (g[l].p(a, e), o(g[l], 1)) : ((g[l] = ae(a)), g[l].c(), o(g[l], 1), g[l].m(s, u));
				}
				for (n(), l = m.length; l < g.length; l += 1) y(l);
				c();
			}
			if (1 & e) {
				let l;
				for (b = t[0], l = 0; l < b.length; l += 1) {
					const a = Zt(t, b, l);
					_[l]
						? (_[l].p(a, e), o(_[l], 1))
						: ((_[l] = re(a)), _[l].c(), o(_[l], 1), _[l].m(s, null));
				}
				for (n(), l = b.length; l < _.length; l += 1) k(l);
				c();
			}
		},
		i(t) {
			if (!f) {
				for (let t = 0; t < m.length; t += 1) o(g[t]);
				for (let t = 0; t < b.length; t += 1) o(_[t]);
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
			s && i(e), A(d, s), A(g, s), A(_, s), t[10](null);
		}
	};
}
function oe(t) {
	let e, s, l, n, c;
	function $(e) {
		t[9](e);
	}
	let u = { placeholder: 'Your word' };
	return (
		void 0 !== t[1] && (u.value = t[1]),
		(e = new Xt({ props: u })),
		F.push(() => O(e, 'value', $)),
		(n = new R({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				I(e.$$.fragment), (l = m()), I(n.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t), (l = g(t)), D(n.$$.fragment, t);
			},
			m(t, s) {
				V(e, t, s), a(t, l, s), V(n, t, s), (c = !0);
			},
			p(t, l) {
				const a = {};
				!s && 2 & l && ((s = !0), (a.value = t[1]), U(() => (s = !1))), e.$set(a);
			},
			i(t) {
				c || (o(e.$$.fragment, t), o(n.$$.fragment, t), (c = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(n.$$.fragment, t), (c = !1);
			},
			d(t) {
				j(e, t), t && i(l), j(n, t);
			}
		}
	);
}
function ie(t) {
	let e, s, l, n, c;
	return (
		(s = new Y({
			props: {
				tipo: 3,
				variante: 7,
				title: 'Meta-Mapa +0+1234',
				subtitle: 'Escribe y ordena conceptos en el mapa +0+1234'
			}
		})),
		(n = new Kt({ props: { variante: 1, $$slots: { default: [oe] }, $$scope: { ctx: t } } })),
		n.$on('submit', t[6]),
		{
			c() {
				(e = d('div')), I(s.$$.fragment), (l = m()), I(n.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var a = v(e);
				D(s.$$.fragment, a), (l = g(a)), D(n.$$.fragment, a), a.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea1'), x(e, 'class', 'svelte-1ttao41');
			},
			m(t, r) {
				a(t, e, r), V(s, e, null), w(e, l), V(n, e, null), (c = !0);
			},
			p(t, e) {
				const s = {};
				4194306 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
			},
			i(t) {
				c || (o(s.$$.fragment, t), o(n.$$.fragment, t), (c = !0));
			},
			o(t) {
				r(s.$$.fragment, t), r(n.$$.fragment, t), (c = !1);
			},
			d(t) {
				t && i(e), j(s), j(n);
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
			a(t, e, s);
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
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				4194304 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function fe(t) {
	let e, s, l;
	return (
		(s = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [ue] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = d('div')), I(s.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'DIV', { slot: !0, class: !0 });
				var l = v(e);
				D(s.$$.fragment, l), l.forEach(i), this.h();
			},
			h() {
				x(e, 'slot', 'subarea2'), x(e, 'class', 'svelte-1ttao41');
			},
			m(t, n) {
				a(t, e, n), V(s, e, null), (l = !0);
			},
			p(t, e) {
				const l = {};
				4194308 & e && (l.$$scope = { dirty: e, ctx: t }), s.$set(l);
			},
			i(t) {
				l || (o(s.$$.fragment, t), (l = !0));
			},
			o(t) {
				r(s.$$.fragment, t), (l = !1);
			},
			d(t) {
				t && i(e), j(s);
			}
		}
	);
}
function pe(t) {
	let e, s;
	return (
		(e = new jt({
			props: {
				variante: 0,
				$$slots: { subarea2: [fe], subarea1: [ie], default: [ce] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			p(t, [s]) {
				const l = {};
				4194311 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
let de = 0,
	me = 0;
function he(t, e, s) {
	let l = [],
		a = '',
		n = { width: 1e3, height: 1e3 },
		r = n.width / 4,
		c = n.width / 2;
	let o = null;
	const i = (t, e = 'your-01234-map.svg') => {
		t.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		let s = t.outerHTML,
			l = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', s], {
				type: 'image/svg+xml;charset=utf-8'
			}),
			a = URL.createObjectURL(l),
			n = document.createElement('a');
		(n.href = a),
			(n.download = e),
			document.body.appendChild(n),
			n.click(),
			document.body.removeChild(n);
	};
	return [
		l,
		a,
		o,
		n,
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
			s(0, (l = [...l, a]));
		},
		i,
		() => i(o),
		function (t) {
			(a = t), s(1, a);
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
		super(), e(this, t, he, pe, s, {});
	}
}
function ge(t) {
	let e, s;
	const l = t[2].default,
		n = p(l, t, t[1], null);
	return {
		c() {
			(e = d('div')), n && n.c(), this.h();
		},
		l(t) {
			e = h(t, 'DIV', { class: !0 });
			var s = v(e);
			n && n.l(s), s.forEach(i), this.h();
		},
		h() {
			x(e, 'class', 'Alert svelte-ygvvuy'), N(e, 'haserror', !t[0]);
		},
		m(t, l) {
			a(t, e, l), n && n.m(e, null), (s = !0);
		},
		p(t, [s]) {
			n && n.p && 2 & s && b(n, l, t, t[1], s, null, null), 1 & s && N(e, 'haserror', !t[0]);
		},
		i(t) {
			s || (o(n, t), (s = !0));
		},
		o(t) {
			r(n, t), (s = !1);
		},
		d(t) {
			t && i(e), n && n.d(t);
		}
	};
}
function xe(t, e, s) {
	let { $$slots: l = {}, $$scope: a } = e,
		{ haserror: n = !1 } = e;
	return (
		(t.$$set = (t) => {
			'haserror' in t && s(0, (n = t.haserror)), '$$scope' in t && s(1, (a = t.$$scope));
		}),
		[n, a, l]
	);
}
class ye extends t {
	constructor(t) {
		super(), e(this, t, xe, ge, s, { haserror: 0 });
	}
}
function we(t) {
	let e;
	return {
		c() {
			e = $('Codex de Leningrado');
		},
		l(t) {
			e = u(t, 'Codex de Leningrado');
		},
		m(t, s) {
			a(t, e, s);
		},
		d(t) {
			t && i(e);
		}
	};
}
function be(t) {
	let e, s;
	return (
		(e = new W({
			props: {
				tipo: 2,
				variante: 6,
				href: 'https://tanach.us/Server.txt?Genesis*&content=Consonants',
				target: '_blank',
				$$slots: { default: [we] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				512 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function _e(t) {
	let e, s, l, n, c;
	function $(e) {
		t[5](e);
	}
	let u = {};
	return (
		void 0 !== t[0] && (u.value = t[0]),
		(e = new Xt({ props: u })),
		F.push(() => O(e, 'value', $)),
		(n = new R({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				I(e.$$.fragment), (l = m()), I(n.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t), (l = g(t)), D(n.$$.fragment, t);
			},
			m(t, s) {
				V(e, t, s), a(t, l, s), V(n, t, s), (c = !0);
			},
			p(t, l) {
				const a = {};
				!s && 1 & l && ((s = !0), (a.value = t[0]), U(() => (s = !1))), e.$set(a);
				const r = {};
				1 & l && (r.valorinput = t[0]), n.$set(r);
			},
			i(t) {
				c || (o(e.$$.fragment, t), o(n.$$.fragment, t), (c = !0));
			},
			o(t) {
				r(e.$$.fragment, t), r(n.$$.fragment, t), (c = !1);
			},
			d(t) {
				j(e, t), t && i(l), j(n, t);
			}
		}
	);
}
function Ee(t) {
	let e, s;
	return (
		(e = new ye({ props: { $$slots: { default: [ke] }, $$scope: { ctx: t } } })),
		{
			c() {
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			p(t, s) {
				const l = {};
				516 & s && (l.$$scope = { dirty: s, ctx: t }), e.$set(l);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function ke(t) {
	let e;
	return {
		c() {
			e = $(t[2]);
		},
		l(s) {
			e = u(s, t[2]);
		},
		m(t, s) {
			a(t, e, s);
		},
		p(t, s) {
			4 & s && z(e, t[2]);
		},
		d(t) {
			t && i(e);
		}
	};
}
function Ie(t) {
	let e, s, l, f, p, y, b, _, E, k, q, G, M, L, P, B, S, C, H, T;
	(l = new Y({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(E = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [be] }, $$scope: { ctx: t } }
		})),
		(B = new Kt({ props: { variante: 1, $$slots: { default: [_e] }, $$scope: { ctx: t } } })),
		B.$on('submit', t[4]);
	let A = 1 == t[1] && Ee(t);
	return {
		c() {
			(e = d('div')),
				(s = d('div')),
				I(l.$$.fragment),
				(f = m()),
				(p = d('footer')),
				(y = d('small')),
				(b = $('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(_ = m()),
				I(E.$$.fragment),
				(k = m()),
				(q = d('div')),
				(G = d('h2')),
				(M = $(t[3])),
				(L = m()),
				(P = d('div')),
				I(B.$$.fragment),
				(S = m()),
				A && A.c(),
				(C = m()),
				(H = d('div')),
				this.h();
		},
		l(a) {
			e = h(a, 'DIV', { class: !0 });
			var n = v(e);
			s = h(n, 'DIV', { class: !0 });
			var r = v(s);
			D(l.$$.fragment, r), (f = g(r)), (p = h(r, 'FOOTER', { class: !0 }));
			var c = v(p);
			y = h(c, 'SMALL', { class: !0 });
			var o = v(y);
			(b = u(o, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				o.forEach(i),
				(_ = g(c)),
				D(E.$$.fragment, c),
				c.forEach(i),
				r.forEach(i),
				(k = g(n)),
				(q = h(n, 'DIV', { class: !0 }));
			var $ = v(q);
			G = h($, 'H2', { class: !0 });
			var d = v(G);
			(M = u(d, t[3])), d.forEach(i), (L = g($)), (P = h($, 'DIV', { class: !0 }));
			var m = v(P);
			D(B.$$.fragment, m),
				m.forEach(i),
				(S = g($)),
				A && A.l($),
				$.forEach(i),
				(C = g(n)),
				(H = h(n, 'DIV', { class: !0 })),
				v(H).forEach(i),
				n.forEach(i),
				this.h();
		},
		h() {
			x(y, 'class', 'svelte-7k4xd1'),
				x(p, 'class', 'svelte-7k4xd1'),
				x(s, 'class', 'col_6 svelte-7k4xd1'),
				x(G, 'class', 'result svelte-7k4xd1'),
				x(P, 'class', 'position-form svelte-7k4xd1'),
				x(q, 'class', 'col_7 svelte-7k4xd1'),
				x(H, 'class', 'col_5 svelte-7k4xd1'),
				x(e, 'class', 'dg bgc_primary c_5 p_3 rg_1 cg_s2_2 tal svelte-7k4xd1');
		},
		m(t, n) {
			a(t, e, n),
				w(e, s),
				V(l, s, null),
				w(s, f),
				w(s, p),
				w(p, y),
				w(y, b),
				w(p, _),
				V(E, p, null),
				w(e, k),
				w(e, q),
				w(q, G),
				w(G, M),
				w(q, L),
				w(q, P),
				V(B, P, null),
				w(q, S),
				A && A.m(q, null),
				w(e, C),
				w(e, H),
				(T = !0);
		},
		p(t, [e]) {
			const s = {};
			512 & e && (s.$$scope = { dirty: e, ctx: t }), E.$set(s), (!T || 8 & e) && z(M, t[3]);
			const l = {};
			513 & e && (l.$$scope = { dirty: e, ctx: t }),
				B.$set(l),
				1 == t[1]
					? A
						? (A.p(t, e), 2 & e && o(A, 1))
						: ((A = Ee(t)), A.c(), o(A, 1), A.m(q, null))
					: A &&
					  (n(),
					  r(A, 1, 1, () => {
							A = null;
					  }),
					  c());
		},
		i(t) {
			T || (o(l.$$.fragment, t), o(E.$$.fragment, t), o(B.$$.fragment, t), o(A), (T = !0));
		},
		o(t) {
			r(l.$$.fragment, t), r(E.$$.fragment, t), r(B.$$.fragment, t), r(A), (T = !1);
		},
		d(t) {
			t && i(e), j(l), j(E), j(B), A && A.d();
		}
	};
}
function De(t, e, s) {
	let l,
		a = '',
		n = !1,
		r = '',
		c = [];
	return (
		s(3, (l = 0)),
		[
			a,
			n,
			r,
			l,
			function () {
				s(1, (n = !1)), s(3, (l = 0)), s(0, a), (c = a.split('')), s(2, (r = ''));
				for (const t of c)
					'א' == t
						? s(3, (l += 1))
						: 'ב' == t
						? s(3, (l += 2))
						: 'ג' == t
						? s(3, (l += 3))
						: 'ד' == t
						? s(3, (l += 4))
						: 'ה' == t
						? s(3, (l += 5))
						: 'ו' == t
						? s(3, (l += 6))
						: 'ז' == t
						? s(3, (l += 7))
						: 'ח' == t
						? s(3, (l += 8))
						: 'ט' == t
						? s(3, (l += 9))
						: 'י' == t
						? s(3, (l += 10))
						: 'כ' == t
						? s(3, (l += 20))
						: 'ל' == t
						? s(3, (l += 30))
						: 'מ' == t
						? s(3, (l += 40))
						: 'ן' == t
						? s(3, (l += 50))
						: 'ס' == t
						? s(3, (l += 60))
						: 'ע' == t
						? s(3, (l += 70))
						: 'פ' == t
						? s(3, (l += 80))
						: 'צ' == t
						? s(3, (l += 90))
						: 'ק' == t
						? s(3, (l += 100))
						: 'ר' == t
						? s(3, (l += 200))
						: 'ש' == t
						? s(3, (l += 300))
						: 'ת' == t
						? s(3, (l += 400))
						: 'ך' == t
						? s(3, (l += 500))
						: 'ם' == t
						? s(3, (l += 600))
						: 'ן' == t
						? s(3, (l += 700))
						: 'ף' == t
						? s(3, (l += 800))
						: 'ץ' == t
						? s(3, (l += 900))
						: ' ' == t
						? s(3, (l += 0))
						: (s(1, (n = !0)),
						  s(1, (n = !0))
								? s(2, (r = 'Sólo contabilizan las consonantes hebreas.'))
								: (s(1, (n = !1)), s(2, (r = ''))));
				return l;
			},
			function (t) {
				(a = t), s(0, a);
			}
		]
	);
}
class Ve extends t {
	constructor(t) {
		super(), e(this, t, De, Ie, s, {});
	}
}
function qe(t) {
	let e, s;
	return (
		(e = new ve({})),
		{
			c() {
				I(e.$$.fragment);
			},
			l(t) {
				D(e.$$.fragment, t);
			},
			m(t, l) {
				V(e, t, l), (s = !0);
			},
			i(t) {
				s || (o(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				r(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				j(e, t);
			}
		}
	);
}
function Ge(t) {
	let e, s, l, n, c, $, u, f, p, y;
	return (
		(l = new Y({
			props: { tipo: 1, variante: 1, title: J[2].title, subtitle: J[2].subtitle, text: J[2].text }
		})),
		(c = new Ot({
			props: {
				title: 'La Divina Proporción',
				text:
					'<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>'
			}
		})),
		(u = new K({
			props: { id: 't0t', variante: 0, $$slots: { default: [qe] }, $$scope: { ctx: t } }
		})),
		(p = new Ve({})),
		{
			c() {
				(e = d('div')),
					(s = d('div')),
					I(l.$$.fragment),
					(n = m()),
					I(c.$$.fragment),
					($ = m()),
					I(u.$$.fragment),
					(f = m()),
					I(p.$$.fragment),
					this.h();
			},
			l(t) {
				e = h(t, 'DIV', { class: !0 });
				var a = v(e);
				s = h(a, 'DIV', { class: !0 });
				var r = v(s);
				D(l.$$.fragment, r),
					r.forEach(i),
					a.forEach(i),
					(n = g(t)),
					D(c.$$.fragment, t),
					($ = g(t)),
					D(u.$$.fragment, t),
					(f = g(t)),
					D(p.$$.fragment, t),
					this.h();
			},
			h() {
				x(s, 'class', 'col_13 p_3 dg_0 mh_0 pcc bgc_0 c_5 mh_2 tac'), x(e, 'class', 'dg');
			},
			m(t, r) {
				a(t, e, r),
					w(e, s),
					V(l, s, null),
					a(t, n, r),
					V(c, t, r),
					a(t, $, r),
					V(u, t, r),
					a(t, f, r),
					V(p, t, r),
					(y = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), u.$set(s);
			},
			i(t) {
				y ||
					(o(l.$$.fragment, t),
					o(c.$$.fragment, t),
					o(u.$$.fragment, t),
					o(p.$$.fragment, t),
					(y = !0));
			},
			o(t) {
				r(l.$$.fragment, t),
					r(c.$$.fragment, t),
					r(u.$$.fragment, t),
					r(p.$$.fragment, t),
					(y = !1);
			},
			d(t) {
				t && i(e), j(l), t && i(n), j(c, t), t && i($), j(u, t), t && i(f), j(p, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, Ge, s, {});
	}
}
