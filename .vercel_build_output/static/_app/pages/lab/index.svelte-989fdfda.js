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
	e as h,
	q as d,
	l as g,
	r as v,
	a4 as x,
	H as y,
	O as w,
	a5 as b,
	w as E,
	x as k,
	y as M,
	K as I,
	a0 as D,
	a6 as L,
	a7 as P,
	t as j,
	b as z,
	R as B,
	k as S,
	C as V,
	D as G,
	I as T,
	a8 as A,
	F as C,
	n as H,
	J as F,
	T as O,
	U,
	V as N,
	h as R,
	G as _
} from '../../chunks/index-d91e1ed8.js';
import { c as q } from '../../chunks/coverData-76b1c622.js';
import { H as J, S as Y } from '../../chunks/Header-a9ed1c92.js';
import { L as K } from '../../chunks/List-23857782.js';
import { L as Q, G as W, B as X } from '../../chunks/ListItem-e194f349.js';
import { t as Z } from '../../chunks/index-c4bdeab8.js';
import { f as tt } from '../../chunks/index-65311448.js';
import '../../chunks/index-cc16b092.js';
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
				$(n, 'class', 'svelte-h9bm4d'),
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
			e = z(t, 'Play');
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
		(e = new Q({
			props: { tipo: 3, variante: 6, $$slots: { default: [at] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
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
				k(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function ot(t) {
	let e, n, D, L, j, z, B, S, V, G, T, A, C, H, F;
	s(t[10]), (e = new J({ props: { tipo: 3, variante: 6, title: t[0], subtitle: t[1] } }));
	const O = t[9].hasvideo,
		U = r(O, t, t[14], st),
		N =
			U ||
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
						$(n, 'class', 'svelte-h9bm4d'),
							$(e, 'viewBox', '0 0 200 200'),
							$(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							$(e, 'class', 'svelte-h9bm4d');
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
		(A = new K({
			props: { tipo: 3, variante: 5, $$slots: { default: [lt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				m(e.$$.fragment),
					(n = p()),
					(D = h('main')),
					(L = h('div')),
					N && N.c(),
					(j = p()),
					(z = h('div')),
					(B = h('div')),
					(S = h('input')),
					(V = p()),
					(G = h('input')),
					(T = p()),
					m(A.$$.fragment),
					this.h();
			},
			l(t) {
				d(e.$$.fragment, t), (n = g(t)), (D = l(t, 'MAIN', { class: !0 }));
				var s = o(D);
				L = l(s, 'DIV', { class: !0 });
				var r = o(L);
				N && N.l(r), r.forEach(c), (j = g(s)), (z = l(s, 'DIV', { class: !0 }));
				var a = o(z);
				B = l(a, 'DIV', { class: !0 });
				var $ = o(B);
				(S = l($, 'INPUT', { type: !0, step: !0, class: !0 })),
					(V = g($)),
					(G = l($, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					$.forEach(c),
					(T = g(a)),
					d(A.$$.fragment, a),
					a.forEach(c),
					s.forEach(c),
					this.h();
			},
			h() {
				$(L, 'class', 'BannerMedia svelte-h9bm4d'),
					$(S, 'type', 'number'),
					$(S, 'step', '0.001'),
					$(S, 'class', 'svelte-h9bm4d'),
					$(G, 'type', 'range'),
					$(G, 'min', 0),
					$(G, 'max', ct),
					$(G, 'class', 'svelte-h9bm4d'),
					$(B, 'class', 'controls svelte-h9bm4d'),
					$(z, 'class', 'PhiSvgText svelte-h9bm4d'),
					$(D, 'class', 'PhiSvg svelte-h9bm4d');
			},
			m(s, r) {
				v(e, s, r),
					i(s, n, r),
					i(s, D, r),
					f(D, L),
					N && N.m(L, null),
					f(D, j),
					f(D, z),
					f(z, B),
					f(B, S),
					x(S, t[2]),
					f(B, V),
					f(B, G),
					x(G, t[5]),
					f(z, T),
					v(A, z, null),
					(C = !0),
					H ||
						((F = [
							y(window, 'resize', t[10]),
							y(S, 'input', t[11]),
							y(G, 'change', t[12]),
							y(G, 'input', t[12])
						]),
						(H = !0));
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.title = t[0]),
					2 & n && (s.subtitle = t[1]),
					e.$set(s),
					U ? U.p && 16384 & n && w(U, O, t, t[14], n, nt, st) : N && N.p && 36 & n && N.p(t, n),
					4 & n && b(S.value) !== t[2] && x(S, t[2]),
					32 & n && x(G, t[5]);
				const r = {};
				16416 & n && (r.$$scope = { dirty: n, ctx: t }), A.$set(r);
			},
			i(t) {
				C || (E(e.$$.fragment, t), E(N, t), E(A.$$.fragment, t), (C = !0));
			},
			o(t) {
				k(e.$$.fragment, t), k(N, t), k(A.$$.fragment, t), (C = !1);
			},
			d(t) {
				M(e, t), t && c(n), t && c(D), N && N.d(t), M(A), (H = !1), I(F);
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
			(n = z(s, 'xxx')), s.forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'svelte-16ib9dm');
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
		m,
		p = t[2] && ft();
	const h = t[7].default,
		d = r(h, t, t[6], null);
	return {
		c() {
			(e = a('text')), p && p.c(), (n = S()), d && d.c(), this.h();
		},
		l(t) {
			e = l(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var s = o(e);
			p && p.l(s), (n = S()), d && d.l(s), s.forEach(c), this.h();
		},
		h() {
			$(e, 'x', t[0]),
				$(e, 'y', t[1]),
				$(e, 'font-size', '55'),
				$(e, 'class', 'draggable svelte-16ib9dm');
		},
		m(r, a) {
			i(r, e, a),
				p && p.m(e, null),
				f(e, n),
				d && d.m(e, null),
				(s = !0),
				u ||
					((m = [y(window, 'mouseup', t[4]), y(e, 'mousedown', t[3]), y(e, 'mousemove', t[5])]),
					(u = !0));
		},
		p(t, [r]) {
			t[2]
				? p
					? 4 & r && E(p, 1)
					: ((p = ft()), p.c(), E(p, 1), p.m(e, n))
				: p &&
				  (V(),
				  k(p, 1, 1, () => {
						p = null;
				  }),
				  G()),
				d && d.p && 64 & r && w(d, h, t, t[6], r, null, null),
				(!s || 1 & r) && $(e, 'x', t[0]),
				(!s || 2 & r) && $(e, 'y', t[1]);
		},
		i(t) {
			s || (E(p), E(d, t), (s = !0));
		},
		o(t) {
			k(p), k(d, t), (s = !1);
		},
		d(t) {
			t && c(e), p && p.d(), d && d.d(t), (u = !1), I(m);
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
function ht(t) {
	let e, n, s, a, f;
	const u = t[4].default,
		m = r(u, t, t[3], null);
	return {
		c() {
			(e = h('form')), m && m.c(), this.h();
		},
		l(t) {
			e = l(t, 'FORM', { name: !0, class: !0 });
			var n = o(e);
			m && m.l(n), n.forEach(c), this.h();
		},
		h() {
			$(e, 'name', t[0]), $(e, 'class', (n = T(t[2][t[1]]) + ' svelte-19wvlsx'));
		},
		m(n, r) {
			i(n, e, r), m && m.m(e, null), (s = !0), a || ((f = y(e, 'submit', A(t[5]))), (a = !0));
		},
		p(t, [r]) {
			m && m.p && 8 & r && w(m, u, t, t[3], r, null, null),
				(!s || 1 & r) && $(e, 'name', t[0]),
				(!s || (2 & r && n !== (n = T(t[2][t[1]]) + ' svelte-19wvlsx'))) && $(e, 'class', n);
		},
		i(t) {
			s || (E(m, t), (s = !0));
		},
		o(t) {
			k(m, t), (s = !1);
		},
		d(t) {
			t && c(e), m && m.d(t), (a = !1), f();
		}
	};
}
function dt(t, e, n) {
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
		super(), e(this, t, dt, ht, n, { name: 0, variante: 1 });
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
				$(e, 'class', 'svelte-vlfnu5');
		},
		m(r, a) {
			i(r, e, a), n || ((s = y(e, 'input', t[2])), (n = !0));
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
class yt extends t {
	constructor(t) {
		super(), e(this, t, xt, vt, n, { value: 0, placeholder: 1 });
	}
}
function wt(t, e, n) {
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
function kt(t) {
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
				$(e, 'class', 'svelte-17yb1y2');
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
			e = z(t, n);
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
				d(e.$$.fragment, t);
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
				k(e.$$.fragment, t), (n = !1);
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
			e = z(t, n);
		},
		m(t, n) {
			i(t, e, n);
		},
		p(t, s) {
			1 & s && n !== (n = t[13] + '') && R(e, n);
		},
		d(t) {
			t && c(e);
		}
	};
}
function Lt(t) {
	let e, n;
	return (
		(e = new pt({ props: { x: Tt, y: At, $$slots: { default: [Dt] }, $$scope: { ctx: t } } })),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
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
				k(e.$$.fragment, t), (n = !1);
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
	for (let a = 0; a < m.length; a += 1) p[a] = kt(Et(t, m, a));
	let h = t[5],
		d = [];
	for (let a = 0; a < h.length; a += 1) d[a] = It(bt(t, h, a));
	const g = (t) =>
		k(d[t], 1, 1, () => {
			d[t] = null;
		});
	let v = t[0],
		x = [];
	for (let a = 0; a < v.length; a += 1) x[a] = Lt(wt(t, v, a));
	const y = (t) =>
		k(x[t], 1, 1, () => {
			x[t] = null;
		});
	return {
		c() {
			(e = a('svg')), (n = a('g'));
			for (let t = 0; t < p.length; t += 1) p[t].c();
			s = S();
			for (let t = 0; t < d.length; t += 1) d[t].c();
			r = S();
			for (let t = 0; t < x.length; t += 1) x[t].c();
			this.h();
		},
		l(t) {
			e = l(t, 'svg', { viewBox: !0, class: !0 }, 1);
			var a = o(e);
			n = l(a, 'g', { transform: !0, class: !0 }, 1);
			var $ = o(n);
			for (let e = 0; e < p.length; e += 1) p[e].l($);
			s = S();
			for (let e = 0; e < d.length; e += 1) d[e].l($);
			r = S();
			for (let e = 0; e < x.length; e += 1) x[e].l($);
			$.forEach(c), a.forEach(c), this.h();
		},
		h() {
			$(n, 'transform', 'translate(150,150) scale(0.7)'),
				$(n, 'class', 'svelte-17yb1y2'),
				$(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				$(e, 'class', 'svelte-17yb1y2');
		},
		m(a, l) {
			i(a, e, l), f(e, n);
			for (let t = 0; t < p.length; t += 1) p[t].m(n, null);
			f(n, s);
			for (let t = 0; t < d.length; t += 1) d[t].m(n, null);
			f(n, r);
			for (let t = 0; t < x.length; t += 1) x[t].m(n, null);
			t[10](e), (u = !0);
		},
		p(t, e) {
			if (16 & e) {
				let r;
				for (m = t[4], r = 0; r < m.length; r += 1) {
					const a = Et(t, m, r);
					p[r] ? p[r].p(a, e) : ((p[r] = kt(a)), p[r].c(), p[r].m(n, s));
				}
				for (; r < p.length; r += 1) p[r].d(1);
				p.length = m.length;
			}
			if (32 & e) {
				let s;
				for (h = t[5], s = 0; s < h.length; s += 1) {
					const a = bt(t, h, s);
					d[s] ? (d[s].p(a, e), E(d[s], 1)) : ((d[s] = It(a)), d[s].c(), E(d[s], 1), d[s].m(n, r));
				}
				for (V(), s = h.length; s < d.length; s += 1) g(s);
				G();
			}
			if (1 & e) {
				let s;
				for (v = t[0], s = 0; s < v.length; s += 1) {
					const r = wt(t, v, s);
					x[s]
						? (x[s].p(r, e), E(x[s], 1))
						: ((x[s] = Lt(r)), x[s].c(), E(x[s], 1), x[s].m(n, null));
				}
				for (V(), s = v.length; s < x.length; s += 1) y(s);
				G();
			}
		},
		i(t) {
			if (!u) {
				for (let t = 0; t < h.length; t += 1) E(d[t]);
				for (let t = 0; t < v.length; t += 1) E(x[t]);
				u = !0;
			}
		},
		o(t) {
			d = d.filter(Boolean);
			for (let e = 0; e < d.length; e += 1) k(d[e]);
			x = x.filter(Boolean);
			for (let e = 0; e < x.length; e += 1) k(x[e]);
			u = !1;
		},
		d(n) {
			n && c(e), F(p, n), F(d, n), F(x, n), t[10](null);
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
		(e = new yt({ props: o })),
		O.push(() => U(e, 'value', l)),
		(r = new X({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				m(e.$$.fragment), (s = p()), m(r.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t), (s = g(t)), d(r.$$.fragment, t);
			},
			m(t, n) {
				v(e, t, n), i(t, s, n), v(r, t, n), (a = !0);
			},
			p(t, s) {
				const r = {};
				!n && 2 & s && ((n = !0), (r.value = t[1]), N(() => (n = !1))), e.$set(r);
			},
			i(t) {
				a || (E(e.$$.fragment, t), E(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				k(e.$$.fragment, t), k(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				M(e, t), t && c(s), M(r, t);
			}
		}
	);
}
function zt(t) {
	let e, n, s, r, a;
	return (
		(n = new J({
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
				(e = h('div')), m(n.$$.fragment), (s = p()), m(r.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var a = o(e);
				d(n.$$.fragment, a), (s = g(a)), d(r.$$.fragment, a), a.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1'), $(e, 'class', 'svelte-17yb1y2');
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
				k(n.$$.fragment, t), k(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				t && c(e), M(n), M(r);
			}
		}
	);
}
function Bt(t) {
	let e;
	return {
		c() {
			e = j('Download svg');
		},
		l(t) {
			e = z(t, 'Download svg');
		},
		m(t, n) {
			i(t, e, n);
		},
		d(t) {
			t && c(e);
		}
	};
}
function St(t) {
	let e, n;
	return (
		(e = new Q({
			props: { tipo: 3, variante: 6, $$slots: { default: [Bt] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[8]),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
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
				k(e.$$.fragment, t), (n = !1);
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
		(n = new K({
			props: { tipo: 3, variante: 5, $$slots: { default: [St] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = h('div')), m(n.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var s = o(e);
				d(n.$$.fragment, s), s.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea2'), $(e, 'class', 'svelte-17yb1y2');
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
				k(n.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && c(e), M(n);
			}
		}
	);
}
function Gt(t) {
	let e, n;
	return (
		(e = new W({
			props: {
				variante: 0,
				$$slots: { subarea2: [Vt], subarea1: [zt], default: [Pt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
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
				k(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
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
			O[t ? 'unshift' : 'push'](() => {
				(c = t), n(2, c);
			});
		}
	];
}
class Ht extends t {
	constructor(t) {
		super(), e(this, t, Ct, Gt, n, {});
	}
}
function Ft(t) {
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
			$(e, 'class', 'Alert svelte-9gn9fs'), _(e, 'haserror', !t[0]);
		},
		m(t, s) {
			i(t, e, s), a && a.m(e, null), (n = !0);
		},
		p(t, [n]) {
			a && a.p && 2 & n && w(a, s, t, t[1], n, null, null), 1 & n && _(e, 'haserror', !t[0]);
		},
		i(t) {
			n || (E(a, t), (n = !0));
		},
		o(t) {
			k(a, t), (n = !1);
		},
		d(t) {
			t && c(e), a && a.d(t);
		}
	};
}
function Ot(t, e, n) {
	let { $$slots: s = {}, $$scope: r } = e,
		{ haserror: a = !1 } = e;
	return (
		(t.$$set = (t) => {
			'haserror' in t && n(0, (a = t.haserror)), '$$scope' in t && n(1, (r = t.$$scope));
		}),
		[a, r, s]
	);
}
class Ut extends t {
	constructor(t) {
		super(), e(this, t, Ot, Ft, n, { haserror: 0 });
	}
}
function Nt(t) {
	let e, n, s, r, a;
	function l(e) {
		t[5](e);
	}
	let o = {};
	return (
		void 0 !== t[0] && (o.value = t[0]),
		(e = new yt({ props: o })),
		O.push(() => U(e, 'value', l)),
		(r = new X({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				m(e.$$.fragment), (s = p()), m(r.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t), (s = g(t)), d(r.$$.fragment, t);
			},
			m(t, n) {
				v(e, t, n), i(t, s, n), v(r, t, n), (a = !0);
			},
			p(t, s) {
				const a = {};
				!n && 1 & s && ((n = !0), (a.value = t[0]), N(() => (n = !1))), e.$set(a);
				const l = {};
				1 & s && (l.valorinput = t[0]), r.$set(l);
			},
			i(t) {
				a || (E(e.$$.fragment, t), E(r.$$.fragment, t), (a = !0));
			},
			o(t) {
				k(e.$$.fragment, t), k(r.$$.fragment, t), (a = !1);
			},
			d(t) {
				M(e, t), t && c(s), M(r, t);
			}
		}
	);
}
function Rt(t) {
	let e, n;
	return (
		(e = new Ut({ props: { $$slots: { default: [_t] }, $$scope: { ctx: t } } })),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
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
				k(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function _t(t) {
	let e;
	return {
		c() {
			e = j(t[2]);
		},
		l(n) {
			e = z(n, t[2]);
		},
		m(t, n) {
			i(t, e, n);
		},
		p(t, n) {
			4 & n && R(e, t[2]);
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
			e = j('Codex de Leningrado');
		},
		l(t) {
			e = z(t, 'Codex de Leningrado');
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
		(e = new Q({
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
				m(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
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
				k(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				M(e, t);
			}
		}
	);
}
function Yt(t) {
	let e, n, s, r, a, u, x, y, w, b, I, D, L, P, B, S;
	(e = new J({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(y = new gt({ props: { variante: 1, $$slots: { default: [Nt] }, $$scope: { ctx: t } } })),
		y.$on('submit', t[4]);
	let T = 1 == t[1] && Rt(t);
	return (
		(B = new K({
			props: { tipo: 3, variante: 5, $$slots: { default: [Jt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				m(e.$$.fragment),
					(n = p()),
					(s = h('main')),
					(r = h('h2')),
					(a = j(t[3])),
					(u = p()),
					(x = h('div')),
					m(y.$$.fragment),
					(w = p()),
					T && T.c(),
					(b = p()),
					(I = h('footer')),
					(D = h('small')),
					(L = j('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					(P = p()),
					m(B.$$.fragment),
					this.h();
			},
			l($) {
				d(e.$$.fragment, $), (n = g($)), (s = l($, 'MAIN', { class: !0 }));
				var i = o(s);
				r = l(i, 'H2', { class: !0 });
				var f = o(r);
				(a = z(f, t[3])), f.forEach(c), (u = g(i)), (x = l(i, 'DIV', { class: !0 }));
				var m = o(x);
				d(y.$$.fragment, m),
					m.forEach(c),
					(w = g(i)),
					T && T.l(i),
					i.forEach(c),
					(b = g($)),
					(I = l($, 'FOOTER', { class: !0 }));
				var p = o(I);
				D = l(p, 'SMALL', { class: !0 });
				var h = o(D);
				(L = z(h, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					h.forEach(c),
					(P = g(p)),
					d(B.$$.fragment, p),
					p.forEach(c),
					this.h();
			},
			h() {
				$(r, 'class', 'result svelte-dzpk3l'),
					$(x, 'class', 'position-form svelte-dzpk3l'),
					$(s, 'class', 'svelte-dzpk3l'),
					$(D, 'class', 'svelte-dzpk3l'),
					$(I, 'class', 'svelte-dzpk3l');
			},
			m(t, l) {
				v(e, t, l),
					i(t, n, l),
					i(t, s, l),
					f(s, r),
					f(r, a),
					f(s, u),
					f(s, x),
					v(y, x, null),
					f(s, w),
					T && T.m(s, null),
					i(t, b, l),
					i(t, I, l),
					f(I, D),
					f(D, L),
					f(I, P),
					v(B, I, null),
					(S = !0);
			},
			p(t, [e]) {
				(!S || 8 & e) && R(a, t[3]);
				const n = {};
				513 & e && (n.$$scope = { dirty: e, ctx: t }),
					y.$set(n),
					1 == t[1]
						? T
							? (T.p(t, e), 2 & e && E(T, 1))
							: ((T = Rt(t)), T.c(), E(T, 1), T.m(s, null))
						: T &&
						  (V(),
						  k(T, 1, 1, () => {
								T = null;
						  }),
						  G());
				const r = {};
				512 & e && (r.$$scope = { dirty: e, ctx: t }), B.$set(r);
			},
			i(t) {
				S || (E(e.$$.fragment, t), E(y.$$.fragment, t), E(T), E(B.$$.fragment, t), (S = !0));
			},
			o(t) {
				k(e.$$.fragment, t), k(y.$$.fragment, t), k(T), k(B.$$.fragment, t), (S = !1);
			},
			d(t) {
				M(e, t), t && c(n), t && c(s), M(y), T && T.d(), t && c(b), t && c(I), M(B);
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
		(e = new J({
			props: { tipo: 1, variante: 1, title: q[2].title, subtitle: q[2].subtitle, text: q[2].text }
		})),
		{
			c() {
				m(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: H,
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				k(e.$$.fragment, t), (n = !1);
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
				d(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: H,
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				k(e.$$.fragment, t), (n = !1);
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
				d(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				k(e.$$.fragment, t), (n = !1);
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
				d(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			i(t) {
				n || (E(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				k(e.$$.fragment, t), (n = !1);
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
		(e = new Y({
			props: { id: 'cover', variante: 3, $$slots: { default: [Wt] }, $$scope: { ctx: t } }
		})),
		(s = new Y({
			props: {
				id: 'phi',
				variante: 2,
				bg_color: 4,
				$$slots: { default: [Xt] },
				$$scope: { ctx: t }
			}
		})),
		(a = new Y({
			props: {
				id: 't0t',
				variante: 0,
				bg_color: 0,
				$$slots: { default: [Zt] },
				$$scope: { ctx: t }
			}
		})),
		(o = new Y({
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
				d(e.$$.fragment, t),
					(n = g(t)),
					d(s.$$.fragment, t),
					(r = g(t)),
					d(a.$$.fragment, t),
					(l = g(t)),
					d(o.$$.fragment, t);
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
				k(e.$$.fragment, t),
					k(s.$$.fragment, t),
					k(a.$$.fragment, t),
					k(o.$$.fragment, t),
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
