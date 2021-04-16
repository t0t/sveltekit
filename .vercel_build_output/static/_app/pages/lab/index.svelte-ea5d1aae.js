import {
	S as t,
	i as e,
	s as n,
	Q as s,
	M as r,
	E as a,
	c as l,
	a as o,
	d as c,
	o as $,
	f as i,
	g as f,
	a3 as u,
	p,
	j as m,
	e as h,
	q as g,
	l as d,
	r as v,
	a4 as x,
	H as w,
	O as y,
	a5 as b,
	w as E,
	x as j,
	y as k,
	K as M,
	a0 as I,
	a6 as z,
	a7 as D,
	t as L,
	b as P,
	R as B,
	k as G,
	C as S,
	D as V,
	I as T,
	a8 as A,
	F as C,
	n as H,
	J as _,
	T as F,
	U as O,
	V as U,
	h as N,
	G as R
} from '../../chunks/index-d91e1ed8.js';
import { B as q, c as J } from '../../chunks/Grid.svelte-81f2d089.js';
import { H as Y, S as K } from '../../chunks/Header-3d35273a.js';
import { L as Q, a as W } from '../../chunks/ListItem-91cb1752.js';
import { t as X } from '../../chunks/index-c4bdeab8.js';
import { G as Z } from '../../chunks/Grid-11b84c17.js';
import { f as tt } from '../../chunks/index-65311448.js';
/* empty css                                   */ import '../../chunks/index-cc16b092.js';
import '../../chunks/index-78b22dae.js';
function et(t, e, n) {
	const s = t.slice();
	return (s[17] = e[n]), (s[19] = n), s;
}
const nt = (t) => ({}),
	st = (t) => ({});
function rt(t, e) {
	let n, s, r;
	return {
		key: t,
		first: null,
		c() {
			(n = a('circle')), this.h();
		},
		l(t) {
			(n = l(t, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), o(n).forEach(c), this.h();
		},
		h() {
			$(n, 'r', e[6]),
				$(n, 'cx', (s = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				$(n, 'cy', (r = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2)),
				$(n, 'class', 'svelte-75gxbp'),
				(this.first = n);
		},
		m(t, e) {
			i(t, n, e);
		},
		p(t, a) {
			(e = t),
				36 & a && s !== (s = Math.cos(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2) && $(n, 'cx', s),
				36 & a && r !== (r = Math.sin(e[19] * e[2] * 2 * Math.PI) * e[19] * 0.2) && $(n, 'cy', r);
		},
		d(t) {
			t && c(n);
		}
	};
}
function at(t) {
	let e;
	return {
		c() {
			e = L('Play');
		},
		l(t) {
			e = P(t, 'Play');
		},
		m(t, n) {
			i(t, e, n);
		},
		d(t) {
			t && c(e);
		}
	};
}
function lt(t) {
	let e, n;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [at] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				16384 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function ot(t) {
	let e, n, I, z, L, P, B, G, S, V, T, A, C, H, _;
	s(t[10]), (e = new Y({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } }));
	const F = t[9].hasvideo,
		O = r(F, t, t[14], st),
		U =
			O ||
			(function (t) {
				let e,
					n,
					s = [],
					r = new Map(),
					p = { length: t[5] };
				const m = (t) => t[19];
				for (let a = 0; a < p.length; a += 1) {
					let e = et(t, p, a),
						n = m(e);
					r.set(n, (s[a] = rt(n, e)));
				}
				return {
					c() {
						(e = a('svg')), (n = a('g'));
						for (let t = 0; t < s.length; t += 1) s[t].c();
						this.h();
					},
					l(t) {
						e = l(t, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var r = o(e);
						n = l(r, 'g', { class: !0 }, 1);
						var a = o(n);
						for (let e = 0; e < s.length; e += 1) s[e].l(a);
						a.forEach(c), r.forEach(c), this.h();
					},
					h() {
						$(n, 'class', 'svelte-75gxbp'),
							$(e, 'viewBox', '0 0 200 200'),
							$(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							$(e, 'class', 'svelte-75gxbp');
					},
					m(t, r) {
						i(t, e, r), f(e, n);
						for (let e = 0; e < s.length; e += 1) s[e].m(n, null);
					},
					p(t, e) {
						100 & e && ((p = { length: t[5] }), (s = u(s, e, m, 1, t, p, r, n, D, rt, null, et)));
					},
					d(t) {
						t && c(e);
						for (let e = 0; e < s.length; e += 1) s[e].d();
					}
				};
			})(t);
	return (
		(A = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [lt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				p(e.$$.fragment),
					(n = m()),
					(I = h('main')),
					(z = h('div')),
					U && U.c(),
					(L = m()),
					(P = h('div')),
					(B = h('div')),
					(G = h('input')),
					(S = m()),
					(V = h('input')),
					(T = m()),
					p(A.$$.fragment),
					this.h();
			},
			l(t) {
				g(e.$$.fragment, t), (n = d(t)), (I = l(t, 'MAIN', { class: !0 }));
				var s = o(I);
				z = l(s, 'DIV', { class: !0 });
				var r = o(z);
				U && U.l(r), r.forEach(c), (L = d(s)), (P = l(s, 'DIV', { class: !0 }));
				var a = o(P);
				B = l(a, 'DIV', { class: !0 });
				var $ = o(B);
				(G = l($, 'INPUT', { type: !0, step: !0, class: !0 })),
					(S = d($)),
					(V = l($, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					$.forEach(c),
					(T = d(a)),
					g(A.$$.fragment, a),
					a.forEach(c),
					s.forEach(c),
					this.h();
			},
			h() {
				$(z, 'class', 'BannerMedia svelte-75gxbp'),
					$(G, 'type', 'number'),
					$(G, 'step', '0.001'),
					$(G, 'class', 'svelte-75gxbp'),
					$(V, 'type', 'range'),
					$(V, 'min', 0),
					$(V, 'max', ct),
					$(V, 'class', 'svelte-75gxbp'),
					$(B, 'class', 'controls svelte-75gxbp'),
					$(P, 'class', 'PhiSvgText svelte-75gxbp'),
					$(I, 'class', 'PhiSvg svelte-75gxbp');
			},
			m(s, r) {
				v(e, s, r),
					i(s, n, r),
					i(s, I, r),
					f(I, z),
					U && U.m(z, null),
					f(I, L),
					f(I, P),
					f(P, B),
					f(B, G),
					x(G, t[2]),
					f(B, S),
					f(B, V),
					x(V, t[5]),
					f(P, T),
					v(A, P, null),
					(C = !0),
					H ||
						((_ = [
							w(window, 'resize', t[10]),
							w(G, 'input', t[11]),
							w(V, 'change', t[12]),
							w(V, 'input', t[12])
						]),
						(H = !0));
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.title = t[0]),
					2 & n && (s.subtitle = t[1]),
					e.$set(s),
					O ? O.p && 16384 & n && y(O, F, t, t[14], n, nt, st) : U && U.p && 36 & n && U.p(t, n),
					4 & n && b(G.value) !== t[2] && x(G, t[2]),
					32 & n && x(V, t[5]);
				const r = {};
				16416 & n && (r.$$scope = { dirty: n, ctx: t }), A.$set(r);
			},
			i(t) {
				C || (E(e.$$.fragment, t), E(U, t), E(A.$$.fragment, t), (C = !0));
			},
			o(t) {
				j(e.$$.fragment, t), j(U, t), j(A.$$.fragment, t), (C = !1);
			},
			d(t) {
				k(e, t), t && c(n), t && c(I), U && U.d(t), k(A), (H = !1), M(_);
			}
		}
	);
}
let ct = 360;
function $t(t, e, n) {
	let s,
		r,
		a,
		{ $$slots: l = {}, $$scope: o } = e,
		{ title: c = '' } = e,
		{ text: $ = '' } = e,
		i = 0.618033988749,
		f = X(0, { duration: 500, interpolate: (t, e) => (n) => Math.round((e - t) * n + t) });
	I(t, f, (t) => n(5, (s = t)));
	let { variante: u = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && n(0, (c = t.title)),
				'text' in t && n(1, ($ = t.text)),
				'variante' in t && n(8, (u = t.variante)),
				'$$scope' in t && n(14, (o = t.$$scope));
		}),
		z(f, (s = ct), s),
		[
			c,
			$,
			i,
			r,
			a,
			s,
			1.62 * 1.62,
			f,
			u,
			l,
			function () {
				n(3, (r = window.innerWidth)), n(4, (a = window.innerHeight));
			},
			function () {
				(i = b(this.value)), n(2, i);
			},
			function () {
				(s = b(this.value)), f.set(s);
			},
			() => {
				z(f, (s = s > 0 ? 0 : ct), s);
			},
			o
		]
	);
}
class it extends t {
	constructor(t) {
		super(), e(this, t, $t, ot, n, { title: 0, text: 1, variante: 8 });
	}
}
function ft(t) {
	let e, n, r, u;
	return {
		c() {
			(e = a('div')), (n = L('xxx')), this.h();
		},
		l(t) {
			e = l(t, 'div', { class: !0 }, 1);
			var s = o(e);
			(n = P(s, 'xxx')), s.forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'svelte-zrpsxi');
		},
		m(t, s) {
			i(t, e, s), f(e, n), (u = !0);
		},
		i(t) {
			u ||
				(s(() => {
					r || (r = B(e, tt, {}, !0)), r.run(1);
				}),
				(u = !0));
		},
		o(t) {
			r || (r = B(e, tt, {}, !1)), r.run(0), (u = !1);
		},
		d(t) {
			t && c(e), t && r && r.end();
		}
	};
}
function ut(t) {
	let e,
		n,
		s,
		u,
		p,
		m = t[2] && ft();
	const h = t[7].default,
		g = r(h, t, t[6], null);
	return {
		c() {
			(e = a('text')), m && m.c(), (n = G()), g && g.c(), this.h();
		},
		l(t) {
			e = l(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var s = o(e);
			m && m.l(s), (n = G()), g && g.l(s), s.forEach(c), this.h();
		},
		h() {
			$(e, 'x', t[0]),
				$(e, 'y', t[1]),
				$(e, 'font-size', '55'),
				$(e, 'class', 'draggable svelte-zrpsxi');
		},
		m(r, a) {
			i(r, e, a),
				m && m.m(e, null),
				f(e, n),
				g && g.m(e, null),
				(s = !0),
				u ||
					((p = [w(window, 'mouseup', t[4]), w(e, 'mousedown', t[3]), w(e, 'mousemove', t[5])]),
					(u = !0));
		},
		p(t, [r]) {
			t[2]
				? m
					? 4 & r && E(m, 1)
					: ((m = ft()), m.c(), E(m, 1), m.m(e, n))
				: m &&
				  (S(),
				  j(m, 1, 1, () => {
						m = null;
				  }),
				  V()),
				g && g.p && 64 & r && y(g, h, t, t[6], r, null, null),
				(!s || 1 & r) && $(e, 'x', t[0]),
				(!s || 2 & r) && $(e, 'y', t[1]);
		},
		i(t) {
			s || (E(m), E(g, t), (s = !0));
		},
		o(t) {
			j(m), j(g, t), (s = !1);
		},
		d(t) {
			t && c(e), m && m.d(), g && g.d(t), (u = !1), M(p);
		}
	};
}
function pt(t, e, n) {
	let { $$slots: s = {}, $$scope: r } = e,
		{ x: a = 0 } = e,
		{ y: l = 0 } = e,
		o = !1;
	return (
		(t.$$set = (t) => {
			'x' in t && n(0, (a = t.x)),
				'y' in t && n(1, (l = t.y)),
				'$$scope' in t && n(6, (r = t.$$scope));
		}),
		[
			a,
			l,
			o,
			() => {
				n(2, (o = !0));
			},
			function () {
				n(2, (o = !1));
			},
			function (t) {
				o && (n(0, (a += 2.5 * t.movementX)), n(1, (l += 2.5 * t.movementY)));
			},
			r,
			s
		]
	);
}
class mt extends t {
	constructor(t) {
		super(), e(this, t, pt, ut, n, { x: 0, y: 1 });
	}
}
function ht(t) {
	let e, n, s, a, f;
	const u = t[4].default,
		p = r(u, t, t[3], null);
	return {
		c() {
			(e = h('form')), p && p.c(), this.h();
		},
		l(t) {
			e = l(t, 'FORM', { name: !0, class: !0 });
			var n = o(e);
			p && p.l(n), n.forEach(c), this.h();
		},
		h() {
			$(e, 'name', t[0]), $(e, 'class', (n = T(t[2][t[1]]) + ' svelte-7maxdl'));
		},
		m(n, r) {
			i(n, e, r), p && p.m(e, null), (s = !0), a || ((f = w(e, 'submit', A(t[5]))), (a = !0));
		},
		p(t, [r]) {
			p && p.p && 8 & r && y(p, u, t, t[3], r, null, null),
				(!s || 1 & r) && $(e, 'name', t[0]),
				(!s || (2 & r && n !== (n = T(t[2][t[1]]) + ' svelte-7maxdl'))) && $(e, 'class', n);
		},
		i(t) {
			s || (E(p, t), (s = !0));
		},
		o(t) {
			j(p, t), (s = !1);
		},
		d(t) {
			t && c(e), p && p.d(t), (a = !1), f();
		}
	};
}
function gt(t, e, n) {
	let { $$slots: s = {}, $$scope: r } = e,
		{ name: a = 'My form group' } = e,
		{ variante: l = 0 } = e;
	return (
		(t.$$set = (t) => {
			'name' in t && n(0, (a = t.name)),
				'variante' in t && n(1, (l = t.variante)),
				'$$scope' in t && n(3, (r = t.$$scope));
		}),
		[
			a,
			l,
			['Form_0', 'Form_1'],
			r,
			s,
			function (e) {
				C(t, e);
			}
		]
	);
}
class dt extends t {
	constructor(t) {
		super(), e(this, t, gt, ht, n, { name: 0, variante: 1 });
	}
}
function vt(t) {
	let e, n, s;
	return {
		c() {
			(e = h('input')), this.h();
		},
		l(t) {
			(e = l(t, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(e.value = t[0]),
				$(e, 'placeholder', t[1]),
				$(e, 'type', ''),
				$(e, 'name', ''),
				$(e, 'class', 'svelte-teykml');
		},
		m(r, a) {
			i(r, e, a), n || ((s = w(e, 'input', t[2])), (n = !0));
		},
		p(t, [n]) {
			1 & n && e.value !== t[0] && (e.value = t[0]), 2 & n && $(e, 'placeholder', t[1]);
		},
		i: H,
		o: H,
		d(t) {
			t && c(e), (n = !1), s();
		}
	};
}
function xt(t, e, n) {
	let { value: s = '' } = e,
		{ placeholder: r = '"...בראשית ברא אלהים"' } = e;
	return (
		(t.$$set = (t) => {
			'value' in t && n(0, (s = t.value)), 'placeholder' in t && n(1, (r = t.placeholder));
		}),
		[s, r, (t) => n(0, (s = t.target.value))]
	);
}
class wt extends t {
	constructor(t) {
		super(), e(this, t, xt, vt, n, { value: 0, placeholder: 1 });
	}
}
function yt(t, e, n) {
	const s = t.slice();
	return (s[13] = e[n]), s;
}
function bt(t, e, n) {
	const s = t.slice();
	return (s[16] = e[n]), s;
}
function Et(t, e, n) {
	const s = t.slice();
	return (s[19] = e[n]), s;
}
function jt(t) {
	let e;
	return {
		c() {
			(e = a('circle')), this.h();
		},
		l(t) {
			(e = l(t, 'circle', { cx: !0, cy: !0, r: !0, id: !0, fill: !0, stroke: !0, class: !0 }, 1)),
				o(e).forEach(c),
				this.h();
		},
		h() {
			$(e, 'cx', t[19].cx),
				$(e, 'cy', t[19].cy),
				$(e, 'r', t[19].r),
				$(e, 'id', t[19].id),
				$(e, 'fill', 'none'),
				$(e, 'stroke', 'black'),
				$(e, 'class', 'svelte-16jnjx2');
		},
		m(t, n) {
			i(t, e, n);
		},
		p: H,
		d(t) {
			t && c(e);
		}
	};
}
function kt(t) {
	let e,
		n = t[16].id + '';
	return {
		c() {
			e = L(n);
		},
		l(t) {
			e = P(t, n);
		},
		m(t, n) {
			i(t, e, n);
		},
		p: H,
		d(t) {
			t && c(e);
		}
	};
}
function Mt(t) {
	let e, n;
	return (
		(e = new mt({
			props: { x: t[16].xpos, y: t[16].ypos, $$slots: { default: [kt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				4194304 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function It(t) {
	let e,
		n = t[13] + '';
	return {
		c() {
			e = L(n);
		},
		l(t) {
			e = P(t, n);
		},
		m(t, n) {
			i(t, e, n);
		},
		p(t, s) {
			1 & s && n !== (n = t[13] + '') && N(e, n);
		},
		d(t) {
			t && c(e);
		}
	};
}
function zt(t) {
	let e, n;
	return (
		(e = new mt({ props: { x: Tt, y: At, $$slots: { default: [It] }, $$scope: { ctx: t } } })),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				4194305 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Dt(t) {
	let e,
		n,
		s,
		r,
		u,
		p = t[4],
		m = [];
	for (let a = 0; a < p.length; a += 1) m[a] = jt(Et(t, p, a));
	let h = t[5],
		g = [];
	for (let a = 0; a < h.length; a += 1) g[a] = Mt(bt(t, h, a));
	const d = (t) =>
		j(g[t], 1, 1, () => {
			g[t] = null;
		});
	let v = t[0],
		x = [];
	for (let a = 0; a < v.length; a += 1) x[a] = zt(yt(t, v, a));
	const w = (t) =>
		j(x[t], 1, 1, () => {
			x[t] = null;
		});
	return {
		c() {
			(e = a('svg')), (n = a('g'));
			for (let t = 0; t < m.length; t += 1) m[t].c();
			s = G();
			for (let t = 0; t < g.length; t += 1) g[t].c();
			r = G();
			for (let t = 0; t < x.length; t += 1) x[t].c();
			this.h();
		},
		l(t) {
			e = l(t, 'svg', { viewBox: !0, class: !0 }, 1);
			var a = o(e);
			n = l(a, 'g', { transform: !0, class: !0 }, 1);
			var $ = o(n);
			for (let e = 0; e < m.length; e += 1) m[e].l($);
			s = G();
			for (let e = 0; e < g.length; e += 1) g[e].l($);
			r = G();
			for (let e = 0; e < x.length; e += 1) x[e].l($);
			$.forEach(c), a.forEach(c), this.h();
		},
		h() {
			$(n, 'transform', 'translate(150,150) scale(0.7)'),
				$(n, 'class', 'svelte-16jnjx2'),
				$(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				$(e, 'class', 'svelte-16jnjx2');
		},
		m(a, l) {
			i(a, e, l), f(e, n);
			for (let t = 0; t < m.length; t += 1) m[t].m(n, null);
			f(n, s);
			for (let t = 0; t < g.length; t += 1) g[t].m(n, null);
			f(n, r);
			for (let t = 0; t < x.length; t += 1) x[t].m(n, null);
			t[10](e), (u = !0);
		},
		p(t, e) {
			if (16 & e) {
				let r;
				for (p = t[4], r = 0; r < p.length; r += 1) {
					const a = Et(t, p, r);
					m[r] ? m[r].p(a, e) : ((m[r] = jt(a)), m[r].c(), m[r].m(n, s));
				}
				for (; r < m.length; r += 1) m[r].d(1);
				m.length = p.length;
			}
			if (32 & e) {
				let s;
				for (h = t[5], s = 0; s < h.length; s += 1) {
					const a = bt(t, h, s);
					g[s] ? (g[s].p(a, e), E(g[s], 1)) : ((g[s] = Mt(a)), g[s].c(), E(g[s], 1), g[s].m(n, r));
				}
				for (S(), s = h.length; s < g.length; s += 1) d(s);
				V();
			}
			if (1 & e) {
				let s;
				for (v = t[0], s = 0; s < v.length; s += 1) {
					const r = yt(t, v, s);
					x[s]
						? (x[s].p(r, e), E(x[s], 1))
						: ((x[s] = zt(r)), x[s].c(), E(x[s], 1), x[s].m(n, null));
				}
				for (S(), s = v.length; s < x.length; s += 1) w(s);
				V();
			}
		},
		i(t) {
			if (!u) {
				for (let t = 0; t < h.length; t += 1) E(g[t]);
				for (let t = 0; t < v.length; t += 1) E(x[t]);
				u = !0;
			}
		},
		o(t) {
			g = g.filter(Boolean);
			for (let e = 0; e < g.length; e += 1) j(g[e]);
			x = x.filter(Boolean);
			for (let e = 0; e < x.length; e += 1) j(x[e]);
			u = !1;
		},
		d(n) {
			n && c(e), _(m, n), _(g, n), _(x, n), t[10](null);
		}
	};
}
function Lt(t) {
	let e, n, s, r, a;
	function l(e) {
		t[9](e);
	}
	let o = { placeholder: 'Your word' };
	return (
		void 0 !== t[1] && (o.value = t[1]),
		(e = new wt({ props: o })),
		F.push(() => O(e, 'value', l)),
		(r = new q({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				p(e.$$.fragment), (s = m()), p(r.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t), (s = d(t)), g(r.$$.fragment, t);
			},
			m(t, n) {
				v(e, t, n), i(t, s, n), v(r, t, n), (a = !0);
			},
			p(t, s) {
				const r = {};
				!n && 2 & s && ((n = !0), (r.value = t[1]), U(() => (n = !1))), e.$set(r);
			},
			i(t) {
				a || (E(e.$$.fragment, t), E(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				j(e.$$.fragment, t), j(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				k(e, t), t && c(s), k(r, t);
			}
		}
	);
}
function Pt(t) {
	let e, n, s, r, a;
	return (
		(n = new Y({
			props: {
				tipo: 3,
				variante: 7,
				title: 'Meta-Mapa +0+1234',
				subtitle: 'Escribe y ordena conceptos en el mapa +0+1234'
			}
		})),
		(r = new dt({ props: { variante: 1, $$slots: { default: [Lt] }, $$scope: { ctx: t } } })),
		r.$on('submit', t[6]),
		{
			c() {
				(e = h('div')), p(n.$$.fragment), (s = m()), p(r.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var a = o(e);
				g(n.$$.fragment, a), (s = d(a)), g(r.$$.fragment, a), a.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1'), $(e, 'class', 'svelte-16jnjx2');
			},
			m(t, l) {
				i(t, e, l), v(n, e, null), f(e, s), v(r, e, null), (a = !0);
			},
			p(t, e) {
				const n = {};
				4194306 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
			},
			i(t) {
				a || (E(n.$$.fragment, t), E(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				j(n.$$.fragment, t), j(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				t && c(e), k(n), k(r);
			}
		}
	);
}
function Bt(t) {
	let e;
	return {
		c() {
			e = L('Download svg');
		},
		l(t) {
			e = P(t, 'Download svg');
		},
		m(t, n) {
			i(t, e, n);
		},
		d(t) {
			t && c(e);
		}
	};
}
function Gt(t) {
	let e, n;
	return (
		(e = new W({
			props: { tipo: 3, variante: 6, $$slots: { default: [Bt] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[8]),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				4194304 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function St(t) {
	let e, n, s;
	return (
		(n = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [Gt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = h('div')), p(n.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var s = o(e);
				g(n.$$.fragment, s), s.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea2'), $(e, 'class', 'svelte-16jnjx2');
			},
			m(t, r) {
				i(t, e, r), v(n, e, null), (s = !0);
			},
			p(t, e) {
				const s = {};
				4194308 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
			},
			i(t) {
				s || (E(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				j(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && c(e), k(n);
			}
		}
	);
}
function Vt(t) {
	let e, n;
	return (
		(e = new Z({
			props: {
				variante: 0,
				$$slots: { subarea2: [St], subarea1: [Pt], default: [Dt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, [n]) {
				const s = {};
				4194311 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
let Tt = 0,
	At = 0;
function Ct(t, e, n) {
	let s = [],
		r = '',
		a = { width: 1e3, height: 1e3 },
		l = a.width / 4,
		o = a.width / 2;
	let c = null;
	const $ = (t, e = 'your-01234-map.svg') => {
		t.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		let n = t.outerHTML,
			s = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', n], {
				type: 'image/svg+xml;charset=utf-8'
			}),
			r = URL.createObjectURL(s),
			a = document.createElement('a');
		(a.href = r),
			(a.download = e),
			document.body.appendChild(a),
			a.click(),
			document.body.removeChild(a);
	};
	return [
		s,
		r,
		c,
		a,
		[
			{ id: 'circulogrande', cx: o, cy: o, r: o },
			{ id: 'circuloizda', cx: l, cy: o, r: l },
			{ id: 'circulodcha', cx: 3 * l, cy: o, r: l }
		],
		[
			{ id: 0, xpos: 0, ypos: 500 },
			{ id: 1, xpos: 500, ypos: 500 },
			{ id: 2, xpos: 750, ypos: 750 },
			{ id: 3, xpos: 750, ypos: 250 },
			{ id: 4, xpos: 1e3, ypos: 500 }
		],
		() => {
			n(0, (s = [...s, r]));
		},
		$,
		() => $(c),
		function (t) {
			(r = t), n(1, r);
		},
		function (t) {
			F[t ? 'unshift' : 'push'](() => {
				(c = t), n(2, c);
			});
		}
	];
}
class Ht extends t {
	constructor(t) {
		super(), e(this, t, Ct, Vt, n, {});
	}
}
function _t(t) {
	let e, n;
	const s = t[2].default,
		a = r(s, t, t[1], null);
	return {
		c() {
			(e = h('div')), a && a.c(), this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0 });
			var n = o(e);
			a && a.l(n), n.forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'Alert svelte-17yi7ov'), R(e, 'haserror', !t[0]);
		},
		m(t, s) {
			i(t, e, s), a && a.m(e, null), (n = !0);
		},
		p(t, [n]) {
			a && a.p && 2 & n && y(a, s, t, t[1], n, null, null), 1 & n && R(e, 'haserror', !t[0]);
		},
		i(t) {
			n || (E(a, t), (n = !0));
		},
		o(t) {
			j(a, t), (n = !1);
		},
		d(t) {
			t && c(e), a && a.d(t);
		}
	};
}
function Ft(t, e, n) {
	let { $$slots: s = {}, $$scope: r } = e,
		{ haserror: a = !1 } = e;
	return (
		(t.$$set = (t) => {
			'haserror' in t && n(0, (a = t.haserror)), '$$scope' in t && n(1, (r = t.$$scope));
		}),
		[a, r, s]
	);
}
class Ot extends t {
	constructor(t) {
		super(), e(this, t, Ft, _t, n, { haserror: 0 });
	}
}
function Ut(t) {
	let e, n, s, r, a;
	function l(e) {
		t[5](e);
	}
	let o = {};
	return (
		void 0 !== t[0] && (o.value = t[0]),
		(e = new wt({ props: o })),
		F.push(() => O(e, 'value', l)),
		(r = new q({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				p(e.$$.fragment), (s = m()), p(r.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t), (s = d(t)), g(r.$$.fragment, t);
			},
			m(t, n) {
				v(e, t, n), i(t, s, n), v(r, t, n), (a = !0);
			},
			p(t, s) {
				const a = {};
				!n && 1 & s && ((n = !0), (a.value = t[0]), U(() => (n = !1))), e.$set(a);
				const l = {};
				1 & s && (l.valorinput = t[0]), r.$set(l);
			},
			i(t) {
				a || (E(e.$$.fragment, t), E(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				j(e.$$.fragment, t), j(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				k(e, t), t && c(s), k(r, t);
			}
		}
	);
}
function Nt(t) {
	let e, n;
	return (
		(e = new Ot({ props: { $$slots: { default: [Rt] }, $$scope: { ctx: t } } })),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				516 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Rt(t) {
	let e;
	return {
		c() {
			e = L(t[2]);
		},
		l(n) {
			e = P(n, t[2]);
		},
		m(t, n) {
			i(t, e, n);
		},
		p(t, n) {
			4 & n && N(e, t[2]);
		},
		d(t) {
			t && c(e);
		}
	};
}
function qt(t) {
	let e;
	return {
		c() {
			e = L('Codex de Leningrado');
		},
		l(t) {
			e = P(t, 'Codex de Leningrado');
		},
		m(t, n) {
			i(t, e, n);
		},
		d(t) {
			t && c(e);
		}
	};
}
function Jt(t) {
	let e, n;
	return (
		(e = new W({
			props: {
				tipo: 2,
				variante: 6,
				href: 'https://tanach.us/Server.txt?Genesis*&content=Consonants',
				target: '_blank',
				$$slots: { default: [qt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				512 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Yt(t) {
	let e, n, s, r, a, u, x, w, y, b, M, I, z, D, B, G;
	(e = new Y({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(w = new dt({ props: { variante: 1, $$slots: { default: [Ut] }, $$scope: { ctx: t } } })),
		w.$on('submit', t[4]);
	let T = 1 == t[1] && Nt(t);
	return (
		(B = new Q({
			props: { tipo: 3, variante: 5, $$slots: { default: [Jt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				p(e.$$.fragment),
					(n = m()),
					(s = h('main')),
					(r = h('h2')),
					(a = L(t[3])),
					(u = m()),
					(x = h('div')),
					p(w.$$.fragment),
					(y = m()),
					T && T.c(),
					(b = m()),
					(M = h('footer')),
					(I = h('small')),
					(z = L('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					(D = m()),
					p(B.$$.fragment),
					this.h();
			},
			l($) {
				g(e.$$.fragment, $), (n = d($)), (s = l($, 'MAIN', { class: !0 }));
				var i = o(s);
				r = l(i, 'H2', { class: !0 });
				var f = o(r);
				(a = P(f, t[3])), f.forEach(c), (u = d(i)), (x = l(i, 'DIV', { class: !0 }));
				var p = o(x);
				g(w.$$.fragment, p),
					p.forEach(c),
					(y = d(i)),
					T && T.l(i),
					i.forEach(c),
					(b = d($)),
					(M = l($, 'FOOTER', { class: !0 }));
				var m = o(M);
				I = l(m, 'SMALL', { class: !0 });
				var h = o(I);
				(z = P(h, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					h.forEach(c),
					(D = d(m)),
					g(B.$$.fragment, m),
					m.forEach(c),
					this.h();
			},
			h() {
				$(r, 'class', 'result svelte-dg65zt'),
					$(x, 'class', 'position-form svelte-dg65zt'),
					$(s, 'class', 'svelte-dg65zt'),
					$(I, 'class', 'svelte-dg65zt'),
					$(M, 'class', 'svelte-dg65zt');
			},
			m(t, l) {
				v(e, t, l),
					i(t, n, l),
					i(t, s, l),
					f(s, r),
					f(r, a),
					f(s, u),
					f(s, x),
					v(w, x, null),
					f(s, y),
					T && T.m(s, null),
					i(t, b, l),
					i(t, M, l),
					f(M, I),
					f(I, z),
					f(M, D),
					v(B, M, null),
					(G = !0);
			},
			p(t, [e]) {
				(!G || 8 & e) && N(a, t[3]);
				const n = {};
				513 & e && (n.$$scope = { dirty: e, ctx: t }),
					w.$set(n),
					1 == t[1]
						? T
							? (T.p(t, e), 2 & e && E(T, 1))
							: ((T = Nt(t)), T.c(), E(T, 1), T.m(s, null))
						: T &&
						  (S(),
						  j(T, 1, 1, () => {
								T = null;
						  }),
						  V());
				const r = {};
				512 & e && (r.$$scope = { dirty: e, ctx: t }), B.$set(r);
			},
			i(t) {
				G || (E(e.$$.fragment, t), E(w.$$.fragment, t), E(T), E(B.$$.fragment, t), (G = !0));
			},
			o(t) {
				j(e.$$.fragment, t), j(w.$$.fragment, t), j(T), j(B.$$.fragment, t), (G = !1);
			},
			d(t) {
				k(e, t), t && c(n), t && c(s), k(w), T && T.d(), t && c(b), t && c(M), k(B);
			}
		}
	);
}
function Kt(t, e, n) {
	let s,
		r = '',
		a = !1,
		l = '',
		o = [];
	return (
		n(3, (s = 0)),
		[
			r,
			a,
			l,
			s,
			function () {
				n(1, (a = !1)), n(3, (s = 0)), n(0, r), (o = r.split('')), n(2, (l = ''));
				for (const t of o)
					'א' == t
						? n(3, (s += 1))
						: 'ב' == t
						? n(3, (s += 2))
						: 'ג' == t
						? n(3, (s += 3))
						: 'ד' == t
						? n(3, (s += 4))
						: 'ה' == t
						? n(3, (s += 5))
						: 'ו' == t
						? n(3, (s += 6))
						: 'ז' == t
						? n(3, (s += 7))
						: 'ח' == t
						? n(3, (s += 8))
						: 'ט' == t
						? n(3, (s += 9))
						: 'י' == t
						? n(3, (s += 10))
						: 'כ' == t
						? n(3, (s += 20))
						: 'ל' == t
						? n(3, (s += 30))
						: 'מ' == t
						? n(3, (s += 40))
						: 'ן' == t
						? n(3, (s += 50))
						: 'ס' == t
						? n(3, (s += 60))
						: 'ע' == t
						? n(3, (s += 70))
						: 'פ' == t
						? n(3, (s += 80))
						: 'צ' == t
						? n(3, (s += 90))
						: 'ק' == t
						? n(3, (s += 100))
						: 'ר' == t
						? n(3, (s += 200))
						: 'ש' == t
						? n(3, (s += 300))
						: 'ת' == t
						? n(3, (s += 400))
						: 'ך' == t
						? n(3, (s += 500))
						: 'ם' == t
						? n(3, (s += 600))
						: 'ן' == t
						? n(3, (s += 700))
						: 'ף' == t
						? n(3, (s += 800))
						: 'ץ' == t
						? n(3, (s += 900))
						: ' ' == t
						? n(3, (s += 0))
						: (n(1, (a = !0)),
						  n(1, (a = !0))
								? n(2, (l = 'Sólo contabilizan las consonantes hebreas.'))
								: (n(1, (a = !1)), n(2, (l = ''))));
				return s;
			},
			function (t) {
				(r = t), n(0, r);
			}
		]
	);
}
class Qt extends t {
	constructor(t) {
		super(), e(this, t, Kt, Yt, n, {});
	}
}
function Wt(t) {
	let e, n;
	return (
		(e = new Y({
			props: { tipo: 1, variante: 1, title: J[2].title, subtitle: J[2].subtitle, text: J[2].text }
		})),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: H,
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Xt(t) {
	let e, n;
	return (
		(e = new it({
			props: {
				title: 'La Divina Proporción',
				text:
					'<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>'
			}
		})),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: H,
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function Zt(t) {
	let e, n;
	return (
		(e = new Ht({})),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function te(t) {
	let e, n;
	return (
		(e = new Qt({})),
		{
			c() {
				p(e.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				j(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				k(e, t);
			}
		}
	);
}
function ee(t) {
	let e, n, s, r, a, l, o, $;
	return (
		(e = new K({
			props: { id: 'cover', variante: 3, $$slots: { default: [Wt] }, $$scope: { ctx: t } }
		})),
		(s = new K({
			props: {
				id: 'phi',
				variante: 2,
				bg_color: 'bgc_4',
				$$slots: { default: [Xt] },
				$$scope: { ctx: t }
			}
		})),
		(a = new K({
			props: {
				id: 't0t',
				variante: 0,
				bg_color: 'bgc_0',
				$$slots: { default: [Zt] },
				$$scope: { ctx: t }
			}
		})),
		(o = new K({
			props: { id: 'gematria', variante: 4, $$slots: { default: [te] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				p(e.$$.fragment),
					(n = m()),
					p(s.$$.fragment),
					(r = m()),
					p(a.$$.fragment),
					(l = m()),
					p(o.$$.fragment);
			},
			l(t) {
				g(e.$$.fragment, t),
					(n = d(t)),
					g(s.$$.fragment, t),
					(r = d(t)),
					g(a.$$.fragment, t),
					(l = d(t)),
					g(o.$$.fragment, t);
			},
			m(t, c) {
				v(e, t, c),
					i(t, n, c),
					v(s, t, c),
					i(t, r, c),
					v(a, t, c),
					i(t, l, c),
					v(o, t, c),
					($ = !0);
			},
			p(t, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: t }), s.$set(l);
				const c = {};
				1 & n && (c.$$scope = { dirty: n, ctx: t }), a.$set(c);
				const $ = {};
				1 & n && ($.$$scope = { dirty: n, ctx: t }), o.$set($);
			},
			i(t) {
				$ ||
					(E(e.$$.fragment, t),
					E(s.$$.fragment, t),
					E(a.$$.fragment, t),
					E(o.$$.fragment, t),
					($ = !0));
			},
			o(t) {
				j(e.$$.fragment, t),
					j(s.$$.fragment, t),
					j(a.$$.fragment, t),
					j(o.$$.fragment, t),
					($ = !1);
			},
			d(t) {
				k(e, t), t && c(n), k(s, t), t && c(r), k(a, t), t && c(l), k(o, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, ee, n, {});
	}
}
