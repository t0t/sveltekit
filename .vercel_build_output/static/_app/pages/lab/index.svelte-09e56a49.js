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
	p as m,
	j as p,
	e as d,
	q as h,
	l as g,
	r as v,
	a4 as x,
	H as w,
	O as y,
	a5 as b,
	w as k,
	x as E,
	y as M,
	K as I,
	a0 as D,
	a6 as L,
	a7 as P,
	t as j,
	b as B,
	R as S,
	k as G,
	C as V,
	D as T,
	I as q,
	a8 as A,
	F as C,
	n as H,
	J as _,
	T as z,
	U as F,
	V as O,
	h as U,
	G as N
} from '../../chunks/index-d91e1ed8.js';
import { G as R, B as J, c as Y } from '../../chunks/Grid-86dcf0b4.js';
import { H as K, S as Q } from '../../chunks/Header-cc4c0be9.js';
import { L as W, a as X } from '../../chunks/ListItem-800c4c59.js';
import { t as Z } from '../../chunks/index-c4bdeab8.js';
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
				$(n, 'class', 'svelte-atkt6d'),
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
			e = j('Play');
		},
		l(t) {
			e = B(t, 'Play');
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
		(e = new X({
			props: { tipo: 3, variante: 6, $$slots: { default: [at] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				16384 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function ot(t) {
	let e, n, D, L, j, B, S, G, V, T, q, A, C, H, _;
	s(t[10]), (e = new K({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } }));
	const z = t[9].hasvideo,
		F = r(z, t, t[14], st),
		O =
			F ||
			(function (t) {
				let e,
					n,
					s = [],
					r = new Map(),
					m = { length: t[5] };
				const p = (t) => t[19];
				for (let a = 0; a < m.length; a += 1) {
					let e = et(t, m, a),
						n = p(e);
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
						$(n, 'class', 'svelte-atkt6d'),
							$(e, 'viewBox', '0 0 200 200'),
							$(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							$(e, 'class', 'svelte-atkt6d');
					},
					m(t, r) {
						i(t, e, r), f(e, n);
						for (let e = 0; e < s.length; e += 1) s[e].m(n, null);
					},
					p(t, e) {
						100 & e && ((m = { length: t[5] }), (s = u(s, e, p, 1, t, m, r, n, P, rt, null, et)));
					},
					d(t) {
						t && c(e);
						for (let e = 0; e < s.length; e += 1) s[e].d();
					}
				};
			})(t);
	return (
		(A = new W({
			props: { tipo: 3, variante: 5, $$slots: { default: [lt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				m(e.$$.fragment),
					(n = p()),
					(D = d('main')),
					(L = d('div')),
					O && O.c(),
					(j = p()),
					(B = d('div')),
					(S = d('div')),
					(G = d('input')),
					(V = p()),
					(T = d('input')),
					(q = p()),
					m(A.$$.fragment),
					this.h();
			},
			l(t) {
				h(e.$$.fragment, t), (n = g(t)), (D = l(t, 'MAIN', { class: !0 }));
				var s = o(D);
				L = l(s, 'DIV', { class: !0 });
				var r = o(L);
				O && O.l(r), r.forEach(c), (j = g(s)), (B = l(s, 'DIV', { class: !0 }));
				var a = o(B);
				S = l(a, 'DIV', { class: !0 });
				var $ = o(S);
				(G = l($, 'INPUT', { type: !0, step: !0, class: !0 })),
					(V = g($)),
					(T = l($, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					$.forEach(c),
					(q = g(a)),
					h(A.$$.fragment, a),
					a.forEach(c),
					s.forEach(c),
					this.h();
			},
			h() {
				$(L, 'class', 'BannerMedia svelte-atkt6d'),
					$(G, 'type', 'number'),
					$(G, 'step', '0.001'),
					$(G, 'class', 'svelte-atkt6d'),
					$(T, 'type', 'range'),
					$(T, 'min', 0),
					$(T, 'max', ct),
					$(T, 'class', 'svelte-atkt6d'),
					$(S, 'class', 'controls svelte-atkt6d'),
					$(B, 'class', 'PhiSvgText svelte-atkt6d'),
					$(D, 'class', 'PhiSvg svelte-atkt6d');
			},
			m(s, r) {
				v(e, s, r),
					i(s, n, r),
					i(s, D, r),
					f(D, L),
					O && O.m(L, null),
					f(D, j),
					f(D, B),
					f(B, S),
					f(S, G),
					x(G, t[2]),
					f(S, V),
					f(S, T),
					x(T, t[5]),
					f(B, q),
					v(A, B, null),
					(C = !0),
					H ||
						((_ = [
							w(window, 'resize', t[10]),
							w(G, 'input', t[11]),
							w(T, 'change', t[12]),
							w(T, 'input', t[12])
						]),
						(H = !0));
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.title = t[0]),
					2 & n && (s.subtitle = t[1]),
					e.$set(s),
					F ? F.p && 16384 & n && y(F, z, t, t[14], n, nt, st) : O && O.p && 36 & n && O.p(t, n),
					4 & n && b(G.value) !== t[2] && x(G, t[2]),
					32 & n && x(T, t[5]);
				const r = {};
				16416 & n && (r.$$scope = { dirty: n, ctx: t }), A.$set(r);
			},
			i(t) {
				C || (k(e.$$.fragment, t), k(O, t), k(A.$$.fragment, t), (C = !0));
			},
			o(t) {
				E(e.$$.fragment, t), E(O, t), E(A.$$.fragment, t), (C = !1);
			},
			d(t) {
				M(e, t), t && c(n), t && c(D), O && O.d(t), M(A), (H = !1), I(_);
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
		f = Z(0, { duration: 500, interpolate: (t, e) => (n) => Math.round((e - t) * n + t) });
	D(t, f, (t) => n(5, (s = t)));
	let { variante: u = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && n(0, (c = t.title)),
				'text' in t && n(1, ($ = t.text)),
				'variante' in t && n(8, (u = t.variante)),
				'$$scope' in t && n(14, (o = t.$$scope));
		}),
		L(f, (s = ct), s),
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
				L(f, (s = s > 0 ? 0 : ct), s);
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
			(e = a('div')), (n = j('xxx')), this.h();
		},
		l(t) {
			e = l(t, 'div', { class: !0 }, 1);
			var s = o(e);
			(n = B(s, 'xxx')), s.forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'svelte-l99vbu');
		},
		m(t, s) {
			i(t, e, s), f(e, n), (u = !0);
		},
		i(t) {
			u ||
				(s(() => {
					r || (r = S(e, tt, {}, !0)), r.run(1);
				}),
				(u = !0));
		},
		o(t) {
			r || (r = S(e, tt, {}, !1)), r.run(0), (u = !1);
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
		m,
		p = t[2] && ft();
	const d = t[7].default,
		h = r(d, t, t[6], null);
	return {
		c() {
			(e = a('text')), p && p.c(), (n = G()), h && h.c(), this.h();
		},
		l(t) {
			e = l(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var s = o(e);
			p && p.l(s), (n = G()), h && h.l(s), s.forEach(c), this.h();
		},
		h() {
			$(e, 'x', t[0]),
				$(e, 'y', t[1]),
				$(e, 'font-size', '55'),
				$(e, 'class', 'draggable svelte-l99vbu');
		},
		m(r, a) {
			i(r, e, a),
				p && p.m(e, null),
				f(e, n),
				h && h.m(e, null),
				(s = !0),
				u ||
					((m = [w(window, 'mouseup', t[4]), w(e, 'mousedown', t[3]), w(e, 'mousemove', t[5])]),
					(u = !0));
		},
		p(t, [r]) {
			t[2]
				? p
					? 4 & r && k(p, 1)
					: ((p = ft()), p.c(), k(p, 1), p.m(e, n))
				: p &&
				  (V(),
				  E(p, 1, 1, () => {
						p = null;
				  }),
				  T()),
				h && h.p && 64 & r && y(h, d, t, t[6], r, null, null),
				(!s || 1 & r) && $(e, 'x', t[0]),
				(!s || 2 & r) && $(e, 'y', t[1]);
		},
		i(t) {
			s || (k(p), k(h, t), (s = !0));
		},
		o(t) {
			E(p), E(h, t), (s = !1);
		},
		d(t) {
			t && c(e), p && p.d(), h && h.d(t), (u = !1), I(m);
		}
	};
}
function mt(t, e, n) {
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
class pt extends t {
	constructor(t) {
		super(), e(this, t, mt, ut, n, { x: 0, y: 1 });
	}
}
function dt(t) {
	let e, n, s, a, f;
	const u = t[4].default,
		m = r(u, t, t[3], null);
	return {
		c() {
			(e = d('form')), m && m.c(), this.h();
		},
		l(t) {
			e = l(t, 'FORM', { name: !0, class: !0 });
			var n = o(e);
			m && m.l(n), n.forEach(c), this.h();
		},
		h() {
			$(e, 'name', t[0]), $(e, 'class', (n = q(t[2][t[1]]) + ' svelte-14e1klt'));
		},
		m(n, r) {
			i(n, e, r), m && m.m(e, null), (s = !0), a || ((f = w(e, 'submit', A(t[5]))), (a = !0));
		},
		p(t, [r]) {
			m && m.p && 8 & r && y(m, u, t, t[3], r, null, null),
				(!s || 1 & r) && $(e, 'name', t[0]),
				(!s || (2 & r && n !== (n = q(t[2][t[1]]) + ' svelte-14e1klt'))) && $(e, 'class', n);
		},
		i(t) {
			s || (k(m, t), (s = !0));
		},
		o(t) {
			E(m, t), (s = !1);
		},
		d(t) {
			t && c(e), m && m.d(t), (a = !1), f();
		}
	};
}
function ht(t, e, n) {
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
class gt extends t {
	constructor(t) {
		super(), e(this, t, ht, dt, n, { name: 0, variante: 1 });
	}
}
function vt(t) {
	let e, n, s;
	return {
		c() {
			(e = d('input')), this.h();
		},
		l(t) {
			(e = l(t, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(e.value = t[0]),
				$(e, 'placeholder', t[1]),
				$(e, 'type', ''),
				$(e, 'name', ''),
				$(e, 'class', 'svelte-1bpgw7h');
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
function kt(t, e, n) {
	const s = t.slice();
	return (s[19] = e[n]), s;
}
function Et(t) {
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
				$(e, 'class', 'svelte-16cwkmy');
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
	let e,
		n = t[16].id + '';
	return {
		c() {
			e = j(n);
		},
		l(t) {
			e = B(t, n);
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
function It(t) {
	let e, n;
	return (
		(e = new pt({
			props: { x: t[16].xpos, y: t[16].ypos, $$slots: { default: [Mt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				4194304 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function Dt(t) {
	let e,
		n = t[13] + '';
	return {
		c() {
			e = j(n);
		},
		l(t) {
			e = B(t, n);
		},
		m(t, n) {
			i(t, e, n);
		},
		p(t, s) {
			1 & s && n !== (n = t[13] + '') && U(e, n);
		},
		d(t) {
			t && c(e);
		}
	};
}
function Lt(t) {
	let e, n;
	return (
		(e = new pt({ props: { x: qt, y: At, $$slots: { default: [Dt] }, $$scope: { ctx: t } } })),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				4194305 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function Pt(t) {
	let e,
		n,
		s,
		r,
		u,
		m = t[4],
		p = [];
	for (let a = 0; a < m.length; a += 1) p[a] = Et(kt(t, m, a));
	let d = t[5],
		h = [];
	for (let a = 0; a < d.length; a += 1) h[a] = It(bt(t, d, a));
	const g = (t) =>
		E(h[t], 1, 1, () => {
			h[t] = null;
		});
	let v = t[0],
		x = [];
	for (let a = 0; a < v.length; a += 1) x[a] = Lt(yt(t, v, a));
	const w = (t) =>
		E(x[t], 1, 1, () => {
			x[t] = null;
		});
	return {
		c() {
			(e = a('svg')), (n = a('g'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			s = G();
			for (let t = 0; t < h.length; t += 1) h[t].c();
			r = G();
			for (let t = 0; t < x.length; t += 1) x[t].c();
			this.h();
		},
		l(t) {
			e = l(t, 'svg', { viewBox: !0, class: !0 }, 1);
			var a = o(e);
			n = l(a, 'g', { transform: !0, class: !0 }, 1);
			var $ = o(n);
			for (let e = 0; e < p.length; e += 1) p[e].l($);
			s = G();
			for (let e = 0; e < h.length; e += 1) h[e].l($);
			r = G();
			for (let e = 0; e < x.length; e += 1) x[e].l($);
			$.forEach(c), a.forEach(c), this.h();
		},
		h() {
			$(n, 'transform', 'translate(150,150) scale(0.7)'),
				$(n, 'class', 'svelte-16cwkmy'),
				$(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				$(e, 'class', 'svelte-16cwkmy');
		},
		m(a, l) {
			i(a, e, l), f(e, n);
			for (let t = 0; t < p.length; t += 1) p[t].m(n, null);
			f(n, s);
			for (let t = 0; t < h.length; t += 1) h[t].m(n, null);
			f(n, r);
			for (let t = 0; t < x.length; t += 1) x[t].m(n, null);
			t[10](e), (u = !0);
		},
		p(t, e) {
			if (16 & e) {
				let r;
				for (m = t[4], r = 0; r < m.length; r += 1) {
					const a = kt(t, m, r);
					p[r] ? p[r].p(a, e) : ((p[r] = Et(a)), p[r].c(), p[r].m(n, s));
				}
				for (; r < p.length; r += 1) p[r].d(1);
				p.length = m.length;
			}
			if (32 & e) {
				let s;
				for (d = t[5], s = 0; s < d.length; s += 1) {
					const a = bt(t, d, s);
					h[s] ? (h[s].p(a, e), k(h[s], 1)) : ((h[s] = It(a)), h[s].c(), k(h[s], 1), h[s].m(n, r));
				}
				for (V(), s = d.length; s < h.length; s += 1) g(s);
				T();
			}
			if (1 & e) {
				let s;
				for (v = t[0], s = 0; s < v.length; s += 1) {
					const r = yt(t, v, s);
					x[s]
						? (x[s].p(r, e), k(x[s], 1))
						: ((x[s] = Lt(r)), x[s].c(), k(x[s], 1), x[s].m(n, null));
				}
				for (V(), s = v.length; s < x.length; s += 1) w(s);
				T();
			}
		},
		i(t) {
			if (!u) {
				for (let t = 0; t < d.length; t += 1) k(h[t]);
				for (let t = 0; t < v.length; t += 1) k(x[t]);
				u = !0;
			}
		},
		o(t) {
			h = h.filter(Boolean);
			for (let e = 0; e < h.length; e += 1) E(h[e]);
			x = x.filter(Boolean);
			for (let e = 0; e < x.length; e += 1) E(x[e]);
			u = !1;
		},
		d(n) {
			n && c(e), _(p, n), _(h, n), _(x, n), t[10](null);
		}
	};
}
function jt(t) {
	let e, n, s, r, a;
	function l(e) {
		t[9](e);
	}
	let o = { placeholder: 'Your word' };
	return (
		void 0 !== t[1] && (o.value = t[1]),
		(e = new wt({ props: o })),
		z.push(() => F(e, 'value', l)),
		(r = new J({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				m(e.$$.fragment), (s = p()), m(r.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t), (s = g(t)), h(r.$$.fragment, t);
			},
			m(t, n) {
				v(e, t, n), i(t, s, n), v(r, t, n), (a = !0);
			},
			p(t, s) {
				const r = {};
				!n && 2 & s && ((n = !0), (r.value = t[1]), O(() => (n = !1))), e.$set(r);
			},
			i(t) {
				a || (k(e.$$.fragment, t), k(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				E(e.$$.fragment, t), E(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				M(e, t), t && c(s), M(r, t);
			}
		}
	);
}
function Bt(t) {
	let e, n, s, r, a;
	return (
		(n = new K({
			props: {
				tipo: 3,
				variante: 7,
				title: 'Meta-Mapa +0+1234',
				subtitle: 'Escribe y ordena conceptos en el mapa +0+1234'
			}
		})),
		(r = new gt({ props: { variante: 1, $$slots: { default: [jt] }, $$scope: { ctx: t } } })),
		r.$on('submit', t[6]),
		{
			c() {
				(e = d('div')), m(n.$$.fragment), (s = p()), m(r.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var a = o(e);
				h(n.$$.fragment, a), (s = g(a)), h(r.$$.fragment, a), a.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1'), $(e, 'class', 'svelte-16cwkmy');
			},
			m(t, l) {
				i(t, e, l), v(n, e, null), f(e, s), v(r, e, null), (a = !0);
			},
			p(t, e) {
				const n = {};
				4194306 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
			},
			i(t) {
				a || (k(n.$$.fragment, t), k(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				E(n.$$.fragment, t), E(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				t && c(e), M(n), M(r);
			}
		}
	);
}
function St(t) {
	let e;
	return {
		c() {
			e = j('Download svg');
		},
		l(t) {
			e = B(t, 'Download svg');
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
		(e = new X({
			props: { tipo: 3, variante: 6, $$slots: { default: [St] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[8]),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				4194304 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function Vt(t) {
	let e, n, s;
	return (
		(n = new W({
			props: { tipo: 3, variante: 5, $$slots: { default: [Gt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = d('div')), m(n.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var s = o(e);
				h(n.$$.fragment, s), s.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea2'), $(e, 'class', 'svelte-16cwkmy');
			},
			m(t, r) {
				i(t, e, r), v(n, e, null), (s = !0);
			},
			p(t, e) {
				const s = {};
				4194308 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s);
			},
			i(t) {
				s || (k(n.$$.fragment, t), (s = !0));
			},
			o(t) {
				E(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && c(e), M(n);
			}
		}
	);
}
function Tt(t) {
	let e, n;
	return (
		(e = new R({
			props: {
				variante: 0,
				$$slots: { subarea2: [Vt], subarea1: [Bt], default: [Pt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, [n]) {
				const s = {};
				4194311 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
let qt = 0,
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
			z[t ? 'unshift' : 'push'](() => {
				(c = t), n(2, c);
			});
		}
	];
}
class Ht extends t {
	constructor(t) {
		super(), e(this, t, Ct, Tt, n, {});
	}
}
function _t(t) {
	let e, n;
	const s = t[2].default,
		a = r(s, t, t[1], null);
	return {
		c() {
			(e = d('div')), a && a.c(), this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0 });
			var n = o(e);
			a && a.l(n), n.forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'Alert svelte-10s4zdn'), N(e, 'haserror', !t[0]);
		},
		m(t, s) {
			i(t, e, s), a && a.m(e, null), (n = !0);
		},
		p(t, [n]) {
			a && a.p && 2 & n && y(a, s, t, t[1], n, null, null), 1 & n && N(e, 'haserror', !t[0]);
		},
		i(t) {
			n || (k(a, t), (n = !0));
		},
		o(t) {
			E(a, t), (n = !1);
		},
		d(t) {
			t && c(e), a && a.d(t);
		}
	};
}
function zt(t, e, n) {
	let { $$slots: s = {}, $$scope: r } = e,
		{ haserror: a = !1 } = e;
	return (
		(t.$$set = (t) => {
			'haserror' in t && n(0, (a = t.haserror)), '$$scope' in t && n(1, (r = t.$$scope));
		}),
		[a, r, s]
	);
}
class Ft extends t {
	constructor(t) {
		super(), e(this, t, zt, _t, n, { haserror: 0 });
	}
}
function Ot(t) {
	let e, n, s, r, a;
	function l(e) {
		t[5](e);
	}
	let o = {};
	return (
		void 0 !== t[0] && (o.value = t[0]),
		(e = new wt({ props: o })),
		z.push(() => F(e, 'value', l)),
		(r = new J({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				m(e.$$.fragment), (s = p()), m(r.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t), (s = g(t)), h(r.$$.fragment, t);
			},
			m(t, n) {
				v(e, t, n), i(t, s, n), v(r, t, n), (a = !0);
			},
			p(t, s) {
				const a = {};
				!n && 1 & s && ((n = !0), (a.value = t[0]), O(() => (n = !1))), e.$set(a);
				const l = {};
				1 & s && (l.valorinput = t[0]), r.$set(l);
			},
			i(t) {
				a || (k(e.$$.fragment, t), k(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				E(e.$$.fragment, t), E(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				M(e, t), t && c(s), M(r, t);
			}
		}
	);
}
function Ut(t) {
	let e, n;
	return (
		(e = new Ft({ props: { $$slots: { default: [Nt] }, $$scope: { ctx: t } } })),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				516 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function Nt(t) {
	let e;
	return {
		c() {
			e = j(t[2]);
		},
		l(n) {
			e = B(n, t[2]);
		},
		m(t, n) {
			i(t, e, n);
		},
		p(t, n) {
			4 & n && U(e, t[2]);
		},
		d(t) {
			t && c(e);
		}
	};
}
function Rt(t) {
	let e;
	return {
		c() {
			e = j('Codex de Leningrado');
		},
		l(t) {
			e = B(t, 'Codex de Leningrado');
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
		(e = new X({
			props: {
				tipo: 2,
				variante: 6,
				href: 'https://tanach.us/Server.txt?Genesis*&content=Consonants',
				target: '_blank',
				$$slots: { default: [Rt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p(t, n) {
				const s = {};
				512 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function Yt(t) {
	let e, n, s, r, a, u, x, w, y, b, I, D, L, P, S, G;
	(e = new K({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(w = new gt({ props: { variante: 1, $$slots: { default: [Ot] }, $$scope: { ctx: t } } })),
		w.$on('submit', t[4]);
	let q = 1 == t[1] && Ut(t);
	return (
		(S = new W({
			props: { tipo: 3, variante: 5, $$slots: { default: [Jt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				m(e.$$.fragment),
					(n = p()),
					(s = d('main')),
					(r = d('h2')),
					(a = j(t[3])),
					(u = p()),
					(x = d('div')),
					m(w.$$.fragment),
					(y = p()),
					q && q.c(),
					(b = p()),
					(I = d('footer')),
					(D = d('small')),
					(L = j('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					(P = p()),
					m(S.$$.fragment),
					this.h();
			},
			l($) {
				h(e.$$.fragment, $), (n = g($)), (s = l($, 'MAIN', { class: !0 }));
				var i = o(s);
				r = l(i, 'H2', { class: !0 });
				var f = o(r);
				(a = B(f, t[3])), f.forEach(c), (u = g(i)), (x = l(i, 'DIV', { class: !0 }));
				var m = o(x);
				h(w.$$.fragment, m),
					m.forEach(c),
					(y = g(i)),
					q && q.l(i),
					i.forEach(c),
					(b = g($)),
					(I = l($, 'FOOTER', { class: !0 }));
				var p = o(I);
				D = l(p, 'SMALL', { class: !0 });
				var d = o(D);
				(L = B(d, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					d.forEach(c),
					(P = g(p)),
					h(S.$$.fragment, p),
					p.forEach(c),
					this.h();
			},
			h() {
				$(r, 'class', 'result svelte-1vqp5td'),
					$(x, 'class', 'position-form svelte-1vqp5td'),
					$(s, 'class', 'svelte-1vqp5td'),
					$(D, 'class', 'svelte-1vqp5td'),
					$(I, 'class', 'svelte-1vqp5td');
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
					q && q.m(s, null),
					i(t, b, l),
					i(t, I, l),
					f(I, D),
					f(D, L),
					f(I, P),
					v(S, I, null),
					(G = !0);
			},
			p(t, [e]) {
				(!G || 8 & e) && U(a, t[3]);
				const n = {};
				513 & e && (n.$$scope = { dirty: e, ctx: t }),
					w.$set(n),
					1 == t[1]
						? q
							? (q.p(t, e), 2 & e && k(q, 1))
							: ((q = Ut(t)), q.c(), k(q, 1), q.m(s, null))
						: q &&
						  (V(),
						  E(q, 1, 1, () => {
								q = null;
						  }),
						  T());
				const r = {};
				512 & e && (r.$$scope = { dirty: e, ctx: t }), S.$set(r);
			},
			i(t) {
				G || (k(e.$$.fragment, t), k(w.$$.fragment, t), k(q), k(S.$$.fragment, t), (G = !0));
			},
			o(t) {
				E(e.$$.fragment, t), E(w.$$.fragment, t), E(q), E(S.$$.fragment, t), (G = !1);
			},
			d(t) {
				M(e, t), t && c(n), t && c(s), M(w), q && q.d(), t && c(b), t && c(I), M(S);
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
		(e = new K({
			props: { tipo: 1, variante: 1, title: Y[2].title, subtitle: Y[2].subtitle, text: Y[2].text }
		})),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: H,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
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
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: H,
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
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
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
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
				m(e.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			i(t) {
				n || (k(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				E(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function ee(t) {
	let e, n, s, r, a, l, o, $;
	return (
		(e = new Q({
			props: { id: 'cover', variante: 3, $$slots: { default: [Wt] }, $$scope: { ctx: t } }
		})),
		(s = new Q({
			props: {
				id: 'phi',
				variante: 2,
				bg_color: 'bggrey_4',
				$$slots: { default: [Xt] },
				$$scope: { ctx: t }
			}
		})),
		(a = new Q({
			props: {
				id: 't0t',
				variante: 0,
				bg_color: 'bggrey_0',
				$$slots: { default: [Zt] },
				$$scope: { ctx: t }
			}
		})),
		(o = new Q({
			props: { id: 'gematria', variante: 4, $$slots: { default: [te] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				m(e.$$.fragment),
					(n = p()),
					m(s.$$.fragment),
					(r = p()),
					m(a.$$.fragment),
					(l = p()),
					m(o.$$.fragment);
			},
			l(t) {
				h(e.$$.fragment, t),
					(n = g(t)),
					h(s.$$.fragment, t),
					(r = g(t)),
					h(a.$$.fragment, t),
					(l = g(t)),
					h(o.$$.fragment, t);
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
					(k(e.$$.fragment, t),
					k(s.$$.fragment, t),
					k(a.$$.fragment, t),
					k(o.$$.fragment, t),
					($ = !0));
			},
			o(t) {
				E(e.$$.fragment, t),
					E(s.$$.fragment, t),
					E(a.$$.fragment, t),
					E(o.$$.fragment, t),
					($ = !1);
			},
			d(t) {
				M(e, t), t && c(n), M(s, t), t && c(r), M(a, t), t && c(l), M(o, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, ee, n, {});
	}
}
